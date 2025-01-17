import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/json.js';
import '../../../base/common/jsonFormatter.js';
import '../../../base/common/platform.js';
import '../../../base/common/uuid.js';
import '../../configuration/common/configuration.js';
import '../../environment/common/environment.js';
import '../../files/common/files.js';
import '../../log/common/log.js';
import '../../externalServices/common/serviceMachineId.js';
import '../../storage/common/storage.js';
import '../../telemetry/common/telemetry.js';
import '../../uriIdentity/common/uriIdentity.js';
import './abstractSynchronizer.js';
import './content.js';
import './globalStateMerge.js';
import './userDataSync.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../userDataProfile/common/userDataProfileStorageService.js';
import '../../instantiation/common/instantiation.js';
define(
			de[2937],
			he([
				1, 0, 76, 29, 6, 187, 585, 12, 47, 10, 113, 22, 34, 678, 21, 32, 68,
				1222, 1669, 2885, 150, 129, 681, 5,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hyc = e.$gyc = e.$fyc = e.$eyc = void 0),
					(e.$dyc = I);
				const v = "globalState.argv.",
					S = ["locale"];
				function I(M, N) {
					const A = M.storage ? Object.keys(M.storage).sort() : [],
						R = {};
					return (
						A.forEach((O) => (R[O] = M.storage[O])),
						(M.storage = R),
						N ? (0, C.$no)(M, {}) : JSON.stringify(M)
					);
				}
				const T = 1;
				let P = class extends o.$$xc {
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(
							{ syncResource: s.SyncResource.GlobalState, profile: N },
							A,
							O,
							F,
							V,
							B,
							U,
							x,
							H,
							z,
							q,
							G,
						),
							(this.Bb = R),
							(this.pb = T),
							(this.vb = this.h.joinPath(this.g, "globalState.json")),
							(this.wb = this.vb.with({ scheme: s.$$Rb, authority: "base" })),
							(this.xb = this.vb.with({ scheme: s.$$Rb, authority: "local" })),
							(this.yb = this.vb.with({ scheme: s.$$Rb, authority: "remote" })),
							(this.zb = this.vb.with({
								scheme: s.$$Rb,
								authority: "accepted",
							})),
							(this.Ab = K.createInstance(k)),
							this.D(O.watch(this.h.dirname(this.H.argvResource))),
							this.D(
								w.Event.any(
									w.Event.filter(O.onDidFilesChange, (J) =>
										J.contains(this.H.argvResource),
									),
									w.Event.filter(
										R.onDidChange,
										(J) =>
											!!(
												J.targetChanges.some(
													(W) => this.syncResource.profile.id === W.id,
												) ||
												J.valueChanges.some(
													({ profile: W, changes: X }) =>
														this.syncResource.profile.id === W.id &&
														X.some((Y) => Y.target === n.StorageTarget.USER),
												)
											),
									),
								)(() => this.Q()),
							);
					}
					async qb(N, A, R) {
						const O = N.syncData ? JSON.parse(N.syncData.content) : null;
						A = A === null && R ? N : A;
						const B = A && A.syncData ? JSON.parse(A.syncData.content) : null,
							U = await this.Ab.getLocalGlobalState(this.syncResource.profile);
						O
							? this.O.trace(
									`${this.C}: Merging remote ui state with local ui state...`,
								)
							: this.O.trace(
									`${this.C}: Remote ui state does not exist. Synchronizing ui state for the first time.`,
								);
						const z = await this.Jb(B),
							{ local: F, remote: x } = (0, b.$cyc)(
								U.storage,
								O ? O.storage : null,
								B ? B.storage : null,
								z,
								this.O,
							),
							H = {
								content: null,
								local: F,
								remote: x,
								localChange:
									Object.keys(F.added).length > 0 ||
									Object.keys(F.updated).length > 0 ||
									F.removed.length > 0
										? s.Change.Modified
										: s.Change.None,
								remoteChange:
									x.all !== null ? s.Change.Modified : s.Change.None,
							},
							q = I(U, !1);
						return [
							{
								baseResource: this.wb,
								baseContent: B ? I(B, !1) : q,
								localResource: this.xb,
								localContent: q,
								localUserData: U,
								remoteResource: this.yb,
								remoteContent: O ? I(O, !1) : null,
								previewResource: this.vb,
								previewResult: H,
								localChange: H.localChange,
								remoteChange: H.remoteChange,
								acceptedResource: this.zb,
								storageKeys: z,
							},
						];
					}
					async ub(N) {
						const A = N.syncData ? JSON.parse(N.syncData.content) : null;
						if (A === null) return !0;
						const R = await this.Ab.getLocalGlobalState(
								this.syncResource.profile,
							),
							O = await this.Jb(A),
							{ remote: B } = (0, b.$cyc)(
								R.storage,
								A.storage,
								A.storage,
								O,
								this.O,
							);
						return B.all !== null;
					}
					async rb(N, A) {
						return { ...N.previewResult, hasConflicts: !1 };
					}
					async sb(N, A, R, O) {
						if (this.h.isEqual(A, this.xb)) return this.Gb(N);
						if (this.h.isEqual(A, this.yb)) return this.Hb(N);
						if (this.h.isEqual(A, this.vb)) return N.previewResult;
						throw new Error(`Invalid Resource: ${A.toString()}`);
					}
					async Gb(N) {
						return {
							content: N.localContent,
							local: { added: {}, removed: [], updated: {} },
							remote: {
								added: Object.keys(N.localUserData.storage),
								removed: [],
								updated: [],
								all: N.localUserData.storage,
							},
							localChange: s.Change.None,
							remoteChange: s.Change.Modified,
						};
					}
					async Hb(N) {
						if (N.remoteContent !== null) {
							const A = JSON.parse(N.remoteContent),
								{ local: R, remote: O } = (0, b.$cyc)(
									N.localUserData.storage,
									A.storage,
									null,
									N.storageKeys,
									this.O,
								);
							return {
								content: N.remoteContent,
								local: R,
								remote: O,
								localChange:
									Object.keys(R.added).length > 0 ||
									Object.keys(R.updated).length > 0 ||
									R.removed.length > 0
										? s.Change.Modified
										: s.Change.None,
								remoteChange: O !== null ? s.Change.Modified : s.Change.None,
							};
						} else
							return {
								content: N.remoteContent,
								local: { added: {}, removed: [], updated: {} },
								remote: { added: [], removed: [], updated: [], all: null },
								localChange: s.Change.None,
								remoteChange: s.Change.None,
							};
					}
					async tb(N, A, R, O) {
						const { localUserData: B } = R[0][0],
							{
								local: U,
								remote: z,
								localChange: F,
								remoteChange: x,
							} = R[0][1];
						if (
							(F === s.Change.None &&
								x === s.Change.None &&
								this.O.info(
									`${this.C}: No changes found during synchronizing ui state.`,
								),
							F !== s.Change.None &&
								(this.O.trace(`${this.C}: Updating local ui state...`),
								await this.nb(JSON.stringify(B)),
								await this.Ab.writeLocalGlobalState(
									U,
									this.syncResource.profile,
								),
								this.O.info(`${this.C}: Updated local ui state`)),
							x !== s.Change.None)
						) {
							this.O.trace(`${this.C}: Updating remote ui state...`);
							const H = JSON.stringify({ storage: z.all });
							(N = await this.mb(H, O ? null : N.ref)),
								this.O.info(
									`${this.C}: Updated remote ui state.${z.added.length ? ` Added: ${z.added}.` : ""}${z.updated.length ? ` Updated: ${z.updated}.` : ""}${z.removed.length ? ` Removed: ${z.removed}.` : ""}`,
								);
						}
						A?.ref !== N.ref &&
							(this.O.trace(
								`${this.C}: Updating last synchronized ui state...`,
							),
							await this.fb(N),
							this.O.info(`${this.C}: Updated last synchronized ui state`));
					}
					async resolveContent(N) {
						if (
							this.h.isEqual(this.yb, N) ||
							this.h.isEqual(this.wb, N) ||
							this.h.isEqual(this.xb, N) ||
							this.h.isEqual(this.zb, N)
						) {
							const A = await this.db(N);
							return A && I(JSON.parse(A), !0);
						}
						return null;
					}
					async hasLocalData() {
						try {
							const { storage: N } = await this.Ab.getLocalGlobalState(
								this.syncResource.profile,
							);
							if (Object.keys(N).length > 1 || N[`${v}.locale`]?.value !== "en")
								return !0;
						} catch {}
						return !1;
					}
					async Jb(N) {
						const A = await this.Bb.readStorageData(this.syncResource.profile),
							R = [],
							O = [];
						for (const [z, F] of A)
							F.target === n.StorageTarget.USER
								? R.push(z)
								: F.target === n.StorageTarget.MACHINE && O.push(z);
						const B = [...R, ...O],
							U = N?.storage
								? Object.keys(N.storage).filter(
										(z) =>
											!z.startsWith(v) && !B.includes(z) && A.get(z) !== void 0,
									)
								: [];
						if (!d.$r) {
							const z = [...s.$PRb.map((F) => (0, s.$3Rb)(F)), s.$2Rb];
							U.push(...z), O.push(...z);
						}
						return { user: R, machine: O, unregistered: U };
					}
				};
				(e.$eyc = P),
					(e.$eyc = P =
						Ne(
							[
								j(2, y.$0wc),
								j(3, a.$ll),
								j(4, s.$TRb),
								j(5, s.$URb),
								j(6, s.$9Rb),
								j(7, u.$Ti),
								j(8, s.$4Rb),
								j(9, g.$km),
								j(10, r.$gj),
								j(11, n.$lq),
								j(12, p.$Vl),
								j(13, $.$Li),
							],
							P,
						));
				let k = class {
					constructor(N, A, R, O) {
						(this.a = N), (this.b = A), (this.c = R), (this.d = O);
					}
					async getLocalGlobalState(N) {
						const A = {};
						if (N.isDefault) {
							const O = await this.f(),
								B = (0, E.$do)(O);
							for (const U of S)
								B[U] !== void 0 &&
									(A[`${v}${U}`] = { version: 1, value: B[U] });
						}
						const R = await this.c.readStorageData(N);
						for (const [O, B] of R)
							B.value &&
								B.target === n.StorageTarget.USER &&
								(A[O] = { version: 1, value: B.value });
						return { storage: A };
					}
					async f() {
						try {
							this.d.debug(
								"GlobalStateSync#getLocalArgvContent",
								this.b.argvResource,
							);
							const N = await this.a.readFile(this.b.argvResource);
							return (
								this.d.debug(
									"GlobalStateSync#getLocalArgvContent - Resolved",
									this.b.argvResource,
								),
								N.value.toString()
							);
						} catch (N) {
							this.d.debug((0, i.$bb)(N));
						}
						return "{}";
					}
					async writeLocalGlobalState({ added: N, removed: A, updated: R }, O) {
						const B = (0, o.$0xc)(s.SyncResource.GlobalState, O),
							U = {},
							z = new Map(),
							F = await this.c.readStorageData(O),
							x = (H, q) => {
								for (const V of H) {
									if (V.startsWith(v)) {
										U[V.substring(v.length)] = q ? q[V].value : void 0;
										continue;
									}
									if (q) {
										const G = q[V];
										G.value !== F.get(V)?.value && z.set(V, G.value);
									} else F.get(V) !== void 0 && z.set(V, void 0);
								}
							};
						if (
							(x(Object.keys(N), N),
							x(Object.keys(R), R),
							x(A),
							Object.keys(U).length)
						) {
							this.d.trace(`${B}: Updating locale...`);
							const H = await this.f();
							let q = H;
							for (const V of Object.keys(U)) q = (0, f.edit)(q, [V], U[V], {});
							H !== q &&
								(this.d.trace(`${B}: Updating locale...`),
								await this.a.writeFile(
									this.b.argvResource,
									t.$Te.fromString(q),
								),
								this.d.info(`${B}: Updated locale.`)),
								this.d.info(`${B}: Updated locale`);
						}
						z.size &&
							(this.d.trace(`${B}: Updating global state...`),
							await this.c.updateStorageData(O, z, n.StorageTarget.USER),
							this.d.info(`${B}: Updated global state`, [...z.keys()]));
					}
				};
				(e.$fyc = k),
					(e.$fyc = k =
						Ne([j(0, a.$ll), j(1, u.$Ti), j(2, y.$0wc), j(3, s.$9Rb)], k));
				let L = class extends o.$byc {
					constructor(N, A, R, O, B, U) {
						super(s.SyncResource.GlobalState, R, O, B, A, N, U);
					}
					async o(N) {
						const A = N.syncData ? JSON.parse(N.syncData.content) : null;
						if (!A) {
							this.j.info(
								"Skipping initializing global state because remote global state does not exist.",
							);
							return;
						}
						const R = {},
							O = {};
						for (const B of Object.keys(A.storage))
							B.startsWith(v)
								? (R[B.substring(v.length)] = A.storage[B].value)
								: this.l.get(B, n.StorageScope.PROFILE) === void 0 &&
									(O[B] = A.storage[B].value);
						if (Object.keys(R).length) {
							let B = "{}";
							try {
								B = (
									await this.k.readFile(this.h.argvResource)
								).value.toString();
							} catch {}
							for (const U of Object.keys(R)) B = (0, f.edit)(B, [U], R[U], {});
							await this.k.writeFile(this.h.argvResource, t.$Te.fromString(B));
						}
						if (Object.keys(O).length) {
							const B = [];
							for (const U of Object.keys(O))
								B.push({
									key: U,
									value: O[U],
									scope: n.StorageScope.PROFILE,
									target: n.StorageTarget.USER,
								});
							this.l.storeAll(B, !0);
						}
					}
				};
				(e.$gyc = L),
					(e.$gyc = L =
						Ne(
							[
								j(0, n.$lq),
								j(1, a.$ll),
								j(2, l.$Xl),
								j(3, u.$Ti),
								j(4, s.$9Rb),
								j(5, p.$Vl),
							],
							L,
						));
				let D = class {
					constructor(N, A, R, O, B) {
						(this.a = N),
							(this.b = A),
							(this.c = R),
							(this.d = O),
							(this.f = B);
					}
					getSyncStoreType(N) {
						return this.h(N)?.storage[s.$2Rb]?.value;
					}
					async sync(N) {
						const A = (0, s.$XRb)((0, m.$9g)());
						try {
							return await this.g(N, A);
						} catch (R) {
							if (R instanceof s.$YRb)
								switch (R.code) {
									case s.UserDataSyncErrorCode.PreconditionFailed:
										return (
											this.f.info(
												"Failed to synchronize UserDataSyncStoreType as there is a new remote version available. Synchronizing again...",
											),
											this.g(N, A)
										);
								}
							throw R;
						}
					}
					async g(N, A) {
						const R = await this.a.readResource(
								s.SyncResource.GlobalState,
								null,
								void 0,
								A,
							),
							O = this.h(R) || { storage: {} };
						O.storage[s.$2Rb] = { value: N, version: T };
						const B = await (0, c.getServiceMachineId)(this.c, this.d, this.b),
							U = { version: T, machineId: B, content: I(O, !1) };
						await this.a.writeResource(
							s.SyncResource.GlobalState,
							JSON.stringify(U),
							R.ref,
							void 0,
							A,
						);
					}
					h({ content: N }) {
						if (!N) return null;
						const A = JSON.parse(N);
						if ((0, o.$9xc)(A)) return A ? JSON.parse(A.content) : null;
						throw new Error("Invalid remote data");
					}
				};
				(e.$hyc = D),
					(e.$hyc = D =
						Ne([j(1, n.$lq), j(2, u.$Ti), j(3, a.$ll), j(4, h.$ik)], D));
			},
		),
		