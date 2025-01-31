import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/core/wordHelper.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/languages.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
define(
			de[2709],
			he([1, 0, 409, 69, 74, 3, 59]),
			function (ce /*require*/,
 e /*exports*/,
 t /*wordHelper*/,
 i /*languageFeatures*/,
 w /*languages*/,
 E /*lifecycle*/,
 C /*map*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oPb = void 0);
				class d {
					constructor() {
						this.selector = { language: "*" };
					}
					provideDocumentHighlights(u, a, h) {
						const c = [],
							n = u.getWordAtPosition({
								lineNumber: a.lineNumber,
								column: a.column,
							});
						return n
							? u.isDisposed()
								? void 0
								: u
										.findMatches(n.word, !0, !1, !0, t.$SK, !1)
										.map((p) => ({
											range: p.range,
											kind: w.DocumentHighlightKind.Text,
										}))
							: Promise.resolve(c);
					}
					provideMultiDocumentHighlights(u, a, h, c) {
						const n = new C.$Gc(),
							g = u.getWordAtPosition({
								lineNumber: a.lineNumber,
								column: a.column,
							});
						if (!g) return Promise.resolve(n);
						for (const p of [u, ...h]) {
							if (p.isDisposed()) continue;
							const f = p
								.findMatches(g.word, !0, !1, !0, t.$SK, !1)
								.map((b) => ({
									range: b.range,
									kind: w.DocumentHighlightKind.Text,
								}));
							f && n.set(p.uri, f);
						}
						return n;
					}
				}
				let m = class extends E.$1c {
					constructor(u) {
						super(),
							this.D(u.documentHighlightProvider.register("*", new d())),
							this.D(u.multiDocumentHighlightProvider.register("*", new d()));
					}
				};
				(e.$oPb = m), (e.$oPb = m = Ne([j(0, i.$k3)], m));
			},
		)
