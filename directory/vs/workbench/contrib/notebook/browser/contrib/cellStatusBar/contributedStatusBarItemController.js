define(
			de[3117],
			he([1, 0, 15, 33, 3, 1742, 330, 991]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Fc = void 0);
				let m = class extends w.$1c {
					static {
						this.id = "workbench.notebook.statusBar.contributed";
					}
					constructor(a, h) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.a = new Map()),
							(this.b = this.D(new E.$1Fc(this.c))),
							this.D(this.b.onDidChangeVisibleCells(this.h, this)),
							this.g(),
							this.D(this.f.onDidChangeProviders(this.g, this)),
							this.D(this.f.onDidChangeItems(this.g, this));
					}
					g() {
						const a = this.b.visibleCells.filter((p) => !this.a.has(p.handle)),
							h = new Set(this.b.visibleCells.map((p) => p.handle)),
							c = Array.from(this.a.keys()),
							n = c.filter((p) => !h.has(p)),
							g = c.filter((p) => h.has(p));
						this.h({ added: a, removed: n.map((p) => ({ handle: p })) }),
							g.forEach((p) => this.a.get(p)?.update());
					}
					h(a) {
						const h = this.c.getViewModel();
						if (h) {
							for (const c of a.added) {
								const n = new r(h, c, this.f);
								this.a.set(c.handle, n);
							}
							for (const c of a.removed)
								this.a.get(c.handle)?.dispose(), this.a.delete(c.handle);
						}
					}
					dispose() {
						super.dispose(), this.a.forEach((a) => a.dispose()), this.a.clear();
					}
				};
				(e.$2Fc = m), (e.$2Fc = m = Ne([j(1, d.$Bpc)], m));
				class r extends w.$1c {
					constructor(a, h, c) {
						super(),
							(this.h = a),
							(this.j = h),
							(this.m = c),
							(this.a = []),
							(this.b = []),
							(this.f = !1),
							(this.g = this.D(new t.$Gh())),
							this.D((0, w.$Yc)(() => this.c?.dispose(!0))),
							this.n(),
							this.D(this.j.model.onDidChangeContent(() => this.n())),
							this.D(this.j.model.onDidChangeLanguage(() => this.n())),
							this.D(this.j.model.onDidChangeMetadata(() => this.n())),
							this.D(this.j.model.onDidChangeInternalMetadata(() => this.n())),
							this.D(this.j.model.onDidChangeOutputs(() => this.n()));
					}
					update() {
						this.n();
					}
					n() {
						setTimeout(() => {
							this.f || this.g.queue(() => this.q());
						}, 0);
					}
					async q() {
						const a = this.h.getCellIndex(this.j),
							h = this.h.notebookDocument.uri,
							c = this.h.notebookDocument.viewType;
						this.c?.dispose(!0);
						const n = (this.c = new i.$Ce()),
							g = await this.m.getStatusBarItemsForCell(h, a, c, n.token);
						if (n.token.isCancellationRequested) {
							g.forEach((f) => f.dispose && f.dispose());
							return;
						}
						const p = g.map((f) => f.items).flat(),
							o = this.h.deltaCellStatusBarItems(this.a, [
								{ handle: this.j.handle, items: p },
							]);
						this.b.forEach((f) => f.dispose && f.dispose()),
							(this.b = g),
							(this.a = o);
					}
					dispose() {
						super.dispose(),
							(this.f = !0),
							this.c?.dispose(!0),
							this.h.deltaCellStatusBarItems(this.a, [
								{ handle: this.j.handle, items: [] },
							]),
							this.b.forEach((a) => a.dispose && a.dispose());
					}
				}
				(0, C.$PKb)(m.id, m);
			},
		),
		