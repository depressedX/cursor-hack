import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/map.js';
import '../../../../base/common/network.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[834],
			he([1, 0, 76, 59, 23, 20, 5]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N6 = e.$I6 = void 0),
					(e.$J6 = u),
					(e.$K6 = a),
					(e.$L6 = h),
					(e.$M6 = c),
					(e.$I6 = (0, C.$Mi)("notebookDocumentService"));
				const d = ["W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f"],
					m = new RegExp(`^[${d.join("")}]+`),
					r = 7;
				function u(g) {
					if (g.scheme !== w.Schemas.vscodeNotebookCell) return;
					const p = g.fragment.indexOf("s");
					if (p < 0) return;
					const o = parseInt(g.fragment.substring(0, p).replace(m, ""), r),
						f = (0, t.$af)(g.fragment.substring(p + 1)).toString();
					if (!isNaN(o))
						return {
							handle: o,
							notebook: g.with({ scheme: f, fragment: null }),
						};
				}
				function a(g, p) {
					const o = p.toString(r),
						b = `${o.length < d.length ? d[o.length - 1] : "z"}${o}s${(0, t.$cf)(t.$Te.fromString(g.scheme), !0, !0)}`;
					return g.with({ scheme: w.Schemas.vscodeNotebookCell, fragment: b });
				}
				function h(g) {
					if (g.scheme !== w.Schemas.vscodeNotebookMetadata) return;
					const p = (0, t.$af)(g.fragment).toString();
					return g.with({ scheme: p, fragment: null });
				}
				function c(g) {
					const p = `${(0, t.$cf)(t.$Te.fromString(g.scheme), !0, !0)}`;
					return g.with({
						scheme: w.Schemas.vscodeNotebookMetadata,
						fragment: p,
					});
				}
				class n {
					constructor() {
						this.a = new i.$Gc();
					}
					getNotebook(p) {
						if (p.scheme === w.Schemas.vscodeNotebookCell) {
							const o = u(p);
							if (o) {
								const f = this.a.get(o.notebook);
								if (f) return f;
							}
						}
						return this.a.get(p);
					}
					addNotebookDocument(p) {
						this.a.set(p.uri, p);
					}
					removeNotebookDocument(p) {
						this.a.delete(p.uri);
					}
				}
				(e.$N6 = n), (0, E.$lK)(e.$I6, n, E.InstantiationType.Delayed);
			},
		),
		