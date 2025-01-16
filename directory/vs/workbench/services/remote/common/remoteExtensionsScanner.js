define(
			de[3790],
			he([1, 0, 143, 951, 12, 9, 133, 1044, 78, 34, 20, 704, 157]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
				let c = class {
					constructor(g, p, o, f, b, s, l) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.f = s),
							(this.g = l);
					}
					whenExtensionsReady() {
						return this.h((g) => g.call("whenExtensionsReady"), void 0);
					}
					async scanExtensions() {
						try {
							const g = await this.e.getExtensionIdProvidingCurrentLocale();
							return await this.h(async (p) => {
								const o = this.c.currentProfile.isDefault
										? void 0
										: (await this.d.getRemoteProfile(this.c.currentProfile))
												.extensionsResource,
									f = await p.call("scanExtensions", [
										w.$z,
										o,
										this.f.getInstalledWorkspaceExtensionLocations(),
										this.b.extensionDevelopmentLocationURI,
										g,
									]);
								return (
									f.forEach((b) => {
										b.extensionLocation = E.URI.revive(b.extensionLocation);
									}),
									f
								);
							}, []);
						} catch (g) {
							return this.g.error(g), [];
						}
					}
					h(g, p) {
						const o = this.a.getConnection();
						return o ? o.withChannel(i.$cfb, (f) => g(f)) : Promise.resolve(p);
					}
				};
				(c = Ne(
					[
						j(0, t.$$m),
						j(1, m.$r8),
						j(2, C.$P8),
						j(3, d.$nxc),
						j(4, a.$8Sb),
						j(5, h.$GQb),
						j(6, r.$ik),
					],
					c,
				)),
					(0, u.$lK)(i.$bfb, c, u.InstantiationType.Delayed);
			},
		),
		