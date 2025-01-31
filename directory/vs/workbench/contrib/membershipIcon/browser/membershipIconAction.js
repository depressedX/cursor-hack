import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/aiSettings/browser/aiSettingsService.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(de[3648], he([1, 0, 27, 11, 315, 43]), function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*actions*/,
 w /*aiSettingsService*/,
 E /*keybindingsRegistry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$FZc = void 0);
			class C extends i.$3X {
				static {
					this.ID = "aiSettings.usingOpenAIKey.toggle";
				}
				constructor() {
					super({
						id: C.ID,
						title: {
							value: "Toggle OpenAI key",
							original: "Toggle OpenAI key",
						},
						f1: !0,
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Digit0,
							weight: E.KeybindingWeight.ExternalExtension + 1,
						},
					});
				}
				run(m, ...r) {
					const u = m.get(w.$S6b);
					u.getApiKey().then((a) => {
						a ? u.setUseOpenAIKey(!u.getUseOpenAIKey()) : u.openPopup();
					});
				}
			}
			(e.$FZc = C), (0, i.$4X)(C);
		})
