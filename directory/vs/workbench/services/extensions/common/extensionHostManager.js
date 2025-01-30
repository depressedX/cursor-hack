import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/stopwatch.js';
import '../../../../nls.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../editor/common/editorService.js';
import '../../environment/common/environmentService.js';
import './extHostCustomers.js';
import './extensionHostKind.js';
import './extensions.js';
import './rpcProtocol.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/notification/common/notification.js';
define(
			de[1822],
			he([
				1, 0, 15, 76, 29, 6, 3, 162, 4, 99, 11, 5, 34, 211, 32, 18, 78, 101,
				517, 53, 1821, 31, 40,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*buffer*/,
				w /*errors*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*stopwatch*/,
				m /*nls*/,
				r /*actionCommonCategories*/,
				u /*actions*/,
				a /*instantiation*/,
				h /*log*/,
				c /*remoteAuthorityResolver*/,
				n /*telemetry*/,
				g /*editorService*/,
				p /*environmentService*/,
				o /*extHostCustomers*/,
				f /*extensionHostKind*/,
				b /*extensions*/,
				s /*rpcProtocol*/,
				l /*commands*/,
				y /*notification*/,
) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R4c = void 0),
					(e.$S4c = T),
					(w = mt(w)),
					(m = mt(m));
				const v = !1,
					S = !0;
				let I = ($ = class extends C.$1c {
					get pid() {
						return this.q.pid;
					}
					get kind() {
						return this.q.runningLocation.kind;
					}
					get startup() {
						return this.q.startup;
					}
					get friendyName() {
						return T(this.kind, this.pid);
					}
					constructor(F, x, H, q, V, G, K) {
						super(),
							(this.t = H),
							(this.u = q),
							(this.w = V),
							(this.y = G),
							(this.z = K),
							(this.c = this.D(new E.$re())),
							(this.onDidChangeResponsiveState = this.c.event),
							(this.s = !1),
							(this.f = new Map()),
							(this.g = new Set()),
							(this.h = null),
							(this.j = []),
							(this.q = F),
							(this.onDidExit = this.q.onExit);
						const J = {
							time: Date.now(),
							action: "starting",
							kind: (0, f.$c2)(this.kind),
						};
						this.y.publicLog2("extensionHostStartup", J),
							(this.r = this.q.start().then(
								(W) => {
									this.s = !0;
									const X = {
										time: Date.now(),
										action: "success",
										kind: (0, f.$c2)(this.kind),
									};
									return (
										this.y.publicLog2("extensionHostStartup", X),
										this.J(this.kind, W)
									);
								},
								(W) => {
									this.z.error(
										`Error received from starting extension host (kind: ${(0, f.$c2)(this.kind)})`,
									),
										this.z.error(W);
									const X = {
										time: Date.now(),
										action: "error",
										kind: (0, f.$c2)(this.kind),
									};
									return (
										W && W.name && (X.errorName = W.name),
										W && W.message && (X.errorMessage = W.message),
										W && W.stack && (X.errorStack = W.stack),
										this.y.publicLog2("extensionHostStartup", X),
										null
									);
								},
							)),
							this.r.then(() => {
								x.forEach((W) =>
									this.activateByEvent(W, b.ActivationKind.Normal),
								),
									this.D(B({ measure: () => this.C() }));
							});
					}
					async disconnect() {
						await this.q?.disconnect?.();
					}
					dispose() {
						this.q?.dispose(), this.h?.dispose();
						for (let F = 0, x = this.j.length; F < x; F++) {
							const H = this.j[F];
							try {
								H.dispose();
							} catch (q) {
								w.$4(q);
							}
						}
						(this.r = null), super.dispose();
					}
					async C() {
						const F = await this.r;
						if (!F) return null;
						const x = await this.F(F),
							H = await this.I(F),
							q = await this.H(F);
						return {
							remoteAuthority: this.q.remoteAuthority,
							latency: x,
							down: H,
							up: q,
						};
					}
					async ready() {
						await this.r;
					}
					async F(F) {
						let H = 0;
						for (let q = 0; q < 10; q++) {
							const V = d.$le.create();
							await F.test_latency(q), V.stop(), (H += V.elapsed());
						}
						return H / 10;
					}
					static G(F, x) {
						return (F * 1e3 * 8) / x;
					}
					async H(F) {
						const H = i.$Te.alloc(10485760),
							q = Math.ceil(Math.random() * 256);
						for (let G = 0; G < H.byteLength; G++) H.writeUInt8(G, q);
						const V = d.$le.create();
						return await F.test_up(H), V.stop(), $.G(10485760, V.elapsed());
					}
					async I(F) {
						const H = d.$le.create();
						return (
							await F.test_down(10485760), H.stop(), $.G(10485760, H.elapsed())
						);
					}
					J(F, x) {
						let H = null;
						v || this.w.logExtensionHostCommunication
							? (H = new A(F))
							: R.isEnabled()
								? (H = new R(this.y))
								: (H = new D(F)),
							(this.h = new s.$Q4c(x, H)),
							this.D(this.h.onDidChangeResponsiveState((W) => this.c.fire(W)));
						let q = null,
							V = [];
						const G = {
								remoteAuthority: this.q.remoteAuthority,
								extensionHostKind: this.kind,
								getProxy: (W) => this.h.getProxy(W),
								set: (W, X) => this.h.set(W, X),
								dispose: () => this.h.dispose(),
								assertRegistered: (W) => this.h.assertRegistered(W),
								drain: () => this.h.drain(),
								internalExtensionService: this.t,
								_setExtensionHostProxy: (W) => {
									q = W;
								},
								_setAllMainProxyIdentifiers: (W) => {
									V = W;
								},
							},
							K = o.ExtHostCustomersRegistry.getNamedCustomers();
						for (let W = 0, X = K.length; W < X; W++) {
							const [Y, ie] = K[W];
							try {
								const ne = this.u.createInstance(ie, G);
								this.j.push(ne), this.h.set(Y, ne);
							} catch (ne) {
								this.z.error(`Cannot instantiate named customer: '${Y.sid}'`),
									this.z.error(ne),
									w.$4(ne);
							}
						}
						const J = o.ExtHostCustomersRegistry.getCustomers();
						for (const W of J)
							try {
								const X = this.u.createInstance(W, G);
								this.j.push(X);
							} catch (X) {
								this.z.error(X), w.$4(X);
							}
						if (!q) throw new Error("Missing IExtensionHostProxy!");
						return this.h.assertRegistered(V), q;
					}
					async activate(F, x) {
						const H = await this.r;
						return H ? H.activate(F, x) : !1;
					}
					activateByEvent(F, x) {
						return x === b.ActivationKind.Immediate && !this.s
							? Promise.resolve()
							: (this.f.has(F) || this.f.set(F, this.L(F, x)), this.f.get(F));
					}
					activationEventIsDone(F) {
						return this.g.has(F);
					}
					async L(F, x) {
						if (!this.r) return;
						const H = await this.r;
						if (H) {
							if (!this.q.extensions.containsActivationEvent(F)) {
								this.g.add(F);
								return;
							}
							await H.activateByEvent(F, x), this.g.add(F);
						}
					}
					async getInspectPort(F) {
						if (this.q) {
							F && (await this.q.enableInspectPort());
							const x = this.q.getInspectPort();
							if (x) return x;
						}
					}
					async resolveAuthority(F, x) {
						const H = d.$le.create(!1),
							q = () =>
								`[${(0, f.$c2)(this.q.runningLocation.kind)}${this.q.runningLocation.affinity}][resolveAuthority(${(0, c.$7l)(F)},${x})][${H.elapsed()}ms] `,
							V = (W) => this.z.info(`${q()}${W}`),
							G = (W, X = void 0) => this.z.error(`${q()}${W}`, X);
						V("obtaining proxy...");
						const K = await this.r;
						if (!K)
							return (
								G("no proxy"),
								{
									type: "error",
									error: {
										message: "Cannot resolve authority",
										code: c.RemoteAuthorityResolverErrorCode.Unknown,
										detail: void 0,
									},
								}
							);
						V("invoking...");
						const J = new t.$Xh();
						try {
							J.cancelAndSet(() => V("waiting..."), 1e3);
							const W = await K.resolveAuthority(F, x);
							return (
								J.dispose(),
								W.type === "ok"
									? V(`returned ${W.value.authority.connectTo}`)
									: G("returned an error", W.error),
								W
							);
						} catch (W) {
							return (
								J.dispose(),
								G("returned an error", W),
								{
									type: "error",
									error: {
										message: W.message,
										code: c.RemoteAuthorityResolverErrorCode.Unknown,
										detail: W,
									},
								}
							);
						}
					}
					async getCanonicalURI(F, x) {
						const H = await this.r;
						if (!H) throw new Error("Cannot resolve canonical URI");
						return H.getCanonicalURI(F, x);
					}
					async start(F, x, H) {
						const q = await this.r;
						if (!q) return;
						const V = this.q.extensions.set(F, x, H);
						return q.startExtensionHost(V);
					}
					async extensionTestsExecute() {
						const F = await this.r;
						if (!F) throw new Error("Could not obtain Extension Host Proxy");
						return F.extensionTestsExecute();
					}
					representsRunningLocation(F) {
						return this.q.runningLocation.equals(F);
					}
					async deltaExtensions(F) {
						const x = await this.r;
						if (!x) return;
						const H = this.q.extensions.delta(F);
						if (H) return x.deltaExtensions(H);
					}
					containsExtension(F) {
						return this.q.extensions?.containsExtension(F) ?? !1;
					}
					async setRemoteEnvironment(F) {
						const x = await this.r;
						if (x) return x.setRemoteEnvironment(F);
					}
				});
				(e.$R4c = I),
					(e.$R4c =
						I =
						$ =
							Ne([j(3, a.$Li), j(4, p.$r8), j(5, n.$km), j(6, h.$ik)], I));
				function T(z, F) {
					return F ? `${(0, f.$c2)(z)} pid: ${F}` : `${(0, f.$c2)(z)}`;
				}
				const P = [
					["#2977B1", "#FC802D", "#34A13A", "#D3282F", "#9366BA"],
					["#8B564C", "#E177C0", "#7F7F7F", "#BBBE3D", "#2EBECD"],
				];
				function k(z) {
					if (Array.isArray(z)) return z;
					if (z && typeof z == "object" && typeof z.toString == "function") {
						const F = z.toString();
						if (F !== "[object Object]") return F;
					}
					return z;
				}
				function L(z) {
					return Array.isArray(z) ? z.map(k) : k(z);
				}
				class D {
					constructor(F) {
						this.c = F;
					}
					logIncoming(F, x, H, q, V) {
						N.instance.isEnabled() &&
							N.instance.recordIncoming(this.c, F, x, H, q, V);
					}
					logOutgoing(F, x, H, q, V) {
						N.instance.isEnabled() &&
							N.instance.recordOutgoing(this.c, F, x, H, q, V);
					}
				}
				class M {
					constructor() {
						(this.c = 0),
							(this.d = 0),
							(this.e = Number.MAX_VALUE),
							(this.f = 0);
					}
					record(F) {
						this.c++,
							(this.d += F),
							(this.e = Math.min(this.e, F)),
							(this.f = Math.max(this.f, F));
					}
					get count() {
						return this.c;
					}
					get min() {
						return this.c > 0 ? this.e : 0;
					}
					get max() {
						return this.f;
					}
					get avg() {
						return this.c > 0 ? this.d / this.c : 0;
					}
				}
				class N {
					static get instance() {
						return this.c || (this.c = new N()), this.c;
					}
					constructor() {
						(this.d = !1), (this.e = Date.now()), (this.f = new Map());
					}
					g(F) {
						return (
							this.f.has(F) ||
								this.f.set(F, {
									incoming: {
										total: 0,
										count: 0,
										byCommand: new Map(),
										pendingRequests: new Map(),
										latencies: new M(),
									},
									outgoing: {
										total: 0,
										count: 0,
										byCommand: new Map(),
										pendingRequests: new Map(),
										latencies: new M(),
									},
								}),
							this.f.get(F)
						);
					}
					isEnabled() {
						return this.d;
					}
					reset() {
						(this.d = !1), this.f.clear();
					}
					toggle() {
						this.d = !this.d;
					}
					recordIncoming(F, x, H, q, V, G) {
						const K = this.g(F);
						(K.incoming.total += x), K.incoming.count++;
						const J = this.h(V);
						if (J) {
							const W = K.incoming.byCommand.get(J) || {
								count: 0,
								bytes: 0,
								latencies: new M(),
							};
							W.count++, (W.bytes += x), K.incoming.byCommand.set(J, W);
						}
						if (q === s.RequestInitiator.LocalSide) {
							const W = K.outgoing.pendingRequests.get(H);
							if (W) {
								const X = Date.now() - W.time;
								if ((K.outgoing.latencies.record(X), W.command)) {
									const Y = K.outgoing.byCommand.get(W.command);
									Y && Y.latencies.record(X);
								}
								K.outgoing.pendingRequests.delete(H);
							}
						} else
							K.incoming.pendingRequests.set(H, {
								time: Date.now(),
								command: J || V,
							});
					}
					recordOutgoing(F, x, H, q, V, G) {
						const K = this.g(F);
						(K.outgoing.total += x), K.outgoing.count++;
						const J = this.h(V);
						if (J) {
							const W = K.outgoing.byCommand.get(J) || {
								count: 0,
								bytes: 0,
								latencies: new M(),
							};
							W.count++, (W.bytes += x), K.outgoing.byCommand.set(J, W);
						}
						if (q === s.RequestInitiator.LocalSide)
							K.outgoing.pendingRequests.set(H, {
								time: Date.now(),
								command: J || V,
							});
						else {
							const W = K.incoming.pendingRequests.get(H);
							if (W) {
								const X = Date.now() - W.time;
								if ((K.incoming.latencies.record(X), W.command)) {
									const Y = K.incoming.byCommand.get(W.command);
									Y && Y.latencies.record(X);
								}
								K.incoming.pendingRequests.delete(H);
							}
						}
					}
					h(F) {
						const x = F.match(/^(?:request|receiveRequest): ([^(]+)/);
						return x ? x[1].trim() : null;
					}
					j(F) {
						const x = F.split(".", 2);
						return x.length > 1 ? x[0] : "Other";
					}
					generateReport() {
						let F = `# Extension Host RPC Statistics

`;
						F += `*Duration: ${((Date.now() - this.e) / 1e3).toFixed(1)}s*

`;
						const x = this.k,
							H = this.l;
						for (const [q, V] of this.f) {
							(F += `## ${(0, f.$c2)(q)}

`),
								(F += `### Traffic Summary
`),
								(F += `- **Incoming:** ${H(V.incoming.total)} (${x(V.incoming.count)} messages)
`),
								(F += `- **Outgoing:** ${H(V.outgoing.total)} (${x(V.outgoing.count)} messages)
`),
								(F += `- **Messages/sec:** ${(((V.incoming.count + V.outgoing.count) * 1e3) / (Date.now() - this.e)).toFixed(1)}

`),
								(F += `### Overall Latency (ms)
`),
								(F += `|Direction|Min|Avg|Max|
|-|-|-|-|
`),
								(F += `|**Incoming**|${V.incoming.latencies.min.toFixed(1)}ms|${V.incoming.latencies.avg.toFixed(1)}ms|${V.incoming.latencies.max.toFixed(1)}ms|
`),
								(F += `|**Outgoing**|${V.outgoing.latencies.min.toFixed(1)}ms|${V.outgoing.latencies.avg.toFixed(1)}ms|${V.outgoing.latencies.max.toFixed(1)}ms|

`);
							const G = new Map([
									...V.incoming.byCommand,
									...V.outgoing.byCommand,
								]),
								K = new Map();
							for (const [W, X] of G) {
								const Y = this.j(W);
								K.has(Y) ||
									K.set(Y, {
										count: 0,
										bytes: 0,
										latencies: new M(),
										commands: [],
									});
								const ie = K.get(Y);
								(ie.count += X.count),
									(ie.bytes += X.bytes),
									ie.latencies.record(X.latencies.avg),
									ie.commands.push([W, X]);
							}
							const J = [...K.entries()].sort(
								(W, X) => X[1].latencies.avg - W[1].latencies.avg,
							);
							(F += `### Command Groups
`),
								(F += `|Namespace|Avg Latency|Count|Total Size|
`),
								(F += `|-|-:|-:|-:|
`);
							for (const [W, X] of J)
								F += `|**\`${W}\`**|${X.latencies.avg.toFixed(1)}ms|${x(X.count)}|${H(X.bytes)}|
`;
							(F += `

`),
								(F += `### Top Commands By Latency
`),
								(F += `

`),
								(F += `|Command|Count|Avg|Max|Min|Traffic|
`),
								(F += `|-|-:|-:|-:|-:|-:|
`);
							for (const [W, X] of J) {
								(F += `||
`),
									(F += `|**\`${W}\`**|
`),
									(F += `||
`);
								const Y = X.commands
									.sort((ie, ne) => ne[1].latencies.avg - ie[1].latencies.avg)
									.slice(0, 10);
								for (const [ie, ne] of Y) {
									const ee = ie.split(".").slice(1).join(".");
									F += `|&nbsp; &nbsp; &nbsp; &nbsp; \`${ee}\`|${x(ne.count)}|${ne.latencies.avg.toFixed(1)}ms|${ne.latencies.max.toFixed(1)}ms|${ne.latencies.min.toFixed(1)}ms|${H(ne.bytes)}|
`;
								}
							}
							F += `

`;
						}
						return F;
					}
					k(F) {
						return F.toLocaleString();
					}
					l(F) {
						const x = ["B", "KB", "MB", "GB"];
						let H = F,
							q = 0;
						for (; H >= 1024 && q < x.length - 1; ) (H /= 1024), q++;
						return `${H.toFixed(1)} ${x[q]}`;
					}
				}
				class A {
					constructor(F) {
						(this.e = F), (this.c = 0), (this.d = 0);
					}
					f(F, x, H, q, V, G, K) {
						K = L(K);
						const J = P[V],
							W = S ? J[q % J.length] : "#000000";
						let X = [
							`%c[${(0, f.$c2)(this.e)}][${F}]%c[${String(x).padStart(7)}]%c[len: ${String(H).padStart(5)}]%c${String(q).padStart(5)} - ${G}`,
							"color: darkgreen",
							"color: grey",
							"color: grey",
							`color: ${W}`,
						];
						/\($/.test(G) ? ((X = X.concat(K)), X.push(")")) : X.push(K),
							("stdlog" in console ? console.stdlog : console.log).apply(
								console,
								X,
							);
					}
					logIncoming(F, x, H, q, V) {
						(this.c += F), this.f("Ext \u2192 Win", this.c, F, x, H, q, V);
					}
					logOutgoing(F, x, H, q, V) {
						(this.d += F), this.f("Win \u2192 Ext", this.d, F, x, H, q, V);
					}
				}
				let R = class {
					static isEnabled() {
						return Math.trunc(Math.random() * 1e3) < 0.5;
					}
					constructor(F) {
						(this.d = F), (this.c = new Map());
					}
					logIncoming(F, x, H, q) {
						if (
							H === s.RequestInitiator.LocalSide &&
							/^receiveReply(Err)?:/.test(q)
						) {
							const V = this.c.get(x) ?? "unknown_reply";
							this.c.delete(x),
								this.d.publicLog2("extensionhost.incoming", {
									type: `${q} ${V}`,
									length: F,
								});
						}
						H === s.RequestInitiator.OtherSide &&
							/^receiveRequest /.test(q) &&
							this.d.publicLog2("extensionhost.incoming", {
								type: `${q}`,
								length: F,
							});
					}
					logOutgoing(F, x, H, q) {
						H === s.RequestInitiator.LocalSide &&
							q.startsWith("request: ") &&
							(this.c.set(x, q),
							this.d.publicLog2("extensionhost.outgoing", {
								type: q,
								length: F,
							}));
					}
				};
				R = Ne([j(0, n.$km)], R);
				const O = [];
				function B(z) {
					return (
						O.push(z),
						{
							dispose: () => {
								for (let F = 0; F < O.length; F++)
									if (O[F] === z) {
										O.splice(F, 1);
										return;
									}
							},
						}
					);
				}
				function U() {
					return O.slice(0);
				}
				(0, u.$4X)(
					class sa extends u.$3X {
						constructor() {
							super({
								id: "editor.action.measureExtHostLatency",
								title: m.localize2(12348, "Measure Extension Host Latency"),
								category: r.$ck.Developer,
								f1: !0,
							});
						}
						async run(F) {
							const x = F.get(g.$IY),
								H = await Promise.all(U().map((q) => q.measure()));
							x.openEditor({
								resource: void 0,
								contents: H.map(sa.c).join(`

`),
								options: { pinned: !0 },
							});
						}
						static c(F) {
							return F
								? `${
										F.remoteAuthority
											? `Authority: ${F.remoteAuthority}
`
											: ""
									}Roundtrip latency: ${F.latency.toFixed(3)}ms
Up: ${sa.d(F.up)}
Down: ${sa.d(F.down)}
`
								: "";
						}
						static d(F) {
							return F <= 1024
								? `${F} bps`
								: F < 1024 * 1024
									? `${(F / 1024).toFixed(1)} kbps`
									: `${(F / 1024 / 1024).toFixed(1)} Mbps`;
						}
					},
				),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "exthost.action.toggleExtHostProfiler",
									title: m.localize2(12349, "Start Extension Host Profiler"),
									category: r.$ck.Developer,
									f1: !0,
								});
							}
							async run(F) {
								const x = F.get(g.$IY),
									H = F.get(l.$ek),
									q = F.get(y.$4N),
									V = async () => {
										const J = N.instance.generateReport();
										N.instance.reset();
										const W = await x.openEditor({
											resource: void 0,
											contents: J,
										});
										W?.input?.resource &&
											(await H.executeCommand(
												"markdown.showPreview",
												W.input.resource,
											));
									};
								if (N.instance.isEnabled()) {
									await V();
									return;
								}
								N.instance.toggle();
								const G = {
										id: "stopExtHostStats",
										label: "Stop",
										tooltip: "Stop profiler and show results",
										enabled: !0,
										class: "codicon codicon-graph-line",
										run: async () => {
											(G.enabled = !1),
												N.instance.isEnabled() && (await V(), K.close());
										},
									},
									K = await q.notify({
										severity: y.Severity.Info,
										message: "Extension Host Profiler is running",
										progress: { infinite: !0 },
										actions: { primary: [G] },
									});
							}
						},
					);
			},
		),
		