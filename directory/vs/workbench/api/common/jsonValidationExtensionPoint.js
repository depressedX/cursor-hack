import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../services/extensions/common/extensionsRegistry.js';
import '../../../base/common/resources.js';
import '../../../base/common/types.js';
import '../../../base/common/lifecycle.js';
import '../../services/extensionManagement/common/extensionFeatures.js';
import '../../../platform/registry/common/platform.js';
import '../../../platform/instantiation/common/descriptors.js';
import '../../../base/common/htmlContent.js';
define(
			de[3324],
			he([1, 0, 4, 175, 19, 28, 3, 244, 30, 102, 94]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*extensionsRegistry*/,
 w /*resources*/,
 E /*types*/,
 C /*lifecycle*/,
 d /*extensionFeatures*/,
 m /*platform*/,
 r /*descriptors*/,
 u /*htmlContent*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hmc = void 0),
					(t = mt(t)),
					(w = mt(w));
				const a = i.$n2.registerExtensionPoint({
					extensionPoint: "jsonValidation",
					defaultExtensionKind: ["workspace", "web"],
					jsonSchema: {
						description: t.localize(2726, null),
						type: "array",
						defaultSnippets: [
							{ body: [{ fileMatch: "${1:file.json}", url: "${2:url}" }] },
						],
						items: {
							type: "object",
							defaultSnippets: [
								{ body: { fileMatch: "${1:file.json}", url: "${2:url}" } },
							],
							properties: {
								fileMatch: {
									type: ["string", "array"],
									description: t.localize(2727, null),
									items: { type: ["string"] },
								},
								url: { description: t.localize(2728, null), type: "string" },
							},
						},
					},
				});
				class h {
					constructor() {
						a.setHandler((g) => {
							for (const p of g) {
								const o = p.value,
									f = p.collector,
									b = p.description.extensionLocation;
								if (!o || !Array.isArray(o)) {
									f.error(t.localize(2729, null));
									return;
								}
								o.forEach((s) => {
									if (
										!(0, E.$lg)(s.fileMatch) &&
										!(Array.isArray(s.fileMatch) && s.fileMatch.every(E.$lg))
									) {
										f.error(t.localize(2730, null));
										return;
									}
									const l = s.url;
									if (!(0, E.$lg)(l)) {
										f.error(t.localize(2731, null));
										return;
									}
									if (l.startsWith("./"))
										try {
											const y = w.$nh(b, l);
											w.$hh(y, b) ||
												f.warn(
													t.localize(2732, null, a.name, y.toString(), b.path),
												);
										} catch (y) {
											f.error(t.localize(2733, null, y.message));
										}
									else if (!/^[^:/?#]+:\/\//.test(l)) {
										f.error(t.localize(2734, null));
										return;
									}
								});
							}
						});
					}
				}
				e.$hmc = h;
				class c extends C.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(g) {
						return !!g.contributes?.jsonValidation;
					}
					render(g) {
						const p = g.contributes?.jsonValidation || [];
						if (!p.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const o = [t.localize(2735, null), t.localize(2736, null)],
							f = p.map((b) => [
								new u.$cl().appendMarkdown(
									`\`${Array.isArray(b.fileMatch) ? b.fileMatch.join(", ") : b.fileMatch}\``,
								),
								b.url,
							]);
						return { data: { headers: o, rows: f }, dispose: () => {} };
					}
				}
				m.$Io
					.as(d.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "jsonValidation",
						label: t.localize(2737, null),
						access: { canToggle: !1 },
						renderer: new r.$Ji(c),
					});
			},
		)
