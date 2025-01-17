import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/uint.js';
define(de[589], he([1, 0, 24, 210]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YN = e.$XN = e.$WN = void 0);
			class w {
				constructor(m) {
					(this.a = m),
						(this.b = new Uint32Array(m.length)),
						(this.c = new Int32Array(1)),
						(this.c[0] = -1);
				}
				getCount() {
					return this.a.length;
				}
				insertValues(m, r) {
					m = (0, i.$if)(m);
					const u = this.a,
						a = this.b,
						h = r.length;
					return h === 0
						? !1
						: ((this.a = new Uint32Array(u.length + h)),
							this.a.set(u.subarray(0, m), 0),
							this.a.set(u.subarray(m), m + h),
							this.a.set(r, m),
							m - 1 < this.c[0] && (this.c[0] = m - 1),
							(this.b = new Uint32Array(this.a.length)),
							this.c[0] >= 0 && this.b.set(a.subarray(0, this.c[0] + 1)),
							!0);
				}
				setValue(m, r) {
					return (
						(m = (0, i.$if)(m)),
						(r = (0, i.$if)(r)),
						this.a[m] === r
							? !1
							: ((this.a[m] = r), m - 1 < this.c[0] && (this.c[0] = m - 1), !0)
					);
				}
				removeValues(m, r) {
					(m = (0, i.$if)(m)), (r = (0, i.$if)(r));
					const u = this.a,
						a = this.b;
					if (m >= u.length) return !1;
					const h = u.length - m;
					return (
						r >= h && (r = h),
						r === 0
							? !1
							: ((this.a = new Uint32Array(u.length - r)),
								this.a.set(u.subarray(0, m), 0),
								this.a.set(u.subarray(m + r), m),
								(this.b = new Uint32Array(this.a.length)),
								m - 1 < this.c[0] && (this.c[0] = m - 1),
								this.c[0] >= 0 && this.b.set(a.subarray(0, this.c[0] + 1)),
								!0)
					);
				}
				getTotalSum() {
					return this.a.length === 0 ? 0 : this.d(this.a.length - 1);
				}
				getPrefixSum(m) {
					return m < 0 ? 0 : ((m = (0, i.$if)(m)), this.d(m));
				}
				d(m) {
					if (m <= this.c[0]) return this.b[m];
					let r = this.c[0] + 1;
					r === 0 && ((this.b[0] = this.a[0]), r++),
						m >= this.a.length && (m = this.a.length - 1);
					for (let u = r; u <= m; u++) this.b[u] = this.b[u - 1] + this.a[u];
					return (this.c[0] = Math.max(this.c[0], m)), this.b[m];
				}
				getIndexOf(m) {
					(m = Math.floor(m)), this.getTotalSum();
					let r = 0,
						u = this.a.length - 1,
						a = 0,
						h = 0,
						c = 0;
					for (; r <= u; )
						if (
							((a = (r + (u - r) / 2) | 0),
							(h = this.b[a]),
							(c = h - this.a[a]),
							m < c)
						)
							u = a - 1;
						else if (m >= h) r = a + 1;
						else break;
					return new C(a, m - c);
				}
			}
			e.$WN = w;
			class E {
				constructor(m) {
					(this.a = m),
						(this.b = !1),
						(this.c = -1),
						(this.d = []),
						(this.e = []);
				}
				getTotalSum() {
					return this.g(), this.e.length;
				}
				getPrefixSum(m) {
					return this.g(), m === 0 ? 0 : this.d[m - 1];
				}
				getIndexOf(m) {
					this.g();
					const r = this.e[m],
						u = r > 0 ? this.d[r - 1] : 0;
					return new C(r, m - u);
				}
				removeValues(m, r) {
					this.a.splice(m, r), this.f(m);
				}
				insertValues(m, r) {
					(this.a = (0, t.$Zb)(this.a, m, r)), this.f(m);
				}
				f(m) {
					(this.b = !1), (this.c = Math.min(this.c, m - 1));
				}
				g() {
					if (!this.b) {
						for (let m = this.c + 1, r = this.a.length; m < r; m++) {
							const u = this.a[m],
								a = m > 0 ? this.d[m - 1] : 0;
							this.d[m] = a + u;
							for (let h = 0; h < u; h++) this.e[a + h] = m;
						}
						(this.d.length = this.a.length),
							(this.e.length = this.d[this.d.length - 1]),
							(this.b = !0),
							(this.c = this.a.length - 1);
					}
				}
				setValue(m, r) {
					this.a[m] !== r && ((this.a[m] = r), this.f(m));
				}
			}
			e.$XN = E;
			class C {
				constructor(m, r) {
					(this.index = m),
						(this.remainder = r),
						(this._prefixSumIndexOfResultBrand = void 0),
						(this.index = m),
						(this.remainder = r);
				}
			}
			e.$YN = C;
		}),
		