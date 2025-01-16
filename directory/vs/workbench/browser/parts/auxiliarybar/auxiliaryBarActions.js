define(
			de[1307],
			he([1, 0, 14, 4, 11, 79, 99, 100, 60, 96, 142, 43, 27]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O5b = void 0);
				const c = (0, E.$$O)(
						"auxiliarybar-right-layout-icon",
						t.$ak.layoutSidebarRight,
						(0, i.localize)(3032, null),
					),
					n = (0, E.$$O)(
						"auxiliarybar-right-off-layout-icon",
						t.$ak.layoutSidebarRightOff,
						(0, i.localize)(3033, null),
					),
					g = (0, E.$$O)(
						"auxiliarybar-left-layout-icon",
						t.$ak.layoutSidebarLeft,
						(0, i.localize)(3034, null),
					),
					p = (0, E.$$O)(
						"auxiliarybar-left-off-layout-icon",
						t.$ak.layoutSidebarLeftOff,
						(0, i.localize)(3035, null),
					);
				class o extends w.$3X {
					static {
						this.ID = "workbench.action.toggleAuxiliaryBar";
					}
					static {
						this.LABEL = (0, i.localize2)(
							3038,
							"Toggle Secondary Side Bar Visibility",
						);
					}
					constructor() {
						super({
							id: o.ID,
							title: o.LABEL,
							toggled: {
								condition: d.$sQb,
								title: (0, i.localize)(3036, null),
								mnemonicTitle: (0, i.localize)(3037, null),
							},
							category: C.$ck.View,
							f1: !0,
							keybinding: {
								weight: a.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyMod.Alt | h.KeyCode.KeyB,
							},
							menu: [
								{
									id: w.$XX.LayoutControlMenuSubmenu,
									group: "0_workbench_layout",
									order: 1,
								},
								{
									id: w.$XX.MenubarAppearanceMenu,
									group: "2_workbench_layout",
									order: 2,
								},
							],
						});
					}
					async run(b) {
						const s = b.get(r.$mEb);
						s.setPartHidden(
							s.isVisible(r.Parts.AUXILIARYBAR_PART),
							r.Parts.AUXILIARYBAR_PART,
						);
					}
				}
				(e.$O5b = o),
					(0, w.$4X)(o),
					(0, w.$4X)(
						class ha extends w.$3X {
							static {
								this.ID = "workbench.action.focusAuxiliaryBar";
							}
							static {
								this.LABEL = (0, i.localize2)(
									3039,
									"Focus into Secondary Side Bar",
								);
							}
							constructor() {
								super({
									id: ha.ID,
									title: ha.LABEL,
									category: C.$ck.View,
									f1: !0,
								});
							}
							async run(b) {
								const s = b.get(u.$6Sb),
									l = b.get(r.$mEb);
								l.isVisible(r.Parts.AUXILIARYBAR_PART) ||
									l.setPartHidden(!1, r.Parts.AUXILIARYBAR_PART),
									s
										.getActivePaneComposite(
											m.ViewContainerLocation.AuxiliaryBar,
										)
										?.focus();
							}
						},
					);
			},
		),
		