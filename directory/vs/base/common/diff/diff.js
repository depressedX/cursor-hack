define(de[745], he([1, 0, 2216, 136, 210]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$oL = e.$mL = void 0),
				(e.$nL = C);
			class E {
				constructor(c) {
					this.a = c;
				}
				getElements() {
					const c = this.a,
						n = new Int32Array(c.length);
					for (let g = 0, p = c.length; g < p; g++) n[g] = c.charCodeAt(g);
					return n;
				}
			}
			e.$mL = E;
			function C(h, c, n) {
				return new a(new E(h), new E(c)).ComputeDiff(n).changes;
			}
			class d {
				static Assert(c, n) {
					if (!c) throw new Error(n);
				}
			}
			class m {
				static Copy(c, n, g, p, o) {
					for (let f = 0; f < o; f++) g[p + f] = c[n + f];
				}
				static Copy2(c, n, g, p, o) {
					for (let f = 0; f < o; f++) g[p + f] = c[n + f];
				}
			}
			var r;
			(function (h) {
				h[(h.MaxDifferencesHistory = 1447)] = "MaxDifferencesHistory";
			})(r || (r = {}));
			class u {
				constructor() {
					(this.a = []),
						(this.b = w.Constants.MAX_SAFE_SMALL_INTEGER),
						(this.c = w.Constants.MAX_SAFE_SMALL_INTEGER),
						(this.d = 0),
						(this.e = 0);
				}
				MarkNextChange() {
					(this.d > 0 || this.e > 0) &&
						this.a.push(new t.$lL(this.b, this.d, this.c, this.e)),
						(this.d = 0),
						(this.e = 0),
						(this.b = w.Constants.MAX_SAFE_SMALL_INTEGER),
						(this.c = w.Constants.MAX_SAFE_SMALL_INTEGER);
				}
				AddOriginalElement(c, n) {
					(this.b = Math.min(this.b, c)),
						(this.c = Math.min(this.c, n)),
						this.d++;
				}
				AddModifiedElement(c, n) {
					(this.b = Math.min(this.b, c)),
						(this.c = Math.min(this.c, n)),
						this.e++;
				}
				getChanges() {
					return (this.d > 0 || this.e > 0) && this.MarkNextChange(), this.a;
				}
				getReverseChanges() {
					return (
						(this.d > 0 || this.e > 0) && this.MarkNextChange(),
						this.a.reverse(),
						this.a
					);
				}
			}
			class a {
				constructor(c, n, g = null) {
					(this.a = g), (this.b = c), (this.c = n);
					const [p, o, f] = a.o(c),
						[b, s, l] = a.o(n);
					(this.d = f && l),
						(this.e = p),
						(this.f = o),
						(this.g = b),
						(this.h = s),
						(this.k = []),
						(this.m = []);
				}
				static n(c) {
					return c.length > 0 && typeof c[0] == "string";
				}
				static o(c) {
					const n = c.getElements();
					if (a.n(n)) {
						const g = new Int32Array(n.length);
						for (let p = 0, o = n.length; p < o; p++)
							g[p] = (0, i.$Dj)(n[p], 0);
						return [n, g, !0];
					}
					return n instanceof Int32Array
						? [[], n, !1]
						: [[], new Int32Array(n), !1];
				}
				p(c, n) {
					return this.f[c] !== this.h[n]
						? !1
						: this.d
							? this.e[c] === this.g[n]
							: !0;
				}
				q(c, n) {
					if (!this.p(c, n)) return !1;
					const g = a.r(this.b, c),
						p = a.r(this.c, n);
					return g === p;
				}
				static r(c, n) {
					return typeof c.getStrictElement == "function"
						? c.getStrictElement(n)
						: null;
				}
				s(c, n) {
					return this.f[c] !== this.f[n]
						? !1
						: this.d
							? this.e[c] === this.e[n]
							: !0;
				}
				u(c, n) {
					return this.h[c] !== this.h[n]
						? !1
						: this.d
							? this.g[c] === this.g[n]
							: !0;
				}
				ComputeDiff(c) {
					return this.v(0, this.f.length - 1, 0, this.h.length - 1, c);
				}
				v(c, n, g, p, o) {
					const f = [!1];
					let b = this.w(c, n, g, p, f);
					return o && (b = this.z(b)), { quitEarly: f[0], changes: b };
				}
				w(c, n, g, p, o) {
					for (o[0] = !1; c <= n && g <= p && this.p(c, g); ) c++, g++;
					for (; n >= c && p >= g && this.p(n, p); ) n--, p--;
					if (c > n || g > p) {
						let $;
						return (
							g <= p
								? (d.Assert(
										c === n + 1,
										"originalStart should only be one more than originalEnd",
									),
									($ = [new t.$lL(c, 0, g, p - g + 1)]))
								: c <= n
									? (d.Assert(
											g === p + 1,
											"modifiedStart should only be one more than modifiedEnd",
										),
										($ = [new t.$lL(c, n - c + 1, g, 0)]))
									: (d.Assert(
											c === n + 1,
											"originalStart should only be one more than originalEnd",
										),
										d.Assert(
											g === p + 1,
											"modifiedStart should only be one more than modifiedEnd",
										),
										($ = [])),
							$
						);
					}
					const f = [0],
						b = [0],
						s = this.y(c, n, g, p, f, b, o),
						l = f[0],
						y = b[0];
					if (s !== null) return s;
					if (!o[0]) {
						const $ = this.w(c, l, g, y, o);
						let v = [];
						return (
							o[0]
								? (v = [
										new t.$lL(l + 1, n - (l + 1) + 1, y + 1, p - (y + 1) + 1),
									])
								: (v = this.w(l + 1, n, y + 1, p, o)),
							this.H($, v)
						);
					}
					return [new t.$lL(c, n - c + 1, g, p - g + 1)];
				}
				x(c, n, g, p, o, f, b, s, l, y, $, v, S, I, T, P, k, L) {
					let D = null,
						M = null,
						N = new u(),
						A = n,
						R = g,
						O = S[0] - P[0] - p,
						B = w.Constants.MIN_SAFE_SMALL_INTEGER,
						U = this.k.length - 1;
					do {
						const z = O + c;
						z === A || (z < R && l[z - 1] < l[z + 1])
							? (($ = l[z + 1]),
								(I = $ - O - p),
								$ < B && N.MarkNextChange(),
								(B = $),
								N.AddModifiedElement($ + 1, I),
								(O = z + 1 - c))
							: (($ = l[z - 1] + 1),
								(I = $ - O - p),
								$ < B && N.MarkNextChange(),
								(B = $ - 1),
								N.AddOriginalElement($, I + 1),
								(O = z - 1 - c)),
							U >= 0 &&
								((l = this.k[U]), (c = l[0]), (A = 1), (R = l.length - 1));
					} while (--U >= -1);
					if (((D = N.getReverseChanges()), L[0])) {
						let z = S[0] + 1,
							F = P[0] + 1;
						if (D !== null && D.length > 0) {
							const x = D[D.length - 1];
							(z = Math.max(z, x.getOriginalEnd())),
								(F = Math.max(F, x.getModifiedEnd()));
						}
						M = [new t.$lL(z, v - z + 1, F, T - F + 1)];
					} else {
						(N = new u()),
							(A = f),
							(R = b),
							(O = S[0] - P[0] - s),
							(B = w.Constants.MAX_SAFE_SMALL_INTEGER),
							(U = k ? this.m.length - 1 : this.m.length - 2);
						do {
							const z = O + o;
							z === A || (z < R && y[z - 1] >= y[z + 1])
								? (($ = y[z + 1] - 1),
									(I = $ - O - s),
									$ > B && N.MarkNextChange(),
									(B = $ + 1),
									N.AddOriginalElement($ + 1, I + 1),
									(O = z + 1 - o))
								: (($ = y[z - 1]),
									(I = $ - O - s),
									$ > B && N.MarkNextChange(),
									(B = $),
									N.AddModifiedElement($ + 1, I + 1),
									(O = z - 1 - o)),
								U >= 0 &&
									((y = this.m[U]), (o = y[0]), (A = 1), (R = y.length - 1));
						} while (--U >= -1);
						M = N.getChanges();
					}
					return this.H(D, M);
				}
				y(c, n, g, p, o, f, b) {
					let s = 0,
						l = 0,
						y = 0,
						$ = 0,
						v = 0,
						S = 0;
					c--, g--, (o[0] = 0), (f[0] = 0), (this.k = []), (this.m = []);
					const I = n - c + (p - g),
						T = I + 1,
						P = new Int32Array(T),
						k = new Int32Array(T),
						L = p - g,
						D = n - c,
						M = c - g,
						N = n - p,
						R = (D - L) % 2 === 0;
					(P[L] = c), (k[D] = n), (b[0] = !1);
					for (let O = 1; O <= I / 2 + 1; O++) {
						let B = 0,
							U = 0;
						(y = this.J(L - O, O, L, T)), ($ = this.J(L + O, O, L, T));
						for (let F = y; F <= $; F += 2) {
							F === y || (F < $ && P[F - 1] < P[F + 1])
								? (s = P[F + 1])
								: (s = P[F - 1] + 1),
								(l = s - (F - L) - M);
							const x = s;
							for (; s < n && l < p && this.p(s + 1, l + 1); ) s++, l++;
							if (
								((P[F] = s),
								s + l > B + U && ((B = s), (U = l)),
								!R && Math.abs(F - D) <= O - 1 && s >= k[F])
							)
								return (
									(o[0] = s),
									(f[0] = l),
									x <= k[F] &&
									r.MaxDifferencesHistory > 0 &&
									O <= r.MaxDifferencesHistory + 1
										? this.x(
												L,
												y,
												$,
												M,
												D,
												v,
												S,
												N,
												P,
												k,
												s,
												n,
												o,
												l,
												p,
												f,
												R,
												b,
											)
										: null
								);
						}
						const z = (B - c + (U - g) - O) / 2;
						if (this.a !== null && !this.a(B, z))
							return (
								(b[0] = !0),
								(o[0] = B),
								(f[0] = U),
								z > 0 &&
								r.MaxDifferencesHistory > 0 &&
								O <= r.MaxDifferencesHistory + 1
									? this.x(L, y, $, M, D, v, S, N, P, k, s, n, o, l, p, f, R, b)
									: (c++, g++, [new t.$lL(c, n - c + 1, g, p - g + 1)])
							);
						(v = this.J(D - O, O, D, T)), (S = this.J(D + O, O, D, T));
						for (let F = v; F <= S; F += 2) {
							F === v || (F < S && k[F - 1] >= k[F + 1])
								? (s = k[F + 1] - 1)
								: (s = k[F - 1]),
								(l = s - (F - D) - N);
							const x = s;
							for (; s > c && l > g && this.p(s, l); ) s--, l--;
							if (((k[F] = s), R && Math.abs(F - L) <= O && s <= P[F]))
								return (
									(o[0] = s),
									(f[0] = l),
									x >= P[F] &&
									r.MaxDifferencesHistory > 0 &&
									O <= r.MaxDifferencesHistory + 1
										? this.x(
												L,
												y,
												$,
												M,
												D,
												v,
												S,
												N,
												P,
												k,
												s,
												n,
												o,
												l,
												p,
												f,
												R,
												b,
											)
										: null
								);
						}
						if (O <= r.MaxDifferencesHistory) {
							let F = new Int32Array($ - y + 2);
							(F[0] = L - y + 1),
								m.Copy2(P, y, F, 1, $ - y + 1),
								this.k.push(F),
								(F = new Int32Array(S - v + 2)),
								(F[0] = D - v + 1),
								m.Copy2(k, v, F, 1, S - v + 1),
								this.m.push(F);
						}
					}
					return this.x(L, y, $, M, D, v, S, N, P, k, s, n, o, l, p, f, R, b);
				}
				z(c) {
					for (let n = 0; n < c.length; n++) {
						const g = c[n],
							p = n < c.length - 1 ? c[n + 1].originalStart : this.f.length,
							o = n < c.length - 1 ? c[n + 1].modifiedStart : this.h.length,
							f = g.originalLength > 0,
							b = g.modifiedLength > 0;
						for (
							;
							g.originalStart + g.originalLength < p &&
							g.modifiedStart + g.modifiedLength < o &&
							(!f ||
								this.s(g.originalStart, g.originalStart + g.originalLength)) &&
							(!b ||
								this.u(g.modifiedStart, g.modifiedStart + g.modifiedLength));
						) {
							const l = this.q(g.originalStart, g.modifiedStart);
							if (
								this.q(
									g.originalStart + g.originalLength,
									g.modifiedStart + g.modifiedLength,
								) &&
								!l
							)
								break;
							g.originalStart++, g.modifiedStart++;
						}
						const s = [null];
						if (n < c.length - 1 && this.I(c[n], c[n + 1], s)) {
							(c[n] = s[0]), c.splice(n + 1, 1), n--;
							continue;
						}
					}
					for (let n = c.length - 1; n >= 0; n--) {
						const g = c[n];
						let p = 0,
							o = 0;
						if (n > 0) {
							const $ = c[n - 1];
							(p = $.originalStart + $.originalLength),
								(o = $.modifiedStart + $.modifiedLength);
						}
						const f = g.originalLength > 0,
							b = g.modifiedLength > 0;
						let s = 0,
							l = this.G(
								g.originalStart,
								g.originalLength,
								g.modifiedStart,
								g.modifiedLength,
							);
						for (let $ = 1; ; $++) {
							const v = g.originalStart - $,
								S = g.modifiedStart - $;
							if (
								v < p ||
								S < o ||
								(f && !this.s(v, v + g.originalLength)) ||
								(b && !this.u(S, S + g.modifiedLength))
							)
								break;
							const T =
								(v === p && S === o ? 5 : 0) +
								this.G(v, g.originalLength, S, g.modifiedLength);
							T > l && ((l = T), (s = $));
						}
						(g.originalStart -= s), (g.modifiedStart -= s);
						const y = [null];
						if (n > 0 && this.I(c[n - 1], c[n], y)) {
							(c[n - 1] = y[0]), c.splice(n, 1), n++;
							continue;
						}
					}
					if (this.d)
						for (let n = 1, g = c.length; n < g; n++) {
							const p = c[n - 1],
								o = c[n],
								f = o.originalStart - p.originalStart - p.originalLength,
								b = p.originalStart,
								s = o.originalStart + o.originalLength,
								l = s - b,
								y = p.modifiedStart,
								$ = o.modifiedStart + o.modifiedLength,
								v = $ - y;
							if (f < 5 && l < 20 && v < 20) {
								const S = this.A(b, l, y, v, f);
								if (S) {
									const [I, T] = S;
									(I !== p.originalStart + p.originalLength ||
										T !== p.modifiedStart + p.modifiedLength) &&
										((p.originalLength = I - p.originalStart),
										(p.modifiedLength = T - p.modifiedStart),
										(o.originalStart = I + f),
										(o.modifiedStart = T + f),
										(o.originalLength = s - o.originalStart),
										(o.modifiedLength = $ - o.modifiedStart));
								}
							}
						}
					return c;
				}
				A(c, n, g, p, o) {
					if (n < o || p < o) return null;
					const f = c + n - o + 1,
						b = g + p - o + 1;
					let s = 0,
						l = 0,
						y = 0;
					for (let $ = c; $ < f; $++)
						for (let v = g; v < b; v++) {
							const S = this.B($, v, o);
							S > 0 && S > s && ((s = S), (l = $), (y = v));
						}
					return s > 0 ? [l, y] : null;
				}
				B(c, n, g) {
					let p = 0;
					for (let o = 0; o < g; o++) {
						if (!this.p(c + o, n + o)) return 0;
						p += this.e[c + o].length;
					}
					return p;
				}
				C(c) {
					return c <= 0 || c >= this.f.length - 1
						? !0
						: this.d && /^\s*$/.test(this.e[c]);
				}
				D(c, n) {
					if (this.C(c) || this.C(c - 1)) return !0;
					if (n > 0) {
						const g = c + n;
						if (this.C(g - 1) || this.C(g)) return !0;
					}
					return !1;
				}
				E(c) {
					return c <= 0 || c >= this.h.length - 1
						? !0
						: this.d && /^\s*$/.test(this.g[c]);
				}
				F(c, n) {
					if (this.E(c) || this.E(c - 1)) return !0;
					if (n > 0) {
						const g = c + n;
						if (this.E(g - 1) || this.E(g)) return !0;
					}
					return !1;
				}
				G(c, n, g, p) {
					const o = this.D(c, n) ? 1 : 0,
						f = this.F(g, p) ? 1 : 0;
					return o + f;
				}
				H(c, n) {
					const g = [];
					if (c.length === 0 || n.length === 0) return n.length > 0 ? n : c;
					if (this.I(c[c.length - 1], n[0], g)) {
						const p = new Array(c.length + n.length - 1);
						return (
							m.Copy(c, 0, p, 0, c.length - 1),
							(p[c.length - 1] = g[0]),
							m.Copy(n, 1, p, c.length, n.length - 1),
							p
						);
					} else {
						const p = new Array(c.length + n.length);
						return (
							m.Copy(c, 0, p, 0, c.length),
							m.Copy(n, 0, p, c.length, n.length),
							p
						);
					}
				}
				I(c, n, g) {
					if (
						(d.Assert(
							c.originalStart <= n.originalStart,
							"Left change is not less than or equal to right change",
						),
						d.Assert(
							c.modifiedStart <= n.modifiedStart,
							"Left change is not less than or equal to right change",
						),
						c.originalStart + c.originalLength >= n.originalStart ||
							c.modifiedStart + c.modifiedLength >= n.modifiedStart)
					) {
						const p = c.originalStart;
						let o = c.originalLength;
						const f = c.modifiedStart;
						let b = c.modifiedLength;
						return (
							c.originalStart + c.originalLength >= n.originalStart &&
								(o = n.originalStart + n.originalLength - c.originalStart),
							c.modifiedStart + c.modifiedLength >= n.modifiedStart &&
								(b = n.modifiedStart + n.modifiedLength - c.modifiedStart),
							(g[0] = new t.$lL(p, o, f, b)),
							!0
						);
					} else return (g[0] = null), !1;
				}
				J(c, n, g, p) {
					if (c >= 0 && c < p) return c;
					const o = g,
						f = p - g - 1,
						b = n % 2 === 0;
					if (c < 0) {
						const s = o % 2 === 0;
						return b === s ? 0 : 1;
					} else {
						const s = f % 2 === 0;
						return b === s ? p - 1 : p - 2;
					}
				}
			}
			e.$oL = a;
		}),
		