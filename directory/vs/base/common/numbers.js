define(de[201], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4m = e.$3m = e.$2m = void 0),
				(e.$Zm = t),
				(e.rot = i),
				(e.$5m = d);
			function t(m, r, u) {
				return Math.min(Math.max(m, r), u);
			}
			function i(m, r) {
				return (r + (m % r)) % r;
			}
			class w {
				constructor() {
					this.a = 0;
				}
				getNext() {
					return this.a++;
				}
			}
			e.$2m = w;
			class E {
				constructor() {
					(this.a = 1), (this.b = 0);
				}
				update(r) {
					return (
						(this.b = this.b + (r - this.b) / this.a), (this.a += 1), this.b
					);
				}
				get value() {
					return this.b;
				}
			}
			e.$3m = E;
			class C {
				constructor(r) {
					(this.a = 0),
						(this.b = 0),
						(this.c = []),
						(this.d = 0),
						(this.e = 0),
						(this.c = new Array(r)),
						this.c.fill(0, 0, r);
				}
				update(r) {
					const u = this.c[this.d];
					return (
						(this.c[this.d] = r),
						(this.d = (this.d + 1) % this.c.length),
						(this.e -= u),
						(this.e += r),
						this.a < this.c.length && (this.a += 1),
						(this.b = this.e / this.a),
						this.b
					);
				}
				get value() {
					return this.b;
				}
			}
			e.$4m = C;
			function d(m, r, u, a, h, c, n, g) {
				const p = n - u,
					o = g - a,
					f = h - u,
					b = c - a,
					s = m - u,
					l = r - a,
					y = p * p + o * o,
					$ = p * f + o * b,
					v = p * s + o * l,
					S = f * f + b * b,
					I = f * s + b * l,
					T = 1 / (y * S - $ * $),
					P = (S * v - $ * I) * T,
					k = (y * I - $ * v) * T;
				return P >= 0 && k >= 0 && P + k < 1;
			}
		}),
		