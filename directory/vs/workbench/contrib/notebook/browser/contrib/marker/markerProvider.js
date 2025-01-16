define(
			de[3489],
			he([1, 0, 55, 1622, 70, 90, 10, 3, 108, 330, 138, 51, 19]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let c = class {
					static {
						this.ID = "workbench.contrib.markerListProvider";
					}
					constructor(p, o, f) {
						(this.b = p), (this.c = f), (this.a = o.registerProvider(this));
					}
					dispose() {
						this.a.dispose();
					}
					getMarkerList(p) {
						if (!p) return;
						const o = w.CellUri.parse(p);
						if (o)
							return new i.$Zhc(
								(f) =>
									w.CellUri.parse(f)?.notebook.toString() ===
									o.notebook.toString(),
								this.b,
								this.c,
							);
					}
				};
				c = Ne([j(0, E.$aM), j(1, i.$1hc), j(2, C.$gj)], c);
				let n = class extends d.$1c {
					static {
						this.id = "workbench.notebook.markerDecoration";
					}
					constructor(p, o) {
						super(),
							(this.b = p),
							(this.c = o),
							(this.a = []),
							this.f(),
							this.D(this.b.onDidChangeModel(() => this.f())),
							this.D(
								this.c.onMarkerChanged((f) => {
									f.some((b) =>
										this.b.getCellsInRange().some((s) => (0, h.$gh)(s.uri, b)),
									) && this.f();
								}),
							);
					}
					f() {
						if (!this.b.hasModel()) return;
						const p = [];
						this.b.getCellsInRange().forEach((o) => {
							this.c
								.read({
									resource: o.uri,
									severities: E.MarkerSeverity.Error | E.MarkerSeverity.Warning,
								})
								.forEach((b) => {
									const s =
											b.severity === E.MarkerSeverity.Error ? a.$gQ : a.$jQ,
										l = {
											startLineNumber: b.startLineNumber,
											startColumn: b.startColumn,
											endLineNumber: b.endLineNumber,
											endColumn: b.endColumn,
										};
									p.push({
										handle: o.handle,
										options: {
											overviewRuler: {
												color: s,
												modelRanges: [l],
												includeOutput: !1,
												position: m.NotebookOverviewRulerLane.Right,
											},
										},
									});
								});
						}),
							(this.a = this.b.deltaCellDecorations(this.a, p));
					}
				};
				Ne([(0, u.$gi)(100)], n.prototype, "f", null),
					(n = Ne([j(1, E.$aM)], n)),
					(0, t.$s6)(c.ID, c, t.WorkbenchPhase.BlockRestore),
					(0, r.$PKb)(n.id, n);
			},
		),
		