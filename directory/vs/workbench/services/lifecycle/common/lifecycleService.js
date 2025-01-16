define(
			de[3455],
			he([1, 0, 6, 15, 3, 52, 34, 240, 21]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sEb = void 0);
				let u = class extends w.$1c {
					static {
						r = this;
					}
					static {
						this.a = "lifecyle.lastShutdownReason";
					}
					get startupKind() {
						return this.j;
					}
					get phase() {
						return this.m;
					}
					constructor(h, c) {
						super(),
							(this.r = h),
							(this.s = c),
							(this.b = this.D(new t.$re())),
							(this.onBeforeShutdown = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onWillShutdown = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidShutdown = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onBeforeShutdownError = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onShutdownVeto = this.h.event),
							(this.m = E.LifecyclePhase.Starting),
							(this.n = new Map()),
							(this.j = this.t()),
							this.D(
								this.s.onWillSaveState((n) => {
									n.reason === m.WillSaveStateReason.SHUTDOWN &&
										this.s.store(
											r.a,
											this.q,
											m.StorageScope.WORKSPACE,
											m.StorageTarget.MACHINE,
										);
								}),
							);
					}
					t() {
						const h = this.u() ?? E.StartupKind.NewWindow;
						return (
							this.r.trace(`[lifecycle] starting up (startup kind: ${h})`), h
						);
					}
					u() {
						const h = this.s.getNumber(r.a, m.StorageScope.WORKSPACE);
						this.s.remove(r.a, m.StorageScope.WORKSPACE);
						let c;
						switch (h) {
							case E.ShutdownReason.RELOAD:
								c = E.StartupKind.ReloadedWindow;
								break;
							case E.ShutdownReason.LOAD:
								c = E.StartupKind.ReopenedWindow;
								break;
						}
						return c;
					}
					set phase(h) {
						if (h < this.phase)
							throw new Error("Lifecycle cannot go backwards");
						if (this.m === h) return;
						this.r.trace(`lifecycle: phase changed (value: ${h})`),
							(this.m = h),
							(0, d.mark)(`code/LifecyclePhase/${(0, E.$p6)(h)}`);
						const c = this.n.get(this.m);
						c && (c.open(), this.n.delete(this.m));
					}
					async when(h) {
						if (h <= this.m) return;
						let c = this.n.get(h);
						c || ((c = new i.$Lh()), this.n.set(h, c)), await c.wait();
					}
				};
				(e.$sEb = u), (e.$sEb = u = r = Ne([j(0, C.$ik), j(1, m.$lq)], u));
			},
		),
		