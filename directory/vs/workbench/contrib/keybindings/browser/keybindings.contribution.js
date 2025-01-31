import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/log/common/logConstants.js';
define(
			de[3460],
			he([1, 0, 4, 11, 39, 99, 31, 705]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*keybinding*/,
 E /*actionCommonCategories*/,
 C /*commands*/,
 d /*logConstants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class m extends i.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleKeybindingsLog",
							title: t.localize2(
								7327,
								"Toggle Keyboard Shortcuts Troubleshooting",
							),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					run(u) {
						u.get(w.$uZ).toggleLogging() && u.get(C.$ek).executeCommand(d.$0Sb);
					}
				}
				(0, i.$4X)(m);
			},
		)
