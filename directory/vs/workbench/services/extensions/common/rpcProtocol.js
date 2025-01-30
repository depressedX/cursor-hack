import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marshallingIds.js';
import '../../../../base/common/uriIpc.js';
import './lazyPromise.js';
import './proxyIdentifier.js';
define(
			de[1821],
			he([1, 0, 15, 76, 33, 120, 29, 6, 3, 221, 1172, 3335, 622]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*buffer*/,
 w /*cancellation*/,
 E /*charCode*/,
 C /*errors*/,
 d /*event*/,
 m /*lifecycle*/,
 r /*marshallingIds*/,
 u /*uriIpc*/,
 a /*lazyPromise*/,
 h /*proxyIdentifier*/) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q4c = e.ResponsiveState = e.RequestInitiator = void 0),
					(e.$O4c = f),
					(e.$P4c = b),
					(C = mt(C));
				function n(A, R) {
					try {
						return JSON.stringify(A, R);
					} catch {
						return "null";
					}
				}
				const g = "$$ref$$",
					p = { [g]: -1 };
				class o {
					constructor(R, O) {
						(this.jsonString = R), (this.referencedBuffers = O);
					}
				}
				function f(A, R = null, O = !1) {
					const B = [];
					return {
						jsonString: (O ? n : JSON.stringify)(A, (z, F) => {
							if (typeof F > "u") return p;
							if (typeof F == "object") {
								if (F instanceof i.$Te) {
									const x = B.push(F) - 1;
									return { [g]: x };
								}
								if (R) return R(z, F);
							}
							return F;
						}),
						referencedBuffers: B,
					};
				}
				function b(A, R, O) {
					return JSON.parse(A, (B, U) => {
						if (U) {
							const z = U[g];
							if (typeof z == "number") return R[z];
							if (O && U.$mid === r.MarshalledId.Uri)
								return O.transformIncoming(U);
						}
						return U;
					});
				}
				function s(A, R) {
					return JSON.stringify(A, R);
				}
				function l(A) {
					return A
						? (R, O) =>
								O && O.$mid === r.MarshalledId.Uri ? A.transformOutgoing(O) : O
						: null;
				}
				var y;
				(function (A) {
					(A[(A.LocalSide = 0)] = "LocalSide"),
						(A[(A.OtherSide = 1)] = "OtherSide");
				})(y || (e.RequestInitiator = y = {}));
				var $;
				(function (A) {
					(A[(A.Responsive = 0)] = "Responsive"),
						(A[(A.Unresponsive = 1)] = "Unresponsive");
				})($ || (e.ResponsiveState = $ = {}));
				const v = () => {},
					S = Symbol.for("rpcProtocol"),
					I = Symbol.for("rpcProxy");
				class T extends m.$1c {
					static {
						c = S;
					}
					static {
						this.a = 3 * 1e3;
					}
					constructor(R, O = null, B = null) {
						super(),
							(this[c] = !0),
							(this.b = this.D(new d.$re())),
							(this.onDidChangeResponsiveState = this.b.event),
							(this.c = R),
							(this.f = O),
							(this.g = B),
							(this.h = l(this.g)),
							(this.j = !1),
							(this.m = []),
							(this.q = []);
						for (let U = 0, z = h.$rO.count; U < z; U++)
							(this.m[U] = null), (this.q[U] = null);
						(this.s = 0),
							(this.t = Object.create(null)),
							(this.u = {}),
							(this.w = $.Responsive),
							(this.y = 0),
							(this.z = 0),
							(this.C = this.D(new t.$Yh(() => this.H(), 1e3))),
							this.D(this.c.onMessage((U) => this.L(U)));
					}
					dispose() {
						(this.j = !0),
							Object.keys(this.u).forEach((R) => {
								const O = this.u[R];
								delete this.u[R], O.resolveErr(C.$0());
							}),
							super.dispose();
					}
					drain() {
						return typeof this.c.drain == "function"
							? this.c.drain()
							: Promise.resolve();
					}
					F(R) {
						this.y === 0 && (this.z = Date.now() + T.a),
							this.y++,
							this.C.isScheduled() || this.C.schedule();
					}
					G(R) {
						(this.z = Date.now() + T.a),
							this.y--,
							this.y === 0 && this.C.cancel(),
							this.I($.Responsive);
					}
					H() {
						this.y !== 0 &&
							(Date.now() > this.z
								? this.I($.Unresponsive)
								: this.C.schedule());
					}
					I(R) {
						this.w !== R && ((this.w = R), this.b.fire(this.w));
					}
					get responsiveState() {
						return this.w;
					}
					transformIncomingURIs(R) {
						return this.g ? (0, u.$5n)(R, this.g) : R;
					}
					getProxy(R) {
						const { nid: O, sid: B } = R;
						return this.q[O] || (this.q[O] = this.J(O, B)), this.q[O];
					}
					J(R, O) {
						const B = {
							get: (U, z) => (
								typeof z == "string" &&
									!U[z] &&
									z.charCodeAt(0) === E.CharCode.DollarSign &&
									(U[z] = (...F) => this.U(R, z, F)),
								z === I ? O : U[z]
							),
						};
						return new Proxy(Object.create(null), B);
					}
					set(R, O) {
						return (this.m[R.nid] = O), O;
					}
					assertRegistered(R) {
						for (let O = 0, B = R.length; O < B; O++) {
							const U = R[O];
							if (!this.m[U.nid])
								throw new Error(`Missing proxy instance ${U.sid}`);
						}
					}
					L(R) {
						if (this.j) return;
						const O = R.byteLength,
							B = k.read(R, 0),
							U = B.readUInt8(),
							z = B.readUInt32();
						switch (U) {
							case M.RequestJSONArgs:
							case M.RequestJSONArgsWithCancellation: {
								let {
									rpcId: F,
									method: x,
									args: H,
								} = D.deserializeRequestJSONArgs(B);
								this.g && (H = (0, u.$5n)(H, this.g)),
									this.M(
										O,
										z,
										F,
										x,
										H,
										U === M.RequestJSONArgsWithCancellation,
									);
								break;
							}
							case M.RequestMixedArgs:
							case M.RequestMixedArgsWithCancellation: {
								let {
									rpcId: F,
									method: x,
									args: H,
								} = D.deserializeRequestMixedArgs(B);
								this.g && (H = (0, u.$5n)(H, this.g)),
									this.M(
										O,
										z,
										F,
										x,
										H,
										U === M.RequestMixedArgsWithCancellation,
									);
								break;
							}
							case M.Acknowledged: {
								this.f?.logIncoming(O, z, y.LocalSide, "ack"), this.G(z);
								break;
							}
							case M.Cancel: {
								this.N(O, z);
								break;
							}
							case M.ReplyOKEmpty: {
								this.O(O, z, void 0);
								break;
							}
							case M.ReplyOKJSON: {
								let F = D.deserializeReplyOKJSON(B);
								this.g && (F = (0, u.$5n)(F, this.g)), this.O(O, z, F);
								break;
							}
							case M.ReplyOKJSONWithBuffers: {
								const F = D.deserializeReplyOKJSONWithBuffers(B, this.g);
								this.O(O, z, F);
								break;
							}
							case M.ReplyOKVSBuffer: {
								const F = D.deserializeReplyOKVSBuffer(B);
								this.O(O, z, F);
								break;
							}
							case M.ReplyErrError: {
								let F = D.deserializeReplyErrError(B);
								this.g && (F = (0, u.$5n)(F, this.g)), this.P(O, z, F);
								break;
							}
							case M.ReplyErrEmpty: {
								this.P(O, z, void 0);
								break;
							}
							default:
								console.error("received unexpected message"), console.error(R);
						}
					}
					M(R, O, B, U, z, F) {
						this.f?.logIncoming(
							R,
							O,
							y.OtherSide,
							`receiveRequest ${(0, h.$tO)(B)}.${U}(`,
							z,
						);
						const x = String(O);
						let H, q;
						if (F) {
							const G = new w.$Ce();
							z.push(G.token), (H = this.Q(B, U, z)), (q = () => G.cancel());
						} else (H = this.Q(B, U, z)), (q = v);
						this.t[x] = q;
						const V = D.serializeAcknowledged(O);
						this.f?.logOutgoing(V.byteLength, O, y.OtherSide, "ack"),
							this.c.send(V),
							H.then(
								(G) => {
									delete this.t[x];
									const K = D.serializeReplyOK(O, G, this.h);
									this.f?.logOutgoing(
										K.byteLength,
										O,
										y.OtherSide,
										"reply:",
										G,
									),
										this.c.send(K);
								},
								(G) => {
									delete this.t[x];
									const K = D.serializeReplyErr(O, G);
									this.f?.logOutgoing(
										K.byteLength,
										O,
										y.OtherSide,
										"replyErr:",
										G,
									),
										this.c.send(K);
								},
							);
					}
					N(R, O) {
						this.f?.logIncoming(R, O, y.OtherSide, "receiveCancel");
						const B = String(O);
						this.t[B]?.();
					}
					O(R, O, B) {
						this.f?.logIncoming(R, O, y.LocalSide, "receiveReply:", B);
						const U = String(O);
						if (!this.u.hasOwnProperty(U)) return;
						const z = this.u[U];
						delete this.u[U], z.resolveOk(B);
					}
					P(R, O, B) {
						this.f?.logIncoming(R, O, y.LocalSide, "receiveReplyErr:", B);
						const U = String(O);
						if (!this.u.hasOwnProperty(U)) return;
						const z = this.u[U];
						delete this.u[U];
						let F;
						B &&
							(B.$isError
								? ((F = new Error()),
									(F.name = B.name),
									(F.message = B.message),
									(F.stack = B.stack))
								: (F = B)),
							z.resolveErr(F);
					}
					Q(R, O, B) {
						try {
							return Promise.resolve(this.S(R, O, B));
						} catch (U) {
							return Promise.reject(U);
						}
					}
					S(R, O, B) {
						const U = this.m[R];
						if (!U) throw new Error("Unknown actor " + (0, h.$tO)(R));
						const z = U[O];
						if (typeof z != "function")
							throw new Error(
								"Unknown method " + O + " on actor " + (0, h.$tO)(R),
							);
						return z.apply(U, B);
					}
					U(R, O, B) {
						if (this.j) return new a.$N4c();
						let U = null;
						if (
							(B.length > 0 &&
								w.CancellationToken.isCancellationToken(B[B.length - 1]) &&
								(U = B.pop()),
							U && U.isCancellationRequested)
						)
							return Promise.reject(C.$0());
						const z = D.serializeRequestArguments(B, this.h),
							F = ++this.s,
							x = String(F),
							H = new a.$M4c(),
							q = new m.$Zc();
						U &&
							q.add(
								U.onCancellationRequested(() => {
									const G = D.serializeCancel(F);
									this.f?.logOutgoing(G.byteLength, F, y.LocalSide, "cancel"),
										this.c.send(D.serializeCancel(F));
								}),
							),
							(this.u[x] = new P(H, q)),
							this.F(F);
						const V = D.serializeRequest(F, R, O, z, !!U);
						return (
							this.f?.logOutgoing(
								V.byteLength,
								F,
								y.LocalSide,
								`request: ${(0, h.$tO)(R)}.${O}(`,
								B,
							),
							this.c.send(V),
							H
						);
					}
				}
				e.$Q4c = T;
				class P {
					constructor(R, O) {
						(this.a = R), (this.b = O);
					}
					resolveOk(R) {
						this.a.resolveOk(R), this.b.dispose();
					}
					resolveErr(R) {
						this.a.resolveErr(R), this.b.dispose();
					}
				}
				class k {
					static alloc(R, O, B) {
						const U = new k(i.$Te.alloc(B + 1 + 4), 0);
						return U.writeUInt8(R), U.writeUInt32(O), U;
					}
					static read(R, O) {
						return new k(R, O);
					}
					get buffer() {
						return this.a;
					}
					constructor(R, O) {
						(this.a = R), (this.b = O);
					}
					static sizeUInt8() {
						return 1;
					}
					static {
						this.sizeUInt32 = 4;
					}
					writeUInt8(R) {
						this.a.writeUInt8(R, this.b), (this.b += 1);
					}
					readUInt8() {
						const R = this.a.readUInt8(this.b);
						return (this.b += 1), R;
					}
					writeUInt32(R) {
						this.a.writeUInt32BE(R, this.b), (this.b += 4);
					}
					readUInt32() {
						const R = this.a.readUInt32BE(this.b);
						return (this.b += 4), R;
					}
					static sizeShortString(R) {
						return 1 + R.byteLength;
					}
					writeShortString(R) {
						this.a.writeUInt8(R.byteLength, this.b),
							(this.b += 1),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					readShortString() {
						const R = this.a.readUInt8(this.b);
						this.b += 1;
						const B = this.a.slice(this.b, this.b + R).toString();
						return (this.b += R), B;
					}
					static sizeLongString(R) {
						return 4 + R.byteLength;
					}
					writeLongString(R) {
						this.a.writeUInt32BE(R.byteLength, this.b),
							(this.b += 4),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					readLongString() {
						const R = this.a.readUInt32BE(this.b);
						this.b += 4;
						const B = this.a.slice(this.b, this.b + R).toString();
						return (this.b += R), B;
					}
					writeBuffer(R) {
						this.a.writeUInt32BE(R.byteLength, this.b),
							(this.b += 4),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					static sizeVSBuffer(R) {
						return 4 + R.byteLength;
					}
					writeVSBuffer(R) {
						this.a.writeUInt32BE(R.byteLength, this.b),
							(this.b += 4),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					readVSBuffer() {
						const R = this.a.readUInt32BE(this.b);
						this.b += 4;
						const O = this.a.slice(this.b, this.b + R);
						return (this.b += R), O;
					}
					static sizeMixedArray(R) {
						let O = 0;
						O += 1;
						for (let B = 0, U = R.length; B < U; B++) {
							const z = R[B];
							switch (((O += 1), z.type)) {
								case N.String:
									O += this.sizeLongString(z.value);
									break;
								case N.VSBuffer:
									O += this.sizeVSBuffer(z.value);
									break;
								case N.SerializedObjectWithBuffers:
									(O += this.sizeUInt32), (O += this.sizeLongString(z.value));
									for (let F = 0; F < z.buffers.length; ++F)
										O += this.sizeVSBuffer(z.buffers[F]);
									break;
								case N.Undefined:
									break;
							}
						}
						return O;
					}
					writeMixedArray(R) {
						this.a.writeUInt8(R.length, this.b), (this.b += 1);
						for (let O = 0, B = R.length; O < B; O++) {
							const U = R[O];
							switch (U.type) {
								case N.String:
									this.writeUInt8(N.String), this.writeLongString(U.value);
									break;
								case N.VSBuffer:
									this.writeUInt8(N.VSBuffer), this.writeVSBuffer(U.value);
									break;
								case N.SerializedObjectWithBuffers:
									this.writeUInt8(N.SerializedObjectWithBuffers),
										this.writeUInt32(U.buffers.length),
										this.writeLongString(U.value);
									for (let z = 0; z < U.buffers.length; ++z)
										this.writeBuffer(U.buffers[z]);
									break;
								case N.Undefined:
									this.writeUInt8(N.Undefined);
									break;
							}
						}
					}
					readMixedArray() {
						const R = this.a.readUInt8(this.b);
						this.b += 1;
						const O = new Array(R);
						for (let B = 0; B < R; B++)
							switch (this.readUInt8()) {
								case N.String:
									O[B] = this.readLongString();
									break;
								case N.VSBuffer:
									O[B] = this.readVSBuffer();
									break;
								case N.SerializedObjectWithBuffers: {
									const z = this.readUInt32(),
										F = this.readLongString(),
										x = [];
									for (let H = 0; H < z; ++H) x.push(this.readVSBuffer());
									O[B] = new h.$uO(b(F, x, null));
									break;
								}
								case N.Undefined:
									O[B] = void 0;
									break;
							}
						return O;
					}
				}
				var L;
				(function (A) {
					(A[(A.Simple = 0)] = "Simple"), (A[(A.Mixed = 1)] = "Mixed");
				})(L || (L = {}));
				class D {
					static a(R) {
						for (let O = 0, B = R.length; O < B; O++)
							if (
								R[O] instanceof i.$Te ||
								R[O] instanceof h.$uO ||
								typeof R[O] > "u"
							)
								return !0;
						return !1;
					}
					static serializeRequestArguments(R, O) {
						if (this.a(R)) {
							const B = [];
							for (let U = 0, z = R.length; U < z; U++) {
								const F = R[U];
								if (F instanceof i.$Te) B[U] = { type: N.VSBuffer, value: F };
								else if (typeof F > "u") B[U] = { type: N.Undefined };
								else if (F instanceof h.$uO) {
									const { jsonString: x, referencedBuffers: H } = f(F.value, O);
									B[U] = {
										type: N.SerializedObjectWithBuffers,
										value: i.$Te.fromString(x),
										buffers: H,
									};
								} else
									B[U] = { type: N.String, value: i.$Te.fromString(s(F, O)) };
							}
							return { type: L.Mixed, args: B };
						}
						return { type: L.Simple, args: s(R, O) };
					}
					static serializeRequest(R, O, B, U, z) {
						switch (U.type) {
							case L.Simple:
								return this.b(R, O, B, U.args, z);
							case L.Mixed:
								return this.c(R, O, B, U.args, z);
						}
					}
					static b(R, O, B, U, z) {
						const F = i.$Te.fromString(B),
							x = i.$Te.fromString(U);
						let H = 0;
						(H += k.sizeUInt8()),
							(H += k.sizeShortString(F)),
							(H += k.sizeLongString(x));
						const q = k.alloc(
							z ? M.RequestJSONArgsWithCancellation : M.RequestJSONArgs,
							R,
							H,
						);
						return (
							q.writeUInt8(O),
							q.writeShortString(F),
							q.writeLongString(x),
							q.buffer
						);
					}
					static deserializeRequestJSONArgs(R) {
						const O = R.readUInt8(),
							B = R.readShortString(),
							U = R.readLongString();
						return { rpcId: O, method: B, args: JSON.parse(U) };
					}
					static c(R, O, B, U, z) {
						const F = i.$Te.fromString(B);
						let x = 0;
						(x += k.sizeUInt8()),
							(x += k.sizeShortString(F)),
							(x += k.sizeMixedArray(U));
						const H = k.alloc(
							z ? M.RequestMixedArgsWithCancellation : M.RequestMixedArgs,
							R,
							x,
						);
						return (
							H.writeUInt8(O),
							H.writeShortString(F),
							H.writeMixedArray(U),
							H.buffer
						);
					}
					static deserializeRequestMixedArgs(R) {
						const O = R.readUInt8(),
							B = R.readShortString(),
							U = R.readMixedArray(),
							z = new Array(U.length);
						for (let F = 0, x = U.length; F < x; F++) {
							const H = U[F];
							typeof H == "string" ? (z[F] = JSON.parse(H)) : (z[F] = H);
						}
						return { rpcId: O, method: B, args: z };
					}
					static serializeAcknowledged(R) {
						return k.alloc(M.Acknowledged, R, 0).buffer;
					}
					static serializeCancel(R) {
						return k.alloc(M.Cancel, R, 0).buffer;
					}
					static serializeReplyOK(R, O, B) {
						if (typeof O > "u") return this.d(R);
						if (O instanceof i.$Te) return this.e(R, O);
						if (O instanceof h.$uO) {
							const { jsonString: U, referencedBuffers: z } = f(O.value, B, !0);
							return this.g(R, U, z);
						} else return this.f(R, n(O, B));
					}
					static d(R) {
						return k.alloc(M.ReplyOKEmpty, R, 0).buffer;
					}
					static e(R, O) {
						let B = 0;
						B += k.sizeVSBuffer(O);
						const U = k.alloc(M.ReplyOKVSBuffer, R, B);
						return U.writeVSBuffer(O), U.buffer;
					}
					static deserializeReplyOKVSBuffer(R) {
						return R.readVSBuffer();
					}
					static f(R, O) {
						const B = i.$Te.fromString(O);
						let U = 0;
						U += k.sizeLongString(B);
						const z = k.alloc(M.ReplyOKJSON, R, U);
						return z.writeLongString(B), z.buffer;
					}
					static g(R, O, B) {
						const U = i.$Te.fromString(O);
						let z = 0;
						(z += k.sizeUInt32), (z += k.sizeLongString(U));
						for (const x of B) z += k.sizeVSBuffer(x);
						const F = k.alloc(M.ReplyOKJSONWithBuffers, R, z);
						F.writeUInt32(B.length), F.writeLongString(U);
						for (const x of B) F.writeBuffer(x);
						return F.buffer;
					}
					static deserializeReplyOKJSON(R) {
						const O = R.readLongString();
						return JSON.parse(O);
					}
					static deserializeReplyOKJSONWithBuffers(R, O) {
						const B = R.readUInt32(),
							U = R.readLongString(),
							z = [];
						for (let F = 0; F < B; ++F) z.push(R.readVSBuffer());
						return new h.$uO(b(U, z, O));
					}
					static serializeReplyErr(R, O) {
						const B = O ? n(C.$6(O), null) : void 0;
						if (typeof B != "string") return this.h(R);
						const U = i.$Te.fromString(B);
						let z = 0;
						z += k.sizeLongString(U);
						const F = k.alloc(M.ReplyErrError, R, z);
						return F.writeLongString(U), F.buffer;
					}
					static deserializeReplyErrError(R) {
						const O = R.readLongString();
						return JSON.parse(O);
					}
					static h(R) {
						return k.alloc(M.ReplyErrEmpty, R, 0).buffer;
					}
				}
				var M;
				(function (A) {
					(A[(A.RequestJSONArgs = 1)] = "RequestJSONArgs"),
						(A[(A.RequestJSONArgsWithCancellation = 2)] =
							"RequestJSONArgsWithCancellation"),
						(A[(A.RequestMixedArgs = 3)] = "RequestMixedArgs"),
						(A[(A.RequestMixedArgsWithCancellation = 4)] =
							"RequestMixedArgsWithCancellation"),
						(A[(A.Acknowledged = 5)] = "Acknowledged"),
						(A[(A.Cancel = 6)] = "Cancel"),
						(A[(A.ReplyOKEmpty = 7)] = "ReplyOKEmpty"),
						(A[(A.ReplyOKVSBuffer = 8)] = "ReplyOKVSBuffer"),
						(A[(A.ReplyOKJSON = 9)] = "ReplyOKJSON"),
						(A[(A.ReplyOKJSONWithBuffers = 10)] = "ReplyOKJSONWithBuffers"),
						(A[(A.ReplyErrError = 11)] = "ReplyErrError"),
						(A[(A.ReplyErrEmpty = 12)] = "ReplyErrEmpty");
				})(M || (M = {}));
				var N;
				(function (A) {
					(A[(A.String = 1)] = "String"),
						(A[(A.VSBuffer = 2)] = "VSBuffer"),
						(A[(A.SerializedObjectWithBuffers = 3)] =
							"SerializedObjectWithBuffers"),
						(A[(A.Undefined = 4)] = "Undefined");
				})(N || (N = {}));
			},
		),
		