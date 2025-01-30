import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/keyCodes.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/contextkey/common/contextkeys.js';
define(
			de[3135],
			he([1, 0, 11, 27, 4, 43, 179]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*keyCodes*/,
 w /*nls*/,
 E /*keybindingsRegistry*/,
 C /*contextkeys*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends t.$3X {
					static {
						this.ID = "workbench.action.semanticSearch";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								value: (0, w.localize)(9418, null),
								original: "Semantic Search",
							},
							f1: !0,
							keybinding: [
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.Alt | i.KeyCode.KeyF,
								},
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyG,
									when: C.$4Lb,
								},
							],
						});
					}
					async run(u) {
						try {
						} catch (a) {
							console.error(a);
						}
					}
				}
				class m extends t.$3X {
					static {
						this.ID = "workbench.action.globalSemanticSearch";
					}
					constructor() {
						super({
							id: m.ID,
							title: {
								value: (0, w.localize)(9419, null),
								original: "Global Semantic Search",
							},
							f1: !0,
							keybinding: [
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.KeyF,
								},
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyG,
									when: C.$4Lb,
								},
							],
						});
					}
					async run(u) {
						try {
						} catch (a) {
							console.error(a);
						}
					}
				}
			},
		),
		