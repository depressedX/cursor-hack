import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../../nls.js';
import '../../extensionManagement/common/extensionManagement.js';
import '../../instantiation/common/instantiation.js';
define(
			de[672],
			he([1, 0, 33, 3, 12, 4, 119, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*lifecycle*/,
 w /*platform*/,
 E /*nls*/,
 C /*extensionManagement*/,
 d /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GJ = e.$FJ = void 0),
					(e.$EJ = m);
				function m(u) {
					return u.tags.find((a) => a.startsWith("lp-"))?.split("lp-")[1];
				}
				e.$FJ = (0, d.$Mi)("languagePackService");
				let r = class extends i.$1c {
					constructor(a) {
						super(), (this.c = a);
					}
					async getAvailableLanguages() {
						const a = new t.$Ce();
						setTimeout(() => a.cancel(), 1e3);
						let h;
						try {
							h = await this.c.query(
								{ text: 'category:"language packs"', pageSize: 20 },
								a.token,
							);
						} catch {
							return [];
						}
						const n = h.firstPage
							.filter(
								(g) =>
									g.properties.localizedLanguages?.length &&
									g.tags.some((p) => p.startsWith("lp-")),
							)
							.map((g) => {
								const p = g.properties.localizedLanguages?.[0],
									o = m(g);
								return {
									...this.f(o, p, g),
									extensionId: g.identifier.id,
									galleryExtension: g,
								};
							});
						return n.push(this.f("en", "English")), n;
					}
					f(a, h, c) {
						const n = h ?? a;
						let g;
						if (
							(n !== a && (g = `(${a})`),
							a.toLowerCase() === w.$z.toLowerCase() &&
								((g ??= ""), (g += (0, E.localize)(1940, null))),
							c?.installCount)
						) {
							g ??= "";
							const p = c.installCount;
							let o;
							p > 1e6
								? (o = `${Math.floor(p / 1e5) / 10}M`)
								: p > 1e3
									? (o = `${Math.floor(p / 1e3)}K`)
									: (o = String(p)),
								(g += ` $(cloud-download) ${o}`);
						}
						return { id: a, label: n, description: g };
					}
				};
				(e.$GJ = r), (e.$GJ = r = Ne([j(0, C.$Ep)], r));
			},
		),
		