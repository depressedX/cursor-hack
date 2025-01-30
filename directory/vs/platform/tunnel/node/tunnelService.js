import '../../../../require.js';
import '../../../../exports.js';
import '../../../../net.js';
import '../../../../os.js';
import '../../../base/node/ports.js';
import '../../../base/parts/ipc/node/ipc.net.js';
import '../../../base/common/async.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../configuration/common/configuration.js';
import '../../log/common/log.js';
import '../../product/common/productService.js';
import '../../remote/common/remoteAgentConnection.js';
import '../../remote/common/remoteSocketFactoryService.js';
import '../../sign/common/sign.js';
import '../common/tunnel.js';
import '../../../base/common/buffer.js';
define(
			Pe[622],
			Ne([
				1, 0, 105, 106, 453, 199, 9, 3, 13, 60, 14, 182, 498, 500, 185, 141, 22,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$O8c = t.$N8c = t.$M8c = t.$L8c = void 0),
					(e = tt(e)),
					(r = tt(r));
				async function $(f, o, w, m, E) {
					let R;
					for (
						let C = 3;
						C &&
						(R?.dispose(),
						(R = await new T(f, o, w, m, E).waitForReady()),
						!((E && S.$_g[E]) || !S.$_g[R.tunnelLocalPort]));
						C--
					);
					return R;
				}
				class T extends I.$1c {
					constructor(o, w, m, E, R) {
						super(),
							(this.m = w),
							(this.n = R),
							(this.privacy = c.TunnelPrivacyId.Private),
							(this.j = new Map()),
							(this.a = o),
							(this.b = e.createServer()),
							(this.c = new P.$Lh()),
							(this.f = () => this.c.open()),
							this.b.on("listening", this.f),
							(this.g = (C) => this.q(C)),
							this.b.on("connection", this.g),
							(this.h = () => {}),
							this.b.on("error", this.h),
							(this.tunnelRemotePort = E),
							(this.tunnelRemoteHost = m);
					}
					async dispose() {
						super.dispose(),
							this.b.removeListener("listening", this.f),
							this.b.removeListener("connection", this.g),
							this.b.removeListener("error", this.h),
							this.b.close(),
							Array.from(this.j.values()).forEach((w) => {
								w();
							});
					}
					async waitForReady() {
						const o = this.n ?? this.tunnelRemotePort,
							w = (0, c.$kO)(this.m) ? "0.0.0.0" : "127.0.0.1";
						let m = await (0, S.$ah)(o, 2, 1e3, w),
							E = null;
						return (
							this.b.listen(m, this.m),
							await this.c.wait(),
							(E = this.b.address()),
							E ||
								((m = 0),
								this.b.listen(m, this.m),
								await this.c.wait(),
								(E = this.b.address())),
							(this.tunnelLocalPort = E.port),
							(this.localAddress = `${this.tunnelRemoteHost === "127.0.0.1" ? "127.0.0.1" : "localhost"}:${E.port}`),
							this
						);
					}
					async q(o) {
						o.pause();
						const w =
								(0, c.$iO)(this.tunnelRemoteHost) ||
								(0, c.$kO)(this.tunnelRemoteHost)
									? "localhost"
									: this.tunnelRemoteHost,
							m = await (0, d.$bm)(this.a, w, this.tunnelRemotePort),
							E = m.getSocket(),
							R = m.readEntireBuffer();
						m.dispose(),
							R.byteLength > 0 && o.write(R.buffer),
							o.on("end", () => {
								o.localAddress && this.j.delete(o.localAddress), E.end();
							}),
							o.on("close", () => E.end()),
							o.on("error", () => {
								o.localAddress && this.j.delete(o.localAddress),
									E instanceof N.$Bi ? E.socket.destroy() : E.end();
							}),
							E instanceof N.$Bi ? this.s(o, E) : this.r(o, E),
							o.localAddress &&
								this.j.set(o.localAddress, () => {
									o.end(), E.end();
								});
					}
					r(o, w) {
						w.onClose(() => o.destroy()),
							w.onEnd(() => o.end()),
							w.onData((m) => o.write(m.buffer)),
							o.on("data", (m) => w.write(h.$Te.wrap(m))),
							o.resume();
					}
					s(o, w) {
						const m = w.socket;
						m.on("end", () => o.end()),
							m.on("close", () => o.end()),
							m.on("error", () => {
								o.destroy();
							}),
							m.pipe(o),
							o.pipe(m);
					}
				}
				t.$L8c = T;
				let a = class extends c.$nO {
					constructor(o, w, m, E, R) {
						super(w, R), (this.H = o), (this.I = m), (this.J = E);
					}
					isPortPrivileged(o) {
						return (0, c.$lO)(o, this.s, l.OS, r.release());
					}
					F(o, w, m, E, R, C, O, A) {
						const J = this.C(w, m);
						if (J) return ++J.refcount, J.value;
						if ((0, c.$eO)(o)) return this.G(o, w, m, R, C, O, A);
						{
							this.q.trace(
								`ForwardedPorts: (TunnelService) Creating tunnel without provider ${w}:${m} on local port ${R}.`,
							);
							const L = {
									commit: this.J.commit,
									quality: this.J.quality,
									addressProvider: o,
									remoteSocketFactoryService: this.H,
									signService: this.I,
									logService: this.q,
									ipcLogger: null,
								},
								b = $(L, E, w, m, R);
							return (
								this.q.trace(
									"ForwardedPorts: (TunnelService) Tunnel created without provider.",
								),
								this.y(w, m, b),
								b
							);
						}
					}
				};
				(t.$M8c = a),
					(t.$M8c = a =
						wt(
							[
								rt(0, k.$8l),
								rt(1, p.$ik),
								rt(2, g.$$l),
								rt(3, y.$Bk),
								rt(4, n.$gj),
							],
							a,
						));
				let u = class extends a {
					constructor(o, w, m, E, R) {
						super(o, w, m, E, R);
					}
				};
				(t.$N8c = u),
					(t.$N8c = u =
						wt(
							[
								rt(0, k.$8l),
								rt(1, p.$ik),
								rt(2, g.$$l),
								rt(3, y.$Bk),
								rt(4, n.$gj),
							],
							u,
						));
				let s = class extends I.$1c {
					constructor(o, w, m, E, R) {
						super(),
							(this.b = o),
							(this.c = w),
							(this.f = m),
							(this.g = E),
							(this.h = R),
							(this.a = new Map());
					}
					async openTunnel(o, w, m, E, R, C, O, A, J) {
						if (
							(this.c.trace(
								`ForwardedPorts: (SharedTunnelService) openTunnel request for ${m}:${E} on local port ${C}.`,
							),
							!this.a.has(o))
						) {
							const L = new u(this.b, this.c, this.g, this.f, this.h);
							this.D(L),
								this.a.set(o, L),
								L.onTunnelClosed(async () => {
									(await L.tunnels).length === 0 &&
										(L.dispose(), this.a.delete(o));
								});
						}
						return this.a.get(o).openTunnel(w, m, E, R, C, O, A, J);
					}
				};
				(t.$O8c = s),
					(t.$O8c = s =
						wt(
							[
								rt(0, k.$8l),
								rt(1, p.$ik),
								rt(2, y.$Bk),
								rt(3, g.$$l),
								rt(4, n.$gj),
							],
							s,
						));
			},
		),
		