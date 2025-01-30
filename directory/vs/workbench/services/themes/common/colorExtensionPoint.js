import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../extensions/common/extensionsRegistry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/common/color.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/lifecycle.js';
import '../../extensionManagement/common/extensionFeatures.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/htmlContent.js';
define(
			de[3709],
			he([1, 0, 4, 175, 51, 97, 30, 3, 244, 102, 94]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*extensionsRegistry*/,
 w /*colorRegistry*/,
 E /*color*/,
 C /*platform*/,
 d /*lifecycle*/,
 m /*extensionFeatures*/,
 r /*descriptors*/,
 u /*htmlContent*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$imc = void 0),
					(t = mt(t));
				const a = C.$Io.as(w.$uP.ColorContribution),
					h = a.getColorReferenceSchema(),
					c = "^\\w+[.\\w+]*$",
					n = i.$n2.registerExtensionPoint({
						extensionPoint: "colors",
						jsonSchema: {
							description: t.localize(12713, null),
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: t.localize(12714, null),
										pattern: c,
										patternErrorMessage: t.localize(12715, null),
									},
									description: {
										type: "string",
										description: t.localize(12716, null),
									},
									defaults: {
										type: "object",
										properties: {
											light: {
												description: t.localize(12717, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
											dark: {
												description: t.localize(12718, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
											highContrast: {
												description: t.localize(12719, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
											highContrastLight: {
												description: t.localize(12720, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
										},
										required: ["light", "dark"],
									},
								},
							},
						},
					});
				class g {
					constructor() {
						n.setHandler((f, b) => {
							for (const s of b.added) {
								const l = s.value,
									y = s.collector;
								if (!l || !Array.isArray(l)) {
									y.error(t.localize(12721, null));
									return;
								}
								const $ = (v, S) =>
									v.length > 0
										? v[0] === "#"
											? E.$UL.Format.CSS.parseHex(v)
											: v
										: (y.error(t.localize(12722, null, S)), E.$UL.red);
								for (const v of l) {
									if (typeof v.id != "string" || v.id.length === 0) {
										y.error(t.localize(12723, null));
										return;
									}
									if (!v.id.match(c)) {
										y.error(t.localize(12724, null));
										return;
									}
									if (typeof v.description != "string" || v.id.length === 0) {
										y.error(t.localize(12725, null));
										return;
									}
									const S = v.defaults;
									if (
										!S ||
										typeof S != "object" ||
										typeof S.light != "string" ||
										typeof S.dark != "string"
									) {
										y.error(t.localize(12726, null));
										return;
									}
									if (S.highContrast && typeof S.highContrast != "string") {
										y.error(t.localize(12727, null));
										return;
									}
									if (
										S.highContrastLight &&
										typeof S.highContrastLight != "string"
									) {
										y.error(t.localize(12728, null));
										return;
									}
									a.registerColor(
										v.id,
										{
											light: $(S.light, "configuration.colors.defaults.light"),
											dark: $(S.dark, "configuration.colors.defaults.dark"),
											hcDark: $(
												S.highContrast ?? S.dark,
												"configuration.colors.defaults.highContrast",
											),
											hcLight: $(
												S.highContrastLight ?? S.light,
												"configuration.colors.defaults.highContrastLight",
											),
										},
										v.description,
									);
								}
							}
							for (const s of b.removed) {
								const l = s.value;
								for (const y of l) a.deregisterColor(y.id);
							}
						});
					}
				}
				e.$imc = g;
				class p extends d.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(f) {
						return !!f.contributes?.colors;
					}
					render(f) {
						const b = f.contributes?.colors || [];
						if (!b.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const s = [
								t.localize(12729, null),
								t.localize(12730, null),
								t.localize(12731, null),
								t.localize(12732, null),
								t.localize(12733, null),
							],
							l = ($) => ($[0] === "#" ? E.$UL.fromHex($) : void 0),
							y = b
								.sort(($, v) => $.id.localeCompare(v.id))
								.map(($) => [
									new u.$cl().appendMarkdown(`\`${$.id}\``),
									$.description,
									l($.defaults.dark) ??
										new u.$cl().appendMarkdown(`\`${$.defaults.dark}\``),
									l($.defaults.light) ??
										new u.$cl().appendMarkdown(`\`${$.defaults.light}\``),
									l($.defaults.highContrast) ??
										new u.$cl().appendMarkdown(
											`\`${$.defaults.highContrast}\``,
										),
								]);
						return { data: { headers: s, rows: y }, dispose: () => {} };
					}
				}
				C.$Io
					.as(m.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "colors",
						label: t.localize(12734, null),
						access: { canToggle: !1 },
						renderer: new r.$Ji(p),
					});
			},
		),
		