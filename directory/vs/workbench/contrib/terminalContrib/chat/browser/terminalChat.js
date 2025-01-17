import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
define(de[692], he([1, 0, 4, 11, 8]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TerminalChatContextKeys =
					e.TerminalChatContextKeyStrings =
					e.$XVc =
					e.$WVc =
					e.$VVc =
					e.$UVc =
					e.TerminalChatCommandId =
						void 0);
			var E;
			(function (m) {
				(m.Start = "workbench.action.terminal.chat.start"),
					(m.Close = "workbench.action.terminal.chat.close"),
					(m.FocusResponse = "workbench.action.terminal.chat.focusResponse"),
					(m.FocusInput = "workbench.action.terminal.chat.focusInput"),
					(m.Discard = "workbench.action.terminal.chat.discard"),
					(m.MakeRequest = "workbench.action.terminal.chat.makeRequest"),
					(m.Cancel = "workbench.action.terminal.chat.cancel"),
					(m.RunCommand = "workbench.action.terminal.chat.runCommand"),
					(m.RunFirstCommand =
						"workbench.action.terminal.chat.runFirstCommand"),
					(m.InsertCommand = "workbench.action.terminal.chat.insertCommand"),
					(m.InsertFirstCommand =
						"workbench.action.terminal.chat.insertFirstCommand"),
					(m.ViewInChat = "workbench.action.terminal.chat.viewInChat"),
					(m.PreviousFromHistory =
						"workbench.action.terminal.chat.previousFromHistory"),
					(m.NextFromHistory =
						"workbench.action.terminal.chat.nextFromHistory");
			})(E || (e.TerminalChatCommandId = E = {})),
				(e.$UVc = i.$XX.for("terminalChatInput")),
				(e.$VVc = i.$XX.for("terminalChatWidget")),
				(e.$WVc = i.$XX.for("terminalChatWidget.status")),
				(e.$XVc = i.$XX.for("terminalChatWidget.toolbar"));
			var C;
			(function (m) {
				(m.ChatFocus = "terminalChatFocus"),
					(m.ChatVisible = "terminalChatVisible"),
					(m.ChatActiveRequest = "terminalChatActiveRequest"),
					(m.ChatInputHasText = "terminalChatInputHasText"),
					(m.ChatAgentRegistered = "terminalChatAgentRegistered"),
					(m.ChatResponseEditorFocused = "terminalChatResponseEditorFocused"),
					(m.ChatResponseContainsCodeBlock =
						"terminalChatResponseContainsCodeBlock"),
					(m.ChatResponseContainsMultipleCodeBlocks =
						"terminalChatResponseContainsMultipleCodeBlocks"),
					(m.ChatResponseSupportsIssueReporting =
						"terminalChatResponseSupportsIssueReporting"),
					(m.ChatSessionResponseVote = "terminalChatSessionResponseVote");
			})(C || (e.TerminalChatContextKeyStrings = C = {}));
			var d;
			(function (m) {
				(m.focused = new w.$5j(C.ChatFocus, !1, (0, t.localize)(10456, null))),
					(m.visible = new w.$5j(
						C.ChatVisible,
						!1,
						(0, t.localize)(10457, null),
					)),
					(m.requestActive = new w.$5j(
						C.ChatActiveRequest,
						!1,
						(0, t.localize)(10458, null),
					)),
					(m.inputHasText = new w.$5j(
						C.ChatInputHasText,
						!1,
						(0, t.localize)(10459, null),
					)),
					(m.responseContainsCodeBlock = new w.$5j(
						C.ChatResponseContainsCodeBlock,
						!1,
						(0, t.localize)(10460, null),
					)),
					(m.responseContainsMultipleCodeBlocks = new w.$5j(
						C.ChatResponseContainsMultipleCodeBlocks,
						!1,
						(0, t.localize)(10461, null),
					)),
					(m.hasChatAgent = new w.$5j(
						C.ChatAgentRegistered,
						!1,
						(0, t.localize)(10462, null),
					));
			})(d || (e.TerminalChatContextKeys = d = {}));
		}),
		