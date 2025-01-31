import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../extensions/common/extensionsRegistry.js';
import '../../../../platform/theme/common/tokenClassificationRegistry.js';
define(de[3715], he([1, 0, 4, 175, 778]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*extensionsRegistry*/,
 w /*tokenClassificationRegistry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$pmc = void 0),
				(t = mt(t));
			const E = (0, w.$nmc)(),
				C = i.$n2.registerExtensionPoint({
					extensionPoint: "semanticTokenTypes",
					jsonSchema: {
						description: t.localize(12873, null),
						type: "array",
						items: {
							type: "object",
							properties: {
								id: {
									type: "string",
									description: t.localize(12874, null),
									pattern: w.$kmc,
									patternErrorMessage: t.localize(12875, null),
								},
								superType: {
									type: "string",
									description: t.localize(12876, null),
									pattern: w.$kmc,
									patternErrorMessage: t.localize(12877, null),
								},
								description: {
									type: "string",
									description: t.localize(12878, null),
								},
							},
						},
					},
				}),
				d = i.$n2.registerExtensionPoint({
					extensionPoint: "semanticTokenModifiers",
					jsonSchema: {
						description: t.localize(12879, null),
						type: "array",
						items: {
							type: "object",
							properties: {
								id: {
									type: "string",
									description: t.localize(12880, null),
									pattern: w.$kmc,
									patternErrorMessage: t.localize(12881, null),
								},
								description: { description: t.localize(12882, null) },
							},
						},
					},
				}),
				m = i.$n2.registerExtensionPoint({
					extensionPoint: "semanticTokenScopes",
					jsonSchema: {
						description: t.localize(12883, null),
						type: "array",
						items: {
							type: "object",
							properties: {
								language: {
									description: t.localize(12884, null),
									type: "string",
								},
								scopes: {
									description: t.localize(12885, null),
									type: "object",
									additionalProperties: {
										type: "array",
										items: { type: "string" },
									},
								},
							},
						},
					},
				});
			class r {
				constructor() {
					function a(h, c, n) {
						if (typeof h.id != "string" || h.id.length === 0)
							return n.error(t.localize(12886, null, c)), !1;
						if (!h.id.match(w.$kmc))
							return n.error(t.localize(12887, null, c)), !1;
						const g = h.superType;
						return g && !g.match(w.$kmc)
							? (n.error(t.localize(12888, null, c)), !1)
							: typeof h.description != "string" || h.id.length === 0
								? (n.error(t.localize(12889, null, c)), !1)
								: !0;
					}
					C.setHandler((h, c) => {
						for (const n of c.added) {
							const g = n.value,
								p = n.collector;
							if (!g || !Array.isArray(g)) {
								p.error(t.localize(12890, null));
								return;
							}
							for (const o of g)
								a(o, "semanticTokenType", p) &&
									E.registerTokenType(o.id, o.description, o.superType);
						}
						for (const n of c.removed) {
							const g = n.value;
							for (const p of g) E.deregisterTokenType(p.id);
						}
					}),
						d.setHandler((h, c) => {
							for (const n of c.added) {
								const g = n.value,
									p = n.collector;
								if (!g || !Array.isArray(g)) {
									p.error(t.localize(12891, null));
									return;
								}
								for (const o of g)
									a(o, "semanticTokenModifier", p) &&
										E.registerTokenModifier(o.id, o.description);
							}
							for (const n of c.removed) {
								const g = n.value;
								for (const p of g) E.deregisterTokenModifier(p.id);
							}
						}),
						m.setHandler((h, c) => {
							for (const n of c.added) {
								const g = n.value,
									p = n.collector;
								if (!g || !Array.isArray(g)) {
									p.error(t.localize(12892, null));
									return;
								}
								for (const o of g) {
									if (o.language && typeof o.language != "string") {
										p.error(t.localize(12893, null));
										continue;
									}
									if (!o.scopes || typeof o.scopes != "object") {
										p.error(t.localize(12894, null));
										continue;
									}
									for (const f in o.scopes) {
										const b = o.scopes[f];
										if (
											!Array.isArray(b) ||
											b.some((s) => typeof s != "string")
										) {
											p.error(t.localize(12895, null));
											continue;
										}
										try {
											const s = E.parseTokenSelector(f, o.language);
											E.registerTokenStyleDefault(s, {
												scopesToProbe: b.map((l) => l.split(" ")),
											});
										} catch {
											p.error(t.localize(12896, null, f));
										}
									}
								}
							}
							for (const n of c.removed) {
								const g = n.value;
								for (const p of g)
									for (const o in p.scopes) {
										const f = p.scopes[o];
										try {
											const b = E.parseTokenSelector(o, p.language);
											E.registerTokenStyleDefault(b, {
												scopesToProbe: f.map((s) => s.split(" ")),
											});
										} catch {}
									}
							}
						});
				}
			}
			e.$pmc = r;
		})
