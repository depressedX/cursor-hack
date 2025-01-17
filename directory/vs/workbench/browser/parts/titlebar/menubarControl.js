import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/window/common/window.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/actions.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/common/platform.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../../base/common/async.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/update/common/update.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/notification/common/notification.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../base/browser/ui/menu/menubar.js';
import '../../../../base/browser/ui/menu/menu.js';
import '../../../../base/common/labels.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../base/browser/browser.js';
import '../../../services/host/browser/host.js';
import '../../../../base/browser/canIUse.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../actions/windowActions.js';
import '../../../../platform/action/common/action.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/browser/window.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../css!vs/workbench/browser/parts/titlebar/media/menubarControl.js';
define(
			de[1311],
			he([
				1, 0, 4, 11, 253, 8, 50, 7, 39, 12, 10, 6, 3, 256, 15, 73, 415, 21, 40,
				131, 78, 2686, 1168, 222, 91, 139, 87, 459, 27, 43, 179, 31, 32, 571,
				599, 92, 106, 75, 72, 96, 2354,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3qc = e.$2qc = void 0),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarFileMenu,
						title: {
							value: "File",
							original: "File",
							mnemonicTitle: (0, t.localize)(3696, null),
						},
						order: 1,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarEditMenu,
						title: {
							value: "Edit",
							original: "Edit",
							mnemonicTitle: (0, t.localize)(3697, null),
						},
						order: 2,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarSelectionMenu,
						title: {
							value: "Selection",
							original: "Selection",
							mnemonicTitle: (0, t.localize)(3698, null),
						},
						order: 3,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarViewMenu,
						title: {
							value: "View",
							original: "View",
							mnemonicTitle: (0, t.localize)(3699, null),
						},
						order: 4,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarGoMenu,
						title: {
							value: "Go",
							original: "Go",
							mnemonicTitle: (0, t.localize)(3700, null),
						},
						order: 5,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarTerminalMenu,
						title: {
							value: "Terminal",
							original: "Terminal",
							mnemonicTitle: (0, t.localize)(3701, null),
						},
						order: 7,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarHelpMenu,
						title: {
							value: "Help",
							original: "Help",
							mnemonicTitle: (0, t.localize)(3702, null),
						},
						order: 8,
					}),
					i.$ZX.appendMenuItem(i.$XX.MenubarMainMenu, {
						submenu: i.$XX.MenubarPreferencesMenu,
						title: {
							value: "Preferences",
							original: "Preferences",
							mnemonicTitle: (0, t.localize)(3703, null),
						},
						when: L.$8Lb,
						order: 9,
					});
				class F extends h.$1c {
					static {
						this.m = 10;
					}
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(),
							(this.n = q),
							(this.q = V),
							(this.r = G),
							(this.s = K),
							(this.t = J),
							(this.u = W),
							(this.w = X),
							(this.y = Y),
							(this.z = ie),
							(this.C = ne),
							(this.F = ee),
							(this.G = _),
							(this.H = te),
							(this.I = Q),
							(this.J = Z),
							(this.a = [
								"window.menuBarVisibility",
								"workbench.sideBar.location",
								"window.nativeTabs",
							]),
							(this.c = {}),
							(this.f = {}),
							(this.h = { files: [], workspaces: [] }),
							(this.b = this.D(
								this.n.createMenu(i.$XX.MenubarMainMenu, this.r),
							)),
							(this.g = this.D(new h.$Zc())),
							this.N(),
							(this.j = this.D(new n.$Yh(() => this.L(!1), 200))),
							this.$();
					}
					M() {
						this.D(this.H.onDidChangeFocus((q) => this.U(q))),
							this.D(this.t.onDidChangeConfiguration((q) => this.W(q))),
							this.D(this.w.onStateChange(() => this.Q())),
							this.D(
								this.q.onDidChangeRecentlyOpened(() => {
									this.Y();
								}),
							),
							this.D(this.s.onDidUpdateKeybindings(() => this.O())),
							this.D(
								this.u.onDidChangeFormatters(() => {
									this.Y();
								}),
							),
							this.D(
								this.b.onDidChange(() => {
									this.N(), this.L(!0);
								}),
							);
					}
					N() {
						this.g.clear(), (this.c = {}), (this.f = {});
						const [, q] = this.b.getActions()[0];
						for (const V of q)
							V instanceof i.$1X &&
								typeof V.item.title != "string" &&
								((this.c[V.item.title.original] = this.g.add(
									this.n.createMenu(V.item.submenu, this.r, {
										emitEventsForSubmenuChanges: !0,
									}),
								)),
								(this.f[V.item.title.original] =
									V.item.title.mnemonicTitle ?? V.item.title.value));
					}
					O() {
						this.j.schedule();
					}
					P(q) {
						const V = q.label;
						switch (q.id) {
							default:
								break;
						}
						return V;
					}
					Q() {
						this.O();
					}
					R() {
						this.O();
					}
					S() {
						if (!this.h) return [];
						const { workspaces: q, files: V } = this.h,
							G = [];
						if (q.length > 0) {
							for (let K = 0; K < F.m && K < q.length; K++)
								G.push(this.Z(q[K]));
							G.push(new C.$tj());
						}
						if (V.length > 0) {
							for (let K = 0; K < F.m && K < V.length; K++)
								G.push(this.Z(V[K]));
							G.push(new C.$tj());
						}
						return G;
					}
					U(q) {
						q && this.Y();
					}
					W(q) {
						this.a.some((V) => q.affectsConfiguration(V)) && this.O(),
							q.affectsConfiguration("editor.accessibilitySupport") && this.$(),
							q.affectsConfiguration("window.menuBarVisibility") && this.Y();
					}
					get X() {
						return r.$m && r.$p ? !1 : (0, w.$wY)(this.t) === "hidden";
					}
					Y() {
						this.X ||
							this.q.getRecentlyOpened().then((q) => {
								(this.h = q), this.O();
							});
					}
					Z(q) {
						let V, G, K, J;
						const W = q.remoteAuthority;
						(0, c.$eRb)(q)
							? ((G = q.folderUri),
								(V =
									q.label ||
									this.u.getWorkspaceLabel(G, { verbose: g.Verbosity.LONG })),
								(K = "openRecentFolder"),
								(J = { folderUri: G }))
							: (0, c.$dRb)(q)
								? ((G = q.workspace.configPath),
									(V =
										q.label ||
										this.u.getWorkspaceLabel(q.workspace, {
											verbose: g.Verbosity.LONG,
										})),
									(K = "openRecentWorkspace"),
									(J = { workspaceUri: G }))
								: ((G = q.fileUri),
									(V = q.label || this.u.getUriLabel(G)),
									(K = "openRecentFile"),
									(J = { fileUri: G }));
						const X = (0, C.$wj)({
							id: K,
							label: (0, $.$EO)(V),
							run: (Y) => {
								const ie =
									Y &&
									((!r.$m && (Y.ctrlKey || Y.shiftKey)) ||
										(r.$m && (Y.metaKey || Y.altKey)));
								return this.H.openWindow([J], {
									forceNewWindow: !!ie,
									remoteAuthority: W || null,
								});
							},
						});
						return Object.assign(X, { uri: G, remoteAuthority: W });
					}
					$() {
						if (r.$r || r.$m) return;
						const q = this.y.getBoolean(
								"menubar/accessibleMenubarNotified",
								o.StorageScope.APPLICATION,
								!1,
							),
							V = !(0, w.$yY)(this.t);
						if (q || V || !this.G.isScreenReaderOptimized()) return;
						const G = (0, t.localize)(3704, null);
						this.z.prompt(f.Severity.Info, G, [
							{
								label: (0, t.localize)(3705, null),
								run: () =>
									this.C.openUserSettings({
										query: w.TitleBarSetting.TITLE_BAR_STYLE,
									}),
							},
						]),
							this.y.store(
								"menubar/accessibleMenubarNotified",
								!0,
								o.StorageScope.APPLICATION,
								o.StorageTarget.USER,
							);
					}
				}
				e.$2qc = F;
				let x = class extends F {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z, se) {
						super(q, V, G, K, J, W, X, Y, ie, ne, ee, _, Q, Z, se),
							(this.kb = te),
							(this.cb = !1),
							(this.db = !1),
							(this.eb = !1),
							(this.fb = !0),
							(this.hb = this.D(
								this.n.createMenu(i.$XX.MenubarHomeMenu, this.r),
							)),
							(this.vb = this.D(new h.$Zc())),
							(this.ib = this.D(new a.$re())),
							(this.jb = this.D(new a.$re())),
							(this.gb = this.D(new C.$sj())),
							this.gb.onDidRun((re) => {
								this.kb.publicLog2("workbenchActionExecuted", {
									id: re.action.id,
									from: "menu",
								});
							}),
							this.q.getRecentlyOpened().then((re) => {
								this.h = re;
							}),
							this.M(),
							this.mb();
					}
					L(q) {
						this.db || this.wb(q), q && (this.eb = !0);
					}
					mb() {
						const q = this;
						r.$r &&
							this.D(
								(0, i.$4X)(
									class extends i.$3X {
										constructor() {
											super({
												id: "workbench.actions.menubar.focus",
												title: (0, t.localize2)(3713, "Focus Application Menu"),
												keybinding: {
													primary: P.KeyMod.Alt | P.KeyCode.F10,
													weight: k.KeybindingWeight.WorkbenchContrib,
													when: L.$7Lb,
												},
												f1: !0,
											});
										}
										async run() {
											q.ab?.toggleFocus();
										}
									},
								),
							);
					}
					nb() {
						switch (this.w.state.type) {
							case p.StateType.Idle:
								return new C.$rj(
									"update.check",
									(0, t.localize)(3706, null),
									void 0,
									!0,
									() => this.w.checkForUpdates(!0),
								);
							case p.StateType.CheckingForUpdates:
								return new C.$rj(
									"update.checking",
									(0, t.localize)(3707, null),
									void 0,
									!1,
								);
							case p.StateType.AvailableForDownload:
								return new C.$rj(
									"update.downloadNow",
									(0, t.localize)(3708, null),
									void 0,
									!0,
									() => this.w.downloadUpdate(),
								);
							case p.StateType.Downloading:
								return new C.$rj(
									"update.downloading",
									(0, t.localize)(3709, null),
									void 0,
									!1,
								);
							case p.StateType.Downloaded:
								return r.$m
									? null
									: new C.$rj(
											"update.install",
											(0, t.localize)(3710, null),
											void 0,
											!0,
											() => this.w.applyUpdate(),
										);
							case p.StateType.Updating:
								return new C.$rj(
									"update.updating",
									(0, t.localize)(3711, null),
									void 0,
									!1,
								);
							case p.StateType.Ready:
								return new C.$rj(
									"update.restart",
									(0, t.localize)(3712, null),
									void 0,
									!0,
									() => this.w.quitAndInstall(),
								);
							default:
								return null;
						}
					}
					get ob() {
						return (0, w.$wY)(this.t);
					}
					get pb() {
						return !0;
					}
					qb(q, V) {
						switch (q.id) {
							case N.$Yqc.ID:
								V.push(...this.S());
								break;
							case "workbench.action.showAboutDialog":
								if (!r.$m && !r.$r) {
									const G = this.nb();
									G &&
										((G.label = (0, $.$CO)(G.label)),
										V.push(G),
										V.push(new C.$tj()));
								}
								break;
							default:
								break;
						}
					}
					get rb() {
						let q = this.t.getValue("window.enableMenuBarMnemonics");
						return (
							typeof q != "boolean" && (q = !0),
							q && (!r.$r || (0, S.$Mfb)(B.$Bfb))
						);
					}
					get sb() {
						if (this.ob !== "compact") return;
						const V =
								this.t.getValue("workbench.sideBar.location") === "right"
									? y.HorizontalDirection.Left
									: y.HorizontalDirection.Right,
							K =
								this.t.getValue("workbench.activityBar.location") ===
								z.ActivityBarPosition.BOTTOM
									? y.VerticalDirection.Above
									: y.VerticalDirection.Below;
						return { horizontal: V, vertical: K };
					}
					tb(q) {
						(this.fb = q), this.Y(), this.ib.fire(q);
					}
					ub(q) {
						const V = [];
						return (0, R.$Jyb)(q, { shouldForwardArgs: !0 }, V), V;
					}
					wb(q) {
						if (!this.bb) return;
						q
							? (this.ab && this.vb.clear(),
								(this.ab = this.vb.add(new l.$9ob(this.bb, this.yb(), O.$Hyb))),
								this.G.alwaysUnderlineAccessKeys().then((G) => {
									(this.cb = G), this.ab?.update(this.yb());
								}),
								this.vb.add(
									this.ab.onFocusStateChange((G) => {
										this.jb.fire(G),
											G ||
												(this.eb ? (this.wb(!0), (this.eb = !1)) : this.O(),
												(this.db = !1));
									}),
								),
								this.vb.add(this.ab.onVisibilityChange((G) => this.tb(G))),
								this.vb.add(
									(0, d.$0fb)(this.bb, d.$$gb.FOCUS_IN, () => {
										this.db = !0;
									}),
								),
								this.vb.add(
									(0, d.$0fb)(this.bb, d.$$gb.FOCUS_OUT, () => {
										this.db = !1;
									}),
								),
								this.ab.isVisible && this.tb(!0))
							: this.ab?.update(this.yb());
						const V = (G, K, J) => {
							K.splice(0);
							for (const W of G)
								if ((this.qb(W, K), W instanceof C.$tj)) K.push(W);
								else if (W instanceof i.$1X || W instanceof i.$2X) {
									let X =
										typeof W.item.title == "string"
											? W.item.title
											: (W.item.title.mnemonicTitle ?? W.item.title.value);
									if (W instanceof i.$1X) {
										const Y = [];
										V(W.actions, Y, J),
											Y.length > 0 && K.push(new C.$uj(W.id, (0, $.$CO)(X), Y));
									} else {
										(0, A.$hk)(W.item.toggled) &&
											(X =
												W.item.toggled.mnemonicTitle ??
												W.item.toggled.title ??
												X);
										const Y = new C.$rj(
											W.id,
											(0, $.$CO)(X),
											W.class,
											W.enabled,
											() => this.I.executeCommand(W.id),
										);
										(Y.tooltip = W.tooltip), (Y.checked = W.checked), K.push(Y);
									}
								}
							if (J === "File" && this.sb === void 0) {
								const W = this.xb();
								W.length && K.push(...W);
							}
						};
						for (const G of Object.keys(this.f)) {
							const K = this.c[G];
							q &&
								K &&
								(this.vb.add(
									K.onDidChange(() => {
										if (!this.db) {
											const W = [];
											V(this.ub(K), W, G),
												this.ab?.updateMenu({
													actions: W,
													label: (0, $.$CO)(this.f[G]),
												});
										}
									}),
								),
								K === this.c.File &&
									this.vb.add(
										this.hb.onDidChange(() => {
											if (!this.db) {
												const W = [];
												V(this.ub(K), W, G),
													this.ab?.updateMenu({
														actions: W,
														label: (0, $.$CO)(this.f[G]),
													});
											}
										}),
									));
							const J = [];
							K && V(this.ub(K), J, G),
								this.ab &&
									(q
										? this.ab.push({ actions: J, label: (0, $.$CO)(this.f[G]) })
										: this.ab.updateMenu({
												actions: J,
												label: (0, $.$CO)(this.f[G]),
											}));
						}
					}
					xb() {
						if (!r.$r) return [];
						const q = [];
						for (const V of this.hb.getActions()) {
							const [, G] = V;
							for (const K of G)
								if (K instanceof i.$2X) {
									const J =
										typeof K.item.title == "string"
											? K.item.title
											: (K.item.title.mnemonicTitle ?? K.item.title.value);
									q.push(
										new C.$rj(
											K.id,
											(0, $.$CO)(J),
											K.class,
											K.enabled,
											async (W) => {
												this.I.executeCommand(K.id, W);
											},
										),
									);
								}
							q.push(new C.$tj());
						}
						return q.length && q.pop(), q;
					}
					yb() {
						return {
							enableMnemonics: this.rb,
							disableAltFocus: this.pb,
							visibility: this.ob,
							actionRunner: this.gb,
							getKeybinding: (q) => this.s.lookupKeybinding(q.id),
							alwaysOnMnemonics: this.cb,
							compactMode: this.sb,
							getCompactMenuActions: () => (r.$r ? this.xb() : []),
						};
					}
					U(q) {
						this.fb &&
							(super.U(q),
							this.bb &&
								(q
									? this.bb.classList.remove("inactive")
									: (this.bb.classList.add("inactive"), this.ab?.blur())));
					}
					Q() {
						this.fb && super.Q();
					}
					Y() {
						this.fb && super.Y();
					}
					R() {
						this.fb && super.R();
					}
					M() {
						super.M(),
							this.D(
								(0, d.$0fb)(B.$Bfb, d.$$gb.RESIZE, () => {
									this.ab && !(r.$u && T.$Yfb.pointerEvents) && this.ab.blur();
								}),
							),
							r.$r &&
								(this.D(
									(0, S.$Nfb)((q) => {
										q === B.$Bfb.vscodeWindowId && this.O();
									}),
								),
								this.D(this.hb.onDidChange(() => this.O())));
					}
					get onVisibilityChange() {
						return this.ib.event;
					}
					get onFocusStateChange() {
						return this.jb.event;
					}
					getMenubarItemsDimensions() {
						return this.ab
							? new d.$pgb(this.ab.getWidth(), this.ab.getHeight())
							: new d.$pgb(0, 0);
					}
					create(q) {
						return (this.bb = q), this.bb && this.L(!0), this.bb;
					}
					layout(q) {
						this.ab?.update(this.yb());
					}
					toggleFocus() {
						this.ab?.toggleFocus();
					}
				};
				(e.$3qc = x),
					(e.$3qc = x =
						Ne(
							[
								j(0, i.$YX),
								j(1, c.$cRb),
								j(2, E.$6j),
								j(3, m.$uZ),
								j(4, u.$gj),
								j(5, g.$3N),
								j(6, p.$_rb),
								j(7, o.$lq),
								j(8, f.$4N),
								j(9, b.$7Z),
								j(10, s.$r8),
								j(11, v.$XK),
								j(12, M.$km),
								j(13, I.$asb),
								j(14, D.$ek),
								j(15, U.$Uyb),
							],
							x,
						));
			},
		),
		