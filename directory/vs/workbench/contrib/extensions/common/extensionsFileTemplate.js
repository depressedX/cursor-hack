import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
define(de[1731], he([1, 0, 4, 119]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*extensionManagement*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8Qb = e.$7Qb = e.$6Qb = void 0),
				(e.$6Qb = "vscode://schemas/extensions"),
				(e.$7Qb = {
					id: e.$6Qb,
					allowComments: !0,
					allowTrailingCommas: !0,
					type: "object",
					title: (0, t.localize)(6585, null),
					additionalProperties: !1,
					properties: {
						recommendations: {
							type: "array",
							description: (0, t.localize)(6586, null),
							items: {
								type: "string",
								pattern: i.$rp,
								errorMessage: (0, t.localize)(6587, null),
							},
						},
						unwantedRecommendations: {
							type: "array",
							description: (0, t.localize)(6588, null),
							items: {
								type: "string",
								pattern: i.$rp,
								errorMessage: (0, t.localize)(6589, null),
							},
						},
					},
				}),
				(e.$8Qb = [
					"{",
					"	// See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.",
					"	// Extension identifier format: ${publisher}.${name}. Example: vscode.csharp",
					"",
					"	// List of extensions which should be recommended for users of this workspace.",
					'	"recommendations": [',
					"		",
					"	],",
					"	// List of extensions recommended by VS Code that should not be recommended for users of this workspace.",
					'	"unwantedRecommendations": [',
					"		",
					"	]",
					"}",
				].join(`
`));
		}),
		