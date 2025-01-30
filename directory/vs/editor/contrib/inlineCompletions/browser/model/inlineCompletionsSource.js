import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/equals.js';
import '../../../../../base/common/filters.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../common/core/range.js';
import '../../../../common/core/textEdit.js';
import '../../../../common/core/textLength.js';
import '../../../../common/languages.js';
import '../../../../common/languages/languageConfigurationRegistry.js';
import '../../../../common/model.js';
import '../../../../common/services/languageFeatures.js';
import './provideInlineCompletions.js';
import './singleTextEdit.js';
define(
			de[2777],
			he([
				1, 0, 33, 433, 132, 3, 77, 17, 490, 458, 74, 152, 64, 69, 1594, 1196,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*equals*/,
 w /*filters*/,
 E /*lifecycle*/,
 C /*observable*/,
 d /*range*/,
 m /*textEdit*/,
 r /*textLength*/,
 u /*languages*/,
 a /*languageConfigurationRegistry*/,
 h /*model*/,
 c /*languageFeatures*/,
 n /*provideInlineCompletions*/,
 g /*singleTextEdit*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QCb = e.$PCb = e.$OCb = void 0);
				let p = class extends E.$1c {
					constructor(v, S, I, T, P) {
						super(),
							(this.b = v),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.a = this.D(new E.$2c())),
							(this.inlineCompletions = (0, C.disposableObservableValue)(
								"inlineCompletions",
								void 0,
							)),
							(this.suggestWidgetInlineCompletions = (0,
							C.disposableObservableValue)(
								"suggestWidgetInlineCompletions",
								void 0,
							)),
							this.D(
								this.b.onDidChangeContent(() => {
									this.a.clear();
								}),
							);
					}
					fetch(v, S, I) {
						const T = new f(v, S, this.b.getVersionId()),
							P = S.selectedSuggestionInfo
								? this.suggestWidgetInlineCompletions
								: this.inlineCompletions;
						if (this.a.value?.request.satisfies(T)) return this.a.value.promise;
						if (P.get()?.request.satisfies(T)) return Promise.resolve(!0);
						const k = !!this.a.value;
						this.a.clear();
						const L = new t.$Ce(),
							D = (async () => {
								if (
									((k ||
										S.triggerKind ===
											u.InlineCompletionTriggerKind.Automatic) &&
										(await o(this.f.get(this.b), L.token)),
									L.token.isCancellationRequested ||
										this.B.isDisposed ||
										this.b.getVersionId() !== T.versionId)
								)
									return !1;
								const A = new Date(),
									R = await (0, n.$HCb)(
										this.g.inlineCompletionsProvider,
										v,
										this.b,
										S,
										L.token,
										this.h,
									);
								if (
									L.token.isCancellationRequested ||
									this.B.isDisposed ||
									this.b.getVersionId() !== T.versionId
								)
									return !1;
								const O = new Date();
								this.f.update(this.b, O.getTime() - A.getTime());
								const B = new s(R, T, this.b, this.c);
								if (I) {
									const U = I.toInlineCompletion(void 0);
									I.canBeReused(this.b, v) &&
										!R.has(U) &&
										B.prepend(I.inlineCompletion, U.range, !0);
								}
								return (
									this.a.clear(),
									(0, C.transaction)((U) => {
										P.set(B, U);
									}),
									!0
								);
							})(),
							M = new b(T, L, D);
						return (this.a.value = M), D;
					}
					clear(v) {
						this.a.clear(),
							this.inlineCompletions.set(void 0, v),
							this.suggestWidgetInlineCompletions.set(void 0, v);
					}
					clearSuggestWidgetInlineCompletions(v) {
						this.a.value?.request.context.selectedSuggestionInfo &&
							this.a.clear(),
							this.suggestWidgetInlineCompletions.set(void 0, v);
					}
					cancelUpdate() {
						this.a.clear();
					}
				};
				(e.$OCb = p), (e.$OCb = p = Ne([j(3, c.$k3), j(4, a.$aN)], p));
				function o($, v) {
					return new Promise((S) => {
						let I;
						const T = setTimeout(() => {
							I && I.dispose(), S();
						}, $);
						v &&
							(I = v.onCancellationRequested(() => {
								clearTimeout(T), I && I.dispose(), S();
							}));
					});
				}
				class f {
					constructor(v, S, I) {
						(this.position = v), (this.context = S), (this.versionId = I);
					}
					satisfies(v) {
						return (
							this.position.equals(v.position) &&
							(0, i.$dd)(
								this.context.selectedSuggestionInfo,
								v.context.selectedSuggestionInfo,
								(0, i.$cd)(),
							) &&
							(v.context.triggerKind ===
								u.InlineCompletionTriggerKind.Automatic ||
								this.context.triggerKind ===
									u.InlineCompletionTriggerKind.Explicit) &&
							this.versionId === v.versionId
						);
					}
				}
				class b {
					constructor(v, S, I) {
						(this.request = v),
							(this.cancellationTokenSource = S),
							(this.promise = I);
					}
					dispose() {
						this.cancellationTokenSource.cancel();
					}
				}
				class s {
					get inlineCompletions() {
						return this.a;
					}
					constructor(v, S, I, T) {
						(this.e = v),
							(this.request = S),
							(this.f = I),
							(this.g = T),
							(this.b = 1),
							(this.c = []);
						const P = I.deltaDecorations(
							[],
							v.completions.map((k) => ({
								range: k.range,
								options: { description: "inline-completion-tracking-range" },
							})),
						);
						this.a = v.completions.map(
							(k, L) => new l(k, P[L], this.f, this.g),
						);
					}
					clone() {
						return this.b++, this;
					}
					dispose() {
						if ((this.b--, this.b === 0)) {
							setTimeout(() => {
								this.f.isDisposed() ||
									this.f.deltaDecorations(
										this.a.map((v) => v.decorationId),
										[],
									);
							}, 0),
								this.e.dispose();
							for (const v of this.c) v.source.removeRef();
						}
					}
					prepend(v, S, I) {
						I && v.source.addRef();
						const T = this.f.deltaDecorations(
							[],
							[
								{
									range: S,
									options: { description: "inline-completion-tracking-range" },
								},
							],
						)[0];
						this.a.unshift(new l(v, T, this.f, this.g)), this.c.push(v);
					}
				}
				e.$PCb = s;
				class l {
					get forwardStable() {
						return (
							this.inlineCompletion.source.inlineCompletions
								.enableForwardStability ?? !1
						);
					}
					constructor(v, S, I, T) {
						(this.inlineCompletion = v),
							(this.decorationId = S),
							(this.b = I),
							(this.c = T),
							(this.semanticId = JSON.stringify([
								this.inlineCompletion.filterText,
								this.inlineCompletion.insertText,
								this.inlineCompletion.range.getStartPosition().toString(),
							])),
							(this.a = (0, C.derivedOpts)(
								{ owner: this, equalsFn: d.$iL.equalsRange },
								(P) => (
									this.c.read(P), this.b.getDecorationRange(this.decorationId)
								),
							));
					}
					toInlineCompletion(v) {
						return this.inlineCompletion.withRange(this.a.read(v) ?? y);
					}
					toSingleTextEdit(v) {
						return new m.$wL(
							this.a.read(v) ?? y,
							this.inlineCompletion.insertText,
						);
					}
					isVisible(v, S, I) {
						const T = (0, g.$LCb)(this.e(I), v),
							P = this.a.read(I);
						if (
							!P ||
							!this.inlineCompletion.range
								.getStartPosition()
								.equals(P.getStartPosition()) ||
							S.lineNumber !== T.range.startLineNumber
						)
							return !1;
						const k = v.getValueInRange(T.range, h.EndOfLinePreference.LF),
							L = T.text,
							D = Math.max(0, S.column - T.range.startColumn);
						let M = L.substring(0, D),
							N = L.substring(D),
							A = k.substring(0, D),
							R = k.substring(D);
						const O = v.getLineIndentColumn(T.range.startLineNumber);
						return (
							T.range.startColumn <= O &&
								((A = A.trimStart()),
								A.length === 0 && (R = R.trimStart()),
								(M = M.trimStart()),
								M.length === 0 && (N = N.trimStart())),
							M.startsWith(A) && !!(0, w.$Vk)(R, N)
						);
					}
					canBeReused(v, S) {
						const I = this.a.read(void 0);
						return (
							!!I &&
							I.containsPosition(S) &&
							this.isVisible(v, S, void 0) &&
							r.$tL
								.ofRange(I)
								.isGreaterThanOrEqualTo(
									r.$tL.ofRange(this.inlineCompletion.range),
								)
						);
					}
					e(v) {
						return new m.$wL(
							this.a.read(v) ?? y,
							this.inlineCompletion.filterText,
						);
					}
				}
				e.$QCb = l;
				const y = new d.$iL(1, 1, 1, 1);
			},
		),
		