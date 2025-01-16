define(de[2705], he([1, 0, 6, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fp = e.$ep = void 0);
			class w {
				constructor() {
					(this.a = new t.$re()),
						(this.b = new t.$re()),
						(this.c = new t.$re()),
						(this.d = new t.$re());
				}
				static {
					this.ChannelName = "extensionhostdebugservice";
				}
				call(d, m, r) {
					switch (m) {
						case "close":
							return Promise.resolve(this.a.fire({ sessionId: r[0] }));
						case "reload":
							return Promise.resolve(this.b.fire({ sessionId: r[0] }));
						case "terminate":
							return Promise.resolve(this.c.fire({ sessionId: r[0] }));
						case "attach":
							return Promise.resolve(
								this.d.fire({ sessionId: r[0], port: r[1], subId: r[2] }),
							);
					}
					throw new Error("Method not implemented.");
				}
				listen(d, m, r) {
					switch (m) {
						case "close":
							return this.a.event;
						case "reload":
							return this.b.event;
						case "terminate":
							return this.c.event;
						case "attach":
							return this.d.event;
					}
					throw new Error("Method not implemented.");
				}
			}
			e.$ep = w;
			class E extends i.$1c {
				constructor(d) {
					super(), (this.b = d);
				}
				reload(d) {
					this.b.call("reload", [d]);
				}
				get onReload() {
					return this.b.listen("reload");
				}
				close(d) {
					this.b.call("close", [d]);
				}
				get onClose() {
					return this.b.listen("close");
				}
				attachSession(d, m, r) {
					this.b.call("attach", [d, m, r]);
				}
				get onAttachSession() {
					return this.b.listen("attach");
				}
				terminateSession(d, m) {
					this.b.call("terminate", [d, m]);
				}
				get onTerminateSession() {
					return this.b.listen("terminate");
				}
				openExtensionDevelopmentHostWindow(d, m) {
					return this.b.call("openExtensionDevelopmentHostWindow", [d, m]);
				}
			}
			e.$fp = E;
		}),
		