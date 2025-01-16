define(de[131], he([1, 0, 5, 44]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_Z =
					e.$$Z =
					e.$0Z =
					e.$9Z =
					e.$8Z =
					e.$7Z =
					e.SettingMatchType =
					e.SettingValueType =
						void 0),
				(e.$6Z = C);
			var w;
			(function (d) {
				(d.Null = "null"),
					(d.Enum = "enum"),
					(d.String = "string"),
					(d.MultilineString = "multiline-string"),
					(d.Integer = "integer"),
					(d.Number = "number"),
					(d.Boolean = "boolean"),
					(d.Array = "array"),
					(d.Exclude = "exclude"),
					(d.Include = "include"),
					(d.Complex = "complex"),
					(d.NullableInteger = "nullable-integer"),
					(d.NullableNumber = "nullable-number"),
					(d.Object = "object"),
					(d.BooleanObject = "boolean-object"),
					(d.LanguageTag = "language-tag"),
					(d.ExtensionToggle = "extension-toggle");
			})(w || (e.SettingValueType = w = {}));
			var E;
			(function (d) {
				(d[(d.None = 0)] = "None"),
					(d[(d.LanguageTagSettingMatch = 1)] = "LanguageTagSettingMatch"),
					(d[(d.RemoteMatch = 2)] = "RemoteMatch"),
					(d[(d.DescriptionOrValueMatch = 4)] = "DescriptionOrValueMatch"),
					(d[(d.KeyMatch = 8)] = "KeyMatch");
			})(E || (e.SettingMatchType = E = {}));
			function C(d) {
				return { ...d, override: i.$b1.id, pinned: !0 };
			}
			(e.$7Z = (0, t.$Mi)("preferencesService")),
				(e.$8Z = "editor.contrib.defineKeybinding"),
				(e.$9Z = ".vscode/settings.json"),
				(e.$0Z = "workbench.settings.openDefaultSettings"),
				(e.$$Z = "workbench.settings.useSplitJSON"),
				(e.$_Z = "settings");
		}),
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
		define(
			de[3532],
			he([1, 0, 14, 26, 4, 91, 11, 184, 10, 63, 131, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y2c = e.$x2c = void 0);
				class h extends C.$3X {
					static {
						this.ID = "signals.sounds.help";
					}
					constructor() {
						super({
							id: h.ID,
							title: (0, w.localize2)(4424, "Help: List Signal Sounds"),
							f1: !0,
							metadata: { description: (0, w.localize)(4417, null) },
						});
					}
					async run(p) {
						const o = p.get(d.$Owb),
							f = p.get(r.$DJ),
							b = p.get(m.$gj),
							s = p.get(E.$XK),
							l = p.get(u.$7Z),
							y = [d.$Twb.save, d.$Twb.format],
							$ = d.$Twb.allAccessibilitySignals
								.map((I, T) => ({
									label: y.includes(I)
										? `${I.name} (${b.getValue(I.settingsKey + ".sound")})`
										: I.name,
									signal: I,
									buttons: y.includes(I)
										? [
												{
													iconClass: i.ThemeIcon.asClassName(
														t.$ak.settingsGear,
													),
													tooltip: (0, w.localize)(4418, null),
													alwaysVisible: !0,
												},
											]
										: [],
								}))
								.sort((I, T) => I.label.localeCompare(T.label)),
							v = new a.$Zc(),
							S = v.add(f.createQuickPick());
						(S.items = $),
							(S.selectedItems = $.filter(
								(I) =>
									o.isSoundEnabled(I.signal) ||
									(y.includes(I.signal) &&
										b.getValue(I.signal.settingsKey + ".sound") !== "never"),
							)),
							v.add(
								S.onDidAccept(() => {
									const I = S.selectedItems.map((P) => P.signal),
										T = S.items
											.map((P) => P.signal)
											.filter((P) => !I.includes(P));
									for (const P of I) {
										let { sound: k, announcement: L } = b.getValue(
											P.settingsKey,
										);
										(k = y.includes(P)
											? "userGesture"
											: s.isScreenReaderOptimized()
												? "auto"
												: "on"),
											L
												? b.updateValue(P.settingsKey, {
														sound: k,
														announcement: L,
													})
												: b.updateValue(P.settingsKey, { sound: k });
									}
									for (const P of T) {
										const k = b.getValue(P.settingsKey + ".announcement"),
											L = c(y.includes(P), s.isScreenReaderOptimized()),
											D = k ? { sound: L, announcement: k } : { sound: L };
										b.updateValue(P.settingsKey, D);
									}
									S.hide();
								}),
							),
							v.add(
								S.onDidTriggerItemButton((I) => {
									l.openUserSettings({
										jsonEditor: !0,
										revealSetting: { key: I.item.signal.settingsKey, edit: !0 },
									});
								}),
							),
							v.add(
								S.onDidChangeActive(() => {
									o.playSound(
										S.activeItems[0].signal.sound.getSound(!0),
										!0,
										d.$Pwb,
									);
								}),
							),
							v.add(S.onDidHide(() => v.dispose())),
							(S.placeholder = (0, w.localize)(4419, null)),
							(S.canSelectMany = !0),
							await S.show();
					}
				}
				e.$x2c = h;
				function c(g, p) {
					return p ? (g ? "never" : "off") : g ? "never" : "auto";
				}
				class n extends C.$3X {
					static {
						this.ID = "accessibility.announcement.help";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, w.localize2)(4425, "Help: List Signal Announcements"),
							f1: !0,
							metadata: { description: (0, w.localize)(4420, null) },
						});
					}
					async run(p) {
						const o = p.get(d.$Owb),
							f = p.get(r.$DJ),
							b = p.get(m.$gj),
							s = p.get(E.$XK),
							l = p.get(u.$7Z),
							y = [d.$Twb.save, d.$Twb.format],
							$ = d.$Twb.allAccessibilitySignals
								.filter((T) => !!T.legacyAnnouncementSettingsKey)
								.map((T, P) => ({
									label: y.includes(T)
										? `${T.name} (${b.getValue(T.settingsKey + ".announcement")})`
										: T.name,
									signal: T,
									buttons: y.includes(T)
										? [
												{
													iconClass: i.ThemeIcon.asClassName(
														t.$ak.settingsGear,
													),
													tooltip: (0, w.localize)(4421, null),
													alwaysVisible: !0,
												},
											]
										: [],
								}))
								.sort((T, P) => T.label.localeCompare(P.label)),
							v = new a.$Zc(),
							S = v.add(f.createQuickPick());
						(S.items = $),
							(S.selectedItems = $.filter(
								(T) =>
									o.isAnnouncementEnabled(T.signal) ||
									(y.includes(T.signal) &&
										b.getValue(T.signal.settingsKey + ".announcement") !==
											"never"),
							));
						const I = s.isScreenReaderOptimized();
						v.add(
							S.onDidAccept(() => {
								if (!I) {
									S.hide();
									return;
								}
								const T = S.selectedItems.map((k) => k.signal),
									P = d.$Twb.allAccessibilitySignals.filter(
										(k) => !!k.legacyAnnouncementSettingsKey && !T.includes(k),
									);
								for (const k of T) {
									let { sound: L, announcement: D } = b.getValue(k.settingsKey);
									(D = y.includes(k)
										? "userGesture"
										: k.announcementMessage && s.isScreenReaderOptimized()
											? "auto"
											: void 0),
										b.updateValue(k.settingsKey, { sound: L, announcement: D });
								}
								for (const k of P) {
									const L = c(y.includes(k), !0),
										D = b.getValue(k.settingsKey + ".sound"),
										M = L ? { sound: D, announcement: L } : { sound: D };
									b.updateValue(k.settingsKey, M);
								}
								S.hide();
							}),
						),
							v.add(
								S.onDidTriggerItemButton((T) => {
									l.openUserSettings({
										jsonEditor: !0,
										revealSetting: { key: T.item.signal.settingsKey, edit: !0 },
									});
								}),
							),
							v.add(S.onDidHide(() => v.dispose())),
							(S.placeholder = I
								? (0, w.localize)(4422, null)
								: (0, w.localize)(4423, null)),
							(S.canSelectMany = !0),
							await S.show();
					}
				}
				e.$y2c = n;
			},
		),
		define(
			de[3533],
			he([1, 0, 184, 11, 20, 55, 3050, 3532, 3258, 1624]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, w.$lK)(t.$Owb, t.$Qwb, w.InstantiationType.Delayed),
					(0, E.$s6)(
						"EditorTextPropertySignalsContribution",
						(0, r.$$jc)(() => m.$z2c),
						E.WorkbenchPhase.AfterRestored,
					),
					(0, E.$s6)(
						"AccessibilitySignalLineDebuggerContribution",
						C.$w2c,
						E.WorkbenchPhase.AfterRestored,
					),
					(0, i.$4X)(d.$x2c),
					(0, i.$4X)(d.$y2c);
			},
		),
		define(
			de[3534],
			he([
				1, 0, 14, 3, 9, 4, 99, 11, 31, 10, 8, 63, 238, 108, 293, 70, 176, 161,
				18, 131,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.select",
									title: (0, E.localize2)(
										7946,
										"Select between Notebook Layouts",
									),
									f1: !0,
									precondition: u.$Kj.equals(
										`config.${g.$56.openGettingStarted}`,
										!0,
									),
									category: h.$p5b,
									menu: [
										{
											id: d.$XX.EditorTitle,
											group: "notebookLayout",
											when: u.$Kj.and(
												p.$mJb,
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
												u.$Kj.equals(`config.${g.$56.openGettingStarted}`, !0),
											),
											order: 0,
										},
										{
											id: d.$XX.NotebookToolbar,
											group: "notebookLayout",
											when: u.$Kj.and(
												u.$Kj.equals("config.notebook.globalToolbar", !0),
												u.$Kj.equals(`config.${g.$56.openGettingStarted}`, !0),
											),
											order: 0,
										},
									],
								});
							}
							run(l) {
								l.get(m.$ek).executeCommand(
									"workbench.action.openWalkthrough",
									{ category: "notebooks", step: "notebookProfile" },
									!0,
								);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.configure",
									title: (0, E.localize2)(7947, "Customize Notebook Layout"),
									f1: !0,
									category: h.$p5b,
									menu: [
										{
											id: d.$XX.NotebookToolbar,
											group: "notebookLayout",
											when: u.$Kj.equals("config.notebook.globalToolbar", !0),
											order: 1,
										},
									],
								});
							}
							run(l) {
								l.get(b.$7Z).openSettings({
									jsonEditor: !1,
									query: "@tag:notebookLayout",
								});
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.configure.editorTitle",
									title: (0, E.localize2)(7948, "Customize Notebook Layout"),
									f1: !1,
									category: h.$p5b,
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayout",
											when: p.$mJb,
											order: 1,
										},
									],
								});
							}
							run(l) {
								l.get(b.$7Z).openSettings({
									jsonEditor: !1,
									query: "@tag:notebookLayout",
								});
							}
						},
					),
					d.$ZX.appendMenuItem(d.$XX.EditorTitle, {
						submenu: d.$XX.NotebookEditorLayoutConfigure,
						rememberDefaultAction: !1,
						title: (0, E.localize2)(7949, "Customize Notebook..."),
						icon: t.$ak.gear,
						group: "navigation",
						order: -1,
						when: p.$mJb,
					}),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.toggleLineNumbersFromEditorTitle",
									title: (0, E.localize2)(7950, "Toggle Notebook Line Numbers"),
									precondition: p.$pJb,
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayoutDetails",
											order: 1,
											when: p.$mJb,
										},
									],
									category: h.$p5b,
									f1: !0,
									toggled: {
										condition: u.$Kj.notEquals(
											"config.notebook.lineNumbers",
											"off",
										),
										title: (0, E.localize)(7939, null),
									},
								});
							}
							async run(l) {
								return l
									.get(m.$ek)
									.executeCommand("notebook.toggleLineNumbers");
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.toggleCellToolbarPositionFromEditorTitle",
									title: (0, E.localize2)(7951, "Toggle Cell Toolbar Position"),
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayoutDetails",
											order: 3,
										},
									],
									category: h.$p5b,
									f1: !1,
								});
							}
							async run(l, ...y) {
								return l
									.get(m.$ek)
									.executeCommand("notebook.toggleCellToolbarPosition", ...y);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "breadcrumbs.toggleFromEditorTitle",
									title: (0, E.localize2)(7952, "Toggle Breadcrumbs"),
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayoutDetails",
											order: 2,
										},
									],
									f1: !1,
								});
							}
							async run(l) {
								return l.get(m.$ek).executeCommand("breadcrumbs.toggle");
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.saveMimeTypeOrder",
									title: (0, E.localize2)(7953, "Save Mimetype Display Order"),
									f1: !0,
									category: h.$p5b,
									precondition: p.$mJb,
								});
							}
							run(l) {
								const y = l.get(o.$MIb),
									$ = new i.$Zc(),
									v = $.add(l.get(a.$DJ).createQuickPick());
								(v.placeholder = (0, E.localize)(7940, null)),
									(v.items = [
										{
											target: r.ConfigurationTarget.USER,
											label: (0, E.localize)(7941, null),
										},
										{
											target: r.ConfigurationTarget.WORKSPACE,
											label: (0, E.localize)(7942, null),
										},
									]),
									$.add(
										v.onDidAccept(() => {
											const S = v.selectedItems[0]?.target;
											S !== void 0 && y.saveMimeDisplayOrder(S), v.dispose();
										}),
									),
									$.add(v.onDidHide(() => $.dispose())),
									v.show();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.webview.reset",
									title: (0, E.localize2)(7954, "Reset Notebook Webview"),
									f1: !1,
									category: h.$p5b,
								});
							}
							run(l, y) {
								const $ = l.get(f.$IY);
								if (y) {
									const v = w.URI.revive(y),
										I = l
											.get(n.$n5b)
											.listNotebookEditors()
											.filter(
												(T) =>
													T.hasModel() &&
													T.textModel.uri.toString() === v.toString(),
											);
									for (const T of I)
										T.hasModel() && T.getInnerWebview()?.reload();
								} else {
									const v = (0, c.$eJb)($.activeEditorPane);
									if (!v) return;
									v.getInnerWebview()?.reload();
								}
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.action.toggleNotebookStickyScroll",
									title: {
										...(0, E.localize2)(7955, "Toggle Notebook Sticky Scroll"),
										mnemonicTitle: (0, E.localize)(7943, null),
									},
									category: C.$ck.View,
									toggled: {
										condition: u.$Kj.equals(
											"config.notebook.stickyScroll.enabled",
											!0,
										),
										title: (0, E.localize)(7944, null),
										mnemonicTitle: (0, E.localize)(7945, null),
									},
									menu: [
										{ id: d.$XX.CommandPalette },
										{
											id: d.$XX.NotebookStickyScrollContext,
											group: "notebookView",
											order: 2,
										},
									],
								});
							}
							async run(l) {
								const y = l.get(r.$gj),
									$ = !y.getValue("notebook.stickyScroll.enabled");
								return y.updateValue("notebook.stickyScroll.enabled", $);
							}
						},
					);
			},
		),
		define(
			de[3535],
			he([1, 0, 50, 9, 252, 67, 61, 4, 63, 131, 31, 30, 81, 46, 11, 39, 599]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pCc = void 0),
					(d = mt(d));
				let o = class extends t.$rj {
					static {
						this.ID = "workbench.action.configureLanguageBasedSettings";
					}
					static {
						this.LABEL = d.localize2(
							8437,
							"Configure Language Specific Settings...",
						);
					}
					constructor(b, s, l, y, $, v) {
						super(b, s), (this.a = l), (this.b = y), (this.c = $), (this.f = v);
					}
					async run() {
						const s = this.b
							.getSortedRegisteredLanguageNames()
							.map(({ languageName: l, languageId: y }) => {
								const $ = d.localize(8435, null, y);
								let v;
								const S = this.b.getExtensions(y);
								if (S.length) v = i.URI.file(S[0]);
								else {
									const I = this.b.getFilenames(y);
									I.length && (v = i.URI.file(I[0]));
								}
								return {
									label: l,
									iconClasses: (0, w.$BDb)(this.a, this.b, v),
									description: $,
								};
							});
						await this.c
							.pick(s, { placeHolder: d.localize(8436, null) })
							.then((l) => {
								if (l) {
									const y = this.b.getLanguageIdByLanguageName(l.label);
									if (typeof y == "string")
										return this.f.openLanguageSpecificSettings(y);
								}
							});
					}
				};
				(e.$pCc = o),
					(e.$pCc = o =
						Ne([j(2, E.$QO), j(3, C.$nM), j(4, m.$DJ), j(5, r.$7Z)], o)),
					u.$fk.registerCommand({
						id: "_getAllSettings",
						handler: () =>
							a.$Io.as(h.$No.Configuration).getConfigurationProperties(),
					}),
					u.$fk.registerCommand("_getAllCommands", function (f) {
						const b = f.get(g.$uZ),
							s = [];
						for (const l of c.EditorExtensionsRegistry.getEditorActions()) {
							const y = b.lookupKeybinding(l.id);
							s.push({
								command: l.id,
								label: l.label,
								description: (0, p.$gk)(l.metadata?.description)
									? l.metadata.description.value
									: l.metadata?.description,
								precondition: l.precondition?.serialize(),
								keybinding: y?.getLabel() ?? "Not set",
							});
						}
						for (const l of n.$ZX.getMenuItems(n.$XX.CommandPalette))
							if ((0, n.$VX)(l)) {
								const y =
										typeof l.command.title == "string"
											? l.command.title
											: l.command.title.value,
									$ = l.command.category
										? typeof l.command.category == "string"
											? l.command.category
											: l.command.category.value
										: void 0,
									v = $ ? `${$}: ${y}` : y,
									S = (0, p.$gk)(l.command.metadata?.description)
										? l.command.metadata.description.value
										: l.command.metadata?.description,
									I = b.lookupKeybinding(l.command.id);
								s.push({
									command: l.command.id,
									label: v,
									description: S,
									precondition: l.when?.serialize(),
									keybinding: I?.getLabel() ?? "Not set",
								});
							}
						return s;
					});
			},
		),
		define(
			de[3536],
			he([1, 0, 29, 3, 23, 9, 22, 131, 6, 30, 250, 76, 34]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bEc = void 0),
					(u = mt(u));
				const n = r.$Io.as(u.$Jo.JSONContribution);
				let g = class extends i.$1c {
					static {
						c = this;
					}
					static {
						this.SCHEMA = w.Schemas.vscode;
					}
					constructor(o, f) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.a = this.D(new m.$re())),
							(this.onDidChangeFile = this.a.event),
							(this.capabilities =
								C.FileSystemProviderCapabilities.Readonly +
								C.FileSystemProviderCapabilities.FileReadWrite),
							(this.onDidChangeCapabilities = m.Event.None),
							this.D(
								n.onDidChangeSchema((b) => {
									this.a.fire([
										{
											resource: E.URI.parse(b),
											type: C.FileChangeType.UPDATED,
										},
									]);
								}),
							),
							this.D(
								o.onDidDefaultSettingsContentChanged((b) => {
									this.a.fire([
										{ resource: b, type: C.FileChangeType.UPDATED },
									]);
								}),
							);
					}
					async readFile(o) {
						if (o.scheme !== c.SCHEMA) throw new t.$db();
						let f;
						if (
							(o.authority === "schemas"
								? (f = this.f(o))
								: o.authority === "defaultsettings" &&
									(f = this.b.getDefaultSettingsContent(o)),
							f)
						)
							return a.$Te.fromString(f).buffer;
						throw C.FileSystemProviderErrorCode.FileNotFound;
					}
					async stat(o) {
						if (
							n.hasSchemaContent(o.toString()) ||
							this.b.hasDefaultSettingsContent(o)
						) {
							const f = Date.now();
							return {
								type: C.FileType.File,
								permissions: C.FilePermission.Readonly,
								mtime: f,
								ctime: f,
								size: 0,
							};
						}
						throw C.FileSystemProviderErrorCode.FileNotFound;
					}
					watch(o, f) {
						return i.$1c.None;
					}
					async mkdir(o) {}
					async readdir(o) {
						return [];
					}
					async rename(o, f, b) {}
					async delete(o, f) {}
					async writeFile() {
						throw new t.$db();
					}
					f(o) {
						const f = Date.now(),
							b = n.getSchemaContent(o.toString()) ?? "{}",
							s = this.c.getLevel();
						if (s === h.LogLevel.Debug || s === h.LogLevel.Trace) {
							const l = Date.now(),
								y = JSON.stringify(
									n.getSchemaContributions().schemas[o.toString()],
								);
							this.c.debug(
								`${o.toString()}: ${y.length} -> ${b.length} (${Math.round(((y.length - b.length) / y.length) * 100)}%) Took ${l - f}ms`,
							);
						}
						return b;
					}
				};
				(e.$bEc = g), (e.$bEc = g = c = Ne([j(0, d.$7Z), j(1, h.$ik)], g));
			},
		),
		define(
			de[3537],
			he([
				1, 0, 50, 3, 23, 19, 28, 9, 4, 11, 121, 31, 81, 8, 57, 113, 34, 40, 41,
				62, 84, 63, 30, 1638, 21, 25, 55, 357, 53, 52, 297, 131,
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
					(e.$Pgd = e.$Ogd = e.$Ngd = e.$Mgd = void 0),
					(e.$Mgd = (0, m.localize2)(8959, "Remote Tunnels")),
					(e.$Ngd = "remoteTunnelConnection"),
					(e.$Ogd = new c.$5j(e.$Ngd, "disconnected"));
				const M = "remoteTunnelServiceUsed",
					N = "remoteTunnelServicePromptedPreview",
					A = "remoteTunnelExtensionRecommended",
					R = "remoteTunnelHasUsed",
					O = 4 * 60 * 1e3,
					B = 2;
				var U;
				(function (H) {
					(H.turnOn = "workbench.remoteTunnel.actions.turnOn"),
						(H.turnOff = "workbench.remoteTunnel.actions.turnOff"),
						(H.connecting = "workbench.remoteTunnel.actions.connecting"),
						(H.manage = "workbench.remoteTunnel.actions.manage"),
						(H.showLog = "workbench.remoteTunnel.actions.showLog"),
						(H.configure = "workbench.remoteTunnel.actions.configure"),
						(H.copyToClipboard =
							"workbench.remoteTunnel.actions.copyToClipboard"),
						(H.learnMore = "workbench.remoteTunnel.actions.learnMore");
				})(U || (U = {}));
				var z;
				(function (H) {
					(H.turnOn = (0, m.localize)(8919, null)),
						(H.turnOff = (0, m.localize)(8920, null)),
						(H.showLog = (0, m.localize)(8921, null)),
						(H.configure = (0, m.localize)(8922, null)),
						(H.copyToClipboard = (0, m.localize)(8923, null)),
						(H.learnMore = (0, m.localize)(8924, null));
				})(z || (z = {}));
				let F = class extends i.$1c {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
						super(),
							(this.j = q),
							(this.m = V),
							(this.n = G),
							(this.q = K),
							(this.r = W),
							(this.t = Y),
							(this.u = ie),
							(this.w = ne),
							(this.y = ee),
							(this.z = _),
							(this.C = te),
							(this.F = Q),
							(this.h = new Set()),
							(this.g = this.D(
								X.createLogger((0, E.$nh)(ie.logsHome, `${$.$z9c}.log`), {
									id: $.$z9c,
									name: $.$A9c,
								}),
							)),
							(this.a = e.$Ogd.bindTo(this.q));
						const Z = J.tunnelApplicationConfig;
						if (!Z || !J.tunnelApplicationName) {
							this.g.error(
								"Missing 'tunnelApplicationConfig' or 'tunnelApplicationName' in product.json. Remote tunneling is not available.",
							),
								(this.b = {
									authenticationProviders: {},
									editorWebUrl: "",
									extension: { extensionId: "", friendlyName: "" },
								});
							return;
						}
						(this.b = Z),
							this.D(this.w.onDidChangeTunnelStatus((se) => this.G(se))),
							this.S(),
							this.I(),
							this.H();
					}
					G(q) {
						(this.f = void 0),
							q.type === "disconnected"
								? (q.onTokenFailed && this.h.add(q.onTokenFailed.sessionId),
									this.a.set("disconnected"))
								: q.type === "connecting"
									? this.a.set("connecting")
									: q.type === "connected" &&
										((this.f = q.info), this.a.set("connected"));
					}
					async H() {
						await this.n.whenInstalledExtensionsRegistered();
						const q = this.b.extension,
							V = async () => {
								if (
									this.r.getBoolean(A, v.StorageScope.APPLICATION) ||
									(await this.n.getExtension(q.extensionId))
								)
									return !1;
								const K = this.r.get(M, v.StorageScope.APPLICATION);
								if (!K) return !1;
								let J;
								try {
									const X = JSON.parse(K);
									if (!(0, C.$ng)(X)) return !1;
									const { hostName: Y, timeStamp: ie } = X;
									if (
										!(0, C.$lg)(Y) ||
										!(0, C.$pg)(ie) ||
										new Date().getTime() > ie + O
									)
										return !1;
									J = Y;
								} catch {
									return !1;
								}
								const W = await this.w.getTunnelName();
								return !W || W === J ? !1 : J;
							},
							G = async () => {
								const K = await V();
								return K
									? (this.F.notify({
											severity: o.Severity.Info,
											message: (0, m.localize)(8925, null, K, q.friendlyName),
											actions: {
												primary: [
													new t.$rj(
														"showExtension",
														(0, m.localize)(8926, null),
														void 0,
														!0,
														() =>
															this.y.executeCommand(
																"workbench.extensions.action.showExtensionsWithIds",
																[q.extensionId],
															),
													),
													new t.$rj(
														"doNotShowAgain",
														(0, m.localize)(8927, null),
														void 0,
														!0,
														() => {
															this.r.store(
																A,
																!0,
																v.StorageScope.APPLICATION,
																v.StorageTarget.USER,
															);
														},
													),
												],
											},
										}),
										!0)
									: !1;
							};
						if (await V()) {
							const K = this.D(new i.$Zc());
							K.add(
								this.r.onDidChangeValue(
									v.StorageScope.APPLICATION,
									M,
									K,
								)(async () => {
									(await G()) && K.dispose();
								}),
							);
						}
					}
					async I() {
						const [q, V] = await Promise.all([
							this.w.getMode(),
							this.w.getTunnelStatus(),
						]);
						if ((this.G(V), q.active && q.session.token)) return;
						const G = async (J) => {
							const W =
								J &&
								this.w.onDidChangeTunnelStatus((ie) => {
									switch (ie.type) {
										case "connecting":
											ie.progress && J.report({ message: ie.progress });
											break;
									}
								});
							let X;
							if (q.active) {
								const ie = await this.Q(q.session);
								ie && (X = { ...q.session, token: ie });
							}
							const Y = await this.w.initialize(
								q.active && X ? { ...q, session: X } : $.$v9c,
							);
							if ((W?.dispose(), Y.type === "connected")) {
								(this.f = Y.info), this.a.set("connected");
								return;
							}
						};
						this.r.getBoolean(R, v.StorageScope.APPLICATION, !1)
							? await this.C.withProgress(
									{
										location: s.ProgressLocation.Window,
										title: (0, m.localize)(8928, null, U.showLog),
									},
									G,
								)
							: G(void 0);
					}
					J(q) {
						return q.session.accessToken || q.session.idToken;
					}
					async L(q) {
						if (this.f) return this.f;
						this.r.store(
							R,
							!0,
							v.StorageScope.APPLICATION,
							v.StorageTarget.MACHINE,
						);
						let V = !1;
						for (let G = 0; G < B; G++) {
							V = !1;
							const K = await this.M();
							if (K === void 0) {
								this.g.info(
									"No authentication session available, not starting tunnel",
								);
								return;
							}
							const J = await this.C.withProgress(
								{
									location: s.ProgressLocation.Notification,
									title: (0, m.localize)(8929, null, U.showLog),
								},
								(W) =>
									new Promise((X, Y) => {
										let ie = !1;
										const ne = this.w.onDidChangeTunnelStatus((te) => {
												switch (te.type) {
													case "connecting":
														te.progress && W.report({ message: te.progress });
														break;
													case "connected":
														ne.dispose(),
															(ie = !0),
															X(te.info),
															te.serviceInstallFailed &&
																this.F.notify({
																	severity: o.Severity.Warning,
																	message: (0, m.localize)(
																		8930,
																		null,
																		U.showLog,
																	),
																});
														break;
													case "disconnected":
														ne.dispose(),
															(ie = !0),
															(V = !!te.onTokenFailed),
															X(void 0);
														break;
												}
											}),
											ee = this.J(K),
											_ = {
												sessionId: K.session.id,
												token: ee,
												providerId: K.providerId,
												accountLabel: K.session.account.label,
											};
										this.w
											.startTunnel({ active: !0, asService: q, session: _ })
											.then((te) => {
												!ie &&
													(te.type === "connected" ||
														te.type === "disconnected") &&
													(ne.dispose(),
													te.type === "connected"
														? X(te.info)
														: ((V = !!te.onTokenFailed), X(void 0)));
											});
									}),
							);
							if (J || !V) return J;
						}
					}
					async M() {
						const q = await this.P(),
							V = new i.$Zc(),
							G = V.add(this.t.createQuickPick({ useSeparators: !0 }));
						return (
							(G.ok = !1),
							(G.placeholder = (0, m.localize)(8931, null)),
							(G.ignoreFocusOut = !0),
							(G.items = await this.O(q)),
							new Promise((K, J) => {
								V.add(
									G.onDidHide((W) => {
										K(void 0), V.dispose();
									}),
								),
									V.add(
										G.onDidAccept(async (W) => {
											const X = G.selectedItems[0];
											if ("provider" in X) {
												const Y = await this.j.createSession(
													X.provider.id,
													X.provider.scopes,
												);
												K(this.N(Y, X.provider.id));
											} else "session" in X ? K(X) : K(void 0);
											G.hide();
										}),
									),
									G.show();
							})
						);
					}
					N(q, V) {
						return {
							label: q.account.label,
							description: this.j.getProvider(V).label,
							session: q,
							providerId: V,
						};
					}
					async O(q) {
						const V = [];
						q.length &&
							(V.push({
								type: "separator",
								label: (0, m.localize)(8932, null),
							}),
							V.push(...q),
							V.push({
								type: "separator",
								label: (0, m.localize)(8933, null),
							}));
						for (const G of await this.R()) {
							const K = q.some((W) => W.providerId === G.id),
								J = this.j.getProvider(G.id);
							(!K || J.supportsMultipleAccounts) &&
								V.push({
									label: (0, m.localize)(8934, null, J.label),
									provider: G,
								});
						}
						return V;
					}
					async P() {
						const q = await this.R(),
							V = new Map(),
							G = await this.w.getMode();
						let K;
						for (const J of q) {
							const W = await this.j.getSessions(J.id, J.scopes);
							for (const X of W)
								if (!this.h.has(X.id)) {
									const Y = this.N(X, J.id);
									V.set(Y.session.account.id, Y),
										G.active && G.session.sessionId === X.id && (K = Y);
								}
						}
						return (
							K !== void 0 && V.set(K.session.account.id, K), [...V.values()]
						);
					}
					async Q(q) {
						if (q) {
							const V = (await this.P()).find(
								(G) => G.session.id === q.sessionId,
							);
							if (V) return this.J(V);
						}
					}
					async R() {
						const q = this.b.authenticationProviders,
							V = Object.keys(q).reduce(
								(K, J) => (K.push({ id: J, scopes: q[J].scopes }), K),
								[],
							),
							G = this.j.declaredProviders;
						return V.filter(({ id: K }) => G.some((J) => J.id === K));
					}
					S() {
						const q = this;
						this.D(
							(0, r.$4X)(
								class extends r.$3X {
									constructor() {
										super({
											id: U.turnOn,
											title: z.turnOn,
											category: e.$Mgd,
											precondition: c.$Kj.equals(e.$Ngd, "disconnected"),
											menu: [
												{ id: r.$XX.CommandPalette },
												{
													id: r.$XX.AccountsContext,
													group: "2_remoteTunnel",
													when: c.$Kj.equals(e.$Ngd, "disconnected"),
												},
											],
										});
									}
									async run(V) {
										const G = V.get(o.$4N),
											K = V.get(u.$Vxb),
											J = V.get(a.$ek),
											W = V.get(v.$lq),
											X = V.get(n.$GO),
											Y = V.get(l.$DJ),
											ie = V.get(b.$Bk);
										if (!W.getBoolean(N, v.StorageScope.APPLICATION, !1)) {
											const { confirmed: Z } = await X.confirm({
												message: (0, m.localize)(8935, null),
												primaryButton: (0, m.localize)(8936, null),
											});
											if (!Z) return;
											W.store(
												N,
												!0,
												v.StorageScope.APPLICATION,
												v.StorageTarget.USER,
											);
										}
										const ee = new i.$Zc(),
											_ = Y.createQuickPick();
										(_.placeholder = (0, m.localize)(8937, null)),
											(_.items = [
												{
													service: !1,
													label: (0, m.localize)(8938, null),
													description: (0, m.localize)(
														8939,
														null,
														ie.nameShort,
													),
												},
												{
													service: !0,
													label: (0, m.localize)(8940, null),
													description: (0, m.localize)(8941, null),
												},
											]);
										const te = await new Promise((Z) => {
											ee.add(
												_.onDidAccept(() => Z(_.selectedItems[0]?.service)),
											),
												ee.add(_.onDidHide(() => Z(void 0))),
												_.show();
										});
										if ((_.dispose(), te === void 0)) return;
										const Q = await q.L(te);
										if (Q) {
											const Z = q.U(Q),
												se = q.b.extension,
												re = Z.toString(!1).replace(/\)/g, "%29");
											G.notify({
												severity: o.Severity.Info,
												message: (0, m.localize)(
													8942,
													null,
													Q.tunnelName,
													Q.domain,
													re,
													U.manage,
													U.configure,
													U.turnOff,
													se.friendlyName,
													"https://code.visualstudio.com/docs/remote/tunnels",
												),
												actions: {
													primary: [
														new t.$rj(
															"copyToClipboard",
															(0, m.localize)(8943, null),
															void 0,
															!0,
															() => K.writeText(Z.toString(!0)),
														),
														new t.$rj(
															"showExtension",
															(0, m.localize)(8944, null),
															void 0,
															!0,
															() =>
																J.executeCommand(
																	"workbench.extensions.action.showExtensionsWithIds",
																	[se.extensionId],
																),
														),
													],
												},
											});
											const le = {
												hostName: Q.tunnelName,
												timeStamp: new Date().getTime(),
											};
											W.store(
												M,
												JSON.stringify(le),
												v.StorageScope.APPLICATION,
												v.StorageTarget.USER,
											);
										} else
											G.notify({
												severity: o.Severity.Info,
												message: (0, m.localize)(8945, null),
											}),
												await J.executeCommand(U.showLog);
									}
								},
							),
						),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.manage,
												title: (0, m.localize)(8946, null),
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.AccountsContext,
														group: "2_remoteTunnel",
														when: c.$Kj.equals(e.$Ngd, "connected"),
													},
												],
											});
										}
										async run() {
											q.W();
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.connecting,
												title: (0, m.localize)(8947, null),
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.AccountsContext,
														group: "2_remoteTunnel",
														when: c.$Kj.equals(e.$Ngd, "connecting"),
													},
												],
											});
										}
										async run() {
											q.W();
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.turnOff,
												title: z.turnOff,
												category: e.$Mgd,
												precondition: c.$Kj.notEquals(e.$Ngd, "disconnected"),
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.notEquals(e.$Ngd, ""),
													},
												],
											});
										}
										async run() {
											const V = q.f?.isAttached
													? (0, m.localize)(8948, null)
													: (0, m.localize)(8949, null),
												{ confirmed: G } = await q.m.confirm({ message: V });
											G && q.w.stopTunnel();
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.showLog,
												title: z.showLog,
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.notEquals(e.$Ngd, ""),
													},
												],
											});
										}
										async run(V) {
											V.get(L.$o8).showChannel($.$z9c);
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.configure,
												title: z.configure,
												category: e.$Mgd,
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.notEquals(e.$Ngd, ""),
													},
												],
											});
										}
										async run(V) {
											V.get(D.$7Z).openSettings({ query: $.$w9c });
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.copyToClipboard,
												title: z.copyToClipboard,
												category: e.$Mgd,
												precondition: c.$Kj.equals(e.$Ngd, "connected"),
												menu: [
													{
														id: r.$XX.CommandPalette,
														when: c.$Kj.equals(e.$Ngd, "connected"),
													},
												],
											});
										}
										async run(V) {
											const G = V.get(u.$Vxb);
											if (q.f) {
												const K = q.U(q.f);
												G.writeText(K.toString(!0));
											}
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: U.learnMore,
												title: z.learnMore,
												category: e.$Mgd,
												menu: [],
											});
										}
										async run(V) {
											await V.get(f.$7rb).open(
												"https://aka.ms/vscode-server-doc",
											);
										}
									},
								),
							);
					}
					U(q) {
						const V = this.z.getWorkspace(),
							G = V.folders;
						let K;
						G.length === 1
							? (K = G[0].uri)
							: V.configuration &&
								!(0, S.$aj)(V.configuration, this.u) &&
								(K = V.configuration);
						const J = d.URI.parse(q.link);
						return K?.scheme === w.Schemas.file
							? (0, E.$nh)(J, K.path)
							: (0, E.$nh)(J, this.u.userHome.path);
					}
					async W() {
						const q = await this.w.getMode();
						return new Promise((V, G) => {
							const K = new i.$Zc(),
								J = this.t.createQuickPick({ useSeparators: !0 });
							(J.placeholder = (0, m.localize)(8950, null)), K.add(J);
							const W = [];
							W.push({ id: U.learnMore, label: z.learnMore }),
								this.f
									? ((J.title = this.f.isAttached
											? (0, m.localize)(8951, null, this.f.tunnelName)
											: (0, m.localize)(8952, null, this.f.tunnelName)),
										W.push({
											id: U.copyToClipboard,
											label: z.copyToClipboard,
											description: this.f.domain,
										}))
									: (J.title = (0, m.localize)(8953, null)),
								W.push({ id: U.showLog, label: (0, m.localize)(8954, null) }),
								W.push({ type: "separator" }),
								W.push({
									id: U.configure,
									label: (0, m.localize)(8955, null),
									description: this.f?.tunnelName,
								}),
								W.push({
									id: U.turnOff,
									label: z.turnOff,
									description: q.active
										? `${q.session.accountLabel} (${q.session.providerId})`
										: void 0,
								}),
								(J.items = W),
								K.add(
									J.onDidAccept(() => {
										J.selectedItems[0] &&
											J.selectedItems[0].id &&
											this.y.executeCommand(J.selectedItems[0].id),
											J.hide();
									}),
								),
								K.add(
									J.onDidHide(() => {
										K.dispose(), V();
									}),
								),
								J.show();
						});
					}
				};
				(e.$Pgd = F),
					(e.$Pgd = F =
						Ne(
							[
								j(0, T.$$7),
								j(1, n.$GO),
								j(2, P.$q2),
								j(3, c.$6j),
								j(4, b.$Bk),
								j(5, v.$lq),
								j(6, p.$jk),
								j(7, l.$DJ),
								j(8, g.$Ui),
								j(9, $.$u9c),
								j(10, a.$ek),
								j(11, S.$Vi),
								j(12, s.$8N),
								j(13, o.$4N),
							],
							F,
						)),
					y.$Io
						.as(I.Extensions.Workbench)
						.registerWorkbenchContribution(F, k.LifecyclePhase.Restored),
					y.$Io
						.as(h.$No.Configuration)
						.registerConfiguration({
							type: "object",
							properties: {
								[$.$x9c]: {
									description: (0, m.localize)(8956, null),
									type: "string",
									scope: h.ConfigurationScope.APPLICATION,
									ignoreSync: !0,
									pattern: "^(\\w[\\w-]*)?$",
									patternErrorMessage: (0, m.localize)(8957, null),
									maxLength: 20,
									default: "",
								},
								[$.$y9c]: {
									description: (0, m.localize)(8958, null),
									type: "boolean",
									scope: h.ConfigurationScope.APPLICATION,
									default: !1,
								},
							},
						});
			},
		),
		define(
			de[3538],
			he([
				1, 0, 50, 11, 8, 256, 12, 40, 39, 151, 91, 10, 73, 415, 1311, 21, 1623,
				110, 87, 131, 31, 571, 599, 92, 72,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tdd = void 0);
				let S = class extends n.$2qc {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(T, P, k, L, D, M, N, A, R, O, B, U, F, H, q),
							(this.ab = z),
							(this.bb = x),
							(async () => (
								(this.h = await this.q.getRecentlyOpened()), this.L()
							))(),
							this.M();
					}
					N() {
						super.N();
						for (const T of Object.keys(this.f)) {
							const P = this.c[T];
							P && this.g.add(P.onDidChange(() => this.O()));
						}
					}
					L() {
						if (!this.H.hasFocus) return;
						const T = { menus: {}, keybindings: {} };
						this.eb(T) && this.ab.updateMenubar(this.bb.windowId, T);
					}
					eb(T) {
						if (!T) return !1;
						T.keybindings = this.hb();
						for (const P of Object.keys(this.f)) {
							const k = this.c[P];
							if (k) {
								const L = { items: [] },
									D = [];
								if (
									((0, $.$Jyb)(k, { shouldForwardArgs: !0 }, D),
									this.fb(D, L, T.keybindings),
									L.items.length === 0)
								)
									return !1;
								T.menus[P] = L;
							}
						}
						return !0;
					}
					fb(T, P, k) {
						for (const L of T)
							if (L instanceof t.$tj)
								P.items.push({ id: "vscode.menubar.separator" });
							else if (L instanceof i.$2X || L instanceof i.$1X) {
								const D =
									typeof L.item.title == "string"
										? L.item.title
										: (L.item.title.mnemonicTitle ?? L.item.title.value);
								if (L instanceof i.$1X) {
									const M = { items: [] };
									if ((this.fb(L.actions, M, k), M.items.length > 0)) {
										const N = { id: L.id, label: D, submenu: M };
										P.items.push(N);
									}
								} else {
									if (L.id === l.$Yqc.ID) {
										const N = this.S().map(this.gb);
										P.items.push(...N);
									}
									const M = { id: L.id, label: D };
									(0, y.$hk)(L.item.toggled) &&
										(M.label =
											L.item.toggled.mnemonicTitle ??
											L.item.toggled.title ??
											D),
										L.checked && (M.checked = !0),
										L.enabled || (M.enabled = !1),
										(k[L.id] = this.ib(L.id)),
										P.items.push(M);
								}
							}
					}
					gb(T) {
						return T instanceof t.$tj
							? { id: "vscode.menubar.separator" }
							: {
									id: T.id,
									uri: T.uri,
									remoteAuthority: T.remoteAuthority,
									enabled: T.enabled,
									label: T.label,
								};
					}
					hb() {
						const T = {};
						if (C.$m) {
							const P = this.ib("workbench.action.quit");
							P && (T["workbench.action.quit"] = P);
						}
						return T;
					}
					ib(T) {
						const P = this.s.lookupKeybinding(T);
						if (!P) return;
						const k = P.getElectronAccelerator();
						if (k)
							return {
								label: k,
								userSettingsLabel: P.getUserSettingsLabel() ?? void 0,
							};
						const L = P.getLabel();
						if (L)
							return {
								label: L,
								isNative: !1,
								userSettingsLabel: P.getUserSettingsLabel() ?? void 0,
							};
					}
				};
				(e.$tdd = S),
					(e.$tdd = S =
						Ne(
							[
								j(0, i.$YX),
								j(1, E.$cRb),
								j(2, w.$6j),
								j(3, m.$uZ),
								j(4, a.$gj),
								j(5, h.$3N),
								j(6, c.$_rb),
								j(7, g.$lq),
								j(8, d.$4N),
								j(9, b.$7Z),
								j(10, r.$ucd),
								j(11, u.$XK),
								j(12, p.$8bd),
								j(13, f.$asb),
								j(14, o.$y7c),
								j(15, s.$ek),
								j(16, v.$Uyb),
							],
							S,
						));
			},
		),
		define(
			de[1312],
			he([1, 0, 14, 23, 9, 4, 79, 223, 131]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uvc = void 0),
					(E = mt(E));
				const u = (0, C.$$O)(
					"settings-editor-label-icon",
					t.$ak.settings,
					E.localize(12586, null),
				);
				let a = class extends d.$LO {
					static {
						r = this;
					}
					static {
						this.ID = "workbench.input.settings2";
					}
					constructor(c) {
						super(),
							(this.resource = w.URI.from({
								scheme: i.Schemas.vscodeSettings,
								path: "settingseditor",
							})),
							(this.a = c.createSettings2EditorModel());
					}
					matches(c) {
						return super.matches(c) || c instanceof r;
					}
					get typeId() {
						return r.ID;
					}
					getName() {
						return E.localize(12587, null);
					}
					getIcon() {
						return u;
					}
					async resolve() {
						return this.a;
					}
					dispose() {
						this.a.dispose(), super.dispose();
					}
				};
				(e.$uvc = a), (e.$uvc = a = r = Ne([j(0, m.$7Z)], a));
			},
		),
		