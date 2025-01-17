import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arraysFind.js';
import '../../../base/common/strings.js';
import '../core/cursorColumns.js';
import '../core/range.js';
import './textModelPart.js';
import './utils.js';
import '../textModelGuides.js';
import '../../../base/common/errors.js';
define(
			de[1543],
			he([1, 0, 214, 37, 435, 17, 1539, 1149, 1150, 29]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DU = e.$CU = void 0),
					(i = mt(i));
				class u extends C.$AU {
					constructor(c, n) {
						super(), (this.c = c), (this.h = n);
					}
					j(c) {
						return this.h.getLanguageConfiguration(c);
					}
					m(c) {
						return (0, d.$BU)(
							this.c.getLineContent(c + 1),
							this.c.getOptions().tabSize,
						);
					}
					getActiveIndentGuide(c, n, g) {
						this.g();
						const p = this.c.getLineCount();
						if (c < 1 || c > p) throw new r.$gb("Illegal value for lineNumber");
						const o = this.j(this.c.getLanguageId()).foldingRules,
							f = !!(o && o.offSide);
						let b = -2,
							s = -1,
							l = -2,
							y = -1;
						const $ = (R) => {
							if (b !== -1 && (b === -2 || b > R - 1)) {
								(b = -1), (s = -1);
								for (let O = R - 2; O >= 0; O--) {
									const B = this.m(O);
									if (B >= 0) {
										(b = O), (s = B);
										break;
									}
								}
							}
							if (l === -2) {
								(l = -1), (y = -1);
								for (let O = R; O < p; O++) {
									const B = this.m(O);
									if (B >= 0) {
										(l = O), (y = B);
										break;
									}
								}
							}
						};
						let v = -2,
							S = -1,
							I = -2,
							T = -1;
						const P = (R) => {
							if (v === -2) {
								(v = -1), (S = -1);
								for (let O = R - 2; O >= 0; O--) {
									const B = this.m(O);
									if (B >= 0) {
										(v = O), (S = B);
										break;
									}
								}
							}
							if (I !== -1 && (I === -2 || I < R - 1)) {
								(I = -1), (T = -1);
								for (let O = R; O < p; O++) {
									const B = this.m(O);
									if (B >= 0) {
										(I = O), (T = B);
										break;
									}
								}
							}
						};
						let k = 0,
							L = !0,
							D = 0,
							M = !0,
							N = 0,
							A = 0;
						for (let R = 0; L || M; R++) {
							const O = c - R,
								B = c + R;
							R > 1 && (O < 1 || O < n) && (L = !1),
								R > 1 && (B > p || B > g) && (M = !1),
								R > 5e4 && ((L = !1), (M = !1));
							let U = -1;
							if (L && O >= 1) {
								const F = this.m(O - 1);
								F >= 0
									? ((l = O - 1),
										(y = F),
										(U = Math.ceil(F / this.c.getOptions().indentSize)))
									: ($(O), (U = this.q(f, s, y)));
							}
							let z = -1;
							if (M && B <= p) {
								const F = this.m(B - 1);
								F >= 0
									? ((v = B - 1),
										(S = F),
										(z = Math.ceil(F / this.c.getOptions().indentSize)))
									: (P(B), (z = this.q(f, S, T)));
							}
							if (R === 0) {
								A = U;
								continue;
							}
							if (R === 1) {
								if (B <= p && z >= 0 && A + 1 === z) {
									(L = !1), (k = B), (D = B), (N = z);
									continue;
								}
								if (O >= 1 && U >= 0 && U - 1 === A) {
									(M = !1), (k = O), (D = O), (N = U);
									continue;
								}
								if (((k = c), (D = c), (N = A), N === 0))
									return { startLineNumber: k, endLineNumber: D, indent: N };
							}
							L && (U >= N ? (k = O) : (L = !1)),
								M && (z >= N ? (D = B) : (M = !1));
						}
						return { startLineNumber: k, endLineNumber: D, indent: N };
					}
					getLinesBracketGuides(c, n, g, p) {
						const o = [];
						for (let $ = c; $ <= n; $++) o.push([]);
						const f = !0,
							b = this.c.bracketPairs
								.getBracketPairsInRangeWithMinIndentation(
									new E.$iL(c, 1, n, this.c.getLineMaxColumn(n)),
								)
								.toArray();
						let s;
						if (g && b.length > 0) {
							const $ = (
								c <= g.lineNumber && g.lineNumber <= n
									? b
									: this.c.bracketPairs
											.getBracketPairsInRange(E.$iL.fromPositions(g))
											.toArray()
							).filter((v) => E.$iL.strictContainsPosition(v.range, g));
							s = (0, t.$jb)(
								$,
								(v) => f || v.range.startLineNumber !== v.range.endLineNumber,
							)?.range;
						}
						const l =
								this.c.getOptions().bracketPairColorizationOptions
									.independentColorPoolPerBracketType,
							y = new a();
						for (const $ of b) {
							if (!$.closingBracketRange) continue;
							const v = s && $.range.equalsRange(s);
							if (!v && !p.includeInactive) continue;
							const S =
									y.getInlineClassName(
										$.nestingLevel,
										$.nestingLevelOfEqualBracketType,
										l,
									) + (p.highlightActive && v ? " " + y.activeClassName : ""),
								I = $.openingBracketRange.getStartPosition(),
								T = $.closingBracketRange.getStartPosition(),
								P =
									p.horizontalGuides === m.HorizontalGuidesState.Enabled ||
									(p.horizontalGuides ===
										m.HorizontalGuidesState.EnabledForActive &&
										v);
							if ($.range.startLineNumber === $.range.endLineNumber) {
								f &&
									P &&
									o[$.range.startLineNumber - c].push(
										new m.$CN(
											-1,
											$.openingBracketRange.getEndPosition().column,
											S,
											new m.$DN(!1, T.column),
											-1,
											-1,
										),
									);
								continue;
							}
							const k = this.n(T),
								L = this.n($.openingBracketRange.getStartPosition()),
								D = Math.min(L, k, $.minVisibleColumnIndentation + 1);
							let M = !1;
							i.$Bf(
								this.c.getLineContent($.closingBracketRange.startLineNumber),
							) <
								$.closingBracketRange.startColumn - 1 && (M = !0);
							const R = Math.max(I.lineNumber, c),
								O = Math.min(T.lineNumber, n),
								B = M ? 1 : 0;
							for (let U = R; U < O + B; U++)
								o[U - c].push(
									new m.$CN(
										D,
										-1,
										S,
										null,
										U === I.lineNumber ? I.column : -1,
										U === T.lineNumber ? T.column : -1,
									),
								);
							P &&
								(I.lineNumber >= c &&
									L > D &&
									o[I.lineNumber - c].push(
										new m.$CN(D, -1, S, new m.$DN(!1, I.column), -1, -1),
									),
								T.lineNumber <= n &&
									k > D &&
									o[T.lineNumber - c].push(
										new m.$CN(D, -1, S, new m.$DN(!M, T.column), -1, -1),
									));
						}
						for (const $ of o)
							$.sort((v, S) => v.visibleColumn - S.visibleColumn);
						return o;
					}
					n(c) {
						return (
							w.$BM.visibleColumnFromColumn(
								this.c.getLineContent(c.lineNumber),
								c.column,
								this.c.getOptions().tabSize,
							) + 1
						);
					}
					getLinesIndentGuides(c, n) {
						this.g();
						const g = this.c.getLineCount();
						if (c < 1 || c > g)
							throw new Error("Illegal value for startLineNumber");
						if (n < 1 || n > g)
							throw new Error("Illegal value for endLineNumber");
						const p = this.c.getOptions(),
							o = this.j(this.c.getLanguageId()).foldingRules,
							f = !!(o && o.offSide),
							b = new Array(n - c + 1);
						let s = -2,
							l = -1,
							y = -2,
							$ = -1;
						for (let v = c; v <= n; v++) {
							const S = v - c,
								I = this.m(v - 1);
							if (I >= 0) {
								(s = v - 1), (l = I), (b[S] = Math.ceil(I / p.indentSize));
								continue;
							}
							if (s === -2) {
								(s = -1), (l = -1);
								for (let T = v - 2; T >= 0; T--) {
									const P = this.m(T);
									if (P >= 0) {
										(s = T), (l = P);
										break;
									}
								}
							}
							if (y !== -1 && (y === -2 || y < v - 1)) {
								(y = -1), ($ = -1);
								for (let T = v; T < g; T++) {
									const P = this.m(T);
									if (P >= 0) {
										(y = T), ($ = P);
										break;
									}
								}
							}
							b[S] = this.q(f, l, $);
						}
						return b;
					}
					q(c, n, g) {
						const p = this.c.getOptions();
						return n === -1 || g === -1
							? 0
							: n < g
								? 1 + Math.floor(n / p.indentSize)
								: n === g || c
									? Math.ceil(g / p.indentSize)
									: 1 + Math.floor(g / p.indentSize);
					}
				}
				e.$CU = u;
				class a {
					constructor() {
						this.activeClassName = "indent-active";
					}
					getInlineClassName(c, n, g) {
						return this.getInlineClassNameOfLevel(g ? n : c);
					}
					getInlineClassNameOfLevel(c) {
						return `bracket-indent-guide lvl-${c % 30}`;
					}
				}
				e.$DU = a;
			},
		),
		