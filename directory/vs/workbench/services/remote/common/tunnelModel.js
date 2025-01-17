import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/event.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../environment/common/environmentService.js';
import '../../extensions/common/extensions.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/types.js';
import '../../../../base/common/objects.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[839],
			he([
				1, 0, 4, 138, 6, 136, 3, 9, 10, 57, 34, 211, 21, 374, 25, 78, 53, 33,
				28, 82, 8,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C8 =
						e.$B8 =
						e.OnPortForward =
						e.$w8 =
						e.$v8 =
						e.TunnelSource =
						e.TunnelCloseReason =
						e.$t8 =
						e.$s8 =
							void 0),
					(e.$u8 = S),
					(e.$x8 = P),
					(e.$y8 = k),
					(e.$z8 = L),
					(e.$A8 = M),
					(t = mt(t));
				const l = 10 * 1e3,
					y = "remote.tunnels.toRestore",
					$ = "remote.tunnels.toRestoreExpiration",
					v = 1e3 * 60 * 60 * 24 * 14;
				(e.$s8 = "onTunnel"),
					(e.$t8 = new s.$5j(
						"forwardedPortsViewEnabled",
						!1,
						t.localize(12638, null),
					));
				function S(R) {
					const O = R.match(
						/^([a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*:)?([0-9]+)$/,
					);
					if (O)
						return {
							host: O[1]?.substring(0, O[1].length - 1) || "localhost",
							port: Number(O[2]),
						};
				}
				var I;
				(function (R) {
					(R.Other = "Other"),
						(R.User = "User"),
						(R.AutoForwardEnd = "AutoForwardEnd");
				})(I || (e.TunnelCloseReason = I = {}));
				var T;
				(function (R) {
					(R[(R.User = 0)] = "User"),
						(R[(R.Auto = 1)] = "Auto"),
						(R[(R.Extension = 2)] = "Extension");
				})(T || (e.TunnelSource = T = {})),
					(e.$v8 = { source: T.User, description: t.localize(12639, null) }),
					(e.$w8 = { source: T.Auto, description: t.localize(12640, null) });
				function P(R, O, B) {
					const U = R.get(L(O, B));
					if (U) return U;
					if ((0, c.$iO)(O))
						for (const z of c.$hO) {
							const F = L(z, B);
							if (R.has(F)) return R.get(F);
						}
					else if ((0, c.$kO)(O))
						for (const z of c.$jO) {
							const F = L(z, B);
							if (R.has(F)) return R.get(F);
						}
				}
				function k(R, O, B) {
					const U = P(R, O, B);
					if (U) return U;
					const z = (0, c.$kO)(O)
						? "localhost"
						: (0, c.$iO)(O)
							? "0.0.0.0"
							: void 0;
					if (z) return P(R, z, B);
				}
				function L(R, O) {
					return R + ":" + O;
				}
				var D;
				(function (R) {
					(R.Notify = "notify"),
						(R.OpenBrowser = "openBrowser"),
						(R.OpenBrowserOnce = "openBrowserOnce"),
						(R.OpenPreview = "openPreview"),
						(R.Silent = "silent"),
						(R.Ignore = "ignore");
				})(D || (e.OnPortForward = D = {}));
				function M(R) {
					return (
						R &&
						"host" in R &&
						typeof R.host == "string" &&
						"port" in R &&
						typeof R.port == "number" &&
						(!("detail" in R) || typeof R.detail == "string") &&
						(!("pid" in R) || typeof R.pid == "string")
					);
				}
				class N extends C.$1c {
					static {
						this.c = "remote.portsAttributes";
					}
					static {
						this.f = "remote.otherPortsAttributes";
					}
					static {
						this.g = /^(\d+)\-(\d+)$/;
					}
					static {
						this.h = /^([a-z0-9\-]+):(\d{1,5})$/;
					}
					constructor(O) {
						super(),
							(this.q = O),
							(this.j = []),
							(this.n = new w.$re()),
							(this.onDidChangeAttributes = this.n.event),
							this.D(
								O.onDidChangeConfiguration((B) => {
									(B.affectsConfiguration(N.c) ||
										B.affectsConfiguration(N.f)) &&
										this.r();
								}),
							),
							this.r();
					}
					r() {
						(this.j = this.w()), this.n.fire();
					}
					getAttributes(O, B, U) {
						let z = this.u(O, B, U, this.j, 0);
						const F = {
							label: void 0,
							onAutoForward: void 0,
							elevateIfNeeded: void 0,
							requireLocalPort: void 0,
							protocol: void 0,
						};
						for (; z >= 0; ) {
							const x = this.j[z];
							x.key === O
								? ((F.onAutoForward = x.onAutoForward ?? F.onAutoForward),
									(F.elevateIfNeeded =
										x.elevateIfNeeded !== void 0
											? x.elevateIfNeeded
											: F.elevateIfNeeded),
									(F.label = x.label ?? F.label),
									(F.requireLocalPort = x.requireLocalPort),
									(F.protocol = x.protocol))
								: ((F.onAutoForward = F.onAutoForward ?? x.onAutoForward),
									(F.elevateIfNeeded =
										F.elevateIfNeeded !== void 0
											? F.elevateIfNeeded
											: x.elevateIfNeeded),
									(F.label = F.label ?? x.label),
									(F.requireLocalPort =
										F.requireLocalPort !== void 0
											? F.requireLocalPort
											: void 0),
									(F.protocol = F.protocol ?? x.protocol)),
								(z = this.u(O, B, U, this.j, z + 1));
						}
						return F.onAutoForward !== void 0 ||
							F.elevateIfNeeded !== void 0 ||
							F.label !== void 0 ||
							F.requireLocalPort !== void 0 ||
							F.protocol !== void 0
							? F
							: this.z();
					}
					s(O) {
						return O.start !== void 0 && O.end !== void 0;
					}
					t(O) {
						return (
							O.host !== void 0 &&
							O.port !== void 0 &&
							(0, f.$lg)(O.host) &&
							(0, f.$pg)(O.port)
						);
					}
					u(O, B, U, z, F) {
						if (F >= z.length) return -1;
						const x = !(0, c.$iO)(B) && !(0, c.$kO)(B),
							q = z
								.slice(F)
								.findIndex((V) =>
									(0, f.$pg)(V.key)
										? x
											? !1
											: V.key === O
										: this.s(V.key)
											? x
												? !1
												: O >= V.key.start && O <= V.key.end
											: this.t(V.key)
												? O === V.key.port && B === V.key.host
												: U
													? V.key.test(U)
													: !1,
								);
						return q >= 0 ? q + F : -1;
					}
					w() {
						const O = this.q.getValue(N.c);
						if (!O || !(0, f.$ng)(O)) return [];
						const B = [];
						for (const z in O) {
							if (z === void 0) continue;
							const F = O[z];
							let x;
							if (Number(z)) x = Number(z);
							else if ((0, f.$lg)(z))
								if (N.g.test(z)) {
									const H = z.match(N.g);
									x = { start: Number(H[1]), end: Number(H[2]) };
								} else if (N.h.test(z)) {
									const H = z.match(N.h);
									x = { host: H[1], port: Number(H[2]) };
								} else {
									let H;
									try {
										H = RegExp(z);
									} catch {}
									H && (x = H);
								}
							x &&
								B.push({
									key: x,
									elevateIfNeeded: F.elevateIfNeeded,
									onAutoForward: F.onAutoForward,
									label: F.label,
									requireLocalPort: F.requireLocalPort,
									protocol: F.protocol,
								});
						}
						const U = this.q.getValue(N.f);
						return (
							U &&
								(this.m = {
									elevateIfNeeded: U.elevateIfNeeded,
									label: U.label,
									onAutoForward: U.onAutoForward,
									requireLocalPort: U.requireLocalPort,
									protocol: U.protocol,
								}),
							this.y(B)
						);
					}
					y(O) {
						function B(U, z) {
							return (0, f.$pg)(U.key)
								? U.key
								: z.s(U.key)
									? U.key.start
									: z.t(U.key)
										? U.key.port
										: Number.MAX_VALUE;
						}
						return O.sort((U, z) => B(U, this) - B(z, this));
					}
					z() {
						return this.m;
					}
					static providedActionToAction(O) {
						switch (O) {
							case c.ProvidedOnAutoForward.Notify:
								return D.Notify;
							case c.ProvidedOnAutoForward.OpenBrowser:
								return D.OpenBrowser;
							case c.ProvidedOnAutoForward.OpenBrowserOnce:
								return D.OpenBrowserOnce;
							case c.ProvidedOnAutoForward.OpenPreview:
								return D.OpenPreview;
							case c.ProvidedOnAutoForward.Silent:
								return D.Silent;
							case c.ProvidedOnAutoForward.Ignore:
								return D.Ignore;
							default:
								return;
						}
					}
					async addAttributes(O, B, U) {
						const F = this.q.inspect(N.c).userRemoteValue;
						let x;
						!F || !(0, f.$ng)(F) ? (x = {}) : (x = (0, b.$vo)(F)),
							x[`${O}`] || (x[`${O}`] = {});
						for (const H in B) x[`${O}`][H] = B[H];
						return this.q.updateValue(N.c, x, U);
					}
				}
				e.$B8 = N;
				let A = class extends C.$1c {
					constructor(O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.H = O),
							(this.I = B),
							(this.J = U),
							(this.L = z),
							(this.M = F),
							(this.N = x),
							(this.O = H),
							(this.P = q),
							(this.Q = V),
							(this.R = G),
							(this.c = new Map()),
							(this.g = new w.$re()),
							(this.onForwardPort = this.g.event),
							(this.h = new w.$re()),
							(this.onClosePort = this.h.event),
							(this.j = new w.$re()),
							(this.onPortName = this.j.event),
							(this.n = new w.$re()),
							(this.onCandidatesChanged = this.n.event),
							(this.s = new w.$re()),
							(this.onEnvironmentTunnelsSet = this.s.event),
							(this.t = !1),
							(this.u = void 0),
							(this.y = !1),
							(this.z = new w.$re()),
							(this.C = new Map()),
							(this.F = new Map()),
							(this.G = []),
							(this.db = new Date()),
							(this.configPortsAttributes = new N(U)),
							(this.r = this.ab()),
							this.D(
								this.configPortsAttributes.onDidChangeAttributes(this.jb, this),
							),
							(this.forwarded = new Map()),
							(this.f = new Map()),
							this.H.tunnels.then(async (K) => {
								const J = await this.getAttributes(
									K.map((W) => ({
										port: W.tunnelRemotePort,
										host: W.tunnelRemoteHost,
									})),
								);
								for (const W of K)
									if (W.localAddress) {
										const X = L(W.tunnelRemoteHost, W.tunnelRemotePort),
											Y = k(
												this.m ?? new Map(),
												W.tunnelRemoteHost,
												W.tunnelRemotePort,
											);
										this.forwarded.set(X, {
											remotePort: W.tunnelRemotePort,
											remoteHost: W.tunnelRemoteHost,
											localAddress: W.localAddress,
											protocol:
												J?.get(W.tunnelRemotePort)?.protocol ??
												c.TunnelProtocol.Http,
											localUri: await this.X(
												W.localAddress,
												J?.get(W.tunnelRemotePort),
											),
											localPort: W.tunnelLocalPort,
											name: J?.get(W.tunnelRemotePort)?.label,
											runningProcess: Y?.detail,
											hasRunningProcess: !!Y,
											pid: Y?.pid,
											privacy: W.privacy,
											source: e.$v8,
										}),
											this.f.set(X, W);
									}
							}),
							(this.detected = new Map()),
							this.D(
								this.H.onTunnelOpened(async (K) => {
									const J = L(K.tunnelRemoteHost, K.tunnelRemotePort);
									if (
										!k(
											this.forwarded,
											K.tunnelRemoteHost,
											K.tunnelRemotePort,
										) &&
										!k(this.detected, K.tunnelRemoteHost, K.tunnelRemotePort) &&
										!k(this.c, K.tunnelRemoteHost, K.tunnelRemotePort) &&
										K.localAddress
									) {
										const W = k(
												this.m ?? new Map(),
												K.tunnelRemoteHost,
												K.tunnelRemotePort,
											),
											X = (
												await this.getAttributes([
													{
														port: K.tunnelRemotePort,
														host: K.tunnelRemoteHost,
													},
												])
											)?.get(K.tunnelRemotePort);
										this.forwarded.set(J, {
											remoteHost: K.tunnelRemoteHost,
											remotePort: K.tunnelRemotePort,
											localAddress: K.localAddress,
											protocol: X?.protocol ?? c.TunnelProtocol.Http,
											localUri: await this.X(K.localAddress, X),
											localPort: K.tunnelLocalPort,
											name: X?.label,
											closeable: !0,
											runningProcess: W?.detail,
											hasRunningProcess: !!W,
											pid: W?.pid,
											privacy: K.privacy,
											source: e.$v8,
										});
									}
									await this.cb(),
										this.f.set(J, K),
										this.g.fire(this.forwarded.get(J));
								}),
							),
							this.D(this.H.onTunnelClosed((K) => this.W(K, I.Other))),
							this.U();
					}
					S() {
						return this.Q.extensions.find((O) =>
							O.activationEvents?.includes(e.$s8),
						)
							? (this.R.createKey(e.$t8.key, !0), !0)
							: !1;
					}
					U() {
						if (this.S()) return;
						const O = this.D(
							this.Q.onDidRegisterExtensions(() => {
								this.S() && O.dispose();
							}),
						);
					}
					async W(O, B) {
						const U = L(O.host, O.port);
						this.forwarded.has(U) &&
							(this.forwarded.delete(U), await this.cb(), this.h.fire(O));
					}
					X(O, B) {
						if (O.startsWith("http")) return d.URI.parse(O);
						const U = B?.protocol ?? "http";
						return d.URI.parse(`${U}://${O}`);
					}
					async Y(O) {
						const B = this.N.getWorkspace(),
							U = B.configuration
								? (0, E.$Aj)(B.configuration.path)
								: B.folders.length > 0
									? (0, E.$Aj)(B.folders[0].uri.path)
									: void 0;
						if (U === void 0) {
							this.O.debug(
								"Could not get workspace hash for forwarded ports storage key.",
							);
							return;
						}
						return `${O}.${this.L.remoteAuthority}.${U}`;
					}
					async Z() {
						return this.Y(y);
					}
					async $() {
						return this.Y($);
					}
					async ab() {
						const O = this.I.get(y, h.StorageScope.WORKSPACE);
						if (O)
							return (
								this.I.remove(y, h.StorageScope.WORKSPACE), await this.cb(), O
							);
						const B = await this.Z();
						if (B) return this.I.get(B, h.StorageScope.PROFILE);
					}
					async restoreForwarded() {
						if ((this.bb(), this.J.getValue("remote.restoreForwardedPorts"))) {
							const O = await this.r;
							if (O && O !== this.w) {
								const B = JSON.parse(O) ?? [];
								this.O.trace(
									`ForwardedPorts: (TunnelModel) restoring ports ${B.map((U) => U.remotePort).join(", ")}`,
								);
								for (const U of B) {
									const z = k(this.detected, U.remoteHost, U.remotePort);
									(U.source.source !== T.Extension && !z) ||
									(U.source.source === T.Extension && z)
										? await this.fb({
												remote: { host: U.remoteHost, port: U.remotePort },
												local: U.localPort,
												name: U.name,
												elevateIfNeeded: !0,
												source: U.source,
											})
										: U.source.source === T.Extension &&
											!z &&
											this.C.set(L(U.remoteHost, U.remotePort), U);
								}
							}
						}
						if (((this.y = !0), this.z.fire(), !this.u)) {
							const O = await this.Z();
							(this.u = this.D(new C.$Zc())),
								this.u.add(
									this.I.onDidChangeValue(
										h.StorageScope.PROFILE,
										void 0,
										this.u,
									)(async (B) => {
										B.key === O &&
											((this.r = Promise.resolve(
												this.I.get(O, h.StorageScope.PROFILE),
											)),
											await this.restoreForwarded());
									}),
								);
						}
					}
					bb() {
						const O = this.I.keys(
							h.StorageScope.PROFILE,
							h.StorageTarget.USER,
						).filter((B) => B.startsWith($));
						for (const B of O) {
							const U = this.I.getNumber(B, h.StorageScope.PROFILE);
							if (U && U < Date.now()) {
								this.r = Promise.resolve(void 0);
								const z = B.replace($, y);
								this.I.remove(B, h.StorageScope.PROFILE),
									this.I.remove(z, h.StorageScope.PROFILE);
							}
						}
					}
					async cb() {
						if (this.J.getValue("remote.restoreForwardedPorts")) {
							const O = Array.from(this.forwarded.values()),
								B = O.map((x) => ({
									remoteHost: x.remoteHost,
									remotePort: x.remotePort,
									localPort: x.localPort,
									name: x.name,
									localAddress: x.localAddress,
									localUri: x.localUri,
									protocol: x.protocol,
									source: x.source,
								}));
							let U;
							O.length > 0 && (U = JSON.stringify(B));
							const z = await this.Z(),
								F = await this.$();
							!U && z && F
								? (this.I.remove(z, h.StorageScope.PROFILE),
									this.I.remove(F, h.StorageScope.PROFILE))
								: U !== this.w &&
									z &&
									F &&
									(this.I.store(
										z,
										U,
										h.StorageScope.PROFILE,
										h.StorageTarget.USER,
									),
									this.I.store(
										F,
										Date.now() + v,
										h.StorageScope.PROFILE,
										h.StorageTarget.USER,
									)),
								(this.w = U);
						}
					}
					async eb(O, B, U) {
						if (
							!O.tunnelLocalPort ||
							!U?.requireLocalPort ||
							O.tunnelLocalPort === B
						)
							return;
						const z = new Date();
						if (this.db.getTime() + l > z.getTime()) return;
						this.db = z;
						const F = t.localize(
							12641,
							null,
							B,
							O.tunnelRemotePort,
							O.tunnelLocalPort,
						);
						return this.P.info(F);
					}
					async forward(O, B) {
						return (
							!this.y &&
								this.L.remoteAuthority &&
								(await w.Event.toPromise(this.z.event)),
							this.fb(O, B)
						);
					}
					async fb(O, B) {
						await this.Q.activateByEvent(e.$s8);
						const U = k(this.forwarded, O.remote.host, O.remote.port);
						B =
							B ??
							(B !== null
								? (await this.getAttributes([O.remote]))?.get(O.remote.port)
								: void 0);
						const z = O.local !== void 0 ? O.local : O.remote.port;
						let F;
						if (U) return this.hb(U, O, B);
						{
							const x = this.L.remoteAuthority,
								H = x
									? {
											getAddress: async () =>
												(await this.M.resolveAuthority(x)).authority,
										}
									: void 0,
								q = L(O.remote.host, O.remote.port);
							this.c.set(q, !0), (O = this.gb(q, O));
							const V = await this.H.openTunnel(
								H,
								O.remote.host,
								O.remote.port,
								void 0,
								z,
								O.elevateIfNeeded ? O.elevateIfNeeded : B?.elevateIfNeeded,
								O.privacy,
								B?.protocol,
							);
							if (typeof V == "string") F = V;
							else if (V && V.localAddress) {
								const G = k(this.m ?? new Map(), O.remote.host, O.remote.port),
									K = V.protocol
										? V.protocol === c.TunnelProtocol.Https
											? c.TunnelProtocol.Https
											: c.TunnelProtocol.Http
										: (B?.protocol ?? c.TunnelProtocol.Http),
									J = {
										remoteHost: V.tunnelRemoteHost,
										remotePort: V.tunnelRemotePort,
										localPort: V.tunnelLocalPort,
										name: B?.label ?? O.name,
										closeable: !0,
										localAddress: V.localAddress,
										protocol: K,
										localUri: await this.X(V.localAddress, B),
										runningProcess: G?.detail,
										hasRunningProcess: !!G,
										pid: G?.pid,
										source: O.source ?? e.$v8,
										privacy: V.privacy,
									};
								return (
									this.forwarded.set(q, J),
									this.f.set(q, V),
									this.c.delete(q),
									await this.cb(),
									await this.eb(V, z, B),
									this.g.fire(J),
									V
								);
							}
							this.c.delete(q);
						}
						return F;
					}
					gb(O, B) {
						const U = this.C.has(O) ? this.C : this.F.has(O) ? this.F : void 0;
						if (U) {
							const z = U.get(O);
							U.delete(O),
								z &&
									((B.name = z.name ?? B.name),
									(B.local =
										("local" in z
											? z.local
											: "localPort" in z
												? z.localPort
												: void 0) ?? B.local),
									(B.privacy = B.privacy));
						}
						return B;
					}
					async hb(O, B, U) {
						const z = U?.label ?? B.name;
						let F;
						(function (H) {
							(H[(H.None = 0)] = "None"),
								(H[(H.Fire = 1)] = "Fire"),
								(H[(H.Reopen = 2)] = "Reopen");
						})(F || (F = {}));
						let x = F.None;
						switch (
							(z !== O.name && ((O.name = z), (x = F.Fire)),
							(U?.protocol || O.protocol !== c.TunnelProtocol.Http) &&
								U?.protocol !== O.protocol &&
								((B.source = O.source), (x = F.Reopen)),
							B.privacy && O.privacy !== B.privacy && (x = F.Reopen),
							x)
						) {
							case F.Fire: {
								this.g.fire();
								break;
							}
							case F.Reopen:
								await this.close(O.remoteHost, O.remotePort, I.User),
									await this.fb(B, U);
						}
						return k(this.f, B.remote.host, B.remote.port);
					}
					async name(O, B, U) {
						const z = k(this.forwarded, O, B),
							F = L(O, B);
						if (z) {
							(z.name = U), await this.cb(), this.j.fire({ host: O, port: B });
							return;
						} else
							this.detected.has(F) &&
								((this.detected.get(F).name = U),
								this.j.fire({ host: O, port: B }));
					}
					async close(O, B, U) {
						const z = L(O, B),
							F = this.forwarded.get(z);
						return (
							U === I.AutoForwardEnd &&
								F &&
								F.source.source === T.Auto &&
								this.F.set(z, {
									local: F.localPort,
									name: F.name,
									privacy: F.privacy,
								}),
							await this.H.closeTunnel(O, B),
							this.W({ host: O, port: B }, U)
						);
					}
					address(O, B) {
						const U = L(O, B);
						return (this.forwarded.get(U) || this.detected.get(U))
							?.localAddress;
					}
					get environmentTunnelsSet() {
						return this.t;
					}
					addEnvironmentTunnels(O) {
						if (O)
							for (const B of O) {
								const U = k(
										this.m ?? new Map(),
										B.remoteAddress.host,
										B.remoteAddress.port,
									),
									z =
										typeof B.localAddress == "string"
											? B.localAddress
											: L(B.localAddress.host, B.localAddress.port);
								this.detected.set(
									L(B.remoteAddress.host, B.remoteAddress.port),
									{
										remoteHost: B.remoteAddress.host,
										remotePort: B.remoteAddress.port,
										localAddress: z,
										protocol: c.TunnelProtocol.Http,
										localUri: this.X(z),
										closeable: !1,
										runningProcess: U?.detail,
										hasRunningProcess: !!U,
										pid: U?.pid,
										privacy: c.TunnelPrivacyId.ConstantPrivate,
										source: {
											source: T.Extension,
											description: t.localize(12642, null),
										},
									},
								),
									this.H.setEnvironmentTunnel(
										B.remoteAddress.host,
										B.remoteAddress.port,
										z,
										c.TunnelPrivacyId.ConstantPrivate,
										c.TunnelProtocol.Http,
									);
							}
						(this.t = !0), this.s.fire(), this.g.fire();
					}
					setCandidateFilter(O) {
						this.q = O;
					}
					async setCandidates(O) {
						let B = O;
						this.q && (B = await this.q(O));
						const U = this.ib(B);
						this.O.trace(
							`ForwardedPorts: (TunnelModel) removed candidates ${Array.from(
								U.values(),
							)
								.map((z) => z.port)
								.join(", ")}`,
						),
							this.n.fire(U);
					}
					ib(O) {
						const B = this.m ?? new Map(),
							U = new Map();
						return (
							(this.m = U),
							O.forEach((z) => {
								const F = L(z.host, z.port);
								U.set(F, {
									host: z.host,
									port: z.port,
									detail: z.detail,
									pid: z.pid,
								}),
									B.has(F) && B.delete(F);
								const x = k(this.forwarded, z.host, z.port);
								x &&
									((x.runningProcess = z.detail),
									(x.hasRunningProcess = !0),
									(x.pid = z.pid));
							}),
							B.forEach((z, F) => {
								const x = S(F);
								if (!x) return;
								const H = k(this.forwarded, x.host, x.port);
								H &&
									((H.runningProcess = void 0),
									(H.hasRunningProcess = !1),
									(H.pid = void 0));
								const q = k(this.detected, x.host, x.port);
								q &&
									((q.runningProcess = void 0),
									(q.hasRunningProcess = !1),
									(q.pid = void 0));
							}),
							B
						);
					}
					get candidates() {
						return this.m ? Array.from(this.m.values()) : [];
					}
					get candidatesOrUndefined() {
						return this.m ? this.candidates : void 0;
					}
					async jb() {
						const O = Array.from(this.forwarded.values()),
							B = await this.getAttributes(
								O.map((U) => ({ port: U.remotePort, host: U.remoteHost })),
								!1,
							);
						if (B)
							for (const U of O) {
								const z = B.get(U.remotePort);
								(z?.protocol || U.protocol !== c.TunnelProtocol.Http) &&
									z?.protocol !== U.protocol &&
									(await this.fb(
										{
											remote: { host: U.remoteHost, port: U.remotePort },
											local: U.localPort,
											name: U.name,
											source: U.source,
										},
										z,
									)),
									z &&
										z.label &&
										z.label !== U.name &&
										(await this.name(U.remoteHost, U.remotePort, z.label));
							}
					}
					async getAttributes(O, B = !0) {
						const U = new Map(),
							z = new Map();
						O.forEach((V) => {
							const G = k(this.m ?? new Map(), c.$hO[0], V.port) ?? V;
							if (G) {
								U.set(V.port, G);
								const K = M(G) ? G.pid : void 0;
								z.has(K) || z.set(K, []), z.get(K)?.push(V.port);
							}
						});
						const F = new Map();
						if (
							(O.forEach((V) => {
								const G = this.configPortsAttributes.getAttributes(
									V.port,
									V.host,
									U.get(V.port)?.detail,
								);
								G && F.set(V.port, G);
							}),
							this.G.length === 0 || !B)
						)
							return F.size > 0 ? F : void 0;
						const x = await Promise.all(
								this.G.flatMap((V) =>
									Array.from(z.entries()).map((G) => {
										const K = G[1],
											J = U.get(K[0]);
										return V.providePortAttributes(
											K,
											J?.pid,
											J?.detail,
											o.CancellationToken.None,
										);
									}),
								),
							),
							H = new Map();
						if (
							(x.forEach((V) =>
								V.forEach((G) => {
									G && H.set(G.port, G);
								}),
							),
							!F && !H)
						)
							return;
						const q = new Map();
						return (
							O.forEach((V) => {
								const G = F.get(V.port),
									K = H.get(V.port);
								q.set(V.port, {
									elevateIfNeeded: G?.elevateIfNeeded,
									label: G?.label,
									onAutoForward:
										G?.onAutoForward ??
										N.providedActionToAction(K?.autoForwardAction),
									requireLocalPort: G?.requireLocalPort,
									protocol: G?.protocol,
								});
							}),
							q
						);
					}
					addAttributesProvider(O) {
						this.G.push(O);
					}
				};
				(e.$C8 = A),
					Ne([(0, i.$fi)(1e3)], A.prototype, "cb", null),
					(e.$C8 = A =
						Ne(
							[
								j(0, c.$cO),
								j(1, h.$lq),
								j(2, m.$gj),
								j(3, g.$r8),
								j(4, a.$3l),
								j(5, n.$Vi),
								j(6, u.$ik),
								j(7, r.$GO),
								j(8, p.$q2),
								j(9, s.$6j),
							],
							A,
						));
			},
		),
		