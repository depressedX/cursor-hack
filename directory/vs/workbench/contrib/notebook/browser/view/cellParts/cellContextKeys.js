import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observable.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../controller/chat/notebookChatController.js';
import '../../notebookBrowser.js';
import '../cellPart.js';
import '../../viewModel/codeCellViewModel.js';
import '../../viewModel/markupCellViewModel.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookContextKeys.js';
import '../../../common/notebookExecutionStateService.js';
define(
			de[1961],
			he([1, 0, 3, 77, 8, 5, 1359, 108, 294, 482, 855, 70, 176, 190]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*observable*/,
 w /*contextkey*/,
 E /*instantiation*/,
 C /*notebookChatController*/,
 d /*notebookBrowser*/,
 m /*cellPart*/,
 r /*codeCellViewModel*/,
 u /*markupCellViewModel*/,
 a /*notebookCommon*/,
 h /*notebookContextKeys*/,
 c /*notebookExecutionStateService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$61b = e.$51b = void 0);
				let n = class extends m.$A1b {
					constructor(o, f) {
						super(),
							(this.b = f),
							(this.a = this.D(this.b.createInstance(g, o, void 0)));
					}
					didRenderCell(o) {
						this.a.updateForElement(o);
					}
				};
				(e.$51b = n), (e.$51b = n = Ne([j(1, E.$Li)], n));
				let g = class extends t.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.y = o),
							(this.z = f),
							(this.C = b),
							(this.F = s),
							(this.w = this.D(new t.$Zc())),
							this.C.bufferChangeEvents(() => {
								(this.a = h.$CJb.bindTo(this.C)),
									(this.b = h.$DJb.bindTo(this.C)),
									(this.c = h.$EJb.bindTo(this.C)),
									(this.f = h.$FJb.bindTo(this.C)),
									(this.u = h.$GJb.bindTo(this.C)),
									(this.g = h.$IJb.bindTo(this.C)),
									(this.h = h.$JJb.bindTo(this.C)),
									(this.j = h.$KJb.bindTo(this.C)),
									(this.m = h.$NJb.bindTo(this.C)),
									(this.n = h.$OJb.bindTo(this.C)),
									(this.q = h.$HJb.bindTo(this.C)),
									(this.s = h.$QJb.bindTo(this.C)),
									(this.r = h.$PJb.bindTo(this.C)),
									(this.t = h.$RJb.bindTo(this.C)),
									f && this.updateForElement(f);
							}),
							this.D(
								this.F.onDidChangeExecution((l) => {
									l.type === c.NotebookExecutionType.cell &&
										this.z &&
										l.affectsCell(this.z.uri) &&
										this.I();
								}),
							);
					}
					updateForElement(o) {
						if ((this.w.clear(), (this.z = o), !o)) return;
						this.w.add(o.onDidChangeState((b) => this.G(b))),
							o instanceof r.$31b &&
								(this.w.add(o.onDidChangeOutputs(() => this.M())),
								this.w.add(
									(0, i.autorun)((b) => {
										this.t.set(!!b.readObservable(o.excecutionError));
									}),
								)),
							this.w.add(this.y.onDidChangeActiveCell(() => this.H())),
							this.z instanceof u.$41b
								? this.a.set("markup")
								: this.z instanceof r.$31b && this.a.set("code"),
							this.C.bufferChangeEvents(() => {
								this.H(),
									this.I(),
									this.J(),
									this.L(),
									this.M(),
									this.N(),
									this.q.set(this.z.lineNumbers),
									this.r.set(this.z.uri.toString());
							});
						const f = C.$y1b.get(this.y);
						f &&
							this.w.add(
								f.onDidChangePromptCache((b) => {
									b.cell.toString() === this.z.uri.toString() && this.N();
								}),
							);
					}
					G(o) {
						this.C.bufferChangeEvents(() => {
							o.internalMetadataChanged && this.I(),
								o.editStateChanged && this.J(),
								o.focusModeChanged && this.H(),
								o.cellLineNumberChanged && this.q.set(this.z.lineNumbers),
								(o.inputCollapsedChanged || o.outputCollapsedChanged) &&
									this.L();
						});
					}
					H() {
						if (!this.z) return;
						const o = this.y.getActiveCell();
						this.c.set(this.y.getActiveCell() === this.z),
							o === this.z
								? this.f.set(this.z.focusMode === d.CellFocusMode.Editor)
								: this.f.set(!1);
					}
					I() {
						if (!this.z) return;
						const o = this.z.internalMetadata;
						this.b.set(!this.y.isReadOnly);
						const f = this.F.getCellExecution(this.z.uri);
						this.z instanceof u.$41b
							? (this.g.reset(), this.h.reset())
							: f?.state === a.NotebookCellExecutionState.Executing
								? (this.g.set("executing"), this.h.set(!0))
								: f?.state === a.NotebookCellExecutionState.Pending ||
										f?.state === a.NotebookCellExecutionState.Unconfirmed
									? (this.g.set("pending"), this.h.set(!0))
									: o.lastRunSuccess === !0
										? (this.g.set("succeeded"), this.h.set(!1))
										: o.lastRunSuccess === !1
											? (this.g.set("failed"), this.h.set(!1))
											: (this.g.set("idle"), this.h.set(!1));
					}
					J() {
						this.z &&
							(this.z instanceof u.$41b
								? this.u.set(this.z.getEditState() === d.CellEditState.Editing)
								: this.u.set(!1));
					}
					L() {
						this.z &&
							(this.m.set(!!this.z.isInputCollapsed),
							this.n.set(!!this.z.isOutputCollapsed));
					}
					M() {
						this.z instanceof r.$31b
							? this.j.set(this.z.outputsViewModels.length > 0)
							: this.j.set(!1);
					}
					N() {
						const o = C.$y1b.get(this.y);
						if (!o || !this.z) {
							this.s.set(!1);
							return;
						}
						this.s.set(o.isCellGeneratedByChat(this.z));
					}
				};
				(e.$61b = g), (e.$61b = g = Ne([j(2, w.$6j), j(3, c.$d6)], g));
			},
		),
		