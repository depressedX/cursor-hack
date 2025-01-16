define(de[707], he([1, 0, 6, 3, 84, 44]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LMb = e.$KMb = e.$JMb = void 0);
			class C extends i.$1c {
				constructor(a, h) {
					super(), (this.a = a), (this.b = h), this.c();
				}
				c() {
					this.b &&
						this.D(
							this.b.onDidModelChange((a) => {
								(a.kind === E.GroupModelChangeKind.EDITOR_ACTIVE ||
									(a.kind === E.GroupModelChangeKind.EDITOR_CLOSE &&
										this.b &&
										this.b.isEmpty)) &&
									this.a.stop().hide();
							}),
						);
				}
				show(a, h) {
					return this.b && this.b.isEmpty
						? w.$9N
						: a === !0
							? this.f(!0, h)
							: this.f(a, h);
				}
				f(a, h) {
					return (
						typeof a == "boolean"
							? this.a.infinite().show(h)
							: this.a.total(a).show(h),
						{
							total: (c) => {
								this.a.total(c);
							},
							worked: (c) => {
								this.a.hasTotal() ? this.a.worked(c) : this.a.infinite().show();
							},
							done: () => {
								this.a.stop().hide();
							},
						}
					);
				}
				async showWhile(a, h) {
					if (this.b && this.b.isEmpty)
						try {
							await a;
						} catch {}
					return this.g(a, h);
				}
				async g(a, h) {
					try {
						this.a.infinite().show(h), await a;
					} catch {
					} finally {
						this.a.stop().hide();
					}
				}
			}
			e.$JMb = C;
			var d;
			(function (u) {
				let a;
				(function (n) {
					(n[(n.None = 0)] = "None"),
						(n[(n.Done = 1)] = "Done"),
						(n[(n.Infinite = 2)] = "Infinite"),
						(n[(n.While = 3)] = "While"),
						(n[(n.Work = 4)] = "Work");
				})((a = u.Type || (u.Type = {}))),
					(u.None = { type: a.None }),
					(u.Done = { type: a.Done }),
					(u.Infinite = { type: a.Infinite });
				class h {
					constructor(g, p, o) {
						(this.whilePromise = g),
							(this.whileStart = p),
							(this.whileDelay = o),
							(this.type = a.While);
					}
				}
				u.While = h;
				class c {
					constructor(g, p) {
						(this.total = g), (this.worked = p), (this.type = a.Work);
					}
				}
				u.Work = c;
			})(d || (d = {}));
			class m extends i.$1c {
				constructor(a, h) {
					super(),
						(this.b = a),
						(this.c = h),
						(this.a = d.None),
						this.registerListeners();
				}
				registerListeners() {
					this.D(
						this.c.onDidChangeActive(() => {
							this.c.isActive ? this.f() : this.g();
						}),
					);
				}
				f() {
					if (this.a.type !== d.Done.type)
						if (this.a.type === d.Type.While) {
							let a;
							if (this.a.whileDelay > 0) {
								const h = this.a.whileDelay - (Date.now() - this.a.whileStart);
								h > 0 && (a = h);
							}
							this.h(a);
						} else
							this.a.type === d.Type.Infinite
								? this.b.infinite().show()
								: this.a.type === d.Type.Work &&
									(this.a.total && this.b.total(this.a.total).show(),
									this.a.worked && this.b.worked(this.a.worked).show());
				}
				g() {
					this.b.stop().hide();
				}
				show(a, h) {
					return (
						typeof a == "boolean"
							? (this.a = d.Infinite)
							: (this.a = new d.Work(a, void 0)),
						this.c.isActive &&
							(this.a.type === d.Type.Infinite
								? this.b.infinite().show(h)
								: this.a.type === d.Type.Work &&
									typeof this.a.total == "number" &&
									this.b.total(this.a.total).show(h)),
						{
							total: (c) => {
								(this.a = new d.Work(
									c,
									this.a.type === d.Type.Work ? this.a.worked : void 0,
								)),
									this.c.isActive && this.b.total(c);
							},
							worked: (c) => {
								!this.c.isActive || this.b.hasTotal()
									? ((this.a = new d.Work(
											this.a.type === d.Type.Work ? this.a.total : void 0,
											this.a.type === d.Type.Work &&
												typeof this.a.worked == "number"
												? this.a.worked + c
												: c,
										)),
										this.c.isActive && this.b.worked(c))
									: ((this.a = d.Infinite), this.b.infinite().show());
							},
							done: () => {
								(this.a = d.Done), this.c.isActive && this.b.stop().hide();
							},
						}
					);
				}
				async showWhile(a, h) {
					this.a.type === d.Type.While &&
						(a = Promise.all([a, this.a.whilePromise])),
						(this.a = new d.While(a, h || 0, Date.now()));
					try {
						this.h(h), await a;
					} catch {
					} finally {
						(this.a.type !== d.Type.While || this.a.whilePromise === a) &&
							((this.a = d.None), this.c.isActive && this.b.stop().hide());
					}
				}
				h(a) {
					this.c.isActive && this.b.infinite().show(a);
				}
			}
			e.$KMb = m;
			class r extends i.$1c {
				get isActive() {
					return this.f;
				}
				constructor(a, h) {
					super(),
						(this.b = a),
						(this.f = h),
						(this.a = this.D(new t.$re())),
						(this.onDidChangeActive = this.a.event);
				}
				PUBLIC_BE_CAREFUL_onScopeOpened(a) {
					this.g(a);
				}
				PUBLIC_BE_CAREFUL_onScopeClosed(a) {
					this.h(a);
				}
				g(a) {
					a === this.b && (this.f || ((this.f = !0), this.a.fire()));
				}
				h(a) {
					a === this.b && this.f && ((this.f = !1), this.a.fire());
				}
			}
			e.$LMb = r;
		}),
		define(
			de[3540],
			he([
				1, 0, 4, 584, 3, 6, 29, 105, 436, 550, 21, 128, 84, 7, 276, 28, 92, 707,
				173, 106, 95, 2348,
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
					(e.$Kuc = void 0);
				class l extends r.Part {
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(B, U, L, v, I),
							(this.pb = $),
							(this.qb = v),
							(this.rb = S),
							(this.sb = T),
							(this.tb = P),
							(this.ub = k),
							(this.vb = D),
							(this.wb = M),
							(this.xb = N),
							(this.yb = A),
							(this.zb = R),
							(this.Ab = O),
							(this.b = this.D(new E.$re())),
							(this.y = this.D(new E.$re())),
							(this.eb = new Map()),
							(this.fb = new Map()),
							(this.ib = new Map()),
							(this.mb = this.D(new w.$2c())),
							(this.hb = v.get(M, u.StorageScope.WORKSPACE, this.xb)),
							(this.db = this.D((0, s.$dib)()));
					}
					Bb($, v) {
						if (this.gb?.getId() === $) return v && this.gb.focus(), this.gb;
						if (this.element) return this.Cb($, v);
					}
					Cb($, v = !1) {
						const S = i.$Sdb.nextId();
						(this.nb = S), this.gb && this.Kb(), this.Gb($);
						const I = this.Db($, !0);
						if (!(this.nb !== S || (this.gb && this.gb.getId() !== I.getId())))
							return this.gb?.getId() === I.getId()
								? (v && I.focus(), this.b.fire({ composite: I, focus: v }), I)
								: (this.Eb(I),
									v && I.focus(),
									I && this.b.fire({ composite: I, focus: v }),
									I);
					}
					Db($, v) {
						const S = this.ib.get($);
						if (S) return S.composite;
						const I = this.vb.getComposite($);
						if (I) {
							const T = this,
								P = new o.$KMb(
									(0, g.$wg)(this.kb),
									new (class extends o.$LMb {
										constructor() {
											super(I.id, !!v),
												this.D(T.b.event((M) => this.g(M.composite.getId()))),
												this.D(T.y.event((M) => this.h(M.getId())));
										}
									})(),
								),
								k = this.D(this.ub.createChild(new a.$Ki([h.$bO, P]))),
								L = I.instantiate(k),
								D = new w.$Zc();
							return (
								this.ib.set($, { composite: L, disposable: D, progress: P }),
								D.add(L.onTitleAreaUpdate(() => this.Fb(L.getId()), this)),
								D.add(k),
								L
							);
						}
						throw new Error(`Unable to find composite with id ${$}`);
					}
					Eb($) {
						this.gb = $;
						const v = this.gb.getId();
						v !== this.xb
							? this.qb.store(
									this.wb,
									v,
									u.StorageScope.WORKSPACE,
									u.StorageTarget.MACHINE,
								)
							: this.qb.remove(this.wb, u.StorageScope.WORKSPACE),
							(this.hb = this.gb.getId());
						let S = this.eb.get($.getId());
						if (
							(S ||
								((S = (0, c.$)(".composite")),
								S.classList.add(...this.zb.split(" ")),
								(S.id = $.getId()),
								$.create(S),
								$.updateStyles(),
								this.eb.set($.getId(), S)),
							!this.gb || $.getId() !== this.gb.getId())
						)
							return;
						this.R()?.appendChild(S), (0, c.show)(S);
						const T = (0, g.$wg)(this.bb);
						T.actionRunner = $.getActionRunner();
						const P = this.vb.getComposite($.getId());
						P && P.name !== $.getTitle() && this.Gb($.getId(), $.getTitle());
						let k = this.fb.get($.getId());
						k || ((k = this.Hb($)), this.fb.set($.getId(), k)),
							k(),
							(this.mb.value = T.actionRunner.onDidRun((L) => {
								L.error && !(0, C.$8)(L.error) && this.pb.error(L.error);
							})),
							$.setVisible(!0),
							!(!this.gb || $.getId() !== this.gb.getId()) &&
								(this.lb && $.layout(this.lb),
								this.ob && $.setBoundarySashes(this.ob));
					}
					Fb($) {
						const v = this.ib.get($);
						if (
							(v && this.Gb($, v.composite.getTitle()), this.gb?.getId() === $)
						) {
							const S = this.Hb(this.gb);
							this.fb.set(this.gb.getId(), S), S();
						} else this.fb.delete($);
					}
					Gb($, v) {
						const S = this.vb.getComposite($);
						if (!S || !this.jb) return;
						v || (v = S.name);
						const I = this.sb.lookupKeybinding($);
						this.jb.updateTitle($, v, I?.getLabel() ?? void 0),
							(0, g.$wg)(this.bb).setAriaLabel((0, t.localize)(3057, null, v));
					}
					Hb($) {
						const v = $?.getMenuIds(),
							S = $?.getActions().slice(0) || [],
							I = $?.getSecondaryActions().slice(0) || [],
							T = (0, g.$wg)(this.bb);
						return (
							(T.context = this.Qb()),
							() => T.setActions((0, d.$fib)(S), (0, d.$fib)(I), v)
						);
					}
					Ib() {
						return this.gb;
					}
					Jb() {
						return this.hb;
					}
					Kb() {
						if (!this.gb) return;
						const $ = this.gb;
						this.gb = void 0;
						const v = this.eb.get($.getId());
						return (
							$.setVisible(!1),
							v && (v.remove(), (0, c.hide)(v)),
							this.kb?.stop().hide(),
							this.bb && this.Hb()(),
							this.y.fire($),
							$
						);
					}
					O($) {
						const v = (0, c.$fhb)($, (0, c.$)(".composite"));
						v.classList.add("title"), (this.jb = this.Mb(v));
						const S = (0, c.$fhb)(v, (0, c.$)(".title-actions"));
						return (
							(this.bb = this.D(
								this.ub.createInstance(f.$Syb, S, {
									actionViewItemProvider: (I, T) => this.Pb(I, T),
									orientation: d.ActionsOrientation.HORIZONTAL,
									getKeyBinding: (I) => this.sb.lookupKeybinding(I.id),
									anchorAlignmentProvider: () => this.Sb(),
									toggleMenuTitle: (0, t.localize)(3058, null),
									telemetrySource: this.yb,
									hoverDelegate: this.db,
								}),
							)),
							this.Hb()(),
							v
						);
					}
					Mb($) {
						const v = (0, c.$fhb)($, (0, c.$)(".title-label")),
							S = (0, c.$fhb)(v, (0, c.$)("h2"));
						this.cb = S;
						const I = this.D(
								this.tb.setupManagedHover((0, s.$cib)("mouse"), S, ""),
							),
							T = this;
						return {
							updateTitle: (P, k, L) => {
								(!this.gb || this.gb.getId() === P) &&
									((S.innerText = k),
									I.update(L ? (0, t.localize)(3059, null, k, L) : k));
							},
							updateStyles: () => {
								S.style.color = (T.Ab && T.w(T.Ab)) || "";
							},
						};
					}
					Nb() {
						return (0, c.$)(".composite");
					}
					Ob() {
						return (0, c.$)(".composite");
					}
					updateStyles() {
						super.updateStyles(), (0, g.$wg)(this.jb).updateStyles();
					}
					Pb($, v) {
						return this.gb
							? this.gb.getActionViewItem($, v)
							: (0, p.$Pyb)(this.ub, $, v);
					}
					Qb() {
						return this.gb ? this.gb.getActionsContext() : null;
					}
					Q($) {
						const v = (0, c.$fhb)($, (0, c.$)(".content"));
						return (this.kb = this.D(new m.$bpb(v, b.$nyb))), this.kb.hide(), v;
					}
					getProgressIndicator($) {
						const v = this.ib.get($);
						return v ? v.progress : void 0;
					}
					Sb() {
						return n.AnchorAlignment.RIGHT;
					}
					layout($, v, S, I) {
						super.layout($, v, S, I),
							(this.lb = c.$pgb.lift(super.Z($, v).contentSize)),
							this.gb?.layout(this.lb);
					}
					setBoundarySashes($) {
						(this.ob = $), this.gb?.setBoundarySashes($);
					}
					Tb($) {
						if (this.gb?.getId() === $) return !1;
						this.eb.delete($), this.fb.delete($);
						const v = this.ib.get($);
						return (
							v &&
								(v.composite.dispose(),
								(0, w.$Vc)(v.disposable),
								this.ib.delete($)),
							!0
						);
					}
					dispose() {
						this.eb.clear(),
							this.fb.clear(),
							this.ib.forEach(($) => {
								$.composite.dispose(), (0, w.$Vc)($.disposable);
							}),
							this.ib.clear(),
							super.dispose();
					}
				}
				e.$Kuc = l;
			},
		),
		define(
			de[3541],
			he([1, 0, 180, 5, 35, 10, 8, 39, 2868, 20, 63, 473, 31]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mxc = void 0);
				let c = class extends m.$Lxc {
					constructor(g, p, o, f, b, s, l) {
						super(p, f, b, s, g, l),
							(this.I = o),
							(this.H = a.$f9b.bindTo(this.s)),
							this.J();
					}
					J() {
						this.D(this.onShow(() => this.H.set(!0))),
							this.D(this.onHide(() => this.H.set(!1)));
					}
					z() {
						return super.z(this.t, {
							ignoreFocusOut: () =>
								!this.u.getValue("workbench.quickOpen.closeOnFocusLost"),
							backKeybindingLabel: () =>
								this.I.lookupKeybinding(
									"workbench.action.quickInputBack",
								)?.getLabel() || void 0,
						});
					}
				};
				(e.$Mxc = c),
					(e.$Mxc = c =
						Ne(
							[
								j(0, E.$gj),
								j(1, i.$Li),
								j(2, d.$uZ),
								j(3, C.$6j),
								j(4, w.$iP),
								j(5, t.$jEb),
								j(6, h.$ek),
							],
							c,
						)),
					(0, r.$lK)(u.$DJ, c, r.InstantiationType.Delayed);
			},
		),
		