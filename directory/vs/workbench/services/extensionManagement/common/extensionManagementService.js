import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import './extensionManagement.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../nls.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/network.js';
import '../../../../platform/download/common/download.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/severity.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../base/common/async.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../extensions/common/extensionManifestPropertiesService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/types.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/errors.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/extensionManagement/common/extensionsScannerService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/telemetry/common/telemetry.js';
define(
		de[4389],
		he([
			1, 0, 6, 119, 157, 109, 9, 3, 10, 33, 154, 4, 62, 23, 665, 24, 57, 111,
			150, 15, 174, 384, 5, 31, 28, 22, 34, 29, 133, 25, 958, 21, 68, 32,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*event*/,
			i /*extensionManagement*/,
			w /*extensionManagement*/,
			E /*extensions*/,
			C /*uri*/,
			d /*lifecycle*/,
			m /*configuration*/,
			r /*cancellation*/,
			u /*extensionManagementUtil*/,
			a /*nls*/,
			h /*productService*/,
			c /*network*/,
			n /*download*/,
			g /*arrays*/,
			p /*dialogs*/,
			o /*severity*/,
			f /*userDataSync*/,
			b /*async*/,
			s /*workspaceTrust*/,
			l /*extensionManifestPropertiesService*/,
			y /*instantiation*/,
			$ /*commands*/,
			v /*types*/,
			S /*files*/,
			I /*log*/,
			T /*errors*/,
			P /*userDataProfile*/,
			k /*workspace*/,
			L /*extensionsScannerService*/,
			D /*storage*/,
			M /*uriIdentity*/,
			N /*telemetry*/,
) {
			"use strict";
			var A;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$T5c = void 0),
				(o = xi(o));
			function R(U) {
				return U.type === "gallery";
			}
			let O = class extends d.$1c {
				constructor(z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
					super(),
						(this.j = z),
						(this.m = F),
						(this.n = x),
						(this.q = H),
						(this.t = q),
						(this.u = V),
						(this.w = G),
						(this.y = K),
						(this.z = J),
						(this.C = W),
						(this.F = X),
						(this.G = Y),
						(this.H = ie),
						(this.I = ne),
						(this.J = ee),
						(this.a = this.D(new t.$re())),
						(this.b = this.D(new t.$re())),
						(this.c = this.D(new t.$re())),
						(this.f = this.D(new t.$re())),
						(this.g = []),
						(this.h = this.D(this.H.createInstance(B))),
						(this.onDidEnableExtensions = this.h.onDidChangeInvalidExtensions),
						this.j.localExtensionManagementServer &&
							this.g.push(this.j.localExtensionManagementServer),
						this.j.remoteExtensionManagementServer &&
							this.g.push(this.j.remoteExtensionManagementServer),
						this.j.webExtensionManagementServer &&
							this.g.push(this.j.webExtensionManagementServer);
					const _ = this.D(new t.$xe());
					this.D(_.add(this.a.event)), (this.onInstallExtension = _.event);
					const te = this.D(new t.$xe());
					this.D(te.add(this.b.event)),
						(this.onDidInstallExtensions = te.event);
					const Q = this.D(new t.$xe());
					this.D(Q.add(this.c.event)), (this.onUninstallExtension = Q.event);
					const Z = this.D(new t.$xe());
					this.D(Z.add(this.f.event)), (this.onDidUninstallExtension = Z.event);
					const se = this.D(new t.$xe());
					this.onDidUpdateExtensionMetadata = se.event;
					const re = this.D(new t.$xe());
					this.onDidChangeProfile = re.event;
					for (const le of this.g)
						this.D(
							_.add(
								t.Event.map(
									le.extensionManagementService.onInstallExtension,
									(oe) => ({ ...oe, server: le }),
								),
							),
						),
							this.D(
								te.add(le.extensionManagementService.onDidInstallExtensions),
							),
							this.D(
								Q.add(
									t.Event.map(
										le.extensionManagementService.onUninstallExtension,
										(oe) => ({ ...oe, server: le }),
									),
								),
							),
							this.D(
								Z.add(
									t.Event.map(
										le.extensionManagementService.onDidUninstallExtension,
										(oe) => ({ ...oe, server: le }),
									),
								),
							),
							this.D(
								se.add(
									le.extensionManagementService.onDidUpdateExtensionMetadata,
								),
							),
							this.D(
								re.add(
									t.Event.map(
										le.extensionManagementService.onDidChangeProfile,
										(oe) => ({ ...oe, server: le }),
									),
								),
							);
				}
				async getInstalled(z, F, x) {
					const H = [];
					return (
						await Promise.all(
							this.g.map(async (q) => {
								const V = await q.extensionManagementService.getInstalled(
									z,
									F,
									x,
								);
								if (q === this.Z()) {
									const G = await this.getInstalledWorkspaceExtensions(!0);
									V.push(...G);
								}
								H.push(...V);
							}),
						),
						H
					);
				}
				uninstall(z, F) {
					return this.uninstallExtensions([{ extension: z, options: F }]);
				}
				async uninstallExtensions(z) {
					const F = [],
						x = new Map(),
						H = (K, J, W) => {
							let X = x.get(K);
							X || x.set(K, (X = [])), X.push({ extension: J, options: W });
						};
					for (const { extension: K, options: J } of z) {
						if (K.isWorkspaceScoped) {
							F.push(K);
							continue;
						}
						const W = this.Y(K);
						if (!W)
							throw new Error(`Invalid location ${K.location.toString()}`);
						if ((H(W, K, J), this.g.length > 1 && (0, E.$Kn)(K.manifest))) {
							const X = this.g.filter((Y) => Y !== W);
							for (const Y of X) {
								const ne = (
									await Y.extensionManagementService.getInstalled()
								).find(
									(ee) =>
										!ee.isBuiltin && (0, u.$7p)(ee.identifier, K.identifier),
								);
								ne && H(Y, ne, J);
							}
						}
					}
					const q = [];
					for (const K of F) q.push(this.R(K));
					for (const [K, J] of x.entries()) q.push(this.L(K, J));
					const G = (await Promise.allSettled(q))
						.filter((K) => K.status === "rejected")
						.map((K) => K.reason);
					if (G.length)
						throw new Error(
							G.map((K) => K.message).join(`
`),
						);
				}
				async L(z, F) {
					if (
						z === this.j.localExtensionManagementServer &&
						this.j.remoteExtensionManagementServer
					)
						for (const { extension: x } of F) {
							const q = (
								await this.j.remoteExtensionManagementServer.extensionManagementService.getInstalled(
									E.ExtensionType.User,
								)
							).filter(
								(V) =>
									!this.C.prefersExecuteOnUI(V.manifest) &&
									V.manifest.extensionDependencies &&
									V.manifest.extensionDependencies.some((G) =>
										(0, u.$7p)({ id: G }, x.identifier),
									),
							);
							if (q.length) throw new Error(this.M(x, q));
						}
					return z.extensionManagementService.uninstallExtensions(F);
				}
				M(z, F) {
					return F.length === 1
						? (0, a.localize)(
								12292,
								null,
								z.manifest.displayName || z.manifest.name,
								F[0].manifest.displayName || F[0].manifest.name,
							)
						: F.length === 2
							? (0, a.localize)(
									12293,
									null,
									z.manifest.displayName || z.manifest.name,
									F[0].manifest.displayName || F[0].manifest.name,
									F[1].manifest.displayName || F[1].manifest.name,
								)
							: (0, a.localize)(
									12294,
									null,
									z.manifest.displayName || z.manifest.name,
									F[0].manifest.displayName || F[0].manifest.name,
									F[1].manifest.displayName || F[1].manifest.name,
								);
				}
				async reinstallFromGallery(z) {
					const F = this.Y(z);
					return F
						? (await this.$(z.manifest, !1),
							F.extensionManagementService.reinstallFromGallery(z))
						: Promise.reject(`Invalid location ${z.location.toString()}`);
				}
				updateMetadata(z, F) {
					const x = this.Y(z);
					return x
						? x.extensionManagementService.updateMetadata(
								z,
								F,
								this.n.currentProfile.extensionsResource,
							)
						: Promise.reject(`Invalid location ${z.location.toString()}`);
				}
				async resetPinnedStateForAllUserExtensions(z) {
					await Promise.allSettled(
						this.g.map((F) =>
							F.extensionManagementService.resetPinnedStateForAllUserExtensions(
								z,
							),
						),
					);
				}
				zip(z) {
					const F = this.Y(z);
					return F
						? F.extensionManagementService.zip(z)
						: Promise.reject(`Invalid location ${z.location.toString()}`);
				}
				download(z, F, x) {
					if (this.j.localExtensionManagementServer)
						return this.j.localExtensionManagementServer.extensionManagementService.download(
							z,
							F,
							x,
						);
					throw new Error("Cannot download extension");
				}
				async install(z, F) {
					const x = await this.getManifest(z);
					return this.installVSIX(z, x, F);
				}
				async installVSIX(z, F, x) {
					const H = this.N(F);
					if (H?.length) {
						await this.$(F, !1);
						const [q] = await b.Promises.settled(H.map((V) => this.O(z, V, x)));
						return q;
					}
					return Promise.reject("No Servers to Install");
				}
				N(z) {
					if (
						this.j.localExtensionManagementServer &&
						this.j.remoteExtensionManagementServer
					)
						return (0, E.$Kn)(z)
							? [
									this.j.localExtensionManagementServer,
									this.j.remoteExtensionManagementServer,
								]
							: this.C.prefersExecuteOnUI(z)
								? [this.j.localExtensionManagementServer]
								: [this.j.remoteExtensionManagementServer];
					if (this.j.localExtensionManagementServer)
						return [this.j.localExtensionManagementServer];
					if (this.j.remoteExtensionManagementServer)
						return [this.j.remoteExtensionManagementServer];
				}
				async installFromLocation(z) {
					if (z.scheme === c.Schemas.file) {
						if (this.j.localExtensionManagementServer)
							return this.j.localExtensionManagementServer.extensionManagementService.installFromLocation(
								z,
								this.n.currentProfile.extensionsResource,
							);
						throw new Error("Local extension management server is not found");
					}
					if (z.scheme === c.Schemas.vscodeRemote) {
						if (this.j.remoteExtensionManagementServer)
							return this.j.remoteExtensionManagementServer.extensionManagementService.installFromLocation(
								z,
								this.n.currentProfile.extensionsResource,
							);
						throw new Error("Remote extension management server is not found");
					}
					if (!this.j.webExtensionManagementServer)
						throw new Error("Web extension management server is not found");
					return this.j.webExtensionManagementServer.extensionManagementService.installFromLocation(
						z,
						this.n.currentProfile.extensionsResource,
					);
				}
				O(z, F, x) {
					return F.extensionManagementService.install(z, x);
				}
				getManifest(z) {
					return z.scheme === c.Schemas.file &&
						this.j.localExtensionManagementServer
						? this.j.localExtensionManagementServer.extensionManagementService.getManifest(
								z,
							)
						: z.scheme === c.Schemas.file &&
								this.j.remoteExtensionManagementServer
							? this.j.remoteExtensionManagementServer.extensionManagementService.getManifest(
									z,
								)
							: z.scheme === c.Schemas.vscodeRemote &&
									this.j.remoteExtensionManagementServer
								? this.j.remoteExtensionManagementServer.extensionManagementService.getManifest(
										z,
									)
								: Promise.reject("No Servers");
				}
				async canInstall(z) {
					return R(z) ? this.P(z) : this.Q(z);
				}
				async P(z) {
					if (
						this.j.localExtensionManagementServer &&
						(await this.j.localExtensionManagementServer.extensionManagementService.canInstall(
							z,
						))
					)
						return !0;
					const F = await this.m.getManifest(z, r.CancellationToken.None);
					return F
						? !!(
								(this.j.remoteExtensionManagementServer &&
									(await this.j.remoteExtensionManagementServer.extensionManagementService.canInstall(
										z,
									)) &&
									this.C.canExecuteOnWorkspace(F)) ||
								(this.j.webExtensionManagementServer &&
									(await this.j.webExtensionManagementServer.extensionManagementService.canInstall(
										z,
									)) &&
									this.C.canExecuteOnWeb(F))
							)
						: !1;
				}
				Q(z) {
					return !!(
						this.j.localExtensionManagementServer ||
						(this.j.remoteExtensionManagementServer &&
							this.C.canExecuteOnWorkspace(z.manifest)) ||
						(this.j.webExtensionManagementServer &&
							this.C.canExecuteOnWeb(z.manifest))
					);
				}
				async updateFromGallery(z, F, x) {
					const H = this.Y(F);
					if (!H)
						return Promise.reject(`Invalid location ${F.location.toString()}`);
					const q = [];
					return (
						(0, E.$Kn)(F.manifest)
							? q.push(
									...this.g.filter(
										(V) => V !== this.j.webExtensionManagementServer,
									),
								)
							: q.push(H),
						(x = { ...(x || {}), isApplicationScoped: F.isApplicationScoped }),
						b.Promises.settled(
							q.map((V) =>
								V.extensionManagementService.installFromGallery(z, x),
							),
						).then(([V]) => V)
					);
				}
				async installGalleryExtensions(z) {
					const F = new Map(),
						x = new Map();
					return (
						await Promise.all(
							z.map(async ({ extension: H, options: q }) => {
								try {
									const V = await this.S(H, q);
									!q.isMachineScoped &&
										this.W() &&
										this.j.localExtensionManagementServer &&
										!V.includes(this.j.localExtensionManagementServer) &&
										(await this.j.localExtensionManagementServer.extensionManagementService.canInstall(
											H,
										)) &&
										V.push(this.j.localExtensionManagementServer);
									for (const G of V) {
										let K = x.get(G);
										K || x.set(G, (K = [])),
											K.push({ extension: H, options: q });
									}
								} catch (V) {
									F.set(H.identifier.id.toLowerCase(), {
										identifier: H.identifier,
										source: H,
										error: V,
										operation: i.InstallOperation.Install,
										profileLocation:
											q.profileLocation ??
											this.n.currentProfile.extensionsResource,
									});
								}
							}),
						),
						await Promise.all(
							[...x.entries()].map(async ([H, q]) => {
								const V =
									await H.extensionManagementService.installGalleryExtensions(
										q,
									);
								for (const G of V) F.set(G.identifier.id.toLowerCase(), G);
							}),
						),
						[...F.values()]
					);
				}
				async installFromGallery(z, F) {
					const x = await this.S(z, F);
					if (!F || (0, v.$sg)(F.isMachineScoped)) {
						const H = await this.X([z]);
						F = { ...(F || {}), isMachineScoped: H };
					}
					return (
						!F.isMachineScoped &&
							this.W() &&
							this.j.localExtensionManagementServer &&
							!x.includes(this.j.localExtensionManagementServer) &&
							(await this.j.localExtensionManagementServer.extensionManagementService.canInstall(
								z,
							)) &&
							x.push(this.j.localExtensionManagementServer),
						b.Promises.settled(
							x.map((H) =>
								H.extensionManagementService.installFromGallery(z, F),
							),
						).then(([H]) => H)
					);
				}
				async getExtensions(z) {
					const F = await this.I.scanMultipleExtensions(
							z,
							E.ExtensionType.User,
							{ includeInvalid: !0 },
						),
						x = [];
					return (
						await Promise.all(
							F.map(async (H) => {
								const q = await this.h.toLocalWorkspaceExtension(H);
								q &&
									x.push({
										type: "resource",
										identifier: q.identifier,
										location: q.location,
										manifest: q.manifest,
										changelogUri: q.changelogUrl,
										readmeUri: q.readmeUrl,
									});
							}),
						),
						x
					);
				}
				getInstalledWorkspaceExtensionLocations() {
					return this.h.getInstalledWorkspaceExtensionsLocations();
				}
				async getInstalledWorkspaceExtensions(z) {
					return this.h.getInstalled(z);
				}
				async installResourceExtension(z, F) {
					if (!this.Q(z))
						throw new Error(
							"This extension cannot be installed in the current workspace.",
						);
					if (!F.isWorkspaceScoped) return this.installFromLocation(z.location);
					this.G.info(
						`Installing the extension ${z.identifier.id} from ${z.location.toString()} in workspace`,
					);
					const x = this.Z();
					this.a.fire({
						identifier: z.identifier,
						source: z.location,
						server: x,
						applicationScoped: !1,
						profileLocation: this.n.currentProfile.extensionsResource,
						workspaceScoped: !0,
					});
					try {
						await this.$(z.manifest, !0);
						const H = await this.h.install(z);
						return (
							this.G.info(
								`Successfully installed the extension ${H.identifier.id} from ${z.location.toString()} in the workspace`,
							),
							this.b.fire([
								{
									identifier: H.identifier,
									source: z.location,
									operation: i.InstallOperation.Install,
									applicationScoped: !1,
									profileLocation: this.n.currentProfile.extensionsResource,
									local: H,
									workspaceScoped: !0,
								},
							]),
							H
						);
					} catch (H) {
						throw (
							(this.G.error(
								`Failed to install the extension ${z.identifier.id} from ${z.location.toString()} in the workspace`,
								(0, T.$bb)(H),
							),
							this.b.fire([
								{
									identifier: z.identifier,
									source: z.location,
									operation: i.InstallOperation.Install,
									applicationScoped: !1,
									profileLocation: this.n.currentProfile.extensionsResource,
									error: H,
									workspaceScoped: !0,
								},
							]),
							H)
						);
					}
				}
				async R(z) {
					if (!z.isWorkspaceScoped)
						throw new Error("The extension is not a workspace extension");
					this.G.info(
						`Uninstalling the workspace extension ${z.identifier.id} from ${z.location.toString()}`,
					);
					const F = this.Z();
					this.c.fire({
						identifier: z.identifier,
						server: F,
						applicationScoped: !1,
						workspaceScoped: !0,
						profileLocation: this.n.currentProfile.extensionsResource,
					});
					try {
						await this.h.uninstall(z),
							this.G.info(
								`Successfully uninstalled the workspace extension ${z.identifier.id} from ${z.location.toString()}`,
							),
							this.J.publicLog2("workspaceextension:uninstall"),
							this.f.fire({
								identifier: z.identifier,
								server: F,
								applicationScoped: !1,
								workspaceScoped: !0,
								profileLocation: this.n.currentProfile.extensionsResource,
							});
					} catch (x) {
						throw (
							(this.G.error(
								`Failed to uninstall the workspace extension ${z.identifier.id} from ${z.location.toString()}`,
								(0, T.$bb)(x),
							),
							this.f.fire({
								identifier: z.identifier,
								server: F,
								error: x,
								applicationScoped: !1,
								workspaceScoped: !0,
								profileLocation: this.n.currentProfile.extensionsResource,
							}),
							x)
						);
					}
				}
				async S(z, F) {
					const x = await this.m.getManifest(z, r.CancellationToken.None);
					if (!x)
						return Promise.reject(
							(0, a.localize)(12295, null, z.displayName || z.name),
						);
					const H = [];
					if ((0, E.$Kn)(x))
						H.push(
							...this.g.filter(
								(q) => q !== this.j.webExtensionManagementServer,
							),
						);
					else {
						const q = this.U(x);
						q && H.push(q);
					}
					if (!H.length) {
						const q = new Error(
							(0, a.localize)(12296, null, z.displayName || z.name),
						);
						throw ((q.name = i.ExtensionManagementErrorCode.Unsupported), q);
					}
					return (
						F?.context?.[i.$vp] !== i.ExtensionInstallSource.SETTINGS_SYNC &&
							(await this.$(x, !1)),
						F?.donotIncludePackAndDependencies || (await this.ab(z, x)),
						H
					);
				}
				U(z) {
					if (this.g.length === 1 && this.j.localExtensionManagementServer)
						return this.j.localExtensionManagementServer;
					const F = this.C.getExtensionKind(z);
					for (const x of F) {
						if (x === "ui" && this.j.localExtensionManagementServer)
							return this.j.localExtensionManagementServer;
						if (x === "workspace" && this.j.remoteExtensionManagementServer)
							return this.j.remoteExtensionManagementServer;
						if (x === "web" && this.j.webExtensionManagementServer)
							return this.j.webExtensionManagementServer;
					}
					return this.j.localExtensionManagementServer;
				}
				W() {
					return (
						this.w.isEnabled() &&
						this.w.isResourceEnabled(f.SyncResource.Extensions)
					);
				}
				async X(z) {
					if (this.W()) {
						const { result: F } = await this.y.prompt({
							type: o.default.Info,
							message:
								z.length === 1
									? (0, a.localize)(12297, null)
									: (0, a.localize)(12298, null),
							detail:
								z.length === 1
									? (0, a.localize)(12299, null, z[0].displayName)
									: (0, a.localize)(12300, null),
							buttons: [
								{ label: (0, a.localize)(12301, null), run: () => !1 },
								{ label: (0, a.localize)(12302, null), run: () => !0 },
							],
							cancelButton: {
								run: () => {
									throw new T.$9();
								},
							},
						});
						return F;
					}
					return !1;
				}
				getExtensionsControlManifest() {
					return this.j.localExtensionManagementServer
						? this.j.localExtensionManagementServer.extensionManagementService.getExtensionsControlManifest()
						: this.j.remoteExtensionManagementServer
							? this.j.remoteExtensionManagementServer.extensionManagementService.getExtensionsControlManifest()
							: this.j.webExtensionManagementServer
								? this.j.webExtensionManagementServer.extensionManagementService.getExtensionsControlManifest()
								: Promise.resolve({
										malicious: [],
										deprecated: {},
										search: [],
									});
				}
				Y(z) {
					return z.isWorkspaceScoped
						? this.Z()
						: this.j.getExtensionManagementServer(z);
				}
				Z() {
					if (this.j.remoteExtensionManagementServer)
						return this.j.remoteExtensionManagementServer;
					if (this.j.localExtensionManagementServer)
						return this.j.localExtensionManagementServer;
					if (this.j.webExtensionManagementServer)
						return this.j.webExtensionManagementServer;
					throw new Error("No extension server found");
				}
				async $(z, F) {
					if (F || this.C.getExtensionUntrustedWorkspaceSupportType(z) === !1) {
						const x = [];
						if (
							(x.push({
								label: (0, a.localize)(12303, null),
								type: "ContinueWithTrust",
							}),
							F ||
								x.push({
									label: (0, a.localize)(12304, null),
									type: "ContinueWithoutTrust",
								}),
							x.push({ label: (0, a.localize)(12305, null), type: "Manage" }),
							(await this.z.requestWorkspaceTrust({
								message: (0, a.localize)(12306, null),
								buttons: x,
							})) === void 0)
						)
							throw new T.$9();
					}
				}
				async ab(z, F) {
					if (
						this.g.length !== 1 ||
						this.g[0] !== this.j.webExtensionManagementServer
					)
						return;
					const x = [];
					if (F.extensionPack?.length) {
						const ne = await this.m.getExtensions(
							F.extensionPack.map((ee) => ({ id: ee })),
							r.CancellationToken.None,
						);
						for (const ee of ne)
							(await this.g[0].extensionManagementService.canInstall(ee)) ||
								x.push(ee);
						if (x.length && x.length === ne.length)
							throw new i.$Gp(
								"Not supported in Web",
								i.ExtensionManagementErrorCode.Unsupported,
							);
					}
					const H = (0, a.localize)(12307, null, this.t.nameLong),
						q = this.C.getExtensionVirtualWorkspaceSupportType(F),
						V = (0, E.$En)(F.capabilities?.virtualWorkspaces),
						G = q === "limited" || !!V;
					if (!x.length && !G) return;
					const K = (0, a.localize)(
						12308,
						null,
						z.displayName || z.identifier.id,
						H,
					);
					let J,
						W = [],
						X;
					const Y = { label: (0, a.localize)(12309, null), run: () => {} },
						ie = {
							label: (0, a.localize)(12310, null),
							run: () =>
								this.H.invokeFunction((ne) =>
									ne
										.get($.$ek)
										.executeCommand(
											"extension.open",
											z.identifier.id,
											"extensionPack",
										),
								),
						};
					x.length && G
						? ((J = K),
							(X = `${
								V
									? `${V}
`
									: ""
							}${(0, a.localize)(12311, null)}`),
							(W = [Y, ie]))
						: G
							? ((J = K), (X = V || void 0), (W = [Y]))
							: ((J = (0, a.localize)(
									12312,
									null,
									z.displayName || z.identifier.id,
									H,
								)),
								(W = [Y, ie])),
						await this.y.prompt({
							type: o.default.Info,
							message: J,
							detail: X,
							buttons: W,
							cancelButton: {
								run: () => {
									throw new T.$9();
								},
							},
						});
				}
				getTargetPlatform() {
					return this.bb || (this.bb = (0, u.$fq)(this.F, this.G)), this.bb;
				}
				async cleanUp() {
					await Promise.allSettled(
						this.g.map((z) => z.extensionManagementService.cleanUp()),
					);
				}
				toggleAppliationScope(z, F) {
					const x = this.Y(z);
					if (x)
						return x.extensionManagementService.toggleAppliationScope(z, F);
					throw new Error("Not Supported");
				}
				copyExtensions(z, F) {
					if (this.j.remoteExtensionManagementServer)
						throw new Error("Not Supported");
					return this.j.localExtensionManagementServer
						? this.j.localExtensionManagementServer.extensionManagementService.copyExtensions(
								z,
								F,
							)
						: this.j.webExtensionManagementServer
							? this.j.webExtensionManagementServer.extensionManagementService.copyExtensions(
									z,
									F,
								)
							: Promise.resolve();
				}
				registerParticipant() {
					throw new Error("Not Supported");
				}
				installExtensionsFromProfile(z, F, x) {
					throw new Error("Not Supported");
				}
			};
			(e.$T5c = O),
				(e.$T5c = O =
					Ne(
						[
							j(0, w.$EQb),
							j(1, i.$Ep),
							j(2, P.$P8),
							j(3, m.$gj),
							j(4, h.$Bk),
							j(5, n.$gp),
							j(6, f.$4Rb),
							j(7, p.$GO),
							j(8, s.$qO),
							j(9, l.$JSb),
							j(10, S.$ll),
							j(11, I.$ik),
							j(12, y.$Li),
							j(13, L.$dr),
							j(14, N.$km),
						],
						O,
					));
			let B = class extends d.$1c {
				static {
					A = this;
				}
				static {
					this.a = "workspaceExtensions.locations";
				}
				constructor(z, F, x, H, q, V, G) {
					super(),
						(this.h = z),
						(this.j = F),
						(this.m = x),
						(this.n = H),
						(this.q = q),
						(this.t = V),
						(this.u = G),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeInvalidExtensions = this.b.event),
						(this.c = []),
						(this.g = this.D(new d.$Zc())),
						this.D(
							t.Event.debounce(
								this.h.onDidFilesChange,
								(K, J) => ((K = K ?? []).push(J), K),
								1e3,
							)((K) => {
								const J = this.c.filter(
									(W) => !W.isValid && K.some((X) => X.affects(W.location)),
								);
								J.length && this.z(J);
							}),
						),
						(this.f = this.w());
				}
				async w() {
					const z = this.getInstalledWorkspaceExtensionsLocations();
					z.length &&
						(await Promise.allSettled(
							z.map(async (F) => {
								if (!this.m.isInsideWorkspace(F)) {
									this.j.info(
										`Removing the workspace extension ${F.toString()} as it is not inside the workspace`,
									);
									return;
								}
								if (!(await this.h.exists(F))) {
									this.j.info(
										`Removing the workspace extension ${F.toString()} as it does not exist`,
									);
									return;
								}
								try {
									const x = await this.scanWorkspaceExtension(F);
									x
										? this.c.push(x)
										: this.j.info(
												`Skipping workspace extension ${F.toString()} as it does not exist`,
											);
								} catch (x) {
									this.j.error(
										"Skipping the workspace extension",
										F.toString(),
										x,
									);
								}
							}),
						),
						this.C());
				}
				y() {
					this.g.clear();
					for (const z of this.c)
						z.isValid || this.g.add(this.h.watch(z.location));
				}
				async z(z) {
					const F = [];
					await Promise.all(
						z.map(async (H) => {
							const q = await this.scanWorkspaceExtension(H.location);
							q?.isValid && F.push(q);
						}),
					);
					let x = !1;
					for (const H of F) {
						const q = this.c.findIndex((V) =>
							this.t.extUri.isEqual(V.location, H.location),
						);
						q !== -1 && ((x = !0), this.c.splice(q, 1, H));
					}
					x && (this.C(), this.b.fire(F));
				}
				async getInstalled(z) {
					return await this.f, this.c.filter((F) => z || F.isValid);
				}
				async install(z) {
					await this.f;
					const F = await this.scanWorkspaceExtension(z.location);
					if (!F)
						throw new Error(
							"Cannot install the extension as it does not exist.",
						);
					const x = this.c.findIndex((H) =>
						(0, u.$7p)(H.identifier, z.identifier),
					);
					return (
						x === -1 ? this.c.push(F) : this.c.splice(x, 1, F),
						this.C(),
						this.u.publicLog2("workspaceextension:install"),
						F
					);
				}
				async uninstall(z) {
					await this.f;
					const F = this.c.findIndex((x) =>
						(0, u.$7p)(x.identifier, z.identifier),
					);
					F !== -1 && (this.c.splice(F, 1), this.C()),
						this.u.publicLog2("workspaceextension:uninstall");
				}
				getInstalledWorkspaceExtensionsLocations() {
					const z = [];
					try {
						const F = JSON.parse(
							this.q.get(A.a, D.StorageScope.WORKSPACE, "[]"),
						);
						if (Array.isArray(z))
							for (const x of F)
								(0, v.$lg)(x)
									? this.m.getWorkbenchState() === k.WorkbenchState.FOLDER
										? z.push(this.m.getWorkspace().folders[0].toResource(x))
										: this.j.warn(
												`Invalid value for 'extensions' in workspace storage: ${x}`,
											)
									: z.push(C.URI.revive(x));
						else
							this.j.warn(
								`Invalid value for 'extensions' in workspace storage: ${z}`,
							);
					} catch (F) {
						this.j.warn(
							`Error parsing workspace extensions locations: ${(0, T.$bb)(F)}`,
						);
					}
					return z;
				}
				C() {
					const z = this.c.map((F) => F.location);
					this.m.getWorkbenchState() === k.WorkbenchState.FOLDER
						? this.q.store(
								A.a,
								JSON.stringify(
									(0, g.$Lb)(
										z.map((F) =>
											this.t.extUri.relativePath(
												this.m.getWorkspace().folders[0].uri,
												F,
											),
										),
									),
								),
								D.StorageScope.WORKSPACE,
								D.StorageTarget.MACHINE,
							)
						: this.q.store(
								A.a,
								JSON.stringify(z),
								D.StorageScope.WORKSPACE,
								D.StorageTarget.MACHINE,
							),
						this.y();
				}
				async scanWorkspaceExtension(z) {
					const F = await this.n.scanExistingExtension(
						z,
						E.ExtensionType.User,
						{ includeInvalid: !0 },
					);
					return F ? this.toLocalWorkspaceExtension(F) : null;
				}
				async toLocalWorkspaceExtension(z) {
					const F = await this.h.resolve(z.location);
					let x, H;
					F.children &&
						((x = F.children.find(({ name: G }) =>
							/^readme(\.txt|\.md|)$/i.test(G),
						)?.resource),
						(H = F.children.find(({ name: G }) =>
							/^changelog(\.txt|\.md|)$/i.test(G),
						)?.resource));
					const q = [...z.validations];
					let V = z.isValid;
					return (
						z.manifest.main &&
							((await this.h.exists(
								this.t.extUri.joinPath(z.location, z.manifest.main),
							)) ||
								((V = !1),
								q.push([
									o.default.Error,
									(0, a.localize)(12313, null, z.manifest.main),
								]))),
						{
							identifier: z.identifier,
							type: z.type,
							isBuiltin: z.isBuiltin || !!z.metadata?.isBuiltin,
							location: z.location,
							manifest: z.manifest,
							targetPlatform: z.targetPlatform,
							validations: q,
							isValid: V,
							readmeUrl: x,
							changelogUrl: H,
							publisherDisplayName: z.metadata?.publisherDisplayName,
							publisherId: z.metadata?.publisherId || null,
							isApplicationScoped: !!z.metadata?.isApplicationScoped,
							isMachineScoped: !!z.metadata?.isMachineScoped,
							isPreReleaseVersion: !!z.metadata?.isPreReleaseVersion,
							hasPreReleaseVersion: !!z.metadata?.hasPreReleaseVersion,
							preRelease: !!z.metadata?.preRelease,
							installedTimestamp: z.metadata?.installedTimestamp,
							updated: !!z.metadata?.updated,
							pinned: !!z.metadata?.pinned,
							isWorkspaceScoped: !0,
							source: "resource",
						}
					);
				}
			};
			B = A = Ne(
				[
					j(0, S.$ll),
					j(1, I.$ik),
					j(2, k.$Vi),
					j(3, L.$dr),
					j(4, D.$lq),
					j(5, M.$Vl),
					j(6, N.$km),
				],
				B,
			);
		},
	),
		