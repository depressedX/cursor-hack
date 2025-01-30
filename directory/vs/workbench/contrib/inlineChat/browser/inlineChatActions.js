import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/widget/diffEditor/embeddedDiffEditorWidget.js';
import '../../../../editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../editor/common/editorContextKeys.js';
import './inlineChatController.js';
import '../common/inlineChat.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/log/common/log.js';
import '../../chat/common/chatService.js';
import '../../chat/common/chatContextKeys.js';
define(
			de[1061],
			he([
				1, 0, 14, 27, 56, 46, 784, 281, 71, 427, 257, 4, 8, 5, 43, 18, 65, 91,
				31, 79, 131, 34, 218, 207,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*codicons*/,
				i /*keyCodes*/,
				w /*editorBrowser*/,
				E /*editorExtensions*/,
				C /*embeddedDiffEditorWidget*/,
				d /*embeddedCodeEditorWidget*/,
				m /*editorContextKeys*/,
				r /*inlineChatController*/,
				u /*inlineChat*/,
				a /*nls*/,
				h /*contextkey*/,
				c /*instantiation*/,
				n /*keybindingsRegistry*/,
				g /*editorService*/,
				p /*codeEditorService*/,
				o /*accessibility*/,
				f /*commands*/,
				b /*iconRegistry*/,
				s /*preferences*/,
				l /*log*/,
				y /*chatService*/,
				$ /*chatContextKeys*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iJc =
						e.$hJc =
						e.$gJc =
						e.$fJc =
						e.$eJc =
						e.$dJc =
						e.$cJc =
						e.$bJc =
						e.$aJc =
						e.$_Ic =
						e.$$Ic =
						e.$0Ic =
						e.$9Ic =
						e.$8Ic =
						e.$7Ic =
						e.$6Ic =
						e.$4Ic =
						e.$3Ic =
							void 0),
					(e.$5Ic = S),
					f.$fk.registerCommandAlias(
						"interactiveEditor.start",
						"inlineChat.start",
					),
					f.$fk.registerCommandAlias("interactive.acceptChanges", u.$cLb),
					(e.$3Ic = (0, a.localize2)(7085, "Start in Editor")),
					(e.$4Ic = (0, b.$$O)(
						"start-inline-chat",
						t.$ak.sparkle,
						(0, a.localize)(7076, null),
					));
				let v;
				function S(H) {
					v = H;
				}
				class I extends E.$ktb {
					constructor() {
						super({
							id: "inlineChat.start",
							title: e.$3Ic,
							category: P.category,
							f1: !0,
							precondition: h.$Kj.and(u.$VKb, m.EditorContextKeys.writable),
							keybinding: {
								when: m.EditorContextKeys.focus,
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyI,
								secondary: [(0, i.$os)(i.$ps, i.KeyCode.KeyI)],
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyI,
									secondary: [(0, i.$os)(i.$qs, i.KeyCode.KeyI)],
								},
							},
							icon: e.$4Ic,
						});
					}
					runEditorCommand(q, V, ...G) {
						const K = r.$Z1b.get(V);
						if (!K) return;
						v && q.get(c.$Li).invokeFunction(v, K, this);
						let J;
						const W = G[0];
						W && r.$Y1b.isInlineChatRunOptions(W) && (J = W),
							r.$Z1b.get(V)?.run({ ...J });
					}
				}
				e.$6Ic = I;
				class T extends E.$ktb {
					constructor() {
						super({
							id: "inlineChat.unstash",
							title: (0, a.localize2)(
								7086,
								"Resume Last Dismissed Inline Chat",
							),
							category: P.category,
							precondition: h.$Kj.and(u.$7Kb, m.EditorContextKeys.writable),
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyZ,
							},
						});
					}
					async runEditorCommand(q, V, ...G) {
						const K = r.$Z1b.get(V);
						if (K) {
							const J = K.unstashLastSession();
							J && K.run({ existingSession: J, isUnstashed: !0 });
						}
					}
				}
				e.$7Ic = T;
				class P extends E.$ktb {
					static {
						this.category = (0, a.localize2)(7087, "Inline Chat");
					}
					constructor(q) {
						super({
							...q,
							category: P.category,
							precondition: h.$Kj.and(u.$VKb, q.precondition),
						});
					}
					runEditorCommand(q, V, ...G) {
						const K = q.get(g.$IY),
							J = q.get(l.$ik);
						let W = r.$Z1b.get(V);
						if (!W) {
							const { activeTextEditorControl: X } = K;
							(0, w.$0sb)(X)
								? (V = X)
								: (0, w.$$sb)(X) && (V = X.getModifiedEditor()),
								(W = r.$Z1b.get(V));
						}
						if (!W) {
							J.warn(
								"[IE] NO controller found for action",
								this.desc.id,
								V.getModel()?.uri,
							);
							return;
						}
						if ((V instanceof d.$wDb && (V = V.getParentEditor()), !W)) {
							for (const X of q.get(p.$dtb).listDiffEditors())
								(X.getOriginalEditor() === V || X.getModifiedEditor() === V) &&
									X instanceof C.$7mc &&
									this.runEditorCommand(q, X.getParentEditor(), ...G);
							return;
						}
						this.runInlineChatCommand(q, W, V, ...G);
					}
				}
				e.$8Ic = P;
				class k extends P {
					constructor() {
						super({
							id: "inlineChat.arrowOutUp",
							title: (0, a.localize)(7077, null),
							precondition: h.$Kj.and(
								u.$XKb,
								u.$2Kb,
								m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
								o.$YK.negate(),
							),
							keybinding: {
								weight: n.KeybindingWeight.EditorCore,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.arrowOut(!0);
					}
				}
				e.$9Ic = k;
				class L extends P {
					constructor() {
						super({
							id: "inlineChat.arrowOutDown",
							title: (0, a.localize)(7078, null),
							precondition: h.$Kj.and(
								u.$XKb,
								u.$3Kb,
								m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
								o.$YK.negate(),
							),
							keybinding: {
								weight: n.KeybindingWeight.EditorCore,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.arrowOut(!1);
					}
				}
				e.$0Ic = L;
				class D extends E.$ktb {
					constructor() {
						super({
							id: "inlineChat.focus",
							title: (0, a.localize2)(7088, "Focus Input"),
							f1: !0,
							category: P.category,
							precondition: h.$Kj.and(
								m.EditorContextKeys.editorTextFocus,
								u.$WKb,
								u.$XKb.negate(),
								o.$YK.negate(),
							),
							keybinding: [
								{
									weight: n.KeybindingWeight.EditorCore + 10,
									when: h.$Kj.and(
										u.$6Kb.isEqualTo("above"),
										m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
									),
									primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
								},
								{
									weight: n.KeybindingWeight.EditorCore + 10,
									when: h.$Kj.and(
										u.$6Kb.isEqualTo("below"),
										m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
									),
									primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
								},
							],
						});
					}
					runEditorCommand(q, V, ...G) {
						r.$Z1b.get(V)?.focus();
					}
				}
				e.$$Ic = D;
				class M extends P {
					constructor() {
						super({
							id: "inlineChat.discard",
							title: (0, a.localize)(7079, null),
							icon: t.$ak.discard,
							precondition: u.$WKb,
							keybinding: {
								weight: n.KeybindingWeight.EditorContrib - 1,
								primary: i.KeyCode.Escape,
								when: u.$8Kb.negate(),
							},
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						await V.cancelSession();
					}
				}
				e.$_Ic = M;
				class N extends P {
					constructor() {
						super({
							id: u.$cLb,
							title: (0, a.localize2)(7089, "Accept Changes"),
							shortTitle: (0, a.localize)(7080, null),
							icon: t.$ak.check,
							f1: !0,
							precondition: h.$Kj.and(
								u.$WKb,
								h.$Kj.or(
									u.$9Kb.toNegated(),
									u.$_Kb.notEqualsTo(u.EditMode.Preview),
								),
							),
							keybinding: [
								{
									weight: n.KeybindingWeight.WorkbenchContrib + 10,
									primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
								},
							],
							menu: [
								{
									id: u.$jLb,
									group: "0_main",
									order: 1,
									when: h.$Kj.and(
										$.$11.toNegated(),
										u.$aLb.toNegated(),
										u.$bLb.isEqualTo(u.InlineChatResponseType.MessagesAndEdits),
									),
								},
								{ id: u.$lLb, group: "navigation", order: 1 },
							],
						});
					}
					async runInlineChatCommand(q, V, G, K) {
						V.acceptHunk(K);
					}
				}
				e.$aJc = N;
				class A extends P {
					constructor() {
						super({
							id: u.$dLb,
							title: (0, a.localize)(7081, null),
							icon: t.$ak.chromeClose,
							precondition: u.$WKb,
							menu: [
								{
									id: u.$jLb,
									group: "0_main",
									order: 2,
									when: h.$Kj.and(
										$.$11.toNegated(),
										u.$aLb.negate(),
										u.$bLb.isEqualTo(u.InlineChatResponseType.MessagesAndEdits),
										u.$_Kb.isEqualTo(u.EditMode.Live),
									),
								},
								{ id: u.$lLb, group: "navigation", order: 2 },
							],
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyCode.Escape,
								when: u.$bLb.isEqualTo(
									u.InlineChatResponseType.MessagesAndEdits,
								),
							},
						});
					}
					async runInlineChatCommand(q, V, G, K) {
						return V.discardHunk(K);
					}
				}
				e.$bJc = A;
				class R extends P {
					constructor() {
						super({
							id: u.$eLb,
							title: (0, a.localize2)(7090, "Rerun Request"),
							shortTitle: (0, a.localize)(7082, null),
							f1: !1,
							icon: t.$ak.refresh,
							precondition: u.$WKb,
							menu: {
								id: u.$jLb,
								group: "0_main",
								order: 5,
								when: h.$Kj.and(
									$.$11.toNegated(),
									u.$aLb.negate(),
									u.$bLb.notEqualsTo(u.InlineChatResponseType.None),
								),
							},
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyR,
							},
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						const J = q.get(y.$J2),
							X = V.chatWidget.viewModel?.model?.getRequests().at(-1);
						X &&
							(await J.resendRequest(X, {
								noCommandDetection: !1,
								attempt: X.attempt + 1,
								location: V.chatWidget.location,
							}));
					}
				}
				e.$cJc = R;
				class O extends P {
					constructor() {
						super({
							id: "inlineChat.close",
							title: (0, a.localize)(7083, null),
							icon: t.$ak.close,
							precondition: u.$WKb,
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyCode.Escape,
							},
							menu: [
								{ id: u.$iLb, group: "0_main", order: 10 },
								{
									id: u.$jLb,
									group: "0_main",
									order: 1,
									when: h.$Kj.and(
										u.$aLb.negate(),
										h.$Kj.or(
											u.$bLb.isEqualTo(u.InlineChatResponseType.Messages),
											u.$_Kb.isEqualTo(u.EditMode.Preview),
										),
									),
								},
							],
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						V.cancelSession();
					}
				}
				e.$dJc = O;
				class B extends P {
					constructor() {
						super({
							id: "inlineChat.configure",
							title: (0, a.localize2)(7091, "Configure Inline Chat"),
							icon: t.$ak.settingsGear,
							precondition: u.$WKb,
							f1: !0,
							menu: { id: u.$jLb, group: "zzz", order: 5 },
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						q.get(s.$7Z).openSettings({ query: "inlineChat" });
					}
				}
				e.$eJc = B;
				class U extends P {
					constructor() {
						super({
							id: "inlineChat.moveToNextHunk",
							title: (0, a.localize2)(7092, "Move to Next Change"),
							precondition: u.$WKb,
							f1: !0,
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyCode.F7,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.moveHunk(!0);
					}
				}
				e.$fJc = U;
				class z extends P {
					constructor() {
						super({
							id: "inlineChat.moveToPreviousHunk",
							title: (0, a.localize2)(7093, "Move to Previous Change"),
							f1: !0,
							precondition: u.$WKb,
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.Shift | i.KeyCode.F7,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.moveHunk(!1);
					}
				}
				e.$gJc = z;
				class F extends P {
					constructor() {
						super({
							id: u.$fLb,
							title: (0, a.localize)(7084, null),
							icon: t.$ak.commentDiscussion,
							precondition: u.$WKb,
							menu: [
								{
									id: u.$jLb,
									group: "more",
									order: 1,
									when: u.$bLb.notEqualsTo(u.InlineChatResponseType.Messages),
								},
								{
									id: u.$jLb,
									group: "0_main",
									order: 1,
									when: h.$Kj.and(
										$.$11.toNegated(),
										u.$bLb.isEqualTo(u.InlineChatResponseType.Messages),
										u.$aLb.negate(),
									),
								},
							],
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
								when: $.$31,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						return V.viewInChat();
					}
				}
				e.$hJc = F;
				class x extends P {
					constructor() {
						super({
							id: u.$gLb,
							precondition: h.$Kj.and(
								u.$WKb,
								u.$_Kb.isEqualTo(u.EditMode.Live),
								u.$0Kb,
							),
							title: (0, a.localize2)(7094, "Toggle Changes"),
							icon: t.$ak.diffSingle,
							toggled: { condition: u.$$Kb },
							menu: [
								{
									id: u.$jLb,
									group: "zzz",
									when: h.$Kj.and(u.$_Kb.isEqualTo(u.EditMode.Live)),
									order: 1,
								},
								{ id: u.$lLb, group: "navigation", when: u.$0Kb, order: 2 },
							],
						});
					}
					runInlineChatCommand(q, V, G, K) {
						V.toggleDiff(K);
					}
				}
				e.$iJc = x;
			},
		),
		