import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/codicons.js';
import '../../../../../nls.js';
import '../../../../../platform/action/common/actionCommonCategories.js';
import '../../../../../platform/actions/common/actions.js';
import '../chat.js';
define(
			de[3012],
			he([1, 0, 14, 4, 99, 11, 208]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*nls*/,
 w /*actionCommonCategories*/,
 E /*actions*/,
 C /*chat*/) {
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
		