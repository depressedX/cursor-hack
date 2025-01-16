define(
			de[2912],
			he([1, 0, 7, 1581, 235, 15, 56, 547, 51, 95, 2295]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$6b = void 0),
					(t = mt(t));
				class u extends w.$Uhb {
					static {
						this.a = "editor.contrib.findOptionsWidget";
					}
					constructor(h, c, n) {
						super(),
							(this.w = this.D(new E.$Yh(() => this.O(), 2e3))),
							(this.M = !1),
							(this.b = h),
							(this.c = c),
							(this.g = n),
							(this.h = document.createElement("div")),
							(this.h.className = "findOptionsWidget"),
							(this.h.style.display = "none"),
							(this.h.style.top = "10px"),
							(this.h.style.zIndex = "12"),
							this.h.setAttribute("role", "presentation"),
							this.h.setAttribute("aria-hidden", "true");
						const g = {
								inputActiveOptionBorder: (0, m.$rP)(m.$WR),
								inputActiveOptionForeground: (0, m.$rP)(m.$ZR),
								inputActiveOptionBackground: (0, m.$rP)(m.$YR),
							},
							p = this.D((0, r.$dib)());
						(this.s = this.D(
							new i.$Rob({
								appendTitle: this.t(d.$i2b.ToggleCaseSensitiveCommand),
								isChecked: this.c.matchCase,
								hoverDelegate: p,
								...g,
							}),
						)),
							this.h.appendChild(this.s.domNode),
							this.D(
								this.s.onChange(() => {
									this.c.change({ matchCase: this.s.checked }, !1);
								}),
							),
							(this.r = this.D(
								new i.$Sob({
									appendTitle: this.t(d.$i2b.ToggleWholeWordCommand),
									isChecked: this.c.wholeWord,
									hoverDelegate: p,
									...g,
								}),
							)),
							this.h.appendChild(this.r.domNode),
							this.D(
								this.r.onChange(() => {
									this.c.change({ wholeWord: this.r.checked }, !1);
								}),
							),
							(this.n = this.D(
								new i.$Tob({
									appendTitle: this.t(d.$i2b.ToggleRegexCommand),
									isChecked: this.c.isRegex,
									hoverDelegate: p,
									...g,
								}),
							)),
							this.h.appendChild(this.n.domNode),
							this.D(
								this.n.onChange(() => {
									this.c.change({ isRegex: this.n.checked }, !1);
								}),
							),
							this.b.addOverlayWidget(this),
							this.D(
								this.c.onFindReplaceStateChange((o) => {
									let f = !1;
									o.isRegex && ((this.n.checked = this.c.isRegex), (f = !0)),
										o.wholeWord &&
											((this.r.checked = this.c.wholeWord), (f = !0)),
										o.matchCase &&
											((this.s.checked = this.c.matchCase), (f = !0)),
										!this.c.isRevealed && f && this.y();
								}),
							),
							this.D(t.$0fb(this.h, t.$$gb.MOUSE_LEAVE, (o) => this.J())),
							this.D(t.$0fb(this.h, "mouseover", (o) => this.L()));
					}
					t(h) {
						const c = this.g.lookupKeybinding(h);
						return c ? ` (${c.getLabel()})` : "";
					}
					dispose() {
						this.b.removeOverlayWidget(this), super.dispose();
					}
					getId() {
						return u.a;
					}
					getDomNode() {
						return this.h;
					}
					getPosition() {
						return {
							preference: C.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
						};
					}
					highlightFindOptions() {
						this.y();
					}
					y() {
						this.N(), this.w.schedule();
					}
					J() {
						this.w.schedule();
					}
					L() {
						this.w.cancel();
					}
					N() {
						this.M || ((this.M = !0), (this.h.style.display = "block"));
					}
					O() {
						this.M && ((this.M = !1), (this.h.style.display = "none"));
					}
				}
				e.$$6b = u;
			},
		),
		