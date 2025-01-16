define(
			de[603],
			he([1, 0, 27, 3, 38, 5, 15, 937, 2775, 905]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Ob = void 0);
				const u = !1;
				let a = class extends i.$1c {
					static {
						r = this;
					}
					static {
						this.ID = "editor.contrib.marginHover";
					}
					constructor(c, n) {
						super(),
							(this.j = c),
							(this.m = n),
							(this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1),
							(this.a = new i.$Zc()),
							(this.h = { mouseDown: !1 }),
							(this.f = this.D(new C.$Yh(() => this.F(this.c), 0))),
							this.n(),
							this.D(
								this.j.onDidChangeConfiguration((g) => {
									g.hasChanged(w.EditorOption.hover) && (this.q(), this.n());
								}),
							);
					}
					static get(c) {
						return c.getContribution(r.ID);
					}
					n() {
						const c = this.j.getOption(w.EditorOption.hover);
						(this.g = {
							enabled: c.enabled,
							sticky: c.sticky,
							hidingDelay: c.hidingDelay,
						}),
							c.enabled
								? (this.a.add(this.j.onMouseDown((n) => this.t(n))),
									this.a.add(this.j.onMouseUp(() => this.w())),
									this.a.add(this.j.onMouseMove((n) => this.C(n))),
									this.a.add(this.j.onKeyDown((n) => this.H(n))))
								: (this.a.add(this.j.onMouseMove((n) => this.C(n))),
									this.a.add(this.j.onKeyDown((n) => this.H(n)))),
							this.a.add(this.j.onMouseLeave((n) => this.y(n))),
							this.a.add(
								this.j.onDidChangeModel(() => {
									this.r(), this.I();
								}),
							),
							this.a.add(this.j.onDidChangeModelContent(() => this.r())),
							this.a.add(this.j.onDidScrollChange((n) => this.s(n)));
					}
					q() {
						this.a.clear();
					}
					r() {
						(this.c = void 0), this.f.cancel();
					}
					s(c) {
						(c.scrollTopChanged || c.scrollLeftChanged) && this.I();
					}
					t(c) {
						(this.h.mouseDown = !0), !this.u(c) && this.I();
					}
					u(c) {
						const n = this.b?.getDomNode();
						return n ? (0, d.$TDb)(n, c.event.posx, c.event.posy) : !1;
					}
					w() {
						this.h.mouseDown = !1;
					}
					y(c) {
						this.shouldKeepOpenOnEditorMouseMoveOrLeave ||
							(this.r(), this.u(c)) ||
							u ||
							this.I();
					}
					z(c) {
						const n = this.g.sticky,
							g = this.u(c);
						return n && g;
					}
					C(c) {
						if (this.shouldKeepOpenOnEditorMouseMoveOrLeave) return;
						if (((this.c = c), this.z(c))) {
							this.f.cancel();
							return;
						}
						this.F(c);
					}
					F(c) {
						!c || this.G(c) || u || this.I();
					}
					G(c) {
						return this.J().showsOrWillShow(c);
					}
					H(c) {
						this.j.hasModel() &&
							(c.keyCode === t.KeyCode.Ctrl ||
								c.keyCode === t.KeyCode.Alt ||
								c.keyCode === t.KeyCode.Meta ||
								c.keyCode === t.KeyCode.Shift ||
								this.I());
					}
					I() {
						u || this.b?.hide();
					}
					J() {
						return (
							this.b || (this.b = this.m.createInstance(m.$1Ob, this.j)), this.b
						);
					}
					hideContentHover() {
						this.I();
					}
					dispose() {
						super.dispose(), this.q(), this.a.dispose(), this.b?.dispose();
					}
				};
				(e.$2Ob = a), (e.$2Ob = a = r = Ne([j(1, E.$Li)], a));
			},
		),
		