define(de[1573], he([1, 0, 75, 537, 324]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vmb = C);
			const E = { x: 0, y: 0 };
			function C(d, m = !0, r) {
				if (!(0, w.$mmb)()) return E;
				const u = d ? (0, i.$cmb)(d) : t.$Bfb;
				return !r || (m && r !== u)
					? E
					: {
							x: u.visualViewport?.offsetLeft || 0,
							y: u.visualViewport?.offsetTop || 0,
						};
			}
		}),
		