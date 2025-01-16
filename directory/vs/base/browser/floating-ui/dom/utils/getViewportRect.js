define(de[2662], he([1, 0, 538, 537, 324]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Gmb = E);
			function E(C, d) {
				const m = (0, i.$cmb)(C),
					r = (0, t.$xmb)(C),
					u = m.visualViewport;
				let a = r.clientWidth,
					h = r.clientHeight,
					c = 0,
					n = 0;
				if (u) {
					(a = u.width), (h = u.height);
					const g = (0, w.$mmb)();
					(!g || (g && d === "fixed")) &&
						((c = u.offsetLeft), (n = u.offsetTop));
				}
				return { width: a, height: h, x: c, y: n };
			}
		}),
		