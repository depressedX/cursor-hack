import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../../base/common/uri.js';
import '../../configuration/common/configuration.js';
import '../../instantiation/common/instantiation.js';
import '../../log/common/log.js';
define(
			de[374],
			he([1, 0, 6, 3, 12, 9, 10, 5, 34]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nO =
						e.$mO =
						e.$jO =
						e.$hO =
						e.ProvidedOnAutoForward =
						e.TunnelPrivacyId =
						e.TunnelProtocol =
						e.$dO =
						e.$cO =
							void 0),
					(e.$eO = a),
					(e.$fO = c),
					(e.$gO = n),
					(e.$iO = g),
					(e.$kO = p),
					(e.$lO = o),
					(e.$cO = (0, d.$Mi)("tunnelService")),
					(e.$dO = (0, d.$Mi)("sharedTunnelsService"));
				var r;
				(function (s) {
					(s.Http = "http"), (s.Https = "https");
				})(r || (e.TunnelProtocol = r = {}));
				var u;
				(function (s) {
					(s.ConstantPrivate = "constantPrivate"),
						(s.Private = "private"),
						(s.Public = "public");
				})(u || (e.TunnelPrivacyId = u = {}));
				function a(s) {
					return !!s.forwardPort;
				}
				var h;
				(function (s) {
					(s[(s.Notify = 1)] = "Notify"),
						(s[(s.OpenBrowser = 2)] = "OpenBrowser"),
						(s[(s.OpenPreview = 3)] = "OpenPreview"),
						(s[(s.Silent = 4)] = "Silent"),
						(s[(s.Ignore = 5)] = "Ignore"),
						(s[(s.OpenBrowserOnce = 6)] = "OpenBrowserOnce");
				})(h || (e.ProvidedOnAutoForward = h = {}));
				function c(s) {
					if (s.scheme !== "http" && s.scheme !== "https") return;
					const l = /^(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)$/.exec(
						s.authority,
					);
					if (l) return { address: l[1], port: +l[2] };
				}
				function n(s) {
					if ((s.scheme !== "http" && s.scheme !== "https") || !s.query) return;
					const l = s.query.split("&");
					for (const y of l) {
						const $ = y.split("=")[1];
						if (/^https?:/.exec($)) {
							const v = c(E.URI.parse($));
							if (v) return v;
						}
					}
				}
				e.$hO = ["localhost", "127.0.0.1", "0:0:0:0:0:0:0:1", "::1"];
				function g(s) {
					return e.$hO.indexOf(s) >= 0;
				}
				e.$jO = ["0.0.0.0", "0:0:0:0:0:0:0:0", "::"];
				function p(s) {
					return e.$jO.indexOf(s) >= 0;
				}
				function o(s, l, y, $) {
					if (y === w.OperatingSystem.Windows) return !1;
					if (y === w.OperatingSystem.Macintosh && p(l)) {
						const v = /(\d+)\.(\d+)\.(\d+)/g.exec($);
						if (v?.length === 4 && parseInt(v[1]) >= 18) return !1;
					}
					return s < 1024;
				}
				class f {
					constructor(l, y, $) {
						(this.remoteAddress = l),
							(this.localAddress = y),
							(this.b = $),
							(this.a = new t.$re()),
							(this.onDidDispose = this.a.event);
					}
					dispose() {
						return this.a.fire(), this.b();
					}
				}
				e.$mO = f;
				let b = class extends i.$1c {
					constructor(l, y) {
						super(),
							(this.q = l),
							(this.r = y),
							(this.a = new t.$re()),
							(this.onTunnelOpened = this.a.event),
							(this.b = new t.$re()),
							(this.onTunnelClosed = this.b.event),
							(this.c = new t.$re()),
							(this.onAddedTunnelProvider = this.c.event),
							(this.f = new Map()),
							(this.h = !1),
							(this.j = !0),
							(this.m = []),
							(this.n = new Set());
					}
					get hasTunnelProvider() {
						return !!this.g;
					}
					get s() {
						const l = this.r.getValue("remote.localPortHost");
						return !l || l === "localhost" ? "127.0.0.1" : "0.0.0.0";
					}
					setTunnelProvider(l) {
						return (
							(this.g = l),
							l
								? (this.c.fire(),
									{
										dispose: () => {
											(this.g = void 0), (this.h = !1), (this.m = []);
										},
									})
								: ((this.h = !1),
									(this.m = []),
									this.c.fire(),
									{ dispose: () => {} })
						);
					}
					setTunnelFeatures(l) {
						(this.h = l.elevation),
							(this.m = l.privacyOptions),
							(this.j = l.protocol);
					}
					get canChangeProtocol() {
						return this.j;
					}
					get canElevate() {
						return this.h;
					}
					get canChangePrivacy() {
						return this.m.length > 0;
					}
					get privacyOptions() {
						return this.m;
					}
					get tunnels() {
						return this.t();
					}
					async t() {
						const l = [],
							y = Array.from(this.f.values());
						for (const $ of y) {
							const v = Array.from($.values());
							for (const S of v) {
								const I = await S.value;
								I && typeof I != "string" && l.push(I);
							}
						}
						return l;
					}
					async dispose() {
						super.dispose();
						for (const l of this.f.values()) {
							for (const { value: y } of l.values())
								await y.then(($) =>
									typeof $ != "string" ? $?.dispose() : void 0,
								);
							l.clear();
						}
						this.f.clear();
					}
					setEnvironmentTunnel(l, y, $, v, S) {
						this.y(
							l,
							y,
							Promise.resolve({
								tunnelRemoteHost: l,
								tunnelRemotePort: y,
								localAddress: $,
								privacy: v,
								protocol: S,
								dispose: () => Promise.resolve(),
							}),
						);
					}
					async getExistingTunnel(l, y) {
						(p(l) || g(l)) && (l = e.$hO[0]);
						const $ = this.C(l, y);
						if ($) return ++$.refcount, $.value;
					}
					openTunnel(l, y, $, v, S, I = !1, T, P) {
						this.q.trace(
							`ForwardedPorts: (TunnelService) openTunnel request for ${y}:${$} on local port ${S}.`,
						);
						const k = this.g ?? l;
						if (!k) return;
						if (
							(y || (y = "localhost"),
							v || (v = this.s),
							this.g && this.n.has($))
						) {
							this.q.debug(
								"ForwardedPorts: (TunnelService) Another call to create a tunnel with the same address has occurred before the last one completed. This call will be ignored.",
							);
							return;
						}
						const L = this.F(k, y, $, v, S, I, T, P);
						return L
							? L.then((D) => {
									if (D) {
										if (typeof D == "string")
											return (
												this.q.trace(
													"ForwardedPorts: (TunnelService) The tunnel provider returned an error when creating the tunnel.",
												),
												this.z(y, $),
												D
											);
									} else {
										this.q.trace(
											"ForwardedPorts: (TunnelService) New tunnel is undefined.",
										),
											this.z(y, $);
										return;
									}
									this.q.trace(
										"ForwardedPorts: (TunnelService) New tunnel established.",
									);
									const M = this.u(D);
									return (
										(D.tunnelRemoteHost !== y || D.tunnelRemotePort !== $) &&
											this.q.warn(
												"ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Host or port mismatch.",
											),
										T &&
											D.privacy !== T &&
											this.q.warn(
												"ForwardedPorts: (TunnelService) Created tunnel does not match requirements of requested tunnel. Privacy mismatch.",
											),
										this.a.fire(M),
										M
									);
								})
							: (this.q.trace(
									"ForwardedPorts: (TunnelService) Tunnel was not created.",
								),
								L);
					}
					u(l) {
						return {
							tunnelRemotePort: l.tunnelRemotePort,
							tunnelRemoteHost: l.tunnelRemoteHost,
							tunnelLocalPort: l.tunnelLocalPort,
							localAddress: l.localAddress,
							privacy: l.privacy,
							protocol: l.protocol,
							dispose: async () => {
								this.q.trace(
									`ForwardedPorts: (TunnelService) dispose request for ${l.tunnelRemoteHost}:${l.tunnelRemotePort} `,
								);
								const y = this.f.get(l.tunnelRemoteHost);
								if (y) {
									const $ = y.get(l.tunnelRemotePort);
									$ &&
										($.refcount--,
										await this.w(l.tunnelRemoteHost, l.tunnelRemotePort, $));
								}
							},
						};
					}
					async w(l, y, $) {
						if ($.refcount <= 0) {
							this.q.trace(
								`ForwardedPorts: (TunnelService) Tunnel is being disposed ${l}:${y}.`,
							);
							const v = $.value.then(async (S) => {
								S &&
									typeof S != "string" &&
									(await S.dispose(!0),
									this.b.fire({
										host: S.tunnelRemoteHost,
										port: S.tunnelRemotePort,
									}));
							});
							return this.f.has(l) && this.f.get(l).delete(y), v;
						}
					}
					async closeTunnel(l, y) {
						this.q.trace(
							`ForwardedPorts: (TunnelService) close request for ${l}:${y} `,
						);
						const $ = this.f.get(l);
						if ($ && $.has(y)) {
							const v = $.get(y);
							(v.refcount = 0), await this.w(l, y, v);
						}
					}
					y(l, y, $) {
						this.f.has(l) || this.f.set(l, new Map()),
							this.f.get(l).set(y, { refcount: 1, value: $ });
					}
					async z(l, y) {
						const $ = this.f.get(l);
						if ($) {
							const v = $.get(y),
								S = v ? await v.value : void 0;
							(!S || typeof S == "string") && $.delete(y),
								$.size === 0 && this.f.delete(l);
						}
					}
					C(l, y) {
						const $ = [l];
						g(l)
							? ($.push(...e.$hO), $.push(...e.$jO))
							: p(l) && $.push(...e.$jO);
						const v = $.map((S) => this.f.get(S));
						for (const S of v) {
							const I = S?.get(y);
							if (I) return I;
						}
					}
					canTunnel(l) {
						return !!c(l);
					}
					G(l, y, $, v, S, I, T) {
						this.q.trace(
							`ForwardedPorts: (TunnelService) Creating tunnel with provider ${y}:${$} on local port ${v}.`,
						);
						const P = $;
						this.n.add(P);
						const k = v === void 0 ? $ : v,
							L = { elevationRequired: S ? this.isPortPrivileged(k) : !1 },
							D = {
								remoteAddress: { host: y, port: $ },
								localAddressPort: v,
								privacy: I,
								public: I ? I !== u.Private : void 0,
								protocol: T,
							},
							M = l.forwardPort(D, L);
						return (
							M
								? (this.y(y, $, M),
									M.finally(() => {
										this.q.trace(
											"ForwardedPorts: (TunnelService) Tunnel created by provider.",
										),
											this.n.delete(P);
									}))
								: this.n.delete(P),
							M
						);
					}
				};
				(e.$nO = b), (e.$nO = b = Ne([j(0, m.$ik), j(1, C.$gj)], b));
			},
		),
		