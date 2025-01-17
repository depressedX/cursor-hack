import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getComputedStyle.js';
import './is.js';
import './math.js';
define(de[1572], he([1, 0, 662, 324, 900]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rmb = E);
			function E(C) {
				const d = (0, t.$dmb)(C);
				let m = parseFloat(d.width) || 0,
					r = parseFloat(d.height) || 0;
				const u = (0, i.$gmb)(C),
					a = u ? C.offsetWidth : m,
					h = u ? C.offsetHeight : r,
					c = (0, w.$qmb)(m) !== a || (0, w.$qmb)(r) !== h;
				return c && ((m = a), (r = h)), { width: m, height: r, fallback: c };
			}
		}),
		