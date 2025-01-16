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
		