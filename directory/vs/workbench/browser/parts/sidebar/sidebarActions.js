import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../../css!vs/workbench/browser/parts/sidebar/media/sidebarpart.js';
define(
			de[1854],
			he([1, 0, 4, 11, 96, 27, 43, 99, 142, 60, 1140]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*layoutService*/,
 E /*keyCodes*/,
 C /*keybindingsRegistry*/,
 d /*actionCommonCategories*/,
 m /*panecomposite*/,
 r /*views*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ruc = void 0);
				class u extends i.$3X {
					constructor() {
						super({
							id: "workbench.action.focusSideBar",
							title: (0, t.localize2)(3685, "Focus into Primary Side Bar"),
							category: d.$ck.View,
							f1: !0,
							keybinding: {
								weight: C.KeybindingWeight.WorkbenchContrib,
								when: null,
								primary: E.KeyMod.CtrlCmd | E.KeyCode.Digit0,
							},
						});
					}
					async run(h) {
						const c = h.get(w.$mEb),
							n = h.get(m.$6Sb);
						c.isVisible(w.Parts.SIDEBAR_PART) ||
							c.setPartHidden(!1, w.Parts.SIDEBAR_PART),
							n
								.getActivePaneComposite(r.ViewContainerLocation.Sidebar)
								?.focus();
					}
				}
				(e.$Ruc = u), (0, i.$4X)(u);
			},
		)
