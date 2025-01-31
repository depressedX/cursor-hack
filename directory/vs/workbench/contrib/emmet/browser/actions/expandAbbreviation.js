import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../emmetActions.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../editor/common/editorContextKeys.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/actions/common/actions.js';
define(
			de[3672],
			he([1, 0, 4, 3671, 46, 71, 27, 8, 43, 11]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*emmetActions*/,
 w /*editorExtensions*/,
 E /*editorContextKeys*/,
 C /*keyCodes*/,
 d /*contextkey*/,
 m /*keybindingsRegistry*/,
 r /*actions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class u extends i.$IXc {
					constructor() {
						super({
							id: "editor.emmet.action.expandAbbreviation",
							label: t.localize(5995, null),
							alias: "Emmet: Expand Abbreviation",
							precondition: E.EditorContextKeys.writable,
							actionName: "expand_abbreviation",
							kbOpts: {
								primary: C.KeyCode.Tab,
								kbExpr: d.$Kj.and(
									E.EditorContextKeys.editorTextFocus,
									E.EditorContextKeys.tabDoesNotMoveFocus,
									d.$Kj.has("config.emmet.triggerExpansionOnTab"),
								),
								weight: m.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: r.$XX.MenubarEditMenu,
								group: "5_insert",
								title: t.localize(5996, null),
								order: 3,
							},
						});
					}
				}
				(0, w.$ntb)(u);
			},
		)
