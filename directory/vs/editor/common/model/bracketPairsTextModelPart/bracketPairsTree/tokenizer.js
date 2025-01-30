import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/errors.js';
import '../../../encodedTokenAttributes.js';
import './ast.js';
import './length.js';
import './smallImmutableSet.js';
define(
			de[915],
			he([1, 0, 29, 171, 658, 492, 657]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*encodedTokenAttributes*/,
 w /*ast*/,
 E /*length*/,
 C /*smallImmutableSet*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kN = e.$jN = e.$iN = e.TokenKind = void 0);
				var d;
				(function (h) {
					(h[(h.Text = 0)] = "Text"),
						(h[(h.OpeningBracket = 1)] = "OpeningBracket"),
						(h[(h.ClosingBracket = 2)] = "ClosingBracket");
				})(d || (e.TokenKind = d = {}));
				class m {
					constructor(c, n, g, p, o) {
						(this.length = c),
							(this.kind = n),
							(this.bracketId = g),
							(this.bracketIds = p),
							(this.astNode = o);
					}
				}
				e.$iN = m;
				class r {
					constructor(c, n) {
						(this.d = c),
							(this.e = n),
							(this.c = new u(this.d, this.e)),
							(this.f = E.$DM),
							(this.g = !1),
							(this.h = null),
							(this.a = c.getLineCount()),
							(this.b = c.getLineLength(this.a));
					}
					get offset() {
						return this.f;
					}
					get length() {
						return (0, E.$FM)(this.a - 1, this.b);
					}
					getText() {
						return this.d.getValue();
					}
					skip(c) {
						(this.g = !1), (this.f = (0, E.$JM)(this.f, c));
						const n = (0, E.$GM)(this.f);
						this.c.setPosition(n.lineCount, n.columnCount);
					}
					read() {
						let c;
						return (
							this.h ? ((this.g = !1), (c = this.h)) : (c = this.c.read()),
							c && (this.f = (0, E.$JM)(this.f, c.length)),
							c
						);
					}
					peek() {
						return this.g || ((this.h = this.c.read()), (this.g = !0)), this.h;
					}
				}
				e.$jN = r;
				class u {
					constructor(c, n) {
						(this.c = c),
							(this.d = n),
							(this.e = 0),
							(this.f = null),
							(this.g = 0),
							(this.h = null),
							(this.j = 0),
							(this.k = null),
							(this.a = c.getLineCount()),
							(this.b = c.getLineLength(this.a));
					}
					setPosition(c, n) {
						c === this.e
							? ((this.g = n),
								this.f !== null &&
									(this.j =
										this.g === 0 ? 0 : this.h.findTokenIndexAtOffset(this.g)))
							: ((this.e = c), (this.g = n), (this.f = null)),
							(this.k = null);
					}
					read() {
						if (this.k) {
							const o = this.k;
							return (this.k = null), (this.g += (0, E.$IM)(o.length)), o;
						}
						if (
							this.e > this.a - 1 ||
							(this.e === this.a - 1 && this.g >= this.b)
						)
							return null;
						this.f === null &&
							((this.h = this.c.tokenization.getLineTokens(this.e + 1)),
							(this.f = this.h.getLineContent()),
							(this.j =
								this.g === 0 ? 0 : this.h.findTokenIndexAtOffset(this.g)));
						const c = this.e,
							n = this.g;
						let g = 0;
						for (;;) {
							const o = this.h,
								f = o.getCount();
							let b = null;
							if (this.j < f) {
								const s = o.getMetadata(this.j);
								for (; this.j + 1 < f && s === o.getMetadata(this.j + 1); )
									this.j++;
								const l = i.$2L.getTokenType(s) === i.StandardTokenType.Other,
									y = i.$2L.containsBalancedBrackets(s),
									$ = o.getEndOffset(this.j);
								if (y && l && this.g < $) {
									const v = o.getLanguageId(this.j),
										S = this.f.substring(this.g, $),
										I = this.d.getSingleLanguageBracketTokens(v),
										T = I.regExpGlobal;
									if (T) {
										T.lastIndex = 0;
										const P = T.exec(S);
										P && ((b = I.getToken(P[0])), b && (this.g += P.index));
									}
								}
								if (((g += $ - this.g), b))
									if (c !== this.e || n !== this.g) {
										this.k = b;
										break;
									} else return (this.g += (0, E.$IM)(b.length)), b;
								else this.j++, (this.g = $);
							} else if (
								this.e === this.a - 1 ||
								(this.e++,
								(this.h = this.c.tokenization.getLineTokens(this.e + 1)),
								(this.j = 0),
								(this.f = this.h.getLineContent()),
								(this.g = 0),
								(g += 33),
								g > 1e3)
							)
								break;
							if (g > 1500) break;
						}
						const p = (0, E.$CM)(c, n, this.e, this.g);
						return new m(p, d.Text, -1, C.$ZM.getEmpty(), new w.$nN(p));
					}
				}
				class a {
					constructor(c, n) {
						(this.d = c), (this.a = E.$DM), (this.c = 0);
						const g = n.getRegExpStr(),
							p = g
								? new RegExp(
										g +
											`|
`,
										"gi",
									)
								: null,
							o = [];
						let f,
							b = 0,
							s = 0,
							l = 0,
							y = 0;
						const $ = [];
						for (let I = 0; I < 60; I++)
							$.push(
								new m(
									(0, E.$FM)(0, I),
									d.Text,
									-1,
									C.$ZM.getEmpty(),
									new w.$nN((0, E.$FM)(0, I)),
								),
							);
						const v = [];
						for (let I = 0; I < 60; I++)
							v.push(
								new m(
									(0, E.$FM)(1, I),
									d.Text,
									-1,
									C.$ZM.getEmpty(),
									new w.$nN((0, E.$FM)(1, I)),
								),
							);
						if (p)
							for (p.lastIndex = 0; (f = p.exec(c)) !== null; ) {
								const I = f.index,
									T = f[0];
								if (
									T ===
									`
`
								)
									b++, (s = I + 1);
								else {
									if (l !== I) {
										let P;
										if (y === b) {
											const k = I - l;
											if (k < $.length) P = $[k];
											else {
												const L = (0, E.$FM)(0, k);
												P = new m(
													L,
													d.Text,
													-1,
													C.$ZM.getEmpty(),
													new w.$nN(L),
												);
											}
										} else {
											const k = b - y,
												L = I - s;
											if (k === 1 && L < v.length) P = v[L];
											else {
												const D = (0, E.$FM)(k, L);
												P = new m(
													D,
													d.Text,
													-1,
													C.$ZM.getEmpty(),
													new w.$nN(D),
												);
											}
										}
										o.push(P);
									}
									o.push(n.getToken(T)), (l = I + T.length), (y = b);
								}
							}
						const S = c.length;
						if (l !== S) {
							const I =
								y === b ? (0, E.$FM)(0, S - l) : (0, E.$FM)(b - y, S - s);
							o.push(new m(I, d.Text, -1, C.$ZM.getEmpty(), new w.$nN(I)));
						}
						(this.length = (0, E.$FM)(b, S - s)), (this.b = o);
					}
					get offset() {
						return this.a;
					}
					read() {
						return this.b[this.c++] || null;
					}
					peek() {
						return this.b[this.c] || null;
					}
					skip(c) {
						throw new t.$db();
					}
					getText() {
						return this.d;
					}
				}
				e.$kN = a;
			},
		),
		