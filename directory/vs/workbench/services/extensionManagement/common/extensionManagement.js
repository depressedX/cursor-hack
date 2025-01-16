define(de[157], he([1, 0, 5, 119, 23, 4]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$JQb =
					e.$IQb =
					e.EnablementState =
					e.$HQb =
					e.$GQb =
					e.$FQb =
					e.$EQb =
					e.ExtensionInstallLocation =
					e.$DQb =
						void 0),
				(e.$DQb = (0, t.$Ni)(i.$Hp));
			var C;
			(function (m) {
				(m[(m.Local = 1)] = "Local"),
					(m[(m.Remote = 2)] = "Remote"),
					(m[(m.Web = 3)] = "Web");
			})(C || (e.ExtensionInstallLocation = C = {})),
				(e.$EQb = (0, t.$Mi)("extensionManagementServerService")),
				(e.$FQb = w.$7g
					.asBrowserUri(
						"vs/workbench/services/extensionManagement/common/media/defaultIcon.png",
					)
					.toString(!0)),
				(e.$GQb = (0, t.$Ni)(e.$DQb)),
				(e.$HQb = {
					id: "extensions",
					order: 30,
					title: (0, E.localize)(12289, null),
					type: "object",
				});
			var d;
			(function (m) {
				(m[(m.DisabledByTrustRequirement = 0)] = "DisabledByTrustRequirement"),
					(m[(m.DisabledByExtensionKind = 1)] = "DisabledByExtensionKind"),
					(m[(m.DisabledByEnvironment = 2)] = "DisabledByEnvironment"),
					(m[(m.EnabledByEnvironment = 3)] = "EnabledByEnvironment"),
					(m[(m.DisabledByVirtualWorkspace = 4)] =
						"DisabledByVirtualWorkspace"),
					(m[(m.DisabledByExtensionDependency = 5)] =
						"DisabledByExtensionDependency"),
					(m[(m.DisabledGlobally = 6)] = "DisabledGlobally"),
					(m[(m.DisabledWorkspace = 7)] = "DisabledWorkspace"),
					(m[(m.EnabledGlobally = 8)] = "EnabledGlobally"),
					(m[(m.EnabledWorkspace = 9)] = "EnabledWorkspace");
			})(d || (e.EnablementState = d = {})),
				(e.$IQb = (0, t.$Mi)("extensionEnablementService")),
				(e.$JQb = (0, t.$Mi)("IWebExtensionsScannerService"));
		}),
		define(
			de[3292],
			he([1, 0, 119, 677, 2818, 34, 157]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Tc = void 0);
				let d = class {
					constructor(r, u, a, h, c) {
						r.remoteExtensionManagementServer &&
							(0, w.$ZTc)(
								r.remoteExtensionManagementServer.extensionManagementService,
								u,
								a,
								h,
								c,
							),
							r.webExtensionManagementServer &&
								(0, w.$ZTc)(
									r.webExtensionManagementServer.extensionManagementService,
									u,
									a,
									h,
									c,
								);
					}
				};
				(e.$1Tc = d),
					(e.$1Tc = d =
						Ne(
							[
								j(0, C.$EQb),
								j(1, t.$Ep),
								j(2, i.$1N),
								j(3, t.$Kp),
								j(4, E.$ik),
							],
							d,
						));
			},
		),
		define(
			de[1808],
			he([1, 0, 109, 2786, 6, 24, 37]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$b5c = void 0);
				class d extends i.$1q {
					constructor(r, u, a) {
						super(r),
							(this.t = u),
							(this.u = a),
							(this.s = this.D(new w.$re())),
							(this.onDidChangeProfile = this.s.event),
							this.D(
								u.onDidChangeCurrentProfile((h) => {
									this.u.extUri.isEqual(
										h.previous.extensionsResource,
										h.profile.extensionsResource,
									) || h.join(this.y(h));
								}),
							);
					}
					async n(r, u) {
						if (Array.isArray(u)) {
							const a = r,
								h = u,
								c = [];
							for (const n of h) {
								const g = this.F(
									n.profileLocation,
									n.applicationScoped ?? n.local?.isApplicationScoped ?? !1,
								);
								(g instanceof Promise ? await g : g) && c.push(n);
							}
							c.length && a.fire(c);
						} else {
							const a = r,
								h = u,
								c = this.F(
									h.profileLocation,
									h.applicationScoped ?? h.local?.isApplicationScoped ?? !1,
								);
							(c instanceof Promise ? await c : c) && a.fire(h);
						}
					}
					async install(r, u) {
						return (
							(u = { ...u, profileLocation: await this.C(u?.profileLocation) }),
							super.install(r, u)
						);
					}
					async installFromLocation(r, u) {
						return super.installFromLocation(r, await this.C(u));
					}
					async installFromGallery(r, u) {
						return (
							(u = { ...u, profileLocation: await this.C(u?.profileLocation) }),
							super.installFromGallery(r, u)
						);
					}
					async installGalleryExtensions(r) {
						const u = [];
						for (const a of r)
							u.push({
								...a,
								options: {
									...a.options,
									profileLocation: await this.C(a.options?.profileLocation),
								},
							});
						return super.installGalleryExtensions(u);
					}
					async uninstall(r, u) {
						return (
							(u = { ...u, profileLocation: await this.C(u?.profileLocation) }),
							super.uninstall(r, u)
						);
					}
					async uninstallExtensions(r) {
						const u = [];
						for (const { extension: a, options: h } of r)
							u.push({
								extension: a,
								options: {
									...h,
									profileLocation: await this.C(h?.profileLocation),
								},
							});
						return super.uninstallExtensions(u);
					}
					async getInstalled(r = null, u, a) {
						return super.getInstalled(r, await this.C(u), a);
					}
					async updateMetadata(r, u, a) {
						return super.updateMetadata(r, u, await this.C(a));
					}
					async toggleAppliationScope(r, u) {
						return super.toggleAppliationScope(r, await this.C(u));
					}
					async copyExtensions(r, u) {
						return super.copyExtensions(await this.C(r), await this.C(u));
					}
					async y(r) {
						const u = await this.C(r.previous.extensionsResource),
							a = await this.C(r.profile.extensionsResource);
						if (this.u.extUri.isEqual(u, a)) return;
						const h = await this.z(u, a);
						this.s.fire(h);
					}
					async z(r, u, a) {
						const h = await this.getInstalled(t.ExtensionType.User, r),
							c = await this.getInstalled(t.ExtensionType.User, u);
						if (a?.length) {
							const n = [];
							for (const g of h)
								a.some((p) => t.$Gn.equals(g.identifier.id, p)) &&
									!c.some((p) =>
										t.$Gn.equals(p.identifier.id, g.identifier.id),
									) &&
									n.push(g.identifier);
							n.length && (await this.installExtensionsFromProfile(n, r, u));
						}
						return (0, E.$Ib)(h, c, (n, g) =>
							(0, C.$Ff)(
								`${t.$Gn.toKey(n.identifier.id)}@${n.manifest.version}`,
								`${t.$Gn.toKey(g.identifier.id)}@${g.manifest.version}`,
							),
						);
					}
					async C(r) {
						return r ?? this.t.currentProfile.extensionsResource;
					}
				}
				e.$b5c = d;
			},
		),
		define(
			de[3293],
			he([1, 0, 20, 230, 119, 2897, 22, 62, 23]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let r = class extends E.$R5c {
					constructor(a, h, c) {
						super(a, h), (this.g = c.getChannel("extensionTipsService"));
					}
					getConfigBasedTips(a) {
						return a.scheme === m.Schemas.file
							? this.g.call("getConfigBasedTips", [a])
							: super.getConfigBasedTips(a);
					}
					getImportantExecutableBasedTips() {
						return this.g.call("getImportantExecutableBasedTips");
					}
					getOtherExecutableBasedTips() {
						return this.g.call("getOtherExecutableBasedTips");
					}
				};
				(r = Ne([j(0, C.$ll), j(1, d.$Bk), j(2, i.$Vbd)], r)),
					(0, t.$lK)(w.$Lp, r, t.InstantiationType.Delayed);
			},
		),
		