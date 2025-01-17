import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/extensions/common/extensionsRegistry.js';
import '../../../../nls.js';
import '../../../services/configuration/common/configuration.js';
import '../../../services/configurationResolver/common/configurationResolverSchema.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/extensionManagement/common/extensionFeatures.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/registry/common/platform.js';
define(
			de[1812],
			he([1, 0, 175, 4, 261, 1795, 3, 244, 102, 30]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SQc = e.$RQc = e.$QQc = e.$PQc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(e.$PQc = t.$n2.registerExtensionPoint({
						extensionPoint: "debuggers",
						defaultExtensionKind: ["workspace"],
						jsonSchema: {
							description: i.localize(5857, null),
							type: "array",
							defaultSnippets: [{ body: [{ type: "" }] }],
							items: {
								additionalProperties: !1,
								type: "object",
								defaultSnippets: [
									{ body: { type: "", program: "", runtime: "" } },
								],
								properties: {
									type: { description: i.localize(5858, null), type: "string" },
									label: {
										description: i.localize(5859, null),
										type: "string",
									},
									program: {
										description: i.localize(5860, null),
										type: "string",
									},
									args: { description: i.localize(5861, null), type: "array" },
									runtime: {
										description: i.localize(5862, null),
										type: "string",
									},
									runtimeArgs: {
										description: i.localize(5863, null),
										type: "array",
									},
									variables: {
										description: i.localize(5864, null),
										type: "object",
									},
									initialConfigurations: {
										description: i.localize(5865, null),
										type: ["array", "string"],
									},
									languages: {
										description: i.localize(5866, null),
										type: "array",
									},
									configurationSnippets: {
										description: i.localize(5867, null),
										type: "array",
									},
									configurationAttributes: {
										description: i.localize(5868, null),
										type: "object",
									},
									when: {
										description: i.localize(5869, null),
										type: "string",
										default: "",
									},
									hiddenWhen: {
										description: i.localize(5870, null),
										type: "string",
										default: "",
									},
									deprecated: {
										description: i.localize(5871, null),
										type: "string",
										default: "",
									},
									windows: {
										description: i.localize(5872, null),
										type: "object",
										properties: {
											runtime: {
												description: i.localize(5873, null),
												type: "string",
											},
										},
									},
									osx: {
										description: i.localize(5874, null),
										type: "object",
										properties: {
											runtime: {
												description: i.localize(5875, null),
												type: "string",
											},
										},
									},
									linux: {
										description: i.localize(5876, null),
										type: "object",
										properties: {
											runtime: {
												description: i.localize(5877, null),
												type: "string",
											},
										},
									},
									strings: {
										description: i.localize(5878, null),
										type: "object",
										properties: {
											unverifiedBreakpoints: {
												description: i.localize(5879, null),
												type: "string",
											},
										},
									},
								},
							},
						},
					})),
					(e.$QQc = t.$n2.registerExtensionPoint({
						extensionPoint: "breakpoints",
						jsonSchema: {
							description: i.localize(5880, null),
							type: "array",
							defaultSnippets: [{ body: [{ language: "" }] }],
							items: {
								type: "object",
								additionalProperties: !1,
								defaultSnippets: [{ body: { language: "" } }],
								properties: {
									language: {
										description: i.localize(5881, null),
										type: "string",
									},
									when: {
										description: i.localize(5882, null),
										type: "string",
										default: "",
									},
								},
							},
						},
					})),
					(e.$RQc = {
						type: "object",
						description: i.localize(5883, null),
						properties: {
							hidden: {
								type: "boolean",
								default: !1,
								description: i.localize(5884, null),
							},
							group: {
								type: "string",
								default: "",
								description: i.localize(5885, null),
							},
							order: {
								type: "number",
								default: 1,
								description: i.localize(5886, null),
							},
						},
						default: { hidden: !1, group: "", order: 1 },
					});
				const u = { name: "Compound", configurations: [] };
				e.$SQc = {
					id: w.$EZ,
					type: "object",
					title: i.localize(5887, null),
					allowTrailingCommas: !0,
					allowComments: !0,
					required: [],
					default: { version: "0.2.0", configurations: [], compounds: [] },
					properties: {
						version: {
							type: "string",
							description: i.localize(5888, null),
							default: "0.2.0",
						},
						configurations: {
							type: "array",
							description: i.localize(5889, null),
							items: { defaultSnippets: [], type: "object", oneOf: [] },
						},
						compounds: {
							type: "array",
							description: i.localize(5890, null),
							items: {
								type: "object",
								required: ["name", "configurations"],
								properties: {
									name: { type: "string", description: i.localize(5891, null) },
									presentation: e.$RQc,
									configurations: {
										type: "array",
										default: [],
										items: {
											oneOf: [
												{ enum: [], description: i.localize(5892, null) },
												{
													type: "object",
													required: ["name"],
													properties: {
														name: {
															enum: [],
															description: i.localize(5893, null),
														},
														folder: {
															enum: [],
															description: i.localize(5894, null),
														},
													},
												},
											],
										},
										description: i.localize(5895, null),
									},
									stopAll: {
										type: "boolean",
										default: !1,
										description: i.localize(5896, null),
									},
									preLaunchTask: {
										type: "string",
										default: "",
										description: i.localize(5897, null),
									},
								},
								default: u,
							},
							default: [u],
						},
						inputs: E.$OQc.definitions.inputs,
					},
				};
				class a extends C.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(c) {
						return !!c.contributes?.debuggers;
					}
					render(c) {
						const n = c.contributes?.debuggers || [];
						if (!n.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const g = [i.localize(5898, null), i.localize(5899, null)],
							p = n.map((o) => [o.label ?? "", o.type]);
						return { data: { headers: g, rows: p }, dispose: () => {} };
					}
				}
				r.$Io
					.as(d.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "debuggers",
						label: i.localize(5900, null),
						access: { canToggle: !1 },
						renderer: new m.$Ji(a),
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	