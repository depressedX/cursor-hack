import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/iframe.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/amd.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../nls.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../environment/browser/environmentService.js';
import '../common/extensionHostProtocol.js';
import '../common/extensions.js';
define(
			de[3321],
			he([
				1, 0, 7, 1126, 75, 455, 15, 76, 29, 6, 3, 23, 12, 19, 9, 47, 4, 73, 180,
				34, 62, 21, 32, 269, 129, 25, 286, 1021, 53,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*iframe*/,
				w /*window*/,
				E /*amd*/,
				C /*async*/,
				d /*buffer*/,
				m /*errors*/,
				r /*event*/,
				u /*lifecycle*/,
				a /*network*/,
				h /*platform*/,
				c /*resources*/,
				n /*uri*/,
				g /*uuid*/,
				p /*nls*/,
				o /*label*/,
				f /*layoutService*/,
				b /*log*/,
				s /*productService*/,
				l /*storage*/,
				y /*telemetry*/,
				$ /*telemetryUtils*/,
				v /*userDataProfile*/,
				S /*workspace*/,
				I /*environmentService*/,
				T /*extensionHostProtocol*/,
				P /*extensions*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E4c = void 0),
					(t = mt(t)),
					(h = mt(h));
				let k = class extends u.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(),
							(this.runningLocation = D),
							(this.startup = M),
							(this.h = N),
							(this.j = A),
							(this.m = R),
							(this.n = O),
							(this.q = B),
							(this.r = U),
							(this.s = z),
							(this.t = F),
							(this.u = x),
							(this.w = H),
							(this.y = q),
							(this.pid = null),
							(this.remoteAuthority = null),
							(this.extensions = null),
							(this.a = this.D(new r.$re())),
							(this.onExit = this.a.event),
							(this.b = !1),
							(this.c = null),
							(this.f = null),
							(this.g = (0, c.$nh)(this.s.extHostLogsPath, "webWorker"));
					}
					async z() {
						const D = new URLSearchParams();
						this.s.debugExtensionHost &&
							this.s.debugRenderer &&
							D.set("debugged", "1"),
							a.COI.addSearchParam(D, !0, !0);
						const M = `?${D.toString()}`,
							N = `vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.${E.$V ? "esm." : ""}html`;
						if (h.$r) {
							const R = this.u.webEndpointUrlTemplate,
								O = this.u.commit,
								B = this.u.quality;
							if (R && O && B) {
								const U = "webWorkerExtensionHostIframeStableOriginUUID";
								let z = this.y.get(U, l.StorageScope.WORKSPACE);
								typeof z > "u" &&
									((z = (0, g.$9g)()),
									this.y.store(
										U,
										z,
										l.StorageScope.WORKSPACE,
										l.StorageTarget.MACHINE,
									));
								const F = await (0, i.$1fb)(w.$Bfb.origin, z),
									x = R.replace("{{uuid}}", `v--${F}`)
										.replace("{{commit}}", O)
										.replace("{{quality}}", B),
									H = new URL(`${x}/out/${N}${M}`);
								return (
									H.searchParams.set("parentOrigin", w.$Bfb.origin),
									H.searchParams.set("salt", z),
									H.toString()
								);
							}
							console.warn(
								"The web worker extension host is started in a same-origin iframe!",
							);
						}
						return `${a.$7g.asBrowserUri(N).toString(!0)}${M}`;
					}
					async start() {
						return (
							this.c || ((this.c = this.C()), this.c.then((D) => (this.f = D))),
							this.c
						);
					}
					async C() {
						const D = await this.z(),
							M = this.D(new r.$re()),
							N = document.createElement("iframe");
						N.setAttribute("class", "web-worker-ext-host-iframe"),
							N.setAttribute("sandbox", "allow-scripts allow-same-origin"),
							N.setAttribute(
								"allow",
								"usb; serial; hid; cross-origin-isolated;",
							),
							N.setAttribute("aria-hidden", "true"),
							(N.style.display = "none");
						const A = (0, g.$9g)();
						N.setAttribute("src", `${D}&vscodeWebWorkerExtHostId=${A}`);
						const R = new C.$Lh();
						let O,
							B = null,
							U = !1,
							z = null;
						const F = (V, G) => {
								(B = G),
									(U = !0),
									(0, m.$4)(B),
									clearTimeout(z),
									this.a.fire([
										T.ExtensionHostExitCode.UnexpectedError,
										B.message,
									]),
									R.open();
							},
							x = (V) => {
								(O = V), clearTimeout(z), R.open();
							};
						if (
							((z = setTimeout(() => {
								console.warn(
									"The Web Worker Extension Host did not start in 60s, that might be a problem.",
								);
							}, 6e4)),
							this.D(
								t.$0fb(w.$Bfb, "message", (V) => {
									if (
										V.source !== N.contentWindow ||
										V.data.vscodeWebWorkerExtHostId !== A
									)
										return;
									if (V.data.error) {
										const { name: K, message: J, stack: W } = V.data.error,
											X = new Error();
										return (
											(X.message = J),
											(X.name = K),
											(X.stack = W),
											F(T.ExtensionHostExitCode.UnexpectedError, X)
										);
									}
									if (V.data.type === "vscode.bootstrap.nls") {
										const K = "vs/base/worker/workerMain.js",
											J = E.$V ? void 0 : ce.toUrl(K).slice(0, -K.length);
										N.contentWindow.postMessage(
											{
												type: V.data.type,
												data: {
													baseUrl: J,
													workerUrl: E.$V
														? a.$7g
																.asBrowserUri(
																	"vs/workbench/api/worker/extensionHostWorker.esm.js",
																)
																.toString(!0)
														: ce.toUrl(K),
													fileRoot: globalThis._VSCODE_FILE_ROOT,
													nls: {
														messages: (0, p.getNLSMessages)(),
														language: (0, p.getNLSLanguage)(),
													},
												},
											},
											"*",
										);
										return;
									}
									const { data: G } = V.data;
									if (R.isOpen() || !(G instanceof MessagePort)) {
										console.warn("UNEXPECTED message", V);
										const K = new Error("UNEXPECTED message");
										return F(T.ExtensionHostExitCode.UnexpectedError, K);
									}
									x(G);
								}),
							),
							this.w.mainContainer.appendChild(N),
							this.D((0, u.$Yc)(() => N.remove())),
							await R.wait(),
							U)
						)
							throw B;
						const H = this.s.options?.messagePorts ?? new Map();
						N.contentWindow.postMessage({ type: "vscode.init", data: H }, "*", [
							...H.values(),
						]),
							(O.onmessage = (V) => {
								const { data: G } = V;
								if (!(G instanceof ArrayBuffer)) {
									console.warn("UNKNOWN data received", G),
										this.a.fire([77, "UNKNOWN data received"]);
									return;
								}
								M.fire(d.$Te.wrap(new Uint8Array(G, 0, G.byteLength)));
							});
						const q = {
							onMessage: M.event,
							send: (V) => {
								const G = V.buffer.buffer.slice(
									V.buffer.byteOffset,
									V.buffer.byteOffset + V.buffer.byteLength,
								);
								O.postMessage(G, [G]);
							},
						};
						return this.F(q);
					}
					async F(D) {
						if (
							(await r.Event.toPromise(
								r.Event.filter(D.onMessage, (M) =>
									(0, T.$Rn)(M, T.MessageType.Ready),
								),
							),
							this.b ||
								(D.send(d.$Te.fromString(JSON.stringify(await this.G()))),
								this.b) ||
								(await r.Event.toPromise(
									r.Event.filter(D.onMessage, (M) =>
										(0, T.$Rn)(M, T.MessageType.Initialized),
									),
								),
								this.b))
						)
							throw (0, m.$0)();
						return D;
					}
					dispose() {
						this.b ||
							((this.b = !0),
							this.f?.send((0, T.$Qn)(T.MessageType.Terminate)),
							super.dispose());
					}
					getInspectPort() {}
					enableInspectPort() {
						return Promise.resolve(!1);
					}
					async G() {
						const D = await this.h.getInitData();
						this.extensions = D.extensions;
						const M = this.m.getWorkspace(),
							N = this.u.extensionsGallery?.nlsBaseUrl;
						let A;
						return (
							N &&
								this.u.commit &&
								!h.Language.isDefaultVariant() &&
								(A = n.URI.joinPath(
									n.URI.parse(N),
									this.u.commit,
									this.u.version,
									h.Language.value(),
								)),
							{
								commit: this.u.commit,
								version: this.u.version,
								vscodeVersion: this.u.vscodeVersion,
								rendererPerformanceTimeOrigin: performance.timeOrigin,
								quality: this.u.quality,
								parentPid: 0,
								environment: {
									isExtensionDevelopmentDebug: this.s.debugRenderer,
									appName: this.u.nameLong,
									appHost:
										this.u.embedderIdentifier ?? (h.$r ? "web" : "desktop"),
									appUriScheme: this.u.urlProtocol,
									appLanguage: h.$z,
									extensionTelemetryLogResource: this.s.extHostTelemetryLogFile,
									isExtensionTelemetryLoggingOnly: (0, $.$Yp)(this.u, this.s),
									extensionDevelopmentLocationURI:
										this.s.extensionDevelopmentLocationURI,
									extensionTestsLocationURI: this.s.extensionTestsLocationURI,
									globalStorageHome: this.t.defaultProfile.globalStorageHome,
									workspaceStorageHome: this.s.workspaceStorageHome,
									extensionLogLevel: this.s.extensionLogLevel,
								},
								workspace:
									this.m.getWorkbenchState() === S.WorkbenchState.EMPTY
										? void 0
										: {
												configuration: M.configuration || void 0,
												id: M.id,
												name: this.n.getWorkspaceLabel(M),
												transient: M.transient,
											},
								consoleForward: {
									includeStack: !1,
									logNative: this.s.debugRenderer,
								},
								extensions: this.extensions.toSnapshot(),
								nlsBaseUrl: A,
								telemetryInfo: {
									sessionId: this.j.sessionId,
									machineId: this.j.machineId,
									macMachineId: this.j.macMachineId,
									sqmId: this.j.sqmId,
									devDeviceId: this.j.devDeviceId,
									firstSessionDate: this.j.firstSessionDate,
									msftInternal: this.j.msftInternal,
								},
								logLevel: this.q.getLevel(),
								loggers: [...this.r.getRegisteredLoggers()],
								logsLocation: this.g,
								autoStart:
									this.startup === P.ExtensionHostStartup.EagerAutoStart,
								remote: {
									authority: this.s.remoteAuthority,
									connectionData: null,
									isRemote: !1,
								},
								uiKind: h.$r ? T.UIKind.Web : T.UIKind.Desktop,
							}
						);
					}
				};
				(e.$E4c = k),
					(e.$E4c = k =
						Ne(
							[
								j(3, y.$km),
								j(4, S.$Vi),
								j(5, o.$3N),
								j(6, b.$ik),
								j(7, b.$jk),
								j(8, I.$5rb),
								j(9, v.$Xl),
								j(10, s.$Bk),
								j(11, f.$jEb),
								j(12, l.$lq),
							],
							k,
						));
			},
		)
