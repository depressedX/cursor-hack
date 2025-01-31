import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/registry/common/platform.js';
import './localizationsActions.js';
import '../../../services/extensionManagement/common/extensionFeatures.js';
import '../../../services/extensions/common/extensionsRegistry.js';
define(
			de[3458],
			he([1, 0, 3, 4, 11, 102, 30, 3457, 244, 175]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*actions*/,
 E /*descriptors*/,
 C /*platform*/,
 d /*localizationsActions*/,
 m /*extensionFeatures*/,
 r /*extensionsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$75c = void 0);
				class u extends t.$1c {
					constructor() {
						super(),
							(0, w.$4X)(d.$55c),
							(0, w.$4X)(d.$65c),
							r.$n2.registerExtensionPoint({
								extensionPoint: "localizations",
								defaultExtensionKind: ["ui", "workspace"],
								jsonSchema: {
									description: (0, i.localize)(7395, null),
									type: "array",
									default: [],
									items: {
										type: "object",
										required: ["languageId", "translations"],
										defaultSnippets: [
											{
												body: {
													languageId: "",
													languageName: "",
													localizedLanguageName: "",
													translations: [{ id: "vscode", path: "" }],
												},
											},
										],
										properties: {
											languageId: {
												description: (0, i.localize)(7396, null),
												type: "string",
											},
											languageName: {
												description: (0, i.localize)(7397, null),
												type: "string",
											},
											localizedLanguageName: {
												description: (0, i.localize)(7398, null),
												type: "string",
											},
											translations: {
												description: (0, i.localize)(7399, null),
												type: "array",
												default: [{ id: "vscode", path: "" }],
												items: {
													type: "object",
													required: ["id", "path"],
													properties: {
														id: {
															type: "string",
															description: (0, i.localize)(7400, null),
															pattern:
																"^((vscode)|([a-z0-9A-Z][a-z0-9A-Z-]*)\\.([a-z0-9A-Z][a-z0-9A-Z-]*))$",
															patternErrorMessage: (0, i.localize)(7401, null),
														},
														path: {
															type: "string",
															description: (0, i.localize)(7402, null),
														},
													},
													defaultSnippets: [{ body: { id: "", path: "" } }],
												},
											},
										},
									},
								},
							});
					}
				}
				e.$75c = u;
				class a extends t.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(c) {
						return !!c.contributes?.localizations;
					}
					render(c) {
						const n = c.contributes?.localizations || [];
						if (!n.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const g = [
								(0, i.localize)(7403, null),
								(0, i.localize)(7404, null),
								(0, i.localize)(7405, null),
							],
							p = n
								.sort((o, f) => o.languageId.localeCompare(f.languageId))
								.map((o) => [
									o.languageId,
									o.languageName ?? "",
									o.localizedLanguageName ?? "",
								]);
						return { data: { headers: g, rows: p }, dispose: () => {} };
					}
				}
				C.$Io
					.as(m.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "localizations",
						label: (0, i.localize)(7406, null),
						access: { canToggle: !1 },
						renderer: new E.$Ji(a),
					});
			},
		)
