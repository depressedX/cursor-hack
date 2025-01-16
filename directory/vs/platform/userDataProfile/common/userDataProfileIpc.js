define(de[1696], he([1, 0, 6, 3, 129, 1172]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gfb = e.$ffb = void 0);
			class C {
				constructor(r, u) {
					(this.a = r), (this.b = u);
				}
				listen(r, u) {
					const a = this.b(r);
					switch (u) {
						case "onDidChangeProfiles":
							return t.Event.map(this.a.onDidChangeProfiles, (h) => ({
								all: h.all.map((c) => (0, E.$4n)({ ...c }, a)),
								added: h.added.map((c) => (0, E.$4n)({ ...c }, a)),
								removed: h.removed.map((c) => (0, E.$4n)({ ...c }, a)),
								updated: h.updated.map((c) => (0, E.$4n)({ ...c }, a)),
							}));
					}
					throw new Error(`Invalid listen ${u}`);
				}
				async call(r, u, a) {
					const h = this.b(r);
					switch (u) {
						case "createProfile": {
							const c = await this.a.createProfile(a[0], a[1], a[2]);
							return (0, E.$4n)({ ...c }, h);
						}
						case "updateProfile": {
							let c = (0, w.$Yl)(
								(0, E.$5n)(a[0], h),
								this.a.profilesHome.scheme,
							);
							return (
								(c = await this.a.updateProfile(c, a[1])),
								(0, E.$4n)({ ...c }, h)
							);
						}
						case "removeProfile": {
							const c = (0, w.$Yl)(
								(0, E.$5n)(a[0], h),
								this.a.profilesHome.scheme,
							);
							return this.a.removeProfile(c);
						}
					}
					throw new Error(`Invalid call ${u}`);
				}
			}
			e.$ffb = C;
			class d extends i.$1c {
				get defaultProfile() {
					return this.profiles[0];
				}
				get profiles() {
					return this.a;
				}
				constructor(r, u, a) {
					super(),
						(this.profilesHome = u),
						(this.f = a),
						(this.a = []),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeProfiles = this.b.event),
						(this.c = !0),
						(this.a = r.map((h) => (0, w.$Yl)(h, this.profilesHome.scheme))),
						this.D(
							this.f.listen("onDidChangeProfiles")((h) => {
								const c = h.added.map((p) =>
										(0, w.$Yl)(p, this.profilesHome.scheme),
									),
									n = h.removed.map((p) =>
										(0, w.$Yl)(p, this.profilesHome.scheme),
									),
									g = h.updated.map((p) =>
										(0, w.$Yl)(p, this.profilesHome.scheme),
									);
								(this.a = h.all.map((p) =>
									(0, w.$Yl)(p, this.profilesHome.scheme),
								)),
									this.b.fire({
										added: c,
										removed: n,
										updated: g,
										all: this.profiles,
									});
							}),
						),
						(this.onDidResetWorkspaces = this.f.listen("onDidResetWorkspaces"));
				}
				setEnablement(r) {
					this.c = r;
				}
				isEnabled() {
					return this.c;
				}
				async createNamedProfile(r, u, a) {
					const h = await this.f.call("createNamedProfile", [r, u, a]);
					return (0, w.$Yl)(h, this.profilesHome.scheme);
				}
				async createProfile(r, u, a, h) {
					const c = await this.f.call("createProfile", [r, u, a, h]);
					return (0, w.$Yl)(c, this.profilesHome.scheme);
				}
				async createTransientProfile(r) {
					const u = await this.f.call("createTransientProfile", [r]);
					return (0, w.$Yl)(u, this.profilesHome.scheme);
				}
				async setProfileForWorkspace(r, u) {
					await this.f.call("setProfileForWorkspace", [r, u]);
				}
				removeProfile(r) {
					return this.f.call("removeProfile", [r]);
				}
				async updateProfile(r, u) {
					const a = await this.f.call("updateProfile", [r, u]);
					return (0, w.$Yl)(a, this.profilesHome.scheme);
				}
				resetWorkspaces() {
					return this.f.call("resetWorkspaces");
				}
				cleanUp() {
					return this.f.call("cleanUp");
				}
				cleanUpTransientProfiles() {
					return this.f.call("cleanUpTransientProfiles");
				}
			}
			e.$gfb = d;
		}),
		define(
			de[681],
			he([1, 0, 3, 1174, 5, 21, 6, 1639, 129]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_wc = e.$$wc = e.$0wc = void 0),
					(e.$0wc = (0, w.$Mi)("IUserDataProfileStorageService"));
				let r = class extends t.$1c {
					constructor(c, n) {
						super(), (this.b = n), c && (this.a = this.D(new t.$0c()));
					}
					async readStorageData(c) {
						return this.withProfileScopedStorageService(c, async (n) =>
							this.c(n),
						);
					}
					async updateStorageData(c, n, g) {
						return this.withProfileScopedStorageService(c, async (p) =>
							this.f(p, n, g),
						);
					}
					async withProfileScopedStorageService(c, n) {
						if (this.b.hasScope(c)) return n(this.b);
						let g = this.a?.get(c.id);
						if (!g) {
							(g = new a(this.g(c))), this.a?.set(c.id, g);
							try {
								await g.initialize();
							} catch (p) {
								throw (
									(this.a?.has(c.id)
										? this.a.deleteAndDispose(c.id)
										: g.dispose(),
									p)
								);
							}
						}
						try {
							const p = await n(g);
							return await g.flush(), p;
						} finally {
							this.a?.has(c.id) || g.dispose();
						}
					}
					c(c) {
						const n = new Map(),
							g = (p) => {
								for (const o of c.keys(E.StorageScope.PROFILE, p))
									n.set(o, {
										value: c.get(o, E.StorageScope.PROFILE),
										target: p,
									});
							};
						return g(E.StorageTarget.USER), g(E.StorageTarget.MACHINE), n;
					}
					f(c, n, g) {
						c.storeAll(
							Array.from(n.entries()).map(([p, o]) => ({
								key: p,
								value: o,
								scope: E.StorageScope.PROFILE,
								target: g,
							})),
							!0,
						);
					}
				};
				(e.$$wc = r), (e.$$wc = r = Ne([j(1, E.$lq)], r));
				class u extends r {
					constructor(c, n, g, p, o) {
						super(c, p), (this.j = n);
						const f = n.getChannel("profileStorageListener"),
							b = this.D(new t.$2c());
						(this.h = this.D(
							new C.$re({
								onWillAddFirstListener: () => {
									b.value = f.listen("onDidChange")((s) => {
										o.trace("profile storage changes", s),
											this.h.fire({
												targetChanges: s.targetChanges.map((l) =>
													(0, m.$Yl)(l, g.profilesHome.scheme),
												),
												valueChanges: s.valueChanges.map((l) => ({
													...l,
													profile: (0, m.$Yl)(l.profile, g.profilesHome.scheme),
												})),
											});
									});
								},
								onDidRemoveLastListener: () => (b.value = void 0),
							}),
						)),
							(this.onDidChange = this.h.event);
					}
					async g(c) {
						const n = this.j.getChannel("storage");
						return (0, E.$oq)(c) ? new d.$6wc(n) : new d.$7wc(n, c);
					}
				}
				e.$_wc = u;
				class a extends E.$nq {
					constructor(c) {
						super({ flushInterval: 100 }), (this.X = c);
					}
					async Q() {
						const c = await this.X,
							n = new i.$hq(c);
						return (
							this.D(
								n.onDidChangeStorage((g) => {
									this.u(E.StorageScope.PROFILE, g);
								}),
							),
							this.D(
								(0, t.$Yc)(() => {
									n.close(), n.dispose(), (0, t.$Uc)(c) && c.dispose();
								}),
							),
							(this.s = n),
							this.s.init()
						);
					}
					R(c) {
						return c === E.StorageScope.PROFILE ? this.s : void 0;
					}
					S() {}
					async U() {}
					async W() {}
					hasScope() {
						return !1;
					}
				}
			},
		),
		define(
			de[2935],
			he([1, 0, 681, 20, 21, 34, 129, 371]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ocd = void 0);
				let m = class extends t.$_wc {
					constructor(u, a, h, c) {
						super(!1, u, a, h, c);
					}
				};
				(e.$ocd = m),
					(e.$ocd = m =
						Ne([j(0, d.$V8c), j(1, C.$Xl), j(2, w.$lq), j(3, E.$ik)], m)),
					(0, i.$lK)(t.$0wc, m, i.InstantiationType.Delayed);
			},
		),
		define(
			de[1222],
			he([
				1, 0, 24, 15, 76, 33, 6, 187, 3, 37, 28, 4, 10, 113, 22, 34, 678, 21,
				32, 68, 150, 129,
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
		define(
			de[2938],
			he([1, 0, 6, 3, 12, 113, 21, 32, 150]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J5c = void 0);
				const r = "sync.enable";
				let u = class extends i.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.c = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.a = new t.$re()),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = new t.$re()),
							(this.onDidChangeResourceEnablement = this.b.event),
							this.D(
								h.onDidChangeValue(
									C.StorageScope.APPLICATION,
									void 0,
									this.D(new i.$Zc()),
								)((p) => this.m(p)),
							);
					}
					isEnabled() {
						switch (this.g.sync) {
							case "on":
								return !0;
							case "off":
								return !1;
						}
						return this.c.getBoolean(r, C.StorageScope.APPLICATION, !1);
					}
					canToggleEnablement() {
						return (
							this.h.userDataSyncStore !== void 0 && this.g.sync === void 0
						);
					}
					setEnablement(h) {
						(h && !this.canToggleEnablement()) ||
							(this.f.publicLog2(r, { enabled: h }),
							this.c.store(
								r,
								h,
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							));
					}
					isResourceEnabled(h) {
						return this.c.getBoolean(
							(0, m.$3Rb)(h),
							C.StorageScope.APPLICATION,
							!0,
						);
					}
					setResourceEnablement(h, c) {
						if (this.isResourceEnabled(h) !== c) {
							const n = (0, m.$3Rb)(h);
							this.j(n, c);
						}
					}
					getResourceSyncStateVersion(h) {}
					j(h, c) {
						this.c.store(
							h,
							c,
							C.StorageScope.APPLICATION,
							w.$r ? C.StorageTarget.USER : C.StorageTarget.MACHINE,
						);
					}
					m(h) {
						if (r === h.key) {
							this.a.fire(this.isEnabled());
							return;
						}
						const c = m.$PRb.filter((n) => (0, m.$3Rb)(n) === h.key)[0];
						if (c) {
							this.b.fire([c, this.isResourceEnabled(c)]);
							return;
						}
					}
				};
				(e.$J5c = u),
					(e.$J5c = u =
						Ne([j(0, C.$lq), j(1, d.$km), j(2, E.$Ti), j(3, m.$SRb)], u));
			},
		),
		define(
			de[965],
			he([1, 0, 6, 3, 12, 37, 4, 113, 22, 5, 62, 678, 21, 150]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HRb = e.$FRb = void 0),
					(e.$GRb = l),
					(e.$FRb = (0, r.$Mi)("IUserDataSyncMachinesService"));
				const g = "sync.currentMachineName",
					p = "Safari",
					o = "Chrome",
					f = "Edge",
					b = "Firefox",
					s = "Android";
				function l(v) {
					switch (v) {
						case p:
						case o:
						case f:
						case b:
						case s:
						case (0, w.$k)(w.Platform.Web):
							return !0;
					}
					return !1;
				}
				function y() {
					return w.$J
						? p
						: w.$H
							? o
							: w.$K
								? f
								: w.$I
									? b
									: w.$L
										? s
										: (0, w.$k)(w.$r ? w.Platform.Web : w.$x);
				}
				let $ = class extends i.$1c {
					static {
						n = this;
					}
					static {
						this.a = 1;
					}
					static {
						this.b = "machines";
					}
					constructor(S, I, T, P, k, L) {
						super(),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.c = this.D(new t.$re())),
							(this.onDidChange = this.c.event),
							(this.g = null),
							(this.f = (0, a.getServiceMachineId)(S, I, T));
					}
					async getMachines(S) {
						const I = await this.f;
						return (await this.r(S)).machines.map((P) => ({
							...P,
							isCurrent: P.id === I,
						}));
					}
					async addCurrentMachine(S) {
						const I = await this.f,
							T = await this.r(S);
						T.machines.some(({ id: P }) => P === I) ||
							(T.machines.push({
								id: I,
								name: this.q(T.machines),
								platform: y(),
							}),
							await this.s(T));
					}
					async removeCurrentMachine(S) {
						const I = await this.f,
							T = await this.r(S),
							P = T.machines.filter(({ id: k }) => k !== I);
						P.length !== T.machines.length &&
							((T.machines = P), await this.s(T));
					}
					async renameMachine(S, I, T) {
						const P = await this.r(T),
							k = P.machines.find(({ id: L }) => L === S);
						if (k) {
							(k.name = I), await this.s(P);
							const L = await this.f;
							S === L &&
								this.h.store(
									g,
									I,
									h.StorageScope.APPLICATION,
									h.StorageTarget.MACHINE,
								);
						}
					}
					async setEnablements(S) {
						const I = await this.r();
						for (const [T, P] of S) {
							const k = I.machines.find((L) => L.id === T);
							k && (k.disabled = P ? void 0 : !0);
						}
						await this.s(I);
					}
					q(S) {
						const I = this.h.get(g, h.StorageScope.APPLICATION);
						if (I) return I;
						const T = `${this.n.embedderIdentifier ? `${this.n.embedderIdentifier} - ` : ""}${y()} (${this.n.nameShort})`,
							P = new RegExp(`${(0, E.$of)(T)}\\s#(\\d+)`);
						let k = 0;
						for (const L of S) {
							const D = P.exec(L.name),
								M = D ? parseInt(D[1]) : 0;
							k = M > k ? M : k;
						}
						return `${T} #${k + 1}`;
					}
					async r(S) {
						this.g = await this.t(S);
						const I = this.u(this.g);
						if (I.version !== n.a)
							throw new Error((0, C.localize)(2465, null, this.n.nameLong));
						return I;
					}
					async s(S) {
						const I = JSON.stringify(S),
							T = await this.j.writeResource(n.b, I, this.g?.ref || null);
						(this.g = { ref: T, content: I }), this.c.fire();
					}
					async t(S) {
						if (this.g) {
							const I = S && S.latest ? S.latest[n.b] : void 0;
							if (this.g.ref === I) return this.g;
							if (I === void 0 && this.g.content === null) return this.g;
						}
						return this.j.readResource(n.b, this.g);
					}
					u(S) {
						if (S.content !== null)
							try {
								return JSON.parse(S.content);
							} catch (I) {
								this.m.error(I);
							}
						return { version: n.a, machines: [] };
					}
				};
				(e.$HRb = $),
					(e.$HRb =
						$ =
						n =
							Ne(
								[
									j(0, d.$Ti),
									j(1, m.$ll),
									j(2, h.$lq),
									j(3, c.$TRb),
									j(4, c.$9Rb),
									j(5, u.$Bk),
								],
								$,
							));
			},
		),
		define(
			de[2939],
			he([1, 0, 6, 3, 9, 129, 150]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n9c = e.$m9c = void 0);
				function d(h, c) {
					return {
						...h,
						profile: (0, E.$Yl)(h.profile, c.profilesHome.scheme),
					};
				}
				function m(h) {
					return { created: h.created, uri: w.URI.revive(h.uri) };
				}
				class r {
					constructor(c, n, g) {
						(this.c = c),
							(this.d = n),
							(this.f = g),
							(this.a = new Map()),
							(this.b = new t.$re());
					}
					listen(c, n) {
						switch (n) {
							case "onDidChangeStatus":
								return this.c.onDidChangeStatus;
							case "onDidChangeConflicts":
								return this.c.onDidChangeConflicts;
							case "onDidChangeLocal":
								return this.c.onDidChangeLocal;
							case "onDidChangeLastSyncTime":
								return this.c.onDidChangeLastSyncTime;
							case "onSyncErrors":
								return this.c.onSyncErrors;
							case "onDidResetLocal":
								return this.c.onDidResetLocal;
							case "onDidResetRemote":
								return this.c.onDidResetRemote;
							case "manualSync/onSynchronizeResources":
								return this.b.event;
						}
						throw new Error(
							`[UserDataSyncServiceChannel] Event not found: ${n}`,
						);
					}
					async call(c, n, g) {
						try {
							return await this.g(c, n, g);
						} catch (p) {
							throw (this.f.error(p), p);
						}
					}
					async g(c, n, g) {
						switch (n) {
							case "_getInitialData":
								return Promise.resolve([
									this.c.status,
									this.c.conflicts,
									this.c.lastSyncTime,
								]);
							case "reset":
								return this.c.reset();
							case "resetRemote":
								return this.c.resetRemote();
							case "resetLocal":
								return this.c.resetLocal();
							case "hasPreviouslySynced":
								return this.c.hasPreviouslySynced();
							case "hasLocalData":
								return this.c.hasLocalData();
							case "resolveContent":
								return this.c.resolveContent(w.URI.revive(g[0]));
							case "accept":
								return this.c.accept(
									d(g[0], this.d),
									w.URI.revive(g[1]),
									g[2],
									g[3],
								);
							case "replace":
								return this.c.replace(m(g[0]));
							case "cleanUpRemoteData":
								return this.c.cleanUpRemoteData();
							case "getRemoteActivityData":
								return this.c.saveRemoteActivityData(w.URI.revive(g[0]));
							case "extractActivityData":
								return this.c.extractActivityData(
									w.URI.revive(g[0]),
									w.URI.revive(g[1]),
								);
							case "createManualSyncTask":
								return this.i();
						}
						if (n.startsWith("manualSync/")) {
							const p = n.substring(11),
								o = g[0],
								f = this.h(o);
							switch (((g = g.slice(1)), p)) {
								case "merge":
									return f.merge();
								case "apply":
									return f.apply().then(() => this.a.delete(this.j(f.id)));
								case "stop":
									return f.stop().finally(() => this.a.delete(this.j(f.id)));
							}
						}
						throw new Error("Invalid call");
					}
					h(c) {
						const n = this.a.get(this.j(c));
						if (!n) throw new Error(`Manual sync taks not found: ${c}`);
						return n;
					}
					async i() {
						const c = await this.c.createManualSyncTask();
						return this.a.set(this.j(c.id), c), c.id;
					}
					j(c) {
						return `manualSyncTask-${c}`;
					}
				}
				e.$m9c = r;
				let u = class extends i.$1c {
					get status() {
						return this.b;
					}
					get onDidChangeLocal() {
						return this.a.listen("onDidChangeLocal");
					}
					get conflicts() {
						return this.f;
					}
					get lastSyncTime() {
						return this.h;
					}
					get onDidResetLocal() {
						return this.a.listen("onDidResetLocal");
					}
					get onDidResetRemote() {
						return this.a.listen("onDidResetRemote");
					}
					constructor(c, n) {
						super(),
							(this.n = n),
							(this.b = C.SyncStatus.Uninitialized),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeStatus = this.c.event),
							(this.f = []),
							(this.g = this.D(new t.$re())),
							(this.onDidChangeConflicts = this.g.event),
							(this.h = void 0),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeLastSyncTime = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onSyncErrors = this.m.event),
							(this.a = {
								call(g, p, o) {
									return c.call(g, p, o).then(null, (f) => {
										throw C.$YRb.toUserDataSyncError(f);
									});
								},
								listen(g, p) {
									return c.listen(g, p);
								},
							}),
							this.a.call("_getInitialData").then(([g, p, o]) => {
								this.q(g),
									this.s(p),
									o && this.t(o),
									this.D(this.a.listen("onDidChangeStatus")((f) => this.q(f))),
									this.D(
										this.a.listen("onDidChangeLastSyncTime")((f) => this.t(f)),
									);
							}),
							this.D(this.a.listen("onDidChangeConflicts")((g) => this.s(g))),
							this.D(
								this.a.listen("onSyncErrors")((g) =>
									this.m.fire(
										g.map((p) => ({
											...p,
											error: C.$YRb.toUserDataSyncError(p.error),
										})),
									),
								),
							);
					}
					createSyncTask() {
						throw new Error("not supported");
					}
					async createManualSyncTask() {
						const c = await this.a.call("createManualSyncTask"),
							n = this;
						return new a(c, {
							async call(p, o, f) {
								return n.a.call(
									`manualSync/${p}`,
									[c, ...(Array.isArray(o) ? o : [o])],
									f,
								);
							},
							listen() {
								throw new Error("not supported");
							},
						});
					}
					reset() {
						return this.a.call("reset");
					}
					resetRemote() {
						return this.a.call("resetRemote");
					}
					resetLocal() {
						return this.a.call("resetLocal");
					}
					hasPreviouslySynced() {
						return this.a.call("hasPreviouslySynced");
					}
					hasLocalData() {
						return this.a.call("hasLocalData");
					}
					accept(c, n, g, p) {
						return this.a.call("accept", [c, n, g, p]);
					}
					resolveContent(c) {
						return this.a.call("resolveContent", [c]);
					}
					cleanUpRemoteData() {
						return this.a.call("cleanUpRemoteData");
					}
					replace(c) {
						return this.a.call("replace", [c]);
					}
					saveRemoteActivityData(c) {
						return this.a.call("getRemoteActivityData", [c]);
					}
					extractActivityData(c, n) {
						return this.a.call("extractActivityData", [c, n]);
					}
					async q(c) {
						(this.b = c), this.c.fire(c);
					}
					async s(c) {
						(this.f = c.map((n) => ({
							syncResource: n.syncResource,
							profile: (0, E.$Yl)(n.profile, this.n.profilesHome.scheme),
							conflicts: n.conflicts.map((g) => ({
								...g,
								baseResource: w.URI.revive(g.baseResource),
								localResource: w.URI.revive(g.localResource),
								remoteResource: w.URI.revive(g.remoteResource),
								previewResource: w.URI.revive(g.previewResource),
							})),
						}))),
							this.g.fire(this.f);
					}
					t(c) {
						this.h !== c && ((this.h = c), this.j.fire(c));
					}
				};
				(e.$n9c = u), (e.$n9c = u = Ne([j(1, E.$Xl)], u));
				class a extends i.$1c {
					constructor(c, n) {
						super(), (this.id = c), (this.a = n);
					}
					async merge() {
						return this.a.call("merge");
					}
					async apply() {
						return this.a.call("apply");
					}
					stop() {
						return this.a.call("stop");
					}
					dispose() {
						this.a.call("dispose"), super.dispose();
					}
				}
			},
		),
		define(
			de[966],
			he([
				1, 0, 15, 33, 29, 6, 3, 266, 12, 19, 28, 9, 47, 10, 113, 22, 62, 327,
				678, 21, 150,
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
					(e.$7xc = e.$6xc = e.$5xc = e.$4xc = e.$3xc = void 0);
				const l = "configurationSync.store",
					y = "sync.previous.store",
					$ = "sync.donot-make-requests-until",
					v = "sync.user-session-id",
					S = "sync.machine-session-id",
					I = 100,
					T = 1e3 * 60 * 5;
				let P = class extends C.$1c {
					get userDataSyncStore() {
						return this.b;
					}
					get c() {
						return this.h.get(s.$2Rb, b.StorageScope.APPLICATION);
					}
					set c(A) {
						this.h.store(
							s.$2Rb,
							A,
							b.StorageScope.APPLICATION,
							m.$r ? b.StorageTarget.USER : b.StorageTarget.MACHINE,
						);
					}
					constructor(A, R, O) {
						super(),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeUserDataSyncStore = this.a.event),
							this.j();
						const B = this.D(new C.$Zc());
						this.D(
							E.Event.filter(
								O.onDidChangeValue(b.StorageScope.APPLICATION, s.$2Rb, B),
								() => this.c !== this.userDataSyncStore?.type,
								B,
							)(() => this.j()),
						);
					}
					j() {
						(this.b = this.m(this.f[l])), this.a.fire();
					}
					m(A) {
						if (
							A &&
							((A = m.$r && A.web ? { ...A, ...A.web } : A),
							(0, u.$lg)(A.url) &&
								(0, u.$ng)(A.authenticationProviders) &&
								Object.keys(A.authenticationProviders).every((R) =>
									Array.isArray(A.authenticationProviders[R].scopes),
								))
						) {
							const R = A,
								O = !!R.canSwitch,
								B = R.url === R.insidersUrl ? "insiders" : "stable",
								U = (O ? this.c : void 0) || B,
								z =
									U === "insiders"
										? R.insidersUrl
										: U === "stable"
											? R.stableUrl
											: R.url;
							return {
								url: a.URI.parse(z),
								type: U,
								defaultType: B,
								defaultUrl: a.URI.parse(R.url),
								stableUrl: a.URI.parse(R.stableUrl),
								insidersUrl: a.URI.parse(R.insidersUrl),
								canSwitch: O,
								authenticationProviders: Object.keys(
									R.authenticationProviders,
								).reduce(
									(F, x) => (
										F.push({
											id: x,
											scopes: R.authenticationProviders[x].scopes,
										}),
										F
									),
									[],
								),
							};
						}
					}
				};
				(e.$3xc = P),
					(e.$3xc = P = Ne([j(0, p.$Bk), j(1, c.$gj), j(2, b.$lq)], P));
				let k = class extends P {
					constructor(A, R, O) {
						super(A, R, O);
						const B = this.h.get(y, b.StorageScope.APPLICATION);
						B && (this.n = JSON.parse(B));
						const U = this.f[l];
						U
							? this.h.store(
									y,
									JSON.stringify(U),
									b.StorageScope.APPLICATION,
									b.StorageTarget.MACHINE,
								)
							: this.h.remove(y, b.StorageScope.APPLICATION);
					}
					async switch(A) {
						A !== this.c && ((this.c = A), this.j());
					}
					async getPreviousUserDataSyncStore() {
						return this.m(this.n);
					}
				};
				(e.$4xc = k),
					(e.$4xc = k = Ne([j(0, p.$Bk), j(1, c.$gj), j(2, b.$lq)], k));
				let L = class extends C.$1c {
					get donotMakeRequestsUntil() {
						return this.j;
					}
					constructor(A, R, O, B, U, z, F) {
						super(),
							(this.n = O),
							(this.q = B),
							(this.r = F),
							(this.g = this.D(new E.$re())),
							(this.onTokenFailed = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onTokenSucceed = this.h.event),
							(this.j = void 0),
							(this.m = this.D(new E.$re())),
							(this.onDidChangeDonotMakeRequestsUntil = this.m.event),
							(this.u = void 0),
							this.s(A),
							(this.c = (0, f.getServiceMachineId)(U, z, F).then((x) => {
								const H = {
									"X-Client-Name": `${R.applicationName}${m.$r ? "-web" : ""}`,
									"X-Client-Version": R.version,
								};
								return R.commit && (H["X-Client-Commit"] = R.commit), H;
							})),
							(this.f = new M(I, T, this.n, this.q)),
							this.t(),
							this.D(
								(0, C.$Yc)(() => {
									this.u && (this.u.cancel(), (this.u = void 0));
								}),
							);
					}
					setAuthToken(A, R) {
						this.b = { token: A, type: R };
					}
					s(A) {
						this.a = A ? (0, r.$nh)(A, "v1") : void 0;
					}
					t() {
						const A = this.r.getNumber($, b.StorageScope.APPLICATION);
						A && Date.now() < A && this.w(new Date(A));
					}
					w(A) {
						this.j?.getTime() !== A?.getTime() &&
							((this.j = A),
							this.u && (this.u.cancel(), (this.u = void 0)),
							this.j
								? (this.r.store(
										$,
										this.j.getTime(),
										b.StorageScope.APPLICATION,
										b.StorageTarget.MACHINE,
									),
									(this.u = (0, t.$zh)((R) =>
										(0, t.$Nh)(this.j.getTime() - Date.now(), R).then(() =>
											this.w(void 0),
										),
									)),
									this.u.then(null, (R) => null))
								: this.r.remove($, b.StorageScope.APPLICATION),
							this.m.fire());
					}
					async getAllCollections(A = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const R = (0, r.$nh)(this.a, "collection").toString();
						(A = { ...A }), (A["Content-Type"] = "application/json");
						const O = await this.C(
							R,
							{ type: "GET", headers: A },
							[],
							i.CancellationToken.None,
						);
						return (await (0, o.$Gq)(O))?.map(({ id: B }) => B) || [];
					}
					async createCollection(A = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const R = (0, r.$nh)(this.a, "collection").toString();
						(A = { ...A }), (A["Content-Type"] = d.$EK.text);
						const O = await this.C(
								R,
								{ type: "POST", headers: A },
								[],
								i.CancellationToken.None,
							),
							B = await (0, o.$Fq)(O);
						if (!B)
							throw new s.$ZRb(
								"Server did not return the collection id",
								R,
								s.UserDataSyncErrorCode.NoCollection,
								O.res.statusCode,
								O.res.headers[s.$VRb],
							);
						return B;
					}
					async deleteCollection(A, R = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const O = A
							? (0, r.$nh)(this.a, "collection", A).toString()
							: (0, r.$nh)(this.a, "collection").toString();
						(R = { ...R }),
							await this.C(
								O,
								{ type: "DELETE", headers: R },
								[],
								i.CancellationToken.None,
							);
					}
					async getAllResourceRefs(A, R) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const O = this.y(this.a, R, A),
							B = {},
							U = await this.C(
								O.toString(),
								{ type: "GET", headers: B },
								[],
								i.CancellationToken.None,
							);
						return ((await (0, o.$Gq)(U)) || []).map(
							({ url: F, created: x }) => ({
								ref: (0, r.$ph)(O, O.with({ path: F })),
								created: x * 1e3,
							}),
						);
					}
					async resolveResourceContent(A, R, O, B = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const U = (0, r.$nh)(this.y(this.a, O, A), R).toString();
						(B = { ...B }), (B["Cache-Control"] = "no-cache");
						const z = await this.C(
							U,
							{ type: "GET", headers: B },
							[],
							i.CancellationToken.None,
						);
						return await (0, o.$Fq)(z);
					}
					async deleteResource(A, R, O) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const B =
								R !== null
									? (0, r.$nh)(this.y(this.a, O, A), R).toString()
									: this.y(this.a, O, A).toString(),
							U = {};
						await this.C(
							B,
							{ type: "DELETE", headers: U },
							[],
							i.CancellationToken.None,
						);
					}
					async deleteResources() {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const A = (0, r.$nh)(this.a, "resource").toString(),
							R = { "Content-Type": d.$EK.text };
						await this.C(
							A,
							{ type: "DELETE", headers: R },
							[],
							i.CancellationToken.None,
						);
					}
					async readResource(A, R, O, B = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const U = (0, r.$nh)(this.y(this.a, O, A), "latest").toString();
						(B = { ...B }),
							(B["Cache-Control"] = "no-cache"),
							R && (B["If-None-Match"] = R.ref);
						const z = await this.C(
							U,
							{ type: "GET", headers: B },
							[304],
							i.CancellationToken.None,
						);
						let F = null;
						if ((z.res.statusCode === 304 && (F = R), F === null)) {
							const x = z.res.headers.etag;
							if (!x)
								throw new s.$ZRb(
									"Server did not return the ref",
									U,
									s.UserDataSyncErrorCode.NoRef,
									z.res.statusCode,
									z.res.headers[s.$VRb],
								);
							const H = await (0, o.$Fq)(z);
							if (!H && z.res.statusCode === 304)
								throw new s.$ZRb(
									"Empty response",
									U,
									s.UserDataSyncErrorCode.EmptyResponse,
									z.res.statusCode,
									z.res.headers[s.$VRb],
								);
							F = { ref: x, content: H };
						}
						return F;
					}
					async writeResource(A, R, O, B, U = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const z = this.y(this.a, B, A).toString();
						(U = { ...U }),
							(U["Content-Type"] = d.$EK.text),
							O && (U["If-Match"] = O);
						const F = await this.C(
								z,
								{ type: "POST", data: R, headers: U },
								[],
								i.CancellationToken.None,
							),
							x = F.res.headers.etag;
						if (!x)
							throw new s.$ZRb(
								"Server did not return the ref",
								z,
								s.UserDataSyncErrorCode.NoRef,
								F.res.statusCode,
								F.res.headers[s.$VRb],
							);
						return x;
					}
					async manifest(A, R = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const O = (0, r.$nh)(this.a, "manifest").toString();
						(R = { ...R }),
							(R["Content-Type"] = "application/json"),
							A && (R["If-None-Match"] = A.ref);
						const B = await this.C(
							O,
							{ type: "GET", headers: R },
							[304],
							i.CancellationToken.None,
						);
						let U = null;
						if ((B.res.statusCode === 304 && (U = A), !U)) {
							const F = B.res.headers.etag;
							if (!F)
								throw new s.$ZRb(
									"Server did not return the ref",
									O,
									s.UserDataSyncErrorCode.NoRef,
									B.res.statusCode,
									B.res.headers[s.$VRb],
								);
							const x = await (0, o.$Fq)(B);
							if (!x && B.res.statusCode === 304)
								throw new s.$ZRb(
									"Empty response",
									O,
									s.UserDataSyncErrorCode.EmptyResponse,
									B.res.statusCode,
									B.res.headers[s.$VRb],
								);
							x && (U = { ...JSON.parse(x), ref: F });
						}
						const z = this.r.get(v, b.StorageScope.APPLICATION);
						return (
							z && U && z !== U.session && this.z(),
							U === null && z && this.z(),
							U &&
								this.r.store(
									v,
									U.session,
									b.StorageScope.APPLICATION,
									b.StorageTarget.MACHINE,
								),
							U
						);
					}
					async clear() {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						await this.deleteCollection(),
							await this.deleteResources(),
							this.z();
					}
					async getActivityData() {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const A = (0, r.$nh)(this.a, "download").toString(),
							R = {},
							O = await this.C(
								A,
								{ type: "GET", headers: R },
								[],
								i.CancellationToken.None,
							);
						if (!(0, o.$Cq)(O))
							throw new s.$ZRb(
								"Server returned " + O.res.statusCode,
								A,
								s.UserDataSyncErrorCode.EmptyResponse,
								O.res.statusCode,
								O.res.headers[s.$VRb],
							);
						if ((0, o.$Dq)(O))
							throw new s.$ZRb(
								"Empty response",
								A,
								s.UserDataSyncErrorCode.EmptyResponse,
								O.res.statusCode,
								O.res.headers[s.$VRb],
							);
						return O.stream;
					}
					y(A, R, O) {
						return R
							? (0, r.$nh)(A, "collection", R, "resource", O)
							: (0, r.$nh)(A, "resource", O);
					}
					z() {
						this.r.remove(v, b.StorageScope.APPLICATION),
							this.r.remove(S, b.StorageScope.APPLICATION);
					}
					async C(A, R, O, B) {
						if (!this.b)
							throw new s.$ZRb(
								"No Auth Token Available",
								A,
								s.UserDataSyncErrorCode.Unauthorized,
								void 0,
								void 0,
							);
						if (this.j && Date.now() < this.j.getTime())
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of too many requests (429).`,
								A,
								s.UserDataSyncErrorCode.TooManyRequestsAndRetryAfter,
								void 0,
								void 0,
							);
						this.w(void 0);
						const U = await this.c;
						(R.headers = {
							...(R.headers || {}),
							...U,
							"X-Account-Type": this.b.type,
							authorization: `Bearer ${this.b.token}`,
						}),
							this.F(R.headers),
							this.q.trace("Sending request to server", {
								url: A,
								type: R.type,
								headers: { ...R.headers, authorization: void 0 },
							});
						let z;
						try {
							z = await this.f.request(A, R, B);
						} catch (V) {
							if (!(V instanceof s.$ZRb)) {
								let G = s.UserDataSyncErrorCode.RequestFailed;
								const K = (0, w.$bb)(V).toLowerCase();
								K.includes("xhr timeout")
									? (G = s.UserDataSyncErrorCode.RequestTimeout)
									: K.includes("protocol") && K.includes("not supported")
										? (G = s.UserDataSyncErrorCode.RequestProtocolNotSupported)
										: K.includes("request path contains unescaped characters")
											? (G = s.UserDataSyncErrorCode.RequestPathNotEscaped)
											: K.includes("headers must be an object")
												? (G = s.UserDataSyncErrorCode.RequestHeadersNotObject)
												: (0, w.$8)(V) &&
													(G = s.UserDataSyncErrorCode.RequestCanceled),
									(V = new s.$ZRb(
										`Connection refused for the request '${A}'.`,
										A,
										G,
										void 0,
										void 0,
									));
							}
							throw (this.q.info("Request failed", A), V);
						}
						const F = z.res.headers[s.$VRb],
							x = {
								url: A,
								status: z.res.statusCode,
								"execution-id": R.headers[s.$WRb],
								"operation-id": F,
							},
							H =
								(0, o.$Cq)(z) ||
								(z.res.statusCode && O.includes(z.res.statusCode));
						let q = "";
						if (
							(H
								? this.q.trace("Request succeeded", x)
								: ((q = (await (0, o.$Eq)(z)) || ""),
									this.q.info("Request failed", x, q)),
							z.res.statusCode === 401 || z.res.statusCode === 403)
						) {
							if (((this.b = void 0), z.res.statusCode === 401))
								throw (
									(this.g.fire(s.UserDataSyncErrorCode.Unauthorized),
									new s.$ZRb(
										`${R.type} request '${A}' failed because of Unauthorized (401).`,
										A,
										s.UserDataSyncErrorCode.Unauthorized,
										z.res.statusCode,
										F,
									))
								);
							if (z.res.statusCode === 403)
								throw (
									(this.g.fire(s.UserDataSyncErrorCode.Forbidden),
									new s.$ZRb(
										`${R.type} request '${A}' failed because the access is forbidden (403).`,
										A,
										s.UserDataSyncErrorCode.Forbidden,
										z.res.statusCode,
										F,
									))
								);
						}
						if ((this.h.fire(), z.res.statusCode === 404))
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because the requested resource is not found (404).`,
								A,
								s.UserDataSyncErrorCode.NotFound,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 405)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because the requested endpoint is not found (405). ${q}`,
								A,
								s.UserDataSyncErrorCode.MethodNotFound,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 409)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of Conflict (409). There is new data for this resource. Make the request again with latest data.`,
								A,
								s.UserDataSyncErrorCode.Conflict,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 410)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because the requested resource is not longer available (410).`,
								A,
								s.UserDataSyncErrorCode.Gone,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 412)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of Precondition Failed (412). There is new data for this resource. Make the request again with latest data.`,
								A,
								s.UserDataSyncErrorCode.PreconditionFailed,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 413)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of too large payload (413).`,
								A,
								s.UserDataSyncErrorCode.TooLarge,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 426)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed with status Upgrade Required (426). Please upgrade the client and try again.`,
								A,
								s.UserDataSyncErrorCode.UpgradeRequired,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 429) {
							const V = z.res.headers["retry-after"];
							throw V
								? (this.w(new Date(Date.now() + parseInt(V) * 1e3)),
									new s.$ZRb(
										`${R.type} request '${A}' failed because of too many requests (429).`,
										A,
										s.UserDataSyncErrorCode.TooManyRequestsAndRetryAfter,
										z.res.statusCode,
										F,
									))
								: new s.$ZRb(
										`${R.type} request '${A}' failed because of too many requests (429).`,
										A,
										s.UserDataSyncErrorCode.TooManyRequests,
										z.res.statusCode,
										F,
									);
						}
						if (!H)
							throw new s.$ZRb(
								"Server returned " + z.res.statusCode,
								A,
								s.UserDataSyncErrorCode.Unknown,
								z.res.statusCode,
								F,
							);
						return z;
					}
					F(A) {
						let R = this.r.get(S, b.StorageScope.APPLICATION);
						R === void 0 &&
							((R = (0, h.$9g)()),
							this.r.store(
								S,
								R,
								b.StorageScope.APPLICATION,
								b.StorageTarget.MACHINE,
							)),
							(A["X-Machine-Session-Id"] = R);
						const O = this.r.get(v, b.StorageScope.APPLICATION);
						O !== void 0 && (A["X-User-Session-Id"] = O);
					}
				};
				(e.$5xc = L),
					(e.$5xc = L =
						Ne(
							[
								j(1, p.$Bk),
								j(2, o.$Aq),
								j(3, s.$9Rb),
								j(4, n.$Ti),
								j(5, g.$ll),
								j(6, b.$lq),
							],
							L,
						));
				let D = class extends L {
					constructor(A, R, O, B, U, z, F) {
						super(A.userDataSyncStore?.url, R, O, B, U, z, F),
							this.D(
								A.onDidChangeUserDataSyncStore(() =>
									this.s(A.userDataSyncStore?.url),
								),
							);
					}
				};
				(e.$6xc = D),
					(e.$6xc = D =
						Ne(
							[
								j(0, s.$SRb),
								j(1, p.$Bk),
								j(2, o.$Aq),
								j(3, s.$9Rb),
								j(4, n.$Ti),
								j(5, g.$ll),
								j(6, b.$lq),
							],
							D,
						));
				class M {
					constructor(A, R, O, B) {
						(this.c = A),
							(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.a = []),
							(this.b = void 0);
					}
					request(A, R, O) {
						if ((this.h() && this.i(), (R.url = A), this.a.length >= this.c))
							throw (
								(this.g.info("Too many requests", ...this.a),
								new s.$ZRb(
									`Too many requests. Only ${this.c} requests allowed in ${this.d / (1e3 * 60)} minutes.`,
									A,
									s.UserDataSyncErrorCode.LocalTooManyRequests,
									void 0,
									void 0,
								))
							);
						return (
							(this.b = this.b || new Date()),
							this.a.push(A),
							this.f.request(R, O)
						);
					}
					h() {
						return (
							this.b !== void 0 &&
							new Date().getTime() - this.b.getTime() > this.d
						);
					}
					i() {
						(this.a = []), (this.b = void 0);
					}
				}
				e.$7xc = M;
			},
		),
		define(
			de[2940],
			he([1, 0, 6, 3, 9, 10, 62, 21, 966]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l9c = e.$k9c = e.$j9c = e.$i9c = void 0);
				class r {
					constructor(n) {
						this.a = n;
					}
					listen(n, g) {
						switch (g) {
							case "onDidChangeAccount":
								return this.a.onDidChangeAccount;
							case "onTokenFailed":
								return this.a.onTokenFailed;
						}
						throw new Error(
							`[UserDataSyncAccountServiceChannel] Event not found: ${g}`,
						);
					}
					call(n, g, p) {
						switch (g) {
							case "_getInitialData":
								return Promise.resolve(this.a.account);
							case "updateAccount":
								return this.a.updateAccount(p);
						}
						throw new Error("Invalid call");
					}
				}
				e.$i9c = r;
				class u extends i.$1c {
					get account() {
						return this.a;
					}
					get onTokenFailed() {
						return this.c.listen("onTokenFailed");
					}
					constructor(n) {
						super(),
							(this.c = n),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeAccount = this.b.event),
							this.c.call("_getInitialData").then((g) => {
								(this.a = g),
									this.D(
										this.c.listen("onDidChangeAccount")((p) => {
											(this.a = p), this.b.fire(p);
										}),
									);
							});
					}
					updateAccount(n) {
						return this.c.call("updateAccount", n);
					}
				}
				e.$j9c = u;
				class a {
					constructor(n) {
						this.a = n;
					}
					listen(n, g) {
						switch (g) {
							case "onDidChangeUserDataSyncStore":
								return this.a.onDidChangeUserDataSyncStore;
						}
						throw new Error(
							`[UserDataSyncStoreManagementServiceChannel] Event not found: ${g}`,
						);
					}
					call(n, g, p) {
						switch (g) {
							case "switch":
								return this.a.switch(p[0]);
							case "getPreviousUserDataSyncStore":
								return this.a.getPreviousUserDataSyncStore();
						}
						throw new Error("Invalid call");
					}
				}
				e.$k9c = a;
				let h = class extends m.$3xc {
					constructor(n, g, p, o) {
						super(g, p, o),
							(this.n = n),
							this.D(
								this.n.listen("onDidChangeUserDataSyncStore")(() => this.j()),
							);
					}
					async switch(n) {
						return this.n.call("switch", [n]);
					}
					async getPreviousUserDataSyncStore() {
						const n = await this.n.call("getPreviousUserDataSyncStore");
						return this.q(n);
					}
					q(n) {
						return {
							url: w.URI.revive(n.url),
							type: n.type,
							defaultUrl: w.URI.revive(n.defaultUrl),
							insidersUrl: w.URI.revive(n.insidersUrl),
							stableUrl: w.URI.revive(n.stableUrl),
							canSwitch: n.canSwitch,
							authenticationProviders: n.authenticationProviders,
						};
					}
				};
				(e.$l9c = h),
					(e.$l9c = h = Ne([j(1, C.$Bk), j(2, E.$gj), j(3, d.$lq)], h));
			},
		),
		