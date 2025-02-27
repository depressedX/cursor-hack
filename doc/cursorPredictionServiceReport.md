
`getAndShowNextPrediction`

```js
async getAndShowNextPrediction({
    editor,
    triggerCppCallback,
    getLinterErrors,
    source,
    cppSuggestionRange,
}) {
    // 定期重新加载光标预测配置
    await this.periodicallyReloadCursorPredictionConfig();
    console.log("[CURSOR PREDICTION] createPrediction: called");

    // 检查是否启用光标预测
    if (!this.isCursorPredictionEnabled() || this.isClearing) {
        console.log("[CURSOR PREDICTION] createPrediction: not enabled or currently clearing prediction");
        return;
    }

    // 检查是否使用融合光标预测模型
    if (this.storage?.cppConfig?.isFusedCursorPredictionModel) {
        console.log("[CURSOR PREDICTION] createPrediction: skipping because fused cursor prediction model is enabled");
        return;
    }

    try {
        // 清除现有预测
        console.log("[CURSOR PREDICTION] createPrediction: clearing prediction");
        await this.clearPrediction({ editor, registerReject: true });
        console.log("[CURSOR PREDICTION] createPrediction: cleared prediction");

        const model = editor.getModel();
        if (!model) {
            console.log("[CURSOR PREDICTION] createPrediction: model is null");
            return;
        }

        const selection = editor.getSelection();
        if (!selection) {
            console.log("[CURSOR PREDICTION] createPrediction: selection is null");
            return;
        }

        // 检查各种条件
        if (this.overlapsInlineDiff(model.uri, selection.startLineNumber)) {
            console.log("[CURSOR PREDICTION] createPrediction: overlapsInlineDiff");
            return;
        }

        if (model.getLineCount() < MIN_FILE_LINES) {
            console.log("[CURSOR PREDICTION] createPrediction: model.getLineCount() < CURSOR_PREDICTION_MIN_FILE_LINES");
            return;
        }

        // 获取预测模型配置
        let modelName = this.storage.applicationUserPersistentStorage.cursorPredictionState?.model;
        modelName = modelName ?? DEFAULT_MODEL;

        // 获取或生成工作区ID
        let workspaceId = this.storage.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
        if (!workspaceId) {
            workspaceId = this.generateRandomId();
            this.storage.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", workspaceId);
        }

        // 不支持notebook单元格
        if (model.uri.scheme === Schemas.vscodeNotebookCell) {
            return;
        }

        // 获取文件同步更新
        let fileSyncUpdates = [];
        const shouldUseFileSync = await this.shouldRelyOnFileSyncForFile(
            this.workspace.asRelativePath(model.uri),
            model.getVersionId()
        );

        if (shouldUseFileSync) {
            fileSyncUpdates = await this.getFileSyncUpdates(
                this.workspace.asRelativePath(model.uri),
                model.getVersionId()
            );
        }

        // 准备预测请求
        const partialRequest = await this.getPartialCursorPredictionRequest({
            editor,
            uri: model.uri,
            modelVersion: model.getVersionId(),
            modelValue: shouldUseFileSync ? "" : model.getValue(),
            getLinterErrors
        });

        if (partialRequest.currentFile) {
            partialRequest.currentFile.relyOnFilesync = shouldUseFileSync;
        }

        // 构建完整请求
        const request = {
            ...partialRequest,
            modelName,
            diffHistoryKeys: [],
            contextItems: [],
            parameterHints: this.typeService.getRelevantType(editor),
            lspContexts: [],
            workspaceId,
            fileSyncUpdates,
            fileVisibleRanges: this.getOpenVisibleRanges()
        };

        // 取消之前的请求
        this.currentAbortController?.abort();
        this.currentAbortController = new AbortController();

        // 发送预测请求
        const aiClient = await this.aiClient();
        const encryptionHeaders = await this.getEncryptionHeaders();
        
        let predictionText = "";
        let predictedLineNumber;
        let isNoOp = false;
        
        const requestId = generateUuid();
        const stream = aiClient.streamNextCursorPrediction(request, {
            signal: this.currentAbortController.signal,
            headers: { ...getRequestHeaders(requestId), ...encryptionHeaders }
        });

        let predictedUri;
        console.log("[CURSOR PREDICTION] createPrediction: starting to stream");

        // 处理流式响应
        for await (const chunk of stream) {
            const response = chunk.response;
            if (response.case === "fileName") {
                predictedUri = this.workspace.resolveRelativePath(response.value);
                if (!predictedUri) {
                    console.log("[CURSOR PREDICTION] predictedUri is undefined");
                }
            } else if (response.case === "lineNumber") {
                predictedLineNumber = response.value;
                break;
            } else if (response.case === "isNotInRange") {
                isNoOp = true;
                break;
            }
        }

        // 清理请求
        this.currentAbortController?.abort();
        this.currentAbortController = undefined;

        if (isNoOp) {
            console.log("[CURSOR PREDICTION] createPrediction: isNoOp");
            return;
        }

        if (predictedLineNumber === undefined) {
            console.log("[CURSOR PREDICTION] predictedLineNumberInRange is undefined.");
            return;
        }

        // 创建预测
        const prediction = await this.createPrediction({
            editor,
            model,
            predictedLineNumberInRange: predictedLineNumber,
            predictionText,
            generationUuid: requestId,
            source,
            cppSuggestionRange,
            predictedUri
        });

        // 触发回调
        if (
            triggerCppCallback && 
            prediction?.lineNumber !== undefined && 
            !this.storage.nonPersistentStorage.cppState?.suggestion
        ) {
            const position = new Position(prediction.lineNumber, 1);
            triggerCppCallback(model.uri, editor, CppSource.CursorPrediction, position);
        }

    } catch (error) {
        // 错误处理被省略
    }
}
```