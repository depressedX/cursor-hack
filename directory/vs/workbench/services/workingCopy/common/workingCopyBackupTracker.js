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
		