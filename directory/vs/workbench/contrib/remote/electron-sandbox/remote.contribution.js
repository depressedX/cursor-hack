define(
			de[3582],
			he([
				1, 0, 4, 30, 143, 3, 12, 27, 43, 55, 52, 73, 31, 23, 53, 320, 151, 604,
				10, 81, 211, 1860, 25, 32, 269, 8, 110, 21,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				let P = class {
					constructor(R, O) {
						g.$P.on("vscode:getDiagnosticInfo", (B, U) => {
							const z = R.getConnection();
							if (z) {
								const F = O.getHostLabel(
									c.Schemas.vscodeRemote,
									z.remoteAuthority,
								);
								R.getDiagnosticInfo(U.args)
									.then((x) => {
										x &&
											((x.hostName = F),
											w.$_m.latency?.high &&
												(x.latency = {
													average: w.$_m.latency.average,
													current: w.$_m.latency.current,
												})),
											g.$P.send(U.replyChannel, x);
									})
									.catch((x) => {
										const H =
											x && x.message
												? `Connection to '${F}' could not be established  ${x.message}`
												: `Connection to '${F}' could not be established `;
										g.$P.send(U.replyChannel, { hostName: F, errorMessage: H });
									});
							} else g.$P.send(U.replyChannel);
						});
					}
				};
				P = Ne([j(0, w.$$m), j(1, a.$3N)], P);
				let k = class {
					constructor(R, O, B) {
						const U = R.getConnection();
						U &&
							U.onDidStateChange(async (z) => {
								if (z.type === o.PersistentConnectionEventType.ConnectionGain) {
									const F = await O.resolveAuthority(U.remoteAuthority);
									F.options &&
										F.options.extensionHostEnv &&
										(await B.setRemoteEnvironment(F.options.extensionHostEnv));
								}
							});
					}
				};
				k = Ne([j(0, w.$$m), j(1, s.$3l), j(2, n.$q2)], k);
				let L = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.remoteTelemetryEnablementUpdater";
					}
					constructor(R, O) {
						super(),
							(this.a = R),
							(this.b = O),
							this.c(),
							this.D(
								O.onDidChangeConfiguration((B) => {
									B.affectsConfiguration($.$wm) && this.c();
								}),
							);
					}
					c() {
						return this.a.updateTelemetryLevel((0, v.$Zp)(this.b));
					}
				};
				L = Ne([j(0, w.$$m), j(1, f.$gj)], L);
				let D = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.remoteEmptyWorkbenchPresentation";
					}
					constructor(R, O, B, U, z) {
						super();
						function F() {
							const J = B.getValue("workbench.startupEditor");
							return J !== "welcomePage" && J !== "welcomePageInEmptyWorkbench";
						}
						function x() {
							return F();
						}
						const {
							remoteAuthority: H,
							filesToDiff: q,
							filesToMerge: V,
							filesToOpenOrCreate: G,
							filesToWait: K,
						} = R;
						H &&
							z.getWorkbenchState() === y.WorkbenchState.EMPTY &&
							!q?.length &&
							!V?.length &&
							!G?.length &&
							!K &&
							O.resolveAuthority(H).then(() => {
								F() && U.executeCommand("workbench.view.explorer"),
									x() &&
										U.executeCommand(
											"workbench.action.terminal.toggleTerminal",
										);
							});
					}
				};
				D = Ne(
					[j(0, p.$ucd), j(1, s.$3l), j(2, f.$gj), j(3, h.$ek), j(4, y.$Vi)],
					D,
				);
				let M = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.wslContextKeyInitializer";
					}
					constructor(R, O, B, U) {
						super();
						const z = "wslFeatureInstalled",
							F = "remote.wslFeatureInstalled",
							x = B.getBoolean(F, T.StorageScope.APPLICATION, void 0),
							q = new S.$5j(z, !!x, t.localize(8916, null)).bindTo(R);
						x === void 0 &&
							U.when(u.LifecyclePhase.Eventually).then(async () => {
								O.hasWSLFeatureInstalled().then((V) => {
									V &&
										(q.set(!0),
										B.store(
											F,
											!0,
											T.StorageScope.APPLICATION,
											T.StorageTarget.MACHINE,
										));
								});
							});
					}
				};
				M = Ne([j(0, S.$6j), j(1, I.$y7c), j(2, T.$lq), j(3, u.$n6)], M);
				const N = i.$Io.as(r.Extensions.Workbench);
				N.registerWorkbenchContribution(P, u.LifecyclePhase.Eventually),
					N.registerWorkbenchContribution(k, u.LifecyclePhase.Eventually),
					(0, r.$s6)(L.ID, L, r.WorkbenchPhase.BlockRestore),
					(0, r.$s6)(D.ID, D, r.WorkbenchPhase.BlockRestore),
					C.$l && (0, r.$s6)(M.ID, M, r.WorkbenchPhase.BlockRestore),
					i.$Io
						.as(b.$No.Configuration)
						.registerConfiguration({
							id: "remote",
							title: t.localize(8917, null),
							type: "object",
							properties: {
								"remote.downloadExtensionsLocally": {
									type: "boolean",
									markdownDescription: t.localize(8918, null),
									default: !1,
								},
							},
						}),
					C.$m
						? m.$TX.registerCommandAndKeybindingRule({
								id: l.OpenLocalFileFolderCommand.ID,
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.KeyO,
								when: l.$l5c,
								metadata: {
									description: l.OpenLocalFileFolderCommand.LABEL,
									args: [],
								},
								handler: l.OpenLocalFileFolderCommand.handler(),
							})
						: (m.$TX.registerCommandAndKeybindingRule({
								id: l.OpenLocalFileCommand.ID,
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.KeyO,
								when: l.$l5c,
								metadata: {
									description: l.OpenLocalFileCommand.LABEL,
									args: [],
								},
								handler: l.OpenLocalFileCommand.handler(),
							}),
							m.$TX.registerCommandAndKeybindingRule({
								id: l.OpenLocalFolderCommand.ID,
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: (0, d.$os)(d.$ps, d.KeyMod.CtrlCmd | d.KeyCode.KeyO),
								mac: {
									primary: (0, d.$os)(d.$qs, d.KeyMod.CtrlCmd | d.KeyCode.KeyO),
								},
								when: l.$l5c,
								metadata: {
									description: l.OpenLocalFolderCommand.LABEL,
									args: [],
								},
								handler: l.OpenLocalFolderCommand.handler(),
							})),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.SaveLocalFileCommand.ID,
						weight: m.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.KeyS,
						when: l.$l5c,
						metadata: { description: l.SaveLocalFileCommand.LABEL, args: [] },
						handler: l.SaveLocalFileCommand.handler(),
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	