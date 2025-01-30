import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/keyCodes.js';
define(de[169], he([1, 0, 167, 14, 58, 27]), function (ce /*require*/,
 e /*exports*/,
 t /*composer_pb*/,
 i /*codicons*/,
 w /*constants*/,
 E /*keyCodes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ENABLED_BETTER_MARKDOWN_PARSING =
					e.COMPOSER_STREAM_CHUNK_TIMEOUT_MS =
					e.COMPOSER_STREAM_RETRY_MAX_ATTEMPTS =
					e.FIX_ERROR_IN_COMPOSER_DEFAULT_KEYBINDING =
					e.FIX_ERROR_IN_CHAT_DEFAULT_KEYBINDING =
					e.DEBUG_WITH_AI_DEFAULT_KEYBINDING =
					e.INSERT_SELECTION_INTO_CHAT_DEFAULT_KEYBINDING =
					e.NEW_CHAT_DEFAULT_KEYBINDING =
					e.COMPOSER_EDIT_DEFAULT_KEYBINDING =
					e.COMPOSER_EXPANDED_BLOCK_TOOLS =
					e.DEBUG_WITH_AI_ACTION_ID =
					e.COMPOSER_PROJECTS_REACTIVE_STORAGE_ID =
					e.COMPOSER_CHAT_VIEW_PANE_STORAGE_ID =
					e.COMPOSER_CHAT_VIEW_PANE_ICON =
					e.COMPOSER_CHAT_VIEW_PANE_TITLE =
					e.COMPOSER_VIEW_PANE_STORAGE_ID =
					e.COMPOSER_VIEW_PANE_CONTAINER_ID =
					e.COMPOSER_VIEW_PANE_ICON =
					e.COMPOSER_VIEW_PANE_TITLE =
					e.COMPOSER_VIEW_PANE_ID =
					e.OPEN_COMPOSER_AS_EDITOR_ACTION_ID =
					e.OPEN_COMPOSER_AS_BAR_ACTION_ID =
					e.OPEN_COMPOSER_AS_PANE_ACTION_ID =
					e.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID =
					e.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID =
					e.NEW_CHAT_FOLLOW_UP_ACTION_ID =
					e.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID =
					e.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID =
					e.SELECT_NEXT_COMPOSER_CHAT_ACTION_ID =
					e.SELECT_NEXT_COMPOSER_ACTION_ID =
					e.SELECT_PREVIOUS_COMPOSER_CHAT_ACTION_ID =
					e.SELECT_PREVIOUS_COMPOSER_ACTION_ID =
					e.NEW_COMPOSER_CHAT_ACTION_ID =
					e.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID =
					e.SHOW_COMPOSER_HISTORY_ACTION_ID =
					e.NEW_COMPOSER_ACTION_ID =
					e.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID =
					e.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID =
					e.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID =
					e.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID =
					e.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID =
					e.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID =
					e.COMPOSER_EDIT_ACTION_ID =
					e.COMPOSER_EDIT_TRAIL_COLOR =
					e.CHECKPOINT_HINT_ZERO_TH =
					e.CHECKPOINT_CTA =
					e.CHECKPOINT_MAIN_MESSAGE =
					e.CHECKPOINT_HINT =
					e.complexComposerLabel =
					e.unnamedProjectTitle =
					e.unnamedComposerTitle =
					e.COMPOSER_HOVER_TOOLTIP_DELAY =
					e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_FINAL_K =
					e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_TOP_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_ONLY_TAKE_TOP_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_FINAL_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_TOP_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_TIMEOUT =
					e.COMPOSER_CUBE_EXTENDED_LINE_RANGE =
					e.COMPOSER_BAR_WINDOW_MARGIN =
					e.COMPOSER_BAR_MAX_HEIGHT =
					e.COMPOSER_BAR_MAX_WIDTH =
					e.COMPOSER_BAR_MIN_HEIGHT =
					e.COMPOSER_BAR_MIN_WIDTH =
					e.COMPOSER_BAR_DEFAULT_MESSAGES_HEIGHT =
					e.COMPOSER_BAR_DEFAULT_WIDTH =
					e.COMPOSER_BAR_RESIZER_DIMENSION =
					e.COMPOSER_BAR_RESIZER_CORNER_DIMENSION =
					e.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR =
					e.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR =
					e.COMPOSER_BAR_INDENT =
					e.COMPOSER_PANE_TOOLBAR_INDENT =
					e.COMPOSER_PANE_INPUT_MARGIN =
					e.COMPOSER_TOOLBAR_HEIGHT =
					e.COMPOSER_TOP_BAR_HEIGHT =
					e.composerCodeBlockStatusLabelMap =
						void 0),
				(e.composerCodeBlockStatusLabelMap = {
					none: "None",
					applying: "Applying",
					running: "Running",
					generating: "Generating",
					apply_pending: "Waiting to be applied",
					cancelled: "Cancelled",
					completed: "Completed",
					accepted: "Accepted",
					rejected: "Rejected",
					aborted: "Aborted",
					outdated: "Outdated",
				}),
				(e.COMPOSER_TOP_BAR_HEIGHT = 24),
				(e.COMPOSER_TOOLBAR_HEIGHT = 24),
				(e.COMPOSER_PANE_INPUT_MARGIN = 10),
				(e.COMPOSER_PANE_TOOLBAR_INDENT = 4),
				(e.COMPOSER_BAR_INDENT = 4),
				(e.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR = "transparent"),
				(e.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR = "transparent"),
				(e.COMPOSER_BAR_RESIZER_CORNER_DIMENSION = 10),
				(e.COMPOSER_BAR_RESIZER_DIMENSION = 6),
				(e.COMPOSER_BAR_DEFAULT_WIDTH = 400),
				(e.COMPOSER_BAR_DEFAULT_MESSAGES_HEIGHT = 400),
				(e.COMPOSER_BAR_MIN_WIDTH = 320),
				(e.COMPOSER_BAR_MIN_HEIGHT = 320),
				(e.COMPOSER_BAR_MAX_WIDTH = 800),
				(e.COMPOSER_BAR_MAX_HEIGHT = 800),
				(e.COMPOSER_BAR_WINDOW_MARGIN = 20),
				(e.COMPOSER_CUBE_EXTENDED_LINE_RANGE = 5),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_TIMEOUT = 1e4),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_TOP_K = 30),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_FINAL_K = 15),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_ONLY_TAKE_TOP_K = 5),
				(e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_TOP_K = 50),
				(e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_FINAL_K = 30),
				(e.COMPOSER_HOVER_TOOLTIP_DELAY = 600),
				(e.unnamedComposerTitle = "Untitled composer"),
				(e.unnamedProjectTitle = "New project"),
				(e.complexComposerLabel = "FULL"),
				(e.CHECKPOINT_HINT = "Revert all files to before this message"),
				(e.CHECKPOINT_MAIN_MESSAGE = "Checkpoint created."),
				(e.CHECKPOINT_CTA = "restore"),
				(e.CHECKPOINT_HINT_ZERO_TH =
					"Revert all files before this composer session"),
				(e.COMPOSER_EDIT_TRAIL_COLOR =
					"var(--vscode-editorLightBulb-foreground)"),
				(e.COMPOSER_EDIT_ACTION_ID = "composer.startComposerPrompt"),
				(e.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID =
					"composer.startComposerPromptFromSelection"),
				(e.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID =
					"composer.openComposerFromCurrentChat"),
				(e.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID =
					"composer.addfilestocomposer"),
				(e.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID =
					"composer.addfilestonnewcomposer"),
				(e.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID =
					"composer.addfilestocomposerchat"),
				(e.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID =
					"composer.addfilestonnewcomposerchat"),
				(e.NEW_COMPOSER_ACTION_ID = "composer.newcomposeraction"),
				(e.SHOW_COMPOSER_HISTORY_ACTION_ID = "composer.showComposerHistory"),
				(e.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID =
					"composer.showComposerChatHistory"),
				(e.NEW_COMPOSER_CHAT_ACTION_ID = w.$dX),
				(e.SELECT_PREVIOUS_COMPOSER_ACTION_ID =
					"composer.selectPreviousComposer"),
				(e.SELECT_PREVIOUS_COMPOSER_CHAT_ACTION_ID =
					"composer.selectPreviousComposerChat"),
				(e.SELECT_NEXT_COMPOSER_ACTION_ID = "composer.selectNextComposer"),
				(e.SELECT_NEXT_COMPOSER_CHAT_ACTION_ID =
					"composer.selectNextComposerChat"),
				(e.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID =
					"composer.addsymbolstonewcomposer"),
				(e.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID =
					"composer.addsymbolstocomposer"),
				(e.NEW_CHAT_FOLLOW_UP_ACTION_ID = "aichat.newfollowupaction"),
				(e.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID = "aichat.fixerrormessage"),
				(e.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID =
					"composer.fixerrormessage"),
				(e.OPEN_COMPOSER_AS_PANE_ACTION_ID = "composer.openAsPane"),
				(e.OPEN_COMPOSER_AS_BAR_ACTION_ID = "composer.openAsBar"),
				(e.OPEN_COMPOSER_AS_EDITOR_ACTION_ID = "composer.openAsEditor"),
				(e.COMPOSER_VIEW_PANE_ID = "composerViewPane"),
				(e.COMPOSER_VIEW_PANE_TITLE = "Composer"),
				(e.COMPOSER_VIEW_PANE_ICON = i.$ak.files),
				(e.COMPOSER_VIEW_PANE_CONTAINER_ID =
					"workbench.panel.composerViewPane2"),
				(e.COMPOSER_VIEW_PANE_STORAGE_ID = "workbench.panel.composerViewPane2"),
				(e.COMPOSER_CHAT_VIEW_PANE_TITLE = "Chat"),
				(e.COMPOSER_CHAT_VIEW_PANE_ICON = i.$ak.files),
				(e.COMPOSER_CHAT_VIEW_PANE_STORAGE_ID =
					"workbench.panel.composerChatViewPane"),
				(e.COMPOSER_PROJECTS_REACTIVE_STORAGE_ID =
					"composer.reactiveStorageId"),
				(e.DEBUG_WITH_AI_ACTION_ID = "aidebug.autodebugterminal"),
				(e.COMPOSER_EXPANDED_BLOCK_TOOLS = [
					t.ComposerCapabilityRequest_ToolType.ITERATE,
				]),
				(e.COMPOSER_EDIT_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyCode.KeyI),
				(e.NEW_CHAT_DEFAULT_KEYBINDING = E.KeyMod.CtrlCmd | E.KeyCode.KeyL),
				(e.INSERT_SELECTION_INTO_CHAT_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL),
				(e.DEBUG_WITH_AI_DEFAULT_KEYBINDING = E.KeyMod.Alt | E.KeyCode.KeyD),
				(e.FIX_ERROR_IN_CHAT_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyE),
				(e.FIX_ERROR_IN_COMPOSER_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyD),
				(e.COMPOSER_STREAM_RETRY_MAX_ATTEMPTS = 3),
				(e.COMPOSER_STREAM_CHUNK_TIMEOUT_MS = 1e4),
				(e.ENABLED_BETTER_MARKDOWN_PARSING = !1);
		}),
		