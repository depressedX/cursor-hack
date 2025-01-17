import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../platform/files/common/diskFileSystemProviderClient.js';
define(
			de[3588],
			he([1, 0, 29, 3, 23, 12, 1614]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Web = e.$Veb = void 0),
					(e.$Veb = "remoteFilesystem");
				class d extends C.$Ueb {
					static register(r, u, a) {
						const h = r.getConnection();
						if (!h) return i.$1c.None;
						const c = new i.$Zc(),
							n = (async () => {
								try {
									const g = await r.getRawEnvironment();
									g
										? u.registerProvider(
												w.Schemas.vscodeRemote,
												c.add(new d(g, h)),
											)
										: a.error(
												"Cannot register remote filesystem provider. Remote environment doesnot exist.",
											);
								} catch (g) {
									a.error(
										"Cannot register remote filesystem provider. Error while fetching remote environment.",
										(0, t.$bb)(g),
									);
								}
							})();
						return (
							c.add(
								u.onWillActivateFileSystemProvider((g) => {
									g.scheme === w.Schemas.vscodeRemote && g.join(n);
								}),
							),
							c
						);
					}
					constructor(r, u) {
						super(u.getChannel(e.$Veb), {
							pathCaseSensitive: r.os === E.OperatingSystem.Linux,
						});
					}
				}
				e.$Web = d;
			},
		),
		