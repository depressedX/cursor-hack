import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/terminal/common/terminalStrings.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/remote/common/remoteHosts.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../platform/terminal/common/capabilities/naiveCwdDetectionCapability.js';
import '../../../../platform/terminal/common/capabilities/terminalCapabilityStore.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/terminal/common/terminalRecorder.js';
import '../../../../platform/workspace/common/workspace.js';
import './environmentVariableInfo.js';
import './terminal.js';
import '../common/environmentVariable.js';
import '../../../../platform/terminal/common/environmentVariableCollection.js';
import '../../../../platform/terminal/common/environmentVariableShared.js';
import '../common/terminal.js';
import '../common/terminalEnvironment.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/history/common/history.js';
import '../../../services/path/common/pathService.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../tasks/common/tasks.js';
import '../../../../base/common/severity.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/uuid.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../platform/terminal/common/terminalEnvironment.js';
import '../../terminalContrib/suggest/common/terminalSuggestConfiguration.js';
define(
		de[3580],
		he([
			1, 0, 6, 3, 23, 12, 4, 776, 10, 5, 62, 438, 32, 189, 2824, 675, 117, 2827,
			25, 3312, 107, 807, 1655, 774, 145, 1262, 358, 78, 245, 165, 143, 424,
			111, 40, 47, 7, 75, 775, 809,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*event*/,
			i /*lifecycle*/,
			w /*network*/,
			E /*platform*/,
			C /*nls*/,
			d /*terminalStrings*/,
			m /*configuration*/,
			r /*instantiation*/,
			u /*productService*/,
			a /*remoteHosts*/,
			h /*telemetry*/,
			c /*capabilities*/,
			n /*naiveCwdDetectionCapability*/,
			g /*terminalCapabilityStore*/,
			p /*terminal*/,
			o /*terminalRecorder*/,
			f /*workspace*/,
			b /*environmentVariableInfo*/,
			s /*terminal*/,
			l /*environmentVariable*/,
			y /*environmentVariableCollection*/,
			$ /*environmentVariableShared*/,
			v /*terminal*/,
			S /*terminalEnvironment*/,
			I /*configurationResolver*/,
			T /*environmentService*/,
			P /*history*/,
			k /*pathService*/,
			L /*remoteAgentService*/,
			D /*tasks*/,
			M /*severity*/,
			N /*notification*/,
			A /*uuid*/,
			R /*dom*/,
			O /*window*/,
			B /*terminalEnvironment*/,
			U /*terminalSuggestConfiguration*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hIb = void 0),
				(S = mt(S)),
				(M = xi(M));
			var z;
			(function (G) {
				(G[(G.ErrorLaunchThresholdDuration = 500)] =
					"ErrorLaunchThresholdDuration"),
					(G[(G.LatencyMeasuringInterval = 1e3)] = "LatencyMeasuringInterval");
			})(z || (z = {}));
			var F;
			(function (G) {
				(G[(G.Process = 0)] = "Process"),
					(G[(G.PsuedoTerminal = 1)] = "PsuedoTerminal");
			})(F || (F = {}));
			let x = class extends i.$1c {
				get persistentProcessId() {
					return this.b?.id;
				}
				get shouldPersist() {
					return (
						!!this.reconnectionProperties ||
						(this.b ? this.b.shouldPersist : !1)
					);
				}
				get hasWrittenData() {
					return this.n;
				}
				get hasChildProcesses() {
					return this.q;
				}
				get reconnectionProperties() {
					return (
						this.y?.attachPersistentProcess?.reconnectionProperties ||
						this.y?.reconnectionProperties ||
						void 0
					);
				}
				get extEnvironmentVariableCollection() {
					return this.j;
				}
				constructor(
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
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
				) {
					super(),
						(this.R = K),
						(this.S = Y),
						(this.U = ie),
						(this.W = ne),
						(this.X = ee),
						(this.Y = _),
						(this.Z = te),
						(this.$ = Q),
						(this.ab = Z),
						(this.bb = se),
						(this.cb = re),
						(this.db = le),
						(this.eb = oe),
						(this.fb = ae),
						(this.gb = pe),
						(this.hb = $e),
						(this.ib = ye),
						(this.processState = v.ProcessState.Uninitialized),
						(this.capabilities = this.D(new g.$KHb())),
						(this.a = !1),
						(this.b = null),
						(this.f = F.Process),
						(this.g = []),
						(this.n = !1),
						(this.q = !1),
						(this.s = !1),
						(this.w = !1),
						(this.z = { cols: 0, rows: 0 }),
						(this.C = this.D(new t.$re())),
						(this.onPtyDisconnect = this.C.event),
						(this.F = this.D(new t.$re())),
						(this.onPtyReconnect = this.F.event),
						(this.G = this.D(new t.$re())),
						(this.onProcessReady = this.G.event),
						(this.H = this.D(new t.$re())),
						(this.onProcessStateChange = this.H.event),
						(this.I = this.D(new t.$re())),
						(this.onBeforeProcessData = this.I.event),
						(this.J = this.D(new t.$re())),
						(this.onProcessData = this.J.event),
						(this.L = this.D(new t.$re())),
						(this.onProcessReplayComplete = this.L.event),
						(this.M = this.D(new t.$re())),
						(this.onDidChangeProperty = this.M.event),
						(this.N = this.D(new t.$re())),
						(this.onEnvironmentVariableInfoChanged = this.N.event),
						(this.O = this.D(new t.$re())),
						(this.onProcessExit = this.O.event),
						(this.P = this.D(new t.$re())),
						(this.onRestoreCommands = this.P.event),
						(this.Q = S.$Oeb(J, this.X, this.S)),
						(this.ptyProcessReady = this.jb()),
						(this.m = new H((ue) => this.b?.acknowledgeDataEvent(ue))),
						(this.t = this.D(this.U.createInstance(V))),
						this.D(
							this.t.onProcessData((ue) => {
								const me = { data: typeof ue == "string" ? ue : ue.data };
								this.I.fire(me),
									me.data &&
										me.data.length > 0 &&
										(typeof ue != "string" && (ue.data = me.data),
										this.J.fire(
											typeof ue != "string"
												? ue
												: { data: me.data, trackCommit: !1 },
										));
							}),
						),
						J && typeof J == "object"
							? (this.remoteAuthority = (0, a.$wn)(J))
							: (this.remoteAuthority = this.Z.remoteAuthority),
						W &&
							((this.j = new y.$fK(W)),
							this.D(this.cb.onDidChangeCollections((ue) => this.qb(ue))),
							(this.environmentVariableInfo = this.U.createInstance(
								b.$eIb,
								this.j,
							)),
							this.N.fire(this.environmentVariableInfo)),
						(this.shellIntegrationNonce = X ?? (0, A.$9g)());
				}
				async freePortKillProcess(K) {
					try {
						this.b?.freePortKillProcess &&
							(await this.b?.freePortKillProcess(K));
					} catch (J) {
						this.ib.notify({
							message: (0, C.localize)(10126, null, K, J),
							severity: M.default.Warning,
						});
					}
				}
				dispose(K = !1) {
					(this.a = !0),
						this.b &&
							(this.pb(v.ProcessState.KilledByUser),
							this.b.shutdown(K),
							(this.b = null)),
						super.dispose();
				}
				jb() {
					return new Promise((K) => {
						const J = t.Event.once(this.onProcessReady)(() => {
							this.W.debug(
								`Terminal process ready (shellProcessId: ${this.shellProcessId})`,
							),
								this.B.delete(J),
								K(void 0);
						});
						this.B.add(J);
					});
				}
				async detachFromProcess(K) {
					await this.b?.detach?.(K), (this.b = null);
				}
				async createProcess(K, J, W, X = !0) {
					(this.y = K), (this.z.cols = J), (this.z.rows = W);
					let Y;
					if (K.customPtyImplementation)
						(this.f = F.PsuedoTerminal),
							(Y = K.customPtyImplementation(this.R, J, W));
					else {
						const ne = await this.gb.getBackend(this.remoteAuthority);
						if (!ne)
							throw new Error(
								`No terminal backend registered for remote authority '${this.remoteAuthority}'`,
							);
						this.backend = ne;
						const ee = S.$Leb(
							this.Q,
							await this.eb.getEnvironment(this.remoteAuthority),
							this.Y,
						);
						if (
							((this.userHome = this.bb.resolvedUserHome?.fsPath),
							(this.os = E.OS),
							this.remoteAuthority)
						) {
							const _ = await this.bb.userHome();
							this.userHome = _.path;
							const te = await this.ab.getEnvironment();
							if (!te)
								throw new Error(
									`Failed to get remote environment for remote authority "${this.remoteAuthority}"`,
								);
							(this.userHome = te.userHome.path), (this.os = te.os);
							const Q = await this.kb(ne, ee, K),
								Z =
									((this.fb.getValue(D.TaskSettingId.Reconnection) &&
										K.reconnectionProperties) ||
										!K.isFeatureTerminal) &&
									this.db.config.enablePersistentSessions &&
									!K.isTransient;
							if (K.attachPersistentProcess) {
								const se = await ne.attachToProcess(
									K.attachPersistentProcess.id,
								);
								se
									? (Y = se)
									: (this.W.warn(
											"Attach to process failed for terminal",
											K.attachPersistentProcess,
										),
										(K.attachPersistentProcess = void 0));
							}
							if (!Y) {
								await this.eb.resolveShellLaunchConfig(K, {
									remoteAuthority: this.remoteAuthority,
									os: this.os,
								});
								const se = {
									shellIntegration: {
										enabled: this.fb.getValue(
											p.TerminalSettingId.ShellIntegrationEnabled,
										),
										suggestEnabled: this.fb.getValue(
											U.TerminalSuggestSettingId.Enabled,
										),
										nonce: this.shellIntegrationNonce,
									},
									windowsEnableConpty: this.db.config.windowsEnableConpty,
									windowsUseConptyDll:
										this.db.config.experimental?.windowsUseConptyDll ?? !1,
									environmentVariableCollections: this.j?.collections
										? (0, $.$dK)(this.j.collections)
										: void 0,
									workspaceFolder: this.Q,
								};
								try {
									Y = await ne.createProcess(
										K,
										"",
										J,
										W,
										this.db.config.unicodeVersion,
										Q,
										se,
										Z,
									);
								} catch (re) {
									if (re?.message === "Could not fetch remote environment") {
										this.W.trace(
											"Could not fetch remote environment, silently failing",
										);
										return;
									}
									throw re;
								}
							}
							this.a || this.mb(ne);
						} else {
							if (K.attachPersistentProcess) {
								const _ = K.attachPersistentProcess.findRevivedId
									? await ne.attachToRevivedProcess(
											K.attachPersistentProcess.id,
										)
									: await ne.attachToProcess(K.attachPersistentProcess.id);
								_
									? (Y = _)
									: (this.W.warn(
											"Attach to process failed for terminal",
											K.attachPersistentProcess,
										),
										(K.attachPersistentProcess = void 0));
							}
							Y || (Y = await this.lb(ne, K, J, W, this.userHome, ee)),
								this.a || this.mb(ne);
						}
					}
					if (this.a) {
						Y.shutdown(!1);
						return;
					}
					(this.b = Y),
						this.pb(v.ProcessState.Launching),
						(this.os === E.OperatingSystem.Linux ||
							this.os === E.OperatingSystem.Macintosh) &&
							this.capabilities.add(
								c.TerminalCapability.NaiveCwdDetection,
								new n.$bIb(this.b),
							),
						this.t.newProcess(this.b, X),
						this.u && (0, i.$Vc)(this.u),
						(this.u = [
							Y.onProcessReady((ne) => {
								(this.shellProcessId = ne.pid),
									(this.h = ne.cwd),
									this.M.fire({
										type: p.ProcessPropertyType.InitialCwd,
										value: this.h,
									}),
									this.G.fire(ne),
									this.g.length > 0 &&
										this.b &&
										(Y.input(this.g.join("")), (this.g.length = 0));
							}),
							Y.onProcessExit((ne) => this.ob(ne)),
							Y.onDidChangeProperty(({ type: ne, value: ee }) => {
								switch (ne) {
									case p.ProcessPropertyType.HasChildProcesses:
										this.q = ee;
										break;
									case p.ProcessPropertyType.FailedShellIntegrationActivation:
										this.hb?.publicLog2(
											"terminal/shellIntegrationActivationFailureCustomArgs",
										);
										break;
								}
								this.M.fire({ type: ne, value: ee });
							}),
						]),
						Y.onProcessReplayComplete &&
							this.u.push(Y.onProcessReplayComplete(() => this.L.fire())),
						Y.onRestoreCommands &&
							this.u.push(Y.onRestoreCommands((ne) => this.P.fire(ne))),
						setTimeout(() => {
							this.processState === v.ProcessState.Launching &&
								this.pb(v.ProcessState.Running);
						}, z.ErrorLaunchThresholdDuration);
					const ie = await Y.start();
					if (ie) return ie;
					(0, R.$egb)((0, R.$Ogb)(), () => {
						this.backend?.getLatency().then((ne) => {
							this.W.info(`Latency measurements for ${this.remoteAuthority ?? "local"} backend
${ne
	.map((ee) => `${ee.label}: ${ee.latency.toFixed(2)}ms`)
	.join(`
`)}`);
						});
					});
				}
				async relaunch(K, J, W, X) {
					return (
						(this.ptyProcessReady = this.jb()),
						this.W.trace(`Relaunching terminal instance ${this.R}`),
						this.w && ((this.w = !1), this.F.fire()),
						(this.n = !1),
						this.createProcess(K, J, W, X)
					);
				}
				async kb(K, J, W) {
					const X = S.$Oeb(W.cwd, this.X, this.S),
						Y = E.$l ? "windows" : E.$m ? "osx" : "linux",
						ie = this.fb.getValue(`terminal.integrated.env.${Y}`);
					let ne;
					W.useShellEnvironment
						? (ne = await K.getShellEnvironment())
						: (ne = await this.eb.getEnvironment(this.remoteAuthority));
					const ee = await S.$Meb(
						W,
						ie,
						J,
						this.$.version,
						this.db.config.detectLocale,
						ne,
					);
					return (
						!this.a &&
							(0, B.$Eeb)(W) &&
							((this.j = this.cb.mergedCollection),
							this.D(this.cb.onDidChangeCollections((_) => this.qb(_))),
							await this.j.applyToProcessEnvironment(
								ee,
								{ workspaceFolder: X },
								J,
							),
							this.j.getVariableMap({ workspaceFolder: X }).size &&
								((this.environmentVariableInfo = this.U.createInstance(
									b.$eIb,
									this.j,
								)),
								this.N.fire(this.environmentVariableInfo))),
						ee
					);
				}
				async lb(K, J, W, X, Y, ie) {
					await this.eb.resolveShellLaunchConfig(J, {
						remoteAuthority: void 0,
						os: E.OS,
					});
					const ne = this.S.getLastActiveWorkspaceRoot(w.Schemas.file),
						ee = await S.$Keb(J, Y, ie, ne, this.db.config.cwd, this.W),
						_ = await this.kb(K, ie, J),
						te = {
							shellIntegration: {
								enabled: this.fb.getValue(
									p.TerminalSettingId.ShellIntegrationEnabled,
								),
								suggestEnabled: this.fb.getValue(
									U.TerminalSuggestSettingId.Enabled,
								),
								nonce: this.shellIntegrationNonce,
							},
							windowsEnableConpty: this.db.config.windowsEnableConpty,
							windowsUseConptyDll:
								this.db.config.experimental?.windowsUseConptyDll ?? !1,
							environmentVariableCollections: this.j
								? (0, $.$dK)(this.j.collections)
								: void 0,
							workspaceFolder: this.Q,
						},
						Q =
							((this.fb.getValue(D.TaskSettingId.Reconnection) &&
								J.reconnectionProperties) ||
								!J.isFeatureTerminal) &&
							this.db.config.enablePersistentSessions &&
							!J.isTransient;
					return await K.createProcess(
						J,
						ee,
						W,
						X,
						this.db.config.unicodeVersion,
						_,
						te,
						Q,
					);
				}
				mb(K) {
					this.s ||
						((this.s = !0),
						this.D(
							K.onPtyHostUnresponsive(() => {
								(this.w = !0), this.C.fire();
							}),
						),
						(this.r = K.onPtyHostResponsive(() => {
							(this.w = !1), this.F.fire();
						})),
						this.D((0, i.$Yc)(() => this.r?.dispose())),
						this.D(
							K.onPtyHostRestart(async () => {
								if (
									(this.w || ((this.w = !0), this.C.fire()),
									this.r?.dispose(),
									(this.r = void 0),
									this.y)
								)
									if (this.y.isFeatureTerminal && !this.reconnectionProperties)
										this.ob(-1);
									else {
										const J = (0, C.localize)(10127, null);
										this.J.fire({
											data: (0, d.$aIb)(J, { loudFormatting: !0 }),
											trackCommit: !1,
										}),
											await this.relaunch(this.y, this.z.cols, this.z.rows, !1);
									}
							}),
						));
				}
				async getBackendOS() {
					let K = E.OS;
					if (this.remoteAuthority) {
						const J = await this.ab.getEnvironment();
						if (!J)
							throw new Error(
								`Failed to get remote environment for remote authority "${this.remoteAuthority}"`,
							);
						K = J.os;
					}
					return K;
				}
				setDimensions(K, J, W) {
					if (W) {
						this.nb(K, J);
						return;
					}
					return this.ptyProcessReady.then(() => this.nb(K, J));
				}
				async setUnicodeVersion(K) {
					return this.b?.setUnicodeVersion(K);
				}
				nb(K, J) {
					if (this.b) {
						try {
							this.b.resize(K, J);
						} catch (W) {
							if (W.code !== "EPIPE" && W.code !== "ERR_IPC_CHANNEL_CLOSED")
								throw W;
						}
						(this.z.cols = K), (this.z.rows = J);
					}
				}
				async write(K) {
					await this.ptyProcessReady,
						this.t.disableSeamlessRelaunch(),
						(this.n = !0),
						this.shellProcessId || this.f === F.PsuedoTerminal
							? this.b && this.b.input(K)
							: this.g.push(K);
				}
				async processBinary(K) {
					await this.ptyProcessReady,
						this.t.disableSeamlessRelaunch(),
						(this.n = !0),
						this.b?.processBinary(K);
				}
				get initialCwd() {
					return this.h ?? "";
				}
				async refreshProperty(K) {
					if (!this.b)
						throw new Error("Cannot refresh property when process is not set");
					return this.b.refreshProperty(K);
				}
				async updateProperty(K, J) {
					return this.b?.updateProperty(K, J);
				}
				acknowledgeDataEvent(K) {
					this.m.ack(K);
				}
				ob(K) {
					(this.b = null),
						this.processState === v.ProcessState.Launching &&
							this.pb(v.ProcessState.KilledDuringLaunch),
						this.processState === v.ProcessState.Running &&
							this.pb(v.ProcessState.KilledByProcess),
						this.O.fire(K);
				}
				pb(K) {
					(this.processState = K), this.H.fire();
				}
				qb(K) {
					const J = this.j.diff(K, { workspaceFolder: this.Q });
					if (J === void 0) {
						this.environmentVariableInfo instanceof b.$dIb &&
							((this.environmentVariableInfo = this.U.createInstance(
								b.$eIb,
								this.j,
							)),
							this.N.fire(this.environmentVariableInfo));
						return;
					}
					(this.environmentVariableInfo = this.U.createInstance(
						b.$dIb,
						J,
						this.R,
						K,
					)),
						this.N.fire(this.environmentVariableInfo);
				}
				async clearBuffer() {
					this.b?.clearBuffer?.();
				}
			};
			(e.$hIb = x),
				(e.$hIb = x =
					Ne(
						[
							j(4, P.$Feb),
							j(5, r.$Li),
							j(6, p.$YJ),
							j(7, f.$Vi),
							j(8, I.$zeb),
							j(9, T.$r8),
							j(10, u.$Bk),
							j(11, L.$$m),
							j(12, k.$I8),
							j(13, l.$ceb),
							j(14, s.$jIb),
							j(15, v.$reb),
							j(16, m.$gj),
							j(17, s.$mIb),
							j(18, h.$km),
							j(19, N.$4N),
						],
						x,
					));
			class H {
				constructor(K) {
					(this.b = K), (this.a = 0);
				}
				ack(K) {
					for (this.a += K; this.a > p.FlowControlConstants.CharCountAckSize; )
						(this.a -= p.FlowControlConstants.CharCountAckSize),
							this.b(p.FlowControlConstants.CharCountAckSize);
				}
			}
			var q;
			(function (G) {
				(G[(G.RecordTerminalDuration = 1e4)] = "RecordTerminalDuration"),
					(G[(G.SwapWaitMaximumDuration = 3e3)] = "SwapWaitMaximumDuration");
			})(q || (q = {}));
			let V = class extends i.$1c {
				get onProcessData() {
					return this.q.event;
				}
				constructor(K) {
					super(), (this.r = K), (this.m = !1), (this.q = this.D(new t.$re()));
				}
				newProcess(K, J) {
					if (
						(this.h?.dispose(),
						this.j?.shutdown(!1),
						(this.j = K),
						!this.a || !J || this.m)
					) {
						this.f?.dispose(),
							([this.a, this.f] = this.t(K)),
							this.m && J && this.q.fire("\x1Bc"),
							(this.h = K.onProcessData((X) => this.q.fire(X))),
							(this.m = !1);
						return;
					}
					this.b && this.triggerSwap(),
						(this.n = O.$Bfb.setTimeout(
							() => this.triggerSwap(),
							q.SwapWaitMaximumDuration,
						)),
						this.h?.dispose(),
						this.f?.dispose();
					const W = this.t(K);
					[this.b, this.g] = W;
				}
				disableSeamlessRelaunch() {
					(this.m = !0), this.s(), this.triggerSwap();
				}
				triggerSwap() {
					if (
						(this.n && (O.$Bfb.clearTimeout(this.n), (this.n = void 0)),
						!this.a)
					)
						return;
					if (!this.b) {
						(this.a = void 0), this.f?.dispose();
						return;
					}
					const K = this.u(this.a),
						J = this.u(this.b);
					K === J
						? this.r.trace("Seamless terminal relaunch - identical content")
						: (this.r.trace("Seamless terminal relaunch - resetting content"),
							this.q.fire({ data: `\x1Bc${J}`, trackCommit: !1 })),
						this.h?.dispose(),
						(this.h = this.j.onProcessData((W) => this.q.fire(W))),
						(this.a = this.b),
						this.f?.dispose(),
						(this.f = this.g),
						(this.b = void 0);
				}
				s() {
					this.n ||
						((this.a = void 0),
						this.f?.dispose(),
						(this.b = void 0),
						this.g?.dispose());
				}
				t(K) {
					const J = new o.$cIb(0, 0),
						W = K.onProcessData((X) =>
							J.handleData(typeof X == "string" ? X : X.data),
						);
					return [J, W];
				}
				u(K) {
					return K.generateReplayEventSync()
						.events.filter((J) => !!J.data)
						.map((J) => J.data)
						.join("");
				}
			};
			V = Ne([j(0, p.$YJ)], V);
		},
	)
