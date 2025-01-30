import '../../../../require.js';
import '../../../../exports.js';
import '../../../../minimist.js';
import '../../../../net.js';
import '../../../base/common/async.js';
import '../../../base/common/buffer.js';
import '../../../base/common/errors.js';
import '../../../base/common/performance.js';
import '../../../base/node/extpath.js';
import '../../../base/node/pfs.js';
import '../../../base/parts/ipc/common/ipc.net.js';
import '../../../base/parts/ipc/node/ipc.net.js';
import '../../../editor/common/config/editorOptions.js';
import '../../../platform/product/common/product.js';
import '../common/extensionHostMain.js';
import './uriTransformer.js';
import '../../services/extensions/common/extensionHostEnv.js';
import '../../services/extensions/common/extensionHostProtocol.js';
import '../../../platform/tracing/node/initializeExtension.js';
import '../common/extHost.common.services.js';
import './extHost.node.services.js';
define(
		Pe[637],
		Ne([
			1, 0, 638, 105, 9, 22, 12, 91, 176, 43, 107, 199, 179, 181, 606, 519, 535,
			142, 510, 612, 626,
		]),
		function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(e = On(e)),
				(r = tt(r)),
				(I = tt(I)),
				(k = On(k)),
				(function () {
					for (let C = 0; C < process.execArgv.length; C++)
						process.execArgv[C] === "--inspect-port=0" &&
							(process.execArgv.splice(C, 1), C--);
				})();
			const T = (0, e.default)(process.argv.slice(2), {
				boolean: ["transformURIs", "skipWorkspaceStorageLock"],
				string: ["useHostProxy"],
			});
			(function () {
				const R = globalThis._VSCODE_NODE_MODULES.module,
					C = R._load;
				R._load = function (O) {
					if (O === "natives")
						throw new Error(
							'Either the extension or an NPM dependency is using the [unsupported "natives" node module](https://go.microsoft.com/fwlink/?linkid=871887).',
						);
					return C.apply(this, arguments);
				};
			})();
			const a = process.exit.bind(process),
				u = process.on.bind(process);
			function s(R) {
				(process.exit = function (C) {
					if (R) a(C);
					else {
						const O = new Error(
							"An extension called process.exit() and this was prevented.",
						);
						console.warn(O.stack);
					}
				}),
					(process.crash = function () {
						const C = new Error(
							"An extension called process.crash() and this was prevented.",
						);
						console.warn(C.stack);
					}),
					(process.env.ELECTRON_RUN_AS_NODE = "1"),
					(process.on = function (C, O) {
						C === "uncaughtException" &&
							(O = function () {
								try {
									return O.call(void 0, arguments);
								} catch {}
							}),
							u(C, O);
					});
			}
			let f = function (R) {
				a();
			};
			function o() {
				const R = (0, h.$vn)(process.env);
				if (R.type === h.ExtHostConnectionType.MessagePort)
					return new Promise((C, O) => {
						const A = (J) => {
							const L = J[0],
								b = new p.$zi();
							L.on("message", (F) => b.fire(N.$Te.wrap(F.data))),
								L.on("close", () => {
									f("renderer closed the MessagePort");
								}),
								L.start(),
								C({ onMessage: b.event, send: (F) => L.postMessage(F.buffer) });
						};
						process.parentPort.on("message", (J) => A(J.ports));
					});
				if (R.type === h.ExtHostConnectionType.Socket)
					return new Promise((C, O) => {
						let A = null;
						const J = setTimeout(() => {
								f("VSCODE_EXTHOST_IPC_SOCKET timeout");
							}, 6e4),
							L = p.ProtocolConstants.ReconnectionGraceTime,
							b = p.ProtocolConstants.ReconnectionShortGraceTime,
							F = new S.$Zh(
								() => f("renderer disconnected for too long (1)"),
								L,
							),
							D = new S.$Zh(
								() => f("renderer disconnected for too long (2)"),
								b,
							);
						process.on("message", (z, Q) => {
							if (z && z.type === "VSCODE_EXTHOST_IPC_SOCKET") {
								Q.setNoDelay(!0);
								const H = N.$Te.wrap(Buffer.from(z.initialDataChunk, "base64"));
								let B;
								if (z.skipWebSocketFrames) B = new y.$Bi(Q, "extHost-socket");
								else {
									const U = N.$Te.wrap(Buffer.from(z.inflateBytes, "base64"));
									B = new y.$Ci(
										new y.$Bi(Q, "extHost-socket"),
										z.permessageDeflate,
										U,
										!1,
									);
								}
								A
									? (F.cancel(),
										D.cancel(),
										A.beginAcceptReconnection(B, H),
										A.endAcceptReconnection(),
										A.sendResume())
									: (clearTimeout(J),
										(A = new p.$Ai({ socket: B, initialChunk: H })),
										A.sendResume(),
										A.onDidDispose(() => f("renderer disconnected")),
										C(A),
										A.onSocketClose(() => {
											F.schedule();
										}));
							}
							if (z && z.type === "VSCODE_EXTHOST_IPC_REDUCE_GRACE_TIME") {
								if (D.isScheduled()) return;
								F.isScheduled() && D.schedule();
							}
						});
						const M = { type: "VSCODE_EXTHOST_IPC_READY" };
						process.send?.(M);
					});
				{
					const C = R.pipeName;
					return new Promise((O, A) => {
						const J = r.createConnection(C, () => {
							J.removeListener("error", A);
							const L = new p.$Ai({ socket: new y.$Bi(J, "extHost-renderer") });
							L.sendResume(), O(L);
						});
						J.once("error", A),
							J.on("close", () => {
								f("renderer closed the socket");
							});
					});
				}
			}
			async function w() {
				const R = await o();
				return new (class {
					constructor() {
						(this.a = new p.$zi()),
							(this.onMessage = this.a.event),
							(this.b = !1),
							(this.d = R.onMessage((C) => {
								(0, $.$Rn)(C, $.MessageType.Terminate)
									? ((this.b = !0),
										this.d.dispose(),
										f("received terminate message from renderer"))
									: this.a.fire(C);
							}));
					}
					send(C) {
						this.b || R.send(C);
					}
					async drain() {
						if (R.drain) return R.drain();
					}
				})();
			}
			function m(R) {
				return new Promise((C) => {
					const O = R.onMessage((A) => {
						O.dispose();
						const J = JSON.parse(A.toString()),
							L = J.commit,
							b = k.default.commit;
						if (
							(L && b && L !== b && a($.ExtensionHostExitCode.VersionMismatch),
							J.parentPid)
						) {
							let F = 0;
							setInterval(function () {
								try {
									process.kill(J.parentPid, 0), (F = 0);
								} catch (M) {
									M && M.code === "EPERM"
										? (F++,
											F >= 3 &&
												f(
													`parent process ${J.parentPid} does not exist anymore (3 x EPERM): ${M.message} (code: ${M.code}) (errno: ${M.errno})`,
												))
										: f(
												`parent process ${J.parentPid} does not exist anymore: ${M.message} (code: ${M.code}) (errno: ${M.errno})`,
											);
								}
							}, 1e3);
							let D;
							try {
								(D = globalThis._VSCODE_NODE_MODULES["native-watchdog"]),
									D.start(J.parentPid);
							} catch (M) {
								(0, P.$4)(M);
							}
						}
						R.send((0, $.$Qn)($.MessageType.Initialized)),
							C({ protocol: R, initData: J });
					});
					R.send((0, $.$Qn)($.MessageType.Ready));
				});
			}
			async function E() {
				const R = [];
				process.on("unhandledRejection", (F, D) => {
					R.push(D),
						setTimeout(() => {
							const M = R.indexOf(D);
							M >= 0 &&
								D.catch((z) => {
									R.splice(M, 1),
										(0, P.$8)(z) ||
											(console.warn(
												`rejected promise not handled within 1 second: ${z}`,
											),
											z && z.stack && console.warn(`stack trace: ${z.stack}`),
											F && (0, P.$4)(F));
								});
						}, 1e3);
				}),
					process.on("rejectionHandled", (F) => {
						const D = R.indexOf(F);
						D >= 0 && R.splice(D, 1);
					}),
					process.on("uncaughtException", function (F) {
						(0, P.$3)(F) || (0, P.$4)(F);
					}),
					I.mark("code/extHost/willConnectToRenderer");
				const C = await w();
				I.mark("code/extHost/didConnectToRenderer");
				const O = await m(C);
				I.mark("code/extHost/didWaitForInitData");
				const { initData: A } = O;
				s(!!A.environment.extensionTestsLocationURI),
					(A.environment.useHostProxy =
						T.useHostProxy !== void 0 ? T.useHostProxy !== "false" : void 0),
					(A.environment.skipWorkspaceStorageLock = (0, d.boolean)(
						T.skipWorkspaceStorageLock,
						!1,
					));
				const J = new (class {
					constructor() {
						this.pid = process.pid;
					}
					exit(D) {
						a(D);
					}
					fsExists(D) {
						return n.Promises.exists(D);
					}
					fsRealpath(D) {
						return (0, l.$Pr)(D);
					}
				})();
				let L = null;
				A.remote.authority &&
					T.transformURIs &&
					(L = (0, c.$pK)(A.remote.authority));
				const b = new g.$njd(O.protocol, A, J, L);
				f = (F) => b.terminate(F);
			}
			E().catch((R) => console.log(R));
		},
	);
}).call(this);

//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/fe574d0820377383143b2ea26aa6ae28b3425220/core/vs/workbench/api/node/extensionHostProcess.js.map

//# debugId=1866b731-45c8-5f5c-9b36-4a9aa5ade4e5
