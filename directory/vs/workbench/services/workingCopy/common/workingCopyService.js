define(
			de[227],
			he([1, 0, 5, 20, 6, 9, 3, 59]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hY = e.$gY = void 0),
					(e.$gY = (0, t.$Mi)("workingCopyService"));
				class m extends C.$1c {
					constructor() {
						super(...arguments),
							(this.a = this.D(new w.$re())),
							(this.onDidRegister = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidUnregister = this.b.event),
							(this.f = this.D(new w.$re())),
							(this.onDidChangeDirty = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeContent = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onDidSave = this.h.event),
							(this.j = new Set()),
							(this.m = new d.$Gc()),
							(this.n = this.D(new C.$0c()));
					}
					get workingCopies() {
						return Array.from(this.j.values());
					}
					registerWorkingCopy(u) {
						let a = this.m.get(u.resource);
						if (a?.has(u.typeId))
							throw new Error(
								`Cannot register more than one working copy with the same resource ${u.resource.toString()} and type ${u.typeId}.`,
							);
						this.j.add(u),
							a || ((a = new Map()), this.m.set(u.resource, a)),
							a.set(u.typeId, u);
						const h = new C.$Zc();
						return (
							h.add(u.onDidChangeContent(() => this.g.fire(u))),
							h.add(u.onDidChangeDirty(() => this.f.fire(u))),
							h.add(u.onDidSave((c) => this.h.fire({ workingCopy: u, ...c }))),
							this.n.set(u, h),
							this.a.fire(u),
							u.isDirty() && this.f.fire(u),
							(0, C.$Yc)(() => {
								this.q(u), this.b.fire(u);
							})
						);
					}
					q(u) {
						this.j.delete(u);
						const a = this.m.get(u.resource);
						a?.delete(u.typeId) && a.size === 0 && this.m.delete(u.resource),
							u.isDirty() && this.f.fire(u),
							this.n.deleteAndDispose(u);
					}
					has(u) {
						return E.URI.isUri(u)
							? this.m.has(u)
							: (this.m.get(u.resource)?.has(u.typeId) ?? !1);
					}
					get(u) {
						return this.m.get(u.resource)?.get(u.typeId);
					}
					getAll(u) {
						const a = this.m.get(u);
						if (a) return Array.from(a.values());
					}
					get hasDirty() {
						for (const u of this.j) if (u.isDirty()) return !0;
						return !1;
					}
					get dirtyCount() {
						let u = 0;
						for (const a of this.j) a.isDirty() && u++;
						return u;
					}
					get dirtyWorkingCopies() {
						return this.workingCopies.filter((u) => u.isDirty());
					}
					get modifiedCount() {
						let u = 0;
						for (const a of this.j) a.isModified() && u++;
						return u;
					}
					get modifiedWorkingCopies() {
						return this.workingCopies.filter((u) => u.isModified());
					}
					isDirty(u, a) {
						const h = this.m.get(u);
						if (h) {
							if (typeof a == "string") return h.get(a)?.isDirty() ?? !1;
							for (const [, c] of h) if (c.isDirty()) return !0;
						}
						return !1;
					}
				}
				(e.$hY = m), (0, i.$lK)(e.$gY, m, i.InstantiationType.Delayed);
			},
		),
		