import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/strings.js';
import './languageConfiguration.js';
import './supports/indentRules.js';
import '../config/editorOptions.js';
import './supports/indentationLineProcessor.js';
define(
			de[1184],
			he([1, 0, 37, 532, 912, 38, 1151]),
			function (ce /*require*/,
 e /*exports*/,
 t /*strings*/,
 i /*languageConfiguration*/,
 w /*indentRules*/,
 E /*editorOptions*/,
 C /*indentationLineProcessor*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Itb = m),
					(e.$Jtb = r),
					(e.$Ktb = u),
					(e.$Ltb = a),
					(e.$Mtb = h),
					(t = mt(t));
				function d(n, g, p) {
					const o = n.tokenization.getLanguageIdAtPosition(g, 0);
					if (g > 1) {
						let f,
							b = -1;
						for (f = g - 1; f >= 1; f--) {
							if (n.tokenization.getLanguageIdAtPosition(f, 0) !== o) return b;
							const s = n.getLineContent(f);
							if (p.shouldIgnore(f) || /^\s+$/.test(s) || s === "") {
								b = f;
								continue;
							}
							return f;
						}
					}
					return -1;
				}
				function m(n, g, p, o = !0, f) {
					if (n < E.EditorAutoIndentStrategy.Full) return null;
					const b = f.getLanguageConfiguration(
						g.tokenization.getLanguageId(),
					).indentRulesSupport;
					if (!b) return null;
					const s = new C.$Ntb(g, b, f);
					if (p <= 1) return { indentation: "", action: null };
					for (let y = p - 1; y > 0 && g.getLineContent(y) === ""; y--)
						if (y === 1) return { indentation: "", action: null };
					const l = d(g, p, s);
					if (l < 0) return null;
					if (l < 1) return { indentation: "", action: null };
					if (s.shouldIncrease(l) || s.shouldIndentNextLine(l)) {
						const y = g.getLineContent(l);
						return {
							indentation: t.$Cf(y),
							action: i.IndentAction.Indent,
							line: l,
						};
					} else if (s.shouldDecrease(l)) {
						const y = g.getLineContent(l);
						return { indentation: t.$Cf(y), action: null, line: l };
					} else {
						if (l === 1)
							return {
								indentation: t.$Cf(g.getLineContent(l)),
								action: null,
								line: l,
							};
						const y = l - 1,
							$ = b.getIndentMetadata(g.getLineContent(y));
						if (
							!(
								$ &
								(w.IndentConsts.INCREASE_MASK | w.IndentConsts.DECREASE_MASK)
							) &&
							$ & w.IndentConsts.INDENT_NEXTLINE_MASK
						) {
							let v = 0;
							for (let S = y - 1; S > 0; S--)
								if (!s.shouldIndentNextLine(S)) {
									v = S;
									break;
								}
							return {
								indentation: t.$Cf(g.getLineContent(v + 1)),
								action: null,
								line: v + 1,
							};
						}
						if (o)
							return {
								indentation: t.$Cf(g.getLineContent(l)),
								action: null,
								line: l,
							};
						for (let v = l; v > 0; v--) {
							if (s.shouldIncrease(v))
								return {
									indentation: t.$Cf(g.getLineContent(v)),
									action: i.IndentAction.Indent,
									line: v,
								};
							if (s.shouldIndentNextLine(v)) {
								let S = 0;
								for (let I = v - 1; I > 0; I--)
									if (!s.shouldIndentNextLine(v)) {
										S = I;
										break;
									}
								return {
									indentation: t.$Cf(g.getLineContent(S + 1)),
									action: null,
									line: S + 1,
								};
							} else if (s.shouldDecrease(v))
								return {
									indentation: t.$Cf(g.getLineContent(v)),
									action: null,
									line: v,
								};
						}
						return {
							indentation: t.$Cf(g.getLineContent(1)),
							action: null,
							line: 1,
						};
					}
				}
				function r(n, g, p, o, f, b) {
					if (n < E.EditorAutoIndentStrategy.Full) return null;
					const s = b.getLanguageConfiguration(p);
					if (!s) return null;
					const l = b.getLanguageConfiguration(p).indentRulesSupport;
					if (!l) return null;
					const y = new C.$Ntb(g, l, b),
						$ = m(n, g, o, void 0, b);
					if ($) {
						const v = $.line;
						if (v !== void 0) {
							let S = !0;
							for (let I = v; I < o - 1; I++)
								if (!/^\s*$/.test(g.getLineContent(I))) {
									S = !1;
									break;
								}
							if (S) {
								const I = s.onEnter(n, "", g.getLineContent(v), "");
								if (I) {
									let T = t.$Cf(g.getLineContent(v));
									return (
										I.removeText &&
											(T = T.substring(0, T.length - I.removeText)),
										I.indentAction === i.IndentAction.Indent ||
										I.indentAction === i.IndentAction.IndentOutdent
											? (T = f.shiftIndent(T))
											: I.indentAction === i.IndentAction.Outdent &&
												(T = f.unshiftIndent(T)),
										y.shouldDecrease(o) && (T = f.unshiftIndent(T)),
										I.appendText && (T += I.appendText),
										t.$Cf(T)
									);
								}
							}
						}
						return y.shouldDecrease(o)
							? $.action === i.IndentAction.Indent
								? $.indentation
								: f.unshiftIndent($.indentation)
							: $.action === i.IndentAction.Indent
								? f.shiftIndent($.indentation)
								: $.indentation;
					}
					return null;
				}
				function u(n, g, p, o, f) {
					if (n < E.EditorAutoIndentStrategy.Full) return null;
					const b = g.getLanguageIdAtPosition(p.startLineNumber, p.startColumn),
						s = f.getLanguageConfiguration(b).indentRulesSupport;
					if (!s) return null;
					g.tokenization.forceTokenization(p.startLineNumber);
					const y = new C.$Otb(g, f).getProcessedTokenContextAroundRange(p),
						$ = y.afterRangeProcessedTokens,
						v = y.beforeRangeProcessedTokens,
						S = t.$Cf(v.getLineContent()),
						I = c(g, p.startLineNumber, v),
						T = (0, C.$Ptb)(g, p.getStartPosition()),
						P = g.getLineContent(p.startLineNumber),
						k = t.$Cf(P),
						L = m(n, I, p.startLineNumber + 1, void 0, f);
					if (!L) {
						const M = T ? k : S;
						return { beforeEnter: M, afterEnter: M };
					}
					let D = T ? k : L.indentation;
					return (
						L.action === i.IndentAction.Indent && (D = o.shiftIndent(D)),
						s.shouldDecrease($.getLineContent()) && (D = o.unshiftIndent(D)),
						{ beforeEnter: T ? k : S, afterEnter: D }
					);
				}
				function a(n, g, p, o, f, b) {
					const s = n.autoIndent;
					if (
						s < E.EditorAutoIndentStrategy.Full ||
						(0, C.$Ptb)(g, p.getStartPosition())
					)
						return null;
					const y = g.getLanguageIdAtPosition(p.startLineNumber, p.startColumn),
						$ = b.getLanguageConfiguration(y).indentRulesSupport;
					if (!$) return null;
					const S = new C.$Otb(g, b).getProcessedTokenContextAroundRange(p),
						I = S.beforeRangeProcessedTokens.getLineContent(),
						T = S.afterRangeProcessedTokens.getLineContent(),
						P = I + T,
						k = I + o + T;
					if (!$.shouldDecrease(P) && $.shouldDecrease(k)) {
						const D = m(s, g, p.startLineNumber, !1, b);
						if (!D) return null;
						let M = D.indentation;
						return (
							D.action !== i.IndentAction.Indent && (M = f.unshiftIndent(M)), M
						);
					}
					const L = p.startLineNumber - 1;
					if (L > 0) {
						const D = g.getLineContent(L);
						if ($.shouldIndentNextLine(D) && $.shouldIncrease(k)) {
							const N = m(s, g, p.startLineNumber, !1, b)?.indentation;
							if (N !== void 0) {
								const A = g.getLineContent(p.startLineNumber),
									R = t.$Cf(A),
									B = f.shiftIndent(N) === R,
									U = /^\s*$/.test(P),
									z = n.autoClosingPairs.autoClosingPairsOpenByEnd.get(o),
									x = z && z.length > 0 && U;
								if (B && x) return N;
							}
						}
					}
					return null;
				}
				function h(n, g, p) {
					const o = p.getLanguageConfiguration(
						n.getLanguageId(),
					).indentRulesSupport;
					return !o || g < 1 || g > n.getLineCount()
						? null
						: o.getIndentMetadata(n.getLineContent(g));
				}
				function c(n, g, p) {
					return {
						tokenization: {
							getLineTokens: (f) =>
								f === g ? p : n.tokenization.getLineTokens(f),
							getLanguageId: () => n.getLanguageId(),
							getLanguageIdAtPosition: (f, b) =>
								n.getLanguageIdAtPosition(f, b),
						},
						getLineContent: (f) =>
							f === g ? p.getLineContent() : n.getLineContent(f),
					};
				}
			},
		),
		