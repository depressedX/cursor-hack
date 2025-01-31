import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../controller/coreActions.js';
import '../../../common/notebookCommon.js';
define(
			de[3495],
			he([1, 0, 4, 11, 10, 238, 70]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*configuration*/,
 E /*coreActions*/,
 C /*notebookCommon*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YFc = void 0);
				const d = "notebook.toggleCellToolbarPosition";
				class m extends i.$3X {
					constructor() {
						super({
							id: d,
							title: (0, t.localize2)(7777, "Toggle Cell Toolbar Position"),
							menu: [{ id: i.$XX.NotebookCellTitle, group: "View", order: 1 }],
							category: E.$p5b,
							f1: !1,
						});
					}
					async run(u, a) {
						const h = a && a.ui ? a.notebookEditor : void 0;
						if (h && h.hasModel()) {
							const c = h.textModel.viewType,
								n = u.get(w.$gj),
								g = n.getValue(C.$56.cellToolbarLocation),
								p = this.togglePosition(c, g);
							await n.updateValue(C.$56.cellToolbarLocation, p);
						}
					}
					togglePosition(u, a) {
						if (typeof a == "string")
							if (["left", "right", "hidden"].indexOf(a) >= 0) {
								const h = a === "right" ? "left" : "right",
									c = { default: a };
								return (c[u] = h), c;
							} else {
								const h = { default: "right" };
								return (h[u] = "left"), h;
							}
						else {
							const c =
									(a[u] ?? a.default ?? "right") === "right" ? "left" : "right",
								n = { ...a };
							return (n[u] = c), n;
						}
					}
				}
				(e.$YFc = m), (0, i.$4X)(m);
			},
		)
