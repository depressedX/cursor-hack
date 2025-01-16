define(de[294], he([1, 0, 7, 29, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$C1b = e.$B1b = e.$A1b = void 0),
				(t = mt(t));
			class E extends w.$1c {
				constructor() {
					super(), (this.f = this.D(new w.$Zc()));
				}
				prepareRenderCell(u) {}
				renderCell(u) {
					(this.c = u), d(() => this.didRenderCell(u));
				}
				didRenderCell(u) {}
				unrenderCell(u) {
					(this.c = void 0), this.f.clear();
				}
				prepareLayout() {}
				updateInternalLayoutNow(u) {}
				updateState(u, a) {}
				updateForExecutionState(u, a) {}
			}
			e.$A1b = E;
			class C extends w.$1c {
				constructor() {
					super(), (this.b = this.D(new w.$Zc()));
				}
				prepareRenderCell(u) {}
				renderCell(u) {
					(this.a = u), this.didRenderCell(u);
				}
				didRenderCell(u) {}
				unrenderCell(u) {
					(this.a = void 0), this.b.clear();
				}
				updateInternalLayoutNow(u) {}
				updateState(u, a) {}
				updateForExecutionState(u, a) {}
			}
			e.$B1b = C;
			function d(r) {
				try {
					return r();
				} catch (u) {
					return (0, i.$4)(u), null;
				}
			}
			class m extends w.$1c {
				constructor(u, a, h) {
					super(),
						(this.f = u),
						(this.g = a),
						(this.h = h),
						(this.a = this.D(new w.$2c())),
						(this.b = this.D(new w.$2c())),
						(this.c = this.D(new w.$2c()));
				}
				concatContentPart(u, a) {
					return new m(a, this.g.concat(u), this.h);
				}
				concatOverlayPart(u, a) {
					return new m(a, this.g, this.h.concat(u));
				}
				scheduleRenderCell(u) {
					for (const a of this.g) d(() => a.prepareRenderCell(u));
					for (const a of this.h) d(() => a.prepareRenderCell(u));
					for (const a of this.g) d(() => a.renderCell(u));
					this.a.value = t.$lgb(this.f, () => {
						for (const a of this.h) d(() => a.renderCell(u));
					});
				}
				unrenderCell(u) {
					for (const a of this.g) d(() => a.unrenderCell(u));
					(this.a.value = void 0),
						(this.b.value = void 0),
						(this.c.value = void 0);
					for (const a of this.h) d(() => a.unrenderCell(u));
				}
				updateInternalLayoutNow(u) {
					for (const a of this.g) d(() => a.updateInternalLayoutNow(u));
					for (const a of this.h) d(() => a.updateInternalLayoutNow(u));
				}
				prepareLayout() {
					for (const u of this.g) d(() => u.prepareLayout());
				}
				updateState(u, a) {
					for (const h of this.g) d(() => h.updateState(u, a));
					this.b.value = t.$lgb(this.f, () => {
						for (const h of this.h) d(() => h.updateState(u, a));
					});
				}
				updateForExecutionState(u, a) {
					for (const h of this.g) d(() => h.updateForExecutionState(u, a));
					this.c.value = t.$lgb(this.f, () => {
						for (const h of this.h) d(() => h.updateForExecutionState(u, a));
					});
				}
			}
			e.$C1b = m;
		}),
		define(
			de[801],
			he([1, 0, 7, 28, 159, 95, 182, 26, 92, 11, 49, 39, 35, 72]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O3b = e.$N3b = e.$M3b = void 0),
					(t = mt(t)),
					(i = mt(i));
				class n extends m.$Lyb {
					u() {
						this.m.label &&
							this.I &&
							t.$hhb(this.I, ...(0, C.$Sib)(this.eb.label ?? ""));
					}
				}
				e.$M3b = n;
				class g extends m.$Lyb {
					render(f) {
						super.render(f),
							f.classList.add("notebook-action-view-item"),
							(this.b = document.createElement("a")),
							f.appendChild(this.b),
							this.u();
					}
					u() {
						this.b &&
							(this.b.classList.add("notebook-label"),
							(this.b.innerText = this._action.label));
					}
				}
				e.$N3b = g;
				let p = class extends m.$Nyb {
					constructor(f, b, s, l, y, $, v, S, I) {
						super(
							f,
							{
								...b,
								hoverDelegate: b?.hoverDelegate ?? (0, E.$cib)("element"),
							},
							$,
							v,
							S,
						),
							(this.renderLabel = s),
							(this.subActionProvider = l),
							(this.subActionViewItemProvider = y),
							(this.S = I);
					}
					render(f) {
						super.render(f),
							f.classList.add("notebook-action-view-item"),
							f.classList.add("notebook-action-view-item-unified"),
							(this.P = document.createElement("a")),
							f.appendChild(this.P),
							(this.Q = this.D(
								this.S.setupManagedHover(
									this.m.hoverDelegate ?? (0, E.$cib)("element"),
									this.P,
									"",
								),
							)),
							this.u();
						for (const b of [t.$$gb.CLICK, t.$$gb.MOUSE_DOWN, w.EventType.Tap])
							this.D(t.$0fb(f, b, (s) => this.onClick(s, !0)));
					}
					onClick(f, b = !1) {
						t.$ahb.stop(f, !0);
						const s = i.$ug(this._context)
							? this.m?.useEventAsContext
								? f
								: { preserveFocus: b }
							: this._context;
						this.actionRunner.run(this.R ?? this._action, s);
					}
					u() {
						const f = this.subActionProvider.getActions();
						if (this.P) {
							const b = f[0];
							if (((this.R = b), b && b instanceof r.$2X)) {
								const s = this.element;
								if (s && b.item.icon && d.ThemeIcon.isThemeIcon(b.item.icon)) {
									const l = d.ThemeIcon.asClassNameArray(b.item.icon);
									s.classList.forEach((y) => {
										y.startsWith("codicon-") && s.classList.remove(y);
									}),
										s.classList.add(...l);
								}
								this.renderLabel &&
									(this.P.classList.add("notebook-label"),
									(this.P.innerText = this._action.label),
									this.Q?.update(b.tooltip.length ? b.tooltip : b.label));
							} else
								this.renderLabel &&
									(this.P.classList.add("notebook-label"),
									(this.P.innerText = this._action.label),
									this.Q?.update(
										this._action.tooltip.length
											? this._action.tooltip
											: this._action.label,
									));
						}
					}
				};
				(e.$O3b = p),
					(e.$O3b = p =
						Ne([j(5, a.$uZ), j(6, u.$Xxb), j(7, h.$iP), j(8, c.$Uyb)], p));
			},
		),
		