import '../../../require.js';
import '../../../exports.js';
import './arrays.js';
import './iterator.js';
import './uuid.js';
define(de[489], he([1, 0, 24, 103, 47]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*iterator*/,
 w /*uuid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ZL = e.$XL = void 0),
				(e.$VL = E),
				(e.$WL = C),
				(e.$YL = r);
			function E(a) {
				return {
					asString: async () => a,
					asFile: () => {},
					value: typeof a == "string" ? a : void 0,
				};
			}
			function C(a, h, c) {
				const n = { id: (0, w.$9g)(), name: a, uri: h, data: c };
				return { asString: async () => "", asFile: () => n, value: void 0 };
			}
			class d {
				constructor() {
					this.a = new Map();
				}
				get size() {
					let h = 0;
					for (const c of this.a) h++;
					return h;
				}
				has(h) {
					return this.a.has(this.b(h));
				}
				matches(h) {
					const c = [...this.a.keys()];
					return (
						i.Iterable.some(this, ([n, g]) => g.asFile()) && c.push("files"),
						u(m(h), c)
					);
				}
				get(h) {
					return this.a.get(this.b(h))?.[0];
				}
				append(h, c) {
					const n = this.a.get(h);
					n ? n.push(c) : this.a.set(this.b(h), [c]);
				}
				replace(h, c) {
					this.a.set(this.b(h), [c]);
				}
				delete(h) {
					this.a.delete(this.b(h));
				}
				*[Symbol.iterator]() {
					for (const [h, c] of this.a) for (const n of c) yield [h, n];
				}
				b(h) {
					return m(h);
				}
			}
			e.$XL = d;
			function m(a) {
				return a.toLowerCase();
			}
			function r(a, h) {
				return u(m(a), h.map(m));
			}
			function u(a, h) {
				if (a === "*/*") return h.length > 0;
				if (h.includes(a)) return !0;
				const c = a.match(/^([a-z]+)\/([a-z]+|\*)$/i);
				if (!c) return !1;
				const [n, g, p] = c;
				return p === "*" ? h.some((o) => o.startsWith(g + "/")) : !1;
			}
			e.$ZL = Object.freeze({
				create: (a) =>
					(0, t.$Qb)(a.map((h) => h.toString())).join(`\r
`),
				split: (a) =>
					a.split(`\r
`),
				parse: (a) => e.$ZL.split(a).filter((h) => !h.startsWith("#")),
			});
		}),
		