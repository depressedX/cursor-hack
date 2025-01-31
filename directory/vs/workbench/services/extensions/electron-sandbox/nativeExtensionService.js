import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/network.js';
import '../../../../base/common/performance.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/remote/common/remoteAgentConnection.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/remote/common/remoteExtensionsScanner.js';
import '../../../../platform/remote/common/remoteHosts.js';
import '../../../../platform/request/common/request.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../environment/common/environmentService.js';
import '../../extensionManagement/common/extensionManagement.js';
import '../browser/webWorkerExtensionHost.js';
import '../common/abstractExtensionService.js';
import '../common/extensionDevOptions.js';
import '../common/extensionHostKind.js';
import '../common/extensionHostProtocol.js';
import '../common/extensionManifestPropertiesService.js';
import '../common/extensionRunningLocationTracker.js';
import '../common/extensions.js';
import '../common/extensionsProposedApi.js';
import '../common/remoteExtensionHost.js';
import './cachedExtensionScanner.js';
import './localProcessExtensionHost.js';
import '../../host/browser/host.js';
import '../../lifecycle/common/lifecycle.js';
import '../../remote/common/remoteAgentService.js';
import '../../remote/common/remoteExplorerService.js';
define(
			de[4394],
			he([
				1, 0, 7, 75, 33, 23, 240, 12, 4, 99, 11, 31, 10, 81, 57, 119, 22, 20, 5,
				34, 110, 40, 41, 62, 604, 211, 951, 438, 327, 32, 25, 174, 78, 157,
				3321, 4393, 698, 517, 1021, 384, 2006, 53, 3322, 3379, 3782, 3453, 87,
				52, 143, 519,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*window*/,
				w /*cancellation*/,
				E /*network*/,
				C /*performance*/,
				d /*platform*/,
				m /*nls*/,
				r /*actionCommonCategories*/,
				u /*actions*/,
				a /*commands*/,
				h /*configuration*/,
				c /*configurationRegistry*/,
				n /*dialogs*/,
				g /*extensionManagement*/,
				p /*files*/,
				o /*extensions*/,
				f /*instantiation*/,
				b /*log*/,
				s /*native*/,
				l /*notification*/,
				y /*opener*/,
				$ /*productService*/,
				v /*remoteAgentConnection*/,
				S /*remoteAuthorityResolver*/,
				I /*remoteExtensionsScanner*/,
				T /*remoteHosts*/,
				P /*request*/,
				k /*telemetry*/,
				L /*workspace*/,
				D /*workspaceTrust*/,
				M /*environmentService*/,
				N /*extensionManagement*/,
				A /*webWorkerExtensionHost*/,
				R /*abstractExtensionService*/,
				O /*extensionDevOptions*/,
				B /*extensionHostKind*/,
				U /*extensionHostProtocol*/,
				z /*extensionManifestPropertiesService*/,
				F /*extensionRunningLocationTracker*/,
				x /*extensions*/,
				H /*extensionsProposedApi*/,
				q /*remoteExtensionHost*/,
				V /*cachedExtensionScanner*/,
				G /*localProcessExtensionHost*/,
				K /*host*/,
				J /*lifecycle*/,
				W /*remoteAgentService*/,
				X /*remoteExplorerService*/,
) {
				"use strict";
				var Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5dd = e.$4dd = void 0),
					(C = mt(C)),
					(m = mt(m));
				let ie = class extends R.$Y4c {
					constructor(
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
					) {
						const Te = se.createInstance(H.$W4c),
							Ee = se.createInstance(V.$1dd),
							Ie = new ne(Te, Ee, () => this.Eb(), se, le, ae, fe, ge, Le, ve);
						super(
							Te,
							Ie,
							new te(le, fe, ve),
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
							ue,
							fe,
							me,
							ve,
							ge,
							be,
							Ce,
							Le,
							Je,
						),
							(this.Ub = Fe),
							(this.Vb = Oe),
							(this.Wb = xe),
							(this.Xb = He),
							(this.Yb = Ke),
							(this.Tb = new R.$54c()),
							(this.Sb = Ee),
							Ce.when(J.LifecyclePhase.Ready).then(() => {
								(0, t.$egb)(
									i.$Bfb,
									() => {
										this.kb();
									},
									50,
								);
							});
					}
					async Zb() {
						return this.Sb.scannedExtensions;
					}
					zb(se, re, le) {
						const oe = [],
							ae = this.getExtensionsStatus();
						for (const pe of Object.keys(ae)) {
							const $e = ae[pe];
							$e.activationStarted &&
								se.containsExtension($e.id) &&
								oe.push($e.id);
						}
						if (
							(super.zb(se, re, le),
							se.kind === B.ExtensionHostKind.LocalProcess)
						) {
							if (re === U.ExtensionHostExitCode.VersionMismatch) {
								this.L.prompt(l.Severity.Error, m.localize(12443, null), [
									{
										label: m.localize(12444, null),
										run: () => {
											this.J.invokeFunction((pe) => {
												pe.get(K.$asb).restart();
											});
										},
									},
								]);
								return;
							}
							if (
								(this.Cb(se),
								this.ac(re, le, oe),
								this.Tb.registerCrash(),
								this.Tb.shouldAutomaticallyRestart())
							)
								this.X.info("Automatically restarting the extension host."),
									this.L.status(m.localize(12445, null), { hideAfter: 5e3 }),
									this.startExtensionHosts();
							else {
								const pe = [];
								this.M.isBuilt
									? pe.push({
											label: m.localize(12446, null),
											run: () => {
												this.J.invokeFunction(($e) => {
													$e.get(a.$ek).executeCommand(
														"extension.bisect.start",
													);
												});
											},
										})
									: pe.push({
											label: m.localize(12447, null),
											run: () => this.Ub.openDevTools(),
										}),
									pe.push({
										label: m.localize(12448, null),
										run: () => this.startExtensionHosts(),
									}),
									this.M.isBuilt &&
										pe.push({
											label: m.localize(12449, null),
											run: () => {
												this.J.invokeFunction(($e) => {
													$e.get(y.$7rb).open(
														"https://aka.ms/vscode-extension-bisect",
													);
												});
											},
										}),
									this.L.prompt(l.Severity.Error, m.localize(12450, null), pe);
							}
						}
					}
					ac(se, re, le) {
						this.N.publicLog2("extensionHostCrash", {
							code: se,
							signal: re,
							extensionIds: le.map((oe) => oe.value),
						});
						for (const oe of le)
							this.N.publicLog2("extensionHostCrashExtension", {
								code: se,
								signal: re,
								extensionId: oe.value,
							});
					}
					async Rb(se) {
						if (se.indexOf("+") === -1) {
							const { host: le, port: oe } = (0, T.$yn)(se);
							return {
								authority: {
									authority: se,
									connectTo: {
										type: S.RemoteConnectionType.WebSocket,
										host: le,
										port: oe,
									},
									connectionToken: void 0,
								},
							};
						}
						return this.sb(B.ExtensionHostKind.LocalProcess, se);
					}
					async cc(se, re) {
						if (se.indexOf("+") === -1) return re;
						const oe = this.cb(B.ExtensionHostKind.LocalProcess);
						if (oe.length === 0)
							throw new Error("Cannot resolve canonical URI");
						const ae = await Promise.all(
							oe.map((pe) => pe.getCanonicalURI(se, re)),
						);
						for (const pe of ae) if (pe) return pe;
						throw new Error(
							`Cannot get canonical URI because no extension is installed to resolve ${(0, S.$7l)(se)}`,
						);
					}
					async Pb() {
						this.Sb.startScanningExtensions();
						const se = this.M.remoteAuthority;
						let re = null,
							le = [];
						if (se) {
							this.ab._setCanonicalURIProvider(async (pe) => {
								if (pe.scheme !== E.Schemas.vscodeRemote || pe.authority !== se)
									return pe;
								C.mark(`code/willGetCanonicalURI/${(0, S.$7l)(se)}`),
									d.$w &&
										this.X.info(
											`Invoking getCanonicalURI for authority ${(0, S.$7l)(se)}...`,
										);
								try {
									return this.cc(se, pe);
								} finally {
									C.mark(`code/didGetCanonicalURI/${(0, S.$7l)(se)}`),
										d.$w &&
											this.X.info(
												`getCanonicalURI returned for authority ${(0, S.$7l)(se)}.`,
											);
								}
							}),
								d.$w &&
									this.X.info(
										"Starting to wait on IWorkspaceTrustManagementService.workspaceResolved...",
									),
								await this.Yb.workspaceResolved,
								d.$w &&
									this.X.info(
										"Finished waiting on IWorkspaceTrustManagementService.workspaceResolved.",
									);
							let oe;
							try {
								oe = await this.pb(se);
							} catch (pe) {
								return (
									S.$6l.isNoResolverFound(pe)
										? (pe.isHandled = await this.gc(se))
										: S.$6l.isHandled(pe) &&
											console.log(
												"Error handled: Not showing a notification for the error",
											),
									this.ab._setResolvedAuthorityError(se, pe),
									this.ec()
								);
							}
							this.ab._setResolvedAuthority(oe.authority, oe.options),
								this.Wb.setTunnelInformation(oe.tunnelInformation);
							const ae = this.Y.getConnection();
							if (
								(ae &&
									(ae.onDidStateChange(async (pe) => {
										pe.type ===
											v.PersistentConnectionEventType.ConnectionLost &&
											this.ab._clearResolvedAuthority(se);
									}),
									ae.onReconnecting(() => this.qb())),
								([re, le] = await Promise.all([
									this.Y.getEnvironment(),
									this.Z.scanExtensions(),
								])),
								!re)
							)
								return (
									this.L.notify({
										severity: l.Severity.Error,
										message: m.localize(12451, null),
									}),
									this.ec()
								);
							(0, P.$Hq)(
								re.useHostProxy
									? c.ConfigurationScope.APPLICATION
									: c.ConfigurationScope.MACHINE,
							);
						} else this.ab._setCanonicalURIProvider(async (oe) => oe);
						return this.ec(le);
					}
					async ec(se = []) {
						return (
							await this.Yb.workspaceTrustInitialized,
							new R.$Z4c(await this.Zb(), se, !0, !1)
						);
					}
					async Qb(se) {
						await this.tb(),
							this.Y.getConnection()?.dispose(),
							(0, O.$Umc)(this.M).isExtensionDevTestFromCli
								? (d.$w &&
										this.X.info(
											`Asking native host service to exit with code ${se}.`,
										),
									this.Ub.exit(se))
								: this.Ub.closeWindow();
					}
					async gc(se) {
						const re = (0, T.$xn)(se),
							le = this.Q.remoteExtensionTips?.[re],
							oe = this.Q.remoteExtensionTips?.[`open-${re}`];
						if (!le) return !1;
						const ae = (fe) => {
								this.N.publicLog("remoteExtensionRecommendations:popup", {
									userReaction: fe,
									extensionId: pe,
								});
							},
							pe = le.extensionId,
							$e = await this.Zb(),
							ye = $e.filter((fe) => fe.identifier.value === pe)[0],
							ue = $e.filter(
								(fe) => fe.identifier.value === oe?.extensionId,
							)[0];
						if (ye) {
							if (!(0, R.$34c)(this.X, this.O, ye, !1)) {
								const fe = m.localize(12452, null, le.friendlyName);
								this.L.prompt(
									l.Severity.Info,
									fe,
									[
										{
											label: m.localize(12453, null),
											run: async () => {
												ae("enable"),
													await this.O.setEnablement(
														[(0, x.$x2)(ye)],
														N.EnablementState.EnabledGlobally,
													),
													await this.Vb.reload();
											},
										},
									],
									{ sticky: !0, priority: l.NotificationPriority.URGENT },
								);
							}
						} else if (ue) {
							if (!(0, R.$34c)(this.X, this.O, ye, !1)) {
								const fe = m.localize(12454, null, le.friendlyName);
								this.L.prompt(
									l.Severity.Info,
									fe,
									[
										{
											label: m.localize(12455, null),
											run: async () => {
												ae("enable"),
													await this.O.setEnablement(
														[(0, x.$x2)(ue)],
														N.EnablementState.EnabledGlobally,
													),
													await this.Vb.reload();
											},
										},
									],
									{ sticky: !0, priority: l.NotificationPriority.URGENT },
								);
							}
						} else {
							const fe = m.localize(12456, null, le.friendlyName);
							this.L.prompt(
								l.Severity.Info,
								fe,
								[
									{
										label: m.localize(12457, null),
										run: async () => {
											ae("install");
											const [me] = await this.Xb.getExtensions(
												[{ id: pe }],
												w.CancellationToken.None,
											);
											if (me)
												await this.R.installFromGallery(me),
													await this.Vb.reload();
											else if (oe) {
												const [ve] = await this.Xb.getExtensions(
													[{ id: oe.extensionId }],
													w.CancellationToken.None,
												);
												ve
													? (await this.R.installFromGallery(ve),
														await this.Vb.reload())
													: this.L.error(
															m.localize(12458, null, oe.friendlyName),
														);
											} else
												this.L.error(m.localize(12459, null, le.friendlyName));
										},
									},
								],
								{
									sticky: !0,
									priority: l.NotificationPriority.URGENT,
									onCancel: () => ae("cancel"),
								},
							);
						}
						return !0;
					}
				};
				(e.$4dd = ie),
					(e.$4dd = ie =
						Ne(
							[
								j(0, f.$Li),
								j(1, l.$4N),
								j(2, M.$r8),
								j(3, k.$km),
								j(4, N.$IQb),
								j(5, p.$ll),
								j(6, $.$Bk),
								j(7, N.$GQb),
								j(8, L.$Vi),
								j(9, h.$gj),
								j(10, z.$JSb),
								j(11, b.$ik),
								j(12, W.$$m),
								j(13, I.$bfb),
								j(14, J.$n6),
								j(15, S.$3l),
								j(16, s.$y7c),
								j(17, K.$asb),
								j(18, X.$5pc),
								j(19, g.$Ep),
								j(20, D.$pO),
								j(21, n.$GO),
							],
							ie,
						));
				let ne = class {
					constructor(se, re, le, oe, ae, pe, $e, ye, ue, fe) {
						(this.b = se),
							(this.c = re),
							(this.d = le),
							(this.f = oe),
							(this.g = ae),
							(this.h = pe),
							(this.i = ye),
							(this.j = ue),
							(this.l = fe),
							(this.a = ee(ae, $e));
					}
					createExtensionHost(se, re, le) {
						switch (re.kind) {
							case B.ExtensionHostKind.LocalProcess: {
								const oe = le
									? x.ExtensionHostStartup.EagerManualStart
									: x.ExtensionHostStartup.EagerAutoStart;
								return this.f.createInstance(
									G.$3dd,
									re,
									oe,
									this.m(se, le, re),
								);
							}
							case B.ExtensionHostKind.LocalWebWorker: {
								if (this.a !== _.Disabled) {
									const oe = le
										? this.a === _.Lazy
											? x.ExtensionHostStartup.Lazy
											: x.ExtensionHostStartup.EagerManualStart
										: x.ExtensionHostStartup.EagerAutoStart;
									return this.f.createInstance(A.$E4c, re, oe, this.n(se, re));
								}
								return null;
							}
							case B.ExtensionHostKind.Remote: {
								const oe = this.i.getConnection();
								return oe
									? this.f.createInstance(
											q.$74c,
											re,
											this.o(se, oe.remoteAuthority),
										)
									: null;
							}
						}
					}
					m(se, re, le) {
						return {
							getInitData: async () => {
								if (re) {
									const oe = await this.c.scannedExtensions;
									d.$w &&
										this.l.info(
											`NativeExtensionHostFactory._createLocalProcessExtensionHostDataProvider.scannedExtensions: ${oe.map((ue) => ue.identifier.value).join(",")}`,
										);
									const ae = (0, R.$14c)(this.l, this.h, this.b, oe, !0);
									d.$w &&
										this.l.info(
											`NativeExtensionHostFactory._createLocalProcessExtensionHostDataProvider.localExtensions: ${ae.map((ue) => ue.identifier.value).join(",")}`,
										);
									const pe = se.computeRunningLocation(ae, [], !1),
										$e = (0, F.$U4c)(ae, pe, (ue) => le.equals(ue), {
											environmentService: this.g,
										}),
										ye = new x.$s2(
											0,
											ae,
											$e.map((ue) => ue.identifier),
										);
									return (
										d.$w &&
											this.l.info(
												`NativeExtensionHostFactory._createLocalProcessExtensionHostDataProvider.myExtensions: ${$e.map((ue) => ue.identifier.value).join(",")}`,
											),
										{ extensions: ye }
									);
								} else {
									const oe = await this.d(),
										ae = se.filterByRunningLocation(oe.extensions, le);
									return {
										extensions: new x.$s2(
											oe.versionId,
											oe.extensions,
											ae.map(($e) => $e.identifier),
										),
									};
								}
							},
						};
					}
					n(se, re) {
						return {
							getInitData: async () => {
								const le = await this.d(),
									oe = se.filterByRunningLocation(le.extensions, re);
								return {
									extensions: new x.$s2(
										le.versionId,
										le.extensions,
										oe.map((pe) => pe.identifier),
									),
								};
							},
						};
					}
					o(se, re) {
						return {
							remoteAuthority: re,
							getInitData: async () => {
								const le = await this.d(),
									oe = await this.i.getEnvironment();
								if (!oe)
									throw new Error(
										"Cannot provide init data for remote extension host!",
									);
								const ae = se.filterByExtensionHostKind(
										le.extensions,
										B.ExtensionHostKind.Remote,
									),
									pe = new x.$s2(
										le.versionId,
										le.extensions,
										ae.map(($e) => $e.identifier),
									);
								return {
									connectionData: this.j.getConnectionData(re),
									pid: oe.pid,
									appRoot: oe.appRoot,
									rendererPerformanceTimeOrigin: performance.timeOrigin,
									extensionHostLogsPath: oe.extensionHostLogsPath,
									globalStorageHome: oe.globalStorageHome,
									workspaceStorageHome: oe.workspaceStorageHome,
									extensions: pe,
								};
							},
						};
					}
				};
				ne = Ne(
					[
						j(3, f.$Li),
						j(4, M.$r8),
						j(5, N.$IQb),
						j(6, h.$gj),
						j(7, W.$$m),
						j(8, S.$3l),
						j(9, b.$ik),
					],
					ne,
				);
				function ee(Z, se) {
					if (
						Z.isExtensionDevelopment &&
						Z.extensionDevelopmentKind?.some((re) => re === "web")
					)
						return _.Eager;
					{
						const re = se.getValue(x.$p2);
						return re === !0 ? _.Eager : re === "auto" ? _.Lazy : _.Disabled;
					}
				}
				var _;
				(function (Z) {
					(Z[(Z.Disabled = 0)] = "Disabled"),
						(Z[(Z.Eager = 1)] = "Eager"),
						(Z[(Z.Lazy = 2)] = "Lazy");
				})(_ || (_ = {}));
				let te = (Y = class {
					constructor(se, re, le) {
						(this.c = le), (this.a = !!se.remoteAuthority);
						const oe = ee(se, re);
						this.b = oe !== _.Disabled;
					}
					pickExtensionHostKind(se, re, le, oe, ae) {
						const pe = Y.pickExtensionHostKind(re, le, oe, ae, this.a, this.b);
						return (
							this.c.trace(
								`pickRunningLocation for ${se.value}, extension kinds: [${re.join(", ")}], isInstalledLocally: ${le}, isInstalledRemotely: ${oe}, preference: ${(0, B.$d2)(ae)} => ${(0, B.$c2)(pe)}`,
							),
							pe
						);
					}
					static pickExtensionHostKind(se, re, le, oe, ae, pe) {
						const $e = [];
						for (const ye of se) {
							if (ye === "ui" && re) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Local
								)
									return B.ExtensionHostKind.LocalProcess;
								$e.push(B.ExtensionHostKind.LocalProcess);
							}
							if (ye === "workspace" && le) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Remote
								)
									return B.ExtensionHostKind.Remote;
								$e.push(B.ExtensionHostKind.Remote);
							}
							if (ye === "workspace" && !ae) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Local
								)
									return B.ExtensionHostKind.LocalProcess;
								$e.push(B.ExtensionHostKind.LocalProcess);
							}
							if (ye === "web" && re && pe) {
								if (
									oe === B.ExtensionRunningPreference.None ||
									oe === B.ExtensionRunningPreference.Local
								)
									return B.ExtensionHostKind.LocalWebWorker;
								$e.push(B.ExtensionHostKind.LocalWebWorker);
							}
						}
						return $e.length > 0 ? $e[0] : null;
					}
				});
				(e.$5dd = te),
					(e.$5dd = te = Y = Ne([j(0, M.$r8), j(1, h.$gj), j(2, b.$ik)], te));
				class Q extends u.$3X {
					constructor() {
						super({
							id: "workbench.action.restartExtensionHost",
							title: m.localize2(12461, "Restart Extension Host"),
							category: r.$ck.Developer,
							f1: !0,
						});
					}
					async run(se) {
						const re = se.get(x.$q2);
						(await re.stopExtensionHosts(m.localize(12460, null))) &&
							re.startExtensionHosts();
					}
				}
				(0, u.$4X)(Q), (0, o.$lK)(x.$q2, ie, o.InstantiationType.Eager);
			},
		)
