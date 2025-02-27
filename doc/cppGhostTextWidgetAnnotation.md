```js
update(suggestion, options) {
    // 如果没有指定避免全编辑器移除，则清理现有内容
    if (options?.avoidEditorWideRemovals !== true) {
        this.removeAllInEditorNotModel();
    }

    const model = this.editor.getModel();
    const suggestionUri = suggestion?.uri;
    const isEditorFocused = this.focusTracker.isTextFocusedOrSimilarlyFocused(this.editor);

    // 基础检查：如果没有模型或URI，隐藏所有ghost text
    if (model === null || suggestionUri === undefined) {
        return this.hideAllInEditor_doesntChangeModel();
    }

    // 焦点检查：确保编辑器有焦点且URI匹配
    const isFocusValid = isEditorFocused && model.uri.toString() === suggestionUri.toString();
    if (!isFocusValid && options?.ignoreFocusCheck !== true) {
        if (options?.avoidEditorWideRemovals !== true) {
            this.hideAllInEditor_doesntChangeModel();
        }
        return;
    }

    // 清理现有内容
    if (options?.avoidEditorWideRemovals !== true) {
        this.cleanupExistingDecorations(model);
    }

    // 检查是否应该显示ghost text
    const isGhostTextEnabled = this.userSettings.applicationUserPersistentStorage.cppConfig?.isGhostText === true;
    const isSuggestionValid = suggestion !== undefined && suggestion.immediatelySeen !== true;

    if (!isGhostTextEnabled || !isSuggestionValid) {
        if (options?.avoidEditorWideRemovals !== true) {
            this.hideAllInEditor_doesntChangeModel();
        }
        return;
    }

    // 更新显示
    this.contentWidget.style.opacity = "1";
    this.cleanupPreviousState();
    this._updateTextContent(suggestion, options);
    this.editor.layoutContentWidget(this);
}

_updateTextContent(suggestion, options) {
    // 更新字体样式
    this.updateFontStyles();

    // 中止之前的操作
    this.currentOperation?.abort();
    this.currentOperation = new AbortController();

    let isOperationAborted = false;
    this.currentOperation.signal.addEventListener("abort", () => {
        isOperationAborted = true;
    });

    // 清除现有内容
    this.clearContentWidget();

    // 获取模型和装饰范围
    const model = this.editor.getModel();
    const decorationId = suggestion?.decorationId;

    if (model === null || decorationId === undefined) {
        return;
    }

    const endOfLineSequence = model.getEOL();
    let decorationRange = model.getDecorationRange(decorationId);

    if (decorationRange === null) {
        return;
    }

    // 处理范围边界
    if (decorationRange.endLineNumber === model.getLineCount() &&
        decorationRange.endColumn === model.getLineMaxColumn(decorationRange.endLineNumber)) {
        decorationRange = new Range(
            decorationRange.startLineNumber,
            decorationRange.startColumn,
            decorationRange.endLineNumber + 1,
            1
        );
    }

    // 获取原始文本和替换文本
    const originalText = model.getValueInRange(decorationRange);
    const replacementText = suggestion?.replaceText ?? "";

    // 计算完整的新文本
    const startOffset = model.getOffsetAt(decorationRange.getStartPosition());
    const endOffset = model.getOffsetAt(decorationRange.getEndPosition());
    const fullModelText = model.getValue();
    const newText = fullModelText.substring(0, startOffset) +
                   replacementText +
                   fullModelText.substring(endOffset);

    // 分析文本变更
    const {
        singleLineCharChanges,
        charChanges,
        wordChanges,
        isOnlyAddingToEachChar
    } = analyzeTextChanges(
        originalText,
        replacementText,
        decorationRange.startLineNumber,
        endOfLineSequence
    );

    // 检查是否只有添加操作
    const hasOnlyAdditions = singleLineCharChanges.every((change) => !change.removed);

    // 准备更新参数
    const updateParams = {
        newValue: newText,
        changesSinceLastUpdate: options?.changesSinceLastUpdate ?? false,
        source: suggestion?.source ?? CppSource.Unknown,
        forceViewZones: options?.forceViewZones ?? false
    };

    // 选择显示方式
    const cursorPosition = this.editor.getPosition();
    const shouldUseInline = cursorPosition &&
                           hasOnlyAdditions &&
                           isOnlyAddingToEachChar &&
                           !this.isInlineDisabled &&
                           charChanges.length <= 20 &&
                           wordChanges.length <= 20 &&
                           options?.forceDiffBox !== true;

    if (shouldUseInline) {
        // 尝试使用内联方式显示
        const {
            success,
            inlineModifications,
            fullLineModifications
        } = this.showChangesAutoCompleteInline(
            singleLineCharChanges,
            decorationRange.startLineNumber,
            cursorPosition,
            model.getValue(),
            endOfLineSequence
        );

        if (!success) {
            // 内联显示失败，使用预览框
            this.showChangesOnTheRightAndMaybeShowReds(
                wordChanges,
                model,
                endOfLineSequence,
                decorationRange,
                updateParams
            );
            this.suggestionManager.setSuggestionType(
                decorationId,
                CppSuggestionType.PreviewBox
            );
        } else {
            // 更新内联显示的边距
            if (inlineModifications) {
                let lineMargins = {};
                for (const modification of inlineModifications) {
                    lineMargins[modification.lineNumber] = Math.max(
                        lineMargins[modification.lineNumber] ?? 0,
                        modification.newValue.length - modification.oldValue.length
                    );
                }
                this.hintLineWidget.updateHintLineWidgetMarginLeft(lineMargins);
            }

            // 设置建议类型
            if ((fullLineModifications && fullLineModifications.length > 0) ||
                (inlineModifications && inlineModifications.length > 0)) {
                this.suggestionManager.setSuggestionType(
                    decorationId,
                    CppSuggestionType.GhostText
                );
            }
        }
    } else {
        // 直接使用预览框显示
        this.showChangesOnTheRightAndMaybeShowReds(
            wordChanges,
            model,
            endOfLineSequence,
            decorationRange,
            updateParams
        );
        this.suggestionManager.setSuggestionType(
            decorationId,
            CppSuggestionType.PreviewBox
        );
    }
}
```
