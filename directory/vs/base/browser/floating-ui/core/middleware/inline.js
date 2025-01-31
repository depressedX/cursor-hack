import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../utils/getMainAxisFromPlacement.js';
import '../utils/getPaddingObject.js';
import '../utils/getSide.js';
import '../utils/math.js';
import '../utils/rectToClientRect.js';
define(
			de[2206],
			he([1, 0, 583, 1122, 487, 1123, 1124]),
			function (ce /*require*/,
 e /*exports*/,
 t /*getMainAxisFromPlacement*/,
 i /*getPaddingObject*/,
 w /*getSide*/,
 E /*math*/,
 C /*rectToClientRect*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6lb = void 0),
					(e.$5lb = m);
				function d(u) {
					const a = (0, E.min)(...u.map((g) => g.left)),
						h = (0, E.min)(...u.map((g) => g.top)),
						c = (0, E.max)(...u.map((g) => g.right)),
						n = (0, E.max)(...u.map((g) => g.bottom));
					return { x: a, y: h, width: c - a, height: n - h };
				}
				function m(u) {
					const a = u.slice().sort((n, g) => n.y - g.y),
						h = [];
					let c = null;
					for (let n = 0; n < a.length; n++) {
						const g = a[n];
						!c || g.y - c.y > c.height / 2
							? h.push([g])
							: h[h.length - 1].push(g),
							(c = g);
					}
					return h.map((n) => (0, C.$Jlb)(d(n)));
				}
				const r = (u = {}) => ({
					name: "inline",
					options: u,
					async fn(a) {
						const {
								placement: h,
								elements: c,
								rects: n,
								platform: g,
								strategy: p,
							} = a,
							{ padding: o = 2, x: f, y: b } = u,
							s = Array.from((await g.getClientRects?.(c.reference)) || []),
							l = m(s),
							y = (0, C.$Jlb)(d(s)),
							$ = (0, i.$Ilb)(o);
						function v() {
							if (
								l.length === 2 &&
								l[0].left > l[1].right &&
								f != null &&
								b != null
							)
								return (
									l.find(
										(I) =>
											f > I.left - $.left &&
											f < I.right + $.right &&
											b > I.top - $.top &&
											b < I.bottom + $.bottom,
									) || y
								);
							if (l.length >= 2) {
								if ((0, t.$Olb)(h) === "x") {
									const O = l[0],
										B = l[l.length - 1],
										U = (0, w.$Nlb)(h) === "top",
										z = O.top,
										F = B.bottom,
										x = U ? O.left : B.left,
										H = U ? O.right : B.right,
										q = H - x,
										V = F - z;
									return {
										top: z,
										bottom: F,
										left: x,
										right: H,
										width: q,
										height: V,
										x,
										y: z,
									};
								}
								const I = (0, w.$Nlb)(h) === "left",
									T = (0, E.max)(...l.map((O) => O.right)),
									P = (0, E.min)(...l.map((O) => O.left)),
									k = l.filter((O) => (I ? O.left === P : O.right === T)),
									L = k[0].top,
									D = k[k.length - 1].bottom,
									M = P,
									N = T,
									A = N - M,
									R = D - L;
								return {
									top: L,
									bottom: D,
									left: M,
									right: N,
									width: A,
									height: R,
									x: M,
									y: L,
								};
							}
							return y;
						}
						const S = await g.getElementRects({
							reference: { getBoundingClientRect: v },
							floating: c.floating,
							strategy: p,
						});
						return n.reference.x !== S.reference.x ||
							n.reference.y !== S.reference.y ||
							n.reference.width !== S.reference.width ||
							n.reference.height !== S.reference.height
							? { reset: { rects: S } }
							: {};
					},
				});
				e.$6lb = r;
			},
		)
