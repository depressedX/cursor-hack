import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/dom.js';
define(de[3026], he([1, 0, 43, 12, 27, 7]), function (ce /*require*/,
 e /*exports*/,
 t /*keybindingsRegistry*/,
 i /*platform*/,
 w /*keyCodes*/,
 E /*dom*/) {
			"use strict";
			if (
				(Object.defineProperty(e, "__esModule", { value: !0 }),
				(i = mt(i)),
				i.$m)
			) {
				let C = function (d) {
					return () => {
						(0, E.$Ogb)().document.execCommand(d);
					};
				};
				t.$TX.registerCommandAndKeybindingRule({
					id: "execCut",
					primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyX,
					handler: C("cut"),
					weight: 0,
					when: void 0,
				}),
					t.$TX.registerCommandAndKeybindingRule({
						id: "execCopy",
						primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyC,
						handler: C("copy"),
						weight: 0,
						when: void 0,
					}),
					t.$TX.registerCommandAndKeybindingRule({
						id: "execPaste",
						primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyV,
						handler: C("paste"),
						weight: 0,
						when: void 0,
					});
			}
		})
