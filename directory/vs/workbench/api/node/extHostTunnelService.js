import '../../../../require.js';
import '../../../../exports.js';
import '../../../../fs.js';
import '../../../../child_process.js';
import '../../../base/common/buffer.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/numbers.js';
import '../../../base/common/platform.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../../../base/node/pfs.js';
import '../../../base/parts/ipc/common/ipc.net.js';
import '../../../platform/log/common/log.js';
import '../../../platform/remote/common/managedSocket.js';
import '../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../platform/sign/common/sign.js';
import '../../../platform/tunnel/common/tunnel.js';
import '../../../platform/tunnel/node/tunnelService.js';
import '../common/extHostInitDataService.js';
import '../common/extHostRpcService.js';
import '../common/extHostTunnelService.js';
import '../../services/remote/common/tunnelModel.js';
define(
			Pe[625],
			Ne([
				1, 0, 59, 81, 22, 4, 3, 263, 13, 24, 2, 43, 107, 14, 497, 111, 185, 141,
				622, 34, 21, 116, 600,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
				f,
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$7jd = void 0),
					(t.$Zjd = o),
					(t.$1jd = w),
					(t.$2jd = m),
					(t.$3jd = E),
					(t.$4jd = C),
					(t.$5jd = O),
					(t.$6jd = A),
					(e = tt(e)),
					(n = tt(n)),
					(y = tt(y));
				function o(b) {
					const F = b.trim().split(`
`),
						D = [];
					return (
						F.forEach((z) => {
							const Q = /\/proc\/(\d+)\/fd\/\d+ -> socket:\[(\d+)\]/.exec(z);
							Q &&
								Q.length >= 3 &&
								D.push({ pid: parseInt(Q[1], 10), socket: parseInt(Q[2], 10) });
						}),
						D.reduce((z, Q) => ((z[Q.socket] = Q), z), {})
					);
				}
				function w(...b) {
					const F = [].concat(...b.map(E));
					return [
						...new Map(
							F.filter((D) => D.st === "0A")
								.map((D) => {
									const M = D.local_address.split(":");
									return {
										socket: parseInt(D.inode, 10),
										ip: m(M[0]),
										port: parseInt(M[1], 16),
									};
								})
								.map((D) => [D.ip + ":" + D.port, D]),
						).values(),
					];
				}
				function m(b) {
					let F = "";
					if (b.length === 8)
						for (let D = b.length - 2; D >= 0; D -= 2)
							(F += parseInt(b.substr(D, 2), 16)), D !== 0 && (F += ".");
					else
						for (let D = 0; D < b.length; D += 8) {
							const M = b.substring(D, D + 8);
							let z = "";
							for (let Q = 8; Q >= 2; Q -= 2)
								(z += M.substring(Q - 2, Q)),
									(Q === 6 || Q === 2) &&
										((z = parseInt(z, 16).toString(16)),
										(F += `${z}`),
										(z = ""),
										D + Q !== b.length - 6 && (F += ":"));
						}
					return F;
				}
				function E(b) {
					const F = b.trim().split(`
`),
						D = F.shift()
							.trim()
							.split(/\s+/)
							.filter((z) => z !== "rx_queue" && z !== "tm->when");
					return F.map((z) =>
						z
							.trim()
							.split(/\s+/)
							.reduce((Q, H, B) => ((Q[D[B] || B] = H), Q), {}),
					);
				}
				function R(b) {
					return (
						!!b.match(/.*\.vscode-server-[a-zA-Z]+\/bin.*/) ||
						b.indexOf("out/server-main.js") !== -1 ||
						b.indexOf("_productName=VSCode") !== -1
					);
				}
				function C(b) {
					const F = b.trim().split(`
`),
						D = [];
					return (
						F.forEach((M) => {
							const z =
								/^\d+\s+\D+\s+root\s+(\d+)\s+(\d+).+\d+\:\d+\:\d+\s+(.+)$/.exec(
									M,
								);
							z &&
								z.length >= 4 &&
								D.push({
									pid: parseInt(z[1], 10),
									ppid: parseInt(z[2]),
									cmd: z[3],
								});
						}),
						D
					);
				}
				async function O(b, F, D) {
					const M = D.reduce((Q, H) => ((Q[H.pid] = H), Q), {}),
						z = [];
					return (
						b.forEach(({ socket: Q, ip: H, port: B }) => {
							const U = F[Q] ? F[Q].pid : void 0,
								Z = U ? M[U]?.cmd : void 0;
							U &&
								Z &&
								!R(Z) &&
								z.push({ host: H, port: B, detail: Z, pid: U });
						}),
						z
					);
				}
				function A(b, F, D) {
					const M = new Map(),
						z = C(F);
					for (const Q of b) {
						const H = D.get(Q.port);
						if (H) {
							M.set(Q.port, H);
							continue;
						}
						const B = z.find((U) => U.cmd.includes(`${Q.port}`));
						if (B) {
							let U = B,
								Z;
							do (Z = z.find((W) => W.ppid === U.pid)), Z && (U = Z);
							while (Z);
							M.set(Q.port, {
								host: Q.ip,
								port: Q.port,
								pid: U.pid,
								detail: U.cmd,
								ppid: U.ppid,
							});
						} else
							M.set(Q.port, {
								host: Q.ip,
								port: Q.port,
								ppid: Number.MAX_VALUE,
							});
					}
					return M;
				}
				let J = class extends s.$4pc {
					constructor(F, D, M, z) {
						super(F, D, M),
							(this.C = D),
							(this.F = z),
							(this.w = void 0),
							(this.y = new Map()),
							(this.z = !1),
							l.$n &&
								D.remote.isRemote &&
								D.remote.authority &&
								(this.a.$setRemoteTunnelService(process.pid), this.H());
					}
					async $registerCandidateFinder(F) {
						if (F && this.z) return;
						this.z = F;
						let D;
						this.w &&
							((D = this.w), await this.a.$onFoundNewCandidates(this.w));
						const M = new I.$3m();
						let z = 0;
						for (; this.z; ) {
							const Q = new Date().getTime(),
								H = (await this.I()).filter(
									(Z) => (0, $.$iO)(Z.host) || (0, $.$kO)(Z.host),
								);
							this.r.trace(
								`ForwardedPorts: (ExtHostTunnelService) found candidate ports ${H.map((Z) => Z.port).join(", ")}`,
							);
							const B = new Date().getTime() - Q;
							this.r.trace(
								`ForwardedPorts: (ExtHostTunnelService) candidate port scan took ${B} ms.`,
							),
								z++ > 3 && M.update(B),
								(!D || JSON.stringify(D) !== JSON.stringify(H)) &&
									((D = H), await this.a.$onFoundNewCandidates(D));
							const U = this.G(M.value);
							this.r.trace(
								`ForwardedPorts: (ExtHostTunnelService) next candidate port scan in ${U} ms.`,
							),
								await new Promise((Z) => setTimeout(() => Z(), U));
						}
					}
					G(F) {
						return Math.max(F * 20, 2e3);
					}
					async H() {
						(this.w = await this.I()),
							this.r.trace(
								`ForwardedPorts: (ExtHostTunnelService) Initial candidates found: ${this.w.map((F) => F.port).join(", ")}`,
							);
					}
					async I() {
						let F = "",
							D = "";
						try {
							(F = await e.promises.readFile("/proc/net/tcp", "utf8")),
								(D = await e.promises.readFile("/proc/net/tcp6", "utf8"));
						} catch {}
						const M = w(F, D),
							z = await new Promise((fe) => {
								(0, r.exec)(
									"ls -l /proc/[0-9]*/fd/[0-9]* | grep socket:",
									(ae, Se, he) => {
										fe(Se);
									},
								);
							}),
							Q = o(z),
							H = await y.Promises.readdir("/proc"),
							B = [];
						for (const fe of H)
							try {
								const ae = Number(fe),
									Se = n.$nh(p.URI.file("/proc"), fe);
								if (
									(await e.promises.stat(Se.fsPath)).isDirectory() &&
									!isNaN(ae)
								) {
									const _ = await e.promises.readlink(n.$nh(Se, "cwd").fsPath),
										oe = await e.promises.readFile(
											n.$nh(Se, "cmdline").fsPath,
											"utf8",
										);
									B.push({ pid: ae, cwd: _, cmd: oe });
								}
							} catch {}
						const U = [],
							Z = M.filter((fe) => {
								const ae = Q[fe.socket];
								return ae || U.push(fe), ae;
							}),
							W = O(Z, Q, B);
						let G;
						if (
							(this.r.trace(
								`ForwardedPorts: (ExtHostTunnelService) number of possible root ports ${U.length}`,
							),
							U.length > 0)
						) {
							const fe = await new Promise((ae) => {
								(0, r.exec)("ps -F -A -l | grep root", (Se, he, _) => {
									ae(he);
								});
							});
							(this.y = A(U, fe, this.y)),
								(G = Array.from(this.y.values())),
								this.r.trace(
									`ForwardedPorts: (ExtHostTunnelService) heuristic ports ${G.map((ae) => ae.port).join(", ")}`,
								);
						}
						return W.then((fe) => (G ? fe.concat(G) : fe));
					}
					u(F) {
						return async (D) => {
							const M = new T.$L8c(
								{
									commit: this.C.commit,
									quality: this.C.quality,
									logService: this.r,
									ipcLogger: null,
									remoteSocketFactoryService: {
										_serviceBrand: void 0,
										async connect(Q, H, B, U) {
											const Z = await F.makeConnection();
											return L.connect(Z, H, B, U);
										},
										register() {
											throw new Error("not implemented");
										},
									},
									addressProvider: {
										getAddress() {
											return Promise.resolve({
												connectTo: new c.$4l(0),
												connectionToken: F.connectionToken,
											});
										},
									},
									signService: this.F,
								},
								"localhost",
								D.remoteAddress.host || "localhost",
								D.remoteAddress.port,
								D.localAddressPort,
							);
							await M.waitForReady();
							const z = new N.$re();
							return {
								localAddress: (0, f.$u8)(M.localAddress) ?? M.localAddress,
								remoteAddress: {
									port: M.tunnelRemotePort,
									host: M.tunnelRemoteHost,
								},
								onDidDispose: z.event,
								dispose: () => {
									M.dispose(), z.fire(), z.dispose();
								},
							};
						};
					}
				};
				(t.$7jd = J),
					(t.$7jd = J =
						wt([rt(0, u.$08), rt(1, a.$98), rt(2, k.$ik), rt(3, h.$$l)], J));
				class L extends g.$coc {
					static connect(F, D, M, z) {
						const Q = new P.$Zc(),
							H = {
								onClose: Q.add(new N.$re()),
								onData: Q.add(new N.$re()),
								onEnd: Q.add(new N.$re()),
							};
						Q.add(F.onDidReceiveMessage((U) => H.onData.fire(S.$Te.wrap(U)))),
							Q.add(F.onDidEnd(() => H.onEnd.fire())),
							Q.add(
								F.onDidClose((U) =>
									H.onClose.fire({
										type: d.SocketCloseEventType.NodeSocketCloseEvent,
										error: U,
										hadError: !!U,
									}),
								),
							);
						const B = new L(F, z, H);
						return B.D(Q), (0, g.$boc)(B, D, M, z, H);
					}
					constructor(F, D, M) {
						super(D, M), (this.n = F);
					}
					write(F) {
						this.n.send(F.buffer);
					}
					h() {
						this.n.end();
					}
					async drain() {
						await this.n.drain?.();
					}
				}
			},
		),
		