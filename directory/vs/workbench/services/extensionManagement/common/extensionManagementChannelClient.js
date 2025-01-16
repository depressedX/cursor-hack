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
		