define(
			de[3475],
			he([1, 0, 436, 106, 294, 70, 190]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T3b = void 0);
				let d = class extends w.$A1b {
					constructor(u, a, h) {
						super(),
							(this.g = h),
							(this.a = this.D(new t.$bpb(u, i.$nyb))),
							this.a.hide(),
							(this.b = this.D(new t.$bpb(a, i.$nyb))),
							this.b.hide();
					}
					didRenderCell(u) {
						this.h(u);
					}
					updateForExecutionState(u, a) {
						this.h(u, a);
					}
					updateState(u, a) {
						if (
							((a.metadataChanged || a.internalMetadataChanged) && this.h(u),
							a.inputCollapsedChanged)
						) {
							const h = this.g.getCellExecution(u.uri);
							u.isInputCollapsed
								? (this.a.hide(),
									h?.state === E.NotebookCellExecutionState.Executing &&
										this.h(u))
								: (this.b.hide(),
									h?.state === E.NotebookCellExecutionState.Executing &&
										this.h(u));
						}
					}
					h(u, a) {
						const h = a?.changed ?? this.g.getCellExecution(u.uri),
							c = u.isInputCollapsed ? this.b : this.a;
						h?.state === E.NotebookCellExecutionState.Executing &&
						(!h.didPause || u.isInputCollapsed)
							? m(c)
							: c.hide();
					}
				};
				(e.$T3b = d), (e.$T3b = d = Ne([j(2, C.$d6)], d));
				function m(r) {
					r.infinite().show(500);
				}
			},
		),
		