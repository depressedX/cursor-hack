define(
			de[2693],
			he([1, 0, 24, 6, 3, 17, 748, 934, 2572]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9O = void 0);
				class r extends w.$1c {
					get f() {
						return this.h.getValueLength() <= 5e6;
					}
					constructor(g, p) {
						super(),
							(this.h = g),
							(this.j = p),
							(this.a = this.D(new w.$2c())),
							(this.c = new i.$re()),
							(this.onDidChange = this.c.event),
							(this.g = !1);
					}
					handleLanguageConfigurationServiceChange(g) {
						(!g.languageId ||
							this.a.value?.object.didLanguageChange(g.languageId)) &&
							(this.a.clear(), this.m());
					}
					handleDidChangeOptions(g) {
						this.a.clear(), this.m();
					}
					handleDidChangeLanguage(g) {
						this.a.clear(), this.m();
					}
					handleDidChangeContent(g) {
						this.a.value?.object.handleContentChanged(g);
					}
					handleDidChangeBackgroundTokenizationState() {
						this.a.value?.object.handleDidChangeBackgroundTokenizationState();
					}
					handleDidChangeTokens(g) {
						this.a.value?.object.handleDidChangeTokens(g);
					}
					m() {
						if (this.g && this.f) {
							if (!this.a.value) {
								const g = new w.$Zc();
								(this.a.value = u(
									g.add(
										new m.$8O(this.h, (p) =>
											this.j.getLanguageConfiguration(p),
										),
									),
									g,
								)),
									g.add(this.a.value.object.onDidChange((p) => this.c.fire(p))),
									this.c.fire();
							}
						} else this.a.value && (this.a.clear(), this.c.fire());
					}
					getBracketPairsInRange(g) {
						return (
							(this.g = !0),
							this.m(),
							this.a.value?.object.getBracketPairsInRange(g, !1) || t.$dc.empty
						);
					}
					getBracketPairsInRangeWithMinIndentation(g) {
						return (
							(this.g = !0),
							this.m(),
							this.a.value?.object.getBracketPairsInRange(g, !0) || t.$dc.empty
						);
					}
					getBracketsInRange(g, p = !1) {
						return (
							(this.g = !0),
							this.m(),
							this.a.value?.object.getBracketsInRange(g, p) || t.$dc.empty
						);
					}
					findMatchingBracketUp(g, p, o) {
						const f = this.h.validatePosition(p),
							b = this.h.getLanguageIdAtPosition(f.lineNumber, f.column);
						if (this.f) {
							const s = this.j
								.getLanguageConfiguration(b)
								.bracketsNew.getClosingBracketInfo(g);
							if (!s) return null;
							const l = this.getBracketPairsInRange(
								E.$iL.fromPositions(p, p),
							).findLast((y) => s.closes(y.openingBracketInfo));
							return l ? l.openingBracketRange : null;
						} else {
							const s = g.toLowerCase(),
								l = this.j.getLanguageConfiguration(b).brackets;
							if (!l) return null;
							const y = l.textIsBracket[s];
							return y ? c(this.t(y, f, a(o))) : null;
						}
					}
					matchBracket(g, p) {
						if (this.f) {
							const o = this.getBracketPairsInRange(E.$iL.fromPositions(g, g))
								.filter(
									(f) =>
										f.closingBracketRange !== void 0 &&
										(f.openingBracketRange.containsPosition(g) ||
											f.closingBracketRange.containsPosition(g)),
								)
								.findLastMaxBy(
									(0, t.$0b)(
										(f) =>
											f.openingBracketRange.containsPosition(g)
												? f.openingBracketRange
												: f.closingBracketRange,
										E.$iL.compareRangesUsingStarts,
									),
								);
							return o ? [o.openingBracketRange, o.closingBracketRange] : null;
						} else {
							const o = a(p);
							return this.q(this.h.validatePosition(g), o);
						}
					}
					n(g, p, o, f) {
						const b = p.getCount(),
							s = p.getLanguageId(f);
						let l = Math.max(0, g.column - 1 - o.maxBracketLength);
						for (let $ = f - 1; $ >= 0; $--) {
							const v = p.getEndOffset($);
							if (v <= l) break;
							if (
								(0, C.$qM)(p.getStandardTokenType($)) ||
								p.getLanguageId($) !== s
							) {
								l = v;
								break;
							}
						}
						let y = Math.min(
							p.getLineContent().length,
							g.column - 1 + o.maxBracketLength,
						);
						for (let $ = f + 1; $ < b; $++) {
							const v = p.getStartOffset($);
							if (v >= y) break;
							if (
								(0, C.$qM)(p.getStandardTokenType($)) ||
								p.getLanguageId($) !== s
							) {
								y = v;
								break;
							}
						}
						return { searchStartOffset: l, searchEndOffset: y };
					}
					q(g, p) {
						const o = g.lineNumber,
							f = this.h.tokenization.getLineTokens(o),
							b = this.h.getLineContent(o),
							s = f.findTokenIndexAtOffset(g.column - 1);
						if (s < 0) return null;
						const l = this.j.getLanguageConfiguration(
							f.getLanguageId(s),
						).brackets;
						if (l && !(0, C.$qM)(f.getStandardTokenType(s))) {
							let { searchStartOffset: y, searchEndOffset: $ } = this.n(
									g,
									f,
									l,
									s,
								),
								v = null;
							for (;;) {
								const S = d.$wM.findNextBracketInRange(
									l.forwardRegex,
									o,
									b,
									y,
									$,
								);
								if (!S) break;
								if (S.startColumn <= g.column && g.column <= S.endColumn) {
									const I = b
											.substring(S.startColumn - 1, S.endColumn - 1)
											.toLowerCase(),
										T = this.s(
											S,
											l.textIsBracket[I],
											l.textIsOpenBracket[I],
											p,
										);
									if (T) {
										if (T instanceof h) return null;
										v = T;
									}
								}
								y = S.endColumn - 1;
							}
							if (v) return v;
						}
						if (s > 0 && f.getStartOffset(s) === g.column - 1) {
							const y = s - 1,
								$ = this.j.getLanguageConfiguration(
									f.getLanguageId(y),
								).brackets;
							if ($ && !(0, C.$qM)(f.getStandardTokenType(y))) {
								const { searchStartOffset: v, searchEndOffset: S } = this.n(
										g,
										f,
										$,
										y,
									),
									I = d.$wM.findPrevBracketInRange($.reversedRegex, o, b, v, S);
								if (I && I.startColumn <= g.column && g.column <= I.endColumn) {
									const T = b
											.substring(I.startColumn - 1, I.endColumn - 1)
											.toLowerCase(),
										P = this.s(
											I,
											$.textIsBracket[T],
											$.textIsOpenBracket[T],
											p,
										);
									if (P) return P instanceof h ? null : P;
								}
							}
						}
						return null;
					}
					s(g, p, o, f) {
						if (!p) return null;
						const b = o
							? this.u(p, g.getEndPosition(), f)
							: this.t(p, g.getStartPosition(), f);
						return b ? (b instanceof h ? b : [g, b]) : null;
					}
					t(g, p, o) {
						const f = g.languageId,
							b = g.reversedRegex;
						let s = -1,
							l = 0;
						const y = ($, v, S, I) => {
							for (;;) {
								if (o && ++l % 100 === 0 && !o()) return h.INSTANCE;
								const T = d.$wM.findPrevBracketInRange(b, $, v, S, I);
								if (!T) break;
								const P = v
									.substring(T.startColumn - 1, T.endColumn - 1)
									.toLowerCase();
								if ((g.isOpen(P) ? s++ : g.isClose(P) && s--, s === 0))
									return T;
								I = T.startColumn - 1;
							}
							return null;
						};
						for (let $ = p.lineNumber; $ >= 1; $--) {
							const v = this.h.tokenization.getLineTokens($),
								S = v.getCount(),
								I = this.h.getLineContent($);
							let T = S - 1,
								P = I.length,
								k = I.length;
							$ === p.lineNumber &&
								((T = v.findTokenIndexAtOffset(p.column - 1)),
								(P = p.column - 1),
								(k = p.column - 1));
							let L = !0;
							for (; T >= 0; T--) {
								const D =
									v.getLanguageId(T) === f &&
									!(0, C.$qM)(v.getStandardTokenType(T));
								if (D)
									L
										? (P = v.getStartOffset(T))
										: ((P = v.getStartOffset(T)), (k = v.getEndOffset(T)));
								else if (L && P !== k) {
									const M = y($, I, P, k);
									if (M) return M;
								}
								L = D;
							}
							if (L && P !== k) {
								const D = y($, I, P, k);
								if (D) return D;
							}
						}
						return null;
					}
					u(g, p, o) {
						const f = g.languageId,
							b = g.forwardRegex;
						let s = 1,
							l = 0;
						const y = (v, S, I, T) => {
								for (;;) {
									if (o && ++l % 100 === 0 && !o()) return h.INSTANCE;
									const P = d.$wM.findNextBracketInRange(b, v, S, I, T);
									if (!P) break;
									const k = S.substring(
										P.startColumn - 1,
										P.endColumn - 1,
									).toLowerCase();
									if ((g.isOpen(k) ? s++ : g.isClose(k) && s--, s === 0))
										return P;
									I = P.endColumn - 1;
								}
								return null;
							},
							$ = this.h.getLineCount();
						for (let v = p.lineNumber; v <= $; v++) {
							const S = this.h.tokenization.getLineTokens(v),
								I = S.getCount(),
								T = this.h.getLineContent(v);
							let P = 0,
								k = 0,
								L = 0;
							v === p.lineNumber &&
								((P = S.findTokenIndexAtOffset(p.column - 1)),
								(k = p.column - 1),
								(L = p.column - 1));
							let D = !0;
							for (; P < I; P++) {
								const M =
									S.getLanguageId(P) === f &&
									!(0, C.$qM)(S.getStandardTokenType(P));
								if (M) D || (k = S.getStartOffset(P)), (L = S.getEndOffset(P));
								else if (D && k !== L) {
									const N = y(v, T, k, L);
									if (N) return N;
								}
								D = M;
							}
							if (D && k !== L) {
								const M = y(v, T, k, L);
								if (M) return M;
							}
						}
						return null;
					}
					findPrevBracket(g) {
						const p = this.h.validatePosition(g);
						if (this.f)
							return (
								(this.g = !0),
								this.m(),
								this.a.value?.object.getFirstBracketBefore(p) || null
							);
						let o = null,
							f = null,
							b = null;
						for (let s = p.lineNumber; s >= 1; s--) {
							const l = this.h.tokenization.getLineTokens(s),
								y = l.getCount(),
								$ = this.h.getLineContent(s);
							let v = y - 1,
								S = $.length,
								I = $.length;
							if (s === p.lineNumber) {
								(v = l.findTokenIndexAtOffset(p.column - 1)),
									(S = p.column - 1),
									(I = p.column - 1);
								const P = l.getLanguageId(v);
								o !== P &&
									((o = P),
									(f = this.j.getLanguageConfiguration(o).brackets),
									(b = this.j.getLanguageConfiguration(o).bracketsNew));
							}
							let T = !0;
							for (; v >= 0; v--) {
								const P = l.getLanguageId(v);
								if (o !== P) {
									if (f && b && T && S !== I) {
										const L = d.$wM.findPrevBracketInRange(
											f.reversedRegex,
											s,
											$,
											S,
											I,
										);
										if (L) return this.w(b, L);
										T = !1;
									}
									(o = P),
										(f = this.j.getLanguageConfiguration(o).brackets),
										(b = this.j.getLanguageConfiguration(o).bracketsNew);
								}
								const k = !!f && !(0, C.$qM)(l.getStandardTokenType(v));
								if (k)
									T
										? (S = l.getStartOffset(v))
										: ((S = l.getStartOffset(v)), (I = l.getEndOffset(v)));
								else if (b && f && T && S !== I) {
									const L = d.$wM.findPrevBracketInRange(
										f.reversedRegex,
										s,
										$,
										S,
										I,
									);
									if (L) return this.w(b, L);
								}
								T = k;
							}
							if (b && f && T && S !== I) {
								const P = d.$wM.findPrevBracketInRange(
									f.reversedRegex,
									s,
									$,
									S,
									I,
								);
								if (P) return this.w(b, P);
							}
						}
						return null;
					}
					findNextBracket(g) {
						const p = this.h.validatePosition(g);
						if (this.f)
							return (
								(this.g = !0),
								this.m(),
								this.a.value?.object.getFirstBracketAfter(p) || null
							);
						const o = this.h.getLineCount();
						let f = null,
							b = null,
							s = null;
						for (let l = p.lineNumber; l <= o; l++) {
							const y = this.h.tokenization.getLineTokens(l),
								$ = y.getCount(),
								v = this.h.getLineContent(l);
							let S = 0,
								I = 0,
								T = 0;
							if (l === p.lineNumber) {
								(S = y.findTokenIndexAtOffset(p.column - 1)),
									(I = p.column - 1),
									(T = p.column - 1);
								const k = y.getLanguageId(S);
								f !== k &&
									((f = k),
									(b = this.j.getLanguageConfiguration(f).brackets),
									(s = this.j.getLanguageConfiguration(f).bracketsNew));
							}
							let P = !0;
							for (; S < $; S++) {
								const k = y.getLanguageId(S);
								if (f !== k) {
									if (s && b && P && I !== T) {
										const D = d.$wM.findNextBracketInRange(
											b.forwardRegex,
											l,
											v,
											I,
											T,
										);
										if (D) return this.w(s, D);
										P = !1;
									}
									(f = k),
										(b = this.j.getLanguageConfiguration(f).brackets),
										(s = this.j.getLanguageConfiguration(f).bracketsNew);
								}
								const L = !!b && !(0, C.$qM)(y.getStandardTokenType(S));
								if (L) P || (I = y.getStartOffset(S)), (T = y.getEndOffset(S));
								else if (s && b && P && I !== T) {
									const D = d.$wM.findNextBracketInRange(
										b.forwardRegex,
										l,
										v,
										I,
										T,
									);
									if (D) return this.w(s, D);
								}
								P = L;
							}
							if (s && b && P && I !== T) {
								const k = d.$wM.findNextBracketInRange(
									b.forwardRegex,
									l,
									v,
									I,
									T,
								);
								if (k) return this.w(s, k);
							}
						}
						return null;
					}
					findEnclosingBrackets(g, p) {
						const o = this.h.validatePosition(g);
						if (this.f) {
							const T = E.$iL.fromPositions(o),
								P = this.getBracketPairsInRange(
									E.$iL.fromPositions(o, o),
								).findLast(
									(k) =>
										k.closingBracketRange !== void 0 &&
										k.range.strictContainsRange(T),
								);
							return P ? [P.openingBracketRange, P.closingBracketRange] : null;
						}
						const f = a(p),
							b = this.h.getLineCount(),
							s = new Map();
						let l = [];
						const y = (T, P) => {
							if (!s.has(T)) {
								const k = [];
								for (let L = 0, D = P ? P.brackets.length : 0; L < D; L++)
									k[L] = 0;
								s.set(T, k);
							}
							l = s.get(T);
						};
						let $ = 0;
						const v = (T, P, k, L, D) => {
							for (;;) {
								if (f && ++$ % 100 === 0 && !f()) return h.INSTANCE;
								const M = d.$wM.findNextBracketInRange(
									T.forwardRegex,
									P,
									k,
									L,
									D,
								);
								if (!M) break;
								const N = k
										.substring(M.startColumn - 1, M.endColumn - 1)
										.toLowerCase(),
									A = T.textIsBracket[N];
								if (
									A &&
									(A.isOpen(N) ? l[A.index]++ : A.isClose(N) && l[A.index]--,
									l[A.index] === -1)
								)
									return this.s(M, A, !1, f);
								L = M.endColumn - 1;
							}
							return null;
						};
						let S = null,
							I = null;
						for (let T = o.lineNumber; T <= b; T++) {
							const P = this.h.tokenization.getLineTokens(T),
								k = P.getCount(),
								L = this.h.getLineContent(T);
							let D = 0,
								M = 0,
								N = 0;
							if (T === o.lineNumber) {
								(D = P.findTokenIndexAtOffset(o.column - 1)),
									(M = o.column - 1),
									(N = o.column - 1);
								const R = P.getLanguageId(D);
								S !== R &&
									((S = R),
									(I = this.j.getLanguageConfiguration(S).brackets),
									y(S, I));
							}
							let A = !0;
							for (; D < k; D++) {
								const R = P.getLanguageId(D);
								if (S !== R) {
									if (I && A && M !== N) {
										const B = v(I, T, L, M, N);
										if (B) return c(B);
										A = !1;
									}
									(S = R),
										(I = this.j.getLanguageConfiguration(S).brackets),
										y(S, I);
								}
								const O = !!I && !(0, C.$qM)(P.getStandardTokenType(D));
								if (O) A || (M = P.getStartOffset(D)), (N = P.getEndOffset(D));
								else if (I && A && M !== N) {
									const B = v(I, T, L, M, N);
									if (B) return c(B);
								}
								A = O;
							}
							if (I && A && M !== N) {
								const R = v(I, T, L, M, N);
								if (R) return c(R);
							}
						}
						return null;
					}
					w(g, p) {
						if (!p) return null;
						let o = this.h.getValueInRange(p);
						o = o.toLowerCase();
						const f = g.getBracketInfo(o);
						return f ? { range: p, bracketInfo: f } : null;
					}
				}
				e.$9O = r;
				function u(n, g) {
					return { object: n, dispose: () => g?.dispose() };
				}
				function a(n) {
					if (typeof n > "u") return () => !0;
					{
						const g = Date.now();
						return () => Date.now() - g <= n;
					}
				}
				class h {
					static {
						this.INSTANCE = new h();
					}
					constructor() {
						this._searchCanceledBrand = void 0;
					}
				}
				function c(n) {
					return n instanceof h ? null : n;
				}
			},
		),
		