import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/cursorEvents.js';
import '../../../common/cursor/cursorMoveCommands.js';
import '../../../common/editorContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[2810],
			he([1, 0, 27, 46, 248, 1193, 71, 4, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*editorExtensions*/,
 w /*cursorEvents*/,
 E /*cursorMoveCommands*/,
 C /*editorContextKeys*/,
 d /*nls*/,
 m /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oic = void 0),
					(d = mt(d));
				class r extends i.$itb {
					constructor() {
						super({
							id: "expandLineSelection",
							label: d.localize(1271, null),
							alias: "Expand Line Selection",
							precondition: void 0,
							kbOpts: {
								weight: m.KeybindingWeight.EditorCore,
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Alt | t.KeyCode.KeyL,
							},
						});
					}
					run(a, h, c) {
						if (((c = c || {}), !h.hasModel())) return;
						const n = h._getViewModel();
						n.model.pushStackElement(),
							n.setCursorStates(
								c.source,
								w.CursorChangeReason.Explicit,
								E.$Htb.expandLineSelection(n, n.getCursorStates()),
							),
							n.revealAllCursors(c.source, !0);
					}
				}
				(e.$Oic = r), (0, i.$ntb)(r);
			},
		),
		