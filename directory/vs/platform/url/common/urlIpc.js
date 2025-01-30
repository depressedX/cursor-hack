import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
define(de[2881], he([1, 0, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_7c = e.$$7c = e.$07c = void 0);
			class i {
				constructor(d) {
					this.a = d;
				}
				listen(d, m) {
					throw new Error(`Event not found: ${m}`);
				}
				call(d, m, r) {
					switch (m) {
						case "handleURL":
							return this.a.handleURL(t.URI.revive(r[0]), r[1]);
					}
					throw new Error(`Call not found: ${m}`);
				}
			}
			e.$07c = i;
			class w {
				constructor(d) {
					this.a = d;
				}
				handleURL(d, m) {
					return this.a.call("handleURL", [d.toJSON(), m]);
				}
			}
			e.$$7c = w;
			class E {
				constructor(d, m) {
					(this.a = d), (this.b = m);
				}
				async routeCall(d, m, r, u) {
					if (m !== "handleURL") throw new Error(`Call not found: ${m}`);
					if (Array.isArray(r) && r.length > 0) {
						const a = t.URI.revive(r[0]);
						if (
							(this.b.trace(
								"URLHandlerRouter#routeCall() with URI argument",
								a.toString(!0),
							),
							a.query)
						) {
							const h = /\bwindowId=(\d+)/.exec(a.query);
							if (h) {
								const c = h[1];
								this.b.trace(
									`URLHandlerRouter#routeCall(): found windowId query parameter with value "${c}"`,
									a.toString(!0),
								);
								const n = new RegExp(`window:${c}`),
									g = d.connections.find(
										(p) => (
											this.b.trace(
												"URLHandlerRouter#routeCall(): testing connection",
												p.ctx,
											),
											n.test(p.ctx)
										),
									);
								if (g)
									return (
										this.b.trace(
											"URLHandlerRouter#routeCall(): found a connection to route",
											a.toString(!0),
										),
										g
									);
								this.b.trace(
									"URLHandlerRouter#routeCall(): did not find a connection to route",
									a.toString(!0),
								);
							} else
								this.b.trace(
									"URLHandlerRouter#routeCall(): did not find windowId query parameter",
									a.toString(!0),
								);
						}
					} else
						this.b.trace("URLHandlerRouter#routeCall() without URI argument");
					return this.a.routeCall(d, m, r, u);
				}
				routeEvent(d, m) {
					throw new Error(`Event not found: ${m}`);
				}
			}
			e.$_7c = E;
		}),
		