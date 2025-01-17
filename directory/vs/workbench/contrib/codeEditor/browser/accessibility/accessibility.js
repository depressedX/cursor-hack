import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/browser/ui/aria/aria.js';
import '../../../../../editor/common/standaloneStrings.js';
import '../../../../../css!vs/workbench/contrib/codeEditor/browser/accessibility/accessibility.js';
define(
			de[3551],
			he([1, 0, 4, 10, 91, 11, 130, 43, 27, 127, 761, 2396]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class a extends E.$3X {
					constructor() {
						super({
							id: "editor.action.toggleScreenReaderAccessibilityMode",
							title: t.localize2(
								4845,
								"Toggle Screen Reader Accessibility Mode",
							),
							metadata: {
								description: t.localize2(
									4846,
									"Toggles an optimized mode for usage with screen readers, braille devices, and other assistive technologies.",
								),
							},
							f1: !0,
							keybinding: [
								{
									primary: m.KeyMod.CtrlCmd | m.KeyCode.KeyE,
									weight: d.KeybindingWeight.WorkbenchContrib + 10,
									when: C.$MLb,
								},
								{
									primary: m.KeyMod.Alt | m.KeyCode.F1 | m.KeyMod.Shift,
									linux: {
										primary: m.KeyMod.Alt | m.KeyCode.F4 | m.KeyMod.Shift,
									},
									weight: d.KeybindingWeight.WorkbenchContrib + 10,
								},
							],
						});
					}
					async run(c) {
						const n = c.get(w.$XK),
							g = c.get(i.$gj),
							p = n.isScreenReaderOptimized();
						g.updateValue(
							"editor.accessibilitySupport",
							p ? "off" : "on",
							i.ConfigurationTarget.USER,
						),
							(0, r.$oib)(
								p
									? u.AccessibilityHelpNLS.screenReaderModeDisabled
									: u.AccessibilityHelpNLS.screenReaderModeEnabled,
							);
					}
				}
				(0, E.$4X)(a);
			},
		),
		