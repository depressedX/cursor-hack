import '../../../../../require.js';
import '../../../../../exports.js';
define(de[2179], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zlb = i),
				(e.$Alb = w),
				(e.$Blb = C);
			function t(d) {
				const { x: m = 0, y: r = 0, width: u = 0, height: a = 0 } = d ?? {};
				if (typeof DOMRect == "function") return new DOMRect(m, r, u, a);
				const h = {
					x: m,
					y: r,
					width: u,
					height: a,
					top: r,
					right: m + u,
					bottom: r + a,
					left: m,
				};
				return { ...h, toJSON: () => h };
			}
			function i(d, m) {
				return {
					contextElement: d,
					getBoundingClientRect: () => {
						const u = m(d);
						return u ? t(u) : d ? d.getBoundingClientRect() : t();
					},
				};
			}
			function w(d) {
				return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(d);
			}
			const E = { top: "bottom", right: "left", bottom: "top", left: "right" };
			function C(d) {
				const [m, r] = d.split("-"),
					u = E[m];
				return r
					? m === "left" || m === "right"
						? `${u} ${r === "start" ? "top" : "bottom"}`
						: r === "start"
							? `${u} "left"`
							: `${u} "right"`
					: `${u} center`;
			}
		})
