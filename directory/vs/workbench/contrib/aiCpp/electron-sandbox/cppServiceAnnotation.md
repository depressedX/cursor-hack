`handleKeyDownForCppKeys`

```js

if (this.getConfig().codeCompletionEnabled === true) {
	// 处理 Shift + Tab
	if (event.key === "Tab" && event.shiftKey) {
			if (this.getConfig().manualTriggerWithOperatorToken) {
					const activeEditor = this.editorService.getActiveCodeEditor();
					if (activeEditor === null) return;
					
					const editorUri = activeEditor.getModel()?.uri;
					if (!editorUri) return;
					
					this.triggerCodeCompletion(
							editorUri,
							activeEditor,
							CompletionSource.ManualTrigger
					);
			} else {
					this.cursorHandler.maybeUndoCursorPrediction({
							event: event,
							triggerCppCallback: this.triggerCodeCompletion.bind(this),
							getLinterErrors: this.getRecentAndNearLocationLinterErrors.bind(this)
					});
			}
			return;
	}

	// 处理普通 Tab 键
	if (this.isSimpleTabPress(event) && this.selectionIsNotMultipleLines()) {
			// 处理自动导入
			if (this.getConfig().autoImportEnabled) {
					const focusedEditor = this.getFocusedCodeEditor();
					if (focusedEditor !== null && this.importManager.maybeAcceptShownImport(focusedEditor)) {
							this.preventDefaultAndStopPropagation(event);
							return;
					}
			}

			if (!this.shouldTabInsteadOfAccepting()) {
					const currentSuggestion = this.getState().completionState?.suggestion;
					
					if (this.shouldAcceptCurrentSuggestion(currentSuggestion)) {
							this.handleSuggestionAcceptance(event, currentSuggestion);
					} else if (this.hasNearbyAdditionalSuggestions()) {
							this.handleAdditionalSuggestions(event);
					} else {
							this.cursorHandler.maybeAcceptCursorPrediction({
									event: event,
									triggerCppCallback: this.triggerCodeCompletion.bind(this)
							});
					}
			}
			return;
	}

	// 处理 Escape 键
	if (this.isSimpleEscapePress(event)) {
			if (this.getState().completionState?.suggestion !== undefined) {
					this.handleSuggestionRejection();
			} else if (this.getConfig().autoImportEnabled) {
					this.handleAutoImportRejection(event);
			} else if (this.getState().cursorPrediction !== undefined) {
					this.cursorHandler.clearCursorPrediction();
			}
	}
}

// 辅助方法
isSimpleTabPress(event) {
	return event.key === "Tab" 
			&& !event.shiftKey 
			&& !event.ctrlKey 
			&& !event.altKey 
			&& !event.metaKey;
}

isSimpleEscapePress(event) {
	return event.key === "Escape" 
			&& !event.ctrlKey 
			&& !event.altKey 
			&& !event.metaKey;
}

preventDefaultAndStopPropagation(event) {
	event.preventDefault();
	event.stopImmediatePropagation();
	event.stopPropagation();
}

handleSuggestionAcceptance(event, suggestion) {
	this.dontTriggerCompletionBecauseChangeIsFromCompletion = true;
	this.preventDefaultAndStopPropagation(event);
	
	this.acceptFullSuggestion(this.holdDownAbortController)
			.then(() => {
					const focusedEditor = this.getFocusedCodeEditor();
					if (focusedEditor !== null) {
							this.cleanupAfterAcceptSuggestion(focusedEditor, suggestion);
					}
			});
	this.resetState();
}
```