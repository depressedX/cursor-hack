import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorConfigurationSchema.js';
import '../../../common/editorFeatures.js';
import './defaultProviders.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/registry/common/platform.js';
import './dropIntoEditorController.js';
define(
			de[2919],
			he([1, 0, 27, 46, 602, 588, 1213, 4, 81, 43, 30, 962]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*editorExtensions*/,
 w /*editorConfigurationSchema*/,
 E /*editorFeatures*/,
 C /*defaultProviders*/,
 d /*nls*/,
 m /*configurationRegistry*/,
 r /*keybindingsRegistry*/,
 u /*platform*/,
 a /*dropIntoEditorController*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(d = mt(d)),
					(0, i.$qtb)(
						a.$g3b.ID,
						a.$g3b,
						i.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, E.$SBb)(C.$wzb),
					(0, i.$mtb)(
						new (class extends i.$htb {
							constructor() {
								super({
									id: a.$e3b,
									precondition: a.$f3b,
									kbOpts: {
										weight: r.KeybindingWeight.EditorContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Period,
									},
								});
							}
							runEditorCommand(h, c, n) {
								a.$g3b.get(c)?.changeDropType();
							}
						})(),
					),
					(0, i.$mtb)(
						new (class extends i.$htb {
							constructor() {
								super({
									id: "editor.hideDropWidget",
									precondition: a.$f3b,
									kbOpts: {
										weight: r.KeybindingWeight.EditorContrib,
										primary: t.KeyCode.Escape,
									},
								});
							}
							runEditorCommand(h, c, n) {
								a.$g3b.get(c)?.clearWidgets();
							}
						})(),
					),
					u.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...w.$DAb,
							properties: {
								[a.$d3b]: {
									type: "object",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									description: d.localize(997, null),
									default: {},
									additionalProperties: { type: "string" },
								},
							},
						});
			},
		)
