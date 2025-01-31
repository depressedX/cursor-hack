import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../nls.js';
import '../../../services/ai/browser/aiContextService.js';
define(
			de[3959],
			he([1, 0, 46, 71, 11, 8, 43, 4, 1347]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*editorContextKeys*/,
 w /*actions*/,
 E /*contextkey*/,
 C /*keybindingsRegistry*/,
 d /*nls*/,
 m /*aiContextService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (d = mt(d));
				class r extends t.$ktb {
					runEditorCommand(h, c, ...n) {
						const g = h.get(m.$Y9b);
					}
				}
				class u extends r {
					static {
						this.ID = "editor.action.aiContextualize";
					}
					constructor() {
						super({
							id: u.ID,
							title: {
								value: d.localize(4430, null),
								original: "Go to AI Contextualize",
							},
							precondition: E.$Kj.and(
								i.EditorContextKeys.hasTypeDefinitionProvider,
							),
							keybinding: {
								when: i.EditorContextKeys.editorTextFocus,
								primary: 0,
								weight: C.KeybindingWeight.EditorContrib,
							},
							menu: [
								{ id: w.$XX.EditorContext, group: "navigation", order: 1.5 },
								{
									id: w.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 3.5,
								},
							],
						});
					}
				}
			},
		)
