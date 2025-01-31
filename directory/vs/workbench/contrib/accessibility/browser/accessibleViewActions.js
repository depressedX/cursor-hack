import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../common/accessibilityCommands.js';
import './accessibilityConfiguration.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js';
define(
			de[1032],
			he([1, 0, 14, 27, 46, 4, 11, 8, 43, 417, 130, 178, 65, 501]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*keyCodes*/,
 w /*editorExtensions*/,
 E /*nls*/,
 C /*actions*/,
 d /*contextkey*/,
 m /*keybindingsRegistry*/,
 r /*accessibilityCommands*/,
 u /*accessibilityConfiguration*/,
 a /*accessibleView*/,
 h /*codeEditorService*/,
 c /*inlineCompletionsController*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tpc = e.$spc = void 0);
				const n = {
						id: C.$XX.AccessibleView,
						group: "navigation",
						when: u.$NLb,
					},
					g = { id: C.$XX.CommandPalette, group: "", order: 1 };
				class p extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.ShowNext,
							precondition: d.$Kj.and(u.$NLb, u.$OLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.BracketRight,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							menu: [g, { ...n, when: d.$Kj.and(u.$NLb, u.$OLb) }],
							icon: t.$ak.arrowDown,
							title: (0, E.localize)(4405, null),
						});
					}
					run(P) {
						P.get(a.$HLb).next();
					}
				}
				(0, C.$4X)(p);
				class o extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.NextCodeBlock,
							precondition: d.$Kj.and(
								u.$ULb,
								d.$Kj.equals(u.$SLb.key, a.AccessibleViewProviderId.Chat),
							),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageDown,
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageDown,
								},
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.arrowRight,
							menu: { ...n, when: d.$Kj.and(u.$NLb, u.$ULb) },
							title: (0, E.localize)(4406, null),
						});
					}
					run(P) {
						P.get(a.$HLb).navigateToCodeBlock("next");
					}
				}
				(0, C.$4X)(o);
				class f extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.PreviousCodeBlock,
							precondition: d.$Kj.and(
								u.$ULb,
								d.$Kj.equals(u.$SLb.key, a.AccessibleViewProviderId.Chat),
							),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageUp,
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageUp,
								},
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.arrowLeft,
							menu: { ...n, when: d.$Kj.and(u.$NLb, u.$ULb) },
							title: (0, E.localize)(4407, null),
						});
					}
					run(P) {
						P.get(a.$HLb).navigateToCodeBlock("previous");
					}
				}
				(0, C.$4X)(f);
				class b extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.ShowPrevious,
							precondition: d.$Kj.and(u.$NLb, u.$OLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.BracketLeft,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.arrowUp,
							menu: [g, { ...n, when: d.$Kj.and(u.$NLb, u.$OLb) }],
							title: (0, E.localize)(4408, null),
						});
					}
					run(P) {
						P.get(a.$HLb).previous();
					}
				}
				(0, C.$4X)(b);
				class s extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.GoToSymbol,
							precondition: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$QLb),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyO,
								secondary: [
									i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Period,
								],
								weight: m.KeybindingWeight.WorkbenchContrib + 10,
							},
							icon: t.$ak.symbolField,
							menu: [
								g,
								{ ...n, when: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$QLb) },
							],
							title: (0, E.localize)(4409, null),
						});
					}
					run(P) {
						P.get(a.$HLb).goToSymbol();
					}
				}
				(0, C.$4X)(s);
				function l(T) {
					return T.register(), T;
				}
				(e.$spc = l(
					new w.$ftb({
						id: r.AccessibilityCommandId.OpenAccessibilityHelp,
						precondition: void 0,
						kbOpts: {
							primary: i.KeyMod.Alt | i.KeyCode.F1,
							weight: m.KeybindingWeight.WorkbenchContrib,
							linux: {
								primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.F1,
								secondary: [i.KeyMod.Alt | i.KeyCode.F1],
							},
							kbExpr: u.$MLb.toNegated(),
						},
						menuOpts: [
							{
								menuId: C.$XX.CommandPalette,
								group: "",
								title: (0, E.localize)(4410, null),
								order: 1,
							},
						],
					}),
				)),
					(e.$tpc = l(
						new w.$ftb({
							id: r.AccessibilityCommandId.OpenAccessibleView,
							precondition: void 0,
							kbOpts: {
								primary: i.KeyMod.Alt | i.KeyCode.F2,
								weight: m.KeybindingWeight.WorkbenchContrib,
								linux: {
									primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.F2,
									secondary: [i.KeyMod.Alt | i.KeyCode.F2],
								},
							},
							menuOpts: [
								{
									menuId: C.$XX.CommandPalette,
									group: "",
									title: (0, E.localize)(4411, null),
									order: 1,
								},
							],
						}),
					));
				class y extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.DisableVerbosityHint,
							precondition: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$PLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.F6,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.bellSlash,
							menu: [
								g,
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									when: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$PLb),
								},
							],
							title: (0, E.localize)(4412, null),
						});
					}
					run(P) {
						P.get(a.$HLb).disableHint();
					}
				}
				(0, C.$4X)(y);
				class $ extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId
								.AccessibilityHelpConfigureKeybindings,
							precondition: d.$Kj.and(u.$MLb, u.$VLb),
							icon: t.$ak.key,
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.KeyK,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							menu: [
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									order: 3,
									when: u.$VLb,
								},
							],
							title: (0, E.localize)(4413, null),
						});
					}
					async run(P) {
						await P.get(a.$HLb).configureKeybindings(!0);
					}
				}
				(0, C.$4X)($);
				class v extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId
								.AccessibilityHelpConfigureAssignedKeybindings,
							precondition: d.$Kj.and(u.$MLb, u.$WLb),
							icon: t.$ak.key,
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.KeyA,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							menu: [
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									order: 4,
									when: u.$WLb,
								},
							],
							title: (0, E.localize)(4414, null),
						});
					}
					async run(P) {
						await P.get(a.$HLb).configureKeybindings(!1);
					}
				}
				(0, C.$4X)(v);
				class S extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.AccessibilityHelpOpenHelpLink,
							precondition: d.$Kj.and(u.$MLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.KeyH,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							title: (0, E.localize)(4415, null),
						});
					}
					run(P) {
						P.get(a.$HLb).openHelpLink();
					}
				}
				(0, C.$4X)(S);
				class I extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.AccessibleViewAcceptInlineCompletion,
							precondition: d.$Kj.and(
								u.$NLb,
								d.$Kj.equals(
									u.$SLb.key,
									a.AccessibleViewProviderId.InlineCompletions,
								),
							),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Slash,
								mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.Slash },
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.check,
							menu: [
								g,
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										u.$NLb,
										d.$Kj.equals(
											u.$SLb.key,
											a.AccessibleViewProviderId.InlineCompletions,
										),
									),
								},
							],
							title: (0, E.localize)(4416, null),
						});
					}
					async run(P) {
						const k = P.get(h.$dtb),
							L = k.getActiveCodeEditor() || k.getFocusedCodeEditor();
						if (!L) return;
						const D = c.$O1b.get(L)?.model.get(),
							M = D?.state.get();
						!D || !M || (await D.accept(L), D.stop(), L.focus());
					}
				}
				(0, C.$4X)(I);
			},
		)
