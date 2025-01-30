import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/uri.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import '../../../platform/terminal/common/terminal.js';
import '../../../platform/terminal/common/terminalDataBuffering.js';
import '../../contrib/terminal/browser/terminal.js';
import '../../contrib/terminal/browser/terminalProcessExtHostProxy.js';
import '../../contrib/terminal/common/environmentVariable.js';
import '../../../platform/terminal/common/environmentVariableShared.js';
import '../../contrib/terminal/common/terminal.js';
import '../../services/remote/common/remoteAgentService.js';
import '../../../base/common/platform.js';
import '../../../base/common/async.js';
import '../../contrib/terminalContrib/links/browser/links.js';
import '../../contrib/terminalContrib/quickFix/browser/quickFix.js';
import '../../../platform/terminal/common/capabilities/capabilities.js';
define(
			de[3543],
			he([
				1, 0, 3, 88, 101, 9, 5, 34, 117, 2826, 107, 1758, 807, 774, 145, 143,
				12, 15, 513, 998, 189,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*extHost.protocol*/,
				w /*extHostCustomers*/,
				E /*uri*/,
				C /*instantiation*/,
				d /*log*/,
				m /*terminal*/,
				r /*terminalDataBuffering*/,
				u /*terminal*/,
				a /*terminalProcessExtHostProxy*/,
				h /*environmentVariable*/,
				c /*environmentVariableShared*/,
				n /*terminal*/,
				g /*remoteAgentService*/,
				p /*platform*/,
				o /*async*/,
				f /*links*/,
				b /*quickFix*/,
				s /*capabilities*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Foc = void 0),
					(e.$Goc = v);
				let l = class {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						(this.l = T),
							(this.m = P),
							(this.n = k),
							(this.o = L),
							(this.p = D),
							(this.q = M),
							(this.s = N),
							(this.t = A),
							(this.u = O),
							(this.v = B),
							(this.w = U),
							(this.a = new t.$Zc()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new Map()),
							(this.g = new Map()),
							(this.h = new t.$2c()),
							(this.i = new t.$2c()),
							(this.j = this.a.add(new t.$2c())),
							(this.k = p.OS),
							(this.b = T.getProxy(i.$mbb.ExtHostTerminalService)),
							this.a.add(
								P.onDidCreateInstance((F) => {
									this.F(F), this.H(F);
								}),
							),
							this.a.add(P.onDidDisposeInstance((F) => this.E(F))),
							this.a.add(P.onAnyInstanceProcessIdReady((F) => this.G(F))),
							this.a.add(P.onDidChangeInstanceDimensions((F) => this.H(F))),
							this.a.add(
								P.onAnyInstanceMaximumDimensionsChange((F) => this.I(F)),
							),
							this.a.add(
								P.onDidRequestStartExtensionTerminal((F) => this.J(F)),
							),
							this.a.add(
								P.onDidChangeActiveInstance((F) =>
									this.A(F ? F.instanceId : null),
								),
							),
							this.a.add(
								P.onAnyInstanceTitleChange(
									(F) => F && this.D(F.instanceId, F.title),
								),
							),
							this.a.add(
								P.onAnyInstanceDataInput((F) =>
									this.b.$acceptTerminalInteraction(F.instanceId),
								),
							),
							this.a.add(
								P.onAnyInstanceSelectionChange((F) =>
									this.b.$acceptTerminalSelection(F.instanceId, F.selection),
								),
							);
						for (const F of this.m.instances)
							this.F(F), F.processReady.then(() => this.G(F));
						const z = this.m.activeInstance;
						if (
							(z && this.b.$acceptActiveTerminalChanged(z.instanceId),
							this.q.collections.size > 0)
						) {
							const x = [...this.q.collections.entries()].map((H) => [
								H[0],
								(0, c.$_J)(H[1].map),
							]);
							this.b.$initEnvironmentVariableCollections(x);
						}
						R.getEnvironment().then(async (F) => {
							(this.k = F?.os || p.OS), this.x();
						}),
							this.a.add(this.w.onDidChangeAvailableProfiles(() => this.x()));
					}
					dispose() {
						this.a.dispose();
						for (const T of this.f.values()) T.dispose();
						for (const T of this.g.values()) T.dispose();
					}
					async x() {
						const T = this.l.remoteAuthority ?? void 0,
							P = this.t.getDefaultProfile({ remoteAuthority: T, os: this.k }),
							k = this.t.getDefaultProfile({
								remoteAuthority: T,
								os: this.k,
								allowAutomationShell: !0,
							});
						this.b.$acceptDefaultProfile(...(await Promise.all([P, k])));
					}
					async y(T) {
						return typeof T == "string"
							? this.c.get(T)
							: this.m.getInstanceFromId(T);
					}
					async $createTerminal(T, P) {
						const k = {
								name: P.name,
								executable: P.shellPath,
								args: P.shellArgs,
								cwd: typeof P.cwd == "string" ? P.cwd : E.URI.revive(P.cwd),
								icon: P.icon,
								color: P.color,
								initialText: P.initialText,
								waitOnExit: P.waitOnExit,
								ignoreConfigurationCwd: !0,
								env: P.env,
								strictEnv: P.strictEnv,
								hideFromUser: P.hideFromUser,
								customPtyImplementation: P.isExtensionCustomPtyTerminal
									? (M, N, A) => new a.$voc(M, N, A, this.m)
									: void 0,
								extHostTerminalId: T,
								forceShellIntegration: P.forceShellIntegration,
								isFeatureTerminal: P.isFeatureTerminal,
								isExtensionOwnedTerminal: P.isExtensionOwnedTerminal,
								useShellEnvironment: P.useShellEnvironment,
								isTransient: P.isTransient,
							},
							L = o.Promises.withAsyncBody(async (M) => {
								const N = await this.m.createTerminal({
									config: k,
									location: await this.z(P.location),
								});
								M(N);
							});
						this.c.set(T, L);
						const D = await L;
						this.a.add(
							D.onDisposed(() => {
								this.c.delete(T);
							}),
						);
					}
					async z(T) {
						if (typeof T == "object" && "parentTerminal" in T) {
							const P = await this.c.get(T.parentTerminal.toString());
							return P ? { parentTerminal: P } : void 0;
						}
						return T;
					}
					async $show(T, P) {
						const k = await this.y(T);
						k &&
							(this.m.setActiveInstance(k),
							k.target === m.TerminalLocation.Editor
								? await this.v.revealActiveEditor(P)
								: await this.u.showPanel(!P));
					}
					async $hide(T) {
						const P = await this.y(T),
							k = this.m.activeInstance;
						k &&
							k.instanceId === P?.instanceId &&
							k.target !== m.TerminalLocation.Editor &&
							this.u.hidePanel();
					}
					async $dispose(T) {
						(await this.y(T))?.dispose(m.TerminalExitReason.Extension);
					}
					async $sendText(T, P, k) {
						await (await this.y(T))?.sendText(P, k);
					}
					$sendProcessExit(T, P) {
						this.d.get(T)?.emitExit(P);
					}
					$startSendingDataEvents() {
						if (!this.h.value) {
							this.h.value = this.p.createInstance(y, (T, P) => {
								this.B(T, P);
							});
							for (const T of this.m.instances)
								for (const P of T.initialDataEvents || [])
									this.B(T.instanceId, P);
						}
					}
					$stopSendingDataEvents() {
						this.h.clear();
					}
					$startSendingCommandEvents() {
						if (this.i.value) return;
						const T = this.m.createOnInstanceCapabilityEvent(
								s.TerminalCapability.CommandDetection,
								(k) => k.onCommandFinished,
							),
							P = T.event((k) => {
								this.C(k.instance.instanceId, {
									commandLine: k.data.command,
									cwd: k.data.cwd,
									exitCode: k.data.exitCode,
									output: k.data.getOutput(),
								});
							});
						this.i.value = (0, t.$Xc)(T, P);
					}
					$stopSendingCommandEvents() {
						this.i.clear();
					}
					$startLinkProvider() {
						this.j.value = this.n.registerLinkProvider(new $(this.b));
					}
					$stopLinkProvider() {
						this.j.clear();
					}
					$registerProcessSupport(T) {
						this.m.registerProcessSupport(T);
					}
					$registerProfileProvider(T, P) {
						this.f.set(
							T,
							this.w.registerTerminalProfileProvider(P, T, {
								createContributedTerminalProfile: async (k) =>
									this.b.$createContributedProfileTerminal(T, k),
							}),
						);
					}
					$unregisterProfileProvider(T) {
						this.f.get(T)?.dispose(), this.f.delete(T);
					}
					async $registerQuickFixProvider(T, P) {
						this.g.set(
							T,
							this.o.registerQuickFixProvider(T, {
								provideTerminalQuickFixes: async (k, L, D, M) => {
									if (M.isCancellationRequested) return;
									D.outputMatcher?.length &&
										D.outputMatcher.length > 40 &&
										((D.outputMatcher.length = 40),
										this.s.warn("Cannot exceed output matcher length of 40"));
									const N = k.command.match(D.commandLineMatcher);
									if (!N || !L) return;
									const A = D.outputMatcher;
									let R;
									if ((A && (R = v(L, A)), !R)) return;
									const O = {
										commandLineMatch: N,
										outputMatch: R,
										commandLine: k.command,
									};
									if (O) {
										const B = await this.b.$provideTerminalQuickFixes(T, O, M);
										if (B && Array.isArray(B)) return B.map((U) => S(T, P, U));
										if (B) return S(T, P, B);
									}
								},
							}),
						);
					}
					$unregisterQuickFixProvider(T) {
						this.g.get(T)?.dispose(), this.g.delete(T);
					}
					A(T) {
						this.b.$acceptActiveTerminalChanged(T);
					}
					B(T, P) {
						this.b.$acceptTerminalProcessData(T, P);
					}
					C(T, P) {
						this.b.$acceptDidExecuteCommand(T, P);
					}
					D(T, P) {
						this.b.$acceptTerminalTitleChange(T, P);
					}
					E(T) {
						this.b.$acceptTerminalClosed(
							T.instanceId,
							T.exitCode,
							T.exitReason ?? m.TerminalExitReason.Unknown,
						);
					}
					F(T) {
						const P = T.shellLaunchConfig.extHostTerminalId,
							k = {
								name: T.shellLaunchConfig.name,
								executable: T.shellLaunchConfig.executable,
								args: T.shellLaunchConfig.args,
								cwd: T.shellLaunchConfig.cwd,
								env: T.shellLaunchConfig.env,
								hideFromUser: T.shellLaunchConfig.hideFromUser,
							};
						this.b.$acceptTerminalOpened(T.instanceId, P, T.title, k);
					}
					G(T) {
						T.processId !== void 0 &&
							this.b.$acceptTerminalProcessId(T.instanceId, T.processId);
					}
					H(T) {
						this.b.$acceptTerminalDimensions(T.instanceId, T.cols, T.rows);
					}
					I(T) {
						this.b.$acceptTerminalMaximumDimensions(
							T.instanceId,
							T.maxCols,
							T.maxRows,
						);
					}
					J(T) {
						const P = T.proxy;
						this.d.set(P.instanceId, P);
						const k =
							T.cols && T.rows ? { columns: T.cols, rows: T.rows } : void 0;
						this.b.$startExtensionTerminal(P.instanceId, k).then(T.callback),
							P.onInput((L) => this.b.$acceptProcessInput(P.instanceId, L)),
							P.onShutdown((L) =>
								this.b.$acceptProcessShutdown(P.instanceId, L),
							),
							P.onRequestCwd(() =>
								this.b.$acceptProcessRequestCwd(P.instanceId),
							),
							P.onRequestInitialCwd(() =>
								this.b.$acceptProcessRequestInitialCwd(P.instanceId),
							);
					}
					$sendProcessData(T, P) {
						this.d.get(T)?.emitData(P);
					}
					$sendProcessReady(T, P, k, L) {
						this.d.get(T)?.emitReady(P, k, L);
					}
					$sendProcessProperty(T, P) {
						P.type === m.ProcessPropertyType.Title &&
							this.m.getInstanceFromId(T)?.rename(P.value),
							this.d.get(T)?.emitProcessProperty(P);
					}
					$setEnvironmentVariableCollection(T, P, k, L) {
						if (k) {
							const D = {
								persistent: P,
								map: (0, c.$bK)(k),
								descriptionMap: (0, c.$cK)(L),
							};
							this.q.set(T, D);
						} else this.q.delete(T);
					}
				};
				(e.$Foc = l),
					(e.$Foc = l =
						Ne(
							[
								(0, w.$tmc)(i.$lbb.MainThreadTerminalService),
								j(1, u.$iIb),
								j(2, f.$Doc),
								j(3, b.$Eoc),
								j(4, C.$Li),
								j(5, h.$ceb),
								j(6, d.$ik),
								j(7, n.$reb),
								j(8, g.$$m),
								j(9, u.$lIb),
								j(10, u.$kIb),
								j(11, n.$teb),
							],
							l,
						));
				let y = class extends t.$1c {
					constructor(T, P) {
						super(),
							(this.b = T),
							(this.c = P),
							this.D((this.a = new r.$uoc(this.b)));
						for (const k of this.c.instances) this.f(k);
						this.D(this.c.onDidCreateInstance((k) => this.f(k))),
							this.D(
								this.c.onDidDisposeInstance((k) =>
									this.a.stopBuffering(k.instanceId),
								),
							);
					}
					f(T) {
						this.D(this.a.startBuffering(T.instanceId, T.onData));
					}
				};
				y = Ne([j(1, u.$iIb)], y);
				class $ {
					constructor(T) {
						this.a = T;
					}
					async provideLinks(T, P) {
						const k = this.a;
						return (await k.$provideLinks(T.instanceId, P)).map((D) => ({
							id: D.id,
							startIndex: D.startIndex,
							length: D.length,
							label: D.label,
							activate: () => k.$activateLink(T.instanceId, D.id),
						}));
					}
				}
				function v(I, T) {
					const P = I.join(`
`).match(T.lineMatcher);
					return P ? { regexMatch: P, outputLines: I } : void 0;
				}
				function S(I, T, P) {
					let k = b.TerminalQuickFixType.TerminalCommand;
					return (
						"uri" in P
							? ((P.uri = E.URI.revive(P.uri)),
								(k = b.TerminalQuickFixType.Opener))
							: "id" in P && (k = b.TerminalQuickFixType.VscodeCommand),
						{ id: I, type: k, source: T, ...P }
					);
				}
			},
		),
		