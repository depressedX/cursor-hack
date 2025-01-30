import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../utils/getAlignment.js';
import '../utils/getLengthFromAxis.js';
import '../utils/getMainAxisFromPlacement.js';
import '../utils/getPaddingObject.js';
import '../utils/within.js';
define(
			de[2208],
			he([1, 0, 582, 1119, 583, 1122, 1125]),
			function (ce /*require*/,
 e /*exports*/,
 t /*getAlignment*/,
 i /*getLengthFromAxis*/,
 w /*getMainAxisFromPlacement*/,
 E /*getPaddingObject*/,
 C /*within*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Slb = void 0);
				const d = (m) => ({
					name: "arrow",
					options: m,
					async fn(r) {
						const { element: u, padding: a = 0 } = m || {},
							{
								x: h,
								y: c,
								placement: n,
								rects: g,
								platform: p,
								elements: o,
							} = r;
						if (u == null) return {};
						const f = (0, E.$Ilb)(a),
							b = { x: h, y: c },
							s = (0, w.$Olb)(n),
							l = (0, i.$Mlb)(s),
							y = await p.getDimensions(u),
							$ = s === "y",
							v = $ ? "top" : "left",
							S = $ ? "bottom" : "right",
							I = $ ? "clientHeight" : "clientWidth",
							T = g.reference[l] + g.reference[s] - b[s] - g.floating[l],
							P = b[s] - g.reference[s],
							k = await p.getOffsetParent?.(u);
						let L = k ? k[I] : 0;
						(!L || !(await p.isElement?.(k))) &&
							(L = o.floating[I] || g.floating[l]);
						const D = T / 2 - P / 2,
							M = f[v],
							N = L - y[l] - f[S],
							A = L / 2 - y[l] / 2 + D,
							R = (0, C.$Rlb)(M, A, N),
							B =
								(0, t.$Llb)(n) != null &&
								A != R &&
								g.reference[l] / 2 - (A < M ? f[v] : f[S]) - y[l] / 2 < 0
									? A < M
										? M - A
										: N - A
									: 0;
						return { [s]: b[s] - B, data: { [s]: R, centerOffset: A - R } };
					},
				});
				e.$Slb = d;
			},
		),
		