define(de[2748], he([1, 0, 230, 941]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$Wbd)(i.$b2, "v8InspectProfiling");
		}),
		define(
			de[84],
			he([1, 0, 15, 33, 3, 20, 5]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bO =
						e.$aO =
						e.$_N =
						e.$$N =
						e.$0N =
						e.$9N =
						e.ProgressLocation =
						e.$8N =
							void 0),
					(e.$8N = (0, C.$Mi)("progressService"));
				var d;
				(function (n) {
					(n[(n.Explorer = 1)] = "Explorer"),
						(n[(n.Scm = 3)] = "Scm"),
						(n[(n.Extensions = 5)] = "Extensions"),
						(n[(n.Window = 10)] = "Window"),
						(n[(n.Notification = 15)] = "Notification"),
						(n[(n.Dialog = 20)] = "Dialog");
				})(d || (e.ProgressLocation = d = {})),
					(e.$9N = Object.freeze({ total() {}, worked() {}, done() {} }));
				class m {
					static {
						this.None = Object.freeze({ report() {} });
					}
					get value() {
						return this.a;
					}
					constructor(g) {
						this.b = g;
					}
					report(g) {
						(this.a = g), this.b(this.a);
					}
				}
				e.$0N = m;
				class r {
					get value() {
						return this.a;
					}
					constructor(g) {
						this.e = g;
					}
					report(g) {
						this.b ? this.b.push(g) : (this.b = [g]), this.f();
					}
					async f() {
						if (!this.c)
							try {
								for (this.c = !0; this.b && this.b.length; ) {
									const g = this.b.shift();
									(this.a = g), await this.e(this.a);
								}
							} finally {
								this.c = !1;
								const g = this.d;
								(this.d = void 0), g?.();
							}
					}
					drain() {
						return this.c
							? new Promise((g) => {
									const p = this.d;
									this.d = () => {
										p?.(), g();
									};
								})
							: Promise.resolve();
					}
				}
				e.$$N = r;
				let u = class extends w.$1c {
					constructor(g, p) {
						super(),
							(this.a = new t.$0h()),
							p.withProgress(
								g,
								(o) => ((this.b = o), this.c && o.report(this.c), this.a.p),
							),
							this.D((0, w.$Yc)(() => this.a.complete()));
					}
					report(g) {
						this.b ? this.b.report(g) : (this.c = g);
					}
				};
				(e.$_N = u), (e.$_N = u = Ne([j(1, e.$8N)], u));
				class a extends w.$1c {
					constructor(g) {
						super(), (this.g = g), (this.a = 0), (this.b = this.D(new w.$Zc()));
					}
					start(g) {
						this.stop();
						const p = ++this.a,
							o = new i.$Ce();
						return (
							(this.f = setTimeout(() => {
								p === this.a && (this.c = this.g.show(!0));
							}, g)),
							this.b.add((0, w.$Yc)(() => clearTimeout(this.f))),
							this.b.add((0, w.$Yc)(() => o.cancel())),
							this.b.add((0, w.$Yc)(() => (this.c ? this.c.done() : void 0))),
							{
								id: p,
								token: o.token,
								stop: () => this.h(p),
								isCurrent: () => this.a === p,
							}
						);
					}
					stop() {
						this.h(this.a);
					}
					h(g) {
						this.a === g && this.b.clear();
					}
				}
				(e.$aO = a), (e.$bO = (0, C.$Mi)("editorProgressService"));
				const h = Object.freeze({ total() {}, worked() {}, done() {} });
				class c extends w.$1c {
					show(g, p) {
						return h;
					}
					showWhile(g, p) {
						return Promise.resolve();
					}
				}
				(0, E.$lK)(e.$bO, c, E.InstantiationType.Delayed);
			},
		),
		define(
			de[2749],
			he([1, 0, 2, 2, 2, 2, 13, 7, 47]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ixc = void 0);
				const r = (0, t.template)('<div class="quick-input-preview-box">'),
					u = (a) => {
						const h = (0, m.$9g)(),
							[c, n] = (0, C.createSignal)(null),
							g = (o) =>
								(0, d.$Ngb)()
									.querySelector(".quick-input-widget")
									?.getBoundingClientRect() ?? o.getBoundingClientRect();
						(0, C.createEffect)(() => {
							const o = a.container,
								f = (0, d.$Ogb)(),
								b = () => {
									n(g(o));
								};
							(0, C.onMount)(() => {
								n(g(o)), f.addEventListener("resize", b);
							}),
								(0, C.onCleanup)(() => {
									(0, d.$Ogb)().removeEventListener("resize", b);
								});
						});
						const p = (0, C.createMemo)(
							() => !!a.item && (a.item.semSearchData || a.item.cppReportEvent),
						);
						return (
							(0, C.createEffect)(() => {
								const o = a.reactiveStorageService,
									f = () => {
										o &&
											o.setNonPersistentStorage({
												quickInputPreviewBoxDomId: void 0,
												quickInputCurrentItem: void 0,
											});
									};
								if (!p()) {
									f();
									return;
								}
								const b = a.item;
								(0, C.onMount)(() => {
									o &&
										o.setNonPersistentStorage({
											quickInputPreviewBoxDomId: h,
											quickInputCurrentItem: b,
										});
								}),
									(0, C.onCleanup)(() => {
										f();
									});
							}),
							(0, E.createComponent)(C.Show, {
								get when() {
									return c();
								},
								children: (o) =>
									(() => {
										const f = r();
										return (
											(0, w.setAttribute)(f, "id", h),
											f.style.setProperty("position", "fixed"),
											f.style.setProperty("z-index", "1000"),
											(0, i.effect)(
												(b) => {
													const s = `${o().left}px`,
														l = `${o().bottom + 5}px`,
														y = `${o().width}px`;
													return (
														s !== b._v$ &&
															((b._v$ = s) != null
																? f.style.setProperty("left", s)
																: f.style.removeProperty("left")),
														l !== b._v$2 &&
															((b._v$2 = l) != null
																? f.style.setProperty("top", l)
																: f.style.removeProperty("top")),
														y !== b._v$3 &&
															((b._v$3 = y) != null
																? f.style.setProperty("width", y)
																: f.style.removeProperty("width")),
														b
													);
												},
												{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
											),
											f
										);
									})(),
							})
						);
					};
				e.$Ixc = u;
			},
		),
		