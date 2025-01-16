define(de[760], he([1, 0, 76, 6, 3, 305]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ai =
					e.$zi =
					e.$yi =
					e.$xi =
					e.ProtocolConstants =
					e.$wi =
					e.SocketCloseEventType =
					e.SocketDiagnostics =
					e.SocketDiagnosticsEventType =
						void 0);
			var C;
			(function (S) {
				(S.Created = "created"),
					(S.Read = "read"),
					(S.Write = "write"),
					(S.Open = "open"),
					(S.Error = "error"),
					(S.Close = "close"),
					(S.BrowserWebSocketBlobReceived = "browserWebSocketBlobReceived"),
					(S.NodeEndReceived = "nodeEndReceived"),
					(S.NodeEndSent = "nodeEndSent"),
					(S.NodeDrainBegin = "nodeDrainBegin"),
					(S.NodeDrainEnd = "nodeDrainEnd"),
					(S.zlibInflateError = "zlibInflateError"),
					(S.zlibInflateData = "zlibInflateData"),
					(S.zlibInflateInitialWrite = "zlibInflateInitialWrite"),
					(S.zlibInflateInitialFlushFired = "zlibInflateInitialFlushFired"),
					(S.zlibInflateWrite = "zlibInflateWrite"),
					(S.zlibInflateFlushFired = "zlibInflateFlushFired"),
					(S.zlibDeflateError = "zlibDeflateError"),
					(S.zlibDeflateData = "zlibDeflateData"),
					(S.zlibDeflateWrite = "zlibDeflateWrite"),
					(S.zlibDeflateFlushFired = "zlibDeflateFlushFired"),
					(S.WebSocketNodeSocketWrite = "webSocketNodeSocketWrite"),
					(S.WebSocketNodeSocketPeekedHeader =
						"webSocketNodeSocketPeekedHeader"),
					(S.WebSocketNodeSocketReadHeader = "webSocketNodeSocketReadHeader"),
					(S.WebSocketNodeSocketReadData = "webSocketNodeSocketReadData"),
					(S.WebSocketNodeSocketUnmaskedData =
						"webSocketNodeSocketUnmaskedData"),
					(S.WebSocketNodeSocketDrainBegin = "webSocketNodeSocketDrainBegin"),
					(S.WebSocketNodeSocketDrainEnd = "webSocketNodeSocketDrainEnd"),
					(S.ProtocolHeaderRead = "protocolHeaderRead"),
					(S.ProtocolMessageRead = "protocolMessageRead"),
					(S.ProtocolHeaderWrite = "protocolHeaderWrite"),
					(S.ProtocolMessageWrite = "protocolMessageWrite"),
					(S.ProtocolWrite = "protocolWrite");
			})(C || (e.SocketDiagnosticsEventType = C = {}));
			var d;
			(function (S) {
				(S.enableDiagnostics = !1), (S.records = []);
				const I = new WeakMap();
				let T = 0;
				function P(L, D) {
					if (!I.has(L)) {
						const M = String(++T);
						I.set(L, M);
					}
					return I.get(L);
				}
				function k(L, D, M, N) {
					if (!S.enableDiagnostics) return;
					const A = P(L, D);
					if (
						N instanceof t.$Te ||
						N instanceof Uint8Array ||
						N instanceof ArrayBuffer ||
						ArrayBuffer.isView(N)
					) {
						const R = t.$Te.alloc(N.byteLength);
						R.set(N),
							S.records.push({
								timestamp: Date.now(),
								id: A,
								label: D,
								type: M,
								buff: R,
							});
					} else
						S.records.push({
							timestamp: Date.now(),
							id: A,
							label: D,
							type: M,
							data: N,
						});
				}
				S.traceSocketEvent = k;
			})(d || (e.SocketDiagnostics = d = {}));
			var m;
			(function (S) {
				(S[(S.NodeSocketCloseEvent = 0)] = "NodeSocketCloseEvent"),
					(S[(S.WebSocketCloseEvent = 1)] = "WebSocketCloseEvent");
			})(m || (e.SocketCloseEventType = m = {}));
			let r = null;
			function u() {
				return r || (r = t.$Te.alloc(0)), r;
			}
			class a {
				get byteLength() {
					return this.b;
				}
				constructor() {
					(this.a = []), (this.b = 0);
				}
				acceptChunk(I) {
					this.a.push(I), (this.b += I.byteLength);
				}
				read(I) {
					return this.c(I, !0);
				}
				peek(I) {
					return this.c(I, !1);
				}
				c(I, T) {
					if (I === 0) return u();
					if (I > this.b) throw new Error("Cannot read so many bytes!");
					if (this.a[0].byteLength === I) {
						const D = this.a[0];
						return T && (this.a.shift(), (this.b -= I)), D;
					}
					if (this.a[0].byteLength > I) {
						const D = this.a[0].slice(0, I);
						return T && ((this.a[0] = this.a[0].slice(I)), (this.b -= I)), D;
					}
					const P = t.$Te.alloc(I);
					let k = 0,
						L = 0;
					for (; I > 0; ) {
						const D = this.a[L];
						if (D.byteLength > I) {
							const M = D.slice(0, I);
							P.set(M, k),
								(k += I),
								T && ((this.a[L] = D.slice(I)), (this.b -= I)),
								(I -= I);
						} else
							P.set(D, k),
								(k += D.byteLength),
								T ? (this.a.shift(), (this.b -= D.byteLength)) : L++,
								(I -= D.byteLength);
					}
					return P;
				}
			}
			e.$wi = a;
			var h;
			(function (S) {
				(S[(S.None = 0)] = "None"),
					(S[(S.Regular = 1)] = "Regular"),
					(S[(S.Control = 2)] = "Control"),
					(S[(S.Ack = 3)] = "Ack"),
					(S[(S.Disconnect = 5)] = "Disconnect"),
					(S[(S.ReplayRequest = 6)] = "ReplayRequest"),
					(S[(S.Pause = 7)] = "Pause"),
					(S[(S.Resume = 8)] = "Resume"),
					(S[(S.KeepAlive = 9)] = "KeepAlive");
			})(h || (h = {}));
			function c(S) {
				switch (S) {
					case h.None:
						return "None";
					case h.Regular:
						return "Regular";
					case h.Control:
						return "Control";
					case h.Ack:
						return "Ack";
					case h.Disconnect:
						return "Disconnect";
					case h.ReplayRequest:
						return "ReplayRequest";
					case h.Pause:
						return "PauseWriting";
					case h.Resume:
						return "ResumeWriting";
					case h.KeepAlive:
						return "KeepAlive";
				}
			}
			var n;
			(function (S) {
				(S[(S.HeaderLength = 13)] = "HeaderLength"),
					(S[(S.AcknowledgeTime = 2e3)] = "AcknowledgeTime"),
					(S[(S.TimeoutTime = 2e4)] = "TimeoutTime"),
					(S[(S.ReconnectionGraceTime = 108e5)] = "ReconnectionGraceTime"),
					(S[(S.ReconnectionShortGraceTime = 3e5)] =
						"ReconnectionShortGraceTime"),
					(S[(S.KeepAliveSendTime = 5e3)] = "KeepAliveSendTime");
			})(n || (e.ProtocolConstants = n = {}));
			class g {
				constructor(I, T, P, k) {
					(this.type = I),
						(this.id = T),
						(this.ack = P),
						(this.data = k),
						(this.writtenTime = 0);
				}
				get size() {
					return this.data.byteLength;
				}
			}
			class p extends w.$1c {
				constructor(I) {
					super(),
						(this.f = this.D(new i.$re())),
						(this.onMessage = this.f.event),
						(this.g = {
							readHead: !0,
							readLen: n.HeaderLength,
							messageType: h.None,
							id: 0,
							ack: 0,
						}),
						(this.a = I),
						(this.b = !1),
						(this.c = new a()),
						this.D(this.a.onData((T) => this.acceptChunk(T))),
						(this.lastReadTime = Date.now());
				}
				acceptChunk(I) {
					if (!(!I || I.byteLength === 0))
						for (
							this.lastReadTime = Date.now(), this.c.acceptChunk(I);
							this.c.byteLength >= this.g.readLen;
						) {
							const T = this.c.read(this.g.readLen);
							if (this.g.readHead)
								(this.g.readHead = !1),
									(this.g.readLen = T.readUInt32BE(9)),
									(this.g.messageType = T.readUInt8(0)),
									(this.g.id = T.readUInt32BE(1)),
									(this.g.ack = T.readUInt32BE(5)),
									this.a.traceSocketEvent(C.ProtocolHeaderRead, {
										messageType: c(this.g.messageType),
										id: this.g.id,
										ack: this.g.ack,
										messageSize: this.g.readLen,
									});
							else {
								const P = this.g.messageType,
									k = this.g.id,
									L = this.g.ack;
								if (
									((this.g.readHead = !0),
									(this.g.readLen = n.HeaderLength),
									(this.g.messageType = h.None),
									(this.g.id = 0),
									(this.g.ack = 0),
									this.a.traceSocketEvent(C.ProtocolMessageRead, T),
									this.f.fire(new g(P, k, L, T)),
									this.b)
								)
									break;
							}
						}
				}
				readEntireBuffer() {
					return this.c.read(this.c.byteLength);
				}
				dispose() {
					(this.b = !0), super.dispose();
				}
			}
			class o {
				constructor(I) {
					(this.k = null),
						(this.a = !1),
						(this.b = !1),
						(this.c = I),
						(this.d = []),
						(this.f = 0),
						(this.lastWriteTime = 0);
				}
				dispose() {
					try {
						this.flush();
					} catch {}
					this.a = !0;
				}
				drain() {
					return this.flush(), this.c.drain();
				}
				flush() {
					this.m();
				}
				pause() {
					this.b = !0;
				}
				resume() {
					(this.b = !1), this.l();
				}
				write(I) {
					if (this.a) return;
					(I.writtenTime = Date.now()), (this.lastWriteTime = Date.now());
					const T = t.$Te.alloc(n.HeaderLength);
					T.writeUInt8(I.type, 0),
						T.writeUInt32BE(I.id, 1),
						T.writeUInt32BE(I.ack, 5),
						T.writeUInt32BE(I.data.byteLength, 9),
						this.c.traceSocketEvent(C.ProtocolHeaderWrite, {
							messageType: c(I.type),
							id: I.id,
							ack: I.ack,
							messageSize: I.data.byteLength,
						}),
						this.c.traceSocketEvent(C.ProtocolMessageWrite, I.data),
						this.j(T, I.data);
				}
				g(I, T) {
					const P = this.f === 0;
					return this.d.push(I, T), (this.f += I.byteLength + T.byteLength), P;
				}
				h() {
					const I = t.$Te.concat(this.d, this.f);
					return (this.d.length = 0), (this.f = 0), I;
				}
				j(I, T) {
					this.g(I, T) && this.l();
				}
				l() {
					this.k ||
						(this.k = setTimeout(() => {
							(this.k = null), this.m();
						}));
				}
				m() {
					if (this.f === 0 || this.b) return;
					const I = this.h();
					this.c.traceSocketEvent(C.ProtocolWrite, {
						byteLength: I.byteLength,
					}),
						this.c.write(I);
				}
			}
			class f extends w.$1c {
				constructor(I) {
					super(),
						(this.f = new i.$re()),
						(this.onMessage = this.f.event),
						(this.g = new i.$re()),
						(this.onDidDispose = this.g.event),
						(this.a = I),
						(this.b = this.D(new o(this.a))),
						(this.c = this.D(new p(this.a))),
						this.D(
							this.c.onMessage((T) => {
								T.type === h.Regular && this.f.fire(T.data);
							}),
						),
						this.D(this.a.onClose(() => this.g.fire()));
				}
				drain() {
					return this.b.drain();
				}
				getSocket() {
					return this.a;
				}
				sendDisconnect() {}
				send(I) {
					this.b.write(new g(h.Regular, 0, 0, I));
				}
			}
			e.$xi = f;
			class b extends E.$ri {
				static fromSocket(I, T) {
					return new b(new f(I), T);
				}
				get onDidDispose() {
					return this.b.onDidDispose;
				}
				constructor(I, T, P = null) {
					super(I, T, P), (this.b = I);
				}
				dispose() {
					super.dispose();
					const I = this.b.getSocket();
					this.b.sendDisconnect(), this.b.dispose(), I.end();
				}
			}
			e.$yi = b;
			class s {
				constructor() {
					(this.b = !1),
						(this.c = !1),
						(this.d = []),
						(this.a = new i.$re({
							onWillAddFirstListener: () => {
								(this.b = !0), queueMicrotask(() => this.f());
							},
							onDidRemoveLastListener: () => {
								this.b = !1;
							},
						})),
						(this.event = this.a.event);
				}
				f() {
					if (!this.c) {
						for (this.c = !0; this.b && this.d.length > 0; )
							this.a.fire(this.d.shift());
						this.c = !1;
					}
				}
				fire(I) {
					this.b
						? this.d.length > 0
							? this.d.push(I)
							: this.a.fire(I)
						: this.d.push(I);
				}
				flushBuffer() {
					this.d = [];
				}
			}
			e.$zi = s;
			class l {
				constructor(I) {
					(this.data = I), (this.next = null);
				}
			}
			class y {
				constructor() {
					(this.a = null), (this.b = null);
				}
				length() {
					let I = 0,
						T = this.a;
					for (; T; ) (T = T.next), I++;
					return I;
				}
				peek() {
					return this.a ? this.a.data : null;
				}
				toArray() {
					const I = [];
					let T = 0,
						P = this.a;
					for (; P; ) (I[T++] = P.data), (P = P.next);
					return I;
				}
				pop() {
					if (this.a) {
						if (this.a === this.b) {
							(this.a = null), (this.b = null);
							return;
						}
						this.a = this.a.next;
					}
				}
				push(I) {
					const T = new l(I);
					if (!this.a) {
						(this.a = T), (this.b = T);
						return;
					}
					(this.b.next = T), (this.b = T);
				}
			}
			class $ {
				static {
					this.a = 10;
				}
				static {
					this.b = null;
				}
				static getInstance() {
					return $.b || ($.b = new $()), $.b;
				}
				constructor() {
					this.c = [];
					const I = Date.now();
					for (let T = 0; T < $.a; T++) this.c[T] = I - 1e3 * T;
					setInterval(() => {
						for (let T = $.a; T >= 1; T--) this.c[T] = this.c[T - 1];
						this.c[0] = Date.now();
					}, 1e3);
				}
				d() {
					const I = Date.now(),
						T = (1 + $.a) * 1e3;
					let P = 0;
					for (let k = 0; k < $.a; k++) I - this.c[k] <= T && P++;
					return 1 - P / $.a;
				}
				hasHighLoad() {
					return this.d() >= 0.5;
				}
			}
			class v {
				get unacknowledgedCount() {
					return this.d - this.f;
				}
				constructor(I) {
					(this.v = new s()),
						(this.onControlMessage = this.v.event),
						(this.w = new s()),
						(this.onMessage = this.w.event),
						(this.x = new s()),
						(this.onDidDispose = this.x.event),
						(this.y = new s()),
						(this.onSocketClose = this.y.event),
						(this.z = new s()),
						(this.onSocketTimeout = this.z.event),
						(this.t = I.loadEstimator ?? $.getInstance()),
						(this.u = I.sendKeepAlive ?? !0),
						(this.a = !1),
						(this.c = new y()),
						(this.d = 0),
						(this.f = 0),
						(this.g = null),
						(this.h = 0),
						(this.j = 0),
						(this.k = 0),
						(this.l = null),
						(this.n = 0),
						(this.o = Date.now()),
						(this.s = new w.$Zc()),
						(this.p = I.socket),
						(this.q = this.s.add(new o(this.p))),
						(this.r = this.s.add(new p(this.p))),
						this.s.add(this.r.onMessage((T) => this.A(T))),
						this.s.add(this.p.onClose((T) => this.y.fire(T))),
						I.initialChunk && this.r.acceptChunk(I.initialChunk),
						this.u
							? (this.m = setInterval(() => {
									this.E();
								}, n.KeepAliveSendTime))
							: (this.m = null);
				}
				dispose() {
					this.g && (clearTimeout(this.g), (this.g = null)),
						this.l && (clearTimeout(this.l), (this.l = null)),
						this.m && (clearInterval(this.m), (this.m = null)),
						this.s.dispose();
				}
				drain() {
					return this.q.drain();
				}
				sendDisconnect() {
					if (!this.b) {
						this.b = !0;
						const I = new g(h.Disconnect, 0, 0, u());
						this.q.write(I), this.q.flush();
					}
				}
				sendPause() {
					const I = new g(h.Pause, 0, 0, u());
					this.q.write(I);
				}
				sendResume() {
					const I = new g(h.Resume, 0, 0, u());
					this.q.write(I);
				}
				pauseSocketWriting() {
					this.q.pause();
				}
				getSocket() {
					return this.p;
				}
				getMillisSinceLastIncomingData() {
					return Date.now() - this.r.lastReadTime;
				}
				beginAcceptReconnection(I, T) {
					(this.a = !0),
						this.s.dispose(),
						(this.s = new w.$Zc()),
						this.v.flushBuffer(),
						this.y.flushBuffer(),
						this.z.flushBuffer(),
						this.p.dispose(),
						(this.n = 0),
						(this.o = Date.now()),
						(this.p = I),
						(this.q = this.s.add(new o(this.p))),
						(this.r = this.s.add(new p(this.p))),
						this.s.add(this.r.onMessage((P) => this.A(P))),
						this.s.add(this.p.onClose((P) => this.y.fire(P))),
						this.r.acceptChunk(T);
				}
				endAcceptReconnection() {
					(this.a = !1), (this.j = this.h);
					const I = new g(h.Ack, 0, this.j, u());
					this.q.write(I);
					const T = this.c.toArray();
					for (let P = 0, k = T.length; P < k; P++) this.q.write(T[P]);
					this.C();
				}
				acceptDisconnect() {
					this.x.fire();
				}
				A(I) {
					if (I.ack > this.f) {
						this.f = I.ack;
						do {
							const T = this.c.peek();
							if (T && T.id <= I.ack) this.c.pop();
							else break;
						} while (!0);
					}
					switch (I.type) {
						case h.None:
							break;
						case h.Regular: {
							if (I.id > this.h)
								if (I.id !== this.h + 1) {
									const T = Date.now();
									T - this.n > 1e4 &&
										((this.n = T),
										this.q.write(new g(h.ReplayRequest, 0, 0, u())));
								} else
									(this.h = I.id),
										(this.k = Date.now()),
										this.B(),
										this.w.fire(I.data);
							break;
						}
						case h.Control: {
							this.v.fire(I.data);
							break;
						}
						case h.Ack:
							break;
						case h.Disconnect: {
							this.x.fire();
							break;
						}
						case h.ReplayRequest: {
							const T = this.c.toArray();
							for (let P = 0, k = T.length; P < k; P++) this.q.write(T[P]);
							this.C();
							break;
						}
						case h.Pause: {
							this.q.pause();
							break;
						}
						case h.Resume: {
							this.q.resume();
							break;
						}
						case h.KeepAlive:
							break;
					}
				}
				readEntireBuffer() {
					return this.r.readEntireBuffer();
				}
				flush() {
					this.q.flush();
				}
				send(I) {
					const T = ++this.d;
					this.j = this.h;
					const P = new g(h.Regular, T, this.j, I);
					this.c.push(P), this.a || (this.q.write(P), this.C());
				}
				sendControl(I) {
					const T = new g(h.Control, 0, 0, I);
					this.q.write(T);
				}
				B() {
					if (this.h <= this.j || this.l) return;
					const I = Date.now() - this.k;
					if (I >= n.AcknowledgeTime) {
						this.D();
						return;
					}
					this.l = setTimeout(
						() => {
							(this.l = null), this.B();
						},
						n.AcknowledgeTime - I + 5,
					);
				}
				C() {
					if (this.d <= this.f || this.g || this.a) return;
					const I = this.c.peek(),
						T = Date.now() - I.writtenTime,
						P = Date.now() - this.r.lastReadTime,
						k = Date.now() - this.o;
					if (
						T >= n.TimeoutTime &&
						P >= n.TimeoutTime &&
						k >= n.TimeoutTime &&
						!this.t.hasHighLoad()
					) {
						(this.o = Date.now()),
							this.z.fire({
								unacknowledgedMsgCount: this.c.length(),
								timeSinceOldestUnacknowledgedMsg: T,
								timeSinceLastReceivedSomeData: P,
							});
						return;
					}
					const L = Math.max(
						n.TimeoutTime - T,
						n.TimeoutTime - P,
						n.TimeoutTime - k,
						500,
					);
					this.g = setTimeout(() => {
						(this.g = null), this.C();
					}, L);
				}
				D() {
					if (this.h <= this.j) return;
					this.j = this.h;
					const I = new g(h.Ack, 0, this.j, u());
					this.q.write(I);
				}
				E() {
					this.j = this.h;
					const I = new g(h.KeepAlive, 0, this.j, u());
					this.q.write(I);
				}
			}
			e.$Ai = v;
		}),
		define(
			de[2688],
			he([1, 0, 76, 6, 305, 2227, 320]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$krb = void 0);
				class d extends w.$ri {
					static f() {
						const r = i.Event.fromNodeEventEmitter(
							C.$P,
							"vscode:message",
							(u, a) => t.$Te.wrap(a),
						);
						return C.$P.send("vscode:hello"), new E.$grb(C.$P, r);
					}
					constructor(r) {
						const u = d.f();
						super(u, r), (this.b = u);
					}
					dispose() {
						this.b.disconnect(), super.dispose();
					}
				}
				e.$krb = d;
			},
		),
		define(
			de[1174],
			he([1, 0, 15, 6, 3, 197, 28]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iq = e.$hq = e.StorageState = e.StorageHint = void 0),
					(e.$gq = m);
				var d;
				(function (h) {
					(h[(h.STORAGE_DOES_NOT_EXIST = 0)] = "STORAGE_DOES_NOT_EXIST"),
						(h[(h.STORAGE_IN_MEMORY = 1)] = "STORAGE_IN_MEMORY");
				})(d || (e.StorageHint = d = {}));
				function m(h) {
					const c = h;
					return c?.changed instanceof Map || c?.deleted instanceof Set;
				}
				var r;
				(function (h) {
					(h[(h.None = 0)] = "None"),
						(h[(h.Initialized = 1)] = "Initialized"),
						(h[(h.Closed = 2)] = "Closed");
				})(r || (e.StorageState = r = {}));
				class u extends w.$1c {
					static {
						this.a = 100;
					}
					constructor(c, n = Object.create(null)) {
						super(),
							(this.q = c),
							(this.r = n),
							(this.b = this.D(new i.$ue())),
							(this.onDidChangeStorage = this.b.event),
							(this.c = r.None),
							(this.f = new Map()),
							(this.g = this.D(new t.$Kh(u.a))),
							(this.h = new Set()),
							(this.j = new Map()),
							(this.m = void 0),
							(this.n = []),
							this.s();
					}
					s() {
						this.D(this.q.onDidChangeItemsExternal((c) => this.t(c)));
					}
					t(c) {
						this.b.pause();
						try {
							c.changed?.forEach((n, g) => this.u(g, n)),
								c.deleted?.forEach((n) => this.u(n, void 0));
						} finally {
							this.b.resume();
						}
					}
					u(c, n) {
						if (this.c === r.Closed) return;
						let g = !1;
						(0, C.$ug)(n)
							? (g = this.f.delete(c))
							: this.f.get(c) !== n && (this.f.set(c, n), (g = !0)),
							g && this.b.fire({ key: c, external: !0 });
					}
					get items() {
						return this.f;
					}
					get size() {
						return this.f.size;
					}
					async init() {
						this.c === r.None &&
							((this.c = r.Initialized),
							this.r.hint !== d.STORAGE_DOES_NOT_EXIST &&
								(this.f = await this.q.getItems()));
					}
					cursorDiskKVGet(c) {
						return this.q.cursorDiskKVGet(c);
					}
					cursorDiskKVSet(c, n) {
						return this.q.cursorDiskKVSet(c, n);
					}
					get(c, n) {
						const g = this.f.get(c);
						return (0, C.$ug)(g) ? n : g;
					}
					getBoolean(c, n) {
						const g = this.get(c);
						return (0, C.$ug)(g) ? n : g === "true";
					}
					getNumber(c, n) {
						const g = this.get(c);
						return (0, C.$ug)(g) ? n : parseInt(g, 10);
					}
					getObject(c, n) {
						const g = this.get(c);
						return (0, C.$ug)(g) ? n : (0, E.$ii)(g);
					}
					async set(c, n, g = !1) {
						if (this.c === r.Closed) return;
						if ((0, C.$ug)(n)) return this.delete(c, g);
						const p =
							(0, C.$ng)(n) || Array.isArray(n) ? (0, E.$hi)(n) : String(n);
						if (this.f.get(c) !== p)
							return (
								this.f.set(c, p),
								this.j.set(c, p),
								this.h.delete(c),
								this.b.fire({ key: c, external: g }),
								this.C()
							);
					}
					async delete(c, n = !1) {
						if (!(this.c === r.Closed || !this.f.delete(c)))
							return (
								this.h.has(c) || this.h.add(c),
								this.j.delete(c),
								this.b.fire({ key: c, external: n }),
								this.C()
							);
					}
					async optimize() {
						if (this.c !== r.Closed)
							return await this.flush(0), this.q.optimize();
					}
					async close() {
						return this.m || (this.m = this.w()), this.m;
					}
					async w() {
						this.c = r.Closed;
						try {
							await this.C(0);
						} catch {}
						await this.q.close(() => this.f);
					}
					get y() {
						return this.j.size > 0 || this.h.size > 0;
					}
					async z() {
						if (!this.y) return;
						const c = { insert: this.j, delete: this.h };
						return (
							(this.h = new Set()),
							(this.j = new Map()),
							this.q.updateItems(c).finally(() => {
								if (!this.y) for (; this.n.length; ) this.n.pop()?.();
							})
						);
					}
					async flush(c) {
						if (!(this.c === r.Closed || this.m)) return this.C(c);
					}
					async C(c) {
						return this.r.hint === d.STORAGE_IN_MEMORY
							? this.z()
							: this.g.trigger(() => this.z(), c);
					}
					async whenFlushed() {
						if (this.y) return new Promise((c) => this.n.push(c));
					}
					isInMemory() {
						return this.r.hint === d.STORAGE_IN_MEMORY;
					}
				}
				e.$hq = u;
				class a {
					constructor() {
						(this.onDidChangeItemsExternal = i.Event.None),
							(this.a = new Map());
					}
					async getItems() {
						return this.a;
					}
					async cursorDiskKVGet(c) {}
					async cursorDiskKVSet(c, n) {}
					async updateItems(c) {
						c.insert?.forEach((n, g) => this.a.set(g, n)),
							c.delete?.forEach((n) => this.a.delete(n));
					}
					async optimize() {}
					async close() {}
				}
				e.$iq = a;
			},
		),
		