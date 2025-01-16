define(de[1877], he([1, 0, 4, 175, 701]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jyc = void 0),
				(t = mt(t)),
				(e.$Jyc = i.$n2.registerExtensionPoint({
					extensionPoint: "grammars",
					deps: [w.$qYb],
					jsonSchema: {
						description: t.localize(12689, null),
						type: "array",
						defaultSnippets: [
							{
								body: [
									{
										language: "${1:id}",
										scopeName: "source.${2:id}",
										path: "./syntaxes/${3:id}.tmLanguage.",
									},
								],
							},
						],
						items: {
							type: "object",
							defaultSnippets: [
								{
									body: {
										language: "${1:id}",
										scopeName: "source.${2:id}",
										path: "./syntaxes/${3:id}.tmLanguage.",
									},
								},
							],
							properties: {
								language: {
									description: t.localize(12690, null),
									type: "string",
								},
								scopeName: {
									description: t.localize(12691, null),
									type: "string",
								},
								path: { description: t.localize(12692, null), type: "string" },
								embeddedLanguages: {
									description: t.localize(12693, null),
									type: "object",
								},
								tokenTypes: {
									description: t.localize(12694, null),
									type: "object",
									additionalProperties: {
										enum: ["string", "comment", "other"],
									},
								},
								injectTo: {
									description: t.localize(12695, null),
									type: "array",
									items: { type: "string" },
								},
								balancedBracketScopes: {
									description: t.localize(12696, null),
									type: "array",
									items: { type: "string" },
									default: ["*"],
								},
								unbalancedBracketScopes: {
									description: t.localize(12697, null),
									type: "array",
									items: { type: "string" },
									default: [],
								},
							},
							required: ["scopeName", "path"],
						},
					},
				}));
		}),
		