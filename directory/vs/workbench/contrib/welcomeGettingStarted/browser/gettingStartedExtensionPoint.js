import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/extensions/common/extensionsRegistry.js';
define(de[3333], he([1, 0, 4, 175]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wXc = void 0);
			const w = (0, t.localize)(11438, null);
			e.$wXc = i.$n2.registerExtensionPoint({
				extensionPoint: "walkthroughs",
				jsonSchema: {
					description: (0, t.localize)(11439, null),
					type: "array",
					items: {
						type: "object",
						required: ["id", "title", "description", "steps"],
						defaultSnippets: [
							{ body: { id: "$1", title: "$2", description: "$3", steps: [] } },
						],
						properties: {
							id: { type: "string", description: (0, t.localize)(11440, null) },
							title: {
								type: "string",
								description: (0, t.localize)(11441, null),
							},
							icon: {
								type: "string",
								description: (0, t.localize)(11442, null),
							},
							description: {
								type: "string",
								description: (0, t.localize)(11443, null),
							},
							featuredFor: {
								type: "array",
								description: (0, t.localize)(11444, null),
								items: { type: "string" },
							},
							when: {
								type: "string",
								description: (0, t.localize)(11445, null),
							},
							steps: {
								type: "array",
								description: (0, t.localize)(11446, null),
								items: {
									type: "object",
									required: ["id", "title", "media"],
									defaultSnippets: [
										{
											body: {
												id: "$1",
												title: "$2",
												description: "$3",
												completionEvents: ["$5"],
												media: {},
											},
										},
									],
									properties: {
										id: {
											type: "string",
											description: (0, t.localize)(11447, null),
										},
										title: {
											type: "string",
											description: (0, t.localize)(11448, null),
										},
										description: {
											type: "string",
											description: (0, t.localize)(
												11449,
												null,
												`[${w}](command:myext.command)`,
												`[${w}](command:toSide:myext.command)`,
												`[${w}](https://aka.ms)`,
											),
										},
										button: {
											deprecationMessage: (0, t.localize)(
												11450,
												null,
												`[${w}](command:myext.command)`,
												`[${w}](command:toSide:myext.command)`,
												`[${w}](https://aka.ms)`,
											),
										},
										media: {
											type: "object",
											description: (0, t.localize)(11451, null),
											oneOf: [
												{
													required: ["image", "altText"],
													additionalProperties: !1,
													properties: {
														path: {
															deprecationMessage: (0, t.localize)(11452, null),
														},
														image: {
															description: (0, t.localize)(11453, null),
															oneOf: [
																{ type: "string" },
																{
																	type: "object",
																	required: ["dark", "light", "hc", "hcLight"],
																	properties: {
																		dark: {
																			description: (0, t.localize)(11454, null),
																			type: "string",
																		},
																		light: {
																			description: (0, t.localize)(11455, null),
																			type: "string",
																		},
																		hc: {
																			description: (0, t.localize)(11456, null),
																			type: "string",
																		},
																		hcLight: {
																			description: (0, t.localize)(11457, null),
																			type: "string",
																		},
																	},
																},
															],
														},
														altText: {
															type: "string",
															description: (0, t.localize)(11458, null),
														},
													},
												},
												{
													required: ["svg", "altText"],
													additionalProperties: !1,
													properties: {
														svg: {
															description: (0, t.localize)(11459, null),
															type: "string",
														},
														altText: {
															type: "string",
															description: (0, t.localize)(11460, null),
														},
													},
												},
												{
													required: ["markdown"],
													additionalProperties: !1,
													properties: {
														path: {
															deprecationMessage: (0, t.localize)(11461, null),
														},
														markdown: {
															description: (0, t.localize)(11462, null),
															type: "string",
														},
													},
												},
											],
										},
										completionEvents: {
											description: (0, t.localize)(11463, null),
											type: "array",
											items: {
												type: "string",
												defaultSnippets: [
													{
														label: "onCommand",
														description: (0, t.localize)(11464, null),
														body: "onCommand:${1:commandId}",
													},
													{
														label: "onLink",
														description: (0, t.localize)(11465, null),
														body: "onLink:${2:linkId}",
													},
													{
														label: "onView",
														description: (0, t.localize)(11466, null),
														body: "onView:${2:viewId}",
													},
													{
														label: "onSettingChanged",
														description: (0, t.localize)(11467, null),
														body: "onSettingChanged:${2:settingName}",
													},
													{
														label: "onContext",
														description: (0, t.localize)(11468, null),
														body: "onContext:${2:key}",
													},
													{
														label: "onExtensionInstalled",
														description: (0, t.localize)(11469, null),
														body: "onExtensionInstalled:${3:extensionId}",
													},
													{
														label: "onStepSelected",
														description: (0, t.localize)(11470, null),
														body: "onStepSelected",
													},
												],
											},
										},
										doneOn: {
											description: (0, t.localize)(11471, null),
											deprecationMessage: (0, t.localize)(11472, null),
											type: "object",
											required: ["command"],
											defaultSnippets: [{ body: { command: "$1" } }],
											properties: {
												command: {
													description: (0, t.localize)(11473, null),
													type: "string",
												},
											},
										},
										when: {
											type: "string",
											description: (0, t.localize)(11474, null),
										},
									},
								},
							},
						},
					},
				},
				activationEventsGenerator: (E, C) => {
					for (const d of E) d.id && C.push(`onWalkthrough:${d.id}`);
				},
			});
		}),
		