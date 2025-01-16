define(
			de[967],
			he([1, 0, 3, 6, 11, 8, 92]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MMb = void 0);
				class d extends t.$1c {
					get primaryActions() {
						return this.b;
					}
					get secondaryActions() {
						return this.c;
					}
					constructor(u, a, h, c) {
						super(),
							(this.h = a),
							(this.j = h),
							(this.m = c),
							(this.b = []),
							(this.c = []),
							(this.f = this.D(new i.$re())),
							(this.onDidChange = this.f.event),
							(this.g = this.D(new t.$Zc())),
							(this.a = this.D(h.createMenu(u, c))),
							this.D(this.a.onDidChange(() => this.n())),
							this.n();
					}
					n() {
						this.g.clear(),
							(this.b = []),
							(this.c = []),
							(0, C.$Kyb)(this.a, this.h, {
								primary: this.b,
								secondary: this.c,
							}),
							this.g.add(this.q([...this.b, ...this.c], {})),
							this.f.fire();
					}
					q(u, a) {
						const h = new t.$Zc();
						for (const c of u)
							if (c instanceof w.$1X && !a[c.item.submenu.id]) {
								const n = (a[c.item.submenu.id] = h.add(
									this.j.createMenu(c.item.submenu, this.m),
								));
								h.add(n.onDidChange(() => this.n())),
									h.add(this.q(c.actions, a));
							}
						return h;
					}
				}
				let m = class extends t.$1c {
					constructor(u, a, h, c, n) {
						super(),
							(this.menuId = u),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n),
							(this.f = this.D(new i.$re())),
							(this.onDidChange = this.f.event),
							(this.c = this.D(new d(u, this.h, n, c))),
							this.D(this.c.onDidChange(() => this.f.fire()));
					}
					getPrimaryActions() {
						return this.c.primaryActions;
					}
					getSecondaryActions() {
						return this.c.secondaryActions;
					}
					getContextMenuActions() {
						const u = [];
						if (this.g) {
							const a = this.m.getMenuActions(this.g, this.j, this.h);
							(0, C.$Kyb)(a, { primary: [], secondary: u });
						}
						return u;
					}
				};
				(e.$MMb = m), (e.$MMb = m = Ne([j(3, E.$6j), j(4, w.$YX)], m));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	