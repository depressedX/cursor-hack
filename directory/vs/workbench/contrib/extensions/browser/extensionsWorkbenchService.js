define(
			de[4077],
			he([
				1, 0, 4, 464, 6, 24, 15, 29, 3, 1504, 32, 119, 157, 154, 5, 10, 87, 9,
				141, 18, 465, 1243, 34, 84, 40, 19, 33, 21, 22, 109, 61, 62, 23, 957,
				150, 8, 28, 384, 53, 12, 672, 704, 269, 52, 782, 133, 75, 57, 415, 772,
				68, 25, 1781, 30, 81,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
			) {
				"use strict";
				var te;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$STc = e.$RTc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(S = mt(S));
				let Q = class {
					constructor(ae, pe, $e, ye, ue, fe, me, ve, ge, be, Ce) {
						(this.b = ae),
							(this.f = pe),
							(this.server = $e),
							(this.local = ye),
							(this.g = ue),
							(this.h = fe),
							(this.j = me),
							(this.k = ve),
							(this.l = ge),
							(this.n = be),
							(this.o = Ce),
							(this.enablementState = h.EnablementState.EnabledGlobally),
							(this.a = new Map()),
							(this.isMalicious = !1);
					}
					get resourceExtension() {
						if (this.h) return this.h.resourceExtension;
						if (this.local?.isWorkspaceScoped)
							return {
								type: "resource",
								identifier: this.local.identifier,
								location: this.local.location,
								manifest: this.local.manifest,
								changelogUri: this.local.changelogUrl,
								readmeUri: this.local.readmeUrl,
							};
					}
					get gallery() {
						return this.g;
					}
					set gallery(ae) {
						(this.g = ae), this.a.clear();
					}
					get type() {
						return this.local ? this.local.type : k.ExtensionType.User;
					}
					get isBuiltin() {
						return this.local ? this.local.isBuiltin : !1;
					}
					get isWorkspaceScoped() {
						return this.local
							? this.local.isWorkspaceScoped
							: this.h
								? this.h.isWorkspaceScoped
								: !1;
					}
					get name() {
						return this.gallery ? this.gallery.name : (this.y()?.name ?? "");
					}
					get displayName() {
						return this.gallery
							? this.gallery.displayName || this.gallery.name
							: (this.y()?.displayName ?? this.name);
					}
					get identifier() {
						return this.gallery
							? this.gallery.identifier
							: this.resourceExtension
								? this.resourceExtension.identifier
								: this.local.identifier;
					}
					get uuid() {
						return this.gallery
							? this.gallery.identifier.uuid
							: this.local?.identifier.uuid;
					}
					get publisher() {
						return this.gallery
							? this.gallery.publisher
							: (this.y()?.publisher ?? "");
					}
					get publisherDisplayName() {
						return this.gallery
							? this.gallery.publisherDisplayName || this.gallery.publisher
							: this.local?.publisherDisplayName
								? this.local.publisherDisplayName
								: this.publisher;
					}
					get publisherUrl() {
						if (!(!this.o.extensionsGallery || !this.gallery))
							return S.$nh(
								o.URI.parse(this.o.extensionsGallery.publisherUrl),
								this.publisher,
							);
					}
					get publisherDomain() {
						return this.gallery?.publisherDomain;
					}
					get publisherSponsorLink() {
						return this.gallery?.publisherSponsorLink
							? o.URI.parse(this.gallery.publisherSponsorLink)
							: void 0;
					}
					get version() {
						return this.local
							? this.local.manifest.version
							: this.latestVersion;
					}
					get pinned() {
						return !!this.local?.pinned;
					}
					get latestVersion() {
						if (!this.gallery) return this.y()?.version ?? "";
						const ae = this.gallery.version;
						if ((0, V.$Jq)((0, c.$_p)(this.publisher, this.name))) {
							const pe = (0, V.$Kq)((0, c.$_p)(this.publisher, this.name));
							if (pe) return i.gt(ae, pe) ? pe : ae;
						}
						return ae;
					}
					get description() {
						return this.gallery
							? this.gallery.description
							: (this.y()?.description ?? "");
					}
					get url() {
						if (!(!this.o.extensionsGallery || !this.gallery))
							return `${this.o.extensionsGallery.itemUrl}?itemName=${this.publisher}.${this.name}`;
					}
					get iconUrl() {
						return this.t || this.s || this.q || this.v;
					}
					get iconUrlFallback() {
						return this.u || this.s || this.q || this.v;
					}
					get q() {
						return this.local && this.local.manifest.icon
							? M.$7g
									.uriToBrowserUri(
										S.$nh(this.local.location, this.local.manifest.icon),
									)
									.toString(!0)
							: null;
					}
					get s() {
						return this.resourceExtension?.manifest.icon
							? M.$7g
									.uriToBrowserUri(
										S.$nh(
											this.resourceExtension.location,
											this.resourceExtension.manifest.icon,
										),
									)
									.toString(!0)
							: null;
					}
					get t() {
						return this.gallery?.assets.icon
							? this.gallery.assets.icon.uri
							: null;
					}
					get u() {
						return this.gallery?.assets.icon
							? this.gallery.assets.icon.fallbackUri
							: null;
					}
					get v() {
						if (
							this.type === k.ExtensionType.System &&
							this.local &&
							this.local.manifest &&
							this.local.manifest.contributes
						) {
							if (
								Array.isArray(this.local.manifest.contributes.themes) &&
								this.local.manifest.contributes.themes.length
							)
								return M.$7g
									.asBrowserUri(
										"vs/workbench/contrib/extensions/browser/media/theme-icon.png",
									)
									.toString(!0);
							if (
								Array.isArray(this.local.manifest.contributes.grammars) &&
								this.local.manifest.contributes.grammars.length
							)
								return M.$7g
									.asBrowserUri(
										"vs/workbench/contrib/extensions/browser/media/language-icon.svg",
									)
									.toString(!0);
						}
						return h.$FQb;
					}
					get repository() {
						return this.gallery && this.gallery.assets.repository
							? this.gallery.assets.repository.uri
							: void 0;
					}
					get licenseUrl() {
						return this.gallery && this.gallery.assets.license
							? this.gallery.assets.license.uri
							: void 0;
					}
					get supportUrl() {
						return this.gallery && this.gallery.supportLink
							? this.gallery.supportLink
							: void 0;
					}
					get state() {
						return this.b(this);
					}
					get installCount() {
						return this.gallery ? this.gallery.installCount : void 0;
					}
					get rating() {
						return this.gallery ? this.gallery.rating : void 0;
					}
					get ratingCount() {
						return this.gallery ? this.gallery.ratingCount : void 0;
					}
					get outdated() {
						try {
							if (
								!this.gallery ||
								!this.local ||
								(this.type === k.ExtensionType.System &&
									this.o.quality === "stable") ||
								(!this.local.preRelease &&
									this.gallery.properties.isPreReleaseVersion)
							)
								return !1;
							if (
								i.gt(this.latestVersion, this.version) ||
								!(0, V.$Lq)({
									name: this.name,
									version: this.version,
									publisher: this.publisher,
								})
							)
								return !0;
							try {
								let ae =
									this.gallery?.properties.engine ??
									this.local.manifest.engines.vscode;
								if (
									ae &&
									ae.length >= 2 &&
									!(0, X.$yq)(ae, this.o.vscodeVersion, this.o.date)
								)
									return !0;
							} catch {}
							if (this.outdatedTargetPlatform) return !0;
						} catch {}
						return !1;
					}
					get outdatedTargetPlatform() {
						return (
							!!this.local &&
							!!this.gallery &&
							![k.TargetPlatform.UNDEFINED, k.TargetPlatform.WEB].includes(
								this.local.targetPlatform,
							) &&
							this.gallery.properties.targetPlatform !== k.TargetPlatform.WEB &&
							this.local.targetPlatform !==
								this.gallery.properties.targetPlatform &&
							i.eq(this.latestVersion, this.version)
						);
					}
					get runtimeState() {
						return this.f(this);
					}
					get telemetryData() {
						const { local: ae, gallery: pe } = this;
						return pe ? (0, c.$cq)(pe) : ae ? (0, c.$bq)(ae) : {};
					}
					get preview() {
						return this.local?.manifest.preview ?? this.gallery?.preview ?? !1;
					}
					get preRelease() {
						return !!this.local?.preRelease;
					}
					get isPreReleaseVersion() {
						return this.local
							? this.local.isPreReleaseVersion
							: !!this.gallery?.properties.isPreReleaseVersion;
					}
					get hasPreReleaseVersion() {
						return (0, V.$Jq)((0, c.$_p)(this.publisher, this.name))
							? !1
							: !!this.gallery?.hasPreReleaseVersion ||
									!!this.local?.hasPreReleaseVersion ||
									!!this.w;
					}
					get hasReleaseVersion() {
						return (
							!!this.resourceExtension || !!this.gallery?.hasReleaseVersion
						);
					}
					x() {
						return this.local && !this.outdated ? this.local : void 0;
					}
					async getManifest(ae) {
						const pe = this.x();
						return pe
							? pe.manifest
							: this.gallery
								? this.getGalleryManifest(ae)
								: this.resourceExtension
									? this.resourceExtension.manifest
									: null;
					}
					async getGalleryManifest(ae = I.CancellationToken.None) {
						if (this.gallery) {
							let pe = this.a.get("manifest");
							return (
								pe ||
									(this.gallery.assets.manifest
										? this.a.set(
												"manifest",
												(pe = this.j
													.getManifest(this.gallery, ae)
													.catch(($e) => {
														throw (this.a.delete("manifest"), $e);
													})),
											)
										: this.l.error(t.localize(6527, null), this.identifier.id)),
								pe
							);
						}
						return null;
					}
					hasReadme() {
						return (this.local && this.local.readmeUrl) ||
							(this.gallery && this.gallery.assets.readme) ||
							this.resourceExtension?.readmeUri
							? !0
							: this.type === k.ExtensionType.System;
					}
					async getReadme(ae) {
						const pe = this.x();
						if (pe?.readmeUrl)
							return (await this.n.readFile(pe.readmeUrl)).value.toString();
						if (this.gallery) {
							if (this.gallery.assets.readme)
								return this.j.getReadme(this.gallery, ae);
							this.k.publicLog("extensions:NotFoundReadMe", this.telemetryData);
						}
						return this.type === k.ExtensionType.System
							? Promise.resolve(`# ${this.displayName || this.name}
**Notice:** This extension is bundled with Visual Studio Code. It can be disabled but not uninstalled.
## Features
${this.description}
`)
							: this.resourceExtension?.readmeUri
								? (
										await this.n.readFile(this.resourceExtension?.readmeUri)
									).value.toString()
								: Promise.reject(new Error("not available"));
					}
					hasChangelog() {
						return (this.local && this.local.changelogUrl) ||
							(this.gallery && this.gallery.assets.changelog)
							? !0
							: this.type === k.ExtensionType.System;
					}
					async getChangelog(ae) {
						const pe = this.x();
						return pe?.changelogUrl
							? (await this.n.readFile(pe.changelogUrl)).value.toString()
							: this.gallery?.assets.changelog
								? this.j.getChangelog(this.gallery, ae)
								: this.type === k.ExtensionType.System
									? Promise.resolve(
											`Please check the [VS Code Release Notes](command:${ne.$PTc}) for changes to the built-in extensions.`,
										)
									: Promise.reject(new Error("not available"));
					}
					get categories() {
						const { local: ae, gallery: pe, resourceExtension: $e } = this;
						return ae && ae.manifest.categories && !this.outdated
							? ae.manifest.categories
							: pe
								? pe.categories
								: $e
									? ($e.manifest.categories ?? [])
									: [];
					}
					get tags() {
						const { gallery: ae } = this;
						return ae ? ae.tags.filter((pe) => !pe.startsWith("_")) : [];
					}
					get dependencies() {
						const { local: ae, gallery: pe, resourceExtension: $e } = this;
						return ae && ae.manifest.extensionDependencies && !this.outdated
							? ae.manifest.extensionDependencies
							: pe
								? pe.properties.dependencies || []
								: $e
									? $e.manifest.extensionDependencies || []
									: [];
					}
					get extensionPack() {
						const { local: ae, gallery: pe, resourceExtension: $e } = this;
						return ae && ae.manifest.extensionPack && !this.outdated
							? ae.manifest.extensionPack
							: pe
								? pe.properties.extensionPack || []
								: $e
									? $e.manifest.extensionPack || []
									: [];
					}
					setExtensionsControlManifest(ae) {
						(this.isMalicious = ae.malicious.some((pe) =>
							(0, c.$7p)(this.identifier, pe),
						)),
							(this.deprecationInfo = ae.deprecated
								? ae.deprecated[this.identifier.id.toLowerCase()]
								: void 0),
							(this.w = ae?.extensionsEnabledWithPreRelease?.includes(
								this.identifier.id.toLowerCase(),
							));
					}
					y() {
						return this.local
							? this.local.manifest
							: this.resourceExtension
								? this.resourceExtension.manifest
								: null;
					}
				};
				(e.$RTc = Q),
					(e.$RTc = Q =
						Ne(
							[
								j(6, a.$Ep),
								j(7, u.$km),
								j(8, y.$ik),
								j(9, P.$ll),
								j(10, D.$Bk),
							],
							Q,
						));
				const Z = "extensions.autoUpdate",
					se = "extensions.donotAutoUpdate";
				let re = class extends m.$1c {
					get onChange() {
						return this.a.event;
					}
					get onReset() {
						return this.b.event;
					}
					constructor(ae, pe, $e, ye, ue, fe, me, ve, ge, be) {
						super(),
							(this.server = ae),
							(this.j = pe),
							(this.n = $e),
							(this.q = ye),
							(this.s = ue),
							(this.t = fe),
							(this.u = me),
							(this.w = ve),
							(this.y = ge),
							(this.z = be),
							(this.a = this.D(new w.$re())),
							(this.b = this.D(new w.$re())),
							(this.f = []),
							(this.g = []),
							(this.h = []),
							this.D(
								ae.extensionManagementService.onInstallExtension((Ce) =>
									this.I(Ce),
								),
							),
							this.D(
								ae.extensionManagementService.onDidInstallExtensions((Ce) =>
									this.M(Ce),
								),
							),
							this.D(
								ae.extensionManagementService.onUninstallExtension((Ce) =>
									this.P(Ce.identifier),
								),
							),
							this.D(
								ae.extensionManagementService.onDidUninstallExtension((Ce) =>
									this.Q(Ce),
								),
							),
							this.D(
								ae.extensionManagementService.onDidUpdateExtensionMetadata(
									(Ce) => this.N(Ce.local),
								),
							),
							this.D(
								ae.extensionManagementService.onDidChangeProfile(() =>
									this.L(),
								),
							),
							this.D(fe.onEnablementChanged((Ce) => this.R(Ce))),
							this.D(
								w.Event.any(
									this.onChange,
									this.onReset,
								)(() => (this.C = void 0)),
							),
							this.q &&
								(this.D(
									this.u.onInstallExtension((Ce) => {
										Ce.workspaceScoped && this.I(Ce);
									}),
								),
								this.D(
									this.u.onDidInstallExtensions((Ce) => {
										const Le = Ce.filter((Fe) => Fe.workspaceScoped);
										Le.length && this.M(Le);
									}),
								),
								this.D(
									this.u.onUninstallExtension((Ce) => {
										Ce.workspaceScoped && this.P(Ce.identifier);
									}),
								),
								this.D(
									this.u.onDidUninstallExtension((Ce) => {
										Ce.workspaceScoped && this.Q(Ce);
									}),
								));
					}
					get local() {
						if (!this.C) {
							this.C = [];
							for (const ae of this.h) this.C.push(ae);
							for (const ae of this.f)
								this.h.some((pe) => (0, c.$7p)(pe.identifier, ae.identifier)) ||
									this.C.push(ae);
						}
						return this.C;
					}
					async queryInstalled(ae) {
						return await this.J(ae), this.a.fire(void 0), this.local;
					}
					async syncInstalledExtensionsWithGallery(ae, pe) {
						const $e = await this.F(ae, pe);
						for (const [ye, ue] of $e)
							ye.local &&
								!ye.local.identifier.uuid &&
								(ye.local = await this.H(ye.local, ue)),
								(!ye.gallery ||
									ye.gallery.version !== ue.version ||
									ye.gallery.properties.targetPlatform !==
										ue.properties.targetPlatform) &&
									((ye.gallery = ue), this.a.fire({ extension: ye }));
					}
					async F(ae, pe) {
						const $e = this.G(ae),
							ye =
								await this.server.extensionManagementService.getTargetPlatform(),
							ue = [],
							fe = [];
						if (
							(await Promise.allSettled(
								$e.map(async ([me, ve]) => {
									me.local &&
										((await this.s.isExtensionCompatible(
											ve,
											me.local.preRelease,
											ye,
											pe,
										))
											? ue.push(ve)
											: fe.push({
													...me.local.identifier,
													preRelease: me.local.preRelease,
												}));
								}),
							),
							fe.length)
						) {
							const me = await this.s.getExtensions(
								fe,
								{
									targetPlatform: ye,
									compatible: !0,
									queryAllVersions: !0,
									productVersion: pe,
								},
								I.CancellationToken.None,
							);
							ue.push(...me);
						}
						return this.G(ue);
					}
					G(ae) {
						const pe = [],
							$e = new Map(),
							ye = new Map();
						for (const ue of ae)
							$e.set(ue.identifier.uuid, ue),
								ye.set(ue.identifier.id.toLowerCase(), ue);
						for (const ue of this.h) {
							if (ue.uuid) {
								const fe = $e.get(ue.uuid);
								if (fe) {
									pe.push([ue, fe]);
									continue;
								}
							}
							if (ue.local?.source !== "resource") {
								const fe = ye.get(ue.identifier.id.toLowerCase());
								fe && pe.push([ue, fe]);
							}
						}
						return pe;
					}
					async H(ae, pe) {
						let $e = !1;
						return (
							ae.manifest.version !== pe.version &&
								(this.y.publicLog2("galleryService:updateMetadata"),
								($e = !!(
									await this.s.getExtensions(
										[{ ...ae.identifier, version: ae.manifest.version }],
										I.CancellationToken.None,
									)
								)[0]?.properties?.isPreReleaseVersion)),
							this.server.extensionManagementService.updateMetadata(
								ae,
								{
									id: pe.identifier.uuid,
									publisherDisplayName: pe.publisherDisplayName,
									publisherId: pe.publisherId,
									isPreReleaseVersion: $e,
								},
								this.w.currentProfile.extensionsResource,
							)
						);
					}
					canInstall(ae) {
						return this.server.extensionManagementService.canInstall(ae);
					}
					I(ae) {
						const { source: pe } = ae;
						if (pe && !o.URI.isUri(pe)) {
							const $e =
								this.h.find((ye) => (0, c.$7p)(ye.identifier, pe.identifier)) ??
								this.z.createInstance(
									Q,
									this.j,
									this.n,
									this.server,
									void 0,
									pe,
									void 0,
								);
							this.f.push($e), this.a.fire({ extension: $e });
						}
					}
					async J(ae) {
						const pe =
								await this.server.extensionManagementService.getExtensionsControlManifest(),
							$e = await this.server.extensionManagementService.getInstalled(
								void 0,
								void 0,
								ae,
							);
						this.q &&
							$e.push(...(await this.u.getInstalledWorkspaceExtensions(!0)));
						const ye = (0, c.$aq)($e, (fe) => fe.identifier).reduce(
								(fe, me) => {
									if (me.length === 1) fe.push(me[0]);
									else {
										let ve, ge, be;
										for (const Le of me)
											Le.isWorkspaceScoped
												? (ve = Le)
												: Le.type === k.ExtensionType.User
													? (ge = Le)
													: (be = Le);
										const Ce = ve ?? ge ?? be;
										Ce && fe.push(Ce);
									}
									return fe;
								},
								[],
							),
							ue = (0, E.$Wb)(this.h, (fe) =>
								fe.local ? fe.local.identifier.id : fe.identifier.id,
							);
						this.h = ye.map((fe) => {
							const me =
								ue[fe.identifier.id] ||
								this.z.createInstance(
									Q,
									this.j,
									this.n,
									this.server,
									fe,
									void 0,
									void 0,
								);
							return (
								(me.local = fe),
								(me.enablementState = this.t.getEnablementState(fe)),
								me.setExtensionsControlManifest(pe),
								me
							);
						});
					}
					async L() {
						(this.h = []),
							(this.f = []),
							(this.g = []),
							await this.J(),
							this.b.fire();
					}
					async M(ae) {
						for (const pe of ae) {
							const { local: $e, source: ye } = pe,
								ue = ye && !o.URI.isUri(ye) ? ye : void 0,
								fe = ye && o.URI.isUri(ye) ? ye : void 0,
								me = ue
									? this.f.filter((ge) =>
											(0, c.$7p)(ge.identifier, ue.identifier),
										)[0]
									: null;
							this.f = me ? this.f.filter((ge) => ge !== me) : this.f;
							let ve =
								me ||
								(fe || $e
									? this.z.createInstance(
											Q,
											this.j,
											this.n,
											this.server,
											$e,
											void 0,
											void 0,
										)
									: void 0);
							if (ve && $e) {
								const ge = this.h.filter((be) =>
									(0, c.$7p)(be.identifier, ve.identifier),
								)[0];
								ge ? (ve = ge) : this.h.push(ve),
									(ve.local = $e),
									ve.gallery || (ve.gallery = ue),
									ve.setExtensionsControlManifest(
										await this.server.extensionManagementService.getExtensionsControlManifest(),
									),
									(ve.enablementState = this.t.getEnablementState($e));
							}
							this.a.fire(
								!$e || !ve
									? void 0
									: { extension: ve, operation: pe.operation },
							),
								ve &&
									ve.local &&
									!ve.gallery &&
									ve.local.source !== "resource" &&
									(await this.O(ve));
						}
					}
					async N(ae) {
						const pe = this.h.find(($e) =>
							(0, c.$7p)($e.identifier, ae.identifier),
						);
						if (pe?.local) {
							const $e =
								pe.local.pinned !== ae.pinned ||
								pe.local.preRelease !== ae.preRelease;
							(pe.local = ae), $e && this.a.fire({ extension: pe });
						}
					}
					async O(ae) {
						if (!this.s.isEnabled()) return;
						this.y.publicLog2("galleryService:matchInstalledExtension");
						const [pe] = await this.s.getExtensions(
							[{ ...ae.identifier, preRelease: ae.local?.preRelease }],
							{
								compatible: !0,
								targetPlatform:
									await this.server.extensionManagementService.getTargetPlatform(),
							},
							I.CancellationToken.None,
						);
						pe && ((ae.gallery = pe), this.a.fire({ extension: ae }));
					}
					P(ae) {
						const pe = this.h.filter(($e) => (0, c.$7p)($e.identifier, ae))[0];
						if (pe) {
							const $e =
								this.g.filter((ye) => (0, c.$7p)(ye.identifier, ae))[0] || pe;
							(this.g = [
								$e,
								...this.g.filter((ye) => !(0, c.$7p)(ye.identifier, ae)),
							]),
								this.a.fire($e ? { extension: $e } : void 0);
						}
					}
					Q({ identifier: ae, error: pe }) {
						const $e =
							this.g.find((ye) => (0, c.$7p)(ye.identifier, ae)) ||
							this.h.find((ye) => (0, c.$7p)(ye.identifier, ae));
						(this.g = this.g.filter((ye) => !(0, c.$7p)(ye.identifier, ae))),
							pe ||
								(this.h = this.h.filter(
									(ye) => !(0, c.$7p)(ye.identifier, ae),
								)),
							$e && this.a.fire({ extension: $e });
					}
					R(ae) {
						const pe = this.local.filter(($e) =>
							ae.some((ye) => (0, c.$7p)($e.identifier, ye.identifier)),
						);
						for (const $e of pe)
							if ($e.local) {
								const ye = this.t.getEnablementState($e.local);
								ye !== $e.enablementState &&
									(($e.enablementState = ye), this.a.fire({ extension: $e }));
							}
					}
					getExtensionState(ae) {
						return ae.gallery &&
							this.f.some(
								($e) =>
									!!$e.gallery &&
									(0, c.$7p)($e.gallery.identifier, ae.gallery.identifier),
							)
							? f.ExtensionState.Installing
							: this.g.some(($e) => (0, c.$7p)($e.identifier, ae.identifier))
								? f.ExtensionState.Uninstalling
								: this.h.filter(
											($e) =>
												$e === ae ||
												($e.gallery &&
													ae.gallery &&
													(0, c.$7p)(
														$e.gallery.identifier,
														ae.gallery.identifier,
													)),
										)[0]
									? f.ExtensionState.Installed
									: f.ExtensionState.Uninstalled;
					}
				};
				re = Ne(
					[
						j(4, a.$Ep),
						j(5, h.$IQb),
						j(6, h.$GQb),
						j(7, G.$P8),
						j(8, u.$km),
						j(9, n.$Li),
					],
					re,
				);
				let le = class extends m.$1c {
					static {
						te = this;
					}
					static {
						this.a = 1e3 * 60 * 60 * 12;
					}
					get onChange() {
						return this.s.event;
					}
					get onReset() {
						return this.t.event;
					}
					constructor(
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
					) {
						super(),
							(this.z = ae),
							(this.C = pe),
							(this.F = $e),
							(this.G = ye),
							(this.H = ue),
							(this.I = fe),
							(this.J = me),
							(this.L = ge),
							(this.M = be),
							(this.N = Ce),
							(this.O = Le),
							(this.P = Fe),
							(this.Q = Oe),
							(this.R = xe),
							(this.S = He),
							(this.U = Je),
							(this.W = Te),
							(this.X = Ee),
							(this.Y = Ie),
							(this.Z = Be),
							(this.$ = Se),
							(this.ab = ke),
							(this.bb = Ue),
							(this.cb = qe),
							(this.db = Ae),
							(this.eb = Me),
							(this.fb = De),
							(this.gb = Re),
							(this.f = null),
							(this.g = null),
							(this.h = null),
							(this.j = []),
							(this.s = new w.$re()),
							(this.t = new w.$re()),
							(this.preferPreReleases = this.S.quality !== "stable"),
							(this.u = []),
							(this.w = []),
							(this.y = new Map()),
							(this.lb = this.D(new m.$2c()));
						const je = ue.getValue("_extensions.preferPreReleases");
						(0, O.$sg)(je) || (this.preferPreReleases = !!je),
							(this.b = f.$ZQb.bindTo(Ke)),
							Le.localExtensionManagementServer &&
								((this.f = this.D(
									ae.createInstance(
										re,
										Le.localExtensionManagementServer,
										(Ve) => this.Ab(Ve),
										(Ve) => this.yb(Ve),
										!Le.remoteExtensionManagementServer,
									),
								)),
								this.D(this.f.onChange((Ve) => this.rb(Ve?.extension))),
								this.D(this.f.onReset((Ve) => this.qb())),
								this.j.push(this.f)),
							Le.remoteExtensionManagementServer &&
								((this.g = this.D(
									ae.createInstance(
										re,
										Le.remoteExtensionManagementServer,
										(Ve) => this.Ab(Ve),
										(Ve) => this.yb(Ve),
										!0,
									),
								)),
								this.D(this.g.onChange((Ve) => this.rb(Ve?.extension))),
								this.D(this.g.onReset((Ve) => this.qb())),
								this.j.push(this.g)),
							Le.webExtensionManagementServer &&
								((this.h = this.D(
									ae.createInstance(
										re,
										Le.webExtensionManagementServer,
										(Ve) => this.Ab(Ve),
										(Ve) => this.yb(Ve),
										!(
											Le.remoteExtensionManagementServer ||
											Le.localExtensionManagementServer
										),
									),
								)),
								this.D(this.h.onChange((Ve) => this.rb(Ve?.extension))),
								this.D(this.h.onReset((Ve) => this.qb())),
								this.j.push(this.h)),
							(this.n = new C.$Kh(te.a)),
							(this.q = new C.$Kh(1e3)),
							this.D(
								(0, m.$Yc)(() => {
									this.n.cancel(), this.q.cancel();
								}),
							),
							this.D(
								this.onChange(async (Ve) => {
									if (Ve === void 0) return;
									const Ze = this.S.extensionMaxVersions;
									if (Ze !== void 0)
										try {
											if (
												Object.keys(Ze)
													.filter((rt) => Ze[rt]?.minVersion !== void 0)
													.includes(Ve.identifier.id)
											) {
												const rt = Ve.gallery;
												if (rt === void 0) return;
												const ft = Ze[Ve.identifier.id]?.minVersion;
												if (ft === void 0) return;
												if (rt.version !== Ve.version && i.lt(Ve.version, ft)) {
													if (this.y.has(Ve.identifier.id)) return;
													this.y.set(Ve.identifier.id, !0),
														this.y.size > 10 &&
															!1 &&
															K.$Bfb.alert(
																"The size of reinstallationLock is too big! this is BAD BAD BAD. this alert only shown in dev mode but please fix. there is probably a bug?",
															),
														await this.install(Ve),
														this.y.delete(Ve.identifier.id),
														this.updateRunningExtensions();
												}
											}
										} catch (et) {
											console.error(et);
										}
								}),
							),
							ve.registerHandler(this),
							this.S.quality !== "stable" && this.hb(),
							(this.whenInitialized = this.ib());
					}
					hb() {
						ee.$Io
							.as(_.$No.Configuration)
							.registerConfiguration({
								...h.$HQb,
								properties: {
									[f.$RQb]: {
										type: "boolean",
										description: t.localize(6528, null),
										default: !1,
									},
								},
							});
					}
					async ib() {
						await Promise.all([
							this.queryLocal(),
							this.X.whenInstalledExtensionsRegistered(),
						]),
							!this.B.isDisposed &&
								(this.ob(this.X.extensions, []),
								this.D(
									this.X.onDidChangeExtensions(({ added: ae, removed: pe }) =>
										this.ob(ae, pe),
									),
								),
								await this.Z.when(q.LifecyclePhase.Eventually),
								!this.B.isDisposed &&
									(this.jb(),
									this.nb(),
									this.D(
										w.Event.debounce(
											this.onChange,
											() => {},
											100,
										)(() => this.gc()),
									),
									this.D(
										this.bb.onDidChangeValue(
											T.StorageScope.APPLICATION,
											Z,
											this.B,
										)((ae) => this.Pb()),
									),
									this.D(
										this.bb.onDidChangeValue(
											T.StorageScope.APPLICATION,
											se,
											this.B,
										)((ae) => this.Pb()),
									)));
					}
					jb() {
						let ae = this.getAutoUpdateValue();
						this.D(
							this.H.onDidChangeConfiguration((pe) => {
								if (pe.affectsConfiguration(f.$OQb)) {
									const $e = ae !== !1;
									ae = this.getAutoUpdateValue();
									const ye = this.kb();
									$e !== ye &&
										(this.lc([]),
										this.qc([]),
										this.s.fire(void 0),
										this.pb(!ye)),
										ye && this.Fb();
								}
								pe.affectsConfiguration(f.$PQb) &&
									this.Cb() &&
									this.checkForUpdates();
							}),
						),
							this.D(
								this.L.onEnablementChanged((pe) => {
									this.getAutoUpdateValue() === "onlyEnabledExtensions" &&
										pe.some(($e) => this.L.isEnabled($e)) &&
										this.checkForUpdates();
								}),
							),
							this.D(
								w.Event.debounce(
									this.onChange,
									() => {},
									100,
								)(() => this.b.set(this.outdated.length > 0)),
							),
							this.D(
								this.eb.onStateChange((pe) => {
									((pe.type === W.StateType.CheckingForUpdates &&
										pe.explicit) ||
										pe.type === W.StateType.AvailableForDownload ||
										pe.type === W.StateType.Downloaded) &&
										(this.I.publicLog2("extensions:updatecheckonproductupdate"),
										this.Cb() && this.checkForUpdates());
								}),
							),
							this.b.set(this.outdated.length > 0),
							this.Db(!0),
							z.$r && (this.Ib(), this.kb() || this.Hb()),
							this.Gb(),
							this.mb(),
							this.D(
								this.H.onDidChangeConfiguration((pe) => {
									pe.affectsConfiguration(f.$RQb) && this.mb();
								}),
							);
					}
					kb() {
						return this.getAutoUpdateValue() !== !1;
					}
					getAutoUpdateValue() {
						const ae = this.H.getValue(f.$OQb);
						return ae === "onlySelectedExtensions"
							? !1
							: (0, O.$rg)(ae) || ae === "onlyEnabledExtensions"
								? ae
								: !0;
					}
					async updateAutoUpdateValue(ae) {
						const pe = this.kb(),
							$e = ae !== !1;
						(pe !== $e &&
							!(
								await this.cb.confirm({
									title: t.localize(6529, null),
									message: $e ? t.localize(6530, null) : t.localize(6531, null),
									detail: t.localize(6532, null),
								})
							).confirmed) ||
							(await this.H.updateValue(f.$OQb, ae));
					}
					mb() {
						(this.lb.value = void 0),
							this.H.getValue(f.$RQb) === !0 &&
								(this.lb.value = this.M.onDidChangeFocus((ae) => {
									!ae &&
										this.H.getValue(f.$RQb) === !0 &&
										this.updateRunningExtensions(!0);
								}));
					}
					nb() {
						const ae = this.installed
							.filter(
								(pe) =>
									!pe.isBuiltin &&
									(pe.enablementState === h.EnablementState.EnabledWorkspace ||
										pe.enablementState === h.EnablementState.EnabledGlobally),
							)
							.map((pe) => k.$Gn.toKey(pe.identifier.id));
						this.I.publicLog2("installedExtensions", {
							extensionIds: new H.$Qp(ae.join(";")),
							count: ae.length,
						});
					}
					async ob(ae, pe) {
						const $e = [],
							ye = [];
						for (const fe of ae) {
							const me = this.installed.find((ve) =>
								(0, c.$7p)(
									{ id: fe.identifier.value, uuid: fe.uuid },
									ve.identifier,
								),
							);
							me ? $e.push(me) : ye.push(fe);
						}
						const ue = [];
						for (const fe of pe)
							this.gb.isInsideWorkspace(fe.extensionLocation)
								? ue.push(fe)
								: ye.push(fe);
						if (ye.length) {
							const fe = await this.getExtensions(
								ye.map((me) => ({ id: me.identifier.value, uuid: me.uuid })),
								I.CancellationToken.None,
							);
							$e.push(...fe);
						}
						if (ue.length) {
							const fe = await this.getResourceExtensions(
								ue.map((me) => me.extensionLocation),
								!0,
							);
							$e.push(...fe);
						}
						for (const fe of $e) this.s.fire(fe);
					}
					pb(ae) {
						return this.N.withProgress(
							{
								location: $.ProgressLocation.Extensions,
								title: t.localize(6533, null),
							},
							() => this.F.resetPinnedStateForAllUserExtensions(ae),
						);
					}
					qb() {
						for (const ae of this.w) ae.cancel();
						(this.w = []), (this.u = []), this.rb(), this.t.fire();
					}
					rb(ae) {
						(this.tb = void 0), (this.sb = void 0), this.s.fire(ae);
					}
					get local() {
						if (!this.sb)
							if (this.j.length === 1) this.sb = this.installed;
							else {
								this.sb = [];
								const ae = (0, c.$aq)(this.installed, (pe) => pe.identifier);
								for (const pe of ae) this.sb.push(this.zb(pe));
							}
						return this.sb;
					}
					get installed() {
						if (!this.tb) {
							this.tb = [];
							for (const ae of this.j)
								for (const pe of ae.local) this.tb.push(pe);
						}
						return this.tb;
					}
					get outdated() {
						return this.installed.filter(
							(ae) =>
								ae.outdated &&
								ae.local &&
								ae.state === f.ExtensionState.Installed,
						);
					}
					async queryLocal(ae) {
						if (ae) {
							if (this.f && this.O.localExtensionManagementServer === ae)
								return this.f.queryInstalled(this.Kb());
							if (this.g && this.O.remoteExtensionManagementServer === ae)
								return this.g.queryInstalled(this.Kb());
							if (this.h && this.O.webExtensionManagementServer === ae)
								return this.h.queryInstalled(this.Kb());
						}
						if (this.f)
							try {
								await this.f.queryInstalled(this.Kb());
							} catch (pe) {
								this.W.error(pe);
							}
						if (this.g)
							try {
								await this.g.queryInstalled(this.Kb());
							} catch (pe) {
								this.W.error(pe);
							}
						if (this.h)
							try {
								await this.h.queryInstalled(this.Kb());
							} catch (pe) {
								this.W.error(pe);
							}
						return this.local;
					}
					async queryGallery(ae, pe) {
						if (!this.G.isEnabled()) return (0, r.$jp)([]);
						const $e = I.CancellationToken.isCancellationToken(ae) ? {} : ae,
							ye = I.CancellationToken.isCancellationToken(ae) ? ae : pe;
						($e.text = $e.text ? this.ub($e.text) : $e.text),
							($e.includePreRelease = (0, O.$sg)($e.includePreRelease)
								? this.preferPreReleases
								: $e.includePreRelease);
						const ue = await this.F.getExtensionsControlManifest(),
							fe = await this.G.query($e, ye);
						return (
							this.Bb(fe.firstPage),
							{
								firstPage: fe.firstPage.map((me) => this.vb(me, ue)),
								total: fe.total,
								pageSize: fe.pageSize,
								getPage: async (me, ve) => {
									const ge = await fe.getPage(me, ve);
									return this.Bb(ge), ge.map((be) => this.vb(be, ue));
								},
							}
						);
					}
					async getExtensions(ae, pe, $e) {
						if (!this.G.isEnabled()) return [];
						ae.forEach(
							(fe) => (fe.preRelease = fe.preRelease ?? this.preferPreReleases),
						);
						const ye = await this.F.getExtensionsControlManifest(),
							ue = await this.G.getExtensions(ae, pe, $e);
						return this.Bb(ue), ue.map((fe) => this.vb(fe, ye));
					}
					async getResourceExtensions(ae, pe) {
						return (await this.F.getExtensions(ae)).map(
							(ye) =>
								this.xb(ye.location) ??
								this.z.createInstance(
									Q,
									(ue) => this.Ab(ue),
									(ue) => this.yb(ue),
									void 0,
									void 0,
									void 0,
									{ resourceExtension: ye, isWorkspaceScoped: pe },
								),
						);
					}
					ub(ae) {
						ae = ae.replace(/@web/g, `tag:"${a.$tp}"`);
						const pe = /\bext:([^\s]+)\b/g;
						return (
							pe.test(ae) &&
								(ae = ae.replace(pe, ($e, ye) => {
									const fe = (this.S.extensionKeywords || {})[ye] || [],
										me = this.P.guessLanguageIdByFilepathOrFirstLine(
											o.URI.file(`.${ye}`),
										),
										ve = me && this.P.getLanguageName(me),
										ge = ve ? ` tag:"${ve}"` : "";
									return `tag:"__ext_${ye}" tag:"__ext_.${ye}" ${fe.map((be) => `tag:"${be}"`).join(" ")}${ge} tag:"${ye}"`;
								})),
							ae.substr(0, 350)
						);
					}
					vb(ae, pe) {
						let $e = this.wb(ae);
						return (
							$e ||
								(($e = this.z.createInstance(
									Q,
									(ye) => this.Ab(ye),
									(ye) => this.yb(ye),
									void 0,
									void 0,
									ae,
									void 0,
								)),
								$e.setExtensionsControlManifest(pe)),
							$e
						);
					}
					wb(ae) {
						for (const pe of this.local)
							if (pe.identifier.uuid) {
								if (pe.identifier.uuid === ae.identifier.uuid) return pe;
							} else if (
								pe.local?.source !== "resource" &&
								(0, c.$7p)(pe.identifier, ae.identifier)
							)
								return pe;
						return null;
					}
					xb(ae) {
						return (
							this.local.find(
								(pe) =>
									pe.local &&
									this.fb.extUri.isEqualOrParent(ae, pe.local?.location),
							) ?? null
						);
					}
					async open(ae, pe) {
						if (typeof ae == "string") {
							const $e = ae;
							ae =
								this.installed.find((ye) =>
									(0, c.$7p)(ye.identifier, { id: $e }),
								) ??
								(
									await this.getExtensions(
										[{ id: ae }],
										I.CancellationToken.None,
									)
								).filter(V.$Lq)[0];
						}
						if (!ae) throw new Error(`Extension not found. ${ae}`);
						await this.C.openEditor(
							this.z.createInstance(l.$KQb, ae),
							pe,
							pe?.sideByside ? b.$KY : b.$JY,
						);
					}
					getExtensionStatus(ae) {
						const pe = this.X.getExtensionsStatus();
						for (const $e of Object.keys(pe))
							if ((0, c.$7p)({ id: $e }, ae.identifier)) return pe[$e];
					}
					async updateRunningExtensions(ae = !1) {
						const pe = [],
							$e = [],
							ye = [...this.local];
						for (const ue of ye) {
							const fe = ue.runtimeState;
							if (
								!fe ||
								fe.action !== f.ExtensionRuntimeActionType.RestartExtensions
							)
								continue;
							if (ue.state === f.ExtensionState.Uninstalled) {
								$e.push(ue.identifier.id);
								continue;
							}
							if (!ue.local) continue;
							if (this.L.isEnabled(ue.local)) {
								const ve = this.X.extensions.find((ge) =>
									(0, c.$7p)(
										{ id: ge.identifier.value, uuid: ge.uuid },
										ue.identifier,
									),
								);
								ve && $e.push(ve.identifier.value), pe.push(ue.local);
							} else $e.push(ue.identifier.id);
						}
						for (const ue of this.X.extensions)
							ue.isUnderDevelopment ||
								ye.some((fe) =>
									(0, c.$7p)(
										{ id: ue.identifier.value, uuid: ue.uuid },
										fe.identifier,
									),
								) ||
								$e.push(ue.identifier.value);
						(pe.length || $e.length) &&
							(await this.X.stopExtensionHosts(t.localize(6534, null), ae)) &&
							(await this.X.startExtensionHosts({ toAdd: pe, toRemove: $e }),
							ae &&
								this.J.notify({
									severity: v.Severity.Info,
									message: t.localize(6535, null),
									priority: v.NotificationPriority.SILENT,
								}),
							this.I.publicLog2("extensions:autorestart", {
								count: pe.length + $e.length,
								auto: ae,
							}));
					}
					yb(ae) {
						const pe = ae.state === f.ExtensionState.Uninstalled,
							$e = this.X.extensions.find((fe) =>
								(0, c.$7p)({ id: fe.identifier.value }, ae.identifier),
							),
							ye = this.O.remoteExtensionManagementServer
								? f.ExtensionRuntimeActionType.ReloadWindow
								: f.ExtensionRuntimeActionType.RestartExtensions,
							ue =
								ye === f.ExtensionRuntimeActionType.ReloadWindow
									? t.localize(6536, null)
									: t.localize(6537, null);
						if (pe) {
							const fe = $e && this.X.canRemoveExtension($e),
								me =
									$e &&
									(!ae.server ||
										ae.server ===
											this.O.getExtensionManagementServer((0, U.$x2)($e))) &&
									(!ae.resourceExtension ||
										this.fb.extUri.isEqual(
											ae.resourceExtension.location,
											$e.extensionLocation,
										));
							return !fe && me && !$e.isUnderDevelopment
								? { action: ye, reason: t.localize(6538, null, ue) }
								: void 0;
						}
						if (ae.local) {
							const fe =
									$e &&
									ae.server ===
										this.O.getExtensionManagementServer((0, U.$x2)($e)),
								me = this.L.isEnabled(ae.local);
							if ($e) {
								if (me) {
									if (this.X.canAddExtension((0, U.$y2)(ae.local))) return;
									const ve = this.O.getExtensionManagementServer(
										(0, U.$x2)($e),
									);
									if (fe) {
										if (
											!$e.isUnderDevelopment &&
											(ae.version !== $e.version ||
												ae.local.targetPlatform !== $e.targetPlatform)
										) {
											const ge = this.Lb(),
												be = this.Mb();
											if (
												be &&
												!(0, X.$yq)(
													ae.local.manifest.engines.vscode,
													ge.vscodeVersion,
													ge.date,
												) &&
												(0, X.$yq)(
													ae.local.manifest.engines.vscode,
													be.vscodeVersion,
													be.date,
												)
											) {
												const Ce = this.eb.state;
												return Ce.type === W.StateType.AvailableForDownload
													? {
															action:
																f.ExtensionRuntimeActionType.DownloadUpdate,
															reason: t.localize(6539, null, this.S.nameLong),
														}
													: Ce.type === W.StateType.Downloaded
														? {
																action:
																	f.ExtensionRuntimeActionType.ApplyUpdate,
																reason: t.localize(6540, null, this.S.nameLong),
															}
														: Ce.type === W.StateType.Ready
															? {
																	action:
																		f.ExtensionRuntimeActionType.QuitAndInstall,
																	reason: t.localize(
																		6541,
																		null,
																		this.S.nameLong,
																	),
																}
															: void 0;
											}
											return { action: ye, reason: t.localize(6542, null, ue) };
										}
										if (this.j.length > 1) {
											const ge = this.installed.filter(
												(be) =>
													(0, c.$7p)(be.identifier, ae.identifier) &&
													be.server !== ae.server,
											)[0];
											if (ge) {
												if (
													ve === this.O.remoteExtensionManagementServer &&
													this.U.prefersExecuteOnUI(ae.local.manifest) &&
													ge.server === this.O.localExtensionManagementServer
												)
													return {
														action: ye,
														reason: t.localize(6543, null, ue),
													};
												if (
													ve === this.O.localExtensionManagementServer &&
													this.U.prefersExecuteOnWorkspace(ae.local.manifest) &&
													ge.server === this.O.remoteExtensionManagementServer
												)
													return {
														action: ye,
														reason: t.localize(
															6544,
															null,
															ue,
															this.O.remoteExtensionManagementServer?.label,
														),
													};
											}
										}
									} else {
										if (
											ae.server === this.O.localExtensionManagementServer &&
											ve === this.O.remoteExtensionManagementServer &&
											this.U.prefersExecuteOnUI(ae.local.manifest)
										)
											return { action: ye, reason: t.localize(6545, null, ue) };
										if (
											ae.server === this.O.remoteExtensionManagementServer &&
											ve === this.O.localExtensionManagementServer &&
											this.U.prefersExecuteOnWorkspace(ae.local.manifest)
										)
											return { action: ye, reason: t.localize(6546, null, ue) };
									}
									return;
								} else if (fe)
									return { action: ye, reason: t.localize(6547, null, ue) };
								return;
							} else {
								if (me && !this.X.canAddExtension((0, U.$y2)(ae.local)))
									return { action: ye, reason: t.localize(6548, null, ue) };
								const ve = ae.server
									? ae.server === this.O.localExtensionManagementServer
										? this.O.remoteExtensionManagementServer
										: this.O.localExtensionManagementServer
									: null;
								if (
									ve &&
									ae.enablementState ===
										h.EnablementState.DisabledByExtensionKind
								) {
									const ge = this.local.filter(
										(be) =>
											(0, c.$7p)(be.identifier, ae.identifier) &&
											be.server === ve,
									)[0];
									if (ge && ge.local && this.L.isEnabled(ge.local))
										return { action: ye, reason: t.localize(6549, null, ue) };
								}
							}
						}
					}
					zb(ae) {
						if (ae.length === 1) return ae[0];
						const pe = ae.filter(
							(me) => me.local && this.L.isEnabled(me.local),
						);
						if (pe.length === 1) return pe[0];
						const $e = pe.length ? pe : ae,
							ye = $e.find((me) => me.local && me.local.manifest)?.local
								?.manifest;
						if (!ye) return $e[0];
						const ue = this.U.getExtensionKind(ye);
						let fe = $e.find((me) => {
							for (const ve of ue)
								switch (ve) {
									case "ui":
										return me.server === this.O.localExtensionManagementServer;
									case "workspace":
										return me.server === this.O.remoteExtensionManagementServer;
									case "web":
										return me.server === this.O.webExtensionManagementServer;
								}
							return !1;
						});
						return (
							!fe &&
								this.O.localExtensionManagementServer &&
								(fe = $e.find((me) => {
									for (const ve of ue)
										switch (ve) {
											case "workspace":
												return (
													me.server === this.O.localExtensionManagementServer
												);
											case "web":
												return (
													me.server === this.O.localExtensionManagementServer
												);
										}
									return !1;
								})),
							!fe &&
								this.O.webExtensionManagementServer &&
								(fe = $e.find((me) => {
									for (const ve of ue)
										switch (ve) {
											case "web":
												return (
													me.server === this.O.webExtensionManagementServer
												);
										}
									return !1;
								})),
							!fe &&
								this.O.remoteExtensionManagementServer &&
								(fe = $e.find((me) => {
									for (const ve of ue)
										switch (ve) {
											case "web":
												return (
													me.server === this.O.remoteExtensionManagementServer
												);
										}
									return !1;
								})),
							fe || ae[0]
						);
					}
					Ab(ae) {
						if (
							this.u.some(
								(pe) =>
									(0, c.$7p)(pe.identifier, ae.identifier) &&
									(!ae.server || pe.server === ae.server),
							)
						)
							return f.ExtensionState.Installing;
						if (this.g) {
							const pe = this.g.getExtensionState(ae);
							if (pe !== f.ExtensionState.Uninstalled) return pe;
						}
						if (this.h) {
							const pe = this.h.getExtensionState(ae);
							if (pe !== f.ExtensionState.Uninstalled) return pe;
						}
						return this.f
							? this.f.getExtensionState(ae)
							: f.ExtensionState.Uninstalled;
					}
					async checkForUpdates(ae) {
						if (!this.G.isEnabled()) return;
						const pe = [];
						if (
							(this.f && pe.push(this.f),
							this.g && pe.push(this.g),
							this.h && pe.push(this.h),
							!pe.length)
						)
							return;
						const $e = [];
						for (const ye of this.local)
							(ae && !ye.isBuiltin) ||
								(ye.isBuiltin &&
									!ye.local?.pinned &&
									(ye.type === k.ExtensionType.System ||
										!ye.local?.identifier.uuid)) ||
								(ye.local?.source !== "resource" &&
									$e.push({
										...ye.identifier,
										preRelease: !!ye.local?.preRelease,
									}));
						if ($e.length) {
							const ye =
								await pe[0].server.extensionManagementService.getTargetPlatform();
							this.I.publicLog2("galleryService:checkingForUpdates", {
								count: $e.length,
							});
							const ue = await this.G.getExtensions(
								$e,
								{
									targetPlatform: ye,
									compatible: !0,
									productVersion: this.Kb(),
								},
								I.CancellationToken.None,
							);
							ue.length && (await this.Bb(ue));
						}
					}
					async updateAll() {
						const ae = [];
						return (
							this.outdated.forEach((pe) => {
								pe.gallery &&
									ae.push({
										extension: pe.gallery,
										options: {
											operation: a.InstallOperation.Update,
											installPreReleaseVersion: pe.local?.isPreReleaseVersion,
											profileLocation:
												this.ab.currentProfile.extensionsResource,
											isApplicationScoped: pe.local?.isApplicationScoped,
										},
									});
							}),
							this.F.installGalleryExtensions(ae)
						);
					}
					async Bb(ae) {
						const pe = [];
						this.f && pe.push(this.f),
							this.g && pe.push(this.g),
							this.h && pe.push(this.h),
							pe.length &&
								(await Promise.allSettled(
									pe.map(($e) =>
										$e.syncInstalledExtensionsWithGallery(ae, this.Kb()),
									),
								),
								this.outdated.length && this.Fb());
					}
					Cb() {
						return this.H.getValue(f.$PQb);
					}
					Db(ae = !1) {
						this.n.cancel(),
							this.n
								.trigger(
									async () => {
										this.Cb() && (await this.checkForUpdates()), this.Db();
									},
									ae ? 0 : this.Eb(),
								)
								.then(void 0, (pe) => null);
					}
					Eb() {
						return this.S.quality === "insider" && this.Mb()
							? 1e3 * 60 * 60 * 1
							: te.a;
					}
					Fb() {
						this.q.trigger(() => this.Jb()).then(void 0, (ae) => null);
					}
					async Gb() {
						const ae = (await this.F.getInstalled()).filter((pe) =>
							V.$Mq.includes(pe.identifier.id),
						);
						ae.length > 0 &&
							(await C.Promises.settled(
								ae.map(async (pe) => {
									await this.F.uninstall(pe, void 0);
								}),
							));
					}
					async Hb() {
						await this.checkForUpdates(!0);
						const ae = this.outdated.filter((pe) => pe.isBuiltin);
						await C.Promises.settled(
							ae.map((pe) =>
								this.install(
									pe,
									pe.local?.preRelease
										? { installPreReleaseVersion: !0 }
										: void 0,
								),
							),
						);
					}
					async Ib() {
						const ae = [];
						for (const pe of this.local)
							pe.isBuiltin &&
								pe.local?.pinned &&
								pe.local?.identifier.uuid &&
								ae.push({ ...pe.identifier, version: pe.version });
						if (ae.length) {
							const pe = await this.G.getExtensions(
								ae,
								I.CancellationToken.None,
							);
							pe.length && (await this.Bb(pe));
						}
					}
					async Jb() {
						const ae = [];
						for (const $e of this.outdated)
							this.Nb($e) &&
								((await this.shouldRequireConsentToUpdate($e)) || ae.push($e));
						if (!ae.length) return;
						const pe = this.Kb();
						await C.Promises.settled(
							ae.map(($e) =>
								this.install(
									$e,
									$e.local?.preRelease
										? { installPreReleaseVersion: !0, productVersion: pe }
										: { productVersion: pe },
								),
							),
						);
					}
					Kb() {
						return this.Mb() ?? this.Lb();
					}
					Lb() {
						return {
							version: this.S.version,
							date: this.S.date,
							vscodeVersion: this.S.vscodeVersion,
						};
					}
					Mb() {
						switch (this.eb.state.type) {
							case W.StateType.AvailableForDownload:
							case W.StateType.Downloaded:
							case W.StateType.Updating:
							case W.StateType.Ready: {
								const ae = this.eb.state.update.productVersion;
								if (ae && i.valid(ae))
									return {
										version: ae,
										date: this.eb.state.update.timestamp
											? new Date(this.eb.state.update.timestamp).toISOString()
											: void 0,
										vscodeVersion: this.S.vscodeVersion,
									};
							}
						}
					}
					Nb(ae) {
						if (ae.deprecationInfo?.disallowInstall) return !1;
						const pe = this.getAutoUpdateValue();
						if (pe === !1) {
							const ye = this.getEnabledAutoUpdateExtensions(),
								ue = ae.identifier.id.toLowerCase();
							return !!(
								ye.includes(ue) ||
								(this.Ob(ae.publisher) && !ye.includes(`-${ue}`))
							);
						}
						return ae.pinned ||
							this.getDisabledAutoUpdateExtensions().includes(
								ae.identifier.id.toLowerCase(),
							)
							? !1
							: pe === !0
								? !0
								: pe === "onlyEnabledExtensions"
									? this.L.isEnabledEnablementState(ae.enablementState)
									: !1;
					}
					async shouldRequireConsentToUpdate(ae) {
						if (
							ae.outdated &&
							!(ae.local?.manifest.main || ae.local?.manifest.browser) &&
							ae.gallery
						) {
							if ((0, O.$tg)(ae.gallery.properties?.executesCode)) {
								if (!ae.gallery.properties.executesCode) return;
							} else {
								const pe =
									ae instanceof Q
										? await ae.getGalleryManifest()
										: await this.G.getManifest(
												ae.gallery,
												I.CancellationToken.None,
											);
								if (!pe?.main && !pe?.browser) return;
							}
							return t.localize(6550, null, ae.displayName);
						}
					}
					isAutoUpdateEnabledFor(ae) {
						if ((0, O.$lg)(ae)) {
							if (a.$sp.test(ae))
								throw new Error(
									"Expected publisher string, found extension identifier",
								);
							return this.kb() ? !0 : this.Ob(ae);
						}
						return this.Nb(ae);
					}
					Ob(ae) {
						return this.kc().includes(ae.toLowerCase());
					}
					async updateAutoUpdateEnablementFor(ae, pe) {
						if (this.kb()) {
							if ((0, O.$lg)(ae))
								throw new Error("Expected extension, found publisher string");
							const $e = this.getDisabledAutoUpdateExtensions(),
								ye = ae.identifier.id.toLowerCase(),
								ue = $e.indexOf(ye);
							pe ? ue !== -1 && $e.splice(ue, 1) : ue === -1 && $e.push(ye),
								this.qc($e),
								pe &&
									ae.local &&
									ae.pinned &&
									(await this.F.updateMetadata(ae.local, { pinned: !1 })),
								this.s.fire(ae);
						} else {
							const $e = this.getEnabledAutoUpdateExtensions();
							if ((0, O.$lg)(ae)) {
								if (a.$sp.test(ae))
									throw new Error(
										"Expected publisher string, found extension identifier",
									);
								(ae = ae.toLowerCase()),
									this.isAutoUpdateEnabledFor(ae) !== pe &&
										(pe
											? $e.push(ae)
											: $e.includes(ae) && $e.splice($e.indexOf(ae), 1)),
									this.lc($e);
								for (const ye of this.installed)
									ye.publisher.toLowerCase() === ae && this.s.fire(ye);
							} else {
								const ye = ae.identifier.id.toLowerCase(),
									ue = this.isAutoUpdateEnabledFor(ae.publisher.toLowerCase()),
									fe = $e.includes(ye),
									me = $e.includes(`-${ye}`);
								pe
									? (me && $e.splice($e.indexOf(`-${ye}`), 1),
										ue ? fe && $e.splice($e.indexOf(ye), 1) : fe || $e.push(ye))
									: (fe && $e.splice($e.indexOf(ye), 1),
										ue
											? me || $e.push(`-${ye}`)
											: me && $e.splice($e.indexOf(`-${ye}`), 1)),
									this.lc($e),
									this.s.fire(ae);
							}
						}
						pe && this.Jb();
					}
					Pb() {
						if (this.nc !== this.oc() || this.sc !== this.tc()) {
							const ae = this.installed.filter((me) => !me.isBuiltin),
								pe = (me) => {
									const ve = [],
										ge = [];
									for (const be of me) this.Nb(be) ? ve.push(be) : ge.push(be);
									return [ve, ge];
								},
								[$e, ye] = pe(ae);
							(this.mc = void 0), (this.rc = void 0);
							const [ue, fe] = pe(ae);
							for (const me of $e ?? []) fe?.includes(me) && this.s.fire(me);
							for (const me of ye ?? []) ue?.includes(me) && this.s.fire(me);
						}
					}
					async canInstall(ae) {
						return !(ae instanceof Q) ||
							ae.isMalicious ||
							ae.deprecationInfo?.disallowInstall ||
							(0, V.$Oq)(ae)
							? !1
							: ae.gallery
								? !!(
										(this.f && (await this.f.canInstall(ae.gallery))) ||
										(this.g && (await this.g.canInstall(ae.gallery))) ||
										(this.h && (await this.h.canInstall(ae.gallery)))
									)
								: !!(
										ae.resourceExtension &&
										(await this.F.canInstall(ae.resourceExtension))
									);
					}
					async install(ae, pe = {}, $e) {
						let ye, ue;
						if (ae instanceof o.URI) ye = ae;
						else {
							let fe, me;
							if (
								((0, O.$lg)(ae)
									? ((ue = this.local.find((ve) =>
											(0, c.$7p)(ve.identifier, { id: ae }),
										)),
										ue?.isBuiltin ||
											(fe = {
												id: ae,
												version: pe.version,
												preRelease:
													pe.installPreReleaseVersion ?? this.preferPreReleases,
											}))
									: ae.gallery
										? ((ue = ae),
											(me = ae.gallery),
											pe.version &&
												pe.version !== me?.version &&
												(fe = { id: ue.identifier.id, version: pe.version }))
										: ae.resourceExtension &&
											((ue = ae), (ye = ae.resourceExtension)),
								fe)
							) {
								const ve = ue?.server
									? await ue.server.extensionManagementService.getTargetPlatform()
									: void 0;
								me = (0, E.$Sb)(
									await this.G.getExtensions(
										[fe],
										{ targetPlatform: ve },
										I.CancellationToken.None,
									),
								);
							}
							if (
								(!ue &&
									me &&
									((ue = this.z.createInstance(
										Q,
										(ve) => this.Ab(ve),
										(ve) => this.yb(ve),
										void 0,
										void 0,
										me,
										void 0,
									)),
									ue.setExtensionsControlManifest(
										await this.F.getExtensionsControlManifest(),
									)),
								ue?.isMalicious)
							)
								throw new Error(t.localize(6551, null));
							if (!(pe.enable && ue?.local)) {
								if (!ye) {
									if (!me) {
										const ve = (0, O.$lg)(ae) ? ae : ae.identifier.id;
										throw pe.version
											? new Error(t.localize(6552, null, ve, pe.version))
											: new Error(t.localize(6553, null, ve));
									}
									ye = me;
								}
								pe.version && (pe.installGivenVersion = !0),
									ue?.isWorkspaceScoped && (pe.isWorkspaceScoped = !0);
							}
						}
						if (ye) {
							if (pe.justification) {
								const fe =
										(0, O.$sg)(pe.isMachineScoped) &&
										this.db.isEnabled() &&
										this.db.isResourceEnabled(A.SyncResource.Extensions),
									me = [];
								me.push({
									label:
										(0, O.$lg)(pe.justification) || !pe.justification.action
											? t.localize(6554, null)
											: t.localize(6555, null, pe.justification.action),
									run: () => !0,
								}),
									ue ||
										me.push({
											label: t.localize(6556, null),
											run: () => (this.open(ue), !1),
										});
								const ve = await this.cb.prompt({
									title: t.localize(6557, null),
									message: ue
										? t.localize(
												6558,
												null,
												ue.displayName,
												ue.publisherDisplayName,
											)
										: t.localize(6559, null),
									detail: (0, O.$lg)(pe.justification)
										? pe.justification
										: pe.justification.reason,
									cancelButton: !0,
									buttons: me,
									checkbox: fe
										? { label: t.localize(6560, null), checked: !0 }
										: void 0,
								});
								if (!ve.result) throw new d.$9();
								fe && (pe.isMachineScoped = !ve.checkboxChecked);
							}
							ye instanceof o.URI
								? (ue = await this.Ub(void 0, () => this.Vb(ye, pe), $e))
								: ue &&
									(ue.resourceExtension
										? (ue = await this.Ub(
												ue,
												() => this.F.installResourceExtension(ye, pe),
												$e,
											))
										: (ue = await this.Ub(ue, () => this.Wb(ue, ye, pe), $e)));
						}
						if (!ue) throw new Error(t.localize(6561, null));
						if (pe.enable) {
							if (
								ue.enablementState === h.EnablementState.DisabledWorkspace ||
								ue.enablementState === h.EnablementState.DisabledGlobally
							) {
								if (
									pe.justification &&
									!(
										await this.cb.confirm({
											title: t.localize(6562, null),
											message: t.localize(6563, null, ue.displayName),
											detail: (0, O.$lg)(pe.justification)
												? pe.justification
												: pe.justification.reason,
											primaryButton: (0, O.$lg)(pe.justification)
												? t.localize(6564, null)
												: t.localize(6565, null, pe.justification.action),
										})
									).confirmed
								)
									throw new d.$9();
								await this.setEnablement(
									ue,
									ue.enablementState === h.EnablementState.DisabledWorkspace
										? h.EnablementState.EnabledWorkspace
										: h.EnablementState.EnabledGlobally,
								);
							}
							await this.Yb(ue);
						}
						return ue;
					}
					async installInServer(ae, pe) {
						await this.Ub(ae, async () => {
							const $e = ae.local;
							if (!$e) throw new Error("Extension not found");
							if (
								(ae.gallery ||
									(ae =
										(
											await this.getExtensions(
												[{ ...ae.identifier, preRelease: $e.preRelease }],
												I.CancellationToken.None,
											)
										)[0] ?? ae),
								ae.gallery)
							)
								return pe.extensionManagementService.installFromGallery(
									ae.gallery,
									{ installPreReleaseVersion: $e.preRelease },
								);
							const ye =
								await pe.extensionManagementService.getTargetPlatform();
							if (!(0, a.$Cp)($e.targetPlatform, [$e.targetPlatform], ye))
								throw new Error(t.localize(6566, null, ae.identifier.id));
							const ue = await this.F.zip($e);
							try {
								return await pe.extensionManagementService.install(ue);
							} finally {
								try {
									await this.$.del(ue);
								} catch (fe) {
									this.W.error(fe);
								}
							}
						});
					}
					canSetLanguage(ae) {
						return !(!z.$r || !ae.gallery || !(0, F.$EJ)(ae.gallery));
					}
					async setLanguage(ae) {
						if (!this.canSetLanguage(ae))
							throw new Error("Can not set language");
						const pe = (0, F.$EJ)(ae.gallery);
						if (pe === z.$z) return;
						const $e = ae.gallery?.properties?.localizedLanguages?.[0];
						return this.Y.setLocale({
							id: pe,
							galleryExtension: ae.gallery,
							extensionId: ae.identifier.id,
							label: $e ?? ae.displayName,
						});
					}
					setEnablement(ae, pe) {
						return (ae = Array.isArray(ae) ? ae : [ae]), this.Zb(ae, pe);
					}
					async uninstall(ae) {
						const pe = ae.local
							? ae
							: this.local.find((ue) =>
									(0, c.$7p)(ue.identifier, ae.identifier),
								);
						if (!pe?.local) throw new Error("Missing local");
						const $e = [{ extension: pe.local }];
						for (const ue of this.Qb(pe.local, this.local))
							$e.some((fe) =>
								(0, c.$7p)(fe.extension.identifier, ue.identifier),
							) || $e.push({ extension: ue });
						const ye = [];
						for (const { extension: ue } of $e)
							for (const fe of this.local)
								fe.local &&
									((0, c.$7p)(fe.identifier, ue.identifier) ||
										(fe.dependencies.length !== 0 &&
											(ue.manifest.extensionPack?.some((me) =>
												(0, c.$7p)({ id: me }, fe.identifier),
											) ||
												ye.some((me) =>
													me.extensionPack.some((ve) =>
														(0, c.$7p)({ id: ve }, fe.identifier),
													),
												) ||
												(fe.dependencies.some((me) =>
													(0, c.$7p)(ue.identifier, { id: me }),
												) &&
													(ye.push(fe), $e.push({ extension: fe.local }))))));
						if (ye.length) {
							const { result: ue } = await this.cb.prompt({
								title: t.localize(6567, null),
								type: v.Severity.Warning,
								message: this.Rb(pe, ye),
								buttons: [{ label: t.localize(6568, null), run: () => !0 }],
								cancelButton: { run: () => !1 },
							});
							if (!ue) throw new d.$9();
						}
						return this.hc(
							{
								location: $.ProgressLocation.Extensions,
								title: t.localize(6569, null),
								source: `${pe.identifier.id}`,
							},
							() => this.F.uninstallExtensions($e).then(() => {}),
						);
					}
					Qb(ae, pe, $e = []) {
						if ($e.some((ue) => (0, c.$7p)(ue.identifier, ae.identifier)))
							return [];
						$e.push(ae);
						const ye = ae.manifest.extensionPack ?? [];
						if (ye.length) {
							const ue = [];
							for (const me of pe)
								me.local &&
									!me.isBuiltin &&
									ye.some((ve) => (0, c.$7p)({ id: ve }, me.identifier)) &&
									ue.push(me.local);
							const fe = [];
							for (const me of ue) fe.push(...this.Qb(me, pe, $e));
							return [...ue, ...fe];
						}
						return [];
					}
					Rb(ae, pe) {
						return pe.length === 1
							? t.localize(6570, null, ae.displayName, pe[0].displayName)
							: pe.length === 2
								? t.localize(
										6571,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									)
								: t.localize(
										6572,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									);
					}
					reinstall(ae) {
						return this.Ub(ae, () => {
							const pe = ae.local
									? ae
									: this.local.filter((ye) =>
											(0, c.$7p)(ye.identifier, ae.identifier),
										)[0],
								$e = pe && pe.local ? pe.local : null;
							if (!$e) throw new Error("Missing local");
							return this.F.reinstallFromGallery($e);
						});
					}
					isExtensionIgnoredToSync(ae) {
						return ae.local
							? !this.Tb(ae.local)
							: this.Q.hasToNeverSyncExtension(ae.identifier.id);
					}
					async togglePreRelease(ae) {
						if (ae.local) {
							if (ae.preRelease !== ae.isPreReleaseVersion) {
								await this.F.updateMetadata(ae.local, {
									preRelease: !ae.preRelease,
								});
								return;
							}
							await this.install(ae, {
								installPreReleaseVersion: !ae.preRelease,
								preRelease: !ae.preRelease,
							});
						}
					}
					async toggleExtensionIgnoredToSync(ae) {
						const pe = this.isExtensionIgnoredToSync(ae);
						ae.local && pe
							? ((ae.local = await this.updateSynchronizingInstalledExtension(
									ae.local,
									!0,
								)),
								this.s.fire(ae))
							: this.Q.updateIgnoredExtensions(ae.identifier.id, !pe),
							await this.R.triggerSync(["IgnoredExtensionsUpdated"], !1, !1);
					}
					async toggleApplyExtensionToAllProfiles(ae) {
						if (!ae.local || (0, k.$Jn)(ae.local.manifest) || ae.isBuiltin)
							return;
						const pe = ae.local.isApplicationScoped;
						await Promise.all(
							this.Sb().map(async ($e) => {
								const ye = $e.local.find((ue) =>
									(0, c.$7p)(ue.identifier, ae.identifier),
								)?.local;
								ye &&
									ye.isApplicationScoped === pe &&
									(await this.F.toggleAppliationScope(
										ye,
										this.ab.currentProfile.extensionsResource,
									));
							}),
						);
					}
					Sb() {
						const ae = [];
						return (
							this.f && ae.push(this.f),
							this.g && ae.push(this.g),
							this.h && ae.push(this.h),
							ae
						);
					}
					Tb(ae) {
						return ae.isMachineScoped
							? !1
							: this.Q.hasToAlwaysSyncExtension(ae.identifier.id)
								? !0
								: !this.Q.hasToNeverSyncExtension(ae.identifier.id);
					}
					async updateSynchronizingInstalledExtension(ae, pe) {
						const $e = !pe;
						return (
							ae.isMachineScoped !== $e &&
								(ae = await this.F.updateMetadata(ae, { isMachineScoped: $e })),
							pe && this.Q.updateIgnoredExtensions(ae.identifier.id, !1),
							ae
						);
					}
					Ub(ae, pe, $e) {
						const ye = ae
							? t.localize(6573, null, ae.displayName)
							: t.localize(6574, null);
						return this.hc(
							{ location: $e ?? $.ProgressLocation.Extensions, title: ye },
							async () => {
								try {
									ae && (this.u.push(ae), this.s.fire(ae));
									const ue = await pe();
									return await this.Xb(ue.identifier);
								} finally {
									ae &&
										((this.u = this.u.filter((ue) => ue !== ae)),
										this.s.fire(void 0));
								}
							},
						);
					}
					async Vb(ae, pe) {
						const $e = await this.F.getManifest(ae),
							ye = this.local.find((ue) =>
								(0, c.$7p)(ue.identifier, {
									id: (0, c.$_p)($e.publisher, $e.name),
								}),
							);
						return (
							ye &&
								((pe = pe || {}),
								ye.latestVersion === $e.version
									? (pe.pinned = ye.local?.pinned || !this.Nb(ye))
									: (pe.installGivenVersion = !0)),
							this.F.installVSIX(ae, $e, pe)
						);
					}
					Wb(ae, pe, $e) {
						return (
							($e = $e ?? {}),
							($e.pinned = ae.local?.pinned || !this.Nb(ae)),
							ae.local
								? (($e.productVersion = this.Kb()),
									this.F.updateFromGallery(pe, ae.local, $e))
								: this.F.installFromGallery(pe, $e)
						);
					}
					async Xb(ae) {
						let pe = this.local.find(($e) => (0, c.$7p)($e.identifier, ae));
						if (
							(pe ||
								(await w.Event.toPromise(
									w.Event.filter(
										this.onChange,
										($e) =>
											!!$e &&
											this.local.some((ye) => (0, c.$7p)(ye.identifier, ae)),
									),
								)),
							(pe = this.local.find(($e) => (0, c.$7p)($e.identifier, ae))),
							!pe)
						)
							throw new Error("Extension should have been installed");
						return pe;
					}
					async Yb(ae) {
						this.X.extensions.find((pe) =>
							k.$Gn.equals(pe.identifier, ae.identifier.id),
						) ||
							!ae.local ||
							!this.X.canAddExtension((0, U.$y2)(ae.local)) ||
							(await new Promise((pe, $e) => {
								const ye = this.X.onDidChangeExtensions(() => {
									try {
										this.X.extensions.find((ue) =>
											k.$Gn.equals(ue.identifier, ae.identifier.id),
										) && (ye.dispose(), pe());
									} catch (ue) {
										$e(ue);
									}
								});
							}));
					}
					Zb(ae, pe) {
						if (
							pe === h.EnablementState.EnabledGlobally ||
							pe === h.EnablementState.EnabledWorkspace
						) {
							const ye = this.ac(ae, this.local, pe, {
								dependencies: !0,
								pack: !0,
							});
							return this.$b(ae, ye, pe);
						} else {
							const ye = this.ac(ae, this.local, pe, {
								dependencies: !1,
								pack: !0,
							});
							return ye.length ? this.$b(ae, ye, pe) : this.$b(ae, [], pe);
						}
					}
					async $b(ae, pe, $e) {
						const ye = [...ae, ...pe];
						if (
							!(
								$e === h.EnablementState.EnabledGlobally ||
								$e === h.EnablementState.EnabledWorkspace
							)
						)
							for (const fe of ae) {
								const me = this.bc(fe, ye, this.local);
								if (me.length) {
									const { result: ve } = await this.cb.prompt({
										title: t.localize(6575, null),
										type: v.Severity.Warning,
										message: this.cc(fe, ye, me),
										buttons: [{ label: t.localize(6576, null), run: () => !0 }],
										cancelButton: { run: () => !1 },
									});
									if (!ve) throw new d.$9();
									await this.$b(me, [fe], $e);
								}
							}
						return this.ec(ye, $e);
					}
					ac(ae, pe, $e, ye, ue = []) {
						const fe = ae.filter((me) => ue.indexOf(me) === -1);
						if (fe.length) {
							for (const ve of fe) ue.push(ve);
							const me = pe.filter((ve) => {
								if (ue.indexOf(ve) !== -1) return !1;
								const ge =
										$e === h.EnablementState.EnabledGlobally ||
										$e === h.EnablementState.EnabledWorkspace,
									be =
										ve.enablementState === h.EnablementState.EnabledGlobally ||
										ve.enablementState === h.EnablementState.EnabledWorkspace;
								return ge === be
									? !1
									: (ge || !ve.isBuiltin) &&
											(ye.dependencies || ye.pack) &&
											ae.some(
												(Ce) =>
													(ye.dependencies &&
														Ce.dependencies.some((Le) =>
															(0, c.$7p)({ id: Le }, ve.identifier),
														)) ||
													(ye.pack &&
														Ce.extensionPack.some((Le) =>
															(0, c.$7p)({ id: Le }, ve.identifier),
														)),
											);
							});
							return me.length && me.push(...this.ac(me, pe, $e, ye, ue)), me;
						}
						return [];
					}
					bc(ae, pe, $e) {
						return $e.filter((ye) =>
							ye.dependencies.length === 0 ||
							ye === ae ||
							!this.L.isEnabledEnablementState(ye.enablementState) ||
							pe.indexOf(ye) !== -1
								? !1
								: ye.dependencies.some((ue) =>
										[ae, ...pe].some((fe) =>
											(0, c.$7p)(fe.identifier, { id: ue }),
										),
									),
						);
					}
					cc(ae, pe, $e) {
						for (const ye of [ae, ...pe]) {
							const ue = $e.filter((fe) =>
								fe.dependencies.some((me) =>
									(0, c.$7p)({ id: me }, ye.identifier),
								),
							);
							if (ue.length) return this.dc(ye, ue);
						}
						return "";
					}
					dc(ae, pe) {
						return pe.length === 1
							? t.localize(6577, null, ae.displayName, pe[0].displayName)
							: pe.length === 2
								? t.localize(
										6578,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									)
								: t.localize(
										6579,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									);
					}
					async ec(ae, pe) {
						const $e = await this.L.setEnablement(
							ae.map((ye) => ye.local),
							pe,
						);
						for (let ye = 0; ye < $e.length; ye++)
							$e[ye] &&
								this.I.publicLog(
									pe === h.EnablementState.EnabledGlobally ||
										pe === h.EnablementState.EnabledWorkspace
										? "extension:enable"
										: "extension:disable",
									ae[ye].telemetryData,
								);
						return $e;
					}
					gc() {
						this.installed.some(
							(ae) =>
								ae.state === f.ExtensionState.Installing ||
								ae.state === f.ExtensionState.Uninstalling,
						)
							? this.fc ||
								this.hc(
									{ location: $.ProgressLocation.Extensions },
									() => new Promise((ae) => (this.fc = ae)),
								)
							: (this.fc?.(), (this.fc = void 0));
					}
					hc(ae, pe) {
						return this.N.withProgress(ae, async () => {
							const $e = (0, C.$zh)(() => pe());
							this.w.push($e);
							try {
								return await $e;
							} finally {
								const ye = this.w.indexOf($e);
								ye !== -1 && this.w.splice(ye, 1);
							}
						});
					}
					ic(ae) {
						if ((0, d.$8)(ae)) return;
						const pe = (ae && ae.message) || "";
						/getaddrinfo ENOTFOUND|getaddrinfo ENOENT|connect EACCES|connect ECONNREFUSED/.test(
							pe,
						) || this.J.error(ae);
					}
					handleURL(ae, pe) {
						return /^extension/.test(ae.path)
							? (this.jc(ae), Promise.resolve(!0))
							: Promise.resolve(!1);
					}
					jc(ae) {
						const pe = /^extension\/([^/]+)$/.exec(ae.path);
						if (!pe) return;
						const $e = pe[1];
						this.queryLocal()
							.then(async (ye) => {
								let ue = ye.find((fe) => (0, c.$7p)(fe.identifier, { id: $e }));
								ue ||
									([ue] = await this.getExtensions(
										[{ id: $e }],
										{ source: "uri" },
										I.CancellationToken.None,
									)),
									ue && (await this.M.focus(K.$Bfb), await this.open(ue));
							})
							.then(void 0, (ye) => this.ic(ye));
					}
					kc() {
						return this.getEnabledAutoUpdateExtensions().filter(
							(ae) => !a.$sp.test(ae),
						);
					}
					getEnabledAutoUpdateExtensions() {
						try {
							const ae = JSON.parse(this.nc);
							if (Array.isArray(ae)) return ae;
						} catch {}
						return [];
					}
					lc(ae) {
						this.nc = JSON.stringify(ae);
					}
					get nc() {
						return this.mc || (this.mc = this.oc()), this.mc;
					}
					set nc(ae) {
						this.nc !== ae && ((this.mc = ae), this.pc(ae));
					}
					oc() {
						return this.bb.get(Z, T.StorageScope.APPLICATION, "[]");
					}
					pc(ae) {
						this.bb.store(
							Z,
							ae,
							T.StorageScope.APPLICATION,
							T.StorageTarget.USER,
						);
					}
					getDisabledAutoUpdateExtensions() {
						try {
							const ae = JSON.parse(this.sc);
							if (Array.isArray(ae)) return ae;
						} catch {}
						return [];
					}
					qc(ae) {
						this.sc = JSON.stringify(ae);
					}
					get sc() {
						return this.rc || (this.rc = this.tc()), this.rc;
					}
					set sc(ae) {
						this.sc !== ae && ((this.rc = ae), this.uc(ae));
					}
					tc() {
						return this.bb.get(se, T.StorageScope.APPLICATION, "[]");
					}
					uc(ae) {
						this.bb.store(
							se,
							ae,
							T.StorageScope.APPLICATION,
							T.StorageTarget.USER,
						);
					}
				};
				(e.$STc = le),
					(e.$STc =
						le =
						te =
							Ne(
								[
									j(0, n.$Li),
									j(1, b.$IY),
									j(2, h.$GQb),
									j(3, a.$Ep),
									j(4, g.$gj),
									j(5, u.$km),
									j(6, v.$4N),
									j(7, s.$2rb),
									j(8, h.$IQb),
									j(9, p.$asb),
									j(10, $.$8N),
									j(11, h.$EQb),
									j(12, L.$nM),
									j(13, N.$UAc),
									j(14, A.$7Rb),
									j(15, D.$Bk),
									j(16, R.$6j),
									j(17, B.$JSb),
									j(18, y.$ik),
									j(19, U.$q2),
									j(20, x.$7Sb),
									j(21, q.$n6),
									j(22, P.$ll),
									j(23, G.$P8),
									j(24, T.$lq),
									j(25, J.$GO),
									j(26, A.$4Rb),
									j(27, W.$_rb),
									j(28, Y.$Vl),
									j(29, ie.$Vi),
								],
								le,
							));
			},
		),
		