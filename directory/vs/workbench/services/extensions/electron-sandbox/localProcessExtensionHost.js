import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/processes.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../base/parts/ipc/common/ipc.net.js';
import '../../../../base/parts/ipc/electron-sandbox/ipc.mp.js';
import '../../../../nls.js';
import '../../../../platform/debug/common/extensionHostDebug.js';
import '../../../../platform/extensions/common/extensionHostStarter.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../environment/electron-sandbox/shellEnvironmentService.js';
import '../common/extensionHostEnv.js';
import '../common/extensionHostProtocol.js';
import '../common/extensions.js';
import '../../host/browser/host.js';
import '../../lifecycle/common/lifecycle.js';
import '../common/extensionDevOptions.js';
define(
			de[3453],
			he([
				1, 0, 15, 76, 29, 6, 3, 82, 12, 919, 162, 9, 47, 760, 904, 4, 767, 1611,
				73, 34, 110, 40, 62, 32, 269, 129, 25, 151, 1020, 3303, 1021, 53, 87,
				52, 698,
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
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3dd = e.$2dd = void 0),
					(d = mt(d)),
					(m = mt(m)),
					(g = mt(g));
				class R {
					get onStdout() {
						return this.b.onDynamicStdout(this.a);
					}
					get onStderr() {
						return this.b.onDynamicStderr(this.a);
					}
					get onMessage() {
						return this.b.onDynamicMessage(this.a);
					}
					get onExit() {
						return this.b.onDynamicExit(this.a);
					}
					constructor(U, z) {
						(this.b = z), (this.a = U);
					}
					start(U) {
						return this.b.start(this.a, U);
					}
					enableInspectPort() {
						return this.b.enableInspectPort(this.a);
					}
					kill() {
						return this.b.kill(this.a);
					}
				}
				e.$2dd = R;
				let O = class {
					constructor(
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
					) {
						(this.runningLocation = U),
							(this.startup = z),
							(this.m = F),
							(this.n = x),
							(this.p = H),
							(this.q = q),
							(this.s = V),
							(this.t = G),
							(this.u = K),
							(this.v = J),
							(this.w = W),
							(this.x = X),
							(this.y = Y),
							(this.z = ie),
							(this.A = ne),
							(this.B = ee),
							(this.C = _),
							(this.D = te),
							(this.pid = null),
							(this.remoteAuthority = null),
							(this.extensions = null),
							(this.a = new E.$re()),
							(this.onExit = this.a.event),
							(this.b = new E.$re()),
							(this.c = new C.$Zc());
						const Q = (0, A.$Umc)(this.t);
						(this.d = Q.isExtensionDevHost),
							(this.f = Q.isExtensionDevDebug),
							(this.g = Q.isExtensionDevDebugBrk),
							(this.h = Q.isExtensionDevTestFromCli),
							(this.i = !1),
							(this.j = null),
							(this.k = null),
							(this.l = null),
							this.c.add(this.a),
							this.c.add(this.s.onWillShutdown((Z) => this.L(Z))),
							this.c.add(
								this.z.onClose((Z) => {
									this.d &&
										this.t.debugExtensionHost.debugId === Z.sessionId &&
										this.q.closeWindow();
								}),
							),
							this.c.add(
								this.z.onReload((Z) => {
									this.d &&
										this.t.debugExtensionHost.debugId === Z.sessionId &&
										this.A.reload();
								}),
							);
					}
					dispose() {
						this.i || ((this.i = !0), this.c.dispose());
					}
					start() {
						if (this.i) throw new w.$9();
						return this.l || (this.l = this.E()), this.l;
					}
					async E() {
						const [U, z, F] = await Promise.all([
							this.D.createExtensionHost(),
							this.F(),
							this.C.getShellEnv(),
						]);
						this.k = new R(U.id, this.D);
						const x = d.$yo(F, {
							VSCODE_AMD_ENTRYPOINT:
								"vs/workbench/api/node/extensionHostProcess",
							VSCODE_HANDLES_UNCAUGHT_ERRORS: !0,
						});
						this.t.debugExtensionHost.env &&
							d.$yo(x, this.t.debugExtensionHost.env),
							(0, r.$Am)(x),
							this.d && delete x.VSCODE_CODE_CACHE_PATH;
						const H = {
								responseWindowId: this.q.windowId,
								responseChannel: "vscode:startExtensionHostMessagePortResult",
								responseNonce: (0, h.$9g)(),
								env: x,
								detached: !!m.$l,
								execArgv: void 0,
								silent: !0,
							},
							q = "127.0.0.1";
						z !== 0
							? (H.execArgv = [
									"--nolazy",
									(this.g ? "--inspect-brk=" : "--inspect=") + `${q}:${z}`,
								])
							: (H.execArgv = ["--inspect-port=0"]),
							this.t.extensionTestsLocationURI &&
								H.execArgv.unshift("--expose-gc"),
							this.t.args["prof-v8-extensions"] && H.execArgv.unshift("--prof"),
							H.execArgv.unshift("--dns-result-order=ipv4first");
						const V = this.K(this.k.onStdout, this.c),
							G = this.K(this.k.onStderr, this.c),
							K = E.Event.any(
								E.Event.map(V.event, (Y) => ({ data: `%c${Y}`, format: [""] })),
								E.Event.map(G.event, (Y) => ({
									data: `%c${Y}`,
									format: ["color: red"],
								})),
							),
							J = E.Event.debounce(
								K,
								(Y, ie) =>
									Y
										? {
												data: Y.data + ie.data,
												format: [...Y.format, ...ie.format],
											}
										: { data: ie.data, format: ie.format },
								100,
							);
						this.c.add(
							J((Y) => {
								const ie =
									Y.data && Y.data.match(/ws:\/\/([^\s]+):(\d+)\/[^\s]+/);
								if (ie) {
									const [, ne, ee] = ie;
									!this.t.isBuilt &&
										!this.h &&
										console.log(
											`%c[Extension Host] %cdebugger inspector at devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=${ie[1]}`,
											"color: blue",
											"color:",
										),
										this.j ||
											((this.j = { host: ne, port: Number(ee) }),
											this.b.fire());
								} else
									this.h ||
										(console.group("Extension Host"),
										console.log(Y.data, ...Y.format),
										console.groupEnd());
							}),
						),
							this.c.add(
								this.k.onExit(({ code: Y, signal: ie }) => this.J(Y, ie)),
							),
							z &&
								(this.d &&
									this.f &&
									this.t.debugExtensionHost.debugId &&
									this.z.attachSession(this.t.debugExtensionHost.debugId, z),
								(this.j = { port: z, host: q }),
								this.b.fire());
						let W;
						((!this.t.isBuilt && !this.t.remoteAuthority) || this.d) &&
							(W = setTimeout(() => {
								this.w.error(
									`[LocalProcessExtensionHost]: Extension host did not start in 10 seconds (debugBrk: ${this.g})`,
								);
								const Y = this.g
									? g.localize(12439, null)
									: g.localize(12440, null);
								this.p.prompt(
									l.Severity.Warning,
									Y,
									[
										{
											label: g.localize(12441, null),
											run: () => this.A.reload(),
										},
									],
									{ sticky: !0, priority: l.NotificationPriority.URGENT },
								);
							}, 1e4));
						const X = await this.G(this.k, H);
						return await this.H(X), clearTimeout(W), X;
					}
					async F() {
						if (typeof this.t.debugExtensionHost.port != "number") return 0;
						const U = this.t.debugExtensionHost.port,
							z = await this.q.findFreePort(U, 10, 5e3, 2048);
						return (
							this.h ||
								(z
									? (z !== U &&
											console.warn(
												`%c[Extension Host] %cProvided debugging port ${U} is not free, using ${z} instead.`,
												"color: blue",
												"color:",
											),
										this.g
											? console.warn(
													`%c[Extension Host] %cSTOPPED on first line for debugging on port ${z}`,
													"color: blue",
													"color:",
												)
											: console.info(
													`%c[Extension Host] %cdebugger listening on port ${z}`,
													"color: blue",
													"color:",
												))
									: console.warn(
											"%c[Extension Host] %cCould not find a free port for debugging",
											"color: blue",
											"color:",
										)),
							z || 0
						);
					}
					G(U, z) {
						(0, k.$un)(new k.$tn(), z.env);
						const F = (0, n.$lrb)(void 0, z.responseChannel, z.responseNonce);
						return new Promise((x, H) => {
							const q = setTimeout(() => {
								H("The local extension host took longer than 60s to connect.");
							}, 6e4);
							F.then((G) => {
								this.c.add(
									(0, C.$Yc)(() => {
										G.close();
									}),
								),
									clearTimeout(q);
								const K = new c.$zi();
								(G.onmessage = (J) => {
									J.data && K.fire(i.$Te.wrap(J.data));
								}),
									G.start(),
									x({
										onMessage: K.event,
										send: (J) => G.postMessage(J.buffer),
									});
							});
							const V = u.$le.create(!1);
							U.start(z).then(
								({ pid: G }) => {
									G && (this.pid = G),
										this.w.info(`Started local extension host with pid ${G}.`);
									const K = V.elapsed();
									m.$w &&
										this.w.info(`IExtensionHostStarter.start() took ${K} ms.`);
								},
								(G) => {
									H(G);
								},
							);
						});
					}
					H(U) {
						return new Promise((z, F) => {
							let x;
							const H = () => {
									x = setTimeout(() => {
										F(
											"The local extension host took longer than 60s to send its ready message.",
										);
									}, 6e4);
								},
								q = () => {
									clearTimeout(x);
								};
							H();
							const V = U.onMessage((G) => {
								if ((0, L.$Rn)(G, L.MessageType.Ready)) {
									q(),
										this.I().then((K) => {
											H(), U.send(i.$Te.fromString(JSON.stringify(K)));
										});
									return;
								}
								if ((0, L.$Rn)(G, L.MessageType.Initialized)) {
									q(), V.dispose(), z();
									return;
								}
								console.error(
									"received unexpected message during handshake phase from the extension host: ",
									G,
								);
							});
						});
					}
					async I() {
						const U = await this.m.getInitData();
						this.extensions = U.extensions;
						const z = this.n.getWorkspace();
						return {
							commit: this.B.commit,
							version: this.B.version,
							vscodeVersion: this.B.vscodeVersion,
							rendererPerformanceTimeOrigin: performance.timeOrigin,
							quality: this.B.quality,
							parentPid: 0,
							environment: {
								isExtensionDevelopmentDebug: this.f,
								appRoot: this.t.appRoot ? a.URI.file(this.t.appRoot) : void 0,
								appName: this.B.nameLong,
								appHost: this.B.embedderIdentifier || "desktop",
								appUriScheme: this.B.urlProtocol,
								extensionTelemetryLogResource: this.t.extHostTelemetryLogFile,
								isExtensionTelemetryLoggingOnly: (0, v.$Yp)(this.B, this.t),
								appLanguage: m.$z,
								extensionDevelopmentLocationURI:
									this.t.extensionDevelopmentLocationURI,
								extensionTestsLocationURI: this.t.extensionTestsLocationURI,
								globalStorageHome: this.u.defaultProfile.globalStorageHome,
								workspaceStorageHome: this.t.workspaceStorageHome,
								extensionLogLevel: this.t.extensionLogLevel,
							},
							workspace:
								this.n.getWorkbenchState() === I.WorkbenchState.EMPTY
									? void 0
									: {
											configuration: z.configuration ?? void 0,
											id: z.id,
											name: this.y.getWorkspaceLabel(z),
											isUntitled: z.configuration
												? (0, I.$aj)(z.configuration, this.t)
												: !1,
											transient: z.transient,
										},
							remote: {
								authority: this.t.remoteAuthority,
								connectionData: null,
								isRemote: !1,
							},
							consoleForward: {
								includeStack:
									!this.h &&
									(this.d ||
										!this.t.isBuilt ||
										this.B.quality !== "stable" ||
										this.t.verbose),
								logNative: !this.h && this.d,
							},
							extensions: this.extensions.toSnapshot(),
							telemetryInfo: {
								sessionId: this.v.sessionId,
								machineId: this.v.machineId,
								macMachineId: this.v.macMachineId,
								sqmId: this.v.sqmId,
								devDeviceId: this.v.devDeviceId,
								firstSessionDate: this.v.firstSessionDate,
								msftInternal: this.v.msftInternal,
							},
							logLevel: this.w.getLevel(),
							loggers: [...this.x.getRegisteredLoggers()],
							logsLocation: this.t.extHostLogsPath,
							autoStart: this.startup === D.ExtensionHostStartup.EagerAutoStart,
							uiKind: L.UIKind.Desktop,
						};
					}
					J(U, z) {
						this.i || this.a.fire([U, z]);
					}
					K(U, z) {
						let F = "",
							x = !1;
						const H = new E.$re();
						return (
							U(
								(q) => {
									F += q;
									const V = F.split(/\r?\n/g);
									(F = V.pop()), F.length > 1e4 && (V.push(F), (F = ""));
									for (const G of V)
										x
											? G === L.NativeLogMarkers.End && (x = !1)
											: G === L.NativeLogMarkers.Start
												? (x = !0)
												: G.length &&
													H.fire(
														G +
															`
`,
													);
								},
								void 0,
								z,
							),
							H
						);
					}
					async enableInspectPort() {
						return this.j
							? !0
							: !this.k || !(await this.k.enableInspectPort())
								? !1
								: (await Promise.race([
										E.Event.toPromise(this.b.event),
										(0, t.$Nh)(1e3),
									]),
									!!this.j);
					}
					getInspectPort() {
						return this.j ?? void 0;
					}
					L(U) {
						this.d &&
							!this.h &&
							!this.f &&
							this.t.debugExtensionHost.debugId &&
							(this.z.terminateSession(this.t.debugExtensionHost.debugId),
							U.join((0, t.$Nh)(100), {
								id: "join.extensionDevelopment",
								label: g.localize(12442, null),
							}));
					}
				};
				(e.$3dd = O),
					(e.$3dd = O =
						Ne(
							[
								j(3, I.$Vi),
								j(4, l.$4N),
								j(5, s.$y7c),
								j(6, N.$n6),
								j(7, T.$ucd),
								j(8, S.$Xl),
								j(9, $.$km),
								j(10, b.$ik),
								j(11, b.$jk),
								j(12, f.$3N),
								j(13, p.$dp),
								j(14, M.$asb),
								j(15, y.$Bk),
								j(16, P.$Cdd),
								j(17, o.$u7c),
							],
							O,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	