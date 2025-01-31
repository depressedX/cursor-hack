import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/keybindings.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/types.js';
import '../../../browser/stableEditorScroll.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/editOperation.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/editorContextKeys.js';
import '../../../common/model.js';
import '../../../common/languages.js';
import '../../snippet/browser/snippetController2.js';
import '../../snippet/browser/snippetParser.js';
import './suggestMemory.js';
import './wordContextKey.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/log/common/log.js';
import './suggest.js';
import './suggestAlternatives.js';
import './suggestCommitCharacters.js';
import './suggestModel.js';
import './suggestOvertypingCapturer.js';
import './suggestWidget.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/hash.js';
import '../../../../base/browser/dom.js';
import '../../../common/model/textModel.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[328],
			he([
				1, 0, 127, 24, 33, 29, 6, 27, 343, 3, 12, 162, 28, 491, 46, 38, 188, 48,
				17, 98, 71, 64, 74, 254, 389, 1673, 2727, 4, 31, 8, 5, 43, 34, 373,
				2712, 2926, 1221, 2591, 1692, 32, 19, 136, 7, 122, 45,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aria*/,
				i /*arrays*/,
				w /*cancellation*/,
				E /*errors*/,
				C /*event*/,
				d /*keyCodes*/,
				m /*keybindings*/,
				r /*lifecycle*/,
				u /*platform*/,
				a /*stopwatch*/,
				h /*types*/,
				c /*stableEditorScroll*/,
				n /*editorExtensions*/,
				g /*editorOptions*/,
				p /*editOperation*/,
				o /*position*/,
				f /*range*/,
				b /*editorCommon*/,
				s /*editorContextKeys*/,
				l /*model*/,
				y /*languages*/,
				$ /*snippetController2*/,
				v /*snippetParser*/,
				S /*suggestMemory*/,
				I /*wordContextKey*/,
				T /*nls*/,
				P /*commands*/,
				k /*contextkey*/,
				L /*instantiation*/,
				D /*keybindingsRegistry*/,
				M /*log*/,
				N /*suggest*/,
				A /*suggestAlternatives*/,
				R /*suggestCommitCharacters*/,
				O /*suggestModel*/,
				B /*suggestOvertypingCapturer*/,
				U /*suggestWidget*/,
				z /*telemetry*/,
				F /*resources*/,
				x /*hash*/,
				H /*dom*/,
				q /*textModel*/,
				V /*reactiveStorageService*/,
) {
				"use strict";
				var G;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LDb = e.$KDb = void 0),
					(u = mt(u)),
					(T = mt(T));
				const K = !1;
				class J {
					constructor(te, Q) {
						if (
							((this.d = te),
							(this.f = Q),
							(this.a = q.$eY.register({
								description: "suggest-line-suffix",
								stickiness:
									l.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							})),
							te.getLineMaxColumn(Q.lineNumber) !== Q.column)
						) {
							const se = te.getOffsetAt(Q),
								re = te.getPositionAt(se + 1);
							te.changeDecorations((le) => {
								this.b && le.removeDecoration(this.b),
									(this.b = le.addDecoration(
										f.$iL.fromPositions(Q, re),
										this.a,
									));
							});
						}
					}
					dispose() {
						this.b &&
							!this.d.isDisposed() &&
							this.d.changeDecorations((te) => {
								te.removeDecoration(this.b), (this.b = void 0);
							});
					}
					delta(te) {
						if (this.d.isDisposed() || this.f.lineNumber !== te.lineNumber)
							return 0;
						if (this.b) {
							const Q = this.d.getDecorationRange(this.b);
							return (
								this.d.getOffsetAt(Q.getStartPosition()) -
								this.d.getOffsetAt(te)
							);
						} else return this.d.getLineMaxColumn(te.lineNumber) - te.column;
					}
				}
				var W;
				(function (_) {
					(_[(_.None = 0)] = "None"),
						(_[(_.NoBeforeUndoStop = 1)] = "NoBeforeUndoStop"),
						(_[(_.NoAfterUndoStop = 2)] = "NoAfterUndoStop"),
						(_[(_.KeepAlternativeSuggestions = 4)] =
							"KeepAlternativeSuggestions"),
						(_[(_.AlternativeOverwriteConfig = 8)] =
							"AlternativeOverwriteConfig");
				})(W || (W = {}));
				let X = class {
					static {
						G = this;
					}
					static {
						this.ID = "editor.contrib.suggestController";
					}
					static get(te) {
						return te.getContribution(G.ID);
					}
					constructor(te, Q, Z, se, re, le, oe, ae) {
						(this.k = Q),
							(this.l = Z),
							(this.m = se),
							(this.n = re),
							(this.o = le),
							(this.p = oe),
							(this.q = ae),
							(this.b = new r.$2c()),
							(this.d = new r.$Zc()),
							(this.g = new Y((ue) => ue.priority)),
							(this.h = new C.$re()),
							(this.onWillInsertSuggestItem = this.h.event),
							(this.j = new C.$re()),
							(this.onFireCommand = this.j.event),
							(this.editor = te),
							(this.model = re.createInstance(O.$cDb, this.editor)),
							this.g.register({
								priority: 0,
								select: (ue, fe, me) => this.k.select(ue, fe, me),
							});
						const pe = N.$YCb.InsertMode.bindTo(se);
						pe.set(te.getOption(g.EditorOption.suggest).insertMode),
							this.d.add(
								this.model.onDidTrigger(() =>
									pe.set(te.getOption(g.EditorOption.suggest).insertMode),
								),
							),
							(this.widget = this.d.add(
								new H.$fgb((0, H.getWindow)(te.getDomNode()), () => {
									const ue = this.n.createInstance(U.$GDb, this.editor);
									this.d.add(ue),
										this.d.add(
											ue.onDidSelect((be) => this.r(be, W.None), this),
										);
									const fe = new R.$JDb(
										this.editor,
										this.p,
										ue,
										this.model,
										(be) => this.r(be, W.NoAfterUndoStop),
									);
									this.d.add(fe);
									const me = N.$YCb.MakesTextEdit.bindTo(this.m),
										ve = N.$YCb.HasInsertAndReplaceRange.bindTo(this.m),
										ge = N.$YCb.CanResolve.bindTo(this.m);
									return (
										this.d.add(
											(0, r.$Yc)(() => {
												me.reset(), ve.reset(), ge.reset();
											}),
										),
										this.d.add(
											ue.onDidFocus(({ item: be }) => {
												const Ce = this.editor.getPosition(),
													Le = be.editStart.column,
													Fe = Ce.column;
												let Oe = !0;
												this.editor.getOption(
													g.EditorOption.acceptSuggestionOnEnter,
												) === "smart" &&
													this.model.state === O.State.Auto &&
													!be.completion.additionalTextEdits &&
													!(
														be.completion.insertTextRules &
														y.CompletionItemInsertTextRule.InsertAsSnippet
													) &&
													Fe - Le === be.completion.insertText.length &&
													(Oe =
														this.editor
															.getModel()
															.getValueInRange({
																startLineNumber: Ce.lineNumber,
																startColumn: Le,
																endLineNumber: Ce.lineNumber,
																endColumn: Fe,
															}) !== be.completion.insertText),
													me.set(Oe),
													ve.set(
														!o.$hL.equals(be.editInsertEnd, be.editReplaceEnd),
													),
													ge.set(
														!!be.provider.resolveCompletionItem ||
															!!be.completion.documentation ||
															be.completion.detail !== be.completion.label,
													);
											}),
										),
										this.d.add(
											ue.onDetailsKeyDown((be) => {
												if (
													be
														.toKeyCodeChord()
														.equals(
															new m.$ts(!0, !1, !1, !1, d.KeyCode.KeyC),
														) ||
													(u.$m &&
														be
															.toKeyCodeChord()
															.equals(
																new m.$ts(!1, !1, !1, !0, d.KeyCode.KeyC),
															))
												) {
													be.stopPropagation();
													return;
												}
												be.toKeyCodeChord().isModifierKey() ||
													this.editor.focus();
											}),
										),
										ue
									);
								}),
							)),
							(this.f = this.d.add(
								new H.$fgb((0, H.getWindow)(te.getDomNode()), () =>
									this.d.add(new B.$dDb(this.editor, this.model)),
								),
							)),
							(this.a = this.d.add(
								new H.$fgb((0, H.getWindow)(te.getDomNode()), () =>
									this.d.add(new A.$IDb(this.editor, this.m)),
								),
							)),
							this.d.add(re.createInstance(I.$vDb, te)),
							this.d.add(
								this.model.onDidTrigger((ue) => {
									this.widget.value.showTriggered(ue.auto, ue.shy ? 250 : 50),
										(this.b.value = new J(this.editor.getModel(), ue.position));
								}),
							),
							this.d.add(
								this.model.onDidSuggest((ue) => {
									if (ue.triggerOptions.shy) return;
									let fe = -1;
									for (const ve of this.g.itemsOrderedByPriorityDesc)
										if (
											((fe = ve.select(
												this.editor.getModel(),
												this.editor.getPosition(),
												ue.completionModel.items,
											)),
											fe !== -1)
										)
											break;
									if (
										(fe === -1 && (fe = 0), this.model.state === O.State.Idle)
									)
										return;
									let me = !1;
									if (ue.triggerOptions.auto) {
										const ve = this.editor.getOption(g.EditorOption.suggest);
										ve.selectionMode === "never" ||
										ve.selectionMode === "always"
											? (me = ve.selectionMode === "never")
											: ve.selectionMode === "whenTriggerCharacter"
												? (me =
														ue.triggerOptions.triggerKind !==
														y.CompletionTriggerKind.TriggerCharacter)
												: ve.selectionMode === "whenQuickSuggestion" &&
													(me =
														ue.triggerOptions.triggerKind ===
															y.CompletionTriggerKind.TriggerCharacter &&
														!ue.triggerOptions.refilter);
									}
									this.widget.value.showSuggestions(
										ue.completionModel,
										fe,
										ue.isFrozen,
										ue.triggerOptions.auto,
										me,
									);
								}),
							),
							this.d.add(
								this.model.onDidCancel((ue) => {
									ue.retrigger || this.widget.value.hideWidget();
								}),
							),
							this.d.add(
								this.editor.onDidBlurEditorWidget(() => {
									K || (this.model.cancel(), this.model.clear());
								}),
							);
						const $e = N.$YCb.AcceptSuggestionsOnEnter.bindTo(se),
							ye = () => {
								const ue = this.editor.getOption(
									g.EditorOption.acceptSuggestionOnEnter,
								);
								$e.set(ue === "on" || ue === "smart");
							};
						this.d.add(this.editor.onDidChangeConfiguration(() => ye())), ye();
					}
					dispose() {
						this.a.dispose(),
							this.d.dispose(),
							this.widget.dispose(),
							this.model.dispose(),
							this.b.dispose(),
							this.h.dispose();
					}
					r(te, Q) {
						if (!te || !te.item) {
							this.a.value.reset(), this.model.cancel(), this.model.clear();
							return;
						}
						if (!this.editor.hasModel()) return;
						const Z = $.$aDb.get(this.editor);
						if (!Z) return;
						this.h.fire({ item: te.item });
						const se = this.editor.getModel(),
							re = se.getAlternativeVersionId(),
							{ item: le } = te,
							oe = [],
							ae = new w.$Ce();
						Q & W.NoBeforeUndoStop || this.editor.pushUndoStop();
						const pe = this.getOverwriteInfo(
							le,
							!!(Q & W.AlternativeOverwriteConfig),
						);
						this.k.memorize(se, this.editor.getPosition(), le);
						const $e = le.isResolved;
						let ye = -1,
							ue = -1;
						if (Array.isArray(le.completion.additionalTextEdits)) {
							this.model.cancel();
							const me = c.$uwb.capture(this.editor);
							this.editor.executeEdits(
								"suggestController.additionalTextEdits.sync",
								le.completion.additionalTextEdits.map((ve) => {
									let ge = f.$iL.lift(ve.range);
									if (
										ge.startLineNumber === le.position.lineNumber &&
										ge.startColumn > le.position.column
									) {
										const be =
												this.editor.getPosition().column - le.position.column,
											Ce = be,
											Le = f.$iL.spansMultipleLines(ge) ? 0 : be;
										ge = new f.$iL(
											ge.startLineNumber,
											ge.startColumn + Ce,
											ge.endLineNumber,
											ge.endColumn + Le,
										);
									}
									return p.$jL.replaceMove(ge, ve.text);
								}),
							),
								me.restoreRelativeVerticalPositionOfCursor(this.editor);
						} else if (!$e) {
							const me = new a.$le();
							let ve;
							const ge = se.onDidChangeContent((Fe) => {
									if (Fe.isFlush) {
										ae.cancel(), ge.dispose();
										return;
									}
									for (const Oe of Fe.changes) {
										const xe = f.$iL.getEndPosition(Oe.range);
										(!ve || o.$hL.isBefore(xe, ve)) && (ve = xe);
									}
								}),
								be = Q;
							Q |= W.NoAfterUndoStop;
							let Ce = !1;
							const Le = this.editor.onWillType(() => {
								Le.dispose(),
									(Ce = !0),
									be & W.NoAfterUndoStop || this.editor.pushUndoStop();
							});
							oe.push(
								le
									.resolve(ae.token)
									.then(() => {
										if (
											!le.completion.additionalTextEdits ||
											ae.token.isCancellationRequested
										)
											return;
										if (
											ve &&
											le.completion.additionalTextEdits.some((Oe) =>
												o.$hL.isBefore(ve, f.$iL.getStartPosition(Oe.range)),
											)
										)
											return !1;
										Ce && this.editor.pushUndoStop();
										const Fe = c.$uwb.capture(this.editor);
										return (
											this.editor.executeEdits(
												"suggestController.additionalTextEdits.async",
												le.completion.additionalTextEdits.map((Oe) =>
													p.$jL.replaceMove(f.$iL.lift(Oe.range), Oe.text),
												),
											),
											Fe.restoreRelativeVerticalPositionOfCursor(this.editor),
											(Ce || !(be & W.NoAfterUndoStop)) &&
												this.editor.pushUndoStop(),
											!0
										);
									})
									.then((Fe) => {
										this.o.trace(
											"[suggest] async resolving of edits DONE (ms, applied?)",
											me.elapsed(),
											Fe,
										),
											(ue = Fe === !0 ? 1 : Fe === !1 ? 0 : -2);
									})
									.finally(() => {
										ge.dispose(), Le.dispose();
									}),
							);
						}
						let { insertText: fe } = le.completion;
						if (
							(le.completion.insertTextRules &
								y.CompletionItemInsertTextRule.InsertAsSnippet ||
								(fe = v.$Izb.escape(fe)),
							this.model.cancel(),
							Z.insert(fe, {
								overwriteBefore: pe.overwriteBefore,
								overwriteAfter: pe.overwriteAfter,
								undoStopBefore: !1,
								undoStopAfter: !1,
								adjustWhitespace: !(
									le.completion.insertTextRules &
									y.CompletionItemInsertTextRule.KeepWhitespace
								),
								clipboardText: te.model.clipboardText,
								overtypingCapturer: this.f.value,
							}),
							Q & W.NoAfterUndoStop || this.editor.pushUndoStop(),
							le.completion.command)
						)
							if (le.completion.command.id === ie.id)
								this.model.trigger({ auto: !0, retrigger: !0 });
							else {
								this.j.fire(le.completion.command);
								const me = new a.$le();
								oe.push(
									this.l
										.executeCommand(
											le.completion.command.id,
											...(le.completion.command.arguments
												? [...le.completion.command.arguments]
												: []),
										)
										.catch((ve) => {
											le.completion.extensionId ? (0, E.$5)(ve) : (0, E.$4)(ve);
										})
										.finally(() => {
											ye = me.elapsed();
										}),
								);
							}
						Q & W.KeepAlternativeSuggestions &&
							this.a.value.set(te, (me) => {
								for (ae.cancel(); se.canUndo(); ) {
									re !== se.getAlternativeVersionId() && se.undo(),
										this.r(
											me,
											W.NoBeforeUndoStop |
												W.NoAfterUndoStop |
												(Q & W.AlternativeOverwriteConfig
													? W.AlternativeOverwriteConfig
													: 0),
										);
									break;
								}
							}),
							this.u(le),
							Promise.all(oe).finally(() => {
								this.t(le, se, $e, ye, ue, te.index, te.model.items),
									this.model.clear(),
									ae.dispose();
							});
					}
					t(te, Q, Z, se, re, le, oe) {
						if (Math.floor(Math.random() * 100) === 0) return;
						const ae = new Map();
						for (let ue = 0; ue < Math.min(30, oe.length); ue++) {
							const fe = oe[ue].textLabel;
							ae.has(fe) ? ae.get(fe).push(ue) : ae.set(fe, [ue]);
						}
						const pe = ae.get(te.textLabel),
							ye = pe && pe.length > 1 ? pe[0] : -1;
						this.q.publicLog2("suggest.acceptedSuggestion", {
							extensionId: te.extensionId?.value ?? "unknown",
							providerId: te.provider._debugDisplayName ?? "unknown",
							kind: te.completion.kind,
							basenameHash: (0, x.$Aj)((0, F.$kh)(Q.uri)).toString(16),
							languageId: Q.getLanguageId(),
							fileExtension: (0, F.$lh)(Q.uri),
							resolveInfo: te.provider.resolveCompletionItem ? (Z ? 1 : 0) : -1,
							resolveDuration: te.resolveDuration,
							commandDuration: se,
							additionalEditsAsync: re,
							index: le,
							firstIndex: ye,
						});
					}
					getOverwriteInfo(te, Q) {
						(0, h.$vg)(this.editor.hasModel());
						let Z =
							this.editor.getOption(g.EditorOption.suggest).insertMode ===
							"replace";
						Q && (Z = !Z);
						const se = te.position.column - te.editStart.column,
							re =
								(Z ? te.editReplaceEnd.column : te.editInsertEnd.column) -
								te.position.column,
							le = this.editor.getPosition().column - te.position.column,
							oe = this.b.value
								? this.b.value.delta(this.editor.getPosition())
								: 0;
						return { overwriteBefore: se + le, overwriteAfter: re + oe };
					}
					u(te) {
						if ((0, i.$Pb)(te.completion.additionalTextEdits)) {
							const Q = T.localize(
								1485,
								null,
								te.textLabel,
								te.completion.additionalTextEdits.length,
							);
							(0, t.$oib)(Q);
						}
					}
					triggerSuggest(te, Q, Z) {
						this.editor.hasModel() &&
							(this.model.trigger({
								auto: Q ?? !1,
								completionOptions: {
									providerFilter: te,
									kindFilter: Z ? new Set() : void 0,
								},
							}),
							this.editor.revealPosition(
								this.editor.getPosition(),
								b.ScrollType.Smooth,
							),
							this.editor.focus());
					}
					triggerSuggestAndAcceptBest(te) {
						if (!this.editor.hasModel()) return;
						const Q = this.editor.getPosition(),
							Z = () => {
								Q.equals(this.editor.getPosition()) &&
									this.l.executeCommand(te.fallback);
							},
							se = (re) => {
								if (
									re.completion.insertTextRules &
										y.CompletionItemInsertTextRule.InsertAsSnippet ||
									re.completion.additionalTextEdits
								)
									return !0;
								const le = this.editor.getPosition(),
									oe = re.editStart.column,
									ae = le.column;
								return ae - oe !== re.completion.insertText.length
									? !0
									: this.editor
											.getModel()
											.getValueInRange({
												startLineNumber: le.lineNumber,
												startColumn: oe,
												endLineNumber: le.lineNumber,
												endColumn: ae,
											}) !== re.completion.insertText;
							};
						C.Event.once(this.model.onDidTrigger)((re) => {
							const le = [];
							C.Event.any(this.model.onDidTrigger, this.model.onDidCancel)(
								() => {
									(0, r.$Vc)(le), Z();
								},
								void 0,
								le,
							),
								this.model.onDidSuggest(
									({ completionModel: oe }) => {
										if (((0, r.$Vc)(le), oe.items.length === 0)) {
											Z();
											return;
										}
										const ae = this.k.select(
												this.editor.getModel(),
												this.editor.getPosition(),
												oe.items,
											),
											pe = oe.items[ae];
										if (!se(pe)) {
											Z();
											return;
										}
										this.editor.pushUndoStop(),
											this.r(
												{ index: ae, item: pe, model: oe },
												W.KeepAlternativeSuggestions |
													W.NoBeforeUndoStop |
													W.NoAfterUndoStop,
											);
									},
									void 0,
									le,
								);
						}),
							this.model.trigger({ auto: !1, shy: !0 }),
							this.editor.revealPosition(Q, b.ScrollType.Smooth),
							this.editor.focus();
					}
					acceptSelectedSuggestion(te, Q) {
						const Z = this.widget.value.getFocusedItem();
						let se = 0;
						te && (se |= W.KeepAlternativeSuggestions),
							Q && (se |= W.AlternativeOverwriteConfig),
							this.r(Z, se);
					}
					acceptNextSuggestion() {
						this.a.value.next();
					}
					acceptPrevSuggestion() {
						this.a.value.prev();
					}
					cancelSuggestWidget() {
						this.model.cancel(),
							this.model.clear(),
							this.widget.value.hideWidget();
					}
					focusSuggestion() {
						this.widget.value.focusSelected();
					}
					selectNextSuggestion() {
						this.widget.value.selectNext();
					}
					selectNextPageSuggestion() {
						this.widget.value.selectNextPage();
					}
					selectLastSuggestion() {
						this.widget.value.selectLast();
					}
					selectPrevSuggestion() {
						this.widget.value.selectPrevious();
					}
					selectPrevPageSuggestion() {
						this.widget.value.selectPreviousPage();
					}
					selectFirstSuggestion() {
						this.widget.value.selectFirst();
					}
					toggleSuggestionDetails() {
						this.widget.value.toggleDetails();
					}
					toggleExplainMode() {
						this.widget.value.toggleExplainMode();
					}
					toggleSuggestionFocus() {
						this.widget.value.toggleDetailsFocus();
					}
					resetWidgetSize() {
						this.widget.value.resetPersistedSize();
					}
					forceRenderingAbove() {
						this.widget.value.forceRenderingAbove();
					}
					stopForceRenderingAbove() {
						this.widget.isInitialized &&
							this.widget.value.stopForceRenderingAbove();
					}
					registerSelector(te) {
						return this.g.register(te);
					}
				};
				(e.$KDb = X),
					(e.$KDb =
						X =
						G =
							Ne(
								[
									j(1, S.$uDb),
									j(2, P.$ek),
									j(3, k.$6j),
									j(4, L.$Li),
									j(5, M.$ik),
									j(6, V.$0zb),
									j(7, z.$km),
								],
								X,
							));
				class Y {
					constructor(te) {
						(this.b = te), (this.a = new Array());
					}
					register(te) {
						if (this.a.indexOf(te) !== -1)
							throw new Error("Value is already registered");
						return (
							this.a.push(te),
							this.a.sort((Q, Z) => this.b(Z) - this.b(Q)),
							{
								dispose: () => {
									const Q = this.a.indexOf(te);
									Q >= 0 && this.a.splice(Q, 1);
								},
							}
						);
					}
					get itemsOrderedByPriorityDesc() {
						return this.a;
					}
				}
				class ie extends n.$itb {
					static {
						this.id = "editor.action.triggerSuggest";
					}
					constructor() {
						super({
							id: ie.id,
							label: T.localize(1486, null),
							alias: "Trigger Suggest",
							precondition: k.$Kj.and(
								s.EditorContextKeys.writable,
								s.EditorContextKeys.hasCompletionItemProvider,
								N.$YCb.Visible.toNegated(),
							),
							kbOpts: {
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Space,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyCode.Space,
									secondary: [
										d.KeyMod.Alt | d.KeyCode.Escape,
										d.KeyMod.CtrlCmd | d.KeyCode.KeyI,
									],
								},
								weight: D.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q, Z) {
						const se = X.get(Q);
						if (!se) return;
						let re;
						Z && typeof Z == "object" && Z.auto === !0 && (re = !0),
							se.triggerSuggest(void 0, re, void 0);
					}
				}
				(e.$LDb = ie),
					(0, n.$qtb)(
						X.ID,
						X,
						n.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, n.$ntb)(ie);
				const ne = D.KeybindingWeight.EditorContrib + 90,
					ee = n.$htb.bindToContribution(X.get);
				(0, n.$mtb)(
					new ee({
						id: "acceptSelectedSuggestion",
						precondition: k.$Kj.and(
							N.$YCb.Visible,
							N.$YCb.HasFocusedSuggestion,
						),
						handler(_) {
							_.acceptSelectedSuggestion(!0, !1);
						},
						kbOpts: [
							{
								primary: d.KeyCode.Tab,
								kbExpr: k.$Kj.and(
									N.$YCb.Visible,
									s.EditorContextKeys.textInputFocus,
								),
								weight: ne,
							},
							{
								primary: d.KeyCode.Enter,
								kbExpr: k.$Kj.and(
									N.$YCb.Visible,
									s.EditorContextKeys.textInputFocus,
									N.$YCb.AcceptSuggestionsOnEnter,
									N.$YCb.MakesTextEdit,
								),
								weight: ne,
							},
						],
						menuOpts: [
							{
								menuId: N.$ZCb,
								title: T.localize(1487, null),
								group: "left",
								order: 1,
								when: N.$YCb.HasInsertAndReplaceRange.toNegated(),
							},
							{
								menuId: N.$ZCb,
								title: T.localize(1488, null),
								group: "left",
								order: 1,
								when: k.$Kj.and(
									N.$YCb.HasInsertAndReplaceRange,
									N.$YCb.InsertMode.isEqualTo("insert"),
								),
							},
							{
								menuId: N.$ZCb,
								title: T.localize(1489, null),
								group: "left",
								order: 1,
								when: k.$Kj.and(
									N.$YCb.HasInsertAndReplaceRange,
									N.$YCb.InsertMode.isEqualTo("replace"),
								),
							},
						],
					}),
				),
					(0, n.$mtb)(
						new ee({
							id: "acceptAlternativeSelectedSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								s.EditorContextKeys.textInputFocus,
								N.$YCb.HasFocusedSuggestion,
							),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.Shift | d.KeyCode.Enter,
								secondary: [d.KeyMod.Shift | d.KeyCode.Tab],
							},
							handler(_) {
								_.acceptSelectedSuggestion(!1, !0);
							},
							menuOpts: [
								{
									menuId: N.$ZCb,
									group: "left",
									order: 2,
									when: k.$Kj.and(
										N.$YCb.HasInsertAndReplaceRange,
										N.$YCb.InsertMode.isEqualTo("insert"),
									),
									title: T.localize(1490, null),
								},
								{
									menuId: N.$ZCb,
									group: "left",
									order: 2,
									when: k.$Kj.and(
										N.$YCb.HasInsertAndReplaceRange,
										N.$YCb.InsertMode.isEqualTo("replace"),
									),
									title: T.localize(1491, null),
								},
							],
						}),
					),
					P.$fk.registerCommandAlias(
						"acceptSelectedSuggestionOnEnter",
						"acceptSelectedSuggestion",
					),
					(0, n.$mtb)(
						new ee({
							id: "hideSuggestWidget",
							precondition: N.$YCb.Visible,
							handler: (_) => _.cancelSuggestWidget(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.Escape,
								secondary: [d.KeyMod.Shift | d.KeyCode.Escape],
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectNextSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectNextSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.DownArrow,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.DownArrow],
								mac: {
									primary: d.KeyCode.DownArrow,
									secondary: [
										d.KeyMod.CtrlCmd | d.KeyCode.DownArrow,
										d.KeyMod.WinCtrl | d.KeyCode.KeyN,
									],
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectNextPageSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectNextPageSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.PageDown,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.PageDown],
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectLastSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectLastSuggestion(),
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectPrevSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectPrevSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.UpArrow,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.UpArrow],
								mac: {
									primary: d.KeyCode.UpArrow,
									secondary: [
										d.KeyMod.CtrlCmd | d.KeyCode.UpArrow,
										d.KeyMod.WinCtrl | d.KeyCode.KeyP,
									],
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectPrevPageSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectPrevPageSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.PageUp,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.PageUp],
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "selectFirstSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								k.$Kj.or(
									N.$YCb.MultipleSuggestions,
									N.$YCb.HasFocusedSuggestion.negate(),
								),
							),
							handler: (_) => _.selectFirstSuggestion(),
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "focusSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								N.$YCb.HasFocusedSuggestion.negate(),
							),
							handler: (_) => _.focusSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Space,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyCode.Space,
									secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "focusAndAcceptSuggestion",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								N.$YCb.HasFocusedSuggestion.negate(),
							),
							handler: (_) => {
								_.focusSuggestion(), _.acceptSelectedSuggestion(!0, !1);
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "toggleSuggestionDetails",
							precondition: k.$Kj.and(
								N.$YCb.Visible,
								N.$YCb.HasFocusedSuggestion,
							),
							handler: (_) => _.toggleSuggestionDetails(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Space,
								secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyCode.Space,
									secondary: [d.KeyMod.CtrlCmd | d.KeyCode.KeyI],
								},
							},
							menuOpts: [
								{
									menuId: N.$ZCb,
									group: "right",
									order: 1,
									when: k.$Kj.and(N.$YCb.DetailsVisible, N.$YCb.CanResolve),
									title: T.localize(1492, null),
								},
								{
									menuId: N.$ZCb,
									group: "right",
									order: 1,
									when: k.$Kj.and(
										N.$YCb.DetailsVisible.toNegated(),
										N.$YCb.CanResolve,
									),
									title: T.localize(1493, null),
								},
							],
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "toggleExplainMode",
							precondition: N.$YCb.Visible,
							handler: (_) => _.toggleExplainMode(),
							kbOpts: {
								weight: D.KeybindingWeight.EditorContrib,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.Slash,
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "toggleSuggestionFocus",
							precondition: N.$YCb.Visible,
							handler: (_) => _.toggleSuggestionFocus(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.CtrlCmd | d.KeyMod.Alt | d.KeyCode.Space,
								mac: {
									primary: d.KeyMod.WinCtrl | d.KeyMod.Alt | d.KeyCode.Space,
								},
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "insertBestCompletion",
							precondition: k.$Kj.and(
								s.EditorContextKeys.textInputFocus,
								k.$Kj.equals("config.editor.tabCompletion", "on"),
								I.$vDb.AtEnd,
								N.$YCb.Visible.toNegated(),
								A.$IDb.OtherSuggestions.toNegated(),
								$.$aDb.InSnippetMode.toNegated(),
							),
							handler: (_, te) => {
								_.triggerSuggestAndAcceptBest(
									(0, h.$ng)(te)
										? { fallback: "tab", ...te }
										: { fallback: "tab" },
								);
							},
							kbOpts: { weight: ne, primary: d.KeyCode.Tab },
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "insertNextSuggestion",
							precondition: k.$Kj.and(
								s.EditorContextKeys.textInputFocus,
								k.$Kj.equals("config.editor.tabCompletion", "on"),
								A.$IDb.OtherSuggestions,
								N.$YCb.Visible.toNegated(),
								$.$aDb.InSnippetMode.toNegated(),
							),
							handler: (_) => _.acceptNextSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyCode.Tab,
							},
						}),
					),
					(0, n.$mtb)(
						new ee({
							id: "insertPrevSuggestion",
							precondition: k.$Kj.and(
								s.EditorContextKeys.textInputFocus,
								k.$Kj.equals("config.editor.tabCompletion", "on"),
								A.$IDb.OtherSuggestions,
								N.$YCb.Visible.toNegated(),
								$.$aDb.InSnippetMode.toNegated(),
							),
							handler: (_) => _.acceptPrevSuggestion(),
							kbOpts: {
								weight: ne,
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: d.KeyMod.Shift | d.KeyCode.Tab,
							},
						}),
					),
					(0, n.$ntb)(
						class extends n.$itb {
							constructor() {
								super({
									id: "editor.action.resetSuggestSize",
									label: T.localize(1494, null),
									alias: "Reset Suggest Widget Size",
									precondition: void 0,
								});
							}
							run(_, te) {
								X.get(te)?.resetWidgetSize();
							}
						},
					);
			},
		)
