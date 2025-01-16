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
		