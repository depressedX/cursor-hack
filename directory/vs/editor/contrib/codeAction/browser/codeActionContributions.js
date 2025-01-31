import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorConfigurationSchema.js';
import './codeActionCommands.js';
import './codeActionController.js';
import './lightBulbWidget.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/registry/common/platform.js';
define(
			de[2908],
			he([1, 0, 46, 602, 2907, 500, 1685, 4, 81, 30]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*editorConfigurationSchema*/,
 w /*codeActionCommands*/,
 E /*codeActionController*/,
 C /*lightBulbWidget*/,
 d /*nls*/,
 m /*configurationRegistry*/,
 r /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(d = mt(d)),
					(0, t.$qtb)(
						E.$BBb.ID,
						E.$BBb,
						t.EditorContributionInstantiation.Eventually,
					),
					(0, t.$qtb)(
						C.$wBb.ID,
						C.$wBb,
						t.EditorContributionInstantiation.Lazy,
					),
					(0, t.$ntb)(w.$CBb),
					(0, t.$ntb)(w.$EBb),
					(0, t.$ntb)(w.$FBb),
					(0, t.$ntb)(w.$GBb),
					(0, t.$ntb)(w.$IBb),
					(0, t.$ntb)(w.$HBb),
					(0, t.$mtb)(new w.$DBb()),
					r.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...i.$DAb,
							properties: {
								"editor.codeActionWidget.showHeaders": {
									type: "boolean",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									description: d.localize(926, null),
									default: !0,
								},
							},
						}),
					r.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...i.$DAb,
							properties: {
								"editor.codeActionWidget.includeNearbyQuickFixes": {
									type: "boolean",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									description: d.localize(927, null),
									default: !0,
								},
							},
						}),
					r.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...i.$DAb,
							properties: {
								"editor.codeActions.triggerOnFocusChange": {
									type: "boolean",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: d.localize(
										928,
										null,
										"`#editor.codeActionsOnSave#`",
										"`#files.autoSave#`",
										"`afterDelay`",
										"`always`",
									),
									default: !1,
								},
							},
						});
			},
		)
