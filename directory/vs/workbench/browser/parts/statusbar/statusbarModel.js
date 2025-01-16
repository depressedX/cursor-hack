define(
			de[3626],
			he([1, 0, 3, 166, 7, 21, 6]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$85b = void 0);
				class d extends t.$1c {
					static {
						this.a = "workbench.statusbar.hidden";
					}
					get entries() {
						return this.c.slice(0);
					}
					get lastFocusedEntry() {
						return this.f && !this.isHidden(this.f.id) ? this.f : void 0;
					}
					constructor(r) {
						super(),
							(this.h = r),
							(this.b = this.D(new C.$re())),
							(this.onDidChangeEntryVisibility = this.b.event),
							(this.c = []),
							(this.g = new Set()),
							this.j(),
							this.m();
					}
					j() {
						const r = this.h.get(d.a, E.StorageScope.PROFILE);
						if (r)
							try {
								this.g = new Set(JSON.parse(r));
							} catch {}
					}
					m() {
						this.D(
							this.h.onDidChangeValue(
								E.StorageScope.PROFILE,
								d.a,
								this.D(new t.$Zc()),
							)(() => this.n()),
						);
					}
					n() {
						const r = new Set(this.g);
						this.g.clear(), this.j();
						const u = new Set();
						for (const a of r) this.g.has(a) || u.add(a);
						for (const a of this.g) r.has(a) || u.add(a);
						if (u.size > 0)
							for (const a of this.c)
								u.has(a.id) && (this.s(a.id, !0), u.delete(a.id));
					}
					add(r) {
						this.c.push(r), this.s(r, !1), this.u(), this.w();
					}
					remove(r) {
						const u = this.c.indexOf(r);
						u >= 0 &&
							(this.c.splice(u, 1),
							this.c.some(
								(a) =>
									(0, i.$e6b)(a.priority.primary) &&
									a.priority.primary.id === r.id,
							) && this.u(),
							this.w());
					}
					isHidden(r) {
						return this.g.has(r);
					}
					hide(r) {
						this.g.has(r) || (this.g.add(r), this.s(r, !0), this.t());
					}
					show(r) {
						this.g.has(r) && (this.g.delete(r), this.s(r, !0), this.t());
					}
					findEntry(r) {
						return this.c.find((u) => u.container === r);
					}
					getEntries(r) {
						return this.c.filter((u) => u.alignment === r);
					}
					focusNextEntry() {
						this.r(1, 0);
					}
					focusPreviousEntry() {
						this.r(-1, this.entries.length - 1);
					}
					isEntryFocused() {
						return !!this.q();
					}
					q() {
						return this.c.find((r) => (0, w.$Lgb)(r.container));
					}
					r(r, u) {
						const a = (n) => {
								let g = n,
									p = g >= 0 && g < this.c.length ? this.c[g] : void 0;
								for (; p && this.isHidden(p.id); )
									(g += r),
										(p = g >= 0 && g < this.c.length ? this.c[g] : void 0);
								return p;
							},
							h = this.q();
						if (h) {
							const n = a(this.c.indexOf(h) + r);
							if (n) {
								(this.f = n), n.labelContainer.focus();
								return;
							}
						}
						const c = a(u);
						c && ((this.f = c), c.labelContainer.focus());
					}
					s(r, u) {
						if (typeof r == "string") {
							const a = r;
							for (const h of this.c) h.id === a && this.s(h, u);
						} else {
							const a = r,
								h = this.isHidden(a.id);
							h ? (0, w.hide)(a.container) : (0, w.show)(a.container),
								u && this.b.fire({ id: a.id, visible: !h }),
								this.w();
						}
					}
					t() {
						this.g.size > 0
							? this.h.store(
									d.a,
									JSON.stringify(Array.from(this.g.values())),
									E.StorageScope.PROFILE,
									E.StorageTarget.USER,
								)
							: this.h.remove(d.a, E.StorageScope.PROFILE);
					}
					u() {
						const r = new Map(),
							u = new Map();
						for (let c = 0; c < this.c.length; c++) {
							const n = this.c[c];
							if (typeof n.priority.primary == "number") r.set(n, c);
							else {
								const g = n.priority.primary.id;
								let p = u.get(g);
								if (!p) {
									for (const o of u.values())
										if (o.has(g)) {
											p = o;
											break;
										}
									p || ((p = new Map()), u.set(g, p));
								}
								p.set(n.id, n);
							}
						}
						const a = Array.from(r.keys());
						a.sort((c, n) =>
							c.alignment === n.alignment
								? c.priority.primary !== n.priority.primary
									? Number(n.priority.primary) - Number(c.priority.primary)
									: c.priority.secondary !== n.priority.secondary
										? n.priority.secondary - c.priority.secondary
										: r.get(c) - r.get(n)
								: c.alignment === i.StatusbarAlignment.LEFT
									? -1
									: n.alignment === i.StatusbarAlignment.LEFT
										? 1
										: 0,
						);
						let h;
						if (u.size > 0) {
							h = [];
							for (const c of a) {
								const n = u.get(c.id),
									g = n ? Array.from(n.values()) : void 0;
								g &&
									h.push(
										...g.filter(
											(p) =>
												(0, i.$e6b)(p.priority.primary) &&
												p.priority.primary.alignment ===
													i.StatusbarAlignment.LEFT,
										),
									),
									h.push(c),
									g &&
										h.push(
											...g.filter(
												(p) =>
													(0, i.$e6b)(p.priority.primary) &&
													p.priority.primary.alignment ===
														i.StatusbarAlignment.RIGHT,
											),
										),
									u.delete(c.id);
							}
							for (const [, c] of u) h.push(...c.values());
						} else h = a;
						this.c = h;
					}
					w() {
						this.y(this.getEntries(i.StatusbarAlignment.LEFT)),
							this.y(this.getEntries(i.StatusbarAlignment.RIGHT));
					}
					y(r) {
						let u, a;
						for (const h of r)
							h.container.classList.remove(
								"first-visible-item",
								"last-visible-item",
							),
								!this.isHidden(h.id) && (u || (u = h), (a = h));
						u?.container.classList.add("first-visible-item"),
							a?.container.classList.add("last-visible-item");
					}
				}
				e.$85b = d;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	