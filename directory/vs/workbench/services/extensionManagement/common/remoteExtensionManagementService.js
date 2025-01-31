import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../userDataProfile/common/remoteUserDataProfiles.js';
import './extensionManagementChannelClient.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
define(
			de[3789],
			he([1, 0, 68, 1044, 1808, 133, 129]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uriIdentity*/,
 i /*remoteUserDataProfiles*/,
 w /*extensionManagementChannelClient*/,
 E /*userDataProfile*/,
 C /*userDataProfile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c5c = void 0);
				let d = class extends w.$b5c {
					constructor(r, u, a, h, c) {
						super(r, u, c), (this.G = a), (this.H = h);
					}
					async F(r, u) {
						if (u || (!r && this.t.currentProfile.isDefault)) return !0;
						const a = await this.H.getRemoteProfile(this.t.currentProfile);
						return !!this.u.extUri.isEqual(a.extensionsResource, r);
					}
					async C(r) {
						if (!r && this.t.currentProfile.isDefault) return;
						r = await super.C(r);
						let u = this.G.profiles.find((a) =>
							this.u.extUri.isEqual(a.extensionsResource, r),
						);
						return (
							u
								? (u = await this.H.getRemoteProfile(u))
								: (u = (await this.H.getRemoteProfiles()).find((a) =>
										this.u.extUri.isEqual(a.extensionsResource, r),
									)),
							u?.extensionsResource
						);
					}
					async z(r, u, a) {
						const h = await this.H.getRemoteProfiles(),
							c = h.find((g) => this.u.extUri.isEqual(g.extensionsResource, r)),
							n = h.find((g) => this.u.extUri.isEqual(g.extensionsResource, u));
						return c?.id === n?.id
							? { added: [], removed: [] }
							: super.z(r, u, a);
					}
				};
				(e.$c5c = d),
					(e.$c5c = d =
						Ne([j(1, E.$P8), j(2, C.$Xl), j(3, i.$nxc), j(4, t.$Vl)], d));
			},
		)
