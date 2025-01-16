define(de[89], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$HMb = void 0),
				(e.$HMb = (0, t.$Mi)("viewsService"));
		}),
		define(
			de[3800],
			he([1, 0, 30, 297, 88, 101, 9, 3, 6, 89, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$foc = void 0);
				let h = class extends d.$1c {
					static {
						a = this;
					}
					static {
						this.a = new Map();
					}
					constructor(n, g, p) {
						super(),
							(this.c = g),
							(this.f = p),
							(this.b = n.getProxy(w.$mbb.ExtHostOutputService));
						const o = () => {
							const f = this.f.isViewVisible(i.$h8)
								? this.c.getActiveChannel()
								: void 0;
							this.b.$setVisibleChannel(f ? f.id : null);
						};
						this.D(
							m.Event.any(
								this.c.onActiveOutputChannel,
								m.Event.filter(
									this.f.onDidChangeViewVisibility,
									({ id: f }) => f === i.$h8,
								),
							)(() => o()),
						),
							o();
					}
					async $register(n, g, p, o) {
						const f = (a.a.get(o) || 0) + 1;
						a.a.set(o, f);
						const b = `extension-output-${o}-#${f}-${n}`,
							s = C.URI.revive(g);
						return (
							t.$Io
								.as(i.$p8.OutputChannels)
								.registerChannel({
									id: b,
									label: n,
									file: s,
									log: !1,
									languageId: p,
									extensionId: o,
								}),
							this.D((0, d.$Yc)(() => this.$dispose(b))),
							b
						);
					}
					async $update(n, g, p) {
						const o = this.g(n);
						o &&
							(g === i.OutputChannelUpdateMode.Append
								? o.update(g)
								: (0, u.$pg)(p) && o.update(g, p));
					}
					async $reveal(n, g) {
						const p = this.g(n);
						p && this.c.showChannel(p.id, g);
					}
					async $close(n) {
						if (this.f.isViewVisible(i.$h8)) {
							const g = this.c.getActiveChannel();
							g && n === g.id && this.f.closeView(i.$h8);
						}
					}
					async $dispose(n) {
						this.g(n)?.dispose();
					}
					g(n) {
						return this.c.getChannel(n);
					}
				};
				(e.$foc = h),
					(e.$foc =
						h =
						a =
							Ne(
								[
									(0, E.$tmc)(w.$lbb.MainThreadOutputService),
									j(1, i.$o8),
									j(2, r.$HMb),
								],
								h,
							));
			},
		),
		define(
			de[3801],
			he([1, 0, 3, 88, 60, 101, 24, 40, 28, 30, 53, 34, 489, 1697, 1836, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Joc = void 0),
					(n = mt(n));
				let p = class extends t.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.b = this.D(new t.$0c())),
							(this.c = new Map()),
							(this.a = s.getProxy(i.$mbb.ExtHostTreeViews));
					}
					async $registerTreeViewDataProvider(s, l) {
						this.j.trace(
							"MainThreadTreeViews#$registerTreeViewDataProvider",
							s,
							l,
						),
							this.h.whenInstalledExtensionsRegistered().then(() => {
								const y = new f(s, this.a, this.g),
									$ = new t.$Zc();
								this.b.set(s, { dataProvider: y, dispose: () => $.dispose() });
								const v =
										l.hasHandleDrag || l.hasHandleDrop
											? new o(
													s,
													l.dropMimeTypes,
													l.dragMimeTypes,
													l.hasHandleDrag,
													this.a,
												)
											: void 0,
									S = this.q(s);
								S
									? ((S.showCollapseAllAction = l.showCollapseAll),
										(S.canSelectMany = l.canSelectMany),
										(S.manuallyManageCheckboxes = l.manuallyManageCheckboxes),
										(S.dragAndDropController = v),
										v && this.c.set(s, v),
										(S.dataProvider = y),
										this.n(s, S, $),
										this.a.$setVisible(s, S.visible))
									: this.g.error("No view is registered with id: " + s);
							});
					}
					$reveal(s, l, y) {
						return (
							this.j.trace(
								"MainThreadTreeViews#$reveal",
								s,
								l?.item,
								l?.parentChain,
								y,
							),
							this.f.openView(s, y.focus).then(() => {
								const $ = this.q(s);
								if ($ && l)
									return this.m(
										$,
										this.b.get(s).dataProvider,
										l.item,
										l.parentChain,
										y,
									);
							})
						);
					}
					$refresh(s, l) {
						this.j.trace("MainThreadTreeViews#$refresh", s, l);
						const y = this.q(s),
							$ = this.b.get(s);
						if (y && $) {
							const v = $.dataProvider.getItemsToRefresh(l);
							return y.refresh(v.length ? v : void 0);
						}
						return Promise.resolve();
					}
					$setMessage(s, l) {
						this.j.trace("MainThreadTreeViews#$setMessage", s, l.toString());
						const y = this.q(s);
						y && (y.message = l);
					}
					$setTitle(s, l, y) {
						this.j.trace("MainThreadTreeViews#$setTitle", s, l, y);
						const $ = this.q(s);
						$ && (($.title = l), ($.description = y));
					}
					$setBadge(s, l) {
						this.j.trace(
							"MainThreadTreeViews#$setBadge",
							s,
							l?.value,
							l?.tooltip,
						);
						const y = this.q(s);
						y && (y.badge = l);
					}
					$resolveDropFileData(s, l, y) {
						const $ = this.c.get(s);
						if (!$) throw new Error("Unknown tree");
						return $.resolveDropFileData(l, y);
					}
					async $disposeTree(s) {
						const l = this.q(s);
						l && (l.dataProvider = void 0), this.b.deleteAndDispose(s);
					}
					async m(s, l, y, $, v) {
						v = v || { select: !1, focus: !1 };
						const S = (0, m.$ug)(v.select) ? !1 : v.select,
							I = (0, m.$ug)(v.focus) ? !1 : v.focus;
						let T = Math.min(
							(0, m.$pg)(v.expand) ? v.expand : v.expand === !0 ? 1 : 0,
							3,
						);
						l.isEmpty() && (await s.refresh());
						for (const k of $) {
							const L = l.getItem(k.handle);
							L && (await s.expand(L));
						}
						const P = l.getItem(y.handle);
						if (P) {
							await s.reveal(P),
								S && s.setSelection([P]),
								I === !1 ? s.setFocus() : I && s.setFocus(P);
							let k = [P];
							for (; k.length > 0 && T > 0; T--)
								await s.expand(k),
									(k = k.reduce((L, D) => {
										const M = l.getItem(D.handle);
										return (
											M &&
												M.children &&
												M.children.length &&
												L.push(...M.children),
											L
										);
									}, []));
						}
					}
					n(s, l, y) {
						y.add(
							l.onDidExpandItem(($) => this.a.$setExpanded(s, $.handle, !0)),
						),
							y.add(
								l.onDidCollapseItem(($) =>
									this.a.$setExpanded(s, $.handle, !1),
								),
							),
							y.add(
								l.onDidChangeSelectionAndFocus(($) =>
									this.a.$setSelectionAndFocus(
										s,
										$.selection.map(({ handle: v }) => v),
										$.focus.handle,
									),
								),
							),
							y.add(l.onDidChangeVisibility(($) => this.a.$setVisible(s, $))),
							y.add(
								l.onDidChangeCheckboxState(($) => {
									this.a.$changeCheckboxState(
										s,
										$.map((v) => ({
											treeItemHandle: v.handle,
											newState: v.checkbox?.isChecked ?? !1,
										})),
									);
								}),
							);
					}
					q(s) {
						const l = r.$Io.as(w.Extensions.ViewsRegistry).getView(s);
						return l ? l.treeView : null;
					}
					dispose() {
						for (const s of this.b) {
							const l = this.q(s[0]);
							l && (l.dataProvider = void 0);
						}
						this.b.dispose(), this.c.clear(), super.dispose();
					}
				};
				(e.$Joc = p),
					(e.$Joc = p =
						Ne(
							[
								(0, E.$tmc)(i.$lbb.MainThreadTreeViews),
								j(1, g.$HMb),
								j(2, d.$4N),
								j(3, u.$q2),
								j(4, a.$ik),
							],
							p,
						));
				class o {
					constructor(s, l, y, $, v) {
						(this.b = s),
							(this.dropMimeTypes = l),
							(this.dragMimeTypes = y),
							(this.hasWillDrop = $),
							(this.c = v),
							(this.a = new c.$4nc());
					}
					async handleDrop(s, l, y, $, v, S) {
						const I = this.a.add(s);
						try {
							const T = await n.DataTransfer.from(s);
							return y.isCancellationRequested
								? void 0
								: await this.c.$handleDrop(
										this.b,
										I.id,
										T,
										l?.handle,
										y,
										$,
										v,
										S,
									);
						} finally {
							I.dispose();
						}
					}
					async handleDrag(s, l, y) {
						if (!this.hasWillDrop) return;
						const $ = await this.c.$handleDrag(this.b, s, l, y);
						if (!$) return;
						const v = new h.$XL();
						return (
							$.items.forEach(([S, I]) => {
								v.replace(S, (0, h.$VL)(I.asString));
							}),
							v
						);
					}
					resolveDropFileData(s, l) {
						return this.a.resolveFileData(s, l);
					}
				}
				class f {
					constructor(s, l, y) {
						(this.c = s),
							(this.d = l),
							(this.e = y),
							(this.a = new Map()),
							(this.b = this.d.$hasResolve(this.c));
					}
					getChildren(s) {
						return (
							s || this.a.clear(),
							this.d.$getChildren(this.c, s ? s.handle : void 0).then(
								(l) => this.f(l),
								(l) => (w.$M1.is(l) || this.e.error(l), []),
							)
						);
					}
					getItemsToRefresh(s) {
						const l = [];
						if (s)
							for (const y of Object.keys(s)) {
								const $ = this.getItem(y);
								if ($) {
									const v = s[y];
									if ((this.g($, v), y === v.handle)) l.push($);
									else {
										this.a.delete(y), this.a.set($.handle, $);
										const S = v.parentHandle
											? this.a.get(v.parentHandle)
											: null;
										S && l.push(S);
									}
								}
							}
						return l;
					}
					getItem(s) {
						return this.a.get(s);
					}
					isEmpty() {
						return this.a.size === 0;
					}
					async f(s) {
						if (s === void 0) return;
						const l = [],
							y = await this.b;
						if (s)
							for (const $ of s) {
								const v = new w.$L1(
									$,
									y ? (S) => this.d.$resolve(this.c, $.handle, S) : void 0,
								);
								this.a.set($.handle, v), l.push(v);
							}
						return l;
					}
					g(s, l) {
						if (((l.children = l.children ? l.children : void 0), s)) {
							const y = (0, C.$Qb)([
								...Object.keys(s instanceof w.$L1 ? s.asTreeItem() : s),
								...Object.keys(l),
							]);
							for (const $ of y) s[$] = l[$];
							s instanceof w.$L1 && s.resetResolve();
						}
					}
				}
			},
		),
		define(
			de[1326],
			he([
				1, 0, 4, 27, 11, 99, 96, 100, 8, 14, 79, 60, 89, 142, 40, 43, 12, 1517,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R5b = e.$Q5b = e.$P5b = void 0);
				const o = (0, u.$$O)(
						"panel-maximize",
						r.$ak.chevronUp,
						(0, t.localize)(3641, null),
					),
					f = (0, u.$$O)(
						"panel-restore",
						r.$ak.chevronDown,
						(0, t.localize)(3642, null),
					),
					b = (0, u.$$O)(
						"panel-close",
						r.$ak.close,
						(0, t.localize)(3643, null),
					),
					s = (0, u.$$O)(
						"panel-layout-icon",
						r.$ak.layoutPanel,
						(0, t.localize)(3644, null),
					),
					l = (0, u.$$O)(
						"panel-layout-icon-off",
						r.$ak.layoutPanelOff,
						(0, t.localize)(3645, null),
					);
				class y extends w.$3X {
					static {
						this.ID = "workbench.action.togglePanel";
					}
					static {
						this.LABEL = (0, t.localize2)(3663, "Toggle Panel Visibility");
					}
					constructor() {
						super({
							id: y.ID,
							title: y.LABEL,
							toggled: {
								condition: d.$xQb,
								title: (0, t.localize)(3646, null),
								mnemonicTitle: (0, t.localize)(3647, null),
							},
							f1: !0,
							category: E.$ck.View,
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyJ,
								weight: g.KeybindingWeight.WorkbenchContrib,
							},
							menu: [
								{
									id: w.$XX.MenubarAppearanceMenu,
									group: "2_workbench_layout",
									order: 5,
								},
								{
									id: w.$XX.LayoutControlMenuSubmenu,
									group: "0_workbench_layout",
									order: 4,
								},
							],
						});
					}
					async run(U) {
						const z = U.get(C.$mEb);
						z.setPartHidden(
							z.isVisible(C.Parts.PANEL_PART),
							C.Parts.PANEL_PART,
						);
					}
				}
				(e.$P5b = y),
					(0, w.$4X)(y),
					(0, w.$4X)(
						class extends w.$3X {
							static {
								this.ID = "workbench.action.focusPanel";
							}
							static {
								this.LABEL = (0, t.localize)(3648, null);
							}
							constructor() {
								super({
									id: "workbench.action.focusPanel",
									title: (0, t.localize2)(3664, "Focus into Panel"),
									category: E.$ck.View,
									f1: !0,
								});
							}
							async run(B) {
								const U = B.get(C.$mEb),
									z = B.get(c.$6Sb);
								U.isVisible(C.Parts.PANEL_PART) ||
									U.setPartHidden(!1, C.Parts.PANEL_PART),
									z
										.getActivePaneComposite(a.ViewContainerLocation.Panel)
										?.focus();
							}
						},
					);
				const $ = {
						LEFT: "workbench.action.positionPanelLeft",
						RIGHT: "workbench.action.positionPanelRight",
						BOTTOM: "workbench.action.positionPanelBottom",
						TOP: "workbench.action.positionPanelTop",
					},
					v = {
						LEFT: "workbench.action.alignPanelLeft",
						RIGHT: "workbench.action.alignPanelRight",
						CENTER: "workbench.action.alignPanelCenter",
						JUSTIFY: "workbench.action.alignPanelJustify",
					};
				function S(B, U, z, F, x) {
					return { id: B, title: U, shortLabel: z, value: F, when: x };
				}
				function I(B, U, z, F) {
					return S(B, U, z, F, d.$vQb.notEqualsTo((0, C.$oEb)(F)));
				}
				function T(B, U, z, F) {
					return S(B, U, z, F, d.$wQb.notEqualsTo(F));
				}
				const P = [
						I(
							$.TOP,
							(0, t.localize2)(3665, "Move Panel To Top"),
							(0, t.localize)(3649, null),
							C.Position.TOP,
						),
						I(
							$.LEFT,
							(0, t.localize2)(3666, "Move Panel Left"),
							(0, t.localize)(3650, null),
							C.Position.LEFT,
						),
						I(
							$.RIGHT,
							(0, t.localize2)(3667, "Move Panel Right"),
							(0, t.localize)(3651, null),
							C.Position.RIGHT,
						),
						I(
							$.BOTTOM,
							(0, t.localize2)(3668, "Move Panel To Bottom"),
							(0, t.localize)(3652, null),
							C.Position.BOTTOM,
						),
					],
					k = [
						T(
							v.LEFT,
							(0, t.localize2)(3669, "Set Panel Alignment to Left"),
							(0, t.localize)(3653, null),
							"left",
						),
						T(
							v.RIGHT,
							(0, t.localize2)(3670, "Set Panel Alignment to Right"),
							(0, t.localize)(3654, null),
							"right",
						),
						T(
							v.CENTER,
							(0, t.localize2)(3671, "Set Panel Alignment to Center"),
							(0, t.localize)(3655, null),
							"center",
						),
						T(
							v.JUSTIFY,
							(0, t.localize2)(3672, "Set Panel Alignment to Justify"),
							(0, t.localize)(3656, null),
							"justify",
						),
					];
				w.$ZX.appendMenuItem(w.$XX.MenubarAppearanceMenu, {
					submenu: w.$XX.PanelPositionMenu,
					title: (0, t.localize)(3657, null),
					group: "3_workbench_layout_move",
					order: 4,
				}),
					P.forEach((B, U) => {
						const { id: z, title: F, shortLabel: x, value: H, when: q } = B;
						(0, w.$4X)(
							class extends w.$3X {
								constructor() {
									super({ id: z, title: F, category: E.$ck.View, f1: !0 });
								}
								run(V) {
									V.get(C.$mEb).setPanelPosition(
										H === void 0 ? C.Position.BOTTOM : H,
									);
								}
							},
						),
							w.$ZX.appendMenuItem(w.$XX.PanelPositionMenu, {
								command: { id: z, title: x, toggled: q.negate() },
								order: 5 + U,
							});
					}),
					w.$ZX.appendMenuItem(w.$XX.MenubarAppearanceMenu, {
						submenu: w.$XX.PanelAlignmentMenu,
						title: (0, t.localize)(3658, null),
						group: "3_workbench_layout_move",
						order: 5,
					}),
					k.forEach((B) => {
						const { id: U, title: z, shortLabel: F, value: x, when: H } = B;
						(0, w.$4X)(
							class extends w.$3X {
								constructor() {
									super({
										id: U,
										title: z,
										category: E.$ck.View,
										toggled: H.negate(),
										f1: !0,
									});
								}
								run(q) {
									q.get(C.$mEb).setPanelAlignment(x === void 0 ? "center" : x);
								}
							},
						),
							w.$ZX.appendMenuItem(w.$XX.PanelAlignmentMenu, {
								command: { id: U, title: F, toggled: H.negate() },
								order: 5,
							});
					});
				class L extends w.$3X {
					constructor(U, z) {
						super({ id: U, title: z, category: E.$ck.View, f1: !0 });
					}
					async run(U, z) {
						const F = U.get(c.$6Sb),
							x = F.getVisiblePaneCompositeIds(a.ViewContainerLocation.Panel),
							H = F.getActivePaneComposite(a.ViewContainerLocation.Panel);
						if (!H) return;
						let q;
						for (let V = 0; V < x.length; V++)
							if (x[V] === H.getId()) {
								q = x[(V + x.length + z) % x.length];
								break;
							}
						typeof q == "string" &&
							(await F.openPaneComposite(q, a.ViewContainerLocation.Panel, !0));
					}
				}
				(0, w.$4X)(
					class extends L {
						constructor() {
							super(
								"workbench.action.previousPanelView",
								(0, t.localize2)(3673, "Previous Panel View"),
							);
						}
						run(B) {
							return super.run(B, -1);
						}
					},
				),
					(0, w.$4X)(
						class extends L {
							constructor() {
								super(
									"workbench.action.nextPanelView",
									(0, t.localize2)(3674, "Next Panel View"),
								);
							}
							run(B) {
								return super.run(B, 1);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleMaximizedPanel",
									title: (0, t.localize2)(3675, "Toggle Maximized Panel"),
									tooltip: (0, t.localize)(3659, null),
									category: E.$ck.View,
									f1: !0,
									icon: o,
									precondition: m.$Kj.or(
										d.$wQb.isEqualTo("center"),
										m.$Kj.and(
											d.$vQb.notEqualsTo("bottom"),
											d.$vQb.notEqualsTo("top"),
										),
									),
									toggled: {
										condition: d.$yQb,
										icon: f,
										tooltip: (0, t.localize)(3660, null),
									},
									menu: [
										{
											id: w.$XX.PanelTitle,
											group: "navigation",
											order: 1,
											when: m.$Kj.or(
												d.$wQb.isEqualTo("center"),
												m.$Kj.and(
													d.$vQb.notEqualsTo("bottom"),
													d.$vQb.notEqualsTo("top"),
												),
											),
										},
									],
								});
							}
							run(B) {
								const U = B.get(C.$mEb),
									z = B.get(n.$4N);
								if (
									U.getPanelAlignment() !== "center" &&
									(0, C.$nEb)(U.getPanelPosition())
								) {
									z.warn((0, t.localize)(3661, null));
									return;
								}
								U.isVisible(C.Parts.PANEL_PART)
									? U.toggleMaximizedPanel()
									: (U.setPartHidden(!1, C.Parts.PANEL_PART),
										U.isPanelMaximized() || U.toggleMaximizedPanel());
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.action.closePanel",
									title: (0, t.localize2)(3676, "Hide Panel"),
									category: E.$ck.View,
									icon: b,
									menu: [
										{ id: w.$XX.CommandPalette, when: d.$xQb },
										{ id: w.$XX.PanelTitle, group: "navigation", order: 2 },
									],
								});
							}
							run(B) {
								B.get(C.$mEb).setPartHidden(!0, C.Parts.PANEL_PART);
							}
						},
					);
				const D = p.$m ? "\u2318" : "Ctrl+";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "aichat.close-sidebar",
								title: {
									value: "Close AI Sidebar",
									original: "Close AI Sidebar",
								},
								category: E.$ck.View,
								icon: b,
								menu: [
									{ id: w.$XX.CommandPalette, when: d.$sQb },
									{
										id: w.$XX.AuxiliaryBarTitle,
										group: "navigation",
										order: 4,
									},
								],
							});
						}
						run(B) {
							B.get(C.$mEb).setPartHidden(!0, C.Parts.AUXILIARYBAR_PART);
						}
					},
				),
					w.$ZX.appendMenuItems([
						{
							id: w.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: y.ID,
									title: (0, t.localize)(3662, null),
									icon: l,
									toggled: { condition: d.$xQb, icon: s },
								},
								when: m.$Kj.or(
									m.$Kj.equals(
										"config.workbench.layoutControl.type",
										"toggles",
									),
									m.$Kj.equals("config.workbench.layoutControl.type", "both"),
								),
								order: 1,
							},
						},
						{
							id: w.$XX.ViewTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: {
									id: y.ID,
									title: (0, t.localize2)(3677, "Hide Panel"),
								},
								when: m.$Kj.and(
									d.$xQb,
									m.$Kj.equals(
										"viewLocation",
										(0, a.$J1)(a.ViewContainerLocation.Panel),
									),
								),
								order: 2,
							},
						},
					]);
				class M extends w.$3X {
					constructor(U, z, F) {
						super(F), (this.a = U), (this.b = z);
					}
					run(U, ...z) {
						const F = U.get(a.$K1),
							x = U.get(C.$mEb),
							H = U.get(h.$HMb),
							q = F.getViewContainersByLocation(this.a),
							V = F.getViewContainersByLocation(this.b);
						if (q.length) {
							const G = H.getVisibleViewContainer(this.a);
							q.forEach((K) =>
								F.moveViewContainerToLocation(K, this.b, void 0, this.desc.id),
							),
								x.setPartHidden(
									!1,
									this.b === a.ViewContainerLocation.Panel
										? C.Parts.PANEL_PART
										: C.Parts.AUXILIARYBAR_PART,
								),
								G && V.length === 0 && H.openViewContainer(G.id, !0);
						}
					}
				}
				class N extends M {
					static {
						this.ID = "workbench.action.movePanelToSidePanel";
					}
					constructor() {
						super(
							a.ViewContainerLocation.Panel,
							a.ViewContainerLocation.AuxiliaryBar,
							{
								id: N.ID,
								title: (0, t.localize2)(
									3678,
									"Move Panel Views To Secondary Side Bar",
								),
								category: E.$ck.View,
								f1: !1,
							},
						);
					}
				}
				class A extends M {
					static {
						this.ID = "workbench.action.movePanelToSecondarySideBar";
					}
					constructor() {
						super(
							a.ViewContainerLocation.Panel,
							a.ViewContainerLocation.AuxiliaryBar,
							{
								id: A.ID,
								title: (0, t.localize2)(
									3679,
									"Move Panel Views To Secondary Side Bar",
								),
								category: E.$ck.View,
								f1: !0,
							},
						);
					}
				}
				(e.$Q5b = A), (0, w.$4X)(N), (0, w.$4X)(A);
				class R extends M {
					static {
						this.ID = "workbench.action.moveSidePanelToPanel";
					}
					constructor() {
						super(
							a.ViewContainerLocation.AuxiliaryBar,
							a.ViewContainerLocation.Panel,
							{
								id: R.ID,
								title: (0, t.localize2)(
									3680,
									"Move Secondary Side Bar Views To Panel",
								),
								category: E.$ck.View,
								f1: !1,
							},
						);
					}
				}
				class O extends M {
					static {
						this.ID = "workbench.action.moveSecondarySideBarToPanel";
					}
					constructor() {
						super(
							a.ViewContainerLocation.AuxiliaryBar,
							a.ViewContainerLocation.Panel,
							{
								id: O.ID,
								title: (0, t.localize2)(
									3681,
									"Move Secondary Side Bar Views To Panel",
								),
								category: E.$ck.View,
								f1: !0,
							},
						);
					}
				}
				(e.$R5b = O), (0, w.$4X)(R), (0, w.$4X)(O);
			},
		),
		define(
			de[716],
			he([
				1, 0, 4, 11, 99, 10, 96, 5, 27, 12, 179, 43, 8, 60, 89, 63, 57, 142,
				1307, 1326, 31, 100, 14, 26, 3, 79, 75, 39, 253, 58, 131,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$75b =
						e.$65b =
						e.$55b =
						e.$45b =
						e.$35b =
						e.$25b =
						e.$15b =
						e.$Z5b =
						e.$Y5b =
						e.$X5b =
						e.$W5b =
						e.$V5b =
						e.$U5b =
						e.$T5b =
						e.$S5b =
							void 0);
				const D = (0, S.$$O)(
						"menuBar",
						y.$ak.layoutMenubar,
						(0, t.localize)(2792, null),
					),
					M = (0, S.$$O)(
						"activity-bar-left",
						y.$ak.layoutActivitybarLeft,
						(0, t.localize)(2793, null),
					),
					N = (0, S.$$O)(
						"activity-bar-right",
						y.$ak.layoutActivitybarRight,
						(0, t.localize)(2794, null),
					),
					A = (0, S.$$O)(
						"panel-left",
						y.$ak.layoutSidebarLeft,
						(0, t.localize)(2795, null),
					),
					R = (0, S.$$O)(
						"panel-left-off",
						y.$ak.layoutSidebarLeftOff,
						(0, t.localize)(2796, null),
					),
					O = (0, S.$$O)(
						"panel-right",
						y.$ak.layoutSidebarRight,
						(0, t.localize)(2797, null),
					),
					B = (0, S.$$O)(
						"panel-right-off",
						y.$ak.layoutSidebarRightOff,
						(0, t.localize)(2798, null),
					),
					U = (0, S.$$O)(
						"panel-bottom",
						y.$ak.layoutPanel,
						(0, t.localize)(2799, null),
					),
					z = (0, S.$$O)(
						"statusBar",
						y.$ak.layoutStatusbar,
						(0, t.localize)(2800, null),
					),
					F = (0, S.$$O)(
						"settings-icon-cursor",
						y.$ak.settingsGear,
						(0, t.localize)(2801, null),
					),
					x = (0, S.$$O)(
						"feedback-icon-cursor",
						y.$ak.report,
						(0, t.localize)(2802, null),
					),
					H = (0, S.$$O)("sparkle", y.$ak.sparkle, (0, t.localize)(2803, null)),
					q = (0, S.$$O)(
						"sparkle-strikethrough",
						y.$ak.sparkleStrikethrough,
						(0, t.localize)(2804, null),
					),
					V = (0, S.$$O)("logo", y.$ak.logo, (0, t.localize)(2805, null)),
					G = (0, S.$$O)(
						"key-plus-sparkle",
						y.$ak.keyPlusSparkle,
						(0, t.localize)(2806, null),
					),
					K = (0, S.$$O)("key", y.$ak.key, (0, t.localize)(2807, null)),
					J = (0, S.$$O)(
						"lighting-icon-cursor",
						y.$ak.zap,
						(0, t.localize)(2808, null),
					),
					W = (0, S.$$O)(
						"panel-align-left",
						y.$ak.layoutPanelLeft,
						(0, t.localize)(2809, null),
					),
					X = (0, S.$$O)(
						"panel-align-right",
						y.$ak.layoutPanelRight,
						(0, t.localize)(2810, null),
					),
					Y = (0, S.$$O)(
						"panel-align-center",
						y.$ak.layoutPanelCenter,
						(0, t.localize)(2811, null),
					),
					ie = (0, S.$$O)(
						"panel-align-justify",
						y.$ak.layoutPanelJustify,
						(0, t.localize)(2812, null),
					),
					ne = (0, S.$$O)(
						"fullscreen",
						y.$ak.screenFull,
						(0, t.localize)(2813, null),
					),
					ee = (0, S.$$O)(
						"centerLayoutIcon",
						y.$ak.layoutCentered,
						(0, t.localize)(2814, null),
					),
					_ = (0, S.$$O)("zenMode", y.$ak.target, (0, t.localize)(2815, null));
				(0, i.$4X)(
					class extends i.$3X {
						constructor() {
							super({
								id: "workbench.action.closeSidebar",
								title: (0, t.localize2)(2885, "Close Primary Side Bar"),
								category: w.$ck.View,
								f1: !0,
							});
						}
						run(Ve) {
							Ve.get(C.$mEb).setPartHidden(!0, C.Parts.SIDEBAR_PART);
						}
					},
				),
					(e.$S5b = "workbench.action.toggleActivityBarVisibility"),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleCenteredLayout",
									title: {
										...(0, t.localize2)(2886, "Toggle Centered Layout"),
										mnemonicTitle: (0, t.localize)(2816, null),
									},
									precondition: l.$GPb.toNegated(),
									category: w.$ck.View,
									f1: !0,
									toggled: l.$cQb,
									menu: [
										{
											id: i.$XX.MenubarAppearanceMenu,
											group: "1_toggle_view",
											order: 3,
										},
									],
								});
							}
							run(Ve) {
								const Ze = Ve.get(C.$mEb);
								Ze.centerMainEditorLayout(!Ze.isMainEditorLayoutCentered());
							}
						},
					);
				const te = "workbench.sideBar.location";
				class Q extends i.$3X {
					constructor(Ze, et, rt) {
						super({ id: Ze, title: et, f1: !1 }), (this.a = rt);
					}
					async run(Ze) {
						const et = Ze.get(C.$mEb),
							rt = Ze.get(E.$gj);
						if (et.getSideBarPosition() !== this.a)
							return rt.updateValue(te, (0, C.$oEb)(this.a));
					}
				}
				class Z extends Q {
					static {
						this.ID = "workbench.action.moveSideBarRight";
					}
					constructor() {
						super(
							Z.ID,
							(0, t.localize2)(2887, "Move Primary Side Bar Right"),
							C.Position.RIGHT,
						);
					}
				}
				class se extends Q {
					static {
						this.ID = "workbench.action.moveSideBarLeft";
					}
					constructor() {
						super(
							se.ID,
							(0, t.localize2)(2888, "Move Primary Side Bar Left"),
							C.Position.LEFT,
						);
					}
				}
				(0, i.$4X)(Z), (0, i.$4X)(se);
				class re extends i.$3X {
					static {
						this.ID = "workbench.action.toggleSidebarPosition";
					}
					static {
						this.LABEL = (0, t.localize)(2817, null);
					}
					static getLabel(Ze) {
						return Ze.getSideBarPosition() === C.Position.LEFT
							? (0, t.localize)(2818, null)
							: (0, t.localize)(2819, null);
					}
					constructor() {
						super({
							id: re.ID,
							title: (0, t.localize2)(2889, "Toggle Primary Side Bar Position"),
							category: w.$ck.View,
							f1: !0,
						});
					}
					run(Ze) {
						const et = Ze.get(C.$mEb),
							rt = Ze.get(E.$gj),
							bt =
								et.getSideBarPosition() === C.Position.LEFT ? "right" : "left";
						return rt.updateValue(te, bt);
					}
				}
				(e.$T5b = re), (0, i.$4X)(re);
				const le = (0, S.$$O)(
					"configure-layout-icon",
					y.$ak.layout,
					(0, t.localize)(2820, null),
				);
				i.$ZX.appendMenuItem(i.$XX.LayoutControlMenu, {
					submenu: i.$XX.LayoutControlMenuSubmenu,
					title: (0, t.localize)(2821, null),
					icon: le,
					group: "1_workbench_layout",
					when: h.$Kj.equals("config.workbench.layoutControl.type", "menu"),
				}),
					i.$ZX.appendMenuItems([
						{
							id: i.$XX.ViewContainerTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: re.ID, title: (0, t.localize)(2822, null) },
								when: h.$Kj.and(
									h.$Kj.notEquals("config.workbench.sideBar.location", "right"),
									h.$Kj.equals(
										"viewContainerLocation",
										(0, c.$J1)(c.ViewContainerLocation.Sidebar),
									),
								),
								order: 1,
							},
						},
						{
							id: i.$XX.ViewTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: re.ID, title: (0, t.localize)(2823, null) },
								when: h.$Kj.and(
									h.$Kj.notEquals("config.workbench.sideBar.location", "right"),
									h.$Kj.equals(
										"viewLocation",
										(0, c.$J1)(c.ViewContainerLocation.Sidebar),
									),
								),
								order: 1,
							},
						},
						{
							id: i.$XX.ViewContainerTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: re.ID, title: (0, t.localize)(2824, null) },
								when: h.$Kj.and(
									h.$Kj.equals("config.workbench.sideBar.location", "right"),
									h.$Kj.equals(
										"viewContainerLocation",
										(0, c.$J1)(c.ViewContainerLocation.Sidebar),
									),
								),
								order: 1,
							},
						},
						{
							id: i.$XX.ViewTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: re.ID, title: (0, t.localize)(2825, null) },
								when: h.$Kj.and(
									h.$Kj.equals("config.workbench.sideBar.location", "right"),
									h.$Kj.equals(
										"viewLocation",
										(0, c.$J1)(c.ViewContainerLocation.Sidebar),
									),
								),
								order: 1,
							},
						},
						{
							id: i.$XX.ViewTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: re.ID, title: (0, t.localize)(2826, null) },
								when: h.$Kj.and(
									h.$Kj.notEquals("config.workbench.sideBar.location", "right"),
									h.$Kj.equals(
										"viewLocation",
										(0, c.$J1)(c.ViewContainerLocation.AuxiliaryBar),
									),
								),
								order: 1,
							},
						},
						{
							id: i.$XX.ViewTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: re.ID, title: (0, t.localize)(2827, null) },
								when: h.$Kj.and(
									h.$Kj.equals("config.workbench.sideBar.location", "right"),
									h.$Kj.equals(
										"viewLocation",
										(0, c.$J1)(c.ViewContainerLocation.AuxiliaryBar),
									),
								),
								order: 1,
							},
						},
					]),
					i.$ZX.appendMenuItem(i.$XX.MenubarAppearanceMenu, {
						group: "3_workbench_layout_move",
						command: { id: re.ID, title: (0, t.localize)(2828, null) },
						when: h.$Kj.notEquals("config.workbench.sideBar.location", "right"),
						order: 2,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarAppearanceMenu, {
						group: "3_workbench_layout_move",
						command: { id: re.ID, title: (0, t.localize)(2829, null) },
						when: h.$Kj.equals("config.workbench.sideBar.location", "right"),
						order: 2,
					}),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleEditorVisibility",
									title: {
										...(0, t.localize2)(2890, "Toggle Editor Area Visibility"),
										mnemonicTitle: (0, t.localize)(2830, null),
									},
									category: w.$ck.View,
									f1: !0,
									toggled: l.$eQb,
									precondition: h.$Kj.and(
										l.$GPb.toNegated(),
										h.$Kj.or(
											l.$wQb.isEqualTo("center"),
											l.$vQb.notEqualsTo("bottom"),
										),
									),
								});
							}
							run(Ve) {
								Ve.get(C.$mEb).toggleMaximizedPanel();
							}
						},
					),
					i.$ZX.appendMenuItem(i.$XX.MenubarViewMenu, {
						group: "2_appearance",
						title: (0, t.localize)(2831, null),
						submenu: i.$XX.MenubarAppearanceMenu,
						order: 1,
					});
				class oe extends i.$3X {
					static {
						this.ID = "workbench.action.toggleSidebarVisibility";
					}
					constructor() {
						super({
							id: oe.ID,
							title: (0, t.localize2)(
								2891,
								"Toggle Primary Side Bar Visibility",
							),
							toggled: {
								condition: l.$gQb,
								title: (0, t.localize)(2832, null),
								mnemonicTitle: (0, t.localize)(2833, null),
							},
							category: w.$ck.View,
							f1: !0,
							keybinding: {
								weight: a.KeybindingWeight.WorkbenchContrib,
								primary: m.KeyMod.CtrlCmd | m.KeyCode.KeyB,
							},
							menu: [
								{
									id: i.$XX.LayoutControlMenuSubmenu,
									group: "0_workbench_layout",
									order: 0,
								},
								{
									id: i.$XX.MenubarAppearanceMenu,
									group: "2_workbench_layout",
									order: 1,
								},
							],
						});
					}
					run(Ze) {
						const et = Ze.get(C.$mEb);
						et.setPartHidden(
							et.isVisible(C.Parts.SIDEBAR_PART),
							C.Parts.SIDEBAR_PART,
						);
					}
				}
				(0, i.$4X)(oe),
					i.$ZX.appendMenuItems([
						{
							id: i.$XX.ViewContainerTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: oe.ID, title: (0, t.localize)(2834, null) },
								when: h.$Kj.and(
									l.$gQb,
									h.$Kj.equals(
										"viewContainerLocation",
										(0, c.$J1)(c.ViewContainerLocation.Sidebar),
									),
								),
								order: 2,
							},
						},
						{
							id: i.$XX.ViewTitleContext,
							item: {
								group: "3_workbench_layout_move",
								command: { id: oe.ID, title: (0, t.localize)(2835, null) },
								when: h.$Kj.and(
									l.$gQb,
									h.$Kj.equals(
										"viewLocation",
										(0, c.$J1)(c.ViewContainerLocation.Sidebar),
									),
								),
								order: 2,
							},
						},
						{
							id: i.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: k.$QV,
									title: (0, t.localize)(2836, null),
									icon: F,
									toggled: { condition: l.$gQb, icon: F },
								},
								when: h.$Kj.or(
									h.$Kj.equals(
										"config.workbench.layoutControl.type",
										"toggles",
									),
									h.$Kj.equals("config.workbench.layoutControl.type", "both"),
								),
								order: 6,
							},
						},
						{
							id: i.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: oe.ID,
									title: (0, t.localize)(2837, null),
									icon: R,
									toggled: { condition: l.$gQb, icon: A },
								},
								when: h.$Kj.and(
									h.$Kj.or(
										h.$Kj.equals(
											"config.workbench.layoutControl.type",
											"toggles",
										),
										h.$Kj.equals("config.workbench.layoutControl.type", "both"),
									),
									h.$Kj.equals("config.workbench.sideBar.location", "left"),
								),
								order: 0,
							},
						},
						{
							id: i.$XX.LayoutControlMenu,
							item: {
								group: "0_workbench_toggles",
								command: {
									id: oe.ID,
									title: (0, t.localize)(2838, null),
									icon: B,
									toggled: { condition: l.$gQb, icon: O },
								},
								when: h.$Kj.and(
									h.$Kj.or(
										h.$Kj.equals(
											"config.workbench.layoutControl.type",
											"toggles",
										),
										h.$Kj.equals("config.workbench.layoutControl.type", "both"),
									),
									h.$Kj.equals("config.workbench.sideBar.location", "right"),
								),
								order: 2,
							},
						},
					]);
				class ae extends i.$3X {
					static {
						this.ID = "workbench.action.toggleStatusbarVisibility";
					}
					static {
						this.a = "workbench.statusBar.visible";
					}
					constructor() {
						super({
							id: ae.ID,
							title: {
								...(0, t.localize2)(2892, "Toggle Status Bar Visibility"),
								mnemonicTitle: (0, t.localize)(2839, null),
							},
							category: w.$ck.View,
							f1: !0,
							toggled: h.$Kj.equals("config.workbench.statusBar.visible", !0),
							menu: [
								{
									id: i.$XX.MenubarAppearanceMenu,
									group: "2_workbench_layout",
									order: 3,
								},
							],
						});
					}
					run(Ze) {
						const et = Ze.get(C.$mEb),
							rt = Ze.get(E.$gj),
							bt = !et.isVisible(C.Parts.STATUSBAR_PART, I.$Bfb);
						return rt.updateValue(ae.a, bt);
					}
				}
				(e.$U5b = ae), (0, i.$4X)(ae);
				class pe extends i.$3X {
					constructor(Ze, et, rt, ft, bt, nt) {
						super({
							id: ft,
							title: rt,
							category: w.$ck.View,
							precondition: bt,
							metadata: nt ? { description: nt } : void 0,
							f1: !0,
						}),
							(this.a = Ze),
							(this.b = et);
					}
					run(Ze) {
						return Ze.get(E.$gj).updateValue(this.a, this.b);
					}
				}
				class $e extends pe {
					static {
						this.ID = "workbench.action.hideEditorTabs";
					}
					constructor() {
						const Ze = h.$Kj.and(
								h.$Kj
									.equals(
										`config.${C.LayoutSettings.EDITOR_TABS_MODE}`,
										C.EditorTabsMode.NONE,
									)
									.negate(),
								l.$bQb.negate(),
							),
							et = (0, t.localize2)(2893, "Hide Editor Tabs");
						super(
							C.LayoutSettings.EDITOR_TABS_MODE,
							C.EditorTabsMode.NONE,
							et,
							$e.ID,
							Ze,
							(0, t.localize2)(2894, "Hide Tab Bar"),
						);
					}
				}
				e.$V5b = $e;
				class ye extends pe {
					static {
						this.ID = "workbench.action.zenHideEditorTabs";
					}
					constructor() {
						const Ze = h.$Kj.and(
								h.$Kj
									.equals(
										`config.${C.ZenModeSettings.SHOW_TABS}`,
										C.EditorTabsMode.NONE,
									)
									.negate(),
								l.$bQb,
							),
							et = (0, t.localize2)(2895, "Hide Editor Tabs in Zen Mode");
						super(
							C.ZenModeSettings.SHOW_TABS,
							C.EditorTabsMode.NONE,
							et,
							ye.ID,
							Ze,
							(0, t.localize2)(2896, "Hide Tab Bar in Zen Mode"),
						);
					}
				}
				e.$W5b = ye;
				class ue extends pe {
					static {
						this.ID = "workbench.action.showMultipleEditorTabs";
					}
					constructor() {
						const Ze = h.$Kj.and(
								h.$Kj
									.equals(
										`config.${C.LayoutSettings.EDITOR_TABS_MODE}`,
										C.EditorTabsMode.MULTIPLE,
									)
									.negate(),
								l.$bQb.negate(),
							),
							et = (0, t.localize2)(2897, "Show Multiple Editor Tabs");
						super(
							C.LayoutSettings.EDITOR_TABS_MODE,
							C.EditorTabsMode.MULTIPLE,
							et,
							ue.ID,
							Ze,
							(0, t.localize2)(2898, "Show Tab Bar with multiple tabs"),
						);
					}
				}
				e.$X5b = ue;
				class fe extends pe {
					static {
						this.ID = "workbench.action.zenShowMultipleEditorTabs";
					}
					constructor() {
						const Ze = h.$Kj.and(
								h.$Kj
									.equals(
										`config.${C.ZenModeSettings.SHOW_TABS}`,
										C.EditorTabsMode.MULTIPLE,
									)
									.negate(),
								l.$bQb,
							),
							et = (0, t.localize2)(
								2899,
								"Show Multiple Editor Tabs in Zen Mode",
							);
						super(
							C.ZenModeSettings.SHOW_TABS,
							C.EditorTabsMode.MULTIPLE,
							et,
							fe.ID,
							Ze,
							(0, t.localize2)(2900, "Show Tab Bar in Zen Mode"),
						);
					}
				}
				e.$Y5b = fe;
				class me extends pe {
					static {
						this.ID = "workbench.action.showEditorTab";
					}
					constructor() {
						const Ze = h.$Kj.and(
								h.$Kj
									.equals(
										`config.${C.LayoutSettings.EDITOR_TABS_MODE}`,
										C.EditorTabsMode.SINGLE,
									)
									.negate(),
								l.$bQb.negate(),
							),
							et = (0, t.localize2)(2901, "Show Single Editor Tab");
						super(
							C.LayoutSettings.EDITOR_TABS_MODE,
							C.EditorTabsMode.SINGLE,
							et,
							me.ID,
							Ze,
							(0, t.localize2)(2902, "Show Tab Bar with one Tab"),
						);
					}
				}
				e.$Z5b = me;
				class ve extends pe {
					static {
						this.ID = "workbench.action.zenShowEditorTab";
					}
					constructor() {
						const Ze = h.$Kj.and(
								h.$Kj
									.equals(
										`config.${C.ZenModeSettings.SHOW_TABS}`,
										C.EditorTabsMode.SINGLE,
									)
									.negate(),
								l.$bQb,
							),
							et = (0, t.localize2)(2903, "Show Single Editor Tab in Zen Mode");
						super(
							C.ZenModeSettings.SHOW_TABS,
							C.EditorTabsMode.SINGLE,
							et,
							ve.ID,
							Ze,
							(0, t.localize2)(2904, "Show Tab Bar in Zen Mode with one Tab"),
						);
					}
				}
				(e.$15b = ve),
					(0, i.$4X)($e),
					(0, i.$4X)(ye),
					(0, i.$4X)(ue),
					(0, i.$4X)(fe),
					(0, i.$4X)(me),
					(0, i.$4X)(ve),
					i.$ZX.appendMenuItem(i.$XX.MenubarAppearanceMenu, {
						submenu: i.$XX.EditorTabsBarShowTabsSubmenu,
						title: (0, t.localize)(2840, null),
						group: "3_workbench_layout_move",
						order: 10,
						when: l.$bQb.negate(),
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarAppearanceMenu, {
						submenu: i.$XX.EditorTabsBarShowTabsZenModeSubmenu,
						title: (0, t.localize)(2841, null),
						group: "3_workbench_layout_move",
						order: 10,
						when: l.$bQb,
					});
				class ge extends i.$3X {
					static {
						this.ID = "workbench.action.editorActionsTitleBar";
					}
					constructor() {
						super({
							id: ge.ID,
							title: (0, t.localize2)(2905, "Move Editor Actions to Title Bar"),
							category: w.$ck.View,
							precondition: h.$Kj
								.equals(
									`config.${C.LayoutSettings.EDITOR_ACTIONS_LOCATION}`,
									C.EditorActionsLocation.TITLEBAR,
								)
								.negate(),
							metadata: {
								description: (0, t.localize2)(
									2906,
									"Move Editor Actions from the tab bar to the title bar",
								),
							},
							f1: !0,
						});
					}
					run(Ze) {
						return Ze.get(E.$gj).updateValue(
							C.LayoutSettings.EDITOR_ACTIONS_LOCATION,
							C.EditorActionsLocation.TITLEBAR,
						);
					}
				}
				(e.$25b = ge), (0, i.$4X)(ge);
				class be extends i.$3X {
					static {
						this.ID = "workbench.action.editorActionsDefault";
					}
					constructor() {
						super({
							id: be.ID,
							title: (0, t.localize2)(2907, "Move Editor Actions to Tab Bar"),
							category: w.$ck.View,
							precondition: h.$Kj.and(
								h.$Kj
									.equals(
										`config.${C.LayoutSettings.EDITOR_ACTIONS_LOCATION}`,
										C.EditorActionsLocation.DEFAULT,
									)
									.negate(),
								h.$Kj
									.equals(
										`config.${C.LayoutSettings.EDITOR_TABS_MODE}`,
										C.EditorTabsMode.NONE,
									)
									.negate(),
							),
							metadata: {
								description: (0, t.localize2)(
									2908,
									"Move Editor Actions from the title bar to the tab bar",
								),
							},
							f1: !0,
						});
					}
					run(Ze) {
						return Ze.get(E.$gj).updateValue(
							C.LayoutSettings.EDITOR_ACTIONS_LOCATION,
							C.EditorActionsLocation.DEFAULT,
						);
					}
				}
				(e.$35b = be), (0, i.$4X)(be);
				class Ce extends i.$3X {
					static {
						this.ID = "workbench.action.hideEditorActions";
					}
					constructor() {
						super({
							id: Ce.ID,
							title: (0, t.localize2)(2909, "Hide Editor Actions"),
							category: w.$ck.View,
							precondition: h.$Kj
								.equals(
									`config.${C.LayoutSettings.EDITOR_ACTIONS_LOCATION}`,
									C.EditorActionsLocation.HIDDEN,
								)
								.negate(),
							metadata: {
								description: (0, t.localize2)(
									2910,
									"Hide Editor Actions in the tab and title bar",
								),
							},
							f1: !0,
						});
					}
					run(Ze) {
						return Ze.get(E.$gj).updateValue(
							C.LayoutSettings.EDITOR_ACTIONS_LOCATION,
							C.EditorActionsLocation.HIDDEN,
						);
					}
				}
				(e.$45b = Ce), (0, i.$4X)(Ce);
				class Le extends i.$3X {
					static {
						this.ID = "workbench.action.showEditorActions";
					}
					constructor() {
						super({
							id: Le.ID,
							title: (0, t.localize2)(2911, "Show Editor Actions"),
							category: w.$ck.View,
							precondition: h.$Kj.equals(
								`config.${C.LayoutSettings.EDITOR_ACTIONS_LOCATION}`,
								C.EditorActionsLocation.HIDDEN,
							),
							metadata: {
								description: (0, t.localize2)(
									2912,
									"Make Editor Actions visible.",
								),
							},
							f1: !0,
						});
					}
					run(Ze) {
						return Ze.get(E.$gj).updateValue(
							C.LayoutSettings.EDITOR_ACTIONS_LOCATION,
							C.EditorActionsLocation.DEFAULT,
						);
					}
				}
				(e.$55b = Le),
					(0, i.$4X)(Le),
					i.$ZX.appendMenuItem(i.$XX.MenubarAppearanceMenu, {
						submenu: i.$XX.EditorActionsPositionSubmenu,
						title: (0, t.localize)(2842, null),
						group: "3_workbench_layout_move",
						order: 11,
					});
				class Fe extends i.$3X {
					static {
						this.ID = "workbench.action.configureEditorTabs";
					}
					constructor() {
						super({
							id: Fe.ID,
							title: (0, t.localize2)(2913, "Configure Tabs"),
							category: w.$ck.View,
						});
					}
					run(Ze) {
						Ze.get(L.$7Z).openSettings({
							jsonEditor: !1,
							query: "workbench.editor tab",
						});
					}
				}
				(e.$65b = Fe), (0, i.$4X)(Fe);
				class Oe extends i.$3X {
					static {
						this.ID = "workbench.action.configureEditor";
					}
					constructor() {
						super({
							id: Oe.ID,
							title: (0, t.localize2)(2914, "Configure Editors"),
							category: w.$ck.View,
						});
					}
					run(Ze) {
						Ze.get(L.$7Z).openSettings({
							jsonEditor: !1,
							query: "workbench.editor",
						});
					}
				}
				if (
					((e.$75b = Oe),
					(0, i.$4X)(Oe),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleSeparatePinnedEditorTabs",
									title: (0, t.localize2)(2915, "Separate Pinned Editor Tabs"),
									category: w.$ck.View,
									precondition: h.$Kj.equals(
										`config.${C.LayoutSettings.EDITOR_TABS_MODE}`,
										C.EditorTabsMode.MULTIPLE,
									),
									metadata: {
										description: (0, t.localize2)(
											2916,
											"Toggle whether pinned editor tabs are shown on a separate row above unpinned tabs.",
										),
									},
									f1: !0,
								});
							}
							run(Ve) {
								const Ze = Ve.get(E.$gj),
									rt = !Ze.getValue("workbench.editor.pinnedTabsOnSeparateRow");
								return Ze.updateValue(
									"workbench.editor.pinnedTabsOnSeparateRow",
									rt,
								);
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleZenMode",
									title: {
										...(0, t.localize2)(2917, "Toggle Zen Mode"),
										mnemonicTitle: (0, t.localize)(2843, null),
									},
									precondition: l.$GPb.toNegated(),
									category: w.$ck.View,
									f1: !0,
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: (0, m.$os)(m.$ps, m.KeyCode.KeyZ),
										mac: { primary: (0, m.$os)(m.$qs, m.KeyCode.KeyZ) },
									},
									toggled: l.$bQb,
									menu: [
										{
											id: i.$XX.MenubarAppearanceMenu,
											group: "1_toggle_view",
											order: 2,
										},
									],
								});
							}
							run(Ve) {
								return Ve.get(C.$mEb).toggleZenMode();
							}
						},
					),
					a.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.exitZenMode",
						weight: a.KeybindingWeight.EditorContrib - 1e3,
						handler(Ve) {
							const Ze = Ve.get(C.$mEb),
								et = Ve.get(h.$6j);
							l.$bQb.getValue(et) && Ze.toggleZenMode();
						},
						when: l.$bQb,
						primary: (0, m.$os)(m.KeyCode.Escape, m.KeyCode.Escape),
					}),
					r.$l || r.$n || r.$r)
				) {
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleMenuBar",
									title: {
										...(0, t.localize2)(2918, "Toggle Menu Bar"),
										mnemonicTitle: (0, t.localize)(2844, null),
									},
									category: w.$ck.View,
									f1: !0,
									toggled: h.$Kj.and(
										u.$8Lb.toNegated(),
										h.$Kj.notEquals(
											"config.window.menuBarVisibility",
											"hidden",
										),
										h.$Kj.notEquals(
											"config.window.menuBarVisibility",
											"toggle",
										),
										h.$Kj.notEquals(
											"config.window.menuBarVisibility",
											"compact",
										),
									),
									menu: [
										{
											id: i.$XX.MenubarAppearanceMenu,
											group: "2_workbench_layout",
											order: 0,
										},
									],
								});
							}
							run(Ze) {
								return Ze.get(C.$mEb).toggleMenuBar();
							}
						},
					);
					for (const Ve of [i.$XX.TitleBarContext, i.$XX.TitleBarTitleContext])
						i.$ZX.appendMenuItem(Ve, {
							command: {
								id: "workbench.action.toggleMenuBar",
								title: (0, t.localize)(2845, null),
								toggled: h.$Kj.and(
									u.$8Lb.toNegated(),
									h.$Kj.notEquals("config.window.menuBarVisibility", "hidden"),
									h.$Kj.notEquals("config.window.menuBarVisibility", "toggle"),
									h.$Kj.notEquals("config.window.menuBarVisibility", "compact"),
								),
							},
							when: h.$Kj.and(
								l.$GPb.toNegated(),
								h.$Kj.notEquals(l.$kQb.key, P.TitlebarStyle.NATIVE),
								l.$FPb.negate(),
							),
							group: "2_config",
							order: 0,
						});
				}
				(0, i.$4X)(
					class extends i.$3X {
						constructor() {
							super({
								id: "workbench.action.resetViewLocations",
								title: (0, t.localize2)(2919, "Reset View Locations"),
								category: w.$ck.View,
								f1: !0,
							});
						}
						run(Ve) {
							return Ve.get(c.$K1).reset();
						}
					},
				),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.moveView",
									title: (0, t.localize2)(2920, "Move View"),
									category: w.$ck.View,
									f1: !0,
								});
							}
							async run(Ve) {
								const Ze = Ve.get(c.$K1),
									et = Ve.get(d.$Li),
									rt = Ve.get(g.$DJ),
									ft = Ve.get(h.$6j),
									bt = Ve.get(o.$6Sb),
									nt = l.$zQb.getValue(ft);
								let lt;
								nt && Ze.getViewDescriptorById(nt)?.canMoveView && (lt = nt);
								try {
									if (((lt = await this.b(rt, Ze, bt, lt)), !lt)) return;
									const ct = new xe();
									et.invokeFunction((gt) => ct.run(gt, lt));
								} catch {}
							}
							a(Ve, Ze) {
								const et = [];
								return (
									Ze.getVisiblePaneCompositeIds(
										c.ViewContainerLocation.Sidebar,
									).forEach((nt) => {
										const lt = Ve.getViewContainerById(nt),
											ct = Ve.getViewContainerModel(lt);
										let gt = !1;
										ct.visibleViewDescriptors.forEach((ht) => {
											ht.canMoveView &&
												(gt ||
													(et.push({
														type: "separator",
														label: (0, t.localize)(2846, null, ct.title),
													}),
													(gt = !0)),
												et.push({ id: ht.id, label: ht.name.value }));
										});
									}),
									Ze.getPinnedPaneCompositeIds(
										c.ViewContainerLocation.Panel,
									).forEach((nt) => {
										const lt = Ve.getViewContainerById(nt),
											ct = Ve.getViewContainerModel(lt);
										let gt = !1;
										ct.visibleViewDescriptors.forEach((ht) => {
											ht.canMoveView &&
												(gt ||
													(et.push({
														type: "separator",
														label: (0, t.localize)(2847, null, ct.title),
													}),
													(gt = !0)),
												et.push({ id: ht.id, label: ht.name.value }));
										});
									}),
									Ze.getPinnedPaneCompositeIds(
										c.ViewContainerLocation.AuxiliaryBar,
									).forEach((nt) => {
										const lt = Ve.getViewContainerById(nt),
											ct = Ve.getViewContainerModel(lt);
										let gt = !1;
										ct.visibleViewDescriptors.forEach((ht) => {
											ht.canMoveView &&
												(gt ||
													(et.push({
														type: "separator",
														label: (0, t.localize)(2848, null, ct.title),
													}),
													(gt = !0)),
												et.push({ id: ht.id, label: ht.name.value }));
										});
									}),
									et
								);
							}
							async b(Ve, Ze, et, rt) {
								const ft = new v.$Zc(),
									bt = ft.add(Ve.createQuickPick({ useSeparators: !0 }));
								return (
									(bt.placeholder = (0, t.localize)(2849, null)),
									(bt.items = this.a(Ze, et)),
									(bt.selectedItems = bt.items.filter((nt) => nt.id === rt)),
									new Promise((nt, lt) => {
										ft.add(
											bt.onDidAccept(() => {
												const ct = bt.selectedItems[0];
												ct.id ? nt(ct.id) : lt(), bt.hide();
											}),
										),
											ft.add(
												bt.onDidHide(() => {
													ft.dispose(), lt();
												}),
											),
											bt.show();
									})
								);
							}
						},
					);
				class xe extends i.$3X {
					constructor() {
						super({
							id: "workbench.action.moveFocusedView",
							title: (0, t.localize2)(2921, "Move Focused View"),
							category: w.$ck.View,
							precondition: l.$zQb.notEqualsTo(""),
							f1: !0,
						});
					}
					run(Ze, et) {
						const rt = Ze.get(c.$K1),
							ft = Ze.get(n.$HMb),
							bt = Ze.get(g.$DJ),
							nt = Ze.get(h.$6j),
							lt = Ze.get(p.$GO),
							ct = Ze.get(o.$6Sb),
							gt = et || l.$zQb.getValue(nt);
						if (gt === void 0 || gt.trim() === "") {
							lt.error((0, t.localize)(2850, null));
							return;
						}
						const ht = rt.getViewDescriptorById(gt);
						if (!ht || !ht.canMoveView) {
							lt.error((0, t.localize)(2851, null));
							return;
						}
						const Rt = new v.$Zc(),
							Nt = Rt.add(bt.createQuickPick({ useSeparators: !0 }));
						(Nt.placeholder = (0, t.localize)(2852, null)),
							(Nt.title = (0, t.localize)(2853, null, ht.name.value));
						const jt = [],
							ti = rt.getViewContainerByViewId(gt),
							kt = rt.getViewLocationById(gt),
							hi = rt.getViewContainerModel(ti).allViewDescriptors.length === 1;
						(hi && kt === c.ViewContainerLocation.Panel) ||
							jt.push({
								id: "_.panel.newcontainer",
								label: (0, t.localize)(2854, null),
							}),
							(hi && kt === c.ViewContainerLocation.Sidebar) ||
								jt.push({
									id: "_.sidebar.newcontainer",
									label: (0, t.localize)(2855, null),
								}),
							(hi && kt === c.ViewContainerLocation.AuxiliaryBar) ||
								jt.push({
									id: "_.auxiliarybar.newcontainer",
									label: (0, t.localize)(2856, null),
								}),
							jt.push({
								type: "separator",
								label: (0, t.localize)(2857, null),
							});
						const Kt = ct.getVisiblePaneCompositeIds(
							c.ViewContainerLocation.Sidebar,
						);
						jt.push(
							...Kt.filter((ze) =>
								ze === rt.getViewContainerByViewId(gt).id
									? !1
									: !rt.getViewContainerById(ze).rejectAddedViews,
							).map((ze) => ({
								id: ze,
								label: rt.getViewContainerModel(rt.getViewContainerById(ze))
									.title,
							})),
						),
							jt.push({
								type: "separator",
								label: (0, t.localize)(2858, null),
							});
						const di = ct.getPinnedPaneCompositeIds(
							c.ViewContainerLocation.Panel,
						);
						jt.push(
							...di
								.filter((ze) =>
									ze === rt.getViewContainerByViewId(gt).id
										? !1
										: !rt.getViewContainerById(ze).rejectAddedViews,
								)
								.map((ze) => ({
									id: ze,
									label: rt.getViewContainerModel(rt.getViewContainerById(ze))
										.title,
								})),
						),
							jt.push({
								type: "separator",
								label: (0, t.localize)(2859, null),
							});
						const Ye = ct.getPinnedPaneCompositeIds(
							c.ViewContainerLocation.AuxiliaryBar,
						);
						jt.push(
							...Ye.filter((ze) =>
								ze === rt.getViewContainerByViewId(gt).id
									? !1
									: !rt.getViewContainerById(ze).rejectAddedViews,
							).map((ze) => ({
								id: ze,
								label: rt.getViewContainerModel(rt.getViewContainerById(ze))
									.title,
							})),
						),
							(Nt.items = jt),
							Rt.add(
								Nt.onDidAccept(() => {
									const ze = Nt.selectedItems[0];
									ze.id === "_.panel.newcontainer"
										? (rt.moveViewToLocation(
												ht,
												c.ViewContainerLocation.Panel,
												this.desc.id,
											),
											ft.openView(gt, !0))
										: ze.id === "_.sidebar.newcontainer"
											? (rt.moveViewToLocation(
													ht,
													c.ViewContainerLocation.Sidebar,
													this.desc.id,
												),
												ft.openView(gt, !0))
											: ze.id === "_.auxiliarybar.newcontainer"
												? (rt.moveViewToLocation(
														ht,
														c.ViewContainerLocation.AuxiliaryBar,
														this.desc.id,
													),
													ft.openView(gt, !0))
												: ze.id &&
													(rt.moveViewsToContainer(
														[ht],
														rt.getViewContainerById(ze.id),
														void 0,
														this.desc.id,
													),
													ft.openView(gt, !0)),
										Nt.hide();
								}),
							),
							Rt.add(Nt.onDidHide(() => Rt.dispose())),
							Nt.show();
					}
				}
				(0, i.$4X)(xe),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.resetFocusedViewLocation",
									title: (0, t.localize2)(2922, "Reset Focused View Location"),
									category: w.$ck.View,
									f1: !0,
									precondition: l.$zQb.notEqualsTo(""),
								});
							}
							run(Ve) {
								const Ze = Ve.get(c.$K1),
									et = Ve.get(h.$6j),
									rt = Ve.get(p.$GO),
									ft = Ve.get(n.$HMb),
									bt = l.$zQb.getValue(et);
								let nt = null;
								if (
									(bt !== void 0 &&
										bt.trim() !== "" &&
										(nt = Ze.getViewDescriptorById(bt)),
									!nt)
								) {
									rt.error((0, t.localize)(2860, null));
									return;
								}
								const lt = Ze.getDefaultContainerById(nt.id);
								!lt ||
									lt === Ze.getViewContainerByViewId(nt.id) ||
									(Ze.moveViewsToContainer([nt], lt, void 0, this.desc.id),
									ft.openView(nt.id, !0));
							}
						},
					);
				class He extends i.$3X {
					static {
						this.a = 60;
					}
					b(Ze, et, rt, ft) {
						let bt;
						if (ft === void 0) {
							const nt = rt.hasFocus(C.Parts.EDITOR_PART),
								lt = rt.hasFocus(C.Parts.SIDEBAR_PART),
								ct = rt.hasFocus(C.Parts.PANEL_PART),
								gt = rt.hasFocus(C.Parts.AUXILIARYBAR_PART);
							lt
								? (bt = C.Parts.SIDEBAR_PART)
								: ct
									? (bt = C.Parts.PANEL_PART)
									: nt
										? (bt = C.Parts.EDITOR_PART)
										: gt && (bt = C.Parts.AUXILIARYBAR_PART);
						} else bt = ft;
						bt && rt.resizePart(bt, Ze, et);
					}
				}
				class Ke extends He {
					constructor() {
						super({
							id: "workbench.action.increaseViewSize",
							title: (0, t.localize2)(2923, "Increase Current View Size"),
							f1: !0,
							precondition: l.$GPb.toNegated(),
						});
					}
					run(Ze) {
						this.b(He.a, He.a, Ze.get(C.$mEb));
					}
				}
				class Je extends He {
					constructor() {
						super({
							id: "workbench.action.increaseViewWidth",
							title: (0, t.localize2)(2924, "Increase Editor Width"),
							f1: !0,
							precondition: l.$GPb.toNegated(),
						});
					}
					run(Ze) {
						this.b(He.a, 0, Ze.get(C.$mEb), C.Parts.EDITOR_PART);
					}
				}
				class Te extends He {
					constructor() {
						super({
							id: "workbench.action.increaseViewHeight",
							title: (0, t.localize2)(2925, "Increase Editor Height"),
							f1: !0,
							precondition: l.$GPb.toNegated(),
						});
					}
					run(Ze) {
						this.b(0, He.a, Ze.get(C.$mEb), C.Parts.EDITOR_PART);
					}
				}
				class Ee extends He {
					constructor() {
						super({
							id: "workbench.action.decreaseViewSize",
							title: (0, t.localize2)(2926, "Decrease Current View Size"),
							f1: !0,
							precondition: l.$GPb.toNegated(),
						});
					}
					run(Ze) {
						this.b(-He.a, -He.a, Ze.get(C.$mEb));
					}
				}
				class Ie extends He {
					constructor() {
						super({
							id: "workbench.action.decreaseViewWidth",
							title: (0, t.localize2)(2927, "Decrease Editor Width"),
							f1: !0,
							precondition: l.$GPb.toNegated(),
						});
					}
					run(Ze) {
						this.b(-He.a, 0, Ze.get(C.$mEb), C.Parts.EDITOR_PART);
					}
				}
				class Be extends He {
					constructor() {
						super({
							id: "workbench.action.decreaseViewHeight",
							title: (0, t.localize2)(2928, "Decrease Editor Height"),
							f1: !0,
							precondition: l.$GPb.toNegated(),
						});
					}
					run(Ze) {
						this.b(0, -He.a, Ze.get(C.$mEb), C.Parts.EDITOR_PART);
					}
				}
				(0, i.$4X)(Ke),
					(0, i.$4X)(Je),
					(0, i.$4X)(Te),
					(0, i.$4X)(Ee),
					(0, i.$4X)(Ie),
					(0, i.$4X)(Be);
				function Se(Ve) {
					return Ve.iconA !== void 0;
				}
				const ke = (Ve, Ze, et, rt) => ({
						id: Ve,
						active: Ze,
						label: et,
						visualIcon: rt,
						activeIcon: y.$ak.eye,
						inactiveIcon: y.$ak.eyeClosed,
						activeAriaLabel: (0, t.localize)(2861, null),
						inactiveAriaLabel: (0, t.localize)(2862, null),
						useButtons: !0,
					}),
					Ue = (Ve, Ze, et, rt) => ({
						id: Ve,
						active: Ze,
						label: et,
						visualIcon: rt,
						activeIcon: y.$ak.check,
						activeAriaLabel: (0, t.localize)(2863, null),
						useButtons: !1,
					}),
					qe = h.$Kj.and(
						u.$8Lb.toNegated(),
						h.$Kj.notEquals("config.window.menuBarVisibility", "hidden"),
						h.$Kj.notEquals("config.window.menuBarVisibility", "toggle"),
						h.$Kj.notEquals("config.window.menuBarVisibility", "compact"),
					),
					Ae = [];
				(!r.$m || !r.$p) &&
					Ae.push(
						ke(
							"workbench.action.toggleMenuBar",
							qe,
							(0, t.localize)(2864, null),
							D,
						),
					),
					Ae.push(
						ke(oe.ID, l.$gQb, (0, t.localize)(2865, null), {
							whenA: h.$Kj.equals("config.workbench.sideBar.location", "left"),
							iconA: A,
							iconB: O,
						}),
						ke(f.$O5b.ID, l.$sQb, (0, t.localize)(2866, null), {
							whenA: h.$Kj.equals("config.workbench.sideBar.location", "left"),
							iconA: O,
							iconB: A,
						}),
						ke(b.$P5b.ID, l.$xQb, (0, t.localize)(2867, null), U),
						ke(
							ae.ID,
							h.$Kj.equals("config.workbench.statusBar.visible", !0),
							(0, t.localize)(2868, null),
							z,
						),
					);
				const Me = [
						Ue(
							se.ID,
							h.$Kj.equals("config.workbench.sideBar.location", "left"),
							(0, t.localize)(2869, null),
							A,
						),
						Ue(
							Z.ID,
							h.$Kj.equals("config.workbench.sideBar.location", "right"),
							(0, t.localize)(2870, null),
							O,
						),
					],
					De = [
						Ue(
							"workbench.action.alignPanelLeft",
							l.$wQb.isEqualTo("left"),
							(0, t.localize)(2871, null),
							W,
						),
						Ue(
							"workbench.action.alignPanelRight",
							l.$wQb.isEqualTo("right"),
							(0, t.localize)(2872, null),
							X,
						),
						Ue(
							"workbench.action.alignPanelCenter",
							l.$wQb.isEqualTo("center"),
							(0, t.localize)(2873, null),
							Y,
						),
						Ue(
							"workbench.action.alignPanelJustify",
							l.$wQb.isEqualTo("justify"),
							(0, t.localize)(2874, null),
							ie,
						),
					],
					Re = [
						Ue(
							"workbench.action.toggleFullScreen",
							l.$FPb,
							(0, t.localize)(2875, null),
							ne,
						),
						Ue(
							"workbench.action.toggleZenMode",
							l.$bQb,
							(0, t.localize)(2876, null),
							_,
						),
						Ue(
							"workbench.action.toggleCenteredLayout",
							l.$cQb,
							(0, t.localize)(2877, null),
							ee,
						),
					],
					je = new Set();
				for (const { active: Ve } of [...Ae, ...Me, ...De, ...Re])
					for (const Ze of Ve.keys()) je.add(Ze);
				(0, i.$4X)(
					class extends i.$3X {
						constructor() {
							super({
								id: "workbench.action.customizeLayout",
								title: (0, t.localize2)(2929, "Customize Layout..."),
								f1: !0,
								icon: le,
								menu: [{ id: i.$XX.LayoutControlMenuSubmenu, group: "z_end" }],
							});
						}
						getItems(Ze, et) {
							const rt = (ft) => {
								const bt = ft.active.evaluate(Ze.getContext(null));
								let nt = ft.useButtons
									? ft.label
									: ft.label +
										(bt && ft.activeIcon
											? ` $(${ft.activeIcon.id})`
											: !bt && ft.inactiveIcon
												? ` $(${ft.inactiveIcon.id})`
												: "");
								const lt =
									ft.label +
									(bt && ft.activeAriaLabel
										? ` (${ft.activeAriaLabel})`
										: !bt && ft.inactiveAriaLabel
											? ` (${ft.inactiveAriaLabel})`
											: "");
								if (ft.visualIcon) {
									let gt = ft.visualIcon;
									Se(gt) &&
										(gt = gt.whenA.evaluate(Ze.getContext(null))
											? gt.iconA
											: gt.iconB),
										(nt = `$(${gt.id}) ${nt}`);
								}
								const ct = bt ? ft.activeIcon : ft.inactiveIcon;
								return {
									type: "item",
									id: ft.id,
									label: nt,
									ariaLabel: lt,
									keybinding: et.lookupKeybinding(ft.id, Ze),
									buttons: ft.useButtons
										? [
												{
													alwaysVisible: !1,
													tooltip: lt,
													iconClass: ct ? $.ThemeIcon.asClassName(ct) : void 0,
												},
											]
										: void 0,
								};
							};
							return [
								{ type: "separator", label: (0, t.localize)(2878, null) },
								...Ae.map(rt),
								{ type: "separator", label: (0, t.localize)(2879, null) },
								...Me.map(rt),
								{ type: "separator", label: (0, t.localize)(2880, null) },
								...De.map(rt),
								{ type: "separator", label: (0, t.localize)(2881, null) },
								...Re.map(rt),
							];
						}
						run(Ze) {
							if (this.a) {
								this.a.hide();
								return;
							}
							const et = Ze.get(E.$gj),
								rt = Ze.get(h.$6j),
								ft = Ze.get(s.$ek),
								bt = Ze.get(g.$DJ),
								nt = Ze.get(T.$uZ),
								lt = new v.$Zc(),
								ct = lt.add(bt.createQuickPick({ useSeparators: !0 }));
							(this.a = ct),
								(ct.items = this.getItems(rt, nt)),
								(ct.ignoreFocusOut = !0),
								(ct.hideInput = !0),
								(ct.title = (0, t.localize)(2882, null));
							const gt = {
									alwaysVisible: !0,
									iconClass: $.ThemeIcon.asClassName(y.$ak.close),
									tooltip: (0, t.localize)(2883, null),
								},
								ht = {
									alwaysVisible: !0,
									iconClass: $.ThemeIcon.asClassName(y.$ak.discard),
									tooltip: (0, t.localize)(2884, null),
								};
							ct.buttons = [ht, gt];
							let Rt;
							lt.add(
								rt.onDidChangeContext((Nt) => {
									Nt.affectsSome(je) &&
										((ct.items = this.getItems(rt, nt)),
										Rt &&
											(ct.activeItems = ct.items.filter(
												(jt) => jt.id === Rt?.id,
											)),
										setTimeout(() => bt.focus(), 0));
								}),
							),
								lt.add(
									ct.onDidAccept((Nt) => {
										ct.selectedItems.length &&
											((Rt = ct.selectedItems[0]), ft.executeCommand(Rt.id));
									}),
								),
								lt.add(
									ct.onDidTriggerItemButton((Nt) => {
										Nt.item && ((Rt = Nt.item), ft.executeCommand(Rt.id));
									}),
								),
								lt.add(
									ct.onDidTriggerButton((Nt) => {
										if (Nt === gt) ct.hide();
										else if (Nt === ht) {
											const jt = (ti) => {
												const kt = et.inspect(ti);
												et.updateValue(ti, kt.defaultValue);
											};
											jt("workbench.activityBar.location"),
												jt("workbench.sideBar.location"),
												jt("workbench.statusBar.visible"),
												jt("workbench.panel.defaultLocation"),
												(!r.$m || !r.$p) && jt("window.menuBarVisibility"),
												ft.executeCommand("workbench.action.alignPanelCenter");
										}
									}),
								),
								lt.add(
									ct.onDidHide(() => {
										ct.dispose();
									}),
								),
								lt.add(
									ct.onDispose(() => {
										(this.a = void 0), lt.dispose();
									}),
								),
								ct.show();
						}
					},
				);
			},
		),
		define(
			de[3802],
			he([
				1, 0, 4, 3, 550, 159, 5, 166, 49, 50, 35, 123, 25, 51, 7, 21, 96, 20,
				24, 168, 716, 28, 8, 212, 136, 72, 3624, 3626, 3625, 100, 6, 2353,
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
			) {
				"use strict";
				var D, M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c6b = e.$b6b = e.$a6b = e.$_5b = void 0);
				let N = class extends w.Part {
					static {
						D = this;
					}
					static {
						this.HEIGHT = 22;
					}
					getViewModel() {
						return this.viewModel;
					}
					constructor(z, F, x, H, q, V, G, K) {
						super(z, { hasTitle: !1 }, x, q, V),
							(this.gb = F),
							(this.hb = H),
							(this.ib = q),
							(this.jb = G),
							(this.kb = K),
							(this.minimumWidth = 0),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = D.HEIGHT),
							(this.maximumHeight = D.HEIGHT),
							(this.y = []),
							(this.viewModel = this.D(new T.$85b(this.ib))),
							(this.onDidChangeEntryVisibility =
								this.viewModel.onDidChangeEntryVisibility),
							(this.$ = this.D(new L.$re())),
							(this.onWillDispose = this.$.event),
							(this.db = this.D(
								this.gb.createInstance(S.$Vyb, "element", !0, (J, W) => ({
									persistence: { hideOnKeyDown: !0, sticky: W },
								})),
							)),
							(this.eb = this.D(new i.$2c())),
							(this.fb = new Set()),
							this.lb();
					}
					lb() {
						this.D(this.onDidChangeEntryVisibility(() => this.ub())),
							this.D(
								this.hb.onDidChangeWorkbenchState(() => this.updateStyles()),
							);
					}
					addEntry(z, F, x, H = 0) {
						let q;
						return (
							(0, d.$f6b)(H)
								? (q = H)
								: (q = { primary: H, secondary: (0, v.$Aj)(F) }),
							this.element ? this.nb(z, F, x, q) : this.mb(z, F, x, q)
						);
					}
					mb(z, F, x, H) {
						const q = { entry: z, id: F, alignment: x, priority: H };
						return (
							this.y.push(q),
							{
								update: (G) => {
									q.accessor ? q.accessor.update(G) : (q.entry = G);
								},
								dispose: () => {
									q.accessor
										? q.accessor.dispose()
										: (this.y = this.y.filter((G) => G !== q));
								},
							}
						);
					}
					nb(z, F, x, H) {
						const q = this.ob(F, x),
							V = this.gb.createInstance(P.$$5b, q, z, this.db),
							G = new (class {
								constructor() {
									(this.id = F),
										(this.alignment = x),
										(this.priority = H),
										(this.container = q),
										(this.labelContainer = V.labelContainer);
								}
								get name() {
									return V.name;
								}
								get hasCommand() {
									return V.hasCommand;
								}
							})(),
							{ needsFullRefresh: K } = this.pb(G, !0);
						return (
							K ? this.sb() : this.tb(G),
							{
								update: (J) => {
									V.update(J);
								},
								dispose: () => {
									const { needsFullRefresh: J } = this.pb(G, !1);
									J ? this.sb() : q.remove(), (0, i.$Vc)(V);
								},
							}
						);
					}
					ob(z, F, ...x) {
						const H = document.createElement("div");
						return (
							(H.id = z),
							H.classList.add("statusbar-item"),
							x && H.classList.add(...x),
							F === d.StatusbarAlignment.RIGHT
								? H.classList.add("right")
								: H.classList.add("left"),
							H
						);
					}
					pb(z, F) {
						const x = this.viewModel.entries;
						F ? this.viewModel.add(z) : this.viewModel.remove(z);
						const H = this.viewModel.entries;
						return (
							F ? x.splice(H.indexOf(z), 0, z) : x.splice(x.indexOf(z), 1),
							{ needsFullRefresh: !(0, f.$yb)(x, H) }
						);
					}
					isEntryVisible(z) {
						return !this.viewModel.isHidden(z);
					}
					updateEntryVisibility(z, F) {
						F ? this.viewModel.show(z) : this.viewModel.hide(z);
					}
					focusNextEntry() {
						this.viewModel.focusNextEntry();
					}
					focusPreviousEntry() {
						this.viewModel.focusPreviousEntry();
					}
					isEntryFocused() {
						return this.viewModel.isEntryFocused();
					}
					focus(z = !0) {
						this.getContainer()?.focus();
						const F = this.viewModel.lastFocusedEntry;
						z && F && setTimeout(() => F.labelContainer.focus(), 0);
					}
					Q(z) {
						this.element = z;
						const F = this.D(this.kb.createScoped(this.element));
						return (
							k.$jQb.bindTo(F).set(!0),
							(this.bb = document.createElement("div")),
							this.bb.classList.add("left-items", "items-container"),
							this.element.appendChild(this.bb),
							(this.element.tabIndex = 0),
							(this.cb = document.createElement("div")),
							this.cb.classList.add("right-items", "items-container"),
							this.element.appendChild(this.cb),
							this.D((0, n.$0fb)(z, n.$$gb.CONTEXT_MENU, (x) => this.vb(x))),
							this.D(E.$Qhb.addTarget(z)),
							this.D(
								(0, n.$0fb)(z, E.EventType.Contextmenu, (x) => this.vb(x)),
							),
							this.rb(),
							this.element
						);
					}
					rb() {
						for (this.sb(); this.y.length; ) {
							const z = this.y.shift();
							z &&
								(z.accessor = this.addEntry(
									z.entry,
									z.id,
									z.alignment,
									z.priority.primary,
								));
						}
					}
					sb() {
						const z = (0, l.$wg)(this.bb),
							F = (0, l.$wg)(this.cb);
						(0, n.$9fb)(z), (0, n.$9fb)(F);
						for (const x of [
							...this.viewModel.getEntries(d.StatusbarAlignment.LEFT),
							...this.viewModel
								.getEntries(d.StatusbarAlignment.RIGHT)
								.reverse(),
						])
							(x.alignment === d.StatusbarAlignment.LEFT ? z : F).appendChild(
								x.container,
							);
						this.ub();
					}
					tb(z) {
						const F = this.viewModel.getEntries(z.alignment);
						z.alignment === d.StatusbarAlignment.RIGHT && F.reverse();
						const x = (0, l.$wg)(
								z.alignment === d.StatusbarAlignment.LEFT ? this.bb : this.cb,
							),
							H = F.indexOf(z);
						H + 1 === F.length
							? x.appendChild(z.container)
							: x.insertBefore(z.container, F[H + 1].container),
							this.ub();
					}
					ub() {
						const z = this.viewModel.entries,
							F = new Map();
						for (const V of z)
							this.viewModel.isHidden(V.id) || F.set(V.id, V),
								V.container.classList.remove("compact-left", "compact-right");
						const x = new Map();
						for (const V of F.values())
							if (
								(0, d.$e6b)(V.priority.primary) &&
								V.priority.primary.compact
							) {
								const G = V.priority.primary.id,
									K = F.get(G);
								if (!K) continue;
								let J = x.get(G);
								if (!J) {
									for (const W of x.values())
										if (W.has(G)) {
											J = W;
											break;
										}
									J || ((J = new Map()), x.set(G, J));
								}
								J.set(V.id, V),
									J.set(K.id, K),
									V.priority.primary.alignment === d.StatusbarAlignment.LEFT
										? (K.container.classList.add("compact-left"),
											V.container.classList.add("compact-right"))
										: (K.container.classList.add("compact-right"),
											V.container.classList.add("compact-left"));
							}
						const H = this.w(a.$RFb),
							q = this.w(a.$TFb);
						if (
							((this.eb.value = new i.$Zc()),
							H && q && !(0, $.$gP)(this.h.type))
						)
							for (const [, V] of x)
								for (const G of V.values())
									G.hasCommand &&
										(this.eb.value.add(
											(0, n.$0fb)(G.labelContainer, n.$$gb.MOUSE_OVER, () => {
												V.forEach(
													(K) => (K.labelContainer.style.backgroundColor = H),
												),
													(G.labelContainer.style.backgroundColor = q);
											}),
										),
										this.eb.value.add(
											(0, n.$0fb)(G.labelContainer, n.$$gb.MOUSE_OUT, () => {
												V.forEach(
													(K) => (K.labelContainer.style.backgroundColor = ""),
												);
											}),
										));
					}
					vb(z) {
						n.$ahb.stop(z, !0);
						const F = new b.$2fb((0, n.getWindow)(this.element), z);
						let x;
						this.jb.showContextMenu({
							getAnchor: () => F,
							getActions: () => ((x = this.wb(F)), x),
							onHide: () => {
								x && (0, i.$Wc)(x);
							},
						});
					}
					wb(z) {
						const F = [];
						F.push(
							(0, r.$wj)({
								id: s.$U5b.ID,
								label: (0, t.localize)(3689, null),
								run: () => this.gb.invokeFunction((q) => new s.$U5b().run(q)),
							}),
						),
							F.push(new r.$tj());
						const x = new Set();
						for (const q of this.viewModel.entries)
							x.has(q.id) ||
								(F.push(new I.$95b(q.id, q.name, this.viewModel)), x.add(q.id));
						let H;
						for (let q = z.target; q; q = q.parentElement) {
							const V = this.viewModel.findEntry(q);
							if (V) {
								H = V;
								break;
							}
						}
						return (
							H &&
								(F.push(new r.$tj()),
								F.push(new I.$05b(H.id, H.name, this.viewModel))),
							F
						);
					}
					updateStyles() {
						super.updateStyles();
						const z = (0, l.$wg)(this.getContainer()),
							F = [...this.fb].sort((K, J) => K.priority - J.priority)[0],
							x =
								this.w(
									F?.background ??
										(this.hb.getWorkbenchState() !== h.WorkbenchState.EMPTY
											? a.$KFb
											: a.$LFb),
								) || "";
						z.style.backgroundColor = x;
						const H =
							this.w(
								F?.foreground ??
									(this.hb.getWorkbenchState() !== h.WorkbenchState.EMPTY
										? a.$IFb
										: a.$JFb),
							) || "";
						z.style.color = H;
						const q = this.w(a.$QFb),
							V =
								this.w(
									F?.border ??
										(this.hb.getWorkbenchState() !== h.WorkbenchState.EMPTY
											? a.$MFb
											: a.$OFb),
								) || this.w(c.$OP);
						V
							? (z.classList.add("status-border-top"),
								z.style.setProperty("--status-border-top-color", V))
							: (z.classList.remove("status-border-top"),
								z.style.removeProperty("--status-border-top-color"));
						const G = this.w(a.$NFb);
						this.c || (this.c = (0, n.$Rgb)(z)),
							(this.c.textContent = `

				/* Status bar focus outline */
				.monaco-workbench .part.statusbar:focus {
					outline-color: ${G};
				}

				/* Status bar item focus outline */
				.monaco-workbench .part.statusbar > .items-container > .statusbar-item a:focus-visible {
					outline: 1px solid ${this.w(c.$PP) ?? q};
					outline-offset: ${V ? "-2px" : "-1px"};
				}

				/* Notification Beak */
				.monaco-workbench .part.statusbar > .items-container > .statusbar-item.has-beak > .status-bar-item-beak-container:before {
					border-bottom-color: ${x};
				}
			`);
					}
					layout(z, F, x, H) {
						super.layout(z, F, x, H), super.Z(z, F);
					}
					overrideStyle(z) {
						return (
							this.fb.add(z),
							this.updateStyles(),
							(0, i.$Yc)(() => {
								this.fb.delete(z), this.updateStyles();
							})
						);
					}
					toJSON() {
						return { type: p.Parts.STATUSBAR_PART };
					}
					dispose() {
						this.$.fire(), super.dispose();
					}
				};
				N = D = Ne(
					[
						j(1, C.$Li),
						j(2, u.$iP),
						j(3, h.$Vi),
						j(4, g.$lq),
						j(5, p.$mEb),
						j(6, m.$Xxb),
						j(7, y.$6j),
					],
					N,
				);
				let A = class extends N {
					constructor(z, F, x, H, q, V, G) {
						super(p.Parts.STATUSBAR_PART, z, F, x, H, q, V, G);
					}
				};
				(e.$_5b = A),
					(e.$_5b = A =
						Ne(
							[
								j(0, C.$Li),
								j(1, u.$iP),
								j(2, h.$Vi),
								j(3, g.$lq),
								j(4, p.$mEb),
								j(5, m.$Xxb),
								j(6, y.$6j),
							],
							A,
						));
				let R = class extends N {
					static {
						M = this;
					}
					static {
						this.xb = 1;
					}
					constructor(z, F, x, H, q, V, G, K) {
						const J = M.xb++;
						super(`workbench.parts.auxiliaryStatus.${J}`, F, x, H, q, V, G, K),
							(this.container = z),
							(this.height = N.HEIGHT);
					}
				};
				(e.$a6b = R),
					(e.$a6b =
						R =
						M =
							Ne(
								[
									j(1, C.$Li),
									j(2, u.$iP),
									j(3, h.$Vi),
									j(4, g.$lq),
									j(5, p.$mEb),
									j(6, m.$Xxb),
									j(7, y.$6j),
								],
								R,
							));
				let O = class extends w.$lEb {
					constructor(z, F, x) {
						super("workbench.statusBarService", x, F),
							(this.r = z),
							(this.mainPart = this.D(this.r.createInstance(A))),
							(this.c = this.D(new L.$re())),
							(this.m = this.c.event),
							(this.onDidChangeEntryVisibility =
								this.mainPart.onDidChangeEntryVisibility),
							this.D(this.registerPart(this.mainPart));
					}
					getViewModel() {
						return this.mainPart.getViewModel();
					}
					createAuxiliaryStatusbarPart(z) {
						const F = document.createElement("footer");
						F.classList.add("part", "statusbar"),
							F.setAttribute("role", "status"),
							(F.style.position = "relative"),
							F.setAttribute("aria-live", "off"),
							F.setAttribute("tabindex", "0"),
							z.appendChild(F);
						const x = this.r.createInstance(R, F),
							H = this.registerPart(x);
						return (
							x.create(F),
							L.Event.once(x.onWillDispose)(() => H.dispose()),
							this.c.fire(x),
							x
						);
					}
					createScoped(z, F) {
						return F.add(this.r.createInstance(B, z));
					}
					addEntry(z, F, x, H = 0) {
						return z.showInAllWindows
							? this.s(z, F, x, H)
							: this.mainPart.addEntry(z, F, x, H);
					}
					s(z, F, x, H = 0) {
						const q = new i.$Zc(),
							V = new Set();
						function G(K) {
							const J = new i.$Zc();
							J.add(K.onWillDispose(() => J.dispose()));
							const W = J.add(K.addEntry(z, F, x, H));
							V.add(W),
								J.add((0, i.$Yc)(() => V.delete(W))),
								q.add(J),
								J.add((0, i.$Yc)(() => q.delete(J)));
						}
						for (const K of this.parts) G(K);
						return (
							q.add(this.m((K) => G(K))),
							{
								update: (K) => {
									for (const J of V) J.update(K);
								},
								dispose: () => q.dispose(),
							}
						);
					}
					isEntryVisible(z) {
						return this.mainPart.isEntryVisible(z);
					}
					updateEntryVisibility(z, F) {
						for (const x of this.parts) x.updateEntryVisibility(z, F);
					}
					focus(z) {
						this.activePart.focus(z);
					}
					focusNextEntry() {
						this.activePart.focusNextEntry();
					}
					focusPreviousEntry() {
						this.activePart.focusPreviousEntry();
					}
					isEntryFocused() {
						return this.activePart.isEntryFocused();
					}
					overrideStyle(z) {
						const F = new i.$Zc();
						for (const x of this.parts) F.add(x.overrideStyle(z));
						return F;
					}
				};
				(e.$b6b = O),
					(e.$b6b = O = Ne([j(0, C.$Li), j(1, g.$lq), j(2, u.$iP)], O));
				let B = class extends i.$1c {
					constructor(z, F) {
						super(),
							(this.c = z),
							(this.f = F),
							(this.onDidChangeEntryVisibility =
								this.c.onDidChangeEntryVisibility);
					}
					getViewModel() {
						return this.f.getViewModel();
					}
					createAuxiliaryStatusbarPart(z) {
						return this.f.createAuxiliaryStatusbarPart(z);
					}
					createScoped(z, F) {
						return this.f.createScoped(z, F);
					}
					getPart() {
						return this.c;
					}
					addEntry(z, F, x, H = 0) {
						return this.c.addEntry(z, F, x, H);
					}
					isEntryVisible(z) {
						return this.c.isEntryVisible(z);
					}
					updateEntryVisibility(z, F) {
						this.c.updateEntryVisibility(z, F);
					}
					focus(z) {
						this.c.focus(z);
					}
					focusNextEntry() {
						this.c.focusNextEntry();
					}
					focusPreviousEntry() {
						this.c.focusPreviousEntry();
					}
					isEntryFocused() {
						return this.c.isEntryFocused();
					}
					overrideStyle(z) {
						return this.c.overrideStyle(z);
					}
				};
				(e.$c6b = B),
					(e.$c6b = B = Ne([j(1, d.$d6b)], B)),
					(0, o.$lK)(d.$d6b, O, o.InstantiationType.Eager);
			},
		),
		define(
			de[1327],
			he([
				1, 0, 4, 19, 10, 18, 3, 44, 286, 25, 12, 37, 222, 73, 6, 15, 62, 23,
				349, 133, 89, 56, 8, 7,
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
					(e.$ztc = e.$ytc = e.$xtc = void 0);
				var S;
				(function (T) {
					(T.titleSeparator = "window.titleSeparator"),
						(T.title = "window.title");
				})(S || (S = {})),
					(e.$xtc = (() => {
						if (u.$m && u.$p)
							return "${activeEditorShort}${separator}${rootName}${separator}${profileName}";
						const T =
							"${dirty}${activeEditorShort}${separator}${rootName}${separator}${profileName}${separator}${appName}";
						return u.$r ? T + "${separator}${remoteName}" : T;
					})()),
					(e.$ytc = u.$m ? " \u2014 " : " - ");
				let I = class extends C.$1c {
					static {
						v = this;
					}
					static {
						this.a = u.$l
							? (0, t.localize)(3731, null)
							: (0, t.localize)(3732, null);
					}
					static {
						this.b = (0, t.localize)(3733, null);
					}
					static {
						this.c = "\u25CF ";
					}
					get value() {
						return this.n ?? "";
					}
					get workspaceName() {
						return this.z.getWorkspaceLabel(this.y.getWorkspace());
					}
					get fileName() {
						const P = this.r.activeEditor;
						if (!P) return;
						const k = P.getTitle(d.Verbosity.SHORT);
						return `${P?.isDirty() && !P.isSaving() ? v.c : ""}${k}`;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.t = L),
							(this.u = D),
							(this.w = N),
							(this.y = A),
							(this.z = R),
							(this.C = O),
							(this.F = B),
							(this.G = U),
							(this.f = { isPure: !0, isAdmin: !1, prefix: void 0 }),
							(this.g = new Map()),
							(this.h = this.D(new C.$Zc())),
							(this.j = this.D(new g.$Yh(() => this.M(), 0))),
							(this.m = new n.$re()),
							(this.onDidChange = this.m.event),
							(this.q = !1),
							(this.r = M.createScoped(k, this.B)),
							(this.s = P.vscodeWindowId),
							this.J(),
							this.H();
					}
					H() {
						this.D(this.t.onDidChangeConfiguration((P) => this.I(P))),
							this.D(this.r.onDidActiveEditorChange(() => this.L())),
							this.D(
								this.y.onDidChangeWorkspaceFolders(() => this.j.schedule()),
							),
							this.D(this.y.onDidChangeWorkbenchState(() => this.j.schedule())),
							this.D(this.y.onDidChangeWorkspaceName(() => this.j.schedule())),
							this.D(this.z.onDidChangeFormatters(() => this.j.schedule())),
							this.D(this.C.onDidChangeCurrentProfile(() => this.j.schedule())),
							this.D(
								this.G.onDidChangeFocusedView(() => {
									this.q && this.j.schedule();
								}),
							),
							this.D(
								this.u.onDidChangeContext((P) => {
									P.affectsSome(this.g) && this.j.schedule();
								}),
							);
					}
					I(P) {
						P.affectsConfiguration(S.title) && this.J(),
							(P.affectsConfiguration(S.title) ||
								P.affectsConfiguration(S.titleSeparator)) &&
								this.j.schedule();
					}
					J() {
						const P = this.t.getValue(S.title);
						this.q = typeof P == "string" && P.includes("${focusedView}");
					}
					L() {
						this.h.clear(), this.j.schedule();
						const P = this.r.activeEditor;
						if (
							(P &&
								(this.h.add(P.onDidChangeDirty(() => this.j.schedule())),
								this.h.add(P.onDidChangeLabel(() => this.j.schedule()))),
							this.q)
						) {
							const k = this.r.activeTextEditorControl,
								L = [];
							(0, l.$0sb)(k)
								? L.push(k)
								: (0, l.$$sb)(k) &&
									L.push(k.getOriginalEditor(), k.getModifiedEditor());
							for (const D of L)
								this.h.add(D.onDidBlurEditorText(() => this.j.schedule())),
									this.h.add(D.onDidFocusEditorText(() => this.j.schedule()));
						}
					}
					M() {
						const P = this.N();
						if (P !== this.n) {
							let k = P;
							(0, a.$sf)(k) || (k = this.F.nameLong);
							const L = (0, $.getWindowById)(this.s, !0).window;
							!L.document.title &&
								u.$m &&
								k === this.F.nameLong &&
								(L.document.title = `${this.F.nameLong} ${v.c}`),
								(L.document.title = k),
								(this.n = P),
								this.m.fire();
						}
					}
					N() {
						const { prefix: P, suffix: k } = this.getTitleDecorations();
						let L = this.getWindowTitle() || this.F.nameLong;
						return (
							P && (L = `${P} ${L}`),
							k && (L = `${L} ${k}`),
							L.replace(/[^\S ]/g, " ")
						);
					}
					getTitleDecorations() {
						let P, k;
						return (
							this.f.prefix && (P = this.f.prefix),
							this.w.isExtensionDevelopment && (P = P ? `${v.b} - ${P}` : v.b),
							this.f.isAdmin && (k = v.a),
							{ prefix: P, suffix: k }
						);
					}
					updateProperties(P) {
						const k =
								typeof P.isAdmin == "boolean" ? P.isAdmin : this.f.isAdmin,
							L = typeof P.isPure == "boolean" ? P.isPure : this.f.isPure,
							D = typeof P.prefix == "string" ? P.prefix : this.f.prefix;
						(k !== this.f.isAdmin ||
							L !== this.f.isPure ||
							D !== this.f.prefix) &&
							((this.f.isAdmin = k),
							(this.f.isPure = L),
							(this.f.prefix = D),
							this.j.schedule());
					}
					registerVariables(P) {
						let k = !1;
						for (const { name: L, contextKey: D } of P)
							this.g.has(D) || (this.g.set(D, L), (k = !0));
						k && this.j.schedule();
					}
					getWindowTitle() {
						const P = this.r.activeEditor,
							k = this.y.getWorkspace();
						let L;
						k.configuration
							? (L = k.configuration)
							: k.folders.length && (L = k.folders[0].uri);
						const D = d.$A1.getOriginalUri(P, {
							supportSideBySide: d.SideBySideEditor.PRIMARY,
						});
						let M = D ? (0, i.$mh)(D) : void 0;
						M?.path === "." && (M = void 0);
						let N;
						this.y.getWorkbenchState() === r.WorkbenchState.FOLDER
							? (N = k.folders[0])
							: D && (N = this.y.getWorkspaceFolder(D) ?? void 0);
						let A;
						if (this.w.remoteAuthority && !u.$r)
							A = this.z.getHostLabel(
								o.Schemas.vscodeRemote,
								this.w.remoteAuthority,
							);
						else {
							const ee = (0, f.$E8)(k);
							ee && (A = this.z.getHostLabel(ee.scheme, ee.authority));
						}
						const R = P ? P.getTitle(d.Verbosity.SHORT) : "",
							O = P ? P.getTitle(d.Verbosity.MEDIUM) : R,
							B = P ? P.getTitle(d.Verbosity.LONG) : O,
							U = M ? (0, i.$kh)(M) : "",
							z = M ? this.z.getUriLabel(M, { relative: !0 }) : "",
							F = M ? this.z.getUriLabel(M) : "",
							x = this.z.getWorkspaceLabel(k),
							H = this.z.getWorkspaceLabel(k, { verbose: c.Verbosity.SHORT }),
							q = L ? this.z.getUriLabel(L) : "",
							V = N ? N.name : "",
							G = N ? this.z.getUriLabel(N.uri) : "",
							K = P?.isDirty() && !P.isSaving() ? v.c : "",
							J = this.F.nameLong,
							W = this.C.currentProfile.isDefault
								? ""
								: this.C.currentProfile.name,
							X = this.G.getFocusedViewName(),
							Y = {};
						for (const [ee, _] of this.g)
							Y[_] = this.u.getContextKeyValue(ee) ?? "";
						let ie = this.t.getValue(S.title);
						typeof ie != "string" && (ie = e.$xtc);
						let ne = this.t.getValue(S.titleSeparator);
						return (
							typeof ne != "string" && (ne = e.$ytc),
							(0, h.$BO)(ie, {
								...Y,
								activeEditorShort: R,
								activeEditorLong: B,
								activeEditorMedium: O,
								activeFolderShort: U,
								activeFolderMedium: z,
								activeFolderLong: F,
								rootName: x,
								rootPath: q,
								rootNameShort: H,
								folderName: V,
								folderPath: G,
								dirty: K,
								appName: J,
								remoteName: A,
								profileName: W,
								focusedView: X,
								separator: { label: ne },
							})
						);
					}
					isCustomTitleFormat() {
						const P = this.t.inspect(S.title),
							k = this.t.inspect(S.titleSeparator);
						return P.value !== P.defaultValue || k.value !== k.defaultValue;
					}
				};
				(e.$ztc = I),
					(e.$ztc =
						I =
						v =
							Ne(
								[
									j(2, w.$gj),
									j(3, y.$6j),
									j(4, E.$IY),
									j(5, m.$5rb),
									j(6, r.$Vi),
									j(7, c.$3N),
									j(8, b.$P8),
									j(9, p.$Bk),
									j(10, s.$HMb),
								],
								I,
							));
			},
		),
		define(
			de[146],
			he([
				1, 0, 4, 6, 51, 7, 3, 50, 105, 30, 39, 49, 32, 35, 26, 1580, 10, 60, 89,
				8, 28, 5, 11, 92, 488, 41, 183, 497, 277, 436, 707, 203, 195, 9, 79, 14,
				967, 173, 1224, 198, 128, 106, 58, 95, 52, 72, 123, 1518,
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
			) {
				"use strict";
				var J;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WMb = e.$UMb = e.$TMb = e.$SMb = e.ViewPaneShowActions = void 0),
					(e.$VMb = te),
					(t = mt(t));
				var W;
				(function (Z) {
					(Z[(Z.Default = 0)] = "Default"),
						(Z[(Z.WhenExpanded = 1)] = "WhenExpanded"),
						(Z[(Z.Always = 2)] = "Always");
				})(W || (e.ViewPaneShowActions = W = {})),
					(e.$SMb = new d.$rj("viewpane.action.filter"));
				const X = (0, A.$$O)(
						"view-pane-container-expanded",
						R.$ak.chevronDown,
						t.localize(3744, null),
					),
					Y = (0, A.$$O)(
						"view-pane-container-collapsed",
						R.$ak.chevronRight,
						t.localize(3745, null),
					),
					ie = r.$Io.as(o.Extensions.ViewsRegistry);
				let ne = class {
					get enabled() {
						return this.c;
					}
					constructor(se, re, le, oe, ae, pe, $e) {
						(this.j = se),
							(this.k = re),
							(this.l = le),
							(this.m = oe),
							(this.n = ae),
							(this.o = pe),
							(this.b = []),
							(this.c = !1),
							(this.g = new C.$Zc()),
							(this.h = this.g.add(new C.$Zc())),
							(this.i = this.g.add(new C.$Zc())),
							this.g.add(
								i.Event.runAndSubscribe(
									this.k.onDidChangeViewWelcomeState,
									() => this.q(),
								),
							),
							this.g.add($e.onWillShutdown(() => this.dispose()));
					}
					layout(se, re) {
						this.c &&
							((this.d.style.height = `${se}px`),
							(this.d.style.width = `${re}px`),
							this.d.classList.toggle("wide", re > 640),
							this.f.scanDomNode());
					}
					focus() {
						this.c && this.d.focus();
					}
					q() {
						const se = this.k.shouldShowWelcome();
						if (this.c === se) return;
						if (((this.c = se), !se)) {
							this.h.clear();
							return;
						}
						this.j.classList.add("welcome");
						const re = (0, E.$fhb)(this.j, (0, E.$)(".welcome-view"));
						(this.d = (0, E.$)(".welcome-view-content", { tabIndex: 0 })),
							(this.f = new D.$8hb(this.d, {
								alwaysConsumeMouseWheel: !0,
								horizontal: M.ScrollbarVisibility.Hidden,
								vertical: M.ScrollbarVisibility.Visible,
							})),
							(0, E.$fhb)(re, this.f.getDomNode()),
							this.h.add(
								(0, C.$Yc)(() => {
									this.j.classList.remove("welcome"),
										this.f.dispose(),
										re.remove(),
										(this.f = void 0),
										(this.d = void 0);
								}),
							),
							this.o.onDidChangeContext(this.s, this, this.h),
							i.Event.chain(ie.onDidChangeViewWelcomeContent, (le) =>
								le.filter((oe) => oe === this.k.id),
							)(this.r, this, this.h),
							this.r();
					}
					r() {
						const se = ie.getViewWelcomeContent(this.k.id);
						this.b = [];
						for (const re of se)
							if (re.when === "default")
								this.a = { descriptor: re, visible: !0 };
							else {
								const le = re.when ? this.o.contextMatchesRules(re.when) : !0;
								this.b.push({ descriptor: re, visible: le });
							}
						this.t();
					}
					s() {
						let se = !1;
						for (const re of this.b) {
							if (!re.descriptor.when || re.descriptor.when === "default")
								continue;
							const le = this.o.contextMatchesRules(re.descriptor.when);
							re.visible !== le && ((re.visible = le), (se = !0));
						}
						se && this.t();
					}
					t() {
						this.i.clear(), (this.d.innerText = "");
						const se = this.u();
						if (se.length === 0) {
							this.j.classList.remove("welcome"), this.f.scanDomNode();
							return;
						}
						for (const { content: re, precondition: le } of se) {
							const oe = re.split(`
`);
							for (let ae of oe) {
								if (((ae = ae.trim()), !ae)) continue;
								const pe = (0, v.$Zpb)(ae);
								if (pe.nodes.length === 1 && typeof pe.nodes[0] != "string") {
									const $e = pe.nodes[0],
										ye = (0, E.$fhb)(this.d, (0, E.$)(".button-container")),
										ue = new I.$oob(ye, {
											title: $e.title,
											supportIcons: !0,
											...x.$lyb,
										});
									if (
										((ue.label = $e.label),
										ue.onDidClick(
											(fe) => {
												this.n.publicLog2("views.welcomeAction", {
													viewId: this.k.id,
													uri: $e.href,
												}),
													this.m.open($e.href, { allowCommands: !0 });
											},
											null,
											this.i,
										),
										this.i.add(ue),
										le)
									) {
										const fe = () =>
											(ue.enabled = this.o.contextMatchesRules(le));
										fe();
										const me = new Set(le.keys());
										i.Event.filter(this.o.onDidChangeContext, (ge) =>
											ge.affectsSome(me),
										)(fe, null, this.i);
									}
								} else {
									const $e = (0, E.$fhb)(this.d, (0, E.$)("p"));
									for (const ye of pe.nodes)
										if (typeof ye == "string")
											(0, E.$fhb)($e, document.createTextNode(ye));
										else {
											const ue = this.i.add(
												this.l.createInstance(T.Link, $e, ye, {}),
											);
											if (le && ye.href.startsWith("command:")) {
												const fe = () =>
													(ue.enabled = this.o.contextMatchesRules(le));
												fe();
												const me = new Set(le.keys());
												i.Event.filter(this.o.onDidChangeContext, (ge) =>
													ge.affectsSome(me),
												)(fe, null, this.i);
											}
										}
								}
							}
						}
						this.j.classList.add("welcome"), this.f.scanDomNode();
					}
					u() {
						const se = this.b.filter((re) => re.visible);
						return se.length === 0 && this.a
							? [this.a.descriptor]
							: se.map((re) => re.descriptor);
					}
					dispose() {
						this.g.dispose();
					}
				};
				ne = Ne(
					[j(2, l.$Li), j(3, S.$7rb), j(4, h.$km), j(5, b.$6j), j(6, V.$n6)],
					ne,
				);
				let ee = class extends g.Pane {
					static {
						J = this;
					}
					static {
						this.Y = "workbench.view.alwaysShowHeaderActions";
					}
					get title() {
						return this.gb;
					}
					get titleDescription() {
						return this.hb;
					}
					get singleViewPaneContainerTitle() {
						return this.ib;
					}
					constructor(se, re, le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						super({
							...se,
							orientation:
								pe.getViewLocationById(se.id) === o.ViewContainerLocation.Panel
									? P.Orientation.HORIZONTAL
									: P.Orientation.VERTICAL,
						}),
							(this.yb = re),
							(this.zb = le),
							(this.Ab = oe),
							(this.Bb = ae),
							(this.Cb = pe),
							(this.Db = $e),
							(this.Eb = ye),
							(this.Fb = ue),
							(this.Gb = fe),
							(this.Hb = me),
							(this.Ib = ve),
							(this.Z = this.D(new i.$re())),
							(this.onDidFocus = this.Z.event),
							(this.bb = this.D(new i.$re())),
							(this.onDidBlur = this.bb.event),
							(this.cb = this.D(new i.$re())),
							(this.onDidChangeBodyVisibility = this.cb.event),
							(this.db = this.D(new i.$re())),
							(this.onDidChangeTitleArea = this.db.event),
							(this.eb = this.D(new i.$re())),
							(this.onDidChangeViewWelcomeState = this.eb.event),
							(this.fb = !1),
							(this.Jb = !1),
							(this.Kb = !1),
							(this.id = se.id),
							(this.gb = se.title),
							(this.hb = se.titleDescription),
							(this.ib = se.singleViewPaneContainerTitle),
							(this.mb = se.showActions ?? W.Default),
							(this.xb = this.D(ae.createScoped(this.element))),
							this.xb.createKey("view", this.id);
						const ge = this.xb.createKey(
							"viewLocation",
							(0, o.$J1)(pe.getViewLocationById(this.id)),
						);
						this.D(
							i.Event.filter(pe.onDidChangeLocation, (Ce) =>
								Ce.views.some((Le) => Le.id === this.id),
							)(() => ge.set((0, o.$J1)(pe.getViewLocationById(this.id)))),
						);
						const be = this.D(this.Db.createChild(new F.$Ki([b.$6j, this.xb])));
						(this.menuActions = this.D(
							be.createInstance(
								O.$MMb,
								se.titleMenuId ?? y.$XX.ViewTitle,
								y.$XX.ViewTitleContext,
								{
									shouldForwardArgs: !se.donotForwardArgs,
									renderShortTitle: !0,
								},
							),
						)),
							this.D(this.menuActions.onDidChange(() => this.bc()));
					}
					get headerVisible() {
						return super.headerVisible;
					}
					set headerVisible(se) {
						(super.headerVisible = se),
							this.element.classList.toggle("merged-header", !se);
					}
					setVisible(se) {
						this.fb !== se &&
							((this.fb = se), this.isExpanded() && this.cb.fire(se));
					}
					isVisible() {
						return this.fb;
					}
					isBodyVisible() {
						return this.fb && this.isExpanded();
					}
					setExpanded(se) {
						this.isAlone() && (se = !0);
						const re = super.setExpanded(se);
						return re && this.cb.fire(se), this.Ob(), re;
					}
					setIsAlone(se) {
						const re = this.Jb;
						se && !re && (this.Kb = this.y),
							se && this.setExpanded(!0),
							(this.Jb = se),
							re && !se && this.setExpanded(this.Kb),
							this.Ob();
					}
					isAlone() {
						return this.Jb;
					}
					render() {
						super.render();
						const se = (0, E.$dhb)(this.element);
						this.D(se),
							this.D(se.onDidFocus(() => this.Z.fire())),
							this.D(se.onDidBlur(() => this.bb.fire()));
					}
					U(se) {
						(this.nb = se),
							(this.vb = (0, E.$fhb)(
								se,
								(0, E.$)(
									`.twisties-container-in-view-pane-header.twisty-container${n.ThemeIcon.asCSSSelector(this.Nb(this.isExpanded()))}`,
								),
							)),
							this.Ob(),
							this.Qb(se, this.title);
						const re = (0, E.$fhb)(se, (0, E.$)(".actions"));
						re.classList.toggle("show-always", this.mb === W.Always),
							re.classList.toggle("show-expanded", this.mb === W.WhenExpanded),
							(this.lb = this.Db.createInstance(B.$Syb, re, {
								orientation: m.ActionsOrientation.HORIZONTAL,
								actionViewItemProvider: (ae, pe) =>
									this.getActionViewItem(ae, pe),
								ariaLabel: t.localize(3746, null, this.title),
								getKeyBinding: (ae) => this.yb.lookupKeybinding(ae.id),
								renderDropdownAsChildElement: !0,
								actionRunner: this.getActionRunner(),
								resetMenu: this.menuActions.menuId,
							})),
							this.D(this.lb),
							this.$b(),
							this.D(
								(0, E.$0fb)(re, E.$$gb.CLICK, (ae) => ae.preventDefault()),
							);
						const le = this.Cb.getViewContainerByViewId(this.id);
						le
							? this.D(
									this.Cb.getViewContainerModel(le).onDidChangeContainerInfo(
										({ title: ae }) => this.Sb(this.title),
									),
								)
							: console.error(
									`View container model not found for view ${this.id}`,
								);
						const oe = i.Event.filter(this.Ab.onDidChangeConfiguration, (ae) =>
							ae.affectsConfiguration(J.Y),
						);
						this.D(oe(this.ac, this)), this.ac();
					}
					S() {
						super.S(), this.Ob();
					}
					Nb(se) {
						return se ? X : Y;
					}
					Ob() {
						this.vb &&
							(!this.isAlone() || this.Ab.getValue(H.$LW) === "vertical"
								? ((this.vb.style.width = ""),
									(this.vb.style.height = ""),
									this.vb.classList.remove(
										...n.ThemeIcon.asClassNameArray(this.Nb(!this.y)),
									),
									this.vb.classList.add(
										...n.ThemeIcon.asClassNameArray(this.Nb(this.y)),
									))
								: ((this.vb.style.width = "10px"),
									(this.vb.style.height = "10px"),
									this.vb.classList.remove(
										...n.ThemeIcon.asClassNameArray(this.Nb(!this.y)),
									),
									this.vb.classList.remove(
										...n.ThemeIcon.asClassNameArray(this.Nb(this.y)),
									)));
					}
					style(se) {
						super.style(se);
						const re = this.Pb();
						if (this.tb) {
							const le = (0, E.$xhb)(se.headerForeground, (0, w.$rP)(w.$IP));
							N.URI.isUri(re)
								? ((this.tb.style.backgroundColor = le),
									(this.tb.style.color = ""))
								: ((this.tb.style.color = le),
									(this.tb.style.backgroundColor = ""));
						}
					}
					Pb() {
						return (
							this.Cb.getViewDescriptorById(this.id)?.containerIcon || o.$H1
						);
					}
					Qb(se, re) {
						this.tb = (0, E.$fhb)(se, (0, E.$)(".icon", void 0));
						const le = this.Pb();
						let oe;
						if (N.URI.isUri(le)) {
							oe = `view-${this.id.replace(/[\.\:]/g, "-")}`;
							const pe = `.pane-header .icon.${oe}`;
							(0, E.$Wgb)(
								pe,
								`
				mask: ${(0, E.$vhb)(le)} no-repeat 50% 50%;
				mask-size: 24px;
				-webkit-mask: ${(0, E.$vhb)(le)} no-repeat 50% 50%;
				-webkit-mask-size: 16px;
			`,
							);
						} else
							n.ThemeIcon.isThemeIcon(le) && (oe = n.ThemeIcon.asClassName(le));
						oe && this.tb.classList.add(...oe.split(" "));
						const ae = this.Vb(re);
						(this.ob = (0, E.$fhb)(se, (0, E.$)("h3.title", {}, ae))),
							(this.pb = this.D(
								this.Hb.setupManagedHover((0, q.$cib)("mouse"), this.ob, ae),
							)),
							this.hb && this.Tb(this.hb),
							(this.ub = this.D(
								this.Hb.setupManagedHover((0, q.$cib)("mouse"), this.tb, ae),
							)),
							this.tb.setAttribute("aria-label", this.Rb(ae));
					}
					Rb(se) {
						const re = this.Cb.getViewDescriptorById(
								this.id,
							)?.accessibilityHelpContent,
							le = this.Ib?.hasShownAccessibleView(this.id);
						return !re || le ? se : t.localize(3747, null, se);
					}
					Sb(se) {
						const re = this.Vb(se);
						this.ob && ((this.ob.textContent = re), this.pb?.update(re)),
							this.tb &&
								(this.ub?.update(re),
								this.tb.setAttribute("aria-label", this.Rb(re))),
							(this.gb = se),
							this.db.fire();
					}
					Tb(se) {
						this.qb
							? ((this.qb.textContent = se ?? ""), this.rb?.update(se ?? ""))
							: se &&
								this.ob &&
								((this.qb = (0, E.$ehb)(
									this.ob,
									(0, E.$)("span.description", {}, se),
								)),
								(this.rb = this.D(
									this.Hb.setupManagedHover((0, q.$cib)("mouse"), this.qb, se),
								)));
					}
					Ub(se) {
						this.Tb(se), (this.hb = se), this.db.fire();
					}
					Vb(se) {
						const re = this.Cb.getViewContainerByViewId(this.id),
							le = this.Cb.getViewContainerModel(re),
							oe = this.Cb.getViewDescriptorById(this.id);
						return !(this.Cb.getDefaultContainerById(this.id) === re) &&
							oe?.containerTitle &&
							le.title !== oe.containerTitle
							? `${oe.containerTitle}: ${se}`
							: se;
					}
					W(se) {
						this.wb = this.D(this.Db.createInstance(ne, se, this));
					}
					X(se, re) {
						this.wb.layout(se, re);
					}
					onDidScrollRoot() {}
					getProgressIndicator() {
						if (
							(this.jb === void 0 &&
								((this.jb = this.D(new k.$bpb(this.element, x.$nyb))),
								this.jb.hide()),
							this.kb === void 0)
						) {
							const se = this;
							this.kb = this.D(
								new L.$KMb(
									(0, s.$wg)(this.jb),
									new (class extends L.$LMb {
										constructor() {
											super(se.id, se.isBodyVisible()),
												this.D(
													se.onDidChangeBodyVisibility((re) =>
														re ? this.g(se.id) : this.h(se.id),
													),
												);
										}
									})(),
								),
							);
						}
						return this.kb;
					}
					Yb() {
						return H.$KX + this.id;
					}
					Zb() {
						return te(this.Cb.getViewLocationById(this.id));
					}
					focus() {
						this.wb.enabled
							? this.wb.focus()
							: this.element && (this.element.focus(), this.Z.fire());
					}
					$b() {
						if (this.lb) {
							const se = [...this.menuActions.getPrimaryActions()];
							this.shouldShowFilterInHeader() && se.unshift(e.$SMb),
								this.lb.setActions(
									(0, m.$fib)(se),
									(0, m.$fib)(this.menuActions.getSecondaryActions()),
								),
								(this.lb.context = this.getActionsContext());
						}
					}
					ac() {
						if (!this.nb) return;
						const se = this.Ab.getValue(
							"workbench.view.alwaysShowHeaderActions",
						);
						this.nb.classList.toggle("actions-always-visible", se);
					}
					bc() {
						this.$b(), this.db.fire();
					}
					getActionViewItem(se, re) {
						if (se.id === e.$SMb.id) {
							const le = this;
							return new (class extends z.$$ib {
								constructor() {
									super(null, se);
								}
								setFocusable() {}
								get trapsArrowNavigation() {
									return !0;
								}
								render(oe) {
									oe.classList.add("viewpane-filter-container");
									const ae = le.getFilterWidget();
									(0, E.$fhb)(oe, ae.element), ae.relayout();
								}
							})();
						}
						return (0, $.$Pyb)(this.Db, se, {
							...re,
							menuAsChild: se instanceof y.$1X,
						});
					}
					getActionsContext() {}
					getActionRunner() {}
					getOptimalWidth() {
						return 0;
					}
					saveState() {}
					shouldShowWelcome() {
						return !1;
					}
					getFilterWidget() {}
					shouldShowFilterInHeader() {
						return !1;
					}
				};
				(e.$TMb = ee),
					(e.$TMb =
						ee =
						J =
							Ne(
								[
									j(1, u.$uZ),
									j(2, a.$Xxb),
									j(3, p.$gj),
									j(4, b.$6j),
									j(5, o.$K1),
									j(6, l.$Li),
									j(7, S.$7rb),
									j(8, c.$iP),
									j(9, h.$km),
									j(10, G.$Uyb),
								],
								ee,
							));
				let _ = class extends ee {
					constructor(se, re, le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						super(se, re, le, oe, ae, pe, $e, ye, ue, fe, me, ve);
						const ge = this.D($e.createChild(new F.$Ki([b.$6j, this.xb])));
						this.filterWidget = this.D(
							ge.createInstance(U.$PMb, se.filterOptions),
						);
					}
					getFilterWidget() {
						return this.filterWidget;
					}
					W(se) {
						super.W(se),
							(this.j = (0, E.$fhb)(
								se,
								(0, E.$)(".viewpane-filter-container"),
							));
					}
					X(se, re) {
						super.X(se, re), (this.g = new E.$pgb(re, se));
						const le = !this.j?.hasChildNodes(),
							oe = this.shouldShowFilterInHeader();
						le !== oe &&
							(oe && (0, E.$hhb)(this.j),
							this.bc(),
							oe || (0, E.$fhb)(this.j, this.filterWidget.element)),
							oe || (se = se - 44),
							this.filterWidget.layout(re),
							this.L(se, re);
					}
					shouldShowFilterInHeader() {
						return !(this.g && this.g.width < 600 && this.g.height > 100);
					}
				};
				(e.$UMb = _),
					(e.$UMb = _ =
						Ne(
							[
								j(1, u.$uZ),
								j(2, a.$Xxb),
								j(3, p.$gj),
								j(4, b.$6j),
								j(5, o.$K1),
								j(6, l.$Li),
								j(7, S.$7rb),
								j(8, c.$iP),
								j(9, h.$km),
								j(10, G.$Uyb),
							],
							_,
						));
				function te(Z) {
					let se, re, le, oe;
					switch (Z) {
						case o.ViewContainerLocation.Panel:
							(se = K.$qFb), (re = K.$CFb), (le = K.$DFb), (oe = K.$EFb);
							break;
						case o.ViewContainerLocation.Sidebar:
						case o.ViewContainerLocation.AuxiliaryBar:
						default:
							(se = K.$wGb), (re = K.$GGb), (le = K.$HGb), (oe = K.$IGb);
					}
					return {
						background: se,
						listOverrideStyles: {
							listBackground: se,
							treeStickyScrollBackground: re,
							treeStickyScrollBorder: le,
							treeStickyScrollShadow: oe,
						},
					};
				}
				class Q extends y.$3X {
					constructor(se) {
						super(se), (this.desc = se);
					}
					run(se, ...re) {
						const le = se.get(f.$HMb).getActiveViewWithId(this.desc.viewId);
						if (le) return this.runInView(se, le, ...re);
					}
				}
				e.$WMb = Q;
			},
		),
		define(
			de[1905],
			he([1, 0, 30, 4, 81, 12, 224, 139, 58, 55, 96, 1327, 399]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Atc = void 0);
				const c = 500;
				e.$Atc = [];
				const n = console.log.bind(console);
				(console.stdlog = console.log),
					(console.log = function () {
						try {
							e.$Atc.push(
								...Array.from(arguments)
									.map((f) => (typeof f == "object" ? "[Object]" : f))
									.map((f) =>
										typeof f == "string" && f.length > 1e4
											? "string was too big"
											: f,
									),
							);
							let o = e.$Atc.length - c;
							o >= 0 && e.$Atc.splice(0, o + 1);
						} catch {}
					});
				const g = console.error.bind(console);
				(console.stderr = console.error),
					(console.error = function () {
						try {
							e.$Atc.push(
								...Array.from(arguments)
									.map((f) => (typeof f == "object" ? JSON.stringify(f) : f))
									.map((f) =>
										typeof f == "string" && f.length > 1e4
											? "string was too big"
											: f,
									),
							);
							let o = e.$Atc.length - c;
							o >= 0 && e.$Atc.splice(0, o + 1);
						} catch {}
						g.apply(console, Array.from(arguments));
					});
				const p = t.$Io.as(w.$No.Configuration);
				(function () {
					(0, r.$s6)(C.$A6.ID, C.$A6, r.WorkbenchPhase.Eventually),
						(0, r.$s6)(C.$B6.ID, C.$B6, r.WorkbenchPhase.AfterRestored),
						p.registerConfiguration({
							...C.$v6,
							properties: {
								"workbench.externalBrowser": {
									type: "string",
									markdownDescription: (0, i.localize)(3776, null),
									included: E.$p,
									restricted: !0,
								},
								"workbench.editor.titleScrollbarSizing": {
									type: "string",
									enum: ["default", "large"],
									enumDescriptions: [
										(0, i.localize)(3777, null),
										(0, i.localize)(3778, null),
									],
									description: (0, i.localize)(3779, null),
									default: "default",
								},
								[u.LayoutSettings.EDITOR_TABS_MODE]: {
									type: "string",
									enum: [
										u.EditorTabsMode.MULTIPLE,
										u.EditorTabsMode.SINGLE,
										u.EditorTabsMode.NONE,
									],
									enumDescriptions: [
										(0, i.localize)(3780, null),
										(0, i.localize)(3781, null),
										(0, i.localize)(3782, null),
									],
									description: (0, i.localize)(3783, null),
									default: "multiple",
								},
								[u.LayoutSettings.EDITOR_ACTIONS_LOCATION]: {
									type: "string",
									enum: [
										u.EditorActionsLocation.DEFAULT,
										u.EditorActionsLocation.TITLEBAR,
										u.EditorActionsLocation.HIDDEN,
									],
									markdownEnumDescriptions: [
										(0, i.localize)(
											3784,
											null,
											"`#workbench.editor.showTabs#`",
											"`none`",
										),
										(0, i.localize)(
											3785,
											null,
											"`#window.customTitleBarVisibility#`",
											"`never`",
										),
										(0, i.localize)(3786, null),
									],
									markdownDescription: (0, i.localize)(3787, null),
									default: "default",
								},
								"workbench.editor.alwaysShowEditorActions": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3788, null),
									default: !1,
								},
								"workbench.editor.wrapTabs": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3789,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.scrollToSwitchTabs": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3790,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.highlightModifiedTabs": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3791,
										null,
										"`#workbench.editor.showTabs#`",
										"multiple",
									),
									default: !1,
								},
								"workbench.editor.decorations.badges": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3792, null),
									default: !0,
								},
								"workbench.editor.decorations.colors": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3793, null),
									default: !0,
								},
								[h.$PIb.SETTING_ID_ENABLED]: {
									type: "boolean",
									markdownDescription: (0, i.localize)(3794, null),
									default: !0,
								},
								[h.$PIb.SETTING_ID_PATTERNS]: {
									type: "object",
									markdownDescription: (() => {
										let b = (0, i.localize)(3795, null);
										return (
											(b +=
												`
- ` +
												[
													(0, i.localize)(3796, null),
													(0, i.localize)(3797, null),
													(0, i.localize)(3798, null),
													(0, i.localize)(3799, null),
													(0, i.localize)(3800, null),
												].join(`
- `)),
											(b +=
												`

` + (0, i.localize)(3801, null)),
											b
										);
									})(),
									additionalProperties: {
										type: ["string", "null"],
										markdownDescription: (0, i.localize)(3802, null),
										minLength: 1,
										pattern: ".*[a-zA-Z0-9].*",
									},
									default: {},
								},
								"workbench.editor.labelFormat": {
									type: "string",
									enum: ["default", "short", "medium", "long"],
									enumDescriptions: [
										(0, i.localize)(3803, null),
										(0, i.localize)(3804, null),
										(0, i.localize)(3805, null),
										(0, i.localize)(3806, null),
									],
									default: "default",
									description: (0, i.localize)(3807, null),
								},
								"workbench.editor.untitled.labelFormat": {
									type: "string",
									enum: ["content", "name"],
									enumDescriptions: [
										(0, i.localize)(3808, null),
										(0, i.localize)(3809, null),
									],
									default: "content",
									description: (0, i.localize)(3810, null),
								},
								"workbench.editor.empty.hint": {
									type: "string",
									enum: ["text", "hidden"],
									default: "text",
									markdownDescription: (0, i.localize)(3811, null),
								},
								"workbench.editor.languageDetection": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3812, null),
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
								},
								"workbench.editor.historyBasedLanguageDetection": {
									type: "boolean",
									default: !0,
									tags: ["experimental"],
									description: (0, i.localize)(3813, null),
								},
								"workbench.editor.preferHistoryBasedLanguageDetection": {
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									description: (0, i.localize)(3814, null),
								},
								"workbench.editor.languageDetectionHints": {
									type: "object",
									default: { untitledEditors: !0, notebookEditors: !0 },
									tags: ["experimental"],
									description: (0, i.localize)(3815, null),
									additionalProperties: !1,
									properties: {
										untitledEditors: {
											type: "boolean",
											description: (0, i.localize)(3816, null),
										},
										notebookEditors: {
											type: "boolean",
											description: (0, i.localize)(3817, null),
										},
									},
								},
								"workbench.editor.tabActionLocation": {
									type: "string",
									enum: ["left", "right"],
									default: "right",
									markdownDescription: (0, i.localize)(
										3818,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.tabActionCloseVisibility": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3819, null),
								},
								"workbench.editor.tabActionUnpinVisibility": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3820, null),
								},
								"workbench.editor.tabSizing": {
									type: "string",
									enum: ["fit", "shrink", "fixed"],
									default: "fit",
									enumDescriptions: [
										(0, i.localize)(3821, null),
										(0, i.localize)(3822, null),
										(0, i.localize)(3823, null),
									],
									markdownDescription: (0, i.localize)(
										3824,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.tabSizingFixedMinWidth": {
									type: "number",
									default: 50,
									minimum: 38,
									markdownDescription: (0, i.localize)(
										3825,
										null,
										"`#workbench.editor.tabSizing#`",
										"`fixed`",
									),
								},
								"workbench.editor.tabSizingFixedMaxWidth": {
									type: "number",
									default: 160,
									minimum: 38,
									markdownDescription: (0, i.localize)(
										3826,
										null,
										"`#workbench.editor.tabSizing#`",
										"`fixed`",
									),
								},
								"window.density.editorTabHeight": {
									type: "string",
									enum: ["default", "compact"],
									default: "default",
									markdownDescription: (0, i.localize)(
										3827,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.pinnedTabSizing": {
									type: "string",
									enum: ["normal", "compact", "shrink"],
									default: "normal",
									enumDescriptions: [
										(0, i.localize)(3828, null),
										(0, i.localize)(3829, null),
										(0, i.localize)(3830, null),
									],
									markdownDescription: (0, i.localize)(
										3831,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.pinnedTabsOnSeparateRow": {
									type: "boolean",
									default: !1,
									markdownDescription: (0, i.localize)(
										3832,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
								},
								"workbench.editor.preventPinnedEditorClose": {
									type: "string",
									enum: ["keyboardAndMouse", "keyboard", "mouse", "never"],
									default: "keyboardAndMouse",
									enumDescriptions: [
										(0, i.localize)(3833, null),
										(0, i.localize)(3834, null),
										(0, i.localize)(3835, null),
										(0, i.localize)(3836, null),
									],
									description: (0, i.localize)(3837, null),
								},
								"workbench.editor.splitSizing": {
									type: "string",
									enum: ["auto", "distribute", "split"],
									default: "auto",
									enumDescriptions: [
										(0, i.localize)(3838, null),
										(0, i.localize)(3839, null),
										(0, i.localize)(3840, null),
									],
									description: (0, i.localize)(3841, null),
								},
								"workbench.editor.splitOnDragAndDrop": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3842, null),
								},
								"workbench.editor.dragToOpenWindow": {
									type: "boolean",
									default: !0,
									markdownDescription: (0, i.localize)(3843, null),
								},
								"workbench.editor.focusRecentEditorAfterClose": {
									type: "boolean",
									description: (0, i.localize)(3844, null),
									default: !0,
								},
								"workbench.editor.showIcons": {
									type: "boolean",
									description: (0, i.localize)(3845, null),
									default: !0,
								},
								"workbench.editor.enablePreview": {
									type: "boolean",
									description: (0, i.localize)(3846, null),
									default: !0,
								},
								"workbench.editor.enablePreviewFromQuickOpen": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3847,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.enablePreviewFromCodeNavigation": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3848,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									default: !1,
								},
								"workbench.editor.closeOnFileDelete": {
									type: "boolean",
									description: (0, i.localize)(3849, null),
									default: !1,
								},
								"workbench.editor.openPositioning": {
									type: "string",
									enum: ["left", "right", "first", "last"],
									default: "right",
									markdownDescription: (0, i.localize)(
										3850,
										null,
										"`left`",
										"`right`",
										"`first`",
										"`last`",
									),
								},
								"workbench.editor.openSideBySideDirection": {
									type: "string",
									enum: ["right", "down"],
									default: "right",
									markdownDescription: (0, i.localize)(3851, null),
								},
								"workbench.editor.closeEmptyGroups": {
									type: "boolean",
									description: (0, i.localize)(3852, null),
									default: !0,
								},
								"workbench.editor.revealIfOpen": {
									type: "boolean",
									description: (0, i.localize)(3853, null),
									default: !1,
								},
								"workbench.editor.mouseBackForwardToNavigate": {
									type: "boolean",
									description: (0, i.localize)(3854, null),
									default: !0,
								},
								"workbench.editor.navigationScope": {
									type: "string",
									enum: ["default", "editorGroup", "editor"],
									default: "default",
									markdownDescription: (0, i.localize)(3855, null),
									enumDescriptions: [
										(0, i.localize)(3856, null),
										(0, i.localize)(3857, null),
										(0, i.localize)(3858, null),
									],
								},
								"workbench.editor.restoreViewState": {
									type: "boolean",
									markdownDescription: (0, i.localize)(
										3859,
										null,
										"`#workbench.editor.sharedViewState#`",
									),
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
								},
								"workbench.editor.sharedViewState": {
									type: "boolean",
									description: (0, i.localize)(3860, null),
									default: !1,
								},
								"workbench.editor.splitInGroupLayout": {
									type: "string",
									enum: ["vertical", "horizontal"],
									default: "horizontal",
									markdownDescription: (0, i.localize)(3861, null),
									enumDescriptions: [
										(0, i.localize)(3862, null),
										(0, i.localize)(3863, null),
									],
								},
								"workbench.editor.centeredLayoutAutoResize": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3864, null),
								},
								"workbench.editor.centeredLayoutFixedWidth": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3865, null),
								},
								"workbench.editor.doubleClickTabToToggleEditorGroupSizes": {
									type: "string",
									enum: ["maximize", "expand", "off"],
									default: "expand",
									markdownDescription: (0, i.localize)(
										3866,
										null,
										"`#workbench.editor.showTabs#`",
										"`multiple`",
									),
									enumDescriptions: [
										(0, i.localize)(3867, null),
										(0, i.localize)(3868, null),
										(0, i.localize)(3869, null),
									],
								},
								"workbench.editor.limit.enabled": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3870, null),
								},
								"workbench.editor.limit.value": {
									type: "number",
									default: 10,
									exclusiveMinimum: 0,
									markdownDescription: (0, i.localize)(
										3871,
										null,
										"`#workbench.editor.limit.perEditorGroup#`",
									),
								},
								"workbench.editor.limit.excludeDirty": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3872, null),
								},
								"workbench.editor.limit.perEditorGroup": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3873, null),
								},
								"workbench.localHistory.enabled": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3874, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.maxFileSize": {
									type: "number",
									default: 256,
									minimum: 1,
									description: (0, i.localize)(3875, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.maxFileEntries": {
									type: "number",
									default: 50,
									minimum: 0,
									description: (0, i.localize)(3876, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.exclude": {
									type: "object",
									patternProperties: { ".*": { type: "boolean" } },
									markdownDescription: (0, i.localize)(3877, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.localHistory.mergeWindow": {
									type: "number",
									default: 10,
									minimum: 1,
									markdownDescription: (0, i.localize)(3878, null),
									scope: w.ConfigurationScope.RESOURCE,
								},
								"workbench.commandPalette.history": {
									type: "number",
									description: (0, i.localize)(3879, null),
									default: 50,
									minimum: 0,
								},
								"workbench.commandPalette.preserveInput": {
									type: "boolean",
									description: (0, i.localize)(3880, null),
									default: !1,
								},
								"workbench.commandPalette.experimental.suggestCommands": {
									type: "boolean",
									tags: ["experimental"],
									description: (0, i.localize)(3881, null),
									default: !1,
								},
								"workbench.commandPalette.experimental.askChatLocation": {
									type: "string",
									tags: ["experimental"],
									description: (0, i.localize)(3882, null),
									default: "chatView",
									enum: ["chatView", "quickChat"],
									enumDescriptions: [
										(0, i.localize)(3883, null),
										(0, i.localize)(3884, null),
									],
								},
								"workbench.commandPalette.experimental.enableNaturalLanguageSearch":
									{
										type: "boolean",
										tags: ["experimental"],
										description: (0, i.localize)(3885, null),
										default: !0,
									},
								"workbench.quickOpen.closeOnFocusLost": {
									type: "boolean",
									description: (0, i.localize)(3886, null),
									default: !0,
								},
								"workbench.quickOpen.preserveInput": {
									type: "boolean",
									description: (0, i.localize)(3887, null),
									default: !1,
								},
								"workbench.settings.openDefaultSettings": {
									type: "boolean",
									description: (0, i.localize)(3888, null),
									default: !1,
								},
								"workbench.settings.useSplitJSON": {
									type: "boolean",
									markdownDescription: (0, i.localize)(3889, null),
									default: !1,
								},
								"workbench.settings.openDefaultKeybindings": {
									type: "boolean",
									description: (0, i.localize)(3890, null),
									default: !1,
								},
								"workbench.sideBar.location": {
									type: "string",
									enum: ["left", "right"],
									default: "left",
									description: (0, i.localize)(3891, null),
								},
								"workbench.panel.defaultLocation": {
									type: "string",
									enum: ["left", "bottom", "top", "right"],
									default: "bottom",
									description: (0, i.localize)(3892, null),
								},
								"workbench.panel.opensMaximized": {
									type: "string",
									enum: ["always", "never", "preserve"],
									default: "preserve",
									description: (0, i.localize)(3893, null),
									enumDescriptions: [
										(0, i.localize)(3894, null),
										(0, i.localize)(3895, null),
										(0, i.localize)(3896, null),
									],
								},
								"workbench.statusBar.visible": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3897, null),
								},
								[u.LayoutSettings.ACTIVITY_BAR_LOCATION]: {
									type: "string",
									enum: ["default", "top", "bottom", "hidden"],
									default: "default",
									markdownDescription: (0, i.localize)(3898, null),
									enumDescriptions: [
										(0, i.localize)(3899, null),
										(0, i.localize)(3900, null),
										(0, i.localize)(3901, null),
										(0, i.localize)(3902, null),
									],
								},
								[m.$LW]: {
									type: "string",
									enum: ["horizontal", "vertical"],
									default: "horizontal",
									description: (0, i.localize)(3903, null),
								},
								"workbench.activityBar.iconClickBehavior": {
									type: "string",
									enum: ["toggle", "focus"],
									default: "toggle",
									markdownDescription: (0, i.localize)(
										3904,
										null,
										"`#workbench.activityBar.location#`",
										"`default`",
									),
									enumDescriptions: [
										(0, i.localize)(3905, null),
										(0, i.localize)(3906, null),
									],
								},
								"workbench.view.alwaysShowHeaderActions": {
									type: "boolean",
									default: !1,
									description: (0, i.localize)(3907, null),
								},
								"workbench.fontAliasing": {
									type: "string",
									enum: ["default", "antialiased", "none", "auto"],
									default: "default",
									description: (0, i.localize)(3908, null),
									enumDescriptions: [
										(0, i.localize)(3909, null),
										(0, i.localize)(3910, null),
										(0, i.localize)(3911, null),
										(0, i.localize)(3912, null),
									],
									included: E.$m,
								},
								"workbench.settings.editor": {
									type: "string",
									enum: ["ui", "json"],
									enumDescriptions: [
										(0, i.localize)(3913, null),
										(0, i.localize)(3914, null),
									],
									description: (0, i.localize)(3915, null),
									default: "ui",
									scope: w.ConfigurationScope.WINDOW,
								},
								"workbench.hover.delay": {
									type: "number",
									description: (0, i.localize)(3916, null),
									default: 250,
									minimum: 0,
								},
								"workbench.reduceMotion": {
									type: "string",
									description: (0, i.localize)(3917, null),
									enumDescriptions: [
										(0, i.localize)(3918, null),
										(0, i.localize)(3919, null),
										(0, i.localize)(3920, null),
									],
									default: "auto",
									tags: ["accessibility"],
									enum: ["on", "off", "auto"],
								},
								[u.LayoutSettings.LAYOUT_ACTIONS]: {
									type: "boolean",
									default: !0,
									markdownDescription: E.$r
										? (0, i.localize)(3921, null)
										: (0, i.localize)(
												3922,
												null,
												"`#window.customTitleBarVisibility#`",
												"`never`",
											),
								},
								"workbench.layoutControl.type": {
									type: "string",
									enum: ["menu", "toggles", "both"],
									enumDescriptions: [
										(0, i.localize)(3923, null),
										(0, i.localize)(3924, null),
										(0, i.localize)(3925, null),
									],
									default: "both",
									description: (0, i.localize)(3926, null),
								},
								"workbench.tips.enabled": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3927, null),
								},
							},
						});
					let f = (0, i.localize)(3928, null);
					(f +=
						`
- ` +
						[
							(0, i.localize)(3929, null),
							(0, i.localize)(3930, null),
							(0, i.localize)(3931, null),
							(0, i.localize)(3932, null),
							(0, i.localize)(3933, null),
							(0, i.localize)(3934, null),
							(0, i.localize)(3935, null),
							(0, i.localize)(3936, null),
							(0, i.localize)(3937, null),
							(0, i.localize)(3938, null),
							(0, i.localize)(3939, null),
							(0, i.localize)(3940, null),
							(0, i.localize)(3941, null),
							(0, i.localize)(3942, null),
							(0, i.localize)(3943, null),
							(0, i.localize)(3944, null),
							(0, i.localize)(3945, null),
							(0, i.localize)(3946, null),
							(0, i.localize)(3947, null),
						].join(`
- `)),
						p.registerConfiguration({
							...C.$y6,
							properties: {
								"window.title": {
									type: "string",
									default: a.$xtc,
									markdownDescription: f,
								},
								"window.titleSeparator": {
									type: "string",
									default: a.$ytc,
									markdownDescription: (0, i.localize)(
										3948,
										null,
										"`#window.title#`",
									),
								},
								[u.LayoutSettings.COMMAND_CENTER]: {
									type: "boolean",
									default: !0,
									markdownDescription: E.$r
										? (0, i.localize)(3949, null)
										: (0, i.localize)(
												3950,
												null,
												"`#window.customTitleBarVisibility#`",
												"`never`",
											),
								},
								"window.menuBarVisibility": {
									type: "string",
									enum: ["classic", "visible", "toggle", "hidden", "compact"],
									markdownEnumDescriptions: [
										(0, i.localize)(3951, null),
										(0, i.localize)(3952, null),
										E.$m
											? (0, i.localize)(3953, null)
											: (0, i.localize)(3954, null),
										(0, i.localize)(3955, null),
										E.$r
											? (0, i.localize)(3956, null)
											: (0, i.localize)(
													3957,
													null,
													"`#window.titleBarStyle#`",
													"`native`",
												),
									],
									default: E.$r ? "compact" : "classic",
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: E.$m
										? (0, i.localize)(3958, null)
										: (0, i.localize)(3959, null),
									included: E.$l || E.$n || E.$r,
								},
								"window.enableMenuBarMnemonics": {
									type: "boolean",
									default: !1,
									scope: w.ConfigurationScope.APPLICATION,
									description: (0, i.localize)(3960, null),
									included: !1,
								},
								"window.customMenuBarAltFocus": {
									type: "boolean",
									default: !1,
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: (0, i.localize)(3961, null),
									included: !1,
								},
								"window.openFilesInNewWindow": {
									type: "string",
									enum: ["on", "off", "default"],
									enumDescriptions: [
										(0, i.localize)(3962, null),
										(0, i.localize)(3963, null),
										E.$m
											? (0, i.localize)(3964, null)
											: (0, i.localize)(3965, null),
									],
									default: "off",
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: E.$m
										? (0, i.localize)(3966, null)
										: (0, i.localize)(3967, null),
								},
								"window.openFoldersInNewWindow": {
									type: "string",
									enum: ["on", "off", "default"],
									enumDescriptions: [
										(0, i.localize)(3968, null),
										(0, i.localize)(3969, null),
										(0, i.localize)(3970, null),
									],
									default: "default",
									scope: w.ConfigurationScope.APPLICATION,
									markdownDescription: (0, i.localize)(3971, null),
								},
								"window.confirmBeforeClose": {
									type: "string",
									enum: ["always", "keyboardOnly", "never"],
									enumDescriptions: [
										E.$r
											? (0, i.localize)(3972, null)
											: (0, i.localize)(3973, null),
										E.$r
											? (0, i.localize)(3974, null)
											: (0, i.localize)(3975, null),
										E.$r
											? (0, i.localize)(3976, null)
											: (0, i.localize)(3977, null),
									],
									default: E.$r && !(0, d.$Vfb)() ? "keyboardOnly" : "never",
									markdownDescription: E.$r
										? (0, i.localize)(3978, null)
										: (0, i.localize)(3979, null),
									scope: w.ConfigurationScope.APPLICATION,
								},
							},
						}),
						(0, r.$s6)(C.$D6.ID, C.$D6, r.WorkbenchPhase.Eventually),
						p.registerConfiguration({
							...C.$x6,
							properties: {
								"problems.visibility": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3980, null),
								},
							},
						}),
						p.registerConfiguration({
							id: "zenMode",
							order: 9,
							title: (0, i.localize)(3981, null),
							type: "object",
							properties: {
								"zenMode.fullScreen": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3982, null),
								},
								"zenMode.centerLayout": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3983, null),
								},
								"zenMode.showTabs": {
									type: "string",
									enum: ["multiple", "single", "none"],
									description: (0, i.localize)(3984, null),
									enumDescriptions: [
										(0, i.localize)(3985, null),
										(0, i.localize)(3986, null),
										(0, i.localize)(3987, null),
									],
									default: "multiple",
								},
								"zenMode.hideStatusBar": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3988, null),
								},
								"zenMode.hideActivityBar": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3989, null),
								},
								"zenMode.hideLineNumbers": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3990, null),
								},
								"zenMode.restore": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3991, null),
								},
								"zenMode.silentNotifications": {
									type: "boolean",
									default: !0,
									description: (0, i.localize)(3992, null),
								},
							},
						});
				})(),
					t.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "workbench.activityBar.visible",
								migrateFn: (o) => {
									const f = [];
									return (
										o !== void 0 &&
											f.push([
												"workbench.activityBar.visible",
												{ value: void 0 },
											]),
										o === !1 &&
											f.push([
												u.LayoutSettings.ACTIVITY_BAR_LOCATION,
												{ value: u.ActivityBarPosition.HIDDEN },
											]),
										f
									);
								},
							},
						]),
					t.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: u.LayoutSettings.ACTIVITY_BAR_LOCATION,
								migrateFn: (o) => {
									const f = [];
									return (
										o === "side" &&
											f.push([
												u.LayoutSettings.ACTIVITY_BAR_LOCATION,
												{ value: u.ActivityBarPosition.DEFAULT },
											]),
										f
									);
								},
							},
						]),
					t.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "workbench.editor.doubleClickTabToToggleEditorGroupSizes",
								migrateFn: (o) => {
									const f = [];
									return (
										typeof o == "boolean" &&
											((o = o ? "expand" : "off"),
											f.push([
												"workbench.editor.doubleClickTabToToggleEditorGroupSizes",
												{ value: o },
											])),
										f
									);
								},
							},
							{
								key: u.LayoutSettings.EDITOR_TABS_MODE,
								migrateFn: (o) => {
									const f = [];
									return (
										typeof o == "boolean" &&
											((o = o
												? u.EditorTabsMode.MULTIPLE
												: u.EditorTabsMode.SINGLE),
											f.push([
												u.LayoutSettings.EDITOR_TABS_MODE,
												{ value: o },
											])),
										f
									);
								},
							},
							{
								key: "workbench.editor.tabCloseButton",
								migrateFn: (o) => {
									const f = [];
									return (
										o === "left" || o === "right"
											? f.push([
													"workbench.editor.tabActionLocation",
													{ value: o },
												])
											: o === "off" &&
												f.push([
													"workbench.editor.tabActionCloseVisibility",
													{ value: !1 },
												]),
										f
									);
								},
							},
							{
								key: "zenMode.hideTabs",
								migrateFn: (o) => {
									const f = [["zenMode.hideTabs", { value: void 0 }]];
									return (
										o === !0 &&
											f.push(["zenMode.showTabs", { value: "single" }]),
										f
									);
								},
							},
						]);
			},
		),
		define(
			de[3803],
			he([1, 0, 3, 178, 412, 39, 30, 100, 60, 89]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K2c = void 0);
				let u = class extends t.$1c {
					static {
						this.ID = "extensionAccessibilityHelpDialogContribution";
					}
					constructor(c) {
						super(),
							(this.a = this.D(new t.$0c())),
							this.D(
								C.$Io.as(m.Extensions.ViewsRegistry).onViewsRegistered((n) => {
									for (const g of n)
										for (const p of g.views)
											p.accessibilityHelpContent && this.a.set(p.id, a(c, p));
								}),
							),
							this.D(
								C.$Io
									.as(m.Extensions.ViewsRegistry)
									.onViewsDeregistered((n) => {
										for (const g of n.views)
											g.accessibilityHelpContent && this.a.get(g.id)?.dispose();
									}),
							);
					}
				};
				(e.$K2c = u), (e.$K2c = u = Ne([j(0, E.$uZ)], u));
				function a(h, c) {
					const n = new t.$Zc(),
						g = c.accessibilityHelpContent?.value;
					if (!g)
						throw new Error(
							"No content provided for the accessibility help dialog",
						);
					return (
						n.add(
							w.$Whc.register({
								priority: 95,
								name: c.id,
								type: i.AccessibleViewType.Help,
								when: d.$zQb.isEqualTo(c.id),
								getProvider: (p) => {
									const o = p.get(r.$HMb);
									return new i.$JLb(
										c.id,
										{ type: i.AccessibleViewType.Help },
										() => g,
										() => o.openView(c.id, !0),
									);
								},
							}),
						),
						n.add(
							h.onDidUpdateKeybindings(() => {
								n.clear(), n.add(a(h, c));
							}),
						),
						n
					);
				}
			},
		),
		