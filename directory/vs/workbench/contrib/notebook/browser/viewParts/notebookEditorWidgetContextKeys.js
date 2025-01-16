define(
			de[3503],
			he([1, 0, 7, 3, 8, 108, 176, 190, 243, 53]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n4b = void 0),
					(t = mt(t));
				let u = class {
					constructor(h, c, n, g, p) {
						(this.u = h),
							(this.v = c),
							(this.w = g),
							(this.x = p),
							(this.q = new i.$Zc()),
							(this.r = new i.$Zc()),
							(this.s = []),
							(this.t = new i.$Zc()),
							(this.a = C.$SJb.bindTo(n)),
							(this.b = C.$TJb.bindTo(n)),
							(this.f = C.$VJb.bindTo(n)),
							(this.g = C.$WJb.bindTo(n)),
							(this.h = C.$uJb.bindTo(n)),
							(this.j = C.$vJb.bindTo(n)),
							(this.l = C.$wJb.bindTo(n)),
							(this.k = C.$YJb.bindTo(n)),
							(this.m = C.$BJb.bindTo(n)),
							(this.n = C.$XJb.bindTo(n)),
							(this.d = C.$UJb.bindTo(n)),
							(this.o = C.$yJb.bindTo(n)),
							(this.p = C.$AJb.bindTo(n)),
							this.y(),
							this.D(),
							this.q.add(h.onDidChangeModel(this.y, this)),
							this.q.add(c.onDidAddKernel(this.C, this)),
							this.q.add(c.onDidChangeSelectedNotebooks(this.C, this)),
							this.q.add(c.onDidChangeSourceActions(this.C, this)),
							this.q.add(h.notebookOptions.onDidChangeOptions(this.D, this)),
							this.q.add(g.onDidChangeExtensions(this.B, this)),
							this.q.add(p.onDidChangeExecution(this.z, this)),
							this.q.add(p.onDidChangeLastRunFailState(this.A, this));
					}
					dispose() {
						this.q.dispose(),
							this.r.dispose(),
							this.b.reset(),
							this.d.reset(),
							this.g.reset(),
							this.h.reset(),
							this.j.reset(),
							this.m.reset(),
							(0, i.$Vc)(this.s),
							(this.s.length = 0);
					}
					y() {
						if (
							(this.C(),
							this.D(),
							this.r.clear(),
							(0, i.$Vc)(this.s),
							(this.s.length = 0),
							!this.u.hasModel())
						)
							return;
						const h = () => {
								let g = !1;
								if (this.u.hasModel()) {
									for (let p = 0; p < this.u.getLength(); p++)
										if (this.u.cellAt(p).outputsViewModels.length > 0) {
											g = !0;
											break;
										}
								}
								this.k.set(g);
							},
							c = this.r.add(new i.$Zc()),
							n = (g) =>
								g.model.onDidChangeOutputs(() => {
									c.clear(),
										c.add(
											t.$hgb(t.getWindow(this.u.getDomNode()), () => {
												h();
											}),
										);
								});
						for (let g = 0; g < this.u.getLength(); g++) {
							const p = this.u.cellAt(g);
							this.s.push(n(p));
						}
						h(),
							this.B(),
							this.r.add(
								this.u.onDidChangeViewCells((g) => {
									[...g.splices].reverse().forEach((p) => {
										const [o, f, b] = p,
											s = this.s.splice(o, f, ...b.map(n));
										(0, i.$Vc)(s);
									});
								}),
							),
							this.m.set(this.u.textModel.viewType);
					}
					z(h) {
						if (this.u.textModel) {
							const c = this.x.getExecution(this.u.textModel.uri),
								n = this.x.getCellExecutionsForNotebook(this.u.textModel.uri);
							this.j.set(n.length > 0 || !!c),
								h.type === d.NotebookExecutionType.cell &&
									this.h.set(n.length > 0);
						} else
							this.j.set(!1),
								h.type === d.NotebookExecutionType.cell && this.h.set(!1);
					}
					A(h) {
						h.notebook === this.u.textModel?.uri && this.p.set(h.visible);
					}
					async B() {
						if (!this.u.hasModel()) return;
						const h = this.u.textModel.viewType,
							c = E.$cJb.get(h);
						this.n.set(!!c && !(await this.w.getExtension(c)));
					}
					C() {
						if (!this.u.hasModel()) {
							this.b.reset(), this.d.reset(), this.g.reset();
							return;
						}
						const { selected: h, all: c } = this.v.getMatchingKernel(
								this.u.textModel,
							),
							n = this.v.getSourceActions(
								this.u.textModel,
								this.u.scopedContextKeyService,
							);
						this.b.set(c.length),
							this.d.set(n.length),
							this.g.set(h?.implementsInterrupt ?? !1),
							this.f.set(!!h),
							this.a.set(h?.id ?? ""),
							this.t.clear(),
							h &&
								this.t.add(
									h.onDidChange(() => {
										this.g.set(h?.implementsInterrupt ?? !1);
									}),
								);
					}
					D() {
						const h = this.u.notebookOptions.getDisplayOptions();
						this.l.set(h.consolidatedOutputButton),
							this.o.set(
								this.u.notebookOptions.computeCellToolbarLocation(
									this.u.textModel?.viewType,
								),
							);
					}
				};
				(e.$n4b = u),
					(e.$n4b = u =
						Ne([j(1, m.$f6), j(2, w.$6j), j(3, r.$q2), j(4, d.$d6)], u));
			},
		),
		