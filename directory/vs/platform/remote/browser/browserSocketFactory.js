define(
			de[2785],
			he([1, 0, 7, 15, 76, 6, 3, 760, 211, 75]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1rb = void 0),
					(t = mt(t));
				class u extends C.$1c {
					traceSocketEvent(g, p) {
						d.SocketDiagnostics.traceSocketEvent(this.h, this.g, g, p);
					}
					constructor(g, p) {
						super(),
							(this.a = new E.$re()),
							(this.onData = this.a.event),
							(this.b = this.D(new E.$re())),
							(this.onOpen = this.b.event),
							(this.c = this.D(new E.$re())),
							(this.onClose = this.c.event),
							(this.f = this.D(new E.$re())),
							(this.onError = this.f.event),
							(this.g = p),
							(this.h = new WebSocket(g)),
							this.traceSocketEvent(d.SocketDiagnosticsEventType.Created, {
								type: "BrowserWebSocket",
								url: g,
							}),
							(this.j = new FileReader()),
							(this.m = []),
							(this.n = !1),
							(this.q = !1),
							(this.j.onload = ($) => {
								this.n = !1;
								const v = $.target.result;
								this.traceSocketEvent(d.SocketDiagnosticsEventType.Read, v),
									this.a.fire(v),
									this.m.length > 0 && o(this.m.shift());
							});
						const o = ($) => {
							if (this.n) {
								this.m.push($);
								return;
							}
							(this.n = !0), this.j.readAsArrayBuffer($);
						};
						(this.r = ($) => {
							const v = $.data;
							this.traceSocketEvent(
								d.SocketDiagnosticsEventType.BrowserWebSocketBlobReceived,
								{ type: v.type, size: v.size },
							),
								o(v);
						}),
							this.h.addEventListener("message", this.r),
							this.D(
								t.$0fb(this.h, "open", ($) => {
									this.traceSocketEvent(d.SocketDiagnosticsEventType.Open),
										this.b.fire();
								}),
							);
						let f = null;
						const b = () => {
								const $ = f;
								(f = null), this.f.fire($);
							},
							s = this.D(new i.$Yh(b, 0)),
							l = ($) => {
								s.cancel(), (f = $), s.schedule();
							},
							y = ($) => {
								s.cancel(), (f = $), b();
							};
						this.D(
							t.$0fb(this.h, "close", ($) => {
								this.traceSocketEvent(d.SocketDiagnosticsEventType.Close, {
									code: $.code,
									reason: $.reason,
									wasClean: $.wasClean,
								}),
									(this.q = !0),
									f &&
										(navigator.onLine
											? $.wasClean
												? (s.cancel(), b())
												: y(
														new m.$6l(
															$.reason ||
																`WebSocket close with status code ${$.code}`,
															m.RemoteAuthorityResolverErrorCode
																.TemporarilyNotAvailable,
															$,
														),
													)
											: y(
													new m.$6l(
														"Browser is offline",
														m.RemoteAuthorityResolverErrorCode
															.TemporarilyNotAvailable,
														$,
													),
												)),
									this.c.fire({
										code: $.code,
										reason: $.reason,
										wasClean: $.wasClean,
										event: $,
									});
							}),
						),
							this.D(
								t.$0fb(this.h, "error", ($) => {
									this.traceSocketEvent(d.SocketDiagnosticsEventType.Error, {
										message: $?.message,
									}),
										l($);
								}),
							);
					}
					send(g) {
						this.q ||
							(this.traceSocketEvent(d.SocketDiagnosticsEventType.Write, g),
							this.h.send(g));
					}
					close() {
						(this.q = !0),
							this.traceSocketEvent(d.SocketDiagnosticsEventType.Close),
							this.h.close(),
							this.h.removeEventListener("message", this.r),
							this.dispose();
					}
				}
				const a = new (class {
					create(n, g) {
						return new u(n, g);
					}
				})();
				class h {
					traceSocketEvent(g, p) {
						typeof this.socket.traceSocketEvent == "function"
							? this.socket.traceSocketEvent(g, p)
							: d.SocketDiagnostics.traceSocketEvent(
									this.socket,
									this.debugLabel,
									g,
									p,
								);
					}
					constructor(g, p) {
						(this.socket = g), (this.debugLabel = p);
					}
					dispose() {
						this.socket.close();
					}
					onData(g) {
						return this.socket.onData((p) => g(w.$Te.wrap(new Uint8Array(p))));
					}
					onClose(g) {
						const p = (o) => {
							g(
								typeof o > "u"
									? o
									: {
											type: d.SocketCloseEventType.WebSocketCloseEvent,
											code: o.code,
											reason: o.reason,
											wasClean: o.wasClean,
											event: o.event,
										},
							);
						};
						return this.socket.onClose(p);
					}
					onEnd(g) {
						return C.$1c.None;
					}
					write(g) {
						this.socket.send(g.buffer);
					}
					end() {
						this.socket.close();
					}
					drain() {
						return Promise.resolve();
					}
				}
				class c {
					constructor(g) {
						this.a = g || a;
					}
					supports(g) {
						return !0;
					}
					connect({ host: g, port: p }, o, f, b) {
						return new Promise((s, l) => {
							const y = /^https:/.test(r.$Bfb.location.href) ? "wss" : "ws",
								$ = this.a.create(
									`${y}://${/:/.test(g) && !/\[/.test(g) ? `[${g}]` : g}:${p}${o}?${f}&skipWebSocketFrames=false`,
									b,
								),
								v = $.onError(l);
							$.onOpen(() => {
								v.dispose(), s(new h($, b));
							});
						});
					}
				}
				e.$1rb = c;
			},
		),
		