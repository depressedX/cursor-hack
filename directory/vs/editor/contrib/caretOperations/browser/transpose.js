import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/commands/replaceCommand.js';
import '../../../common/cursor/cursorMoveOperations.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[2802],
			he([1, 0, 27, 46, 655, 1192, 17, 71, 4, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*editorExtensions*/,
 w /*replaceCommand*/,
 E /*cursorMoveOperations*/,
 C /*range*/,
 d /*editorContextKeys*/,
 m /*nls*/,
 r /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (m = mt(m));
				class u extends i.$itb {
					constructor() {
						super({
							id: "editor.action.transposeLetters",
							label: m.localize(873, null),
							alias: "Transpose Letters",
							precondition: d.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: d.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.KeyT },
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(h, c) {
						if (!c.hasModel()) return;
						const n = c.getModel(),
							g = [],
							p = c.getSelections();
						for (const o of p) {
							if (!o.isEmpty()) continue;
							const f = o.startLineNumber,
								b = o.startColumn,
								s = n.getLineMaxColumn(f);
							if (f === 1 && (b === 1 || (b === 2 && s === 2))) continue;
							const l =
									b === s
										? o.getPosition()
										: E.$Dtb.rightPosition(
												n,
												o.getPosition().lineNumber,
												o.getPosition().column,
											),
								y = E.$Dtb.leftPosition(n, l),
								$ = E.$Dtb.leftPosition(n, y),
								v = n.getValueInRange(C.$iL.fromPositions($, y)),
								S = n.getValueInRange(C.$iL.fromPositions(y, l)),
								I = C.$iL.fromPositions($, l);
							g.push(new w.$wtb(I, S + v));
						}
						g.length > 0 &&
							(c.pushUndoStop(),
							c.executeCommands(this.id, g),
							c.pushUndoStop());
					}
				}
				(0, i.$ntb)(u);
			},
		),
		