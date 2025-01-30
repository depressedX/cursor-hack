import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
define(de[1322], he([1, 0, 4, 30, 250, 79]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*platform*/,
 w /*jsonContributionRegistry*/,
 E /*iconRegistry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bwc = e.$awc = e.$_vc = e.$$vc = e.$0vc = void 0),
				(e.$cwc = m),
				(t = mt(t)),
				(e.$0vc = "^([\\w_-]+)$"),
				(e.$$vc = "^(normal|italic|(oblique[ \\w\\s-]+))$"),
				(e.$_vc = "^(normal|bold|lighter|bolder|(\\d{0-1000}))$"),
				(e.$awc = "^([\\w .%_-]+)$"),
				(e.$bwc = "^woff|woff2|truetype|opentype|embedded-opentype|svg$");
			const C = "vscode://schemas/product-icon-theme",
				d = {
					type: "object",
					allowComments: !0,
					allowTrailingCommas: !0,
					properties: {
						fonts: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: t.localize(12808, null),
										pattern: e.$0vc,
										patternErrorMessage: t.localize(12809, null),
									},
									src: {
										type: "array",
										description: t.localize(12810, null),
										items: {
											type: "object",
											properties: {
												path: {
													type: "string",
													description: t.localize(12811, null),
												},
												format: {
													type: "string",
													description: t.localize(12812, null),
													enum: [
														"woff",
														"woff2",
														"truetype",
														"opentype",
														"embedded-opentype",
														"svg",
													],
												},
											},
											required: ["path", "format"],
										},
									},
									weight: {
										type: "string",
										description: t.localize(12813, null),
										anyOf: [
											{ enum: ["normal", "bold", "lighter", "bolder"] },
											{ type: "string", pattern: e.$_vc },
										],
									},
									style: {
										type: "string",
										description: t.localize(12814, null),
										anyOf: [
											{ enum: ["normal", "italic", "oblique"] },
											{ type: "string", pattern: e.$$vc },
										],
									},
								},
								required: ["id", "src"],
							},
						},
						iconDefinitions: {
							description: t.localize(12815, null),
							$ref: E.$aP,
						},
					},
				};
			function m() {
				i.$Io.as(w.$Jo.JSONContribution).registerSchema(C, d);
			}
		}),
		