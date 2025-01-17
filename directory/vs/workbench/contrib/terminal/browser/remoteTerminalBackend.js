import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/marshalling.js';
import '../../../../base/common/performance.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/stopwatch.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/workspace/common/workspace.js';
import './baseTerminalBackend.js';
import './remotePty.js';
import './terminal.js';
import '../common/remote/remoteTerminalChannel.js';
import '../common/terminal.js';
import '../common/terminalStorageKeys.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/history/common/history.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../services/statusbar/browser/statusbar.js';
define(
			de[3637],
			he([
				1, 0, 15, 6, 197, 240, 12, 162, 31, 10, 5, 30, 211, 21, 117, 25, 1873,
				3565, 107, 3269, 145, 691, 358, 245, 143, 166,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gUc = void 0);
				let I = class {
					static {
						this.ID = "remoteTerminalBackend";
					}
					constructor(k, L, D) {
						const M = L.getConnection();
						if (M?.remoteAuthority) {
							const N = k.createInstance(
									b.$Seb,
									M.remoteAuthority,
									M.getChannel(b.$Reb),
								),
								A = k.createInstance(T, M.remoteAuthority, N);
							a.$Io.as(n.$WJ.Backend).registerTerminalBackend(A),
								D.didRegisterBackend(A.remoteAuthority);
						}
					}
				};
				(e.$gUc = I),
					(e.$gUc = I = Ne([j(0, u.$Li), j(1, v.$$m), j(2, f.$mIb)], I));
				let T = class extends p.$dUc {
					get whenReady() {
						return this.s.p;
					}
					setReady() {
						this.s.complete();
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z, F, x) {
						super(L, N, z, U, x, B),
							(this.remoteAuthority = k),
							(this.y = L),
							(this.z = D),
							(this.C = M),
							(this.F = A),
							(this.G = R),
							(this.H = O),
							(this.I = z),
							(this.J = F),
							(this.r = new Map()),
							(this.s = new t.$0h()),
							(this.u = this.D(new i.$re())),
							(this.onDidRequestDetach = this.u.event),
							(this.w = this.D(new i.$re())),
							(this.onRestoreCommands = this.w.event),
							this.y.onProcessData((V) =>
								this.r.get(V.id)?.handleData(V.event),
							),
							this.y.onProcessReplay((V) => {
								this.r.get(V.id)?.handleReplay(V.event),
									V.event.commands.commands.length > 0 &&
										this.w.fire({
											id: V.id,
											commands: V.event.commands.commands,
										});
							}),
							this.y.onProcessOrphanQuestion((V) =>
								this.r.get(V.id)?.handleOrphanQuestion(),
							),
							this.y.onDidRequestDetach((V) => this.u.fire(V)),
							this.y.onProcessReady((V) =>
								this.r.get(V.id)?.handleReady(V.event),
							),
							this.y.onDidChangeProperty((V) =>
								this.r.get(V.id)?.handleDidChangeProperty(V.property),
							),
							this.y.onProcessExit((V) => {
								const G = this.r.get(V.id);
								G && (G.handleExit(V.event), this.r.delete(V.id));
							});
						const H = [
							"_remoteCLI.openExternal",
							"_remoteCLI.windowOpen",
							"_remoteCLI.getSystemStatus",
							"_remoteCLI.manageExtensions",
						];
						this.y.onExecuteCommand(async (V) => {
							if (!this.r.get(V.persistentProcessId)) return;
							const K = V.reqId,
								J = V.commandId;
							if (!H.includes(J)) {
								this.y.sendCommandResult(
									K,
									!0,
									"Invalid remote cli command: " + J,
								);
								return;
							}
							const W = V.commandArgs.map((X) => (0, w.$ji)(X));
							try {
								const X = await this.F.executeCommand(V.commandId, ...W);
								this.y.sendCommandResult(K, !1, X);
							} catch (X) {
								this.y.sendCommandResult(K, !0, X);
							}
						});
						const q = this.J.getValue(s.$ieb);
						for (const V of Object.keys(q.autoReplies)) {
							const G = q.autoReplies[V];
							G && this.y.installAutoReply(V, G);
						}
						this.D(
							this.J.onDidChangeConfiguration(async (V) => {
								if (V.affectsConfiguration(n.TerminalSettingId.AutoReplies)) {
									this.y.uninstallAllAutoReplies();
									const G = this.J.getValue(s.$ieb);
									for (const K of Object.keys(G.autoReplies)) {
										const J = G.autoReplies[K];
										J && (await this.y.installAutoReply(K, J));
									}
								}
							}),
						),
							this.b.fire();
					}
					async requestDetachInstance(k, L) {
						if (!this.y)
							throw new Error(
								"Cannot request detach instance when there is no remote!",
							);
						return this.y.requestDetachInstance(k, L);
					}
					async acceptDetachInstanceReply(k, L) {
						if (this.y) {
							if (!L) {
								this.j.warn(
									"Cannot attach to feature terminals, custom pty terminals, or those without a persistentProcessId",
								);
								return;
							}
						} else
							throw new Error(
								"Cannot accept detached instance when there is no remote!",
							);
						return this.y.acceptDetachInstanceReply(k, L);
					}
					async persistTerminalState() {
						if (!this.y)
							throw new Error(
								"Cannot persist terminal state when there is no remote!",
							);
						const k = Array.from(this.r.keys()),
							L = await this.y.serializeTerminalState(k);
						this.G.store(
							l.TerminalStorageKeys.TerminalBufferState,
							L,
							c.StorageScope.WORKSPACE,
							c.StorageTarget.MACHINE,
						);
					}
					async createProcess(k, L, D, M, N, A, R, O) {
						if (!this.y)
							throw new Error(
								"Cannot create remote terminal when there is no remote!",
							);
						if (!(await this.z.getEnvironment()))
							throw new Error("Could not fetch remote environment");
						const U = this.J.getValue(s.$ieb),
							z = {
								"terminal.integrated.env.windows": this.J.getValue(
									n.TerminalSettingId.EnvWindows,
								),
								"terminal.integrated.env.osx": this.J.getValue(
									n.TerminalSettingId.EnvMacOs,
								),
								"terminal.integrated.env.linux": this.J.getValue(
									n.TerminalSettingId.EnvLinux,
								),
								"terminal.integrated.cwd": this.J.getValue(
									n.TerminalSettingId.Cwd,
								),
								"terminal.integrated.detectLocale": U.detectLocale,
							},
							F = {
								name: k.name,
								executable: k.executable,
								args: k.args,
								cwd: k.cwd,
								env: k.env,
								useShellEnvironment: k.useShellEnvironment,
								reconnectionProperties: k.reconnectionProperties,
								type: k.type,
								isFeatureTerminal: k.isFeatureTerminal,
							},
							x = this.I.getLastActiveWorkspaceRoot(),
							H = await this.y.createProcess(F, z, x, R, O, D, M, N),
							q = this.C.createInstance(
								o.$fUc,
								H.persistentTerminalId,
								O,
								this.y,
							);
						return this.r.set(H.persistentTerminalId, q), q;
					}
					async attachToProcess(k) {
						if (!this.y)
							throw new Error(
								"Cannot create remote terminal when there is no remote!",
							);
						try {
							await this.y.attachToProcess(k);
							const L = this.C.createInstance(o.$fUc, k, !0, this.y);
							return this.r.set(k, L), L;
						} catch (L) {
							this.j.trace(`Couldn't attach to process ${L.message}`);
						}
					}
					async attachToRevivedProcess(k) {
						if (!this.y)
							throw new Error(
								"Cannot create remote terminal when there is no remote!",
							);
						try {
							const L = (await this.y.getRevivedPtyNewId(k)) ?? k;
							return await this.attachToProcess(L);
						} catch (L) {
							this.j.trace(`Couldn't attach to process ${L.message}`);
						}
					}
					async listProcesses() {
						return this.y.listProcesses();
					}
					async getLatency() {
						const k = new d.$le(),
							L = await this.y.getLatency();
						return (
							k.stop(),
							[
								{
									label: "window<->ptyhostservice<->ptyhost",
									latency: k.elapsed(),
								},
								...L,
							]
						);
					}
					async updateProperty(k, L, D) {
						await this.y.updateProperty(k, L, D);
					}
					async updateTitle(k, L, D) {
						await this.y.updateTitle(k, L, D);
					}
					async updateIcon(k, L, D, M) {
						await this.y.updateIcon(k, L, D, M);
					}
					async getDefaultSystemShell(k) {
						return this.y.getDefaultSystemShell(k) || "";
					}
					async getProfiles(k, L, D) {
						return this.y.getProfiles(k, L, D) || [];
					}
					async getEnvironment() {
						return this.y.getEnvironment() || {};
					}
					async getShellEnvironment() {
						const k = this.z.getConnection();
						return k
							? (await this.H.resolveAuthority(k.remoteAuthority)).options
									?.extensionHostEnv
							: void 0;
					}
					async getWslPath(k, L) {
						return (await this.z.getEnvironment())?.os !==
							C.OperatingSystem.Windows
							? k
							: this.y.getWslPath(k, L) || k;
					}
					async setTerminalLayoutInfo(k) {
						if (!this.y)
							throw new Error(
								"Cannot call setActiveInstanceId when there is no remote",
							);
						return this.y.setTerminalLayoutInfo(k);
					}
					async reduceConnectionGraceTime() {
						if (!this.y)
							throw new Error(
								"Cannot reduce grace time when there is no remote",
							);
						return this.y.reduceConnectionGraceTime();
					}
					async getTerminalLayoutInfo() {
						if (!this.y)
							throw new Error(
								"Cannot call getActiveInstanceId when there is no remote",
							);
						const k = this.q(),
							L = this.G.get(
								l.TerminalStorageKeys.TerminalBufferState,
								c.StorageScope.WORKSPACE,
							),
							D = this.n(L);
						if (D && D.length > 0)
							try {
								(0, E.mark)("code/terminal/willReviveTerminalProcessesRemote"),
									await this.y.reviveTerminalProcesses(
										k,
										D,
										Intl.DateTimeFormat().resolvedOptions().locale,
									),
									(0, E.mark)("code/terminal/didReviveTerminalProcessesRemote"),
									this.G.remove(
										l.TerminalStorageKeys.TerminalBufferState,
										c.StorageScope.WORKSPACE,
									);
								const M = this.G.get(
									l.TerminalStorageKeys.TerminalLayoutInfo,
									c.StorageScope.WORKSPACE,
								);
								M &&
									((0, E.mark)("code/terminal/willSetTerminalLayoutInfoRemote"),
									await this.y.setTerminalLayoutInfo(JSON.parse(M)),
									(0, E.mark)("code/terminal/didSetTerminalLayoutInfoRemote"),
									this.G.remove(
										l.TerminalStorageKeys.TerminalLayoutInfo,
										c.StorageScope.WORKSPACE,
									));
							} catch (M) {
								this.j.warn(
									"RemoteTerminalBackend#getTerminalLayoutInfo Error",
									M && typeof M == "object" && "message" in M ? M.message : M,
								);
							}
						return this.y.getTerminalLayoutInfo();
					}
					async getPerformanceMarks() {
						return this.y.getPerformanceMarks();
					}
				};
				T = Ne(
					[
						j(2, v.$$m),
						j(3, u.$Li),
						j(4, n.$YJ),
						j(5, m.$ek),
						j(6, c.$lq),
						j(7, h.$3l),
						j(8, g.$Vi),
						j(9, y.$zeb),
						j(10, $.$Feb),
						j(11, r.$gj),
						j(12, S.$d6b),
					],
					T,
				);
			},
		),
		