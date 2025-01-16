define(
			de[3910],
			he([
				1, 0, 4, 3, 6, 1052, 59, 15, 22, 52, 9, 73, 34, 19, 336, 68, 33, 335,
				1911, 40, 18, 700, 170, 403, 227, 12, 29, 848, 84,
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
					(e.$Jpc = void 0);
				let k = class extends f.$Ipc {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(N, O, U),
							(this.I = D),
							(this.J = M),
							(this.L = A),
							(this.N = R),
							(this.O = B),
							(this.P = z),
							(this.Q = F),
							(this.R = x),
							(this.S = H),
							(this.U = q),
							(this.X = V),
							(this.Y = G),
							(this.Z = K),
							(this.r = this.D(new w.$re())),
							(this.onDidResolve = this.r.event),
							(this.s = this.D(new w.$re())),
							(this.onDidChangeDirty = this.s.event),
							(this.t = this.D(new w.$re())),
							(this.onDidChangeReadonly = this.t.event),
							(this.u = this.D(new w.$re())),
							(this.onDidChangeOrphaned = this.u.event),
							(this.w = this.D(new w.$re())),
							(this.onDidSaveError = this.w.event),
							(this.y = this.D(new w.$re())),
							(this.onDidSave = this.y.event),
							(this.z = this.D(new w.$re())),
							(this.onDidRevert = this.z.event),
							(this.C = this.D(new w.$re())),
							(this.onDidRemove = this.C.event),
							(this.F = new C.$Gc()),
							(this.G = new C.$Gc()),
							(this.H = this.D(new d.$Vh())),
							(this.hb = new Map()),
							this.$();
					}
					$() {
						this.D(this.f.onDidFilesChange((D) => this.eb(D))),
							this.D(
								this.f.onDidChangeFileSystemProviderCapabilities((D) =>
									this.cb(D),
								),
							),
							this.D(
								this.f.onDidChangeFileSystemProviderRegistrations((D) =>
									this.db(D),
								),
							),
							this.D(
								this.O.onWillRunWorkingCopyFileOperation((D) => this.ib(D)),
							),
							this.D(
								this.O.onDidFailWorkingCopyFileOperation((D) => this.jb(D)),
							),
							this.D(
								this.O.onDidRunWorkingCopyFileOperation((D) => this.kb(D)),
							),
							S.$r
								? this.D(
										this.L.onBeforeShutdown((D) =>
											D.veto(this.ab(), "veto.fileWorkingCopyManager"),
										),
									)
								: this.D(
										this.L.onWillShutdown((D) =>
											D.join(this.bb(), {
												id: "join.fileWorkingCopyManager",
												label: (0, t.localize)(13148, null),
											}),
										),
									);
					}
					ab() {
						return !!this.workingCopies.some((D) =>
							D.hasState(E.StoredFileWorkingCopyState.PENDING_SAVE),
						);
					}
					async bb() {
						let D;
						for (
							;
							(D = this.workingCopies.filter((M) =>
								M.hasState(E.StoredFileWorkingCopyState.PENDING_SAVE),
							)).length > 0;
						)
							await d.Promises.settled(
								D.map((M) =>
									M.joinState(E.StoredFileWorkingCopyState.PENDING_SAVE),
								),
							);
					}
					cb(D) {
						this.fb(D.scheme);
					}
					db(D) {
						D.added && this.fb(D.scheme);
					}
					eb(D) {
						this.fb(D);
					}
					fb(D) {
						for (const M of this.workingCopies) {
							if (M.isDirty()) continue;
							let N = !1;
							typeof D == "string"
								? (N = D === M.resource.scheme)
								: (N = D.contains(
										M.resource,
										m.FileChangeType.UPDATED,
										m.FileChangeType.ADDED,
									)),
								N && this.gb(M);
						}
					}
					gb(D) {
						this.H.queueSize(D.resource) <= 1 &&
							this.H.queueFor(D.resource, async () => {
								try {
									await this.lb(D);
								} catch (N) {
									this.g.error(N);
								}
							});
					}
					ib(D) {
						(D.operation === m.FileOperation.MOVE ||
							D.operation === m.FileOperation.COPY) &&
							D.waitUntil(
								(async () => {
									const M = [];
									for (const { source: N, target: A } of D.files)
										if (N) {
											if (this.P.extUri.isEqual(N, A)) continue;
											const R = [];
											for (const O of this.workingCopies)
												this.P.extUri.isEqualOrParent(O.resource, N) &&
													R.push(O);
											for (const O of R) {
												const B = O.resource;
												let U;
												this.P.extUri.isEqual(B, N)
													? (U = A)
													: (U = (0, c.$nh)(
															A,
															B.path.substr(N.path.length + 1),
														)),
													M.push({
														source: B,
														target: U,
														snapshot: O.isDirty()
															? await O.model?.snapshot(
																	T.SnapshotContext.Save,
																	p.CancellationToken.None,
																)
															: void 0,
													});
											}
										}
									this.hb.set(D.correlationId, M);
								})(),
							);
					}
					jb(D) {
						if (
							D.operation === m.FileOperation.MOVE ||
							D.operation === m.FileOperation.COPY
						) {
							const M = this.hb.get(D.correlationId);
							if (M) {
								this.hb.delete(D.correlationId);
								for (const N of M)
									N.snapshot && this.get(N.source)?.markModified();
							}
						}
					}
					kb(D) {
						switch (D.operation) {
							case m.FileOperation.CREATE:
								D.waitUntil(
									(async () => {
										for (const { target: M } of D.files) {
											const N = this.get(M);
											N && !N.isDisposed() && (await N.revert());
										}
									})(),
								);
								break;
							case m.FileOperation.MOVE:
							case m.FileOperation.COPY:
								D.waitUntil(
									(async () => {
										const M = this.hb.get(D.correlationId);
										M &&
											(this.hb.delete(D.correlationId),
											await d.Promises.settled(
												M.map(async (N) => {
													const A = this.P.asCanonicalUri(N.target);
													await this.resolve(A, {
														reload: { async: !1 },
														contents: N.snapshot,
													});
												}),
											));
									})(),
								);
								break;
						}
					}
					async lb(D) {
						await this.nb(D.resource),
							!(D.isDirty() || D.isDisposed() || !this.j(D.resource)) &&
								(await this.mb(D, { reload: { async: !1 } }));
					}
					async resolve(D, M) {
						const N = this.nb(D);
						return N && (await N), this.mb(D, M);
					}
					async mb(D, M) {
						let N, A;
						u.URI.isUri(D)
							? ((A = D), (N = this.get(A)))
							: ((A = D.resource), (N = D));
						let R,
							O = !1;
						const B = {
							contents: M?.contents,
							forceReadFromFile: M?.reload?.force,
							limits: M?.limits,
						};
						N
							? M?.contents
								? (R = N.resolve(B))
								: M?.reload
									? M.reload.async
										? ((R = Promise.resolve()),
											(async () => {
												try {
													await N.resolve(B);
												} catch (U) {
													(0, I.$4)(U);
												}
											})())
										: (R = N.resolve(B))
									: (R = Promise.resolve())
							: ((O = !0),
								(N = new E.$gZ(
									this.I,
									A,
									this.N.getUriBasenameLabel(A),
									this.J,
									async (U) => {
										await this.resolve(A, { ...U, reload: { async: !1 } });
									},
									this.f,
									this.g,
									this.O,
									this.Q,
									this.h,
									this.R,
									this.S,
									this.U,
									this.X,
									this.Y,
									this.Z,
								)),
								(R = N.resolve(B)),
								this.pb(N)),
							this.G.set(A, R),
							this.m(A, N),
							O && N.isDirty() && this.s.fire(N);
						try {
							await R;
						} catch (U) {
							throw (O && N.dispose(), U);
						} finally {
							this.G.delete(A);
						}
						return O && N.isDirty() && this.s.fire(N), N;
					}
					nb(D) {
						if (this.G.get(D)) return this.ob(D);
					}
					async ob(D) {
						let M;
						for (; this.G.has(D); ) {
							const N = this.G.get(D);
							if (N === M) return;
							M = N;
							try {
								await N;
							} catch {}
						}
					}
					pb(D) {
						const M = new i.$Zc();
						M.add(D.onDidResolve(() => this.r.fire(D))),
							M.add(D.onDidChangeDirty(() => this.s.fire(D))),
							M.add(D.onDidChangeReadonly(() => this.t.fire(D))),
							M.add(D.onDidChangeOrphaned(() => this.u.fire(D))),
							M.add(D.onDidSaveError(() => this.w.fire(D))),
							M.add(D.onDidSave((N) => this.y.fire({ workingCopy: D, ...N }))),
							M.add(D.onDidRevert(() => this.z.fire(D))),
							this.F.set(D.resource, M);
					}
					n(D) {
						const M = super.n(D),
							N = this.F.get(D);
						return (
							N && ((0, i.$Vc)(N), this.F.delete(D)), M && this.C.fire(D), M
						);
					}
					canDispose(D) {
						return D.isDisposed() || (!this.G.has(D.resource) && !D.isDirty())
							? !0
							: this.rb(D);
					}
					async rb(D) {
						const M = this.nb(D.resource);
						return M
							? (await M, this.canDispose(D))
							: D.isDirty()
								? (await w.Event.toPromise(D.onDidChangeDirty),
									this.canDispose(D))
								: !0;
					}
					dispose() {
						super.dispose(),
							this.G.clear(),
							(0, i.$Vc)(this.F.values()),
							this.F.clear();
					}
				};
				(e.$Jpc = k),
					(e.$Jpc = k =
						Ne(
							[
								j(2, m.$ll),
								j(3, r.$n6),
								j(4, a.$3N),
								j(5, h.$ik),
								j(6, n.$iZ),
								j(7, o.$WO),
								j(8, g.$Vl),
								j(9, y.$_Y),
								j(10, v.$gY),
								j(11, b.$4N),
								j(12, $.$bZ),
								j(13, s.$IY),
								j(14, l.$dZ),
								j(15, P.$8N),
							],
							k,
						));
			},
		),
		