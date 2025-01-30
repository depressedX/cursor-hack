import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import './commands/configureSnippets.js';
import './commands/fileTemplateSnippets.js';
import './commands/insertSnippet.js';
import './commands/surroundWithSnippet.js';
import './snippetCodeActionProvider.js';
import './snippets.js';
import './snippetsService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../editor/common/config/editorConfigurationSchema.js';
import './tabCompletion.js';
define(
			de[3774],
			he([
				1, 0, 4, 11, 31, 20, 250, 30, 55, 3760, 1289, 3137, 1754, 3268, 510,
				1898, 52, 81, 602, 714,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*commands*/,
 E /*extensions*/,
 C /*jsonContributionRegistry*/,
 d /*platform*/,
 m /*contributions*/,
 r /*configureSnippets*/,
 u /*fileTemplateSnippets*/,
 a /*insertSnippet*/,
 h /*surroundWithSnippet*/,
 c /*snippetCodeActionProvider*/,
 n /*snippets*/,
 g /*snippetsService*/,
 p /*lifecycle*/,
 o /*configurationRegistry*/,
 f /*editorConfigurationSchema*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(C = mt(C)),
					(0, E.$lK)(n.$gYb, g.$uYb, E.InstantiationType.Delayed),
					(0, i.$4X)(a.$4Xc),
					w.$fk.registerCommandAlias(
						"editor.action.showSnippets",
						"editor.action.insertSnippet",
					),
					(0, i.$4X)(h.$6Xc),
					(0, i.$4X)(u.$HFc),
					(0, i.$4X)(r.$2Xc),
					d.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(c.$7Xc, p.LifecyclePhase.Restored),
					d.$Io
						.as(o.$No.Configuration)
						.registerConfiguration({
							...f.$DAb,
							properties: {
								"editor.snippets.codeActions.enabled": {
									description: t.localize(9466, null),
									type: "boolean",
									default: !0,
								},
							},
						});
				const s = "vscode://schemas/snippets",
					l = {
						prefix: {
							description: t.localize(9467, null),
							type: ["string", "array"],
						},
						isFileTemplate: {
							description: t.localize(9468, null),
							type: "boolean",
						},
						body: {
							markdownDescription: t.localize(9469, null),
							type: ["string", "array"],
							items: { type: "string" },
						},
						description: {
							description: t.localize(9470, null),
							type: ["string", "array"],
						},
					},
					y = {
						id: s,
						allowComments: !0,
						allowTrailingCommas: !0,
						defaultSnippets: [
							{
								label: t.localize(9471, null),
								body: {
									"${1:snippetName}": {
										prefix: "${2:prefix}",
										body: "${3:snippet}",
										description: "${4:description}",
									},
								},
							},
						],
						type: "object",
						description: t.localize(9472, null),
						additionalProperties: {
							type: "object",
							required: ["body"],
							properties: l,
							additionalProperties: !1,
						},
					},
					$ = "vscode://schemas/global-snippets",
					v = {
						id: $,
						allowComments: !0,
						allowTrailingCommas: !0,
						defaultSnippets: [
							{
								label: t.localize(9473, null),
								body: {
									"${1:snippetName}": {
										scope: "${2:scope}",
										prefix: "${3:prefix}",
										body: "${4:snippet}",
										description: "${5:description}",
									},
								},
							},
						],
						type: "object",
						description: t.localize(9474, null),
						additionalProperties: {
							type: "object",
							required: ["body"],
							properties: {
								...l,
								scope: { description: t.localize(9475, null), type: "string" },
							},
							additionalProperties: !1,
						},
					},
					S = d.$Io.as(C.$Jo.JSONContribution);
				S.registerSchema(s, y), S.registerSchema($, v);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	