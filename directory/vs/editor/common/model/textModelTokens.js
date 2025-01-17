import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/errors.js';
import '../../../base/common/platform.js';
import '../../../base/common/stopwatch.js';
import '../core/eolCounter.js';
import '../core/lineRange.js';
import '../core/offsetRange.js';
import '../encodedTokenAttributes.js';
import '../languages/nullTokenize.js';
import './fixedArray.js';
import '../tokens/contiguousMultilineTokensBuilder.js';
import '../tokens/lineTokens.js';
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
		