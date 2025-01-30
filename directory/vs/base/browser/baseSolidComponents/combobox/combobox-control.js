import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../form-control/api.js';
import '../utils/api.js';
import './combobox-context.js';
define(
			de[2635],
			he([1, 0, 2, 2, 2, 115, 13, 593, 115, 486]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*api*/,
 C /*solid*/,
 d /*api*/,
 m /*api*/,
 r /*combobox-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$onb = u);
				function u(h) {
					const c = (0, d.$5mb)(),
						n = (0, r.$2mb)(),
						[g, p] = (0, C.splitProps)(h, ["ref", "children"]),
						o = () => n.listState().selectionManager();
					return (0, w.createComponent)(
						m.$5kb,
						(0, i.mergeProps)(
							{
								as: "div",
								ref(f) {
									const b = (0, E.mergeRefs)(n.setControlRef, g.ref);
									typeof b == "function" && b(f);
								},
							},
							() => n.dataset(),
							() => c.dataset(),
							p,
							{
								get children() {
									return (0, w.createComponent)(a, {
										state: {
											selectedOptions: () => n.selectedOptions(),
											remove: (f) => n.removeOptionFromSelection(f),
											clear: () => o().clearSelection(),
										},
										get children() {
											return g.children;
										},
									});
								},
							},
						),
					);
				}
				function a(h) {
					const c = (0, C.children)(() => {
						const n = h.children;
						return (0, E.$Ajb)(n) ? n(h.state) : n;
					});
					return (0, t.memo)(c);
				}
			},
		),
		