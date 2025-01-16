define(
			de[602],
			he([1, 0, 1525, 38, 910, 4, 81, 30]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DAb = void 0),
					(e.$EAb = h),
					(e.$FAb = c),
					(E = mt(E)),
					(e.$DAb = Object.freeze({
						id: "editor",
						order: 5,
						type: "object",
						title: E.localize(252, null),
						scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
					}));
				const m = {
					...e.$DAb,
					properties: {
						"editor.tabSize": {
							type: "number",
							default: w.$RK.tabSize,
							minimum: 1,
							markdownDescription: E.localize(
								253,
								null,
								"`#editor.detectIndentation#`",
							),
						},
						"editor.indentSize": {
							anyOf: [
								{ type: "string", enum: ["tabSize"] },
								{ type: "number", minimum: 1 },
							],
							default: "tabSize",
							markdownDescription: E.localize(254, null),
						},
						"editor.insertSpaces": {
							type: "boolean",
							default: w.$RK.insertSpaces,
							markdownDescription: E.localize(
								255,
								null,
								"`#editor.detectIndentation#`",
							),
						},
						"editor.detectIndentation": {
							type: "boolean",
							default: w.$RK.detectIndentation,
							markdownDescription: E.localize(
								256,
								null,
								"`#editor.tabSize#`",
								"`#editor.insertSpaces#`",
							),
						},
						"editor.trimAutoWhitespace": {
							type: "boolean",
							default: w.$RK.trimAutoWhitespace,
							description: E.localize(257, null),
						},
						"editor.largeFileOptimizations": {
							type: "boolean",
							default: w.$RK.largeFileOptimizations,
							description: E.localize(258, null),
						},
						"editor.wordBasedSuggestions": {
							enum: [
								"off",
								"currentDocument",
								"matchingDocuments",
								"allDocuments",
							],
							default: "matchingDocuments",
							enumDescriptions: [
								E.localize(259, null),
								E.localize(260, null),
								E.localize(261, null),
								E.localize(262, null),
							],
							description: E.localize(263, null),
						},
						"editor.semanticHighlighting.enabled": {
							enum: [!0, !1, "configuredByTheme"],
							enumDescriptions: [
								E.localize(264, null),
								E.localize(265, null),
								E.localize(266, null),
							],
							default: "configuredByTheme",
							description: E.localize(267, null),
						},
						"editor.stablePeek": {
							type: "boolean",
							default: !1,
							markdownDescription: E.localize(268, null),
						},
						"editor.maxTokenizationLineLength": {
							type: "integer",
							default: 2e4,
							description: E.localize(269, null),
						},
						"editor.experimental.asyncTokenization": {
							type: "boolean",
							default: !0,
							description: E.localize(270, null),
							tags: ["experimental"],
						},
						"editor.experimental.asyncTokenizationLogging": {
							type: "boolean",
							default: !1,
							description: E.localize(271, null),
						},
						"editor.experimental.asyncTokenizationVerification": {
							type: "boolean",
							default: !1,
							description: E.localize(272, null),
							tags: ["experimental"],
						},
						"editor.experimental.treeSitterTelemetry": {
							type: "boolean",
							default: !1,
							markdownDescription: E.localize(273, null),
							tags: ["experimental"],
						},
						"editor.language.brackets": {
							type: ["array", "null"],
							default: null,
							description: E.localize(274, null),
							items: {
								type: "array",
								items: [
									{ type: "string", description: E.localize(275, null) },
									{ type: "string", description: E.localize(276, null) },
								],
							},
						},
						"editor.language.colorizedBracketPairs": {
							type: ["array", "null"],
							default: null,
							description: E.localize(277, null),
							items: {
								type: "array",
								items: [
									{ type: "string", description: E.localize(278, null) },
									{ type: "string", description: E.localize(279, null) },
								],
							},
						},
						"diffEditor.maxComputationTime": {
							type: "number",
							default: t.$5xb.maxComputationTime,
							description: E.localize(280, null),
						},
						"diffEditor.maxFileSize": {
							type: "number",
							default: t.$5xb.maxFileSize,
							description: E.localize(281, null),
						},
						"diffEditor.renderSideBySide": {
							type: "boolean",
							default: t.$5xb.renderSideBySide,
							description: E.localize(282, null),
						},
						"diffEditor.renderSideBySideInlineBreakpoint": {
							type: "number",
							default: t.$5xb.renderSideBySideInlineBreakpoint,
							description: E.localize(283, null),
						},
						"diffEditor.useInlineViewWhenSpaceIsLimited": {
							type: "boolean",
							default: t.$5xb.useInlineViewWhenSpaceIsLimited,
							description: E.localize(284, null),
						},
						"diffEditor.renderMarginRevertIcon": {
							type: "boolean",
							default: t.$5xb.renderMarginRevertIcon,
							description: E.localize(285, null),
						},
						"diffEditor.renderGutterMenu": {
							type: "boolean",
							default: t.$5xb.renderGutterMenu,
							description: E.localize(286, null),
						},
						"diffEditor.ignoreTrimWhitespace": {
							type: "boolean",
							default: t.$5xb.ignoreTrimWhitespace,
							description: E.localize(287, null),
						},
						"diffEditor.renderIndicators": {
							type: "boolean",
							default: t.$5xb.renderIndicators,
							description: E.localize(288, null),
						},
						"diffEditor.codeLens": {
							type: "boolean",
							default: t.$5xb.diffCodeLens,
							description: E.localize(289, null),
						},
						"diffEditor.wordWrap": {
							type: "string",
							enum: ["off", "on", "inherit"],
							default: t.$5xb.diffWordWrap,
							markdownEnumDescriptions: [
								E.localize(290, null),
								E.localize(291, null),
								E.localize(292, null, "`#editor.wordWrap#`"),
							],
						},
						"diffEditor.diffAlgorithm": {
							type: "string",
							enum: ["legacy", "advanced"],
							default: t.$5xb.diffAlgorithm,
							markdownEnumDescriptions: [
								E.localize(293, null),
								E.localize(294, null),
							],
							tags: ["experimental"],
						},
						"diffEditor.hideUnchangedRegions.enabled": {
							type: "boolean",
							default: t.$5xb.hideUnchangedRegions.enabled,
							markdownDescription: E.localize(295, null),
						},
						"diffEditor.hideUnchangedRegions.revealLineCount": {
							type: "integer",
							default: t.$5xb.hideUnchangedRegions.revealLineCount,
							markdownDescription: E.localize(296, null),
							minimum: 1,
						},
						"diffEditor.hideUnchangedRegions.minimumLineCount": {
							type: "integer",
							default: t.$5xb.hideUnchangedRegions.minimumLineCount,
							markdownDescription: E.localize(297, null),
							minimum: 1,
						},
						"diffEditor.hideUnchangedRegions.contextLineCount": {
							type: "integer",
							default: t.$5xb.hideUnchangedRegions.contextLineCount,
							markdownDescription: E.localize(298, null),
							minimum: 1,
						},
						"diffEditor.experimental.showMoves": {
							type: "boolean",
							default: t.$5xb.experimental.showMoves,
							markdownDescription: E.localize(299, null),
						},
						"diffEditor.experimental.showEmptyDecorations": {
							type: "boolean",
							default: t.$5xb.experimental.showEmptyDecorations,
							description: E.localize(300, null),
						},
						"diffEditor.experimental.useTrueInlineView": {
							type: "boolean",
							default: t.$5xb.experimental.useTrueInlineView,
							description: E.localize(301, null),
						},
					},
				};
				function r(g) {
					return typeof g.type < "u" || typeof g.anyOf < "u";
				}
				for (const g of i.editorOptionsRegistry) {
					const p = g.schema;
					if (typeof p < "u")
						if (r(p)) m.properties[`editor.${g.name}`] = p;
						else
							for (const o in p)
								Object.hasOwnProperty.call(p, o) && (m.properties[o] = p[o]);
				}
				let u = null;
				function a() {
					return (
						u === null &&
							((u = Object.create(null)),
							Object.keys(m.properties).forEach((g) => {
								u[g] = !0;
							})),
						u
					);
				}
				function h(g) {
					return a()[`editor.${g}`] || !1;
				}
				function c(g) {
					return a()[`diffEditor.${g}`] || !1;
				}
				d.$Io.as(C.$No.Configuration).registerConfiguration(m);
			},
		),
		