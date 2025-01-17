import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/strings.js';
import '../../../common/commands/shiftCommand.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/languages/languageConfiguration.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import '../../../common/languages/supports/indentRules.js';
import '../../indentation/common/indentUtils.js';
import '../../../common/languages/autoIndent.js';
import '../../../common/languages/enterAction.js';
define(
			de[2778],
			he([1, 0, 37, 771, 38, 17, 104, 532, 152, 912, 1553, 1184, 1198]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sic = void 0),
					(t = mt(t)),
					(u = mt(u));
				let c = class {
					constructor(g, p, o, f) {
						(this.g = f),
							(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = null),
							(this.f = !1);
					}
					getEditOperations(g, p) {
						const o = () => g.getLanguageId(),
							f = (S, I) => g.getLanguageIdAtPosition(S, I),
							b = g.getLineCount();
						if (this.b && this.a.endLineNumber === b) {
							this.d = p.trackSelection(this.a);
							return;
						}
						if (!this.b && this.a.startLineNumber === 1) {
							this.d = p.trackSelection(this.a);
							return;
						}
						this.e = !1;
						let s = this.a;
						s.startLineNumber < s.endLineNumber &&
							s.endColumn === 1 &&
							((this.e = !0),
							(s = s.setEndPosition(
								s.endLineNumber - 1,
								g.getLineMaxColumn(s.endLineNumber - 1),
							)));
						const {
								tabSize: l,
								indentSize: y,
								insertSpaces: $,
							} = g.getOptions(),
							v = this.h(l, y, $);
						if (
							s.startLineNumber === s.endLineNumber &&
							g.getLineMaxColumn(s.startLineNumber) === 1
						) {
							const S = s.startLineNumber,
								I = this.b ? S + 1 : S - 1;
							g.getLineMaxColumn(I) === 1
								? p.addEditOperation(new E.$iL(1, 1, 1, 1), null)
								: (p.addEditOperation(
										new E.$iL(S, 1, S, 1),
										g.getLineContent(I),
									),
									p.addEditOperation(
										new E.$iL(I, 1, I, g.getLineMaxColumn(I)),
										null,
									)),
								(s = new C.$kL(I, 1, I, 1));
						} else {
							let S, I;
							if (this.b) {
								(S = s.endLineNumber + 1),
									(I = g.getLineContent(S)),
									p.addEditOperation(
										new E.$iL(
											S - 1,
											g.getLineMaxColumn(S - 1),
											S,
											g.getLineMaxColumn(S),
										),
										null,
									);
								let T = I;
								if (this.n(g, s)) {
									const P = this.l(g, v, l, S, s.startLineNumber - 1);
									if (P !== null) {
										const L = t.$Cf(g.getLineContent(S)),
											D = P + u.$xic(L, l);
										T = u.$yic(D, l, $) + this.m(I);
									} else {
										const L = {
												tokenization: {
													getLineTokens: (M) =>
														M === s.startLineNumber
															? g.tokenization.getLineTokens(S)
															: g.tokenization.getLineTokens(M),
													getLanguageId: o,
													getLanguageIdAtPosition: f,
												},
												getLineContent: (M) =>
													M === s.startLineNumber
														? g.getLineContent(S)
														: g.getLineContent(M),
											},
											D = (0, a.$Jtb)(
												this.c,
												L,
												g.getLanguageIdAtPosition(S, 1),
												s.startLineNumber,
												v,
												this.g,
											);
										if (D !== null) {
											const M = t.$Cf(g.getLineContent(S)),
												N = u.$xic(D, l),
												A = u.$xic(M, l);
											N !== A && (T = u.$yic(N, l, $) + this.m(I));
										}
									}
									p.addEditOperation(
										new E.$iL(s.startLineNumber, 1, s.startLineNumber, 1),
										T +
											`
`,
									);
									const k = this.k(g, v, l, s.startLineNumber, S, T);
									if (k !== null) k !== 0 && this.o(g, p, s, l, $, k);
									else {
										const L = {
												tokenization: {
													getLineTokens: (M) =>
														M === s.startLineNumber
															? g.tokenization.getLineTokens(S)
															: M >= s.startLineNumber + 1 &&
																	M <= s.endLineNumber + 1
																? g.tokenization.getLineTokens(M - 1)
																: g.tokenization.getLineTokens(M),
													getLanguageId: o,
													getLanguageIdAtPosition: f,
												},
												getLineContent: (M) =>
													M === s.startLineNumber
														? T
														: M >= s.startLineNumber + 1 &&
																M <= s.endLineNumber + 1
															? g.getLineContent(M - 1)
															: g.getLineContent(M),
											},
											D = (0, a.$Jtb)(
												this.c,
												L,
												g.getLanguageIdAtPosition(S, 1),
												s.startLineNumber + 1,
												v,
												this.g,
											);
										if (D !== null) {
											const M = t.$Cf(g.getLineContent(s.startLineNumber)),
												N = u.$xic(D, l),
												A = u.$xic(M, l);
											if (N !== A) {
												const R = N - A;
												this.o(g, p, s, l, $, R);
											}
										}
									}
								} else
									p.addEditOperation(
										new E.$iL(s.startLineNumber, 1, s.startLineNumber, 1),
										T +
											`
`,
									);
							} else if (
								((S = s.startLineNumber - 1),
								(I = g.getLineContent(S)),
								p.addEditOperation(new E.$iL(S, 1, S + 1, 1), null),
								p.addEditOperation(
									new E.$iL(
										s.endLineNumber,
										g.getLineMaxColumn(s.endLineNumber),
										s.endLineNumber,
										g.getLineMaxColumn(s.endLineNumber),
									),
									`
` + I,
								),
								this.n(g, s))
							) {
								const T = {
										tokenization: {
											getLineTokens: (k) =>
												k === S
													? g.tokenization.getLineTokens(s.startLineNumber)
													: g.tokenization.getLineTokens(k),
											getLanguageId: o,
											getLanguageIdAtPosition: f,
										},
										getLineContent: (k) =>
											k === S
												? g.getLineContent(s.startLineNumber)
												: g.getLineContent(k),
									},
									P = this.l(g, v, l, s.startLineNumber, s.startLineNumber - 2);
								if (P !== null) P !== 0 && this.o(g, p, s, l, $, P);
								else {
									const k = (0, a.$Jtb)(
										this.c,
										T,
										g.getLanguageIdAtPosition(s.startLineNumber, 1),
										S,
										v,
										this.g,
									);
									if (k !== null) {
										const L = t.$Cf(g.getLineContent(s.startLineNumber)),
											D = u.$xic(k, l),
											M = u.$xic(L, l);
										if (D !== M) {
											const N = D - M;
											this.o(g, p, s, l, $, N);
										}
									}
								}
							}
						}
						this.d = p.trackSelection(s);
					}
					h(g, p, o) {
						return {
							shiftIndent: (f) => i.$Rtb.shiftIndent(f, f.length + 1, g, p, o),
							unshiftIndent: (f) =>
								i.$Rtb.unshiftIndent(f, f.length + 1, g, p, o),
						};
					}
					j(g, p, o, f, b) {
						if (b) {
							let s = b.indentation;
							b.indentAction === d.IndentAction.None ||
							b.indentAction === d.IndentAction.Indent
								? (s = b.indentation + b.appendText)
								: b.indentAction === d.IndentAction.IndentOutdent
									? (s = b.indentation)
									: b.indentAction === d.IndentAction.Outdent &&
										(s = p.unshiftIndent(b.indentation) + b.appendText);
							const l = g.getLineContent(f);
							if (this.m(l).indexOf(this.m(s)) >= 0) {
								const y = t.$Cf(g.getLineContent(f));
								let $ = t.$Cf(s);
								const v = (0, a.$Mtb)(g, f, this.g);
								v !== null &&
									v & r.IndentConsts.DECREASE_MASK &&
									($ = p.unshiftIndent($));
								const S = u.$xic($, o),
									I = u.$xic(y, o);
								return S - I;
							}
						}
						return null;
					}
					k(g, p, o, f, b, s) {
						if (t.$Df(s) >= 0) {
							const l = g.getLineMaxColumn(b),
								y = (0, h.$Qtb)(this.c, g, new E.$iL(b, l, b, l), this.g);
							return this.j(g, p, o, f, y);
						} else {
							let l = f - 1;
							for (; l >= 1; ) {
								const v = g.getLineContent(l);
								if (t.$Df(v) >= 0) break;
								l--;
							}
							if (l < 1 || f > g.getLineCount()) return null;
							const y = g.getLineMaxColumn(l),
								$ = (0, h.$Qtb)(this.c, g, new E.$iL(l, y, l, y), this.g);
							return this.j(g, p, o, f, $);
						}
					}
					l(g, p, o, f, b, s) {
						let l = b;
						for (; l >= 1; ) {
							let v;
							if (
								(l === b && s !== void 0 ? (v = s) : (v = g.getLineContent(l)),
								t.$Df(v) >= 0)
							)
								break;
							l--;
						}
						if (l < 1 || f > g.getLineCount()) return null;
						const y = g.getLineMaxColumn(l),
							$ = (0, h.$Qtb)(this.c, g, new E.$iL(l, y, l, y), this.g);
						return this.j(g, p, o, f, $);
					}
					m(g) {
						return g.replace(/^\s+/, "");
					}
					n(g, p) {
						if (
							this.c < w.EditorAutoIndentStrategy.Full ||
							!g.tokenization.isCheapToTokenize(p.startLineNumber)
						)
							return !1;
						const o = g.getLanguageIdAtPosition(p.startLineNumber, 1),
							f = g.getLanguageIdAtPosition(p.endLineNumber, 1);
						return !(
							o !== f ||
							this.g.getLanguageConfiguration(o).indentRulesSupport === null
						);
					}
					o(g, p, o, f, b, s) {
						for (let l = o.startLineNumber; l <= o.endLineNumber; l++) {
							const y = g.getLineContent(l),
								$ = t.$Cf(y),
								S = u.$xic($, f) + s,
								I = u.$yic(S, f, b);
							I !== $ &&
								(p.addEditOperation(new E.$iL(l, 1, l, $.length + 1), I),
								l === o.endLineNumber &&
									o.endColumn <= $.length + 1 &&
									I === "" &&
									(this.f = !0));
						}
					}
					computeCursorState(g, p) {
						let o = p.getTrackedSelection(this.d);
						return (
							this.e && (o = o.setEndPosition(o.endLineNumber + 1, 1)),
							this.f &&
								o.startLineNumber < o.endLineNumber &&
								(o = o.setEndPosition(o.endLineNumber, 2)),
							o
						);
					}
				};
				(e.$Sic = c), (e.$Sic = c = Ne([j(3, m.$aN)], c));
			},
		),
		