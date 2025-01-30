import '../../../require.js';
import '../../../exports.js';
import './errors.js';
define(de[229], he([1, 0, 29]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ok = i),
				(e.$kd = w),
				(e.$ld = E),
				(e.$md = C),
				(e.$nd = d),
				(e.$od = m);
			function i(r, u) {
				if (!r)
					throw new Error(u ? `Assertion failed (${u})` : "Assertion Failed");
			}
			function w(r, u = "Unreachable") {
				throw new Error(u);
			}
			function E(r, u = "unexpected state") {
				if (!r) throw new t.$gb(`Assertion Failed: ${u}`);
			}
			function C(r) {
				r || (0, t.$4)(new t.$gb("Soft Assertion Failed"));
			}
			function d(r) {
				if (!r()) {
					debugger;
					r(), (0, t.$4)(new t.$gb("Assertion Failed"));
				}
			}
			function m(r, u) {
				let a = 0;
				for (; a < r.length - 1; ) {
					const h = r[a],
						c = r[a + 1];
					if (!u(h, c)) return !1;
					a++;
				}
				return !0;
			}
		}),
		