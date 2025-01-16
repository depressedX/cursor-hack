define(de[1172], he([1, 0, 76, 221, 9]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3n = e.$2n = void 0),
				(e.$4n = m),
				(e.$5n = u),
				(e.$6n = a);
			function E(h) {
				return h.toJSON();
			}
			class C {
				constructor(c) {
					this.a = c;
				}
				transformIncoming(c) {
					const n = this.a.transformIncoming(c);
					return n === c ? c : E(w.URI.from(n));
				}
				transformOutgoing(c) {
					const n = this.a.transformOutgoing(c);
					return n === c ? c : E(w.URI.from(n));
				}
				transformOutgoingURI(c) {
					const n = this.a.transformOutgoing(c);
					return n === c ? c : w.URI.from(n);
				}
				transformOutgoingScheme(c) {
					return this.a.transformOutgoingScheme(c);
				}
			}
			(e.$2n = C),
				(e.$3n = new (class {
					transformIncoming(h) {
						return h;
					}
					transformOutgoing(h) {
						return h;
					}
					transformOutgoingURI(h) {
						return h;
					}
					transformOutgoingScheme(h) {
						return h;
					}
				})());
			function d(h, c, n) {
				if (!h || n > 200) return null;
				if (typeof h == "object") {
					if (h instanceof w.URI) return c.transformOutgoing(h);
					for (const g in h)
						if (Object.hasOwnProperty.call(h, g)) {
							const p = d(h[g], c, n + 1);
							p !== null && (h[g] = p);
						}
				}
				return null;
			}
			function m(h, c) {
				const n = d(h, c, 0);
				return n === null ? h : n;
			}
			function r(h, c, n, g) {
				if (!h || g > 200) return null;
				if (typeof h == "object") {
					if (h.$mid === i.MarshalledId.Uri)
						return n
							? w.URI.revive(c.transformIncoming(h))
							: c.transformIncoming(h);
					if (h instanceof t.$Te) return null;
					for (const p in h)
						if (Object.hasOwnProperty.call(h, p)) {
							const o = r(h[p], c, n, g + 1);
							o !== null && (h[p] = o);
						}
				}
				return null;
			}
			function u(h, c) {
				const n = r(h, c, !1, 0);
				return n === null ? h : n;
			}
			function a(h, c) {
				const n = r(h, c, !0, 0);
				return n === null ? h : n;
			}
		}),
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
		define(
			de[540],
			he([1, 0, 432, 29, 23, 1584, 3, 24, 4]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hjb = void 0),
					(e.$gjb = a),
					(e.$ijb = b);
				const r = !1;
				let u;
				typeof self == "object" &&
				self.constructor &&
				self.constructor.name === "DedicatedWorkerGlobalScope" &&
				globalThis.workerttPolicy !== void 0
					? (u = globalThis.workerttPolicy)
					: (u = (0, t.$bjb)("defaultWorkerFactory", {
							createScriptURL: (s) => s,
						}));
				function a(s, l) {
					if (!s.startsWith("blob:"))
						throw new URIError("Not a blob-url: " + s);
					return new Worker(u ? u.createScriptURL(s) : s, {
						...l,
						type: r ? "module" : void 0,
					});
				}
				function h(s, l) {
					const y = globalThis.MonacoEnvironment;
					if (y) {
						if (typeof y.getWorker == "function")
							return y.getWorker("workerMain.js", l);
						if (typeof y.getWorkerUrl == "function") {
							const $ = y.getWorkerUrl("workerMain.js", l);
							return new Worker(u ? u.createScriptURL($) : $, {
								name: l,
								type: r ? "module" : void 0,
							});
						}
					}
					if (typeof ce == "function") {
						const $ = ce.toUrl("vs/base/worker/workerMain.js"),
							v = "vs/base/worker/defaultWorkerFactory.js",
							S = ce.toUrl(v).slice(0, -v.length),
							I = c(l, $, S);
						return new Worker(u ? u.createScriptURL(I) : I, {
							name: l,
							type: r ? "module" : void 0,
						});
					}
					if (s) {
						const $ = c(l, s.toString(!0)),
							v = new Worker(u ? u.createScriptURL($) : $, {
								name: l,
								type: r ? "module" : void 0,
							});
						return r ? n(v) : v;
					}
					throw new Error(
						"You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker",
					);
				}
				function c(s, l, y) {
					if (
						!(
							/^((http:)|(https:)|(file:))/.test(l) &&
							l.substring(0, globalThis.origin.length) !== globalThis.origin
						)
					) {
						const v = l.lastIndexOf("?"),
							S = l.lastIndexOf("#", v),
							I =
								v > 0
									? new URLSearchParams(l.substring(v + 1, ~S ? S : void 0))
									: new URLSearchParams();
						w.COI.addSearchParam(I, !0, !0),
							I.toString()
								? (l = `${l}?${I.toString()}#${s}`)
								: (l = `${l}#${s}`);
					}
					const $ = new Blob(
						[
							(0, d.$Lb)([
								`/*${s}*/`,
								y
									? `globalThis.MonacoEnvironment = { baseUrl: ${JSON.stringify(y)} };`
									: void 0,
								`globalThis._VSCODE_NLS_MESSAGES = ${JSON.stringify((0, m.getNLSMessages)())};`,
								`globalThis._VSCODE_NLS_LANGUAGE = ${JSON.stringify((0, m.getNLSLanguage)())};`,
								`globalThis._VSCODE_FILE_ROOT = ${JSON.stringify(globalThis._VSCODE_FILE_ROOT)};`,
								"const ttPolicy = globalThis.trustedTypes?.createPolicy('defaultWorkerFactory', { createScriptURL: value => value });",
								"globalThis.workerttPolicy = ttPolicy;",
								r
									? `await import(ttPolicy?.createScriptURL(${JSON.stringify(l)}) ?? ${JSON.stringify(l)});`
									: `importScripts(ttPolicy?.createScriptURL(${JSON.stringify(l)}) ?? ${JSON.stringify(l)});`,
								r
									? "globalThis.postMessage({ type: 'vscode-worker-ready' });"
									: void 0,
								`/*${s}*/`,
							]).join(""),
						],
						{ type: "application/javascript" },
					);
					return URL.createObjectURL($);
				}
				function n(s) {
					return new Promise((l, y) => {
						(s.onmessage = function ($) {
							$.data.type === "vscode-worker-ready" &&
								((s.onmessage = null), l(s));
						}),
							(s.onerror = y);
					});
				}
				function g(s) {
					return typeof s.then == "function";
				}
				class p extends C.$1c {
					constructor(l, y, $, v, S, I) {
						super(), (this.a = $), (this.b = v);
						const T = h(l, v);
						g(T) ? (this.c = T) : (this.c = Promise.resolve(T)),
							this.postMessage(y, []),
							this.c.then((P) => {
								(P.onmessage = function (k) {
									S(k.data);
								}),
									(P.onmessageerror = I),
									typeof P.addEventListener == "function" &&
										P.addEventListener("error", I);
							}),
							this.D(
								(0, C.$Yc)(() => {
									this.c?.then((P) => {
										(P.onmessage = null),
											(P.onmessageerror = null),
											P.removeEventListener("error", I),
											P.terminate();
									}),
										(this.c = null);
								}),
							);
					}
					getId() {
						return this.a;
					}
					postMessage(l, y) {
						this.c?.then(($) => {
							try {
								$.postMessage(l, y);
							} catch (v) {
								(0, i.$4)(v),
									(0, i.$4)(
										new Error(`FAILED to post message to '${this.b}'-worker`, {
											cause: v,
										}),
									);
							}
						});
					}
				}
				class o {
					constructor(l, y) {
						(this.amdModuleId = l),
							(this.label = y),
							(this.esmModuleLocation = r
								? w.$7g.asBrowserUri(`${l}.esm.js`)
								: void 0);
					}
				}
				e.$hjb = o;
				class f {
					static {
						this.a = 0;
					}
					constructor() {
						this.b = !1;
					}
					create(l, y, $) {
						const v = ++f.a;
						if (this.b) throw this.b;
						return new p(
							l.esmModuleLocation,
							l.amdModuleId,
							v,
							l.label || "anonymous" + v,
							y,
							(S) => {
								(0, E.logOnceWebWorkerWarning)(S), (this.b = S), $(S);
							},
						);
					}
				}
				function b(s, l) {
					const y = typeof s == "string" ? new o(s, l) : s;
					return new E.SimpleWorkerClient(new f(), y);
				}
			},
		),
		define(
			de[305],
			he([1, 0, 24, 15, 76, 33, 138, 29, 6, 3, 197, 37, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
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
		