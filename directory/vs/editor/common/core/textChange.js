import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import './stringBuilder.js';
define(de[1589], he([1, 0, 76, 462]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LL = void 0),
				(e.$ML = C),
				(t = mt(t));
			function w(m) {
				return m.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
			}
			class E {
				get oldLength() {
					return this.oldText.length;
				}
				get oldEnd() {
					return this.oldPosition + this.oldText.length;
				}
				get newLength() {
					return this.newText.length;
				}
				get newEnd() {
					return this.newPosition + this.newText.length;
				}
				constructor(r, u, a, h) {
					(this.oldPosition = r),
						(this.oldText = u),
						(this.newPosition = a),
						(this.newText = h);
				}
				shift(r) {
					return new E(
						this.oldPosition + r,
						this.oldText,
						this.newPosition + r,
						this.newText,
					);
				}
				toString() {
					return this.oldText.length === 0
						? `(insert@${this.oldPosition} "${w(this.newText)}")`
						: this.newText.length === 0
							? `(delete@${this.oldPosition} "${w(this.oldText)}")`
							: `(replace@${this.oldPosition} "${w(this.oldText)}" with "${w(this.newText)}")`;
				}
				static a(r) {
					return 4 + 2 * r.length;
				}
				static c(r, u, a) {
					const h = u.length;
					t.$Ye(r, h, a), (a += 4);
					for (let c = 0; c < h; c++) t.$We(r, u.charCodeAt(c), a), (a += 2);
					return a;
				}
				static d(r, u) {
					const a = t.$Xe(r, u);
					return (u += 4), (0, i.$JL)(r, u, a);
				}
				writeSize() {
					return 8 + E.a(this.oldText) + E.a(this.newText);
				}
				write(r, u) {
					return (
						t.$Ye(r, this.oldPosition, u),
						(u += 4),
						t.$Ye(r, this.newPosition, u),
						(u += 4),
						(u = E.c(r, this.oldText, u)),
						(u = E.c(r, this.newText, u)),
						u
					);
				}
				static read(r, u, a) {
					const h = t.$Xe(r, u);
					u += 4;
					const c = t.$Xe(r, u);
					u += 4;
					const n = E.d(r, u);
					u += E.a(n);
					const g = E.d(r, u);
					return (u += E.a(g)), a.push(new E(h, n, c, g)), u;
				}
			}
			e.$LL = E;
			function C(m, r) {
				return m === null || m.length === 0 ? r : new d(m, r).compress();
			}
			class d {
				constructor(r, u) {
					(this.a = r),
						(this.c = u),
						(this.d = []),
						(this.e = 0),
						(this.f = this.a.length),
						(this.g = 0),
						(this.h = this.c.length),
						(this.j = 0);
				}
				compress() {
					let r = 0,
						u = 0,
						a = this.n(r),
						h = this.l(u);
					for (; r < this.f || u < this.h; ) {
						if (a === null) {
							this.k(h), (h = this.l(++u));
							continue;
						}
						if (h === null) {
							this.m(a), (a = this.n(++r));
							continue;
						}
						if (h.oldEnd <= a.newPosition) {
							this.k(h), (h = this.l(++u));
							continue;
						}
						if (a.newEnd <= h.oldPosition) {
							this.m(a), (a = this.n(++r));
							continue;
						}
						if (h.oldPosition < a.newPosition) {
							const [o, f] = d.r(h, a.newPosition - h.oldPosition);
							this.k(o), (h = f);
							continue;
						}
						if (a.newPosition < h.oldPosition) {
							const [o, f] = d.q(a, h.oldPosition - a.newPosition);
							this.m(o), (a = f);
							continue;
						}
						let g, p;
						if (h.oldEnd === a.newEnd)
							(g = a), (p = h), (a = this.n(++r)), (h = this.l(++u));
						else if (h.oldEnd < a.newEnd) {
							const [o, f] = d.q(a, h.oldLength);
							(g = o), (p = h), (a = f), (h = this.l(++u));
						} else {
							const [o, f] = d.r(h, a.newLength);
							(g = a), (p = o), (a = this.n(++r)), (h = f);
						}
						(this.d[this.e++] = new E(
							g.oldPosition,
							g.oldText,
							p.newPosition,
							p.newText,
						)),
							(this.g += g.newLength - g.oldLength),
							(this.j += p.newLength - p.oldLength);
					}
					const c = d.s(this.d);
					return d.t(c);
				}
				k(r) {
					(this.d[this.e++] = d.o(this.g, r)),
						(this.j += r.newLength - r.oldLength);
				}
				l(r) {
					return r < this.h ? this.c[r] : null;
				}
				m(r) {
					(this.d[this.e++] = d.p(this.j, r)),
						(this.g += r.newLength - r.oldLength);
				}
				n(r) {
					return r < this.f ? this.a[r] : null;
				}
				static o(r, u) {
					return new E(u.oldPosition - r, u.oldText, u.newPosition, u.newText);
				}
				static p(r, u) {
					return new E(u.oldPosition, u.oldText, u.newPosition + r, u.newText);
				}
				static q(r, u) {
					const a = r.newText.substr(0, u),
						h = r.newText.substr(u);
					return [
						new E(r.oldPosition, r.oldText, r.newPosition, a),
						new E(r.oldEnd, "", r.newPosition + u, h),
					];
				}
				static r(r, u) {
					const a = r.oldText.substr(0, u),
						h = r.oldText.substr(u);
					return [
						new E(r.oldPosition, a, r.newPosition, r.newText),
						new E(r.oldPosition + u, h, r.newEnd, ""),
					];
				}
				static s(r) {
					if (r.length === 0) return r;
					const u = [];
					let a = 0,
						h = r[0];
					for (let c = 1; c < r.length; c++) {
						const n = r[c];
						h.oldEnd === n.oldPosition
							? (h = new E(
									h.oldPosition,
									h.oldText + n.oldText,
									h.newPosition,
									h.newText + n.newText,
								))
							: ((u[a++] = h), (h = n));
					}
					return (u[a++] = h), u;
				}
				static t(r) {
					if (r.length === 0) return r;
					const u = [];
					let a = 0;
					for (let h = 0; h < r.length; h++) {
						const c = r[h];
						c.oldText !== c.newText && (u[a++] = c);
					}
					return u;
				}
			}
		}),
		