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
		