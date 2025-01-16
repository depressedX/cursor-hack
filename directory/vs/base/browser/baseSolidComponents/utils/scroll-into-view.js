define(de[2182], he([1, 0]), function (ce, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$7kb = t);
		function t(w, E) {
			const C = i(w, E, "left"),
				d = i(w, E, "top"),
				m = E.offsetWidth,
				r = E.offsetHeight;
			let u = w.scrollLeft,
				a = w.scrollTop;
			const h = u + w.offsetWidth,
				c = a + w.offsetHeight;
			C <= u ? (u = C) : C + m > h && (u += C + m - h),
				d <= a ? (a = d) : d + r > c && (a += d + r - c),
				(w.scrollLeft = u),
				(w.scrollTop = a);
		}
		function i(w, E, C) {
			const d = C === "left" ? "offsetLeft" : "offsetTop";
			let m = 0;
			for (; E.offsetParent && ((m += E[d]), E.offsetParent !== w); ) {
				if (E.offsetParent.contains(w)) {
					m -= w[d];
					break;
				}
				E = E.offsetParent;
			}
			return m;
		}
	}),
		