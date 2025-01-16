define(de[2205], he([1, 0, 645, 1494]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.hide = void 0);
			function w(d, m) {
				return {
					top: d.top - m.height,
					right: d.right - m.width,
					bottom: d.bottom - m.height,
					left: d.left - m.width,
				};
			}
			function E(d) {
				return i.$Tlb.some((m) => d[m] >= 0);
			}
			const C = (d = {}) => ({
				name: "hide",
				options: d,
				async fn(m) {
					const { strategy: r = "referenceHidden", ...u } = d,
						{ rects: a } = m;
					switch (r) {
						case "referenceHidden": {
							const h = await (0, t.$Klb)(m, {
									...u,
									elementContext: "reference",
								}),
								c = w(h, a.reference);
							return {
								data: { referenceHiddenOffsets: c, referenceHidden: E(c) },
							};
						}
						case "escaped": {
							const h = await (0, t.$Klb)(m, { ...u, altBoundary: !0 }),
								c = w(h, a.floating);
							return { data: { escapedOffsets: c, escaped: E(c) } };
						}
						default:
							return {};
					}
				},
			});
			e.hide = C;
		}),
		define(
			de[2206],
			he([1, 0, 583, 1122, 487, 1123, 1124]),
			function (ce, e, t, i, w, E, C) {
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
		),
		define(
			de[2207],
			he([1, 0, 645, 582, 583, 487, 1123]),
			function (ce, e, t, i, w, E, C) {
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
		),
		