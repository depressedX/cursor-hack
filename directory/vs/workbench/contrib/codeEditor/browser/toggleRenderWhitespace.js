import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/action/common/actionCommonCategories.js';
define(
			de[3024],
			he([1, 0, 4, 11, 10, 8, 99]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*configuration*/,
 E /*contextkey*/,
 C /*actionCommonCategories*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends i.$3X {
					static {
						this.ID = "editor.action.toggleRenderWhitespace";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								...(0, t.localize2)(4914, "Toggle Render Whitespace"),
								mnemonicTitle: (0, t.localize)(4913, null),
							},
							category: C.$ck.View,
							f1: !0,
							toggled: E.$Kj.notEquals(
								"config.editor.renderWhitespace",
								"none",
							),
							menu: {
								id: i.$XX.MenubarAppearanceMenu,
								group: "4_editor",
								order: 4,
							},
						});
					}
					run(r) {
						const u = r.get(w.$gj),
							a = u.getValue("editor.renderWhitespace");
						let h;
						return (
							a === "none" ? (h = "all") : (h = "none"),
							u.updateValue("editor.renderWhitespace", h)
						);
					}
				}
				(0, i.$4X)(d);
			},
		)
