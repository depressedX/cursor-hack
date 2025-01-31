import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../core/position.js';
import '../core/range.js';
import '../core/eolCounter.js';
define(
			de[2575],
			he([1, 0, 120, 48, 17, 531]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*position*/,
 w /*range*/,
 E /*eolCounter*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FN = e.$EN = void 0);
				class C {
					static create(u, a) {
						return new C(u, new d(a));
					}
					get startLineNumber() {
						return this.c;
					}
					get endLineNumber() {
						return this.d;
					}
					constructor(u, a) {
						(this.c = u),
							(this.e = a),
							(this.d = this.c + this.e.getMaxDeltaLine());
					}
					toString() {
						return this.e.toString(this.c);
					}
					f() {
						this.d = this.c + this.e.getMaxDeltaLine();
					}
					isEmpty() {
						return this.e.isEmpty();
					}
					getLineTokens(u) {
						return this.c <= u && u <= this.d
							? this.e.getLineTokens(u - this.c)
							: null;
					}
					getRange() {
						const u = this.e.getRange();
						return (
							u &&
							new w.$iL(
								this.c + u.startLineNumber,
								u.startColumn,
								this.c + u.endLineNumber,
								u.endColumn,
							)
						);
					}
					removeTokens(u) {
						const a = u.startLineNumber - this.c,
							h = u.endLineNumber - this.c;
						(this.c += this.e.removeTokens(
							a,
							u.startColumn - 1,
							h,
							u.endColumn - 1,
						)),
							this.f();
					}
					split(u) {
						const a = u.startLineNumber - this.c,
							h = u.endLineNumber - this.c,
							[c, n, g] = this.e.split(
								a,
								u.startColumn - 1,
								h,
								u.endColumn - 1,
							);
						return [new C(this.c, c), new C(this.c + g, n)];
					}
					applyEdit(u, a) {
						const [h, c, n] = (0, E.$6L)(a);
						this.acceptEdit(
							u,
							h,
							c,
							n,
							a.length > 0 ? a.charCodeAt(0) : t.CharCode.Null,
						);
					}
					acceptEdit(u, a, h, c, n) {
						this.g(u),
							this.h(new i.$hL(u.startLineNumber, u.startColumn), a, h, c, n),
							this.f();
					}
					g(u) {
						if (
							u.startLineNumber === u.endLineNumber &&
							u.startColumn === u.endColumn
						)
							return;
						const a = u.startLineNumber - this.c,
							h = u.endLineNumber - this.c;
						if (h < 0) {
							const n = h - a;
							this.c -= n;
							return;
						}
						const c = this.e.getMaxDeltaLine();
						if (!(a >= c + 1)) {
							if (a < 0 && h >= c + 1) {
								(this.c = 0), this.e.clear();
								return;
							}
							if (a < 0) {
								const n = -a;
								(this.c -= n),
									this.e.acceptDeleteRange(
										u.startColumn - 1,
										0,
										0,
										h,
										u.endColumn - 1,
									);
							} else
								this.e.acceptDeleteRange(
									0,
									a,
									u.startColumn - 1,
									h,
									u.endColumn - 1,
								);
						}
					}
					h(u, a, h, c, n) {
						if (a === 0 && h === 0) return;
						const g = u.lineNumber - this.c;
						if (g < 0) {
							this.c += a;
							return;
						}
						const p = this.e.getMaxDeltaLine();
						g >= p + 1 || this.e.acceptInsertText(g, u.column - 1, a, h, c, n);
					}
				}
				e.$EN = C;
				class d {
					constructor(u) {
						(this.c = u), (this.d = u.length / 4);
					}
					toString(u) {
						const a = [];
						for (let h = 0; h < this.d; h++)
							a.push(`(${this.f(h) + u},${this.g(h)}-${this.h(h)})`);
						return `[${a.join(",")}]`;
					}
					getMaxDeltaLine() {
						const u = this.e();
						return u === 0 ? -1 : this.f(u - 1);
					}
					getRange() {
						const u = this.e();
						if (u === 0) return null;
						const a = this.g(0),
							h = this.f(u - 1),
							c = this.h(u - 1);
						return new w.$iL(0, a + 1, h, c + 1);
					}
					e() {
						return this.d;
					}
					f(u) {
						return this.c[4 * u];
					}
					g(u) {
						return this.c[4 * u + 1];
					}
					h(u) {
						return this.c[4 * u + 2];
					}
					isEmpty() {
						return this.e() === 0;
					}
					getLineTokens(u) {
						let a = 0,
							h = this.e() - 1;
						for (; a < h; ) {
							const c = a + Math.floor((h - a) / 2),
								n = this.f(c);
							if (n < u) a = c + 1;
							else if (n > u) h = c - 1;
							else {
								let g = c;
								for (; g > a && this.f(g - 1) === u; ) g--;
								let p = c;
								for (; p < h && this.f(p + 1) === u; ) p++;
								return new m(this.c.subarray(4 * g, 4 * p + 4));
							}
						}
						return this.f(a) === u
							? new m(this.c.subarray(4 * a, 4 * a + 4))
							: null;
					}
					clear() {
						this.d = 0;
					}
					removeTokens(u, a, h, c) {
						const n = this.c,
							g = this.d;
						let p = 0,
							o = !1,
							f = 0;
						for (let b = 0; b < g; b++) {
							const s = 4 * b,
								l = n[s],
								y = n[s + 1],
								$ = n[s + 2],
								v = n[s + 3];
							if (
								(l > u || (l === u && $ >= a)) &&
								(l < h || (l === h && y <= c))
							)
								o = !0;
							else {
								if ((p === 0 && (f = l), o)) {
									const S = 4 * p;
									(n[S] = l - f),
										(n[S + 1] = y),
										(n[S + 2] = $),
										(n[S + 3] = v);
								}
								p++;
							}
						}
						return (this.d = p), f;
					}
					split(u, a, h, c) {
						const n = this.c,
							g = this.d,
							p = [],
							o = [];
						let f = p,
							b = 0,
							s = 0;
						for (let l = 0; l < g; l++) {
							const y = 4 * l,
								$ = n[y],
								v = n[y + 1],
								S = n[y + 2],
								I = n[y + 3];
							if ($ > u || ($ === u && S >= a)) {
								if ($ < h || ($ === h && v <= c)) continue;
								f !== o && ((f = o), (b = 0), (s = $));
							}
							(f[b++] = $ - s), (f[b++] = v), (f[b++] = S), (f[b++] = I);
						}
						return [new d(new Uint32Array(p)), new d(new Uint32Array(o)), s];
					}
					acceptDeleteRange(u, a, h, c, n) {
						const g = this.c,
							p = this.d,
							o = c - a;
						let f = 0,
							b = !1;
						for (let s = 0; s < p; s++) {
							const l = 4 * s;
							let y = g[l],
								$ = g[l + 1],
								v = g[l + 2];
							const S = g[l + 3];
							if (y < a || (y === a && v <= h)) {
								f++;
								continue;
							} else if (y === a && $ < h)
								y === c && v > n ? (v -= n - h) : (v = h);
							else if (y === a && $ === h)
								if (y === c && v > n) v -= n - h;
								else {
									b = !0;
									continue;
								}
							else if (y < c || (y === c && $ < n))
								if (y === c && v > n) (y = a), ($ = h), (v = $ + (v - n));
								else {
									b = !0;
									continue;
								}
							else if (y > c) {
								if (o === 0 && !b) {
									f = p;
									break;
								}
								y -= o;
							} else if (y === c && $ >= n)
								u && y === 0 && (($ += u), (v += u)),
									(y -= o),
									($ -= n - h),
									(v -= n - h);
							else throw new Error("Not possible!");
							const I = 4 * f;
							(g[I] = y), (g[I + 1] = $), (g[I + 2] = v), (g[I + 3] = S), f++;
						}
						this.d = f;
					}
					acceptInsertText(u, a, h, c, n, g) {
						const p =
								h === 0 &&
								c === 1 &&
								((g >= t.CharCode.Digit0 && g <= t.CharCode.Digit9) ||
									(g >= t.CharCode.A && g <= t.CharCode.Z) ||
									(g >= t.CharCode.a && g <= t.CharCode.z)),
							o = this.c,
							f = this.d;
						for (let b = 0; b < f; b++) {
							const s = 4 * b;
							let l = o[s],
								y = o[s + 1],
								$ = o[s + 2];
							if (!(l < u || (l === u && $ < a))) {
								if (l === u && $ === a)
									if (p) $ += 1;
									else continue;
								else if (l === u && y < a && a < $)
									h === 0 ? ($ += c) : ($ = a);
								else {
									if (l === u && y === a && p) continue;
									if (l === u)
										if (((l += h), h === 0)) (y += c), ($ += c);
										else {
											const v = $ - y;
											(y = n + (y - a)), ($ = y + v);
										}
									else l += h;
								}
								(o[s] = l), (o[s + 1] = y), (o[s + 2] = $);
							}
						}
					}
				}
				class m {
					constructor(u) {
						this.c = u;
					}
					getCount() {
						return this.c.length / 4;
					}
					getStartCharacter(u) {
						return this.c[4 * u + 1];
					}
					getEndCharacter(u) {
						return this.c[4 * u + 2];
					}
					getMetadata(u) {
						return this.c[4 * u + 3];
					}
				}
				e.$FN = m;
			},
		)
