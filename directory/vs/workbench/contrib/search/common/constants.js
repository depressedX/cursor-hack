define(de[377], he([1, 0, 8]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ooc = e.SearchCommandIds = void 0);
			var i;
			(function (w) {
				(w.FindInFilesActionId = "workbench.action.findInFiles"),
					(w.FocusActiveEditorCommandId = "search.action.focusActiveEditor"),
					(w.FocusSearchFromResults = "search.action.focusSearchFromResults"),
					(w.OpenMatch = "search.action.openResult"),
					(w.OpenMatchToSide = "search.action.openResultToSide"),
					(w.RemoveActionId = "search.action.remove"),
					(w.CopyPathCommandId = "search.action.copyPath"),
					(w.CopyMatchCommandId = "search.action.copyMatch"),
					(w.CopyAllCommandId = "search.action.copyAll"),
					(w.OpenInEditorCommandId = "search.action.openInEditor"),
					(w.ClearSearchHistoryCommandId = "search.action.clearHistory"),
					(w.FocusSearchListCommandID = "search.action.focusSearchList"),
					(w.ReplaceActionId = "search.action.replace"),
					(w.ReplaceAllInFileActionId = "search.action.replaceAllInFile"),
					(w.ReplaceAllInFolderActionId = "search.action.replaceAllInFolder"),
					(w.CloseReplaceWidgetActionId = "closeReplaceInFilesWidget"),
					(w.ToggleCaseSensitiveCommandId = "toggleSearchCaseSensitive"),
					(w.ToggleWholeWordCommandId = "toggleSearchWholeWord"),
					(w.ToggleRegexCommandId = "toggleSearchRegex"),
					(w.TogglePreserveCaseId = "toggleSearchPreserveCase"),
					(w.AddCursorsAtSearchResults = "addCursorsAtSearchResults"),
					(w.RevealInSideBarForSearchResults = "search.action.revealInSideBar"),
					(w.ReplaceInFilesActionId = "workbench.action.replaceInFiles"),
					(w.ShowAllSymbolsActionId = "workbench.action.showAllSymbols"),
					(w.QuickTextSearchActionId = "workbench.action.quickTextSearch"),
					(w.CancelSearchActionId = "search.action.cancel"),
					(w.RefreshSearchResultsActionId =
						"search.action.refreshSearchResults"),
					(w.FocusNextSearchResultActionId =
						"search.action.focusNextSearchResult"),
					(w.FocusPreviousSearchResultActionId =
						"search.action.focusPreviousSearchResult"),
					(w.ToggleSearchOnTypeActionId =
						"workbench.action.toggleSearchOnType"),
					(w.CollapseSearchResultsActionId =
						"search.action.collapseSearchResults"),
					(w.ExpandSearchResultsActionId = "search.action.expandSearchResults"),
					(w.ExpandRecursivelyCommandId = "search.action.expandRecursively"),
					(w.ClearSearchResultsActionId = "search.action.clearSearchResults"),
					(w.ViewAsTreeActionId = "search.action.viewAsTree"),
					(w.ViewAsListActionId = "search.action.viewAsList"),
					(w.ShowAIResultsActionId = "search.action.showAIResults"),
					(w.HideAIResultsActionId = "search.action.hideAIResults"),
					(w.ToggleQueryDetailsActionId =
						"workbench.action.search.toggleQueryDetails"),
					(w.ExcludeFolderFromSearchId = "search.action.excludeFromSearch"),
					(w.FocusNextInputActionId = "search.focus.nextInputBox"),
					(w.FocusPreviousInputActionId = "search.focus.previousInputBox"),
					(w.RestrictSearchToFolderId = "search.action.restrictSearchToFolder"),
					(w.FindInFolderId = "filesExplorer.findInFolder"),
					(w.FindInWorkspaceId = "filesExplorer.findInWorkspace");
			})(i || (e.SearchCommandIds = i = {})),
				(e.$ooc = {
					SearchViewVisibleKey: new t.$5j("searchViewletVisible", !0),
					SearchViewFocusedKey: new t.$5j("searchViewletFocus", !1),
					InputBoxFocusedKey: new t.$5j("inputBoxFocus", !1),
					SearchInputBoxFocusedKey: new t.$5j("searchInputBoxFocus", !1),
					ReplaceInputBoxFocusedKey: new t.$5j("replaceInputBoxFocus", !1),
					PatternIncludesFocusedKey: new t.$5j(
						"patternIncludesInputBoxFocus",
						!1,
					),
					PatternExcludesFocusedKey: new t.$5j(
						"patternExcludesInputBoxFocus",
						!1,
					),
					ReplaceActiveKey: new t.$5j("replaceActive", !1),
					HasSearchResults: new t.$5j("hasSearchResult", !1),
					FirstMatchFocusKey: new t.$5j("firstMatchFocus", !1),
					FileMatchOrMatchFocusKey: new t.$5j("fileMatchOrMatchFocus", !1),
					FileMatchOrFolderMatchFocusKey: new t.$5j(
						"fileMatchOrFolderMatchFocus",
						!1,
					),
					FileMatchOrFolderMatchWithResourceFocusKey: new t.$5j(
						"fileMatchOrFolderMatchWithResourceFocus",
						!1,
					),
					FileFocusKey: new t.$5j("fileMatchFocus", !1),
					FolderFocusKey: new t.$5j("folderMatchFocus", !1),
					ResourceFolderFocusKey: new t.$5j("folderMatchWithResourceFocus", !1),
					IsEditableItemKey: new t.$5j("isEditableItem", !0),
					MatchFocusKey: new t.$5j("matchFocus", !1),
					ViewHasSearchPatternKey: new t.$5j("viewHasSearchPattern", !1),
					ViewHasReplacePatternKey: new t.$5j("viewHasReplacePattern", !1),
					ViewHasFilePatternKey: new t.$5j("viewHasFilePattern", !1),
					ViewHasSomeCollapsibleKey: new t.$5j(
						"viewHasSomeCollapsibleResult",
						!1,
					),
					InTreeViewKey: new t.$5j("inTreeView", !1),
					AIResultsVisibleKey: new t.$5j("AIResultsVisibleKey", !1),
					hasAIResultProvider: new t.$5j("hasAIResultProviderKey", !1),
				});
		}),
		