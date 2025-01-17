import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import './productIconThemeSchema.js';
define(
			de[3712],
			he([1, 0, 4, 30, 250, 1322]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dwc = m),
					(t = mt(t));
				const C = "vscode://schemas/icon-theme",
					d = {
						type: "object",
						allowComments: !0,
						allowTrailingCommas: !0,
						definitions: {
							folderExpanded: {
								type: "string",
								description: t.localize(12756, null),
							},
							folder: { type: "string", description: t.localize(12757, null) },
							file: { type: "string", description: t.localize(12758, null) },
							rootFolder: {
								type: "string",
								description: t.localize(12759, null),
							},
							rootFolderExpanded: {
								type: "string",
								description: t.localize(12760, null),
							},
							rootFolderNames: {
								type: "object",
								description: t.localize(12761, null),
								additionalProperties: {
									type: "string",
									description: t.localize(12762, null),
								},
							},
							rootFolderNamesExpanded: {
								type: "object",
								description: t.localize(12763, null),
								additionalProperties: {
									type: "string",
									description: t.localize(12764, null),
								},
							},
							folderNames: {
								type: "object",
								description: t.localize(12765, null),
								additionalProperties: {
									type: "string",
									description: t.localize(12766, null),
								},
							},
							folderNamesExpanded: {
								type: "object",
								description: t.localize(12767, null),
								additionalProperties: {
									type: "string",
									description: t.localize(12768, null),
								},
							},
							fileExtensions: {
								type: "object",
								description: t.localize(12769, null),
								additionalProperties: {
									type: "string",
									description: t.localize(12770, null),
								},
							},
							fileNames: {
								type: "object",
								description: t.localize(12771, null),
								additionalProperties: {
									type: "string",
									description: t.localize(12772, null),
								},
							},
							languageIds: {
								type: "object",
								description: t.localize(12773, null),
								additionalProperties: {
									type: "string",
									description: t.localize(12774, null),
								},
							},
							associations: {
								type: "object",
								properties: {
									folderExpanded: { $ref: "#/definitions/folderExpanded" },
									folder: { $ref: "#/definitions/folder" },
									file: { $ref: "#/definitions/file" },
									folderNames: { $ref: "#/definitions/folderNames" },
									folderNamesExpanded: {
										$ref: "#/definitions/folderNamesExpanded",
									},
									rootFolder: { $ref: "#/definitions/rootFolder" },
									rootFolderExpanded: {
										$ref: "#/definitions/rootFolderExpanded",
									},
									rootFolderNames: { $ref: "#/definitions/rootFolderNames" },
									rootFolderNamesExpanded: {
										$ref: "#/definitions/rootFolderNamesExpanded",
									},
									fileExtensions: { $ref: "#/definitions/fileExtensions" },
									fileNames: { $ref: "#/definitions/fileNames" },
									languageIds: { $ref: "#/definitions/languageIds" },
								},
							},
						},
						properties: {
							fonts: {
								type: "array",
								description: t.localize(12775, null),
								items: {
									type: "object",
									properties: {
										id: {
											type: "string",
											description: t.localize(12776, null),
											pattern: E.$0vc,
											patternErrorMessage: t.localize(12777, null),
										},
										src: {
											type: "array",
											description: t.localize(12778, null),
											items: {
												type: "object",
												properties: {
													path: {
														type: "string",
														description: t.localize(12779, null),
													},
													format: {
														type: "string",
														description: t.localize(12780, null),
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
											description: t.localize(12781, null),
											pattern: E.$_vc,
										},
										style: {
											type: "string",
											description: t.localize(12782, null),
											pattern: E.$$vc,
										},
										size: {
											type: "string",
											description: t.localize(12783, null),
											pattern: E.$awc,
										},
									},
									required: ["id", "src"],
								},
							},
							iconDefinitions: {
								type: "object",
								description: t.localize(12784, null),
								additionalProperties: {
									type: "object",
									description: t.localize(12785, null),
									properties: {
										iconPath: {
											type: "string",
											description: t.localize(12786, null),
										},
										fontCharacter: {
											type: "string",
											description: t.localize(12787, null),
										},
										fontColor: {
											type: "string",
											format: "color-hex",
											description: t.localize(12788, null),
										},
										fontSize: {
											type: "string",
											description: t.localize(12789, null),
											pattern: E.$awc,
										},
										fontId: {
											type: "string",
											description: t.localize(12790, null),
										},
									},
								},
							},
							folderExpanded: { $ref: "#/definitions/folderExpanded" },
							folder: { $ref: "#/definitions/folder" },
							file: { $ref: "#/definitions/file" },
							folderNames: { $ref: "#/definitions/folderNames" },
							folderNamesExpanded: {
								$ref: "#/definitions/folderNamesExpanded",
							},
							rootFolder: { $ref: "#/definitions/rootFolder" },
							rootFolderExpanded: { $ref: "#/definitions/rootFolderExpanded" },
							rootFolderNames: { $ref: "#/definitions/rootFolderNames" },
							rootFolderNamesExpanded: {
								$ref: "#/definitions/rootFolderNamesExpanded",
							},
							fileExtensions: { $ref: "#/definitions/fileExtensions" },
							fileNames: { $ref: "#/definitions/fileNames" },
							languageIds: { $ref: "#/definitions/languageIds" },
							light: {
								$ref: "#/definitions/associations",
								description: t.localize(12791, null),
							},
							highContrast: {
								$ref: "#/definitions/associations",
								description: t.localize(12792, null),
							},
							hidesExplorerArrows: {
								type: "boolean",
								description: t.localize(12793, null),
							},
							showLanguageModeIcons: {
								type: "boolean",
								description: t.localize(12794, null),
							},
						},
					};
				function m() {
					i.$Io.as(w.$Jo.JSONContribution).registerSchema(C, d);
				}
			},
		),
		