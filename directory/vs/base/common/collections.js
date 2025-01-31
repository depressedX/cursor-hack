import '../../../require.js';
import '../../../exports.js';
define(de[456], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			var t;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$i = void 0),
				(e.$e = i),
				(e.$f = w),
				(e.$g = E),
				(e.$h = C);
			function i(m, r) {
				const u = Object.create(null);
				for (const a of m) {
					const h = r(a);
					let c = u[h];
					c || (c = u[h] = []), c.push(a);
				}
				return u;
			}
			function w(m, r) {
				const u = [],
					a = [];
				for (const h of m) r.has(h) || u.push(h);
				for (const h of r) m.has(h) || a.push(h);
				return { removed: u, added: a };
			}
			function E(m, r) {
				const u = [],
					a = [];
				for (const [h, c] of m) r.has(h) || u.push(c);
				for (const [h, c] of r) m.has(h) || a.push(c);
				return { removed: u, added: a };
			}
			function C(m, r) {
				const u = new Set();
				for (const a of r) m.has(a) && u.add(a);
				return u;
			}
			class d {
				static {
					t = Symbol.toStringTag;
				}
				constructor(r, u) {
					(this.b = u), (this.a = new Map()), (this[t] = "SetWithKey");
					for (const a of r) this.add(a);
				}
				get size() {
					return this.a.size;
				}
				add(r) {
					const u = this.b(r);
					return this.a.set(u, r), this;
				}
				delete(r) {
					return this.a.delete(this.b(r));
				}
				has(r) {
					return this.a.has(this.b(r));
				}
				*entries() {
					for (const r of this.a.values()) yield [r, r];
				}
				keys() {
					return this.values();
				}
				*values() {
					for (const r of this.a.values()) yield r;
				}
				clear() {
					this.a.clear();
				}
				forEach(r, u) {
					this.a.forEach((a) => r.call(u, a, a, this));
				}
				[Symbol.iterator]() {
					return this.values();
				}
			}
			e.$i = d;
		})
