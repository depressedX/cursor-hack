import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/buffer.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/json.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/strings.js';
import '../../../base/common/types.js';
import '../../../nls.js';
import '../../configuration/common/configuration.js';
import '../../environment/common/environment.js';
import '../../files/common/files.js';
import '../../log/common/log.js';
import '../../externalServices/common/serviceMachineId.js';
import '../../storage/common/storage.js';
import '../../telemetry/common/telemetry.js';
import '../../uriIdentity/common/uriIdentity.js';
import './userDataSync.js';
import '../../userDataProfile/common/userDataProfile.js';
define(
			de[1222],
			he([
				1, 0, 24, 15, 76, 33, 6, 187, 3, 37, 28, 4, 10, 113, 22, 34, 678, 21,
				32, 68, 150, 129,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*async*/,
				w /*buffer*/,
				E /*cancellation*/,
				C /*event*/,
				d /*json*/,
				m /*lifecycle*/,
				r /*strings*/,
				u /*types*/,
				a /*nls*/,
				h /*configuration*/,
				c /*environment*/,
				n /*files*/,
				g /*log*/,
				p /*serviceMachineId*/,
				o /*storage*/,
				f /*telemetry*/,
				b /*uriIdentity*/,
				s /*userDataSync*/,
				l /*userDataProfile*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$byc = e.$ayc = e.$_xc = e.$$xc = void 0),
					(e.$8xc = y),
					(e.$9xc = $),
					(e.$0xc = v);
				function y(k) {
					return !!(
						k &&
						k.ref !== void 0 &&
						typeof k.ref == "string" &&
						k.ref !== "" &&
						k.syncData !== void 0 &&
						(k.syncData === null || $(k.syncData))
					);
				}
				function $(k) {
					return !!(
						k &&
						k.version !== void 0 &&
						typeof k.version == "number" &&
						k.content !== void 0 &&
						typeof k.content == "string" &&
						(Object.keys(k).length === 2 ||
							(Object.keys(k).length === 3 &&
								k.machineId !== void 0 &&
								typeof k.machineId == "string"))
					);
				}
				function v(k, L) {
					return `${(0, r.$dg)(k)}${L.isDefault ? "" : ` (${L.name})`}`;
				}
				let S = class extends m.$1c {
					get status() {
						return this.m;
					}
					get conflicts() {
						return { ...this.syncResource, conflicts: this.q };
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F, x) {
						super(),
							(this.syncResource = L),
							(this.collection = D),
							(this.G = M),
							(this.H = N),
							(this.I = A),
							(this.J = R),
							(this.L = O),
							(this.M = B),
							(this.N = U),
							(this.O = z),
							(this.P = F),
							(this.c = null),
							(this.m = s.SyncStatus.Idle),
							(this.n = this.D(new C.$re())),
							(this.onDidChangeStatus = this.n.event),
							(this.q = []),
							(this.s = this.D(new C.$re())),
							(this.onDidChangeConflicts = this.s.event),
							(this.t = this.D(new i.$Kh(50))),
							(this.u = this.D(new C.$re())),
							(this.onDidChangeLocal = this.u.event),
							(this.y = `${this.collection ? `${this.collection}.` : ""}${this.syncResource.syncResource}.lastSyncUserData`),
							(this.z = !1),
							(this.F = {}),
							(this.resource = this.syncResource.syncResource),
							(this.C = v(L.syncResource, L.profile)),
							(this.h = x.extUri),
							(this.f = this.h.joinPath(
								N.userDataSyncHome,
								...(0, s.$QRb)(
									L.profile.isDefault ? void 0 : L.profile.id,
									L.syncResource,
								),
							)),
							(this.g = this.h.joinPath(this.f, s.$_Rb)),
							(this.w = (0, s.$RRb)(
								L.profile.isDefault ? void 0 : L.profile.id,
								L.syncResource,
								N,
								this.h,
							)),
							(this.j = (0, p.getServiceMachineId)(N, M, A));
					}
					Q() {
						this.t.trigger(() => this.R());
					}
					async R() {
						if (this.status === s.SyncStatus.HasConflicts) {
							this.O.info(
								`${this.C}: In conflicts state and local change detected. Syncing again...`,
							);
							const L = await this.c;
							this.c = null;
							const D = await this.Y(
								L.remoteUserData,
								L.lastSyncUserData,
								!0,
								this.ob(),
							);
							this.S(D);
						} else {
							this.O.trace(`${this.C}: Checking for local changes...`);
							const L = await this.getLastSyncUserData();
							(L ? await this.ub(L) : !0) && this.u.fire();
						}
					}
					S(L) {
						this.m !== L && ((this.m = L), this.n.fire(L));
					}
					async sync(L, D = {}) {
						await this.U(L, !0, this.ob(), D);
					}
					async preview(L, D, M = {}) {
						return this.U(L, !1, D, M);
					}
					async apply(L, D = {}) {
						try {
							this.F = { ...D };
							const M = await this.ab(L);
							return this.S(M), this.c;
						} finally {
							this.F = {};
						}
					}
					async U(L, D, M, N) {
						try {
							if (
								((this.F = { ...N }), this.status === s.SyncStatus.HasConflicts)
							)
								return (
									this.O.info(
										`${this.C}: Skipped synchronizing ${this.resource.toLowerCase()} as there are conflicts.`,
									),
									this.c
								);
							if (this.status === s.SyncStatus.Syncing)
								return (
									this.O.info(
										`${this.C}: Skipped synchronizing ${this.resource.toLowerCase()} as it is running already.`,
									),
									this.c
								);
							this.O.trace(
								`${this.C}: Started synchronizing ${this.resource.toLowerCase()}...`,
							),
								this.S(s.SyncStatus.Syncing);
							let A = s.SyncStatus.Idle;
							try {
								const R = await this.getLastSyncUserData(),
									O = await this.X(L, R);
								return (
									(A = await this.Y(O, R, D, M)),
									A === s.SyncStatus.HasConflicts
										? this.O.info(
												`${this.C}: Detected conflicts while synchronizing ${this.resource.toLowerCase()}.`,
											)
										: A === s.SyncStatus.Idle &&
											this.O.trace(
												`${this.C}: Finished synchronizing ${this.resource.toLowerCase()}.`,
											),
									this.c || null
								);
							} finally {
								this.S(A);
							}
						} finally {
							this.F = {};
						}
					}
					async replace(L) {
						const D = this.kb(L);
						if (!D) return !1;
						await this.stop();
						try {
							this.O.trace(
								`${this.C}: Started resetting ${this.resource.toLowerCase()}...`,
							),
								this.S(s.SyncStatus.Syncing);
							const M = await this.getLastSyncUserData(),
								N = await this.X(null, M),
								A = await this.W(N),
								R = await this.qb(
									{ ref: N.ref, syncData: D },
									M,
									A,
									this.ob(),
									E.CancellationToken.None,
								),
								O = [];
							for (const B of R) {
								const U = await this.sb(
										B,
										B.remoteResource,
										void 0,
										E.CancellationToken.None,
									),
									{ remoteChange: z } = await this.sb(
										B,
										B.previewResource,
										B.remoteContent,
										E.CancellationToken.None,
									);
								O.push([
									B,
									{
										...U,
										remoteChange: z !== s.Change.None ? z : s.Change.Modified,
									},
								]);
							}
							await this.tb(N, M, O, !1),
								this.O.info(
									`${this.C}: Finished resetting ${this.resource.toLowerCase()}.`,
								);
						} finally {
							this.S(s.SyncStatus.Idle);
						}
						return !0;
					}
					async W(L) {
						const D = await this.j;
						return !!L.syncData?.machineId && L.syncData.machineId === D;
					}
					async X(L, D) {
						if (D) {
							const M = L ? L[this.resource] : void 0;
							if (D.ref === M || (M === void 0 && D.syncData === null))
								return D;
						}
						return this.getRemoteUserData(D);
					}
					async Y(L, D, M, N) {
						if (L.syncData && L.syncData.version > this.pb)
							throw (
								(this.N.publicLog2("sync/incompatible", {
									source: this.resource,
								}),
								new s.$YRb(
									(0, a.localize)(
										2447,
										null,
										this.resource,
										this.pb,
										L.syncData.version,
									),
									s.UserDataSyncErrorCode.IncompatibleLocalContent,
									this.resource,
								))
							);
						try {
							return await this.Z(L, D, M, N);
						} catch (A) {
							if (A instanceof s.$YRb)
								switch (A.code) {
									case s.UserDataSyncErrorCode.LocalPreconditionFailed:
										return (
											this.O.info(
												`${this.C}: Failed to synchronize ${this.C} as there is a new local version available. Synchronizing again...`,
											),
											this.Y(L, D, M, N)
										);
									case s.UserDataSyncErrorCode.Conflict:
									case s.UserDataSyncErrorCode.PreconditionFailed:
										return (
											this.O.info(
												`${this.C}: Failed to synchronize as there is a new remote version available. Synchronizing again...`,
											),
											(L = await this.getRemoteUserData(null)),
											(D = await this.getLastSyncUserData()),
											this.Y(L, D, M, N)
										);
								}
							throw A;
						}
					}
					async Z(L, D, M, N) {
						try {
							const A = await this.W(L),
								R = !A && D === null && this.gb() !== void 0,
								O = M && !R;
							this.c || (this.c = (0, i.$zh)((U) => this.eb(L, D, A, O, N, U)));
							let B = await this.c;
							if (M && R) {
								this.O.info(
									`${this.C}: Accepting remote because it was synced before and the last sync data is not available.`,
								);
								for (const U of B.resourcePreviews)
									B = (await this.accept(U.remoteResource)) || B;
							}
							return (
								this.cb(B.resourcePreviews),
								B.resourcePreviews.some(
									({ mergeState: U }) => U === s.MergeState.Conflict,
								)
									? s.SyncStatus.HasConflicts
									: M
										? await this.ab(!1)
										: s.SyncStatus.Syncing
							);
						} catch (A) {
							throw ((this.c = null), A);
						}
					}
					async merge(L) {
						return (
							await this.$(L, async (D) => {
								const M = await this.rb(D, E.CancellationToken.None);
								await this.G.writeFile(
									D.previewResource,
									w.$Te.fromString(M?.content || ""),
								);
								const N =
									M && !M.hasConflicts
										? await this.sb(
												D,
												D.previewResource,
												void 0,
												E.CancellationToken.None,
											)
										: void 0;
								return (
									(D.acceptResult = N),
									(D.mergeState = M.hasConflicts
										? s.MergeState.Conflict
										: N
											? s.MergeState.Accepted
											: s.MergeState.Preview),
									(D.localChange = N ? N.localChange : M.localChange),
									(D.remoteChange = N ? N.remoteChange : M.remoteChange),
									D
								);
							}),
							this.c
						);
					}
					async accept(L, D) {
						return (
							await this.$(L, async (M) => {
								const N = await this.sb(M, L, D, E.CancellationToken.None);
								return (
									(M.acceptResult = N),
									(M.mergeState = s.MergeState.Accepted),
									(M.localChange = N.localChange),
									(M.remoteChange = N.remoteChange),
									M
								);
							}),
							this.c
						);
					}
					async discard(L) {
						return (
							await this.$(L, async (D) => {
								const M = await this.rb(D, E.CancellationToken.None);
								return (
									await this.G.writeFile(
										D.previewResource,
										w.$Te.fromString(M.content || ""),
									),
									(D.acceptResult = void 0),
									(D.mergeState = s.MergeState.Preview),
									(D.localChange = M.localChange),
									(D.remoteChange = M.remoteChange),
									D
								);
							}),
							this.c
						);
					}
					async $(L, D) {
						if (!this.c) return;
						let M = await this.c;
						const N = M.resourcePreviews.findIndex(
							({ localResource: A, remoteResource: R, previewResource: O }) =>
								this.h.isEqual(A, L) ||
								this.h.isEqual(R, L) ||
								this.h.isEqual(O, L),
						);
						N !== -1 &&
							((this.c = (0, i.$zh)(async (A) => {
								const R = [...M.resourcePreviews];
								return (R[N] = await D(R[N])), { ...M, resourcePreviews: R };
							})),
							(M = await this.c),
							this.cb(M.resourcePreviews),
							M.resourcePreviews.some(
								({ mergeState: A }) => A === s.MergeState.Conflict,
							)
								? this.S(s.SyncStatus.HasConflicts)
								: this.S(s.SyncStatus.Syncing));
					}
					async ab(L) {
						if (!this.c) return s.SyncStatus.Idle;
						const D = await this.c;
						return D.resourcePreviews.some(
							({ mergeState: M }) => M === s.MergeState.Conflict,
						)
							? s.SyncStatus.HasConflicts
							: D.resourcePreviews.some(
										({ mergeState: M }) => M !== s.MergeState.Accepted,
									)
								? s.SyncStatus.Syncing
								: (await this.tb(
										D.remoteUserData,
										D.lastSyncUserData,
										D.resourcePreviews.map((M) => [M, M.acceptResult]),
										L,
									),
									(this.c = null),
									await this.bb(),
									s.SyncStatus.Idle);
					}
					async bb() {
						try {
							await this.G.del(this.g, { recursive: !0 });
						} catch {}
					}
					cb(L) {
						const D = L.filter(
							({ mergeState: M }) => M === s.MergeState.Conflict,
						);
						(0, t.$yb)(this.q, D, (M, N) =>
							this.h.isEqual(M.previewResource, N.previewResource),
						) || ((this.q = D), this.s.fire(this.conflicts));
					}
					async hasPreviouslySynced() {
						const L = await this.getLastSyncUserData();
						return !!L && L.syncData !== null;
					}
					async db(L) {
						const D = this.c ? await this.c : null;
						if (D)
							for (const M of D.resourcePreviews) {
								if (this.h.isEqual(M.acceptedResource, L))
									return M.acceptResult ? M.acceptResult.content : null;
								if (this.h.isEqual(M.remoteResource, L)) return M.remoteContent;
								if (this.h.isEqual(M.localResource, L)) return M.localContent;
								if (this.h.isEqual(M.baseResource, L)) return M.baseContent;
							}
						return null;
					}
					async resetLocal() {
						this.I.remove(this.y, o.StorageScope.APPLICATION);
						try {
							await this.G.del(this.w);
						} catch (L) {
							(0, n.$Cl)(L) !== n.FileOperationResult.FILE_NOT_FOUND &&
								this.O.error(L);
						}
					}
					async eb(L, D, M, N, A, R) {
						const O = await this.qb(L, D, M, A, R),
							B = [];
						for (const U of O) {
							const z = U.previewResource.with({
								scheme: s.$$Rb,
								authority: "accepted",
							});
							if (
								U.localChange === s.Change.None &&
								U.remoteChange === s.Change.None
							)
								B.push({
									...U,
									acceptedResource: z,
									acceptResult: {
										content: null,
										localChange: s.Change.None,
										remoteChange: s.Change.None,
									},
									mergeState: s.MergeState.Accepted,
								});
							else {
								const F = N ? await this.rb(U, R) : void 0;
								if (R.isCancellationRequested) break;
								await this.G.writeFile(
									U.previewResource,
									w.$Te.fromString(F?.content || ""),
								);
								const x =
									F && !F.hasConflicts
										? await this.sb(U, U.previewResource, void 0, R)
										: void 0;
								B.push({
									...U,
									acceptResult: x,
									mergeState: F?.hasConflicts
										? s.MergeState.Conflict
										: x
											? s.MergeState.Accepted
											: s.MergeState.Preview,
									localChange: x
										? x.localChange
										: F
											? F.localChange
											: U.localChange,
									remoteChange: x
										? x.remoteChange
										: F
											? F.remoteChange
											: U.remoteChange,
								});
							}
						}
						return {
							syncResource: this.resource,
							profile: this.syncResource.profile,
							remoteUserData: L,
							lastSyncUserData: D,
							resourcePreviews: B,
							isLastSyncFromCurrentMachine: M,
						};
					}
					async getLastSyncUserData() {
						let L = this.gb();
						if ((L || (L = await this.jb()), !L))
							return (
								this.O.info(`${this.C}: Last sync data state does not exist.`),
								null
							);
						const D = JSON.parse(L),
							M = this.M.getResourceSyncStateVersion(this.resource);
						if (((this.z = !!D.version && !!M && D.version !== M), this.z))
							return (
								this.O.info(
									`${this.C}: Reset last sync state because last sync state version ${D.version} is not compatible with current sync state version ${M}.`,
								),
								await this.resetLocal(),
								null
							);
						let N,
							A = 1;
						for (; N === void 0 && A++ < 6; )
							try {
								const R = await this.hb();
								R &&
									(R.ref === D.ref
										? (N = R.syncData)
										: this.O.info(
												`${this.C}: Last sync data stored locally is not same as the last sync state.`,
											));
								break;
							} catch (R) {
								if (
									R instanceof n.$Gl &&
									R.fileOperationResult === n.FileOperationResult.FILE_NOT_FOUND
								) {
									this.O.info(
										`${this.C}: Last sync resource does not exist locally.`,
									);
									break;
								} else {
									if (R instanceof s.$YRb) throw R;
									this.O.error(R, A);
								}
							}
						if (N === void 0)
							try {
								const R = await this.J.resolveResourceContent(
									this.resource,
									D.ref,
									this.collection,
									this.F,
								);
								(N = R === null ? null : this.kb(R)),
									await this.ib({ ref: D.ref, syncData: N });
							} catch (R) {
								if (
									R instanceof s.$YRb &&
									R.code === s.UserDataSyncErrorCode.NotFound
								)
									this.O.info(
										`${this.C}: Last sync resource does not exist remotely.`,
									);
								else throw R;
							}
						return N === void 0 ? null : { ...D, syncData: N };
					}
					async fb(L, D = {}) {
						if (D.ref || D.version)
							throw new Error("Cannot have core properties as additional");
						const M = this.M.getResourceSyncStateVersion(this.resource),
							N = { ref: L.ref, version: M, ...D };
						this.I.store(
							this.y,
							JSON.stringify(N),
							o.StorageScope.APPLICATION,
							o.StorageTarget.MACHINE,
						),
							await this.ib(L);
					}
					gb() {
						return this.I.get(this.y, o.StorageScope.APPLICATION);
					}
					async hb() {
						const L = (await this.G.readFile(this.w)).value.toString();
						try {
							const D = L ? JSON.parse(L) : void 0;
							if (y(D)) return D;
						} catch (D) {
							this.O.error(D);
						}
					}
					async ib(L) {
						await this.G.writeFile(this.w, w.$Te.fromString(JSON.stringify(L)));
					}
					async jb() {
						try {
							const L = await this.G.readFile(this.w),
								D = JSON.parse(L.value.toString());
							await this.G.del(this.w),
								D.ref && D.content !== void 0
									? (this.I.store(
											this.y,
											JSON.stringify({ ...D, content: void 0 }),
											o.StorageScope.APPLICATION,
											o.StorageTarget.MACHINE,
										),
										await this.ib({
											ref: D.ref,
											syncData:
												D.content === null ? null : JSON.parse(D.content),
										}))
									: this.O.info(
											`${this.C}: Migrating last sync user data. Invalid data.`,
											D,
										);
						} catch (L) {
							L instanceof n.$Gl &&
							L.fileOperationResult === n.FileOperationResult.FILE_NOT_FOUND
								? this.O.info(
										`${this.C}: Migrating last sync user data. Resource does not exist.`,
									)
								: this.O.error(L);
						}
						return this.I.get(this.y, o.StorageScope.APPLICATION);
					}
					async getRemoteUserData(L) {
						const { ref: D, content: M } = await this.lb(L);
						let N = null;
						return M !== null && (N = this.kb(M)), { ref: D, syncData: N };
					}
					kb(L) {
						try {
							const D = JSON.parse(L);
							if ($(D)) return D;
						} catch (D) {
							this.O.error(D);
						}
						throw new s.$YRb(
							(0, a.localize)(2448, null),
							s.UserDataSyncErrorCode.IncompatibleRemoteContent,
							this.resource,
						);
					}
					async lb(L) {
						const D = L
							? {
									ref: L.ref,
									content: L.syncData ? JSON.stringify(L.syncData) : null,
								}
							: null;
						return this.J.readResource(
							this.resource,
							D,
							this.collection,
							this.F,
						);
					}
					async mb(L, D) {
						const M = await this.j,
							N = { version: this.pb, machineId: M, content: L };
						try {
							return (
								(D = await this.J.writeResource(
									this.resource,
									JSON.stringify(N),
									D,
									this.collection,
									this.F,
								)),
								{ ref: D, syncData: N }
							);
						} catch (A) {
							throw (
								(A instanceof s.$YRb &&
									A.code === s.UserDataSyncErrorCode.TooLarge &&
									(A = new s.$YRb(A.message, A.code, this.resource)),
								A)
							);
						}
					}
					async nb(L) {
						const D = { version: this.pb, content: L };
						return this.L.writeResource(
							this.resource,
							JSON.stringify(D),
							new Date(),
							this.syncResource.profile.isDefault
								? void 0
								: this.syncResource.profile.id,
						);
					}
					async stop() {
						this.status !== s.SyncStatus.Idle &&
							(this.O.trace(
								`${this.C}: Stopping synchronizing ${this.resource.toLowerCase()}.`,
							),
							this.c && (this.c.cancel(), (this.c = null)),
							this.cb([]),
							await this.bb(),
							this.S(s.SyncStatus.Idle),
							this.O.info(
								`${this.C}: Stopped synchronizing ${this.resource.toLowerCase()}.`,
							));
					}
					ob() {
						return this.P.getValue(s.$LRb);
					}
				};
				(e.$$xc = S),
					(e.$$xc = S =
						Ne(
							[
								j(2, n.$ll),
								j(3, c.$Ti),
								j(4, o.$lq),
								j(5, s.$TRb),
								j(6, s.$URb),
								j(7, s.$4Rb),
								j(8, f.$km),
								j(9, s.$9Rb),
								j(10, h.$gj),
								j(11, b.$Vl),
							],
							S,
						));
				let I = class extends S {
					constructor(L, D, M, N, A, R, O, B, U, z, F, x, H) {
						super(D, M, N, A, R, O, B, U, z, F, x, H),
							(this.r = L),
							this.D(this.G.watch(this.h.dirname(L))),
							this.D(this.G.onDidFilesChange((q) => this.yb(q)));
					}
					async vb() {
						try {
							return await this.G.readFile(this.r);
						} catch {
							return null;
						}
					}
					async wb(L, D, M) {
						try {
							D
								? await this.G.writeFile(
										this.r,
										w.$Te.fromString(L),
										M ? void 0 : D,
									)
								: await this.G.createFile(this.r, w.$Te.fromString(L), {
										overwrite: M,
									});
						} catch (N) {
							throw (N instanceof n.$Gl &&
								N.fileOperationResult ===
									n.FileOperationResult.FILE_NOT_FOUND) ||
								(N instanceof n.$Gl &&
									N.fileOperationResult ===
										n.FileOperationResult.FILE_MODIFIED_SINCE)
								? new s.$YRb(
										N.message,
										s.UserDataSyncErrorCode.LocalPreconditionFailed,
									)
								: N;
						}
					}
					async xb() {
						try {
							await this.G.del(this.r);
						} catch (L) {
							if (
								!(
									L instanceof n.$Gl &&
									L.fileOperationResult === n.FileOperationResult.FILE_NOT_FOUND
								)
							)
								throw L;
						}
					}
					yb(L) {
						L.contains(this.r) && this.Q();
					}
				};
				(e.$_xc = I),
					(e.$_xc = I =
						Ne(
							[
								j(3, n.$ll),
								j(4, c.$Ti),
								j(5, o.$lq),
								j(6, s.$TRb),
								j(7, s.$URb),
								j(8, s.$4Rb),
								j(9, f.$km),
								j(10, s.$9Rb),
								j(11, h.$gj),
								j(12, b.$Vl),
							],
							I,
						));
				let T = class extends I {
					constructor(L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(L, D, M, N, A, R, O, B, U, z, F, H, q),
							(this.zb = x),
							(this.Bb = void 0);
					}
					Ab(L, D) {
						const M = [],
							N = (0, d.$do)(L, M, {
								allowEmptyContent: !0,
								allowTrailingComma: !0,
							});
						return M.length > 0 || (!(0, u.$sg)(N) && D !== Array.isArray(N));
					}
					Cb() {
						return (
							this.Bb || (this.Bb = this.zb.resolveFormattingOptions(this.r)),
							this.Bb
						);
					}
				};
				(e.$ayc = T),
					(e.$ayc = T =
						Ne(
							[
								j(3, n.$ll),
								j(4, c.$Ti),
								j(5, o.$lq),
								j(6, s.$TRb),
								j(7, s.$URb),
								j(8, s.$4Rb),
								j(9, f.$km),
								j(10, s.$9Rb),
								j(11, s.$8Rb),
								j(12, h.$gj),
								j(13, b.$Vl),
							],
							T,
						));
				let P = class {
					constructor(L, D, M, N, A, R, O) {
						(this.resource = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.k = A),
							(this.l = R),
							(this.d = O.extUri),
							(this.f = (0, s.$RRb)(void 0, this.resource, M, this.d));
					}
					async initialize({ ref: L, content: D }) {
						if (!D) {
							this.j.info("Remote content does not exist.", this.resource);
							return;
						}
						const M = this.m(D);
						if (M)
							try {
								await this.o({ ref: L, syncData: M });
							} catch (N) {
								this.j.error(N);
							}
					}
					m(L) {
						try {
							const D = JSON.parse(L);
							if ($(D)) return D;
						} catch (D) {
							this.j.error(D);
						}
						this.j.info(
							"Cannot parse sync data as it is not compatible with the current version.",
							this.resource,
						);
					}
					async n(L, D = {}) {
						if (D.ref || D.version)
							throw new Error("Cannot have core properties as additional");
						const M = { ref: L.ref, version: void 0, ...D };
						this.l.store(
							`${this.resource}.lastSyncUserData`,
							JSON.stringify(M),
							o.StorageScope.APPLICATION,
							o.StorageTarget.MACHINE,
						),
							await this.k.writeFile(
								this.f,
								w.$Te.fromString(JSON.stringify(L)),
							);
					}
				};
				(e.$byc = P),
					(e.$byc = P =
						Ne(
							[
								j(1, l.$Xl),
								j(2, c.$Ti),
								j(3, g.$ik),
								j(4, n.$ll),
								j(5, o.$lq),
								j(6, b.$Vl),
							],
							P,
						));
			},
		),
		