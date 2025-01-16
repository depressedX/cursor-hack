define(
			de[3571],
			he([
				1, 0, 9, 4, 11, 31, 52, 63, 30, 465, 55, 3276, 1018, 3278, 3279, 99, 81,
				224, 1292, 20,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class s extends w.$3X {
					constructor() {
						super({
							id: "workbench.action.url.openUrl",
							title: (0, i.localize2)(11126, "Open URL"),
							category: g.$ck.Developer,
							f1: !0,
						});
					}
					async run($) {
						const v = $.get(d.$DJ),
							S = $.get(r.$2rb);
						return v
							.input({ prompt: (0, i.localize)(11124, null) })
							.then((I) => {
								if (I) {
									const T = t.URI.parse(I);
									S.open(T, { originalUrl: I });
								}
							});
					}
				}
				(0, w.$4X)(s),
					E.$fk.registerCommand(h.$UXb),
					w.$ZX.appendMenuItem(w.$XX.CommandPalette, {
						command: { id: h.$UXb.id, title: h.$UXb.description.description },
					}),
					m.$Io
						.as(u.Extensions.Workbench)
						.registerWorkbenchContribution(n.$tSc, C.LifecyclePhase.Restored),
					(0, u.$s6)(c.$sSc.ID, c.$sSc, u.WorkbenchPhase.BlockRestore),
					(0, u.$s6)(
						a.ExternalUriResolverContribution.ID,
						a.ExternalUriResolverContribution,
						u.WorkbenchPhase.BlockRestore,
					),
					m.$Io
						.as(p.$No.Configuration)
						.registerConfiguration({
							...o.$v6,
							properties: {
								"workbench.trustedDomains.promptInTrustedWorkspace": {
									scope: p.ConfigurationScope.APPLICATION,
									type: "boolean",
									default: !1,
									description: (0, i.localize)(11125, null),
								},
							},
						}),
					(0, b.$lK)(f.$ZXb, f.$1Xb, b.InstantiationType.Delayed);
			},
		),
		