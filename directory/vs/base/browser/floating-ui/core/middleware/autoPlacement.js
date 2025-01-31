import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../detectOverflow.js';
import '../enums.js';
import '../utils/getAlignment.js';
import '../utils/getAlignmentSides.js';
import '../utils/getOppositeAlignmentPlacement.js';
import '../utils/getSide.js';
define(
			de[2203],
			he([1, 0, 645, 1494, 582, 1495, 1120, 487]),
			function (ce /*require*/,
 e /*exports*/,
 t /*detectOverflow*/,
 i /*enums*/,
 w /*getAlignment*/,
 E /*getAlignmentSides*/,
 C /*getOppositeAlignmentPlacement*/,
 d /*getSide*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zlb = void 0),
					(e.$Ylb = m);
				function m(u, a, h) {
					return (
						u
							? [
									...h.filter((n) => (0, w.$Llb)(n) === u),
									...h.filter((n) => (0, w.$Llb)(n) !== u),
								]
							: h.filter((n) => (0, d.$Nlb)(n) === n)
					).filter((n) =>
						u ? (0, w.$Llb)(n) === u || (a ? (0, C.$Xlb)(n) !== n : !1) : !0,
					);
				}
				const r = (u = {}) => ({
					name: "autoPlacement",
					options: u,
					async fn(a) {
						const {
								rects: h,
								middlewareData: c,
								placement: n,
								platform: g,
								elements: p,
							} = a,
							{
								crossAxis: o = !1,
								alignment: f,
								allowedPlacements: b = i.$Ulb,
								autoAlignment: s = !0,
								...l
							} = u,
							y = f !== void 0 || b === i.$Ulb ? m(f || null, s, b) : b,
							$ = await (0, t.$Klb)(a, l),
							v = c.autoPlacement?.index || 0,
							S = y[v];
						if (S == null) return {};
						const { main: I, cross: T } = (0, E.$Wlb)(
							S,
							h,
							await g.isRTL?.(p.floating),
						);
						if (n !== S) return { reset: { placement: y[0] } };
						const P = [$[(0, d.$Nlb)(S)], $[I], $[T]],
							k = [
								...(c.autoPlacement?.overflows || []),
								{ placement: S, overflows: P },
							],
							L = y[v + 1];
						if (L)
							return {
								data: { index: v + 1, overflows: k },
								reset: { placement: L },
							};
						const D = k
								.map((A) => {
									const R = (0, w.$Llb)(A.placement);
									return [
										A.placement,
										R && o
											? A.overflows.slice(0, 2).reduce((O, B) => O + B, 0)
											: A.overflows[0],
										A.overflows,
									];
								})
								.sort((A, R) => A[1] - R[1]),
							N =
								D.filter((A) =>
									A[2].slice(0, (0, w.$Llb)(A[0]) ? 2 : 3).every((R) => R <= 0),
								)[0]?.[0] || D[0][0];
						return N !== n
							? {
									data: { index: v + 1, overflows: k },
									reset: { placement: N },
								}
							: {};
					},
				});
				e.$Zlb = r;
			},
		)
