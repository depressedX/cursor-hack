import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/config/tabFocus.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[1635],
			he([1, 0, 127, 27, 653, 4, 11, 43]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xkc = void 0),
					(E = mt(E));
				class m extends C.$3X {
					static {
						this.ID = "editor.action.toggleTabFocusMode";
					}
					constructor() {
						super({
							id: m.ID,
							title: E.localize2(1550, "Toggle Tab Key Moves Focus"),
							precondition: void 0,
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyM,
								mac: {
									primary: i.KeyMod.WinCtrl | i.KeyMod.Shift | i.KeyCode.KeyM,
								},
								weight: d.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: E.localize2(
									1551,
									"Determines whether the tab key moves focus around the workbench or inserts the tab character in the current editor. This is also called tab trapping, tab navigation, or tab focus mode.",
								),
							},
							f1: !0,
						});
					}
					run() {
						const a = !w.$rsb.getTabFocusMode();
						w.$rsb.setTabFocusMode(a),
							a
								? (0, t.$oib)(E.localize(1548, null))
								: (0, t.$oib)(E.localize(1549, null));
					}
				}
				(e.$xkc = m), (0, C.$4X)(m);
			},
		),
		