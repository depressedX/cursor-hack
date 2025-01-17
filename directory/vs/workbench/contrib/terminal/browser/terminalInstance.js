import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../../external/solid/store.js';
import '../../../../base/browser/canIUse.js';
import '../../../../base/browser/dnd.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/sash/sash.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/async.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/labels.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/scrollable.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/config/tabFocus.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dnd/browser/dnd.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingResolver.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../platform/terminal/common/capabilities/terminalCapabilityStore.js';
import '../../../../platform/terminal/common/environmentVariableShared.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/terminal/common/terminalStrings.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../common/theme.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import './terminal.js';
import './terminalActions.js';
import './terminalEditorInput.js';
import './terminalExtensions.js';
import './terminalIcon.js';
import './terminalProcessManager.js';
import './terminalRunRecentQuickPick.js';
import './terminalStatusList.js';
import './terminalUri.js';
import './widgets/widgetManager.js';
import './xterm/lineDataEventAddon.js';
import './xterm/xtermTerminal.js';
import '../common/history.js';
import '../common/terminal.js';
import '../common/terminalColorRegistry.js';
import '../common/terminalContextKey.js';
import '../common/terminalEnvironment.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/history/common/history.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/path/common/pathService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../amdX.js';
import '../../../../base/common/color.js';
import '../common/terminalColorRegistry.js';
import '../../../../editor/contrib/cHover/browser/hoverWidget.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './promptBar/renderTerminalPromptBar.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes2.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../services/aiContext/browser/aiContext.js';
import '../../../../base/common/constants.js';
import '../../../../../external/solid/solid.js';
import '../../../services/aiCmdK/browser/cmdKService2.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../common/terminalStrings.js';
import '../common/terminalClipboard.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../editor/contrib/tooltipUi/browser/tooltipUiWidgets.js';
import '../../aiCpp/browser/cppEventLogger.js';
import './terminalIconPicker.js';
import './terminalCppService.js';
import './utils.js';
import '../../../services/host/browser/host.js';
import '../../composer/browser/constants.js';
import './terminalResizeDebouncer.js';
import '../../terminalContrib/accessibility/common/terminal.accessibility.js';
import './terminalContextMenu.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../composer/browser/composer.js';
define(
			de[1074],
			he([
				1, 0, 139, 193, 459, 323, 7, 114, 277, 203, 15, 14, 138, 29, 6, 27, 222,
				3, 23, 54, 12, 195, 9, 653, 4, 91, 184, 121, 31, 10, 8, 347, 22, 5, 128,
				39, 390, 40, 41, 62, 63, 21, 32, 189, 675, 774, 117, 776, 51, 79, 35,
				25, 174, 123, 60, 89, 130, 107, 363, 833, 378, 514, 3580, 3567, 806,
				690, 1760, 3147, 1299, 1314, 145, 512, 237, 1262, 18, 78, 245, 96, 165,
				131, 536, 97, 512, 866, 45, 4368, 47, 670, 205, 471, 58, 13, 720, 417,
				469, 3149, 308, 1610, 332, 3752, 3957, 1759, 87, 169, 3145, 995, 616,
				49, 219,
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
				R,
				O,
				B,
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
				Te,
				Ee,
				Ie,
				Be,
				Se,
				ke,
				Ue,
				qe,
				Ae,
				Me,
				De,
				Re,
				je,
				Ve,
				Ze,
				et,
				rt,
				ft,
				bt,
				nt,
				lt,
				ct,
				gt,
				ht,
				Rt,
				Nt,
				jt,
				ti,
				kt,
			) {
				"use strict";
				var hi;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rVc = e.$pVc = e.$oVc = void 0),
					(e.$qVc = Vt),
					(C = mt(C)),
					(b = mt(b)),
					(v = mt(v));
				var Kt;
				(function (Gt) {
					(Gt[(Gt.WaitForContainerThreshold = 100)] =
						"WaitForContainerThreshold"),
						(Gt[(Gt.DefaultCols = 80)] = "DefaultCols"),
						(Gt[(Gt.DefaultRows = 30)] = "DefaultRows"),
						(Gt[(Gt.MaxCanvasWidth = 4096)] = "MaxCanvasWidth");
				})(Kt || (Kt = {}));
				let di;
				const Ye = [
						K.PosixShellType.Bash,
						K.PosixShellType.Zsh,
						K.GeneralShellType.PowerShell,
						K.GeneralShellType.Python,
					],
					ze = "error";
				let Xe = class extends o.$1c {
					static {
						hi = this;
					}
					static {
						this.j = 1;
					}
					get domElement() {
						return this.ib;
					}
					get usedShellIntegrationInjection() {
						return this.Sb;
					}
					pauseInputEvents(Mt) {
						this.ac = Mt;
					}
					get store() {
						return this.B;
					}
					get extEnvironmentVariableCollection() {
						return this.n.extEnvironmentVariableCollection;
					}
					get waitOnExit() {
						return (
							this.Cc.attachPersistentProcess?.waitOnExit || this.Cc.waitOnExit
						);
					}
					set waitOnExit(Mt) {
						this.Cc.waitOnExit = Mt;
					}
					get target() {
						return this.Rb;
					}
					set target(Mt) {
						(this.Rb = Mt), this.wc.fire(Mt);
					}
					get instanceId() {
						return this.w;
					}
					get resource() {
						return this.s;
					}
					get cols() {
						return this.rb !== void 0
							? this.rb
							: this.xb && this.xb.cols
								? this.xb.forceExactSize
									? this.xb.cols
									: Math.min(Math.max(this.xb.cols, 2), this.pb)
								: this.pb;
					}
					get rows() {
						return this.sb !== void 0
							? this.sb
							: this.xb && this.xb.rows
								? this.xb.forceExactSize
									? this.xb.rows
									: Math.min(Math.max(this.xb.rows, 2), this.qb)
								: this.qb;
					}
					get isDisposed() {
						return this.B.isDisposed;
					}
					get fixedCols() {
						return this.rb;
					}
					get fixedRows() {
						return this.sb;
					}
					get maxCols() {
						return this.pb;
					}
					get maxRows() {
						return this.qb;
					}
					get processId() {
						return this.n.shellProcessId;
					}
					get processReady() {
						return this.n.ptyProcessReady;
					}
					get hasChildProcesses() {
						return (
							this.shellLaunchConfig.attachPersistentProcess
								?.hasChildProcesses || this.n.hasChildProcesses
						);
					}
					get reconnectionProperties() {
						return (
							this.shellLaunchConfig.attachPersistentProcess
								?.reconnectionProperties ||
							this.shellLaunchConfig.reconnectionProperties
						);
					}
					get areLinksReady() {
						return this.yb;
					}
					get initialDataEvents() {
						return this.Ab;
					}
					get exitCode() {
						return this.I;
					}
					get exitReason() {
						return this.J;
					}
					get hadFocusOnExit() {
						return this.G;
					}
					get isTitleSetByProcess() {
						return !!this.Eb.value;
					}
					get shellLaunchConfig() {
						return this.Cc;
					}
					get shellType() {
						return this.M;
					}
					get os() {
						return this.n.os;
					}
					get isRemote() {
						return this.n.remoteAuthority !== void 0;
					}
					get remoteAuthority() {
						return this.n.remoteAuthority;
					}
					get hasFocus() {
						return C.$Lgb(this.ib);
					}
					get title() {
						return this.N;
					}
					get titleSource() {
						return this.O;
					}
					get icon() {
						return this.sd();
					}
					get color() {
						return this.td();
					}
					get processName() {
						return this.Kb;
					}
					get sequence() {
						return this.Lb;
					}
					get staticTitle() {
						return this.Mb;
					}
					get workspaceFolder() {
						return this.Nb;
					}
					get cwd() {
						return this.tb;
					}
					get initialCwd() {
						return this.ub;
					}
					get description() {
						if (this.Jb) return this.Jb;
						switch (
							this.shellLaunchConfig.attachPersistentProcess?.type ||
							this.shellLaunchConfig.type
						) {
							case "Task":
								return Ze.$hUc.typeTask;
							case "Local":
								return Ze.$hUc.typeLocal;
							default:
								return;
						}
					}
					get userHome() {
						return this.Pb;
					}
					get shellIntegrationNonce() {
						return this.n.shellIntegrationNonce;
					}
					get injectedArgs() {
						return this.vb;
					}
					constructor(
						Mt,
						Ut,
						ei,
						mi,
						ii,
						Dt,
						Jt,
						si,
						Zt,
						ci,
						ri,
						$i,
						Wt,
						tt,
						at,
						pi,
						Li,
						Di,
						Ui,
						Wi,
						Gi,
						qi,
						Oi,
						yi,
						Ai,
						li,
						Vi,
						wi,
						_t,
						ai,
						Ft,
						Xt,
						$t,
						ut,
						Et,
						Tt,
						qt,
						At,
						Yt,
					) {
						super(),
							(this.Ac = Mt),
							(this.Bc = Ut),
							(this.Cc = ei),
							(this.Dc = mi),
							(this.Ec = ii),
							(this.Fc = Dt),
							(this.Gc = Jt),
							(this.Hc = si),
							(this.Ic = Zt),
							(this.Jc = ci),
							(this.Kc = ri),
							(this.Lc = $i),
							(this.Mc = Wt),
							(this.Nc = tt),
							(this.Oc = at),
							(this.Pc = pi),
							(this.Qc = Li),
							(this.Rc = Di),
							(this.Sc = Ui),
							(this.Tc = Wi),
							(this.Uc = Gi),
							(this.Vc = qi),
							(this.Wc = yi),
							(this.Xc = Ai),
							(this.Yc = li),
							(this.Zc = Vi),
							(this.$c = wi),
							(this.ad = _t),
							(this.bd = ai),
							(this.cd = Xt),
							(this.dd = $t),
							(this.ed = ut),
							(this.fd = Et),
							(this.gd = Tt),
							(this.hd = qt),
							(this.jd = At),
							(this.kd = Yt),
							(this.q = new Map()),
							(this.z = 0),
							(this.C = 0),
							(this.N = ""),
							(this.O = K.TitleEventSource.Process),
							(this.S = new Map()),
							(this.U = []),
							(this.W = -1),
							(this.X = -1),
							(this.pb = 0),
							(this.qb = 0),
							(this.tb = void 0),
							(this.ub = void 0),
							(this.vb = void 0),
							(this.wb = !0),
							(this.yb = !1),
							(this.zb = this.D(new o.$2c())),
							(this.Ab = []),
							(this.Eb = this.D(new o.$2c())),
							(this.Gb = this.D(new o.$2c())),
							(this.Kb = ""),
							(this.Sb = !1),
							(this.capabilities = this.D(new V.$LHb())),
							(this.disableLayout = !1),
							(this.bc = new n.$re()),
							(this.onExit = this.bc.event),
							(this.cc = this.D(new n.$re())),
							(this.onDisposed = this.cc.event),
							(this.dc = this.D(new n.$re())),
							(this.onProcessIdReady = this.dc.event),
							(this.ec = this.D(new n.$re())),
							(this.onProcessReplayComplete = this.ec.event),
							(this.fc = this.D(new n.$re())),
							(this.onTitleChanged = this.fc.event),
							(this.gc = this.D(new n.$re())),
							(this.onIconChanged = this.gc.event),
							(this.hc = this.D(new n.$re())),
							(this.onWillData = this.hc.event),
							(this.ic = this.D(new n.$re())),
							(this.onData = this.ic.event),
							(this.jc = this.D(new n.$re())),
							(this.onBinary = this.jc.event),
							(this.kc = this.D(
								new n.$re({ onDidAddFirstListener: () => this.Ad() }),
							)),
							(this.onLineData = this.kc.event),
							(this.lc = this.D(new n.$re())),
							(this.onRequestExtHostProcess = this.lc.event),
							(this.mc = this.D(new n.$re())),
							(this.onDimensionsChanged = this.mc.event),
							(this.nc = this.D(new n.$re())),
							(this.onMaximumDimensionsChanged = this.nc.event),
							(this.oc = this.D(new n.$re())),
							(this.onDidFocus = this.oc.event),
							(this.pc = this.D(new n.$re())),
							(this.onDidRequestFocus = this.pc.event),
							(this.qc = this.D(new n.$re())),
							(this.onDidBlur = this.qc.event),
							(this.rc = this.D(new n.$re())),
							(this.onDidInputData = this.rc.event),
							(this.sc = this.D(new n.$re())),
							(this.onDidChangeSelection = this.sc.event),
							(this.tc = this.D(new n.$re())),
							(this.onRequestAddInstanceToGroup = this.tc.event),
							(this.uc = this.D(new n.$re())),
							(this.onDidChangeHasChildProcesses = this.uc.event),
							(this.vc = this.D(new n.$re())),
							(this.onDidExecuteText = this.vc.event),
							(this.wc = this.D(new n.$re())),
							(this.onDidChangeTarget = this.wc.event),
							(this.xc = this.D(new n.$re())),
							(this.onDidSendText = this.xc.event),
							(this.yc = this.D(new n.$re())),
							(this.onDidChangeShellType = this.yc.event),
							(this.zc = this.D(new n.$re())),
							(this.onDidChangeVisibility = this.zc.event),
							(this.ld = 0),
							(this.Ud = void 0),
							(this.ib = C.$("div.terminal-wrapper")),
							(this.Q = C.$("div.xterm-wrapper")),
							(this.R = C.$("div.blocks-overlay")),
							this.ib.appendChild(this.Q),
							(this.ib.style.display = "flex"),
							(this.ib.style.flexDirection = "column"),
							this.Q.appendChild(this.R),
							(this.Q.style.flexGrow = "1"),
							(this.Q.style.flexShrink = "1"),
							(this.Q.style.minHeight = "0"),
							(this.Y = C.$("div.cursor-debug-hint")),
							(this.bb = C.$("div.prompt-bar-container")),
							this.ib.appendChild(this.bb),
							this.addPromptBarHint(),
							this.D(
								this.cd.onChangeEffectManuallyDisposed({
									onChange: ({
										deps: Si,
										prevDeps: gi,
										prevReturnValue: ki,
									}) => {
										this.db === void 0 &&
											(this.addPromptBarHint(),
											this.Hb ? this.layout(this.Hb) : this.Yd());
									},
									deps: [
										() =>
											this.cd.applicationUserPersistentStorage
												.hideTerminalTooltip,
									],
									runNowToo: !1,
								}),
							),
							(this.ab = C.$fhb(this.Y, C.$("button.terminalButton"))),
							C.$fhb(this.ab, C.$("span")),
							C.$fhb(this.ab, C.$("span.commandHelpText")),
							(this.gb = C.$("div.cursor-debug-hint")),
							(this.fb = C.$("div.tooltip-hint")),
							this.Qc.getValue(De.$wW)
								? ((this.gb.style.display = "flex"),
									(this.Y.style.display = "flex"))
								: ((this.gb.style.display = "none"),
									(this.Y.style.display = "none")),
							this.D(
								this.Qc.onDidChangeConfiguration((Si) => {
									Si.affectsConfiguration(De.$wW) &&
										(this.Qc.getValue(De.$wW)
											? ((this.gb.style.display = "flex"),
												(this.Y.style.display = "flex"))
											: ((this.gb.style.display = "none"),
												(this.Y.style.display = "none")));
								}),
							),
							(this.hb = C.$fhb(this.gb, C.$("button.terminalButton"))),
							C.$fhb(this.hb, C.$("span")),
							C.$fhb(this.hb, C.$("span.commandHelpText")),
							this.D(
								this.Kc.onDidUpdateKeybindings(() => {
									this.md(),
										this.db === void 0 &&
											(this.addPromptBarHint(),
											this.Hb ? this.layout(this.Hb) : this.Yd());
								}),
							),
							this.D(
								C.$_fb(this.ab, async (Si) => {
									const gi = !(Si.ctrlKey || Si.metaKey);
									Si.stopPropagation(),
										gi
											? Ft.executeCommand(ht.COMPOSER_EDIT_ACTION_ID, "edit", {
													neverClose: !0,
												})
											: await this.kd.createComposer({
													forceMode: "edit",
													insertSelection: !0,
												});
								}),
							),
							this.D(
								C.$_fb(this.hb, async (Si) => {
									const gi = !(Si.ctrlKey || Si.metaKey);
									Si.stopPropagation(),
										gi
											? Ft.executeCommand(Be.$mbc, { neverClose: !0 })
											: await this.kd.createComposer({
													forceMode: "chat",
													insertSelection: !0,
												});
								}),
							);
						const bi = () => {
							(this.Z = C.$fhb(this.Y, C.$("button.terminalButton"))),
								C.$fhb(this.Z, C.$("span")),
								C.$fhb(this.Z, C.$("span.commandHelpText")),
								this.D(
									C.$_fb(this.Z, async (Si) => {
										const gi = !(Si.ctrlKey || Si.metaKey);
										Si.stopPropagation(),
											gi
												? Ft.executeCommand(Be.$mbc, { neverClose: !0 })
												: await this.kd.createComposer({
														forceMode: "chat",
														insertSelection: !0,
													});
									}),
								);
						};
						if (
							(this.cd.applicationUserPersistentStorage.composerState
								.unification !== !0 && bi(),
							this.D(
								this.cd.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.cd.applicationUserPersistentStorage.composerState
												.unification,
									],
									onChange: ({ deps: Si }) => {
										Si[0] === !0 && this.Z
											? (this.Z.remove(), (this.Z = void 0))
											: Si[0] !== !0 && !this.Z && bi();
									},
								}),
							),
							(this.Fb = this.D(Dt.createInstance(ue.$pLc))),
							(this.L = []),
							(this.F = !1),
							(this.G = !1),
							(this.H = !1),
							(this.w = hi.j++),
							(this.Ib = !1),
							(this.sb = ei.attachPersistentProcess?.fixedDimensions?.rows),
							(this.rb = ei.attachPersistentProcess?.fixedDimensions?.cols),
							(this.s = (0, ye.$UUc)(
								this.Wc.getWorkspace().id,
								this.instanceId,
								this.title,
							)),
							this.Cc.attachPersistentProcess?.hideFromUser &&
								(this.Cc.hideFromUser =
									this.Cc.attachPersistentProcess.hideFromUser),
							this.Cc.attachPersistentProcess?.isFeatureTerminal &&
								(this.Cc.isFeatureTerminal =
									this.Cc.attachPersistentProcess.isFeatureTerminal),
							this.Cc.attachPersistentProcess?.type &&
								(this.Cc.type = this.Cc.attachPersistentProcess.type),
							this.shellLaunchConfig.cwd)
						) {
							const Si =
								typeof this.Cc.cwd == "string"
									? y.URI.from({ scheme: f.Schemas.file, path: this.Cc.cwd })
									: this.Cc.cwd;
							Si && (this.Nb = this.Wc.getWorkspaceFolder(Si) ?? void 0);
						}
						if (!this.Nb) {
							const Si = this.Zc.getLastActiveWorkspaceRoot();
							this.Nb = Si
								? (this.Wc.getWorkspaceFolder(Si) ?? void 0)
								: void 0;
						}
						const fi = this.D(mi.createScoped(this.ib));
						(this.Ub = fi),
							(this.m = this.D(Dt.createChild(new A.$Ki([L.$6j, fi])))),
							(this.kb = Ce.TerminalContextKeys.focus.bindTo(fi)),
							(this.lb =
								Ce.TerminalContextKeys.terminalHasFixedWidth.bindTo(fi)),
							(this.mb = Ce.TerminalContextKeys.textSelected.bindTo(fi)),
							(this.nb = Ce.TerminalContextKeys.altBufferActive.bindTo(fi)),
							(this.ob =
								Ce.TerminalContextKeys.terminalShellIntegrationEnabled.bindTo(
									fi,
								)),
							this.Rc.trace(
								`terminalInstance#ctor (instanceId: ${this.instanceId})`,
								this.Cc,
							),
							this.D(
								this.capabilities.onDidAddCapabilityType((Si) => {
									this.Rc.debug("terminalInstance added capability", Si),
										Si === q.TerminalCapability.CwdDetection
											? this.capabilities
													.get(q.TerminalCapability.CwdDetection)
													?.onDidChangeCwd((gi) => {
														(this.tb = gi),
															this.ke(this.title, K.TitleEventSource.Config),
															this.m
																.invokeFunction(ve.$lUc)
																?.add(gi, {
																	remoteAuthority: this.remoteAuthority,
																});
													})
											: Si === q.TerminalCapability.CommandDetection &&
												this.capabilities
													.get(q.TerminalCapability.CommandDetection)
													?.onCommandFinished((ki) => {
														ki.command.trim().length > 0 &&
															this.m
																.invokeFunction(ve.$kUc)
																?.add(ki.command, { shellType: this.M });
													});
								}),
							),
							this.D(
								this.capabilities.onDidRemoveCapabilityType((Si) =>
									this.Rc.debug("terminalInstance removed capability", Si),
								),
							),
							!this.shellLaunchConfig.executable &&
								!Oi.remoteAuthority &&
								this.Hc.resolveIcon(this.Cc, s.OS),
							(this.Db = ei.attachPersistentProcess?.icon || ei.icon),
							this.shellLaunchConfig.customPtyImplementation &&
								this.ke(this.Cc.name, K.TitleEventSource.Api),
							(this.statusList = this.D(this.m.createInstance($e.$fHb))),
							this.ud(),
							(this.n = this.Id()),
							(this.Bb = new u.$Mh(Kt.WaitForContainerThreshold)),
							(this.Cb = new u.$Mh(1e3)),
							(this.t = this.zd()),
							this.t
								.then(async () => {
									if (
										(await this.Bb.wait(),
										!this.shellLaunchConfig.customPtyImplementation &&
											this.Gc.config.shellIntegration?.enabled &&
											!this.shellLaunchConfig.executable)
									) {
										const Si = await this.n.getBackendOS(),
											gi = await this.Hc.getDefaultProfile({
												remoteAuthority: this.remoteAuthority,
												os: Si,
											});
										(this.shellLaunchConfig.executable = gi.path),
											(this.shellLaunchConfig.args = gi.args),
											this.shellLaunchConfig.isExtensionOwnedTerminal
												? ((this.shellLaunchConfig.icon ??= gi.icon),
													(this.shellLaunchConfig.color ??= gi.color),
													(this.shellLaunchConfig.env ??= gi.env))
												: ((this.shellLaunchConfig.icon = gi.icon),
													(this.shellLaunchConfig.color = gi.color),
													(this.shellLaunchConfig.env = gi.env));
									}
									await this.Jd(),
										this.shellLaunchConfig.attachPersistentProcess &&
											((this.tb =
												this.shellLaunchConfig.attachPersistentProcess.cwd),
											this.ke(
												this.shellLaunchConfig.attachPersistentProcess.title,
												this.shellLaunchConfig.attachPersistentProcess
													.titleSource,
											),
											this.setShellType(this.shellType)),
										this.rb && (await this.de());
								})
								.catch((Si) => {
									if (!this.isDisposed) throw Si;
								}),
							this.D(
								this.Qc.onDidChangeConfiguration(async (Si) => {
									Si.affectsConfiguration(
										Q.AccessibilityVerbositySettingId.Terminal,
									) && this.$d(this.xterm?.raw, this.w, this.title),
										Si.affectsConfiguration("terminal.integrated") &&
											(this.updateConfig(), this.setVisible(this.H)),
										[
											K.TerminalSettingId.FontSize,
											K.TerminalSettingId.FontFamily,
											K.TerminalSettingId.FontWeight,
											K.TerminalSettingId.FontWeightBold,
											K.TerminalSettingId.LetterSpacing,
											K.TerminalSettingId.LineHeight,
											"editor.fontFamily",
										].some((ki) => Si.affectsConfiguration(ki)) &&
											((this.wb = !0), await this.Yd()),
										Si.affectsConfiguration(
											K.TerminalSettingId.UnicodeVersion,
										) && this.Wd(),
										Si.affectsConfiguration("editor.accessibilitySupport") &&
											this.updateAccessibilitySupport(),
										(Si.affectsConfiguration(
											K.TerminalSettingId.TerminalTitle,
										) ||
											Si.affectsConfiguration(
												K.TerminalSettingId.TerminalTitleSeparator,
											) ||
											Si.affectsConfiguration(
												K.TerminalSettingId.TerminalDescription,
											)) &&
											this.Ob?.refreshLabel(this);
								}),
							),
							this.D(
								this.Wc.onDidChangeWorkspaceFolders(() =>
									this.Ob?.refreshLabel(this),
								),
							);
						let Ti = C.getWindow(this.P).setTimeout(() => {
							(Ti = void 0), (this.Ab = void 0), this.zb.clear();
						}, 1e4);
						this.D(
							(0, o.$Yc)(() => {
								Ti && C.getWindow(this.P).clearTimeout(Ti);
							}),
						),
							this.D(
								C.$$fb(this.ib, "mousemove", (Si) => {
									(this.Yb = Si),
										this.Zb || this.od(),
										this.hasSelection()
											? this.ib.classList.add("withselection")
											: this.ib.classList.remove("withselection");
								}),
							),
							this.D(
								C.$$fb(this.ib, "mouseleave", (Si) => {
									for (const [gi, ki] of this.S.entries())
										ki.classList.remove("hover");
									this.md();
								}),
							);
						let wt;
						this.D(
							C.$0fb(this.ib, "mousedown", (Si) => {
								(this.Yb = Si),
									(this.Zb = Si),
									(wt = setTimeout(() => {
										this.Y?.classList.add("hidden"),
											this.gb?.classList.add("hidden"),
											(wt = void 0);
									}, 100)),
									this.hasSelection()
										? this.ib.classList.add("withselection")
										: this.ib.classList.remove("withselection");
							}),
						),
							this.D(
								C.$0fb(this.ib, "mouseup", (Si) => {
									(this.Yb = Si),
										this.Zb &&
											Math.abs(this.Zb.clientX - Si.clientX) <= 2 &&
											Math.abs(this.Zb.clientY - Si.clientY) <= 2 &&
											this.pd(),
										(this.Zb = void 0);
								}),
							),
							this.D(
								C.$0fb(C.getWindow(this.ib), "mouseup", (Si) => {
									wt && (clearTimeout(wt), (wt = void 0)),
										this.Y?.classList.remove("hidden"),
										this.gb?.classList.remove("hidden"),
										this.hasSelection()
											? this.ib.classList.add("withselection")
											: this.ib.classList.remove("withselection"),
										this.md();
								}),
							);
						let We;
						this.ib.addEventListener(
							"scroll",
							() => {
								We && (clearTimeout(We), (We = void 0)),
									this.Y?.classList.add("noevents"),
									this.gb?.classList.add("noevents"),
									(We = setTimeout(() => {
										this.Y?.classList.remove("noevents"),
											this.gb?.classList.remove("noevents"),
											(We = void 0);
									}, 1e3));
							},
							{ capture: !0 },
						),
							this.D(
								C.$0fb(this.Q, "copy", () => {
									if (
										(this.fd.registerEvent("terminal.copy"),
										!this.hasSelection() && this.W)
									) {
										const Si = this.U.find((Ji) => Ji.marker?.id === this.W);
										if (!Si) return;
										const gi = Si.executedMarker?.line,
											ki = Si.endMarker?.line;
										if (gi === void 0 || ki === void 0) return;
										const Pi = this.xterm?.getBufferLines(gi - 1, ki);
										if (!Pi) return;
										const Hi = Pi.join(`
`);
										this.Oc.writeText(Hi);
									}
								}),
							),
							this.qd(),
							this.md();
						const _e = le.TerminalExtensionsRegistry.getTerminalContributions();
						for (const Si of _e) {
							if (this.q.has(Si.id)) {
								(0, c.$4)(
									new Error(
										`Cannot have two terminal contributions with the same id ${Si.id}`,
									),
								);
								continue;
							}
							let gi;
							try {
								(gi = this.D(
									this.m.createInstance(Si.ctor, this, this.n, this.Fb),
								)),
									this.q.set(Si.id, gi);
							} catch (ki) {
								(0, c.$4)(ki);
							}
							this.t.then((ki) => {
								gi.xtermReady?.(ki);
							}),
								this.D(
									this.onDisposed(() => {
										gi.dispose(),
											this.q.delete(Si.id),
											"instance" in gi && delete gi.instance,
											"_instance" in gi && delete gi._instance;
									}),
								);
						}
					}
					removeGhostText() {
						this.Vb &&
							(this.xterm?.raw.write("\x1B7"),
							this.xterm?.raw.write(" ".repeat(this.Vb.length)),
							this.xterm?.raw.write("\x1B8"),
							(this.Vb = void 0),
							(this.Wb = void 0));
					}
					removeBuffersBelow() {
						this.xterm?.raw.write("\x1B[0J");
					}
					renderGhostText(Mt) {
						this.removeGhostText(), this.removeBuffersBelow();
						const Ut = (0, ct.$kVc)(Mt);
						this.xterm?.raw.write("\x1B7" + Ut + "\x1B8"), (this.Vb = Mt);
					}
					setUnderlyingFullSuggestion(Mt) {
						this.Wb = Mt;
					}
					clearAbortController() {
						this.Xb = void 0;
					}
					getContribution(Mt) {
						return this.q.get(Mt);
					}
					clearLine() {
						this.xterm?.raw.write("\x1B[2K"), this.xterm?.raw.write("\r");
					}
					interrupt() {
						this.sendText("^C�\r", !1);
					}
					async startTerminalCpp(Mt) {
						this.Ic.startTerminalCpp({
							terminalInstance: this,
							abortController: Mt,
						});
					}
					addPromptBarHint() {
						if (
							this.cd.applicationUserPersistentStorage.hideTerminalTooltip ===
								!0 ||
							this.Cc.hideFromUser
						) {
							(this.ld = 0), (this.bb.style.display = "none");
							return;
						}
						for (; this.bb.firstChild; )
							this.bb.removeChild(this.bb.firstChild);
						const Mt = C.$("div.prompt-bar-hint");
						(Mt.textContent = ` ${this.Kc?.lookupKeybinding(De.$_V)?.getLabel()} to generate a command`),
							(Mt.style.textAlign = "center"),
							(Mt.style.opacity = "1"),
							(Mt.style.color = "var(--vscode-input-placeholderForeground)"),
							(Mt.style.fontSize = "10px"),
							(Mt.style.height = "20px"),
							(this.bb.style.display = "block"),
							(this.ld = 20),
							this.bb.appendChild(Mt);
					}
					hidePromptBar() {
						(this.promptBarData = void 0),
							(this.setPromptBarData = void 0),
							this.eb?.dispose(),
							this.db &&
								(this.addPromptBarHint(),
								this.db?.dispose(),
								(this.db = void 0),
								this.Hb ? this.layout(this.Hb) : this.Yd()),
							setTimeout(() => {
								this.scrollToBottom();
							}, 100);
					}
					cancelPromptBar() {
						this.promptBarData?.abortController?.abort();
					}
					rejectPromptBar() {
						this.promptBarData === void 0 ||
							this.setPromptBarData === void 0 ||
							(this.promptBarData?.queryHistory !== void 0 &&
								(this.promptBarData?.plainText?.length ?? 1) > 0) ||
							(this.setPromptBarData?.("suggestedCommand", ""),
							this.ed.removeTerminalFollowup({
								data: this.promptBarData,
								setData: this.setPromptBarData,
							}));
					}
					acceptPromptBar() {
						this.hidePromptBar(),
							setTimeout(() => {
								this.focus(!0);
							}, 110);
					}
					acceptAndRunPromptBar() {
						this.scrollToBottom(),
							this.Qc.getValue(De.$xW)
								? this.runCommand(
										this.promptBarData?.suggestedCommand ?? "",
										!0,
									)
								: this.sendText("\r", !1),
							(0, Re.batch)(() => {
								this.setPromptBarData?.("suggestedCommand", ""),
									this.setPromptBarData?.("commandLine", (Mt) => Mt + 1);
							});
					}
					showPromptBar() {
						if (this.db && this.promptBarData) {
							this.promptBarData.inputBoxDelegate.focus();
							return;
						}
						for (this.hidePromptBar(); this.bb.firstChild; )
							this.bb.removeChild(this.bb.firstChild);
						(this.eb = this.cd.manuallyDisposedWrapper(() => {
							const Mt = {
									uuid: (0, Ue.$9g)(),
									instanceId: this.instanceId,
									plainText: "",
									richText: "",
									chatResponse: void 0,
									forceRerenderInputBox: 1,
									queryHistory: void 0,
									chatHistory: void 0,
									isFocused: !1,
									suggestedCommand: "",
									commandLine: 1,
									abortController: void 0,
									previousStructuredTextsNewestFirst: [],
									contextSessionUuid: this.dd.createContextSession(
										(0, Me.$C7b)(),
									).uuid,
									delegate: new qe.$KN(),
									inputBoxDelegate: new Ae.$Zzb(),
								},
								[Ut, ei] = (0, i.createStore)(Mt, {});
							(this.promptBarData = Ut), (this.setPromptBarData = ei);
						})),
							(this.bb.style.display = "block"),
							(this.bb.style.top = "20px"),
							(this.bb.style.width = "100%"),
							(this.bb.style.zIndex = "10000"),
							(this.db = (0, ke.$dVc)(this.bb, this.Fc, {
								terminalInstance: this,
								onDidChangeHeight: (Mt) => {
									(this.ld = Mt),
										this.Hb ? this.layout(this.Hb) : this.Yd(),
										setTimeout(() => {
											this.scrollToBottom();
										}, 100);
								},
								data: this.promptBarData,
								setData: this.setPromptBarData,
							})),
							(this.wb = !0),
							this.Hb ? this.layout(this.Hb) : this.Yd();
					}
					showTooltipHint(Mt) {
						for (; this.fb.firstChild; )
							this.fb.removeChild(this.fb.firstChild);
						const Ut = () => {
							this.Q.removeChild(this.fb);
						};
						(0, ft.$Klc)(Mt, this.fb, this.bd, Ut),
							(this.fb.style.position = "absolute"),
							(this.fb.style.right = "24px"),
							(this.fb.style.top = "32px"),
							(this.fb.style.zIndex = "100000"),
							this.Q.appendChild(this.fb);
					}
					md() {
						if (this.Cc.hideFromUser) return;
						if (this.Z) {
							const ii = this.Z.querySelector("span"),
								Dt = this.hb.querySelector("span"),
								Jt = this.Z.querySelector("span.commandHelpText"),
								si = this.hb.querySelector("span.commandHelpText");
							(ii.textContent = "Add to Chat"),
								(Dt.textContent = "Add to Chat");
							const Zt = this.Kc.lookupKeybinding(Be.$mbc);
							(Jt.textContent = Zt?.getLabel() || ""),
								(si.textContent = Zt?.getLabel() || "");
						}
						const Mt = this.ab.querySelector("span"),
							Ut = this.ab.querySelector("span.commandHelpText");
						Mt.textContent = "Add to Composer";
						const ei = this.Kc.lookupKeybinding(ht.COMPOSER_EDIT_ACTION_ID);
						Ut.textContent = ei?.getLabel() || "";
						let mi;
						if (this.hasSelection()) {
							const ii = this.selectionRange?.selectionStartLineNumber;
							if (ii === void 0) return;
							const Dt = this.xterm?.raw.textarea?.clientHeight,
								Jt = this.xterm?.getFirstLine();
							if (Jt === void 0 || Dt === void 0) return;
							const si = (ii - Jt - 1) * Dt;
							(this.Y.style.top = `${Math.max(0, si - 25)}px`),
								this.Y.classList.remove(ze),
								this.Y.parentElement || this.Q.appendChild(this.Y),
								this.gb.remove();
						} else
							this.S.has(this.W)
								? ((mi = this.S.get(this.W)),
									mi.classList.contains(ze)
										? this.Y.classList.add(ze)
										: this.Y.classList.remove(ze),
									(this.Y.style.top = `max(${mi.style.top} + 5px, 5px)`),
									this.Y.parentElement || this.Q.appendChild(this.Y))
								: ((this.Y.style.top = "0"), this.Y.remove());
						mi && this.nd(mi);
					}
					nd(Mt) {
						let Ut;
						Mt.classList.contains(ze)
							? (Ut = new Ee.$RL(255, 0, 0, 0.05))
							: (Ut = this.Pc.getColorTheme().getColor(Ie.$jHb)?.rgba),
							(Mt.style.backgroundColor = Ut
								? `rgba(${Ut.r}, ${Ut.g}, ${Ut.b}, 0.05)`
								: "rgba(255, 255, 255, 0.05)");
					}
					od() {
						for (const [Mt, Ut] of this.S.entries()) {
							const ei = Ut.getBoundingClientRect(),
								mi = this.Yb?.clientX,
								ii = this.Yb?.clientY;
							mi &&
							ii &&
							mi >= ei.left &&
							mi <= ei.right &&
							ii >= ei.top &&
							ii <= ei.bottom
								? Ut.classList.add("hover")
								: Ut.classList.remove("hover");
						}
						this.md();
					}
					pd() {
						const Mt = this.W;
						this.W = -1;
						for (const [Ut, ei] of this.S.entries()) {
							const mi = ei.getBoundingClientRect(),
								ii = this.Yb?.clientX,
								Dt = this.Yb?.clientY;
							ii &&
							Dt &&
							ii >= mi.left &&
							ii <= mi.right &&
							Dt >= mi.top &&
							Dt <= mi.bottom &&
							Mt !== Ut
								? (ei.classList.add("selected"), (this.W = Ut))
								: ei.classList.remove("selected");
						}
						this.md();
					}
					qd() {
						const Mt = this.xterm?.shellIntegration.capabilities.get(
							q.TerminalCapability.CommandDetection,
						);
						if (!Mt) return;
						const Ut = Mt.commands;
						this.U = [...Ut];
						const ei = Ut[Ut.length - 1];
						if (ei && ei.marker?.line !== void 0) {
							const ri = ei.marker.id;
							ri != this.X &&
								((this.X = ri), ei.exitCode ? (this.W = ri) : (this.W = -1));
						}
						const mi = this.xterm?.raw.element?.clientHeight ?? 0,
							ii = this.xterm?.raw.rows ?? 1,
							Dt = mi / ii,
							Jt = this.xterm?.getFirstLine(),
							si = this.xterm?.raw.rows;
						if (!Ut || Dt === void 0 || Jt === void 0 || si === void 0) return;
						const Zt = Jt + si - 1,
							ci = [];
						for (let ri = 0; ri < Ut.length; ri++) {
							const $i = Ut[ri],
								Wt = $i.marker?.line,
								tt =
									ri < Ut.length - 1
										? Ut[ri + 1].marker?.line
										: Mt?.currentCommand?.commandStartMarker?.line,
								at = $i.marker.id;
							if (
								Wt == -1 ||
								Wt === void 0 ||
								tt == -1 ||
								tt === void 0 ||
								$i.exitCode === void 0
							)
								continue;
							const pi = tt - 1;
							if (pi >= Jt && Wt <= Zt) {
								const Li = C.$("div.block"),
									Di = Math.max(Wt, Jt),
									Ui = Math.min(pi, Zt);
								(Li.style.top = `${(Di - Jt) * Dt + 2}px`),
									(Li.style.height = `${(Ui - Di + 1) * Dt}px`),
									Wt >= Jt && Li.classList.add("border-top"),
									pi <= Zt && Li.classList.add("border-bottom"),
									$i.exitCode && Li.classList.add(ze);
								const Wi = this.R.appendChild(Li);
								this.W === at && Wi.classList.add("selected"),
									ci.push([at, Wi]);
							}
						}
						for (const [ri, $i] of this.S.entries()) this.R.removeChild($i);
						this.S.clear();
						for (const [ri, $i] of ci) this.S.set(ri, $i);
						this.md();
					}
					selectedCommand() {
						if (this.W !== -1)
							return this.U.find((Mt) => Mt.marker?.id === this.W);
					}
					async parseCommand(Mt) {
						let Ut = this.capabilities.get(
							q.TerminalCapability.CommandDetection,
						);
						if (
							!Ut &&
							(this.n.processState === ge.ProcessState.Uninitialized ||
								this.n.processState === ge.ProcessState.Launching)
						) {
							const mi = new o.$Zc();
							await Promise.race([
								new Promise((ii) => {
									mi.add(
										this.capabilities.onDidAddCapabilityType((Dt) => {
											Dt === q.TerminalCapability.CommandDetection &&
												((Ut = this.capabilities.get(
													q.TerminalCapability.CommandDetection,
												)),
												ii());
										}),
									);
								}),
								(0, u.$Nh)(2e3),
							]),
								mi.dispose();
						}
						if (!Ut) return;
						const ei = Mt ?? this.xterm?.raw.buffer.normal.length ?? 0 ?? 0;
						return (
							this.capabilities.get(
								q.TerminalCapability.PartialCommandDetection,
							),
							Ut.currentCommand ? Ut.currentCommand : Ut.getCommandForLine(ei)
						);
					}
					async rd() {
						const Mt = this.xterm?.getBufferLength();
						if (Mt !== void 0)
							return this.xterm?.getBufferLines(0, Mt).join(`
`);
					}
					sd() {
						return (
							this.Db ||
								(this.Db =
									this.n.processState >= ge.ProcessState.Launching
										? (0, X.$_O)().getIcon(
												this.Qc.getValue(K.TerminalSettingId.TabsDefaultIcon),
											)
										: void 0),
							this.Db
						);
					}
					td() {
						if (this.shellLaunchConfig.color)
							return this.shellLaunchConfig.color;
						if (this.shellLaunchConfig?.attachPersistentProcess?.color)
							return this.shellLaunchConfig.attachPersistentProcess.color;
						this.n.processState >= ge.ProcessState.Launching;
					}
					ud() {
						if (!this.P) {
							(this.pb = Kt.DefaultCols), (this.qb = Kt.DefaultRows);
							return;
						}
						const Mt = C.getWindow(this.Q).getComputedStyle(this.Q),
							Ut = parseInt(Mt.width),
							ei = parseInt(Mt.height);
						this.vd(Ut, ei);
					}
					vd(Mt, Ut) {
						if (!Mt || !Ut) return this.wd(), null;
						const ei = this.yd(Mt, Ut);
						if (!ei) return this.wd(), null;
						const mi = this.xterm
								? this.xterm.getFont()
								: this.Gc.getFont(C.getWindow(this.domElement)),
							ii = (0, me.$_Hb)(
								C.getWindow(this.domElement),
								mi,
								ei.width,
								ei.height,
							);
						return ii
							? ((this.pb !== ii.cols || this.qb !== ii.rows) &&
									((this.pb = ii.cols), (this.qb = ii.rows), this.xd()),
								ei.width)
							: (this.wd(), null);
					}
					wd() {
						hi.h && ((this.pb = hi.h.cols), (this.qb = hi.h.rows));
					}
					xd() {
						this.nc.fire();
					}
					yd(Mt, Ut) {
						const ei = this.xterm
							? this.xterm.getFont()
							: this.Gc.getFont(C.getWindow(this.domElement));
						if (
							!ei ||
							!ei.charWidth ||
							!ei.charHeight ||
							!this.xterm?.raw.element
						)
							return;
						const mi = C.getWindow(this.xterm.raw.element).getComputedStyle(
								this.xterm.raw.element,
							),
							ii = parseInt(mi.paddingLeft) + parseInt(mi.paddingRight) + 14,
							Dt = parseInt(mi.paddingTop) + parseInt(mi.paddingBottom);
						return (
							(hi.f = new C.$pgb(
								Math.min(Kt.MaxCanvasWidth, Mt - ii),
								Ut - Dt + (this.Qb && this.jb ? -5 : 0),
							)),
							hi.f
						);
					}
					get persistentProcessId() {
						return this.n.persistentProcessId;
					}
					get shouldPersist() {
						return (
							this.n.shouldPersist &&
							!this.shellLaunchConfig.isTransient &&
							(!this.reconnectionProperties ||
								this.Qc.getValue("task.reconnection") === !0)
						);
					}
					static getXtermConstructor(Mt, Ut) {
						const ei = Mt.lookupKeybinding(
							Nt.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
							Ut,
						);
						return (
							di ||
							((di = u.Promises.withAsyncBody(async (mi) => {
								const ii = (await (0, Te.$Tq)("@xterm/xterm", "lib/xterm.js"))
									.Terminal;
								(ii.strings.promptLabel = v.localize(10068, null)),
									(ii.strings.tooMuchOutput = ei
										? v.localize(10069, null, ei.getLabel())
										: v.localize(10070, null)),
									mi(ii);
							})),
							di)
						);
					}
					async zd() {
						const Mt = await hi.getXtermConstructor(this.Kc, this.Dc);
						if (this.isDisposed)
							throw new c.$fb("Terminal disposed of during xterm.js creation");
						const Ut =
								this.shellLaunchConfig.executable === void 0 ||
								this.shellType === void 0 ||
								!Ye.includes(this.shellType),
							ei = this.m.createInstance(
								me.$$Hb,
								Mt,
								this.pb,
								this.qb,
								this.m.createInstance(Bt, this),
								this.capabilities,
								this.n.shellIntegrationNonce,
								Ut,
							);
						(this.xterm = ei),
							(this.$b = this.D(
								new Rt.$nVc(
									() => this.H,
									() => ei,
									async (Dt, Jt) => {
										ei.raw.resize(Dt, Jt), await this.Zd(ei.raw);
									},
									async (Dt) => {
										ei.raw.resize(Dt, ei.raw.rows), await this.Zd(ei.raw);
									},
									async (Dt) => {
										ei.raw.resize(ei.raw.cols, Dt), await this.Zd(ei.raw);
									},
								),
							)),
							this.updateAccessibilitySupport(),
							this.D(
								this.xterm.onDidRequestRunCommand((Dt) => {
									Dt.copyAsHtml
										? this.copySelection(!0, Dt.command)
										: this.sendText(Dt.command.command, !Dt.noNewLine);
								}),
							),
							this.D(this.xterm.onDidRequestFocus(() => this.focus())),
							this.D(
								this.xterm.onDidRequestSendText((Dt) => this.sendText(Dt, !1)),
							);
						const mi = this.Cc.initialText
								? new Promise((Dt) => this.Qd(ei, Dt))
								: void 0,
							ii = this.D(new fe.$9Uc(mi));
						if (
							(this.D(ii.onLineData((Dt) => this.kc.fire(Dt))),
							(this.Tb = ii),
							(0, u.$Oh)(
								() => {
									this.D(
										ei.raw.onBell(() => {
											(this.Qc.getValue(K.TerminalSettingId.EnableBell) ||
												this.Qc.getValue(
													K.TerminalSettingId.EnableVisualBell,
												)) &&
												this.statusList.add(
													{
														id: $e.TerminalStatus.Bell,
														severity: B.Severity.Warning,
														icon: a.$ak.bell,
														tooltip: v.localize(10071, null),
													},
													this.Gc.config.bellDuration,
												),
												this.hd.playSignal(I.$Twb.terminalBell);
										}),
									);
								},
								1e3,
								this.B,
							),
							this.D(ei.raw.onSelectionChange(async () => this.Td())),
							this.D(ei.raw.buffer.onBufferChange(() => this.Fd())),
							this.D(this.n.onProcessData((Dt) => this.Kd(Dt))),
							this.D(
								ei.raw.onData(async (Dt) => {
									this.fd.registerEvent("terminal.type"),
										await this.ac?.wait(),
										await this.n.write(Dt),
										this.rc.fire(Dt);
								}),
							),
							this.D(ei.raw.onBinary((Dt) => this.n.processBinary(Dt))),
							this.D(
								this.n.onProcessReady(async (Dt) => {
									this.n.os && ii.setOperatingSystem(this.n.os),
										(ei.raw.options.windowsPty = Dt.windowsPty);
								}),
							),
							this.D(
								this.n.onRestoreCommands((Dt) =>
									this.xterm?.shellIntegration.deserialize(Dt),
								),
							),
							this.D(
								this.jd.onDidChangeLocation(({ views: Dt }) => {
									Dt.some((Jt) => Jt.id === ge.$geb) && ei.refresh();
								}),
							),
							!this.capabilities.has(q.TerminalCapability.CwdDetection))
						) {
							let Dt = ei.raw.onKey((Jt) => {
								new d.$7fb(Jt.domEvent).equals(g.KeyCode.Enter) && this.Vd();
							});
							this.D(
								this.capabilities.onDidAddCapabilityType((Jt) => {
									Jt === q.TerminalCapability.CwdDetection &&
										(Dt?.dispose(), (Dt = void 0));
								}),
							);
						}
						return (
							this.Jc.userHome().then((Dt) => {
								this.Pb = Dt.fsPath;
							}),
							this.H && this.Bd(),
							ei
						);
					}
					async Ad() {
						(this.xterm || (await this.t)).raw.loadAddon(this.Tb);
					}
					async runCommand(Mt, Ut) {
						let ei = this.capabilities.get(
							q.TerminalCapability.CommandDetection,
						);
						if (
							!ei &&
							(this.n.processState === ge.ProcessState.Uninitialized ||
								this.n.processState === ge.ProcessState.Launching)
						) {
							const mi = new o.$Zc();
							await Promise.race([
								new Promise((ii) => {
									mi.add(
										this.capabilities.onDidAddCapabilityType((Dt) => {
											Dt === q.TerminalCapability.CommandDetection &&
												((ei = this.capabilities.get(
													q.TerminalCapability.CommandDetection,
												)),
												ii());
										}),
									);
								}),
								(0, u.$Nh)(2e3),
							]),
								mi.dispose();
						}
						(!ei || ei.promptInputModel.value.length > 0) &&
							(await this.sendText("�", !1), await (0, u.$Nh)(100)),
							await this.sendText(Mt, Ut, !Ut);
					}
					async runRecent(Mt, Ut, ei) {
						return this.m.invokeFunction(pe.$8Uc, this, this.Bc, Mt, Ut, ei);
					}
					detachFromElement() {
						this.ib.remove(), (this.P = void 0);
					}
					attachToElement(Mt) {
						this.P !== Mt &&
							(this.Cb.isOpen() || this.Cb.open(),
							(this.P = Mt),
							this.P.appendChild(this.ib),
							this.xterm?.raw.element &&
								this.xterm.raw.open(this.xterm.raw.element),
							this.xterm?.refresh(),
							setTimeout(() => this.Ed(Mt)));
					}
					Bd() {
						if (!this.xterm || this.xterm.raw.element) return;
						if (!this.P || !this.P.isConnected)
							throw new Error(
								"A container element needs to be set with `attachToElement` and be part of the DOM before calling `_open`",
							);
						this.P.appendChild(this.ib);
						const Mt = this.xterm;
						this.Q.xterm = Mt.raw;
						const Ut = Mt.attachToElement(this.Q);
						for (const ei of this.q.values())
							this.xterm
								? ei.xtermOpen?.(this.xterm)
								: this.t.then((mi) => ei.xtermOpen?.(mi));
						if (
							(this.D(
								Mt.shellIntegration.onDidChangeStatus(() => {
									this.hasFocus ? this.Dd() : this.ob.reset();
								}),
							),
							!Mt.raw.element || !Mt.raw.textarea)
						)
							throw new Error("xterm elements not set after open");
						this.$d(Mt.raw, this.w, this.N),
							Mt.raw.attachCustomKeyEventHandler((ei) => {
								if (this.F) return !1;
								const mi = new d.$7fb(ei),
									ii = this.Kc.softDispatch(mi, mi.target),
									Dt =
										ii.kind === O.ResultKind.MoreChordsNeeded &&
										this.Gc.config.allowChords &&
										ei.key !== "Escape";
								if (this.Kc.inChordMode || Dt) return ei.preventDefault(), !1;
								const Jt = "terminal.integrated.showTerminalConfigPrompt",
									si = [
										"RightArrow",
										"LeftArrow",
										"UpArrow",
										"DownArrow",
										"Space",
										"Meta",
										"Control",
										"Shift",
										"Alt",
										"",
										"Delete",
										"Backspace",
										"Tab",
									];
								return (
									this.Sc.getBoolean(Jt, x.StorageScope.APPLICATION, !0) &&
										!si.includes(ei.key) &&
										!ei.ctrlKey &&
										!ei.shiftKey &&
										!ei.altKey &&
										(this.Ib = !0),
									ii.kind === O.ResultKind.KbFound &&
									ii.commandId &&
									this.L.some((Zt) => Zt === ii.commandId) &&
									!this.Gc.config.sendKeybindingsToShell
										? (this.Sc.getBoolean(Jt, x.StorageScope.APPLICATION, !0) &&
												this.Ib &&
												!ge.$heb.includes(ii.commandId) &&
												(this.Lc.prompt(
													B.Severity.Info,
													v.localize(10072, null, this.Uc.nameLong),
													[
														{
															label: v.localize(10073, null),
															run: () => {
																this.Mc.openSettings({
																	jsonEditor: !1,
																	query: `@id:${K.TerminalSettingId.CommandsToSkipShell},${K.TerminalSettingId.SendKeybindingsToShell},${K.TerminalSettingId.AllowChords}`,
																});
															},
														},
													],
												),
												this.Sc.store(
													Jt,
													!1,
													x.StorageScope.APPLICATION,
													x.StorageTarget.USER,
												)),
											ei.preventDefault(),
											!1)
										: (this.Gc.config.allowMnemonics && !s.$m && ei.altKey) ||
												($.$rsb.getTabFocusMode() && ei.key === "Tab")
											? !1
											: ei.key === "Tab" && ei.shiftKey
												? (ei.preventDefault(), !0)
												: !(
														(s.$l &&
															ei.altKey &&
															ei.key === "F4" &&
															!ei.ctrlKey) ||
														(!w.$Yfb.clipboard.readText &&
															ei.key === "v" &&
															ei.ctrlKey)
													)
								);
							}),
							this.D(
								C.$0fb(Mt.raw.element, "mousedown", () => {
									const ei = C.$0fb(
										Mt.raw.element.ownerDocument,
										"mouseup",
										() => {
											setTimeout(() => this.Hd(), 0), ei.dispose();
										},
									);
								}),
							),
							this.D(
								C.$0fb(Mt.raw.element, "touchstart", () => {
									Mt.raw.focus();
								}),
							),
							this.D(
								C.$0fb(Mt.raw.element, "keyup", () => {
									setTimeout(() => this.Hd(), 0);
								}),
							),
							this.D(C.$0fb(Mt.raw.textarea, "focus", () => this.Cd(!0))),
							this.D(C.$0fb(Mt.raw.textarea, "blur", () => this.Cd(!1))),
							this.D(C.$0fb(Mt.raw.textarea, "focusout", () => this.Cd(!1))),
							this.D(Mt.raw.onSelectionChange(() => this.md())),
							this.D(
								Mt.raw.onRender(() => {
									this.qd();
								}),
							),
							this.Ed(this.P),
							this.Fb.attachToElement(Ut),
							this.Hb && this.layout(this.Hb),
							this.updateConfig(),
							Mt.raw.options.disableStdin && this.Pd(Mt.raw);
					}
					Cd(Mt) {
						Mt
							? (this.kb.set(!0),
								this.Dd(),
								this.oc.fire(this),
								this.ib.classList.add("focus"))
							: (this.resetFocusContextKey(),
								this.qc.fire(this),
								this.Hd(),
								this.ib.classList.remove("focus"));
					}
					Dd() {
						this.xterm &&
							this.ob.set(
								this.xterm.shellIntegration.status ===
									K.ShellIntegrationStatus.VSCode,
							);
					}
					resetFocusContextKey() {
						this.kb.reset(), this.ob.reset();
					}
					Ed(Mt) {
						const Ut = new o.$Zc(),
							ei = Ut.add(this.m.createInstance(It, Mt));
						Ut.add(ei.onDropTerminal((mi) => this.tc.fire(mi))),
							Ut.add(
								ei.onDropFile(async (mi) => {
									this.focus(), await this.sendPath(mi, !1);
								}),
							),
							Ut.add(new C.$Hhb(Mt, ei)),
							(this.Gb.value = Ut);
					}
					hasSelection() {
						return this.xterm ? this.xterm.raw.hasSelection() : !1;
					}
					async copySelection(Mt, Ut) {
						this.fd.registerEvent("terminal.copy"),
							await (await this.t).copySelection(Mt, Ut);
					}
					get selection() {
						return this.xterm && this.hasSelection()
							? this.xterm.raw.getSelection()
							: void 0;
					}
					get selectionRange() {
						return this.xterm?.selectionRange;
					}
					clearSelection() {
						this.xterm?.raw.clearSelection();
					}
					Fd() {
						this.nb.set(
							!!(
								this.xterm &&
								this.xterm.raw.buffer.active === this.xterm.raw.buffer.alternate
							),
						);
					}
					dispose(Mt) {
						if (
							!(
								this.shellLaunchConfig.type === "Task" &&
								Mt === K.TerminalExitReason.Process &&
								this.I !== 0 &&
								!this.shellLaunchConfig.waitOnExit
							) &&
							!this.isDisposed
						) {
							this.Rc.trace(
								`terminalInstance#dispose (instanceId: ${this.instanceId})`,
							),
								(0, o.$Vc)(this.Fb),
								this.db?.dispose(),
								this.eb?.dispose(),
								this.xterm?.raw.element && (this.G = this.hasFocus),
								this.Q.xterm && (this.Q.xterm = void 0),
								this.jb && (this.jb.dispose(), (this.jb = void 0));
							try {
								this.xterm?.dispose();
							} catch (Ut) {
								this.Rc.error("Exception occurred during xterm disposal", Ut);
							}
							t.$Ofb &&
								(this.resetFocusContextKey(),
								this.mb.reset(),
								this.qc.fire(this)),
								this.u && (this.u.dispose(), (this.u = void 0)),
								this.J === void 0 &&
									(this.J = Mt ?? K.TerminalExitReason.Unknown),
								this.n.dispose(),
								this.Md(void 0),
								this.cc.fire(this),
								super.dispose();
						}
					}
					async detachProcessAndDispose(Mt) {
						await this.n.detachFromProcess(Mt === K.TerminalExitReason.User),
							this.dispose(Mt);
					}
					focus(Mt) {
						this.Fd(),
							this.xterm &&
								(Mt || !C.$Ogb().getSelection()?.toString()) &&
								(this.xterm.raw.focus(), this.pc.fire());
					}
					async focusWhenReady(Mt) {
						await this.t, await this.Cb.wait(), this.focus(Mt);
					}
					async paste() {
						await this.Gd(await this.Oc.readText());
					}
					async pasteSelection() {
						await this.Gd(await this.Oc.readText("selection"));
					}
					async Gd(Mt) {
						if ((this.fd.registerEvent("terminal.paste"), !this.xterm)) return;
						let Ut = Mt;
						const ei = await this.m.invokeFunction(
							et.$eVc,
							Ut,
							this.xterm?.raw.modes.bracketedPasteMode,
						);
						ei &&
							(typeof ei == "object" && (Ut = ei.modifiedText),
							this.focus(),
							this.xterm.raw.paste(Ut));
					}
					async sendText(Mt, Ut, ei) {
						this.fd.registerEvent("terminal.type"),
							ei &&
								this.xterm?.raw.modes.bracketedPasteMode &&
								(Mt = `\x1B[200~${Mt}\x1B[201~`),
							(Mt = Mt.replace(/\r?\n/g, "\r")),
							Ut && !Mt.endsWith("\r") && (Mt += "\r"),
							this.Rc.debug("sending data (vscode)", Mt),
							await this.n.write(Mt),
							this.rc.fire(Mt),
							this.xc.fire(Mt),
							this.xterm?.scrollToBottom(),
							Ut && this.vc.fire();
					}
					async sendPath(Mt, Ut) {
						return this.sendText(await this.preparePathForShell(Mt), Ut);
					}
					async preparePathForShell(Mt) {
						return (
							await this.processReady,
							(0, Le.$Neb)(
								Mt,
								this.shellLaunchConfig.executable,
								this.title,
								this.shellType,
								this.n.backend,
								this.n.os,
							)
						);
					}
					setVisible(Mt) {
						const Ut = this.H !== Mt;
						(this.H = Mt),
							this.ib.classList.toggle("active", Mt),
							Mt && this.xterm && (this.Bd(), this.$b?.flush(), this.Yd()),
							Ut && this.zc.fire(Mt);
					}
					scrollDownLine() {
						this.xterm?.scrollDownLine();
					}
					scrollDownPage() {
						this.xterm?.scrollDownPage();
					}
					scrollToBottom() {
						this.xterm?.scrollToBottom();
					}
					scrollUpLine() {
						this.xterm?.scrollUpLine();
					}
					scrollUpPage() {
						this.xterm?.scrollUpPage();
					}
					scrollToTop() {
						this.xterm?.scrollToTop();
					}
					clearBuffer() {
						this.n.clearBuffer(), this.xterm?.clearBuffer();
					}
					Hd() {
						const Mt = !!this.Nc.getActiveViewWithId(ge.$geb);
						let Ut = !1;
						const ei = this.Xc.activeEditor;
						ei && (Ut = ei instanceof re.$Unc),
							this.mb.set((Mt || Ut) && this.hasSelection());
					}
					Id() {
						let Mt;
						this.shellLaunchConfig.attachPersistentProcess
							?.environmentVariableCollections &&
							(Mt = (0, G.$eK)(
								this.shellLaunchConfig.attachPersistentProcess
									.environmentVariableCollections,
							));
						const Ut = this.m.createInstance(
							ae.$hIb,
							this.w,
							this.shellLaunchConfig?.cwd,
							Mt,
							this.shellLaunchConfig.attachPersistentProcess
								?.shellIntegrationNonce,
						);
						return (
							this.capabilities.add(Ut.capabilities),
							this.D(
								Ut.onProcessReady(async (ei) => {
									this.dc.fire(this),
										(this.ub = await this.getInitialCwd()),
										this.Ob ||
											((this.Ob = this.D(this.m.createInstance(xt))),
											this.D(
												this.Ob.onDidChangeLabel((mi) => {
													(this.N !== mi.title || this.Jb !== mi.description) &&
														((this.N = mi.title),
														(this.Jb = mi.description),
														this.fc.fire(this));
												}),
											)),
										this.Cc.name
											? this.ke(this.Cc.name, K.TitleEventSource.Api)
											: (setTimeout(() => {
													this.t.then((mi) => {
														this.Eb.value = mi.raw.onTitleChange((ii) =>
															this.Rd(ii),
														);
													});
												}),
												this.ke(
													this.Cc.executable,
													K.TitleEventSource.Process,
												));
								}),
							),
							this.D(Ut.onProcessExit((ei) => this.Md(ei))),
							this.D(
								Ut.onDidChangeProperty(({ type: ei, value: mi }) => {
									switch (ei) {
										case K.ProcessPropertyType.Cwd:
											(this.tb = mi), this.Ob?.refreshLabel(this);
											break;
										case K.ProcessPropertyType.InitialCwd:
											(this.ub = mi),
												(this.tb = this.ub),
												this.ke(this.title, K.TitleEventSource.Config),
												(this.Db =
													this.Cc.attachPersistentProcess?.icon ||
													this.Cc.icon),
												this.gc.fire({ instance: this, userInitiated: !1 });
											break;
										case K.ProcessPropertyType.Title:
											this.ke(mi ?? "", K.TitleEventSource.Process);
											break;
										case K.ProcessPropertyType.OverrideDimensions:
											this.setOverrideDimensions(mi, !0);
											break;
										case K.ProcessPropertyType.ResolvedShellLaunchConfig:
											this.fe(mi);
											break;
										case K.ProcessPropertyType.ShellType:
											this.setShellType(mi);
											break;
										case K.ProcessPropertyType.HasChildProcesses:
											this.uc.fire(mi);
											break;
										case K.ProcessPropertyType.UsedShellIntegrationInjection:
											this.Sb = !0;
											break;
									}
								}),
							),
							(this.zb.value = Ut.onProcessData((ei) =>
								this.Ab?.push(ei.data),
							)),
							this.D(Ut.onProcessReplayComplete(() => this.ec.fire())),
							this.D(Ut.onEnvironmentVariableInfoChanged((ei) => this.ge(ei))),
							this.D(
								Ut.onPtyDisconnect(() => {
									this.xterm && (this.xterm.raw.options.disableStdin = !0),
										this.statusList.add({
											id: $e.TerminalStatus.Disconnected,
											severity: B.Severity.Error,
											icon: a.$ak.debugDisconnect,
											tooltip: v.localize(10074, null),
										});
								}),
							),
							this.D(
								Ut.onPtyReconnect(() => {
									this.xterm && (this.xterm.raw.options.disableStdin = !1),
										this.statusList.remove($e.TerminalStatus.Disconnected);
								}),
							),
							Ut
						);
					}
					createProcessManager() {
						return this.Id();
					}
					async Jd() {
						if (this.isDisposed) return;
						this.Zc.getLastActiveWorkspaceRoot(f.Schemas.file)
							? (await this.Sd()) ||
								this.Md({ message: v.localize(10075, null) })
							: this.tb &&
								this.Pb &&
								this.tb !== this.Pb &&
								this.Md({ message: v.localize(10076, null, this.tb, this.Pb) }),
							this.P &&
								this.pb === 0 &&
								this.qb === 0 &&
								(this.ud(),
								this.xterm?.raw.resize(
									this.pb || Kt.DefaultCols,
									this.qb || Kt.DefaultRows,
								));
						const Ut = this.shellLaunchConfig.icon;
						await this.n
							.createProcess(
								this.Cc,
								this.pb || Kt.DefaultCols,
								this.qb || Kt.DefaultRows,
							)
							.then((ei) => {
								ei &&
									("message" in ei
										? this.Md(ei)
										: "injectedArgs" in ei && (this.vb = ei.injectedArgs));
							}),
							!this.isDisposed &&
								(this.xterm?.shellIntegration &&
									this.capabilities.add(
										this.xterm.shellIntegration.capabilities,
									),
								(Ut !== this.shellLaunchConfig.icon ||
									this.shellLaunchConfig.color) &&
									((this.Db =
										this.Cc.attachPersistentProcess?.icon || this.Cc.icon),
									this.gc.fire({ instance: this, userInitiated: !1 })));
					}
					registerMarker(Mt) {
						return this.xterm?.raw.registerMarker(Mt);
					}
					addBufferMarker(Mt) {
						this.capabilities
							.get(q.TerminalCapability.BufferMarkDetection)
							?.addMark(Mt);
					}
					scrollToMark(Mt, Ut, ei) {
						this.xterm?.markTracker.scrollToClosestMarker(Mt, Ut, ei);
					}
					async freePortKillProcess(Mt, Ut) {
						await this.n?.freePortKillProcess(Mt), this.runCommand(Ut, !1);
					}
					Kd(Mt) {
						const Ut = Mt.data.indexOf("\x1B]633;C\x07");
						Ut !== -1
							? Mt.trackCommit
								? (this.Ld(Mt.data.substring(0, Ut + 8)),
									(Mt.writePromise = new Promise((ei) =>
										this.Ld(Mt.data.substring(Ut + 8), ei),
									)))
								: (this.Ld(Mt.data.substring(0, Ut + 8)),
									this.Ld(Mt.data.substring(Ut + 8)))
							: Mt.trackCommit
								? (Mt.writePromise = new Promise((ei) => this.Ld(Mt.data, ei)))
								: this.Ld(Mt.data);
					}
					Ld(Mt, Ut) {
						this.hc.fire(Mt);
						const ei = ++this.z;
						this.xterm?.raw.write(Mt, () => {
							(this.C = ei),
								this.n.acknowledgeDataEvent(Mt.length),
								Ut?.(),
								this.ic.fire(Mt);
						});
					}
					async Md(Mt) {
						if (this.F) return;
						const Ut = Vt(
							Mt,
							this.shellLaunchConfig,
							this.n.processState,
							this.ub,
						);
						if (
							this.Sb &&
							this.n.processState === ge.ProcessState.KilledDuringLaunch &&
							Ut?.code !== 0
						) {
							this.Nd(Ut?.message), this.bc.fire(Mt);
							return;
						}
						(this.F = !0), await this.Od(), (this.I = Ut?.code);
						const ei = Ut?.message;
						this.Rc.debug(
							"Terminal process exit",
							"instanceId",
							this.instanceId,
							"code",
							this.I,
							"processState",
							this.n.processState,
						);
						const mi = this.waitOnExit;
						mi && this.n.processState !== ge.ProcessState.KilledByUser
							? this.t.then((ii) => {
									switch ((ei && ii.raw.write((0, J.$aIb)(ei)), typeof mi)) {
										case "string":
											ii.raw.write(
												(0, J.$aIb)(mi, { excludeLeadingNewLine: !0 }),
											);
											break;
										case "function":
											this.exitCode !== void 0 &&
												ii.raw.write(
													(0, J.$aIb)(mi(this.exitCode), {
														excludeLeadingNewLine: !0,
													}),
												);
											break;
									}
									(ii.raw.options.disableStdin = !0),
										ii.raw.textarea && this.Pd(ii.raw);
								})
							: (ei &&
									(this.n.processState === ge.ProcessState.KilledDuringLaunch ||
									this.Gc.config.showExitAlert
										? this.Lc.notify({
												message: ei,
												severity: B.Severity.Error,
												actions: { primary: [this.m.createInstance(se.$DUc)] },
											})
										: this.Rc.warn(ei)),
								this.dispose(K.TerminalExitReason.Process)),
							this.bc.fire(Mt),
							this.isDisposed && this.bc.dispose();
					}
					Nd(Mt) {
						(this.Cc.ignoreShellIntegration = !0),
							this.relaunch(),
							this.statusList.add({
								id: $e.TerminalStatus.ShellIntegrationAttentionNeeded,
								severity: B.Severity.Warning,
								icon: a.$ak.warning,
								tooltip: `${Mt} ` + v.localize(10077, null),
								hoverActions: [
									{
										commandId: ge.TerminalCommandId.ShellIntegrationLearnMore,
										label: v.localize(10078, null),
										run: () => {
											this.ad.open(
												"https://code.visualstudio.com/docs/editor/integrated-terminal#_shell-integration",
											);
										},
									},
									{
										commandId: "workbench.action.openSettings",
										label: v.localize(10079, null),
										run: () => {
											this.bd.executeCommand(
												"workbench.action.openSettings",
												"terminal.integrated.shellIntegration.enabled",
											);
										},
									},
								],
							}),
							this.$c.publicLog2("terminal/shellIntegrationFailureProcessExit");
					}
					Od() {
						if (this.z === this.C) return Promise.resolve();
						let Mt = 0;
						return new Promise((Ut) => {
							const ei = C.$igb(
								C.$Ogb().window,
								() => {
									(this.z === this.C || ++Mt === 5) && (ei.dispose(), Ut());
								},
								20,
							);
						});
					}
					Pd(Mt) {
						Mt.textarea &&
							!this.u &&
							(this.u = C.$0fb(Mt.textarea, "keypress", (Ut) => {
								this.u &&
									(this.u.dispose(),
									(this.u = void 0),
									this.dispose(K.TerminalExitReason.Process),
									Ut.preventDefault());
							}));
					}
					Qd(Mt, Ut) {
						if (!this.Cc.initialText) {
							Ut?.();
							return;
						}
						const ei =
							typeof this.Cc.initialText == "string"
								? this.Cc.initialText
								: this.Cc.initialText?.text;
						typeof this.Cc.initialText == "string" ||
						this.Cc.initialText.trailingNewLine
							? Mt.raw.writeln(ei, Ut)
							: Mt.raw.write(ei, Ut);
					}
					async reuseTerminal(Mt, Ut = !1) {
						this.u?.dispose(), (this.u = void 0);
						const ei = this.xterm;
						ei &&
							(Ut ||
								(await new Promise((mi) =>
									ei.raw.write(
										`
\x1B[G`,
										mi,
									),
								)),
							Mt.initialText &&
								((this.Cc.initialText = Mt.initialText),
								await new Promise((mi) => this.Qd(ei, mi))),
							this.F &&
								this.Cc.waitOnExit &&
								((ei.raw.options.disableStdin = !1), (this.F = !1)),
							Ut && ei.clearDecorations()),
							this.statusList.remove($e.TerminalStatus.RelaunchNeeded),
							Ut || (Mt.initialText = " "),
							(this.Cc = Mt),
							await this.n
								.relaunch(
									this.Cc,
									this.pb || Kt.DefaultCols,
									this.qb || Kt.DefaultRows,
									Ut,
								)
								.then((mi) => {
									mi &&
										("message" in mi
											? this.Md(mi)
											: "injectedArgs" in mi && (this.vb = mi.injectedArgs));
								});
					}
					relaunch() {
						this.reuseTerminal(this.Cc, !0);
					}
					Rd(Mt) {
						this.isTitleSetByProcess &&
							this.ke(Mt, K.TitleEventSource.Sequence);
					}
					async Sd() {
						return (
							(await this.Yc.requestWorkspaceTrust({
								message: v.localize(10080, null),
							})) === !0
						);
					}
					async Td() {
						if (
							(this.sc.fire(this),
							this.Qc.getValue(K.TerminalSettingId.CopyOnSelection))
						) {
							if (this.Ud === !1) return;
							this.hasSelection() && (await this.copySelection());
						}
					}
					overrideCopyOnSelection(Mt) {
						if (this.Ud !== void 0)
							throw new Error(
								"Cannot set a copy on selection override multiple times",
							);
						return (this.Ud = Mt), (0, o.$Yc)(() => (this.Ud = void 0));
					}
					async Vd() {
						if (
							!(
								this.isDisposed ||
								this.shellLaunchConfig.customPtyImplementation
							)
						)
							try {
								const Mt = await this.ie(K.ProcessPropertyType.Cwd);
								if (typeof Mt != "string")
									throw new Error(`cwd is not a string ${Mt}`);
							} catch (Mt) {
								if (
									Mt instanceof Error &&
									Mt.message ===
										"Cannot refresh property when process is not set"
								)
									return;
								throw Mt;
							}
					}
					updateConfig() {
						this.Xd(this.Gc.config.commandsToSkipShell),
							this.he(this.n.environmentVariableInfo);
					}
					async Wd() {
						this.n.setUnicodeVersion(this.Gc.config.unicodeVersion);
					}
					updateAccessibilitySupport() {
						this.xterm.raw.options.screenReaderMode =
							this.Tc.isScreenReaderOptimized();
					}
					Xd(Mt) {
						const Ut = Mt.filter((ei) => ei[0] === "-").map((ei) =>
							ei.slice(1),
						);
						this.L = ge.$web.filter((ei) => !Ut.includes(ei)).concat(Mt);
					}
					layout(Mt) {
						if (((this.Hb = Mt), this.disableLayout)) return;
						const Ut = new C.$pgb(Mt.width, Math.max(Mt.height - this.ld, 21));
						if (
							!(
								Ut.width <= 0 ||
								Ut.height <= 20 ||
								!this.vd(Ut.width, Ut.height)
							)
						) {
							this.Yd(), this.Bb.isOpen() || this.Bb.open();
							for (const mi of this.q.values())
								this.xterm
									? mi.layout?.(this.xterm, Ut)
									: this.t.then((ii) => mi.layout?.(ii, Ut));
						}
					}
					async Yd(Mt) {
						if (!this.xterm) return;
						let Ut = this.cols,
							ei = this.rows;
						if (this.H && this.wb) {
							const mi = this.xterm.getFont(),
								ii = this.Gc.config;
							(this.xterm.raw.options.letterSpacing = mi.letterSpacing),
								(this.xterm.raw.options.lineHeight = mi.lineHeight),
								(this.xterm.raw.options.fontSize = mi.fontSize),
								(this.xterm.raw.options.fontFamily = mi.fontFamily),
								(this.xterm.raw.options.fontWeight = ii.fontWeight),
								(this.xterm.raw.options.fontWeightBold = ii.fontWeightBold),
								this.ud(),
								(Ut = this.cols),
								(ei = this.rows),
								(this.wb = !1);
						}
						isNaN(Ut) ||
							isNaN(ei) ||
							((Ut !== this.xterm.raw.cols || ei !== this.xterm.raw.rows) &&
								((this.sb || this.rb) &&
									(await this.je(K.ProcessPropertyType.FixedDimensions, {
										cols: this.rb,
										rows: this.sb,
									})),
								this.mc.fire()),
							(hi.h = { cols: Ut, rows: ei }),
							this.$b.resize(Ut, ei, Mt ?? !1));
					}
					async Zd(Mt) {
						await this.n.setDimensions(Mt.cols, Mt.rows);
					}
					setShellType(Mt) {
						this.M !== Mt &&
							Mt &&
							((this.M = Mt), this.Ac.set(Mt?.toString()), this.yc.fire(Mt));
					}
					$d(Mt, Ut, ei) {
						const mi = [];
						if (Mt && Mt.textarea) {
							ei && ei.length > 0
								? mi.push(v.localize(10081, null, Ut, ei))
								: mi.push(v.localize(10082, null, Ut)),
								this.Tc.isScreenReaderOptimized() ||
									mi.push(v.localize(10083, null));
							const Dt = this.Kc.lookupKeybinding(
								Ve.AccessibilityCommandId.OpenAccessibilityHelp,
							)?.getLabel();
							this.Qc.getValue(Q.AccessibilityVerbositySettingId.Terminal) &&
								Dt &&
								mi.push(v.localize(10084, null, Dt)),
								Mt.textarea.setAttribute(
									"aria-label",
									mi.join(`
`),
								);
						}
					}
					ae(Mt, Ut) {
						if (!Mt) return this.Kb;
						switch (Ut) {
							case K.TitleEventSource.Process:
								if (this.n.os === s.OperatingSystem.Windows)
									Mt = b.$kc.parse(Mt).name;
								else {
									const ei = Mt.indexOf(" ");
									Mt.startsWith("/")
										? (Mt = b.$sc(Mt))
										: ei > -1 && (Mt = Mt.substring(0, ei));
								}
								this.Kb = Mt;
								break;
							case K.TitleEventSource.Api:
								(this.Mb = Mt), (this.Eb.value = void 0);
								break;
							case K.TitleEventSource.Sequence:
								(this.Lb = Mt),
									this.n.os === s.OperatingSystem.Windows &&
										Mt.match(/^[a-zA-Z]:\\.+\.[a-zA-Z]{1,3}/) &&
										(this.Lb = b.$kc.parse(Mt).name);
								break;
						}
						return (this.O = Ut), Mt;
					}
					setOverrideDimensions(Mt, Ut = !1) {
						this.xb &&
							this.xb.forceExactSize &&
							!Mt &&
							this.qb === 0 &&
							this.pb === 0 &&
							((this.pb = this.xb.cols), (this.qb = this.xb.rows)),
							(this.xb = Mt),
							Ut ? this.Yd(!0) : this.Yd();
					}
					async setFixedDimensions() {
						const Mt = await this.Vc.input({
							title: v.localize(10085, null),
							placeHolder:
								"Enter a number of columns or leave empty for automatic width",
							validateInput: async (ei) =>
								ei.length > 0 && !ei.match(/^\d+$/)
									? {
											content:
												"Enter a number or leave empty size automatically",
											severity: B.Severity.Error,
										}
									: void 0,
						});
						if (Mt === void 0) return;
						(this.rb = this.be(Mt)),
							this.Ob?.refreshLabel(this),
							this.lb.set(!!this.rb);
						const Ut = await this.Vc.input({
							title: v.localize(10086, null),
							placeHolder:
								"Enter a number of rows or leave empty for automatic height",
							validateInput: async (ei) =>
								ei.length > 0 && !ei.match(/^\d+$/)
									? {
											content:
												"Enter a number or leave empty size automatically",
											severity: B.Severity.Error,
										}
									: void 0,
						});
						Ut !== void 0 &&
							((this.sb = this.be(Ut)),
							this.Ob?.refreshLabel(this),
							await this.ce(),
							this.Yd(),
							this.focus());
					}
					be(Mt) {
						if (Mt === "") return;
						const Ut = parseInt(Mt);
						if (Ut <= 0) throw new Error(`Could not parse dimension "${Mt}"`);
						return Ut;
					}
					async toggleSizeToContentWidth() {
						if (this.xterm?.raw.buffer.active) {
							if (this.Qb)
								this.lb.set(!1),
									(this.rb = void 0),
									(this.sb = void 0),
									(this.Qb = !1),
									this.ud(),
									await this.Yd();
							else {
								const Mt = this.xterm
										? this.xterm.getFont()
										: this.Gc.getFont(C.getWindow(this.domElement)),
									Ut = Math.floor(Kt.MaxCanvasWidth / (Mt.charWidth ?? 20)),
									ei = Math.max(
										this.maxCols,
										Math.min(
											this.xterm.getLongestViewportWrappedLineLength(),
											Ut,
										),
									);
								ei > this.xterm.raw.cols && (this.rb = ei);
							}
							await this.ce(), this.Ob?.refreshLabel(this), this.focus();
						}
					}
					ce() {
						return this.rb || this.sb ? this.de() : this.ee();
					}
					async de() {
						const Mt = (
							this.xterm
								? this.xterm.getFont()
								: this.Gc.getFont(C.getWindow(this.domElement))
						).charWidth;
						if (
							!(!this.xterm?.raw.element || !this.P || !Mt || !this.rb) &&
							(this.ib.classList.add("fixed-dims"),
							(this.Qb = !0),
							this.ud(),
							await this.Yd(),
							this.lb.set(!0),
							this.jb ||
								((this.jb = this.D(
									new r.$8hb(this.ib, {
										vertical: l.ScrollbarVisibility.Hidden,
										horizontal: l.ScrollbarVisibility.Auto,
										useShadows: !1,
										scrollYToX: !1,
										consumeMouseWheelIfScrollbarIsNeeded: !1,
									}),
								)),
								this.P.appendChild(this.jb.getDomNode())),
							this.jb.setScrollDimensions({
								width: this.xterm.raw.element.clientWidth,
								scrollWidth: this.rb * Mt + 40,
							}),
							(this.jb.getDomNode().style.paddingBottom = "16px"),
							s.$l)
						)
							for (
								let Ut = this.xterm.raw.buffer.active.viewportY;
								Ut < this.xterm.raw.buffer.active.length;
								Ut++
							) {
								const ei = this.xterm.raw.buffer.active.getLine(Ut);
								ei._line.isWrapped = !1;
							}
					}
					async ee() {
						!this.P ||
							!this.jb ||
							(this.jb.getDomNode().remove(),
							this.jb.dispose(),
							(this.jb = void 0),
							this.ib.remove(),
							this.ib.classList.remove("fixed-dims"),
							this.P.appendChild(this.ib));
					}
					fe(Mt) {
						(this.Cc.args = Mt.args),
							(this.Cc.cwd = Mt.cwd),
							(this.Cc.executable = Mt.executable),
							(this.Cc.env = Mt.env);
					}
					ge(Mt) {
						Mt.requiresAction &&
							this.xterm?.raw.textarea?.setAttribute(
								"aria-label",
								v.localize(10087, null, this.w),
							),
							this.he(Mt);
					}
					async he(Mt) {
						if (!Mt) {
							this.statusList.remove($e.TerminalStatus.RelaunchNeeded),
								this.statusList.remove(
									$e.TerminalStatus.EnvironmentVariableInfoChangesActive,
								);
							return;
						}
						if (
							Mt.requiresAction &&
							this.Gc.config.environmentChangesRelaunch &&
							!this.n.hasWrittenData &&
							(!this.Cc.isFeatureTerminal ||
								(this.reconnectionProperties &&
									this.Qc.getValue("task.reconnection") === !0)) &&
							!this.Cc.customPtyImplementation &&
							!this.Cc.isExtensionOwnedTerminal &&
							!this.Cc.attachPersistentProcess &&
							!(
								this.n.remoteAuthority &&
								this.Gc.config.windowsEnableConpty &&
								(await this.n.getBackendOS()) === s.OperatingSystem.Windows
							)
						) {
							this.relaunch();
							return;
						}
						const Ut = (0, Le.$Oeb)(
							this.shellLaunchConfig.cwd,
							this.Wc,
							this.Zc,
						);
						this.statusList.add(Mt.getStatus({ workspaceFolder: Ut }));
					}
					async getInitialCwd() {
						return this.ub || (this.ub = this.n.initialCwd), this.ub;
					}
					async getCwd() {
						return this.capabilities.has(q.TerminalCapability.CwdDetection)
							? this.capabilities
									.get(q.TerminalCapability.CwdDetection)
									.getCwd()
							: this.capabilities.has(q.TerminalCapability.NaiveCwdDetection)
								? this.capabilities
										.get(q.TerminalCapability.NaiveCwdDetection)
										.getCwd()
								: this.n.initialCwd;
					}
					async ie(Mt) {
						return await this.processReady, this.n.refreshProperty(Mt);
					}
					async je(Mt, Ut) {
						return this.n.updateProperty(Mt, Ut);
					}
					async rename(Mt) {
						this.ke(Mt, K.TitleEventSource.Api);
					}
					ke(Mt, Ut) {
						const ei = !Mt;
						Mt = this.ae(Mt, Ut);
						const mi = Mt !== this.N;
						(this.N = Mt),
							this.Ob?.refreshLabel(this, ei),
							this.$d(this.xterm?.raw, this.w, this.N),
							mi && this.fc.fire(this);
					}
					async changeIcon(Mt) {
						if (Mt)
							return (
								(this.Db = Mt),
								this.gc.fire({ instance: this, userInitiated: !0 }),
								Mt
							);
						const Ut = this.m.createInstance(nt.$jVc),
							ei = await Ut.pickIcons();
						if ((Ut.dispose(), !!ei))
							return (
								(this.Db = ei),
								this.gc.fire({ instance: this, userInitiated: !0 }),
								ei
							);
					}
					async changeColor(Mt, Ut) {
						if (Mt)
							return (
								(this.shellLaunchConfig.color = Mt),
								this.gc.fire({ instance: this, userInitiated: !0 }),
								Mt
							);
						if (Ut) {
							(this.shellLaunchConfig.color = ""),
								this.gc.fire({ instance: this, userInitiated: !0 });
							return;
						}
						if (!this.sd()) return;
						const mi = this.Pc.getColorTheme(),
							ii = (0, oe.$Pnc)(mi),
							Dt = (0, oe.$Qnc)(mi),
							Jt = [];
						for (const $i of ii) {
							const Wt = (0, oe.$Onc)($i);
							Jt.push({
								label: `$(${a.$ak.circleFilled.id}) ${$i.replace("terminal.ansi", "")}`,
								id: $i,
								description: $i,
								iconClasses: [Wt],
							});
						}
						Jt.push({ type: "separator" });
						const si = { label: "Reset to default" };
						Jt.push(si);
						const Zt = [],
							ci = this.Vc.createQuickPick({ useSeparators: !0 });
						Zt.push(ci),
							(ci.items = Jt),
							(ci.matchOnDescription = !0),
							(ci.placeholder = v.localize(10088, null)),
							ci.show();
						const ri = await new Promise(($i) => {
							Zt.push(ci.onDidHide(() => $i(void 0))),
								Zt.push(ci.onDidAccept(() => $i(ci.selectedItems[0])));
						});
						return (
							(0, o.$Vc)(Zt),
							ri &&
								((this.shellLaunchConfig.color = ri.id),
								this.gc.fire({ instance: this, userInitiated: !0 })),
							ci.hide(),
							Dt.dispose(),
							ri?.id
						);
					}
					forceScrollbarVisibility() {
						this.ib.classList.add("force-scrollbar");
					}
					resetScrollbarVisibility() {
						this.ib.classList.remove("force-scrollbar");
					}
					setParentContextKeyService(Mt) {
						this.Ub.updateParent(Mt);
					}
					async handleMouseEvent(Mt, Ut) {
						if (
							C.$Ygb(Mt.target) &&
							(Mt.target.classList.contains("scrollbar") ||
								Mt.target.classList.contains("slider"))
						)
							return { cancelContextMenu: !0 };
						if (Mt.which === 2) {
							switch (this.Gc.config.middleClickBehavior) {
								case "paste":
									this.paste();
									break;
								case "default":
								default:
									this.focus();
									break;
							}
							return;
						}
						if (Mt.which === 3) {
							const ei = this.Gc.config.rightClickBehavior;
							if (ei === "nothing")
								return Mt.shiftKey ? void 0 : { cancelContextMenu: !0 };
							if (ei === "copyPaste" || ei === "paste") {
								if (ei === "copyPaste" && Mt.shiftKey) {
									(0, jt.$zUc)(C.$Ogb(), Mt, this, Ut, this.Ec);
									return;
								}
								return (
									ei === "copyPaste" && this.hasSelection()
										? (await this.copySelection(), this.clearSelection())
										: w.$Yfb.clipboard.readText
											? this.paste()
											: this.Lc.info(
													`This browser doesn't support the clipboard.readText API needed to trigger a paste, try ${s.$m ? "\u2318" : "Ctrl"}+V instead.`,
												),
									s.$m && setTimeout(() => this.clearSelection(), 0),
									{ cancelContextMenu: !0 }
								);
							}
						}
					}
				};
				(e.$oVc = Xe),
					Ne([(0, h.$fi)(50)], Xe.prototype, "xd", null),
					Ne([(0, h.$fi)(1e3)], Xe.prototype, "relaunch", null),
					Ne([(0, h.$fi)(2e3)], Xe.prototype, "Vd", null),
					(e.$oVc =
						Xe =
						hi =
							Ne(
								[
									j(3, L.$6j),
									j(4, ti.$Xxb),
									j(5, N.$Li),
									j(6, Z.$jIb),
									j(7, ge.$reb),
									j(8, lt.$lVc),
									j(9, Ke.$I8),
									j(10, R.$uZ),
									j(11, B.$4N),
									j(12, Je.$7Z),
									j(13, te.$HMb),
									j(14, T.$Vxb),
									j(15, Y.$iP),
									j(16, k.$gj),
									j(17, K.$YJ),
									j(18, x.$lq),
									j(19, S.$XK),
									j(20, z.$Bk),
									j(21, F.$DJ),
									j(22, Oe.$r8),
									j(23, ie.$Vi),
									j(24, Fe.$IY),
									j(25, ne.$qO),
									j(26, xe.$Feb),
									j(27, H.$km),
									j(28, U.$7rb),
									j(29, P.$ek),
									j(30, P.$ek),
									j(31, Se.$0zb),
									j(32, Me.$B7b),
									j(33, je.$d0b),
									j(34, rt.$5X),
									j(35, bt.$V7b),
									j(36, I.$Owb),
									j(37, _.$K1),
									j(38, kt.IComposerService),
								],
								Xe,
							));
				let It = class extends o.$1c {
					get onDropFile() {
						return this.h.event;
					}
					get onDropTerminal() {
						return this.j.event;
					}
					constructor(Mt, Ut, ei, mi) {
						super(),
							(this.m = Mt),
							(this.n = Ut),
							(this.q = ei),
							(this.s = mi),
							(this.h = this.D(new n.$re())),
							(this.j = this.D(new n.$re())),
							this.D((0, o.$Yc)(() => this.t()));
					}
					t() {
						this.f?.remove(), (this.f = void 0);
					}
					onDragEnter(Mt) {
						if (
							(0, D.$mzb)(
								Mt,
								E.$Ohb.FILES,
								E.$Ohb.RESOURCES,
								Z.TerminalDataTransfers.Terminals,
								D.$hzb.FILES,
							)
						) {
							if (
								(this.f ||
									((this.f = document.createElement("div")),
									this.f.classList.add("terminal-drop-overlay")),
								(0, D.$mzb)(Mt, Z.TerminalDataTransfers.Terminals))
							) {
								const Ut = this.u(Mt);
								this.f.classList.toggle("drop-before", Ut === "before"),
									this.f.classList.toggle("drop-after", Ut === "after");
							}
							this.f.parentElement || this.m.appendChild(this.f);
						}
					}
					onDragLeave(Mt) {
						this.t();
					}
					onDragEnd(Mt) {
						this.t();
					}
					onDragOver(Mt) {
						if (!(!Mt.dataTransfer || !this.f)) {
							if ((0, D.$mzb)(Mt, Z.TerminalDataTransfers.Terminals)) {
								const Ut = this.u(Mt);
								this.f.classList.toggle("drop-before", Ut === "before"),
									this.f.classList.toggle("drop-after", Ut === "after");
							}
							this.f.style.opacity = "1";
						}
					}
					async onDrop(Mt) {
						if ((this.t(), !Mt.dataTransfer)) return;
						const Ut = (0, ye.$VUc)(Mt);
						if (Ut) {
							for (const Dt of Ut) {
								const Jt = this.u(Mt);
								this.j.fire({ uri: Dt, side: Jt });
							}
							return;
						}
						let ei;
						const mi = Mt.dataTransfer.getData(E.$Ohb.RESOURCES);
						mi && (ei = y.URI.parse(JSON.parse(mi)[0]));
						const ii = Mt.dataTransfer.getData(D.$hzb.FILES);
						!ei && ii && (ei = y.URI.file(JSON.parse(ii)[0])),
							!ei &&
								Mt.dataTransfer.files.length > 0 &&
								this.s.getPathForFile(Mt.dataTransfer.files[0]) &&
								(ei = y.URI.file(
									this.s.getPathForFile(Mt.dataTransfer.files[0]),
								)),
							ei && this.h.fire(ei);
					}
					u(Mt) {
						const Ut = this.m;
						if (!Ut) return "after";
						const ei = Ut.getBoundingClientRect();
						return this.w() === m.Orientation.HORIZONTAL
							? Mt.clientX - ei.left < ei.width / 2
								? "before"
								: "after"
							: Mt.clientY - ei.top < ei.height / 2
								? "before"
								: "after";
					}
					w() {
						const Mt = this.n.getPanelPosition();
						return this.q.getViewLocationById(ge.$geb) ===
							_.ViewContainerLocation.Panel && (0, He.$nEb)(Mt)
							? m.Orientation.HORIZONTAL
							: m.Orientation.VERTICAL;
					}
				};
				It = Ne([j(1, He.$mEb), j(2, _.$K1), j(3, gt.$asb)], It);
				var Lt;
				(function (Gt) {
					(Gt.Title = "title"), (Gt.Description = "description");
				})(Lt || (Lt = {}));
				let xt = class extends o.$1c {
					get title() {
						return this.f;
					}
					get description() {
						return this.h;
					}
					constructor(Mt, Ut, ei) {
						super(),
							(this.m = Mt),
							(this.n = Ut),
							(this.q = ei),
							(this.f = ""),
							(this.h = ""),
							(this.j = this.D(new n.$re())),
							(this.onDidChangeLabel = this.j.event);
					}
					refreshLabel(Mt, Ut) {
						(this.f = this.computeLabel(
							Mt,
							this.n.config.tabs.title,
							Lt.Title,
							Ut,
						)),
							(this.h = this.computeLabel(
								Mt,
								this.n.config.tabs.description,
								Lt.Description,
							)),
							(this.f !== Mt.title || this.h !== Mt.description || Ut) &&
								this.j.fire({ title: this.f, description: this.h });
					}
					computeLabel(Mt, Ut, ei, mi) {
						const ii =
								Mt.shellLaunchConfig.attachPersistentProcess?.type ||
								Mt.shellLaunchConfig.type,
							Dt = {
								cwd: Mt.cwd || Mt.initialCwd || "",
								cwdFolder: "",
								workspaceFolderName: Mt.workspaceFolder?.name,
								workspaceFolder: Mt.workspaceFolder
									? b.$sc(Mt.workspaceFolder.uri.fsPath)
									: void 0,
								local: ii === "Local" ? Ze.$hUc.typeLocal : void 0,
								process: Mt.processName,
								sequence: Mt.sequence,
								task: ii === "Task" ? Ze.$hUc.typeTask : void 0,
								fixedDimensions: Mt.fixedCols
									? Mt.fixedRows
										? `\u2194${Mt.fixedCols} \u2195${Mt.fixedRows}`
										: `\u2194${Mt.fixedCols}`
									: Mt.fixedRows
										? `\u2195${Mt.fixedRows}`
										: "",
								separator: { label: this.n.config.tabs.separator },
							};
						if (
							((Dt.workspaceFolderName =
								Mt.workspaceFolder?.name ?? Dt.workspaceFolder),
							(Ut = Ut.trim()),
							!Ut)
						)
							return (ei === Lt.Title && Mt.processName) || "";
						if (!mi && Mt.staticTitle && ei === Lt.Title)
							return (
								Mt.staticTitle.replace(/[\n\r\t]/g, "") ||
								Dt.process?.replace(/[\n\r\t]/g, "") ||
								""
							);
						const Jt =
								Mt.capabilities.has(q.TerminalCapability.CwdDetection) ||
								Mt.capabilities.has(q.TerminalCapability.NaiveCwdDetection),
							Zt = this.q.getWorkspace().folders.length > 1;
						if (
							Dt.cwd &&
							Jt &&
							(!Mt.shellLaunchConfig.isFeatureTerminal || ei === Lt.Title)
						) {
							const ri = y.URI.from({
								scheme: Mt.workspaceFolder?.uri.scheme || f.Schemas.file,
								path: Mt.cwd ? b.$pc(Mt.cwd) : void 0,
							});
							let $i = !1;
							if (Zt) $i = !0;
							else if (Mt.workspaceFolder?.uri) {
								const Wt = this.m.hasCapability(
									Mt.workspaceFolder.uri,
									M.FileSystemProviderCapabilities.PathCaseSensitive,
								);
								$i =
									ri.fsPath.localeCompare(
										Mt.workspaceFolder.uri.fsPath,
										void 0,
										{ sensitivity: Wt ? "case" : "base" },
									) !== 0;
							}
							$i && (Dt.cwdFolder = b.$sc(Dt.cwd));
						}
						const ci = (0, p.$BO)(Ut, Dt)
							.replace(/[\n\r\t]/g, "")
							.trim();
						return ci === "" && ei === Lt.Title ? Mt.processName || "" : ci;
					}
				};
				(e.$pVc = xt),
					(e.$pVc = xt = Ne([j(0, M.$ll), j(1, Z.$jIb), j(2, ie.$Vi)], xt));
				function Vt(Gt, Mt, Ut, ei) {
					if (Gt === void 0 || Gt === 0) return { code: Gt, message: void 0 };
					const mi = typeof Gt == "number" ? Gt : Gt.code;
					let ii;
					switch (typeof Gt) {
						case "number": {
							let Dt;
							Mt.executable &&
								((Dt = Mt.executable),
								typeof Mt.args == "string"
									? (Dt += ` ${Mt.args}`)
									: Mt.args &&
										Mt.args.length &&
										(Dt += Mt.args.map((Jt) => ` '${Jt}'`).join())),
								Ut === ge.ProcessState.KilledDuringLaunch
									? Dt
										? (ii = v.localize(10089, null, Dt, mi))
										: (ii = v.localize(10090, null, mi))
									: Dt
										? (ii = v.localize(10091, null, Dt, mi))
										: (ii = v.localize(10092, null, mi));
							break;
						}
						case "object": {
							if (Gt.message.toString().includes("Could not find pty with id"))
								break;
							let Dt = Gt.message;
							const Jt = Gt.message.match(/.*error code:\s*(\d+).*$/);
							if (Jt)
								switch (Jt.length > 1 ? parseInt(Jt[1]) : void 0) {
									case 5:
										Dt = `Access was denied to the path containing your executable "${Mt.executable}". Manage and change your permissions to get this to work`;
										break;
									case 267:
										Dt = `Invalid starting directory "${ei}", review your terminal.integrated.cwd setting`;
										break;
									case 1260:
										Dt =
											"Windows cannot open this program because it has been prevented by a software restriction policy. For more information, open Event Viewer or contact your system Administrator";
										break;
								}
							ii = v.localize(10093, null, Dt);
							break;
						}
					}
					return { code: mi, message: ii };
				}
				let Bt = class {
					constructor(Mt, Ut) {
						(this.d = Mt), (this.f = Ut);
					}
					getBackgroundColor(Mt) {
						const Ut = Mt.getColor(be.$iHb);
						return (
							Ut ||
							(this.d.target === K.TerminalLocation.Editor
								? Mt.getColor(W.$8P)
								: this.f.getViewLocationById(ge.$geb) ===
										_.ViewContainerLocation.Panel
									? Mt.getColor(ee.$qFb)
									: Mt.getColor(ee.$wGb))
						);
					}
				};
				(e.$rVc = Bt), (e.$rVc = Bt = Ne([j(1, _.$K1)], Bt));
			},
		),
		