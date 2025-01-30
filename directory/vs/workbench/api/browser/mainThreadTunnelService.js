import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../common/extHost.protocol.js';
import '../common/extHostTunnelService.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/remote/common/remoteExplorerService.js';
import '../../../platform/tunnel/common/tunnel.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/notification/common/notification.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/log/common/log.js';
import '../../services/remote/common/remoteAgentService.js';
import '../../../platform/registry/common/platform.js';
import '../../../platform/configuration/common/configurationRegistry.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../../services/remote/common/tunnelModel.js';
define(
			de[3589],
			he([
				1, 0, 4, 88, 3466, 101, 519, 374, 3, 40, 10, 34, 143, 30, 81, 8, 839,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*extHost.protocol*/,
 w /*extHostTunnelService*/,
 E /*extHostCustomers*/,
 C /*remoteExplorerService*/,
 d /*tunnel*/,
 m /*lifecycle*/,
 r /*notification*/,
 u /*configuration*/,
 a /*log*/,
 h /*remoteAgentService*/,
 c /*platform*/,
 n /*configurationRegistry*/,
 g /*contextkey*/,
 p /*tunnelModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cqc = void 0),
					(t = mt(t));
				let o = class extends m.$1c {
					constructor(b, s, l, y, $, v, S, I) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.b = !1),
							(this.c = new Map()),
							(this.s = !1),
							(this.a = b.getProxy(i.$mbb.ExtHostTunnelService)),
							this.D(l.onTunnelOpened(() => this.a.$onDidTunnelsChange())),
							this.D(l.onTunnelClosed(() => this.a.$onDidTunnelsChange()));
					}
					r() {
						return (
							(!!this.j.getValue(C.$9pc) || this.g.hasTunnelProvider) &&
							this.j.getValue(C.$0pc) !== C.$aqc
						);
					}
					async $setRemoteTunnelService(b) {
						this.f.namedProcesses.set(b, "Code Extension Host"),
							this.f.portsFeaturesEnabled
								? this.a.$registerCandidateFinder(this.r())
								: this.D(
										this.f.onEnabledPortsFeatures(() =>
											this.a.$registerCandidateFinder(this.r()),
										),
									),
							this.D(
								this.j.onDidChangeConfiguration(async (s) => {
									if (
										s.affectsConfiguration(C.$9pc) ||
										s.affectsConfiguration(C.$0pc)
									)
										return this.a.$registerCandidateFinder(this.r());
								}),
							),
							this.D(
								this.g.onAddedTunnelProvider(() =>
									this.a.$registerCandidateFinder(this.r()),
								),
							);
					}
					async $registerPortsAttributesProvider(b, s) {
						this.c.set(s, b),
							this.s ||
								(this.f.tunnelModel.addAttributesProvider(this), (this.s = !0));
					}
					async $unregisterPortsAttributesProvider(b) {
						this.c.delete(b);
					}
					async providePortAttributes(b, s, l, y) {
						if (this.c.size === 0) return [];
						const $ = Array.from(this.c.entries())
							.filter((v) => {
								const S = v[1],
									I =
										typeof S.portRange == "number"
											? [S.portRange, S.portRange + 1]
											: S.portRange,
									T = I ? b.some((k) => I[0] <= k && k < I[1]) : !0,
									P = !S.commandPattern || (l && l.match(S.commandPattern));
								return T && P;
							})
							.map((v) => v[0]);
						return $.length === 0
							? []
							: this.a.$providePortAttributes($, b, s, l, y);
					}
					async $openTunnel(b, s) {
						const l = await this.f.forward({
							remote: b.remoteAddress,
							local: b.localAddressPort,
							name: b.label,
							source: { source: p.TunnelSource.Extension, description: s },
							elevateIfNeeded: !1,
						});
						if (!(!l || typeof l == "string"))
							return (
								!this.b &&
									b.localAddressPort !== void 0 &&
									l.tunnelLocalPort !== void 0 &&
									this.g.isPortPrivileged(b.localAddressPort) &&
									l.tunnelLocalPort !== b.localAddressPort &&
									this.g.canElevate &&
									this.t(b, l, s),
								w.TunnelDtoConverter.fromServiceTunnel(l)
							);
					}
					async t(b, s, l) {
						return this.h.prompt(
							r.Severity.Info,
							t.localize(
								2580,
								null,
								l,
								b.remoteAddress.port,
								b.localAddressPort,
							),
							[
								{
									label: t.localize(2581, null, s.tunnelRemotePort),
									run: async () => {
										(this.b = !0),
											await this.f.close(
												{ host: s.tunnelRemoteHost, port: s.tunnelRemotePort },
												p.TunnelCloseReason.Other,
											),
											await this.f.forward({
												remote: b.remoteAddress,
												local: b.localAddressPort,
												name: b.label,
												source: {
													source: p.TunnelSource.Extension,
													description: l,
												},
												elevateIfNeeded: !0,
											}),
											(this.b = !1);
									},
								},
							],
						);
					}
					async $closeTunnel(b) {
						return this.f.close(b, p.TunnelCloseReason.Other);
					}
					async $getTunnels() {
						return (await this.g.tunnels).map((b) => ({
							remoteAddress: {
								port: b.tunnelRemotePort,
								host: b.tunnelRemoteHost,
							},
							localAddress: b.localAddress,
							privacy: b.privacy,
							protocol: b.protocol,
						}));
					}
					async $onFoundNewCandidates(b) {
						this.f.onFoundNewCandidates(b);
					}
					async $setTunnelProvider(b) {
						const s = {
							forwardPort: (l, y) =>
								this.a.$forwardPort(l, y).then((v) => {
									if (v) {
										if (typeof v == "string") return v;
									} else return;
									const S = v;
									return (
										this.m.trace(
											`ForwardedPorts: (MainThreadTunnelService) New tunnel established by tunnel provider: ${S?.remoteAddress.host}:${S?.remoteAddress.port}`,
										),
										{
											tunnelRemotePort: S.remoteAddress.port,
											tunnelRemoteHost: S.remoteAddress.host,
											localAddress:
												typeof S.localAddress == "string"
													? S.localAddress
													: (0, p.$z8)(
															S.localAddress.host,
															S.localAddress.port,
														),
											tunnelLocalPort:
												typeof S.localAddress != "string"
													? S.localAddress.port
													: void 0,
											public: S.public,
											privacy: S.privacy,
											protocol: S.protocol ?? d.TunnelProtocol.Http,
											dispose: async (I) => (
												this.m.trace(
													`ForwardedPorts: (MainThreadTunnelService) Closing tunnel from tunnel provider: ${S?.remoteAddress.host}:${S?.remoteAddress.port}`,
												),
												this.a.$closeTunnel(
													{
														host: S.remoteAddress.host,
														port: S.remoteAddress.port,
													},
													I,
												)
											),
										}
									);
								}),
						};
						b && this.g.setTunnelFeatures(b),
							this.g.setTunnelProvider(s),
							this.q.createKey(p.$t8.key, !0);
					}
					async $setCandidateFilter() {
						this.f.setCandidateFilter((b) => this.a.$applyCandidateFilter(b));
					}
					async $setCandidatePortSource(b) {
						this.n
							.getEnvironment()
							.then(() => {
								switch (b) {
									case i.CandidatePortSource.None: {
										c.$Io
											.as(n.$No.Configuration)
											.registerDefaultConfigurations([
												{ overrides: { "remote.autoForwardPorts": !1 } },
											]);
										break;
									}
									case i.CandidatePortSource.Output: {
										c.$Io
											.as(n.$No.Configuration)
											.registerDefaultConfigurations([
												{
													overrides: {
														"remote.autoForwardPortsSource": C.$aqc,
													},
												},
											]);
										break;
									}
									case i.CandidatePortSource.Hybrid: {
										c.$Io
											.as(n.$No.Configuration)
											.registerDefaultConfigurations([
												{
													overrides: {
														"remote.autoForwardPortsSource": C.$bqc,
													},
												},
											]);
										break;
									}
									default:
								}
							})
							.catch(() => {});
					}
				};
				(e.$cqc = o),
					(e.$cqc = o =
						Ne(
							[
								(0, E.$tmc)(i.$lbb.MainThreadTunnelService),
								j(1, C.$5pc),
								j(2, d.$cO),
								j(3, r.$4N),
								j(4, u.$gj),
								j(5, a.$ik),
								j(6, h.$$m),
								j(7, g.$6j),
							],
							o,
						));
			},
		),
		