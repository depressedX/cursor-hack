import '../../../../../require.js';
import '../../../../../exports.js';
import './remoteAgentService.js';
import '../../../../platform/remote/common/remoteExtensionsScanner.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../userDataProfile/common/remoteUserDataProfiles.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../localization/common/locale.js';
import '../../extensionManagement/common/extensionManagement.js';
define(
			de[3790],
			he([1, 0, 143, 951, 12, 9, 133, 1044, 78, 34, 20, 704, 157]),
			function (ce /*require*/,
 e /*exports*/,
 t /*remoteAgentService*/,
 i /*remoteExtensionsScanner*/,
 w /*platform*/,
 E /*uri*/,
 C /*userDataProfile*/,
 d /*remoteUserDataProfiles*/,
 m /*environmentService*/,
 r /*log*/,
 u /*extensions*/,
 a /*locale*/,
 h /*extensionManagement*/) {
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
		)
