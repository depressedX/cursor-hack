import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../platform/debug/common/extensionHostDebug.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/remote/common/remoteAgentConnection.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/remote/common/remoteSocketFactoryService.js';
import '../../../../platform/sign/common/sign.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../environment/common/environmentService.js';
import './extensionDevOptions.js';
import './extensionHostProtocol.js';
import './extensions.js';
define(
			de[3379],
			he([
				1, 0, 76, 6, 3, 23, 12, 767, 73, 34, 62, 604, 211, 773, 952, 32, 269,
				25, 78, 698, 1021, 53,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*buffer*/,
				i /*event*/,
				w /*lifecycle*/,
				E /*network*/,
				C /*platform*/,
				d /*extensionHostDebug*/,
				m /*label*/,
				r /*log*/,
				u /*productService*/,
				a /*remoteAgentConnection*/,
				h /*remoteAuthorityResolver*/,
				c /*remoteSocketFactoryService*/,
				n /*sign*/,
				g /*telemetry*/,
				p /*telemetryUtils*/,
				o /*workspace*/,
				f /*environmentService*/,
				b /*extensionDevOptions*/,
				s /*extensionHostProtocol*/,
				l /*extensions*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$74c = void 0),
					(C = mt(C));
				let y = class extends w.$1c {
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.runningLocation = v),
							(this.j = S),
							(this.m = I),
							(this.n = T),
							(this.q = P),
							(this.r = k),
							(this.s = L),
							(this.t = D),
							(this.u = M),
							(this.w = N),
							(this.y = A),
							(this.z = R),
							(this.C = O),
							(this.pid = null),
							(this.startup = l.ExtensionHostStartup.EagerAutoStart),
							(this.extensions = null),
							(this.a = this.D(new i.$re())),
							(this.onExit = this.a.event),
							(this.g = !1),
							(this.remoteAuthority = this.j.remoteAuthority),
							(this.b = null),
							(this.c = !1),
							(this.f = !1);
						const B = (0, b.$Umc)(this.q);
						this.h = B.isExtensionDevHost;
					}
					start() {
						const v = {
							commit: this.z.commit,
							quality: this.z.quality,
							addressProvider: {
								getAddress: async () => {
									const { authority: S } = await this.w.resolveAuthority(
										this.j.remoteAuthority,
									);
									return {
										connectTo: S.connectTo,
										connectionToken: S.connectionToken,
									};
								},
							},
							remoteSocketFactoryService: this.m,
							signService: this.C,
							logService: this.s,
							ipcLogger: null,
						};
						return this.w.resolveAuthority(this.j.remoteAuthority).then((S) => {
							const I = {
									language: C.$z,
									debugId: this.q.debugExtensionHost.debugId,
									break: this.q.debugExtensionHost.break,
									port: this.q.debugExtensionHost.port,
									env: {
										...this.q.debugExtensionHost.env,
										...S.options?.extensionHostEnv,
									},
								},
								T = this.q.extensionDevelopmentLocationURI;
							let P = !0;
							return (
								T && T.length > 0 && T[0].scheme === E.Schemas.file && (P = !1),
								P || (I.break = !1),
								(0, a.$am)(v, I).then((k) => {
									this.D(k);
									const { protocol: L, debugPort: D, reconnectionToken: M } = k,
										N = typeof D == "number";
									return (
										P &&
											this.q.isExtensionDevelopment &&
											this.q.debugExtensionHost.debugId &&
											D &&
											this.y.attachSession(
												this.q.debugExtensionHost.debugId,
												D,
												this.j.remoteAuthority,
											),
										L.onDidDispose(() => {
											this.F(M);
										}),
										L.onSocketClose(() => {
											this.h && this.F(M);
										}),
										new Promise((A, R) => {
											const O = setTimeout(() => {
													R(
														"The remote extension host took longer than 60s to send its ready message.",
													);
												}, 6e4),
												B = L.onMessage((U) => {
													if ((0, s.$Rn)(U, s.MessageType.Ready)) {
														this.G(N).then((z) => {
															L.send(t.$Te.fromString(JSON.stringify(z)));
														});
														return;
													}
													if ((0, s.$Rn)(U, s.MessageType.Initialized)) {
														clearTimeout(O), B.dispose(), (this.b = L), A(L);
														return;
													}
													console.error(
														"received unexpected message during handshake phase from the extension host: ",
														U,
													);
												});
										})
									);
								})
							);
						});
					}
					F(v) {
						this.c ||
							((this.c = !0),
							this.h &&
								this.q.debugExtensionHost.debugId &&
								this.y.close(this.q.debugExtensionHost.debugId),
							!this.f && this.a.fire([0, v]));
					}
					async G(v) {
						const S = await this.j.getInitData();
						this.extensions = S.extensions;
						const I = this.n.getWorkspace();
						return {
							commit: this.z.commit,
							version: this.z.version,
							vscodeVersion: this.z.vscodeVersion,
							rendererPerformanceTimeOrigin: S.rendererPerformanceTimeOrigin,
							quality: this.z.quality,
							parentPid: S.pid,
							environment: {
								isExtensionDevelopmentDebug: v,
								appRoot: S.appRoot,
								appName: this.z.nameLong,
								appHost: this.z.embedderIdentifier || "desktop",
								appUriScheme: this.z.urlProtocol,
								extensionTelemetryLogResource: this.q.extHostTelemetryLogFile,
								isExtensionTelemetryLoggingOnly: (0, p.$Yp)(this.z, this.q),
								appLanguage: C.$z,
								extensionDevelopmentLocationURI:
									this.q.extensionDevelopmentLocationURI,
								extensionTestsLocationURI: this.q.extensionTestsLocationURI,
								globalStorageHome: S.globalStorageHome,
								workspaceStorageHome: S.workspaceStorageHome,
								extensionLogLevel: this.q.extensionLogLevel,
							},
							workspace:
								this.n.getWorkbenchState() === o.WorkbenchState.EMPTY
									? null
									: {
											configuration: I.configuration,
											id: I.id,
											name: this.u.getWorkspaceLabel(I),
											transient: I.transient,
										},
							remote: {
								isRemote: !0,
								authority: this.j.remoteAuthority,
								connectionData: S.connectionData,
							},
							consoleForward: {
								includeStack: !1,
								logNative: !!this.q.debugExtensionHost.debugId,
							},
							extensions: this.extensions.toSnapshot(),
							telemetryInfo: {
								sessionId: this.r.sessionId,
								machineId: this.r.machineId,
								macMachineId: this.r.macMachineId,
								sqmId: this.r.sqmId,
								devDeviceId: this.r.devDeviceId,
								firstSessionDate: this.r.firstSessionDate,
								msftInternal: this.r.msftInternal,
							},
							logLevel: this.s.getLevel(),
							loggers: [...this.t.getRegisteredLoggers()],
							logsLocation: S.extensionHostLogsPath,
							autoStart: this.startup === l.ExtensionHostStartup.EagerAutoStart,
							uiKind: C.$r ? s.UIKind.Web : s.UIKind.Desktop,
						};
					}
					getInspectPort() {}
					enableInspectPort() {
						return Promise.resolve(!1);
					}
					async disconnect() {
						this.b &&
							!this.g &&
							(this.b.send((0, s.$Qn)(s.MessageType.Terminate)),
							this.b.sendDisconnect(),
							(this.g = !0),
							await this.b.drain());
					}
					dispose() {
						super.dispose(),
							(this.f = !0),
							this.disconnect(),
							this.b && (this.b.getSocket().end(), (this.b = null));
					}
				};
				(e.$74c = y),
					(e.$74c = y =
						Ne(
							[
								j(2, c.$8l),
								j(3, o.$Vi),
								j(4, f.$r8),
								j(5, g.$km),
								j(6, r.$ik),
								j(7, r.$jk),
								j(8, m.$3N),
								j(9, h.$3l),
								j(10, d.$dp),
								j(11, u.$Bk),
								j(12, n.$$l),
							],
							y,
						));
			},
		)
