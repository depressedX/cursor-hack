define(de[211], he([1, 0, 29, 5]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$6l =
					e.RemoteAuthorityResolverErrorCode =
					e.$5l =
					e.$4l =
					e.RemoteConnectionType =
					e.$3l =
						void 0),
				(e.$7l = r),
				(e.$3l = (0, i.$Mi)("remoteAuthorityResolverService"));
			var w;
			(function (u) {
				(u[(u.WebSocket = 0)] = "WebSocket"), (u[(u.Managed = 1)] = "Managed");
			})(w || (e.RemoteConnectionType = w = {}));
			class E {
				constructor(a) {
					(this.id = a), (this.type = w.Managed);
				}
				toString() {
					return `Managed(${this.id})`;
				}
			}
			e.$4l = E;
			class C {
				constructor(a, h) {
					(this.host = a), (this.port = h), (this.type = w.WebSocket);
				}
				toString() {
					return `WebSocket(${this.host}:${this.port})`;
				}
			}
			e.$5l = C;
			var d;
			(function (u) {
				(u.Unknown = "Unknown"),
					(u.NotAvailable = "NotAvailable"),
					(u.TemporarilyNotAvailable = "TemporarilyNotAvailable"),
					(u.NoResolverFound = "NoResolverFound"),
					(u.InvalidAuthority = "InvalidAuthority");
			})(d || (e.RemoteAuthorityResolverErrorCode = d = {}));
			class m extends t.$fb {
				static isNotAvailable(a) {
					return a instanceof m && a._code === d.NotAvailable;
				}
				static isTemporarilyNotAvailable(a) {
					return a instanceof m && a._code === d.TemporarilyNotAvailable;
				}
				static isNoResolverFound(a) {
					return a instanceof m && a._code === d.NoResolverFound;
				}
				static isInvalidAuthority(a) {
					return a instanceof m && a._code === d.InvalidAuthority;
				}
				static isHandled(a) {
					return a instanceof m && a.isHandled;
				}
				constructor(a, h = d.Unknown, c) {
					super(a),
						(this._message = a),
						(this._code = h),
						(this._detail = c),
						(this.isHandled = h === d.NotAvailable && c === !0),
						Object.setPrototypeOf(this, m.prototype);
				}
			}
			e.$6l = m;
			function r(u) {
				const a = u.indexOf("+");
				return a === -1 ? u : u.substring(0, a);
			}
		}),
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
		define(
			de[604],
			he([1, 0, 15, 76, 33, 29, 6, 3, 23, 240, 162, 47, 760, 211]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jm =
						e.$im =
						e.$hm =
						e.$gm =
						e.$fm =
						e.$em =
						e.$dm =
						e.$cm =
						e.PersistentConnectionEventType =
						e.ConnectionType =
							void 0),
					(e.$_l = k),
					(e.$am = L),
					(e.$bm = M),
					(r = mt(r));
				const n = 30 * 1e3;
				var g;
				(function (Y) {
					(Y[(Y.Management = 1)] = "Management"),
						(Y[(Y.ExtensionHost = 2)] = "ExtensionHost"),
						(Y[(Y.Tunnel = 3)] = "Tunnel");
				})(g || (e.ConnectionType = g = {}));
				function p(Y) {
					switch (Y) {
						case g.Management:
							return "Management";
						case g.ExtensionHost:
							return "ExtensionHost";
						case g.Tunnel:
							return "Tunnel";
					}
				}
				function o(Y) {
					const ie = new w.$Ce();
					return setTimeout(() => ie.cancel(), Y), ie.token;
				}
				function f(Y, ie) {
					if (Y.isCancellationRequested || ie.isCancellationRequested)
						return w.CancellationToken.Cancelled;
					const ne = new w.$Ce();
					return (
						Y.onCancellationRequested(() => ne.cancel()),
						ie.onCancellationRequested(() => ne.cancel()),
						ne.token
					);
				}
				class b {
					get didTimeout() {
						return this.c === "timedout";
					}
					constructor(ie) {
						(this.c = "pending"),
							(this.d = new d.$Zc()),
							({
								promise: this.promise,
								resolve: this.f,
								reject: this.g,
							} = (0, t.$Fh)()),
							ie.isCancellationRequested
								? this.h()
								: this.d.add(ie.onCancellationRequested(() => this.h()));
					}
					registerDisposable(ie) {
						this.c === "pending" ? this.d.add(ie) : ie.dispose();
					}
					h() {
						this.c === "pending" &&
							(this.d.dispose(), (this.c = "timedout"), this.g(this.i()));
					}
					i() {
						const ie = new Error("Time limit reached");
						return (ie.code = "ETIMEDOUT"), (ie.syscall = "connect"), ie;
					}
					resolve(ie) {
						this.c === "pending" &&
							(this.d.dispose(), (this.c = "resolved"), this.f(ie));
					}
					reject(ie) {
						this.c === "pending" &&
							(this.d.dispose(), (this.c = "rejected"), this.g(ie));
					}
				}
				function s(Y, ie) {
					const ne = new b(ie);
					return (
						ne.registerDisposable(
							Y.onControlMessage((ee) => {
								const _ = JSON.parse(ee.toString()),
									te = V(_);
								te ? ne.reject(te) : ne.resolve(_);
							}),
						),
						ne.promise
					);
				}
				function l(Y, ie, ne, ee, _, te, Q, Z) {
					const se = new b(Z),
						re = u.$le.create(!1);
					return (
						Y.info(`Creating a socket (${Q})...`),
						r.mark(`code/willCreateSocket/${te}`),
						ie.connect(ne, ee, _, Q).then(
							(le) => {
								se.didTimeout
									? (r.mark(`code/didCreateSocketError/${te}`),
										Y.info(
											`Creating a socket (${Q}) finished after ${re.elapsed()} ms, but this is too late and has timed out already.`,
										),
										le?.dispose())
									: (r.mark(`code/didCreateSocketOK/${te}`),
										Y.info(
											`Creating a socket (${Q}) was successful after ${re.elapsed()} ms.`,
										),
										se.resolve(le));
							},
							(le) => {
								r.mark(`code/didCreateSocketError/${te}`),
									Y.info(
										`Creating a socket (${Q}) returned an error after ${re.elapsed()} ms.`,
									),
									Y.error(le),
									se.reject(le);
							},
						),
						se.promise
					);
				}
				function y(Y, ie) {
					const ne = new b(ie);
					return (
						Y.then(
							(ee) => {
								ne.didTimeout || ne.resolve(ee);
							},
							(ee) => {
								ne.didTimeout || ne.reject(ee);
							},
						),
						ne.promise
					);
				}
				async function $(Y, ie, ne, ee) {
					const _ = W(Y, ie);
					Y.logService.trace(`${_} 1/6. invoking socketFactory.connect().`);
					let te;
					try {
						te = await l(
							Y.logService,
							Y.remoteSocketFactoryService,
							Y.connectTo,
							m.$Zg.getServerRootPath(),
							`reconnectionToken=${Y.reconnectionToken}&reconnection=${Y.reconnectionProtocol ? "true" : "false"}`,
							p(ie),
							`renderer-${p(ie)}-${Y.reconnectionToken}`,
							ee,
						);
					} catch (le) {
						throw (
							(Y.logService.error(
								`${_} socketFactory.connect() failed or timed out. Error:`,
							),
							Y.logService.error(le),
							le)
						);
					}
					Y.logService.trace(
						`${_} 2/6. socketFactory.connect() was successful.`,
					);
					let Q, Z;
					Y.reconnectionProtocol
						? (Y.reconnectionProtocol.beginAcceptReconnection(te, null),
							(Q = Y.reconnectionProtocol),
							(Z = !1))
						: ((Q = new h.$Ai({ socket: te })), (Z = !0)),
						Y.logService.trace(
							`${_} 3/6. sending AuthRequest control message.`,
						);
					const se = await y(Y.signService.createNewMessage((0, a.$9g)()), ee),
						re = {
							type: "auth",
							auth: Y.connectionToken || "00000000000000000000",
							data: se.data,
						};
					Q.sendControl(i.$Te.fromString(JSON.stringify(re)));
					try {
						const le = await s(Q, f(ee, o(1e4)));
						if (le.type !== "sign" || typeof le.data != "string") {
							const $e = new Error("Unexpected handshake message");
							throw (($e.code = "VSCODE_CONNECTION_ERROR"), $e);
						}
						if (
							(Y.logService.trace(
								`${_} 4/6. received SignRequest control message.`,
							),
							!(await y(Y.signService.validate(se, le.signedData), ee)))
						) {
							const $e = new Error("Refused to connect to unsupported server");
							throw (($e.code = "VSCODE_CONNECTION_ERROR"), $e);
						}
						const ae = await y(Y.signService.sign(le.data), ee),
							pe = {
								type: "connectionType",
								commit: Y.commit,
								signedData: ae,
								desiredConnectionType: ie,
							};
						return (
							ne && (pe.args = ne),
							Y.logService.trace(
								`${_} 5/6. sending ConnectionTypeRequest control message.`,
							),
							Q.sendControl(i.$Te.fromString(JSON.stringify(pe))),
							{ protocol: Q, ownsProtocol: Z }
						);
					} catch (le) {
						throw (
							(le &&
								le.code === "ETIMEDOUT" &&
								(Y.logService.error(`${_} the handshake timed out. Error:`),
								Y.logService.error(le)),
							le &&
								le.code === "VSCODE_CONNECTION_ERROR" &&
								(Y.logService.error(
									`${_} received error control message when negotiating connection. Error:`,
								),
								Y.logService.error(le)),
							Z && q(Q),
							le)
						);
					}
				}
				async function v(Y, ie, ne, ee) {
					const _ = Date.now(),
						te = W(Y, ie),
						{ protocol: Q, ownsProtocol: Z } = await $(Y, ie, ne, ee),
						se = new b(ee);
					return (
						se.registerDisposable(
							Q.onControlMessage((re) => {
								const le = JSON.parse(re.toString()),
									oe = V(le);
								oe
									? (Y.logService.error(
											`${te} received error control message when negotiating connection. Error:`,
										),
										Y.logService.error(oe),
										Z && q(Q),
										se.reject(oe))
									: (Y.reconnectionProtocol?.endAcceptReconnection(),
										Y.logService.trace(
											`${te} 6/6. handshake finished, connection is up and running after ${X(_)}!`,
										),
										se.resolve({ protocol: Q, firstMessage: le }));
							}),
						),
						se.promise
					);
				}
				async function S(Y, ie) {
					const { protocol: ne } = await v(Y, g.Management, void 0, ie);
					return { protocol: ne };
				}
				async function I(Y, ie, ne) {
					const { protocol: ee, firstMessage: _ } = await v(
							Y,
							g.ExtensionHost,
							ie,
							ne,
						),
						te = _ && _.debugPort;
					return { protocol: ee, debugPort: te };
				}
				async function T(Y, ie, ne) {
					const ee = Date.now(),
						_ = W(Y, g.Tunnel),
						{ protocol: te } = await $(Y, g.Tunnel, ie, ne);
					return (
						Y.logService.trace(
							`${_} 6/6. handshake finished, connection is up and running after ${X(ee)}!`,
						),
						te
					);
				}
				async function P(Y, ie, ne) {
					const { connectTo: ee, connectionToken: _ } =
						await Y.addressProvider.getAddress();
					return {
						commit: Y.commit,
						quality: Y.quality,
						connectTo: ee,
						connectionToken: _,
						reconnectionToken: ie,
						reconnectionProtocol: ne,
						remoteSocketFactoryService: Y.remoteSocketFactoryService,
						signService: Y.signService,
						logService: Y.logService,
					};
				}
				async function k(Y, ie, ne) {
					return D(Y, async (ee) => {
						const { protocol: _ } = await S(ee, w.CancellationToken.None);
						return new x(Y, ie, ne, ee.reconnectionToken, _);
					});
				}
				async function L(Y, ie) {
					return D(Y, async (ne) => {
						const { protocol: ee, debugPort: _ } = await I(
							ne,
							ie,
							w.CancellationToken.None,
						);
						return new H(Y, ie, ne.reconnectionToken, ee, _);
					});
				}
				async function D(Y, ie) {
					for (let ee = 1; ; ee++)
						try {
							const _ = (0, a.$9g)(),
								te = await P(Y, _, null);
							return await ie(te);
						} catch (_) {
							if (ee < 5)
								Y.logService.error(
									`[remote-connection][attempt ${ee}] An error occurred in initial connection! Will retry... Error:`,
								),
									Y.logService.error(_);
							else
								throw (
									(Y.logService.error(
										`[remote-connection][attempt ${ee}]  An error occurred in initial connection! It will be treated as a permanent error. Error:`,
									),
									Y.logService.error(_),
									F.triggerPermanentFailure(0, 0, c.$6l.isHandled(_)),
									_)
								);
						}
				}
				async function M(Y, ie, ne) {
					const ee = await P(Y, (0, a.$9g)(), null);
					return await T(ee, { host: ie, port: ne }, w.CancellationToken.None);
				}
				function N(Y) {
					return (0, t.$zh)(
						(ie) =>
							new Promise((ne, ee) => {
								const _ = setTimeout(ne, Y * 1e3);
								ie.onCancellationRequested(() => {
									clearTimeout(_), ne();
								});
							}),
					);
				}
				var A;
				(function (Y) {
					(Y[(Y.ConnectionLost = 0)] = "ConnectionLost"),
						(Y[(Y.ReconnectionWait = 1)] = "ReconnectionWait"),
						(Y[(Y.ReconnectionRunning = 2)] = "ReconnectionRunning"),
						(Y[(Y.ReconnectionPermanentFailure = 3)] =
							"ReconnectionPermanentFailure"),
						(Y[(Y.ConnectionGain = 4)] = "ConnectionGain");
				})(A || (e.PersistentConnectionEventType = A = {}));
				class R {
					constructor(ie, ne) {
						(this.reconnectionToken = ie),
							(this.millisSinceLastIncomingData = ne),
							(this.type = A.ConnectionLost);
					}
				}
				e.$cm = R;
				class O {
					constructor(ie, ne, ee, _) {
						(this.reconnectionToken = ie),
							(this.millisSinceLastIncomingData = ne),
							(this.durationSeconds = ee),
							(this.c = _),
							(this.type = A.ReconnectionWait);
					}
					skipWait() {
						this.c.cancel();
					}
				}
				e.$dm = O;
				class B {
					constructor(ie, ne, ee) {
						(this.reconnectionToken = ie),
							(this.millisSinceLastIncomingData = ne),
							(this.attempt = ee),
							(this.type = A.ReconnectionRunning);
					}
				}
				e.$em = B;
				class U {
					constructor(ie, ne, ee) {
						(this.reconnectionToken = ie),
							(this.millisSinceLastIncomingData = ne),
							(this.attempt = ee),
							(this.type = A.ConnectionGain);
					}
				}
				e.$fm = U;
				class z {
					constructor(ie, ne, ee, _) {
						(this.reconnectionToken = ie),
							(this.millisSinceLastIncomingData = ne),
							(this.attempt = ee),
							(this.handled = _),
							(this.type = A.ReconnectionPermanentFailure);
					}
				}
				e.$gm = z;
				class F extends d.$1c {
					static triggerPermanentFailure(ie, ne, ee) {
						(this._permanentFailure = !0),
							(this.f = ie),
							(this.g = ne),
							(this.h = ee),
							this.j.forEach((_) => _.C(this.f, this.g, this.h));
					}
					static debugTriggerReconnection() {
						this.j.forEach((ie) => ie.w());
					}
					static debugPauseSocketWriting() {
						this.j.forEach((ie) => ie.F());
					}
					static {
						this._permanentFailure = !1;
					}
					static {
						this.f = 0;
					}
					static {
						this.g = 0;
					}
					static {
						this.h = !1;
					}
					static {
						this.j = [];
					}
					get n() {
						return this.c || F._permanentFailure;
					}
					constructor(ie, ne, ee, _, te) {
						super(),
							(this.s = ie),
							(this.t = ne),
							(this.reconnectionToken = ee),
							(this.protocol = _),
							(this.u = te),
							(this.m = this.D(new C.$re())),
							(this.onDidStateChange = this.m.event),
							(this.c = !1),
							(this.q = !1),
							(this.r = !1),
							this.m.fire(new U(this.reconnectionToken, 0, 0)),
							this.D(
								_.onSocketClose((Q) => {
									const Z = J(this.s, this.reconnectionToken, !0);
									Q
										? Q.type === h.SocketCloseEventType.NodeSocketCloseEvent
											? (this.t.logService.info(
													`${Z} received socket close event (hadError: ${Q.hadError}).`,
												),
												Q.error && this.t.logService.error(Q.error))
											: (this.t.logService.info(
													`${Z} received socket close event (wasClean: ${Q.wasClean}, code: ${Q.code}, reason: ${Q.reason}).`,
												),
												Q.event && this.t.logService.error(Q.event))
										: this.t.logService.info(
												`${Z} received socket close event.`,
											),
										this.w();
								}),
							),
							this.D(
								_.onSocketTimeout((Q) => {
									const Z = J(this.s, this.reconnectionToken, !0);
									this.t.logService.info(
										`${Z} received socket timeout event (unacknowledgedMsgCount: ${Q.unacknowledgedMsgCount}, timeSinceOldestUnacknowledgedMsg: ${Q.timeSinceOldestUnacknowledgedMsg}, timeSinceLastReceivedSomeData: ${Q.timeSinceLastReceivedSomeData}).`,
									),
										this.w();
								}),
							),
							F.j.push(this),
							this.D(
								(0, d.$Yc)(() => {
									const Q = F.j.indexOf(this);
									Q >= 0 && F.j.splice(Q, 1);
								}),
							),
							this.n && this.C(F.f, F.g, F.h);
					}
					dispose() {
						super.dispose(), (this.r = !0);
					}
					async w() {
						if (!this.q)
							try {
								(this.q = !0), await this.y();
							} finally {
								this.q = !1;
							}
					}
					async y() {
						if (this.n || this.r) return;
						const ie = J(this.s, this.reconnectionToken, !0);
						this.t.logService.info(
							`${ie} starting reconnecting loop. You can get more information with the trace log level.`,
						),
							this.m.fire(
								new R(
									this.reconnectionToken,
									this.protocol.getMillisSinceLastIncomingData(),
								),
							);
						const ne = [0, 5, 5, 10, 10, 10, 10, 10, 30];
						let ee = -1;
						do {
							ee++;
							const _ = ee < ne.length ? ne[ee] : ne[ne.length - 1];
							try {
								if (_ > 0) {
									const Q = N(_);
									this.m.fire(
										new O(
											this.reconnectionToken,
											this.protocol.getMillisSinceLastIncomingData(),
											_,
											Q,
										),
									),
										this.t.logService.info(
											`${ie} waiting for ${_} seconds before reconnecting...`,
										);
									try {
										await Q;
									} catch {}
								}
								if (this.n) {
									this.t.logService.error(
										`${ie} permanent failure occurred while running the reconnecting loop.`,
									);
									break;
								}
								this.m.fire(
									new B(
										this.reconnectionToken,
										this.protocol.getMillisSinceLastIncomingData(),
										ee + 1,
									),
								),
									this.t.logService.info(`${ie} resolving connection...`);
								const te = await P(
									this.t,
									this.reconnectionToken,
									this.protocol,
								);
								this.t.logService.info(
									`${ie} connecting to ${te.connectTo}...`,
								),
									await this.G(te, o(n)),
									this.t.logService.info(`${ie} reconnected!`),
									this.m.fire(
										new U(
											this.reconnectionToken,
											this.protocol.getMillisSinceLastIncomingData(),
											ee + 1,
										),
									);
								break;
							} catch (te) {
								if (te.code === "VSCODE_CONNECTION_ERROR") {
									this.t.logService.error(
										`${ie} A permanent error occurred in the reconnecting loop! Will give up now! Error:`,
									),
										this.t.logService.error(te),
										this.z(
											this.protocol.getMillisSinceLastIncomingData(),
											ee + 1,
											!1,
										);
									break;
								}
								if (ee > 360) {
									this.t.logService.error(
										`${ie} An error occurred while reconnecting, but it will be treated as a permanent error because the reconnection grace time has expired! Will give up now! Error:`,
									),
										this.t.logService.error(te),
										this.z(
											this.protocol.getMillisSinceLastIncomingData(),
											ee + 1,
											!1,
										);
									break;
								}
								if (c.$6l.isTemporarilyNotAvailable(te)) {
									this.t.logService.info(
										`${ie} A temporarily not available error occurred while trying to reconnect, will try again...`,
									),
										this.t.logService.trace(te);
									continue;
								}
								if (
									(te.code === "ETIMEDOUT" ||
										te.code === "ENETUNREACH" ||
										te.code === "ECONNREFUSED" ||
										te.code === "ECONNRESET") &&
									te.syscall === "connect"
								) {
									this.t.logService.info(
										`${ie} A network error occurred while trying to reconnect, will try again...`,
									),
										this.t.logService.trace(te);
									continue;
								}
								if ((0, E.$8)(te)) {
									this.t.logService.info(
										`${ie} A promise cancelation error occurred while trying to reconnect, will try again...`,
									),
										this.t.logService.trace(te);
									continue;
								}
								if (te instanceof c.$6l) {
									this.t.logService.error(
										`${ie} A RemoteAuthorityResolverError occurred while trying to reconnect. Will give up now! Error:`,
									),
										this.t.logService.error(te),
										this.z(
											this.protocol.getMillisSinceLastIncomingData(),
											ee + 1,
											c.$6l.isHandled(te),
										);
									break;
								}
								this.t.logService.error(
									`${ie} An unknown error occurred while trying to reconnect, since this is an unknown case, it will be treated as a permanent error! Will give up now! Error:`,
								),
									this.t.logService.error(te),
									this.z(
										this.protocol.getMillisSinceLastIncomingData(),
										ee + 1,
										!1,
									);
								break;
							}
						} while (!this.n && !this.r);
					}
					z(ie, ne, ee) {
						this.u ? F.triggerPermanentFailure(ie, ne, ee) : this.C(ie, ne, ee);
					}
					C(ie, ne, ee) {
						this.m.fire(new z(this.reconnectionToken, ie, ne, ee)),
							q(this.protocol);
					}
					F() {
						this.protocol.pauseSocketWriting();
					}
				}
				e.$hm = F;
				class x extends F {
					constructor(ie, ne, ee, _, te) {
						super(g.Management, ie, _, te, !0),
							(this.client = this.D(
								new h.$yi(
									te,
									{ remoteAuthority: ne, clientId: ee },
									ie.ipcLogger,
								),
							));
					}
					async G(ie, ne) {
						await S(ie, ne);
					}
				}
				e.$im = x;
				class H extends F {
					constructor(ie, ne, ee, _, te) {
						super(g.ExtensionHost, ie, ee, _, !1),
							(this.H = ne),
							(this.debugPort = te);
					}
					async G(ie, ne) {
						await I(ie, this.H, ne);
					}
				}
				e.$jm = H;
				function q(Y) {
					try {
						Y.acceptDisconnect();
						const ie = Y.getSocket();
						Y.dispose(), ie.dispose();
					} catch (ie) {
						(0, E.$4)(ie);
					}
				}
				function V(Y) {
					if (Y && Y.type === "error") {
						const ie = new Error(`Connection error: ${Y.reason}`);
						return (ie.code = "VSCODE_CONNECTION_ERROR"), ie;
					}
					return null;
				}
				function G(Y, ie) {
					for (; Y.length < ie; ) Y += " ";
					return Y;
				}
				function K(Y, ie) {
					return `[remote-connection][${G(p(Y), 13)}][${ie.substr(0, 5)}\u2026]`;
				}
				function J(Y, ie, ne) {
					return `${K(Y, ie)}[${ne ? "reconnect" : "initial"}]`;
				}
				function W(Y, ie) {
					return `${J(ie, Y.reconnectionToken, !!Y.reconnectionProtocol)}[${Y.connectTo}]`;
				}
				function X(Y) {
					return `${Date.now() - Y} ms`;
				}
			},
		),
		