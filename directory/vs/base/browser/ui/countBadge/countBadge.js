define(de[495], he([1, 0, 7, 37, 2237]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Hob = e.$Gob = void 0),
				(e.$Gob = {
					badgeBackground: "#4D4D4D",
					badgeForeground: "#FFFFFF",
					badgeBorder: void 0,
				});
			class w {
				constructor(C, d, m) {
					(this.e = d),
						(this.f = m),
						(this.b = 0),
						(this.a = (0, t.$fhb)(C, (0, t.$)(".monaco-count-badge"))),
						(this.c = this.e.countFormat || "{0}"),
						(this.d = this.e.titleFormat || ""),
						this.setCount(this.e.count || 0);
				}
				setCount(C) {
					(this.b = C), this.g();
				}
				setCountFormat(C) {
					(this.c = C), this.g();
				}
				setTitleFormat(C) {
					(this.d = C), this.g();
				}
				g() {
					(this.a.textContent = (0, i.$kf)(this.c, this.b)),
						(this.a.title = (0, i.$kf)(this.d, this.b)),
						(this.a.style.backgroundColor = this.f.badgeBackground ?? ""),
						(this.a.style.color = this.f.badgeForeground ?? ""),
						this.f.badgeBorder &&
							(this.a.style.border = `1px solid ${this.f.badgeBorder}`);
				}
			}
			e.$Hob = w;
		}),
		define(
			de[2674],
			he([1, 0, 7, 114, 159, 276, 317, 95, 50, 6, 27, 1509]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mob = void 0);
				class a extends m.$sj {
					constructor(n, g) {
						super(),
							(this.j = this.D(new r.$re())),
							(this.onDidChangeVisibility = this.j.event),
							(this.a = (0, t.$fhb)(n, (0, t.$)(".monaco-dropdown"))),
							(this.c = (0, t.$fhb)(this.a, (0, t.$)(".dropdown-label")));
						let p = g.labelRenderer;
						p || (p = (f) => ((f.textContent = g.label || ""), null));
						for (const f of [t.$$gb.CLICK, t.$$gb.MOUSE_DOWN, w.EventType.Tap])
							this.D((0, t.$0fb)(this.element, f, (b) => t.$ahb.stop(b, !0)));
						for (const f of [t.$$gb.MOUSE_DOWN, w.EventType.Tap])
							this.D(
								(0, t.$0fb)(this.c, f, (b) => {
									((0, t.$7gb)(b) && (b.detail > 1 || b.button !== 0)) ||
										(this.h ? this.hide() : this.show());
								}),
							);
						this.D(
							(0, t.$0fb)(this.c, t.$$gb.KEY_UP, (f) => {
								const b = new i.$7fb(f);
								(b.equals(u.KeyCode.Enter) || b.equals(u.KeyCode.Space)) &&
									(t.$ahb.stop(f, !0), this.h ? this.hide() : this.show());
							}),
						);
						const o = p(this.c);
						o && this.D(o), this.D(w.$Qhb.addTarget(this.c));
					}
					get element() {
						return this.a;
					}
					get label() {
						return this.c;
					}
					set tooltip(n) {
						this.c &&
							(!this.n && n !== ""
								? (this.n = this.D(
										(0, C.$1ib)().setupManagedHover(
											(0, d.$cib)("mouse"),
											this.c,
											n,
										),
									))
								: this.n && this.n.update(n));
					}
					show() {
						this.h || ((this.h = !0), this.j.fire(!0));
					}
					hide() {
						this.h && ((this.h = !1), this.j.fire(!1));
					}
					isVisible() {
						return !!this.h;
					}
					r(n, g) {
						this.hide();
					}
					dispose() {
						super.dispose(),
							this.hide(),
							this.b && (this.b.remove(), (this.b = void 0)),
							this.g && (this.g.remove(), (this.g = void 0)),
							this.c && (this.c.remove(), (this.c = void 0));
					}
				}
				class h extends a {
					constructor(n, g) {
						super(n, g),
							(this.u = g),
							(this.t = []),
							(this.w = g.actions || []);
					}
					set menuOptions(n) {
						this.s = n;
					}
					get menuOptions() {
						return this.s;
					}
					get w() {
						return this.u.actionProvider
							? this.u.actionProvider.getActions()
							: this.t;
					}
					set w(n) {
						this.t = n;
					}
					show() {
						super.show(),
							this.element.classList.add("active"),
							this.u.contextMenuProvider.showContextMenu({
								getAnchor: () => this.element,
								getActions: () => this.w,
								getActionsContext: () =>
									this.menuOptions ? this.menuOptions.context : null,
								getActionViewItem: (n, g) =>
									this.menuOptions && this.menuOptions.actionViewItemProvider
										? this.menuOptions.actionViewItemProvider(n, g)
										: void 0,
								getKeyBinding: (n) =>
									this.menuOptions && this.menuOptions.getKeyBinding
										? this.menuOptions.getKeyBinding(n)
										: void 0,
								getMenuClassName: () => this.u.menuClassName || "",
								onHide: () => this.y(),
								actionRunner: this.menuOptions
									? this.menuOptions.actionRunner
									: void 0,
								anchorAlignment: this.menuOptions
									? this.menuOptions.anchorAlignment
									: E.AnchorAlignment.LEFT,
								domForShadowRoot: this.u.menuAsChild ? this.element : void 0,
								skipTelemetry: this.u.skipTelemetry,
							});
					}
					hide() {
						super.hide();
					}
					y() {
						this.hide(), this.element.classList.remove("active");
					}
				}
				e.$mob = h;
			},
		),
		