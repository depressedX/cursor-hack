import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/arraysFind.js';
import '../../../../../base/common/equals.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/strings.js';
import '../../../../../base/common/types.js';
import '../../../../common/core/editOperation.js';
import '../../../../common/core/position.js';
import '../../../../common/core/range.js';
import '../../../../common/core/selection.js';
import '../../../../common/core/textEdit.js';
import '../../../../common/core/textLength.js';
import '../../../../common/editorCommon.js';
import '../../../../common/languages.js';
import '../../../../common/languages/languageConfigurationRegistry.js';
import '../../../../common/model.js';
import './ghostText.js';
import './inlineCompletionsSource.js';
import './singleTextEdit.js';
import '../utils.js';
import '../../../snippet/browser/snippetController2.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/instantiation/common/instantiation.js';
define(
			de[2922],
			he([
				1, 0, 24, 214, 433, 29, 3, 77, 37, 28, 188, 48, 17, 104, 490, 458, 98,
				74, 152, 64, 917, 2777, 1196, 753, 254, 31, 5,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*arraysFind*/,
				w /*equals*/,
				E /*errors*/,
				C /*lifecycle*/,
				d /*observable*/,
				m /*strings*/,
				r /*types*/,
				u /*editOperation*/,
				a /*position*/,
				h /*range*/,
				c /*selection*/,
				n /*textEdit*/,
				g /*textLength*/,
				p /*editorCommon*/,
				o /*languages*/,
				f /*languageConfigurationRegistry*/,
				b /*model*/,
				s /*ghostText*/,
				l /*inlineCompletionsSource*/,
				y /*singleTextEdit*/,
				$ /*utils*/,
				v /*snippetController2*/,
				S /*commands*/,
				I /*instantiation*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.VersionIdChangeReason = e.$ODb = void 0),
					(e.$PDb = k);
				let T = class extends C.$1c {
					get isAcceptingPartially() {
						return this.q;
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this.textModel = N),
							(this.selectedSuggestItem = A),
							(this._textModelVersionId = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.y = F),
							(this.z = x),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.f = this.D(
								this.C.createInstance(
									l.$OCb,
									this.textModel,
									this._textModelVersionId,
									this.t,
								),
							)),
							(this.g = (0, d.observableValue)(this, !1)),
							(this.h = (0, d.observableSignal)(this)),
							(this.isHidden = (0, d.observableValue)(this, !1)),
							(this.j = (0, d.observableValue)(this, void 0)),
							(this.n = (0, d.derived)(
								this,
								(K) => this.s.read(K)[0] ?? new a.$hL(1, 1),
							)),
							(this.q = !1),
							(this.H = new Set([P.Redo, P.Undo, P.AcceptWord])),
							(this.J = (0, d.derivedHandleChanges)(
								{
									owner: this,
									createEmptyChangeSummary: () => ({
										preserveCurrentCompletion: !1,
										inlineCompletionTriggerKind:
											o.InlineCompletionTriggerKind.Automatic,
									}),
									handleChange: (K, J) => (
										K.didChange(this._textModelVersionId) &&
										this.H.has(this.I(K.change))
											? (J.preserveCurrentCompletion = !0)
											: K.didChange(this.h) &&
												(J.inlineCompletionTriggerKind =
													o.InlineCompletionTriggerKind.Explicit),
										!0
									),
								},
								(K, J) => {
									if (
										(this.h.read(K),
										!(
											(this.z.read(K) && this.selectedSuggestItem.read(K)) ||
											this.g.read(K)
										))
									) {
										this.f.cancelUpdate();
										return;
									}
									this._textModelVersionId.read(K);
									const X = this.f.suggestWidgetInlineCompletions.get(),
										Y = this.selectedSuggestItem.read(K);
									if (X && !Y) {
										const te = this.f.inlineCompletions.get();
										(0, d.transaction)((Q) => {
											(!te || X.request.versionId > te.request.versionId) &&
												this.f.inlineCompletions.set(X.clone(), Q),
												this.f.clearSuggestWidgetInlineCompletions(Q);
										});
									}
									const ie = this.n.read(K),
										ne = {
											triggerKind: J.inlineCompletionTriggerKind,
											selectedSuggestionInfo: Y?.toSelectedSuggestionInfo(),
										},
										ee = this.selectedInlineCompletion.get(),
										_ =
											J.preserveCurrentCompletion || ee?.forwardStable
												? ee
												: void 0;
									return this.f.fetch(ie, ne, _);
								},
							)),
							(this.L = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(K) => {
									if (this.isHidden.get()) return [];
									const J = this.f.inlineCompletions.read(K);
									if (!J) return [];
									const W = this.n.read(K);
									return J.inlineCompletions.filter((Y) =>
										Y.isVisible(this.textModel, W, K),
									);
								},
							)),
							(this.selectedInlineCompletionIndex = (0, d.derived)(
								this,
								(K) => {
									const J = this.j.read(K),
										W = this.L.read(K),
										X =
											this.j === void 0
												? -1
												: W.findIndex((Y) => Y.semanticId === J);
									return X === -1 ? (this.j.set(void 0, void 0), 0) : X;
								},
							)),
							(this.selectedInlineCompletion = (0, d.derived)(this, (K) => {
								const J = this.L.read(K),
									W = this.selectedInlineCompletionIndex.read(K);
								return J[W];
							})),
							(this.activeCommands = (0, d.derivedOpts)(
								{ owner: this, equalsFn: (0, w.$ad)() },
								(K) =>
									this.selectedInlineCompletion.read(K)?.inlineCompletion.source
										.inlineCompletions.commands ?? [],
							)),
							(this.lastTriggerKind = this.f.inlineCompletions.map(
								this,
								(K) => K?.request.context.triggerKind,
							)),
							(this.inlineCompletionsCount = (0, d.derived)(this, (K) => {
								if (
									this.lastTriggerKind.read(K) ===
									o.InlineCompletionTriggerKind.Explicit
								)
									return this.L.read(K).length;
							})),
							(this.state = (0, d.derivedOpts)(
								{
									owner: this,
									equalsFn: (K, J) =>
										!K || !J
											? K === J
											: (0, s.$ECb)(K.ghostTexts, J.ghostTexts) &&
												K.inlineCompletion === J.inlineCompletion &&
												K.suggestItem === J.suggestItem,
								},
								(K) => {
									const J = this.textModel,
										W = this.selectedSuggestItem.read(K);
									if (W) {
										const X = (0, y.$LCb)(W.toSingleTextEdit(), J),
											Y = this.M(X, K);
										if (!this.u.read(K) && !Y) return;
										const ne = Y?.edit ?? X,
											ee = Y ? Y.edit.text.length - X.text.length : 0,
											_ = this.w.read(K),
											te = this.s.read(K),
											Q = [ne, ...k(this.textModel, te, ne)],
											Z = Q.map((re, le) =>
												(0, y.$NCb)(re, J, _, te[le], ee),
											).filter(r.$tg),
											se = Z[0] ?? new s.$BCb(ne.range.endLineNumber, []);
										return {
											edits: Q,
											primaryGhostText: se,
											ghostTexts: Z,
											inlineCompletion: Y?.completion,
											suggestItem: W,
										};
									} else {
										if (!this.g.read(K)) return;
										const X = this.selectedInlineCompletion.read(K);
										if (!X) return;
										const Y = X.toSingleTextEdit(K),
											ie = this.y.read(K),
											ne = this.s.read(K),
											ee = [Y, ...k(this.textModel, ne, Y)],
											_ = ee
												.map((te, Q) => (0, y.$NCb)(te, J, ie, ne[Q], 0))
												.filter(r.$tg);
										return _[0]
											? {
													edits: ee,
													primaryGhostText: _[0],
													ghostTexts: _,
													inlineCompletion: X,
													suggestItem: void 0,
												}
											: void 0;
									}
								},
							)),
							(this.ghostTexts = (0, d.derivedOpts)(
								{ owner: this, equalsFn: s.$ECb },
								(K) => {
									const J = this.state.read(K);
									if (J) return J.ghostTexts;
								},
							)),
							(this.primaryGhostText = (0, d.derivedOpts)(
								{ owner: this, equalsFn: s.$FCb },
								(K) => {
									const J = this.state.read(K);
									if (J) return J?.primaryGhostText;
								},
							)),
							this.D((0, d.recomputeInitiallyAndOnChange)(this.J));
						let G;
						this.D(
							(0, d.autorun)((K) => {
								const W = this.state.read(K)?.inlineCompletion;
								if (W?.semanticId !== G?.semanticId && ((G = W), W)) {
									const X = W.inlineCompletion,
										Y = X.source;
									Y.provider.handleItemDidShow?.(
										Y.inlineCompletions,
										X.sourceInlineCompletion,
										X.insertText,
									);
								}
							}),
						);
					}
					I(N) {
						return N?.isUndoing
							? P.Undo
							: N?.isRedoing
								? P.Redo
								: this.isAcceptingPartially
									? P.AcceptWord
									: P.Other;
					}
					async trigger(N) {
						this.g.set(!0, N), await this.J.get();
					}
					async triggerExplicitly(N) {
						(0, d.subtransaction)(N, (A) => {
							this.g.set(!0, A), this.h.trigger(A);
						}),
							await this.J.get();
					}
					stop(N) {
						(0, d.subtransaction)(N, (A) => {
							this.g.set(!1, A), this.f.clear(A);
						});
					}
					M(N, A) {
						const R = this.textModel,
							O = this.f.suggestWidgetInlineCompletions.read(A),
							B = O
								? O.inlineCompletions
								: [this.selectedInlineCompletion.read(A)].filter(r.$tg);
						return (0, i.$vb)(B, (z) => {
							let F = z.toSingleTextEdit(A);
							return (
								(F = (0, y.$LCb)(
									F,
									R,
									h.$iL.fromPositions(
										F.range.getStartPosition(),
										N.range.getEndPosition(),
									),
								)),
								(0, y.$MCb)(F, N) ? { completion: z, edit: F } : void 0
							);
						});
					}
					async N(N) {
						await this.triggerExplicitly();
						const A = this.L.get() || [];
						if (A.length > 0) {
							const R =
								(this.selectedInlineCompletionIndex.get() + N + A.length) %
								A.length;
							this.j.set(A[R].semanticId, void 0);
						} else this.j.set(void 0, void 0);
					}
					async next() {
						await this.N(1);
					}
					async previous() {
						await this.N(-1);
					}
					async accept(N) {
						if (N.getModel() !== this.textModel) throw new E.$gb();
						const A = this.state.get();
						if (!A || A.primaryGhostText.isEmpty() || !A.inlineCompletion)
							return;
						const R = A.inlineCompletion.toInlineCompletion(void 0);
						if (
							(R.command && R.source.addRef(), N.pushUndoStop(), R.snippetInfo)
						)
							N.executeEdits("inlineSuggestion.accept", [
								u.$jL.replace(R.range, ""),
								...R.additionalTextEdits,
							]),
								N.setPosition(
									R.snippetInfo.range.getStartPosition(),
									"inlineCompletionAccept",
								),
								v.$aDb
									.get(N)
									?.insert(R.snippetInfo.snippet, { undoStopBefore: !1 });
						else {
							const O = A.edits,
								B = D(O).map((U) => c.$kL.fromPositions(U));
							N.executeEdits("inlineSuggestion.accept", [
								...O.map((U) => u.$jL.replace(U.range, U.text)),
								...R.additionalTextEdits,
							]),
								N.setSelections(B, "inlineCompletionAccept");
						}
						this.stop(),
							R.command &&
								(await this.F.executeCommand(
									R.command.id,
									...(R.command.arguments || []),
								).then(void 0, E.$5),
								R.source.removeRef());
					}
					async acceptNextWord(N) {
						await this.O(
							N,
							(A, R) => {
								const O = this.textModel.getLanguageIdAtPosition(
										A.lineNumber,
										A.column,
									),
									B = this.G.getLanguageConfiguration(O),
									U = new RegExp(
										B.wordDefinition.source,
										B.wordDefinition.flags.replace("g", ""),
									),
									z = R.match(U);
								let F = 0;
								z && z.index !== void 0
									? z.index === 0
										? (F = z[0].length)
										: (F = z.index)
									: (F = R.length);
								const H = /\s+/g.exec(R);
								return (
									H &&
										H.index !== void 0 &&
										H.index + H[0].length < F &&
										(F = H.index + H[0].length),
									F
								);
							},
							o.PartialAcceptTriggerKind.Word,
						);
					}
					async acceptNextLine(N) {
						await this.O(
							N,
							(A, R) => {
								const O = R.match(/\n/);
								return O && O.index !== void 0 ? O.index + 1 : R.length;
							},
							o.PartialAcceptTriggerKind.Line,
						);
					}
					async clearCopilotSuggestions() {
						(0, d.transaction)((N) => {
							this.f.clear(N);
						});
					}
					async O(N, A, R) {
						if (N.getModel() !== this.textModel) throw new E.$gb();
						const O = this.state.get();
						if (!O || O.primaryGhostText.isEmpty() || !O.inlineCompletion)
							return;
						const B = O.primaryGhostText,
							U = O.inlineCompletion.toInlineCompletion(void 0);
						if (U.snippetInfo || U.filterText !== U.insertText) {
							await this.accept(N);
							return;
						}
						const z = B.parts[0],
							F = new a.$hL(B.lineNumber, z.column),
							x = z.text,
							H = A(F, x);
						if (H === x.length && B.parts.length === 1) {
							this.accept(N);
							return;
						}
						const q = x.substring(0, H),
							V = this.s.get(),
							G = V[0];
						U.source.addRef();
						try {
							this.q = !0;
							try {
								N.pushUndoStop();
								const K = h.$iL.fromPositions(G, F),
									J = N.getModel().getValueInRange(K) + q,
									W = new n.$wL(K, J),
									X = [W, ...k(this.textModel, V, W)],
									Y = D(X).map((ie) => c.$kL.fromPositions(ie));
								N.executeEdits(
									"inlineSuggestion.accept",
									X.map((ie) => u.$jL.replace(ie.range, ie.text)),
								),
									N.setSelections(Y, "inlineCompletionPartialAccept"),
									N.revealPositionInCenterIfOutsideViewport(
										N.getPosition(),
										p.ScrollType.Immediate,
									);
							} finally {
								this.q = !1;
							}
							if (U.source.provider.handlePartialAccept) {
								const K = h.$iL.fromPositions(
										U.range.getStartPosition(),
										g.$tL.ofText(q).addToPosition(F),
									),
									J = N.getModel().getValueInRange(K, b.EndOfLinePreference.LF);
								U.source.provider.handlePartialAccept(
									U.source.inlineCompletions,
									U.sourceInlineCompletion,
									J.length,
									{ kind: R },
								);
							}
						} finally {
							U.source.removeRef();
						}
					}
					handleSuggestAccepted(N) {
						const A = (0, y.$LCb)(N.toSingleTextEdit(), this.textModel),
							R = this.M(A, void 0);
						if (!R) return;
						const O = R.completion.inlineCompletion;
						O.source.provider.handlePartialAccept?.(
							O.source.inlineCompletions,
							O.sourceInlineCompletion,
							A.text.length,
							{ kind: o.PartialAcceptTriggerKind.Suggest },
						);
					}
				};
				(e.$ODb = T),
					(e.$ODb = T = Ne([j(9, I.$Li), j(10, S.$ek), j(11, f.$aN)], T));
				var P;
				(function (M) {
					(M[(M.Undo = 0)] = "Undo"),
						(M[(M.Redo = 1)] = "Redo"),
						(M[(M.AcceptWord = 2)] = "AcceptWord"),
						(M[(M.Other = 3)] = "Other");
				})(P || (e.VersionIdChangeReason = P = {}));
				function k(M, N, A) {
					if (N.length === 1) return [];
					const R = N[0],
						O = N.slice(1),
						B = A.range.getStartPosition(),
						U = A.range.getEndPosition(),
						z = M.getValueInRange(h.$iL.fromPositions(R, U)),
						F = (0, $.$ACb)(R, B);
					if (F.lineNumber < 1)
						return (
							(0, E.$4)(
								new E.$gb(`positionWithinTextEdit line number should be bigger than 0.
			Invalid subtraction between ${R.toString()} and ${B.toString()}`),
							),
							[]
						);
					const x = L(A.text, F);
					return O.map((H) => {
						const q = (0, $.$zCb)((0, $.$ACb)(H, B), U),
							V = M.getValueInRange(h.$iL.fromPositions(H, q)),
							G = (0, m.$Of)(z, V),
							K = h.$iL.fromPositions(H, H.delta(0, G));
						return new n.$wL(K, x);
					});
				}
				function L(M, N) {
					let A = "";
					const R = (0, m.$Af)(M);
					for (let O = N.lineNumber - 1; O < R.length; O++)
						A += R[O].substring(O === N.lineNumber - 1 ? N.column - 1 : 0);
					return A;
				}
				function D(M) {
					const N = t.$ec.createSortPermutation(
							M,
							(0, t.$0b)((B) => B.range, h.$iL.compareRangesUsingStarts),
						),
						R = new n.$vL(N.apply(M)).getNewRanges();
					return N.inverse()
						.apply(R)
						.map((B) => B.getEndPosition());
				}
			},
		)
