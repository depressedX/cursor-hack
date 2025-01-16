define(de[3145], he([1, 0, 7, 138, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nVc = void 0);
			var E;
			(function (d) {
				d[(d.StartDebouncingThreshold = 200)] = "StartDebouncingThreshold";
			})(E || (E = {}));
			class C extends w.$1c {
				constructor(m, r, u, a, h) {
					super(),
						(this.g = m),
						(this.h = r),
						(this.j = u),
						(this.m = a),
						(this.n = h),
						(this.a = 0),
						(this.b = 0),
						(this.c = this.D(new w.$2c())),
						(this.f = this.D(new w.$2c()));
				}
				async resize(m, r, u) {
					if (
						((this.a = m),
						(this.b = r),
						u || this.h().raw.buffer.normal.length < E.StartDebouncingThreshold)
					) {
						this.c.clear(), this.f.clear(), this.j(m, r);
						return;
					}
					const a = (0, t.getWindow)(this.h().raw.element);
					if (a && !this.g()) {
						this.c.value ||
							(this.c.value = (0, t.$egb)(a, async () => {
								this.m(this.a), this.c.clear();
							})),
							this.f.value ||
								(this.f.value = (0, t.$egb)(a, async () => {
									this.n(this.b), this.f.clear();
								}));
						return;
					}
					this.n(r), (this.a = m), this.q(m);
				}
				flush() {
					(this.c.value || this.f.value) &&
						(this.c.clear(), this.f.clear(), this.j(this.a, this.b));
				}
				q(m) {
					this.m(m);
				}
			}
			(e.$nVc = C), Ne([(0, i.$fi)(100)], C.prototype, "q", null);
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[806],
		he([1, 0, 14, 6, 3, 111, 10, 117, 51, 79, 26, 75]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fHb = e.TerminalStatus = void 0),
				(e.$gHb = n),
				(E = xi(E));
			var h;
			(function (g) {
				(g.Bell = "bell"),
					(g.Disconnected = "disconnected"),
					(g.RelaunchNeeded = "relaunch-needed"),
					(g.EnvironmentVariableInfoChangesActive =
						"env-var-info-changes-active"),
					(g.ShellIntegrationAttentionNeeded =
						"shell-integration-attention-needed");
			})(h || (e.TerminalStatus = h = {}));
			let c = class extends w.$1c {
				get onDidAddStatus() {
					return this.c.event;
				}
				get onDidRemoveStatus() {
					return this.f.event;
				}
				get onDidChangePrimaryStatus() {
					return this.g.event;
				}
				constructor(p) {
					super(),
						(this.h = p),
						(this.a = new Map()),
						(this.b = new Map()),
						(this.c = this.D(new i.$re())),
						(this.f = this.D(new i.$re())),
						(this.g = this.D(new i.$re()));
				}
				get primary() {
					let p;
					for (const o of this.a.values())
						(!p || o.severity >= p.severity) && (o.icon || !p?.icon) && (p = o);
					return p;
				}
				get statuses() {
					return Array.from(this.a.values());
				}
				add(p, o) {
					p = this.j(p);
					const f = this.b.get(p.id);
					if (
						(f && (a.$Bfb.clearTimeout(f), this.b.delete(p.id)), o && o > 0)
					) {
						const s = a.$Bfb.setTimeout(() => this.remove(p), o);
						this.b.set(p.id, s);
					}
					const b = this.a.get(p.id);
					if (
						(b && b !== p && (this.f.fire(b), this.a.delete(b.id)),
						!this.a.has(p.id))
					) {
						const s = this.primary;
						this.a.set(p.id, p), this.c.fire(p);
						const l = this.primary;
						s !== l && this.g.fire(l);
					}
				}
				remove(p) {
					const o = typeof p == "string" ? this.a.get(p) : p;
					if (o && this.a.get(o.id)) {
						const f = this.primary?.id === o.id;
						this.a.delete(o.id), this.f.fire(o), f && this.g.fire(this.primary);
					}
				}
				toggle(p, o) {
					o ? this.add(p) : this.remove(p);
				}
				j(p) {
					if (
						!p.icon ||
						u.ThemeIcon.getModifier(p.icon) !== "spin" ||
						this.h.getValue(d.TerminalSettingId.TabsEnableAnimation)
					)
						return p;
					let o;
					return (
						p.icon.id === r.$fP.id
							? (o = t.$ak.play)
							: (o = u.ThemeIcon.modify(p.icon, void 0)),
						{ ...p, icon: o }
					);
				}
			};
			(e.$fHb = c), (e.$fHb = c = Ne([j(0, C.$gj)], c));
			function n(g) {
				switch (g) {
					case E.default.Error:
						return m.$TS;
					case E.default.Warning:
						return m.$US;
					default:
						return "";
				}
			}
		},
	),
		