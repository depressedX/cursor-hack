define(de[1585], he([1, 0, 3, 6, 7]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$isb = void 0);
			class E extends t.$1c {
				constructor(d, m) {
					super(),
						(this.a = this.D(new i.$re())),
						(this.onDidChange = this.a.event),
						(this.b = d),
						(this.c = -1),
						(this.f = -1),
						(this.g = null),
						this.h(!1, m);
				}
				dispose() {
					this.stopObserving(), super.dispose();
				}
				getWidth() {
					return this.c;
				}
				getHeight() {
					return this.f;
				}
				startObserving(d = !1) {
					if (!this.g && this.b) {
						let m = null;
						const r = () => {
							m
								? this.observe({ width: m.width, height: m.height }, d)
								: this.observe(void 0, d);
						};
						let u = !1,
							a = !1;
						const h = () => {
								if (u && !a)
									try {
										(u = !1), (a = !0), r();
									} finally {
										(0, w.$hgb)((0, w.getWindow)(this.b), () => {
											(a = !1), h();
										});
									}
							},
							c = (0, w.getWindow)(this.b)?.ResizeObserver;
						(this.g = new c((n) => {
							n && n[0] && n[0].contentRect
								? (m = {
										width: n[0].contentRect.width,
										height: n[0].contentRect.height,
									})
								: (m = null),
								(u = !0),
								h();
						})),
							this.g.observe(this.b);
					}
				}
				stopObserving() {
					this.g && (this.g.disconnect(), (this.g = null));
				}
				observe(d, m = !1) {
					this.h(!0, d, m);
				}
				h(d, m, r = !1) {
					let u = 0,
						a = 0;
					m
						? ((u = m.width), (a = m.height))
						: this.b && ((u = this.b.clientWidth), (a = this.b.clientHeight)),
						(u = Math.max(5, u)),
						(a = Math.max(5, a)),
						(this.c !== u || this.f !== a) &&
							((this.c = u),
							r ? (this.f = Math.max(a, this.b.clientHeight)) : (this.f = a),
							d && this.a.fire());
				}
			}
			e.$isb = E;
		}),
		define(
			de[2689],
			he([1, 0, 7, 160, 33, 94, 28, 4]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nyc = void 0);
				class m {
					constructor(u, a, h) {
						(this.c = u), (this.d = a), (this.e = h);
					}
					async update(u, a, h) {
						if (
							(this.b && (this.b.dispose(!0), (this.b = void 0)),
							this.isDisposed)
						)
							return;
						let c;
						if (u === void 0 || (0, C.$lg)(u) || (0, t.$Ygb)(u)) c = u;
						else if (!(0, C.$zg)(u.markdown))
							c = u.markdown ?? u.markdownNotSupportedFallback;
						else {
							this.a || this.f((0, d.localize)(188, null), a, h),
								(this.b = new w.$Ce());
							const n = this.b.token;
							if (
								((c = await u.markdown(n)),
								c === void 0 && (c = u.markdownNotSupportedFallback),
								this.isDisposed || n.isCancellationRequested)
							)
								return;
						}
						this.f(c, a, h);
					}
					f(u, a, h) {
						const c = this.a;
						if (this.g(u)) {
							const n = {
								content: u,
								target: this.d,
								actions: h?.actions,
								linkHandler: h?.linkHandler,
								trapFocus: h?.trapFocus,
								appearance: {
									showPointer: this.c.placement === "element",
									skipFadeInAnimation: !this.e || !!c,
									showHoverHint: h?.appearance?.showHoverHint,
								},
								position: { hoverPosition: i.HoverPosition.BELOW },
							};
							this.a = this.c.showHover(n, a);
						}
						c?.dispose();
					}
					g(u) {
						return u ? ((0, E.$el)(u) ? !!u.value : !0) : !1;
					}
					get isDisposed() {
						return this.a?.isDisposed;
					}
					dispose() {
						this.a?.dispose(), this.b?.dispose(!0), (this.b = void 0);
					}
				}
				e.$nyc = m;
			},
		),
		