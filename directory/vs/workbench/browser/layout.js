import '../../../require.js';
import '../../../exports.js';
import '../../base/common/lifecycle.js';
import '../../base/common/event.js';
import '../../base/browser/dom.js';
import '../../base/browser/browser.js';
import '../services/workingCopy/common/workingCopyBackup.js';
import '../../base/common/platform.js';
import '../common/editor.js';
import './parts/sidebar/sidebarPart.js';
import './parts/panel/panelPart.js';
import '../services/layout/browser/layoutService.js';
import '../../platform/workspace/common/workspace.js';
import '../../platform/storage/common/storage.js';
import '../../platform/configuration/common/configuration.js';
import '../services/title/browser/titleService.js';
import '../services/lifecycle/common/lifecycle.js';
import '../../platform/window/common/window.js';
import '../services/host/browser/host.js';
import '../services/environment/browser/environmentService.js';
import '../services/editor/common/editorService.js';
import '../services/editor/common/editorGroupsService.js';
import '../../base/browser/ui/grid/grid.js';
import './part.js';
import '../services/statusbar/browser/statusbar.js';
import '../../platform/files/common/files.js';
import '../../editor/browser/editorBrowser.js';
import '../../base/common/arrays.js';
import '../../base/common/types.js';
import '../../platform/notification/common/notification.js';
import '../../platform/theme/common/themeService.js';
import '../common/theme.js';
import '../../base/common/uri.js';
import '../common/views.js';
import '../common/editor/diffEditorInput.js';
import '../../base/common/performance.js';
import '../services/extensions/common/extensions.js';
import '../../platform/log/common/log.js';
import '../../base/common/async.js';
import '../services/banner/browser/bannerService.js';
import '../services/panecomposite/browser/panecomposite.js';
import './parts/auxiliarybar/auxiliaryBarPart.js';
import '../../platform/telemetry/common/telemetry.js';
import '../../base/common/constants.js';
import '../services/auxiliaryWindow/browser/auxiliaryWindowService.js';
import '../../base/browser/window.js';
define(
			de[4016],
			he([
				1, 0, 3, 6, 7, 139, 335, 12, 44, 1940, 1939, 96, 25, 21, 10, 713, 52,
				253, 87, 286, 18, 66, 759, 550, 166, 22, 56, 24, 28, 40, 35, 123, 9, 60,
				296, 240, 53, 34, 15, 823, 142, 1938, 32, 58, 703, 75,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*event*/,
				w /*dom*/,
				E /*browser*/,
				C /*workingCopyBackup*/,
				d /*platform*/,
				m /*editor*/,
				r /*sidebarPart*/,
				u /*panelPart*/,
				a /*layoutService*/,
				h /*workspace*/,
				c /*storage*/,
				n /*configuration*/,
				g /*titleService*/,
				p /*lifecycle*/,
				o /*window*/,
				f /*host*/,
				b /*environmentService*/,
				s /*editorService*/,
				l /*editorGroupsService*/,
				y /*grid*/,
				$ /*part*/,
				v /*statusbar*/,
				S /*files*/,
				I /*editorBrowser*/,
				T /*arrays*/,
				P /*types*/,
				k /*notification*/,
				L /*themeService*/,
				D /*theme*/,
				M /*uri*/,
				N /*views*/,
				A /*diffEditorInput*/,
				R /*performance*/,
				O /*extensions*/,
				B /*log*/,
				U /*async*/,
				z /*bannerService*/,
				F /*panecomposite*/,
				x /*auxiliaryBarPart*/,
				H /*telemetry*/,
				q /*constants*/,
				V /*auxiliaryWindowService*/,
				G /*window*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n3c = e.$m3c = void 0);
				var K;
				(function (Q) {
					(Q.SIDEBAR_HIDDEN = "nosidebar"),
						(Q.MAIN_EDITOR_AREA_HIDDEN = "nomaineditorarea"),
						(Q.PANEL_HIDDEN = "nopanel"),
						(Q.AUXILIARYBAR_HIDDEN = "noauxiliarybar"),
						(Q.STATUSBAR_HIDDEN = "nostatusbar"),
						(Q.FULLSCREEN = "fullscreen"),
						(Q.MAXIMIZED = "maximized"),
						(Q.WINDOW_BORDER = "border");
				})(K || (K = {})),
					(e.$m3c = [
						a.LayoutSettings.ACTIVITY_BAR_LOCATION,
						a.LayoutSettings.COMMAND_CENTER,
						a.LayoutSettings.EDITOR_ACTIONS_LOCATION,
						a.LayoutSettings.LAYOUT_ACTIONS,
						"window.menuBarVisibility",
						o.TitleBarSetting.TITLE_BAR_STYLE,
						o.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
					]);
				class J extends t.$1c {
					get activityBarDirection() {
						return this.S.getValue(q.$LW);
					}
					get activeContainer() {
						return this.t((0, w.$Ngb)());
					}
					get containers() {
						const Z = [];
						for (const { window: se } of (0, w.getWindows)())
							Z.push(this.t(se.document));
						return Z;
					}
					t(Z) {
						return Z === this.mainContainer.ownerDocument
							? this.mainContainer
							: Z.body.getElementsByClassName("monaco-workbench")[0];
					}
					whenContainerStylesLoaded(Z) {
						return this.u.get(Z.vscodeWindowId);
					}
					get mainContainerDimension() {
						return this.w;
					}
					get activeContainerDimension() {
						return this.y(this.activeContainer);
					}
					y(Z) {
						return Z === this.mainContainer
							? this.mainContainerDimension
							: (0, w.$ogb)(Z);
					}
					get mainContainerOffset() {
						return this.z(G.$Bfb);
					}
					get activeContainerOffset() {
						return this.z((0, w.getWindow)(this.activeContainer));
					}
					z(Z) {
						let se = 0,
							re = 0;
						this.isVisible(a.Parts.BANNER_PART) &&
							((se = this.Lb(a.Parts.BANNER_PART).maximumHeight), (re = se));
						const le = this.isVisible(a.Parts.TITLEBAR_PART, Z);
						return (
							le &&
								((se += this.Lb(a.Parts.TITLEBAR_PART).maximumHeight),
								(re = se)),
							le &&
								this.S.getValue(a.LayoutSettings.COMMAND_CENTER) !== !1 &&
								(re = 6),
							{ top: se, quickPickTop: re }
						);
					}
					constructor(Z) {
						super(),
							(this.nb = Z),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeZenMode = this.a.event),
							(this.b = this.D(new i.$re())),
							(this.onDidChangeMainEditorCenteredLayout = this.b.event),
							(this.c = this.D(new i.$re())),
							(this.onDidChangePanelAlignment = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidChangeWindowMaximized = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDidChangePanelPosition = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidChangePartVisibility = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidChangeNotificationsVisibility = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidLayoutMainContainer = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidLayoutActiveContainer = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidLayoutContainer = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidAddContainer = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidChangeActiveContainer = this.s.event),
							(this.mainContainer = document.createElement("div")),
							(this.u = new Map()),
							(this.C = new Map()),
							(this.F = !1),
							(this.mb = !1),
							(this.Eb = !1),
							(this.Gb = new U.$0h()),
							(this.Hb = this.Gb.p),
							(this.Ib = new U.$0h()),
							(this.whenRestored = this.Ib.p),
							(this.Jb = !1);
					}
					ob(Z) {
						(this.Q = Z.get(b.$5rb)),
							(this.S = Z.get(n.$gj)),
							(this.W = Z.get(f.$asb)),
							(this.cb = Z.get(h.$Vi)),
							(this.U = Z.get(c.$lq)),
							(this.db = Z.get(C.$WO)),
							(this.fb = Z.get(L.$iP)),
							(this.R = Z.get(O.$q2)),
							(this.hb = Z.get(B.$ik)),
							(this.ib = Z.get(H.$km)),
							(this.jb = Z.get(V.$AEb)),
							(this.X = Z.get(s.$IY)),
							(this.Y = this.X.createScoped("main", this.B)),
							(this.Z = Z.get(l.$EY)),
							(this.$ = Z.get(F.$6Sb)),
							(this.bb = Z.get(N.$K1)),
							(this.ab = Z.get(g.$Wqc)),
							(this.eb = Z.get(k.$4N)),
							(this.gb = Z.get(v.$d6b)),
							Z.get(z.$$uc),
							this.pb(),
							this.zb(Z.get(p.$n6), Z.get(S.$ll));
					}
					pb() {
						const Z = () => {
							this.isVisible(a.Parts.EDITOR_PART, G.$Bfb) ||
								this.toggleMaximizedPanel();
						};
						this.Z.whenRestored.then(() => {
							this.D(this.Y.onDidVisibleEditorsChange(Z)),
								this.D(this.Z.mainPart.onDidActivateGroup(Z)),
								this.D(
									this.Y.onDidActiveEditorChange(() =>
										this.centerMainEditorLayout(
											this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
										),
									),
								);
						}),
							this.D(
								this.S.onDidChangeConfiguration((re) => {
									if (
										[...e.$m3c, _.SIDEBAR_POSITION, _.STATUSBAR_VISIBLE].some(
											(le) => re.affectsConfiguration(le),
										)
									) {
										const le =
											re.affectsConfiguration(
												a.LayoutSettings.EDITOR_ACTIONS_LOCATION,
											) &&
											this.S.getValue(
												a.LayoutSettings.EDITOR_ACTIONS_LOCATION,
											) === a.EditorActionsLocation.TITLEBAR;
										let oe = !1;
										if (
											re.affectsConfiguration(
												a.LayoutSettings.ACTIVITY_BAR_LOCATION,
											)
										) {
											const ae = this.S.getValue(
												a.LayoutSettings.ACTIVITY_BAR_LOCATION,
											);
											oe =
												ae === a.ActivityBarPosition.TOP ||
												ae === a.ActivityBarPosition.BOTTOM;
										}
										(oe || le) &&
											this.S.getValue(
												o.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
											) === o.CustomTitleBarVisibility.NEVER &&
											this.S.updateValue(
												o.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
												o.CustomTitleBarVisibility.AUTO,
											),
											this.wb();
									}
								}),
							),
							this.D((0, E.$Nfb)((re) => this.sb(re))),
							this.D(
								this.Z.mainPart.onDidAddGroup(() =>
									this.centerMainEditorLayout(
										this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									),
								),
							),
							this.D(
								this.Z.mainPart.onDidRemoveGroup(() =>
									this.centerMainEditorLayout(
										this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									),
								),
							),
							this.D(
								this.Z.mainPart.onDidChangeGroupMaximized(() =>
									this.centerMainEditorLayout(
										this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									),
								),
							),
							this.D(
								(0, w.$0fb)(
									this.mainContainer,
									w.$$gb.SCROLL,
									() => (this.mainContainer.scrollTop = 0),
								),
							),
							(d.$l || d.$n || d.$r) &&
								!(0, o.$yY)(this.S) &&
								this.D(this.ab.onMenubarVisibilityChange((re) => this.qb(re))),
							this.D(this.fb.onDidColorThemeChange(() => this.yb())),
							this.D(this.W.onDidChangeFocus((re) => this.ub(re))),
							this.D(this.W.onDidChangeActiveWindow(() => this.tb())),
							d.$r &&
								typeof navigator.windowControlsOverlay == "object" &&
								this.D(
									(0, w.$0fb)(
										navigator.windowControlsOverlay,
										"geometrychange",
										() => this.bc(),
									),
								),
							this.D(
								this.jb.onDidOpenAuxiliaryWindow(
									({ window: re, disposables: le }) => {
										const oe = re.window.vscodeWindowId;
										this.u.set(oe, re.whenStylesHaveLoaded),
											re.whenStylesHaveLoaded.then(() => this.u.delete(oe)),
											le.add((0, t.$Yc)(() => this.u.delete(oe)));
										const ae = le.add(new t.$Zc());
										this.r.fire({ container: re.container, disposables: ae }),
											le.add(re.onDidLayout((pe) => this.rb(re.container, pe)));
									},
								),
							);
					}
					qb(Z) {
						if (Z !== this.kb.runtime.menuBar.toggled) {
							this.kb.runtime.menuBar.toggled = Z;
							const se = (0, o.$wY)(this.S);
							d.$r && se === "toggle"
								? this.G.setViewVisible(
										this.H,
										(0, a.$rEb)(
											this.S,
											G.$Bfb,
											this.kb.runtime.menuBar.toggled,
											this.Ob(),
										),
									)
								: this.kb.runtime.mainWindowFullscreen &&
									(se === "toggle" || se === "classic") &&
									this.G.setViewVisible(
										this.H,
										(0, a.$rEb)(
											this.S,
											G.$Bfb,
											this.kb.runtime.menuBar.toggled,
											this.Ob(),
										),
									),
								this.rb(this.mainContainer, this.w);
						}
					}
					rb(Z, se) {
						Z === this.mainContainer && this.m.fire(se),
							(0, w.$Mgb)(Z) && this.n.fire(se),
							this.q.fire({ container: Z, dimension: se });
					}
					sb(Z) {
						Z === G.$Bfb.vscodeWindowId &&
							((this.kb.runtime.mainWindowFullscreen = (0, E.$Mfb)(G.$Bfb)),
							this.kb.runtime.mainWindowFullscreen
								? this.mainContainer.classList.add(K.FULLSCREEN)
								: (this.mainContainer.classList.remove(K.FULLSCREEN),
									this.lb.getRuntimeValue(ne.ZEN_MODE_EXIT_INFO)
										.transitionedToFullScreen &&
										this.Ob() &&
										this.toggleZenMode()),
							(this.G.edgeSnapping = this.kb.runtime.mainWindowFullscreen),
							(0, o.$xY)(this.S) &&
								(this.G.setViewVisible(
									this.H,
									(0, a.$rEb)(
										this.S,
										G.$Bfb,
										this.kb.runtime.menuBar.toggled,
										this.Ob(),
									),
								),
								this.yb(!0)));
					}
					tb() {
						const Z = this.vb();
						this.kb.runtime.activeContainerId !== Z &&
							((this.kb.runtime.activeContainerId = Z),
							this.yb(),
							this.s.fire());
					}
					ub(Z) {
						this.kb.runtime.hasFocus !== Z &&
							((this.kb.runtime.hasFocus = Z), this.yb());
					}
					vb() {
						const Z = this.activeContainer;
						return (0, w.getWindow)(Z).vscodeWindowId;
					}
					wb(Z) {
						this.updateCustomTitleBarVisibility(),
							this.updateMenubarVisibility(!!Z),
							this.Z.whenRestored.then(() => {
								this.centerMainEditorLayout(
									this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED),
									Z,
								);
							});
					}
					xb(Z) {
						const se =
								this.activityBarDirection === "vertical"
									? this.Lb(a.Parts.ACTIVITYBAR_PART)
									: void 0,
							re = this.Lb(a.Parts.SIDEBAR_PART),
							le = this.Lb(a.Parts.AUXILIARYBAR_PART),
							oe = Z === a.Position.LEFT ? "left" : "right",
							ae = Z === a.Position.RIGHT ? "left" : "right",
							pe = this.getPanelAlignment(),
							$e = this.getPanelPosition();
						this.lb.setRuntimeValue(ne.SIDEBAR_POSITON, Z);
						const ye = se ? (0, P.$wg)(se.getContainer()) : void 0,
							ue = (0, P.$wg)(re.getContainer()),
							fe = (0, P.$wg)(le.getContainer());
						ye?.classList.remove(ae),
							ue.classList.remove(ae),
							ye?.classList.add(oe),
							ue.classList.add(oe),
							fe.classList.remove(oe),
							fe.classList.add(ae),
							se?.updateStyles(),
							re.updateStyles(),
							le.updateStyles(),
							this.Yb(Z, pe, $e);
					}
					yb(Z = !1) {
						if (d.$r || d.$l || (0, o.$BY)(this.S) || (0, o.$yY)(this.S))
							return;
						const se = this.fb.getColorTheme(),
							re = se.getColor(D.$$Gb),
							le = se.getColor(D.$_Gb),
							oe = this.hasMainWindowBorder();
						for (const ae of this.containers) {
							const pe = ae === this.mainContainer,
								$e = this.activeContainer === ae,
								ye = (0, w.getWindowId)((0, w.getWindow)(ae));
							let ue = !1;
							if (
								!this.kb.runtime.mainWindowFullscreen &&
								!this.kb.runtime.maximized.has(ye) &&
								(re || le)
							) {
								ue = !0;
								const fe = $e && this.kb.runtime.hasFocus ? re : (le ?? re);
								ae.style.setProperty(
									"--window-border-color",
									fe?.toString() ?? "transparent",
								);
							}
							pe && (this.kb.runtime.mainWindowBorder = ue),
								ae.classList.toggle(K.WINDOW_BORDER, ue);
						}
						!Z && oe !== this.hasMainWindowBorder() && this.layout();
					}
					zb(Z, se) {
						(this.lb = new te(this.U, this.S, this.cb, this.nb)),
							this.lb.load(),
							this.lb.getRuntimeValue(ne.PANEL_HIDDEN) &&
								this.lb.getRuntimeValue(ne.EDITOR_HIDDEN) &&
								this.lb.setRuntimeValue(ne.EDITOR_HIDDEN, !1),
							this.D(
								this.lb.onDidChangeState((ae) => {
									ae.key === ne.ACTIVITYBAR_HIDDEN && this.Tb(ae.value),
										ae.key === ne.STATUSBAR_HIDDEN && this.Qb(ae.value),
										ae.key === ne.SIDEBAR_POSITON && this.xb(ae.value),
										ae.key === ne.PANEL_POSITION &&
											this.setPanelPosition(ae.value),
										ae.key === ne.PANEL_ALIGNMENT &&
											this.setPanelAlignment(ae.value),
										this.wb();
								}),
							);
						const re = this.Fb();
						re && this.hb.trace("Initial editor state", re);
						const le = {
								layout: { editors: re?.layout },
								editor: {
									restoreEditors: this.Bb(this.cb, re),
									editorsToOpen: this.Db(se, re),
								},
								views: {
									defaults: this.Ab(this.Q, this.U),
									containerToRestore: {},
								},
							},
							oe = {
								activeContainerId: this.vb(),
								mainWindowFullscreen: (0, E.$Mfb)(G.$Bfb),
								hasFocus: this.W.hasFocus,
								maximized: new Set(),
								mainWindowBorder: !1,
								menuBar: { toggled: !1 },
								zenMode: { transitionDisposables: new t.$0c() },
							};
						if (
							((this.kb = { initialization: le, runtime: oe }),
							this.isVisible(a.Parts.SIDEBAR_PART))
						) {
							let ae;
							!this.Q.isBuilt ||
							Z.startupKind === p.StartupKind.ReloadedWindow ||
							(this.Q.isExtensionDevelopment &&
								!this.Q.extensionTestsLocationURI)
								? (ae = this.U.get(
										r.$Uuc.activeViewletSettingsKey,
										c.StorageScope.WORKSPACE,
										this.bb.getDefaultViewContainer(
											N.ViewContainerLocation.Sidebar,
										)?.id,
									))
								: (ae = this.bb.getDefaultViewContainer(
										N.ViewContainerLocation.Sidebar,
									)?.id),
								ae
									? (this.kb.initialization.views.containerToRestore.sideBar =
											ae)
									: this.lb.setRuntimeValue(ne.SIDEBAR_HIDDEN, !0);
						}
						if (this.isVisible(a.Parts.PANEL_PART)) {
							const ae = this.U.get(
								u.$Quc.activePanelSettingsKey,
								c.StorageScope.WORKSPACE,
								this.bb.getDefaultViewContainer(N.ViewContainerLocation.Panel)
									?.id,
							);
							ae
								? (this.kb.initialization.views.containerToRestore.panel = ae)
								: this.lb.setRuntimeValue(ne.PANEL_HIDDEN, !0);
						}
						if (this.isVisible(a.Parts.AUXILIARYBAR_PART)) {
							const ae = this.U.get(
								x.$Puc.activePanelSettingsKey,
								c.StorageScope.WORKSPACE,
								this.bb.getDefaultViewContainer(
									N.ViewContainerLocation.AuxiliaryBar,
								)?.id,
							);
							ae
								? (this.kb.initialization.views.containerToRestore.auxiliaryBar =
										ae)
								: this.lb.setRuntimeValue(ne.AUXILIARYBAR_HIDDEN, !0);
						}
						this.yb(!0);
					}
					Ab(Z, se) {
						const re = Z.options?.defaultLayout;
						if (!re || (!re.force && !se.isNew(c.StorageScope.WORKSPACE)))
							return;
						const { views: le } = re;
						if (le?.length) return le.map((oe) => oe.id);
					}
					Bb(Z, se) {
						return (0, h.$bj)(Z.getWorkspace())
							? !1
							: !!(this.S.getValue("window.restoreWindows") === "preserve") ||
									se === void 0;
					}
					Cb() {
						return this.kb.initialization.editor.restoreEditors;
					}
					async Db(Z, se) {
						if (se) {
							const re = (0, T.$Lb)(
								await (0, m.$B1)(se.filesToMerge, Z, this.hb),
							);
							if (
								re.length === 4 &&
								(0, m.$i1)(re[0]) &&
								(0, m.$i1)(re[1]) &&
								(0, m.$i1)(re[2]) &&
								(0, m.$i1)(re[3])
							)
								return [
									{
										editor: {
											input1: { resource: re[0].resource },
											input2: { resource: re[1].resource },
											base: { resource: re[2].resource },
											result: { resource: re[3].resource },
											options: { pinned: !0 },
										},
									},
								];
							const le = (0, T.$Lb)(
								await (0, m.$B1)(se.filesToDiff, Z, this.hb),
							);
							if (le.length === 2)
								return [
									{
										editor: {
											original: { resource: le[0].resource },
											modified: { resource: le[1].resource },
											options: { pinned: !0 },
										},
									},
								];
							const oe = [],
								ae = await (0, m.$B1)(se.filesToOpenOrCreate, Z, this.hb);
							for (let pe = 0; pe < ae.length; pe++) {
								const $e = ae[pe];
								$e &&
									oe.push({
										editor: $e,
										viewColumn: se.filesToOpenOrCreate?.[pe].viewColumn,
									});
							}
							return oe;
						} else if (
							this.cb.getWorkbenchState() === h.WorkbenchState.EMPTY &&
							this.S.getValue("workbench.startupEditor") === "newUntitledFile"
						)
							return this.Z.hasRestorableState
								? []
								: (await this.db.hasBackups())
									? []
									: [{ editor: { resource: void 0 } }];
						return [];
					}
					get openedDefaultEditors() {
						return this.Eb;
					}
					Fb() {
						const Z = this.Q.options?.defaultLayout;
						if (
							(Z?.editors?.length || Z?.layout?.editors) &&
							(Z.force || this.U.isNew(c.StorageScope.WORKSPACE))
						)
							return (
								(this.Eb = !0),
								{
									layout: Z.layout?.editors,
									filesToOpenOrCreate: Z?.editors?.map((oe) => ({
										viewColumn: oe.viewColumn,
										fileUri: M.URI.revive(oe.uri),
										openOnlyIfExists: oe.openOnlyIfExists,
										options: oe.options,
									})),
								}
							);
						const {
							filesToOpenOrCreate: se,
							filesToDiff: re,
							filesToMerge: le,
						} = this.Q;
						if (se || re || le)
							return {
								filesToOpenOrCreate: se,
								filesToDiff: re,
								filesToMerge: le,
							};
					}
					isRestored() {
						return this.Jb;
					}
					Kb() {
						const Z = [],
							se = [];
						Z.push(
							(async () => {
								(0, R.mark)("code/willRestoreEditors"),
									await this.Z.whenReady,
									(0, R.mark)("code/restoreEditors/editorGroupsReady"),
									this.kb.initialization.layout?.editors &&
										this.Z.mainPart.applyLayout(
											this.kb.initialization.layout.editors,
										);
								const ae = await this.kb.initialization.editor.editorsToOpen;
								(0, R.mark)("code/restoreEditors/editorsToOpenResolved");
								let pe;
								if (ae.length) {
									const $e = this.Z.mainPart.getGroups(
											l.GroupsOrder.GRID_APPEARANCE,
										),
										ye = new Map();
									for (const ue of ae) {
										const fe = $e[(ue.viewColumn ?? 1) - 1];
										let me = ye.get(fe.id);
										me || ((me = new Set()), ye.set(fe.id, me)),
											me.add(ue.editor);
									}
									pe = Promise.all(
										Array.from(ye).map(async ([ue, fe]) => {
											try {
												await this.X.openEditors(Array.from(fe), ue, {
													validateTrust: !0,
												});
											} catch (me) {
												this.hb.error(me);
											}
										}),
									);
								}
								se.push(
									Promise.all([
										pe?.finally(() =>
											(0, R.mark)("code/restoreEditors/editorsOpened"),
										),
										this.Z.whenRestored.finally(() =>
											(0, R.mark)("code/restoreEditors/editorGroupsRestored"),
										),
									]).finally(() => {
										(0, R.mark)("code/didRestoreEditors");
									}),
								);
							})(),
						);
						const re = (async () => {
							if (this.kb.initialization.views.defaults?.length) {
								(0, R.mark)("code/willOpenDefaultViews");
								const ae = [],
									pe = (ue) => {
										const fe = this.bb.getViewLocationById(ue.id);
										if (fe !== null) {
											const me = this.bb.getViewContainerByViewId(ue.id);
											if (me) {
												ue.order >= (ae?.[fe]?.order ?? 0) &&
													(ae[fe] = { id: me.id, order: ue.order });
												const ve = this.bb.getViewContainerModel(me);
												return (
													ve.setCollapsed(ue.id, !1),
													ve.setVisible(ue.id, !0),
													!0
												);
											}
										}
										return !1;
									},
									$e = [...this.kb.initialization.views.defaults]
										.reverse()
										.map((ue, fe) => ({ id: ue, order: fe }));
								let ye = $e.length;
								for (; ye; ) ye--, pe($e[ye]) && $e.splice(ye, 1);
								if ($e.length) {
									await this.R.whenInstalledExtensionsRegistered();
									let ue = $e.length;
									for (; ue; ) ue--, pe($e[ue]) && $e.splice(ue, 1);
								}
								ae[N.ViewContainerLocation.Sidebar] &&
									(this.kb.initialization.views.containerToRestore.sideBar =
										ae[N.ViewContainerLocation.Sidebar].id),
									ae[N.ViewContainerLocation.Panel] &&
										(this.kb.initialization.views.containerToRestore.panel =
											ae[N.ViewContainerLocation.Panel].id),
									ae[N.ViewContainerLocation.AuxiliaryBar] &&
										(this.kb.initialization.views.containerToRestore.auxiliaryBar =
											ae[N.ViewContainerLocation.AuxiliaryBar].id),
									(0, R.mark)("code/didOpenDefaultViews");
							}
						})();
						Z.push(re),
							Z.push(
								(async () => {
									if (
										(await re,
										!this.kb.initialization.views.containerToRestore.sideBar)
									)
										return;
									(0, R.mark)("code/willRestoreViewlet"),
										(await this.$.openPaneComposite(
											this.kb.initialization.views.containerToRestore.sideBar,
											N.ViewContainerLocation.Sidebar,
										)) ||
											(await this.$.openPaneComposite(
												this.bb.getDefaultViewContainer(
													N.ViewContainerLocation.Sidebar,
												)?.id,
												N.ViewContainerLocation.Sidebar,
											)),
										(0, R.mark)("code/didRestoreViewlet");
								})(),
							),
							Z.push(
								(async () => {
									if (
										(await re,
										!this.kb.initialization.views.containerToRestore.panel)
									)
										return;
									(0, R.mark)("code/willRestorePanel"),
										(await this.$.openPaneComposite(
											this.kb.initialization.views.containerToRestore.panel,
											N.ViewContainerLocation.Panel,
										)) ||
											(await this.$.openPaneComposite(
												this.bb.getDefaultViewContainer(
													N.ViewContainerLocation.Panel,
												)?.id,
												N.ViewContainerLocation.Panel,
											)),
										(0, R.mark)("code/didRestorePanel");
								})(),
							),
							Z.push(
								(async () => {
									if (
										(await re,
										!this.kb.initialization.views.containerToRestore
											.auxiliaryBar)
									)
										return;
									(0, R.mark)("code/willRestoreAuxiliaryBar"),
										(await this.$.openPaneComposite(
											this.kb.initialization.views.containerToRestore
												.auxiliaryBar,
											N.ViewContainerLocation.AuxiliaryBar,
										)) ||
											(await this.$.openPaneComposite(
												this.bb.getDefaultViewContainer(
													N.ViewContainerLocation.AuxiliaryBar,
												)?.id,
												N.ViewContainerLocation.AuxiliaryBar,
											)),
										(0, R.mark)("code/didRestoreAuxiliaryBar");
								})(),
							);
						const le = this.Ob(),
							oe = W(this.S).restore;
						le && (this.Pb(!oe), this.toggleZenMode(!1, !0)),
							this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED) &&
								this.centerMainEditorLayout(!0, !0),
							U.Promises.settled(Z).finally(() => {
								this.Gb.complete(),
									U.Promises.settled(se).finally(() => {
										(this.Jb = !0), this.Ib.complete();
									});
							});
					}
					registerPart(Z) {
						const se = Z.getId();
						return this.C.set(se, Z), (0, t.$Yc)(() => this.C.delete(se));
					}
					Lb(Z) {
						const se = this.C.get(Z);
						if (!se) throw new Error(`Unknown part ${Z}`);
						return se;
					}
					registerNotifications(Z) {
						this.D(
							Z.onDidChangeNotificationsVisibility((se) => this.j.fire(se)),
						);
					}
					hasFocus(Z) {
						const se = this.getContainer((0, w.$Ogb)(), Z);
						if (!se) return !1;
						const re = (0, w.$Jgb)();
						return re ? (0, w.$Dgb)(re, se) : !1;
					}
					focusPart(Z, se = G.$Bfb) {
						const re = this.getContainer(se, Z) ?? this.mainContainer;
						switch (Z) {
							case a.Parts.EDITOR_PART:
								this.Z.getPart(re).activeGroup.focus();
								break;
							case a.Parts.PANEL_PART: {
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.Panel,
								)?.focus();
								break;
							}
							case a.Parts.SIDEBAR_PART: {
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.Sidebar,
								)?.focus();
								break;
							}
							case a.Parts.AUXILIARYBAR_PART: {
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.AuxiliaryBar,
								)?.focus();
								break;
							}
							case a.Parts.ACTIVITYBAR_PART:
								this.activityBarDirection === "vertical" &&
									this.Lb(a.Parts.SIDEBAR_PART).focusActivityBar();
								break;
							case a.Parts.STATUSBAR_PART:
								this.gb.getPart(re).focus();
								break;
							default:
								re?.focus();
						}
					}
					getContainer(Z, se) {
						if (typeof se > "u") return this.t(Z.document);
						if (Z === G.$Bfb) return this.Lb(se).getContainer();
						let re;
						if (
							(se === a.Parts.EDITOR_PART
								? (re = this.Z.getPart(this.t(Z.document)))
								: se === a.Parts.STATUSBAR_PART
									? (re = this.gb.getPart(this.t(Z.document)))
									: se === a.Parts.TITLEBAR_PART &&
										(re = this.ab.getPart(this.t(Z.document))),
							re instanceof $.Part)
						)
							return re.getContainer();
					}
					isVisible(Z, se = G.$Bfb) {
						if (se !== G.$Bfb && Z === a.Parts.EDITOR_PART) return !0;
						if (this.F)
							switch (Z) {
								case a.Parts.TITLEBAR_PART:
									return this.G.isViewVisible(this.H);
								case a.Parts.SIDEBAR_PART:
									return !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN);
								case a.Parts.PANEL_PART:
									return !this.lb.getRuntimeValue(ne.PANEL_HIDDEN);
								case a.Parts.AUXILIARYBAR_PART:
									return !this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN);
								case a.Parts.STATUSBAR_PART:
									return !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN);
								case a.Parts.ACTIVITYBAR_PART:
									return !this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN);
								case a.Parts.EDITOR_PART:
									return !this.lb.getRuntimeValue(ne.EDITOR_HIDDEN);
								case a.Parts.BANNER_PART:
									return this.G.isViewVisible(this.I);
								default:
									return !1;
							}
						switch (Z) {
							case a.Parts.TITLEBAR_PART:
								return (0, a.$rEb)(
									this.S,
									G.$Bfb,
									this.kb.runtime.menuBar.toggled,
									this.Ob(),
								);
							case a.Parts.SIDEBAR_PART:
								return !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN);
							case a.Parts.PANEL_PART:
								return !this.lb.getRuntimeValue(ne.PANEL_HIDDEN);
							case a.Parts.AUXILIARYBAR_PART:
								return !this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN);
							case a.Parts.STATUSBAR_PART:
								return !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN);
							case a.Parts.ACTIVITYBAR_PART:
								return !this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN);
							case a.Parts.EDITOR_PART:
								return !this.lb.getRuntimeValue(ne.EDITOR_HIDDEN);
							default:
								return !1;
						}
					}
					Mb() {
						return d.$r && !(0, E.$Wfb)();
					}
					focus() {
						this.focusPart(
							a.Parts.EDITOR_PART,
							(0, w.getWindow)(this.activeContainer),
						);
					}
					Nb() {
						const Z = this.$.getActivePaneComposite(
							N.ViewContainerLocation.Panel,
						);
						(this.hasFocus(a.Parts.PANEL_PART) ||
							!this.isVisible(a.Parts.EDITOR_PART)) &&
						Z
							? Z.focus()
							: this.focus();
					}
					getMaximumEditorDimensions(Z) {
						const se = (0, w.getWindow)(Z),
							re = this.y(Z);
						if (Z === this.mainContainer) {
							const le = (0, a.$nEb)(this.getPanelPosition()),
								oe =
									(this.isVisible(a.Parts.ACTIVITYBAR_PART) && this.P
										? this.P.minimumWidth
										: 0) +
									(this.isVisible(a.Parts.SIDEBAR_PART)
										? this.J.minimumWidth
										: 0) +
									(this.isVisible(a.Parts.PANEL_PART) && !le
										? this.L.minimumWidth
										: 0) +
									(this.isVisible(a.Parts.AUXILIARYBAR_PART)
										? this.M.minimumWidth
										: 0),
								ae =
									(this.isVisible(a.Parts.TITLEBAR_PART, se)
										? this.H.minimumHeight
										: 0) +
									(this.isVisible(a.Parts.STATUSBAR_PART, se)
										? this.O.minimumHeight
										: 0) +
									(this.isVisible(a.Parts.PANEL_PART) && le
										? this.L.minimumHeight
										: 0),
								pe = re.width - oe,
								$e = re.height - ae;
							return { width: pe, height: $e };
						} else {
							const le =
								(this.isVisible(a.Parts.TITLEBAR_PART, se)
									? this.H.minimumHeight
									: 0) +
								(this.isVisible(a.Parts.STATUSBAR_PART, se)
									? this.O.minimumHeight
									: 0);
							return { width: re.width, height: re.height - le };
						}
					}
					Ob() {
						return this.lb.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
					}
					Pb(Z) {
						this.lb.setRuntimeValue(ne.ZEN_MODE_ACTIVE, Z);
					}
					toggleZenMode(Z, se = !1) {
						this.Pb(!this.Ob()),
							this.kb.runtime.zenMode.transitionDisposables.clearAndDisposeAll();
						const re = (pe) => {
							for (const $e of this.Y.visibleTextEditorControls) {
								if (!pe && (0, I.$0sb)($e) && $e.hasModel()) {
									const ye = $e.getModel();
									pe = this.S.getValue("editor.lineNumbers", {
										resource: ye.uri,
										overrideIdentifier: ye.getLanguageId(),
									});
								}
								pe || (pe = this.S.getValue("editor.lineNumbers")),
									$e.updateOptions({ lineNumbers: pe });
							}
						};
						let le = !1;
						const oe = W(this.S),
							ae = this.lb.getRuntimeValue(ne.ZEN_MODE_EXIT_INFO);
						this.Ob()
							? ((le =
									!this.kb.runtime.mainWindowFullscreen &&
									oe.fullScreen &&
									!d.$u),
								se ||
									((ae.transitionedToFullScreen = le),
									(ae.transitionedToCenteredEditorLayout =
										!this.isMainEditorLayoutCentered() && oe.centerLayout),
									(ae.handleNotificationsDoNotDisturbMode =
										this.eb.getFilter() === k.NotificationsFilter.OFF),
									(ae.wasVisible.sideBar = this.isVisible(
										a.Parts.SIDEBAR_PART,
									)),
									(ae.wasVisible.panel = this.isVisible(a.Parts.PANEL_PART)),
									(ae.wasVisible.auxiliaryBar = this.isVisible(
										a.Parts.AUXILIARYBAR_PART,
									)),
									this.lb.setRuntimeValue(ne.ZEN_MODE_EXIT_INFO, ae)),
								this.Zb(!0, !0),
								this.ac(!0, !0),
								this.Wb(!0, !0),
								oe.hideActivityBar && this.Tb(!0, !0),
								oe.hideStatusBar && this.Qb(!0, !0),
								oe.hideLineNumbers &&
									(re("off"),
									this.kb.runtime.zenMode.transitionDisposables.set(
										a.ZenModeSettings.HIDE_LINENUMBERS,
										this.Y.onDidVisibleEditorsChange(() => re("off")),
									)),
								oe.showTabs !== this.Z.partOptions.showTabs &&
									this.kb.runtime.zenMode.transitionDisposables.set(
										a.ZenModeSettings.SHOW_TABS,
										this.Z.mainPart.enforcePartOptions({
											showTabs: oe.showTabs,
										}),
									),
								oe.silentNotifications &&
									ae.handleNotificationsDoNotDisturbMode &&
									this.eb.setFilter(k.NotificationsFilter.ERROR),
								oe.centerLayout && this.centerMainEditorLayout(!0, !0),
								this.kb.runtime.zenMode.transitionDisposables.set(
									"configurationChange",
									this.S.onDidChangeConfiguration((pe) => {
										if (
											pe.affectsConfiguration(
												a.ZenModeSettings.HIDE_ACTIVITYBAR,
											)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.HIDE_ACTIVITYBAR,
											);
											this.Tb($e, !0);
										}
										if (
											pe.affectsConfiguration(a.ZenModeSettings.HIDE_STATUSBAR)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.HIDE_STATUSBAR,
											);
											this.Qb($e, !0);
										}
										if (
											pe.affectsConfiguration(a.ZenModeSettings.CENTER_LAYOUT)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.CENTER_LAYOUT,
											);
											this.centerMainEditorLayout($e, !0);
										}
										if (pe.affectsConfiguration(a.ZenModeSettings.SHOW_TABS)) {
											const $e =
												this.S.getValue(a.ZenModeSettings.SHOW_TABS) ??
												"multiple";
											this.kb.runtime.zenMode.transitionDisposables.set(
												a.ZenModeSettings.SHOW_TABS,
												this.Z.mainPart.enforcePartOptions({ showTabs: $e }),
											);
										}
										if (
											pe.affectsConfiguration(
												a.ZenModeSettings.SILENT_NOTIFICATIONS,
											)
										) {
											const $e = !!this.S.getValue(
												a.ZenModeSettings.SILENT_NOTIFICATIONS,
											);
											ae.handleNotificationsDoNotDisturbMode &&
												this.eb.setFilter(
													$e
														? k.NotificationsFilter.ERROR
														: k.NotificationsFilter.OFF,
												);
										}
										if (
											pe.affectsConfiguration(
												a.ZenModeSettings.HIDE_LINENUMBERS,
											)
										) {
											const $e = this.S.getValue(
												a.ZenModeSettings.HIDE_LINENUMBERS,
											)
												? "off"
												: void 0;
											re($e),
												this.kb.runtime.zenMode.transitionDisposables.set(
													a.ZenModeSettings.HIDE_LINENUMBERS,
													this.Y.onDidVisibleEditorsChange(() => re($e)),
												);
										}
									}),
								))
							: (ae.wasVisible.panel && this.Zb(!1, !0),
								ae.wasVisible.auxiliaryBar && this.ac(!1, !0),
								ae.wasVisible.sideBar && this.Wb(!1, !0),
								this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN, !0) ||
									this.Tb(!1, !0),
								this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN, !0) ||
									this.Qb(!1, !0),
								ae.transitionedToCenteredEditorLayout &&
									this.centerMainEditorLayout(!1, !0),
								ae.handleNotificationsDoNotDisturbMode &&
									this.eb.setFilter(k.NotificationsFilter.OFF),
								re(),
								this.focus(),
								(le =
									ae.transitionedToFullScreen &&
									this.kb.runtime.mainWindowFullscreen)),
							Z || this.layout(),
							le && this.W.toggleFullScreen(G.$Bfb),
							(0, o.$xY)(this.S) &&
								(this.G.setViewVisible(
									this.H,
									(0, a.$rEb)(
										this.S,
										G.$Bfb,
										this.kb.runtime.menuBar.toggled,
										this.Ob(),
									),
								),
								this.yb(!0)),
							this.a.fire(this.Ob());
					}
					Qb(Z, se) {
						this.lb.setRuntimeValue(ne.STATUSBAR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.STATUSBAR_HIDDEN)
								: this.mainContainer.classList.remove(K.STATUSBAR_HIDDEN),
							this.G.setViewVisible(this.O, !Z);
					}
					Rb() {
						return {
							element: document.createElement("div"),
							maximumHeight: 0,
							minimumHeight: 0,
							maximumWidth: 0,
							minimumWidth: 0,
							toJSON: () => ({ type: a.Parts.ACTIVITYBAR_PART }),
							onDidChange: i.Event.None,
							layout: () => {},
							onDidVisibilityChange: i.Event.None,
						};
					}
					Sb() {
						const Z = this.Lb(a.Parts.TITLEBAR_PART),
							se = this.Lb(a.Parts.BANNER_PART),
							re = this.Lb(a.Parts.EDITOR_PART),
							le =
								this.activityBarDirection === "vertical"
									? this.Lb(a.Parts.ACTIVITYBAR_PART)
									: this.Rb(),
							oe = this.Lb(a.Parts.PANEL_PART),
							ae = this.Lb(a.Parts.AUXILIARYBAR_PART),
							pe = this.Lb(a.Parts.SIDEBAR_PART),
							$e = this.Lb(a.Parts.STATUSBAR_PART);
						(this.H = Z),
							(this.I = se),
							(this.J = pe),
							(this.P = le),
							(this.N = re),
							(this.L = oe),
							(this.M = ae),
							(this.O = $e);
						const ye = {
								[a.Parts.ACTIVITYBAR_PART]: this.P,
								[a.Parts.BANNER_PART]: this.I,
								[a.Parts.TITLEBAR_PART]: this.H,
								[a.Parts.EDITOR_PART]: this.N,
								[a.Parts.PANEL_PART]: this.L,
								[a.Parts.SIDEBAR_PART]: this.J,
								[a.Parts.STATUSBAR_PART]: this.O,
								[a.Parts.AUXILIARYBAR_PART]: this.M,
							},
							ue = ({ type: me }) => ye[me],
							fe = y.$Cob.deserialize(
								this.ec(),
								{ fromJSON: ue },
								{ proportionalLayout: !1 },
							);
						this.mainContainer.prepend(fe.element),
							this.mainContainer.setAttribute("role", "application"),
							(this.G = fe),
							(this.G.edgeSnapping = this.kb.runtime.mainWindowFullscreen);
						for (const me of [Z, re, le, oe, pe, $e, ae, se])
							me &&
								this.D(
									me.onDidVisibilityChange((ve) => {
										me === pe
											? this.Wb(!ve, !0)
											: me === oe
												? this.Zb(!ve, !0)
												: me === ae
													? this.ac(!ve, !0)
													: me === re && this.Vb(!ve, !0),
											this.h.fire(),
											this.rb(this.mainContainer, this.w);
									}),
								);
						this.D(
							this.U.onWillSaveState((me) => {
								const ve = this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN)
									? this.G.getViewCachedVisibleSize(this.J)
									: this.G.getViewSize(this.J).width;
								this.lb.setInitializationValue(ne.SIDEBAR_SIZE, ve);
								const ge = this.lb.getRuntimeValue(ne.PANEL_HIDDEN)
									? this.G.getViewCachedVisibleSize(this.L)
									: (0, a.$nEb)(this.lb.getRuntimeValue(ne.PANEL_POSITION))
										? this.G.getViewSize(this.L).height
										: this.G.getViewSize(this.L).width;
								this.lb.setInitializationValue(ne.PANEL_SIZE, ge);
								const be = this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN)
									? this.G.getViewCachedVisibleSize(this.M)
									: this.G.getViewSize(this.M).width;
								this.lb.setInitializationValue(ne.AUXILIARYBAR_SIZE, be),
									this.lb.save(!0, !0);
							}),
						);
					}
					layout() {
						this.mb ||
							((this.w = (0, w.$ogb)(
								this.kb.runtime.mainWindowFullscreen
									? G.$Bfb.document.body
									: this.nb,
							)),
							this.hb.trace(
								`Layout#layout, height: ${this.w.height}, width: ${this.w.width}`,
							),
							(0, w.$sgb)(this.mainContainer, 0, 0, 0, 0, "relative"),
							(0, w.size)(this.mainContainer, this.w.width, this.w.height),
							this.G.layout(this.w.width, this.w.height),
							(this.F = !0),
							this.rb(this.mainContainer, this.w));
					}
					isMainEditorLayoutCentered() {
						return this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED);
					}
					centerMainEditorLayout(Z, se) {
						this.lb.setRuntimeValue(ne.MAIN_EDITOR_CENTERED, Z);
						const re = this.Y.activeEditor;
						let le = !1;
						re instanceof A.$GVb
							? (le = this.S.getValue("diffEditor.renderSideBySide"))
							: re?.hasCapability(m.EditorInputCapabilities.MultipleEditors) &&
								(le = !0),
							this.S.getValue("workbench.editor.centeredLayoutAutoResize") &&
								((this.Z.mainPart.groups.length > 1 &&
									!this.Z.mainPart.hasMaximizedGroup()) ||
									le) &&
								(Z = !1),
							this.Z.mainPart.isLayoutCentered() !== Z &&
								(this.Z.mainPart.centerLayout(Z), se || this.layout()),
							this.b.fire(this.lb.getRuntimeValue(ne.MAIN_EDITOR_CENTERED));
					}
					resizePart(Z, se, re) {
						const le = Math.sign(se) * (0, w.$qhb)((0, w.$Ogb)(), Math.abs(se)),
							oe = Math.sign(re) * (0, w.$qhb)((0, w.$Ogb)(), Math.abs(re));
						let ae;
						switch (Z) {
							case a.Parts.SIDEBAR_PART:
								(ae = this.G.getViewSize(this.J)),
									this.G.resizeView(this.J, {
										width: ae.width + le,
										height: ae.height,
									});
								break;
							case a.Parts.PANEL_PART:
								(ae = this.G.getViewSize(this.L)),
									this.G.resizeView(this.L, {
										width:
											ae.width +
											((0, a.$nEb)(this.getPanelPosition()) ? 0 : le),
										height:
											ae.height +
											((0, a.$nEb)(this.getPanelPosition()) ? oe : 0),
									});
								break;
							case a.Parts.AUXILIARYBAR_PART:
								(ae = this.G.getViewSize(this.M)),
									this.G.resizeView(this.M, {
										width: ae.width + le,
										height: ae.height,
									});
								break;
							case a.Parts.EDITOR_PART:
								if (
									((ae = this.G.getViewSize(this.N)),
									this.Z.mainPart.count === 1)
								)
									this.G.resizeView(this.N, {
										width: ae.width + le,
										height: ae.height + oe,
									});
								else {
									const pe = this.Z.mainPart.activeGroup,
										{ width: $e, height: ye } = this.Z.mainPart.getSize(pe);
									this.Z.mainPart.setSize(pe, {
										width: $e + le,
										height: ye + oe,
									});
									const { width: ue, height: fe } = this.Z.mainPart.getSize(pe);
									((oe && ye === fe) || (le && $e === ue)) &&
										this.G.resizeView(this.N, {
											width: ae.width + (le && $e === ue ? le : 0),
											height: ae.height + (oe && ye === fe ? oe : 0),
										});
								}
								break;
							default:
								return;
						}
					}
					Tb(Z, se) {
						this.P &&
							(this.lb.setRuntimeValue(ne.ACTIVITYBAR_HIDDEN, Z),
							this.G.setViewVisible(this.P, !Z));
					}
					Ub(Z) {
						this.G.setViewVisible(this.I, !Z);
					}
					Vb(Z, se) {
						this.lb.setRuntimeValue(ne.EDITOR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.MAIN_EDITOR_AREA_HIDDEN)
								: this.mainContainer.classList.remove(
										K.MAIN_EDITOR_AREA_HIDDEN,
									),
							this.G.setViewVisible(this.N, !Z),
							Z && !this.isVisible(a.Parts.PANEL_PART) && this.Zb(!1, !0);
					}
					getLayoutClasses() {
						return (0, T.$Lb)([
							this.isVisible(a.Parts.SIDEBAR_PART) ? void 0 : K.SIDEBAR_HIDDEN,
							this.isVisible(a.Parts.EDITOR_PART, G.$Bfb)
								? void 0
								: K.MAIN_EDITOR_AREA_HIDDEN,
							this.isVisible(a.Parts.PANEL_PART) ? void 0 : K.PANEL_HIDDEN,
							this.isVisible(a.Parts.AUXILIARYBAR_PART)
								? void 0
								: K.AUXILIARYBAR_HIDDEN,
							this.isVisible(a.Parts.STATUSBAR_PART)
								? void 0
								: K.STATUSBAR_HIDDEN,
							this.kb.runtime.mainWindowFullscreen ? K.FULLSCREEN : void 0,
						]);
					}
					Wb(Z, se) {
						if (
							(this.lb.setRuntimeValue(ne.SIDEBAR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.SIDEBAR_HIDDEN)
								: this.mainContainer.classList.remove(K.SIDEBAR_HIDDEN),
							Z &&
								this.$.getActivePaneComposite(N.ViewContainerLocation.Sidebar))
						)
							this.$.hideActivePaneComposite(N.ViewContainerLocation.Sidebar),
								this.Nb();
						else if (
							!Z &&
							!this.$.getActivePaneComposite(N.ViewContainerLocation.Sidebar)
						) {
							const re = this.$.getLastActivePaneCompositeId(
								N.ViewContainerLocation.Sidebar,
							);
							re &&
								(this.$.openPaneComposite(
									re,
									N.ViewContainerLocation.Sidebar,
									!0,
								) ||
									this.$.openPaneComposite(
										this.bb.getDefaultViewContainer(
											N.ViewContainerLocation.Sidebar,
										)?.id,
										N.ViewContainerLocation.Sidebar,
										!0,
									));
						}
						this.G.setViewVisible(this.J, !Z);
					}
					Xb(Z) {
						const se = this.bb.getViewContainerById(Z);
						if (!se) return !1;
						const re = this.bb.getViewContainerModel(se);
						return re ? re.activeViewDescriptors.length >= 1 : !1;
					}
					Yb(Z, se, re) {
						const le = !(0, a.$nEb)(re),
							oe =
								le ||
								!(
									se === "center" ||
									(Z === a.Position.LEFT && se === "right") ||
									(Z === a.Position.RIGHT && se === "left")
								),
							ae =
								le ||
								!(
									se === "center" ||
									(Z === a.Position.RIGHT && se === "right") ||
									(Z === a.Position.LEFT && se === "left")
								),
							pe = this.isVisible(a.Parts.PANEL_PART)
								? this.G.getViewSize(this.L).width
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.L) ??
											this.L.minimumWidth,
									),
							$e = this.isVisible(a.Parts.PANEL_PART)
								? this.G.getViewSize(this.L).height
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.L) ??
											this.L.minimumHeight,
									),
							ye = this.isVisible(a.Parts.SIDEBAR_PART)
								? this.G.getViewSize(this.J).width
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.J) ??
											this.J.minimumWidth,
									),
							ue = this.isVisible(a.Parts.AUXILIARYBAR_PART)
								? this.G.getViewSize(this.M).width
								: y.Sizing.Invisible(
										this.G.getViewCachedVisibleSize(this.M) ??
											this.M.minimumWidth,
									);
						Z === a.Position.LEFT
							? (this.activityBarDirection === "vertical" && this.P
									? (this.G.moveViewTo(this.P, [2, 0]),
										this.G.moveView(
											this.J,
											ye,
											oe ? this.N : this.P,
											oe ? y.Direction.Left : y.Direction.Right,
										))
									: oe
										? this.G.moveView(this.J, ye, this.N, y.Direction.Left)
										: this.G.moveViewTo(this.J, [2, 0]),
								ae
									? this.G.moveView(this.M, ue, this.N, y.Direction.Right)
									: this.G.moveViewTo(this.M, [2, -1]))
							: (this.activityBarDirection === "vertical" && this.P
									? (this.G.moveViewTo(this.P, [2, -1]),
										this.G.moveView(
											this.J,
											ye,
											oe ? this.N : this.P,
											oe ? y.Direction.Right : y.Direction.Left,
										))
									: oe
										? this.G.moveView(this.J, ye, this.N, y.Direction.Right)
										: this.G.moveViewTo(this.J, [2, -1]),
								ae
									? this.G.moveView(this.M, ue, this.N, y.Direction.Left)
									: this.G.moveViewTo(this.M, [2, 0])),
							le &&
								(this.G.moveView(
									this.L,
									pe,
									this.N,
									re === a.Position.LEFT ? y.Direction.Left : y.Direction.Right,
								),
								this.G.resizeView(this.L, { height: $e, width: pe })),
							this.isVisible(a.Parts.SIDEBAR_PART) &&
								this.G.resizeView(this.J, {
									height: this.G.getViewSize(this.J).height,
									width: ye,
								}),
							this.isVisible(a.Parts.AUXILIARYBAR_PART) &&
								this.G.resizeView(this.M, {
									height: this.G.getViewSize(this.M).height,
									width: ue,
								});
					}
					setPanelAlignment(Z, se) {
						(0, a.$nEb)(this.getPanelPosition()) ||
							this.setPanelPosition(a.Position.BOTTOM),
							Z !== "center" &&
								this.isPanelMaximized() &&
								this.toggleMaximizedPanel(),
							this.lb.setRuntimeValue(ne.PANEL_ALIGNMENT, Z),
							this.Yb(this.getSideBarPosition(), Z, this.getPanelPosition()),
							this.c.fire(Z);
					}
					Zb(Z, se) {
						if (!this.G) return;
						const re = !this.isVisible(a.Parts.PANEL_PART);
						this.lb.setRuntimeValue(ne.PANEL_HIDDEN, Z);
						const le = this.isPanelMaximized(),
							oe = this.$b();
						Z
							? this.mainContainer.classList.add(K.PANEL_HIDDEN)
							: this.mainContainer.classList.remove(K.PANEL_HIDDEN);
						let ae = !1;
						if (
							Z &&
							this.$.getActivePaneComposite(N.ViewContainerLocation.Panel)
						)
							this.$.hideActivePaneComposite(N.ViewContainerLocation.Panel),
								(ae = !d.$u);
						else if (
							!Z &&
							!this.$.getActivePaneComposite(N.ViewContainerLocation.Panel)
						) {
							let pe = this.$.getLastActivePaneCompositeId(
								N.ViewContainerLocation.Panel,
							);
							if (
								((!pe || !this.Xb(pe)) &&
									(pe = this.bb
										.getViewContainersByLocation(N.ViewContainerLocation.Panel)
										.find(($e) => this.Xb($e.id))?.id),
								pe)
							) {
								const $e = !se;
								this.$.openPaneComposite(pe, N.ViewContainerLocation.Panel, $e);
							}
						}
						Z && le && this.toggleMaximizedPanel(),
							re !== Z &&
								(this.G.setViewVisible(this.L, !Z),
								Z
									? this.lb.setRuntimeValue(ne.PANEL_WAS_LAST_MAXIMIZED, le)
									: !se && le !== oe && this.toggleMaximizedPanel(),
								ae && this.Z.mainPart.activeGroup.focus());
					}
					toggleMaximizedPanel() {
						const Z = this.G.getViewSize(this.L),
							se = this.getPanelPosition(),
							re = this.isPanelMaximized();
						re
							? (this.Vb(!1),
								this.G.resizeView(this.L, {
									width: (0, a.$nEb)(se)
										? Z.width
										: this.lb.getRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
											),
									height: (0, a.$nEb)(se)
										? this.lb.getRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
											)
										: Z.height,
								}))
							: (this.isVisible(a.Parts.PANEL_PART) &&
									((0, a.$nEb)(se)
										? this.lb.setRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
												Z.height,
											)
										: this.lb.setRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
												Z.width,
											)),
								this.Vb(!0)),
							this.lb.setRuntimeValue(ne.PANEL_WAS_LAST_MAXIMIZED, !re);
					}
					$b() {
						if (
							this.getPanelAlignment() !== "center" &&
							(0, a.$nEb)(this.getPanelPosition())
						)
							return !1;
						const Z = (0, a.$qEb)(this.S.getValue(ee.PANEL_OPENS_MAXIMIZED)),
							se = this.lb.getRuntimeValue(ne.PANEL_WAS_LAST_MAXIMIZED);
						return (
							Z === a.PanelOpensMaximizedOptions.ALWAYS ||
							(Z === a.PanelOpensMaximizedOptions.REMEMBER_LAST && se)
						);
					}
					ac(Z, se) {
						if (
							(this.lb.setRuntimeValue(ne.AUXILIARYBAR_HIDDEN, Z),
							Z
								? this.mainContainer.classList.add(K.AUXILIARYBAR_HIDDEN)
								: this.mainContainer.classList.remove(K.AUXILIARYBAR_HIDDEN),
							Z &&
								this.$.getActivePaneComposite(
									N.ViewContainerLocation.AuxiliaryBar,
								))
						)
							this.$.hideActivePaneComposite(
								N.ViewContainerLocation.AuxiliaryBar,
							),
								this.Nb();
						else if (
							!Z &&
							!this.$.getActivePaneComposite(
								N.ViewContainerLocation.AuxiliaryBar,
							)
						) {
							let re = this.$.getLastActivePaneCompositeId(
								N.ViewContainerLocation.AuxiliaryBar,
							);
							if (
								((!re || !this.Xb(re)) &&
									(re = this.bb
										.getViewContainersByLocation(
											N.ViewContainerLocation.AuxiliaryBar,
										)
										.find((le) => this.Xb(le.id))?.id),
								re)
							) {
								const le = !se;
								this.$.openPaneComposite(
									re,
									N.ViewContainerLocation.AuxiliaryBar,
									le,
								);
							}
						}
						this.G.setViewVisible(this.M, !Z);
					}
					setPartHidden(Z, se, re = G.$Bfb) {
						switch (se) {
							case a.Parts.ACTIVITYBAR_PART:
								return this.Tb(Z);
							case a.Parts.SIDEBAR_PART:
								return this.Wb(Z);
							case a.Parts.EDITOR_PART:
								return this.Vb(Z);
							case a.Parts.BANNER_PART:
								return this.Ub(Z);
							case a.Parts.AUXILIARYBAR_PART:
								return this.ac(Z);
							case a.Parts.PANEL_PART:
								return this.Zb(Z);
						}
					}
					hasMainWindowBorder() {
						return this.kb.runtime.mainWindowBorder;
					}
					getMainWindowBorderRadius() {
						return this.kb.runtime.mainWindowBorder && d.$m ? "5px" : void 0;
					}
					isPanelMaximized() {
						return (
							(this.getPanelAlignment() === "center" ||
								!(0, a.$nEb)(this.getPanelPosition())) &&
							!this.isVisible(a.Parts.EDITOR_PART, G.$Bfb)
						);
					}
					getSideBarPosition() {
						return this.lb.getRuntimeValue(ne.SIDEBAR_POSITON);
					}
					getPanelAlignment() {
						return this.lb.getRuntimeValue(ne.PANEL_ALIGNMENT);
					}
					updateMenubarVisibility(Z) {
						const se = (0, a.$rEb)(
							this.S,
							G.$Bfb,
							this.kb.runtime.menuBar.toggled,
							this.Ob(),
						);
						!Z &&
							this.G &&
							se !== this.isVisible(a.Parts.TITLEBAR_PART, G.$Bfb) &&
							this.G.setViewVisible(this.H, se);
					}
					updateCustomTitleBarVisibility() {
						const Z = (0, a.$rEb)(
								this.S,
								G.$Bfb,
								this.kb.runtime.menuBar.toggled,
								this.Ob(),
							),
							se = this.isVisible(a.Parts.TITLEBAR_PART);
						Z !== se && this.G.setViewVisible(this.H, Z);
					}
					toggleMenuBar() {
						let Z = (0, o.$wY)(this.S);
						typeof Z != "string" && (Z = "classic");
						let se;
						Z === "visible" || Z === "classic"
							? (se = (0, o.$yY)(this.S) ? "toggle" : "compact")
							: (se = "classic"),
							this.S.updateValue("window.menuBarVisibility", se);
					}
					getPanelPosition() {
						return this.lb.getRuntimeValue(ne.PANEL_POSITION);
					}
					setPanelPosition(Z) {
						this.isVisible(a.Parts.PANEL_PART) || this.Zb(!1);
						const se = this.Lb(a.Parts.PANEL_PART),
							re = (0, a.$oEb)(this.getPanelPosition()),
							le = (0, a.$oEb)(Z),
							oe = (0, P.$wg)(se.getContainer());
						oe.classList.remove(re), oe.classList.add(le), se.updateStyles();
						const ae = this.G.getViewSize(this.L),
							pe = this.G.getViewSize(this.J),
							$e = this.G.getViewSize(this.M);
						let ye = !this.isVisible(a.Parts.EDITOR_PART, G.$Bfb);
						le !== re &&
							!ye &&
							((0, a.$nEb)(Z)
								? this.lb.setRuntimeValue(
										ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
										ae.width,
									)
								: (0, a.$nEb)((0, a.$pEb)(re)) &&
									this.lb.setRuntimeValue(
										ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
										ae.height,
									)),
							(0, a.$nEb)(Z) &&
								this.getPanelAlignment() !== "center" &&
								ye &&
								(this.toggleMaximizedPanel(), (ye = !1)),
							this.lb.setRuntimeValue(ne.PANEL_POSITION, Z);
						const ue = this.isVisible(a.Parts.SIDEBAR_PART),
							fe = this.isVisible(a.Parts.AUXILIARYBAR_PART);
						Z === a.Position.BOTTOM
							? this.G.moveView(
									this.L,
									ye
										? ae.height
										: this.lb.getRuntimeValue(
												ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
											),
									this.N,
									y.Direction.Down,
								)
							: Z === a.Position.TOP
								? this.G.moveView(
										this.L,
										ye
											? ae.height
											: this.lb.getRuntimeValue(
													ne.PANEL_LAST_NON_MAXIMIZED_HEIGHT,
												),
										this.N,
										y.Direction.Up,
									)
								: Z === a.Position.RIGHT
									? this.G.moveView(
											this.L,
											ye
												? ae.width
												: this.lb.getRuntimeValue(
														ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
													),
											this.N,
											y.Direction.Right,
										)
									: this.G.moveView(
											this.L,
											ye
												? ae.width
												: this.lb.getRuntimeValue(
														ne.PANEL_LAST_NON_MAXIMIZED_WIDTH,
													),
											this.N,
											y.Direction.Left,
										),
							this.G.resizeView(this.J, pe),
							ue || this.Wb(!0),
							this.G.resizeView(this.M, $e),
							fe || this.ac(!0),
							(0, a.$nEb)(Z) &&
								this.Yb(this.getSideBarPosition(), this.getPanelAlignment(), Z),
							this.g.fire(le);
					}
					isWindowMaximized(Z) {
						return this.kb.runtime.maximized.has((0, w.getWindowId)(Z));
					}
					updateWindowMaximizedState(Z, se) {
						this.mainContainer.classList.toggle(K.MAXIMIZED, se);
						const re = (0, w.getWindowId)(Z);
						se !== this.kb.runtime.maximized.has(re) &&
							(se
								? this.kb.runtime.maximized.add(re)
								: this.kb.runtime.maximized.delete(re),
							this.yb(),
							this.f.fire({ windowId: re, maximized: se }));
					}
					getVisibleNeighborPart(Z, se) {
						if (!this.G || !this.isVisible(Z, G.$Bfb)) return;
						const re = this.G.getNeighborViews(this.Lb(Z), se, !1);
						if (re)
							for (const le of re) {
								const oe = [
									a.Parts.ACTIVITYBAR_PART,
									a.Parts.EDITOR_PART,
									a.Parts.PANEL_PART,
									a.Parts.AUXILIARYBAR_PART,
									a.Parts.SIDEBAR_PART,
									a.Parts.STATUSBAR_PART,
									a.Parts.TITLEBAR_PART,
								].find(
									(ae) =>
										(ae !== a.Parts.ACTIVITYBAR_PART || this.P) &&
										this.Lb(ae) === le &&
										this.isVisible(ae, G.$Bfb),
								);
								if (oe !== void 0) return oe;
							}
					}
					bc() {
						const Z =
								this.G.getNeighborViews(this.H, y.Direction.Up, !1).length > 0,
							se = this.Mb();
						Z !== se &&
							this.G.moveView(
								this.I,
								y.Sizing.Distribute,
								this.H,
								se ? y.Direction.Up : y.Direction.Down,
							),
							this.G.setViewVisible(
								this.H,
								(0, a.$rEb)(
									this.S,
									G.$Bfb,
									this.kb.runtime.menuBar.toggled,
									this.Ob(),
								),
							);
					}
					cc(Z, se, re) {
						if (!Z.sideBar && !Z.auxiliaryBar)
							return (Z.editor.size = se), Z.editor;
						const le = [Z.editor];
						return (
							(Z.editor.size = re),
							Z.sideBar &&
								(this.lb.getRuntimeValue(ne.SIDEBAR_POSITON) === a.Position.LEFT
									? le.splice(0, 0, Z.sideBar)
									: le.push(Z.sideBar),
								(Z.editor.size -= this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN)
									? 0
									: Z.sideBar.size)),
							Z.auxiliaryBar &&
								(this.lb.getRuntimeValue(ne.SIDEBAR_POSITON) ===
								a.Position.RIGHT
									? le.splice(0, 0, Z.auxiliaryBar)
									: le.push(Z.auxiliaryBar),
								(Z.editor.size -= this.lb.getRuntimeValue(
									ne.AUXILIARYBAR_HIDDEN,
								)
									? 0
									: Z.auxiliaryBar.size)),
							{ type: "branch", data: le, size: se }
						);
					}
					dc(Z, se, re) {
						const le =
								!Z.activityBar || this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN)
									? 0
									: Z.activityBar.size,
							oe = this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN)
								? 0
								: Z.sideBar.size,
							ae = this.lb.getRuntimeValue(ne.AUXILIARYBAR_HIDDEN)
								? 0
								: Z.auxiliaryBar.size,
							pe = this.lb.getInitializationValue(ne.PANEL_SIZE)
								? 0
								: Z.panel.size,
							$e = this.lb.getRuntimeValue(ne.PANEL_POSITION),
							ye = this.lb.getRuntimeValue(ne.SIDEBAR_POSITON),
							ue = [];
						if (!(0, a.$nEb)($e))
							ue.push(Z.editor),
								(Z.editor.size = se - le - oe - pe - ae),
								$e === a.Position.RIGHT
									? ue.push(Z.panel)
									: ue.splice(0, 0, Z.panel),
								ye === a.Position.LEFT
									? (ue.push(Z.auxiliaryBar),
										ue.splice(0, 0, Z.sideBar),
										Z.activityBar && ue.splice(0, 0, Z.activityBar))
									: (ue.splice(0, 0, Z.auxiliaryBar),
										ue.push(Z.sideBar),
										Z.activityBar && ue.push(Z.activityBar));
						else {
							const fe = this.lb.getRuntimeValue(ne.PANEL_ALIGNMENT),
								me = !(
									fe === "center" ||
									(ye === a.Position.LEFT && fe === "right") ||
									(ye === a.Position.RIGHT && fe === "left")
								),
								ve = !(
									fe === "center" ||
									(ye === a.Position.RIGHT && fe === "right") ||
									(ye === a.Position.LEFT && fe === "left")
								),
								ge = se - le - (me ? 0 : oe) - (ve ? 0 : ae),
								be = this.cc(
									{
										editor: Z.editor,
										sideBar: me ? Z.sideBar : void 0,
										auxiliaryBar: ve ? Z.auxiliaryBar : void 0,
									},
									re - pe,
									ge,
								);
							ue.push({
								type: "branch",
								data: $e === a.Position.BOTTOM ? [be, Z.panel] : [Z.panel, be],
								size: ge,
							}),
								me ||
									(ye === a.Position.LEFT
										? ue.splice(0, 0, Z.sideBar)
										: ue.push(Z.sideBar)),
								ve ||
									(ye === a.Position.RIGHT
										? ue.splice(0, 0, Z.auxiliaryBar)
										: ue.push(Z.auxiliaryBar)),
								Z.activityBar &&
									(ye === a.Position.LEFT
										? ue.splice(0, 0, Z.activityBar)
										: ue.push(Z.activityBar));
						}
						return ue;
					}
					ec() {
						const { width: Z, height: se } = this.lb.getInitializationValue(
								ne.GRID_SIZE,
							),
							re = this.lb.getInitializationValue(ne.SIDEBAR_SIZE),
							le = this.lb.getInitializationValue(ne.AUXILIARYBAR_SIZE),
							oe = this.lb.getInitializationValue(ne.PANEL_SIZE),
							ae = this.H.minimumHeight,
							pe = this.I.minimumHeight,
							$e = this.O.minimumHeight,
							ye = this.P?.minimumWidth ?? 0,
							ue = se - ae - $e,
							fe = [
								{
									type: "leaf",
									data: { type: a.Parts.TITLEBAR_PART },
									size: ae,
									visible: this.isVisible(a.Parts.TITLEBAR_PART, G.$Bfb),
								},
								{
									type: "leaf",
									data: { type: a.Parts.BANNER_PART },
									size: pe,
									visible: !1,
								},
							],
							me = this.P
								? {
										type: "leaf",
										data: { type: a.Parts.ACTIVITYBAR_PART },
										size: ye,
										visible: !this.lb.getRuntimeValue(ne.ACTIVITYBAR_HIDDEN),
									}
								: void 0,
							ve = {
								type: "leaf",
								data: { type: a.Parts.SIDEBAR_PART },
								size: re,
								visible: !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN),
							},
							ge = {
								type: "leaf",
								data: { type: a.Parts.AUXILIARYBAR_PART },
								size: le,
								visible: this.isVisible(a.Parts.AUXILIARYBAR_PART),
							},
							be = {
								type: "leaf",
								data: { type: a.Parts.EDITOR_PART },
								size: 0,
								visible: !this.lb.getRuntimeValue(ne.EDITOR_HIDDEN),
							},
							Ce = {
								type: "leaf",
								data: { type: a.Parts.PANEL_PART },
								size: oe,
								visible: !this.lb.getRuntimeValue(ne.PANEL_HIDDEN),
							},
							Le = this.dc(
								{
									activityBar: me,
									auxiliaryBar: ge,
									editor: be,
									panel: Ce,
									sideBar: ve,
								},
								Z,
								ue,
							),
							Fe = {
								root: {
									type: "branch",
									size: Z,
									data: [
										...(this.Mb() ? fe.reverse() : fe),
										{ type: "branch", data: Le, size: ue },
										{
											type: "leaf",
											data: { type: a.Parts.STATUSBAR_PART },
											size: $e,
											visible: !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN),
										},
									],
								},
								orientation: y.Orientation.VERTICAL,
								width: Z,
								height: se,
							},
							Oe = {
								activityBarVisible: !this.lb.getRuntimeValue(
									ne.ACTIVITYBAR_HIDDEN,
								),
								sideBarVisible: !this.lb.getRuntimeValue(ne.SIDEBAR_HIDDEN),
								auxiliaryBarVisible: !this.lb.getRuntimeValue(
									ne.AUXILIARYBAR_HIDDEN,
								),
								panelVisible: !this.lb.getRuntimeValue(ne.PANEL_HIDDEN),
								statusbarVisible: !this.lb.getRuntimeValue(ne.STATUSBAR_HIDDEN),
								sideBarPosition: (0, a.$oEb)(
									this.lb.getRuntimeValue(ne.SIDEBAR_POSITON),
								),
								panelPosition: (0, a.$oEb)(
									this.lb.getRuntimeValue(ne.PANEL_POSITION),
								),
							};
						return this.ib.publicLog2("startupLayout", Oe), Fe;
					}
					dispose() {
						super.dispose(), (this.mb = !0);
					}
				}
				e.$n3c = J;
				function W(Q) {
					return Q.getValue(ee.ZEN_MODE_CONFIG);
				}
				class X {
					constructor(Z, se, re, le) {
						(this.name = Z),
							(this.scope = se),
							(this.target = re),
							(this.defaultValue = le);
					}
				}
				class Y extends X {
					constructor(Z, se, re, le, oe) {
						super(Z, se, re, le),
							(this.zenModeIgnore = oe),
							(this.runtime = !0);
					}
				}
				class ie extends X {
					constructor() {
						super(...arguments), (this.runtime = !1);
					}
				}
				const ne = {
					MAIN_EDITOR_CENTERED: new Y(
						"editor.centered",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					ZEN_MODE_ACTIVE: new Y(
						"zenMode.active",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					ZEN_MODE_EXIT_INFO: new Y(
						"zenMode.exitInfo",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						{
							transitionedToCenteredEditorLayout: !1,
							transitionedToFullScreen: !1,
							handleNotificationsDoNotDisturbMode: !1,
							wasVisible: { auxiliaryBar: !1, panel: !1, sideBar: !1 },
						},
					),
					GRID_SIZE: new ie(
						"grid.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						{ width: 800, height: 600 },
					),
					SIDEBAR_SIZE: new ie(
						"sideBar.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						200,
					),
					AUXILIARYBAR_SIZE: new ie(
						"auxiliaryBar.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						200,
					),
					PANEL_SIZE: new ie(
						"panel.size",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						300,
					),
					PANEL_LAST_NON_MAXIMIZED_HEIGHT: new Y(
						"panel.lastNonMaximizedHeight",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						300,
					),
					PANEL_LAST_NON_MAXIMIZED_WIDTH: new Y(
						"panel.lastNonMaximizedWidth",
						c.StorageScope.PROFILE,
						c.StorageTarget.MACHINE,
						300,
					),
					PANEL_WAS_LAST_MAXIMIZED: new Y(
						"panel.wasLastMaximized",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					SIDEBAR_POSITON: new Y(
						"sideBar.position",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						a.Position.LEFT,
					),
					PANEL_POSITION: new Y(
						"panel.position",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						a.Position.BOTTOM,
					),
					PANEL_ALIGNMENT: new Y(
						"panel.alignment",
						c.StorageScope.PROFILE,
						c.StorageTarget.USER,
						"center",
					),
					ACTIVITYBAR_HIDDEN: new Y(
						"activityBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
						!0,
					),
					SIDEBAR_HIDDEN: new Y(
						"sideBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					EDITOR_HIDDEN: new Y(
						"editor.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					PANEL_HIDDEN: new Y(
						"panel.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!0,
					),
					AUXILIARYBAR_HIDDEN: new Y(
						"auxiliaryBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
					),
					STATUSBAR_HIDDEN: new Y(
						"statusBar.hidden",
						c.StorageScope.WORKSPACE,
						c.StorageTarget.MACHINE,
						!1,
						!0,
					),
				};
				var ee;
				(function (Q) {
					(Q.PANEL_POSITION = "workbench.panel.defaultLocation"),
						(Q.PANEL_OPENS_MAXIMIZED = "workbench.panel.opensMaximized"),
						(Q.ZEN_MODE_CONFIG = "zenMode"),
						(Q.EDITOR_CENTERED_LAYOUT_AUTO_RESIZE =
							"workbench.editor.centeredLayoutAutoResize");
				})(ee || (ee = {}));
				var _;
				(function (Q) {
					(Q.STATUSBAR_VISIBLE = "workbench.statusBar.visible"),
						(Q.SIDEBAR_POSITION = "workbench.sideBar.location");
				})(_ || (_ = {}));
				class te extends t.$1c {
					static {
						this.STORAGE_PREFIX = "workbench.";
					}
					constructor(Z, se, re, le) {
						super(),
							(this.c = Z),
							(this.f = se),
							(this.g = re),
							(this.h = le),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeState = this.a.event),
							(this.b = new Map()),
							this.D(this.f.onDidChangeConfiguration((oe) => this.j(oe)));
					}
					j(Z) {
						Z.affectsConfiguration(a.LayoutSettings.ACTIVITY_BAR_LOCATION) &&
							this.q(ne.ACTIVITYBAR_HIDDEN, this.n()),
							Z.affectsConfiguration(_.STATUSBAR_VISIBLE) &&
								this.q(
									ne.STATUSBAR_HIDDEN,
									!this.f.getValue(_.STATUSBAR_VISIBLE),
								),
							Z.affectsConfiguration(_.SIDEBAR_POSITION) &&
								this.q(
									ne.SIDEBAR_POSITON,
									(0, a.$pEb)(this.f.getValue(_.SIDEBAR_POSITION) ?? "left"),
								);
					}
					m(Z, se) {
						const re = this.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
						(Z.zenModeIgnore && re) ||
							(Z === ne.ACTIVITYBAR_HIDDEN
								? this.f.updateValue(
										a.LayoutSettings.ACTIVITY_BAR_LOCATION,
										se ? a.ActivityBarPosition.HIDDEN : void 0,
									)
								: Z === ne.STATUSBAR_HIDDEN
									? this.f.updateValue(_.STATUSBAR_VISIBLE, !se)
									: Z === ne.SIDEBAR_POSITON &&
										this.f.updateValue(_.SIDEBAR_POSITION, (0, a.$oEb)(se)));
					}
					load() {
						let Z;
						for (Z in ne) {
							const re = ne[Z],
								le = this.s(re);
							le !== void 0 && this.b.set(re.name, le);
						}
						this.b.set(ne.ACTIVITYBAR_HIDDEN.name, this.n()),
							this.b.set(
								ne.STATUSBAR_HIDDEN.name,
								!this.f.getValue(_.STATUSBAR_VISIBLE),
							),
							this.b.set(
								ne.SIDEBAR_POSITON.name,
								(0, a.$pEb)(this.f.getValue(_.SIDEBAR_POSITION) ?? "left"),
							);
						const se = (0, w.$ogb)(this.h);
						(ne.PANEL_POSITION.defaultValue = (0, a.$pEb)(
							this.f.getValue(ee.PANEL_POSITION) ?? "bottom",
						)),
							(ne.GRID_SIZE.defaultValue = {
								height: se.height,
								width: se.width,
							}),
							(ne.SIDEBAR_SIZE.defaultValue = Math.min(300, se.width / 4)),
							(ne.AUXILIARYBAR_SIZE.defaultValue = Math.min(
								400,
								se.width / 2.5,
							)),
							(ne.PANEL_SIZE.defaultValue =
								(this.b.get(ne.PANEL_POSITION.name) ??
								(0, a.$nEb)(ne.PANEL_POSITION.defaultValue))
									? se.height / 3
									: se.width / 4),
							(ne.SIDEBAR_HIDDEN.defaultValue =
								this.g.getWorkbenchState() === h.WorkbenchState.EMPTY);
						for (Z in ne) {
							const re = ne[Z];
							this.b.get(re.name) === void 0 &&
								this.b.set(re.name, re.defaultValue);
						}
						this.D(
							this.c.onDidChangeValue(
								c.StorageScope.PROFILE,
								void 0,
								this.D(new t.$Zc()),
							)((re) => {
								let le;
								for (le in ne) {
									const oe = ne[le];
									if (
										oe instanceof Y &&
										oe.scope === c.StorageScope.PROFILE &&
										oe.target === c.StorageTarget.USER &&
										`${te.STORAGE_PREFIX}${oe.name}` === re.key
									) {
										const ae = this.s(oe) ?? oe.defaultValue;
										this.b.get(oe.name) !== ae &&
											(this.b.set(oe.name, ae),
											this.a.fire({ key: oe, value: ae }));
									}
								}
							}),
						);
					}
					save(Z, se) {
						let re;
						const le = this.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
						for (re in ne) {
							const oe = ne[re];
							if (
								(Z && oe.scope === c.StorageScope.WORKSPACE) ||
								(se && oe.scope === c.StorageScope.PROFILE)
							) {
								if (le && oe instanceof Y && oe.zenModeIgnore) continue;
								this.r(oe);
							}
						}
					}
					getInitializationValue(Z) {
						return this.b.get(Z.name);
					}
					setInitializationValue(Z, se) {
						this.b.set(Z.name, se);
					}
					getRuntimeValue(Z, se) {
						if (se)
							switch (Z) {
								case ne.ACTIVITYBAR_HIDDEN:
									this.b.set(Z.name, this.n());
									break;
								case ne.STATUSBAR_HIDDEN:
									this.b.set(Z.name, !this.f.getValue(_.STATUSBAR_VISIBLE));
									break;
								case ne.SIDEBAR_POSITON:
									this.b.set(
										Z.name,
										this.f.getValue(_.SIDEBAR_POSITION) ?? "left",
									);
									break;
							}
						return this.b.get(Z.name);
					}
					setRuntimeValue(Z, se) {
						this.b.set(Z.name, se);
						const re = this.getRuntimeValue(ne.ZEN_MODE_ACTIVE);
						Z.scope === c.StorageScope.PROFILE &&
							(!re || !Z.zenModeIgnore) &&
							(this.r(Z), this.m(Z, se));
					}
					n() {
						if (this.f.getValue(q.$LW) === "horizontal") return !0;
						const se = this.f.getValue("workbench.activityBar.visible");
						return se !== void 0
							? !se
							: this.f.getValue(a.LayoutSettings.ACTIVITY_BAR_LOCATION) !==
									a.ActivityBarPosition.DEFAULT;
					}
					q(Z, se) {
						this.b.get(Z.name) !== se &&
							(this.setRuntimeValue(Z, se), this.a.fire({ key: Z, value: se }));
					}
					r(Z) {
						const se = this.b.get(Z.name);
						this.c.store(
							`${te.STORAGE_PREFIX}${Z.name}`,
							typeof se == "object" ? JSON.stringify(se) : se,
							Z.scope,
							Z.target,
						);
					}
					s(Z) {
						let se = this.c.get(`${te.STORAGE_PREFIX}${Z.name}`, Z.scope);
						if (se !== void 0)
							switch (typeof Z.defaultValue) {
								case "boolean":
									se = se === "true";
									break;
								case "number":
									se = parseInt(se);
									break;
								case "object":
									se = JSON.parse(se);
									break;
							}
						return se;
					}
				}
			},
		),
		