import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../remote/common/remoteAgentService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/log/common/log.js';
import './userDataProfile.js';
import '../../../../base/common/arrays.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/userDataProfile/common/userDataProfileIpc.js';
define(
			de[1044],
			he([1, 0, 3, 20, 5, 129, 143, 21, 34, 133, 24, 78, 1696]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*extensions*/,
 w /*instantiation*/,
 E /*userDataProfile*/,
 C /*remoteAgentService*/,
 d /*storage*/,
 m /*log*/,
 r /*userDataProfile*/,
 u /*arrays*/,
 a /*environmentService*/,
 h /*userDataProfileIpc*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nxc = void 0);
				const c = "associatedRemoteProfiles";
				e.$nxc = (0, w.$Mi)("IRemoteUserDataProfilesService");
				let n = class extends t.$1c {
					constructor(p, o, f, b, s, l) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.a = this.n());
					}
					async n() {
						const p = this.f.getConnection();
						if (!p) return;
						const o = await this.f.getEnvironment();
						if (!o) return;
						(this.b = new h.$gfb(
							o.profiles.all,
							o.profiles.home,
							p.getChannel("userDataProfiles"),
						)),
							this.D(this.g.onDidChangeProfiles((b) => this.q(b)));
						const f = await this.r(this.h.currentProfile, this.b);
						f.isDefault || this.t([...this.s(), f.id]), this.w();
					}
					async q(p) {
						for (const o of p.removed) {
							const f = this.b?.profiles.find((b) => b.id === o.id);
							f && (await this.b?.removeProfile(f));
						}
					}
					async getRemoteProfiles() {
						if ((await this.a, !this.b))
							throw new Error(
								"Remote profiles service not available in the current window",
							);
						return this.b.profiles;
					}
					async getRemoteProfile(p) {
						if ((await this.a, !this.b))
							throw new Error(
								"Remote profiles service not available in the current window",
							);
						return this.r(p, this.b);
					}
					async r(p, o) {
						if (p.isDefault) return o.defaultProfile;
						let f = o.profiles.find((b) => b.id === p.id);
						return (
							f ||
								((f = await o.createProfile(p.id, p.name, {
									shortName: p.shortName,
									transient: p.isTransient,
									useDefaultFlags: p.useDefaultFlags,
								})),
								this.t([...this.s(), this.h.currentProfile.id])),
							f
						);
					}
					s() {
						return this.c.remoteAuthority
							? (this.u()[this.c.remoteAuthority] ?? [])
							: [];
					}
					t(p) {
						if (this.c.remoteAuthority) {
							const o = this.u();
							(p = (0, u.$Qb)(p)),
								p.length
									? (o[this.c.remoteAuthority] = p)
									: delete o[this.c.remoteAuthority],
								Object.keys(o).length
									? this.j.store(
											c,
											JSON.stringify(o),
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										)
									: this.j.remove(c, d.StorageScope.APPLICATION);
						}
					}
					u() {
						if (this.c.remoteAuthority) {
							const p = this.j.get(c, d.StorageScope.APPLICATION);
							try {
								return p ? JSON.parse(p) : {};
							} catch (o) {
								this.m.error(o);
							}
						}
						return {};
					}
					async w() {
						const p = [];
						for (const o of this.s()) {
							const f = this.b?.profiles.find((s) => s.id === o);
							if (!f) continue;
							const b = this.g.profiles.find((s) => s.id === o);
							if (b) {
								(b.name !== f.name || b.shortName !== f.shortName) &&
									(await this.b?.updateProfile(f, {
										name: b.name,
										shortName: b.shortName,
									})),
									p.push(o);
								continue;
							}
							f && (await this.b?.removeProfile(f));
						}
						this.t(p);
					}
				};
				(n = Ne(
					[
						j(0, a.$r8),
						j(1, C.$$m),
						j(2, E.$Xl),
						j(3, r.$P8),
						j(4, d.$lq),
						j(5, m.$ik),
					],
					n,
				)),
					(0, i.$lK)(e.$nxc, n, i.InstantiationType.Delayed);
			},
		)
