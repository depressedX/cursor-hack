import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/objects.js';
import '../../../base/common/buffer.js';
import '../../../base/common/errors.js';
import '../../../base/common/json.js';
import '../../../base/common/jsonErrorMessages.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/path.js';
import '../../../base/common/platform.js';
import '../../../base/common/resources.js';
import '../../../base/common/semver/semver.js';
import '../../../base/common/severity.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../environment/common/environment.js';
import './extensionManagementUtil.js';
import '../../extensions/common/extensions.js';
import '../../extensions/common/extensionValidator.js';
import '../../files/common/files.js';
import '../../instantiation/common/instantiation.js';
import '../../log/common/log.js';
import '../../product/common/productService.js';
import '../../../base/common/event.js';
import '../../../base/common/marshalling.js';
import './extensionsProfileScannerService.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../uriIdentity/common/uriIdentity.js';
import './extensionNls.js';
define(
		de[958],
		he([
			1, 0, 24, 15, 82, 76, 29, 187, 754, 3, 23, 54, 12, 19, 464, 111, 28, 9, 4,
			113, 154, 109, 772, 22, 5, 34, 62, 6, 197, 1214, 129, 68, 1598,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hr = e.$fr = e.$er = e.$dr = e.Translations = void 0),
				(e.$gr = U),
				(w = mt(w)),
				(a = mt(a)),
				(h = mt(h)),
				(n = mt(n)),
				(g = xi(g));
			var N;
			(function (F) {
				function x(H, q) {
					if (H === q) return !0;
					const V = Object.keys(H),
						G = new Set();
					for (const K of Object.keys(q)) G.add(K);
					if (V.length !== G.size) return !1;
					for (const K of V) {
						if (H[K] !== q[K]) return !1;
						G.delete(K);
					}
					return G.size === 0;
				}
				F.equals = x;
			})(N || (e.Translations = N = {})),
				(e.$dr = (0, v.$Mi)("IExtensionsScannerService"));
			let A = class extends r.$1c {
				constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
					super(),
						(this.systemExtensionsLocation = x),
						(this.userExtensionsLocation = H),
						(this.q = q),
						(this.r = V),
						(this.s = G),
						(this.t = K),
						(this.u = J),
						(this.w = W),
						(this.y = X),
						(this.z = Y),
						(this.C = ie),
						(this.F = ne),
						(this.g = this.D(new T.$re())),
						(this.onDidChangeCache = this.g.event),
						(this.h = (0, c.$nh)(this.userExtensionsLocation, ".obsolete")),
						(this.j = this.D(this.F.createInstance(B, this.r, this.h))),
						(this.m = this.D(this.F.createInstance(B, this.r, this.h))),
						(this.n = this.D(this.F.createInstance(O, this.h))),
						(this.H = void 0),
						this.D(
							this.j.onDidChangeCache(() =>
								this.g.fire(l.ExtensionType.System),
							),
						),
						this.D(
							this.m.onDidChangeCache(() => this.g.fire(l.ExtensionType.User)),
						);
				}
				getTargetPlatform() {
					return this.G || (this.G = (0, s.$fq)(this.u, this.w)), this.G;
				}
				async scanAllExtensions(x, H, q) {
					const [V, G] = await Promise.all([
							this.scanSystemExtensions(x),
							this.scanUserExtensions(H),
						]),
						K = q
							? await this.scanExtensionsUnderDevelopment(x, [...V, ...G])
							: [];
					return this.L(V, G, K, await this.getTargetPlatform(), !0);
				}
				async scanSystemExtensions(x) {
					const H = [];
					H.push(this.M(!!x.useCache, x.language)),
						H.push(this.N(x.language, !!x.checkControlFile));
					const [q, V] = await Promise.all(H);
					return this.J([...q, ...V], l.ExtensionType.System, x, !1);
				}
				async scanUserExtensions(x) {
					const H = x.profileLocation ?? this.userExtensionsLocation;
					this.w.trace("Started scanning user extensions", H);
					const q = this.C.extUri.isEqual(
							x.profileLocation,
							this.s.defaultProfile.extensionsResource,
						)
							? { bailOutWhenFileNotFound: !0 }
							: void 0,
						V = await this.P(
							H,
							!!x.profileLocation,
							l.ExtensionType.User,
							!x.includeUninstalled,
							x.language,
							!0,
							q,
							x.productVersion ?? this.R(),
						),
						G = x.useCache && !V.devMode && V.excludeObsolete ? this.m : this.n;
					let K;
					try {
						K = await G.scanExtensions(V);
					} catch (J) {
						if (
							J instanceof k.$$q &&
							J.code ===
								k.ExtensionsProfileScanningErrorCode.ERROR_PROFILE_NOT_FOUND
						)
							await this.I(), (K = await G.scanExtensions(V));
						else throw J;
					}
					return (
						(K = await this.J(K, l.ExtensionType.User, x, !0)),
						this.w.trace("Scanned user extensions:", K.length),
						K
					);
				}
				async scanExtensionsUnderDevelopment(x, H) {
					if (
						this.y.isExtensionDevelopment &&
						this.y.extensionDevelopmentLocationURI
					) {
						const q = (
							await Promise.all(
								this.y.extensionDevelopmentLocationURI
									.filter((V) => V.scheme === u.Schemas.file)
									.map(async (V) => {
										const G = await this.P(
											V,
											!1,
											l.ExtensionType.User,
											!0,
											x.language,
											!1,
											void 0,
											x.productVersion ?? this.R(),
										);
										return (await this.n.scanOneOrMultipleExtensions(G)).map(
											(J) => (
												(J.type =
													H.find((W) => (0, s.$7p)(W.identifier, J.identifier))
														?.type ?? J.type),
												this.n.validate(J, G)
											),
										);
									}),
							)
						).flat();
						return this.J(q, "development", x, !0);
					}
					return [];
				}
				async scanExistingExtension(x, H, q) {
					const V = await this.P(
							x,
							!1,
							H,
							!0,
							q.language,
							!0,
							void 0,
							q.productVersion ?? this.R(),
						),
						G = await this.n.scanExtension(V);
					return !G || (!q.includeInvalid && !G.isValid) ? null : G;
				}
				async scanOneOrMultipleExtensions(x, H, q) {
					const V = await this.P(
							x,
							!1,
							H,
							!0,
							q.language,
							!0,
							void 0,
							q.productVersion ?? this.R(),
						),
						G = await this.n.scanOneOrMultipleExtensions(V);
					return this.J(G, H, q, !0);
				}
				async scanMultipleExtensions(x, H, q) {
					const V = [];
					return (
						await Promise.all(
							x.map(async (G) => {
								const K = await this.scanOneOrMultipleExtensions(G, H, q);
								V.push(...K);
							}),
						),
						this.J(V, H, q, !0)
					);
				}
				async scanMetadata(x) {
					const H = (0, c.$nh)(x, "package.json"),
						q = (await this.u.readFile(H)).value.toString();
					return JSON.parse(q).__metadata;
				}
				async updateMetadata(x, H) {
					const q = (0, c.$nh)(x, "package.json"),
						V = (await this.u.readFile(q)).value.toString(),
						G = JSON.parse(V);
					H.isMachineScoped === !1 && delete H.isMachineScoped,
						H.isBuiltin === !1 && delete H.isBuiltin,
						(G.__metadata = { ...G.__metadata, ...H }),
						await this.u.writeFile(
							(0, c.$nh)(x, "package.json"),
							E.$Te.fromString(JSON.stringify(G, null, "	")),
						);
				}
				async initializeDefaultProfileExtensions() {
					try {
						await this.t.scanProfileExtensions(
							this.s.defaultProfile.extensionsResource,
							{ bailOutWhenFileNotFound: !0 },
						);
					} catch (x) {
						if (
							x instanceof k.$$q &&
							x.code ===
								k.ExtensionsProfileScanningErrorCode.ERROR_PROFILE_NOT_FOUND
						)
							await this.I();
						else throw x;
					}
				}
				async I() {
					return (
						this.H ||
							(this.H = (async () => {
								try {
									this.w.info(
										"Started initializing default profile extensions in extensions installation folder.",
										this.userExtensionsLocation.toString(),
									);
									const x = await this.scanUserExtensions({
										includeInvalid: !0,
									});
									if (x.length)
										await this.t.addExtensionsToProfile(
											x.map((H) => [H, H.metadata]),
											this.s.defaultProfile.extensionsResource,
										);
									else
										try {
											await this.u.createFile(
												this.s.defaultProfile.extensionsResource,
												E.$Te.fromString(JSON.stringify([])),
											);
										} catch (H) {
											(0, $.$Cl)(H) !== $.FileOperationResult.FILE_NOT_FOUND &&
												this.w.warn(
													"Failed to create default profile extensions manifest in extensions installation folder.",
													this.userExtensionsLocation.toString(),
													(0, C.$bb)(H),
												);
										}
									this.w.info(
										"Completed initializing default profile extensions in extensions installation folder.",
										this.userExtensionsLocation.toString(),
									);
								} catch (x) {
									this.w.error(x);
								} finally {
									this.H = void 0;
								}
							})()),
						this.H
					);
				}
				async J(x, H, q, V) {
					return (
						q.includeAllVersions ||
							(x = this.L(
								H === l.ExtensionType.System ? x : void 0,
								H === l.ExtensionType.User ? x : void 0,
								H === "development" ? x : void 0,
								await this.getTargetPlatform(),
								V,
							)),
						q.includeInvalid || (x = x.filter((G) => G.isValid)),
						x.sort((G, K) => {
							const J = a.$sc(G.location.fsPath),
								W = a.$sc(K.location.fsPath);
							return J < W ? -1 : J > W ? 1 : 0;
						})
					);
				}
				L(x, H, q, V, G) {
					const K = (W, X, Y) => {
							if (W.isValid && !X.isValid) return !1;
							if (W.isValid === X.isValid) {
								if (G && n.gt(W.manifest.version, X.manifest.version))
									return (
										this.w.debug(
											`Skipping extension ${X.location.path} with lower version ${X.manifest.version} in favour of ${W.location.path} with version ${W.manifest.version}`,
										),
										!1
									);
								if (n.eq(W.manifest.version, X.manifest.version)) {
									if (W.type === l.ExtensionType.System)
										return (
											this.w.debug(
												`Skipping extension ${X.location.path} in favour of system extension ${W.location.path} with same version`,
											),
											!1
										);
									if (W.targetPlatform === V)
										return (
											this.w.debug(
												`Skipping extension ${X.location.path} from different target platform ${X.targetPlatform}`,
											),
											!1
										);
								}
							}
							return (
								Y
									? this.w.warn(
											`Overwriting user extension ${W.location.path} with ${X.location.path}.`,
										)
									: this.w.debug(
											`Overwriting user extension ${W.location.path} with ${X.location.path}.`,
										),
								!0
							);
						},
						J = new l.$In();
					return (
						x?.forEach((W) => {
							const X = J.get(W.identifier.id);
							(!X || K(X, W, !1)) && J.set(W.identifier.id, W);
						}),
						H?.forEach((W) => {
							const X = J.get(W.identifier.id);
							if (!X && x && W.type === l.ExtensionType.System) {
								this.w.debug(
									`Skipping obsolete system extension ${W.location.path}.`,
								);
								return;
							}
							(!X || K(X, W, !1)) && J.set(W.identifier.id, W);
						}),
						q?.forEach((W) => {
							const X = J.get(W.identifier.id);
							(!X || K(X, W, !0)) && J.set(W.identifier.id, W),
								J.set(W.identifier.id, W);
						}),
						[...J.values()]
					);
				}
				async M(x, H) {
					this.w.trace("Started scanning system extensions");
					const q = await this.P(
							this.systemExtensionsLocation,
							!1,
							l.ExtensionType.System,
							!0,
							H,
							!0,
							void 0,
							this.R(),
						),
						G = await (x && !q.devMode ? this.j : this.n).scanExtensions(q);
					return this.w.trace("Scanned system extensions:", G.length), G;
				}
				async N(x, H) {
					const q = this.y.isBuilt ? [] : this.z.builtInExtensions;
					if (!q?.length) return [];
					this.w.trace("Started scanning dev system extensions");
					const V = H ? await this.O() : {},
						G = [],
						K = o.URI.file(
							a.$mc(
								a.$oc(
									u.$7g.asFileUri("").fsPath,
									"..",
									".build",
									"builtInExtensions",
								),
							),
						);
					for (const W of q) {
						const X = V[W.name] || "marketplace";
						switch (X) {
							case "disabled":
								break;
							case "marketplace":
								G.push((0, c.$nh)(K, W.name));
								break;
							default:
								G.push(o.URI.file(X));
								break;
						}
					}
					const J = await Promise.all(
						G.map(async (W) =>
							this.n.scanExtension(
								await this.P(
									W,
									!1,
									l.ExtensionType.System,
									!0,
									x,
									!0,
									void 0,
									this.R(),
								),
							),
						),
					);
					return (
						this.w.trace("Scanned dev system extensions:", J.length),
						(0, t.$Lb)(J)
					);
				}
				async O() {
					try {
						const x = await this.u.readFile(this.q);
						return JSON.parse(x.value.toString());
					} catch {
						return {};
					}
				}
				async P(x, H, q, V, G, K, J, W) {
					const X = await this.f(G ?? h.$z),
						Y = await this.Q(x),
						ie =
							H &&
							!this.C.extUri.isEqual(
								x,
								this.s.defaultProfile.extensionsResource,
							)
								? this.s.defaultProfile.extensionsResource
								: void 0,
						ne = ie ? await this.Q(ie) : void 0;
					return new R(
						x,
						Y,
						ie,
						ne,
						H,
						J,
						q,
						V,
						K,
						W.vscodeVersion,
						W.date,
						this.z.commit,
						!this.y.isBuilt,
						G,
						X,
					);
				}
				async Q(x) {
					try {
						const H = await this.u.stat(x);
						if (typeof H.mtime == "number") return H.mtime;
					} catch {}
				}
				R() {
					return {
						vscodeVersion: this.z.vscodeVersion,
						version: this.z.version,
						date: this.z.date,
					};
				}
			};
			(e.$er = A),
				(e.$er = A =
					Ne(
						[
							j(4, L.$Xl),
							j(5, k.$_q),
							j(6, $.$ll),
							j(7, S.$ik),
							j(8, b.$Ti),
							j(9, I.$Bk),
							j(10, D.$Vl),
							j(11, v.$Li),
						],
						A,
					));
			class R {
				constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne, ee, _, te) {
					(this.location = x),
						(this.mtime = H),
						(this.applicationExtensionslocation = q),
						(this.applicationExtensionslocationMtime = V),
						(this.profile = G),
						(this.profileScanOptions = K),
						(this.type = J),
						(this.excludeObsolete = W),
						(this.validate = X),
						(this.productVersion = Y),
						(this.productDate = ie),
						(this.productCommit = ne),
						(this.devMode = ee),
						(this.language = _),
						(this.translations = te);
				}
				static createNlsConfiguration(x) {
					return {
						language: x.language,
						pseudo: x.language === "pseudo",
						devMode: x.devMode,
						translations: x.translations,
					};
				}
				static equals(x, H) {
					return (
						(0, c.$gh)(x.location, H.location) &&
						x.mtime === H.mtime &&
						(0, c.$gh)(
							x.applicationExtensionslocation,
							H.applicationExtensionslocation,
						) &&
						x.applicationExtensionslocationMtime ===
							H.applicationExtensionslocationMtime &&
						x.profile === H.profile &&
						w.$zo(x.profileScanOptions, H.profileScanOptions) &&
						x.type === H.type &&
						x.excludeObsolete === H.excludeObsolete &&
						x.validate === H.validate &&
						x.productVersion === H.productVersion &&
						x.productDate === H.productDate &&
						x.productCommit === H.productCommit &&
						x.devMode === H.devMode &&
						x.language === H.language &&
						N.equals(x.translations, H.translations)
					);
				}
			}
			e.$fr = R;
			let O = class extends r.$1c {
				constructor(x, H, q, V, G, K, J) {
					super(),
						(this.g = x),
						(this.h = H),
						(this.j = q),
						(this.m = V),
						(this.n = K),
						(this.q = J),
						(this.f =
							G.extensionsEnabledWithApiProposalVersion?.map((W) =>
								W.toLowerCase(),
							) ?? []);
				}
				async scanExtensions(x) {
					const H = x.profile ? await this.s(x) : await this.r(x);
					let q = {};
					if (x.excludeObsolete && x.type === l.ExtensionType.User)
						try {
							const V = (await this.m.readFile(this.g)).value.toString();
							q = JSON.parse(V);
						} catch {}
					return (0, p.$yg)(q)
						? H
						: H.filter((V) => !q[s.$8p.create(V).toString()]);
				}
				async r(x) {
					const H = await this.m.resolve(x.location);
					if (!H.children?.length) return [];
					const q = await Promise.all(
						H.children.map(async (V) => {
							if (
								!V.isDirectory ||
								(x.type === l.ExtensionType.User &&
									(0, c.$kh)(V.resource).indexOf(".") === 0)
							)
								return null;
							const G = new R(
								V.resource,
								x.mtime,
								x.applicationExtensionslocation,
								x.applicationExtensionslocationMtime,
								x.profile,
								x.profileScanOptions,
								x.type,
								x.excludeObsolete,
								x.validate,
								x.productVersion,
								x.productDate,
								x.productCommit,
								x.devMode,
								x.language,
								x.translations,
							);
							return this.scanExtension(G);
						}),
					);
					return (0, t.$Lb)(q).sort((V, G) =>
						V.location.path < G.location.path ? -1 : 1,
					);
				}
				async s(x) {
					let H = await this.t(x.location, () => !0, x);
					if (
						x.applicationExtensionslocation &&
						!this.j.extUri.isEqual(x.location, x.applicationExtensionslocation)
					) {
						H = H.filter((V) => !V.metadata?.isApplicationScoped);
						const q = await this.t(
							x.applicationExtensionslocation,
							(V) =>
								!!V.metadata?.isBuiltin || !!V.metadata?.isApplicationScoped,
							x,
						);
						H.push(...q);
					}
					return H;
				}
				async t(x, H, q) {
					const V = await this.h.scanProfileExtensions(x, q.profileScanOptions);
					if (!V.length) return [];
					const G = await Promise.all(
						V.map(async (K) => {
							if (H(K)) {
								const J = new R(
									K.location,
									q.mtime,
									q.applicationExtensionslocation,
									q.applicationExtensionslocationMtime,
									q.profile,
									q.profileScanOptions,
									q.type,
									q.excludeObsolete,
									q.validate,
									q.productVersion,
									q.productDate,
									q.productCommit,
									q.devMode,
									q.language,
									q.translations,
								);
								return this.scanExtension(J, K.metadata);
							}
							return null;
						}),
					);
					return (0, t.$Lb)(G);
				}
				async scanOneOrMultipleExtensions(x) {
					try {
						if (await this.m.exists((0, c.$nh)(x.location, "package.json"))) {
							const H = await this.scanExtension(x);
							return H ? [H] : [];
						} else return await this.scanExtensions(x);
					} catch (H) {
						return (
							this.q.error(
								`Error scanning extensions at ${x.location.path}:`,
								(0, C.$bb)(H),
							),
							[]
						);
					}
				}
				async scanExtension(x, H) {
					try {
						let q = await this.u(x.location);
						if (q) {
							q.publisher || (q.publisher = l.$Cn),
								(H = H ?? q.__metadata),
								delete q.__metadata;
							const V = (0, s.$_p)(q.publisher, q.name),
								G = H?.id ? { id: V, uuid: H.id } : { id: V },
								K = H?.isSystem ? l.ExtensionType.System : x.type,
								J = K === l.ExtensionType.System || !!H?.isBuiltin;
							q = await this.w(x.location, q, R.createNlsConfiguration(x));
							let W = {
								type: K,
								identifier: G,
								manifest: q,
								location: x.location,
								isBuiltin: J,
								targetPlatform: H?.targetPlatform ?? l.TargetPlatform.UNDEFINED,
								publisherDisplayName: H?.publisherDisplayName,
								metadata: H,
								isValid: !0,
								validations: [],
							};
							return (
								x.validate && (W = this.validate(W, x)),
								q.enabledApiProposals &&
									(!this.n.isBuilt || this.f.includes(V.toLowerCase())) &&
									((q.originalEnabledApiProposals = q.enabledApiProposals),
									(q.enabledApiProposals = (0, l.$On)([
										...q.enabledApiProposals,
									]))),
								W
							);
						}
					} catch (q) {
						x.type !== l.ExtensionType.System && this.q.error(q);
					}
					return null;
				}
				validate(x, H) {
					let q = !0;
					const V =
							this.n.isBuilt && this.f.includes(x.identifier.id.toLowerCase()),
						G = (0, y.$wq)(
							H.productVersion,
							H.productDate,
							H.location,
							x.manifest,
							x.isBuiltin,
							V,
						);
					for (const [K, J] of G)
						K === g.default.Error &&
							((q = !1), this.q.error(this.F(H.location, J)));
					return (x.isValid = q), (x.validations = G), x;
				}
				async u(x) {
					const H = (0, c.$nh)(x, "package.json");
					let q;
					try {
						q = (await this.m.readFile(H)).value.toString();
					} catch (G) {
						return (
							(0, $.$Cl)(G) !== $.FileOperationResult.FILE_NOT_FOUND &&
								this.q.error(
									this.F(x, (0, f.localize)(1827, null, H.path, G.message)),
								),
							null
						);
					}
					let V;
					try {
						V = JSON.parse(q);
					} catch {
						const K = [];
						(0, d.$do)(q, K);
						for (const J of K)
							this.q.error(
								this.F(
									x,
									(0, f.localize)(
										1828,
										null,
										H.path,
										J.offset,
										J.length,
										(0, m.$br)(J.error),
									),
								),
							);
						return null;
					}
					return (0, d.$lo)(V) !== "object"
						? (this.q.error(this.F(x, (0, f.localize)(1829, null, H.path))),
							null)
						: V;
				}
				async w(x, H, q) {
					const V = await this.y(x, H, q);
					if (V)
						try {
							const G = [],
								K = await this.z(V.default, G);
							if (G.length > 0)
								return (
									G.forEach((W) => {
										this.q.error(
											this.F(
												x,
												(0, f.localize)(
													1830,
													null,
													V.default?.path,
													(0, m.$br)(W.error),
												),
											),
										);
									}),
									H
								);
							if ((0, d.$lo)(V) !== "object")
								return (
									this.q.error(
										this.F(x, (0, f.localize)(1831, null, V.default?.path)),
									),
									H
								);
							const J = V.values || Object.create(null);
							return (0, M.$cr)(this.q, H, J, K);
						} catch {}
					return H;
				}
				async y(x, H, q) {
					const V = (0, c.$nh)(x, "package.nls.json"),
						G = (X, Y) => {
							Y.forEach((ie) => {
								this.q.error(
									this.F(
										x,
										(0, f.localize)(1832, null, X?.path, (0, m.$br)(ie.error)),
									),
								);
							});
						},
						K = (X) => {
							this.q.error(this.F(x, (0, f.localize)(1833, null, X?.path)));
						},
						J = `${H.publisher}.${H.name}`,
						W = q.translations[J];
					if (W)
						try {
							const X = o.URI.file(W),
								Y = (await this.m.readFile(X)).value.toString(),
								ie = [],
								ne = (0, d.$do)(Y, ie);
							return ie.length > 0
								? (G(X, ie), { values: void 0, default: V })
								: (0, d.$lo)(ne) !== "object"
									? (K(X), { values: void 0, default: V })
									: {
											values: ne.contents ? ne.contents.package : void 0,
											default: V,
										};
						} catch {
							return { values: void 0, default: V };
						}
					else {
						if (!(await this.m.exists(V))) return;
						let Y;
						try {
							Y = await this.C(x, q);
						} catch {
							return;
						}
						if (!Y.localized) return { values: void 0, default: Y.original };
						try {
							const ie = (await this.m.readFile(Y.localized)).value.toString(),
								ne = [],
								ee = (0, d.$do)(ie, ne);
							return ne.length > 0
								? (G(Y.localized, ne), { values: void 0, default: Y.original })
								: (0, d.$lo)(ee) !== "object"
									? (K(Y.localized), { values: void 0, default: Y.original })
									: { values: ee, default: Y.original };
						} catch {
							return { values: void 0, default: Y.original };
						}
					}
				}
				async z(x, H) {
					if (x)
						try {
							const q = (await this.m.readFile(x)).value.toString();
							return (0, d.$do)(q, H);
						} catch {}
				}
				C(x, H) {
					return new Promise((q, V) => {
						const G = (K) => {
							const J = (0, c.$nh)(x, `package.nls.${K}.json`);
							this.m.exists(J).then((W) => {
								W &&
									q({
										localized: J,
										original: (0, c.$nh)(x, "package.nls.json"),
									});
								const X = K.lastIndexOf("-");
								X === -1
									? q({
											localized: (0, c.$nh)(x, "package.nls.json"),
											original: null,
										})
									: ((K = K.substring(0, X)), G(K));
							});
						};
						if (H.devMode || H.pseudo || !H.language)
							return q({
								localized: (0, c.$nh)(x, "package.nls.json"),
								original: null,
							});
						G(H.language);
					});
				}
				F(x, H) {
					return `[${x.path}]: ${H}`;
				}
			};
			O = Ne(
				[
					j(1, k.$_q),
					j(2, D.$Vl),
					j(3, $.$ll),
					j(4, I.$Bk),
					j(5, b.$Ti),
					j(6, S.$ik),
				],
				O,
			);
			let B = class extends O {
				constructor(x, H, q, V, G, K, J, W, X) {
					super(H, V, G, K, J, W, X),
						(this.J = x),
						(this.L = q),
						(this.H = this.D(new i.$Kh(3e3))),
						(this.I = this.D(new T.$re())),
						(this.onDidChangeCache = this.I.event);
				}
				async scanExtensions(x) {
					const H = this.P(x),
						q = await this.M(H);
					if (((this.G = x), q && q.input && R.equals(q.input, this.G)))
						return (
							this.q.debug(
								"Using cached extensions scan result",
								x.type === l.ExtensionType.System ? "system" : "user",
								x.location.toString(),
							),
							this.H.trigger(() => this.O()),
							q.result.map((G) => ((G.location = o.URI.revive(G.location)), G))
						);
					const V = await super.scanExtensions(x);
					return await this.N(H, { input: x, result: V }), V;
				}
				async M(x) {
					try {
						const H = await this.m.readFile(x),
							q = JSON.parse(H.value.toString());
						return { result: q.result, input: (0, P.$ji)(q.input) };
					} catch (H) {
						this.q.debug(
							"Error while reading the extension cache file:",
							x.path,
							(0, C.$bb)(H),
						);
					}
					return null;
				}
				async N(x, H) {
					try {
						await this.m.writeFile(x, E.$Te.fromString(JSON.stringify(H)));
					} catch (q) {
						this.q.debug(
							"Error while writing the extension cache file:",
							x.path,
							(0, C.$bb)(q),
						);
					}
				}
				async O() {
					if (!this.G) return;
					const x = this.P(this.G),
						H = await this.M(x);
					if (!H) return;
					const q = H.result,
						V = JSON.parse(JSON.stringify(await super.scanExtensions(this.G)));
					if (!w.$zo(V, q))
						try {
							this.q.info("Invalidating Cache", q, V),
								await this.m.del(x),
								this.I.fire();
						} catch (G) {
							this.q.error(G);
						}
				}
				P(x) {
					const H = this.Q(x);
					return this.j.extUri.joinPath(
						H.cacheHome,
						x.type === l.ExtensionType.System ? l.$Bn : l.$An,
					);
				}
				Q(x) {
					return x.type === l.ExtensionType.System
						? this.L.defaultProfile
						: x.profile
							? this.j.extUri.isEqual(x.location, this.J.extensionsResource)
								? this.J
								: (this.L.profiles.find((H) =>
										this.j.extUri.isEqual(x.location, H.extensionsResource),
									) ?? this.J)
							: this.L.defaultProfile;
				}
			};
			B = Ne(
				[
					j(2, L.$Xl),
					j(3, k.$_q),
					j(4, D.$Vl),
					j(5, $.$ll),
					j(6, I.$Bk),
					j(7, b.$Ti),
					j(8, S.$ik),
				],
				B,
			);
			function U(F, x) {
				const H = (0, s.$0p)(F.manifest.publisher, F.manifest.name);
				return {
					id: H,
					identifier: new l.$Gn(H),
					isBuiltin: F.type === l.ExtensionType.System,
					isUserBuiltin: F.type === l.ExtensionType.User && F.isBuiltin,
					isUnderDevelopment: x,
					extensionLocation: F.location,
					uuid: F.identifier.uuid,
					targetPlatform: F.targetPlatform,
					publisherDisplayName: F.publisherDisplayName,
					...F.manifest,
				};
			}
			class z extends A {
				constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
					super(
						x,
						H,
						(0, c.$nh)(q, ".cursor-dev", "extensions", "control.json"),
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
					),
						(this.S = (async () => {
							if (h.$C)
								try {
									const ee = await this.u.readFile(o.URI.file(h.$C));
									return JSON.parse(ee.value.toString());
								} catch {}
							return Object.create(null);
						})());
				}
				f(x) {
					return this.S;
				}
			}
			e.$hr = z;
		},
	),
		