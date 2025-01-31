import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/list/list.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/platform.js';
import '../../../../../editor/common/model.js';
import '../../../../../editor/common/model/prefixSumComputer.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/list/browser/listService.js';
import '../notebookBrowser.js';
import '../../common/notebookCommon.js';
import '../../common/notebookRange.js';
import '../../common/notebookContextKeys.js';
import '../../../../../base/common/numbers.js';
import '../../../../../base/browser/fastDomNode.js';
import '../viewModel/markupCellViewModel.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './notebookCellListView.js';
import '../../common/notebookExecutionStateService.js';
import './notebookCellAnchor.js';
import '../viewParts/notebookViewZones.js';
define(
			de[1962],
			he([
				1, 0, 7, 431, 6, 3, 12, 64, 589, 10, 93, 108, 70, 442, 176, 201, 194,
				855, 5, 3102, 190, 3501, 3111,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*list*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*platform*/,
				d /*model*/,
				m /*prefixSumComputer*/,
				r /*configuration*/,
				u /*listService*/,
				a /*notebookBrowser*/,
				h /*notebookCommon*/,
				c /*notebookRange*/,
				n /*notebookContextKeys*/,
				g /*numbers*/,
				p /*fastDomNode*/,
				o /*markupCellViewModel*/,
				f /*instantiation*/,
				b /*notebookCellListView*/,
				s /*notebookExecutionStateService*/,
				l /*notebookCellAnchor*/,
				y /*notebookViewZones*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C2b = e.$B2b = e.$A2b = void 0),
					(t = mt(t));
				var $;
				(function (k) {
					(k[(k.Top = 0)] = "Top"),
						(k[(k.Center = 1)] = "Center"),
						(k[(k.Bottom = 2)] = "Bottom"),
						(k[(k.NearTop = 3)] = "NearTop");
				})($ || ($ = {}));
				function v(k, L) {
					if (!L.length) return k;
					let D = 0,
						M = 0;
					const N = [];
					for (; D < k.length && M < L.length; )
						D < L[M].start && N.push(...k.slice(D, L[M].start)),
							(D = L[M].end + 1),
							M++;
					return D < k.length && N.push(...k.slice(D)), N;
				}
				e.$A2b = 5e3;
				function S(k) {
					const L = 0 - (parseInt(k.style.top, 10) || 0);
					return L >= 0 && L <= e.$A2b * 2;
				}
				let I = class extends u.$yMb {
					get onWillScroll() {
						return this.k.onWillScroll;
					}
					get rowsContainer() {
						return this.k.containerDomNode;
					}
					get scrollableElement() {
						return this.k.scrollableElementDomNode;
					}
					get viewModel() {
						return this.ab;
					}
					get visibleRanges() {
						return this.eb;
					}
					set visibleRanges(L) {
						(0, c.$l6)(this.eb, L) || ((this.eb = L), this.db.fire());
					}
					get isDisposed() {
						return this.fb;
					}
					get webviewElement() {
						return this.hb;
					}
					get inRenderingTransaction() {
						return this.k.inRenderingTransaction;
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						super(L, D, N, A, O, R, B, U, z),
							(this.ib = L),
							(this.jb = M),
							(this.R = []),
							(this.S = new E.$Zc()),
							(this.U = new E.$Zc()),
							(this.X = this.S.add(new w.$re())),
							(this.onDidRemoveOutputs = this.X.event),
							(this.Y = this.S.add(new w.$re())),
							(this.onDidHideOutputs = this.Y.event),
							(this.Z = this.S.add(new w.$re())),
							(this.onDidRemoveCellsFromView = this.Z.event),
							(this.ab = null),
							(this.bb = []),
							(this.cb = null),
							(this.db = this.S.add(new w.$re())),
							(this.onDidChangeVisibleRanges = this.db.event),
							(this.eb = []),
							(this.fb = !1),
							(this.gb = !1),
							(this.hb = null),
							n.$qJb.bindTo(this.contextKeyService).set(!0),
							(this.R = this.getFocusedElements()),
							this.S.add(
								this.onDidChangeFocus((J) => {
									this.R.forEach((W) => {
										J.elements.indexOf(W) < 0 && W.onDeselect();
									}),
										(this.R = J.elements);
								}),
							);
						const x = h.$16.bindTo(R);
						x.set("none");
						const H = h.$26.bindTo(R);
						H.set("none");
						const q = this.S.add(new E.$2c()),
							V = this.S.add(new E.$2c());
						this.W = new l.$y2b(F, U, this.onDidScroll);
						const G = (J) => {
							switch (J.cursorAtBoundary()) {
								case a.CursorAtBoundary.Both:
									x.set("both");
									break;
								case a.CursorAtBoundary.Top:
									x.set("top");
									break;
								case a.CursorAtBoundary.Bottom:
									x.set("bottom");
									break;
								default:
									x.set("none");
									break;
							}
							switch (J.cursorAtLineBoundary()) {
								case a.CursorAtLineBoundary.Both:
									H.set("both");
									break;
								case a.CursorAtLineBoundary.Start:
									H.set("start");
									break;
								case a.CursorAtLineBoundary.End:
									H.set("end");
									break;
								default:
									H.set("none");
									break;
							}
						};
						this.S.add(
							this.onDidChangeFocus((J) => {
								if (J.elements.length) {
									const W = J.elements[0];
									(q.value = W.onDidChangeState((X) => {
										X.selectionChanged && G(W);
									})),
										(V.value = W.onDidChangeEditorAttachState(() => {
											W.editorAttached && G(W);
										})),
										G(W);
									return;
								}
								x.set("none");
							}),
						),
							this.S.add(
								this.k.onMouseDblClick(() => {
									const J = this.getFocusedElements()[0];
									if (
										J &&
										J.cellKind === h.CellKind.Markup &&
										!J.isInputCollapsed &&
										!this.ab?.options.isReadOnly
									) {
										const W = this.ob(J);
										W >= 0 && this.qb(W),
											J.updateEditState(a.CellEditState.Editing, "dbclick"),
											(J.focusMode = a.CellFocusMode.Editor);
									}
								}),
							);
						const K = () => {
							if (!this.k.length) return;
							const J = this.getViewScrollTop(),
								W = this.getViewScrollBottom();
							if (J >= W) return;
							const X = (0, g.$Zm)(this.k.indexAt(J), 0, this.k.length - 1),
								Y = this.k.element(X),
								ie = this.ab.getCellIndex(Y),
								ne = (0, g.$Zm)(this.k.indexAt(W), 0, this.k.length - 1),
								ee = this.k.element(ne),
								_ = this.ab.getCellIndex(ee);
							_ - ie === ne - X
								? (this.visibleRanges = [{ start: ie, end: _ + 1 }])
								: (this.visibleRanges = this.nb(X, ie, ne, _));
						};
						this.S.add(
							this.k.onDidChangeContentHeight(() => {
								this.gb &&
									t.$hgb(t.getWindow(D), () => {
										K();
									}),
									K();
							}),
						),
							this.S.add(
								this.k.onDidScroll(() => {
									this.gb &&
										t.$hgb(t.getWindow(D), () => {
											K();
										}),
										K();
								}),
							);
					}
					C(L, D, M, N) {
						const A = new b.$x2b(L, D, M, N);
						return (this.s = new y.$z2b(A, this)), A;
					}
					_getView() {
						return this.k;
					}
					attachWebview(L) {
						(L.style.top = `-${e.$A2b}px`),
							this.rowsContainer.insertAdjacentElement("afterbegin", L),
							(this.hb = new p.$Rhb(L));
					}
					elementAt(L) {
						if (!this.k.length) return;
						const D = this.k.indexAt(L),
							M = (0, g.$Zm)(D, 0, this.k.length - 1);
						return this.element(M);
					}
					elementHeight(L) {
						const D = this.ob(L);
						if (D === void 0 || D < 0 || D >= this.length)
							throw (this.ob(L), new i.$Bib(this.ib, `Invalid index ${D}`));
						return this.k.elementHeight(D);
					}
					detachViewModel() {
						this.U.clear(), (this.ab = null), (this.cb = null);
					}
					attachViewModel(L) {
						(this.ab = L),
							this.U.add(
								L.onDidChangeViewCells((A) => {
									if (this.fb) return;
									this.s.onCellsChanged(A);
									const R = this.bb
											.map((F) => this.ab.getTrackedRange(F))
											.filter((F) => F !== null),
										O = v(this.ab.viewCells, R),
										B = [],
										U = new Set();
									for (let F = 0; F < this.length; F++)
										B.push(this.element(F)),
											U.add(this.element(F).uri.toString());
									const z = (0, h.$Z6)(B, O, (F) => U.has(F.uri.toString()));
									A.synchronous
										? this.lb(z)
										: this.U.add(
												t.$hgb(t.getWindow(this.rowsContainer), () => {
													this.fb || this.lb(z);
												}),
											);
								}),
							),
							this.U.add(
								L.onDidChangeSelection((A) => {
									if (A === "view") return;
									const R = (0, c.$j6)(L.getSelections())
										.map((B) => L.cellAt(B))
										.filter((B) => !!B)
										.map((B) => this.ob(B));
									this.setSelection(R, void 0, !0);
									const O = (0, c.$j6)([L.getFocus()])
										.map((B) => L.cellAt(B))
										.filter((B) => !!B)
										.map((B) => this.ob(B));
									O.length && this.setFocus(O, void 0, !0);
								}),
							);
						const D = L.getHiddenRanges();
						this.setHiddenAreas(D, !1);
						const M = (0, c.$k6)(D),
							N = L.viewCells.slice(0);
						M.reverse().forEach((A) => {
							const R = N.splice(A.start, A.end - A.start + 1);
							this.Z.fire(R);
						}),
							this.splice2(0, 0, N);
					}
					lb(L) {
						L.reverse().forEach((D) => {
							const M = [],
								N = [],
								A = [];
							for (let R = D.start; R < D.start + D.deleteCount; R++) {
								const O = this.element(R);
								O.cellKind === h.CellKind.Code
									? this.ab.hasCell(O)
										? M.push(...O?.outputsViewModels)
										: N.push(...O?.outputsViewModels)
									: A.push(O);
							}
							this.splice2(D.start, D.deleteCount, D.toInsert),
								this.Y.fire(M),
								this.X.fire(N),
								this.Z.fire(A);
						});
					}
					clear() {
						super.splice(0, this.length);
					}
					setHiddenAreas(L, D) {
						if (!this.ab) return !1;
						const M = (0, c.$k6)(L),
							N = this.bb
								.map((R) => this.ab.getTrackedRange(R))
								.filter((R) => R !== null);
						if (M.length === N.length) {
							let R = !1;
							for (let O = 0; O < M.length; O++)
								if (!(M[O].start === N[O].start && M[O].end === N[O].end)) {
									R = !0;
									break;
								}
							if (!R)
								return (
									this.mb(M), this.s.onHiddenRangesChange(), this.s.layout(), !1
								);
						}
						this.bb.forEach((R) =>
							this.ab.setTrackedRange(
								R,
								null,
								d.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							),
						);
						const A = M.map((R) =>
							this.ab.setTrackedRange(
								null,
								R,
								d.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							),
						).filter((R) => R !== null);
						return (
							(this.bb = A),
							this.mb(M),
							this.s.onHiddenRangesChange(),
							D && this.updateHiddenAreasInView(N, M),
							this.s.layout(),
							!0
						);
					}
					mb(L) {
						let D = 0,
							M = 0;
						const N = [];
						for (; M < L.length; ) {
							for (let R = D; R < L[M].start - 1; R++) N.push(1);
							N.push(L[M].end - L[M].start + 1 + 1), (D = L[M].end + 1), M++;
						}
						for (let R = D; R < this.ab.length; R++) N.push(1);
						const A = new Uint32Array(N.length);
						for (let R = 0; R < N.length; R++) A[R] = N[R];
						this.cb = new m.$WN(A);
					}
					updateHiddenAreasInView(L, D) {
						const M = v(this.ab.viewCells, L),
							N = new Set();
						M.forEach((O) => {
							N.add(O.uri.toString());
						});
						const A = v(this.ab.viewCells, D),
							R = (0, h.$Z6)(M, A, (O) => N.has(O.uri.toString()));
						this.lb(R);
					}
					splice2(L, D, M = []) {
						if (L < 0 || L > this.k.length) return;
						const N = t.$Lgb(this.rowsContainer);
						super.splice(L, D, M), N && this.domFocus();
						const A = [];
						this.getSelectedElements().forEach((R) => {
							this.ab.hasCell(R) && A.push(R.handle);
						}),
							!A.length &&
								this.ab.viewCells.length &&
								this.ab.updateSelectionsState({
									kind: h.SelectionStateType.Index,
									focus: { start: 0, end: 1 },
									selections: [{ start: 0, end: 1 }],
								}),
							this.s.layout();
					}
					getModelIndex(L) {
						const D = this.indexOf(L);
						return this.getModelIndex2(D);
					}
					getModelIndex2(L) {
						return this.cb ? this.cb.getPrefixSum(L - 1) : L;
					}
					getViewIndex(L) {
						const D = this.ab.getCellIndex(L);
						return this.getViewIndex2(D);
					}
					getViewIndex2(L) {
						if (!this.cb) return L;
						const D = this.cb.getIndexOf(L);
						return D.remainder !== 0
							? L >= this.cb.getTotalSum()
								? L - (this.cb.getTotalSum() - this.cb.getCount())
								: void 0
							: D.index;
					}
					convertModelIndexToViewIndex(L) {
						return this.cb
							? L >= this.cb.getTotalSum()
								? Math.min(this.length, this.cb.getTotalSum())
								: this.cb.getIndexOf(L).index
							: L;
					}
					modelIndexIsVisible(L) {
						return this.cb && this.cb.getIndexOf(L).remainder !== 0
							? L >= this.cb.getTotalSum()
							: !0;
					}
					nb(L, D, M, N) {
						const A = [],
							R = [];
						let O = L,
							B = D;
						for (; O <= M; ) {
							const U = this.cb.getPrefixSum(O);
							U === B + 1
								? (A.length &&
										(A[A.length - 1] === B - 1
											? R.push({ start: A[A.length - 1], end: B + 1 })
											: R.push({
													start: A[A.length - 1],
													end: A[A.length - 1] + 1,
												})),
									A.push(B),
									O++,
									B++)
								: (A.length &&
										(A[A.length - 1] === B - 1
											? R.push({ start: A[A.length - 1], end: B + 1 })
											: R.push({
													start: A[A.length - 1],
													end: A[A.length - 1] + 1,
												})),
									A.push(B),
									O++,
									(B = U));
						}
						return (
							A.length &&
								R.push({ start: A[A.length - 1], end: A[A.length - 1] + 1 }),
							(0, c.$k6)(R)
						);
					}
					getVisibleRangesPlusViewportAboveAndBelow() {
						if (this.k.length <= 0) return [];
						const L = Math.max(this.getViewScrollTop() - this.renderHeight, 0),
							D = this.k.indexAt(L),
							M = this.k.element(D),
							N = this.ab.getCellIndex(M),
							A = (0, g.$Zm)(
								this.getViewScrollBottom() + this.renderHeight,
								0,
								this.scrollHeight,
							),
							R = (0, g.$Zm)(this.k.indexAt(A), 0, this.k.length - 1),
							O = this.k.element(R),
							B = this.ab.getCellIndex(O);
						return B - N === R - D
							? [{ start: N, end: B }]
							: this.nb(D, N, R, B);
					}
					ob(L) {
						if (!this.ab) return -1;
						const D = this.ab.getCellIndex(L);
						if (D === -1) return -1;
						if (!this.cb) return D;
						const M = this.cb.getIndexOf(D);
						return M.remainder !== 0 && D >= this.cb.getTotalSum()
							? D - (this.cb.getTotalSum() - this.cb.getCount())
							: M.index;
					}
					pb(L) {
						if (!this.cb) return L;
						const D = this.cb.getIndexOf(L);
						return D.remainder !== 0 && L >= this.cb.getTotalSum()
							? L - (this.cb.getTotalSum() - this.cb.getCount())
							: D.index;
					}
					focusElement(L) {
						const D = this.ob(L);
						if (D >= 0 && this.ab) {
							const M = this.element(D).handle;
							this.ab.updateSelectionsState(
								{
									kind: h.SelectionStateType.Handle,
									primary: M,
									selections: [M],
								},
								"view",
							),
								this.setFocus([D], void 0, !1);
						}
					}
					selectElements(L) {
						const D = L.map((M) => this.ob(M)).filter((M) => M >= 0);
						this.setSelection(D);
					}
					getCellViewScrollTop(L) {
						const D = this.ob(L);
						if (D === void 0 || D < 0 || D >= this.length)
							throw new i.$Bib(this.ib, `Invalid index ${D}`);
						return this.k.elementTop(D);
					}
					getCellViewScrollBottom(L) {
						const D = this.ob(L);
						if (D === void 0 || D < 0 || D >= this.length)
							throw new i.$Bib(this.ib, `Invalid index ${D}`);
						const M = this.k.elementTop(D),
							N = this.k.elementHeight(D);
						return M + N;
					}
					setFocus(L, D, M) {
						if (M) {
							super.setFocus(L, D);
							return;
						}
						if (L.length) {
							if (this.ab) {
								const N = this.element(L[0]).handle;
								this.ab.updateSelectionsState(
									{
										kind: h.SelectionStateType.Handle,
										primary: N,
										selections: this.getSelection().map(
											(A) => this.element(A).handle,
										),
									},
									"view",
								);
							}
						} else if (this.ab) {
							if (this.length) return;
							this.ab.updateSelectionsState(
								{
									kind: h.SelectionStateType.Handle,
									primary: null,
									selections: [],
								},
								"view",
							);
						}
						super.setFocus(L, D);
					}
					setSelection(L, D, M) {
						if (M) {
							super.setSelection(L, D);
							return;
						}
						L.length
							? this.ab &&
								this.ab.updateSelectionsState(
									{
										kind: h.SelectionStateType.Handle,
										primary: this.getFocusedElements()[0]?.handle ?? null,
										selections: L.map((N) => this.element(N)).map(
											(N) => N.handle,
										),
									},
									"view",
								)
							: this.ab &&
								this.ab.updateSelectionsState(
									{
										kind: h.SelectionStateType.Handle,
										primary: this.getFocusedElements()[0]?.handle ?? null,
										selections: [],
									},
									"view",
								),
							super.setSelection(L, D);
					}
					revealCells(L) {
						const D = this.pb(L.start);
						if (D < 0) return;
						const M = this.pb(L.end - 1),
							N = this.getViewScrollTop(),
							A = this.getViewScrollBottom(),
							R = this.k.elementTop(D);
						if (R >= N && R < A) {
							const O = this.k.elementTop(M),
								B = this.k.elementHeight(M);
							if (O + B <= A) return;
							if (O >= A) return this.rb(M, !1, $.Bottom);
							if (O < A)
								return O + B - A < R - N
									? this.k.setScrollTop(N + O + B - A)
									: this.rb(D, !1, $.Top);
						}
						this.qb(D);
					}
					qb(L, D) {
						const M = this.k.firstMostlyVisibleIndex,
							N = this.k.elementHeight(L);
						L <= M || (!D && N >= this.k.renderHeight)
							? this.rb(L, !0, $.Top)
							: this.rb(L, !0, $.Bottom, D);
					}
					scrollToBottom() {
						const L = this.k.scrollHeight,
							D = this.getViewScrollTop(),
							M = this.getViewScrollBottom();
						this.k.setScrollTop(L - (M - D));
					}
					async revealCell(L, D) {
						const M = this.ob(L);
						if (!(M < 0)) {
							switch (D) {
								case a.CellRevealType.Top:
									this.rb(M, !1, $.Top);
									break;
								case a.CellRevealType.Center:
									this.rb(M, !1, $.Center);
									break;
								case a.CellRevealType.CenterIfOutsideViewport:
									this.rb(M, !0, $.Center);
									break;
								case a.CellRevealType.NearTopIfOutsideViewport:
									this.rb(M, !0, $.NearTop);
									break;
								case a.CellRevealType.FirstLineIfOutsideViewport:
									this.qb(M, !0);
									break;
								case a.CellRevealType.Default:
									this.qb(M);
									break;
							}
							if (
								(L.getEditState() === a.CellEditState.Editing ||
									(D === a.CellRevealType.FirstLineIfOutsideViewport &&
										L.cellKind === h.CellKind.Code)) &&
								!L.editorAttached
							)
								return P(L);
						}
					}
					rb(L, D, M, N) {
						if (L >= this.k.length) return;
						const A = this.getViewScrollTop(),
							R = this.getViewScrollBottom(),
							O = this.k.elementTop(L),
							B = this.k.elementHeight(L) + O;
						if (!(D && O >= A && B < R))
							switch (M) {
								case $.Top:
									this.k.setScrollTop(O),
										this.k.setScrollTop(this.k.elementTop(L));
									break;
								case $.Center:
								case $.NearTop:
									{
										this.k.setScrollTop(O - this.k.renderHeight / 2);
										const U = this.k.elementTop(L),
											z = this.k.elementHeight(L),
											F = this.getViewScrollBottom() - this.getViewScrollTop();
										z >= F
											? this.k.setScrollTop(U)
											: M === $.Center
												? this.k.setScrollTop(U + z / 2 - F / 2)
												: M === $.NearTop && this.k.setScrollTop(U - F / 5);
									}
									break;
								case $.Bottom:
									if (N) {
										const U =
												this.viewModel?.layoutInfo?.fontInfo.lineHeight ?? 15,
											z =
												this.jb.getLayoutConfiguration().cellTopMargin +
												this.jb.getLayoutConfiguration().editorTopPadding,
											F = O + U + z;
										if (F < R) return;
										this.k.setScrollTop(this.scrollTop + (F - R));
										break;
									}
									this.k.setScrollTop(this.scrollTop + (B - R)),
										this.k.setScrollTop(
											this.scrollTop +
												(this.k.elementTop(L) +
													this.k.elementHeight(L) -
													this.getViewScrollBottom()),
										);
									break;
								default:
									break;
							}
					}
					async revealRangeInCell(L, D, M) {
						const N = this.ob(L);
						if (!(N < 0))
							switch (M) {
								case a.CellRevealRangeType.Default:
									return this.sb(N, D);
								case a.CellRevealRangeType.Center:
									return this.tb(N, D);
								case a.CellRevealRangeType.CenterIfOutsideViewport:
									return this.ub(N, D);
							}
					}
					async sb(L, D) {
						const M = this.getViewScrollTop(),
							N = this.getViewScrollBottom(),
							A = this.k.elementTop(L),
							R = this.k.element(L);
						if (R.editorAttached) this.vb(L, D);
						else {
							const O = this.k.elementHeight(L);
							let B;
							return (
								A + O <= M
									? (this.k.setScrollTop(A), (B = "top"))
									: A >= N &&
										(this.k.setScrollTop(A - this.k.renderHeight / 2),
										(B = "bottom")),
								new Promise((z, F) => {
									R.onDidChangeEditorAttachState(() => {
										R.editorAttached ? z() : F();
									});
								}).then(() => {
									this.vb(L, D, B);
								})
							);
						}
					}
					async tb(L, D) {
						const M = (O, B) => {
								const U = this.k.element(O),
									z = U.getPositionScrollTopOffset(B),
									F = this.k.elementTop(O) + z;
								this.k.setScrollTop(F - this.k.renderHeight / 2),
									U.revealRangeInCenter(B);
							},
							A = this.k.elementTop(L);
						this.k.setScrollTop(A - this.k.renderHeight / 2);
						const R = this.k.element(L);
						if (R.editorAttached) M(L, D);
						else return P(R).then(() => M(L, D));
					}
					async ub(L, D) {
						const M = (z, F) => {
								const x = this.k.element(z),
									H = x.getPositionScrollTopOffset(F),
									q = this.k.elementTop(z) + H;
								this.k.setScrollTop(q - this.k.renderHeight / 2),
									x.revealRangeInCenter(F);
							},
							N = this.getViewScrollTop(),
							A = this.getViewScrollBottom(),
							O = this.k.elementTop(L),
							B = this.k.element(L),
							U = O + B.getPositionScrollTopOffset(D);
						if (U < N || U > A) {
							this.k.setScrollTop(U - this.k.renderHeight / 2);
							const z = this.k.elementTop(L) + B.getPositionScrollTopOffset(D);
							if (
								(this.k.setScrollTop(z - this.k.renderHeight / 2),
								!B.editorAttached)
							)
								return P(B).then(() => M(L, D));
						} else if (B.editorAttached) B.revealRangeInCenter(D);
						else return P(B).then(() => M(L, D));
					}
					vb(L, D, M) {
						const N = this.k.element(L),
							A = this.getViewScrollTop(),
							R = this.getViewScrollBottom(),
							O = N.getPositionScrollTopOffset(D),
							B = this.k.elementHeight(L);
						if (O >= B) {
							const F = N.layoutInfo.totalHeight;
							this.updateElementHeight(L, F);
						}
						const z = this.k.elementTop(L) + O;
						z < A
							? this.k.setScrollTop(z - 30)
							: z > R
								? this.k.setScrollTop(A + z - R + 30)
								: M === "bottom"
									? this.k.setScrollTop(A + z - R + 30)
									: M === "top" && this.k.setScrollTop(z - 30);
					}
					revealCellOffsetInCenter(L, D) {
						const M = this.ob(L);
						if (M >= 0) {
							const N = this.k.element(M),
								A = this.k.elementTop(M);
							if (N instanceof o.$41b) return this.wb(M);
							{
								const R =
									N.layoutInfo.outputContainerOffset +
									Math.min(D, N.layoutInfo.outputTotalHeight);
								this.k.setScrollTop(A - this.k.renderHeight / 2),
									this.k.setScrollTop(A + R - this.k.renderHeight / 2);
							}
						}
					}
					revealOffsetInCenterIfOutsideViewport(L) {
						const D = this.getViewScrollTop(),
							M = this.getViewScrollBottom();
						(L < D || L > M) &&
							this.k.setScrollTop(L - this.k.renderHeight / 2);
					}
					wb(L) {
						this.rb(L, !0, $.Center);
					}
					domElementOfElement(L) {
						const D = this.ob(L);
						return D >= 0 ? this.k.domElement(D) : null;
					}
					focusView() {
						this.k.domNode.focus();
					}
					triggerScrollFromMouseWheelEvent(L) {
						this.k.delegateScrollFromMouseWheelEvent(L);
					}
					delegateVerticalScrollbarPointerDown(L) {
						this.k.delegateVerticalScrollbarPointerDown(L);
					}
					xb(L) {
						return (
							this.k.elementTop(L) + this.k.elementHeight(L) < this.scrollTop
						);
					}
					updateElementHeight2(L, D, M = null) {
						const N = this.ob(L);
						if (N === void 0 || N < 0 || N >= this.length) return;
						if (this.xb(N)) {
							const B = this.elementHeight(L) - D;
							this.hb &&
								w.Event.once(this.k.onWillScroll)(() => {
									const U = parseInt(this.hb.domNode.style.top, 10);
									S(this.hb.domNode)
										? this.hb.setTop(U - B)
										: this.hb.setTop(-e.$A2b);
								}),
								this.k.updateElementHeight(N, D, M),
								this.s.layout();
							return;
						}
						if (M !== null) {
							this.k.updateElementHeight(N, D, M), this.s.layout();
							return;
						}
						const A = this.getFocus(),
							R = A.length ? A[0] : null;
						if (R) {
							const O = D - this.k.elementHeight(N);
							if (this.W.shouldAnchor(this.k, R, O, this.element(N))) {
								this.k.updateElementHeight(N, D, R), this.s.layout();
								return;
							}
						}
						this.k.updateElementHeight(N, D, null), this.s.layout();
					}
					changeViewZones(L) {
						this.s.changeViewZones(L) && this.s.layout();
					}
					domFocus() {
						const L = this.getFocusedElements()[0],
							D = L && this.domElementOfElement(L);
						(this.k.domNode.ownerDocument.activeElement &&
							D &&
							D.contains(this.k.domNode.ownerDocument.activeElement)) ||
							(!C.$m &&
								this.k.domNode.ownerDocument.activeElement &&
								t.$Egb(
									this.k.domNode.ownerDocument.activeElement,
									"context-view",
								)) ||
							super.domFocus();
					}
					focusContainer(L) {
						L &&
							(this.ab?.updateSelectionsState(
								{
									kind: h.SelectionStateType.Handle,
									primary: null,
									selections: [],
								},
								"view",
							),
							this.setFocus([], void 0, !0),
							this.setSelection([], void 0, !0)),
							super.domFocus();
					}
					getViewScrollTop() {
						return this.k.getScrollTop();
					}
					getViewScrollBottom() {
						return this.getViewScrollTop() + this.k.renderHeight;
					}
					setCellEditorSelection(L, D) {
						const M = L;
						M.editorAttached
							? M.setSelection(D)
							: P(M).then(() => {
									M.setSelection(D);
								});
					}
					style(L) {
						const D = this.k.domId;
						this.V || (this.V = t.$Rgb(this.k.domNode));
						const M = D && `.${D}`,
							N = [];
						L.listBackground &&
							N.push(
								`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows { background: ${L.listBackground}; }`,
							),
							L.listFocusBackground &&
								(N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color: ${L.listFocusBackground}; }`,
								),
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color: ${L.listFocusBackground}; }`,
								)),
							L.listFocusForeground &&
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { color: ${L.listFocusForeground}; }`,
								),
							L.listActiveSelectionBackground &&
								(N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color: ${L.listActiveSelectionBackground}; }`,
								),
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color: ${L.listActiveSelectionBackground}; }`,
								)),
							L.listActiveSelectionForeground &&
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${L.listActiveSelectionForeground}; }`,
								),
							L.listFocusAndSelectionBackground &&
								N.push(`
				.monaco-drag-image,
				.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { background-color: ${L.listFocusAndSelectionBackground}; }
			`),
							L.listFocusAndSelectionForeground &&
								N.push(`
				.monaco-drag-image,
				.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { color: ${L.listFocusAndSelectionForeground}; }
			`),
							L.listInactiveFocusBackground &&
								(N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color:  ${L.listInactiveFocusBackground}; }`,
								),
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color:  ${L.listInactiveFocusBackground}; }`,
								)),
							L.listInactiveSelectionBackground &&
								(N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color:  ${L.listInactiveSelectionBackground}; }`,
								),
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color:  ${L.listInactiveSelectionBackground}; }`,
								)),
							L.listInactiveSelectionForeground &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${L.listInactiveSelectionForeground}; }`,
								),
							L.listHoverBackground &&
								N.push(
									`.monaco-list${M}:not(.drop-target) > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { background-color:  ${L.listHoverBackground}; }`,
								),
							L.listHoverForeground &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${L.listHoverForeground}; }`,
								),
							L.listSelectionOutline &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { outline: 1px dotted ${L.listSelectionOutline}; outline-offset: -1px; }`,
								),
							L.listFocusOutline &&
								N.push(`
				.monaco-drag-image,
				.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px solid ${L.listFocusOutline}; outline-offset: -1px; }
			`),
							L.listInactiveFocusOutline &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px dotted ${L.listInactiveFocusOutline}; outline-offset: -1px; }`,
								),
							L.listHoverOutline &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover { outline: 1px dashed ${L.listHoverOutline}; outline-offset: -1px; }`,
								),
							L.listDropOverBackground &&
								N.push(`
				.monaco-list${M}.drop-target,
				.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows.drop-target,
				.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-row.drop-target { background-color: ${L.listDropOverBackground} !important; color: inherit !important; }
			`);
						const A = N.join(`
`);
						A !== this.V.textContent && (this.V.textContent = A);
					}
					getRenderHeight() {
						return this.k.renderHeight;
					}
					getScrollHeight() {
						return this.k.scrollHeight;
					}
					layout(L, D) {
						(this.gb = !0),
							super.layout(L, D),
							this.renderHeight === 0
								? (this.k.domNode.style.visibility = "hidden")
								: (this.k.domNode.style.visibility = "initial"),
							(this.gb = !1);
					}
					dispose() {
						(this.fb = !0),
							this.U.dispose(),
							this.S.dispose(),
							this.W.dispose(),
							this.s.dispose(),
							super.dispose(),
							(this.R = []),
							(this.ab = null),
							(this.bb = []),
							(this.cb = null),
							(this.eb = []);
					}
				};
				(e.$B2b = I),
					(e.$B2b = I =
						Ne([j(7, u.$fMb), j(8, r.$gj), j(9, f.$Li), j(10, s.$d6)], I));
				class T extends E.$1c {
					constructor(L) {
						super(), (this.list = L);
					}
					getViewIndex(L) {
						return this.list.getViewIndex(L) ?? -1;
					}
					getViewHeight(L) {
						return this.list.viewModel ? this.list.elementHeight(L) : -1;
					}
					getCellRangeFromViewRange(L, D) {
						if (!this.list.viewModel) return;
						const M = this.list.getModelIndex2(L);
						if (M === void 0)
							throw new Error(`startIndex ${L} out of boundary`);
						if (D >= this.list.length) {
							const N = this.list.viewModel.length;
							return { start: M, end: N };
						} else {
							const N = this.list.getModelIndex2(D);
							if (N === void 0)
								throw new Error(`endIndex ${D} out of boundary`);
							return { start: M, end: N };
						}
					}
					getCellsFromViewRange(L, D) {
						if (!this.list.viewModel) return [];
						const M = this.getCellRangeFromViewRange(L, D);
						return M ? this.list.viewModel.getCellsInRange(M) : [];
					}
					getCellsInRange(L) {
						return this.list.viewModel?.getCellsInRange(L) ?? [];
					}
					getVisibleRangesPlusViewportAboveAndBelow() {
						return this.list?.getVisibleRangesPlusViewportAboveAndBelow() ?? [];
					}
				}
				e.$C2b = T;
				function P(k) {
					return new Promise((L, D) => {
						w.Event.once(k.onDidChangeEditorAttachState)(() =>
							k.editorAttached ? L() : D(),
						);
					});
				}
			},
		)
