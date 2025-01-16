define(de[2692], he([1, 0, 744, 934]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$AM = e.$zM = e.$yM = e.$xM = void 0);
			class w {
				constructor(u, a) {
					this.languageId = u;
					const h = a.brackets ? E(a.brackets) : [],
						c = new t.$gf((p) => {
							const o = new Set();
							return { info: new d(this, p, o), closing: o };
						}),
						n = new t.$gf((p) => {
							const o = new Set(),
								f = new Set();
							return {
								info: new m(this, p, o, f),
								opening: o,
								openingColorized: f,
							};
						});
					for (const [p, o] of h) {
						const f = c.get(p),
							b = n.get(o);
						f.closing.add(b.info), b.opening.add(f.info);
					}
					const g = a.colorizedBracketPairs
						? E(a.colorizedBracketPairs)
						: h.filter((p) => !(p[0] === "<" && p[1] === ">"));
					for (const [p, o] of g) {
						const f = c.get(p),
							b = n.get(o);
						f.closing.add(b.info),
							b.openingColorized.add(f.info),
							b.opening.add(f.info);
					}
					(this.a = new Map([...c.cachedValues].map(([p, o]) => [p, o.info]))),
						(this.b = new Map(
							[...n.cachedValues].map(([p, o]) => [p, o.info]),
						));
				}
				get openingBrackets() {
					return [...this.a.values()];
				}
				get closingBrackets() {
					return [...this.b.values()];
				}
				getOpeningBracketInfo(u) {
					return this.a.get(u);
				}
				getClosingBracketInfo(u) {
					return this.b.get(u);
				}
				getBracketInfo(u) {
					return this.getOpeningBracketInfo(u) || this.getClosingBracketInfo(u);
				}
				getBracketRegExp(u) {
					const a = Array.from([...this.a.keys(), ...this.b.keys()]);
					return (0, i.$vM)(a, u);
				}
			}
			e.$xM = w;
			function E(r) {
				return r.filter(([u, a]) => u !== "" && a !== "");
			}
			class C {
				constructor(u, a) {
					(this.a = u), (this.bracketText = a);
				}
				get languageId() {
					return this.a.languageId;
				}
			}
			e.$yM = C;
			class d extends C {
				constructor(u, a, h) {
					super(u, a), (this.openedBrackets = h), (this.isOpeningBracket = !0);
				}
			}
			e.$zM = d;
			class m extends C {
				constructor(u, a, h, c) {
					super(u, a),
						(this.openingBrackets = h),
						(this.b = c),
						(this.isOpeningBracket = !1);
				}
				closes(u) {
					return u.a !== this.a ? !1 : this.openingBrackets.has(u);
				}
				closesColorized(u) {
					return u.a !== this.a ? !1 : this.b.has(u);
				}
				getOpeningBrackets() {
					return [...this.openingBrackets];
				}
			}
			e.$AM = m;
		}),
		define(
			de[597],
			he([1, 0, 120, 37, 388, 74, 171, 1175]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bwb = r),
					(e.$cwb = u),
					(e.$dwb = a),
					(e.$ewb = h),
					(i = mt(i));
				const m = {
					getInitialState: () => d.$$U,
					tokenizeEncoded: (c, n, g) => (0, d.$aV)(C.LanguageId.Null, g),
				};
				function r(c, n, g) {
					return h(n, c.languageIdCodec, E.$lM.get(g) || m);
				}
				async function u(c, n, g) {
					if (!g) return h(n, c.languageIdCodec, m);
					const p = await E.$lM.getOrCreate(g);
					return h(n, c.languageIdCodec, p || m);
				}
				function a(c, n, g, p, o, f, b) {
					let s = "<div>",
						l = p,
						y = 0,
						$ = !0;
					for (let v = 0, S = n.getCount(); v < S; v++) {
						const I = n.getEndOffset(v);
						if (I <= p) continue;
						let T = "";
						for (; l < I && l < o; l++) {
							const P = c.charCodeAt(l);
							switch (P) {
								case t.CharCode.Tab: {
									let k = f - ((l + y) % f);
									for (y += k - 1; k > 0; )
										b && $
											? ((T += "&#160;"), ($ = !1))
											: ((T += " "), ($ = !0)),
											k--;
									break;
								}
								case t.CharCode.LessThan:
									(T += "&lt;"), ($ = !1);
									break;
								case t.CharCode.GreaterThan:
									(T += "&gt;"), ($ = !1);
									break;
								case t.CharCode.Ampersand:
									(T += "&amp;"), ($ = !1);
									break;
								case t.CharCode.Null:
									(T += "&#00;"), ($ = !1);
									break;
								case t.CharCode.UTF8_BOM:
								case t.CharCode.LINE_SEPARATOR:
								case t.CharCode.PARAGRAPH_SEPARATOR:
								case t.CharCode.NEXT_LINE:
									(T += "\uFFFD"), ($ = !1);
									break;
								case t.CharCode.CarriageReturn:
									(T += "&#8203"), ($ = !1);
									break;
								case t.CharCode.Space:
									b && $ ? ((T += "&#160;"), ($ = !1)) : ((T += " "), ($ = !0));
									break;
								default:
									(T += String.fromCharCode(P)), ($ = !1);
							}
						}
						if (
							((s += `<span style="${n.getInlineStyle(v, g)}">${T}</span>`),
							I > o || l >= o)
						)
							break;
					}
					return (s += "</div>"), s;
				}
				function h(c, n, g) {
					let p = '<div class="monaco-tokenized-source">';
					const o = i.$zf(c);
					let f = g.getInitialState();
					for (let b = 0, s = o.length; b < s; b++) {
						const l = o[b];
						b > 0 && (p += "<br/>");
						const y = g.tokenizeEncoded(l, !0, f);
						w.$7L.convertToEndOffset(y.tokens, l.length);
						const v = new w.$7L(y.tokens, l, n).inflate();
						let S = 0;
						for (let I = 0, T = v.getCount(); I < T; I++) {
							const P = v.getClassName(I),
								k = v.getEndOffset(I);
							(p += `<span class="${P}">${i.$nf(l.substring(S, k))}</span>`),
								(S = k);
						}
						f = y.endState;
					}
					return (p += "</div>"), p;
				}
			},
		),
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
		define(
			de[1590],
			he([1, 0, 15, 29, 12, 162, 531, 196, 289, 171, 1175, 2565, 1152, 388]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iV = e.$hV = e.$gV = e.$fV = e.$eV = e.$dV = void 0);
				var n;
				(function (y) {
					y[(y.CHEAP_TOKENIZATION_LENGTH_LIMIT = 2048)] =
						"CHEAP_TOKENIZATION_LENGTH_LIMIT";
				})(n || (n = {}));
				class g {
					constructor($, v) {
						(this.tokenizationSupport = v),
							(this.a = this.tokenizationSupport.getInitialState()),
							(this.store = new o($));
					}
					getStartState($) {
						return this.store.getStartState($, this.a);
					}
					getFirstInvalidLine() {
						return this.store.getFirstInvalidLine(this.a);
					}
				}
				e.$dV = g;
				class p extends g {
					constructor($, v, S, I) {
						super($, v), (this._textModel = S), (this._languageIdCodec = I);
					}
					updateTokensUntilLine($, v) {
						const S = this._textModel.getLanguageId();
						for (;;) {
							const I = this.getFirstInvalidLine();
							if (!I || I.lineNumber > v) break;
							const T = this._textModel.getLineContent(I.lineNumber),
								P = s(
									this._languageIdCodec,
									S,
									this.tokenizationSupport,
									T,
									!0,
									I.startState,
								);
							$.add(I.lineNumber, P.tokens),
								this.store.setEndState(I.lineNumber, P.endState);
						}
					}
					getTokenTypeIfInsertingCharacter($, v) {
						const S = this.getStartState($.lineNumber);
						if (!S) return r.StandardTokenType.Other;
						const I = this._textModel.getLanguageId(),
							T = this._textModel.getLineContent($.lineNumber),
							P = T.substring(0, $.column - 1) + v + T.substring($.column - 1),
							k = s(
								this._languageIdCodec,
								I,
								this.tokenizationSupport,
								P,
								!0,
								S,
							),
							L = new c.$7L(k.tokens, P, this._languageIdCodec);
						if (L.getCount() === 0) return r.StandardTokenType.Other;
						const D = L.findTokenIndexAtOffset($.column - 1);
						return L.getStandardTokenType(D);
					}
					tokenizeLineWithEdit($, v, S) {
						const I = $.lineNumber,
							T = $.column,
							P = this.getStartState(I);
						if (!P) return null;
						const k = this._textModel.getLineContent(I),
							L = k.substring(0, T - 1) + S + k.substring(T - 1 + v),
							D = this._textModel.getLanguageIdAtPosition(I, 0),
							M = s(
								this._languageIdCodec,
								D,
								this.tokenizationSupport,
								L,
								!0,
								P,
							);
						return new c.$7L(M.tokens, L, this._languageIdCodec);
					}
					hasAccurateTokensForLine($) {
						const v = this.store.getFirstInvalidEndStateLineNumberOrMax();
						return $ < v;
					}
					isCheapToTokenize($) {
						const v = this.store.getFirstInvalidEndStateLineNumberOrMax();
						return (
							$ < v ||
							($ === v &&
								this._textModel.getLineLength($) <
									n.CHEAP_TOKENIZATION_LENGTH_LIMIT)
						);
					}
					tokenizeHeuristically($, v, S) {
						if (S <= this.store.getFirstInvalidEndStateLineNumberOrMax())
							return { heuristicTokens: !1 };
						if (v <= this.store.getFirstInvalidEndStateLineNumberOrMax())
							return this.updateTokensUntilLine($, S), { heuristicTokens: !1 };
						let I = this.b(v);
						const T = this._textModel.getLanguageId();
						for (let P = v; P <= S; P++) {
							const k = this._textModel.getLineContent(P),
								L = s(
									this._languageIdCodec,
									T,
									this.tokenizationSupport,
									k,
									!0,
									I,
								);
							$.add(P, L.tokens), (I = L.endState);
						}
						return { heuristicTokens: !0 };
					}
					b($) {
						let v = this._textModel.getLineFirstNonWhitespaceColumn($);
						const S = [];
						let I = null;
						for (let k = $ - 1; v > 1 && k >= 1; k--) {
							const L = this._textModel.getLineFirstNonWhitespaceColumn(k);
							if (
								L !== 0 &&
								L < v &&
								(S.push(this._textModel.getLineContent(k)),
								(v = L),
								(I = this.getStartState(k)),
								I)
							)
								break;
						}
						I || (I = this.tokenizationSupport.getInitialState()), S.reverse();
						const T = this._textModel.getLanguageId();
						let P = I;
						for (const k of S)
							P = s(
								this._languageIdCodec,
								T,
								this.tokenizationSupport,
								k,
								!1,
								P,
							).endState;
						return P;
					}
				}
				e.$eV = p;
				class o {
					constructor($) {
						(this.d = $),
							(this.a = new f()),
							(this.b = new b()),
							this.b.addRange(new m.$pL(1, $ + 1));
					}
					getEndState($) {
						return this.a.getEndState($);
					}
					setEndState($, v) {
						if (!v) throw new i.$gb("Cannot set null/undefined state");
						this.b.delete($);
						const S = this.a.setEndState($, v);
						return (
							S && $ < this.d && this.b.addRange(new m.$pL($ + 1, $ + 2)), S
						);
					}
					acceptChange($, v) {
						(this.d += v - $.length),
							this.a.acceptChange($, v),
							this.b.addRangeAndResize(
								new m.$pL($.startLineNumber, $.endLineNumberExclusive),
								v,
							);
					}
					acceptChanges($) {
						for (const v of $) {
							const [S] = (0, C.$6L)(v.text);
							this.acceptChange(
								new d.$rL(v.range.startLineNumber, v.range.endLineNumber + 1),
								S + 1,
							);
						}
					}
					invalidateEndStateRange($) {
						this.b.addRange(
							new m.$pL($.startLineNumber, $.endLineNumberExclusive),
						);
					}
					getFirstInvalidEndStateLineNumber() {
						return this.b.min;
					}
					getFirstInvalidEndStateLineNumberOrMax() {
						return (
							this.getFirstInvalidEndStateLineNumber() ||
							Number.MAX_SAFE_INTEGER
						);
					}
					allStatesValid() {
						return this.b.min === null;
					}
					getStartState($, v) {
						return $ === 1 ? v : this.getEndState($ - 1);
					}
					getFirstInvalidLine($) {
						const v = this.getFirstInvalidEndStateLineNumber();
						if (v === null) return null;
						const S = this.getStartState(v, $);
						if (!S) throw new i.$gb("Start state must be defined");
						return { lineNumber: v, startState: S };
					}
				}
				e.$fV = o;
				class f {
					constructor() {
						this.a = new a.$bV(null);
					}
					getEndState($) {
						return this.a.get($);
					}
					setEndState($, v) {
						const S = this.a.get($);
						return S && S.equals(v) ? !1 : (this.a.set($, v), !0);
					}
					acceptChange($, v) {
						let S = $.length;
						v > 0 && S > 0 && (S--, v--),
							this.a.replace($.startLineNumber, S, v);
					}
					acceptChanges($) {
						for (const v of $) {
							const [S] = (0, C.$6L)(v.text);
							this.acceptChange(
								new d.$rL(v.range.startLineNumber, v.range.endLineNumber + 1),
								S + 1,
							);
						}
					}
				}
				e.$gV = f;
				class b {
					constructor() {
						this.a = [];
					}
					getRanges() {
						return this.a;
					}
					get min() {
						return this.a.length === 0 ? null : this.a[0].start;
					}
					removeMin() {
						if (this.a.length === 0) return null;
						const $ = this.a[0];
						return (
							$.start + 1 === $.endExclusive
								? this.a.shift()
								: (this.a[0] = new m.$pL($.start + 1, $.endExclusive)),
							$.start
						);
					}
					delete($) {
						const v = this.a.findIndex((S) => S.contains($));
						if (v !== -1) {
							const S = this.a[v];
							S.start === $
								? S.endExclusive === $ + 1
									? this.a.splice(v, 1)
									: (this.a[v] = new m.$pL($ + 1, S.endExclusive))
								: S.endExclusive === $ + 1
									? (this.a[v] = new m.$pL(S.start, $))
									: this.a.splice(
											v,
											1,
											new m.$pL(S.start, $),
											new m.$pL($ + 1, S.endExclusive),
										);
						}
					}
					addRange($) {
						m.$pL.addRange($, this.a);
					}
					addRangeAndResize($, v) {
						let S = 0;
						for (; !(S >= this.a.length || $.start <= this.a[S].endExclusive); )
							S++;
						let I = S;
						for (; !(I >= this.a.length || $.endExclusive < this.a[I].start); )
							I++;
						const T = v - $.length;
						for (let P = I; P < this.a.length; P++)
							this.a[P] = this.a[P].delta(T);
						if (S === I) {
							const P = new m.$pL($.start, $.start + v);
							P.isEmpty || this.a.splice(S, 0, P);
						} else {
							const P = Math.min($.start, this.a[S].start),
								k = Math.max($.endExclusive, this.a[I - 1].endExclusive),
								L = new m.$pL(P, k + T);
							L.isEmpty ? this.a.splice(S, I - S) : this.a.splice(S, I - S, L);
						}
					}
					toString() {
						return this.a.map(($) => $.toString()).join(" + ");
					}
				}
				e.$hV = b;
				function s(y, $, v, S, I, T) {
					let P = null;
					if (v)
						try {
							P = v.tokenizeEncoded(S, I, T.clone());
						} catch (k) {
							(0, i.$4)(k);
						}
					return (
						P || (P = (0, u.$aV)(y.encodeLanguageId($), T)),
						c.$7L.convertToEndOffset(P.tokens, S.length),
						P
					);
				}
				class l {
					constructor($, v) {
						(this.b = $), (this.d = v), (this.a = !1), (this.f = !1);
					}
					dispose() {
						this.a = !0;
					}
					handleChanges() {
						this.g();
					}
					g() {
						this.f ||
							!this.b._textModel.isAttachedToEditor() ||
							!this.k() ||
							((this.f = !0),
							(0, t.$3h)(($) => {
								(this.f = !1), this.h($);
							}));
					}
					h($) {
						const v = Date.now() + $.timeRemaining(),
							S = () => {
								this.a ||
									!this.b._textModel.isAttachedToEditor() ||
									!this.k() ||
									(this.j(), Date.now() < v ? (0, w.$E)(S) : this.g());
							};
						S();
					}
					j() {
						const $ = this.b._textModel.getLineCount(),
							v = new h.$cV(),
							S = E.$le.create(!1);
						do if (S.elapsed() > 1 || this.l(v) >= $) break;
						while (this.k());
						this.d.setTokens(v.finalize()), this.checkFinished();
					}
					k() {
						return this.b ? !this.b.store.allStatesValid() : !1;
					}
					l($) {
						const v = this.b?.getFirstInvalidLine();
						return v
							? (this.b.updateTokensUntilLine($, v.lineNumber), v.lineNumber)
							: this.b._textModel.getLineCount() + 1;
					}
					checkFinished() {
						this.a ||
							(this.b.store.allStatesValid() &&
								this.d.backgroundTokenizationFinished());
					}
					requestTokens($, v) {
						this.b.store.invalidateEndStateRange(new d.$rL($, v));
					}
				}
				e.$iV = l;
			},
		),
		define(
			de[1176],
			he([1, 0, 24, 15, 6, 3, 196, 916]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lV = e.$kV = e.$jV = void 0);
				class m {
					constructor() {
						(this.c = new w.$re()),
							(this.onDidChangeVisibleRanges = this.c.event),
							(this.d = new Set());
					}
					attachView() {
						const c = new r((n) => {
							this.c.fire({ view: c, state: n });
						});
						return this.d.add(c), c;
					}
					detachView(c) {
						this.d.delete(c), this.c.fire({ view: c, state: void 0 });
					}
				}
				e.$jV = m;
				class r {
					constructor(c) {
						this.c = c;
					}
					setVisibleLines(c, n) {
						const g = c.map(
							(p) => new C.$rL(p.startLineNumber, p.endLineNumber + 1),
						);
						this.c({ visibleLineRanges: g, stabilized: n });
					}
				}
				class u extends E.$1c {
					get lineRanges() {
						return this.g;
					}
					constructor(c) {
						super(),
							(this.h = c),
							(this.c = this.D(new i.$Yh(() => this.j(), 50))),
							(this.f = []),
							(this.g = []);
					}
					j() {
						(0, t.$yb)(this.f, this.g, (c, n) => c.equals(n)) ||
							((this.f = this.g), this.h());
					}
					handleStateChange(c) {
						(this.g = c.visibleLineRanges),
							c.stabilized ? (this.c.cancel(), this.j()) : this.c.schedule();
					}
				}
				e.$kV = u;
				class a extends E.$1c {
					get backgroundTokenizationState() {
						return this.f;
					}
					constructor(c, n, g) {
						super(),
							(this.j = c),
							(this.m = n),
							(this.n = g),
							(this.f = d.BackgroundTokenizationState.InProgress),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeBackgroundTokenizationState = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeTokens = this.h.event);
					}
					tokenizeIfCheap(c) {
						this.isCheapToTokenize(c) && this.forceTokenization(c);
					}
				}
				e.$lV = a;
			},
		),
		define(
			de[2694],
			he([1, 0, 74, 388, 171, 1176]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oV = void 0);
				class C extends E.$lV {
					constructor(m, r, u, a) {
						super(r, u, a), (this.r = m), (this.c = null), this.s();
					}
					s() {
						const m = this.n();
						(!this.c || this.q !== m) &&
							((this.q = m), (this.c = t.$mM.get(m)));
					}
					getLineTokens(m) {
						const r = this.m.getLineContent(m);
						if (this.c) {
							const u = this.c.tokenizeEncoded(m, this.m);
							if (u) return new i.$7L(u, r, this.j);
						}
						return i.$7L.createEmpty(r, this.j);
					}
					resetTokenization(m = !0) {
						m &&
							this.h.fire({
								semanticTokensApplied: !1,
								ranges: [
									{ fromLineNumber: 1, toLineNumber: this.m.getLineCount() },
								],
							}),
							this.s();
					}
					handleDidChangeAttached() {}
					handleDidChangeContent(m) {
						m.isFlush && this.resetTokenization(!1);
					}
					forceTokenization(m) {}
					hasAccurateTokensForLine(m) {
						return !0;
					}
					isCheapToTokenize(m) {
						return !0;
					}
					getTokenTypeIfInsertingCharacter(m, r, u) {
						return w.StandardTokenType.Other;
					}
					tokenizeLineWithEdit(m, r, u) {
						return null;
					}
					get hasTokens() {
						return this.r.getParseResult(this.m) !== void 0;
					}
				}
				e.$oV = C;
			},
		),
		define(
			de[2695],
			he([1, 0, 33, 6, 27, 9, 48, 17, 104, 74, 1542]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4wb = void 0),
					(e.$5wb = h),
					(u = mt(u));
				class a {
					static {
						this.CtrlCmd = w.KeyMod.CtrlCmd;
					}
					static {
						this.Shift = w.KeyMod.Shift;
					}
					static {
						this.Alt = w.KeyMod.Alt;
					}
					static {
						this.WinCtrl = w.KeyMod.WinCtrl;
					}
					static chord(n, g) {
						return (0, w.$os)(n, g);
					}
				}
				e.$4wb = a;
				function h() {
					return {
						editor: void 0,
						languages: void 0,
						CancellationTokenSource: t.$Ce,
						Emitter: i.$re,
						KeyCode: u.KeyCode,
						KeyMod: a,
						Position: C.$hL,
						Range: d.$iL,
						Selection: m.$kL,
						SelectionDirection: u.SelectionDirection,
						MarkerSeverity: u.MarkerSeverity,
						MarkerTag: u.MarkerTag,
						Uri: E.URI,
						Token: r.$bM,
					};
				}
			},
		),
		