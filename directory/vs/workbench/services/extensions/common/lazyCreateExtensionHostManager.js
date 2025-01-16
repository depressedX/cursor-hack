define(
			de[3380],
			he([1, 0, 15, 6, 3, 5, 34, 211, 1822, 53]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X4c = void 0);
				let u = class extends w.$1c {
					get pid() {
						return this.f ? this.f.pid : null;
					}
					get kind() {
						return this.b.runningLocation.kind;
					}
					get startup() {
						return this.b.startup;
					}
					get friendyName() {
						return (0, m.$S4c)(this.kind, this.pid);
					}
					constructor(h, c, n, g) {
						super(),
							(this.h = c),
							(this.j = n),
							(this.m = g),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeResponsiveState = this.a.event),
							(this.b = h),
							(this.onDidExit = h.onExit),
							(this.c = new t.$Lh()),
							(this.f = null),
							(this.g = null);
					}
					n(h) {
						return (
							this.m.info(
								`Creating lazy extension host (${this.friendyName}). Reason: ${h}`,
							),
							(this.f = this.D(
								this.j.createInstance(m.$R4c, this.b, [], this.h),
							)),
							this.D(this.f.onDidChangeResponsiveState((c) => this.a.fire(c))),
							this.f
						);
					}
					async q(h) {
						if (this.f) return this.f;
						const c = this.n(h);
						return (
							await c.start(
								this.g.versionId,
								this.g.allExtensions,
								this.g.myExtensions,
							),
							c
						);
					}
					async ready() {
						await this.c.wait(), this.f && (await this.f.ready());
					}
					async disconnect() {
						await this.f?.disconnect();
					}
					representsRunningLocation(h) {
						return this.b.runningLocation.equals(h);
					}
					async deltaExtensions(h) {
						if ((await this.c.wait(), this.f)) return this.f.deltaExtensions(h);
						if ((this.g.delta(h), h.myToAdd.length > 0)) {
							await this.n(
								`contains ${h.myToAdd.length} new extension(s) (installed or enabled): ${h.myToAdd.map((n) => n.value)}`,
							).start(
								this.g.versionId,
								this.g.allExtensions,
								this.g.myExtensions,
							);
							return;
						}
					}
					containsExtension(h) {
						return this.b.extensions?.containsExtension(h) ?? !1;
					}
					async activate(h, c) {
						return await this.c.wait(), this.f ? this.f.activate(h, c) : !1;
					}
					async activateByEvent(h, c) {
						if (c === r.ActivationKind.Immediate)
							return this.f ? this.f.activateByEvent(h, c) : void 0;
						if ((await this.c.wait(), this.f))
							return this.f.activateByEvent(h, c);
					}
					activationEventIsDone(h) {
						return this.c.isOpen()
							? this.f
								? this.f.activationEventIsDone(h)
								: !0
							: !1;
					}
					async getInspectPort(h) {
						return await this.c.wait(), this.f?.getInspectPort(h);
					}
					async resolveAuthority(h, c) {
						return (
							await this.c.wait(),
							this.f
								? this.f.resolveAuthority(h, c)
								: {
										type: "error",
										error: {
											message: "Cannot resolve authority",
											code: d.RemoteAuthorityResolverErrorCode.Unknown,
											detail: void 0,
										},
									}
						);
					}
					async getCanonicalURI(h, c) {
						if ((await this.c.wait(), this.f))
							return this.f.getCanonicalURI(h, c);
						throw new Error("Cannot resolve canonical URI");
					}
					async start(h, c, n) {
						if (n.length > 0) {
							const p = this.n(
								`contains ${n.length} extension(s): ${n.map((o) => o.value)}.`,
							).start(h, c, n);
							return this.c.open(), p;
						}
						(this.g = new r.$s2(h, c, n)), this.c.open();
					}
					async extensionTestsExecute() {
						return (
							await this.c.wait(),
							(await this.q("execute tests.")).extensionTestsExecute()
						);
					}
					async setRemoteEnvironment(h) {
						if ((await this.c.wait(), this.f))
							return this.f.setRemoteEnvironment(h);
					}
				};
				(e.$X4c = u), (e.$X4c = u = Ne([j(2, E.$Li), j(3, C.$ik)], u));
			},
		),
		