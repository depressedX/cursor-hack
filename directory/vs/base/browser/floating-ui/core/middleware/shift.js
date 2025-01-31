import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../detectOverflow.js';
import '../utils/getCrossAxis.js';
import '../utils/getMainAxisFromPlacement.js';
import '../utils/getSide.js';
import '../utils/within.js';
define(
			de[2209],
			he([1, 0, 645, 2197, 583, 487, 1125]),
			function (ce /*require*/,
 e /*exports*/,
 t /*detectOverflow*/,
 i /*getCrossAxis*/,
 w /*getMainAxisFromPlacement*/,
 E /*getSide*/,
 C /*within*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$lb = e.$0lb = void 0);
				const d = (r = {}) => ({
					name: "shift",
					options: r,
					async fn(u) {
						const { x: a, y: h, placement: c } = u,
							{
								mainAxis: n = !0,
								crossAxis: g = !1,
								limiter: p = { fn: ({ x: S, y: I }) => ({ x: S, y: I }) },
								...o
							} = r,
							f = { x: a, y: h },
							b = await (0, t.$Klb)(u, o),
							s = (0, w.$Olb)((0, E.$Nlb)(c)),
							l = (0, i.$9lb)(s);
						let y = f[s],
							$ = f[l];
						if (n) {
							const S = s === "y" ? "top" : "left",
								I = s === "y" ? "bottom" : "right",
								T = y + b[S],
								P = y - b[I];
							y = (0, C.$Rlb)(T, y, P);
						}
						if (g) {
							const S = l === "y" ? "top" : "left",
								I = l === "y" ? "bottom" : "right",
								T = $ + b[S],
								P = $ - b[I];
							$ = (0, C.$Rlb)(T, $, P);
						}
						const v = p.fn({ ...u, [s]: y, [l]: $ });
						return { ...v, data: { x: v.x - a, y: v.y - h } };
					},
				});
				e.$0lb = d;
				const m = (r = {}) => ({
					options: r,
					fn(u) {
						const { x: a, y: h, placement: c, rects: n, middlewareData: g } = u,
							{ offset: p = 0, mainAxis: o = !0, crossAxis: f = !0 } = r,
							b = { x: a, y: h },
							s = (0, w.$Olb)(c),
							l = (0, i.$9lb)(s);
						let y = b[s],
							$ = b[l];
						const v = typeof p == "function" ? p(u) : p,
							S =
								typeof v == "number"
									? { mainAxis: v, crossAxis: 0 }
									: { mainAxis: 0, crossAxis: 0, ...v };
						if (o) {
							const I = s === "y" ? "height" : "width",
								T = n.reference[s] - n.floating[I] + S.mainAxis,
								P = n.reference[s] + n.reference[I] - S.mainAxis;
							y < T ? (y = T) : y > P && (y = P);
						}
						if (f) {
							const I = s === "y" ? "width" : "height",
								T = ["top", "left"].includes((0, E.$Nlb)(c)),
								P =
									n.reference[l] -
									n.floating[I] +
									((T && g.offset?.[l]) || 0) +
									(T ? 0 : S.crossAxis),
								k =
									n.reference[l] +
									n.reference[I] +
									(T ? 0 : g.offset?.[l] || 0) -
									(T ? S.crossAxis : 0);
							$ < P ? ($ = P) : $ > k && ($ = k);
						}
						return { [s]: y, [l]: $ };
					},
				});
				e.$$lb = m;
			},
		)
