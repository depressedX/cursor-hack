define(
			de[1224],
			he([
				1, 0, 15, 7, 27, 49, 3, 51, 4, 5, 413, 8, 14, 39, 664, 11, 173, 92, 235,
				6, 106,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PMb = e.$OMb = void 0),
					(i = mt(i));
				const l = new g.$XX("menu.view.filter");
				(e.$OMb = new g.$XX("submenu.view.filter")),
					g.$ZX.appendMenuItem(l, {
						submenu: e.$OMb,
						title: (0, m.localize)(3743, null),
						group: "navigation",
						icon: h.$ak.filter,
					});
				class y extends o.$Nyb {
					constructor() {
						super(...arguments), (this.P = !1);
					}
					set checked(S) {
						this.P !== S && ((this.P = S), this.H());
					}
					H() {
						this.element && this.element.classList.toggle("checked", this.P);
					}
					render(S) {
						super.render(S), this.H();
					}
				}
				let $ = class extends f.$Uhb {
					get onDidFocus() {
						return this.w.onDidFocus;
					}
					get onDidBlur() {
						return this.w.onDidBlur;
					}
					constructor(S, I, T, P, k) {
						super(),
							(this.y = S),
							(this.J = I),
							(this.L = T),
							(this.M = k),
							(this.n = this.D(new b.$re())),
							(this.onDidChangeFilterText = this.n.event),
							(this.s = !1),
							(this.a = new t.$Jh(400)),
							this.D((0, C.$Yc)(() => this.a.cancel())),
							S.focusContextKey &&
								(this.h = new a.$5j(S.focusContextKey, !1).bindTo(P)),
							(this.element = i.$(".viewpane-filter")),
							([this.b, this.w] = this.N(this.element)),
							this.D(this.b),
							this.D(this.w);
						const L = i.$fhb(this.element, i.$(".viewpane-filter-controls"));
						(this.c = this.O(L)), (this.g = this.D(this.P(L))), this.R();
					}
					hasFocus() {
						return this.b.hasFocus();
					}
					focus() {
						this.b.focus();
					}
					blur() {
						this.b.blur();
					}
					updateBadge(S) {
						this.c.classList.toggle("hidden", !S),
							(this.c.textContent = S || ""),
							this.R();
					}
					setFilterText(S) {
						this.b.value = S;
					}
					getFilterText() {
						return this.b.value;
					}
					getHistory() {
						return this.b.getHistory();
					}
					layout(S) {
						this.element.parentElement?.classList.toggle("grow", S > 700),
							this.element.classList.toggle("small", S < 400),
							this.R(),
							(this.t = S);
					}
					relayout() {
						this.t && this.layout(this.t);
					}
					checkMoreFilters(S) {
						(this.s = S), this.r && (this.r.checked = S);
					}
					N(S) {
						const I = this.D(
							this.J.createInstance(u.$VCb, S, this.L, {
								placeholder: this.y.placeholder,
								ariaLabel: this.y.ariaLabel,
								history: this.y.history || [],
								showHistoryHint: () => (0, n.$NMb)(this.M),
								inputBoxStyles: s.$wyb,
							}),
						);
						this.y.text && (I.value = this.y.text),
							this.D(I.onDidChange((P) => this.a.trigger(() => this.Q(I)))),
							this.D(
								i.$$fb(I.inputElement, i.$$gb.KEY_DOWN, (P) => this.U(P, I)),
							),
							this.D(i.$$fb(S, i.$$gb.KEY_DOWN, this.S)),
							this.D(i.$$fb(S, i.$$gb.KEY_UP, this.S)),
							this.D(
								i.$$fb(I.inputElement, i.$$gb.CLICK, (P) => {
									P.stopPropagation(), P.preventDefault();
								}),
							);
						const T = this.D(i.$dhb(I.inputElement));
						return (
							this.h &&
								(this.D(T.onDidFocus(() => this.h.set(!0))),
								this.D(T.onDidBlur(() => this.h.set(!1))),
								this.D((0, C.$Yc)(() => this.h.reset()))),
							[I, T]
						);
					}
					O(S) {
						const I = i.$fhb(S, i.$(".viewpane-filter-badge.hidden"));
						return (
							(I.style.backgroundColor = (0, d.$rP)(d.$1P)),
							(I.style.color = (0, d.$rP)(d.$2P)),
							(I.style.border = `1px solid ${(0, d.$rP)(d.$OP)}`),
							I
						);
					}
					P(S) {
						return this.J.createInstance(p.$Tyb, S, l, {
							hiddenItemStrategy: p.HiddenItemStrategy.NoHide,
							actionViewItemProvider: (I, T) => {
								if (I instanceof g.$1X && I.item.submenu.id === e.$OMb.id)
									return (
										(this.r = this.J.createInstance(y, I, T)),
										(this.r.checked = this.s),
										this.r
									);
							},
						});
					}
					Q(S) {
						S.addToHistory(), this.n.fire(S.value);
					}
					R() {
						this.b.inputElement.style.paddingRight =
							this.element.classList.contains("small") ||
							this.c.classList.contains("hidden")
								? "25px"
								: "150px";
					}
					S(S) {
						(S.equals(w.KeyCode.Space) ||
							S.equals(w.KeyCode.LeftArrow) ||
							S.equals(w.KeyCode.RightArrow) ||
							S.equals(w.KeyCode.Home) ||
							S.equals(w.KeyCode.End)) &&
							S.stopPropagation();
					}
					U(S, I) {
						let T = !1;
						S.equals(w.KeyCode.Tab) &&
							!this.g.isEmpty() &&
							(this.g.focus(), (T = !0)),
							T && (S.stopPropagation(), S.preventDefault());
					}
				};
				(e.$PMb = $),
					(e.$PMb = $ =
						Ne([j(1, r.$Li), j(2, E.$Wxb), j(3, a.$6j), j(4, c.$uZ)], $));
			},
		),
		