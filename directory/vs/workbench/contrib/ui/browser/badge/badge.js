import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/badge/badge.js';
define(
			de[564],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 2510]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nac = void 0);
				const r = (0, t.template)("<span>"),
					u = (a) => {
						const h = (0, m.mergeProps)({ type: "default", size: "medium" }, a),
							{ type: c, size: n, text: g, style: p, class: o, ...f } = h;
						return (() => {
							const b = r();
							return (
								(0, C.spread)(
									b,
									(0, d.mergeProps)(
										{
											get class() {
												return [
													"cursor-badge",
													`cursor-badge-${c}`,
													`cursor-badge-${n}`,
													o,
												]
													.filter(Boolean)
													.join(" ");
											},
										},
										f,
									),
									!1,
									!0,
								),
								(0, E.insert)(b, g),
								(0, w.effect)((s) => (0, i.style)(b, p, s)),
								b
							);
						})();
					};
				e.$nac = u;
			},
		)
