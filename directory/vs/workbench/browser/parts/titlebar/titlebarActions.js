define(
			de[3403],
			he([1, 0, 4, 10, 21, 96, 11, 8, 968, 100, 253]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$stc = e.$rtc = void 0);
				class a extends C.$3X {
					constructor(n, g, p, o, f) {
						const b = f ? r.$GPb.toNegated() : d.$Kj.true();
						super({
							id: `toggle.${n}`,
							title: g,
							metadata: p ? { description: p } : void 0,
							toggled: d.$Kj.equals(`config.${n}`, !0),
							menu: [
								{
									id: C.$XX.TitleBarContext,
									when: b,
									order: o,
									group: "2_config",
								},
								{
									id: C.$XX.TitleBarTitleContext,
									when: b,
									order: o,
									group: "2_config",
								},
							],
						}),
							(this.a = n);
					}
					run(n, ...g) {
						const p = n.get(i.$gj),
							o = p.getValue(this.a);
						p.updateValue(this.a, !o);
					}
				}
				(0, C.$4X)(
					class extends a {
						constructor() {
							super(
								E.LayoutSettings.COMMAND_CENTER,
								(0, t.localize)(3714, null),
								(0, t.localize)(3715, null),
								1,
								!1,
							);
						}
					},
				),
					(0, C.$4X)(
						class extends a {
							constructor() {
								super(
									"workbench.layoutControl.enabled",
									(0, t.localize)(3716, null),
									(0, t.localize)(3717, null),
									2,
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: `toggle.${u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY}`,
									title: (0, t.localize)(3718, null),
									menu: [
										{
											id: C.$XX.TitleBarContext,
											order: 0,
											when: d.$Kj.equals(r.$kQb.key, u.TitlebarStyle.NATIVE),
											group: "3_toggle",
										},
										{
											id: C.$XX.TitleBarTitleContext,
											order: 0,
											when: d.$Kj.equals(r.$kQb.key, u.TitlebarStyle.NATIVE),
											group: "3_toggle",
										},
									],
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.NEVER,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: `toggle.${u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY}.windowed`,
									title: (0, t.localize)(3719, null),
									menu: [
										{
											id: C.$XX.TitleBarContext,
											order: 1,
											when: r.$FPb,
											group: "3_toggle",
										},
										{
											id: C.$XX.TitleBarTitleContext,
											order: 1,
											when: r.$FPb,
											group: "3_toggle",
										},
									],
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.WINDOWED,
								);
							}
						},
					);
				class h extends C.$3X {
					constructor() {
						super({
							id: "toggle.toggleCustomTitleBar",
							title: (0, t.localize)(3720, null),
							toggled: r.$lQb,
							menu: [
								{
									id: C.$XX.MenubarAppearanceMenu,
									order: 6,
									when: d.$Kj.or(
										d.$Kj.and(
											d.$Kj.equals(r.$kQb.key, u.TitlebarStyle.NATIVE),
											d.$Kj
												.and(
													d.$Kj.equals(
														"config.workbench.layoutControl.enabled",
														!1,
													),
													d.$Kj.equals("config.window.commandCenter", !1),
													d.$Kj.notEquals(
														"config.workbench.editor.editorActionsLocation",
														"titleBar",
													),
													d.$Kj.notEquals(
														"config.workbench.activityBar.location",
														"top",
													),
													d.$Kj.notEquals(
														"config.workbench.activityBar.location",
														"bottom",
													),
												)
												?.negate(),
										),
										r.$FPb,
									),
									group: "2_workbench_layout",
								},
							],
						});
					}
					run(n, ...g) {
						const p = n.get(i.$gj),
							o = n.get(d.$6j);
						switch (p.getValue(u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY)) {
							case u.CustomTitleBarVisibility.NEVER:
								p.updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.AUTO,
								);
								break;
							case u.CustomTitleBarVisibility.WINDOWED: {
								r.$FPb.evaluate(o.getContext(null))
									? p.updateValue(
											u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
											u.CustomTitleBarVisibility.AUTO,
										)
									: p.updateValue(
											u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
											u.CustomTitleBarVisibility.NEVER,
										);
								break;
							}
							case u.CustomTitleBarVisibility.AUTO:
							default:
								p.updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.NEVER,
								);
								break;
						}
					}
				}
				(0, C.$4X)(h),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "showCustomTitleBar",
									title: (0, t.localize2)(3726, "Show Custom Title Bar"),
									precondition: r.$lQb.negate(),
									f1: !0,
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.AUTO,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "hideCustomTitleBar",
									title: (0, t.localize2)(3727, "Hide Custom Title Bar"),
									precondition: r.$lQb,
									f1: !0,
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.NEVER,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "hideCustomTitleBarInFullScreen",
									title: (0, t.localize2)(
										3728,
										"Hide Custom Title Bar In Full Screen",
									),
									precondition: d.$Kj.and(r.$lQb, r.$FPb),
									f1: !0,
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.WINDOWED,
								);
							}
						},
					),
					(0, C.$4X)(
						class Ao extends C.$3X {
							static {
								this.settingsID = "workbench.editor.editorActionsLocation";
							}
							constructor() {
								const n = d.$Kj
									.and(
										d.$Kj
											.equals("config.workbench.editor.showTabs", "none")
											.negate(),
										d.$Kj.equals(`config.${Ao.settingsID}`, "default"),
									)
									?.negate();
								super({
									id: `toggle.${Ao.settingsID}`,
									title: (0, t.localize)(3721, null),
									toggled: d.$Kj
										.equals(`config.${Ao.settingsID}`, "hidden")
										.negate(),
									menu: [
										{
											id: C.$XX.TitleBarContext,
											order: 3,
											when: n,
											group: "2_config",
										},
										{
											id: C.$XX.TitleBarTitleContext,
											order: 3,
											when: n,
											group: "2_config",
										},
									],
								});
							}
							run(n, ...g) {
								const p = n.get(i.$gj),
									o = n.get(w.$lq),
									f = p.getValue(Ao.settingsID);
								if (f === "hidden") {
									if (p.getValue(E.LayoutSettings.EDITOR_TABS_MODE) !== "none")
										p.updateValue(Ao.settingsID, "titleBar");
									else {
										const s = o.get(Ao.settingsID, w.StorageScope.PROFILE);
										p.updateValue(Ao.settingsID, s ?? "default");
									}
									o.remove(Ao.settingsID, w.StorageScope.PROFILE);
								} else
									p.updateValue(Ao.settingsID, "hidden"),
										o.store(
											Ao.settingsID,
											f,
											w.StorageScope.PROFILE,
											w.StorageTarget.USER,
										);
							}
						},
					),
					(e.$rtc = {
						id: m.$6qc,
						label: (0, t.localize)(3722, null),
						tooltip: (0, t.localize)(3723, null),
						class: void 0,
						enabled: !0,
						run: function () {},
					}),
					(e.$stc = {
						id: m.$5qc,
						label: (0, t.localize)(3724, null),
						tooltip: (0, t.localize)(3725, null),
						class: void 0,
						enabled: !0,
						run: function () {},
					});
			},
		),
		