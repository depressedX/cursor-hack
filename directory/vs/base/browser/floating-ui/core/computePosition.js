import '../../../../../require.js';
import '../../../../../exports.js';
import './computeCoordsFromPlacement.js';
define(de[2200], he([1, 0, 2199]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bmb = void 0);
			const i = async (w, E, C) => {
				const {
						placement: d = "bottom",
						strategy: m = "absolute",
						middleware: r = [],
						platform: u,
					} = C,
					a = r.filter(Boolean),
					h = await u.isRTL?.(E);
				let c = await u.getElementRects({
						reference: w,
						floating: E,
						strategy: m,
					}),
					{ x: n, y: g } = (0, t.$amb)(c, d, h),
					p = d,
					o = {},
					f = 0;
				for (let b = 0; b < a.length; b++) {
					const { name: s, fn: l } = a[b],
						{
							x: y,
							y: $,
							data: v,
							reset: S,
						} = await l({
							x: n,
							y: g,
							initialPlacement: d,
							placement: p,
							strategy: m,
							middlewareData: o,
							rects: c,
							platform: u,
							elements: { reference: w, floating: E },
						});
					if (
						((n = y ?? n),
						(g = $ ?? g),
						(o = { ...o, [s]: { ...o[s], ...v } }),
						S && f <= 50)
					) {
						f++,
							typeof S == "object" &&
								(S.placement && (p = S.placement),
								S.rects &&
									(c =
										S.rects === !0
											? await u.getElementRects({
													reference: w,
													floating: E,
													strategy: m,
												})
											: S.rects),
								({ x: n, y: g } = (0, t.$amb)(c, p, h))),
							(b = -1);
						continue;
					}
				}
				return { x: n, y: g, placement: p, strategy: m, middlewareData: o };
			};
			e.$bmb = i;
		}),
		