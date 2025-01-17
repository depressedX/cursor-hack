import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/environment/browser/environmentService.js';
define(
			de[1018],
			he([1, 0, 9, 4, 62, 21, 18, 286]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UXb = e.$TXb = e.$SXb = void 0),
					(e.$VXb = r),
					(e.$WXb = u),
					(e.$XXb = a);
				const m = t.URI.parse("trustedDomains:/Trusted Domains");
				(e.$SXb = "http.linkProtectionTrustedDomains"),
					(e.$TXb = "http.linkProtectionTrustedDomainsContent"),
					(e.$UXb = {
						id: "workbench.action.manageTrustedDomain",
						description: {
							description: (0, i.localize2)(11119, "Manage Trusted Domains"),
							args: [],
						},
						handler: async (h) => {
							h.get(C.$IY).openEditor({
								resource: m,
								languageId: "jsonc",
								options: { pinned: !0 },
							});
						},
					});
				async function r(h, c, n, g, p, o, f) {
					const b = t.URI.parse(c),
						s = b.authority.split("."),
						l = s.slice(s.length - 2).join("."),
						y = "*." + l,
						$ = [];
					if (
						($.push({
							type: "item",
							label: (0, i.localize)(11114, null, c),
							id: "trust",
							toTrust: c,
							picked: !0,
						}),
						s.length === 4 &&
							s.every(
								(I) =>
									Number.isInteger(+I) || Number.isInteger(+I.split(":")[0]),
							))
					) {
						if (b.authority.includes(":")) {
							const I = b.authority.split(":")[0];
							$.push({
								type: "item",
								label: (0, i.localize)(11115, null, I),
								toTrust: I + ":*",
								id: "trust",
							});
						}
					} else
						$.push({
							type: "item",
							label: (0, i.localize)(11116, null, l),
							toTrust: y,
							id: "trust",
						});
					$.push({
						type: "item",
						label: (0, i.localize)(11117, null),
						toTrust: "*",
						id: "trust",
					}),
						$.push({
							type: "item",
							label: (0, i.localize)(11118, null),
							id: "manage",
						});
					const S = await g.pick($, { activeItem: $[0] });
					if (S && S.id)
						switch (S.id) {
							case "manage":
								return (
									await o.openEditor({
										resource: m.with({ fragment: n.toString() }),
										languageId: "jsonc",
										options: { pinned: !0 },
									}),
									h
								);
							case "trust": {
								const I = S.toTrust;
								if (h.indexOf(I) === -1)
									return (
										p.remove(e.$TXb, E.StorageScope.APPLICATION),
										p.store(
											e.$SXb,
											JSON.stringify([...h, I]),
											E.StorageScope.APPLICATION,
											E.StorageTarget.USER,
										),
										[...h, I]
									);
							}
						}
					return [];
				}
				async function u(h) {
					const { defaultTrustedDomains: c, trustedDomains: n } = a(h);
					return { defaultTrustedDomains: c, trustedDomains: n };
				}
				function a(h) {
					const c = h.get(E.$lq),
						n = h.get(w.$Bk),
						g = h.get(d.$5rb),
						p = [
							...(n.linkProtectionTrustedDomains ?? []),
							...(g.options?.additionalTrustedDomains ?? []),
						];
					let o = [];
					try {
						const f = c.get(e.$SXb, E.StorageScope.APPLICATION);
						f && (o = JSON.parse(f));
					} catch {}
					return { defaultTrustedDomains: p, trustedDomains: o };
				}
			},
		),
		