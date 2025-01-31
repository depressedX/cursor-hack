import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './terminal.js';
define(de[3141], he([1, 0, 43, 107]), function (ce /*require*/,
 e /*exports*/,
 t /*keybindingsRegistry*/,
 i /*terminal*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$MUc = w);
			function w() {
				E();
			}
			function E() {
				for (let C = 0; C < 9; C++) {
					const d = C,
						m = C + 1;
					t.$TX.registerCommandAndKeybindingRule({
						id: `workbench.action.terminal.focusAtIndex${m}`,
						weight: t.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: 0,
						handler: (r) => (
							r.get(i.$lIb).setActiveInstanceByIndex(d),
							r.get(i.$lIb).showPanel(!0)
						),
					});
				}
			}
		})
