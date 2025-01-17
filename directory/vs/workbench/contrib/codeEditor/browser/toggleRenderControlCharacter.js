import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/action/common/actionCommonCategories.js';
define(
			de[3023],
			he([1, 0, 4, 11, 10, 8, 99]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZXc = void 0);
				class d extends i.$3X {
					static {
						this.ID = "editor.action.toggleRenderControlCharacter";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								...(0, t.localize2)(4912, "Toggle Control Characters"),
								mnemonicTitle: (0, t.localize)(4911, null),
							},
							category: C.$ck.View,
							f1: !0,
							toggled: E.$Kj.equals(
								"config.editor.renderControlCharacters",
								!0,
							),
							menu: {
								id: i.$XX.MenubarAppearanceMenu,
								group: "4_editor",
								order: 5,
							},
						});
					}
					run(r) {
						const u = r.get(w.$gj),
							a = !u.getValue("editor.renderControlCharacters");
						return u.updateValue("editor.renderControlCharacters", a);
					}
				}
				(e.$ZXc = d), (0, i.$4X)(d);
			},
		),
		