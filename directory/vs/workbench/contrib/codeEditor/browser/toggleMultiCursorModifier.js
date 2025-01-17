import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3416],
			he([1, 0, 3, 12, 4, 11, 10, 8, 30, 55, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YXc = void 0);
				class a extends E.$3X {
					static {
						this.ID = "workbench.action.toggleMultiCursorModifier";
					}
					static {
						this.a = "editor.multiCursorModifier";
					}
					constructor() {
						super({
							id: a.ID,
							title: (0, w.localize2)(4910, "Toggle Multi-Cursor Modifier"),
							f1: !0,
						});
					}
					run(g) {
						const p = g.get(C.$gj),
							f =
								p.getValue("editor").multiCursorModifier === "ctrlCmd"
									? "alt"
									: "ctrlCmd";
						return p.updateValue(a.a, f);
					}
				}
				e.$YXc = a;
				const h = new d.$5j("multiCursorModifier", "altKey");
				let c = class extends t.$1c {
					constructor(g, p) {
						super(),
							(this.b = g),
							(this.a = h.bindTo(p)),
							this.c(),
							this.D(
								g.onDidChangeConfiguration((o) => {
									o.affectsConfiguration("editor.multiCursorModifier") &&
										this.c();
								}),
							);
					}
					c() {
						const p =
							this.b.getValue("editor").multiCursorModifier === "ctrlCmd"
								? "ctrlCmd"
								: "altKey";
						this.a.set(p);
					}
				};
				(c = Ne([j(0, C.$gj), j(1, d.$6j)], c)),
					m.$Io
						.as(r.Extensions.Workbench)
						.registerWorkbenchContribution(c, u.LifecyclePhase.Restored),
					(0, E.$4X)(a),
					E.$ZX.appendMenuItem(E.$XX.MenubarSelectionMenu, {
						group: "4_config",
						command: { id: a.ID, title: (0, w.localize)(4907, null) },
						when: h.isEqualTo("ctrlCmd"),
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarSelectionMenu, {
						group: "4_config",
						command: {
							id: a.ID,
							title: i.$m
								? (0, w.localize)(4908, null)
								: (0, w.localize)(4909, null),
						},
						when: h.isEqualTo("altKey"),
						order: 1,
					});
			},
		),
		