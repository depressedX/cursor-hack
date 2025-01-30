import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/platform.js';
import '../../../nls.js';
import '../../../platform/externalTerminal/node/externalTerminalService.js';
import '../../../platform/sign/node/signService.js';
import '../common/extHostDebugService.js';
import '../common/extHostEditorTabs.js';
import '../common/extHostExtensionService.js';
import '../common/extHostRpcService.js';
import '../common/extHostTerminalService.js';
import '../common/extHostTypes.js';
import '../common/extHostVariableResolverService.js';
import '../common/extHostWorkspace.js';
import '../../contrib/debug/node/debugAdapter.js';
import '../../contrib/debug/node/terminals.js';
import '../common/extHostConfiguration.js';
import '../common/extHostCommands.js';
import '../common/extHostTesting.js';
define(
			Pe[607],
			Ne([
				1, 0, 9, 13, 10, 479, 280, 149, 117, 75, 21, 62, 11, 94, 63, 524, 525,
				56, 44, 147,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $, T, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$xjd = void 0),
					(r = tt(r)),
					(S = tt(S));
				let u = class extends I.$eid {
					constructor(m, E, R, C, O, A, J, L, b) {
						super(m, E, R, C, A, J, L, b), (this.Ab = O), (this.yb = new o());
					}
					hb(m, E) {
						switch (m.type) {
							case "server":
								return new c.$sjd(m);
							case "pipeServer":
								return new c.$tjd(m);
							case "executable":
								return new c.$ujd(m, E.type);
						}
						return super.hb(m, E);
					}
					qb(m, E) {
						const R = c.$ujd.platformAdapterExecutable(
							E.getAllExtensionDescriptions(),
							m.type,
						);
						if (R) return new d.$ucb(R.command, R.args, R.options);
					}
					ib() {
						return new P.$Q8c();
					}
					async $runInTerminal(m, E) {
						if (m.kind === "integrated") {
							this.zb ||
								(this.zb = this.D(
									this.Ab.onDidCloseTerminal((Q) => {
										this.yb.onTerminalClosed(Q);
									}),
								));
							const R = await this.$.getConfigProvider(),
								C = this.Ab.getDefaultShell(!0),
								O = this.Ab.getDefaultShellArgs(!0),
								A = m.title || S.localize(2738, null),
								J = JSON.stringify({ shell: C, shellArgs: O });
							let L = await this.yb.checkout(J, A),
								b,
								F = !1;
							if (L) b = m.cwd;
							else {
								const Q = {
									shellPath: C,
									shellArgs: O,
									cwd: m.cwd,
									name: A,
									iconPath: new d.$mcb("debug"),
								};
								(F = !0),
									(L = this.Ab.createTerminalFromOptions(Q, {
										isFeatureTerminal: !0,
										forceShellIntegration: !0,
										useShellEnvironment: !0,
									})),
									this.yb.insert(L, J);
							}
							L.show(!0);
							const D = await L.processId;
							F
								? await new Promise((Q) => setTimeout(Q, 1e3))
								: (L.state.isInteractedWith &&
										(L.sendText("�"), await (0, e.$Nh)(200)),
									R.getConfiguration("debug.terminal").get(
										"clearBeforeReusing",
									) &&
										(C.indexOf("powershell") >= 0 ||
										C.indexOf("pwsh") >= 0 ||
										C.indexOf("cmd.exe") >= 0
											? L.sendText("cls")
											: C.indexOf("bash") >= 0
												? L.sendText("clear")
												: r.$l
													? L.sendText("cls")
													: L.sendText("clear")));
							const M = (0, h.$wjd)(
								C,
								m.args,
								!!m.argsCanBeInterpretedByShell,
								b,
								m.env,
							);
							L.sendText(M);
							const z = this.onDidTerminateDebugSession((Q) => {
								Q.id === E && (this.yb.free(L), z.dispose());
							});
							return D;
						} else if (m.kind === "external")
							return f(m, await this.$.getConfigProvider());
						return super.$runInTerminal(m, E);
					}
				};
				(t.$xjd = u),
					(t.$xjd = u =
						wt(
							[
								rt(0, p.$08),
								rt(1, g.$m9),
								rt(2, n.$6hd),
								rt(3, $.$phd),
								rt(4, y.$Qhd),
								rt(5, l.$Ehd),
								rt(6, k.$9hd),
								rt(7, T.$8db),
								rt(8, a.$$hd),
							],
							u,
						));
				let s;
				function f(w, m) {
					if (!s)
						if (r.$l) s = new N.WindowsExternalTerminalService();
						else if (r.$m) s = new N.MacExternalTerminalService();
						else if (r.$n) s = new N.LinuxExternalTerminalService();
						else
							throw new Error(
								"external terminals not supported on this platform",
							);
					const E = m.getConfiguration("terminal");
					return s.runInTerminal(
						w.title,
						w.cwd,
						w.args,
						w.env || {},
						E.external || {},
					);
				}
				class o {
					constructor() {
						this.b = new Map();
					}
					static {
						this.a = 1e3;
					}
					async checkout(m, E, R = !1) {
						const O = [...this.b.entries()].map(([A, J]) =>
							(0, e.$zh)(async (L) => {
								if (
									A.name !== E ||
									(J.lastUsedAt !== -1 &&
										(await (0, h.$vjd)(await A.processId)))
								)
									return null;
								const b = Date.now();
								return J.lastUsedAt + o.a > b || L.isCancellationRequested
									? null
									: J.config !== m
										? (R && A.dispose(), null)
										: ((J.lastUsedAt = b), A);
							}),
						);
						return await (0, e.$Rh)(O, (A) => !!A);
					}
					insert(m, E) {
						this.b.set(m, { lastUsedAt: Date.now(), config: E });
					}
					free(m) {
						const E = this.b.get(m);
						E && (E.lastUsedAt = -1);
					}
					onTerminalClosed(m) {
						this.b.delete(m);
					}
				}
			},
		),
		