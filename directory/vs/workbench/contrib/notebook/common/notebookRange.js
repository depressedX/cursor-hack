define(de[442], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$h6 = t),
				(e.$i6 = i),
				(e.$j6 = w),
				(e.$k6 = E),
				(e.$l6 = C),
				(e.$m6 = d);
			function t(m) {
				return !m || typeof m != "object"
					? !1
					: typeof m.start == "number" && typeof m.end == "number";
			}
			function i(m) {
				m.sort((u, a) => u - a);
				const r = m.shift();
				return r === void 0
					? []
					: m
							.reduce(
								function (u, a) {
									return (
										a <= u[0][1] ? (u[0][1] = a + 1) : u.unshift([a, a + 1]), u
									);
								},
								[[r, r + 1]],
							)
							.reverse()
							.map((u) => ({ start: u[0], end: u[1] }));
			}
			function w(m) {
				return m.reduce((u, a) => {
					for (let h = a.start; h < a.end; h++) u.push(h);
					return u;
				}, []);
			}
			function E(m) {
				const r = m.sort((h, c) => h.start - c.start),
					u = r[0];
				if (!u) return [];
				const a = r.reduce(
					(h, c) => {
						const n = h[h.length - 1];
						return (
							n.end >= c.start ? (n.end = Math.max(n.end, c.end)) : h.push(c), h
						);
					},
					[u],
				);
				return a.length > 1
					? a.filter((h) => !(h.start === h.end && h.start === 0))
					: a;
			}
			function C(m, r) {
				if (((m = E(m)), (r = E(r)), m.length !== r.length)) return !1;
				for (let u = 0; u < m.length; u++)
					if (m[u].start !== r[u].start || m[u].end !== r[u].end) return !1;
				return !0;
			}
			function d(m, r) {
				return r.start >= m.start && r.end <= m.end;
			}
		}),
		define(
			de[1742],
			he([1, 0, 456, 6, 3, 28, 442]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Fc = void 0);
				class d extends w.$1c {
					get visibleCells() {
						return this.c;
					}
					constructor(r) {
						super(),
							(this.f = r),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeVisibleCells = this.a.event),
							(this.b = this.D(new w.$Zc())),
							(this.c = []),
							this.D(this.f.onDidChangeVisibleRanges(this.j, this)),
							this.D(this.f.onDidChangeModel(this.g, this)),
							this.j();
					}
					g() {
						this.b.clear(),
							this.f.hasModel() &&
								this.b.add(this.f.onDidChangeViewCells(() => this.h())),
							this.h();
					}
					h() {
						this.a.fire({ added: [], removed: Array.from(this.c) }),
							(this.c = []),
							this.j();
					}
					j() {
						if (!this.f.hasModel()) return;
						const r = (0, C.$j6)(this.f.visibleRanges)
								.map((g) => this.f.cellAt(g))
								.filter(E.$tg),
							u = new Set(r.map((g) => g.handle)),
							a = new Set(this.c.map((g) => g.handle)),
							h = (0, t.$f)(a, u),
							c = h.added.map((g) => this.f.getCellByHandle(g)).filter(E.$tg),
							n = h.removed.map((g) => this.f.getCellByHandle(g)).filter(E.$tg);
						(this.c = r), this.a.fire({ added: c, removed: n });
					}
				}
				e.$1Fc = d;
			},
		),
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
		