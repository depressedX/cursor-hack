import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../core/offsetRange.js';
import './diffAlgorithm.js';
define(de[1529], he([1, 0, 289, 656]), function (ce /*require*/,
 e /*exports*/,
 t /*offsetRange*/,
 i /*diffAlgorithm*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dxb = void 0);
			class w {
				compute(r, u, a = i.$0wb.instance) {
					if (r.length === 0 || u.length === 0) return i.$7wb.trivial(r, u);
					const h = r,
						c = u;
					function n($, v) {
						for (
							;
							$ < h.length &&
							v < c.length &&
							h.getElement($) === c.getElement(v);
						)
							$++, v++;
						return $;
					}
					let g = 0;
					const p = new C();
					p.set(0, n(0, 0));
					const o = new d();
					o.set(0, p.get(0) === 0 ? null : new E(null, 0, 0, p.get(0)));
					let f = 0;
					e: for (;;) {
						if ((g++, !a.isValid())) return i.$7wb.trivialTimedOut(h, c);
						const $ = -Math.min(g, c.length + (g % 2)),
							v = Math.min(g, h.length + (g % 2));
						for (f = $; f <= v; f += 2) {
							let S = 0;
							const I = f === v ? -1 : p.get(f + 1),
								T = f === $ ? -1 : p.get(f - 1) + 1;
							S++;
							const P = Math.min(Math.max(I, T), h.length),
								k = P - f;
							if ((S++, P > h.length || k > c.length)) continue;
							const L = n(P, k);
							p.set(f, L);
							const D = P === I ? o.get(f + 1) : o.get(f - 1);
							if (
								(o.set(f, L !== P ? new E(D, P, k, L - P) : D),
								p.get(f) === h.length && p.get(f) - f === c.length)
							)
								break e;
						}
					}
					let b = o.get(f);
					const s = [];
					let l = h.length,
						y = c.length;
					for (;;) {
						const $ = b ? b.x + b.length : 0,
							v = b ? b.y + b.length : 0;
						if (
							(($ !== l || v !== y) &&
								s.push(new i.$8wb(new t.$pL($, l), new t.$pL(v, y))),
							!b)
						)
							break;
						(l = b.x), (y = b.y), (b = b.prev);
					}
					return s.reverse(), new i.$7wb(s, !1);
				}
			}
			e.$dxb = w;
			class E {
				constructor(r, u, a, h) {
					(this.prev = r), (this.x = u), (this.y = a), (this.length = h);
				}
			}
			class C {
				constructor() {
					(this.a = new Int32Array(10)), (this.b = new Int32Array(10));
				}
				get(r) {
					return r < 0 ? ((r = -r - 1), this.b[r]) : this.a[r];
				}
				set(r, u) {
					if (r < 0) {
						if (((r = -r - 1), r >= this.b.length)) {
							const a = this.b;
							(this.b = new Int32Array(a.length * 2)), this.b.set(a);
						}
						this.b[r] = u;
					} else {
						if (r >= this.a.length) {
							const a = this.a;
							(this.a = new Int32Array(a.length * 2)), this.a.set(a);
						}
						this.a[r] = u;
					}
				}
			}
			class d {
				constructor() {
					(this.a = []), (this.b = []);
				}
				get(r) {
					return r < 0 ? ((r = -r - 1), this.b[r]) : this.a[r];
				}
				set(r, u) {
					r < 0 ? ((r = -r - 1), (this.b[r] = u)) : (this.a[r] = u);
				}
			}
		})
