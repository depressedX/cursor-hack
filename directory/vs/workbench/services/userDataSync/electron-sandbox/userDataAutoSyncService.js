define(de[3797], he([1, 0, 150, 230, 6, 20]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			let C = class {
				get onError() {
					return w.Event.map(this.a.listen("onError"), (m) =>
						t.$YRb.toUserDataSyncError(m),
					);
				}
				constructor(m) {
					this.a = m.getChannel("userDataAutoSync");
				}
				triggerSync(m, r, u) {
					return this.a.call("triggerSync", [m, r, u]);
				}
				turnOn() {
					return this.a.call("turnOn");
				}
				turnOff(m) {
					return this.a.call("turnOff", [m]);
				}
			};
			(C = Ne([j(0, i.$Vbd)], C)),
				(0, E.$lK)(t.$7Rb, C, E.InstantiationType.Delayed);
		}),
		define(
			de[3798],
			he([1, 0, 150, 230, 2939, 965, 2940, 1212]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$Wbd)(t.$5Rb, "userDataSync", { channelClientCtor: w.$n9c }),
					(0, i.$Wbd)(t.$6Rb, "IUserDataSyncResourceProviderService"),
					(0, i.$Wbd)(E.$FRb, "userDataSyncMachines"),
					(0, i.$Wbd)(d.$vwc, "userDataSyncAccount", {
						channelClientCtor: C.$j9c,
					}),
					(0, i.$Wbd)(t.$SRb, "userDataSyncStoreManagement", {
						channelClientCtor: C.$l9c,
					});
			},
		),
		define(
			de[1904],
			he([1, 0, 34, 3, 371, 1173, 5, 305, 47, 904, 2887, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xcd = e.$wcd = void 0),
					(e.$wcd = (0, C.$Mi)("utilityProcessWorkerWorkbenchService"));
				let h = class extends i.$1c {
					get b() {
						if (!this.a) {
							const n = this.g.getChannel(u.$y8c);
							this.a = d.ProxyChannel.toService(n);
						}
						return this.a;
					}
					constructor(n, g, p) {
						super(),
							(this.windowId = n),
							(this.f = g),
							(this.g = p),
							(this.a = void 0),
							(this.c = new a.$Lh());
					}
					async createWorker(n) {
						this.f.trace("Renderer->UtilityProcess#createWorker"),
							await Promise.race([this.c.wait(), (0, a.$Nh)(2e3)]);
						const g = (0, m.$9g)(),
							p = "vscode:createUtilityProcessWorkerMessageChannelResult",
							o = (0, r.$lrb)(void 0, p, g),
							f = this.b.createWorker({
								process: n,
								reply: { windowId: this.windowId, channel: p, nonce: g },
							}),
							b = new i.$Zc();
						b.add(
							(0, i.$Yc)(() => {
								this.f.trace("Renderer->UtilityProcess#disposeWorker", n),
									this.b.disposeWorker({
										process: n,
										reply: { windowId: this.windowId },
									});
							}),
						);
						const s = await o,
							l = b.add(
								new E.$erb(s, `window:${this.windowId},module:${n.moduleId}`),
							);
						return (
							this.f.trace(
								"Renderer->UtilityProcess#createWorkerChannel: connection established",
							),
							f.then(({ reason: y }) => {
								y?.code === 0
									? this.f.trace(
											`[UtilityProcessWorker]: terminated normally with code ${y.code}, signal: ${y.signal}`,
										)
									: this.f.error(
											`[UtilityProcessWorker]: terminated unexpectedly with code ${y?.code}, signal: ${y?.signal}`,
										);
							}),
							{ client: l, onDidTerminate: f, dispose: () => b.dispose() }
						);
					}
					notifyRestored() {
						this.c.isOpen() || this.c.open();
					}
				};
				(e.$xcd = h), (e.$xcd = h = Ne([j(1, t.$ik), j(2, w.$V8c)], h));
			},
		),
		