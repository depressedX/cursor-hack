import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/arrays.js';
import '../../../common/async.js';
import '../../../common/buffer.js';
import '../../../common/cancellation.js';
import '../../../common/decorators.js';
import '../../../common/errors.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/marshalling.js';
import '../../../common/strings.js';
import '../../../common/types.js';
define(
			de[305],
			he([1, 0, 24, 15, 76, 33, 138, 29, 6, 3, 197, 37, 28]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*async*/,
 w /*buffer*/,
 E /*cancellation*/,
 C /*decorators*/,
 d /*errors*/,
 m /*event*/,
 r /*lifecycle*/,
 u /*marshalling*/,
 a /*strings*/,
 h /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vi =
						e.ProxyChannel =
						e.$ui =
						e.$ri =
						e.$qi =
						e.$pi =
						e.RequestInitiator =
						e.$oi =
						e.$li =
						e.$ki =
							void 0),
					(e.$mi = T),
					(e.$ni = P),
					(e.$si = A),
					(e.$ti = R),
					(a = mt(a));
				var c;
				(function (q) {
					(q[(q.Promise = 100)] = "Promise"),
						(q[(q.PromiseCancel = 101)] = "PromiseCancel"),
						(q[(q.EventListen = 102)] = "EventListen"),
						(q[(q.EventDispose = 103)] = "EventDispose");
				})(c || (c = {}));
				function n(q) {
					switch (q) {
						case c.Promise:
							return "req";
						case c.PromiseCancel:
							return "cancel";
						case c.EventListen:
							return "subscribe";
						case c.EventDispose:
							return "unsubscribe";
					}
				}
				var g;
				(function (q) {
					(q[(q.Initialize = 200)] = "Initialize"),
						(q[(q.PromiseSuccess = 201)] = "PromiseSuccess"),
						(q[(q.PromiseError = 202)] = "PromiseError"),
						(q[(q.PromiseErrorObj = 203)] = "PromiseErrorObj"),
						(q[(q.EventFire = 204)] = "EventFire");
				})(g || (g = {}));
				function p(q) {
					switch (q) {
						case g.Initialize:
							return "init";
						case g.PromiseSuccess:
							return "reply:";
						case g.PromiseError:
						case g.PromiseErrorObj:
							return "replyErr:";
						case g.EventFire:
							return "event:";
					}
				}
				var o;
				(function (q) {
					(q[(q.Uninitialized = 0)] = "Uninitialized"),
						(q[(q.Idle = 1)] = "Idle");
				})(o || (o = {}));
				function f(q) {
					let V = 0;
					for (let G = 0; ; G += 7) {
						const K = q.read(1);
						if (((V |= (K.buffer[0] & 127) << G), !(K.buffer[0] & 128)))
							return V;
					}
				}
				const b = v(0);
				function s(q, V) {
					if (V === 0) {
						q.write(b);
						return;
					}
					let G = 0;
					for (let J = V; J !== 0; J = J >>> 7) G++;
					const K = w.$Te.alloc(G);
					for (let J = 0; V !== 0; J++)
						(K.buffer[J] = V & 127),
							(V = V >>> 7),
							V > 0 && (K.buffer[J] |= 128);
					q.write(K);
				}
				class l {
					constructor(V) {
						(this.b = V), (this.a = 0);
					}
					read(V) {
						const G = this.b.slice(this.a, this.a + V);
						return (this.a += G.byteLength), G;
					}
				}
				e.$ki = l;
				class y {
					constructor() {
						this.a = [];
					}
					get buffer() {
						return w.$Te.concat(this.a);
					}
					write(V) {
						this.a.push(V);
					}
				}
				e.$li = y;
				var $;
				(function (q) {
					(q[(q.Undefined = 0)] = "Undefined"),
						(q[(q.String = 1)] = "String"),
						(q[(q.Buffer = 2)] = "Buffer"),
						(q[(q.VSBuffer = 3)] = "VSBuffer"),
						(q[(q.Array = 4)] = "Array"),
						(q[(q.Object = 5)] = "Object"),
						(q[(q.Int = 6)] = "Int");
				})($ || ($ = {}));
				function v(q) {
					const V = w.$Te.alloc(1);
					return V.writeUInt8(q, 0), V;
				}
				const S = {
						Undefined: v($.Undefined),
						String: v($.String),
						Buffer: v($.Buffer),
						VSBuffer: v($.VSBuffer),
						Array: v($.Array),
						Object: v($.Object),
						Uint: v($.Int),
					},
					I = typeof Buffer < "u";
				function T(q, V) {
					if (typeof V > "u") q.write(S.Undefined);
					else if (typeof V == "string") {
						const G = w.$Te.fromString(V);
						q.write(S.String), s(q, G.byteLength), q.write(G);
					} else if (I && Buffer.isBuffer(V)) {
						const G = w.$Te.wrap(V);
						q.write(S.Buffer), s(q, G.byteLength), q.write(G);
					} else if (V instanceof w.$Te)
						q.write(S.VSBuffer), s(q, V.byteLength), q.write(V);
					else if (Array.isArray(V)) {
						q.write(S.Array), s(q, V.length);
						for (const G of V) T(q, G);
					} else if (typeof V == "number" && (V | 0) === V)
						q.write(S.Uint), s(q, V);
					else {
						const G = w.$Te.fromString(JSON.stringify(V));
						q.write(S.Object), s(q, G.byteLength), q.write(G);
					}
				}
				function P(q) {
					switch (q.read(1).readUInt8(0)) {
						case $.Undefined:
							return;
						case $.String:
							return q.read(f(q)).toString();
						case $.Buffer:
							return q.read(f(q)).buffer;
						case $.VSBuffer:
							return q.read(f(q));
						case $.Array: {
							const G = f(q),
								K = [];
							for (let J = 0; J < G; J++) K.push(P(q));
							return K;
						}
						case $.Object:
							return JSON.parse(q.read(f(q)).toString());
						case $.Int:
							return f(q);
					}
				}
				class k {
					constructor(V, G, K = null, J = 1e3) {
						(this.h = V),
							(this.j = G),
							(this.k = K),
							(this.l = J),
							(this.b = new Map()),
							(this.d = new Map()),
							(this.g = new Map()),
							(this.f = this.h.onMessage((W) => this.q(W))),
							this.m({ type: g.Initialize });
					}
					registerChannel(V, G) {
						this.b.set(V, G), setTimeout(() => this.w(V), 0);
					}
					m(V) {
						switch (V.type) {
							case g.Initialize: {
								const G = this.o([V.type]);
								this.k?.logOutgoing(G, 0, L.OtherSide, p(V.type));
								return;
							}
							case g.PromiseSuccess:
							case g.PromiseError:
							case g.EventFire:
							case g.PromiseErrorObj: {
								const G = this.o([V.type, V.id], V.data);
								this.k?.logOutgoing(G, V.id, L.OtherSide, p(V.type), V.data);
								return;
							}
						}
					}
					o(V, G = void 0) {
						const K = new y();
						return T(K, V), T(K, G), this.p(K.buffer);
					}
					p(V) {
						try {
							return this.h.send(V), V.byteLength;
						} catch {
							return 0;
						}
					}
					q(V) {
						const G = new l(V),
							K = P(G),
							J = P(G),
							W = K[0];
						switch (W) {
							case c.Promise:
								return (
									this.k?.logIncoming(
										V.byteLength,
										K[1],
										L.OtherSide,
										`${n(W)}: ${K[2]}.${K[3]}`,
										J,
									),
									this.s({
										type: W,
										id: K[1],
										channelName: K[2],
										name: K[3],
										arg: J,
									})
								);
							case c.EventListen:
								return (
									this.k?.logIncoming(
										V.byteLength,
										K[1],
										L.OtherSide,
										`${n(W)}: ${K[2]}.${K[3]}`,
										J,
									),
									this.t({
										type: W,
										id: K[1],
										channelName: K[2],
										name: K[3],
										arg: J,
									})
								);
							case c.PromiseCancel:
								return (
									this.k?.logIncoming(
										V.byteLength,
										K[1],
										L.OtherSide,
										`${n(W)}`,
									),
									this.u({ type: W, id: K[1] })
								);
							case c.EventDispose:
								return (
									this.k?.logIncoming(
										V.byteLength,
										K[1],
										L.OtherSide,
										`${n(W)}`,
									),
									this.u({ type: W, id: K[1] })
								);
						}
					}
					s(V) {
						const G = this.b.get(V.channelName);
						if (!G) {
							this.v(V);
							return;
						}
						const K = new E.$Ce();
						let J;
						try {
							J = G.call(this.j, V.name, V.arg, K.token);
						} catch (Y) {
							J = Promise.reject(Y);
						}
						const W = V.id;
						J.then(
							(Y) => {
								this.m({ id: W, data: Y, type: g.PromiseSuccess });
							},
							(Y) => {
								Y instanceof Error
									? this.m({
											id: W,
											data: {
												message: Y.message,
												name: Y.name,
												stack: Y.stack
													? Y.stack.split(`
`)
													: void 0,
											},
											type: g.PromiseError,
										})
									: this.m({ id: W, data: Y, type: g.PromiseErrorObj });
							},
						).finally(() => {
							X.dispose(), this.d.delete(V.id);
						});
						const X = (0, r.$Yc)(() => K.cancel());
						this.d.set(V.id, X);
					}
					t(V) {
						const G = this.b.get(V.channelName);
						if (!G) {
							this.v(V);
							return;
						}
						const K = V.id,
							W = G.listen(
								this.j,
								V.name,
								V.arg,
							)((X) => this.m({ id: K, data: X, type: g.EventFire }));
						this.d.set(V.id, W);
					}
					u(V) {
						const G = this.d.get(V.id);
						G && (G.dispose(), this.d.delete(V.id));
					}
					v(V) {
						let G = this.g.get(V.channelName);
						G || ((G = []), this.g.set(V.channelName, G));
						const K = setTimeout(() => {
							console.error(`Unknown channel: ${V.channelName}`),
								V.type === c.Promise &&
									this.m({
										id: V.id,
										data: {
											name: "Unknown channel",
											message: `Channel name '${V.channelName}' timed out after ${this.l}ms`,
											stack: void 0,
										},
										type: g.PromiseError,
									});
						}, this.l);
						G.push({ request: V, timeoutTimer: K });
					}
					w(V) {
						const G = this.g.get(V);
						if (G) {
							for (const K of G)
								switch ((clearTimeout(K.timeoutTimer), K.request.type)) {
									case c.Promise:
										this.s(K.request);
										break;
									case c.EventListen:
										this.t(K.request);
										break;
								}
							this.g.delete(V);
						}
					}
					dispose() {
						this.f && (this.f.dispose(), (this.f = null)),
							(0, r.$Vc)(this.d.values()),
							this.d.clear();
					}
				}
				e.$oi = k;
				var L;
				(function (q) {
					(q[(q.LocalSide = 0)] = "LocalSide"),
						(q[(q.OtherSide = 1)] = "OtherSide");
				})(L || (e.RequestInitiator = L = {}));
				class D {
					constructor(V, G = null) {
						(this.l = V),
							(this.a = !1),
							(this.b = o.Uninitialized),
							(this.d = new Set()),
							(this.f = new Map()),
							(this.g = 0),
							(this.k = new m.$re()),
							(this.onDidInitialize = this.k.event),
							(this.h = this.l.onMessage((K) => this.s(K))),
							(this.j = G);
					}
					getChannel(V) {
						const G = this;
						return {
							call(K, J, W) {
								return G.a ? Promise.reject(new d.$9()) : G.m(V, K, J, W);
							},
							listen(K, J) {
								return G.a ? m.Event.None : G.o(V, K, J);
							},
						};
					}
					m(V, G, K, J = E.CancellationToken.None) {
						const W = this.g++,
							X = c.Promise,
							Y = { id: W, type: X, channelName: V, name: G, arg: K };
						if (J.isCancellationRequested) return Promise.reject(new d.$9());
						let ie;
						return new Promise((ee, _) => {
							if (J.isCancellationRequested) return _(new d.$9());
							const te = () => {
								const re = (le) => {
									switch (le.type) {
										case g.PromiseSuccess:
											this.f.delete(W), ee(le.data);
											break;
										case g.PromiseError: {
											this.f.delete(W);
											const oe = new Error(le.data.message);
											(oe.stack = Array.isArray(le.data.stack)
												? le.data.stack.join(`
`)
												: le.data.stack),
												(oe.name = le.data.name),
												_(oe);
											break;
										}
										case g.PromiseErrorObj:
											this.f.delete(W), _(le.data);
											break;
									}
								};
								this.f.set(W, re), this.p(Y);
							};
							let Q = null;
							this.b === o.Idle
								? te()
								: ((Q = (0, i.$zh)((re) => this.u())),
									Q.then(() => {
										(Q = null), te();
									}));
							const Z = () => {
									Q
										? (Q.cancel(), (Q = null))
										: this.p({ id: W, type: c.PromiseCancel }),
										_(new d.$9());
								},
								se = J.onCancellationRequested(Z);
							(ie = (0, r.$Xc)((0, r.$Yc)(Z), se)), this.d.add(ie);
						}).finally(() => {
							ie.dispose(), this.d.delete(ie);
						});
					}
					o(V, G, K) {
						const J = this.g++,
							W = c.EventListen,
							X = { id: J, type: W, channelName: V, name: G, arg: K };
						let Y = null;
						const ie = new m.$re({
								onWillAddFirstListener: () => {
									(Y = (0, i.$zh)((ee) => this.u())),
										Y.then(() => {
											(Y = null), this.d.add(ie), this.p(X);
										});
								},
								onDidRemoveLastListener: () => {
									Y
										? (Y.cancel(), (Y = null))
										: (this.d.delete(ie),
											this.p({ id: J, type: c.EventDispose }));
								},
							}),
							ne = (ee) => ie.fire(ee.data);
						return this.f.set(J, ne), ie.event;
					}
					p(V) {
						switch (V.type) {
							case c.Promise:
							case c.EventListen: {
								const G = this.q([V.type, V.id, V.channelName, V.name], V.arg);
								this.j?.logOutgoing(
									G,
									V.id,
									L.LocalSide,
									`${n(V.type)}: ${V.channelName}.${V.name}`,
									V.arg,
								);
								return;
							}
							case c.PromiseCancel:
							case c.EventDispose: {
								const G = this.q([V.type, V.id]);
								this.j?.logOutgoing(G, V.id, L.LocalSide, n(V.type));
								return;
							}
						}
					}
					q(V, G = void 0) {
						const K = new y();
						return T(K, V), T(K, G), this.r(K.buffer);
					}
					r(V) {
						try {
							return this.l.send(V), V.byteLength;
						} catch {
							return 0;
						}
					}
					s(V) {
						const G = new l(V),
							K = P(G),
							J = P(G),
							W = K[0];
						switch (W) {
							case g.Initialize:
								return (
									this.j?.logIncoming(V.byteLength, 0, L.LocalSide, p(W)),
									this.t({ type: K[0] })
								);
							case g.PromiseSuccess:
							case g.PromiseError:
							case g.EventFire:
							case g.PromiseErrorObj:
								return (
									this.j?.logIncoming(V.byteLength, K[1], L.LocalSide, p(W), J),
									this.t({ type: K[0], id: K[1], data: J })
								);
						}
					}
					t(V) {
						if (V.type === g.Initialize) {
							(this.b = o.Idle), this.k.fire();
							return;
						}
						this.f.get(V.id)?.(V);
					}
					get onDidInitializePromise() {
						return m.Event.toPromise(this.onDidInitialize);
					}
					u() {
						return this.b === o.Idle
							? Promise.resolve()
							: this.onDidInitializePromise;
					}
					dispose() {
						(this.a = !0),
							this.h && (this.h.dispose(), (this.h = null)),
							(0, r.$Vc)(this.d.values()),
							this.d.clear();
					}
				}
				(e.$pi = D), Ne([C.$ei], D.prototype, "onDidInitializePromise", null);
				class M {
					get connections() {
						const V = [];
						return this.f.forEach((G) => V.push(G)), V;
					}
					constructor(V, G, K) {
						(this.a = new Map()),
							(this.f = new Set()),
							(this.g = new m.$re()),
							(this.onDidAddConnection = this.g.event),
							(this.h = new m.$re()),
							(this.onDidRemoveConnection = this.h.event),
							(this.j = new r.$Zc()),
							this.j.add(
								V(({ protocol: J, onDidClientDisconnect: W }) => {
									const X = m.Event.once(J.onMessage);
									this.j.add(
										X((Y) => {
											const ie = new l(Y),
												ne = P(ie),
												ee = new k(J, ne, G, K),
												_ = new D(J, G);
											this.a.forEach((Q, Z) => ee.registerChannel(Z, Q));
											const te = {
												channelServer: ee,
												channelClient: _,
												ctx: ne,
											};
											this.f.add(te),
												this.g.fire(te),
												this.j.add(
													W(() => {
														ee.dispose(),
															_.dispose(),
															this.f.delete(te),
															this.h.fire(te);
													}),
												);
										}),
									);
								}),
							);
					}
					getChannel(V, G) {
						const K = this;
						return {
							call(J, W, X) {
								let Y;
								if ((0, h.$zg)(G)) {
									const ne = (0, t.$7b)(K.connections.filter(G));
									Y = ne
										? Promise.resolve(ne)
										: m.Event.toPromise(
												m.Event.filter(K.onDidAddConnection, G),
											);
								} else Y = G.routeCall(K, J, W);
								const ie = Y.then((ne) => ne.channelClient.getChannel(V));
								return A(ie).call(J, W, X);
							},
							listen(J, W) {
								if ((0, h.$zg)(G)) return K.k(V, G, J, W);
								const X = G.routeEvent(K, J, W).then((Y) =>
									Y.channelClient.getChannel(V),
								);
								return A(X).listen(J, W);
							},
						};
					}
					k(V, G, K, J) {
						const W = this;
						let X;
						const Y = new m.$re({
							onWillAddFirstListener: () => {
								X = new r.$Zc();
								const ie = new m.$xe(),
									ne = new Map(),
									ee = (te) => {
										const Z = te.channelClient.getChannel(V).listen(K, J),
											se = ie.add(Z);
										ne.set(te, se);
									},
									_ = (te) => {
										const Q = ne.get(te);
										Q && (Q.dispose(), ne.delete(te));
									};
								W.connections.filter(G).forEach(ee),
									m.Event.filter(W.onDidAddConnection, G)(ee, void 0, X),
									W.onDidRemoveConnection(_, void 0, X),
									ie.event(Y.fire, Y, X),
									X.add(ie);
							},
							onDidRemoveLastListener: () => {
								X?.dispose(), (X = void 0);
							},
						});
						return Y.event;
					}
					registerChannel(V, G) {
						this.a.set(V, G);
						for (const K of this.f) K.channelServer.registerChannel(V, G);
					}
					dispose() {
						this.j.dispose();
						for (const V of this.f)
							V.channelClient.dispose(), V.channelServer.dispose();
						this.f.clear(), this.a.clear(), this.g.dispose(), this.h.dispose();
					}
				}
				e.$qi = M;
				class N {
					constructor(V, G, K = null) {
						const J = new y();
						T(J, G),
							V.send(J.buffer),
							(this.a = new D(V, K)),
							(this.d = new k(V, G, K));
					}
					getChannel(V) {
						return this.a.getChannel(V);
					}
					registerChannel(V, G) {
						this.d.registerChannel(V, G);
					}
					dispose() {
						this.a.dispose(), this.d.dispose();
					}
				}
				e.$ri = N;
				function A(q) {
					return {
						call(V, G, K) {
							return q.then((J) => J.call(V, G, K));
						},
						listen(V, G) {
							const K = new m.$Ae();
							return q.then((J) => (K.input = J.listen(V, G))), K.event;
						},
					};
				}
				function R(q) {
					let V = !1;
					return {
						call(G, K, J) {
							return V
								? q.call(G, K, J)
								: (0, i.$Nh)(0)
										.then(() => (V = !0))
										.then(() => q.call(G, K, J));
						},
						listen(G, K) {
							if (V) return q.listen(G, K);
							const J = new m.$Ae();
							return (
								(0, i.$Nh)(0)
									.then(() => (V = !0))
									.then(() => (J.input = q.listen(G, K))),
								J.event
							);
						},
					};
				}
				class O {
					constructor(V) {
						this.a = V;
					}
					routeCall(V) {
						return this.b(V);
					}
					routeEvent(V) {
						return this.b(V);
					}
					async b(V) {
						for (const G of V.connections)
							if (await Promise.resolve(this.a(G.ctx)))
								return Promise.resolve(G);
						return (
							await m.Event.toPromise(V.onDidAddConnection), await this.b(V)
						);
					}
				}
				e.$ui = O;
				var B;
				(function (q) {
					function V(W, X, Y) {
						const ie = W,
							ne = Y && Y.disableMarshalling,
							ee = new Map();
						for (const _ in ie)
							K(_) && ee.set(_, m.Event.buffer(ie[_], !0, void 0, X));
						return new (class {
							listen(_, te, Q) {
								const Z = ee.get(te);
								if (Z) return Z;
								const se = ie[te];
								if (typeof se == "function") {
									if (J(te)) return se.call(ie, Q);
									if (K(te))
										return (
											ee.set(te, m.Event.buffer(ie[te], !0, void 0, X)),
											ee.get(te)
										);
								}
								throw new d.$fb(`Event not found: ${te}`);
							}
							call(_, te, Q) {
								const Z = ie[te];
								if (typeof Z == "function") {
									if (!ne && Array.isArray(Q))
										for (let re = 0; re < Q.length; re++)
											Q[re] = (0, u.$ji)(Q[re]);
									let se = Z.apply(ie, Q);
									return (
										se instanceof Promise || (se = Promise.resolve(se)), se
									);
								}
								throw new d.$fb(`Method not found: ${te}`);
							}
						})();
					}
					q.fromService = V;
					function G(W, X) {
						const Y = X && X.disableMarshalling;
						return new Proxy(
							{},
							{
								get(ie, ne) {
									if (typeof ne == "string")
										return X?.properties?.has(ne)
											? X.properties.get(ne)
											: J(ne)
												? function (ee) {
														return W.listen(ne, ee);
													}
												: K(ne)
													? W.listen(ne)
													: async function (...ee) {
															let _;
															X && !(0, h.$ug)(X.context)
																? (_ = [X.context, ...ee])
																: (_ = ee);
															const te = await W.call(ne, _);
															return Y ? te : (0, u.$ji)(te);
														};
									throw new d.$fb(`Property not found: ${String(ne)}`);
								},
							},
						);
					}
					q.toService = G;
					function K(W) {
						return W[0] === "o" && W[1] === "n" && a.$Lf(W.charCodeAt(2));
					}
					function J(W) {
						return /^onDynamic/.test(W) && a.$Lf(W.charCodeAt(9));
					}
				})(B || (e.ProxyChannel = B = {}));
				const U = [
					["#2977B1", "#FC802D", "#34A13A", "#D3282F", "#9366BA"],
					["#8B564C", "#E177C0", "#7F7F7F", "#BBBE3D", "#2EBECD"],
				];
				function z(q) {
					if (Array.isArray(q)) return q;
					if (q && typeof q == "object" && typeof q.toString == "function") {
						const V = q.toString();
						if (V !== "[object Object]") return V;
					}
					return q;
				}
				function F(q) {
					return Array.isArray(q) ? q.map(z) : z(q);
				}
				function x(q, V, G, K, J, W, X) {
					X = F(X);
					const Y = U[J],
						ie = Y[K % Y.length];
					let ne = [
						`%c[${q}]%c[${String(V).padStart(7, " ")}]%c[len: ${String(G).padStart(5, " ")}]%c${String(K).padStart(5, " ")} - ${W}`,
						"color: darkgreen",
						"color: grey",
						"color: grey",
						`color: ${ie}`,
					];
					/\($/.test(W) ? ((ne = ne.concat(X)), ne.push(")")) : ne.push(X),
						console.log.apply(console, ne);
				}
				class H {
					constructor(V, G) {
						(this.d = V), (this.f = G), (this.a = 0), (this.b = 0);
					}
					logOutgoing(V, G, K, J, W) {
						(this.b += V), x(this.d, this.b, V, G, K, J, W);
					}
					logIncoming(V, G, K, J, W) {
						(this.a += V), x(this.f, this.a, V, G, K, J, W);
					}
				}
				e.$vi = H;
			},
		),
		