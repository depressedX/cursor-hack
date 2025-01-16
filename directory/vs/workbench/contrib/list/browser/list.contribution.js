define(de[3430], he([1, 0, 8, 55, 11, 3072]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$v2c = void 0);
			let C = class {
				static {
					this.ID = "workbench.contrib.listContext";
				}
				constructor(m) {
					m.createKey("listSupportsTypeNavigation", !0),
						m.createKey("listSupportsKeyboardNavigation", !0);
				}
			};
			(e.$v2c = C),
				(e.$v2c = C = Ne([j(0, t.$6j)], C)),
				(0, i.$s6)(C.ID, C, i.WorkbenchPhase.BlockStartup),
				(0, w.$4X)(E.$u2c);
		}),
		define(
			de[3431],
			he([1, 0, 55, 90, 472, 3, 4, 30, 51, 10, 81, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class h {
					constructor(g) {
						(this.a = g),
							(this.label = (0, C.localize)(7484, null)),
							(this.onDidChange = g.onMarkerChanged);
					}
					provideDecorations(g) {
						const p = this.a.read({
							resource: g,
							severities: i.MarkerSeverity.Error | i.MarkerSeverity.Warning,
						});
						let o;
						for (const f of p) (!o || f.severity > o.severity) && (o = f);
						if (o)
							return {
								weight: 100 * o.severity,
								bubble: !0,
								tooltip:
									p.length === 1
										? (0, C.localize)(7485, null)
										: (0, C.localize)(7486, null, p.length),
								letter: p.length < 10 ? p.length.toString() : "9+",
								color: o.severity === i.MarkerSeverity.Error ? m.$TS : m.$US,
							};
					}
				}
				let c = class {
					constructor(g, p, o) {
						(this.d = g),
							(this.f = p),
							(this.g = o),
							(this.a = [
								this.g.onDidChangeConfiguration((f) => {
									f.affectsConfiguration("problems.visibility") && this.h();
								}),
							]),
							this.h();
					}
					dispose() {
						(0, E.$Vc)(this.b), (0, E.$Vc)(this.a);
					}
					h() {
						const g = this.g.getValue("problems.visibility");
						if (g === void 0) return;
						const p = this.g.getValue("problems"),
							o = g && p.decorations.enabled;
						if (o === this.c) {
							(!g || !p.decorations.enabled) &&
								(this.b?.dispose(), (this.b = void 0));
							return;
						}
						if (((this.c = o), this.c)) {
							const f = new h(this.d);
							this.b = this.f.registerDecorationsProvider(f);
						} else this.b && this.b.dispose();
					}
				};
				(c = Ne([j(0, i.$aM), j(1, w.$sPb), j(2, r.$gj)], c)),
					d.$Io
						.as(u.$No.Configuration)
						.registerConfiguration({
							id: "problems",
							order: 101,
							type: "object",
							properties: {
								"problems.decorations.enabled": {
									markdownDescription: (0, C.localize)(
										7487,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
							},
						}),
					d.$Io
						.as(t.Extensions.Workbench)
						.registerWorkbenchContribution(c, a.LifecyclePhase.Restored);
			},
		),
		define(
			de[3432],
			he([1, 0, 3, 30, 55, 243, 557, 53, 52]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let r = class extends t.$1c {
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.a = new Map()),
							(this.b = this.D(new t.$Zc())),
							this.h();
					}
					h() {
						this.b.clear(),
							this.b.add(
								this.f.onWillActivateByEvent((h) => {
									if (h.event.startsWith("onNotebook:")) {
										if (this.f.activationEventIsDone(h.event)) return;
										const c = h.event.substring(11);
										if (c === "*") return;
										let n = !1;
										const g = this.f.getExtensionsStatus();
										if (
											(this.f.extensions.forEach((p) => {
												g[p.identifier.value].activationTimes ||
													(p.activationEvents?.includes(h.event) && (n = !0));
											}),
											n && !this.a.has(c))
										) {
											this.g.debug(
												"KernelDetection",
												`start extension activation for ${c}`,
											);
											const p = this.c.registerNotebookKernelDetectionTask({
												notebookType: c,
											});
											this.a.set(c, p);
										}
									}
								}),
							);
						let a = null;
						this.b.add(
							this.f.onDidChangeExtensionsStatus(() => {
								a && clearTimeout(a),
									(a = setTimeout(() => {
										const h = [];
										for (const [c, n] of this.a)
											this.f.activationEventIsDone(`onNotebook:${c}`) &&
												(this.g.debug(
													"KernelDetection",
													`finish extension activation for ${c}`,
												),
												h.push(c),
												n.dispose());
										h.forEach((c) => {
											this.a.delete(c);
										});
									}));
							}),
						),
							this.b.add({
								dispose: () => {
									a && clearTimeout(a);
								},
							});
					}
				};
				(r = Ne([j(0, E.$f6), j(1, d.$q2), j(2, C.$P2b)], r)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(r, m.LifecyclePhase.Restored);
			},
		),
		define(
			de[3433],
			he([1, 0, 29, 6, 3, 4, 5, 40, 1829, 157, 52, 119, 154, 21, 282, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PGc = void 0),
					(e.$QGc = b);
				function p(s) {
					const l = s.get(a.$Hp),
						y = s.get(r.$IQb),
						$ = i.Event.chain(l.onDidInstallExtensions, (v) =>
							v
								.filter((S) =>
									S.some(
										({ operation: I }) => I === a.InstallOperation.Install,
									),
								)
								.map((S) => S.map(({ identifier: I }) => I)),
						);
					return i.Event.debounce(
						i.Event.any(
							i.Event.any(
								$,
								i.Event.map(l.onDidUninstallExtension, (v) => [v.identifier]),
							),
							i.Event.map(y.onEnablementChanged, (v) =>
								v.map((S) => S.identifier),
							),
						),
						(v, S) => {
							v = v || (S.length ? [S[0]] : []);
							for (const I of S) v.some((T) => !(0, h.$7p)(T, I)) && v.push(I);
							return v;
						},
					);
				}
				const o = "hasRecommendedKeymap";
				let f = class extends w.$1c {
					constructor(l, y, $, v, S) {
						super(),
							(this.c = l),
							(this.f = y),
							(this.g = $),
							(this.a = new n.$eEb("notebookKeymap", v)),
							(this.b = this.a.getMemento(
								c.StorageScope.PROFILE,
								c.StorageTarget.USER,
							)),
							this.D(S.onDidShutdown(() => this.dispose())),
							this.D(
								this.c.invokeFunction(p)((I) => {
									Promise.all(I.map((T) => this.h(T))).then(void 0, t.$4);
								}),
							);
					}
					h(l) {
						return this.c.invokeFunction(m.$OGc).then((y) => {
							const $ = y.filter((S) => b(S)),
								v = $.find((S) => (0, h.$7p)(S.identifier, l));
							if (v && v.globallyEnabled) {
								(this.b[o] = !0), this.a.saveMemento();
								const S = $.filter(
									(I) => !(0, h.$7p)(I.identifier, l) && I.globallyEnabled,
								);
								if (S.length) return this.j(v, S);
							}
						});
					}
					j(l, y) {
						const $ = (v) => {
							v &&
								this.f.setEnablement(
									y.map((S) => S.local),
									r.EnablementState.DisabledGlobally,
								);
						};
						this.g.prompt(
							d.Severity.Info,
							(0, E.localize)(
								8179,
								null,
								(0, g.$Qb)(y.map((v) => v.local.manifest.displayName))
									.map((v) => `'${v}'`)
									.join(", "),
							),
							[
								{ label: (0, E.localize)(8180, null), run: () => $(!0) },
								{ label: (0, E.localize)(8181, null), run: () => $(!1) },
							],
						);
					}
				};
				(e.$PGc = f),
					(e.$PGc = f =
						Ne(
							[
								j(0, C.$Li),
								j(1, r.$IQb),
								j(2, d.$4N),
								j(3, c.$lq),
								j(4, u.$n6),
							],
							f,
						));
				function b(s) {
					if (s.local.manifest.extensionPack) return !1;
					const l = s.local.manifest.keywords;
					return l ? l.indexOf("notebook-keymap") !== -1 : !1;
				}
			},
		),
		define(
			de[3434],
			he([
				1, 0, 3, 55, 30, 253, 87, 10, 4, 25, 53, 15, 19, 12, 52, 57, 78, 62, 58,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XWc = e.$WWc = void 0);
				let s = class extends t.$1c {
					static {
						b = this;
					}
					static {
						this.a = [
							E.TitleBarSetting.TITLE_BAR_STYLE,
							"window.nativeTabs",
							"window.nativeFullScreen",
							"window.clickThroughInactive",
							"window.experimentalControlOverlay",
							"update.mode",
							"editor.accessibilitySupport",
							"security.workspace.trust.enabled",
							f.$LW,
							"workbench.enableExperiments",
							"_extensionsGallery.enablePPE",
							"security.restrictUNCAccess",
							"accessibility.verbosity.debug",
						];
					}
					constructor(S, I, T, P) {
						super(),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							(this.C = P),
							(this.b = new l("string")),
							(this.c = new l("boolean")),
							(this.f = new l("boolean")),
							(this.g = new l("boolean")),
							(this.h = new l("boolean")),
							(this.j = new l("string")),
							(this.n = new l("boolean")),
							(this.q = new l("string")),
							(this.r = new l("boolean")),
							(this.s = new l("boolean")),
							(this.t = new l("boolean")),
							(this.u = new l("boolean")),
							this.F(void 0),
							this.D(this.y.onDidChangeConfiguration((k) => this.F(k)));
					}
					F(S) {
						if (S && !b.a.some((k) => S.affectsConfiguration(k))) return;
						let I = !1;
						function T(k) {
							I = I || k;
						}
						const P = this.y.getValue();
						c.$p &&
							(T(
								(P.window.titleBarStyle === E.TitlebarStyle.NATIVE ||
									P.window.titleBarStyle === E.TitlebarStyle.CUSTOM) &&
									this.b.handleChange(P.window?.titleBarStyle),
							),
							T(c.$m && this.c.handleChange(P.window?.nativeTabs)),
							T(c.$m && this.f.handleChange(P.window?.nativeFullScreen)),
							T(c.$m && this.g.handleChange(P.window?.clickThroughInactive)),
							T(
								c.$n &&
									this.h.handleChange(P.window?.experimentalControlOverlay),
							),
							T(this.j.handleChange(P.update?.mode)),
							c.$n &&
								typeof P.editor?.accessibilitySupport == "string" &&
								P.editor.accessibilitySupport !== this.m &&
								((this.m = P.editor.accessibilitySupport),
								this.m === "on" && (I = !0)),
							T(this.n.handleChange(P?.security?.workspace?.trust?.enabled)),
							T(this.t.handleChange(P?.security?.restrictUNCAccess)),
							T(this.u.handleChange(P?.accessibility?.verbosity?.debug))),
							T(this.r.handleChange(P.workbench?.enableExperiments)),
							T(this.q.handleChange(P.workbench?.activityBar?.orientation)),
							T(
								this.z.quality !== "stable" &&
									this.s.handleChange(P._extensionsGallery?.enablePPE),
							),
							I &&
								S &&
								S.source !== d.ConfigurationTarget.DEFAULT &&
								this.G(
									c.$p
										? (0, m.localize)(8718, null)
										: (0, m.localize)(8719, null),
									c.$p
										? (0, m.localize)(8720, null, this.z.nameLong)
										: (0, m.localize)(8721, null, this.z.nameLong),
									c.$p
										? (0, m.localize)(8722, null)
										: (0, m.localize)(8723, null),
									() => this.w.restart(),
								);
					}
					async G(S, I, T, P) {
						if (this.w.hasFocus) {
							const { confirmed: k } = await this.C.confirm({
								message: S,
								detail: I,
								primaryButton: T,
							});
							k && P();
						}
					}
				};
				(e.$WWc = s),
					(e.$WWc =
						s =
						b =
							Ne([j(0, C.$asb), j(1, d.$gj), j(2, o.$Bk), j(3, g.$GO)], s));
				class l {
					static create(S) {
						return new l(S);
					}
					constructor(S) {
						(this.a = S), (this.b = void 0);
					}
					handleChange(S) {
						return typeof S === this.a && S !== this.b
							? ((this.b = S), !0)
							: !1;
					}
				}
				let y = class extends t.$1c {
					constructor(S, I, T, P) {
						super(),
							(this.f = S),
							(this.b = this.D(
								new a.$Yh(async () => {
									P.extensionTestsLocationURI ||
										(P.remoteAuthority
											? T.reload()
											: c.$p &&
												(await I.stopExtensionHosts(
													(0, m.localize)(8724, null),
												)) &&
												I.startExtensionHosts());
								}, 10),
							)),
							this.f.getCompleteWorkspace().then((k) => {
								(this.a = k.folders.length > 0 ? k.folders[0].uri : void 0),
									this.g(),
									this.D(
										this.f.onDidChangeWorkbenchState(() =>
											setTimeout(() => this.g()),
										),
									);
							}),
							this.D(
								(0, t.$Yc)(() => {
									this.c?.dispose();
								}),
							);
					}
					g() {
						if (this.f.getWorkbenchState() === r.WorkbenchState.WORKSPACE) {
							const S = this.f.getWorkspace();
							(this.a = S.folders.length > 0 ? S.folders[0].uri : void 0),
								this.c ||
									(this.c = this.f.onDidChangeWorkspaceFolders(() => this.h()));
						} else (0, t.$Vc)(this.c), (this.c = void 0);
					}
					h() {
						const S = this.f.getWorkspace(),
							I = S.folders.length > 0 ? S.folders[0].uri : void 0;
						(0, h.$gh)(this.a, I) || ((this.a = I), this.b.schedule());
					}
				};
				(e.$XWc = y),
					(e.$XWc = y =
						Ne([j(0, r.$Vi), j(1, u.$q2), j(2, C.$asb), j(3, p.$r8)], y));
				const $ = w.$Io.as(i.Extensions.Workbench);
				$.registerWorkbenchContribution(s, n.LifecyclePhase.Restored),
					$.registerWorkbenchContribution(y, n.LifecyclePhase.Restored);
			},
		),
		define(
			de[3435],
			he([
				1, 0, 139, 7, 97, 6, 3, 51, 35, 548, 123, 96, 78, 66, 10, 240, 28, 1756,
				75, 52, 253,
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
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$A6c = void 0),
					(i = mt(i)),
					(u = mt(u)),
					(g = mt(g));
				let y = class {
					static {
						l = this;
					}
					static {
						this.ID = "workbench.contrib.partsSplash";
					}
					static {
						this.a = "monaco-parts-splash";
					}
					constructor(v, S, I, T, P, k, L) {
						(this.d = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.i = P),
							(this.b = new C.$Zc()),
							E.Event.once(S.onDidLayoutMainContainer)(
								() => {
									this.l(), g.mark("code/didRemovePartsSplash");
								},
								void 0,
								this.b,
							);
						const D = this.b.add(new C.$2c()),
							M = () => {
								D.value = i.$egb(f.$Bfb, () => this.j(), 2500);
							};
						L.when(b.LifecyclePhase.Restored).then(() => {
							E.Event.any(
								E.Event.filter(t.$Nfb, (N) => N === f.$Bfb.vscodeWindowId),
								k.mainPart.onDidLayout,
								v.onDidColorThemeChange,
							)(M, void 0, this.b),
								M();
						}),
							T.onDidChangeConfiguration(
								(N) => {
									N.affectsConfiguration(s.TitleBarSetting.TITLE_BAR_STYLE) &&
										((this.c = !0), this.j());
								},
								this,
								this.b,
							);
					}
					dispose() {
						this.b.dispose();
					}
					j() {
						const v = this.d.getColorTheme();
						this.i.saveWindowSplash({
							zoomLevel: this.h.getValue("window.zoomLevel"),
							baseTheme: (0, m.$mP)(v.type),
							colorInfo: {
								foreground: v.getColor(d.$IP)?.toString(),
								background: w.$UL.Format.CSS.formatHex(
									v.getColor(d.$8P) || u.$LEb(v),
								),
								editorBackground: v.getColor(d.$8P)?.toString(),
								titleBarBackground: v.getColor(u.$LGb)?.toString(),
								activityBarBackground: v.getColor(u.$7Fb)?.toString(),
								sideBarBackground: v.getColor(u.$wGb)?.toString(),
								statusBarBackground: v.getColor(u.$KFb)?.toString(),
								statusBarNoFolderBackground: v.getColor(u.$LFb)?.toString(),
								windowBorder:
									v.getColor(u.$$Gb)?.toString() ??
									v.getColor(u.$_Gb)?.toString(),
							},
							layoutInfo: this.k()
								? {
										sideBarSide:
											this.f.getSideBarPosition() === a.Position.RIGHT
												? "right"
												: "left",
										editorPartMinWidth: r.$DEb.width,
										titleBarHeight: this.f.isVisible(
											a.Parts.TITLEBAR_PART,
											f.$Bfb,
										)
											? i.$zgb(
													(0, p.$wg)(
														this.f.getContainer(f.$Bfb, a.Parts.TITLEBAR_PART),
													),
												)
											: 0,
										activityBarWidth:
											this.f.activityBarDirection === "vertical" &&
											this.f.isVisible(a.Parts.ACTIVITYBAR_PART)
												? i.$vgb(
														(0, p.$wg)(
															this.f.getContainer(
																f.$Bfb,
																a.Parts.ACTIVITYBAR_PART,
															),
														),
													)
												: 0,
										sideBarWidth: this.f.isVisible(a.Parts.SIDEBAR_PART)
											? i.$vgb(
													(0, p.$wg)(
														this.f.getContainer(f.$Bfb, a.Parts.SIDEBAR_PART),
													),
												)
											: 0,
										statusBarHeight: this.f.isVisible(
											a.Parts.STATUSBAR_PART,
											f.$Bfb,
										)
											? i.$zgb(
													(0, p.$wg)(
														this.f.getContainer(f.$Bfb, a.Parts.STATUSBAR_PART),
													),
												)
											: 0,
										windowBorder: this.f.hasMainWindowBorder(),
										windowBorderRadius: this.f.getMainWindowBorderRadius(),
									}
								: void 0,
						});
					}
					k() {
						return (
							!(0, t.$Mfb)(f.$Bfb) && !this.g.isExtensionDevelopment && !this.c
						);
					}
					l() {
						const v = f.$Bfb.document.getElementById(l.a);
						v && (v.style.display = "none"),
							f.$Bfb.document.head
								.getElementsByClassName("initialShellColors")[0]
								?.remove();
					}
				};
				(e.$A6c = y),
					(e.$A6c =
						y =
						l =
							Ne(
								[
									j(0, m.$iP),
									j(1, a.$mEb),
									j(2, h.$r8),
									j(3, n.$gj),
									j(4, o.$z6c),
									j(5, c.$EY),
									j(6, b.$n6),
								],
								y,
							));
			},
		),
		define(
			de[3436],
			he([1, 0, 55, 1756, 110, 20, 3435]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let d = class {
					constructor(r) {
						this.saveWindowSplash = r.saveWindowSplash.bind(r);
					}
				};
				(d = Ne([j(0, w.$y7c)], d)),
					(0, E.$lK)(i.$z6c, d, E.InstantiationType.Delayed),
					(0, t.$s6)(C.$A6c.ID, C.$A6c, t.WorkbenchPhase.BlockStartup);
			},
		),
		define(
			de[3437],
			he([1, 0, 4, 12, 55, 30, 32, 21, 62, 52, 40, 41, 9, 344]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				const n = 0.15,
					g = "nps/sessionCount",
					p = "nps/lastSessionDate",
					o = "nps/skipVersion",
					f = "nps/isCandidate";
				let b = class {
					constructor(l, y, $, v, S) {
						if (!S.npsSurveyUrl || l.get(o, d.StorageScope.APPLICATION, ""))
							return;
						const T = new Date().toDateString(),
							P = l.get(
								p,
								d.StorageScope.APPLICATION,
								new Date(0).toDateString(),
							);
						if (T === P) return;
						const k = (l.getNumber(g, d.StorageScope.APPLICATION, 0) || 0) + 1;
						if (
							(l.store(p, T, d.StorageScope.APPLICATION, d.StorageTarget.USER),
							l.store(g, k, d.StorageScope.APPLICATION, d.StorageTarget.USER),
							k < 9)
						)
							return;
						const L =
							l.getBoolean(f, d.StorageScope.APPLICATION, !1) ||
							Math.random() < n;
						if (
							(l.store(f, L, d.StorageScope.APPLICATION, d.StorageTarget.USER),
							!L)
						) {
							l.store(
								o,
								S.version,
								d.StorageScope.APPLICATION,
								d.StorageTarget.USER,
							);
							return;
						}
						y.prompt(
							u.Severity.Info,
							t.localize(9524, null),
							[
								{
									label: t.localize(9525, null),
									run: () => {
										v.open(
											h.URI.parse(
												`${S.npsSurveyUrl}?o=${encodeURIComponent(c.$ic)}&v=${encodeURIComponent(S.version)}&m=${encodeURIComponent($.machineId)}`,
											),
										),
											l.store(
												f,
												!1,
												d.StorageScope.APPLICATION,
												d.StorageTarget.USER,
											),
											l.store(
												o,
												S.version,
												d.StorageScope.APPLICATION,
												d.StorageTarget.USER,
											);
									},
								},
								{
									label: t.localize(9526, null),
									run: () =>
										l.store(
											g,
											k - 3,
											d.StorageScope.APPLICATION,
											d.StorageTarget.USER,
										),
								},
								{
									label: t.localize(9527, null),
									run: () => {
										l.store(
											f,
											!1,
											d.StorageScope.APPLICATION,
											d.StorageTarget.USER,
										),
											l.store(
												o,
												S.version,
												d.StorageScope.APPLICATION,
												d.StorageTarget.USER,
											);
									},
								},
							],
							{ sticky: !0, priority: u.NotificationPriority.URGENT },
						);
					}
				};
				(b = Ne(
					[j(0, d.$lq), j(1, u.$4N), j(2, C.$km), j(3, a.$7rb), j(4, m.$Bk)],
					b,
				)),
					i.$z === "en" &&
						E.$Io
							.as(w.Extensions.Workbench)
							.registerWorkbenchContribution(b, r.LifecyclePhase.Restored);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[833],
		he([
			1, 0, 4, 111, 3, 44, 35, 26, 223, 107, 514, 5, 117, 52, 8, 10, 237, 57, 6,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
			"use strict";
			var b;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Unc = void 0),
				(i = xi(i));
			let s = class extends m.$LO {
				static {
					b = this;
				}
				static {
					this.ID = "workbench.editors.terminal";
				}
				setGroup(y) {
					(this.q = y),
						y?.scopedContextKeyService &&
							this.s?.setParentContextKeyService(y.scopedContextKeyService);
				}
				get group() {
					return this.q;
				}
				get typeId() {
					return b.ID;
				}
				get editorId() {
					return r.$pIb;
				}
				get capabilities() {
					return (
						E.EditorInputCapabilities.Readonly |
						E.EditorInputCapabilities.Singleton |
						E.EditorInputCapabilities.CanDropIntoEditor |
						E.EditorInputCapabilities.ForceDescription
					);
				}
				setTerminalInstance(y) {
					if (this.s)
						throw new Error("cannot set instance that has already been set");
					(this.s = y), this.G();
				}
				copy() {
					const y = this.u.createInstance(
						this.m || {},
						h.TerminalLocation.Editor,
					);
					return (
						y.focusWhenReady(),
						(this.m = void 0),
						this.w.createInstance(b, y.resource, y)
					);
				}
				setCopyLaunchConfig(y) {
					this.m = y;
				}
				get terminalInstance() {
					return this.a ? void 0 : this.s;
				}
				showConfirm() {
					if (this.h) return !1;
					const y = this.y.getValue(h.TerminalSettingId.ConfirmOnKill);
					return (
						((y === "editor" || y === "always") && this.s?.hasChildProcesses) ||
						!1
					);
				}
				async confirm(y) {
					const { confirmed: $ } = await this.F.confirm({
						type: i.default.Warning,
						message: (0, t.localize)(10052, null),
						primaryButton: (0, t.localize)(10053, null),
						detail:
							y.length > 1
								? y
										.map((v) => v.editor.getName())
										.join(`
`) +
									`

` +
									(0, t.localize)(10054, null)
								: (0, t.localize)(10055, null),
					});
					return $ ? o.ConfirmResult.DONT_SAVE : o.ConfirmResult.CANCEL;
				}
				async revert() {
					this.h = !0;
				}
				constructor(y, $, v, S, I, T, P, k, L) {
					super(),
						(this.resource = y),
						(this.s = $),
						(this.t = v),
						(this.u = S),
						(this.w = I),
						(this.y = T),
						(this.z = P),
						(this.C = k),
						(this.F = L),
						(this.closeHandler = this),
						(this.a = !1),
						(this.c = !1),
						(this.h = !1),
						(this.r = this.D(new f.$re())),
						(this.onDidRequestAttach = this.r.event),
						(this.n = p.TerminalContextKeys.editorFocus.bindTo(k)),
						$ && this.G();
				}
				G() {
					const y = this.s;
					if (!y) return;
					const $ = y.onDidFocus(() => this.n.set(!0)),
						v = y.onDidBlur(() => this.n.reset());
					this.D(
						(0, w.$Yc)(() => {
							!this.a && !this.c && y.dispose(h.TerminalExitReason.User),
								(0, w.$Vc)([$, v]);
						}),
					);
					const S = [
						y.onExit((I) => {
							y.waitOnExit || this.dispose();
						}),
						y.onDisposed(() => this.dispose()),
						y.onTitleChanged(() => this.f.fire()),
						y.onIconChanged(() => this.f.fire()),
						$,
						v,
						y.statusList.onDidChangePrimaryStatus(() => this.f.fire()),
					];
					this.z.onWillShutdown((I) => {
						(this.c = !0),
							(0, w.$Vc)(S),
							this.y.getValue(h.TerminalSettingId.EnablePersistentSessions) &&
							I.reason === c.ShutdownReason.RELOAD
								? y.detachProcessAndDispose(h.TerminalExitReason.Shutdown)
								: y.dispose(h.TerminalExitReason.Shutdown);
					});
				}
				getName() {
					return this.s?.title || this.resource.fragment;
				}
				getIcon() {
					if (!(!this.s || !d.ThemeIcon.isThemeIcon(this.s.icon)))
						return this.s.icon;
				}
				getLabelExtraClasses() {
					if (!this.s) return [];
					const y = ["terminal-tab", "predefined-file-icon"],
						$ = (0, u.$Onc)(this.s);
					$ && y.push($);
					const v = (0, u.$Snc)(this.s, this.t.getColorTheme().type);
					return v && y.push(...v), y;
				}
				detachInstance() {
					this.c ||
						(this.s?.detachFromElement(),
						this.s?.setParentContextKeyService(this.C),
						(this.a = !0));
				}
				getDescription() {
					return this.s?.description;
				}
				toUntyped() {
					return {
						resource: this.resource,
						options: { override: r.$pIb, pinned: !0, forceReload: !0 },
					};
				}
			};
			(e.$Unc = s),
				(e.$Unc =
					s =
					b =
						Ne(
							[
								j(2, C.$iP),
								j(3, r.$mIb),
								j(4, a.$Li),
								j(5, g.$gj),
								j(6, c.$n6),
								j(7, n.$6j),
								j(8, o.$GO),
							],
							s,
						));
		},
	),
		define(
			de[3438],
			he([1, 0, 6, 3, 9, 8, 116, 5, 117, 107, 833, 690, 237, 66, 18, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XUc = void 0);
				let p = class extends i.$1c {
					constructor(f, b, s, l, y, $) {
						super(),
							(this.s = f),
							(this.t = b),
							(this.u = s),
							(this.w = l),
							(this.instances = []),
							(this.a = -1),
							(this.b = !1),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = this.D(new t.$re())),
							(this.onDidDisposeInstance = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidFocusInstance = this.m.event),
							(this.n = this.D(new t.$re())),
							(this.onDidChangeInstanceCapability = this.n.event),
							(this.q = this.D(new t.$re())),
							(this.onDidChangeActiveInstance = this.q.event),
							(this.r = this.D(new t.$re())),
							(this.onDidChangeInstances = this.r.event),
							(this.f = h.TerminalContextKeys.terminalEditorActive.bindTo($)),
							this.D(
								(0, i.$Yc)(() => {
									for (const v of this.h.values()) (0, i.$Vc)(v);
								}),
							),
							this.D(y.onWillShutdown(() => (this.b = !0))),
							this.D(
								this.s.onDidActiveEditorChange(() => {
									const v = this.s.activeEditor,
										S = v instanceof u.$Unc ? v?.terminalInstance : void 0,
										I = !!S && v instanceof u.$Unc;
									if ((this.f.set(I), I))
										v?.setGroup(this.s.activeEditorPane?.group),
											this.setActiveInstance(S);
									else for (const T of this.instances) T.resetFocusContextKey();
								}),
							),
							this.D(
								this.s.onDidVisibleEditorsChange(() => {
									const v = this.instances.map((T) => T.instanceId),
										I = this.y().find((T) => {
											const P =
												T instanceof u.$Unc
													? T.terminalInstance?.instanceId
													: void 0;
											return P === void 0 ? !1 : !v.includes(P);
										});
									I instanceof u.$Unc &&
										I.terminalInstance &&
										(this.g.set(I.terminalInstance.resource.path, I),
										this.instances.push(I.terminalInstance));
								}),
							),
							this.D(
								this.s.onDidCloseEditor((v) => {
									const S =
										v.editor instanceof u.$Unc
											? v.editor.terminalInstance
											: void 0;
									if (S) {
										const I = this.instances.findIndex((T) => T === S);
										if (I !== -1) {
											const T = this.instances[I] === this.activeInstance;
											this.C(S), T && this.setActiveInstance(void 0);
										}
									}
								}),
							);
					}
					y() {
						return this.s.visibleEditors.filter(
							(f) => f instanceof u.$Unc && f.terminalInstance?.instanceId,
						);
					}
					get activeInstance() {
						if (!(this.instances.length === 0 || this.a === -1))
							return this.instances[this.a];
					}
					setActiveInstance(f) {
						(this.a = f ? this.instances.findIndex((b) => b === f) : -1),
							this.q.fire(this.activeInstance);
					}
					async focusInstance(f) {
						return f.focusWhenReady(!0);
					}
					async focusActiveInstance() {
						return this.activeInstance?.focusWhenReady(!0);
					}
					async openEditor(f, b) {
						const s = this.resolveResource(f);
						s &&
							(await this.c?.promise,
							(this.c = {
								instanceId: f.instanceId,
								promise: this.s.openEditor(
									{
										resource: s,
										description: f.description || f.shellLaunchConfig.type,
										options: {
											pinned: !0,
											forceReload: !0,
											preserveFocus: b?.preserveFocus,
										},
									},
									b?.viewColumn ?? n.$JY,
								),
							}),
							await this.c?.promise,
							(this.c = void 0));
					}
					resolveResource(f) {
						const b = f.resource,
							s = b.path,
							l = this.g.get(s);
						if (l) return l.resource;
						f.target = m.TerminalLocation.Editor;
						const y = this.w.createInstance(u.$Unc, b, f);
						return this.z(s, y, f), y.resource;
					}
					getInputFromResource(f) {
						const b = this.g.get(f.path);
						if (!b)
							throw new Error(`Could not get input from resource: ${f.path}`);
						return b;
					}
					z(f, b, s) {
						this.g.set(f, b),
							this.h.set(f, [
								s.onDidFocus(this.m.fire, this.m),
								s.onDisposed(this.j.fire, this.j),
								s.capabilities.onDidAddCapabilityType(() => this.n.fire(s)),
								s.capabilities.onDidRemoveCapabilityType(() => this.n.fire(s)),
							]),
							this.instances.push(s),
							this.r.fire();
					}
					C(f) {
						const b = f.resource.path;
						this.g.delete(b);
						const s = this.instances.findIndex((y) => y === f);
						s !== -1 && this.instances.splice(s, 1);
						const l = this.h.get(b);
						this.h.delete(b), l && (0, i.$Vc)(l), this.r.fire();
					}
					getInstanceFromResource(f) {
						return (0, a.$WUc)(this.instances, f);
					}
					splitInstance(f, b = {}) {
						if (f.target === m.TerminalLocation.Editor) {
							const y = this.g.get(f.resource.path)?.group;
							y && this.t.activateGroup(y);
						}
						const s = this.u.createInstance(b, m.TerminalLocation.Editor),
							l = this.resolveResource(s);
						return (
							l &&
								this.s.openEditor(
									{
										resource: w.URI.revive(l),
										description: s.description,
										options: { pinned: !0, forceReload: !0 },
									},
									n.$KY,
								),
							s
						);
					}
					reviveInput(f) {
						if ("pid" in f) {
							const b = { ...f, findRevivedId: !0 },
								s = this.u.createInstance(
									{ attachPersistentProcess: b },
									m.TerminalLocation.Editor,
								),
								l = this.w.createInstance(u.$Unc, s.resource, s);
							return this.z(s.resource.path, l, s), l;
						} else
							throw new Error(`Could not revive terminal editor input, ${f}`);
					}
					detachInstance(f) {
						const b = f.resource.path,
							s = this.g.get(b);
						s?.detachInstance(), this.C(f), this.b || s?.dispose();
					}
					async revealActiveEditor(f) {
						const b = this.activeInstance;
						if (!b || this.c?.instanceId === b.instanceId) return;
						const s = this.g.get(b.resource.path);
						this.s.openEditor(s, {
							pinned: !0,
							forceReload: !0,
							preserveFocus: f,
							activation: C.EditorActivation.PRESERVE,
						});
					}
				};
				(e.$XUc = p),
					(e.$XUc = p =
						Ne(
							[
								j(0, n.$IY),
								j(1, c.$EY),
								j(2, r.$mIb),
								j(3, d.$Li),
								j(4, g.$n6),
								j(5, E.$6j),
							],
							p,
						));
			},
		),
		define(
			de[3439],
			he([
				1, 0, 7, 50, 6, 3, 26, 4, 184, 121, 31, 10, 49, 5, 40, 41, 63, 189, 117,
				35, 689, 1761, 512, 52,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Hb = void 0),
					(t = mt(t));
				let v = class extends E.$1c {
					constructor(I, T, P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.q = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.z = M),
							(this.C = A),
							(this.F = O),
							(this.G = B),
							(this.b = new Map()),
							(this.f = new Map()),
							(this.n = this.D(new w.$re())),
							(this.onDidRequestRunCommand = this.n.event),
							this.D((0, E.$Yc)(() => this.P())),
							this.D(
								this.u.onDidChangeConfiguration((U) => {
									U.affectsConfiguration(f.TerminalSettingId.FontSize) ||
									U.affectsConfiguration(f.TerminalSettingId.LineHeight)
										? this.refreshLayouts()
										: U.affectsConfiguration("workbench.colorCustomizations")
											? this.O(!0)
											: U.affectsConfiguration(
													f.TerminalSettingId
														.ShellIntegrationDecorationsEnabled,
												) &&
												(this.H(o.TerminalCapability.CommandDetection),
												this.J());
								}),
							),
							this.D(this.w.onDidColorThemeChange(() => this.O(!0))),
							this.J(),
							this.D(this.q.onDidAddCapabilityType((U) => this.I(U))),
							this.D(this.q.onDidRemoveCapabilityType((U) => this.H(U))),
							this.D(N.onWillShutdown(() => this.L())),
							(this.m = this.D(R.createInstance(l.$8Hb)));
					}
					H(I) {
						const T = this.b.get(I);
						T && (0, E.$Vc)(T), this.b.delete(I);
					}
					I(I) {
						const T = new E.$Zc(),
							P = this.q.get(I);
						if (!(!P || this.b.has(I))) {
							switch (P.type) {
								case o.TerminalCapability.BufferMarkDetection:
									T.add(P.onMarkAdded((k) => this.registerMarkDecoration(k)));
									break;
								case o.TerminalCapability.CommandDetection: {
									const k = this.S(P);
									for (const L of k) T.add(L);
									break;
								}
							}
							this.b.set(I, T);
						}
					}
					registerMarkDecoration(I) {
						if (!(!this.a || (!this.h && !this.j)) && !I.hidden)
							return this.registerCommandDecoration(void 0, void 0, I);
					}
					J() {
						const I = this.u.getValue(
							f.TerminalSettingId.ShellIntegrationDecorationsEnabled,
						);
						(this.h = I === "both" || I === "gutter"),
							(this.j = I === "both" || I === "overviewRuler"),
							this.L(),
							(this.h || this.j) && (this.R(), this.M());
						const T = this.q.get(
							o.TerminalCapability.CommandDetection,
						)?.executingCommandObject;
						T && this.registerCommandDecoration(T, !0);
					}
					L() {
						this.g?.dispose();
						for (const I of this.f.values())
							I.decoration.dispose(), (0, E.$Vc)(I.disposables);
					}
					M() {
						const I = this.a?.element?.querySelectorAll(
							l.DecorationSelector.CommandDecoration,
						);
						if (I) for (const T of I) this.N(T);
					}
					N(I) {
						this.h
							? I.classList.remove(l.DecorationSelector.Hide)
							: I.classList.add(l.DecorationSelector.Hide);
					}
					refreshLayouts() {
						(0, l.$9Hb)(this.u, this.g?.element);
						for (const I of this.f)
							(0, l.$9Hb)(this.u, I[1].decoration.element);
					}
					O(I) {
						if (I)
							for (const T of this.f.values()) {
								const P = this.ab(T)?.toString() ?? "";
								T.decoration.options?.overviewRulerOptions
									? (T.decoration.options.overviewRulerOptions.color = P)
									: T.decoration.options &&
										(T.decoration.options.overviewRulerOptions = { color: P });
							}
						this.W(this.g?.element);
						for (const T of this.f.values())
							this.W(T.decoration.element, T.exitCode, T.markProperties);
					}
					P() {
						this.m.dispose();
						for (const I of this.b.values()) (0, E.$Vc)(I);
						this.clearDecorations();
					}
					Q() {
						this.g?.dispose(), (this.g = void 0);
					}
					clearDecorations() {
						this.g?.marker.dispose(), this.Q(), this.L(), this.f.clear();
					}
					R() {
						if (this.q.has(o.TerminalCapability.CommandDetection)) {
							const I = this.q.get(o.TerminalCapability.CommandDetection),
								T = this.S(I),
								P = new E.$Zc();
							for (const k of T) P.add(k);
							this.b.set(o.TerminalCapability.CommandDetection, P);
						}
					}
					S(I) {
						if (this.b.has(o.TerminalCapability.CommandDetection)) {
							const P = this.b.get(o.TerminalCapability.CommandDetection);
							(0, E.$Vc)(P), this.b.delete(I.type);
						}
						const T = [];
						I.executingCommandObject?.marker &&
							this.registerCommandDecoration(I.executingCommandObject, !0),
							T.push(
								I.onCommandStarted((P) =>
									this.registerCommandDecoration(P, !0),
								),
							);
						for (const P of I.commands) this.registerCommandDecoration(P);
						return (
							T.push(
								I.onCommandFinished((P) => {
									this.registerCommandDecoration(P),
										P.exitCode
											? this.F.playSignal(m.$Twb.terminalCommandFailed)
											: this.F.playSignal(m.$Twb.terminalCommandSucceeded);
								}),
							),
							T.push(
								I.onCommandInvalidated((P) => {
									for (const k of P) {
										const L = k.marker?.id;
										if (L) {
											const D = this.f.get(L);
											D && (D.decoration.dispose(), (0, E.$Vc)(D.disposables));
										}
									}
								}),
							),
							T.push(
								I.onCurrentCommandInvalidated((P) => {
									P.reason === o.CommandInvalidationReason.NoProblemsReported
										? Array.from(this.f.entries())[
												this.f.size - 1
											]?.[1].decoration.dispose()
										: P.reason === o.CommandInvalidationReason.Windows &&
											this.Q();
								}),
							),
							T
						);
					}
					activate(I) {
						(this.a = I), this.R();
					}
					registerCommandDecoration(I, T, P) {
						if (!this.a || (T && !I) || (!this.h && !this.j)) return;
						const k = I?.marker || P?.marker;
						if (!k)
							throw new Error(
								`cannot add a decoration for a command ${JSON.stringify(I)} with no marker`,
							);
						this.Q();
						const L = this.ab(I)?.toString() ?? "",
							D = this.a.registerDecoration({
								marker: k,
								overviewRulerOptions: this.j
									? T
										? { color: L, position: "left" }
										: { color: L, position: I?.exitCode ? "right" : "left" }
									: void 0,
							});
						if (D)
							return (
								T && (this.g = D),
								D.onRender((M) => {
									M.classList.contains(l.DecorationSelector.OverviewRuler) ||
										(this.f.get(D.marker.id) ||
											(D.onDispose(() => this.f.delete(D.marker.id)),
											this.f.set(D.marker.id, {
												decoration: D,
												disposables: this.U(M, I, P),
												exitCode: I?.exitCode,
												markProperties: I?.markProperties,
											})),
										(!M.classList.contains(l.DecorationSelector.Codicon) ||
											I?.marker?.line === 0) &&
											((0, l.$9Hb)(this.u, M),
											this.W(M, I?.exitCode, I?.markProperties || P)));
								}),
								D
							);
					}
					U(I, T, P) {
						return T?.exitCode === void 0 && !T?.markProperties
							? []
							: T?.markProperties || P
								? [this.m.createHover(I, T || P, P?.hoverMessage)]
								: [...this.X(I, T), this.m.createHover(I, T)];
					}
					W(I, T, P) {
						if (I) {
							for (const k of I.classList) I.classList.remove(k);
							I.classList.add(
								l.DecorationSelector.CommandDecoration,
								l.DecorationSelector.Codicon,
								l.DecorationSelector.XtermDecoration,
							),
								P
									? (I.classList.add(
											l.DecorationSelector.DefaultColor,
											...C.ThemeIcon.asClassNameArray(s.$1Hb),
										),
										P.hoverMessage ||
											I.classList.add(l.DecorationSelector.Default))
									: (this.N(I),
										T === void 0
											? (I.classList.add(
													l.DecorationSelector.DefaultColor,
													l.DecorationSelector.Default,
												),
												I.classList.add(
													...C.ThemeIcon.asClassNameArray(s.$2Hb),
												))
											: T
												? (I.classList.add(l.DecorationSelector.ErrorColor),
													I.classList.add(
														...C.ThemeIcon.asClassNameArray(s.$3Hb),
													))
												: I.classList.add(
														...C.ThemeIcon.asClassNameArray(s.$4Hb),
													));
						}
					}
					X(I, T) {
						return [
							t.$0fb(I, t.$$gb.MOUSE_DOWN, async (P) => {
								P.stopImmediatePropagation();
							}),
							t.$0fb(I, t.$$gb.CLICK, async (P) => {
								P.stopImmediatePropagation(), this.m.hideHover();
								const k = await this.Z(T);
								this.t.showContextMenu({
									getAnchor: () => I,
									getActions: () => k,
								});
							}),
							t.$0fb(I, t.$$gb.CONTEXT_MENU, async (P) => {
								P.stopImmediatePropagation(), this.m.hideHover();
								const k = this.Y();
								this.t.showContextMenu({
									getAnchor: () => I,
									getActions: () => k,
								});
							}),
						];
					}
					Y() {
						const I = (0, d.localize)(10173, null);
						return [
							{
								class: void 0,
								tooltip: I,
								id: "terminal.toggleVisibility",
								label: I,
								enabled: !0,
								run: async () => {
									this.$();
								},
							},
						];
					}
					async Z(I) {
						const T = [];
						if (I.command !== "") {
							const D = (0, d.localize)(10174, null);
							T.push({
								class: void 0,
								tooltip: D,
								id: "terminal.rerunCommand",
								label: D,
								enabled: !0,
								run: async () => {
									I.command !== "" &&
										((!I.isTrusted &&
											!(await new Promise((A) => {
												this.G.prompt(
													n.Severity.Info,
													(0, d.localize)(10175, null, I.command),
													[
														{
															label: (0, d.localize)(10176, null),
															run: () => A(!0),
														},
														{
															label: (0, d.localize)(10177, null),
															run: () => A(!1),
														},
													],
												);
											}))) ||
											this.n.fire({ command: I }));
								},
							}),
								T.push(new i.$tj());
							const M = (0, d.localize)(10178, null);
							T.push({
								class: void 0,
								tooltip: M,
								id: "terminal.copyCommand",
								label: M,
								enabled: !0,
								run: () => this.s.writeText(I.command),
							});
						}
						if (I.hasOutput()) {
							const D = (0, d.localize)(10179, null);
							T.push({
								class: void 0,
								tooltip: D,
								id: "terminal.copyCommandAndOutput",
								label: D,
								enabled: !0,
								run: () => {
									const A = I.getOutput();
									typeof A == "string" &&
										this.s.writeText(
											`${
												I.command !== ""
													? I.command +
														`
`
													: ""
											}${A}`,
										);
								},
							});
							const M = (0, d.localize)(10180, null);
							T.push({
								class: void 0,
								tooltip: M,
								id: "terminal.copyOutput",
								label: M,
								enabled: !0,
								run: () => {
									const A = I.getOutput();
									typeof A == "string" && this.s.writeText(A);
								},
							});
							const N = (0, d.localize)(10181, null);
							T.push({
								class: void 0,
								tooltip: N,
								id: "terminal.copyOutputAsHtml",
								label: N,
								enabled: !0,
								run: () => this.n.fire({ command: I, copyAsHtml: !0 }),
							});
						}
						T.length > 0 && T.push(new i.$tj());
						const P = (0, d.localize)(10182, null);
						T.push({
							class: void 0,
							tooltip: P,
							id: "workbench.action.terminal.runRecentCommand",
							label: P,
							enabled: !0,
							run: () =>
								this.C.executeCommand(
									"workbench.action.terminal.runRecentCommand",
								),
						});
						const k = (0, d.localize)(10183, null);
						T.push({
							class: void 0,
							tooltip: P,
							id: "workbench.action.terminal.goToRecentDirectory",
							label: k,
							enabled: !0,
							run: () =>
								this.C.executeCommand(
									"workbench.action.terminal.goToRecentDirectory",
								),
						}),
							T.push(new i.$tj());
						const L = (0, d.localize)(10184, null);
						return (
							T.push({
								class: void 0,
								tooltip: L,
								id: "terminal.learnShellIntegration",
								label: L,
								enabled: !0,
								run: () =>
									this.y.open(
										"https://code.visualstudio.com/docs/terminal/shell-integration",
									),
							}),
							T
						);
					}
					$() {
						const I = this.D(this.z.createQuickPick());
						(I.hideInput = !0),
							(I.hideCheckAll = !0),
							(I.canSelectMany = !0),
							(I.title = (0, d.localize)(10185, null));
						const T = this.u.getValue(
								f.TerminalSettingId.ShellIntegrationDecorationsEnabled,
							),
							P = {
								label: (0, d.localize)(10186, null),
								picked: T !== "never" && T !== "overviewRuler",
							},
							k = {
								label: (0, d.localize)(10187, null),
								picked: T !== "never" && T !== "gutter",
							};
						I.items = [P, k];
						const L = [];
						T !== "never" &&
							(T !== "gutter" && L.push(P), T !== "overviewRuler" && L.push(k)),
							(I.selectedItems = L),
							this.D(
								I.onDidChangeSelection(async (D) => {
									let M = "never";
									D.includes(P)
										? D.includes(k)
											? (M = "both")
											: (M = "gutter")
										: D.includes(k) && (M = "overviewRuler"),
										await this.u.updateValue(
											f.TerminalSettingId.ShellIntegrationDecorationsEnabled,
											M,
										);
								}),
							),
							(I.ok = !1),
							I.show();
					}
					ab(I) {
						let T;
						return (
							I?.exitCode === void 0
								? (T = y.$pHb)
								: (T = I.exitCode ? y.$rHb : y.$qHb),
							this.w.getColorTheme().getColor(T)?.toString()
						);
					}
				};
				(e.$0Hb = v),
					(e.$0Hb = v =
						Ne(
							[
								j(1, r.$Vxb),
								j(2, h.$Xxb),
								j(3, a.$gj),
								j(4, b.$iP),
								j(5, g.$7rb),
								j(6, p.$DJ),
								j(7, $.$n6),
								j(8, u.$ek),
								j(9, c.$Li),
								j(10, m.$Owb),
								j(11, n.$4N),
							],
							v,
						));
			},
		),
		define(
			de[1299],
			he([
				1, 0, 7, 10, 3, 117, 107, 34, 40, 3165, 4, 35, 123, 512, 1202, 5, 3439,
				189, 6, 32, 536, 8, 237, 121, 138, 203, 168, 45, 180, 308, 184, 51,
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
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Hb = void 0),
					(e.$_Hb = H),
					(t = mt(t));
				var N;
				(function (G) {
					G[(G.SmoothScrollDuration = 125)] = "SmoothScrollDuration";
				})(N || (N = {}));
				let A, R, O, B, U, z;
				function F(G, K) {
					let J = K.getLine(G);
					if (!J) return { lineData: void 0, lineIndex: G };
					let W = J.translateToString(!0);
					for (; G > 0 && J.isWrapped && ((J = K.getLine(--G)), !!J); )
						W = J.translateToString(!1) + W;
					return { lineData: W, lineIndex: G };
				}
				let x = class extends w.$1c {
					static {
						M = this;
					}
					*getBufferReverseIteratorFromCursor() {
						let { cursorX: K, cursorY: J } = this.raw.buffer.active;
						J += this.raw.buffer.active.baseY;
						let W = this.raw.buffer.active.getLine(J);
						if (W) {
							let X = W.translateToString(!0).substring(0, K);
							for (
								;
								J > 0 &&
								W.isWrapped &&
								((W = this.raw.buffer.active.getLine(--J)), !!W);
							)
								X = W.translateToString(!1) + X;
							yield X;
						}
						for (let X = J - 1; X >= 0; X--) {
							const { lineData: Y, lineIndex: ie } = F(
								X,
								this.raw.buffer.active,
							);
							Y && ((X = ie), yield Y);
						}
					}
					getBufferLength() {
						return this.raw.buffer.active.length;
					}
					getFirstLine() {
						return this.raw.buffer.active.viewportY;
					}
					getBufferLines(K, J, W = !1) {
						const X = [];
						for (let Y = K; Y < J; Y++) {
							const { lineData: ie } = F(Y, this.raw.buffer.active);
							(ie || !W) && X.push(ie ?? "");
						}
						return X;
					}
					static {
						this.b = void 0;
					}
					static {
						this.c = !1;
					}
					get findResult() {
						return this.G;
					}
					get isStdinDisabled() {
						return !!this.raw.options.disableStdin;
					}
					get isGpuAccelerated() {
						return !!this.s;
					}
					get markTracker() {
						return this.h;
					}
					get shellIntegration() {
						return this.j;
					}
					get textureAtlas() {
						const K = this.s?.textureAtlas;
						if (K) return createImageBitmap(K);
					}
					get isFocused() {
						return this.raw.element ? t.$Lgb(this.raw.element) : !1;
					}
					constructor(
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
					) {
						super(),
							(this.R = X),
							(this.S = Y),
							(this.U = ee),
							(this.W = _),
							(this.X = te),
							(this.Y = Q),
							(this.Z = Z),
							(this.$ = se),
							(this.ab = re),
							(this.bb = le),
							(this.cb = oe),
							(this.db = pe),
							(this.eb = $e),
							(this.g = S.$3hb.INSTANCE.isPhysicalMouseWheel()),
							(this.z = this.D(new w.$Zc())),
							(this.H = this.D(new f.$re())),
							(this.onDidRequestRunCommand = this.H.event),
							(this.I = this.D(new f.$re())),
							(this.onDidRequestFocus = this.I.event),
							(this.J = this.D(new f.$re())),
							(this.onDidRequestSendText = this.J.event),
							(this.L = this.D(new f.$re())),
							(this.onDidRequestFreePort = this.L.event),
							(this.M = this.D(new f.$re())),
							(this.onDidRequestRefreshDimensions = this.M.event),
							(this.N = this.D(new f.$re())),
							(this.onDidChangeFindResults = this.N.event),
							(this.O = this.D(new f.$re())),
							(this.onDidChangeSelection = this.O.event),
							(this.P = this.D(new f.$re())),
							(this.onDidChangeFocus = this.P.event),
							(this.Q = this.D(new f.$re())),
							(this.onDidDispose = this.Q.event);
						const ue = this.ab.getFont(t.$Ogb(), void 0, !0),
							fe = this.ab.config,
							me = this.U.getValue("editor");
						(this.raw = this.D(
							new K({
								allowProposedApi: !0,
								cols: J,
								rows: W,
								documentOverride: ye.mainContainer.ownerDocument,
								altClickMovesCursor:
									fe.altClickMovesCursor && me.multiCursorModifier === "alt",
								scrollback: fe.scrollback,
								theme: this.getXtermTheme(),
								drawBoldTextInBrightColors: fe.drawBoldTextInBrightColors,
								fontFamily: ue.fontFamily,
								fontWeight: fe.fontWeight,
								fontWeightBold: fe.fontWeightBold,
								fontSize: ue.fontSize,
								letterSpacing: ue.letterSpacing,
								lineHeight: ue.lineHeight,
								logLevel: q(this.X.getLevel()),
								logger: this.X,
								minimumContrastRatio: fe.minimumContrastRatio,
								tabStopWidth: fe.tabStopWidth,
								cursorBlink: fe.cursorBlinking,
								cursorStyle: V(fe.cursorStyle),
								cursorInactiveStyle: V(fe.cursorStyleInactive),
								cursorWidth: fe.cursorWidth,
								macOptionIsMeta: fe.macOptionIsMeta,
								macOptionClickForcesSelection: fe.macOptionClickForcesSelection,
								rightClickSelectsWord: fe.rightClickBehavior === "selectWord",
								fastScrollModifier: "alt",
								fastScrollSensitivity: fe.fastScrollSensitivity,
								scrollSensitivity: fe.mouseWheelScrollSensitivity,
								wordSeparator: fe.wordSeparators,
								overviewRuler: { width: 14, showTopBorder: !0 },
								ignoreBracketedPasteMode: fe.ignoreBracketedPasteMode,
								rescaleOverlappingGlyphs: fe.rescaleOverlappingGlyphs,
								windowOptions: {
									getWinSizePixels: !0,
									getCellSizePixels: !0,
									getWinSizeChars: !0,
								},
							}),
						)),
							this.gb(),
							(this.a = this.raw._core),
							this.D(
								this.U.onDidChangeConfiguration(async (ve) => {
									ve.affectsConfiguration(
										E.TerminalSettingId.GpuAcceleration,
									) && (M.b = void 0),
										(ve.affectsConfiguration("terminal.integrated") ||
											ve.affectsConfiguration("editor.fastScrollSensitivity") ||
											ve.affectsConfiguration(
												"editor.mouseWheelScrollSensitivity",
											) ||
											ve.affectsConfiguration("editor.multiCursorModifier")) &&
											this.updateConfig(),
										ve.affectsConfiguration(
											E.TerminalSettingId.UnicodeVersion,
										) && this.Bb(),
										ve.affectsConfiguration(
											E.TerminalSettingId.ShellIntegrationDecorationsEnabled,
										) && this.Ab();
								}),
							),
							this.D(this.Z.onDidColorThemeChange((ve) => this.Ab(ve))),
							this.D(
								this.X.onDidChangeLogLevel(
									(ve) => (this.raw.options.logLevel = q(ve)),
								),
							),
							this.D(
								this.raw.onSelectionChange(() => {
									this.O.fire(),
										this.isFocused && this.F.set(this.raw.hasSelection());
								}),
							),
							this.Bb(),
							(this.h = this.W.createInstance(r.$HHb, Y)),
							this.raw.loadAddon(this.h),
							(this.m = this.W.createInstance(p.$0Hb, this.S)),
							this.D(this.m.onDidRequestRunCommand((ve) => this.H.fire(ve))),
							this.raw.loadAddon(this.m),
							(this.j = new n.$RHb(ie, ne, this.$, this.X)),
							this.raw.loadAddon(this.j),
							this.tb().then((ve) => {
								(this.n = this.W.createInstance(ve, void 0, {
									async readText(ge) {
										return le.readText(ge === "p" ? "selection" : "clipboard");
									},
									async writeText(ge, be) {
										return le.writeText(
											be,
											ge === "p" ? "selection" : "clipboard",
										);
									},
								})),
									this.raw.loadAddon(this.n);
							}),
							(this.C = y.TerminalContextKeys.focusInAny.bindTo(ae)),
							(this.F = y.TerminalContextKeys.textSelectedInFocused.bindTo(ae));
					}
					*getBufferReverseIterator() {
						for (let K = this.raw.buffer.active.length; K >= 0; K--) {
							const { lineData: J, lineIndex: W } = F(
								K,
								this.raw.buffer.active,
							);
							J && ((K = W), yield J);
						}
					}
					async getContentsAsHtml() {
						if (!this.t) {
							const K = await this.yb();
							(this.t = new K()), this.raw.loadAddon(this.t);
						}
						return this.t.serializeAsHTML();
					}
					onRender(K) {
						return this.raw.onRender(K);
					}
					async getSelectionAsHtml(K) {
						if (!this.t) {
							const W = await this.yb();
							(this.t = new W()), this.raw.loadAddon(this.t);
						}
						if (K) {
							const W = K.getOutput()?.length,
								X = K.marker?.line;
							if (!W || !X)
								throw new Error(
									`No row ${X} or output length ${W} for command ${K}`,
								);
							this.raw.select(0, X + 1, W - Math.floor(W / this.raw.cols));
						}
						const J = this.t.serializeAsHTML({ onlySelection: !0 });
						return K && this.raw.clearSelection(), J;
					}
					attachToElement(K, J) {
						const W = { enableGpu: !0, ...J };
						if (
							(this.f || this.raw.open(K),
							W.enableGpu && this.hb() && this.qb(),
							!this.raw.element || !this.raw.textarea)
						)
							throw new Error("xterm elements not set after open");
						const X = this.z;
						return (
							X.clear(),
							X.add(
								t.$0fb(this.raw.textarea, "focus", () => {
									this.eb.registerEvent("terminal.focus"), this.fb(!0);
								}),
							),
							X.add(t.$0fb(this.raw.textarea, "blur", () => this.fb(!1))),
							X.add(t.$0fb(this.raw.textarea, "focusout", () => this.fb(!1))),
							X.add(
								t.$0fb(
									this.raw.element,
									t.$$gb.MOUSE_WHEEL,
									(Y) => {
										const ie = S.$3hb.INSTANCE;
										ie.acceptStandardWheelEvent(new I.$4fb(Y));
										const ne = ie.isPhysicalMouseWheel();
										ne !== this.g && ((this.g = ne), this.gb());
									},
									{ passive: !0 },
								),
							),
							(this.f = { container: K, options: W }),
							this.f?.container.querySelector(".xterm-screen")
						);
					}
					fb(K) {
						this.P.fire(K),
							this.C.set(K),
							this.F.set(K && this.raw.hasSelection());
					}
					write(K, J) {
						this.raw.write(K, J);
					}
					resize(K, J) {
						this.raw.resize(K, J);
					}
					updateConfig() {
						const K = this.ab.config;
						(this.raw.options.altClickMovesCursor = K.altClickMovesCursor),
							this.mb(K.cursorBlinking),
							this.nb(K.cursorStyle),
							this.ob(K.cursorStyleInactive),
							this.pb(K.cursorWidth),
							(this.raw.options.scrollback = K.scrollback),
							(this.raw.options.drawBoldTextInBrightColors =
								K.drawBoldTextInBrightColors),
							(this.raw.options.minimumContrastRatio = K.minimumContrastRatio),
							(this.raw.options.tabStopWidth = K.tabStopWidth),
							(this.raw.options.fastScrollSensitivity =
								K.fastScrollSensitivity),
							(this.raw.options.scrollSensitivity =
								K.mouseWheelScrollSensitivity),
							(this.raw.options.macOptionIsMeta = K.macOptionIsMeta);
						const J = this.U.getValue("editor");
						(this.raw.options.altClickMovesCursor =
							K.altClickMovesCursor && J.multiCursorModifier === "alt"),
							(this.raw.options.macOptionClickForcesSelection =
								K.macOptionClickForcesSelection),
							(this.raw.options.rightClickSelectsWord =
								K.rightClickBehavior === "selectWord"),
							(this.raw.options.wordSeparator = K.wordSeparators),
							(this.raw.options.customGlyphs = K.customGlyphs),
							(this.raw.options.ignoreBracketedPasteMode =
								K.ignoreBracketedPasteMode),
							(this.raw.options.rescaleOverlappingGlyphs =
								K.rescaleOverlappingGlyphs),
							(this.raw.options.overviewRuler = {
								width: 14,
								showTopBorder: !0,
							}),
							this.gb(),
							this.f?.options.enableGpu && (this.hb() ? this.qb() : this.zb());
					}
					gb() {
						this.raw.options.smoothScrollDuration =
							this.ab.config.smoothScrolling && this.g
								? N.SmoothScrollDuration
								: 0;
					}
					hb() {
						return (
							(this.ab.config.gpuAcceleration === "auto" && M.b === void 0) ||
							this.ab.config.gpuAcceleration === "on"
						);
					}
					forceRedraw() {
						this.raw.clearTextureAtlas();
					}
					clearDecorations() {
						this.m?.clearDecorations();
					}
					forceRefresh() {
						this.a.viewport?._innerRefresh();
					}
					async findNext(K, J) {
						return this.ib(J), (await this.kb()).findNext(K, J);
					}
					async findPrevious(K, J) {
						return this.ib(J), (await this.kb()).findPrevious(K, J);
					}
					ib(K) {
						const J = this.Z.getColorTheme(),
							W = J.getColor(c.$iHb) || J.getColor(h.$qFb),
							X = J.getColor(c.$vHb),
							Y = J.getColor(c.$xHb),
							ie = J.getColor(c.$sHb),
							ne = J.getColor(c.$yHb),
							ee = J.getColor(c.$zHb),
							_ = J.getColor(c.$AHb);
						K.decorations = {
							activeMatchBackground: X?.toString(),
							activeMatchBorder: Y?.toString() || "transparent",
							activeMatchColorOverviewRuler: ie?.toString() || "transparent",
							matchBackground: W ? ne?.blend(W).toString() : void 0,
							matchBorder: ee?.toString() || "transparent",
							matchOverviewRuler: _?.toString() || "transparent",
						};
					}
					kb() {
						return (
							this.jb ||
								(this.jb = this.vb().then(
									(K) => (
										(this.q = new K({
											highlightLimit:
												C.XtermTerminalConstants.SearchHighlightLimit,
										})),
										this.raw.loadAddon(this.q),
										this.q.onDidChangeResults((J) => {
											(this.G = J), this.N.fire(J);
										}),
										this.q
									),
								)),
							this.jb
						);
					}
					clearSearchDecorations() {
						this.q?.clearDecorations();
					}
					clearActiveSearchDecoration() {
						this.q?.clearActiveDecoration();
					}
					getFont() {
						return this.ab.getFont(t.getWindow(this.raw.element), this.a);
					}
					getLongestViewportWrappedLineLength() {
						let K = 0;
						for (
							let J = this.raw.buffer.active.length - 1;
							J >= this.raw.buffer.active.viewportY;
							J--
						) {
							const W = this.lb(J, this.raw.buffer.active);
							(K = Math.max(K, W.lineCount * this.raw.cols - W.endSpaces || 0)),
								(J = W.currentIndex);
						}
						return K;
					}
					lb(K, J) {
						let W = J.getLine(K);
						if (!W) throw new Error("Could not get line");
						let X = K,
							Y = 0;
						for (
							let ie = Math.min(W.length, this.raw.cols) - 1;
							ie >= 0 && !W?.getCell(ie)?.getChars();
							ie--
						)
							Y++;
						for (; W?.isWrapped && X > 0; ) X--, (W = J.getLine(X));
						return { lineCount: K - X + 1, currentIndex: X, endSpaces: Y };
					}
					scrollDownLine() {
						this.raw.scrollLines(1);
					}
					scrollDownPage() {
						this.raw.scrollPages(1);
					}
					scrollToBottom() {
						this.raw.scrollToBottom();
					}
					scrollUpLine() {
						this.raw.scrollLines(-1);
					}
					scrollUpPage() {
						this.raw.scrollPages(-1);
					}
					scrollToTop() {
						this.raw.scrollToTop();
					}
					scrollToLine(K, J = r.ScrollPosition.Top) {
						this.markTracker.scrollToLine(K, J);
					}
					clearBuffer() {
						this.raw.clear(),
							this.S.get(
								o.TerminalCapability.CommandDetection,
							)?.handlePromptStart(),
							this.S.get(
								o.TerminalCapability.CommandDetection,
							)?.handleCommandStart(),
							this.db.playSignal(L.$Twb.clear);
					}
					hasSelection() {
						return this.raw.hasSelection();
					}
					clearSelection() {
						this.raw.clearSelection();
					}
					selectMarkedRange(K, J, W = !1) {
						const X = this.shellIntegration.capabilities.get(
							o.TerminalCapability.BufferMarkDetection,
						);
						if (!X) return;
						const Y = X.getMark(K),
							ie = X.getMark(J);
						Y === void 0 ||
							ie === void 0 ||
							(this.raw.selectLines(Y.line, ie.line),
							W && this.raw.scrollToLine(Y.line));
					}
					selectAll() {
						this.raw.focus(), this.raw.selectAll();
					}
					focus() {
						this.raw.focus();
					}
					async copySelection(K, J) {
						if (
							(this.eb.registerEvent("terminal.copy"),
							this.hasSelection() || (K && J))
						)
							if (K) {
								let X = function (ie) {
									ie.clipboardData.types.includes("text/plain") ||
										ie.clipboardData.setData(
											"text/plain",
											J?.getOutput() ?? "",
										),
										ie.clipboardData.setData("text/html", W),
										ie.preventDefault();
								};
								const W = await this.getSelectionAsHtml(J),
									Y = t.getDocument(this.raw.element);
								Y.addEventListener("copy", X),
									Y.execCommand("copy"),
									Y.removeEventListener("copy", X),
									this.cb.setNonPersistentStorage({
										lastCopy: {
											text: W,
											range: this.selectionRange,
											languageId: "bash",
										},
									});
							} else
								await this.bb.writeText(this.raw.getSelection()),
									this.cb.setNonPersistentStorage({
										lastCopy: {
											text: this.raw.getSelection(),
											range: this.selectionRange,
											languageId: "bash",
										},
									});
						else this.Y.warn((0, u.localize)(10195, null));
					}
					get selectionRange() {
						const K = this.hasSelection()
							? this.raw.getSelectionPosition()
							: void 0;
						if (K)
							return {
								selectionStartColumn: K.start.x,
								selectionStartLineNumber: K.start.y + 1,
								positionColumn: K.end.x,
								positionLineNumber: K.end.y + 1,
							};
					}
					mb(K) {
						this.raw.options.cursorBlink !== K &&
							((this.raw.options.cursorBlink = K),
							this.raw.refresh(0, this.raw.rows - 1));
					}
					nb(K) {
						const J = V(K);
						this.raw.options.cursorStyle !== J &&
							(this.raw.options.cursorStyle = J);
					}
					ob(K) {
						const J = V(K);
						this.raw.options.cursorInactiveStyle !== J &&
							(this.raw.options.cursorInactiveStyle = J);
					}
					pb(K) {
						this.raw.options.cursorWidth !== K &&
							(this.raw.options.cursorWidth = K);
					}
					async qb() {
						if (!this.raw.element || this.s) return;
						if (!M.c) {
							M.c = !0;
							const W = document.createElement("canvas").getContext("webgl2"),
								X = W?.getExtension("WEBGL_debug_renderer_info");
							if (
								W &&
								X &&
								W.getParameter(X.UNMASKED_RENDERER_WEBGL).startsWith(
									"ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero)",
								)
							) {
								this.rb();
								return;
							}
						}
						const K = await this.xb();
						this.s = new K();
						try {
							this.raw.loadAddon(this.s),
								this.X.trace("Webgl was loaded"),
								this.s.onContextLoss(() => {
									this.X.info(
										"Webgl lost context, disposing of webgl renderer",
									),
										this.zb();
								}),
								this.sb(),
								this.M.fire();
						} catch (J) {
							this.X.warn(
								"Webgl could not be loaded. Falling back to the DOM renderer",
								J,
							),
								this.rb();
						}
					}
					rb() {
						(M.b = "dom"), this.zb();
					}
					async sb() {
						if (this.ab.config.enableImages && this.s) {
							if (!this.u) {
								const K = await this.ub();
								(this.u = new K()), this.raw.loadAddon(this.u);
							}
						} else {
							try {
								this.u?.dispose();
							} catch {}
							this.u = void 0;
						}
					}
					async tb() {
						return (
							A ||
								(A = (
									await (0, s.$Tq)(
										"@xterm/addon-clipboard",
										"lib/addon-clipboard.js",
									)
								).ClipboardAddon),
							A
						);
					}
					async ub() {
						return (
							R ||
								(R = (
									await (0, s.$Tq)("@xterm/addon-image", "lib/addon-image.js")
								).ImageAddon),
							R
						);
					}
					async vb() {
						return (
							O ||
								(O = (
									await (0, s.$Tq)("@xterm/addon-search", "lib/addon-search.js")
								).SearchAddon),
							O
						);
					}
					async wb() {
						return (
							U ||
								(U = (
									await (0, s.$Tq)(
										"@xterm/addon-unicode11",
										"lib/addon-unicode11.js",
									)
								).Unicode11Addon),
							U
						);
					}
					async xb() {
						return (
							z ||
								(z = (
									await (0, s.$Tq)("@xterm/addon-webgl", "lib/addon-webgl.js")
								).WebglAddon),
							z
						);
					}
					async yb() {
						return (
							B ||
								(B = (
									await (0, s.$Tq)(
										"@xterm/addon-serialize",
										"lib/addon-serialize.js",
									)
								).SerializeAddon),
							B
						);
					}
					zb() {
						try {
							this.s?.dispose();
						} catch {}
						(this.s = void 0), this.sb();
					}
					getXtermTheme(K) {
						K || (K = this.Z.getColorTheme());
						const J = this.ab.config,
							W = ["never", "gutter"].includes(
								J.shellIntegration?.decorationsEnabled ?? "",
							),
							X = K.getColor(c.$jHb),
							Y = this.R.getBackgroundColor(K),
							ie = K.getColor(c.$kHb) || X,
							ne = K.getColor(c.$lHb) || Y,
							ee = K.getColor(c.$mHb),
							_ = K.getColor(c.$nHb),
							te = K.getColor(c.$oHb) || void 0;
						return {
							background: Y?.toString(),
							foreground: X?.toString(),
							cursor: ie?.toString(),
							cursorAccent: ne?.toString(),
							selectionBackground: ee?.toString(),
							selectionInactiveBackground: _?.toString(),
							selectionForeground: te?.toString(),
							overviewRulerBorder: W ? "#0000" : K.getColor(c.$uHb)?.toString(),
							scrollbarSliderActiveBackground: K.getColor(D.$6P)?.toString(),
							scrollbarSliderBackground: K.getColor(D.$4P)?.toString(),
							scrollbarSliderHoverBackground: K.getColor(D.$5P)?.toString(),
							black: K.getColor(c.$hHb[0])?.toString(),
							red: K.getColor(c.$hHb[1])?.toString(),
							green: K.getColor(c.$hHb[2])?.toString(),
							yellow: K.getColor(c.$hHb[3])?.toString(),
							blue: K.getColor(c.$hHb[4])?.toString(),
							magenta: K.getColor(c.$hHb[5])?.toString(),
							cyan: K.getColor(c.$hHb[6])?.toString(),
							white: K.getColor(c.$hHb[7])?.toString(),
							brightBlack: K.getColor(c.$hHb[8])?.toString(),
							brightRed: K.getColor(c.$hHb[9])?.toString(),
							brightGreen: K.getColor(c.$hHb[10])?.toString(),
							brightYellow: K.getColor(c.$hHb[11])?.toString(),
							brightBlue: K.getColor(c.$hHb[12])?.toString(),
							brightMagenta: K.getColor(c.$hHb[13])?.toString(),
							brightCyan: K.getColor(c.$hHb[14])?.toString(),
							brightWhite: K.getColor(c.$hHb[15])?.toString(),
						};
					}
					Ab(K) {
						this.raw.options.theme = this.getXtermTheme(K);
					}
					refresh() {
						this.Ab(), this.m.refreshLayouts();
					}
					async Bb() {
						if (!this.r && this.ab.config.unicodeVersion === "11") {
							const K = await this.wb();
							(this.r = new K()), this.raw.loadAddon(this.r);
						}
						this.raw.unicode.activeVersion !== this.ab.config.unicodeVersion &&
							(this.raw.unicode.activeVersion = this.ab.config.unicodeVersion);
					}
					_writeText(K) {
						this.raw.write(K);
					}
					dispose() {
						this.C.reset(), this.F.reset(), this.Q.fire(), super.dispose();
					}
				};
				(e.$$Hb = x),
					Ne([(0, v.$fi)(100)], x.prototype, "sb", null),
					(e.$$Hb =
						x =
						M =
							Ne(
								[
									j(7, i.$gj),
									j(8, g.$Li),
									j(9, E.$YJ),
									j(10, m.$4N),
									j(11, a.$iP),
									j(12, b.$km),
									j(13, C.$jIb),
									j(14, $.$Vxb),
									j(15, T.$0zb),
									j(16, l.$6j),
									j(17, L.$Owb),
									j(18, k.$5X),
									j(19, P.$jEb),
								],
								x,
							));
				function H(G, K, J, W) {
					if (!K.charWidth || !K.charHeight) return null;
					const X = J * G.devicePixelRatio,
						Y = K.charWidth * G.devicePixelRatio + K.letterSpacing,
						ie = Math.max(Math.floor(X / Y), 1),
						ne = W * G.devicePixelRatio,
						ee = Math.ceil(K.charHeight * G.devicePixelRatio),
						_ = Math.floor(ee * K.lineHeight);
					return { rows: Math.max(Math.floor(ne / _), 1), cols: ie };
				}
				function q(G) {
					switch (G) {
						case d.LogLevel.Trace:
							return "trace";
						case d.LogLevel.Debug:
							return "debug";
						case d.LogLevel.Info:
							return "info";
						case d.LogLevel.Warning:
							return "warn";
						case d.LogLevel.Error:
							return "error";
						default:
							return "off";
					}
				}
				function V(G) {
					return G === "line" ? "bar" : G;
				}
			},
		),
		define(
			de[3440],
			he([
				1, 0, 7, 15, 6, 103, 149, 3, 206, 281, 309, 784, 251, 42, 255, 4, 5,
				189, 675, 776, 25, 416, 123, 60, 1769, 107, 1299, 512, 999, 1002, 353,
				810, 421, 185,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wLc = e.$vLc = e.$uLc = e.$tLc = void 0),
					(t = mt(t));
				class A extends l.$PO {
					constructor(q, V) {
						super(),
							(this.a = q),
							(this.b = V),
							(this.original = this.a.object.textEditorModel),
							(this.modified = this.b.object.textEditorModel);
					}
					dispose() {
						super.dispose(), this.a.dispose(), this.b.dispose();
					}
				}
				const R = {
						scrollBeyondLastLine: !1,
						links: !0,
						lineNumbers: "off",
						glyphMargin: !1,
						scrollbar: {
							verticalScrollbarSize: 14,
							horizontal: "auto",
							useShadows: !1,
							verticalHasArrows: !1,
							horizontalHasArrows: !1,
							alwaysConsumeMouseWheel: !1,
						},
						overviewRulerLanes: 0,
						fixedOverflowWidgets: !0,
						readOnly: !0,
						stickyScroll: { enabled: !1 },
						minimap: { enabled: !1 },
						automaticLayout: !1,
					},
					O = {
						...R,
						enableSplitViewResizing: !0,
						isInEmbeddedEditor: !0,
						renderOverviewRuler: !1,
						ignoreTrimWhitespace: !1,
						renderSideBySide: !0,
						useInlineViewWhenSpaceIsLimited: !1,
						originalAriaLabel: (0, g.localize)(10815, null),
						modifiedAriaLabel: (0, g.localize)(10816, null),
						diffAlgorithm: "advanced",
					};
				let B = class extends d.$1c {
					get onDidContentSizeChange() {
						return this.a.value?.onDidContentSizeChange || w.Event.None;
					}
					constructor(q, V, G, K) {
						super(),
							(this.f = q),
							(this.g = V),
							(this.h = G),
							(this.j = K),
							(this.a = this.D(new d.$2c())),
							(this.b = this.D(new d.$2c()));
					}
					async update(q) {
						if (!(q instanceof k.$eLc)) return this.m(), !1;
						const V = q.message;
						if (!N.ITestMessage.isDiffable(V)) return this.m(), !1;
						const [G, K] = await Promise.all([
								this.j.createModelReference(q.expectedUri),
								this.j.createModelReference(q.actualUri),
							]),
							J = (this.b.value = new A(G, K));
						return (
							this.a.value ||
								((this.a.value = this.f
									? this.h.createInstance(a.$7mc, this.g, O, {}, this.f)
									: this.h.createInstance(u.$3yb, this.g, O, {})),
								this.c && this.a.value.layout(this.c)),
							this.a.value.setModel(J),
							this.a.value.updateOptions(this.n(x(V.expected) || x(V.actual))),
							!0
						);
					}
					m() {
						this.b.clear(), this.a.clear();
					}
					layout(q, V) {
						this.c = q;
						const G = this.a.value;
						if (!G) return;
						if ((G.layout(q), !V)) return q.height;
						const K = Math.min(
							1e4,
							Math.max(
								G.getOriginalEditor().getContentHeight(),
								G.getModifiedEditor().getContentHeight(),
							),
						);
						return G.layout({ height: K, width: q.width }), K;
					}
					n(q) {
						return q
							? { ...O, lineNumbers: "on" }
							: { ...O, lineNumbers: "off" };
					}
				};
				(e.$tLc = B), (e.$tLc = B = Ne([j(2, p.$Li), j(3, c.$MO)], B));
				let U = class extends d.$1c {
					constructor(q, V) {
						super(),
							(this.c = q),
							(this.f = V),
							(this.a = new C.$Y(() =>
								this.D(this.f.createInstance(h.$Qzb, {})),
							)),
							this.D((0, d.$Yc)(() => this.g()));
					}
					async update(q) {
						if (!(q instanceof k.$eLc)) return this.g(), !1;
						const V = q.message;
						if (N.ITestMessage.isDiffable(V) || typeof V.message == "string")
							return this.g(), !1;
						const G = this.D(this.a.value.render(V.message, {}));
						return (
							(G.element.style.userSelect = "text"),
							G.element.classList.add("preview-text"),
							this.c.appendChild(G.element),
							(this.b = G.element),
							!0
						);
					}
					layout(q) {
						if (this.b)
							return (
								(this.b.style.width = `${q.width - 32}px`), this.b.clientHeight
							);
					}
					g() {
						this.b && (this.b.remove(), (this.b = void 0));
					}
				};
				(e.$uLc = U), (e.$uLc = U = Ne([j(1, p.$Li)], U));
				let z = class extends d.$1c {
					get onDidContentSizeChange() {
						return this.b.value?.onDidContentSizeChange || w.Event.None;
					}
					constructor(q, V, G, K) {
						super(),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.m = K),
							(this.a = this.D(new d.$2c())),
							(this.b = this.D(new d.$2c())),
							(this.c = this.D(new d.$2c()));
					}
					async update(q) {
						if (!(q instanceof k.$eLc)) return this.n(), !1;
						const V = q.message;
						if (
							N.ITestMessage.isDiffable(V) ||
							V.type === N.TestMessageType.Output ||
							typeof V.message != "string"
						)
							return this.n(), !1;
						const G = (this.c.value = await this.m.createModelReference(
							q.messageUri,
						));
						return (
							this.b.value ||
								((this.b.value = this.g
									? this.j.createInstance(r.$wDb, this.h, R, {}, this.g)
									: this.j.createInstance(m.$rwb, this.h, R, {
											isSimpleWidget: !0,
										})),
								this.f && this.b.value.layout(this.f)),
							this.b.value.setModel(G.object.textEditorModel),
							this.b.value.updateOptions(R),
							(this.a.value = (0, P.$WKc)(V.message, this.b.value)),
							!0
						);
					}
					n() {
						this.a.clear(), this.b.clear(), this.c.clear();
					}
					layout(q, V) {
						this.f = q;
						const G = this.b.value;
						if (!G) return;
						if ((G.layout(q), !V)) return q.height;
						const K = G.getContentHeight();
						return G.layout({ height: K, width: q.width }), K;
					}
				};
				(e.$vLc = z), (e.$vLc = z = Ne([j(2, p.$Li), j(3, c.$MO)], z));
				let F = class extends d.$1c {
					constructor(q, V, G, K, J) {
						super(),
							(this.h = q),
							(this.j = V),
							(this.m = G),
							(this.n = K),
							(this.q = J),
							(this.b = this.D(new D.$qqc(""))),
							(this.c = this.D(new i.$Jh(50))),
							(this.f = this.D(new d.$2c())),
							(this.g = this.D(new d.$2c()));
					}
					async r() {
						const q = this.f.value;
						if (q)
							return (
								q.xterm.clearBuffer(),
								q.xterm.clearSearchDecorations(),
								q.xterm.write("\x1B[2J\x1B[0;0H"),
								q
							);
						const V = new f.$KHb(),
							G = this.b;
						return (
							V.add(o.TerminalCapability.CwdDetection, {
								type: o.TerminalCapability.CwdDetection,
								get cwds() {
									return [G.value];
								},
								onDidChangeCwd: G.onDidChange,
								getCwd: () => G.value,
								updateCwd: () => {},
							}),
							(this.f.value = await this.m.createDetachedTerminal({
								rows: 10,
								cols: 80,
								readonly: !0,
								capabilities: V,
								processInfo: new v.$sLc({ initialCwd: G.value }),
								colorProvider: {
									getBackgroundColor: (K) => {
										const J = K.getColor(T.$iHb);
										return (
											J ||
											(this.j
												? K.getColor(n.$bNb)
												: this.n.getViewLocationById(
															L.Testing.ResultsViewId,
														) === $.ViewContainerLocation.Panel
													? K.getColor(y.$qFb)
													: K.getColor(y.$wGb))
										);
									},
								},
							}))
						);
					}
					async update(q) {
						if ((this.g.clear(), q instanceof k.$fLc)) await this.w(q);
						else if (
							q instanceof k.$gLc ||
							(q instanceof k.$eLc &&
								q.message.type === N.TestMessageType.Output)
						)
							await this.u(q);
						else return this.G(), !1;
						return !0;
					}
					async u(q) {
						const V = this,
							G = q instanceof k.$gLc ? q.test.item : q.test,
							K = await this.y({
								subject: q,
								noOutputMessage: (0, g.localize)(10817, null),
								getTarget: (J) => J?.tasks[q.taskIndex].output,
								*doInitialWrite(J, W) {
									V.z(G.uri);
									const X =
										q instanceof k.$gLc ? q.test : W.getStateById(G.extId);
									if (X)
										for (const Y of X.tasks[q.taskIndex].messages)
											Y.type === N.TestMessageType.Output &&
												(yield* J.getRangeIter(Y.offset, Y.length));
								},
								doListenForMoreData: (J, W, X) =>
									W.onChange((Y) => {
										if (
											Y.reason === M.TestResultItemChangeReason.NewMessage &&
											Y.item.item.extId === G.extId &&
											Y.message.type === N.TestMessageType.Output
										)
											for (const ie of J.getRangeIter(
												Y.message.offset,
												Y.message.length,
											))
												X(ie.buffer);
									}),
							});
						q instanceof k.$eLc &&
							q.message.type === N.TestMessageType.Output &&
							q.message.marker !== void 0 &&
							K?.xterm.selectMarkedRange(
								(0, N.$o4)(q.message.marker, !0),
								(0, N.$o4)(q.message.marker, !1),
								!0,
							);
					}
					w(q) {
						return this.y({
							subject: q,
							noOutputMessage: (0, g.localize)(10818, null),
							getTarget: (V) => V?.tasks[q.taskIndex],
							doInitialWrite: (V, G) => (
								this.z(E.Iterable.find(G.tests, (K) => !!K.item.uri)?.item.uri),
								V.output.buffers
							),
							doListenForMoreData: (V, G, K) =>
								V.output.onDidWriteData((J) => K(J.buffer)),
						});
					}
					async y(q) {
						const V = q.subject.result,
							G = q.getTarget(V);
						if (!G) return this.G();
						const K = await this.r();
						let J = !1;
						const W = new D.$qqc(0);
						if (V instanceof M.$O4)
							for (const X of q.doInitialWrite(G, V))
								(J ||= X.byteLength > 0),
									W.value++,
									K.xterm.write(X.buffer, () => W.value--);
						else (J = !0), this.C(K, (0, g.localize)(10819, null));
						if (
							(this.F(K), this.g.clear(), V instanceof M.$O4 && !V.completedAt)
						) {
							const X = V.onComplete(() => {
									J || this.C(K, q.noOutputMessage);
								}),
								Y = q.doListenForMoreData(G, V, (ie) => {
									K.xterm.write(ie), (J ||= ie.byteLength > 0);
								});
							this.g.value = (0, d.$Xc)(X, Y);
						}
						return (
							!this.g.value && !J && this.C(K, q.noOutputMessage),
							W.value > 0 &&
								(await new Promise((X) => {
									const Y = W.onDidChange(() => {
										W.value === 0 && (Y.dispose(), X());
									});
								})),
							K
						);
					}
					z(q) {
						const V =
							(q && this.q.getWorkspaceFolder(q)) ||
							this.q.getWorkspace().folders[0];
						V && (this.b.value = V.uri.fsPath);
					}
					C(q, V) {
						q.xterm.write((0, b.$aIb)(V));
					}
					F(q) {
						q.xterm.write("\x1B[?25l"),
							t.$hgb(t.getWindow(this.h), () => this.H(q)),
							q.attachToElement(this.h, { enableGpu: !1 });
					}
					G() {
						this.g.clear(), this.c.cancel(), this.f.clear();
					}
					layout(q) {
						if (((this.a = q), this.f.value))
							return this.H(this.f.value, q.width, q.height), q.height;
					}
					H(
						{ xterm: q },
						V = this.a?.width ?? this.h.clientWidth,
						G = this.a?.height ?? this.h.clientHeight,
					) {
						(V -= 30),
							this.c.trigger(() => {
								const K = (0, I.$_Hb)(t.getWindow(this.h), q.getFont(), V, G);
								K && q.resize(K.cols, K.rows);
							});
					}
				};
				(e.$wLc = F),
					(e.$wLc = F = Ne([j(2, S.$iIb), j(3, $.$K1), j(4, s.$Vi)], F));
				const x = (H) =>
					!!H &&
					H.includes(`
`);
			},
		),
		