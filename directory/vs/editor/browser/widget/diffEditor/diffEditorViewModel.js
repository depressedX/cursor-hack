import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import './diffProviderFactoryService.js';
import './utils.js';
import '../../../../base/common/hotReloadHelpers.js';
import '../../../common/core/lineRange.js';
import '../../../common/diff/defaultLinesDiffComputer/defaultLinesDiffComputer.js';
import '../../../common/diff/rangeMapping.js';
import '../../../common/model/bracketPairsTextModelPart/bracketPairsTree/beforeEditPositionMapper.js';
import '../../../common/model/bracketPairsTextModelPart/bracketPairsTree/combineTextEditInfos.js';
import '../../../common/diff/defaultLinesDiffComputer/heuristicSequenceOptimizations.js';
import '../../../../base/common/types.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/assert.js';
define(
			de[954],
			he([
				1, 0, 15, 33, 3, 77, 953, 370, 755, 196, 1532, 342, 914, 1536, 1530, 28,
				24, 229,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.RevealPreference = e.$0xb = e.$9xb = e.$8xb = e.$7xb = void 0);
				let f = class extends w.$1c {
					setActiveMovedText(P) {
						this.q.set(P, void 0);
					}
					setHoveredMovedText(P) {
						this.t.set(P, void 0);
					}
					constructor(P, k, L) {
						super(),
							(this.model = P),
							(this.y = k),
							(this.z = L),
							(this.g = (0, E.observableValue)(this, !1)),
							(this.isDiffUpToDate = this.g),
							(this.j = (0, E.observableValue)(this, void 0)),
							(this.diff = this.j),
							(this.n = (0, E.observableValue)(this, void 0)),
							(this.unchangedRegions = (0, E.derived)(this, (A) =>
								this.y.hideUnchangedRegions.read(A)
									? (this.n.read(A)?.regions ?? [])
									: ((0, E.transaction)((R) => {
											for (const O of this.n.get()?.regions || [])
												O.collapseAll(R);
										}),
										[]),
							)),
							(this.movedTextToCompare = (0, E.observableValue)(this, void 0)),
							(this.q = (0, E.observableValue)(this, void 0)),
							(this.t = (0, E.observableValue)(this, void 0)),
							(this.activeMovedText = (0, E.derived)(
								this,
								(A) =>
									this.movedTextToCompare.read(A) ??
									this.t.read(A) ??
									this.q.read(A),
							)),
							(this.u = new i.$Ce()),
							(this.w = (0, E.derived)(this, (A) => {
								const R = this.z.createDiffProvider({
										diffAlgorithm: this.y.diffAlgorithm.read(A),
									}),
									O = (0, E.observableSignalFromEvent)(
										"onDidChange",
										R.onDidChange,
									);
								return { diffProvider: R, onChangeSignal: O };
							})),
							this.D((0, w.$Yc)(() => this.u.cancel()));
						const D = (0, E.observableSignal)("contentChangedSignal"),
							M = this.D(new t.$Yh(() => D.trigger(void 0), 200));
						this.D(
							(0, E.autorun)((A) => {
								const R = this.n.read(A);
								if (!R || R.regions.some((x) => x.isDragged.read(A))) return;
								const O = R.originalDecorationIds
										.map((x) => P.original.getDecorationRange(x))
										.map((x) => (x ? r.$rL.fromRangeInclusive(x) : void 0)),
									B = R.modifiedDecorationIds
										.map((x) => P.modified.getDecorationRange(x))
										.map((x) => (x ? r.$rL.fromRangeInclusive(x) : void 0)),
									U = R.regions
										.map((x, H) =>
											!O[H] || !B[H]
												? void 0
												: new $(
														O[H].startLineNumber,
														B[H].startLineNumber,
														O[H].length,
														x.visibleLineCountTop.read(A),
														x.visibleLineCountBottom.read(A),
													),
										)
										.filter(g.$tg),
									z = [];
								let F = !1;
								for (const x of (0, p.$Eb)(
									U,
									(H, q) =>
										H.getHiddenModifiedRange(A).endLineNumberExclusive ===
										q.getHiddenModifiedRange(A).startLineNumber,
								))
									if (x.length > 1) {
										F = !0;
										const H = x.reduce((V, G) => V + G.lineCount, 0),
											q = new $(
												x[0].originalLineNumber,
												x[0].modifiedLineNumber,
												H,
												x[0].visibleLineCountTop.get(),
												x[x.length - 1].visibleLineCountBottom.get(),
											);
										z.push(q);
									} else z.push(x[0]);
								if (F) {
									const x = P.original.deltaDecorations(
											R.originalDecorationIds,
											z.map((q) => ({
												range: q.originalUnchangedRange.toInclusiveRange(),
												options: { description: "unchanged" },
											})),
										),
										H = P.modified.deltaDecorations(
											R.modifiedDecorationIds,
											z.map((q) => ({
												range: q.modifiedUnchangedRange.toInclusiveRange(),
												options: { description: "unchanged" },
											})),
										);
									(0, E.transaction)((q) => {
										this.n.set(
											{
												regions: z,
												originalDecorationIds: x,
												modifiedDecorationIds: H,
											},
											q,
										);
									});
								}
							}),
						);
						const N = (A, R, O) => {
							const B = $.fromDiffs(
								A.changes,
								P.original.getLineCount(),
								P.modified.getLineCount(),
								this.y.hideUnchangedRegionsMinimumLineCount.read(O),
								this.y.hideUnchangedRegionsContextLineCount.read(O),
							);
							let U;
							const z = this.n.get();
							if (z) {
								const q = z.originalDecorationIds
										.map((J) => P.original.getDecorationRange(J))
										.map((J) => (J ? r.$rL.fromRangeInclusive(J) : void 0)),
									V = z.modifiedDecorationIds
										.map((J) => P.modified.getDecorationRange(J))
										.map((J) => (J ? r.$rL.fromRangeInclusive(J) : void 0));
								let K = (0, d.$Kwb)(
									z.regions
										.map((J, W) => {
											if (!q[W] || !V[W]) return;
											const X = q[W].length;
											return new $(
												q[W].startLineNumber,
												V[W].startLineNumber,
												X,
												Math.min(J.visibleLineCountTop.get(), X),
												Math.min(
													J.visibleLineCountBottom.get(),
													X - J.visibleLineCountTop.get(),
												),
											);
										})
										.filter(g.$tg),
									(J, W) =>
										!W ||
										(J.modifiedLineNumber >=
											W.modifiedLineNumber + W.lineCount &&
											J.originalLineNumber >=
												W.originalLineNumber + W.lineCount),
								).map(
									(J) =>
										new a.$BL(
											J.getHiddenOriginalRange(O),
											J.getHiddenModifiedRange(O),
										),
								);
								(K = a.$BL.clip(
									K,
									r.$rL.ofLength(1, P.original.getLineCount()),
									r.$rL.ofLength(1, P.modified.getLineCount()),
								)),
									(U = a.$BL.inverse(
										K,
										P.original.getLineCount(),
										P.modified.getLineCount(),
									));
							}
							const F = [];
							if (U)
								for (const q of B) {
									const V = U.filter(
										(G) =>
											G.original.intersectsStrict(q.originalUnchangedRange) &&
											G.modified.intersectsStrict(q.modifiedUnchangedRange),
									);
									F.push(...q.setVisibleRanges(V, R));
								}
							else F.push(...B);
							const x = P.original.deltaDecorations(
									z?.originalDecorationIds || [],
									F.map((q) => ({
										range: q.originalUnchangedRange.toInclusiveRange(),
										options: { description: "unchanged" },
									})),
								),
								H = P.modified.deltaDecorations(
									z?.modifiedDecorationIds || [],
									F.map((q) => ({
										range: q.modifiedUnchangedRange.toInclusiveRange(),
										options: { description: "unchanged" },
									})),
								);
							this.n.set(
								{
									regions: F,
									originalDecorationIds: x,
									modifiedDecorationIds: H,
								},
								R,
							);
						};
						this.D(
							P.modified.onDidChangeContent((A) => {
								if (this.j.get()) {
									const O = h.$1O.fromModelContentChanges(A.changes),
										B = (this.h, P.original, P.modified, void 0);
									B &&
										((this.h = B),
										(0, E.transaction)((U) => {
											this.j.set(l.fromDiffResult(this.h), U), N(B, U);
											const z = this.movedTextToCompare.get();
											this.movedTextToCompare.set(
												z
													? this.h.moves.find((F) =>
															F.lineRangeMapping.modified.intersect(
																z.lineRangeMapping.modified,
															),
														)
													: void 0,
												U,
											);
										}));
								}
								this.g.set(!1, void 0), M.schedule();
							}),
						),
							this.D(
								P.original.onDidChangeContent((A) => {
									if (this.j.get()) {
										const O = h.$1O.fromModelContentChanges(A.changes),
											B = (this.h, P.original, P.modified, void 0);
										B &&
											((this.h = B),
											(0, E.transaction)((U) => {
												this.j.set(l.fromDiffResult(this.h), U), N(B, U);
												const z = this.movedTextToCompare.get();
												this.movedTextToCompare.set(
													z
														? this.h.moves.find((F) =>
																F.lineRangeMapping.modified.intersect(
																	z.lineRangeMapping.modified,
																),
															)
														: void 0,
													U,
												);
											}));
									}
									this.g.set(!1, void 0), M.schedule();
								}),
							),
							this.D(
								(0, E.autorunWithStore)(async (A, R) => {
									this.y.hideUnchangedRegionsMinimumLineCount.read(A),
										this.y.hideUnchangedRegionsContextLineCount.read(A),
										M.cancel(),
										D.read(A);
									const O = this.w.read(A);
									O.onChangeSignal.read(A),
										(0, m.$Tpb)(u.$nxb, A),
										(0, m.$Tpb)(n.$hxb, A),
										this.g.set(!1, void 0);
									let B = [];
									R.add(
										P.original.onDidChangeContent((F) => {
											const x = h.$1O.fromModelContentChanges(F.changes);
											B = (0, c.$7O)(B, x);
										}),
									);
									let U = [];
									R.add(
										P.modified.onDidChangeContent((F) => {
											const x = h.$1O.fromModelContentChanges(F.changes);
											U = (0, c.$7O)(U, x);
										}),
									);
									let z = await O.diffProvider.computeDiff(
										P.original,
										P.modified,
										{
											ignoreTrimWhitespace: this.y.ignoreTrimWhitespace.read(A),
											maxComputationTimeMs: this.y.maxComputationTimeMs.read(A),
											computeMoves: this.y.showMoves.read(A),
										},
										this.u.token,
									);
									this.u.token.isCancellationRequested ||
										P.original.isDisposed() ||
										P.modified.isDisposed() ||
										((z = b(z, P.original, P.modified)),
										(z = (P.original, P.modified, void 0) ?? z),
										(z = (P.original, P.modified, void 0) ?? z),
										(0, E.transaction)((F) => {
											N(z, F), (this.h = z);
											const x = l.fromDiffResult(z);
											this.j.set(x, F), this.g.set(!0, F);
											const H = this.movedTextToCompare.get();
											this.movedTextToCompare.set(
												H
													? this.h.moves.find((q) =>
															q.lineRangeMapping.modified.intersect(
																H.lineRangeMapping.modified,
															),
														)
													: void 0,
												F,
											);
										}));
								}),
							);
					}
					ensureModifiedLineIsVisible(P, k, L) {
						if (this.diff.get()?.mappings.length === 0) return;
						const D = this.n.get()?.regions || [];
						for (const M of D)
							if (M.getHiddenModifiedRange(void 0).contains(P)) {
								M.showModifiedLine(P, k, L);
								return;
							}
					}
					ensureOriginalLineIsVisible(P, k, L) {
						if (this.diff.get()?.mappings.length === 0) return;
						const D = this.n.get()?.regions || [];
						for (const M of D)
							if (M.getHiddenOriginalRange(void 0).contains(P)) {
								M.showOriginalLine(P, k, L);
								return;
							}
					}
					async waitForDiff() {
						await (0, E.waitForState)(this.isDiffUpToDate, (P) => P);
					}
					serializeState() {
						return {
							collapsedRegions: this.n
								.get()
								?.regions.map((k) => ({
									range: k.getHiddenModifiedRange(void 0).serialize(),
								})),
						};
					}
					restoreSerializedState(P) {
						const k = P.collapsedRegions?.map((D) =>
								r.$rL.deserialize(D.range),
							),
							L = this.n.get();
						!L ||
							!k ||
							(0, E.transaction)((D) => {
								for (const M of L.regions)
									for (const N of k)
										if (M.modifiedUnchangedRange.intersect(N)) {
											M.setHiddenModifiedRange(N, D);
											break;
										}
							});
					}
				};
				(e.$7xb = f), (e.$7xb = f = Ne([j(2, C.$Dxb)], f));
				function b(T, P, k) {
					return {
						changes: T.changes.map(
							(L) =>
								new a.$CL(
									L.original,
									L.modified,
									L.innerChanges
										? L.innerChanges.map((D) => s(D, P, k))
										: void 0,
								),
						),
						moves: T.moves,
						identical: T.identical,
						quitEarly: T.quitEarly,
					};
				}
				function s(T, P, k) {
					let L = T.originalRange,
						D = T.modifiedRange;
					return (
						L.startColumn === 1 &&
							D.startColumn === 1 &&
							(L.endColumn !== 1 || D.endColumn !== 1) &&
							L.endColumn === P.getLineMaxColumn(L.endLineNumber) &&
							D.endColumn === k.getLineMaxColumn(D.endLineNumber) &&
							L.endLineNumber < P.getLineCount() &&
							D.endLineNumber < k.getLineCount() &&
							((L = L.setEndPosition(L.endLineNumber + 1, 1)),
							(D = D.setEndPosition(D.endLineNumber + 1, 1))),
						new a.$DL(L, D)
					);
				}
				class l {
					static fromDiffResult(P) {
						return new l(
							P.changes.map((k) => new y(k)),
							P.moves || [],
							P.identical,
							P.quitEarly,
						);
					}
					constructor(P, k, L, D) {
						(this.mappings = P),
							(this.movedTexts = k),
							(this.identical = L),
							(this.quitEarly = D);
					}
				}
				e.$8xb = l;
				class y {
					constructor(P) {
						this.lineRangeMapping = P;
					}
				}
				e.$9xb = y;
				class $ {
					static fromDiffs(P, k, L, D, M) {
						const N = a.$CL.inverse(P, k, L),
							A = [];
						for (const R of N) {
							let O = R.original.startLineNumber,
								B = R.modified.startLineNumber,
								U = R.original.length;
							const z = O === 1 && B === 1,
								F = O + U === k + 1 && B + U === L + 1;
							(z || F) && U >= M + D
								? (z && !F && (U -= M),
									F && !z && ((O += M), (B += M), (U -= M)),
									A.push(new $(O, B, U, 0, 0)))
								: U >= M * 2 + D &&
									((O += M),
									(B += M),
									(U -= M * 2),
									A.push(new $(O, B, U, 0, 0)));
						}
						return A;
					}
					get originalUnchangedRange() {
						return r.$rL.ofLength(this.originalLineNumber, this.lineCount);
					}
					get modifiedUnchangedRange() {
						return r.$rL.ofLength(this.modifiedLineNumber, this.lineCount);
					}
					constructor(P, k, L, D, M) {
						(this.originalLineNumber = P),
							(this.modifiedLineNumber = k),
							(this.lineCount = L),
							(this.d = (0, E.observableValue)(this, 0)),
							(this.visibleLineCountTop = this.d),
							(this.g = (0, E.observableValue)(this, 0)),
							(this.visibleLineCountBottom = this.g),
							(this.h = (0, E.derived)(
								this,
								(R) =>
									this.visibleLineCountTop.read(R) +
										this.visibleLineCountBottom.read(R) ===
										this.lineCount && !this.isDragged.read(R),
							)),
							(this.isDragged = (0, E.observableValue)(this, void 0));
						const N = Math.max(Math.min(D, this.lineCount), 0),
							A = Math.max(Math.min(M, this.lineCount - D), 0);
						(0, o.$md)(D === N),
							(0, o.$md)(M === A),
							this.d.set(N, void 0),
							this.g.set(A, void 0);
					}
					setVisibleRanges(P, k) {
						const L = [],
							D = new r.$sL(P.map((R) => R.modified)).subtractFrom(
								this.modifiedUnchangedRange,
							);
						let M = this.originalLineNumber,
							N = this.modifiedLineNumber;
						const A = this.modifiedLineNumber + this.lineCount;
						if (D.ranges.length === 0) this.showAll(k), L.push(this);
						else {
							let R = 0;
							for (const O of D.ranges) {
								const B = R === D.ranges.length - 1;
								R++;
								const U = (B ? A : O.endLineNumberExclusive) - N,
									z = new $(M, N, U, 0, 0);
								z.setHiddenModifiedRange(O, k),
									L.push(z),
									(M = z.originalUnchangedRange.endLineNumberExclusive),
									(N = z.modifiedUnchangedRange.endLineNumberExclusive);
							}
						}
						return L;
					}
					shouldHideControls(P) {
						return this.h.read(P);
					}
					getHiddenOriginalRange(P) {
						return r.$rL.ofLength(
							this.originalLineNumber + this.d.read(P),
							this.lineCount - this.d.read(P) - this.g.read(P),
						);
					}
					getHiddenModifiedRange(P) {
						return r.$rL.ofLength(
							this.modifiedLineNumber + this.d.read(P),
							this.lineCount - this.d.read(P) - this.g.read(P),
						);
					}
					setHiddenModifiedRange(P, k) {
						const L = P.startLineNumber - this.modifiedLineNumber,
							D =
								this.modifiedLineNumber +
								this.lineCount -
								P.endLineNumberExclusive;
						this.setState(L, D, k);
					}
					getMaxVisibleLineCountTop() {
						return this.lineCount - this.g.get();
					}
					getMaxVisibleLineCountBottom() {
						return this.lineCount - this.d.get();
					}
					showMoreAbove(P = 10, k) {
						const L = this.getMaxVisibleLineCountTop();
						this.d.set(Math.min(this.d.get() + P, L), k);
					}
					showMoreBelow(P = 10, k) {
						const L = this.lineCount - this.d.get();
						this.g.set(Math.min(this.g.get() + P, L), k);
					}
					showAll(P) {
						this.g.set(this.lineCount - this.d.get(), P);
					}
					showModifiedLine(P, k, L) {
						const D = P + 1 - (this.modifiedLineNumber + this.d.get()),
							M = this.modifiedLineNumber - this.g.get() + this.lineCount - P;
						(k === v.FromCloserSide && D < M) || k === v.FromTop
							? this.d.set(this.d.get() + D, L)
							: this.g.set(this.g.get() + M, L);
					}
					showOriginalLine(P, k, L) {
						const D = P - this.originalLineNumber,
							M = this.originalLineNumber + this.lineCount - P;
						(k === v.FromCloserSide && D < M) || k === v.FromTop
							? this.d.set(
									Math.min(
										this.d.get() + M - D,
										this.getMaxVisibleLineCountTop(),
									),
									L,
								)
							: this.g.set(
									Math.min(
										this.g.get() + D - M,
										this.getMaxVisibleLineCountBottom(),
									),
									L,
								);
					}
					collapseAll(P) {
						this.d.set(0, P), this.g.set(0, P);
					}
					setState(P, k, L) {
						(P = Math.max(Math.min(P, this.lineCount), 0)),
							(k = Math.max(Math.min(k, this.lineCount - P), 0)),
							this.d.set(P, L),
							this.g.set(k, L);
					}
				}
				e.$0xb = $;
				var v;
				(function (T) {
					(T[(T.FromCloserSide = 0)] = "FromCloserSide"),
						(T[(T.FromTop = 1)] = "FromTop"),
						(T[(T.FromBottom = 2)] = "FromBottom");
				})(v || (e.RevealPreference = v = {}));
				function S(T, P, k, L) {}
				function I(T, P, k, L) {}
			},
		),
		