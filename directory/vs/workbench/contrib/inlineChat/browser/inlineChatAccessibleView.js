import '../../../../../require.js';
import '../../../../../exports.js';
import './inlineChatController.js';
import '../common/inlineChat.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
define(
			de[4083],
			he([1, 0, 427, 257, 65, 8, 178, 94, 267, 130]),
			function (ce /*require*/,
 e /*exports*/,
 t /*inlineChatController*/,
 i /*inlineChat*/,
 w /*codeEditorService*/,
 E /*contextkey*/,
 C /*accessibleView*/,
 d /*htmlContent*/,
 m /*markdownRenderer*/,
 r /*accessibilityConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lJc = void 0);
				class u {
					constructor() {
						(this.priority = 100),
							(this.name = "inlineChat"),
							(this.when = E.$Kj.or(i.$XKb, i.$ZKb)),
							(this.type = C.AccessibleViewType.View);
					}
					getProvider(h) {
						const c = h.get(w.$dtb),
							n = c.getActiveCodeEditor() || c.getFocusedCodeEditor();
						if (!n) return;
						const g = t.$Z1b.get(n);
						if (!g) return;
						const p = g?.getMessage();
						if (p)
							return new C.$ILb(
								C.AccessibleViewProviderId.InlineChat,
								{ type: C.AccessibleViewType.View },
								() => (0, m.$Xib)(new d.$cl(p), !0),
								() => g.focus(),
								r.AccessibilityVerbositySettingId.InlineChat,
							);
					}
				}
				e.$lJc = u;
			},
		)
