define(
			de[105],
			he([1, 0, 7, 114, 198, 95, 50, 6, 27, 3, 28, 1508]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eib = e.ActionsOrientation = void 0),
					(e.$fib = c),
					(t = mt(t)),
					(u = mt(u));
				var a;
				(function (n) {
					(n[(n.HORIZONTAL = 0)] = "HORIZONTAL"),
						(n[(n.VERTICAL = 1)] = "VERTICAL");
				})(a || (e.ActionsOrientation = a = {}));
				class h extends r.$1c {
					constructor(g, p = {}) {
						super(),
							(this.j = this.D(new r.$Zc())),
							(this.r = this.D(new r.$0c())),
							(this.w = !1),
							(this.y = !0),
							(this.C = this.D(new d.$re())),
							(this.onDidBlur = this.C.event),
							(this.F = this.D(
								new d.$re({ onWillAddFirstListener: () => (this.G = !0) }),
							)),
							(this.onDidCancel = this.F.event),
							(this.G = !1),
							(this.H = this.D(new d.$re())),
							(this.onDidRun = this.H.event),
							(this.I = this.D(new d.$re())),
							(this.onWillRun = this.I.event),
							(this.b = p),
							(this.m = p.context ?? null),
							(this.n = this.b.orientation ?? a.HORIZONTAL),
							(this.q = {
								keyDown: this.b.triggerKeys?.keyDown ?? !1,
								keys: this.b.triggerKeys?.keys ?? [
									m.KeyCode.Enter,
									m.KeyCode.Space,
								],
							}),
							(this.f = p.hoverDelegate ?? this.D((0, E.$dib)())),
							this.b.actionRunner
								? (this.g = this.b.actionRunner)
								: ((this.g = new C.$sj()), this.j.add(this.g)),
							this.j.add(this.g.onDidRun((b) => this.H.fire(b))),
							this.j.add(this.g.onWillRun((b) => this.I.fire(b))),
							(this.viewItems = []),
							(this.t = void 0),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = "monaco-action-bar");
						let o, f;
						switch (this.n) {
							case a.HORIZONTAL:
								(o = [m.KeyCode.LeftArrow]), (f = [m.KeyCode.RightArrow]);
								break;
							case a.VERTICAL:
								(o = [m.KeyCode.UpArrow]),
									(f = [m.KeyCode.DownArrow]),
									(this.domNode.className += " vertical");
								break;
						}
						this.D(
							t.$0fb(this.domNode, t.$$gb.KEY_DOWN, (b) => {
								const s = new i.$7fb(b);
								let l = !0;
								const y =
									typeof this.t == "number" ? this.viewItems[this.t] : void 0;
								o && (s.equals(o[0]) || s.equals(o[1]))
									? (l = this.Q())
									: f && (s.equals(f[0]) || s.equals(f[1]))
										? (l = this.P())
										: s.equals(m.KeyCode.Escape) && this.G
											? this.F.fire()
											: s.equals(m.KeyCode.Home)
												? (l = this.N())
												: s.equals(m.KeyCode.End)
													? (l = this.O())
													: s.equals(m.KeyCode.Tab) &&
															y instanceof w.$$ib &&
															y.trapsArrowNavigation
														? (l = this.P(void 0, !0))
														: this.L(s)
															? this.q.keyDown
																? this.S(s)
																: (this.w = !0)
															: (l = !1),
									l && (s.preventDefault(), s.stopPropagation());
							}),
						),
							this.D(
								t.$0fb(this.domNode, t.$$gb.KEY_UP, (b) => {
									const s = new i.$7fb(b);
									this.L(s)
										? (!this.q.keyDown && this.w && ((this.w = !1), this.S(s)),
											s.preventDefault(),
											s.stopPropagation())
										: (s.equals(m.KeyCode.Tab) ||
												s.equals(m.KeyMod.Shift | m.KeyCode.Tab) ||
												s.equals(m.KeyCode.UpArrow) ||
												s.equals(m.KeyCode.DownArrow) ||
												s.equals(m.KeyCode.LeftArrow) ||
												s.equals(m.KeyCode.RightArrow)) &&
											this.M();
								}),
							),
							(this.u = this.D(t.$dhb(this.domNode))),
							this.D(
								this.u.onDidBlur(() => {
									(t.$Jgb() === this.domNode ||
										!t.$Bgb(t.$Jgb(), this.domNode)) &&
										(this.C.fire(),
										(this.s = this.t),
										(this.t = void 0),
										(this.w = !1));
								}),
							),
							this.D(this.u.onDidFocus(() => this.M())),
							(this.z = document.createElement("ul")),
							(this.z.className = "actions-container"),
							this.b.highlightToggledItems &&
								this.z.classList.add("highlight-toggled"),
							this.z.setAttribute("role", this.b.ariaRole || "toolbar"),
							this.b.ariaLabel &&
								this.z.setAttribute("aria-label", this.b.ariaLabel),
							this.domNode.appendChild(this.z),
							g.appendChild(this.domNode);
					}
					J() {
						this.length() >= 1
							? this.z.setAttribute("role", this.b.ariaRole || "toolbar")
							: this.z.setAttribute("role", "presentation");
					}
					setAriaLabel(g) {
						g
							? this.z.setAttribute("aria-label", g)
							: this.z.removeAttribute("aria-label");
					}
					setFocusable(g) {
						if (((this.y = g), this.y)) {
							const p = this.viewItems.find(
								(o) => o instanceof w.$$ib && o.isEnabled(),
							);
							p instanceof w.$$ib && p.setFocusable(!0);
						} else
							this.viewItems.forEach((p) => {
								p instanceof w.$$ib && p.setFocusable(!1);
							});
					}
					L(g) {
						let p = !1;
						return (
							this.q.keys.forEach((o) => {
								p = p || g.equals(o);
							}),
							p
						);
					}
					M() {
						for (let g = 0; g < this.z.children.length; g++) {
							const p = this.z.children[g];
							if (t.$Bgb(t.$Jgb(), p)) {
								(this.t = g), this.viewItems[this.t]?.showHover?.();
								break;
							}
						}
					}
					get context() {
						return this.m;
					}
					set context(g) {
						(this.m = g), this.viewItems.forEach((p) => p.setActionContext(g));
					}
					get actionRunner() {
						return this.g;
					}
					set actionRunner(g) {
						(this.g = g),
							this.j.clear(),
							this.j.add(this.g.onDidRun((p) => this.H.fire(p))),
							this.j.add(this.g.onWillRun((p) => this.I.fire(p))),
							this.viewItems.forEach((p) => (p.actionRunner = g));
					}
					getContainer() {
						return this.domNode;
					}
					hasAction(g) {
						return this.viewItems.findIndex((p) => p.action.id === g.id) !== -1;
					}
					getAction(g) {
						if (typeof g == "number") return this.viewItems[g]?.action;
						if (t.$Ygb(g)) {
							for (; g.parentElement !== this.z; ) {
								if (!g.parentElement) return;
								g = g.parentElement;
							}
							for (let p = 0; p < this.z.childNodes.length; p++)
								if (this.z.childNodes[p] === g) return this.viewItems[p].action;
						}
					}
					push(g, p = {}) {
						const o = Array.isArray(g) ? g : [g];
						let f = u.$pg(p.index) ? p.index : null;
						o.forEach((b) => {
							const s = document.createElement("li");
							(s.className = "action-item"),
								s.setAttribute("role", "presentation");
							let l;
							const y = {
								hoverDelegate: this.f,
								...p,
								isTabList: this.b.ariaRole === "tablist",
							};
							this.b.actionViewItemProvider &&
								(l = this.b.actionViewItemProvider(b, y)),
								l || (l = new w.$_ib(this.context, b, y)),
								this.b.allowContextMenu ||
									this.r.set(
										l,
										t.$0fb(s, t.$$gb.CONTEXT_MENU, ($) => {
											t.$ahb.stop($, !0);
										}),
									),
								(l.actionRunner = this.g),
								l.setActionContext(this.context),
								l.render(s),
								this.y &&
									l instanceof w.$$ib &&
									this.viewItems.length === 0 &&
									l.setFocusable(!0),
								f === null || f < 0 || f >= this.z.children.length
									? (this.z.appendChild(s), this.viewItems.push(l))
									: (this.z.insertBefore(s, this.z.children[f]),
										this.viewItems.splice(f, 0, l),
										f++);
						}),
							typeof this.t == "number" && this.focus(this.t),
							this.J();
					}
					getWidth(g) {
						if (g >= 0 && g < this.z.children.length) {
							const p = this.z.children.item(g);
							if (p) return p.clientWidth;
						}
						return 0;
					}
					getHeight(g) {
						if (g >= 0 && g < this.z.children.length) {
							const p = this.z.children.item(g);
							if (p) return p.clientHeight;
						}
						return 0;
					}
					pull(g) {
						g >= 0 &&
							g < this.viewItems.length &&
							(this.z.childNodes[g].remove(),
							this.r.deleteAndDispose(this.viewItems[g]),
							(0, r.$Vc)(this.viewItems.splice(g, 1)),
							this.J());
					}
					clear() {
						this.isEmpty() ||
							((this.viewItems = (0, r.$Vc)(this.viewItems)),
							this.r.clearAndDisposeAll(),
							t.$9fb(this.z),
							this.J());
					}
					length() {
						return this.viewItems.length;
					}
					isEmpty() {
						return this.viewItems.length === 0;
					}
					focus(g) {
						let p = !1,
							o;
						if (
							(g === void 0
								? (p = !0)
								: typeof g == "number"
									? (o = g)
									: typeof g == "boolean" && (p = g),
							p && typeof this.t > "u")
						) {
							const f = this.viewItems.findIndex((b) => b.isEnabled());
							(this.t = f === -1 ? void 0 : f), this.R(void 0, void 0, !0);
						} else o !== void 0 && (this.t = o), this.R(void 0, void 0, !0);
					}
					N() {
						return (this.t = this.length() - 1), this.P(!0);
					}
					O() {
						return (this.t = 0), this.Q(!0);
					}
					P(g, p) {
						if (typeof this.t > "u") this.t = this.viewItems.length - 1;
						else if (this.viewItems.length <= 1) return !1;
						const o = this.t;
						let f;
						do {
							if (
								!g &&
								this.b.preventLoopNavigation &&
								this.t + 1 >= this.viewItems.length
							)
								return (this.t = o), !1;
							(this.t = (this.t + 1) % this.viewItems.length),
								(f = this.viewItems[this.t]);
						} while (
							this.t !== o &&
							((this.b.focusOnlyEnabledItems && !f.isEnabled()) ||
								f.action.id === C.$tj.ID)
						);
						return this.R(void 0, void 0, p), !0;
					}
					Q(g) {
						if (typeof this.t > "u") this.t = 0;
						else if (this.viewItems.length <= 1) return !1;
						const p = this.t;
						let o;
						do {
							if (((this.t = this.t - 1), this.t < 0)) {
								if (!g && this.b.preventLoopNavigation) return (this.t = p), !1;
								this.t = this.viewItems.length - 1;
							}
							o = this.viewItems[this.t];
						} while (
							this.t !== p &&
							((this.b.focusOnlyEnabledItems && !o.isEnabled()) ||
								o.action.id === C.$tj.ID)
						);
						return this.R(!0), !0;
					}
					R(g, p, o = !1) {
						typeof this.t > "u" && this.z.focus({ preventScroll: p }),
							this.s !== void 0 &&
								this.s !== this.t &&
								this.viewItems[this.s]?.blur();
						const f = this.t !== void 0 ? this.viewItems[this.t] : void 0;
						if (f) {
							let b = !0;
							u.$zg(f.focus) || (b = !1),
								this.b.focusOnlyEnabledItems &&
									u.$zg(f.isEnabled) &&
									!f.isEnabled() &&
									(b = !1),
								f.action.id === C.$tj.ID && (b = !1),
								b
									? (o || this.s !== this.t) && (f.focus(g), (this.s = this.t))
									: (this.z.focus({ preventScroll: p }), (this.s = void 0)),
								b && f.showHover?.();
						}
					}
					S(g) {
						if (typeof this.t > "u") return;
						const p = this.viewItems[this.t];
						if (p instanceof w.$$ib) {
							const o =
								p._context === null || p._context === void 0 ? g : p._context;
							this.run(p._action, o);
						}
					}
					async run(g, p) {
						await this.g.run(g, p);
					}
					dispose() {
						(this.m = void 0),
							(this.viewItems = (0, r.$Vc)(this.viewItems)),
							this.getContainer().remove(),
							super.dispose();
					}
				}
				e.$eib = h;
				function c(n) {
					if (!n.length) return n;
					let g = -1;
					for (let o = 0; o < n.length; o++)
						if (n[o].id !== C.$tj.ID) {
							g = o;
							break;
						}
					if (g === -1) return [];
					n = n.slice(g);
					for (let o = n.length - 1; o >= 0 && n[o].id === C.$tj.ID; o--)
						n.splice(o, 1);
					let p = !1;
					for (let o = n.length - 1; o >= 0; o--) {
						const f = n[o].id === C.$tj.ID;
						f && !p ? n.splice(o, 1) : f ? f && (p = !1) : (p = !0);
					}
					return n;
				}
			},
		),
		