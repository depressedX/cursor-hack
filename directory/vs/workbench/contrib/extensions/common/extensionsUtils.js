define(
			de[1829],
			he([1, 0, 4, 6, 29, 3, 119, 157, 314, 52, 5, 154, 40]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NGc = void 0),
					(e.$OGc = g);
				let c = class extends E.$1c {
					constructor(f, b, s, l, y) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = y),
							this.D(l.onDidShutdown(() => this.dispose())),
							this.D(
								f.invokeFunction(n)(($) => {
									Promise.all($.map((v) => this.g(v))).then(void 0, w.$4);
								}),
							);
					}
					g(f) {
						return this.a.invokeFunction(g).then((b) => {
							const s = b.filter((y) => p(this.c, y)),
								l = s.find((y) => (0, a.$7p)(y.identifier, f));
							if (l && l.globallyEnabled) {
								const y = s.filter(
									($) => !(0, a.$7p)($.identifier, f) && $.globallyEnabled,
								);
								if (y.length) return this.h(l, y);
							}
						});
					}
					h(f, b) {
						const s = (l) => {
							l &&
								this.b.setEnablement(
									b.map((y) => y.local),
									d.EnablementState.DisabledGlobally,
								);
						};
						this.f.prompt(
							h.Severity.Info,
							(0, t.localize)(
								6592,
								null,
								b.map((l) => `'${l.local.manifest.displayName}'`).join(", "),
							),
							[
								{ label: (0, t.localize)(6593, null), run: () => s(!0) },
								{ label: (0, t.localize)(6594, null), run: () => s(!1) },
							],
						);
					}
				};
				(e.$NGc = c),
					(e.$NGc = c =
						Ne(
							[
								j(0, u.$Li),
								j(1, d.$IQb),
								j(2, m.$9Qb),
								j(3, r.$n6),
								j(4, h.$4N),
							],
							c,
						));
				function n(o) {
					const f = o.get(C.$Hp),
						b = o.get(d.$IQb),
						s = i.Event.chain(f.onDidInstallExtensions, (l) =>
							l
								.filter((y) =>
									y.some(
										({ operation: $ }) => $ === C.InstallOperation.Install,
									),
								)
								.map((y) => y.map(({ identifier: $ }) => $)),
						);
					return i.Event.debounce(
						i.Event.any(
							i.Event.any(
								s,
								i.Event.map(f.onDidUninstallExtension, (l) => [l.identifier]),
							),
							i.Event.map(b.onEnablementChanged, (l) =>
								l.map((y) => y.identifier),
							),
						),
						(l, y) => {
							l = l || [];
							for (const $ of y) l.some((v) => !(0, a.$7p)(v, $)) && l.push($);
							return l;
						},
					);
				}
				async function g(o) {
					const f = o.get(C.$Hp),
						b = o.get(d.$IQb);
					return (await f.getInstalled()).map((l) => ({
						identifier: l.identifier,
						local: l,
						globallyEnabled: b.isEnabled(l),
					}));
				}
				function p(o, f) {
					const b = f.local.manifest.categories;
					return (
						(b && b.indexOf("Keymaps") !== -1) ||
						o
							.getKeymapRecommendations()
							.some((s) => (0, a.$7p)({ id: s }, f.local.identifier))
					);
				}
			},
		),
		