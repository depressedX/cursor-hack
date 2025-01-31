import '../../../../require.js';
import '../../../../exports.js';
define(de[451], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.assert = t),
				(e.assertInt32 = m),
				(e.assertUInt32 = r),
				(e.assertFloat32 = u);
			function t(a, h) {
				if (!a) throw new Error(h);
			}
			const i = 34028234663852886e22,
				w = -34028234663852886e22,
				E = 4294967295,
				C = 2147483647,
				d = -2147483648;
			function m(a) {
				if (typeof a != "number")
					throw new Error("invalid int 32: " + typeof a);
				if (!Number.isInteger(a) || a > C || a < d)
					throw new Error("invalid int 32: " + a);
			}
			function r(a) {
				if (typeof a != "number")
					throw new Error("invalid uint 32: " + typeof a);
				if (!Number.isInteger(a) || a > E || a < 0)
					throw new Error("invalid uint 32: " + a);
			}
			function u(a) {
				if (typeof a != "number")
					throw new Error("invalid float 32: " + typeof a);
				if (Number.isFinite(a) && (a > i || a < w))
					throw new Error("invalid float 32: " + a);
			}
		})
