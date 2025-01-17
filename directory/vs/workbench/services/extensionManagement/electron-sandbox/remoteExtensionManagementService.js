import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../nls.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/async.js';
import '../../extensions/common/extensionManifestPropertiesService.js';
import '../../../../platform/files/common/files.js';
import '../common/remoteExtensionManagementService.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../userDataProfile/common/remoteUserDataProfiles.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/extensions/common/extensionValidator.js';
define(
			de[4391],
			he([
				1, 0, 119, 109, 154, 34, 163, 24, 33, 4, 62, 10, 15, 384, 22, 3789, 129,
				133, 1044, 68, 772,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qdd = void 0);
				let l = class extends g.$c5c {
					constructor($, v, S, I, T, P, k, L, D, M, N, A) {
						super($, S, I, T, P),
							(this.M = v),
							(this.N = k),
							(this.P = L),
							(this.Q = D),
							(this.R = M),
							(this.S = N),
							(this.U = A);
					}
					async install($, v) {
						const S = await super.install($, v);
						return await this.$(S), S;
					}
					async installFromGallery($, v) {
						const S = await this.W($, v);
						return await this.$(S), S;
					}
					async W($, v) {
						if (this.Q.getValue("remote.downloadExtensionsLocally"))
							return this.X($, v || {});
						try {
							const S =
								await this.M.extensionManagementService.getTargetPlatform();
							return await super.installFromGallery($, {
								...v,
								context: { ...v?.context, [t.$xp]: S },
							});
						} catch (S) {
							switch (S.name) {
								case t.ExtensionManagementErrorCode.Download:
								case t.ExtensionManagementErrorCode.DownloadSignature:
								case t.ExtensionManagementErrorCode.Gallery:
								case t.ExtensionManagementErrorCode.Internal:
								case t.ExtensionManagementErrorCode.Unknown:
									try {
										return (
											this.N.error(
												`Error while installing '${$.identifier.id}' extension in the remote server.`,
												(0, C.$xj)(S),
											),
											await this.X($, v || {})
										);
									} catch (I) {
										throw (this.N.error(I), I);
									}
								default:
									throw (this.N.debug("Remote Install Error Name", S.name), S);
							}
						}
					}
					async X($, v) {
						this.N.info(
							`Downloading the '${$.identifier.id}' extension locally and install`,
						);
						const S = await this.Z($, !!v.installPreReleaseVersion);
						v = { ...v, donotIncludePackAndDependencies: !0 };
						const I = await this.getInstalled(
								i.ExtensionType.User,
								void 0,
								v.productVersion,
							),
							T = await this.bb(S, m.CancellationToken.None);
						if (T.length) {
							this.N.info(
								`Downloading the workspace dependencies and packed extensions of '${S.identifier.id}' locally and install`,
							);
							for (const P of T) await this.Y(P, I, v);
						}
						return await this.Y(S, I, v);
					}
					async Y($, v, S) {
						const I = await this.Z($, !!S.installPreReleaseVersion);
						this.N.trace("Downloading extension:", I.identifier.id);
						const T = await this.M.extensionManagementService.download(
							I,
							v.filter((P) => (0, w.$7p)(P.identifier, I.identifier))[0]
								? t.InstallOperation.Update
								: t.InstallOperation.Install,
							!!S.donotVerifySignature,
						);
						this.N.info("Downloaded extension:", I.identifier.id, T.path);
						try {
							const P = await super.install(T, { ...S, keepExisting: !0 });
							return (
								this.N.info(
									`Successfully installed '${I.identifier.id}' extension`,
								),
								P
							);
						} finally {
							try {
								await this.S.del(T);
							} catch (P) {
								this.N.error(P);
							}
						}
					}
					async Z($, v) {
						const S = await this.getTargetPlatform();
						let I = null;
						if (
							($.hasPreReleaseVersion &&
								$.properties.isPreReleaseVersion !== v &&
								(I =
									(
										await this.P.getExtensions(
											[{ ...$.identifier, preRelease: v }],
											{ targetPlatform: S, compatible: !0 },
											m.CancellationToken.None,
										)
									)[0] || null),
							!I && (await this.P.isExtensionCompatible($, v, S)) && (I = $),
							I || (I = await this.P.getCompatibleExtension($, v, S)),
							!I)
						) {
							const T = [];
							throw (0, s.$zq)($.properties.enabledApiProposals ?? [], T)
								? !v &&
									$.properties.isPreReleaseVersion &&
									(
										await this.P.getExtensions(
											[$.identifier],
											m.CancellationToken.None,
										)
									)[0]
									? new t.$Gp(
											(0, r.localize)(12317, null, $.identifier.id),
											t.ExtensionManagementErrorCode.ReleaseVersionNotFound,
										)
									: new t.$Gp(
											(0, r.localize)(
												12318,
												null,
												$.identifier.id,
												this.R.nameLong,
												this.R.version,
											),
											t.ExtensionManagementErrorCode.Incompatible,
										)
								: new t.$Gp(
										(0, r.localize)(
											12316,
											null,
											$.displayName ?? $.identifier.id,
											T[0],
										),
										t.ExtensionManagementErrorCode.IncompatibleApi,
									);
						}
						return I;
					}
					async $($) {
						const v = await this.ab($.manifest, m.CancellationToken.None),
							S = await this.M.extensionManagementService.getInstalled(),
							I = v.filter((T) =>
								S.every((P) => !(0, w.$7p)(P.identifier, T.identifier)),
							);
						I.length &&
							(this.N.info(
								`Installing UI dependencies and packed extensions of '${$.identifier.id}' locally`,
							),
							await h.Promises.settled(
								I.map((T) =>
									this.M.extensionManagementService.installFromGallery(T),
								),
							));
					}
					async ab($, v) {
						const S = new Map(),
							I = [
								...($.extensionPack || []),
								...($.extensionDependencies || []),
							];
						return await this.cb(I, S, !0, v), [...S.values()];
					}
					async bb($, v) {
						const S = new Map();
						S.set($.identifier.id.toLowerCase(), $);
						const I = await this.P.getManifest($, v);
						if (I) {
							const T = [
								...(I.extensionPack || []),
								...(I.extensionDependencies || []),
							];
							await this.cb(T, S, !1, v);
						}
						return S.delete($.identifier.id), [...S.values()];
					}
					async cb($, v, S, I) {
						if ($.length === 0) return Promise.resolve();
						const T = await this.P.getExtensions(
								$.map((L) => ({ id: L })),
								I,
							),
							P = await Promise.all(T.map((L) => this.P.getManifest(L, I))),
							k = [];
						for (let L = 0; L < T.length; L++) {
							const D = T[L],
								M = P[L];
							M &&
								this.U.prefersExecuteOnUI(M) === S &&
								(v.set(D.identifier.id.toLowerCase(), D), k.push(M));
						}
						$ = [];
						for (const L of k) {
							if ((0, d.$Pb)(L.extensionDependencies))
								for (const D of L.extensionDependencies)
									v.has(D.toLowerCase()) || $.push(D);
							if ((0, d.$Pb)(L.extensionPack))
								for (const D of L.extensionPack)
									v.has(D.toLowerCase()) || $.push(D);
						}
						return this.cb($, v, S, I);
					}
				};
				(e.$Qdd = l),
					(e.$Qdd = l =
						Ne(
							[
								j(2, o.$P8),
								j(3, p.$Xl),
								j(4, f.$nxc),
								j(5, b.$Vl),
								j(6, E.$ik),
								j(7, t.$Ep),
								j(8, a.$gj),
								j(9, u.$Bk),
								j(10, n.$ll),
								j(11, c.$JSb),
							],
							l,
						));
			},
		),
		