define(
			de[607],
			he([1, 0, 7, 114, 198, 437, 27, 92, 8, 39, 40, 35, 91]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OYb = void 0),
					(t = mt(t));
				let c = class extends w.$$ib {
					get onDidChangeDropdownVisibility() {
						return this.c.onDidChangeVisibility;
					}
					constructor(g, p, o, f, b, s, l, y, $, v, S) {
						super(null, g, { hoverDelegate: s?.hoverDelegate }),
							(this.n = b),
							(this.r = s),
							(this.g = null),
							(this.h = null),
							(this.b = new d.$Lyb(
								g,
								{ hoverDelegate: s?.hoverDelegate },
								l,
								y,
								$,
								v,
								b,
								S,
							)),
							s?.actionRunner && (this.b.actionRunner = s.actionRunner),
							(this.c = new E.$Pob(p, o, this.n, {
								menuAsChild: s?.menuAsChild ?? !0,
								classNames: f
									? ["codicon", "codicon-chevron-down", f]
									: ["codicon", "codicon-chevron-down"],
								actionRunner: this.r?.actionRunner,
								keybindingProvider: this.r?.getKeyBinding,
								hoverDelegate: s?.hoverDelegate,
							}));
					}
					setActionContext(g) {
						super.setActionContext(g),
							this.b.setActionContext(g),
							this.c.setActionContext(g);
					}
					render(g) {
						(this.g = g),
							super.render(this.g),
							this.g.classList.add("monaco-dropdown-with-primary");
						const p = t.$(".action-container");
						this.b.render(t.$fhb(this.g, p)),
							(this.h = t.$(".dropdown-action-container")),
							this.c.render(t.$fhb(this.g, this.h)),
							this.D(
								t.$0fb(p, t.$$gb.KEY_DOWN, (o) => {
									const f = new i.$7fb(o);
									f.equals(C.KeyCode.RightArrow) &&
										((this.b.element.tabIndex = -1),
										this.c.focus(),
										f.stopPropagation());
								}),
							),
							this.D(
								t.$0fb(this.h, t.$$gb.KEY_DOWN, (o) => {
									const f = new i.$7fb(o);
									f.equals(C.KeyCode.LeftArrow) &&
										((this.b.element.tabIndex = 0),
										this.c.setFocusable(!1),
										this.b.element?.focus(),
										f.stopPropagation());
								}),
							),
							this.t();
					}
					focus(g) {
						g
							? this.c.focus()
							: ((this.b.element.tabIndex = 0), this.b.element.focus());
					}
					blur() {
						(this.b.element.tabIndex = -1), this.c.blur(), this.g.blur();
					}
					setFocusable(g) {
						g
							? (this.b.element.tabIndex = 0)
							: ((this.b.element.tabIndex = -1), this.c.setFocusable(!1));
					}
					t() {
						const g = !this.action.enabled;
						this.element?.classList.toggle("disabled", g);
					}
					update(g, p, o) {
						this.c.dispose(),
							(this.c = new E.$Pob(g, p, this.n, {
								menuAsChild: !0,
								classNames: ["codicon", o || "codicon-chevron-down"],
								actionRunner: this.r?.actionRunner,
								hoverDelegate: this.r?.hoverDelegate,
								keybindingProvider: this.r?.getKeyBinding,
							})),
							this.h && this.c.render(this.h);
					}
					dispose() {
						this.b.dispose(), this.c.dispose(), super.dispose();
					}
				};
				(e.$OYb = c),
					(e.$OYb = c =
						Ne(
							[
								j(6, r.$uZ),
								j(7, u.$4N),
								j(8, m.$6j),
								j(9, a.$iP),
								j(10, h.$XK),
							],
							c,
						));
			},
		),
		