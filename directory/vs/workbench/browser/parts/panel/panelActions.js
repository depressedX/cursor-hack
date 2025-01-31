import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../common/contextkeys.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/platform.js';
import '../../../../css!vs/workbench/browser/parts/panel/media/panelpart.js';
define(
			de[1326],
			he([
				1, 0, 4, 27, 11, 99, 96, 100, 8, 14, 79, 60, 89, 142, 40, 43, 12, 1517,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*keyCodes*/,
 w /*actions*/,
 E /*actionCommonCategories*/,
 C /*layoutService*/,
 d /*contextkeys*/,
 m /*contextkey*/,
 r /*codicons*/,
 u /*iconRegistry*/,
 a /*views*/,
 h /*viewsService*/,
 c /*panecomposite*/,
 n /*notification*/,
 g /*keybindingsRegistry*/,
 p /*platform*/) {
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
		)
