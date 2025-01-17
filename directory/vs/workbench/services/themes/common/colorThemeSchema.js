import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/tokenClassificationRegistry.js';
define(
			de[1321],
			he([1, 0, 4, 30, 250, 51, 778]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yvc = e.$Xvc = e.$Wvc = void 0),
					(e.$Zvc = u),
					(t = mt(t));
				const d = [
					"comment",
					"comment.block",
					"comment.block.documentation",
					"comment.line",
					"constant",
					"constant.character",
					"constant.character.escape",
					"constant.numeric",
					"constant.numeric.integer",
					"constant.numeric.float",
					"constant.numeric.hex",
					"constant.numeric.octal",
					"constant.other",
					"constant.regexp",
					"constant.rgb-value",
					"emphasis",
					"entity",
					"entity.name",
					"entity.name.class",
					"entity.name.function",
					"entity.name.method",
					"entity.name.section",
					"entity.name.selector",
					"entity.name.tag",
					"entity.name.type",
					"entity.other",
					"entity.other.attribute-name",
					"entity.other.inherited-class",
					"invalid",
					"invalid.deprecated",
					"invalid.illegal",
					"keyword",
					"keyword.control",
					"keyword.operator",
					"keyword.operator.new",
					"keyword.operator.assignment",
					"keyword.operator.arithmetic",
					"keyword.operator.logical",
					"keyword.other",
					"markup",
					"markup.bold",
					"markup.changed",
					"markup.deleted",
					"markup.heading",
					"markup.inline.raw",
					"markup.inserted",
					"markup.italic",
					"markup.list",
					"markup.list.numbered",
					"markup.list.unnumbered",
					"markup.other",
					"markup.quote",
					"markup.raw",
					"markup.underline",
					"markup.underline.link",
					"meta",
					"meta.block",
					"meta.cast",
					"meta.class",
					"meta.function",
					"meta.function-call",
					"meta.preprocessor",
					"meta.return-type",
					"meta.selector",
					"meta.tag",
					"meta.type.annotation",
					"meta.type",
					"punctuation.definition.string.begin",
					"punctuation.definition.string.end",
					"punctuation.separator",
					"punctuation.separator.continuation",
					"punctuation.terminator",
					"storage",
					"storage.modifier",
					"storage.type",
					"string",
					"string.interpolated",
					"string.other",
					"string.quoted",
					"string.quoted.double",
					"string.quoted.other",
					"string.quoted.single",
					"string.quoted.triple",
					"string.regexp",
					"string.unquoted",
					"strong",
					"support",
					"support.class",
					"support.constant",
					"support.function",
					"support.other",
					"support.type",
					"support.type.property-name",
					"support.variable",
					"variable",
					"variable.language",
					"variable.name",
					"variable.other",
					"variable.other.readwrite",
					"variable.parameter",
				];
				(e.$Wvc = "vscode://schemas/textmate-colors"),
					(e.$Xvc = `${e.$Wvc}#/definitions/colorGroup`);
				const m = {
					type: "array",
					definitions: {
						colorGroup: {
							default: "#FF0000",
							anyOf: [
								{ type: "string", format: "color-hex" },
								{ $ref: "#/definitions/settings" },
							],
						},
						settings: {
							type: "object",
							description: t.localize(12743, null),
							properties: {
								foreground: {
									type: "string",
									description: t.localize(12744, null),
									format: "color-hex",
									default: "#ff0000",
								},
								background: {
									type: "string",
									deprecationMessage: t.localize(12745, null),
								},
								fontStyle: {
									type: "string",
									description: t.localize(12746, null),
									pattern:
										"^(\\s*\\b(italic|bold|underline|strikethrough))*\\s*$",
									patternErrorMessage: t.localize(12747, null),
									defaultSnippets: [
										{ label: t.localize(12748, null), bodyText: '""' },
										{ body: "italic" },
										{ body: "bold" },
										{ body: "underline" },
										{ body: "strikethrough" },
										{ body: "italic bold" },
										{ body: "italic underline" },
										{ body: "italic strikethrough" },
										{ body: "bold underline" },
										{ body: "bold strikethrough" },
										{ body: "underline strikethrough" },
										{ body: "italic bold underline" },
										{ body: "italic bold strikethrough" },
										{ body: "italic underline strikethrough" },
										{ body: "bold underline strikethrough" },
										{ body: "italic bold underline strikethrough" },
									],
								},
							},
							additionalProperties: !1,
							defaultSnippets: [
								{
									body: { foreground: "${1:#FF0000}", fontStyle: "${2:bold}" },
								},
							],
						},
					},
					items: {
						type: "object",
						defaultSnippets: [
							{
								body: {
									scope: "${1:keyword.operator}",
									settings: { foreground: "${2:#FF0000}" },
								},
							},
						],
						properties: {
							name: { type: "string", description: t.localize(12749, null) },
							scope: {
								description: t.localize(12750, null),
								anyOf: [
									{ enum: d },
									{ type: "string" },
									{ type: "array", items: { enum: d } },
									{ type: "array", items: { type: "string" } },
								],
							},
							settings: { $ref: "#/definitions/settings" },
						},
						required: ["settings"],
						additionalProperties: !1,
					},
				};
				e.$Yvc = "vscode://schemas/color-theme";
				const r = {
					type: "object",
					allowComments: !0,
					allowTrailingCommas: !0,
					properties: {
						colors: {
							description: t.localize(12751, null),
							$ref: E.$HP,
							additionalProperties: !1,
						},
						tokenColors: {
							anyOf: [
								{ type: "string", description: t.localize(12752, null) },
								{ description: t.localize(12753, null), $ref: e.$Wvc },
							],
						},
						semanticHighlighting: {
							type: "boolean",
							description: t.localize(12754, null),
						},
						semanticTokenColors: {
							type: "object",
							description: t.localize(12755, null),
							$ref: C.$omc,
						},
					},
				};
				function u() {
					const a = i.$Io.as(w.$Jo.JSONContribution);
					a.registerSchema(e.$Yvc, r), a.registerSchema(e.$Wvc, m);
				}
			},
		),
		