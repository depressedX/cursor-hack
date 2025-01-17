import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import './types.js';
define(de[2653], he([1, 0, 115, 739]), function (ce, e, t, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$pnb = w),
			(e.$qnb = E),
			(e.$rnb = C),
			(e.$snb = d);
		function w(m) {
			return (0, t.$Fjb)() ? m.altKey : m.ctrlKey;
		}
		function E(m) {
			return (0, t.$Bjb)() ? m.metaKey : m.ctrlKey;
		}
		function C(m) {
			return new i.$Omb(m);
		}
		function d(m, r) {
			if (m.size !== r.size) return !1;
			for (const u of m) if (!r.has(u)) return !1;
			return !0;
		}
	}),
		