import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../extensions/common/extensionsRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/path.js';
define(
			de[3710],
			he([1, 0, 4, 175, 79, 30, 26, 19, 54]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*extensionsRegistry*/,
 w /*iconRegistry*/,
 E /*platform*/,
 C /*themables*/,
 d /*resources*/,
 m /*path*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jmc = void 0),
					(t = mt(t)),
					(d = mt(d));
				const r = E.$Io.as(w.$0O.IconContribution),
					u = r.getIconReferenceSchema(),
					a = `^${C.ThemeIcon.iconNameSegment}(-${C.ThemeIcon.iconNameSegment})+$`,
					h = i.$n2.registerExtensionPoint({
						extensionPoint: "icons",
						jsonSchema: {
							description: t.localize(12795, null),
							type: "object",
							propertyNames: {
								pattern: a,
								description: t.localize(12796, null),
								patternErrorMessage: t.localize(12797, null),
							},
							additionalProperties: {
								type: "object",
								properties: {
									description: {
										type: "string",
										description: t.localize(12798, null),
									},
									default: {
										anyOf: [
											u,
											{
												type: "object",
												properties: {
													fontPath: {
														description: t.localize(12799, null),
														type: "string",
													},
													fontCharacter: {
														description: t.localize(12800, null),
														type: "string",
													},
												},
												required: ["fontPath", "fontCharacter"],
												defaultSnippets: [
													{
														body: {
															fontPath: "${1:myiconfont.woff}",
															fontCharacter: "${2:\\\\E001}",
														},
													},
												],
											},
										],
										description: t.localize(12801, null),
									},
								},
								required: ["description", "default"],
								defaultSnippets: [
									{
										body: {
											description: "${1:my icon}",
											default: {
												fontPath: "${2:myiconfont.woff}",
												fontCharacter: "${3:\\\\E001}",
											},
										},
									},
								],
							},
							defaultSnippets: [
								{
									body: {
										"${1:my-icon-id}": {
											description: "${2:my icon}",
											default: {
												fontPath: "${3:myiconfont.woff}",
												fontCharacter: "${4:\\\\E001}",
											},
										},
									},
								},
							],
						},
					});
				class c {
					constructor() {
						h.setHandler((o, f) => {
							for (const b of f.added) {
								const s = b.value,
									l = b.collector;
								if (!s || typeof s != "object") {
									l.error(t.localize(12802, null));
									return;
								}
								for (const y in s) {
									if (!y.match(a)) {
										l.error(t.localize(12803, null));
										return;
									}
									const $ = s[y];
									if (
										typeof $.description != "string" ||
										$.description.length === 0
									) {
										l.error(t.localize(12804, null));
										return;
									}
									const v = $.default;
									if (typeof v == "string")
										r.registerIcon(y, { id: v }, $.description);
									else if (
										typeof v == "object" &&
										typeof v.fontPath == "string" &&
										typeof v.fontCharacter == "string"
									) {
										const S = (0, m.$tc)(v.fontPath).substring(1),
											I = n[S];
										if (!I) {
											l.warn(t.localize(12805, null, S));
											return;
										}
										const T = b.description.extensionLocation,
											P = d.$nh(T, v.fontPath);
										if (!d.$hh(P, T)) {
											l.warn(t.localize(12806, null, P.path, T.path));
											return;
										}
										const k = g(b.description, v.fontPath),
											L = r.registerIconFont(k, {
												src: [{ location: P, format: I }],
											});
										r.registerIcon(
											y,
											{
												fontCharacter: v.fontCharacter,
												font: { id: k, definition: L },
											},
											$.description,
										);
									} else l.error(t.localize(12807, null));
								}
							}
							for (const b of f.removed) {
								const s = b.value;
								for (const l in s) r.deregisterIcon(l);
							}
						});
					}
				}
				e.$jmc = c;
				const n = { ttf: "truetype", woff: "woff", woff2: "woff2" };
				function g(p, o) {
					return m.$lc.join(p.identifier.value, o);
				}
			},
		),
		