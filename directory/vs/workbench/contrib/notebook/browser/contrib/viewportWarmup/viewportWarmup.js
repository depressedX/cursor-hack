import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../platform/accessibility/common/accessibility.js';
import '../../notebookBrowser.js';
import '../../notebookEditorExtensions.js';
import '../../viewModel/codeCellViewModel.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookRange.js';
import '../../../common/notebookService.js';
define(
			de[4093],
			he([1, 0, 15, 3, 91, 108, 330, 482, 70, 442, 161]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*lifecycle*/,
 w /*accessibility*/,
 E /*notebookBrowser*/,
 C /*notebookEditorExtensions*/,
 d /*codeCellViewModel*/,
 m /*notebookCommon*/,
 r /*notebookRange*/,
 u /*notebookService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let a = class extends i.$1c {
					static {
						this.id = "workbench.notebook.viewportWarmup";
					}
					constructor(c, n, g) {
						super(),
							(this.c = c),
							(this.f = n),
							(this.b = null),
							(this.a = new t.$Yh(() => this.h(), 200)),
							this.D(this.a),
							this.D(
								this.c.onDidScroll(() => {
									this.a.schedule();
								}),
							),
							(this.b = new t.$Yh(() => this.g(), 200)),
							this.D(this.b),
							this.D(
								this.c.onDidAttachViewModel(() => {
									this.c.hasModel() && this.b?.schedule();
								}),
							),
							this.c.hasModel() && this.b?.schedule();
					}
					g() {
						if (this.c.hasModel())
							for (let c = 0; c < this.c.getLength(); c++) {
								const n = this.c.cellAt(c);
								(n?.cellKind === m.CellKind.Markup &&
									n?.getEditState() === E.CellEditState.Preview &&
									!n.isInputCollapsed) ||
									(n?.cellKind === m.CellKind.Code && this.j(n));
							}
					}
					h() {
						if (this.c.isDisposed || !this.c.hasModel()) return;
						const c = this.c.getVisibleRangesPlusViewportAboveAndBelow();
						(0, r.$j6)(c).forEach((n) => {
							const g = this.c.cellAt(n);
							g?.cellKind === m.CellKind.Markup &&
							g?.getEditState() === E.CellEditState.Preview &&
							!g.isInputCollapsed
								? this.c.createMarkupPreview(g)
								: g?.cellKind === m.CellKind.Code && this.j(g);
						});
					}
					j(c) {
						if (c.isOutputCollapsed) return;
						const n = c.outputsViewModels;
						for (const g of n.slice(0, d.$21b)) {
							const [p, o] = g.resolveMimeTypes(this.c.textModel, void 0);
							if (!p.find((l) => l.isTrusted) || p.length === 0) continue;
							const f = p[o];
							if (!f || !this.c.hasModel()) return;
							const b = this.f.getRendererInfo(f.rendererId);
							if (!b) return;
							const s = {
								type: E.RenderOutputType.Extension,
								renderer: b,
								source: g,
								mimeType: f.mimeType,
							};
							this.c.createOutput(c, s, 0, !0);
						}
					}
				};
				(a = Ne([j(1, u.$MIb), j(2, w.$XK)], a)), (0, C.$PKb)(a.id, a);
			},
		)
