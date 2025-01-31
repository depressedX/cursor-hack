import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import '../../../platform/tunnel/common/tunnel.js';
import './extHost.protocol.js';
import './extHostInitDataService.js';
import './extHostRpcService.js';
import './extHostTypes.js';
define(
			de[3466],
			he([1, 0, 33, 6, 3, 4, 5, 34, 374, 88, 2941, 2942, 1028]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*nls*/,
 C /*instantiation*/,
 d /*log*/,
 m /*tunnel*/,
 r /*extHost.protocol*/,
 u /*extHostInitDataService*/,
 a /*extHostRpcService*/,
 h /*extHostTypes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4pc = e.$3pc = e.TunnelDtoConverter = void 0),
					(E = mt(E)),
					(h = mt(h));
				class c extends m.$mO {}
				var n;
				(function (p) {
					function o(b) {
						return {
							remoteAddress: b.remoteAddress,
							localAddress: b.localAddress,
							public: !!b.public,
							privacy:
								b.privacy ??
								(b.public
									? m.TunnelPrivacyId.Public
									: m.TunnelPrivacyId.Private),
							protocol: b.protocol,
						};
					}
					p.fromApiTunnel = o;
					function f(b) {
						return {
							remoteAddress: {
								host: b.tunnelRemoteHost,
								port: b.tunnelRemotePort,
							},
							localAddress: b.localAddress,
							public:
								b.privacy !== m.TunnelPrivacyId.ConstantPrivate &&
								b.privacy !== m.TunnelPrivacyId.ConstantPrivate,
							privacy: b.privacy,
							protocol: b.protocol,
						};
					}
					p.fromServiceTunnel = f;
				})(n || (e.TunnelDtoConverter = n = {})),
					(e.$3pc = (0, C.$Mi)("IExtHostTunnelService"));
				let g = class extends w.$1c {
					constructor(o, f, b) {
						super(),
							(this.r = b),
							(this.f = () => Promise.resolve(!0)),
							(this.g = new Map()),
							(this.h = new i.$re()),
							(this.onDidChangeTunnels = this.h.event),
							(this.n = 0),
							(this.q = new Map()),
							(this.a = o.getProxy(r.$lbb.MainThreadTunnelService));
					}
					async openTunnel(o, f) {
						this.r.trace(
							`ForwardedPorts: (ExtHostTunnelService) ${o.identifier.value} called openTunnel API for ${f.remoteAddress.host}:${f.remoteAddress.port}.`,
						);
						const b = await this.a.$openTunnel(f, o.displayName);
						if (b) {
							const s = new c(b.remoteAddress, b.localAddress, () =>
								this.a.$closeTunnel(b.remoteAddress),
							);
							return this.D(s), s;
						}
					}
					async getTunnels() {
						return this.a.$getTunnels();
					}
					s() {
						return this.n++;
					}
					registerPortsAttributesProvider(o, f) {
						o.portRange === void 0 &&
							o.commandPattern === void 0 &&
							this.r.error(
								"PortAttributesProvider must specify either a portRange or a commandPattern",
							);
						const b = this.s();
						return (
							this.q.set(b, { selector: o, provider: f }),
							this.a.$registerPortsAttributesProvider(o, b),
							new h.$nbb(() => {
								this.q.delete(b), this.a.$unregisterPortsAttributesProvider(b);
							})
						);
					}
					async $providePortAttributes(o, f, b, s, l) {
						const y = [];
						for (const v of o) {
							const S = this.q.get(v);
							if (!S) return [];
							y.push(
								...(await Promise.all(
									f.map(async (I) => {
										let T;
										try {
											T = await S.provider.providePortAttributes(
												{ port: I, pid: b, commandLine: s },
												l,
											);
										} catch {
											T = await S.provider.providePortAttributes(I, b, s, l);
										}
										return { providedAttributes: T, port: I };
									}),
								)),
							);
						}
						const $ = y.filter((v) => !!v.providedAttributes);
						return $.length > 0
							? $.map((v) => ({
									autoForwardAction: v.providedAttributes.autoForwardAction,
									port: v.port,
								}))
							: [];
					}
					async $registerCandidateFinder(o) {}
					registerTunnelProvider(o, f) {
						if (this.b)
							throw new Error(
								"A tunnel provider has already been registered. Only the first tunnel provider to be registered will be used.",
							);
						this.b = async (s, l) =>
							(await o.provideTunnel(s, l, t.CancellationToken.None)) ?? void 0;
						const b = f.tunnelFeatures
							? {
									elevation: !!f.tunnelFeatures?.elevation,
									privacyOptions: f.tunnelFeatures?.privacyOptions,
									protocol:
										f.tunnelFeatures.protocol === void 0
											? !0
											: f.tunnelFeatures.protocol,
								}
							: void 0;
						return (
							this.a.$setTunnelProvider(b),
							Promise.resolve(
								(0, w.$Yc)(() => {
									(this.b = void 0), this.a.$setTunnelProvider(void 0);
								}),
							)
						);
					}
					async setTunnelFactory(o, f) {
						if (o) {
							o.candidatePortSource !== void 0 &&
								this.a.$setCandidatePortSource(o.candidatePortSource),
								o.showCandidatePort &&
									((this.f = o.showCandidatePort),
									this.a.$setCandidateFilter());
							const b = o.tunnelFactory ?? (f ? this.u(f) : void 0);
							if (b) {
								this.b = b;
								let s = o.tunnelFeatures?.privacyOptions ?? [];
								o.tunnelFeatures?.public &&
									s.length === 0 &&
									(s = [
										{
											id: "private",
											label: E.localize(2723, null),
											themeIcon: "lock",
										},
										{
											id: "public",
											label: E.localize(2724, null),
											themeIcon: "eye",
										},
									]);
								const l = o.tunnelFeatures
									? {
											elevation: !!o.tunnelFeatures?.elevation,
											public: !!o.tunnelFeatures?.public,
											privacyOptions: s,
											protocol: !0,
										}
									: void 0;
								this.a.$setTunnelProvider(l);
							}
						} else this.b = void 0;
						return (0, w.$Yc)(() => {
							this.b = void 0;
						});
					}
					u(o) {}
					async $closeTunnel(o, f) {
						if (this.g.has(o.host)) {
							const b = this.g.get(o.host);
							b.has(o.port) &&
								(f && b.get(o.port).disposeListener.dispose(),
								await b.get(o.port).tunnel.dispose(),
								b.delete(o.port));
						}
					}
					async $onDidTunnelsChange() {
						this.h.fire();
					}
					async $forwardPort(o, f) {
						if (this.b)
							try {
								this.r.trace(
									"ForwardedPorts: (ExtHostTunnelService) Getting tunnel from provider.",
								);
								const b = this.b(o, f);
								if (
									(this.r.trace(
										"ForwardedPorts: (ExtHostTunnelService) Got tunnel promise from provider.",
									),
									b !== void 0)
								) {
									const s = await b;
									if (
										(this.r.trace(
											"ForwardedPorts: (ExtHostTunnelService) Successfully awaited tunnel from provider.",
										),
										s === void 0)
									) {
										this.r.error(
											"ForwardedPorts: (ExtHostTunnelService) Resolved tunnel is undefined",
										);
										return;
									}
									this.g.has(o.remoteAddress.host) ||
										this.g.set(o.remoteAddress.host, new Map());
									const l = this.D(
										s.onDidDispose(
											() => (
												this.r.trace(
													"ForwardedPorts: (ExtHostTunnelService) Extension fired tunnel's onDidDispose.",
												),
												this.a.$closeTunnel(s.remoteAddress)
											),
										),
									);
									return (
										this.g
											.get(o.remoteAddress.host)
											.set(o.remoteAddress.port, {
												tunnel: s,
												disposeListener: l,
											}),
										n.fromApiTunnel(s)
									);
								} else
									this.r.trace(
										"ForwardedPorts: (ExtHostTunnelService) Tunnel is undefined",
									);
							} catch (b) {
								if (
									(this.r.trace(
										"ForwardedPorts: (ExtHostTunnelService) tunnel provider error",
									),
									b instanceof Error)
								)
									return b.message;
							}
					}
					async $applyCandidateFilter(o) {
						const f = await Promise.all(
								o.map((s) => this.f(s.host, s.port, s.detail ?? "")),
							),
							b = o.filter((s, l) => f[l]);
						return (
							this.r.trace(
								`ForwardedPorts: (ExtHostTunnelService) filtered from ${o.map((s) => s.port).join(", ")} to ${b.map((s) => s.port).join(", ")}`,
							),
							b
						);
					}
				};
				(e.$4pc = g),
					(e.$4pc = g = Ne([j(0, a.$08), j(1, u.$98), j(2, d.$ik)], g));
			},
		)
