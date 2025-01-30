import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../chat/browser/actions/chatAccessibilityHelp.js';
import '../../chat/common/chatContextKeys.js';
import '../common/inlineChat.js';
define(
			de[3557],
			he([1, 0, 65, 178, 8, 1857, 207, 257]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codeEditorService*/,
 i /*accessibleView*/,
 w /*contextkey*/,
 E /*chatAccessibilityHelp*/,
 C /*chatContextKeys*/,
 d /*inlineChat*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mJc = void 0);
				class m {
					constructor() {
						(this.priority = 106),
							(this.name = "inlineChat"),
							(this.type = i.AccessibleViewType.Help),
							(this.when = w.$Kj.or(d.$ZKb, C.$21));
					}
					getProvider(u) {
						const a =
							u.get(t.$dtb).getActiveCodeEditor() ||
							u.get(t.$dtb).getFocusedCodeEditor();
						if (a) return (0, E.$xIc)(u, a, "inlineChat");
					}
				}
				e.$mJc = m;
			},
		),
		