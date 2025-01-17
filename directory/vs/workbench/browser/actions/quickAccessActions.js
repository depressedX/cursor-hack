import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/actions/common/actions.js';
import '../../../base/common/keyCodes.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../platform/quickinput/common/quickInput.js';
import '../../../platform/keybinding/common/keybinding.js';
import '../../../platform/commands/common/commands.js';
import '../quickaccess.js';
import '../../../base/common/codicons.js';
define(
			de[3256],
			he([1, 0, 4, 11, 27, 43, 63, 39, 31, 473, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const a = {
					primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyP,
					secondary: [w.KeyMod.CtrlCmd | w.KeyCode.KeyE],
					mac: {
						primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyP,
						secondary: void 0,
					},
				};
				E.$TX.registerCommandAndKeybindingRule({
					id: "workbench.action.closeQuickOpen",
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: r.$g9b,
					primary: w.KeyCode.Escape,
					secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
					handler: (b) => b.get(C.$DJ).cancel(),
				}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.acceptSelectedQuickOpenItem",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => b.get(C.$DJ).accept(),
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.alternativeAcceptSelectedQuickOpenItem",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => b.get(C.$DJ).accept({ ctrlCmd: !0, alt: !1 }),
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.focusQuickOpen",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => {
							b.get(C.$DJ).focus();
						},
					});
				const h = "workbench.action.quickOpenNavigateNextInFilePicker";
				E.$TX.registerCommandAndKeybindingRule({
					id: h,
					weight: E.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, r.$j9b)(h, !0),
					when: r.$i9b,
					primary: a.primary,
					secondary: a.secondary,
					mac: a.mac,
				});
				const c = "workbench.action.quickOpenNavigatePreviousInFilePicker";
				E.$TX.registerCommandAndKeybindingRule({
					id: c,
					weight: E.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, r.$j9b)(c, !1),
					when: r.$i9b,
					primary: a.primary | w.KeyMod.Shift,
					secondary: [a.secondary[0] | w.KeyMod.Shift],
					mac: { primary: a.mac.primary | w.KeyMod.Shift, secondary: void 0 },
				}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.quickPickManyToggle",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => {
							b.get(C.$DJ).toggle();
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.quickInputBack",
						weight: E.KeybindingWeight.WorkbenchContrib + 50,
						when: r.$g9b,
						primary: 0,
						win: { primary: w.KeyMod.Alt | w.KeyCode.LeftArrow },
						mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Minus },
						linux: {
							primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.Minus,
						},
						handler: (b) => {
							b.get(C.$DJ).back();
						},
					}),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.quickOpen",
									title: (0, t.localize2)(2940, "Go to File..."),
									metadata: {
										description: "Quick access",
										args: [{ name: "prefix", schema: { type: "string" } }],
									},
									keybinding: {
										weight: E.KeybindingWeight.WorkbenchContrib,
										primary: a.primary,
										secondary: a.secondary,
										mac: a.mac,
									},
									f1: !0,
								});
							}
							run(s, l) {
								s.get(C.$DJ).quickAccess.show(
									typeof l == "string" ? l : void 0,
									{ preserveValue: typeof l == "string" },
								);
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.quickOpenWithModes",
									title: (0, t.localize)(2939, null),
									icon: u.$ak.search,
									menu: { id: i.$XX.CommandCenterCenter, order: 100 },
								});
							}
							run(s) {
								const l = s.get(C.$DJ),
									y = { includeHelp: !0, from: "commandCenter" };
								l.quickAccess.show(void 0, {
									preserveValue: !0,
									providerOptions: y,
								});
							}
						},
					),
					m.$fk.registerCommand(
						"workbench.action.quickOpenPreviousEditor",
						async (b) => {
							b.get(C.$DJ).quickAccess.show("", {
								itemActivation: C.ItemActivation.SECOND,
							});
						},
					);
				class n extends i.$3X {
					constructor(s, l, y, $, v) {
						super({ id: s, title: l, f1: !0, keybinding: v }),
							(this.a = s),
							(this.b = y),
							(this.c = $);
					}
					async run(s) {
						const l = s.get(d.$uZ),
							y = s.get(C.$DJ),
							$ = l.lookupKeybindings(this.a),
							v = this.c ? { keybindings: $ } : void 0;
						y.navigate(this.b, v);
					}
				}
				class g extends n {
					constructor() {
						super(
							"workbench.action.quickOpenNavigateNext",
							(0, t.localize2)(2941, "Navigate Next in Quick Open"),
							!0,
							!0,
						);
					}
				}
				class p extends n {
					constructor() {
						super(
							"workbench.action.quickOpenNavigatePrevious",
							(0, t.localize2)(2942, "Navigate Previous in Quick Open"),
							!1,
							!0,
						);
					}
				}
				class o extends n {
					constructor() {
						super(
							"workbench.action.quickOpenSelectNext",
							(0, t.localize2)(2943, "Select Next in Quick Open"),
							!0,
							!1,
							{
								weight: E.KeybindingWeight.WorkbenchContrib + 50,
								when: r.$g9b,
								primary: 0,
								mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.KeyN },
							},
						);
					}
				}
				class f extends n {
					constructor() {
						super(
							"workbench.action.quickOpenSelectPrevious",
							(0, t.localize2)(2944, "Select Previous in Quick Open"),
							!1,
							!1,
							{
								weight: E.KeybindingWeight.WorkbenchContrib + 50,
								when: r.$g9b,
								primary: 0,
								mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.KeyP },
							},
						);
					}
				}
				(0, i.$4X)(o), (0, i.$4X)(f), (0, i.$4X)(g), (0, i.$4X)(p);
			},
		),
		