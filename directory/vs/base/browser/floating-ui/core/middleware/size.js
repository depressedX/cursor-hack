import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../detectOverflow.js';
import '../utils/getAlignment.js';
import '../utils/getMainAxisFromPlacement.js';
import '../utils/getSide.js';
import '../utils/math.js';
define(
			de[2207],
			he([1, 0, 645, 582, 583, 487, 1123]),
			function (ce /*require*/,
 e /*exports*/,
 t /*detectOverflow*/,
 i /*getAlignment*/,
 w /*getMainAxisFromPlacement*/,
 E /*getSide*/,
 C /*math*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.size = void 0);
				const d = (m = {}) => ({
					name: "size",
					options: m,
					async fn(r) {
						const { placement: u, rects: a, platform: h, elements: c } = r,
							{ apply: n = () => {}, ...g } = m,
							p = await (0, t.$Klb)(r, g),
							o = (0, E.$Nlb)(u),
							f = (0, i.$Llb)(u),
							s = (0, w.$Olb)(u) === "x",
							{ width: l, height: y } = a.floating;
						let $, v;
						o === "top" || o === "bottom"
							? (($ = o),
								(v =
									f === ((await h.isRTL?.(c.floating)) ? "start" : "end")
										? "left"
										: "right"))
							: ((v = o), ($ = f === "end" ? "top" : "bottom"));
						const S = y - p[$],
							I = l - p[v],
							T = !r.middlewareData.shift;
						let P = S,
							k = I;
						if (s) {
							const D = l - p.left - p.right;
							k = f || T ? (0, C.min)(I, D) : D;
						} else {
							const D = y - p.top - p.bottom;
							P = f || T ? (0, C.min)(S, D) : D;
						}
						if (T && !f) {
							const D = (0, C.max)(p.left, 0),
								M = (0, C.max)(p.right, 0),
								N = (0, C.max)(p.top, 0),
								A = (0, C.max)(p.bottom, 0);
							s
								? (k =
										l -
										2 *
											(D !== 0 || M !== 0
												? D + M
												: (0, C.max)(p.left, p.right)))
								: (P =
										y -
										2 *
											(N !== 0 || A !== 0
												? N + A
												: (0, C.max)(p.top, p.bottom)));
						}
						await n({ ...r, availableWidth: k, availableHeight: P });
						const L = await h.getDimensions(c.floating);
						return l !== L.width || y !== L.height
							? { reset: { rects: !0 } }
							: {};
					},
				});
				e.size = d;
			},
		)
