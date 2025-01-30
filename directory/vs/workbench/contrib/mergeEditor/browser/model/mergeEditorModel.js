import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/observable.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../nls.js';
import '../../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../common/editor/editorModel.js';
import './lineRange.js';
import './mapping.js';
import './textModelDiffs.js';
import '../utils.js';
import './modifiedBaseRange.js';
define(
			de[3080],
			he([1, 0, 24, 29, 77, 17, 61, 4, 155, 416, 507, 686, 3079, 508, 1250]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*errors*/,
 w /*observable*/,
 E /*range*/,
 C /*language*/,
 d /*nls*/,
 m /*undoRedo*/,
 r /*editorModel*/,
 u /*lineRange*/,
 a /*mapping*/,
 h /*textModelDiffs*/,
 c /*utils*/,
 n /*modifiedBaseRange*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MergeEditorModelState = e.$OZb = void 0);
				let g = class extends r.$PO {
					constructor(l, y, $, v, S, I, T, P, k) {
						super(),
							(this.base = l),
							(this.input1 = y),
							(this.input2 = $),
							(this.resultTextModel = v),
							(this.t = S),
							(this.u = I),
							(this.telemetry = T),
							(this.w = P),
							(this.y = k),
							(this.c = this.D(
								new h.$MZb(this.base, this.input1.textModel, this.t),
							)),
							(this.g = this.D(
								new h.$MZb(this.base, this.input2.textModel, this.t),
							)),
							(this.j = this.D(
								new h.$MZb(this.base, this.resultTextModel, this.t),
							)),
							(this.modifiedBaseRanges = (0, w.derived)(this, (D) => {
								const M = this.c.diffs.read(D),
									N = this.g.diffs.read(D);
								return n.$AZb.fromDiffs(
									M,
									N,
									this.base,
									this.input1.textModel,
									this.input2.textModel,
								);
							})),
							(this.n = (0, w.derived)(
								this,
								(D) =>
									new Map(
										this.modifiedBaseRanges.read(D).map((N) => [N, new o(N)]),
									),
							)),
							(this.q = this.resultTextModel.createSnapshot()),
							(this.baseInput1Diffs = this.c.diffs),
							(this.baseInput2Diffs = this.g.diffs),
							(this.baseResultDiffs = this.j.diffs),
							(this.input1ResultMapping = (0, w.derived)(this, (D) =>
								this.F(
									this.baseInput1Diffs.read(D),
									this.baseResultDiffs.read(D),
									this.input1.textModel.getLineCount(),
								),
							)),
							(this.resultInput1Mapping = (0, w.derived)(this, (D) =>
								this.input1ResultMapping.read(D).reverse(),
							)),
							(this.input2ResultMapping = (0, w.derived)(this, (D) =>
								this.F(
									this.baseInput2Diffs.read(D),
									this.baseResultDiffs.read(D),
									this.input2.textModel.getLineCount(),
								),
							)),
							(this.resultInput2Mapping = (0, w.derived)(this, (D) =>
								this.input2ResultMapping.read(D).reverse(),
							)),
							(this.baseResultMapping = (0, w.derived)(this, (D) => {
								const M = new a.$vZb(this.baseResultDiffs.read(D), -1);
								return new a.$vZb(
									M.lineRangeMappings.map((N) =>
										N.inputRange.isEmpty || N.outputRange.isEmpty
											? new a.$uZb(
													N.inputRange.deltaStart(-1),
													N.outputRange.deltaStart(-1),
												)
											: N,
									),
									M.inputLineCount,
								);
							})),
							(this.resultBaseMapping = (0, w.derived)(this, (D) =>
								this.baseResultMapping.read(D).reverse(),
							)),
							(this.diffComputingState = (0, w.derived)(this, (D) => {
								const M = [this.c, this.g, this.j].map((N) => N.state.read(D));
								return M.some((N) => N === h.TextModelDiffState.initializing)
									? f.initializing
									: M.some((N) => N === h.TextModelDiffState.updating)
										? f.updating
										: f.upToDate;
							})),
							(this.inputDiffComputingState = (0, w.derived)(this, (D) => {
								const M = [this.c, this.g].map((N) => N.state.read(D));
								return M.some((N) => N === h.TextModelDiffState.initializing)
									? f.initializing
									: M.some((N) => N === h.TextModelDiffState.updating)
										? f.updating
										: f.upToDate;
							})),
							(this.isUpToDate = (0, w.derived)(
								this,
								(D) => this.diffComputingState.read(D) === f.upToDate,
							)),
							(this.onInitialized = (0, w.waitForState)(
								this.diffComputingState,
								(D) => D === f.upToDate,
							).then(() => {})),
							(this.G = !0),
							(this.unhandledConflictsCount = (0, w.derived)(this, (D) => {
								const M = this.n.read(D);
								let N = 0;
								for (const [A, R] of M) R.handled.read(D) || N++;
								return N;
							})),
							(this.hasUnhandledConflicts = this.unhandledConflictsCount.map(
								(D) => D > 0,
							)),
							this.D((0, w.keepObserved)(this.n)),
							this.D((0, w.keepObserved)(this.input1ResultMapping)),
							this.D((0, w.keepObserved)(this.input2ResultMapping));
						const L = this.z();
						(this.onInitialized = this.onInitialized.then(async () => {
							await L;
						})),
							L.then(() => {
								let D = !0;
								this.D(
									(0, w.autorunHandleChanges)(
										{
											handleChange: (M) => (
												M.didChange(this.n) && (D = !0),
												M.didChange(this.j.diffs)
													? M.change === h.TextModelDiffChangeReason.textChange
													: !0
											),
										},
										(M) => {
											const N = this.n.read(M);
											if (!this.isUpToDate.read(M)) return;
											const A = this.j.diffs.read(M);
											(0, w.transaction)((R) => {
												if ((this.H(A, N, R), D)) {
													D = !1;
													for (const [O, B] of N) {
														const U = B.accepted.get(),
															z = !(
																U.kind === n.ModifiedBaseRangeStateKind.base ||
																U.kind ===
																	n.ModifiedBaseRangeStateKind.unrecognized
															);
														B.handledInput1.set(z, R),
															B.handledInput2.set(z, R);
													}
												}
											});
										},
									),
								);
							});
					}
					async z() {
						this.u.resetResult && (await this.reset());
					}
					async reset() {
						await (0, w.waitForState)(
							this.inputDiffComputingState,
							(y) => y === f.upToDate,
						);
						const l = this.n.get();
						(0, w.transaction)((y) => {
							for (const [$, v] of l) {
								let S,
									I = !1;
								$.input1Diffs.length === 0
									? ((S = n.ModifiedBaseRangeState.base.withInputValue(2, !0)),
										(I = !0))
									: $.input2Diffs.length === 0 || $.isEqualChange
										? ((S = n.ModifiedBaseRangeState.base.withInputValue(
												1,
												!0,
											)),
											(I = !0))
										: ((S = n.ModifiedBaseRangeState.base), (I = !1)),
									v.accepted.set(S, y),
									(v.computedFromDiffing = !1),
									(v.previousNonDiffingState = void 0),
									v.handledInput1.set(I, y),
									v.handledInput2.set(I, y);
							}
							this.resultTextModel.pushEditOperations(
								null,
								[
									{
										range: new E.$iL(1, 1, Number.MAX_SAFE_INTEGER, 1),
										text: this.C(),
									},
								],
								() => null,
							);
						});
					}
					C() {
						const l = this.modifiedBaseRanges.get(),
							y = this.base.getLinesContent(),
							$ = this.input1.textModel.getLinesContent(),
							v = this.input2.textModel.getLinesContent(),
							S = [];
						function I(P, k) {
							for (let L = k.startLineNumber; L < k.endLineNumberExclusive; L++)
								S.push(P[L - 1]);
						}
						let T = 1;
						for (const P of l)
							I(y, u.$bZb.fromLineNumbers(T, P.baseRange.startLineNumber)),
								(T = P.baseRange.endLineNumberExclusive),
								P.input1Diffs.length === 0
									? I(v, P.input2Range)
									: P.input2Diffs.length === 0 || P.isEqualChange
										? I($, P.input1Range)
										: I(y, P.baseRange);
						return (
							I(y, u.$bZb.fromLineNumbers(T, y.length + 1)),
							S.join(this.resultTextModel.getEOL())
						);
					}
					hasBaseRange(l) {
						return this.n.get().has(l);
					}
					get isApplyingEditInResult() {
						return this.j.isApplyingChange;
					}
					F(l, y, $) {
						const v = a.$vZb.betweenOutputs(l, y, $);
						return new a.$vZb(
							v.lineRangeMappings.map((S) =>
								S.inputRange.isEmpty || S.outputRange.isEmpty
									? new a.$uZb(
											S.inputRange.deltaStart(-1),
											S.outputRange.deltaStart(-1),
										)
									: S,
							),
							v.inputLineCount,
						);
					}
					translateInputRangeToBase(l, y) {
						const $ =
							l === 1 ? this.baseInput1Diffs.get() : this.baseInput2Diffs.get();
						return new a.$zZb(
							$.flatMap((S) => S.rangeMappings),
							0,
						)
							.reverse()
							.projectRange(y).outputRange;
					}
					translateBaseRangeToInput(l, y) {
						const $ =
							l === 1 ? this.baseInput1Diffs.get() : this.baseInput2Diffs.get();
						return new a.$zZb(
							$.flatMap((S) => S.rangeMappings),
							0,
						).projectRange(y).outputRange;
					}
					getLineRangeInResult(l, y) {
						return this.j.getResultLineRange(l, y);
					}
					translateResultRangeToBase(l) {
						return new a.$zZb(
							this.baseResultDiffs.get().flatMap(($) => $.rangeMappings),
							0,
						)
							.reverse()
							.projectRange(l).outputRange;
					}
					translateBaseRangeToResult(l) {
						return new a.$zZb(
							this.baseResultDiffs.get().flatMap(($) => $.rangeMappings),
							0,
						).projectRange(l).outputRange;
					}
					findModifiedBaseRangesInRange(l) {
						return this.modifiedBaseRanges
							.get()
							.filter((y) => y.baseRange.intersects(l));
					}
					H(l, y, $) {
						const v = (0, c.$hZb)(y, l, (S, I) =>
							S[0].baseRange.touches(I.inputRange)
								? t.CompareResult.neitherLessOrGreaterThan
								: u.$bZb.compareByStart(S[0].baseRange, I.inputRange),
						);
						for (const S of v) {
							const I = this.I(S.left[0], S.rights),
								T = S.left[1],
								P = T.accepted.get();
							P.equals(I) ||
								(!this.G &&
									!T.computedFromDiffing &&
									((T.computedFromDiffing = !0),
									(T.previousNonDiffingState = P)),
								T.accepted.set(I, $));
						}
						this.G && (this.G = !1);
					}
					I(l, y) {
						if (y.length === 0) return n.ModifiedBaseRangeState.base;
						const $ = y.map((I) => I.getLineEdit());
						function v(I) {
							return (0, t.$yb)(
								$,
								I.map((T) => T.getLineEdit()),
								(T, P) => T.equals(P),
							);
						}
						if (v(l.input1Diffs))
							return n.ModifiedBaseRangeState.base.withInputValue(1, !0);
						if (v(l.input2Diffs))
							return n.ModifiedBaseRangeState.base.withInputValue(2, !0);
						const S = [
							n.ModifiedBaseRangeState.base
								.withInputValue(1, !0)
								.withInputValue(2, !0, !0),
							n.ModifiedBaseRangeState.base
								.withInputValue(2, !0)
								.withInputValue(1, !0, !0),
							n.ModifiedBaseRangeState.base
								.withInputValue(1, !0)
								.withInputValue(2, !0, !1),
							n.ModifiedBaseRangeState.base
								.withInputValue(2, !0)
								.withInputValue(1, !0, !1),
						];
						for (const I of S) {
							const { edit: T } = l.getEditForBase(I);
							if (T) {
								const k = this.j
									.getResultLineRange(l.baseRange)
									.getLines(this.resultTextModel);
								if ((0, t.$yb)(T.newLines, k, (L, D) => L === D)) return I;
							}
						}
						return n.ModifiedBaseRangeState.unrecognized;
					}
					getState(l) {
						const y = this.n.get().get(l);
						if (!y) throw new i.$gb("object must be from this instance");
						return y.accepted;
					}
					setState(l, y, $, v, S = !1) {
						if (!this.isUpToDate.get())
							throw new i.$gb("Cannot set state while updating");
						const I = this.n.get().get(l);
						if (!I) throw new i.$gb("object must be from this instance");
						const T = this.j.findTouchingDiffs(l.baseRange),
							P = new m.$IN();
						T && this.j.removeDiffs(T, v, P);
						const { edit: k, effectiveState: L } = l.getEditForBase(y);
						I.accepted.set(L, v),
							(I.previousNonDiffingState = void 0),
							(I.computedFromDiffing = !1);
						const D = I.handledInput1.get(),
							M = I.handledInput2.get();
						(!D || !M) &&
							this.y.pushElement(
								new b(
									this.resultTextModel.uri,
									new WeakRef(this),
									new WeakRef(I),
									D,
									M,
								),
								P,
							),
							k &&
								(this.resultTextModel.pushStackElement(),
								this.j.applyEditRelativeToOriginal(k, v, P),
								this.resultTextModel.pushStackElement()),
							I.handledInput1.set(!0, v),
							I.handledInput2.set(!0, v);
					}
					resetDirtyConflictsToBase() {
						(0, w.transaction)((l) => {
							this.resultTextModel.pushStackElement();
							for (const y of this.modifiedBaseRanges.get())
								this.getState(y).get().kind ===
									n.ModifiedBaseRangeStateKind.unrecognized &&
									this.setState(y, n.ModifiedBaseRangeState.base, !1, l, !1);
							this.resultTextModel.pushStackElement();
						});
					}
					isHandled(l) {
						return this.n.get().get(l).handled;
					}
					isInputHandled(l, y) {
						const $ = this.n.get().get(l);
						return y === 1 ? $.handledInput1 : $.handledInput2;
					}
					setInputHandled(l, y, $, v) {
						const S = this.n.get().get(l);
						if (S.handled.get() === $) return;
						const I = new WeakRef(o),
							T = new WeakRef(this);
						this.y.pushElement({
							type: m.UndoRedoElementType.Resource,
							resource: this.resultTextModel.uri,
							code: "setInputHandled",
							label: (0, d.localize)(7624, null),
							redo() {
								const P = T.deref(),
									k = I.deref();
								P &&
									!P.isDisposed() &&
									k &&
									(0, w.transaction)((L) => {
										y === 1
											? S.handledInput1.set($, L)
											: S.handledInput2.set($, L);
									});
							},
							undo() {
								const P = T.deref(),
									k = I.deref();
								P &&
									!P.isDisposed() &&
									k &&
									(0, w.transaction)((L) => {
										y === 1
											? S.handledInput1.set(!$, L)
											: S.handledInput2.set(!$, L);
									});
							},
							rebase() {},
						}),
							y === 1 ? S.handledInput1.set($, v) : S.handledInput2.set($, v);
					}
					setHandled(l, y, $) {
						const v = this.n.get().get(l);
						v.handled.get() !== y &&
							(v.handledInput1.set(y, $), v.handledInput2.set(y, $));
					}
					setLanguageId(l, y) {
						const $ = this.w.createById(l);
						this.base.setLanguage($, y),
							this.input1.textModel.setLanguage($, y),
							this.input2.textModel.setLanguage($, y),
							this.resultTextModel.setLanguage($, y);
					}
					getInitialResultValue() {
						const l = [];
						for (;;) {
							const y = this.q.read();
							if (y === null) break;
							l.push(y);
						}
						return l.join();
					}
					async getResultValueWithConflictMarkers() {
						if (
							(await (0, w.waitForState)(
								this.diffComputingState,
								(P) => P === f.upToDate,
							),
							this.unhandledConflictsCount.get() === 0)
						)
							return this.resultTextModel.getValue();
						const l = this.resultTextModel.getLinesContent(),
							y = this.input1.textModel.getLinesContent(),
							$ = this.input2.textModel.getLinesContent(),
							v = this.n.get(),
							S = [];
						function I(P, k) {
							for (let L = k.startLineNumber; L < k.endLineNumberExclusive; L++)
								S.push(P[L - 1]);
						}
						let T = 1;
						for (const [P, k] of v) {
							if (k.handled.get()) continue;
							const L = this.j.getResultLineRange(P.baseRange);
							I(l, u.$bZb.fromLineNumbers(T, Math.max(T, L.startLineNumber))),
								(T = L.endLineNumberExclusive),
								S.push("<<<<<<<"),
								k.accepted.get().kind ===
								n.ModifiedBaseRangeStateKind.unrecognized
									? I(l, L)
									: I(y, P.input1Range),
								S.push("======="),
								I($, P.input2Range),
								S.push(">>>>>>>");
						}
						return (
							I(l, u.$bZb.fromLineNumbers(T, l.length + 1)),
							S.join(`
`)
						);
					}
					get conflictCount() {
						return p(this.modifiedBaseRanges.get(), (l) => l.isConflicting);
					}
					get combinableConflictCount() {
						return p(
							this.modifiedBaseRanges.get(),
							(l) => l.isConflicting && l.canBeCombined,
						);
					}
					get conflictsResolvedWithBase() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind === n.ModifiedBaseRangeStateKind.base,
						);
					}
					get conflictsResolvedWithInput1() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind === n.ModifiedBaseRangeStateKind.input1,
						);
					}
					get conflictsResolvedWithInput2() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind === n.ModifiedBaseRangeStateKind.input2,
						);
					}
					get conflictsResolvedWithSmartCombination() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.both &&
								$.smartCombination
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNone() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind ===
									n.ModifiedBaseRangeStateKind.unrecognized,
						);
					}
					get manuallySolvedConflictCountThatEqualSmartCombine() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								y.computedFromDiffing &&
								$.kind === n.ModifiedBaseRangeStateKind.both &&
								$.smartCombination
							);
						});
					}
					get manuallySolvedConflictCountThatEqualInput1() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								y.computedFromDiffing &&
								$.kind === n.ModifiedBaseRangeStateKind.input1
							);
						});
					}
					get manuallySolvedConflictCountThatEqualInput2() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								y.computedFromDiffing &&
								$.kind === n.ModifiedBaseRangeStateKind.input2
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithBase() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.base
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.input1
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.input2
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.both &&
								!y.previousNonDiffingState?.smartCombination
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.both &&
								y.previousNonDiffingState?.smartCombination
							);
						});
					}
				};
				(e.$OZb = g), (e.$OZb = g = Ne([j(7, C.$nM), j(8, m.$GN)], g));
				function p(s, l) {
					let y = 0;
					for (const $ of s) l($) && y++;
					return y;
				}
				class o {
					constructor(l) {
						(this.c = l),
							(this.accepted = (0, w.observableValue)(
								`BaseRangeState${this.c.baseRange}`,
								n.ModifiedBaseRangeState.base,
							)),
							(this.handledInput1 = (0, w.observableValue)(
								`BaseRangeHandledState${this.c.baseRange}.Input1`,
								!1,
							)),
							(this.handledInput2 = (0, w.observableValue)(
								`BaseRangeHandledState${this.c.baseRange}.Input2`,
								!1,
							)),
							(this.computedFromDiffing = !1),
							(this.previousNonDiffingState = void 0),
							(this.handled = (0, w.derived)(
								this,
								(y) => this.handledInput1.read(y) && this.handledInput2.read(y),
							));
					}
				}
				var f;
				(function (s) {
					(s[(s.initializing = 1)] = "initializing"),
						(s[(s.upToDate = 2)] = "upToDate"),
						(s[(s.updating = 3)] = "updating");
				})(f || (e.MergeEditorModelState = f = {}));
				class b {
					constructor(l, y, $, v, S) {
						(this.resource = l),
							(this.c = y),
							(this.e = $),
							(this.f = v),
							(this.g = S),
							(this.code = "undoMarkAsHandled"),
							(this.label = (0, d.localize)(7625, null)),
							(this.type = m.UndoRedoElementType.Resource);
					}
					redo() {
						const l = this.c.deref();
						if (!l || l.isDisposed()) return;
						const y = this.e.deref();
						y &&
							(0, w.transaction)(($) => {
								y.handledInput1.set(!0, $), y.handledInput2.set(!0, $);
							});
					}
					undo() {
						const l = this.c.deref();
						if (!l || l.isDisposed()) return;
						const y = this.e.deref();
						y &&
							(0, w.transaction)(($) => {
								y.handledInput1.set(this.f, $), y.handledInput2.set(this.g, $);
							});
					}
					rebase() {}
				}
			},
		),
		