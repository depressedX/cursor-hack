define(de[645], he([1, 0, 1122, 1124]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Klb = w);
			async function w(E, C = {}) {
				const {
						x: d,
						y: m,
						platform: r,
						rects: u,
						elements: a,
						strategy: h,
					} = E,
					{
						boundary: c = "clippingAncestors",
						rootBoundary: n = "viewport",
						elementContext: g = "floating",
						altBoundary: p = !1,
						padding: o = 0,
					} = C,
					f = (0, t.$Ilb)(o),
					s = a[p ? (g === "floating" ? "reference" : "floating") : g],
					l = (0, i.$Jlb)(
						await r.getClippingRect({
							element:
								((await r.isElement?.(s)) ?? !0)
									? s
									: s.contextElement ||
										(await r.getDocumentElement?.(a.floating)),
							boundary: c,
							rootBoundary: n,
							strategy: h,
						}),
					),
					y = g === "floating" ? { ...u.floating, x: d, y: m } : u.reference,
					$ = await r.getOffsetParent?.(a.floating),
					v = (await r.isElement?.($))
						? (await r.getScale?.($)) || { x: 1, y: 1 }
						: { x: 1, y: 1 },
					S = (0, i.$Jlb)(
						r.convertOffsetParentRelativeRectToViewportRelativeRect
							? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
									rect: y,
									offsetParent: $,
									strategy: h,
								})
							: y,
					);
				return {
					top: (l.top - S.top + f.top) / v.y,
					bottom: (S.bottom - l.bottom + f.bottom) / v.y,
					left: (l.left - S.left + f.left) / v.x,
					right: (S.right - l.right + f.right) / v.x,
				};
			}
		}),
		define(
			de[2203],
			he([1, 0, 645, 1494, 582, 1495, 1120, 487]),
			function (ce, e, t, i, w, E, C, d) {
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
		),
		define(
			de[2204],
			he([1, 0, 645, 1495, 2198, 2202, 1121, 487]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.flip = void 0);
				const m = (r = {}) => ({
					name: "flip",
					options: r,
					async fn(u) {
						const {
								placement: a,
								middlewareData: h,
								rects: c,
								initialPlacement: n,
								platform: g,
								elements: p,
							} = u,
							{
								mainAxis: o = !0,
								crossAxis: f = !0,
								fallbackPlacements: b,
								fallbackStrategy: s = "bestFit",
								fallbackAxisSideDirection: l = "none",
								flipAlignment: y = !0,
								...$
							} = r,
							v = (0, d.$Nlb)(a),
							S = (0, d.$Nlb)(n) === n,
							I = await g.isRTL?.(p.floating),
							T = b || (S || !y ? [(0, C.$Vlb)(n)] : (0, w.$1lb)(n));
						!b && l !== "none" && T.push(...(0, E.$2lb)(n, y, l, I));
						const P = [n, ...T],
							k = await (0, t.$Klb)(u, $),
							L = [];
						let D = h.flip?.overflows || [];
						if ((o && L.push(k[v]), f)) {
							const { main: M, cross: N } = (0, i.$Wlb)(a, c, I);
							L.push(k[M], k[N]);
						}
						if (
							((D = [...D, { placement: a, overflows: L }]),
							!L.every((M) => M <= 0))
						) {
							const M = (h.flip?.index || 0) + 1,
								N = P[M];
							if (N)
								return {
									data: { index: M, overflows: D },
									reset: { placement: N },
								};
							let A = D.filter((R) => R.overflows[0] <= 0).sort(
								(R, O) => R.overflows[1] - O.overflows[1],
							)[0]?.placement;
							if (!A)
								switch (s) {
									case "bestFit": {
										const R = D.map((O) => [
											O.placement,
											O.overflows
												.filter((B) => B > 0)
												.reduce((B, U) => B + U, 0),
										]).sort((O, B) => O[1] - B[1])[0]?.[0];
										R && (A = R);
										break;
									}
									case "initialPlacement":
										A = n;
										break;
									default:
								}
							if (a !== A) return { reset: { placement: A } };
						}
						return {};
					},
				});
				e.flip = m;
			},
		),
		