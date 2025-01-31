import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/lifecycle.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/views/common/viewsService.js';
import '../../../../editor/common/standaloneStrings.js';
import '../../../common/contextkeys.js';
import '../common/debug.js';
define(
			de[3827],
			he([1, 0, 178, 8, 3, 130, 4, 31, 89, 761, 100, 112]),
			function (ce /*require*/,
 e /*exports*/,
 t /*accessibleView*/,
 i /*contextkey*/,
 w /*lifecycle*/,
 E /*accessibilityConfiguration*/,
 C /*nls*/,
 d /*commands*/,
 m /*viewsService*/,
 r /*standaloneStrings*/,
 u /*contextkeys*/,
 a /*debug*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pRc = void 0);
				class h {
					constructor() {
						(this.priority = 120),
							(this.name = "runAndDebugHelp"),
							(this.when = i.$Kj.or(
								i.$Kj.and(
									i.$Kj.equals("activeViewlet", "workbench.view.debug"),
									u.$hQb,
								),
								i.$Kj.equals(u.$zQb.key, a.$R4),
								i.$Kj.equals(u.$zQb.key, a.$S4),
								i.$Kj.equals(u.$zQb.key, a.$T4),
								i.$Kj.equals(u.$zQb.key, a.$U4),
								i.$Kj.equals(u.$zQb.key, a.$V4),
							)),
							(this.type = t.AccessibleViewType.Help);
					}
					getProvider(g) {
						return new c(g.get(d.$ek), g.get(m.$HMb));
					}
				}
				e.$pRc = h;
				let c = class extends w.$1c {
					constructor(g, p) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.id = t.AccessibleViewProviderId.RunAndDebug),
							(this.verbositySettingKey =
								E.AccessibilityVerbositySettingId.Debug),
							(this.options = { type: t.AccessibleViewType.Help }),
							(this.a = this.c.getFocusedViewName());
					}
					onClose() {
						switch (this.a) {
							case "Watch":
								this.b.executeCommand("workbench.debug.action.focusWatchView");
								break;
							case "Variables":
								this.b.executeCommand(
									"workbench.debug.action.focusVariablesView",
								);
								break;
							case "Call Stack":
								this.b.executeCommand(
									"workbench.debug.action.focusCallStackView",
								);
								break;
							case "Breakpoints":
								this.b.executeCommand(
									"workbench.debug.action.focusBreakpointsView",
								);
								break;
							default:
								this.b.executeCommand("workbench.view.debug");
						}
					}
					provideContent() {
						return [
							(0, C.localize)(5723, null, "<keybinding:workbench.view.debug>"),
							(0, C.localize)(
								5724,
								null,
								"<keybinding:workbench.action.debug.start>",
							),
							(0, C.localize)(
								5725,
								null,
								"<keybinding:workbench.panel.repl.view.focus>",
							),
							r.AccessibilityHelpNLS.setBreakpoint,
							r.AccessibilityHelpNLS.addToWatch,
							(0, C.localize)(5726, null),
							(0, C.localize)(
								5727,
								null,
								"<keybinding:workbench.action.debug.restart>",
							),
							(0, C.localize)(
								5728,
								null,
								"<keybinding:workbench.action.debug.stop>",
							),
							(0, C.localize)(
								5729,
								null,
								"<keybinding:workbench.action.debug.continue>",
							),
							(0, C.localize)(
								5730,
								null,
								"<keybinding:workbench.action.debug.stepInto>",
							),
							(0, C.localize)(
								5731,
								null,
								"<keybinding:workbench.action.debug.stepOver>",
							),
							(0, C.localize)(
								5732,
								null,
								"<keybinding:workbench.action.debug.stepOut>",
							),
							(0, C.localize)(5733, null),
							(0, C.localize)(
								5734,
								null,
								"<keybinding:workbench.debug.action.focusBreakpointsView>",
							),
							(0, C.localize)(
								5735,
								null,
								"<keybinding:workbench.debug.action.focusCallStackView>",
							),
							(0, C.localize)(
								5736,
								null,
								"<keybinding:workbench.debug.action.focusVariablesView>",
							),
							(0, C.localize)(
								5737,
								null,
								"<keybinding:workbench.debug.action.focusWatchView>",
							),
							(0, C.localize)(
								5738,
								null,
								"accessibility.debugWatchVariableAnnouncements",
							),
						].join(`
`);
					}
				};
				c = Ne([j(0, d.$ek), j(1, m.$HMb)], c);
			},
		)
