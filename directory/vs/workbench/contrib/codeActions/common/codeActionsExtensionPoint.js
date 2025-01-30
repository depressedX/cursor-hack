import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/language/common/languageService.js';
import '../../../services/extensionManagement/common/extensionFeatures.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/htmlContent.js';
define(
			de[3396],
			he([1, 0, 4, 701, 244, 3, 102, 30, 94]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*languageService*/,
 w /*extensionFeatures*/,
 E /*lifecycle*/,
 C /*descriptors*/,
 d /*platform*/,
 m /*htmlContent*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X1c = void 0),
					(t = mt(t));
				var r;
				(function (h) {
					(h.languages = "languages"),
						(h.actions = "actions"),
						(h.kind = "kind"),
						(h.title = "title"),
						(h.description = "description");
				})(r || (r = {}));
				const u = Object.freeze({
					type: "array",
					markdownDescription: t.localize(4829, null),
					items: {
						type: "object",
						required: [r.languages, r.actions],
						properties: {
							[r.languages]: {
								type: "array",
								description: t.localize(4830, null),
								items: { type: "string" },
							},
							[r.actions]: {
								type: "object",
								required: [r.kind, r.title],
								properties: {
									[r.kind]: {
										type: "string",
										markdownDescription: t.localize(4831, null),
									},
									[r.title]: {
										type: "string",
										description: t.localize(4832, null),
									},
									[r.description]: {
										type: "string",
										description: t.localize(4833, null),
									},
								},
							},
						},
					},
				});
				e.$X1c = {
					extensionPoint: "codeActions",
					deps: [i.$qYb],
					jsonSchema: u,
				};
				class a extends E.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(c) {
						return !!c.contributes?.codeActions;
					}
					render(c) {
						const n = c.contributes?.codeActions || [];
						if (!n.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const g = n
								.map((f) =>
									f.actions.map((b) => ({ ...b, languages: f.languages })),
								)
								.flat(),
							p = [
								t.localize(4834, null),
								t.localize(4835, null),
								t.localize(4836, null),
								t.localize(4837, null),
							],
							o = g
								.sort((f, b) => f.title.localeCompare(b.title))
								.map((f) => [
									f.title,
									new m.$cl().appendMarkdown(`\`${f.kind}\``),
									f.description ?? "",
									new m.$cl().appendMarkdown(
										`${f.languages.map((b) => `\`${b}\``).join("&nbsp;")}`,
									),
								]);
						return { data: { headers: p, rows: o }, dispose: () => {} };
					}
				}
				d.$Io
					.as(w.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "codeActions",
						label: t.localize(4838, null),
						access: { canToggle: !1 },
						renderer: new C.$Ji(a),
					});
			},
		),
		