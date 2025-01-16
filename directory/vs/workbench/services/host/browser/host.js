define(de[87], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$asb = void 0),
				(e.$asb = (0, t.$Mi)("hostService"));
		}),
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
		define(
			de[3385],
			he([1, 0, 4, 3, 174, 78, 157, 53, 87]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XTc = void 0);
				let r = class extends i.$1c {
					constructor(a, h, c, n, g, p) {
						super(),
							g.isWorkspaceTrustEnabled() &&
								p.workspaceTrustInitialized.then(() => {
									const o = new (class {
										async participate(f) {
											if (f)
												await n.updateExtensionsEnablementsWhenWorkspaceTrustChanges();
											else if (c.remoteAuthority) h.reload();
											else {
												const b = await a.stopExtensionHosts(
													(0, t.localize)(6062, null),
												);
												await n.updateExtensionsEnablementsWhenWorkspaceTrustChanges(),
													b && a.startExtensionHosts();
											}
										}
									})();
									this.D(p.addWorkspaceTrustTransitionParticipant(o));
								});
					}
				};
				(e.$XTc = r),
					(e.$XTc = r =
						Ne(
							[
								j(0, d.$q2),
								j(1, m.$asb),
								j(2, E.$r8),
								j(3, C.$IQb),
								j(4, w.$oO),
								j(5, w.$pO),
							],
							r,
						));
			},
		),
		define(
			de[3386],
			he([1, 0, 141, 53, 31, 11, 4, 154, 40, 50, 87, 3, 33, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ATc = void 0);
				let n = class extends a.$1c {
					constructor(p, o, f, b) {
						super(),
							(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							w.$fk.registerCommand(
								"workbench.extensions.installMissingDependencies",
								() => this.j(),
							),
							E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
								command: {
									id: "workbench.extensions.installMissingDependencies",
									category: (0, C.localize)(6413, null),
									title: (0, C.localize)(6414, null),
								},
							});
					}
					async g() {
						const p = await this.h(),
							o = await this.b.queryLocal();
						return p.filter((f) =>
							o.every((b) => !(0, d.$7p)(b.identifier, { id: f })),
						);
					}
					async h() {
						await this.a.whenInstalledExtensionsRegistered();
						const p = this.a.extensions.reduce(
								(f, b) => (f.add(b.identifier.value.toLowerCase()), f),
								new Set(),
							),
							o = new Set();
						for (const f of this.a.extensions)
							f.extensionDependencies &&
								f.extensionDependencies.forEach((b) => {
									p.has(b.toLowerCase()) || o.add(b);
								});
						return [...o.values()];
					}
					async j() {
						const p = await this.g();
						if (p.length) {
							const o = await this.b.getExtensions(
								p.map((f) => ({ id: f })),
								h.CancellationToken.None,
							);
							o.length &&
								(await c.Promises.settled(o.map((f) => this.b.install(f))),
								this.c.notify({
									severity: m.Severity.Info,
									message: (0, C.localize)(6415, null),
									actions: {
										primary: [
											new r.$rj(
												"realod",
												(0, C.localize)(6416, null),
												"",
												!0,
												() => this.f.reload(),
											),
										],
									},
								}));
						} else this.c.info((0, C.localize)(6417, null));
					}
				};
				(e.$ATc = n),
					(e.$ATc = n =
						Ne([j(0, i.$q2), j(1, t.$MQb), j(2, m.$4N), j(3, u.$asb)], n));
			},
		),
		define(
			de[3387],
			he([1, 0, 50, 3, 1501, 4, 57, 5, 110, 62, 84, 21, 112, 517, 53, 87]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7fd = e.$6fd = void 0),
					(E = mt(E));
				let o = class extends t.$rj {
					static {
						p = this;
					}
					static {
						this.ID = "workbench.extensions.action.debugExtensionHost";
					}
					static {
						this.LABEL = E.localize(6598, null);
					}
					static {
						this.CSS_CLASS = "debug-extension-host";
					}
					constructor(l, y, $, v, S, I) {
						super(p.ID, p.LABEL, p.CSS_CLASS),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I);
					}
					async run(l) {
						const y = await this.c.getInspectPorts(
							c.ExtensionHostKind.LocalProcess,
							!1,
						);
						if (y.length === 0) {
							(
								await this.b.confirm({
									message: E.localize(6599, null),
									detail: E.localize(6600, null, this.f.nameLong),
									primaryButton: E.localize(6601, null),
								})
							).confirmed &&
								(await this.a.relaunch({
									addArgs: [`--inspect-extensions=${(0, w.$1pb)()}`],
								}));
							return;
						}
						y.length > 1 &&
							console.warn(
								"There are multiple extension hosts available for debugging. Picking the first one...",
							),
							this.g.createInstance(f).storeDebugOnNewWindow(y[0].port),
							this.h.openWindow();
					}
				};
				(e.$6fd = o),
					(e.$6fd =
						o =
						p =
							Ne(
								[
									j(0, m.$y7c),
									j(1, C.$GO),
									j(2, n.$q2),
									j(3, r.$Bk),
									j(4, d.$Li),
									j(5, g.$asb),
								],
								o,
							));
				let f = class {
					constructor(l) {
						this.a = l;
					}
					storeDebugOnNewWindow(l) {
						this.a.store(
							"debugExtensionHost.debugPort",
							l,
							a.StorageScope.APPLICATION,
							a.StorageTarget.MACHINE,
						);
					}
					getAndDeleteDebugPortIfSet() {
						const l = this.a.getNumber(
							"debugExtensionHost.debugPort",
							a.StorageScope.APPLICATION,
						);
						return (
							l !== void 0 &&
								this.a.remove(
									"debugExtensionHost.debugPort",
									a.StorageScope.APPLICATION,
								),
							l
						);
					}
				};
				f = Ne([j(0, a.$lq)], f);
				let b = class extends i.$1c {
					constructor(l, y, $) {
						super(), (this.a = l), (this.b = y);
						const S = this.b.createInstance(f).getAndDeleteDebugPortIfSet();
						S !== void 0 &&
							$.withProgress(
								{
									location: u.ProgressLocation.Notification,
									title: E.localize(6602, null),
								},
								async (I) => {
									await this.a.startDebugging(void 0, {
										type: "node",
										name: E.localize(6603, null),
										request: "attach",
										port: S,
									});
								},
							);
					}
				};
				(e.$7fd = b),
					(e.$7fd = b = Ne([j(0, h.$75), j(1, d.$Li), j(2, u.$8N)], b));
			},
		),
		define(
			de[3388],
			he([1, 0, 4, 3, 9, 10, 22, 25, 59, 40, 41, 54, 68, 87, 32]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Mc = void 0);
				let g = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.workspaceWatcher";
					}
					constructor(o, f, b, s, l, y, $, v) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.a = new m.$Gc((S) => this.j.extUri.getComparisonKey(S))),
							this.q(),
							this.z();
					}
					q() {
						this.D(this.f.onDidChangeWorkspaceFolders((o) => this.r(o))),
							this.D(this.f.onDidChangeWorkbenchState(() => this.s())),
							this.D(this.c.onDidChangeConfiguration((o) => this.t(o))),
							this.D(this.b.onDidWatchError((o) => this.u(o)));
					}
					r(o) {
						for (const f of o.removed) this.y(f);
						for (const f of o.added) this.w(f);
					}
					s() {
						this.z();
					}
					t(o) {
						(o.affectsConfiguration("files.watcherExclude") ||
							o.affectsConfiguration("files.watcherInclude")) &&
							this.z();
					}
					u(o) {
						const f = o.toString();
						let b;
						f.indexOf("ENOSPC") >= 0
							? ((b = "ENOSPC"),
								this.g.prompt(
									r.Severity.Warning,
									(0, t.localize)(7015, null),
									[
										{
											label: (0, t.localize)(7016, null),
											run: () =>
												this.h.open(
													w.URI.parse(
														"https://go.microsoft.com/fwlink/?linkid=867693",
													),
												),
										},
									],
									{
										sticky: !0,
										neverShowAgain: {
											id: "ignoreEnospcError",
											isSecondary: !0,
											scope: r.NeverShowAgainScope.WORKSPACE,
										},
									},
								))
							: f.indexOf("EUNKNOWN") >= 0
								? ((b = "EUNKNOWN"),
									this.g.prompt(
										r.Severity.Warning,
										(0, t.localize)(7017, null),
										[
											{
												label: (0, t.localize)(7018, null),
												run: () => this.m.reload(),
											},
										],
										{ sticky: !0, priority: r.NotificationPriority.SILENT },
									))
								: f.indexOf("ETERM") >= 0 && (b = "ETERM"),
							b && this.n.publicLog2("fileWatcherError", { reason: b });
					}
					w(o) {
						const f = [],
							b = this.c.getValue({ resource: o.uri });
						if (b.files?.watcherExclude)
							for (const y in b.files.watcherExclude)
								y && b.files.watcherExclude[y] === !0 && f.push(y);
						const s = new m.$Gc((y) => this.j.extUri.getComparisonKey(y));
						if ((s.set(o.uri, o.uri), b.files?.watcherInclude)) {
							for (const y of b.files.watcherInclude)
								if (y)
									if ((0, a.$nc)(y)) {
										const $ = w.URI.file(y).with({ scheme: o.uri.scheme });
										this.j.extUri.isEqualOrParent($, o.uri) && s.set($, $);
									} else {
										const $ = o.toResource(y);
										s.set($, $);
									}
						}
						const l = new i.$Zc();
						for (const [, y] of s)
							l.add(this.b.watch(y, { recursive: !0, excludes: f }));
						this.a.set(o.uri, l);
					}
					y(o) {
						this.a.has(o.uri) &&
							((0, i.$Vc)(this.a.get(o.uri)), this.a.delete(o.uri));
					}
					z() {
						this.C();
						for (const o of this.f.getWorkspace().folders) this.w(o);
					}
					C() {
						for (const [, o] of this.a) o.dispose();
						this.a.clear();
					}
					dispose() {
						super.dispose(), this.C();
					}
				};
				(e.$5Mc = g),
					(e.$5Mc = g =
						Ne(
							[
								j(0, C.$ll),
								j(1, E.$gj),
								j(2, d.$Vi),
								j(3, r.$4N),
								j(4, u.$7rb),
								j(5, h.$Vl),
								j(6, c.$asb),
								j(7, n.$km),
							],
							g,
						));
			},
		),
		define(
			de[3389],
			he([1, 0, 4, 24, 33, 6, 3, 8, 34, 87, 15, 511, 32, 10, 175, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uIc = void 0);
				const p = n.$n2.registerExtensionPoint({
					extensionPoint: "speechProviders",
					jsonSchema: {
						description: (0, t.localize)(9488, null),
						type: "array",
						items: {
							additionalProperties: !1,
							type: "object",
							defaultSnippets: [{ body: { name: "", description: "" } }],
							required: ["name"],
							properties: {
								name: {
									description: (0, t.localize)(9489, null),
									type: "string",
								},
								description: {
									description: (0, t.localize)(9490, null),
									type: "string",
								},
							},
						},
					},
				});
				let o = class extends C.$1c {
					get hasSpeechProvider() {
						return this.c.size > 0 || this.b.size > 0;
					}
					constructor(b, s, l, y, $, v) {
						super(),
							(this.g = b),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeHasSpeechProvider = this.a.event),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.f = a.$W7.bindTo(this.h)),
							(this.t = this.D(new E.$re())),
							(this.onDidStartSpeechToTextSession = this.t.event),
							(this.u = this.D(new E.$re())),
							(this.onDidEndSpeechToTextSession = this.u.event),
							(this.w = 0),
							(this.y = a.$X7.bindTo(this.h)),
							(this.C = this.D(new E.$re())),
							(this.onDidStartTextToSpeechSession = this.C.event),
							(this.F = this.D(new E.$re())),
							(this.onDidEndTextToSpeechSession = this.F.event),
							(this.G = 0),
							(this.H = a.$Y7.bindTo(this.h)),
							(this.I = this.D(new E.$re())),
							(this.onDidStartKeywordRecognition = this.I.event),
							(this.J = this.D(new E.$re())),
							(this.onDidEndKeywordRecognition = this.J.event),
							(this.L = 0),
							this.r();
					}
					r() {
						p.setHandler((b, s) => {
							const l = this.hasSpeechProvider;
							for (const y of s.removed)
								for (const $ of y.value) this.c.delete($.name);
							for (const y of s.added)
								for (const $ of y.value) this.c.set($.name, $);
							l !== this.hasSpeechProvider && this.s();
						});
					}
					registerSpeechProvider(b, s) {
						if (this.b.has(b))
							throw new Error(
								`Speech provider with identifier ${b} is already registered.`,
							);
						const l = this.hasSpeechProvider;
						return (
							this.b.set(b, s),
							l !== this.hasSpeechProvider && this.s(),
							(0, C.$Yc)(() => {
								const y = this.hasSpeechProvider;
								this.b.delete(b), y !== this.hasSpeechProvider && this.s();
							})
						);
					}
					s() {
						this.f.set(this.hasSpeechProvider), this.a.fire();
					}
					get hasActiveSpeechToTextSession() {
						return this.w > 0;
					}
					async createSpeechToTextSession(b, s = "speech") {
						const l = await this.z(),
							y = (0, a.$27)(this.n.getValue(a.$Z7)),
							$ = l.createSpeechToTextSession(
								b,
								typeof y == "string" ? { language: y } : void 0,
							),
							v = Date.now();
						let S = !1,
							I = !1,
							T = 0;
						const P = new C.$Zc(),
							k = () => {
								(this.w = Math.max(0, this.w - 1)),
									this.hasActiveSpeechToTextSession || this.y.reset(),
									this.u.fire(),
									this.m.publicLog2("speechToTextSession", {
										context: s,
										sessionDuration: Date.now() - v,
										sessionRecognized: S,
										sessionError: I,
										sessionContentLength: T,
										sessionLanguage: y,
									}),
									P.dispose();
							};
						return (
							P.add(b.onCancellationRequested(() => k())),
							b.isCancellationRequested && k(),
							P.add(
								$.onDidChange((L) => {
									switch (L.status) {
										case a.SpeechToTextStatus.Started:
											this.w++, this.y.set(!0), this.t.fire();
											break;
										case a.SpeechToTextStatus.Recognizing:
											S = !0;
											break;
										case a.SpeechToTextStatus.Recognized:
											typeof L.text == "string" && (T += L.text.length);
											break;
										case a.SpeechToTextStatus.Stopped:
											k();
											break;
										case a.SpeechToTextStatus.Error:
											this.g.error(
												`Speech provider error in speech to text session: ${L.text}`,
											),
												(I = !0);
											break;
									}
								}),
							),
							$
						);
					}
					async z() {
						await this.q.activateByEvent("onSpeech");
						const b = (0, i.$Sb)(Array.from(this.b.values()));
						if (b)
							this.b.size > 1 &&
								this.g.warn(
									`Multiple speech providers registered. Picking first one: ${b.metadata.displayName}`,
								);
						else throw new Error("No Speech provider is registered.");
						return b;
					}
					get hasActiveTextToSpeechSession() {
						return this.G > 0;
					}
					async createTextToSpeechSession(b, s = "speech") {
						const l = await this.z(),
							y = (0, a.$27)(this.n.getValue(a.$Z7)),
							$ = l.createTextToSpeechSession(
								b,
								typeof y == "string" ? { language: y } : void 0,
							),
							v = Date.now();
						let S = !1;
						const I = new C.$Zc(),
							T = (P) => {
								(this.G = Math.max(0, this.G - 1)),
									this.hasActiveTextToSpeechSession || this.H.reset(),
									this.F.fire(),
									this.m.publicLog2("textToSpeechSession", {
										context: s,
										sessionDuration: Date.now() - v,
										sessionError: S,
										sessionLanguage: y,
									}),
									P && I.dispose();
							};
						return (
							I.add(b.onCancellationRequested(() => T(!0))),
							b.isCancellationRequested && T(!0),
							I.add(
								$.onDidChange((P) => {
									switch (P.status) {
										case a.TextToSpeechStatus.Started:
											this.G++, this.H.set(!0), this.C.fire();
											break;
										case a.TextToSpeechStatus.Stopped:
											T(!1);
											break;
										case a.TextToSpeechStatus.Error:
											this.g.error(
												`Speech provider error in text to speech session: ${P.text}`,
											),
												(S = !0);
											break;
									}
								}),
							),
							$
						);
					}
					get hasActiveKeywordRecognition() {
						return this.L > 0;
					}
					async recognizeKeyword(b) {
						const s = new u.$0h(),
							l = new C.$Zc();
						l.add(
							b.onCancellationRequested(() => {
								l.dispose(), s.complete(a.KeywordRecognitionStatus.Canceled);
							}),
						);
						const y = l.add(new C.$Zc());
						let $;
						const v = () => {
							y.clear();
							const I = new w.$Ce(b);
							y.add((0, C.$Yc)(() => I.dispose(!0)));
							const T = ($ = this.M(I.token).then(
								(P) => {
									T === $ && s.complete(P);
								},
								(P) => {
									T === $ && s.error(P);
								},
							));
						};
						l.add(
							this.j.onDidChangeFocus((I) => {
								!I && $ ? (y.clear(), ($ = void 0)) : $ || v();
							}),
						),
							this.j.hasFocus && v();
						let S;
						try {
							S = await s.p;
						} finally {
							l.dispose();
						}
						return (
							this.m.publicLog2("keywordRecognition", {
								keywordRecognized: S === a.KeywordRecognitionStatus.Recognized,
							}),
							S
						);
					}
					async M(b) {
						const l = (await this.z()).createKeywordRecognitionSession(b);
						this.L++, this.I.fire();
						const y = new C.$Zc(),
							$ = () => {
								(this.L = Math.max(0, this.L - 1)), this.J.fire(), y.dispose();
							};
						y.add(b.onCancellationRequested(() => $())),
							b.isCancellationRequested && $(),
							y.add(
								l.onDidChange((v) => {
									v.status === a.KeywordRecognitionStatus.Stopped && $();
								}),
							);
						try {
							return (await E.Event.toPromise(l.onDidChange)).status;
						} finally {
							$();
						}
					}
				};
				(e.$uIc = o),
					(e.$uIc = o =
						Ne(
							[
								j(0, m.$ik),
								j(1, d.$6j),
								j(2, r.$asb),
								j(3, h.$km),
								j(4, c.$gj),
								j(5, g.$q2),
							],
							o,
						));
			},
		),
		