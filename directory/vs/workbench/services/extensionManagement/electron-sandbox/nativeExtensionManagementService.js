import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/network.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/download/common/download.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/uuid.js';
import '../common/extensionManagementChannelClient.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../environment/electron-sandbox/environmentService.js';
define(
			de[3781],
			he([1, 0, 68, 133, 19, 23, 34, 665, 22, 47, 1808, 109, 151]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rdd = void 0);
				let c = class extends u.$b5c {
					constructor(g, p, o, f, b, s, l) {
						super(g, p, o),
							(this.G = f),
							(this.H = b),
							(this.I = s),
							(this.J = l);
					}
					F(g, p) {
						return (
							p ||
							this.u.extUri.isEqual(this.t.currentProfile.extensionsResource, g)
						);
					}
					async install(g, p) {
						const { location: o, cleanup: f } = await this.M(g);
						try {
							return await super.install(o, p);
						} finally {
							await f();
						}
					}
					async M(g) {
						if (g.scheme === E.Schemas.file)
							return { location: g, async cleanup() {} };
						this.J.trace("Downloading extension from", g.toString());
						const p = (0, w.$nh)(
							this.I.extensionsDownloadLocation,
							(0, r.$9g)(),
						);
						return (
							await this.H.download(g, p),
							this.J.info("Downloaded extension to", p.toString()),
							{
								location: p,
								cleanup: async () => {
									try {
										await this.G.del(p);
									} catch (f) {
										this.J.error(f);
									}
								},
							}
						);
					}
					async z(g, p, o) {
						if (this.I.remoteAuthority) {
							const b = (await this.getInstalled(a.ExtensionType.User, g)).find(
								(s) => (0, a.$Mn)(s.manifest, this.I.remoteAuthority),
							);
							b && (o || (o = []), o.push(new a.$Gn(b.identifier.id)));
						}
						return super.z(g, p, o);
					}
				};
				(e.$Rdd = c),
					(e.$Rdd = c =
						Ne(
							[
								j(1, i.$P8),
								j(2, t.$Vl),
								j(3, m.$ll),
								j(4, d.$gp),
								j(5, h.$ucd),
								j(6, C.$ik),
							],
							c,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	