import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import './chatActions.js';
import '../chat.js';
import '../../common/chatContextKeys.js';
import '../../common/chatViewModel.js';
define(
			de[3808],
			he([1, 0, 27, 4, 11, 43, 402, 208, 207, 283]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*nls*/,
 w /*actions*/,
 E /*keybindingsRegistry*/,
 C /*chatActions*/,
 d /*chat*/,
 m /*chatContextKeys*/,
 r /*chatViewModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$IIc = u);
				function u() {
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.nextFileTree",
									title: (0, i.localize2)(4598, "Next File Tree"),
									keybinding: {
										primary: t.KeyMod.CtrlCmd | t.KeyCode.F9,
										weight: E.KeybindingWeight.WorkbenchContrib,
										when: m.$41,
									},
									precondition: m.$51,
									f1: !0,
									category: C.$3Yb,
								});
							}
							run(c, ...n) {
								a(c, !1);
							}
						},
					),
						(0, w.$4X)(
							class extends w.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.previousFileTree",
										title: (0, i.localize2)(4599, "Previous File Tree"),
										keybinding: {
											primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.F9,
											weight: E.KeybindingWeight.WorkbenchContrib,
											when: m.$41,
										},
										precondition: m.$51,
										f1: !0,
										category: C.$3Yb,
									});
								}
								run(c, ...n) {
									a(c, !0);
								}
							},
						);
				}
				function a(h, c) {
					const g = h.get(d.$GYb).lastFocusedWidget;
					if (!g) return;
					const p = !g.inputEditor.hasWidgetFocus() && g.getFocus(),
						f =
							((0, r.$$Tb)(p) ? p : void 0) ??
							g.viewModel
								?.getItems()
								.reverse()
								.find((y) => (0, r.$$Tb)(y));
					if (!f) return;
					g.reveal(f);
					const b = g.getFileTreeInfosForResponse(f),
						s = g.getLastFocusedFileTreeForResponse(f),
						l = s
							? (s.treeIndex + (c ? -1 : 1) + b.length) % b.length
							: c
								? b.length - 1
								: 0;
					b[l]?.focus();
				}
			},
		),
		