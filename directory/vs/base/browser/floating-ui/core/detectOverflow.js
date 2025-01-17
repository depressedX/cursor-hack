import '../../../../../require.js';
import '../../../../../exports.js';
import './utils/getPaddingObject.js';
import './utils/rectToClientRect.js';
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
		