import '../../../require.js';
import '../../../exports.js';
define(de[214], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qb = void 0),
				(e.$jb = t),
				(e.$kb = i),
				(e.$lb = w),
				(e.$mb = E),
				(e.$nb = C),
				(e.$ob = d),
				(e.$pb = m),
				(e.$rb = u),
				(e.$sb = a),
				(e.$tb = h),
				(e.$ub = c),
				(e.$vb = n);
			function t(g, p) {
				const o = i(g, p);
				if (o !== -1) return g[o];
			}
			function i(g, p, o = g.length - 1) {
				for (let f = o; f >= 0; f--) {
					const b = g[f];
					if (p(b)) return f;
				}
				return -1;
			}
			function w(g, p) {
				const o = E(g, p);
				return o === -1 ? void 0 : g[o];
			}
			function E(g, p, o = 0, f = g.length) {
				let b = o,
					s = f;
				for (; b < s; ) {
					const l = Math.floor((b + s) / 2);
					p(g[l]) ? (b = l + 1) : (s = l);
				}
				return b - 1;
			}
			function C(g, p) {
				const o = d(g, p);
				return o === g.length ? void 0 : g[o];
			}
			function d(g, p, o = 0, f = g.length) {
				let b = o,
					s = f;
				for (; b < s; ) {
					const l = Math.floor((b + s) / 2);
					p(g[l]) ? (s = l) : (b = l + 1);
				}
				return b;
			}
			function m(g, p, o = 0, f = g.length) {
				const b = d(g, p, o, f);
				return b === g.length ? -1 : b;
			}
			class r {
				static {
					this.assertInvariants = !1;
				}
				constructor(p) {
					(this.e = p), (this.c = 0);
				}
				findLastMonotonous(p) {
					if (r.assertInvariants) {
						if (this.d) {
							for (const f of this.e)
								if (this.d(f) && !p(f))
									throw new Error(
										"MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.",
									);
						}
						this.d = p;
					}
					const o = E(this.e, p, this.c);
					return (this.c = o + 1), o === -1 ? void 0 : this.e[o];
				}
			}
			e.$qb = r;
			function u(g, p) {
				if (g.length === 0) return;
				let o = g[0];
				for (let f = 1; f < g.length; f++) {
					const b = g[f];
					p(b, o) > 0 && (o = b);
				}
				return o;
			}
			function a(g, p) {
				if (g.length === 0) return;
				let o = g[0];
				for (let f = 1; f < g.length; f++) {
					const b = g[f];
					p(b, o) >= 0 && (o = b);
				}
				return o;
			}
			function h(g, p) {
				return u(g, (o, f) => -p(o, f));
			}
			function c(g, p) {
				if (g.length === 0) return -1;
				let o = 0;
				for (let f = 1; f < g.length; f++) {
					const b = g[f];
					p(b, g[o]) > 0 && (o = f);
				}
				return o;
			}
			function n(g, p) {
				for (const o of g) {
					const f = p(o);
					if (f !== void 0) return f;
				}
			}
		}),
		