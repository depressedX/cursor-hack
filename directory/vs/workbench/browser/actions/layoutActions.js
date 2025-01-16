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
		