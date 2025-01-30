import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/platform.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/workspace/common/workspace.js';
import '../browser/terminal.js';
import '../common/terminal.js';
import '../common/terminalStorageKeys.js';
import './localPty.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/environment/electron-sandbox/shellEnvironmentService.js';
import '../../../services/history/common/history.js';
import '../common/terminalEnvironment.js';
import '../../../../platform/product/common/productService.js';
import '../common/environmentVariable.js';
import '../browser/baseTerminalBackend.js';
import '../../../../platform/native/common/native.js';
import '../../../../base/parts/ipc/common/ipc.mp.js';
import '../../../../base/parts/ipc/electron-sandbox/ipc.mp.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../../../base/common/performance.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../base/common/async.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/stopwatch.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../platform/terminal/common/terminalEnvironment.js';
define(
			de[3638],
			he([
				1, 0, 6, 12, 10, 5, 73, 30, 21, 117, 25, 107, 145, 691, 3151, 358, 1020,
				245, 1262, 62, 807, 1873, 110, 1173, 904, 305, 240, 52, 15, 166, 138,
				162, 143, 775,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*platform*/,
				w /*configuration*/,
				E /*instantiation*/,
				C /*label*/,
				d /*platform*/,
				m /*storage*/,
				r /*terminal*/,
				u /*workspace*/,
				a /*terminal*/,
				h /*terminal*/,
				c /*terminalStorageKeys*/,
				n /*localPty*/,
				g /*configurationResolver*/,
				p /*shellEnvironmentService*/,
				o /*history*/,
				f /*terminalEnvironment*/,
				b /*productService*/,
				s /*environmentVariable*/,
				l /*baseTerminalBackend*/,
				y /*native*/,
				$ /*ipc.mp*/,
				v /*ipc.mp*/,
				S /*ipc*/,
				I /*performance*/,
				T /*lifecycle*/,
				P /*async*/,
				k /*statusbar*/,
				L /*decorators*/,
				D /*stopwatch*/,
				M /*remoteAgentService*/,
				N /*terminalEnvironment*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ogd = void 0),
					(f = mt(f));
				let A = class {
					static {
						this.ID = "workbench.contrib.localTerminalBackend";
					}
					constructor(B, U) {
						const z = B.createInstance(R);
						d.$Io.as(r.$WJ.Backend).registerTerminalBackend(z),
							U.didRegisterBackend(z.remoteAuthority);
					}
				};
				(e.$ogd = A), (e.$ogd = A = Ne([j(0, E.$Li), j(1, a.$mIb)], A));
				let R = class extends l.$dUc {
					get y() {
						return this.w || this.G;
					}
					get whenReady() {
						return this.z.p;
					}
					setReady() {
						this.z.complete();
					}
					constructor(B, U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						super(F, z, Y, V, ne, B),
							(this.F = U),
							(this.G = F),
							(this.H = x),
							(this.I = H),
							(this.J = q),
							(this.L = V),
							(this.M = G),
							(this.N = K),
							(this.O = J),
							(this.P = W),
							(this.Q = X),
							(this.R = ie),
							(this.S = ee),
							(this.remoteAuthority = void 0),
							(this.s = new Map()),
							(this.z = new P.$0h()),
							(this.C = this.D(new t.$re())),
							(this.onDidRequestDetach = this.C.event),
							this.D(
								this.onPtyHostRestart(() => {
									(this.w = void 0), (this.u = void 0), this.U();
								}),
							);
					}
					async U() {
						if (this.u) {
							await this.u.p;
							return;
						}
						this.j.debug("Starting pty host");
						const B = new P.$0h();
						this.u = B;
						const U = S.ProxyChannel.toService(
							(0, S.$si)(
								this.u.p.then((z) =>
									z.getChannel(r.TerminalIpcChannels.PtyHostWindow),
								),
							),
						);
						(this.w = U),
							this.S.getConnection()?.remoteAuthority ||
								(await this.F.when(T.LifecyclePhase.Restored)),
							(0, I.mark)("code/terminal/willConnectPtyHost"),
							this.j.trace("Renderer->PtyHost#connect: before acquirePort"),
							(0, v.$lrb)(
								"vscode:createPtyHostMessageChannel",
								"vscode:createPtyHostMessageChannelResult",
							).then((z) => {
								(0, I.mark)("code/terminal/didConnectPtyHost"),
									this.j.trace(
										"Renderer->PtyHost#connect: connection established",
									);
								const F = new $.$erb(z, `window:${this.R.windowId}`);
								B.complete(F),
									this.b.fire(),
									U.onProcessData((H) => this.s.get(H.id)?.handleData(H.event)),
									U.onDidChangeProperty((H) =>
										this.s.get(H.id)?.handleDidChangeProperty(H.property),
									),
									U.onProcessExit((H) => {
										const q = this.s.get(H.id);
										q && (q.handleExit(H.event), this.s.delete(H.id));
									}),
									U.onProcessReady((H) =>
										this.s.get(H.id)?.handleReady(H.event),
									),
									U.onProcessReplay((H) =>
										this.s.get(H.id)?.handleReplay(H.event),
									),
									U.onProcessOrphanQuestion((H) =>
										this.s.get(H.id)?.handleOrphanQuestion(),
									),
									U.onDidRequestDetach((H) => this.C.fire(H));
								const x = this.M.getValue(h.$ieb);
								for (const H of Object.keys(x.autoReplies)) {
									const q = x.autoReplies[H];
									q && U.installAutoReply(H, q);
								}
								this.D(
									this.M.onDidChangeConfiguration(async (H) => {
										if (
											H.affectsConfiguration(r.TerminalSettingId.AutoReplies)
										) {
											U.uninstallAllAutoReplies();
											const q = this.M.getValue(h.$ieb);
											for (const V of Object.keys(q.autoReplies)) {
												const G = q.autoReplies[V];
												G && this.y.installAutoReply(V, G);
											}
										}
									}),
								),
									this.getEnvironment();
							});
					}
					async requestDetachInstance(B, U) {
						return this.y.requestDetachInstance(B, U);
					}
					async acceptDetachInstanceReply(B, U) {
						if (!U) {
							this.j.warn(
								"Cannot attach to feature terminals, custom pty terminals, or those without a persistentProcessId",
							);
							return;
						}
						return this.y.acceptDetachInstanceReply(B, U);
					}
					async persistTerminalState() {
						const B = Array.from(this.s.keys()),
							U = await this.y.serializeTerminalState(B);
						this.J.store(
							c.TerminalStorageKeys.TerminalBufferState,
							U,
							m.StorageScope.WORKSPACE,
							m.StorageTarget.MACHINE,
						);
					}
					async updateTitle(B, U, z) {
						await this.y.updateTitle(B, U, z);
					}
					async updateIcon(B, U, z, F) {
						await this.y.updateIcon(B, U, z, F);
					}
					async updateProperty(B, U, z) {
						return this.y.updateProperty(B, U, z);
					}
					async createProcess(B, U, z, F, x, H, q, V) {
						await this.U();
						const G = await this.I.getShellEnv(),
							K = await this.y.createProcess(
								B,
								U,
								z,
								F,
								x,
								H,
								G,
								q,
								V,
								this.q(),
								this.X(),
							),
							J = new n.$ngd(K, V, this.y);
						return this.s.set(K, J), J;
					}
					async attachToProcess(B) {
						await this.U();
						try {
							await this.y.attachToProcess(B);
							const U = new n.$ngd(B, !0, this.y);
							return this.s.set(B, U), U;
						} catch (U) {
							this.j.warn(`Couldn't attach to process ${U.message}`);
						}
					}
					async attachToRevivedProcess(B) {
						await this.U();
						try {
							const U = (await this.y.getRevivedPtyNewId(this.q(), B)) ?? B;
							return await this.attachToProcess(U);
						} catch (U) {
							this.j.warn(`Couldn't attach to process ${U.message}`);
						}
					}
					async listProcesses() {
						return await this.U(), this.y.listProcesses();
					}
					async getLatency() {
						const B = [],
							U = new D.$le();
						this.w &&
							(await this.w.getLatency(),
							U.stop(),
							B.push({
								label: "window<->ptyhost (message port)",
								latency: U.elapsed(),
							}),
							U.reset());
						const z = await this.G.getLatency();
						return (
							U.stop(),
							B.push({
								label: "window<->ptyhostservice<->ptyhost",
								latency: U.elapsed(),
							}),
							[...B, ...z]
						);
					}
					async getPerformanceMarks() {
						return this.y.getPerformanceMarks();
					}
					async reduceConnectionGraceTime() {
						this.y.reduceConnectionGraceTime();
					}
					async getDefaultSystemShell(B) {
						return this.y.getDefaultSystemShell(B);
					}
					async getProfiles(B, U, z) {
						return this.G.getProfiles(this.m.getWorkspace().id, B, U, z) || [];
					}
					async getEnvironment() {
						return this.y.getEnvironment();
					}
					async getShellEnvironment() {
						return this.I.getShellEnv();
					}
					async getWslPath(B, U) {
						return this.y.getWslPath(B, U);
					}
					async setTerminalLayoutInfo(B) {
						const U = { workspaceId: this.q(), tabs: B ? B.tabs : [] };
						await this.y.setTerminalLayoutInfo(U),
							this.J.store(
								c.TerminalStorageKeys.TerminalLayoutInfo,
								JSON.stringify(U),
								m.StorageScope.WORKSPACE,
								m.StorageTarget.MACHINE,
							);
					}
					async getTerminalLayoutInfo() {
						const B = this.q(),
							U = { workspaceId: B },
							z = this.J.get(
								c.TerminalStorageKeys.TerminalBufferState,
								m.StorageScope.WORKSPACE,
							),
							F = this.n(z);
						if (F && F.length > 0)
							try {
								const x = this.O.getLastActiveWorkspaceRoot(),
									H = x ? (this.m.getWorkspaceFolder(x) ?? void 0) : void 0,
									q = f.$Leb(
										H,
										await this.P.getEnvironment(this.remoteAuthority),
										this.L,
									);
								(0, I.mark)("code/terminal/willGetReviveEnvironments"),
									await Promise.all(
										F.map(
											(G) =>
												new Promise((K) => {
													this.W(q, G.shellLaunchConfig).then((J) => {
														(G.processLaunchConfig.env = J), K();
													});
												}),
										),
									),
									(0, I.mark)("code/terminal/didGetReviveEnvironments"),
									(0, I.mark)("code/terminal/willReviveTerminalProcesses"),
									await this.y.reviveTerminalProcesses(
										B,
										F,
										Intl.DateTimeFormat().resolvedOptions().locale,
									),
									(0, I.mark)("code/terminal/didReviveTerminalProcesses"),
									this.J.remove(
										c.TerminalStorageKeys.TerminalBufferState,
										m.StorageScope.WORKSPACE,
									);
								const V = this.J.get(
									c.TerminalStorageKeys.TerminalLayoutInfo,
									m.StorageScope.WORKSPACE,
								);
								V &&
									((0, I.mark)("code/terminal/willSetTerminalLayoutInfo"),
									await this.y.setTerminalLayoutInfo(JSON.parse(V)),
									(0, I.mark)("code/terminal/didSetTerminalLayoutInfo"),
									this.J.remove(
										c.TerminalStorageKeys.TerminalLayoutInfo,
										m.StorageScope.WORKSPACE,
									));
							} catch (x) {
								this.j.warn(
									"LocalTerminalBackend#getTerminalLayoutInfo Error",
									x && typeof x == "object" && "message" in x ? x.message : x,
								);
							}
						return this.y.getTerminalLayoutInfo(U);
					}
					async W(B, U) {
						const z = i.$l ? "windows" : i.$m ? "osx" : "linux",
							F = this.M.getValue(`terminal.integrated.env.${z}`),
							x = await (U.useShellEnvironment
								? this.getShellEnvironment()
								: this.getEnvironment()),
							H = await f.$Meb(
								U,
								F,
								B,
								this.N.version,
								this.M.getValue(r.TerminalSettingId.DetectLocale),
								x,
							);
						if ((0, N.$Eeb)(U)) {
							const q = f.$Oeb(U.cwd, this.m, this.O);
							await this.Q.mergedCollection.applyToProcessEnvironment(
								H,
								{ workspaceFolder: q },
								B,
							);
						}
						return H;
					}
					X() {
						return this.H.getWorkspaceLabel(this.m.getWorkspace());
					}
				};
				Ne([L.$ei], R.prototype, "getEnvironment", null),
					Ne([L.$ei], R.prototype, "getShellEnvironment", null),
					(R = Ne(
						[
							j(0, u.$Vi),
							j(1, T.$n6),
							j(2, r.$YJ),
							j(3, r.$XJ),
							j(4, C.$3N),
							j(5, p.$Cdd),
							j(6, m.$lq),
							j(7, g.$zeb),
							j(8, w.$gj),
							j(9, b.$Bk),
							j(10, o.$Feb),
							j(11, h.$reb),
							j(12, s.$ceb),
							j(13, o.$Feb),
							j(14, y.$y7c),
							j(15, k.$d6b),
							j(16, M.$$m),
						],
						R,
					));
			},
		),
		