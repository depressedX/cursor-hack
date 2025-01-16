define(
			de[4108],
			he([1, 0, 4, 348, 30, 2782, 3836, 4107, 11, 27, 8, 473, 43, 71]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const n = w.$Io.as(i.$1r.Quickaccess);
				n.registerQuickAccessProvider({
					ctor: E.$JMc,
					prefix: E.$JMc.PREFIX,
					placeholder: (0, t.localize)(8695, null, E.$JMc.PREFIX),
					helpEntries: [
						{
							description: (0, t.localize)(8696, null),
							commandCenterOrder: 70,
							commandCenterLabel: (0, t.localize)(8697, null),
						},
					],
				}),
					n.registerQuickAccessProvider({
						ctor: C.$KMc,
						prefix: C.$KMc.PREFIX,
						contextKey: "inViewsPicker",
						placeholder: (0, t.localize)(8698, null),
						helpEntries: [
							{
								description: (0, t.localize)(8699, null),
								commandId: C.$LMc.ID,
							},
						],
					}),
					n.registerQuickAccessProvider({
						ctor: d.$OMc,
						prefix: d.$OMc.PREFIX,
						contextKey: "inCommandsPicker",
						placeholder: (0, t.localize)(8700, null),
						helpEntries: [
							{
								description: (0, t.localize)(8701, null),
								commandId: d.$PMc.ID,
								commandCenterOrder: 20,
							},
						],
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarViewMenu, {
						group: "1_open",
						command: { id: d.$PMc.ID, title: (0, t.localize)(8702, null) },
						order: 1,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarHelpMenu, {
						group: "1_welcome",
						command: { id: d.$PMc.ID, title: (0, t.localize)(8703, null) },
						order: 2,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarViewMenu, {
						group: "1_open",
						command: { id: C.$LMc.ID, title: (0, t.localize)(8704, null) },
						order: 2,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarGoMenu, {
						group: "5_infile_nav",
						command: {
							id: "workbench.action.gotoLine",
							title: (0, t.localize)(8705, null),
						},
						order: 1,
					}),
					m.$ZX.appendMenuItem(m.$XX.GlobalActivity, {
						group: "1_command",
						command: { id: d.$PMc.ID, title: (0, t.localize)(8706, null) },
						order: 1,
					}),
					m.$ZX.appendMenuItem(m.$XX.EditorContext, {
						group: "z_commands",
						when: c.EditorContextKeys.editorSimpleInput.toNegated(),
						command: { id: d.$PMc.ID, title: (0, t.localize)(8707, null) },
						order: 1,
					}),
					(0, m.$4X)(d.$QMc),
					(0, m.$4X)(d.$PMc),
					(0, m.$4X)(C.$LMc),
					(0, m.$4X)(C.$MMc);
				const p = u.$Kj.and(a.$g9b, u.$Kj.has("inViewsPicker")),
					o = C.$MMc.KEYBINDING,
					f = "workbench.action.quickOpenNavigateNextInViewPicker";
				h.$TX.registerCommandAndKeybindingRule({
					id: f,
					weight: h.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, a.$j9b)(f, !0),
					when: p,
					primary: o.primary,
					linux: o.linux,
					mac: o.mac,
				});
				const b = "workbench.action.quickOpenNavigatePreviousInViewPicker";
				h.$TX.registerCommandAndKeybindingRule({
					id: b,
					weight: h.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, a.$j9b)(b, !1),
					when: p,
					primary: o.primary | r.KeyMod.Shift,
					linux: o.linux,
					mac: { primary: o.mac.primary | r.KeyMod.Shift },
				});
			},
		),
		