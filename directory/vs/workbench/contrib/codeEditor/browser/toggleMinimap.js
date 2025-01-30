import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/action/common/actionCommonCategories.js';
define(
			de[3022],
			he([1, 0, 4, 11, 10, 8, 99]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*configuration*/,
 E /*contextkey*/,
 C /*actionCommonCategories*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XXc = void 0);
				class d extends i.$3X {
					static {
						this.ID = "editor.action.toggleMinimap";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								...(0, t.localize2)(4906, "Toggle Minimap"),
								mnemonicTitle: (0, t.localize)(4905, null),
							},
							category: C.$ck.View,
							f1: !0,
							toggled: E.$Kj.equals("config.editor.minimap.enabled", !0),
							menu: {
								id: i.$XX.MenubarAppearanceMenu,
								group: "4_editor",
								order: 1,
							},
						});
					}
					async run(r) {
						const u = r.get(w.$gj),
							a = !u.getValue("editor.minimap.enabled");
						return u.updateValue("editor.minimap.enabled", a);
					}
				}
				(e.$XXc = d), (0, i.$4X)(d);
			},
		),
		