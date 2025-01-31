import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/date.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/themables.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextkey/common/contextkeys.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import './chatClear.js';
import '../chat.js';
import '../chatEditorInput.js';
import '../../common/chatContextKeys.js';
import '../../common/chatService.js';
import '../../common/chatViewModel.js';
import '../../common/chatWidgetHistoryService.js';
import '../../../../services/editor/common/editorGroupsService.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/views/common/viewsService.js';
define(
			de[402],
			he([
				1, 0, 24, 14, 275, 27, 3, 26, 46, 4, 11, 8, 179, 43, 63, 1288, 208, 552,
				207, 218, 283, 1235, 66, 18, 89,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*codicons*/,
				w /*date*/,
				E /*keyCodes*/,
				C /*lifecycle*/,
				d /*themables*/,
				m /*editorExtensions*/,
				r /*nls*/,
				u /*actions*/,
				a /*contextkey*/,
				h /*contextkeys*/,
				c /*keybindingsRegistry*/,
				n /*quickInput*/,
				g /*chatClear*/,
				p /*chat*/,
				o /*chatEditorInput*/,
				f /*chatContextKeys*/,
				b /*chatService*/,
				s /*chatViewModel*/,
				l /*chatWidgetHistoryService*/,
				y /*editorGroupsService*/,
				$ /*editorService*/,
				v /*viewsService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Yb = e.$3Yb = void 0),
					(e.$2Yb = S),
					(e.$5Yb = k),
					(e.$6Yb = L);
				function S(D) {
					return D instanceof Object && "chatView" in D;
				}
				(e.$3Yb = (0, r.localize2)(4565, "Chat")),
					(e.$4Yb = "workbench.action.chat.open");
				class I extends u.$3X {
					constructor() {
						super({
							id: e.$4Yb,
							title: (0, r.localize2)(4566, "Open Chat"),
							icon: i.$ak.commentDiscussion,
							f1: !1,
							category: e.$3Yb,
							keybinding: {
								weight: c.KeybindingWeight.WorkbenchContrib,
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.KeyI,
								mac: {
									primary: E.KeyMod.CtrlCmd | E.KeyMod.WinCtrl | E.KeyCode.KeyI,
								},
							},
						});
					}
					async run(M, N) {
						N = typeof N == "string" ? { query: N } : N;
						const A = M.get(b.$J2),
							R = await (0, p.$HYb)(M.get(v.$HMb));
						if (R) {
							if (N?.previousRequests?.length && R.viewModel)
								for (const { request: O, response: B } of N.previousRequests)
									A.addCompleteRequest(R.viewModel.sessionId, O, void 0, 0, {
										message: B,
									});
							N?.query &&
								(N.isPartialQuery
									? R.setInput(N.query)
									: R.acceptInput(N.query)),
								R.focusInput();
						}
					}
				}
				class T extends u.$3X {
					constructor() {
						super({
							id: "workbench.action.chat.history",
							title: (0, r.localize2)(4567, "Show Chats..."),
							menu: {
								id: u.$XX.ViewTitle,
								when: a.$Kj.equals("view", p.$MYb),
								group: "navigation",
								order: -1,
							},
							category: e.$3Yb,
							icon: i.$ak.history,
							f1: !0,
							precondition: f.$51,
						});
					}
					async run(M) {
						const N = M.get(b.$J2),
							A = M.get(n.$DJ),
							R = M.get(v.$HMb),
							O = M.get($.$IY),
							B = () => {
								const U = {
										iconClass: d.ThemeIcon.asClassName(i.$ak.file),
										tooltip: (0, r.localize)(4559, null),
									},
									z = {
										iconClass: d.ThemeIcon.asClassName(i.$ak.x),
										tooltip: (0, r.localize)(4560, null),
									},
									F = {
										iconClass: d.ThemeIcon.asClassName(i.$ak.pencil),
										tooltip: (0, r.localize)(4561, null),
									},
									x = () => {
										const G = N.getHistory();
										G.sort(
											(W, X) =>
												(X.lastMessageDate ?? 0) - (W.lastMessageDate ?? 0),
										);
										let K;
										const J = G.flatMap((W) => {
											const X = (0, w.$en)(W.lastMessageDate, !0, !0),
												Y = X !== K ? { type: "separator", label: X } : void 0;
											return (
												(K = X),
												[
													Y,
													{
														label: W.title,
														description: W.isActive
															? `(${(0, r.localize)(4562, null)})`
															: "",
														chat: W,
														buttons: W.isActive ? [F] : [F, U, z],
													},
												]
											);
										});
										return (0, t.$Lb)(J);
									},
									H = new C.$Zc(),
									q = H.add(A.createQuickPick({ useSeparators: !0 }));
								q.placeholder = (0, r.localize)(4563, null);
								const V = x();
								(q.items = V),
									H.add(
										q.onDidTriggerItemButton(async (G) => {
											if (G.button === U) {
												const K = {
													target: { sessionId: G.item.chat.sessionId },
													pinned: !0,
												};
												O.openEditor(
													{ resource: o.$cMb.getNewEditorUri(), options: K },
													$.$JY,
												),
													q.hide();
											} else if (G.button === z)
												N.removeHistoryEntry(G.item.chat.sessionId),
													(q.items = x());
											else if (G.button === F) {
												const K = await A.input({
													title: (0, r.localize)(4564, null),
													value: G.item.chat.title,
												});
												K && N.setChatSessionTitle(G.item.chat.sessionId, K),
													B();
											}
										}),
									),
									H.add(
										q.onDidAccept(async () => {
											try {
												const K = q.selectedItems[0].chat.sessionId;
												(await R.openView(p.$MYb)).loadSession(K);
											} finally {
												q.hide();
											}
										}),
									),
									H.add(q.onDidHide(() => H.dispose())),
									q.show();
							};
						B();
					}
				}
				class P extends u.$3X {
					constructor() {
						super({
							id: "workbench.action.openChat",
							title: (0, r.localize2)(4568, "Open Editor"),
							f1: !0,
							category: e.$3Yb,
							precondition: f.$51,
						});
					}
					async run(M) {
						await M.get($.$IY).openEditor({
							resource: o.$cMb.getNewEditorUri(),
							options: { pinned: !0 },
						});
					}
				}
				function k() {
					(0, u.$4X)(I),
						(0, u.$4X)(T),
						(0, u.$4X)(P),
						(0, u.$4X)(
							class extends u.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.clearInputHistory",
										title: (0, r.localize2)(4569, "Clear Input History"),
										precondition: f.$51,
										category: e.$3Yb,
										f1: !0,
									});
								}
								async run(M, ...N) {
									M.get(l.$TYb).clearHistory();
								}
							},
						),
						(0, u.$4X)(
							class extends u.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.clearHistory",
										title: (0, r.localize2)(4570, "Clear All Workspace Chats"),
										precondition: f.$51,
										category: e.$3Yb,
										f1: !0,
									});
								}
								async run(M, ...N) {
									const A = M.get(y.$EY),
										R = M.get(v.$HMb);
									M.get(b.$J2).clearAllHistoryEntries();
									const B = R.getViewWithId(p.$MYb);
									B && B.widget.clear(),
										A.groups.forEach((U) => {
											U.editors.forEach((z) => {
												z instanceof o.$cMb && (0, g.$1Yb)(M, z);
											});
										});
								}
							},
						),
						(0, u.$4X)(
							class extends m.$ktb {
								constructor() {
									super({
										id: "chat.action.focus",
										title: (0, r.localize2)(4571, "Focus Chat List"),
										precondition: a.$Kj.and(f.$31),
										category: e.$3Yb,
										keybinding: [
											{
												when: f.$81,
												primary: E.KeyMod.CtrlCmd | E.KeyCode.UpArrow,
												weight: c.KeybindingWeight.EditorContrib,
											},
											{
												when: a.$Kj.or(h.$6Lb, h.$5Lb),
												primary: E.KeyMod.CtrlCmd | E.KeyCode.UpArrow,
												weight: c.KeybindingWeight.EditorContrib,
											},
										],
									});
								}
								runEditorCommand(M, N) {
									const A = N.getModel()?.uri;
									A && M.get(p.$GYb).getWidgetByInputUri(A)?.focusLastMessage();
								}
							},
						),
						(0, u.$4X)(
							class extends u.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.focusInput",
										title: (0, r.localize2)(4572, "Focus Chat Input"),
										f1: !1,
										keybinding: {
											primary: E.KeyMod.CtrlCmd | E.KeyCode.DownArrow,
											weight: c.KeybindingWeight.WorkbenchContrib,
											when: a.$Kj.and(f.$41, f.$31.negate()),
										},
									});
								}
								run(M, ...N) {
									M.get(p.$GYb).lastFocusedWidget?.focusInput();
								}
							},
						);
				}
				function L(D, M = !0) {
					return (0, s.$0Tb)(D)
						? (M ? `${D.username}: ` : "") + D.messageText
						: (M ? `${D.username}: ` : "") + D.response.toString();
				}
			},
		)
