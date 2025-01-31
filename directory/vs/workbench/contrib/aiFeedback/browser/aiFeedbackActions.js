import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './aiFeedbackOpenService.js';
define(
			de[2969],
			he([1, 0, 58, 27, 11, 43, 1705]),
			function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*keyCodes*/,
 w /*actions*/,
 E /*keybindingsRegistry*/,
 C /*aiFeedbackOpenService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Zc = e.$1Zc = void 0);
				class d extends w.$3X {
					static {
						this.LABEL = "Cursor: Report Issue";
					}
					constructor() {
						super({
							id: t.$rX,
							title: { value: d.LABEL, original: d.LABEL },
							f1: !0,
							keybinding: {
								primary: (0, i.$os)(i.$ps, i.KeyMod.CtrlCmd | i.KeyCode.KeyG),
								mac: {
									primary: (0, i.$os)(i.$qs, i.KeyMod.CtrlCmd | i.KeyCode.KeyG),
								},
								weight: E.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					run(u, ...a) {
						u.get(C.$ZZc).openPopup();
					}
				}
				(e.$1Zc = d), (0, w.$4X)(d);
				class m extends w.$3X {
					static {
						this.LABEL = "Cursor: Give Feedback";
					}
					constructor() {
						super({
							id: "cursor.giveFeedback",
							title: { value: m.LABEL, original: m.LABEL },
							f1: !0,
						});
					}
					run(u, ...a) {
						u.get(C.$ZZc).openPopup();
					}
				}
				(e.$2Zc = m), (0, w.$4X)(m);
			},
		)
