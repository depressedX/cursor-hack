import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../common/editorContextKeys.js';
import './moveCaretCommand.js';
import '../../../../nls.js';
define(de[2801], he([1, 0, 46, 71, 2580, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*editorContextKeys*/,
 w /*moveCaretCommand*/,
 E /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (E = mt(E));
			class C extends t.$itb {
				constructor(u, a) {
					super(a), (this.d = u);
				}
				run(u, a) {
					if (!a.hasModel()) return;
					const h = [],
						c = a.getSelections();
					for (const n of c) h.push(new w.$fzb(n, this.d));
					a.pushUndoStop(), a.executeCommands(this.id, h), a.pushUndoStop();
				}
			}
			class d extends C {
				constructor() {
					super(!0, {
						id: "editor.action.moveCarretLeftAction",
						label: E.localize(871, null),
						alias: "Move Selected Text Left",
						precondition: i.EditorContextKeys.writable,
					});
				}
			}
			class m extends C {
				constructor() {
					super(!1, {
						id: "editor.action.moveCarretRightAction",
						label: E.localize(872, null),
						alias: "Move Selected Text Right",
						precondition: i.EditorContextKeys.writable,
					});
				}
			}
			(0, t.$ntb)(d), (0, t.$ntb)(m);
		})
