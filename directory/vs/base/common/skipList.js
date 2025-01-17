import '../../../require.js';
import '../../../exports.js';
define(de[2223], he([1, 0]), function (ce, e) {
			"use strict";
			var t;
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nK = void 0);
			class i {
				constructor(d, m, r) {
					(this.level = d),
						(this.key = m),
						(this.value = r),
						(this.forward = []);
				}
			}
			const w = void 0;
			class E {
				constructor(d, m = 2 ** 16) {
					(this.comparator = d),
						(this[t] = "SkipList"),
						(this.d = 0),
						(this.f = 0),
						(this.c = Math.max(1, Math.log2(m) | 0)),
						(this.e = new i(this.c, w, w));
				}
				get size() {
					return this.f;
				}
				clear() {
					(this.e = new i(this.c, w, w)), (this.f = 0);
				}
				has(d) {
					return !!E.g(this, d, this.comparator);
				}
				get(d) {
					return E.g(this, d, this.comparator)?.value;
				}
				set(d, m) {
					return E.h(this, d, m, this.comparator) && (this.f += 1), this;
				}
				delete(d) {
					const m = E.k(this, d, this.comparator);
					return m && (this.f -= 1), m;
				}
				forEach(d, m) {
					let r = this.e.forward[0];
					for (; r; ) d.call(m, r.value, r.key, this), (r = r.forward[0]);
				}
				[((t = Symbol.toStringTag), Symbol.iterator)]() {
					return this.entries();
				}
				*entries() {
					let d = this.e.forward[0];
					for (; d; ) yield [d.key, d.value], (d = d.forward[0]);
				}
				*keys() {
					let d = this.e.forward[0];
					for (; d; ) yield d.key, (d = d.forward[0]);
				}
				*values() {
					let d = this.e.forward[0];
					for (; d; ) yield d.value, (d = d.forward[0]);
				}
				toString() {
					let d = "[SkipList]:",
						m = this.e.forward[0];
					for (; m; )
						(d += `node(${m.key}, ${m.value}, lvl:${m.level})`),
							(m = m.forward[0]);
					return d;
				}
				static g(d, m, r) {
					let u = d.e;
					for (let a = d.d - 1; a >= 0; a--)
						for (; u.forward[a] && r(u.forward[a].key, m) < 0; )
							u = u.forward[a];
					if (((u = u.forward[0]), u && r(u.key, m) === 0)) return u;
				}
				static h(d, m, r, u) {
					const a = [];
					let h = d.e;
					for (let c = d.d - 1; c >= 0; c--) {
						for (; h.forward[c] && u(h.forward[c].key, m) < 0; )
							h = h.forward[c];
						a[c] = h;
					}
					if (((h = h.forward[0]), h && u(h.key, m) === 0))
						return (h.value = r), !1;
					{
						const c = E.j(d);
						if (c > d.d) {
							for (let n = d.d; n < c; n++) a[n] = d.e;
							d.d = c;
						}
						h = new i(c, m, r);
						for (let n = 0; n < c; n++)
							(h.forward[n] = a[n].forward[n]), (a[n].forward[n] = h);
						return !0;
					}
				}
				static j(d, m = 0.5) {
					let r = 1;
					for (; Math.random() < m && r < d.c; ) r += 1;
					return r;
				}
				static k(d, m, r) {
					const u = [];
					let a = d.e;
					for (let h = d.d - 1; h >= 0; h--) {
						for (; a.forward[h] && r(a.forward[h].key, m) < 0; )
							a = a.forward[h];
						u[h] = a;
					}
					if (((a = a.forward[0]), !a || r(a.key, m) !== 0)) return !1;
					for (let h = 0; h < d.d && u[h].forward[h] === a; h++)
						u[h].forward[h] = a.forward[h];
					for (; d.d > 0 && d.e.forward[d.d - 1] === w; ) d.d -= 1;
					return !0;
				}
			}
			e.$nK = E;
		}),
		