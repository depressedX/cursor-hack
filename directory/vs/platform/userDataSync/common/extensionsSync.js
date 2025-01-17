import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/jsonFormatter.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/strings.js';
import '../../configuration/common/configuration.js';
import '../../environment/common/environment.js';
import '../../extensionManagement/common/extensionEnablementService.js';
import '../../extensionManagement/common/extensionManagement.js';
import '../../extensionManagement/common/extensionManagementUtil.js';
import '../../extensionManagement/common/extensionStorage.js';
import '../../extensions/common/extensions.js';
import '../../files/common/files.js';
import '../../instantiation/common/instantiation.js';
import '../../instantiation/common/serviceCollection.js';
import '../../log/common/log.js';
import '../../storage/common/storage.js';
import '../../telemetry/common/telemetry.js';
import '../../uriIdentity/common/uriIdentity.js';
import '../../userDataProfile/common/userDataProfile.js';
import './abstractSynchronizer.js';
import './extensionsMerge.js';
import './ignoredExtensions.js';
import './userDataSync.js';
import '../../userDataProfile/common/userDataProfileStorageService.js';
define(
			de[2936],
			he([
				1, 0, 15, 33, 29, 6, 585, 3, 37, 10, 113, 959, 119, 154, 677, 109, 22,
				5, 128, 34, 21, 32, 68, 129, 1222, 2884, 957, 150, 681,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Z3c = e.$Y3c = e.$X3c = void 0),
					(e.$V3c = L),
					(e.$W3c = D);
				async function k(R, O) {
					const B = JSON.parse(R.content);
					if (R.version === 1 || R.version === 2) {
						const U = (await O.getInstalled(g.ExtensionType.System)).filter(
							(z) => z.isBuiltin,
						);
						for (const z of B)
							R.version === 1 &&
								(z.enabled === !1 && (z.disabled = !0), delete z.enabled),
								R.version === 2 &&
									U.every((F) => !(0, c.$7p)(F.identifier, z.identifier)) &&
									(z.installed = !0);
					}
					return B;
				}
				function L(R) {
					return JSON.parse(R.content);
				}
				function D(R, O) {
					return (
						R.sort((B, U) =>
							!B.identifier.uuid && U.identifier.uuid
								? -1
								: B.identifier.uuid && !U.identifier.uuid
									? 1
									: (0, m.$Ff)(B.identifier.id, U.identifier.id),
						),
						O ? (0, C.$no)(R, {}) : JSON.stringify(R)
					);
				}
				let M = class extends v.$$xc {
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(
							{ syncResource: T.SyncResource.Extensions, profile: O },
							B,
							z,
							U,
							F,
							x,
							H,
							J,
							W,
							G,
							K,
							Y,
						),
							(this.Cb = q),
							(this.Db = V),
							(this.Eb = ne),
							(this.pb = 6),
							(this.wb = this.h.joinPath(this.g, "extensions.json")),
							(this.xb = this.wb.with({ scheme: T.$$Rb, authority: "base" })),
							(this.yb = this.wb.with({ scheme: T.$$Rb, authority: "local" })),
							(this.zb = this.wb.with({ scheme: T.$$Rb, authority: "remote" })),
							(this.Ab = this.wb.with({
								scheme: T.$$Rb,
								authority: "accepted",
							})),
							(this.Bb = this.Eb.createInstance(N)),
							this.D(
								E.Event.any(
									E.Event.filter(this.Cb.onDidInstallExtensions, (ee) =>
										ee.some(({ local: _ }) => !!_),
									),
									E.Event.filter(
										this.Cb.onDidUninstallExtension,
										(ee) => !ee.error,
									),
									E.Event.filter(ie.onDidChange, (ee) =>
										ee.valueChanges.some(
											({ profile: _, changes: te }) =>
												this.syncResource.profile.id === _.id &&
												te.some((Q) => Q.key === h.$Ip),
										),
									),
									X.onDidChangeExtensionStorageToSync,
								)(() => this.Q()),
							);
					}
					async qb(O, B) {
						const U = O.syncData ? await k(O.syncData, this.Cb) : null,
							z = B?.skippedExtensions ?? [],
							F = B?.builtinExtensions ?? null,
							x = B?.syncData ? await k(B.syncData, this.Cb) : null,
							{ localExtensions: H, ignoredExtensions: q } =
								await this.Bb.getLocalExtensions(this.syncResource.profile);
						U
							? this.O.trace(
									`${this.C}: Merging remote extensions with local extensions...`,
								)
							: this.O.trace(
									`${this.C}: Remote extensions does not exist. Synchronizing extensions for the first time.`,
								);
						const { local: V, remote: G } = (0, S.$U3c)(H, U, x, z, q, F),
							K = {
								local: V,
								remote: G,
								content: this.Hb(H, V.added, V.updated, V.removed),
								localChange:
									V.added.length > 0 ||
									V.removed.length > 0 ||
									V.updated.length > 0
										? T.Change.Modified
										: T.Change.None,
								remoteChange: G !== null ? T.Change.Modified : T.Change.None,
							},
							J = this.Ob(H, !1);
						return [
							{
								skippedExtensions: z,
								builtinExtensions: F,
								baseResource: this.xb,
								baseContent: x ? this.Ob(x, !1) : J,
								localResource: this.yb,
								localContent: J,
								localExtensions: H,
								remoteResource: this.zb,
								remoteExtensions: U,
								remoteContent: U ? this.Ob(U, !1) : null,
								previewResource: this.wb,
								previewResult: K,
								localChange: K.localChange,
								remoteChange: K.remoteChange,
								acceptedResource: this.Ab,
							},
						];
					}
					async ub(O) {
						const B = O.syncData ? await k(O.syncData, this.Cb) : null,
							{ localExtensions: U, ignoredExtensions: z } =
								await this.Bb.getLocalExtensions(this.syncResource.profile),
							{ remote: F } = (0, S.$U3c)(
								U,
								B,
								B,
								O.skippedExtensions || [],
								z,
								O.builtinExtensions || [],
							);
						return F !== null;
					}
					Hb(O, B, U, z) {
						const F = [...B, ...U],
							x = new Set(),
							H = (q) => {
								x.add(q.id.toLowerCase()), q.uuid && x.add(q.uuid);
							};
						F.forEach(({ identifier: q }) => H(q)), z.forEach(H);
						for (const q of O)
							x.has(q.identifier.id.toLowerCase()) ||
								(q.identifier.uuid && x.has(q.identifier.uuid)) ||
								F.push(q);
						return this.Ob(F, !1);
					}
					async rb(O, B) {
						return { ...O.previewResult, hasConflicts: !1 };
					}
					async sb(O, B, U, z) {
						if (this.h.isEqual(B, this.yb)) return this.Kb(O);
						if (this.h.isEqual(B, this.zb)) return this.Lb(O);
						if (this.h.isEqual(B, this.wb)) return O.previewResult;
						throw new Error(`Invalid Resource: ${B.toString()}`);
					}
					async Kb(O) {
						const B = await this.Cb.getInstalled(
								void 0,
								this.syncResource.profile.extensionsResource,
							),
							U = this.Db.getIgnoredExtensions(B),
							z = (0, S.$U3c)(
								O.localExtensions,
								null,
								null,
								O.skippedExtensions,
								U,
								O.builtinExtensions,
							),
							{ local: F, remote: x } = z;
						return {
							content: O.localContent,
							local: F,
							remote: x,
							localChange:
								F.added.length > 0 ||
								F.removed.length > 0 ||
								F.updated.length > 0
									? T.Change.Modified
									: T.Change.None,
							remoteChange: x !== null ? T.Change.Modified : T.Change.None,
						};
					}
					async Lb(O) {
						const B = await this.Cb.getInstalled(
								void 0,
								this.syncResource.profile.extensionsResource,
							),
							U = this.Db.getIgnoredExtensions(B),
							z = O.remoteContent ? JSON.parse(O.remoteContent) : null;
						if (z !== null) {
							const F = (0, S.$U3c)(
									O.localExtensions,
									z,
									O.localExtensions,
									[],
									U,
									O.builtinExtensions,
								),
								{ local: x, remote: H } = F;
							return {
								content: O.remoteContent,
								local: x,
								remote: H,
								localChange:
									x.added.length > 0 ||
									x.removed.length > 0 ||
									x.updated.length > 0
										? T.Change.Modified
										: T.Change.None,
								remoteChange: H !== null ? T.Change.Modified : T.Change.None,
							};
						} else
							return {
								content: O.remoteContent,
								local: { added: [], removed: [], updated: [] },
								remote: null,
								localChange: T.Change.None,
								remoteChange: T.Change.None,
							};
					}
					async tb(O, B, U, z) {
						let {
							skippedExtensions: F,
							builtinExtensions: x,
							localExtensions: H,
						} = U[0][0];
						const {
							local: q,
							remote: V,
							localChange: G,
							remoteChange: K,
						} = U[0][1];
						if (
							(G === T.Change.None &&
								K === T.Change.None &&
								this.O.info(
									`${this.C}: No changes found during synchronizing extensions.`,
								),
							G !== T.Change.None &&
								(await this.nb(JSON.stringify(H)),
								(F = await this.Bb.updateLocalExtensions(
									q.added,
									q.removed,
									q.updated,
									F,
									this.syncResource.profile,
								))),
							V)
						) {
							this.O.trace(`${this.C}: Updating remote extensions...`);
							const J = JSON.stringify(V.all);
							(O = await this.mb(J, z ? null : O.ref)),
								this.O.info(
									`${this.C}: Updated remote extensions.${V.added.length ? ` Added: ${JSON.stringify(V.added.map((W) => W.identifier.id))}.` : ""}${V.updated.length ? ` Updated: ${JSON.stringify(V.updated.map((W) => W.identifier.id))}.` : ""}${V.removed.length ? ` Removed: ${JSON.stringify(V.removed.map((W) => W.identifier.id))}.` : ""}`,
								);
						}
						B?.ref !== O.ref &&
							(this.O.trace(
								`${this.C}: Updating last synchronized extensions...`,
							),
							(x = this.Nb(H, x)),
							await this.fb(O, { skippedExtensions: F, builtinExtensions: x }),
							this.O.info(
								`${this.C}: Updated last synchronized extensions.${F.length ? ` Skipped: ${JSON.stringify(F.map((J) => J.identifier.id))}.` : ""}`,
							));
					}
					Nb(O, B) {
						const U = new Set(),
							z = [];
						for (const F of O)
							U.add(F.identifier.id.toLowerCase()),
								F.installed || z.push(F.identifier);
						if (B) for (const F of B) U.has(F.id.toLowerCase()) || z.push(F);
						return z;
					}
					async resolveContent(O) {
						if (
							this.h.isEqual(this.zb, O) ||
							this.h.isEqual(this.xb, O) ||
							this.h.isEqual(this.yb, O) ||
							this.h.isEqual(this.Ab, O)
						) {
							const B = await this.db(O);
							return B && this.Ob(JSON.parse(B), !0);
						}
						return null;
					}
					Ob(O, B) {
						return D(O, B);
					}
					async hasLocalData() {
						try {
							const { localExtensions: O } = await this.Bb.getLocalExtensions(
								this.syncResource.profile,
							);
							if (O.some((B) => B.installed || B.disabled)) return !0;
						} catch {}
						return !1;
					}
				};
				(e.$X3c = M),
					(e.$X3c = M =
						Ne(
							[
								j(2, u.$Ti),
								j(3, p.$ll),
								j(4, s.$lq),
								j(5, T.$TRb),
								j(6, T.$URb),
								j(7, h.$Hp),
								j(8, I.$UAc),
								j(9, T.$9Rb),
								j(10, r.$gj),
								j(11, T.$4Rb),
								j(12, l.$km),
								j(13, n.$1N),
								j(14, y.$Vl),
								j(15, P.$0wc),
								j(16, o.$Li),
							],
							M,
						));
				let N = class {
					constructor(O, B, U, z, F, x) {
						(this.a = O),
							(this.b = B),
							(this.c = U),
							(this.d = z),
							(this.f = F),
							(this.g = x);
					}
					async getLocalExtensions(O) {
						const B = await this.a.getInstalled(void 0, O.extensionsResource),
							U = this.d.getIgnoredExtensions(B);
						return {
							localExtensions: await this.j(O, async (F, x) => {
								const H = F.getDisabledExtensions();
								return B.map((q) => {
									const {
											identifier: V,
											isBuiltin: G,
											manifest: K,
											preRelease: J,
											pinned: W,
											isApplicationScoped: X,
										} = q,
										Y = {
											identifier: V,
											preRelease: J,
											version: K.version,
											pinned: !!W,
										};
									X && !(0, g.$Jn)(K) && (Y.isApplicationScoped = X),
										H.some((ie) => (0, c.$7p)(ie, V)) && (Y.disabled = !0),
										G || (Y.installed = !0);
									try {
										const ie = x.getKeysForSync({
											id: V.id,
											version: K.version,
										});
										if (ie) {
											const ne = x.getExtensionState(q, !0) || {};
											Y.state = Object.keys(ne).reduce(
												(ee, _) => (ie.includes(_) && (ee[_] = ne[_]), ee),
												{},
											);
										}
									} catch (ie) {
										this.g.info(
											`${(0, v.$0xc)(T.SyncResource.Extensions, O)}: Error while parsing extension state`,
											(0, w.$bb)(ie),
										);
									}
									return Y;
								});
							}),
							ignoredExtensions: U,
						};
					}
					async updateLocalExtensions(O, B, U, z, F) {
						const x = (0, v.$0xc)(T.SyncResource.Extensions, F),
							H = [],
							q = new Map(),
							V = [],
							G = [],
							K = await this.a.getInstalled(void 0, F.extensionsResource);
						if (
							((O.length || U.length) &&
								(await this.j(F, async (X, Y) => {
									await t.Promises.settled(
										[...O, ...U].map(async (ie) => {
											const ne = K.find((te) =>
												(0, c.$7p)(te.identifier, ie.identifier),
											);
											if (ne && ne.isBuiltin) {
												ie.state &&
													ne.manifest.version === ie.version &&
													this.h(ie.state, ne, ne.manifest.version, Y),
													X.getDisabledExtensions().some((Q) =>
														(0, c.$7p)(Q, ie.identifier),
													) !== !!ie.disabled &&
														(ie.disabled
															? (this.g.trace(
																	`${x}: Disabling extension...`,
																	ie.identifier.id,
																),
																await X.disableExtension(ie.identifier),
																this.g.info(
																	`${x}: Disabled extension`,
																	ie.identifier.id,
																))
															: (this.g.trace(
																	`${x}: Enabling extension...`,
																	ie.identifier.id,
																),
																await X.enableExtension(ie.identifier),
																this.g.info(
																	`${x}: Enabled extension`,
																	ie.identifier.id,
																))),
													V.push(ie.identifier);
												return;
											}
											const ee = ie.pinned ? ie.version : void 0,
												_ = (
													await this.c.getExtensions(
														[
															{
																...ie.identifier,
																version: ee,
																preRelease: ee ? void 0 : ie.preRelease,
															},
														],
														i.CancellationToken.None,
													)
												)[0];
											if (
												(ie.state &&
													(ne ? ne.manifest.version === ie.version : _) &&
													this.h(ie.state, ne || _, ne?.manifest.version, Y),
												_)
											)
												try {
													X.getDisabledExtensions().some((Q) =>
														(0, c.$7p)(Q, ie.identifier),
													) !== !!ie.disabled &&
														(ie.disabled
															? (this.g.trace(
																	`${x}: Disabling extension...`,
																	ie.identifier.id,
																	_.version,
																),
																await X.disableExtension(_.identifier),
																this.g.info(
																	`${x}: Disabled extension`,
																	ie.identifier.id,
																	_.version,
																))
															: (this.g.trace(
																	`${x}: Enabling extension...`,
																	ie.identifier.id,
																	_.version,
																),
																await X.enableExtension(_.identifier),
																this.g.info(
																	`${x}: Enabled extension`,
																	ie.identifier.id,
																	_.version,
																))),
														(!ne ||
															ne.preRelease !== ie.preRelease ||
															ne.pinned !== ie.pinned ||
															(ee && ne.manifest.version !== ee)) &&
															((await this.a.canInstall(_))
																? (H.push({
																		extension: _,
																		options: {
																			isMachineScoped: !1,
																			donotIncludePackAndDependencies: !0,
																			installGivenVersion:
																				ie.pinned && !!ie.version,
																			pinned: ie.pinned,
																			installPreReleaseVersion: ie.preRelease,
																			profileLocation: F.extensionsResource,
																			isApplicationScoped:
																				ie.isApplicationScoped,
																			context: {
																				[h.$up]: !0,
																				[h.$vp]:
																					h.ExtensionInstallSource
																						.SETTINGS_SYNC,
																			},
																		},
																	}),
																	q.set(_.identifier.id.toLowerCase(), ie))
																: (this.g.info(
																		`${x}: Skipped synchronizing extension because it cannot be installed.`,
																		_.displayName || _.identifier.id,
																	),
																	G.push(ie)));
												} catch (te) {
													G.push(ie),
														this.g.error(te),
														this.g.info(
															`${x}: Skipped synchronizing extension`,
															_.displayName || _.identifier.id,
														);
												}
											else
												G.push(ie),
													this.g.info(
														`${x}: Skipped synchronizing extension because the extension is not found.`,
														ie.identifier.id,
													);
										}),
									);
								})),
							B.length)
						) {
							const X = K.filter(
								({ identifier: Y, isBuiltin: ie }) =>
									!ie && B.some((ne) => (0, c.$7p)(Y, ne)),
							);
							await t.Promises.settled(
								X.map(async (Y) => {
									this.g.trace(
										`${x}: Uninstalling local extension...`,
										Y.identifier.id,
									),
										await this.a.uninstall(Y, {
											donotIncludePack: !0,
											donotCheckDependents: !0,
											profileLocation: F.extensionsResource,
										}),
										this.g.info(
											`${x}: Uninstalled local extension.`,
											Y.identifier.id,
										),
										V.push(Y.identifier);
								}),
							);
						}
						const J = await this.a.installGalleryExtensions(H);
						for (const {
							identifier: X,
							local: Y,
							error: ie,
							source: ne,
						} of J) {
							const ee = ne;
							if (Y)
								this.g.info(`${x}: Installed extension.`, X.id, ee.version),
									V.push(X);
							else {
								const _ = q.get(X.id.toLowerCase());
								_ &&
									(G.push(_),
									this.g.info(
										`${x}: Skipped synchronizing extension`,
										ee.displayName || ee.identifier.id,
									)),
									ie instanceof h.$Gp &&
									[
										h.ExtensionManagementErrorCode.Incompatible,
										h.ExtensionManagementErrorCode.IncompatibleApi,
										h.ExtensionManagementErrorCode.IncompatibleTargetPlatform,
									].includes(ie.code)
										? this.g.info(
												`${x}: Skipped synchronizing extension because the compatible extension is not found.`,
												ee.displayName || ee.identifier.id,
											)
										: ie && this.g.error(ie);
							}
						}
						const W = [];
						for (const X of z)
							V.some((Y) => (0, c.$7p)(Y, X.identifier)) || W.push(X);
						for (const X of G)
							W.some((Y) => (0, c.$7p)(Y.identifier, X.identifier)) ||
								W.push(X);
						return W;
					}
					h(O, B, U, z) {
						const F = z.getExtensionState(B, !0) || {},
							x = U
								? z.getKeysForSync({ id: B.identifier.id, version: U })
								: void 0;
						x
							? x.forEach((H) => {
									F[H] = O[H];
								})
							: Object.keys(O).forEach((H) => (F[H] = O[H])),
							z.setExtensionState(B, F, !0);
					}
					async j(O, B) {
						return this.b.withProfileScopedStorageService(O, async (U) => {
							const z = new d.$Zc(),
								F = z.add(this.f.createChild(new f.$Ki([s.$lq, U]))),
								x = z.add(F.createInstance(a.$twc)),
								H = z.add(F.createInstance(n.$2N));
							try {
								return await B(x, H);
							} finally {
								z.dispose();
							}
						});
					}
				};
				(e.$Y3c = N),
					(e.$Y3c = N =
						Ne(
							[
								j(0, h.$Hp),
								j(1, P.$0wc),
								j(2, h.$Ep),
								j(3, I.$UAc),
								j(4, o.$Li),
								j(5, T.$9Rb),
							],
							N,
						));
				let A = class extends v.$byc {
					constructor(O, B, U, z, F, x, H, q) {
						super(T.SyncResource.Extensions, z, F, x, U, H, q),
							(this.p = O),
							(this.q = B);
					}
					async t(O) {
						return O.syncData ? await k(O.syncData, this.p) : null;
					}
					u(O, B) {
						const U = [],
							z = [],
							F = [];
						for (const x of O) {
							if (this.q.hasToNeverSyncExtension(x.identifier.id)) continue;
							const H = B.find((q) => (0, c.$7p)(q.identifier, x.identifier));
							H
								? (U.push(H), x.disabled && F.push(x.identifier))
								: x.installed &&
									(z.push({ ...x.identifier, preRelease: !!x.preRelease }),
									x.disabled && F.push(x.identifier));
						}
						return {
							installedExtensions: U,
							newExtensions: z,
							disabledExtensions: F,
							remoteExtensions: O,
						};
					}
				};
				(e.$Z3c = A),
					(e.$Z3c = A =
						Ne(
							[
								j(0, h.$Hp),
								j(1, I.$UAc),
								j(2, p.$ll),
								j(3, $.$Xl),
								j(4, u.$Ti),
								j(5, b.$ik),
								j(6, s.$lq),
								j(7, y.$Vl),
							],
							A,
						));
			},
		),
		