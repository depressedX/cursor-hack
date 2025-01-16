define(de[1698], he([1, 0, 3, 40, 32, 136]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$R2c = void 0),
				(e.$Q2c = C);
			function C(m, r, u) {
				return {
					id: (0, E.$Aj)(m.toString()).toString(),
					silent: u,
					source: r || "core",
				};
			}
			let d = class extends t.$1c {
				constructor(r, u) {
					super(), (this.a = r), (this.b = u), this.c();
				}
				c() {
					this.D(
						this.b.onDidAddNotification((r) => {
							const u =
								r.source && typeof r.source != "string"
									? r.source.id
									: r.source;
							this.a.publicLog2(
								"notification:show",
								C(r.message, u, r.priority === i.NotificationPriority.SILENT),
							);
						}),
					),
						this.D(
							this.b.onDidRemoveNotification((r) => {
								const u =
									r.source && typeof r.source != "string"
										? r.source.id
										: r.source;
								this.a.publicLog2(
									"notification:close",
									C(r.message, u, r.priority === i.NotificationPriority.SILENT),
								);
							}),
						);
				}
			};
			(e.$R2c = d), (e.$R2c = d = Ne([j(0, w.$km), j(1, i.$4N)], d));
		}),
		define(
			de[2946],
			he([1, 0, 7, 268, 14, 6, 3, 4, 106]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Otc = e.$Ntc = void 0),
					(t = mt(t));
				class r extends C.$1c {
					constructor() {
						super(...arguments),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeCheckboxState = this.a.event);
					}
					setCheckboxState(h) {
						this.a.fire([h]);
					}
				}
				e.$Ntc = r;
				class u extends C.$1c {
					static {
						this.checkboxClass = "custom-view-tree-node-item-checkbox";
					}
					constructor(h, c, n, g) {
						super(),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.isDisposed = !1),
							(this.c = new E.$re()),
							(this.onDidChangeState = this.c.event),
							(this.a = h);
					}
					render(h) {
						h.checkbox &&
							(this.toggle
								? ((this.toggle.checked = h.checkbox.isChecked),
									this.toggle.setIcon(
										this.toggle.checked ? w.$ak.check : void 0,
									))
								: this.j(h));
					}
					j(h) {
						h.checkbox &&
							((this.toggle = new i.$8ib({
								isChecked: h.checkbox.isChecked,
								title: "",
								icon: h.checkbox.isChecked ? w.$ak.check : void 0,
								...m.$pyb,
							})),
							this.n(h.checkbox),
							this.s(h.checkbox),
							this.toggle.domNode.classList.add(u.checkboxClass),
							(this.toggle.domNode.tabIndex = 1),
							t.$fhb(this.a, this.toggle.domNode),
							this.m(h));
					}
					m(h) {
						this.toggle &&
							(this.D({ dispose: () => this.t() }),
							this.D(this.toggle),
							this.D(
								this.toggle.onChange(() => {
									this.q(h);
								}),
							));
					}
					n(h) {
						this.toggle &&
							(this.b
								? this.b.update(h.tooltip)
								: (this.b = this.D(
										this.h.setupManagedHover(
											this.g,
											this.toggle.domNode,
											this.r(h),
										),
									)));
					}
					q(h) {
						this.toggle &&
							h.checkbox &&
							((h.checkbox.isChecked = this.toggle.checked),
							this.toggle.setIcon(this.toggle.checked ? w.$ak.check : void 0),
							this.n(h.checkbox),
							this.s(h.checkbox),
							this.f.setCheckboxState(h));
					}
					r(h) {
						return h.tooltip
							? h.tooltip
							: h.isChecked
								? (0, d.localize)(3734, null)
								: (0, d.localize)(3735, null);
					}
					s(h) {
						this.toggle &&
							h.accessibilityInformation &&
							((this.toggle.domNode.ariaLabel =
								h.accessibilityInformation.label),
							h.accessibilityInformation.role &&
								(this.toggle.domNode.role = h.accessibilityInformation.role));
					}
					t() {
						const h = this.a.children;
						for (const c of h) c.remove();
					}
				}
				e.$Otc = u;
			},
		),
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
		