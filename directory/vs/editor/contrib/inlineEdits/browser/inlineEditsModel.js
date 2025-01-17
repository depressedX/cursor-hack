import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/equals.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/derived.js';
import '../../../../base/common/uri.js';
import '../../../browser/widget/diffEditor/diffProviderFactoryService.js';
import '../../../common/core/lineRange.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/model.js';
import '../../inlineCompletions/browser/model/provideInlineCompletions.js';
import './inlineEditsWidget.js';
define(
			de[2931],
			he([
				1, 0, 15, 33, 433, 29, 3, 77, 319, 9, 953, 196, 74, 69, 67, 1594, 1693,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xjc = void 0);
				let f = class extends C.$1c {
					static {
						o = this;
					}
					static {
						this.a = 0;
					}
					static b() {
						return r.URI.from({
							scheme: "inline-edits",
							path: new Date().toString() + String(o.a++),
						});
					}
					constructor(y, $, v, S, I, T, P) {
						super(),
							(this.textModel = y),
							(this._textModelVersionId = $),
							(this.q = v),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.f = (0, d.observableSignal)(this)),
							(this.g = (0, d.observableValue)(this, void 0)),
							(this.h = (0, d.observableValue)(this, !1)),
							(this.j = (0, m.$Yd)(() =>
								this.w.createModel("", null, o.b()),
							).keepObserved(this.B)),
							(this.m = (0, m.$Yd)(() =>
								this.w.createModel("", null, o.b()),
							).keepObserved(this.B)),
							(this.n = new s(this.textModel, this._textModelVersionId)),
							(this.isPinned = this.n.range.map((k) => !!k)),
							(this.userPrompt = (0, d.observableValue)(this, void 0)),
							(this.inlineEdit = (0, d.derived)(
								this,
								(k) => this._inlineEdit.read(k)?.promiseResult.read(k)?.data,
							)),
							(this._inlineEdit = (0, d.derived)(this, (k) => {
								const L = this.selectedInlineEdit.read(k);
								if (!L) return;
								const D = L.inlineCompletion.range;
								if (L.inlineCompletion.insertText.trim() === "") return;
								let M = L.inlineCompletion.insertText.split(/\r\n|\r|\n/);
								function N(B) {
									const U = B[0].match(/^\s*/)?.[0] ?? "";
									return B.map((z) => z.replace(new RegExp("^" + U), ""));
								}
								M = N(M);
								let R = this.textModel.getValueInRange(D).split(/\r\n|\r|\n/);
								(R = N(R)),
									this.j.get().setValue(
										R.join(`
`),
									),
									this.m.get().setValue(
										M.join(`
`),
									);
								const O = this.u.createDiffProvider({
									diffAlgorithm: "advanced",
								});
								return d.ObservablePromise.fromFn(async () => {
									const B = await O.computeDiff(
										this.j.get(),
										this.m.get(),
										{
											computeMoves: !1,
											ignoreTrimWhitespace: !1,
											maxComputationTimeMs: 1e3,
										},
										i.CancellationToken.None,
									);
									if (!B.identical)
										return new p.$Vjc(
											a.$rL.fromRangeInclusive(D),
											N(M),
											B.changes,
										);
								});
							})),
							(this.y = this.D(new C.$Zc())),
							(this.z = (0, d.disposableObservableValue)(this, void 0)),
							(this.C = (0, d.derivedOpts)(
								{ owner: this, equalsFn: w.$ed },
								(k) => this.z.read(k)?.completions.map((L) => new b(L)) ?? [],
							)),
							(this.F = (0, d.derivedHandleChanges)(
								{
									owner: this,
									createEmptyChangeSummary: () => ({
										inlineCompletionTriggerKind:
											h.InlineCompletionTriggerKind.Automatic,
									}),
									handleChange: (k, L) => (
										k.didChange(this.f) &&
											(L.inlineCompletionTriggerKind =
												h.InlineCompletionTriggerKind.Explicit),
										!0
									),
								},
								async (k, L) => {
									this.y.clear(),
										this.f.read(k),
										this._textModelVersionId.read(k);
									function D(O, B) {
										return B(O);
									}
									const M =
										this.n.range.read(k) ??
										D(this.q.read(k), (O) => (O.isEmpty() ? void 0 : O));
									if (!M) {
										this.z.set(void 0, void 0),
											this.userPrompt.set(void 0, void 0);
										return;
									}
									const N = {
											triggerKind: L.inlineCompletionTriggerKind,
											selectedSuggestionInfo: void 0,
											userPrompt: this.userPrompt.read(k),
										},
										A = (0, i.$De)(this.y);
									await (0, t.$Nh)(200, A);
									const R = await (0, g.$HCb)(
										this.t.inlineCompletionsProvider,
										M,
										this.textModel,
										N,
										A,
									);
									A.isCancellationRequested || this.z.set(R, void 0);
								},
							)),
							(this.G = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(k) => this.C.read(k),
							)),
							(this.selectedInlineCompletionIndex = (0, d.derived)(
								this,
								(k) => {
									const L = this.g.read(k),
										D = this.G.read(k),
										M =
											this.g === void 0
												? -1
												: D.findIndex((N) => N.semanticId === L);
									return M === -1 ? (this.g.set(void 0, void 0), 0) : M;
								},
							)),
							(this.selectedInlineEdit = (0, d.derived)(this, (k) => {
								const L = this.G.read(k),
									D = this.selectedInlineCompletionIndex.read(k);
								return L[D];
							})),
							(this.activeCommands = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(k) =>
									this.selectedInlineEdit.read(k)?.inlineCompletion.source
										.inlineCompletions.commands ?? [],
							)),
							this.D((0, d.recomputeInitiallyAndOnChange)(this.F));
					}
					async trigger(y) {
						this.h.set(!0, y), await this.F.get();
					}
					async triggerExplicitly(y) {
						(0, d.subtransaction)(y, ($) => {
							this.h.set(!0, $), this.f.trigger($);
						}),
							await this.F.get();
					}
					stop(y) {
						(0, d.subtransaction)(y, ($) => {
							this.userPrompt.set(void 0, $),
								this.h.set(!1, $),
								this.z.set(void 0, $),
								this.n.setRange(void 0, $);
						});
					}
					async H(y) {
						await this.triggerExplicitly();
						const $ = this.G.get() || [];
						if ($.length > 0) {
							const v =
								(this.selectedInlineCompletionIndex.get() + y + $.length) %
								$.length;
							this.g.set($[v].semanticId, void 0);
						} else this.g.set(void 0, void 0);
					}
					async next() {
						await this.H(1);
					}
					async previous() {
						await this.H(-1);
					}
					togglePin() {
						this.isPinned.get()
							? this.n.setRange(void 0, void 0)
							: this.n.setRange(this.q.get(), void 0);
					}
					async accept(y) {
						if (y.getModel() !== this.textModel) throw new E.$gb();
						const $ = this.selectedInlineEdit.get();
						$ &&
							(y.pushUndoStop(),
							y.executeEdits("inlineSuggestion.accept", [
								$.inlineCompletion.toSingleTextEdit().toSingleEditOperation(),
							]),
							this.stop());
					}
				};
				(e.$Xjc = f),
					(e.$Xjc = f = o = Ne([j(4, c.$k3), j(5, u.$Dxb), j(6, n.$QO)], f));
				class b {
					constructor(y) {
						(this.inlineCompletion = y),
							(this.semanticId = this.inlineCompletion.hash());
					}
				}
				class s extends C.$1c {
					constructor(y, $) {
						super(),
							(this.b = y),
							(this.f = $),
							(this.a = (0, d.observableValue)(this, [])),
							(this.range = (0, d.derived)(this, (v) => {
								this.f.read(v);
								const S = this.a.read(v)[0];
								return S ? (this.b.getDecorationRange(S) ?? null) : null;
							})),
							this.D(
								(0, C.$Yc)(() => {
									this.b.deltaDecorations(this.a.get(), []);
								}),
							);
					}
					setRange(y, $) {
						this.a.set(
							this.b.deltaDecorations(
								this.a.get(),
								y
									? [{ range: y, options: { description: "trackedRange" } }]
									: [],
							),
							$,
						);
					}
				}
			},
		),
		