define(de[208], he([1, 0, 4, 5, 981]), function (ce, e, t, i, w) {
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
		define(
			de[3012],
			he([1, 0, 14, 4, 99, 11, 208]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$HIc = d);
				function d() {
					(0, E.$4X)(m);
				}
				class m extends E.$3X {
					static {
						this.ID = "workbench.action.chat.logInputHistory";
					}
					constructor() {
						super({
							id: m.ID,
							title: (0, i.localize2)(4593, "Log Chat Input History"),
							icon: t.$ak.attach,
							category: w.$ck.Developer,
							f1: !0,
						});
					}
					async run(u, ...a) {
						u.get(C.$GYb).lastFocusedWidget?.logInputHistory();
					}
				}
			},
		),
		