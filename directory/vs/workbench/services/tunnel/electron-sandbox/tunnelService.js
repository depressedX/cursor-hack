import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/log/common/log.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/remote/common/sharedProcessTunnelService.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../../base/common/platform.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[3744],
			he([1, 0, 34, 78, 20, 374, 3, 1637, 52, 211, 5, 151, 12, 10]),
			function (ce /*require*/,
 e /*exports*/,
 t /*log*/,
 i /*environmentService*/,
 w /*extensions*/,
 E /*tunnel*/,
 C /*lifecycle*/,
 d /*sharedProcessTunnelService*/,
 m /*lifecycle*/,
 r /*remoteAuthorityResolver*/,
 u /*instantiation*/,
 a /*environmentService*/,
 h /*platform*/,
 c /*configuration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ydd = void 0);
				let n = class extends C.$1c {
					constructor(o, f, b, s, l, y, $, v, S) {
						super(),
							(this.a = o),
							(this.b = f),
							(this.tunnelRemoteHost = b),
							(this.tunnelRemotePort = s),
							(this.tunnelLocalPort = l),
							(this.localAddress = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.privacy = E.TunnelPrivacyId.Private),
							(this.protocol = void 0),
							this.h(),
							this.D(this.g.onDidChangeConnectionData(() => this.h()));
					}
					h() {
						this.b.getAddress().then((o) => {
							this.f.setAddress(this.a, o);
						});
					}
					async dispose() {
						this.c(), super.dispose(), await this.f.destroyTunnel(this.a);
					}
				};
				n = Ne([j(7, d.$p9c), j(8, r.$3l)], n);
				let g = class extends E.$nO {
					constructor(o, f, b, s, l, y, $) {
						super(o, $),
							(this.I = f),
							(this.J = b),
							(this.L = s),
							(this.M = y),
							(this.H = new Set()),
							this.D(
								l.onDidShutdown(() => {
									this.H.forEach((v) => {
										this.J.destroyTunnel(v);
									});
								}),
							);
					}
					isPortPrivileged(o) {
						return (0, E.$lO)(o, this.s, h.OS, this.M.os.release);
					}
					F(o, f, b, s, l, y, $, v) {
						const S = this.C(f, b);
						if (S) return ++S.refcount, S.value;
						if ((0, E.$eO)(o)) return this.G(o, f, b, l, y, $, v);
						{
							this.q.trace(
								`ForwardedPorts: (TunnelService) Creating tunnel without provider ${f}:${b} on local port ${l}.`,
							);
							const I = this.O(o, f, b, s, l, y);
							return (
								this.q.trace(
									"ForwardedPorts: (TunnelService) Tunnel created without provider.",
								),
								this.y(f, b, I),
								I
							);
						}
					}
					async O(o, f, b, s, l, y) {
						const { id: $ } = await this.J.createTunnel();
						this.H.add($);
						const v = this.I.remoteAuthority,
							S = await this.J.startTunnel(v, $, f, b, s, l, y);
						return this.L.createInstance(
							n,
							$,
							o,
							f,
							b,
							S.tunnelLocalPort,
							S.localAddress,
							() => {
								this.H.delete($);
							},
						);
					}
					canTunnel(o) {
						return super.canTunnel(o) && !!this.I.remoteAuthority;
					}
				};
				(e.$Ydd = g),
					(e.$Ydd = g =
						Ne(
							[
								j(0, t.$ik),
								j(1, i.$r8),
								j(2, d.$p9c),
								j(3, u.$Li),
								j(4, m.$n6),
								j(5, a.$ucd),
								j(6, c.$gj),
							],
							g,
						)),
					(0, w.$lK)(E.$cO, g, w.InstantiationType.Delayed);
			},
		)
