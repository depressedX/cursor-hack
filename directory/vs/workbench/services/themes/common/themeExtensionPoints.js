import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/types.js';
import '../../../../base/common/resources.js';
import '../../extensions/common/extensionsRegistry.js';
import './workbenchThemeService.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../extensionManagement/common/extensionFeatures.js';
import '../../../../base/common/htmlContent.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/instantiation/common/descriptors.js';
define(
			de[3728],
			he([1, 0, 4, 28, 19, 175, 333, 6, 3, 244, 94, 30, 102]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*types*/,
 w /*resources*/,
 E /*extensionsRegistry*/,
 C /*workbenchThemeService*/,
 d /*event*/,
 m /*lifecycle*/,
 r /*extensionFeatures*/,
 u /*htmlContent*/,
 a /*platform*/,
 h /*descriptors*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jwc = void 0),
					(e.$gwc = c),
					(e.$hwc = n),
					(e.$iwc = g),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w));
				function c() {
					return E.$n2.registerExtensionPoint({
						extensionPoint: "themes",
						jsonSchema: {
							description: t.localize(12852, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											label: "${1:label}",
											id: "${2:id}",
											uiTheme: C.$tRb,
											path: "./themes/${3:id}.tmTheme.",
										},
									},
								],
								properties: {
									id: { description: t.localize(12853, null), type: "string" },
									label: {
										description: t.localize(12854, null),
										type: "string",
									},
									uiTheme: {
										description: t.localize(12855, null),
										enum: [C.$sRb, C.$tRb, C.$uRb, C.$vRb],
									},
									path: {
										description: t.localize(12856, null),
										type: "string",
									},
								},
								required: ["path", "uiTheme"],
							},
						},
					});
				}
				function n() {
					return E.$n2.registerExtensionPoint({
						extensionPoint: "iconThemes",
						jsonSchema: {
							description: t.localize(12857, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											id: "${1:id}",
											label: "${2:label}",
											path: "./fileicons/${3:id}-icon-theme.json",
										},
									},
								],
								properties: {
									id: { description: t.localize(12858, null), type: "string" },
									label: {
										description: t.localize(12859, null),
										type: "string",
									},
									path: {
										description: t.localize(12860, null),
										type: "string",
									},
								},
								required: ["path", "id"],
							},
						},
					});
				}
				function g() {
					return E.$n2.registerExtensionPoint({
						extensionPoint: "productIconThemes",
						jsonSchema: {
							description: t.localize(12861, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											id: "${1:id}",
											label: "${2:label}",
											path: "./producticons/${3:id}-product-icon-theme.json",
										},
									},
								],
								properties: {
									id: { description: t.localize(12862, null), type: "string" },
									label: {
										description: t.localize(12863, null),
										type: "string",
									},
									path: {
										description: t.localize(12864, null),
										type: "string",
									},
								},
								required: ["path", "id"],
							},
						},
					});
				}
				class p extends m.$1c {
					constructor() {
						super(...arguments), (this.type = "markdown");
					}
					shouldRender(b) {
						return (
							!!b.contributes?.themes ||
							!!b.contributes?.iconThemes ||
							!!b.contributes?.productIconThemes
						);
					}
					render(b) {
						const s = new u.$cl();
						if (b.contributes?.themes) {
							s.appendMarkdown(`### ${t.localize(12865, null)}

`);
							for (const l of b.contributes.themes)
								s.appendMarkdown(`- ${l.label}
`);
						}
						if (b.contributes?.iconThemes) {
							s.appendMarkdown(`### ${t.localize(12866, null)}

`);
							for (const l of b.contributes.iconThemes)
								s.appendMarkdown(`- ${l.label}
`);
						}
						if (b.contributes?.productIconThemes) {
							s.appendMarkdown(`### ${t.localize(12867, null)}

`);
							for (const l of b.contributes.productIconThemes)
								s.appendMarkdown(`- ${l.label}
`);
						}
						return { data: s, dispose: () => {} };
					}
				}
				a.$Io
					.as(r.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "themes",
						label: t.localize(12868, null),
						access: { canToggle: !1 },
						renderer: new h.$Ji(p),
					});
				class o {
					constructor(b, s, l = !1, y = void 0) {
						(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.b = new d.$re()),
							(this.onDidChange = this.b.event),
							(this.a = []),
							this.g();
					}
					dispose() {
						this.c.setHandler(() => {});
					}
					g() {
						this.c.setHandler((b, s) => {
							const l = {},
								y = [];
							for (const v of this.a) l[v.id] = v;
							this.a.length = 0;
							for (const v of b) {
								const S = C.ExtensionData.fromName(
									v.description.publisher,
									v.description.name,
									v.description.isBuiltin,
								);
								this.h(
									S,
									v.description.extensionLocation,
									v.value,
									this.a,
									v.collector,
								);
							}
							for (const v of this.a) l[v.id] ? delete l[v.id] : y.push(v);
							const $ = Object.values(l);
							this.b.fire({ themes: this.a, added: y, removed: $ });
						});
					}
					h(b, s, l, y = [], $) {
						return Array.isArray(l)
							? (l.forEach((v) => {
									if (!v.path || !i.$lg(v.path)) {
										$?.error(
											t.localize(12870, null, this.c.name, String(v.path)),
										);
										return;
									}
									if (this.e && (!v.id || !i.$lg(v.id))) {
										$?.error(
											t.localize(12871, null, this.c.name, String(v.id)),
										);
										return;
									}
									const S = w.$nh(s, v.path);
									w.$hh(S, s) ||
										$?.warn(
											t.localize(12872, null, this.c.name, S.path, s.path),
										);
									const I = this.d(v, S, b);
									y.push(I);
								}),
								y)
							: ($?.error(t.localize(12869, null, this.c.name)), y);
					}
					findThemeById(b) {
						if (this.f && this.f.id === b) return this.f;
						const s = this.getThemes();
						for (const l of s) if (l.id === b) return l;
					}
					findThemeBySettingsId(b, s) {
						if (this.f && this.f.settingsId === b) return this.f;
						const l = this.getThemes();
						let y;
						for (const $ of l) {
							if ($.settingsId === b) return $;
							$.settingsId === s && (y = $);
						}
						return y;
					}
					findThemeByExtensionLocation(b) {
						return b
							? this.getThemes().filter(
									(s) => s.location && w.$hh(s.location, b),
								)
							: [];
					}
					getThemes() {
						return this.a;
					}
					getMarketplaceThemes(b, s, l) {
						const y = b?.contributes?.[this.c.name];
						return Array.isArray(y) ? this.h(l, s, y) : [];
					}
				}
				e.$jwc = o;
			},
		),
		