import '../../../require.js';
import '../../../exports.js';
import './arrays.js';
define(de[433], he([1, 0, 24]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_c = void 0),
				(e.$ad = w),
				(e.$bd = E),
				(e.$cd = C),
				(e.$dd = d),
				(e.$ed = m),
				(e.$fd = r),
				(t = mt(t));
			const i = (c, n) => c === n;
			e.$_c = i;
			function w(c = e.$_c) {
				return (n, g) => t.$yb(n, g, c);
			}
			function E() {
				return (c, n) => JSON.stringify(c) === JSON.stringify(n);
			}
			function C() {
				return (c, n) => c.equals(n);
			}
			function d(c, n, g) {
				if (g !== void 0) {
					const p = c;
					return p == null || n === void 0 || n === null ? n === p : g(p, n);
				} else {
					const p = c;
					return (o, f) =>
						o == null || f === void 0 || f === null ? f === o : p(o, f);
				}
			}
			function m(c, n) {
				if (c === n) return !0;
				if (Array.isArray(c) && Array.isArray(n)) {
					if (c.length !== n.length) return !1;
					for (let g = 0; g < c.length; g++) if (!m(c[g], n[g])) return !1;
					return !0;
				}
				if (
					c &&
					typeof c == "object" &&
					n &&
					typeof n == "object" &&
					Object.getPrototypeOf(c) === Object.prototype &&
					Object.getPrototypeOf(n) === Object.prototype
				) {
					const g = c,
						p = n,
						o = Object.keys(g),
						f = Object.keys(p),
						b = new Set(f);
					if (o.length !== f.length) return !1;
					for (const s of o) if (!b.has(s) || !m(g[s], p[s])) return !1;
					return !0;
				}
				return !1;
			}
			function r(c) {
				return JSON.stringify(h(c));
			}
			let u = 0;
			const a = new WeakMap();
			function h(c) {
				if (Array.isArray(c)) return c.map(h);
				if (c && typeof c == "object")
					if (Object.getPrototypeOf(c) === Object.prototype) {
						const n = c,
							g = Object.create(null);
						for (const p of Object.keys(n).sort()) g[p] = h(n[p]);
						return g;
					} else {
						let n = a.get(c);
						return (
							n === void 0 && ((n = u++), a.set(c, n)),
							n + "----2b76a038c20c4bcc"
						);
					}
				return c;
			}
		})
