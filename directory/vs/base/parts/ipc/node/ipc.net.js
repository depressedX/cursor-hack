import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../crypto.js';
import '../../../../../net.js';
import '../../../../../os.js';
import '../../../../../zlib.js';
import '../../../common/buffer.js';
import '../../../common/errors.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/path.js';
import '../../../common/platform.js';
import '../../../common/uuid.js';
import '../common/ipc.js';
import '../common/ipc.net.js';
define(
			Pe[199],
			Ne([1, 0, 635, 105, 106, 636, 22, 12, 4, 3, 18, 13, 38, 136, 107]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Gi = t.$Di = t.$Ci = t.$Bi = void 0),
					(t.$Ei = m),
					(t.$Fi = E),
					(t.$Hi = O),
					(t.$Ii = A);
				const c = 3e4;
				class h {
					traceSocketEvent(L, b) {
						g.SocketDiagnostics.traceSocketEvent(
							this.socket,
							this.debugLabel,
							L,
							b,
						);
					}
					constructor(L, b = "") {
						(this.f = !0),
							(this.debugLabel = b),
							(this.socket = L),
							this.traceSocketEvent(g.SocketDiagnosticsEventType.Created, {
								type: "NodeSocket",
							}),
							(this.a = (D) => {
								if (
									(this.traceSocketEvent(g.SocketDiagnosticsEventType.Error, {
										code: D?.code,
										message: D?.message,
									}),
									D)
								) {
									if (D.code === "EPIPE") return;
									(0, I.$4)(D);
								}
							}),
							this.socket.on("error", this.a);
						let F;
						(this.b = (D) => {
							this.traceSocketEvent(g.SocketDiagnosticsEventType.Close, {
								hadError: D,
							}),
								(this.f = !1),
								F && clearTimeout(F);
						}),
							this.socket.on("close", this.b),
							(this.d = () => {
								this.traceSocketEvent(
									g.SocketDiagnosticsEventType.NodeEndReceived,
								),
									(this.f = !1),
									(F = setTimeout(() => L.destroy(), c));
							}),
							this.socket.on("end", this.d);
					}
					dispose() {
						this.socket.off("error", this.a),
							this.socket.off("close", this.b),
							this.socket.off("end", this.d),
							this.socket.destroy();
					}
					onData(L) {
						const b = (F) => {
							this.traceSocketEvent(g.SocketDiagnosticsEventType.Read, F),
								L(P.$Te.wrap(F));
						};
						return (
							this.socket.on("data", b),
							{ dispose: () => this.socket.off("data", b) }
						);
					}
					onClose(L) {
						const b = (F) => {
							L({
								type: g.SocketCloseEventType.NodeSocketCloseEvent,
								hadError: F,
								error: void 0,
							});
						};
						return (
							this.socket.on("close", b),
							{ dispose: () => this.socket.off("close", b) }
						);
					}
					onEnd(L) {
						const b = () => {
							L();
						};
						return (
							this.socket.on("end", b),
							{ dispose: () => this.socket.off("end", b) }
						);
					}
					write(L) {
						if (!(this.socket.destroyed || !this.f))
							try {
								this.traceSocketEvent(g.SocketDiagnosticsEventType.Write, L),
									this.socket.write(L.buffer, (b) => {
										if (b) {
											if (b.code === "EPIPE") return;
											(0, I.$4)(b);
										}
									});
							} catch (b) {
								if (b.code === "EPIPE") return;
								(0, I.$4)(b);
							}
					}
					end() {
						this.traceSocketEvent(g.SocketDiagnosticsEventType.NodeEndSent),
							this.socket.end();
					}
					drain() {
						return (
							this.traceSocketEvent(
								g.SocketDiagnosticsEventType.NodeDrainBegin,
							),
							new Promise((L, b) => {
								if (this.socket.bufferSize === 0) {
									this.traceSocketEvent(
										g.SocketDiagnosticsEventType.NodeDrainEnd,
									),
										L();
									return;
								}
								const F = () => {
									this.socket.off("close", F),
										this.socket.off("end", F),
										this.socket.off("error", F),
										this.socket.off("timeout", F),
										this.socket.off("drain", F),
										this.traceSocketEvent(
											g.SocketDiagnosticsEventType.NodeDrainEnd,
										),
										L();
								};
								this.socket.on("close", F),
									this.socket.on("end", F),
									this.socket.on("error", F),
									this.socket.on("timeout", F),
									this.socket.on("drain", F);
							})
						);
					}
				}
				t.$Bi = h;
				var $;
				(function (J) {
					(J[(J.MinHeaderByteSize = 2)] = "MinHeaderByteSize"),
						(J[(J.MaxWebSocketMessageLength = 262144)] =
							"MaxWebSocketMessageLength");
				})($ || ($ = {}));
				var T;
				(function (J) {
					(J[(J.PeekHeader = 1)] = "PeekHeader"),
						(J[(J.ReadHeader = 2)] = "ReadHeader"),
						(J[(J.ReadBody = 3)] = "ReadBody"),
						(J[(J.Fin = 4)] = "Fin");
				})(T || (T = {}));
				class a extends n.$1c {
					get permessageDeflate() {
						return this.a.permessageDeflate;
					}
					get recordedInflateBytes() {
						return this.a.recordedInflateBytes;
					}
					traceSocketEvent(L, b) {
						this.socket.traceSocketEvent(L, b);
					}
					constructor(L, b, F, D) {
						super(),
							(this.f = this.D(new l.$re())),
							(this.g = this.D(new l.$re())),
							(this.h = !1),
							(this.j = {
								state: T.PeekHeader,
								readLen: $.MinHeaderByteSize,
								fin: 0,
								compressed: !1,
								firstFrameOfMessage: !0,
								mask: 0,
								opcode: 0,
							}),
							(this.socket = L),
							this.traceSocketEvent(g.SocketDiagnosticsEventType.Created, {
								type: "WebSocketNodeSocket",
								permessageDeflate: b,
								inflateBytesLength: F?.byteLength || 0,
								recordInflateBytes: D,
							}),
							(this.a = this.D(
								new u(this, b, F, D, this.f, (M, z) => this.m(M, z)),
							)),
							this.D(
								this.a.onError((M) => {
									console.error(M),
										(0, I.$4)(M),
										this.g.fire({
											type: g.SocketCloseEventType.NodeSocketCloseEvent,
											hadError: !0,
											error: M,
										});
								}),
							),
							(this.b = new g.$wi()),
							this.D(this.socket.onData((M) => this.n(M))),
							this.D(
								this.socket.onClose(async (M) => {
									this.a.isProcessingReadQueue() &&
										(await l.Event.toPromise(
											this.a.onDidFinishProcessingReadQueue,
										)),
										this.g.fire(M);
								}),
							);
					}
					dispose() {
						this.a.isProcessingWriteQueue()
							? this.D(
									this.a.onDidFinishProcessingWriteQueue(() => {
										this.dispose();
									}),
								)
							: (this.socket.dispose(), super.dispose());
					}
					onData(L) {
						return this.f.event(L);
					}
					onClose(L) {
						return this.g.event(L);
					}
					onEnd(L) {
						return this.socket.onEnd(L);
					}
					write(L) {
						let b = 0;
						for (; b < L.byteLength; )
							this.a.writeMessage(
								L.slice(
									b,
									Math.min(b + $.MaxWebSocketMessageLength, L.byteLength),
								),
								{ compressed: !0, opcode: 2 },
							),
								(b += $.MaxWebSocketMessageLength);
					}
					m(L, { compressed: b, opcode: F }) {
						if (this.h) return;
						this.traceSocketEvent(
							g.SocketDiagnosticsEventType.WebSocketNodeSocketWrite,
							L,
						);
						let D = $.MinHeaderByteSize;
						L.byteLength < 126
							? (D += 0)
							: L.byteLength < 2 ** 16
								? (D += 2)
								: (D += 8);
						const M = P.$Te.alloc(D),
							z = b ? 64 : 0,
							Q = F & 15;
						if ((M.writeUInt8(128 | z | Q, 0), L.byteLength < 126))
							M.writeUInt8(L.byteLength, 1);
						else if (L.byteLength < 2 ** 16) {
							M.writeUInt8(126, 1);
							let H = 1;
							M.writeUInt8((L.byteLength >>> 8) & 255, ++H),
								M.writeUInt8((L.byteLength >>> 0) & 255, ++H);
						} else {
							M.writeUInt8(127, 1);
							let H = 1;
							M.writeUInt8(0, ++H),
								M.writeUInt8(0, ++H),
								M.writeUInt8(0, ++H),
								M.writeUInt8(0, ++H),
								M.writeUInt8((L.byteLength >>> 24) & 255, ++H),
								M.writeUInt8((L.byteLength >>> 16) & 255, ++H),
								M.writeUInt8((L.byteLength >>> 8) & 255, ++H),
								M.writeUInt8((L.byteLength >>> 0) & 255, ++H);
						}
						this.socket.write(P.$Te.concat([M, L]));
					}
					end() {
						(this.h = !0), this.socket.end();
					}
					n(L) {
						if (L.byteLength !== 0) {
							for (this.b.acceptChunk(L); this.b.byteLength >= this.j.readLen; )
								if (this.j.state === T.PeekHeader) {
									const b = this.b.peek(this.j.readLen),
										F = b.readUInt8(0),
										D = (F & 128) >>> 7,
										M = (F & 64) >>> 6,
										z = F & 15,
										Q = b.readUInt8(1),
										H = (Q & 128) >>> 7,
										B = Q & 127;
									(this.j.state = T.ReadHeader),
										(this.j.readLen =
											$.MinHeaderByteSize +
											(H ? 4 : 0) +
											(B === 126 ? 2 : 0) +
											(B === 127 ? 8 : 0)),
										(this.j.fin = D),
										this.j.firstFrameOfMessage && (this.j.compressed = !!M),
										(this.j.firstFrameOfMessage = !!D),
										(this.j.mask = 0),
										(this.j.opcode = z),
										this.traceSocketEvent(
											g.SocketDiagnosticsEventType
												.WebSocketNodeSocketPeekedHeader,
											{
												headerSize: this.j.readLen,
												compressed: this.j.compressed,
												fin: this.j.fin,
												opcode: this.j.opcode,
											},
										);
								} else if (this.j.state === T.ReadHeader) {
									const b = this.b.read(this.j.readLen),
										F = b.readUInt8(1),
										D = (F & 128) >>> 7;
									let M = F & 127,
										z = 1;
									M === 126
										? (M = b.readUInt8(++z) * 2 ** 8 + b.readUInt8(++z))
										: M === 127 &&
											(M =
												b.readUInt8(++z) * 0 +
												b.readUInt8(++z) * 0 +
												b.readUInt8(++z) * 0 +
												b.readUInt8(++z) * 0 +
												b.readUInt8(++z) * 2 ** 24 +
												b.readUInt8(++z) * 2 ** 16 +
												b.readUInt8(++z) * 2 ** 8 +
												b.readUInt8(++z));
									let Q = 0;
									D &&
										(Q =
											b.readUInt8(++z) * 2 ** 24 +
											b.readUInt8(++z) * 2 ** 16 +
											b.readUInt8(++z) * 2 ** 8 +
											b.readUInt8(++z)),
										(this.j.state = T.ReadBody),
										(this.j.readLen = M),
										(this.j.mask = Q),
										this.traceSocketEvent(
											g.SocketDiagnosticsEventType
												.WebSocketNodeSocketPeekedHeader,
											{
												bodySize: this.j.readLen,
												compressed: this.j.compressed,
												fin: this.j.fin,
												mask: this.j.mask,
												opcode: this.j.opcode,
											},
										);
								} else if (this.j.state === T.ReadBody) {
									const b = this.b.read(this.j.readLen);
									this.traceSocketEvent(
										g.SocketDiagnosticsEventType.WebSocketNodeSocketReadData,
										b,
									),
										o(b, this.j.mask),
										this.traceSocketEvent(
											g.SocketDiagnosticsEventType
												.WebSocketNodeSocketUnmaskedData,
											b,
										),
										(this.j.state = T.PeekHeader),
										(this.j.readLen = $.MinHeaderByteSize),
										(this.j.mask = 0),
										this.j.opcode <= 2
											? this.a.acceptFrame(b, this.j.compressed, !!this.j.fin)
											: this.j.opcode === 9 &&
												this.a.writeMessage(b, { compressed: !1, opcode: 10 });
								}
						}
					}
					async drain() {
						this.traceSocketEvent(
							g.SocketDiagnosticsEventType.WebSocketNodeSocketDrainBegin,
						),
							this.a.isProcessingWriteQueue() &&
								(await l.Event.toPromise(
									this.a.onDidFinishProcessingWriteQueue,
								)),
							await this.socket.drain(),
							this.traceSocketEvent(
								g.SocketDiagnosticsEventType.WebSocketNodeSocketDrainEnd,
							);
					}
				}
				t.$Ci = a;
				class u extends n.$1c {
					get permessageDeflate() {
						return !!(this.b && this.f);
					}
					get recordedInflateBytes() {
						return this.b ? this.b.recordedInflateBytes : P.$Te.alloc(0);
					}
					constructor(L, b, F, D, M, z) {
						super(),
							(this.n = L),
							(this.q = M),
							(this.r = z),
							(this.a = this.D(new l.$re())),
							(this.onError = this.a.event),
							(this.g = []),
							(this.h = []),
							(this.j = this.D(new l.$re())),
							(this.onDidFinishProcessingReadQueue = this.j.event),
							(this.m = this.D(new l.$re())),
							(this.onDidFinishProcessingWriteQueue = this.m.event),
							(this.s = !1),
							(this.w = !1),
							b
								? ((this.b = this.D(new s(this.n, D, F, { windowBits: 15 }))),
									(this.f = this.D(new f(this.n, { windowBits: 15 }))),
									this.D(this.b.onError((Q) => this.a.fire(Q))),
									this.D(this.f.onError((Q) => this.a.fire(Q))))
								: ((this.b = null), (this.f = null));
					}
					writeMessage(L, b) {
						this.g.push({ data: L, options: b }), this.t();
					}
					async t() {
						if (!this.s) {
							for (this.s = !0; this.g.length > 0; ) {
								const { data: L, options: b } = this.g.shift();
								if (this.f && b.compressed) {
									const F = await this.u(this.f, L);
									this.r(F, b);
								} else this.r(L, { ...b, compressed: !1 });
							}
							(this.s = !1), this.m.fire();
						}
					}
					isProcessingWriteQueue() {
						return this.s;
					}
					u(L, b) {
						return new Promise((F, D) => {
							L.write(b), L.flush((M) => F(M));
						});
					}
					acceptFrame(L, b, F) {
						this.h.push({ data: L, isCompressed: b, isLastFrameOfMessage: F }),
							this.y();
					}
					async y() {
						if (!this.w) {
							for (this.w = !0; this.h.length > 0; ) {
								const L = this.h.shift();
								if (this.b && L.isCompressed) {
									const b = await this.z(
										this.b,
										L.data,
										L.isLastFrameOfMessage,
									);
									this.q.fire(b);
								} else this.q.fire(L.data);
							}
							(this.w = !1), this.j.fire();
						}
					}
					isProcessingReadQueue() {
						return this.w;
					}
					z(L, b, F) {
						return new Promise((D, M) => {
							L.write(b),
								F && L.write(P.$Te.fromByteArray([0, 0, 255, 255])),
								L.flush((z) => D(z));
						});
					}
				}
				class s extends n.$1c {
					get recordedInflateBytes() {
						return this.j ? P.$Te.concat(this.f) : P.$Te.alloc(0);
					}
					constructor(L, b, F, D) {
						super(),
							(this.h = L),
							(this.j = b),
							(this.a = this.D(new l.$re())),
							(this.onError = this.a.event),
							(this.f = []),
							(this.g = []),
							(this.b = (0, N.createInflateRaw)(D)),
							this.b.on("error", (M) => {
								this.h.traceSocketEvent(
									g.SocketDiagnosticsEventType.zlibInflateError,
									{ message: M?.message, code: M?.code },
								),
									this.a.fire(M);
							}),
							this.b.on("data", (M) => {
								this.h.traceSocketEvent(
									g.SocketDiagnosticsEventType.zlibInflateData,
									M,
								),
									this.g.push(P.$Te.wrap(M));
							}),
							F &&
								(this.h.traceSocketEvent(
									g.SocketDiagnosticsEventType.zlibInflateInitialWrite,
									F.buffer,
								),
								this.b.write(F.buffer),
								this.b.flush(() => {
									this.h.traceSocketEvent(
										g.SocketDiagnosticsEventType.zlibInflateInitialFlushFired,
									),
										(this.g.length = 0);
								}));
					}
					write(L) {
						this.j && this.f.push(L.clone()),
							this.h.traceSocketEvent(
								g.SocketDiagnosticsEventType.zlibInflateWrite,
								L,
							),
							this.b.write(L.buffer);
					}
					flush(L) {
						this.b.flush(() => {
							this.h.traceSocketEvent(
								g.SocketDiagnosticsEventType.zlibInflateFlushFired,
							);
							const b = P.$Te.concat(this.g);
							(this.g.length = 0), L(b);
						});
					}
				}
				class f extends n.$1c {
					constructor(L, b) {
						super(),
							(this.g = L),
							(this.a = this.D(new l.$re())),
							(this.onError = this.a.event),
							(this.f = []),
							(this.b = (0, N.createDeflateRaw)({ windowBits: 15 })),
							this.b.on("error", (F) => {
								this.g.traceSocketEvent(
									g.SocketDiagnosticsEventType.zlibDeflateError,
									{ message: F?.message, code: F?.code },
								),
									this.a.fire(F);
							}),
							this.b.on("data", (F) => {
								this.g.traceSocketEvent(
									g.SocketDiagnosticsEventType.zlibDeflateData,
									F,
								),
									this.f.push(P.$Te.wrap(F));
							});
					}
					write(L) {
						this.g.traceSocketEvent(
							g.SocketDiagnosticsEventType.zlibDeflateWrite,
							L.buffer,
						),
							this.b.write(L.buffer);
					}
					flush(L) {
						this.b.flush(2, () => {
							this.g.traceSocketEvent(
								g.SocketDiagnosticsEventType.zlibDeflateFlushFired,
							);
							let b = P.$Te.concat(this.f);
							(this.f.length = 0), (b = b.slice(0, b.byteLength - 4)), L(b);
						});
					}
				}
				function o(J, L) {
					if (L === 0) return;
					const b = J.byteLength >>> 2;
					for (let H = 0; H < b; H++) {
						const B = J.readUInt32BE(H * 4);
						J.writeUInt32BE(B ^ L, H * 4);
					}
					const F = b * 4,
						D = J.byteLength - F,
						M = (L >>> 24) & 255,
						z = (L >>> 16) & 255,
						Q = (L >>> 8) & 255;
					D >= 1 && J.writeUInt8(J.readUInt8(F) ^ M, F),
						D >= 2 && J.writeUInt8(J.readUInt8(F + 1) ^ z, F + 1),
						D >= 3 && J.writeUInt8(J.readUInt8(F + 2) ^ Q, F + 2);
				}
				t.$Di = process.env.XDG_RUNTIME_DIR;
				const w = { [y.Platform.Linux]: 107, [y.Platform.Mac]: 103 };
				function m() {
					const J = (0, d.$9g)();
					if (process.platform === "win32")
						return `\\\\.\\pipe\\vscode-ipc-${J}-sock`;
					const L =
							process.platform !== "darwin" && t.$Di ? t.$Di : (0, S.tmpdir)(),
						b = (0, p.$oc)(L, `vscode-ipc-${J}.sock`);
					return R(b), b;
				}
				function E(J, L, b) {
					const D = (0, e.createHash)("sha256")
						.update(J)
						.digest("hex")
						.substr(0, 8);
					if (process.platform === "win32")
						return `\\\\.\\pipe\\${D}-${b}-${L}-sock`;
					const M = b.substr(0, 4),
						z = L.substr(0, 6);
					let Q;
					return (
						process.platform !== "darwin" &&
						t.$Di &&
						!process.env.VSCODE_PORTABLE
							? (Q = (0, p.$oc)(t.$Di, `vscode-${D}-${M}-${z}.sock`))
							: (Q = (0, p.$oc)(J, `${M}-${z}.sock`)),
						R(Q),
						Q
					);
				}
				function R(J) {
					const L = w[y.$x];
					typeof L == "number" &&
						J.length >= L &&
						console.warn(
							`WARNING: IPC handle "${J}" is longer than ${L} chars, try a shorter --user-data-dir`,
						);
				}
				class C extends k.$qi {
					static b(L) {
						const b = l.Event.fromNodeEventEmitter(L, "connection");
						return l.Event.map(b, (F) => ({
							protocol: new g.$xi(new h(F, "ipc-server-connection")),
							onDidClientDisconnect: l.Event.once(
								l.Event.fromNodeEventEmitter(F, "close"),
							),
						}));
					}
					constructor(L) {
						super(C.b(L)), (this.d = L);
					}
					dispose() {
						super.dispose(), this.d && (this.d.close(), (this.d = null));
					}
				}
				t.$Gi = C;
				function O(J) {
					return new Promise((L, b) => {
						const F = (0, r.createServer)();
						F.on("error", b),
							F.listen(J, () => {
								F.removeListener("error", b), L(new C(F));
							});
					});
				}
				function A(J, L) {
					return new Promise((b, F) => {
						const D = (0, r.createConnection)(J, () => {
							D.removeListener("error", F),
								b(g.$yi.fromSocket(new h(D, `ipc-client${L}`), L));
						});
						D.once("error", F);
					});
				}
			},
		),
		