import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../utils/getAlignment.js';
import '../utils/getMainAxisFromPlacement.js';
import '../utils/getSide.js';
define(de[2201], he([1, 0, 582, 583, 487]), function (ce /*require*/,
 e /*exports*/,
 t /*getAlignment*/,
 i /*getMainAxisFromPlacement*/,
 w /*getSide*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8lb = void 0),
				(e.$7lb = E);
			async function E(d, m) {
				const { placement: r, platform: u, elements: a } = d,
					h = await u.isRTL?.(a.floating),
					c = (0, w.$Nlb)(r),
					n = (0, t.$Llb)(r),
					g = (0, i.$Olb)(r) === "x",
					p = ["left", "top"].includes(c) ? -1 : 1,
					o = h && g ? -1 : 1,
					f = typeof m == "function" ? m(d) : m;
				let {
					mainAxis: b,
					crossAxis: s,
					alignmentAxis: l,
				} = typeof f == "number"
					? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
					: { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
				return (
					n && typeof l == "number" && (s = n === "end" ? l * -1 : l),
					g ? { x: s * o, y: b * p } : { x: b * p, y: s * o }
				);
			}
			const C = (d = 0) => ({
				name: "offset",
				options: d,
				async fn(m) {
					const { x: r, y: u } = m,
						a = await E(m, d);
					return { x: r + a.x, y: u + a.y, data: a };
				},
			});
			e.$8lb = C;
		}),
		