define(de[3620], he([1, 0, 3619, 626]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[3621],
			he([1, 0, 1173, 305, 34, 3, 2793, 240, 15, 904]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qcd = void 0);
				let u = class extends E.$1c {
					constructor(h, c) {
						super(),
							(this.windowId = h),
							(this.c = c),
							(this.b = new m.$Lh()),
							(this.a = this.f());
					}
					async f() {
						this.c.trace("Renderer->SharedProcess#connect"),
							await Promise.race([this.b.wait(), (0, m.$Nh)(2e3)]),
							(0, d.mark)("code/willConnectSharedProcess"),
							this.c.trace(
								"Renderer->SharedProcess#connect: before acquirePort",
							);
						const h = await (0, r.$lrb)(C.$V7c.request, C.$V7c.response);
						return (
							(0, d.mark)("code/didConnectSharedProcess"),
							this.c.trace(
								"Renderer->SharedProcess#connect: connection established",
							),
							this.D(new t.$erb(h, `window:${this.windowId}`))
						);
					}
					notifyRestored() {
						this.b.isOpen() || this.b.open();
					}
					getChannel(h) {
						return (0, i.$si)(this.a.then((c) => c.getChannel(h)));
					}
					registerChannel(h, c) {
						this.a.then((n) => n.registerChannel(h, c));
					}
					async createRawConnection() {
						await this.a,
							this.c.trace(
								"Renderer->SharedProcess#createRawConnection: before acquirePort",
							);
						const h = await (0, r.$lrb)(C.$W7c.request, C.$W7c.response);
						return (
							this.c.trace(
								"Renderer->SharedProcess#createRawConnection: connection established",
							),
							h
						);
					}
				};
				(e.$Qcd = u), (e.$Qcd = u = Ne([j(1, w.$ik)], u));
			},
		),
		