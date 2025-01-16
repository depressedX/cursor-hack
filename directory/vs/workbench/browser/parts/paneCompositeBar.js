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
		