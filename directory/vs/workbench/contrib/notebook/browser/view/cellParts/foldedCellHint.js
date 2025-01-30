import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../nls.js';
import '../../controller/foldingController.js';
import '../../notebookBrowser.js';
import '../cellPart.js';
import '../../notebookIcons.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../common/notebookCommon.js';
import '../../../../../../base/common/lifecycle.js';
define(
			de[3499],
			he([1, 0, 7, 14, 26, 4, 1031, 108, 294, 284, 190, 70, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*codicons*/,
 w /*themables*/,
 E /*nls*/,
 C /*foldingController*/,
 d /*notebookBrowser*/,
 m /*cellPart*/,
 r /*notebookIcons*/,
 u /*notebookExecutionStateService*/,
 a /*notebookCommon*/,
 h /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$93b = void 0),
					(t = mt(t));
				let c = class extends m.$A1b {
					constructor(g, p, o) {
						super(),
							(this.g = g),
							(this.h = p),
							(this.j = o),
							(this.a = this.D(new h.$2c())),
							(this.b = this.D(new h.$2c()));
					}
					didRenderCell(g) {
						this.m(g);
					}
					m(g) {
						if (!this.g.hasModel()) {
							this.b.clear(), this.a.clear();
							return;
						}
						if (
							g.isInputCollapsed ||
							g.getEditState() === d.CellEditState.Editing
						)
							this.b.clear(), this.a.clear(), t.hide(this.h);
						else if (g.foldingState === d.CellFoldingState.Collapsed) {
							const p = this.g.getViewModel().getCellIndex(g),
								o = this.g.getViewModel().getFoldedLength(p),
								f = this.r({ start: p, end: p + o + 1 });
							f
								? t.$hhb(this.h, f, this.n(o), this.q(g))
								: t.$hhb(this.h, this.n(o), this.q(g)),
								t.show(this.h);
							const b = g.layoutInfo.previewHeight;
							this.h.style.top = `${b}px`;
						} else this.b.clear(), this.a.clear(), t.hide(this.h);
					}
					n(g) {
						const p =
							g === 1
								? (0, E.localize)(8206, null)
								: (0, E.localize)(8207, null, g);
						return t.$("span.notebook-folded-hint-label", void 0, p);
					}
					q(g) {
						const p = t.$("span.cell-expand-part-button");
						return (
							p.classList.add(...w.ThemeIcon.asClassNameArray(i.$ak.more)),
							this.D(
								t.$0fb(p, t.$$gb.CLICK, () => {
									const o = this.g.getContribution(C.$83b.id),
										f = this.g.getCellIndex(g);
									typeof f == "number" &&
										o.setFoldingStateDown(f, d.CellFoldingState.Expanded, 1);
								}),
							),
							p
						);
					}
					r(g) {
						const p = t.$("span.folded-cell-run-section-button"),
							o = this.g.getCellsInRange(g);
						if (!o.some((l) => l.cellKind === a.CellKind.Code)) return;
						const s = o.some((l) => {
							const y = this.j.getCellExecution(l.uri);
							return y && y.state === a.NotebookCellExecutionState.Executing;
						})
							? w.ThemeIcon.modify(r.$jOb, "spin")
							: i.$ak.play;
						return (
							p.classList.add(...w.ThemeIcon.asClassNameArray(s)),
							(this.a.value = t.$0fb(p, t.$$gb.CLICK, () => {
								this.g.executeNotebookCells(o);
							})),
							(this.b.value = this.j.onDidChangeExecution(() => {
								const y = o.some(($) => {
									const v = this.j.getCellExecution($.uri);
									return (
										v && v.state === a.NotebookCellExecutionState.Executing
									);
								})
									? w.ThemeIcon.modify(r.$jOb, "spin")
									: i.$ak.play;
								(p.className = ""),
									p.classList.add(
										"folded-cell-run-section-button",
										...w.ThemeIcon.asClassNameArray(y),
									);
							})),
							p
						);
					}
					updateInternalLayoutNow(g) {
						this.m(g);
					}
				};
				(e.$93b = c), (e.$93b = c = Ne([j(2, u.$d6)], c));
			},
		),
		