import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/decorators.js';
import '../../../../../../base/common/lifecycle.js';
import '../../notebookEditorExtensions.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../../../services/userActivity/common/userActivityService.js';
define(
			de[3750],
			he([1, 0, 138, 3, 330, 70, 190, 1040]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vGc = void 0);
				let m = class extends i.$1c {
					static {
						this.id = "workbench.notebook.executionEditorProgress";
					}
					constructor(u, a, h) {
						super(),
							(this.b = u),
							(this.c = a),
							(this.f = h),
							(this.a = this.D(new i.$2c())),
							this.D(u.onDidScroll(() => this.g())),
							this.D(
								a.onDidChangeExecution((c) => {
									c.notebook.toString() === this.b.textModel?.uri.toString() &&
										this.g();
								}),
							),
							this.D(u.onDidChangeModel(() => this.g()));
					}
					g() {
						if (!this.b.hasModel()) return;
						const u = this.c
								.getCellExecutionsForNotebook(this.b.textModel?.uri)
								.filter(
									(p) => p.state === E.NotebookCellExecutionState.Executing,
								),
							a = this.c.getExecution(this.b.textModel?.uri),
							h = (p) => {
								for (const o of this.b.visibleRanges)
									for (const f of this.b.getCellsInRange(o))
										if (f.handle === p.cellHandle) {
											const b = this.b.getAbsoluteTopOfElement(f);
											if (this.b.scrollTop < b + 5) return !0;
										}
								return !1;
							},
							c = u.length || a;
						c && !this.a.value
							? (this.a.value = this.f.markActive())
							: !c && this.a.value && this.a.clear();
						const n = u.length && !u.some(h) && !u.some((p) => p.isPaused);
						!!a || n ? this.b.showProgress() : this.b.hideProgress();
					}
				};
				(e.$vGc = m),
					Ne([(0, t.$gi)(100)], m.prototype, "g", null),
					(e.$vGc = m = Ne([j(1, C.$d6), j(2, d.$Poc)], m)),
					(0, w.$PKb)(m.id, m);
			},
		),
		