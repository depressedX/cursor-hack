import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/collections.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/numbers.js';
import '../../../../../base/common/strings.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/model.js';
import '../../../../../editor/common/model/editStack.js';
import '../../../../../editor/common/model/intervalTree.js';
import '../../../../../editor/common/model/textModel.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/undoRedo/common/undoRedo.js';
import '../contrib/find/findModel.js';
import '../notebookBrowser.js';
import '../notebookViewEvents.js';
import './cellSelectionCollection.js';
import './codeCellViewModel.js';
import './markupCellViewModel.js';
import '../../common/notebookCommon.js';
import '../../common/notebookExecutionStateService.js';
import '../../common/notebookRange.js';
define(
			de[4098],
			he([
				1, 0, 456, 29, 6, 3, 201, 37, 199, 17, 64, 780, 946, 122, 42, 5, 155,
				1030, 108, 990, 3106, 482, 855, 70, 190, 442,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*collections*/,
				i /*errors*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*numbers*/,
				d /*strings*/,
				m /*bulkEditService*/,
				r /*range*/,
				u /*model*/,
				a /*editStack*/,
				h /*intervalTree*/,
				c /*textModel*/,
				n /*resolverService*/,
				g /*instantiation*/,
				p /*undoRedo*/,
				o /*findModel*/,
				f /*notebookBrowser*/,
				b /*notebookViewEvents*/,
				s /*cellSelectionCollection*/,
				l /*codeCellViewModel*/,
				y /*markupCellViewModel*/,
				$ /*notebookCommon*/,
				v /*notebookExecutionStateService*/,
				S /*notebookRange*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r2b = void 0),
					(e.$s2b = M),
					(d = mt(d));
				const I = () => {
					throw new Error("Invalid change accessor");
				};
				class T {
					constructor() {
						this.a = new h.$JU();
					}
					intervalSearch(A, R, O, B, U, z = !1) {
						return this.a.intervalSearch(A, R, O, B, U, z);
					}
					search(A, R, O, B, U) {
						return this.a.search(A, R, B, U);
					}
					collectNodesFromOwner(A) {
						return this.a.collectNodesFromOwner(A);
					}
					collectNodesPostOrder() {
						return this.a.collectNodesPostOrder();
					}
					insert(A) {
						this.a.insert(A);
					}
					delete(A) {
						this.a.delete(A);
					}
					resolveNode(A, R) {
						this.a.resolveNode(A, R);
					}
					acceptReplace(A, R, O, B) {
						this.a.acceptReplace(A, R, O, B);
					}
				}
				const P = [
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-always-grows-when-typing-at-edges",
						stickiness: u.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
					}),
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-never-grows-when-typing-at-edges",
						stickiness: u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					}),
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-grows-only-when-typing-before",
						stickiness: u.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
					}),
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-grows-only-when-typing-after",
						stickiness: u.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
					}),
				];
				function k(N) {
					return N instanceof c.$eY ? N : c.$eY.createDynamic(N);
				}
				let L = 0,
					D = class extends E.$1c {
						get options() {
							return this.L;
						}
						get onDidChangeOptions() {
							return this.c.event;
						}
						get viewCells() {
							return this.f;
						}
						get length() {
							return this.f.length;
						}
						get notebookDocument() {
							return this.H;
						}
						get uri() {
							return this.H.uri;
						}
						get metadata() {
							return this.H.metadata;
						}
						get onDidChangeViewCells() {
							return this.h.event;
						}
						get lastNotebookEditResource() {
							return this.j.length ? this.j[this.j.length - 1] : null;
						}
						get layoutInfo() {
							return this.J;
						}
						get onDidChangeSelection() {
							return this.m.event;
						}
						get q() {
							const A = new Set(),
								R = [];
							return (
								(0, S.$j6)(this.n.selections)
									.map((O) => (O < this.length ? this.cellAt(O) : void 0))
									.forEach((O) => {
										O && !A.has(O.handle) && R.push(O.handle);
									}),
								R
							);
						}
						set q(A) {
							const R = A.map((O) => this.f.findIndex((B) => B.handle === O));
							this.n.setSelections((0, S.$i6)(R), !0, "model");
						}
						get focused() {
							return this.C;
						}
						constructor(A, R, O, B, U, z, F, x, H, q) {
							super(),
								(this.viewType = A),
								(this.H = R),
								(this.I = O),
								(this.J = B),
								(this.L = U),
								(this.M = z),
								(this.N = F),
								(this.O = x),
								(this.P = H),
								(this.a = this.D(new E.$Zc())),
								(this.b = new Map()),
								(this.c = this.D(new w.$re())),
								(this.f = []),
								(this.h = this.D(new w.$re())),
								(this.j = []),
								(this.m = this.D(new w.$re())),
								(this.n = this.D(new s.$q2b())),
								(this.r = new T()),
								(this.s = Object.create(null)),
								(this.t = 0),
								(this.w = null),
								(this.y = new w.$re()),
								(this.onDidFoldingStateChanged = this.y.event),
								(this.z = []),
								(this.C = !0),
								(this.F = new Map()),
								(this.G = new Map()),
								L++,
								(this.id = "$notebookViewModel" + L),
								(this.u = d.$fg(L)),
								(this.g = !!this.options.inRepl);
							const V = (K, J) => {
								const W = K.map((ne) => [
									ne[0],
									ne[1],
									ne[2].map((ee) => M(this.M, this, ee, this.I)),
								]);
								W.reverse().forEach((ne) => {
									const ee = this.f.splice(ne[0], ne[1], ...ne[2]);
									this.r.acceptReplace(ne[0], ne[1], ne[2].length, !0),
										ee.forEach((_) => {
											this.b.delete(_.handle), _.dispose();
										}),
										ne[2].forEach((_) => {
											this.b.set(_.handle, _), this.a.add(_);
										});
								});
								const X = this.q;
								this.h.fire({ synchronous: J, splices: W });
								let Y = [];
								if (X.length) {
									const ne = X[0],
										ee = this.f.indexOf(this.getCellByHandle(ne));
									Y = [ne];
									let _ = 0;
									for (let te = 0; te < W.length; te++) {
										const Q = W[0];
										if (Q[0] + Q[1] <= ee) {
											_ += Q[2].length - Q[1];
											continue;
										}
										if (Q[0] > ee) {
											Y = [ne];
											break;
										}
										if (Q[0] + Q[1] > ee) {
											Y = [this.f[Q[0] + _].handle];
											break;
										}
									}
								}
								const ie = Y.map((ne) =>
									this.f.findIndex((ee) => ee.handle === ne),
								);
								this.n.setState(
									(0, S.$i6)([ie[0]])[0],
									(0, S.$i6)(ie),
									!0,
									"model",
								);
							};
							this.D(
								this.H.onDidChangeContent((K) => {
									for (let J = 0; J < K.rawEvents.length; J++) {
										const W = K.rawEvents[J];
										let X = [];
										const Y = K.synchronous ?? !0;
										if (
											W.kind === $.NotebookCellsChangeType.ModelChange ||
											W.kind === $.NotebookCellsChangeType.Initialize
										) {
											(X = W.changes), V(X, Y);
											continue;
										} else if (W.kind === $.NotebookCellsChangeType.Move)
											V([[W.index, W.length, []]], Y),
												V([[W.newIdx, 0, W.cells]], Y);
										else continue;
									}
								}),
							),
								this.D(
									this.H.onDidChangeContent((K) => {
										K.rawEvents.forEach((J) => {
											J.kind ===
												$.NotebookCellsChangeType.ChangeDocumentMetadata &&
												this.I.eventDispatcher.emit([
													new b.$JIb(this.H.metadata),
												]);
										}),
											K.endSelectionState &&
												this.updateSelectionsState(K.endSelectionState);
									}),
								),
								this.D(
									this.I.eventDispatcher.onDidChangeLayout((K) => {
										(this.J = K.value),
											this.f.forEach((J) => {
												J.cellKind === $.CellKind.Markup
													? (K.source.width || K.source.fontInfo) &&
														J.layoutChange({
															outerWidth: K.value.width,
															font: K.value.fontInfo,
														})
													: K.source.width !== void 0 &&
														J.layoutChange({
															outerWidth: K.value.width,
															font: K.value.fontInfo,
														});
											});
									}),
								),
								this.D(
									this.I.notebookOptions.onDidChangeOptions((K) => {
										for (let J = 0; J < this.length; J++)
											this.f[J].updateOptions(K);
									}),
								),
								this.D(
									q.onDidChangeExecution((K) => {
										if (K.type !== v.NotebookExecutionType.cell) return;
										const J = this.getCellByHandle(K.cellHandle);
										J instanceof l.$31b && J.updateExecutionState(K);
									}),
								),
								this.D(
									this.n.onDidChangeSelection((K) => {
										this.m.fire(K);
									}),
								);
							const G = this.g ? this.H.cells.length - 1 : this.H.cells.length;
							for (let K = 0; K < G; K++)
								this.f.push(M(this.M, this, this.H.cells[K], this.I));
							this.f.forEach((K) => {
								this.b.set(K.handle, K);
							});
						}
						updateOptions(A) {
							(this.L = { ...this.L, ...A }), this.c.fire();
						}
						getFocus() {
							return this.n.focus;
						}
						getSelections() {
							return this.n.selections;
						}
						setEditorFocus(A) {
							this.C = A;
						}
						getCellsBefore(A) {
							const R = this.getCellIndex(A);
							if (R !== -1) return this.f.slice(0, R);
						}
						getCellsAfter(A) {
							const R = this.getCellIndex(A);
							if (R !== -1) return this.f.slice(R + 1);
						}
						validateRange(A) {
							if (!A) return null;
							const R = (0, C.$Zm)(A.start, 0, this.length),
								O = (0, C.$Zm)(A.end, 0, this.length);
							return R <= O ? { start: R, end: O } : { start: O, end: R };
						}
						updateSelectionsState(A, R = "model") {
							if (this.C || R === "model")
								if (A.kind === $.SelectionStateType.Handle) {
									const O =
											A.primary !== null
												? this.getCellIndexByHandle(A.primary)
												: null,
										B =
											O !== null
												? this.validateRange({ start: O, end: O + 1 })
												: null,
										U = (0, S.$i6)(
											A.selections.map((z) => this.getCellIndexByHandle(z)),
										)
											.map((z) => this.validateRange(z))
											.filter((z) => z !== null);
									this.n.setState(B, (0, S.$k6)(U), !0, R);
								} else {
									const O = this.validateRange(A.focus),
										B = A.selections
											.map((U) => this.validateRange(U))
											.filter((U) => U !== null);
									this.n.setState(O, (0, S.$k6)(B), !0, R);
								}
						}
						getFoldingStartIndex(A) {
							if (!this.w) return -1;
							const R = this.w.findRange(A + 1);
							return this.w.getStartLineNumber(R) - 1;
						}
						getFoldingState(A) {
							if (!this.w) return f.CellFoldingState.None;
							const R = this.w.findRange(A + 1);
							return this.w.getStartLineNumber(R) - 1 !== A
								? f.CellFoldingState.None
								: this.w.isCollapsed(R)
									? f.CellFoldingState.Collapsed
									: f.CellFoldingState.Expanded;
						}
						getFoldedLength(A) {
							if (!this.w) return 0;
							const R = this.w.findRange(A + 1),
								O = this.w.getStartLineNumber(R) - 1;
							return this.w.getEndLineNumber(R) - 1 - O;
						}
						updateFoldingRanges(A) {
							this.w = A;
							let R = !1;
							const O = [];
							let B = 0,
								U = 0,
								z = Number.MAX_VALUE,
								F = -1;
							for (; B < A.length; B++) {
								if (!A.isCollapsed(B)) continue;
								const x = A.getStartLineNumber(B) + 1,
									H = A.getEndLineNumber(B);
								(z <= x && H <= F) ||
									(!R &&
									U < this.z.length &&
									this.z[U].start + 1 === x &&
									this.z[U].end + 1 === H
										? (O.push(this.z[U]), U++)
										: ((R = !0), O.push({ start: x - 1, end: H - 1 })),
									(z = x),
									(F = H));
							}
							(R || U < this.z.length) && ((this.z = O), this.y.fire()),
								this.f.forEach((x) => {
									x.cellKind === $.CellKind.Markup &&
										x.triggerFoldingStateChange();
								});
						}
						getHiddenRanges() {
							return this.z;
						}
						getCellByHandle(A) {
							return this.b.get(A);
						}
						getCellIndexByHandle(A) {
							return this.f.findIndex((R) => R.handle === A);
						}
						getCellIndex(A) {
							return this.f.indexOf(A);
						}
						cellAt(A) {
							return this.f[A];
						}
						getCellsInRange(A) {
							if (!A) return this.f.slice(0);
							const R = this.validateRange(A);
							if (R) {
								const O = [];
								for (let B = R.start; B < R.end; B++) O.push(this.f[B]);
								return O;
							}
							return [];
						}
						getNearestVisibleCellIndexUpwards(A) {
							for (let R = this.z.length - 1; R >= 0; R--) {
								const O = this.z[R],
									B = O.start - 1,
									U = O.end;
								if (!(B > A)) {
									if (B <= A && U >= A) return A;
									break;
								}
							}
							return A;
						}
						getNextVisibleCellIndex(A) {
							for (let R = 0; R < this.z.length; R++) {
								const O = this.z[R],
									B = O.start - 1,
									U = O.end;
								if (!(U < A)) {
									if (B <= A) return U + 1;
									break;
								}
							}
							return A + 1;
						}
						getPreviousVisibleCellIndex(A) {
							for (let R = this.z.length - 1; R >= 0; R--) {
								const O = this.z[R],
									B = O.start - 1;
								if (O.end < A) return A;
								if (B <= A) return B;
							}
							return A;
						}
						hasCell(A) {
							return this.b.has(A.handle);
						}
						getVersionId() {
							return this.H.versionId;
						}
						getAlternativeId() {
							return this.H.alternativeVersionId;
						}
						getTrackedRange(A) {
							return this.Q(A);
						}
						Q(A) {
							const R = this.s[A];
							if (!R) return null;
							const O = this.getVersionId();
							return (
								R.cachedVersionId !== O && this.r.resolveNode(R, O),
								R.range === null
									? {
											start: R.cachedAbsoluteStart - 1,
											end: R.cachedAbsoluteEnd - 1,
										}
									: {
											start: R.range.startLineNumber - 1,
											end: R.range.endLineNumber - 1,
										}
							);
						}
						setTrackedRange(A, R, O) {
							const B = A ? this.s[A] : null;
							return B
								? R
									? (this.r.delete(B),
										B.reset(
											this.getVersionId(),
											R.start,
											R.end + 1,
											new r.$iL(R.start + 1, 1, R.end + 1, 1),
										),
										B.setOptions(P[O]),
										this.r.insert(B),
										B.id)
									: (this.r.delete(B), delete this.s[B.id], null)
								: R
									? this.R(
											0,
											[],
											[
												{
													range: new r.$iL(R.start + 1, 1, R.end + 1, 1),
													options: P[O],
												},
											],
										)[0]
									: null;
						}
						R(A, R, O) {
							const B = this.getVersionId(),
								U = R.length;
							let z = 0;
							const F = O.length;
							let x = 0;
							const H = new Array(F);
							for (; z < U || x < F; ) {
								let q = null;
								if (z < U) {
									do q = this.s[R[z++]];
									while (!q && z < U);
									q && this.r.delete(q);
								}
								if (x < F) {
									if (!q) {
										const J = ++this.t,
											W = `${this.u};${J}`;
										(q = new h.$HU(W, 0, 0)), (this.s[W] = q);
									}
									const V = O[x],
										G = V.range,
										K = k(V.options);
									(q.ownerId = A),
										q.reset(
											B,
											G.startLineNumber,
											G.endLineNumber,
											r.$iL.lift(G),
										),
										q.setOptions(K),
										this.r.insert(q),
										(H[x] = q.id),
										x++;
								} else q && delete this.s[q.id];
							}
							return H;
						}
						deltaCellDecorations(A, R) {
							A.forEach((B) => {
								const U = this.F.get(B);
								U !== void 0 &&
									(this.getCellByHandle(U)?.deltaCellDecorations([B], []),
									this.F.delete(B));
							});
							const O = [];
							return (
								R.forEach((B) => {
									const z =
										this.getCellByHandle(B.handle)?.deltaCellDecorations(
											[],
											[B.options],
										) || [];
									z.forEach((F) => {
										this.F.set(F, B.handle);
									}),
										O.push(...z);
								}),
								O
							);
						}
						deltaCellStatusBarItems(A, R) {
							const O = (0, t.$e)(A, (U) => this.G.get(U) ?? -1),
								B = [];
							R.forEach((U) => {
								const z = this.getCellByHandle(U.handle),
									F = O[U.handle] ?? [];
								delete O[U.handle], F.forEach((H) => this.G.delete(H));
								const x = z?.deltaCellStatusBarItems(F, U.items) || [];
								x.forEach((H) => {
									this.G.set(H, U.handle);
								}),
									B.push(...x);
							});
							for (const U in O) {
								const z = parseInt(U),
									F = O[z];
								this.getCellByHandle(z)?.deltaCellStatusBarItems(F, []),
									F.forEach((H) => this.G.delete(H));
							}
							return B;
						}
						nearestCodeCellIndex(A) {
							const R = this.viewCells
								.slice(0, A)
								.reverse()
								.findIndex((O) => O.cellKind === $.CellKind.Code);
							if (R > -1) return A - R - 1;
							{
								const O = this.viewCells
									.slice(A + 1)
									.findIndex((B) => B.cellKind === $.CellKind.Code);
								return O > -1 ? A + 1 + O : -1;
							}
						}
						getEditorViewState() {
							const A = {},
								R = {},
								O = {},
								B = {};
							this.f.forEach((z, F) => {
								z.getEditState() === f.CellEditState.Editing && (A[F] = !0),
									z.isInputCollapsed && (R[F] = !0),
									z instanceof l.$31b && z.isOutputCollapsed && (O[F] = !0),
									z.lineNumbers !== "inherit" && (B[F] = z.lineNumbers);
							});
							const U = {};
							return (
								this.f
									.map((z) => ({
										handle: z.model.handle,
										state: z.saveEditorViewState(),
									}))
									.forEach((z, F) => {
										z.state && (U[F] = z.state);
									}),
								{
									editingCells: A,
									editorViewStates: U,
									cellLineNumberStates: B,
									collapsedInputCells: R,
									collapsedOutputCells: O,
								}
							);
						}
						restoreEditorViewState(A) {
							A &&
								this.f.forEach((R, O) => {
									const B = A.editingCells && A.editingCells[O],
										U = A.editorViewStates && A.editorViewStates[O];
									R.updateEditState(
										B ? f.CellEditState.Editing : f.CellEditState.Preview,
										"viewState",
									);
									const z = A.cellTotalHeights ? A.cellTotalHeights[O] : void 0;
									R.restoreEditorViewState(U, z),
										A.collapsedInputCells &&
											A.collapsedInputCells[O] &&
											(R.isInputCollapsed = !0),
										A.collapsedOutputCells &&
											A.collapsedOutputCells[O] &&
											R instanceof l.$31b &&
											(R.isOutputCollapsed = !0),
										A.cellLineNumberStates &&
											A.cellLineNumberStates[O] &&
											(R.lineNumbers = A.cellLineNumberStates[O]);
								});
						}
						changeModelDecorations(A) {
							const R = { deltaDecorations: (B, U) => this.S(B, U) };
							let O = null;
							try {
								O = A(R);
							} catch (B) {
								(0, i.$4)(B);
							}
							return (R.deltaDecorations = I), O;
						}
						S(A, R) {
							const O = new Map();
							A.forEach((U) => {
								const z = U.ownerId;
								if (!O.has(z)) {
									const x = this.f.find((H) => H.handle === z);
									x &&
										O.set(z, {
											cell: x,
											oldDecorations: [],
											newDecorations: [],
										});
								}
								const F = O.get(z);
								F && (F.oldDecorations = U.decorations);
							}),
								R.forEach((U) => {
									const z = U.ownerId;
									if (!O.has(z)) {
										const x = this.f.find((H) => H.handle === z);
										x &&
											O.set(z, {
												cell: x,
												oldDecorations: [],
												newDecorations: [],
											});
									}
									const F = O.get(z);
									F && (F.newDecorations = U.decorations);
								});
							const B = [];
							return (
								O.forEach((U, z) => {
									const F = U.cell.deltaModelDecorations(
										U.oldDecorations,
										U.newDecorations,
									);
									B.push({ ownerId: z, decorations: F });
								}),
								B
							);
						}
						find(A, R) {
							const O = [];
							let B = [];
							if (
								R.findScope &&
								(R.findScope.findScopeType === $.NotebookFindScopeType.Cells ||
									R.findScope.findScopeType === $.NotebookFindScopeType.Text)
							) {
								const U =
									R.findScope.selectedCellRanges
										?.map((F) => this.validateRange(F))
										.filter((F) => !!F) ?? [];
								B = (0, S.$j6)(U).map((F) => this.f[F]);
							} else B = this.f;
							return (
								B.forEach((U, z) => {
									const F = U.startFind(A, R);
									F && O.push(new o.$o2b(F.cell, z, F.contentMatches, []));
								}),
								O.filter((U) =>
									U.cell.cellKind === $.CellKind.Code
										? R.includeCodeInput
										: (U.cell.getEditState() === f.CellEditState.Editing ||
												!R.includeMarkupPreview) &&
											R.includeMarkupInput,
								)
							);
						}
						replaceOne(A, R, O) {
							const B = A;
							return (
								this.j.push(B.uri),
								B.resolveTextModel().then(() => {
									this.N.apply([new m.$tzb(A.uri, { range: R, text: O })], {
										quotableLabel: "Notebook Replace",
									});
								})
							);
						}
						async replaceAll(A, R) {
							if (!A.length) return;
							const O = [];
							return (
								this.j.push(A[0].cell.uri),
								A.forEach((B) => {
									B.contentMatches.forEach((U, z) => {
										O.push({
											versionId: void 0,
											textEdit: { range: U.range, text: R[z] },
											resource: B.cell.uri,
										});
									});
								}),
								Promise.all(A.map((B) => B.cell.resolveTextModel())).then(
									async () => {
										this.N.apply(
											{ edits: O },
											{ quotableLabel: "Notebook Replace All" },
										);
									},
								)
							);
						}
						async U(A, R) {
							const O = this.f.filter((U) => A.matchesResource(U.uri)),
								B = await Promise.all(
									O.map((U) => this.P.createModelReference(U.uri)),
								);
							await R(), B.forEach((U) => U.dispose());
						}
						async undo() {
							const A = this.O.getElements(this.uri),
								R = A.past.length ? A.past[A.past.length - 1] : void 0;
							return (R && R instanceof a.$wU) || R instanceof a.$xU
								? (await this.U(R, async () => {
										await this.O.undo(this.uri);
									}),
									R instanceof a.$wU ? [R.resource] : R.resources)
								: (await this.O.undo(this.uri), []);
						}
						async redo() {
							const R = this.O.getElements(this.uri).future[0];
							return (R && R instanceof a.$wU) || R instanceof a.$xU
								? (await this.U(R, async () => {
										await this.O.redo(this.uri);
									}),
									R instanceof a.$wU ? [R.resource] : R.resources)
								: (await this.O.redo(this.uri), []);
						}
						equal(A) {
							return this.H === A;
						}
						dispose() {
							this.a.clear(),
								this.f.forEach((A) => {
									A.dispose();
								}),
								super.dispose();
						}
					};
				(e.$r2b = D),
					(e.$r2b = D =
						Ne(
							[
								j(5, g.$Li),
								j(6, m.$rzb),
								j(7, p.$GN),
								j(8, n.$MO),
								j(9, v.$d6),
							],
							D,
						));
				function M(N, A, R, O) {
					return R.cellKind === $.CellKind.Code
						? N.createInstance(l.$31b, A.viewType, R, A.layoutInfo, O)
						: N.createInstance(y.$41b, A.viewType, R, A.layoutInfo, A, O);
				}
			},
		)
