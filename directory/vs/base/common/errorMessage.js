import '../../../require.js';
import '../../../exports.js';
import './arrays.js';
import './types.js';
import '../../nls.js';
define(de[163], he([1, 0, 24, 28, 4]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$xj = m),
				(e.$yj = r),
				(e.$zj = u),
				(t = mt(t)),
				(i = mt(i)),
				(w = mt(w));
			function E(a, h) {
				return h && (a.stack || a.stacktrace)
					? w.localize(107, null, d(a), C(a.stack) || C(a.stacktrace))
					: d(a);
			}
			function C(a) {
				return Array.isArray(a)
					? a.join(`
`)
					: a;
			}
			function d(a) {
				return a.code === "ERR_UNC_HOST_NOT_ALLOWED"
					? `${a.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`
					: typeof a.code == "string" &&
							typeof a.errno == "number" &&
							typeof a.syscall == "string"
						? w.localize(108, null, a.message)
						: a.message || w.localize(109, null);
			}
			function m(a = null, h = !1) {
				if (!a) return w.localize(110, null);
				if (Array.isArray(a)) {
					const c = t.$Lb(a),
						n = m(c[0], h);
					return c.length > 1 ? w.localize(111, null, n, c.length) : n;
				}
				if (i.$lg(a)) return a;
				if (a.detail) {
					const c = a.detail;
					if (c.error) return E(c.error, h);
					if (c.exception) return E(c.exception, h);
				}
				return a.stack
					? E(a, h)
					: a.message
						? a.message
						: w.localize(112, null);
			}
			function r(a) {
				const h = a;
				return h instanceof Error && Array.isArray(h.actions);
			}
			function u(a, h) {
				let c;
				return (
					typeof a == "string" ? (c = new Error(a)) : (c = a),
					(c.actions = h),
					c
				);
			}
		}),
		