define(
			de[1584],
			he([1, 0, 120, 29, 6, 3, 23, 12, 37]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.SimpleWorkerServer = e.SimpleWorkerClient = void 0),
					(e.logOnceWebWorkerWarning = c),
					(e.create = S),
					(m = mt(m));
				const r = !1,
					u = "default",
					a = "$initialize";
				let h = !1;
				function c(I) {
					d.$r &&
						(h ||
							((h = !0),
							console.warn(
								"Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq",
							)),
						console.warn(I.message));
				}
				var n;
				(function (I) {
					(I[(I.Request = 0)] = "Request"),
						(I[(I.Reply = 1)] = "Reply"),
						(I[(I.SubscribeEvent = 2)] = "SubscribeEvent"),
						(I[(I.Event = 3)] = "Event"),
						(I[(I.UnsubscribeEvent = 4)] = "UnsubscribeEvent");
				})(n || (n = {}));
				class g {
					constructor(T, P, k, L, D) {
						(this.vsWorker = T),
							(this.req = P),
							(this.channel = k),
							(this.method = L),
							(this.args = D),
							(this.type = n.Request);
					}
				}
				class p {
					constructor(T, P, k, L) {
						(this.vsWorker = T),
							(this.seq = P),
							(this.res = k),
							(this.err = L),
							(this.type = n.Reply);
					}
				}
				class o {
					constructor(T, P, k, L, D) {
						(this.vsWorker = T),
							(this.req = P),
							(this.channel = k),
							(this.eventName = L),
							(this.arg = D),
							(this.type = n.SubscribeEvent);
					}
				}
				class f {
					constructor(T, P, k) {
						(this.vsWorker = T),
							(this.req = P),
							(this.event = k),
							(this.type = n.Event);
					}
				}
				class b {
					constructor(T, P) {
						(this.vsWorker = T),
							(this.req = P),
							(this.type = n.UnsubscribeEvent);
					}
				}
				class s {
					constructor(T) {
						(this.a = -1),
							(this.g = T),
							(this.b = 0),
							(this.c = Object.create(null)),
							(this.d = new Map()),
							(this.f = new Map());
					}
					setWorkerId(T) {
						this.a = T;
					}
					sendMessage(T, P, k) {
						const L = String(++this.b);
						return new Promise((D, M) => {
							(this.c[L] = { resolve: D, reject: M }),
								this.o(new g(this.a, L, T, P, k));
						});
					}
					listen(T, P, k) {
						let L = null;
						const D = new w.$re({
							onWillAddFirstListener: () => {
								(L = String(++this.b)),
									this.d.set(L, D),
									this.o(new o(this.a, L, T, P, k));
							},
							onDidRemoveLastListener: () => {
								this.d.delete(L), this.o(new b(this.a, L)), (L = null);
							},
						});
						return D.event;
					}
					handleMessage(T) {
						!T ||
							!T.vsWorker ||
							(this.a !== -1 && T.vsWorker !== this.a) ||
							this.h(T);
					}
					createProxyToRemoteChannel(T, P) {
						const k = {
							get: (L, D) => (
								typeof D == "string" &&
									!L[D] &&
									($(D)
										? (L[D] = (M) => this.listen(T, D, M))
										: y(D)
											? (L[D] = this.listen(T, D, void 0))
											: D.charCodeAt(0) === t.CharCode.DollarSign &&
												(L[D] = async (...M) => (
													await P?.(), this.sendMessage(T, D, M)
												))),
								L[D]
							),
						};
						return new Proxy(Object.create(null), k);
					}
					h(T) {
						switch (T.type) {
							case n.Reply:
								return this.j(T);
							case n.Request:
								return this.k(T);
							case n.SubscribeEvent:
								return this.l(T);
							case n.Event:
								return this.m(T);
							case n.UnsubscribeEvent:
								return this.n(T);
						}
					}
					j(T) {
						if (!this.c[T.seq]) {
							console.warn("Got reply to unknown seq");
							return;
						}
						const P = this.c[T.seq];
						if ((delete this.c[T.seq], T.err)) {
							let k = T.err;
							T.err.$isError &&
								((k = new Error()),
								(k.name = T.err.name),
								(k.message = T.err.message),
								(k.stack = T.err.stack)),
								P.reject(k);
							return;
						}
						P.resolve(T.res);
					}
					k(T) {
						const P = T.req;
						this.g.handleMessage(T.channel, T.method, T.args).then(
							(L) => {
								this.o(new p(this.a, P, L, void 0));
							},
							(L) => {
								L.detail instanceof Error && (L.detail = (0, i.$6)(L.detail)),
									this.o(new p(this.a, P, void 0, (0, i.$6)(L)));
							},
						);
					}
					l(T) {
						const P = T.req,
							k = this.g.handleEvent(
								T.channel,
								T.eventName,
								T.arg,
							)((L) => {
								this.o(new f(this.a, P, L));
							});
						this.f.set(P, k);
					}
					m(T) {
						if (!this.d.has(T.req)) {
							console.warn("Got event for unknown req");
							return;
						}
						this.d.get(T.req).fire(T.event);
					}
					n(T) {
						if (!this.f.has(T.req)) {
							console.warn("Got unsubscribe for unknown req");
							return;
						}
						this.f.get(T.req).dispose(), this.f.delete(T.req);
					}
					o(T) {
						const P = [];
						if (T.type === n.Request)
							for (let k = 0; k < T.args.length; k++)
								T.args[k] instanceof ArrayBuffer && P.push(T.args[k]);
						else
							T.type === n.Reply &&
								T.res instanceof ArrayBuffer &&
								P.push(T.res);
						this.g.sendMessage(T, P);
					}
				}
				class l extends E.$1c {
					constructor(T, P) {
						super(),
							(this.f = new Map()),
							(this.g = new Map()),
							(this.a = this.D(
								T.create(
									{
										amdModuleId: "vs/base/common/worker/simpleWorker",
										esmModuleLocation: P.esmModuleLocation,
										label: P.label,
									},
									(D) => {
										this.c.handleMessage(D);
									},
									(D) => {
										(0, i.$4)(D);
									},
								),
							)),
							(this.c = new s({
								sendMessage: (D, M) => {
									this.a.postMessage(D, M);
								},
								handleMessage: (D, M, N) => this.h(D, M, N),
								handleEvent: (D, M, N) => this.j(D, M, N),
							})),
							this.c.setWorkerId(this.a.getId());
						let k = null;
						const L = globalThis.require;
						typeof L < "u" && typeof L.getConfig == "function"
							? (k = L.getConfig())
							: typeof globalThis.requirejs < "u" &&
								(k = globalThis.requirejs.s.contexts._.config),
							(this.b = this.c.sendMessage(u, a, [
								this.a.getId(),
								JSON.parse(JSON.stringify(k)),
								P.amdModuleId,
							])),
							(this.proxy = this.c.createProxyToRemoteChannel(u, async () => {
								await this.b;
							})),
							this.b.catch((D) => {
								this.m("Worker failed to load " + P.amdModuleId, D);
							});
					}
					h(T, P, k) {
						const L = this.f.get(T);
						if (!L)
							return Promise.reject(
								new Error(`Missing channel ${T} on main thread`),
							);
						if (typeof L[P] != "function")
							return Promise.reject(
								new Error(`Missing method ${P} on main thread channel ${T}`),
							);
						try {
							return Promise.resolve(L[P].apply(L, k));
						} catch (D) {
							return Promise.reject(D);
						}
					}
					j(T, P, k) {
						const L = this.f.get(T);
						if (!L) throw new Error(`Missing channel ${T} on main thread`);
						if ($(P)) {
							const D = L[P].call(L, k);
							if (typeof D != "function")
								throw new Error(
									`Missing dynamic event ${P} on main thread channel ${T}.`,
								);
							return D;
						}
						if (y(P)) {
							const D = L[P];
							if (typeof D != "function")
								throw new Error(
									`Missing event ${P} on main thread channel ${T}.`,
								);
							return D;
						}
						throw new Error(`Malformed event name ${P}`);
					}
					setChannel(T, P) {
						this.f.set(T, P);
					}
					getChannel(T) {
						if (!this.g.has(T)) {
							const P = this.c.createProxyToRemoteChannel(T, async () => {
								await this.b;
							});
							this.g.set(T, P);
						}
						return this.g.get(T);
					}
					m(T, P) {
						console.error(T), console.info(P);
					}
				}
				e.SimpleWorkerClient = l;
				function y(I) {
					return I[0] === "o" && I[1] === "n" && m.$Lf(I.charCodeAt(2));
				}
				function $(I) {
					return /^onDynamic/.test(I) && m.$Lf(I.charCodeAt(9));
				}
				class v {
					constructor(T, P) {
						(this.d = new Map()),
							(this.f = new Map()),
							(this.a = P),
							(this.b = null),
							(this.c = new s({
								sendMessage: (k, L) => {
									T(k, L);
								},
								handleMessage: (k, L, D) => this.g(k, L, D),
								handleEvent: (k, L, D) => this.h(k, L, D),
							}));
					}
					onmessage(T) {
						this.c.handleMessage(T);
					}
					g(T, P, k) {
						if (T === u && P === a) return this.j(k[0], k[1], k[2]);
						const L = T === u ? this.b : this.d.get(T);
						if (!L)
							return Promise.reject(
								new Error(`Missing channel ${T} on worker thread`),
							);
						if (typeof L[P] != "function")
							return Promise.reject(
								new Error(`Missing method ${P} on worker thread channel ${T}`),
							);
						try {
							return Promise.resolve(L[P].apply(L, k));
						} catch (D) {
							return Promise.reject(D);
						}
					}
					h(T, P, k) {
						const L = T === u ? this.b : this.d.get(T);
						if (!L) throw new Error(`Missing channel ${T} on worker thread`);
						if ($(P)) {
							const D = L[P].call(L, k);
							if (typeof D != "function")
								throw new Error(
									`Missing dynamic event ${P} on request handler.`,
								);
							return D;
						}
						if (y(P)) {
							const D = L[P];
							if (typeof D != "function")
								throw new Error(`Missing event ${P} on request handler.`);
							return D;
						}
						throw new Error(`Malformed event name ${P}`);
					}
					setChannel(T, P) {
						this.d.set(T, P);
					}
					getChannel(T) {
						if (!this.f.has(T)) {
							const P = this.c.createProxyToRemoteChannel(T);
							this.f.set(T, P);
						}
						return this.f.get(T);
					}
					async j(T, P, k) {
						if ((this.c.setWorkerId(T), this.a)) {
							this.b = this.a(this);
							return;
						}
						if (
							(P &&
								(typeof P.baseUrl < "u" && delete P.baseUrl,
								typeof P.paths < "u" &&
									typeof P.paths.vs < "u" &&
									delete P.paths.vs,
								typeof P.trustedTypesPolicy < "u" &&
									delete P.trustedTypesPolicy,
								(P.catchError = !0),
								globalThis.require.config(P)),
							r)
						) {
							const L = C.$7g.asBrowserUri(`${k}.js`).toString(!0);
							return new Promise((D, M) => {
								ce([`${L}`], D, M);
							})
								.then(mt)
								.then((D) => {
									if (((this.b = D.create(this)), !this.b))
										throw new Error("No RequestHandler!");
								});
						}
						return new Promise((L, D) => {
							(globalThis.require || ce)(
								[k],
								(N) => {
									if (((this.b = N.create(this)), !this.b)) {
										D(new Error("No RequestHandler!"));
										return;
									}
									L();
								},
								D,
							);
						});
					}
				}
				e.SimpleWorkerServer = v;
				function S(I) {
					return new v(I, null);
				}
			},
		),
		