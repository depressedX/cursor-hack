import '../../../../require.js';
import '../../../../exports.js';
define(de[2058], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isSentryRequestUrl = t);
			function t(C, d) {
				const m = d && d.getDsn(),
					r = d && d.getOptions().tunnel;
				return w(C, m) || i(C, r);
			}
			function i(C, d) {
				return d ? E(C) === E(d) : !1;
			}
			function w(C, d) {
				return d ? C.includes(d.host) : !1;
			}
			function E(C) {
				return C[C.length - 1] === "/" ? C.slice(0, -1) : C;
			}
		})
