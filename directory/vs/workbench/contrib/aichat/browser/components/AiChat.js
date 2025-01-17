import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/dom.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import './AIChatHistory.js';
import './premium/PremiumAiChat.js';
import '../../../controlCommon/browser/solid.js';
import '../chatData.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/AiBubble.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/ChatHistory.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/UserBubble.js';
define(
			de[4405],
			he([1, 0, 2, 2, 2, 2, 13, 7, 205, 4203, 4404, 36, 140, 907, 1141, 1142]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$icc = n),
					(d = mt(d));
				const c = (0, t.template)("<div>");
				function n(g) {
					const p = (0, C.useContext)(h.$ygc),
						o = (0, a.$odc)(),
						f = () =>
							o.reactiveStorageService.workspaceUserPersistentStorage
								.aiPanePosition;
					let b;
					return (
						(0, C.onMount)(() => {
							b !== void 0 &&
								d
									.getWindow(b)
									.document.addEventListener("mousedown", function (s) {
										!s.target.closest(".ai-chat-history-pane") &&
											f() === m.AIPanePosition.SIDEBAR &&
											g.hideChatHistory();
									});
						}),
						(() => {
							const s = c();
							return (
								s.style.setProperty("height", "100%"),
								s.style.setProperty("width", "100%"),
								(0, i.insert)(
									s,
									(0, E.createComponent)(C.Show, {
										get when() {
											return !p.isEditorWindow;
										},
										get children() {
											return (0, E.createComponent)(r.$C0b, g);
										},
									}),
									null,
								),
								(0, i.insert)(
									s,
									(0, E.createComponent)(C.Show, {
										get when() {
											return (
												((0, w.memo)(() => !!p.isEditorWindow)() &&
													f() === m.AIPanePosition.EDITOR) ||
												(!p.isEditorWindow && f() === m.AIPanePosition.SIDEBAR)
											);
										},
										get children() {
											const l = c();
											return (
												l.style.setProperty("height", "100%"),
												l.style.setProperty("width", "100%"),
												l.style.setProperty("display", "flex"),
												l.style.setProperty("flex-direction", "column"),
												l.style.setProperty("background", "transparent"),
												(0, i.insert)(l, (0, E.createComponent)(u.$hcc, {})),
												l
											);
										},
									}),
									null,
								),
								s
							);
						})()
					);
				}
			},
		),
		