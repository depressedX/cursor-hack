import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/platform.js';
import '../../notebookBrowser.js';
import '../cellPart.js';
import '../../../common/model/notebookCellTextModel.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookRange.js';
define(
			de[1848],
			he([1, 0, 7, 15, 3, 12, 108, 294, 1029, 70, 442]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u2b = e.$t2b = void 0),
					(e.$v2b = p),
					(t = mt(t)),
					(E = mt(E));
				const a = t.$,
					h = "cell-dragging",
					c = "global-drag-active";
				class n extends d.$A1b {
					constructor(f) {
						super(), (this.g = f);
					}
					didRenderCell(f) {
						this.h(f);
					}
					updateState(f, b) {
						b.dragStateChanged && this.h(f);
					}
					h(f) {
						this.g.classList.toggle(h, f.dragging);
					}
				}
				e.$t2b = n;
				class g extends w.$1c {
					constructor(f, b) {
						super(),
							(this.q = f),
							(this.r = b),
							(this.f = []),
							(this.j = !1),
							(this.n = this.D(new w.$2c())),
							(this.g = t.$fhb(b, a(".cell-list-insertion-indicator"))),
							this.D(
								t.$0fb(
									b.ownerDocument.body,
									t.$$gb.DRAG_START,
									this.w.bind(this),
									!0,
								),
							),
							this.D(
								t.$0fb(
									b.ownerDocument.body,
									t.$$gb.DRAG_END,
									this.y.bind(this),
									!0,
								),
							);
						const s = (l, y, $ = !1) => {
							this.D(
								t.$0fb(
									f.getDomNode(),
									l,
									(v) => {
										const S = this.u(v);
										S && y(S);
									},
									$,
								),
							);
						};
						s(
							t.$$gb.DRAG_OVER,
							(l) => {
								this.c && (l.browserEvent.preventDefault(), this.z(l));
							},
							!0,
						),
							s(t.$$gb.DROP, (l) => {
								this.c && (l.browserEvent.preventDefault(), this.G(l));
							}),
							s(t.$$gb.DRAG_LEAVE, (l) => {
								l.browserEvent.preventDefault(), this.J(l);
							}),
							(this.m = this.D(new i.$Jh(200)));
					}
					setList(f) {
						(this.h = f),
							(this.n.value = this.h.onWillScroll((b) => {
								b.scrollTopChanged &&
									(this.t(!1),
									(this.j = !0),
									this.m.trigger(() => {
										this.j = !1;
									}));
							}));
					}
					t(f) {
						this.g.style.opacity = f ? "1" : "0";
					}
					u(f) {
						const b = this.r.getBoundingClientRect().top,
							s = this.h.scrollTop + f.clientY - b,
							l = this.h.elementAt(s);
						if (!l) return;
						const y = this.h.getCellViewScrollTop(l),
							$ = this.h.elementHeight(l),
							S = (s - y) / $;
						return {
							browserEvent: f,
							draggedOverCell: l,
							cellTop: y,
							cellHeight: $,
							dragPosRatio: S,
						};
					}
					clearGlobalDragState() {
						this.q.getDomNode().classList.remove(c);
					}
					w() {
						this.q.getDomNode().classList.add(c);
					}
					y() {
						this.q.getDomNode().classList.remove(c);
					}
					z(f) {
						if (!f.browserEvent.dataTransfer) return;
						if (!this.c) {
							f.browserEvent.dataTransfer.dropEffect = "none";
							return;
						}
						if (this.j || this.c === f.draggedOverCell) {
							this.t(!1);
							return;
						}
						const b = this.F(f.dragPosRatio),
							s = b === "above" ? f.cellTop : f.cellTop + f.cellHeight;
						this.C(b, s);
					}
					C(f, b) {
						const { bottomToolbarGap: s } =
								this.q.notebookOptions.computeBottomToolbarDimensions(
									this.q.textModel?.viewType,
								),
							l = b - this.h.scrollTop + s / 2;
						l >= 0 ? ((this.g.style.top = `${l}px`), this.t(!0)) : this.t(!1);
					}
					F(f) {
						return f < 0.5 ? "above" : "below";
					}
					G(f) {
						const b = this.c;
						if (this.j || this.c === f.draggedOverCell) return;
						this.L();
						const s = this.F(f.dragPosRatio);
						this.I(b, s, f.browserEvent, f.draggedOverCell);
					}
					H(f) {
						const b = this.q.getSelections(),
							l = (0, C.$fJb)(this.q, b).find((y) => y.start <= f && f < y.end);
						return l || { start: f, end: f + 1 };
					}
					I(f, b, s, l) {
						const y = this.h.getCellViewScrollTop(l),
							$ = this.h.elementHeight(l),
							v = b === "above" ? y : y + $,
							{ bottomToolbarGap: S } =
								this.q.notebookOptions.computeBottomToolbarDimensions(
									this.q.textModel?.viewType,
								),
							I = v - this.h.scrollTop + S / 2,
							T = this.q.getDomNode().getBoundingClientRect().height;
						if (I < 0 || I > T) return;
						const P = (s.ctrlKey && !E.$m) || (s.altKey && E.$m);
						if (!this.q.hasModel()) return;
						const k = this.q.textModel;
						if (P) {
							const L = this.q.getCellIndex(f),
								D = this.H(L);
							let M = this.q.getCellIndex(l);
							if (b === "below") {
								const R = this.q.getCellIndex(l);
								M = this.q.getNextVisibleCellIndex(R);
							}
							let N, A;
							if (M <= D.start)
								(N = { start: M, end: M + D.end - D.start }),
									(A = { start: M + L - D.start, end: M + L - D.start + 1 });
							else {
								const R = M - D.start;
								(N = { start: D.start + R, end: D.end + R }),
									(A = { start: L + R, end: L + R + 1 });
							}
							k.applyEdits(
								[
									{
										editType: r.CellEditType.Replace,
										index: M,
										count: 0,
										cells: (0, u.$j6)([D]).map((R) =>
											(0, m.$05)(this.q.cellAt(R).model),
										),
									},
								],
								!0,
								{
									kind: r.SelectionStateType.Index,
									focus: this.q.getFocus(),
									selections: this.q.getSelections(),
								},
								() => ({
									kind: r.SelectionStateType.Index,
									focus: A,
									selections: [N],
								}),
								void 0,
								!0,
							),
								this.q.revealCellRangeInView(N);
						} else p(this.q, f, b, l);
					}
					J(f) {
						(!f.browserEvent.relatedTarget ||
							!t.$Bgb(f.browserEvent.relatedTarget, this.q.getDomNode())) &&
							this.t(!1);
					}
					L() {
						this.c &&
							(this.f.forEach((f) => (f.dragging = !1)),
							(this.c = void 0),
							(this.f = [])),
							this.t(!1);
					}
					registerDragHandle(f, b, s, l) {
						const y = f.container;
						for (const S of s) S.setAttribute("draggable", "true");
						const $ = () => {
							!this.q.notebookOptions.getDisplayOptions().dragAndDropEnabled ||
								this.q.isReadOnly ||
								(y.classList.remove(h), this.L());
						};
						for (const S of s)
							f.templateDisposables.add(t.$0fb(S, t.$$gb.DRAG_END, $));
						const v = (S) => {
							if (
								!S.dataTransfer ||
								!this.q.notebookOptions.getDisplayOptions()
									.dragAndDropEnabled ||
								this.q.isReadOnly
							)
								return;
							(this.c = f.currentRenderedCell),
								(this.f = this.q
									.getSelections()
									.map((T) => this.q.getCellsInRange(T))
									.flat()),
								this.f.forEach((T) => (T.dragging = !0));
							const I = l();
							b.parentElement.appendChild(I),
								S.dataTransfer.setDragImage(I, 0, 0),
								setTimeout(() => I.remove(), 0);
						};
						for (const S of s)
							f.templateDisposables.add(t.$0fb(S, t.$$gb.DRAG_START, v));
					}
					startExplicitDrag(f, b) {
						!this.q.notebookOptions.getDisplayOptions().dragAndDropEnabled ||
							this.q.isReadOnly ||
							((this.c = f), this.t(!0));
					}
					explicitDrag(f, b) {
						if (
							!this.q.notebookOptions.getDisplayOptions().dragAndDropEnabled ||
							this.q.isReadOnly
						)
							return;
						const s = this.h.elementAt(b);
						if (s && s !== f) {
							const I = this.h.getCellViewScrollTop(s),
								T = this.h.elementHeight(s),
								P = this.M(b, I, T),
								k = P === "above" ? I : I + T;
							this.C(P, k);
						}
						if (this.c !== f) return;
						const l = this.q.getDomNode().getBoundingClientRect(),
							y = b - this.h.scrollTop,
							$ = 0.2,
							v = 20,
							S = y / l.height;
						S < $
							? (this.h.scrollTop -= v * (1 - S / $))
							: S > 1 - $ && (this.h.scrollTop += v * (1 - (1 - S) / $));
					}
					endExplicitDrag(f) {
						this.t(!1);
					}
					explicitDrop(f, b) {
						(this.c = void 0), this.t(!1);
						const s = this.h.elementAt(b.dragOffsetY);
						if (!s || s === f) return;
						const l = this.h.getCellViewScrollTop(s),
							y = this.h.elementHeight(s),
							$ = this.M(b.dragOffsetY, l, y);
						this.I(f, $, b, s);
					}
					M(f, b, s) {
						const y = (f - b) / s;
						return this.F(y);
					}
					dispose() {
						(this.q = null), super.dispose();
					}
				}
				e.$u2b = g;
				function p(o, f, b, s) {
					const l = o.getCellIndex(f);
					let y = o.getCellIndex(s);
					if (typeof l != "number" || typeof y != "number") return;
					b === "below" && (y = o.getNextVisibleCellIndex(y) ?? y);
					let $ = o.getSelections();
					$.length || ($ = [o.getFocus()]);
					let v = o.getFocus().start;
					$.some((N) => N.start <= l && N.end > l) ||
						(($ = [{ start: l, end: l + 1 }]), (v = l));
					const S = $.find((N) => N.start <= y && N.end > y);
					S && (y = S.start);
					let I = 0,
						T = y,
						P = y;
					$.sort((N, A) => A.start - N.start);
					const k = $.map((N) => {
							const A = N.end - N.start;
							let R = 0;
							N.end <= P && (R = -A);
							const O = P + R;
							if (v >= N.start && v <= N.end) {
								const z = v - N.start;
								T = O + z;
							}
							const B = N.start >= y ? I : 0,
								U = {
									editType: r.CellEditType.Move,
									index: N.start + B,
									length: A,
									newIdx: O,
								};
							return (I += A), N.end < P && (P -= A), U;
						}),
						L = k[k.length - 1],
						D = { start: L.newIdx, end: L.newIdx + I },
						M = { start: T, end: T + 1 };
					o.textModel.applyEdits(
						k,
						!0,
						{
							kind: r.SelectionStateType.Index,
							focus: o.getFocus(),
							selections: o.getSelections(),
						},
						() => ({
							kind: r.SelectionStateType.Index,
							focus: M,
							selections: [D],
						}),
						void 0,
						!0,
					),
						o.revealCellRangeInView(D);
				}
			},
		),
		