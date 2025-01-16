define(
			de[2924],
			he([1, 0, 3, 69, 33, 38, 15, 24, 6, 152, 2923]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$okc = e.$nkc = void 0);
				class a {
					constructor(n, g, p) {
						(this.startLineNumber = n),
							(this.endLineNumber = g),
							(this.nestingDepth = p);
					}
				}
				e.$nkc = a;
				let h = class extends t.$1c {
					static {
						this.ID = "store.contrib.stickyScrollController";
					}
					constructor(n, g, p) {
						super(),
							(this.q = g),
							(this.r = p),
							(this.c = this.D(new m.$re())),
							(this.onDidChangeStickyScroll = this.c.event),
							(this.j = null),
							(this.m = null),
							(this.n = null),
							(this.f = n),
							(this.h = this.D(new t.$Zc())),
							(this.g = this.D(new C.$Yh(() => this.update(), 50))),
							this.D(
								this.f.onDidChangeConfiguration((o) => {
									o.hasChanged(E.EditorOption.stickyScroll) && this.s();
								}),
							),
							this.s();
					}
					s() {
						this.h.clear(),
							this.f.getOption(E.EditorOption.stickyScroll).enabled &&
								(this.h.add(
									this.f.onDidChangeModel(() => {
										(this.j = null), this.t(), this.c.fire(), this.update();
									}),
								),
								this.h.add(this.f.onDidChangeHiddenAreas(() => this.update())),
								this.h.add(
									this.f.onDidChangeModelContent(() => this.g.schedule()),
								),
								this.h.add(
									this.q.documentSymbolProvider.onDidChange(() =>
										this.update(),
									),
								),
								this.h.add(
									(0, t.$Yc)(() => {
										this.n?.dispose(), (this.n = null);
									}),
								),
								this.t(),
								this.update());
					}
					getVersionId() {
						return this.j?.version;
					}
					t() {
						this.n?.dispose(), (this.n = null);
						const n = this.f;
						n.hasModel() &&
							(this.n = new u.$mkc(n, () => this.g.schedule(), this.r, this.q));
					}
					async update() {
						this.m?.dispose(!0),
							(this.m = new w.$Ce()),
							await this.u(this.m.token),
							this.c.fire();
					}
					async u(n) {
						if (
							!this.f.hasModel() ||
							!this.n ||
							this.f.getModel().isTooLargeForTokenization()
						) {
							this.j = null;
							return;
						}
						const g = await this.n.update(n);
						n.isCancellationRequested || (this.j = g);
					}
					w(n) {
						return n === -1 ? (n = 0) : n < 0 && (n = -n - 2), n;
					}
					getCandidateStickyLinesIntersectingFromStickyModel(n, g, p, o, f) {
						if (g.children.length === 0) return;
						let b = f;
						const s = [];
						for (let $ = 0; $ < g.children.length; $++) {
							const v = g.children[$];
							v.range && s.push(v.range.startLineNumber);
						}
						const l = this.w((0, d.$Ab)(s, n.startLineNumber, ($, v) => $ - v)),
							y = this.w((0, d.$Ab)(s, n.startLineNumber + o, ($, v) => $ - v));
						for (let $ = l; $ <= y; $++) {
							const v = g.children[$];
							if (!v) return;
							if (v.range) {
								const S = v.range.startLineNumber,
									I = v.range.endLineNumber;
								n.startLineNumber <= I + 1 &&
									S - 1 <= n.endLineNumber &&
									S !== b &&
									((b = S),
									p.push(new a(S, I - 1, o + 1)),
									this.getCandidateStickyLinesIntersectingFromStickyModel(
										n,
										v,
										p,
										o + 1,
										S,
									));
							} else
								this.getCandidateStickyLinesIntersectingFromStickyModel(
									n,
									v,
									p,
									o,
									f,
								);
						}
					}
					getCandidateStickyLinesIntersecting(n) {
						if (!this.j?.element) return [];
						let g = [];
						this.getCandidateStickyLinesIntersectingFromStickyModel(
							n,
							this.j.element,
							g,
							0,
							-1,
						);
						const p = this.f._getViewModel()?.getHiddenAreas();
						if (p)
							for (const o of p)
								g = g.filter(
									(f) =>
										!(
											f.startLineNumber >= o.startLineNumber &&
											f.endLineNumber <= o.endLineNumber + 1
										),
								);
						return g;
					}
				};
				(e.$okc = h), (e.$okc = h = Ne([j(1, i.$k3), j(2, r.$aN)], h));
			},
		),
		