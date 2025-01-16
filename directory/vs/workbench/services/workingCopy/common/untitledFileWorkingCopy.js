define(
			de[1925],
			he([1, 0, 6, 334, 848, 3, 227, 33, 15, 34, 335, 408]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kpc = void 0);
				let h = class extends E.$1c {
					get model() {
						return this.a;
					}
					constructor(n, g, p, o, f, b, s, l, y, $, v) {
						super(),
							(this.typeId = n),
							(this.resource = g),
							(this.name = p),
							(this.hasAssociatedFilePath = o),
							(this.j = f),
							(this.m = b),
							(this.n = s),
							(this.q = l),
							(this.r = $),
							(this.s = v),
							(this.capabilities = this.j
								? i.WorkingCopyCapabilities.Untitled |
									i.WorkingCopyCapabilities.Scratchpad
								: i.WorkingCopyCapabilities.Untitled),
							(this.a = void 0),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeContent = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeDirty = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidSave = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onDidRevert = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onWillDispose = this.h.event),
							(this.t =
								this.hasAssociatedFilePath ||
								!!(this.m && this.m.markModified !== !1)),
							this.D(y.registerWorkingCopy(this));
					}
					isDirty() {
						return this.t && !this.j;
					}
					isModified() {
						return this.t;
					}
					u(n) {
						this.t !== n && ((this.t = n), this.j || this.c.fire());
					}
					async resolve() {
						if ((this.C("resolve()"), this.isResolved())) {
							this.C("resolve() - exit (already resolved)");
							return;
						}
						let n;
						const g = await this.r.resolve(this);
						g
							? (this.C("resolve() - with backup"), (n = g.value))
							: this.m?.value
								? (this.C("resolve() - with initial contents"),
									(n = this.m.value))
								: (this.C("resolve() - empty"), (n = (0, a.$Oe)())),
							await this.w(n),
							this.u(
								this.hasAssociatedFilePath ||
									!!g ||
									!!(this.m && this.m.markModified !== !1),
							),
							(g || this.m) && this.b.fire();
					}
					async w(n) {
						this.C("doCreateModel()"),
							(this.a = this.D(
								await this.n.createModel(
									this.resource,
									n,
									d.CancellationToken.None,
								),
							)),
							this.y(this.a);
					}
					y(n) {
						this.D(n.onDidChangeContent((g) => this.z(g))),
							this.D(n.onWillDispose(() => this.dispose()));
					}
					z(n) {
						!this.hasAssociatedFilePath && n.isInitial
							? this.u(!1)
							: this.u(!0),
							this.b.fire();
					}
					isResolved() {
						return !!this.model;
					}
					get backupDelay() {
						return this.model?.configuration?.backupDelay;
					}
					async backup(n) {
						let g;
						return (
							this.isResolved()
								? (g = await (0, m.$Ah)(
										this.model.snapshot(w.SnapshotContext.Backup, n),
										n,
									))
								: this.m && (g = this.m.value),
							{ content: g }
						);
					}
					async save(n) {
						this.C("save()");
						const g = await this.q(this, n);
						return (
							g && this.f.fire({ reason: n?.reason, source: n?.source }), g
						);
					}
					async revert() {
						this.C("revert()"), this.u(!1), this.g.fire(), this.dispose();
					}
					dispose() {
						this.C("dispose()"), this.h.fire(), super.dispose();
					}
					C(n) {
						this.s.trace(
							`[untitled file working copy] ${n}`,
							this.resource.toString(),
							this.typeId,
						);
					}
				};
				(e.$Kpc = h),
					(e.$Kpc = h = Ne([j(8, C.$gY), j(9, u.$WO), j(10, r.$ik)], h));
			},
		),
		