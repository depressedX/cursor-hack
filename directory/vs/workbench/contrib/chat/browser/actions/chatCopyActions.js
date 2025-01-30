import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import './chatActions.js';
import '../chat.js';
import '../../common/chatContextKeys.js';
import '../../common/chatViewModel.js';
define(
			de[3807],
			he([1, 0, 4, 11, 121, 402, 208, 207, 283]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*clipboardService*/,
 E /*chatActions*/,
 C /*chat*/,
 d /*chatContextKeys*/,
 m /*chatViewModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$GIc = r);
				function r() {
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.copyAll",
									title: (0, t.localize2)(4591, "Copy All"),
									f1: !1,
									category: E.$3Yb,
									menu: {
										id: i.$XX.ChatContext,
										when: d.$U1.toNegated(),
										group: "copy",
									},
								});
							}
							run(a, ...h) {
								const c = a.get(w.$Vxb),
									g = a.get(C.$GYb).lastFocusedWidget;
								if (g) {
									const o = g.viewModel
										?.getItems()
										.filter(
											(f) =>
												(0, m.$0Tb)(f) ||
												((0, m.$$Tb)(f) && !f.errorDetails?.responseIsFiltered),
										)
										.map((f) => (0, E.$6Yb)(f))
										.join(`

`);
									o && c.writeText(o);
								}
							}
						},
					),
						(0, i.$4X)(
							class extends i.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.copyItem",
										title: (0, t.localize2)(4592, "Copy"),
										f1: !1,
										category: E.$3Yb,
										menu: {
											id: i.$XX.ChatContext,
											when: d.$U1.toNegated(),
											group: "copy",
										},
									});
								}
								run(a, ...h) {
									const c = h[0];
									if (!(0, m.$0Tb)(c) && !(0, m.$$Tb)(c)) return;
									const n = a.get(w.$Vxb),
										g = (0, E.$6Yb)(c, !1);
									n.writeText(g);
								}
							},
						);
				}
			},
		),
		