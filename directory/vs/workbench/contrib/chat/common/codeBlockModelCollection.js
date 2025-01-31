import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/resolverService.js';
import './chatViewModel.js';
import './annotations.js';
define(
			de[3016],
			he([1, 0, 3, 59, 23, 9, 17, 61, 64, 42, 283, 982]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*map*/,
 w /*network*/,
 E /*uri*/,
 C /*range*/,
 d /*language*/,
 m /*model*/,
 r /*resolverService*/,
 u /*chatViewModel*/,
 a /*annotations*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Tb = void 0);
				let h = class extends t.$1c {
					constructor(g, p) {
						super(),
							(this.c = g),
							(this.f = p),
							(this.a = new i.$Gc()),
							(this.b = 100);
					}
					dispose() {
						super.dispose(), this.clear();
					}
					get(g, p, o) {
						const f = this.j(g, p, o),
							b = this.a.get(f);
						if (b)
							return { model: b.model.then((s) => s.object), vulns: b.vulns };
					}
					getOrCreate(g, p, o) {
						const f = this.get(g, p, o);
						if (f) return f;
						const b = this.j(g, p, o),
							s = this.f.createModelReference(b);
						for (
							this.a.set(b, { model: s, vulns: [] });
							this.a.size > this.b;
						) {
							const l = Array.from(this.a.keys()).at(0);
							if (!l) break;
							this.g(l);
						}
						return { model: s.then((l) => l.object), vulns: [] };
					}
					g(g) {
						const p = this.a.get(g);
						p && (p.model.then((o) => o.dispose()), this.a.delete(g));
					}
					clear() {
						this.a.forEach(async (g) => (await g.model).dispose()),
							this.a.clear();
					}
					async update(g, p, o, f) {
						const b = this.getOrCreate(g, p, o),
							s = (0, a.$8Tb)(f.text),
							l = c(s.newText, f.languageId);
						this.h(g, p, o, s.vulnerabilities);
						const y = (await b.model).textEditorModel;
						if (f.languageId) {
							const v = this.c.getLanguageIdByLanguageName(f.languageId);
							v && v !== y.getLanguageId() && y.setLanguage(v);
						}
						const $ = y.getValue(m.EndOfLinePreference.LF);
						if (l !== $)
							if (l.startsWith($)) {
								const v = l.slice($.length),
									S = y.getLineCount(),
									I = y.getLineMaxColumn(S);
								y.applyEdits([{ range: new C.$iL(S, I, S, I), text: v }]);
							} else y.setValue(l);
					}
					h(g, p, o, f) {
						const b = this.j(g, p, o),
							s = this.a.get(b);
						s && (s.vulns = f);
					}
					j(g, p, o) {
						const f = this.m(p);
						return E.URI.from({
							scheme: w.Schemas.vscodeChatCodeBlock,
							authority: g,
							path: `/${p.id}/${o}`,
							fragment: f ? JSON.stringify(f) : void 0,
						});
					}
					m(g) {
						if ((0, u.$$Tb)(g))
							return {
								references: g.contentReferences.map((p) => {
									if (typeof p.reference == "string") return;
									const o =
										"variableName" in p.reference
											? p.reference.value
											: p.reference;
									if (o)
										return E.URI.isUri(o)
											? { uri: o.toJSON() }
											: { uri: o.uri.toJSON(), range: o.range };
								}),
							};
					}
				};
				(e.$9Tb = h), (e.$9Tb = h = Ne([j(0, d.$nM), j(1, r.$MO)], h));
				function c(n, g) {
					return g === "php" && !n.trim().startsWith("<")
						? `<?php
${n}`
						: n;
				}
			},
		)
