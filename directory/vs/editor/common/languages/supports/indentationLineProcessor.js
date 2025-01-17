import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/strings.js';
import '../supports.js';
import '../../tokens/lineTokens.js';
import '../../encodedTokenAttributes.js';
define(
			de[1151],
			he([1, 0, 37, 748, 388, 171]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Otb = e.$Ntb = void 0),
					(e.$Ptb = r),
					(t = mt(t));
				class C {
					constructor(a, h, c) {
						(this.a = h), (this.b = new m(a, c));
					}
					shouldIncrease(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldIncrease(c);
					}
					shouldDecrease(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldDecrease(c);
					}
					shouldIgnore(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldIgnore(c);
					}
					shouldIndentNextLine(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldIndentNextLine(c);
					}
				}
				e.$Ntb = C;
				class d {
					constructor(a, h) {
						(this.a = a), (this.b = new m(a, h));
					}
					getProcessedTokenContextAroundRange(a) {
						const h = this.c(a),
							c = this.d(a),
							n = this.e(a);
						return {
							beforeRangeProcessedTokens: h,
							afterRangeProcessedTokens: c,
							previousLineProcessedTokens: n,
						};
					}
					c(a) {
						this.a.tokenization.forceTokenization(a.startLineNumber);
						const h = this.a.tokenization.getLineTokens(a.startLineNumber),
							c = (0, i.$oM)(h, a.startColumn - 1);
						let n;
						if (r(this.a, a.getStartPosition())) {
							const p = a.startColumn - 1 - c.firstCharOffset,
								o = c.firstCharOffset,
								f = o + p;
							n = h.sliceAndInflate(o, f, 0);
						} else {
							const p = a.startColumn - 1;
							n = h.sliceAndInflate(0, p, 0);
						}
						return this.b.getProcessedTokens(n);
					}
					d(a) {
						const h = a.isEmpty() ? a.getStartPosition() : a.getEndPosition();
						this.a.tokenization.forceTokenization(h.lineNumber);
						const c = this.a.tokenization.getLineTokens(h.lineNumber),
							n = (0, i.$oM)(c, h.column - 1),
							g = h.column - 1 - n.firstCharOffset,
							p = n.firstCharOffset + g,
							o = n.firstCharOffset + n.getLineLength(),
							f = c.sliceAndInflate(p, o, 0);
						return this.b.getProcessedTokens(f);
					}
					e(a) {
						const h = ($) => {
							this.a.tokenization.forceTokenization($);
							const v = this.a.tokenization.getLineTokens($),
								S = this.a.getLineMaxColumn($) - 1;
							return (0, i.$oM)(v, S);
						};
						this.a.tokenization.forceTokenization(a.startLineNumber);
						const c = this.a.tokenization.getLineTokens(a.startLineNumber),
							n = (0, i.$oM)(c, a.startColumn - 1),
							g = w.$7L.createEmpty("", n.languageIdCodec),
							p = a.startLineNumber - 1;
						if (p === 0 || !(n.firstCharOffset === 0)) return g;
						const b = h(p);
						if (!(n.languageId === b.languageId)) return g;
						const l = b.toIViewLineTokens();
						return this.b.getProcessedTokens(l);
					}
				}
				e.$Otb = d;
				class m {
					constructor(a, h) {
						(this.a = a), (this.b = h);
					}
					getProcessedLine(a, h) {
						const c = (p, o) => {
							const f = t.$Cf(p);
							return o + p.substring(f.length);
						};
						this.a.tokenization.forceTokenization?.(a);
						const n = this.a.tokenization.getLineTokens(a);
						let g = this.getProcessedTokens(n).getLineContent();
						return h !== void 0 && (g = c(g, h)), g;
					}
					getProcessedTokens(a) {
						const h = (f) =>
								f === E.StandardTokenType.String ||
								f === E.StandardTokenType.RegEx ||
								f === E.StandardTokenType.Comment,
							c = a.getLanguageId(0),
							g = this.b
								.getLanguageConfiguration(c)
								.bracketsNew.getBracketRegExp({ global: !0 }),
							p = [];
						return (
							a.forEach((f) => {
								const b = a.getStandardTokenType(f);
								let s = a.getTokenText(f);
								h(b) && (s = s.replace(g, ""));
								const l = a.getMetadata(f);
								p.push({ text: s, metadata: l });
							}),
							w.$7L.createFromTextAndMetadata(p, a.languageIdCodec)
						);
					}
				}
				function r(u, a) {
					u.tokenization.forceTokenization(a.lineNumber);
					const h = u.tokenization.getLineTokens(a.lineNumber),
						c = (0, i.$oM)(h, a.column - 1),
						n = c.firstCharOffset === 0,
						g = h.getLanguageId(0) === c.languageId;
					return !n && !g;
				}
			},
		),
		