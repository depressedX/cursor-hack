import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../../nls.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/request/common/request.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../environment/common/environmentService.js';
import '../../extensions/common/extensions.js';
import '../../host/browser/host.js';
import '../common/userDataProfile.js';
define(
			de[3788],
			he([
				1, 0, 33, 29, 3, 82, 4, 57, 20, 34, 62, 327, 32, 129, 25, 78, 53, 87,
				133,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*errors*/,
 w /*lifecycle*/,
 E /*objects*/,
 C /*nls*/,
 d /*dialogs*/,
 m /*extensions*/,
 r /*log*/,
 u /*productService*/,
 a /*request*/,
 h /*telemetry*/,
 c /*userDataProfile*/,
 n /*workspace*/,
 g /*environmentService*/,
 p /*extensions*/,
 o /*host*/,
 f /*userDataProfile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mxc = void 0);
				let b = class extends w.$1c {
					constructor(l, y, $, v, S, I, T, P, k, L, D) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.r = D),
							this.D(l.onDidChangeProfiles((M) => this.s(M))),
							this.D(l.onDidResetWorkspaces(() => this.t())),
							this.D(y.onDidChangeCurrentProfile((M) => this.u(M))),
							this.D(
								l.onDidChangeProfiles((M) => {
									const N = M.updated.find(
										(A) => this.b.currentProfile.id === A.id,
									);
									N && this.w(N, (0, C.localize)(12953, null));
								}),
							);
					}
					s(l) {
						if (l.removed.some((y) => y.id === this.b.currentProfile.id)) {
							this.w(this.a.defaultProfile, (0, C.localize)(12954, null));
							return;
						}
					}
					t() {
						if (!this.b.currentProfile.isDefault) {
							this.w(this.a.defaultProfile, (0, C.localize)(12955, null));
							return;
						}
					}
					async u(l) {
						l.previous.isTransient && (await this.a.cleanUpTransientProfiles());
					}
					async createProfile(l, y) {
						return this.a.createNamedProfile(l, y);
					}
					async createAndEnterProfile(l, y) {
						const $ = await this.a.createNamedProfile(
							l,
							y,
							(0, n.$1i)(this.g.getWorkspace()),
						);
						return (
							await this.w($),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "createAndEnterProfile",
							}),
							$
						);
					}
					async createAndEnterTransientProfile() {
						const l = await this.a.createTransientProfile(
							(0, n.$1i)(this.g.getWorkspace()),
						);
						return (
							await this.w(l),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "createAndEnterTransientProfile",
							}),
							l
						);
					}
					async updateProfile(l, y) {
						if (!this.a.profiles.some((v) => v.id === l.id))
							throw new Error(`Profile ${l.name} does not exist`);
						if (l.isDefault) throw new Error((0, C.localize)(12956, null));
						const $ = await this.a.updateProfile(l, y);
						return (
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "updateProfile",
							}),
							$
						);
					}
					async removeProfile(l) {
						if (!this.a.profiles.some((y) => y.id === l.id))
							throw new Error(`Profile ${l.name} does not exist`);
						if (l.isDefault) throw new Error((0, C.localize)(12957, null));
						await this.a.removeProfile(l),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "removeProfile",
							});
					}
					async switchProfile(l) {
						const y = (0, n.$1i)(this.g.getWorkspace());
						if (!this.a.profiles.some(($) => $.id === l.id))
							throw new Error(`Profile ${l.name} does not exist`);
						this.b.currentProfile.id !== l.id &&
							(await this.a.setProfileForWorkspace(y, l),
							await this.w(l),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "switchProfile",
							}));
					}
					async getBuiltinProfileTemplates() {
						if (this.n.profileTemplatesUrl)
							try {
								const l = await this.q.request(
									{ type: "GET", url: this.n.profileTemplatesUrl },
									t.CancellationToken.None,
								);
								if (l.res.statusCode === 200)
									return (await (0, a.$Gq)(l)) || [];
								this.r.error(
									"Could not get profile templates.",
									l.res.statusCode,
								);
							} catch (l) {
								this.r.error(l);
							}
						return [];
					}
					async w(l, y) {
						const $ = !!this.j.remoteAuthority,
							v =
								this.b.currentProfile.id !== l.id ||
								!(0, E.$zo)(
									this.b.currentProfile.useDefaultFlags,
									l.useDefaultFlags,
								);
						if (
							v &&
							!$ &&
							!(await this.h.stopExtensionHosts((0, C.localize)(12958, null)))
						)
							throw (
								(this.a.profiles.some(
									(S) => S.id === this.b.currentProfile.id,
								) &&
									(await this.a.setProfileForWorkspace(
										(0, n.$1i)(this.g.getWorkspace()),
										this.b.currentProfile,
									)),
								new i.$9())
							);
						if ((await this.b.updateCurrentProfile(l), v))
							if ($) {
								const { confirmed: S } = await this.f.confirm({
									message: y ?? (0, C.localize)(12959, null),
									primaryButton: (0, C.localize)(12960, null),
								});
								S && (await this.c.reload());
							} else await this.h.startExtensionHosts();
					}
				};
				(e.$mxc = b),
					(e.$mxc = b =
						Ne(
							[
								j(0, c.$Xl),
								j(1, f.$P8),
								j(2, o.$asb),
								j(3, d.$GO),
								j(4, n.$Vi),
								j(5, p.$q2),
								j(6, g.$r8),
								j(7, h.$km),
								j(8, u.$Bk),
								j(9, a.$Aq),
								j(10, r.$ik),
							],
							b,
						)),
					(0, m.$lK)(f.$Q8, b, m.InstantiationType.Eager);
			},
		),
		