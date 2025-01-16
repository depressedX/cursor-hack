define(de[2799], he([1, 0, 7, 29, 3, 46]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qvb = void 0);
			class C extends w.$1c {
				constructor() {
					super(),
						(this.a = null),
						(this.b = null),
						(this.c = this.D(new w.$0c())),
						(this.f = new Map()),
						(this.g = []),
						(this.g[E.EditorContributionInstantiation.Eager] = !1),
						(this.g[E.EditorContributionInstantiation.AfterFirstRender] = !1),
						(this.g[E.EditorContributionInstantiation.BeforeFirstInteraction] =
							!1),
						(this.g[E.EditorContributionInstantiation.Eventually] = !1);
				}
				initialize(m, r, u) {
					(this.a = m), (this.b = u);
					for (const a of r) {
						if (this.f.has(a.id)) {
							(0, i.$4)(
								new Error(
									`Cannot have two contributions with the same id ${a.id}`,
								),
							);
							continue;
						}
						this.f.set(a.id, a);
					}
					this.h(E.EditorContributionInstantiation.Eager),
						this.D(
							(0, t.$egb)((0, t.getWindow)(this.a.getDomNode()), () => {
								this.h(E.EditorContributionInstantiation.AfterFirstRender);
							}),
						),
						this.D(
							(0, t.$egb)((0, t.getWindow)(this.a.getDomNode()), () => {
								this.h(
									E.EditorContributionInstantiation.BeforeFirstInteraction,
								);
							}),
						),
						this.D(
							(0, t.$egb)(
								(0, t.getWindow)(this.a.getDomNode()),
								() => {
									this.h(E.EditorContributionInstantiation.Eventually);
								},
								5e3,
							),
						);
				}
				saveViewState() {
					const m = {};
					for (const [r, u] of this.c)
						typeof u.saveViewState == "function" && (m[r] = u.saveViewState());
					return m;
				}
				restoreViewState(m) {
					for (const [r, u] of this.c)
						typeof u.restoreViewState == "function" && u.restoreViewState(m[r]);
				}
				get(m) {
					return this.m(m), this.c.get(m) || null;
				}
				set(m, r) {
					this.c.set(m, r);
				}
				onBeforeInteractionEvent() {
					this.h(E.EditorContributionInstantiation.BeforeFirstInteraction);
				}
				onAfterModelAttached() {
					return (0, t.$egb)(
						(0, t.getWindow)(this.a?.getDomNode()),
						() => {
							this.h(E.EditorContributionInstantiation.AfterFirstRender);
						},
						50,
					);
				}
				h(m) {
					if (this.g[m]) return;
					this.g[m] = !0;
					const r = this.j(m);
					for (const u of r) this.m(u.id);
				}
				j(m) {
					const r = [];
					for (const [, u] of this.f) u.instantiation === m && r.push(u);
					return r;
				}
				m(m) {
					const r = this.f.get(m);
					if (r) {
						if ((this.f.delete(m), !this.b || !this.a))
							throw new Error(
								"Cannot instantiate contributions before being initialized!",
							);
						try {
							const u = this.b.createInstance(r.ctor, this.a);
							this.c.set(r.id, u),
								typeof u.restoreViewState == "function" &&
									r.instantiation !== E.EditorContributionInstantiation.Eager &&
									console.warn(
										`Editor contribution '${r.id}' should be eager instantiated because it uses saveViewState / restoreViewState.`,
									);
						} catch (u) {
							(0, i.$4)(u);
						}
					}
				}
			}
			e.$Qvb = C;
		}),
		define(
			de[953],
			he([1, 0, 20, 5, 6, 162, 196, 342, 200, 32]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fxb = e.$Exb = e.$Dxb = void 0),
					(e.$Dxb = (0, i.$Mi)("diffProviderFactoryService"));
				let a = class {
					constructor(n) {
						this.a = n;
					}
					createDiffProvider(n) {
						return this.a.createInstance(h, n);
					}
				};
				(e.$Exb = a),
					(e.$Exb = a = Ne([j(0, i.$Li)], a)),
					(0, t.$lK)(e.$Dxb, a, t.InstantiationType.Delayed);
				let h = class {
					static {
						u = this;
					}
					static {
						this.e = new Map();
					}
					constructor(n, g, p) {
						(this.f = g),
							(this.g = p),
							(this.a = new w.$re()),
							(this.onDidChange = this.a.event),
							(this.b = "advanced"),
							(this.d = void 0),
							this.setOptions(n);
					}
					dispose() {
						this.d?.dispose();
					}
					async computeDiff(n, g, p, o) {
						if (typeof this.b != "string")
							return this.b.computeDiff(n, g, p, o);
						if (n.isDisposed() || g.isDisposed())
							return { changes: [], identical: !0, quitEarly: !1, moves: [] };
						if (n.getLineCount() === 1 && n.getLineMaxColumn(1) === 1)
							return g.getLineCount() === 1 && g.getLineMaxColumn(1) === 1
								? { changes: [], identical: !0, quitEarly: !1, moves: [] }
								: {
										changes: [
											new d.$CL(
												new C.$rL(1, 2),
												new C.$rL(1, g.getLineCount() + 1),
												[
													new d.$DL(
														n.getFullModelRange(),
														g.getFullModelRange(),
													),
												],
											),
										],
										identical: !1,
										quitEarly: !1,
										moves: [],
									};
						const f = JSON.stringify([n.uri.toString(), g.uri.toString()]),
							b = JSON.stringify([
								n.id,
								g.id,
								n.getAlternativeVersionId(),
								g.getAlternativeVersionId(),
								JSON.stringify(p),
							]),
							s = u.e.get(f);
						if (s && s.context === b) return s.result;
						const l = E.$le.create(),
							y = await this.f.computeDiff(n.uri, g.uri, p, this.b),
							$ = l.elapsed();
						if (
							(this.g.publicLog2("diffEditor.computeDiff", {
								timeMs: $,
								timedOut: y?.quitEarly ?? !0,
								detectedMoves: p.computeMoves ? (y?.moves.length ?? 0) : -1,
							}),
							o.isCancellationRequested)
						)
							return { changes: [], identical: !1, quitEarly: !0, moves: [] };
						if (!y) throw new Error("no diff result available");
						return (
							u.e.size > 10 && u.e.delete(u.e.keys().next().value),
							u.e.set(f, { result: y, context: b }),
							y
						);
					}
					setOptions(n) {
						let g = !1;
						n.diffAlgorithm &&
							this.b !== n.diffAlgorithm &&
							(this.d?.dispose(),
							(this.d = void 0),
							(this.b = n.diffAlgorithm),
							typeof n.diffAlgorithm != "string" &&
								(this.d = n.diffAlgorithm.onDidChange(() => this.a.fire())),
							(g = !0)),
							g && this.a.fire();
					}
				};
				(e.$Fxb = h), (e.$Fxb = h = u = Ne([j(1, m.$Cxb), j(2, r.$km)], h));
			},
		),
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
		define(
			de[1641],
			he([
				1, 0, 7, 182, 14, 94, 3, 77, 319, 26, 28, 542, 954, 370, 38, 196, 48,
				17, 248, 74, 4, 5,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yyb = void 0);
				let $ = class extends C.$1c {
					static {
						y = this;
					}
					static {
						this.a = (0, d.observableValue)(y, () => ({
							dispose() {},
							getBreadcrumbItems(T, P) {
								return [];
							},
						}));
					}
					static setBreadcrumbsSourceFactory(T) {
						this.a.set(T, void 0);
					}
					get isUpdatingHiddenAreas() {
						return this.c;
					}
					constructor(T, P, k, L) {
						super(),
							(this.f = T),
							(this.g = P),
							(this.j = k),
							(this.n = L),
							(this.b = (0, m.$Yd)(this, (A) => {
								const R = this.f.modifiedModel.read(A),
									O = y.a.read(A);
								return !R || !O ? void 0 : O(R, this.n);
							})),
							(this.c = !1),
							this.D(
								this.f.original.onDidChangeCursorPosition((A) => {
									if (A.reason === f.CursorChangeReason.ContentFlush) return;
									const R = this.g.get();
									(0, d.transaction)((O) => {
										for (const B of this.f.original.getSelections() || [])
											R?.ensureOriginalLineIsVisible(
												B.getStartPosition().lineNumber,
												h.RevealPreference.FromCloserSide,
												O,
											),
												R?.ensureOriginalLineIsVisible(
													B.getEndPosition().lineNumber,
													h.RevealPreference.FromCloserSide,
													O,
												);
									});
								}),
							),
							this.D(
								this.f.modified.onDidChangeCursorPosition((A) => {
									if (A.reason === f.CursorChangeReason.ContentFlush) return;
									const R = this.g.get();
									(0, d.transaction)((O) => {
										for (const B of this.f.modified.getSelections() || [])
											R?.ensureModifiedLineIsVisible(
												B.getStartPosition().lineNumber,
												h.RevealPreference.FromCloserSide,
												O,
											),
												R?.ensureModifiedLineIsVisible(
													B.getEndPosition().lineNumber,
													h.RevealPreference.FromCloserSide,
													O,
												);
									});
								}),
							);
						const D = this.g.map((A, R) => {
							const O = A?.unchangedRegions.read(R) ?? [];
							return O.length === 1 &&
								O[0].modifiedLineNumber === 1 &&
								O[0].lineCount === this.f.modifiedModel.read(R)?.getLineCount()
								? []
								: O;
						});
						this.viewZones = (0, d.derivedWithStore)(this, (A, R) => {
							const O = this.b.read(A);
							if (!O) return { origViewZones: [], modViewZones: [] };
							const B = [],
								U = [],
								z = this.j.renderSideBySide.read(A),
								F = this.j.compactMode.read(A),
								x = D.read(A);
							for (let H = 0; H < x.length; H++) {
								const q = x[H];
								if (
									!q.shouldHideControls(A) &&
									!(F && (H === 0 || H === x.length - 1))
								)
									if (F) {
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenOriginalRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 12);
											B.push(G), R.add(new v(this.f.original, G, q, !z));
										}
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenModifiedRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 12);
											U.push(G), R.add(new v(this.f.modified, G, q));
										}
									} else {
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenOriginalRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 24);
											B.push(G),
												R.add(
													new S(
														this.f.original,
														G,
														q,
														q.originalUnchangedRange,
														!z,
														O,
														(K) =>
															this.g
																.get()
																.ensureModifiedLineIsVisible(
																	K,
																	h.RevealPreference.FromBottom,
																	void 0,
																),
														this.j,
													),
												);
										}
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenModifiedRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 24);
											U.push(G),
												R.add(
													new S(
														this.f.modified,
														G,
														q,
														q.modifiedUnchangedRange,
														!1,
														O,
														(K) =>
															this.g
																.get()
																.ensureModifiedLineIsVisible(
																	K,
																	h.RevealPreference.FromBottom,
																	void 0,
																),
														this.j,
													),
												);
										}
									}
							}
							return { origViewZones: B, modViewZones: U };
						});
						const M = {
								description: "unchanged lines",
								className: "diff-unchanged-lines",
								isWholeLine: !0,
							},
							N = {
								description: "Fold Unchanged",
								glyphMarginHoverMessage: new E.$cl(void 0, {
									isTrusted: !0,
									supportThemeIcons: !0,
								}).appendMarkdown((0, s.localize)(230, null)),
								glyphMarginClassName:
									"fold-unchanged " + r.ThemeIcon.asClassName(w.$ak.fold),
								zIndex: 10001,
							};
						this.D(
							(0, c.$xwb)(
								this.f.original,
								(0, d.derived)(this, (A) => {
									const R = D.read(A),
										O = R.map((B) => ({
											range: B.originalUnchangedRange.toInclusiveRange(),
											options: M,
										}));
									for (const B of R)
										B.shouldHideControls(A) &&
											O.push({
												range: o.$iL.fromPositions(
													new p.$hL(B.originalLineNumber, 1),
												),
												options: N,
											});
									return O;
								}),
							),
						),
							this.D(
								(0, c.$xwb)(
									this.f.modified,
									(0, d.derived)(this, (A) => {
										const R = D.read(A),
											O = R.map((B) => ({
												range: B.modifiedUnchangedRange.toInclusiveRange(),
												options: M,
											}));
										for (const B of R)
											B.shouldHideControls(A) &&
												O.push({
													range: g.$rL
														.ofLength(B.modifiedLineNumber, 1)
														.toInclusiveRange(),
													options: N,
												});
										return O;
									}),
								),
							),
							this.D(
								(0, d.autorun)((A) => {
									const R = D.read(A);
									this.c = !0;
									try {
										this.f.original.setHiddenAreas(
											R.map((O) =>
												O.getHiddenOriginalRange(A).toInclusiveRange(),
											).filter(u.$tg),
										),
											this.f.modified.setHiddenAreas(
												R.map((O) =>
													O.getHiddenModifiedRange(A).toInclusiveRange(),
												).filter(u.$tg),
											);
									} finally {
										this.c = !1;
									}
								}),
							),
							this.D(
								this.f.modified.onMouseUp((A) => {
									if (
										!A.event.rightButton &&
										A.target.position &&
										A.target.element?.className.includes("fold-unchanged")
									) {
										const R = A.target.position.lineNumber,
											O = this.g.get();
										if (!O) return;
										const B = O.unchangedRegions
											.get()
											.find((U) => U.modifiedUnchangedRange.includes(R));
										if (!B) return;
										B.collapseAll(void 0),
											A.event.stopPropagation(),
											A.event.preventDefault();
									}
								}),
							),
							this.D(
								this.f.original.onMouseUp((A) => {
									if (
										!A.event.rightButton &&
										A.target.position &&
										A.target.element?.className.includes("fold-unchanged")
									) {
										const R = A.target.position.lineNumber,
											O = this.g.get();
										if (!O) return;
										const B = O.unchangedRegions
											.get()
											.find((U) => U.originalUnchangedRange.includes(R));
										if (!B) return;
										B.collapseAll(void 0),
											A.event.stopPropagation(),
											A.event.preventDefault();
									}
								}),
							);
					}
				};
				(e.$Yyb = $), (e.$Yyb = $ = y = Ne([j(3, l.$Li)], $));
				class v extends c.$Dwb {
					constructor(T, P, k, L = !1) {
						const D = (0, t.h)("div.diff-hidden-lines-widget");
						super(T, P, D.root),
							(this.g = k),
							(this.n = L),
							(this.f = (0, t.h)("div.diff-hidden-lines-compact", [
								(0, t.h)("div.line-left", []),
								(0, t.h)("div.text@text", []),
								(0, t.h)("div.line-right", []),
							])),
							D.root.appendChild(this.f.root),
							this.n && this.f.root.replaceChildren(),
							this.D(
								(0, d.autorun)((M) => {
									if (!this.n) {
										const N = this.g.getHiddenModifiedRange(M).length,
											A = (0, s.localize)(231, null, N);
										this.f.text.innerText = A;
									}
								}),
							);
					}
				}
				class S extends c.$Dwb {
					constructor(T, P, k, L, D, M, N, A) {
						const R = (0, t.h)("div.diff-hidden-lines-widget");
						super(T, P, R.root),
							(this.g = T),
							(this.n = k),
							(this.q = L),
							(this.u = D),
							(this.w = M),
							(this.y = N),
							(this.C = A),
							(this.f = (0, t.h)("div.diff-hidden-lines", [
								(0, t.h)("div.top@top", { title: (0, s.localize)(232, null) }),
								(0, t.h)("div.center@content", { style: { display: "flex" } }, [
									(0, t.h)(
										"div@first",
										{
											style: {
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												flexShrink: "0",
											},
										},
										[
											(0, t.$)(
												"a",
												{
													title: (0, s.localize)(233, null),
													role: "button",
													onclick: () => {
														this.n.showAll(void 0);
													},
												},
												...(0, i.$Sib)("$(unfold)"),
											),
										],
									),
									(0, t.h)("div@others", {
										style: {
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										},
									}),
								]),
								(0, t.h)("div.bottom@bottom", {
									title: (0, s.localize)(234, null),
									role: "button",
								}),
							])),
							R.root.appendChild(this.f.root),
							this.u
								? (0, t.$hhb)(this.f.first)
								: this.D(
										(0, c.$Gwb)(this.f.first, {
											width: (0, a.$Uwb)(this.g).layoutInfoContentLeft,
										}),
									),
							this.D(
								(0, d.autorun)((B) => {
									const U =
										this.n.visibleLineCountTop.read(B) +
											this.n.visibleLineCountBottom.read(B) ===
										this.n.lineCount;
									this.f.bottom.classList.toggle("canMoveTop", !U),
										this.f.bottom.classList.toggle(
											"canMoveBottom",
											this.n.visibleLineCountBottom.read(B) > 0,
										),
										this.f.top.classList.toggle(
											"canMoveTop",
											this.n.visibleLineCountTop.read(B) > 0,
										),
										this.f.top.classList.toggle("canMoveBottom", !U);
									const z = this.n.isDragged.read(B),
										F = this.g.getDomNode();
									F &&
										(F.classList.toggle("draggingUnchangedRegion", !!z),
										z === "top"
											? (F.classList.toggle(
													"canMoveTop",
													this.n.visibleLineCountTop.read(B) > 0,
												),
												F.classList.toggle("canMoveBottom", !U))
											: z === "bottom"
												? (F.classList.toggle("canMoveTop", !U),
													F.classList.toggle(
														"canMoveBottom",
														this.n.visibleLineCountBottom.read(B) > 0,
													))
												: (F.classList.toggle("canMoveTop", !1),
													F.classList.toggle("canMoveBottom", !1)));
								}),
							);
						const O = this.g;
						this.D(
							(0, t.$0fb)(this.f.top, "mousedown", (B) => {
								if (B.button !== 0) return;
								this.f.top.classList.toggle("dragging", !0),
									this.f.root.classList.toggle("dragging", !0),
									B.preventDefault();
								const U = B.clientY;
								let z = !1;
								const F = this.n.visibleLineCountTop.get();
								this.n.isDragged.set("top", void 0);
								const x = (0, t.getWindow)(this.f.top),
									H = (0, t.$0fb)(x, "mousemove", (V) => {
										const K = V.clientY - U;
										z = z || Math.abs(K) > 2;
										const J = Math.round(
												K / O.getOption(n.EditorOption.lineHeight),
											),
											W = Math.max(
												0,
												Math.min(F + J, this.n.getMaxVisibleLineCountTop()),
											);
										this.n.visibleLineCountTop.set(W, void 0);
									}),
									q = (0, t.$0fb)(x, "mouseup", (V) => {
										z ||
											this.n.showMoreAbove(
												this.C.hideUnchangedRegionsRevealLineCount.get(),
												void 0,
											),
											this.f.top.classList.toggle("dragging", !1),
											this.f.root.classList.toggle("dragging", !1),
											this.n.isDragged.set(void 0, void 0),
											H.dispose(),
											q.dispose();
									});
							}),
						),
							this.D(
								(0, t.$0fb)(this.f.bottom, "mousedown", (B) => {
									if (B.button !== 0) return;
									this.f.bottom.classList.toggle("dragging", !0),
										this.f.root.classList.toggle("dragging", !0),
										B.preventDefault();
									const U = B.clientY;
									let z = !1;
									const F = this.n.visibleLineCountBottom.get();
									this.n.isDragged.set("bottom", void 0);
									const x = (0, t.getWindow)(this.f.bottom),
										H = (0, t.$0fb)(x, "mousemove", (V) => {
											const K = V.clientY - U;
											z = z || Math.abs(K) > 2;
											const J = Math.round(
													K / O.getOption(n.EditorOption.lineHeight),
												),
												W = Math.max(
													0,
													Math.min(
														F - J,
														this.n.getMaxVisibleLineCountBottom(),
													),
												),
												X =
													this.q.endLineNumberExclusive >
													O.getModel().getLineCount()
														? O.getContentHeight()
														: O.getTopForLineNumber(
																this.q.endLineNumberExclusive,
															);
											this.n.visibleLineCountBottom.set(W, void 0);
											const Y =
												this.q.endLineNumberExclusive >
												O.getModel().getLineCount()
													? O.getContentHeight()
													: O.getTopForLineNumber(
															this.q.endLineNumberExclusive,
														);
											O.setScrollTop(O.getScrollTop() + (Y - X));
										}),
										q = (0, t.$0fb)(x, "mouseup", (V) => {
											if ((this.n.isDragged.set(void 0, void 0), !z)) {
												const G = O.getTopForLineNumber(
													this.q.endLineNumberExclusive,
												);
												this.n.showMoreBelow(
													this.C.hideUnchangedRegionsRevealLineCount.get(),
													void 0,
												);
												const K = O.getTopForLineNumber(
													this.q.endLineNumberExclusive,
												);
												O.setScrollTop(O.getScrollTop() + (K - G));
											}
											this.f.bottom.classList.toggle("dragging", !1),
												this.f.root.classList.toggle("dragging", !1),
												H.dispose(),
												q.dispose();
										});
								}),
							),
							this.D(
								(0, d.autorun)((B) => {
									const U = [];
									if (!this.u) {
										const z = k.getHiddenModifiedRange(B).length,
											F = (0, s.localize)(235, null, z),
											x = (0, t.$)(
												"span",
												{ title: (0, s.localize)(236, null) },
												F,
											);
										x.classList.add("diff-hidden-lines-text"),
											x.addEventListener("dblclick", (V) => {
												V.button === 0 &&
													(V.preventDefault(), this.n.showAll(void 0));
											}),
											U.push(x);
										const H = this.n.getHiddenModifiedRange(B),
											q = this.w.getBreadcrumbItems(H, B);
										if (q.length > 0) {
											U.push((0, t.$)("span", void 0, "\xA0\xA0|\xA0\xA0"));
											for (let V = 0; V < q.length; V++) {
												const G = q[V],
													K = b.SymbolKinds.toIcon(G.kind),
													J = (0, t.h)(
														"div.breadcrumb-item",
														{
															style: { display: "flex", alignItems: "center" },
														},
														[
															(0, i.$Tib)(K),
															"\xA0",
															G.name,
															...(V === q.length - 1
																? []
																: [(0, i.$Tib)(w.$ak.chevronRight)]),
														],
													).root;
												U.push(J),
													(J.onclick = () => {
														this.y(G.startLineNumber);
													});
											}
										}
									}
									(0, t.$hhb)(this.f.others, ...U);
								}),
							);
					}
				}
			},
		),
		define(
			de[2800],
			he([1, 0, 127, 94, 27, 46, 104, 71, 64, 4, 8, 43, 2284]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dzb = void 0),
					(e.$dzb = new u.$5j("selectionAnchorSet", !1));
				let c = class {
					static {
						h = this;
					}
					static {
						this.ID = "editor.contrib.selectionAnchorController";
					}
					static get(b) {
						return b.getContribution(h.ID);
					}
					constructor(b, s) {
						(this.d = b),
							(this.b = e.$dzb.bindTo(s)),
							(this.c = b.onDidChangeModel(() => this.b.reset()));
					}
					setSelectionAnchor() {
						if (this.d.hasModel()) {
							const b = this.d.getPosition();
							this.d.changeDecorations((s) => {
								this.a && s.removeDecoration(this.a),
									(this.a = s.addDecoration(C.$kL.fromPositions(b, b), {
										description: "selection-anchor",
										stickiness:
											m.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										hoverMessage: new i.$cl().appendText(
											(0, r.localize)(859, null),
										),
										className: "selection-anchor",
									}));
							}),
								this.b.set(!!this.a),
								(0, t.$oib)((0, r.localize)(860, null, b.lineNumber, b.column));
						}
					}
					goToSelectionAnchor() {
						if (this.d.hasModel() && this.a) {
							const b = this.d.getModel().getDecorationRange(this.a);
							b && this.d.setPosition(b.getStartPosition());
						}
					}
					selectFromAnchorToCursor() {
						if (this.d.hasModel() && this.a) {
							const b = this.d.getModel().getDecorationRange(this.a);
							if (b) {
								const s = this.d.getPosition();
								this.d.setSelection(
									C.$kL.fromPositions(b.getStartPosition(), s),
								),
									this.cancelSelectionAnchor();
							}
						}
					}
					cancelSelectionAnchor() {
						if (this.a) {
							const b = this.a;
							this.d.changeDecorations((s) => {
								s.removeDecoration(b), (this.a = void 0);
							}),
								this.b.set(!1);
						}
					}
					dispose() {
						this.cancelSelectionAnchor(), this.c.dispose();
					}
				};
				c = h = Ne([j(1, u.$6j)], c);
				class n extends E.$itb {
					constructor() {
						super({
							id: "editor.action.setSelectionAnchor",
							label: (0, r.localize)(861, null),
							alias: "Set Selection Anchor",
							precondition: void 0,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyB),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyB),
								},
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(b, s) {
						c.get(s)?.setSelectionAnchor();
					}
				}
				class g extends E.$itb {
					constructor() {
						super({
							id: "editor.action.goToSelectionAnchor",
							label: (0, r.localize)(862, null),
							alias: "Go to Selection Anchor",
							precondition: e.$dzb,
						});
					}
					async run(b, s) {
						c.get(s)?.goToSelectionAnchor();
					}
				}
				class p extends E.$itb {
					constructor() {
						super({
							id: "editor.action.selectFromAnchorToCursor",
							label: (0, r.localize)(863, null),
							alias: "Select from Anchor to Cursor",
							precondition: e.$dzb,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyK),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyK),
								},
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(b, s) {
						c.get(s)?.selectFromAnchorToCursor();
					}
				}
				class o extends E.$itb {
					constructor() {
						super({
							id: "editor.action.cancelSelectionAnchor",
							label: (0, r.localize)(864, null),
							alias: "Cancel Selection Anchor",
							precondition: e.$dzb,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: w.KeyCode.Escape,
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(b, s) {
						c.get(s)?.cancelSelectionAnchor();
					}
				}
				(0, E.$qtb)(c.ID, c, E.EditorContributionInstantiation.Lazy),
					(0, E.$ntb)(n),
					(0, E.$ntb)(g),
					(0, E.$ntb)(p),
					(0, E.$ntb)(o);
			},
		),
		