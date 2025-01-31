import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../platform/contextkey/common/contextkey.js';
define(de[71], he([1, 0, 4, 8]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*contextkey*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.EditorContextKeys = void 0),
				(t = mt(t));
			var w;
			(function (E) {
				(E.editorSimpleInput = new i.$5j("editorSimpleInput", !1, !0)),
					(E.editorTextFocus = new i.$5j(
						"editorTextFocus",
						!1,
						t.localize(741, null),
					)),
					(E.editorHasPromptBar = new i.$5j(
						"editorHasPromptBar",
						!1,
						t.localize(742, null),
					)),
					(E.editorPromptBarFocused = new i.$5j(
						"editorPromptBarFocused",
						!1,
						t.localize(743, null),
					)),
					(E.focus = new i.$5j("editorFocus", !1, t.localize(744, null))),
					(E.textInputFocus = new i.$5j(
						"textInputFocus",
						!1,
						t.localize(745, null),
					)),
					(E.readOnly = new i.$5j("editorReadonly", !1, t.localize(746, null))),
					(E.inDiffEditor = new i.$5j(
						"inDiffEditor",
						!1,
						t.localize(747, null),
					)),
					(E.isEmbeddedDiffEditor = new i.$5j(
						"isEmbeddedDiffEditor",
						!1,
						t.localize(748, null),
					)),
					(E.inMultiDiffEditor = new i.$5j(
						"inMultiDiffEditor",
						!1,
						t.localize(749, null),
					)),
					(E.multiDiffEditorAllCollapsed = new i.$5j(
						"multiDiffEditorAllCollapsed",
						void 0,
						t.localize(750, null),
					)),
					(E.hasChanges = new i.$5j(
						"diffEditorHasChanges",
						!1,
						t.localize(751, null),
					)),
					(E.comparingMovedCode = new i.$5j(
						"comparingMovedCode",
						!1,
						t.localize(752, null),
					)),
					(E.accessibleDiffViewerVisible = new i.$5j(
						"accessibleDiffViewerVisible",
						!1,
						t.localize(753, null),
					)),
					(E.diffEditorRenderSideBySideInlineBreakpointReached = new i.$5j(
						"diffEditorRenderSideBySideInlineBreakpointReached",
						!1,
						t.localize(754, null),
					)),
					(E.diffEditorInlineMode = new i.$5j(
						"diffEditorInlineMode",
						!1,
						t.localize(755, null),
					)),
					(E.diffEditorOriginalWritable = new i.$5j(
						"diffEditorOriginalWritable",
						!1,
						t.localize(756, null),
					)),
					(E.diffEditorModifiedWritable = new i.$5j(
						"diffEditorModifiedWritable",
						!1,
						t.localize(757, null),
					)),
					(E.diffEditorOriginalUri = new i.$5j(
						"diffEditorOriginalUri",
						"",
						t.localize(758, null),
					)),
					(E.diffEditorModifiedUri = new i.$5j(
						"diffEditorModifiedUri",
						"",
						t.localize(759, null),
					)),
					(E.columnSelection = new i.$5j(
						"editorColumnSelection",
						!1,
						t.localize(760, null),
					)),
					(E.writable = E.readOnly.toNegated()),
					(E.hasNonEmptySelection = new i.$5j(
						"editorHasSelection",
						!1,
						t.localize(761, null),
					)),
					(E.hasOnlyEmptySelection = E.hasNonEmptySelection.toNegated()),
					(E.hasMultipleSelections = new i.$5j(
						"editorHasMultipleSelections",
						!1,
						t.localize(762, null),
					)),
					(E.hasSingleSelection = E.hasMultipleSelections.toNegated()),
					(E.tabMovesFocus = new i.$5j(
						"editorTabMovesFocus",
						!1,
						t.localize(763, null),
					)),
					(E.tabDoesNotMoveFocus = E.tabMovesFocus.toNegated()),
					(E.isInEmbeddedEditor = new i.$5j("isInEmbeddedEditor", !1, !0)),
					(E.canUndo = new i.$5j("canUndo", !1, !0)),
					(E.canRedo = new i.$5j("canRedo", !1, !0)),
					(E.hoverVisible = new i.$5j(
						"editorHoverVisible",
						!1,
						t.localize(764, null),
					)),
					(E.hoverFocused = new i.$5j(
						"editorHoverFocused",
						!1,
						t.localize(765, null),
					)),
					(E.stickyScrollFocused = new i.$5j(
						"stickyScrollFocused",
						!1,
						t.localize(766, null),
					)),
					(E.stickyScrollVisible = new i.$5j(
						"stickyScrollVisible",
						!1,
						t.localize(767, null),
					)),
					(E.standaloneColorPickerVisible = new i.$5j(
						"standaloneColorPickerVisible",
						!1,
						t.localize(768, null),
					)),
					(E.standaloneColorPickerFocused = new i.$5j(
						"standaloneColorPickerFocused",
						!1,
						t.localize(769, null),
					)),
					(E.inCompositeEditor = new i.$5j(
						"inCompositeEditor",
						void 0,
						t.localize(770, null),
					)),
					(E.notInCompositeEditor = E.inCompositeEditor.toNegated()),
					(E.languageId = new i.$5j("editorLangId", "", t.localize(771, null))),
					(E.hasCompletionItemProvider = new i.$5j(
						"editorHasCompletionItemProvider",
						!1,
						t.localize(772, null),
					)),
					(E.hasCodeActionsProvider = new i.$5j(
						"editorHasCodeActionsProvider",
						!1,
						t.localize(773, null),
					)),
					(E.hasCodeLensProvider = new i.$5j(
						"editorHasCodeLensProvider",
						!1,
						t.localize(774, null),
					)),
					(E.hasDefinitionProvider = new i.$5j(
						"editorHasDefinitionProvider",
						!1,
						t.localize(775, null),
					)),
					(E.hasDeclarationProvider = new i.$5j(
						"editorHasDeclarationProvider",
						!1,
						t.localize(776, null),
					)),
					(E.hasImplementationProvider = new i.$5j(
						"editorHasImplementationProvider",
						!1,
						t.localize(777, null),
					)),
					(E.hasTypeDefinitionProvider = new i.$5j(
						"editorHasTypeDefinitionProvider",
						!1,
						t.localize(778, null),
					)),
					(E.hasHoverProvider = new i.$5j(
						"editorHasHoverProvider",
						!1,
						t.localize(779, null),
					)),
					(E.hasDocumentHighlightProvider = new i.$5j(
						"editorHasDocumentHighlightProvider",
						!1,
						t.localize(780, null),
					)),
					(E.hasDocumentSymbolProvider = new i.$5j(
						"editorHasDocumentSymbolProvider",
						!1,
						t.localize(781, null),
					)),
					(E.hasReferenceProvider = new i.$5j(
						"editorHasReferenceProvider",
						!1,
						t.localize(782, null),
					)),
					(E.hasRenameProvider = new i.$5j(
						"editorHasRenameProvider",
						!1,
						t.localize(783, null),
					)),
					(E.hasSignatureHelpProvider = new i.$5j(
						"editorHasSignatureHelpProvider",
						!1,
						t.localize(784, null),
					)),
					(E.hasInlayHintsProvider = new i.$5j(
						"editorHasInlayHintsProvider",
						!1,
						t.localize(785, null),
					)),
					(E.hasDocumentFormattingProvider = new i.$5j(
						"editorHasDocumentFormattingProvider",
						!1,
						t.localize(786, null),
					)),
					(E.hasDocumentSelectionFormattingProvider = new i.$5j(
						"editorHasDocumentSelectionFormattingProvider",
						!1,
						t.localize(787, null),
					)),
					(E.hasMultipleDocumentFormattingProvider = new i.$5j(
						"editorHasMultipleDocumentFormattingProvider",
						!1,
						t.localize(788, null),
					)),
					(E.hasMultipleDocumentSelectionFormattingProvider = new i.$5j(
						"editorHasMultipleDocumentSelectionFormattingProvider",
						!1,
						t.localize(789, null),
					)),
					(E.hasDisplayedDiff = new i.$5j(
						"hasDisplayedDiff",
						!1,
						"Whether the editor has pending edits.",
					)),
					(E.hasActivelyGeneratingDiff = new i.$5j(
						"hasActivelyGeneratingDiff",
						!1,
						"Whether the editor is currently generating an edit.",
					)),
					(E.hasFastCopilotDiffSuggestion = new i.$5j(
						"hasFastCopilotDiffSuggestion",
						!1,
						"Whether the editor is currently showing a fast copilot diff suggestion.",
					)),
					(E.hasActivelyGeneratingPromptBarDiff = new i.$5j(
						"hasActivelyGeneratingPromptBarDiff",
						!1,
						"Whether the editor is currently generating an edit/generation with the inline prompt bar.",
					)),
					(E.hasDisplayedSimpleDiff = new i.$5j(
						"hasDisplayedSimpleDiff",
						!1,
						"Whether the editor has pending edits.",
					)),
					(E.hasGPT4InlineCompletion = new i.$5j(
						"hasGPT4Diff",
						!1,
						"Whether the editor is showing a gpt-4 supercompletion",
					)),
					(E.hasGPT4ActivelyGenerating = new i.$5j(
						"hadGPT4InlineCompletionRunning",
						!1,
						"Whether the editor had a gpt-4 supercompletion running",
					));
			})(w || (e.EditorContextKeys = w = {}));
		})
