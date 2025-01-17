import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../base/common/uri.js';
import '../../base/common/errors.js';
import '../../base/common/objects.js';
import '../../base/browser/dom.js';
import '../../base/common/actions.js';
import '../../platform/files/common/files.js';
import '../common/editor.js';
import '../services/editor/common/editorService.js';
import '../../platform/telemetry/common/telemetry.js';
import '../../platform/window/common/window.js';
import '../services/title/browser/titleService.js';
import '../services/themes/common/workbenchThemeService.js';
import '../../platform/window/electron-sandbox/window.js';
import '../../base/browser/browser.js';
import '../../platform/commands/common/commands.js';
import '../../base/parts/sandbox/electron-sandbox/globals.js';
import '../services/workspaces/common/workspaceEditing.js';
import '../../platform/actions/common/actions.js';
import '../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../base/common/async.js';
import '../../base/common/lifecycle.js';
import '../services/lifecycle/common/lifecycle.js';
import '../services/integrity/common/integrity.js';
import '../../base/common/platform.js';
import '../../platform/product/common/productService.js';
import '../../platform/notification/common/notification.js';
import '../../platform/keybinding/common/keybinding.js';
import '../services/environment/electron-sandbox/environmentService.js';
import '../../platform/accessibility/common/accessibility.js';
import '../../platform/workspace/common/workspace.js';
import '../../base/common/arrays.js';
import '../../platform/configuration/common/configuration.js';
import '../../platform/storage/common/storage.js';
import '../../base/common/types.js';
import '../../platform/opener/common/opener.js';
import '../../base/common/network.js';
import '../../platform/native/common/native.js';
import '../../base/common/path.js';
import '../../platform/tunnel/common/tunnel.js';
import '../services/layout/browser/layoutService.js';
import '../services/workingCopy/common/workingCopyService.js';
import '../services/workingCopy/common/workingCopy.js';
import '../services/filesConfiguration/common/filesConfigurationService.js';
import '../../base/common/event.js';
import '../../platform/remote/common/remoteAuthorityResolver.js';
import '../services/editor/common/editorGroupsService.js';
import '../../platform/dialogs/common/dialogs.js';
import '../../platform/log/common/log.js';
import '../../platform/instantiation/common/instantiation.js';
import '../browser/editor.js';
import '../../platform/ipc/electron-sandbox/services.js';
import '../../platform/progress/common/progress.js';
import '../../base/common/errorMessage.js';
import '../../platform/label/common/label.js';
import '../../base/common/resources.js';
import '../services/banner/browser/bannerService.js';
import '../../base/common/codicons.js';
import '../../platform/uriIdentity/common/uriIdentity.js';
import '../services/preferences/common/preferences.js';
import '../services/utilityProcess/electron-sandbox/utilityProcessWorkerWorkbenchService.js';
import '../services/onFirstStartup/electron-sandbox/onFirstStartupService.js';
import '../services/driver/electron-sandbox/driver.js';
import '../../base/browser/window.js';
import '../browser/window.js';
import '../services/host/browser/host.js';
import '../services/statusbar/browser/statusbar.js';
import '../../base/browser/ui/actionbar/actionbar.js';
import '../../base/common/themables.js';
import '../common/contributions.js';
import '../common/configuration.js';
import '../../platform/hover/browser/hover.js';
import '../../base/common/amd.js';
import '../../css!vs/workbench/electron-sandbox/media/window.js';
define(
			de[1951],
			he([
				1, 0, 4, 9, 29, 82, 7, 50, 22, 44, 18, 32, 253, 713, 333, 676, 139, 31,
				320, 449, 11, 92, 15, 3, 52, 1297, 12, 62, 40, 39, 151, 91, 25, 24, 10,
				21, 28, 41, 23, 110, 54, 374, 96, 227, 334, 170, 6, 211, 66, 57, 34, 5,
				192, 230, 84, 163, 73, 19, 823, 14, 68, 131, 1904, 4054, 3451, 75, 1833,
				87, 166, 105, 26, 55, 224, 72, 455, 2536,
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
			) {
				"use strict";
				var Oe;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ocd = void 0);
				let xe = (Oe = class extends ue.$yEb {
					constructor(
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
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
					) {
						super(ye.$Bfb, void 0, Lt, Ve),
							(this.t = Je),
							(this.u = Te),
							(this.w = Ee),
							(this.y = Ie),
							(this.z = Be),
							(this.C = Se),
							(this.F = ke),
							(this.G = Ue),
							(this.H = qe),
							(this.I = Ae),
							(this.J = Me),
							(this.L = De),
							(this.M = Re),
							(this.N = je),
							(this.O = Ve),
							(this.P = Ze),
							(this.Q = et),
							(this.R = rt),
							(this.S = ft),
							(this.U = bt),
							(this.W = nt),
							(this.X = lt),
							(this.Y = ct),
							(this.Z = gt),
							(this.$ = ht),
							(this.ab = Rt),
							(this.bb = Nt),
							(this.cb = jt),
							(this.db = ti),
							(this.eb = kt),
							(this.fb = hi),
							(this.gb = Kt),
							(this.hb = di),
							(this.ib = Ye),
							(this.jb = ze),
							(this.kb = Xe),
							(this.lb = It),
							(this.n = this.D(new $.$Zc())),
							(this.q = this.D(new y.$Yh(() => this.Lb(), 100))),
							(this.r = []),
							(this.s = !1),
							(this.Gb = this.D(new $.$Zc())),
							(this.Pb = new Map()),
							(this.Qb = this.Rb()),
							this.lb.activate(),
							this.mb(),
							this.Ab();
					}
					mb() {
						this.D((0, C.$0fb)(ye.$Bfb, C.$$gb.RESIZE, () => this.W.layout())),
							this.D(this.t.onDidActiveEditorChange(() => this.Ib()));
						for (const Te of [C.$$gb.DRAG_OVER, C.$$gb.DROP])
							this.D(
								(0, C.$0fb)(ye.$Bfb.document.body, Te, (Ee) => {
									C.$ahb.stop(Ee);
								}),
							);
						f.$P.on("vscode:runAction", async (Te, Ee) => {
							const Ie = Ee.args || [];
							if (Ee.from === "touchbar") {
								const Be = this.t.activeEditor;
								if (Be) {
									const Se = r.$A1.getOriginalUri(Be, {
										supportSideBySide: r.SideBySideEditor.PRIMARY,
									});
									Se && Ie.push(Se);
								}
							} else Ie.push({ from: Ee.from });
							try {
								await this.F.executeCommand(Ee.id, ...Ie),
									this.H.publicLog2("workbenchActionExecuted", {
										id: Ee.id,
										from: Ee.from,
									});
							} catch (Be) {
								this.C.error(Be);
							}
						}),
							f.$P.on("vscode:runKeybinding", (Te, Ee) => {
								const Ie = (0, C.$Jgb)();
								Ie &&
									this.G.dispatchByUserSettingsLabel(Ee.userSettingsLabel, Ie);
							}),
							f.$P.on("vscode:reportError", (Te, Ee) => {
								Ee && (0, w.$4)(JSON.parse(Ee));
							}),
							f.$P.on("vscode:reportSharedProcessCrash", (Te, Ee) => {
								this.C.prompt(
									P.Severity.Error,
									(0, t.localize)(11903, null),
									[
										{
											label: (0, t.localize)(11904, null),
											run: () => this.S.relaunch(),
										},
									],
									{ priority: P.NotificationPriority.URGENT },
								);
							}),
							f.$P.on("vscode:openFiles", (Te, Ee) => {
								this.Mb(Ee);
							}),
							f.$P.on("vscode:addFolders", (Te, Ee) => {
								this.Kb(Ee);
							}),
							f.$P.on("vscode:showInfoMessage", (Te, Ee) => {
								this.C.info(Ee);
							}),
							f.$P.on("vscode:showResolveShellEnvError", (Te, Ee) => {
								this.C.prompt(P.Severity.Error, Ee, [
									{
										label: (0, t.localize)(11905, null),
										run: () => this.S.relaunch(),
									},
									{
										label: (0, t.localize)(11906, null),
										run: () =>
											this.jb.openUserSettings({
												query: "application.shellEnvironmentResolutionTimeout",
											}),
									},
									{
										label: (0, t.localize)(11907, null),
										run: () =>
											this.R.open(
												"https://go.microsoft.com/fwlink/?linkid=2149667",
											),
									},
								]);
							}),
							f.$P.on("vscode:showCredentialsError", (Te, Ee) => {
								this.C.prompt(
									P.Severity.Error,
									(0, t.localize)(11908, null, Ee),
									[
										{
											label: (0, t.localize)(11909, null),
											run: () =>
												this.R.open(
													"https://go.microsoft.com/fwlink/?linkid=2190713",
												),
										},
									],
								);
							}),
							f.$P.on("vscode:showTranslatedBuildWarning", () => {
								this.C.prompt(
									P.Severity.Warning,
									(0, t.localize)(11910, null, this.Z.nameLong),
									[
										{
											label: (0, t.localize)(11911, null),
											run: () => {
												const Te = this.Z.quality;
												this.R.open(
													Te === "stable"
														? "https://code.visualstudio.com/docs/?dv=osx"
														: "https://code.visualstudio.com/docs/?dv=osx&build=insiders",
												);
											},
										},
									],
									{ priority: P.NotificationPriority.URGENT },
								);
							}),
							f.$P.on("vscode:showArgvParseWarning", (Te, Ee) => {
								this.C.prompt(
									P.Severity.Warning,
									(0, t.localize)(11912, null),
									[
										{
											label: (0, t.localize)(11913, null),
											run: () =>
												this.t.openEditor({ resource: this.O.argvResource }),
										},
									],
									{ priority: P.NotificationPriority.URGENT },
								);
							}),
							f.$P.on("vscode:enterFullScreen", () => (0, p.$Lfb)(!0, ye.$Bfb)),
							f.$P.on("vscode:leaveFullScreen", () => (0, p.$Lfb)(!1, ye.$Bfb)),
							f.$P.on(
								"vscode:openProxyAuthenticationDialog",
								async (Te, Ee) => {
									const Ie = "window.rememberProxyCredentials",
										Be = this.bb.getBoolean(Ie, R.StorageScope.APPLICATION),
										Se = await this.ab.input({
											type: "warning",
											message: (0, t.localize)(11914, null),
											primaryButton: (0, t.localize)(11915, null),
											inputs: [
												{
													placeholder: (0, t.localize)(11916, null),
													value: Ee.username,
												},
												{
													placeholder: (0, t.localize)(11917, null),
													type: "password",
													value: Ee.password,
												},
											],
											detail: (0, t.localize)(
												11918,
												null,
												`${Ee.authInfo.host}:${Ee.authInfo.port}`,
											),
											checkbox: {
												label: (0, t.localize)(11919, null),
												checked: Be,
											},
										});
									if (!Se.confirmed || !Se.values) f.$P.send(Ee.replyChannel);
									else {
										Se.checkboxChecked
											? this.bb.store(
													Ie,
													!0,
													R.StorageScope.APPLICATION,
													R.StorageTarget.MACHINE,
												)
											: this.bb.remove(Ie, R.StorageScope.APPLICATION);
										const [ke, Ue] = Se.values;
										f.$P.send(Ee.replyChannel, {
											username: ke,
											password: Ue,
											remember: !!Se.checkboxChecked,
										});
									}
								},
							),
							f.$P.on("vscode:accessibilitySupportChanged", (Te, Ee) => {
								this.P.setAccessibilitySupport(
									Ee
										? D.AccessibilitySupport.Enabled
										: D.AccessibilitySupport.Disabled,
								);
							}),
							f.$P.on("vscode:configureAllowedUNCHost", async (Te, Ee) => {
								if (!I.$l) return;
								const Ie = new Set(),
									Be = this.w.getValue("security.allowedUNCHosts") ?? [];
								if (Array.isArray(Be))
									for (const Se of Be) typeof Se == "string" && Ie.add(Se);
								Ie.has(Ee) ||
									(Ie.add(Ee),
									await (0, be.$t6)(Ce.$B6.ID).ready,
									this.w.updateValue(
										"security.allowedUNCHosts",
										[...Ie.values()],
										A.ConfigurationTarget.USER,
									));
							}),
							f.$P.on("vscode:disablePromptForProtocolHandling", (Te, Ee) => {
								const Ie =
									Ee === "local"
										? "security.promptForLocalFileProtocolHandling"
										: "security.promptForRemoteFileProtocolHandling";
								this.w.updateValue(Ie, !1);
							}),
							this.D(
								this.w.onDidChangeConfiguration((Te) => {
									Te.affectsConfiguration("window.zoomLevel") ||
									(Te.affectsConfiguration("window.zoomPerWindow") &&
										this.w.getValue("window.zoomPerWindow") === !1)
										? this.Vb()
										: (Te.affectsConfiguration("keyboard.touchbar.enabled") ||
												Te.affectsConfiguration("keyboard.touchbar.ignored")) &&
											this.Ib();
								}),
							),
							this.D((0, p.$Ifb)((Te) => this.Sb(Te)));
						for (const Te of this.u.parts) this.Tb(Te);
						this.D(this.u.onDidCreateAuxiliaryEditorPart((Te) => this.Tb(Te))),
							this.D(
								K.Event.debounce(
									this.t.onDidVisibleEditorsChange,
									() => {},
									0,
									void 0,
									void 0,
									void 0,
									this.B,
								)(() => this.yb()),
							);
						const Je = this.O.filesToWait;
						if (
							(Je &&
								this.Nb(
									Je.waitMarkerFileUri,
									(0, N.$Lb)(Je.paths.map((Te) => Te.fileUri)),
								),
							I.$m)
						) {
							for (const Te of this.u.parts) this.nb(Te);
							this.D(
								this.u.onDidCreateAuxiliaryEditorPart((Te) => this.nb(Te)),
							);
						}
						I.$m &&
							!(0, h.$yY)(this.w) &&
							this.D(
								K.Event.runAndSubscribe(
									this.W.onDidAddContainer,
									({ container: Te, disposables: Ee }) => {
										const Ie = (0, C.getWindow)(Te),
											Be = Ie.vscodeWindowId,
											Se = (0, O.$wg)(
												this.W.getContainer(Ie, H.Parts.TITLEBAR_PART),
											);
										Ee.add(
											(0, C.$0fb)(Se, C.$$gb.DBLCLICK, (ke) => {
												C.$ahb.stop(ke),
													this.S.handleTitleDoubleClick({ targetWindowId: Be });
											}),
										);
									},
									{ container: this.W.mainContainer, disposables: this.B },
								),
							),
							this.D(
								this.X.onDidChangeDirty((Te) => {
									const Ee = Te.isDirty();
									(Ee &&
										!(Te.capabilities & V.WorkingCopyCapabilities.Untitled) &&
										this.Y.hasShortAutoSaveDelay(Te.resource)) ||
										this.vb(Ee ? !0 : void 0);
								}),
							),
							this.vb(void 0),
							this.D(
								K.Event.any(
									K.Event.map(
										K.Event.filter(
											this.S.onDidMaximizeWindow,
											(Te) => !!(0, C.hasWindow)(Te),
										),
										(Te) => ({ maximized: !0, windowId: Te }),
									),
									K.Event.map(
										K.Event.filter(
											this.S.onDidUnmaximizeWindow,
											(Te) => !!(0, C.hasWindow)(Te),
										),
										(Te) => ({ maximized: !1, windowId: Te }),
									),
								)((Te) =>
									this.W.updateWindowMaximizedState(
										(0, C.getWindowById)(Te.windowId).window,
										Te.maximized,
									),
								),
							),
							this.W.updateWindowMaximizedState(
								ye.$Bfb,
								this.O.window.maximized ?? !1,
							),
							this.D(
								this.W.onDidChangePanelPosition((Te) =>
									this.xb((0, H.$pEb)(Te)),
								),
							),
							this.xb(this.W.getPanelPosition()),
							this.D(this.M.onBeforeShutdown((Te) => this.pb(Te))),
							this.D(this.M.onBeforeShutdownError((Te) => this.rb(Te))),
							this.D(this.M.onWillShutdown((Te) => this.sb(Te)));
					}
					nb(Je) {
						const Te = new $.$Zc();
						K.Event.once(Je.onWillDispose)(() => Te.dispose());
						const Ee = this.u
							.getScopedInstantiationService(Je)
							.invokeFunction((Ie) => Ie.get(u.$IY));
						Te.add(Ee.onDidActiveEditorChange(() => this.ob(Ee, Je.windowId)));
					}
					ob(Je, Te) {
						const Ee = r.$A1.getOriginalUri(Je.activeEditor, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
							filterByScheme: U.Schemas.file,
						});
						this.S.setRepresentedFilename(Ee?.fsPath ?? "", {
							targetWindowId: Te,
						}),
							Te === ye.$Bfb.vscodeWindowId && this.zb(Ee?.fsPath);
					}
					pb({ veto: Je, reason: Te }) {
						if (Te === v.ShutdownReason.CLOSE) {
							const Ee = this.w.getValue("window.confirmBeforeClose"),
								Ie =
									Ee === "always" ||
									(Ee === "keyboardOnly" &&
										C.$Fhb.getInstance().isModifierPressed);
							if (Ie)
								return Je(
									(async () => {
										let Be = Te;
										Te === v.ShutdownReason.CLOSE &&
											!I.$m &&
											(await this.S.getWindowCount()) === 1 &&
											(Be = v.ShutdownReason.QUIT);
										let Se = !0;
										return (
											Ie &&
												(Se = await this.db.invokeFunction((ke) =>
													Oe.confirmOnShutdown(ke, Be),
												)),
											Se && this.qb(Te),
											!Se
										);
									})(),
									"veto.confirmBeforeClose",
								);
						}
						this.qb(Te);
					}
					qb(Je) {
						this.fb.withProgress(
							{
								location: _.ProgressLocation.Window,
								delay: 800,
								title: this.tb(Je, !1),
							},
							() =>
								K.Event.toPromise(
									K.Event.any(
										this.M.onWillShutdown,
										this.M.onShutdownVeto,
										this.ab.onWillShowDialog,
									),
								),
						);
					}
					rb({ error: Je, reason: Te }) {
						this.ab.error(
							this.tb(Te, !0),
							(0, t.localize)(11920, null, (0, te.$xj)(Je)),
						);
					}
					sb({ reason: Je, force: Te, joiners: Ee }) {
						const Ie = new y.$Yh(() => {
							const Be = Ee();
							this.fb.withProgress(
								{
									location: _.ProgressLocation.Dialog,
									buttons: [this.ub(Je)],
									cancellable: !1,
									sticky: !0,
									title: this.tb(Je, !1),
									detail:
										Be.length > 0
											? (0, t.localize)(
													11921,
													null,
													Be.map((Se) => `- ${Se.label}`).join(`
`),
												)
											: void 0,
								},
								() => K.Event.toPromise(this.M.onDidShutdown),
								() => {
									Te();
								},
							);
						}, 1200);
						Ie.schedule(),
							K.Event.once(this.M.onDidShutdown)(() => Ie.dispose());
					}
					tb(Je, Te) {
						if (Te)
							switch (Je) {
								case v.ShutdownReason.CLOSE:
									return (0, t.localize)(11922, null);
								case v.ShutdownReason.QUIT:
									return (0, t.localize)(11923, null);
								case v.ShutdownReason.RELOAD:
									return (0, t.localize)(11924, null);
								case v.ShutdownReason.LOAD:
									return (0, t.localize)(11925, null);
							}
						switch (Je) {
							case v.ShutdownReason.CLOSE:
								return (0, t.localize)(11926, null);
							case v.ShutdownReason.QUIT:
								return (0, t.localize)(11927, null);
							case v.ShutdownReason.RELOAD:
								return (0, t.localize)(11928, null);
							case v.ShutdownReason.LOAD:
								return (0, t.localize)(11929, null);
						}
					}
					ub(Je) {
						switch (Je) {
							case v.ShutdownReason.CLOSE:
								return (0, t.localize)(11930, null);
							case v.ShutdownReason.QUIT:
								return (0, t.localize)(11931, null);
							case v.ShutdownReason.RELOAD:
								return (0, t.localize)(11932, null);
							case v.ShutdownReason.LOAD:
								return (0, t.localize)(11933, null);
						}
					}
					vb(Je) {
						let Te;
						typeof Je == "boolean" ? (Te = Je) : (Te = this.X.hasDirty),
							((!this.s && Te) || (this.s && !Te)) &&
								((this.s = Te), this.S.setDocumentEdited(Te));
					}
					wb(Je = this.W.getPanelPosition()) {
						return Je === H.Position.LEFT || Je === H.Position.RIGHT
							? h.$rY.WIDTH_WITH_VERTICAL_PANEL
							: h.$rY.WIDTH;
					}
					xb(Je) {
						const Te = this.wb(Je);
						this.S.setMinimumSize(Te, void 0);
					}
					yb() {
						if (this.w.getValue("window.closeWhenEmpty") || this.O.args.wait)
							for (const Te of this.u.parts)
								Te.groups.some((Ee) => !Ee.isEmpty) ||
									(Te === this.u.mainPart &&
										(this.Q.getWorkbenchState() !== M.WorkbenchState.EMPTY ||
											this.f.isExtensionDevelopment ||
											this.t.visibleEditors.length > 0)) ||
									(Te === this.u.mainPart
										? this.S.closeWindow()
										: Te.removeGroup(Te.activeGroup));
					}
					zb(Je) {
						if ((this.n.clear(), !Je || (0, h.$yY)(this.w))) return;
						const Te = Je.split(F.$lc.sep);
						for (let Ee = Te.length; Ee > 0; Ee--) {
							const Ie = Ee === Te.length;
							let Be = Ee;
							Ie || Be++;
							const Se = i.URI.file(Te.slice(0, Be).join(F.$lc.sep));
							let ke;
							Ie
								? (ke = this.gb.getUriBasenameLabel(Se))
								: (ke = this.gb.getUriBasenameLabel((0, Z.$mh)(Se)));
							const Ue = `workbench.action.revealPathInFinder${Ee}`;
							this.n.add(
								o.$fk.registerCommand(Ue, () =>
									this.S.showItemInFolder(Se.fsPath),
								),
							),
								this.n.add(
									s.$ZX.appendMenuItem(s.$XX.TitleBarTitleContext, {
										command: { id: Ue, title: ke || F.$lc.sep },
										order: -Ee,
										group: "1_file",
									}),
								);
						}
					}
					Ab() {
						this.Eb(),
							this.M.when(v.LifecyclePhase.Ready).then(() =>
								this.S.notifyReady(),
							),
							this.M.when(v.LifecyclePhase.Restored).then(() => {
								this.eb.notifyRestored(), this.kb.notifyRestored();
							}),
							this.Bb(),
							this.Ib(),
							this.f.enableSmokeTestDriver && this.Cb();
					}
					async Bb() {
						if (
							(!Fe.$V &&
								typeof ce.hasDependencyCycle == "function" &&
								ce.hasDependencyCycle() &&
								(I.$w
									? (this.cb.error(
											"Error: There is a dependency cycle in the AMD modules that needs to be resolved!",
										),
										this.S.exit(37))
									: (this.ab.error((0, t.localize)(11934, null)),
										this.S.openDevTools())),
							await this.M.when(v.LifecyclePhase.Restored),
							(async () => {
								const Te = await this.S.isAdmin(),
									{ isPure: Ee } = await this.N.isPure();
								this.y.updateProperties({ isPure: Ee, isAdmin: Te }),
									Te &&
										!I.$l &&
										this.C.warn((0, t.localize)(11935, null, this.Z.nameShort));
							})(),
							this.f.isBuilt)
						) {
							let Te;
							I.$m
								? (Te = (0, Z.$mh)(
										(0, Z.$mh)((0, Z.$mh)(i.URI.file(this.O.appRoot))),
									))
								: (Te = (0, Z.$mh)((0, Z.$mh)(i.URI.file(this.O.appRoot))));
							for (const Ee of this.Q.getWorkspace().folders)
								if (this.ib.extUri.isEqualOrParent(Ee.uri, Te)) {
									this.hb.show({
										id: "appRootWarning.banner",
										message: (0, t.localize)(
											11936,
											null,
											this.gb.getUriLabel(Te),
										),
										icon: re.$ak.warning,
									});
									break;
								}
						}
						if (I.$m) {
							const Te = this.O.os.release.split(".")[0],
								Ee = new Map([
									["17", "macOS High Sierra"],
									["18", "macOS Mojave"],
								]);
							if (Ee.has(Te)) {
								const Ie = (0, t.localize)(
									11937,
									null,
									this.Z.nameLong,
									Ee.get(Te),
								);
								this.C.prompt(
									P.Severity.Warning,
									Ie,
									[
										{
											label: (0, t.localize)(11938, null),
											run: () =>
												this.R.open(
													i.URI.parse("https://aka.ms/vscode-faq-old-macOS"),
												),
										},
									],
									{
										neverShowAgain: {
											id: "macoseol",
											isSecondary: !0,
											scope: P.NeverShowAgainScope.APPLICATION,
										},
										priority: P.NotificationPriority.URGENT,
										sticky: !0,
									},
								);
							}
						}
						const Je = f.$S.shellEnv();
						this.fb.withProgress(
							{
								title: (0, t.localize)(11939, null),
								location: _.ProgressLocation.Window,
								delay: 1600,
								buttons: [(0, t.localize)(11940, null)],
							},
							() => Je,
							() =>
								this.R.open("https://go.microsoft.com/fwlink/?linkid=2149667"),
						);
					}
					Cb() {
						const Je = this;
						let Te = !1;
						(0, $e.$Ncd)(this.db, {
							async exitApplication() {
								if (Te) {
									Je.cb.info(
										"[driver] not handling exitApplication() due to pending quit() call",
									);
									return;
								}
								return (
									Je.cb.info("[driver] handling exitApplication()"),
									(Te = !0),
									Je.S.quit()
								);
							},
						});
					}
					async Db(Je, Te) {
						const Ee = this.f.remoteAuthority,
							Ie = Ee
								? {
										getAddress: async () =>
											(await this.$.resolveAuthority(Ee)).authority,
									}
								: void 0,
							Be = await this.U.getExistingTunnel(Je, Te);
						return !Be || typeof Be == "string"
							? this.U.openTunnel(Ie, Je, Te)
							: Be;
					}
					async resolveExternalUri(Je, Te) {
						let Ee;
						if (Te?.allowTunneling) {
							const Ie = (0, x.$fO)(Je),
								Be = (0, x.$gO)(Je);
							if (
								Be &&
								((Ee = await this.Db(Be.address, Be.port)),
								Ee && typeof Ee != "string")
							) {
								if (Ee.tunnelRemotePort !== Be.port)
									Ee.dispose(), (Ee = void 0);
								else if (!Ie) {
									const Se = Ee;
									return { resolved: Je, dispose: () => Se.dispose() };
								}
							}
							if (Ie) {
								const Se = await this.Db(Ie.address, Ie.port);
								if (Se && typeof Se != "string") {
									const ke = i.URI.parse(Se.localAddress);
									return {
										resolved: ke.scheme.startsWith(Je.scheme)
											? ke
											: Je.with({ authority: Se.localAddress }),
										dispose() {
											Se.dispose(), Ee && typeof Ee != "string" && Ee.dispose();
										},
									};
								}
							}
						}
						if (!Te?.openExternal && (await this.J.canHandleResource(Je)))
							return {
								resolved: i.URI.from({
									scheme: this.Z.urlProtocol,
									path: "workspace",
									query: Je.toString(),
								}),
								dispose() {},
							};
					}
					Eb() {
						this.R.setDefaultExternalOpener({
							openExternal: async (Je) => {
								if (
									!(await this.S.openExternal(
										Je,
										this.w.getValue("workbench.externalBrowser"),
									))
								) {
									const Ee = i.URI.parse(Je);
									Ee.scheme === U.Schemas.file &&
										(await this.S.showItemInFolder(Ee.fsPath));
								}
								return !0;
							},
						}),
							this.R.registerExternalUriResolver({
								resolveExternalUri: async (Je, Te) =>
									this.resolveExternalUri(Je, Te),
							});
					}
					Ib() {
						if (!I.$m) return;
						this.Gb.clear(), (this.Fb = void 0);
						const Je = this.Gb.add(new y.$Yh(() => this.Jb(Je), 300));
						Je.schedule();
					}
					Jb(Je) {
						if (!this.Fb) {
							const Ue =
								this.t.activeEditorPane?.scopedContextKeyService ||
								this.u.activeGroup.scopedContextKeyService;
							(this.Fb = this.L.createMenu(s.$XX.TouchBarContext, Ue)),
								this.Gb.add(this.Fb),
								this.Gb.add(this.Fb.onDidChange(() => Je.schedule()));
						}
						const Te = [],
							Ee = this.w.getValue("keyboard.touchbar.enabled") === !1,
							Ie = this.w.getValue("keyboard.touchbar.ignored"),
							Be = Array.isArray(Ie) ? Ie : [];
						(0, l.$Kyb)(this.Fb, void 0, Te);
						const Se = [];
						let ke = [];
						if (!Ee) {
							for (const Ue of Te)
								if (Ue instanceof s.$2X) {
									if (Be.indexOf(Ue.item.id) >= 0) continue;
									ke.push(Ue.item);
								} else
									Ue instanceof d.$tj && (ke.length && Se.push(ke), (ke = []));
							ke.length && Se.push(ke);
						}
						(0, E.$zo)(this.Hb, Se) ||
							((this.Hb = Se), this.S.updateTouchBar(Se));
					}
					Kb(Je) {
						this.r.push(...Je.foldersToAdd.map((Te) => i.URI.revive(Te))),
							this.q.isScheduled() || this.q.schedule();
					}
					Lb() {
						const Je = [];
						for (const Te of this.r) Je.push({ uri: Te });
						(this.r = []), this.I.addFolders(Je);
					}
					async Mb(Je) {
						const Te = !!(Je.filesToDiff && Je.filesToDiff.length === 2),
							Ee = !!(Je.filesToMerge && Je.filesToMerge.length === 4),
							Ie = (0, N.$Lb)(
								await (0, r.$B1)(
									Ee
										? Je.filesToMerge
										: Te
											? Je.filesToDiff
											: Je.filesToOpenOrCreate,
									this.J,
									this.cb,
								),
							);
						if (Ie.length) {
							const Be = await this.Ob(Ie, Te, Ee);
							if (Je.filesToWait)
								return Be.length
									? this.Nb(
											i.URI.revive(Je.filesToWait.waitMarkerFileUri),
											(0, N.$Lb)(
												Je.filesToWait.paths.map((Se) =>
													i.URI.revive(Se.fileUri),
												),
											),
										)
									: this.J.del(i.URI.revive(Je.filesToWait.waitMarkerFileUri));
						}
					}
					async Nb(Je, Te) {
						await this.db.invokeFunction((Ee) => (0, ne.$xVb)(Ee, Te)),
							await this.J.del(Je);
					}
					async Ob(Je, Te, Ee) {
						const Ie = [];
						if (
							Ee &&
							(0, r.$i1)(Je[0]) &&
							(0, r.$i1)(Je[1]) &&
							(0, r.$i1)(Je[2]) &&
							(0, r.$i1)(Je[3])
						) {
							const Be = {
								input1: { resource: Je[0].resource },
								input2: { resource: Je[1].resource },
								base: { resource: Je[2].resource },
								result: { resource: Je[3].resource },
								options: { pinned: !0 },
							};
							Ie.push(Be);
						} else if (Te && (0, r.$i1)(Je[0]) && (0, r.$i1)(Je[1])) {
							const Be = {
								original: { resource: Je[0].resource },
								modified: { resource: Je[1].resource },
								options: { pinned: !0 },
							};
							Ie.push(Be);
						} else Ie.push(...Je);
						return this.t.openEditors(Ie, void 0, { validateTrust: !0 });
					}
					Rb() {
						const Je = this.w.getValue("window.zoomLevel");
						return typeof Je == "number" ? Je : 0;
					}
					Sb(Je) {
						if ((this.Ub(Je), Je === ye.$Bfb.vscodeWindowId)) {
							const Te = (0, p.$Hfb)(ye.$Bfb);
							let Ee;
							this.Qb !== Te && (Ee = Te),
								f.$P.invoke("vscode:notifyZoomLevel", Ee);
						}
					}
					Tb(Je) {
						const Te = new $.$Zc();
						K.Event.once(Je.onWillDispose)(() => Te.dispose());
						const Ee = this.u.getScopedInstantiationService(Je);
						this.Pb.set(Je.windowId, Te.add(Ee.createInstance(He))),
							Te.add((0, $.$Yc)(() => this.Pb.delete(Je.windowId))),
							this.Ub(Je.windowId);
					}
					Ub(Je) {
						const Te = (0, C.getWindowById)(Je),
							Ee = this.Pb.get(Je);
						if (Ee && Te) {
							const Ie = (0, p.$Hfb)(Te.window);
							let Be;
							Ie < this.Qb
								? (Be = "$(zoom-out)")
								: Ie > this.Qb && (Be = "$(zoom-in)"),
								Ee.updateZoomEntry(Be ?? !1, Je);
						}
					}
					Vb() {
						this.Qb = this.Rb();
						let Je = !1;
						for (const { window: Te } of (0, C.getWindows)())
							if ((0, p.$Hfb)(Te) !== this.Qb) {
								Je = !0;
								break;
							}
						Je && (0, g.$28c)(this.Qb, g.ApplyZoomTarget.ALL_WINDOWS);
						for (const [Te] of this.Pb) this.Ub(Te);
					}
					dispose() {
						super.dispose();
						for (const [, Je] of this.Pb) Je.dispose();
					}
				});
				(e.$Ocd = xe),
					(e.$Ocd =
						xe =
						Oe =
							Ne(
								[
									j(0, u.$IY),
									j(1, W.$EY),
									j(2, A.$gj),
									j(3, c.$Wqc),
									j(4, n.$rRb),
									j(5, P.$4N),
									j(6, o.$ek),
									j(7, k.$uZ),
									j(8, a.$km),
									j(9, b.$mRb),
									j(10, m.$ll),
									j(11, s.$YX),
									j(12, v.$n6),
									j(13, S.$k4c),
									j(14, L.$ucd),
									j(15, D.$XK),
									j(16, M.$Vi),
									j(17, B.$7rb),
									j(18, z.$y7c),
									j(19, x.$cO),
									j(20, H.$mEb),
									j(21, q.$gY),
									j(22, G.$_Y),
									j(23, T.$Bk),
									j(24, J.$3l),
									j(25, X.$GO),
									j(26, R.$lq),
									j(27, Y.$ik),
									j(28, ie.$Li),
									j(29, ee.$Vbd),
									j(30, _.$8N),
									j(31, Q.$3N),
									j(32, se.$$uc),
									j(33, le.$Vl),
									j(34, oe.$7Z),
									j(35, ae.$wcd),
									j(36, pe.$Lcd),
									j(37, fe.$asb),
								],
								xe,
							));
				let He = class extends $.$1c {
					constructor(Je, Te, Ee) {
						super(),
							(this.c = Je),
							(this.f = Te),
							(this.g = Ee),
							(this.a = this.D(new $.$2c())),
							(this.b = void 0);
					}
					updateZoomEntry(Je, Te) {
						typeof Je == "string"
							? (this.a.value || this.h(Je), this.j(Te))
							: this.a.clear();
					}
					h(Je) {
						const Te = new $.$Zc();
						this.a.value = Te;
						const Ee = document.createElement("div");
						Ee.classList.add("zoom-status");
						const Ie = document.createElement("div");
						Ie.classList.add("zoom-status-left"), Ee.appendChild(Ie);
						const Be = Te.add(
								new d.$rj(
									"workbench.action.zoomOut",
									(0, t.localize)(11941, null),
									ge.ThemeIcon.asClassName(re.$ak.remove),
									!0,
									() => this.f.executeCommand(Be.id),
								),
							),
							Se = Te.add(
								new d.$rj(
									"workbench.action.zoomIn",
									(0, t.localize)(11942, null),
									ge.ThemeIcon.asClassName(re.$ak.plus),
									!0,
									() => this.f.executeCommand(Se.id),
								),
							),
							ke = Te.add(
								new d.$rj(
									"workbench.action.zoomReset",
									(0, t.localize)(11943, null),
									void 0,
									!0,
									() => this.f.executeCommand(ke.id),
								),
							);
						ke.tooltip = (0, t.localize)(
							11944,
							null,
							ke.label,
							this.g.lookupKeybinding(ke.id)?.getLabel(),
						);
						const Ue = Te.add(
								new d.$rj(
									"workbench.action.openSettings",
									(0, t.localize)(11945, null),
									ge.ThemeIcon.asClassName(re.$ak.settingsGear),
									!0,
									() => this.f.executeCommand(Ue.id, "window.zoom"),
								),
							),
							qe = Te.add(new d.$rj("zoomLabel", void 0, void 0, !1));
						(this.b = qe), Te.add((0, $.$Yc)(() => (this.b = void 0)));
						const Ae = Te.add(new ve.$eib(Ie, { hoverDelegate: Le.$Wyb }));
						Ae.push(Be, {
							icon: !0,
							label: !1,
							keybinding: this.g.lookupKeybinding(Be.id)?.getLabel(),
						}),
							Ae.push(this.b, { icon: !1, label: !0 }),
							Ae.push(Se, {
								icon: !0,
								label: !1,
								keybinding: this.g.lookupKeybinding(Se.id)?.getLabel(),
							});
						const Me = document.createElement("div");
						Me.classList.add("zoom-status-right"), Ee.appendChild(Me);
						const De = Te.add(new ve.$eib(Me, { hoverDelegate: Le.$Wyb }));
						De.push(ke, { icon: !1, label: !0 }),
							De.push(Ue, {
								icon: !0,
								label: !1,
								keybinding: this.g.lookupKeybinding(Ue.id)?.getLabel(),
							});
						const Re = (0, t.localize)(11946, null);
						Te.add(
							this.c.addEntry(
								{
									name: Re,
									text: Je,
									tooltip: Ee,
									ariaLabel: Re,
									command: me.$g6b,
									kind: "prominent",
								},
								"status.windowZoom",
								me.StatusbarAlignment.RIGHT,
								102,
							),
						);
					}
					j(Je) {
						if (this.b) {
							const Te = (0, C.getWindowById)(Je, !0).window,
								Ee = Math.round((0, p.$Jfb)(Te) * 100),
								Ie = (0, p.$Hfb)(Te);
							(this.b.label = `${Ie}`),
								(this.b.tooltip = (0, t.localize)(11947, null, Ie, Ee));
						}
					}
				};
				He = Ne([j(0, me.$d6b), j(1, o.$ek), j(2, k.$uZ)], He);
			},
		),
		