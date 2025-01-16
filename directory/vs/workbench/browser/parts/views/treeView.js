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
		