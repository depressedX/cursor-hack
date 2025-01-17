import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/dialogs/common/dialogs.js';
import '../../../platform/actions/common/actions.js';
import '../../../base/common/keyCodes.js';
import '../../common/contextkeys.js';
import '../../../platform/contextkey/common/contextkeys.js';
import '../../../platform/action/common/actionCommonCategories.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../platform/quickinput/common/quickInput.js';
import '../../../platform/workspace/common/workspace.js';
import '../../../platform/label/common/label.js';
import '../../../platform/keybinding/common/keybinding.js';
import '../../../editor/common/services/model.js';
import '../../../editor/common/languages/language.js';
import '../../../platform/workspaces/common/workspaces.js';
import '../../../editor/common/services/getIconClasses.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/labels.js';
import '../../../base/common/platform.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../quickaccess.js';
import '../../services/host/browser/host.js';
import '../../../base/common/map.js';
import '../../../base/common/codicons.js';
import '../../../base/common/themables.js';
import '../../../platform/commands/common/commands.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/backup/common/backup.js';
import '../../services/ai/browser/aiMiscServices.js';
import '../../../base/browser/dom.js';
define(
			de[571],
			he([
				1, 0, 4, 57, 11, 27, 100, 179, 99, 43, 63, 25, 73, 39, 67, 61, 256, 252,
				22, 222, 12, 8, 473, 87, 59, 14, 26, 31, 10, 2703, 137, 7,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1qc = e.$Zqc = e.$Yqc = e.$Xqc = void 0),
					(e.$Xqc = "inRecentFilesPicker");
				class M extends w.$3X {
					constructor(G) {
						super(G),
							(this.a = {
								iconClass: I.ThemeIcon.asClassName(S.$ak.removeClose),
								tooltip: (0, t.localize)(2951, null),
							}),
							(this.b = {
								iconClass:
									"dirty-workspace " +
									I.ThemeIcon.asClassName(S.$ak.closeDirty),
								tooltip: (0, t.localize)(2952, null),
								alwaysVisible: !0,
							}),
							(this.c = { ...this.b, tooltip: (0, t.localize)(2953, null) });
					}
					async run(G) {
						const K = G.get(p.$cRb),
							J = G.get(u.$DJ),
							W = G.get(a.$Vi),
							X = G.get(h.$3N),
							Y = G.get(c.$uZ),
							ie = G.get(n.$QO),
							ne = G.get(g.$nM),
							ee = G.get($.$asb),
							_ = G.get(i.$GO),
							te = await K.getRecentlyOpened(),
							Q = await K.getDirtyWorkspaces();
						let Z = !1;
						const se = new v.$Gc(),
							re = new v.$Gc();
						for (const be of Q)
							(0, k.$aRb)(be)
								? se.set(be.folderUri, !0)
								: (re.set(be.workspace.configPath, be.workspace), (Z = !0));
						const le = new v.$Gc(),
							oe = new v.$Gc();
						for (const be of te.workspaces)
							(0, p.$eRb)(be)
								? le.set(be.folderUri, !0)
								: (oe.set(be.workspace.configPath, be.workspace), (Z = !0));
						const ae = [];
						for (const be of te.workspaces) {
							const Ce = (0, p.$eRb)(be)
								? se.has(be.folderUri)
								: re.has(be.workspace.configPath);
							ae.push(this.e(ie, ne, X, be, Ce));
						}
						for (const be of Q)
							(0, k.$aRb)(be) && !le.has(be.folderUri)
								? ae.push(this.e(ie, ne, X, be, !0))
								: (0, k.$bRb)(be) &&
									!oe.has(be.workspace.configPath) &&
									ae.push(this.e(ie, ne, X, be, !0));
						const pe = te.files.map((be) => this.e(ie, ne, X, be, !1)),
							$e = te.workspaces[0],
							ye =
								$e &&
								W.isCurrentWorkspace(
									(0, p.$dRb)($e) ? $e.workspace : $e.folderUri,
								);
						let ue;
						const fe = {
								type: "separator",
								label: Z
									? (0, t.localize)(2954, null)
									: (0, t.localize)(2955, null),
							},
							me = { type: "separator", label: (0, t.localize)(2956, null) },
							ve = [fe, ...ae, me, ...pe],
							ge = await J.pick(ve, {
								contextKey: e.$Xqc,
								activeItem: [...ae, ...pe][ye ? 1 : 0],
								placeHolder: s.$m
									? (0, t.localize)(2957, null)
									: (0, t.localize)(2958, null),
								matchOnDescription: !0,
								onKeyMods: (be) => (ue = be),
								quickNavigate: this.d()
									? { keybindings: Y.lookupKeybindings(this.desc.id) }
									: void 0,
								hideInput: this.d(),
								onDidTriggerItemButton: async (be) => {
									if (be.button === this.a)
										await K.removeRecentlyOpened([be.item.resource]),
											be.removeItem();
									else if (be.button === this.b || be.button === this.c) {
										const Ce = be.button === this.c,
											{ confirmed: Le } = await _.confirm({
												title: Ce
													? (0, t.localize)(2959, null)
													: (0, t.localize)(2960, null),
												message: Ce
													? (0, t.localize)(2961, null)
													: (0, t.localize)(2962, null),
												detail: Ce
													? (0, t.localize)(2963, null)
													: (0, t.localize)(2964, null),
											});
										Le &&
											(ee.openWindow([be.item.openable], {
												remoteAuthority: be.item.remoteAuthority || null,
											}),
											J.cancel());
									}
								},
							});
						if (ge)
							return ee.openWindow([ge.openable], {
								forceNewWindow: ue?.ctrlCmd,
								forceReuseWindow: ue?.alt,
								remoteAuthority: ge.remoteAuthority || null,
							});
					}
					e(G, K, J, W, X) {
						let Y,
							ie,
							ne,
							ee,
							_ = !1;
						(0, p.$eRb)(W)
							? ((ee = W.folderUri),
								(ie = (0, o.$BDb)(G, K, ee, f.FileKind.FOLDER)),
								(Y = { folderUri: ee }),
								(ne =
									W.label ||
									J.getWorkspaceLabel(ee, { verbose: h.Verbosity.LONG })))
							: (0, p.$dRb)(W)
								? ((ee = W.workspace.configPath),
									(ie = (0, o.$BDb)(G, K, ee, f.FileKind.ROOT_FOLDER)),
									(Y = { workspaceUri: ee }),
									(ne =
										W.label ||
										J.getWorkspaceLabel(W.workspace, {
											verbose: h.Verbosity.LONG,
										})),
									(_ = !0))
								: ((ee = W.fileUri),
									(ie = (0, o.$BDb)(G, K, ee, f.FileKind.FILE)),
									(Y = { fileUri: ee }),
									(ne = W.label || J.getUriLabel(ee)));
						const { name: te, parentPath: Q } = (0, b.$FO)(ne);
						return {
							iconClasses: ie,
							label: te,
							ariaLabel: X
								? _
									? (0, t.localize)(2965, null, te)
									: (0, t.localize)(2966, null, te)
								: te,
							description: Q,
							buttons: X ? [_ ? this.c : this.b] : [this.a],
							openable: Y,
							resource: ee,
							remoteAuthority: W.remoteAuthority,
						};
					}
				}
				class N extends M {
					static {
						this.ID = "workbench.action.openRecent";
					}
					constructor() {
						super({
							id: N.ID,
							title: {
								...(0, t.localize2)(2973, "Open Recent..."),
								mnemonicTitle: (0, t.localize)(2967, null),
							},
							category: m.$ck.File,
							f1: !0,
							keybinding: {
								weight: r.KeybindingWeight.WorkbenchContrib,
								primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyR,
								mac: { primary: E.KeyMod.WinCtrl | E.KeyCode.KeyR },
							},
							menu: { id: w.$XX.MenubarRecentMenu, group: "y_more", order: 1 },
						});
					}
					d() {
						return !1;
					}
				}
				e.$Yqc = N;
				class A extends M {
					constructor() {
						super({
							id: "workbench.action.quickOpenRecent",
							title: (0, t.localize2)(2974, "Quick Open Recent..."),
							category: m.$ck.File,
							f1: !1,
						});
					}
					d() {
						return !0;
					}
				}
				class R extends w.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleFullScreen",
							title: {
								...(0, t.localize2)(2975, "Toggle Full Screen"),
								mnemonicTitle: (0, t.localize)(2968, null),
							},
							category: m.$ck.View,
							f1: !0,
							keybinding: {
								weight: r.KeybindingWeight.WorkbenchContrib,
								primary: E.KeyCode.F11,
								mac: {
									primary: E.KeyMod.CtrlCmd | E.KeyMod.WinCtrl | E.KeyCode.KeyF,
								},
							},
							precondition: d.$9Lb.toNegated(),
							toggled: C.$FPb,
							menu: [
								{
									id: w.$XX.MenubarAppearanceMenu,
									group: "1_toggle_view",
									order: 1,
								},
							],
						});
					}
					run(G) {
						return G.get($.$asb).toggleFullScreen((0, D.$Ogb)());
					}
				}
				class O extends w.$3X {
					static {
						this.ID = "workbench.action.reloadWindow";
					}
					constructor() {
						super({
							id: O.ID,
							title: (0, t.localize2)(2976, "Reload Window"),
							category: m.$ck.Developer,
							f1: !0,
							keybinding: {
								weight: r.KeybindingWeight.WorkbenchContrib + 50,
								when: d.$$Lb,
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyR,
							},
						});
					}
					async run(G) {
						const K = G.get($.$asb),
							J = G.get(L.$hfc);
						return K.reload();
					}
				}
				e.$Zqc = O;
				class B extends w.$3X {
					constructor() {
						super({
							id: "workbench.action.showAboutDialog",
							title: {
								...(0, t.localize2)(2977, "About"),
								mnemonicTitle: (0, t.localize)(2969, null),
							},
							category: m.$ck.Help,
							f1: !0,
							menu: {
								id: w.$XX.MenubarHelpMenu,
								group: "z_about",
								order: 1,
								when: d.$8Lb.toNegated(),
							},
						});
					}
					run(G) {
						return G.get(i.$GO).about();
					}
				}
				class U extends w.$3X {
					constructor() {
						super({
							id: "workbench.action.newWindow",
							title: {
								...(0, t.localize2)(2978, "New Window"),
								mnemonicTitle: (0, t.localize)(2970, null),
							},
							f1: !0,
							keybinding: {
								weight: r.KeybindingWeight.WorkbenchContrib,
								primary: s.$r
									? s.$l
										? (0, E.$os)(E.$ps, E.KeyMod.Shift | E.KeyCode.KeyN)
										: E.KeyMod.CtrlCmd |
											E.KeyMod.Alt |
											E.KeyMod.Shift |
											E.KeyCode.KeyN
									: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyN,
								secondary: s.$r
									? [E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyN]
									: void 0,
							},
							menu: { id: w.$XX.MenubarFileMenu, group: "1_new", order: 3 },
						});
					}
					run(G) {
						return G.get($.$asb).openWindow({ remoteAuthority: null });
					}
				}
				class z extends w.$3X {
					constructor() {
						super({
							id: "workbench.action.blur",
							title: (0, t.localize2)(
								2979,
								"Remove keyboard focus from focused element",
							),
						});
					}
					run() {
						const G = (0, D.$Jgb)();
						(0, D.$Ygb)(G) && G.blur();
					}
				}
				(0, w.$4X)(U),
					(0, w.$4X)(R),
					(0, w.$4X)(A),
					(0, w.$4X)(N),
					(0, w.$4X)(O),
					(0, w.$4X)(B),
					(0, w.$4X)(z);
				const F = l.$Kj.and(y.$g9b, l.$Kj.has(e.$Xqc)),
					x = "workbench.action.quickOpenNavigateNextInRecentFilesPicker";
				r.$TX.registerCommandAndKeybindingRule({
					id: x,
					weight: r.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, y.$j9b)(x, !0),
					when: F,
					primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyR,
					mac: { primary: E.KeyMod.WinCtrl | E.KeyCode.KeyR },
				});
				const H =
					"workbench.action.quickOpenNavigatePreviousInRecentFilesPicker";
				r.$TX.registerCommandAndKeybindingRule({
					id: H,
					weight: r.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, y.$j9b)(H, !1),
					when: F,
					primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyR,
					mac: { primary: E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.KeyR },
				}),
					T.$fk.registerCommand(
						"workbench.action.toggleConfirmBeforeClose",
						(V) => {
							const G = V.get(P.$gj),
								K = G.inspect("window.confirmBeforeClose").userValue;
							return G.updateValue(
								"window.confirmBeforeClose",
								K === "never" ? "keyboardOnly" : "never",
							);
						},
					),
					w.$ZX.appendMenuItem(w.$XX.MenubarFileMenu, {
						group: "z_ConfirmClose",
						command: {
							id: "workbench.action.toggleConfirmBeforeClose",
							title: (0, t.localize)(2971, null),
							toggled: l.$Kj.notEquals(
								"config.window.confirmBeforeClose",
								"never",
							),
						},
						order: 1,
						when: d.$7Lb,
					}),
					w.$ZX.appendMenuItem(w.$XX.MenubarFileMenu, {
						title: (0, t.localize)(2972, null),
						submenu: w.$XX.MenubarRecentMenu,
						group: "2_open",
						order: 4,
					});
				class q extends w.$3X {
					static {
						this.ID = "workbench.action.keychord.leader";
					}
					constructor() {
						super({
							id: q.ID,
							title: {
								value: "Keychord leader keybinding",
								original: "Keychord leader keybinding",
							},
							precondition: l.$Kj.false(),
							keybinding: {
								primary: E.$ps,
								mac: { primary: E.$qs },
								weight: r.KeybindingWeight.WorkbenchContrib,
								when: l.$Kj.false(),
							},
						});
					}
					run(G) {
						G.get(i.$GO).info(
							`Go to the keyboard shortcut settings and change the value of ${q.ID} to change the keychord leader keybinding`,
						);
					}
				}
				(e.$1qc = q), (0, w.$4X)(q);
			},
		),
		