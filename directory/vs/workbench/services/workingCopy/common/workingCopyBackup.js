define(de[335], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$WO = void 0),
				(e.$WO = (0, t.$Mi)("workingCopyBackupService"));
		}),
		define(
			de[1911],
			he([1, 0, 6, 3, 59, 15, 22, 34, 335]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ipc = void 0);
				let r = class extends i.$1c {
					constructor(a, h, c) {
						super(),
							(this.f = a),
							(this.g = h),
							(this.h = c),
							(this.a = this.D(new t.$re())),
							(this.onDidCreate = this.a.event),
							(this.b = new w.$Gc()),
							(this.c = new w.$Gc());
					}
					j(a) {
						return this.b.has(a);
					}
					m(a, h) {
						this.get(a) !== h &&
							(this.b.set(a, h),
							this.c.get(a)?.dispose(),
							this.c.set(
								a,
								h.onWillDispose(() => this.n(a)),
							),
							this.a.fire(h));
					}
					n(a) {
						const h = this.c.get(a);
						return h && ((0, i.$Vc)(h), this.c.delete(a)), this.b.delete(a);
					}
					get workingCopies() {
						return [...this.b.values()];
					}
					get(a) {
						return this.b.get(a);
					}
					dispose() {
						super.dispose(),
							this.b.clear(),
							(0, i.$Vc)(this.c.values()),
							this.c.clear();
					}
					async destroy() {
						try {
							await E.Promises.settled(
								this.workingCopies.map(async (a) => {
									a.isDirty() && (await this.q(a));
								}),
							);
						} catch (a) {
							this.g.error(a);
						}
						(0, i.$Vc)(this.b.values()), this.dispose();
					}
					async q(a) {
						let h = !1;
						try {
							h = await a.save();
						} catch {}
						if (!h || a.isDirty()) {
							const c = await this.h.resolve(a);
							c &&
								(await this.f.writeFile(a.resource, c.value, { unlock: !0 }));
						}
					}
				};
				(e.$Ipc = r),
					(e.$Ipc = r = Ne([j(0, C.$ll), j(1, d.$ik), j(2, m.$WO)], r));
			},
		),
		define(
			de[1912],
			he([1, 0, 19, 9, 24, 82, 15, 22, 59, 408, 76, 3, 34, 23, 136, 28, 334]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$x5c = e.$w5c = e.$v5c = void 0),
					(e.$y5c = y);
				class f {
					static async create(I, T) {
						const P = new f(I, T);
						return await P.d(), P;
					}
					constructor(I, T) {
						(this.b = I), (this.c = T), (this.a = new m.$Gc());
					}
					async d() {
						try {
							const I = await this.c.resolve(this.b);
							I.children &&
								(await C.Promises.settled(
									I.children
										.filter((T) => T.isDirectory)
										.map(async (T) => {
											const P = await this.c.resolve(T.resource);
											if (P.children)
												for (const k of P.children)
													k.isDirectory || this.add(k.resource);
										}),
								));
						} catch {}
					}
					add(I, T = 0, P) {
						this.a.set(I, { versionId: T, meta: (0, E.$vo)(P) });
					}
					update(I, T) {
						const P = this.a.get(I);
						P && (P.meta = (0, E.$vo)(T));
					}
					count() {
						return this.a.size;
					}
					has(I, T, P) {
						const k = this.a.get(I);
						return !(
							!k ||
							(typeof T == "number" && T !== k.versionId) ||
							(P && !(0, E.$zo)(P, k.meta))
						);
					}
					get() {
						return Array.from(this.a.keys());
					}
					remove(I) {
						this.a.delete(I);
					}
					clear() {
						this.a.clear();
					}
				}
				e.$v5c = f;
				let b = class extends a.$1c {
					constructor(I, T, P) {
						super(), (this.b = T), (this.g = P), (this.a = this.D(this.h(I)));
					}
					h(I) {
						return I ? new s(I, this.b, this.g) : new l();
					}
					reinitialize(I) {
						this.a instanceof s &&
							(I ? this.a.initialize(I) : (this.a = new l()));
					}
					hasBackups() {
						return this.a.hasBackups();
					}
					hasBackupSync(I, T, P) {
						return this.a.hasBackupSync(I, T, P);
					}
					backup(I, T, P, k, L) {
						return this.a.backup(I, T, P, k, L);
					}
					discardBackup(I, T) {
						return this.a.discardBackup(I, T);
					}
					discardBackups(I) {
						return this.a.discardBackups(I);
					}
					getBackups() {
						return this.a.getBackups();
					}
					resolve(I) {
						return this.a.resolve(I);
					}
					toBackupResource(I) {
						return this.a.toBackupResource(I);
					}
					joinBackups() {
						return this.a.joinBackups();
					}
				};
				(e.$w5c = b), (e.$w5c = b = Ne([j(1, d.$ll), j(2, h.$ik)], b));
				let s = class extends a.$1c {
					static {
						o = this;
					}
					static {
						this.a = `
`;
					}
					static {
						this.b = 10;
					}
					static {
						this.c = " ";
					}
					static {
						this.f = 1e4;
					}
					constructor(I, T, P) {
						super(),
							(this.m = I),
							(this.n = T),
							(this.q = P),
							(this.g = this.D(new C.$Vh())),
							(this.j = void 0),
							this.initialize(I);
					}
					initialize(I) {
						(this.m = I), (this.h = this.r());
					}
					async r() {
						return (this.j = await f.create(this.m, this.n)), this.j;
					}
					async hasBackups() {
						const I = await this.h;
						return await this.joinBackups(), I.count() > 0;
					}
					hasBackupSync(I, T, P) {
						if (!this.j) return !1;
						const k = this.toBackupResource(I);
						return this.j.has(k, T, P);
					}
					async backup(I, T, P, k, L) {
						const D = await this.h;
						if (L?.isCancellationRequested) return;
						const M = this.toBackupResource(I);
						if (!D.has(M, P, k))
							return this.g.queueFor(M, async () => {
								if (L?.isCancellationRequested || D.has(M, P, k)) return;
								let N = this.s(I, k);
								N.length >= o.f && (N = this.s(I));
								const A = u.$Te.fromString(N);
								let R;
								(0, r.$Fe)(T)
									? (R = (0, u.$_e)(A, T))
									: T
										? (R = (0, u.$$e)(A, T))
										: (R = u.$Te.concat([A, u.$Te.fromString("")])),
									await this.n.writeFile(M, R),
									D.add(M, P, k);
							});
					}
					s(I, T) {
						return `${I.resource.toString()}${o.c}${JSON.stringify({ ...T, typeId: I.typeId })}${o.a}`;
					}
					async discardBackups(I) {
						const T = await this.h,
							P = I?.except;
						if (Array.isArray(P) && P.length > 0) {
							const k = new m.$Gc();
							for (const L of P) k.set(this.toBackupResource(L), !0);
							await C.Promises.settled(
								T.get().map(async (L) => {
									k.has(L) || (await this.t(L));
								}),
							);
						} else await this.u(this.m), T.clear();
					}
					discardBackup(I, T) {
						const P = this.toBackupResource(I);
						return this.t(P, T);
					}
					async t(I, T) {
						const P = await this.h;
						if (!T?.isCancellationRequested)
							return this.g.queueFor(I, async () => {
								T?.isCancellationRequested || (await this.u(I), P.remove(I));
							});
					}
					async u(I) {
						try {
							await this.n.del(I, { recursive: !0 });
						} catch (T) {
							if (
								T.fileOperationResult !== d.FileOperationResult.FILE_NOT_FOUND
							)
								throw T;
						}
					}
					async getBackups() {
						const I = await this.h;
						await this.joinBackups();
						const T = await Promise.all(I.get().map((P) => this.w(P, I)));
						return (0, w.$Lb)(T);
					}
					async w(I, T) {
						let P;
						return (
							await this.g.queueFor(I, async () => {
								if (!T.has(I)) return;
								const k = await this.y(I, o.a, o.f);
								if (!k) return;
								const L = k.indexOf(o.c);
								let D, M;
								L > 0
									? ((D = k.substring(0, L)), (M = k.substr(L + 1)))
									: ((D = k), (M = void 0));
								const { typeId: N, meta: A } = this.z(M);
								T.update(I, A),
									(P = { typeId: N ?? p.$OO, resource: i.URI.parse(D) });
							}),
							P
						);
					}
					async y(I, T, P) {
						const k = (
								await this.n.readFile(I, { length: P })
							).value.toString(),
							L = k.indexOf(T);
						if (L >= 0) return k.substr(0, L);
					}
					async resolve(I) {
						const T = this.toBackupResource(I),
							P = await this.h;
						let k;
						return (
							await this.g.queueFor(T, async () => {
								if (!P.has(T)) return;
								const L = await this.n.readFileStream(T),
									D = await (0, r.$Me)(L.value, 1),
									M = u.$Te.concat(D.buffer),
									N = M.buffer.indexOf(o.b);
								if (N === -1) {
									this.q.trace(
										`Backup: Could not find meta end marker in ${T}. The file is probably corrupt (filesize: ${L.size}).`,
									);
									return;
								}
								const A = M.slice(0, N).toString();
								let R;
								const O = A.indexOf(o.c);
								O !== -1 && (R = this.z(A.substr(O + 1)).meta), P.update(T, R);
								const B = M.slice(N + 1);
								let U;
								D.ended ? (U = (0, u.$8e)(B)) : (U = (0, u.$_e)(B, D.stream)),
									(k = { value: U, meta: R });
							}),
							k
						);
					}
					z(I) {
						let T, P;
						if (I)
							try {
								(P = JSON.parse(I)),
									(T = P?.typeId),
									typeof P?.typeId == "string" &&
										(delete P.typeId, (0, g.$yg)(P) && (P = void 0));
							} catch {}
						return { typeId: T, meta: P };
					}
					toBackupResource(I) {
						return (0, t.$nh)(this.m, I.resource.scheme, y(I));
					}
					joinBackups() {
						return this.g.whenDrained();
					}
				};
				s = o = Ne([j(1, d.$ll), j(2, h.$ik)], s);
				class l extends a.$1c {
					constructor() {
						super(), (this.a = new m.$Gc());
					}
					async hasBackups() {
						return this.a.size > 0;
					}
					hasBackupSync(I, T) {
						const P = this.toBackupResource(I);
						return this.a.has(P);
					}
					async backup(I, T, P, k, L) {
						const D = this.toBackupResource(I);
						this.a.set(D, {
							typeId: I.typeId,
							content:
								T instanceof u.$Te
									? T
									: T
										? (0, r.$Fe)(T)
											? await (0, u.$6e)(T)
											: (0, u.$4e)(T)
										: u.$Te.fromString(""),
							meta: k,
						});
					}
					async resolve(I) {
						const T = this.toBackupResource(I),
							P = this.a.get(T);
						if (P) return { value: (0, u.$8e)(P.content), meta: P.meta };
					}
					async getBackups() {
						return Array.from(this.a.entries()).map(([I, T]) => ({
							typeId: T.typeId,
							resource: I,
						}));
					}
					async discardBackup(I) {
						this.a.delete(this.toBackupResource(I));
					}
					async discardBackups(I) {
						const T = I?.except;
						if (Array.isArray(T) && T.length > 0) {
							const P = new m.$Gc();
							for (const k of T) P.set(this.toBackupResource(k), !0);
							for (const k of await this.getBackups())
								P.has(this.toBackupResource(k)) ||
									(await this.discardBackup(k));
						} else this.a.clear();
					}
					toBackupResource(I) {
						return i.URI.from({ scheme: c.Schemas.inMemory, path: y(I) });
					}
					async joinBackups() {}
				}
				e.$x5c = l;
				function y(S) {
					let I;
					if (S.typeId.length > 0) {
						const T = v(S.typeId);
						S.resource.path
							? (I = (0, t.$nh)(S.resource, T))
							: (I = S.resource.with({ path: T }));
					} else I = S.resource;
					return $(I);
				}
				function $(S) {
					const I =
						S.scheme === c.Schemas.file || S.scheme === c.Schemas.untitled
							? S.fsPath
							: S.toString();
					return v(I);
				}
				function v(S) {
					return (0, n.$Aj)(S).toString(16);
				}
			},
		),
		define(
			de[3854],
			he([1, 0, 3, 334, 52, 33, 15, 44]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z5c = void 0);
				class m extends t.$1c {
					constructor(u, a, h, c, n, g, p, o) {
						super(),
							(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.j = p),
							(this.m = o),
							(this.t = new Map()),
							(this.u = new Map()),
							(this.w = !1),
							(this.Q = new Set()),
							(this.R = this.W()),
							(this.S = !1);
						for (const f of this.b.modifiedWorkingCopies) this.y(f);
						this.n();
					}
					n() {
						this.D(this.b.onDidRegister((u) => this.y(u))),
							this.D(this.b.onDidUnregister((u) => this.z(u))),
							this.D(this.b.onDidChangeDirty((u) => this.C(u))),
							this.D(this.b.onDidChangeContent((u) => this.F(u))),
							this.D(
								this.f.onBeforeShutdown((u) =>
									u.finalVeto(() => this.q(u.reason), "veto.backups"),
								),
							),
							this.D(this.f.onWillShutdown(() => this.r())),
							this.D(this.h.onDidRegisterHandler((u) => this.X(u)));
					}
					r() {
						this.O(), this.P();
					}
					static {
						this.s = { default: 1e3, delayed: 2e3 };
					}
					y(u) {
						if (this.w) {
							this.c.warn(
								"[backup tracker] suspended, ignoring register event",
								u.resource.toString(),
								u.typeId,
							);
							return;
						}
						u.isModified() && this.G(u);
					}
					z(u) {
						if ((this.t.delete(u), this.w)) {
							this.c.warn(
								"[backup tracker] suspended, ignoring unregister event",
								u.resource.toString(),
								u.typeId,
							);
							return;
						}
						this.J(u);
					}
					C(u) {
						if (this.w) {
							this.c.warn(
								"[backup tracker] suspended, ignoring dirty change event",
								u.resource.toString(),
								u.typeId,
							);
							return;
						}
						u.isDirty() ? this.G(u) : this.J(u);
					}
					F(u) {
						const a = this.I(u);
						if ((this.t.set(u, a + 1), this.w)) {
							this.c.warn(
								"[backup tracker] suspended, ignoring content change event",
								u.resource.toString(),
								u.typeId,
							);
							return;
						}
						u.isModified() && this.G(u);
					}
					G(u) {
						this.M(u),
							this.c.trace(
								"[backup tracker] scheduling backup",
								u.resource.toString(),
								u.typeId,
							);
						const a = { resource: u.resource, typeId: u.typeId },
							h = new E.$Ce(),
							c = setTimeout(async () => {
								if (!h.token.isCancellationRequested) {
									if (u.isModified()) {
										this.c.trace(
											"[backup tracker] creating backup",
											u.resource.toString(),
											u.typeId,
										);
										try {
											const n = await u.backup(h.token);
											if (h.token.isCancellationRequested) return;
											u.isModified() &&
												(this.c.trace(
													"[backup tracker] storing backup",
													u.resource.toString(),
													u.typeId,
												),
												await this.a.backup(
													u,
													n.content,
													this.I(u),
													n.meta,
													h.token,
												));
										} catch (n) {
											this.c.error(n);
										}
									}
									h.token.isCancellationRequested || this.N(a);
								}
							}, this.H(u));
						this.u.set(a, {
							cancel: () => {
								this.c.trace(
									"[backup tracker] clearing pending backup creation",
									u.resource.toString(),
									u.typeId,
								),
									h.cancel();
							},
							disposable: (0, t.$Yc)(() => {
								h.dispose(), clearTimeout(c);
							}),
						});
					}
					H(u) {
						if (typeof u.backupDelay == "number") return u.backupDelay;
						let a;
						return (
							u.capabilities & i.WorkingCopyCapabilities.Untitled
								? (a = "default")
								: (a = this.g.hasShortAutoSaveDelay(u.resource)
										? "delayed"
										: "default"),
							m.s[a]
						);
					}
					I(u) {
						return this.t.get(u) || 0;
					}
					J(u) {
						this.M(u);
						const a = { resource: u.resource, typeId: u.typeId },
							h = new E.$Ce();
						this.L(a, h),
							this.u.set(a, {
								cancel: () => {
									this.c.trace(
										"[backup tracker] clearing pending backup discard",
										u.resource.toString(),
										u.typeId,
									),
										h.cancel();
								},
								disposable: h,
							});
					}
					async L(u, a) {
						this.c.trace(
							"[backup tracker] discarding backup",
							u.resource.toString(),
							u.typeId,
						);
						try {
							await this.a.discardBackup(u, a.token);
						} catch (h) {
							this.c.error(h);
						}
						a.token.isCancellationRequested || this.N(u);
					}
					M(u) {
						let a;
						for (const [h] of this.u)
							if (
								h.resource.toString() === u.resource.toString() &&
								h.typeId === u.typeId
							) {
								a = h;
								break;
							}
						a && this.N(a, { cancel: !0 });
					}
					N(u, a) {
						const h = this.u.get(u);
						h &&
							(a?.cancel && h.cancel(),
							h.disposable.dispose(),
							this.u.delete(u));
					}
					O() {
						for (const [, u] of this.u) u.cancel(), u.disposable.dispose();
						this.u.clear();
					}
					P() {
						return (this.w = !0), { resume: () => (this.w = !1) };
					}
					get U() {
						return this.S;
					}
					async W() {
						await this.f.when(w.LifecyclePhase.Restored);
						for (const u of await this.a.getBackups()) this.Q.add(u);
						this.S = !0;
					}
					async X(u) {
						await this.R;
						const a = new Set(),
							h = new Set(),
							c = new Set();
						for (const n of this.Q) {
							if (!(await u.handles(n))) continue;
							let p = !1;
							for (const { editor: o } of this.j.getEditors(
								d.EditorsOrder.MOST_RECENTLY_ACTIVE,
							))
								u.isOpen(n, o) && (a.add(o), (p = !0));
							p || h.add(await u.createEditor(n)), c.add(n);
						}
						if (h.size > 0) {
							await this.m.activeGroup.openEditors(
								[...h].map((n) => ({
									editor: n,
									options: { pinned: !0, preserveFocus: !0, inactive: !0 },
								})),
							);
							for (const n of h) a.add(n);
						}
						await C.Promises.settled(
							[...a].map(async (n) => {
								if (!this.j.isVisible(n)) return n.resolve();
							}),
						);
						for (const n of c) this.Q.delete(n);
					}
				}
				e.$z5c = m;
			},
		),
		define(
			de[403],
			he([1, 0, 6, 5, 20, 44, 3, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cZ = e.$bZ = void 0),
					(e.$bZ = (0, i.$Mi)("workingCopyEditorService"));
				let m = class extends C.$1c {
					constructor(u) {
						super(),
							(this.c = u),
							(this.a = this.D(new t.$re())),
							(this.onDidRegisterHandler = this.a.event),
							(this.b = new Set());
					}
					registerHandler(u) {
						return (
							this.b.add(u), this.a.fire(u), (0, C.$Yc)(() => this.b.delete(u))
						);
					}
					findEditor(u) {
						for (const a of this.c.getEditors(
							E.EditorsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (this.f(u, a.editor)) return a;
					}
					f(u, a) {
						for (const h of this.b) if (h.isOpen(u, a)) return !0;
						return !1;
					}
				};
				(e.$cZ = m),
					(e.$cZ = m = Ne([j(0, d.$IY)], m)),
					(0, w.$lK)(e.$bZ, m, w.InstantiationType.Delayed);
			},
		),
		define(
			de[3855],
			he([1, 0, 85, 52, 3, 24, 87, 18, 15, 65, 170, 220, 23, 628, 403, 44]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Mc = void 0);
				let p = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.textFileEditorTracker";
					}
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.n = this.D(new m.$1h((S) => this.r(S), this.q()))),
							this.m();
					}
					m() {
						this.D(
							this.b.files.onDidChangeDirty((f) => this.n.work(f.resource)),
						),
							this.D(
								this.b.files.onDidSaveError((f) => this.n.work(f.resource)),
							),
							this.D(
								this.b.untitled.onDidChangeDirty((f) =>
									this.n.work(f.resource),
								),
							),
							this.D(this.f.onDidChangeFocus((f) => (f ? this.t() : void 0))),
							this.D(this.c.onDidShutdown(() => this.dispose()));
					}
					q() {
						return 800;
					}
					r(f) {
						this.s(
							(0, E.$Qb)(
								f.filter((b) => {
									if (!this.b.isDirty(b)) return !1;
									const s = this.b.files.get(b);
									if (
										s?.hasState(t.TextFileEditorModelState.PENDING_SAVE) ||
										(b.scheme !== h.Schemas.untitled &&
											!s?.hasState(t.TextFileEditorModelState.ERROR) &&
											this.h.hasShortAutoSaveDelay(b)) ||
										this.a.isOpened({
											resource: b,
											typeId:
												b.scheme === h.Schemas.untitled ? c.$T1b.ID : a.$QUb,
											editorId: g.$b1.id,
										})
									)
										return !1;
									const l = s ?? this.b.untitled.get(b);
									return !(l && this.j.findEditor(l));
								}),
								(b) => b.toString(),
							),
						);
					}
					s(f) {
						f.length &&
							this.a.openEditors(
								f.map((b) => ({
									resource: b,
									options: { inactive: !0, pinned: !0, preserveFocus: !0 },
								})),
							);
					}
					t() {
						(0, E.$Qb)(
							(0, E.$Lb)(
								this.g.listCodeEditors().map((f) => {
									const b = f.getModel()?.uri;
									if (!b) return;
									const s = this.b.files.get(b);
									if (!(!s || s.isDirty() || !s.isResolved())) return s;
								}),
							),
							(f) => f.resource.toString(),
						).forEach((f) =>
							this.b.files.resolve(f.resource, { reload: { async: !0 } }),
						);
					}
				};
				(e.$1Mc = p),
					(e.$1Mc = p =
						Ne(
							[
								j(0, d.$IY),
								j(1, t.$kZ),
								j(2, i.$n6),
								j(3, C.$asb),
								j(4, r.$dtb),
								j(5, u.$_Y),
								j(6, n.$bZ),
							],
							p,
						));
			},
		),
		