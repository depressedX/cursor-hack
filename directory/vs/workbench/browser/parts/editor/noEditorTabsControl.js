define(de[4010], he([1, 0, 1055, 7, 1515]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ntc = void 0);
			class w extends t.$qtc {
				constructor() {
					super(...arguments), (this.kb = null);
				}
				ib(C) {
					return { primary: [], secondary: [] };
				}
				openEditor(C) {
					return this.Ab();
				}
				openEditors(C) {
					return this.Ab();
				}
				Ab() {
					const C = this.Bb();
					return (this.kb = this.R.activeEditor), C;
				}
				Bb() {
					return !!(
						(!this.kb && this.R.activeEditor) ||
						(this.kb && !this.R.activeEditor) ||
						!this.kb ||
						!this.R.isActive(this.kb)
					);
				}
				beforeCloseEditor(C) {}
				closeEditor(C) {}
				closeEditors(C) {}
				moveEditor(C, d, m) {}
				pinEditor(C) {}
				stickEditor(C) {}
				unstickEditor(C) {}
				setActive(C) {}
				updateEditorSelections() {}
				updateEditorLabel(C) {}
				updateEditorDirty(C) {}
				getHeight() {
					return 0;
				}
				layout(C) {
					return new i.$pgb(C.container.width, this.getHeight());
				}
			}
			e.$ntc = w;
		}),
		define(
			de[4011],
			he([
				1, 0, 44, 1055, 233, 123, 159, 7, 247, 97, 28, 82, 3, 106, 1879, 1515,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ltc = void 0);
				class g extends i.$qtc {
					constructor() {
						super(...arguments), (this.Ab = Object.create(null));
					}
					get Cb() {
						return this.Bb?.control;
					}
					bb(o) {
						super.bb(o);
						const f = (this.kb = o);
						(f.draggable = !0), this.Eb(f), this.D(C.$Qhb.addTarget(f));
						const b = document.createElement("div");
						b.classList.add("label-container"),
							f.appendChild(b),
							(this.zb = this.D(
								this.U.createInstance(w.$vPb, b, { hoverDelegate: this.xb() }),
							).element),
							this.D(
								(0, d.$0fb)(this.zb.element, d.$$gb.CLICK, (s) => this.Fb(s)),
							),
							(this.Bb = this.D(
								this.U.createInstance(n.$yrc, b, this.Q, {
									showFileIcons: !1,
									showSymbolIcons: !0,
									showDecorationColors: !1,
									widgetStyles: {
										...c.$Byb,
										breadcrumbsBackground: r.$UL.transparent.toString(),
									},
									showPlaceholder: !1,
								}),
							)),
							this.D(this.Bb.onDidEnablementChange(() => this.Kb())),
							f.classList.toggle("breadcrumbs", !!this.Cb),
							this.D((0, h.$Yc)(() => f.classList.remove("breadcrumbs"))),
							this.db(f, ["title-actions"]);
					}
					Eb(o) {
						let f,
							b = !1;
						this.D(
							new d.$Hhb(o, {
								onDragStart: (s) => {
									b = this.mb(s, o);
								},
								onDrag: (s) => {
									f = s;
								},
								onDragEnd: (s) => {
									this.nb(s, f, o, b);
								},
							}),
						),
							this.D((0, d.$0fb)(o, d.$$gb.DBLCLICK, (s) => this.Gb(s))),
							this.D((0, d.$0fb)(o, d.$$gb.AUXCLICK, (s) => this.Hb(s))),
							this.D((0, d.$0fb)(o, C.EventType.Tap, (s) => this.Ib(s)));
						for (const s of [d.$$gb.CONTEXT_MENU, C.EventType.Contextmenu])
							this.D(
								(0, d.$0fb)(o, s, (l) => {
									this.R.activeEditor && this.sb(this.R.activeEditor, l, o);
								}),
							);
					}
					Fb(o) {
						d.$ahb.stop(o, !1), setTimeout(() => this.Z.quickAccess.show());
					}
					Gb(o) {
						d.$ahb.stop(o), this.Q.pinEditor();
					}
					Hb(o) {
						o.button === 1 &&
							this.R.activeEditor &&
							(d.$ahb.stop(o, !0),
							(0, t.$z1)(
								this.R,
								this.R.activeEditor,
								t.EditorCloseMethod.MOUSE,
								this.P.partOptions,
							) || this.Q.closeEditor(this.R.activeEditor));
					}
					Ib(o) {
						const f = o.initialTarget;
						!(0, d.$Ygb)(f) ||
							!this.zb ||
							!(0, d.$Bgb)(f, this.zb.element) ||
							setTimeout(() => this.Z.quickAccess.show(), 50);
					}
					openEditor(o) {
						return this.Jb();
					}
					openEditors(o) {
						return this.Jb();
					}
					Jb() {
						const o = this.Lb(() => this.Ob());
						return o || this.Mb(() => this.Ob()), o;
					}
					beforeCloseEditor(o) {}
					closeEditor(o) {
						this.Lb(() => this.Ob());
					}
					closeEditors(o) {
						this.Lb(() => this.Ob());
					}
					moveEditor(o, f, b) {
						this.Lb(() => this.Ob());
					}
					pinEditor(o) {
						this.Nb(o, () => this.Ob());
					}
					stickEditor(o) {}
					unstickEditor(o) {}
					setActive(o) {
						this.Ob();
					}
					updateEditorSelections() {}
					updateEditorLabel(o) {
						this.Nb(o, () => this.Ob());
					}
					updateEditorDirty(o) {
						this.Nb(o, () => {
							const f = (0, u.$wg)(this.kb);
							o.isDirty() && !o.isSaving()
								? f.classList.add("dirty")
								: f.classList.remove("dirty");
						});
					}
					updateOptions(o, f) {
						super.updateOptions(o, f),
							(o.labelFormat !== f.labelFormat ||
								!(0, a.$zo)(o.decorations, f.decorations)) &&
								this.Ob();
					}
					updateStyles() {
						this.Ob();
					}
					Kb() {
						(0, u.$wg)(this.kb).classList.toggle("breadcrumbs", !!this.Cb),
							this.Ob();
					}
					Lb(o) {
						return (!this.Ab.editor && this.R.activeEditor) ||
							(this.Ab.editor && !this.R.activeEditor) ||
							!this.Ab.editor ||
							!this.R.isActive(this.Ab.editor)
							? (o(), !0)
							: !1;
					}
					Mb(o) {
						!this.Ab.editor ||
							!this.R.activeEditor ||
							(this.Ab.pinned !== this.R.isPinned(this.R.activeEditor) && o());
					}
					Nb(o, f) {
						this.R.isActive(o) && f();
					}
					Ob() {
						const o = this.R.activeEditor ?? void 0,
							f = this.P.partOptions,
							b = o ? this.R.isPinned(o) : !1,
							s = this.P.activeGroup === this.Q;
						(this.Ab = { editor: o, pinned: b }),
							this.Cb &&
								(s
									? (this.Cb.update(),
										this.Cb.domNode.classList.toggle("preview", !b))
									: this.Cb.hide());
						const [l, y] = (0, u.$xg)(this.kb, this.zb);
						if (!o) l.classList.remove("dirty"), y.clear(), this.lb();
						else {
							this.updateEditorDirty(o);
							const { labelFormat: $ } = this.P.partOptions;
							let v;
							(this.Cb && !this.Cb.isHidden()) || ($ === "default" && !s)
								? (v = "")
								: (v = o.getDescription(this.Pb($)) || ""),
								y.setResource(
									{
										resource: t.$A1.getOriginalUri(o, {
											supportSideBySide: t.SideBySideEditor.BOTH,
										}),
										name: o.getName(),
										description: v,
									},
									{
										title: this.wb(o),
										italic: !b,
										extraClasses: ["single-tab", "title-label"].concat(
											o.getLabelExtraClasses(),
										),
										fileDecorations: {
											colors: !!f.decorations?.colors,
											badges: !!f.decorations?.badges,
										},
										icon: o.getIcon(),
										hideIcon: f.showIcons === !1,
									},
								),
								s
									? (l.style.color = this.w(E.$QEb) || "")
									: (l.style.color = this.w(E.$SEb) || ""),
								this.hb();
						}
					}
					Pb(o) {
						switch (o) {
							case "short":
								return t.Verbosity.SHORT;
							case "long":
								return t.Verbosity.LONG;
							default:
								return t.Verbosity.MEDIUM;
						}
					}
					ib(o) {
						return this.P.activeGroup === this.Q
							? o
							: {
									primary: this.P.partOptions.alwaysShowEditorActions
										? o.primary
										: o.primary.filter(
												(b) => b.id === m.$YVb || b.id === m.$0Vb,
											),
									secondary: o.secondary,
								};
					}
					getHeight() {
						return this.vb;
					}
					layout(o) {
						return (
							this.Cb?.layout(void 0),
							new d.$pgb(o.container.width, this.getHeight())
						);
					}
				}
				e.$ltc = g;
			},
		),
		define(
			de[4012],
			he([1, 0, 7, 5, 35, 1879, 1935, 4011, 3, 4009, 4010, 2344]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$otc = void 0);
				let a = class extends w.$pP {
					get g() {
						return this.c?.control;
					}
					constructor(c, n, g, p, o, f, b) {
						super(b),
							(this.j = c),
							(this.m = n),
							(this.r = g),
							(this.s = p),
							(this.t = o),
							(this.u = f),
							(this.b = this.D(new m.$Zc())),
							(this.f = this.D(new m.$Zc())),
							(this.a = this.y()),
							(this.c = this.z());
					}
					y() {
						let c;
						switch (this.r.partOptions.showTabs) {
							case "none":
								c = u.$ntc;
								break;
							case "single":
								c = d.$ltc;
								break;
							case "multiple":
							default:
								c = this.r.partOptions.pinnedTabsOnSeparateRow
									? r.$mtc
									: C.$ktc;
								break;
						}
						const n = this.u.createInstance(
							c,
							this.j,
							this.m,
							this.r,
							this.s,
							this.t,
						);
						return this.b.add(n);
					}
					z() {
						if (this.r.partOptions.showTabs === "single") return;
						const c = document.createElement("div");
						c.classList.add("breadcrumbs-below-tabs"), this.j.appendChild(c);
						const n = this.f.add(
							this.u.createInstance(E.$yrc, c, this.s, {
								showFileIcons: !0,
								showSymbolIcons: !0,
								showDecorationColors: !1,
								showPlaceholder: !0,
							}),
						);
						return (
							this.f.add(n.onDidEnablementChange(() => this.s.relayout())),
							this.f.add(n.onDidVisibilityChange(() => this.s.relayout())),
							n
						);
					}
					openEditor(c, n) {
						const g = this.a.openEditor(c, n);
						this.C(g);
					}
					openEditors(c) {
						const n = this.a.openEditors(c);
						this.C(n);
					}
					C(c) {
						c ? this.g?.update() : this.g?.revealLast();
					}
					beforeCloseEditor(c) {
						return this.a.beforeCloseEditor(c);
					}
					closeEditor(c) {
						this.a.closeEditor(c), this.F();
					}
					closeEditors(c) {
						this.a.closeEditors(c), this.F();
					}
					F() {
						this.s.activeEditor || this.g?.update();
					}
					moveEditor(c, n, g, p) {
						return this.a.moveEditor(c, n, g, p);
					}
					pinEditor(c) {
						return this.a.pinEditor(c);
					}
					stickEditor(c) {
						return this.a.stickEditor(c);
					}
					unstickEditor(c) {
						return this.a.unstickEditor(c);
					}
					setActive(c) {
						return this.a.setActive(c);
					}
					updateEditorSelections() {
						this.a.updateEditorSelections();
					}
					updateEditorLabel(c) {
						return this.a.updateEditorLabel(c);
					}
					updateEditorDirty(c) {
						return this.a.updateEditorDirty(c);
					}
					updateOptions(c, n) {
						c.showTabs !== n.showTabs ||
						(n.showTabs !== "single" &&
							c.pinnedTabsOnSeparateRow !== n.pinnedTabsOnSeparateRow)
							? (this.b.clear(),
								this.f.clear(),
								(0, t.$9fb)(this.j),
								(this.a = this.y()),
								(this.c = this.z()))
							: this.a.updateOptions(c, n);
					}
					layout(c) {
						const n = this.a.layout(c);
						let g;
						return (
							this.g?.isHidden() === !1 &&
								((g = new t.$pgb(c.container.width, E.$xrc.HEIGHT)),
								this.g.layout(g)),
							new t.$pgb(c.container.width, n.height + (g ? g.height : 0))
						);
					}
					getHeight() {
						const c = this.a.getHeight(),
							n = this.g?.isHidden() === !1 ? E.$xrc.HEIGHT : 0;
						return { total: c + n, offset: c };
					}
				};
				(e.$otc = a), (e.$otc = a = Ne([j(5, i.$Li), j(6, w.$iP)], a));
			},
		),
		define(
			de[1936],
			he([
				1, 0, 4, 105, 968, 260, 5, 3, 35, 21, 53, 1349, 14, 26, 79, 50, 11, 7,
				114, 168, 159, 276, 149, 92, 10, 8, 49, 39, 34, 62, 783, 830, 357, 78,
				72, 52, 133, 1903, 28, 27, 123, 31,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
			) {
				"use strict";
				var H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lrc = e.$krc = e.$jrc = e.$irc = e.$hrc = void 0),
					(e.$mrc = Y);
				let q = class extends d.$1c {
					static {
						H = this;
					}
					static {
						this.b = 0;
					}
					static {
						this.ACCOUNTS_ICON = (0, n.$$O)(
							"accounts-view-bar-icon",
							h.$ak.account,
							(0, t.localize)(3554, null),
						);
					}
					constructor(ee, _, te, Q, Z, se, re) {
						super(),
							(this.h = ee),
							(this.j = _),
							(this.m = te),
							(this.n = Z),
							(this.q = se),
							(this.r = re),
							(this.c = this.D(new g.$rj(w.$5qc))),
							(this.f = this.D(new g.$rj(w.$6qc))),
							(this.element = document.createElement("div"));
						const le = () => ({
							anchorAlignment:
								Q.getValue("workbench.sideBar.location") === "left"
									? l.AnchorAlignment.RIGHT
									: l.AnchorAlignment.LEFT,
							anchorAxisAlignment: l.AnchorAxisAlignment.HORIZONTAL,
						});
						(this.g = this.D(
							new i.$eib(this.element, {
								actionViewItemProvider: (oe, ae) => {
									if (oe.id === w.$5qc)
										return this.n.createInstance(
											K,
											this.h,
											{ ...ae, colors: this.j, hoverOptions: this.m },
											le,
										);
									if (oe.id === w.$6qc)
										return this.n.createInstance(
											G,
											this.h,
											{ ...ae, colors: this.j, hoverOptions: this.m },
											le,
											(pe) => {
												pe.unshift(
													(0, g.$wj)({
														id: "hideAccounts",
														label: (0, t.localize)(3555, null),
														run: () => ie(se, !1),
													}),
													new g.$tj(),
												);
											},
										);
									throw new Error(`No view item for action '${oe.id}'`);
								},
								orientation: i.ActionsOrientation.VERTICAL,
								ariaLabel: (0, t.localize)(3556, null),
								preventLoopNavigation: !0,
							}),
						)),
							this.w && this.g.push(this.f, { index: H.b }),
							this.g.push(this.c),
							this.t();
					}
					t() {
						this.r.whenInstalledExtensionsRegistered().then(() => {
							this.B.isDisposed ||
								this.D(
									this.q.onDidChangeValue(
										r.StorageScope.PROFILE,
										G.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
										this.B,
									)(() => this.u()),
								);
						});
					}
					create(ee) {
						ee.appendChild(this.element);
					}
					focus() {
						this.g.focus(!0);
					}
					size() {
						return this.g.viewItems.length;
					}
					getContextMenuActions() {
						return [
							(0, g.$wj)({
								id: "toggleAccountsVisibility",
								label: (0, t.localize)(3557, null),
								checked: this.w,
								run: () => (this.w = !this.w),
							}),
						];
					}
					u() {
						(this.g.length() === 2 && this.w) ||
							(this.g.length() === 2
								? this.g.pull(H.b)
								: this.g.push(this.f, { index: H.b }));
					}
					get w() {
						return Y(this.q);
					}
					set w(ee) {
						ie(this.q, ee);
					}
				};
				(e.$hrc = q),
					(e.$hrc =
						q =
						H =
							Ne([j(3, v.$gj), j(4, C.$Li), j(5, r.$lq), j(6, u.$q2)], q));
				let V = class extends a.$_qc {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(
							_,
							{ draggable: !1, icon: !0, hasPopup: !0, ...te },
							() => !0,
							se,
							re,
							pe,
							$e,
						),
							(this.gb = ee),
							(this.hb = Q),
							(this.ib = Z),
							(this.jb = le),
							(this.kb = oe),
							(this.lb = ae),
							(this.mb = ye),
							this.nb(),
							this.D(
								this.mb.onDidChangeActivity((ue) => {
									(0, U.$lg)(ue) && ue === this.W.id && this.nb();
								}),
							);
					}
					nb() {
						const ee = this.mb.getActivity(this.W.id);
						let _ = ee[0];
						if (_) {
							const { badge: te, priority: Q } = _;
							te instanceof E.$8qc &&
								ee.length > 1 &&
								(_ = { badge: this.ob(ee, Q ?? 0) });
						}
						this.action.activity = _;
					}
					ob(ee, _) {
						const te = ee.filter(
								(se) => se.badge instanceof E.$8qc && (se.priority ?? 0) === _,
							),
							Q = te.reduce((se, re) => se + re.badge.number, 0),
							Z = () =>
								te.reduce(
									(se, re, le) => (
										(se = se + re.badge.getDescription()),
										le < te.length - 1 &&
											(se = `${se}
`),
										se
									),
									"",
								);
						return new E.$8qc(Q, Z);
					}
					render(ee) {
						super.render(ee),
							this.D(
								(0, o.$0fb)(this.c, o.$$gb.MOUSE_DOWN, async (_) => {
									o.$ahb.stop(_, !0), _?.button !== 2 && this.qb();
								}),
							),
							this.D(
								(0, o.$0fb)(this.c, o.$$gb.CONTEXT_MENU, async (_) => {
									_.stopPropagation();
									const te = new d.$Zc(),
										Q = await this.pb(te),
										Z = new b.$2fb((0, o.getWindow)(this.c), _);
									this.kb.showContextMenu({
										getAnchor: () => Z,
										getActions: () => Q,
										onHide: () => te.dispose(),
									});
								}),
							),
							this.D(
								(0, o.$0fb)(this.c, o.$$gb.KEY_UP, (_) => {
									const te = new f.$7fb(_);
									(te.equals(z.KeyCode.Enter) || te.equals(z.KeyCode.Space)) &&
										(o.$ahb.stop(_, !0), this.qb());
								}),
							),
							this.D(
								(0, o.$0fb)(this.c, s.EventType.Tap, (_) => {
									o.$ahb.stop(_, !0), this.qb();
								}),
							);
					}
					async pb(ee) {
						return this.hb();
					}
					async qb() {
						const ee = new d.$Zc(),
							_ = ee.add(this.jb.createMenu(this.gb, this.lb)),
							te = await this.rb(_, ee),
							{ anchorAlignment: Q, anchorAxisAlignment: Z } = this.ib() ?? {
								anchorAlignment: void 0,
								anchorAxisAlignment: void 0,
							};
						this.kb.showContextMenu({
							getAnchor: () => this.g,
							anchorAlignment: Q,
							anchorAxisAlignment: Z,
							getActions: () => te,
							onHide: () => ee.dispose(),
							menuActionOptions: { renderShortTitle: !0 },
						});
					}
					async rb(ee, _) {
						const te = [];
						return (
							(0, $.$Kyb)(
								ee,
								{ renderShortTitle: !0 },
								{ primary: [], secondary: te },
							),
							te
						);
					}
				};
				V = Ne(
					[
						j(5, m.$iP),
						j(6, A.$Uyb),
						j(7, p.$YX),
						j(8, I.$Xxb),
						j(9, S.$6j),
						j(10, v.$gj),
						j(11, T.$uZ),
						j(12, E.$7qc),
					],
					V,
				);
				let G = class extends V {
					static {
						this.ACCOUNTS_VISIBILITY_PREFERENCE_KEY =
							"workbench.activity.showAccounts";
					}
					constructor(
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
					) {
						const Le = be.createInstance(a.$$qc, {
							id: w.$6qc,
							name: (0, t.localize)(3558, null),
							classNames: c.ThemeIcon.asClassNameArray(q.ACCOUNTS_ICON),
						});
						super(
							p.$XX.AccountsContext,
							Le,
							_,
							ee,
							te,
							Z,
							re,
							oe,
							le,
							ae,
							ue,
							fe,
							ge,
						),
							(this.wb = Q),
							(this.xb = se),
							(this.yb = pe),
							(this.zb = ye),
							(this.Ab = me),
							(this.Bb = ve),
							(this.Cb = Ce),
							(this.sb = new Map()),
							(this.tb = new Set()),
							(this.ub = !1),
							(this.vb = new y.$Y(() => (0, D.$gsb)(this.Ab, this.zb))),
							this.D(Le),
							this.Db(),
							this.Eb();
					}
					Db() {
						this.D(
							this.yb.onDidRegisterAuthenticationProvider(async (ee) => {
								await this.Kb(ee.id);
							}),
						),
							this.D(
								this.yb.onDidUnregisterAuthenticationProvider((ee) => {
									this.sb.delete(ee.id), this.tb.delete(ee.id);
								}),
							),
							this.D(
								this.yb.onDidChangeSessions(async (ee) => {
									if (ee.event.removed)
										for (const _ of ee.event.removed)
											this.Jb(ee.providerId, _.account);
									for (const _ of [
										...(ee.event.changed ?? []),
										...(ee.event.added ?? []),
									])
										try {
											await this.Ib(ee.providerId, _.account);
										} catch (te) {
											this.Bb.error(te);
										}
								}),
							);
					}
					async Eb() {
						if (
							(await this.xb.when(R.LifecyclePhase.Restored), this.B.isDisposed)
						)
							return;
						const ee = this.D(
							(0, o.$egb)((0, o.getWindow)(this.element), async () => {
								await this.Fb(), ee.dispose();
							}),
						);
					}
					async Fb() {
						const ee = this.yb.getProviderIds(),
							_ = await Promise.allSettled(ee.map((te) => this.Kb(te)));
						for (const te of _)
							te.status === "rejected" && this.Bb.error(te.reason);
						this.ub = !0;
					}
					async rb(ee, _) {
						await super.rb(ee, _);
						const te = this.yb.getProviderIds(),
							Q = ee.getActions();
						let Z = [];
						for (const se of te) {
							if (!this.ub) {
								const oe = _.add(
									new g.$rj(
										"noAccountsAvailable",
										(0, t.localize)(3559, null),
										void 0,
										!1,
									),
								);
								Z.push(oe);
								break;
							}
							const re = this.yb.getProvider(se).label,
								le = this.sb.get(se);
							if (!le) {
								if (this.tb.has(se)) {
									const oe = _.add(
										new g.$rj(
											"providerUnavailable",
											(0, t.localize)(3560, null, re),
											void 0,
											!1,
										),
									);
									Z.push(oe);
									try {
										await this.Kb(se);
									} catch (ae) {
										this.Bb.error(ae);
									}
								}
								continue;
							}
							for (const oe of le) {
								const pe = [
									(0, g.$wj)({
										id: `configureSessions${oe.label}`,
										label: (0, t.localize)(3561, null),
										enabled: !0,
										run: () =>
											this.Cb.executeCommand(
												"_manageTrustedExtensionsForAccount",
												{ providerId: se, accountLabel: oe.label },
											),
									}),
								];
								oe.canSignOut &&
									pe.push(
										(0, g.$wj)({
											id: "signOut",
											label: (0, t.localize)(3562, null),
											enabled: !0,
											run: () =>
												this.Cb.executeCommand("_signOutOfAccount", {
													providerId: se,
													accountLabel: oe.label,
												}),
										}),
									);
								const $e = new g.$uj(
									"activitybar.submenu",
									`${oe.label} (${re})`,
									pe,
								);
								Z.push($e);
							}
						}
						if (te.length && !Z.length) {
							const se = _.add(
								new g.$rj(
									"noAccountsAvailable",
									(0, t.localize)(3563, null),
									void 0,
									!1,
								),
							);
							Z.push(se);
						}
						return (
							Z.length && Q.length && Z.push(new g.$tj()),
							Q.forEach((se, re) => {
								const le = se[1];
								(Z = Z.concat(le)), re !== Q.length - 1 && Z.push(new g.$tj());
							}),
							Z
						);
					}
					async pb(ee) {
						const _ = await super.pb(ee);
						return this.wb(_), _;
					}
					async Ib(ee, _) {
						let te = this.sb.get(ee);
						te || ((te = []), this.sb.set(ee, te));
						const Q = await this.vb.value;
						let Z = !0;
						Q &&
							!Q.canSignOut &&
							(await this.yb.getSessions(ee)).some(
								(re) => re.id === Q.id && re.account.id === _.id,
							) &&
							(Z = !1);
						const se = te.find((re) => re.label === _.label);
						se ? Z || (se.canSignOut = Z) : te.push({ ..._, canSignOut: Z });
					}
					Jb(ee, _) {
						const te = this.sb.get(ee);
						if (!te) return;
						const Q = te.findIndex((Z) => Z.id === _.id);
						Q !== -1 &&
							(te.splice(Q, 1), te.length === 0 && this.sb.delete(ee));
					}
					async Kb(ee) {
						try {
							const _ = await this.yb.getSessions(ee);
							this.tb.delete(ee);
							for (const te of _)
								try {
									await this.Ib(ee, te.account);
								} catch (Q) {
									this.Bb.error(Q);
								}
						} catch (_) {
							this.Bb.error(_), this.tb.add(ee);
						}
					}
				};
				(e.$irc = G),
					(e.$irc = G =
						Ne(
							[
								j(4, m.$iP),
								j(5, R.$n6),
								j(6, A.$Uyb),
								j(7, I.$Xxb),
								j(8, p.$YX),
								j(9, S.$6j),
								j(10, M.$$7),
								j(11, N.$r8),
								j(12, k.$Bk),
								j(13, v.$gj),
								j(14, T.$uZ),
								j(15, L.$Yrb),
								j(16, P.$ik),
								j(17, E.$7qc),
								j(18, C.$Li),
								j(19, x.$ek),
							],
							G,
						));
				let K = class extends V {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						const fe = ye.createInstance(a.$$qc, {
							id: w.$5qc,
							name: (0, t.localize)(3564, null),
							classNames: c.ThemeIcon.asClassNameArray(
								Q.currentProfile.icon
									? c.ThemeIcon.fromId(Q.currentProfile.icon)
									: B.$frc,
							),
						});
						super(
							p.$XX.GlobalActivity,
							fe,
							_,
							ee,
							te,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							$e,
							ue,
						),
							(this.ub = Q),
							this.D(fe),
							this.D(
								this.ub.onDidChangeCurrentProfile((me) => {
									fe.compositeBarActionItem = {
										...fe.compositeBarActionItem,
										classNames: c.ThemeIcon.asClassNameArray(
											Q.currentProfile.icon
												? c.ThemeIcon.fromId(Q.currentProfile.icon)
												: B.$frc,
										),
									};
								}),
							);
					}
					render(ee) {
						super.render(ee),
							(this.sb = (0, o.$fhb)(ee, (0, o.$)(".profile-badge"))),
							(this.tb = (0, o.$fhb)(
								this.sb,
								(0, o.$)(".profile-badge-content"),
							)),
							this.vb();
					}
					vb() {
						!this.sb ||
							!this.tb ||
							((0, o.$9fb)(this.tb),
							(0, o.hide)(this.sb),
							!this.ub.currentProfile.isDefault &&
								((this.ub.currentProfile.icon &&
									this.ub.currentProfile.icon !== B.$frc.id) ||
									this.action.activity ||
									((0, o.show)(this.sb),
									this.tb.classList.toggle("profile-text-overlay", !0),
									this.tb.classList.toggle("profile-icon-overlay", !1),
									(this.tb.textContent = this.ub.currentProfile.name
										.substring(0, 2)
										.toUpperCase()))));
					}
					ab() {
						super.ab(), this.vb();
					}
					db() {
						return this.ub.currentProfile.isDefault
							? super.db()
							: (0, t.localize)(3565, null, this.ub.currentProfile.name);
					}
				};
				(e.$jrc = K),
					(e.$jrc = K =
						Ne(
							[
								j(3, O.$P8),
								j(4, m.$iP),
								j(5, A.$Uyb),
								j(6, p.$YX),
								j(7, I.$Xxb),
								j(8, S.$6j),
								j(9, v.$gj),
								j(10, N.$r8),
								j(11, T.$uZ),
								j(12, C.$Li),
								j(13, E.$7qc),
							],
							K,
						));
				let J = class extends G {
					constructor(
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
					) {
						super(
							() => X(fe, !0),
							{
								..._,
								colors: (Ce) => ({
									badgeBackground: Ce.getColor(F.$cGb),
									badgeForeground: Ce.getColor(F.$dGb),
								}),
								hoverOptions: ee,
								compact: !0,
							},
							() => {},
							(Ce) => Ce,
							te,
							Q,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
							ue,
							me,
							ve,
							ge,
							be,
						);
					}
				};
				(e.$krc = J),
					(e.$krc = J =
						Ne(
							[
								j(2, m.$iP),
								j(3, R.$n6),
								j(4, A.$Uyb),
								j(5, I.$Xxb),
								j(6, p.$YX),
								j(7, S.$6j),
								j(8, M.$$7),
								j(9, N.$r8),
								j(10, k.$Bk),
								j(11, v.$gj),
								j(12, T.$uZ),
								j(13, L.$Yrb),
								j(14, r.$lq),
								j(15, P.$ik),
								j(16, E.$7qc),
								j(17, C.$Li),
								j(18, x.$ek),
							],
							J,
						));
				let W = class extends K {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(
							() => X(ue, !1),
							{
								..._,
								colors: (fe) => ({
									badgeBackground: fe.getColor(F.$cGb),
									badgeForeground: fe.getColor(F.$dGb),
								}),
								hoverOptions: ee,
								compact: !0,
							},
							() => {},
							te,
							Q,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
						);
					}
				};
				(e.$lrc = W),
					(e.$lrc = W =
						Ne(
							[
								j(2, O.$P8),
								j(3, m.$iP),
								j(4, A.$Uyb),
								j(5, p.$YX),
								j(6, I.$Xxb),
								j(7, S.$6j),
								j(8, v.$gj),
								j(9, N.$r8),
								j(10, T.$uZ),
								j(11, C.$Li),
								j(12, E.$7qc),
								j(13, r.$lq),
							],
							W,
						));
				function X(ne, ee) {
					const _ = [];
					return (
						ee &&
							_.push(
								(0, g.$wj)({
									id: "hideAccounts",
									label: (0, t.localize)(3566, null),
									run: () => ie(ne, !1),
								}),
								new g.$tj(),
							),
						[
							..._,
							(0, g.$wj)({
								id: "toggle.hideAccounts",
								label: (0, t.localize)(3567, null),
								checked: Y(ne),
								run: () => ie(ne, !Y(ne)),
							}),
							(0, g.$wj)({
								id: "toggle.hideManage",
								label: (0, t.localize)(3568, null),
								checked: !0,
								enabled: !1,
								run: () => {
									throw new Error('"Manage" can not be hidden');
								},
							}),
						]
					);
				}
				function Y(ne) {
					return ne.getBoolean(
						G.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
						r.StorageScope.PROFILE,
						!0,
					);
				}
				function ie(ne, ee) {
					ne.store(
						G.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
						ee,
						r.StorageScope.PROFILE,
						r.StorageTarget.USER,
					);
				}
			},
		),
		define(
			de[1937],
			he([
				1, 0, 4, 105, 260, 96, 5, 3, 4007, 7, 21, 53, 9, 1349, 60, 8, 28, 78,
				12, 26, 50, 136, 32, 10,
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
				l,
				y,
				$,
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nuc = void 0);
				let S = class extends d.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F) {
						super(),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.y = F),
							(this.a = this.D(new d.$0c())),
							(this.g = new Map()),
							(this.h = !1),
							(this.db = void 0),
							(this.b =
								N.partId === E.Parts.PANEL_PART
									? n.ViewContainerLocation.Panel
									: N.partId === E.Parts.AUXILIARYBAR_PART
										? n.ViewContainerLocation.AuxiliaryBar
										: n.ViewContainerLocation.Sidebar),
							(this.dndHandler = new m.$Luc(
								this.t,
								this.b,
								this.j.orientation,
								async (H, q) => (await this.n.openPaneComposite(H, q)) ?? null,
								(H, q, V) =>
									this.f.move(
										H,
										q,
										this.j.orientation === i.ActionsOrientation.VERTICAL
											? V?.verticallyBefore
											: V?.horizontallyBefore,
									),
								() => this.f.getCompositeBarItems(),
							));
						const x = this.eb.map((H) => ({
							id: H.id,
							name: H.name,
							visible: !this.U(H.id, H),
							order: H.order,
							pinned: H.pinned,
						}));
						(this.f = this.z(x)), this.N(this.ab()), this.F();
					}
					z(D) {
						return this.D(
							this.q.createInstance(m.$Muc, D, {
								icon: this.j.icon,
								compact: this.j.compact,
								orientation: this.j.orientation,
								activityHoverOptions: this.j.activityHoverOptions,
								preventLoopNavigation: this.j.preventLoopNavigation,
								openComposite: async (M, N) =>
									(await this.n.openPaneComposite(M, !N)) ?? null,
								getActivityAction: (M) => this.M(M).activityAction,
								getCompositePinnedAction: (M) => this.M(M).pinnedAction,
								getCompositeBadgeAction: (M) => this.M(M).badgeAction,
								getOnCompositeClickAction: (M) => this.M(M).activityAction,
								fillExtraContextMenuActions: (M, N) =>
									this.j.fillExtraContextMenuActions(M, N),
								getContextMenuActionsForComposite: (M) => this.C(M),
								getDefaultCompositeId: () =>
									this.t.getDefaultViewContainer(this.b)?.id,
								dndHandler: this.dndHandler,
								compositeSize: this.j.compositeSize,
								overflowActionSize: this.j.overflowActionSize,
								colors: (M) => this.j.colors(M),
							}),
						);
					}
					C(D) {
						const M = [],
							N = this.t.getViewContainerById(D),
							A = this.t.getDefaultViewContainerLocation(N);
						if (A !== this.t.getViewContainerLocation(N))
							M.push(
								(0, s.$wj)({
									id: "resetLocationAction",
									label: (0, t.localize)(3636, null),
									run: () =>
										this.t.moveViewContainerToLocation(
											N,
											A,
											void 0,
											"resetLocationAction",
										),
								}),
							);
						else {
							const R = this.t.getViewContainerModel(N);
							if (R.allViewDescriptors.length === 1) {
								const O = R.allViewDescriptors[0],
									B = this.t.getDefaultContainerById(O.id);
								B !== N &&
									M.push(
										(0, s.$wj)({
											id: "resetLocationAction",
											label: (0, t.localize)(3637, null),
											run: () =>
												this.t.moveViewsToContainer(
													[O],
													B,
													void 0,
													"resetLocationAction",
												),
										}),
									);
							}
						}
						return M;
					}
					F() {
						this.D(
							this.t.onDidChangeViewContainers(({ added: D, removed: M }) =>
								this.G(D, M),
							),
						),
							this.D(
								this.t.onDidChangeContainerLocation(
									({ viewContainer: D, from: M, to: N }) => this.H(D, M, N),
								),
							),
							this.D(
								this.n.onDidPaneCompositeOpen((D) => this.I(D.getId(), !0)),
							),
							this.D(
								this.n.onDidPaneCompositeClose((D) => this.I(D.getId(), !1)),
							),
							this.s.whenInstalledExtensionsRegistered().then(() => {
								this.B.isDisposed ||
									(this.J(),
									this.D(this.f.onDidChange(() => this.cb())),
									this.D(
										this.r.onDidChangeValue(
											u.StorageScope.PROFILE,
											this.j.pinnedViewContainersKey,
											this.B,
										)((D) => this.bb(D)),
									));
							});
					}
					G(D, M) {
						M.filter(({ location: N }) => N === this.b).forEach(
							({ container: N }) => this.O(N),
						),
							this.N(
								D.filter(({ location: N }) => N === this.b).map(
									({ container: N }) => N,
								),
							);
					}
					H(D, M, N) {
						M === this.b && this.O(D), N === this.b && this.N([D]);
					}
					I(D, M) {
						M ? this.L(D) : this.f.deactivateComposite(D);
					}
					J() {
						this.h = !0;
						for (const { id: D } of this.eb) {
							const M = this.Z(D);
							M
								? this.S(M)
								: this.t.isViewContainerRemovedPermanently(D)
									? this.Y(D)
									: this.X(D);
						}
						this.cb();
					}
					L(D) {
						const M = this.Z(D);
						M &&
							(this.W(M),
							this.f.activateComposite(M.id),
							this.U(M) &&
								this.t.getViewContainerModel(M).activeViewDescriptors.length ===
									0 &&
								this.X(M.id));
					}
					create(D) {
						return this.f.create(D);
					}
					M(D) {
						let M = this.g.get(D);
						if (!M) {
							const N = this.Z(D);
							if (N) {
								const A = this.t.getViewContainerModel(N);
								M = {
									activityAction: this.D(
										this.q.createInstance(I, this.Q(A), this.m, this.n),
									),
									pinnedAction: this.D(new c.$drc(this.Q(A), this.f)),
									badgeAction: this.D(new c.$erc(this.Q(A), this.f)),
								};
							} else {
								const A = this.eb.filter((R) => R.id === D)[0];
								M = {
									activityAction: this.D(
										this.q.createInstance(
											T,
											this.R(D, A?.name ?? D, A?.icon, void 0),
											this.m,
											this.n,
										),
									),
									pinnedAction: this.D(new P(D, this.f)),
									badgeAction: this.D(new k(D, this.f)),
								};
							}
							this.g.set(D, M);
						}
						return M;
					}
					N(D) {
						for (const M of D) {
							this.W(M),
								this.eb.filter(({ id: B }) => B === M.id)[0] ||
									this.f.pin(M.id),
								this.n.getActivePaneComposite()?.getId() === M.id &&
									this.f.activateComposite(M.id);
							const R = this.t.getViewContainerModel(M);
							this.P(M, R), this.S(M);
							const O = new d.$Zc();
							O.add(R.onDidChangeContainerInfo(() => this.P(M, R))),
								O.add(R.onDidChangeActiveViewDescriptors(() => this.S(M))),
								this.a.set(M.id, O);
						}
					}
					O(D) {
						this.a.deleteAndDispose(D.id), this.Y(D.id);
					}
					P(D, M) {
						const N = this.Q(M),
							{ activityAction: A, pinnedAction: R } = this.M(D.id);
						A.updateCompositeBarActionItem(N),
							R instanceof P && R.setActivity(N),
							this.j.recomputeSizes && this.f.recomputeSizes(),
							this.cb();
					}
					Q(D) {
						return this.R(D.viewContainer.id, D.title, D.icon, D.keybindingId);
					}
					R(D, M, N, A) {
						let R, O;
						if (this.j.icon)
							if (h.URI.isUri(N)) {
								O = N;
								const B = (0, r.$vhb)(N),
									U = new l.$Gj();
								U.update(B);
								const z = `activity-${D.replace(/\./g, "-")}-${U.digest()}`,
									F = `.monaco-workbench .${this.j.partContainerClass} .monaco-action-bar .action-label.${z}`;
								(R = [z, "uri-icon"]),
									(0, r.$Wgb)(
										F,
										`
				mask: ${B} no-repeat 50% 50%;
				mask-size: ${this.j.iconSize}px;
				-webkit-mask: ${B} no-repeat 50% 50%;
				-webkit-mask-size: ${this.j.iconSize}px;
				mask-origin: padding;
				-webkit-mask-origin: padding;
			`,
									);
							} else
								b.ThemeIcon.isThemeIcon(N) &&
									(R = b.ThemeIcon.asClassNameArray(N));
						return {
							id: D,
							name: M,
							classNames: R,
							iconUrl: O,
							keybindingId: A,
						};
					}
					S(D) {
						this.U(D) ? this.X(D.id) : this.W(D);
					}
					U(D, M) {
						const N = (0, p.$lg)(D) ? this.Z(D) : D,
							A = (0, p.$lg)(D) ? D : D.id;
						if (N)
							if (N.hideIfEmpty) {
								if (
									this.t.getViewContainerModel(N).activeViewDescriptors.length >
									0
								)
									return !1;
							} else return !1;
						if (
							!this.h &&
							!(
								this.m === E.Parts.SIDEBAR_PART &&
								this.w.remoteAuthority &&
								f.$p
							)
						) {
							if (
								((M = M || this.eb.find(({ id: R }) => R === A)),
								!N && M?.isBuiltin && M?.visible)
							)
								return !1;
							if (M?.views?.length)
								return M.views.every(
									({ when: R }) =>
										!!R && !this.u.contextMatchesRules(g.$Kj.deserialize(R)),
								);
						}
						return !0;
					}
					W(D) {
						this.f.addComposite({
							id: D.id,
							name: typeof D.title == "string" ? D.title : D.title.value,
							order: D.order,
							requestedIndex: D.requestedIndex,
						});
					}
					X(D) {
						this.f.hideComposite(D);
						const M = this.g.get(D);
						M &&
							(M.activityAction.dispose(),
							M.pinnedAction.dispose(),
							this.g.delete(D));
					}
					Y(D) {
						this.f.removeComposite(D);
						const M = this.g.get(D);
						M &&
							(M.activityAction.dispose(),
							M.pinnedAction.dispose(),
							this.g.delete(D));
					}
					getPinnedPaneCompositeIds() {
						const D = this.f.getPinnedComposites().map((M) => M.id);
						return this.ab()
							.filter((M) => this.f.isPinned(M.id))
							.sort((M, N) => D.indexOf(M.id) - D.indexOf(N.id))
							.map((M) => M.id);
					}
					getVisiblePaneCompositeIds() {
						return this.f
							.getVisibleComposites()
							.filter(
								(D) =>
									this.n.getActivePaneComposite()?.getId() === D.id ||
									this.f.isPinned(D.id),
							)
							.map((D) => D.id);
					}
					getContextMenuActions() {
						return this.f.getContextMenuActions();
					}
					focus(D) {
						this.f.focus(D);
					}
					layout(D, M) {
						this.f.layout(new r.$pgb(D, M));
					}
					Z(D) {
						const M = this.t.getViewContainerById(D);
						return M && this.t.getViewContainerLocation(M) === this.b
							? M
							: void 0;
					}
					ab() {
						return this.t.getViewContainersByLocation(this.b);
					}
					bb(D) {
						if (this.jb !== this.kb()) {
							(this.ob = void 0), (this.ib = void 0), (this.db = void 0);
							const M = [],
								N = this.f.getCompositeBarItems();
							for (const A of this.eb)
								M.push({
									id: A.id,
									name: A.name,
									order: A.order,
									pinned: A.pinned,
									visible: A.visible && !!this.Z(A.id),
								});
							for (const A of this.ab())
								if (!M.some(({ id: R }) => R === A.id)) {
									const R = N.findIndex(({ id: O }) => O === A.id);
									if (R !== -1) {
										const O = N[R];
										M.splice(R, 0, {
											id: A.id,
											name:
												typeof A.title == "string" ? A.title : A.title.value,
											order: O.order,
											pinned: O.pinned,
											visible: O.visible,
										});
									} else
										M.push({
											id: A.id,
											name:
												typeof A.title == "string" ? A.title : A.title.value,
											order: A.order,
											pinned: !0,
											visible: !this.U(A),
										});
								}
							this.f.setCompositeBarItems(M);
						}
					}
					cb() {
						const D = [],
							M = this.f.getCompositeBarItems();
						for (const N of M) {
							const A = this.Z(N.id);
							if (A) {
								const R = this.t.getViewContainerModel(A),
									O = [];
								for (const { when: B } of R.allViewDescriptors)
									O.push({ when: B ? B.serialize() : void 0 });
								D.push({
									id: N.id,
									name: R.title,
									icon:
										h.URI.isUri(R.icon) && this.w.remoteAuthority
											? void 0
											: R.icon,
									views: O,
									pinned: N.pinned,
									order: N.order,
									visible: N.visible,
									isBuiltin: !A.extensionId,
								});
							} else
								D.push({
									id: N.id,
									name: N.name,
									pinned: N.pinned,
									order: N.order,
									visible: !1,
									isBuiltin: !1,
								});
						}
						this.fb(D);
					}
					get eb() {
						if (this.db === void 0) {
							this.db = this.gb();
							for (const D of this.mb()) {
								const M = this.db.find((N) => N.id === D.id);
								M &&
									((M.visible = D.visible ?? M.visible),
									(M.name = D.name),
									(M.icon = D.themeIcon
										? D.themeIcon
										: D.iconUrl
											? h.URI.revive(D.iconUrl)
											: void 0),
									h.URI.isUri(M.icon) &&
										this.w.remoteAuthority &&
										(M.icon = void 0),
									(M.views = D.views),
									(M.isBuiltin = D.isBuiltin));
							}
							for (const D of this.sb()) {
								const M = this.db.find((N) => N.id === D.id);
								M && (M.visible = D.visible ?? M.visible);
							}
						}
						return this.db;
					}
					fb(D) {
						const M = this.gb();
						this.hb(
							D.map(({ id: N, pinned: A, order: R }) => ({
								id: N,
								pinned: A,
								visible: !!M.find(({ id: O }) => O === N)?.visible,
								order: R,
							})),
						),
							this.nb(
								D.map(
									({ id: N, icon: A, name: R, views: O, isBuiltin: B }) => ({
										id: N,
										iconUrl: h.URI.isUri(A) ? A : void 0,
										themeIcon: b.ThemeIcon.isThemeIcon(A) ? A : void 0,
										name: R,
										isBuiltin: B,
										views: O,
									}),
								),
							),
							this.tb(
								D.map(({ id: N, visible: A }) => ({ id: N, visible: A })),
							);
					}
					gb() {
						return JSON.parse(this.jb);
					}
					hb(D) {
						this.jb = JSON.stringify(D);
					}
					get jb() {
						return this.ib || (this.ib = this.kb()), this.ib;
					}
					set jb(D) {
						this.jb !== D && ((this.ib = D), this.lb(D));
					}
					kb() {
						return this.r.get(
							this.j.pinnedViewContainersKey,
							u.StorageScope.PROFILE,
							"[]",
						);
					}
					lb(D) {
						this.r.store(
							this.j.pinnedViewContainersKey,
							D,
							u.StorageScope.PROFILE,
							u.StorageTarget.USER,
						);
					}
					mb() {
						return JSON.parse(this.pb);
					}
					nb(D) {
						this.pb = JSON.stringify(D);
					}
					get pb() {
						return this.ob || (this.ob = this.qb()), this.ob;
					}
					set pb(D) {
						this.pb !== D && ((this.ob = D), this.rb(D));
					}
					qb() {
						return this.r.get(
							this.j.placeholderViewContainersKey,
							u.StorageScope.PROFILE,
							"[]",
						);
					}
					rb(D) {
						this.r.store(
							this.j.placeholderViewContainersKey,
							D,
							u.StorageScope.PROFILE,
							u.StorageTarget.MACHINE,
						);
					}
					sb() {
						return JSON.parse(this.vb);
					}
					tb(D) {
						this.vb = JSON.stringify(D);
					}
					get vb() {
						return this.ub || (this.ub = this.wb()), this.ub;
					}
					set vb(D) {
						this.vb !== D && ((this.ub = D), this.xb(D));
					}
					wb() {
						return this.r.get(
							this.j.viewContainersWorkspaceStateKey,
							u.StorageScope.WORKSPACE,
							"[]",
						);
					}
					xb(D) {
						this.r.store(
							this.j.viewContainersWorkspaceStateKey,
							D,
							u.StorageScope.WORKSPACE,
							u.StorageTarget.MACHINE,
						);
					}
				};
				(e.$Nuc = S),
					(e.$Nuc = S =
						Ne(
							[
								j(3, C.$Li),
								j(4, u.$lq),
								j(5, a.$q2),
								j(6, n.$K1),
								j(7, g.$6j),
								j(8, o.$r8),
								j(9, E.$mEb),
							],
							S,
						));
				let I = class extends c.$$qc {
					static {
						v = this;
					}
					static {
						this.h = 300;
					}
					constructor(D, M, N, A, R, O, B) {
						super(D),
							(this.s = M),
							(this.t = N),
							(this.L = A),
							(this.M = R),
							(this.N = O),
							(this.O = B),
							(this.r = 0),
							this.P(),
							this.D(
								this.O.onDidChangeActivity((U) => {
									!(0, p.$lg)(U) &&
										U.id === this.compositeBarActionItem.id &&
										this.P();
								}),
							);
					}
					updateCompositeBarActionItem(D) {
						this.compositeBarActionItem = D;
					}
					P() {
						const D = this.O.getViewContainerActivities(
							this.compositeBarActionItem.id,
						);
						this.activity = D[0];
					}
					async run(D) {
						if ((0, r.$7gb)(D) && D.button === 2) return;
						const M = Date.now();
						if (M > this.r && M - this.r < v.h) return;
						this.r = M;
						const N = D && "preserveFocus" in D ? !D.preserveFocus : !0;
						if (this.s === E.Parts.ACTIVITYBAR_PART) {
							const A = this.L.isVisible(E.Parts.SIDEBAR_PART),
								R = this.t.getActivePaneComposite(),
								O = this.N.getValue("workbench.activityBar.iconClickBehavior");
							if (A && R?.getId() === this.compositeBarActionItem.id) {
								switch (O) {
									case "focus":
										this.Q("refocus"),
											this.t.openPaneComposite(
												this.compositeBarActionItem.id,
												N,
											);
										break;
									case "toggle":
									default:
										this.Q("hide"),
											this.L.setPartHidden(!0, E.Parts.SIDEBAR_PART);
										break;
								}
								return;
							}
							this.Q("show");
						}
						return (
							await this.t.openPaneComposite(this.compositeBarActionItem.id, N),
							this.activate()
						);
					}
					Q(D) {
						this.M.publicLog2("activityBarAction", {
							viewletId: this.compositeBarActionItem.id,
							action: D,
						});
					}
				};
				I = v = Ne([j(3, E.$mEb), j(4, y.$km), j(5, $.$gj), j(6, w.$7qc)], I);
				class T extends I {}
				class P extends c.$drc {
					constructor(D, M) {
						super({ id: D, name: D, classNames: void 0 }, M);
					}
					setActivity(D) {
						this.label = D.name;
					}
				}
				class k extends c.$erc {
					constructor(D, M) {
						super({ id: D, name: D, classNames: void 0 }, M);
					}
					setCompositeBarActionItem(D) {
						this.label = D.name;
					}
				}
			},
		),
		define(
			de[4013],
			he([
				1, 0, 4, 105, 550, 96, 5, 3, 716, 35, 123, 51, 7, 28, 1311, 10, 253, 50,
				114, 27, 160, 1937, 1936, 21, 11, 8, 99, 92, 60, 142, 53, 78, 58, 57,
				2335, 2334,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tuc = e.$Suc = void 0);
				let R = class extends w.Part {
					static {
						A = this;
					}
					static {
						this.ACTION_HEIGHT = 48;
					}
					static {
						this.pinnedViewContainersKey = "workbench.activity.pinnedViewlets2";
					}
					static {
						this.placeholderViewContainersKey =
							"workbench.activity.placeholderViewlets";
					}
					static {
						this.viewContainersWorkspaceStateKey =
							"workbench.activity.viewletsWorkspaceState";
					}
					constructor(z, F, x, H, q) {
						super(E.Parts.ACTIVITYBAR_PART, { hasTitle: !1 }, H, q, x),
							(this.c = z),
							(this.y = F),
							(this.minimumWidth = 48),
							(this.maximumWidth = 48),
							(this.minimumHeight = 0),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.a = this.D(new d.$2c()));
					}
					bb() {
						return this.y.createInstance(
							O,
							{
								partContainerClass: "activitybar",
								pinnedViewContainersKey: A.pinnedViewContainersKey,
								placeholderViewContainersKey: A.placeholderViewContainersKey,
								viewContainersWorkspaceStateKey:
									A.viewContainersWorkspaceStateKey,
								orientation: i.ActionsOrientation.VERTICAL,
								icon: !0,
								iconSize: 24,
								activityHoverOptions: {
									position: () =>
										this.M.getSideBarPosition() === E.Position.LEFT
											? s.HoverPosition.RIGHT
											: s.HoverPosition.LEFT,
								},
								preventLoopNavigation: !0,
								recomputeSizes: !1,
								fillExtraContextMenuActions: (z, F) => {},
								compositeSize: 52,
								colors: (z) => ({
									activeForegroundColor: z.getColor(u.$8Fb),
									inactiveForegroundColor: z.getColor(u.$9Fb),
									activeBorderColor: z.getColor(u.$$Fb),
									activeBackground: z.getColor(u.$aGb),
									badgeBackground: z.getColor(u.$cGb),
									badgeForeground: z.getColor(u.$dGb),
									dragAndDropBorder: z.getColor(u.$bGb),
									activeBackgroundColor: void 0,
									inactiveBackgroundColor: void 0,
									activeBorderBottomColor: void 0,
								}),
								overflowActionSize: A.ACTION_HEIGHT,
							},
							E.Parts.ACTIVITYBAR_PART,
							this.c,
							!0,
						);
					}
					Q(z) {
						return (
							(this.element = z),
							(this.b = (0, h.$fhb)(this.element, (0, h.$)(".content"))),
							this.M.isVisible(E.Parts.ACTIVITYBAR_PART) && this.show(),
							this.b
						);
					}
					getPinnedPaneCompositeIds() {
						return this.a.value?.getPinnedPaneCompositeIds() ?? [];
					}
					getVisiblePaneCompositeIds() {
						return this.a.value?.getVisiblePaneCompositeIds() ?? [];
					}
					focus() {
						this.a.value?.focus();
					}
					updateStyles() {
						super.updateStyles();
						const z = (0, c.$wg)(this.getContainer()),
							F = this.w(u.$7Fb) || "";
						z.style.backgroundColor = F;
						const x = this.w(u.$0Fb) || this.w(a.$OP) || "";
						z.classList.toggle("bordered", !!x),
							(z.style.borderColor = x || "");
					}
					show(z) {
						this.b &&
							(this.a.value ||
								((this.a.value = this.bb()),
								this.a.value.create(this.b),
								this.dimension &&
									this.layout(this.dimension.width, this.dimension.height)),
							z && this.focus());
					}
					hide() {
						this.a.value && (this.a.clear(), this.b && (0, h.$9fb)(this.b));
					}
					layout(z, F) {
						if ((super.layout(z, F, 0, 0), !this.a.value)) return;
						const x = super.Z(z, F).contentSize;
						this.a.value.layout(z, x.height);
					}
					toJSON() {
						return { type: E.Parts.ACTIVITYBAR_PART };
					}
				};
				(e.$Suc = R),
					(e.$Suc =
						R =
						A =
							Ne([j(1, C.$Li), j(2, E.$mEb), j(3, r.$iP), j(4, $.$lq)], R));
				let O = class extends l.$Nuc {
					constructor(z, F, x, H, q, V, G, K, J, W, X, Y, ie) {
						super(
							{
								...z,
								fillExtraContextMenuActions: (ne, ee) => {
									z.fillExtraContextMenuActions(ne, ee), this.Gb(ne, ee);
								},
							},
							F,
							x,
							q,
							V,
							G,
							K,
							J,
							W,
							ie,
						),
							(this.Eb = X),
							(this.Fb = Y),
							(this.Db = this.D(new d.$Zc())),
							H &&
								(this.Cb = this.D(
									q.createInstance(
										y.$hrc,
										() => this.getContextMenuActions(),
										(ne) => this.j.colors(ne),
										this.j.activityHoverOptions,
									),
								)),
							this.D(
								this.Eb.onDidChangeConfiguration((ne) => {
									ne.affectsConfiguration("window.menuBarVisibility") &&
										((0, p.$wY)(this.Eb) === "compact" ? this.Ib() : this.Hb());
								}),
							);
					}
					Gb(z, F) {
						const x = (0, p.$wY)(this.Eb);
						(x === "compact" || x === "hidden" || x === "toggle") &&
							z.unshift(
								(0, o.$wj)({
									id: "toggleMenuVisibility",
									label: (0, t.localize)(3010, null),
									checked: x === "compact",
									run: () =>
										this.Eb.updateValue(
											"window.menuBarVisibility",
											x === "compact" ? "toggle" : "compact",
										),
								}),
								new o.$tj(),
							),
							x === "compact" &&
								this.Ab &&
								F?.target &&
								(0, h.$Bgb)(F.target, this.Ab) &&
								z.unshift(
									(0, o.$wj)({
										id: "hideCompactMenu",
										label: (0, t.localize)(3011, null),
										run: () =>
											this.Eb.updateValue("window.menuBarVisibility", "toggle"),
									}),
									new o.$tj(),
								),
							this.Cb &&
								(z.push(new o.$tj()),
								z.push(...this.Cb.getContextMenuActions())),
							z.push(new o.$tj()),
							z.push(...this.getActivityBarContextMenuActions());
					}
					Hb() {
						this.zb && (this.zb.dispose(), (this.zb = void 0)),
							this.Ab && (this.Ab.remove(), (this.Ab = void 0));
					}
					Ib() {
						if (this.zb) return;
						(this.Ab = document.createElement("div")),
							this.Ab.classList.add("menubar"),
							(0, c.$wg)(this.yb).prepend(this.Ab),
							(this.zb = this.D(this.q.createInstance(n.$3qc))),
							this.zb.create(this.Ab);
					}
					Jb() {
						this.Db.clear(),
							this.Ab &&
								this.Db.add(
									(0, h.$0fb)(this.Ab, h.$$gb.KEY_DOWN, (z) => {
										const F = new f.$7fb(z);
										(F.equals(b.KeyCode.DownArrow) ||
											F.equals(b.KeyCode.RightArrow)) &&
											this.focus();
									}),
								),
							this.Bb &&
								this.Db.add(
									(0, h.$0fb)(this.Bb, h.$$gb.KEY_DOWN, (z) => {
										const F = new f.$7fb(z);
										F.equals(b.KeyCode.DownArrow) ||
										F.equals(b.KeyCode.RightArrow)
											? this.Cb?.focus()
											: (F.equals(b.KeyCode.UpArrow) ||
													F.equals(b.KeyCode.LeftArrow)) &&
												this.zb?.toggleFocus();
									}),
								),
							this.Cb &&
								this.Db.add(
									(0, h.$0fb)(this.Cb.element, h.$$gb.KEY_DOWN, (z) => {
										const F = new f.$7fb(z);
										(F.equals(b.KeyCode.UpArrow) ||
											F.equals(b.KeyCode.LeftArrow)) &&
											this.focus(this.getVisiblePaneCompositeIds().length - 1);
									}),
								);
					}
					create(z) {
						return (
							(this.yb = z),
							(0, p.$wY)(this.Eb) === "compact" && this.Ib(),
							(this.Bb = super.create(this.yb)),
							this.Cb && this.Cb.create(this.yb),
							this.Jb(),
							this.Bb
						);
					}
					layout(z, F) {
						this.Ab &&
							(this.j.orientation === i.ActionsOrientation.VERTICAL
								? (F -= this.Ab.clientHeight)
								: (z -= this.Ab.clientWidth)),
							this.Cb &&
								(this.j.orientation === i.ActionsOrientation.VERTICAL
									? (F -= this.Cb.size() * R.ACTION_HEIGHT)
									: (z -= this.Cb.element.clientWidth)),
							super.layout(z, F);
					}
					getActivityBarContextMenuActions() {
						const z = this.Fb.getMenuActions(
								v.$XX.ActivityBarPositionMenu,
								this.u,
								{ shouldForwardArgs: !0, renderShortTitle: !0 },
							),
							F = [];
						return (
							(0, T.$Jyb)(z, { primary: [], secondary: F }),
							[
								new o.$uj(
									"workbench.action.panel.position",
									(0, t.localize)(3012, null),
									F,
								),
								(0, o.$wj)({
									id: m.$T5b.ID,
									label: m.$T5b.getLabel(this.y),
									run: () => this.q.invokeFunction((x) => new m.$T5b().run(x)),
								}),
							]
						);
					}
				};
				(e.$Tuc = O),
					(e.$Tuc = O =
						Ne(
							[
								j(4, C.$Li),
								j(5, $.$lq),
								j(6, L.$q2),
								j(7, P.$K1),
								j(8, S.$6j),
								j(9, D.$r8),
								j(10, g.$gj),
								j(11, v.$YX),
								j(12, E.$mEb),
							],
							O,
						)),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.default",
									title: {
										...(0, t.localize2)(3025, "Move Activity Bar to Side"),
										mnemonicTitle: (0, t.localize)(3013, null),
									},
									shortTitle: (0, t.localize)(3014, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.DEFAULT,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 1 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.DEFAULT,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.DEFAULT,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.top",
									title: {
										...(0, t.localize2)(3026, "Move Activity Bar to Top"),
										mnemonicTitle: (0, t.localize)(3015, null),
									},
									shortTitle: (0, t.localize)(3016, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.TOP,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 2 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.TOP,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.TOP,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.bottom",
									title: {
										...(0, t.localize2)(3027, "Move Activity Bar to Bottom"),
										mnemonicTitle: (0, t.localize)(3017, null),
									},
									shortTitle: (0, t.localize)(3018, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.BOTTOM,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 3 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.BOTTOM,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.BOTTOM,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.hide",
									title: {
										...(0, t.localize2)(3028, "Hide Activity Bar"),
										mnemonicTitle: (0, t.localize)(3019, null),
									},
									shortTitle: (0, t.localize)(3020, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.HIDDEN,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 4 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.HIDDEN,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.HIDDEN,
								);
							}
						},
					),
					v.$ZX.appendMenuItem(v.$XX.MenubarAppearanceMenu, {
						submenu: v.$XX.ActivityBarPositionMenu,
						title: (0, t.localize)(3021, null),
						group: "3_workbench_layout_move",
						order: 2,
					}),
					v.$ZX.appendMenuItem(v.$XX.ViewContainerTitleContext, {
						submenu: v.$XX.ActivityBarPositionMenu,
						title: (0, t.localize)(3022, null),
						when: S.$Kj.equals(
							"viewContainerLocation",
							(0, P.$J1)(P.ViewContainerLocation.Sidebar),
						),
						group: "3_workbench_layout_move",
						order: 1,
					}),
					v.$ZX.appendMenuItem(v.$XX.ViewTitleContext, {
						submenu: v.$XX.ActivityBarPositionMenu,
						title: (0, t.localize)(3023, null),
						when: S.$Kj.equals(
							"viewLocation",
							(0, P.$J1)(P.ViewContainerLocation.Sidebar),
						),
						group: "3_workbench_layout_move",
						order: 1,
					});
				class B extends v.$3X {
					constructor(z, F) {
						super(z), (this.a = F);
					}
					async run(z) {
						const F = z.get(k.$6Sb),
							x = F.getVisiblePaneCompositeIds(P.ViewContainerLocation.Sidebar),
							H = F.getActivePaneComposite(P.ViewContainerLocation.Sidebar);
						if (!H) return;
						let q;
						for (let V = 0; V < x.length; V++)
							if (x[V] === H.getId()) {
								q = x[(V + x.length + this.a) % x.length];
								break;
							}
						await F.openPaneComposite(q, P.ViewContainerLocation.Sidebar, !0);
					}
				}
				(0, v.$4X)(
					class extends B {
						constructor() {
							super(
								{
									id: "workbench.action.previousSideBarView",
									title: (0, t.localize2)(
										3029,
										"Previous Primary Side Bar View",
									),
									category: I.$ck.View,
									f1: !0,
								},
								-1,
							);
						}
					},
				),
					(0, v.$4X)(
						class extends B {
							constructor() {
								super(
									{
										id: "workbench.action.nextSideBarView",
										title: (0, t.localize2)(3030, "Next Primary Side Bar View"),
										category: I.$ck.View,
										f1: !0,
									},
									1,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.focusActivityBar",
									title: (0, t.localize2)(3031, "Focus Activity Bar"),
									category: I.$ck.View,
									f1: !0,
									precondition: S.$Kj.equals(`config.${M.$LW}`, "vertical"),
								});
							}
							async run(z) {
								const F = z.get(E.$mEb);
								F.setPartHidden(!1, E.Parts.ACTIVITYBAR_PART);
								try {
									F.focusPart(E.Parts.ACTIVITYBAR_PART);
								} catch {
									z.get(N.$GO).confirm({
										message: (0, t.localize)(3024, null),
										type: "info",
									});
								}
							}
						},
					),
					(0, r.$oP)((U, z) => {
						const F = U.getColor(u.$$Fb);
						F &&
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked .active-item-indicator:before {
				border-left-color: ${F};
			}
		`);
						const x = U.getColor(u.$_Fb);
						x &&
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked:focus::before {
				visibility: hidden;
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked:focus .active-item-indicator:before {
				visibility: visible;
				border-left-color: ${x};
			}
		`);
						const H = U.getColor(u.$aGb);
						H &&
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked .active-item-indicator {
				z-index: 0;
				background-color: ${H};
			}
		`);
						const q = U.getColor(a.$PP);
						if (q)
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item .action-label::before{
				padding: 6px;
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.active .action-label::before,
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.active:hover .action-label::before,
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked .action-label::before,
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked:hover .action-label::before {
				outline: 1px solid ${q};
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item:hover .action-label::before {
				outline: 1px dashed ${q};
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item:focus .active-item-indicator:before {
				border-left-color: ${q};
			}
		`);
						else {
							const V = U.getColor(a.$NP);
							V &&
								z.addRule(`
				.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item:focus .active-item-indicator::before {
						border-left-color: ${V};
					}
				`);
						}
					});
			},
		),
		define(
			de[4014],
			he([
				1, 0, 4, 550, 139, 253, 49, 168, 10, 3, 286, 35, 26, 123, 12, 97, 7,
				1311, 5, 6, 21, 96, 92, 11, 8, 87, 14, 79, 1327, 3255, 99, 173, 968,
				1936, 160, 66, 50, 18, 105, 247, 276, 217, 39, 1055, 75, 3403, 95, 31,
				2355,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
			) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wtc = e.$vtc = e.$utc = e.$ttc = void 0);
				let X = class extends i.$lEb {
					constructor(_, te, Q) {
						super("workbench.titleService", Q, te),
							(this.a = _),
							(this.mainPart = this.D(this.b())),
							(this.onMenubarVisibilityChange =
								this.mainPart.onMenubarVisibilityChange),
							(this.s = void 0),
							(this.t = new Map()),
							this.D(this.registerPart(this.mainPart)),
							this.c(),
							this.m();
					}
					b() {
						return this.a.createInstance(ie);
					}
					c() {
						const _ = this;
						this.D(
							(0, $.$4X)(
								class extends $.$3X {
									constructor() {
										super({
											id: "workbench.action.focusTitleBar",
											title: (0, t.localize2)(3730, "Focus Title Bar"),
											category: L.$ck.View,
											f1: !0,
										});
									}
									run() {
										_.j((0, p.$Ngb)()).focus();
									}
								},
							),
						);
					}
					m() {
						this.D(
							J.$fk.registerCommand({
								id: "registerWindowTitleVariable",
								handler: (_, te, Q) => {
									this.registerVariables([{ name: te, contextKey: Q }]);
								},
								metadata: {
									description: "Registers a new title variable",
									args: [
										{
											name: "name",
											schema: { type: "string" },
											description: "The name of the variable to register",
										},
										{
											name: "contextKey",
											schema: { type: "string" },
											description:
												"The context key to use for the value of the variable",
										},
									],
								},
							}),
						);
					}
					createAuxiliaryTitlebarPart(_, te) {
						const Q = document.createElement("div");
						Q.classList.add("part", "titlebar"),
							Q.setAttribute("role", "none"),
							(Q.style.position = "relative"),
							_.insertBefore(Q, _.firstChild);
						const Z = new r.$Zc(),
							se = this.r(Q, te);
						return (
							Z.add(this.registerPart(se)),
							Z.add(
								b.Event.runAndSubscribe(
									se.onDidChange,
									() => (Q.style.height = `${se.height}px`),
								),
							),
							se.create(Q),
							this.s && se.updateProperties(this.s),
							this.t.size && se.registerVariables(Array.from(this.t.values())),
							b.Event.once(se.onWillDispose)(() => Z.dispose()),
							se
						);
					}
					r(_, te) {
						return this.a.createInstance(ne, _, te, this.mainPart);
					}
					updateProperties(_) {
						this.s = _;
						for (const te of this.parts) te.updateProperties(_);
					}
					registerVariables(_) {
						const te = [];
						for (const Q of _)
							this.t.has(Q.name) || (this.t.set(Q.name, Q), te.push(Q));
						for (const Q of this.parts) Q.registerVariables(te);
					}
				};
				(e.$ttc = X),
					(e.$ttc = X = Ne([j(0, f.$Li), j(1, s.$lq), j(2, a.$iP)], X));
				let Y = class extends i.Part {
					get minimumHeight() {
						const _ = n.$r && (0, w.$Wfb)();
						let te = this.cc || _ ? E.$AY : 30;
						return (
							_ &&
								(te = Math.max(
									te,
									(0, w.$Xfb)((0, p.getWindow)(this.element))?.height ?? 0,
								)),
							te /
								(this.preventZoom
									? (0, w.$Jfb)((0, p.getWindow)(this.element))
									: 1)
						);
					}
					get maximumHeight() {
						return this.minimumHeight;
					}
					constructor(
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
					) {
						super(_, { hasTitle: !1 }, oe, ae, pe),
							(this.Cb = Z),
							(this.Db = se),
							(this.Eb = re),
							(this.Fb = le),
							(this.Gb = ae),
							(this.Hb = $e),
							(this.Ib = ye),
							(this.Jb = ue),
							(this.Kb = me),
							(this.Lb = ve),
							(this.minimumWidth = 0),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.a = this.D(new b.$re())),
							(this.onMenubarVisibilityChange = this.a.event),
							(this.b = this.D(new b.$re())),
							(this.onWillDispose = this.b.event),
							(this.nb = this.D(new r.$Zc())),
							(this.ob = this.D(new r.$Zc())),
							(this.rb = this.D(new r.$Zc())),
							(this.sb = this.D(new r.$Zc())),
							(this.tb = this.D(new r.$Zc())),
							(this.vb = this.D(new r.$Zc())),
							(this.wb = (0, E.$zY)(this.Db)),
							(this.xb = !1),
							(this.yb = Q !== "main"),
							(this.Ab = fe.createScoped(Q, this.B)),
							(this.Bb = Q === "main" ? ue.mainPart : Q),
							(this.zb = this.D(le.createInstance(P.$ztc, te, Q))),
							(this.ub = this.D((0, K.$dib)())),
							this.Mb((0, p.getWindowId)(te));
					}
					Mb(_) {
						this.D(
							this.Ib.onDidChangeFocus((te) => (te ? this.Ob() : this.Nb())),
						),
							this.D(
								this.Ib.onDidChangeActiveWindow((te) =>
									te === _ ? this.Ob() : this.Nb(),
								),
							),
							this.D(this.Db.onDidChangeConfiguration((te) => this.Qb(te))),
							this.D(this.Jb.onDidChangeEditorPartOptions((te) => this.Pb(te)));
					}
					Nb() {
						(this.xb = !0), this.updateStyles();
					}
					Ob() {
						(this.xb = !1), this.updateStyles();
					}
					Pb({ oldPartOptions: _, newPartOptions: te }) {
						(_.editorActionsLocation !== te.editorActionsLocation ||
							_.showTabs !== te.showTabs) &&
							(0, E.$xY)(this.Db, this.wb) &&
							this.mb &&
							(this.Yb(), this.Zb({ editorActions: !0 }), this.ab.fire(void 0));
					}
					Qb(_) {
						if (
							(!this.yb &&
								!(0, E.$yY)(this.Db, this.wb) &&
								(!n.$m || n.$r) &&
								_.affectsConfiguration("window.menuBarVisibility") &&
								(this.ac === "compact" ? this.Sb() : this.Rb()),
							(0, E.$xY)(this.Db, this.wb) && this.mb)
						) {
							const te = _.affectsConfiguration(
									l.LayoutSettings.LAYOUT_ACTIONS,
								),
								Q = _.affectsConfiguration(
									l.LayoutSettings.ACTIVITY_BAR_LOCATION,
								);
							(te || Q) &&
								(this.Zb({ layoutActions: te, activityActions: Q }),
								this.ab.fire(void 0));
						}
						_.affectsConfiguration(l.LayoutSettings.COMMAND_CENTER) &&
							(this.Vb(), this.ab.fire(void 0));
					}
					Rb() {
						this.kb ||
							((this.hb = this.D(this.Fb.createInstance(o.$3qc))),
							(this.kb = (0, p.$fhb)(this.eb, (0, p.$)("div.menubar"))),
							this.kb.setAttribute("role", "menubar"),
							this.D(this.hb.onVisibilityChange((_) => this.Tb(_))),
							this.hb.create(this.kb));
					}
					Sb() {
						this.hb?.dispose(),
							(this.hb = void 0),
							this.kb?.remove(),
							(this.kb = void 0),
							this.Tb(!1);
					}
					Tb(_) {
						(n.$r || n.$l || n.$n) &&
							(this.lb && this.layout(this.lb.width, this.lb.height),
							this.a.fire(_));
					}
					updateProperties(_) {
						this.zb.updateProperties(_);
					}
					registerVariables(_) {
						this.zb.registerVariables(_);
					}
					Q(_) {
						if (
							((this.element = _),
							(this.c = (0, p.$fhb)(_, (0, p.$)(".titlebar-container"))),
							(this.eb = (0, p.$fhb)(this.c, (0, p.$)(".titlebar-left"))),
							(this.fb = (0, p.$fhb)(this.c, (0, p.$)(".titlebar-center"))),
							(this.gb = (0, p.$fhb)(this.c, (0, p.$)(".titlebar-right"))),
							!n.$m &&
								!n.$r &&
								!(0, E.$yY)(this.Db, this.wb) &&
								((this.ib = (0, p.$ghb)(this.eb, (0, p.$)("a.window-appicon"))),
								!this.yb && n.$r))
						) {
							const te = this.Eb.options?.homeIndicator;
							if (te) {
								const Q = (0, T.$_O)().getIcon(te.icon)
									? { id: te.icon }
									: I.$ak.code;
								this.ib.setAttribute("href", te.href),
									this.ib.classList.add(...h.ThemeIcon.asClassNameArray(Q)),
									(this.jb = document.createElement("div")),
									this.jb.classList.add("home-bar-icon-badge"),
									this.ib.appendChild(this.jb);
							}
						}
						if (
							((this.cb = (0, p.$ghb)(
								this.c,
								(0, p.$)("div.titlebar-drag-region"),
							)),
							!this.yb &&
								!(0, E.$yY)(this.Db, this.wb) &&
								(!n.$m || n.$r) &&
								this.ac !== "compact" &&
								this.Rb(),
							(this.db = (0, p.$fhb)(this.fb, (0, p.$)("div.window-title"))),
							this.Vb(),
							(0, E.$xY)(this.Db, this.wb) &&
								((this.pb = (0, p.$fhb)(
									this.gb,
									(0, p.$)("div.action-toolbar-container"),
								)),
								this.Yb(),
								this.Zb()),
							!(0, E.$yY)(this.Db, this.wb))
						) {
							let te = n.$m ? "left" : "right";
							if (
								(n.$m &&
									n.$p &&
									new Intl.Locale(n.$B)?.textInfo?.direction === "rtl" &&
									(te = "right"),
								!(n.$m && n.$p && te === "left"))
							) {
								if (
									((this.bb = (0, p.$fhb)(
										te === "left" ? this.eb : this.gb,
										(0, p.$)("div.window-controls-container"),
									)),
									n.$r &&
										(0, p.$fhb)(
											te === "left" ? this.gb : this.eb,
											(0, p.$)("div.window-controls-container"),
										),
									(0, w.$Wfb)())
								) {
									this.bb.classList.add("wco-enabled");
									const Q = () => {
										const Z = (0, p.getWindow)(this.element),
											se = (0, w.$Xfb)(Z);
										if (se) {
											const re = Z.innerWidth - se.width - se.x;
											this.bb?.style.setProperty(
												"--title-wco-width",
												`${re}px`,
											);
										}
									};
									Q(), this.D((0, w.$Ifb)(() => setTimeout(() => Q(), 5)));
								}
							}
						}
						return (
							this.D(
								(0, p.$0fb)(this.c, p.$$gb.CONTEXT_MENU, (te) => {
									p.$ahb.stop(te);
									let Q;
									n.$m &&
									(0, p.$Ygb)(te.target) &&
									(0, p.$Bgb)(te.target, this.db)
										? (Q = $.$XX.TitleBarTitleContext)
										: (Q = $.$XX.TitleBarContext),
										this.$b(te, Q);
								}),
							),
							n.$m &&
								this.D(
									(0, p.$0fb)(
										this.db,
										p.$$gb.MOUSE_DOWN,
										(te) => {
											te.metaKey &&
												(p.$ahb.stop(te, !0),
												this.$b(te, $.$XX.TitleBarTitleContext));
										},
										!0,
									),
								),
							this.updateStyles(),
							this.element
						);
					}
					Vb() {
						if ((this.vb.clear(), !this.cc))
							(this.db.innerText = this.zb.value),
								this.vb.add(
									this.zb.onDidChange(() => {
										this.db.innerText = this.zb.value;
									}),
								);
						else {
							const _ = this.Fb.createInstance(k.$4qc, this.zb, this.ub);
							(0, p.$hhb)(this.db, _.element), this.vb.add(_);
						}
					}
					Wb(_, te) {
						if (!this.yb) {
							if (_.id === M.$5qc)
								return this.Fb.createInstance(
									N.$lrc,
									{ position: () => A.HoverPosition.BELOW },
									te,
								);
							if (_.id === M.$6qc)
								return this.Fb.createInstance(
									N.$krc,
									{ position: () => A.HoverPosition.BELOW },
									te,
								);
						}
						const Q = this.Bb.activeGroup?.activeEditorPane;
						if (Q && Q instanceof x.$JEb) {
							const Z = Q.getActionViewItem(_, te);
							if (Z) return Z;
						}
						return (0, y.$Pyb)(this.Fb, _, { ...te, menuAsChild: !1 });
					}
					Xb(_) {
						const te =
							this.Bb.activeGroup?.activeEditorPane?.scopedContextKeyService ??
							this.Hb;
						return this.Lb.lookupKeybinding(_.id, te);
					}
					Yb() {
						this.nb.clear(),
							(this.mb = this.nb.add(
								this.Fb.createInstance(D.$Syb, this.pb, {
									contextMenu: $.$XX.TitleBarContext,
									orientation: U.ActionsOrientation.HORIZONTAL,
									ariaLabel: (0, t.localize)(3729, null),
									getKeyBinding: (_) => this.Xb(_),
									overflowBehavior: {
										maxItems: 9,
										exempted: [M.$6qc, M.$5qc, ...z.$CWb],
									},
									anchorAlignmentProvider: () => F.AnchorAlignment.RIGHT,
									telemetrySource: "titlePart",
									highlightToggledItems: this.dc,
									actionViewItemProvider: (_, te) => this.Wb(_, te),
									hoverDelegate: this.ub,
								}),
							)),
							this.dc &&
								this.nb.add(
									this.Bb.onDidChangeActiveGroup(() =>
										this.Zb({ editorActions: !0 }),
									),
								);
					}
					Zb(_ = !0) {
						_ === !0 &&
							(_ = {
								editorActions: !0,
								layoutActions: !0,
								activityActions: !0,
							});
						const te = () => {
							const Q = { primary: [], secondary: [] };
							if (this.dc) {
								this.ob.clear();
								const Z = this.Bb.activeGroup;
								if (Z) {
									const se = Z.createEditorActions(this.ob);
									Q.primary.push(...se.actions.primary),
										Q.secondary.push(...se.actions.secondary),
										this.ob.add(se.onDidChange(() => te()));
								}
							}
							this.qb && (0, y.$Kyb)(this.qb, {}, Q, () => !this.dc),
								this.ec &&
									((0, N.$mrc)(this.Gb) && Q.primary.push(G.$rtc),
									Q.primary.push(G.$stc)),
								this.mb.setActions(
									(0, U.$fib)(Q.primary),
									(0, U.$fib)(Q.secondary),
								);
						};
						if (_.editorActions)
							if (
								(this.rb.clear(), this.dc && this.Ab.activeEditor !== void 0)
							) {
								const Q = { groupId: this.Bb.activeGroup.id };
								(this.mb.actionRunner = new q.$ptc(Q)),
									(this.mb.context = Q),
									this.rb.add(this.mb.actionRunner);
							} else
								(this.mb.actionRunner = new O.$sj()),
									(this.mb.context = void 0),
									this.rb.add(this.mb.actionRunner);
						_.layoutActions &&
							(this.sb.clear(),
							this.bc
								? ((this.qb = this.Kb.createMenu(
										$.$XX.LayoutControlMenu,
										this.Hb,
									)),
									this.sb.add(this.qb),
									this.sb.add(this.qb.onDidChange(() => te())))
								: (this.qb = void 0)),
							_.activityActions &&
								(this.tb.clear(),
								this.ec &&
									this.tb.add(
										this.Gb.onDidChangeValue(
											s.StorageScope.PROFILE,
											N.$irc.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
											this.B,
										)(() => te()),
									)),
							te();
					}
					updateStyles() {
						if ((super.updateStyles(), this.element)) {
							this.xb
								? this.element.classList.add("inactive")
								: this.element.classList.remove("inactive");
							const _ =
								this.w(this.xb ? c.$MGb : c.$LGb, (Z, se) =>
									Z.isOpaque() ? Z : Z.makeOpaque((0, c.$LEb)(se)),
								) || "";
							(this.element.style.backgroundColor = _),
								this.jb && (this.jb.style.backgroundColor = _),
								_ && g.$UL.fromHex(_).isLighter()
									? this.element.classList.add("light")
									: this.element.classList.remove("light");
							const te = this.w(this.xb ? c.$KGb : c.$JGb);
							this.element.style.color = te || "";
							const Q = this.w(c.$NGb);
							this.element.style.borderBottom = Q ? `1px solid ${Q}` : "";
						}
					}
					$b(_, te) {
						const Q = new d.$2fb((0, p.getWindow)(this.element), _);
						this.Cb.showContextMenu({
							getAnchor: () => Q,
							menuId: te,
							contextKeyService: this.Hb,
							domForShadowRoot: n.$m && n.$p ? Q.target : void 0,
						});
					}
					get ac() {
						return this.yb ? "hidden" : (0, E.$wY)(this.Db);
					}
					get bc() {
						return (
							!this.yb &&
							this.Db.getValue(l.LayoutSettings.LAYOUT_ACTIONS) !== !1
						);
					}
					get cc() {
						return this.Db.getValue(l.LayoutSettings.COMMAND_CENTER) !== !1;
					}
					get dc() {
						return (
							this.Jb.partOptions.editorActionsLocation ===
								l.EditorActionsLocation.TITLEBAR ||
							(this.Jb.partOptions.editorActionsLocation ===
								l.EditorActionsLocation.DEFAULT &&
								this.Jb.partOptions.showTabs === l.EditorTabsMode.NONE)
						);
					}
					get ec() {
						const _ = this.Db.getValue(l.LayoutSettings.ACTIVITY_BAR_LOCATION);
						return (
							!this.yb &&
							(_ === l.ActivityBarPosition.TOP ||
								_ === l.ActivityBarPosition.BOTTOM)
						);
					}
					get hasZoomableElements() {
						const _ = !(
								this.ac === "hidden" ||
								this.ac === "compact" ||
								(!n.$r && n.$m)
							),
							te = this.cc,
							Q = this.bc || this.dc || this.ec;
						return _ || te || Q;
					}
					get preventZoom() {
						return (
							(0, w.$Jfb)((0, p.getWindow)(this.element)) < 1 ||
							!this.hasZoomableElements
						);
					}
					layout(_, te) {
						this.fc(new p.$pgb(_, te)), super.Z(_, te);
					}
					fc(_) {
						if (((this.lb = _), (0, E.$xY)(this.Db, this.wb))) {
							const te = (0, w.$Jfb)((0, p.getWindow)(this.element));
							if (
								(this.element.style.setProperty("--zoom-factor", te.toString()),
								this.c.classList.toggle("counter-zoom", this.preventZoom),
								this.hb)
							) {
								const Q = new p.$pgb(0, _.height);
								this.hb.layout(Q);
							}
						}
					}
					focus() {
						this.hb
							? this.hb.toggleFocus()
							: this.element
									.querySelector('[tabindex]:not([tabindex="-1"])')
									.focus();
					}
					toJSON() {
						return { type: l.Parts.TITLEBAR_PART };
					}
					dispose() {
						this.b.fire(), super.dispose();
					}
				};
				(e.$utc = Y),
					(e.$utc = Y =
						Ne(
							[
								j(3, C.$Xxb),
								j(4, m.$gj),
								j(5, u.$5rb),
								j(6, f.$Li),
								j(7, a.$iP),
								j(8, s.$lq),
								j(9, l.$mEb),
								j(10, v.$6j),
								j(11, S.$asb),
								j(12, R.$EY),
								j(13, B.$IY),
								j(14, $.$YX),
								j(15, H.$uZ),
							],
							Y,
						));
				let ie = class extends Y {
					constructor(_, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(
							l.Parts.TITLEBAR_PART,
							V.$Bfb,
							"main",
							_,
							te,
							Q,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
							ue,
						);
					}
				};
				(e.$vtc = ie),
					(e.$vtc = ie =
						Ne(
							[
								j(0, C.$Xxb),
								j(1, m.$gj),
								j(2, u.$5rb),
								j(3, f.$Li),
								j(4, a.$iP),
								j(5, s.$lq),
								j(6, l.$mEb),
								j(7, v.$6j),
								j(8, S.$asb),
								j(9, R.$EY),
								j(10, B.$IY),
								j(11, $.$YX),
								j(12, H.$uZ),
							],
							ie,
						));
				let ne = class extends Y {
					static {
						W = this;
					}
					static {
						this.y = 1;
					}
					get height() {
						return this.minimumHeight;
					}
					constructor(
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
					) {
						const ge = W.y++;
						super(
							`workbench.parts.auxiliaryTitle.${ge}`,
							(0, p.getWindow)(_),
							te,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
							ue,
							fe,
							me,
							ve,
						),
							(this.container = _),
							(this.gc = Q);
					}
					get preventZoom() {
						return (
							(0, w.$Jfb)((0, p.getWindow)(this.element)) < 1 ||
							!this.gc.hasZoomableElements
						);
					}
				};
				(e.$wtc = ne),
					(e.$wtc =
						ne =
						W =
							Ne(
								[
									j(3, C.$Xxb),
									j(4, m.$gj),
									j(5, u.$5rb),
									j(6, f.$Li),
									j(7, a.$iP),
									j(8, s.$lq),
									j(9, l.$mEb),
									j(10, v.$6j),
									j(11, S.$asb),
									j(12, R.$EY),
									j(13, B.$IY),
									j(14, $.$YX),
									j(15, H.$uZ),
								],
								ne,
							));
			},
		),
		define(
			de[854],
			he([
				1, 0, 323, 7, 267, 105, 198, 264, 2592, 50, 15, 33, 14, 29, 6, 132, 94,
				3, 266, 23, 19, 37, 28, 9, 47, 489, 4, 92, 11, 31, 10, 8, 49, 22, 5, 39,
				73, 93, 34, 40, 41, 84, 30, 32, 212, 35, 26, 362, 233, 247, 146, 60,
				260, 53, 72, 347, 1197, 2946, 12, 269, 764, 749, 251, 488, 183, 106,
				1278, 2356,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
			) {
				"use strict";
				var fe;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ttc = e.$Stc = e.$Rtc = e.$Qtc = e.$Ptc = void 0),
					(i = mt(i));
				let me = class extends Y.$TMb {
					constructor(qe, Ae, Me, De, Re, je, Ve, Ze, et, rt, ft, bt, nt) {
						super(
							{ ...qe, titleMenuId: P.$XX.ViewTitle, donotForwardArgs: !1 },
							Ae,
							Me,
							De,
							Re,
							je,
							Ve,
							Ze,
							et,
							rt,
							bt,
							nt,
						);
						const { treeView: lt } = H.$Io
							.as(ie.Extensions.ViewsRegistry)
							.getView(qe.id);
						(this.f = lt),
							this.D(this.f.onDidChangeActions(() => this.bc(), this)),
							this.D(this.f.onDidChangeTitle((ct) => this.Sb(ct))),
							this.D(this.f.onDidChangeDescription((ct) => this.Ub(ct))),
							this.D(
								(0, o.$Yc)(() => {
									this.g &&
										this.f.container &&
										this.g === this.f.container &&
										this.f.setVisibility(!1);
								}),
							),
							this.D(this.onDidChangeBodyVisibility(() => this.L())),
							this.D(this.f.onDidChangeWelcomeState(() => this.eb.fire())),
							qe.title !== this.f.title && this.Sb(this.f.title),
							qe.titleDescription !== this.f.description &&
								this.Ub(this.f.description),
							(this.h = new Ee(ft, () => this.f.getSelection())),
							this.L();
					}
					focus() {
						super.focus(), this.f.focus();
					}
					W(qe) {
						(this.g = qe), super.W(qe), this.n(qe);
					}
					shouldShowWelcome() {
						return (
							(this.f.dataProvider === void 0 ||
								!!this.f.dataProvider.isTreeEmpty) &&
							(this.f.message === void 0 || this.f.message === "")
						);
					}
					X(qe, Ae) {
						super.X(qe, Ae), this.t(qe, Ae);
					}
					getOptimalWidth() {
						return this.f.getOptimalWidth();
					}
					n(qe) {
						this.f.show(qe);
					}
					t(qe, Ae) {
						this.f.layout(qe, Ae);
					}
					L() {
						this.f.setVisibility(this.isBodyVisible());
					}
					getActionRunner() {
						return this.h;
					}
					getActionsContext() {
						return {
							$treeViewId: this.id,
							$focusedTreeItem: !0,
							$selectedTreeItems: !0,
						};
					}
				};
				(e.$Ptc = me),
					(e.$Ptc = me =
						Ne(
							[
								j(1, R.$uZ),
								j(2, M.$Xxb),
								j(3, L.$gj),
								j(4, D.$6j),
								j(5, ie.$K1),
								j(6, A.$Li),
								j(7, F.$7rb),
								j(8, G.$iP),
								j(9, q.$km),
								j(10, z.$4N),
								j(11, _.$Uyb),
								j(12, ue.$QMb),
							],
							me,
						));
				class ve {
					constructor() {
						(this.label = { label: "root" }),
							(this.handle = "0"),
							(this.parentHandle = void 0),
							(this.collapsibleState = ie.TreeItemCollapsibleState.Expanded),
							(this.children = void 0);
					}
				}
				function ge(Ue) {
					const qe = k.$fk.getCommand(Ue);
					if (qe) {
						const Ae = P.$ZX.getCommand(qe.id);
						return Ae && Ae.precondition;
					}
				}
				function be(Ue, qe) {
					const Ae = Ue.originalId ? Ue.originalId : Ue.id,
						Me = ge(Ae);
					return Me ? qe.contextMatchesRules(Me) : !0;
				}
				function Ce(Ue) {
					return (
						!!Ue &&
						typeof Ue != "string" &&
						"element" in Ue &&
						"disposables" in Ue
					);
				}
				const Le = (0, I.localize)(3736, null);
				e.$Qtc = new D.$5j("customTreeView", !1);
				class Fe extends B.$FMb {}
				let Oe = class extends o.$1c {
					constructor(
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
					) {
						super(),
							(this.id = qe),
							(this.db = Ae),
							(this.eb = Me),
							(this.fb = De),
							(this.gb = Re),
							(this.hb = je),
							(this.ib = Ve),
							(this.jb = Ze),
							(this.kb = et),
							(this.lb = rt),
							(this.mb = ft),
							(this.nb = bt),
							(this.ob = nt),
							(this.pb = lt),
							(this.qb = ct),
							(this.rb = gt),
							(this.b = !1),
							(this.f = !1),
							(this.g = !1),
							(this.u = !1),
							(this.C = !1),
							(this.F = !1),
							(this.O = []),
							(this.P = []),
							(this.R = this.D(new n.$re())),
							(this.onDidExpandItem = this.R.event),
							(this.S = this.D(new n.$re())),
							(this.onDidCollapseItem = this.S.event),
							(this.U = this.D(new n.$re())),
							(this.onDidChangeSelectionAndFocus = this.U.event),
							(this.W = this.D(new n.$re())),
							(this.onDidChangeVisibility = this.W.event),
							(this.X = this.D(new n.$re())),
							(this.onDidChangeActions = this.X.event),
							(this.Y = this.D(new n.$re())),
							(this.onDidChangeWelcomeState = this.Y.event),
							(this.Z = this.D(new n.$re())),
							(this.onDidChangeTitle = this.Z.event),
							(this.ab = this.D(new n.$re())),
							(this.onDidChangeDescription = this.ab.event),
							(this.bb = this.D(new n.$re())),
							(this.onDidChangeCheckboxState = this.bb.event),
							(this.cb = this.D(new n.$re())),
							(this.sb = !1),
							(this.zb = this.D(new o.$2c())),
							(this.Db = !1),
							(this.Gb = this.D(new o.$Zc())),
							(this.Pb = 0),
							(this.Qb = 0),
							(this.Rb = !1),
							(this.M = new ve()),
							(this.Q = this.M);
					}
					tb() {
						this.sb ||
							((this.sb = !0),
							this.ob.bufferChangeEvents(() => {
								this.Ab(), this.Tb(), this.Bb();
							}),
							(this.J = this.fb.createInstance(ke, this.id)),
							this.ub && (this.J.controller = this.ub),
							this.D(
								this.hb.onDidChangeConfiguration((qe) => {
									qe.affectsConfiguration("explorer.decorations") &&
										this.Sb([this.M]);
								}),
							),
							this.D(
								this.mb.onDidChangeLocation(
									({ views: qe, from: Ae, to: Me }) => {
										qe.some((De) => De.id === this.id) &&
											this.H?.updateOptions({
												overrideStyles: (0, Y.$VMb)(this.viewLocation)
													.listOverrideStyles,
											});
									},
								),
							),
							this.Cb(),
							this.Fb());
					}
					getTree() {
						return this.H;
					}
					get viewContainer() {
						return this.mb.getViewContainerByViewId(this.id);
					}
					get viewLocation() {
						return this.mb.getViewLocationById(this.id);
					}
					get dragAndDropController() {
						return this.ub;
					}
					set dragAndDropController(qe) {
						(this.ub = qe), this.J && (this.J.controller = qe);
					}
					get dataProvider() {
						return this.vb;
					}
					set dataProvider(qe) {
						if (qe) {
							this.visible && this.Eb();
							const Ae = this;
							(this.vb = new (class {
								constructor() {
									(this.b = !0),
										(this.d = new n.$re()),
										(this.onDidChangeEmpty = this.d.event);
								}
								get isTreeEmpty() {
									return this.b;
								}
								async getChildren(Me) {
									let De;
									const Re = [];
									if (
										(Me && Me.children
											? (De = Me.children)
											: ((Me = Me ?? Ae.M),
												(Me.children = await (Me instanceof ve
													? qe.getChildren()
													: qe.getChildren(Me))),
												(De = Me.children ?? []),
												De.forEach((je) => {
													(je.parent = Me),
														!Ae.manuallyManageCheckboxes &&
															Me?.checkbox?.isChecked === !0 &&
															je.checkbox?.isChecked === !1 &&
															((je.checkbox.isChecked = !0), Re.push(je));
												})),
										Me instanceof ve)
									) {
										const je = this.b;
										(this.b = De.length === 0), je !== this.b && this.d.fire();
									}
									return Re.length > 0 && Ae.bb.fire(Re), De;
								}
							})()),
								this.vb.onDidChangeEmpty &&
									this.D(
										this.vb.onDidChangeEmpty(() => {
											this.Ub(), this.Y.fire();
										}),
									),
								this.Kb(),
								this.refresh();
						} else
							(this.vb = void 0), this.Gb.clear(), (this.Db = !1), this.Kb();
						this.Y.fire();
					}
					get message() {
						return this.wb;
					}
					set message(qe) {
						(this.wb = qe), this.Kb(), this.Y.fire();
					}
					get title() {
						return this.db;
					}
					set title(qe) {
						(this.db = qe), this.Z.fire(this.db);
					}
					get description() {
						return this.xb;
					}
					set description(qe) {
						(this.xb = qe), this.ab.fire(this.xb);
					}
					get badge() {
						return this.yb;
					}
					set badge(qe) {
						if (
							!(
								this.yb?.value === qe?.value && this.yb?.tooltip === qe?.tooltip
							)
						)
							if (((this.yb = qe), qe)) {
								const Ae = {
									badge: new ne.$8qc(qe.value, () => qe.tooltip),
									priority: 50,
								};
								this.zb.value = this.pb.showViewActivity(this.id, Ae);
							} else this.zb.clear();
					}
					get canSelectMany() {
						return this.C;
					}
					set canSelectMany(qe) {
						const Ae = this.C;
						(this.C = qe),
							this.C !== Ae &&
								this.H?.updateOptions({
									multipleSelectionSupport: this.canSelectMany,
								});
					}
					get manuallyManageCheckboxes() {
						return this.F;
					}
					set manuallyManageCheckboxes(qe) {
						this.F = qe;
					}
					get hasIconForParentNode() {
						return this.f;
					}
					get hasIconForLeafNode() {
						return this.g;
					}
					get visible() {
						return this.b;
					}
					Ab(qe = !1) {
						return (
							this.j ||
								((this.h = new D.$5j(
									`treeView.${this.id}.enableCollapseAll`,
									qe,
									(0, I.localize)(3737, null, this.id),
								)),
								(this.j = this.h.bindTo(this.ob))),
							!0
						);
					}
					get showCollapseAllAction() {
						return this.Ab(), !!this.j?.get();
					}
					set showCollapseAllAction(qe) {
						this.Ab(qe), this.j?.set(qe);
					}
					Bb(qe = !1) {
						this.t ||
							((this.q = new D.$5j(
								`treeView.${this.id}.enableRefresh`,
								qe,
								(0, I.localize)(3738, null, this.id),
							)),
							(this.t = this.q.bindTo(this.ob)));
					}
					get showRefreshAction() {
						return this.Bb(), !!this.t?.get();
					}
					set showRefreshAction(qe) {
						this.Bb(qe), this.t?.set(qe);
					}
					Cb() {
						const qe = this;
						this.D(
							(0, P.$4X)(
								class extends P.$3X {
									constructor() {
										super({
											id: `workbench.actions.treeView.${qe.id}.refresh`,
											title: (0, I.localize)(3739, null),
											menu: {
												id: P.$XX.ViewTitle,
												when: D.$Kj.and(D.$Kj.equals("view", qe.id), qe.q),
												group: "navigation",
												order: Number.MAX_SAFE_INTEGER - 1,
											},
											icon: h.$ak.refresh,
										});
									}
									async run() {
										return qe.refresh();
									}
								},
							),
						),
							this.D(
								(0, P.$4X)(
									class extends P.$3X {
										constructor() {
											super({
												id: `workbench.actions.treeView.${qe.id}.collapseAll`,
												title: (0, I.localize)(3740, null),
												menu: {
													id: P.$XX.ViewTitle,
													when: D.$Kj.and(D.$Kj.equals("view", qe.id), qe.h),
													group: "navigation",
													order: Number.MAX_SAFE_INTEGER,
												},
												precondition: qe.m,
												icon: h.$ak.collapseAll,
											});
										}
										async run() {
											if (qe.H) return new m.$Jpb(qe.H, !0).run();
										}
									},
								),
							);
					}
					setVisibility(qe) {
						this.tb(),
							(qe = !!qe),
							this.b !== qe &&
								((this.b = qe),
								this.H &&
									(this.b
										? i.show(this.H.getHTMLElement())
										: i.hide(this.H.getHTMLElement()),
									this.b &&
										this.O.length &&
										this.dataProvider &&
										(this.Sb(this.O), (this.O = []))),
								(0, se.$E)(() => {
									this.dataProvider && this.W.fire(this.b);
								}),
								this.visible && this.Eb());
					}
					focus(qe = !0, Ae) {
						if (this.H && this.M.children && this.M.children.length > 0) {
							const Me = Ae ?? this.H.getSelection()[0];
							Me && qe && this.H.reveal(Me, 0.5), this.H.domFocus();
						} else
							this.H && this.y && !this.y.classList.contains("hide")
								? this.H.domFocus()
								: this.w.focus();
					}
					show(qe) {
						(this.L = qe), i.$fhb(qe, this.w);
					}
					Fb() {
						(this.w = i.$(".tree-explorer-viewlet-tree-view")),
							(this.G = i.$fhb(this.w, i.$(".message"))),
							this.Kb(),
							(this.y = i.$fhb(this.w, i.$(".customview-tree"))),
							this.y.classList.add(
								"file-icon-themable-tree",
								"show-file-icons",
							);
						const qe = this.D(i.$dhb(this.w));
						this.D(qe.onDidFocus(() => (this.u = !0))),
							this.D(qe.onDidBlur(() => (this.u = !1)));
					}
					Hb() {
						this.Gb.clear();
						const qe = T.$Pyb.bind(void 0, this.fb),
							Ae = this.Gb.add(this.fb.createInstance(Ie, this.id));
						this.I = this.Gb.add(this.fb.createInstance(W.$uPb, this));
						const Me = this.fb.createInstance(Ke, this, (rt) =>
								this.ib.withProgress({ location: this.id }, () => rt),
							),
							De = new Te(this.eb),
							Re = this.Gb.add(new Z.$Ntc()),
							je = this.fb.createInstance(
								Je,
								this.id,
								Ae,
								this.I,
								qe,
								De,
								Re,
								() => this.manuallyManageCheckboxes,
							);
						this.Gb.add(je.onDidChangeCheckboxState((rt) => this.bb.fire(rt)));
						const Ve = this.db;
						(this.H = this.Gb.add(
							this.fb.createInstance(Fe, this.id, this.y, new He(), [je], Me, {
								identityProvider: new xe(),
								accessibilityProvider: {
									getAriaLabel(rt) {
										if (rt.accessibilityInformation)
											return rt.accessibilityInformation.label;
										if ((0, y.$lg)(rt.tooltip)) return rt.tooltip;
										{
											if (rt.resourceUri && !rt.label) return null;
											let ft = "";
											return (
												rt.label && (ft += rt.label.label + " "),
												rt.description && (ft += rt.description),
												ft
											);
										}
									},
									getRole(rt) {
										return rt.accessibilityInformation?.role ?? "treeitem";
									},
									getWidgetAriaLabel() {
										return Ve;
									},
								},
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (rt) =>
										rt.label
											? rt.label.label
											: rt.resourceUri
												? (0, s.$kh)($.URI.revive(rt.resourceUri))
												: void 0,
								},
								expandOnlyOnTwistieClick: (rt) =>
									!!rt.command ||
									!!rt.checkbox ||
									this.hb.getValue("workbench.tree.expandMode") ===
										"doubleClick",
								collapseByDefault: (rt) =>
									rt.collapsibleState !== ie.TreeItemCollapsibleState.Expanded,
								multipleSelectionSupport: this.canSelectMany,
								dnd: this.J,
								overrideStyles: (0, Y.$VMb)(this.viewLocation)
									.listOverrideStyles,
							}),
						)),
							this.Gb.add(
								je.onDidChangeMenuContext((rt) =>
									rt.forEach((ft) => this.H?.rerender(ft)),
								),
							),
							this.Gb.add(this.H),
							Ae.setContextKeyService(this.H.contextKeyService),
							(De.tree = this.H);
						const Ze = new Ee(this.lb, () => this.H.getSelection());
						(je.actionRunner = Ze),
							this.H.contextKeyService.createKey(this.id, !0),
							e.$Qtc.bindTo(this.H.contextKeyService).set(!0),
							this.Gb.add(this.H.onContextMenu((rt) => this.Jb(Ae, rt, Ze))),
							this.Gb.add(
								this.H.onDidChangeSelection((rt) => {
									(this.P = rt.elements),
										(this.Q = this.H?.getFocus()[0] ?? this.Q),
										this.U.fire({ selection: this.P, focus: this.Q });
								}),
							),
							this.Gb.add(
								this.H.onDidChangeFocus((rt) => {
									rt.elements.length &&
										rt.elements[0] !== this.Q &&
										((this.Q = rt.elements[0]),
										(this.P = this.H?.getSelection() ?? this.P),
										this.U.fire({ selection: this.P, focus: this.Q }));
								}),
							),
							this.Gb.add(
								this.H.onDidChangeCollapseState((rt) => {
									if (!rt.node.element) return;
									const ft = Array.isArray(rt.node.element.element)
										? rt.node.element.element[0]
										: rt.node.element.element;
									rt.node.collapsed ? this.S.fire(ft) : this.R.fire(ft);
								}),
							),
							this.H.setInput(this.M).then(() => this.Vb()),
							this.Gb.add(
								this.H.onDidOpen(async (rt) => {
									if (
										!rt.browserEvent ||
										(rt.browserEvent.target &&
											rt.browserEvent.target.classList.contains(
												Z.$Otc.checkboxClass,
											))
									)
										return;
									const ft = this.H.getSelection(),
										bt = await this.Ib(ft.length === 1 ? ft[0] : void 0);
									if (bt && be(bt, this.ob)) {
										let nt = bt.arguments || [];
										(bt.id === X.$zWb || bt.id === X.$AWb) &&
											(nt = [...nt, rt]);
										try {
											await this.gb.executeCommand(bt.id, ...nt);
										} catch (lt) {
											this.lb.error(lt);
										}
									}
								}),
							),
							this.Gb.add(
								Ae.onDidChange((rt) => {
									this.H?.hasNode(rt) && this.H?.rerender(rt);
								}),
							);
					}
					async Ib(qe) {
						let Ae = qe?.command;
						return (
							qe &&
								!Ae &&
								qe instanceof ie.$L1 &&
								qe.hasResolve &&
								(await qe.resolve(a.CancellationToken.None), (Ae = qe.command)),
							Ae
						);
					}
					Jb(qe, Ae, Me) {
						this.nb.hideHover();
						const De = Ae.element;
						if (De === null) return;
						const Re = Ae.browserEvent;
						Re.preventDefault(), Re.stopPropagation(), this.H.setFocus([De]);
						let je = this.canSelectMany ? this.getSelection() : [];
						je.find((Ze) => Ze.handle === De.handle) || (je = [De]);
						const Ve = qe.getResourceContextActions(je);
						Ve.length &&
							this.jb.showContextMenu({
								getAnchor: () => Ae.anchor,
								getActions: () => Ve,
								getActionViewItem: (Ze) => {
									const et = this.kb.lookupKeybinding(Ze.id);
									if (et)
										return new C.$_ib(Ze, Ze, {
											label: !0,
											keybinding: et.getLabel(),
										});
								},
								onHide: (Ze) => {
									Ze && this.H.domFocus();
								},
								getActionsContext: () => ({
									$treeViewId: this.id,
									$treeItemHandle: De.handle,
								}),
								actionRunner: Me,
							});
					}
					Kb() {
						this.wb
							? this.Mb(this.wb)
							: this.dataProvider
								? this.Nb()
								: this.Mb(Le),
							this.Vb();
					}
					Lb(qe, Ae) {
						const Me = qe.value.split(`
`),
							De = [];
						let Re = !1;
						for (const Ve of Me) {
							const Ze = (0, pe.$Zpb)(Ve);
							if (Ze.nodes.length === 1 && typeof Ze.nodes[0] != "string") {
								const et = Ze.nodes[0],
									rt = document.createElement("div");
								rt.classList.add("button-container");
								const ft = new $e.$oob(rt, {
									title: et.title,
									secondary: Re,
									supportIcons: !0,
									...ye.$lyb,
								});
								(ft.label = et.label),
									ft.onDidClick(
										(nt) => {
											this.rb.open(et.href, { allowCommands: !0 });
										},
										null,
										Ae,
									);
								const bt = $.URI.parse(et.href);
								if (bt.scheme === b.Schemas.command) {
									const nt = ge(bt.path);
									nt &&
										((ft.enabled = this.ob.contextMatchesRules(nt)),
										Ae.add(
											this.ob.onDidChangeContext((lt) => {
												lt.affectsSome(new Set(nt.keys())) &&
													(ft.enabled = this.ob.contextMatchesRules(nt));
											}),
										));
								}
								Ae.add(ft), (Re = !0), De.push(rt);
							} else {
								Re = !1;
								const et = this.N.render(
									new p.$cl(Ve, {
										isTrusted: qe.isTrusted,
										supportThemeIcons: qe.supportThemeIcons,
										supportHtml: qe.supportHtml,
									}),
								);
								De.push(et.element), Ae.add(et);
							}
						}
						const je = document.createElement("div");
						je.classList.add("rendered-message");
						for (const Ve of De)
							i.$Ygb(Ve) ? je.appendChild(Ve) : je.appendChild(Ve.element);
						return je;
					}
					Mb(qe) {
						if (
							(Ce(this.z) && this.z.disposables.dispose(),
							(0, p.$el)(qe) &&
								!this.N &&
								(this.N = this.fb.createInstance(ae.$Qzb, {})),
							(0, p.$el)(qe))
						) {
							const Ae = new o.$Zc(),
								Me = this.Lb(qe, Ae);
							this.z = { element: Me, disposables: Ae };
						} else this.z = qe;
						this.G &&
							(this.G.classList.remove("hide"),
							this.Ob(),
							typeof this.z == "string" && !(0, l.$jf)(this.z)
								? (this.G.textContent = this.z)
								: Ce(this.z) && this.G.appendChild(this.z.element),
							this.layout(this.Pb, this.Qb));
					}
					Nb() {
						this.Ob(),
							this.G?.classList.add("hide"),
							this.layout(this.Pb, this.Qb);
					}
					Ob() {
						this.G && i.$9fb(this.G);
					}
					layout(qe, Ae) {
						if (qe && Ae && this.G && this.y) {
							(this.Pb = qe), (this.Qb = Ae);
							const Me = qe - i.$zgb(this.G);
							(this.y.style.height = Me + "px"), this.H?.layout(Me, Ae);
						}
					}
					getOptimalWidth() {
						if (this.H) {
							const qe = this.H.getHTMLElement(),
								Ae = [].slice.call(
									qe.querySelectorAll(".outline-item-label > a"),
								);
							return i.$Agb(qe, Ae);
						}
						return 0;
					}
					async refresh(qe) {
						if (this.dataProvider && this.H) {
							this.Rb && (await n.Event.toPromise(this.cb.event)),
								qe || ((qe = [this.M]), (this.O = []));
							for (const Ae of qe) Ae.children = void 0;
							if (this.b) return this.Sb(qe);
							if (this.O.length) {
								const Ae = new Set();
								this.O.forEach((Me) => Ae.add(Me.handle));
								for (const Me of qe) Ae.has(Me.handle) || this.O.push(Me);
							} else this.O.push(...qe);
						}
					}
					async expand(qe) {
						const Ae = this.H;
						if (Ae)
							try {
								qe = Array.isArray(qe) ? qe : [qe];
								for (const Me of qe) await Ae.expand(Me, !1);
							} catch {}
					}
					isCollapsed(qe) {
						return !!this.H?.isCollapsed(qe);
					}
					setSelection(qe) {
						this.H?.setSelection(qe);
					}
					getSelection() {
						return this.H?.getSelection() ?? [];
					}
					setFocus(qe) {
						this.H &&
							(qe
								? (this.focus(!0, qe), this.H.setFocus([qe]))
								: this.H.getFocus().length === 0 && this.H.setFocus([]));
					}
					async reveal(qe) {
						if (this.H) return this.H.reveal(qe);
					}
					async Sb(qe) {
						const Ae = this.H;
						if (Ae && this.visible) {
							this.Rb = !0;
							const Me = Ae.getSelection();
							try {
								await Promise.all(
									qe.map((Re) => Ae.updateChildren(Re, !0, !0)),
								);
							} catch (Re) {
								this.qb.error(Re);
							}
							const De = Ae.getSelection();
							(Me.length !== De.length ||
								Me.some((Re, je) => Re.handle !== De[je].handle)) &&
								((this.P = De),
								this.U.fire({ selection: this.P, focus: this.Q })),
								(this.Rb = !1),
								this.cb.fire(),
								this.Vb(),
								this.u && this.focus(!1),
								this.Ub();
						}
					}
					Tb() {
						this.n ||
							((this.m = new D.$5j(
								`treeView.${this.id}.toggleCollapseAll`,
								!1,
								(0, I.localize)(3741, null, this.id),
							)),
							(this.n = this.m.bindTo(this.ob)));
					}
					Ub() {
						this.showCollapseAllAction &&
							(this.Tb(),
							this.n?.set(
								!!this.M.children &&
									this.M.children.length > 0 &&
									this.M.children.some(
										(qe) =>
											qe.collapsibleState !== ie.TreeItemCollapsibleState.None,
									),
							));
					}
					Vb() {
						const qe = !this.M.children || this.M.children.length === 0;
						this.z && qe && !this.Rb && this.y
							? (this.dragAndDropController || this.y.classList.add("hide"),
								this.w.setAttribute("tabindex", "0"))
							: this.y &&
								(this.y.classList.remove("hide"),
								this.w === i.$Jgb() && this.focus(),
								this.w.removeAttribute("tabindex"));
					}
					get container() {
						return this.L;
					}
					getNodeByHandle(qe) {
						if (!this.H) return null;
						const Ae = (Me) => {
							if (Me.handle === qe) return Me;
							if (Me.children)
								for (const De of Me.children) {
									const Re = Ae(De);
									if (Re) return Re;
								}
							return null;
						};
						return Ae(this.M);
					}
				};
				Oe = Ne(
					[
						j(2, G.$iP),
						j(3, A.$Li),
						j(4, k.$ek),
						j(5, L.$gj),
						j(6, x.$8N),
						j(7, M.$Xxb),
						j(8, R.$uZ),
						j(9, z.$4N),
						j(10, ie.$K1),
						j(11, _.$Uyb),
						j(12, D.$6j),
						j(13, ne.$7qc),
						j(14, U.$ik),
						j(15, F.$7rb),
					],
					Oe,
				);
				class xe {
					getId(qe) {
						return qe.handle;
					}
				}
				class He {
					getHeight(qe) {
						return Je.ITEM_HEIGHT;
					}
					getTemplateId(qe) {
						return Je.TREE_TEMPLATE_ID;
					}
				}
				class Ke {
					constructor(qe, Ae) {
						(this.b = qe), (this.d = Ae);
					}
					hasChildren(qe) {
						return (
							!!this.b.dataProvider &&
							qe.collapsibleState !== ie.TreeItemCollapsibleState.None
						);
					}
					async getChildren(qe) {
						let Ae = [];
						if (this.b.dataProvider)
							try {
								Ae = (await this.d(this.b.dataProvider.getChildren(qe))) ?? [];
							} catch (Me) {
								if (!Me.message.startsWith("Bad progress location:")) throw Me;
							}
						return Ae;
					}
				}
				let Je = class extends o.$1c {
					static {
						fe = this;
					}
					static {
						this.ITEM_HEIGHT = 22;
					}
					static {
						this.TREE_TEMPLATE_ID = "treeExplorer";
					}
					constructor(qe, Ae, Me, De, Re, je, Ve, Ze, et, rt, ft, bt, nt) {
						super(),
							(this.n = qe),
							(this.q = Ae),
							(this.t = Me),
							(this.u = De),
							(this.w = Re),
							(this.y = je),
							(this.z = Ve),
							(this.C = Ze),
							(this.F = et),
							(this.G = rt),
							(this.H = ft),
							(this.I = bt),
							(this.b = this.D(new n.$re())),
							(this.onDidChangeCheckboxState = this.b.event),
							(this.f = this.D(new n.$re())),
							(this.onDidChangeMenuContext = this.f.event),
							(this.j = !1),
							(this.m = new Map()),
							(this.h = this.D(nt.createInstance(_.$Vyb, "mouse", !1, {}))),
							this.D(this.C.onDidFileIconThemeChange(() => this.L())),
							this.D(this.C.onDidColorThemeChange(() => this.L())),
							this.D(
								je.onDidChangeCheckboxState((lt) => {
									this.W(lt);
								}),
							),
							this.D(this.H.onDidChangeContext((lt) => this.U(lt)));
					}
					get templateId() {
						return fe.TREE_TEMPLATE_ID;
					}
					set actionRunner(qe) {
						this.g = qe;
					}
					renderTemplate(qe) {
						qe.classList.add("custom-view-tree-node-item");
						const Ae = i.$fhb(qe, i.$("")),
							Me = this.t.create(qe, {
								supportHighlights: !0,
								hoverDelegate: this.h,
							}),
							De = i.$ghb(Me.element, i.$(".custom-view-tree-node-item-icon")),
							Re = i.$fhb(Me.element, i.$(".actions")),
							je = new E.$eib(Re, { actionViewItemProvider: this.u });
						return {
							resourceLabel: Me,
							icon: De,
							checkboxContainer: Ae,
							actionBar: je,
							container: qe,
						};
					}
					J(qe, Ae, Me) {
						return !(Me instanceof ie.$L1) || !Me.hasResolve
							? Ae && !Me.tooltip
								? void 0
								: Me.tooltip === void 0
									? qe
									: (0, y.$lg)(Me.tooltip)
										? Me.tooltip !== ""
											? Me.tooltip
											: void 0
										: {
												markdown: Me.tooltip,
												markdownNotSupportedFallback: Ae
													? void 0
													: (0, w.$Xib)(Me.tooltip),
											}
							: {
									markdown:
										typeof Me.tooltip == "string"
											? Me.tooltip
											: (De) =>
													new Promise((Re) => {
														Me.resolve(De).then(() => Re(Me.tooltip));
													}),
									markdownNotSupportedFallback: Ae ? void 0 : (qe ?? ""),
								};
					}
					renderElement(qe, Ae, Me) {
						const De = qe.element,
							Re = De.resourceUri ? $.URI.revive(De.resourceUri) : null,
							je = De.label
								? De.label
								: Re
									? { label: (0, s.$kh)(Re) }
									: void 0,
							Ve = (0, y.$lg)(De.description)
								? De.description
								: Re && De.description === !0
									? this.G.getUriLabel((0, s.$mh)(Re), { relative: !0 })
									: void 0,
							Ze = je ? je.label : void 0,
							et =
								je && je.highlights && Ze
									? je.highlights.map(([gt, ht]) => {
											if (
												(gt < 0 && (gt = Ze.length + gt),
												ht < 0 && (ht = Ze.length + ht),
												gt >= Ze.length || ht > Ze.length)
											)
												return { start: 0, end: 0 };
											if (gt > ht) {
												const Rt = gt;
												(gt = ht), (ht = Rt);
											}
											return { start: gt, end: ht };
										})
									: void 0,
							rt =
								this.C.getColorTheme().type === V.ColorScheme.LIGHT
									? De.icon
									: De.iconDark,
							ft = rt ? $.URI.revive(rt) : void 0,
							bt = this.J(Ze, Re, De);
						Me.actionBar.clear(), (Me.icon.style.color = "");
						let nt = !0;
						if (
							(De.command && (nt = be(De.command, this.H)), this.M(De, Me), Re)
						) {
							const gt = this.F.getValue("explorer.decorations"),
								ht = Re || $.URI.parse("missing:_icon_resource");
							Me.resourceLabel.setResource(
								{ name: Ze, description: Ve, resource: ht },
								{
									fileKind: this.S(De),
									title: bt,
									hideIcon: this.O(ft, De.themeIcon),
									fileDecorations: gt,
									extraClasses: ["custom-view-tree-node-item-resourceLabel"],
									matches: et || (0, g.$3k)(qe.filterData),
									strikethrough: je?.strikethrough,
									disabledCommand: !nt,
									labelEscapeNewLines: !0,
									forceLabel: !!De.label,
								},
							);
						} else
							Me.resourceLabel.setResource(
								{ name: Ze, description: Ve },
								{
									title: bt,
									hideIcon: !0,
									extraClasses: ["custom-view-tree-node-item-resourceLabel"],
									matches: et || (0, g.$3k)(qe.filterData),
									strikethrough: je?.strikethrough,
									disabledCommand: !nt,
									labelEscapeNewLines: !0,
								},
							);
						if (ft)
							(Me.icon.className = "custom-view-tree-node-item-icon"),
								(Me.icon.style.backgroundImage = i.$vhb(ft));
						else {
							let gt;
							this.P(!!Re, De.themeIcon) &&
								((gt = K.ThemeIcon.asClassName(De.themeIcon)),
								De.themeIcon.color &&
									(Me.icon.style.color =
										this.C.getColorTheme()
											.getColor(De.themeIcon.color.id)
											?.toString() ?? "")),
								(Me.icon.className = gt
									? `custom-view-tree-node-item-icon ${gt}`
									: ""),
								(Me.icon.style.backgroundImage = "");
						}
						nt ||
							((Me.icon.className = Me.icon.className + " disabled"),
							Me.container.parentElement &&
								(Me.container.parentElement.className =
									Me.container.parentElement.className + " disabled")),
							(Me.actionBar.context = {
								$treeViewId: this.n,
								$treeItemHandle: De.handle,
							});
						const lt = this.q.getResourceActions([De]);
						Me.actionBar.push(lt, { icon: !0, label: !1 }),
							this.g && (Me.actionBar.actionRunner = this.g),
							this.N(Me.container, De);
						const ct = this.m.get(qe.element.handle) ?? [];
						this.m.set(qe.element.handle, [
							...ct,
							{ original: qe, rendered: Me },
						]);
					}
					L() {
						const qe = new Set(this.m.keys());
						for (const Ae of qe) {
							const Me = this.m.get(Ae) ?? [];
							for (const De of Me)
								this.disposeElement(De.original, 0, De.rendered),
									this.renderElement(De.original, 0, De.rendered);
						}
					}
					M(qe, Ae) {
						if (qe.checkbox) {
							if ((this.j || ((this.j = !0), this.L()), !Ae.checkbox)) {
								const Me = new Z.$Otc(
									Ae.checkboxContainer,
									this.y,
									this.h,
									this.I,
								);
								Ae.checkbox = Me;
							}
							Ae.checkbox.render(qe);
						} else
							Ae.checkbox && (Ae.checkbox.dispose(), (Ae.checkbox = void 0));
					}
					N(qe, Ae) {
						qe.parentElement.classList.toggle(
							"align-icon-with-twisty",
							!this.j && this.w.alignIconWithTwisty(Ae),
						);
					}
					O(qe, Ae) {
						return !!qe || (!!Ae && !this.R(Ae));
					}
					P(qe, Ae) {
						return Ae ? !(qe && this.R(Ae)) : !1;
					}
					Q(qe) {
						return qe?.id === G.$lP.id;
					}
					R(qe) {
						return qe ? qe.id === G.$kP.id || this.Q(qe) : !1;
					}
					S(qe) {
						if (qe.themeIcon)
							switch (qe.themeIcon.id) {
								case G.$kP.id:
									return N.FileKind.FILE;
								case G.$lP.id:
									return N.FileKind.FOLDER;
							}
						return qe.collapsibleState ===
							ie.TreeItemCollapsibleState.Collapsed ||
							qe.collapsibleState === ie.TreeItemCollapsibleState.Expanded
							? N.FileKind.FOLDER
							: N.FileKind.FILE;
					}
					U(qe) {
						const Ae = [];
						for (const [Me, De] of this.m)
							for (const Re of De)
								(qe.affectsSome(
									this.q.getElementOverlayContexts(Re.original.element),
								) ||
									qe.affectsSome(this.q.getEntireMenuContexts())) &&
									Ae.push(Re.original.element);
						Ae.length && this.f.fire(Ae);
					}
					W(qe) {
						const Ae = [];
						if (!this.z()) {
							for (const Me of qe)
								if (Me.checkbox !== void 0) {
									let De = function (Ve) {
											for (const Ze of Ve.children ?? [])
												Ze.checkbox !== void 0 &&
													Ve.checkbox !== void 0 &&
													Ze.checkbox.isChecked !== Ve.checkbox.isChecked &&
													((Ze.checkbox.isChecked = Ve.checkbox.isChecked),
													Ae.push(Ze),
													De(Ze));
										},
										je = function (Ve) {
											if (
												Ve.parent &&
												Ve.parent.checkbox !== void 0 &&
												Ve.parent.children
											) {
												if (Re.has(Ve.parent)) return;
												Re.add(Ve.parent);
												let Ze = !1,
													et = !1;
												for (const rt of Ve.parent.children) {
													if (Ze && et) break;
													rt.checkbox !== void 0 &&
														(rt.checkbox.isChecked ? (et = !0) : (Ze = !0));
												}
												et && !Ze && Ve.parent.checkbox.isChecked !== !0
													? ((Ve.parent.checkbox.isChecked = !0),
														Ae.push(Ve.parent),
														je(Ve.parent))
													: Ze &&
														Ve.parent.checkbox.isChecked !== !1 &&
														((Ve.parent.checkbox.isChecked = !1),
														Ae.push(Ve.parent),
														je(Ve.parent));
											}
										};
									De(Me);
									const Re = new Set();
									je(Me);
								}
						}
						(qe = qe.concat(Ae)),
							qe.forEach((Me) => {
								const De = this.m.get(Me.handle);
								De && De.forEach((Re) => Re.rendered.checkbox?.render(Me));
							}),
							this.b.fire(qe);
					}
					disposeElement(qe, Ae, Me) {
						const De = this.m.get(qe.element.handle) ?? [],
							Re = De.findIndex((je) => Me === je.rendered);
						De.length === 1
							? this.m.delete(qe.element.handle)
							: De.length > 0 && De.splice(Re, 1),
							Me.checkbox?.dispose(),
							(Me.checkbox = void 0);
					}
					disposeTemplate(qe) {
						qe.resourceLabel.dispose(), qe.actionBar.dispose();
					}
				};
				Je = fe = Ne(
					[
						j(7, G.$iP),
						j(8, L.$gj),
						j(9, O.$3N),
						j(10, D.$6j),
						j(11, _.$Uyb),
						j(12, A.$Li),
					],
					Je,
				);
				class Te extends o.$1c {
					constructor(qe) {
						super(), (this.f = qe);
					}
					set tree(qe) {
						this.b = qe;
					}
					alignIconWithTwisty(qe) {
						if (
							qe.collapsibleState !== ie.TreeItemCollapsibleState.None ||
							!this.g(qe)
						)
							return !1;
						if (this.b) {
							const Ae = this.b.getParentElement(qe) || this.b.getInput();
							return this.g(Ae)
								? !!Ae.children &&
										Ae.children.some(
											(Me) =>
												Me.collapsibleState !==
													ie.TreeItemCollapsibleState.None && !this.g(Me),
										)
								: !!Ae.children &&
										Ae.children.every(
											(Me) =>
												Me.collapsibleState ===
													ie.TreeItemCollapsibleState.None || !this.g(Me),
										);
						} else return !1;
					}
					g(qe) {
						if (
							this.f.getColorTheme().type === V.ColorScheme.LIGHT
								? qe.icon
								: qe.iconDark
						)
							return !0;
						if (qe.resourceUri || qe.themeIcon) {
							const Me = this.f.getFileIconTheme();
							return (
								qe.themeIcon
									? qe.themeIcon.id === G.$lP.id
									: qe.collapsibleState !== ie.TreeItemCollapsibleState.None
							)
								? Me.hasFileIcons && Me.hasFolderIcons
								: Me.hasFileIcons;
						}
						return !1;
					}
				}
				class Ee extends r.$sj {
					constructor(qe, Ae) {
						super(),
							(this.b = Ae),
							this.D(
								this.onDidRun((Me) => {
									Me.error &&
										!(0, c.$8)(Me.error) &&
										qe.error(
											(0, I.localize)(
												3742,
												null,
												Me.error.message,
												Me.action.id,
											),
										);
								}),
							);
					}
					async q(qe, Ae) {
						const Me = this.b();
						let De,
							Re = !1;
						Me.length > 1 &&
							(De = Me.map(
								(je) => (
									(je.handle === Ae.$treeItemHandle || Ae.$selectedTreeItems) &&
										(Re = !0),
									{ $treeViewId: Ae.$treeViewId, $treeItemHandle: je.handle }
								),
							)),
							!Re && De && (De = void 0),
							await qe.run(Ae, De);
					}
				}
				let Ie = class {
					constructor(qe, Ae) {
						(this.f = qe),
							(this.g = Ae),
							(this.d = new n.$re()),
							(this.onDidChange = this.d.event);
					}
					getResourceActions(qe) {
						return this.l(this.getMenuId(), qe).primary;
					}
					getResourceContextActions(qe) {
						return this.l(this.getMenuId(), qe).secondary;
					}
					setContextKeyService(qe) {
						this.b = qe;
					}
					h(qe, Ae) {
						const Me = new Set(Ae.map((De) => De.id));
						for (const De of qe) {
							const Re = De.keys();
							for (const je of Re) Me.has(je) || De.delete(je);
						}
					}
					j(qe) {
						const Ae = [];
						for (const Me of qe)
							Me.size > 0 &&
								(Ae.length && Ae.push(new r.$tj()), Ae.push(...Me.values()));
						return Ae;
					}
					k(qe) {
						const Ae = [];
						let Me = new Map();
						for (const De of qe)
							De instanceof r.$tj
								? (Ae.push(Me), (Me = new Map()))
								: Me.set(De.id, De);
						return Ae.push(Me), Ae;
					}
					getElementOverlayContexts(qe) {
						return new Map([
							["view", this.f],
							["viewItem", qe.contextValue],
						]);
					}
					getEntireMenuContexts() {
						return this.g.getMenuContexts(this.getMenuId());
					}
					getMenuId() {
						return P.$XX.ViewItemContext;
					}
					l(qe, Ae) {
						if (!this.b) return { primary: [], secondary: [] };
						let Me = [],
							De = [];
						for (let Re = 0; Re < Ae.length; Re++) {
							const je = Ae[Re],
								Ve = this.b.createOverlay(this.getElementOverlayContexts(je)),
								Ze = this.g.getMenuActions(qe, Ve, { shouldForwardArgs: !0 }),
								ft = { primary: [], secondary: [] };
							(0, T.$Jyb)(Ze, ft, "inline"),
								Re === 0
									? ((Me = this.k(ft.primary)), (De = this.k(ft.secondary)))
									: (this.h(Me, ft.primary), this.h(De, ft.secondary));
						}
						return { primary: this.j(Me), secondary: this.j(De) };
					}
					dispose() {
						this.b = void 0;
					}
				};
				Ie = Ne([j(1, P.$YX)], Ie);
				let Be = class extends Oe {
					constructor(
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
					) {
						super(
							qe,
							Ae,
							De,
							Re,
							je,
							Ve,
							Ze,
							et,
							rt,
							ft,
							bt,
							lt,
							nt,
							gt,
							Rt,
							Nt,
						),
							(this.Wb = Me),
							(this.Xb = ct),
							(this.Yb = ht);
					}
					Eb() {
						this.Db ||
							(this.Yb.publicLog2("Extension:ViewActivate", {
								extensionId: new re.$Qp(this.Wb),
								id: this.id,
							}),
							this.Hb(),
							this.ib
								.withProgress({ location: this.id }, () =>
									this.Xb.activateByEvent(`onView:${this.id}`),
								)
								.then(() => (0, u.$Nh)(2e3))
								.then(() => {
									this.Kb();
								}),
							(this.Db = !0));
					}
				};
				(e.$Rtc = Be),
					(e.$Rtc = Be =
						Ne(
							[
								j(3, G.$iP),
								j(4, A.$Li),
								j(5, k.$ek),
								j(6, L.$gj),
								j(7, x.$8N),
								j(8, M.$Xxb),
								j(9, R.$uZ),
								j(10, z.$4N),
								j(11, ie.$K1),
								j(12, D.$6j),
								j(13, _.$Uyb),
								j(14, ee.$q2),
								j(15, ne.$7qc),
								j(16, q.$km),
								j(17, U.$ik),
								j(18, F.$7rb),
							],
							Be,
						));
				class Se extends Oe {
					Eb() {
						this.Db || (this.Hb(), (this.Db = !0));
					}
				}
				e.$Stc = Se;
				let ke = class {
					constructor(qe, Ae, Me, De, Re) {
						(this.g = qe),
							(this.h = Ae),
							(this.j = Me),
							(this.k = De),
							(this.l = Re),
							(this.d = te.$ozb.getInstance()),
							(this.b = `application/vnd.code.tree.${qe.toLowerCase()}`);
					}
					set controller(qe) {
						this.m = qe;
					}
					n(qe, Ae, Me, De) {
						return qe.handleDrag(Ae, Me, De).then((Re) => {
							if (Re) {
								const je = [];
								for (const Ve of Re)
									Ve[0] !== this.b &&
										qe.dragMimeTypes.findIndex((Ze) => Ze === Ve[0]) < 0 &&
										je.push(Ve[0]);
								je.length &&
									this.l.warn(
										`Drag and drop controller for tree ${this.g} adds the following data transfer types but does not declare them in dragMimeTypes: ${je.join(", ")}`,
									);
							}
							return Re;
						});
					}
					o(qe, Ae) {
						if (!qe.dataTransfer || !this.m) return;
						const Me = (0, v.$9g)();
						(this.f = new a.$Ce()),
							this.k.addDragOperationTransfer(
								Me,
								this.n(this.m, Ae, Me, this.f.token),
							),
							this.d.setData([new oe.$b3b(Me)], oe.$b3b.prototype),
							qe.dataTransfer.clearData(f.$EK.text),
							this.m.dragMimeTypes.find((De) => De === f.$EK.uriList) &&
								qe.dataTransfer?.setData(t.$Ohb.RESOURCES, ""),
							this.m.dragMimeTypes.forEach((De) => {
								qe.dataTransfer?.setData(De, "");
							});
					}
					p(qe, Ae) {
						if (Ae.length && qe.dataTransfer) {
							this.j.invokeFunction((De) => (0, J.$PSb)(De, Ae, qe));
							const Me = Ae.filter((De) => De.scheme === b.Schemas.file).map(
								(De) => De.fsPath,
							);
							Me.length &&
								qe.dataTransfer.setData(te.$hzb.FILES, JSON.stringify(Me));
						}
					}
					onDragStart(qe, Ae) {
						if (Ae.dataTransfer) {
							const Me = qe.getData(),
								De = [],
								Re = { id: this.g, itemHandles: [] };
							Me.forEach((je) => {
								Re.itemHandles.push(je.handle),
									je.resourceUri && De.push($.URI.revive(je.resourceUri));
							}),
								this.p(Ae, De),
								this.o(Ae, Re.itemHandles),
								Ae.dataTransfer.setData(this.b, JSON.stringify(Re));
						}
					}
					q(qe) {
						qe.size
							? this.l.debug(
									`TreeView dragged mime types: ${Array.from(qe).join(", ")}`,
								)
							: this.l.debug("TreeView dragged with no supported mime types.");
					}
					onDragOver(qe, Ae, Me, De, Re) {
						const je = (0, Q.$qzb)(Re.dataTransfer),
							Ve = new Set(Array.from(je, (rt) => rt[0]));
						if (Re.dataTransfer) {
							for (const rt of Re.dataTransfer.items)
								if (
									rt.kind === "file" ||
									rt.type === t.$Ohb.RESOURCES.toLowerCase()
								) {
									Ve.add(f.$EK.uriList);
									break;
								}
						}
						this.q(Ve);
						const Ze = this.m;
						return !Ze || !Re.dataTransfer || Ze.dropMimeTypes.length === 0
							? !1
							: Array.from(Ve).some((rt, ft) =>
										rt === this.b ? !0 : Ze.dropMimeTypes.indexOf(rt) >= 0,
									)
								? {
										accept: !0,
										bubble: d.TreeDragOverBubble.Down,
										autoExpand: !0,
									}
								: !1;
					}
					getDragURI(qe) {
						return this.m
							? qe.resourceUri
								? $.URI.revive(qe.resourceUri).toString()
								: qe.handle
							: null;
					}
					getDragLabel(qe) {
						if (!this.m) return;
						if (qe.length > 1) return String(qe.length);
						const Ae = qe[0];
						return Ae.label
							? Ae.label.label
							: Ae.resourceUri
								? this.h.getUriLabel($.URI.revive(Ae.resourceUri))
								: void 0;
					}
					async drop(qe, Ae, Me, De, Re) {
						const je = this.m;
						if (!Re.dataTransfer || !je) return;
						let Ve, Ze;
						this.d.hasData(oe.$b3b.prototype) &&
							(Ze = this.d.getData(oe.$b3b.prototype)[0].identifier);
						const et = (0, Q.$qzb)(Re.dataTransfer, !0),
							rt = new S.$XL();
						for (const [bt, nt] of et)
							if (
								(bt === this.b ||
									je.dropMimeTypes.includes(bt) ||
									(nt.asFile() &&
										je.dropMimeTypes.includes(t.$Ohb.FILES.toLowerCase()))) &&
								(rt.append(bt, nt), bt === this.b)
							)
								try {
									Ve = JSON.parse(await nt.asString());
								} catch {}
						const ft = await this.k.removeDragOperationTransfer(Ze);
						if (ft) for (const [bt, nt] of ft) rt.append(bt, nt);
						return je.handleDrop(
							rt,
							Ae,
							a.CancellationToken.None,
							Ze,
							Ve?.id,
							Ve?.itemHandles,
						);
					}
					onDragEnd(qe) {
						qe.dataTransfer?.dropEffect === "none" && this.f?.cancel();
					}
					dispose() {}
				};
				(e.$Ttc = ke),
					(e.$Ttc = ke =
						Ne([j(1, O.$3N), j(2, A.$Li), j(3, le.$c3b), j(4, U.$ik)], ke));
			},
		),
		define(
			de[239],
			he([
				1, 0, 7, 168, 159, 277, 1580, 15, 6, 27, 3, 28, 4, 92, 11, 10, 8, 49, 5,
				43, 21, 32, 51, 35, 25, 967, 362, 969, 123, 60, 89, 100, 53, 96, 1518,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Sb = e.$ZSb = e.$YSb = void 0),
					(h = mt(h)),
					(e.$YSb = new n.$XX("Views")),
					n.$ZX.appendMenuItem(n.$XX.ViewContainerTitle, {
						submenu: e.$YSb,
						title: h.localize(3748, null),
						order: 1,
					});
				var A;
				(function (F) {
					(F[(F.UP = 0)] = "UP"),
						(F[(F.DOWN = 1)] = "DOWN"),
						(F[(F.LEFT = 2)] = "LEFT"),
						(F[(F.RIGHT = 3)] = "RIGHT");
				})(A || (A = {}));
				class R extends $.$pP {
					static {
						this.c = "monaco-pane-drop-overlay";
					}
					get currentDropOperation() {
						return this.j;
					}
					constructor(x, H, q, V, G) {
						super(G),
							(this.s = x),
							(this.t = H),
							(this.u = q),
							(this.z = V),
							(this.r = this.D(new d.$Yh(() => this.dispose(), 300))),
							this.C();
					}
					get disposed() {
						return !!this.m;
					}
					C() {
						(this.f = document.createElement("div")),
							(this.f.id = R.c),
							(this.f.style.top = "0px"),
							this.s.appendChild(this.f),
							this.s.classList.add("dragged-over"),
							this.D(
								(0, u.$Yc)(() => {
									this.f.remove(), this.s.classList.remove("dragged-over");
								}),
							),
							(this.g = document.createElement("div")),
							this.g.classList.add("pane-overlay-indicator"),
							this.f.appendChild(this.g),
							this.F(),
							this.updateStyles();
					}
					updateStyles() {
						this.g.style.backgroundColor =
							this.w(
								this.z === k.ViewContainerLocation.Panel ? P.$xFb : P.$BGb,
							) || "";
						const x = this.w(y.$PP);
						(this.g.style.outlineColor = x || ""),
							(this.g.style.outlineOffset = x ? "-2px" : ""),
							(this.g.style.outlineStyle = x ? "dashed" : ""),
							(this.g.style.outlineWidth = x ? "2px" : ""),
							(this.g.style.borderColor = x || ""),
							(this.g.style.borderStyle = "solid"),
							(this.g.style.borderWidth = "0px");
					}
					F() {
						this.D(
							new t.$Hhb(this.f, {
								onDragOver: (x) => {
									this.G(x.offsetX, x.offsetY),
										this.r.isScheduled() && this.r.cancel();
								},
								onDragLeave: (x) => this.dispose(),
								onDragEnd: (x) => this.dispose(),
								onDrop: (x) => {
									this.dispose();
								},
							}),
						),
							this.D(
								(0, t.$0fb)(this.f, t.$$gb.MOUSE_OVER, () => {
									this.r.isScheduled() || this.r.schedule();
								}),
							);
					}
					G(x, H) {
						const q = this.s.clientWidth,
							V = this.s.clientHeight,
							G = q / 2,
							K = V / 2;
						let J;
						switch (
							(this.t === E.Orientation.VERTICAL
								? H < K
									? (J = A.UP)
									: H >= K && (J = A.DOWN)
								: this.t === E.Orientation.HORIZONTAL &&
									(x < G ? (J = A.LEFT) : x >= G && (J = A.RIGHT)),
							J)
						) {
							case A.UP:
								this.I({ top: "0", left: "0", width: "100%", height: "50%" });
								break;
							case A.DOWN:
								this.I({
									bottom: "0",
									left: "0",
									width: "100%",
									height: "50%",
								});
								break;
							case A.LEFT:
								this.I({ top: "0", left: "0", width: "50%", height: "100%" });
								break;
							case A.RIGHT:
								this.I({ top: "0", right: "0", width: "50%", height: "100%" });
								break;
							default: {
								let W = "0",
									X = "0",
									Y = "100%",
									ie = "100%";
								if (this.u) {
									const ne = this.f.getBoundingClientRect();
									(W = `${this.u.top - ne.top}px`),
										(X = `${this.u.left - ne.left}px`),
										(ie = `${this.u.bottom - this.u.top}px`),
										(Y = `${this.u.right - this.u.left}px`);
								}
								this.I({ top: W, left: X, width: Y, height: ie });
							}
						}
						(this.t === E.Orientation.VERTICAL && V <= 25) ||
						(this.t === E.Orientation.HORIZONTAL && q <= 25)
							? this.H(J)
							: this.H(void 0),
							(this.g.style.opacity = "1"),
							setTimeout(
								() => this.g.classList.add("overlay-move-transition"),
								0,
							),
							(this.j = J);
					}
					H(x) {
						(this.g.style.borderTopWidth = x === A.UP ? "2px" : "0px"),
							(this.g.style.borderLeftWidth = x === A.LEFT ? "2px" : "0px"),
							(this.g.style.borderBottomWidth = x === A.DOWN ? "2px" : "0px"),
							(this.g.style.borderRightWidth = x === A.RIGHT ? "2px" : "0px");
					}
					I(x) {
						(this.f.style.height = "100%"),
							(this.g.style.top = x.top || ""),
							(this.g.style.left = x.left || ""),
							(this.g.style.bottom = x.bottom || ""),
							(this.g.style.right = x.right || ""),
							(this.g.style.width = x.width),
							(this.g.style.height = x.height);
					}
					contains(x) {
						return x === this.f || x === this.g;
					}
					dispose() {
						super.dispose(), (this.m = !0);
					}
				}
				let O = class extends S.$MMb {
					constructor(x, H, q, V, G) {
						const K = V.createScoped(x);
						K.createKey("viewContainer", H.id);
						const J = K.createKey(
							"viewContainerLocation",
							(0, k.$J1)(q.getViewContainerLocation(H)),
						);
						super(
							n.$XX.ViewContainerTitle,
							n.$XX.ViewContainerTitleContext,
							{ shouldForwardArgs: !0, renderShortTitle: !0 },
							K,
							G,
						),
							this.D(K),
							this.D(
								m.Event.filter(
									q.onDidChangeContainerLocation,
									(W) => W.viewContainer === H,
								)(() => J.set((0, k.$J1)(q.getViewContainerLocation(H)))),
							);
					}
				};
				O = Ne([j(2, k.$K1), j(3, p.$6j), j(4, n.$YX)], O);
				let B = class extends T.$fEb {
					get onDidSashChange() {
						return (0, a.$wg)(this.m).onDidSashChange;
					}
					get panes() {
						return this.j.map((x) => x.pane);
					}
					get views() {
						return this.panes;
					}
					get length() {
						return this.j.length;
					}
					get menuActions() {
						return this.Z;
					}
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(x, X, Y),
							(this.ab = H),
							(this.bb = q),
							(this.cb = V),
							(this.db = G),
							(this.eb = K),
							(this.fb = J),
							(this.gb = W),
							(this.hb = Y),
							(this.ib = ie),
							(this.jb = ne),
							(this.j = []),
							(this.s = !1),
							(this.u = !1),
							(this.J = !1),
							(this.Q = this.D(new m.$re())),
							(this.onTitleAreaUpdate = this.Q.event),
							(this.R = this.D(new m.$re())),
							(this.onDidChangeVisibility = this.R.event),
							(this.S = this.D(new m.$re())),
							(this.onDidAddViews = this.S.event),
							(this.U = this.D(new m.$re())),
							(this.onDidRemoveViews = this.U.event),
							(this.W = this.D(new m.$re())),
							(this.onDidChangeViewVisibility = this.W.event),
							(this.X = this.D(new m.$re())),
							(this.onDidFocusView = this.X.event),
							(this.Y = this.D(new m.$re())),
							(this.onDidBlurView = this.Y.event);
						const ee = this.jb.getViewContainerById(x);
						if (!ee) throw new Error("Could not find container");
						(this.viewContainer = ee),
							(this.O = `${x}.numberOfVisibleViews`),
							(this.N = this.hb.getNumber(
								this.O,
								s.StorageScope.WORKSPACE,
								void 0,
							)),
							(this.P = this.jb.getViewContainerModel(ee));
					}
					create(x) {
						const H = this.ab;
						(H.orientation = this.lb),
							(this.m = this.D(new C.$gpb(x, this.ab))),
							this.M && this.m.setBoundarySashes(this.M),
							this.D(
								this.m.onDidDrop(({ from: W, to: X }) => this.movePane(W, X)),
							),
							this.D(this.m.onDidScroll((W) => this.yb())),
							this.D(this.m.onDidSashReset((W) => this.zb(W))),
							this.D(
								(0, t.$0fb)(x, t.$$gb.CONTEXT_MENU, (W) =>
									this.kb(new i.$2fb((0, t.getWindow)(x), W)),
								),
							),
							this.D(w.$Qhb.addTarget(x)),
							this.D(
								(0, t.$0fb)(x, w.EventType.Contextmenu, (W) =>
									this.kb(new i.$2fb((0, t.getWindow)(x), W)),
								),
							),
							(this.Z = this.D(
								this.bb.createInstance(O, this.m.element, this.viewContainer),
							)),
							this.D(this.Z.onDidChange(() => this.mb()));
						let q;
						const V = () => {
								const W = x.getBoundingClientRect(),
									X =
										this.panes[
											this.panes.length - 1
										].element.getBoundingClientRect(),
									Y = this.lb === E.Orientation.VERTICAL ? X.bottom : W.top,
									ie = this.lb === E.Orientation.HORIZONTAL ? X.right : W.left;
								return { top: Y, bottom: W.bottom, left: ie, right: W.right };
							},
							G = (W, X) =>
								X.x >= W.left &&
								X.x <= W.right &&
								X.y >= W.top &&
								X.y <= W.bottom;
						let K;
						this.D(
							I.$TSb.INSTANCE.registerTarget(x, {
								onDragEnter: (W) => {
									if (
										((K = V()),
										q && q.disposed && (q = void 0),
										!q && G(K, W.eventData))
									) {
										const X = W.dragAndDropData.getData();
										if (X.type === "view") {
											const Y = this.jb.getViewContainerByViewId(X.id),
												ie = this.jb.getViewDescriptorById(X.id);
											if (
												Y !== this.viewContainer &&
												(!ie ||
													!ie.canMoveView ||
													this.viewContainer.rejectAddedViews)
											)
												return;
											q = new R(
												x,
												void 0,
												K,
												this.jb.getViewContainerLocation(this.viewContainer),
												this.n,
											);
										}
										if (
											X.type === "composite" &&
											X.id !== this.viewContainer.id
										) {
											const Y = this.jb.getViewContainerById(X.id),
												ie =
													this.jb.getViewContainerModel(Y).allViewDescriptors;
											!ie.some((ne) => !ne.canMoveView) &&
												ie.length > 0 &&
												(q = new R(
													x,
													void 0,
													K,
													this.jb.getViewContainerLocation(this.viewContainer),
													this.n,
												));
										}
									}
								},
								onDragOver: (W) => {
									q && q.disposed && (q = void 0),
										q && !G(K, W.eventData) && (q.dispose(), (q = void 0)),
										G(K, W.eventData) &&
											(0, I.$USb)(
												W.eventData.dataTransfer,
												"move",
												q !== void 0,
											);
								},
								onDragLeave: (W) => {
									q?.dispose(), (q = void 0);
								},
								onDrop: (W) => {
									if (q) {
										const X = W.dragAndDropData.getData(),
											Y = [];
										if (
											X.type === "composite" &&
											X.id !== this.viewContainer.id
										) {
											const ne = this.jb.getViewContainerById(X.id),
												ee =
													this.jb.getViewContainerModel(ne).allViewDescriptors;
											ee.some((_) => !_.canMoveView) || Y.push(...ee);
										} else if (X.type === "view") {
											const ne = this.jb.getViewContainerByViewId(X.id),
												ee = this.jb.getViewDescriptorById(X.id);
											ne !== this.viewContainer &&
												ee &&
												ee.canMoveView &&
												this.jb.moveViewsToContainer(
													[ee],
													this.viewContainer,
													void 0,
													"dnd",
												);
										}
										const ie = this.panes.length;
										if (
											(Y.length > 0 &&
												this.jb.moveViewsToContainer(
													Y,
													this.viewContainer,
													void 0,
													"dnd",
												),
											ie > 0)
										)
											for (const ne of Y) {
												const ee = this.panes.find((_) => _.id === ne.id);
												ee &&
													this.movePane(ee, this.panes[this.panes.length - 1]);
											}
									}
									q?.dispose(), (q = void 0);
								},
							}),
						),
							this.D(this.onDidSashChange(() => this.ob())),
							this.D(this.P.onDidAddVisibleViewDescriptors((W) => this.tb(W))),
							this.D(
								this.P.onDidRemoveVisibleViewDescriptors((W) => this.ub(W)),
							);
						const J = this.P.visibleViewDescriptors.map((W, X) => {
							const Y = this.P.getSize(W.id),
								ie = this.P.isCollapsed(W.id);
							return { viewDescriptor: W, index: X, size: Y, collapsed: ie };
						});
						J.length && this.tb(J),
							this.gb.whenInstalledExtensionsRegistered().then(() => {
								(this.u = !0),
									this.panes.length && (this.mb(), this.xb()),
									this.D(
										this.cb.onDidChangeConfiguration((W) => {
											W.affectsConfiguration(
												N.LayoutSettings.ACTIVITY_BAR_LOCATION,
											) && this.xb();
										}),
									);
							}),
							this.D(
								this.P.onDidChangeActiveViewDescriptors(() => this.Q.fire()),
							);
					}
					getTitle() {
						const x = this.P.title;
						if (this.isViewMergedWithContainer()) {
							const H = this.j[0].pane.singleViewPaneContainerTitle;
							if (H) return H;
							const q = this.j[0].pane.title;
							return x === q ? q : q ? `${q}` : x;
						}
						return x;
					}
					kb(x) {
						for (const H of this.j)
							if ((0, t.$Bgb)(x.target, H.pane.element)) return;
						x.stopPropagation(),
							x.preventDefault(),
							this.eb.showContextMenu({
								getAnchor: () => x,
								getActions: () =>
									this.menuActions?.getContextMenuActions() ?? [],
							});
					}
					getActionsContext() {
						if (this.isViewMergedWithContainer())
							return this.panes[0].getActionsContext();
					}
					getActionViewItem(x, H) {
						return this.isViewMergedWithContainer()
							? this.j[0].pane.getActionViewItem(x, H)
							: (0, c.$Pyb)(this.bb, x, H);
					}
					focus() {
						let x;
						if (this.f) x = this.f;
						else if (this.j.length > 0) {
							for (const { pane: H } of this.j)
								if (H.isExpanded()) {
									x = H;
									break;
								}
						}
						x && x.focus();
					}
					get lb() {
						switch (this.jb.getViewContainerLocation(this.viewContainer)) {
							case k.ViewContainerLocation.Sidebar:
							case k.ViewContainerLocation.AuxiliaryBar:
								return E.Orientation.VERTICAL;
							case k.ViewContainerLocation.Panel:
								return (0, N.$nEb)(this.db.getPanelPosition())
									? E.Orientation.HORIZONTAL
									: E.Orientation.VERTICAL;
						}
						return E.Orientation.VERTICAL;
					}
					layout(x) {
						this.m &&
							(this.m.orientation !== this.lb &&
								this.m.flipOrientation(x.height, x.width),
							this.m.layout(x.height, x.width)),
							(this.L = x),
							this.J ? this.ob() : ((this.J = !0), this.pb());
					}
					setBoundarySashes(x) {
						(this.M = x), this.m?.setBoundarySashes(x);
					}
					getOptimalWidth() {
						return (
							Math.max(...this.panes.map((q) => q.getOptimalWidth() || 0)) + 16
						);
					}
					addPanes(x) {
						const H = this.isViewMergedWithContainer();
						for (const { pane: q, size: V, index: G, disposable: K } of x)
							this.vb(q, V, K, G);
						this.xb(),
							this.isViewMergedWithContainer() !== H && this.mb(),
							this.S.fire(x.map(({ pane: q }) => q));
					}
					setVisible(x) {
						this.s !== !!x && ((this.s = x), this.R.fire(x)),
							this.panes
								.filter((H) => H.isVisible() !== x)
								.map((H) => H.setVisible(x));
					}
					isVisible() {
						return this.s;
					}
					mb() {
						this.Q.fire();
					}
					nb(x, H) {
						return this.bb.createInstance(
							x.ctorDescriptor.ctor,
							...(x.ctorDescriptor.staticArguments || []),
							H,
						);
					}
					getView(x) {
						return this.panes.filter((H) => H.id === x)[0];
					}
					ob() {
						this.J &&
							this.P.setSizes(
								this.panes.map((x) => ({
									id: x.id,
									size: this.getPaneSize(x),
								})),
							);
					}
					pb() {
						if (this.J) {
							let x;
							for (let H = 0; H < this.P.visibleViewDescriptors.length; H++) {
								const q = this.panes[H],
									V = this.P.visibleViewDescriptors[H],
									G = this.P.getSize(V.id);
								typeof G == "number"
									? this.resizePane(q, G)
									: ((x = x || this.qb()),
										this.resizePane(q, x.get(q.id) || 200));
							}
						}
					}
					qb() {
						const x = new Map();
						if (this.L) {
							const H = this.P.visibleViewDescriptors.reduce(
								(q, { weight: V }) => q + (V || 20),
								0,
							);
							for (const q of this.P.visibleViewDescriptors)
								this.lb === E.Orientation.VERTICAL
									? x.set(q.id, (this.L.height * (q.weight || 20)) / H)
									: x.set(q.id, (this.L.width * (q.weight || 20)) / H);
						}
						return x;
					}
					I() {
						this.panes.forEach((x) => x.saveState()),
							this.hb.store(
								this.O,
								this.length,
								s.StorageScope.WORKSPACE,
								s.StorageTarget.MACHINE,
							);
					}
					sb(x, H) {
						x.stopPropagation(), x.preventDefault();
						const q = H.menuActions.getContextMenuActions();
						this.eb.showContextMenu({
							getAnchor: () => x,
							getActions: () => q,
						});
					}
					openView(x, H) {
						let q = this.getView(x);
						return (
							q || this.toggleViewVisibility(x),
							(q = this.getView(x)),
							q && (q.setExpanded(!0), H && q.focus()),
							q
						);
					}
					tb(x) {
						const H = [];
						for (const {
							viewDescriptor: V,
							collapsed: G,
							index: K,
							size: J,
						} of x) {
							const W = this.nb(V, {
								id: V.id,
								title: V.name.value,
								fromExtensionId: V.extensionId,
								expanded: !G,
								singleViewPaneContainerTitle: V.singleViewPaneContainerTitle,
							});
							W.render();
							const X = (0, t.$0fb)(W.draggableElement, "contextmenu", (ie) => {
									ie.stopPropagation(),
										ie.preventDefault(),
										this.sb(
											new i.$2fb((0, t.getWindow)(W.draggableElement), ie),
											W,
										);
								}),
								Y = m.Event.latch(
									m.Event.map(W.onDidChange, () => !W.isExpanded()),
								)((ie) => {
									this.P.setCollapsed(V.id, ie);
								});
							H.push({
								pane: W,
								size: J || W.minimumSize,
								index: K,
								disposable: (0, u.$Xc)(X, Y),
							});
						}
						this.addPanes(H), this.pb();
						const q = [];
						for (const { pane: V } of H)
							V.setVisible(this.isVisible()), q.push(V);
						return q;
					}
					ub(x) {
						x = x.sort((q, V) => V.index - q.index);
						const H = [];
						for (const { index: q } of x) this.j[q] && H.push(this.j[q].pane);
						if (H.length) {
							this.removePanes(H);
							for (const q of H) q.setVisible(!1);
						}
					}
					toggleViewVisibility(x) {
						if (this.P.activeViewDescriptors.some((H) => H.id === x)) {
							const H = !this.P.isVisible(x);
							this.P.setVisible(x, H);
						}
					}
					vb(x, H, q, V = this.j.length - 1) {
						const G = x.onDidFocus(() => {
								this.X.fire(x), (this.f = x);
							}),
							K = x.onDidBlur(() => this.Y.fire(x)),
							J = x.onDidChangeTitleArea(() => {
								this.isViewMergedWithContainer() && this.mb();
							}),
							W = x.onDidChangeBodyVisibility(() => this.W.fire(x)),
							X = x.onDidChange(() => {
								x === this.f && !x.isExpanded() && (this.f = void 0);
							}),
							Y =
								this.jb.getViewContainerLocation(this.viewContainer) ===
								k.ViewContainerLocation.Panel;
						x.style({
							headerForeground: (0, y.$rP)(Y ? P.$zFb : P.$DGb),
							headerBackground: (0, y.$rP)(Y ? P.$yFb : P.$CGb),
							headerBorder: (0, y.$rP)(Y ? P.$AFb : P.$EGb),
							dropBackground: (0, y.$rP)(Y ? P.$xFb : P.$BGb),
							leftBorder: Y ? (0, y.$rP)(P.$BFb) : void 0,
						});
						const ie = new u.$Zc();
						ie.add(q), ie.add((0, u.$Xc)(x, G, K, J, X, W));
						const ne = { pane: x, disposable: ie };
						this.j.splice(V, 0, ne), (0, a.$wg)(this.m).addPane(x, H, V);
						let ee;
						ie.add(
							I.$TSb.INSTANCE.registerDraggable(
								x.draggableElement,
								() => ({ type: "view", id: x.id }),
								{},
							),
						),
							ie.add(
								I.$TSb.INSTANCE.registerTarget(x.dropTargetElement, {
									onDragEnter: (_) => {
										if (!ee) {
											const te = _.dragAndDropData.getData();
											if (te.type === "view" && te.id !== x.id) {
												const Q = this.jb.getViewContainerByViewId(te.id),
													Z = this.jb.getViewDescriptorById(te.id);
												if (
													Q !== this.viewContainer &&
													(!Z ||
														!Z.canMoveView ||
														this.viewContainer.rejectAddedViews)
												)
													return;
												ee = new R(
													x.dropTargetElement,
													this.lb ?? E.Orientation.VERTICAL,
													void 0,
													this.jb.getViewContainerLocation(this.viewContainer),
													this.n,
												);
											}
											if (
												te.type === "composite" &&
												te.id !== this.viewContainer.id &&
												!this.viewContainer.rejectAddedViews
											) {
												const Q = this.jb.getViewContainerById(te.id),
													Z =
														this.jb.getViewContainerModel(Q).allViewDescriptors;
												!Z.some((se) => !se.canMoveView) &&
													Z.length > 0 &&
													(ee = new R(
														x.dropTargetElement,
														this.lb ?? E.Orientation.VERTICAL,
														void 0,
														this.jb.getViewContainerLocation(
															this.viewContainer,
														),
														this.n,
													));
											}
										}
									},
									onDragOver: (_) => {
										(0, I.$USb)(
											_.eventData.dataTransfer,
											"move",
											ee !== void 0,
										);
									},
									onDragLeave: (_) => {
										ee?.dispose(), (ee = void 0);
									},
									onDrop: (_) => {
										if (ee) {
											const te = _.dragAndDropData.getData(),
												Q = [];
											let Z;
											if (
												te.type === "composite" &&
												te.id !== this.viewContainer.id &&
												!this.viewContainer.rejectAddedViews
											) {
												const se = this.jb.getViewContainerById(te.id),
													re =
														this.jb.getViewContainerModel(
															se,
														).allViewDescriptors;
												re.length > 0 &&
													!re.some((le) => !le.canMoveView) &&
													(Q.push(...re), (Z = re[0]));
											} else if (te.type === "view") {
												const se = this.jb.getViewContainerByViewId(te.id),
													re = this.jb.getViewDescriptorById(te.id);
												se !== this.viewContainer &&
													re &&
													re.canMoveView &&
													!this.viewContainer.rejectAddedViews &&
													Q.push(re),
													re && (Z = re);
											}
											if (
												(Q &&
													this.jb.moveViewsToContainer(
														Q,
														this.viewContainer,
														void 0,
														"dnd",
													),
												Z)
											) {
												if (
													ee.currentDropOperation === A.DOWN ||
													ee.currentDropOperation === A.RIGHT
												) {
													const se = this.panes.findIndex(
														(le) => le.id === Z.id,
													);
													let re = this.panes.findIndex((le) => le.id === x.id);
													se >= 0 &&
														re >= 0 &&
														(se > re && re++,
														re < this.panes.length &&
															re !== se &&
															this.movePane(this.panes[se], this.panes[re]));
												}
												if (
													ee.currentDropOperation === A.UP ||
													ee.currentDropOperation === A.LEFT
												) {
													const se = this.panes.findIndex(
														(le) => le.id === Z.id,
													);
													let re = this.panes.findIndex((le) => le.id === x.id);
													se >= 0 &&
														re >= 0 &&
														(se < re && re--,
														re >= 0 &&
															re !== se &&
															this.movePane(this.panes[se], this.panes[re]));
												}
												Q.length > 1 &&
													Q.slice(1).forEach((se) => {
														let re = this.panes.findIndex(
															(oe) => oe.id === Z.id,
														);
														const le = this.panes.findIndex(
															(oe) => oe.id === se.id,
														);
														le >= 0 &&
															re >= 0 &&
															(le > re && re++,
															re < this.panes.length &&
																re !== le &&
																(this.movePane(this.panes[le], this.panes[re]),
																(Z = se)));
													});
											}
										}
										ee?.dispose(), (ee = void 0);
									},
								}),
							);
					}
					removePanes(x) {
						const H = this.isViewMergedWithContainer();
						x.forEach((q) => this.wb(q)),
							this.xb(),
							H !== this.isViewMergedWithContainer() && this.mb(),
							this.U.fire(x);
					}
					wb(x) {
						const H = this.j.findIndex((V) => V.pane === x);
						if (H === -1) return;
						this.f === x && (this.f = void 0), (0, a.$wg)(this.m).removePane(x);
						const [q] = this.j.splice(H, 1);
						q.disposable.dispose();
					}
					movePane(x, H) {
						const q = this.j.findIndex((W) => W.pane === x),
							V = this.j.findIndex((W) => W.pane === H),
							G = this.P.visibleViewDescriptors[q],
							K = this.P.visibleViewDescriptors[V];
						if (q < 0 || q >= this.j.length || V < 0 || V >= this.j.length)
							return;
						const [J] = this.j.splice(q, 1);
						this.j.splice(V, 0, J),
							(0, a.$wg)(this.m).movePane(x, H),
							this.P.move(G.id, K.id),
							this.mb();
					}
					resizePane(x, H) {
						(0, a.$wg)(this.m).resizePane(x, H);
					}
					getPaneSize(x) {
						return (0, a.$wg)(this.m).getPaneSize(x);
					}
					xb() {
						this.isViewMergedWithContainer()
							? (this.j[0].pane.isExpanded()
									? (this.g = void 0)
									: ((this.g = this.j[0].pane), this.j[0].pane.setExpanded(!0)),
								(this.j[0].pane.headerVisible = !1),
								(this.j[0].pane.collapsible = !0))
							: (this.j.length === 1
									? ((this.j[0].pane.headerVisible = !0),
										this.j[0].pane === this.g && this.j[0].pane.setExpanded(!1),
										(this.j[0].pane.collapsible = !1))
									: this.j.forEach((x) => {
											(x.pane.headerVisible = !0),
												(x.pane.collapsible = !0),
												x.pane === this.g && x.pane.setExpanded(!1);
										}),
								(this.g = void 0),
								this.j.length === 1
									? this.j[0].pane.setIsAlone(!0)
									: this.j.length > 1 &&
										this.j.forEach((x) => x.pane.setIsAlone(!1)));
					}
					isViewMergedWithContainer() {
						return !(
							this.ab.mergeViewWithContainerWhenSingleView &&
							this.j.length === 1
						) ||
							(this.jb.getViewContainerLocation(this.viewContainer) ===
								k.ViewContainerLocation.Sidebar &&
								this.db.activityBarDirection !== "vertical")
							? !1
							: this.u
								? !0
								: this.N === void 0
									? this.j[0].pane.isExpanded()
									: this.N === 1;
					}
					yb() {
						for (const x of this.panes) x.onDidScrollRoot();
					}
					zb(x) {
						let H, q;
						for (let V = x; V >= 0; V--)
							if (this.j[V].pane?.isVisible() && this.j[V]?.pane.isExpanded()) {
								H = this.j[V].pane;
								break;
							}
						for (let V = x + 1; V < this.j.length; V++)
							if (this.j[V].pane?.isVisible() && this.j[V]?.pane.isExpanded()) {
								q = this.j[V].pane;
								break;
							}
						if (H && q) {
							const V = this.getPaneSize(H),
								G = this.getPaneSize(q),
								K = Math.ceil((V + G) / 2),
								J = Math.floor((V + G) / 2);
							V > G
								? (this.resizePane(H, K), this.resizePane(q, J))
								: (this.resizePane(q, J), this.resizePane(H, K));
						}
					}
					dispose() {
						super.dispose(),
							this.j.forEach((x) => x.disposable.dispose()),
							this.m && this.m.dispose();
					}
				};
				(e.$ZSb = B),
					(e.$ZSb = B =
						Ne(
							[
								j(2, f.$Li),
								j(3, g.$gj),
								j(4, N.$mEb),
								j(5, o.$Xxb),
								j(6, l.$km),
								j(7, M.$q2),
								j(8, $.$iP),
								j(9, s.$lq),
								j(10, v.$Vi),
								j(11, k.$K1),
							],
							B,
						));
				class U extends n.$3X {
					constructor(x) {
						super(x), (this.desc = x);
					}
					run(x, ...H) {
						const q = x
							.get(L.$HMb)
							.getActiveViewPaneContainerWithId(this.desc.viewPaneContainerId);
						if (q) return this.runInViewPaneContainer(x, q, ...H);
					}
				}
				e.$1Sb = U;
				class z extends n.$3X {
					constructor(x, H) {
						super(x), (this.c = H);
					}
					async run(x) {
						const H = x.get(k.$K1),
							q = x.get(p.$6j),
							V = D.$zQb.getValue(q);
						if (V === void 0) return;
						const G = H.getViewContainerByViewId(V),
							K = H.getViewContainerModel(G),
							J = K.visibleViewDescriptors.find((Y) => Y.id === V),
							W = K.visibleViewDescriptors.indexOf(J);
						if (W + this.c < 0 || W + this.c >= K.visibleViewDescriptors.length)
							return;
						const X = K.visibleViewDescriptors[W + this.c];
						K.move(J.id, X.id);
					}
				}
				(0, n.$4X)(
					class extends z {
						constructor() {
							super(
								{
									id: "views.moveViewUp",
									title: h.localize(3749, null),
									keybinding: {
										primary: (0, r.$os)(r.$ps, r.KeyCode.UpArrow),
										mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.UpArrow) },
										weight: b.KeybindingWeight.WorkbenchContrib + 1,
										when: D.$zQb.notEqualsTo(""),
									},
								},
								-1,
							);
						}
					},
				),
					(0, n.$4X)(
						class extends z {
							constructor() {
								super(
									{
										id: "views.moveViewLeft",
										title: h.localize(3750, null),
										keybinding: {
											primary: (0, r.$os)(r.$ps, r.KeyCode.LeftArrow),
											mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.LeftArrow) },
											weight: b.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$zQb.notEqualsTo(""),
										},
									},
									-1,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends z {
							constructor() {
								super(
									{
										id: "views.moveViewDown",
										title: h.localize(3751, null),
										keybinding: {
											primary: (0, r.$os)(r.$ps, r.KeyCode.DownArrow),
											mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.DownArrow) },
											weight: b.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$zQb.notEqualsTo(""),
										},
									},
									1,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends z {
							constructor() {
								super(
									{
										id: "views.moveViewRight",
										title: h.localize(3752, null),
										keybinding: {
											primary: (0, r.$os)(r.$ps, r.KeyCode.RightArrow),
											mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.RightArrow) },
											weight: b.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$zQb.notEqualsTo(""),
										},
									},
									1,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: "vscode.moveViews",
									title: h.localize(3753, null),
								});
							}
							async run(x, H) {
								if (
									!Array.isArray(H?.viewIds) ||
									typeof H?.destinationId != "string"
								)
									return Promise.reject("Invalid arguments");
								const q = x.get(k.$K1),
									V = q.getViewContainerById(H.destinationId);
								if (V) {
									for (const G of H.viewIds) {
										const K = q.getViewDescriptorById(G);
										K?.canMoveView &&
											q.moveViewsToContainer(
												[K],
												V,
												k.ViewVisibilityState.Default,
												this.desc.id,
											);
									}
									await x.get(L.$HMb).openViewContainer(V.id, !0);
								}
							}
						},
					);
			},
		),
		define(
			de[4015],
			he([
				1, 0, 6, 3, 9, 17, 74, 30, 101, 447, 1330, 88, 683, 60, 102, 239, 14,
				79, 4, 221, 23, 89, 1048, 18, 68,
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
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Apc = e.$zpc = e.$ypc = void 0),
					(C = mt(C));
				class S {
					get input() {
						return this.a;
					}
					set input(L) {
						(this.a = L), this.b.fire(L);
					}
					get onDidChangeInput() {
						return this.b.event;
					}
					get label() {
						return this.c;
					}
					set label(L) {
						(this.c = L), this.f.fire(this.c);
					}
					get contextValue() {
						return this.d;
					}
					set contextValue(L) {
						this.d = L;
					}
					get comments() {
						return this.g;
					}
					set comments(L) {
						(this.g = L), this.h.fire(this.g);
					}
					get onDidChangeComments() {
						return this.h.event;
					}
					set range(L) {
						(this.u = L), this.j.fire(this.u);
					}
					get range() {
						return this.u;
					}
					get onDidChangeCanReply() {
						return this.i.event;
					}
					set canReply(L) {
						(this.v = L), this.i.fire(this.v);
					}
					get canReply() {
						return this.v;
					}
					get collapsibleState() {
						return this.k;
					}
					set collapsibleState(L) {
						L !== this.k && ((this.k = L), this.n.fire(this.k));
					}
					get m() {
						return this.l;
					}
					set m(L) {
						(this.l = L),
							this.collapsibleState === void 0 &&
								(this.collapsibleState = this.m),
							this.o.fire(L);
					}
					get isDisposed() {
						return this.p;
					}
					isDocumentCommentThread() {
						return this.u === void 0 || E.$iL.isIRange(this.u);
					}
					get state() {
						return this.q;
					}
					set state(L) {
						(this.q = L), this.t.fire(this.q);
					}
					get applicability() {
						return this.r;
					}
					set applicability(L) {
						(this.r = L), this.s.fire(L);
					}
					get isTemplate() {
						return this.w;
					}
					constructor(L, D, M, N, A, R, O, B, U, z) {
						(this.commentThreadHandle = L),
							(this.controllerHandle = D),
							(this.extensionId = M),
							(this.threadId = N),
							(this.resource = A),
							(this.u = R),
							(this.v = B),
							(this.w = U),
							(this.editorId = z),
							(this.b = new t.$re()),
							(this.f = new t.$re()),
							(this.onDidChangeLabel = this.f.event),
							(this.h = new t.$re()),
							(this.i = new t.$re()),
							(this.j = new t.$re()),
							(this.onDidChangeRange = this.j.event),
							(this.n = new t.$re()),
							(this.onDidChangeCollapsibleState = this.n.event),
							(this.o = new t.$re()),
							(this.onDidChangeInitialCollapsibleState = this.o.event),
							(this.s = new t.$re()),
							(this.onDidChangeApplicability = this.s.event),
							(this.t = new t.$re()),
							(this.onDidChangeState = this.t.event),
							(this.p = !1),
							U ? (this.comments = []) : O && (this.g = O);
					}
					batchUpdate(L) {
						const D = (M) => Object.prototype.hasOwnProperty.call(L, M);
						D("range") && (this.u = L.range),
							D("label") && (this.c = L.label),
							D("contextValue") &&
								(this.d = L.contextValue === null ? void 0 : L.contextValue),
							D("comments") && (this.comments = L.comments),
							D("collapseState") && (this.m = L.collapseState),
							D("canReply") && (this.canReply = L.canReply),
							D("state") && (this.state = L.state),
							D("applicability") && (this.applicability = L.applicability),
							D("isTemplate") && (this.w = L.isTemplate);
					}
					hasComments() {
						return !!this.comments && this.comments.length > 0;
					}
					dispose() {
						(this.p = !0),
							this.n.dispose(),
							this.h.dispose(),
							this.b.dispose(),
							this.f.dispose(),
							this.j.dispose(),
							this.t.dispose();
					}
					toJSON() {
						return {
							$mid: b.MarshalledId.CommentThread,
							commentControlHandle: this.controllerHandle,
							commentThreadHandle: this.commentThreadHandle,
						};
					}
				}
				e.$ypc = S;
				class I {
					get handle() {
						return this.f;
					}
					get id() {
						return this.h;
					}
					get contextValue() {
						return this.h;
					}
					get proxy() {
						return this.c;
					}
					get label() {
						return this.i;
					}
					get reactions() {
						return this.a;
					}
					set reactions(L) {
						this.a = L;
					}
					get options() {
						return this.j.options;
					}
					get features() {
						return this.j;
					}
					get owner() {
						return this.h;
					}
					constructor(L, D, M, N, A, R, O) {
						(this.c = L),
							(this.d = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.i = R),
							(this.j = O),
							(this.b = new Map());
					}
					async setActiveCommentAndThread(L) {
						return this.c.$setActiveComment(
							this.f,
							L
								? {
										commentThreadHandle: L.thread.commentThreadHandle,
										uniqueIdInThread: L.comment?.uniqueIdInThread,
									}
								: void 0,
						);
					}
					updateFeatures(L) {
						this.j = L;
					}
					createCommentThread(L, D, M, N, A, R, O, B) {
						const U = new S(
							D,
							this.handle,
							L,
							M,
							w.URI.revive(N).toString(),
							A,
							R,
							!0,
							O,
							B,
						);
						return (
							this.b.set(D, U),
							U.isDocumentCommentThread()
								? this.d.updateComments(this.g, {
										added: [U],
										removed: [],
										changed: [],
										pending: [],
									})
								: this.d.updateNotebookComments(this.g, {
										added: [U],
										removed: [],
										changed: [],
										pending: [],
									}),
							U
						);
					}
					updateCommentThread(L, D, M, N) {
						const A = this.k(L);
						A.batchUpdate(N),
							A.isDocumentCommentThread()
								? this.d.updateComments(this.g, {
										added: [],
										removed: [],
										changed: [A],
										pending: [],
									})
								: this.d.updateNotebookComments(this.g, {
										added: [],
										removed: [],
										changed: [A],
										pending: [],
									});
					}
					deleteCommentThread(L) {
						const D = this.k(L);
						this.b.delete(L),
							D.dispose(),
							D.isDocumentCommentThread()
								? this.d.updateComments(this.g, {
										added: [],
										removed: [D],
										changed: [],
										pending: [],
									})
								: this.d.updateNotebookComments(this.g, {
										added: [],
										removed: [D],
										changed: [],
										pending: [],
									});
					}
					deleteCommentThreadMain(L) {
						this.b.forEach((D) => {
							D.threadId === L &&
								this.c.$deleteCommentThread(this.f, D.commentThreadHandle);
						});
					}
					updateInput(L) {
						const D = this.activeEditingCommentThread;
						if (D && D.input) {
							const M = D.input;
							(M.value = L), (D.input = M);
						}
					}
					updateCommentingRanges(L) {
						this.d.updateCommentingRanges(this.g, L);
					}
					k(L) {
						const D = this.b.get(L);
						if (!D) throw new Error("unknown thread");
						return D;
					}
					async getDocumentComments(L, D) {
						if (L.scheme === s.Schemas.vscodeNotebookCell)
							return {
								uniqueOwner: this.g,
								label: this.label,
								threads: [],
								commentingRanges: { resource: L, ranges: [], fileComments: !1 },
							};
						const M = [];
						for (const A of [...this.b.keys()]) {
							const R = this.b.get(A);
							R.resource === L.toString() &&
								R.isDocumentCommentThread() &&
								M.push(R);
						}
						const N = await this.c.$provideCommentingRanges(this.handle, L, D);
						return {
							uniqueOwner: this.g,
							label: this.label,
							threads: M,
							commentingRanges: {
								resource: L,
								ranges: N?.ranges || [],
								fileComments: !!N?.fileComments,
							},
						};
					}
					async getNotebookComments(L, D) {
						if (L.scheme !== s.Schemas.vscodeNotebookCell)
							return { uniqueOwner: this.g, label: this.label, threads: [] };
						const M = [];
						for (const N of [...this.b.keys()]) {
							const A = this.b.get(N);
							A.resource === L.toString() &&
								(A.isDocumentCommentThread() || M.push(A));
						}
						return { uniqueOwner: this.g, label: this.label, threads: M };
					}
					async toggleReaction(L, D, M, N, A) {
						return this.c.$toggleReaction(
							this.f,
							D.commentThreadHandle,
							L,
							M,
							N,
						);
					}
					getAllComments() {
						const L = [];
						for (const D of [...this.b.keys()]) L.push(this.b.get(D));
						return L;
					}
					createCommentThreadTemplate(L, D, M) {
						return this.c.$createCommentThreadTemplate(this.handle, L, D, M);
					}
					async updateCommentThreadTemplate(L, D) {
						await this.c.$updateCommentThreadTemplate(this.handle, L, D);
					}
					toJSON() {
						return {
							$mid: b.MarshalledId.CommentController,
							handle: this.handle,
						};
					}
				}
				e.$zpc = I;
				const T = (0, o.$$O)(
					"comments-view-icon",
					p.$ak.commentDiscussion,
					(0, f.localize)(2536, null),
				);
				let P = class extends i.$1c {
					constructor(L, D, M, N, A, R) {
						super(),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.g = this.D(new i.$Zc())),
							(this.h = null),
							(this.a = L.getProxy(a.$mbb.ExtHostComments)),
							this.j.unregisterCommentController(),
							this.D(
								this.j.onDidChangeActiveEditingCommentThread(async (O) => {
									const B = O.controllerHandle,
										U = this.c.get(B);
									U &&
										(this.g.clear(),
										(this.f = O),
										(U.activeEditingCommentThread = this.f));
								}),
							);
					}
					$registerCommentController(L, D, M, N) {
						const A = `${D}-${N}`;
						this.b.set(L, A);
						const R = new I(this.a, this.j, L, A, D, M, {});
						this.j.registerCommentController(A, R), this.c.set(L, R);
						const O = !!this.n.getViewDescriptorById(h.$$oc);
						O || this.s(O),
							this.w(O),
							this.j.setWorkspaceComments(String(L), []);
					}
					$unregisterCommentController(L) {
						const D = this.b.get(L);
						this.b.delete(L),
							this.c.delete(L),
							typeof D == "string" && this.j.unregisterCommentController(D);
					}
					$updateCommentControllerFeatures(L, D) {
						const M = this.c.get(L);
						M && M.updateFeatures(D);
					}
					$createCommentThread(L, D, M, N, A, R, O, B, U) {
						const z = this.c.get(L);
						if (z) return z.createCommentThread(O.value, D, M, N, A, R, B, U);
					}
					$updateCommentThread(L, D, M, N, A) {
						const R = this.c.get(L);
						if (R) return R.updateCommentThread(D, M, N, A);
					}
					$deleteCommentThread(L, D) {
						const M = this.c.get(L);
						if (M) return M.deleteCommentThread(D);
					}
					$updateCommentingRanges(L, D) {
						const M = this.c.get(L);
						M && M.updateCommentingRanges(D);
					}
					async $revealCommentThread(L, D, M, N) {
						const A = this.c.get(L);
						if (!A) return Promise.resolve();
						const R = A.getAllComments().find(
							(B) => B.commentThreadHandle === D,
						);
						if (!R || !R.isDocumentCommentThread()) return Promise.resolve();
						const O = R.comments?.find((B) => B.uniqueIdInThread === M);
						(0, y.$qpc)(
							this.j,
							this.r,
							this.q,
							R,
							O,
							N.focusReply,
							void 0,
							N.preserveFocus,
						);
					}
					async $hideCommentThread(L, D) {
						const M = this.c.get(L);
						if (!M) return Promise.resolve();
						const N = M.getAllComments().find(
							(A) => A.commentThreadHandle === D,
						);
						if (!N || !N.isDocumentCommentThread()) return Promise.resolve();
						N.collapsibleState = C.CommentThreadCollapsibleState.Collapsed;
					}
					s(L) {
						if (!L) {
							const D = d.$Io
								.as(c.Extensions.ViewContainersRegistry)
								.registerViewContainer(
									{
										id: h.$$oc,
										title: h.$apc,
										ctorDescriptor: new n.$Ji(g.$ZSb, [
											h.$$oc,
											{ mergeViewWithContainerWhenSingleView: !0 },
										]),
										storageId: h.$_oc,
										hideIfEmpty: !0,
										icon: T,
										order: 10,
									},
									c.ViewContainerLocation.Panel,
								);
							d.$Io
								.as(c.Extensions.ViewsRegistry)
								.registerViews(
									[
										{
											id: h.$$oc,
											name: h.$apc,
											canToggleVisibility: !1,
											ctorDescriptor: new n.$Ji(u.$xpc),
											canMoveView: !0,
											containerIcon: T,
											focusCommand: {
												id: "workbench.action.focusCommentsPanel",
											},
										},
									],
									D,
								);
						}
					}
					t() {
						[...this.c.keys()].forEach((L) => {
							const D = this.c.get(L).getAllComments();
							if (D.length) {
								const M = this.y(L);
								this.j.setWorkspaceComments(M, D);
							}
						});
					}
					u() {
						this.h ||
							(this.h = this.m.onDidChangeViewVisibility((L) => {
								L.id === h.$$oc &&
									L.visible &&
									(this.t(), this.h && (this.h.dispose(), (this.h = null)));
							}));
					}
					w(L) {
						L || this.u(),
							this.D(
								this.n.onDidChangeContainer((D) => {
									D.views.find((M) => M.id === h.$$oc) && (this.t(), this.u());
								}),
							),
							this.D(
								this.n.onDidChangeContainerLocation((D) => {
									const M = this.n.getViewContainerByViewId(h.$$oc);
									D.viewContainer.id === M?.id && (this.t(), this.u());
								}),
							);
					}
					y(L) {
						if (!this.b.has(L)) throw new Error("Unknown handler");
						return this.b.get(L);
					}
				};
				(e.$Apc = P),
					(e.$Apc = P =
						Ne(
							[
								(0, m.$tmc)(a.$lbb.MainThreadComments),
								j(1, r.$62b),
								j(2, l.$HMb),
								j(3, c.$K1),
								j(4, v.$Vl),
								j(5, $.$IY),
							],
							P,
						));
			},
		),
		define(
			de[1056],
			he([1, 0, 30, 1701, 5, 50, 11, 49, 21, 32, 35, 25, 239, 53, 146]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Sb = e.$4Sb = e.$3Sb = e.$2Sb = void 0);
				let g = class extends i.$gEb {
					constructor(b, s, l, y, $, v, S, I) {
						super(b, s, $, l),
							(this.b = l),
							(this.c = y),
							(this.f = v),
							(this.g = S),
							(this.j = I);
					}
					create(b) {
						super.create(b),
							(this.a = this.D(this.m(b))),
							this.D(this.a.onTitleAreaUpdate(() => this.R())),
							this.a.create(b);
					}
					setVisible(b) {
						super.setVisible(b), this.a?.setVisible(b);
					}
					layout(b) {
						this.a?.layout(b);
					}
					setBoundarySashes(b) {
						this.a?.setBoundarySashes(b);
					}
					getOptimalWidth() {
						return this.a?.getOptimalWidth() ?? 0;
					}
					openView(b, s) {
						return this.a?.openView(b, s);
					}
					getViewPaneContainer() {
						return this.a;
					}
					getActionsContext() {
						return this.getViewPaneContainer()?.getActionsContext();
					}
					getContextMenuActions() {
						return this.a?.menuActions?.getContextMenuActions() ?? [];
					}
					getMenuIds() {
						const b = [];
						return (
							this.a?.menuActions &&
								(b.push(this.a.menuActions.menuId),
								this.a.isViewMergedWithContainer() &&
									b.push(this.a.panes[0].menuActions.menuId)),
							b
						);
					}
					getActions() {
						const b = [];
						if (
							this.a?.menuActions &&
							(b.push(...this.a.menuActions.getPrimaryActions()),
							this.a.isViewMergedWithContainer())
						) {
							const s = this.a.panes[0];
							s.shouldShowFilterInHeader() && b.push(n.$SMb),
								b.push(...s.menuActions.getPrimaryActions());
						}
						return b;
					}
					getSecondaryActions() {
						if (!this.a?.menuActions) return [];
						const b = this.a.isViewMergedWithContainer()
							? this.a.panes[0].menuActions.getSecondaryActions()
							: [];
						let s = this.a.menuActions.getSecondaryActions();
						const l = s.findIndex(
							(y) => y instanceof C.$1X && y.item.submenu === h.$YSb,
						);
						if (l !== -1) {
							const y = s[l];
							y.actions.some(({ enabled: $ }) => $)
								? s.length === 1 && b.length === 0
									? (s = y.actions.slice())
									: l !== 0 && (s = [y, ...s.slice(0, l), ...s.slice(l + 1)])
								: s.splice(l, 1);
						}
						return s.length && b.length
							? [...s, new E.$tj(), ...b]
							: s.length
								? s
								: b;
					}
					getActionViewItem(b, s) {
						return this.a?.getActionViewItem(b, s);
					}
					getTitle() {
						return this.a?.getTitle() ?? "";
					}
					focus() {
						super.focus(), this.a?.focus();
					}
				};
				(e.$2Sb = g),
					(e.$2Sb = g =
						Ne(
							[
								j(1, r.$km),
								j(2, m.$lq),
								j(3, w.$Li),
								j(4, u.$iP),
								j(5, d.$Xxb),
								j(6, c.$q2),
								j(7, a.$Vi),
							],
							g,
						));
				class p extends i.$hEb {
					static create(b, s, l, y, $, v, S) {
						return new p(b, s, l, y, $, v, S);
					}
					constructor(b, s, l, y, $, v, S) {
						super(b, s, l, y, $, v), (this.iconUrl = S);
					}
				}
				(e.$3Sb = p),
					(e.$4Sb = {
						Viewlets: "workbench.contributions.viewlets",
						Panels: "workbench.contributions.panels",
						Auxiliary: "workbench.contributions.auxiliary",
					});
				class o extends i.$iEb {
					registerPaneComposite(b) {
						super.f(b);
					}
					deregisterPaneComposite(b) {
						super.g(b);
					}
					getPaneComposite(b) {
						return this.getComposite(b);
					}
					getPaneComposites() {
						return this.h();
					}
				}
				(e.$5Sb = o),
					t.$Io.add(e.$4Sb.Viewlets, new o()),
					t.$Io.add(e.$4Sb.Panels, new o()),
					t.$Io.add(e.$4Sb.Auxiliary, new o());
			},
		),
		define(
			de[1350],
			he([
				1, 0, 6, 5, 1056, 60, 3, 96, 3540, 1937, 7, 30, 40, 21, 49, 39, 35, 8,
				53, 4, 362, 123, 967, 11, 105, 159, 168, 50, 239, 92, 72, 173, 2349,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ouc = e.CompositeBarPosition = void 0);
				var N;
				(function (R) {
					(R[(R.TOP = 0)] = "TOP"),
						(R[(R.TITLE = 1)] = "TITLE"),
						(R[(R.BOTTOM = 2)] = "BOTTOM");
				})(N || (e.CompositeBarPosition = N = {}));
				let A = class extends m.$Kuc {
					static {
						M = this;
					}
					static {
						this.Ub = 50;
					}
					get snap() {
						return (
							this.M.isVisible(this.partId) ||
							!!this.$b.value?.getVisiblePaneCompositeIds().length
						);
					}
					get onDidPaneCompositeOpen() {
						return t.Event.map(this.b.event, (O) => O.composite);
					}
					constructor(
						O,
						B,
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
					) {
						let Q = E.ViewContainerLocation.Sidebar,
							Z = w.$4Sb.Viewlets,
							se = $.$XX.SidebarTitle;
						O === d.Parts.PANEL_PART
							? ((Q = E.ViewContainerLocation.Panel),
								(Z = w.$4Sb.Panels),
								(se = $.$XX.PanelTitle))
							: O === d.Parts.AUXILIARYBAR_PART &&
								((Q = E.ViewContainerLocation.AuxiliaryBar),
								(Z = w.$4Sb.Auxiliary),
								(se = $.$XX.AuxiliaryBarTitle)),
							super(
								V,
								G,
								K,
								J,
								W,
								X,
								Y,
								ie,
								a.$Io.as(Z),
								U,
								ne.getDefaultViewContainer(Q)?.id || "",
								x,
								H,
								q,
								O,
								B,
							),
							(this.partId = O),
							(this.gc = z),
							(this.hc = F),
							(this.ic = ne),
							(this.jc = ee),
							(this.kc = _),
							(this.lc = te),
							(this.onDidPaneCompositeClose = this.y.event),
							(this.Yb = this.D(new C.$Zc())),
							(this.$b = this.D(new C.$2c())),
							(this.ac = void 0),
							(this.ec = !1),
							(this.Vb = Q),
							(this.dc = this.D(
								this.ub.createInstance(y.$MMb, se, void 0, void 0),
							)),
							this.mc();
					}
					mc() {
						this.D(this.onDidPaneCompositeOpen((O) => this.nc(O))),
							this.D(this.onDidPaneCompositeClose(this.oc, this)),
							this.D(this.dc.onDidChange(() => this.Fc())),
							this.D(
								this.vb.onDidDeregister((O) => {
									const B = this.ic
										.getViewContainersByLocation(this.Vb)
										.filter(
											(U) =>
												this.ic.getViewContainerModel(U).activeViewDescriptors
													.length > 0,
										);
									if (B.length) {
										if (this.Ib()?.getId() === O.id) {
											const U = this.ic.getDefaultViewContainer(this.Vb)?.id,
												z = B.filter((F) => F.id === U)[0] || B[0];
											this.Bc(z.id);
										}
									} else this.M.setPartHidden(!0, this.partId);
									this.Tb(O.id);
								}),
							),
							this.D(
								this.kc.onDidRegisterExtensions(() => {
									this.Dc();
								}),
							);
					}
					nc(O) {
						this.gc.set(O.getId());
					}
					oc(O) {
						const B = O.getId();
						this.gc.get() === B && this.gc.reset();
					}
					Eb(O) {
						super.Eb(O), this.Dc(), this.Ec();
					}
					Kb() {
						const O = super.Kb();
						return this.Dc(), this.Ec(), O;
					}
					create(O) {
						(this.element = O),
							this.element.classList.add("pane-composite-part"),
							super.create(O);
						const B = this.R();
						B && this.rc(B), this.uc();
						const U = this.D((0, u.$dhb)(O));
						this.D(U.onDidFocus(() => this.hc.set(!0))),
							this.D(U.onDidBlur(() => this.hc.set(!1)));
					}
					rc(O) {
						(this.bc = document.createElement("div")),
							this.bc.classList.add("empty-pane-message-area");
						const B = document.createElement("div");
						B.classList.add("empty-pane-message"),
							(B.innerText = (0, b.localize)(3638, null)),
							this.bc.appendChild(B),
							O.appendChild(this.bc),
							this.D(
								s.$TSb.INSTANCE.registerTarget(this.bc, {
									onDragOver: (U) => {
										if ((u.$ahb.stop(U.eventData, !0), this.$b.value)) {
											const z = this.$b.value.dndHandler.onDragEnter(
												U.dragAndDropData,
												void 0,
												U.eventData,
											);
											(0, s.$USb)(U.eventData.dataTransfer, "move", z);
										}
									},
									onDragEnter: (U) => {
										if ((u.$ahb.stop(U.eventData, !0), this.$b.value)) {
											const z = this.$b.value.dndHandler.onDragEnter(
												U.dragAndDropData,
												void 0,
												U.eventData,
											);
											this.bc.style.backgroundColor =
												(z && this.h.getColor(l.$kFb)?.toString()) || "";
										}
									},
									onDragLeave: (U) => {
										u.$ahb.stop(U.eventData, !0),
											(this.bc.style.backgroundColor = "");
									},
									onDragEnd: (U) => {
										u.$ahb.stop(U.eventData, !0),
											(this.bc.style.backgroundColor = "");
									},
									onDrop: (U) => {
										u.$ahb.stop(U.eventData, !0),
											(this.bc.style.backgroundColor = ""),
											this.$b.value &&
												this.$b.value.dndHandler.drop(
													U.dragAndDropData,
													void 0,
													U.eventData,
												);
									},
								}),
							);
					}
					O(O) {
						const B = super.O(O);
						this.D(
							(0, u.$0fb)(B, u.$$gb.CONTEXT_MENU, (z) => {
								this.Hc(new I.$2fb((0, u.getWindow)(B), z));
							}),
						),
							this.D(S.$Qhb.addTarget(B)),
							this.D(
								(0, u.$0fb)(B, S.EventType.Contextmenu, (z) => {
									this.Hc(new I.$2fb((0, u.getWindow)(B), z));
								}),
							);
						const U = B.appendChild((0, u.$)(".global-actions"));
						return (
							(this.cc = this.D(
								this.ub.createInstance(D.$Syb, U, {
									actionViewItemProvider: (z, F) => this.Pb(z, F),
									orientation: v.ActionsOrientation.HORIZONTAL,
									getKeyBinding: (z) => this.sb.lookupKeybinding(z.id),
									anchorAlignmentProvider: () => this.Sb(),
									toggleMenuTitle: (0, b.localize)(3639, null),
									hoverDelegate: this.db,
									hiddenItemStrategy: D.HiddenItemStrategy.NoHide,
								}),
							)),
							this.Fc(),
							B
						);
					}
					Mb(O) {
						this.Wb = O;
						const B = super.Mb(O);
						this.cb.draggable = !0;
						const U = () => ({
							type: "composite",
							id: this.getActivePaneComposite().getId(),
						});
						return this.D(s.$TSb.INSTANCE.registerDraggable(this.cb, U, {})), B;
					}
					uc() {
						const O = this.ac !== void 0,
							B = this.Lc(),
							U = this.ac,
							z = B ? this.Nc() : void 0;
						if (U === z) return;
						if (O) {
							const x = U === N.TITLE ? this.Wb : this.Xb;
							if (!this.Zb || !this.$b.value || !x)
								throw new Error(
									"Composite bar containers should exist when removing the previous composite bar",
								);
							this.Zb.remove(),
								(this.Zb = void 0),
								(this.$b.value = void 0),
								x.classList.remove("has-composite-bar"),
								U === N.TOP ? this.yc(!0) : U === N.BOTTOM && this.yc(!1);
						}
						let F;
						switch (z) {
							case N.TOP:
								F = this.Nb();
								break;
							case N.TITLE:
								F = this.Wb;
								break;
							case N.BOTTOM:
								F = this.Ob();
								break;
						}
						if (B) {
							if (this.Zb || this.$b.value || !F)
								throw new Error(
									"Invalid composite bar state when creating the new composite bar",
								);
							F.classList.add("has-composite-bar"),
								(this.Zb = (0, u.$ghb)(
									F,
									(0, u.$)(".composite-bar-container"),
								)),
								(this.$b.value = this.zc()),
								this.$b.value.create(this.Zb),
								z === N.TOP ? this.S(F) : z === N.BOTTOM && this.U(F);
						}
						this.ac = z;
					}
					Nb() {
						const O = super.Nb();
						return this.xc(O);
					}
					Ob() {
						const O = super.Ob();
						return this.xc(O);
					}
					xc(O) {
						if (this.Xb)
							throw new Error("Header or Footer composite bar already exists");
						return (
							(this.Xb = O),
							this.Yb.add(
								(0, u.$0fb)(O, u.$$gb.CONTEXT_MENU, (B) => {
									this.Ic(new I.$2fb((0, u.getWindow)(O), B));
								}),
							),
							this.Yb.add(S.$Qhb.addTarget(O)),
							this.Yb.add(
								(0, u.$0fb)(O, S.EventType.Contextmenu, (B) => {
									this.Ic(new I.$2fb((0, u.getWindow)(O), B));
								}),
							),
							O
						);
					}
					yc(O) {
						(this.Xb = void 0), this.Yb.clear(), O ? this.W() : this.X();
					}
					zc() {
						return this.ub.createInstance(r.$Nuc, this.Mc(), this.partId, this);
					}
					Fb(O) {
						super.Fb(O), this.Dc();
					}
					async openPaneComposite(O, B) {
						if (typeof O == "string" && this.getPaneComposite(O))
							return this.Bc(O, B);
						if (
							(await this.kc.whenInstalledExtensionsRegistered(),
							typeof O == "string" && this.getPaneComposite(O))
						)
							return this.Bc(O, B);
					}
					Bc(O, B) {
						if (!this.ec) {
							if (!this.M.isVisible(this.partId))
								try {
									(this.ec = !0), this.M.setPartHidden(!1, this.partId);
								} finally {
									this.ec = !1;
								}
							return this.Bb(O, B);
						}
					}
					getPaneComposite(O) {
						return this.vb.getPaneComposite(O);
					}
					getPaneComposites() {
						return this.vb
							.getPaneComposites()
							.sort((O, B) =>
								typeof O.order != "number"
									? 1
									: typeof B.order != "number"
										? -1
										: O.order - B.order,
							);
					}
					getPinnedPaneCompositeIds() {
						return this.$b.value?.getPinnedPaneCompositeIds() ?? [];
					}
					getVisiblePaneCompositeIds() {
						return this.$b.value?.getVisiblePaneCompositeIds() ?? [];
					}
					getActivePaneComposite() {
						return this.Ib();
					}
					getLastActivePaneCompositeId() {
						return this.Jb();
					}
					hideActivePaneComposite() {
						this.M.isVisible(this.partId) &&
							this.M.setPartHidden(!0, this.partId),
							this.Kb();
					}
					Cc() {
						this.$b.value?.focus();
					}
					layout(O, B, U, z) {
						this.M.isVisible(this.partId) &&
							((this.fc = new u.$pgb(O, B)),
							super.layout(this.fc.width, this.fc.height, U, z),
							this.Dc(),
							this.Ec());
					}
					Dc() {
						if (this.fc && this.dimension && this.$b.value) {
							const O = this.ac === N.TITLE ? 16 : 8,
								B = this.partId === d.Parts.PANEL_PART ? 0 : 1;
							let U = this.fc.width - O - B;
							(U = Math.max(M.Ub, U - this.Gc())),
								this.$b.value.layout(U, this.dimension.height);
						}
					}
					Ec() {
						const O = !this.Ib();
						this.bc?.classList.toggle("visible", O),
							O && this.jb?.updateTitle("", "");
					}
					Fc() {
						const O = this.dc.getPrimaryActions(),
							B = this.dc.getSecondaryActions();
						this.cc?.setActions((0, v.$fib)(O), (0, v.$fib)(B));
					}
					Gc() {
						if (
							!this.bb ||
							this.ac !== N.TITLE ||
							!this.getActivePaneComposite()
						)
							return 0;
						const B = this.bb.getItemsWidth() + this.bb.getItemsLength() * 4,
							U = this.cc
								? this.cc.getItemsWidth() + this.cc.getItemsLength() * 4
								: 0;
						return B + U + 5;
					}
					Hc(O) {
						if (this.Lc() && this.Nc() === N.TITLE) return this.Jc(O);
						{
							const B = this.getActivePaneComposite(),
								U = B ? B.getContextMenuActions() : [];
							U.length &&
								this.rb.showContextMenu({
									getAnchor: () => O,
									getActions: () => U,
									getActionViewItem: (z, F) => this.Pb(z, F),
									actionRunner: B.getActionRunner(),
									skipTelemetry: !0,
								});
						}
					}
					Ic(O) {
						return this.Jc(O);
					}
					Jc(O) {
						if (this.$b.value) {
							const B = [...this.$b.value.getContextMenuActions()];
							B.length &&
								this.rb.showContextMenu({
									getAnchor: () => O,
									getActions: () => B,
									skipTelemetry: !0,
								});
						}
					}
					Kc() {
						const O = this.getActivePaneComposite()?.getViewPaneContainer();
						if (O) {
							const B = new C.$Zc(),
								U = [],
								z = B.add(this.jc.createScoped(this.element));
							z.createKey("viewContainer", O.viewContainer.id);
							const F = this.lc.getMenuActions(P.$YSb, z, {
								shouldForwardArgs: !0,
								renderShortTitle: !0,
							});
							return (
								(0, k.$Kyb)(F, { primary: U, secondary: [] }, () => !0),
								B.dispose(),
								U.length > 1 && U.some((x) => x.enabled)
									? new T.$uj("views", (0, b.localize)(3640, null), U)
									: void 0
							);
						}
					}
				};
				(e.$Ouc = A),
					(e.$Ouc =
						A =
						M =
							Ne(
								[
									j(8, h.$4N),
									j(9, c.$lq),
									j(10, n.$Xxb),
									j(11, d.$mEb),
									j(12, g.$uZ),
									j(13, L.$Uyb),
									j(14, i.$Li),
									j(15, p.$iP),
									j(16, E.$K1),
									j(17, o.$6j),
									j(18, f.$q2),
									j(19, $.$YX),
								],
								A,
							));
			},
		),
		define(
			de[1938],
			he([
				1, 0, 4, 8, 49, 5, 39, 40, 21, 51, 35, 100, 123, 60, 53, 96, 160, 50,
				1307, 28, 279, 716, 31, 1350, 105, 11, 10, 92, 7, 173, 198, 967, 72,
				2336,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
			) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Puc = void 0);
				let A = class extends $.$Ouc {
					static {
						N = this;
					}
					static {
						this.activePanelSettingsKey =
							"workbench.auxiliarybar.activepanelid";
					}
					static {
						this.pinnedPanelsKey = "workbench.auxiliarybar.pinnedPanels";
					}
					static {
						this.placeholdeViewContainersKey =
							"workbench.auxiliarybar.placeholderPanels";
					}
					static {
						this.viewContainersWorkspaceStateKey =
							"workbench.auxiliarybar.viewContainersWorkspaceState";
					}
					get preferredHeight() {
						return this.M.mainContainerDimension.height * 0.4;
					}
					get preferredWidth() {
						const O = this.getActivePaneComposite();
						if (!O) return;
						const B = O.getOptimalWidth();
						if (typeof B == "number") return Math.max(B, 300);
					}
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X) {
						super(
							g.Parts.AUXILIARYBAR_PART,
							{
								hasTitle: !0,
								borderWidth: () => (this.w(h.$yGb) || this.w(r.$OP) ? 1 : 0),
							},
							N.activePanelSettingsKey,
							a.$qQb.bindTo(G),
							a.$rQb.bindTo(G),
							"auxiliarybar",
							"auxiliarybar",
							void 0,
							O,
							B,
							U,
							z,
							F,
							x,
							H,
							q,
							V,
							G,
							K,
							W,
						),
							(this.Oc = J),
							(this.Pc = X),
							(this.minimumWidth = 170),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 0),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.priority = s.LayoutPriority.Low),
							this.D(
								X.onDidChangeConfiguration((Y) => {
									Y.affectsConfiguration(
										g.LayoutSettings.ACTIVITY_BAR_LOCATION,
									) && this.Qc();
								}),
							);
					}
					Qc() {
						this.uc();
						const O = this.Ib()?.getId();
						O && this.Fb(O);
					}
					updateStyles() {
						super.updateStyles();
						const O = (0, b.$wg)(this.getContainer());
						O.style.backgroundColor = this.w(h.$wGb) || "";
						const B = this.w(h.$yGb) || this.w(r.$OP),
							U = this.M.getSideBarPosition() === g.Position.RIGHT;
						(O.style.color = this.w(h.$xGb) || ""),
							(O.style.borderLeftColor = B ?? ""),
							(O.style.borderRightColor = B ?? ""),
							(O.style.borderLeftStyle = B && !U ? "solid" : "none"),
							(O.style.borderRightStyle = B && U ? "solid" : "none"),
							(O.style.borderLeftWidth = B && !U ? "1px" : "0px"),
							(O.style.borderRightWidth = B && U ? "1px" : "0px");
					}
					Mc() {
						const O = this;
						return {
							partContainerClass: "auxiliarybar",
							pinnedViewContainersKey: N.pinnedPanelsKey,
							placeholderViewContainersKey: N.placeholdeViewContainersKey,
							viewContainersWorkspaceStateKey:
								N.viewContainersWorkspaceStateKey,
							icon: !1,
							orientation: v.ActionsOrientation.HORIZONTAL,
							recomputeSizes: !0,
							activityHoverOptions: {
								position: () =>
									this.Nc() === $.CompositeBarPosition.BOTTOM
										? p.HoverPosition.ABOVE
										: p.HoverPosition.BELOW,
							},
							fillExtraContextMenuActions: (B) => this.Sc(B),
							compositeSize: 0,
							iconSize: 16,
							get overflowActionSize() {
								return O.Nc() === $.CompositeBarPosition.TITLE ? 40 : 30;
							},
							colors: (B) => ({
								activeBackgroundColor: B.getColor(h.$wGb),
								inactiveBackgroundColor: B.getColor(h.$wGb),
								get activeBorderBottomColor() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$uFb)
										: B.getColor(h.$fGb);
								},
								get activeForegroundColor() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$sFb)
										: B.getColor(h.$eGb);
								},
								get inactiveForegroundColor() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$tFb)
										: B.getColor(h.$hGb);
								},
								badgeBackground: B.getColor(h.$cGb),
								badgeForeground: B.getColor(h.$dGb),
								get dragAndDropBorder() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$wFb)
										: B.getColor(h.$iGb);
								},
							}),
							compact: !0,
						};
					}
					Sc(O) {
						const B = this.M.getSideBarPosition() === g.Position.LEFT,
							U = this.Kc();
						U && (O.push(new o.$tj()), O.push(U));
						const z = this.lc.getMenuActions(
								S.$XX.ActivityBarPositionMenu,
								this.jc,
								{ shouldForwardArgs: !0, renderShortTitle: !0 },
							),
							F = [];
						(0, T.$Jyb)(z, { primary: [], secondary: F }),
							O.push(
								new o.$tj(),
								new o.$uj(
									"workbench.action.panel.position",
									(0, t.localize)(3040, null),
									F,
								),
								(0, o.$wj)({
									id: l.$T5b.ID,
									label: B
										? (0, t.localize)(3041, null)
										: (0, t.localize)(3042, null),
									run: () => this.Oc.executeCommand(l.$T5b.ID),
								}),
								(0, o.$wj)({
									id: f.$O5b.ID,
									label: (0, t.localize)(3043, null),
									run: () => this.Oc.executeCommand(f.$O5b.ID),
								}),
							);
					}
					Lc() {
						return (
							this.Pc.getValue(g.LayoutSettings.ACTIVITY_BAR_LOCATION) !==
							g.ActivityBarPosition.HIDDEN
						);
					}
					Nc() {
						switch (this.Pc.getValue(g.LayoutSettings.ACTIVITY_BAR_LOCATION)) {
							case g.ActivityBarPosition.TOP:
								return $.CompositeBarPosition.TOP;
							case g.ActivityBarPosition.BOTTOM:
								return $.CompositeBarPosition.BOTTOM;
							case g.ActivityBarPosition.HIDDEN:
								return $.CompositeBarPosition.TITLE;
							case g.ActivityBarPosition.DEFAULT:
								return $.CompositeBarPosition.TITLE;
							default:
								return $.CompositeBarPosition.TITLE;
						}
					}
					Nb() {
						const O = super.Nb(),
							B = (0, P.$)(".auxiliary-bar-global-header"),
							U = this.Yb.add(
								this.ub.createInstance(
									D.$MMb,
									S.$XX.AuxiliaryBarHeader,
									void 0,
									void 0,
								),
							),
							z = this.Yb.add(
								this.ub.createInstance(k.$Syb, B, {
									actionViewItemProvider: (F, x) => this.Wc(F, x),
									orientation: v.ActionsOrientation.HORIZONTAL,
									hiddenItemStrategy: k.HiddenItemStrategy.NoHide,
									getKeyBinding: (F) => this.sb.lookupKeybinding(F.id),
								}),
							);
						return (
							z.setActions((0, v.$fib)(U.getPrimaryActions())),
							this.Yb.add(
								U.onDidChange(() =>
									z.setActions((0, v.$fib)(U.getPrimaryActions())),
								),
							),
							O.appendChild(B),
							O
						);
					}
					Wc(O, B) {
						if (O.id === f.$O5b.ID)
							return this.ub.createInstance(L.$_ib, void 0, O, B);
					}
					toJSON() {
						return { type: g.Parts.AUXILIARYBAR_PART };
					}
				};
				(e.$Puc = A),
					(e.$Puc =
						A =
						N =
							Ne(
								[
									j(0, d.$4N),
									j(1, m.$lq),
									j(2, w.$Xxb),
									j(3, g.$mEb),
									j(4, C.$uZ),
									j(5, M.$Uyb),
									j(6, E.$Li),
									j(7, u.$iP),
									j(8, c.$K1),
									j(9, i.$6j),
									j(10, n.$q2),
									j(11, y.$ek),
									j(12, S.$YX),
									j(13, I.$gj),
								],
								A,
							));
			},
		),
		define(
			de[1939],
			he([
				1, 0, 4, 50, 105, 100, 96, 21, 49, 39, 5, 1326, 35, 123, 51, 40, 7, 8,
				28, 53, 60, 160, 11, 1350, 31, 92, 72, 1517,
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
				l,
				y,
				$,
				v,
				S,
				I,
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Quc = void 0);
				let P = class extends $.$Ouc {
					static {
						T = this;
					}
					get preferredHeight() {
						return this.M.mainContainerDimension.height * 0.4;
					}
					get preferredWidth() {
						const L = this.getActivePaneComposite();
						if (!L) return;
						const D = L.getOptimalWidth();
						if (typeof D == "number") return Math.max(D, 300);
					}
					static {
						this.activePanelSettingsKey = "workbench.panelpart.activepanelid";
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F, x, H) {
						super(
							C.Parts.PANEL_PART,
							{ hasTitle: !0 },
							T.activePanelSettingsKey,
							E.$tQb.bindTo(z),
							E.$uQb.bindTo(z),
							"panel",
							"panel",
							void 0,
							L,
							D,
							M,
							N,
							A,
							R,
							O,
							B,
							U,
							z,
							F,
							H,
						),
							(this.Oc = x),
							(this.minimumWidth = 300),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 77),
							(this.maximumHeight = Number.POSITIVE_INFINITY);
					}
					updateStyles() {
						super.updateStyles();
						const L = (0, f.$wg)(this.getContainer());
						L.style.backgroundColor = this.w(c.$qFb) || "";
						const D = this.w(c.$rFb) || this.w(n.$OP) || "";
						(L.style.borderLeftColor = D),
							(L.style.borderRightColor = D),
							(L.style.borderBottomColor = D);
						const M = this.P();
						M &&
							(M.style.borderTopColor = this.w(c.$rFb) || this.w(n.$OP) || "");
					}
					Mc() {
						return {
							partContainerClass: "panel",
							pinnedViewContainersKey: "workbench.panel.pinnedPanels",
							placeholderViewContainersKey: "workbench.panel.placeholderPanels",
							viewContainersWorkspaceStateKey:
								"workbench.panel.viewContainersWorkspaceState",
							icon: !1,
							orientation: w.ActionsOrientation.HORIZONTAL,
							recomputeSizes: !0,
							activityHoverOptions: {
								position: () =>
									this.M.getPanelPosition() === C.Position.BOTTOM &&
									!this.M.isPanelMaximized()
										? l.HoverPosition.ABOVE
										: l.HoverPosition.BELOW,
							},
							fillExtraContextMenuActions: (L) => this.Qc(L),
							compositeSize: 0,
							iconSize: 16,
							overflowActionSize: 44,
							colors: (L) => ({
								activeBackgroundColor: L.getColor(c.$qFb),
								inactiveBackgroundColor: L.getColor(c.$qFb),
								activeBorderBottomColor: L.getColor(c.$uFb),
								activeForegroundColor: L.getColor(c.$sFb),
								inactiveForegroundColor: L.getColor(c.$tFb),
								badgeBackground: L.getColor(n.$1P),
								badgeForeground: L.getColor(n.$2P),
								dragAndDropBorder: L.getColor(c.$wFb),
							}),
						};
					}
					Qc(L) {
						const D = this.lc.getMenuActions(y.$XX.PanelPositionMenu, this.jc, {
								shouldForwardArgs: !0,
							}),
							M = this.lc.getMenuActions(y.$XX.PanelAlignmentMenu, this.jc, {
								shouldForwardArgs: !0,
							}),
							N = [],
							A = [];
						(0, S.$Jyb)(D, { primary: [], secondary: N }),
							(0, S.$Jyb)(M, { primary: [], secondary: A }),
							L.push(
								new i.$tj(),
								new i.$uj(
									"workbench.action.panel.position",
									(0, t.localize)(3682, null),
									N,
								),
								new i.$uj(
									"workbench.action.panel.align",
									(0, t.localize)(3683, null),
									A,
								),
								(0, i.$wj)({
									id: a.$P5b.ID,
									label: (0, t.localize)(3684, null),
									run: () => this.Oc.executeCommand(a.$P5b.ID),
								}),
							);
					}
					layout(L, D, M, N) {
						let A;
						switch (this.M.getPanelPosition()) {
							case C.Position.RIGHT:
								A = new p.$pgb(L - 1, D);
								break;
							case C.Position.TOP:
								A = new p.$pgb(L, D - 1);
								break;
							default:
								A = new p.$pgb(L, D);
								break;
						}
						super.layout(A.width, A.height, M, N);
					}
					Lc() {
						return !0;
					}
					Nc() {
						return $.CompositeBarPosition.TITLE;
					}
					toJSON() {
						return { type: C.Parts.PANEL_PART };
					}
				};
				(e.$Quc = P),
					(e.$Quc =
						P =
						T =
							Ne(
								[
									j(0, g.$4N),
									j(1, d.$lq),
									j(2, m.$Xxb),
									j(3, C.$mEb),
									j(4, r.$uZ),
									j(5, I.$Uyb),
									j(6, u.$Li),
									j(7, h.$iP),
									j(8, s.$K1),
									j(9, o.$6j),
									j(10, b.$q2),
									j(11, v.$ek),
									j(12, y.$YX),
								],
								P,
							));
			},
		),
		define(
			de[1940],
			he([
				1, 0, 96, 100, 21, 49, 39, 5, 35, 51, 123, 40, 8, 276, 53, 759, 28, 60,
				1350, 4013, 105, 160, 10, 11, 50, 716, 72, 57, 75, 4, 1140, 1854,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
			) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uuc = void 0);
				let D = class extends f.$Ouc {
					static {
						L = this;
					}
					static {
						this.activeViewletSettingsKey = "workbench.sidebar.activeviewletid";
					}
					get snap() {
						return !0;
					}
					get preferredWidth() {
						const N = this.getActivePaneComposite();
						if (!N) return;
						const A = N.getOptimalWidth();
						if (typeof A == "number") return Math.max(A, 300);
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(
							t.Parts.SIDEBAR_PART,
							{
								hasTitle: !0,
								borderWidth: () => (this.w(u.$yGb) || this.w(r.$OP) ? 1 : 0),
							},
							L.activeViewletSettingsKey,
							i.$iQb.bindTo(H),
							i.$hQb.bindTo(H),
							"sideBar",
							"viewlet",
							u.$AGb,
							N,
							A,
							R,
							O,
							B,
							U,
							z,
							F,
							x,
							H,
							q,
							G,
						),
							(this.Pc = V),
							(this.minimumWidth = 170),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 0),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.priority = g.LayoutPriority.Low),
							(this.Oc = this.D(this.ub.createInstance(b.$Suc, this))),
							this.Xc(),
							this.D(
								V.onDidChangeConfiguration((K) => {
									K.affectsConfiguration(
										t.LayoutSettings.ACTIVITY_BAR_LOCATION,
									) && this.Qc();
								}),
							),
							this.Zc();
					}
					Qc() {
						this.Oc.hide(), this.uc();
						const N = this.Ib()?.getId();
						N && this.Fb(N), this.Vc() && this.Oc.show(), this.Xc();
					}
					updateStyles() {
						super.updateStyles();
						const N = (0, p.$wg)(this.getContainer());
						(N.style.backgroundColor = this.w(u.$wGb) || ""),
							(N.style.color = this.w(u.$xGb) || "");
						const A = this.w(u.$yGb) || this.w(r.$OP),
							R = this.M.getSideBarPosition() === t.Position.LEFT;
						(N.style.borderRightWidth = A && R ? "1px" : ""),
							(N.style.borderRightStyle = A && R ? "solid" : ""),
							(N.style.borderRightColor = (R && A) || ""),
							(N.style.borderLeftWidth = A && !R ? "1px" : ""),
							(N.style.borderLeftStyle = A && !R ? "solid" : ""),
							(N.style.borderLeftColor = R ? "" : A || ""),
							(N.style.outlineColor = this.w(u.$BGb) ?? "");
					}
					layout(N, A, R, O) {
						this.M.isVisible(t.Parts.SIDEBAR_PART) && super.layout(N, A, R, O);
					}
					Sb() {
						return this.M.getSideBarPosition() === t.Position.LEFT
							? c.AnchorAlignment.LEFT
							: c.AnchorAlignment.RIGHT;
					}
					zc() {
						return this.ub.createInstance(
							b.$Tuc,
							this.Mc(),
							this.partId,
							this,
							!1,
						);
					}
					Mc() {
						return {
							partContainerClass: "sidebar",
							pinnedViewContainersKey: b.$Suc.pinnedViewContainersKey,
							placeholderViewContainersKey: b.$Suc.placeholderViewContainersKey,
							viewContainersWorkspaceStateKey:
								b.$Suc.viewContainersWorkspaceStateKey,
							icon: !0,
							orientation: s.ActionsOrientation.HORIZONTAL,
							recomputeSizes: !0,
							activityHoverOptions: {
								position: () =>
									this.Nc() === f.CompositeBarPosition.BOTTOM
										? l.HoverPosition.ABOVE
										: l.HoverPosition.BELOW,
							},
							fillExtraContextMenuActions: (N) => {
								const A = this.Kc();
								A && (N.push(new v.$tj()), N.push(A));
							},
							compositeSize: 0,
							iconSize: 16,
							overflowActionSize: 30,
							colors: (N) => ({
								activeBackgroundColor: N.getColor(u.$wGb),
								inactiveBackgroundColor: N.getColor(u.$wGb),
								activeBorderBottomColor: N.getColor(u.$fGb),
								activeForegroundColor: N.getColor(u.$eGb),
								inactiveForegroundColor: N.getColor(u.$hGb),
								badgeBackground: N.getColor(u.$cGb),
								badgeForeground: N.getColor(u.$dGb),
								dragAndDropBorder: N.getColor(u.$iGb),
							}),
							compact: !0,
						};
					}
					Lc() {
						const N = this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION);
						return (
							N === t.ActivityBarPosition.TOP ||
							N === t.ActivityBarPosition.BOTTOM
						);
					}
					Vc() {
						return this.Lc()
							? !1
							: this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION) !==
									t.ActivityBarPosition.HIDDEN;
					}
					Nc() {
						switch (this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION)) {
							case t.ActivityBarPosition.TOP:
								return f.CompositeBarPosition.TOP;
							case t.ActivityBarPosition.BOTTOM:
								return f.CompositeBarPosition.BOTTOM;
							case t.ActivityBarPosition.HIDDEN:
							case t.ActivityBarPosition.DEFAULT:
							default:
								return f.CompositeBarPosition.TITLE;
						}
					}
					Xc() {
						const N = this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION);
						N !== t.ActivityBarPosition.HIDDEN &&
							this.qb.store(
								t.LayoutSettings.ACTIVITY_BAR_LOCATION,
								N,
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							);
					}
					Yc() {
						switch (
							this.qb.get(
								t.LayoutSettings.ACTIVITY_BAR_LOCATION,
								w.StorageScope.PROFILE,
							)
						) {
							case t.ActivityBarPosition.TOP:
								return t.ActivityBarPosition.TOP;
							case t.ActivityBarPosition.BOTTOM:
								return t.ActivityBarPosition.BOTTOM;
							default:
								return t.ActivityBarPosition.DEFAULT;
						}
					}
					getPinnedPaneCompositeIds() {
						return this.Lc()
							? super.getPinnedPaneCompositeIds()
							: this.Oc.getPinnedPaneCompositeIds();
					}
					getVisiblePaneCompositeIds() {
						return this.Lc()
							? super.getVisiblePaneCompositeIds()
							: this.Oc.getVisiblePaneCompositeIds();
					}
					async focusActivityBar() {
						this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION) ===
							t.ActivityBarPosition.HIDDEN &&
							(await this.Pc.updateValue(
								t.LayoutSettings.ACTIVITY_BAR_LOCATION,
								this.Yc(),
							),
							this.Qc()),
							this.Lc()
								? this.Cc()
								: (this.M.isVisible(t.Parts.ACTIVITYBAR_PART) ||
										this.M.setPartHidden(!1, t.Parts.ACTIVITYBAR_PART),
									this.Oc.show(!0));
					}
					Zc() {
						const N = this;
						this.D(
							(0, $.$4X)(
								class extends $.$3X {
									constructor() {
										super({
											id: S.$S5b,
											title: (0, k.localize2)(
												3686,
												"Toggle Activity Bar Visibility",
											),
										});
									}
									run(A) {
										const R = A.get(t.$mEb);
										try {
											if (!R.getContainer(P.$Bfb, t.Parts.ACTIVITYBAR_PART))
												throw new Error();
										} catch {
											return (
												N.Pc.updateValue(
													t.LayoutSettings.ACTIVITY_BAR_LOCATION,
													void 0,
												),
												A.get(T.$GO).confirm({
													message:
														"Please quit and reopen for the activity bar to be displayed vertically.",
													type: "info",
												}),
												Promise.resolve()
											);
										}
										const O =
											N.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION) ===
											t.ActivityBarPosition.HIDDEN
												? N.Yc()
												: t.ActivityBarPosition.HIDDEN;
										return N.Pc.updateValue(
											t.LayoutSettings.ACTIVITY_BAR_LOCATION,
											O,
										);
									}
								},
							),
						);
					}
					toJSON() {
						return { type: t.Parts.SIDEBAR_PART };
					}
				};
				(e.$Uuc = D),
					(e.$Uuc =
						D =
						L =
							Ne(
								[
									j(0, a.$4N),
									j(1, w.$lq),
									j(2, E.$Xxb),
									j(3, t.$mEb),
									j(4, C.$uZ),
									j(5, I.$Uyb),
									j(6, d.$Li),
									j(7, m.$iP),
									j(8, o.$K1),
									j(9, h.$6j),
									j(10, n.$q2),
									j(11, y.$gj),
									j(12, $.$YX),
								],
								D,
							));
			},
		),
		define(
			de[4016],
			he([
				1, 0, 3, 6, 7, 139, 335, 12, 44, 1940, 1939, 96, 25, 21, 10, 713, 52,
				253, 87, 286, 18, 66, 759, 550, 166, 22, 56, 24, 28, 40, 35, 123, 9, 60,
				296, 240, 53, 34, 15, 823, 142, 1938, 32, 58, 703, 75,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n3c = e.$m3c = void 0);
				var K;
				(function (Q) {
					(Q.SIDEBAR_HIDDEN = "nosidebar"),
						(Q.MAIN_EDITOR_AREA_HIDDEN = "nomaineditorarea"),
						(Q.PANEL_HIDDEN = "nopanel"),
						(Q.AUXILIARYBAR_HIDDEN = "noauxiliarybar"),
						(Q.STATUSBAR_HIDDEN = "nostatusbar"),
						(Q.FULLSCREEN = "fullscreen"),
						(Q.MAXIMIZED = "maximized"),
						(Q.WINDOW_BORDER = "border");
				})(K || (K = {})),
					(e.$m3c = [
						a.LayoutSettings.ACTIVITY_BAR_LOCATION,
						a.LayoutSettings.COMMAND_CENTER,
						a.LayoutSettings.EDITOR_ACTIONS_LOCATION,
						a.LayoutSettings.LAYOUT_ACTIONS,
						"window.menuBarVisibility",
						o.TitleBarSetting.TITLE_BAR_STYLE,
						o.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
					]);
				class J extends t.$1c {
					get activityBarDirection() {
						return this.S.getValue(q.$LW);
					}
					get activeContainer() {
						return this.t((0, w.$Ngb)());
					}
					get containers() {
						const Z = [];
						for (const { window: se } of (0, w.getWindows)())
							Z.push(this.t(se.document));
						return Z;
					}
					t(Z) {
						return Z === this.mainContainer.ownerDocument
							? this.mainContainer
							: Z.body.getElementsByClassName("monaco-workbench")[0];
					}
					whenContainerStylesLoaded(Z) {
						return this.u.get(Z.vscodeWindowId);
					}
					get mainContainerDimension() {
						return this.w;
					}
					get activeContainerDimension() {
						return this.y(this.activeContainer);
					}
					y(Z) {
						return Z === this.mainContainer
							? this.mainContainerDimension
							: (0, w.$ogb)(Z);
					}
					get mainContainerOffset() {
						return this.z(G.$Bfb);
					}
					get activeContainerOffset() {
						return this.z((0, w.getWindow)(this.activeContainer));
					}
					z(Z) {
						let se = 0,
							re = 0;
						this.isVisible(a.Parts.BANNER_PART) &&
							((se = this.Lb(a.Parts.BANNER_PART).maximumHeight), (re = se));
						const le = this.isVisible(a.Parts.TITLEBAR_PART, Z);
						return (
							le &&
								((se += this.Lb(a.Parts.TITLEBAR_PART).maximumHeight),
								(re = se)),
							le &&
								this.S.getValue(a.LayoutSettings.COMMAND_CENTER) !== !1 &&
								(re = 6),
							{ top: se, quickPickTop: re }
						);
					}
					constructor(Z) {
						super(),
							(this.nb = Z),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeZenMode = this.a.event),
							(this.b = this.D(new i.$re())),
							(this.onDidChangeMainEditorCenteredLayout = this.b.event),
							(this.c = this.D(new i.$re())),
							(this.onDidChangePanelAlignment = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidChangeWindowMaximized = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDidChangePanelPosition = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidChangePartVisibility = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidChangeNotificationsVisibility = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidLayoutMainContainer = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidLayoutActiveContainer = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidLayoutContainer = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidAddContainer = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidChangeActiveContainer = this.s.event),
							(this.mainContainer = document.createElement("div")),
							(this.u = new Map()),
							(this.C = new Map()),
							(this.F = !1),
							(this.mb = !1),
							(this.Eb = !1),
							(this.Gb = new U.$0h()),
							(this.Hb = this.Gb.p),
							(this.Ib = new U.$0h()),
							(this.whenRestored = this.Ib.p),
							(this.Jb = !1);
					}
					ob(Z) {
						(this.Q = Z.get(b.$5rb)),
							(this.S = Z.get(n.$gj)),
							(this.W = Z.get(f.$asb)),
							(this.cb = Z.get(h.$Vi)),
							(this.U = Z.get(c.$lq)),
							(this.db = Z.get(C.$WO)),
							(this.fb = Z.get(L.$iP)),
							(this.R = Z.get(O.$q2)),
							(this.hb = Z.get(B.$ik)),
							(this.ib = Z.get(H.$km)),
							(this.jb = Z.get(V.$AEb)),
							(this.X = Z.get(s.$IY)),
							(this.Y = this.X.createScoped("main", this.B)),
							(this.Z = Z.get(l.$EY)),
							(this.$ = Z.get(F.$6Sb)),
							(this.bb = Z.get(N.$K1)),
							(this.ab = Z.get(g.$Wqc)),
							(this.eb = Z.get(k.$4N)),
							(this.gb = Z.get(v.$d6b)),
							Z.get(z.$$uc),
							this.pb(),
							this.zb(Z.get(p.$n6), Z.get(S.$ll));
					}
					pb() {
						const Z = () => {
							this.isVisible(a.Parts.EDITOR_PART, G.$Bfb) ||
								this.toggleMaximizedPanel();
						};
						this.Z.whenRestored.then(() => {
							this.D(this.Y.onDidVisibleEditorsChange(Z)),
								this.D(this.Z.mainPart.onDidActivateGroup(Z)),
								this.D(
									this.Y.onDidActiveEditorChange(() =>
										this.centerMainEditorLayout(
											this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
										),
									),
								);
						}),
							this.D(
								this.S.onDidChangeConfiguration((re) => {
									if (
										[...e.$m3c, _.SIDEBAR_POSITION, _.STATUSBAR_VISIBLE].some(
											(le) => re.affectsConfiguration(le),
										)
									) {
										const le =
											re.affectsConfiguration(
												a.LayoutSettings.EDITOR_ACTIONS_LOCATION,
											) &&
											this.S.getValue(
												a.LayoutSettings.EDITOR_ACTIONS_LOCATION,
											) === a.EditorActionsLocation.TITLEBAR;
										let oe = !1;
										if (
											re.affectsConfiguration(
												a.LayoutSettings.ACTIVITY_BAR_LOCATION,
											)
										) {
											const ae = this.S.getValue(
												a.LayoutSettings.ACTIVITY_BAR_LOCATION,
											);
											oe =
												ae === a.ActivityBarPosition.TOP ||
												ae === a.ActivityBarPosition.BOTTOM;
										}
										(oe || le) &&
											this.S.getValue(
												o.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
											) === o.CustomTitleBarVisibility.NEVER &&
											this.S.updateValue(
												o.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
												o.CustomTitleBarVisibility.AUTO,
											),
											this.wb();
									}
								}),
							),
							this.D((0, E.$Nfb)((re) => this.sb(re))),
							this.D(
								this.Z.mainPart.onDidAddGroup(() =>
									this.centerMainEditorLayout(
										this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									),
								),
							),
							this.D(
								this.Z.mainPart.onDidRemoveGroup(() =>
									this.centerMainEditorLayout(
										this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									),
								),
							),
							this.D(
								this.Z.mainPart.onDidChangeGroupMaximized(() =>
									this.centerMainEditorLayout(
										this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									),
								),
							),
							this.D(
								(0, w.$0fb)(
									this.mainContainer,
									w.$$gb.SCROLL,
									() => (this.mainContainer.scrollTop = 0),
								),
							),
							(d.$l || d.$n || d.$r) &&
								!(0, o.$yY)(this.S) &&
								this.D(this.ab.onMenubarVisibilityChange((re) => this.qb(re))),
							this.D(this.fb.onDidColorThemeChange(() => this.yb())),
							this.D(this.W.onDidChangeFocus((re) => this.ub(re))),
							this.D(this.W.onDidChangeActiveWindow(() => this.tb())),
							d.$r &&
								typeof navigator.windowControlsOverlay == "object" &&
								this.D(
									(0, w.$0fb)(
										navigator.windowControlsOverlay,
										"geometrychange",
										() => this.bc(),
									),
								),
							this.D(
								this.jb.onDidOpenAuxiliaryWindow(
									({ window: re, disposables: le }) => {
										const oe = re.window.vscodeWindowId;
										this.u.set(oe, re.whenStylesHaveLoaded),
											re.whenStylesHaveLoaded.then(() => this.u.delete(oe)),
											le.add((0, t.$Yc)(() => this.u.delete(oe)));
										const ae = le.add(new t.$Zc());
										this.r.fire({ container: re.container, disposables: ae }),
											le.add(re.onDidLayout((pe) => this.rb(re.container, pe)));
									},
								),
							);
					}
					qb(Z) {
						if (Z !== this.kb.runtime.menuBar.toggled) {
							this.kb.runtime.menuBar.toggled = Z;
							const se = (0, o.$wY)(this.S);
							d.$r && se === "toggle"
								? this.G.setViewVisible(
										this.H,
										(0, a.$rEb)(
											this.S,
											G.$Bfb,
											this.kb.runtime.menuBar.toggled,
											this.Ob(),
										),
									)
								: this.kb.runtime.mainWindowFullscreen &&
									(se === "toggle" || se === "classic") &&
									this.G.setViewVisible(
										this.H,
										(0, a.$rEb)(
											this.S,
											G.$Bfb,
											this.kb.runtime.menuBar.toggled,
											this.Ob(),
										),
									),
								this.rb(this.mainContainer, this.w);
						}
					}
					rb(Z, se) {
						Z === this.mainContainer && this.m.fire(se),
							(0, w.$Mgb)(Z) && this.n.fire(se),
							this.q.fire({ container: Z, dimension: se });
					}
					sb(Z) {
						Z === G.$Bfb.vscodeWindowId &&
							((this.kb.runtime.mainWindowFullscreen = (0, E.$Mfb)(G.$Bfb)),
							this.kb.runtime.mainWindowFullscreen
								? this.mainContainer.classList.add(K.FULLSCREEN)
								: (this.mainContainer.classList.remove(K.FULLSCREEN),
									this.lb.getRuntimeValue(ne.ZEN_MODE_EXIT_INFO)
										.transitionedToFullScreen &&
										this.Ob() &&
										this.toggleZenMode()),
							(this.G.edgeSnapping = this.kb.runtime.mainWindowFullscreen),
							(0, o.$xY)(this.S) &&
								(this.G.setViewVisible(
									this.H,
									(0, a.$rEb)(
										this.S,
										G.$Bfb,
										this.kb.runtime.menuBar.toggled,
										this.Ob(),
									),
								),
								this.yb(!0)));
					}
					tb() {
						const Z = this.vb();
						this.kb.runtime.activeContainerId !== Z &&
							((this.kb.runtime.activeContainerId = Z),
							this.yb(),
							this.s.fire());
					}
					ub(Z) {
						this.kb.runtime.hasFocus !== Z &&
							((this.kb.runtime.hasFocus = Z), this.yb());
					}
					vb() {
						const Z = this.activeContainer;
						return (0, w.getWindow)(Z).vscodeWindowId;
					}
					wb(Z) {
						this.updateCustomTitleBarVisibility(),
							this.updateMenubarVisibility(!!Z),
							this.Z.whenRestored.then(() => {
								this.centerMainEditorLayout(
									this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									Z,
								);
							});
					}
					xb(Z) {
						const se =
								this.activityBarDirection === "vertical"
									? this.Lb(a.Parts.ACTIVITYBAR_PART)
									: void 0,
							re = this.Lb(a.Parts.SIDEBAR_PART),
							le = this.Lb(a.Parts.AUXILIARYBAR_PART),
							oe = Z === a.Position.LEFT ? "left" : "right",
							ae = Z === a.Position.RIGHT ? "left" : "right",
							pe = this.getPanelAlignment(),
							$e = this.getPanelPosition();
						this.lb.setRuntimeValue(ne.SIDEBAR_POSITON, Z);
						const ye = se ? (0, P.$wg)(se.getContainer()) : void 0,
							ue = (0, P.$wg)(re.getContainer()),
							fe = (0, P.$wg)(le.getContainer());
						ye?.classList.remove(ae),
							ue.classList.remove(ae),
							ye?.classList.add(oe),
							ue.classList.add(oe),
							fe.classList.remove(oe),
							fe.classList.add(ae),
							se?.updateStyles(),
							re.updateStyles(),
							le.updateStyles(),
							this.Yb(Z, pe, $e);
					}
					yb(Z = !1) {
						if (d.$r || d.$l || (0, o.$BY)(this.S) || (0, o.$yY)(this.S))
							return;
						const se = this.fb.getColorTheme(),
							re = se.getColor(D.$$Gb),
							le = se.getColor(D.$_Gb),
							oe = this.hasMainWindowBorder();
						for (const ae of this.containers) {
							const pe = ae === this.mainContainer,
								$e = this.activeContainer === ae,
								ye = (0, w.getWindowId)((0, w.getWindow)(ae));
							let ue = !1;
							if (
								!this.kb.runtime.mainWindowFullscreen &&
								!this.kb.runtime.maximized.has(ye) &&
								(re || le)
							) {
								ue = !0;
								const fe = $e && this.kb.runtime.hasFocus ? re : (le ?? re);
								ae.style.setProperty(
									"--window-border-color",
									fe?.toString() ?? "transparent",
								);
							}
							pe && (this.kb.runtime.mainWindowBorder = ue),
								ae.classList.toggle(K.WINDOW_BORDER, ue);
						}
						!Z && oe !== this.hasMainWindowBorder() && this.layout();
					}
					zb(Z, se) {
						(this.lb = new te(this.U, this.S, this.cb, this.nb)),
							this.lb.load(),
							this.lb.getRuntimeValue(ne.PANEL_HIDDEN) &&
								this.lb.getRuntimeValue(ne.EDITOR_HIDDEN) &&
								this.lb.setRuntimeValue(ne.EDITOR_HIDDEN, !1),
							this.D(
								this.lb.onDidChangeState((ae) => {
									ae.key === ne.ACTIVITYBAR_HIDDEN && this.Tb(ae.value),
										ae.key === ne.STATUSBAR_HIDDEN && this.Qb(ae.value),
										ae.key === ne.SIDEBAR_POSITON && this.xb(ae.value),
										ae.key === ne.PANEL_POSITION &&
											this.setPanelPosition(ae.value),
										ae.key === ne.PANEL_ALIGNMENT &&
											this.setPanelAlignment(ae.value),
										this.wb();
								}),
							);
						const re = this.Fb();
						re && this.hb.trace("Initial editor state", re);
						const le = {
								layout: { editors: re?.layout },
								editor: {
									restoreEditors: this.Bb(this.cb, re),
									editorsToOpen: this.Db(se, re),
								},
								views: {
									defaults: this.Ab(this.Q, this.U),
									containerToRestore: {},
								},
							},
							oe = {
								activeContainerId: this.vb(),
								mainWindowFullscreen: (0, E.$Mfb)(G.$Bfb),
								hasFocus: this.W.hasFocus,
								maximized: new Set(),
								mainWindowBorder: !1,
								menuBar: { toggled: !1 },
								zenMode: { transitionDisposables: new t.$0c() },
							};
						if (
							((this.kb = { initialization: le, runtime: oe }),
							this.isVisible(a.Parts.SIDEBAR_PART))
						) {
							let ae;
							!this.Q.isBuilt ||
							Z.startupKind === p.StartupKind.ReloadedWindow ||
							(this.Q.isExtensionDevelopment &&
								!this.Q.extensionTestsLocationURI)
								? (ae = this.U.get(
										r.$Uuc.activeViewletSettingsKey,
										c.StorageScope.WORKSPACE,
										this.bb.getDefaultViewContainer(
											N.ViewContainerLocation.Sidebar,
										)?.id,
									))
								: (ae = this.bb.getDefaultViewContainer(
										N.ViewContainerLocation.Sidebar,
									)?.id),
								ae
									? (this.kb.initialization.views.containerToRestore.sideBar =
											ae)
									: this.lb.setRuntimeValue(ne.SIDEBAR_HIDDEN, !0);
						}
						if (this.isVisible(a.Parts.PANEL_PART)) {
							const ae = this.U.get(
								u.$Quc.activePanelSettingsKey,
								c.StorageScope.WORKSPACE,
								this.bb.getDefaultViewContainer(N.ViewContainerLocation.Panel)
									?.id,
							);
							ae
								? (this.kb.initialization.views.containerToRestore.panel = ae)
								: this.lb.setRuntimeValue(ne.PANEL_HIDDEN, !0);
						}
						if (this.isVisible(a.Parts.AUXILIARYBAR_PART)) {
							const ae = this.U.get(
								x.$Puc.activePanelSettingsKey,
								c.StorageScope.WORKSPACE,
								this.bb.getDefaultViewContainer(
									N.ViewContainerLocation.AuxiliaryBar,
								)?.id,
							);
							ae
								? (this.kb.initialization.views.containerToRestore.auxiliaryBar =
										ae)
								: this.lb.setRuntimeValue(ne.AUXILIARYBAR_HIDDEN, !0);
						}
						this.yb(!0);
					}
					Ab(Z, se) {
						const re = Z.options?.defaultLayout;
						if (!re || (!re.force && !se.isNew(c.StorageScope.WORKSPACE)))
							return;
						const { views: le } = re;
						if (le?.length) return le.map((oe) => oe.id);
					}
					Bb(Z, se) {
						return (0, h.$bj)(Z.getWorkspace())
							? !1
							: !!(this.S.getValue("window.restoreWindows") === "preserve") ||
									se === void 0;
					}
					Cb() {
						return this.kb.initialization.editor.restoreEditors;
					}
					async Db(Z, se) {
						if (se) {
							const re = (0, T.$Lb)(
								await (0, m.$B1)(se.filesToMerge, Z, this.hb),
							);
							if (
								re.length === 4 &&
								(0, m.$i1)(re[0]) &&
								(0, m.$i1)(re[1]) &&
								(0, m.$i1)(re[2]) &&
								(0, m.$i1)(re[3])
							)
								return [
									{
										editor: {
											input1: { resource: re[0].resource },
											input2: { resource: re[1].resource },
											base: { resource: re[2].resource },
											result: { resource: re[3].resource },
											options: { pinned: !0 },
										},
									},
								];
							const le = (0, T.$Lb)(
								await (0, m.$B1)(se.filesToDiff, Z, this.hb),
							);
							if (le.length === 2)
								return [
									{
										editor: {
											original: { resource: le[0].resource },
											modified: { resource: le[1].resource },
											options: { pinned: !0 },
										},
									},
								];
							const oe = [],
								ae = await (0, m.$B1)(se.filesToOpenOrCreate, Z, this.hb);
							for (let pe = 0; pe < ae.length; pe++) {
								const $e = ae[pe];
								$e &&
									oe.push({
										editor: $e,
										viewColumn: se.filesToOpenOrCreate?.[pe].viewColumn,
									});
							}
							return oe;
						} else if (
							this.cb.getWorkbenchState() === h.WorkbenchState.EMPTY &&
							this.S.getValue("workbench.startupEditor") === "newUntitledFile"
						)
							return this.Z.hasRestorableState
								? []
								: (await this.db.hasBackups())
									? []
									: [{ editor: { resource: void 0 } }];
						return [];
					}
					get openedDefaultEditors() {
						return this.Eb;
					}
					Fb() {
						const Z = this.Q.options?.defaultLayout;
						if (
							(Z?.editors?.length || Z?.layout?.editors) &&
							(Z.force || this.U.isNew(c.StorageScope.WORKSPACE))
						)
							return (
								(this.Eb = !0),
								{
									layout: Z.layout?.editors,
									filesToOpenOrCreate: Z?.editors?.map((oe) => ({
										viewColumn: oe.viewColumn,
										fileUri: M.URI.revive(oe.uri),
										openOnlyIfExists: oe.openOnlyIfExists,
										options: oe.options,
									})),
								}
							);
						const {
							filesToOpenOrCreate: se,
							filesToDiff: re,
							filesToMerge: le,
						} = this.Q;
						if (se || re || le)
							return {
								filesToOpenOrCreate: se,
								filesToDiff: re,
								filesToMerge: le,
							};
					}
					isRestored() {
						return this.Jb;
					}
					Kb() {
						const Z = [],
							se = [];
						Z.push(
							(async () => {
								(0, R.mark)("code/willRestoreEditors"),
									await this.Z.whenReady,
									(0, R.mark)("code/restoreEditors/editorGroupsReady"),
									this.kb.initialization.layout?.editors &&
										this.Z.mainPart.applyLayout(
											this.kb.initialization.layout.editors,
										);
								const ae = await this.kb.initialization.editor.editorsToOpen;
								(0, R.mark)("code/restoreEditors/editorsToOpenResolved");
								let pe;
								if (ae.length) {
									const $e = this.Z.mainPart.getGroups(
											l.GroupsOrder.GRID_APPEARANCE,
										),
										ye = new Map();
									for (const ue of ae) {
										const fe = $e[(ue.viewColumn ?? 1) - 1];
										let me = ye.get(fe.id);
										me || ((me = new Set()), ye.set(fe.id, me)),
											me.add(ue.editor);
									}
									pe = Promise.all(
										Array.from(ye).map(async ([ue, fe]) => {
											try {
												await this.X.openEditors(Array.from(fe), ue, {
													validateTrust: !0,
												});
											} catch (me) {
												this.hb.error(me);
											}
										}),
									);
								}
								se.push(
									Promise.all([
										pe?.finally(() =>
											(0, R.mark)("code/restoreEditors/editorsOpened"),
										),
										this.Z.whenRestored.finally(() =>
											(0, R.mark)("code/restoreEditors/editorGroupsRestored"),
										),
									]).finally(() => {
										(0, R.mark)("code/didRestoreEditors");
									}),
								);
							})(),
						);
						const re = (async () => {
							if (this.kb.initialization.views.defaults?.length) {
								(0, R.mark)("code/willOpenDefaultViews");
								const ae = [],
									pe = (ue) => {
										const fe = this.bb.getViewLocationById(ue.id);
										if (fe !== null) {
											const me = this.bb.getViewContainerByViewId(ue.id);
											if (me) {
												ue.order >= (ae?.[fe]?.order ?? 0) &&
													(ae[fe] = { id: me.id, order: ue.order });
												const ve = this.bb.getViewContainerModel(me);
												return (
													ve.setCollapsed(ue.id, !1),
													ve.setVisible(ue.id, !0),
													!0
												);
											}
										}
										return !1;
									},
									$e = [...this.kb.initialization.views.defaults]
										.reverse()
										.map((ue, fe) => ({ id: ue, order: fe }));
								let ye = $e.length;
								for (; ye; ) ye--, pe($e[ye]) && $e.splice(ye, 1);
								if ($e.length) {
									await this.R.whenInstalledExtensionsRegistered();
									let ue = $e.length;
									for (; ue; ) ue--, pe($e[ue]) && $e.splice(ue, 1);
								}
								ae[N.ViewContainerLocation.Sidebar] &&
									(this.kb.initialization.views.containerToRestore.sideBar =
										ae[N.ViewContainerLocation.Sidebar].id),
									ae[N.ViewContainerLocation.Panel] &&
										(this.kb.initialization.views.containerToRestore.panel =
											ae[N.ViewContainerLocation.Panel].id),
									ae[N.ViewContainerLocation.AuxiliaryBar] &&
										(this.kb.initialization.views.containerToRestore.auxiliaryBar =
											ae[N.ViewContainerLocation.AuxiliaryBar].id),
									(0, R.mark)("code/didOpenDefaultViews");
							}
						})();
						Z.push(re),
							Z.push(
								(async () => {
									if (
										(await re,
										!this.kb.initialization.views.containerToRestore.sideBar)
									)
										return;
									(0, R.mark)("code/willRestoreViewlet"),
										(await this.$.openPaneComposite(
											this.kb.initialization.views.containerToRestore.sideBar,
											N.ViewContainerLocation.Sidebar,
										)) ||
											(await this.$.openPaneComposite(
												this.bb.getDefaultViewContainer(
													N.ViewContainerLocation.Sidebar,
												)?.id,
												N.ViewContainerLocation.Sidebar,
											)),
										(0, R.mark)("code/didRestoreViewlet");
								})(),
							),
							Z.push(
								(async () => {
									if (
										(await re,
										!this.kb.initialization.views.containerToRestore.panel)
									)
										return;
									(0, R.mark)("code/willRestorePanel"),
										(await this.$.openPaneComposite(
											this.kb.initialization.views.containerToRestore.panel,
											N.ViewContainerLocation.Panel,
										)) ||
											(await this.$.openPaneComposite(
												this.bb.getDefaultViewContainer(
													N.ViewContainerLocation.Panel,
												)?.id,
												N.ViewContainerLocation.Panel,
											)),
										(0, R.mark)("code/didRestorePanel");
								})(),
							),
							Z.push(
								(async () => {
									if (
										(await re,
										!this.kb.initialization.views.containerToRestore
											.auxiliaryBar)
									)
										return;
									(0, R.mark)("code/willRestoreAuxiliaryBar"),
										(await this.$.openPaneComposite(
											this.kb.initialization.views.containerToRestore
												.auxiliaryBar,
											N.ViewContainerLocation.AuxiliaryBar,
										)) ||
											(await this.$.openPaneComposite(
												this.bb.getDefaultViewContainer(
													N.ViewContainerLocation.AuxiliaryBar,
												)?.id,
												N.ViewContainerLocation.AuxiliaryBar,
											)),
										(0, R.mark)("code/didRestoreAuxiliaryBar");
								})(),
							);
						const le = this.Ob(),
							oe = W(this.S).restore;
						le && (this.Pb(!oe), this.toggleZenMode(!1, !0)),
							this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED) &&
								this.centerMainEditorLayout(!0, !0),
							U.Promises.settled(Z).finally(() => {
								this.Gb.complete(),
									U.Promises.settled(se).finally(() => {
										(this.Jb = !0), this.Ib.complete();
									});
							});
					}
					registerPart(Z) {
						const se = Z.getId();
						return this.C.set(se, Z), (0, t.$Yc)(() => this.C.delete(se));
					}
					Lb(Z) {
						const se = this.C.get(Z);
						if (!se) throw new Error(`Unknown part ${Z}`);
						return se;
					}
					registerNotifications(Z) {
						this.D(
							Z.onDidChangeNotificationsVisibility((se) => this.j.fire(se)),
						);
					}
					hasFocus(Z) {
						const se = this.getContainer((0, w.$Ogb)(), Z);
						if (!se) return !1;
						const re = (0, w.$Jgb)();
						return re ? (0, w.$Dgb)(re, se) : !1;
					}
					focusPart(Z, se = G.$Bfb) {
						const re = this.getContainer(se, Z) ?? this.mainContainer;
						switch (Z) {
							case a.Parts.EDITOR_PART:
								this.Z.getPart(re).activeGroup.focus();
								break;
							case a.Parts.PANEL_PART: {
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.Panel,
								)?.focus();
								break;
							}
							case a.Parts.SIDEBAR_PART: {
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.Sidebar,
								)?.focus();
								break;
							}
							case a.Parts.AUXILIARYBAR_PART: {
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.AuxiliaryBar,
								)?.focus();
								break;
							}
							case a.Parts.ACTIVITYBAR_PART:
								this.activityBarDirection === "vertical" &&
									this.Lb(a.Parts.SIDEBAR_PART).focusActivityBar();
								break;
							case a.Parts.STATUSBAR_PART:
								this.gb.getPart(re).focus();
								break;
							default:
								re?.focus();
						}
					}
					getContainer(Z, se) {
						if (typeof se > "u") return this.t(Z.document);
						if (Z === G.$Bfb) return this.Lb(se).getContainer();
						let re;
						if (
							(se === a.Parts.EDITOR_PART
								? (re = this.Z.getPart(this.t(Z.document)))
								: se === a.Parts.STATUSBAR_PART
									? (re = this.gb.getPart(this.t(Z.document)))
									: se === a.Parts.TITLEBAR_PART &&
										(re = this.ab.getPart(this.t(Z.document))),
							re instanceof $.Part)
						)
							return re.getContainer();
					}
					isVisible(Z, se = G.$Bfb) {
						if (se !== G.$Bfb && Z === a.Parts.EDITOR_PART) return !0;
						if (this.F)
							switch (Z) {
								case a.Parts.TITLEBAR_PART:
									return this.G.isViewVisible(this.H);
								case a.Parts.SIDEBAR_PART:
									return !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN);
								case a.Parts.PANEL_PART:
									return !this.lb.getRuntimeValue(ne.PANEL_HIDDEN);
								case a.Parts.AUXILIARYBAR_PART:
									return !this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN);
								case a.Parts.STATUSBAR_PART:
									return !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN);
								case a.Parts.ACTIVITYBAR_PART:
									return !this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN);
								case a.Parts.EDITOR_PART:
									return !this.lb.getRuntimeValue(ne.EDITOR_HIDDEN);
								case a.Parts.BANNER_PART:
									return this.G.isViewVisible(this.I);
								default:
									return !1;
							}
						switch (Z) {
							case a.Parts.TITLEBAR_PART:
								return (0, a.$rEb)(
									this.S,
									G.$Bfb,
									this.kb.runtime.menuBar.toggled,
									this.Ob(),
								);
							case a.Parts.SIDEBAR_PART:
								return !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN);
							case a.Parts.PANEL_PART:
								return !this.lb.getRuntimeValue(ne.PANEL_HIDDEN);
							case a.Parts.AUXILIARYBAR_PART:
								return !this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN);
							case a.Parts.STATUSBAR_PART:
								return !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN);
							case a.Parts.ACTIVITYBAR_PART:
								return !this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN);
							case a.Parts.EDITOR_PART:
								return !this.lb.getRuntimeValue(ne.EDITOR_HIDDEN);
							default:
								return !1;
						}
					}
					Mb() {
						return d.$r && !(0, E.$Wfb)();
					}
					focus() {
						this.focusPart(
							a.Parts.EDITOR_PART,
							(0, w.getWindow)(this.activeContainer),
						);
					}
					Nb() {
						const Z = this.$.getActivePaneComposite(
							N.ViewContainerLocation.Panel,
						);
						(this.hasFocus(a.Parts.PANEL_PART) ||
							!this.isVisible(a.Parts.EDITOR_PART)) &&
						Z
							? Z.focus()
							: this.focus();
					}
					getMaximumEditorDimensions(Z) {
						const se = (0, w.getWindow)(Z),
							re = this.y(Z);
						if (Z === this.mainContainer) {
							const le = (0, a.$nEb)(this.getPanelPosition()),
								oe =
									(this.isVisible(a.Parts.ACTIVITYBAR_PART) && this.P
										? this.P.minimumWidth
										: 0) +
									(this.isVisible(a.Parts.SIDEBAR_PART)
										? this.J.minimumWidth
										: 0) +
									(this.isVisible(a.Parts.PANEL_PART) && !le
										? this.L.minimumWidth
										: 0) +
									(this.isVisible(a.Parts.AUXILIARYBAR_PART)
										? this.M.minimumWidth
										: 0),
								ae =
									(this.isVisible(a.Parts.TITLEBAR_PART, se)
										? this.H.minimumHeight
										: 0) +
									(this.isVisible(a.Parts.STATUSBAR_PART, se)
										? this.O.minimumHeight
										: 0) +
									(this.isVisible(a.Parts.PANEL_PART) && le
										? this.L.minimumHeight
										: 0),
								pe = re.width - oe,
								$e = re.height - ae;
							return { width: pe, height: $e };
						} else {
							const le =
								(this.isVisible(a.Parts.TITLEBAR_PART, se)
									? this.H.minimumHeight
									: 0) +
								(this.isVisible(a.Parts.STATUSBAR_PART, se)
									? this.O.minimumHeight
									: 0);
							return { width: re.width, height: re.height - le };
						}
					}
					Ob() {
						return this.lb.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
					}
					Pb(Z) {
						this.lb.setRuntimeValue(ne.ZEN_MODE_ACTIVE, Z);
					}
					toggleZenMode(Z, se = !1) {
						this.Pb(!this.Ob()),
							this.kb.runtime.zenMode.transitionDisposables.clearAndDisposeAll();
						const re = (pe) => {
							for (const $e of this.Y.visibleTextEditorControls) {
								if (!pe && (0, I.$0sb)($e) && $e.hasModel()) {
									const ye = $e.getModel();
									pe = this.S.getValue("editor.lineNumbers", {
										resource: ye.uri,
										overrideIdentifier: ye.getLanguageId(),
									});
								}
								pe || (pe = this.S.getValue("editor.lineNumbers")),
									$e.updateOptions({ lineNumbers: pe });
							}
						};
						let le = !1;
						const oe = W(this.S),
							ae = this.lb.getRuntimeValue(ne.ZEN_MODE_EXIT_INFO);
						this.Ob()
							? ((le =
									!this.kb.runtime.mainWindowFullscreen &&
									oe.fullScreen &&
									!d.$u),
								se ||
									((ae.transitionedToFullScreen = le),
									(ae.transitionedToCenteredEditorLayout =
										!this.isMainEditorLayoutCentered() && oe.centerLayout),
									(ae.handleNotificationsDoNotDisturbMode =
										this.eb.getFilter() === k.NotificationsFilter.OFF),
									(ae.wasVisible.sideBar = this.isVisible(
										a.Parts.SIDEBAR_PART,
									)),
									(ae.wasVisible.panel = this.isVisible(a.Parts.PANEL_PART)),
									(ae.wasVisible.auxiliaryBar = this.isVisible(
										a.Parts.AUXILIARYBAR_PART,
									)),
									this.lb.setRuntimeValue(ne.ZEN_MODE_EXIT_INFO, ae)),
								this.Zb(!0, !0),
								this.ac(!0, !0),
								this.Wb(!0, !0),
								oe.hideActivityBar && this.Tb(!0, !0),
								oe.hideStatusBar && this.Qb(!0, !0),
								oe.hideLineNumbers &&
									(re("off"),
									this.kb.runtime.zenMode.transitionDisposables.set(
										a.ZenModeSettings.HIDE_LINENUMBERS,
										this.Y.onDidVisibleEditorsChange(() => re("off")),
									)),
								oe.showTabs !== this.Z.partOptions.showTabs &&
									this.kb.runtime.zenMode.transitionDisposables.set(
										a.ZenModeSettings.SHOW_TABS,
										this.Z.mainPart.enforcePartOptions({
											showTabs: oe.showTabs,
										}),
									),
								oe.silentNotifications &&
									ae.handleNotificationsDoNotDisturbMode &&
									this.eb.setFilter(k.NotificationsFilter.ERROR),
								oe.centerLayout && this.centerMainEditorLayout(!0, !0),
								this.kb.runtime.zenMode.transitionDisposables.set(
									"configurationChange",
									this.S.onDidChangeConfiguration((pe) => {
										if (
											pe.affectsConfiguration(
												a.ZenModeSettings.HIDE_ACTIVITYBAR,
											)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.HIDE_ACTIVITYBAR,
											);
											this.Tb($e, !0);
										}
										if (
											pe.affectsConfiguration(a.ZenModeSettings.HIDE_STATUSBAR)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.HIDE_STATUSBAR,
											);
											this.Qb($e, !0);
										}
										if (
											pe.affectsConfiguration(a.ZenModeSettings.CENTER_LAYOUT)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.CENTER_LAYOUT,
											);
											this.centerMainEditorLayout($e, !0);
										}
										if (pe.affectsConfiguration(a.ZenModeSettings.SHOW_TABS)) {
											const $e =
												this.S.getValue(a.ZenModeSettings.SHOW_TABS) ??
												"multiple";
											this.kb.runtime.zenMode.transitionDisposables.set(
												a.ZenModeSettings.SHOW_TABS,
												this.Z.mainPart.enforcePartOptions({ showTabs: $e }),
											);
										}
										if (
											pe.affectsConfiguration(
												a.ZenModeSettings.SILENT_NOTIFICATIONS,
											)
										) {
											const $e = !!this.S.getValue(
												a.ZenModeSettings.SILENT_NOTIFICATIONS,
											);
											ae.handleNotificationsDoNotDisturbMode &&
												this.eb.setFilter(
													$e
														? k.NotificationsFilter.ERROR
														: k.NotificationsFilter.OFF,
												);
										}
										if (
											pe.affectsConfiguration(
												a.ZenModeSettings.HIDE_LINENUMBERS,
											)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.HIDE_LINENUMBERS,
											)
												? "off"
												: void 0;
											re($e),
												this.kb.runtime.zenMode.transitionDisposables.set(
													a.ZenModeSettings.HIDE_LINENUMBERS,
													this.Y.onDidVisibleEditorsChange(() => re($e)),
												);
										}
									}),
								))
							: (ae.wasVisible.panel && this.Zb(!1, !0),
								ae.wasVisible.auxiliaryBar && this.ac(!1, !0),
								ae.wasVisible.sideBar && this.Wb(!1, !0),
								this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN, !0) ||
									this.Tb(!1, !0),
								this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN, !0) ||
									this.Qb(!1, !0),
								ae.transitionedToCenteredEditorLayout &&
									this.centerMainEditorLayout(!1, !0),
								ae.handleNotificationsDoNotDisturbMode &&
									this.eb.setFilter(k.NotificationsFilter.OFF),
								re(),
								this.focus(),
								(le =
									ae.transitionedToFullScreen &&
									this.kb.runtime.mainWindowFullscreen)),
							Z || this.layout(),
							le && this.W.toggleFullScreen(G.$Bfb),
							(0, o.$xY)(this.S) &&
								(this.G.setViewVisible(
									this.H,
									(0, a.$rEb)(
										this.S,
										G.$Bfb,
										this.kb.runtime.menuBar.toggled,
										this.Ob(),
									),
								),
								this.yb(!0)),
							this.a.fire(this.Ob());
					}
					Qb(Z, se) {
						this.lb.setRuntimeValue(ne.STATUSBAR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.STATUSBAR_HIDDEN)
								: this.mainContainer.classList.remove(K.STATUSBAR_HIDDEN),
							this.G.setViewVisible(this.O, !Z);
					}
					Rb() {
						return {
							element: document.createElement("div"),
							maximumHeight: 0,
							minimumHeight: 0,
							maximumWidth: 0,
							minimumWidth: 0,
							toJSON: () => ({ type: a.Parts.ACTIVITYBAR_PART }),
							onDidChange: i.Event.None,
							layout: () => {},
							onDidVisibilityChange: i.Event.None,
						};
					}
					Sb() {
						const Z = this.Lb(a.Parts.TITLEBAR_PART),
							se = this.Lb(a.Parts.BANNER_PART),
							re = this.Lb(a.Parts.EDITOR_PART),
							le =
								this.activityBarDirection === "vertical"
									? this.Lb(a.Parts.ACTIVITYBAR_PART)
									: this.Rb(),
							oe = this.Lb(a.Parts.PANEL_PART),
							ae = this.Lb(a.Parts.AUXILIARYBAR_PART),
							pe = this.Lb(a.Parts.SIDEBAR_PART),
							$e = this.Lb(a.Parts.STATUSBAR_PART);
						(this.H = Z),
							(this.I = se),
							(this.J = pe),
							(this.P = le),
							(this.N = re),
							(this.L = oe),
							(this.M = ae),
							(this.O = $e);
						const ye = {
								[a.Parts.ACTIVITYBAR_PART]: this.P,
								[a.Parts.BANNER_PART]: this.I,
								[a.Parts.TITLEBAR_PART]: this.H,
								[a.Parts.EDITOR_PART]: this.N,
								[a.Parts.PANEL_PART]: this.L,
								[a.Parts.SIDEBAR_PART]: this.J,
								[a.Parts.STATUSBAR_PART]: this.O,
								[a.Parts.AUXILIARYBAR_PART]: this.M,
							},
							ue = ({ type: me }) => ye[me],
							fe = y.$Cob.deserialize(
								this.ec(),
								{ fromJSON: ue },
								{ proportionalLayout: !1 },
							);
						this.mainContainer.prepend(fe.element),
							this.mainContainer.setAttribute("role", "application"),
							(this.G = fe),
							(this.G.edgeSnapping = this.kb.runtime.mainWindowFullscreen);
						for (const me of [Z, re, le, oe, pe, $e, ae, se])
							me &&
								this.D(
									me.onDidVisibilityChange((ve) => {
										me === pe
											? this.Wb(!ve, !0)
											: me === oe
												? this.Zb(!ve, !0)
												: me === ae
													? this.ac(!ve, !0)
													: me === re && this.Vb(!ve, !0),
											this.h.fire(),
											this.rb(this.mainContainer, this.w);
									}),
								);
						this.D(
							this.U.onWillSaveState((me) => {
								const ve = this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN)
									? this.G.getViewCachedVisibleSize(this.J)
									: this.G.getViewSize(this.J).width;
								this.lb.setInitializationValue(ne.SIDEBAR_SIZE, ve);
								const ge = this.lb.getRuntimeValue(ne.PANEL_HIDDEN)
									? this.G.getViewCachedVisibleSize(this.L)
									: (0, a.$nEb)(this.lb.getRuntimeValue(ne.PANEL_POSITION))
										? this.G.getViewSize(this.L).height
										: this.G.getViewSize(this.L).width;
								this.lb.setInitializationValue(ne.PANEL_SIZE, ge);
								const be = this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN)
									? this.G.getViewCachedVisibleSize(this.M)
									: this.G.getViewSize(this.M).width;
								this.lb.setInitializationValue(ne.AUXILIARYBAR_SIZE, be),
									this.lb.save(!0, !0);
							}),
						);
					}
					layout() {
						this.mb ||
							((this.w = (0, w.$ogb)(
								this.kb.runtime.mainWindowFullscreen
									? G.$Bfb.document.body
									: this.nb,
							)),
							this.hb.trace(
								`Layout#layout, height: ${this.w.height}, width: ${this.w.width}`,
							),
							(0, w.$sgb)(this.mainContainer, 0, 0, 0, 0, "relative"),
							(0, w.size)(this.mainContainer, this.w.width, this.w.height),
							this.G.layout(this.w.width, this.w.height),
							(this.F = !0),
							this.rb(this.mainContainer, this.w));
					}
					isMainEditorLayoutCentered() {
						return this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED);
					}
					centerMainEditorLayout(Z, se) {
						this.lb.setRuntimeValue(ne.MAIN_EDITOR_CENTERED, Z);
						const re = this.Y.activeEditor;
						let le = !1;
						re instanceof A.$GVb
							? (le = this.S.getValue("diffEditor.renderSideBySide"))
							: re?.hasCapability(m.EditorInputCapabilities.MultipleEditors) &&
								(le = !0),
							this.S.getValue("workbench.editor.centeredLayoutAutoResize") &&
								((this.Z.mainPart.groups.length > 1 &&
									!this.Z.mainPart.hasMaximizedGroup()) ||
									le) &&
								(Z = !1),
							this.Z.mainPart.isLayoutCentered() !== Z &&
								(this.Z.mainPart.centerLayout(Z), se || this.layout()),
							this.b.fire(this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED));
					}
					resizePart(Z, se, re) {
						const le = Math.sign(se) * (0, w.$qhb)((0, w.$Ogb)(), Math.abs(se)),
							oe = Math.sign(re) * (0, w.$qhb)((0, w.$Ogb)(), Math.abs(re));
						let ae;
						switch (Z) {
							case a.Parts.SIDEBAR_PART:
								(ae = this.G.getViewSize(this.J)),
									this.G.resizeView(this.J, {
										width: ae.width + le,
										height: ae.height,
									});
								break;
							case a.Parts.PANEL_PART:
								(ae = this.G.getViewSize(this.L)),
									this.G.resizeView(this.L, {
										width:
											ae.width +
											((0, a.$nEb)(this.getPanelPosition()) ? 0 : le),
										height:
											ae.height +
											((0, a.$nEb)(this.getPanelPosition()) ? oe : 0),
									});
								break;
							case a.Parts.AUXILIARYBAR_PART:
								(ae = this.G.getViewSize(this.M)),
									this.G.resizeView(this.M, {
										width: ae.width + le,
										height: ae.height,
									});
								break;
							case a.Parts.EDITOR_PART:
								if (
									((ae = this.G.getViewSize(this.N)),
									this.Z.mainPart.count === 1)
								)
									this.G.resizeView(this.N, {
										width: ae.width + le,
										height: ae.height + oe,
									});
								else {
									const pe = this.Z.mainPart.activeGroup,
										{ width: $e, height: ye } = this.Z.mainPart.getSize(pe);
									this.Z.mainPart.setSize(pe, {
										width: $e + le,
										height: ye + oe,
									});
									const { width: ue, height: fe } = this.Z.mainPart.getSize(pe);
									((oe && ye === fe) || (le && $e === ue)) &&
										this.G.resizeView(this.N, {
											width: ae.width + (le && $e === ue ? le : 0),
											height: ae.height + (oe && ye === fe ? oe : 0),
										});
								}
								break;
							default:
								return;
						}
					}
					Tb(Z, se) {
						this.P &&
							(this.lb.setRuntimeValue(ne.ACTIVITYBAR_HIDDEN, Z),
							this.G.setViewVisible(this.P, !Z));
					}
					Ub(Z) {
						this.G.setViewVisible(this.I, !Z);
					}
					Vb(Z, se) {
						this.lb.setRuntimeValue(ne.EDITOR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.MAIN_EDITOR_AREA_HIDDEN)
								: this.mainContainer.classList.remove(
										K.MAIN_EDITOR_AREA_HIDDEN,
									),
							this.G.setViewVisible(this.N, !Z),
							Z && !this.isVisible(a.Parts.PANEL_PART) && this.Zb(!1, !0);
					}
					getLayoutClasses() {
						return (0, T.$Lb)([
							this.isVisible(a.Parts.SIDEBAR_PART) ? void 0 : K.SIDEBAR_HIDDEN,
							this.isVisible(a.Parts.EDITOR_PART, G.$Bfb)
								? void 0
								: K.MAIN_EDITOR_AREA_HIDDEN,
							this.isVisible(a.Parts.PANEL_PART) ? void 0 : K.PANEL_HIDDEN,
							this.isVisible(a.Parts.AUXILIARYBAR_PART)
								? void 0
								: K.AUXILIARYBAR_HIDDEN,
							this.isVisible(a.Parts.STATUSBAR_PART)
								? void 0
								: K.STATUSBAR_HIDDEN,
							this.kb.runtime.mainWindowFullscreen ? K.FULLSCREEN : void 0,
						]);
					}
					Wb(Z, se) {
						if (
							(this.lb.setRuntimeValue(ne.SIDEBAR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.SIDEBAR_HIDDEN)
								: this.mainContainer.classList.remove(K.SIDEBAR_HIDDEN),
							Z &&
								this.$.getActivePaneComposite(N.ViewContainerLocation.Sidebar))
						)
							this.$.hideActivePaneComposite(N.ViewContainerLocation.Sidebar),
								this.Nb();
						else if (
							!Z &&
							!this.$.getActivePaneComposite(N.ViewContainerLocation.Sidebar)
						) {
							const re = this.$.getLastActivePaneCompositeId(
								N.ViewContainerLocation.Sidebar,
							);
							re &&
								(this.$.openPaneComposite(
									re,
									N.ViewContainerLocation.Sidebar,
									!0,
								) ||
									this.$.openPaneComposite(
										this.bb.getDefaultViewContainer(
											N.ViewContainerLocation.Sidebar,
										)?.id,
										N.ViewContainerLocation.Sidebar,
										!0,
									));
						}
						this.G.setViewVisible(this.J, !Z);
					}
					Xb(Z) {
						const se = this.bb.getViewContainerById(Z);
						if (!se) return !1;
						const re = this.bb.getViewContainerModel(se);
						return re ? re.activeViewDescriptors.length >= 1 : !1;
					}
					Yb(Z, se, re) {
						const le = !(0, a.$nEb)(re),
							oe =
								le ||
								!(
									se === "center" ||
									(Z === a.Position.LEFT && se === "right") ||
									(Z === a.Position.RIGHT && se === "left")
								),
							ae =
								le ||
								!(
									se === "center" ||
									(Z === a.Position.RIGHT && se === "right") ||
									(Z === a.Position.LEFT && se === "left")
								),
							pe = this.isVisible(a.Parts.PANEL_PART)
								? this.G.getViewSize(this.L).width
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.L) ??
											this.L.minimumWidth,
									),
							$e = this.isVisible(a.Parts.PANEL_PART)
								? this.G.getViewSize(this.L).height
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.L) ??
											this.L.minimumHeight,
									),
							ye = this.isVisible(a.Parts.SIDEBAR_PART)
								? this.G.getViewSize(this.J).width
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.J) ??
											this.J.minimumWidth,
									),
							ue = this.isVisible(a.Parts.AUXILIARYBAR_PART)
								? this.G.getViewSize(this.M).width
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.M) ??
											this.M.minimumWidth,
									);
						Z === a.Position.LEFT
							? (this.activityBarDirection === "vertical" && this.P
									? (this.G.moveViewTo(this.P, [2, 0]),
										this.G.moveView(
											this.J,
											ye,
											oe ? this.N : this.P,
											oe ? y.Direction.Left : y.Direction.Right,
										))
									: oe
										? this.G.moveView(this.J, ye, this.N, y.Direction.Left)
										: this.G.moveViewTo(this.J, [2, 0]),
								ae
									? this.G.moveView(this.M, ue, this.N, y.Direction.Right)
									: this.G.moveViewTo(this.M, [2, -1]))
							: (this.activityBarDirection === "vertical" && this.P
									? (this.G.moveViewTo(this.P, [2, -1]),
										this.G.moveView(
											this.J,
											ye,
											oe ? this.N : this.P,
											oe ? y.Direction.Right : y.Direction.Left,
										))
									: oe
										? this.G.moveView(this.J, ye, this.N, y.Direction.Right)
										: this.G.moveViewTo(this.J, [2, -1]),
								ae
									? this.G.moveView(this.M, ue, this.N, y.Direction.Left)
									: this.G.moveViewTo(this.M, [2, 0])),
							le &&
								(this.G.moveView(
									this.L,
									pe,
									this.N,
									re === a.Position.LEFT ? y.Direction.Left : y.Direction.Right,
								),
								this.G.resizeView(this.L, { height: $e, width: pe })),
							this.isVisible(a.Parts.SIDEBAR_PART) &&
								this.G.resizeView(this.J, {
									height: this.G.getViewSize(this.J).height,
									width: ye,
								}),
							this.isVisible(a.Parts.AUXILIARYBAR_PART) &&
								this.G.resizeView(this.M, {
									height: this.G.getViewSize(this.M).height,
									width: ue,
								});
					}
					setPanelAlignment(Z, se) {
						(0, a.$nEb)(this.getPanelPosition()) ||
							this.setPanelPosition(a.Position.BOTTOM),
							Z !== "center" &&
								this.isPanelMaximized() &&
								this.toggleMaximizedPanel(),
							this.lb.setRuntimeValue(ne.PANEL_ALIGNMENT, Z),
							this.Yb(this.getSideBarPosition(), Z, this.getPanelPosition()),
							this.c.fire(Z);
					}
					Zb(Z, se) {
						if (!this.G) return;
						const re = !this.isVisible(a.Parts.PANEL_PART);
						this.lb.setRuntimeValue(ne.PANEL_HIDDEN, Z);
						const le = this.isPanelMaximized(),
							oe = this.$b();
						Z
							? this.mainContainer.classList.add(K.PANEL_HIDDEN)
							: this.mainContainer.classList.remove(K.PANEL_HIDDEN);
						let ae = !1;
						if (
							Z &&
							this.$.getActivePaneComposite(N.ViewContainerLocation.Panel)
						)
							this.$.hideActivePaneComposite(N.ViewContainerLocation.Panel),
								(ae = !d.$u);
						else if (
							!Z &&
							!this.$.getActivePaneComposite(N.ViewContainerLocation.Panel)
						) {
							let pe = this.$.getLastActivePaneCompositeId(
								N.ViewContainerLocation.Panel,
							);
							if (
								((!pe || !this.Xb(pe)) &&
									(pe = this.bb
										.getViewContainersByLocation(N.ViewContainerLocation.Panel)
										.find(($e) => this.Xb($e.id))?.id),
								pe)
							) {
								const $e = !se;
								this.$.openPaneComposite(pe, N.ViewContainerLocation.Panel, $e);
							}
						}
						Z && le && this.toggleMaximizedPanel(),
							re !== Z &&
								(this.G.setViewVisible(this.L, !Z),
								Z
									? this.lb.setRuntimeValue(ne.PANEL_WAS_LAST_MAXIMIZED, le)
									: !se && le !== oe && this.toggleMaximizedPanel(),
								ae && this.Z.mainPart.activeGroup.focus());
					}
					toggleMaximizedPanel() {
						const Z = this.G.getViewSize(this.L),
							se = this.getPanelPosition(),
							re = this.isPanelMaximized();
						re
							? (this.Vb(!1),
								this.G.resizeView(this.L, {
									width: (0, a.$nEb)(se)
										? Z.width
										: this.lb.getRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
											),
									height: (0, a.$nEb)(se)
										? this.lb.getRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
											)
										: Z.height,
								}))
							: (this.isVisible(a.Parts.PANEL_PART) &&
									((0, a.$nEb)(se)
										? this.lb.setRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
												Z.height,
											)
										: this.lb.setRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
												Z.width,
											)),
								this.Vb(!0)),
							this.lb.setRuntimeValue(ne.PANEL_WAS_LAST_MAXIMIZED, !re);
					}
					$b() {
						if (
							this.getPanelAlignment() !== "center" &&
							(0, a.$nEb)(this.getPanelPosition())
						)
							return !1;
						const Z = (0, a.$qEb)(this.S.getValue(ee.PANEL_OPENS_MAXIMIZED)),
							se = this.lb.getRuntimeValue(ne.PANEL_WAS_LAST_MAXIMIZED);
						return (
							Z === a.PanelOpensMaximizedOptions.ALWAYS ||
							(Z === a.PanelOpensMaximizedOptions.REMEMBER_LAST && se)
						);
					}
					ac(Z, se) {
						if (
							(this.lb.setRuntimeValue(ne.AUXILIARYBAR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.AUXILIARYBAR_HIDDEN)
								: this.mainContainer.classList.remove(K.AUXILIARYBAR_HIDDEN),
							Z &&
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.AuxiliaryBar,
								))
						)
							this.$.hideActivePaneComposite(
								N.ViewContainerLocation.AuxiliaryBar,
							),
								this.Nb();
						else if (
							!Z &&
							!this.$.getActivePaneComposite(
								N.ViewContainerLocation.AuxiliaryBar,
							)
						) {
							let re = this.$.getLastActivePaneCompositeId(
								N.ViewContainerLocation.AuxiliaryBar,
							);
							if (
								((!re || !this.Xb(re)) &&
									(re = this.bb
										.getViewContainersByLocation(
											N.ViewContainerLocation.AuxiliaryBar,
										)
										.find((le) => this.Xb(le.id))?.id),
								re)
							) {
								const le = !se;
								this.$.openPaneComposite(
									re,
									N.ViewContainerLocation.AuxiliaryBar,
									le,
								);
							}
						}
						this.G.setViewVisible(this.M, !Z);
					}
					setPartHidden(Z, se, re = G.$Bfb) {
						switch (se) {
							case a.Parts.ACTIVITYBAR_PART:
								return this.Tb(Z);
							case a.Parts.SIDEBAR_PART:
								return this.Wb(Z);
							case a.Parts.EDITOR_PART:
								return this.Vb(Z);
							case a.Parts.BANNER_PART:
								return this.Ub(Z);
							case a.Parts.AUXILIARYBAR_PART:
								return this.ac(Z);
							case a.Parts.PANEL_PART:
								return this.Zb(Z);
						}
					}
					hasMainWindowBorder() {
						return this.kb.runtime.mainWindowBorder;
					}
					getMainWindowBorderRadius() {
						return this.kb.runtime.mainWindowBorder && d.$m ? "5px" : void 0;
					}
					isPanelMaximized() {
						return (
							(this.getPanelAlignment() === "center" ||
								!(0, a.$nEb)(this.getPanelPosition())) &&
							!this.isVisible(a.Parts.EDITOR_PART, G.$Bfb)
						);
					}
					getSideBarPosition() {
						return this.lb.getRuntimeValue(ne.SIDEBAR_POSITON);
					}
					getPanelAlignment() {
						return this.lb.getRuntimeValue(ne.PANEL_ALIGNMENT);
					}
					updateMenubarVisibility(Z) {
						const se = (0, a.$rEb)(
							this.S,
							G.$Bfb,
							this.kb.runtime.menuBar.toggled,
							this.Ob(),
						);
						!Z &&
							this.G &&
							se !== this.isVisible(a.Parts.TITLEBAR_PART, G.$Bfb) &&
							this.G.setViewVisible(this.H, se);
					}
					updateCustomTitleBarVisibility() {
						const Z = (0, a.$rEb)(
								this.S,
								G.$Bfb,
								this.kb.runtime.menuBar.toggled,
								this.Ob(),
							),
							se = this.isVisible(a.Parts.TITLEBAR_PART);
						Z !== se && this.G.setViewVisible(this.H, Z);
					}
					toggleMenuBar() {
						let Z = (0, o.$wY)(this.S);
						typeof Z != "string" && (Z = "classic");
						let se;
						Z === "visible" || Z === "classic"
							? (se = (0, o.$yY)(this.S) ? "toggle" : "compact")
							: (se = "classic"),
							this.S.updateValue("window.menuBarVisibility", se);
					}
					getPanelPosition() {
						return this.lb.getRuntimeValue(ne.PANEL_POSITION);
					}
					setPanelPosition(Z) {
						this.isVisible(a.Parts.PANEL_PART) || this.Zb(!1);
						const se = this.Lb(a.Parts.PANEL_PART),
							re = (0, a.$oEb)(this.getPanelPosition()),
							le = (0, a.$oEb)(Z),
							oe = (0, P.$wg)(se.getContainer());
						oe.classList.remove(re), oe.classList.add(le), se.updateStyles();
						const ae = this.G.getViewSize(this.L),
							pe = this.G.getViewSize(this.J),
							$e = this.G.getViewSize(this.M);
						let ye = !this.isVisible(a.Parts.EDITOR_PART, G.$Bfb);
						le !== re &&
							!ye &&
							((0, a.$nEb)(Z)
								? this.lb.setRuntimeValue(
										ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
										ae.width,
									)
								: (0, a.$nEb)((0, a.$pEb)(re)) &&
									this.lb.setRuntimeValue(
										ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
										ae.height,
									)),
							(0, a.$nEb)(Z) &&
								this.getPanelAlignment() !== "center" &&
								ye &&
								(this.toggleMaximizedPanel(), (ye = !1)),
							this.lb.setRuntimeValue(ne.PANEL_POSITION, Z);
						const ue = this.isVisible(a.Parts.SIDEBAR_PART),
							fe = this.isVisible(a.Parts.AUXILIARYBAR_PART);
						Z === a.Position.BOTTOM
							? this.G.moveView(
									this.L,
									ye
										? ae.height
										: this.lb.getRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
											),
									this.N,
									y.Direction.Down,
								)
							: Z === a.Position.TOP
								? this.G.moveView(
										this.L,
										ye
											? ae.height
											: this.lb.getRuntimeValue(
													ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
												),
										this.N,
										y.Direction.Up,
									)
								: Z === a.Position.RIGHT
									? this.G.moveView(
											this.L,
											ye
												? ae.width
												: this.lb.getRuntimeValue(
														ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
													),
											this.N,
											y.Direction.Right,
										)
									: this.G.moveView(
											this.L,
											ye
												? ae.width
												: this.lb.getRuntimeValue(
														ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
													),
											this.N,
											y.Direction.Left,
										),
							this.G.resizeView(this.J, pe),
							ue || this.Wb(!0),
							this.G.resizeView(this.M, $e),
							fe || this.ac(!0),
							(0, a.$nEb)(Z) &&
								this.Yb(this.getSideBarPosition(), this.getPanelAlignment(), Z),
							this.g.fire(le);
					}
					isWindowMaximized(Z) {
						return this.kb.runtime.maximized.has((0, w.getWindowId)(Z));
					}
					updateWindowMaximizedState(Z, se) {
						this.mainContainer.classList.toggle(K.MAXIMIZED, se);
						const re = (0, w.getWindowId)(Z);
						se !== this.kb.runtime.maximized.has(re) &&
							(se
								? this.kb.runtime.maximized.add(re)
								: this.kb.runtime.maximized.delete(re),
							this.yb(),
							this.f.fire({ windowId: re, maximized: se }));
					}
					getVisibleNeighborPart(Z, se) {
						if (!this.G || !this.isVisible(Z, G.$Bfb)) return;
						const re = this.G.getNeighborViews(this.Lb(Z), se, !1);
						if (re)
							for (const le of re) {
								const oe = [
									a.Parts.ACTIVITYBAR_PART,
									a.Parts.EDITOR_PART,
									a.Parts.PANEL_PART,
									a.Parts.AUXILIARYBAR_PART,
									a.Parts.SIDEBAR_PART,
									a.Parts.STATUSBAR_PART,
									a.Parts.TITLEBAR_PART,
								].find(
									(ae) =>
										(ae !== a.Parts.ACTIVITYBAR_PART || this.P) &&
										this.Lb(ae) === le &&
										this.isVisible(ae, G.$Bfb),
								);
								if (oe !== void 0) return oe;
							}
					}
					bc() {
						const Z =
								this.G.getNeighborViews(this.H, y.Direction.Up, !1).length > 0,
							se = this.Mb();
						Z !== se &&
							this.G.moveView(
								this.I,
								y.Sizing.Distribute,
								this.H,
								se ? y.Direction.Up : y.Direction.Down,
							),
							this.G.setViewVisible(
								this.H,
								(0, a.$rEb)(
									this.S,
									G.$Bfb,
									this.kb.runtime.menuBar.toggled,
									this.Ob(),
								),
							);
					}
					cc(Z, se, re) {
						if (!Z.sideBar && !Z.auxiliaryBar)
							return (Z.editor.size = se), Z.editor;
						const le = [Z.editor];
						return (
							(Z.editor.size = re),
							Z.sideBar &&
								(this.lb.getRuntimeValue(ne.SIDEBAR_POSITON) === a.Position.LEFT
									? le.splice(0, 0, Z.sideBar)
									: le.push(Z.sideBar),
								(Z.editor.size -= this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN)
									? 0
									: Z.sideBar.size)),
							Z.auxiliaryBar &&
								(this.lb.getRuntimeValue(ne.SIDEBAR_POSITON) ===
								a.Position.RIGHT
									? le.splice(0, 0, Z.auxiliaryBar)
									: le.push(Z.auxiliaryBar),
								(Z.editor.size -= this.lb.getRuntimeValue(
									ne.AUXILIARYBAR_HIDDEN,
								)
									? 0
									: Z.auxiliaryBar.size)),
							{ type: "branch", data: le, size: se }
						);
					}
					dc(Z, se, re) {
						const le =
								!Z.activityBar || this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN)
									? 0
									: Z.activityBar.size,
							oe = this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN)
								? 0
								: Z.sideBar.size,
							ae = this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN)
								? 0
								: Z.auxiliaryBar.size,
							pe = this.lb.getInitializationValue(ne.PANEL_SIZE)
								? 0
								: Z.panel.size,
							$e = this.lb.getRuntimeValue(ne.PANEL_POSITION),
							ye = this.lb.getRuntimeValue(ne.SIDEBAR_POSITON),
							ue = [];
						if (!(0, a.$nEb)($e))
							ue.push(Z.editor),
								(Z.editor.size = se - le - oe - pe - ae),
								$e === a.Position.RIGHT
									? ue.push(Z.panel)
									: ue.splice(0, 0, Z.panel),
								ye === a.Position.LEFT
									? (ue.push(Z.auxiliaryBar),
										ue.splice(0, 0, Z.sideBar),
										Z.activityBar && ue.splice(0, 0, Z.activityBar))
									: (ue.splice(0, 0, Z.auxiliaryBar),
										ue.push(Z.sideBar),
										Z.activityBar && ue.push(Z.activityBar));
						else {
							const fe = this.lb.getRuntimeValue(ne.PANEL_ALIGNMENT),
								me = !(
									fe === "center" ||
									(ye === a.Position.LEFT && fe === "right") ||
									(ye === a.Position.RIGHT && fe === "left")
								),
								ve = !(
									fe === "center" ||
									(ye === a.Position.RIGHT && fe === "right") ||
									(ye === a.Position.LEFT && fe === "left")
								),
								ge = se - le - (me ? 0 : oe) - (ve ? 0 : ae),
								be = this.cc(
									{
										editor: Z.editor,
										sideBar: me ? Z.sideBar : void 0,
										auxiliaryBar: ve ? Z.auxiliaryBar : void 0,
									},
									re - pe,
									ge,
								);
							ue.push({
								type: "branch",
								data: $e === a.Position.BOTTOM ? [be, Z.panel] : [Z.panel, be],
								size: ge,
							}),
								me ||
									(ye === a.Position.LEFT
										? ue.splice(0, 0, Z.sideBar)
										: ue.push(Z.sideBar)),
								ve ||
									(ye === a.Position.RIGHT
										? ue.splice(0, 0, Z.auxiliaryBar)
										: ue.push(Z.auxiliaryBar)),
								Z.activityBar &&
									(ye === a.Position.LEFT
										? ue.splice(0, 0, Z.activityBar)
										: ue.push(Z.activityBar));
						}
						return ue;
					}
					ec() {
						const { width: Z, height: se } = this.lb.getInitializationValue(
								ne.GRID_SIZE,
							),
							re = this.lb.getInitializationValue(ne.SIDEBAR_SIZE),
							le = this.lb.getInitializationValue(ne.AUXILIARYBAR_SIZE),
							oe = this.lb.getInitializationValue(ne.PANEL_SIZE),
							ae = this.H.minimumHeight,
							pe = this.I.minimumHeight,
							$e = this.O.minimumHeight,
							ye = this.P?.minimumWidth ?? 0,
							ue = se - ae - $e,
							fe = [
								{
									type: "leaf",
									data: { type: a.Parts.TITLEBAR_PART },
									size: ae,
									visible: this.isVisible(a.Parts.TITLEBAR_PART, G.$Bfb),
								},
								{
									type: "leaf",
									data: { type: a.Parts.BANNER_PART },
									size: pe,
									visible: !1,
								},
							],
							me = this.P
								? {
										type: "leaf",
										data: { type: a.Parts.ACTIVITYBAR_PART },
										size: ye,
										visible: !this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN),
									}
								: void 0,
							ve = {
								type: "leaf",
								data: { type: a.Parts.SIDEBAR_PART },
								size: re,
								visible: !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN),
							},
							ge = {
								type: "leaf",
								data: { type: a.Parts.AUXILIARYBAR_PART },
								size: le,
								visible: this.isVisible(a.Parts.AUXILIARYBAR_PART),
							},
							be = {
								type: "leaf",
								data: { type: a.Parts.EDITOR_PART },
								size: 0,
								visible: !this.lb.getRuntimeValue(ne.EDITOR_HIDDEN),
							},
							Ce = {
								type: "leaf",
								data: { type: a.Parts.PANEL_PART },
								size: oe,
								visible: !this.lb.getRuntimeValue(ne.PANEL_HIDDEN),
							},
							Le = this.dc(
								{
									activityBar: me,
									auxiliaryBar: ge,
									editor: be,
									panel: Ce,
									sideBar: ve,
								},
								Z,
								ue,
							),
							Fe = {
								root: {
									type: "branch",
									size: Z,
									data: [
										...(this.Mb() ? fe.reverse() : fe),
										{ type: "branch", data: Le, size: ue },
										{
											type: "leaf",
											data: { type: a.Parts.STATUSBAR_PART },
											size: $e,
											visible: !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN),
										},
									],
								},
								orientation: y.Orientation.VERTICAL,
								width: Z,
								height: se,
							},
							Oe = {
								activityBarVisible: !this.lb.getRuntimeValue(
									ne.ACTIVITYBAR_HIDDEN,
								),
								sideBarVisible: !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN),
								auxiliaryBarVisible: !this.lb.getRuntimeValue(
									ne.AUXILIARYBAR_HIDDEN,
								),
								panelVisible: !this.lb.getRuntimeValue(ne.PANEL_HIDDEN),
								statusbarVisible: !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN),
								sideBarPosition: (0, a.$oEb)(
									this.lb.getRuntimeValue(ne.SIDEBAR_POSITON),
								),
								panelPosition: (0, a.$oEb)(
									this.lb.getRuntimeValue(ne.PANEL_POSITION),
								),
							};
						return this.ib.publicLog2("startupLayout", Oe), Fe;
					}
					dispose() {
						super.dispose(), (this.mb = !0);
					}
				}
				e.$n3c = J;
				function W(Q) {
					return Q.getValue(ee.ZEN_MODE_CONFIG);
				}
				class X {
					constructor(Z, se, re, le) {
						(this.name = Z),
							(this.scope = se),
							(this.target = re),
							(this.defaultValue = le);
					}
				}
				class Y extends X {
					constructor(Z, se, re, le, oe) {
						super(Z, se, re, le),
							(this.zenModeIgnore = oe),
							(this.runtime = !0);
					}
				}
				class ie extends X {
					constructor() {
						super(...arguments), (this.runtime = !1);
					}
				}
				const ne = {
					MAIN_EDITOR_CENTERED: new Y(
						"editor.centered",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					ZEN_MODE_ACTIVE: new Y(
						"zenMode.active",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					ZEN_MODE_EXIT_INFO: new Y(
						"zenMode.exitInfo",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						{
							transitionedToCenteredEditorLayout: !1,
							transitionedToFullScreen: !1,
							handleNotificationsDoNotDisturbMode: !1,
							wasVisible: { auxiliaryBar: !1, panel: !1, sideBar: !1 },
						},
					),
					GRID_SIZE: new ie(
						"grid.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						{ width: 800, height: 600 },
					),
					SIDEBAR_SIZE: new ie(
						"sideBar.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						200,
					),
					AUXILIARYBAR_SIZE: new ie(
						"auxiliaryBar.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						200,
					),
					PANEL_SIZE: new ie(
						"panel.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						300,
					),
					PANEL_LAST_NON_MAXIMIZED_HEIGHT: new Y(
						"panel.lastNonMaximizedHeight",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						300,
					),
					PANEL_LAST_NON_MAXIMIZED_WIDTH: new Y(
						"panel.lastNonMaximizedWidth",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						300,
					),
					PANEL_WAS_LAST_MAXIMIZED: new Y(
						"panel.wasLastMaximized",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					SIDEBAR_POSITON: new Y(
						"sideBar.position",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						a.Position.LEFT,
					),
					PANEL_POSITION: new Y(
						"panel.position",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						a.Position.BOTTOM,
					),
					PANEL_ALIGNMENT: new Y(
						"panel.alignment",
						c.StorageScope.PROFILE,
						c.StorageTarget.USER,
						"center",
					),
					ACTIVITYBAR_HIDDEN: new Y(
						"activityBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
						!0,
					),
					SIDEBAR_HIDDEN: new Y(
						"sideBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					EDITOR_HIDDEN: new Y(
						"editor.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					PANEL_HIDDEN: new Y(
						"panel.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!0,
					),
					AUXILIARYBAR_HIDDEN: new Y(
						"auxiliaryBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					STATUSBAR_HIDDEN: new Y(
						"statusBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
						!0,
					),
				};
				var ee;
				(function (Q) {
					(Q.PANEL_POSITION = "workbench.panel.defaultLocation"),
						(Q.PANEL_OPENS_MAXIMIZED = "workbench.panel.opensMaximized"),
						(Q.ZEN_MODE_CONFIG = "zenMode"),
						(Q.EDITOR_CENTERED_LAYOUT_AUTO_RESIZE =
							"workbench.editor.centeredLayoutAutoResize");
				})(ee || (ee = {}));
				var _;
				(function (Q) {
					(Q.STATUSBAR_VISIBLE = "workbench.statusBar.visible"),
						(Q.SIDEBAR_POSITION = "workbench.sideBar.location");
				})(_ || (_ = {}));
				class te extends t.$1c {
					static {
						this.STORAGE_PREFIX = "workbench.";
					}
					constructor(Z, se, re, le) {
						super(),
							(this.c = Z),
							(this.f = se),
							(this.g = re),
							(this.h = le),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeState = this.a.event),
							(this.b = new Map()),
							this.D(this.f.onDidChangeConfiguration((oe) => this.j(oe)));
					}
					j(Z) {
						Z.affectsConfiguration(a.LayoutSettings.ACTIVITY_BAR_LOCATION) &&
							this.q(ne.ACTIVITYBAR_HIDDEN, this.n()),
							Z.affectsConfiguration(_.STATUSBAR_VISIBLE) &&
								this.q(
									ne.STATUSBAR_HIDDEN,
									!this.f.getValue(_.STATUSBAR_VISIBLE),
								),
							Z.affectsConfiguration(_.SIDEBAR_POSITION) &&
								this.q(
									ne.SIDEBAR_POSITON,
									(0, a.$pEb)(this.f.getValue(_.SIDEBAR_POSITION) ?? "left"),
								);
					}
					m(Z, se) {
						const re = this.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
						(Z.zenModeIgnore && re) ||
							(Z === ne.ACTIVITYBAR_HIDDEN
								? this.f.updateValue(
										a.LayoutSettings.ACTIVITY_BAR_LOCATION,
										se ? a.ActivityBarPosition.HIDDEN : void 0,
									)
								: Z === ne.STATUSBAR_HIDDEN
									? this.f.updateValue(_.STATUSBAR_VISIBLE, !se)
									: Z === ne.SIDEBAR_POSITON &&
										this.f.updateValue(_.SIDEBAR_POSITION, (0, a.$oEb)(se)));
					}
					load() {
						let Z;
						for (Z in ne) {
							const re = ne[Z],
								le = this.s(re);
							le !== void 0 && this.b.set(re.name, le);
						}
						this.b.set(ne.ACTIVITYBAR_HIDDEN.name, this.n()),
							this.b.set(
								ne.STATUSBAR_HIDDEN.name,
								!this.f.getValue(_.STATUSBAR_VISIBLE),
							),
							this.b.set(
								ne.SIDEBAR_POSITON.name,
								(0, a.$pEb)(this.f.getValue(_.SIDEBAR_POSITION) ?? "left"),
							);
						const se = (0, w.$ogb)(this.h);
						(ne.PANEL_POSITION.defaultValue = (0, a.$pEb)(
							this.f.getValue(ee.PANEL_POSITION) ?? "bottom",
						)),
							(ne.GRID_SIZE.defaultValue = {
								height: se.height,
								width: se.width,
							}),
							(ne.SIDEBAR_SIZE.defaultValue = Math.min(300, se.width / 4)),
							(ne.AUXILIARYBAR_SIZE.defaultValue = Math.min(
								400,
								se.width / 2.5,
							)),
							(ne.PANEL_SIZE.defaultValue =
								(this.b.get(ne.PANEL_POSITION.name) ??
								(0, a.$nEb)(ne.PANEL_POSITION.defaultValue))
									? se.height / 3
									: se.width / 4),
							(ne.SIDEBAR_HIDDEN.defaultValue =
								this.g.getWorkbenchState() === h.WorkbenchState.EMPTY);
						for (Z in ne) {
							const re = ne[Z];
							this.b.get(re.name) === void 0 &&
								this.b.set(re.name, re.defaultValue);
						}
						this.D(
							this.c.onDidChangeValue(
								c.StorageScope.PROFILE,
								void 0,
								this.D(new t.$Zc()),
							)((re) => {
								let le;
								for (le in ne) {
									const oe = ne[le];
									if (
										oe instanceof Y &&
										oe.scope === c.StorageScope.PROFILE &&
										oe.target === c.StorageTarget.USER &&
										`${te.STORAGE_PREFIX}${oe.name}` === re.key
									) {
										const ae = this.s(oe) ?? oe.defaultValue;
										this.b.get(oe.name) !== ae &&
											(this.b.set(oe.name, ae),
											this.a.fire({ key: oe, value: ae }));
									}
								}
							}),
						);
					}
					save(Z, se) {
						let re;
						const le = this.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
						for (re in ne) {
							const oe = ne[re];
							if (
								(Z && oe.scope === c.StorageScope.WORKSPACE) ||
								(se && oe.scope === c.StorageScope.PROFILE)
							) {
								if (le && oe instanceof Y && oe.zenModeIgnore) continue;
								this.r(oe);
							}
						}
					}
					getInitializationValue(Z) {
						return this.b.get(Z.name);
					}
					setInitializationValue(Z, se) {
						this.b.set(Z.name, se);
					}
					getRuntimeValue(Z, se) {
						if (se)
							switch (Z) {
								case ne.ACTIVITYBAR_HIDDEN:
									this.b.set(Z.name, this.n());
									break;
								case ne.STATUSBAR_HIDDEN:
									this.b.set(Z.name, !this.f.getValue(_.STATUSBAR_VISIBLE));
									break;
								case ne.SIDEBAR_POSITON:
									this.b.set(
										Z.name,
										this.f.getValue(_.SIDEBAR_POSITION) ?? "left",
									);
									break;
							}
						return this.b.get(Z.name);
					}
					setRuntimeValue(Z, se) {
						this.b.set(Z.name, se);
						const re = this.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
						Z.scope === c.StorageScope.PROFILE &&
							(!re || !Z.zenModeIgnore) &&
							(this.r(Z), this.m(Z, se));
					}
					n() {
						if (this.f.getValue(q.$LW) === "horizontal") return !0;
						const se = this.f.getValue("workbench.activityBar.visible");
						return se !== void 0
							? !se
							: this.f.getValue(a.LayoutSettings.ACTIVITY_BAR_LOCATION) !==
									a.ActivityBarPosition.DEFAULT;
					}
					q(Z, se) {
						this.b.get(Z.name) !== se &&
							(this.setRuntimeValue(Z, se), this.a.fire({ key: Z, value: se }));
					}
					r(Z) {
						const se = this.b.get(Z.name);
						this.c.store(
							`${te.STORAGE_PREFIX}${Z.name}`,
							typeof se == "object" ? JSON.stringify(se) : se,
							Z.scope,
							Z.target,
						);
					}
					s(Z) {
						let se = this.c.get(`${te.STORAGE_PREFIX}${Z.name}`, Z.scope);
						if (se !== void 0)
							switch (typeof Z.defaultValue) {
								case "boolean":
									se = se === "true";
									break;
								case "number":
									se = parseInt(se);
									break;
								case "object":
									se = JSON.parse(se);
									break;
							}
						return se;
					}
				}
			},
		),
		define(
			de[1941],
			he([1, 0, 53, 49, 60, 32, 35, 5, 21, 25, 239, 10, 96]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XSb = void 0);
				let c = class extends u.$ZSb {
					constructor(g, p, o, f, b, s, l, y, $, v, S, I) {
						super(
							g,
							{ mergeViewWithContainerWhenSingleView: !1 },
							l,
							o,
							f,
							$,
							b,
							v,
							y,
							s,
							S,
							I,
						),
							(this.c = new Map()),
							(this.r = new Map()),
							this.D(
								p((T) => {
									(this.t = T), this.Eb(T);
								}),
							),
							this.D(
								this.P.onDidChangeActiveViewDescriptors(() => {
									this.Ab(this.P.activeViewDescriptors);
								}),
							);
					}
					Ab(g) {
						g.forEach((p) => {
							const o = this.Cb(p);
							o &&
								(this.r.has(o) || this.r.set(o, new Map()),
								this.r.get(o).set(p.id, p),
								this.t &&
									!this.t.includes(o) &&
									this.panes.find((f) => f.id === p.id) &&
									this.P.setVisible(p.id, !1));
						});
					}
					Bb(g) {
						g.forEach((p) => this.c.set(p.id, p));
					}
					Eb(g) {
						this.r.size === 0 && this.Ab(this.P.activeViewDescriptors),
							this.Gb(g).forEach((p) => this.P.setVisible(p.id, !1)),
							this.Fb(g).forEach((p) => this.P.setVisible(p.id, !0));
					}
					Fb(g) {
						const p = [];
						for (let o = 0; o < g.length; o++)
							this.r.has(g[o]) &&
								p.push(...Array.from(this.r.get(g[o]).values()));
						return p;
					}
					Gb(g) {
						const p = this.r.keys();
						let o = p.next(),
							f = [];
						for (; !o.done; ) {
							let b = !1;
							g.forEach((s) => {
								o.value === s && (b = !0);
							}),
								b || (f = f.concat(this.Fb([o.value]))),
								(o = p.next());
						}
						return f;
					}
					tb(g) {
						const p = super.tb(g);
						for (let o = 0; o < g.length; o++)
							this.c.has(g[o].viewDescriptor.id) && p[o].setExpanded(!1);
						return (
							this.r.size === 0 && this.Ab(this.P.activeViewDescriptors), p
						);
					}
					openView(g, p) {
						const o = super.openView(g, p);
						if (o) {
							const f = Array.from(this.r.entries()).find((b) => b[1].has(g));
							f && !this.t?.includes(f[0]) && this.Db(f[1].get(g));
						}
						return o;
					}
				};
				(e.$XSb = c),
					(e.$XSb = c =
						Ne(
							[
								j(2, a.$gj),
								j(3, h.$mEb),
								j(4, E.$km),
								j(5, m.$lq),
								j(6, d.$Li),
								j(7, C.$iP),
								j(8, i.$Xxb),
								j(9, t.$q2),
								j(10, r.$Vi),
								j(11, w.$K1),
							],
							c,
						));
			},
		),
		define(
			de[4017],
			he([
				1, 0, 4, 7, 6, 15, 139, 240, 29, 30, 12, 55, 44, 20, 96, 21, 10, 52, 40,
				3402, 2949, 3623, 1698, 682, 3410, 127, 600, 463, 163, 3858, 24, 1615,
				4016, 87, 57, 740, 58, 75, 345, 72, 95, 317, 1650, 1496, 412, 2950, 455,
				2870, 1211, 1009, 232, 2952,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q3c = void 0);
				class ie extends M.$n3c {
					constructor(ee, _, te, Q) {
						super(ee),
							(this.hc = _),
							(this.ic = te),
							(this.fc = this.D(new w.$re())),
							(this.onWillShutdown = this.fc.event),
							(this.gc = this.D(new w.$re())),
							(this.onDidShutdown = this.gc.event),
							(this.kc = { message: void 0, time: 0 }),
							(0, d.mark)("code/willStartWorkbench"),
							this.jc(Q);
					}
					jc(ee) {
						B.$Bfb.addEventListener("unhandledrejection", (_) => {
							(0, m.$4)(_.reason), _.preventDefault();
						}),
							(0, m.setUnexpectedErrorHandler)((_) => this.lc(_, ee)),
							!K.$V &&
								typeof B.$Bfb.require?.config == "function" &&
								B.$Bfb.require.config({
									onError: (_) => {
										_.phase === "loading" &&
											(0, m.$4)(
												new Error(
													(0, t.localize)(3993, null, JSON.stringify(_)),
												),
											),
											console.error(_);
									},
								});
					}
					lc(ee, _) {
						const te = (0, P.$xj)(ee, !0);
						if (!te) return;
						const Q = Date.now();
						(te === this.kc.message && Q - this.kc.time <= 1e3) ||
							((this.kc.time = Q), (this.kc.message = te), _.error(te, ee));
					}
					startup() {
						try {
							this.D((0, w.$oe)(175));
							const ee = this.mc(this.ic);
							return (
								ee.invokeFunction((_) => {
									const te = _.get(o.$n6),
										Q = _.get(g.$lq),
										Z = _.get(p.$gj),
										se = _.get(N.$asb),
										re = _.get(z.$Uyb),
										le = _.get(A.$GO),
										oe = _.get(f.$4N);
									(0, F.$bib)((ae, pe) =>
										ee.createInstance(z.$Vyb, ae, pe, {}),
									),
										(0, x.$Zib)(re),
										this.ob(_),
										r.$Io.as(a.Extensions.Workbench).start(_),
										r.$Io.as(h.$a1.EditorFactory).start(_),
										this.D(ee.createInstance(k.$l3c)),
										this.nc(te, Q, Z, se, le),
										this.sc(ee, oe, Q, Z),
										this.Sb(),
										this.layout(),
										this.vc(te);
								}),
								ee
							);
						} catch (ee) {
							throw ((0, m.$4)(ee), ee);
						}
					}
					mc(ee) {
						ee.set(n.$mEb, this);
						const _ = (0, c.$mK)();
						for (const [Q, Z] of _) ee.set(Q, Z);
						const te = new D.$Yr(ee, !0);
						return (
							te.invokeFunction((Q) => {
								const Z = Q.get(o.$n6),
									se = Q.get(p.$gj);
								typeof se.acquireInstantiationService == "function" &&
									se.acquireInstantiationService(te),
									this.wc(Q),
									(Z.phase = o.LifecyclePhase.Ready);
							}),
							te
						);
					}
					nc(ee, _, te, Q, Z) {
						this.D(te.onDidChangeConfiguration((se) => this.pc(se, te))),
							u.$p
								? this.D(
										_.onWillSaveState((se) => {
											se.reason === g.WillSaveStateReason.SHUTDOWN &&
												this.rc(_);
										}),
									)
								: this.D(ee.onWillShutdown(() => this.rc(_))),
							this.D(ee.onWillShutdown((se) => this.fc.fire(se))),
							this.D(
								ee.onDidShutdown(() => {
									this.gc.fire(), this.dispose();
								}),
							),
							this.D(
								Q.onDidChangeFocus((se) => {
									se || _.flush();
								}),
							),
							this.D(
								Z.onWillShowDialog(() =>
									this.mainContainer.classList.add("modal-dialog-visible"),
								),
							),
							this.D(
								Z.onDidShowDialog(() =>
									this.mainContainer.classList.remove("modal-dialog-visible"),
								),
							);
					}
					pc(ee, _) {
						if (
							!u.$m ||
							(ee && !ee.affectsConfiguration("workbench.fontAliasing"))
						)
							return;
						const te = _.getValue("workbench.fontAliasing");
						if (this.oc === te) return;
						this.oc = te;
						const Q = ["antialiased", "none", "auto"];
						this.mainContainer.classList.remove(
							...Q.map((Z) => `monaco-font-aliasing-${Z}`),
						),
							Q.some((Z) => Z === te) &&
								this.mainContainer.classList.add(`monaco-font-aliasing-${te}`);
					}
					qc(ee, _) {
						const te = ee.get("editorFontInfo", g.StorageScope.APPLICATION);
						if (te)
							try {
								const Q = JSON.parse(te);
								Array.isArray(Q) && I.$osb.restoreFontInfo(B.$Bfb, Q);
							} catch {}
						I.$osb.readFontInfo(
							B.$Bfb,
							T.$OK.createFromRawSettings(
								_.getValue("editor"),
								U.$sjb.getInstance(B.$Bfb).value,
							),
						);
					}
					rc(ee) {
						const _ = I.$osb.serializeFontInfo(B.$Bfb);
						_ &&
							ee.store(
								"editorFontInfo",
								JSON.stringify(_),
								g.StorageScope.APPLICATION,
								g.StorageTarget.MACHINE,
							);
					}
					sc(ee, _, te, Q) {
						(0, S.$nib)(this.mainContainer),
							(0, q.$$ob)((oe, ae) => ee.createInstance(H.$LIc, oe, ae));
						const Z = u.$l ? "windows" : u.$n ? "linux" : "mac",
							se = (0, L.$Lb)([
								"monaco-workbench",
								Z,
								u.$r ? "web" : void 0,
								C.$Qfb
									? "chromium"
									: C.$Ofb
										? "firefox"
										: C.$Rfb
											? "safari"
											: void 0,
								...this.getLayoutClasses(),
								...(this.hc?.extraClasses ? this.hc.extraClasses : []),
							]);
						this.mainContainer.classList.add(...se),
							B.$Bfb.document.body.classList.add(Z),
							u.$r && B.$Bfb.document.body.classList.add("web");
						const re = (0, R.$vjb)();
						R.$ujb.set(B.$Bfb, re),
							this.mainContainer.appendChild(re),
							this.pc(void 0, Q),
							this.qc(te, Q);
						const le = Q.getValue(O.$LW);
						for (const { id: oe, role: ae, classes: pe, options: $e } of [
							{
								id: n.Parts.TITLEBAR_PART,
								role: "none",
								classes: ["titlebar"],
							},
							{ id: n.Parts.BANNER_PART, role: "banner", classes: ["banner"] },
							...(le === "vertical"
								? [
										{
											id: n.Parts.ACTIVITYBAR_PART,
											role: "none",
											classes: [
												"activitybar",
												this.getSideBarPosition() === n.Position.LEFT
													? "left"
													: "right",
											],
										},
									]
								: []),
							{
								id: n.Parts.SIDEBAR_PART,
								role: "none",
								classes: [
									"sidebar",
									this.getSideBarPosition() === n.Position.LEFT
										? "left"
										: "right",
								],
							},
							{
								id: n.Parts.EDITOR_PART,
								role: "main",
								classes: ["editor"],
								options: { restorePreviousState: this.Cb() },
							},
							{
								id: n.Parts.PANEL_PART,
								role: "none",
								classes: [
									"panel",
									"basepanel",
									(0, n.$oEb)(this.getPanelPosition()),
								],
							},
							{
								id: n.Parts.AUXILIARYBAR_PART,
								role: "none",
								classes: [
									"auxiliarybar",
									"basepanel",
									this.getSideBarPosition() === n.Position.LEFT
										? "right"
										: "left",
								],
							},
							{
								id: n.Parts.STATUSBAR_PART,
								role: "status",
								classes: ["statusbar"],
							},
						]) {
							const ye = this.tc(oe, ae, pe);
							(0, d.mark)(`code/willCreatePart/${oe}`),
								this.Lb(oe).create(ye, $e),
								(0, d.mark)(`code/didCreatePart/${oe}`);
						}
						this.uc(ee, _), this.nb.appendChild(this.mainContainer);
					}
					tc(ee, _, te) {
						const Q = document.createElement(_ === "status" ? "footer" : "div");
						return (
							Q.classList.add("part", ...te),
							(Q.id = ee),
							Q.setAttribute("role", _),
							_ === "status" && Q.setAttribute("aria-live", "off"),
							Q
						);
					}
					uc(ee, _) {
						const te = this.D(
								ee.createInstance(b.$h3c, this.mainContainer, _.model),
							),
							Q = this.D(
								ee.createInstance(v.$k3c, this.mainContainer, _.model),
							);
						this.D(ee.createInstance(s.$i3c, _.model));
						const Z = ee.createInstance(l.$j3c, _.model);
						this.D(ee.createInstance(y.$R2c)),
							this.D(
								te.onDidChangeVisibility(() => {
									Z.update(te.isVisible, Q.isVisible), Q.update(te.isVisible);
								}),
							),
							this.D(
								Q.onDidChangeVisibility(() => {
									Z.update(te.isVisible, Q.isVisible);
								}),
							),
							(0, $.$42c)(te, Q, _.model),
							V.$Whc.register(new G.$o3c()),
							this.registerNotifications({
								onDidChangeNotificationsVisibility: w.Event.map(
									w.Event.any(
										Q.onDidChangeVisibility,
										te.onDidChangeVisibility,
									),
									() => Q.isVisible || te.isVisible,
								),
							});
					}
					vc(ee) {
						try {
							this.Kb();
						} catch (_) {
							(0, m.$4)(_);
						}
						this.Hb.finally(() =>
							Promise.race([this.whenRestored, (0, E.$Nh)(2e3)]).finally(() => {
								function _() {
									(0, d.mark)("code/didStartWorkbench"),
										performance.measure(
											"perf: workbench create & restore",
											"code/didLoadWorkbenchMain",
											"code/didStartWorkbench",
										);
								}
								this.isRestored() ? _() : this.whenRestored.finally(() => _()),
									(ee.phase = o.LifecyclePhase.Restored),
									this.D(
										new E.$Yh(() => {
											this.D(
												(0, i.$egb)(
													B.$Bfb,
													() => (ee.phase = o.LifecyclePhase.Eventually),
													2500,
												),
											);
										}, 2500),
									).schedule();
							}),
						);
					}
					wc(ee) {
						const _ = ee.get(W.$jbb),
							te = ee.get(Y.$x6b),
							Q = ee.get(X.$fdc),
							Z = () => {
								const le = Q.cachedServerConfig.clientTracingConfig;
								le !== void 0 && _.setClientTracingConfig(le);
							};
						this.D(Q.onDidRefreshServerConfig(Z));
						const se = (le) => {
							_.setIsPrivacyMode(le ?? !0);
						};
						this.D(te.onDidPotentiallyChangePrivacyMode(se));
						const re = (le) => {
							le === !1
								? _.setUser(null, null)
								: te
										.getEmailAndSignUpType()
										.then(async ({ email: oe }) => {
											const ae = await te.getAccessToken(),
												pe = ae ? te.getAuthIdFromToken(ae) : void 0;
											_.setUser(oe ?? null, pe ?? null);
										})
										.catch(() => {
											_.setUser(null, null);
										});
						};
						te.addLoginChangedListener(re),
							Z(),
							se(te.reactivePrivacyMode()),
							re(),
							this.D((0, J.$p3c)("renderer", _));
					}
				}
				e.$q3c = ie;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4018],
		he([
			1, 0, 30, 55, 199, 3805, 60, 89, 100, 4, 239, 8, 66, 43, 27, 93, 102, 11,
			44, 33, 57, 111, 14, 79, 142,
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
			l,
			y,
			$,
			v,
		) {
			"use strict";
			var S;
			Object.defineProperty(e, "__esModule", { value: !0 }), (l = xi(l));
			async function I(M) {
				const N = await M.openView(E.$tNc.ID, !0);
				if (N instanceof E.$tNc) return N;
			}
			let T = class {
				constructor(N, A) {
					(this.b = N),
						(this.c = A),
						(this.a = N.getActivePaneComposite(
							C.ViewContainerLocation.Panel,
						)?.getId());
				}
				async restore(N, A) {
					if (
						(N &&
							(typeof this.a == "string"
								? await this.b.openPaneComposite(
										this.a,
										C.ViewContainerLocation.Panel,
									)
								: this.b.hideActivePaneComposite(
										C.ViewContainerLocation.Panel,
									)),
						A)
					)
						for (const R of this.c.groups) {
							const O = [];
							for (const B of R.editors)
								f.$A1.getCanonicalUri(B, {
									supportSideBySide: f.SideBySideEditor.PRIMARY,
								})?.scheme === E.$tNc.Schema && O.push(B);
							O.length && R.closeEditors(O, { preserveFocus: !0 });
						}
				}
			};
			T = Ne([j(0, v.$6Sb), j(1, h.$EY)], T);
			class P {
				constructor(N, A = new b.$Ce()) {
					(this.uxState = N), (this.cts = A);
				}
			}
			let k = class {
				static {
					S = this;
				}
				static {
					this.ID = "workbench.contrib.bulkEditPreview";
				}
				static {
					this.ctxEnabled = new a.$5j("refactorPreview.enabled", !1);
				}
				constructor(N, A, R, O, B, U) {
					(this.c = N),
						(this.d = A),
						(this.e = R),
						(this.f = O),
						B.setPreviewHandler((z) => this.g(z)),
						(this.a = S.ctxEnabled.bindTo(U));
				}
				async g(N) {
					this.a.set(!0);
					const A = this.b?.uxState ?? new T(this.c, this.e),
						R = await I(this.d);
					if (!R) return this.a.set(!1), N;
					if (R.hasInput()) {
						const { confirmed: B } = await this.f.confirm({
							type: l.default.Info,
							message: (0, r.localize)(4480, null),
							detail: (0, r.localize)(4481, null),
							primaryButton: (0, r.localize)(4482, null),
						});
						if (!B) return [];
					}
					let O;
					this.b
						? (await this.b.uxState.restore(!1, !0),
							this.b.cts.dispose(!0),
							(O = new P(A)))
						: (O = new P(A)),
						(this.b = O);
					try {
						return (await R.setInput(N, O.cts.token)) ?? [];
					} finally {
						this.b === O &&
							(await this.b.uxState.restore(!0, !0),
							this.b.cts.dispose(),
							this.a.set(!1),
							(this.b = void 0));
					}
				}
			};
			(k = S =
				Ne(
					[
						j(0, v.$6Sb),
						j(1, d.$HMb),
						j(2, h.$EY),
						j(3, s.$GO),
						j(4, w.$rzb),
						j(5, a.$6j),
					],
					k,
				)),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.apply",
								title: (0, r.localize2)(4484, "Apply Refactoring"),
								category: (0, r.localize2)(4485, "Refactor Preview"),
								icon: y.$ak.check,
								precondition: a.$Kj.and(
									k.ctxEnabled,
									E.$tNc.ctxHasCheckedChanges,
								),
								menu: [{ id: o.$XX.BulkEditContext, order: 1 }],
								keybinding: {
									weight: c.KeybindingWeight.EditorContrib - 10,
									when: a.$Kj.and(k.ctxEnabled, m.$zQb.isEqualTo(E.$tNc.ID)),
									primary: n.KeyMod.CtrlCmd + n.KeyCode.Enter,
								},
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.accept();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.discard",
								title: (0, r.localize2)(4486, "Discard Refactoring"),
								category: (0, r.localize2)(4487, "Refactor Preview"),
								icon: y.$ak.clearAll,
								precondition: k.ctxEnabled,
								menu: [{ id: o.$XX.BulkEditContext, order: 2 }],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.discard();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.toggleCheckedState",
								title: (0, r.localize2)(4488, "Toggle Change"),
								category: (0, r.localize2)(4489, "Refactor Preview"),
								precondition: k.ctxEnabled,
								keybinding: {
									weight: c.KeybindingWeight.WorkbenchContrib,
									when: g.$nMb,
									primary: n.KeyCode.Space,
								},
								menu: { id: o.$XX.BulkEditContext, group: "navigation" },
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.toggleChecked();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.groupByFile",
								title: (0, r.localize2)(4490, "Group Changes By File"),
								category: (0, r.localize2)(4491, "Refactor Preview"),
								icon: y.$ak.ungroupByRefType,
								precondition: a.$Kj.and(
									E.$tNc.ctxHasCategories,
									E.$tNc.ctxGroupByFile.negate(),
									k.ctxEnabled,
								),
								menu: [
									{
										id: o.$XX.BulkEditTitle,
										when: a.$Kj.and(
											E.$tNc.ctxHasCategories,
											E.$tNc.ctxGroupByFile.negate(),
										),
										group: "navigation",
										order: 3,
									},
								],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.groupByFile();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.groupByType",
								title: (0, r.localize2)(4492, "Group Changes By Type"),
								category: (0, r.localize2)(4493, "Refactor Preview"),
								icon: y.$ak.groupByRefType,
								precondition: a.$Kj.and(
									E.$tNc.ctxHasCategories,
									E.$tNc.ctxGroupByFile,
									k.ctxEnabled,
								),
								menu: [
									{
										id: o.$XX.BulkEditTitle,
										when: a.$Kj.and(
											E.$tNc.ctxHasCategories,
											E.$tNc.ctxGroupByFile,
										),
										group: "navigation",
										order: 3,
									},
								],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.groupByType();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.toggleGrouping",
								title: (0, r.localize2)(4494, "Group Changes By Type"),
								category: (0, r.localize2)(4495, "Refactor Preview"),
								icon: y.$ak.listTree,
								toggled: E.$tNc.ctxGroupByFile.negate(),
								precondition: a.$Kj.and(E.$tNc.ctxHasCategories, k.ctxEnabled),
								menu: [{ id: o.$XX.BulkEditContext, order: 3 }],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.toggleGrouping();
						}
					},
				),
				(0, i.$s6)(k.ID, k, i.WorkbenchPhase.BlockRestore);
			const L = (0, $.$$O)(
					"refactor-preview-view-icon",
					y.$ak.lightbulb,
					(0, r.localize)(4483, null),
				),
				D = t.$Io
					.as(C.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: E.$tNc.ID,
							title: (0, r.localize2)(4496, "Refactor Preview"),
							hideIfEmpty: !0,
							ctorDescriptor: new p.$Ji(u.$ZSb, [
								E.$tNc.ID,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							icon: L,
							storageId: E.$tNc.ID,
						},
						C.ViewContainerLocation.Panel,
					);
			t.$Io
				.as(C.Extensions.ViewsRegistry)
				.registerViews(
					[
						{
							id: E.$tNc.ID,
							name: (0, r.localize2)(4497, "Refactor Preview"),
							when: k.ctxEnabled,
							ctorDescriptor: new p.$Ji(E.$tNc),
							containerIcon: L,
						},
					],
					D,
				);
		},
	),
		define(
			de[1942],
			he([
				1, 0, 35, 39, 49, 10, 8, 4, 112, 18, 146, 5, 60, 30, 41, 100, 853, 12,
				56, 21, 32, 3, 425, 72,
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
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Qc = void 0);
				const v = "debugStartLanguage",
					S = new C.$5j(v, void 0),
					I = new C.$5j("debuggerInterestedInActiveEditor", !1);
				let T = class extends u.$TMb {
					static {
						this.ID = "workbench.debug.welcome";
					}
					static {
						this.LABEL = (0, d.localize2)(5767, "Run");
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V) {
						super(D, N, A, R, O, F, z, x, M, q, V),
							(this.c = B),
							(this.f = U),
							(this.a = S.bindTo(O)),
							(this.b = I.bindTo(O));
						const G = H.get(v, b.StorageScope.WORKSPACE);
						this.a.set(G);
						const K = () => {
								let X = this.f.activeTextEditorControl;
								if (
									((0, f.$$sb)(X) && (X = X.getModifiedEditor()),
									(0, f.$0sb)(X))
								) {
									const Y = X.getModel(),
										ie = Y ? Y.getLanguageId() : void 0;
									if (
										ie &&
										this.c
											.getAdapterManager()
											.someDebuggerInterestedInLanguage(ie)
									) {
										this.a.set(ie),
											this.b.set(!0),
											H.store(
												v,
												ie,
												b.StorageScope.WORKSPACE,
												b.StorageTarget.MACHINE,
											);
										return;
									}
								}
								this.b.set(!1);
							},
							J = new l.$Zc();
						this.D(J),
							this.D(
								U.onDidActiveEditorChange(() => {
									J.clear();
									let X = this.f.activeTextEditorControl;
									(0, f.$$sb)(X) && (X = X.getModifiedEditor()),
										(0, f.$0sb)(X) && J.add(X.onDidChangeModelLanguage(K)),
										K();
								}),
							),
							this.D(this.c.getAdapterManager().onDidRegisterDebugger(K)),
							this.D(
								this.onDidChangeBodyVisibility((X) => {
									X && K();
								}),
							),
							K();
						const W = this.yb.lookupKeybinding(y.$lHc);
						k = W ? ` (${W.getLabel()})` : "";
					}
					shouldShowWelcome() {
						return !0;
					}
				};
				(e.$7Qc = T),
					(e.$7Qc = T =
						Ne(
							[
								j(1, t.$iP),
								j(2, i.$uZ),
								j(3, w.$Xxb),
								j(4, E.$gj),
								j(5, C.$6j),
								j(6, m.$75),
								j(7, r.$IY),
								j(8, a.$Li),
								j(9, h.$K1),
								j(10, n.$7rb),
								j(11, b.$lq),
								j(12, s.$km),
								j(13, $.$Uyb),
							],
							T,
						));
				const P = c.$Io.as(h.Extensions.ViewsRegistry);
				P.registerViewWelcomeContent(T.ID, {
					content: (0, d.localize)(
						5761,
						null,
						o.$m && !o.$r ? p.$Jtc.ID : p.$Gtc.ID,
					),
					when: C.$Kj.and(m.$y5, I.toNegated()),
					group: h.ViewContentGroups.Open,
				});
				let k = "";
				P.registerViewWelcomeContent(T.ID, {
					content: `[${(0, d.localize)(5762, null)}${k}](command:${y.$lHc})`,
					when: m.$y5,
					group: h.ViewContentGroups.Debug,
					order: 1,
				}),
					P.registerViewWelcomeContent(T.ID, {
						content: `[${(0, d.localize)(5763, null)}](command:${y.$hHc}).`,
						when: m.$y5,
						group: h.ViewContentGroups.Debug,
						order: 10,
					}),
					P.registerViewWelcomeContent(T.ID, {
						content: (0, d.localize)(5764, null, y.$kHc),
						when: C.$Kj.and(m.$y5, g.$wPb.notEqualsTo("empty")),
						group: h.ViewContentGroups.Debug,
					}),
					P.registerViewWelcomeContent(T.ID, {
						content: (0, d.localize)(
							5765,
							null,
							o.$m && !o.$r ? p.$Jtc.ID : p.$Htc.ID,
						),
						when: C.$Kj.and(m.$y5, g.$wPb.isEqualTo("empty")),
						group: h.ViewContentGroups.Debug,
					}),
					P.registerViewWelcomeContent(T.ID, {
						content: (0, d.localize)(5766, null),
						when: m.$z5.toNegated(),
						group: h.ViewContentGroups.Debug,
					});
			},
		),
		define(
			de[1943],
			he([
				1, 0, 3, 4, 92, 11, 10, 8, 49, 5, 84, 63, 21, 32, 35, 25, 239, 100, 60,
				89, 1332, 425, 352, 1333, 1942, 112, 53, 96, 2431,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Qc = void 0),
					(i = mt(i));
				let P = class extends p.$ZSb {
					constructor(L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(
							S.$Q4,
							{ mergeViewWithContainerWhenSingleView: !0 },
							A,
							F,
							L,
							U,
							D,
							z,
							B,
							O,
							R,
							q,
						),
							(this.Bb = M),
							(this.Cb = N),
							(this.Db = x),
							(this.Eb = H),
							(this.$ = new Map()),
							(this.Ab = this.D(new t.$Zc())),
							this.D(this.Cb.onDidChangeState((V) => this.Fb(V))),
							this.D(
								this.Eb.onDidChangeContext((V) => {
									V.affectsSome(new Set([S.$44, "inDebugMode"])) && this.mb();
								}),
							),
							this.D(this.ib.onDidChangeWorkbenchState(() => this.mb())),
							this.D(
								this.cb.onDidChangeConfiguration((V) => {
									(V.affectsConfiguration("debug.toolBarLocation") ||
										V.affectsConfiguration(
											"debug.hideLauncherWhileDebugging",
										)) &&
										this.mb();
								}),
							);
					}
					create(L) {
						super.create(L), L.classList.add("debug-viewlet");
					}
					focus() {
						super.focus(), this.c ? this.c.focus() : this.focusView(v.$7Qc.ID);
					}
					getActionViewItem(L, D) {
						if (L.id === l.$lHc)
							return (
								(this.c = this.bb.createInstance(s.$yJc, null, L, D)), this.c
							);
						if (L.id === l.$gHc)
							return new s.$zJc(L, void 0, this.Cb, this.Db, this.cb);
						if (L.id === l.$_Gc || L.id === l.$0Gc) {
							this.Ab.clear();
							const M = this.bb.invokeFunction((N) =>
								(0, $.$kQc)(L, this.Ab, N, { hoverDelegate: D.hoverDelegate }),
							);
							if (M) return M;
						}
						return (0, w.$Pyb)(this.bb, L, D);
					}
					focusView(L) {
						const D = this.getView(L);
						D && D.focus();
					}
					Fb(L) {
						this.r && (this.r(), (this.r = void 0)),
							L === S.State.Initializing &&
								this.Bb.withProgress(
									{ location: S.$Q4 },
									(D) => new Promise((M) => (this.r = M)),
								);
					}
					addPanes(L) {
						super.addPanes(L);
						for (const { pane: D } of L)
							D.id === S.$V4
								? ((this.t = D), this.Gb())
								: this.$.set(
										D.id,
										D.onDidChange(() => this.Gb()),
									);
					}
					removePanes(L) {
						super.removePanes(L);
						for (const D of L)
							(0, t.$Vc)(this.$.get(D.id)), this.$.delete(D.id);
					}
					Gb() {
						if (this.t) {
							const L = this.panes.every(
								(D) => !D.isExpanded() || D === this.t,
							);
							this.t.maximumBodySize = L
								? Number.POSITIVE_INFINITY
								: this.t.minimumBodySize;
						}
					}
				};
				(e.$8Qc = P),
					(e.$8Qc = P =
						Ne(
							[
								j(0, T.$mEb),
								j(1, c.$km),
								j(2, u.$8N),
								j(3, S.$75),
								j(4, r.$Li),
								j(5, g.$Vi),
								j(6, h.$lq),
								j(7, n.$iP),
								j(8, m.$Xxb),
								j(9, I.$q2),
								j(10, C.$gj),
								j(11, m.$Wxb),
								j(12, d.$6j),
								j(13, f.$K1),
							],
							P,
						)),
					E.$ZX.appendMenuItem(E.$XX.ViewContainerTitle, {
						when: d.$Kj.and(
							d.$Kj.equals("viewContainer", S.$Q4),
							S.$54.notEqualsTo("simple"),
							o.$wPb.notEqualsTo("empty"),
							d.$Kj.or(
								S.$24.isEqualTo("inactive"),
								d.$Kj.notEquals("config.debug.toolBarLocation", "docked"),
							),
							d.$Kj.or(
								d.$Kj.not("config.debug.hideLauncherWhileDebugging"),
								d.$Kj.not("inDebugMode"),
							),
						),
						order: 10,
						group: "navigation",
						command: {
							precondition: S.$24.notEqualsTo((0, S.$45)(S.State.Initializing)),
							id: l.$lHc,
							title: l.$QHc,
						},
					}),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: l.$kHc,
									title: {
										value: l.$PHc,
										original: "Open 'launch.json'",
										mnemonicTitle: i.localize(5658, null),
									},
									metadata: {
										description: i.localize2(
											5662,
											"Opens the file used to configure how your program is debugged",
										),
									},
									f1: !0,
									icon: y.$vKb,
									precondition: S.$54.notEqualsTo("simple"),
									menu: [
										{
											id: E.$XX.ViewContainerTitle,
											group: "navigation",
											order: 20,
											when: d.$Kj.and(
												d.$Kj.equals("viewContainer", S.$Q4),
												S.$54.notEqualsTo("simple"),
												o.$wPb.notEqualsTo("empty"),
												d.$Kj.or(
													S.$24.isEqualTo("inactive"),
													d.$Kj.notEquals(
														"config.debug.toolBarLocation",
														"docked",
													),
												),
											),
										},
										{
											id: E.$XX.ViewContainerTitle,
											order: 20,
											when: d.$Kj.and(
												d.$Kj.equals("viewContainer", S.$Q4),
												S.$24.notEqualsTo("inactive"),
												d.$Kj.equals("config.debug.toolBarLocation", "docked"),
											),
										},
										{
											id: E.$XX.MenubarDebugMenu,
											group: "2_configuration",
											order: 1,
											when: S.$y5,
										},
									],
								});
							}
							async run(k) {
								const L = k.get(S.$75),
									D = k.get(a.$DJ),
									M = L.getConfigurationManager();
								let N;
								if (M.selectedConfiguration.name)
									N = M.selectedConfiguration.launch;
								else {
									const A = M.getLaunches().filter((R) => !R.hidden);
									if (A.length === 1) N = A[0];
									else {
										const R = A.map((B) => ({ label: B.name, launch: B })),
											O = await D.pick(R, {
												activeItem: R[0],
												placeHolder: i.localize(5659, null),
											});
										O && (N = O.launch);
									}
								}
								N && (await N.openConfigFile({ preserveFocus: !1 }));
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "debug.toggleReplIgnoreFocus",
									title: i.localize(5660, null),
									toggled: d.$Kj.has(`view.${S.$Y4}.visible`),
									menu: [
										{
											id: p.$YSb,
											group: "3_toggleRepl",
											order: 30,
											when: d.$Kj.and(d.$Kj.equals("viewContainer", S.$Q4)),
										},
									],
								});
							}
							async run(k) {
								const L = k.get(b.$HMb);
								L.isViewVisible(S.$Y4)
									? L.closeView(S.$Y4)
									: await L.openView(S.$Y4);
							}
						},
					),
					E.$ZX.appendMenuItem(E.$XX.ViewContainerTitle, {
						when: d.$Kj.and(
							d.$Kj.equals("viewContainer", S.$Q4),
							S.$24.notEqualsTo("inactive"),
							d.$Kj.or(
								d.$Kj.equals("config.debug.toolBarLocation", "docked"),
								d.$Kj.has("config.debug.hideLauncherWhileDebugging"),
							),
						),
						order: 10,
						command: { id: l.$hHc, title: i.localize(5661, null) },
					});
			},
		),
		define(
			de[4019],
			he([
				1, 0, 27, 23, 12, 46, 4, 412, 11, 81, 8, 102, 20, 348, 30, 192, 239, 55,
				44, 60, 1331, 1049, 796, 3822, 3826, 984, 425, 3818, 3815, 1906, 352,
				3816, 3819, 3821, 3629, 3740, 1333, 1943, 1881, 3823, 847, 3630, 1334,
				3829, 1942, 112, 1800, 3423, 1039, 797, 3118, 261, 52, 3825, 3056, 3827,
				3682, 2428, 2429, 3553,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(C = mt(C)),
					(L = mt(L));
				const Z = C.localize(5287, null);
				(0, S.$OKb)(),
					(0, h.$lK)(G.$75, N.$3Qc, h.InstantiationType.Delayed),
					(0, h.$lK)(W.$D3, W.$F3, h.InstantiationType.Delayed),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							A.$5Qc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							D.$JQc,
							ne.LifecyclePhase.Eventually,
						),
					w.$r &&
						n.$Io
							.as(o.Extensions.Workbench)
							.registerWorkbenchContribution(
								R.$6Qc,
								ne.LifecyclePhase.Eventually,
							),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(O.$jQc, ne.LifecyclePhase.Restored),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							K.$9Qc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							x.$cRc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							U.$kGc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							J.$kRc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(c.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: M.$KQc,
							prefix: I.$5Hc,
							contextKey: "inLaunchConfigurationsPicker",
							placeholder: C.localize(5288, null),
							helpEntries: [
								{
									description: C.localize(5289, null),
									commandId: I.$hHc,
									commandCenterOrder: 50,
								},
							],
						}),
					n.$Io
						.as(c.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: T.$qQc,
							prefix: I.$6Hc,
							contextKey: "inDebugConsolePicker",
							placeholder: C.localize(5290, null),
							helpEntries: [
								{ description: C.localize(5291, null), commandId: I.$iHc },
							],
						}),
					(0, E.$qtb)(
						"editor.contrib.callStack",
						y.$iGc,
						E.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, E.$qtb)(
						G.$15,
						s.$rGc,
						E.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, E.$qtb)(
						G.$Z5,
						k.$IQc,
						E.EditorContributionInstantiation.BeforeFirstInteraction,
					);
				const se = ($e, ye, ue, fe) => {
					m.$ZX.appendMenuItem(m.$XX.CommandPalette, {
						when: u.$Kj.and(G.$y5, ue),
						group: Z,
						command: { id: $e, title: ye, category: I.$AHc, precondition: fe },
					});
				};
				se(I.$3Gc, I.$BHc),
					se(I.$4Gc, C.localize2(5383, "Terminate Thread"), G.$74),
					se(I.$5Gc, I.$CHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$6Gc, I.$DHc, G.$74, G.$24.isEqualTo("stopped")),
					se(
						I.$7Gc,
						I.$GHc,
						G.$74,
						u.$Kj.and(G.$w5, G.$74, G.$24.isEqualTo("stopped")),
					),
					se(I.$8Gc, I.$HHc, G.$74, G.$24.isEqualTo("stopped")),
					se(
						I.$9Gc,
						I.$IHc,
						G.$74,
						u.$Kj.and(G.$24.isEqualTo("running"), G.$r5.toNegated()),
					),
					se(I.$0Gc, I.$JHc, G.$74, u.$Kj.or(G.$q5, G.$H5)),
					se(I.$$Gc, I.$KHc, G.$74, u.$Kj.or(G.$q5, u.$Kj.and(G.$I5, G.$H5))),
					se(I.$_Gc, I.$LHc, G.$74, u.$Kj.or(G.$q5.toNegated(), G.$H5)),
					se(I.$bHc, I.$MHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$eHc, C.localize2(5384, "Focus on Debug Console View")),
					se(I.$fHc, C.localize2(5385, "Jump to Cursor"), G.$v5),
					se(I.$fHc, C.localize2(5386, "Set Next Statement"), G.$v5),
					se(P.$rQc.ID, P.$rQc.LABEL, G.$y5),
					se(P.$sQc.ID, P.$sQc.LABEL, G.$74),
					se(P.$tQc.ID, P.$tQc.LABEL),
					se(I.$YGc, C.localize2(5387, "Inline Breakpoint")),
					se(
						I.$lHc,
						I.$QHc,
						u.$Kj.and(
							G.$y5,
							G.$24.notEqualsTo((0, G.$45)(G.State.Initializing)),
						),
					),
					se(
						I.$mHc,
						I.$RHc,
						u.$Kj.and(
							G.$y5,
							G.$24.notEqualsTo((0, G.$45)(G.State.Initializing)),
						),
					),
					se(
						I.$hHc,
						I.$OHc,
						u.$Kj.and(
							G.$y5,
							G.$24.notEqualsTo((0, G.$45)(G.State.Initializing)),
						),
					),
					se(I.$qHc, I.$SHc),
					se(I.$rHc, I.$THc),
					se(I.$sHc, I.$UHc, G.$74),
					se(I.$iHc, I.$3Hc),
					se(I.$jHc, I.$4Hc),
					se(I.$tHc, I.$VHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$uHc, I.$WHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$vHc, I.$XHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$wHc, I.$YHc, G.$74, G.$24.isEqualTo("stopped"));
				const re = ($e, ye, ue, fe, me, ve, ge = "navigation", be) => {
					m.$ZX.appendMenuItem($e, {
						group: ge,
						when: me,
						order: fe,
						icon: be,
						command: { id: ye, title: ue, icon: be, precondition: ve },
					});
				};
				if (
					(re(
						m.$XX.DebugCallStackContext,
						I.$3Gc,
						I.$BHc,
						10,
						G.$e5.isEqualTo("session"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$0Gc,
						I.$JHc,
						20,
						G.$e5.isEqualTo("session"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$$Gc,
						I.$KHc,
						21,
						u.$Kj.and(G.$e5.isEqualTo("session"), G.$I5, G.$H5),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$_Gc,
						I.$LHc,
						30,
						G.$e5.isEqualTo("session"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$9Gc,
						I.$IHc,
						10,
						u.$Kj.and(
							G.$e5.isEqualTo("thread"),
							u.$Kj.and(G.$24.isEqualTo("running"), G.$r5.toNegated()),
						),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$bHc,
						I.$MHc,
						10,
						u.$Kj.and(G.$e5.isEqualTo("thread"), G.$24.isEqualTo("stopped")),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$5Gc,
						I.$CHc,
						20,
						G.$e5.isEqualTo("thread"),
						G.$24.isEqualTo("stopped"),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$6Gc,
						I.$DHc,
						30,
						G.$e5.isEqualTo("thread"),
						G.$24.isEqualTo("stopped"),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$8Gc,
						I.$HHc,
						40,
						G.$e5.isEqualTo("thread"),
						G.$24.isEqualTo("stopped"),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$4Gc,
						C.localize(5292, null),
						10,
						G.$e5.isEqualTo("thread"),
						void 0,
						"termination",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$aHc,
						C.localize(5293, null),
						10,
						u.$Kj.and(G.$e5.isEqualTo("stackFrame"), G.$t5),
						G.$u5,
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$ZGc,
						C.localize(5294, null),
						20,
						G.$e5.isEqualTo("stackFrame"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$zQc,
						C.localize(5295, null),
						15,
						G.$j5,
						G.$74,
						"inline",
						L.$KKb,
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$yQc,
						C.localize(5296, null),
						10,
						u.$Kj.or(G.$B5, u.$Kj.and(G.$J5, G.$D5)),
						G.$K5.toNegated(),
						"3_modification",
					),
					re(
						m.$XX.DebugVariablesContext,
						I.$zHc,
						I.$1Hc,
						10,
						void 0,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugVariablesContext,
						I.$yHc,
						I.$ZHc,
						20,
						G.$J5,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugVariablesContext,
						I.$xHc,
						I.$2Hc,
						100,
						G.$J5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$CQc,
						C.localize(5297, null),
						200,
						G.$G5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$AQc,
						C.localize(5298, null),
						210,
						G.$E5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$BQc,
						C.localize(5299, null),
						220,
						G.$F5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$zQc,
						C.localize(5300, null),
						15,
						G.$j5,
						G.$74,
						"inline",
						L.$KKb,
					),
					re(
						m.$XX.DebugHoverContext,
						I.$zHc,
						I.$1Hc,
						10,
						void 0,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugHoverContext,
						I.$yHc,
						I.$ZHc,
						20,
						G.$J5,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugHoverContext,
						I.$xHc,
						I.$2Hc,
						100,
						G.$J5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$CQc,
						C.localize(5301, null),
						200,
						G.$G5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$AQc,
						C.localize(5302, null),
						210,
						G.$E5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$BQc,
						C.localize(5303, null),
						220,
						G.$F5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugWatchContext,
						q.$gRc,
						q.$hRc,
						10,
						void 0,
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						I.$nHc,
						C.localize(5304, null),
						20,
						G.$i5.isEqualTo("expression"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						I.$oHc,
						C.localize(5305, null),
						30,
						u.$Kj.or(
							u.$Kj.and(G.$i5.isEqualTo("expression"), G.$D5),
							u.$Kj.and(G.$i5.isEqualTo("variable"), G.$B5),
						),
						G.$K5.toNegated(),
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						I.$zHc,
						C.localize(5306, null),
						40,
						u.$Kj.or(
							G.$i5.isEqualTo("expression"),
							G.$i5.isEqualTo("variable"),
						),
						G.$74,
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						H.$zQc,
						C.localize(5307, null),
						10,
						G.$j5,
						void 0,
						"inline",
						L.$KKb,
					),
					re(
						m.$XX.DebugWatchContext,
						I.$pHc,
						C.localize(5308, null),
						20,
						G.$i5.isEqualTo("expression"),
						void 0,
						"inline",
						L.$CKb,
					),
					re(
						m.$XX.DebugWatchContext,
						q.$iRc,
						q.$jRc,
						20,
						void 0,
						void 0,
						"z_commands",
					),
					re(m.$XX.NotebookVariablesContext, Y.$lRc, Y.$mRc, 20, G.$L5),
					w.$m)
				) {
					const $e = (ye, ue, fe, me, ve) => {
						m.$ZX.appendMenuItem(m.$XX.TouchBarContext, {
							command: { id: ye, title: ue, icon: { dark: ve } },
							when: u.$Kj.and(G.$y5, me),
							group: "9_debug",
							order: fe,
						});
					};
					$e(
						I.$mHc,
						I.$RHc,
						0,
						G.$74.toNegated(),
						i.$7g.asFileUri(
							"vs/workbench/contrib/debug/browser/media/continue-tb.png",
						),
					),
						$e(
							I.$lHc,
							I.$QHc,
							1,
							G.$74.toNegated(),
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/run-with-debugging-tb.png",
							),
						),
						$e(
							I.$bHc,
							I.$MHc,
							0,
							G.$24.isEqualTo("stopped"),
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/continue-tb.png",
							),
						),
						$e(
							I.$9Gc,
							I.$IHc,
							1,
							u.$Kj.and(
								G.$74,
								u.$Kj.and(G.$24.isEqualTo("running"), G.$r5.toNegated()),
							),
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/pause-tb.png",
							),
						),
						$e(
							I.$5Gc,
							I.$CHc,
							2,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stepover-tb.png",
							),
						),
						$e(
							I.$6Gc,
							I.$DHc,
							3,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stepinto-tb.png",
							),
						),
						$e(
							I.$8Gc,
							I.$HHc,
							4,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stepout-tb.png",
							),
						),
						$e(
							I.$3Gc,
							I.$BHc,
							5,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/restart-tb.png",
							),
						),
						$e(
							I.$_Gc,
							I.$LHc,
							6,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stop-tb.png",
							),
						);
				}
				m.$ZX.appendMenuItem(m.$XX.EditorTitle, {
					submenu: m.$XX.EditorTitleRun,
					rememberDefaultAction: !0,
					title: C.localize2(5388, "Run or Debug..."),
					icon: L.$rKb,
					group: "navigation",
					order: -1,
				}),
					m.$ZX.appendMenuItem(m.$XX.MenubarMainMenu, {
						submenu: m.$XX.MenubarDebugMenu,
						title: {
							...C.localize2(5389, "Run"),
							mnemonicTitle: C.localize(5309, null),
						},
						order: 6,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: { id: I.$lHc, title: C.localize(5310, null) },
						order: 1,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: { id: I.$mHc, title: C.localize(5311, null) },
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: {
							id: I.$_Gc,
							title: C.localize(5312, null),
							precondition: G.$74,
						},
						order: 3,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: {
							id: I.$3Gc,
							title: C.localize(5313, null),
							precondition: G.$74,
						},
						order: 4,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "2_configuration",
						command: { id: I.$XGc, title: C.localize(5314, null) },
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$5Gc,
							title: C.localize(5315, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 1,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$6Gc,
							title: C.localize(5316, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$8Gc,
							title: C.localize(5317, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 3,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$bHc,
							title: C.localize(5318, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 4,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarNewBreakpointMenu, {
						group: "1_breakpoints",
						command: { id: I.$YGc, title: C.localize(5319, null) },
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "4_new_breakpoint",
						title: C.localize(5320, null),
						submenu: m.$XX.MenubarNewBreakpointMenu,
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "z_install",
						command: {
							id: "debug.installAdditionalDebuggers",
							title: C.localize(5321, null),
						},
						order: 1,
					});
				const le = n.$Io
					.as(b.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: G.$X4,
							title: C.localize2(5390, "Debug Console"),
							icon: L.$1Jb,
							ctorDescriptor: new a.$Ji(p.$ZSb, [
								G.$X4,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							storageId: G.$X4,
							hideIfEmpty: !0,
							order: 2,
						},
						b.ViewContainerLocation.Panel,
						{ doNotRegisterOpenCommand: !0 },
					);
				n.$Io
					.as(b.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: G.$Y4,
								name: C.localize2(5391, "Debug Console"),
								containerIcon: L.$1Jb,
								canToggleVisibility: !1,
								canMoveView: !0,
								when: G.$y5,
								ctorDescriptor: new a.$Ji(F.Repl),
								openCommandActionDescriptor: {
									id: "workbench.debug.action.toggleRepl",
									mnemonicTitle: C.localize(5322, null),
									keybindings: {
										primary:
											t.KeyMod.CtrlCmd |
											t.KeyMod.Shift |
											t.KeyMod.Alt |
											t.KeyCode.KeyY,
									},
									order: 2,
								},
							},
						],
						le,
					);
				const oe = n.$Io
						.as(b.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: G.$Q4,
								title: C.localize2(5392, "Run and Debug"),
								openCommandActionDescriptor: {
									id: G.$Q4,
									mnemonicTitle: C.localize(5323, null),
									keybindings: {
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyD,
									},
									order: 3,
								},
								ctorDescriptor: new a.$Ji(B.$8Qc),
								icon: L.$2Jb,
								alwaysUseContainerInfo: !0,
								order: 3,
								wantsActionToolbar: !0,
							},
							b.ViewContainerLocation.Sidebar,
						),
					ae = n.$Io.as(b.Extensions.ViewsRegistry);
				ae.registerViews(
					[
						{
							id: G.$R4,
							name: C.localize2(5393, "Variables"),
							containerIcon: L.$3Jb,
							ctorDescriptor: new a.$Ji(H.$uQc),
							order: 10,
							weight: 40,
							canToggleVisibility: !0,
							canMoveView: !0,
							focusCommand: { id: "workbench.debug.action.focusVariablesView" },
							when: G.$54.isEqualTo("default"),
						},
					],
					oe,
				),
					ae.registerViews(
						[
							{
								id: G.$S4,
								name: C.localize2(5394, "Watch"),
								containerIcon: L.$4Jb,
								ctorDescriptor: new a.$Ji(q.$eRc),
								order: 20,
								weight: 10,
								canToggleVisibility: !0,
								canMoveView: !0,
								focusCommand: { id: "workbench.debug.action.focusWatchView" },
								when: G.$54.isEqualTo("default"),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: G.$T4,
								name: C.localize2(5395, "Call Stack"),
								containerIcon: L.$5Jb,
								ctorDescriptor: new a.$Ji($.$oQc),
								order: 30,
								weight: 30,
								canToggleVisibility: !0,
								canMoveView: !0,
								focusCommand: {
									id: "workbench.debug.action.focusCallStackView",
								},
								when: G.$54.isEqualTo("default"),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: G.$V4,
								name: C.localize2(5396, "Breakpoints"),
								containerIcon: L.$6Jb,
								ctorDescriptor: new a.$Ji(l.$mGc),
								order: 40,
								weight: 20,
								canToggleVisibility: !0,
								canMoveView: !0,
								focusCommand: {
									id: "workbench.debug.action.focusBreakpointsView",
								},
								when: u.$Kj.or(G.$x5, G.$54.isEqualTo("default"), G.$64),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: V.$7Qc.ID,
								name: V.$7Qc.LABEL,
								containerIcon: L.$2Jb,
								ctorDescriptor: new a.$Ji(V.$7Qc),
								order: 1,
								weight: 40,
								canToggleVisibility: !0,
								when: G.$54.isEqualTo("simple"),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: G.$U4,
								name: C.localize2(5397, "Loaded Scripts"),
								containerIcon: L.$7Jb,
								ctorDescriptor: new a.$Ji(z.$0Qc),
								order: 35,
								weight: 5,
								canToggleVisibility: !0,
								canMoveView: !0,
								collapsed: !0,
								when: u.$Kj.and(G.$o5, G.$54.isEqualTo("default")),
							},
						],
						oe,
					),
					n.$Io
						.as(f.$a1.EditorPane)
						.registerEditorPane(
							g.$vVb.create(U.$jGc, G.$W4, C.localize(5324, null)),
							[new a.$Ji(X.$G3)],
						),
					n.$Io
						.as(r.$No.Configuration)
						.registerConfiguration({
							id: "debug",
							order: 20,
							title: C.localize(5325, null),
							type: "object",
							properties: {
								"debug.showVariableTypes": {
									type: "boolean",
									description: C.localize(5326, null),
									default: !1,
								},
								"debug.allowBreakpointsEverywhere": {
									type: "boolean",
									description: C.localize(5327, null),
									default: !1,
								},
								"debug.gutterMiddleClickAction": {
									type: "string",
									enum: [
										"logpoint",
										"conditionalBreakpoint",
										"triggeredBreakpoint",
										"none",
									],
									description: C.localize(5328, null),
									enumDescriptions: [
										C.localize(5329, null),
										C.localize(5330, null),
										C.localize(5331, null),
										C.localize(5332, null),
									],
									default: "logpoint",
								},
								"debug.openExplorerOnEnd": {
									type: "boolean",
									description: C.localize(5333, null),
									default: !1,
								},
								"debug.closeReadonlyTabsOnEnd": {
									type: "boolean",
									description: C.localize(5334, null),
									default: !1,
								},
								"debug.inlineValues": {
									type: "string",
									enum: ["on", "off", "auto"],
									description: C.localize(5335, null),
									enumDescriptions: [
										C.localize(5336, null),
										C.localize(5337, null),
										C.localize(5338, null),
									],
									default: "auto",
								},
								"debug.toolBarLocation": {
									enum: ["floating", "docked", "commandCenter", "hidden"],
									markdownDescription: C.localize(
										5339,
										null,
										"`#window.commandCenter#`",
									),
									default: "floating",
									markdownEnumDescriptions: [
										C.localize(5340, null),
										C.localize(5341, null),
										C.localize(5342, null),
										C.localize(5343, null),
									],
								},
								"debug.showInStatusBar": {
									enum: ["never", "always", "onFirstSessionStart"],
									enumDescriptions: [
										C.localize(5344, null),
										C.localize(5345, null),
										C.localize(5346, null),
									],
									description: C.localize(5347, null),
									default: "onFirstSessionStart",
								},
								"debug.internalConsoleOptions": G.$35,
								"debug.console.closeOnEnd": {
									type: "boolean",
									description: C.localize(5348, null),
									default: !1,
								},
								"debug.terminal.clearBeforeReusing": {
									type: "boolean",
									description: C.localize(5349, null),
									default: !1,
								},
								"debug.openDebug": {
									enum: [
										"neverOpen",
										"openOnSessionStart",
										"openOnFirstSessionStart",
										"openOnDebugBreak",
									],
									default: "openOnDebugBreak",
									description: C.localize(5350, null),
								},
								"debug.showSubSessionsInToolBar": {
									type: "boolean",
									description: C.localize(5351, null),
									default: !1,
								},
								"debug.console.fontSize": {
									type: "number",
									description: C.localize(5352, null),
									default: w.$m ? 12 : 14,
								},
								"debug.console.fontFamily": {
									type: "string",
									description: C.localize(5353, null),
									default: "default",
								},
								"debug.console.lineHeight": {
									type: "number",
									description: C.localize(5354, null),
									default: 0,
								},
								"debug.console.wordWrap": {
									type: "boolean",
									description: C.localize(5355, null),
									default: !0,
								},
								"debug.console.historySuggestions": {
									type: "boolean",
									description: C.localize(5356, null),
									default: !0,
								},
								"debug.console.collapseIdenticalLines": {
									type: "boolean",
									description: C.localize(5357, null),
									default: !0,
								},
								"debug.console.acceptSuggestionOnEnter": {
									enum: ["off", "on"],
									description: C.localize(5358, null),
									default: "off",
								},
								launch: {
									type: "object",
									description: C.localize(5359, null),
									default: { configurations: [], compounds: [] },
									$ref: ie.$EZ,
									disallowConfigurationDefault: !0,
								},
								"debug.focusWindowOnBreak": {
									type: "boolean",
									description: C.localize(5360, null),
									default: !0,
								},
								"debug.focusEditorOnBreak": {
									type: "boolean",
									description: C.localize(5361, null),
									default: !0,
								},
								"debug.onTaskErrors": {
									enum: ["debugAnyway", "showErrors", "prompt", "abort"],
									enumDescriptions: [
										C.localize(5362, null),
										C.localize(5363, null),
										C.localize(5364, null),
										C.localize(5365, null),
									],
									description: C.localize(5366, null),
									default: "prompt",
								},
								"debug.showBreakpointsInOverviewRuler": {
									type: "boolean",
									description: C.localize(5367, null),
									default: !1,
								},
								"debug.showInlineBreakpointCandidates": {
									type: "boolean",
									description: C.localize(5368, null),
									default: !0,
								},
								"debug.saveBeforeStart": {
									description: C.localize(5369, null),
									enum: [
										"allEditorsInActiveGroup",
										"nonUntitledEditorsInActiveGroup",
										"none",
									],
									enumDescriptions: [
										C.localize(5370, null),
										C.localize(5371, null),
										C.localize(5372, null),
									],
									default: "allEditorsInActiveGroup",
									scope: r.ConfigurationScope.LANGUAGE_OVERRIDABLE,
								},
								"debug.confirmOnExit": {
									description: C.localize(5373, null),
									type: "string",
									enum: ["never", "always"],
									enumDescriptions: [
										C.localize(5374, null),
										C.localize(5375, null),
									],
									default: "never",
								},
								"debug.disassemblyView.showSourceCode": {
									type: "boolean",
									default: !0,
									description: C.localize(5376, null),
								},
								"debug.autoExpandLazyVariables": {
									type: "string",
									enum: ["auto", "on", "off"],
									default: "auto",
									enumDescriptions: [
										C.localize(5377, null),
										C.localize(5378, null),
										C.localize(5379, null),
									],
									description: C.localize(5380, null),
								},
								"debug.enableStatusBarColor": {
									type: "boolean",
									description: C.localize(5381, null),
									default: !0,
								},
								"debug.hideLauncherWhileDebugging": {
									type: "boolean",
									markdownDescription: C.localize(
										5382,
										null,
										"`#debug.toolBarLocation#`",
									),
									default: !1,
								},
							},
						}),
					d.$Whc.register(new v.$pQc()),
					d.$Whc.register(new ee.$nRc()),
					d.$Whc.register(new te.$pRc()),
					(0, o.$s6)(_.$oRc.ID, _.$oRc, o.WorkbenchPhase.AfterRestored),
					(0, o.$s6)(Q.$qRc.ID, Q.$qRc, o.WorkbenchPhase.AfterRestored);
			},
		),
		define(
			de[4020],
			he([
				1, 0, 3, 4, 102, 5, 30, 854, 60, 685, 9, 275, 14, 247, 11, 8, 31, 57,
				25, 19, 22, 54,
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
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R1c = void 0);
				const y = "editSessionsCount",
					$ = new g.$5j(y, 0);
				let v = class extends t.$1c {
					constructor(T, P) {
						super(), (this.a = P), this.b(T);
					}
					b(T) {
						const P = r.$H1c,
							k = this.a.createInstance(d.$Stc, P, r.$I1c.value);
						(k.showCollapseAllAction = !0),
							(k.showRefreshAction = !0),
							(k.dataProvider = this.a.createInstance(S));
						const L = C.$Io.as(m.Extensions.ViewsRegistry);
						L.registerViews(
							[
								{
									id: P,
									name: r.$I1c,
									ctorDescriptor: new w.$Ji(d.$Ptc),
									canToggleVisibility: !0,
									canMoveView: !1,
									treeView: k,
									collapsed: !1,
									when: g.$Kj.and(r.$K1c),
									order: 100,
									hideByDefault: !0,
								},
							],
							T,
						),
							L.registerViewWelcomeContent(P, {
								content: (0, i.localize)(
									5977,
									null,
									`[${(0, i.localize)(5978, null)}](command:workbench.editSessions.actions.store)`,
								),
								when: g.$Kj.equals(y, 0),
								order: 1,
							}),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.resume",
												title: (0, i.localize)(5979, null),
												icon: h.$ak.desktopDownload,
												menu: {
													id: n.$XX.ViewItemContext,
													when: g.$Kj.and(
														g.$Kj.equals("view", P),
														g.$Kj.regex("viewItem", /edit-session/i),
													),
													group: "inline",
												},
											});
										}
										async run(D, M) {
											const N = u.URI.parse(M.$treeItemHandle).path.substring(
												1,
											);
											await D.get(p.$ek).executeCommand(
												"workbench.editSessions.actions.resumeLatest",
												N,
												!0,
											),
												await k.refresh();
										}
									},
								),
							),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.store",
												title: (0, i.localize)(5980, null),
												icon: h.$ak.cloudUpload,
											});
										}
										async run(D, M) {
											await D.get(p.$ek).executeCommand(
												"workbench.editSessions.actions.storeCurrent",
											),
												await k.refresh();
										}
									},
								),
							),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.delete",
												title: (0, i.localize)(5981, null),
												icon: h.$ak.trash,
												menu: {
													id: n.$XX.ViewItemContext,
													when: g.$Kj.and(
														g.$Kj.equals("view", P),
														g.$Kj.regex("viewItem", /edit-session/i),
													),
													group: "inline",
												},
											});
										}
										async run(D, M) {
											const N = u.URI.parse(M.$treeItemHandle).path.substring(
													1,
												),
												A = D.get(o.$GO),
												R = D.get(r.$z1c);
											(
												await A.confirm({
													message: (0, i.localize)(5982, null, N),
													detail: (0, i.localize)(5983, null),
													type: "warning",
													title: r.$I1c.value,
												})
											).confirmed &&
												(await R.delete("editSessions", N), await k.refresh());
										}
									},
								),
							),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.deleteAll",
												title: (0, i.localize)(5984, null),
												icon: h.$ak.trash,
												menu: {
													id: n.$XX.ViewTitle,
													when: g.$Kj.and(
														g.$Kj.equals("view", P),
														g.$Kj.greater(y, 0),
													),
												},
											});
										}
										async run(D) {
											const M = D.get(o.$GO),
												N = D.get(r.$z1c);
											(
												await M.confirm({
													message: (0, i.localize)(5985, null),
													detail: (0, i.localize)(5986, null),
													type: "warning",
													title: r.$I1c.value,
												})
											).confirmed &&
												(await N.delete("editSessions", null),
												await k.refresh());
										}
									},
								),
							);
					}
				};
				(e.$R1c = v), (e.$R1c = v = Ne([j(1, E.$Li)], v));
				let S = class {
					constructor(T, P, k, L) {
						(this.b = T),
							(this.c = P),
							(this.d = k),
							(this.e = L),
							(this.a = $.bindTo(this.c));
					}
					async getChildren(T) {
						if (!T) return this.f();
						const [P, k, L] = u.URI.parse(T.handle)
							.path.substring(1)
							.split("/");
						return P && !k ? this.g(P) : P && k && !L ? this.h(P, k) : [];
					}
					async f() {
						const T = await this.b.list("editSessions");
						this.a.set(T.length);
						const P = [];
						for (const k of T) {
							const L = u.URI.from({
									scheme: r.$L1c,
									authority: "remote-session-content",
									path: `/${k.ref}`,
								}),
								D = await this.b.read("editSessions", k.ref);
							if (!D) continue;
							const M = JSON.parse(D.content),
								N = M.folders.map((B) => B.name).join(", ") ?? k.ref,
								A = M.machine,
								R = A ? await this.b.getMachineById(A) : void 0,
								O =
									R === void 0
										? (0, a.$dn)(k.created, !0)
										: `${(0, a.$dn)(k.created, !0)}\xA0\xA0\u2022\xA0\xA0${R}`;
							P.push({
								handle: L.toString(),
								collapsibleState: m.TreeItemCollapsibleState.Collapsed,
								label: { label: N },
								description: O,
								themeIcon: h.$ak.repo,
								contextValue: "edit-session",
							});
						}
						return P;
					}
					async g(T) {
						const P = await this.b.read("editSessions", T);
						if (!P) return [];
						const k = JSON.parse(P.content);
						if (k.folders.length === 1) {
							const L = k.folders[0];
							return this.h(T, L.name);
						}
						return k.folders.map((L) => ({
							handle: u.URI.from({
								scheme: r.$L1c,
								authority: "remote-session-content",
								path: `/${P.ref}/${L.name}`,
							}).toString(),
							collapsibleState: m.TreeItemCollapsibleState.Collapsed,
							label: { label: L.name },
							themeIcon: h.$ak.folder,
						}));
					}
					async h(T, P) {
						const k = await this.b.read("editSessions", T);
						if (!k) return [];
						const L = JSON.parse(k.content),
							D = this.d.getWorkspace().folders.find((N) => N.name === P),
							M = L.folders.find((N) => N.name === P);
						return M
							? Promise.all(
									M.workingChanges.map(async (N) => {
										const A = u.URI.from({
											scheme: r.$L1c,
											authority: "remote-session-content",
											path: `/${k.ref}/${P}/${N.relativeFilePath}`,
										});
										if (D?.uri) {
											const R = (0, b.$nh)(D.uri, N.relativeFilePath);
											if (
												N.type === r.ChangeType.Addition &&
												(await this.e.exists(R))
											)
												return {
													handle: A.toString(),
													resourceUri: A,
													collapsibleState: m.TreeItemCollapsibleState.None,
													label: { label: N.relativeFilePath },
													themeIcon: h.$ak.file,
													command: {
														id: "vscode.diff",
														title: (0, i.localize)(5987, null),
														arguments: [
															R,
															A,
															`${(0, l.$sc)(N.relativeFilePath)} (${(0, i.localize)(5988, null)} \u2194 ${(0, i.localize)(5989, null)})`,
															void 0,
														],
													},
												};
										}
										return {
											handle: A.toString(),
											resourceUri: A,
											collapsibleState: m.TreeItemCollapsibleState.None,
											label: { label: N.relativeFilePath },
											themeIcon: h.$ak.file,
											command: {
												id: c.$zWb,
												title: (0, i.localize)(5990, null),
												arguments: [A, void 0, void 0],
											},
										};
									}),
								)
							: [];
					}
				};
				S = Ne([j(0, r.$z1c), j(1, g.$6j), j(2, f.$Vi), j(3, s.$ll)], S);
			},
		),
		define(
			de[1944],
			he([
				1, 0, 4, 33, 57, 22, 40, 84, 382, 220, 18, 15, 76, 19, 199, 710, 9, 87,
				25, 347, 449, 12, 7, 34, 23, 222, 408, 3, 288, 24, 29, 10, 762, 5, 21,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
			) {
				"use strict";
				var R, O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RWb = e.$QWb = e.$PWb = void 0),
					(e.$SWb = F),
					(e.$TWb = x);
				let B = class {
					static {
						R = this;
					}
					static {
						this.a = 20;
					}
					constructor(q, V, G, K, J) {
						(this.b = q),
							(this.c = V),
							(this.d = G),
							(this.e = K),
							(this.f = J);
					}
					upload(q, V) {
						const G = new i.$Ce(),
							K = this.b.withProgress(
								{
									location: d.ProgressLocation.Window,
									delay: 800,
									cancellable: !0,
									title: (0, t.localize)(6840, null),
								},
								async (J) => this.h(q, this.g(V), J, G.token),
								() => G.dispose(!0),
							);
						return (
							this.b.withProgress({ location: r.$wUb, delay: 500 }, () => K), K
						);
					}
					g(q) {
						if ((0, y.$0gb)(q)) return q.dataTransfer;
						const V = { items: [] };
						for (const G of q)
							V.items.push({
								webkitGetAsEntry: () => ({
									name: G.name,
									isDirectory: !1,
									isFile: !0,
									createReader: () => {
										throw new Error("Unsupported for files");
									},
									file: (K) => K(G),
								}),
							});
						return V;
					}
					async h(q, V, G, K) {
						const J = V.items,
							W = [];
						for (const ee of J) W.push(ee.webkitGetAsEntry());
						const X = [],
							Y = {
								startTime: Date.now(),
								progressScheduler: new a.$1h((ee) => {
									G.report(ee[ee.length - 1]);
								}, 1e3),
								filesTotal: W.length,
								filesUploaded: 0,
								totalBytesUploaded: 0,
							},
							ie = new a.$Sh(R.a);
						await a.Promises.settled(
							W.map((ee) =>
								ie.queue(async () => {
									if (K.isCancellationRequested) return;
									if (q && ee.name && q.getChild(ee.name)) {
										const { confirmed: te } = await this.c.confirm(F(ee.name));
										if (
											!te ||
											(await this.d.applyBulkEdit(
												[
													new n.$uzb((0, c.$nh)(q.resource, ee.name), void 0, {
														recursive: !0,
														folder: q.getChild(ee.name)?.isDirectory,
													}),
												],
												{
													undoLabel: (0, t.localize)(6841, null, ee.name),
													progressLabel: (0, t.localize)(6842, null, ee.name),
												},
											),
											K.isCancellationRequested)
										)
											return;
									}
									const _ = await this.i(ee, q.resource, q, G, Y, K);
									_ && X.push(_);
								}),
							),
						),
							Y.progressScheduler.dispose();
						const ne = X[0];
						!K.isCancellationRequested &&
							ne?.isFile &&
							(await this.e.openEditor({
								resource: ne.resource,
								options: { pinned: !0 },
							}));
					}
					async i(q, V, G, K, J, W) {
						if (
							W.isCancellationRequested ||
							!q.name ||
							(!q.isFile && !q.isDirectory)
						)
							return;
						let X = 0;
						const Y = (ne, ee) => {
							(X += ee), (J.totalBytesUploaded += ee);
							const _ =
								J.totalBytesUploaded / ((Date.now() - J.startTime) / 1e3);
							let te;
							ne < E.$Tl.MB
								? J.filesTotal === 1
									? (te = `${q.name}`)
									: (te = (0, t.localize)(
											6843,
											null,
											J.filesUploaded,
											J.filesTotal,
											E.$Tl.formatSize(_),
										))
								: (te = (0, t.localize)(
										6844,
										null,
										q.name,
										E.$Tl.formatSize(X),
										E.$Tl.formatSize(ne),
										E.$Tl.formatSize(_),
									)),
								J.progressScheduler.work({ message: te });
						};
						J.filesUploaded++, Y(0, 0);
						const ie = (0, c.$nh)(V, q.name);
						if (q.isFile) {
							const ne = await new Promise((ee, _) => q.file(ee, _));
							return W.isCancellationRequested
								? void 0
								: (typeof ne.stream == "function" && ne.size > E.$Tl.MB
										? await this.j(ie, ne, Y, W)
										: await this.k(ie, ne, Y),
									{ isFile: !0, resource: ie });
						} else {
							if ((await this.f.createFolder(ie), W.isCancellationRequested))
								return;
							const ne = q.createReader(),
								ee = [];
							let _ = !1;
							do {
								const re = await new Promise((le, oe) =>
									ne.readEntries(le, oe),
								);
								re.length > 0 ? ee.push(...re) : (_ = !0);
							} while (!_ && !W.isCancellationRequested);
							J.filesTotal += ee.length;
							const te = (G && G.getChild(q.name)) || void 0,
								Q = [],
								Z = [];
							for (const re of ee)
								re.isFile ? Q.push(re) : re.isDirectory && Z.push(re);
							const se = new a.$Sh(R.a);
							await a.Promises.settled(
								Q.map((re) => se.queue(() => this.i(re, ie, te, K, J, W))),
							);
							for (const re of Z) await this.i(re, ie, te, K, J, W);
							return { isFile: !1, resource: ie };
						}
					}
					async j(q, V, G, K) {
						const J = (0, h.$0e)({ highWaterMark: 10 }),
							W = this.f.writeFile(q, J);
						try {
							const X = V.stream().getReader();
							let Y = await X.read();
							for (; !Y.done && !K.isCancellationRequested; ) {
								const ie = h.$Te.wrap(Y.value);
								if ((await J.write(ie), K.isCancellationRequested)) break;
								G(V.size, ie.byteLength), (Y = await X.read());
							}
							J.end(void 0);
						} catch (X) {
							J.error(X), J.end();
						}
						K.isCancellationRequested || (await W);
					}
					k(q, V, G) {
						return new Promise((K, J) => {
							const W = new FileReader();
							(W.onload = async (X) => {
								try {
									if (X.target?.result instanceof ArrayBuffer) {
										const Y = h.$Te.wrap(new Uint8Array(X.target.result));
										await this.f.writeFile(q, Y), G(V.size, Y.byteLength);
									} else throw new Error("Could not read from dropped file.");
									K();
								} catch (Y) {
									J(Y);
								}
							}),
								W.readAsArrayBuffer(V);
						});
					}
				};
				(e.$PWb = B),
					(e.$PWb =
						B =
						R =
							Ne(
								[
									j(0, d.$8N),
									j(1, w.$GO),
									j(2, m.$LWb),
									j(3, u.$IY),
									j(4, E.$ll),
								],
								B,
							));
				let U = class {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee) {
						(this.a = q),
							(this.b = V),
							(this.c = G),
							(this.d = K),
							(this.e = J),
							(this.f = W),
							(this.g = X),
							(this.h = Y),
							(this.i = ie),
							(this.j = ne),
							(this.k = ee);
					}
					async import(q, V, G) {
						const K = new i.$Ce(),
							J = this.i.withProgress(
								{
									location: d.ProgressLocation.Window,
									delay: 800,
									cancellable: !0,
									title: (0, t.localize)(6845, null),
								},
								async () => await this.l(q, V, G, K.token),
								() => K.dispose(!0),
							);
						return (
							this.i.withProgress({ location: r.$wUb, delay: 500 }, () => J), J
						);
					}
					async l(q, V, G, K) {
						const J = (0, k.$Lb)(
							(await this.k.invokeFunction((ie) => (0, b.$jzb)(ie, V))).map(
								(ie) => ie.resource,
							),
						);
						await Promise.all(
							J.map((ie) => this.a.activateProvider(ie.scheme)),
						);
						const W = (0, k.$Lb)(J.filter((ie) => this.a.hasProvider(ie))),
							X = await this.a.resolveAll(W.map((ie) => ({ resource: ie })));
						if (K.isCancellationRequested) return;
						this.b.focus(G);
						const Y = X.filter((ie) => ie.success && ie.stat?.isDirectory).map(
							(ie) => ({ uri: ie.stat.resource }),
						);
						if (Y.length > 0 && q.isRoot) {
							let ie;
							(function (Q) {
								(Q[(Q.Copy = 1)] = "Copy"), (Q[(Q.Add = 2)] = "Add");
							})(ie || (ie = {}));
							const ne = [
								{
									label:
										Y.length > 1
											? (0, t.localize)(6846, null)
											: (0, t.localize)(6847, null),
									run: () => ie.Copy,
								},
							];
							let ee;
							const _ = this.c.getWorkspace().folders.map((Q) => Q.uri.scheme);
							Y.some((Q) => _.indexOf(Q.uri.scheme) >= 0)
								? (ne.unshift({
										label:
											Y.length > 1
												? (0, t.localize)(6848, null)
												: (0, t.localize)(6849, null),
										run: () => ie.Add,
									}),
									(ee =
										Y.length > 1
											? (0, t.localize)(6850, null)
											: (0, t.localize)(6851, null, (0, c.$kh)(Y[0].uri))))
								: (ee =
										Y.length > 1
											? (0, t.localize)(6852, null)
											: (0, t.localize)(6853, null, (0, c.$kh)(Y[0].uri)));
							const { result: te } = await this.e.prompt({
								type: C.Severity.Info,
								message: ee,
								buttons: ne,
								cancelButton: !0,
							});
							if (te === ie.Add) return this.f.addFolders(Y);
							if (te === ie.Copy) return this.m(q, W, K);
						} else if (q instanceof g.$JWb) return this.m(q, W, K);
					}
					async m(q, V, G) {
						if (V && V.length > 0) {
							const K = await this.a.resolve(q.resource);
							if (G.isCancellationRequested) return;
							const J = new Set(),
								W = this.a.hasCapability(
									q.resource,
									E.FileSystemProviderCapabilities.PathCaseSensitive,
								);
							K.children &&
								K.children.forEach((_) => {
									J.add(W ? _.name : _.name.toLowerCase());
								});
							let X = 0;
							const Y = (0, k.$Lb)(
								await a.Promises.settled(
									V.map(async (_) => {
										if (!(await this.a.exists(_))) {
											X++;
											return;
										}
										if (
											!(
												J.has(
													W ? (0, c.$kh)(_) : (0, c.$kh)(_).toLowerCase(),
												) && !(await this.e.confirm(F((0, c.$kh)(_)))).confirmed
											)
										)
											return _;
									}),
								),
							);
							X > 0 &&
								this.j.error(
									X > 1
										? (0, t.localize)(6854, null)
										: (0, t.localize)(6855, null),
								);
							const ie = Y.map((_) => {
									const te = (0, c.$kh)(_),
										Q = (0, c.$nh)(q.resource, te);
									return new n.$uzb(_, Q, { overwrite: !0, copy: !0 });
								}),
								ne = this.d.getValue().explorer.confirmUndo;
							if (
								(await this.g.applyBulkEdit(ie, {
									undoLabel:
										Y.length === 1
											? (0, t.localize)(6856, null, (0, c.$kh)(Y[0]))
											: (0, t.localize)(6857, null, Y.length),
									progressLabel:
										Y.length === 1
											? (0, t.localize)(6858, null, (0, c.$kh)(Y[0]))
											: (0, t.localize)(6859, null, Y.length),
									progressLocation: d.ProgressLocation.Window,
									confirmBeforeUndo:
										ne === r.UndoConfirmLevel.Verbose ||
										ne === r.UndoConfirmLevel.Default,
								}),
								this.d.getValue().explorer.autoOpenDroppedFile &&
									ie.length === 1)
							) {
								const _ = this.g.findClosest(ie[0].newResource);
								_ &&
									!_.isDirectory &&
									this.h.openEditor({
										resource: _.resource,
										options: { pinned: !0 },
									});
							}
						}
					}
				};
				(e.$QWb = U),
					(e.$QWb = U =
						Ne(
							[
								j(0, E.$ll),
								j(1, o.$asb),
								j(2, f.$Vi),
								j(3, D.$gj),
								j(4, w.$GO),
								j(5, s.$mRb),
								j(6, m.$LWb),
								j(7, u.$IY),
								j(8, d.$8N),
								j(9, C.$4N),
								j(10, N.$Li),
							],
							U,
						));
				let z = class {
					static {
						O = this;
					}
					static {
						this.a = "workbench.explorer.downloadPath";
					}
					constructor(q, V, G, K, J, W) {
						(this.b = q),
							(this.c = V),
							(this.d = G),
							(this.e = K),
							(this.f = J),
							(this.g = W);
					}
					download(q) {
						const V = new i.$Ce(),
							G = this.d.withProgress(
								{
									location: d.ProgressLocation.Window,
									delay: 800,
									cancellable: l.$r,
									title: (0, t.localize)(6860, null),
								},
								async (K) => this.h(q, K, V),
								() => V.dispose(!0),
							);
						return (
							this.d.withProgress({ location: r.$wUb, delay: 500 }, () => G), G
						);
					}
					async h(q, V, G) {
						for (const K of q) {
							if (G.token.isCancellationRequested) return;
							l.$r ? await this.i(K.resource, V, G) : await this.o(K, V, G);
						}
					}
					async i(q, V, G) {
						const K = await this.b.resolve(q, { resolveMetadata: !0 });
						if (G.token.isCancellationRequested) return;
						const J = 32 * E.$Tl.MB,
							W = K.isDirectory || K.size > J,
							X = (0, y.$Ogb)();
						if (W && M.WebFileSystemAccess.supported(X))
							try {
								const Y = await X.showDirectoryPicker(),
									ie = {
										startTime: Date.now(),
										progressScheduler: new a.$1h((ne) => {
											V.report(ne[ne.length - 1]);
										}, 1e3),
										filesTotal: K.isDirectory ? 0 : 1,
										filesDownloaded: 0,
										totalBytesDownloaded: 0,
										fileBytesDownloaded: 0,
									};
								if (K.isDirectory) {
									const ne = await Y.getDirectoryHandle(K.name, { create: !0 });
									await this.m(K, ne, ie, G.token);
								} else await this.l(Y, K, ie, G.token);
								ie.progressScheduler.dispose();
							} catch (Y) {
								this.e.warn(Y), G.cancel();
							}
						else if (K.isFile) {
							let Y;
							try {
								Y = (
									await this.b.readFile(
										K.resource,
										{ limits: { size: J } },
										G.token,
									)
								).value.buffer;
							} catch {
								Y = v.$7g.uriToBrowserUri(K.resource);
							}
							G.token.isCancellationRequested || (0, y.$yhb)(Y, K.name);
						}
					}
					async j(q, V, G, K) {
						const J = await this.b.readFileStream(q, void 0, K);
						if (K.isCancellationRequested) {
							V.close();
							return;
						}
						return new Promise((W, X) => {
							const Y = J.value,
								ie = new T.$Zc();
							ie.add((0, T.$Yc)(() => V.close())),
								ie.add(
									(0, P.$hb)(K.onCancellationRequested)(() => {
										ie.dispose(), X((0, L.$0)());
									}),
								),
								(0, I.$Le)(
									Y,
									{
										onData: (ne) => {
											V.write(ne.buffer),
												this.n(J.name, J.size, ne.byteLength, G);
										},
										onError: (ne) => {
											ie.dispose(), X(ne);
										},
										onEnd: () => {
											ie.dispose(), W();
										},
									},
									K,
								);
						});
					}
					async k(q, V, G, K) {
						const J = await this.b.readFile(q, void 0, K);
						K.isCancellationRequested ||
							(V.write(J.value.buffer),
							this.n(J.name, J.size, J.value.byteLength, G)),
							V.close();
					}
					async l(q, V, G, K) {
						G.filesDownloaded++,
							(G.fileBytesDownloaded = 0),
							this.n(V.name, 0, 0, G);
						const W = await (
							await q.getFileHandle(V.name, { create: !0 })
						).createWritable();
						return V.size > E.$Tl.MB
							? this.j(V.resource, W, G, K)
							: this.k(V.resource, W, G, K);
					}
					async m(q, V, G, K) {
						if (q.children) {
							G.filesTotal += q.children.map((J) => J.isFile).length;
							for (const J of q.children) {
								if (K.isCancellationRequested) return;
								if (J.isFile) await this.l(V, J, G, K);
								else {
									const W = await V.getDirectoryHandle(J.name, { create: !0 }),
										X = await this.b.resolve(J.resource, {
											resolveMetadata: !0,
										});
									await this.m(X, W, G, K);
								}
							}
						}
					}
					n(q, V, G, K) {
						(K.fileBytesDownloaded += G), (K.totalBytesDownloaded += G);
						const J =
							K.totalBytesDownloaded / ((Date.now() - K.startTime) / 1e3);
						let W;
						V < E.$Tl.MB
							? K.filesTotal === 1
								? (W = q)
								: (W = (0, t.localize)(
										6861,
										null,
										K.filesDownloaded,
										K.filesTotal,
										E.$Tl.formatSize(J),
									))
							: (W = (0, t.localize)(
									6862,
									null,
									q,
									E.$Tl.formatSize(K.fileBytesDownloaded),
									E.$Tl.formatSize(V),
									E.$Tl.formatSize(J),
								)),
							K.progressScheduler.work({ message: W });
					}
					async o(q, V, G) {
						V.report({ message: q.name });
						let K;
						const J = this.g.get(O.a, A.StorageScope.APPLICATION);
						J
							? (K = (0, c.$nh)(p.URI.file(J), q.name))
							: (K = (0, c.$nh)(
									q.isDirectory
										? await this.f.defaultFolderPath(v.Schemas.file)
										: await this.f.defaultFilePath(v.Schemas.file),
									q.name,
								));
						const W = await this.f.showSaveDialog({
							availableFileSystems: [v.Schemas.file],
							saveLabel: (0, S.$DO)((0, t.localize)(6863, null)),
							title: (0, t.localize)(6864, null),
							defaultUri: K,
						});
						W
							? (this.g.store(
									O.a,
									(0, c.$mh)(W).fsPath,
									A.StorageScope.APPLICATION,
									A.StorageTarget.MACHINE,
								),
								await this.c.applyBulkEdit(
									[new n.$uzb(q.resource, W, { overwrite: !0, copy: !0 })],
									{
										undoLabel: (0, t.localize)(6865, null, q.name),
										progressLabel: (0, t.localize)(6866, null, q.name),
										progressLocation: d.ProgressLocation.Window,
									},
								))
							: G.cancel();
					}
				};
				(e.$RWb = z),
					(e.$RWb =
						z =
						O =
							Ne(
								[
									j(0, E.$ll),
									j(1, m.$LWb),
									j(2, d.$8N),
									j(3, $.$ik),
									j(4, w.$IO),
									j(5, A.$lq),
								],
								z,
							));
				function F(H) {
					return {
						message: (0, t.localize)(6867, null, H),
						detail: (0, t.localize)(6868, null),
						primaryButton: (0, t.localize)(6869, null),
						type: "warning",
					};
				}
				function x(H) {
					return H.length > 1
						? {
								message: (0, t.localize)(6870, null, H.length),
								detail:
									(0, w.$JO)(H) +
									`
` +
									(0, t.localize)(6871, null),
								primaryButton: (0, t.localize)(6872, null),
								type: "warning",
							}
						: F((0, c.$kh)(H[0]));
				}
			},
		),
		define(
			de[1057],
			he([
				1, 0, 4, 12, 54, 19, 9, 163, 50, 3, 220, 22, 44, 63, 5, 87, 554, 42, 10,
				121, 61, 67, 31, 8, 23, 57, 40, 18, 210, 247, 24, 710, 29, 7, 170, 227,
				15, 336, 14, 26, 60, 89, 37, 68, 199, 382, 1944, 142, 143, 165, 11, 100,
				43, 27, 99, 76,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rXb =
						e.$qXb =
						e.$pXb =
						e.$oXb =
						e.$nXb =
						e.$mXb =
						e.$lXb =
						e.$kXb =
						e.$jXb =
						e.$iXb =
						e.$hXb =
						e.$gXb =
						e.$fXb =
						e.$dXb =
						e.$cXb =
						e.$bXb =
						e.$aXb =
						e.$_Wb =
						e.$$Wb =
						e.$0Wb =
						e.$7Wb =
						e.$6Wb =
						e.$5Wb =
						e.$4Wb =
						e.$3Wb =
						e.$2Wb =
						e.$1Wb =
						e.$ZWb =
						e.$YWb =
						e.$XWb =
						e.$WWb =
						e.$VWb =
						e.$UWb =
							void 0),
					(e.$8Wb = $e),
					(e.$9Wb = ye),
					(e.$eXb = Oe),
					(t = mt(t)),
					(E = mt(E)),
					(e.$UWb = "explorer.newFile"),
					(e.$VWb = t.localize2(6807, "New File...")),
					(e.$WWb = "explorer.newFolder"),
					(e.$XWb = t.localize2(6808, "New Folder...")),
					(e.$YWb = t.localize(6737, null)),
					(e.$ZWb = t.localize(6738, null)),
					(e.$1Wb = t.localize(6739, null)),
					(e.$2Wb = t.localize(6740, null)),
					(e.$3Wb = new $.$5j("fileCopied", !1)),
					(e.$4Wb = "explorer.download"),
					(e.$5Wb = t.localize(6741, null)),
					(e.$6Wb = "explorer.upload"),
					(e.$7Wb = t.localize(6742, null));
				const Q = "explorer.confirmDelete",
					Z = 5e6;
				function se(nt, lt) {
					lt.message === "string" && (lt = lt.message),
						nt.error((0, d.$xj)(lt, !1));
				}
				async function re(nt, lt) {
					nt &&
						(nt.indexOf("/") >= 0 || nt.indexOf("\\") >= 0) &&
						(await lt.refresh());
				}
				async function le(nt, lt, ct, gt, ht, Rt, Nt = !1, jt = !1) {
					let ti;
					Rt
						? (ti = i.$l ? t.localize(6743, null) : t.localize(6744, null))
						: (ti = t.localize(6745, null));
					const kt = E.$wh(ht, (ze) => ze.resource),
						hi = new Set();
					for (const ze of kt)
						for (const Xe of lt.getDirty(ze.resource)) hi.add(Xe);
					let Kt = !0;
					if (hi.size) {
						let ze;
						kt.length > 1
							? (ze = t.localize(6746, null))
							: kt[0].isDirectory
								? hi.size === 1
									? (ze = t.localize(6747, null, kt[0].name))
									: (ze = t.localize(6748, null, kt[0].name, hi.size))
								: (ze = t.localize(6749, null, kt[0].name)),
							(
								await ct.confirm({
									type: "warning",
									message: ze,
									detail: t.localize(6750, null),
									primaryButton: ti,
								})
							).confirmed
								? (Nt = !0)
								: (Kt = !1);
					}
					if (!Kt) return;
					let di;
					const Ye = kt.some((ze) => ze.isDirectory)
						? t.localize(6751, null)
						: kt.length > 1
							? t.localize(6752, null)
							: t.localize(6753, null);
					if (Nt || (Rt && gt.getValue(Q) === !1)) di = { confirmed: !0 };
					else if (Rt) {
						let { message: ze, detail: Xe } = oe(kt);
						(Xe += Xe
							? `
`
							: ""),
							i.$l
								? (Xe +=
										kt.length > 1
											? t.localize(6754, null)
											: t.localize(6755, null))
								: (Xe +=
										kt.length > 1
											? t.localize(6756, null)
											: t.localize(6757, null)),
							(di = await ct.confirm({
								message: ze,
								detail: Xe,
								primaryButton: ti,
								checkbox: { label: t.localize(6758, null) },
							}));
					} else {
						let { message: ze, detail: Xe } = ae(kt);
						(Xe += Xe
							? `
`
							: ""),
							(Xe += Ye),
							(di = await ct.confirm({
								type: "warning",
								message: ze,
								detail: Xe,
								primaryButton: ti,
							}));
					}
					if (
						(di.confirmed &&
							di.checkboxChecked === !0 &&
							(await gt.updateValue(Q, !1)),
						!!di.confirmed)
					)
						try {
							const ze = kt.map(
									(It) =>
										new V.$uzb(It.resource, void 0, {
											recursive: !0,
											folder: It.isDirectory,
											ignoreIfNotExists: jt,
											skipTrashBin: !Rt,
											maxSize: Z,
										}),
								),
								Xe = {
									undoLabel:
										kt.length > 1
											? t.localize(6759, null, kt.length)
											: t.localize(6760, null, kt[0].name),
									progressLabel:
										kt.length > 1
											? t.localize(6761, null, kt.length)
											: t.localize(6762, null, kt[0].name),
								};
							await nt.applyBulkEdit(ze, Xe);
						} catch (ze) {
							let Xe, It, Lt;
							if (
								(Rt
									? ((Xe = i.$l
											? t.localize(6763, null)
											: t.localize(6764, null)),
										(It = Ye),
										(Lt = t.localize(6765, null)))
									: ((Xe = (0, d.$xj)(ze, !1)), (Lt = t.localize(6766, null))),
								(
									await ct.confirm({
										type: "warning",
										message: Xe,
										detail: It,
										primaryButton: Lt,
									})
								).confirmed)
							)
								return (
									Rt && (Rt = !1),
									(Nt = !0),
									(jt = !0),
									le(nt, lt, ct, gt, ht, Rt, Nt, jt)
								);
						}
				}
				function oe(nt) {
					return pe(nt)
						? {
								message: t.localize(6767, null, nt.length),
								detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
							}
						: nt.length > 1
							? nt[0].isDirectory
								? {
										message: t.localize(6768, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
								: {
										message: t.localize(6769, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
							: nt[0].isDirectory && !nt[0].isSymbolicLink
								? { message: t.localize(6770, null, nt[0].name), detail: "" }
								: { message: t.localize(6771, null, nt[0].name), detail: "" };
				}
				function ae(nt) {
					return pe(nt)
						? {
								message: t.localize(6772, null, nt.length),
								detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
							}
						: nt.length > 1
							? nt[0].isDirectory
								? {
										message: t.localize(6773, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
								: {
										message: t.localize(6774, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
							: nt[0].isDirectory
								? { message: t.localize(6775, null, nt[0].name), detail: "" }
								: { message: t.localize(6776, null, nt[0].name), detail: "" };
				}
				function pe(nt) {
					const lt = nt.find((gt) => gt.isDirectory),
						ct = nt.find((gt) => !gt.isDirectory);
					return !!lt && !!ct;
				}
				async function $e(nt, lt, ct, gt, ht, Rt) {
					let Nt =
							typeof ht.resource == "string" ? ht.resource : E.$jh(ht.resource),
						jt = E.$nh(gt.resource, Nt);
					if (!(Rt === "disabled" && !(await ue(lt, ct, jt)))) {
						for (; !ht.allowOverwrite && nt.findClosest(jt); )
							Rt !== "disabled" && (Nt = ye(Nt, !!ht.isDirectory, Rt)),
								(jt = E.$nh(gt.resource, Nt));
						return jt;
					}
				}
				function ye(nt, lt, ct) {
					if (ct === "simple") {
						let Kt = nt,
							di = "";
						lt || ((di = (0, w.$tc)(nt)), (Kt = (0, w.$sc)(nt, di)));
						const Ye = /^(.+ copy)( \d+)?$/;
						return Ye.test(Kt)
							? Kt.replace(Ye, (ze, Xe, It) => {
									const Lt = It ? parseInt(It) : 1;
									return Lt === 0
										? `${Xe}`
										: Lt < P.Constants.MAX_SAFE_SMALL_INTEGER
											? `${Xe} ${Lt + 1}`
											: `${Xe}${It} copy`;
								}) + di
							: `${Kt} copy${di}`;
					}
					const gt = "[\\.\\-_]",
						ht = P.Constants.MAX_SAFE_SMALL_INTEGER,
						Rt = RegExp("(.*" + gt + ")(\\d+)(\\..*)$");
					if (!lt && nt.match(Rt))
						return nt.replace(Rt, (Kt, di, Ye, ze) => {
							const Xe = parseInt(Ye);
							return Xe < ht
								? di + String(Xe + 1).padStart(Ye.length, "0") + ze
								: `${di}${Ye}.1${ze}`;
						});
					const Nt = RegExp("(\\d+)(" + gt + ".*)(\\..*)$");
					if (!lt && nt.match(Nt))
						return nt.replace(Nt, (Kt, di, Ye, ze) => {
							const Xe = parseInt(di);
							return Xe < ht
								? String(Xe + 1).padStart(di.length, "0") + Ye + ze
								: `${di}${Ye}.1${ze}`;
						});
					const jt = RegExp("(\\d+)(\\..*)$");
					if (!lt && nt.match(jt))
						return nt.replace(jt, (Kt, di, Ye) => {
							const ze = parseInt(di);
							return ze < ht
								? String(ze + 1).padStart(di.length, "0") + Ye
								: `${di}.1${Ye}`;
						});
					const ti = nt.lastIndexOf(".");
					if (!lt && ti >= 0) return `${nt.substr(0, ti)}.1${nt.substr(ti)}`;
					const kt = RegExp("(\\d+)$");
					if (!lt && ti === -1 && nt.match(kt))
						return nt.replace(kt, (Kt, di) => {
							const Ye = parseInt(di);
							return Ye < ht
								? String(Ye + 1).padStart(di.length, "0")
								: `${di}.1`;
						});
					const hi = RegExp("(.*)(\\d*)$");
					return !lt && ti === -1 && nt.match(hi)
						? nt.replace(hi, (Kt, di, Ye) => {
								let ze = parseInt(Ye);
								return (
									isNaN(ze) && (ze = 0),
									ze < ht
										? di + String(ze + 1).padStart(Ye.length, "0")
										: `${di}${Ye}.1`
								);
							})
						: lt && nt.match(/(\d+)$/)
							? nt.replace(/(\d+)$/, (Kt, ...di) => {
									const Ye = parseInt(di[0]);
									return Ye < ht
										? String(Ye + 1).padStart(di[0].length, "0")
										: `${di[0]}.1`;
								})
							: lt && nt.match(/^(\d+)/)
								? nt.replace(/^(\d+)(.*)$/, (Kt, ...di) => {
										const Ye = parseInt(di[0]);
										return Ye < ht
											? String(Ye + 1).padStart(di[0].length, "0") + di[1]
											: `${di[0]}${di[1]}.1`;
									})
								: `${nt}.1`;
				}
				async function ue(nt, lt, ct) {
					if (!(await nt.exists(ct))) return !0;
					const { confirmed: ht } = await lt.confirm({
						type: I.Severity.Warning,
						message: t.localize(6777, null, (0, w.$sc)(ct.path)),
						primaryButton: t.localize(6778, null),
					});
					return ht;
				}
				class fe extends Y.$3X {
					static {
						this.ID = "workbench.files.action.compareFileWith";
					}
					static {
						this.LABEL = t.localize2(6809, "Compare Active File With...");
					}
					constructor() {
						super({
							id: fe.ID,
							title: fe.LABEL,
							f1: !0,
							category: _.$ck.File,
							precondition: ie.$TPb,
							metadata: {
								description: t.localize2(
									6810,
									"Opens a picker to select a file to diff with the active editor.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(o.$MO),
							ht = lt.get(c.$DJ),
							Rt = ct.activeEditor,
							Nt = h.$A1.getOriginalUri(Rt);
						if (Nt && gt.canHandleResource(Nt)) {
							const jt = await ht.quickAccess.pick("", {
								itemActivation: c.ItemActivation.SECOND,
							});
							if (jt?.length === 1) {
								const ti = jt[0].resource;
								C.URI.isUri(ti) &&
									gt.canHandleResource(ti) &&
									ct.openEditor({
										original: { resource: Nt },
										modified: { resource: ti },
										options: { pinned: !0 },
									});
							}
						}
					}
				}
				e.$0Wb = fe;
				class me extends Y.$3X {
					static {
						this.ID = "workbench.action.toggleAutoSave";
					}
					constructor() {
						super({
							id: me.ID,
							title: t.localize2(6811, "Toggle Auto Save"),
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6812,
									"Toggle the ability to save files automatically after typing",
								),
							},
						});
					}
					run(lt) {
						return lt.get(A.$_Y).toggleAutoSave();
					}
				}
				e.$$Wb = me;
				let ve = class extends m.$rj {
					constructor(lt, ct, gt, ht, Rt) {
						super(lt, ct),
							(this.b = gt),
							(this.c = ht),
							(this.f = Rt),
							(this.a = this.f.hasDirty),
							(this.enabled = this.a),
							this.h();
					}
					h() {
						this.D(this.f.onDidChangeDirty((lt) => this.r(lt)));
					}
					r(lt) {
						const ct = lt.isDirty() || this.f.hasDirty;
						this.a !== ct && ((this.enabled = ct), (this.a = this.enabled));
					}
					async run(lt) {
						try {
							await this.g(lt);
						} catch (ct) {
							se(this.c, ct);
						}
					}
				};
				ve = Ne([j(2, y.$ek), j(3, I.$4N), j(4, R.$gY)], ve);
				class ge extends ve {
					static {
						this.ID = "workbench.files.action.saveAllInGroup";
					}
					static {
						this.LABEL = t.localize(6779, null);
					}
					get class() {
						return "explorer-action " + z.ThemeIcon.asClassName(U.$ak.saveAll);
					}
					g(lt) {
						return this.b.executeCommand(p.$bVb, {}, lt);
					}
				}
				e.$_Wb = ge;
				let be = class extends m.$rj {
					static {
						this.ID = "workbench.files.action.closeGroup";
					}
					static {
						this.LABEL = t.localize(6780, null);
					}
					constructor(lt, ct, gt) {
						super(lt, ct, z.ThemeIcon.asClassName(U.$ak.closeAll)),
							(this.a = gt);
					}
					run(lt) {
						return this.a.executeCommand(k.$WVb, {}, lt);
					}
				};
				(e.$aXb = be), (e.$aXb = be = Ne([j(2, y.$ek)], be));
				class Ce extends Y.$3X {
					static {
						this.ID = "workbench.files.action.focusFilesExplorer";
					}
					static {
						this.LABEL = t.localize2(6813, "Focus on Files Explorer");
					}
					constructor() {
						super({
							id: Ce.ID,
							title: Ce.LABEL,
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6814,
									"Moves focus to the file explorer view container.",
								),
							},
						});
					}
					async run(lt) {
						await lt
							.get(J.$6Sb)
							.openPaneComposite(u.$vUb, F.ViewContainerLocation.Sidebar, !0);
					}
				}
				e.$bXb = Ce;
				class Le extends Y.$3X {
					static {
						this.ID = "workbench.files.action.showActiveFileInExplorer";
					}
					static {
						this.LABEL = t.localize2(
							6815,
							"Reveal Active File in Explorer View",
						);
					}
					constructor() {
						super({
							id: Le.ID,
							title: Le.LABEL,
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6816,
									"Reveals and selects the active file within the explorer view.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(y.$ek),
							gt = lt.get(T.$IY),
							ht = h.$A1.getOriginalUri(gt.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							});
						ht && ct.executeCommand(p.$VUb, ht);
					}
				}
				e.$cXb = Le;
				class Fe extends Y.$3X {
					static {
						this.ID = "workbench.action.files.showOpenedFileInNewWindow";
					}
					static {
						this.LABEL = t.localize2(
							6817,
							"Open Active File in New Empty Workspace",
						);
					}
					constructor() {
						super({
							id: Fe.ID,
							title: Fe.LABEL,
							f1: !0,
							category: _.$ck.File,
							precondition: ie.$APb,
							metadata: {
								description: t.localize2(
									6818,
									"Opens the active file in a new window with no folders open.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(g.$asb),
							ht = lt.get(S.$GO),
							Rt = lt.get(a.$ll),
							Nt = h.$A1.getOriginalUri(ct.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							});
						Nt &&
							(Rt.hasProvider(Nt)
								? gt.openWindow([{ fileUri: Nt }], { forceNewWindow: !0 })
								: ht.error(t.localize(6781, null)));
					}
				}
				e.$dXb = Fe;
				function Oe(nt, lt, ct, gt) {
					if (((ct = He(ct)), !ct || ct.length === 0 || /^\s+$/.test(ct)))
						return {
							content: t.localize(6782, null),
							severity: I.Severity.Error,
						};
					if (ct[0] === "/" || ct[0] === "\\")
						return {
							content: t.localize(6783, null),
							severity: I.Severity.Error,
						};
					const ht = (0, L.$Lb)(ct.split(/[\\/]/)),
						Rt = lt.parent;
					if (ct !== lt.name) {
						const Nt = Rt?.getChild(ct);
						if (Nt && Nt !== lt)
							return {
								content: t.localize(6784, null, ct),
								severity: I.Severity.Error,
							};
					}
					if (ht.some((Nt) => !nt.hasValidBasename(lt.resource, gt, Nt))) {
						const Nt = ct.replace(/\*/g, "\\*");
						return {
							content: t.localize(6785, null, xe(Nt)),
							severity: I.Severity.Error,
						};
					}
					return ht.some((Nt) => /^\s|\s$/.test(Nt))
						? { content: t.localize(6786, null), severity: I.Severity.Warning }
						: null;
				}
				function xe(nt) {
					return nt?.length > 255 ? `${nt.substr(0, 255)}...` : nt;
				}
				function He(nt) {
					return (
						nt &&
						((nt = (0, H.$sf)(nt, "	")),
						(nt = (0, H.$uf)(nt, "/")),
						(nt = (0, H.$uf)(nt, "\\")),
						nt)
					);
				}
				class Ke extends Y.$3X {
					static {
						this.ID = "workbench.files.action.compareNewUntitledTextFiles";
					}
					static {
						this.LABEL = t.localize2(6819, "Compare New Untitled Text Files");
					}
					constructor() {
						super({
							id: Ke.ID,
							title: Ke.LABEL,
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6820,
									"Opens a new diff editor with two untitled files.",
								),
							},
						});
					}
					async run(lt) {
						await lt
							.get(T.$IY)
							.openEditor({
								original: { resource: void 0 },
								modified: { resource: void 0 },
								options: { pinned: !0 },
							});
					}
				}
				e.$fXb = Ke;
				class Je extends Y.$3X {
					static {
						this.ID = "workbench.files.action.compareWithClipboard";
					}
					static {
						this.LABEL = t.localize2(
							6821,
							"Compare Active File with Clipboard",
						);
					}
					static {
						this.b = 0;
					}
					constructor() {
						super({
							id: Je.ID,
							title: Je.LABEL,
							f1: !0,
							category: _.$ck.File,
							keybinding: {
								primary: (0, ee.$os)(ee.$ps, ee.KeyCode.KeyC),
								mac: { primary: (0, ee.$os)(ee.$qs, ee.KeyCode.KeyC) },
								weight: ne.KeybindingWeight.WorkbenchContrib,
							},
							metadata: {
								description: t.localize2(
									6822,
									"Opens a new diff editor to compare the active file with the contents of the clipboard.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(n.$Li),
							ht = lt.get(o.$MO),
							Rt = lt.get(a.$ll),
							Nt = h.$A1.getOriginalUri(ct.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							}),
							jt = `clipboardCompare${Je.b++}`;
						if (
							Nt &&
							(Rt.hasProvider(Nt) || Nt.scheme === v.Schemas.untitled)
						) {
							if (!this.a) {
								const hi = gt.createInstance(Te);
								this.a = ht.registerTextModelContentProvider(jt, hi);
							}
							const ti = E.$kh(Nt),
								kt = t.localize(6787, null, ti);
							await ct
								.openEditor({
									original: { resource: Nt.with({ scheme: jt }) },
									modified: { resource: Nt },
									label: kt,
									options: { pinned: !0 },
								})
								.finally(() => {
									(0, r.$Vc)(this.a), (this.a = void 0);
								});
						}
					}
					dispose() {
						(0, r.$Vc)(this.a), (this.a = void 0);
					}
				}
				e.$gXb = Je;
				let Te = class {
					constructor(lt, ct, gt) {
						(this.a = lt), (this.b = ct), (this.c = gt);
					}
					async provideTextContent(lt) {
						const ct = await this.a.readText();
						return this.c.createModel(
							ct,
							this.b.createByFilepathOrFirstLine(lt),
							lt,
						);
					}
				};
				Te = Ne([j(0, b.$Vxb), j(1, s.$nM), j(2, l.$QO)], Te);
				function Ee(nt, lt, ct) {
					nt.prompt(I.Severity.Error, (0, d.$xj)(lt, !1), [
						{ label: t.localize(6788, null), run: () => ct() },
					]);
				}
				async function Ie(nt, lt) {
					const ct = nt.get(G.$LWb),
						gt = nt.get(a.$ll),
						ht = nt.get(f.$gj),
						Rt = nt.get(A.$_Y),
						Nt = nt.get(T.$IY),
						jt = nt.get(x.$HMb),
						ti = nt.get(I.$4N),
						kt = nt.get(W.$$m),
						hi = nt.get(y.$ek),
						Kt = nt.get(X.$I8),
						di = !jt.isViewVisible(u.$wUb),
						Ye = await jt.openView(u.$wUb, !0);
					if ((di && (await (0, O.$Nh)(500)), !Ye)) {
						if (lt) throw new Error("Open a folder or workspace first.");
						return hi.executeCommand(p.$oVb);
					}
					const ze = ct.getContext(!1),
						Xe = ze.length > 0 ? ze[0] : void 0;
					let It;
					if (
						(Xe
							? (It = Xe.isDirectory ? Xe : Xe.parent || ct.roots[0])
							: (It = ct.roots[0]),
						It.isReadonly)
					)
						throw new Error("Parent folder is readonly.");
					const Lt = new D.$KWb(gt, ht, Rt, It, lt);
					It.addChild(Lt);
					const xt = async (Bt) => {
							try {
								const Gt = E.$nh(It.resource, Bt);
								Bt.endsWith("/") && (lt = !0),
									await ct.applyBulkEdit(
										[new V.$uzb(void 0, Gt, { folder: lt })],
										{
											undoLabel: t.localize(6789, null, Bt),
											progressLabel: t.localize(6790, null, Bt),
											confirmBeforeUndo: !0,
										},
									),
									await re(Bt, ct),
									lt
										? await ct.select(Gt, !0)
										: await Nt.openEditor({
												resource: Gt,
												options: { pinned: !0 },
											});
							} catch (Gt) {
								Ee(ti, Gt, () => xt(Bt));
							}
						},
						Vt = (await kt.getEnvironment())?.os ?? i.OS;
					await ct.setEditable(Lt, {
						validationMessage: (Bt) => Oe(Kt, Lt, Bt, Vt),
						onFinish: async (Bt, Gt) => {
							It.removeChild(Lt), await ct.setEditable(Lt, null), Gt && xt(Bt);
						},
					});
				}
				y.$fk.registerCommand({
					id: e.$UWb,
					handler: async (nt) => {
						await Ie(nt, !1);
					},
				}),
					y.$fk.registerCommand({
						id: e.$WWb,
						handler: async (nt) => {
							await Ie(nt, !0);
						},
					});
				const Be = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = nt.get(I.$4N),
						gt = nt.get(W.$$m),
						ht = nt.get(X.$I8),
						Rt = nt.get(f.$gj),
						Nt = lt.getContext(!1),
						jt = Nt.length > 0 ? Nt[0] : void 0;
					if (!jt) return;
					const ti = (await gt.getEnvironment())?.os ?? i.OS;
					await lt.setEditable(jt, {
						validationMessage: (kt) => Oe(ht, jt, kt, ti),
						onFinish: async (kt, hi) => {
							if (hi) {
								const Kt = jt.parent.resource,
									di = E.$nh(Kt, kt);
								if (jt.resource.toString() !== di.toString())
									try {
										await lt.applyBulkEdit([new V.$uzb(jt.resource, di)], {
											confirmBeforeUndo:
												Rt.getValue().explorer.confirmUndo ===
												u.UndoConfirmLevel.Verbose,
											undoLabel: t.localize(6791, null, jt.name, kt),
											progressLabel: t.localize(6792, null, jt.name, kt),
										}),
											await re(kt, lt);
									} catch (Ye) {
										ct.error(Ye);
									}
							}
							await lt.setEditable(jt, null);
						},
					});
				};
				e.$hXb = Be;
				const Se = async (nt) => {
					const ct = nt
						.get(G.$LWb)
						.getContext(!0)
						.filter((gt) => !gt.isRoot);
					ct.length &&
						(await le(
							nt.get(G.$LWb),
							nt.get(B.$iZ),
							nt.get(S.$GO),
							nt.get(f.$gj),
							ct,
							!0,
						));
				};
				e.$iXb = Se;
				const ke = async (nt) => {
					const ct = nt
						.get(G.$LWb)
						.getContext(!0)
						.filter((gt) => !gt.isRoot);
					ct.length &&
						(await le(
							nt.get(G.$LWb),
							nt.get(B.$iZ),
							nt.get(S.$GO),
							nt.get(f.$gj),
							ct,
							!1,
						));
				};
				e.$jXb = ke;
				let Ue = !1;
				const qe = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = lt.getContext(!0);
					ct.length > 0 && (await lt.setToCopy(ct, !1), (Ue = !1));
				};
				e.$kXb = qe;
				const Ae = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = lt.getContext(!0);
					ct.length > 0 && (await lt.setToCopy(ct, !0), (Ue = !0));
				};
				e.$lXb = Ae;
				const Me = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = nt.get(I.$4N),
						gt = nt.get(n.$Li),
						ht = lt.getContext(!0),
						Rt = ht.length ? ht : lt.roots,
						Nt = gt.createInstance(K.$RWb);
					try {
						await Nt.download(Rt);
					} catch (jt) {
						throw (ct.error(jt), jt);
					}
				};
				y.$fk.registerCommand({ id: e.$4Wb, handler: Me });
				const De = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = nt.get(I.$4N),
						gt = nt.get(n.$Li),
						ht = lt.getContext(!1),
						Rt = ht.length ? ht[0] : lt.roots[0];
					try {
						const Nt = await (0, N.$zhb)();
						Nt && (await gt.createInstance(K.$PWb).upload(Rt, Nt));
					} catch (Nt) {
						throw (ct.error(Nt), Nt);
					}
				};
				y.$fk.registerCommand({ id: e.$6Wb, handler: De });
				const Re = async (nt, lt) => {
					const ct = nt.get(b.$Vxb),
						gt = nt.get(G.$LWb),
						ht = nt.get(a.$ll),
						Rt = nt.get(I.$4N),
						Nt = nt.get(T.$IY),
						jt = nt.get(f.$gj),
						ti = nt.get(q.$Vl),
						kt = nt.get(S.$GO),
						hi = nt.get(g.$asb),
						Kt = gt.getContext(!1),
						Ye =
							lt && lt.length > 0 && jt.getValue("explorer.confirmPasteNative"),
						ze = await je(lt, ct, hi);
					if (Ye && ze.files.length >= 1) {
						const Vt =
								ze.files.length > 1
									? t.localize(6793, null, ze.files.length)
									: t.localize(
											6794,
											null,
											(0, w.$sc)(
												ze.type === "paths"
													? ze.files[0].fsPath
													: ze.files[0].name,
											),
										),
							Bt =
								ze.files.length > 1
									? (0, S.$JO)(
											ze.files.map((Mt) => {
												if (C.URI.isUri(Mt)) return Mt.fsPath;
												if (ze.type === "paths") {
													const Ut = hi.getPathForFile(Mt);
													if (Ut) return Ut;
												}
												return Mt.name;
											}),
										)
									: void 0,
							Gt = await kt.confirm({
								message: Vt,
								detail: Bt,
								checkbox: { label: t.localize(6795, null) },
								primaryButton: t.localize(6796, null),
							});
						if (!Gt.confirmed) return;
						Gt.checkboxChecked === !0 &&
							(await jt.updateValue("explorer.confirmPasteNative", !1));
					}
					const Xe = Kt.length ? Kt[0] : gt.roots[0],
						It = jt.getValue().explorer.incrementalNaming;
					if (gt.getEditable()) return;
					try {
						let Vt = [];
						if (ze.type === "paths") {
							const Bt = (0, L.$Lb)(
								await Promise.all(
									ze.files.map(async (Gt) => {
										if (
											Xe.resource.toString() !== Gt.toString() &&
											E.$hh(Xe.resource, Gt)
										)
											throw new Error(t.localize(6797, null));
										const Mt = await ht.stat(Gt);
										let Ut;
										ti.extUri.isEqual(Xe.resource, Gt)
											? (Ut = Xe.parent)
											: (Ut = Xe.isDirectory ? Xe : Xe.parent);
										const ei = await $e(
											gt,
											ht,
											kt,
											Ut,
											{
												resource: Gt,
												isDirectory: Mt.isDirectory,
												allowOverwrite: Ue || It === "disabled",
											},
											It,
										);
										if (ei) return { source: Gt, target: ei };
									}),
								),
							);
							if (Bt.length >= 1)
								if (Ue) {
									const Gt = Bt.map(
											(Ut) =>
												new V.$uzb(Ut.source, Ut.target, {
													overwrite: It === "disabled",
												}),
										),
										Mt = {
											confirmBeforeUndo:
												jt.getValue().explorer.confirmUndo ===
												u.UndoConfirmLevel.Verbose,
											progressLabel:
												Bt.length > 1
													? t.localize(6798, null, Bt.length)
													: t.localize(6799, null, E.$jh(Bt[0].target)),
											undoLabel:
												Bt.length > 1
													? t.localize(6800, null, Bt.length)
													: t.localize(6801, null, E.$jh(Bt[0].target)),
										};
									await gt.applyBulkEdit(Gt, Mt);
								} else {
									const Gt = Bt.map(
										(Mt) =>
											new V.$uzb(Mt.source, Mt.target, {
												copy: !0,
												overwrite: It === "disabled",
											}),
									);
									await xt(
										Bt.map((Mt) => Mt.target),
										Gt,
									);
								}
							Vt = Bt.map((Gt) => Gt.target);
						} else {
							const Bt = (0, L.$Lb)(
								await Promise.all(
									ze.files.map(async (Gt) => {
										const Mt = Xe.isDirectory ? Xe : Xe.parent,
											Ut = await $e(
												gt,
												ht,
												kt,
												Mt,
												{
													resource: Gt.name,
													isDirectory: !1,
													allowOverwrite: Ue || It === "disabled",
												},
												It,
											);
										if (Ut)
											return {
												target: Ut,
												edit: new V.$uzb(void 0, Ut, {
													overwrite: It === "disabled",
													contents: (async () =>
														te.$Te.wrap(
															new Uint8Array(await Gt.arrayBuffer()),
														))(),
												}),
											};
									}),
								),
							);
							await xt(
								Bt.map((Gt) => Gt.target),
								Bt.map((Gt) => Gt.edit),
							),
								(Vt = Bt.map((Gt) => Gt.target));
						}
						if (Vt.length) {
							const Bt = Vt[0];
							if ((await gt.select(Bt), Vt.length === 1)) {
								const Gt = gt.findClosest(Bt);
								Gt &&
									!Gt.isDirectory &&
									(await Nt.openEditor({
										resource: Gt.resource,
										options: { pinned: !0, preserveFocus: !0 },
									}));
							}
						}
					} catch (Vt) {
						se(Rt, new Error(t.localize(6802, null, (0, M.$bb)(Vt))));
					} finally {
						Ue && (await gt.setToCopy([], !1), (Ue = !1));
					}
					async function xt(Vt, Bt) {
						const Gt = jt.getValue().explorer.confirmUndo,
							Mt = {
								confirmBeforeUndo:
									Gt === u.UndoConfirmLevel.Default ||
									Gt === u.UndoConfirmLevel.Verbose,
								progressLabel:
									Vt.length > 1
										? t.localize(6803, null, Vt.length)
										: t.localize(6804, null, E.$jh(Vt[0])),
								undoLabel:
									Vt.length > 1
										? t.localize(6805, null, Vt.length)
										: t.localize(6806, null, E.$jh(Vt[0])),
							};
						await gt.applyBulkEdit(Bt, Mt);
					}
				};
				e.$mXb = Re;
				async function je(nt, lt, ct) {
					if (nt && nt.length > 0) {
						const gt = [...nt]
							.map((ht) => ct.getPathForFile(ht))
							.filter((ht) => !!ht && (0, w.$nc)(ht))
							.map((ht) => C.URI.file(ht));
						return gt.length
							? { type: "paths", files: gt }
							: {
									type: "data",
									files: [...nt].filter((ht) => !ct.getPathForFile(ht)),
								};
					} else
						return {
							type: "paths",
							files: E.$wh(await lt.readResources(), (gt) => gt),
						};
				}
				const Ve = async (nt) => {
					const lt = nt.get(T.$IY),
						gt = nt.get(G.$LWb).getContext(!0);
					await lt.openEditors(
						gt
							.filter((ht) => !ht.isDirectory)
							.map((ht) => ({
								resource: ht.resource,
								options: { preserveFocus: !0 },
							})),
					);
				};
				e.$nXb = Ve;
				class Ze extends Y.$3X {
					constructor(lt, ct, gt) {
						super({
							id: lt,
							title: ct,
							f1: !0,
							category: _.$ck.File,
							precondition: ie.$QPb,
						}),
							(this.a = gt);
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(A.$_Y),
							ht = h.$A1.getOriginalUri(ct.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							});
						ht && (await gt.updateReadonly(ht, this.a));
					}
				}
				class et extends Ze {
					static {
						this.ID = "workbench.action.files.setActiveEditorReadonlyInSession";
					}
					static {
						this.LABEL = t.localize2(
							6823,
							"Set Active Editor Read-only in Session",
						);
					}
					constructor() {
						super(et.ID, et.LABEL, !0);
					}
				}
				e.$oXb = et;
				class rt extends Ze {
					static {
						this.ID =
							"workbench.action.files.setActiveEditorWriteableInSession";
					}
					static {
						this.LABEL = t.localize2(
							6824,
							"Set Active Editor Writeable in Session",
						);
					}
					constructor() {
						super(rt.ID, rt.LABEL, !1);
					}
				}
				e.$pXb = rt;
				class ft extends Ze {
					static {
						this.ID =
							"workbench.action.files.toggleActiveEditorReadonlyInSession";
					}
					static {
						this.LABEL = t.localize2(
							6825,
							"Toggle Active Editor Read-only in Session",
						);
					}
					constructor() {
						super(ft.ID, ft.LABEL, "toggle");
					}
				}
				e.$qXb = ft;
				class bt extends Ze {
					static {
						this.ID =
							"workbench.action.files.resetActiveEditorReadonlyInSession";
					}
					static {
						this.LABEL = t.localize2(
							6826,
							"Reset Active Editor Read-only in Session",
						);
					}
					constructor() {
						super(bt.ID, bt.LABEL, "reset");
					}
				}
				e.$rXb = bt;
			},
		),
		define(
			de[4021],
			he([
				1, 0, 4, 5, 35, 39, 49, 25, 10, 146, 362, 51, 73, 8, 60, 41, 32, 12, 7,
				72,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oAc = void 0),
					(t = mt(t));
				let l = class extends r.$TMb {
					static {
						s = this;
					}
					static {
						this.ID = "workbench.explorer.emptyView";
					}
					static {
						this.NAME = t.localize2(6982, "No Folder Opened");
					}
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R) {
						super($, T, P, L, M, S, I, N, v, A, R),
							(this.b = k),
							(this.c = D),
							(this.a = !1),
							this.D(this.b.onDidChangeWorkbenchState(() => this.g())),
							this.D(this.c.onDidChangeFormatters(() => this.g()));
					}
					shouldShowWelcome() {
						return !0;
					}
					W($) {
						super.W($),
							this.D(
								new f.$Hhb($, {
									onDrop: (v) => {
										($.style.backgroundColor = ""),
											this.Db.createInstance(u.$OSb, {
												allowWorkspaceOpen:
													!o.$r || (0, d.$bj)(this.b.getWorkspace()),
											}).handleDrop(v, (0, f.getWindow)($));
									},
									onDragEnter: () => {
										const v = this.Fb.getColorTheme().getColor(a.$OS);
										$.style.backgroundColor = v ? v.toString() : "";
									},
									onDragEnd: () => {
										$.style.backgroundColor = "";
									},
									onDragLeave: () => {
										$.style.backgroundColor = "";
									},
									onDragOver: (v) => {
										v.dataTransfer && (v.dataTransfer.dropEffect = "copy");
									},
								}),
							),
							this.g();
					}
					g() {
						this.a ||
							(this.b.getWorkbenchState() === d.WorkbenchState.WORKSPACE
								? this.Sb(s.NAME.value)
								: this.Sb(this.title));
					}
					dispose() {
						(this.a = !0), super.dispose();
					}
				};
				(e.$oAc = l),
					(e.$oAc =
						l =
						s =
							Ne(
								[
									j(1, w.$iP),
									j(2, n.$K1),
									j(3, i.$Li),
									j(4, E.$uZ),
									j(5, C.$Xxb),
									j(6, d.$Vi),
									j(7, m.$gj),
									j(8, h.$3N),
									j(9, c.$6j),
									j(10, g.$7rb),
									j(11, p.$km),
									j(12, b.$Uyb),
								],
								l,
							));
			},
		),
		define(
			de[1945],
			he([
				1, 0, 7, 215, 431, 84, 40, 22, 96, 25, 3, 27, 264, 49, 35, 10, 220, 19,
				292, 4, 288, 82, 54, 710, 535, 347, 362, 5, 323, 23, 539, 12, 57, 449,
				18, 1057, 132, 6, 73, 28, 68, 199, 382, 1944, 163, 762, 1861, 59, 387,
				106, 15, 170, 75, 1732,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
			) {
				"use strict";
				var _, te;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DXb =
						e.$BXb =
						e.$AXb =
						e.$zXb =
						e.$yXb =
						e.$xXb =
						e.$wXb =
						e.$vXb =
						e.$uXb =
							void 0),
					(e.$CXb = $e),
					(t = mt(t)),
					(i = mt(i)),
					(y = mt(y));
				class Q {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight(me) {
						return Q.ITEM_HEIGHT;
					}
					getTemplateId(me) {
						return re.ID;
					}
				}
				(e.$uXb = Q), (e.$vXb = new B.$re());
				let Z = class {
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						(this.a = me),
							(this.b = ve),
							(this.f = ge),
							(this.g = be),
							(this.h = Ce),
							(this.j = Le),
							(this.k = Fe),
							(this.l = Oe),
							(this.m = xe);
					}
					hasChildren(me) {
						return (
							Array.isArray(me) ||
							me.hasChildren((ve) =>
								this.a.filter(ve, h.TreeVisibility.Visible),
							)
						);
					}
					getChildren(me) {
						if (Array.isArray(me)) return me;
						const ve = me.error,
							ge = this.k.sortOrderConfiguration.sortOrder,
							be = me.fetchChildren(ge);
						if (Array.isArray(be)) return be;
						const Ce = be.then(
							(Le) => (
								me instanceof $.$JWb &&
									me.isRoot &&
									!me.error &&
									ve &&
									this.l.getWorkbenchState() !== r.WorkbenchState.FOLDER &&
									e.$vXb.fire(me.resource),
								Le
							),
							(Le) => {
								if (me instanceof $.$JWb && me.isRoot)
									if (this.l.getWorkbenchState() === r.WorkbenchState.FOLDER) {
										const Fe = new $.$JWb(
											me.resource,
											this.j,
											this.f,
											this.m,
											void 0,
											void 0,
											!1,
										);
										return (Fe.error = Le), [Fe];
									} else e.$vXb.fire(me.resource);
								else this.g.error(Le);
								return [];
							},
						);
						return (
							this.b.withProgress(
								{
									location: E.ProgressLocation.Explorer,
									delay: this.h.isRestored() ? 800 : 1500,
								},
								(Le) => Ce,
							),
							Ce
						);
					}
				};
				(e.$wXb = Z),
					(e.$wXb = Z =
						Ne(
							[
								j(1, E.$8N),
								j(2, g.$gj),
								j(3, C.$4N),
								j(4, m.$mEb),
								j(5, d.$ll),
								j(6, H.$LWb),
								j(7, r.$Vi),
								j(8, ie.$_Y),
							],
							Z,
						));
				class se {
					static {
						this.ID = 0;
					}
					get index() {
						return this.a;
					}
					get count() {
						return this.items.length;
					}
					get current() {
						return this.items[this.a];
					}
					get currentId() {
						return `${this.h}_${this.index}`;
					}
					get labels() {
						return this.b;
					}
					constructor(me, ve, ge, be, Ce) {
						(this.h = me),
							(this.items = ve),
							(this.j = be),
							(this.k = Ce),
							(this.g = new B.$re()),
							(this.onDidChange = this.g.event),
							(this.a = ve.length - 1),
							this.l(ge),
							(this.f = ge.label.onDidRender(() => this.l(ge)));
					}
					l(me) {
						this.b = Array.from(me.container.querySelectorAll(".label-name"));
						let ve = "";
						for (let ge = 0; ge < this.labels.length; ge++) {
							const be = ve.length
								? `${this.items[ge].name}, compact, ${ve}`
								: this.items[ge].name;
							this.labels[ge].setAttribute("aria-label", be),
								this.labels[ge].setAttribute("aria-level", `${this.j + ge}`),
								(ve = ve.length
									? `${this.items[ge].name} ${ve}`
									: this.items[ge].name);
						}
						this.updateCollapsed(this.k),
							this.a < this.labels.length &&
								this.labels[this.a].classList.add("active");
					}
					previous() {
						this.a <= 0 || this.setIndex(this.a - 1);
					}
					next() {
						this.a >= this.items.length - 1 || this.setIndex(this.a + 1);
					}
					first() {
						this.a !== 0 && this.setIndex(0);
					}
					last() {
						this.a !== this.items.length - 1 &&
							this.setIndex(this.items.length - 1);
					}
					setIndex(me) {
						me < 0 ||
							me >= this.items.length ||
							(this.labels[this.a].classList.remove("active"),
							(this.a = me),
							this.labels[this.a].classList.add("active"),
							this.g.fire());
					}
					updateCollapsed(me) {
						this.k = me;
						for (let ve = 0; ve < this.labels.length; ve++)
							this.labels[ve].setAttribute(
								"aria-expanded",
								me ? "false" : "true",
							);
					}
					dispose() {
						this.g.dispose(), this.f.dispose();
					}
				}
				e.$xXb = se;
				let re = class {
					static {
						_ = this;
					}
					static {
						this.ID = "file";
					}
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke) {
						(this.h = ve),
							(this.j = ge),
							(this.k = be),
							(this.l = Ce),
							(this.m = Le),
							(this.n = Fe),
							(this.o = Oe),
							(this.p = xe),
							(this.q = He),
							(this.t = Ke),
							(this.f = new Map()),
							(this.g = new B.$xe()),
							(this.onDidChangeActiveDescendant = this.g.event),
							(this.a = this.m.getValue());
						const Je = () => {
							const Te = this.m.getValue("workbench.tree.indent"),
								Ee = Math.max(22 - Te, 0);
							me.style.setProperty(
								"--vscode-explorer-align-offset-margin-left",
								`${Ee}px`,
							);
						};
						(this.b = this.m.onDidChangeConfiguration((Te) => {
							Te.affectsConfiguration("explorer") &&
								(this.a = this.m.getValue()),
								Te.affectsConfiguration("workbench.tree.indent") && Je();
						})),
							Je();
					}
					getWidgetAriaLabel() {
						return (0, b.localize)(6994, null);
					}
					get templateId() {
						return _.ID;
					}
					renderTemplate(me) {
						const ve = new u.$Zc(),
							ge = ve.add(this.h.create(me, { supportHighlights: !0 }));
						ve.add(
							ge.onDidRender(() => {
								try {
									Ce.currentContext && this.j(Ce.currentContext);
								} catch {}
							}),
						);
						const be = ee.$tXb.create(this.t, me, ve);
						ve.add(
							ee.$tXb.onDidRegisterDescriptor((Le) => {
								const Fe = Le.create(this.t, me);
								be.push(ve.add(Fe)),
									Fe.setResource(Ce.currentContext?.resource);
							}),
						);
						const Ce = {
							templateDisposables: ve,
							elementDisposables: ve.add(new u.$Zc()),
							label: ge,
							container: me,
							contribs: be,
						};
						return Ce;
					}
					renderElement(me, ve, ge) {
						const be = me.element;
						ge.currentContext = be;
						const Ce = this.n.getEditableData(be);
						ge.label.element.classList.remove("compressed"),
							Ce
								? ((ge.label.element.style.display = "none"),
									ge.contribs.forEach((Le) => Le.setResource(void 0)),
									ge.elementDisposables.add(this.v(ge.container, be, Ce)))
								: ((ge.label.element.style.display = "flex"),
									this.u(be, be.name, void 0, me.filterData, ge));
					}
					renderCompressedElements(me, ve, ge, be) {
						const Ce = me.element.elements[me.element.elements.length - 1];
						ge.currentContext = Ce;
						const Le = me.element.elements.filter((Oe) =>
								this.n.isEditable(Oe),
							),
							Fe = Le.length === 0 ? void 0 : this.n.getEditableData(Le[0]);
						if (Fe)
							ge.label.element.classList.remove("compressed"),
								(ge.label.element.style.display = "none"),
								ge.contribs.forEach((Oe) => Oe.setResource(void 0)),
								ge.elementDisposables.add(this.v(ge.container, Le[0], Fe));
						else {
							ge.label.element.classList.add("compressed"),
								(ge.label.element.style.display = "flex");
							const Oe = `compressed-explorer_${se.ID++}`,
								xe = me.element.elements.map((Je) => Je.name);
							this.u(Ce, xe, Oe, me.filterData, ge);
							const He = new se(
								Oe,
								me.element.elements,
								ge,
								me.depth,
								me.collapsed,
							);
							ge.elementDisposables.add(He);
							const Ke = this.f.get(Ce) ?? [];
							this.f.set(Ce, [...Ke, He]),
								ge.elementDisposables.add(this.g.add(He.onDidChange)),
								ge.elementDisposables.add(
									t.$0fb(ge.container, "mousedown", (Je) => {
										const Te = pe(Je.target);
										Te && He.setIndex(Te.index);
									}),
								),
								ge.elementDisposables.add(
									(0, u.$Yc)(() => {
										const Je = this.f.get(Ce) ?? [],
											Te = Je.findIndex((Ee) => Ee === He);
										if (Te < 0)
											throw new Error(
												"Disposing unknown navigation controller",
											);
										Je.length === 1 ? this.f.delete(Ce) : Je.splice(Te, 1);
									}),
								);
						}
					}
					u(me, ve, ge, be, Ce) {
						Ce.label.element.style.display = "flex";
						const Le = ["explorer-item"];
						this.n.isCut(me) && Le.push("cut");
						const Fe = this.l.getFileIconTheme();
						Ce.container.parentElement?.parentElement
							?.querySelector(".monaco-tl-twistie")
							?.classList.toggle(
								"force-twistie",
								me.hasNests && Fe.hidesExplorerArrows,
							);
						const xe =
								Fe.hasFileIcons &&
								(Fe.hidesExplorerArrows || !Fe.hasFolderIcons),
							He = me.nestedParent && xe;
						Ce.contribs.forEach((Ke) => Ke.setResource(me.resource)),
							Ce.label.setResource(
								{ resource: me.resource, name: ve },
								{
									fileKind: me.isRoot
										? d.FileKind.ROOT_FOLDER
										: me.isDirectory
											? d.FileKind.FOLDER
											: d.FileKind.FILE,
									extraClasses: He
										? [...Le, "align-nest-icon-with-parent-icon"]
										: Le,
									fileDecorations: this.a.explorer.decorations,
									matches: (0, O.$3k)(be),
									separator: this.o.getSeparator(
										me.resource.scheme,
										me.resource.authority,
									),
									domId: ge,
								},
							);
					}
					v(me, ve, ge) {
						const be = this.h.create(me),
							Ce = ["explorer-item", "explorer-item-edited"],
							Le = ve.isRoot
								? d.FileKind.ROOT_FOLDER
								: ve.isDirectory
									? d.FileKind.FOLDER
									: d.FileKind.FILE,
							Fe = this.l.getFileIconTheme(),
							Oe =
								Fe.hasFileIcons &&
								(Fe.hidesExplorerArrows || !Fe.hasFolderIcons),
							xe = ve.nestedParent && Oe,
							He = {
								hidePath: !0,
								hideLabel: !0,
								fileKind: Le,
								extraClasses: xe
									? [...Ce, "align-nest-icon-with-parent-icon"]
									: Ce,
							},
							Ke = ve.name ? (0, o.$mh)(ve.resource) : ve.resource,
							Je = ve.name || "";
						be.setFile((0, o.$nh)(Ke, Je || " "), He),
							(be.element.firstElementChild.style.display = "none");
						const Te = new f.$Mob(be.element, this.k, {
								validationOptions: {
									validation: (Ue) => {
										const qe = ge.validationMessage(Ue);
										return !qe || qe.severity !== C.Severity.Error
											? null
											: {
													content: qe.content,
													formatContent: !0,
													type: f.MessageType.ERROR,
												};
									},
								},
								ariaLabel: (0, b.localize)(6995, null),
								inputBoxStyles: X.$wyb,
							}),
							Ee = Je.lastIndexOf(".");
						let Ie = "prefix";
						(Te.value = Je),
							Te.focus(),
							Te.select({
								start: 0,
								end: Ee > 0 && !ve.isDirectory ? Ee : Je.length,
							});
						const Be = (0, s.$hb)((Ue, qe) => {
								be.element.style.display = "none";
								const Ae = Te.value;
								(0, u.$Vc)(ke), be.element.remove(), qe && ge.onFinish(Ae, Ue);
							}),
							Se = () => {
								if (Te.isInputValid()) {
									const Ue = ge.validationMessage(Te.value);
									Ue
										? Te.showMessage({
												content: Ue.content,
												formatContent: !0,
												type:
													Ue.severity === C.Severity.Info
														? f.MessageType.INFO
														: Ue.severity === C.Severity.Warning
															? f.MessageType.WARNING
															: f.MessageType.ERROR,
											})
										: Te.hideMessage();
								}
							};
						Se();
						const ke = [
							Te,
							Te.onDidChange((Ue) => {
								be.setFile((0, o.$nh)(Ke, Ue || " "), He);
							}),
							t.$$fb(Te.inputElement, t.$$gb.KEY_DOWN, (Ue) => {
								if (Ue.equals(a.KeyCode.F2)) {
									const qe = Te.value.lastIndexOf(".");
									if (ve.isDirectory || qe === -1) return;
									Ie === "prefix"
										? ((Ie = "all"),
											Te.select({ start: 0, end: Te.value.length }))
										: Ie === "all"
											? ((Ie = "suffix"),
												Te.select({ start: qe + 1, end: Te.value.length }))
											: ((Ie = "prefix"), Te.select({ start: 0, end: qe }));
								} else
									Ue.equals(a.KeyCode.Enter)
										? Te.validate() || Be(!0, !0)
										: Ue.equals(a.KeyCode.Escape) && Be(!1, !0);
							}),
							t.$$fb(Te.inputElement, t.$$gb.KEY_UP, (Ue) => {
								Se();
							}),
							t.$0fb(Te.inputElement, t.$$gb.BLUR, async () => {
								for (;;) {
									await (0, Y.$Nh)(0);
									const Ue = Te.inputElement.ownerDocument;
									if (!Ue.hasFocus()) break;
									if (t.$Kgb(Te.inputElement)) return;
									if (
										t.$Ygb(Ue.activeElement) &&
										t.$Fgb(Ue.activeElement, "context-view")
									)
										await B.Event.toPromise(this.q.onDidHideContextMenu);
									else break;
								}
								Be(Te.isInputValid(), !0);
							}),
							be,
						];
						return (0, u.$Yc)(() => {
							Be(!1, !1);
						});
					}
					disposeElement(me, ve, ge) {
						(ge.currentContext = void 0), ge.elementDisposables.clear();
					}
					disposeCompressedElements(me, ve, ge) {
						(ge.currentContext = void 0), ge.elementDisposables.clear();
					}
					disposeTemplate(me) {
						me.templateDisposables.dispose();
					}
					getCompressedNavigationController(me) {
						return this.f.get(me);
					}
					getAriaLabel(me) {
						return me.name;
					}
					getAriaLevel(me) {
						let ve = 0,
							ge = me.parent;
						for (; ge; ) (ge = ge.parent), ve++;
						return (
							this.p.getWorkbenchState() === r.WorkbenchState.WORKSPACE &&
								(ve = ve + 1),
							ve
						);
					}
					getActiveDescendantId(me) {
						return this.f.get(me)?.[0]?.currentId ?? void 0;
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$yXb = re),
					(e.$yXb =
						re =
						_ =
							Ne(
								[
									j(3, c.$Wxb),
									j(4, n.$iP),
									j(5, g.$gj),
									j(6, H.$LWb),
									j(7, U.$3N),
									j(8, r.$Vi),
									j(9, c.$Xxb),
									j(10, T.$Li),
								],
								re,
							));
				let le = class {
					constructor(me, ve, ge, be, Ce, Le) {
						(this.k = me),
							(this.l = ve),
							(this.m = ge),
							(this.n = be),
							(this.o = Ce),
							(this.p = Le),
							(this.a = new Map()),
							(this.b = new Set()),
							(this.f = new B.$re()),
							(this.g = []),
							(this.h = new Map()),
							(this.j = new Map()),
							this.g.push(this.k.onDidChangeWorkspaceFolders(() => this.q())),
							this.g.push(
								this.l.onDidChangeConfiguration((Fe) => {
									(Fe.affectsConfiguration("files.exclude") ||
										Fe.affectsConfiguration("explorer.excludeGitIgnore")) &&
										this.q();
								}),
							),
							this.g.push(
								this.p.onDidFilesChange((Fe) => {
									for (const [Oe, xe] of this.h.entries())
										xe.forEach(async (He) => {
											Fe.contains(He, d.FileChangeType.UPDATED) &&
												(await this.t(Oe, He, !0)),
												Fe.contains(He, d.FileChangeType.DELETED) &&
													(this.j.get(Oe)?.delete((0, o.$mh)(He)),
													xe.delete(He),
													this.f.fire());
										});
								}),
							),
							this.g.push(
								this.n.onDidVisibleEditorsChange(() => {
									const Fe = this.n.visibleEditors;
									let Oe = !1;
									for (const xe of Fe) {
										if (!xe.resource) continue;
										const He = this.m.findClosest(xe.resource);
										if (He && He.isExcluded) {
											Oe = !0;
											break;
										}
									}
									for (const xe of this.b)
										if (!Fe.includes(xe)) {
											Oe = !0;
											break;
										}
									Oe && (this.b.clear(), this.f.fire());
								}),
							),
							this.q();
					}
					get onDidChange() {
						return this.f.event;
					}
					q() {
						let me = !1,
							ve = !1;
						this.k.getWorkspace().folders.forEach((ge) => {
							const be = this.l.getValue({ resource: ge.uri }),
								Ce = be?.files?.exclude || Object.create(null),
								Le = be.explorer.excludeGitIgnore;
							if (
								(Le &&
									!this.j.has(ge.uri.toString()) &&
									((ve = !0),
									this.h.set(ge.uri.toString(), new J.$Hc()),
									this.j.set(
										ge.uri.toString(),
										W.$Si.forUris((Oe) => this.o.extUri.ignorePathCasing(Oe)),
									)),
								!Le &&
									this.j.has(ge.uri.toString()) &&
									((ve = !0),
									this.h.delete(ge.uri.toString()),
									this.j.delete(ge.uri.toString())),
								!me)
							) {
								const Oe = this.a.get(ge.uri.toString());
								me = !Oe || !(0, l.$zo)(Oe.original, Ce);
							}
							const Fe = (0, l.$vo)(Ce);
							this.a.set(ge.uri.toString(), {
								original: Fe,
								parsed: i.$Jk(Fe),
							});
						}),
							(me || ve) && (this.b.clear(), this.f.fire());
					}
					async t(me, ve, ge) {
						const be = (0, o.$mh)(ve),
							Ce = this.j.get(me);
						if (!Ce || (!ge && Ce.has(be))) return;
						const Le = await this.p.readFile(ve);
						if (ge) Ce.get(be)?.updateContents(Le.value.toString());
						else {
							const Fe = Ce.findSubstr(be),
								Oe = new K.$sXb(Le.value.toString(), be.path, Fe);
							Ce.set(be, Oe),
								this.h.get(me)?.has(ve) || this.h.get(me)?.add(ve);
						}
						this.f.fire();
					}
					filter(me, ve) {
						return me.name === ".gitignore" &&
							this.j.has(me.root.resource.toString())
							? (this.t(me.root.resource.toString(), me.resource, !1), !0)
							: this.u(me, ve);
					}
					u(me, ve) {
						if (((me.isExcluded = !1), ve === h.TreeVisibility.Hidden))
							return (me.isExcluded = !0), !1;
						if (this.m.getEditableData(me)) return !0;
						const be = this.a
								.get(me.root.resource.toString())
								?.parsed(
									y.$qc(me.root.resource.path, me.resource.path),
									me.name,
									(Oe) => !!(me.parent && me.parent.getChild(Oe)),
								),
							Le = (
								be
									? void 0
									: this.j
											.get(me.root.resource.toString())
											?.findSubstr(me.resource)
							)?.isPathIncludedInTraversal(me.resource.path, me.isDirectory);
						if ((Le === void 0 ? !1 : !Le) || be || me.parent?.isExcluded) {
							me.isExcluded = !0;
							const xe = this.n.visibleEditors.find(
								(He) =>
									He.resource &&
									this.o.extUri.isEqualOrParent(He.resource, me.resource),
							);
							return xe && me.root === this.m.findClosestRoot(me.resource)
								? (this.b.add(xe), !0)
								: !1;
						}
						return !0;
					}
					dispose() {
						(0, u.$Vc)(this.g);
					}
				};
				(e.$zXb = le),
					(e.$zXb = le =
						Ne(
							[
								j(0, r.$Vi),
								j(1, g.$gj),
								j(2, H.$LWb),
								j(3, A.$IY),
								j(4, F.$Vl),
								j(5, d.$ll),
							],
							le,
						));
				let oe = class {
					constructor(me, ve) {
						(this.a = me), (this.b = ve);
					}
					compare(me, ve) {
						if (me.isRoot) {
							if (ve.isRoot) {
								const Oe = this.b.getWorkspaceFolder(me.resource),
									xe = this.b.getWorkspaceFolder(ve.resource);
								return Oe && xe ? Oe.index - xe.index : -1;
							}
							return -1;
						}
						if (ve.isRoot) return 1;
						const ge = this.a.sortOrderConfiguration.sortOrder,
							be = this.a.sortOrderConfiguration.lexicographicOptions;
						this.a.sortOrderConfiguration.reverse && ([me, ve] = [ve, me]);
						let Le, Fe;
						switch (be) {
							case "upper":
								(Le = v.$5r), (Fe = v.$0r);
								break;
							case "lower":
								(Le = v.$6r), (Fe = v.$$r);
								break;
							case "unicode":
								(Le = v.$7r), (Fe = v.$_r);
								break;
							default:
								(Le = v.$4r), (Fe = v.$9r);
						}
						switch (ge) {
							case "type":
								if (me.isDirectory && !ve.isDirectory) return -1;
								if (ve.isDirectory && !me.isDirectory) return 1;
								if (me.isDirectory && ve.isDirectory)
									return Le(me.name, ve.name);
								break;
							case "filesFirst":
								if (me.isDirectory && !ve.isDirectory) return 1;
								if (ve.isDirectory && !me.isDirectory) return -1;
								break;
							case "foldersNestsFiles":
								if (me.isDirectory && !ve.isDirectory) return -1;
								if (ve.isDirectory && !me.isDirectory) return 1;
								if (me.hasNests && !ve.hasNests) return -1;
								if (ve.hasNests && !me.hasNests) return 1;
								break;
							case "mixed":
								break;
							default:
								if (me.isDirectory && !ve.isDirectory) return -1;
								if (ve.isDirectory && !me.isDirectory) return 1;
								break;
						}
						switch (ge) {
							case "type":
								return Fe(me.name, ve.name);
							case "modified":
								return me.mtime !== ve.mtime
									? me.mtime && ve.mtime && me.mtime < ve.mtime
										? 1
										: -1
									: Le(me.name, ve.name);
							default:
								return Le(me.name, ve.name);
						}
					}
				};
				(e.$AXb = oe), (e.$AXb = oe = Ne([j(0, H.$LWb), j(1, r.$Vi)], oe));
				let ae = class {
					static {
						te = this;
					}
					static {
						this.a = "explorer.confirmDragAndDrop";
					}
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe, He) {
						(this.j = me),
							(this.k = ve),
							(this.l = ge),
							(this.m = be),
							(this.n = Ce),
							(this.o = Le),
							(this.p = Fe),
							(this.q = Oe),
							(this.t = xe),
							(this.u = He),
							(this.f = u.$1c.None),
							(this.g = new u.$Zc()),
							(this.h = !1);
						const Ke = (Je) => {
							(!Je || Je.affectsConfiguration("explorer.enableDragAndDrop")) &&
								(this.h = this.p.getValue("explorer.enableDragAndDrop"));
						};
						Ke(void 0),
							this.g.add(this.p.onDidChangeConfiguration((Je) => Ke(Je)));
					}
					onDragOver(me, ve, ge, be, Ce) {
						if (!this.h) return !1;
						if (ve) {
							const Le = te.B(ve, Ce);
							if (Le) {
								const Fe = pe(Ce.target);
								if (Fe && Fe.index < Fe.count - 1) {
									const Oe = this.v(me, Le, ge, be, Ce);
									return Oe
										? (Fe.element !== this.b &&
												((this.b = Fe.element),
												this.f.dispose(),
												(this.f = (0, u.$Yc)(() => {
													Fe.element.classList.remove("drop-target"),
														(this.b = void 0);
												})),
												Fe.element.classList.add("drop-target")),
											typeof Oe == "boolean" ? Oe : { ...Oe, feedback: [] })
										: (this.f.dispose(), !1);
								}
							}
						}
						return this.f.dispose(), this.v(me, ve, ge, be, Ce);
					}
					v(me, ve, ge, be, Ce) {
						const Le = Ce && ((Ce.ctrlKey && !D.$m) || (Ce.altKey && D.$m)),
							Fe = me instanceof L.$yib,
							xe = {
								type:
									Fe || Le
										? w.ListDragOverEffectType.Copy
										: w.ListDragOverEffectType.Move,
								position: w.ListDragOverEffectPosition.Over,
							};
						if (Fe) {
							if (
								!(0, S.$mzb)(Ce, P.$Ohb.FILES, S.$hzb.FILES, P.$Ohb.RESOURCES)
							)
								return !1;
						} else {
							if (me instanceof L.$xib) return !1;
							{
								const He = te.A(me),
									Ke = He.every((Je) => Je.isRoot);
								if (!ve)
									return !Le &&
										He.every((Je) => !!Je.parent && Je.parent.isRoot)
										? !1
										: Ke
											? {
													accept: !0,
													effect: {
														type: w.ListDragOverEffectType.Move,
														position: w.ListDragOverEffectPosition.After,
													},
												}
											: {
													accept: !0,
													bubble: h.TreeDragOverBubble.Down,
													effect: xe,
													autoExpand: !1,
												};
								if (
									!Array.isArray(He) ||
									(!Le && He.every((Je) => Je.isReadonly)) ||
									He.some((Je) =>
										Je.isRoot
											? !1
											: !!(
													this.u.extUri.isEqual(Je.resource, ve.resource) ||
													(!Le &&
														this.u.extUri.isEqual(
															(0, o.$mh)(Je.resource),
															ve.resource,
														)) ||
													this.u.extUri.isEqualOrParent(
														ve.resource,
														Je.resource,
													)
												),
									)
								)
									return !1;
								if (Ke) {
									if (!ve.isRoot) return !1;
									let Je;
									switch (be) {
										case L.ListViewTargetSector.TOP:
										case L.ListViewTargetSector.CENTER_TOP:
											Je = w.ListDragOverEffectPosition.Before;
											break;
										case L.ListViewTargetSector.CENTER_BOTTOM:
										case L.ListViewTargetSector.BOTTOM:
											Je = w.ListDragOverEffectPosition.After;
											break;
									}
									return {
										accept: !0,
										effect: {
											type: w.ListDragOverEffectType.Move,
											position: Je,
										},
									};
								}
							}
						}
						if (ve) {
							if (ve.isDirectory)
								return ve.isReadonly
									? !1
									: {
											accept: !0,
											bubble: h.TreeDragOverBubble.Down,
											effect: xe,
											autoExpand: !0,
										};
							if (
								this.n
									.getWorkspace()
									.folders.every(
										(He) => He.uri.toString() !== ve.resource.toString(),
									)
							)
								return {
									accept: !0,
									bubble: h.TreeDragOverBubble.Up,
									effect: xe,
								};
						} else
							return {
								accept: !0,
								bubble: h.TreeDragOverBubble.Down,
								effect: xe,
							};
						return !1;
					}
					getDragURI(me) {
						return this.k.isEditable(me) ? null : me.resource.toString();
					}
					getDragLabel(me, ve) {
						return me.length === 1 ? te.B(me[0], ve).name : String(me.length);
					}
					onDragStart(me, ve) {
						const ge = te.A(me, ve);
						if (ge && ge.length && ve.dataTransfer) {
							this.q.invokeFunction((Ce) => (0, I.$PSb)(Ce, ge, ve));
							const be = ge
								.filter((Ce) => Ce.resource.scheme === k.Schemas.file)
								.map((Ce) => Ce.resource.fsPath);
							be.length &&
								ve.dataTransfer.setData(S.$hzb.FILES, JSON.stringify(be));
						}
					}
					async drop(me, ve, ge, be, Ce) {
						if ((this.f.dispose(), ve)) {
							const Fe = te.B(ve, Ce);
							Fe && (ve = Fe);
						}
						if (
							(ve ||
								((ve = this.k.roots[this.k.roots.length - 1]),
								(be = L.ListViewTargetSector.BOTTOM)),
							!ve.isDirectory && ve.parent && (ve = ve.parent),
							ve.isReadonly)
						)
							return;
						const Le = ve;
						if (Le)
							try {
								me instanceof L.$yib
									? !D.$r ||
										((0, r.$bj)(this.n.getWorkspace()) &&
											G.WebFileSystemAccess.supported(ne.$Bfb))
										? await this.q
												.createInstance(q.$QWb)
												.import(Le, Ce, ne.$Bfb)
										: await this.q.createInstance(q.$PWb).upload(ve, Ce)
									: await this.w(me, Le, ge, be, Ce);
							} catch (Fe) {
								this.m.error((0, V.$xj)(Fe));
							}
					}
					async w(me, ve, ge, be, Ce) {
						const Le = te.A(me),
							Fe = new Map(Le.map((Je) => [Je, this.j(Je)]));
						for (const [Je, Te] of Fe)
							if (Te) {
								const Ee = Je.nestedChildren;
								if (Ee) for (const Ie of Ee) Fe.set(Ie, !0);
							}
						const Oe = (0, o.$wh)([...Fe.keys()], (Je) => Je.resource),
							xe = (Ce.ctrlKey && !D.$m) || (Ce.altKey && D.$m);
						if (!xe && this.p.getValue(te.a)) {
							const Je =
									Oe.length > 1 && Oe.every((Ie) => Ie.isRoot)
										? (0, b.localize)(6996, null)
										: Oe.length > 1
											? (0, b.localize)(6997, null, Oe.length, ve.name)
											: Oe[0].isRoot
												? (0, b.localize)(6998, null, Oe[0].name)
												: (0, b.localize)(6999, null, Oe[0].name, ve.name),
								Te =
									Oe.length > 1 && !Oe.every((Ie) => Ie.isRoot)
										? (0, M.$JO)(Oe.map((Ie) => Ie.resource))
										: void 0,
								Ee = await this.m.confirm({
									message: Je,
									detail: Te,
									checkbox: { label: (0, b.localize)(7e3, null) },
									primaryButton: (0, b.localize)(7001, null),
								});
							if (!Ee.confirmed) return;
							Ee.checkboxChecked === !0 && (await this.p.updateValue(te.a, !1));
						}
						await this.x(
							Oe.filter((Je) => Je.isRoot),
							ve,
							be,
						);
						const Ke = Oe.filter((Je) => !Je.isRoot);
						return xe ? this.y(Ke, ve) : this.z(Ke, ve);
					}
					async x(me, ve, ge) {
						if (me.length === 0) return;
						const be = this.n.getWorkspace().folders;
						let Ce;
						const Le = [],
							Fe = [],
							Oe = [];
						for (let xe = 0; xe < be.length; xe++) {
							const He = { uri: be[xe].uri, name: be[xe].name };
							ve instanceof $.$JWb &&
								this.u.extUri.isEqual(be[xe].uri, ve.resource) &&
								(Ce = xe);
							for (const Ke of me)
								if (this.u.extUri.isEqual(be[xe].uri, Ke.resource)) {
									Le.push(xe);
									break;
								}
							me.every((Ke) => Ke.resource.toString() !== be[xe].uri.toString())
								? Fe.push(He)
								: Oe.push(He);
						}
						if (Ce === void 0) Ce = Fe.length;
						else {
							switch (ge) {
								case L.ListViewTargetSector.BOTTOM:
								case L.ListViewTargetSector.CENTER_BOTTOM:
									Ce++;
									break;
							}
							for (const xe of Le) xe < Ce && Ce--;
						}
						return (
							Fe.splice(Ce, 0, ...Oe), this.t.updateFolders(0, Fe.length, Fe)
						);
					}
					async y(me, ve) {
						const ge = this.p.getValue().explorer,
							be = [];
						for (const { resource: Fe, isDirectory: Oe } of me) {
							const xe = ge.incrementalNaming === "disabled",
								He = await (0, R.$8Wb)(
									this.k,
									this.o,
									this.m,
									ve,
									{ resource: Fe, isDirectory: Oe, allowOverwrite: xe },
									ge.incrementalNaming,
								);
							if (!He) continue;
							const Ke = new x.$uzb(Fe, He, { copy: !0, overwrite: xe });
							be.push(Ke);
						}
						const Ce = ue(me);
						await this.k.applyBulkEdit(be, {
							confirmBeforeUndo:
								ge.confirmUndo === p.UndoConfirmLevel.Default ||
								ge.confirmUndo === p.UndoConfirmLevel.Verbose,
							undoLabel: (0, b.localize)(7002, null, Ce),
							progressLabel: (0, b.localize)(7003, null, Ce),
						});
						const Le = be
							.filter((Fe) => {
								const Oe = Fe.newResource
									? this.k.findClosest(Fe.newResource)
									: void 0;
								return Oe && !Oe.isDirectory;
							})
							.map((Fe) => ({
								resource: Fe.newResource,
								options: { pinned: !0 },
							}));
						await this.l.openEditors(Le);
					}
					async z(me, ve) {
						const ge = me
								.filter((Le) => !Le.isReadonly)
								.map(
									(Le) =>
										new x.$uzb(Le.resource, (0, o.$nh)(ve.resource, Le.name)),
								),
							be = ue(me),
							Ce = {
								confirmBeforeUndo:
									this.p.getValue().explorer.confirmUndo ===
									p.UndoConfirmLevel.Verbose,
								undoLabel: (0, b.localize)(7004, null, be),
								progressLabel: (0, b.localize)(7005, null, be),
							};
						try {
							await this.k.applyBulkEdit(ge, Ce);
						} catch (Le) {
							if (
								Le.fileOperationResult ===
								d.FileOperationResult.FILE_MOVE_CONFLICT
							) {
								const Fe = [];
								for (const He of ge)
									He.newResource &&
										(await this.o.exists(He.newResource)) &&
										Fe.push(He.newResource);
								const Oe = (0, q.$TWb)(Fe),
									{ confirmed: xe } = await this.m.confirm(Oe);
								xe &&
									(await this.k.applyBulkEdit(
										ge.map(
											(He) =>
												new x.$uzb(He.oldResource, He.newResource, {
													overwrite: !0,
												}),
										),
										Ce,
									));
							} else throw Le;
						}
					}
					static A(me, ve) {
						return me.context
							? me.context
							: ve && me.elements.length === 1
								? ((me.context = [te.B(me.elements[0], ve)]), me.context)
								: me.elements;
					}
					static B(me, ve) {
						const ge = t
								.getWindow(ve)
								.document.elementFromPoint(ve.clientX, ve.clientY),
							be = pe(ge);
						if (be) {
							const { count: Ce, index: Le } = be;
							let Fe = Ce - 1;
							for (; Fe > Le && me.parent; ) (me = me.parent), Fe--;
							return me;
						}
						return me;
					}
					onDragEnd() {
						this.f.dispose();
					}
					dispose() {
						this.f.dispose();
					}
				};
				(e.$BXb = ae),
					(e.$BXb =
						ae =
						te =
							Ne(
								[
									j(1, H.$LWb),
									j(2, A.$IY),
									j(3, M.$GO),
									j(4, r.$Vi),
									j(5, d.$ll),
									j(6, g.$gj),
									j(7, T.$Li),
									j(8, N.$mRb),
									j(9, F.$Vl),
								],
								ae,
							));
				function pe(fe) {
					if (!t.$Ygb(fe)) return null;
					let me = fe;
					for (; me && !me.classList.contains("monaco-list-row"); ) {
						if (
							me.classList.contains("label-name") &&
							me.hasAttribute("data-icon-label-count")
						) {
							const ve = Number(me.getAttribute("data-icon-label-count")),
								ge = Number(me.getAttribute("data-icon-label-index"));
							if ((0, z.$pg)(ve) && (0, z.$pg)(ge))
								return { element: me, count: ve, index: ge };
						}
						me = me.parentElement;
					}
					return null;
				}
				function $e(fe) {
					return !!pe(fe);
				}
				class ye {
					isIncompressible(me) {
						return (
							me.isRoot ||
							!me.isDirectory ||
							me instanceof $.$KWb ||
							!me.parent ||
							me.parent.isRoot
						);
					}
				}
				e.$DXb = ye;
				function ue(fe) {
					return fe.length === 1
						? fe[0].name
						: fe.every((me) => me.isDirectory)
							? (0, b.localize)(7006, null, fe.length)
							: fe.every((me) => !me.isDirectory)
								? (0, b.localize)(7007, null, fe.length)
								: `${fe.length} files and folders`;
				}
			},
		),
		define(
			de[4022],
			he([1, 0, 6, 4, 25, 51, 3, 1945, 382, 163]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FXb = void 0),
					(e.$EXb = u);
				function u(h) {
					if (h.isRoot && h.error)
						return {
							tooltip: (0, i.localize)(6983, null, (0, r.$xj)(h.error)),
							letter: "!",
							color: E.$SS,
						};
					if (h.isSymbolicLink)
						return { tooltip: (0, i.localize)(6984, null), letter: "\u2937" };
					if (h.isUnknown)
						return { tooltip: (0, i.localize)(6985, null), letter: "?" };
					if (h.isExcluded) return { color: E.$2S };
				}
				let a = class {
					constructor(c, n) {
						(this.c = c),
							(this.label = (0, i.localize)(6986, null)),
							(this.a = new t.$re()),
							(this.b = new C.$Zc()),
							this.b.add(this.a),
							this.b.add(
								n.onDidChangeWorkspaceFolders((g) => {
									this.a.fire(g.changed.concat(g.added).map((p) => p.uri));
								}),
							),
							this.b.add(
								d.$vXb.event((g) => {
									this.a.fire([g]);
								}),
							);
					}
					get onDidChange() {
						return this.a.event;
					}
					async provideDecorations(c) {
						const n = this.c.findClosest(c);
						if (!n) throw new Error("ExplorerItem not found");
						return u(n);
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$FXb = a), (e.$FXb = a = Ne([j(0, m.$LWb), j(1, w.$Vi)], a));
			},
		),
		define(
			de[1351],
			he([
				1, 0, 4, 240, 138, 220, 1057, 7, 96, 4022, 25, 10, 39, 5, 84, 49, 8,
				100, 472, 93, 323, 18, 146, 73, 1945, 35, 264, 11, 32, 710, 233, 21,
				121, 22, 6, 60, 89, 41, 68, 44, 382, 14, 31, 231, 116, 59, 278, 411, 72,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
			) {
				"use strict";
				var X;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HXb = void 0),
					(e.$GXb = ee),
					(e.$IXb = te),
					(t = mt(t)),
					(i = mt(i)),
					(d = mt(d));
				function Y(Q, Z) {
					for (const se of Z)
						if (Q.hasNode(se) && !Q.isCollapsed(se)) {
							for (const [, re] of se.children.entries())
								if (Q.hasNode(re) && Q.isCollapsible(re) && !Q.isCollapsed(re))
									return !0;
						}
					return !1;
				}
				function ie(Q, Z) {
					for (const se of Z)
						if (Q.hasNode(se) && !Q.isCollapsed(se)) return !0;
					return !1;
				}
				const ne = {
					getId: (Q) => (Q instanceof k.$KWb ? `new:${Q.getId()}` : Q.getId()),
				};
				function ee(Q, Z, se, re) {
					let le;
					(le = Q.length ? Q[0] : void 0), se && Z.length > 1 && (le = void 0);
					const oe = le && re.getCompressedNavigationController(le),
						ae = oe && oe.length ? oe[0] : void 0;
					le = ae ? ae.current : le;
					const pe = [];
					for (const $e of Z) {
						const ye = re.getCompressedNavigationController($e),
							ue = ye && ye.length ? ye[0] : void 0;
						if (ue && le && ue === ae) {
							$e === le && pe.push($e);
							continue;
						}
						ue ? pe.push(...ue.items) : pe.push($e);
					}
					return le ? (se && pe.indexOf(le) >= 0 ? pe : [le]) : se ? pe : [];
				}
				let _ = class extends y.$TMb {
					static {
						X = this;
					}
					static {
						this.TREE_VIEW_STATE_STORAGE_KEY =
							"workbench.explorer.treeViewState";
					}
					constructor(
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
					) {
						super(Z, ue, se, me, fe, re, le, Te, be, Ce, Le),
							(this.kc = oe),
							(this.lc = ae),
							(this.mc = pe),
							(this.nc = $e),
							(this.oc = ye),
							(this.pc = ve),
							(this.qc = ge),
							(this.rc = Fe),
							(this.sc = Oe),
							(this.tc = xe),
							(this.uc = He),
							(this.vc = Ke),
							(this.wc = Je),
							(this.hc = !1),
							(this.jc = Z.delegate),
							(this.c = le.createInstance(o.$BQb)),
							this.D(this.c),
							(this.f = E.$zUb.bindTo(fe)),
							(this.g = E.$AUb.bindTo(fe)),
							(this.h = E.$CUb.bindTo(fe)),
							(this.j = E.$DUb.bindTo(fe)),
							(this.m = E.$FUb.bindTo(fe)),
							(this.L = E.$JUb.bindTo(fe)),
							(this.ab = E.$KUb.bindTo(fe)),
							(this.sb = E.$LUb.bindTo(fe)),
							(this.cc = E.$MUb.bindTo(fe)),
							(this.dc = E.$yUb.bindTo(fe)),
							this.rc.registerView(this);
					}
					get autoReveal() {
						return this.hc;
					}
					set autoReveal(Z) {
						this.hc = Z;
					}
					get name() {
						return this.qc.getWorkspaceLabel(this.kc.getWorkspace());
					}
					get title() {
						return this.name;
					}
					set title(Z) {}
					setVisible(Z) {
						this.dc.set(Z), super.setVisible(Z);
					}
					get xc() {
						return C.$3Wb.bindTo(this.Bb);
					}
					get yc() {
						return E.$EUb.bindTo(this.Bb);
					}
					U(Z) {
						super.U(Z), (this.gc = new s.$Nhb(Z, () => this.setExpanded(!0)));
						const se = Z.querySelector(".title"),
							re = () => {
								(se.textContent = this.name),
									this.Sb(this.name),
									(this.ariaHeaderLabel = t.localize(6987, null, this.name)),
									se.setAttribute("aria-label", this.ariaHeaderLabel);
							};
						this.D(this.kc.onDidChangeWorkspaceName(re)),
							this.D(this.qc.onDidChangeFormatters(re)),
							re();
					}
					X(Z, se) {
						super.X(Z, se), this.a.layout(Z, se);
					}
					W(Z) {
						super.W(Z),
							(this.t = Z),
							(this.r = d.$fhb(Z, d.$(".explorer-folders-view"))),
							this.Dc(this.r),
							this.D(
								this.qc.onDidChangeFormatters(() => {
									this.db.fire();
								}),
							),
							this.Ec(void 0),
							this.D(
								this.mc.onDidActiveEditorChange(() => {
									this.Cc();
								}),
							),
							this.D(this.Ab.onDidChangeConfiguration((se) => this.Ec(se))),
							this.D(
								this.onDidChangeBodyVisibility(async (se) => {
									se && (await this.setTreeInput(), this.Kc(), this.Cc(!0));
								}),
							),
							this.D(
								d.$0fb(d.getWindow(this.t), d.$$gb.PASTE, async (se) => {
									!this.hasFocus() ||
										this.g.get() ||
										(se.clipboardData?.files?.length &&
											(await this.wc.executeCommand(
												"filesExplorer.paste",
												se.clipboardData?.files,
											)));
								}),
							);
					}
					focus() {
						if (
							(super.focus(),
							this.a.domFocus(),
							this.a.getFocusedPart() === J.AbstractTreePart.Tree)
						) {
							const Z = this.a.getFocus();
							Z.length === 1 && this.hc && this.a.reveal(Z[0], 0.5);
						}
					}
					hasFocus() {
						return d.$Lgb(this.t);
					}
					getFocus() {
						return this.a.getFocus();
					}
					focusNext() {
						this.a.focusNext();
					}
					focusLast() {
						this.a.focusLast();
					}
					getContext(Z) {
						const se =
							this.a.getFocusedPart() === J.AbstractTreePart.StickyScroll
								? this.a.getStickyScrollFocus()
								: this.a.getFocus();
						return ee(se, this.a.getSelection(), Z, this.n);
					}
					isItemVisible(Z) {
						return this.b ? this.b.filter(Z, I.TreeVisibility.Visible) : !1;
					}
					isItemCollapsed(Z) {
						return this.a.isCollapsed(Z);
					}
					async setEditable(Z, se) {
						se
							? ((this.fc = this.a.options.horizontalScrolling),
								this.fc && this.a.updateOptions({ horizontalScrolling: !1 }),
								await this.a.expand(Z.parent))
							: (this.fc !== void 0 &&
									this.a.updateOptions({ horizontalScrolling: this.fc }),
								(this.fc = void 0),
								this.r.classList.remove("highlight")),
							await this.refresh(!1, Z.parent, !1),
							se
								? (this.r.classList.add("highlight"), this.a.reveal(Z))
								: this.a.domFocus();
					}
					async Cc(Z = this.hc) {
						if (this.hc) {
							const se = z.$A1.getCanonicalUri(this.mc.activeEditor, {
								supportSideBySide: z.SideBySideEditor.PRIMARY,
							});
							if (se) {
								const re = this.a.getFocus(),
									le = this.a.getSelection();
								return re.length === 1 &&
									this.vc.extUri.isEqual(re[0].resource, se) &&
									le.length === 1 &&
									this.vc.extUri.isEqual(le[0].resource, se)
									? void 0
									: this.rc.select(se, Z);
							}
						}
					}
					Dc(Z) {
						(this.b = this.Db.createInstance(v.$zXb)),
							this.D(this.b),
							this.D(this.b.onDidChange(() => this.refresh(!0)));
						const se = this.Db.createInstance(L.$uPb, {
							onDidChangeVisibility: this.onDidChangeBodyVisibility,
						});
						this.D(se);
						const re = (pe) => this.a.updateWidth(pe);
						(this.n = this.Db.createInstance(v.$yXb, Z, se, re)),
							this.D(this.n),
							this.D(te(Z, this.Fb));
						const le = () => this.Ab.getValue("explorer.compactFolders"),
							oe = (pe) =>
								this.Ab.getValue({ resource: pe?.root.resource }).explorer
									.fileNesting;
						(this.a = this.Db.createInstance(
							b.$GMb,
							"FileExplorer",
							Z,
							new v.$uXb(),
							new v.$DXb(),
							[this.n],
							this.Db.createInstance(v.$wXb, this.b),
							{
								compressionEnabled: le(),
								accessibilityProvider: this.n,
								identityProvider: ne,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (pe) => {
										if (!this.rc.isEditable(pe)) return pe.name;
									},
									getCompressedNodeKeyboardNavigationLabel: (pe) => {
										if (!pe.some(($e) => this.rc.isEditable($e)))
											return pe.map(($e) => $e.name).join("/");
									},
								},
								multipleSelectionSupport: !0,
								filter: this.b,
								sorter: this.Db.createInstance(v.$AXb),
								dnd: this.Db.createInstance(v.$BXb, (pe) =>
									this.isItemCollapsed(pe),
								),
								collapseByDefault: (pe) =>
									!(pe instanceof k.$JWb && pe.hasNests && oe(pe).expand),
								autoExpandSingleChildren: !0,
								expandOnlyOnTwistieClick: (pe) => {
									if (pe instanceof k.$JWb) {
										if (pe.hasNests) return !0;
										if (
											this.Ab.getValue("workbench.tree.expandMode") ===
											"doubleClick"
										)
											return !0;
									}
									return !1;
								},
								paddingBottom: v.$uXb.ITEM_HEIGHT,
								overrideStyles: this.Zb().listOverrideStyles,
							},
						)),
							this.D(this.a),
							this.D(this.Fb.onDidColorThemeChange(() => this.a.rerender()));
						const ae = A.Event.filter(this.Ab.onDidChangeConfiguration, (pe) =>
							pe.affectsConfiguration("explorer.compactFolders"),
						);
						this.D(
							ae((pe) => this.a.updateOptions({ compressionEnabled: le() })),
						),
							E.$GUb.bindTo(this.a.contextKeyService),
							E.$IUb.bindTo(this.a.contextKeyService),
							this.D(this.a.onDidChangeFocus((pe) => this.Ic(pe.elements))),
							this.Ic([]),
							this.D(
								this.a.onDidOpen(async (pe) => {
									const $e = pe.element;
									if (!$e) return;
									if (!(d.$8gb(pe.browserEvent) && pe.browserEvent.shiftKey)) {
										if ($e.isDirectory || this.rc.isEditable(void 0)) return;
										this.Gb.publicLog2("workbenchActionExecuted", {
											id: "workbench.files.openFile",
											from: "explorer",
										});
										try {
											this.jc?.willOpenElement(pe.browserEvent),
												await this.mc.openEditor(
													{
														resource: $e.resource,
														options: {
															preserveFocus: pe.editorOptions.preserveFocus,
															pinned: pe.editorOptions.pinned,
															source: V.EditorOpenSource.USER,
														},
													},
													pe.sideBySide ? l.$KY : l.$JY,
												);
										} finally {
											this.jc?.didOpenElement();
										}
									}
								}),
							),
							this.D(this.a.onContextMenu((pe) => this.Hc(pe))),
							this.D(
								this.a.onDidScroll(async (pe) => {
									const $e = this.rc.getEditable();
									pe.scrollTopChanged &&
										$e &&
										this.a.getRelativeTop($e.stat) === null &&
										(await $e.data.onFinish("", !1));
								}),
							),
							this.D(
								this.a.onDidChangeCollapseState((pe) => {
									const $e = pe.node.element?.element;
									$e &&
										this.n
											.getCompressedNavigationController(
												$e instanceof Array ? $e[0] : $e,
											)
											?.forEach((ue) => ue.updateCollapsed(pe.node.collapsed)),
										this.Kc();
								}),
							),
							this.Kc(),
							this.D(
								this.a.onMouseDblClick((pe) => {
									const $e = this.Ab.getValue("workbench.list.scrollByPage");
									pe.element === null && !$e && this.wc.executeCommand(C.$UWb);
								}),
							),
							this.D(
								this.sc.onWillSaveState(() => {
									this.Fc();
								}),
							);
					}
					Ec(Z) {
						if (!Z || Z.affectsConfiguration("explorer.autoReveal")) {
							const se = this.Ab.getValue();
							this.hc = se?.explorer?.autoReveal;
						}
						Z &&
							(Z.affectsConfiguration("explorer.decorations.colors") ||
								Z.affectsConfiguration("explorer.decorations.badges")) &&
							this.refresh(!0);
					}
					Fc() {
						this.sc.store(
							X.TREE_VIEW_STATE_STORAGE_KEY,
							JSON.stringify(this.a.getViewState()),
							D.StorageScope.WORKSPACE,
							D.StorageTarget.MACHINE,
						);
					}
					Gc(Z) {
						const se = this.kc.getWorkspace().folders,
							re = Z ? Z.resource : se[se.length - 1].uri;
						if (
							((Z = Z || this.rc.findClosest(re)),
							this.c.set(re),
							this.f.set(!!Z && Z.isDirectory),
							this.g.set(!!Z && !!Z.isReadonly),
							this.j.set(!!Z && Z.isRoot),
							re)
						) {
							const le = re ? this.nc.getEditors(re).map((oe) => oe.id) : [];
							this.h.set(le.join(","));
						} else this.h.reset();
					}
					async Hc(Z) {
						if ((0, K.$Dib)(Z.browserEvent.target)) return;
						const se = Z.element;
						let re = Z.anchor;
						if (d.$Ygb(re) && se) {
							const pe = this.n.getCompressedNavigationController(se);
							pe &&
								pe.length > 0 &&
								(d.$8gb(Z.browserEvent) || (0, v.$CXb)(Z.browserEvent.target)
									? (re = pe[0].labels[pe[0].index])
									: pe.forEach(($e) => $e.last()));
						}
						this.xc.set(await this.tc.hasResources()), this.Gc(se);
						const le = this.a.getSelection(),
							oe = this.rc.roots;
						let ae;
						if (se instanceof k.$JWb) {
							const pe = this.n.getCompressedNavigationController(se);
							ae = pe && pe.length ? pe[0].current.resource : se.resource;
						} else ae = oe.length === 1 ? oe[0].resource : {};
						this.zb.showContextMenu({
							menuId: T.$XX.ExplorerContext,
							menuActionOptions: { arg: ae, shouldForwardArgs: !0 },
							contextKeyService: this.a.contextKeyService,
							getAnchor: () => re,
							onHide: (pe) => {
								pe && this.a.domFocus();
							},
							getActionsContext: () =>
								se && le && le.indexOf(se) >= 0
									? le.map((pe) => pe.resource)
									: se instanceof k.$JWb
										? [se.resource]
										: [],
						});
					}
					Ic(Z) {
						const se = Z && Z.length ? Z[0] : void 0;
						if ((this.Gc(se), se)) {
							const le = !!this.Ab.getValue().files?.enableTrash,
								oe = this.uc.hasCapability(
									se.resource,
									N.FileSystemProviderCapabilities.Trash,
								);
							this.m.set(le && oe);
						} else this.m.reset();
						const re = se && this.n.getCompressedNavigationController(se);
						if (!re) {
							this.L.set(!1);
							return;
						}
						this.L.set(!0),
							re.forEach((le) => {
								this.Jc(le);
							});
					}
					refresh(Z, se, re = !0) {
						if (!this.a || !this.isBodyVisible() || (se && !this.a.hasNode(se)))
							return Promise.resolve(void 0);
						re && this.rc.isEditable(void 0) && this.a.domFocus();
						const le = se || this.a.getInput();
						return this.a.updateChildren(le, Z, !!se);
					}
					getOptimalWidth() {
						const Z = this.a.getHTMLElement(),
							se = [].slice.call(
								Z.querySelectorAll(".explorer-item .label-name"),
							);
						return d.$Agb(Z, se);
					}
					async setTreeInput() {
						if (!this.isBodyVisible()) return Promise.resolve(void 0);
						this.ec && (await this.ec);
						const Z = !this.a.getInput();
						Z && i.mark("code/willResolveExplorer");
						const se = this.rc.roots;
						let re = se[0];
						(this.kc.getWorkbenchState() !== u.WorkbenchState.FOLDER ||
							se[0].error) &&
							(re = se);
						let le;
						if (this.a && this.a.getInput()) le = this.a.getViewState();
						else {
							const pe = this.sc.get(
								X.TREE_VIEW_STATE_STORAGE_KEY,
								D.StorageScope.WORKSPACE,
							);
							pe && (le = JSON.parse(pe));
						}
						const oe = this.a.getInput(),
							ae = (this.ec = this.a.setInput(re, le).then(async () => {
								if (Array.isArray(re)) {
									if (!le || oe instanceof k.$JWb)
										for (let pe = 0; pe < Math.min(re.length, 5); pe++)
											try {
												await this.a.expand(re[pe]);
											} catch {}
									if (
										(!oe &&
											re.length === 1 &&
											this.Ab.getValue().explorer
												.expandSingleFolderWorkspaces &&
											(await this.a.expand(re[0]).catch(() => {})),
										Array.isArray(oe))
									) {
										const pe = new G.$Gc();
										oe.forEach(($e) => pe.set($e.resource, !0)),
											await Promise.all(
												re.map(async ($e) => {
													if (!pe.has($e.resource))
														try {
															await this.a.expand($e);
														} catch {}
												}),
											);
									}
								}
								Z && i.mark("code/didResolveExplorer");
							}));
						this.lc.withProgress(
							{
								location: n.ProgressLocation.Explorer,
								delay: this.oc.isRestored() ? 800 : 1500,
							},
							(pe) => ae,
						),
							await ae,
							this.ic ||
								((this.ic = new r.$FXb(this.rc, this.kc)),
								this.D(this.pc.registerDecorationsProvider(this.ic)));
					}
					async selectResource(Z, se = this.hc, re = 0) {
						if (re === 2 || !Z || !this.isBodyVisible()) return;
						this.ec && (await this.ec);
						let le = this.rc.findClosestRoot(Z);
						for (; le && le.resource.toString() !== Z.toString(); ) {
							try {
								await this.a.expand(le);
							} catch {
								return this.selectResource(Z, se, re + 1);
							}
							if (!le.children.size) le = null;
							else
								for (const oe of le.children.values()) {
									if (this.vc.extUri.isEqualOrParent(Z, oe.resource)) {
										le = oe;
										break;
									}
									le = null;
								}
						}
						if (le) {
							if (le === this.a.getInput()) {
								this.a.setFocus([]), this.a.setSelection([]);
								return;
							}
							try {
								le.nestedParent && (await this.a.expand(le.nestedParent)),
									(se === !0 || se === "force") &&
										this.a.getRelativeTop(le) === null &&
										this.a.reveal(le, 0.5),
									this.a.setFocus([le]),
									this.a.setSelection([le]);
							} catch {
								return this.selectResource(Z, se, re + 1);
							}
						}
					}
					itemsCopied(Z, se, re) {
						this.xc.set(Z.length > 0),
							this.yc.set(se && Z.length > 0),
							re?.forEach((le) => this.a.rerender(le)),
							se && Z.forEach((le) => this.a.rerender(le));
					}
					expandAll() {
						this.rc.isEditable(void 0) && this.a.domFocus(), this.a.expandAll();
					}
					collapseAll() {
						this.rc.isEditable(void 0) && this.a.domFocus();
						const Z = this.a.getInput();
						if (Array.isArray(Z) && Y(this.a, Z)) {
							Z.forEach((se) => {
								se.children.forEach(
									(re) => this.a.hasNode(re) && this.a.collapse(re, !0),
								);
							});
							return;
						}
						this.a.collapseAll();
					}
					previousCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.previous(), this.Jc(re);
						});
					}
					nextCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.next(), this.Jc(re);
						});
					}
					firstCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.first(), this.Jc(re);
						});
					}
					lastCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.last(), this.Jc(re);
						});
					}
					Jc(Z) {
						this.ab.set(Z.index === 0), this.sb.set(Z.index === Z.count - 1);
					}
					Kc() {
						const Z = this.a.getInput();
						if (Z === void 0) return;
						const se = Array.isArray(Z) ? Z : Array.from(Z.children.values());
						this.cc.set(ie(this.a, se)), this.Fc();
					}
					dispose() {
						this.gc?.dispose(), super.dispose();
					}
				};
				(e.$HXb = _),
					Ne([w.$ei], _.prototype, "xc", null),
					Ne([w.$ei], _.prototype, "yc", null),
					(e.$HXb =
						_ =
						X =
							Ne(
								[
									j(1, g.$Xxb),
									j(2, R.$K1),
									j(3, c.$Li),
									j(4, u.$Vi),
									j(5, n.$8N),
									j(6, l.$IY),
									j(7, q.$E6),
									j(8, m.$mEb),
									j(9, h.$uZ),
									j(10, p.$6j),
									j(11, a.$gj),
									j(12, f.$sPb),
									j(13, $.$3N),
									j(14, S.$iP),
									j(15, P.$km),
									j(16, W.$Uyb),
									j(17, F.$LWb),
									j(18, D.$lq),
									j(19, M.$Vxb),
									j(20, N.$ll),
									j(21, U.$Vl),
									j(22, H.$ek),
									j(23, B.$7rb),
								],
								_,
							));
				function te(Q, Z) {
					Q.classList.add("file-icon-themable-tree"),
						Q.classList.add("show-file-icons");
					const se = (re) => {
						Q.classList.toggle(
							"align-icons-and-twisties",
							re.hasFileIcons && !re.hasFolderIcons,
						),
							Q.classList.toggle("hide-arrows", re.hidesExplorerArrows === !0);
					};
					return se(Z.getFileIconTheme()), Z.onDidFileIconThemeChange(se);
				}
				(0, T.$4X)(
					class extends T.$3X {
						constructor() {
							super({
								id: "workbench.files.action.createFileFromExplorer",
								title: t.localize(6988, null),
								f1: !1,
								icon: x.$ak.newFile,
								precondition: E.$BUb,
								menu: {
									id: T.$XX.ViewTitle,
									group: "navigation",
									when: p.$Kj.equals("view", E.$wUb),
									order: 10,
								},
							});
						}
						run(Q) {
							Q.get(H.$ek).executeCommand(C.$UWb);
						}
					},
				),
					(0, T.$4X)(
						class extends T.$3X {
							constructor() {
								super({
									id: "workbench.files.action.createFolderFromExplorer",
									title: t.localize(6989, null),
									f1: !1,
									icon: x.$ak.newFolder,
									precondition: E.$BUb,
									menu: {
										id: T.$XX.ViewTitle,
										group: "navigation",
										when: p.$Kj.equals("view", E.$wUb),
										order: 20,
									},
								});
							}
							run(Q) {
								Q.get(H.$ek).executeCommand(C.$WWb);
							}
						},
					),
					(0, T.$4X)(
						class extends T.$3X {
							constructor() {
								super({
									id: "workbench.files.action.refreshFilesExplorer",
									title: t.localize2(6990, "Refresh Explorer"),
									f1: !0,
									icon: x.$ak.refresh,
									menu: {
										id: T.$XX.ViewTitle,
										group: "navigation",
										when: p.$Kj.equals("view", E.$wUb),
										order: 30,
									},
									metadata: {
										description: t.localize2(
											6991,
											"Forces a refresh of the Explorer.",
										),
									},
								});
							}
							async run(Q) {
								const Z = Q.get(O.$HMb),
									se = Q.get(F.$LWb);
								await Z.openView(E.$wUb), await se.refresh();
							}
						},
					),
					(0, T.$4X)(
						class extends T.$3X {
							constructor() {
								super({
									id: "workbench.files.action.collapseExplorerFolders",
									title: t.localize2(6992, "Collapse Folders in Explorer"),
									f1: !0,
									icon: x.$ak.collapseAll,
									menu: {
										id: T.$XX.ViewTitle,
										group: "navigation",
										when: p.$Kj.equals("view", E.$wUb),
										order: 40,
									},
									metadata: {
										description: t.localize2(
											6993,
											"Folds all folders in the Explorer.",
										),
									},
								});
							}
							run(Q) {
								const se = Q.get(O.$HMb).getViewWithId(E.$wUb);
								se !== null && se.collapseAll();
							}
						},
					);
			},
		),
		define(
			de[1946],
			he([
				1, 0, 7, 183, 14, 6, 3, 23, 54, 19, 26, 9, 4, 22, 5, 93, 41, 62, 35,
				233, 2947, 979, 218, 503, 1351, 131,
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
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KXb = e.$JXb = void 0),
					(t = mt(t));
				const T = t.$;
				let P = class extends C.$1c {
					constructor(N, A, R, O, B) {
						super(),
							(this.b = N),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeHeight = this.a.event);
						const U =
								A ??
								(N.length > 1
									? (0, h.localize)(4658, null, N.length)
									: (0, h.localize)(4659, null, 1)),
							z = T(".chat-used-context-icon"),
							F = (W) =>
								W.usedReferencesExpanded
									? w.$ak.chevronDown
									: w.$ak.chevronRight;
						z.classList.add(...u.ThemeIcon.asClassNameArray(F(R)));
						const x = T(".chat-used-context-label", void 0),
							H = this.D(
								new i.$oob(x, {
									buttonBackground: void 0,
									buttonBorder: void 0,
									buttonForeground: void 0,
									buttonHoverBackground: void 0,
									buttonSecondaryBackground: void 0,
									buttonSecondaryForeground: void 0,
									buttonSecondaryHoverBackground: void 0,
									buttonSeparator: void 0,
								}),
							);
						(this.domNode = T(".chat-used-context", void 0, x)),
							(H.label = U),
							H.element.prepend(z),
							this.c(H.element, U, R.usedReferencesExpanded),
							this.domNode.classList.toggle(
								"chat-used-context-collapsed",
								!R.usedReferencesExpanded,
							),
							this.D(
								H.onDidClick(() => {
									z.classList.remove(...u.ThemeIcon.asClassNameArray(F(R))),
										(R.usedReferencesExpanded = !R.usedReferencesExpanded),
										z.classList.add(...u.ThemeIcon.asClassNameArray(F(R))),
										this.domNode.classList.toggle(
											"chat-used-context-collapsed",
											!R.usedReferencesExpanded,
										),
										this.a.fire(),
										this.c(H.element, U, R.usedReferencesExpanded);
								}),
							);
						const V = this.D(O.get()).object;
						this.domNode.appendChild(V.getHTMLElement().parentElement),
							this.D(
								V.onDidOpen((W) => {
									if (
										W.element &&
										"reference" in W.element &&
										typeof W.element.reference == "object"
									) {
										const X =
												"variableName" in W.element.reference
													? W.element.reference.value
													: W.element.reference,
											Y = a.URI.isUri(X) ? X : X?.uri;
										Y &&
											B.open(Y, {
												fromUserGesture: !0,
												editorOptions: {
													...W.editorOptions,
													selection: X && "range" in X ? X.range : void 0,
												},
											});
									}
								}),
							),
							this.D(
								V.onContextMenu((W) => {
									W.browserEvent.preventDefault(),
										W.browserEvent.stopPropagation();
								}),
							);
						const J = Math.min(N.length, 6) * 22;
						V.layout(J),
							(V.getHTMLElement().style.height = `${J}px`),
							V.splice(0, V.length, N);
					}
					hasSameContent(N, A, R) {
						return (
							(N.kind === "references" &&
								N.references.length === this.b.length) ||
							(N.kind === "codeCitations" &&
								N.citations.length === this.b.length)
						);
					}
					c(N, A, R) {
						N.ariaLabel = R
							? (0, h.localize)(4660, null, A)
							: (0, h.localize)(4661, null, A);
					}
					addDisposable(N) {
						this.D(N);
					}
				};
				(e.$JXb = P), (e.$JXb = P = Ne([j(4, p.$7rb)], P));
				let k = class extends C.$1c {
					get inUse() {
						return this.a.inUse;
					}
					constructor(N, A, R) {
						super(),
							(this.b = N),
							(this.c = A),
							(this.f = R),
							(this.a = this.D(new l.$hUb(() => this.g())));
					}
					g() {
						const N = this.D(
								this.c.createInstance(b.$uPb, {
									onDidChangeVisibility: this.b,
								}),
							),
							A = T(".chat-used-context-list");
						return (
							this.D((0, v.$IXb)(A, this.f)),
							this.c.createInstance(
								g.$yMb,
								"ChatListRenderer",
								A,
								new L(),
								[this.c.createInstance(D, N)],
								{
									alwaysConsumeMouseWheel: !1,
									accessibilityProvider: {
										getAriaLabel: (O) => {
											if (O.kind === "warning") return O.content.value;
											const B = O.reference;
											return typeof B == "string"
												? B
												: "variableName" in B
													? B.variableName
													: a.URI.isUri(B)
														? (0, m.$sc)(B.path)
														: (0, m.$sc)(B.uri.path);
										},
										getWidgetAriaLabel: () => (0, h.localize)(4662, null),
									},
									dnd: {
										getDragURI: (O) => {
											if (O.kind === "warning") return null;
											const { reference: B } = O;
											return typeof B == "string" || "variableName" in B
												? null
												: a.URI.isUri(B)
													? B.toString()
													: B.uri.toString();
										},
										dispose: () => {},
										onDragOver: () => !1,
										drop: () => {},
									},
								},
							)
						);
					}
					get() {
						const N = this.a.get();
						let A = !1;
						return {
							object: N,
							isStale: () => A,
							dispose: () => {
								(A = !0), this.a.release(N);
							},
						};
					}
				};
				(e.$KXb = k), (e.$KXb = k = Ne([j(1, n.$Li), j(2, f.$iP)], k));
				class L {
					getHeight(N) {
						return 22;
					}
					getTemplateId(N) {
						return D.TEMPLATE_ID;
					}
				}
				let D = class {
					static {
						I = this;
					}
					static {
						this.TEMPLATE_ID = "chatCollapsibleListRenderer";
					}
					constructor(N, A, R, O) {
						(this.a = N),
							(this.b = A),
							(this.c = R),
							(this.d = O),
							(this.templateId = I.TEMPLATE_ID);
					}
					renderTemplate(N) {
						const A = new C.$Zc(),
							R = A.add(
								this.a.create(N, { supportHighlights: !0, supportIcons: !0 }),
							);
						return { templateDisposables: A, label: R };
					}
					f(N) {
						return u.ThemeIcon.isThemeIcon(N.iconPath)
							? N.iconPath
							: this.b.getColorTheme().type === s.ColorScheme.DARK &&
									N.iconPath?.dark
								? N.iconPath?.dark
								: N.iconPath?.light;
					}
					renderElement(N, A, R, O) {
						if (N.kind === "warning") {
							R.label.setResource(
								{ name: N.content.value },
								{ icon: w.$ak.warning },
							);
							return;
						}
						const B = N.reference,
							U = this.f(N);
						if (
							((R.label.element.style.display = "flex"),
							typeof B == "object" && "variableName" in B)
						)
							if (B.value) {
								const z = a.URI.isUri(B.value) ? B.value : B.value.uri;
								R.label.setResource(
									{
										resource: z,
										name: (0, r.$jh)(z),
										description: `#${B.variableName}`,
										range: "range" in B.value ? B.value.range : void 0,
									},
									{ icon: U, title: N.options?.status?.description ?? N.title },
								);
							} else {
								const z = this.c.getVariable(B.variableName),
									F = z?.icon ? `$(${z.icon.id}) ` : "",
									x = `#${B.variableName}`,
									H = `${F}${z?.fullName ?? x}`;
								R.label.setLabel(H, x, {
									title: N.options?.status?.description ?? z?.description,
								});
							}
						else if (typeof B == "string")
							R.label.setLabel(B, void 0, {
								iconPath: a.URI.isUri(U) ? U : void 0,
								title: N.options?.status?.description ?? N.title,
							});
						else {
							const z = "uri" in B ? B.uri : B;
							if (
								z.scheme === "https" &&
								(0, r.$sh)(z.authority, "github.com") &&
								z.path.includes("/tree/")
							) {
								const F = z.path.split("/").slice(1, 3).join("/"),
									x = z.path.split("/").slice(5).join("/");
								R.label.setResource(
									{ resource: z, name: F, description: x },
									{ icon: w.$ak.github, title: N.title },
								);
							} else if (
								z.scheme === this.d.urlProtocol &&
								(0, r.$sh)(z.authority, S.$_Z)
							) {
								const F = z.path.substring(1);
								R.label.setResource(
									{ resource: z, name: F },
									{
										icon: w.$ak.settingsGear,
										title: (0, h.localize)(4663, null, F),
									},
								);
							} else
								(0, d.$Wg)(z, d.Schemas.mailto, d.Schemas.http, d.Schemas.https)
									? R.label.setResource(
											{ resource: z, name: z.toString() },
											{
												icon: U ?? w.$ak.globe,
												title:
													N.options?.status?.description ??
													N.title ??
													z.toString(),
											},
										)
									: R.label.setFile(z, {
											fileKind: c.FileKind.FILE,
											fileDecorations: { badges: !1, colors: !1 },
											range: "range" in B ? B.range : void 0,
											title: N.options?.status?.description ?? N.title,
										});
						}
						for (const z of [
							".monaco-icon-suffix-container",
							".monaco-icon-name-container",
						]) {
							const F = R.label.element.querySelector(z);
							F &&
								(N.options?.status?.kind ===
									y.ChatResponseReferencePartStatusKind.Omitted ||
								N.options?.status?.kind ===
									y.ChatResponseReferencePartStatusKind.Partial
									? F.classList.add("warning")
									: F.classList.remove("warning"));
						}
					}
					disposeTemplate(N) {
						N.templateDisposables.dispose();
					}
				};
				D = I = Ne([j(1, f.$iP), j(2, $.$D2), j(3, o.$Bk)], D);
			},
		),
		define(
			de[4023],
			he([1, 0, 7, 6, 3, 5, 1721, 1946]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LXb = void 0),
					(t = mt(t));
				let m = class extends w.$1c {
					constructor(u, a, h, c, n) {
						if ((super(), (this.a = u), u.progress.length)) {
							const g = this.D(
								n.createInstance(
									d.$JXb,
									u.progress,
									u.content.value,
									c.element,
									a,
								),
							);
							(this.domNode = t.$(".chat-progress-task")),
								this.domNode.appendChild(g.domNode),
								(this.onDidChangeHeight = g.onDidChangeHeight);
						} else {
							const g = u.isSettled?.() ?? !0,
								p = this.D(n.createInstance(C.$uUb, u, h, c, !g, !0));
							(this.domNode = p.domNode),
								(this.onDidChangeHeight = i.Event.None);
						}
					}
					hasSameContent(u) {
						return (
							u.kind === "progressTask" &&
							u.progress.length === this.a.progress.length &&
							u.isSettled() === this.a.isSettled()
						);
					}
					addDisposable(u) {
						this.D(u);
					}
				};
				(e.$LXb = m), (e.$LXb = m = Ne([j(4, E.$Li)], m));
			},
		),
		define(
			de[4024],
			he([1, 0, 7, 6, 3, 4, 10, 22, 5, 93, 41, 35, 233, 979, 1351]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PXb = e.$OXb = void 0),
					(t = mt(t));
				const g = t.$;
				let p = class extends w.$1c {
					constructor($, v, S, I, T) {
						super(),
							(this.c = T),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeHeight = this.a.event);
						const P = this.D(S.get());
						(this.b = P.object),
							(this.onDidFocus = this.b.onDidFocus),
							this.D(
								this.b.onDidOpen((k) => {
									k.element &&
										!("children" in k.element) &&
										this.c.open(k.element.uri);
								}),
							),
							this.D(
								this.b.onDidChangeCollapseState(() => {
									this.a.fire();
								}),
							),
							this.D(
								this.b.onContextMenu((k) => {
									k.browserEvent.preventDefault(),
										k.browserEvent.stopPropagation();
								}),
							),
							this.b.setInput($).then(() => {
								P.isStale() || (this.b.layout(), this.a.fire());
							}),
							(this.domNode = this.b.getHTMLElement().parentElement);
					}
					domFocus() {
						this.b.domFocus();
					}
					hasSameContent($) {
						return $.kind === "treeData";
					}
					addDisposable($) {
						this.D($);
					}
				};
				(e.$OXb = p), (e.$OXb = p = Ne([j(4, u.$7rb)], p));
				let o = class extends w.$1c {
					get inUse() {
						return this.a.inUse;
					}
					constructor($, v, S, I) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.a = this.D(new c.$hUb(() => this.h())));
					}
					h() {
						const $ = this.D(
								this.c.createInstance(h.$uPb, {
									onDidChangeVisibility: this.b,
								}),
							),
							v = g(".interactive-response-progress-tree");
						return (
							this.D((0, n.$IXb)(v, this.g)),
							this.c.createInstance(
								r.$GMb,
								"ChatListRenderer",
								v,
								new f(),
								new b(),
								[new s($, this.f.getValue("explorer.decorations"))],
								new l(),
								{
									collapseByDefault: () => !1,
									expandOnlyOnTwistieClick: () => !1,
									identityProvider: { getId: (I) => I.uri.toString() },
									accessibilityProvider: {
										getAriaLabel: (I) => I.label,
										getWidgetAriaLabel: () => (0, E.localize)(4666, null),
									},
									alwaysConsumeMouseWheel: !1,
								},
							)
						);
					}
					get() {
						const $ = this.a.get();
						let v = !1;
						return {
							object: $,
							isStale: () => v,
							dispose: () => {
								(v = !0), this.a.release($);
							},
						};
					}
				};
				(e.$PXb = o),
					(e.$PXb = o = Ne([j(1, m.$Li), j(2, C.$gj), j(3, a.$iP)], o));
				class f {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight($) {
						return f.ITEM_HEIGHT;
					}
					getTemplateId($) {
						return "chatListTreeTemplate";
					}
				}
				class b {
					isIncompressible($) {
						return !$.children;
					}
				}
				class s {
					constructor($, v) {
						(this.a = $),
							(this.b = v),
							(this.templateId = "chatListTreeTemplate");
					}
					renderCompressedElements($, v, S, I) {
						S.label.element.style.display = "flex";
						const T = $.element.elements.map((P) => P.label);
						S.label.setResource(
							{ resource: $.element.elements[0].uri, name: T },
							{
								title: $.element.elements[0].label,
								fileKind: $.children ? d.FileKind.FOLDER : d.FileKind.FILE,
								extraClasses: ["explorer-item"],
								fileDecorations: this.b,
							},
						);
					}
					renderTemplate($) {
						const v = new w.$Zc(),
							S = v.add(this.a.create($, { supportHighlights: !0 }));
						return { templateDisposables: v, label: S };
					}
					renderElement($, v, S, I) {
						(S.label.element.style.display = "flex"),
							!$.children.length && $.element.type !== d.FileType.Directory
								? S.label.setFile($.element.uri, {
										fileKind: d.FileKind.FILE,
										hidePath: !0,
										fileDecorations: this.b,
									})
								: S.label.setResource(
										{ resource: $.element.uri, name: $.element.label },
										{
											title: $.element.label,
											fileKind: d.FileKind.FOLDER,
											fileDecorations: this.b,
										},
									);
					}
					disposeTemplate($) {
						$.templateDisposables.dispose();
					}
				}
				class l {
					hasChildren($) {
						return !!$.children;
					}
					async getChildren($) {
						return $.children ?? [];
					}
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4025],
		he([
			1, 0, 7, 50, 32, 18, 988, 5, 1248, 10, 799, 824, 35, 21, 4, 8, 103, 6, 93,
			1247, 82, 25, 3266, 49, 11, 39, 114, 233, 90, 282, 27, 146, 60, 41, 198,
			68, 3, 24, 59, 44, 362, 3075, 555, 518, 72, 390, 2450,
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
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$NRc = void 0),
				(t = mt(t)),
				(u = xi(u));
			function K(X) {
				return p.Iterable.map(X.markers, (Y) => {
					const ie = p.Iterable.from(Y.relatedInformation),
						ne = p.Iterable.map(ie, (ee) => ({ element: ee }));
					return { element: Y, children: ne };
				});
			}
			let J = class extends D.$UMb {
				constructor(
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
				) {
					const ue = new k.$eEb(H.Markers.MARKERS_VIEW_STORAGE_ID, ae),
						fe = ue.getMemento(
							c.StorageScope.WORKSPACE,
							c.StorageTarget.MACHINE,
						);
					super(
						{
							...Y,
							filterOptions: {
								ariaLabel: u.default.MARKERS_PANEL_FILTER_ARIA_LABEL,
								placeholder: u.default.MARKERS_PANEL_FILTER_PLACEHOLDER,
								focusContextKey:
									H.MarkersContextKeys.MarkerViewFilterFocusContextKey.key,
								text: fe.filter || "",
								history: fe.filterHistory || [],
							},
						},
						oe,
						re,
						_,
						Z,
						ne,
						ie,
						pe,
						$e,
						te,
						ye,
					),
						(this.pc = ee),
						(this.qc = Q),
						(this.rc = se),
						(this.sc = le),
						(this.a = 0),
						(this.b = null),
						(this.ab = this.D(new O.$Zc())),
						(this.cc = this.D(new O.$Zc())),
						(this.ic = 0),
						(this.jc = 0),
						(this.mc = void 0),
						(this.nc = !1),
						(this.onDidChangeVisibility = this.onDidChangeBodyVisibility),
						(this.kc = ue),
						(this.lc = fe),
						(this.h = this.D(ie.createInstance(C.$wRc))),
						(this.oc = this.D(
							ie.createInstance(
								y.$LRc,
								this.lc.multiline,
								this.lc.viewMode ?? this.zc(),
							),
						)),
						this.D(this.onDidChangeVisibility((me) => this.Ic(me))),
						this.D(this.oc.onDidChangeViewMode((me) => this.Lc())),
						(this.fc = ie.createInstance(y.$DRc)),
						(this.ec = {
							getId(me) {
								return me.id;
							},
						}),
						this.Oc(),
						(this.s = new y.$JRc(b.$CRc.EMPTY(le))),
						(this.c = this.D(this.Db.createInstance(a.$u4b))),
						(this.filters = this.D(
							new m.$yRc(
								{
									filterHistory: this.lc.filterHistory || [],
									showErrors: this.lc.showErrors !== !1,
									showWarnings: this.lc.showWarnings !== !1,
									showInfos: this.lc.showInfos !== !1,
									excludedFiles: !!this.lc.useFilesExclude,
									activeFile: !!this.lc.activeFile,
								},
								this.Bb,
							),
						)),
						this.D(
							this.Ab.onDidChangeConfiguration((me) => {
								this.filters.excludedFiles &&
									me.affectsConfiguration("files.exclude") &&
									this.yc();
							}),
						);
				}
				render() {
					super.render(),
						this.D(
							(0, q.$D3b)({
								name: "markersView",
								focusNotifiers: [this, this.filterWidget],
								focusNextWidget: () => {
									this.filterWidget.hasFocus() && this.focus();
								},
								focusPreviousWidget: () => {
									this.filterWidget.hasFocus() || this.focusFilter();
								},
							}),
						);
				}
				W(Y) {
					super.W(Y),
						Y.classList.add("markers-panel"),
						this.D(
							t.$0fb(Y, "keydown", (ne) => {
								const ee = new I.$7fb(ne);
								if (!this.yb.mightProducePrintableCharacter(ee)) return;
								const _ = this.yb.softDispatch(ee, ee.target);
								_.kind === G.ResultKind.MoreChordsNeeded ||
									_.kind === G.ResultKind.KbFound ||
									this.focusFilter();
							}),
						);
					const ie = t.$fhb(Y, t.$(".markers-panel-container"));
					this.Ec(ie),
						this.Dc(ie),
						(this.dc = t.$fhb(ie, t.$(".widget-container"))),
						this.Fc(this.dc),
						this.yc(),
						this.Rc();
				}
				getTitle() {
					return u.default.MARKERS_PANEL_TITLE_PROBLEMS.value;
				}
				L(Y = this.ic, ie = this.jc) {
					this.gc && (this.gc.style.height = `${Y}px`),
						this.sb.layout(Y, ie),
						(this.ic = Y),
						(this.jc = ie);
				}
				focus() {
					super.focus(),
						!t.$Kgb(this.sb.getHTMLElement()) &&
							(this.Qc()
								? this.gc.focus()
								: (this.sb.domFocus(), this.sb.setMarkerSelection()));
				}
				isFocused() {
					return t.$Kgb(this.sb.getHTMLElement());
				}
				focusFilter() {
					this.filterWidget.focus();
				}
				updateBadge(Y, ie) {
					this.filterWidget.updateBadge(
						Y === ie || Y === 0 ? void 0 : (0, n.localize)(7497, null, ie, Y),
					);
				}
				checkMoreFilters() {
					this.filterWidget.checkMoreFilters(
						!this.filters.showErrors ||
							!this.filters.showWarnings ||
							!this.filters.showInfos ||
							this.filters.excludedFiles ||
							this.filters.activeFile,
					);
				}
				clearFilterText() {
					this.filterWidget.setFilterText("");
				}
				showQuickFixes(Y) {
					const ie = this.oc.getViewModel(Y);
					ie && ie.quickFixAction.run();
				}
				openFileAtElement(Y, ie, ne, ee) {
					const { resource: _, selection: te } =
						Y instanceof C.$tRc
							? { resource: Y.resource, selection: Y.range }
							: Y instanceof C.$vRc
								? { resource: Y.raw.resource, selection: Y.raw }
								: "marker" in Y
									? { resource: Y.marker.resource, selection: Y.marker.range }
									: { resource: null, selection: null };
					return _ && te
						? (this.pc
								.openEditor(
									{
										resource: _,
										options: {
											selection: te,
											preserveFocus: ie,
											pinned: ee,
											revealIfVisible: !0,
										},
									},
									ne ? E.$KY : E.$JY,
								)
								.then((Q) => {
									Q && ie
										? this.c.highlightRange(
												{ resource: _, range: te },
												Q.getControl(),
											)
										: this.c.removeHighlightRange();
								}),
							!0)
						: (this.c.removeHighlightRange(), !1);
				}
				vc(Y) {
					if (this.isVisible()) {
						const ie = this.sb.getSelection().length > 0;
						Y
							? Y instanceof C.$tRc
								? this.sb.updateMarker(Y)
								: Y.added.size || Y.removed.size
									? this.xc()
									: this.sb.update([...Y.updated])
							: this.xc(),
							ie && this.sb.setMarkerSelection(),
							(this.mc = void 0);
						const { total: ne, filtered: ee } = this.getFilterStats();
						this.ed(ne === 0 || ee === 0),
							this.Sc(),
							this.updateBadge(ne, ee),
							this.checkMoreFilters();
					}
				}
				wc(Y) {
					this.vc(Y);
				}
				xc() {
					this.sb.reset(this.Cc());
				}
				yc() {
					(this.s.options = new b.$CRc(
						this.filterWidget.getFilterText(),
						this.Ac(),
						this.filters.showWarnings,
						this.filters.showErrors,
						this.filters.showInfos,
						this.sc,
					)),
						this.sb.filterMarkers(this.Cc(), this.s.options),
						(this.mc = void 0);
					const { total: Y, filtered: ie } = this.getFilterStats();
					this.ed(Y === 0 || ie === 0),
						this.Sc(),
						this.updateBadge(Y, ie),
						this.checkMoreFilters();
				}
				zc() {
					switch (this.Ab.getValue("problems.defaultViewMode")) {
						case "table":
							return H.MarkersViewMode.Table;
						case "tree":
							return H.MarkersViewMode.Tree;
						default:
							return H.MarkersViewMode.Tree;
					}
				}
				Ac() {
					if (!this.filters.excludedFiles) return [];
					const Y = this.rc.getWorkspace().folders;
					return Y.length
						? Y.map((ie) => ({ root: ie.uri, expression: this.Bc(ie.uri) }))
						: this.Bc();
				}
				Bc(Y) {
					return (
						(0, s.$vo)(this.Ab.getValue("files.exclude", { resource: Y })) || {}
					);
				}
				Cc() {
					if (!this.filters.activeFile) return this.h.resourceMarkers;
					let Y = [];
					if (this.b) {
						const ie = this.h.getResourceMarkers(this.b);
						ie && (Y = [ie]);
					}
					return Y;
				}
				Dc(Y) {
					(this.gc = t.$fhb(Y, t.$(".message-box-container"))),
						this.gc.setAttribute("aria-labelledby", "markers-panel-arialabel");
				}
				Ec(Y) {
					(this.hc = t.$fhb(Y, t.$(""))),
						this.hc.setAttribute("id", "markers-panel-arialabel");
				}
				Fc(Y) {
					(this.sb =
						this.oc.viewMode === H.MarkersViewMode.Table
							? this.Gc(Y)
							: this.Hc(Y)),
						this.cc.add(this.sb);
					const ie = H.MarkersContextKeys.MarkerFocusContextKey.bindTo(
							this.sb.contextKeyService,
						),
						ne = H.MarkersContextKeys.RelatedInformationFocusContextKey.bindTo(
							this.sb.contextKeyService,
						);
					this.cc.add(
						this.sb.onDidChangeFocus((ee) => {
							ie.set(ee.elements.some((_) => _ instanceof C.$tRc)),
								ne.set(ee.elements.some((_) => _ instanceof C.$vRc));
						}),
					),
						this.cc.add(
							o.Event.debounce(
								this.sb.onDidOpen,
								(ee, _) => _,
								75,
								!0,
							)((ee) => {
								this.openFileAtElement(
									ee.element,
									!!ee.editorOptions.preserveFocus,
									ee.sideBySide,
									!!ee.editorOptions.pinned,
								);
							}),
						),
						this.cc.add(
							o.Event.any(
								this.sb.onDidChangeSelection,
								this.sb.onDidChangeFocus,
							)(() => {
								const ee = [...this.sb.getSelection(), ...this.sb.getFocus()];
								for (const _ of ee)
									_ instanceof C.$tRc &&
										this.oc.getViewModel(_)?.showLightBulb();
							}),
						),
						this.cc.add(this.sb.onContextMenu(this.cd, this)),
						this.cc.add(this.sb.onDidChangeSelection(this.Pc, this));
				}
				Gc(Y) {
					return this.Db.createInstance(
						x.$MRc,
						t.$fhb(Y, t.$(".markers-table-container")),
						this.oc,
						this.Cc(),
						this.s.options,
						{
							accessibilityProvider: this.fc,
							dnd: this.Db.createInstance(F.$VSb, (ne) =>
								ne instanceof C.$uRc
									? (0, N.$8rb)(ne.resource, ne.range)
									: null,
							),
							horizontalScrolling: !1,
							identityProvider: this.ec,
							multipleSelectionSupport: !0,
							selectionNavigation: !0,
						},
					);
				}
				Hc(Y) {
					const ie = new o.$Ae(),
						ne = this.Db.createInstance(T.$uPb, this),
						ee = new y.$ERc(this.oc),
						_ = [
							this.Db.createInstance(y.$FRc, ne, ie.event),
							this.Db.createInstance(y.$HRc, this.oc),
							this.Db.createInstance(y.$IRc),
						],
						te = this.Db.createInstance(
							W,
							"MarkersView",
							t.$fhb(Y, t.$(".tree-container.show-file-icons")),
							ee,
							_,
							{
								filter: this.s,
								accessibilityProvider: this.fc,
								identityProvider: this.ec,
								dnd: this.Db.createInstance(F.$VSb, (Q) =>
									Q instanceof C.$sRc
										? Q.resource
										: Q instanceof C.$tRc
											? (0, N.$8rb)(Q.resource, Q.range)
											: Q instanceof C.$vRc
												? (0, N.$8rb)(Q.raw.resource, Q.raw)
												: null,
								),
								expandOnlyOnTwistieClick: (Q) =>
									Q instanceof C.$tRc && Q.relatedInformation.length > 0,
								overrideStyles: this.Zb().listOverrideStyles,
								selectionNavigation: !0,
								multipleSelectionSupport: !0,
							},
						);
					return (ie.input = te.onDidChangeRenderNodeCount), te;
				}
				collapseAll() {
					this.sb.collapseMarkers();
				}
				setMultiline(Y) {
					this.oc.multiline = Y;
				}
				setViewMode(Y) {
					this.oc.viewMode = Y;
				}
				Ic(Y) {
					if ((this.ab.clear(), Y)) {
						for (const ie of this.Jc()) this.ab.add(ie);
						this.vc();
					}
				}
				Jc() {
					const Y = [],
						ie = (ne) =>
							this.qc.read({
								resource: ne,
								severities:
									P.MarkerSeverity.Error |
									P.MarkerSeverity.Warning |
									P.MarkerSeverity.Info,
							});
					return (
						this.h.setResourceMarkers(
							(0, B.$Db)(ie(), C.$rRc).map((ne) => [ne[0].resource, ne]),
						),
						Y.push(
							o.Event.debounce(
								this.qc.onMarkerChanged,
								(ne, ee) => (
									(ne = ne || new U.$Gc()), ee.forEach((_) => ne.set(_, _)), ne
								),
								64,
							)((ne) => {
								this.h.setResourceMarkers(
									[...ne.values()].map((ee) => [ee, ie(ee)]),
								);
							}),
						),
						Y.push(
							o.Event.any(
								this.h.onDidChange,
								this.pc.onDidActiveEditorChange,
							)((ne) => {
								ne ? this.Kc(ne) : this.Nc();
							}),
						),
						Y.push((0, O.$Yc)(() => this.h.reset())),
						this.h.resourceMarkers.forEach((ne) =>
							ne.markers.forEach((ee) => this.oc.add(ee)),
						),
						Y.push(this.oc.onDidChange((ne) => this.wc(ne))),
						Y.push(
							(0, O.$Yc)(() =>
								this.h.resourceMarkers.forEach((ne) =>
									this.oc.remove(ne.resource),
								),
							),
						),
						Y.push(
							this.filters.onDidChange((ne) => {
								ne.activeFile
									? this.vc()
									: (ne.excludedFiles ||
											ne.showWarnings ||
											ne.showErrors ||
											ne.showInfos) &&
										this.yc();
							}),
						),
						Y.push(this.filterWidget.onDidChangeFilterText((ne) => this.yc())),
						Y.push(
							(0, O.$Yc)(() => {
								this.mc = void 0;
							}),
						),
						Y.push((0, O.$Yc)(() => this.c.removeHighlightRange())),
						Y
					);
				}
				Kc(Y) {
					const ie = [...Y.added, ...Y.removed, ...Y.updated],
						ne = [];
					for (const { resource: ee } of ie) {
						this.oc.remove(ee);
						const _ = this.h.getResourceMarkers(ee);
						if (_) for (const te of _.markers) this.oc.add(te);
						ne.push(ee);
					}
					(this.nc = this.nc || this.Mc(ne)),
						this.vc(Y),
						this.ad(),
						this.nc && (this.Zc(), (this.nc = !1));
				}
				Lc() {
					this.dc && this.sb && ((this.dc.textContent = ""), this.cc.clear());
					const Y = new Set();
					for (const ne of this.sb.getSelection())
						ne instanceof C.$sRc
							? ne.markers.forEach((ee) => Y.add(ee))
							: (ne instanceof C.$tRc || ne instanceof C.$uRc) && Y.add(ne);
					const ie = new Set();
					for (const ne of this.sb.getFocus())
						(ne instanceof C.$tRc || ne instanceof C.$uRc) && ie.add(ne);
					this.Fc(this.dc),
						this.vc(),
						Y.size > 0 &&
							(this.sb.setMarkerSelection(Array.from(Y), Array.from(ie)),
							this.sb.domFocus());
				}
				Mc(Y) {
					const ie = this.b;
					return !ie || this.$c()
						? !1
						: Y.some((ee) => ee.toString() === ie.toString());
				}
				Nc() {
					this.Oc(), this.filters.activeFile && this.vc(), this.Zc();
				}
				Oc() {
					const Y = this.pc.activeEditor;
					this.b = Y
						? (z.$A1.getOriginalUri(Y, {
								supportSideBySide: z.SideBySideEditor.PRIMARY,
							}) ?? null)
						: null;
				}
				Pc() {
					const Y = this.sb.getSelection();
					Y && Y.length > 0 && (this.a = this.sb.getRelativeTop(Y[0]) || 0);
				}
				Qc() {
					const { total: Y, filtered: ie } = this.getFilterStats();
					return Y === 0 || ie === 0;
				}
				Rc() {
					(this.mc = void 0), this.xc(), this.ed(this.Qc()), this.Sc();
				}
				Sc() {
					if (!this.gc || !this.hc) return;
					t.$9fb(this.gc);
					const { total: Y, filtered: ie } = this.getFilterStats();
					ie === 0
						? ((this.gc.style.display = "block"),
							this.gc.setAttribute("tabIndex", "0"),
							this.filters.activeFile
								? this.Tc(this.gc)
								: Y > 0
									? this.Uc(this.gc)
									: this.Wc(this.gc))
						: ((this.gc.style.display = "none"),
							ie === Y
								? this.Xc((0, n.localize)(7498, null, Y))
								: this.Xc((0, n.localize)(7499, null, ie, Y)),
							this.gc.removeAttribute("tabIndex"));
				}
				Tc(Y) {
					this.b && this.h.getResourceMarkers(this.b) ? this.Uc(Y) : this.Vc(Y);
				}
				Uc(Y) {
					const ie = t.$fhb(Y, t.$("span"));
					ie.textContent = u.default.MARKERS_PANEL_NO_PROBLEMS_FILTERS;
					const ne = t.$fhb(Y, t.$("a.messageAction"));
					(ne.textContent = (0, n.localize)(7500, null)),
						ne.setAttribute("tabIndex", "0");
					const ee = t.$fhb(Y, t.$("span"));
					(ee.textContent = "."),
						t.$$fb(ne, t.$$gb.CLICK, () => this.Yc()),
						t.$$fb(ne, t.$$gb.KEY_DOWN, (_) => {
							(_.equals(L.KeyCode.Enter) || _.equals(L.KeyCode.Space)) &&
								(this.Yc(), _.stopPropagation());
						}),
						this.Xc(u.default.MARKERS_PANEL_NO_PROBLEMS_FILTERS);
				}
				Vc(Y) {
					const ie = t.$fhb(Y, t.$("span"));
					(ie.textContent =
						u.default.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT),
						this.Xc(u.default.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT);
				}
				Wc(Y) {
					const ie = t.$fhb(Y, t.$("span"));
					(ie.textContent = u.default.MARKERS_PANEL_NO_PROBLEMS_BUILT),
						this.Xc(u.default.MARKERS_PANEL_NO_PROBLEMS_BUILT);
				}
				Xc(Y) {
					this.sb.setAriaLabel(Y), this.hc.setAttribute("aria-label", Y);
				}
				Yc() {
					this.filterWidget.setFilterText(""),
						(this.filters.excludedFiles = !1),
						(this.filters.showErrors = !0),
						(this.filters.showWarnings = !0),
						(this.filters.showInfos = !0);
				}
				Zc(Y = !1) {
					if (this.filters.activeFile) return;
					const ie = this.Ab.getValue("problems.autoReveal");
					if (typeof ie == "boolean" && ie) {
						const ne = this.$c();
						this.sb.revealMarkers(ne, Y, this.a);
					}
				}
				$c() {
					return this.b ? this.h.getResourceMarkers(this.b) : null;
				}
				ad() {
					this.c.removeHighlightRange(),
						t.$Kgb(this.sb.getHTMLElement()) && this.bd();
				}
				bd() {
					const Y = this.sb.getSelection() ?? [];
					if (Y.length !== 1) return;
					const ie = Y[0];
					ie instanceof C.$tRc && this.c.highlightRange(ie);
				}
				cd(Y) {
					const ie = Y.element;
					ie &&
						(Y.browserEvent.preventDefault(),
						Y.browserEvent.stopPropagation(),
						this.zb.showContextMenu({
							getAnchor: () => Y.anchor,
							menuId: v.$XX.ProblemsPanelContext,
							contextKeyService: this.sb.contextKeyService,
							getActions: () => this.dd(ie),
							getActionViewItem: (ne) => {
								const ee = this.yb.lookupKeybinding(ne.id);
								if (ee)
									return new A.$_ib(ne, ne, {
										label: !0,
										keybinding: ee.getLabel(),
									});
							},
							onHide: (ne) => {
								ne && this.sb.domFocus();
							},
						}));
				}
				dd(Y) {
					const ie = [];
					if (Y instanceof C.$tRc) {
						const ne = this.oc.getViewModel(Y);
						if (ne) {
							const ee = ne.quickFixAction.quickFixes;
							ee.length && (ie.push(...ee), ie.push(new i.$tj()));
						}
					}
					return ie;
				}
				getFocusElement() {
					return this.sb.getFocus()[0] ?? void 0;
				}
				getFocusedSelectedElements() {
					const Y = this.getFocusElement();
					if (!Y) return null;
					const ie = this.sb.getSelection();
					if (ie.includes(Y)) {
						const ne = [];
						for (const ee of ie) ee && ne.push(ee);
						return ne;
					} else return [Y];
				}
				getAllResourceMarkers() {
					return this.h.resourceMarkers;
				}
				getFilterStats() {
					return (
						this.mc ||
							(this.mc = {
								total: this.h.total,
								filtered: this.sb?.getVisibleItemCount() ?? 0,
							}),
						this.mc
					);
				}
				ed(Y) {
					this.sb.toggleVisibility(Y), this.L();
				}
				saveState() {
					(this.lc.filter = this.filterWidget.getFilterText()),
						(this.lc.filterHistory = this.filters.filterHistory),
						(this.lc.showErrors = this.filters.showErrors),
						(this.lc.showWarnings = this.filters.showWarnings),
						(this.lc.showInfos = this.filters.showInfos),
						(this.lc.useFilesExclude = this.filters.excludedFiles),
						(this.lc.activeFile = this.filters.activeFile),
						(this.lc.multiline = this.oc.multiline),
						(this.lc.viewMode = this.oc.viewMode),
						this.kc.saveMemento(),
						super.saveState();
				}
				dispose() {
					super.dispose();
				}
			};
			(e.$NRc = J),
				(e.$NRc = J =
					Ne(
						[
							j(1, d.$Li),
							j(2, M.$K1),
							j(3, E.$IY),
							j(4, r.$gj),
							j(5, w.$km),
							j(6, P.$aM),
							j(7, g.$6j),
							j(8, l.$Vi),
							j(9, $.$Xxb),
							j(10, R.$Vl),
							j(11, S.$uZ),
							j(12, c.$lq),
							j(13, N.$7rb),
							j(14, h.$iP),
							j(15, V.$Uyb),
						],
						J,
					));
			let W = class extends f.$CMb {
				constructor(Y, ie, ne, ee, _, te, Q, Z, se, re) {
					super(Y, ie, ne, ee, _, te, Q, Z, re),
						(this.b = ie),
						(this.a =
							H.MarkersContextKeys.MarkersTreeVisibilityContextKey.bindTo(Q));
				}
				collapseMarkers() {
					this.collapseAll(),
						this.setSelection([]),
						this.setFocus([]),
						this.getHTMLElement().focus(),
						this.focusFirst();
				}
				filterMarkers() {
					this.refilter();
				}
				getVisibleItemCount() {
					let Y = 0;
					const ie = this.getNode();
					for (const ne of ie.children)
						for (const ee of ne.children) ne.visible && ee.visible && Y++;
					return Y;
				}
				isVisible() {
					return !this.b.classList.contains("hidden");
				}
				toggleVisibility(Y) {
					this.a.set(!Y), this.b.classList.toggle("hidden", Y);
				}
				reset(Y) {
					this.setChildren(
						null,
						p.Iterable.map(Y, (ie) => ({ element: ie, children: K(ie) })),
					);
				}
				revealMarkers(Y, ie, ne) {
					Y
						? this.hasElement(Y) &&
							(!this.isCollapsed(Y) && this.g(Y)
								? (this.reveal(this.getSelection()[0], ne),
									ie && this.setFocus(this.getSelection()))
								: (this.expand(Y),
									this.reveal(Y, 0),
									ie && (this.setFocus([Y]), this.setSelection([Y]))))
						: ie && (this.setSelection([]), this.focusFirst());
				}
				setAriaLabel(Y) {
					this.ariaLabel = Y;
				}
				setMarkerSelection(Y, ie) {
					if (this.isVisible()) {
						if (Y && Y.length > 0)
							this.setSelection(Y.map((ne) => this.c(ne))),
								ie && ie.length > 0
									? this.setFocus(ie.map((ne) => this.c(ne)))
									: this.setFocus([this.c(Y[0])]),
								this.reveal(this.c(Y[0]));
						else if (this.getSelection().length === 0) {
							const ne = this.firstVisibleElement,
								ee = ne
									? ne instanceof C.$sRc
										? ne.markers[0]
										: ne instanceof C.$tRc
											? ne
											: void 0
									: void 0;
							ee &&
								(this.setSelection([ee]), this.setFocus([ee]), this.reveal(ee));
						}
					}
				}
				update(Y) {
					for (const ie of Y)
						this.hasElement(ie) &&
							(this.setChildren(ie, K(ie)), this.rerender(ie));
				}
				updateMarker(Y) {
					this.rerender(Y);
				}
				c(Y) {
					for (const ie of this.getNode().children)
						for (const ne of ie.children)
							if (
								ne.element instanceof C.$tRc &&
								ne.element.marker === Y.marker
							)
								return ne.element;
					return null;
				}
				g(Y) {
					const ie = this.getSelection();
					return !!(
						ie &&
						ie.length > 0 &&
						ie[0] instanceof C.$tRc &&
						Y.has(ie[0].marker.resource)
					);
				}
				dispose() {
					super.dispose();
				}
				layout(Y, ie) {
					(this.b.style.height = `${Y}px`), super.layout(Y, ie);
				}
			};
			W = Ne(
				[j(5, d.$Li), j(6, g.$6j), j(7, f.$fMb), j(8, h.$iP), j(9, r.$gj)],
				W,
			);
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4026],
		he([
			1, 0, 8, 81, 99, 43, 27, 4, 988, 4025, 11, 30, 555, 799, 55, 52, 121, 3,
			166, 90, 60, 89, 100, 239, 102, 14, 79, 146, 260, 1224, 10, 224, 3431,
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
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(c = xi(c)),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_OPEN_ACTION_ID,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: t.$Kj.and(h.MarkersContextKeys.MarkerFocusContextKey),
					primary: C.KeyCode.Enter,
					mac: {
						primary: C.KeyCode.Enter,
						secondary: [C.KeyMod.CtrlCmd | C.KeyCode.DownArrow],
					},
					handler: (B, U) => {
						const z = B.get(l.$HMb).getActiveViewWithId(
							h.Markers.MARKERS_VIEW_ID,
						);
						z.openFileAtElement(z.getFocusElement(), !1, !1, !0);
					},
				}),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_OPEN_SIDE_ACTION_ID,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: t.$Kj.and(h.MarkersContextKeys.MarkerFocusContextKey),
					primary: C.KeyMod.CtrlCmd | C.KeyCode.Enter,
					mac: { primary: C.KeyMod.WinCtrl | C.KeyCode.Enter },
					handler: (B, U) => {
						const z = B.get(l.$HMb).getActiveViewWithId(
							h.Markers.MARKERS_VIEW_ID,
						);
						z.openFileAtElement(z.getFocusElement(), !1, !0, !0);
					},
				}),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_SHOW_PANEL_ID,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: void 0,
					primary: void 0,
					handler: async (B, U) => {
						await B.get(l.$HMb).openView(h.Markers.MARKERS_VIEW_ID);
					},
				}),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_SHOW_QUICK_FIX,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: h.MarkersContextKeys.MarkerFocusContextKey,
					primary: C.KeyMod.CtrlCmd | C.KeyCode.Period,
					handler: (B, U) => {
						const z = B.get(l.$HMb).getActiveViewWithId(
								h.Markers.MARKERS_VIEW_ID,
							),
							F = z.getFocusElement();
						F instanceof m.$tRc && z.showQuickFixes(F);
					},
				}),
				a.$Io
					.as(i.$No.Configuration)
					.registerConfiguration({
						...D.$x6,
						properties: {
							"problems.autoReveal": {
								description: c.default.PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL,
								type: "boolean",
								default: !0,
							},
							"problems.defaultViewMode": {
								description: c.default.PROBLEMS_PANEL_CONFIGURATION_VIEW_MODE,
								type: "string",
								default: "tree",
								enum: ["table", "tree"],
							},
							"problems.showCurrentInStatus": {
								description:
									c.default.PROBLEMS_PANEL_CONFIGURATION_SHOW_CURRENT_STATUS,
								type: "boolean",
								default: !1,
							},
							"problems.sortOrder": {
								description:
									c.default.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER,
								type: "string",
								default: "severity",
								enum: ["severity", "position"],
								enumDescriptions: [
									c.default.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_SEVERITY,
									c.default.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_POSITION,
								],
							},
						},
					});
			const M = (0, I.$$O)(
					"markers-view-icon",
					S.$ak.warning,
					(0, d.localize)(7449, null),
				),
				N = a.$Io
					.as(s.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: h.Markers.MARKERS_CONTAINER_ID,
							title: c.default.MARKERS_PANEL_TITLE_PROBLEMS,
							icon: M,
							hideIfEmpty: !0,
							order: 0,
							ctorDescriptor: new v.$Ji($.$ZSb, [
								h.Markers.MARKERS_CONTAINER_ID,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							storageId: h.Markers.MARKERS_VIEW_STORAGE_ID,
						},
						s.ViewContainerLocation.Panel,
						{ doNotRegisterOpenCommand: !0 },
					);
			a.$Io
				.as(s.Extensions.ViewsRegistry)
				.registerViews(
					[
						{
							id: h.Markers.MARKERS_VIEW_ID,
							containerIcon: M,
							name: c.default.MARKERS_PANEL_TITLE_PROBLEMS,
							canToggleVisibility: !1,
							canMoveView: !0,
							ctorDescriptor: new v.$Ji(r.$NRc),
							openCommandActionDescriptor: {
								id: "workbench.actions.view.problems",
								mnemonicTitle: (0, d.localize)(7450, null),
								keybindings: {
									primary: C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyM,
								},
								order: 0,
							},
						},
					],
					N,
				);
			const A = a.$Io.as(n.Extensions.Workbench);
			(0, u.$4X)(
				class extends T.$WMb {
					constructor() {
						super({
							id: `workbench.actions.table.${h.Markers.MARKERS_VIEW_ID}.viewAsTree`,
							title: (0, d.localize)(7451, null),
							menu: {
								id: u.$XX.ViewTitle,
								when: t.$Kj.and(
									t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									h.MarkersContextKeys.MarkersViewModeContextKey.isEqualTo(
										h.MarkersViewMode.Table,
									),
								),
								group: "navigation",
								order: 3,
							},
							icon: S.$ak.listTree,
							viewId: h.Markers.MARKERS_VIEW_ID,
						});
					}
					async runInView(B, U) {
						U.setViewMode(h.MarkersViewMode.Tree);
					}
				},
			),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.table.${h.Markers.MARKERS_VIEW_ID}.viewAsTable`,
								title: (0, d.localize)(7452, null),
								menu: {
									id: u.$XX.ViewTitle,
									when: t.$Kj.and(
										t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
										h.MarkersContextKeys.MarkersViewModeContextKey.isEqualTo(
											h.MarkersViewMode.Tree,
										),
									),
									group: "navigation",
									order: 3,
								},
								icon: S.$ak.listFlat,
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.setViewMode(h.MarkersViewMode.Table);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleErrors`,
								title: (0, d.localize)(7453, null),
								category: (0, d.localize)(7454, null),
								toggled: h.MarkersContextKeys.ShowErrorsFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "1_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 1,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.showErrors = !U.filters.showErrors;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleWarnings`,
								title: (0, d.localize)(7455, null),
								category: (0, d.localize)(7456, null),
								toggled: h.MarkersContextKeys.ShowWarningsFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "1_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 2,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.showWarnings = !U.filters.showWarnings;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleInfos`,
								title: (0, d.localize)(7457, null),
								category: (0, d.localize)(7458, null),
								toggled: h.MarkersContextKeys.ShowInfoFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "1_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 3,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.showInfos = !U.filters.showInfos;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleActiveFile`,
								title: (0, d.localize)(7459, null),
								category: (0, d.localize)(7460, null),
								toggled: h.MarkersContextKeys.ShowActiveFileFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "2_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 1,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.activeFile = !U.filters.activeFile;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleExcludedFiles`,
								title: (0, d.localize)(7461, null),
								category: (0, d.localize)(7462, null),
								toggled:
									h.MarkersContextKeys.ShowExcludedFilesFilterContextKey.negate(),
								menu: {
									id: k.$OMb,
									group: "2_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 2,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.excludedFiles = !U.filters.excludedFiles;
						}
					},
				),
				(0, u.$4X)(
					class extends u.$3X {
						constructor() {
							super({
								id: "workbench.action.problems.focus",
								title: c.default.MARKERS_PANEL_SHOW_LABEL,
								category: w.$ck.View,
								f1: !0,
							});
						}
						async run(B) {
							B.get(l.$HMb).openView(h.Markers.MARKERS_VIEW_ID, !0);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							const B = t.$Kj.and(
								y.$zQb.isEqualTo(h.Markers.MARKERS_VIEW_ID),
								h.MarkersContextKeys.MarkersTreeVisibilityContextKey,
								h.MarkersContextKeys.RelatedInformationFocusContextKey.toNegated(),
							);
							super({
								id: h.Markers.MARKER_COPY_ACTION_ID,
								title: (0, d.localize2)(7479, "Copy"),
								menu: {
									id: u.$XX.ProblemsPanelContext,
									when: B,
									group: "navigation",
								},
								keybinding: {
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyC,
									when: B,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							const z = B.get(p.$Vxb),
								F = U.getFocusedSelectedElements() || U.getAllResourceMarkers(),
								x = [],
								H = (q) => {
									x.includes(q) || x.push(q);
								};
							for (const q of F)
								q instanceof m.$sRc
									? q.markers.forEach(H)
									: q instanceof m.$tRc && H(q);
							x.length && (await z.writeText(`[${x}]`));
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKER_COPY_MESSAGE_ACTION_ID,
								title: (0, d.localize2)(7480, "Copy Message"),
								menu: {
									id: u.$XX.ProblemsPanelContext,
									when: h.MarkersContextKeys.MarkerFocusContextKey,
									group: "navigation",
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							const z = B.get(p.$Vxb),
								F = U.getFocusElement();
							F instanceof m.$tRc && (await z.writeText(F.marker.message));
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.RELATED_INFORMATION_COPY_MESSAGE_ACTION_ID,
								title: (0, d.localize2)(7481, "Copy Message"),
								menu: {
									id: u.$XX.ProblemsPanelContext,
									when: h.MarkersContextKeys.RelatedInformationFocusContextKey,
									group: "navigation",
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							const z = B.get(p.$Vxb),
								F = U.getFocusElement();
							F instanceof m.$vRc && (await z.writeText(F.raw.message));
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.FOCUS_PROBLEMS_FROM_FILTER,
								title: (0, d.localize)(7463, null),
								keybinding: {
									when: h.MarkersContextKeys.MarkerViewFilterFocusContextKey,
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyMod.CtrlCmd | C.KeyCode.DownArrow,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.focus();
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_FOCUS_FILTER,
								title: (0, d.localize)(7464, null),
								keybinding: {
									when: y.$zQb.isEqualTo(h.Markers.MARKERS_VIEW_ID),
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyF,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.focusFilter();
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_SHOW_MULTILINE_MESSAGE,
								title: (0, d.localize2)(7482, "Show message in multiple lines"),
								category: (0, d.localize)(7465, null),
								menu: {
									id: u.$XX.CommandPalette,
									when: t.$Kj.has((0, y.$AQb)(h.Markers.MARKERS_VIEW_ID)),
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.setMultiline(!0);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_SHOW_SINGLELINE_MESSAGE,
								title: (0, d.localize2)(7483, "Show message in single line"),
								category: (0, d.localize)(7466, null),
								menu: {
									id: u.$XX.CommandPalette,
									when: t.$Kj.has((0, y.$AQb)(h.Markers.MARKERS_VIEW_ID)),
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.setMultiline(!1);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_CLEAR_FILTER_TEXT,
								title: (0, d.localize)(7467, null),
								category: (0, d.localize)(7468, null),
								keybinding: {
									when: h.MarkersContextKeys.MarkerViewFilterFocusContextKey,
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyCode.Escape,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.clearFilterText();
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.treeView.${h.Markers.MARKERS_VIEW_ID}.collapseAll`,
								title: (0, d.localize)(7469, null),
								menu: {
									id: u.$XX.ViewTitle,
									when: t.$Kj.and(
										t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
										h.MarkersContextKeys.MarkersViewModeContextKey.isEqualTo(
											h.MarkersViewMode.Tree,
										),
									),
									group: "navigation",
									order: 2,
								},
								icon: S.$ak.collapseAll,
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							return U.collapseAll();
						}
					},
				),
				(0, u.$4X)(
					class extends u.$3X {
						constructor() {
							super({
								id: h.Markers.TOGGLE_MARKERS_VIEW_ACTION_ID,
								title: c.default.MARKERS_PANEL_TOGGLE_LABEL,
							});
						}
						async run(B) {
							const U = B.get(l.$HMb);
							U.isViewVisible(h.Markers.MARKERS_VIEW_ID)
								? U.closeView(h.Markers.MARKERS_VIEW_ID)
								: U.openView(h.Markers.MARKERS_VIEW_ID, !0);
						}
					},
				);
			let R = class extends o.$1c {
				constructor(U, z, F) {
					super(),
						(this.c = U),
						(this.f = z),
						(this.g = F),
						(this.a = this.D(
							this.f.addEntry(
								this.h(),
								"status.problems",
								f.StatusbarAlignment.LEFT,
								50,
							),
						));
					const x = () => {
						this.b = this.f.addEntry(
							this.j(),
							"status.problemsVisibility",
							f.StatusbarAlignment.LEFT,
							49,
						);
					};
					let H = this.g.getValue("problems.visibility");
					H || x(),
						this.D(
							this.c.onMarkerChanged(() => {
								this.a.update(this.h());
							}),
						),
						this.D(
							this.g.onDidChangeConfiguration((q) => {
								q.affectsConfiguration("problems.visibility") &&
									(this.a.update(this.h()),
									(H = this.g.getValue("problems.visibility")),
									!H && !this.b
										? x()
										: H && this.b && (this.b.dispose(), (this.b = void 0)));
							}),
						);
				}
				h() {
					const U = this.c.getStatistics(),
						z = this.m(U);
					return {
						name: (0, d.localize)(7470, null),
						text: this.q(U),
						ariaLabel: z,
						tooltip: z,
						command: "workbench.actions.view.toggleProblems",
					};
				}
				j() {
					this.f.updateEntryVisibility("status.problemsVisibility", !0);
					const U = "workbench.action.openSettings",
						z = "@id:problems.visibility",
						F = (0, d.localize)(7471, null);
					return {
						name: (0, d.localize)(7472, null),
						text: "$(whole-word)",
						ariaLabel: F,
						tooltip: F,
						kind: "warning",
						command: { title: U, arguments: [z], id: U },
					};
				}
				m(U) {
					const z = (q) => (0, d.localize)(7473, null, q),
						F = (q) => (0, d.localize)(7474, null, q),
						x = (q) => (0, d.localize)(7475, null, q),
						H = [];
					return (
						U.errors > 0 && H.push(z(U.errors)),
						U.warnings > 0 && H.push(F(U.warnings)),
						U.infos > 0 && H.push(x(U.infos)),
						H.length === 0 ? (0, d.localize)(7476, null) : H.join(", ")
					);
				}
				q(U) {
					const z = [];
					return (
						z.push("$(error) " + this.r(U.errors)),
						z.push("$(warning) " + this.r(U.warnings)),
						U.infos > 0 && z.push("$(info) " + this.r(U.infos)),
						z.join(" ")
					);
				}
				r(U) {
					const z = (0, d.localize)(7477, null);
					return U > 9999
						? z
						: U > 999
							? U.toString().charAt(0) + "K"
							: U.toString();
				}
			};
			(R = Ne([j(0, b.$aM), j(1, f.$d6b), j(2, L.$gj)], R)),
				A.registerWorkbenchContribution(R, g.LifecyclePhase.Restored);
			let O = class extends o.$1c {
				constructor(U, z) {
					super(),
						(this.b = U),
						(this.c = z),
						(this.a = this.D(new o.$2c())),
						this.D(this.c.onMarkerChanged(() => this.f())),
						this.f();
				}
				f() {
					const { errors: U, warnings: z, infos: F } = this.c.getStatistics(),
						x = U + z + F;
					if (x > 0) {
						const H = (0, d.localize)(7478, null, x);
						this.a.value = this.b.showViewActivity(h.Markers.MARKERS_VIEW_ID, {
							badge: new P.$8qc(x, () => H),
						});
					} else this.a.value = void 0;
				}
			};
			(O = Ne([j(0, P.$7qc), j(1, b.$aM)], O)),
				A.registerWorkbenchContribution(O, g.LifecyclePhase.Restored);
		},
	),
		define(
			de[4027],
			he([
				1, 0, 4, 10, 8, 49, 39, 35, 60, 5, 41, 32, 72, 31, 8, 146, 467, 11, 3,
				45, 558, 854, 14, 57, 1743, 63,
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
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xAc = void 0);
				let I = class extends g.$TMb {
					static {
						this.ID = s.$B9b;
					}
					static {
						this.TITLE = (0, t.localize2)(8245, "Notepad");
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V) {
						super(
							{
								...P,
								titleMenuId: s.$C9b,
								showActions: g.ViewPaneShowActions.Default,
							},
							k,
							L,
							D,
							M,
							N,
							A,
							R,
							O,
							B,
							U,
						),
							(this.c = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.j = q),
							(this.m = V),
							(this.a = !1),
							this.onDidChangeBodyVisibility(() => {
								this.n();
							}),
							(this.b = this.D(A.createInstance(l.$Stc, P.id, P.title)));
						const G = {
							isTreeEmpty: Object.keys(z.notepadsData.notepads).length === 0,
							getChildren: async () => {
								const K = z.notepadsData,
									J = Object.values(K.notepads).map((W) => ({
										label: { label: W.name },
										handle: W.id,
										collapsibleState: m.TreeItemCollapsibleState.None,
										themeIcon: { id: "book" },
									}));
								return J.length === 0
									? [
											{
												label: { label: (0, t.localize)(8237, null) },
												handle: "create-new-notepad",
												collapsibleState: m.TreeItemCollapsibleState.None,
												themeIcon: { id: "add" },
												contextValue: "create-new-notepad",
											},
										]
									: J;
							},
						};
						(this.b.dataProvider = G),
							this.b.setVisibility(!0),
							this.D(
								this.g.onChangeEffectManuallyDisposed({
									deps: [
										() => {
											const K = this.c.notepadsData;
											return Object.values(K.notepads).map((J) => ({
												name: J.name,
												handle: J.id,
											}));
										},
									],
									onChange: () => {
										this.n();
									},
								}),
							),
							this.D(
								this.g.onChangeEffectManuallyDisposed({
									deps: [() => this.c.notepadsData],
									onChange: () => {
										this.n();
									},
								}),
							),
							this.b.getTree().onDidOpen(({ element: K }) => {
								K &&
									(K.handle === "create-new-notepad"
										? this.j.executeCommand(v.$wAc.ID)
										: this.f.openNotepad(K.handle));
							});
					}
					focus() {
						this.n();
					}
					render() {
						super.render(), this.n();
					}
					n() {
						this.b.refresh(),
							this.container &&
								(this.b.show(this.container),
								setTimeout(() => {
									if (!this.container) return;
									const P = this.container.clientWidth,
										k = this.container.clientHeight;
									P > 0 && k > 0 && this.b.layout(k, P);
								}));
					}
					W(P) {
						(this.container = P), super.W(P), this.b.show(P);
						const k = new ResizeObserver(() => {
							this.n();
						});
						if (
							(k.observe(P), this.D((0, f.$Yc)(() => k.disconnect())), !this.a)
						) {
							(this.a = !0),
								this.b.getTree().onDidOpen(({ element: M }) => {
									M &&
										(M.handle === "create-new-notepad"
											? this.j.executeCommand("notepad.new")
											: this.f.openNotepad(M.handle));
								});
							const L = this.b;
							if (!L) return;
							const D = this;
							this.D(
								(0, o.$4X)(
									class extends o.$3X {
										constructor() {
											super({
												id: "notepad.rename",
												title: (0, t.localize)(8238, null),
												icon: y.$ak.edit,
												menu: [
													{
														id: o.$XX.ViewItemContext,
														group: "inline",
														order: 1,
														when: n.$Kj.notEquals(
															"viewItem",
															"create-new-notepad",
														),
													},
												],
											});
										}
										async run(M, N) {
											const A = M.get(S.$DJ),
												R = M.get(p.$y9b);
											if (!L) return;
											const O = L.getNodeByHandle(N.$treeItemHandle);
											if (O && O.handle) {
												const B = O.label?.label ?? s.$F9b,
													U = await A.input({
														title: (0, t.localize)(8239, null),
														placeHolder: (0, t.localize)(8240, null),
														value: B,
														validateInput: async (z) =>
															z.trim().length === 0
																? {
																		content: (0, t.localize)(8241, null),
																		severity: 3,
																	}
																: null,
													});
												U !== void 0 &&
													(await R.updateNotepadData(O.handle, { name: U }),
													D.n());
											}
										}
									},
								),
							),
								this.D(
									(0, o.$4X)(
										class extends o.$3X {
											constructor() {
												super({
													id: "notepad.delete",
													title: (0, t.localize)(8242, null),
													icon: y.$ak.trash,
													menu: [
														{
															id: o.$XX.ViewItemContext,
															group: "inline",
															order: 2,
															when: n.$Kj.notEquals(
																"viewItem",
																"create-new-notepad",
															),
														},
													],
												});
											}
											async run(M, N) {
												const A = M.get($.$GO),
													R = M.get(p.$z9b);
												if (!L) return;
												const O = L.getNodeByHandle(N.$treeItemHandle);
												O &&
													O.handle &&
													(
														await A.confirm({
															message: (0, t.localize)(
																8243,
																null,
																O.label?.label ?? s.$F9b,
															),
															primaryButton: (0, t.localize)(8244, null),
															type: "warning",
														})
													).confirmed &&
													(await R.deleteNotepad(O.handle), D.n());
											}
										},
									),
								);
						}
					}
					dispose() {
						super.dispose();
					}
				};
				(e.$xAc = I),
					(e.$xAc = I =
						Ne(
							[
								j(1, C.$uZ),
								j(2, E.$Xxb),
								j(3, i.$gj),
								j(4, w.$6j),
								j(5, m.$K1),
								j(6, r.$Li),
								j(7, u.$7rb),
								j(8, d.$iP),
								j(9, a.$km),
								j(10, h.$Uyb),
								j(11, p.$y9b),
								j(12, p.$z9b),
								j(13, b.$0zb),
								j(14, $.$GO),
								j(15, c.$ek),
								j(16, S.$DJ),
							],
							I,
						));
			},
		),
		define(
			de[4028],
			he([
				1, 0, 4, 27, 172, 30, 11, 20, 3835, 297, 1919, 102, 55, 52, 60, 89, 239,
				81, 63, 18, 28, 8, 14, 79, 99, 3, 170, 184, 34, 1019,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(0, d.$lK)(r.$o8, m.$bUc, d.InstantiationType.Delayed),
					w.$9M.registerLanguage({
						id: r.$e8,
						extensions: [],
						mimetypes: [r.$d8],
					}),
					w.$9M.registerLanguage({
						id: r.$g8,
						extensions: [],
						mimetypes: [r.$f8],
					});
				const L = (0, $.$$O)(
						"output-view-icon",
						y.$ak.output,
						t.localize(8295, null),
					),
					D = E.$Io
						.as(n.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: r.$h8,
								title: t.localize2(8310, "Output"),
								icon: L,
								order: 1,
								ctorDescriptor: new a.$Ji(p.$ZSb, [
									r.$h8,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								storageId: r.$h8,
								hideIfEmpty: !0,
							},
							n.ViewContainerLocation.Panel,
							{ doNotRegisterOpenCommand: !0 },
						);
				E.$Io
					.as(n.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: r.$h8,
								name: t.localize2(8311, "Output"),
								containerIcon: L,
								canMoveView: !0,
								canToggleVisibility: !1,
								ctorDescriptor: new a.$Ji(u.$aUc),
								openCommandActionDescriptor: {
									id: "workbench.action.output.toggleOutput",
									mnemonicTitle: t.localize(8296, null),
									keybindings: {
										primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyU,
										linux: {
											primary: (0, i.$os)(
												i.$ps,
												i.KeyMod.CtrlCmd | i.KeyCode.KeyH,
											),
										},
									},
									order: 1,
								},
							},
						],
						D,
					);
				let M = class extends S.$1c {
					constructor(A, R, O) {
						super(), (this.f = A), (this.g = R), (this.h = O), this.j();
					}
					j() {
						this.m(),
							this.n(),
							this.q(),
							this.r(),
							this.s(),
							this.t(),
							this.z(),
							this.C(),
							this.y();
					}
					m() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.output.action.switchBetweenOutputs",
											title: t.localize(8297, null),
										});
									}
									async run(U, z) {
										z && U.get(r.$o8).showChannel(z, !0);
									}
								},
							),
						);
						const A = new C.$XX("workbench.output.menu.switchOutput");
						this.D(
							C.$ZX.appendMenuItem(C.$XX.ViewTitle, {
								submenu: A,
								title: t.localize(8298, null),
								group: "navigation",
								when: l.$Kj.equals("view", r.$h8),
								order: 1,
								isSelection: !0,
							}),
						);
						const R = new Map();
						this.D((0, S.$Yc)(() => (0, S.$Vc)(R.values())));
						const O = (U) => {
							for (const z of U) {
								const F = z.label,
									x = z.extensionId
										? "0_ext_outputchannels"
										: "1_core_outputchannels";
								R.set(
									z.id,
									(0, C.$4X)(
										class extends C.$3X {
											constructor() {
												super({
													id: `workbench.action.output.show.${z.id}`,
													title: F,
													toggled: r.$q8.isEqualTo(z.id),
													menu: { id: A, group: x },
												});
											}
											async run(H) {
												return H.get(r.$o8).showChannel(z.id, !0);
											}
										},
									),
								);
							}
						};
						O(this.f.getChannelDescriptors());
						const B = E.$Io.as(r.$p8.OutputChannels);
						this.D(
							B.onDidRegisterChannel((U) => {
								const z = this.f.getChannelDescriptor(U);
								z && O([z]);
							}),
						),
							this.D(
								B.onDidRemoveChannel((U) => {
									R.get(U)?.dispose(), R.delete(U);
								}),
							);
					}
					n() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.showOutputChannels",
											title: t.localize2(8312, "Show Output Channels..."),
											category: t.localize2(8313, "Output"),
											f1: !0,
										});
									}
									async run(A) {
										const R = A.get(r.$o8),
											O = A.get(f.$DJ),
											B = [],
											U = [];
										for (const x of R.getChannelDescriptors())
											x.extensionId ? B.push(x) : U.push(x);
										const z = [];
										for (const { id: x, label: H } of B)
											z.push({ id: x, label: H });
										B.length && U.length && z.push({ type: "separator" });
										for (const { id: x, label: H } of U)
											z.push({ id: x, label: H });
										const F = await O.pick(z, {
											placeHolder: t.localize(8299, null),
										});
										if (F) return R.showChannel(F.id);
									}
								},
							),
						);
					}
					q() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.output.action.clearOutput",
											title: t.localize2(8314, "Clear Output"),
											category: v.$ck.View,
											menu: [
												{
													id: C.$XX.ViewTitle,
													when: l.$Kj.equals("view", r.$h8),
													group: "navigation",
													order: 2,
												},
												{ id: C.$XX.CommandPalette },
												{ id: C.$XX.EditorContext, when: r.$i8 },
											],
											icon: y.$ak.clearAll,
										});
									}
									async run(A) {
										const R = A.get(r.$o8),
											O = A.get(T.$Owb),
											B = R.getActiveChannel();
										B && (B.clear(), O.playSignal(T.$Twb.clear));
									}
								},
							),
						);
					}
					r() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.output.action.toggleAutoScroll",
											title: t.localize2(8315, "Toggle Auto Scrolling"),
											tooltip: t.localize(8300, null),
											menu: {
												id: C.$XX.ViewTitle,
												when: l.$Kj.and(l.$Kj.equals("view", r.$h8)),
												group: "navigation",
												order: 3,
											},
											icon: y.$ak.lock,
											toggled: {
												condition: r.$n8,
												icon: y.$ak.unlock,
												tooltip: t.localize(8301, null),
											},
										});
									}
									async run(A) {
										const R = A.get(g.$HMb).getActiveViewWithId(r.$h8);
										R.scrollLock = !R.scrollLock;
									}
								},
							),
						);
					}
					s() {
						const A = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.openActiveLogOutputFile",
											title: t.localize2(8316, "Open Output in Editor"),
											menu: [
												{
													id: C.$XX.ViewTitle,
													when: l.$Kj.equals("view", r.$h8),
													group: "navigation",
													order: 4,
													isHiddenByDefault: !0,
												},
											],
											icon: y.$ak.goToFile,
											precondition: r.$j8,
										});
									}
									async run() {
										A.u();
									}
								},
							),
						);
					}
					t() {
						const A = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.openActiveLogOutputFileInNewWindow",
											title: t.localize2(8317, "Open Output in New Window"),
											menu: [
												{
													id: C.$XX.ViewTitle,
													when: l.$Kj.equals("view", r.$h8),
													group: "navigation",
													order: 5,
													isHiddenByDefault: !0,
												},
											],
											icon: y.$ak.emptyWindow,
											precondition: r.$j8,
										});
									}
									async run() {
										A.u(b.$LY);
									}
								},
							),
						);
					}
					async u(A) {
						const R = this.w();
						R &&
							(await this.h.updateReadonly(R.file, !0),
							await this.g.openEditor(
								{ resource: R.file, options: { pinned: !0 } },
								A,
							));
					}
					w() {
						const A = this.f.getActiveChannel();
						if (A) {
							const R = this.f
								.getChannelDescriptors()
								.filter((O) => O.id === A.id)[0];
							if (R?.file) return R;
						}
						return null;
					}
					y() {
						const A = this,
							R = new C.$XX("workbench.output.menu.logLevel");
						this.D(
							C.$ZX.appendMenuItem(C.$XX.ViewTitle, {
								submenu: R,
								title: t.localize(8302, null),
								group: "navigation",
								when: l.$Kj.and(l.$Kj.equals("view", r.$h8), r.$k8),
								icon: y.$ak.gear,
								order: 6,
							}),
						);
						let O = 0;
						const B = (U) => {
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super({
												id: `workbench.action.output.activeOutputLogLevel.${U}`,
												title: (0, P.$yk)(U).value,
												toggled: r.$l8.isEqualTo((0, P.$xk)(U)),
												menu: { id: R, order: O++, group: "0_level" },
											});
										}
										async run(z) {
											const F = A.f.getActiveChannel();
											if (F) {
												const x = A.f.getChannelDescriptor(F.id);
												if (x?.log && x.file)
													return z.get(P.$jk).setLogLevel(x.file, U);
											}
										}
									},
								),
							);
						};
						B(P.LogLevel.Trace),
							B(P.LogLevel.Debug),
							B(P.LogLevel.Info),
							B(P.LogLevel.Warning),
							B(P.LogLevel.Error),
							B(P.LogLevel.Off),
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super({
												id: "workbench.action.output.activeOutputLogLevelDefault",
												title: t.localize(8303, null),
												menu: { id: R, order: O, group: "1_default" },
												precondition: r.$m8.negate(),
											});
										}
										async run(U) {
											const z = A.f.getActiveChannel();
											if (z) {
												const F = A.f.getChannelDescriptor(z.id);
												if (F?.log && F.file) {
													const x = U.get(P.$jk).getLogLevel(F.file);
													return await U.get(k.$GMc).setDefaultLogLevel(
														x,
														F.extensionId,
													);
												}
											}
										}
									},
								),
							);
					}
					z() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.showLogs",
											title: t.localize2(8318, "Show Logs..."),
											category: v.$ck.Developer,
											menu: { id: C.$XX.CommandPalette },
										});
									}
									async run(A) {
										const R = A.get(r.$o8),
											O = A.get(f.$DJ),
											B = [],
											U = [];
										for (const x of R.getChannelDescriptors())
											x.log && (x.extensionId ? B.push(x) : U.push(x));
										const z = [];
										for (const { id: x, label: H } of U)
											z.push({ id: x, label: H });
										B.length &&
											U.length &&
											z.push({
												type: "separator",
												label: t.localize(8304, null),
											});
										for (const { id: x, label: H } of B)
											z.push({ id: x, label: H });
										const F = await O.pick(z, {
											placeHolder: t.localize(8305, null),
										});
										if (F) return R.showChannel(F.id);
									}
								},
							),
						);
					}
					C() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.openLogFile",
											title: t.localize2(8319, "Open Log File..."),
											category: v.$ck.Developer,
											menu: { id: C.$XX.CommandPalette },
											metadata: {
												description: "workbench.action.openLogFile",
												args: [
													{
														name: "logFile",
														schema: {
															markdownDescription: t.localize(8306, null),
															type: "string",
														},
													},
												],
											},
										});
									}
									async run(A, R) {
										const O = A.get(r.$o8),
											B = A.get(f.$DJ),
											U = A.get(b.$IY),
											z = A.get(I.$_Y);
										let F;
										const x = R && typeof R == "string" ? R : void 0,
											H = [],
											q = [];
										for (const V of O.getChannelDescriptors())
											if (V.file && V.log) {
												const G = { id: V.id, label: V.label, channel: V };
												V.extensionId ? H.push(G) : q.push(G),
													G.id === x && (F = G);
											}
										if (!F) {
											const V = [
												...H.sort((G, K) => G.label.localeCompare(K.label)),
											];
											V.length &&
												q.length &&
												(V.push({ type: "separator" }),
												V.push(
													...q.sort((G, K) => G.label.localeCompare(K.label)),
												)),
												(F = await B.pick(V, {
													placeHolder: t.localize(8307, null),
												}));
										}
										if (F) {
											const V = (0, s.$wg)(F.channel.file);
											await z.updateReadonly(V, !0),
												await U.openEditor({
													resource: V,
													options: { pinned: !0 },
												});
										}
									}
								},
							),
						);
					}
				};
				(M = Ne([j(0, r.$o8), j(1, b.$IY), j(2, I.$_Y)], M)),
					E.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(M, c.LifecyclePhase.Restored),
					E.$Io
						.as(o.$No.Configuration)
						.registerConfiguration({
							id: "output",
							order: 30,
							title: t.localize(8308, null),
							type: "object",
							properties: {
								"output.smartScroll.enabled": {
									type: "boolean",
									description: t.localize(8309, null),
									default: !0,
									scope: o.ConfigurationScope.WINDOW,
									tags: ["output"],
								},
							},
						});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1058],
		he([
			1, 0, 4, 3, 60, 519, 839, 3837, 8, 78, 30, 166, 3126, 111, 10, 40, 41,
			107, 112, 143, 12, 374, 102, 239, 260, 1256, 6, 1034, 87, 81, 34, 261, 50,
			131, 21,
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
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$huc = e.$guc = e.$fuc = e.$euc = void 0),
				(t = mt(t)),
				(c = xi(c)),
				(e.$euc = "workbench.view.remote");
			let R = class extends i.$1c {
				constructor(H, q, V, G, K, J) {
					super(),
						(this.h = H),
						(this.j = q),
						(this.m = V),
						(this.q = G),
						(this.r = K),
						(this.s = J),
						(this.c = this.D(new i.$2c())),
						(this.f = this.D(new i.$2c())),
						this.D(
							u.$Io
								.as(w.Extensions.ViewsRegistry)
								.registerViewWelcomeContent(E.$7pc, {
									content: this.j.remoteAuthority
										? t.localize(
												8749,
												null,
												`command:${d.ForwardPortAction.INLINE_ID}`,
											)
										: t.localize(
												8750,
												null,
												`command:${d.ForwardPortAction.INLINE_ID}`,
											),
								}),
						),
						this.w(),
						this.u();
				}
				async t() {
					return u.$Io
						.as(w.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: E.$8pc,
								title: t.localize2(8764, "Ports"),
								icon: S.$1tc,
								ctorDescriptor: new y.$Ji($.$ZSb, [
									E.$8pc,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								storageId: E.$8pc,
								hideIfEmpty: !0,
								order: 5,
							},
							w.ViewContainerLocation.Panel,
						);
				}
				async u() {
					if ((this.c.clear(), !!C.$t8.getValue(this.h))) {
						const q = await this.t(),
							V = new d.$cuc(new d.$auc(this.m, this.q), this.j),
							G = u.$Io.as(w.Extensions.ViewsRegistry);
						q && (this.m.enablePortsFeatures(), G.registerViews([V], q));
					} else
						this.c.value = this.h.onDidChangeContext((q) => {
							q.affectsSome(new Set(C.$t8.keys())) && this.u();
						});
				}
				w() {
					const H = u.$Io
						.as(w.Extensions.ViewsRegistry)
						.onViewsRegistered((q) => {
							q.find((V) => V.views.find((G) => G.id === E.$7pc)) &&
								(this.D(
									I.Event.debounce(
										this.m.tunnelModel.onForwardPort,
										(V, G) => G,
										50,
									)(() => {
										this.y(), this.z();
									}),
								),
								this.D(
									I.Event.debounce(
										this.m.tunnelModel.onClosePort,
										(V, G) => G,
										50,
									)(() => {
										this.y(), this.z();
									}),
								),
								this.y(),
								this.z(),
								H.dispose());
						});
				}
				async y() {
					this.m.tunnelModel.forwarded.size > 0 &&
						(this.f.value = this.r.showViewActivity(E.$7pc, {
							badge: new v.$8qc(this.m.tunnelModel.forwarded.size, (H) =>
								H === 1 ? t.localize(8751, null) : t.localize(8752, null, H),
							),
						}));
				}
				z() {
					this.g
						? this.g.update(this.C)
						: this.D(
								(this.g = this.s.addEntry(
									this.C,
									"status.forwardedPorts",
									a.StatusbarAlignment.LEFT,
									40,
								)),
							);
				}
				get C() {
					let H;
					const q =
							this.m.tunnelModel.forwarded.size +
							this.m.tunnelModel.detected.size,
						V = `${q}`;
					if (q === 0) H = t.localize(8753, null);
					else {
						const G = Array.from(this.m.tunnelModel.forwarded.values());
						G.push(...Array.from(this.m.tunnelModel.detected.values())),
							(H = t.localize(
								8754,
								null,
								G.map((K) => K.remotePort).join(", "),
							));
					}
					return {
						name: t.localize(8755, null),
						text: `$(radio-tower) ${V}`,
						ariaLabel: H,
						tooltip: H,
						command: `${E.$7pc}.focus`,
					};
				}
			};
			(e.$fuc = R),
				(e.$fuc = R =
					Ne(
						[
							j(0, m.$6j),
							j(1, r.$r8),
							j(2, E.$5pc),
							j(3, l.$cO),
							j(4, v.$7qc),
							j(5, a.$d6b),
						],
						R,
					));
			let O = class {
				constructor(H, q) {
					(this.c = H),
						(this.d = q),
						this.c.tunnelModel.environmentTunnelsSet
							? this.f()
							: I.Event.once(this.c.tunnelModel.onEnvironmentTunnelsSet)(
									async () => {
										await this.f();
									},
								);
				}
				async f() {
					return (
						this.d.trace("ForwardedPorts: Doing first restore."),
						this.c.restore()
					);
				}
			};
			(e.$guc = O), (e.$guc = O = Ne([j(0, E.$5pc), j(1, L.$ik)], O));
			let B = class extends i.$1c {
				constructor(H, q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
					super(),
						(this.h = H),
						(this.j = q),
						(this.m = V),
						(this.q = G),
						(this.r = K),
						(this.s = W),
						(this.t = X),
						(this.u = Y),
						(this.w = ne),
						(this.y = ee),
						(this.z = _),
						(this.C = te),
						(this.F = Q),
						J.remoteAuthority &&
							(X.whenRemoteConfigurationLoaded()
								.then(() => ie.getEnvironment())
								.then((Z) => {
									this.I(Z),
										this.D(
											X.onDidChangeConfiguration((se) => {
												se.affectsConfiguration(E.$0pc)
													? this.I(Z)
													: se.affectsConfiguration(E.$$pc) &&
														!this.g &&
														this.H();
											}),
										);
								}),
							this.C.getBoolean(
								"processPortForwardingFallback",
								A.StorageScope.WORKSPACE,
								!0,
							) ||
								this.t.updateValue(E.$$pc, 0, n.ConfigurationTarget.WORKSPACE));
				}
				G() {
					const H = this.t.inspect(E.$$pc);
					if (
						H.value !== void 0 &&
						(H.value === 0 || H.value !== H.defaultValue)
					)
						return H.value;
					const q = this.t.inspect(E.$0pc);
					return q.applicationValue === E.$_pc ||
						q.userValue === E.$_pc ||
						q.userLocalValue === E.$_pc ||
						q.userRemoteValue === E.$_pc ||
						q.workspaceFolderValue === E.$_pc ||
						q.workspaceValue === E.$_pc
						? 0
						: (H.value ?? 20);
				}
				H() {
					let H = this.G();
					if (H === 0) {
						this.g?.dispose();
						return;
					}
					this.c && !this.g && this.t.getValue(E.$0pc) === E.$_pc
						? (this.g = this.D(
								this.r.tunnelModel.onForwardPort(async () => {
									if (((H = this.G()), H === 0)) {
										this.g?.dispose();
										return;
									}
									Array.from(this.r.tunnelModel.forwarded.values()).filter(
										(q) => q.source.source === C.TunnelSource.Auto,
									).length > H &&
										(await this.t.updateValue(E.$0pc, E.$bqc),
										this.j.notify({
											message: t.localize(8756, null),
											severity: c.default.Warning,
											actions: {
												primary: [
													new M.$rj(
														"switchBack",
														t.localize(8757, null),
														void 0,
														!0,
														async () => {
															await this.t.updateValue(E.$0pc, E.$_pc),
																await this.t.updateValue(
																	E.$$pc,
																	0,
																	n.ConfigurationTarget.WORKSPACE,
																),
																this.g?.dispose(),
																(this.g = void 0);
														},
													),
													new M.$rj(
														"showPortSourceSetting",
														t.localize(8758, null),
														void 0,
														!0,
														async () => {
															await this.F.openSettings({
																query: "remote.autoForwardPortsSource",
															});
														},
													),
												],
											},
										}));
								}),
							))
						: (this.g?.dispose(), (this.g = void 0));
				}
				I(H) {
					const q = this.c?.forwarded,
						V = this.f || this.c;
					if (
						(this.c?.dispose(),
						(this.c = void 0),
						this.f?.dispose(),
						(this.f = void 0),
						H?.os !== s.OperatingSystem.Linux)
					)
						this.t.inspect(E.$0pc).default?.value !== E.$aqc &&
							u.$Io
								.as(k.$No.Configuration)
								.registerDefaultConfigurations([
									{ overrides: { "remote.autoForwardPortsSource": E.$aqc } },
								]),
							(this.f = this.D(
								new z(
									this.h,
									this.j,
									this.m,
									this.q,
									this.r,
									this.t,
									this.u,
									this.w,
									this.y,
									this.z,
									this.s,
									() => !1,
								),
							));
					else {
						const G = () => this.t.getValue(E.$0pc) === E.$_pc;
						G()
							? (this.c = this.D(
									new F(
										!1,
										q,
										!V,
										this.t,
										this.r,
										this.j,
										this.m,
										this.q,
										this.w,
										this.y,
										this.z,
										this.s,
									),
								))
							: this.t.getValue(E.$0pc) === E.$bqc &&
								(this.c = this.D(
									new F(
										!0,
										q,
										!V,
										this.t,
										this.r,
										this.j,
										this.m,
										this.q,
										this.w,
										this.y,
										this.z,
										this.s,
									),
								)),
							(this.f = this.D(
								new z(
									this.h,
									this.j,
									this.m,
									this.q,
									this.r,
									this.t,
									this.u,
									this.w,
									this.y,
									this.z,
									this.s,
									G,
								),
							));
					}
					this.H();
				}
			};
			(e.$huc = B),
				(e.$huc = B =
					Ne(
						[
							j(0, o.$iIb),
							j(1, g.$4N),
							j(2, p.$7rb),
							j(3, T.IExternalUriOpenerService),
							j(4, E.$5pc),
							j(5, r.$r8),
							j(6, m.$6j),
							j(7, D.$RZ),
							j(8, f.$75),
							j(9, b.$$m),
							j(10, l.$cO),
							j(11, P.$asb),
							j(12, L.$ik),
							j(13, A.$lq),
							j(14, N.$7Z),
						],
						B,
					));
			class U extends i.$1c {
				static {
					this.f = 5e3;
				}
				constructor(H, q, V, G, K, J, W, X) {
					super(),
						(this.q = H),
						(this.r = q),
						(this.s = V),
						(this.t = G),
						(this.u = K),
						(this.w = J),
						(this.y = W),
						(this.z = X),
						(this.m = new Set()),
						(this.c = new Date()),
						this.c.setFullYear(this.c.getFullYear() - 1);
				}
				async doAction(H) {
					this.y.trace(
						`ForwardedPorts: (OnAutoForwardedAction) Starting action for ${H[0]?.tunnelRemotePort}`,
					),
						(this.j = H);
					const q = await this.F();
					if (
						(this.y.trace(
							`ForwardedPorts: (OnAutoForwardedAction) Heuristic chose ${q?.tunnelRemotePort}`,
						),
						q)
					) {
						const G = (
							await this.r.tunnelModel.getAttributes([
								{ port: q.tunnelRemotePort, host: q.tunnelRemoteHost },
							])
						)?.get(q.tunnelRemotePort)?.onAutoForward;
						switch (
							(this.y.trace(
								`ForwardedPorts: (OnAutoForwardedAction) onAutoForward action is ${G}`,
							),
							G)
						) {
							case C.OnPortForward.OpenBrowserOnce: {
								if (this.m.has(q.localAddress)) break;
								this.m.add(q.localAddress);
							}
							case C.OnPortForward.OpenBrowser: {
								const K = (0, C.$z8)(q.tunnelRemoteHost, q.tunnelRemotePort);
								await d.OpenPortInBrowserAction.run(
									this.r.tunnelModel,
									this.s,
									K,
								);
								break;
							}
							case C.OnPortForward.OpenPreview: {
								const K = (0, C.$z8)(q.tunnelRemoteHost, q.tunnelRemotePort);
								await d.OpenPortInPreviewAction.run(
									this.r.tunnelModel,
									this.s,
									this.t,
									K,
								);
								break;
							}
							case C.OnPortForward.Silent:
								break;
							default: {
								const K = new Date().getTime() - this.c.getTime();
								this.y.trace(
									`ForwardedPorts: (OnAutoForwardedAction) time elapsed since last notification ${K} ms`,
								),
									K > U.f && (await this.I(q));
							}
						}
					}
				}
				hide(H) {
					this.j &&
						(this.j = this.j.filter((q) => !H.includes(q.tunnelRemotePort))),
						this.h && H.indexOf(this.h) >= 0 && this.g?.close();
				}
				async F() {
					if (
						(this.y.trace(
							"ForwardedPorts: (OnAutoForwardedAction) Starting heuristic delay",
						),
						!this.j || this.j.length === 0)
					)
						return;
					this.j = this.j.sort(
						(q, V) => q.tunnelRemotePort - V.tunnelRemotePort,
					);
					const H = this.j.shift();
					return H.tunnelRemotePort % 1e3 === 0
						? (this.y.trace(
								`ForwardedPorts: (OnAutoForwardedAction) Heuristic chose tunnel because % 1000: ${H.tunnelRemotePort}`,
							),
							(this.C = H),
							H)
						: H.tunnelRemotePort < 1e4 && H.tunnelRemotePort !== 9229
							? (this.y.trace(
									`ForwardedPorts: (OnAutoForwardedAction) Heuristic chose tunnel because < 10000: ${H.tunnelRemotePort}`,
								),
								(this.C = H),
								H)
							: (this.y.trace(
									`ForwardedPorts: (OnAutoForwardedAction) Waiting for "better" tunnel than ${H.tunnelRemotePort}`,
								),
								(this.C = void 0),
								new Promise((q) => {
									setTimeout(() => {
										this.C ? q(void 0) : this.j?.includes(H) ? q(H) : q(void 0);
									}, 3e3);
								}));
				}
				async G(H) {
					const V = (
						await this.r.tunnelModel.getAttributes(
							[{ host: H.tunnelRemoteHost, port: H.tunnelRemotePort }],
							!1,
						)
					)?.get(H.tunnelRemotePort)?.label;
					return t.localize(8759, null, V ? ` (${V})` : "", H.tunnelRemotePort);
				}
				H() {
					return t.localize(8760, null, `command:${d.$buc.ID}.focus`);
				}
				async I(H) {
					if (!(await this.w.hadLastFocus())) return;
					this.g?.close();
					let q = await this.G(H);
					const V = [this.L(H)];
					(!s.$r || d.$_tc.getValue(this.z)) && V.push(this.M(H)),
						H.tunnelLocalPort !== H.tunnelRemotePort &&
							this.u.canElevate &&
							this.u.isPortPrivileged(H.tunnelRemotePort) &&
							((q += t.localize(8761, null, H.tunnelRemotePort)),
							V.unshift(this.N(H))),
						H.privacy === l.TunnelPrivacyId.Private &&
							s.$r &&
							this.u.canChangePrivacy &&
							V.push(this.J(H)),
						(q += this.H()),
						(this.g = this.q.prompt(c.default.Info, q, V, {
							neverShowAgain: {
								id: "remote.tunnelsView.autoForwardNeverShow",
								isSecondary: !0,
							},
						})),
						(this.h = H.tunnelRemotePort),
						(this.c = new Date()),
						this.g.onDidClose(() => {
							(this.g = void 0), (this.h = void 0);
						});
				}
				J(H) {
					return {
						label: t.localize(8762, null),
						run: async () => {
							const q = (0, C.$y8)(
								this.r.tunnelModel.forwarded,
								H.tunnelRemoteHost,
								H.tunnelRemotePort,
							);
							return (
								await this.r.close(
									{ host: H.tunnelRemoteHost, port: H.tunnelRemotePort },
									C.TunnelCloseReason.Other,
								),
								this.r.forward({
									remote: {
										host: H.tunnelRemoteHost,
										port: H.tunnelRemotePort,
									},
									local: H.tunnelLocalPort,
									name: q?.name,
									elevateIfNeeded: !0,
									privacy: l.TunnelPrivacyId.Public,
									source: q?.source,
								})
							);
						},
					};
				}
				L(H) {
					const q = (0, C.$z8)(H.tunnelRemoteHost, H.tunnelRemotePort);
					return {
						label: d.OpenPortInBrowserAction.LABEL,
						run: () =>
							d.OpenPortInBrowserAction.run(this.r.tunnelModel, this.s, q),
					};
				}
				M(H) {
					const q = (0, C.$z8)(H.tunnelRemoteHost, H.tunnelRemotePort);
					return {
						label: d.OpenPortInPreviewAction.LABEL,
						run: () =>
							d.OpenPortInPreviewAction.run(
								this.r.tunnelModel,
								this.s,
								this.t,
								q,
							),
					};
				}
				N(H) {
					return {
						label: t.localize(8763, null, H.tunnelRemotePort),
						run: async () => {
							await this.r.close(
								{ host: H.tunnelRemoteHost, port: H.tunnelRemotePort },
								C.TunnelCloseReason.Other,
							);
							const q = await this.r.forward({
								remote: { host: H.tunnelRemoteHost, port: H.tunnelRemotePort },
								local: H.tunnelRemotePort,
								elevateIfNeeded: !0,
								source: C.$w8,
							});
							!q ||
								typeof q == "string" ||
								(this.g?.close(),
								(this.h = q.tunnelRemotePort),
								(this.g = this.q.prompt(
									c.default.Info,
									(await this.G(q)) + this.H(),
									[this.L(q), this.M(H)],
									{
										neverShowAgain: {
											id: "remote.tunnelsView.autoForwardNeverShow",
											isSecondary: !0,
										},
									},
								)),
								this.g.onDidClose(() => {
									(this.g = void 0), (this.h = void 0);
								}));
						},
					};
				}
			}
			class z extends i.$1c {
				constructor(H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
					super(),
						(this.h = H),
						(this.notificationService = q),
						(this.openerService = V),
						(this.externalOpenerService = G),
						(this.j = K),
						(this.m = J),
						(this.q = W),
						(this.tunnelService = X),
						(this.hostService = Y),
						(this.logService = ie),
						(this.contextKeyService = ne),
						(this.privilegedOnly = ee),
						(this.g = new U(q, K, V, G, X, Y, ie, ne)),
						this.D(
							J.onDidChangeConfiguration((_) => {
								_.affectsConfiguration(E.$9pc) && this.r();
							}),
						),
						(this.c = this.D(
							this.j.onEnabledPortsFeatures(() => {
								this.r();
							}),
						)),
						this.r(),
						J.getValue(E.$0pc) === E.$bqc &&
							this.D(
								this.tunnelService.onTunnelClosed((_) => this.g.hide([_.port])),
							);
				}
				r() {
					this.m.getValue(E.$9pc) ? this.s() : this.t();
				}
				s() {
					(!this.f && !this.j.portsFeaturesEnabled) ||
						(this.c?.dispose(),
						(this.f = this.D(new h.$duc(this.h, this.q))),
						this.D(
							this.f.onDidMatchLocalUrl(async (H) => {
								if ((0, C.$y8)(this.j.tunnelModel.detected, H.host, H.port))
									return;
								const q = (await this.j.tunnelModel.getAttributes([H]))?.get(
									H.port,
								);
								if (
									q?.onAutoForward === C.OnPortForward.Ignore ||
									(this.privilegedOnly() &&
										!this.tunnelService.isPortPrivileged(H.port))
								)
									return;
								const V = await this.j.forward(
									{ remote: H, source: C.$w8 },
									q ?? null,
								);
								V && typeof V != "string" && this.g.doAction([V]);
							}),
						));
				}
				t() {
					this.f && (this.f.dispose(), (this.f = void 0));
				}
			}
			class F extends i.$1c {
				constructor(H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
					super(),
						(this.q = H),
						(this.alreadyAutoForwarded = q),
						(this.r = V),
						(this.s = G),
						(this.remoteExplorerService = K),
						(this.notificationService = J),
						(this.openerService = W),
						(this.externalOpenerService = X),
						(this.tunnelService = Y),
						(this.hostService = ie),
						(this.logService = ne),
						(this.contextKeyService = ee),
						(this.f = new Set()),
						(this.g = new Set()),
						(this.j = new Set()),
						(this.h = new U(J, K, W, X, Y, ie, ne, ee)),
						q?.forEach((_) => this.f.add(_)),
						this.t();
				}
				get forwarded() {
					return this.f;
				}
				async t() {
					this.remoteExplorerService.tunnelModel.environmentTunnelsSet ||
						(await new Promise((H) =>
							this.remoteExplorerService.tunnelModel.onEnvironmentTunnelsSet(
								() => H(),
							),
						)),
						this.D(
							this.s.onDidChangeConfiguration(async (H) => {
								H.affectsConfiguration(E.$9pc) && (await this.u());
							}),
						),
						(this.m = this.D(
							this.remoteExplorerService.onEnabledPortsFeatures(async () => {
								await this.u();
							}),
						)),
						this.u();
				}
				async u() {
					this.s.getValue(E.$9pc) ? await this.y() : this.w();
				}
				w() {
					this.c && (this.c.dispose(), (this.c = void 0));
				}
				async y() {
					this.c ||
						!this.remoteExplorerService.portsFeaturesEnabled ||
						(this.m?.dispose(),
						await this.z(),
						this.s.getValue(E.$9pc) &&
							(this.c = this.D(
								this.remoteExplorerService.tunnelModel.onCandidatesChanged(
									this.F,
									this,
								),
							)));
				}
				async z() {
					if (!this.r) {
						this.logService.debug(
							"ForwardedPorts: (ProcForwarding) Not setting initial candidates",
						);
						return;
					}
					let H = this.remoteExplorerService.tunnelModel.candidatesOrUndefined;
					H ||
						(await new Promise((q) =>
							this.remoteExplorerService.tunnelModel.onCandidatesChanged(() =>
								q(),
							),
						),
						(H = this.remoteExplorerService.tunnelModel.candidates));
					for (const q of H) this.j.add((0, C.$z8)(q.host, q.port));
					this.logService.debug(
						`ForwardedPorts: (ProcForwarding) Initial candidates set to ${H.map((q) => q.port).join(", ")}`,
					);
				}
				async C() {
					let H;
					const q = [];
					this.logService.trace(
						`ForwardedPorts: (ProcForwarding) Attempting to forward ${this.remoteExplorerService.tunnelModel.candidates.length} candidates`,
					);
					for (const V of this.remoteExplorerService.tunnelModel.candidates) {
						if (!V.detail) {
							this.logService.trace(
								`ForwardedPorts: (ProcForwarding) Port ${V.port} missing detail`,
							);
							continue;
						}
						H ||
							(H = await this.remoteExplorerService.tunnelModel.getAttributes(
								this.remoteExplorerService.tunnelModel.candidates,
							));
						const G = H?.get(V.port),
							K = (0, C.$z8)(V.host, V.port);
						if (
							(this.j.has(K) && G?.onAutoForward === void 0) ||
							this.g.has(K) ||
							this.f.has(K)
						)
							continue;
						const J = (0, C.$y8)(
							this.remoteExplorerService.tunnelModel.forwarded,
							V.host,
							V.port,
						);
						if (
							(0, C.$y8)(
								this.remoteExplorerService.tunnelModel.detected,
								V.host,
								V.port,
							)
						)
							continue;
						if (G?.onAutoForward === C.OnPortForward.Ignore) {
							this.logService.trace(
								`ForwardedPorts: (ProcForwarding) Port ${V.port} is ignored`,
							);
							continue;
						}
						const W = await this.remoteExplorerService.forward(
							{ remote: V, source: C.$w8 },
							G ?? null,
						);
						!J && W
							? (this.logService.trace(
									`ForwardedPorts: (ProcForwarding) Port ${V.port} has been forwarded`,
								),
								this.f.add(K))
							: W &&
								(this.logService.trace(
									`ForwardedPorts: (ProcForwarding) Port ${V.port} has been notified`,
								),
								this.g.add(K)),
							W && typeof W != "string" && q.push(W);
					}
					if (
						(this.logService.trace(
							`ForwardedPorts: (ProcForwarding) Forwarded ${q.length} candidates`,
						),
						q.length !== 0)
					)
						return q;
				}
				async F(H) {
					const q = [];
					let V;
					if (this.q) {
						V = new Map();
						for (const K of this.remoteExplorerService.tunnelModel.forwarded.entries())
							K[1].source.source === C.TunnelSource.Auto && V.set(K[0], K[1]);
					} else V = new Map(this.f.entries());
					for (const K of H) {
						const J = K[0];
						let W = K[1];
						const X = (0, C.$y8)(V, W.host, W.port);
						X
							? (typeof X == "string"
									? this.f.delete(J)
									: (W = { host: X.remoteHost, port: X.remotePort }),
								await this.remoteExplorerService.close(
									W,
									C.TunnelCloseReason.AutoForwardEnd,
								),
								q.push(W.port))
							: this.g.has(J)
								? (this.g.delete(J), q.push(W.port))
								: this.j.has(J) && this.j.delete(J);
					}
					if (this.q) return;
					q.length > 0 && (await this.h.hide(q));
					const G = await this.C();
					G && (await this.h.doAction(G));
				}
			}
		},
	),
		define(
			de[4029],
			he([
				1, 0, 19, 37, 4, 8, 109, 102, 5, 30, 26, 1056, 854, 239, 55, 60, 112,
				220, 1058, 258, 3849, 53, 175, 34, 244, 3, 94,
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
				l,
				y,
				$,
				v,
				S,
				I,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$juc = void 0),
					(t = mt(t));
				const T = {
					type: "object",
					properties: {
						id: {
							description: (0, w.localize)(2602, null),
							type: "string",
							pattern: "^[a-zA-Z0-9_-]+$",
						},
						title: { description: (0, w.localize)(2603, null), type: "string" },
						icon: { description: (0, w.localize)(2604, null), type: "string" },
					},
					required: ["id", "title", "icon"],
				};
				e.$juc = {
					description: (0, w.localize)(2605, null),
					type: "object",
					properties: {
						activitybar: {
							description: (0, w.localize)(2606, null),
							type: "array",
							items: T,
						},
						panel: {
							description: (0, w.localize)(2607, null),
							type: "array",
							items: T,
						},
					},
				};
				var P;
				(function (z) {
					(z.Tree = "tree"), (z.Webview = "webview");
				})(P || (P = {}));
				var k;
				(function (z) {
					(z.Visible = "visible"),
						(z.Hidden = "hidden"),
						(z.Collapsed = "collapsed");
				})(k || (k = {}));
				const L = {
						type: "object",
						required: ["id", "name"],
						defaultSnippets: [{ body: { id: "${1:id}", name: "${2:name}" } }],
						properties: {
							type: {
								markdownDescription: (0, w.localize)(2608, null),
								type: "string",
								enum: ["tree", "webview"],
								markdownEnumDescriptions: [
									(0, w.localize)(2609, null),
									(0, w.localize)(2610, null),
								],
							},
							id: {
								markdownDescription: (0, w.localize)(2611, null),
								type: "string",
							},
							name: {
								description: (0, w.localize)(2612, null),
								type: "string",
							},
							when: {
								description: (0, w.localize)(2613, null),
								type: "string",
							},
							icon: {
								description: (0, w.localize)(2614, null),
								type: "string",
							},
							contextualTitle: {
								description: (0, w.localize)(2615, null),
								type: "string",
							},
							visibility: {
								description: (0, w.localize)(2616, null),
								type: "string",
								enum: ["visible", "hidden", "collapsed"],
								default: "visible",
								enumDescriptions: [
									(0, w.localize)(2617, null),
									(0, w.localize)(2618, null),
									(0, w.localize)(2619, null),
								],
							},
							initialSize: {
								type: "number",
								description: (0, w.localize)(2620, null),
							},
							accessibilityHelpContent: {
								type: "string",
								markdownDescription: (0, w.localize)(2621, null),
							},
						},
					},
					D = {
						type: "object",
						required: ["id", "name"],
						properties: {
							id: { description: (0, w.localize)(2622, null), type: "string" },
							name: {
								description: (0, w.localize)(2623, null),
								type: "string",
							},
							when: {
								description: (0, w.localize)(2624, null),
								type: "string",
							},
							group: {
								description: (0, w.localize)(2625, null),
								type: "string",
							},
							remoteName: {
								description: (0, w.localize)(2626, null),
								type: ["string", "array"],
								items: { type: "string" },
							},
						},
					},
					M = {
						description: (0, w.localize)(2627, null),
						type: "object",
						properties: {
							explorer: {
								description: (0, w.localize)(2628, null),
								type: "array",
								items: L,
								default: [],
							},
							debug: {
								description: (0, w.localize)(2629, null),
								type: "array",
								items: L,
								default: [],
							},
							scm: {
								description: (0, w.localize)(2630, null),
								type: "array",
								items: L,
								default: [],
							},
							test: {
								description: (0, w.localize)(2631, null),
								type: "array",
								items: L,
								default: [],
							},
							remote: {
								description: (0, w.localize)(2632, null),
								type: "array",
								items: D,
								default: [],
							},
						},
						additionalProperties: {
							description: (0, w.localize)(2633, null),
							type: "array",
							items: L,
							default: [],
						},
					},
					N = y.$n2.registerExtensionPoint({
						extensionPoint: "viewsContainers",
						jsonSchema: e.$juc,
					}),
					A = y.$n2.registerExtensionPoint({
						extensionPoint: "views",
						deps: [N],
						jsonSchema: M,
						activationEventsGenerator: (z, F) => {
							for (const x of z)
								for (const H of Object.values(x))
									for (const q of H) q.id && F.push(`onView:${q.id}`);
						},
					}),
					R = 7;
				let O = class {
					static {
						this.ID = "workbench.contrib.viewsExtensionHandler";
					}
					constructor(F, x) {
						(this.f = F),
							(this.g = x),
							(this.c = r.$Io.as(g.Extensions.ViewContainersRegistry)),
							(this.d = r.$Io.as(g.Extensions.ViewsRegistry)),
							this.h(),
							this.o();
					}
					h() {
						N.setHandler((F, { added: x, removed: H }) => {
							H.length && this.j(H), x.length && this.i(x, this.c.all);
						});
					}
					i(F, x) {
						const H = r.$Io.as(g.Extensions.ViewContainersRegistry);
						let q =
								R +
								H.all.filter(
									(G) =>
										!!G.extensionId &&
										H.getViewContainerLocation(G) ===
											g.ViewContainerLocation.Sidebar,
								).length,
							V =
								5 +
								H.all.filter(
									(G) =>
										!!G.extensionId &&
										H.getViewContainerLocation(G) ===
											g.ViewContainerLocation.Panel,
								).length +
								1;
						for (const { value: G, collector: K, description: J } of F)
							Object.entries(G).forEach(([W, X]) => {
								if (this.k(X, K))
									switch (W) {
										case "activitybar":
											q = this.l(X, J, q, x, g.ViewContainerLocation.Sidebar);
											break;
										case "panel":
											V = this.l(X, J, V, x, g.ViewContainerLocation.Panel);
											break;
									}
							});
					}
					j(F) {
						const x = r.$Io.as(g.Extensions.ViewContainersRegistry),
							H = F.reduce(
								(q, V) => (q.add(V.description.identifier), q),
								new C.$Hn(),
							);
						for (const q of x.all)
							if (q.extensionId && H.has(q.extensionId)) {
								const V = this.d.getViews(q);
								V.length && this.d.moveViews(V, this.r()), this.n(q);
							}
					}
					k(F, x) {
						if (!Array.isArray(F))
							return x.error((0, w.localize)(2634, null)), !1;
						for (const H of F) {
							if (typeof H.id != "string" && (0, i.$jf)(H.id))
								return x.error((0, w.localize)(2635, null, "id")), !1;
							if (!/^[a-z0-9_-]+$/i.test(H.id))
								return x.error((0, w.localize)(2636, null, "id")), !1;
							if (typeof H.title != "string")
								return x.error((0, w.localize)(2637, null, "title")), !1;
							if (typeof H.icon != "string")
								return x.error((0, w.localize)(2638, null, "icon")), !1;
							if ((0, i.$jf)(H.title))
								return x.warn((0, w.localize)(2639, null, "title")), !0;
						}
						return !0;
					}
					l(F, x, H, q, V) {
						return (
							F.forEach((G) => {
								const J =
										u.ThemeIcon.fromString(G.icon) ||
										t.$nh(x.extensionLocation, G.icon),
									W = `workbench.view.extension.${G.id}`,
									X = G.title || W,
									Y = this.m(W, X, J, H++, x.identifier, V);
								if (q.length) {
									const ie = [];
									for (const ne of q)
										Y !== ne &&
											ie.push(
												...this.d
													.getViews(ne)
													.filter((ee) => ee.originalContainerId === G.id),
											);
									ie.length && this.d.moveViews(ie, Y);
								}
							}),
							H
						);
					}
					m(F, x, H, q, V, G) {
						let K = this.c.get(F);
						return (
							K ||
								(K = this.c.registerViewContainer(
									{
										id: F,
										title: { value: x, original: x },
										extensionId: V,
										ctorDescriptor: new d.$Ji(c.$ZSb, [
											F,
											{ mergeViewWithContainerWhenSingleView: !0 },
										]),
										hideIfEmpty: !0,
										order: q,
										icon: H,
									},
									G,
								)),
							K
						);
					}
					n(F) {
						this.c.deregisterViewContainer(F),
							r.$Io.as(a.$4Sb.Viewlets).deregisterPaneComposite(F.id);
					}
					o() {
						A.setHandler((F, { added: x, removed: H }) => {
							H.length && this.s(H), x.length && this.p(x);
						});
					}
					p(F) {
						const x = new Set(),
							H = [];
						for (const q of F) {
							const { value: V, collector: G } = q;
							Object.entries(V).forEach(([K, J]) => {
								if (!this.u(J, G)) return;
								if (
									K === "remote" &&
									!(0, l.$t2)(q.description, "contribViewsRemote")
								) {
									G.warn((0, w.localize)(2640, null, K));
									return;
								}
								const W = this.w(K);
								W || G.warn((0, w.localize)(2641, null, K));
								const X = W || this.r(),
									Y = [];
								for (let ie = 0; ie < J.length; ie++) {
									const ne = J[ie];
									if (x.has(ne.id)) {
										G.error((0, w.localize)(2642, null, ne.id));
										continue;
									}
									if (this.d.getView(ne.id) !== null) {
										G.error((0, w.localize)(2643, null, ne.id));
										continue;
									}
									const ee = C.$Gn.equals(
										q.description.identifier,
										X.extensionId,
									)
										? ie + 1
										: X.viewOrderDelegate
											? X.viewOrderDelegate.getOrder(ne.group)
											: void 0;
									let _;
									typeof ne.icon == "string" &&
										(_ =
											u.ThemeIcon.fromString(ne.icon) ||
											t.$nh(q.description.extensionLocation, ne.icon));
									const te = this.t(ne.visibility),
										Q = this.q(ne.type);
									if (!Q) {
										G.error((0, w.localize)(2644, null, ne.type));
										continue;
									}
									let Z;
									typeof ne.initialSize == "number" &&
										(X.extensionId?.value === q.description.identifier.value
											? (Z = ne.initialSize)
											: this.g.warn(
													`${q.description.identifier.value} tried to set the view size of ${ne.id} but it was ignored because the view container does not belong to it.`,
												));
									let se;
									(0, l.$t2)(
										q.description,
										"contribAccessibilityHelpContent",
									) &&
										ne.accessibilityHelpContent &&
										(se = new I.$cl(ne.accessibilityHelpContent));
									const re = {
										type: Q,
										ctorDescriptor:
											Q === P.Tree ? new d.$Ji(h.$Ptc) : new d.$Ji(s.$iuc),
										id: ne.id,
										name: { value: ne.name, original: ne.name },
										when: E.$Kj.deserialize(ne.when),
										containerIcon: _ || W?.icon,
										containerTitle:
											ne.contextualTitle ||
											(W &&
												(typeof W.title == "string" ? W.title : W.title.value)),
										canToggleVisibility: !0,
										canMoveView: W?.id !== f.$euc,
										treeView:
											Q === P.Tree
												? this.f.createInstance(
														h.$Rtc,
														ne.id,
														ne.name,
														q.description.identifier.value,
													)
												: void 0,
										collapsed: this.x(X) || te === k.Collapsed,
										order: ee,
										extensionId: q.description.identifier,
										originalContainerId: K,
										group: ne.group,
										remoteAuthority: ne.remoteName || ne.remoteAuthority,
										virtualWorkspace: ne.virtualWorkspace,
										hideByDefault: te === k.Hidden,
										workspace: W?.id === f.$euc ? !0 : void 0,
										weight: Z,
										accessibilityHelpContent: se,
									};
									x.add(re.id), Y.push(re);
								}
								H.push({ viewContainer: X, views: Y });
							});
						}
						this.d.registerViews2(H);
					}
					q(F) {
						if (F === P.Webview) return P.Webview;
						if (!F || F === P.Tree) return P.Tree;
					}
					r() {
						return this.c.get(o.$vUb);
					}
					s(F) {
						const x = F.reduce(
							(H, q) => (H.add(q.description.identifier), H),
							new C.$Hn(),
						);
						for (const H of this.c.all) {
							const q = this.d
								.getViews(H)
								.filter((V) => V.extensionId && x.has(V.extensionId));
							if (q.length) {
								this.d.deregisterViews(q, H);
								for (const V of q) {
									const G = V;
									G.treeView && G.treeView.dispose();
								}
							}
						}
					}
					t(F) {
						if (Object.values(k).includes(F)) return F;
					}
					u(F, x) {
						if (!Array.isArray(F))
							return x.error((0, w.localize)(2645, null)), !1;
						for (const H of F) {
							if (typeof H.id != "string")
								return x.error((0, w.localize)(2646, null, "id")), !1;
							if (typeof H.name != "string")
								return x.error((0, w.localize)(2647, null, "name")), !1;
							if (H.when && typeof H.when != "string")
								return x.error((0, w.localize)(2648, null, "when")), !1;
							if (H.icon && typeof H.icon != "string")
								return x.error((0, w.localize)(2649, null, "icon")), !1;
							if (H.contextualTitle && typeof H.contextualTitle != "string")
								return (
									x.error((0, w.localize)(2650, null, "contextualTitle")), !1
								);
							if (H.visibility && !this.t(H.visibility))
								return (
									x.error(
										(0, w.localize)(
											2651,
											null,
											"visibility",
											Object.values(k).join(", "),
										),
									),
									!1
								);
						}
						return !0;
					}
					w(F) {
						switch (F) {
							case "explorer":
								return this.c.get(o.$vUb);
							case "debug":
								return this.c.get(p.$Q4);
							case "scm":
								return this.c.get(b.$$6);
							case "remote":
								return this.c.get(f.$euc);
							default:
								return this.c.get(`workbench.view.extension.${F}`);
						}
					}
					x(F) {
						switch (F.id) {
							case o.$vUb:
							case b.$$6:
							case p.$Q4:
								return !0;
						}
						return !1;
					}
				};
				O = Ne([j(0, m.$Li), j(1, $.$ik)], O);
				class B extends S.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(F) {
						return !!F.contributes?.viewsContainers;
					}
					render(F) {
						const x = F.contributes?.viewsContainers || {},
							H = Object.keys(x).reduce((G, K) => {
								const J = x[K];
								return G.push(...J.map((W) => ({ ...W, location: K }))), G;
							}, []);
						if (!H.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const q = [
								(0, w.localize)(2652, null),
								(0, w.localize)(2653, null),
								(0, w.localize)(2654, null),
							],
							V = H.sort((G, K) => G.id.localeCompare(K.id)).map((G) => [
								G.id,
								G.title,
								G.location,
							]);
						return { data: { headers: q, rows: V }, dispose: () => {} };
					}
				}
				class U extends S.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(F) {
						return !!F.contributes?.views;
					}
					render(F) {
						const x = F.contributes?.views || {},
							H = Object.keys(x).reduce((G, K) => {
								const J = x[K];
								return G.push(...J.map((W) => ({ ...W, location: K }))), G;
							}, []);
						if (!H.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const q = [
								(0, w.localize)(2655, null),
								(0, w.localize)(2656, null),
								(0, w.localize)(2657, null),
							],
							V = H.sort((G, K) => G.id.localeCompare(K.id)).map((G) => [
								G.id,
								G.name,
								G.location,
							]);
						return { data: { headers: q, rows: V }, dispose: () => {} };
					}
				}
				r.$Io
					.as(v.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "viewsContainers",
						label: (0, w.localize)(2658, null),
						access: { canToggle: !1 },
						renderer: new d.$Ji(B),
					}),
					r.$Io
						.as(v.Extensions.ExtensionFeaturesRegistry)
						.registerExtensionFeature({
							id: "views",
							label: (0, w.localize)(2659, null),
							access: { canToggle: !1 },
							renderer: new d.$Ji(U),
						}),
					(0, n.$s6)(O.ID, O, n.WorkbenchPhase.BlockStartup);
			},
		),
		define(
			de[4030],
			he([1, 0, 4, 519, 28, 78, 21, 8, 11, 1058, 349, 25, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rXc = e.$qXc = void 0),
					(t = mt(t)),
					(e.$qXc = new d.$5j("selectedRemoteInExplorer", ""));
				let c = class extends h.$1c {
					constructor(g, p, o, f, b) {
						super(),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.b = this.D(new h.$0c())),
							(this.c = e.$qXc.bindTo(g)),
							(this.a = m.$XX.for("workbench.remote.menu.switchRemoteMenu")),
							this.D(
								m.$ZX.appendMenuItem(m.$XX.ViewContainerTitle, {
									submenu: this.a,
									title: t.localize(8725, null),
									group: "navigation",
									when: d.$Kj.equals("viewContainer", r.$euc),
									order: 1,
									isSelection: !0,
								}),
							),
							this.D(
								p.onDidChangeTargetType((s) => {
									this.n(s);
								}),
							);
					}
					setSelectionForConnection() {
						let g = !1;
						if (this.b.size > 0) {
							let p;
							const o = this.h.remoteAuthority;
							let f;
							o || (f = (0, u.$E8)(this.m.getWorkspace())?.scheme), (g = !0);
							const b = o
								? [o.split("+")[0]]
								: f
									? [f]
									: (this.j.get(i.$6pc, C.StorageScope.WORKSPACE)?.split(",") ??
										this.j.get(i.$6pc, C.StorageScope.PROFILE)?.split(","));
							b !== void 0 && (p = this.q(b)), p && this.n(p);
						}
						return g;
					}
					n(g) {
						this.c.set(g[0]), (this.g.targetType = g);
					}
					q(g) {
						let p;
						for (const o of this.b)
							for (const f of o[1].authority)
								for (const b of g)
									if (f === b) {
										p = o[1].authority;
										break;
									} else if (o[1].virtualWorkspace === b) {
										p = o[1].authority;
										break;
									}
						return p;
					}
					removeOptionItems(g) {
						for (const p of g)
							if (
								p.group &&
								p.group.startsWith("targets") &&
								p.remoteAuthority &&
								(!p.when || this.f.contextMatchesRules(p.when))
							) {
								const o = (0, w.$mg)(p.remoteAuthority)
									? p.remoteAuthority
									: [p.remoteAuthority];
								this.b.deleteAndDispose(o[0]);
							}
					}
					createOptionItems(g) {
						const p = this.b.size;
						for (const o of g)
							if (
								o.group &&
								o.group.startsWith("targets") &&
								o.remoteAuthority &&
								(!o.when || this.f.contextMatchesRules(o.when))
							) {
								const f = o.name,
									b = (0, w.$mg)(o.remoteAuthority)
										? o.remoteAuthority
										: [o.remoteAuthority];
								if (this.b.has(b[0])) continue;
								const s = this,
									l = (0, m.$4X)(
										class extends m.$3X {
											constructor() {
												super({
													id: `workbench.action.remoteExplorer.show.${b[0]}`,
													title: f,
													toggled: e.$qXc.isEqualTo(b[0]),
													menu: { id: s.a },
												});
											}
											async run() {
												s.n(b);
											}
										},
									);
								this.b.set(b[0], {
									text: f.value,
									authority: b,
									virtualWorkspace: o.virtualWorkspace,
									dispose: () => l.dispose(),
								});
							}
						this.b.size > p && this.setSelectionForConnection();
					}
				};
				(e.$rXc = c),
					(e.$rXc = c =
						Ne(
							[
								j(0, d.$6j),
								j(1, i.$5pc),
								j(2, E.$r8),
								j(3, C.$lq),
								j(4, a.$Vi),
							],
							c,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[4031],
		he([
			1, 0, 4, 7, 9, 96, 32, 25, 21, 10, 5, 35, 26, 49, 53, 1941, 1058, 8, 60,
			30, 41, 63, 31, 84, 143, 57, 604, 111, 571, 3, 4030, 28, 519, 78, 146, 93,
			39, 6, 102, 1256, 34, 520, 438, 349, 3850, 23, 75, 72, 2482,
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
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
			J,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$FXc = e.$EXc = void 0),
				(t = mt(t)),
				(i = mt(i)),
				(T = xi(T)),
				(z = mt(z));
			class W {
				getHeight(ue) {
					return 22;
				}
				getTemplateId(ue) {
					return "HelpItemTemplate";
				}
			}
			class X {
				constructor() {
					this.templateId = "HelpItemTemplate";
				}
				renderTemplate(ue) {
					ue.classList.add("remote-help-tree-node-item");
					const fe = i.$fhb(ue, i.$(".remote-help-tree-node-item-icon"));
					return { parent: ue, icon: fe };
				}
				renderElement(ue, fe, me, ve) {
					const ge = me.parent;
					i.$fhb(ge, me.icon), me.icon.classList.add(...ue.element.iconClasses);
					const be = i.$fhb(ge, i.$(".help-item-label"));
					be.innerText = ue.element.label;
				}
				disposeTemplate(ue) {}
			}
			class Y {
				hasChildren(ue) {
					return ue instanceof ie;
				}
				getChildren(ue) {
					return ue instanceof ie && ue.items ? ue.items : [];
				}
			}
			class ie {
				constructor(ue, fe, me, ve, ge, be, Ce, Le) {
					(this.a = ue),
						(this.b = fe),
						(this.c = me),
						(this.d = ve),
						(this.f = ge),
						(this.g = be),
						(this.h = Ce),
						(this.j = Le),
						this.l(),
						ue.onDidChangeHelpInformation(() => this.l());
				}
				k(ue, fe) {
					return new ne(
						this.d,
						this.j,
						ue.extensionDescription,
						typeof ue.remoteName == "string" ? [ue.remoteName] : ue.remoteName,
						ue.virtualWorkspace,
						ue[fe],
					);
				}
				l() {
					const ue = [],
						fe = this.a.helpInformation.filter((ge) => ge.getStarted);
					if (fe.length) {
						const ge = fe.map((Ce) => this.k(Ce, "getStarted")),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Utc) ??
								new _(
									z.$Utc,
									t.localize(8726, null),
									ge,
									this.c,
									this.g,
									this.b,
									this.f,
									this.h,
									this.d,
								);
						(be.values = ge), ue.push(be);
					}
					const me = this.a.helpInformation.filter((ge) => ge.documentation);
					if (me.length) {
						const ge = me.map((Ce) => this.k(Ce, "documentation")),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Vtc) ??
								new te(
									z.$Vtc,
									t.localize(8727, null),
									ge,
									this.c,
									this.g,
									this.b,
									this.f,
									this.h,
								);
						(be.values = ge), ue.push(be);
					}
					const ve = this.a.helpInformation.filter((ge) => ge.issues);
					if (ve.length) {
						const ge = ve.map((Ce) => this.k(Ce, "issues")),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Xtc) ??
								new te(
									z.$Xtc,
									t.localize(8728, null),
									ge,
									this.c,
									this.g,
									this.b,
									this.f,
									this.h,
								);
						(be.values = ge), ue.push(be);
					}
					if (ue.length) {
						const ge = this.a.helpInformation.map((Ce) =>
								this.k(Ce, "reportIssue"),
							),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Ytc) ??
								new Q(
									z.$Ytc,
									t.localize(8729, null),
									ge,
									this.c,
									this.g,
									this.d,
									this.b,
									this.f,
									this.h,
								);
						(be.values = ge), ue.push(be);
					}
					ue.length && (this.items = ue);
				}
			}
			class ne {
				constructor(ue, fe, me, ve, ge, be) {
					(this.c = ue),
						(this.d = fe),
						(this.extensionDescription = me),
						(this.remoteAuthority = ve),
						(this.virtualWorkspace = ge),
						(this.f = be);
				}
				get description() {
					return this.g().then(() => this.b);
				}
				get url() {
					return this.g();
				}
				async g() {
					if (this.a === void 0) {
						if (typeof this.f == "string")
							if (w.URI.parse(this.f).authority) this.a = this.f;
							else {
								const fe = this.c
										.executeCommand(this.f)
										.then((ve) => ((this.a = ve), this.a)),
									me = new Promise((ve) => setTimeout(() => ve(""), 500));
								this.a = await Promise.race([fe, me]);
							}
						else if (this.f?.id)
							try {
								const ue = `${this.extensionDescription.id}#${this.f.id}`,
									fe = await this.d.getWalkthrough(ue);
								(this.b = fe.title), (this.a = ue);
							} catch {}
					}
					return this.a === void 0 && (this.a = ""), this.a;
				}
			}
			class ee {
				constructor(ue, fe, me, ve, ge, be, Ce) {
					(this.icon = ue),
						(this.label = fe),
						(this.values = me),
						(this.a = ve),
						(this.b = ge),
						(this.c = be),
						(this.d = Ce),
						(this.iconClasses = []),
						this.iconClasses.push(...h.ThemeIcon.asClassNameArray(ue)),
						this.iconClasses.push("remote-help-tree-node-item-icon");
				}
				async f() {
					return (
						await Promise.all(
							this.values.map(async (ue) => ({
								label:
									ue.extensionDescription.displayName ||
									ue.extensionDescription.identifier.value,
								description: (await ue.description) ?? (await ue.url),
								url: await ue.url,
								extensionDescription: ue.extensionDescription,
							})),
						)
					).filter((ue) => ue.description);
				}
				async handleClick() {
					const ue = this.b.remoteAuthority;
					if (ue) {
						for (let fe = 0; fe < this.c.targetType.length; fe++)
							if (ue.startsWith(this.c.targetType[fe])) {
								for (const me of this.values)
									if (me.remoteAuthority) {
										for (const ve of me.remoteAuthority)
											if (ue.startsWith(ve)) {
												await this.g(me.extensionDescription, await me.url);
												return;
											}
									}
							}
					} else {
						const fe = (0, q.$E8)(this.d.getWorkspace())?.scheme;
						if (fe) {
							for (let me = 0; me < this.c.targetType.length; me++)
								for (const ve of this.values)
									if (ve.virtualWorkspace && ve.remoteAuthority) {
										for (const ge of ve.remoteAuthority)
											if (
												this.c.targetType[me].startsWith(ge) &&
												fe.startsWith(ve.virtualWorkspace)
											) {
												await this.g(ve.extensionDescription, await ve.url);
												return;
											}
									}
						}
					}
					if (this.values.length > 1) {
						const fe = await this.f();
						if (fe.length) {
							const me = await this.a.pick(fe, {
								placeHolder: t.localize(8730, null),
							});
							me && (await this.g(me.extensionDescription, me.url));
						}
					} else
						await this.g(
							this.values[0].extensionDescription,
							await this.values[0].url,
						);
				}
			}
			class _ extends ee {
				constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe) {
					super(ue, fe, me, ve, ge, Ce, Le), (this.h = be), (this.j = Fe);
				}
				async g(ue, fe) {
					if (
						[G.Schemas.http, G.Schemas.https].includes(w.URI.parse(fe).scheme)
					) {
						this.h.open(fe, { allowCommands: !0 });
						return;
					}
					this.j.executeCommand("workbench.action.openWalkthrough", fe);
				}
			}
			class te extends ee {
				constructor(ue, fe, me, ve, ge, be, Ce, Le) {
					super(ue, fe, me, ve, ge, Ce, Le), (this.h = be);
				}
				async g(ue, fe) {
					await this.h.open(w.URI.parse(fe), { allowCommands: !0 });
				}
			}
			class Q extends ee {
				constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe) {
					super(ue, fe, me, ve, ge, Le, Fe), (this.h = be), (this.j = Ce);
				}
				async f() {
					return Promise.all(
						this.values.map(async (ue) => ({
							label:
								ue.extensionDescription.displayName ||
								ue.extensionDescription.identifier.value,
							description: "",
							url: await ue.url,
							extensionDescription: ue.extensionDescription,
						})),
					);
				}
				async g(ue, fe) {
					fe
						? await this.j.open(w.URI.parse(fe))
						: await this.h.executeCommand(
								"workbench.action.openIssueReporter",
								[ue.identifier.value],
							);
				}
			}
			let Z = class extends A.$TMb {
				static {
					this.ID = "~remote.helpPanel";
				}
				static {
					this.TITLE = t.localize2(8741, "Help and feedback");
				}
				constructor(
					ue,
					fe,
					me,
					ve,
					ge,
					be,
					Ce,
					Le,
					Fe,
					Oe,
					xe,
					He,
					Ke,
					Je,
					Te,
					Ee,
					Ie,
					Be,
				) {
					super(fe, me, ve, be, ge, Le, Ce, Fe, Je, Te, Ee),
						(this.b = ue),
						(this.c = Oe),
						(this.f = xe),
						(this.g = He),
						(this.h = Ke),
						(this.j = Ie),
						(this.m = Be);
				}
				W(ue) {
					super.W(ue), ue.classList.add("remote-help");
					const fe = document.createElement("div");
					fe.classList.add("remote-help-content"),
						ue.appendChild(fe),
						(this.a = this.Db.createInstance(
							R.$FMb,
							"RemoteHelp",
							fe,
							new W(),
							[new X()],
							new Y(),
							{
								accessibilityProvider: {
									getAriaLabel: (ve) => ve.label,
									getWidgetAriaLabel: () => t.localize(8731, null),
								},
							},
						));
					const me = new ie(
						this.b,
						this.Eb,
						this.c,
						this.f,
						this.g,
						this.h,
						this.j,
						this.m,
					);
					this.a.setInput(me),
						this.D(
							B.Event.debounce(
								this.a.onDidOpen,
								(ve, ge) => ge,
								75,
								!0,
							)((ve) => {
								ve.element?.handleClick();
							}),
						);
				}
				X(ue, fe) {
					super.X(ue, fe), this.a.layout(ue, fe);
				}
			};
			Z = Ne(
				[
					j(2, O.$uZ),
					j(3, c.$Xxb),
					j(4, o.$6j),
					j(5, r.$gj),
					j(6, u.$Li),
					j(7, f.$K1),
					j(8, s.$7rb),
					j(9, l.$DJ),
					j(10, y.$ek),
					j(11, M.$5pc),
					j(12, N.$r8),
					j(13, a.$iP),
					j(14, C.$km),
					j(15, J.$Uyb),
					j(16, d.$Vi),
					j(17, V.$yXc),
				],
				Z,
			);
			class se {
				constructor(ue) {
					(this.id = Z.ID),
						(this.name = Z.TITLE),
						(this.canToggleVisibility = !0),
						(this.hideByDefault = !1),
						(this.group = "help@50"),
						(this.order = -10),
						(this.ctorDescriptor = new U.$Ji(Z, [ue]));
				}
			}
			let re = class extends g.$XSb {
				constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
					super(
						p.$euc,
						Oe.onDidChangeTargetType,
						ge,
						ue,
						fe,
						ve,
						be,
						Ce,
						Le,
						Fe,
						me,
						xe,
					),
						(this.Mb = Oe),
						(this.Ib = new se(this)),
						(this.helpInformation = []),
						(this.Jb = new B.$re()),
						(this.onDidChangeHelpInformation = this.Jb.event),
						(this.Kb = !1),
						this.Bb([this.Ib]),
						this.D((this.Lb = this.bb.createInstance(L.$rXc))),
						this.Mb.onDidChangeHelpInformation((Ke) => {
							this.Nb(Ke);
						}),
						this.Nb(this.Mb.helpInformation);
					const He = b.$Io.as(f.Extensions.ViewsRegistry);
					this.Lb.createOptionItems(He.getViews(this.viewContainer)),
						this.D(
							He.onViewsRegistered((Ke) => {
								const Je = [];
								for (const Te of Ke)
									Te.viewContainer.id === p.$euc && Je.push(...Te.views);
								Je.length > 0 && this.Lb.createOptionItems(Je);
							}),
						),
						this.D(
							He.onViewsDeregistered((Ke) => {
								Ke.viewContainer.id === p.$euc &&
									this.Lb.removeOptionItems(Ke.views);
							}),
						);
				}
				Nb(ue) {
					const fe = [];
					for (const ve of ue) this.Ob(ve, fe);
					(this.helpInformation = fe), this.Jb.fire();
					const me = b.$Io.as(f.Extensions.ViewsRegistry);
					this.helpInformation.length && !this.Kb
						? (me.getView(this.Ib.id) ||
								me.registerViews([this.Ib], this.viewContainer),
							(this.Kb = !0))
						: this.Kb &&
							(me.deregisterViews([this.Ib], this.viewContainer),
							(this.Kb = !1));
				}
				Ob(ue, fe) {
					(0, n.$t2)(ue.description, "contribRemoteHelp") &&
						((!ue.value.documentation &&
							!ue.value.getStarted &&
							!ue.value.issues) ||
							fe.push({
								extensionDescription: ue.description,
								getStarted: ue.value.getStarted,
								documentation: ue.value.documentation,
								reportIssue: ue.value.reportIssue,
								issues: ue.value.issues,
								remoteName: ue.value.remoteName,
								virtualWorkspace: ue.value.virtualWorkspace,
							}));
				}
				Cb(ue) {
					return (0, D.$mg)(ue.remoteAuthority)
						? ue.remoteAuthority[0]
						: ue.remoteAuthority;
				}
				Db(ue) {
					this.Mb.targetType = (0, D.$mg)(ue.remoteAuthority)
						? ue.remoteAuthority
						: [ue.remoteAuthority];
				}
				getTitle() {
					return t.localize(8732, null);
				}
			};
			(re = Ne(
				[
					j(0, E.$mEb),
					j(1, C.$km),
					j(2, d.$Vi),
					j(3, m.$lq),
					j(4, r.$gj),
					j(5, u.$Li),
					j(6, a.$iP),
					j(7, c.$Xxb),
					j(8, n.$q2),
					j(9, M.$5pc),
					j(10, f.$K1),
				],
				re,
			)),
				b.$Io.as(f.Extensions.ViewContainersRegistry).registerViewContainer(
					{
						id: p.$euc,
						title: t.localize2(8742, "Remote Explorer"),
						ctorDescriptor: new U.$Ji(re),
						hideIfEmpty: !0,
						viewOrderDelegate: {
							getOrder: (ye) => {
								if (!ye) return;
								let ue = /^targets@(\d+)$/.exec(ye);
								if (ue) return -1e3;
								if (((ue = /^details(@(\d+))?$/.exec(ye)), ue))
									return -500 + Number(ue[2]);
								if (((ue = /^help(@(\d+))?$/.exec(ye)), ue)) return -10;
							},
						},
						icon: z.$Ztc,
						order: 4,
					},
					f.ViewContainerLocation.Sidebar,
				);
			let le = class {
				constructor(ue, fe) {
					ue.getEnvironment().then((me) => {
						me && fe.setPerformanceMarks("server", me.marks);
					});
				}
			};
			(e.$EXc = le), (e.$EXc = le = Ne([j(0, v.$$m), j(1, x.$Xnc)], le));
			class oe {
				get lastReport() {
					return this.b;
				}
				constructor(ue, fe, me, ve, ge) {
					(this.location = fe),
						(this.a = !1),
						(this.b = me),
						(this.c = null),
						(this.d = null),
						(this.f = null);
					const be = new Promise((Ce) => (this.c = Ce));
					ue.withProgress(
						{ location: fe, buttons: ve },
						(Ce) => (this.a || (this.d = Ce), be),
						(Ce) => ge(Ce, this.b),
					),
						this.b && this.report();
				}
				dispose() {
					(this.a = !0),
						this.c && (this.c(), (this.c = null)),
						(this.d = null),
						this.f && (this.f.dispose(), (this.f = null));
				}
				report(ue) {
					ue && (this.b = ue),
						this.b && this.d && this.d.report({ message: this.b });
				}
				startTimer(ue) {
					this.stopTimer(), (this.f = new ae(this, ue));
				}
				stopTimer() {
					this.f && (this.f.dispose(), (this.f = null));
				}
			}
			class ae {
				constructor(ue, fe) {
					(this.a = ue),
						(this.b = fe),
						(this.c = i.$igb(K.$Bfb, () => this.d(), 1e3)),
						this.d();
				}
				dispose() {
					this.c.dispose();
				}
				d() {
					const ue = this.b - Date.now();
					if (ue < 0) return;
					const fe = Math.ceil(ue / 1e3);
					fe === 1
						? this.a.report(t.localize(8733, null, fe))
						: this.a.report(t.localize(8734, null, fe));
				}
			}
			const pe = 40 * 1e3;
			let $e = class extends k.$1c {
				constructor(ue, fe, me, ve, ge, be, Ce, Le) {
					super(), (this.a = !1);
					const Fe = ue.getConnection();
					if (Fe) {
						let Je = function (Ue, qe, Ae = null) {
								return (
									xe && (xe.dispose(), (xe = null)),
									Ue ||
										(Ue = Oe
											? $.ProgressLocation.Notification
											: $.ProgressLocation.Dialog),
									new oe(
										fe,
										Ue,
										Ae,
										qe.map((Me) => Me.label),
										(Me, De) => {
											typeof Me < "u" && qe[Me]
												? qe[Me].callback()
												: Ue === $.ProgressLocation.Dialog
													? (xe = Je($.ProgressLocation.Notification, qe, De))
													: Te();
										},
									)
								);
							},
							Te = function () {
								xe && (xe.dispose(), (xe = null));
							},
							Oe = !1;
						this.D(ge.onShow(() => (Oe = !0))),
							this.D(ge.onHide(() => (Oe = !1)));
						let xe = null,
							He = null,
							Ke = null,
							Ee = "",
							Ie = 0,
							Be = 0;
						const Se = {
								label: t.localize(8735, null),
								callback: () => {
									He?.skipWait();
								},
							},
							ke = {
								label: t.localize(8736, null),
								callback: () => {
									Le.publicLog2("remoteReconnectionReload", {
										remoteName: (0, H.$xn)(Ce.remoteAuthority),
										reconnectionToken: Ee,
										millisSinceLastIncomingData: Date.now() - Ie,
										attempt: Be,
									}),
										ve.executeCommand(P.$Zqc.ID);
								},
							};
						Fe.onDidStateChange((Ue) => {
							switch (
								(xe?.stopTimer(), Ke && (Ke.dispose(), (Ke = null)), Ue.type)
							) {
								case I.PersistentConnectionEventType.ConnectionLost:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = 0),
										Le.publicLog2("remoteConnectionLost", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
										}),
										(xe || Ue.millisSinceLastIncomingData > pe) &&
											(xe || (xe = Je(null, [Se, ke])),
											xe.report(t.localize(8737, null)));
									break;
								case I.PersistentConnectionEventType.ReconnectionWait:
									xe &&
										((He = Ue),
										(xe = Je(null, [Se, ke])),
										xe.startTimer(Date.now() + 1e3 * Ue.durationSeconds));
									break;
								case I.PersistentConnectionEventType.ReconnectionRunning:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = Ue.attempt),
										Le.publicLog2("remoteReconnectionRunning", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
											millisSinceLastIncomingData:
												Ue.millisSinceLastIncomingData,
											attempt: Ue.attempt,
										}),
										(xe || Ue.millisSinceLastIncomingData > pe) &&
											((xe = Je(null, [ke])),
											xe.report(t.localize(8738, null)),
											(Ke = ge.onShow(() => {
												xe &&
													xe.location === $.ProgressLocation.Dialog &&
													(xe = Je(
														$.ProgressLocation.Notification,
														[ke],
														xe.lastReport,
													));
											})));
									break;
								case I.PersistentConnectionEventType
									.ReconnectionPermanentFailure:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = Ue.attempt),
										Le.publicLog2("remoteReconnectionPermanentFailure", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
											millisSinceLastIncomingData:
												Ue.millisSinceLastIncomingData,
											attempt: Ue.attempt,
											handled: Ue.handled,
										}),
										Te(),
										Ue.handled
											? be.info(
													"Error handled: Not showing a notification for the error.",
												)
											: this.a ||
												((this.a = !0),
												me
													.confirm({
														type: T.default.Error,
														message: t.localize(8739, null),
														primaryButton: t.localize(8740, null),
													})
													.then((qe) => {
														qe.confirmed && ve.executeCommand(P.$Zqc.ID);
													}));
									break;
								case I.PersistentConnectionEventType.ConnectionGain:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = Ue.attempt),
										Le.publicLog2("remoteConnectionGain", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
											millisSinceLastIncomingData:
												Ue.millisSinceLastIncomingData,
											attempt: Ue.attempt,
										}),
										Te();
									break;
							}
						});
					}
				}
			};
			(e.$FXc = $e),
				(e.$FXc = $e =
					Ne(
						[
							j(0, v.$$m),
							j(1, $.$8N),
							j(2, S.$GO),
							j(3, y.$ek),
							j(4, l.$DJ),
							j(5, F.$ik),
							j(6, N.$r8),
							j(7, C.$km),
						],
						$e,
					));
		},
	),
		define(
			de[4032],
			he([1, 0, 55, 30, 3590, 52, 3591, 4031, 3634, 1058, 3561]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const a = i.$Io.as(t.Extensions.Workbench);
				(0, t.$s6)(w.$oXc.ID, w.$oXc, t.WorkbenchPhase.BlockRestore),
					(0, t.$s6)(C.$pXc.ID, C.$pXc, t.WorkbenchPhase.BlockRestore),
					a.registerWorkbenchContribution(d.$FXc, E.LifecyclePhase.Eventually),
					(0, t.$s6)(m.$GXc.ID, m.$GXc, t.WorkbenchPhase.BlockStartup),
					a.registerWorkbenchContribution(r.$fuc, E.LifecyclePhase.Restored),
					a.registerWorkbenchContribution(r.$guc, E.LifecyclePhase.Eventually),
					a.registerWorkbenchContribution(r.$huc, E.LifecyclePhase.Eventually),
					a.registerWorkbenchContribution(d.$EXc, E.LifecyclePhase.Eventually),
					a.registerWorkbenchContribution(u.$HXc, E.LifecyclePhase.Restored);
			},
		),
		define(
			de[1947],
			he([
				1, 0, 6, 19, 3, 146, 7, 258, 233, 495, 18, 5, 49, 8, 31, 39, 11, 50,
				105, 35, 614, 93, 10, 15, 1171, 103, 9, 22, 535, 132, 60, 4, 21, 44,
				206, 521, 67, 46, 394, 504, 1259, 375, 12, 37, 328, 254, 128, 785, 963,
				41, 32, 73, 27, 661, 14, 26, 276, 1257, 212, 247, 92, 251, 183, 40,
				1810, 1687, 609, 962, 440, 106, 501, 500, 23, 362, 347, 1649, 38, 68,
				188, 274, 325, 51, 173, 33, 607, 201, 94, 72, 1801, 448, 603, 77, 95,
				1747, 1185, 160, 96, 275, 326, 652,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
				be,
				Ce,
				Le,
				Fe,
				Oe,
				xe,
				He,
				Ke,
				Je,
				Te,
				Ee,
				Ie,
				Be,
				Se,
				ke,
				Ue,
				qe,
				Ae,
				Me,
				De,
				Re,
				je,
				Ve,
				Ze,
				et,
				rt,
				ft,
				bt,
			) {
				"use strict";
				var nt, lt, ct, gt, ht, Rt, Nt, jt, ti, kt;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cQc =
						e.$bQc =
						e.$aQc =
						e.$_Pc =
						e.$$Pc =
						e.$0Pc =
						e.$9Pc =
							void 0),
					(H = mt(H));
				const hi = (0, Ee.$wP)(
						"scm.historyItemAdditionsForeground",
						"gitDecoration.addedResourceForeground",
						(0, D.localize)(9082, null),
					),
					Kt = (0, Ee.$wP)(
						"scm.historyItemDeletionsForeground",
						"gitDecoration.deletedResourceForeground",
						(0, D.localize)(9083, null),
					);
				(0, Ee.$wP)(
					"scm.historyItemStatisticsBorder",
					(0, Ee.$BP)(Ee.$IP, 0.2),
					(0, D.localize)(9084, null),
				),
					(0, Ee.$wP)(
						"scm.historyItemSelectedStatisticsBorder",
						(0, Ee.$BP)(Ee.$FS, 0.2),
						(0, D.localize)(9085, null),
					);
				function di(Ti, wt) {
					if (!wt) return [void 0, void 0];
					if (!wt.label) return [(0, k.$3k)(wt), void 0];
					const We = (0, i.$kh)(Ti),
						_e = wt.label,
						Si = _e.length - We.length,
						gi = (0, k.$3k)(wt.score);
					if (_e === We) return [gi, void 0];
					const ki = [],
						Pi = [];
					for (const Hi of gi)
						Hi.start > Si
							? ki.push({ start: Hi.start - Si, end: Hi.end - Si })
							: Hi.end < Si
								? Pi.push(Hi)
								: (ki.push({ start: 0, end: Hi.end - Si }),
									Pi.push({ start: Hi.start, end: Si }));
					return [ki, Pi];
				}
				let Ye = class {
					static {
						nt = this;
					}
					static {
						this.DEFAULT_HEIGHT = 30;
					}
					static {
						this.TEMPLATE_ID = "actionButton";
					}
					get templateId() {
						return nt.TEMPLATE_ID;
					}
					constructor(wt, We, _e) {
						(this.c = wt), (this.d = We), (this.f = _e), (this.b = new Map());
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie"),
							wt.parentElement.parentElement.classList.add(
								"cursor-default",
								"force-no-hover",
							);
						const We = (0, C.$fhb)(wt, (0, C.$)(".button-container")),
							_e = new fi(We, this.d, this.c, this.f);
						return {
							actionButton: _e,
							disposable: w.$1c.None,
							templateDisposable: _e,
						};
					}
					renderElement(wt, We, _e, Si) {
						_e.disposable.dispose();
						const gi = new w.$Zc(),
							ki = wt.element;
						_e.actionButton.setButton(wt.element.button),
							this.b.set(ki, _e.actionButton),
							gi.add({ dispose: () => this.b.delete(ki) }),
							(_e.disposable = gi);
					}
					renderCompressedElements() {
						throw new Error("Should never happen since node is incompressible");
					}
					focusActionButton(wt) {
						this.b.get(wt)?.focus();
					}
					disposeElement(wt, We, _e) {
						_e.disposable.dispose();
					}
					disposeTemplate(wt) {
						wt.disposable.dispose(), wt.templateDisposable.dispose();
					}
				};
				(e.$9Pc = Ye),
					(e.$9Pc =
						Ye =
						nt =
							Ne([j(0, n.$ek), j(1, h.$Xxb), j(2, pe.$4N)], Ye));
				class ze {
					constructor(wt) {
						this.b = wt;
					}
					getDragURI(wt) {
						return (0, s.$sPc)(wt) ? wt.sourceUri.toString() : null;
					}
					onDragStart(wt, We) {
						const _e = ze.c(wt);
						if (We.dataTransfer && _e?.length) {
							this.b.invokeFunction((gi) => (0, Le.$PSb)(gi, _e, We));
							const Si = _e
								.filter((gi) => gi.scheme === Ce.Schemas.file)
								.map((gi) => gi.fsPath);
							Si.length &&
								We.dataTransfer.setData(Fe.$hzb.FILES, JSON.stringify(Si));
						}
					}
					getDragLabel(wt, We) {
						if (wt.length === 1) {
							const _e = wt[0];
							if ((0, s.$sPc)(_e)) return (0, i.$kh)(_e.sourceUri);
						}
						return String(wt.length);
					}
					onDragOver(wt, We, _e, Si, gi) {
						return !0;
					}
					drop(wt, We, _e, Si, gi) {}
					static c(wt) {
						const We = [];
						for (const _e of [...(wt.context ?? []), ...wt.elements])
							(0, s.$sPc)(_e) && We.push(_e.sourceUri);
						return We;
					}
					dispose() {}
				}
				let Xe = class {
					static {
						lt = this;
					}
					static {
						this.DEFAULT_HEIGHT = 26;
					}
					static {
						this.TEMPLATE_ID = "input";
					}
					get templateId() {
						return lt.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si) {
						(this.f = wt),
							(this.i = We),
							(this.k = _e),
							(this.m = Si),
							(this.b = new Map()),
							(this.c = new WeakMap()),
							(this.d = new WeakMap());
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie"),
							wt.parentElement.parentElement.classList.add("force-no-hover");
						const We = new w.$Zc(),
							_e = (0, C.$fhb)(wt, (0, C.$)(".scm-input")),
							Si = this.m.createInstance(Yt, _e, this.i);
						return (
							We.add(Si),
							{
								inputWidget: Si,
								inputWidgetHeight: lt.DEFAULT_HEIGHT,
								elementDisposables: new w.$Zc(),
								templateDisposable: We,
							}
						);
					}
					renderElement(wt, We, _e) {
						const Si = wt.element;
						(_e.inputWidget.input = Si),
							this.b.set(Si, _e.inputWidget),
							_e.elementDisposables.add({ dispose: () => this.b.delete(Si) });
						const gi = this.d.get(Si);
						gi && (_e.inputWidget.selections = gi),
							_e.elementDisposables.add(
								(0, w.$Yc)(() => {
									const Ji = _e.inputWidget.selections;
									Ji && this.d.set(Si, Ji);
								}),
							),
							(_e.inputWidgetHeight = lt.DEFAULT_HEIGHT);
						const ki = () => {
								const Ji = _e.inputWidget.getContentHeight();
								this.c.set(Si, Ji),
									_e.inputWidgetHeight !== Ji &&
										(this.k(Si, Ji + 10),
										(_e.inputWidgetHeight = Ji),
										_e.inputWidget.layout());
							},
							Pi = () => {
								_e.elementDisposables.add(
									_e.inputWidget.onDidChangeContentHeight(ki),
								),
									ki();
							};
						(0, $.$Oh)(Pi, 0, _e.elementDisposables);
						const Hi = () => _e.inputWidget.layout();
						_e.elementDisposables.add(this.f.onDidChange(Hi)), Hi();
					}
					renderCompressedElements() {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.templateDisposable.dispose();
					}
					getHeight(wt) {
						return (this.c.get(wt) ?? lt.DEFAULT_HEIGHT) + 10;
					}
					getRenderedInputWidget(wt) {
						return this.b.get(wt);
					}
					getFocusedInput() {
						for (const [wt, We] of this.b) if (We.hasFocus()) return wt;
					}
					clearValidation() {
						for (const [, wt] of this.b) wt.clearValidation();
					}
				};
				Xe = lt = Ne([j(3, a.$Li)], Xe);
				let It = class {
					static {
						ct = this;
					}
					static {
						this.TEMPLATE_ID = "resource group";
					}
					get templateId() {
						return ct.TEMPLATE_ID;
					}
					constructor(wt, We) {
						(this.b = wt), (this.c = We);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".resource-group")),
							_e = (0, C.$fhb)(We, (0, C.$)(".name")),
							Si = (0, C.$fhb)(We, (0, C.$)(".actions")),
							gi = new f.$eib(Si, { actionViewItemProvider: this.b }),
							ki = (0, C.$fhb)(We, (0, C.$)(".count")),
							Pi = new r.$Hob(ki, {}, ve.$zyb),
							Hi = (0, w.$Xc)(gi);
						return {
							name: _e,
							count: Pi,
							actionBar: gi,
							elementDisposables: new w.$Zc(),
							disposables: Hi,
						};
					}
					renderElement(wt, We, _e) {
						const Si = wt.element;
						(_e.name.textContent = Si.label),
							_e.actionBar.clear(),
							(_e.actionBar.context = Si),
							_e.count.setCount(Si.resources.length);
						const gi = this.c.menus.getRepositoryMenus(Si.provider);
						_e.elementDisposables.add(
							(0, s.$DPc)(gi.getResourceGroupMenu(Si), _e.actionBar),
						);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.disposables.dispose();
					}
				};
				It = ct = Ne([j(1, d.$d7)], It);
				class Lt extends o.$sj {
					constructor(wt) {
						super(), (this.b = wt);
					}
					async q(wt, We) {
						if (!(wt instanceof p.$2X)) return super.q(wt, We);
						const _e = this.b(),
							ki = (_e.some((Pi) => Pi === We) ? _e : [We])
								.map((Pi) =>
									v.$06.isResourceNode(Pi) ? v.$06.collect(Pi) : [Pi],
								)
								.flat();
						await wt.run(...ki);
					}
				}
				let xt = class {
					static {
						gt = this;
					}
					static {
						this.TEMPLATE_ID = "resource";
					}
					get templateId() {
						return gt.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi) {
						(this.d = wt),
							(this.f = We),
							(this.i = _e),
							(this.k = Si),
							(this.m = gi),
							(this.n = ki),
							(this.o = Pi),
							(this.b = new w.$Zc()),
							(this.c = new Map()),
							Pi.onDidColorThemeChange(this.q, this, this.b);
					}
					renderTemplate(wt) {
						const We = (0, C.$fhb)(wt, (0, C.$)(".resource")),
							_e = (0, C.$fhb)(We, (0, C.$)(".name")),
							Si = this.f.create(_e, {
								supportDescriptionHighlights: !0,
								supportHighlights: !0,
							}),
							gi = (0, C.$fhb)(Si.element, (0, C.$)(".actions")),
							ki = new f.$eib(gi, {
								actionViewItemProvider: this.i,
								actionRunner: this.k,
							}),
							Pi = (0, C.$fhb)(We, (0, C.$)(".decoration-icon")),
							Hi = new w.$2c(),
							Ji = (0, w.$Xc)(ki, Si, Hi);
						return {
							element: We,
							name: _e,
							fileLabel: Si,
							decorationIcon: Pi,
							actionBar: ki,
							actionBarMenu: void 0,
							actionBarMenuListener: Hi,
							elementDisposables: new w.$Zc(),
							disposables: Ji,
						};
					}
					renderElement(wt, We, _e) {
						const Si = wt.element,
							gi = v.$06.isResourceNode(Si) ? Si.element : Si,
							ki = v.$06.isResourceNode(Si) ? Si.uri : Si.sourceUri,
							Pi = v.$06.isResourceNode(Si)
								? T.FileKind.FOLDER
								: T.FileKind.FILE,
							Hi = (!v.$06.isResourceNode(Si) && Si.decorations.tooltip) || "",
							Ji = this.d() === at.Tree;
						let cn, un, yn;
						if (v.$06.isResourceNode(Si))
							if (Si.element) {
								const _i = this.n.menus.getRepositoryMenus(
									Si.element.resourceGroup.provider,
								);
								this.p(_e, Si, _i.getResourceMenu(Si.element)),
									_e.element.classList.toggle(
										"faded",
										Si.element.decorations.faded,
									),
									(yn = Si.element.decorations.strikeThrough);
							} else {
								const _i = this.n.menus.getRepositoryMenus(Si.context.provider);
								this.p(_e, Si, _i.getResourceFolderMenu(Si.context)),
									(cn = (0, k.$3k)(wt.filterData)),
									_e.element.classList.remove("faded");
							}
						else {
							const _i = this.n.menus.getRepositoryMenus(
								Si.resourceGroup.provider,
							);
							this.p(_e, Si, _i.getResourceMenu(Si)),
								([cn, un] = di(ki, wt.filterData)),
								_e.element.classList.toggle("faded", Si.decorations.faded),
								(yn = Si.decorations.strikeThrough);
						}
						const Rn = {
							tooltip: Hi,
							uri: ki,
							fileLabelOptions: {
								hidePath: Ji,
								fileKind: Pi,
								matches: cn,
								descriptionMatches: un,
								strikethrough: yn,
							},
							iconResource: gi,
						};
						this.t(_e, Rn),
							this.c.set(_e, Rn),
							_e.elementDisposables.add((0, w.$Yc)(() => this.c.delete(_e))),
							_e.element.setAttribute("data-tooltip", Hi);
					}
					disposeElement(wt, We, _e) {
						_e.elementDisposables.clear();
					}
					renderCompressedElements(wt, We, _e, Si) {
						const gi = wt.element,
							ki = gi.elements[gi.elements.length - 1],
							Pi = gi.elements.map((un) => un.name),
							Hi = T.FileKind.FOLDER,
							Ji = (0, k.$3k)(wt.filterData);
						_e.fileLabel.setResource(
							{ resource: ki.uri, name: Pi },
							{
								fileDecorations: { colors: !1, badges: !0 },
								fileKind: Hi,
								matches: Ji,
								separator: this.m.getSeparator(ki.uri.scheme),
							},
						);
						const cn = this.n.menus.getRepositoryMenus(ki.context.provider);
						this.p(_e, ki, cn.getResourceFolderMenu(ki.context)),
							_e.name.classList.remove("strike-through"),
							_e.element.classList.remove("faded"),
							(_e.decorationIcon.style.display = "none"),
							(_e.decorationIcon.style.backgroundImage = ""),
							_e.element.setAttribute("data-tooltip", "");
					}
					disposeCompressedElements(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.disposables.dispose();
					}
					p(wt, We, _e) {
						(!wt.actionBarMenu || wt.actionBarMenu !== _e) &&
							(wt.actionBar.clear(),
							(wt.actionBarMenu = _e),
							(wt.actionBarMenuListener.value = (0, s.$DPc)(_e, wt.actionBar))),
							(wt.actionBar.context = We);
					}
					q() {
						for (const [wt, We] of this.c) this.t(wt, We);
					}
					t(wt, We) {
						const _e = this.o.getColorTheme(),
							Si =
								_e.type === se.ColorScheme.LIGHT
									? We.iconResource?.decorations.icon
									: We.iconResource?.decorations.iconDark;
						wt.fileLabel.setFile(We.uri, {
							...We.fileLabelOptions,
							fileDecorations: { colors: !1, badges: !Si },
						}),
							Si
								? (te.ThemeIcon.isThemeIcon(Si)
										? ((wt.decorationIcon.className = `decoration-icon ${te.ThemeIcon.asClassName(Si)}`),
											Si.color &&
												(wt.decorationIcon.style.color =
													_e.getColor(Si.color.id)?.toString() ?? ""),
											(wt.decorationIcon.style.display = ""),
											(wt.decorationIcon.style.backgroundImage = ""))
										: ((wt.decorationIcon.className = "decoration-icon"),
											(wt.decorationIcon.style.color = ""),
											(wt.decorationIcon.style.display = ""),
											(wt.decorationIcon.style.backgroundImage = (0, C.$vhb)(
												Si,
											))),
									(wt.decorationIcon.title = We.tooltip))
								: ((wt.decorationIcon.className = "decoration-icon"),
									(wt.decorationIcon.style.color = ""),
									(wt.decorationIcon.style.display = "none"),
									(wt.decorationIcon.style.backgroundImage = ""),
									(wt.decorationIcon.title = ""));
					}
					dispose() {
						this.b.dispose();
					}
				};
				xt = gt = Ne([j(4, ie.$3N), j(5, d.$d7), j(6, b.$iP)], xt);
				class Vt extends o.$sj {
					q(wt, We) {
						return wt instanceof p.$2X
							? wt.run(We.repository.provider, We.id)
							: super.q(wt, We);
					}
				}
				let Bt = class {
					static {
						ht = this;
					}
					static {
						this.TEMPLATE_ID = "history-item-group";
					}
					get templateId() {
						return ht.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi, Hi) {
						(this.actionRunner = wt),
							(this.b = We),
							(this.c = _e),
							(this.d = Si),
							(this.f = gi),
							(this.i = ki),
							(this.k = Pi),
							(this.m = Hi);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".history-item-group")),
							_e = new Te.$Xob(We, { supportIcons: !0 }),
							Si = (0, C.$ghb)(_e.element, (0, C.$)(".icon-container")),
							gi = new w.$Zc(),
							ki = new Ie.$Syb(
								(0, C.$fhb)(We, (0, C.$)(".actions")),
								{
									actionRunner: this.actionRunner,
									menuOptions: { shouldForwardArgs: !0 },
								},
								this.i,
								this.b,
								this.c,
								this.d,
								this.f,
								this.m,
							);
						gi.add(ki);
						const Pi = (0, C.$fhb)(We, (0, C.$)(".count")),
							Hi = new r.$Hob(Pi, {}, ve.$zyb);
						return {
							iconContainer: Si,
							label: _e,
							toolBar: ki,
							count: Hi,
							elementDisposables: new w.$Zc(),
							templateDisposables: gi,
						};
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element;
						(_e.iconContainer.className = "icon-container"),
							gi.icon &&
								te.ThemeIcon.isThemeIcon(gi.icon) &&
								_e.iconContainer.classList.add(
									...te.ThemeIcon.asClassNameArray(gi.icon),
								),
							_e.label.setLabel(gi.label, gi.description, {
								title: gi.ariaLabel,
							}),
							_e.count.setCount(gi.count ?? 0);
						const Pi = this.k.menus.getRepositoryMenus(
							gi.repository.provider,
						).historyProviderMenu;
						if (Pi) {
							const Hi = Pi.getHistoryItemGroupMenu(gi),
								Ji =
									gi.direction === "incoming"
										? p.$XX.SCMIncomingChanges
										: p.$XX.SCMOutgoingChanges;
							_e.elementDisposables.add(
								(0, s.$CPc)(Hi, (cn, un) => {
									_e.toolBar.setActions(cn, un, [Ji]);
								}),
							),
								(_e.toolBar.context = gi);
						} else _e.toolBar.setActions([], []), (_e.toolBar.context = void 0);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.templateDisposables.dispose();
					}
				};
				Bt = ht = Ne(
					[
						j(1, c.$6j),
						j(2, h.$Xxb),
						j(3, g.$uZ),
						j(4, n.$ek),
						j(5, p.$YX),
						j(6, d.$d7),
						j(7, Y.$km),
					],
					Bt,
				);
				class Gt extends o.$sj {
					async q(wt, We) {
						if (!(wt instanceof p.$2X)) return super.q(wt, We);
						const _e = [];
						_e.push(We.historyItemGroup.repository.provider),
							_e.push({
								id: We.id,
								parentIds: We.parentIds,
								message: We.message,
								author: We.author,
								icon: We.icon,
								timestamp: We.timestamp,
								statistics: We.statistics,
							}),
							await wt.run(..._e);
					}
				}
				class Mt extends o.$sj {
					constructor(wt) {
						super(), (this.b = wt);
					}
					async q(wt, We) {
						if (!(wt instanceof p.$2X)) return super.q(wt, We);
						const _e = [];
						_e.push(We.repository.provider);
						const Si = this.b();
						Si.some((ki) => ki === We) && Si.length > 1
							? _e.push(
									...Si.map((ki) => ({
										id: ki.historyItemViewModel.historyItem.id,
										parentIds: ki.historyItemViewModel.historyItem.parentIds,
										message: ki.historyItemViewModel.historyItem.message,
										author: ki.historyItemViewModel.historyItem.author,
										icon: ki.historyItemViewModel.historyItem.icon,
										timestamp: ki.historyItemViewModel.historyItem.timestamp,
										statistics: ki.historyItemViewModel.historyItem.statistics,
									})),
								)
							: _e.push({
									id: We.historyItemViewModel.historyItem.id,
									parentIds: We.historyItemViewModel.historyItem.parentIds,
									message: We.historyItemViewModel.historyItem.message,
									author: We.historyItemViewModel.historyItem.author,
									icon: We.historyItemViewModel.historyItem.icon,
									timestamp: We.historyItemViewModel.historyItem.timestamp,
									statistics: We.historyItemViewModel.historyItem.statistics,
								}),
							await wt.run(..._e);
					}
				}
				let Ut = class extends qe.$Vyb {
					constructor(wt, We, _e, Si) {
						super("element", !0, () => this.C(), _e, Si),
							(this.b = wt),
							(this.z = We);
					}
					C() {
						let wt;
						return (
							this.b === L.ViewContainerLocation.Sidebar
								? (wt =
										this.z === rt.Position.LEFT
											? et.HoverPosition.RIGHT
											: et.HoverPosition.LEFT)
								: this.b === L.ViewContainerLocation.AuxiliaryBar
									? (wt =
											this.z === rt.Position.LEFT
												? et.HoverPosition.LEFT
												: et.HoverPosition.RIGHT)
									: (wt = et.HoverPosition.RIGHT),
							{
								additionalClasses: ["history-item-hover"],
								position: { hoverPosition: wt, forcePosition: !0 },
							}
						);
					}
				};
				Ut = Ne([j(2, y.$gj), j(3, qe.$Uyb)], Ut);
				let ei = class {
					static {
						Rt = this;
					}
					static {
						this.TEMPLATE_ID = "history-item";
					}
					get templateId() {
						return Rt.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si) {
						(this.b = wt), (this.c = We), (this.d = _e), (this.f = Si);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".history-item")),
							_e = new Te.$Xob(We, {
								supportIcons: !0,
								supportHighlights: !0,
								supportDescriptionHighlights: !0,
							}),
							Si = (0, C.$ghb)(_e.element, (0, C.$)(".icon-container")),
							gi = new w.$Zc(),
							ki = (0, C.$fhb)(We, (0, C.$)(".actions")),
							Pi = new f.$eib(ki, {
								actionRunner: this.b,
								actionViewItemProvider: this.c,
							});
						gi.add(Pi);
						const Hi = (0, C.$fhb)(We, (0, C.$)(".stats-container")),
							Ji = (0, C.$fhb)(Hi, (0, C.$)(".files-label")),
							cn = (0, C.$fhb)(Hi, (0, C.$)(".insertions-label")),
							un = (0, C.$fhb)(Hi, (0, C.$)(".deletions-label")),
							yn = this.d.setupManagedHover((0, je.$cib)("element"), Hi, "");
						return (
							gi.add(yn),
							{
								iconContainer: Si,
								label: _e,
								actionBar: Pi,
								statsContainer: Hi,
								statsCustomHover: yn,
								filesLabel: Ji,
								insertionsLabel: cn,
								deletionsLabel: un,
								elementDisposables: new w.$Zc(),
								disposables: gi,
							}
						);
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element;
						(_e.iconContainer.className = "icon-container"),
							gi.icon &&
								te.ThemeIcon.isThemeIcon(gi.icon) &&
								_e.iconContainer.classList.add(
									...te.ThemeIcon.asClassNameArray(gi.icon),
								);
						const ki = this.i(gi),
							[Pi, Hi] = this.k(gi, wt.filterData);
						_e.label.setLabel(gi.message, gi.author, {
							matches: Pi,
							descriptionMatches: Hi,
							title: ki,
						}),
							_e.actionBar.clear(),
							(_e.actionBar.context = gi);
						const Ji = this.f.menus.getRepositoryMenus(
							gi.historyItemGroup.repository.provider,
						);
						if (Ji.historyProviderMenu) {
							const cn = Ji.historyProviderMenu.getHistoryItemMenu(gi);
							_e.elementDisposables.add((0, s.$DPc)(cn, _e.actionBar));
						}
						this.m(wt, We, _e, Si);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					i(wt) {
						const We = new Ue.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						if (
							(wt.author &&
								We.appendMarkdown(`$(account) **${wt.author}**

`),
							wt.timestamp)
						) {
							const _e = new Intl.DateTimeFormat(H.$z, {
								year: "numeric",
								month: "long",
								day: "numeric",
								hour: "numeric",
								minute: "numeric",
							});
							We.appendMarkdown(`$(history) ${_e.format(wt.timestamp)}

`);
						}
						return (
							We.appendMarkdown(wt.message),
							{ markdown: We, markdownNotSupportedFallback: wt.message }
						);
					}
					k(wt, We) {
						return We
							? [
									wt.message === We.label ? (0, k.$3k)(We.score) : void 0,
									wt.author === We.label ? (0, k.$3k)(We.score) : void 0,
								]
							: [void 0, void 0];
					}
					m(wt, We, _e, Si) {
						const gi = wt.element;
						if (gi.statistics) {
							const Pi = [
								gi.statistics.files === 1
									? (0, D.localize)(9086, null, gi.statistics.files)
									: (0, D.localize)(9087, null, gi.statistics.files),
								gi.statistics.insertions === 1
									? (0, D.localize)(9088, null, gi.statistics.insertions, "(+)")
									: gi.statistics.insertions > 1
										? (0, D.localize)(
												9089,
												null,
												gi.statistics.insertions,
												"(+)",
											)
										: "",
								gi.statistics.deletions === 1
									? (0, D.localize)(9090, null, gi.statistics.deletions, "(-)")
									: gi.statistics.deletions > 1
										? (0, D.localize)(
												9091,
												null,
												gi.statistics.deletions,
												"(-)",
											)
										: "",
							]
								.filter((Hi) => Hi !== "")
								.join(", ");
							_e.statsContainer.setAttribute("aria-label", Pi),
								_e.statsCustomHover.update(Pi),
								(_e.filesLabel.textContent = gi.statistics.files.toString()),
								(_e.insertionsLabel.textContent =
									gi.statistics.insertions > 0
										? `+${gi.statistics.insertions}`
										: ""),
								_e.insertionsLabel.classList.toggle(
									"hidden",
									gi.statistics.insertions === 0,
								),
								(_e.deletionsLabel.textContent =
									gi.statistics.deletions > 0
										? `-${gi.statistics.deletions}`
										: ""),
								_e.deletionsLabel.classList.toggle(
									"hidden",
									gi.statistics.deletions === 0,
								);
						}
						_e.statsContainer.classList.toggle(
							"hidden",
							gi.statistics === void 0,
						);
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.disposables.dispose();
					}
				};
				ei = Rt = Ne([j(2, qe.$Uyb), j(3, d.$d7)], ei);
				let mi = class {
					static {
						Nt = this;
					}
					static {
						this.TEMPLATE_ID = "history-item-2";
					}
					get templateId() {
						return Nt.TEMPLATE_ID;
					}
					constructor(wt, We, _e) {
						(this.b = wt), (this.c = We), (this.d = _e);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".history-item")),
							_e = (0, C.$fhb)(We, (0, C.$)(".graph-container")),
							Si = new Te.$Xob(We, {
								supportIcons: !0,
								supportHighlights: !0,
								supportDescriptionHighlights: !0,
							}),
							gi = (0, C.$fhb)(We, (0, C.$)(".label-container"));
						return (
							We.appendChild(gi),
							{
								element: We,
								graphContainer: _e,
								label: Si,
								labelContainer: gi,
								elementDisposables: new w.$Zc(),
								disposables: new w.$Zc(),
							}
						);
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element.historyItemViewModel,
							ki = gi.historyItem,
							Pi = this.c.setupManagedHover(
								this.b,
								_e.element,
								this.f(wt.element),
							);
						_e.elementDisposables.add(Pi),
							(_e.graphContainer.textContent = ""),
							_e.graphContainer.appendChild((0, Ve.$6Pc)(gi));
						const [Hi, Ji] = this.i(gi, wt.filterData);
						if (
							(_e.label.setLabel(ki.message, ki.author, {
								matches: Hi,
								descriptionMatches: Ji,
							}),
							(_e.labelContainer.textContent = ""),
							ki.labels)
						) {
							const cn = (0, je.$dib)();
							_e.elementDisposables.add(cn);
							for (const un of ki.labels)
								if (un.icon && te.ThemeIcon.isThemeIcon(un.icon)) {
									const yn = (0, C.$fhb)(
										_e.labelContainer,
										(0, C.$)("div.label"),
									);
									yn.classList.add(...te.ThemeIcon.asClassNameArray(un.icon));
									const Rn = this.c.setupManagedHover(cn, yn, un.title);
									_e.elementDisposables.add(Rn);
								}
						}
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					f(wt) {
						const We = this.d.getColorTheme(),
							_e = wt.historyItemViewModel.historyItem,
							Si = wt.repository.provider.historyProvider
								.get()
								?.currentHistoryItemGroup?.get(),
							gi = new Ue.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						if (_e.author) {
							if (
								(gi.appendMarkdown(`$(account) **${_e.author}**`), _e.timestamp)
							) {
								const ki = new Intl.DateTimeFormat(H.$z, {
									year: "numeric",
									month: "long",
									day: "numeric",
									hour: "numeric",
									minute: "numeric",
								});
								gi.appendMarkdown(
									`, $(history) ${(0, ft.$dn)(_e.timestamp, !0, !0)} (${ki.format(_e.timestamp)})`,
								);
							}
							gi.appendMarkdown(`

`);
						}
						if (
							(gi.appendMarkdown(`${_e.message}

`),
							_e.statistics)
						) {
							if (
								(gi.appendMarkdown(`---

`),
								gi.appendMarkdown(
									`<span>${_e.statistics.files === 1 ? ((0, D.localize))(9092, null, _e.statistics.files) : ((0, D.localize))(9093, null, _e.statistics.files)}</span>`,
								),
								_e.statistics.insertions)
							) {
								const ki = We.getColor(hi);
								gi.appendMarkdown(
									`,&nbsp;<span style="color:${ki};">${_e.statistics.insertions === 1 ? ((0, D.localize))(9094, null, _e.statistics.insertions, "(+)") : ((0, D.localize))(9095, null, _e.statistics.insertions, "(+)")}</span>`,
								);
							}
							if (_e.statistics.deletions) {
								const ki = We.getColor(Kt);
								gi.appendMarkdown(
									`,&nbsp;<span style="color:${ki};">${_e.statistics.deletions === 1 ? ((0, D.localize))(9096, null, _e.statistics.deletions, "(-)") : ((0, D.localize))(9097, null, _e.statistics.deletions, "(-)")}</span>`,
								);
							}
						}
						if (_e.labels) {
							const ki = We.getColor(Ve.$1Pc),
								Pi = We.getColor(Ve.$2Pc),
								Hi = We.getColor(Ve.$3Pc),
								Ji = We.getColor(Ve.$4Pc);
							gi.appendMarkdown(`

---

`),
								gi.appendMarkdown(
									_e.labels
										.map((cn) => {
											const un =
													cn.title === Si?.name
														? ki
														: cn.title === Si?.remote?.name
															? Pi
															: cn.title === Si?.base?.name
																? Hi
																: void 0,
												yn = te.ThemeIcon.isThemeIcon(cn.icon)
													? cn.icon.id
													: "";
											return `<span style="color:${Ji};background-color:${un};border-radius:2px;">&nbsp;$(${yn})&nbsp;${cn.title}&nbsp;</span>`;
										})
										.join("&nbsp;&nbsp;"),
								);
						}
						return { markdown: gi, markdownNotSupportedFallback: _e.message };
					}
					i(wt, We) {
						return We
							? [
									wt.historyItem.message === We.label
										? (0, k.$3k)(We.score)
										: void 0,
									wt.historyItem.author === We.label
										? (0, k.$3k)(We.score)
										: void 0,
								]
							: [void 0, void 0];
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.disposables.dispose();
					}
				};
				mi = Nt = Ne([j(1, qe.$Uyb), j(2, b.$iP)], mi);
				let ii = class {
					static {
						jt = this;
					}
					static {
						this.TEMPLATE_ID = "historyItemChange";
					}
					get templateId() {
						return jt.TEMPLATE_ID;
					}
					constructor(wt, We, _e) {
						(this.b = wt), (this.c = We), (this.d = _e);
					}
					renderTemplate(wt) {
						const We = (0, C.$fhb)(wt, (0, C.$)(".change")),
							_e = (0, C.$fhb)(We, (0, C.$)(".name")),
							Si = this.c.create(_e, {
								supportDescriptionHighlights: !0,
								supportHighlights: !0,
							}),
							gi = (0, C.$fhb)(We, (0, C.$)(".decoration-icon"));
						return {
							element: We,
							name: _e,
							fileLabel: Si,
							decorationIcon: gi,
							disposables: new w.$Zc(),
						};
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element,
							ki = v.$06.isResourceNode(gi)
								? (gi.element?.uri ?? gi.uri)
								: gi.uri,
							Pi = v.$06.isResourceNode(gi)
								? T.FileKind.FOLDER
								: T.FileKind.FILE,
							Hi = this.b() === at.Tree;
						let Ji, cn;
						v.$06.isResourceNode(gi)
							? gi.element || (Ji = (0, k.$3k)(wt.filterData))
							: ([Ji, cn] = di(ki, wt.filterData)),
							_e.fileLabel.setFile(ki, {
								fileDecorations: { colors: !1, badges: !0 },
								fileKind: Pi,
								hidePath: Hi,
								matches: Ji,
								descriptionMatches: cn,
							});
					}
					renderCompressedElements(wt, We, _e, Si) {
						const gi = wt.element,
							ki = gi.elements[gi.elements.length - 1],
							Pi = gi.elements.map((Ji) => Ji.name),
							Hi = (0, k.$3k)(wt.filterData);
						_e.fileLabel.setResource(
							{ resource: ki.uri, name: Pi },
							{
								fileDecorations: { colors: !1, badges: !0 },
								fileKind: T.FileKind.FOLDER,
								matches: Hi,
								separator: this.d.getSeparator(ki.uri.scheme),
							},
						);
					}
					disposeTemplate(wt) {
						wt.disposables.dispose();
					}
				};
				ii = jt = Ne([j(2, ie.$3N)], ii);
				let Dt = class {
					static {
						ti = this;
					}
					static {
						this.TEMPLATE_ID = "separator";
					}
					get templateId() {
						return ti.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi) {
						(this.b = wt),
							(this.c = We),
							(this.d = _e),
							(this.f = Si),
							(this.i = gi),
							(this.k = ki),
							(this.m = Pi);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie"),
							wt.parentElement.parentElement.classList.add(
								"cursor-default",
								"force-no-hover",
							);
						const We = new w.$Zc(),
							_e = (0, C.$fhb)(wt, (0, C.$)(".separator-container")),
							Si = new Te.$Xob(_e, { supportIcons: !0 });
						(0, C.$fhb)(_e, (0, C.$)(".separator")), We.add(Si);
						const gi = new Ie.$Syb(
							(0, C.$fhb)(_e, (0, C.$)(".actions")),
							void 0,
							this.k,
							this.c,
							this.d,
							this.f,
							this.i,
							this.m,
						);
						return (
							We.add(gi),
							{
								label: Si,
								toolBar: gi,
								elementDisposables: new w.$Zc(),
								templateDisposables: We,
							}
						);
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element.repository.provider,
							Pi = gi.historyProvider.get()?.currentHistoryItemGroup.get();
						_e.label.setLabel(wt.element.label, void 0, {
							title: wt.element.ariaLabel,
						});
						const Hi = this.c.createOverlay([
								["scmHistoryItemGroupHasRemote", !!Pi?.remote],
							]),
							Ji = this.k.createMenu(p.$XX.SCMChangesSeparator, Hi);
						_e.elementDisposables.add(
							(0, s.$CPc)(Ji, (cn, un) => {
								un.splice(0, 0, ...this.b(wt.element.repository), new o.$tj()),
									_e.toolBar.setActions(cn, un, [p.$XX.SCMChangesSeparator]);
							}),
						),
							(_e.toolBar.context = gi);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.templateDisposables.dispose();
					}
				};
				Dt = ti = Ne(
					[
						j(1, c.$6j),
						j(2, h.$Xxb),
						j(3, g.$uZ),
						j(4, n.$ek),
						j(5, p.$YX),
						j(6, Y.$km),
					],
					Dt,
				);
				class Jt {
					constructor(wt) {
						this.b = wt;
					}
					getHeight(wt) {
						return (0, s.$pPc)(wt)
							? this.b.getHeight(wt)
							: (0, s.$qPc)(wt)
								? Ye.DEFAULT_HEIGHT + 10
								: 22;
					}
					getTemplateId(wt) {
						if ((0, s.$oPc)(wt)) return Z.$OPc.TEMPLATE_ID;
						if ((0, s.$pPc)(wt)) return Xe.TEMPLATE_ID;
						if ((0, s.$qPc)(wt)) return Ye.TEMPLATE_ID;
						if ((0, s.$rPc)(wt)) return It.TEMPLATE_ID;
						if ((0, s.$sPc)(wt) || (0, s.$tPc)(wt)) return xt.TEMPLATE_ID;
						if ((0, s.$uPc)(wt)) return Bt.TEMPLATE_ID;
						if ((0, s.$vPc)(wt)) return ei.TEMPLATE_ID;
						if ((0, s.$wPc)(wt)) return mi.TEMPLATE_ID;
						if ((0, s.$yPc)(wt) || (0, s.$zPc)(wt)) return ii.TEMPLATE_ID;
						if ((0, s.$APc)(wt)) return Dt.TEMPLATE_ID;
						throw new Error("Unknown element");
					}
				}
				class si {
					isIncompressible(wt) {
						return v.$06.isResourceNode(wt)
							? wt.childrenCount === 0 || !wt.parent || !wt.parent.parent
							: !0;
					}
				}
				class Zt {
					filter(wt) {
						return (0, s.$rPc)(wt)
							? wt.resources.length > 0 || !wt.hideWhenEmpty
							: !0;
					}
				}
				class ci {
					constructor(wt, We) {
						(this.b = wt), (this.c = We);
					}
					compare(wt, We) {
						if ((0, s.$oPc)(wt)) {
							if (!(0, s.$oPc)(We)) throw new Error("Invalid comparison");
							return 0;
						}
						if ((0, s.$pPc)(wt)) return -1;
						if ((0, s.$pPc)(We)) return 1;
						if ((0, s.$qPc)(wt)) return -1;
						if ((0, s.$qPc)(We)) return 1;
						if ((0, s.$rPc)(wt)) return (0, s.$rPc)(We) ? 0 : -1;
						if ((0, s.$APc)(wt)) return (0, s.$rPc)(We) ? 1 : -1;
						if ((0, s.$uPc)(wt)) return (0, s.$uPc)(We) ? 0 : 1;
						if ((0, s.$vPc)(wt)) {
							if (!(0, s.$vPc)(We)) throw new Error("Invalid comparison");
							return 0;
						}
						if ((0, s.$wPc)(wt)) return (0, s.$wPc)(We) ? 0 : 1;
						if ((0, s.$yPc)(wt) || (0, s.$zPc)(wt)) {
							if (this.b() === at.List) {
								if (!(0, s.$yPc)(We)) throw new Error("Invalid comparison");
								return (0, P.$as)(wt.uri.fsPath, We.uri.fsPath);
							}
							if (!(0, s.$yPc)(We) && !(0, s.$zPc)(We))
								throw new Error("Invalid comparison");
							const Pi = (0, s.$zPc)(wt) ? wt.name : (0, i.$kh)(wt.uri),
								Hi = (0, s.$zPc)(We) ? We.name : (0, i.$kh)(We.uri);
							return (0, P.$3r)(Pi, Hi);
						}
						if (this.b() === at.List) {
							if (this.c() === pi.Name) {
								const Ji = (0, i.$kh)(wt.sourceUri),
									cn = (0, i.$kh)(We.sourceUri);
								return (0, P.$3r)(Ji, cn);
							}
							if (this.c() === pi.Status) {
								const Ji = wt.decorations.tooltip ?? "",
									cn = We.decorations.tooltip ?? "";
								if (Ji !== cn) return (0, q.$Ff)(Ji, cn);
							}
							const Pi = wt.sourceUri.fsPath,
								Hi = We.sourceUri.fsPath;
							return (0, P.$as)(Pi, Hi);
						}
						const _e = v.$06.isResourceNode(wt),
							Si = v.$06.isResourceNode(We);
						if (_e !== Si) return _e ? -1 : 1;
						const gi = v.$06.isResourceNode(wt)
								? wt.name
								: (0, i.$kh)(wt.sourceUri),
							ki = v.$06.isResourceNode(We)
								? We.name
								: (0, i.$kh)(We.sourceUri);
						return (0, P.$3r)(gi, ki);
					}
				}
				e.$0Pc = ci;
				let ri = class {
					constructor(wt, We) {
						(this.b = wt), (this.c = We);
					}
					getKeyboardNavigationLabel(wt) {
						if (v.$06.isResourceNode(wt)) return wt.name;
						if ((0, s.$oPc)(wt) || (0, s.$pPc)(wt) || (0, s.$qPc)(wt)) return;
						if ((0, s.$rPc)(wt)) return wt.label;
						if ((0, s.$uPc)(wt)) return wt.label;
						if ((0, s.$vPc)(wt)) return [wt.message, wt.author];
						if ((0, s.$wPc)(wt))
							return [
								wt.historyItemViewModel.historyItem.message,
								wt.historyItemViewModel.historyItem.author,
							];
						if ((0, s.$APc)(wt)) return wt.label;
						if (this.b() === at.List) {
							const We = (0, s.$sPc)(wt) ? wt.sourceUri : wt.uri;
							return [(0, i.$kh)(We), this.c.getUriLabel(We, { relative: !0 })];
						} else return (0, i.$kh)((0, s.$sPc)(wt) ? wt.sourceUri : wt.uri);
					}
					getCompressedNodeKeyboardNavigationLabel(wt) {
						return wt.map((_e) => _e.name).join("/");
					}
				};
				(e.$$Pc = ri), (e.$$Pc = ri = Ne([j(1, ie.$3N)], ri));
				function $i(Ti) {
					if ((0, s.$oPc)(Ti)) return `repo:${Ti.provider.id}`;
					if ((0, s.$pPc)(Ti)) return `input:${Ti.repository.provider.id}`;
					if ((0, s.$qPc)(Ti))
						return `actionButton:${Ti.repository.provider.id}`;
					if ((0, s.$rPc)(Ti))
						return `resourceGroup:${Ti.provider.id}/${Ti.id}`;
					if ((0, s.$sPc)(Ti)) {
						const wt = Ti.resourceGroup;
						return `resource:${wt.provider.id}/${wt.id}/${Ti.sourceUri.toString()}`;
					} else if ((0, s.$tPc)(Ti)) {
						const wt = Ti.context;
						return `folder:${wt.provider.id}/${wt.id}/$FOLDER/${Ti.uri.toString()}`;
					} else {
						if ((0, s.$uPc)(Ti))
							return `historyItemGroup:${Ti.repository.provider.id}/${Ti.id}`;
						if ((0, s.$vPc)(Ti)) {
							const wt = Ti.historyItemGroup;
							return `historyItem:${wt.repository.provider.id}/${wt.id}/${Ti.id}/${Ti.parentIds.join(",")}`;
						} else if ((0, s.$wPc)(Ti)) {
							const wt = Ti.repository.provider,
								We = Ti.historyItemViewModel.historyItem;
							return `historyItem2:${wt.id}/${We.id}/${We.parentIds.join(",")}`;
						} else if ((0, s.$yPc)(Ti)) {
							const wt = Ti.historyItem,
								We = wt.historyItemGroup;
							return `historyItemChange:${We.repository.provider.id}/${We.id}/${wt.id}/${Ti.uri.toString()}`;
						} else if ((0, s.$zPc)(Ti)) {
							const wt = Ti.context,
								We = wt.historyItemGroup;
							return `folder:${We.repository.provider.id}/${We.id}/${wt.id}/$FOLDER/${Ti.uri.toString()}`;
						} else {
							if ((0, s.$APc)(Ti))
								return `separator:${Ti.repository.provider.id}`;
							throw new Error("Invalid tree element");
						}
					}
				}
				class Wt {
					getId(wt) {
						return $i(wt);
					}
				}
				let tt = class {
					constructor(wt) {
						this.b = wt;
					}
					getWidgetAriaLabel() {
						return (0, D.localize)(9098, null);
					}
					getAriaLabel(wt) {
						if (v.$06.isResourceNode(wt))
							return (
								this.b.getUriLabel(wt.uri, { relative: !0, noPrefix: !0 }) ||
								wt.name
							);
						if ((0, s.$oPc)(wt))
							return `${wt.provider.name} ${wt.provider.label}`;
						if ((0, s.$pPc)(wt)) return (0, D.localize)(9099, null);
						if ((0, s.$qPc)(wt)) return wt.button?.command.title ?? "";
						if ((0, s.$rPc)(wt)) return wt.label;
						if ((0, s.$uPc)(wt))
							return (
								wt.ariaLabel ??
								`${wt.label.trim()}${wt.description ? `, ${wt.description}` : ""}`
							);
						if ((0, s.$vPc)(wt))
							return `${(0, Je.$$k)(wt.message).trim()}${wt.author ? `, ${wt.author}` : ""}`;
						if ((0, s.$wPc)(wt)) {
							const We = wt.historyItemViewModel.historyItem;
							return `${(0, Je.$$k)(We.message).trim()}${We.author ? `, ${We.author}` : ""}`;
						} else if ((0, s.$yPc)(wt)) {
							const We = [(0, i.$kh)(wt.uri)],
								_e = this.b.getUriLabel((0, i.$mh)(wt.uri), {
									relative: !0,
									noPrefix: !0,
								});
							return _e && We.push(_e), We.join(", ");
						} else {
							if ((0, s.$APc)(wt)) return wt.ariaLabel ?? wt.label;
							{
								const We = [];
								We.push((0, i.$kh)(wt.sourceUri)),
									wt.decorations.tooltip && We.push(wt.decorations.tooltip);
								const _e = this.b.getUriLabel((0, i.$mh)(wt.sourceUri), {
									relative: !0,
									noPrefix: !0,
								});
								return _e && We.push(_e), We.join(", ");
							}
						}
					}
				};
				(e.$_Pc = tt), (e.$_Pc = tt = Ne([j(0, ie.$3N)], tt));
				var at;
				(function (Ti) {
					(Ti.List = "list"), (Ti.Tree = "tree");
				})(at || (at = {}));
				var pi;
				(function (Ti) {
					(Ti.Path = "path"), (Ti.Name = "name"), (Ti.Status = "status");
				})(pi || (pi = {}));
				const Li = {
					ViewSort: new p.$XX("SCMViewSort"),
					Repositories: new p.$XX("SCMRepositories"),
					ChangesSettings: new p.$XX("SCMChangesSettings"),
				};
				(e.$aQc = {
					SCMViewMode: new c.$5j("scmViewMode", at.List),
					SCMViewSortKey: new c.$5j("scmViewSortKey", pi.Path),
					SCMViewAreAllRepositoriesCollapsed: new c.$5j(
						"scmViewAreAllRepositoriesCollapsed",
						!1,
					),
					SCMViewIsAnyRepositoryCollapsible: new c.$5j(
						"scmViewIsAnyRepositoryCollapsible",
						!1,
					),
					SCMProvider: new c.$5j("scmProvider", void 0),
					SCMProviderRootUri: new c.$5j("scmProviderRootUri", void 0),
					SCMProviderHasRootUri: new c.$5j("scmProviderHasRootUri", void 0),
					RepositoryCount: new c.$5j("scmRepositoryCount", 0),
					RepositoryVisibilityCount: new c.$5j("scmRepositoryVisibleCount", 0),
					RepositoryVisibility(Ti) {
						return new c.$5j(`scmRepositoryVisible:${Ti.provider.id}`, !1);
					},
				}),
					p.$ZX.appendMenuItem(p.$XX.SCMTitle, {
						title: (0, D.localize)(9100, null),
						submenu: Li.ViewSort,
						when: c.$Kj.and(
							c.$Kj.equals("view", d.$_6),
							e.$aQc.RepositoryCount.notEqualsTo(0),
						),
						group: "0_view&sort",
						order: 1,
					}),
					p.$ZX.appendMenuItem(Li.ViewSort, {
						title: (0, D.localize)(9101, null),
						submenu: Li.Repositories,
						when: c.$Kj.greater(e.$aQc.RepositoryCount.key, 1),
						group: "0_repositories",
					}),
					(0, p.$4X)(
						class extends p.$3X {
							constructor() {
								super({
									id: "workbench.scm.action.scm.viewChanges",
									title: (0, D.localize)(9102, null),
									f1: !1,
									menu: [
										{
											id: p.$XX.SCMChangesContext,
											group: "0_view",
											when: c.$Kj.equals(
												"config.multiDiffEditor.experimental.enabled",
												!0,
											),
										},
									],
								});
							}
							async run(Ti, wt, ...We) {
								const _e = Ti.get(n.$ek);
								if (!wt || We.length === 0) return;
								const Si = We[0],
									gi = We[We.length - 1],
									ki = wt.historyProvider.get();
								if (We.length > 1) {
									const Rn = await ki?.resolveHistoryItemGroupCommonAncestor2([
										Si.id,
										gi.id,
									]);
									if (!Rn || (Rn !== Si.id && Rn !== gi.id)) return;
								}
								const Pi = gi.parentIds.length > 0 ? gi.parentIds[0] : void 0,
									Hi = await ki?.provideHistoryItemChanges(Si.id, Pi);
								if (!Hi?.length) return;
								const Ji =
										We.length === 1
											? `${We[0].id.substring(0, 8)} - ${We[0].message}`
											: (0, D.localize)(
													9103,
													null,
													gi.id.substring(0, 8),
													Si.id.substring(0, 8),
												),
									cn = wt.rootUri,
									un = cn ? cn.path : wt.label,
									yn = I.URI.from(
										{
											scheme: "scm-history-item",
											path: `${un}/${Pi}..${Si.id}`,
										},
										!0,
									);
								_e.executeCommand("_workbench.openMultiDiffEditor", {
									title: Ji,
									multiDiffSourceUri: yn,
									resources: Hi,
								});
							}
						},
					);
				class Di extends p.$3X {
					constructor(wt) {
						super({
							id: `workbench.scm.action.toggleRepositoryVisibility.${wt.provider.id}`,
							title: wt.provider.name,
							f1: !1,
							precondition: c.$Kj.or(
								e.$aQc.RepositoryVisibilityCount.notEqualsTo(1),
								e.$aQc.RepositoryVisibility(wt).isEqualTo(!1),
							),
							toggled: e.$aQc.RepositoryVisibility(wt).isEqualTo(!0),
							menu: { id: Li.Repositories, group: "0_repositories" },
						}),
							(this.b = wt);
					}
					run(wt) {
						wt.get(d.$d7).toggleVisibility(this.b);
					}
				}
				let Ui = class {
					constructor(wt, We, _e) {
						(this.i = wt),
							(this.k = We),
							(this.b = new Map()),
							(this.f = new w.$Zc()),
							(this.c = e.$aQc.RepositoryCount.bindTo(wt)),
							(this.d = e.$aQc.RepositoryVisibilityCount.bindTo(wt)),
							We.onDidChangeVisibleRepositories(this.o, this, this.f),
							_e.onDidAddRepository(this.m, this, this.f),
							_e.onDidRemoveRepository(this.n, this, this.f);
						for (const Si of _e.repositories) this.m(Si);
					}
					m(wt) {
						const We = (0, p.$4X)(
								class extends Di {
									constructor() {
										super(wt);
									}
								},
							),
							_e = e.$aQc.RepositoryVisibility(wt).bindTo(this.i);
						_e.set(this.k.isVisible(wt)),
							this.b.set(wt, {
								contextKey: _e,
								dispose() {
									_e.reset(), We.dispose();
								},
							}),
							this.p();
					}
					n(wt) {
						this.b.get(wt)?.dispose(), this.b.delete(wt), this.p();
					}
					o() {
						let wt = 0;
						for (const [We, _e] of this.b) {
							const Si = this.k.isVisible(We);
							_e.contextKey.set(Si), Si && wt++;
						}
						this.c.set(this.b.size), this.d.set(wt);
					}
					p() {
						this.c.set(this.b.size),
							this.d.set(
								S.Iterable.reduce(
									this.b.keys(),
									(wt, We) => wt + (this.k.isVisible(We) ? 1 : 0),
									0,
								),
							);
					}
					dispose() {
						this.f.dispose(), (0, w.$Vc)(this.b.values()), this.b.clear();
					}
				};
				Ui = Ne([j(0, c.$6j), j(1, d.$d7), j(2, d.$c7)], Ui);
				class Wi extends E.$WMb {
					constructor(wt = "workbench.scm.action.setListViewMode", We = {}) {
						super({
							id: wt,
							title: (0, D.localize)(9104, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.listTree,
							toggled: e.$aQc.SCMViewMode.isEqualTo(at.List),
							menu: { id: Li.ViewSort, group: "1_viewmode", ...We },
						});
					}
					async runInView(wt, We) {
						We.viewMode = at.List;
					}
				}
				class Gi extends Wi {
					constructor() {
						super("workbench.scm.action.setListViewModeNavigation", {
							id: p.$XX.SCMTitle,
							when: c.$Kj.and(
								c.$Kj.equals("view", d.$_6),
								e.$aQc.RepositoryCount.notEqualsTo(0),
								e.$aQc.SCMViewMode.isEqualTo(at.Tree),
							),
							group: "navigation",
							order: -1e3,
						});
					}
				}
				class qi extends E.$WMb {
					constructor(wt = "workbench.scm.action.setTreeViewMode", We = {}) {
						super({
							id: wt,
							title: (0, D.localize)(9105, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.listFlat,
							toggled: e.$aQc.SCMViewMode.isEqualTo(at.Tree),
							menu: { id: Li.ViewSort, group: "1_viewmode", ...We },
						});
					}
					async runInView(wt, We) {
						We.viewMode = at.Tree;
					}
				}
				class Oi extends qi {
					constructor() {
						super("workbench.scm.action.setTreeViewModeNavigation", {
							id: p.$XX.SCMTitle,
							when: c.$Kj.and(
								c.$Kj.equals("view", d.$_6),
								e.$aQc.RepositoryCount.notEqualsTo(0),
								e.$aQc.SCMViewMode.isEqualTo(at.List),
							),
							group: "navigation",
							order: -1e3,
						});
					}
				}
				(0, p.$4X)(Wi), (0, p.$4X)(qi), (0, p.$4X)(Gi), (0, p.$4X)(Oi);
				class yi extends E.$WMb {
					constructor(wt, We) {
						super({
							id: `workbench.scm.action.repositories.setSortKey.${wt}`,
							title: We,
							viewId: d.$_6,
							f1: !1,
							toggled: $e.$TPc.RepositorySortKey.isEqualTo(wt),
							menu: [
								{ id: Li.Repositories, group: "1_sort" },
								{ id: p.$XX.SCMSourceControlTitle, group: "1_sort" },
							],
						}),
							(this.b = wt);
					}
					runInView(wt) {
						wt.get(d.$d7).toggleSortKey(this.b);
					}
				}
				class Ai extends yi {
					constructor() {
						super(
							d.ISCMRepositorySortKey.DiscoveryTime,
							(0, D.localize)(9106, null),
						);
					}
				}
				class li extends yi {
					constructor() {
						super(d.ISCMRepositorySortKey.Name, (0, D.localize)(9107, null));
					}
				}
				class Vi extends yi {
					constructor() {
						super(d.ISCMRepositorySortKey.Path, (0, D.localize)(9108, null));
					}
				}
				(0, p.$4X)(Ai), (0, p.$4X)(li), (0, p.$4X)(Vi);
				class wi extends E.$WMb {
					constructor(wt, We) {
						super({
							id: `workbench.scm.action.setSortKey.${wt}`,
							title: We,
							viewId: d.$_6,
							f1: !1,
							toggled: e.$aQc.SCMViewSortKey.isEqualTo(wt),
							precondition: e.$aQc.SCMViewMode.isEqualTo(at.List),
							menu: { id: Li.ViewSort, group: "2_sort" },
						}),
							(this.b = wt);
					}
					async runInView(wt, We) {
						We.viewSortKey = this.b;
					}
				}
				class _t extends wi {
					constructor() {
						super(pi.Name, (0, D.localize)(9109, null));
					}
				}
				class ai extends wi {
					constructor() {
						super(pi.Path, (0, D.localize)(9110, null));
					}
				}
				class Ft extends wi {
					constructor() {
						super(pi.Status, (0, D.localize)(9111, null));
					}
				}
				(0, p.$4X)(_t), (0, p.$4X)(ai), (0, p.$4X)(Ft);
				class Xt extends E.$WMb {
					constructor() {
						super({
							id: "workbench.scm.action.collapseAllRepositories",
							title: (0, D.localize)(9112, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.collapseAll,
							menu: {
								id: p.$XX.SCMTitle,
								group: "navigation",
								when: c.$Kj.and(
									c.$Kj.equals("view", d.$_6),
									e.$aQc.SCMViewIsAnyRepositoryCollapsible.isEqualTo(!0),
									e.$aQc.SCMViewAreAllRepositoriesCollapsed.isEqualTo(!1),
								),
							},
						});
					}
					async runInView(wt, We) {
						We.collapseAllRepositories();
					}
				}
				class $t extends E.$WMb {
					constructor() {
						super({
							id: "workbench.scm.action.expandAllRepositories",
							title: (0, D.localize)(9113, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.expandAll,
							menu: {
								id: p.$XX.SCMTitle,
								group: "navigation",
								when: c.$Kj.and(
									c.$Kj.equals("view", d.$_6),
									e.$aQc.SCMViewIsAnyRepositoryCollapsible.isEqualTo(!0),
									e.$aQc.SCMViewAreAllRepositoriesCollapsed.isEqualTo(!0),
								),
							},
						});
					}
					async runInView(wt, We) {
						We.expandAllRepositories();
					}
				}
				(0, p.$4X)(Xt), (0, p.$4X)($t);
				var ut;
				(function (Ti) {
					Ti.CancelAction = "scm.input.cancelAction";
				})(ut || (ut = {}));
				var Et;
				(function (Ti) {
					Ti.LastActionId = "scm.input.lastActionId";
				})(Et || (Et = {}));
				let Tt = class extends o.$sj {
					get runningActions() {
						return this.b;
					}
					constructor(wt, We) {
						super(), (this.n = wt), (this.t = We), (this.b = new Set());
					}
					async q(wt) {
						try {
							if (
								this.runningActions.size !== 0 &&
								(this.c?.cancel(), wt.id === ut.CancelAction)
							)
								return;
							const We = [];
							for (const _e of this.n.repository.provider.groups)
								We.push({
									resourceGroupId: _e.id,
									resources: [..._e.resources.map((Si) => Si.sourceUri)],
								});
							this.b.add(wt),
								(this.c = new Be.$Ce()),
								await wt.run(
									this.n.repository.provider.rootUri,
									We,
									this.c.token,
								);
						} finally {
							this.b.delete(wt),
								this.b.size === 0 &&
									this.t.store(
										Et.LastActionId,
										wt.id,
										M.StorageScope.PROFILE,
										M.StorageTarget.USER,
									);
						}
					}
				};
				Tt = Ne([j(1, M.$lq)], Tt);
				let qt = class extends Ie.$Syb {
					get dropdownActions() {
						return this.b;
					}
					get dropdownAction() {
						return this.c;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi, Hi, Ji) {
						super(
							wt,
							{ resetMenu: p.$XX.SCMInputBox, ...We },
							_e,
							Si,
							gi,
							Pi,
							ki,
							Ji,
						),
							(this.R = _e),
							(this.S = Si),
							(this.U = Hi),
							(this.b = []),
							(this.P = new t.$re()),
							(this.onDidChange = this.P.event),
							(this.Q = this.D(new w.$2c())),
							(this.c = new o.$rj(
								"scmInputMoreActions",
								(0, D.localize)(9114, null),
								"codicon-chevron-down",
							)),
							(this.O = new p.$2X(
								{
									id: ut.CancelAction,
									title: (0, D.localize)(9115, null),
									icon: _.$ak.debugStop,
								},
								void 0,
								void 0,
								void 0,
								void 0,
								Si,
								ki,
							));
					}
					setInput(wt) {
						this.Q.value = new w.$Zc();
						const We = this.S.createOverlay([
								["scmProvider", wt.repository.provider.contextValue],
								[
									"scmProviderRootUri",
									wt.repository.provider.rootUri?.toString(),
								],
								["scmProviderHasRootUri", !!wt.repository.provider.rootUri],
							]),
							_e = this.Q.value.add(
								this.R.createMenu(p.$XX.SCMInputBox, We, {
									emitEventsForSubmenuChanges: !0,
								}),
							),
							Si = () =>
								wt.repository.provider.groups.some(
									(ki) => ki.resources.length > 0,
								),
							gi = () => {
								const ki = [];
								(0, le.$Kyb)(_e, { shouldForwardArgs: !0 }, ki);
								for (const Hi of ki) Hi.enabled = Si();
								this.c.enabled = Si();
								let Pi;
								if (ki.length === 1) Pi = ki[0];
								else if (ki.length > 1) {
									const Hi = this.U.get(
										Et.LastActionId,
										M.StorageScope.PROFILE,
										"",
									);
									Pi = ki.find((Ji) => Ji.id === Hi) ?? ki[0];
								}
								(this.b = ki.length === 1 ? [] : ki),
									super.setActions(Pi ? [Pi] : [], []),
									this.P.fire();
							};
						this.Q.value.add(_e.onDidChange(() => gi())),
							this.Q.value.add(
								wt.repository.provider.onDidChangeResources(() => gi()),
							),
							this.Q.value.add(
								this.U.onDidChangeValue(
									M.StorageScope.PROFILE,
									Et.LastActionId,
									this.Q.value,
								)(() => gi()),
							),
							(this.actionRunner = new Tt(wt, this.U)),
							this.Q.value.add(
								this.actionRunner.onWillRun((ki) => {
									this.actionRunner.runningActions.size === 0 &&
										(super.setActions([this.O], []), this.P.fire());
								}),
							),
							this.Q.value.add(
								this.actionRunner.onDidRun((ki) => {
									this.actionRunner.runningActions.size === 0 && gi();
								}),
							),
							gi();
					}
				};
				qt = Ne(
					[
						j(2, p.$YX),
						j(3, c.$6j),
						j(4, h.$Xxb),
						j(5, n.$ek),
						j(6, g.$uZ),
						j(7, M.$lq),
						j(8, Y.$km),
					],
					qt,
				);
				class At {
					constructor(wt, We) {
						(this.f = wt),
							(this.i = We),
							(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.c = ee.$njb),
							(this.d = new w.$Zc());
						const _e = t.Event.filter(
							this.i.onDidChangeConfiguration,
							(Si) =>
								Si.affectsConfiguration("editor.accessibilitySupport") ||
								Si.affectsConfiguration("editor.cursorBlinking") ||
								Si.affectsConfiguration("editor.fontFamily") ||
								Si.affectsConfiguration("editor.rulers") ||
								Si.affectsConfiguration("editor.wordWrap") ||
								Si.affectsConfiguration("scm.inputFontFamily") ||
								Si.affectsConfiguration("scm.inputFontSize"),
							this.d,
						);
						this.d.add(_e(() => this.b.fire()));
					}
					getEditorConstructionOptions() {
						const wt = this.k(),
							We = this.m(),
							_e = this.o(We);
						return {
							...(0, R.$xYb)(this.i),
							...this.n(),
							cursorWidth: 1,
							dragAndDrop: !0,
							dropIntoEditor: { enabled: !0 },
							fontFamily: wt,
							fontSize: We,
							formatOnType: !0,
							lineDecorationsWidth: 6,
							lineHeight: _e,
							overflowWidgetsDomNode: this.f,
							padding: { top: 2, bottom: 2 },
							quickSuggestions: !1,
							renderWhitespace: "none",
							scrollbar: { alwaysConsumeMouseWheel: !1, vertical: "hidden" },
							wrappingIndent: "none",
							wrappingStrategy: "advanced",
						};
					}
					getEditorOptions() {
						const wt = this.k(),
							We = this.m(),
							_e = this.o(We),
							Si = this.i.getValue("editor.accessibilitySupport"),
							gi = this.i.getValue("editor.cursorBlinking");
						return {
							...this.n(),
							accessibilitySupport: Si,
							cursorBlinking: gi,
							fontFamily: wt,
							fontSize: We,
							lineHeight: _e,
						};
					}
					k() {
						const wt = this.i.getValue("scm.inputFontFamily").trim();
						return wt.toLowerCase() === "editor"
							? this.i.getValue("editor.fontFamily").trim()
							: wt.length !== 0 && wt.toLowerCase() !== "default"
								? wt
								: this.c;
					}
					m() {
						return this.i.getValue("scm.inputFontSize");
					}
					n() {
						const wt = this.i.inspect("editor.rulers", {
								overrideIdentifier: "scminput",
							}),
							We = wt.overrideIdentifiers?.includes("scminput")
								? xe.EditorOptions.rulers.validate(wt.value)
								: [],
							_e = this.i.inspect("editor.wordWrap", {
								overrideIdentifier: "scminput",
							}),
							Si = _e.overrideIdentifiers?.includes("scminput")
								? xe.EditorOptions.wordWrap.validate(_e.value)
								: "on";
						return { rulers: We, wordWrap: Si };
					}
					o(wt) {
						return Math.round(wt * 1.5);
					}
					dispose() {
						this.d.dispose();
					}
				}
				let Yt = class {
					static {
						kt = this;
					}
					static {
						this.b = {
							[d.InputValidationType.Information]: 5e3,
							[d.InputValidationType.Warning]: 8e3,
							[d.InputValidationType.Error]: 1e4,
						};
					}
					get input() {
						return this.p?.input;
					}
					set input(wt) {
						if (wt === this.input) return;
						if (
							(this.clearValidation(),
							this.d.classList.remove("synthetic-focus"),
							this.t.clear(),
							this.q.set(wt?.repository.id),
							!wt)
						) {
							this.i.setModel(void 0), (this.p = void 0);
							return;
						}
						const We = wt.repository.provider.inputBoxTextModel;
						this.i.setModel(We),
							this.D.getValue("editor.wordBasedSuggestions", {
								resource: We.uri,
							}) !== "off" &&
								this.D.updateValue(
									"editor.wordBasedSuggestions",
									"off",
									{ resource: We.uri },
									y.ConfigurationTarget.MEMORY,
								);
						const _e = new $.$Kh(200),
							Si = async () => {
								const un = this.i.getSelection()?.getStartPosition(),
									yn = un && We.getOffsetAt(un),
									Rn = We.getValue();
								this.A(await wt.validateInput(Rn, yn || 0));
							},
							gi = () => _e.trigger(Si);
						this.t.add(_e), this.t.add(this.i.onDidChangeCursorPosition(gi));
						const ki = this.B.getCreationOptions(
								We.getLanguageId(),
								We.uri,
								We.isForSimpleWidget,
							),
							Pi = t.Event.filter(
								this.i.onKeyDown,
								(un) => un.keyCode === ne.KeyCode.Enter,
								this.t,
							);
						this.t.add(
							Pi(() => We.detectIndentation(ki.insertSpaces, ki.tabSize)),
						),
							We.setValue(wt.value),
							this.t.add(
								wt.onDidChange(({ value: un, reason: yn }) => {
									const Rn = We.getValue();
									if (un === Rn) return;
									We.pushStackElement(),
										We.pushEditOperations(
											null,
											[Ke.$jL.replaceMove(We.getFullModelRange(), un)],
											() => [],
										);
									const _i =
										yn === d.SCMInputChangeReason.HistoryPrevious
											? We.getFullModelRange().getStartPosition()
											: We.getFullModelRange().getEndPosition();
									this.i.setPosition(_i),
										this.i.revealPositionInCenterIfOutsideViewport(_i);
								}),
							),
							this.t.add(wt.onDidChangeFocus(() => this.focus())),
							this.t.add(
								wt.onDidChangeValidationMessage((un) =>
									this.A(un, { focus: !0, timeout: !0 }),
								),
							),
							this.t.add(wt.onDidChangeValidateInput((un) => gi())),
							this.t.add(
								We.onDidChangeContent(() => {
									wt.setValue(We.getValue(), !0), gi();
								}),
							);
						const Hi = () => {
							const un = this.C.lookupKeybinding("scm.acceptInput"),
								yn = un ? un.getLabel() : H.$m ? "Cmd+Enter" : "Ctrl+Enter",
								Rn = (0, q.$kf)(wt.placeholder, yn);
							this.i.updateOptions({ placeholder: Rn });
						};
						this.t.add(wt.onDidChangePlaceholder(Hi)),
							this.t.add(this.C.onDidUpdateKeybindings(Hi)),
							Hi();
						let Ji = "";
						this.t.add(
							(0, Re.autorun)((un) => {
								if (!wt.visible) return;
								const yn = Ji;
								Ji = wt.repository.provider.commitTemplate.read(un);
								const Rn = We.getValue();
								(Rn && Rn !== yn) || We.setValue(Ji);
							}),
						);
						const cn = (un) => {
							this.i.updateOptions({ readOnly: !un });
						};
						this.t.add(wt.onDidChangeEnablement((un) => cn(un))),
							cn(wt.enabled),
							this.n.setInput(wt),
							(this.p = { input: wt, textModel: We });
					}
					get selections() {
						return this.i.getSelections();
					}
					set selections(wt) {
						wt && this.i.setSelections(wt);
					}
					A(wt, We) {
						this.x && (clearTimeout(this.x), (this.x = 0)),
							(this.u = wt),
							this.K(),
							We?.focus && !this.hasFocus() && this.focus(),
							wt &&
								We?.timeout &&
								(this.x = setTimeout(() => this.A(void 0), kt.b[wt.type]));
					}
					constructor(wt, We, _e, Si, gi, ki, Pi, Hi, Ji, cn, un) {
						(this.B = Si),
							(this.C = gi),
							(this.D = ki),
							(this.E = Pi),
							(this.F = Hi),
							(this.G = Ji),
							(this.H = cn),
							(this.I = un),
							(this.o = new w.$Zc()),
							(this.t = new w.$Zc()),
							(this.w = !1),
							(this.y = !1),
							(this.z = !1),
							(this.d = (0, C.$fhb)(wt, (0, C.$)(".scm-editor"))),
							(this.f = (0, C.$fhb)(this.d, (0, C.$)(".scm-editor-container"))),
							(this.m = (0, C.$fhb)(this.d, (0, C.$)(".scm-editor-toolbar"))),
							(this.c = _e.createScoped(this.d)),
							(this.q = this.c.createKey("scmRepository", void 0)),
							(this.k = new At(We, this.D)),
							this.o.add(this.k.onDidChange(this.J, this)),
							this.o.add(this.k);
						const yn = {
								contributions:
									B.EditorExtensionsRegistry.getSomeEditorContributions([
										be.$BBb.ID,
										J.$YBb.ID,
										x.$2Mb.ID,
										ue.$zAb.ID,
										ye.$Hhc.ID,
										fe.$g3b.ID,
										F.$_2b.ID,
										Oe.$Thc.ID,
										Me.$whc.ID,
										De.$2Ob.ID,
										ge.$O1b.ID,
										W.$6Ob.ID,
										U.$_Xb.ID,
										me.$Szb.ID,
										Ze.$Ujc.ID,
										z.$aYb,
										G.$aDb.ID,
										V.$KDb.ID,
									]),
								isSimpleWidget: !0,
							},
							Rn = new K.$Ki([c.$6j, this.c]),
							_i = Pi.createChild(Rn, this.o),
							Bn = this.k.getEditorConstructionOptions();
						(this.i = _i.createInstance(A.$rwb, this.f, Bn, yn)),
							this.o.add(this.i),
							this.o.add(
								this.i.onDidFocusEditorText(() => {
									this.input?.repository && this.F.focus(this.input.repository),
										this.d.classList.add("synthetic-focus"),
										this.K();
								}),
							),
							this.o.add(
								this.i.onDidBlurEditorText(() => {
									this.d.classList.remove("synthetic-focus"),
										setTimeout(() => {
											(!this.u || !this.w) && this.clearValidation();
										}, 0);
								}),
							),
							this.o.add(
								this.i.onDidBlurEditorWidget(() => {
									ue.$zAb.get(this.i)?.clearWidgets(),
										fe.$g3b.get(this.i)?.clearWidgets();
								}),
							);
						const Mn = this.c.createKey("scmInputIsInFirstPosition", !1),
							zn = this.c.createKey("scmInputIsInLastPosition", !1);
						this.o.add(
							this.i.onDidChangeCursorPosition(({ position: $n }) => {
								const Ln = this.i._getViewModel(),
									wn = Ln.getLineCount(),
									Hn = Ln.getLineLength(wn) + 1,
									Yn =
										Ln.coordinatesConverter.convertModelPositionToViewPosition(
											$n,
										);
								Mn.set(Yn.lineNumber === 1 && Yn.column === 1),
									zn.set(Yn.lineNumber === wn && Yn.column === Hn);
							}),
						),
							this.o.add(
								this.i.onDidScrollChange(($n) => {
									this.m.classList.toggle(
										"scroll-decoration",
										$n.scrollTop > 0,
									);
								}),
							),
							t.Event.filter(this.D.onDidChangeConfiguration, ($n) =>
								$n.affectsConfiguration("scm.showInputActionButton"),
							)(() => this.layout(), this, this.o),
							(this.onDidChangeContentHeight = t.Event.signal(
								t.Event.filter(
									this.i.onDidContentSizeChange,
									($n) => $n.contentHeightChanged,
									this.o,
								),
							)),
							(this.n = _i.createInstance(qt, this.m, {
								actionViewItemProvider: ($n, Ln) =>
									$n instanceof p.$2X && this.n.dropdownActions.length > 1
										? Pi.createInstance(
												Se.$OYb,
												$n,
												this.n.dropdownAction,
												this.n.dropdownActions,
												"",
												this.I,
												{
													actionRunner: this.n.actionRunner,
													hoverDelegate: Ln.hoverDelegate,
												},
											)
										: (0, le.$Pyb)(Pi, $n, Ln),
								menuOptions: { shouldForwardArgs: !0 },
							})),
							this.o.add(this.n.onDidChange(() => this.layout())),
							this.o.add(this.n);
					}
					getContentHeight() {
						const wt = this.i.getOption(xe.EditorOption.lineHeight),
							{ top: We, bottom: _e } = this.i.getOption(
								xe.EditorOption.padding,
							),
							Si = this.D.getValue("scm.inputMinLineCount"),
							ki =
								(typeof Si == "number" ? (0, ke.$Zm)(Si, 1, 50) : 1) * wt +
								We +
								_e,
							Pi = this.D.getValue("scm.inputMaxLineCount"),
							Ji =
								(typeof Pi == "number" ? (0, ke.$Zm)(Pi, 1, 50) : 10) * wt +
								We +
								_e;
						return (0, ke.$Zm)(this.i.getContentHeight(), ki, Ji);
					}
					layout() {
						const wt = this.getContentHeight(),
							We = this.L(),
							_e = new C.$pgb(this.d.clientWidth - We, wt);
						if (_e.width < 0) {
							this.y = !0;
							return;
						}
						(this.y = !1), this.i.layout(_e), this.K();
						const Si = this.D.getValue("scm.showInputActionButton") === !0;
						this.m.classList.toggle("hidden", !Si || this.n?.isEmpty() === !0),
							this.z && ((this.z = !1), this.focus());
					}
					focus() {
						if (this.y) {
							(this.y = !1), (this.z = !0);
							return;
						}
						this.i.focus(), this.d.classList.add("synthetic-focus");
					}
					hasFocus() {
						return this.i.hasTextFocus();
					}
					J() {
						this.i.updateOptions(this.k.getEditorOptions());
					}
					K() {
						if (
							(this.clearValidation(),
							this.d.classList.toggle(
								"validation-info",
								this.u?.type === d.InputValidationType.Information,
							),
							this.d.classList.toggle(
								"validation-warning",
								this.u?.type === d.InputValidationType.Warning,
							),
							this.d.classList.toggle(
								"validation-error",
								this.u?.type === d.InputValidationType.Error,
							),
							!this.u || !this.i.hasTextFocus())
						)
							return;
						const wt = new w.$Zc();
						this.v = this.G.showContextView({
							getAnchor: () => this.d,
							render: (We) => {
								(this.d.style.borderBottomLeftRadius = "0"),
									(this.d.style.borderBottomRightRadius = "0");
								const _e = (0, C.$fhb)(
									We,
									(0, C.$)(".scm-editor-validation-container"),
								);
								_e.classList.toggle(
									"validation-info",
									this.u.type === d.InputValidationType.Information,
								),
									_e.classList.toggle(
										"validation-warning",
										this.u.type === d.InputValidationType.Warning,
									),
									_e.classList.toggle(
										"validation-error",
										this.u.type === d.InputValidationType.Error,
									),
									(_e.style.width = `${this.d.clientWidth + 2}px`);
								const Si = (0, C.$fhb)(_e, (0, C.$)(".scm-editor-validation")),
									gi = this.u.message;
								if (typeof gi == "string") Si.textContent = gi;
								else {
									const Ji = (0, C.$dhb)(Si);
									wt.add(Ji),
										wt.add(Ji.onDidFocus(() => (this.w = !0))),
										wt.add(
											Ji.onDidBlur(() => {
												(this.w = !1),
													(this.d.style.borderBottomLeftRadius = "2px"),
													(this.d.style.borderBottomRightRadius = "2px"),
													this.G.hideContextView();
											}),
										);
									const un = wt
										.add(this.E.createInstance(oe.$Qzb, {}))
										.render(gi, {
											actionHandler: {
												callback: (yn) => {
													(0, oe.$Rzb)(this.H, yn, gi.isTrusted),
														(this.d.style.borderBottomLeftRadius = "2px"),
														(this.d.style.borderBottomRightRadius = "2px"),
														this.G.hideContextView();
												},
												disposables: wt,
											},
										});
									wt.add(un), Si.appendChild(un.element);
								}
								const ki = (0, C.$fhb)(
										_e,
										(0, C.$)(".scm-editor-validation-actions"),
									),
									Pi = new f.$eib(ki),
									Hi = new o.$rj(
										"scmInputWidget.validationMessage.close",
										(0, D.localize)(9116, null),
										te.ThemeIcon.asClassName(_.$ak.close),
										!0,
										() => {
											this.G.hideContextView(),
												(this.d.style.borderBottomLeftRadius = "2px"),
												(this.d.style.borderBottomRightRadius = "2px");
										},
									);
								return (
									wt.add(Pi), Pi.push(Hi, { icon: !0, label: !1 }), w.$1c.None
								);
							},
							onHide: () => {
								(this.w = !1),
									(this.d.style.borderBottomLeftRadius = "2px"),
									(this.d.style.borderBottomRightRadius = "2px"),
									wt.dispose();
							},
							anchorAlignment: Q.AnchorAlignment.LEFT,
						});
					}
					L() {
						const wt = this.D.getValue("scm.showInputActionButton");
						return !this.n || !wt || this.n?.isEmpty() === !0
							? 0
							: this.n.dropdownActions.length === 0
								? 26
								: 39;
					}
					clearValidation() {
						this.v?.close(), (this.v = void 0), (this.w = !1);
					}
					dispose() {
						(this.input = void 0),
							this.t.dispose(),
							this.clearValidation(),
							this.o.dispose();
					}
				};
				Yt = kt = Ne(
					[
						j(2, c.$6j),
						j(3, O.$QO),
						j(4, g.$uZ),
						j(5, y.$gj),
						j(6, a.$Li),
						j(7, d.$d7),
						j(8, h.$Wxb),
						j(9, X.$7rb),
						j(10, h.$Xxb),
					],
					Yt,
				);
				let ni = class extends E.$TMb {
					get viewMode() {
						return this.sb;
					}
					set viewMode(wt) {
						this.sb !== wt &&
							((this.sb = wt),
							(this.viewSortKey = this.Lc()),
							this.Oc(),
							this.Ec(),
							this.cc.fire(wt),
							this.kc.set(wt),
							this.Pc(this.Fb.getFileIconTheme()),
							this.xc.store(
								"scm.viewMode",
								wt,
								M.StorageScope.WORKSPACE,
								M.StorageTarget.USER,
							));
					}
					get viewSortKey() {
						return this.dc;
					}
					set viewSortKey(wt) {
						this.dc !== wt &&
							((this.dc = wt),
							this.Oc(),
							this.lc.set(wt),
							this.ec.fire(wt),
							this.sb === at.List &&
								this.xc.store(
									"scm.viewSortKey",
									wt,
									M.StorageScope.WORKSPACE,
									M.StorageTarget.USER,
								));
					}
					constructor(
						wt,
						We,
						_e,
						Si,
						gi,
						ki,
						Pi,
						Hi,
						Ji,
						cn,
						un,
						yn,
						Rn,
						_i,
						Bn,
						Mn,
						zn,
						$n,
						Ln,
					) {
						super(
							{ ...wt, titleMenuId: p.$XX.SCMTitle },
							cn,
							yn,
							Bn,
							Mn,
							_i,
							Rn,
							zn,
							un,
							$n,
							Ln,
						),
							(this.sc = We),
							(this.tc = _e),
							(this.uc = Si),
							(this.vc = gi),
							(this.wc = ki),
							(this.xc = Pi),
							(this.yc = Hi),
							(this.zc = Ji),
							(this.cc = new t.$re()),
							(this.onDidChangeViewMode = this.cc.event),
							(this.ec = new t.$re()),
							(this.onDidChangeViewSortKey = this.ec.event),
							(this.fc = new w.$0c()),
							(this.gc = new w.$Zc()),
							(this.hc = new $.$Hh()),
							(this.ic = new $.$Gh()),
							(this.jc = new $.$Gh()),
							(this.rc = new w.$Zc()),
							(this.sb = this.Kc()),
							(this.dc = this.Lc()),
							(this.kc = e.$aQc.SCMViewMode.bindTo(Mn)),
							this.kc.set(this.sb),
							(this.lc = e.$aQc.SCMViewSortKey.bindTo(Mn)),
							this.lc.set(this.viewSortKey),
							(this.mc = e.$aQc.SCMViewAreAllRepositoriesCollapsed.bindTo(Mn)),
							(this.nc = e.$aQc.SCMViewIsAnyRepositoryCollapsible.bindTo(Mn)),
							(this.oc = e.$aQc.SCMProvider.bindTo(Mn)),
							(this.pc = e.$aQc.SCMProviderRootUri.bindTo(Mn)),
							(this.qc = e.$aQc.SCMProviderHasRootUri.bindTo(Mn)),
							(this.b = new t.$re()),
							(this.c = {
								height: void 0,
								width: void 0,
								onDidChange: this.b.event,
							}),
							this.xc.onDidChangeValue(
								M.StorageScope.WORKSPACE,
								void 0,
								this.rc,
							)(
								(wn) => {
									switch (wn.key) {
										case "scm.viewMode":
											this.viewMode = this.Kc();
											break;
										case "scm.viewSortKey":
											this.viewSortKey = this.Lc();
											break;
									}
								},
								this,
								this.rc,
							),
							this.xc.onWillSaveState(
								(wn) => {
									(this.viewMode = this.Kc()),
										(this.viewSortKey = this.Lc()),
										this.Nc();
								},
								this,
								this.rc,
							),
							t.Event.any(
								this.vc.onDidAddRepository,
								this.vc.onDidRemoveRepository,
							)(() => this.eb.fire(), this, this.rc),
							this.rc.add(this.ic),
							this.rc.add(this.jc);
					}
					X(wt = this.c.height, We = this.c.width) {
						wt !== void 0 &&
							(We !== void 0 && super.X(wt, We),
							(this.c.height = wt),
							(this.c.width = We),
							this.b.fire(),
							(this.m.style.height = `${wt}px`),
							this.n.layout(wt, We));
					}
					W(wt) {
						super.W(wt),
							(this.m = (0, C.$fhb)(wt, (0, C.$)(".scm-view.show-file-icons"))),
							this.m.classList.add("file-icon-themable-tree"),
							this.m.classList.add("show-file-icons");
						const We = () =>
							this.m.classList.toggle(
								"show-actions",
								this.Ab.getValue("scm.alwaysShowActions"),
							);
						t.Event.filter(
							this.Ab.onDidChangeConfiguration,
							(gi) => gi.affectsConfiguration("scm.alwaysShowActions"),
							this.rc,
						)(We, this, this.rc),
							We();
						const _e = () => {
							const gi = this.Ab.getValue("scm.providerCountBadge");
							this.m.classList.toggle("hide-provider-counts", gi === "hidden"),
								this.m.classList.toggle("auto-provider-counts", gi === "auto");
						};
						t.Event.filter(
							this.Ab.onDidChangeConfiguration,
							(gi) => gi.affectsConfiguration("scm.providerCountBadge"),
							this.rc,
						)(_e, this, this.rc),
							_e();
						const Si = this.Mc();
						this.Cc(this.m, Si),
							this.onDidChangeBodyVisibility(
								async (gi) => {
									gi
										? this.hc.queue(async () => {
												await this.n.setInput(this.wc, Si),
													t.Event.filter(
														this.Ab.onDidChangeConfiguration,
														(ki) =>
															ki.affectsConfiguration(
																"scm.alwaysShowRepositories",
															),
														this.gc,
													)(
														() => {
															this.bc(), this.Oc();
														},
														this,
														this.gc,
													),
													t.Event.filter(
														this.Ab.onDidChangeConfiguration,
														(ki) =>
															ki.affectsConfiguration(
																"scm.inputMinLineCount",
															) ||
															ki.affectsConfiguration(
																"scm.inputMaxLineCount",
															) ||
															ki.affectsConfiguration("scm.showActionButton"),
														this.gc,
													)(() => this.Oc(), this, this.gc),
													this.tc.onDidActiveEditorChange(
														this.Ec,
														this,
														this.gc,
													),
													this.wc.onDidChangeVisibleRepositories(
														this.Fc,
														this,
														this.gc,
													),
													this.Fc({
														added: this.wc.visibleRepositories,
														removed: S.Iterable.empty(),
													}),
													typeof this.f == "number" &&
														((this.n.scrollTop = this.f), (this.f = void 0)),
													this.Rc();
											})
										: (this.gc.clear(),
											this.Fc({
												added: S.Iterable.empty(),
												removed: [...this.fc.keys()],
											}),
											(this.f = this.n.scrollTop),
											this.Rc());
								},
								this,
								this.rc,
							),
							this.rc.add(this.Db.createInstance(Ui)),
							this.Fb.onDidFileIconThemeChange(this.Pc, this, this.rc),
							this.Pc(this.Fb.getFileIconTheme());
					}
					Cc(wt, We) {
						const _e = (0, C.$)(
							".scm-overflow-widgets-container.monaco-editor",
						);
						(this.L = this.Db.createInstance(Xe, this.c, _e, (cn, un) => {
							try {
								this.n.updateElementHeight(cn, un);
							} catch {}
						})),
							(this.ab = this.Db.createInstance(Ye)),
							(this.t = this.Db.createInstance(m.$uPb, {
								onDidChangeVisibility: this.onDidChangeBodyVisibility,
							})),
							this.rc.add(this.t);
						const Si = new Lt(() => this.Ic());
						Si.onWillRun(() => this.n.domFocus(), this, this.rc),
							this.rc.add(Si);
						const gi = new Vt();
						gi.onWillRun(() => this.n.domFocus(), this, this.rc),
							this.rc.add(gi);
						const ki = new Gt();
						ki.onWillRun(() => this.n.domFocus(), this, this.rc),
							this.rc.add(ki);
						const Pi = this.Db.createInstance(
							Ut,
							this.Cb.getViewLocationById(this.id),
							this.zc.getSideBarPosition(),
						);
						this.rc.add(Pi);
						const Hi = this.Db.createInstance(bi, () => this.viewMode);
						this.rc.add(Hi);
						const Ji = (0, bt.$Mwb)("scm.compactFolders", !0, this.Ab);
						(this.n = this.Db.createInstance(
							l.$GMb,
							"SCM Tree Repo",
							wt,
							new Jt(this.L),
							new si(),
							[
								this.L,
								this.ab,
								this.Db.createInstance(
									Z.$OPc,
									p.$XX.SCMTitle,
									(0, s.$GPc)(this.Db),
								),
								this.Db.createInstance(It, (0, s.$GPc)(this.Db)),
								this.Db.createInstance(
									xt,
									() => this.viewMode,
									this.t,
									(0, s.$GPc)(this.Db),
									Si,
								),
							],
							Hi,
							{
								horizontalScrolling: !1,
								setRowLineHeight: !1,
								transformOptimization: !1,
								filter: new Zt(),
								dnd: new ze(this.Db),
								identityProvider: new Wt(),
								sorter: new ci(
									() => this.viewMode,
									() => this.viewSortKey,
								),
								keyboardNavigationLabelProvider: this.Db.createInstance(
									ri,
									() => this.viewMode,
								),
								overrideStyles: this.Zb().listOverrideStyles,
								compressionEnabled: Ji.get(),
								collapseByDefault: (cn) =>
									(0, s.$oPc)(cn) ||
									(0, s.$rPc)(cn) ||
									(0, s.$tPc)(cn) ||
									(0, s.$zPc)(cn)
										? !1
										: (We?.expanded ?? []).indexOf($i(cn)) === -1,
								accessibilityProvider: this.Db.createInstance(tt),
							},
						)),
							this.rc.add(this.n),
							this.n.onDidOpen(this.Dc, this, this.rc),
							this.n.onContextMenu(this.Gc, this, this.rc),
							this.n.onDidScroll(this.L.clearValidation, this.L, this.rc),
							t.Event.filter(
								this.n.onDidChangeCollapseState,
								(cn) => (0, s.$oPc)(cn.node.element?.element),
								this.rc,
							)(this.Rc, this, this.rc),
							this.rc.add(
								(0, Re.autorun)((cn) => {
									this.n.updateOptions({ compressionEnabled: Ji.read(cn) });
								}),
							),
							(0, C.$fhb)(wt, _e);
					}
					async Dc(wt) {
						if (wt.element) {
							if ((0, s.$oPc)(wt.element)) {
								this.wc.focus(wt.element);
								return;
							} else if ((0, s.$pPc)(wt.element)) {
								this.wc.focus(wt.element.repository);
								const We = this.L.getRenderedInputWidget(wt.element);
								if (We) {
									We.focus(), this.n.setFocus([], wt.browserEvent);
									const _e = this.n.getSelection();
									_e.length === 1 &&
										_e[0] === wt.element &&
										setTimeout(() => this.n.setSelection([]));
								}
								return;
							} else if ((0, s.$qPc)(wt.element)) {
								this.wc.focus(wt.element.repository),
									this.ab.focusActionButton(wt.element),
									this.n.setFocus([], wt.browserEvent);
								return;
							} else if ((0, s.$rPc)(wt.element)) {
								const We = wt.element.provider,
									_e = S.Iterable.find(
										this.vc.repositories,
										(Si) => Si.provider === We,
									);
								_e && this.wc.focus(_e);
								return;
							} else if ((0, s.$sPc)(wt.element)) {
								if (
									wt.element.command?.id === re.$zWb ||
									wt.element.command?.id === re.$AWb
								)
									if (
										(0, C.$9gb)(wt.browserEvent) &&
										wt.browserEvent.button === 1
									) {
										const Si = wt.element.resourceGroup,
											gi = `${Si.provider.label}: ${Si.label}`;
										await Ae.$XPc.openMultiFileDiffEditor(
											this.tc,
											gi,
											Si.provider.rootUri,
											Si.id,
											{
												...wt.editorOptions,
												viewState: {
													revealData: {
														resource: {
															original: wt.element.multiDiffEditorOriginalUri,
															modified: wt.element.multiDiffEditorModifiedUri,
														},
													},
												},
												preserveFocus: !0,
											},
										);
									} else
										await this.sc.executeCommand(
											wt.element.command.id,
											...(wt.element.command.arguments || []),
											wt,
										);
								else if (
									(await wt.element.open(!!wt.editorOptions.preserveFocus),
									wt.editorOptions.pinned)
								) {
									const Si = this.tc.activeEditorPane;
									Si?.group.pinEditor(Si.input);
								}
								const We = wt.element.resourceGroup.provider,
									_e = S.Iterable.find(
										this.vc.repositories,
										(Si) => Si.provider === We,
									);
								_e && this.wc.focus(_e);
							} else if ((0, s.$tPc)(wt.element)) {
								const We = wt.element.context.provider,
									_e = S.Iterable.find(
										this.vc.repositories,
										(Si) => Si.provider === We,
									);
								_e && this.wc.focus(_e);
								return;
							} else if ((0, s.$uPc)(wt.element)) {
								this.wc.focus(wt.element.repository);
								return;
							} else if ((0, s.$vPc)(wt.element)) {
								this.wc.focus(wt.element.historyItemGroup.repository);
								return;
							} else if ((0, s.$wPc)(wt.element)) {
								const We = wt.element.historyItemViewModel.historyItem,
									_e = We.parentIds.length > 0 ? We.parentIds[0] : void 0,
									gi = await wt.element.repository.provider.historyProvider
										.get()
										?.provideHistoryItemChanges(We.id, _e);
								if (gi) {
									const ki = `${We.id.substring(0, 8)} - ${We.message}`,
										Pi = wt.element.repository.provider.rootUri,
										Hi = Pi ? Pi.path : wt.element.repository.provider.label,
										Ji = I.URI.from(
											{
												scheme: "scm-history-item",
												path: `${Hi}/${_e}..${We.id}`,
											},
											!0,
										);
									await this.sc.executeCommand(
										"_workbench.openMultiDiffEditor",
										{ title: ki, multiDiffSourceUri: Ji, resources: gi },
									);
								}
								this.wc.focus(wt.element.repository);
								return;
							} else if ((0, s.$yPc)(wt.element)) {
								wt.element.originalUri &&
									wt.element.modifiedUri &&
									(await this.sc.executeCommand(
										re.$AWb,
										...(0, s.$BPc)(
											wt.element.uri,
											wt.element.originalUri,
											wt.element.modifiedUri,
										),
										wt,
									)),
									this.wc.focus(
										wt.element.historyItem.historyItemGroup.repository,
									);
								return;
							} else if ((0, s.$zPc)(wt.element)) {
								this.wc.focus(wt.element.context.historyItemGroup.repository);
								return;
							}
						} else return;
					}
					Ec() {
						if (!this.Ab.getValue("scm.autoReveal")) return;
						const wt = N.$A1.getOriginalUri(this.tc.activeEditor, {
							supportSideBySide: N.SideBySideEditor.PRIMARY,
						});
						wt &&
							((this.n
								.getFocus()
								.some(
									(We) =>
										(0, s.$sPc)(We) && this.yc.extUri.isEqual(We.sourceUri, wt),
								) &&
								this.n
									.getSelection()
									.some(
										(We) =>
											(0, s.$sPc)(We) &&
											this.yc.extUri.isEqual(We.sourceUri, wt),
									)) ||
								this.ic.queue(() =>
									this.hc.queue(async () => {
										for (const We of this.wc.visibleRepositories)
											if (this.fc.get(We))
												for (
													let Si = We.provider.groups.length - 1;
													Si >= 0;
													Si--
												) {
													const gi = We.provider.groups[Si],
														ki =
															this.viewMode === at.Tree
																? gi.resourceTree.getNode(wt)?.element
																: gi.resources.find((Pi) =>
																		this.yc.extUri.isEqual(Pi.sourceUri, wt),
																	);
													if (ki) {
														await this.n.expandTo(ki),
															this.n.reveal(ki),
															this.n.setSelection([ki]),
															this.n.setFocus([ki]);
														return;
													}
												}
									}),
								));
					}
					Fc({ added: wt, removed: We }) {
						for (const _e of wt) {
							const Si = new w.$Zc();
							Si.add(_e.provider.onDidChange(() => this.Oc(_e))),
								Si.add(_e.input.onDidChangeVisibility(() => this.Oc(_e))),
								Si.add(
									_e.provider.onDidChangeResourceGroups(() => this.Oc(_e)),
								);
							const gi = Si.add(new w.$0c()),
								ki = () => {
									for (const [Pi] of gi)
										_e.provider.groups.includes(Pi) || gi.deleteAndDispose(Pi);
									for (const Pi of _e.provider.groups)
										if (!gi.has(Pi)) {
											const Hi = new w.$Zc();
											Hi.add(Pi.onDidChange(() => this.Oc(_e))),
												Hi.add(Pi.onDidChangeResources(() => this.Oc(_e))),
												gi.set(Pi, Hi);
										}
								};
							Si.add(_e.provider.onDidChangeResourceGroups(ki)),
								ki(),
								this.fc.set(_e, Si);
						}
						for (const _e of We) this.fc.deleteAndDispose(_e);
						this.Oc(), this.Ec();
					}
					Gc(wt) {
						if (!wt.element) {
							const ki = this.uc.getMenuActions(Li.ViewSort, this.Bb),
								Pi = [];
							return (
								(0, le.$Jyb)(ki, Pi),
								this.zb.showContextMenu({
									getAnchor: () => wt.anchor,
									getActions: () => Pi,
									onHide: () => {},
								})
							);
						}
						const We = wt.element;
						let _e = We,
							Si = [],
							gi = new Lt(() => this.Ic());
						if ((0, s.$oPc)(We)) {
							const Pi = this.wc.menus.getRepositoryMenus(
								We.provider,
							).repositoryContextMenu;
							(_e = We.provider),
								(gi = new Z.$NPc(() => this.Hc())),
								(Si = (0, s.$EPc)(Pi));
						} else if (!((0, s.$pPc)(We) || (0, s.$qPc)(We))) {
							if ((0, s.$rPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.provider)
									.getResourceGroupMenu(We);
								Si = (0, s.$EPc)(Pi);
							} else if ((0, s.$sPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.resourceGroup.provider)
									.getResourceMenu(We);
								Si = (0, s.$EPc)(Pi);
							} else if ((0, s.$tPc)(We))
								if (We.element) {
									const Pi = this.wc.menus
										.getRepositoryMenus(We.element.resourceGroup.provider)
										.getResourceMenu(We.element);
									Si = (0, s.$EPc)(Pi);
								} else {
									const Pi = this.wc.menus
										.getRepositoryMenus(We.context.provider)
										.getResourceFolderMenu(We.context);
									Si = (0, s.$EPc)(Pi);
								}
							else if ((0, s.$uPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.repository.provider)
									.historyProviderMenu?.getHistoryItemGroupContextMenu(We);
								Pi &&
									((gi = new Vt()),
									(0, le.$Jyb)(Pi, { shouldForwardArgs: !0 }, Si));
							} else if ((0, s.$vPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.historyItemGroup.repository.provider)
									.historyProviderMenu?.getHistoryItemMenu(We);
								Pi && ((gi = new Gt()), (Si = (0, s.$EPc)(Pi)));
							} else if ((0, s.$wPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.repository.provider)
									.historyProviderMenu?.getHistoryItemMenu2(We);
								Pi && ((gi = new Mt(() => this.Jc())), (Si = (0, s.$EPc)(Pi)));
							}
						}
						gi.onWillRun(() => this.n.domFocus()),
							this.zb.showContextMenu({
								getAnchor: () => wt.anchor,
								getActions: () => Si,
								getActionsContext: () => _e,
								actionRunner: gi,
							});
					}
					Hc() {
						const wt = this.n
								.getFocus()
								.filter((_e) => !!_e && (0, s.$oPc)(_e)),
							We = this.n
								.getSelection()
								.filter((_e) => !!_e && (0, s.$oPc)(_e));
						return Array.from(new Set([...wt, ...We]));
					}
					Ic() {
						return this.n
							.getSelection()
							.filter((wt) => !!wt && !(0, s.$rPc)(wt));
					}
					Jc() {
						return this.n
							.getSelection()
							.filter((wt) => !!wt && (0, s.$wPc)(wt));
					}
					Kc() {
						let wt =
							this.Ab.getValue("scm.defaultViewMode") === "list"
								? at.List
								: at.Tree;
						const We = this.xc.get("scm.viewMode", M.StorageScope.WORKSPACE);
						return typeof We == "string" && (wt = We), wt;
					}
					Lc() {
						if (this.sb === at.Tree) return pi.Path;
						let wt;
						switch (this.Ab.getValue("scm.defaultViewSortKey")) {
							case "name":
								wt = pi.Name;
								break;
							case "status":
								wt = pi.Status;
								break;
							default:
								wt = pi.Path;
								break;
						}
						const _e = this.xc.get("scm.viewSortKey", M.StorageScope.WORKSPACE);
						return typeof _e == "string" && (wt = _e), wt;
					}
					Mc() {
						const wt = this.xc.get("scm.viewState2", M.StorageScope.WORKSPACE);
						if (wt)
							try {
								return JSON.parse(wt);
							} catch {
								return;
							}
					}
					Nc() {
						this.n &&
							this.xc.store(
								"scm.viewState2",
								JSON.stringify(this.n.getViewState()),
								M.StorageScope.WORKSPACE,
								M.StorageTarget.MACHINE,
							);
					}
					Oc(wt) {
						this.jc.queue(() =>
							this.hc.queue(async () => {
								const We = this.L.getFocusedInput();
								wt && this.n.hasNode(wt)
									? await this.n.updateChildren(wt)
									: await this.n.updateChildren(void 0),
									We && this.L.getRenderedInputWidget(We)?.focus(),
									this.Qc(),
									this.Rc();
							}),
						);
					}
					Pc(wt) {
						this.m.classList.toggle(
							"list-view-mode",
							this.viewMode === at.List,
						),
							this.m.classList.toggle(
								"tree-view-mode",
								this.viewMode === at.Tree,
							),
							this.m.classList.toggle(
								"align-icons-and-twisties",
								(this.viewMode === at.List && wt.hasFileIcons) ||
									(wt.hasFileIcons && !wt.hasFolderIcons),
							),
							this.m.classList.toggle(
								"hide-arrows",
								this.viewMode === at.Tree && wt.hidesExplorerArrows === !0,
							);
					}
					Qc() {
						if (
							!this.Ab.getValue("scm.alwaysShowRepositories") &&
							this.fc.size === 1
						) {
							const We = S.Iterable.first(this.fc.keys()).provider;
							this.oc.set(We.contextValue),
								this.pc.set(We.rootUri?.toString()),
								this.qc.set(!!We.rootUri);
						} else this.oc.set(void 0), this.pc.set(void 0), this.qc.set(!1);
					}
					Rc() {
						if (!this.isBodyVisible() || this.fc.size === 1) {
							this.nc.set(!1), this.mc.set(!1);
							return;
						}
						this.nc.set(
							this.wc.visibleRepositories.some(
								(wt) => this.n.hasNode(wt) && this.n.isCollapsible(wt),
							),
						),
							this.mc.set(
								this.wc.visibleRepositories.every(
									(wt) =>
										this.n.hasNode(wt) &&
										(!this.n.isCollapsible(wt) || this.n.isCollapsed(wt)),
								),
							);
					}
					collapseAllRepositories() {
						for (const wt of this.wc.visibleRepositories)
							this.n.isCollapsible(wt) && this.n.collapse(wt);
					}
					expandAllRepositories() {
						for (const wt of this.wc.visibleRepositories)
							this.n.isCollapsible(wt) && this.n.expand(wt);
					}
					focusPreviousInput() {
						this.hc.queue(() => this.Sc(-1));
					}
					focusNextInput() {
						this.hc.queue(() => this.Sc(1));
					}
					async Sc(wt) {
						if (
							!this.wc.focusedRepository ||
							this.wc.visibleRepositories.length === 0
						)
							return;
						let We = this.wc.focusedRepository.input;
						const _e = this.wc.visibleRepositories;
						if (
							!(
								_e.length === 1 &&
								this.L.getRenderedInputWidget(We)?.hasFocus() === !0
							)
						) {
							if (
								_e.length > 1 &&
								this.L.getRenderedInputWidget(We)?.hasFocus() === !0
							) {
								const Si = _e.indexOf(this.wc.focusedRepository),
									gi = (0, ke.rot)(Si + wt, _e.length);
								We = _e[gi].input;
							}
							await this.n.expandTo(We),
								this.n.reveal(We),
								this.L.getRenderedInputWidget(We)?.focus();
						}
					}
					focusPreviousResourceGroup() {
						this.hc.queue(() => this.Tc(-1));
					}
					focusNextResourceGroup() {
						this.hc.queue(() => this.Tc(1));
					}
					async Tc(wt) {
						if (
							!this.wc.focusedRepository ||
							this.wc.visibleRepositories.length === 0
						)
							return;
						const We = (0, C.$Kgb)(this.n.getHTMLElement()),
							_e = this.wc.focusedRepository.provider.groups,
							Si = this.n.getFocus().find((Pi) => (0, s.$rPc)(Pi)),
							gi = We && Si ? _e.indexOf(Si) : -1;
						let ki;
						if (gi === -1) {
							for (const Pi of _e)
								if (this.n.hasNode(Pi)) {
									ki = Pi;
									break;
								}
						} else {
							let Pi = (0, ke.rot)(gi + wt, _e.length);
							for (; Pi !== gi; ) {
								if (this.n.hasNode(_e[Pi])) {
									ki = _e[Pi];
									break;
								}
								Pi = (0, ke.rot)(Pi + wt, _e.length);
							}
						}
						ki &&
							(await this.n.expandTo(ki),
							this.n.reveal(ki),
							this.n.setSelection([ki]),
							this.n.setFocus([ki]),
							this.n.domFocus());
					}
					shouldShowWelcome() {
						return this.vc.repositoryCount === 0;
					}
					getActionsContext() {
						return this.wc.visibleRepositories.length === 1
							? this.wc.visibleRepositories[0].provider
							: void 0;
					}
					focus() {
						super.focus(),
							this.hc.queue(
								() =>
									new Promise((wt) => {
										if (this.isExpanded()) {
											if (this.n.getFocus().length === 0)
												for (const We of this.wc.visibleRepositories) {
													const _e = this.L.getRenderedInputWidget(We.input);
													if (_e) {
														_e.focus(), wt();
														return;
													}
												}
											this.n.domFocus(), wt();
										}
									}),
							);
					}
					dispose() {
						this.gc.dispose(),
							this.rc.dispose(),
							this.fc.dispose(),
							super.dispose();
					}
				};
				(e.$bQc = ni),
					(e.$bQc = ni =
						Ne(
							[
								j(1, n.$ek),
								j(2, u.$IY),
								j(3, p.$YX),
								j(4, d.$c7),
								j(5, d.$d7),
								j(6, M.$lq),
								j(7, He.$Vl),
								j(8, rt.$mEb),
								j(9, g.$uZ),
								j(10, b.$iP),
								j(11, h.$Xxb),
								j(12, a.$Li),
								j(13, L.$K1),
								j(14, y.$gj),
								j(15, c.$6j),
								j(16, X.$7rb),
								j(17, Y.$km),
								j(18, qe.$Uyb),
							],
							ni,
						));
				let bi = class extends w.$1c {
					constructor(wt, We, _e) {
						super(), (this.b = wt), (this.c = We), (this.f = _e);
					}
					async getChildren(wt) {
						const We = this.f.visibleRepositories.length,
							_e = this.c.getValue("scm.showActionButton") === !0,
							Si = this.c.getValue("scm.alwaysShowRepositories") === !0;
						if ((0, s.$nPc)(wt) && (We > 1 || Si))
							return this.f.visibleRepositories;
						if (((0, s.$nPc)(wt) && We === 1 && !Si) || (0, s.$oPc)(wt)) {
							const gi = [];
							wt = (0, s.$oPc)(wt) ? wt : this.f.visibleRepositories[0];
							const ki = wt.provider.actionButton,
								Pi = wt.provider.groups;
							return (
								wt.input.visible && gi.push(wt.input),
								_e &&
									ki &&
									gi.push({ type: "actionButton", repository: wt, button: ki }),
								(Pi.some((Ji) => Ji.resources.length > 0) ||
									(We === 1 && (!_e || !ki))) &&
									gi.push(...Pi),
								gi
							);
						} else if ((0, s.$rPc)(wt)) {
							if (this.b() === at.List) return wt.resources;
							if (this.b() === at.Tree) {
								const gi = [];
								for (const ki of wt.resourceTree.root.children)
									gi.push(
										ki.element && ki.childrenCount === 0 ? ki.element : ki,
									);
								return gi;
							}
						} else if ((0, s.$tPc)(wt) || (0, s.$zPc)(wt)) {
							const gi = [];
							for (const ki of wt.children)
								gi.push(ki.element && ki.childrenCount === 0 ? ki.element : ki);
							return gi;
						}
						return [];
					}
					getParent(wt) {
						if ((0, s.$tPc)(wt)) {
							if (wt.parent === wt.context.resourceTree.root) return wt.context;
							if (wt.parent) return wt.parent;
							throw new Error("Invalid element passed to getParent");
						} else if ((0, s.$sPc)(wt)) {
							if (this.b() === at.List) return wt.resourceGroup;
							const _e = wt.resourceGroup.resourceTree.getNode(
								wt.sourceUri,
							)?.parent;
							if (!_e) throw new Error("Invalid element passed to getParent");
							return _e === wt.resourceGroup.resourceTree.root
								? wt.resourceGroup
								: _e;
						} else {
							if ((0, s.$pPc)(wt)) return wt.repository;
							if ((0, s.$rPc)(wt)) {
								const We = this.f.visibleRepositories.find(
									(_e) => _e.provider === wt.provider,
								);
								if (!We) throw new Error("Invalid element passed to getParent");
								return We;
							} else throw new Error("Unexpected call to getParent");
						}
					}
					hasChildren(wt) {
						if ((0, s.$nPc)(wt)) return this.f.visibleRepositories.length !== 0;
						if ((0, s.$oPc)(wt)) return !0;
						if ((0, s.$pPc)(wt)) return !1;
						if ((0, s.$qPc)(wt)) return !1;
						if ((0, s.$rPc)(wt)) return !0;
						if ((0, s.$sPc)(wt)) return !1;
						if (v.$06.isResourceNode(wt)) return wt.childrenCount > 0;
						if ((0, s.$uPc)(wt)) return !0;
						if ((0, s.$vPc)(wt)) return !0;
						if ((0, s.$wPc)(wt)) return !1;
						if ((0, s.$yPc)(wt)) return !1;
						if ((0, s.$APc)(wt)) return !1;
						throw new Error("hasChildren not implemented.");
					}
				};
				bi = Ne([j(1, y.$gj), j(2, d.$d7)], bi);
				class fi {
					constructor(wt, We, _e, Si) {
						(this.d = wt),
							(this.f = We),
							(this.i = _e),
							(this.k = Si),
							(this.c = new w.$2c());
					}
					dispose() {
						this.c?.dispose();
					}
					setButton(wt) {
						if ((this.m(), !!wt)) {
							if (wt.secondaryCommands?.length) {
								const We = [];
								for (let _e = 0; _e < wt.secondaryCommands.length; _e++) {
									const Si = wt.secondaryCommands[_e];
									for (const gi of Si)
										We.push(
											new o.$rj(
												gi.id,
												gi.title,
												void 0,
												!0,
												async () =>
													await this.n(gi.id, ...(gi.arguments || [])),
											),
										);
									Si.length && We.push(new o.$tj());
								}
								We.pop(),
									(this.b = new ae.$pob(this.d, {
										actions: We,
										addPrimaryActionToDropdown: !1,
										contextMenuProvider: this.f,
										title: wt.command.tooltip,
										supportIcons: !0,
										...ve.$lyb,
									}));
							} else
								this.b = new ae.$oob(this.d, {
									supportIcons: !0,
									supportShortLabel: !!wt.description,
									title: wt.command.tooltip,
									...ve.$lyb,
								});
							(this.b.enabled = wt.enabled),
								(this.b.label = wt.command.title),
								this.b instanceof ae.$oob &&
									wt.description &&
									(this.b.labelShort = wt.description),
								this.b.onDidClick(
									async () =>
										await this.n(
											wt.command.id,
											...(wt.command.arguments || []),
										),
									null,
									this.c.value,
								),
								this.c.value.add(this.b);
						}
					}
					focus() {
						this.b?.focus();
					}
					m() {
						(this.c.value = new w.$Zc()),
							(this.b = void 0),
							(0, C.$9fb)(this.d);
					}
					async n(wt, ...We) {
						try {
							await this.i.executeCommand(wt, ...We);
						} catch (_e) {
							this.k.error(_e);
						}
					}
				}
				(e.$cQc = fi), (0, R.$zYb)(".scm-view .scm-editor-container");
			},
		),
		define(
			de[4033],
			he([
				1, 0, 6, 12, 7, 95, 325, 275, 132, 94, 3, 77, 26, 4, 10, 8, 49, 72, 5,
				39, 93, 326, 41, 32, 51, 35, 146, 60, 1747, 1257, 614, 258, 274, 96,
				160, 11, 103, 15, 9, 31, 50, 24, 14, 1947, 173, 84, 652,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
			) {
				"use strict";
				var K, J, W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iQc = void 0),
					(i = mt(i));
				const X = (0, v.$wP)(
						"scmGraph.historyItemHoverAdditionsForeground",
						"gitDecoration.addedResourceForeground",
						(0, c.localize)(9069, null),
					),
					Y = (0, v.$wP)(
						"scmGraph.historyItemHoverDeletionsForeground",
						"gitDecoration.deletedResourceForeground",
						(0, c.localize)(9070, null),
					);
				(0, R.$4X)(
					class extends I.$WMb {
						constructor() {
							super({
								id: "workbench.scm.action.refreshGraph",
								title: (0, c.localize)(9071, null),
								viewId: D.$b7,
								f1: !1,
								icon: H.$ak.refresh,
								menu: {
									id: R.$XX.SCMHistoryTitle,
									when: g.$Kj.or(
										g.$Kj.has("scmRepository"),
										g.$Kj.and(
											q.$aQc.RepositoryVisibilityCount.isEqualTo(1),
											g.$Kj.equals("config.scm.alwaysShowRepositories", !1),
										),
									),
									group: "navigation",
									order: 1e3,
								},
							});
						}
						async runInView(pe, $e, ye) {
							const ue = pe.get(D.$c7),
								fe = ye ? ue.getRepository(ye.id) : void 0;
							$e.refresh(fe);
						}
					},
				);
				class ie {
					getHeight() {
						return 22;
					}
					getTemplateId($e) {
						if ((0, L.$oPc)($e)) return ne.TEMPLATE_ID;
						if ((0, L.$wPc)($e)) return ee.TEMPLATE_ID;
						if ((0, L.$xPc)($e)) return _.TEMPLATE_ID;
						throw new Error("Unknown element");
					}
				}
				let ne = class {
					static {
						K = this;
					}
					static {
						this.TEMPLATE_ID = "repository";
					}
					get templateId() {
						return K.TEMPLATE_ID;
					}
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le) {
						(this.a = $e),
							(this.b = ye),
							(this.c = ue),
							(this.d = fe),
							(this.f = me),
							(this.g = ve),
							(this.i = ge),
							(this.j = be),
							(this.k = Ce),
							(this.m = Le);
					}
					renderTemplate($e) {
						$e.classList.contains("monaco-tl-contents") &&
							$e.parentElement.parentElement
								.querySelector(".monaco-tl-twistie")
								.classList.add("force-twistie");
						const ye = (0, w.$fhb)($e, (0, w.$)(".scm-provider")),
							ue = new C.$Xob(ye),
							fe = this.i.setupManagedHover(
								(0, E.$cib)("mouse"),
								ue.element,
								"",
								{},
							),
							me = (0, w.$fhb)(
								ye,
								(0, w.$)("div.state-label.monaco-count-badge.long"),
							),
							ve = new V.$Syb(
								(0, w.$fhb)(ye, (0, w.$)(".actions")),
								{
									actionRunner: this.b,
									actionViewItemProvider: this.c,
									resetMenu: R.$XX.SCMHistoryTitle,
								},
								this.k,
								this.f,
								this.g,
								this.j,
								this.d,
								this.m,
							);
						return {
							label: ue,
							labelCustomHover: fe,
							stateLabel: me,
							toolBar: ve,
							elementDisposables: new u.$Zc(),
							templateDisposable: (0, u.$Xc)(fe, ve),
						};
					}
					renderElement($e, ye, ue, fe) {
						const me = (0, L.$oPc)($e) ? $e : $e.element;
						ue.elementDisposables.add(
							(0, a.autorun)((ve) => {
								const ge = this.a(me).read(ve);
								(ue.stateLabel.style.display = ge !== "" ? "" : "none"),
									(ue.stateLabel.textContent = ge);
							}),
						),
							ue.label.setLabel(me.provider.name),
							ue.labelCustomHover.update(
								me.provider.rootUri
									? `${me.provider.label}: ${me.provider.rootUri.fsPath}`
									: me.provider.label,
							),
							ue.elementDisposables.add(
								(0, a.autorunWithStore)((ve, ge) => {
									const be = me.provider.historyProvider
										.read(ve)
										?.currentHistoryItemGroup.read(ve);
									if (!be) {
										ue.toolBar.setActions([], []);
										return;
									}
									const Ce = this.f.createOverlay([
											["scmRepository", me.id],
											["scmProvider", me.provider.contextValue],
											["scmHistoryItemGroupHasRemote", !!be.remote],
										]),
										Le = this.k.createMenu(R.$XX.SCMHistoryTitle, Ce);
									ge.add(
										(0, L.$CPc)(Le, (Fe, Oe) => {
											ue.toolBar.setActions(Fe, Oe);
										}),
									);
								}),
							),
							(ue.toolBar.context = me.provider);
					}
					disposeElement($e, ye, ue) {
						ue.elementDisposables.clear();
					}
					disposeTemplate($e) {
						$e.elementDisposables.dispose(), $e.templateDisposable.dispose();
					}
				};
				ne = K = Ne(
					[
						j(3, z.$ek),
						j(4, g.$6j),
						j(5, p.$Xxb),
						j(6, o.$Uyb),
						j(7, b.$uZ),
						j(8, R.$YX),
						j(9, $.$km),
					],
					ne,
				);
				let ee = class {
					static {
						J = this;
					}
					static {
						this.TEMPLATE_ID = "history-item";
					}
					get templateId() {
						return J.TEMPLATE_ID;
					}
					constructor($e, ye, ue) {
						(this.a = $e), (this.b = ye), (this.c = ue);
					}
					renderTemplate($e) {
						$e.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie");
						const ye = (0, w.$fhb)($e, (0, w.$)(".history-item")),
							ue = (0, w.$fhb)(ye, (0, w.$)(".graph-container")),
							fe = new C.$Xob(ye, {
								supportIcons: !0,
								supportHighlights: !0,
								supportDescriptionHighlights: !0,
							}),
							me = (0, w.$fhb)(ye, (0, w.$)(".label-container"));
						return (
							ye.appendChild(me),
							{
								element: ye,
								graphContainer: ue,
								label: fe,
								labelContainer: me,
								elementDisposables: new u.$Zc(),
								disposables: new u.$Zc(),
							}
						);
					}
					renderElement($e, ye, ue, fe) {
						const me = $e.element.historyItemViewModel,
							ve = me.historyItem,
							ge = this.b.setupManagedHover(
								this.a,
								ue.element,
								this.f($e.element),
							);
						ue.elementDisposables.add(ge),
							(ue.graphContainer.textContent = ""),
							ue.graphContainer.appendChild((0, P.$6Pc)(me));
						const [be, Ce] = this.g(me, $e.filterData);
						if (
							(ue.label.setLabel(ve.message, ve.author, {
								matches: be,
								descriptionMatches: Ce,
							}),
							(ue.labelContainer.textContent = ""),
							ve.labels)
						) {
							const Le = this.d($e.element.repository);
							for (const Fe of ve.labels)
								Fe.icon &&
									h.ThemeIcon.isThemeIcon(Fe.icon) &&
									Le.includes(Fe.title) &&
									(0, w.$fhb)(
										ue.labelContainer,
										(0, w.$)("div.label"),
									).classList.add(...h.ThemeIcon.asClassNameArray(Fe.icon));
						}
					}
					d($e) {
						const ye = $e.provider.historyProvider
							.get()
							?.currentHistoryItemGroup.get();
						return ye
							? [ye.name, ye.remote?.name, ye.base?.name].filter(
									(ue) => ue !== void 0,
								)
							: [];
					}
					f($e) {
						const ye = this.c.getColorTheme(),
							ue = $e.historyItemViewModel.historyItem,
							fe = $e.repository.provider.historyProvider
								.get()
								?.currentHistoryItemGroup?.get(),
							me = new r.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						if (ue.author) {
							if (
								(me.appendMarkdown(`$(account) **${ue.author}**`), ue.timestamp)
							) {
								const be = new Intl.DateTimeFormat(i.$z, {
									year: "numeric",
									month: "long",
									day: "numeric",
									hour: "numeric",
									minute: "numeric",
								});
								me.appendMarkdown(
									`, $(history) ${(0, d.$dn)(ue.timestamp, !0, !0)} (${be.format(ue.timestamp)})`,
								);
							}
							me.appendMarkdown(`

`);
						}
						if (
							(me.appendMarkdown(`${ue.message}

`),
							ue.statistics)
						) {
							if (
								(me.appendMarkdown(`---

`),
								me.appendMarkdown(
									`<span>${ue.statistics.files === 1 ? ((0, c.localize))(9072, null, ue.statistics.files) : ((0, c.localize))(9073, null, ue.statistics.files)}</span>`,
								),
								ue.statistics.insertions)
							) {
								const be = ye.getColor(X);
								me.appendMarkdown(
									`,&nbsp;<span style="color:${be};">${ue.statistics.insertions === 1 ? ((0, c.localize))(9074, null, ue.statistics.insertions, "(+)") : ((0, c.localize))(9075, null, ue.statistics.insertions, "(+)")}</span>`,
								);
							}
							if (ue.statistics.deletions) {
								const be = ye.getColor(Y);
								me.appendMarkdown(
									`,&nbsp;<span style="color:${be};">${ue.statistics.deletions === 1 ? ((0, c.localize))(9076, null, ue.statistics.deletions, "(-)") : ((0, c.localize))(9077, null, ue.statistics.deletions, "(-)")}</span>`,
								);
							}
						}
						const ve = this.d($e.repository),
							ge = (ue.labels ?? []).filter((be) => ve.includes(be.title));
						if (ge.length > 0) {
							const be = ye.getColor(P.$1Pc),
								Ce = ye.getColor(P.$2Pc),
								Le = ye.getColor(P.$3Pc),
								Fe = ye.getColor(P.$4Pc);
							me.appendMarkdown(`

---

`),
								me.appendMarkdown(
									ge
										.map((Oe) => {
											const xe =
													Oe.title === fe?.name
														? be
														: Oe.title === fe?.remote?.name
															? Ce
															: Oe.title === fe?.base?.name
																? Le
																: void 0,
												He = h.ThemeIcon.isThemeIcon(Oe.icon) ? Oe.icon.id : "";
											return `<span style="color:${Fe};background-color:${xe};border-radius:2px;">&nbsp;$(${He})&nbsp;${Oe.title}&nbsp;</span>`;
										})
										.join("&nbsp;&nbsp;"),
								);
						}
						return { markdown: me, markdownNotSupportedFallback: ue.message };
					}
					g($e, ye) {
						return ye
							? [
									$e.historyItem.message === ye.label
										? (0, m.$3k)(ye.score)
										: void 0,
									$e.historyItem.author === ye.label
										? (0, m.$3k)(ye.score)
										: void 0,
								]
							: [void 0, void 0];
					}
					disposeElement($e, ye, ue, fe) {
						ue.elementDisposables.clear();
					}
					disposeTemplate($e) {
						$e.disposables.dispose();
					}
				};
				ee = J = Ne([j(1, o.$Uyb), j(2, S.$iP)], ee);
				let _ = class {
					static {
						W = this;
					}
					static {
						this.TEMPLATE_ID = "historyItemLoadMore";
					}
					get templateId() {
						return W.TEMPLATE_ID;
					}
					constructor($e, ye, ue, fe) {
						(this.a = $e), (this.b = ye), (this.c = ue), (this.d = fe);
					}
					renderTemplate($e) {
						$e.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie");
						const ye = (0, w.$fhb)($e, (0, w.$)(".history-item-load-more")),
							ue = (0, w.$fhb)(ye, (0, w.$)(".graph-placeholder")),
							fe = (0, w.$fhb)(ye, (0, w.$)(".history-item-placeholder")),
							me = new C.$Xob(fe, { supportIcons: !0 });
						return {
							element: ye,
							graphPlaceholder: ue,
							historyItemPlaceholderContainer: fe,
							historyItemPlaceholderLabel: me,
							elementDisposables: new u.$Zc(),
							disposables: new u.$Zc(),
						};
					}
					renderElement($e, ye, ue, fe) {
						const me = this.d.visibleRepositories.length,
							ve = this.c.getValue("scm.alwaysShowRepositories") === !0;
						(ue.graphPlaceholder.textContent = ""),
							(ue.graphPlaceholder.style.width = `${P.$ZPc * ($e.element.graphColumns.length + 1)}px`),
							ue.graphPlaceholder.appendChild(
								(0, P.$7Pc)($e.element.graphColumns),
							),
							ue.historyItemPlaceholderContainer.classList.toggle(
								"shimmer",
								me === 1 && !ve,
							),
							me > 1 || ve
								? ue.elementDisposables.add(
										(0, a.autorun)((ge) => {
											const Ce = `$(${this.a($e.element.repository).read(ge) ? "loading~spin" : "fold-down"})`;
											ue.historyItemPlaceholderLabel.setLabel(
												(0, c.localize)(9078, null, Ce),
											);
										}),
									)
								: (ue.historyItemPlaceholderLabel.setLabel(""),
									this.b($e.element.repository));
					}
					disposeTemplate($e) {
						$e.disposables.dispose();
					}
				};
				_ = W = Ne([j(2, n.$gj), j(3, D.$d7)], _);
				class te extends F.$sj {
					constructor($e) {
						super(), (this.a = $e);
					}
					async q($e, ye) {
						if (!($e instanceof R.$2X)) return super.q($e, ye);
						const ue = [];
						ue.push(ye.repository.provider);
						const fe = this.a();
						fe.some((ve) => ve === ye) && fe.length > 1
							? ue.push(
									...fe.map((ve) => ({
										id: ve.historyItemViewModel.historyItem.id,
										parentIds: ve.historyItemViewModel.historyItem.parentIds,
										message: ve.historyItemViewModel.historyItem.message,
										author: ve.historyItemViewModel.historyItem.author,
										icon: ve.historyItemViewModel.historyItem.icon,
										timestamp: ve.historyItemViewModel.historyItem.timestamp,
										statistics: ve.historyItemViewModel.historyItem.statistics,
									})),
								)
							: ue.push({
									id: ye.historyItemViewModel.historyItem.id,
									parentIds: ye.historyItemViewModel.historyItem.parentIds,
									message: ye.historyItemViewModel.historyItem.message,
									author: ye.historyItemViewModel.historyItem.author,
									icon: ye.historyItemViewModel.historyItem.icon,
									timestamp: ye.historyItemViewModel.historyItem.timestamp,
									statistics: ye.historyItemViewModel.historyItem.statistics,
								}),
							await $e.run(...ue);
					}
				}
				let Q = class extends o.$Vyb {
					constructor($e, ye, ue, fe) {
						super("element", !0, () => this.g(), ue, fe),
							(this.a = $e),
							(this.b = ye);
					}
					g() {
						const $e = this.b.getSideBarPosition();
						let ye;
						return (
							this.a === T.ViewContainerLocation.Sidebar
								? (ye =
										$e === N.Position.LEFT
											? A.HoverPosition.RIGHT
											: A.HoverPosition.LEFT)
								: this.a === T.ViewContainerLocation.AuxiliaryBar
									? (ye =
											$e === N.Position.LEFT
												? A.HoverPosition.LEFT
												: A.HoverPosition.RIGHT)
									: (ye = A.HoverPosition.RIGHT),
							{
								additionalClasses: ["history-item-hover"],
								position: { hoverPosition: ye, forcePosition: !0 },
							}
						);
					}
				};
				Q = Ne([j(1, N.$mEb), j(2, n.$gj), j(3, o.$Uyb)], Q);
				let Z = class extends F.$sj {
					constructor($e) {
						super(), (this.a = $e);
					}
					q($e, ye) {
						return this.a.withProgress(
							{ location: D.$b7 },
							async () => await super.q($e, ye),
						);
					}
				};
				Z = Ne([j(0, G.$8N)], Z);
				class se {
					getWidgetAriaLabel() {
						return (0, c.localize)(9079, null);
					}
					getAriaLabel($e) {
						if ((0, L.$oPc)($e))
							return `${$e.provider.name} ${$e.provider.label}`;
						if ((0, L.$wPc)($e)) {
							const ye = $e.historyItemViewModel.historyItem;
							return `${(0, M.$$k)(ye.message).trim()}${ye.author ? `, ${ye.author}` : ""}`;
						} else return "";
					}
				}
				class re {
					getId($e) {
						if ((0, L.$oPc)($e)) return `repo:${$e.provider.id}`;
						if ((0, L.$wPc)($e)) {
							const ye = $e.repository.provider,
								ue = $e.historyItemViewModel.historyItem;
							return `historyItem:${ye.id}/${ue.id}/${ue.parentIds.join(",")}`;
						} else {
							if ((0, L.$xPc)($e))
								return `historyItemLoadMore:${$e.repository.provider.id}}`;
							throw new Error("Invalid tree element");
						}
					}
				}
				class le {
					getKeyboardNavigationLabel($e) {
						if (!(0, L.$oPc)($e)) {
							if ((0, L.$wPc)($e))
								return [
									$e.historyItemViewModel.historyItem.message,
									$e.historyItemViewModel.historyItem.author,
								];
							if ((0, L.$xPc)($e)) return "";
							throw new Error("Invalid tree element");
						}
					}
				}
				let oe = class extends u.$1c {
					constructor($e, ye) {
						super(), (this.b = $e), (this.c = ye), (this.a = new Map());
					}
					async getChildren($e) {
						const ye = this.c.visibleRepositories.length,
							ue = this.b.getValue("scm.alwaysShowRepositories") === !0;
						if ((0, L.$nPc)($e) && (ye > 1 || ue))
							return this.c.visibleRepositories;
						if (((0, L.$nPc)($e) && ye === 1 && !ue) || (0, L.$oPc)($e)) {
							const fe = [];
							$e = (0, L.$oPc)($e) ? $e : this.c.visibleRepositories[0];
							const me = await this.f($e);
							fe.push(...me);
							const ve = (0, x.$wb)(me);
							return (
								ve &&
									ve.historyItemViewModel.outputSwimlanes.length > 0 &&
									fe.push({
										repository: $e,
										graphColumns: ve.historyItemViewModel.outputSwimlanes,
										type: "historyItemLoadMore",
									}),
								fe
							);
						}
						return [];
					}
					hasChildren($e) {
						if ((0, L.$nPc)($e)) return this.c.visibleRepositories.length !== 0;
						if ((0, L.$oPc)($e)) return !0;
						if ((0, L.$wPc)($e)) return !1;
						if ((0, L.$xPc)($e)) return !1;
						throw new Error("hasChildren not implemented.");
					}
					clearState($e) {
						if (!$e) {
							this.a.clear();
							return;
						}
						this.a.delete($e);
					}
					loadMore($e) {
						const ye = this.a.get($e);
						ye && this.a.set($e, { ...ye, loadMore: !0 });
					}
					async f($e) {
						let ye = this.a.get($e);
						const ue = $e.provider.historyProvider.get(),
							fe =
								ye?.currentHistoryItemGroup ??
								ue?.currentHistoryItemGroup.get();
						if (!ue || !fe) return [];
						if (!ye || ye.loadMore) {
							const ve = [
									fe.revision ?? fe.id,
									...(fe.remote ? [fe.remote.revision ?? fe.remote.id] : []),
									...(fe.base ? [fe.base.revision ?? fe.base.id] : []),
								],
								ge = ye?.items ?? [],
								be =
									(await ue.provideHistoryItems2({
										historyItemGroupIds: ve,
										limit: 50,
										skip: ge.length,
									})) ?? [];
							(ye = {
								currentHistoryItemGroup: fe,
								items: [...ge, ...be],
								loadMore: !1,
							}),
								this.a.set($e, ye);
						}
						const me = new Map([[fe.name, P.$1Pc]]);
						return (
							fe.remote && me.set(fe.remote.name, P.$2Pc),
							fe.base && me.set(fe.base.name, P.$3Pc),
							(0, P.$8Pc)(ye.items, me).map((ve) => ({
								repository: $e,
								historyItemViewModel: ve,
								type: "historyItem2",
							}))
						);
					}
					dispose() {
						this.a.clear(), super.dispose();
					}
				};
				oe = Ne([j(0, n.$gj), j(1, D.$d7)], oe);
				let ae = class extends I.$TMb {
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He) {
						super(
							{ ...$e, titleMenuId: R.$XX.SCMHistoryTitle },
							ge,
							ve,
							me,
							Le,
							Ce,
							be,
							Fe,
							Oe,
							xe,
							He,
						),
							(this.dc = ye),
							(this.ec = ue),
							(this.fc = fe),
							(this.g = new Map()),
							(this.j = new Map()),
							(this.n = new u.$0c()),
							(this.t = new u.$Zc()),
							(this.L = new B.$Hh()),
							(this.ab = new B.$Gh()),
							(this.cc = (0, l.$Mwb)(
								"scm.providerCountBadge",
								"hidden",
								this.Ab,
							)),
							(this.sb = this.xb.createKey(
								"scmHistoryItemGroupHasRemote",
								void 0,
							)),
							(this.m = this.Db.createInstance(Z)),
							this.D(this.m),
							this.D(this.ab);
					}
					X($e, ye) {
						super.X($e, ye), this.b.layout($e, ye);
					}
					W($e) {
						super.W($e),
							(this.a = (0, w.$fhb)(
								$e,
								(0, w.$)(".scm-view.scm-history-view"),
							)),
							this.a.classList.add("file-icon-themable-tree"),
							this.D(
								(0, a.autorun)((ye) => {
									const ue = this.cc.read(ye);
									this.a.classList.toggle(
										"hide-provider-counts",
										ue === "hidden",
									),
										this.a.classList.toggle(
											"auto-provider-counts",
											ue === "auto",
										);
								}),
							),
							this.ic(this.a),
							this.onDidChangeBodyVisibility((ye) => {
								ye
									? this.L.queue(async () => {
											await this.b.setInput(this.ec),
												t.Event.filter(
													this.Ab.onDidChangeConfiguration,
													(ue) =>
														ue.affectsConfiguration(
															"scm.alwaysShowRepositories",
														),
													this.t,
												)(
													() => {
														this.bc(), this.refresh();
													},
													this,
													this.t,
												),
												this.ec.onDidChangeVisibleRepositories(
													this.lc,
													this,
													this.t,
												),
												this.lc({
													added: this.ec.visibleRepositories,
													removed: O.Iterable.empty(),
												}),
												(this.b.scrollTop = 0);
										})
									: (this.c.clearState(),
										this.t.clear(),
										this.n.clearAndDisposeAll());
							});
					}
					getActionRunner() {
						return this.m;
					}
					async refresh($e) {
						this.c.clearState($e),
							await this.tc($e),
							this.rc($e, ""),
							(this.b.scrollTop = 0);
					}
					ic($e) {
						this.f = new re();
						const ye = this.Db.createInstance(
							Q,
							this.Cb.getViewLocationById(this.id),
						);
						this.D(ye),
							(this.c = this.Db.createInstance(oe)),
							this.D(this.c),
							(this.b = this.Db.createInstance(
								s.$FMb,
								"SCM History Tree",
								$e,
								new ie(),
								[
									this.Db.createInstance(
										ne,
										(ue) => this.qc(ue),
										this.m,
										(0, L.$GPc)(this.Db),
									),
									this.Db.createInstance(ee, ye),
									this.Db.createInstance(
										_,
										(ue) => this.oc(ue),
										(ue) => this.pc(ue),
									),
								],
								this.c,
								{
									accessibilityProvider: new se(),
									identityProvider: this.f,
									collapseByDefault: (ue) => !(0, L.$oPc)(ue),
									keyboardNavigationLabelProvider: new le(),
									horizontalScrolling: !1,
									multipleSelectionSupport: !1,
								},
							)),
							this.D(this.b),
							this.b.onDidOpen(this.jc, this, this.B),
							this.b.onContextMenu(this.kc, this, this.B);
					}
					async jc($e) {
						if ($e.element) {
							if ((0, L.$oPc)($e.element)) this.ec.focus($e.element);
							else if ((0, L.$wPc)($e.element)) {
								const ye = $e.element.historyItemViewModel.historyItem,
									ue = ye.parentIds.length > 0 ? ye.parentIds[0] : void 0,
									me = await $e.element.repository.provider.historyProvider
										.get()
										?.provideHistoryItemChanges(ye.id, ue);
								if (me) {
									const ve = `${ye.id.substring(0, 8)} - ${ye.message}`,
										ge = $e.element.repository.provider.rootUri,
										be = ge ? ge.path : $e.element.repository.provider.label,
										Ce = U.URI.from(
											{
												scheme: "scm-history-item",
												path: `${be}/${ue}..${ye.id}`,
											},
											!0,
										);
									await this.dc.executeCommand(
										"_workbench.openMultiDiffEditor",
										{ title: ve, multiDiffSourceUri: Ce, resources: me },
									);
								}
								this.ec.focus($e.element.repository);
							} else if ((0, L.$xPc)($e.element)) {
								const ye = this.ec.visibleRepositories.length,
									ue = this.Ab.getValue("scm.alwaysShowRepositories") === !0;
								(ye > 1 || ue) &&
									(this.pc($e.element.repository), this.b.setSelection([]));
							}
						} else return;
					}
					kc($e) {
						const ye = $e.element;
						if (!ye) return;
						let ue = [],
							fe = ye,
							me = new te(() => this.nc());
						if ((0, L.$oPc)(ye)) {
							const ge = this.ec.menus.getRepositoryMenus(
								ye.provider,
							).repositoryContextMenu;
							(ue = (0, L.$EPc)(ge)),
								(me = new k.$NPc(() => this.mc())),
								(fe = ye.provider);
						} else if ((0, L.$wPc)(ye)) {
							const ge = this.ec.menus
								.getRepositoryMenus(ye.repository.provider)
								.historyProviderMenu?.getHistoryItemMenu2(ye);
							ue = ge ? (0, L.$EPc)(ge) : [];
						}
						me.onWillRun(() => this.b.domFocus()),
							this.zb.showContextMenu({
								getAnchor: () => $e.anchor,
								getActions: () => ue,
								getActionsContext: () => fe,
								actionRunner: me,
							});
					}
					lc({ added: $e, removed: ye }) {
						for (const ue of $e) {
							const fe = new u.$Zc();
							fe.add(
								(0, a.autorun)((me) => {
									const ve = ue.provider.historyProvider.read(me),
										ge = ve?.currentHistoryItemGroupId.read(me),
										be = ve?.currentHistoryItemGroupRevision.read(me),
										Ce = ve?.currentHistoryItemGroupRemoteId.read(me);
									this.ec.visibleRepositories.length === 1
										? this.sb.set(!!Ce)
										: this.sb.reset(),
										!(!ge && !be && !Ce) && this.refresh(ue);
								}),
							),
								fe.add(
									(0, a.autorun)((me) => {
										if (
											!ue.provider.historyProvider
												.read(me)
												?.currentHistoryItemGroupRemoteRevision.read(me)
										)
											return;
										if (this.b.scrollTop === 0) {
											this.refresh(ue);
											return;
										}
										const be = (0, c.localize)(9080, null);
										this.rc(this.sc() ? ue : void 0, be);
									}),
								),
								this.n.set(ue, fe);
						}
						for (const ue of ye)
							this.c.clearState(ue),
								this.g.delete(ue),
								this.j.delete(ue),
								this.n.deleteAndDispose(ue);
						this.tc();
					}
					mc() {
						const $e = this.b
								.getFocus()
								.filter((ue) => !!ue && (0, L.$oPc)(ue)),
							ye = this.b
								.getSelection()
								.filter((ue) => !!ue && (0, L.$oPc)(ue));
						return Array.from(new Set([...$e, ...ye]));
					}
					nc() {
						return this.b
							.getSelection()
							.filter(($e) => !!$e && (0, L.$wPc)($e));
					}
					oc($e) {
						let ye = this.j.get($e);
						return (
							ye ||
								((ye = (0, a.observableValue)(this, !1)), this.j.set($e, ye)),
							ye
						);
					}
					async pc($e) {
						const ye = this.oc($e);
						ye.get() ||
							(ye.set(!0, void 0),
							this.c.loadMore($e),
							await this.tc($e),
							ye.set(!1, void 0));
					}
					qc($e) {
						let ye = this.g.get($e);
						return (
							ye ||
								((ye = (0, a.observableValue)(this, "")), this.g.set($e, ye)),
							ye
						);
					}
					rc($e, ye) {
						$e ? this.qc($e).set(ye, void 0) : this.Ub(ye);
					}
					sc() {
						const $e = this.ec.visibleRepositories.length;
						return (
							this.Ab.getValue("scm.alwaysShowRepositories") === !0 || $e > 1
						);
					}
					tc($e) {
						return this.ab.queue(() =>
							this.L.queue(async () => {
								await this.fc.withProgress({ location: this.id }, async () => {
									$e && this.b.hasNode($e)
										? await this.b.updateChildren($e, void 0, void 0, {})
										: await this.b.updateChildren(void 0, void 0, void 0, {});
								});
							}),
						);
					}
					dispose() {
						this.t.dispose(), this.n.dispose(), super.dispose();
					}
				};
				(e.$iQc = ae),
					(e.$iQc = ae =
						Ne(
							[
								j(1, z.$ek),
								j(2, D.$d7),
								j(3, G.$8N),
								j(4, n.$gj),
								j(5, p.$Xxb),
								j(6, b.$uZ),
								j(7, f.$Li),
								j(8, T.$K1),
								j(9, g.$6j),
								j(10, y.$7rb),
								j(11, S.$iP),
								j(12, $.$km),
								j(13, o.$Uyb),
							],
							ae,
						));
			},
		),
		define(
			de[4034],
			he([1, 0, 4, 32, 258, 5, 49, 35, 21, 10, 96, 53, 25, 60, 239, 652]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MPc = void 0);
				let g = class extends n.$ZSb {
					constructor(o, f, b, s, l, y, $, v, S, I) {
						super(
							w.$$6,
							{ mergeViewWithContainerWhenSingleView: !0 },
							b,
							$,
							o,
							s,
							f,
							v,
							l,
							y,
							S,
							I,
						);
					}
					create(o) {
						super.create(o), o.classList.add("scm-viewlet");
					}
					getOptimalWidth() {
						return 400;
					}
					getTitle() {
						return (0, t.localize)(9117, null);
					}
				};
				(e.$MPc = g),
					(e.$MPc = g =
						Ne(
							[
								j(0, u.$mEb),
								j(1, i.$km),
								j(2, E.$Li),
								j(3, C.$Xxb),
								j(4, d.$iP),
								j(5, m.$lq),
								j(6, r.$gj),
								j(7, a.$q2),
								j(8, h.$Vi),
								j(9, c.$K1),
							],
							g,
						));
			},
		),
		define(
			de[4035],
			he([
				1, 0, 4, 30, 55, 1884, 258, 27, 11, 3741, 52, 81, 8, 31, 43, 20, 3131,
				60, 4034, 102, 172, 14, 79, 1947, 1810, 3838, 373, 1787, 803, 3129, 7,
				3404, 89, 93, 614, 4033,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					s.$9M.registerLanguage({
						id: "scminput",
						extensions: [],
						aliases: [],
						mimetypes: ["text/x-scm-input"],
					}),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(E.$gnc, u.LifecyclePhase.Restored);
				const O = (0, y.$$O)(
						"source-control-view-icon",
						l.$ak.sourceControl,
						(0, t.localize)(8993, null),
					),
					B = i.$Io
						.as(o.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: C.$$6,
								title: (0, t.localize2)(9058, "Source Control"),
								ctorDescriptor: new b.$Ji(f.$MPc),
								storageId: "workbench.scm.views.state",
								icon: O,
								alwaysUseContainerInfo: !0,
								order: 2,
								hideIfEmpty: !0,
							},
							o.ViewContainerLocation.Sidebar,
							{ doNotRegisterOpenCommand: !0 },
						),
					U = i.$Io.as(o.Extensions.ViewsRegistry);
				U.registerViewWelcomeContent(C.$_6, {
					content: (0, t.localize)(8994, null),
					when: "default",
				}),
					U.registerViewWelcomeContent(C.$_6, {
						content: (0, t.localize)(8995, null),
						when: h.$Kj.and(
							h.$Kj.equals("scm.providerCount", 0),
							T.$eQc.IsEnabled,
							T.$eQc.IsTrusted.toNegated(),
						),
					}),
					U.registerViewWelcomeContent(C.$_6, {
						content: `[${(0, t.localize)(8996, null)}](command:${T.$fQc})`,
						when: h.$Kj.and(
							h.$Kj.equals("scm.providerCount", 0),
							T.$eQc.IsEnabled,
							T.$eQc.IsTrusted.toNegated(),
						),
					}),
					U.registerViews(
						[
							{
								id: C.$_6,
								name: (0, t.localize2)(9059, "Source Control"),
								ctorDescriptor: new b.$Ji($.$bQc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 40,
								order: -999,
								containerIcon: O,
								openCommandActionDescriptor: {
									id: B.id,
									mnemonicTitle: (0, t.localize)(8997, null),
									keybindings: {
										primary: 0,
										win: {
											primary:
												d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.KeyG,
										},
										linux: {
											primary:
												d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.KeyG,
										},
										mac: {
											primary:
												d.KeyMod.WinCtrl | d.KeyMod.Shift | d.KeyCode.KeyG,
										},
									},
									order: 2,
								},
							},
						],
						B,
					),
					U.registerViews(
						[
							{
								id: C.$a7,
								name: (0, t.localize2)(9060, "Source Control Repositories"),
								ctorDescriptor: new b.$Ji(S.$dQc),
								canToggleVisibility: !0,
								hideByDefault: !0,
								canMoveView: !0,
								weight: 20,
								order: -1e3,
								when: h.$Kj.and(
									h.$Kj.has("scm.providerCount"),
									h.$Kj.notEquals("scm.providerCount", 0),
								),
								containerIcon: O,
							},
						],
						B,
					),
					U.registerViews(
						[
							{
								id: C.$b7,
								name: (0, t.localize2)(9061, "Source Control Graph"),
								ctorDescriptor: new b.$Ji(R.$iQc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 40,
								order: 2,
								when: h.$Kj.and(
									h.$Kj.has("scm.providerCount"),
									h.$Kj.notEquals("scm.providerCount", 0),
								),
								containerIcon: O,
							},
						],
						B,
					),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(r.$JPc, u.LifecyclePhase.Restored),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(r.$KPc, u.LifecyclePhase.Restored),
					(0, w.$s6)(D.$hQc.ID, D.$hQc, w.WorkbenchPhase.AfterRestored),
					i.$Io
						.as(a.$No.Configuration)
						.registerConfiguration({
							id: "scm",
							order: 5,
							title: (0, t.localize)(8998, null),
							type: "object",
							scope: a.ConfigurationScope.RESOURCE,
							properties: {
								"scm.diffDecorations": {
									type: "string",
									enum: ["all", "gutter", "overview", "minimap", "none"],
									enumDescriptions: [
										(0, t.localize)(8999, null),
										(0, t.localize)(9e3, null),
										(0, t.localize)(9001, null),
										(0, t.localize)(9002, null),
										(0, t.localize)(9003, null),
									],
									default: "all",
									description: (0, t.localize)(9004, null),
								},
								"scm.diffDecorationsGutterWidth": {
									type: "number",
									enum: [1, 2, 3, 4, 5],
									default: 3,
									description: (0, t.localize)(9005, null),
								},
								"scm.diffDecorationsGutterVisibility": {
									type: "string",
									enum: ["always", "hover"],
									enumDescriptions: [
										(0, t.localize)(9006, null),
										(0, t.localize)(9007, null),
									],
									description: (0, t.localize)(9008, null),
									default: "always",
								},
								"scm.diffDecorationsGutterAction": {
									type: "string",
									enum: ["diff", "none"],
									enumDescriptions: [
										(0, t.localize)(9009, null),
										(0, t.localize)(9010, null),
									],
									description: (0, t.localize)(9011, null),
									default: "diff",
								},
								"scm.diffDecorationsGutterPattern": {
									type: "object",
									description: (0, t.localize)(9012, null),
									additionalProperties: !1,
									properties: {
										added: {
											type: "boolean",
											description: (0, t.localize)(9013, null),
										},
										modified: {
											type: "boolean",
											description: (0, t.localize)(9014, null),
										},
									},
									default: { added: !1, modified: !0 },
								},
								"scm.diffDecorationsIgnoreTrimWhitespace": {
									type: "string",
									enum: ["true", "false", "inherit"],
									enumDescriptions: [
										(0, t.localize)(9015, null),
										(0, t.localize)(9016, null),
										(0, t.localize)(9017, null),
									],
									description: (0, t.localize)(9018, null),
									default: "false",
								},
								"scm.alwaysShowActions": {
									type: "boolean",
									description: (0, t.localize)(9019, null),
									default: !1,
								},
								"scm.countBadge": {
									type: "string",
									enum: ["all", "focused", "off"],
									enumDescriptions: [
										(0, t.localize)(9020, null),
										(0, t.localize)(9021, null),
										(0, t.localize)(9022, null),
									],
									description: (0, t.localize)(9023, null),
									default: "all",
								},
								"scm.providerCountBadge": {
									type: "string",
									enum: ["hidden", "auto", "visible"],
									enumDescriptions: [
										(0, t.localize)(9024, null),
										(0, t.localize)(9025, null),
										(0, t.localize)(9026, null),
									],
									markdownDescription: (0, t.localize)(
										9027,
										null,
										"`#scm.alwaysShowRepositories#`",
									),
									default: "hidden",
								},
								"scm.defaultViewMode": {
									type: "string",
									enum: ["tree", "list"],
									enumDescriptions: [
										(0, t.localize)(9028, null),
										(0, t.localize)(9029, null),
									],
									description: (0, t.localize)(9030, null),
									default: "list",
								},
								"scm.defaultViewSortKey": {
									type: "string",
									enum: ["name", "path", "status"],
									enumDescriptions: [
										(0, t.localize)(9031, null),
										(0, t.localize)(9032, null),
										(0, t.localize)(9033, null),
									],
									description: (0, t.localize)(9034, null),
									default: "path",
								},
								"scm.autoReveal": {
									type: "boolean",
									description: (0, t.localize)(9035, null),
									default: !0,
								},
								"scm.inputFontFamily": {
									type: "string",
									markdownDescription: (0, t.localize)(9036, null),
									default: "default",
								},
								"scm.inputFontSize": {
									type: "number",
									markdownDescription: (0, t.localize)(9037, null),
									default: 13,
								},
								"scm.inputMaxLineCount": {
									type: "number",
									markdownDescription: (0, t.localize)(9038, null),
									minimum: 1,
									maximum: 50,
									default: 10,
								},
								"scm.inputMinLineCount": {
									type: "number",
									markdownDescription: (0, t.localize)(9039, null),
									minimum: 1,
									maximum: 50,
									default: 1,
								},
								"scm.alwaysShowRepositories": {
									type: "boolean",
									markdownDescription: (0, t.localize)(9040, null),
									default: !1,
								},
								"scm.repositories.sortOrder": {
									type: "string",
									enum: ["discovery time", "name", "path"],
									enumDescriptions: [
										(0, t.localize)(9041, null),
										(0, t.localize)(9042, null),
										(0, t.localize)(9043, null),
									],
									description: (0, t.localize)(9044, null),
									default: "discovery time",
								},
								"scm.repositories.visible": {
									type: "number",
									description: (0, t.localize)(9045, null),
									default: 10,
								},
								"scm.showActionButton": {
									type: "boolean",
									markdownDescription: (0, t.localize)(9046, null),
									default: !0,
								},
								"scm.showInputActionButton": {
									type: "boolean",
									markdownDescription: (0, t.localize)(9047, null),
									default: !0,
								},
								"scm.workingSets.enabled": {
									type: "boolean",
									description: (0, t.localize)(9048, null),
									default: !1,
								},
								"scm.workingSets.default": {
									type: "string",
									enum: ["empty", "current"],
									enumDescriptions: [
										(0, t.localize)(9049, null),
										(0, t.localize)(9050, null),
									],
									description: (0, t.localize)(9051, null),
									default: "current",
								},
								"scm.compactFolders": {
									type: "boolean",
									description: (0, t.localize)(9052, null),
									default: !0,
								},
							},
						}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "scm.acceptInput",
						metadata: { description: (0, t.localize)(9053, null), args: [] },
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: h.$Kj.has("scmRepository"),
						primary: d.KeyMod.CtrlCmd | d.KeyCode.Enter,
						handler: (x) => {
							const V = x
								.get(h.$6j)
								.getContext((0, L.$Jgb)())
								.getValue("scmRepository");
							if (!V) return Promise.resolve(null);
							const K = x.get(C.$c7).getRepository(V);
							if (!K?.provider.acceptInputCommand) return Promise.resolve(null);
							const J = K.provider.acceptInputCommand.id,
								W = K.provider.acceptInputCommand.arguments;
							return x.get(c.$ek).executeCommand(J, ...(W || []));
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "scm.clearInput",
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: h.$Kj.and(
							h.$Kj.has("scmRepository"),
							I.$YCb.Visible.toNegated(),
						),
						primary: d.KeyCode.Escape,
						handler: async (x) => {
							const H = x.get(C.$c7),
								G = x
									.get(h.$6j)
									.getContext((0, L.$Jgb)())
									.getValue("scmRepository");
							(G ? H.getRepository(G) : void 0)?.input.setValue("", !0);
						},
					});
				const z = {
						description: { description: (0, t.localize)(9054, null), args: [] },
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: (x) => {
							const H = x.get(h.$6j),
								q = x.get(C.$c7),
								G = H.getContext((0, L.$Jgb)()).getValue("scmRepository");
							(G ? q.getRepository(G) : void 0)?.input.showNextHistoryValue();
						},
					},
					F = {
						description: { description: (0, t.localize)(9055, null), args: [] },
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: (x) => {
							const H = x.get(h.$6j),
								q = x.get(C.$c7),
								G = H.getContext((0, L.$Jgb)()).getValue("scmRepository");
							(G
								? q.getRepository(G)
								: void 0
							)?.input.showPreviousHistoryValue();
						},
					};
				n.$TX.registerCommandAndKeybindingRule({
					...z,
					id: "scm.viewNextCommit",
					when: h.$Kj.and(
						h.$Kj.has("scmRepository"),
						h.$Kj.has("scmInputIsInLastPosition"),
						I.$YCb.Visible.toNegated(),
					),
					primary: d.KeyCode.DownArrow,
				}),
					n.$TX.registerCommandAndKeybindingRule({
						...F,
						id: "scm.viewPreviousCommit",
						when: h.$Kj.and(
							h.$Kj.has("scmRepository"),
							h.$Kj.has("scmInputIsInFirstPosition"),
							I.$YCb.Visible.toNegated(),
						),
						primary: d.KeyCode.UpArrow,
					}),
					n.$TX.registerCommandAndKeybindingRule({
						...z,
						id: "scm.forceViewNextCommit",
						when: h.$Kj.has("scmRepository"),
						primary: d.KeyMod.Alt | d.KeyCode.DownArrow,
					}),
					n.$TX.registerCommandAndKeybindingRule({
						...F,
						id: "scm.forceViewPreviousCommit",
						when: h.$Kj.has("scmRepository"),
						primary: d.KeyMod.Alt | d.KeyCode.UpArrow,
					}),
					c.$fk.registerCommand(
						"scm.openInIntegratedTerminal",
						async (x, ...H) => {
							if (!H || H.length === 0) return;
							const q = x.get(c.$ek),
								V = x.get(N.$fMb);
							let G = H.length === 1 ? H[0] : void 0;
							if (!G) {
								const K = V.lastFocusedList,
									J = K?.getHTMLElement();
								if (K instanceof N.$yMb && J && (0, L.$Kgb)(J)) {
									const [W] = K.getFocus(),
										X = K.element(W);
									(0, A.$oPc)(X) && (G = X.provider);
								}
							}
							G?.rootUri &&
								(await q.executeCommand("openInIntegratedTerminal", G.rootUri));
						},
					),
					c.$fk.registerCommand("scm.openInTerminal", async (x, H) => {
						if (!H || !H.rootUri) return;
						await x.get(c.$ek).executeCommand("openInTerminal", H.rootUri);
					}),
					m.$ZX.appendMenuItem(m.$XX.SCMSourceControl, {
						group: "100_end",
						command: {
							id: "scm.openInTerminal",
							title: (0, t.localize)(9056, null),
						},
						when: h.$Kj.and(
							h.$Kj.equals("scmProviderHasRootUri", !0),
							h.$Kj.or(
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"external",
								),
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"both",
								),
							),
						),
					}),
					m.$ZX.appendMenuItem(m.$XX.SCMSourceControl, {
						group: "100_end",
						command: {
							id: "scm.openInIntegratedTerminal",
							title: (0, t.localize)(9057, null),
						},
						when: h.$Kj.and(
							h.$Kj.equals("scmProviderHasRootUri", !0),
							h.$Kj.or(
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"integrated",
								),
								h.$Kj.equals(
									"config.terminal.sourceControlRepositoriesKind",
									"both",
								),
							),
						),
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusPreviousInput",
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: $.$aQc.RepositoryVisibilityCount.notEqualsTo(0),
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusPreviousInput();
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusNextInput",
						weight: n.KeybindingWeight.WorkbenchContrib,
						when: $.$aQc.RepositoryVisibilityCount.notEqualsTo(0),
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusNextInput();
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusPreviousResourceGroup",
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusPreviousResourceGroup();
						},
					}),
					n.$TX.registerCommandAndKeybindingRule({
						id: "workbench.scm.action.focusNextResourceGroup",
						weight: n.KeybindingWeight.WorkbenchContrib,
						handler: async (x) => {
							const q = await x.get(M.$HMb).openView(C.$_6);
							q && q.focusNextResourceGroup();
						},
					}),
					(0, g.$lK)(C.$c7, p.$LPc, g.InstantiationType.Delayed),
					(0, g.$lK)(C.$d7, v.$UPc, g.InstantiationType.Delayed),
					(0, g.$lK)(P.$8mc, k.$gQc, g.InstantiationType.Delayed);
			},
		),
		