import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../core/eolCounter.js';
import '../core/lineRange.js';
import '../core/position.js';
import '../core/wordHelper.js';
import '../encodedTokenAttributes.js';
import '../languages.js';
import '../languages/language.js';
import '../languages/languageConfigurationRegistry.js';
import './textModelPart.js';
import './textModelTokens.js';
import './tokens.js';
import './treeSitterTokens.js';
import '../services/treeSitterParserService.js';
import '../tokenizationTextModelPart.js';
import '../tokens/contiguousMultilineTokensBuilder.js';
import '../tokens/contiguousTokensStore.js';
import '../tokens/sparseTokensStore.js';
define(
			de[2772],
			he([
				1, 0, 120, 29, 6, 3, 531, 196, 48, 409, 171, 74, 61, 152, 1539, 1590,
				1176, 2694, 763, 916, 1152, 2574, 2576,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*charCode*/,
				i /*errors*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*eolCounter*/,
				d /*lineRange*/,
				m /*position*/,
				r /*wordHelper*/,
				u /*encodedTokenAttributes*/,
				a /*languages*/,
				h /*language*/,
				c /*languageConfigurationRegistry*/,
				n /*textModelPart*/,
				g /*textModelTokens*/,
				p /*tokens*/,
				o /*treeSitterTokens*/,
				f /*treeSitterParserService*/,
				b /*tokenizationTextModelPart*/,
				s /*contiguousMultilineTokensBuilder*/,
				l /*contiguousTokensStore*/,
				y /*sparseTokensStore*/,
) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rV = void 0);
				let v = ($ = class extends n.$AU {
					constructor(T, P, k, L, D, M, N) {
						super(),
							(this.r = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.z = M),
							(this.C = N),
							(this.a = new y.$qV(this.y.languageIdCodec)),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeLanguage = this.h.event),
							(this.j = this.D(new w.$re())),
							(this.onDidChangeLanguageConfiguration = this.j.event),
							(this.m = this.D(new w.$re())),
							(this.onDidChangeTokens = this.m.event),
							(this.q = this.D(new E.$Zc())),
							this.D(
								this.z.onDidChange((A) => {
									A.affects(this.u) && this.j.fire({});
								}),
							),
							this.D(
								w.Event.filter(a.$mM.onDidChange, (A) =>
									A.changedLanguages.includes(this.u),
								)(() => {
									this.I();
								}),
							),
							this.I();
					}
					F() {
						return this.D(
							new S(this.y.languageIdCodec, this.r, () => this.u, this.w),
						);
					}
					G() {
						return this.D(
							new o.$oV(this.C, this.y.languageIdCodec, this.r, () => this.u),
						);
					}
					H(T) {
						const P = this.n !== void 0;
						this.n?.dispose(),
							(this.n = T ? this.G() : this.F()),
							this.q.clear(),
							this.q.add(
								this.n.onDidChangeTokens((k) => {
									this.J(k);
								}),
							),
							this.q.add(
								this.n.onDidChangeBackgroundTokenizationState((k) => {
									this.t.handleDidChangeBackgroundTokenizationState();
								}),
							),
							P && this.n.resetTokenization();
					}
					I() {
						a.$mM.get(this.u)
							? this.n instanceof o.$oV || this.H(!0)
							: this.n instanceof S || this.H(!1);
					}
					_hasListeners() {
						return (
							this.h.hasListeners() ||
							this.j.hasListeners() ||
							this.m.hasListeners()
						);
					}
					handleLanguageConfigurationServiceChange(T) {
						T.affects(this.u) && this.j.fire({});
					}
					handleDidChangeContent(T) {
						if (T.isFlush) this.a.flush();
						else if (!T.isEolChange)
							for (const P of T.changes) {
								const [k, L, D] = (0, C.$6L)(P.text);
								this.a.acceptEdit(
									P.range,
									k,
									L,
									D,
									P.text.length > 0 ? P.text.charCodeAt(0) : t.CharCode.Null,
								);
							}
						this.n.handleDidChangeContent(T);
					}
					handleDidChangeAttached() {
						this.n.handleDidChangeAttached();
					}
					getLineTokens(T) {
						this.L(T);
						const P = this.n.getLineTokens(T);
						return this.a.addSparseTokens(T, P);
					}
					J(T) {
						this.r._isDisposing() ||
							(this.t.handleDidChangeTokens(T), this.m.fire(T));
					}
					L(T) {
						if (T < 1 || T > this.r.getLineCount())
							throw new i.$gb("Illegal value for lineNumber");
					}
					get hasTokens() {
						return this.n.hasTokens;
					}
					resetTokenization() {
						this.n.resetTokenization();
					}
					get backgroundTokenizationState() {
						return this.n.backgroundTokenizationState;
					}
					forceTokenization(T) {
						this.L(T), this.n.forceTokenization(T);
					}
					hasAccurateTokensForLine(T) {
						return this.L(T), this.n.hasAccurateTokensForLine(T);
					}
					isCheapToTokenize(T) {
						return this.L(T), this.n.isCheapToTokenize(T);
					}
					tokenizeIfCheap(T) {
						this.L(T), this.n.tokenizeIfCheap(T);
					}
					getTokenTypeIfInsertingCharacter(T, P, k) {
						return this.n.getTokenTypeIfInsertingCharacter(T, P, k);
					}
					tokenizeLineWithEdit(T, P, k) {
						return this.n.tokenizeLineWithEdit(T, P, k);
					}
					setSemanticTokens(T, P) {
						this.a.set(T, P),
							this.J({
								semanticTokensApplied: T !== null,
								ranges: [
									{ fromLineNumber: 1, toLineNumber: this.r.getLineCount() },
								],
							});
					}
					hasCompleteSemanticTokens() {
						return this.a.isComplete();
					}
					hasSomeSemanticTokens() {
						return !this.a.isEmpty();
					}
					setPartialSemanticTokens(T, P) {
						if (this.hasCompleteSemanticTokens()) return;
						const k = this.r.validateRange(this.a.setPartial(T, P));
						this.J({
							semanticTokensApplied: !0,
							ranges: [
								{
									fromLineNumber: k.startLineNumber,
									toLineNumber: k.endLineNumber,
								},
							],
						});
					}
					getWordAtPosition(T) {
						this.g();
						const P = this.r.validatePosition(T),
							k = this.r.getLineContent(P.lineNumber),
							L = this.getLineTokens(P.lineNumber),
							D = L.findTokenIndexAtOffset(P.column - 1),
							[M, N] = $.N(L, D),
							A = (0, r.$WK)(
								P.column,
								this.M(L.getLanguageId(D)).getWordDefinition(),
								k.substring(M, N),
								M,
							);
						if (A && A.startColumn <= T.column && T.column <= A.endColumn)
							return A;
						if (D > 0 && M === P.column - 1) {
							const [R, O] = $.N(L, D - 1),
								B = (0, r.$WK)(
									P.column,
									this.M(L.getLanguageId(D - 1)).getWordDefinition(),
									k.substring(R, O),
									R,
								);
							if (B && B.startColumn <= T.column && T.column <= B.endColumn)
								return B;
						}
						return null;
					}
					M(T) {
						return this.z.getLanguageConfiguration(T);
					}
					static N(T, P) {
						const k = T.getLanguageId(P);
						let L = 0;
						for (let M = P; M >= 0 && T.getLanguageId(M) === k; M--)
							L = T.getStartOffset(M);
						let D = T.getLineContent().length;
						for (
							let M = P, N = T.getCount();
							M < N && T.getLanguageId(M) === k;
							M++
						)
							D = T.getEndOffset(M);
						return [L, D];
					}
					getWordUntilPosition(T) {
						const P = this.getWordAtPosition(T);
						return P
							? {
									word: P.word.substr(0, T.column - P.startColumn),
									startColumn: P.startColumn,
									endColumn: T.column,
								}
							: { word: "", startColumn: T.column, endColumn: T.column };
					}
					getWordsUntilPosition(T) {
						this.g();
						const P = [],
							k = this.r.validatePosition(T),
							L = this.getLineTokens(k.lineNumber),
							D = L.findTokenIndexAtOffset(k.column - 1);
						for (let M = 0; M < D; M++)
							P.push({
								startLineNumber: k.lineNumber,
								endLineNumber: k.lineNumber,
								startColumn: L.getStartOffset(M),
								endColumn: L.getEndOffset(M),
							});
						return P;
					}
					getLanguageId() {
						return this.u;
					}
					getLanguageIdAtPosition(T, P) {
						const k = this.r.validatePosition(new m.$hL(T, P)),
							L = this.getLineTokens(k.lineNumber);
						return L.getLanguageId(L.findTokenIndexAtOffset(k.column - 1));
					}
					setLanguageId(T, P = "api") {
						if (this.u === T) return;
						const k = { oldLanguage: this.u, newLanguage: T, source: P };
						(this.u = T),
							this.t.handleDidChangeLanguage(k),
							this.n.resetTokenization(),
							this.I(),
							this.h.fire(k),
							this.j.fire({});
					}
				});
				(e.$rV = v),
					(e.$rV = v = $ = Ne([j(4, h.$nM), j(5, c.$aN), j(6, f.$nV)], v));
				class S extends p.$lV {
					constructor(T, P, k, L) {
						super(T, P, k),
							(this.q = null),
							(this.r = null),
							(this.t = this.D(new E.$2c())),
							(this.u = new l.$pV(this.j)),
							(this.z = this.D(new E.$2c())),
							(this.C = this.D(new E.$0c())),
							this.D(
								a.$lM.onDidChange((D) => {
									const M = this.n();
									D.changedLanguages.indexOf(M) !== -1 &&
										this.resetTokenization();
								}),
							),
							this.resetTokenization(),
							this.D(
								L.onDidChangeVisibleRanges(({ view: D, state: M }) => {
									if (M) {
										let N = this.C.get(D);
										N ||
											((N = new p.$kV(() => this.H(N.lineRanges))),
											this.C.set(D, N)),
											N.handleStateChange(M);
									} else this.C.deleteAndDispose(D);
								}),
							);
					}
					resetTokenization(T = !0) {
						this.u.flush(),
							this.w?.flush(),
							this.y && (this.y = new g.$fV(this.m.getLineCount())),
							T &&
								this.h.fire({
									semanticTokensApplied: !1,
									ranges: [
										{ fromLineNumber: 1, toLineNumber: this.m.getLineCount() },
									],
								});
						const P = () => {
								if (this.m.isTooLargeForTokenization()) return [null, null];
								const D = a.$lM.get(this.n());
								if (!D) return [null, null];
								let M;
								try {
									M = D.getInitialState();
								} catch (N) {
									return (0, i.$4)(N), [null, null];
								}
								return [D, M];
							},
							[k, L] = P();
						if (
							(k && L
								? (this.q = new g.$eV(this.m.getLineCount(), k, this.m, this.j))
								: (this.q = null),
							this.t.clear(),
							(this.r = null),
							this.q)
						) {
							const D = {
								setTokens: (M) => {
									this.F(M);
								},
								backgroundTokenizationFinished: () => {
									if (this.f === b.BackgroundTokenizationState.Completed)
										return;
									const M = b.BackgroundTokenizationState.Completed;
									(this.f = M), this.g.fire();
								},
								setEndState: (M, N) => {
									if (!this.q) return;
									const A = this.q.store.getFirstInvalidEndStateLineNumber();
									A !== null && M >= A && this.q?.store.setEndState(M, N);
								},
							};
							k &&
								k.createBackgroundTokenizer &&
								!k.backgroundTokenizerShouldOnlyVerifyTokens &&
								(this.t.value = k.createBackgroundTokenizer(this.m, D)),
								!this.t.value &&
									!this.m.isTooLargeForTokenization() &&
									((this.t.value = this.r = new g.$iV(this.q, D)),
									this.r.handleChanges()),
								k?.backgroundTokenizerShouldOnlyVerifyTokens &&
								k.createBackgroundTokenizer
									? ((this.w = new l.$pV(this.j)),
										(this.y = new g.$fV(this.m.getLineCount())),
										this.z.clear(),
										(this.z.value = k.createBackgroundTokenizer(this.m, {
											setTokens: (M) => {
												this.w?.setMultilineTokens(M, this.m);
											},
											backgroundTokenizationFinished() {},
											setEndState: (M, N) => {
												this.y?.setEndState(M, N);
											},
										})))
									: ((this.w = void 0),
										(this.y = void 0),
										(this.z.value = void 0));
						}
						this.G();
					}
					handleDidChangeAttached() {
						this.r?.handleChanges();
					}
					handleDidChangeContent(T) {
						if (T.isFlush) this.resetTokenization(!1);
						else if (!T.isEolChange) {
							for (const P of T.changes) {
								const [k, L] = (0, C.$6L)(P.text);
								this.u.acceptEdit(P.range, k, L),
									this.w?.acceptEdit(P.range, k, L);
							}
							this.y?.acceptChanges(T.changes),
								this.q && this.q.store.acceptChanges(T.changes),
								this.r?.handleChanges();
						}
					}
					F(T) {
						const { changes: P } = this.u.setMultilineTokens(T, this.m);
						return (
							P.length > 0 &&
								this.h.fire({ semanticTokensApplied: !1, ranges: P }),
							{ changes: P }
						);
					}
					G() {
						const T = d.$rL.joinMany([...this.C].map(([P, k]) => k.lineRanges));
						this.H(T);
					}
					H(T) {
						for (const P of T)
							this.I(P.startLineNumber, P.endLineNumberExclusive - 1);
					}
					I(T, P) {
						if (!this.q) return;
						(T = Math.max(1, Math.min(this.m.getLineCount(), T))),
							(P = Math.min(this.m.getLineCount(), P));
						const k = new s.$cV(),
							{ heuristicTokens: L } = this.q.tokenizeHeuristically(k, T, P),
							D = this.F(k.finalize());
						if (L)
							for (const M of D.changes)
								this.t.value?.requestTokens(
									M.fromLineNumber,
									M.toLineNumber + 1,
								);
						this.r?.checkFinished();
					}
					forceTokenization(T) {
						const P = new s.$cV();
						this.q?.updateTokensUntilLine(P, T),
							this.F(P.finalize()),
							this.r?.checkFinished();
					}
					hasAccurateTokensForLine(T) {
						return this.q ? this.q.hasAccurateTokensForLine(T) : !0;
					}
					isCheapToTokenize(T) {
						return this.q ? this.q.isCheapToTokenize(T) : !0;
					}
					getLineTokens(T) {
						const P = this.m.getLineContent(T),
							k = this.u.getTokens(this.m.getLanguageId(), T - 1, P);
						if (
							this.w &&
							this.y &&
							this.q &&
							this.y.getFirstInvalidEndStateLineNumberOrMax() > T &&
							this.q.store.getFirstInvalidEndStateLineNumberOrMax() > T
						) {
							const L = this.w.getTokens(this.m.getLanguageId(), T - 1, P);
							!k.equals(L) &&
								this.z.value?.reportMismatchingTokens &&
								this.z.value.reportMismatchingTokens(T);
						}
						return k;
					}
					getTokenTypeIfInsertingCharacter(T, P, k) {
						if (!this.q) return u.StandardTokenType.Other;
						const L = this.m.validatePosition(new m.$hL(T, P));
						return (
							this.forceTokenization(L.lineNumber),
							this.q.getTokenTypeIfInsertingCharacter(L, k)
						);
					}
					tokenizeLineWithEdit(T, P, k) {
						if (!this.q) return null;
						const L = this.m.validatePosition(T);
						return (
							this.forceTokenization(L.lineNumber),
							this.q.tokenizeLineWithEdit(L, P, k)
						);
					}
					get hasTokens() {
						return this.u.hasTokens;
					}
				}
			},
		),
		