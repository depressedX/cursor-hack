import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../common/chatParticipantContribTypes.js';
define(de[208], he([1, 0, 4, 5, 981]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*instantiation*/,
 w /*chatParticipantContribTypes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$MYb = e.$LYb = e.$KYb = e.$JYb = e.$IYb = e.$GYb = void 0),
				(e.$HYb = E),
				(e.$GYb = (0, i.$Mi)("chatWidgetService"));
			async function E(C) {
				return (await C.openView(e.$MYb))?.widget;
			}
			(e.$IYb = (0, i.$Mi)("quickChatService")),
				(e.$JYb = (0, i.$Mi)("chatAccessibilityService")),
				(e.$KYb = (0, i.$Mi)("chatCodeBlockContextProviderService")),
				(e.$LYb = (0, t.localize)(4635, null)),
				(e.$MYb = `workbench.panel.chat.view.${w.$b3}`);
		}),
		