define(de[3748], he([1, 0, 3747, 1894]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), i.$Ooc.add(t.$OAc);
		}),
		define(
			de[1040],
			he([1, 0, 15, 6, 3, 20, 5, 1894]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qoc = e.$Poc = void 0);
				const m = 1e4;
				e.$Poc = (0, C.$Mi)("IUserActivityService");
				let r = class extends w.$1c {
					constructor(a) {
						super(),
							(this.a = this.D(
								new t.$Yh(() => {
									(this.isActive = !1), this.b.fire(!1);
								}, m),
							)),
							(this.b = this.D(new i.$re())),
							(this.c = 0),
							(this.isActive = !0),
							(this.onDidChangeIsActive = this.b.event),
							this.D((0, t.$3h)(() => d.$Ooc.take(this, a)));
					}
					markActive(a) {
						if (a?.whenHeldFor) {
							const h = new w.$Zc();
							return (
								h.add(
									(0, t.$Oh)(() => h.add(this.markActive()), a.whenHeldFor),
								),
								h
							);
						}
						return (
							++this.c === 1 &&
								((this.isActive = !0), this.b.fire(!0), this.a.cancel()),
							(0, w.$Yc)(() => {
								--this.c === 0 && this.a.schedule();
							})
						);
					}
				};
				(e.$Qoc = r),
					(e.$Qoc = r = Ne([j(0, C.$Li)], r)),
					(0, E.$lK)(e.$Poc, r, E.InstantiationType.Delayed);
			},
		),
		define(
			de[3749],
			he([1, 0, 6, 3, 9, 41, 101, 88, 87, 1040]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Roc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.b = new i.$Zc()),
							(this.a = h.getProxy(d.$mbb.ExtHostWindow)),
							t.Event.latch(c.onDidChangeFocus)(
								this.a.$onDidChangeWindowFocus,
								this.a,
								this.b,
							),
							g.onDidChangeIsActive(
								this.a.$onDidChangeWindowActive,
								this.a,
								this.b,
							);
					}
					dispose() {
						this.b.dispose();
					}
					$getInitialState() {
						return Promise.resolve({
							isFocused: this.c.hasFocus,
							isActive: this.e.isActive,
						});
					}
					async $openUri(h, c, n) {
						const g = w.URI.from(h);
						let p;
						return (
							c && w.URI.parse(c).toString() === g.toString()
								? (p = c)
								: (p = g),
							this.d.open(p, {
								openExternal: !0,
								allowTunneling: n.allowTunneling,
								allowContributedOpeners: n.allowContributedOpeners,
							})
						);
					}
					async $asExternalUri(h, c) {
						return (await this.d.resolveExternalUri(w.URI.revive(h), c))
							.resolved;
					}
				};
				(e.$Roc = u),
					(e.$Roc = u =
						Ne(
							[
								(0, C.$tmc)(d.$lbb.MainThreadWindow),
								j(1, m.$asb),
								j(2, E.$7rb),
								j(3, r.$Poc),
							],
							u,
						));
			},
		),
		define(
			de[3750],
			he([1, 0, 138, 3, 330, 70, 190, 1040]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vGc = void 0);
				let m = class extends i.$1c {
					static {
						this.id = "workbench.notebook.executionEditorProgress";
					}
					constructor(u, a, h) {
						super(),
							(this.b = u),
							(this.c = a),
							(this.f = h),
							(this.a = this.D(new i.$2c())),
							this.D(u.onDidScroll(() => this.g())),
							this.D(
								a.onDidChangeExecution((c) => {
									c.notebook.toString() === this.b.textModel?.uri.toString() &&
										this.g();
								}),
							),
							this.D(u.onDidChangeModel(() => this.g()));
					}
					g() {
						if (!this.b.hasModel()) return;
						const u = this.c
								.getCellExecutionsForNotebook(this.b.textModel?.uri)
								.filter(
									(p) => p.state === E.NotebookCellExecutionState.Executing,
								),
							a = this.c.getExecution(this.b.textModel?.uri),
							h = (p) => {
								for (const o of this.b.visibleRanges)
									for (const f of this.b.getCellsInRange(o))
										if (f.handle === p.cellHandle) {
											const b = this.b.getAbsoluteTopOfElement(f);
											if (this.b.scrollTop < b + 5) return !0;
										}
								return !1;
							},
							c = u.length || a;
						c && !this.a.value
							? (this.a.value = this.f.markActive())
							: !c && this.a.value && this.a.clear();
						const n = u.length && !u.some(h) && !u.some((p) => p.isPaused);
						!!a || n ? this.b.showProgress() : this.b.hideProgress();
					}
				};
				(e.$vGc = m),
					Ne([(0, t.$gi)(100)], m.prototype, "g", null),
					(e.$vGc = m = Ne([j(1, C.$d6), j(2, d.$Poc)], m)),
					(0, w.$PKb)(m.id, m);
			},
		),
		define(
			de[1041],
			he([1, 0, 5, 55, 30, 52, 12, 53, 240]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nwc = e.$mwc = void 0),
					(e.$mwc = (0, t.$Mi)("IUserDataInitializationService"));
				class r {
					constructor(h = []) {
						this.a = h;
					}
					async whenInitializationFinished() {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((h) => h.whenInitializationFinished()),
							));
					}
					async requiresInitialization() {
						return (
							await Promise.all(this.a.map((h) => h.requiresInitialization()))
						).some((h) => h);
					}
					async initializeRequiredResources() {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((h) => h.initializeRequiredResources()),
							));
					}
					async initializeOtherResources(h) {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((c) => c.initializeOtherResources(h)),
							));
					}
					async initializeInstalledExtensions(h) {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((c) => c.initializeInstalledExtensions(h)),
							));
					}
				}
				e.$nwc = r;
				let u = class {
					constructor(h, c, n) {
						n.whenInstalledExtensionsRegistered().then(() => this.a(h, c));
					}
					async a(h, c) {
						(await h.requiresInitialization()) &&
							((0, m.mark)("code/willInitOtherUserData"),
							await h.initializeOtherResources(c),
							(0, m.mark)("code/didInitOtherUserData"));
					}
				};
				(u = Ne([j(0, e.$mwc), j(1, t.$Li), j(2, d.$q2)], u)),
					C.$r &&
						w.$Io
							.as(i.Extensions.Workbench)
							.registerWorkbenchContribution(u, E.LifecyclePhase.Restored);
			},
		),
		define(
			de[3751],
			he([
				1, 0, 3, 119, 314, 5, 32, 24, 6, 113, 52, 3295, 3300, 3467, 3296, 3297,
				3294, 666, 15, 9, 3299, 141, 154, 3298, 951, 1041, 28,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OTc = void 0);
				let T = class extends t.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						if (
							(super(),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.u = N),
							(this.w = A),
							(this.y = R),
							(this.z = O),
							(this.C = B),
							(this.F = U),
							(this.G = z),
							(this.q = this.D(new m.$re())),
							(this.onDidChangeRecommendations = this.q.event),
							(this.b = this.D(k.createInstance(h.$FTc))),
							(this.a = this.D(k.createInstance(c.$ITc))),
							(this.c = this.D(k.createInstance(p.$LTc))),
							(this.f = this.D(k.createInstance(a.$ETc))),
							(this.g = this.D(k.createInstance(n.$JTc))),
							(this.h = this.D(k.createInstance(s.$MTc))),
							(this.j = this.D(k.createInstance(g.$KTc))),
							(this.m = this.D(k.createInstance($.$NTc))),
							!this.I())
						) {
							(this.n = 0), (this.activationPromise = Promise.resolve());
							return;
						}
						(this.n = +new Date()),
							(this.activationPromise = this.H()),
							this.D(this.w.onDidInstallExtensions((F) => this.L(F)));
					}
					async H() {
						try {
							await Promise.allSettled([
								this.F.whenExtensionsReady(),
								this.G.whenInitializationFinished(),
								this.r.when(u.LifecyclePhase.Restored),
							]);
						} catch {}
						await Promise.all([
							this.b.activate(),
							this.c.activate(),
							this.a.activate(),
							this.g.activate(),
							this.j.activate(),
							this.h.activate(),
							this.m.activate(),
						]),
							this.D(
								m.Event.any(
									this.b.onDidChangeRecommendations,
									this.c.onDidChangeRecommendations,
									this.y.onDidChangeIgnoredRecommendations,
								)(() => this.q.fire()),
							),
							this.D(
								this.y.onDidChangeGlobalIgnoredRecommendation(
									({ extensionId: k, isRecommended: L }) => {
										if (!L) {
											const D = this.getAllRecommendationsWithReason()[k];
											D &&
												D.reasonId &&
												this.t.publicLog2(
													"extensionsRecommendations:ignoreRecommendation",
													{ extensionId: k, recommendationReason: D.reasonId },
												);
										}
									},
								),
							),
							this.O();
					}
					I() {
						return this.s.isEnabled() && !this.u.isExtensionDevelopment;
					}
					async J() {
						await Promise.all([this.f.activate(), this.c.activate()]);
					}
					getAllRecommendationsWithReason() {
						this.J();
						const k = Object.create(null),
							L = [
								...this.c.recommendations,
								...this.f.recommendations,
								...this.a.recommendations,
								...this.b.recommendations,
								...this.g.recommendations,
								...this.j.recommendations,
								...this.h.recommendations,
							];
						for (const { extension: D, reason: M } of L)
							(0, I.$lg)(D) && this.N(D) && (k[D.toLowerCase()] = M);
						return k;
					}
					async getConfigBasedRecommendations() {
						return (
							await this.c.activate(),
							{
								important: this.M(this.c.importantRecommendations),
								others: this.M(this.c.otherRecommendations),
							}
						);
					}
					async getOtherRecommendations() {
						await this.activationPromise, await this.J();
						const k = [
								...this.c.otherRecommendations,
								...this.f.otherRecommendations,
								...this.h.recommendations,
							],
							L = this.M(k);
						return (0, d.$1b)(L, this.n), L;
					}
					async getImportantRecommendations() {
						await this.J();
						const k = [
								...this.a.importantRecommendations,
								...this.c.importantRecommendations,
								...this.f.importantRecommendations,
							],
							L = this.M(k);
						return (0, d.$1b)(L, this.n), L;
					}
					getKeymapRecommendations() {
						return this.M(this.g.recommendations);
					}
					getLanguageRecommendations() {
						return this.M(this.j.recommendations);
					}
					getRemoteRecommendations() {
						return this.M(this.m.recommendations);
					}
					async getWorkspaceRecommendations() {
						if (!this.I()) return [];
						await this.b.activate();
						const k = [];
						for (const { extension: L } of this.b.recommendations)
							(0, I.$lg)(L)
								? !k.includes(L.toLowerCase()) &&
									this.N(L) &&
									k.push(L.toLowerCase())
								: k.push(L);
						return k;
					}
					async getExeBasedRecommendations(k) {
						await this.f.activate();
						const { important: L, others: D } = k
							? this.f.getRecommendations(k)
							: {
									important: this.f.importantRecommendations,
									others: this.f.otherRecommendations,
								};
						return { important: this.M(L), others: this.M(D) };
					}
					getFileBasedRecommendations() {
						return this.M(this.a.recommendations);
					}
					L(k) {
						for (const L of k)
							if (
								L.source &&
								!b.URI.isUri(L.source) &&
								L.operation === i.InstallOperation.Install
							) {
								const M = (this.getAllRecommendationsWithReason() || {})[
									L.source.identifier.id.toLowerCase()
								];
								M &&
									this.t.publicLog("extensionGallery:install:recommendations", {
										...L.source.telemetryData,
										recommendationReason: M.reasonId,
									});
							}
					}
					M(k) {
						const L = [];
						for (const { extension: D } of k)
							(0, I.$lg)(D) &&
								this.N(D) &&
								!L.includes(D.toLowerCase()) &&
								L.push(D.toLowerCase());
						return L;
					}
					N(k) {
						return !this.y.ignoredRecommendations.includes(k.toLowerCase());
					}
					async O() {
						const k = await this.C.queryLocal(),
							L = [
								...this.b.recommendations,
								...this.c.importantRecommendations.filter(
									(D) =>
										!D.whenNotInstalled ||
										D.whenNotInstalled.every((M) =>
											k.every((N) => !(0, y.$7p)(N.identifier, { id: M })),
										),
								),
							]
								.map(({ extension: D }) => D)
								.filter((D) => !(0, I.$lg)(D) || this.N(D));
						L.length &&
							(await this.P((0, f.$Nh)(5e3)),
							await this.z.promptWorkspaceRecommendations(L));
					}
					P(k) {
						return this.D((0, t.$Yc)(() => k.cancel())), k;
					}
				};
				(e.$OTc = T),
					(e.$OTc = T =
						Ne(
							[
								j(0, E.$Li),
								j(1, u.$n6),
								j(2, i.$Ep),
								j(3, C.$km),
								j(4, r.$Ti),
								j(5, i.$Hp),
								j(6, w.$0Qb),
								j(7, o.$HTc),
								j(8, l.$MQb),
								j(9, v.$bfb),
								j(10, S.$mwc),
							],
							T,
						));
			},
		),
		define(
			de[1895],
			he([
				1, 0, 4, 28, 53, 333, 21, 32, 30, 29, 10, 3727, 35, 6, 3712, 3, 1889, 7,
				286, 22, 19, 1321, 20, 438, 96, 546, 3728, 1891, 1890, 1322, 34, 12,
				212, 1888, 15, 1041, 1661, 51, 61, 75, 179, 8, 45,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qwc = void 0),
					(e.$rwc = Q),
					(t = mt(t)),
					(i = mt(i)),
					(r = mt(r)),
					(s = mt(s));
				const q = "vscode-theme-defaults",
					V = "vscode.vscode-theme-seti-vs-seti",
					G = "file-icons-enabled",
					K = "contributedColorTheme",
					J = "contributedFileIconTheme",
					W = "contributedProductIconTheme",
					X = m.$Io.as(h.$nP.ThemingContribution);
				function Y(Z) {
					switch (Z) {
						case E.$sRb:
							return `vs ${q}-themes-light_vs-json`;
						case E.$tRb:
							return `vs-dark ${q}-themes-dark_vs-json`;
						case E.$uRb:
							return `hc-black ${q}-themes-hc_black-json`;
						case E.$vRb:
							return `hc-light ${q}-themes-hc_light-json`;
					}
					return Z;
				}
				const ie = (0, I.$gwc)(),
					ne = (0, I.$hwc)(),
					ee = (0, I.$iwc)();
				let _ = class extends g.$1c {
					constructor(se, re, le, oe, ae, pe, $e, ye, ue, fe, me, ve, ge, be) {
						super(),
							(this.I = re),
							(this.J = le),
							(this.L = oe),
							(this.M = ae),
							(this.N = $e),
							(this.O = ue),
							(this.P = fe),
							(this.Q = me),
							(this.R = ve),
							(this.S = ge),
							(this.U = be),
							(this.H = !1),
							(this.db = new Map()),
							(this.a = ye.mainContainer),
							(this.b = new T.$8vc(le, fe)),
							(this.c = this.D(new I.$jwc(ie, a.$9vc.fromExtensionTheme))),
							(this.h = this.D(new te(pe, ae, this.ab.bind(this)))),
							(this.g = new c.$re({ leakWarningThreshold: 400 })),
							(this.f = a.$9vc.createUnloadedTheme("")),
							(this.m = new A.$Hh()),
							(this.u = this.D(new te(pe, ae, this.gb.bind(this)))),
							(this.n = this.D(
								new I.$jwc(
									ne,
									p.$ewc.fromExtensionTheme,
									!0,
									p.$ewc.noIconTheme,
								),
							)),
							(this.s = new p.$fwc($e, ve)),
							(this.r = new c.$re({ leakWarningThreshold: 400 })),
							(this.q = p.$ewc.createUnloadedTheme("")),
							(this.w = new A.$Hh()),
							(this.F = this.D(new te(pe, ae, this.jb.bind(this)))),
							(this.y = this.D(
								new I.$jwc(
									ee,
									P.$lwc.fromExtensionTheme,
									!0,
									P.$lwc.defaultTheme,
								),
							)),
							(this.C = new c.$re()),
							(this.z = P.$lwc.createUnloadedTheme("")),
							(this.G = new A.$Hh()),
							this.D(
								this.onDidColorThemeChange((Ee) =>
									(0, B.$xP)().notifyThemeUpdate(Ee),
								),
							);
						let Ce = a.$9vc.fromStorageData(this.I);
						const Le = this.b.colorTheme;
						Ce &&
							Le !== Ce.settingsId &&
							this.b.isDefaultColorTheme() &&
							((this.H =
								Ce.settingsId === E.ThemeSettingDefaults.COLOR_THEME_DARK_OLD ||
								Ce.settingsId === E.ThemeSettingDefaults.COLOR_THEME_LIGHT_OLD),
							(Ce = void 0));
						const Fe =
							Le === E.ThemeSettingDefaults.COLOR_THEME_LIGHT
								? E.$BRb
								: Le === E.ThemeSettingDefaults.COLOR_THEME_DARK
									? E.$ARb
									: void 0;
						if (!Ce) {
							const Ee = ae.options?.initialColorTheme;
							Ee &&
								(Ce = a.$9vc.createUnloadedThemeForThemeType(
									Ee.themeType,
									Ee.colors ?? Fe,
								));
						}
						Ce ||
							(Ce = a.$9vc.createUnloadedThemeForThemeType(
								D.$r ? M.ColorScheme.LIGHT : M.ColorScheme.DARK,
								Fe,
							)),
							Ce.setCustomizations(this.b),
							this.cb(Ce, void 0, !0);
						const Oe = p.$ewc.fromStorageData(this.I);
						Oe && this.hb(Oe, !0);
						const xe = P.$lwc.fromStorageData(this.I);
						xe && this.kb(xe, !0),
							se.whenInstalledExtensionsRegistered().then((Ee) => {
								this.X(), this.Z(), this.Y(), this.W().catch(r.$4);
							});
						const He = (0, o.$Rgb)();
						He.id = "codiconStyles";
						const Ke = this.D((0, O.$owc)(this));
						function Je() {
							He.textContent = Ke.getCSS();
						}
						const Te = this.D(new A.$Yh(Je, 0));
						this.D(Ke.onDidChange(() => Te.schedule())), Te.schedule();
					}
					W() {
						const se = this.M.extensionDevelopmentLocationURI,
							re = se && se.length === 1 ? se[0] : void 0,
							le = async () => {
								const pe = this.c.findThemeByExtensionLocation(re);
								if (pe.length) {
									const ye = pe.find((ue) => ue.type === this.f.type);
									return this.setColorTheme(ye ? ye.id : pe[0].id, void 0);
								}
								let $e = this.c.findThemeBySettingsId(
									this.b.colorTheme,
									void 0,
								);
								if (!$e) {
									await this.Q.whenInitializationFinished();
									const ye =
										this.f.type === M.ColorScheme.LIGHT
											? E.ThemeSettingDefaults.COLOR_THEME_LIGHT
											: E.ThemeSettingDefaults.COLOR_THEME_DARK;
									$e = this.c.findThemeBySettingsId(this.b.colorTheme, ye);
								}
								return this.setColorTheme($e && $e.id, void 0);
							},
							oe = async () => {
								const pe = this.n.findThemeByExtensionLocation(re);
								if (pe.length)
									return this.setFileIconTheme(
										pe[0].id,
										u.ConfigurationTarget.MEMORY,
									);
								let $e = this.n.findThemeBySettingsId(this.b.fileIconTheme);
								return (
									$e ||
										(await this.Q.whenInitializationFinished(),
										($e = this.n.findThemeBySettingsId(this.b.fileIconTheme))),
									this.setFileIconTheme($e ? $e.id : V, void 0)
								);
							},
							ae = async () => {
								const pe = this.y.findThemeByExtensionLocation(re);
								if (pe.length)
									return this.setProductIconTheme(
										pe[0].id,
										u.ConfigurationTarget.MEMORY,
									);
								let $e = this.y.findThemeBySettingsId(this.b.productIconTheme);
								return (
									$e ||
										(await this.Q.whenInitializationFinished(),
										($e = this.y.findThemeBySettingsId(
											this.b.productIconTheme,
										))),
									this.setProductIconTheme($e ? $e.id : P.$kwc, void 0)
								);
							};
						return Promise.all([le(), oe(), ae()]);
					}
					X() {
						this.D(
							this.J.onDidChangeConfiguration((se) => {
								const re = F.$$Lb.getValue(this.S),
									le =
										this.U.applicationUserPersistentStorage
											.syncDevModeColorTheme;
								if (
									!(re && !le) &&
									((se.affectsConfiguration(E.ThemeSettings.COLOR_THEME) ||
										se.affectsConfiguration(
											E.ThemeSettings.PREFERRED_DARK_THEME,
										) ||
										se.affectsConfiguration(
											E.ThemeSettings.PREFERRED_LIGHT_THEME,
										) ||
										se.affectsConfiguration(
											E.ThemeSettings.PREFERRED_HC_DARK_THEME,
										) ||
										se.affectsConfiguration(
											E.ThemeSettings.PREFERRED_HC_LIGHT_THEME,
										) ||
										se.affectsConfiguration(
											E.ThemeSettings.DETECT_COLOR_SCHEME,
										) ||
										se.affectsConfiguration(E.ThemeSettings.DETECT_HC) ||
										se.affectsConfiguration(
											E.ThemeSettings.SYSTEM_COLOR_THEME,
										)) &&
										this.restoreColorTheme(),
									se.affectsConfiguration(E.ThemeSettings.FILE_ICON_THEME) &&
										this.restoreFileIconTheme(),
									se.affectsConfiguration(E.ThemeSettings.PRODUCT_ICON_THEME) &&
										this.restoreProductIconTheme(),
									this.f)
								) {
									let oe = !1;
									se.affectsConfiguration(
										E.ThemeSettings.COLOR_CUSTOMIZATIONS,
									) &&
										(this.f.setCustomColors(this.b.colorCustomizations),
										(oe = !0)),
										se.affectsConfiguration(
											E.ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS,
										) &&
											(this.f.setCustomTokenColors(
												this.b.tokenColorCustomizations,
											),
											(oe = !0)),
										se.affectsConfiguration(
											E.ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS,
										) &&
											(this.f.setCustomSemanticTokenColors(
												this.b.semanticTokenColorCustomizations,
											),
											(oe = !0)),
										oe && (this.bb(this.f), this.g.fire(this.f));
								}
							}),
						);
					}
					Y() {
						let se;
						this.D(
							this.c.onDidChange(async (oe) => {
								if (((0, T.$5vc)(oe.themes), await this.restoreColorTheme()))
									this.f.settingsId ===
										E.ThemeSettingDefaults.COLOR_THEME_DARK &&
									!i.$sg(se) &&
									(await this.c.findThemeById(se))
										? (await this.setColorTheme(se, "auto"), (se = void 0))
										: oe.added.some(
												(ae) => ae.settingsId === this.f.settingsId,
											) && (await this.ab());
								else if (
									oe.removed.some((ae) => ae.settingsId === this.f.settingsId)
								) {
									se = this.f.id;
									const ae = this.c.findThemeBySettingsId(
										E.ThemeSettingDefaults.COLOR_THEME_DARK,
									);
									await this.setColorTheme(ae, "auto");
								}
							}),
						);
						let re;
						this.D(
							this.D(
								this.n.onDidChange(async (oe) => {
									(0, T.$6vc)(oe.themes),
										(await this.restoreFileIconTheme())
											? this.q.id === V &&
												!i.$sg(re) &&
												this.n.findThemeById(re)
												? (await this.setFileIconTheme(re, "auto"),
													(re = void 0))
												: oe.added.some(
														(ae) => ae.settingsId === this.q.settingsId,
													) && (await this.gb())
											: oe.removed.some(
													(ae) => ae.settingsId === this.q.settingsId,
												) &&
												((re = this.q.id),
												await this.setFileIconTheme(V, "auto"));
								}),
							),
						);
						let le;
						return (
							this.D(
								this.y.onDidChange(async (oe) => {
									(0, T.$7vc)(oe.themes),
										(await this.restoreProductIconTheme())
											? this.z.id === P.$kwc &&
												!i.$sg(le) &&
												this.y.findThemeById(le)
												? (await this.setProductIconTheme(le, "auto"),
													(le = void 0))
												: oe.added.some(
														(ae) => ae.settingsId === this.z.settingsId,
													) && (await this.jb())
											: oe.removed.some(
													(ae) => ae.settingsId === this.z.settingsId,
												) &&
												((le = this.z.id),
												await this.setProductIconTheme(P.$kwc, "auto"));
								}),
							),
							this.D(this.R.onDidChange(() => this.gb())),
							Promise.all([
								this.getColorThemes(),
								this.getFileIconThemes(),
								this.getProductIconThemes(),
							]).then(([oe, ae, pe]) => {
								(0, T.$5vc)(oe), (0, T.$6vc)(ae), (0, T.$7vc)(pe);
							})
						);
					}
					Z() {
						this.D(
							this.P.onDidChangeColorScheme(() => {
								this.b.isDetectingColorScheme() && this.restoreColorTheme();
							}),
						);
					}
					hasUpdatedDefaultThemes() {
						return this.H;
					}
					getColorTheme() {
						return this.f;
					}
					async getColorThemes() {
						return this.c.getThemes();
					}
					getPreferredColorScheme() {
						return this.b.getPreferredColorScheme();
					}
					async getMarketplaceColorThemes(se, re, le) {
						const oe = this.N.getExtensionGalleryResourceURL(
							{ publisher: se, name: re, version: le },
							"extension",
						);
						if (oe)
							try {
								const ae = await this.N.readExtensionResource(
									s.$nh(oe, "package.json"),
								);
								return this.c.getMarketplaceThemes(
									JSON.parse(ae),
									oe,
									E.ExtensionData.fromName(se, re),
								);
							} catch (ae) {
								this.O.error("Problem loading themes from marketplace", ae);
							}
						return [];
					}
					get onDidColorThemeChange() {
						return this.g.event;
					}
					setColorTheme(se, re) {
						return this.m.queue(async () => this.$(se, re));
					}
					async $(se, re) {
						if (!se) return null;
						const le = i.$lg(se) ? Y(se) : se.id;
						if (this.f.isLoaded && le === this.f.id)
							return (
								re !== "preview" && this.f.toStorage(this.I),
								this.b.setColorTheme(this.f, re)
							);
						let oe = this.c.findThemeById(le);
						if (!oe)
							if (se instanceof a.$9vc) oe = se;
							else return null;
						try {
							return (
								await oe.ensureLoaded(this.N),
								oe.setCustomizations(this.b),
								this.cb(oe, re)
							);
						} catch (ae) {
							throw new Error(
								t.localize(12712, null, oe.location?.toString(), ae.message),
							);
						}
					}
					ab() {
						return this.m.queue(async () => {
							try {
								const se =
									this.c.findThemeBySettingsId(this.f.settingsId) || this.f;
								await se.reload(this.N),
									se.setCustomizations(this.b),
									await this.cb(se, void 0, !1);
							} catch {
								this.O.info(
									"Unable to reload {0}: {1}",
									this.f.location?.toString(),
								);
							}
						});
					}
					async restoreColorTheme() {
						return this.m.queue(async () => {
							const se = this.b.colorTheme,
								re = this.c.findThemeBySettingsId(se);
							return re
								? (se !== this.f.settingsId
										? await this.$(re.id, void 0)
										: re !== this.f &&
											(await re.ensureLoaded(this.N),
											re.setCustomizations(this.b),
											await this.cb(re, void 0, !0)),
									!0)
								: !1;
						});
					}
					bb(se) {
						const re = new Set(),
							le = {
								addRule: (ae) => {
									re.has(ae) || re.add(ae);
								},
							};
						le.addRule(".monaco-workbench { forced-color-adjust: none; }"),
							X.getThemingParticipants().forEach((ae) => ae(se, le, this.M));
						const oe = [];
						for (const ae of (0, B.$xP)().getColors()) {
							const pe = se.getColor(ae.id, !0);
							pe && oe.push(`${(0, B.$qP)(ae.id)}: ${pe.toString()};`);
						}
						le.addRule(
							`.monaco-workbench { ${oe.join(`
`)} }`,
						),
							Q(
								[...re].join(`
`),
								K,
							);
					}
					cb(se, re, le = !1) {
						return (
							this.bb(se),
							this.f.id
								? this.a.classList.remove(...this.f.classNames)
								: this.a.classList.remove(E.$tRb, E.$sRb, E.$uRb, E.$vRb),
							this.a.classList.add(...se.classNames),
							this.f.clearCaches(),
							(this.f = se),
							this.j ||
								(this.j = X.onThemingParticipantAdded((oe) => this.bb(this.f))),
							this.h.update(se),
							this.eb(se.id, se.extensionData, "color"),
							le
								? Promise.resolve(null)
								: (this.g.fire(this.f),
									se.isLoaded && re !== "preview" && se.toStorage(this.I),
									this.b.setColorTheme(this.f, re))
						);
					}
					eb(se, re, le) {
						if (re) {
							const oe = le + re.extensionId;
							this.db.get(oe) ||
								(this.L.publicLog2("activatePlugin", {
									id: re.extensionId,
									name: re.extensionName,
									isBuiltin: re.extensionIsBuiltin,
									publisherDisplayName: re.extensionPublisher,
									themeId: se,
								}),
								this.db.set(oe, !0));
						}
					}
					async getFileIconThemes() {
						return this.n.getThemes();
					}
					getFileIconTheme() {
						return this.q;
					}
					get onDidFileIconThemeChange() {
						return this.r.event;
					}
					async setFileIconTheme(se, re) {
						return this.w.queue(async () => this.fb(se, re));
					}
					async fb(se, re) {
						se === void 0 && (se = "");
						const le = i.$lg(se) ? se : se.id;
						if (le !== this.q.id || !this.q.isLoaded) {
							let ae = this.n.findThemeById(le);
							!ae && se instanceof p.$ewc && (ae = se),
								ae || (ae = p.$ewc.noIconTheme),
								await ae.ensureLoaded(this.s),
								this.hb(ae);
						}
						const oe = this.q;
						return (
							oe.isLoaded &&
								re !== "preview" &&
								(!oe.location || !(0, $.$wn)(oe.location)) &&
								oe.toStorage(this.I),
							await this.b.setFileIconTheme(this.q, re),
							oe
						);
					}
					async getMarketplaceFileIconThemes(se, re, le) {
						const oe = this.N.getExtensionGalleryResourceURL(
							{ publisher: se, name: re, version: le },
							"extension",
						);
						if (oe)
							try {
								const ae = await this.N.readExtensionResource(
									s.$nh(oe, "package.json"),
								);
								return this.n.getMarketplaceThemes(
									JSON.parse(ae),
									oe,
									E.ExtensionData.fromName(se, re),
								);
							} catch (ae) {
								this.O.error("Problem loading themes from marketplace", ae);
							}
						return [];
					}
					async gb() {
						return this.w.queue(async () => {
							await this.q.reload(this.s), this.hb(this.q);
						});
					}
					async restoreFileIconTheme() {
						return this.w.queue(async () => {
							const se = this.b.fileIconTheme,
								re = this.n.findThemeBySettingsId(se);
							return re
								? (se !== this.q.settingsId
										? await this.fb(re.id, void 0)
										: re !== this.q &&
											(await re.ensureLoaded(this.s), this.hb(re, !0)),
									!0)
								: !1;
						});
					}
					hb(se, re = !1) {
						(this.q = se),
							Q(se.styleSheetContent, J),
							se.id ? this.a.classList.add(G) : this.a.classList.remove(G),
							this.u.update(se),
							se.id && this.eb(se.id, se.extensionData, "fileIcon"),
							re || this.r.fire(this.q);
					}
					async getProductIconThemes() {
						return this.y.getThemes();
					}
					getProductIconTheme() {
						return this.z;
					}
					get onDidProductIconThemeChange() {
						return this.C.event;
					}
					async setProductIconTheme(se, re) {
						return this.G.queue(async () => this.ib(se, re));
					}
					async ib(se, re) {
						se === void 0 && (se = "");
						const le = i.$lg(se) ? se : se.id;
						if (le !== this.z.id || !this.z.isLoaded) {
							let ae = this.y.findThemeById(le);
							!ae && se instanceof P.$lwc && (ae = se),
								ae || (ae = P.$lwc.defaultTheme),
								await ae.ensureLoaded(this.N, this.O),
								this.kb(ae);
						}
						const oe = this.z;
						return (
							oe.isLoaded &&
								re !== "preview" &&
								(!oe.location || !(0, $.$wn)(oe.location)) &&
								oe.toStorage(this.I),
							await this.b.setProductIconTheme(this.z, re),
							oe
						);
					}
					async getMarketplaceProductIconThemes(se, re, le) {
						const oe = this.N.getExtensionGalleryResourceURL(
							{ publisher: se, name: re, version: le },
							"extension",
						);
						if (oe)
							try {
								const ae = await this.N.readExtensionResource(
									s.$nh(oe, "package.json"),
								);
								return this.y.getMarketplaceThemes(
									JSON.parse(ae),
									oe,
									E.ExtensionData.fromName(se, re),
								);
							} catch (ae) {
								this.O.error("Problem loading themes from marketplace", ae);
							}
						return [];
					}
					async jb() {
						return this.G.queue(async () => {
							await this.z.reload(this.N, this.O), this.kb(this.z);
						});
					}
					async restoreProductIconTheme() {
						return this.G.queue(async () => {
							const se = this.b.productIconTheme,
								re = this.y.findThemeBySettingsId(se);
							return re
								? (se !== this.z.settingsId
										? await this.ib(re.id, void 0)
										: re !== this.z &&
											(await re.ensureLoaded(this.N, this.O), this.kb(re, !0)),
									!0)
								: !1;
						});
					}
					kb(se, re = !1) {
						(this.z = se),
							Q(se.styleSheetContent, W),
							this.F.update(se),
							se.id && this.eb(se.id, se.extensionData, "productIcon"),
							re || this.C.fire(this.z);
					}
				};
				(e.$qwc = _),
					(e.$qwc = _ =
						Ne(
							[
								j(0, w.$q2),
								j(1, C.$lq),
								j(2, u.$gj),
								j(3, d.$km),
								j(4, f.$5rb),
								j(5, b.$ll),
								j(6, S.$bYb),
								j(7, v.$mEb),
								j(8, L.$ik),
								j(9, N.$1vc),
								j(10, R.$mwc),
								j(11, U.$nM),
								j(12, x.$6j),
								j(13, H.$0zb),
							],
							_,
						));
				class te {
					constructor(se, re, le) {
						(this.d = se), (this.f = re), (this.g = le);
					}
					update(se) {
						s.$gh(se.location, this.a) ||
							(this.dispose(),
							se.location &&
								(se.watch || this.f.isExtensionDevelopment) &&
								((this.a = se.location),
								(this.b = this.d.watch(se.location)),
								this.d.onDidFilesChange((re) => {
									this.a &&
										re.contains(this.a, b.FileChangeType.UPDATED) &&
										this.g();
								})));
					}
					dispose() {
						(this.b = (0, g.$Vc)(this.b)),
							(this.c = (0, g.$Vc)(this.c)),
							(this.a = void 0);
					}
				}
				function Q(Z, se) {
					const re = z.$Bfb.document.head.getElementsByClassName(se);
					if (re.length === 0) {
						const le = (0, o.$Rgb)();
						(le.className = se), (le.textContent = Z);
					} else re[0].textContent = Z;
				}
				(0, l.$Zvc)(),
					(0, n.$dwc)(),
					(0, k.$cwc)(),
					(0, y.$lK)(E.$rRb, _, y.InstantiationType.Eager);
			},
		),
		define(
			de[1896],
			he([1, 0, 2685, 27, 7, 8, 43]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iVc = e.$hVc = e.$gVc = e.$fVc = void 0),
					(w = mt(w)),
					(e.$fVc = new E.$5j("iconSelectBoxFocus", !0)),
					(e.$gVc = new E.$5j("iconSelectBoxInputFocus", !0)),
					(e.$hVc = new E.$5j("iconSelectBoxInputEmpty", !0));
				let m = class extends t.$Zob {
					static {
						d = this;
					}
					static getFocusedWidget() {
						return d.C;
					}
					constructor(u, a) {
						if (
							(super(u),
							(this.F = this.D(a.createScoped(this.domNode))),
							e.$fVc.bindTo(this.F),
							(this.G = e.$gVc.bindTo(this.F)),
							(this.H = e.$hVc.bindTo(this.F)),
							this.h)
						) {
							const h = this.D(w.$dhb(this.h.inputElement));
							this.D(h.onDidFocus(() => this.G.set(!0))),
								this.D(h.onDidBlur(() => this.G.set(!1))),
								this.D(
									this.h.onDidChange(() =>
										this.H.set(this.h?.value.length === 0),
									),
								);
						}
					}
					focus() {
						super.focus(), (d.C = this);
					}
				};
				(e.$iVc = m),
					(e.$iVc = m = d = Ne([j(1, E.$6j)], m)),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusUp",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: e.$fVc,
						primary: i.KeyCode.UpArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusPreviousRow();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusDown",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: e.$fVc,
						primary: i.KeyCode.DownArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusNextRow();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusNext",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: E.$Kj.and(e.$fVc, E.$Kj.or(e.$hVc, e.$gVc.toNegated())),
						primary: i.KeyCode.RightArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusNext();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.focusPrevious",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: E.$Kj.and(e.$fVc, E.$Kj.or(e.$hVc, e.$gVc.toNegated())),
						primary: i.KeyCode.LeftArrow,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.focusPrevious();
						},
					}),
					C.$TX.registerCommandAndKeybindingRule({
						id: "iconSelectBox.selectFocused",
						weight: C.KeybindingWeight.WorkbenchContrib,
						when: e.$fVc,
						primary: i.KeyCode.Enter,
						handler: () => {
							const r = m.getFocusedWidget();
							r && r.setSelection(r.getFocus()[0]);
						},
					});
			},
		),
		define(
			de[3752],
			he([1, 0, 7, 160, 1506, 149, 3, 72, 5, 106, 79, 1896]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jVc = void 0);
				const h = new E.$Y(() => {
					const n = (0, u.$_O)().getIcons(),
						g = new Set();
					return n.filter((o) =>
						o.id === w.$0j.blank.id ||
						!("fontCharacter" in o.defaults) ||
						g.has(o.defaults.fontCharacter)
							? !1
							: (g.add(o.defaults.fontCharacter), !0),
					);
				});
				let c = class extends C.$1c {
					constructor(g, p) {
						super(),
							(this.b = p),
							(this.a = g.createInstance(a.$iVc, {
								icons: h.value,
								inputBoxStyles: r.$wyb,
								showIconInfo: !0,
							}));
					}
					async pickIcons() {
						const g = new t.$pgb(486, 260);
						return new Promise((p) => {
							this.D(
								this.a.onDidSelect((f) => {
									p(f), this.a.dispose();
								}),
							),
								this.a.clearInput();
							const o = this.b.showHover(
								{
									content: this.a.domNode,
									target: (0, t.$Ngb)().body,
									position: { hoverPosition: i.HoverPosition.BELOW },
									persistence: { sticky: !0 },
									appearance: { showPointer: !0 },
								},
								!0,
							);
							o && this.D(o), this.a.layout(g), this.a.focus();
						});
					}
				};
				(e.$jVc = c), (e.$jVc = c = Ne([j(0, m.$Li), j(1, d.$Uyb)], c));
			},
		),
		define(
			de[133],
			he([1, 0, 28, 4, 5, 8, 9, 79, 14]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$68 =
						e.$58 =
						e.$48 =
						e.$38 =
						e.$28 =
						e.$18 =
						e.$Z8 =
						e.$Y8 =
						e.$X8 =
						e.$W8 =
						e.$U8 =
						e.$S8 =
						e.$Q8 =
						e.$P8 =
							void 0),
					(e.$R8 = r),
					(e.$T8 = u),
					(e.$V8 = a),
					(e.$P8 = (0, w.$Mi)("IUserDataProfileService")),
					(e.$Q8 = (0, w.$Mi)("IUserDataProfileManagementService"));
				function r(h) {
					const c = h;
					return !!(
						c &&
						typeof c == "object" &&
						((0, t.$sg)(c.settings) || typeof c.settings == "string") &&
						((0, t.$sg)(c.globalState) || typeof c.globalState == "string") &&
						((0, t.$sg)(c.extensions) || typeof c.extensions == "string")
					);
				}
				e.$S8 = "profile";
				function u(h, c) {
					return C.URI.from({
						scheme: c.urlProtocol,
						authority: e.$S8,
						path: h.startsWith("/") ? h : `/${h}`,
					});
				}
				e.$U8 = "profile-";
				function a(h) {
					return (
						h.authority === e.$S8 || new RegExp(`^${e.$U8}`).test(h.authority)
					);
				}
				(e.$W8 = (0, w.$Mi)("IUserDataProfileImportExportService")),
					(e.$X8 = (0, d.$$O)(
						"defaultProfile-icon",
						m.$ak.settings,
						(0, i.localize)(12961, null),
					)),
					(e.$Y8 = (0, i.localize2)(12963, "Profiles")),
					(e.$Z8 = { ...e.$Y8 }),
					(e.$18 = "code-profile"),
					(e.$28 = [
						{ name: (0, i.localize)(12962, null), extensions: [e.$18] },
					]),
					(e.$38 = new E.$5j("profiles.enabled", !0)),
					(e.$48 = new E.$5j("currentProfile", "")),
					(e.$58 = new E.$5j("isCurrentProfileTransient", !1)),
					(e.$68 = new E.$5j("hasProfiles", !1));
			},
		),
		define(
			de[3753],
			he([1, 0, 3, 197, 88, 101, 133]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qqc = void 0);
				let d = class extends t.$1c {
					constructor(r, u) {
						super(),
							(this.c = u),
							(this.b = this.D(new t.$0c())),
							(this.a = r.getProxy(w.$mbb.ExtHostProfileContentHandlers));
					}
					async $registerProfileContentHandler(r, u, a, h) {
						this.b.set(
							r,
							this.c.registerProfileContentHandler(r, {
								name: u,
								description: a,
								extensionId: h,
								saveProfile: async (c, n, g) => {
									const p = await this.a.$saveProfile(r, c, n, g);
									return p ? (0, i.$ji)(p) : null;
								},
								readProfile: async (c, n) => this.a.$readProfile(r, c, n),
							}),
						);
					}
					async $unregisterProfileContentHandler(r) {
						this.b.deleteAndDispose(r);
					}
				};
				(e.$Qqc = d),
					(e.$Qqc = d =
						Ne(
							[
								(0, E.$tmc)(w.$lbb.MainThreadProfileContentHandlers),
								j(1, C.$W8),
							],
							d,
						));
			},
		),
		define(
			de[3754],
			he([
				1, 0, 4, 119, 109, 62, 376, 3, 11, 133, 57, 1834, 40, 157, 87, 129, 5,
				99, 20, 8, 30, 55, 52, 21, 41, 9, 100, 179,
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
				var P, k;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const L = (0, p.$Mi)("ITroubleshootIssueService");
				var D;
				(function (R) {
					(R[(R.EXTENSIONS = 1)] = "EXTENSIONS"),
						(R[(R.WORKBENCH = 2)] = "WORKBENCH");
				})(D || (D = {}));
				class M {
					static fromJSON(O) {
						if (O)
							try {
								const B = JSON.parse(O);
								if (
									(B.stage === D.EXTENSIONS || B.stage === D.WORKBENCH) &&
									typeof B.profile == "string"
								)
									return new M(B.stage, B.profile);
							} catch {}
					}
					constructor(O, B) {
						(this.stage = O), (this.profile = B);
					}
				}
				let N = class extends d.$1c {
					static {
						P = this;
					}
					static {
						this.storageKey = "issueTroubleshootState";
					}
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X) {
						super(),
							(this.b = O),
							(this.f = B),
							(this.g = U),
							(this.h = z),
							(this.j = F),
							(this.m = x),
							(this.n = H),
							(this.q = q),
							(this.r = V),
							(this.s = G),
							(this.t = K),
							(this.u = J),
							(this.w = W),
							(this.y = X);
					}
					isActive() {
						return this.state !== void 0;
					}
					async start() {
						if (this.isActive()) throw new Error("invalid state");
						if (
							!(
								await this.j.confirm({
									message: (0, t.localize)(7249, null),
									detail: (0, t.localize)(7250, null, this.t.nameLong),
									primaryButton: (0, t.localize)(7251, null),
									custom: !0,
								})
							).confirmed
						)
							return;
						const B = this.b.currentProfile;
						await this.h.createTroubleshootProfile(),
							(this.state = new M(D.EXTENSIONS, B.id)),
							await this.resume();
					}
					async resume() {
						this.isActive() &&
							(this.state?.stage === D.EXTENSIONS &&
								!this.m.isActive &&
								(await this.z()),
							this.state?.stage === D.WORKBENCH && (await this.C()),
							await this.stop());
					}
					async stop() {
						if (!this.isActive()) return;
						this.a && (this.a.close(), (this.a = void 0)),
							this.m.isActive && (await this.m.reset());
						const O =
							this.f.profiles.find((B) => B.id === this.state?.profile) ??
							this.f.defaultProfile;
						(this.state = void 0), await this.g.switchProfile(O);
					}
					async z() {
						if (!(await this.q.getInstalled(w.ExtensionType.User)).length) {
							this.state = new M(D.WORKBENCH, this.state.profile);
							return;
						}
						const O = await this.G((0, t.localize)(7252, null));
						if (O === "good") {
							const B =
								this.f.profiles.find((U) => U.id === this.state.profile) ??
								this.f.defaultProfile;
							await this.F(B);
						}
						O === "bad" &&
							(this.state = new M(D.WORKBENCH, this.state.profile)),
							O === "stop" && (await this.stop());
					}
					async C() {
						await this.g.createAndEnterTransientProfile(), this.L(this.state);
						const O = await this.G((0, t.localize)(7253, null));
						O === "stop" && (await this.stop()),
							O === "good" && (await this.H((0, t.localize)(7254, null))),
							O === "bad" &&
								(await this.H((0, t.localize)(7255, null, this.t.nameLong)));
					}
					async F(O) {
						await this.g.switchProfile(O);
						const B = (await this.q.getInstalled(w.ExtensionType.User)).filter(
							(U) => this.r.isEnabled(U),
						);
						await this.m.start(B), await this.u.reload();
					}
					G(O) {
						return new Promise((B, U) => {
							const z = {
									label: (0, t.localize)(7256, null),
									run: () => B("good"),
								},
								F = { label: (0, t.localize)(7257, null), run: () => B("bad") },
								x = {
									label: (0, t.localize)(7258, null),
									run: () => B("stop"),
								};
							this.a = this.n.prompt(h.Severity.Info, O, [z, F, x], {
								sticky: !0,
								priority: h.NotificationPriority.URGENT,
							});
						});
					}
					async H(O) {
						let B = !1;
						if (this.t.quality === "stable") {
							const U = await this.I();
							if (U === "good") {
								await this.j.prompt({
									type: h.Severity.Info,
									message: (0, t.localize)(7259, null),
									detail: (0, t.localize)(7260, null, this.t.nameLong),
									custom: !0,
								});
								return;
							}
							if (U === "stop") {
								await this.stop();
								return;
							}
							U === "bad" && (B = !0);
						}
						await this.s.openReporter({
							issueBody: `> ${O} ${B ? `It is confirmed that the issue exists in ${this.t.nameLong} Insiders` : ""}`,
						});
					}
					async I() {
						return !(
							await this.j.confirm({
								type: "info",
								message: (0, t.localize)(7261, null),
								primaryButton: (0, t.localize)(7262, null, this.t.nameLong),
								cancelButton: (0, t.localize)(7263, null),
								detail: (0, t.localize)(7264, null, this.t.nameLong),
								custom: { disableCloseAction: !0 },
							})
						).confirmed ||
							!(await this.y.open(
								S.URI.parse("https://aka.ms/vscode-insiders"),
							))
							? void 0
							: (
									await this.j.prompt({
										type: "info",
										message: (0, t.localize)(7265, null),
										buttons: [
											{ label: (0, t.localize)(7266, null), run: () => "good" },
											{ label: (0, t.localize)(7267, null), run: () => "bad" },
										],
										cancelButton: {
											label: (0, t.localize)(7268, null),
											run: () => "stop",
										},
										detail: (0, t.localize)(7269, null, this.t.nameLong),
										custom: { disableCloseAction: !0 },
									})
								).result;
					}
					get state() {
						if (this.J === void 0) {
							const O = this.w.get(P.storageKey, $.StorageScope.PROFILE);
							this.J = M.fromJSON(O);
						}
						return this.J || void 0;
					}
					set state(O) {
						(this.J = O ?? null), this.L(O);
					}
					L(O) {
						O
							? this.w.store(
									P.storageKey,
									JSON.stringify(O),
									$.StorageScope.PROFILE,
									$.StorageTarget.MACHINE,
								)
							: this.w.remove(P.storageKey, $.StorageScope.PROFILE);
					}
				};
				N = P = Ne(
					[
						j(0, r.$P8),
						j(1, g.$Xl),
						j(2, r.$Q8),
						j(3, r.$W8),
						j(4, u.$GO),
						j(5, a.$xwc),
						j(6, h.$4N),
						j(7, i.$Hp),
						j(8, c.$IQb),
						j(9, C.$7Xb),
						j(10, E.$Bk),
						j(11, n.$asb),
						j(12, $.$lq),
						j(13, v.$7rb),
					],
					N,
				);
				let A = class extends d.$1c {
					static {
						k = this;
					}
					static {
						this.ctxIsTroubleshootActive = new b.$5j(
							"isIssueTroubleshootActive",
							!1,
						);
					}
					constructor(O, B, U) {
						super(),
							(this.a = O),
							(this.b = B),
							this.f(),
							B.isActive() && B.resume(),
							this.D(
								U.onDidChangeValue(
									$.StorageScope.PROFILE,
									N.storageKey,
									this.D(new d.$Zc()),
								)(() => {
									this.f();
								}),
							);
					}
					f() {
						k.ctxIsTroubleshootActive.bindTo(this.a).set(this.b.isActive());
					}
				};
				(A = k = Ne([j(0, b.$6j), j(1, L), j(2, $.$lq)], A)),
					s.$Io
						.as(l.Extensions.Workbench)
						.registerWorkbenchContribution(A, y.LifecyclePhase.Restored),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "workbench.action.troubleshootIssue.start",
									title: (0, t.localize2)(7270, "Troubleshoot Issue..."),
									category: o.$ck.Help,
									f1: !0,
									precondition: b.$Kj.and(
										A.ctxIsTroubleshootActive.negate(),
										I.$CPb.isEqualTo(""),
										T.$7Lb.negate(),
									),
								});
							}
							run(O) {
								return O.get(L).start();
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "workbench.action.troubleshootIssue.stop",
									title: (0, t.localize2)(7271, "Stop Troubleshoot Issue"),
									category: o.$ck.Help,
									f1: !0,
									precondition: A.ctxIsTroubleshootActive,
								});
							}
							async run(R) {
								return R.get(L).stop();
							}
						},
					),
					(0, f.$lK)(L, N, f.InstantiationType.Delayed);
			},
		),
		define(
			de[3755],
			he([
				1, 0, 4, 11, 376, 3067, 62, 30, 55, 52, 99, 10, 348, 3310, 20, 3573, 81,
				3449, 1736, 3754,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, n.$lK)(w.$7Xb, g.$cgd, n.InstantiationType.Delayed),
					(0, n.$lK)(w.$6Xb, o.$ggd, n.InstantiationType.Delayed);
				let f = class extends E.$y6c {
					constructor(l, y) {
						super(l, y), l.reportIssueUrl && this.D((0, i.$4X)(b));
						let $;
						const v = () => {
							$ = d.$Io
								.as(h.$1r.Quickaccess)
								.registerQuickAccessProvider({
									ctor: c.$bgd,
									prefix: c.$bgd.PREFIX,
									contextKey: "inReportIssuePicker",
									placeholder: (0, t.localize)(7273, null),
									helpEntries: [
										{
											description: (0, t.localize)(7274, null),
											commandId: "workbench.action.openIssueReporter",
										},
									],
								});
						};
						d.$Io
							.as(p.$No.Configuration)
							.registerConfiguration({
								properties: {
									"issueReporter.experimental.auxWindow": {
										type: "boolean",
										default: !0,
										description:
											"Enable the new experimental issue reporter in electron.",
									},
								},
							}),
							this.D(
								y.onDidChangeConfiguration((S) => {
									!y.getValue("extensions.experimental.issueQuickAccess") && $
										? ($.dispose(), ($ = void 0))
										: $ || v();
								}),
							),
							y.getValue("extensions.experimental.issueQuickAccess") && v();
					}
				};
				(f = Ne([j(0, C.$Bk), j(1, a.$gj)], f)),
					d.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(f, r.LifecyclePhase.Restored);
				class b extends i.$3X {
					static {
						this.ID = "workbench.action.reportPerformanceIssueUsingReporter";
					}
					constructor() {
						super({
							id: b.ID,
							title: (0, t.localize2)(7275, "Report Performance Issue..."),
							category: u.$ck.Help,
							f1: !0,
						});
					}
					async run(l) {
						return l
							.get(w.$7Xb)
							.openReporter({ issueType: w.IssueType.PerformanceIssue });
					}
				}
			},
		),
		define(
			de[1897],
			he([
				1, 0, 9, 11, 22, 19, 151, 76, 58, 21, 119, 45, 782, 187, 62, 33, 772,
				137, 681, 133, 256, 256, 34, 47,
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
					(e.$fed = e.$eed = void 0),
					(e.$bed = S),
					(e.$ced = I),
					(e.$ded = P);
				const v = [
					{ id: "github.copilot", name: "GH Copilot" },
					{ id: "TabNine.tabnine-vscode", name: "TabNine" },
					{ id: "sourcegraph.cody-ai", name: "Cody" },
					{ id: "Blackboxapp.blackbox", name: "Blackbox" },
					{ id: "Continue.continue", name: "Continue" },
					{ id: "Codeium.codeium", name: "Codeium" },
					{ id: "supermaven.supermaven", name: "Supermaven" },
				];
				(0, i.$4X)(
					class extends i.$3X {
						constructor() {
							super({
								id: m.$NX,
								title: {
									value: "Disable Autocompletes",
									original: "Disable Autocompletes",
								},
								f1: !1,
							});
						}
						async run(N) {
							const A = N.get(u.$Hp),
								R = N.get(u.$Kp),
								O = N.get(y.$ik);
							for (const B of v)
								try {
									const { id: U } = B,
										z = await A.getInstalled().then((F) =>
											F.find((x) => x.identifier.id === U),
										);
									z &&
										(await R.disableExtension(z.identifier),
										O.info(`Disabled extension: ${U}`));
								} catch (U) {
									O.error(`Failed to disable extension: ${B.id}`, U);
								}
						}
					},
				);
				async function S(M, N) {
					const A = t.URI.joinPath(N.userHome, ".vscode");
					try {
						if ((await M?.resolve(A)).children?.length) return !0;
					} catch {}
					return !1;
				}
				async function I(M, N, A) {
					const R = t.URI.joinPath(A.userHome, N.dataFolderName, "extensions");
					try {
						const O = await M?.resolve(R);
						if (O.children)
							return (
								console.log("length of children", O.children.length),
								O.children.length
							);
					} catch {}
					return 0;
				}
				function T(M) {
					const N = M.get(`vscode/${u.$Ip}`, r.StorageScope.APPLICATION);
					if (!N) return [];
					try {
						const A = JSON.parse(N);
						if (!Array.isArray(A)) return [];
						const R = [];
						for (const O of A)
							"id" in O && typeof O.id == "string" && R.push(O.id);
						return R;
					} catch (A) {
						return console.error(A), [];
					}
				}
				async function P(M, N, A) {
					const R = t.URI.joinPath(N.userHome, ".vscode", "extensions"),
						O = T(A);
					let B = [];
					try {
						const z = (await M.resolve(R)).children
							?.map((F) => {
								const x = F.name.toLowerCase(),
									H = v.find((q) => x.includes(q.id.toLowerCase()));
								return H && !O.includes(x) ? H.name : null;
							})
							.filter((F) => F !== null);
						z && (B = v.filter((F) => z.includes(F.name)).map((F) => F.name));
					} catch (U) {
						return (
							console.error(
								"Error checking for VSCode and Copilot extensions:",
								U,
							),
							[]
						);
					}
					return B;
				}
				async function k(M, N, A, R, O, B, U, z) {
					try {
						N.setNonPersistentStorage(
							"shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan",
							Date.now() + 10 * 60 * 1e3,
						);
						try {
							const Y = T(R);
							let ie = [];
							try {
								ie = (0, c.$do)(R.get(u.$Ip, r.StorageScope.APPLICATION, "[]"));
							} catch (_) {
								console.error(_);
							}
							const ne = new Set();
							Y.forEach((_) => ne.add(_)),
								ie.forEach((_) => "id" in _ && ne.add(_.id));
							const ee = Array.from(ne).map((_) => ({ id: _ }));
							R.store(
								u.$Ip,
								JSON.stringify(ee),
								r.StorageScope.APPLICATION,
								r.StorageTarget.USER,
							);
						} catch (Y) {
							console.error(Y);
						}
						const F = t.URI.joinPath(A.userHome, ".vscode", "extensions"),
							x = t.URI.file(A.extensionsPath);
						let H = [];
						try {
							const Y = await M.readFile(t.URI.joinPath(F, "extensions.json"));
							Y && (H = (0, c.$do)(Y.value.toString()));
						} catch (Y) {
							console.log(Y);
						}
						let q = [];
						try {
							const Y = await M?.readFile(t.URI.joinPath(x, "extensions.json"));
							Y && (q = (0, c.$do)(Y.value.toString()));
						} catch (Y) {
							console.log(Y);
						}
						const V = new Set();
						for (const Y of q) {
							const ie = Y.identifier.id;
							V.add(ie);
						}
						const G = (Y, ie) => {
								try {
									return (0, E.$nh)(ie ?? F, Y.relativeLocation);
								} catch (ne) {
									console.log(ne);
								}
								try {
									return t.URI.revive(Y.location);
								} catch (ne) {
									console.log(ne);
								}
							},
							K = async (Y) => {
								if (!Y) return !1;
								const ie = G(Y, x);
								try {
									if (ie && (await M.exists(ie))) return !0;
								} catch (ne) {
									console.log(ne);
								}
								return !1;
							},
							J = await H.reduce(
								async (Y, ie) =>
									!V.has(ie.identifier.id) ||
									!(await K(
										q.filter((ee) => ee.identifier.id === ie.identifier.id)[0],
									))
										? (await Y).concat(ie)
										: Y,
								Promise.resolve([]),
							),
							W = [],
							X = [];
						try {
							for (const Y of J)
								try {
									const ie = G(Y);
									if (ie === void 0) {
										console.log(
											"skipping extension because cannot find it on disk: ",
											Y.identifier.id,
										);
										continue;
									}
									const ne = async () => {
										const ee = Y.identifier.id;
										if (h.$Mq.some((te) => te === ee)) return;
										let _ = !1;
										if (h.$Iq.some((te) => ee === te))
											try {
												const te = await B.getExtensions(
													[{ id: ee }],
													g.CancellationToken.None,
												);
												if (te && te.length > 0) {
													const Q = te[0];
													await O.installFromGallery(Q), (_ = !0);
												}
											} catch (te) {
												console.log(te);
											}
										try {
											const te = (0, E.$nh)(ie, "package.json"),
												Q = await M.readFile(te);
											if (Q) {
												const se = (0, c.$do)(Q.value.toString()).engines
													?.vscode;
												if (se && !(0, p.$yq)(se, U.vscodeVersion, U.date)) {
													const re = await B.getExtensions(
														[{ id: ee }],
														g.CancellationToken.None,
													);
													if (re && re.length > 0) {
														const le = re[0];
														await O.installFromGallery(le), (_ = !0);
													}
												}
											}
										} catch (te) {
											console.log(te);
										}
										if (
											!h.$Nq.some((te) => te === ee) &&
											!(
												z !== !0 &&
												v.some((te) =>
													ee.toLowerCase().includes(te.id.toLowerCase()),
												)
											) &&
											!_
										) {
											const te = (0, E.$nh)(x, Y.relativeLocation);
											await M.copy(ie, te, !0), (Y.location = te), X.push(Y);
										}
									};
									W.push(ne());
								} catch (ie) {
									console.error(ie);
								}
							await Promise.all(W);
						} catch (Y) {
							console.error(Y);
						}
						try {
							const Y = await M?.readFile(t.URI.joinPath(x, "extensions.json"));
							Y && (q = (0, c.$do)(Y.value.toString()));
						} catch (Y) {
							console.log(Y);
						}
						await M.writeFile(
							t.URI.joinPath(x, "extensions.json"),
							d.$Te.wrap(
								new TextEncoder().encode(JSON.stringify([...q, ...X])),
							),
						);
					} catch (F) {
						console.error(F);
					} finally {
						N.setNonPersistentStorage(
							"shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan",
							Date.now() + 20 * 1e3,
						);
					}
				}
				class L extends i.$3X {
					static {
						this.LABEL = "Import VS Code Extensions and Settings";
					}
					constructor() {
						super({
							id: m.$9W,
							title: { value: L.LABEL, original: L.LABEL },
							f1: !0,
						});
					}
					async run(N, A, R, ...O) {
						const B = N.get(w.$ll),
							U = N.get(C.$ucd),
							z = N.get(a.$0zb),
							F = N.get(r.$lq),
							x = N.get(u.$Hp),
							H = N.get(u.$Ep),
							q = N.get(n.$Bk),
							V = N.get(y.$ik),
							G = N.get(f.$0wc),
							K = N.get(b.$P8),
							J = N.get(s.$cRb),
							W = N.get(o.$jfc);
						z.setApplicationUserPersistentStorage("haveNotImportedFromVSC", !1),
							z.setApplicationUserPersistentStorage(
								"cppHasLoadedConfigFromCopilot",
								!1,
							);
						async function X(ie, ne) {
							const ee = ie.appSettingsHome,
								_ = (0, E.$nh)(
									(0, E.$nh)((0, E.$mh)((0, E.$mh)(ee)), "Code"),
									"User",
								),
								te = (0, E.$nh)(_, "workspaceStorage"),
								Q = (0, E.$nh)(ee, "workspaceStorage");
							try {
								const re = await ne.resolve(te, { resolveMetadata: !0 });
								if (re.children)
									for (const le of re.children) {
										const oe = (0, E.$nh)(Q, (0, E.$kh)(le.resource));
										le.isDirectory && (await ne.copy(le.resource, oe, !1));
									}
							} catch (re) {
								console.error(re);
							}
							try {
								const re = (0, E.$nh)(_, "globalStorage"),
									oe = (
										await G.readStorageData({
											...K.currentProfile,
											id: (0, $.$9g)(),
											isDefault: !1,
											settingsResource: (0, E.$nh)(_, "settings.json"),
											keybindingsResource: (0, E.$nh)(_, "keybindings.json"),
											globalStorageHome: re,
											extensionsResource: t.URI.joinPath(
												ie.userHome,
												".vscode",
												"extensions",
											),
											location: _,
										})
									).get("history.recentlyOpenedPathsList");
								if (oe && oe.value) {
									const ae = JSON.parse(oe.value),
										pe = await (0, l.$kRb)(ae, V);
									J.addRecentlyOpened(pe.workspaces);
								}
							} catch (re) {
								console.error(re);
							}
							const Z = (0, E.$nh)(_, "settings.json"),
								se = (0, E.$nh)(_, "keybindings.json");
							if (await ne?.exists(Z)) {
								const re = await ne?.readFile(Z);
								let le = re.value.toString();
								try {
									const ae = (0, c.$do)(re.value.toString()),
										pe = Object.keys(ae).reduce(($e, ye) => {
											if (
												(ye !== "workbench.colorTheme" ||
													(typeof ae[ye] == "string" &&
														ae[ye].trim() !== "Default Dark+" &&
														ae[ye].trim() !== "Visual Studio Dark")) &&
												ye !== "workbench.layoutControl.enabled"
											) {
												if (
													ye === "workbench.activityBar.location" &&
													ae[ye] === "top"
												)
													return $e;
												$e[ye] = ae[ye];
											}
											return $e;
										}, {});
									le = JSON.stringify(pe, null, 4);
								} catch (ae) {
									console.error(ae),
										console.log("^ Could not parse settings json");
								}
								const oe = (0, E.$nh)(ee, "settings.json");
								await ne?.writeFile(
									oe,
									d.$Te.wrap(new TextEncoder().encode(le)),
								);
							}
							if (await ne?.exists(se)) {
								const re = (0, E.$nh)(ee, "keybindings.json");
								await ne?.copy(se, re, !0);
							}
							return !0;
						}
						const Y = [
							X(U, B).catch((ie) => {
								console.error(ie, "Failed to import settings");
							}),
						];
						R !== !0 &&
							Y.push(
								k(B, z, U, F, x, H, q, A).catch((ie) => {
									console.error(ie, "Failed to import extensions");
								}),
							),
							await Promise.all(Y);
						try {
							W.loadCopilotPlusPlusConfigFromGithubCopilot();
						} catch {}
					}
				}
				(e.$eed = L), (0, i.$4X)(L);
				class D extends i.$3X {
					static {
						this.LABEL = "Cpp After Onboarding";
					}
					constructor() {
						super({
							id: m.$0W,
							title: { value: D.LABEL, original: D.LABEL },
							f1: !1,
						});
					}
					async run(N, ...A) {
						N.get(o.$jfc).forceApplyCppConfig();
					}
				}
				(e.$fed = D), (0, i.$4X)(D);
			},
		),
		define(
			de[3756],
			he([
				1, 0, 4, 15, 94, 3, 39, 5, 17, 46, 254, 3124, 1804, 187, 1825, 35, 307,
				64, 918, 28, 19, 133, 131,
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
			) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hEc = void 0),
					(t = mt(t));
				const v = t.localize(8371, null);
				let S = class extends E.$1c {
					constructor(k, L, D) {
						super(),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.c = this.D(new E.$2c())),
							(this.f = this.D(this.h.createInstance(h.$gBc, this.g))),
							this.D(this.g.onDidChangeModel((M) => this.m())),
							this.m();
					}
					m() {
						this.c.value = T(this.g, this.j)
							? this.h.createInstance(I, this.g)
							: void 0;
					}
					showDefineKeybindingWidget() {
						T(this.g, this.j) && this.f.start().then((k) => this.n(k));
					}
					n(k) {
						if ((this.g.focus(), k && this.g.hasModel())) {
							new RegExp(/\\/g).test(k) && (k = k.slice(0, -1) + "\\\\");
							let M = [
								"{",
								'	"key": ' + JSON.stringify(k) + ",",
								'	"command": "${1:commandId}",',
								'	"when": "${2:editorTextFocus}"',
								"}$0",
							].join(`
`);
							const N = a.$dEc.insertSnippet(
								this.g.getModel(),
								this.g.getPosition(),
							);
							(M = N.prepend + M + N.append),
								this.g.setPosition(N.position),
								u.$aDb
									.get(this.g)
									?.insert(M, { overwriteBefore: 0, overwriteAfter: 0 });
						}
					}
				};
				S = Ne([j(1, d.$Li), j(2, l.$P8)], S);
				let I = ($ = class extends E.$1c {
					constructor(k, L) {
						super(),
							(this.g = k),
							(this.h = L),
							(this.f = this.g.createDecorationsCollection()),
							(this.c = this.D(new i.$Yh(() => this.j(), 500)));
						const D = (0, b.$wg)(this.g.getModel());
						this.D(D.onDidChangeContent(() => this.c.schedule())),
							this.D(this.h.onDidUpdateKeybindings(() => this.c.schedule())),
							this.D({
								dispose: () => {
									this.f.clear(), this.c.cancel();
								},
							}),
							this.c.schedule();
					}
					j() {
						const k = (0, b.$wg)(this.g.getModel()),
							L = [],
							D = (0, c.$eo)(k.getValue());
						if (D && Array.isArray(D.children))
							for (let M = 0, N = D.children.length; M < N; M++) {
								const A = D.children[M],
									R = this.m(k, A);
								R !== null && L.push(R);
							}
						this.f.set(L);
					}
					m(k, L) {
						if (!Array.isArray(L.children)) return null;
						for (let D = 0, M = L.children.length; D < M; D++) {
							const N = L.children[D];
							if (
								N.type !== "property" ||
								!Array.isArray(N.children) ||
								N.children.length !== 2 ||
								N.children[0].value !== "key"
							)
								continue;
							const R = N.children[1];
							if (R.type !== "string") continue;
							const O = this.h.resolveUserBinding(R.value);
							if (O.length === 0) return this.n(!0, null, null, k, R);
							const B = O[0];
							let U = null;
							if (
								(B instanceof n.$fEc && (U = B.getUSLabel()), !B.isWYSIWYG())
							) {
								const F = B.getLabel();
								return typeof F == "string" &&
									R.value.toLowerCase() === F.toLowerCase()
									? null
									: this.n(!1, B.getLabel(), U, k, R);
							}
							if (/abnt_|oem_/.test(R.value))
								return this.n(!1, B.getLabel(), U, k, R);
							const z = B.getUserSettingsLabel();
							return typeof z == "string" &&
								!$._userSettingsFuzzyEquals(R.value, z)
								? this.n(!1, B.getLabel(), U, k, R)
								: null;
						}
						return null;
					}
					static _userSettingsFuzzyEquals(k, L) {
						if (
							((k = k.trim().toLowerCase()),
							(L = L.trim().toLowerCase()),
							k === L)
						)
							return !0;
						const D = f.$Xpb.parseKeybinding(k),
							M = f.$Xpb.parseKeybinding(L);
						return D === null && M === null ? !0 : !D || !M ? !1 : D.equals(M);
					}
					n(k, L, D, M, N) {
						let A, R, O;
						k
							? ((A = new w.$cl().appendText(v)),
								(R = "keybindingError"),
								(O = (0, g.$jP)(p.$9T)))
							: (D && L !== D
									? (A = new w.$cl(t.localize(8372, null, L, D)))
									: (A = new w.$cl(t.localize(8373, null, L))),
								(R = "keybindingInfo"),
								(O = (0, g.$jP)(p.$$T)));
						const B = M.getPositionAt(N.offset),
							U = M.getPositionAt(N.offset + N.length);
						return {
							range: new m.$iL(B.lineNumber, B.column, U.lineNumber, U.column),
							options: {
								description: "keybindings-widget",
								stickiness:
									o.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: R,
								hoverMessage: A,
								overviewRuler: {
									color: O,
									position: o.OverviewRulerLane.Right,
								},
							},
						};
					}
				});
				(e.$hEc = I), (e.$hEc = I = $ = Ne([j(1, C.$uZ)], I));
				function T(P, k) {
					const L = P.getModel();
					return L
						? (0, s.$gh)(L.uri, k.currentProfile.keybindingsResource)
						: !1;
				}
				(0, r.$qtb)(
					y.$8Z,
					S,
					r.EditorContributionInstantiation.AfterFirstRender,
				);
			},
		),
		define(
			de[3757],
			he([
				1, 0, 7, 50, 15, 6, 3, 59, 19, 26, 56, 38, 48, 17, 98, 64, 122, 69, 291,
				4, 10, 81, 49, 5, 90, 30, 68, 129, 25, 174, 824, 612, 1293, 261, 78,
				131, 838, 133,
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
			) {
				"use strict";
				var U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rCc = e.$qCc = void 0),
					(n = mt(n)),
					(b = mt(b));
				let z = class extends C.$1c {
					constructor(K, J, W, X, Y) {
						super(),
							(this.h = K),
							(this.preferencesModel = J),
							(this.j = W),
							(this.m = X),
							(this.n = Y),
							(this.c = new w.$Jh(200)),
							(this.a = this.D(Y.createInstance(H, K))),
							(this.b = this.D(
								this.n.createInstance(x, this.h, this.preferencesModel, this.a),
							)),
							this.D(
								this.b.onUpdateSetting(({ key: ie, value: ne, source: ee }) =>
									this.updatePreference(ie, ne, ee),
								),
							),
							this.D(
								this.h
									.getModel()
									.onDidChangeContent(() => this.c.trigger(() => this.q())),
							),
							(this.g = this.D(Y.createInstance(q, K, J)));
					}
					render() {
						this.b.render(this.preferencesModel.settingsGroups, this.f),
							this.g.render();
					}
					updatePreference(K, J, W) {
						const X = W.overrideOf ? (0, l.$Yo)(W.overrideOf.key) : null,
							Y = this.preferencesModel.uri;
						this.m
							.updateValue(
								K,
								J,
								{ overrideIdentifiers: X, resource: Y },
								this.preferencesModel.configurationTarget,
							)
							.then(() => this.r(W));
					}
					q() {
						this.h.hasModel() && this.render();
					}
					r(K) {
						this.h.focus(),
							(K = this.t(K)),
							K && (this.h.setSelection(K.valueRange), this.a.highlight(K, !0));
					}
					t(K) {
						const { key: J, overrideOf: W } = K;
						if (W) {
							const X = this.t(W);
							for (const Y of X.overrides) if (Y.key === J) return Y;
							return;
						}
						return this.preferencesModel.getPreference(J);
					}
					focusPreference(K) {
						const J = this.t(K);
						J
							? (this.a.highlight(J, !0),
								this.h.setPosition({
									lineNumber: J.keyRange.startLineNumber,
									column: J.keyRange.startColumn,
								}))
							: this.a.clear(!0);
					}
					clearFocus(K) {
						this.a.clear(!0);
					}
					editPreference(K) {
						const J = this.t(K);
						return !!(J && this.b.activateOnSetting(J));
					}
				};
				(e.$qCc = z),
					(e.$qCc = z = Ne([j(2, R.$7Z), j(3, s.$gj), j(4, $.$Li)], z));
				let F = class extends z {
					constructor(K, J, W, X, Y) {
						super(K, J, W, X, Y), (this.u = this.D(Y.createInstance(V, K, J)));
					}
					render() {
						super.render(), this.u.render();
					}
				};
				(e.$rCc = F),
					(e.$rCc = F = Ne([j(2, R.$7Z), j(3, s.$gj), j(4, $.$Li)], F));
				let x = class extends C.$1c {
					constructor(K, J, W, X, Y, ie) {
						super(),
							(this.h = K),
							(this.j = J),
							(this.m = W),
							(this.n = X),
							(this.q = Y),
							(this.r = ie),
							(this.c = []),
							(this.g = new E.$re()),
							(this.onUpdateSetting = this.g.event),
							(this.a = this.D(this.q.createInstance(M.$dBc, K))),
							(this.b = this.D(this.q.createInstance(M.$dBc, K))),
							(this.f = new w.$Jh(75)),
							this.D(this.a.onClick((ne) => this.M(this.a, ne))),
							this.D(this.b.onClick((ne) => this.M(this.b, ne))),
							this.D(this.h.onDidChangeCursorPosition((ne) => this.w(ne))),
							this.D(this.h.onMouseMove((ne) => this.z(ne))),
							this.D(this.h.onDidChangeConfiguration(() => this.u()));
					}
					render(K, J) {
						this.a.hide(),
							this.b.hide(),
							(this.c = K),
							(this.associatedPreferencesModel = J);
						const W = this.I(this.h.getPosition().lineNumber);
						W.length && this.G(this.a, W);
					}
					t() {
						return this.j instanceof O.$2Z;
					}
					u() {
						this.h.getOption(a.EditorOption.glyphMargin) ||
							(this.a.hide(), this.b.hide());
					}
					w(K) {
						this.b.hide();
						const J = this.I(K.position.lineNumber);
						J.length ? this.G(this.a, J) : this.a.hide();
					}
					z(K) {
						const J = this.C(K);
						if (J) {
							this.L(J);
							return;
						}
						this.m.clear(), this.f.trigger(() => this.F(K));
					}
					C(K) {
						if (K.target.type === u.MouseTargetType.GUTTER_GLYPH_MARGIN) {
							const J = K.target.position.lineNumber;
							if (this.b.getLine() === J && this.b.isVisible()) return this.b;
							if (this.a.getLine() === J && this.a.isVisible()) return this.a;
						}
					}
					F(K) {
						const J = K.target.position
							? this.I(K.target.position.lineNumber)
							: null;
						J && J.length ? this.G(this.b, J) : this.b.hide();
					}
					G(K, J) {
						const W = J[0].valueRange.startLineNumber;
						this.h.getOption(a.EditorOption.glyphMargin) &&
							this.H(W) &&
							(K.show(W, b.localize(8450, null), J),
							(K === this.a ? this.b : this.a).hide());
					}
					H(K) {
						const J = this.h.getLineDecorations(K);
						if (J) {
							for (const { options: W } of J)
								if (
									W.glyphMarginClassName &&
									W.glyphMarginClassName.indexOf(
										r.ThemeIcon.asClassName(D.$7Ac),
									) === -1
								)
									return !1;
						}
						return !0;
					}
					I(K) {
						const J = this.O();
						return this.J(K).filter((W) => {
							const X = J[W.key];
							if (X) {
								if (X.policy && this.n.inspect(W.key).policyValue !== void 0)
									return !1;
								if (this.t()) return W.key !== "launch";
								if (
									(X.type === "boolean" || X.enum) &&
									(this.j.configurationTarget !==
										s.ConfigurationTarget.WORKSPACE_FOLDER ||
										X.scope === l.ConfigurationScope.RESOURCE ||
										X.scope === l.ConfigurationScope.LANGUAGE_OVERRIDABLE)
								)
									return !0;
							}
							return !1;
						});
					}
					J(K) {
						let J = 0;
						const W = [];
						for (const X of this.c) {
							if (X.range.startLineNumber > K) break;
							if (K >= X.range.startLineNumber && K <= X.range.endLineNumber)
								for (const Y of X.sections)
									for (const ie of Y.settings) {
										if (ie.range.startLineNumber > K) break;
										if (
											K >= ie.range.startLineNumber &&
											K <= ie.range.endLineNumber
										)
											if (!this.t() && ie.overrides.length)
												for (const ne of ie.overrides)
													K >= ne.range.startLineNumber &&
														K <= ne.range.endLineNumber &&
														W.push({ ...ne, index: J, groupId: X.id });
											else W.push({ ...ie, index: J, groupId: X.id });
										J++;
									}
						}
						return W;
					}
					L(K) {
						this.m.highlight(K.preferences[0]);
					}
					M(K, J) {
						t.$ahb.stop(J.event, !0);
						const W =
							this.I(K.getLine()).length === 1
								? this.P(K.preferences[0], this.O()[K.preferences[0].key])
								: K.preferences.map(
										(X) =>
											new i.$uj(
												`preferences.submenu.${X.key}`,
												X.key,
												this.P(X, this.O()[X.key]),
											),
									);
						this.r.showContextMenu({
							getAnchor: () => J.event,
							getActions: () => W,
						});
					}
					activateOnSetting(K) {
						const J = K.keyRange.startLineNumber,
							W = this.I(J);
						if (!W.length) return !1;
						this.b.show(J, "", W);
						const X = this.P(
							this.b.preferences[0],
							this.O()[this.b.preferences[0].key],
						);
						return (
							this.r.showContextMenu({
								getAnchor: () => this.N(new h.$hL(J, 1)),
								getActions: () => X,
							}),
							!0
						);
					}
					N(K) {
						const J = this.h.getScrolledVisiblePosition(K),
							W = (0, t.$tgb)(this.h.getDomNode()),
							X = W.left + J.left,
							Y = W.top + J.top + J.height;
						return { x: X, y: Y + 10 };
					}
					O() {
						return S.$Io.as(l.$No.Configuration).getConfigurationProperties();
					}
					P(K, J) {
						return J.type === "boolean"
							? [
									{
										id: "truthyValue",
										label: "true",
										tooltip: "true",
										enabled: !0,
										run: () => this.R(K.key, !0, K),
										class: void 0,
									},
									{
										id: "falsyValue",
										label: "false",
										tooltip: "false",
										enabled: !0,
										run: () => this.R(K.key, !1, K),
										class: void 0,
									},
								]
							: J.enum
								? J.enum.map((W) => ({
										id: W,
										label: JSON.stringify(W),
										tooltip: JSON.stringify(W),
										enabled: !0,
										run: () => this.R(K.key, W, K),
										class: void 0,
									}))
								: this.Q(K);
					}
					Q(K) {
						if (this.t()) {
							const J = this.associatedPreferencesModel.getPreference(K.key);
							return [
								{
									id: "setDefaultValue",
									label: J ? b.localize(8451, null) : b.localize(8452, null),
									tooltip: J ? b.localize(8453, null) : b.localize(8454, null),
									enabled: !0,
									run: () => this.R(K.key, K.value, K),
									class: void 0,
								},
							];
						}
						return [];
					}
					R(K, J, W) {
						this.g.fire({ key: K, value: J, source: W });
					}
				};
				x = Ne([j(3, s.$gj), j(4, $.$Li), j(5, y.$Xxb)], x);
				let H = class extends C.$1c {
					constructor(K, J) {
						super(),
							(this.c = K),
							(this.a = this.D(J.createInstance(L.$u4b))),
							(this.b = this.D(J.createInstance(L.$u4b)));
					}
					highlight(K, J = !1) {
						this.b.removeHighlightRange(),
							this.a.removeHighlightRange(),
							(J ? this.a : this.b).highlightRange(
								{ range: K.valueRange, resource: this.c.getModel().uri },
								this.c,
							),
							this.c.revealLineInCenterIfOutsideViewport(
								K.valueRange.startLineNumber,
								n.ScrollType.Smooth,
							);
					}
					clear(K = !1) {
						this.b.removeHighlightRange(), K && this.a.removeHighlightRange();
					}
				};
				H = Ne([j(1, $.$Li)], H);
				let q = class extends C.$1c {
					constructor(K, J, W, X, Y, ie, ne, ee, _, te) {
						super(),
							(this.c = K),
							(this.f = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.m = ie),
							(this.n = ne),
							(this.q = _),
							(this.r = te),
							(this.a = new w.$Jh(200)),
							(this.b = new d.$Gc((Q) => this.n.extUri.getComparisonKey(Q))),
							this.D(this.c.getModel().onDidChangeContent(() => this.t())),
							this.D(
								E.Event.filter(
									this.j.onDidChangeConfiguration,
									(Q) => Q.source === s.ConfigurationTarget.DEFAULT,
								)(() => this.t()),
							),
							this.D(
								ee.codeActionProvider.register({ pattern: J.uri.path }, this),
							),
							this.D(_.onDidChangeCurrentProfile(() => this.t()));
					}
					t() {
						this.a.trigger(() => this.render());
					}
					render() {
						this.b.clear();
						const K = this.u();
						K.length
							? this.g.changeOne("UnsupportedSettingsRenderer", this.f.uri, K)
							: this.g.remove("UnsupportedSettingsRenderer", [this.f.uri]);
					}
					async provideCodeActions(K, J, W, X) {
						const Y = [],
							ie = this.b.get(K.uri);
						if (ie)
							for (const [ne, ee] of ie) ne.containsRange(J) && Y.push(...ee);
						return { actions: Y, dispose: () => {} };
					}
					u() {
						const K = [],
							J = S.$Io.as(l.$No.Configuration).getConfigurationProperties();
						for (const W of this.f.settingsGroups)
							for (const X of W.sections)
								for (const Y of X.settings) {
									if (l.$Xo.test(Y.key)) {
										Y.overrides && this.z(Y.overrides, J, K);
										continue;
									}
									const ie = J[Y.key];
									if (ie) {
										if (this.w(Y, ie, K)) continue;
										switch (this.f.configurationTarget) {
											case s.ConfigurationTarget.USER_LOCAL:
												this.C(Y, ie, K);
												break;
											case s.ConfigurationTarget.USER_REMOTE:
												this.F(Y, ie, K);
												break;
											case s.ConfigurationTarget.WORKSPACE:
												this.G(Y, ie, K);
												break;
											case s.ConfigurationTarget.WORKSPACE_FOLDER:
												this.H(Y, ie, K);
												break;
										}
									} else K.push(this.M(Y));
								}
						return K;
					}
					w(K, J, W) {
						return !J.policy ||
							this.j.inspect(K.key).policyValue === void 0 ||
							this.f.configurationTarget === s.ConfigurationTarget.DEFAULT
							? !1
							: (W.push({
									severity: v.MarkerSeverity.Hint,
									tags: [v.MarkerTag.Unnecessary],
									...K.range,
									message: b.localize(8455, null),
								}),
								!0);
					}
					z(K, J, W) {
						for (const X of K || []) {
							const Y = J[X.key];
							Y
								? Y.scope !== l.ConfigurationScope.LANGUAGE_OVERRIDABLE &&
									W.push({
										severity: v.MarkerSeverity.Hint,
										tags: [v.MarkerTag.Unnecessary],
										...X.range,
										message: b.localize(8456, null),
									})
								: W.push(this.M(X));
						}
					}
					C(K, J, W) {
						!this.q.currentProfile.isDefault &&
							!this.q.currentProfile.useDefaultFlags?.settings &&
							((0, m.$gh)(this.r.defaultProfile.settingsResource, this.f.uri) &&
							!this.j.isSettingAppliedForAllProfiles(K.key)
								? W.push({
										severity: v.MarkerSeverity.Hint,
										tags: [v.MarkerTag.Unnecessary],
										...K.range,
										message: b.localize(8457, null),
									})
								: (0, m.$gh)(
										this.q.currentProfile.settingsResource,
										this.f.uri,
									) &&
									(J.scope === l.ConfigurationScope.APPLICATION
										? W.push(this.I(K))
										: this.j.isSettingAppliedForAllProfiles(K.key) &&
											W.push({
												severity: v.MarkerSeverity.Hint,
												tags: [v.MarkerTag.Unnecessary],
												...K.range,
												message: b.localize(8458, null, N.$TZ),
											}))),
							this.h.remoteAuthority &&
								(J.scope === l.ConfigurationScope.MACHINE ||
									J.scope === l.ConfigurationScope.MACHINE_OVERRIDABLE) &&
								W.push({
									severity: v.MarkerSeverity.Hint,
									tags: [v.MarkerTag.Unnecessary],
									...K.range,
									message: b.localize(8459, null),
								});
					}
					F(K, J, W) {
						J.scope === l.ConfigurationScope.APPLICATION && W.push(this.I(K));
					}
					G(K, J, W) {
						if (
							(J.scope === l.ConfigurationScope.APPLICATION &&
								W.push(this.I(K)),
							J.scope === l.ConfigurationScope.MACHINE && W.push(this.J(K)),
							!this.m.isWorkspaceTrusted() && J.restricted)
						) {
							const X = this.L(K);
							W.push(X);
							const Y = this.N([X]);
							this.O(X, Y);
						}
					}
					H(K, J, W) {
						if (
							(J.scope === l.ConfigurationScope.APPLICATION &&
								W.push(this.I(K)),
							J.scope === l.ConfigurationScope.MACHINE && W.push(this.J(K)),
							J.scope === l.ConfigurationScope.WINDOW &&
								W.push({
									severity: v.MarkerSeverity.Hint,
									tags: [v.MarkerTag.Unnecessary],
									...K.range,
									message: b.localize(8460, null),
								}),
							!this.m.isWorkspaceTrusted() && J.restricted)
						) {
							const X = this.L(K);
							W.push(X);
							const Y = this.N([X]);
							this.O(X, Y);
						}
					}
					I(K) {
						return {
							severity: v.MarkerSeverity.Hint,
							tags: [v.MarkerTag.Unnecessary],
							...K.range,
							message: b.localize(8461, null),
						};
					}
					J(K) {
						return {
							severity: v.MarkerSeverity.Hint,
							tags: [v.MarkerTag.Unnecessary],
							...K.range,
							message: b.localize(8462, null),
						};
					}
					L(K) {
						return {
							severity: v.MarkerSeverity.Warning,
							...K.range,
							message: b.localize(8463, null),
						};
					}
					M(K) {
						return {
							severity: v.MarkerSeverity.Hint,
							tags: [v.MarkerTag.Unnecessary],
							...K.range,
							message: b.localize(8464, null),
						};
					}
					N(K) {
						return [
							{
								title: b.localize(8465, null),
								command: {
									id: "workbench.trust.manage",
									title: b.localize(8466, null),
								},
								diagnostics: K,
								kind: f.$GAb.QuickFix.value,
							},
						];
					}
					O(K, J) {
						let W = this.b.get(this.f.uri);
						W || ((W = []), this.b.set(this.f.uri, W)),
							W.push([c.$iL.lift(K), J]);
					}
					dispose() {
						this.g.remove("UnsupportedSettingsRenderer", [this.f.uri]),
							this.b.clear(),
							super.dispose();
					}
				};
				q = Ne(
					[
						j(2, v.$aM),
						j(3, A.$r8),
						j(4, N.$RZ),
						j(5, k.$pO),
						j(6, I.$Vl),
						j(7, o.$k3),
						j(8, B.$P8),
						j(9, T.$Xl),
					],
					q,
				);
				let V = class extends C.$1c {
					static {
						U = this;
					}
					static {
						this.a = [
							"folders",
							"tasks",
							"launch",
							"extensions",
							"settings",
							"remoteAuthority",
							"transient",
						];
					}
					constructor(K, J, W, X) {
						super(),
							(this.f = K),
							(this.g = J),
							(this.h = W),
							(this.j = X),
							(this.b = this.f.createDecorationsCollection()),
							(this.c = new w.$Jh(200)),
							this.D(
								this.f
									.getModel()
									.onDidChangeContent(() =>
										this.c.trigger(() => this.render()),
									),
							);
					}
					render() {
						const K = [];
						if (
							this.h.getWorkbenchState() === P.WorkbenchState.WORKSPACE &&
							this.g instanceof O.$ZZ
						) {
							const J = [];
							for (const W of this.g.configurationGroups)
								for (const X of W.sections)
									for (const Y of X.settings)
										U.a.includes(Y.key) ||
											K.push({
												severity: v.MarkerSeverity.Hint,
												tags: [v.MarkerTag.Unnecessary],
												...Y.range,
												message: b.localize(8467, null),
											});
							this.b.set(J.map((W) => this.n(W)));
						}
						K.length
							? this.j.changeOne(
									"WorkspaceConfigurationRenderer",
									this.g.uri,
									K,
								)
							: this.j.remove("WorkspaceConfigurationRenderer", [this.g.uri]);
					}
					static {
						this.m = p.$eY.register({
							description: "dim-configuration",
							stickiness: g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							inlineClassName: "dim-configuration",
						});
					}
					n(K) {
						return { range: K, options: U.m };
					}
					dispose() {
						this.j.remove("WorkspaceConfigurationRenderer", [this.g.uri]),
							this.b.clear(),
							super.dispose();
					}
				};
				V = U = Ne([j(2, P.$Vi), j(3, v.$aM)], V);
			},
		),
		define(
			de[3758],
			he([1, 0, 3, 10, 5, 25, 3757, 131, 838]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sCc = void 0);
				let r = class extends t.$1c {
					static {
						this.ID = "editor.contrib.settings";
					}
					constructor(a, h, c, n) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.b = this.D(new t.$Zc())),
							this.j(),
							this.D(this.c.onDidChangeModel((g) => this.j())),
							this.D(this.h.onDidChangeWorkbenchState(() => this.j()));
					}
					async j() {
						this.b.clear(), (this.a = void 0);
						const a = this.c.getModel();
						if (a && /\.(json|code-workspace)$/.test(a.uri.path)) {
							const h = await this.g.createPreferencesEditorModel(a.uri);
							if (h instanceof m.$XZ && this.c.getModel())
								switch ((this.b.add(h), h.configurationTarget)) {
									case i.ConfigurationTarget.WORKSPACE:
										this.a = this.b.add(
											this.f.createInstance(C.$rCc, this.c, h),
										);
										break;
									default:
										this.a = this.b.add(
											this.f.createInstance(C.$qCc, this.c, h),
										);
										break;
								}
							this.a?.render();
						}
					}
				};
				(e.$sCc = r),
					(e.$sCc = r = Ne([j(1, w.$Li), j(2, d.$7Z), j(3, E.$Vi)], r));
			},
		),
		define(
			de[1042],
			he([
				1, 0, 24, 37, 28, 9, 10, 1745, 468, 131, 78, 261, 3, 6, 81, 61, 30, 133,
				62,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GCc =
						e.SearchResultIdx =
						e.$CCc =
						e.$BCc =
						e.$ACc =
						e.$zCc =
						e.$yCc =
						e.$xCc =
							void 0),
					(e.$DCc = S),
					(e.$ECc = T),
					(e.$FCc = N),
					(e.$HCc = V),
					(t = mt(t)),
					(e.$xCc = "usesOnlineServices");
				class b extends h.$1c {
					constructor(K) {
						super(),
							(this.c = !1),
							(this.f = new c.$re()),
							(this.onDidChangeTabbable = this.f.event),
							(this.id = K);
					}
					get tabbable() {
						return this.c;
					}
					set tabbable(K) {
						(this.c = K), this.f.fire();
					}
				}
				e.$yCc = b;
				class s extends b {
					get children() {
						return this.h;
					}
					set children(K) {
						(this.h = K),
							(this.g = new Set()),
							this.h.forEach((J) => {
								J instanceof y && this.g.add(J.setting.key);
							});
					}
					constructor(K, J, W, X, Y) {
						super(K),
							(this.g = new Set()),
							(this.h = []),
							(this.count = J),
							(this.label = W),
							(this.level = X),
							(this.isFirstGroup = Y);
					}
					containsSetting(K) {
						return this.g.has(K);
					}
				}
				e.$zCc = s;
				class l extends b {
					constructor(K, J) {
						super(K), (this.extensionIds = J);
					}
				}
				e.$ACc = l;
				class y extends b {
					static {
						this.g = 20;
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _) {
						super(I(J.id + "_" + K.key)),
							(this.settingsTarget = W),
							(this.n = X),
							(this.q = Y),
							(this.r = ie),
							(this.t = ne),
							(this.u = ee),
							(this.w = _),
							(this.h = null),
							(this.j = null),
							(this.isConfigured = !1),
							(this.isUntrusted = !1),
							(this.hasPolicyValue = !1),
							(this.overriddenScopeList = []),
							(this.overriddenDefaultsLanguageList = []),
							(this.languageOverrideValues = new Map()),
							(this.setting = K),
							(this.parent = J),
							this.z(),
							this.C();
					}
					get displayCategory() {
						return this.h || this.y(), this.h;
					}
					get displayLabel() {
						return this.j || this.y(), this.j;
					}
					y() {
						if (this.setting.title) {
							(this.j = this.setting.title),
								(this.h = this.setting.categoryLabel ?? null);
							return;
						}
						const K = T(
							this.setting.key,
							this.parent.id,
							this.setting.isLanguageTagSetting,
						);
						(this.j = K.label), (this.h = K.category);
					}
					z() {
						if (this.setting.description.length > y.g) {
							const K = this.setting.description.slice(0, y.g);
							K.push("[...]"),
								(this.description = K.join(`
`));
						} else
							this.description = this.setting.description.join(`
`);
					}
					C() {
						L(this.setting, this.t)
							? (this.valueType = r.SettingValueType.ExtensionToggle)
							: this.setting.enum &&
									(!this.setting.type || O(this.setting.type))
								? (this.valueType = r.SettingValueType.Enum)
								: this.setting.type === "string"
									? this.setting.editPresentation ===
										n.EditPresentationTypes.Multiline
										? (this.valueType = r.SettingValueType.MultilineString)
										: (this.valueType = r.SettingValueType.String)
									: D(this.setting)
										? (this.valueType = r.SettingValueType.Exclude)
										: M(this.setting)
											? (this.valueType = r.SettingValueType.Include)
											: this.setting.type === "integer"
												? (this.valueType = r.SettingValueType.Integer)
												: this.setting.type === "number"
													? (this.valueType = r.SettingValueType.Number)
													: this.setting.type === "boolean"
														? (this.valueType = r.SettingValueType.Boolean)
														: this.setting.type === "array" &&
																this.setting.arrayItemType &&
																[
																	"string",
																	"enum",
																	"number",
																	"integer",
																].includes(this.setting.arrayItemType)
															? (this.valueType = r.SettingValueType.Array)
															: Array.isArray(this.setting.type) &&
																	this.setting.type.includes(
																		r.SettingValueType.Null,
																	) &&
																	this.setting.type.length === 2
																? this.setting.type.includes(
																		r.SettingValueType.Integer,
																	)
																	? (this.valueType =
																			r.SettingValueType.NullableInteger)
																	: this.setting.type.includes(
																				r.SettingValueType.Number,
																			)
																		? (this.valueType =
																				r.SettingValueType.NullableNumber)
																		: (this.valueType =
																				r.SettingValueType.Complex)
																: R(this.setting)
																	? this.setting.allKeysAreBoolean
																		? (this.valueType =
																				r.SettingValueType.BooleanObject)
																		: (this.valueType =
																				r.SettingValueType.Object)
																	: this.setting.isLanguageTagSetting
																		? (this.valueType =
																				r.SettingValueType.LanguageTag)
																		: (this.valueType =
																				r.SettingValueType.Complex);
					}
					inspectSelf() {
						const K = this.F(this.setting),
							J = S(this.setting.key, K, this.q, this.w);
						this.G(J, this.n);
					}
					F(K) {
						return !this.u.currentProfile.isDefault &&
							!this.u.currentProfile.useDefaultFlags?.settings &&
							(K.scope === n.ConfigurationScope.APPLICATION ||
								(this.w.isSettingAppliedForAllProfiles(K.key) &&
									this.settingsTarget === C.ConfigurationTarget.USER_LOCAL))
							? C.ConfigurationTarget.APPLICATION
							: this.settingsTarget;
					}
					G(K, J) {
						let {
							isConfigured: W,
							inspected: X,
							targetSelector: Y,
							inspectedLanguageOverrides: ie,
							languageSelector: ne,
						} = K;
						switch (Y) {
							case "workspaceFolderValue":
							case "workspaceValue":
								this.isUntrusted = !!this.setting.restricted && !J;
								break;
						}
						let ee = W ? X[Y] : X.defaultValue;
						const _ = [],
							te = [];
						if (
							((ne || Y !== "workspaceValue") &&
								typeof X.workspaceValue < "u" &&
								_.push("workspace:"),
							(ne || Y !== "userRemoteValue") &&
								typeof X.userRemoteValue < "u" &&
								_.push("remote:"),
							(ne || Y !== "userLocalValue") &&
								typeof X.userLocalValue < "u" &&
								_.push("user:"),
							X.overrideIdentifiers)
						)
							for (const Q of X.overrideIdentifiers) {
								const Z = ie.get(Q);
								Z &&
									(this.r.isRegisteredLanguageId(Q) &&
										(ne !== Q && typeof Z.default?.override < "u" && te.push(Q),
										(ne !== Q || Y !== "workspaceValue") &&
											typeof Z.workspace?.override < "u" &&
											_.push(`workspace:${Q}`),
										(ne !== Q || Y !== "userRemoteValue") &&
											typeof Z.userRemote?.override < "u" &&
											_.push(`remote:${Q}`),
										(ne !== Q || Y !== "userLocalValue") &&
											typeof Z.userLocal?.override < "u" &&
											_.push(`user:${Q}`)),
									this.languageOverrideValues.set(Q, Z));
							}
						if (
							((this.overriddenScopeList = _),
							(this.overriddenDefaultsLanguageList = te),
							(this.defaultValueSource =
								this.setting.nonLanguageSpecificDefaultValueSource),
							X.policyValue)
						)
							(this.hasPolicyValue = !0),
								(W = !1),
								(ee = X.policyValue),
								(this.scopeValue = X.policyValue),
								(this.defaultValue = X.defaultValue);
						else if (ne && this.languageOverrideValues.has(ne)) {
							const Q = this.languageOverrideValues.get(ne);
							(ee = (W ? Q[Y] : Q.defaultValue) ?? ee),
								(this.scopeValue = W && Q[Y]),
								(this.defaultValue = Q.defaultValue ?? X.defaultValue);
							const se = p.$Io
									.as(n.$No.Configuration)
									.getConfigurationDefaultsOverrides()
									.get(`[${ne}]`)?.source,
								re = se instanceof Map ? se.get(this.setting.key) : void 0;
							re && (this.defaultValueSource = re);
						} else
							(this.scopeValue = W && X[Y]),
								(this.defaultValue = X.defaultValue);
						(this.value = ee),
							(this.isConfigured = W),
							(W ||
								this.setting.tags ||
								this.tags ||
								this.setting.restricted ||
								this.hasPolicyValue) &&
								((this.tags = new Set()),
								W && this.tags.add(m.$OBc),
								this.setting.tags?.forEach((Q) => this.tags.add(Q)),
								this.setting.restricted && this.tags.add(m.$WBc),
								this.hasPolicyValue && this.tags.add(m.$UBc));
					}
					matchesAllTags(K) {
						return K?.size
							? (this.tags || this.inspectSelf(),
								!!this.tags?.size &&
									Array.from(K).every((J) => this.tags.has(J)))
							: !0;
					}
					matchesScope(K, J) {
						const W = E.URI.isUri(K)
							? C.ConfigurationTarget.WORKSPACE_FOLDER
							: K;
						return this.setting.scope
							? W === C.ConfigurationTarget.APPLICATION
								? a.$GZ.includes(this.setting.scope)
								: W === C.ConfigurationTarget.WORKSPACE_FOLDER
									? a.$MZ.includes(this.setting.scope)
									: W === C.ConfigurationTarget.WORKSPACE
										? a.$LZ.includes(this.setting.scope)
										: W === C.ConfigurationTarget.USER_REMOTE
											? a.$KZ.includes(this.setting.scope)
											: W === C.ConfigurationTarget.USER_LOCAL && J
												? a.$JZ.includes(this.setting.scope)
												: !0
							: !0;
					}
					matchesAnyExtension(K) {
						return !K || !K.size
							? !0
							: this.setting.extensionInfo
								? Array.from(K).some(
										(J) =>
											J.toLowerCase() ===
											this.setting.extensionInfo.id.toLowerCase(),
									)
								: !1;
					}
					matchesAnyFeature(K) {
						if (!K || !K.size) return !0;
						const J = d.$uCc.children.find((W) => W.id === "features");
						return Array.from(K).some((W) => {
							if (J && J.children) {
								const X = J.children.find((Y) => "features/" + W === Y.id);
								if (X) {
									const Y = X.settings?.map((ie) => $(ie));
									return (
										Y &&
										!this.setting.extensionInfo &&
										Y.some((ie) => ie.test(this.setting.key.toLowerCase()))
									);
								} else return !1;
							} else return !1;
						});
					}
					matchesAnyId(K) {
						return !K || !K.size ? !0 : K.has(this.setting.key);
					}
					matchesAllLanguages(K) {
						return K
							? this.r.isRegisteredLanguageId(K)
								? this.setting.scope ===
									n.ConfigurationScope.LANGUAGE_OVERRIDABLE
								: !1
							: !0;
					}
				}
				e.$BCc = y;
				function $(G) {
					return (
						(G = (0, i.$of)(G).replace(/\\\*/g, ".*")),
						new RegExp(`^${G}$`, "i")
					);
				}
				let v = class {
					constructor(K, J, W, X, Y, ie) {
						(this.f = K),
							(this.g = J),
							(this.h = W),
							(this.i = X),
							(this.j = Y),
							(this.l = ie),
							(this.e = new Map());
					}
					get root() {
						return this.c;
					}
					update(K = this.d) {
						this.e.clear();
						const J = this.r(K);
						J.children[0] instanceof s && (J.children[0].isFirstGroup = !0),
							this.c
								? (this.n(this.c.children), (this.c.children = J.children))
								: (this.c = J);
					}
					updateWorkspaceTrust(K) {
						(this.g = K), this.p();
					}
					n(K) {
						for (const J of K) this.o(J);
					}
					o(K) {
						K instanceof s && this.n(K.children), K.dispose();
					}
					getElementsByName(K) {
						return this.e.get(K) ?? null;
					}
					updateElementsByName(K) {
						this.e.has(K) && this.q(this.e.get(K));
					}
					p() {
						this.q([...this.e.values()].flat().filter((K) => K.isUntrusted));
					}
					q(K) {
						for (const J of K) J.inspectSelf();
					}
					r(K, J) {
						const W = J ? this.t(J) + 1 : 0,
							X = new s(K.id, void 0, K.label, W, !1);
						X.parent = J;
						const Y = [];
						if (K.settings) {
							const ie = K.settings
								.map((ne) => this.u(ne, X))
								.filter((ne) =>
									ne.setting.deprecationMessage ? ne.isConfigured : !0,
								);
							Y.push(...ie);
						}
						if (K.children) {
							const ie = K.children.map((ne) => this.r(ne, X));
							Y.push(...ie);
						}
						return (X.children = Y), X;
					}
					t(K) {
						return K.parent ? 1 + this.t(K.parent) : 0;
					}
					u(K, J) {
						const W = new y(
								K,
								J,
								this.f.settingsTarget,
								this.g,
								this.f.languageFilter,
								this.i,
								this.l,
								this.j,
								this.h,
							),
							X = this.e.get(K.key) || [];
						return X.push(W), this.e.set(K.key, X), W;
					}
				};
				(e.$CCc = v),
					(e.$CCc = v =
						Ne([j(2, a.$RZ), j(3, g.$nM), j(4, o.$P8), j(5, f.$Bk)], v));
				function S(G, K, J, W) {
					const X = E.URI.isUri(K) ? { resource: K } : void 0,
						Y = W.inspect(G, X),
						ie =
							K === C.ConfigurationTarget.APPLICATION
								? "applicationValue"
								: K === C.ConfigurationTarget.USER_LOCAL
									? "userLocalValue"
									: K === C.ConfigurationTarget.USER_REMOTE
										? "userRemoteValue"
										: K === C.ConfigurationTarget.WORKSPACE
											? "workspaceValue"
											: "workspaceFolderValue",
						ne =
							K === C.ConfigurationTarget.APPLICATION
								? "application"
								: K === C.ConfigurationTarget.USER_LOCAL
									? "userLocal"
									: K === C.ConfigurationTarget.USER_REMOTE
										? "userRemote"
										: K === C.ConfigurationTarget.WORKSPACE
											? "workspace"
											: "workspaceFolder";
					let ee = typeof Y[ie] < "u";
					const _ = Y.overrideIdentifiers,
						te = new Map();
					if ((J && (ee = !1), _)) {
						for (const Q of _)
							te.set(Q, W.inspect(G, { overrideIdentifier: Q }));
						J && te.has(J) && typeof te.get(J)[ne]?.override < "u" && (ee = !0);
					}
					return {
						isConfigured: ee,
						inspected: Y,
						targetSelector: ie,
						inspectedLanguageOverrides: te,
						languageSelector: J,
					};
				}
				function I(G) {
					return G.replace(/[\.\/]/, "_");
				}
				function T(G, K = "", J = !1) {
					const W = G.lastIndexOf(".");
					let X = "";
					W >= 0 && ((X = G.substring(0, W)), (G = G.substring(W + 1))),
						(K = K.replace(/\//g, ".")),
						(X = k(X, K)),
						(X = P(X)),
						J && ((G = G.replace(/[\[\]]/g, "")), (G = "$(bracket) " + G));
					const Y = P(G);
					return { category: X, label: Y };
				}
				function P(G) {
					G = G.replace(/\.([a-z0-9])/g, (K, J) => ` \u203A ${J.toUpperCase()}`)
						.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
						.replace(/^[a-z]/g, (K) => K.toUpperCase())
						.replace(/\b\w+\b/g, (K) =>
							d.$vCc.has(K.toLowerCase()) ? K.toUpperCase() : K,
						);
					for (const [K, J] of d.$wCc)
						G = G.replace(new RegExp(`\\b${K}\\b`, "gi"), J);
					return G;
				}
				function k(G, K) {
					const J = (X) => {
						/insiders$/i.test(G) || (K = K.replace(/-?insiders$/i, ""));
						const Y = K.split(".").map((ie) =>
							ie.replace(/-/g, "").toLowerCase() === G.toLowerCase()
								? ie.replace(/-/g, "")
								: ie,
						);
						for (; Y.length; ) {
							const ie = new RegExp(`^${Y.join("\\.")}(\\.|$)`, "i");
							if (ie.test(G)) return G.replace(ie, "");
							X ? Y.pop() : Y.shift();
						}
						return null;
					};
					let W = J(!0);
					return W === null && (W = J(!1)), W === null && (W = G), W;
				}
				function L(G, K) {
					return (
						m.$ZBc && !!K.extensionRecommendations && !!G.displayExtensionId
					);
				}
				function D(G) {
					return (
						G.key === "files.exclude" ||
						G.key === "search.exclude" ||
						G.key === "workbench.localHistory.exclude" ||
						G.key === "explorer.autoRevealExclude" ||
						G.key === "files.readonlyExclude" ||
						G.key === "files.watcherExclude"
					);
				}
				function M(G) {
					return G.key === "files.readonlyInclude";
				}
				function N(G) {
					return G === "workbench.editor.customLabels.patterns";
				}
				function A({ type: G }, K) {
					return G === "string" ||
						G === "boolean" ||
						G === "integer" ||
						G === "number"
						? !0
						: N(K) && Array.isArray(G) && G.length === 2
							? G.includes("null") &&
								(G.includes("string") ||
									G.includes("boolean") ||
									G.includes("integer") ||
									G.includes("number"))
							: !1;
				}
				function R({
					key: G,
					type: K,
					objectProperties: J,
					objectPatternProperties: W,
					objectAdditionalProperties: X,
				}) {
					if (
						K !== "object" ||
						((0, w.$ug)(J) && (0, w.$ug)(W) && (0, w.$ug)(X)) ||
						((X === !0 || X === void 0) && !Object.keys(W ?? {}).includes(".*"))
					)
						return !1;
					const Y = [...Object.values(J ?? {}), ...Object.values(W ?? {})];
					return (
						X && typeof X == "object" && Y.push(X),
						Y.map((ne) => (Array.isArray(ne.anyOf) ? ne.anyOf : [ne]))
							.flat()
							.every((ne) => A(ne, G))
					);
				}
				function O(G) {
					const K = ["string", "boolean", "null", "integer", "number"];
					return (Array.isArray(G) ? G : [G]).every((W) => K.includes(W));
				}
				var B;
				(function (G) {
					(G[(G.Local = 0)] = "Local"),
						(G[(G.Remote = 1)] = "Remote"),
						(G[(G.NewExtensions = 2)] = "NewExtensions");
				})(B || (e.SearchResultIdx = B = {}));
				let U = class extends v {
					constructor(K, J, W, X, Y, ie, ne, ee) {
						super(K, W, X, ie, ne, ee),
							(this.B = Y),
							(this.w = null),
							(this.x = null),
							(this.y = null),
							(this.z = null),
							(this.id = "searchResultModel"),
							(this.A = J),
							this.update({ id: "searchResultModel", label: "" });
					}
					C(K) {
						if (this.A)
							for (const J of K)
								J.setting.internalOrder = this.A.get(J.setting.key);
						return this.f.query
							? (K.sort((J, W) =>
									J.matchType !== W.matchType
										? W.matchType - J.matchType
										: J.matchType === r.SettingMatchType.RemoteMatch
											? W.score - J.score
											: (0, m.$2Bc)(
													J.setting.internalOrder,
													W.setting.internalOrder,
												),
								),
								t.$Qb(K, (J) => J.setting.key))
							: K.sort((J, W) =>
									(0, m.$2Bc)(J.setting.internalOrder, W.setting.internalOrder),
								);
					}
					getUniqueResults() {
						if (this.x) return this.x;
						if (!this.w) return null;
						let K = [];
						const J = new Set(),
							W = this.w[B.Local];
						W &&
							(W.filterMatches.forEach((Y) => J.add(Y.setting.key)),
							(K = W.filterMatches));
						const X = this.w[B.Remote];
						return (
							X &&
								((X.filterMatches = X.filterMatches.filter(
									(Y) => !J.has(Y.setting.key),
								)),
								(K = K.concat(X.filterMatches)),
								(this.y = this.w[B.NewExtensions])),
							(K = this.C(K)),
							(this.x = {
								filterMatches: K,
								exactMatch: W?.exactMatch || X?.exactMatch,
							}),
							this.x
						);
					}
					getRawResults() {
						return this.w || [];
					}
					setResult(K, J) {
						if (
							((this.x = null), (this.y = null), (this.w = this.w || []), !J)
						) {
							delete this.w[K];
							return;
						}
						J.exactMatch && (this.w = []),
							(this.w[K] = J),
							this.updateChildren();
					}
					updateChildren() {
						this.update({
							id: "searchResultModel",
							label: "searchResultModel",
							settings: this.D(),
						});
						const K = !!this.B.remoteAuthority;
						if (
							((this.root.children = this.root.children.filter(
								(J) =>
									J instanceof y &&
									J.matchesAllTags(this.f.tagFilters) &&
									J.matchesScope(this.f.settingsTarget, K) &&
									J.matchesAnyExtension(this.f.extensionFilters) &&
									J.matchesAnyId(this.f.idFilters) &&
									J.matchesAnyFeature(this.f.featureFilters) &&
									J.matchesAllLanguages(this.f.languageFilter),
							)),
							(this.z = this.root.children.length),
							this.y?.filterMatches.length)
						) {
							let J = this.y.filterMatches
								.map((W) => W.setting)
								.filter((W) => W.extensionName && W.extensionPublisher)
								.map((W) => `${W.extensionPublisher}.${W.extensionName}`);
							if (((J = t.$Qb(J)), J.length)) {
								const W = new l("newExtensions", J);
								(W.parent = this.c), this.c.children.push(W);
							}
						}
					}
					getUniqueResultsCount() {
						return this.z ?? 0;
					}
					D() {
						return (
							this.getUniqueResults()?.filterMatches.map((K) => K.setting) ?? []
						);
					}
				};
				(e.$GCc = U),
					(e.$GCc = U =
						Ne(
							[j(3, a.$RZ), j(4, u.$r8), j(5, g.$nM), j(6, o.$P8), j(7, f.$Bk)],
							U,
						));
				const z = /(^|\s)@tag:("([^"]*)"|[^"]\S*)/g,
					F = /(^|\s)@ext:("([^"]*)"|[^"]\S*)?/g,
					x = /(^|\s)@feature:("([^"]*)"|[^"]\S*)?/g,
					H = /(^|\s)@id:("([^"]*)"|[^"]\S*)?/g,
					q = /(^|\s)@lang:("([^"]*)"|[^"]\S*)?/g;
				function V(G) {
					function K(ne, ee, _) {
						return ne.replace(ee, (te, Q, Z, se) => {
							const re = se || Z;
							return (
								re &&
									_.push(
										...re
											.split(",")
											.map((le) => le.trim())
											.filter((le) => !(0, i.$jf)(le)),
									),
								""
							);
						});
					}
					const J = [];
					(G = G.replace(z, (ne, ee, _, te) => (J.push(te || _), ""))),
						(G = G.replace(`@${m.$OBc}`, () => (J.push(m.$OBc), ""))),
						(G = G.replace(`@${m.$UBc}`, () => (J.push(m.$UBc), "")));
					const W = [],
						X = [],
						Y = [],
						ie = [];
					return (
						(G = K(G, F, W)),
						(G = K(G, x, X)),
						(G = K(G, H, Y)),
						m.$YBc && (G = K(G, q, ie)),
						(G = G.trim()),
						{
							tags: J,
							extensionFilters: W,
							featureFilters: X,
							idFilters: Y,
							languageFilter: ie.length ? ie[0] : void 0,
							query: G,
						}
					);
				}
			},
		),
		define(
			de[3759],
			he([1, 0, 4, 131, 1042, 10, 49, 198, 32, 121, 23]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Xc = void 0),
					(t = mt(t));
				let a = class {
					constructor(c, n, g, p, o) {
						(this.e = c),
							(this.f = n),
							(this.g = g),
							(this.h = p),
							(this.i = o),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.a = new RegExp(
								'^<a (href)=".*code.*://settings/([^\\s"]+)"(?:\\s*codesetting="([^"]+)")?>',
							));
					}
					get featuredSettingStates() {
						const c = new Map();
						for (const [n, g] of this.d) c.set(n, this.e.getValue(n) === g);
						return c;
					}
					getHtmlRenderer() {
						return ({ raw: c }) => {
							const n = this.a.exec(c);
							if (n && n.length === 4) {
								const g = n[2],
									p = this.k(g, n[3]);
								p && (c = c.replace(this.a, p));
							}
							return c;
						};
					}
					settingToUriString(c, n) {
						return `${u.Schemas.codeSetting}://${c}${n ? `/${n}` : ""}`;
					}
					j(c) {
						return this.c.has(c) ? this.c.get(c) : this.g.getSetting(c);
					}
					parseValue(c, n) {
						if (n === "undefined" || n === "") return;
						const g = this.j(c);
						if (!g) return n;
						switch (g.type) {
							case "boolean":
								return n === "true";
							case "number":
								return parseInt(n, 10);
							case "string":
							default:
								return n;
						}
					}
					k(c, n) {
						const g = this.j(c);
						return g ? this.q(g, n) : "";
					}
					l(c, n) {
						if (n) return t.localize(7439, null);
						{
							const g = (0, w.$ECc)(c);
							return t.localize(7440, null, g.category, g.label);
						}
					}
					m(c) {
						const n = (0, w.$ECc)(c);
						return t.localize(7441, null, n.category, n.label);
					}
					n(c, n) {
						const g = this.e.getValue(c.key);
						if (g === n || (g === void 0 && c.value === n)) return;
						const p = (0, w.$ECc)(c.key);
						return n
							? t.localize(7442, null, p.category, p.label)
							: t.localize(7443, null, p.category, p.label);
					}
					o(c, n) {
						const g = this.e.getValue(c.key);
						if (g === n || (g === void 0 && c.value === n)) return;
						const p = (0, w.$ECc)(c.key);
						return t.localize(7444, null, p.category, p.label, n);
					}
					p(c, n) {
						const g = this.e.getValue(c.key);
						if (g === n || (g === void 0 && c.value === n)) return;
						const p = (0, w.$ECc)(c.key);
						return t.localize(7445, null, p.category, p.label, n);
					}
					q(c, n) {
						const g = this.settingToUriString(c.key, n),
							p = t.localize(7446, null);
						return `<code tabindex="0"><a href="${g}" class="codesetting" title="${p}" aria-role="button"><svg width="14" height="14" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.1 4.4L8.6 2H7.4l-.5 2.4-.7.3-2-1.3-.9.8 1.3 2-.2.7-2.4.5v1.2l2.4.5.3.8-1.3 2 .8.8 2-1.3.8.3.4 2.3h1.2l.5-2.4.8-.3 2 1.3.8-.8-1.3-2 .3-.8 2.3-.4V7.4l-2.4-.5-.3-.8 1.3-2-.8-.8-2 1.3-.7-.2zM9.4 1l.5 2.4L12 2.1l2 2-1.4 2.1 2.4.4v2.8l-2.4.5L14 12l-2 2-2.1-1.4-.5 2.4H6.6l-.5-2.4L4 13.9l-2-2 1.4-2.1L1 9.4V6.6l2.4-.5L2.1 4l2-2 2.1 1.4.4-2.4h2.8zm.6 7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"/></svg>
			<span class="separator"></span>
			<span class="setting-name">${c.key}</span>
		</a></code>`;
					}
					r(c, n) {
						if (c.type === "boolean") return this.n(c, n);
						if (c.type === "string") return this.o(c, n);
						if (c.type === "number") return this.p(c, n);
					}
					async restoreSetting(c) {
						const n = this.b.get(c);
						return (
							this.b.delete(c),
							this.e.updateValue(c, n, E.ConfigurationTarget.USER)
						);
					}
					async setSetting(c, n, g) {
						return (
							this.b.set(c, n),
							this.e.updateValue(c, g, E.ConfigurationTarget.USER)
						);
					}
					getActions(c) {
						if (c.scheme !== u.Schemas.codeSetting) return;
						const n = [],
							g = c.authority,
							p = this.parseValue(c.authority, c.path.substring(1)),
							o = this.e.inspect(g).userValue;
						if (p !== void 0 && p === o && this.b.has(g)) {
							const b = this.m(g);
							n.push({
								class: void 0,
								id: "restoreSetting",
								enabled: !0,
								tooltip: b,
								label: b,
								run: () => this.restoreSetting(g),
							});
						} else if (p !== void 0) {
							const b = this.j(g),
								s = b ? this.r(b, p) : void 0;
							b &&
								s &&
								n.push({
									class: void 0,
									id: "trySetting",
									enabled: o !== p,
									tooltip: s,
									label: s,
									run: () => {
										this.setSetting(g, o, p);
									},
								});
						}
						const f = this.l(g, n.length > 0);
						return (
							n.push({
								class: void 0,
								enabled: !0,
								id: "viewInSettings",
								tooltip: f,
								label: f,
								run: () =>
									this.g.openApplicationSettings({ query: `@id:${g}` }),
							}),
							n.push({
								class: void 0,
								enabled: !0,
								id: "copySettingId",
								tooltip: t.localize(7447, null),
								label: t.localize(7448, null),
								run: () => {
									this.i.writeText(g);
								},
							}),
							n
						);
					}
					s(c, n, g) {
						const p = this.getActions(c);
						p &&
							this.f.showContextMenu({
								getAnchor: () => ({ x: n, y: g }),
								getActions: () => p,
								getActionViewItem: (o) => new d.$_ib(o, o, { label: !0 }),
							});
					}
					async updateSetting(c, n, g) {
						if (c.scheme === u.Schemas.codeSetting)
							return (
								this.h.publicLog2("releaseNotesSettingAction", {
									settingId: c.authority,
								}),
								this.s(c, n, g)
							);
					}
				};
				(e.$$Xc = a),
					(e.$$Xc = a =
						Ne(
							[
								j(0, E.$gj),
								j(1, C.$Xxb),
								j(2, i.$7Z),
								j(3, m.$km),
								j(4, r.$Vxb),
							],
							a,
						));
			},
		),
		define(
			de[3760],
			he([
				1, 0, 249, 54, 19, 9, 61, 252, 4, 11, 22, 73, 41, 63, 25, 994, 510, 805,
				85, 133,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Xc = void 0),
					(m = mt(m));
				var s;
				(function (S) {
					function I(T) {
						return !!T && E.URI.isUri(T.filepath);
					}
					S.is = I;
				})(s || (s = {}));
				async function l(S, I, T, P) {
					const k = [],
						L = [],
						D = new Set(),
						M = new Map();
					for (const A of await S.getSnippetFiles())
						if (A.source !== o.SnippetSource.Extension)
							if (A.isGlobalSnippets) {
								await A.load();
								const R = new Set();
								let O;
								e: for (const F of A.data) {
									O || (O = F.source);
									for (const x of F.scopes) {
										const H = T.getLanguageName(x);
										if (H)
											if (R.size >= 4) {
												R.add(`${H}...`);
												break e;
											} else R.add(H);
									}
								}
								const B = {
									label: (0, w.$kh)(A.location),
									filepath: A.location,
									description:
										R.size === 0
											? m.localize(9430, null)
											: m.localize(9431, null, [...R].join(", ")),
								};
								if ((k.push(B), !O)) continue;
								const U = m.localize(
										9432,
										null,
										O,
										P.getUriLabel(A.location, { relative: !0 }),
									),
									z = M.get((0, w.$kh)(A.location));
								z && ((B.detail = U), (z.snippet.detail = z.detail)),
									M.set((0, w.$kh)(A.location), { snippet: B, detail: U });
							} else {
								const R = (0, w.$kh)(A.location).replace(/\.json$/, "");
								k.push({
									label: (0, w.$kh)(A.location),
									description: `(${T.getLanguageName(R)})`,
									filepath: A.location,
								}),
									D.add(R);
							}
					const N = I.currentProfile.snippetsHome;
					for (const A of T.getRegisteredLanguageIds()) {
						const R = T.getLanguageName(A);
						R &&
							!D.has(A) &&
							L.push({
								label: A,
								description: `(${R})`,
								filepath: (0, w.$nh)(N, `${A}.json`),
								hint: !0,
								iconClasses: (0, d.$CDb)(A),
							});
					}
					return (
						k.sort((A, R) => {
							const O = (0, i.$tc)(A.filepath.path),
								B = (0, i.$tc)(R.filepath.path);
							return O === B
								? A.label.localeCompare(R.label)
								: O === ".code-snippets"
									? -1
									: 1;
						}),
						L.sort((A, R) => A.label.localeCompare(R.label)),
						{ existing: k, future: L }
					);
				}
				async function y(S, I, T, P, k, L) {
					function D(A) {
						const R =
							(0, i.$tc)(A) !== ".code-snippets" ? `${A}.code-snippets` : A;
						return (0, w.$nh)(I, R);
					}
					await P.createFolder(I);
					const M = await T.input({
						placeHolder: m.localize(9433, null),
						async validateInput(A) {
							if (!A) return m.localize(9434, null);
							if (!(0, t.$Jg)(A)) return m.localize(9435, null, A);
							if (await P.exists(D(A))) return m.localize(9436, null, A);
						},
					});
					if (!M) return;
					const N = D(M);
					await k.write(
						N,
						[
							"{",
							"	// Place your " +
								S +
								" snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and ",
							"	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope ",
							"	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is ",
							"	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: ",
							"	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. ",
							"	// Placeholders with the same ids are connected.",
							"	// Example:",
							'	// "Print to console": {',
							'	// 	"scope": "javascript,typescript",',
							'	// 	"prefix": "log",',
							'	// 	"body": [',
							`	// 		"console.log('$1');",`,
							'	// 		"$2"',
							"	// 	],",
							'	// 	"description": "Log output to console"',
							"	// }",
							"}",
						].join(`
`),
					),
						await L.open(N);
				}
				async function $(S, I, T) {
					if (await I.exists(S.filepath)) return;
					const P = [
						"{",
						"	// Place your snippets for " +
							S.label +
							" here. Each snippet is defined under a snippet name and has a prefix, body and ",
						"	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:",
						"	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the ",
						"	// same ids are connected.",
						"	// Example:",
						'	// "Print to console": {',
						'	// 	"prefix": "log",',
						'	// 	"body": [',
						`	// 		"console.log('$1');",`,
						'	// 		"$2"',
						"	// 	],",
						'	// 	"description": "Log output to console"',
						"	// }",
						"}",
					].join(`
`);
					await T.write(S.filepath, P);
				}
				class v extends g.$FFc {
					constructor() {
						super({
							id: "workbench.action.openSnippets",
							title: m.localize2(9446, "Configure Snippets"),
							shortTitle: {
								...m.localize2(9447, "Snippets"),
								mnemonicTitle: m.localize(9437, null),
							},
							f1: !0,
							menu: [
								{
									id: r.$XX.MenubarPreferencesMenu,
									group: "2_configuration",
									order: 5,
								},
								{
									id: r.$XX.GlobalActivity,
									group: "2_configuration",
									order: 5,
								},
							],
						});
					}
					async run(I) {
						const T = I.get(p.$gYb),
							P = I.get(c.$DJ),
							k = I.get(h.$7rb),
							L = I.get(C.$nM),
							D = I.get(b.$P8),
							M = I.get(n.$Vi),
							N = I.get(u.$ll),
							A = I.get(f.$kZ),
							R = I.get(a.$3N),
							O = await l(T, D, L, R),
							B = O.existing,
							U = [
								{
									scope: m.localize(9438, null),
									label: m.localize(9439, null),
									uri: D.currentProfile.snippetsHome,
								},
							],
							z = [];
						for (const x of M.getWorkspace().folders)
							z.push({
								scope: m.localize(9440, null, x.name),
								label: m.localize(9441, null, x.name),
								uri: x.toResource(".vscode"),
							});
						B.length > 0
							? (B.unshift({
									type: "separator",
									label: m.localize(9442, null),
								}),
								B.push({ type: "separator", label: m.localize(9443, null) }))
							: B.push({ type: "separator", label: m.localize(9444, null) });
						const F = await P.pick([].concat(B, U, z, O.future), {
							placeHolder: m.localize(9445, null),
							matchOnDescription: !0,
						});
						if (U.indexOf(F) >= 0) return y(F.scope, F.uri, P, N, A, k);
						if (z.indexOf(F) >= 0) return y(F.scope, F.uri, P, N, A, k);
						if (s.is(F))
							return F.hint && (await $(F, N, A)), k.open(F.filepath);
					}
				}
				e.$2Xc = v;
			},
		),
		define(
			de[1898],
			he([
				1, 0, 3, 19, 37, 61, 373, 4, 113, 22, 52, 34, 25, 805, 175, 701, 1752,
				546, 59, 21, 28, 5, 85, 152, 133, 24,
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
			) {
				"use strict";
				var I, T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uYb = void 0),
					(e.$vYb = N),
					(i = mt(i));
				var P;
				(function (A) {
					function R(O, B, U) {
						if ((0, w.$jf)(B.path))
							return (
								O.collector.error(
									(0, d.localize)(
										9479,
										null,
										O.description.name,
										String(B.path),
									),
								),
								null
							);
						if ((0, w.$jf)(B.language) && !B.path.endsWith(".code-snippets"))
							return (
								O.collector.error(
									(0, d.localize)(
										9480,
										null,
										O.description.name,
										String(B.path),
									),
								),
								null
							);
						if (
							!(0, w.$jf)(B.language) &&
							!U.isRegisteredLanguageId(B.language)
						)
							return (
								O.collector.error(
									(0, d.localize)(
										9481,
										null,
										O.description.name,
										String(B.language),
									),
								),
								null
							);
						const z = O.description.extensionLocation,
							F = i.$nh(z, B.path);
						return i.$hh(F, z)
							? { language: B.language, location: F }
							: (O.collector.error(
									(0, d.localize)(
										9482,
										null,
										O.description.name,
										F.path,
										z.path,
									),
								),
								null);
					}
					(A.toValidSnippet = R),
						(A.snippetsContribution = {
							description: (0, d.localize)(9483, null),
							type: "array",
							defaultSnippets: [{ body: [{ language: "", path: "" }] }],
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											language: "${1:id}",
											path: "./snippets/${2:id}.json.",
										},
									},
								],
								properties: {
									language: {
										description: (0, d.localize)(9484, null),
										type: "string",
									},
									path: {
										description: (0, d.localize)(9485, null),
										type: "string",
									},
								},
							},
						}),
						(A.point = n.$n2.registerExtensionPoint({
							extensionPoint: "snippets",
							deps: [g.$qYb],
							jsonSchema: A.snippetsContribution,
						}));
				})(P || (P = {}));
				function k(A, R, O) {
					return (0, t.$Xc)(
						A.watch(R),
						A.onDidFilesChange((B) => {
							B.affects(R) && O();
						}),
					);
				}
				let L = class {
					static {
						I = this;
					}
					static {
						this.c = "snippets.ignoredSnippets";
					}
					constructor(R) {
						this.f = R;
						const O = R.get(I.c, b.StorageScope.PROFILE, "");
						let B;
						try {
							B = JSON.parse(O);
						} catch {}
						this.d = (0, s.$mg)(B) ? new Set(B) : new Set();
					}
					isIgnored(R) {
						return this.d.has(R);
					}
					updateIgnored(R, O) {
						let B = !1;
						this.d.has(R) && !O
							? (this.d.delete(R), (B = !0))
							: !this.d.has(R) && O && (this.d.add(R), (B = !0)),
							B &&
								this.f.store(
									I.c,
									JSON.stringify(Array.from(this.d)),
									b.StorageScope.PROFILE,
									b.StorageTarget.USER,
								);
					}
				};
				L = I = Ne([j(0, b.$lq)], L);
				let D = class {
					static {
						T = this;
					}
					static {
						this.c = "snippets.usageTimestamps";
					}
					constructor(R) {
						this.f = R;
						const O = R.get(T.c, b.StorageScope.PROFILE, "");
						let B;
						try {
							B = JSON.parse(O);
						} catch {
							B = [];
						}
						this.d = Array.isArray(B) ? new Map(B) : new Map();
					}
					getUsageTimestamp(R) {
						return this.d.get(R);
					}
					updateUsageTimestamp(R) {
						this.d.delete(R), this.d.set(R, Date.now());
						const O = [...this.d].slice(-100);
						this.f.store(
							T.c,
							JSON.stringify(O),
							b.StorageScope.PROFILE,
							b.StorageTarget.USER,
						);
					}
				};
				D = T = Ne([j(0, b.$lq)], D);
				let M = class {
					constructor(R, O, B, U, z, F, x, H, q, V, G) {
						(this.i = R),
							(this.j = O),
							(this.k = B),
							(this.l = U),
							(this.m = z),
							(this.n = F),
							(this.o = x),
							(this.p = H),
							(this.c = new t.$Zc()),
							(this.d = []),
							(this.f = new f.$Gc()),
							this.d.push(
								Promise.resolve(
									q.when(u.LifecyclePhase.Restored).then(() => {
										this.t(), this.w(), this.u();
									}),
								),
							),
							(0, C.$4Cb)(new p.$tYb(this.l, this, G)),
							(this.g = V.createInstance(L)),
							(this.h = V.createInstance(D));
					}
					dispose() {
						this.c.dispose();
					}
					isEnabled(R) {
						return !this.g.isIgnored(R.snippetIdentifier);
					}
					updateEnablement(R, O) {
						this.g.updateIgnored(R.snippetIdentifier, !O);
					}
					updateUsageTimestamp(R) {
						this.h.updateUsageTimestamp(R.snippetIdentifier);
					}
					q() {
						const R = this.d.slice(0);
						return (this.d.length = 0), Promise.all(R);
					}
					async getSnippetFiles() {
						return await this.q(), this.f.values();
					}
					async getSnippets(R, O) {
						await this.q();
						const B = [],
							U = [];
						if (R) {
							if (this.l.isRegisteredLanguageId(R))
								for (const z of this.f.values())
									U.push(
										z
											.load()
											.then((F) => F.select(R, B))
											.catch((F) => this.m.error(F, z.location.toString())),
									);
						} else
							for (const z of this.f.values())
								U.push(
									z
										.load()
										.then((F) => (0, S.$8b)(B, B.length, F.data))
										.catch((F) => this.m.error(F, z.location.toString())),
								);
						return await Promise.all(U), this.r(B, O);
					}
					getSnippetsSync(R, O) {
						const B = [];
						if (this.l.isRegisteredLanguageId(R))
							for (const U of this.f.values())
								U.load().catch((z) => {}), U.select(R, B);
						return this.r(B, O);
					}
					r(R, O) {
						const B = [];
						for (const U of R)
							(!U.prefix && !O?.includeNoPrefixSnippets) ||
								(!this.isEnabled(U) && !O?.includeDisabledSnippets) ||
								(typeof O?.fileTemplateSnippets == "boolean" &&
									O.fileTemplateSnippets !== U.isFileTemplate) ||
								B.push(U);
						return B.sort((U, z) => {
							let F = 0;
							if (!O?.noRecencySort) {
								const x = this.h.getUsageTimestamp(U.snippetIdentifier) ?? -1;
								F = (this.h.getUsageTimestamp(z.snippetIdentifier) ?? -1) - x;
							}
							return F === 0 && (F = this.s(U, z)), F;
						});
					}
					s(R, O) {
						return R.snippetSource < O.snippetSource
							? -1
							: R.snippetSource > O.snippetSource
								? 1
								: R.source < O.source
									? -1
									: R.source > O.source || R.name > O.name
										? 1
										: R.name < O.name
											? -1
											: 0;
					}
					t() {
						P.point.setHandler((R) => {
							for (const [O, B] of this.f)
								B.source === c.SnippetSource.Extension && this.f.delete(O);
							for (const O of R)
								for (const B of O.value) {
									const U = P.toValidSnippet(O, B, this.l);
									if (!U) continue;
									const z = this.f.get(U.location);
									if (z)
										z.defaultScopes
											? z.defaultScopes.push(U.language)
											: (z.defaultScopes = []);
									else {
										const F = new c.$fYb(
											c.SnippetSource.Extension,
											U.location,
											U.language ? [U.language] : void 0,
											O.description,
											this.n,
											this.p,
										);
										this.f.set(F.location, F),
											this.i.isExtensionDevelopment &&
												F.load().then(
													(x) => {
														x.data.some((H) => H.isBogous) &&
															O.collector.warn(
																(0, d.localize)(9486, null, O.description.name),
															);
													},
													(x) => {
														O.collector.warn(
															(0, d.localize)(
																9487,
																null,
																F.location.toString(),
															),
														);
													},
												);
									}
								}
						});
					}
					u() {
						const R = new t.$Zc(),
							O = () => {
								R.clear(), this.d.push(this.v(this.k.getWorkspace(), R));
							};
						this.c.add(R),
							this.c.add(this.k.onDidChangeWorkspaceFolders(O)),
							this.c.add(this.k.onDidChangeWorkbenchState(O)),
							O();
					}
					async v(R, O) {
						const B = R.folders.map(async (U) => {
							const z = U.toResource(".vscode");
							(await this.n.exists(z))
								? this.x(c.SnippetSource.Workspace, z, O)
								: O.add(
										this.n.onDidFilesChange((x) => {
											x.contains(z, r.FileChangeType.ADDED) &&
												this.x(c.SnippetSource.Workspace, z, O);
										}),
									);
						});
						await Promise.all(B);
					}
					async w() {
						const R = new t.$Zc(),
							O = async () => {
								R.clear();
								const B = this.j.currentProfile.snippetsHome;
								await this.n.createFolder(B),
									await this.x(c.SnippetSource.User, B, R);
							};
						this.c.add(R),
							this.c.add(
								this.j.onDidChangeCurrentProfile((B) =>
									B.join(
										(async () => {
											this.d.push(O());
										})(),
									),
								),
							),
							await O();
					}
					x(R, O, B) {
						const U = new t.$Zc(),
							z = async () => {
								if ((U.clear(), !!(await this.n.exists(O))))
									try {
										const F = await this.n.resolve(O);
										for (const x of F.children || [])
											U.add(this.y(x.resource, R));
									} catch (F) {
										this.m.error(
											`Failed snippets from folder '${O.toString()}'`,
											F,
										);
									}
							};
						return (
							B.add(
								this.o.files.onDidSave((F) => {
									i.$hh(F.model.resource, O) && z();
								}),
							),
							B.add(k(this.n, O, z)),
							B.add(U),
							z()
						);
					}
					y(R, O) {
						const B = i.$lh(R);
						if (O === c.SnippetSource.User && B === ".json") {
							const U = i.$kh(R).replace(/\.json/, "");
							this.f.set(R, new c.$fYb(O, R, [U], void 0, this.n, this.p));
						} else
							B === ".code-snippets" &&
								this.f.set(R, new c.$fYb(O, R, void 0, void 0, this.n, this.p));
						return { dispose: () => this.f.delete(R) };
					}
				};
				(e.$uYb = M),
					(e.$uYb = M =
						Ne(
							[
								j(0, m.$Ti),
								j(1, v.$P8),
								j(2, h.$Vi),
								j(3, E.$nM),
								j(4, a.$ik),
								j(5, r.$ll),
								j(6, y.$kZ),
								j(7, o.$bYb),
								j(8, u.$n6),
								j(9, l.$Li),
								j(10, $.$aN),
							],
							M,
						));
				function N(A, R) {
					const B = A.getLineContent(R.lineNumber).substr(0, R.column - 1),
						U = Math.max(0, B.length - 100);
					for (let z = B.length - 1; z >= U; z--) {
						const F = B.charAt(z);
						if (/\s/.test(F)) return B.substr(z + 1);
					}
					return U === 0 ? B : "";
				}
			},
		),
		define(
			de[714],
			he([
				1, 0, 27, 8, 43, 510, 1898, 17, 46, 254, 373, 71, 1752, 38, 121, 439,
				69,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wYb = void 0);
				let f = class {
					static {
						o = this;
					}
					static {
						this.ID = "editor.tabCompletionController";
					}
					static {
						this.ContextKey = new i.$5j("hasSnippetCompletions", void 0);
					}
					static get(l) {
						return l.getContribution(o.ID);
					}
					constructor(l, y, $, v, S) {
						(this.h = l),
							(this.i = y),
							(this.j = $),
							(this.k = v),
							(this.f = []),
							(this.a = o.ContextKey.bindTo(S)),
							(this.b = this.h.onDidChangeConfiguration((I) => {
								I.hasChanged(c.EditorOption.tabCompletion) && this.l();
							})),
							this.l();
					}
					dispose() {
						this.b.dispose(), this.d?.dispose();
					}
					l() {
						const l =
							this.h.getOption(c.EditorOption.tabCompletion) === "onlySnippets";
						this.c !== l &&
							((this.c = l),
							this.c
								? ((this.d = this.h.onDidChangeCursorSelection((y) =>
										this.m(),
									)),
									this.h.getModel() && this.m())
								: this.d?.dispose());
					}
					m() {
						if (((this.f = []), this.g?.dispose(), !this.h.hasModel())) return;
						const l = this.h.getSelection(),
							y = this.h.getModel();
						y.tokenization.tokenizeIfCheap(l.positionLineNumber);
						const $ = y.getLanguageIdAtPosition(
								l.positionLineNumber,
								l.positionColumn,
							),
							v = this.i.getSnippetsSync($);
						if (!v) {
							this.a.set(!1);
							return;
						}
						if (d.$iL.isEmpty(l)) {
							const I = (0, C.$vYb)(y, l.getPosition());
							if (I) for (const T of v) I.endsWith(T.prefix) && this.f.push(T);
						} else if (
							!d.$iL.spansMultipleLines(l) &&
							y.getValueLengthInRange(l) <= 100
						) {
							const I = y.getValueInRange(l);
							if (I) for (const T of v) I === T.prefix && this.f.push(T);
						}
						const S = this.f.length;
						if (S === 0) this.a.set(!1);
						else if (S === 1) this.a.set(!0);
						else {
							this.a.set(!0),
								(this.g = {
									_debugDisplayName: "tabCompletion",
									dispose: () => {
										I.dispose();
									},
									provideCompletionItems: (T, P) =>
										T !== y || !l.containsPosition(P)
											? void 0
											: {
													suggestions: this.f.map((L) => {
														const D = d.$iL.fromPositions(
															P.delta(0, -L.prefix.length),
															P,
														);
														return new h.$sYb(L, D);
													}),
												},
								});
							const I = this.k.completionProvider.register(
								{
									language: y.getLanguageId(),
									pattern: y.uri.fsPath,
									scheme: y.uri.scheme,
								},
								this.g,
							);
						}
					}
					async performSnippetCompletions() {
						if (this.h.hasModel())
							if (this.f.length === 1) {
								const [l] = this.f;
								let y;
								if (l.needsClipboard) {
									const $ = new g.$Mzb(
										this.h,
										g.CodeEditorStateFlag.Value |
											g.CodeEditorStateFlag.Position,
									);
									if (((y = await this.j.readText()), !$.validate(this.h)))
										return;
								}
								r.$aDb
									.get(this.h)
									?.insert(l.codeSnippet, {
										overwriteBefore: l.prefix.length,
										overwriteAfter: 0,
										clipboardText: y,
									});
							} else this.f.length > 1 && this.g && (0, u.$8Cb)(this.h, this.g);
					}
				};
				(e.$wYb = f),
					(e.$wYb =
						f =
						o =
							Ne([j(1, E.$gYb), j(2, n.$Vxb), j(3, p.$k3), j(4, i.$6j)], f)),
					(0, m.$qtb)(f.ID, f, m.EditorContributionInstantiation.Eager);
				const b = m.$htb.bindToContribution(f.get);
				(0, m.$mtb)(
					new b({
						id: "insertSnippet",
						precondition: f.ContextKey,
						handler: (s) => s.performSnippetCompletions(),
						kbOpts: {
							weight: w.KeybindingWeight.EditorContrib,
							kbExpr: i.$Kj.and(
								a.EditorContextKeys.editorTextFocus,
								a.EditorContextKeys.tabDoesNotMoveFocus,
								r.$aDb.InSnippetMode.toNegated(),
							),
							primary: t.KeyCode.Tab,
						},
					}),
				);
			},
		),
		define(
			de[521],
			he([1, 0, 375, 254, 328, 394, 504, 714, 46, 35, 51]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xYb = a),
					(e.$yYb = h),
					(e.$zYb = c);
				function a(n) {
					return {
						wordWrap: "on",
						overviewRulerLanes: 0,
						glyphMargin: !1,
						lineNumbers: "off",
						folding: !1,
						selectOnLineNumbers: !1,
						hideCursorInOverviewRuler: !0,
						selectionHighlight: !1,
						scrollbar: { horizontal: "hidden", alwaysConsumeMouseWheel: !1 },
						lineDecorationsWidth: 0,
						overviewRulerBorder: !1,
						scrollBeyondLastLine: !1,
						renderLineHighlight: "none",
						fixedOverflowWidgets: !0,
						acceptSuggestionOnEnter: "smart",
						dragAndDrop: !1,
						revealHorizontalRightPadding: 5,
						minimap: { enabled: !1 },
						guides: { indentation: !1 },
						accessibilitySupport: n.getValue("editor.accessibilitySupport"),
						cursorBlinking: n.getValue("editor.cursorBlinking"),
					};
				}
				function h() {
					return {
						isSimpleWidget: !0,
						contributions:
							m.EditorExtensionsRegistry.getSomeEditorContributions([
								E.$_Xb.ID,
								C.$aYb,
								t.$2Mb.ID,
								w.$KDb.ID,
								i.$aDb.ID,
								d.$wYb.ID,
							]),
					};
				}
				function c(n) {
					return (0, r.$oP)((g, p) => {
						const o = g.getColor(u.$QP);
						if (o) {
							const f = g.getColor(u.$TR);
							f &&
								(p.addRule(
									`${n} .monaco-editor-background { background-color: ${f}; } `,
								),
								p.addRule(
									`${n} .monaco-editor .selected-text { background-color: ${f.transparent(0.4)}; }`,
								));
							const b = g.getColor(u.$UR);
							b &&
								p.addRule(
									`${n} .monaco-editor .view-line span.inline-selected-text { color: ${b}; }`,
								),
								p.addRule(
									`${n} .monaco-editor .focused .selected-text { background-color: ${o}; }`,
								);
						} else
							p.addRule(
								`${n} .monaco-editor .focused .selected-text { background-color: ${g.getColor(u.$rQ)}; }`,
							);
					});
				}
			},
		),
		define(
			de[3761],
			he([
				1, 0, 7, 114, 105, 127, 14, 27, 3, 434, 12, 26, 9, 46, 206, 48, 67, 761,
				500, 4, 178, 91, 92, 173, 11, 31, 10, 8, 49, 5, 39, 390, 180, 41, 63,
				21, 130, 2953, 417, 208, 521,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H2c = e.$G2c = void 0),
					(r = mt(r));
				var x;
				(function (J) {
					J[(J.MAX_WIDTH = 600)] = "MAX_WIDTH";
				})(x || (x = {}));
				let H = class extends m.$1c {
					get editorWidget() {
						return this.a;
					}
					constructor(W, X, Y, ie, ne, ee, _, te, Q, Z, se, re, le, oe) {
						super(),
							(this.L = W),
							(this.M = X),
							(this.N = Y),
							(this.O = ie),
							(this.P = ne),
							(this.Q = ee),
							(this.R = _),
							(this.S = te),
							(this.U = Q),
							(this.W = Z),
							(this.X = se),
							(this.Y = re),
							(this.Z = le),
							(this.$ = oe),
							(this.w = !1),
							(this.b = O.$MLb.bindTo(this.Q)),
							(this.g = O.$NLb.bindTo(this.Q)),
							(this.h = O.$OLb.bindTo(this.Q)),
							(this.j = O.$PLb.bindTo(this.Q)),
							(this.m = O.$QLb.bindTo(this.Q)),
							(this.n = O.$SLb.bindTo(this.Q)),
							(this.q = O.$TLb.bindTo(this.Q)),
							(this.r = O.$ULb.bindTo(this.Q)),
							(this.f = O.$RLb.bindTo(this.Q)),
							(this.s = O.$VLb.bindTo(this.Q)),
							(this.t = O.$WLb.bindTo(this.Q)),
							(this.z = document.createElement("div")),
							this.z.classList.add("accessible-view"),
							this.N.getValue(
								O.AccessibilityWorkbenchSettingId.HideAccessibleView,
							) && this.z.classList.add("hide");
						const ae = {
								contributions:
									c.EditorExtensionsRegistry.getEditorContributions().filter(
										(fe) => fe.id !== f.$BBb.ID,
									),
							},
							pe = document.createElement("div");
						pe.classList.add("accessible-view-title-bar"),
							(this.C = document.createElement("div")),
							this.C.classList.add("accessible-view-title"),
							pe.appendChild(this.C);
						const $e = document.createElement("div");
						$e.classList.add("accessible-view-action-bar"),
							pe.appendChild($e),
							this.z.appendChild(pe),
							(this.F = this.D(
								X.createInstance($.$Syb, $e, {
									orientation: w.ActionsOrientation.HORIZONTAL,
								}),
							)),
							(this.F.context = { viewId: "accessibleView" });
						const ye = this.F.getElement();
						ye.tabIndex = 0;
						const ue = {
							...(0, F.$xYb)(this.N),
							lineDecorationsWidth: 6,
							dragAndDrop: !1,
							cursorWidth: 1,
							wordWrap: "off",
							wrappingStrategy: "advanced",
							wrappingIndent: "none",
							padding: { top: 2, bottom: 2 },
							quickSuggestions: !1,
							renderWhitespace: "none",
							dropIntoEditor: { enabled: !1 },
							readOnly: !0,
							fontFamily: "var(--monaco-monospace-font)",
						};
						(this.a = this.D(this.M.createInstance(n.$rwb, this.z, ue, ae))),
							this.D(
								this.R.onDidChangeScreenReaderOptimized(() => {
									this.G && this.b.get() && this.show(this.G);
								}),
							),
							this.D(
								this.N.onDidChangeConfiguration((fe) => {
									this.G instanceof s.$ILb &&
										fe.affectsConfiguration(this.G.verbositySettingKey) &&
										(this.b.get() && this.show(this.G),
										this.j.set(this.N.getValue(this.G.verbositySettingKey)),
										this.gb(this.G.actions, this.G.options.type)),
										fe.affectsConfiguration(
											O.AccessibilityWorkbenchSettingId.HideAccessibleView,
										) &&
											this.z.classList.toggle(
												"hide",
												this.N.getValue(
													O.AccessibilityWorkbenchSettingId.HideAccessibleView,
												),
											);
								}),
							),
							this.D(this.a.onDidDispose(() => this.ab())),
							this.D(
								this.a.onDidChangeCursorPosition(() => {
									this.f.set(
										this.a.getPosition()?.lineNumber ===
											this.a.getModel()?.getLineCount(),
									);
								}),
							),
							this.D(
								this.a.onDidChangeCursorPosition(() => {
									const fe = this.a.getPosition()?.lineNumber;
									if (this.u && fe !== void 0) {
										const me =
											this.u.find(
												(ve) => ve.startLine <= fe && ve.endLine >= fe,
											) !== void 0;
										this.q.set(me);
									}
								}),
							);
					}
					ab() {
						this.b.reset(),
							this.g.reset(),
							this.h.reset(),
							this.j.reset(),
							this.m.reset(),
							this.n.reset(),
							this.t.reset(),
							this.s.reset();
					}
					getPosition(W) {
						if (!(!W || !this.I || this.I.id !== W))
							return this.a.getPosition() || void 0;
					}
					setPosition(W, X, Y) {
						if ((this.a.setPosition(W), X && this.a.revealPosition(W), Y)) {
							const ie = this.a.getModel()?.getLineLength(W.lineNumber) ?? 0;
							ie &&
								this.a.setSelection({
									startLineNumber: W.lineNumber,
									startColumn: 1,
									endLineNumber: W.lineNumber,
									endColumn: ie + 1,
								});
						}
					}
					getCodeBlockContext() {
						const W = this.a.getPosition();
						if (!this.u?.length || !W) return;
						const X = this.u?.findIndex(
								(ie) =>
									ie.startLine <= W?.lineNumber && ie.endLine >= W?.lineNumber,
							),
							Y = X !== void 0 && X > -1 ? this.u[X] : void 0;
						if (!(!Y || X === void 0))
							return {
								code: Y.code,
								languageId: Y.languageId,
								codeBlockIndex: X,
								element: void 0,
							};
					}
					navigateToCodeBlock(W) {
						const X = this.a.getPosition();
						if (!this.u?.length || !X) return;
						let Y;
						const ie = this.u.slice();
						W === "previous"
							? (Y = ie.reverse().find((ne) => ne.endLine < X.lineNumber))
							: (Y = ie.find((ne) => ne.startLine > X.lineNumber)),
							Y && this.setPosition(new g.$hL(Y.startLine, 1), !0);
					}
					showLastProvider(W) {
						!this.I || this.I.options.id !== W || this.show(this.I);
					}
					show(W, X, Y, ie) {
						if (((W = W ?? this.G), !W)) return;
						W.onOpen?.();
						const ne = {
							getAnchor: () => ({
								x:
									(0, t.$Ogb)().innerWidth / 2 -
									Math.min(
										this.U.activeContainerDimension.width * 0.62,
										x.MAX_WIDTH,
									) /
										2,
								y: this.U.activeContainerOffset.quickPickTop,
							}),
							render: (ee) => (
								(this.J = ee),
								this.J.classList.add("accessible-view-container"),
								this.fb(W, ee, Y)
							),
							onHide: () => {
								Y ||
									(this.kb(), this.G?.dispose(), (this.G = void 0), this.ab());
							},
						};
						this.P.showContextView(ne),
							ie &&
								queueMicrotask(() => {
									this.a.revealLine(ie.lineNumber),
										this.a.setSelection({
											startLineNumber: ie.lineNumber,
											startColumn: ie.column,
											endLineNumber: ie.lineNumber,
											endColumn: ie.column,
										});
								}),
							X && this.G && this.showSymbol(this.G, X),
							W instanceof s.$ILb &&
								W.onDidRequestClearLastProvider &&
								this.D(
									W.onDidRequestClearLastProvider((ee) => {
										this.I?.options.id === ee && (this.I = void 0);
									}),
								),
							W.options.id && (this.I = W),
							W.id === s.AccessibleViewProviderId.Chat &&
								this.D(
									this.Y.registerProvider(
										{ getCodeBlockContext: () => this.getCodeBlockContext() },
										"accessibleView",
									),
								),
							W instanceof s.$JLb &&
								this.Z.store(
									`${l.$1K}${W.id}`,
									!0,
									R.StorageScope.APPLICATION,
									R.StorageTarget.USER,
								),
							W.onDidChangeContent &&
								this.D(
									W.onDidChangeContent(() => {
										this.J && this.fb(W, this.J, Y);
									}),
								);
					}
					previous() {
						const W = this.G?.providePreviousContent?.();
						!this.G || !this.J || !W || this.fb(this.G, this.J, void 0, W);
					}
					next() {
						const W = this.G?.provideNextContent?.();
						!this.G || !this.J || !W || this.fb(this.G, this.J, void 0, W);
					}
					bb() {
						return this.G
							? this.G instanceof s.$ILb
								? this.N.getValue(this.G.verbositySettingKey) === !0
								: this.Z.getBoolean(
										`${l.$1K}${this.G.id}`,
										R.StorageScope.APPLICATION,
										!1,
									)
							: !1;
					}
					goToSymbol() {
						this.G && this.M.createInstance(V, this).show(this.G);
					}
					calculateCodeBlocks(W) {
						if (
							!W ||
							this.G?.id !== s.AccessibleViewProviderId.Chat ||
							(this.G.options.language &&
								this.G.options.language !== "markdown")
						)
							return;
						const X = W.split(`
`);
						this.u = [];
						let Y = !1,
							ie = 0,
							ne;
						X.forEach((ee, _) => {
							if (!Y && ee.startsWith("```"))
								(Y = !0), (ie = _ + 1), (ne = ee.substring(3).trim());
							else if (Y && ee.endsWith("```")) {
								Y = !1;
								const te = _,
									Q = X.slice(ie, te).join(`
`);
								this.u?.push({
									startLine: ie,
									endLine: te,
									code: Q,
									languageId: ne,
								});
							}
						}),
							this.r.set(this.u.length > 0);
					}
					getSymbols() {
						const W = this.G instanceof s.$ILb ? this.G : void 0;
						if (!this.H || !W) return;
						const X = W.getSymbols?.() || [];
						if (X?.length) return X;
						if (W.options.language && W.options.language !== "markdown") return;
						const Y = r.marked.lexer(this.H);
						if (Y) return this.cb(Y, X), X.length ? X : void 0;
					}
					openHelpLink() {
						this.G?.options.readMoreUrl &&
							this.L.open(h.URI.parse(this.G.options.readMoreUrl));
					}
					configureKeybindings(W) {
						this.w = !0;
						const X = this.kb(),
							Y = W
								? X?.options?.configureKeybindingItems
								: X?.options?.configuredKeybindingItems;
						if (!Y) return;
						const ie = this.D(new m.$Zc()),
							ne = ie.add(this.$.createQuickPick());
						(ne.items = Y),
							(ne.title = (0, b.localize)(4376, null)),
							(ne.placeholder = (0, b.localize)(4377, null)),
							ne.show(),
							ie.add(
								ne.onDidAccept(async () => {
									const ee = ne.selectedItems[0];
									ee &&
										(await this.X.executeCommand(
											"workbench.action.openGlobalKeybindings",
											ee.id,
										)),
										ne.dispose();
								}),
							),
							ie.add(
								ne.onDidHide(() => {
									!ne.selectedItems.length && X && this.show(X),
										ie.dispose(),
										(this.w = !1);
								}),
							);
					}
					cb(W, X) {
						let Y;
						for (const ie of W) {
							let ne;
							if ("type" in ie)
								switch (ie.type) {
									case "heading":
									case "paragraph":
									case "code":
										ne = ie.text;
										break;
									case "list": {
										const ee = ie.items[0];
										if (!ee) break;
										(Y = `- ${ee.text}`),
											(ne = ie.items.map((_) => _.text).join(", "));
										break;
									}
								}
							ne &&
								(X.push({
									markdownToParse: ne,
									label: (0, b.localize)(4378, null, ie.type, ne),
									ariaLabel: (0, b.localize)(4379, null, ie.type, ne),
									firstListItem: Y,
								}),
								(Y = void 0));
						}
					}
					showSymbol(W, X) {
						if (!this.H) return;
						let Y = X.lineNumber;
						const ie = X.markdownToParse;
						if (!(Y === void 0 && ie === void 0)) {
							if (Y === void 0 && ie) {
								const ne =
									this.H.split(`
`).findIndex(
										(ee) =>
											ee.includes(
												ie.split(`
`)[0],
											) ||
											(X.firstListItem && ee.includes(X.firstListItem)),
									) ?? -1;
								ne >= 0 && (Y = ne + 1);
							}
							Y !== void 0 &&
								(this.show(W, void 0, void 0, { lineNumber: Y, column: 1 }),
								this.db(W, !0));
						}
					}
					disableHint() {
						this.G instanceof s.$ILb &&
							(this.N.updateValue(this.G?.verbositySettingKey, !1),
							(0, E.$oib)(
								(0, b.localize)(4380, null, this.G.verbositySettingKey),
							));
					}
					db(W, X) {
						W.options.type === s.AccessibleViewType.Help
							? (this.b.set(X), this.g.reset())
							: (this.g.set(X), this.b.reset()),
							this.h.set(
								W.provideNextContent !== void 0 ||
									W.providePreviousContent !== void 0,
							),
							this.j.set(this.bb()),
							this.m.set(this.jb() ? this.getSymbols()?.length > 0 : !1);
					}
					eb(W, X) {
						let Y = X ?? W.provideContent();
						if (W.options.type === s.AccessibleViewType.View) {
							(this.H = Y), this.s.reset(), this.t.reset();
							return;
						}
						const ie = this.ub(W),
							ne = this.ob(W),
							ee = this.sb(W),
							_ = this.tb(W);
						let te = "",
							Q = "";
						const Z = (0, B.$F2c)(this.S, ee + Y + ie + ne + _);
						Z &&
							((Y = Z.content.value),
							Z.configureKeybindingItems
								? ((W.options.configureKeybindingItems =
										Z.configureKeybindingItems),
									this.s.set(!0),
									(te = this.qb()))
								: this.t.reset(),
							Z.configuredKeybindingItems
								? ((W.options.configuredKeybindingItems =
										Z.configuredKeybindingItems),
									this.t.set(!0),
									(Q = this.rb()))
								: this.t.reset()),
							(this.H = Y + te + Q);
					}
					fb(W, X, Y, ie) {
						(this.G = W), this.n.set(W.id);
						const ne = this.bb();
						this.eb(W, ie), this.calculateCodeBlocks(this.H), this.db(W, !0);
						const ee = this.a.hasTextFocus() || this.a.hasWidgetFocus();
						this.ib(
							h.URI.from({
								path: `accessible-view-${W.id}`,
								scheme: "accessible-view",
								fragment: this.H,
							}),
						).then((Q) => {
							if (!Q || (this.a.setModel(Q), !this.a.getDomNode())) return;
							Q.setLanguage(W.options.language ?? "markdown"),
								X.appendChild(this.z);
							let se = "";
							const re =
								this.h.get() ||
								this.j.get() ||
								this.m.get() ||
								W.actions?.length;
							ne &&
								!Y &&
								re &&
								(se = W.options.position
									? (0, b.localize)(4381, null)
									: (0, b.localize)(4382, null));
							let le =
								W.options.type === s.AccessibleViewType.Help
									? (0, b.localize)(4383, null)
									: (0, b.localize)(4384, null);
							if (
								((this.C.textContent = le),
								se && W.options.type === s.AccessibleViewType.View
									? (le = (0, b.localize)(4385, null, se))
									: se && (le = (0, b.localize)(4386, null, se)),
								u.$l && ee && (le = ""),
								this.a.updateOptions({ ariaLabel: le }),
								this.a.focus(),
								this.G?.options.position)
							) {
								const oe = this.a.getPosition(),
									ae = oe?.lineNumber === 1 && oe.column === 1;
								if (
									this.G.options.position === "bottom" ||
									(this.G.options.position === "initial-bottom" && ae)
								) {
									const pe = this.editorWidget.getModel()?.getLineCount(),
										$e = pe !== void 0 && pe > 0 ? new g.$hL(pe, 1) : void 0;
									$e &&
										(this.a.setPosition($e), this.a.revealLine($e.lineNumber));
								}
							}
						}),
							this.gb(this.G.actions, W.options.type);
						const _ = (Q) => {
								this.w || W.onClose(),
									Q?.stopPropagation(),
									this.P.hideContextView(),
									this.db(W, !1),
									(this.I = void 0),
									(this.H = void 0),
									this.G?.dispose(),
									(this.G = void 0);
							},
							te = new m.$Zc();
						return (
							te.add(
								this.a.onKeyDown((Q) => {
									if (Q.keyCode === d.KeyCode.Enter)
										this.X.executeCommand("editor.action.openLink");
									else if (
										Q.keyCode === d.KeyCode.Escape ||
										G(Q.browserEvent, this.S, this.N)
									)
										_(Q);
									else if (
										Q.keyCode === d.KeyCode.KeyH &&
										W.options.readMoreUrl
									) {
										const Z = W.options.readMoreUrl;
										(0, E.$oib)(o.AccessibilityHelpNLS.openingDocs),
											this.L.open(h.URI.parse(Z)),
											Q.preventDefault(),
											Q.stopPropagation();
									}
									W instanceof s.$ILb && W.onKeyDown?.(Q);
								}),
							),
							te.add(
								(0, t.$0fb)(this.F.getElement(), t.$$gb.KEY_DOWN, (Q) => {
									new i.$7fb(Q).equals(d.KeyCode.Escape) && _(Q);
								}),
							),
							te.add(
								this.a.onDidBlurEditorWidget(() => {
									(0, t.$Kgb)(this.F.getElement()) || _();
								}),
							),
							te.add(this.a.onDidContentSizeChange(() => this.hb())),
							te.add(this.U.onDidLayoutActiveContainer(() => this.hb())),
							te
						);
					}
					gb(W, X) {
						this.F.setAriaLabel(
							X === s.AccessibleViewType.Help
								? (0, b.localize)(4387, null)
								: (0, b.localize)(4388, null),
						);
						const Y = [],
							ie = this.D(this.W.createMenu(v.$XX.AccessibleView, this.Q));
						if (((0, y.$Kyb)(ie, {}, Y), W)) {
							for (const ne of W)
								(ne.class =
									ne.class || a.ThemeIcon.asClassName(C.$ak.primitiveSquare)),
									(ne.checked = void 0);
							this.F.setActions([...W, ...Y]);
						} else this.F.setActions(Y);
					}
					hb() {
						const W = this.U.activeContainerDimension,
							X = W.height && W.height * 0.4,
							Y = Math.min(X, this.a.getContentHeight()),
							ie = Math.min(W.width * 0.62, x.MAX_WIDTH);
						this.a.layout({ width: ie, height: Y });
					}
					async ib(W) {
						const X = this.O.getModel(W);
						return X && !X.isDisposed()
							? X
							: this.O.createModel(W.fragment, null, W, !1);
					}
					jb() {
						return this.G
							? this.G.options.type === s.AccessibleViewType.Help ||
									this.G.options.language === "markdown" ||
									this.G.options.language === void 0 ||
									(this.G instanceof s.$ILb && !!this.G.getSymbols?.())
							: !1;
					}
					kb() {
						const W = this.G;
						return W
							? W instanceof s.$ILb
								? new s.$ILb(
										W.id,
										W.options,
										W.provideContent.bind(W),
										W.onClose.bind(W),
										W.verbositySettingKey,
										W.onOpen?.bind(W),
										W.actions,
										W.provideNextContent?.bind(W),
										W.providePreviousContent?.bind(W),
										W.onDidChangeContent?.bind(W),
										W.onKeyDown?.bind(W),
										W.getSymbols?.bind(W),
									)
								: new s.$JLb(
										W.id,
										W.options,
										W.provideContent.bind(W),
										W.onClose.bind(W),
										W.onOpen?.bind(W),
										W.provideNextContent?.bind(W),
										W.providePreviousContent?.bind(W),
										W.actions,
										W.onDidChangeContent?.bind(W),
									)
							: void 0;
					}
					showAccessibleViewHelp() {
						const W = this.kb();
						if (!W) return;
						let X;
						W instanceof s.$ILb
							? (X = new s.$ILb(
									W.id,
									{ type: s.AccessibleViewType.Help },
									() =>
										W.options.customHelp
											? W?.options.customHelp()
											: this.lb(this.jb()),
									() => {
										this.P.hideContextView(),
											queueMicrotask(() => this.show(W));
									},
									W.verbositySettingKey,
								))
							: (X = new s.$JLb(
									W.id,
									{ type: s.AccessibleViewType.Help },
									() =>
										W.options.customHelp
											? W?.options.customHelp()
											: this.lb(this.jb()),
									() => {
										this.P.hideContextView(),
											queueMicrotask(() => this.show(W));
									},
								)),
							this.P.hideContextView(),
							X && queueMicrotask(() => this.show(X, void 0, !0));
					}
					lb(W) {
						const X = this.nb(),
							Y = this.pb(W),
							ie = (0, b.localize)(4389, null),
							ne = this.mb();
						let ee = (0, b.localize)(4390, null);
						return (
							X &&
								(ee +=
									" - " +
									X +
									`
`),
							Y &&
								(ee +=
									" - " +
									Y +
									`
`),
							ie &&
								(ee +=
									" - " +
									ie +
									`
`),
							ne && (ee += ne),
							ee
						);
					}
					mb() {
						if (this.G?.id === s.AccessibleViewProviderId.Chat)
							return [
								(0, b.localize)(
									4391,
									null,
									"<keybinding:workbench.action.chat.insertCodeBlock>",
								),
								(0, b.localize)(
									4392,
									null,
									"<keybinding:workbench.action.chat.insertIntoNewFile>",
								),
								(0, b.localize)(
									4393,
									null,
									"<keybinding:workbench.action.chat.runInTerminal>",
								),
							].join(`
`);
					}
					nb() {
						return (0, b.localize)(
							4394,
							null,
							`<keybinding:${U.AccessibilityCommandId.ShowNext}`,
							`<keybinding:${U.AccessibilityCommandId.ShowPrevious}>`,
						);
					}
					ob(W) {
						return W.options.type === s.AccessibleViewType.Help && this.bb()
							? (0, b.localize)(
									4395,
									null,
									`<keybinding:${U.AccessibilityCommandId.DisableVerbosityHint}>`,
								)
							: "";
					}
					pb(W) {
						if (W)
							return (0, b.localize)(
								4396,
								null,
								`<keybinding:${U.AccessibilityCommandId.GoToSymbol}>`,
							);
					}
					qb() {
						const W = this.S.lookupKeybinding(
								U.AccessibilityCommandId.AccessibilityHelpConfigureKeybindings,
							)?.getAriaLabel(),
							X = W
								? "(" + W + ")"
								: "by assigning a keybinding to the command Accessibility Help Configure Unassigned Keybindings.";
						return (0, b.localize)(4397, null, X);
					}
					rb() {
						const W = this.S.lookupKeybinding(
								U.AccessibilityCommandId
									.AccessibilityHelpConfigureAssignedKeybindings,
							)?.getAriaLabel(),
							X = W
								? "(" + W + ")"
								: "by assigning a keybinding to the command Accessibility Help Configure Assigned Keybindings.";
						return (0, b.localize)(4398, null, X);
					}
					sb(W) {
						const X = this.R.isScreenReaderOptimized();
						let Y = "";
						const ie = u.$m
							? o.AccessibilityHelpNLS.changeConfigToOnMac
							: o.AccessibilityHelpNLS.changeConfigToOnWinLinux;
						return (
							X && W.id === s.AccessibleViewProviderId.Editor
								? ((Y = o.AccessibilityHelpNLS.auto_on),
									(Y += `
`))
								: X ||
									((Y =
										o.AccessibilityHelpNLS.auto_off +
										`
` +
										ie),
									(Y += `
`)),
							Y
						);
					}
					tb(W) {
						return this.bb() && !W.options.position
							? (0, b.localize)(4399, null)
							: "";
					}
					ub(W) {
						return W.options.readMoreUrl
							? (0, b.localize)(
									4400,
									null,
									`<keybinding:${U.AccessibilityCommandId.AccessibilityHelpOpenHelpLink}>`,
								)
							: "";
					}
				};
				(e.$G2c = H),
					(e.$G2c = H =
						Ne(
							[
								j(0, N.$7rb),
								j(1, k.$Li),
								j(2, I.$gj),
								j(3, p.$QO),
								j(4, P.$Wxb),
								j(5, T.$6j),
								j(6, l.$XK),
								j(7, L.$uZ),
								j(8, M.$jEb),
								j(9, v.$YX),
								j(10, S.$ek),
								j(11, z.$KYb),
								j(12, R.$lq),
								j(13, A.$DJ),
							],
							H,
						));
				let q = class extends m.$1c {
					constructor(W, X, Y) {
						super(), (this.b = W), (this.f = X), (this.g = Y);
					}
					show(W, X) {
						this.a || (this.a = this.D(this.b.createInstance(H))),
							this.a.show(W, void 0, void 0, X);
					}
					configureKeybindings(W) {
						this.a?.configureKeybindings(W);
					}
					openHelpLink() {
						this.a?.openHelpLink();
					}
					showLastProvider(W) {
						this.a?.showLastProvider(W);
					}
					next() {
						this.a?.next();
					}
					previous() {
						this.a?.previous();
					}
					goToSymbol() {
						this.a?.goToSymbol();
					}
					getOpenAriaHint(W) {
						if (!this.f.getValue(W)) return null;
						const X = this.g
							.lookupKeybinding(U.AccessibilityCommandId.OpenAccessibleView)
							?.getAriaLabel();
						let Y = null;
						return (
							X
								? (Y = (0, b.localize)(4401, null, X))
								: (Y = (0, b.localize)(4402, null)),
							Y
						);
					}
					disableHint() {
						this.a?.disableHint();
					}
					showAccessibleViewHelp() {
						this.a?.showAccessibleViewHelp();
					}
					getPosition(W) {
						return this.a?.getPosition(W) ?? void 0;
					}
					getLastPosition() {
						const W = this.a?.editorWidget.getModel()?.getLineCount();
						return W !== void 0 && W > 0 ? new g.$hL(W, 1) : void 0;
					}
					setPosition(W, X, Y) {
						this.a?.setPosition(W, X, Y);
					}
					getCodeBlockContext() {
						return this.a?.getCodeBlockContext();
					}
					navigateToCodeBlock(W) {
						this.a?.navigateToCodeBlock(W);
					}
				};
				(e.$H2c = q),
					(e.$H2c = q = Ne([j(0, k.$Li), j(1, I.$gj), j(2, L.$uZ)], q));
				let V = class {
					constructor(W, X) {
						(this.a = W), (this.b = X);
					}
					show(W) {
						const X = new m.$Zc(),
							Y = X.add(this.b.createQuickPick());
						(Y.placeholder = (0, b.localize)(4403, null)),
							(Y.title = (0, b.localize)(4404, null));
						const ie = [],
							ne = this.a.getSymbols();
						if (ne) {
							for (const ee of ne)
								ie.push({ label: ee.label, ariaLabel: ee.ariaLabel });
							(Y.canSelectMany = !1),
								(Y.items = ne),
								Y.show(),
								X.add(
									Y.onDidAccept(() => {
										this.a.showSymbol(W, Y.selectedItems[0]), Y.hide();
									}),
								),
								X.add(
									Y.onDidHide(() => {
										Y.selectedItems.length === 0 && this.a.show(W), X.dispose();
									}),
								);
						}
					}
				};
				V = Ne([j(1, A.$DJ)], V);
				function G(J, W, X) {
					if (
						!X.getValue(
							O.AccessibilityWorkbenchSettingId.AccessibleViewCloseOnKeyPress,
						)
					)
						return !1;
					const Y = new i.$7fb(J),
						ne =
							W.softDispatch(Y, Y.target).kind ===
							D.ResultKind.MoreChordsNeeded;
					return W.inChordMode || ne
						? !1
						: K(J) && !J.ctrlKey && !J.altKey && !J.metaKey && !J.shiftKey;
				}
				function K(J) {
					return !!J.code.match(
						/^(Key[A-Z]|Digit[0-9]|Equal|Comma|Period|Slash|Quote|Backquote|Backslash|Minus|Semicolon|Space|Enter)$/,
					);
				}
			},
		),
		define(
			de[845],
			he([
				1, 0, 7, 595, 183, 14, 6, 3, 23, 19, 9, 653, 46, 65, 206, 309, 38, 17,
				98, 74, 64, 1540, 67, 960, 42, 1684, 785, 375, 1037, 448, 603, 963, 440,
				956, 1646, 964, 4, 91, 173, 10, 8, 57, 22, 5, 128, 73, 41, 233, 100,
				130, 207, 283, 394, 504, 521, 28, 2391,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FYb = e.$EYb = e.$DYb = e.$CYb = e.$AYb = void 0),
					(e.$BYb = Z),
					(t = mt(t));
				const Q = t.$;
				e.$AYb = "vscode-local-file";
				function Z(pe) {
					let $e;
					try {
						$e = JSON.parse(pe);
					} catch {
						throw new Error("Could not parse code block local file data");
					}
					let ye;
					try {
						ye = u.URI.revive($e?.uri);
					} catch {
						throw new Error("Invalid code block local file data URI");
					}
					let ue;
					return (
						$e.range &&
							(ue = new o.$iL(
								$e.range.startLineNumber + 1,
								$e.range.startColumn + 1,
								$e.range.endLineNumber + 1,
								$e.range.endColumn + 1,
							)),
						{ uri: ye, range: ue }
					);
				}
				const se = 10;
				let re = class extends d.$1c {
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce) {
						super(),
							(this.r = $e),
							(this.menuId = ye),
							(this.s = ge),
							(this.t = be),
							(this.u = Ce),
							(this.a = this.D(new C.$re())),
							(this.onDidChangeContentHeight = this.a.event),
							(this.j = 0),
							(this.m = this.D(new d.$Zc())),
							(this.n = !1),
							(this.element = Q(".interactive-result-code-block")),
							(this.q = this.D(me.createInstance(W.$BQb))),
							(this.c = this.D(ve.createScoped(this.element)));
						const Le = this.D(me.createChild(new V.$Ki([F.$6j, this.c]))),
							Fe = t.$fhb(this.element, Q(".interactive-result-editor"));
						this.editor = this.w(Le, Fe, {
							...(0, _.$xYb)(this.t),
							readOnly: !0,
							lineNumbers: "off",
							selectOnLineNumbers: !0,
							scrollBeyondLastLine: !1,
							lineDecorationsWidth: 8,
							dragAndDrop: !1,
							padding: { top: se, bottom: se },
							mouseWheelZoom: !1,
							scrollbar: { vertical: "hidden", alwaysConsumeMouseWheel: !1 },
							definitionLinkOpensInPeek: !1,
							gotoLocation: {
								multiple: "goto",
								multipleDeclarations: "goto",
								multipleDefinitions: "goto",
								multipleImplementations: "goto",
							},
							ariaLabel: (0, O.localize)(4716, null),
							overflowWidgetsDomNode: fe,
							...this.C(),
						});
						const Oe = t.$fhb(
								this.element,
								Q(".interactive-result-code-block-toolbar"),
							),
							xe = this.editor.contextKeyService.createScoped(Oe),
							He = this.D(Le.createChild(new V.$Ki([F.$6j, xe])));
						this.b = this.D(
							He.createInstance(U.$Tyb, Oe, ye, {
								menuOptions: { shouldForwardArgs: !0 },
							}),
						);
						const Ke = t.$fhb(this.element, Q(".interactive-result-vulns")),
							Je = t.$fhb(Ke, Q(".interactive-result-vulns-header", void 0));
						(this.f = this.D(
							new w.$oob(Je, {
								buttonBackground: void 0,
								buttonBorder: void 0,
								buttonForeground: void 0,
								buttonHoverBackground: void 0,
								buttonSecondaryBackground: void 0,
								buttonSecondaryForeground: void 0,
								buttonSecondaryHoverBackground: void 0,
								buttonSeparator: void 0,
								supportIcons: !0,
							}),
						)),
							(this.g = t.$fhb(Ke, Q("ul.interactive-result-vulns-list"))),
							this.D(
								this.f.onDidClick(() => {
									const Te = this.h.element;
									(Te.vulnerabilitiesListExpanded =
										!Te.vulnerabilitiesListExpanded),
										(this.f.label = this.I()),
										this.element.classList.toggle(
											"chat-vulnerabilities-collapsed",
											!Te.vulnerabilitiesListExpanded,
										),
										this.a.fire();
								}),
							),
							this.D(
								this.b.onDidChangeDropdownVisibility((Te) => {
									Oe.classList.toggle("force-visibility", Te);
								}),
							),
							this.z(),
							this.D(this.u.onDidChangeScreenReaderOptimized(() => this.z())),
							this.D(
								this.t.onDidChangeConfiguration((Te) => {
									Te.affectedKeys.has(X.AccessibilityVerbositySettingId.Chat) &&
										this.z();
								}),
							),
							this.D(
								this.r.onDidChange(() => {
									this.editor.updateOptions(this.C());
								}),
							),
							this.D(
								this.editor.onDidScrollChange((Te) => {
									this.j = Te.scrollWidth;
								}),
							),
							this.D(
								this.editor.onDidContentSizeChange((Te) => {
									Te.contentHeightChanged && this.a.fire();
								}),
							),
							this.D(
								this.editor.onDidBlurEditorWidget(() => {
									this.element.classList.remove("focused"),
										R.$rPb.get(this.editor)?.stopHighlighting(),
										this.G();
								}),
							),
							this.D(
								this.editor.onDidFocusEditorWidget(() => {
									this.element.classList.add("focused"),
										R.$rPb.get(this.editor)?.restoreViewState(!0);
								}),
							),
							ue.onDidScroll &&
								this.D(
									ue.onDidScroll((Te) => {
										this.G();
									}),
								);
					}
					dispose() {
						(this.n = !0), super.dispose();
					}
					get uri() {
						return this.editor.getModel()?.uri;
					}
					w($e, ye, ue) {
						return this.D(
							$e.createInstance(n.$rwb, ye, ue, {
								isSimpleWidget: !1,
								contributions:
									h.EditorExtensionsRegistry.getSomeEditorContributions([
										ne.$_Xb.ID,
										ee.$aYb,
										T.$2Mb.ID,
										R.$rPb.ID,
										N.$iPb.ID,
										S.$ezb.ID,
										A.$kPb.ID,
										k.$whc.ID,
										L.$2Ob.ID,
										M.$Szb.ID,
										P.$YOb.ID,
										I.$YBb.ID,
										D.$6Ob.ID,
									]),
							}),
						);
					}
					focus() {
						this.editor.focus();
					}
					y() {
						const $e = this.j > this.editor.getLayoutInfo().contentWidth,
							ye = this.editor.getLayoutInfo().horizontalScrollbarHeight,
							ue = $e ? Math.max(se - ye, 2) : se;
						this.editor.updateOptions({ padding: { top: se, bottom: ue } });
					}
					z() {
						const $e = this.b.getElement();
						this.u.isScreenReaderOptimized()
							? (($e.style.display = "block"),
								($e.ariaLabel = this.t.getValue(
									X.AccessibilityVerbositySettingId.Chat,
								)
									? (0, O.localize)(4717, null)
									: (0, O.localize)(4718, null)))
							: ($e.style.display = "");
					}
					C() {
						return {
							wordWrap: this.r.configuration.resultEditor.wordWrap,
							fontLigatures: this.r.configuration.resultEditor.fontLigatures,
							bracketPairColorization:
								this.r.configuration.resultEditor.bracketPairColorization,
							fontFamily:
								this.r.configuration.resultEditor.fontFamily === "default"
									? p.EDITOR_FONT_DEFAULTS.fontFamily
									: this.r.configuration.resultEditor.fontFamily,
							fontSize: this.r.configuration.resultEditor.fontSize,
							fontWeight: this.r.configuration.resultEditor.fontWeight,
							lineHeight: this.r.configuration.resultEditor.lineHeight,
						};
					}
					layout($e) {
						const ye = this.F();
						this.editor.layout({ width: $e - 2, height: ye }), this.y();
					}
					F() {
						if (this.h?.range) {
							const $e =
									this.h.range.endLineNumber - this.h.range.startLineNumber + 1,
								ye = this.editor.getOption(p.EditorOption.lineHeight);
							return $e * ye;
						}
						return this.editor.getContentHeight();
					}
					async render($e, ye, ue) {
						(this.h = $e),
							$e.parentContextKeyService &&
								this.c.updateParent($e.parentContextKeyService),
							this.r.configuration.resultEditor.wordWrap === "on" &&
								this.layout(ye),
							await this.H($e),
							!this.n &&
								(this.layout(ye),
								ue &&
									(this.m.clear(),
									this.m.add(
										this.editor.onDidFocusEditorWidget(() =>
											a.$rsb.setTabFocusMode(!0),
										),
									),
									this.m.add(
										this.editor.onDidBlurEditorWidget(() =>
											a.$rsb.setTabFocusMode(!1),
										),
									)),
								this.editor.updateOptions({
									ariaLabel: (0, O.localize)(4719, null, $e.codeBlockIndex + 1),
									readOnly: !ue,
								}),
								$e.hideToolbar
									? t.hide(this.b.getElement())
									: t.show(this.b.getElement()),
								$e.vulns?.length && (0, ie.$$Tb)($e.element)
									? (t.$9fb(this.g),
										this.element.classList.remove("no-vulns"),
										this.element.classList.toggle(
											"chat-vulnerabilities-collapsed",
											!$e.element.vulnerabilitiesListExpanded,
										),
										t.$fhb(
											this.g,
											...$e.vulns.map((fe) =>
												Q(
													"li",
													void 0,
													Q("span.chat-vuln-title", void 0, fe.title),
													" " + fe.description,
												),
											),
										),
										(this.f.label = this.I()))
									: this.element.classList.add("no-vulns"));
					}
					reset() {
						this.G();
					}
					G() {
						k.$whc.get(this.editor)?.hideContentHover(),
							L.$2Ob.get(this.editor)?.hideContentHover();
					}
					async H($e) {
						const ye = (await $e.textModel).textEditorModel;
						this.editor.setModel(ye),
							$e.range &&
								(this.editor.setSelection($e.range),
								this.editor.revealRangeInCenter(
									$e.range,
									f.ScrollType.Immediate,
								)),
							(this.b.context = {
								code: ye
									.getTextBuffer()
									.getValueInRange(
										$e.range ?? ye.getFullModelRange(),
										s.EndOfLinePreference.TextDefined,
									),
								codeBlockIndex: $e.codeBlockIndex,
								element: $e.element,
								languageId: ye.getLanguageId(),
							}),
							this.q.set(ye.uri);
					}
					I() {
						return !this.h || !this.h.vulns
							? ""
							: `${this.h.vulns.length > 1 ? ((0, O.localize))(4720, null, this.h.vulns.length) : ((0, O.localize))(4721, null, 1)} $(${((ue) => (ue.vulnerabilitiesListExpanded ? E.$ak.chevronDown : E.$ak.chevronRight))(this.h.element).id})`;
					}
				};
				(e.$CYb = re),
					(e.$CYb = re =
						Ne(
							[j(4, q.$Li), j(5, F.$6j), j(6, y.$QO), j(7, z.$gj), j(8, B.$XK)],
							re,
						));
				let le = class extends d.$1c {
					constructor($e, ye) {
						super(),
							(this.a = ye),
							this.D(
								$e.registerTextModelContentProvider(
									m.Schemas.vscodeChatCodeBlock,
									this,
								),
							);
					}
					async provideTextContent($e) {
						const ye = this.a.getModel($e);
						return ye || this.a.createModel("", null, $e);
					}
				};
				(e.$DYb = le), (e.$DYb = le = Ne([j(0, v.$MO), j(1, y.$QO)], le));
				let oe = class extends d.$1c {
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le, Fe) {
						super(),
							(this.n = $e),
							(this.menuId = ye),
							(this.q = ge),
							(this.r = be),
							(this.s = Ce),
							(this.t = Le),
							(this.u = Fe),
							(this.a = this.D(new C.$re())),
							(this.onDidChangeContentHeight = this.a.event),
							(this.j = this.B.add(new d.$2c())),
							(this.m = 0),
							(this.element = Q(".interactive-result-code-block")),
							this.element.classList.add("compare"),
							(this.h = t.$fhb(this.element, Q(".message"))),
							this.h.setAttribute("role", "status"),
							(this.h.tabIndex = 0),
							(this.b = this.D(ve.createScoped(this.element)));
						const Oe = this.D(me.createChild(new V.$Ki([F.$6j, this.b]))),
							xe = t.$fhb(
								this.element,
								Q(".interactive-result-header.show-file-icons"),
							),
							He = t.$fhb(this.element, Q(".interactive-result-editor"));
						(this.c = this.w(Oe, He, {
							...(0, _.$xYb)(this.r),
							lineNumbers: "on",
							selectOnLineNumbers: !0,
							scrollBeyondLastLine: !1,
							lineDecorationsWidth: 12,
							dragAndDrop: !1,
							padding: { top: se, bottom: se },
							mouseWheelZoom: !1,
							scrollbar: { vertical: "hidden", alwaysConsumeMouseWheel: !1 },
							definitionLinkOpensInPeek: !1,
							gotoLocation: {
								multiple: "goto",
								multipleDeclarations: "goto",
								multipleDefinitions: "goto",
								multipleImplementations: "goto",
							},
							ariaLabel: (0, O.localize)(4722, null),
							overflowWidgetsDomNode: fe,
							...this.C(),
						})),
							(this.f = this.D(
								Oe.createInstance(J.$vPb, xe, { supportIcons: !0 }),
							));
						const Ke = this.c
								.getModifiedEditor()
								.contextKeyService.createScoped(xe),
							Je = this.D(Oe.createChild(new V.$Ki([F.$6j, Ke])));
						(this.g = this.D(
							Je.createInstance(U.$Tyb, xe, ye, {
								menuOptions: { shouldForwardArgs: !0 },
							}),
						)),
							this.z(),
							this.D(this.s.onDidChangeScreenReaderOptimized(() => this.z())),
							this.D(
								this.r.onDidChangeConfiguration((Te) => {
									Te.affectedKeys.has(X.AccessibilityVerbositySettingId.Chat) &&
										this.z();
								}),
							),
							this.D(
								this.n.onDidChange(() => {
									this.c.updateOptions(this.C());
								}),
							),
							this.D(
								this.c.getModifiedEditor().onDidScrollChange((Te) => {
									this.m = Te.scrollWidth;
								}),
							),
							this.D(
								this.c.onDidContentSizeChange((Te) => {
									Te.contentHeightChanged && this.a.fire();
								}),
							),
							this.D(
								this.c.getModifiedEditor().onDidBlurEditorWidget(() => {
									this.element.classList.remove("focused"),
										R.$rPb.get(this.c.getModifiedEditor())?.stopHighlighting(),
										this.G();
								}),
							),
							this.D(
								this.c.getModifiedEditor().onDidFocusEditorWidget(() => {
									this.element.classList.add("focused"),
										R.$rPb
											.get(this.c.getModifiedEditor())
											?.restoreViewState(!0);
								}),
							),
							ue.onDidScroll &&
								this.D(
									ue.onDidScroll((Te) => {
										this.G();
									}),
								);
					}
					get uri() {
						return this.c.getModifiedEditor().getModel()?.uri;
					}
					w($e, ye, ue) {
						const fe = {
							isSimpleWidget: !1,
							contributions:
								h.EditorExtensionsRegistry.getSomeEditorContributions([
									ne.$_Xb.ID,
									ee.$aYb,
									T.$2Mb.ID,
									R.$rPb.ID,
									N.$iPb.ID,
									S.$ezb.ID,
									A.$kPb.ID,
									k.$whc.ID,
									L.$2Ob.ID,
									P.$YOb.ID,
								]),
						};
						return this.D(
							$e.createInstance(
								g.$3yb,
								ye,
								{
									scrollbar: {
										useShadows: !1,
										alwaysConsumeMouseWheel: !1,
										ignoreHorizontalScrollbarInContentHeight: !0,
									},
									renderMarginRevertIcon: !1,
									diffCodeLens: !1,
									scrollBeyondLastLine: !1,
									stickyScroll: { enabled: !1 },
									originalAriaLabel: (0, O.localize)(4723, null),
									modifiedAriaLabel: (0, O.localize)(4724, null),
									diffAlgorithm: "advanced",
									readOnly: !1,
									isInEmbeddedEditor: !0,
									useInlineViewWhenSpaceIsLimited: !0,
									experimental: { useTrueInlineView: !0 },
									renderSideBySideInlineBreakpoint: 300,
									renderOverviewRuler: !1,
									compactMode: !0,
									hideUnchangedRegions: { enabled: !0, contextLineCount: 1 },
									renderGutterMenu: !1,
									lineNumbersMinChars: 1,
									...ue,
								},
								{ originalEditor: fe, modifiedEditor: fe },
							),
						);
					}
					focus() {
						this.c.focus();
					}
					y() {
						const $e =
								this.m >
								this.c.getModifiedEditor().getLayoutInfo().contentWidth,
							ye = this.c
								.getModifiedEditor()
								.getLayoutInfo().horizontalScrollbarHeight,
							ue = $e ? Math.max(se - ye, 2) : se;
						this.c.updateOptions({ padding: { top: se, bottom: ue } });
					}
					z() {
						const $e = this.g.getElement();
						this.s.isScreenReaderOptimized()
							? (($e.style.display = "block"),
								($e.ariaLabel = this.r.getValue(
									X.AccessibilityVerbositySettingId.Chat,
								)
									? (0, O.localize)(4725, null)
									: (0, O.localize)(4726, null)))
							: ($e.style.display = "");
					}
					C() {
						return {
							wordWrap: this.n.configuration.resultEditor.wordWrap,
							fontLigatures: this.n.configuration.resultEditor.fontLigatures,
							bracketPairColorization:
								this.n.configuration.resultEditor.bracketPairColorization,
							fontFamily:
								this.n.configuration.resultEditor.fontFamily === "default"
									? p.EDITOR_FONT_DEFAULTS.fontFamily
									: this.n.configuration.resultEditor.fontFamily,
							fontSize: this.n.configuration.resultEditor.fontSize,
							fontWeight: this.n.configuration.resultEditor.fontWeight,
							lineHeight: this.n.configuration.resultEditor.lineHeight,
						};
					}
					layout($e) {
						const ye = this.F(),
							fe = { width: $e - 2, height: ye };
						(this.element.style.height = `${fe.height}px`),
							(this.element.style.width = `${fe.width}px`),
							this.c.layout(fe),
							this.y();
					}
					F() {
						return this.c.getModel()
							? this.c.getContentHeight()
							: t.$zgb(this.h);
					}
					async render($e, ye, ue) {
						$e.parentContextKeyService &&
							this.b.updateParent($e.parentContextKeyService),
							this.n.configuration.resultEditor.wordWrap === "on" &&
								this.layout(ye),
							await this.H($e, ue),
							this.layout(ye),
							this.c.updateOptions({ ariaLabel: (0, O.localize)(4727, null) }),
							this.f.element.setFile($e.edit.uri, {
								fileKind: H.FileKind.FILE,
								fileDecorations: { colors: !0, badges: !1 },
							});
					}
					reset() {
						this.G();
					}
					G() {
						k.$whc.get(this.c.getOriginalEditor())?.hideContentHover(),
							k.$whc.get(this.c.getModifiedEditor())?.hideContentHover(),
							L.$2Ob.get(this.c.getOriginalEditor())?.hideContentHover(),
							L.$2Ob.get(this.c.getModifiedEditor())?.hideContentHover();
					}
					async H($e, ye) {
						if (!(0, ie.$$Tb)($e.element)) return;
						const ue = !!($e.edit.state?.applied ?? 0);
						if (
							(Y.$Z1.bindTo(this.b).set(ue),
							this.element.classList.toggle("no-diff", ue),
							ue)
						) {
							(0, te.$vg)($e.edit.state?.applied);
							const me = this.t.getUriLabel($e.edit.uri, {
								relative: !0,
								noPrefix: !0,
							});
							let ve;
							$e.edit.state.applied === 1
								? (ve = (0, O.localize)(4728, null, me))
								: $e.edit.state.applied < 0
									? (ve = (0, O.localize)(4729, null, me))
									: (ve = (0, O.localize)(
											4730,
											null,
											$e.edit.state.applied,
											me,
										));
							const ge = (0, i.$kib)(ve, {
								renderCodeSegments: !0,
								actionHandler: {
									callback: () => {
										this.u.open($e.edit.uri, {
											fromUserGesture: !0,
											allowCommands: !1,
										});
									},
									disposables: this.B,
								},
							});
							t.$hhb(this.h, ge);
						}
						const fe = await $e.diffData;
						if (!ue && fe) {
							const me = this.c.createViewModel({
								original: fe.original,
								modified: fe.modified,
							});
							if ((await me.waitForDiff(), ye.isCancellationRequested)) return;
							const ve = C.Event.any(
								fe.original.onWillDispose,
								fe.modified.onWillDispose,
							)(() => {
								this.c.setModel(null);
							});
							this.c.setModel(me), (this.j.value = (0, d.$Xc)(ve, me));
						} else
							this.c.setModel(null), (this.j.value = void 0), this.a.fire();
						this.g.context = {
							edit: $e.edit,
							element: $e.element,
							diffEditor: this.c,
						};
					}
				};
				(e.$EYb = oe),
					(e.$EYb = oe =
						Ne(
							[
								j(4, q.$Li),
								j(5, F.$6j),
								j(6, y.$QO),
								j(7, z.$gj),
								j(8, B.$XK),
								j(9, G.$3N),
								j(10, K.$7rb),
							],
							oe,
						));
				let ae = class {
					constructor($e, ye, ue) {
						(this.b = $e),
							(this.c = ye),
							(this.d = ue),
							(this.a = new $.$1Mb());
					}
					async apply($e, ye, ue) {
						if (!$e.response.value.includes(ye) || ye.state?.applied) return;
						if (!ue)
							for (const me of this.c.listDiffEditors()) {
								if (!me.getContainerDomNode().isConnected) continue;
								const ve = me.getModel();
								if (
									!ve ||
									!(0, r.$gh)(ve.original.uri, ye.uri) ||
									ve.modified.uri.scheme !==
										m.Schemas.vscodeChatCodeCompareBlock
								) {
									ue = me;
									break;
								}
							}
						const fe = ue ? await this.f(ue, ye) : await this.g(ye);
						$e.setEditApplied(ye, fe);
					}
					async f($e, ye) {
						const ue = $e.getModel();
						if (!ue) return 0;
						const fe = $e.getDiffComputationResult();
						if (!fe || fe.identical || !(await this.h(ue.original, ye)))
							return 0;
						const me = new l.$iyb(ue.modified),
							ve = fe.changes2.map((ge) =>
								ge.toRangeMapping().toTextEdit(me).toSingleEditOperation(),
							);
						return (
							ue.original.pushStackElement(),
							ue.original.pushEditOperations(null, ve, () => null),
							ue.original.pushStackElement(),
							ve.length
						);
					}
					async g($e) {
						const ye = await this.b.createModelReference($e.uri);
						try {
							if (!(await this.h(ye.object.textEditorModel, $e))) return 0;
							ye.object.textEditorModel.pushStackElement();
							let ue = 0;
							for (const fe of $e.edits) {
								const me = fe.map(b.$iM.asEditOperation);
								ye.object.textEditorModel.pushEditOperations(
									null,
									me,
									() => null,
								),
									(ue += me.length);
							}
							return ye.object.textEditorModel.pushStackElement(), ue;
						} finally {
							ye.dispose();
						}
					}
					async h($e, ye) {
						return !(
							ye.state?.sha1 &&
							this.a.computeSHA1($e) &&
							this.a.computeSHA1($e) !== ye.state.sha1 &&
							!(
								await this.d.confirm({
									message: (0, O.localize)(4731, null),
									detail: (0, O.localize)(4732, null),
								})
							).confirmed
						);
					}
					discard($e, ye) {
						$e.response.value.includes(ye) &&
							(ye.state?.applied || $e.setEditApplied(ye, -1));
					}
				};
				(e.$FYb = ae),
					(e.$FYb = ae = Ne([j(0, v.$MO), j(1, c.$dtb), j(2, x.$GO)], ae));
			},
		),
		define(
			de[3762],
			he([
				1, 0, 7, 33, 6, 3, 23, 19, 28, 9, 47, 74, 122, 67, 960, 42, 4, 11, 20,
				5, 979, 845, 218, 283,
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
					(e.$NXb = e.$MXb = void 0),
					(t = mt(t));
				const v = t.$,
					S = (0, b.$Mi)("ICodeCompareModelService");
				let I = class extends E.$1c {
					constructor(L, D, M, N, A, R) {
						super(),
							(this.c = R),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeHeight = this.b.event);
						const O = D.element;
						if (
							((0, m.$vg)((0, $.$$Tb)(O)), M.renderTextEditsAsSummary?.(L.uri))
						)
							O.response.value.every((B) => B.kind === "textEditGroup")
								? (this.domNode = v(
										".interactive-edits-summary",
										void 0,
										O.isComplete
											? O.isCanceled
												? (0, p.localize)(4664, null)
												: (0, p.localize)(4665, null)
											: "",
									))
								: (this.domNode = v("div"));
						else {
							const B = new i.$Ce();
							let U = !1;
							this.D(
								(0, E.$Yc)(() => {
									(U = !0), B.dispose(!0);
								}),
							),
								(this.a = this.D(N.get())),
								this.D(
									this.a.object.onDidChangeContentHeight(() => {
										this.b.fire();
									}),
								);
							const z = {
								element: O,
								edit: L,
								diffData: (async () => {
									const F = await this.c.createModel(O, L);
									if (U) {
										F.dispose();
										return;
									}
									return (
										this.D(F),
										{
											modified: F.object.modified.textEditorModel,
											original: F.object.original.textEditorModel,
											originalSha1: F.object.originalSha1,
										}
									);
								})(),
							};
							this.a.object.render(z, A, B.token),
								(this.domNode = this.a.object.element);
						}
					}
					layout(L) {
						this.a?.object.layout(L);
					}
					hasSameContent(L) {
						return L.kind === "textEditGroup";
					}
					addDisposable(L) {
						this.D(L);
					}
				};
				(e.$MXb = I), (e.$MXb = I = Ne([j(5, S)], I));
				let T = class extends E.$1c {
					inUse() {
						return this.a.inUse;
					}
					constructor(L, D, M, N) {
						super(),
							(this.a = this.D(
								new s.$hUb(() =>
									N.createInstance(l.$EYb, L, o.$XX.ChatCompareBlock, D, M),
								),
							));
					}
					get() {
						const L = this.a.get();
						let D = !1;
						return {
							object: L,
							isStale: () => D,
							dispose: () => {
								L.reset(), (D = !0), this.a.release(L);
							},
						};
					}
				};
				(e.$NXb = T), (e.$NXb = T = Ne([j(3, b.$Li)], T));
				let P = class {
					constructor(L, D, M) {
						(this.a = L), (this.b = D), (this.c = M);
					}
					async createModel(L, D) {
						const M = await this.a.createModelReference(D.uri),
							N = await this.a.createModelReference(
								this.b.createModel(
									(0, h.$9X)(M.object.textEditorModel.createSnapshot()),
									{
										languageId: M.object.textEditorModel.getLanguageId(),
										onDidChange: w.Event.None,
									},
									r.URI.from({
										scheme: C.Schemas.vscodeChatCodeBlock,
										path: D.uri.path,
										query: (0, u.$9g)(),
									}),
									!1,
								).uri,
							),
							A = new E.$4c(
								(0, E.$Yc)(() => {
									M.dispose(), N.dispose();
								}),
							);
						let R = "";
						if (D.state) R = D.state.sha1;
						else {
							const U = new n.$1Mb();
							U.canComputeSHA1(M.object.textEditorModel) &&
								((R = U.computeSHA1(M.object.textEditorModel)),
								(D.state = { sha1: R, applied: 0 }));
						}
						const O = this.c.getSession(L.sessionId),
							B = [];
						for (const U of O.getRequests())
							if (U.response) {
								for (const z of U.response.response.value)
									if (
										!(
											z.kind !== "textEditGroup" ||
											z.state?.applied ||
											!(0, d.$gh)(z.uri, D.uri)
										)
									)
										for (const F of z.edits) {
											const x = F.map(a.$iM.asEditOperation);
											B.push(x);
										}
								if (U.response === L.model) break;
							}
						for (const U of B)
							N.object.textEditorModel.pushEditOperations(null, U, () => null);
						return (
							A.acquire(),
							setTimeout(() => A.release(), 5e3),
							{
								object: {
									originalSha1: R,
									original: M.object,
									modified: N.object,
								},
								dispose() {
									A.release();
								},
							}
						);
					}
				};
				(P = Ne([j(0, g.$MO), j(1, c.$QO), j(2, y.$J2)], P)),
					(0, f.$lK)(S, P, f.InstantiationType.Delayed);
			},
		),
		define(
			de[1043],
			he([
				1, 0, 7, 661, 235, 6, 647, 27, 82, 12, 9, 46, 206, 188, 48, 17, 409, 74,
				69, 67, 375, 254, 328, 10, 8, 413, 5, 128, 51, 394, 504, 521, 2402,
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
					(e.$5Bc = e.$4Bc = e.$3Bc = void 0),
					(o = mt(o));
				let M = class extends w.$Uhb {
					constructor(B, U, z, F, x, H, q, V, G, K, J) {
						super(),
							(this.b = new E.$re()),
							(this.onShouldFocusResults = this.b.event),
							(this.c = new E.$re()),
							(this.onInputDidChange = this.c.event),
							(this.g = this.D(new E.$re())),
							(this.onDidFocus = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onDidBlur = this.h.event),
							(this.r = (0, t.$fhb)(U, (0, t.$)(".suggest-input-container"))),
							(this.element = U),
							(this.s = (0, t.$fhb)(
								this.r,
								(0, t.$)(
									".suggest-input-placeholder",
									void 0,
									H.placeholderText || "",
								),
							));
						const W = (0, m.$yo)((0, D.$xYb)(J), R(F));
						W.overflowWidgetsDomNode = H.overflowWidgetsDomNode;
						const X = this.t(G),
							Y = X ? this.D(q.createChild(new T.$Ki([v.$6j, X]))) : q;
						(this.inputWidget = this.D(
							Y.createInstance(h.$rwb, this.r, W, {
								contributions:
									a.EditorExtensionsRegistry.getSomeEditorContributions([
										y.$KDb.ID,
										l.$aDb.ID,
										s.$2Mb.ID,
										k.$_Xb.ID,
										L.$aYb,
									]),
								isSimpleWidget: !0,
							}),
						)),
							this.D(
								J.onDidChangeConfiguration((te) => {
									if (
										te.affectsConfiguration("editor.accessibilitySupport") ||
										te.affectsConfiguration("editor.cursorBlinking")
									) {
										const Q = J.getValue("editor.accessibilitySupport"),
											Z = J.getValue("editor.cursorBlinking");
										this.inputWidget.updateOptions({
											accessibilitySupport: Q,
											cursorBlinking: Z,
										});
									}
								}),
							),
							this.D(
								this.inputWidget.onDidFocusEditorText(() => this.g.fire()),
							),
							this.D(this.inputWidget.onDidBlurEditorText(() => this.h.fire()));
						const ie = u.URI.parse(x);
						(this.n = V.createModel("", null, ie, !0)),
							this.D(this.n),
							this.inputWidget.setModel(this.n),
							this.D(
								this.inputWidget.onDidPaste(() =>
									this.setValue(this.getValue()),
								),
							),
							this.D(
								this.inputWidget.onDidFocusEditorText(() => {
									H.focusContextKey && H.focusContextKey.set(!0),
										this.r.classList.add("synthetic-focus");
								}),
							),
							this.D(
								this.inputWidget.onDidBlurEditorText(() => {
									H.focusContextKey && H.focusContextKey.set(!1),
										this.r.classList.remove("synthetic-focus");
								}),
							),
							this.D(
								E.Event.chain(this.inputWidget.onKeyDown, (te) =>
									te.filter((Q) => Q.keyCode === d.KeyCode.Enter),
								)((te) => {
									te.preventDefault();
								}, this),
							),
							this.D(
								E.Event.chain(this.inputWidget.onKeyDown, (te) =>
									te.filter(
										(Q) =>
											Q.keyCode === d.KeyCode.DownArrow &&
											(r.$m ? Q.metaKey : Q.ctrlKey),
									),
								)(() => this.b.fire(), this),
							);
						let ne = this.getValue();
						const ee = this.inputWidget.getModel();
						ee &&
							this.D(
								ee.onDidChangeContent(() => {
									const te = this.getValue();
									(this.s.style.visibility = te ? "hidden" : "visible"),
										ne.trim() !== te.trim() && (this.c.fire(void 0), (ne = te));
								}),
							);
						const _ = {
							provideResults: z.provideResults,
							sortKey: z.sortKey || ((te) => te),
							triggerCharacters: z.triggerCharacters || [],
							wordDefinition: z.wordDefinition
								? (0, p.$UK)(z.wordDefinition)
								: void 0,
							alwaysShowSuggestions: !!z.alwaysShowSuggestions,
						};
						this.setValue(H.value || ""),
							this.D(
								K.completionProvider.register(
									{
										scheme: ie.scheme,
										pattern: "**/" + ie.path,
										hasAccessToAllModels: !0,
									},
									{
										_debugDisplayName: `suggestEnabledInput/${B}`,
										triggerCharacters: _.triggerCharacters,
										provideCompletionItems: (te, Q, Z) => {
											const se = te.getValue(),
												re = Q.column - 1;
											let le = 0,
												oe = 0;
											if (_.wordDefinition) {
												const ae = (0, p.$WK)(
													Q.column,
													_.wordDefinition,
													se,
													0,
												);
												(le = ae?.word.length ?? 0),
													(oe = ae ? ae.startColumn - 1 : 0);
											} else
												(oe = se.lastIndexOf(" ", re - 1) + 1), (le = re - oe);
											return !_.alwaysShowSuggestions &&
												le > 0 &&
												_.triggerCharacters?.indexOf(se[oe]) === -1
												? { suggestions: [] }
												: {
														suggestions: z.provideResults(se).map((ae) => {
															let pe, $e;
															return (
																typeof ae == "string"
																	? (pe = ae)
																	: ((pe = ae.label), ($e = ae)),
																{
																	label: pe,
																	insertText: pe,
																	range: g.$iL.fromPositions(
																		Q.delta(0, -le),
																		Q,
																	),
																	sortText: _.sortKey(pe),
																	kind: o.CompletionItemKind.Keyword,
																	...$e,
																}
															);
														}),
													};
										},
									},
								),
							),
							this.w(H.styleOverrides || {});
					}
					t(B) {}
					updateAriaLabel(B) {
						this.inputWidget.updateOptions({ ariaLabel: B });
					}
					setValue(B) {
						B = B.replace(/\s/g, " ");
						const U = this.n.getFullModelRange();
						this.inputWidget.executeEdits("suggestEnabledInput.setValue", [
							c.$jL.replace(U, B),
						]),
							this.inputWidget.setScrollTop(0),
							this.inputWidget.setPosition(new n.$hL(1, B.length + 1));
					}
					getValue() {
						return this.inputWidget.getValue();
					}
					w(B) {
						(this.r.style.backgroundColor = (0, P.$rP)(
							B.inputBackground ?? P.$TR,
						)),
							(this.r.style.color = (0, P.$rP)(B.inputForeground ?? P.$UR)),
							(this.s.style.color = (0, P.$rP)(
								B.inputPlaceholderForeground ?? P.$1R,
							)),
							(this.r.style.borderWidth = "1px"),
							(this.r.style.borderStyle = "solid"),
							(this.r.style.borderColor = (0, P.$sP)(
								B.inputBorder ?? P.$VR,
								"transparent",
							));
						const U = this.r.getElementsByClassName("cursor")[0];
						U &&
							(U.style.backgroundColor = (0, P.$rP)(
								B.inputForeground ?? P.$UR,
							));
					}
					focus(B) {
						this.inputWidget.focus(),
							B && this.inputWidget.getValue() && this.y();
					}
					onHide() {
						this.inputWidget.onHide();
					}
					layout(B) {
						this.inputWidget.layout(B),
							(this.s.style.width = `${B.width - 2}px`);
					}
					y() {
						this.inputWidget.setSelection(
							new g.$iL(1, 1, 1, this.getValue().length + 1),
						);
					}
				};
				(e.$3Bc = M),
					(e.$3Bc = M =
						Ne(
							[
								j(6, I.$Li),
								j(7, b.$QO),
								j(8, v.$6j),
								j(9, f.$k3),
								j(10, $.$gj),
							],
							M,
						));
				let N = class extends M {
					constructor(
						{
							id: B,
							parent: U,
							ariaLabel: z,
							suggestionProvider: F,
							resourceHandle: x,
							suggestOptions: H,
							history: q,
						},
						V,
						G,
						K,
						J,
						W,
					) {
						super(B, U, F, z, x, H, V, G, K, J, W),
							(this.J = new C.$Job(q, 100));
					}
					addToHistory() {
						const B = this.getValue();
						B && B !== this.L() && this.J.add(B);
					}
					getHistory() {
						return this.J.getHistory();
					}
					showNextValue() {
						this.J.has(this.getValue()) || this.addToHistory();
						let B = this.N();
						B && (B = B === this.getValue() ? this.N() : B),
							this.setValue(B ?? "");
					}
					showPreviousValue() {
						this.J.has(this.getValue()) || this.addToHistory();
						let B = this.M();
						B && (B = B === this.getValue() ? this.M() : B),
							B &&
								(this.setValue(B),
								this.inputWidget.setPosition({ lineNumber: 0, column: 0 }));
					}
					clearHistory() {
						this.J.clear();
					}
					L() {
						let B = this.J.current();
						return B || ((B = this.J.last()), this.J.next()), B;
					}
					M() {
						return this.J.previous() || this.J.first();
					}
					N() {
						return this.J.next();
					}
				};
				(e.$4Bc = N),
					(e.$4Bc = N =
						Ne(
							[j(1, I.$Li), j(2, b.$QO), j(3, v.$6j), j(4, f.$k3), j(5, $.$gj)],
							N,
						));
				let A = class extends N {
					constructor(B, U, z, F, x, H) {
						super(B, U, z, F, x, H);
						const {
							historyNavigationBackwardsEnablement: q,
							historyNavigationForwardsEnablement: V,
						} = this.O;
						this.D(
							this.inputWidget.onDidChangeCursorPosition(({ position: G }) => {
								const K = this.inputWidget._getViewModel(),
									J = K.getLineCount(),
									W = K.getLineLength(J) + 1,
									X =
										K.coordinatesConverter.convertModelPositionToViewPosition(
											G,
										);
								q.set(X.lineNumber === 1 && X.column === 1),
									V.set(X.lineNumber === J && X.column === W);
							}),
						);
					}
					t(B) {
						const U = this.D(B.createScoped(this.element));
						return (this.O = this.D((0, S.$UCb)(U, this))), U;
					}
				};
				(e.$5Bc = A),
					(e.$5Bc = A =
						Ne(
							[j(1, I.$Li), j(2, b.$QO), j(3, v.$6j), j(4, f.$k3), j(5, $.$gj)],
							A,
						)),
					(0, D.$zYb)(".suggest-input-container");
				function R(O) {
					return {
						fontSize: 13,
						lineHeight: 20,
						wordWrap: "off",
						scrollbar: { vertical: "hidden" },
						roundedSelection: !1,
						guides: { indentation: !1 },
						cursorWidth: 1,
						fontFamily: i.$njb,
						ariaLabel: O || "",
						snippetSuggestions: "none",
						suggest: { filterGraceful: !1, showIcons: !1 },
						autoClosingBrackets: "never",
					};
				}
			},
		),
		define(
			de[846],
			he([
				1, 0, 38, 46, 65, 206, 8, 5, 31, 394, 1259, 375, 328, 254, 714, 35, 40,
				91, 505, 152, 69, 201, 308, 609, 500, 962, 501, 963, 440, 504, 11, 448,
				603,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k3b = e.$j3b = e.$i3b = e.$h3b = void 0),
					(e.$l3b = A),
					(e.$h3b = new C.$5j("commentEditorFocused", !1)),
					(e.$i3b = 5 * 18),
					(e.$j3b = 25 * 18);
				let N = class extends E.$rwb {
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W) {
						const X = {
							contributions: [
								{
									id: r.$_Xb.ID,
									ctor: r.$_Xb,
									instantiation:
										i.EditorContributionInstantiation.BeforeFirstInteraction,
								},
								{
									id: a.$2Mb.ID,
									ctor: a.$2Mb,
									instantiation:
										i.EditorContributionInstantiation.BeforeFirstInteraction,
								},
								{
									id: h.$KDb.ID,
									ctor: h.$KDb,
									instantiation: i.EditorContributionInstantiation.Eager,
								},
								{
									id: c.$aDb.ID,
									ctor: c.$aDb,
									instantiation: i.EditorContributionInstantiation.Lazy,
								},
								{
									id: n.$wYb.ID,
									ctor: n.$wYb,
									instantiation: i.EditorContributionInstantiation.Eager,
								},
								{
									id: u.$_2b.ID,
									ctor: u.$_2b,
									instantiation: i.EditorContributionInstantiation.Lazy,
								},
								...i.EditorExtensionsRegistry.getSomeEditorContributions([
									$.$zAb.ID,
									S.$g3b.ID,
									T.$6Ob.ID,
									P.$Szb.ID,
									D.$whc.ID,
									M.$2Ob.ID,
									k.$aYb,
									I.$O1b.ID,
									v.$BBb.ID,
								]),
							],
							contextMenuId: L.$XX.SimpleEditorContext,
						};
						super(O, B, X, F, x, H, U, q, V, G, K, J, W),
							(this.kb = e.$h3b.bindTo(U)),
							(this.mc = f.CommentContextKeys.commentIsEmpty.bindTo(U)),
							this.mc.set(!this.getModel()?.getValueLength()),
							(this.$ = z),
							this.D(this.onDidFocusEditorWidget((Y) => this.kb.set(!0))),
							this.D(
								this.onDidChangeModelContent((Y) =>
									this.mc.set(!this.getModel()?.getValueLength()),
								),
							),
							this.D(this.onDidBlurEditorWidget((Y) => this.kb.reset()));
					}
					getParentThread() {
						return this.$;
					}
					nc() {
						return i.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(O) {
						return {
							wordWrap: "on",
							glyphMargin: !1,
							lineNumbers: "off",
							folding: !1,
							selectOnLineNumbers: !1,
							scrollbar: {
								vertical: "visible",
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !1,
							},
							overviewRulerLanes: 2,
							lineDecorationsWidth: 0,
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							fixedOverflowWidgets: !0,
							acceptSuggestionOnEnter: "smart",
							minimap: { enabled: !1 },
							dropIntoEditor: { enabled: !0 },
							autoClosingBrackets: O.getValue("editor.autoClosingBrackets"),
							quickSuggestions: !1,
							accessibilitySupport: O.getValue("editor.accessibilitySupport"),
							fontFamily: O.getValue("editor.fontFamily"),
						};
					}
				};
				(e.$k3b = N),
					(e.$k3b = N =
						Ne(
							[
								j(4, d.$Li),
								j(5, w.$dtb),
								j(6, m.$ek),
								j(7, g.$iP),
								j(8, p.$4N),
								j(9, o.$XK),
								j(10, b.$aN),
								j(11, s.$k3),
								j(12, y.$5X),
							],
							N,
						));
				function A(R, O, B) {
					const U = O.getLayoutInfo(),
						z = O.getOption(t.EditorOption.lineHeight),
						F = O._getViewModel()?.getLineCount() * z;
					if (F > U.height || (F < U.height && B > e.$i3b)) {
						const x = Math.ceil((F - U.height) / z),
							H = U.height + z * x;
						return (0, l.$Zm)(
							H,
							e.$i3b,
							(0, l.$Zm)(R.getLayoutInfo().height - 90, e.$i3b, e.$j3b),
						);
					}
					return B;
				}
			},
		),
		define(
			de[3763],
			he([
				1, 0, 4, 7, 74, 105, 50, 3, 9, 5, 447, 846, 104, 6, 40, 461, 49, 276,
				3031, 11, 92, 8, 1239, 651, 198, 437, 14, 26, 221, 1726, 10, 195, 203,
				265, 505, 23, 791, 168, 91, 39, 72, 42,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$s3b = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w));
				class H extends C.$sj {
					async q(K, J) {
						await K.run(...J);
					}
				}
				let q = class extends d.$1c {
					get domNode() {
						return this.b;
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
					) {
						super(),
							(this.U = K),
							(this.W = J),
							(this.comment = W),
							(this.X = X),
							(this.Y = Y),
							(this.Z = ie),
							(this.ab = ne),
							(this.bb = ee),
							(this.db = _),
							(this.eb = te),
							(this.fb = Q),
							(this.gb = Z),
							(this.hb = re),
							(this.ib = le),
							(this.jb = oe),
							(this.kb = ae),
							(this.lb = pe),
							(this.n = null),
							(this.q = null),
							(this.w = null),
							(this.y = []),
							(this.z = null),
							(this.C = a.$i3b),
							(this.Q = null),
							(this.R = null),
							(this.S = new c.$re()),
							(this.isEditing = !1),
							(this.b = i.$("div.review-comment")),
							(this.I = this.D(se.createScoped(this.b))),
							(this.J = A.CommentContextKeys.commentContext.bindTo(this.I)),
							this.comment.contextValue &&
								this.J.set(this.comment.contextValue),
							(this.L = this.eb.getCommentMenus(this.Y)),
							(this.b.tabIndex = -1),
							(this.f = i.$fhb(this.b, i.$("div.avatar-container"))),
							this.pb(this.comment.userIconPath),
							(this.r = i.$fhb(this.b, i.$(".review-comment-contents"))),
							this.sb(this.r),
							(this.c = document.createElement("div")),
							this.c.classList.add("comment-body", $.$0ob),
							re.getValue(O.$32b)?.maxHeight !== !1 &&
								this.c.classList.add("comment-body-max-height"),
							this.nb(this.r, this.c),
							this.ob(this.comment.body),
							this.comment.commentReactions &&
								this.comment.commentReactions.length &&
								this.comment.commentReactions.filter(($e) => !!$e.count)
									.length &&
								this.zb(this.r),
							this.b.setAttribute(
								"aria-label",
								`${W.userName}, ${this.commentBodyValue}`,
							),
							this.b.setAttribute("role", "treeitem"),
							(this.m = null),
							this.D(
								i.$0fb(
									this.b,
									i.$$gb.CLICK,
									() => this.isEditing || this.S.fire(this),
								),
							),
							this.D(i.$0fb(this.b, i.$$gb.CONTEXT_MENU, ($e) => this.Gb($e))),
							X && this.switchToEditMode(),
							this.D(
								this.jb.onDidChangeScreenReaderOptimized(() => {
									this.tb(!0);
								}),
							),
							this.mb();
					}
					mb() {
						this.D(
							i.$0fb(
								this.b,
								i.$$gb.FOCUS_IN,
								() => {
									this.eb.setActiveCommentAndThread(this.Y, {
										thread: this.W,
										comment: this.comment,
									});
								},
								!0,
							),
						);
					}
					nb(K, J) {
						(this.M = new D.$KK({
							forceIntegerValues: !0,
							smoothScrollDuration: 125,
							scheduleAtNextAnimationFrame: (X) => i.$hgb(i.getWindow(K), X),
						})),
							(this.N = this.D(
								new M.$6hb(
									J,
									{
										horizontal: D.ScrollbarVisibility.Visible,
										vertical: D.ScrollbarVisibility.Visible,
									},
									this.M,
								),
							)),
							this.D(
								this.N.onScroll((X) => {
									X.scrollLeftChanged && (J.scrollLeft = X.scrollLeft),
										X.scrollTopChanged && (J.scrollTop = X.scrollTop);
								}),
							);
						const W = this.D(new N.$mib(J, "scroll")).event;
						this.D(
							W((X) => {
								const Y = this.N.getScrollPosition(),
									ie =
										Math.abs(J.scrollLeft - Y.scrollLeft) <= 1
											? void 0
											: J.scrollLeft,
									ne =
										Math.abs(J.scrollTop - Y.scrollTop) <= 1
											? void 0
											: J.scrollTop;
								(ie !== void 0 || ne !== void 0) &&
									this.N.setScrollPosition({ scrollLeft: ie, scrollTop: ne });
							}),
						),
							K.appendChild(this.N.getDomNode());
					}
					ob(K) {
						(this.c.innerText = ""),
							(this.h = void 0),
							(this.j = void 0),
							typeof K == "string"
								? ((this.j = i.$fhb(this.c, i.$(".comment-body-plainstring"))),
									(this.j.innerText = K))
								: ((this.h = this.bb.render(K).element),
									this.c.appendChild(this.h));
					}
					pb(K) {
						if (((this.f.textContent = ""), K)) {
							const J = i.$fhb(this.f, i.$("img.avatar"));
							(J.src = R.$7g.uriToBrowserUri(m.URI.revive(K)).toString(!0)),
								(J.onerror = (W) => J.remove());
						}
					}
					get onDidClick() {
						return this.S.event;
					}
					qb(K) {
						(this.G = i.$fhb(K, i.$("span.timestamp-container"))),
							this.rb(this.comment.timestamp);
					}
					rb(K) {
						if (!this.G) return;
						const J = K !== void 0 ? new Date(K) : void 0;
						J
							? this.H
								? this.H.setTimestamp(J)
								: ((this.H = new k.$r3b(this.hb, this.ib, this.G, J)),
									this.D(this.H))
							: this.H?.dispose();
					}
					sb(K) {
						const J = i.$fhb(K, i.$(`div.comment-title.${$.$0ob}`)),
							W = i.$fhb(J, i.$("comment-header-info")),
							X = i.$fhb(W, i.$("strong.author"));
						(X.innerText = this.comment.userName),
							this.qb(W),
							(this.F = i.$fhb(W, i.$("span.isPending"))),
							this.comment.label
								? (this.F.innerText = this.comment.label)
								: (this.F.innerText = ""),
							(this.s = i.$fhb(J, i.$(".comment-actions"))),
							this.tb(!0),
							this.xb();
					}
					tb(K) {
						K && !this.jb.isScreenReaderOptimized()
							? this.s.classList.add("hidden")
							: this.s.classList.remove("hidden");
					}
					ub(K) {
						const J = K.getActions({ shouldForwardArgs: !0 }),
							Y = { primary: [], secondary: [] };
						return V(J, Y, !1, (ie) => /^inline/.test(ie)), Y;
					}
					get vb() {
						return [
							{
								thread: this.W,
								commentUniqueId: this.comment.uniqueIdInThread,
								$mid: P.MarshalledId.CommentNode,
							},
							{
								commentControlHandle: this.W.controllerHandle,
								commentThreadHandle: this.W.commentThreadHandle,
								$mid: P.MarshalledId.CommentThread,
							},
						];
					}
					wb() {
						(this.P = new g.$jpb(this.s, this.gb, {
							actionViewItemProvider: (K, J) =>
								K.id === f.$o3b.ID
									? new S.$Pob(K, K.menuActions, this.gb, {
											...J,
											actionViewItemProvider: (W, X) =>
												this.actionViewItemProvider(W, X),
											actionRunner: this.O,
											classNames: [
												"toolbar-toggle-pickReactions",
												...T.ThemeIcon.asClassNameArray(I.$ak.reactions),
											],
											anchorAlignmentProvider: () => o.AnchorAlignment.RIGHT,
										})
									: this.actionViewItemProvider(K, J),
							orientation: E.ActionsOrientation.HORIZONTAL,
						})),
							(this.P.context = this.vb),
							(this.P.actionRunner = new H()),
							this.Fb(this.s),
							this.D(this.P);
					}
					xb() {
						const K = [];
						if (this.eb.hasReactionHandler(this.Y)) {
							const ie = this.yb(this.comment.commentReactions || []);
							K.push(ie);
						}
						const W = this.L.getCommentTitleActions(this.comment, this.I);
						this.D(W),
							this.D(
								W.onDidChange((ie) => {
									const { primary: ne, secondary: ee } = this.ub(W);
									!this.P && (ne.length || ee.length) && this.wb(),
										this.P.setActions(ne, ee);
								}),
							);
						const { primary: X, secondary: Y } = this.ub(W);
						K.push(...X),
							(K.length || Y.length) && (this.wb(), this.P.setActions(K, Y));
					}
					actionViewItemProvider(K, J) {
						return (
							K.id === f.$o3b.ID
								? (J = { label: !1, icon: !0 })
								: (J = { label: !1, icon: !0 }),
							K.id === f.$q3b.ID
								? new f.$p3b(K)
								: K instanceof b.$2X
									? this.db.createInstance(s.$Lyb, K, {
											hoverDelegate: J.hoverDelegate,
										})
									: K instanceof b.$1X
										? this.db.createInstance(s.$Nyb, K, J)
										: new v.$_ib({}, K, J)
						);
					}
					async submitComment() {
						this.w &&
							this.Q &&
							(await this.Q.triggerDefaultAction(), (this.X = void 0));
					}
					yb(K) {
						const J = this.D(
							new f.$o3b(
								() => {
									X?.show();
								},
								t.localize(5002, null),
							),
						);
						let W = [];
						K &&
							K.length &&
							(W = K.map(
								(Y) =>
									new C.$rj(
										`reaction.command.${Y.label}`,
										`${Y.label}`,
										"",
										!0,
										async () => {
											try {
												await this.eb.toggleReaction(
													this.Y,
													this.Z,
													this.W,
													this.comment,
													Y,
												);
											} catch (ie) {
												const ne = ie.message
													? t.localize(5003, null, ie.message)
													: t.localize(5004, null);
												this.fb.error(ne);
											}
										},
									),
							)),
							(J.menuActions = W);
						const X = new S.$Pob(J, J.menuActions, this.gb, {
							actionViewItemProvider: (Y, ie) =>
								Y.id === f.$o3b.ID ? X : this.actionViewItemProvider(Y, ie),
							actionRunner: this.O,
							classNames: "toolbar-toggle-pickReactions",
							anchorAlignmentProvider: () => o.AnchorAlignment.RIGHT,
						});
						return J;
					}
					zb(K) {
						(this.u = i.$fhb(K, i.$("div.comment-reactions"))),
							(this.t = new E.$eib(this.u, {
								actionViewItemProvider: (W, X) =>
									W.id === f.$o3b.ID
										? new S.$Pob(W, W.menuActions, this.gb, {
												actionViewItemProvider: (Y, ie) =>
													this.actionViewItemProvider(Y, ie),
												actionRunner: this.O,
												classNames: [
													"toolbar-toggle-pickReactions",
													...T.ThemeIcon.asClassNameArray(I.$ak.reactions),
												],
												anchorAlignmentProvider: () => o.AnchorAlignment.RIGHT,
											})
										: this.actionViewItemProvider(W, X),
							})),
							this.D(this.t);
						const J = this.eb.hasReactionHandler(this.Y);
						if (
							(this.comment.commentReactions
								.filter((W) => !!W.count)
								.map((W) => {
									const X = new f.$q3b(
										`reaction.${W.label}`,
										`${W.label}`,
										W.hasReacted && (W.canEdit || J) ? "active" : "",
										W.canEdit || J,
										async () => {
											try {
												await this.eb.toggleReaction(
													this.Y,
													this.Z,
													this.W,
													this.comment,
													W,
												);
											} catch (Y) {
												let ie;
												W.hasReacted
													? (ie = Y.message
															? t.localize(5005, null, Y.message)
															: t.localize(5006, null))
													: (ie = Y.message
															? t.localize(5007, null, Y.message)
															: t.localize(5008, null)),
													this.fb.error(ie);
											}
										},
										W.reactors,
										W.iconPath,
										W.count,
									);
									this.t?.push(X, { label: !0, icon: !0 });
								}),
							J)
						) {
							const W = this.yb(this.comment.commentReactions || []);
							this.t.push(W, { label: !1, icon: !0 });
						}
					}
					get commentBodyValue() {
						return typeof this.comment.body == "string"
							? this.comment.body
							: this.comment.body.value;
					}
					async Ab(K) {
						const J = i.$fhb(K, i.$(".edit-textarea"));
						this.w = this.db.createInstance(
							a.$k3b,
							J,
							a.$k3b.getEditorOptions(this.hb),
							this.I,
							this.ab,
						);
						const W = m.URI.from({
								scheme: R.Schemas.commentsInput,
								path: `/commentinput-${this.comment.uniqueIdInThread}-${Date.now()}.md`,
							}),
							X = await this.lb.createModelReference(W);
						(this.z = X),
							this.w.setModel(this.z.object.textEditorModel),
							this.w.setValue(this.X ?? this.commentBodyValue),
							(this.X = void 0),
							this.w.layout({ width: J.clientWidth - 14, height: this.C }),
							this.w.focus(),
							i.$hgb(i.getWindow(K), () => {
								this.w.layout({ width: J.clientWidth - 14, height: this.C }),
									this.w.focus();
							});
						const Y = this.z.object.textEditorModel.getLineCount(),
							ie = this.z.object.textEditorModel.getLineLength(Y) + 1;
						this.w.setSelection(new h.$kL(Y, ie, Y, ie));
						const ne = this.W;
						(ne.input = {
							uri: this.w.getModel().uri,
							value: this.commentBodyValue,
						}),
							this.eb.setActiveEditingCommentThread(ne),
							this.eb.setActiveCommentAndThread(this.Y, {
								thread: ne,
								comment: this.comment,
							}),
							this.y.push(
								this.w.onDidFocusEditorWidget(() => {
									(ne.input = {
										uri: this.w.getModel().uri,
										value: this.commentBodyValue,
									}),
										this.eb.setActiveEditingCommentThread(ne),
										this.eb.setActiveCommentAndThread(this.Y, {
											thread: ne,
											comment: this.comment,
										});
								}),
							),
							this.y.push(
								this.w.onDidChangeModelContent((ee) => {
									if (
										ne.input &&
										this.w &&
										this.w.getModel().uri === ne.input.uri
									) {
										const _ = this.w.getValue();
										if (_ !== ne.input.value) {
											const te = ne.input;
											(te.value = _),
												(ne.input = te),
												this.eb.setActiveEditingCommentThread(ne),
												this.eb.setActiveCommentAndThread(this.Y, {
													thread: ne,
													comment: this.comment,
												});
										}
									}
								}),
							),
							this.Bb(),
							this.D(
								this.z.object.textEditorModel.onDidChangeContent(() => {
									this.w &&
										this.Bb() &&
										(this.w.layout({
											height: this.C,
											width: this.w.getLayoutInfo().width,
										}),
										this.w.render(!0));
								}),
							),
							this.D(this.w),
							this.D(this.z);
					}
					Bb() {
						if (this.w) {
							const K = (0, a.$l3b)(this.U, this.w, this.C);
							if (K !== this.C) return (this.C = K), !0;
						}
						return !1;
					}
					getPendingEdit() {
						const K = this.w?.getModel();
						if (K && K.getValueLength() > 0) return K.getValue();
					}
					Cb() {
						(this.isEditing = !1),
							this.n && (this.n.enabled = !0),
							this.c.classList.remove("hidden"),
							this.z?.dispose(),
							(0, d.$Vc)(this.y),
							(this.y = []),
							this.w?.dispose(),
							(this.w = null),
							this.q.remove();
					}
					layout(K) {
						const J =
							K !== void 0 ? K - 72 : (this.w?.getLayoutInfo().width ?? 0);
						this.w?.layout({ width: J, height: this.C });
						const W = this.c.scrollWidth,
							X = i.$wgb(this.c),
							Y = this.c.scrollHeight,
							ie = i.$ygb(this.c) + 4;
						this.N.setScrollDimensions({
							width: X,
							scrollWidth: W,
							height: ie,
							scrollHeight: Y,
						});
					}
					async switchToEditMode() {
						if (this.isEditing) return;
						(this.isEditing = !0),
							this.c.classList.add("hidden"),
							(this.q = i.$fhb(this.r, i.$(".edit-container"))),
							await this.Ab(this.q);
						const K = i.$fhb(this.q, i.$(".form-actions")),
							J = i.$fhb(K, i.$(".other-actions"));
						this.Db(J);
						const W = i.$fhb(K, i.$(".editor-actions"));
						this.Eb(W);
					}
					Db(K) {
						const W = this.eb
							.getCommentMenus(this.Y)
							.getCommentActions(this.comment, this.I);
						this.D(W),
							this.D(
								W.onDidChange(() => {
									this.Q?.setActions(W);
								}),
							),
							(this.Q = new y.$82b(this.kb, this.I, K, (X) => {
								const Y = this.w.getValue();
								X.run({
									thread: this.W,
									commentUniqueId: this.comment.uniqueIdInThread,
									text: Y,
									$mid: P.MarshalledId.CommentThreadNode,
								}),
									this.Cb();
							})),
							this.D(this.Q),
							this.Q.setActions(W);
					}
					Eb(K) {
						const W = this.eb
							.getCommentMenus(this.Y)
							.getCommentEditorActions(this.I);
						this.D(W),
							this.D(
								W.onDidChange(() => {
									this.R?.setActions(W);
								}),
							),
							(this.R = new y.$82b(this.kb, this.I, K, (X) => {
								const Y = this.w.getValue();
								X.run({
									thread: this.W,
									commentUniqueId: this.comment.uniqueIdInThread,
									text: Y,
									$mid: P.MarshalledId.CommentThreadNode,
								}),
									this.w?.focus();
							})),
							this.D(this.R),
							this.R.setActions(W, !0);
					}
					setFocus(K, J = !1) {
						K
							? (this.b.focus(),
								this.tb(!1),
								this.s.classList.add("tabfocused"),
								(this.b.tabIndex = 0),
								this.comment.mode === w.CommentMode.Editing && this.w?.focus())
							: (this.s.classList.contains("tabfocused") &&
									!this.s.classList.contains("mouseover") &&
									(this.tb(!0), (this.b.tabIndex = -1)),
								this.s.classList.remove("tabfocused"));
					}
					Fb(K) {
						this.D(
							i.$0fb(this.b, "mouseenter", () => {
								this.tb(!1), K.classList.add("mouseover");
							}),
						),
							this.D(
								i.$0fb(this.b, "mouseleave", () => {
									K.classList.contains("mouseover") &&
										!K.classList.contains("tabfocused") &&
										this.tb(!0),
										K.classList.remove("mouseover");
								}),
							);
					}
					async update(K) {
						K.body !== this.comment.body && this.ob(K.body),
							this.comment.userIconPath &&
								K.userIconPath &&
								m.URI.from(this.comment.userIconPath).toString() !==
									m.URI.from(K.userIconPath).toString() &&
								this.pb(K.userIconPath);
						const J = K.mode !== void 0 && K.mode !== this.comment.mode;
						(this.comment = K),
							J &&
								(K.mode === w.CommentMode.Editing
									? await this.switchToEditMode()
									: this.Cb()),
							K.label ? (this.F.innerText = K.label) : (this.F.innerText = ""),
							this.u?.remove(),
							this.t?.clear(),
							this.comment.commentReactions &&
								this.comment.commentReactions.some((W) => !!W.count) &&
								this.zb(this.r),
							this.comment.contextValue
								? this.J.set(this.comment.contextValue)
								: this.J.reset(),
							this.comment.timestamp && this.rb(this.comment.timestamp);
					}
					Gb(K) {
						const J = new B.$2fb(i.getWindow(this.b), K);
						this.gb.showContextMenu({
							getAnchor: () => J,
							menuId: b.$XX.CommentThreadCommentContext,
							menuActionOptions: { shouldForwardArgs: !0 },
							contextKeyService: this.I,
							actionRunner: new H(),
							getActionsContext: () => this.vb,
						});
					}
					focus() {
						this.domNode.focus(),
							this.m ||
								(this.domNode.classList.add("focus"),
								(this.m = setTimeout(() => {
									this.domNode.classList.remove("focus");
								}, 3e3)));
					}
					dispose() {
						super.dispose(), (0, d.$Vc)(this.y);
					}
				};
				(e.$s3b = q),
					(e.$s3b = q =
						Ne(
							[
								j(8, r.$Li),
								j(9, u.$62b),
								j(10, n.$4N),
								j(11, p.$Xxb),
								j(12, l.$6j),
								j(13, L.$gj),
								j(14, F.$Uyb),
								j(15, U.$XK),
								j(16, z.$uZ),
								j(17, x.$MO),
							],
							q,
						));
				function V(G, K, J, W = (X) => X === "navigation") {
					for (const X of G) {
						let [Y, ie] = X;
						if (
							(J &&
								(ie = ie.map((ne) =>
									ne instanceof b.$2X && ne.alt ? ne.alt : ne,
								)),
							W(Y))
						)
							(Array.isArray(K) ? K : K.primary).unshift(...ie);
						else {
							const ne = Array.isArray(K) ? K : K.secondary;
							ne.length > 0 && ne.push(new C.$tj()), ne.push(...ie);
						}
					}
				}
			},
		),
		define(
			de[1323],
			he([
				1, 0, 7, 95, 651, 3, 221, 23, 9, 47, 42, 4, 10, 39, 1239, 447, 505, 846,
				72,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n3b = e.$m3b = void 0),
					(t = mt(t)),
					(a = mt(a));
				let b = 0;
				e.$m3b = "commenteditordecoration";
				let s = class extends E.$1c {
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.owner = y),
							(this.n = v),
							(this.q = S),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.z = N),
							(this.C = A),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.f = []),
							(this.m = o.$i3b),
							(this.form = t.$fhb($, t.$(".comment-form"))),
							(this.commentEditor = this.D(
								this.r.createInstance(
									o.$k3b,
									this.form,
									o.$k3b.getEditorOptions(R),
									T,
									this.y,
								),
							)),
							(this.commentEditorIsEmpty =
								p.CommentContextKeys.commentIsEmpty.bindTo(this.s)),
							this.commentEditorIsEmpty.set(!this.w),
							this.initialize(M);
					}
					async initialize(y) {
						const $ = this.q.comments && this.q.comments.length > 0,
							v = (0, r.$9g)() + "-" + ($ ? this.q.threadId : ++b),
							S = JSON.stringify({
								extensionId: this.q.extensionId,
								commentThreadId: this.q.threadId,
							});
						let I = m.URI.from({
							scheme: d.Schemas.commentsInput,
							path: `/${this.q.extensionId}/commentinput-${v}.md?${S}`,
						});
						const T = this.C.getCommentController(this.owner);
						T && (I = I.with({ authority: T.id }));
						const P = await this.H.createModelReference(I);
						P.object.textEditorModel.setValue(this.w || ""),
							this.D(P),
							this.commentEditor.setModel(P.object.textEditorModel),
							this.I(),
							this.D(
								P.object.textEditorModel.onDidChangeContent(() => {
									this.setCommentEditorDecorations(),
										this.commentEditorIsEmpty?.set(
											!this.commentEditor.getValue(),
										),
										this.I() &&
											(this.commentEditor.layout({
												height: this.m,
												width: this.commentEditor.getLayoutInfo().width,
											}),
											this.commentEditor.render(!0));
								}),
							),
							this.J(this.commentEditor, this.form),
							this.setCommentEditorDecorations(),
							this.w
								? this.O()
								: $
									? this.R(this.commentEditor, this.form)
									: y &&
										this.q.comments &&
										this.q.comments.length === 0 &&
										this.O(),
							(this.a = t.$fhb(this.form, t.$(".validation-error.hidden")));
						const k = t.$fhb(this.form, t.$(".form-actions"));
						(this.b = t.$fhb(k, t.$(".other-actions"))),
							this.L(this.b, P.object.textEditorModel),
							(this.c = t.$fhb(k, t.$(".editor-actions"))),
							this.M(this.c, P.object.textEditorModel);
					}
					I() {
						const y = (0, o.$l3b)(this.n, this.commentEditor, this.m);
						return y !== this.m ? ((this.m = y), !0) : !1;
					}
					updateCommentThread(y) {
						const $ = this.commentEditor.hasTextFocus(),
							v = !this.q.comments?.length && !y.comments?.length;
						this.j || this.R(this.commentEditor, this.form),
							this.q.comments && this.q.comments.length === 0 && !v && this.O(),
							$ && this.commentEditor.focus();
					}
					getPendingComment() {
						const y = this.commentEditor.getModel();
						if (y && y.getValueLength() > 0) return y.getValue();
					}
					setPendingComment(y) {
						(this.w = y), this.O(), this.commentEditor.setValue(y);
					}
					layout(y) {
						this.commentEditor.layout({ height: this.m, width: y - 54 });
					}
					focusIfNeeded() {
						!this.q.comments || !this.q.comments.length
							? this.commentEditor.focus()
							: (this.commentEditor.getModel()?.getValueLength() ?? 0) > 0 &&
								this.O();
					}
					focusCommentEditor() {
						this.commentEditor.focus();
					}
					expandReplyAreaAndFocusCommentEditor() {
						this.O(), this.commentEditor.focus();
					}
					isCommentEditorFocused() {
						return this.commentEditor.hasWidgetFocus();
					}
					updateCanReply() {
						this.q.canReply
							? (this.form.style.display = "block")
							: (this.form.style.display = "none");
					}
					async submitComment() {
						await this.g?.triggerDefaultAction(), (this.w = void 0);
					}
					setCommentEditorDecorations() {
						const $ =
							this.q.comments && this.q.comments.length > 0
								? this.u?.placeHolder || a.localize(5009, null)
								: this.u?.placeHolder || a.localize(5010, null);
						this.commentEditor.updateOptions({ placeholder: $ });
					}
					J(y, $) {
						this.f.push(
							y.onDidFocusEditorWidget(() => {
								(this.q.input = { uri: y.getModel().uri, value: y.getValue() }),
									this.C.setActiveEditingCommentThread(this.q),
									this.C.setActiveCommentAndThread(this.owner, {
										thread: this.q,
									});
							}),
						),
							this.f.push(
								y.getModel().onDidChangeContent(() => {
									const v = y.getValue();
									if (
										this.q.input &&
										this.q.input.uri === y.getModel().uri &&
										this.q.input.value !== v
									) {
										const S = this.q.input;
										(S.value = v), (this.q.input = S);
									}
									this.C.setActiveEditingCommentThread(this.q);
								}),
							),
							this.f.push(
								this.q.onDidChangeInput((v) => {
									const S = this.q,
										I = y.getModel();
									(S.input && I && S.input.uri !== I.uri) ||
										(v &&
											y.getValue() !== v.value &&
											(y.setValue(v.value),
											v.value === "" &&
												((this.w = ""),
												$.classList.remove("expand"),
												(y.getDomNode().style.outline = ""),
												(this.a.textContent = ""),
												this.a.classList.add("hidden"))));
								}),
							);
					}
					L(y, $) {
						const v = this.t.getCommentThreadActions(this.s);
						this.D(v),
							this.D(
								v.onDidChange(() => {
									this.g.setActions(v);
								}),
							),
							(this.g = new n.$82b(this.F, this.s, y, async (S) => {
								await this.z?.(),
									await S.run({
										thread: this.q,
										text: this.commentEditor.getValue(),
										$mid: C.MarshalledId.CommentThreadReply,
									}),
									this.Q();
							})),
							this.D(this.g),
							this.g.setActions(v);
					}
					M(y, $) {
						const v = this.t.getCommentEditorActions(this.s);
						this.D(v),
							this.D(
								v.onDidChange(() => {
									this.h.setActions(v);
								}),
							),
							(this.h = new n.$82b(this.F, this.s, y, async (S) => {
								this.z?.(),
									S.run({
										thread: this.q,
										text: this.commentEditor.getValue(),
										$mid: C.MarshalledId.CommentThreadReply,
									}),
									this.focusCommentEditor();
							})),
							this.D(this.h),
							this.h.setActions(v, !0);
					}
					get N() {
						return this.form.classList.contains("expand");
					}
					O() {
						this.N ||
							(this.form.classList.add("expand"),
							this.commentEditor.focus(),
							this.commentEditor.layout());
					}
					P() {
						this.N || (this.commentEditor.setValue(""), this.O());
					}
					Q() {
						const y = this.commentEditor.getDomNode();
						y && (y.style.outline = ""),
							this.commentEditor.setValue(""),
							(this.w = ""),
							this.form.classList.remove("expand"),
							(this.a.textContent = ""),
							this.a.classList.add("hidden");
					}
					R(y, $) {
						(this.j = t.$fhb(
							$,
							t.$(`button.review-thread-reply-button.${w.$0ob}`),
						)),
							this.D(
								this.G.setupManagedHover(
									(0, i.$cib)("mouse"),
									this.j,
									this.u?.prompt || a.localize(5011, null),
								),
							),
							(this.j.textContent = this.u?.prompt || a.localize(5012, null)),
							this.D(t.$0fb(this.j, "click", (v) => this.P())),
							this.D(t.$0fb(this.j, "focus", (v) => this.P())),
							y.onDidBlurEditorWidget(() => {
								y.getModel().getValueLength() === 0 &&
									$.classList.contains("expand") &&
									$.classList.remove("expand");
							});
					}
					dispose() {
						super.dispose(), (0, E.$Vc)(this.f);
					}
				};
				(e.$n3b = s),
					(e.$n3b = s =
						Ne(
							[
								j(12, g.$62b),
								j(13, h.$gj),
								j(14, c.$uZ),
								j(15, f.$Uyb),
								j(16, u.$MO),
							],
							s,
						));
			},
		),
		define(
			de[3764],
			he([1, 0, 7, 4, 3, 74, 6, 447, 114, 27, 3763, 251, 41, 61]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t3b = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E));
				let n = class extends w.$1c {
					get length() {
						return this.r.comments ? this.r.comments.length : 0;
					}
					get activeComment() {
						return this.b.filter((p) => p.isEditing)[0];
					}
					constructor(p, o, f, b, s, l, y, $, v, S, I, T) {
						super(),
							(this.n = p),
							(this.owner = o),
							(this.parentResourceUri = f),
							(this.container = b),
							(this.q = s),
							(this.r = l),
							(this.s = y),
							(this.t = $),
							(this.u = v),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							(this.b = []),
							(this.g = void 0),
							(this.h = new C.$re()),
							(this.onDidResize = this.h.event),
							(this.j = new w.$0c()),
							this.D(
								t.$0fb(b, t.$$gb.FOCUS_IN, (P) => {
									this.w.setActiveEditingCommentThread(this.r);
								}),
							),
							(this.m = this.D(new a.$Qzb(this.q, this.z, this.y)));
					}
					focus() {
						this.a.focus();
					}
					ensureFocusIntoNewEditingComment() {
						this.b.length === 1 &&
							this.b[0].isEditing &&
							this.b[0].setFocus(!0);
					}
					async display() {
						if (
							((this.a = t.$fhb(this.container, t.$("div.comments-container"))),
							this.a.setAttribute("role", "presentation"),
							(this.a.tabIndex = 0),
							this.F(),
							this.D(
								t.$0fb(this.a, t.$$gb.KEY_DOWN, (p) => {
									const o = new m.$7fb(p);
									if (
										(o.equals(r.KeyCode.UpArrow) ||
											o.equals(r.KeyCode.DownArrow)) &&
										(!this.g || !this.b[this.g].isEditing)
									) {
										const f = (b) => {
											if (this.g === void 0 && b >= 0) return 0;
											if (this.g === void 0 && b < 0) return this.b.length - 1;
											const s = this.g + b;
											return Math.min(Math.max(0, s), this.b.length - 1);
										};
										this.G(o.equals(r.KeyCode.UpArrow) ? f(-1) : f(1));
									}
								}),
							),
							this.j.clearAndDisposeAll(),
							(this.b = []),
							this.r.comments)
						)
							for (const p of this.r.comments) {
								const o = this.H(p);
								this.b.push(o),
									this.a.appendChild(o.domNode),
									p.mode === E.CommentMode.Editing &&
										(await o.switchToEditMode());
							}
						(this.f = new MutationObserver(this.C.bind(this))),
							this.f.observe(this.container, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0,
							});
					}
					C() {
						const p = t.$ogb(this.container);
						this.h.fire(p);
					}
					getDimensions() {
						return t.$ogb(this.container);
					}
					layout(p) {
						this.b.forEach((o) => {
							o.layout(p);
						});
					}
					getPendingEdits() {
						const p = {};
						return (
							this.b.forEach((o) => {
								if (o.isEditing) {
									const f = o.getPendingEdit();
									f && (p[o.comment.uniqueIdInThread] = f);
								}
							}),
							p
						);
					}
					getCommentCoords(p) {
						const o = this.b.filter((f) => f.comment.uniqueIdInThread === p);
						if (o && o.length) {
							const f = t.$tgb(this.b[0].domNode),
								b = t.$tgb(o[0].domNode);
							return { thread: f, comment: b };
						}
					}
					async updateCommentThread(p, o) {
						const f = this.b.length,
							b = p.comments ? p.comments.length : 0,
							s = [],
							l = [];
						for (let S = 0; S < f; S++) {
							const I = this.b[S].comment,
								T = p.comments
									? p.comments.filter(
											(P) => P.uniqueIdInThread === I.uniqueIdInThread,
										)
									: [];
							T.length
								? this.b[S].update(T[0])
								: (l.push(S), s.push(this.b[S]));
						}
						for (let S = s.length - 1; S >= 0; S--) {
							const I = s[S];
							this.j.deleteAndDispose(I),
								this.b.splice(l[S], 1),
								I.domNode.remove();
						}
						let y = null;
						const $ = [],
							v = [];
						for (let S = b - 1; S >= 0; S--) {
							const I = p.comments[S],
								T = this.b.filter(
									(P) => P.comment.uniqueIdInThread === I.uniqueIdInThread,
								);
							if (T.length) (y = T[0].domNode), $.unshift(T[0]);
							else {
								const P = this.H(I);
								$.unshift(P),
									y
										? (this.a.insertBefore(P.domNode, y), (y = P.domNode))
										: (this.a.appendChild(P.domNode), (y = P.domNode)),
									I.mode === E.CommentMode.Editing &&
										(await P.switchToEditMode(), v.push(P));
							}
						}
						if (((this.r = p), (this.b = $), v.length)) {
							const S = this.b.indexOf(v[v.length - 1]);
							this.g = S;
						}
						this.F(), o || this.G(this.g);
					}
					F() {
						this.r.isDocumentCommentThread()
							? this.r.range
								? (this.a.ariaLabel = i.localize(
										5093,
										null,
										this.r.comments?.length,
										this.r.range.startLineNumber,
										this.r.range.endLineNumber,
										this.r.label,
									))
								: (this.a.ariaLabel = i.localize(
										5094,
										null,
										this.r.comments?.length,
										this.r.label,
									))
							: (this.a.ariaLabel = i.localize(
									5095,
									null,
									this.r.comments?.length,
									this.r.label,
								));
					}
					G(p) {
						this.g !== void 0 && this.b[this.g]?.setFocus(!1),
							this.b.length === 0 || p === void 0
								? (this.g = void 0)
								: ((this.g = Math.min(p, this.b.length - 1)),
									this.b[this.g].setFocus(!0));
					}
					H(p) {
						const o = this.t.createInstance(
								u.$s3b,
								this.n,
								this.r,
								p,
								this.s ? this.s[p.uniqueIdInThread] : void 0,
								this.owner,
								this.parentResourceUri,
								this.u,
								this.m,
							),
							f = new w.$Zc();
						return (
							f.add(
								o.onDidClick((b) =>
									this.G(
										this.b.findIndex(
											(s) =>
												s.comment.uniqueIdInThread ===
												b.comment.uniqueIdInThread,
										),
									),
								),
							),
							f.add(o),
							this.j.set(o, f),
							o
						);
					}
					dispose() {
						super.dispose(),
							this.f && (this.f.disconnect(), (this.f = null)),
							this.j.dispose();
					}
				};
				(e.$t3b = n),
					(e.$t3b = n = Ne([j(9, d.$62b), j(10, h.$7rb), j(11, c.$nM)], n));
			},
		),
		define(
			de[1899],
			he([
				1, 0, 7, 6, 3, 74, 1323, 447, 3764, 3029, 3032, 505, 51, 123, 17, 1237,
				49, 518, 10, 791, 4, 130, 39, 417, 265, 56, 1143,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F3b = e.$E3b = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(e.$E3b = "commenteditordecoration");
				let I = class extends w.$1c {
					get commentThread() {
						return this.z;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(),
							(this.container = P),
							(this._parentEditor = k),
							(this.t = L),
							(this.u = D),
							(this.w = M),
							(this.y = N),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.L = H),
							(this.M = q),
							(this.h = []),
							(this.r = new i.$re()),
							(this.onDidResize = this.r.event),
							(this.j = a.CommentContextKeys.commentThreadIsEmpty.bindTo(
								this.w,
							)),
							this.j.set(!A.comments || !A.comments.length),
							(this.q = a.CommentContextKeys.commentFocused.bindTo(this.w)),
							(this.g = this.J.getCommentMenus(this.t)),
							this.D(
								(this.a = new r.$u3b(
									P,
									{ collapse: this.collapse.bind(this) },
									this.g,
									this.z,
									this.w,
									this.y,
									x,
								)),
							),
							this.a.updateCommentThread(this.z);
						const V = t.$(".body");
						P.appendChild(V), this.D((0, w.$Yc)(() => V.remove()));
						const G = this.D(t.$dhb(V));
						this.D(
							(0, o.$D3b)({
								name: "commentThreadWidget",
								focusNotifiers: [G],
								focusNextWidget: () => {
									this.c?.isCommentEditorFocused() ||
										this.c?.expandReplyAreaAndFocusCommentEditor();
								},
								focusPreviousWidget: () => {
									this.c?.isCommentEditorFocused() &&
										this.z.comments?.length &&
										this.b.focus();
								},
							}),
						),
							this.D(G.onDidFocus(() => this.q.set(!0))),
							this.D(G.onDidBlur(() => this.q.reset())),
							this.D(
								this.L.onDidChangeConfiguration((W) => {
									W.affectsConfiguration(
										l.AccessibilityVerbositySettingId.Comments,
									) && this.N();
								}),
							),
							(this.b = this.y.createInstance(
								m.$t3b,
								this._parentEditor,
								this.t,
								this.u,
								V,
								this.G,
								this.z,
								this.F,
								this.y,
								this,
							)),
							this.D(this.b),
							this.N(),
							(this.m = t.$Rgb(this.container)),
							(this.n = a.CommentContextKeys.commentThreadContext.bindTo(
								this.w,
							)),
							this.n.set(A.contextValue);
						const K = a.CommentContextKeys.commentControllerContext.bindTo(
								this.w,
							),
							J = this.J.getCommentController(this.t);
						J?.contextValue && K.set(J.contextValue),
							this.P(),
							this.D(
								new v.$mib(this.container, "keydown").event((W) => {
									t.$8gb(W) &&
										W.key === "Escape" &&
										(n.$iL.isIRange(this.commentThread.range) &&
											(0, S.$0sb)(this._parentEditor) &&
											this._parentEditor.setSelection(this.commentThread.range),
										this.collapse());
								}),
							);
					}
					N() {
						let P = (0, s.localize)(5099, null),
							k;
						this.L.getValue(l.AccessibilityVerbositySettingId.Comments) &&
							(k =
								this.M.lookupKeybinding(
									$.AccessibilityCommandId.OpenAccessibilityHelp,
									this.w,
								)?.getLabel() ?? void 0),
							k
								? (P = (0, s.localize)(5100, null, P, k))
								: (P = (0, s.localize)(5101, null, P)),
							(this.b.container.ariaLabel = P);
					}
					O(P, k) {
						P || k
							? this.J.setCurrentCommentThread(this.commentThread)
							: this.J.setCurrentCommentThread(void 0);
					}
					P() {
						let P = !1,
							k = !1;
						this.D(
							t.$0fb(
								this.container,
								t.$$gb.MOUSE_ENTER,
								(L) => {
									L.toElement === this.container && ((P = !0), this.O(P, k));
								},
								!0,
							),
						),
							this.D(
								t.$0fb(
									this.container,
									t.$$gb.MOUSE_LEAVE,
									(L) => {
										L.fromElement === this.container &&
											((P = !1), this.O(P, k));
									},
									!0,
								),
							),
							this.D(
								t.$0fb(
									this.container,
									t.$$gb.FOCUS_IN,
									() => {
										(k = !0), this.O(P, k);
									},
									!0,
								),
							),
							this.D(
								t.$0fb(
									this.container,
									t.$$gb.FOCUS_OUT,
									() => {
										(k = !1), this.O(P, k);
									},
									!0,
								),
							);
					}
					async updateCommentThread(P) {
						const k =
							this.z.collapsibleState ===
								E.CommentThreadCollapsibleState.Expanded &&
							this.s === E.CommentThreadState.Unresolved &&
							P.state === E.CommentThreadState.Resolved;
						(this.s = P.state),
							(this.z = P),
							(0, w.$Vc)(this.h),
							(this.h = []),
							this.R(),
							await this.b.updateCommentThread(
								P,
								this.c?.isCommentEditorFocused() ?? !1,
							),
							this.j.set(!this.b.length),
							this.a.updateCommentThread(P),
							this.c?.updateCommentThread(P),
							this.z.contextValue
								? this.n.set(this.z.contextValue)
								: this.n.reset(),
							k && this.L.getValue(b.$32b).collapseOnResolve && this.collapse();
					}
					async display(P, k) {
						const L = Math.max(23, Math.ceil(P * 1.2));
						this.a.updateHeight(L),
							await this.b.display(),
							this.z.canReply && this.S(k),
							this.U(),
							this.D(
								this.b.onDidResize((D) => {
									this.Q(D);
								}),
							),
							this.z.canReply && this.c && this.c.focusIfNeeded(),
							this.R();
					}
					Q(P) {
						this.b.layout(), this.r.fire(P);
					}
					dispose() {
						super.dispose(), (0, w.$Vc)(this.h), this.O(!1, !1);
					}
					R() {
						this.h.push(
							this.z.onDidChangeCanReply(() => {
								this.c
									? this.c.updateCanReply()
									: this.z.canReply && this.S(!1);
							}),
						),
							this.h.push(
								this.z.onDidChangeComments(async (P) => {
									await this.updateCommentThread(this.z);
								}),
							),
							this.h.push(
								this.z.onDidChangeLabel((P) => {
									this.a.createThreadLabel();
								}),
							);
					}
					S(P) {
						(this.c = this.y.createInstance(
							C.$n3b,
							this.t,
							this.b.container,
							this._parentEditor,
							this.z,
							this.y,
							this.w,
							this.g,
							this.H,
							this.C,
							this,
							P,
							this.I.actionRunner,
						)),
							this.D(this.c);
					}
					U() {
						(this.f = this.y.createInstance(
							u.$v3b,
							this.b.container,
							this.z,
							this.w,
							this.g,
							this.I.actionRunner,
						)),
							this.D(this.f);
					}
					getCommentCoords(P) {
						return this.b.getCommentCoords(P);
					}
					getPendingEdits() {
						return this.b.getPendingEdits();
					}
					getPendingComment() {
						if (this.c) return this.c.getPendingComment();
					}
					setPendingComment(P) {
						(this.C = P), this.c?.setPendingComment(P);
					}
					getDimensions() {
						return this.b.getDimensions();
					}
					layout(P) {
						this.b.layout(P), P !== void 0 && this.c?.layout(P);
					}
					ensureFocusIntoNewEditingComment() {
						this.b.ensureFocusIntoNewEditingComment();
					}
					focusCommentEditor() {
						this.c?.expandReplyAreaAndFocusCommentEditor();
					}
					focus() {
						this.b.focus();
					}
					async submitComment() {
						const P = this.b.activeComment;
						if (P) return P.submitComment();
						if ((this.c?.getPendingComment()?.length ?? 0) > 0)
							return this.c?.submitComment();
					}
					collapse() {
						this.I.collapse();
					}
					applyTheme(P, k) {
						const L = [];
						L.push(
							`.monaco-editor .review-widget > .body { border-top: 1px solid var(${g.$y3b}) }`,
						),
							L.push(
								`.monaco-editor .review-widget > .head { background-color: var(${g.$A3b}) }`,
							);
						const D = P.getColor(h.$RP);
						D && L.push(`.review-widget .body .comment-body a { color: ${D} }`);
						const M = P.getColor(h.$SP);
						M &&
							L.push(
								`.review-widget .body .comment-body a:hover, a:active { color: ${M} }`,
							);
						const N = P.getColor(h.$NP);
						N &&
							(L.push(
								`.review-widget .body .comment-body a:focus { outline: 1px solid ${N}; }`,
							),
							L.push(
								`.review-widget .body .monaco-editor.focused { outline: 1px solid ${N}; }`,
							));
						const A = P.getColor(h.$WP);
						A &&
							L.push(
								`.review-widget .body .review-comment blockquote { background: ${A}; }`,
							);
						const R = P.getColor(h.$XP);
						R &&
							L.push(
								`.review-widget .body .review-comment blockquote { border-color: ${R}; }`,
							);
						const O = P.getColor(c.$rFb);
						O &&
							L.push(
								`.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label { border-color: ${O}; }`,
							);
						const B = P.getColor(h.$OP);
						B &&
							(L.push(
								`.review-widget .body .comment-form .review-thread-reply-button { outline-color: ${B}; }`,
							),
							L.push(
								`.review-widget .body .monaco-editor { outline: 1px solid ${B}; }`,
							));
						const U = P.getColor(h.$0R);
						U &&
							L.push(
								`.review-widget .validation-error { border: 1px solid ${U}; }`,
							);
						const z = P.getColor(h.$8R);
						z &&
							L.push(`.review-widget .validation-error { background: ${z}; }`);
						const F = P.getColor(h.$9R);
						F &&
							L.push(
								`.review-widget .body .comment-form .validation-error { color: ${F}; }`,
							);
						const x = "--comment-thread-editor-font-family",
							H = "--comment-thread-editor-font-size",
							q = "--comment-thread-editor-font-weight";
						this.container?.style.setProperty(x, k.fontFamily),
							this.container?.style.setProperty(H, `${k.fontSize}px`),
							this.container?.style.setProperty(q, k.fontWeight),
							L.push(`.review-widget .body code {
			font-family: var(${x});
			font-weight: var(${q});
		}`),
							(this.m.textContent = L.join(`
`)),
							this.c?.setCommentEditorDecorations();
					}
				};
				(e.$F3b = I),
					(e.$F3b = I =
						Ne([j(12, d.$62b), j(13, p.$Xxb), j(14, f.$gj), j(15, y.$uZ)], I));
			},
		),
		define(
			de[3765],
			he([
				1, 0, 97, 6, 3, 56, 17, 74, 680, 8, 5, 35, 1723, 447, 38, 128, 1899,
				1237, 255, 10, 491,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$npc = e.CommentWidgetFocus = void 0),
					(e.$kpc = $),
					(e.$lpc = v),
					(e.$mpc = S),
					(d = mt(d));
				function l(T, P) {
					return (0, o.$B3b)(T, P) ?? P.getColor(f.$aNb);
				}
				var y;
				(function (T) {
					(T[(T.None = 0)] = "None"),
						(T[(T.Widget = 1)] = "Widget"),
						(T[(T.Editor = 2)] = "Editor");
				})(y || (e.CommentWidgetFocus = y = {}));
				function $(T) {
					const P = T.target.range;
					if (
						!P ||
						!T.event.leftButton ||
						T.target.type !== E.MouseTargetType.GUTTER_LINE_DECORATIONS
					)
						return null;
					const k = T.target.detail;
					return k.offsetX -
						k.glyphMarginWidth -
						k.lineNumbersWidth -
						k.glyphMarginLeft >
						20
						? null
						: { lineNumber: P.startLineNumber };
				}
				function v(T, P) {
					if (!T) return null;
					const { lineNumber: k } = T;
					return P.target.range ? k : null;
				}
				function S(T, P) {
					if (!T) return null;
					const { lineNumber: k } = T,
						L = P.target.range;
					return !L ||
						L.startLineNumber !== k ||
						P.target.type !== E.MouseTargetType.GUTTER_LINE_DECORATIONS
						? null
						: k;
				}
				let I = class extends m.$FLb {
					get uniqueOwner() {
						return this.H;
					}
					get commentThread() {
						return this.I;
					}
					get expanded() {
						return this.d;
					}
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(P, { keepEditorSelection: !0, isAccessible: !0 }),
							(this.H = k),
							(this.I = L),
							(this.J = D),
							(this.K = M),
							(this.L = A),
							(this.M = R),
							(this.N = B),
							(this.b = new i.$re()),
							(this.c = new i.$re()),
							(this.k = new w.$Zc()),
							(this.m = []),
							(this.p = O.createScoped(this.domNode)),
							(this.r = this.k.add(N.createChild(new g.$Ki([r.$6j, this.p]))));
						const U = this.M.getCommentController(this.H);
						U && (this.s = U.options),
							(this.i = D ? d.CommentThreadCollapsibleState.Expanded : L.m),
							(L.m = this.i),
							(this.m = []),
							this.create(),
							this.k.add(this.L.onDidColorThemeChange(this.Z, this)),
							this.k.add(
								this.editor.onDidChangeConfiguration((z) => {
									z.hasChanged(n.EditorOption.fontInfo) &&
										this.Z(this.L.getColorTheme());
								}),
							),
							this.Z(this.L.getColorTheme());
					}
					get onDidClose() {
						return this.b.event;
					}
					get onDidCreateThread() {
						return this.c.event;
					}
					getPosition() {
						if (this.position) return this.position;
						if (this.j) return this.j.getPosition().position ?? void 0;
					}
					A() {}
					reveal(P, k = y.None) {
						this.makeVisible(P, k);
						const L = this.I.comments?.find((D) => D.uniqueIdInThread === P);
						this.M.setActiveCommentAndThread(this.uniqueOwner, {
							thread: this.I,
							comment: L,
						});
					}
					P() {
						this.d || this.show(this.U(this.I.range), 2);
					}
					Q(P) {
						P === y.Widget
							? this.a.focus()
							: P === y.Editor && this.a.focusCommentEditor();
					}
					R(P, k) {
						const L = this.editor.getLayoutInfo().height,
							D = this.a.getCommentCoords(P);
						if (D) {
							let M = 1;
							if (this.I.range) {
								const N = D.thread,
									A = D.comment;
								M =
									this.editor.getTopForLineNumber(
										this.I.range.startLineNumber,
									) -
									L / 2 +
									A.top -
									N.top;
							}
							this.editor.setScrollTop(M), this.Q(k);
						} else this.S(k);
					}
					S(P) {
						const k = this.I.range
							? new C.$iL(
									this.I.range.startLineNumber,
									this.I.range.startColumn,
									this.I.range.endLineNumber + 1,
									1,
								)
							: new C.$iL(1, 1, 1, 1);
						this.editor.revealRangeInCenter(k), this.Q(P);
					}
					makeVisible(P, k = y.None) {
						this.P(), P !== void 0 && this.R(P, k), this.S(k);
					}
					getPendingComments() {
						return {
							newComment: this.a.getPendingComment(),
							edits: this.a.getPendingEdits(),
						};
					}
					setPendingComment(P) {
						(this.J = P), this.expand(), this.a.setPendingComment(P);
					}
					C(P) {
						this.B("review-widget"),
							(this.a = this.r.createInstance(
								p.$F3b,
								P,
								this.editor,
								this.H,
								this.editor.getModel().uri,
								this.p,
								this.r,
								this.I,
								this.J,
								this.K,
								{
									editor: this.editor,
									codeBlockFontSize: "",
									codeBlockFontFamily:
										this.N.getValue("editor").fontFamily ||
										n.EDITOR_FONT_DEFAULTS.fontFamily,
								},
								this.s,
								{
									actionRunner: async () => {
										if (!this.I.comments || !this.I.comments.length) {
											const k = this.getPosition();
											if (k) {
												const L = this.I.range;
												if (!L) return;
												let D;
												if (k.lineNumber !== L.endLineNumber) {
													const M = k.lineNumber - L.endLineNumber;
													D = new C.$iL(
														L.startLineNumber + M,
														L.startColumn,
														L.endLineNumber + M,
														L.endColumn,
													);
												} else
													D = new C.$iL(
														L.startLineNumber,
														L.startColumn,
														L.endLineNumber,
														L.endColumn,
													);
												await this.M.updateCommentThreadTemplate(
													this.uniqueOwner,
													this.I.commentThreadHandle,
													D,
												);
											}
										}
									},
									collapse: () => {
										this.collapse();
									},
								},
							)),
							this.o.add(this.a);
					}
					U(P) {
						if (P)
							return {
								lineNumber: P.endLineNumber,
								column:
									P.endLineNumber === P.startLineNumber
										? (P.startColumn + P.endColumn + 1) / 2
										: 1,
							};
					}
					V() {
						this.dispose(),
							this.M.disposeCommentThread(this.uniqueOwner, this.I.threadId);
					}
					collapse() {
						this.I.collapsibleState = d.CommentThreadCollapsibleState.Collapsed;
					}
					expand(P) {
						(this.I.collapsibleState =
							d.CommentThreadCollapsibleState.Expanded),
							P &&
								this.M.setActiveCommentAndThread(this.uniqueOwner, {
									thread: this.I,
								});
					}
					getGlyphPosition() {
						return this.j ? this.j.getPosition().position.lineNumber : 0;
					}
					async update(P) {
						this.I !== P &&
							(this.m.forEach((D) => D.dispose()),
							(this.I = P),
							(this.m = []),
							this.Y()),
							await this.a.updateCommentThread(P);
						const k = this.I.range?.endLineNumber ?? 1;
						let L = !1;
						this.j &&
							(this.j.setThreadState(P.state),
							this.j.getPosition().position.lineNumber !== k &&
								((L = !0), this.j.setLineNumber(k))),
							(L && this.d) ||
							(this.I.collapsibleState ===
								d.CommentThreadCollapsibleState.Expanded &&
								!this.d)
								? this.show(this.U(this.I.range), 2)
								: this.I.collapsibleState !==
										d.CommentThreadCollapsibleState.Expanded && this.hide();
					}
					D(P) {
						this.a.layout(P);
					}
					E(P, k) {
						this.a.layout(k);
					}
					async display(P, k) {
						P &&
							((this.j = new h.$jpc(this.editor, P?.endLineNumber ?? -1)),
							this.j.setThreadState(this.I.state)),
							await this.a.display(
								this.editor.getOption(n.EditorOption.lineHeight),
								k,
							),
							this.o.add(
								this.a.onDidResize((L) => {
									this._refresh(L);
								}),
							),
							(this.I.collapsibleState ===
								d.CommentThreadCollapsibleState.Expanded ||
								P === void 0) &&
								this.show(this.U(P), 2),
							k && this.makeVisible(),
							this.Y();
					}
					Y() {
						if (
							(this.m.push(
								this.I.onDidChangeComments(async (P) => {
									await this.update(this.I);
								}),
							),
							this.m.push(
								this.I.onDidChangeRange((P) => {
									const k = this.I.range?.startLineNumber ?? 1;
									let L = !1;
									this.j &&
										this.j.getPosition().position.lineNumber !== k &&
										((L = !0), this.j.setLineNumber(k)),
										L && this.d && this.show(this.U(this.I.range), 2);
								}),
							),
							this.m.push(
								this.I.onDidChangeCollapsibleState((P) => {
									if (
										P === d.CommentThreadCollapsibleState.Expanded &&
										!this.d
									) {
										this.show(this.U(this.I.range), 2),
											this.a.ensureFocusIntoNewEditingComment();
										return;
									}
									if (
										P === d.CommentThreadCollapsibleState.Collapsed &&
										this.d
									) {
										this.hide();
										return;
									}
								}),
							),
							this.i === void 0)
						) {
							const P = this.I.onDidChangeInitialCollapsibleState((k) => {
								(this.i = k), (this.I.collapsibleState = this.i), P.dispose();
							});
							this.m.push(P);
						}
						this.m.push(
							this.I.onDidChangeState(() => {
								const P =
									l(this.I.state, this.L.getColorTheme()) || t.$UL.transparent;
								this.style({ frameColor: P, arrowColor: P }),
									this.container?.style.setProperty(o.$y3b, `${P}`),
									this.container?.style.setProperty(
										o.$A3b,
										`${P.transparent(0.1)}`,
									);
							}),
						);
					}
					async submitComment() {
						return this.a.submitComment();
					}
					_refresh(P) {
						if (this.d === void 0 && P.height === 0 && P.width === 0) {
							this.commentThread.collapsibleState =
								d.CommentThreadCollapsibleState.Collapsed;
							return;
						}
						if (this.d) {
							this.a.layout();
							const k = Math.ceil(
									this.editor.getOption(n.EditorOption.lineHeight) * 1.2,
								),
								L = this.editor.getOption(n.EditorOption.lineHeight),
								D = Math.round(L / 3),
								M = Math.round(L / 9) * 2,
								N = Math.ceil((k + P.height + D + M + 8) / L);
							if (this.n?.heightInLines === N) return;
							const A = this.getPosition();
							this.n &&
								A &&
								A.lineNumber !== this.n.afterLineNumber &&
								this.n.afterLineNumber !== 0 &&
								(this.n.afterLineNumber = A.lineNumber);
							const R = s.$uwb.capture(this.editor);
							this.F(N), R.restore(this.editor);
						}
					}
					Z(P) {
						const k =
							l(this.I.state, this.L.getColorTheme()) || t.$UL.transparent;
						this.style({ arrowColor: k, frameColor: k });
						const L = this.editor.getOption(n.EditorOption.fontInfo);
						this.a.applyTheme(P, L);
					}
					show(P, k) {
						const L = this.j?.getPosition();
						let D = C.$iL.isIRange(P) ? P : P ? C.$iL.fromPositions(P) : void 0;
						if (L?.position && D && L.position.lineNumber !== D.endLineNumber) {
							const M = L.position.lineNumber - D.endLineNumber;
							D = new C.$iL(
								D.startLineNumber + M,
								D.startColumn,
								D.endLineNumber + M,
								D.endColumn,
							);
						}
						(this.d = !0),
							super.show(D ?? new C.$iL(0, 0, 0, 0), k),
							(this.I.collapsibleState =
								d.CommentThreadCollapsibleState.Expanded),
							this._refresh(this.a.getDimensions());
					}
					hide() {
						this.d &&
							((this.d = !1),
							this.editor.hasWidgetFocus() && this.editor.focus(),
							(!this.I.comments || !this.I.comments.length) && this.V()),
							super.hide();
					}
					dispose() {
						super.dispose(),
							this.j && (this.j.dispose(), (this.j = void 0)),
							this.k.dispose(),
							this.m.forEach((P) => P.dispose()),
							this.b.fire(void 0);
					}
				};
				(e.$npc = I),
					(e.$npc = I =
						Ne(
							[
								j(5, u.$Li),
								j(6, a.$iP),
								j(7, c.$62b),
								j(8, r.$6j),
								j(9, b.$gj),
							],
							I,
						));
			},
		),
		define(
			de[1900],
			he([1, 0, 8, 5, 846, 505, 4, 130, 1238, 1635, 178, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qSc = e.$pSc = e.CommentAccessibilityHelpNLS = void 0),
					(C = mt(C));
				var h;
				(function (g) {
					(g.intro = C.localize(5029, null)),
						(g.tabFocus = C.localize(5030, null, `<keybinding:${r.$xkc.ID}>`)),
						(g.commentCommands = C.localize(5031, null)),
						(g.escape = C.localize(5032, null)),
						(g.nextRange = C.localize(
							5033,
							null,
							`<keybinding:${m.CommentCommandId.NextRange}>`,
						)),
						(g.previousRange = C.localize(
							5034,
							null,
							`<keybinding:${m.CommentCommandId.PreviousRange}>`,
						)),
						(g.nextCommentThread = C.localize(
							5035,
							null,
							`<keybinding:${m.CommentCommandId.NextThread}>`,
						)),
						(g.previousCommentThread = C.localize(
							5036,
							null,
							`<keybinding:${m.CommentCommandId.PreviousThread}>`,
						)),
						(g.addComment = C.localize(
							5037,
							null,
							`<keybinding:${m.CommentCommandId.Add}>`,
						)),
						(g.submitComment = C.localize(
							5038,
							null,
							`<keybinding:${m.CommentCommandId.Submit}>`,
						));
				})(h || (e.CommentAccessibilityHelpNLS = h = {}));
				class c extends a.$1c {
					constructor() {
						super(...arguments),
							(this.id = u.AccessibleViewProviderId.Comments),
							(this.verbositySettingKey =
								d.AccessibilityVerbositySettingId.Comments),
							(this.options = { type: u.AccessibleViewType.Help });
					}
					provideContent() {
						return [
							h.tabFocus,
							h.commentCommands,
							h.escape,
							h.addComment,
							h.submitComment,
							h.nextRange,
							h.previousRange,
						].join(`
`);
					}
					onClose() {
						this.a?.focus();
					}
				}
				e.$pSc = c;
				class n {
					constructor() {
						(this.priority = 110),
							(this.name = "comments"),
							(this.type = u.AccessibleViewType.Help),
							(this.when = t.$Kj.or(
								w.$h3b,
								E.CommentContextKeys.commentFocused,
							));
					}
					getProvider(p) {
						return p.get(i.$Li).createInstance(c);
					}
				}
				e.$qSc = n;
			},
		),
		define(
			de[1901],
			he([
				1, 0, 3, 65, 38, 761, 31, 8, 5, 39, 1032, 207, 1900, 505, 554, 178, 130,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JXc = void 0),
					(e.$KXc = b),
					(e.$LXc = s);
				class o extends t.$1c {
					constructor() {
						super(),
							this.D(
								u.$spc.addImplementation(90, "editor", async (y) => {
									const $ = y.get(i.$dtb),
										v = y.get(g.$HLb),
										S = y.get(m.$Li),
										I = y.get(C.$ek);
									let T = $.getActiveCodeEditor() || $.getFocusedCodeEditor();
									T ||
										(await I.executeCommand(n.$oVb),
										(T = $.getActiveCodeEditor())),
										v.show(S.createInstance(f, T));
								}),
							);
					}
				}
				e.$JXc = o;
				let f = class extends t.$1c {
					onClose() {
						this.a.focus();
					}
					constructor(y, $, v) {
						super(),
							(this.a = y),
							(this.b = $),
							(this.c = v),
							(this.id = g.AccessibleViewProviderId.Editor),
							(this.options = {
								type: g.AccessibleViewType.Help,
								readMoreUrl: "https://go.microsoft.com/fwlink/?linkid=851010",
							}),
							(this.verbositySettingKey =
								p.AccessibilityVerbositySettingId.Editor);
					}
					provideContent() {
						const y = this.a.getOptions(),
							$ = [];
						y.get(w.EditorOption.inDiffEditor)
							? y.get(w.EditorOption.readOnly)
								? $.push(E.AccessibilityHelpNLS.readonlyDiffEditor)
								: $.push(E.AccessibilityHelpNLS.editableDiffEditor)
							: y.get(w.EditorOption.readOnly)
								? $.push(E.AccessibilityHelpNLS.readonlyEditor)
								: $.push(E.AccessibilityHelpNLS.editableEditor),
							$.push(E.AccessibilityHelpNLS.listSignalSounds),
							$.push(E.AccessibilityHelpNLS.listAlerts);
						const v = s(this.b, this.c);
						v && $.push(v);
						const S = b(this.b, this.c, this.a);
						return (
							S && $.push(S),
							y.get(w.EditorOption.stickyScroll).enabled &&
								$.push(E.AccessibilityHelpNLS.stickScroll),
							y.get(w.EditorOption.tabFocusMode)
								? $.push(E.AccessibilityHelpNLS.tabFocusModeOnMsg)
								: $.push(E.AccessibilityHelpNLS.tabFocusModeOffMsg),
							$.push(E.AccessibilityHelpNLS.codeFolding),
							$.push(E.AccessibilityHelpNLS.intellisense),
							$.push(E.AccessibilityHelpNLS.showOrFocusHover),
							$.push(E.AccessibilityHelpNLS.goToSymbol),
							$.push(E.AccessibilityHelpNLS.startDebugging),
							$.push(E.AccessibilityHelpNLS.setBreakpoint),
							$.push(E.AccessibilityHelpNLS.debugExecuteSelection),
							$.push(E.AccessibilityHelpNLS.addToWatch),
							$.join(`
`)
						);
					}
				};
				f = Ne([j(1, r.$uZ), j(2, d.$6j)], f);
				function b(l, y, $) {
					if (
						y
							.getContext($.getDomNode())
							.getValue(c.CommentContextKeys.activeEditorHasCommentingRange.key)
					)
						return [
							h.CommentAccessibilityHelpNLS.intro,
							h.CommentAccessibilityHelpNLS.addComment,
							h.CommentAccessibilityHelpNLS.nextCommentThread,
							h.CommentAccessibilityHelpNLS.previousCommentThread,
							h.CommentAccessibilityHelpNLS.nextRange,
							h.CommentAccessibilityHelpNLS.previousRange,
						].join(`
`);
				}
				function s(l, y) {
					if (a.$51.getValue(y))
						return [
							E.AccessibilityHelpNLS.quickChat,
							E.AccessibilityHelpNLS.startInlineChat,
						].join(`
`);
				}
			},
		),
		define(
			de[3766],
			he([1, 0, 65, 1217, 309, 4, 178, 8, 39, 130, 1901, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MXc = void 0);
				class h {
					constructor() {
						(this.priority = 105),
							(this.name = "diff-editor"),
							(this.when = d.$Rj.create("isInDiffEditor", !0)),
							(this.type = C.AccessibleViewType.Help);
					}
					getProvider(n) {
						const g = n.get(a.$IY),
							p = n.get(t.$dtb),
							o = n.get(m.$uZ),
							f = n.get(d.$6j);
						if (!(g.activeTextEditorControl instanceof w.$3yb)) return;
						const b = p.getActiveCodeEditor() || p.getFocusedCodeEditor();
						if (!b) return;
						const s = (0, E.localize)(
								4852,
								null,
								"<keybinding:diffEditor.switchSide>",
							),
							l = (0, E.localize)(4853, null),
							y = [
								"accessibility.signals.diffLineDeleted",
								"accessibility.signals.diffLineInserted",
								"accessibility.signals.diffLineModified",
							],
							$ = [
								(0, E.localize)(4854, null),
								(0, E.localize)(
									4855,
									null,
									"<keybinding:" + i.$_yb.id + ">",
									"<keybinding:" + i.$azb.id + ">",
								),
								s,
								l,
								(0, E.localize)(4856, null, y.join(", ")),
							],
							v = (0, u.$KXc)(o, f, b);
						return (
							v && $.push(v),
							new C.$ILb(
								C.AccessibleViewProviderId.DiffEditor,
								{ type: C.AccessibleViewType.Help },
								() =>
									$.join(`
`),
								() => b.focus(),
								r.AccessibilityVerbositySettingId.DiffEditor,
							)
						);
					}
				}
				e.$MXc = h;
			},
		),
		define(
			de[3767],
			he([1, 0, 3, 77, 46, 784, 125, 4, 412, 5, 40, 30, 824, 224, 3766]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let g = class extends t.$1c {
					static {
						this.ID = "editor.contrib.diffEditorHelper";
					}
					constructor(o, f, b, s) {
						if (
							(super(),
							(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.f = s),
							!(this.a instanceof E.$7mc))
						) {
							const $ = (0, i.observableFromEvent)(
								this,
								(v) => this.a.onDidUpdateDiff(v),
								() => this.a.getDiffComputationResult(),
							).map((v) => v && !v.identical && v.changes2.length === 0);
							this.D(
								(0, i.autorunWithStore)((v, S) => {
									if ($.read(v)) {
										const I = S.add(
											this.b.createInstance(
												h.$v4b,
												this.a.getModifiedEditor(),
												(0, d.localize)(4857, null),
												null,
											),
										);
										S.add(
											I.onClick(() => {
												this.c.updateValue(
													this.a.getModel().modified.uri,
													"diffEditor.ignoreTrimWhitespace",
													!1,
												);
											}),
										),
											I.render();
									}
								}),
							),
								this.D(
									this.a.onDidUpdateDiff(() => {
										const v = this.a.getDiffComputationResult();
										v &&
											v.quitEarly &&
											this.f.prompt(
												u.Severity.Warning,
												(0, d.localize)(4858, null, this.a.maxComputationTime),
												[
													{
														label: (0, d.localize)(4859, null),
														run: () => {
															this.c.updateValue(
																this.a.getModel().modified.uri,
																"diffEditor.maxComputationTime",
																0,
															);
														},
													},
												],
												{},
											);
									}),
								);
						}
					}
				};
				(g = Ne([j(1, r.$Li), j(2, C.$XO), j(3, u.$4N)], g)),
					(0, w.$rtb)(g.ID, g),
					a.$Io
						.as(c.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "diffEditor.experimental.collapseUnchangedRegions",
								migrateFn: (p, o) => [
									["diffEditor.hideUnchangedRegions.enabled", { value: p }],
									[
										"diffEditor.experimental.collapseUnchangedRegions",
										{ value: void 0 },
									],
								],
							},
						]),
					m.$Whc.register(new n.$MXc());
			},
		),
		define(
			de[3768],
			he([1, 0, 3, 23, 65, 98, 61, 67, 42, 549, 846]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mSc = void 0);
				let a = class extends t.$1c {
					static {
						this.ID = "comments.input.contentProvider";
					}
					constructor(c, n, g, p) {
						super(),
							(this.a = g),
							(this.b = p),
							this.D(
								c.registerTextModelContentProvider(
									i.Schemas.commentsInput,
									this,
								),
							),
							this.D(
								n.registerCodeEditorOpenHandler(async (o, f, b) =>
									!(f instanceof u.$k3b) ||
									f.getModel()?.uri.toString() !== o.resource.toString()
										? null
										: (o.options &&
												(0, r.applyTextEditorOptions)(
													o.options,
													f,
													E.ScrollType.Immediate,
												),
											f),
								),
							);
					}
					async provideTextContent(c) {
						return (
							this.a.getModel(c) ??
							this.a.createModel("", this.b.createById("markdown"), c)
						);
					}
				};
				(e.$mSc = a),
					(e.$mSc = a =
						Ne([j(0, m.$MO), j(1, w.$dtb), j(2, d.$QO), j(3, C.$nM)], a));
			},
		),
		define(
			de[3769],
			he([
				1, 0, 7, 114, 183, 95, 596, 29, 27, 3, 9, 46, 65, 206, 38, 48, 17, 71,
				74, 172, 69, 67, 42, 373, 680, 4, 10, 8, 49, 72, 5, 128, 39, 43, 73,
				106, 51, 35, 521, 112, 2425,
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
					(e.$pGc = void 0),
					(t = mt(t)),
					(r = mt(r)),
					(S = mt(S));
				const F = t.$,
					x = (0, L.$Mi)("privateBreakpointWidgetService"),
					H = "breakpointwidgetdecoration";
				function q(W) {
					return W.getModel()
						.bracketPairs.getBracketPairsInRange(
							p.$iL.fromPositions(W.getPosition()),
						)
						.some((ie) => ie.openingBracketInfo.bracketText === "{");
				}
				function V(W, X) {
					const Y = W.getColor(O.$9P)?.transparent(0.4);
					return [
						{
							range: {
								startLineNumber: 0,
								endLineNumber: 0,
								startColumn: 0,
								endColumn: 1,
							},
							renderOptions: {
								after: { contentText: X, color: Y ? Y.toString() : void 0 },
							},
						},
					];
				}
				let G = class extends v.$FLb {
					constructor(
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
						super(X, {
							showFrame: !0,
							showArrow: !1,
							frameWidth: 1,
							isAccessible: !0,
						}),
							(this.P = Y),
							(this.Q = ie),
							(this.R = ee),
							(this.S = _),
							(this.T = te),
							(this.U = Q),
							(this.V = Z),
							(this.W = se),
							(this.X = re),
							(this.Y = le),
							(this.Z = oe),
							(this.ab = ae),
							(this.bb = pe),
							(this.cb = $e),
							(this.db = ye),
							(this.H = ""),
							(this.I = ""),
							(this.J = ""),
							(this.r = []);
						const ue = this.editor.getModel();
						if (ue) {
							const fe = ue.uri,
								me = this.S.getModel().getBreakpoints({
									lineNumber: this.P,
									column: this.Q,
									uri: fe,
								});
							this.L = me.length ? me[0] : void 0;
						}
						ne === void 0
							? this.L &&
								!this.L.condition &&
								!this.L.hitCondition &&
								this.L.logMessage
								? (this.M = z.BreakpointWidgetContext.LOG_MESSAGE)
								: this.L && !this.L.condition && this.L.hitCondition
									? (this.M = z.BreakpointWidgetContext.HIT_COUNT)
									: this.L && this.L.triggeredBy
										? (this.M = z.BreakpointWidgetContext.TRIGGER_POINT)
										: (this.M = z.BreakpointWidgetContext.CONDITION)
							: (this.M = ne),
							this.r.push(
								this.S.getModel().onDidChangeBreakpoints((fe) => {
									this.L &&
										fe &&
										fe.removed &&
										fe.removed.indexOf(this.L) >= 0 &&
										this.dispose();
								}),
							),
							this.X.registerDecorationType("breakpoint-widget", H, {}),
							this.create();
					}
					get eb() {
						const X = this.ab.lookupKeybinding(K.ID)?.getLabel() || "Enter",
							Y = this.ab.lookupKeybinding(J.ID)?.getLabel() || "Escape";
						switch (this.M) {
							case z.BreakpointWidgetContext.LOG_MESSAGE:
								return S.localize(5249, null, X, Y);
							case z.BreakpointWidgetContext.HIT_COUNT:
								return S.localize(5250, null, X, Y);
							default:
								return S.localize(5251, null, X, Y);
						}
					}
					fb(X) {
						switch (this.M) {
							case z.BreakpointWidgetContext.LOG_MESSAGE:
								return X && X.logMessage ? X.logMessage : this.J;
							case z.BreakpointWidgetContext.HIT_COUNT:
								return X && X.hitCondition ? X.hitCondition : this.I;
							default:
								return X && X.condition ? X.condition : this.H;
						}
					}
					gb() {
						if (this.M !== z.BreakpointWidgetContext.TRIGGER_POINT) {
							const X = this.d.getModel().getValue();
							switch (this.M) {
								case z.BreakpointWidgetContext.LOG_MESSAGE:
									this.J = X;
									break;
								case z.BreakpointWidgetContext.HIT_COUNT:
									this.I = X;
									break;
								default:
									this.H = X;
							}
						}
					}
					hb() {
						if (this.editor.hasModel()) {
							const X =
								this.M === z.BreakpointWidgetContext.LOG_MESSAGE
									? b.$0M
									: this.editor.getModel().getLanguageId();
							this.d.getModel().setLanguage(X);
						}
					}
					show(X) {
						const Y = this.d.getModel().getLineCount();
						super.show(X, Y + 1);
					}
					fitHeightToContent() {
						const X = this.d.getModel().getLineCount();
						this.F(X + 1);
					}
					C(X) {
						this.B("breakpoint-widget");
						const Y = new C.$5ib(
							[
								{ text: S.localize(5252, null) },
								{ text: S.localize(5253, null) },
								{ text: S.localize(5254, null) },
								{ text: S.localize(5255, null) },
							],
							this.M,
							this.R,
							R.$Fyb,
							{ ariaLabel: S.localize(5256, null) },
						);
						(this.a = F(".breakpoint-select-container")),
							Y.render(t.$fhb(X, this.a)),
							Y.onDidSelect((ie) => {
								this.gb(), (this.M = ie.index), this.lb();
							}),
							this.jb(X),
							(this.b = F(".inputContainer")),
							this.r.push(
								this.db.setupManagedHover(
									(0, E.$cib)("mouse"),
									this.b,
									this.eb,
								),
							),
							this.ob(t.$fhb(X, this.b)),
							this.d.getModel().setValue(this.fb(this.L)),
							this.r.push(
								this.d.getModel().onDidChangeContent(() => {
									this.fitHeightToContent();
								}),
							),
							this.d.setPosition({
								lineNumber: 1,
								column: this.d.getModel().getLineMaxColumn(1),
							}),
							this.kb(X),
							this.lb(),
							setTimeout(() => this.rb(), 150);
					}
					jb(X) {
						const Y = this.S.getModel().getBreakpointModes("source");
						if (Y.length <= 1) return;
						const ie = (this.k = new C.$5ib(
							[
								{ text: S.localize(5257, null), isDisabled: !0 },
								...Y.map((_) => ({
									text: _.label,
									description: _.description,
								})),
							],
							Y.findIndex((_) => _.mode === this.L?.mode) + 1,
							this.R,
							R.$Fyb,
						));
						this.r.push(ie),
							this.r.push(
								ie.onDidSelect((_) => {
									this.K = Y[_.index - 1];
								}),
							);
						const ne = F(".select-mode-container"),
							ee = F(".select-box-container");
						t.$fhb(ne, ee), ie.render(ee), t.$fhb(X, ne);
					}
					kb(X) {
						const Y = this.S.getModel()
								.getBreakpoints()
								.filter((Q) => Q !== this.L && !Q.logMessage),
							ie = [
								{ text: S.localize(5258, null), isDisabled: !0 },
								...Y.map((Q) => ({
									text: `${this.bb.getUriLabel(Q.uri, { relative: !0 })}: ${Q.lineNumber}`,
									description: S.localize(5259, null),
								})),
							],
							ne = Y.findIndex((Q) => this.L?.triggeredBy === Q.getId());
						for (const [Q, Z] of Y.entries())
							this.cb
								.createModelReference(Z.uri)
								.then((se) => {
									try {
										ie[Q + 1].description = se.object.textEditorModel
											.getLineContent(Z.lineNumber)
											.trim();
									} finally {
										se.dispose();
									}
								})
								.catch(() => {
									ie[Q + 1].description = S.localize(5260, null);
								});
						const ee = (this.j = new C.$5ib(ie, ne + 1, this.R, R.$Fyb, {
							ariaLabel: S.localize(5261, null),
						}));
						ee.onDidSelect((Q) => {
							Q.index === 0 ? (this.O = void 0) : (this.O = Y[Q.index - 1]);
						}),
							this.r.push(ee),
							(this.c = F(".select-breakpoint-container")),
							this.r.push(
								t.$0fb(this.c, t.$$gb.KEY_DOWN, (Q) => {
									new i.$7fb(Q).equals(m.KeyCode.Escape) && this.close(!1);
								}),
							);
						const _ = F(".select-box-container");
						t.$fhb(this.c, _), ee.render(_), t.$fhb(X, this.c);
						const te = new w.$oob(this.c, R.$lyb);
						(te.label = S.localize(5262, null)),
							this.r.push(te.onDidClick(() => this.close(!0))),
							this.r.push(te);
					}
					lb() {
						if (this.M === z.BreakpointWidgetContext.TRIGGER_POINT)
							(this.b.hidden = !0), (this.c.hidden = !1);
						else {
							(this.b.hidden = !1), (this.c.hidden = !0), this.hb();
							const X = this.fb(this.L);
							this.d.getModel().setValue(X), this.rb();
						}
					}
					E(X, Y) {
						(this.N = X),
							this.d.layout({ height: X, width: Y - 113 }),
							this.qb();
					}
					D(X) {
						typeof this.N == "number" && this.E(this.N, X);
					}
					ob(X) {
						const Y = this.U.createScoped(X);
						this.r.push(Y);
						const ie = this.V.createChild(new D.$Ki([T.$6j, Y], [x, this]));
						this.r.push(ie);
						const ne = this.pb(),
							ee = (0, U.$yYb)();
						(this.d = ie.createInstance(c.$rwb, X, ne, ee)),
							z.$04.bindTo(Y).set(!0);
						const _ = this.W.createModel(
							"",
							null,
							u.URI.parse(`${z.$25}:${this.editor.getId()}:breakpointinput`),
							!0,
						);
						this.editor.hasModel() &&
							_.setLanguage(this.editor.getModel().getLanguageId()),
							this.d.setModel(_),
							this.hb(),
							this.r.push(_);
						const te = () => {
							const Z = this.d.getModel().getValue()
								? []
								: V(this.T.getColorTheme(), this.eb);
							this.d.setDecorationsByType("breakpoint-widget", H, Z);
						};
						this.d.getModel().onDidChangeContent(() => te()),
							this.T.onDidColorThemeChange(() => te()),
							this.r.push(
								this.Z.completionProvider.register(
									{ scheme: z.$25, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "breakpointWidget",
										provideCompletionItems: (Q, Z, se, re) => {
											let le;
											const oe = this.editor.getModel();
											return (
												oe &&
												(this.M === z.BreakpointWidgetContext.CONDITION ||
													(this.M === z.BreakpointWidgetContext.LOG_MESSAGE &&
														q(this.d)))
													? (le = (0, $.$6Cb)(
															this.Z.completionProvider,
															oe,
															new g.$hL(this.P, 1),
															new $.$2Cb(
																void 0,
																new Set().add(f.CompletionItemKind.Snippet),
															),
															se,
															re,
														).then((ae) => {
															let pe = 0;
															if (
																this.M === z.BreakpointWidgetContext.CONDITION
															)
																pe = Z.column - 1;
															else {
																const $e = this.d.getModel().getValue();
																for (
																	;
																	Z.column - 2 - pe >= 0 &&
																	$e[Z.column - 2 - pe] !== "{" &&
																	$e[Z.column - 2 - pe] !== " ";
																)
																	pe++;
															}
															return {
																suggestions: ae.items.map(
																	($e) => (
																		($e.completion.range = p.$iL.fromPositions(
																			Z.delta(0, -pe),
																			Z,
																		)),
																		$e.completion
																	),
																),
															};
														}))
													: (le = Promise.resolve({ suggestions: [] })),
												le
											);
										},
									},
								),
							),
							this.r.push(
								this.Y.onDidChangeConfiguration((Q) => {
									(Q.affectsConfiguration("editor.fontSize") ||
										Q.affectsConfiguration("editor.lineHeight")) &&
										(this.d.updateOptions(this.pb()), this.qb());
								}),
							);
					}
					pb() {
						const X = this.Y.getValue("editor"),
							Y = (0, U.$xYb)(this.Y);
						return (
							(Y.fontSize = X.fontSize),
							(Y.fontFamily = X.fontFamily),
							(Y.lineHeight = X.lineHeight),
							(Y.fontLigatures = X.fontLigatures),
							(Y.ariaLabel = this.eb),
							Y
						);
					}
					qb() {
						if (this.container && typeof this.N == "number") {
							const X = this.d.getOption(n.EditorOption.lineHeight),
								Y = this.d.getModel().getLineCount(),
								ie = (this.N - Y * X) / 2;
							this.b.style.marginTop = ie + "px";
						}
					}
					close(X) {
						if (X) {
							let Y, ie, ne, ee, _, te;
							if (
								(this.gb(),
								(this.H || this.M === z.BreakpointWidgetContext.CONDITION) &&
									(Y = this.H),
								(this.I || this.M === z.BreakpointWidgetContext.HIT_COUNT) &&
									(ie = this.I),
								(this.J || this.M === z.BreakpointWidgetContext.LOG_MESSAGE) &&
									(ne = this.J),
								this.k && ((_ = this.K?.mode), (te = this.K?.label)),
								this.M === z.BreakpointWidgetContext.TRIGGER_POINT &&
									((Y = void 0),
									(ie = void 0),
									(ne = void 0),
									(ee = this.O?.getId())),
								this.L)
							) {
								const Q = new Map();
								Q.set(this.L.getId(), {
									condition: Y,
									hitCondition: ie,
									logMessage: ne,
									triggeredBy: ee,
									mode: _,
									modeLabel: te,
								}),
									this.S.updateBreakpoints(this.L.originalUri, Q, !1).then(
										void 0,
										d.$4,
									);
							} else {
								const Q = this.editor.getModel();
								Q &&
									this.S.addBreakpoints(Q.uri, [
										{
											lineNumber: this.P,
											column: this.Q,
											enabled: !0,
											condition: Y,
											hitCondition: ie,
											logMessage: ne,
											triggeredBy: ee,
											mode: _,
											modeLabel: te,
										},
									]);
							}
						}
						this.dispose();
					}
					rb() {
						this.M === z.BreakpointWidgetContext.TRIGGER_POINT
							? this.j.focus()
							: this.d.focus();
					}
					dispose() {
						super.dispose(),
							this.d.dispose(),
							r.$Vc(this.r),
							setTimeout(() => this.editor.focus(), 0);
					}
				};
				(e.$pGc = G),
					(e.$pGc = G =
						Ne(
							[
								j(4, P.$Wxb),
								j(5, z.$75),
								j(6, B.$iP),
								j(7, T.$6j),
								j(8, L.$Li),
								j(9, l.$QO),
								j(10, h.$dtb),
								j(11, I.$gj),
								j(12, s.$k3),
								j(13, M.$uZ),
								j(14, A.$3N),
								j(15, y.$MO),
								j(16, k.$Uyb),
							],
							G,
						));
				class K extends a.$htb {
					static {
						this.ID = "breakpointWidget.action.acceptInput";
					}
					constructor() {
						super({
							id: K.ID,
							precondition: z.$94,
							kbOpts: {
								kbExpr: z.$04,
								primary: m.KeyCode.Enter,
								weight: N.KeybindingWeight.EditorContrib,
							},
						});
					}
					runEditorCommand(X, Y) {
						X.get(x).close(!0);
					}
				}
				class J extends a.$htb {
					static {
						this.ID = "closeBreakpointWidget";
					}
					constructor() {
						super({
							id: J.ID,
							precondition: z.$94,
							kbOpts: {
								kbExpr: o.EditorContextKeys.textInputFocus,
								primary: m.KeyCode.Escape,
								secondary: [m.KeyMod.Shift | m.KeyCode.Escape],
								weight: N.KeybindingWeight.EditorContrib,
							},
						});
					}
					runEditorCommand(X, Y, ie) {
						const ne = Y.getContribution(z.$15);
						if (ne) return ne.closeBreakpointWidget();
						X.get(x).close(!1);
					}
				}
				(0, a.$mtb)(new K()), (0, a.$mtb)(new J());
			},
		),
		define(
			de[3770],
			he([
				1, 0, 7, 24, 6, 3, 26, 491, 1606, 196, 17, 64, 122, 200, 290, 8, 84, 44,
				790, 1244, 257, 28, 67, 1734, 91, 10, 85, 23, 5, 845, 19, 47, 1675, 38,
				103, 1740, 77, 11,
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
			) {
				"use strict";
				var U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n1b = e.$m1b = e.$l1b = e.HunkAction = void 0);
				var z;
				(function (G) {
					(G[(G.Accept = 0)] = "Accept"),
						(G[(G.Discard = 1)] = "Discard"),
						(G[(G.MoveNext = 2)] = "MoveNext"),
						(G[(G.MovePrev = 3)] = "MovePrev"),
						(G[(G.ToggleDiff = 4)] = "ToggleDiff");
				})(z || (e.HunkAction = z = {}));
				let F = class {
					static {
						U = this;
					}
					static {
						this.a = h.$eY.register({
							description: "inline-chat",
							showIfCollapsed: !1,
							isWholeLine: !0,
						});
					}
					constructor(K, J, W, X, Y) {
						(this.e = K),
							(this.f = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.b = new E.$Zc()),
							(this.c = this.b.add(new w.$re())),
							(this.d = this.b.add(new w.$re())),
							(this.onDidAccept = this.c.event),
							(this.onDidDiscard = this.d.event);
					}
					dispose() {
						this.b.dispose();
					}
					performHunkAction(K, J) {
						J === z.Accept ? this.c.fire() : J === z.Discard && this.d.fire();
					}
					async k(K) {
						const J = [],
							W = this.j.createInstance(k.$FYb);
						for (const X of this.e.chatModel.getRequests())
							if (X.response?.response) {
								for (const Y of X.response.response.value)
									if (
										Y.kind === "textEditGroup" &&
										!(K && (0, L.$gh)(Y.uri, this.e.textModelN.uri)) &&
										(await W.apply(X.response, Y, void 0),
										Y.uri.scheme === T.Schemas.untitled)
									) {
										const ie = this.h.untitled.get(Y.uri);
										ie && J.push(ie);
									}
							}
						for (const X of J)
							X.isDisposed() ||
								(await X.resolve(),
								await X.save({ reason: o.SaveReason.EXPLICIT }));
					}
					cancel() {
						return this.e.hunkData.discardAll();
					}
					getWholeRangeDecoration() {
						const J = [this.e.wholeRange.value].map((W) =>
							W.isEmpty() ? void 0 : { range: W, options: U.a },
						);
						return (0, i.$Mb)(J), J;
					}
				};
				(e.$l1b = F), (e.$l1b = F = U = Ne([j(3, I.$kZ), j(4, P.$Li)], F));
				let x = class extends F {
					constructor(K, J, W, X, Y, ie, ne) {
						super(K, J, W, ie, ne), (this.m = s.$9Kb.bindTo(Y));
						const ee = X.getModel(K.targetUri);
						w.Event.debounce(ee.onDidChangeContent.bind(ee), () => {}, 350)(
							(_) => {
								!ee.isDisposed() &&
									!K.textModel0.isDisposed() &&
									this.m.set(K.hasChangedText);
							},
							void 0,
							this.b,
						);
					}
					dispose() {
						this.m.reset(), super.dispose();
					}
					async apply() {
						await super.k(!1);
					}
					async makeChanges() {}
					async makeProgressiveChanges() {}
					async renderChanges() {}
					hasFocus() {
						return this.g.widget.hasFocus();
					}
				};
				(e.$m1b = x),
					(e.$m1b = x =
						Ne([j(3, y.$QO), j(4, g.$6j), j(5, I.$kZ), j(6, P.$Li)], x));
				let H = class extends F {
					constructor(K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(K, J, W, Q, Z),
							(this.t = X),
							(this.u = ie),
							(this.v = ne),
							(this.w = ee),
							(this.x = _),
							(this.y = te),
							(this.m = h.$eY.register({
								description: "inline-modified-line",
								className: "inline-chat-inserted-range-linehighlight",
								isWholeLine: !0,
								overviewRuler: {
									position: a.OverviewRulerLane.Full,
									color: (0, C.$bk)(s.$vLb),
								},
								minimap: {
									position: a.MinimapPosition.Inline,
									color: (0, C.$bk)(s.$wLb),
								},
							})),
							(this.n = h.$eY.register({
								description: "inline-chat-inserted-range-linehighlight",
								className: "inline-chat-inserted-range",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							})),
							(this.s = 0),
							(this.C = new Map()),
							(this.o = s.$0Kb.bindTo(Y)),
							(this.p = s.$$Kb.bindTo(Y)),
							(this.q = this.f.createDecorationsCollection()),
							(this.r = this.b.add(new R.$j1b(this.f)));
					}
					dispose() {
						this.z(), super.dispose();
					}
					z() {
						this.o.reset(),
							this.p.reset(),
							this.g.widget.updateStatus(""),
							this.q.clear();
						for (const K of this.C.values()) K.remove();
					}
					async apply() {
						this.z(), this.s > 0 && this.f.pushUndoStop(), await super.k(!0);
					}
					cancel() {
						return this.z(), super.cancel();
					}
					async makeChanges(K, J, W) {
						return this.A(K, J, void 0, void 0, W);
					}
					async makeProgressiveChanges(K, J, W, X) {
						const Y = new p.$0N((ie) => {
							const ne = new Set();
							for (const te of ie)
								r.$rL.fromRange(te.range).forEach((Q) => ne.add(Q));
							const ee = this.q.getRanges().map(r.$rL.fromRange);
							for (const te of ee) te.forEach((Q) => ne.delete(Q));
							const _ = [];
							for (const te of ne)
								_.push({
									range: new u.$iL(te, 1, te, Number.MAX_VALUE),
									options: this.m,
								});
							this.q.append(_);
						});
						return this.A(K, J, W, Y, X);
					}
					async A(K, J, W, X, Y) {
						if ((Y && this.f.pushUndoStop(), this.s++, W)) {
							const ie = W.duration / 1e3;
							for (const ne of K) {
								const _ = (0, f.$SKb)(ne.text ?? "") / ie,
									te = (0, $.$aZb)(new t.$jgb(this.g.domNode), ne, _, W.token);
								await (0, $.$_Yb)(this.e.textModelN, te, X, J);
							}
						} else
							J.start(),
								this.e.textModelN.pushEditOperations(
									null,
									K,
									(ie) => (X?.report(ie), null),
								),
								J.stop();
					}
					performHunkAction(K, J) {
						const W = this.B(K);
						if (!W) {
							J === z.Accept ? this.c.fire() : J === z.Discard && this.d.fire();
							return;
						}
						J === z.Accept
							? W.acceptHunk()
							: J === z.Discard
								? W.discardHunk()
								: J === z.MoveNext
									? W.move(!0)
									: J === z.MovePrev
										? W.move(!1)
										: J === z.ToggleDiff && W.toggleDiff?.();
					}
					B(K) {
						let J;
						if ((K && (J = this.C.get(K)), !J && this.g.position)) {
							const W = this.g.position.lineNumber;
							let X = Number.MAX_SAFE_INTEGER;
							for (const Y of this.C.values()) {
								if (Y.hunk.getState() !== b.HunkState.Pending) continue;
								const ie = Y.hunk.getRangesN(),
									ne =
										W <= ie[0].startLineNumber
											? ie[0].startLineNumber - W
											: W - ie[0].endLineNumber;
								ne < X && ((X = ne), (J = Y));
							}
						}
						return (
							J ||
								(J = A.Iterable.first(
									A.Iterable.filter(
										this.C.values(),
										(W) => W.hunk.getState() === b.HunkState.Pending,
									),
								)),
							J
						);
					}
					async renderChanges() {
						this.q.clear();
						const K = () => {
							let J;
							if (
								(q(this.f, (W, X) => {
									const Y = new Set(this.C.keys());
									J = void 0;
									for (const ie of this.e.hunkData.getInfo()) {
										Y.delete(ie);
										const ne = ie.getRangesN();
										let ee = this.C.get(ie);
										if (ee)
											if (ie.getState() !== b.HunkState.Pending) ee.remove();
											else {
												const _ =
														this.g.position?.lineNumber ??
														this.f.getPosition().lineNumber,
													te = ne[0];
												(ee.position = te.getStartPosition().delta(-1)),
													(ee.distance =
														_ <= te.startLineNumber
															? te.startLineNumber - _
															: _ - te.endLineNumber);
											}
										else {
											const _ = [];
											for (let Le = 0; Le < ne.length; Le++)
												_.push(
													W.addDecoration(ne[Le], Le === 0 ? this.m : this.n),
												);
											const te = () => {
													ie.acceptChanges(), K();
												},
												Q = () => {
													ie.discardChanges(), K();
												},
												Z = this.e.textModel0.mightContainNonBasicASCII(),
												se = this.e.textModel0.mightContainRTL(),
												re = m.$2xb.fromEditor(this.f),
												le = ie.getRanges0()[0],
												oe = new m.$1xb(
													r.$rL
														.fromRangeInclusive(le)
														.mapToLineArray((Le) =>
															this.e.textModel0.tokenization.getLineTokens(Le),
														),
													[],
													Z,
													se,
												),
												ae = document.createElement("div");
											ae.className = "inline-chat-original-zone2";
											const pe = (0, m.$Zxb)(
													oe,
													re,
													[
														new n.$3sb(
															new u.$iL(
																le.startLineNumber,
																1,
																le.startLineNumber,
																1,
															),
															"",
															n.InlineDecorationType.Regular,
														),
													],
													ae,
												),
												$e = {
													afterLineNumber: -1,
													heightInLines: pe.heightInLines,
													domNode: ae,
													ordinal: 50002,
												},
												ye = () => {
													const Le = d.$uwb.capture(this.f);
													q(this.f, (Fe, Oe) => {
														if (((0, l.$vg)(ee), ee.diffViewZoneId))
															Oe.removeZone(ee.diffViewZoneId),
																ue?.updateExtraTop(0),
																(ee.diffViewZoneId = void 0);
														else {
															const [xe] = ie.getRangesN();
															($e.afterLineNumber = xe.startLineNumber - 1),
																(ee.diffViewZoneId = Oe.addZone($e)),
																ue?.updateExtraTop(pe.heightInLines);
														}
													}),
														this.p.set(typeof ee?.diffViewZoneId == "string"),
														Le.restore(this.f);
												},
												ue = (this.t, void 0);
											let fe;
											const me = [];
											if (this.t && ie.getState() === b.HunkState.Pending) {
												fe = new E.$Zc();
												const Le = this.x.createMenu(s.$lLb, this.y),
													Fe = () => {
														const xe = [],
															He = Le.getActions();
														for (const [, Ke] of He)
															for (const Je of Ke)
																if (Je instanceof B.$2X) {
																	let Te = Je.label;
																	Je.id === s.$gLb
																		? (Te = Je.checked
																				? "Hide Changes"
																				: "Show Changes")
																		: C.ThemeIcon.isThemeIcon(Je.item.icon) &&
																			(Te = `$(${Je.item.icon.id}) ${Te}`),
																		xe.push({
																			text: Te,
																			tooltip: Je.tooltip,
																			action: async () => Je.run(),
																		});
																}
														return xe;
													},
													Oe = (0, O.observableValue)(this, Fe());
												fe.add(Le.onDidChange(() => Oe.set(Fe(), void 0))),
													fe.add(Le),
													fe.add(
														this.r.createWidget(
															X,
															ne[0].startLineNumber - 1,
															Oe,
															me,
														),
													);
											}
											const ve = () => {
													q(this.f, (Le, Fe) => {
														(0, l.$vg)(ee);
														for (const Oe of ee.decorationIds)
															Le.removeDecoration(Oe);
														ee.diffViewZoneId &&
															Fe.removeZone(ee.diffViewZoneId),
															(ee.decorationIds = []),
															(ee.diffViewZoneId = void 0),
															ee.lensActionsViewZoneIds?.forEach(Fe.removeZone),
															(ee.lensActionsViewZoneIds = void 0);
													}),
														fe?.dispose(),
														ue?.dispose();
												},
												ge = (Le) => {
													const Fe = Array.from(this.C.keys()),
														Oe = Fe.indexOf(ie),
														xe = (Oe + (Le ? 1 : -1) + Fe.length) % Fe.length;
													if (xe !== Oe) {
														const He = this.C.get(Fe[xe]);
														this.g.updatePositionAndHeight(He?.position), K();
													}
												},
												be =
													this.g.position?.lineNumber ??
													this.f.getPosition().lineNumber,
												Ce =
													be <= ne[0].startLineNumber
														? ne[0].startLineNumber - be
														: be - ne[0].endLineNumber;
											(ee = {
												hunk: ie,
												decorationIds: _,
												diffViewZoneId: "",
												diffViewZone: $e,
												lensActionsViewZoneIds: me,
												distance: Ce,
												position: ne[0].getStartPosition().delta(-1),
												acceptHunk: te,
												discardHunk: Q,
												toggleDiff: ie.isInsertion() ? void 0 : ye,
												remove: ve,
												move: ge,
											}),
												this.C.set(ie, ee);
										}
										ie.getState() === b.HunkState.Pending &&
											(!J || ee.distance < J.distance) &&
											(J = ee);
									}
									for (const ie of Y) {
										const ne = this.C.get(ie);
										ne && (this.C.delete(ie), ne.remove());
									}
								}),
								J)
							) {
								this.g.updatePositionAndHeight(J.position);
								const W = this.w.getValue(
									s.InlineChatConfigKeys.AccessibleDiffView,
								);
								(W === "on" ||
									(W === "auto" && this.v.isScreenReaderOptimized())) &&
									this.g.widget.showAccessibleHunk(this.e, J.hunk),
									this.o.set(!!J.toggleDiff);
							} else if (this.C.size > 0) {
								let W = !1;
								for (const X of this.e.hunkData.getInfo())
									if (X.getState() === b.HunkState.Accepted) {
										W = !0;
										break;
									}
								W ? this.c.fire() : this.d.fire();
							}
							return J;
						};
						return K()?.position;
					}
					hasFocus() {
						return this.g.widget.hasFocus();
					}
					getWholeRangeDecoration() {
						return [];
					}
				};
				(e.$n1b = H),
					(e.$n1b = H =
						Ne(
							[
								j(4, g.$6j),
								j(5, c.$Cxb),
								j(6, v.$XK),
								j(7, S.$gj),
								j(8, B.$YX),
								j(9, g.$6j),
								j(10, I.$kZ),
								j(11, P.$Li),
							],
							H,
						));
				function q(G, K) {
					G.changeDecorations((J) => {
						G.changeViewZones((W) => {
							K(J, W);
						});
					});
				}
				let V = class {
					constructor(K, J, W) {
						if (
							((this.e = K),
							(this.f = J),
							(this.g = W),
							(this.allowEditorOverflow = !1),
							(this.a = "inline-chat-diff-overlay-" + (0, D.$9g)()),
							(this.b = document.createElement("div")),
							(this.c = new E.$Zc()),
							(this.d = 0),
							this.b.classList.add("inline-chat-diff-overlay"),
							J.getState() === b.HunkState.Pending)
						) {
							const X = this.c.add(
								this.g.createInstance(M.$LLb, this.b, s.$lLb, {
									menuOptions: { arg: J },
									telemetrySource: "inlineChat-changesZone",
									buttonConfigProvider: (Y, ie) => ({
										isSecondary: ie > 0,
										showIcon: !0,
										showLabel: !1,
									}),
								}),
							);
							this.c.add(X.onDidChange(() => this.e.layoutOverlayWidget(this)));
						}
						this.e.addOverlayWidget(this),
							this.c.add(
								w.Event.any(
									this.e.onDidLayoutChange,
									this.e.onDidScrollChange,
								)(() => this.e.layoutOverlayWidget(this)),
							),
							queueMicrotask(() => this.e.layoutOverlayWidget(this));
					}
					dispose() {
						this.e.removeOverlayWidget(this), this.c.dispose();
					}
					getId() {
						return this.a;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						const K = this.f.getRangesN()[0].startLineNumber,
							J = this.e.getLayoutInfo(),
							W = this.e.getTopForLineNumber(K) - this.e.getScrollTop(),
							X = J.contentLeft + J.contentWidth - J.verticalScrollbarWidth,
							Y = this.e.getOption(N.EditorOption.lineHeight) * this.d,
							ie = (0, t.$vgb)(this.b);
						return { preference: { top: W - Y, left: X - ie } };
					}
					updateExtraTop(K) {
						this.d !== K && ((this.d = K), this.e.layoutOverlayWidget(this));
					}
				};
				V = Ne([j(2, P.$Li)], V);
			},
		),
		define(
			de[3771],
			he([
				1, 0, 7, 3, 23, 5, 706, 556, 206, 67, 61, 70, 49, 11, 39, 40, 92, 8,
				801, 284, 3496, 46, 375, 254, 328, 394, 504, 714, 182, 42, 10, 35, 173,
				32, 1253, 130, 91, 309, 31, 4, 6, 125,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cFc = e.$bFc = e.$aFc = e.$_Ec = e.$$Ec = e.$0Ec = void 0),
					(e.$9Ec = H),
					(t = mt(t));
				function H() {
					return {
						isSimpleWidget: !1,
						contributions:
							l.EditorExtensionsRegistry.getSomeEditorContributions([
								S.$_Xb.ID,
								I.$aYb,
								y.$2Mb.ID,
								v.$KDb.ID,
								$.$aDb.ID,
								T.$wYb.ID,
							]),
					};
				}
				class q extends i.$1c {
					constructor(ee, _) {
						super(), _.body.classList.remove("left", "right", "full");
						const te =
							ee.hiddenCells.length === 1
								? (0, z.localize)(7975, null, ee.hiddenCells.length)
								: (0, z.localize)(7976, null, ee.hiddenCells.length);
						(_.placeholder.innerText = te),
							this.D(
								t.$0fb(_.placeholder, "dblclick", (Q) => {
									Q.button === 0 && (Q.preventDefault(), ee.showHiddenCells());
								}),
							),
							this.D(_.marginOverlay.onAction(() => ee.showHiddenCells())),
							_.marginOverlay.show();
					}
				}
				e.$0Ec = q;
				let V = class extends i.$1c {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(),
							(this.cell = ee),
							(this.propertyHeaderContainer = _),
							(this.notebookEditor = te),
							(this.accessor = Q),
							(this.m = Z),
							(this.n = se),
							(this.q = re),
							(this.r = le),
							(this.s = oe),
							(this.t = ae),
							(this.u = pe),
							(this.w = $e),
							(this.y = ye);
					}
					buildHeader() {
						const ee = this.accessor.checkIfModified(this.cell);
						(this.a = t.$fhb(
							this.propertyHeaderContainer,
							t.$(".property-folding-indicator"),
						)),
							this.a.classList.add(this.accessor.prefix),
							this.z();
						const _ = t.$fhb(
							this.propertyHeaderContainer,
							t.$("div.property-status"),
						);
						(this.b = t.$fhb(_, t.$("span"))),
							(this.c = t.$fhb(_, t.$("span.property-description"))),
							ee
								? ((this.b.textContent = this.accessor.changedLabel),
									(this.b.style.fontWeight = "bold"),
									ee.reason && (this.c.textContent = ee.reason),
									this.propertyHeaderContainer.classList.add("modified"))
								: ((this.b.textContent = this.accessor.unChangedLabel),
									(this.c.textContent = ""),
									this.propertyHeaderContainer.classList.remove("modified"));
						const te = t.$fhb(
							this.propertyHeaderContainer,
							t.$("div.property-toolbar"),
						);
						(this.f = new M.$Syb(
							te,
							{
								actionViewItemProvider: (re, le) => {
									if (re instanceof c.$2X)
										return new f.$M3b(
											re,
											{ hoverDelegate: le.hoverDelegate },
											this.n,
											this.r,
											this.t,
											this.u,
											this.m,
											this.y,
										);
								},
							},
							this.s,
							this.t,
							this.m,
							this.n,
							this.q,
							this.w,
						)),
							this.D(this.f),
							(this.f.context = { cell: this.cell });
						const Q = this.t.createScoped(te);
						this.D(Q),
							d.$CEc.bindTo(Q).set(!!ee),
							(this.j = d.$DEc.bindTo(Q)),
							(this.g = this.s.createMenu(this.accessor.menuId, Q)),
							this.D(this.g);
						const se = [];
						(0, p.$Kyb)(this.g, { shouldForwardArgs: !0 }, se),
							this.f.setActions(se),
							this.D(
								this.g.onDidChange(() => {
									const re = [];
									(0, p.$Kyb)(this.g, { shouldForwardArgs: !0 }, re),
										this.f.setActions(re);
								}),
							),
							this.D(
								this.notebookEditor.onMouseUp((re) => {
									if (!re.event.target) return;
									const le = re.event.target;
									if (
										(le === this.propertyHeaderContainer ||
											le === this.a ||
											this.a.contains(le) ||
											le === _ ||
											_.contains(le)) &&
										re.target === this.cell
									) {
										const ae = this.accessor.getFoldingState(this.cell);
										this.accessor.updateFoldingState(
											this.cell,
											ae === C.PropertyFoldingState.Expanded
												? C.PropertyFoldingState.Collapsed
												: C.PropertyFoldingState.Expanded,
										),
											this.z(),
											this.accessor.updateInfoRendering(this.cell.renderOutput);
									}
								}),
							),
							this.z(),
							this.accessor.updateInfoRendering(this.cell.renderOutput);
					}
					refresh() {
						const ee = this.accessor.checkIfModified(this.cell);
						if (ee) {
							(this.b.textContent = this.accessor.changedLabel),
								(this.b.style.fontWeight = "bold"),
								ee.reason && (this.c.textContent = ee.reason),
								this.propertyHeaderContainer.classList.add("modified");
							const _ = [];
							(0, p.$Kyb)(this.g, void 0, _), this.f.setActions(_);
						} else
							(this.b.textContent = this.accessor.unChangedLabel),
								(this.b.style.fontWeight = "normal"),
								(this.c.textContent = ""),
								this.propertyHeaderContainer.classList.remove("modified"),
								this.f.setActions([]);
					}
					z() {
						this.accessor.getFoldingState(this.cell) ===
						C.PropertyFoldingState.Collapsed
							? (t.$hhb(this.a, (0, P.$Tib)(b.$kOb)), this.j?.set(!1))
							: (t.$hhb(this.a, (0, P.$Tib)(b.$lOb)), this.j?.set(!0));
					}
				};
				V = Ne(
					[
						j(4, h.$Xxb),
						j(5, n.$uZ),
						j(6, U.$ek),
						j(7, g.$4N),
						j(8, c.$YX),
						j(9, o.$6j),
						j(10, D.$iP),
						j(11, N.$km),
						j(12, O.$XK),
					],
					V,
				);
				class G extends i.$1c {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe) {
						super(),
							(this.notebookEditor = ee),
							(this.cell = _),
							(this.templateData = te),
							(this.style = Q),
							(this.U = Z),
							(this.W = se),
							(this.X = re),
							(this.Y = le),
							(this.Z = oe),
							(this.ab = ae),
							(this.bb = pe),
							(this.cb = $e),
							(this.db = ye),
							(this.eb = ue),
							(this.fb = fe),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$Zc())),
							(this.c = !1),
							(this.f = !1),
							(this.S = !1),
							(this.t = this.D(new i.$Zc())),
							(this.N = this.D(new i.$Zc())),
							this.D(
								_.onDidLayoutChange((me) => {
									this.layout(me);
								}),
							),
							this.D(_.onDidLayoutChange((me) => this.updateBorders())),
							this.init(),
							this.buildBody(),
							this.D(
								_.onDidStateChange(() => {
									this.updateOutputRendering(this.cell.renderOutput);
								}),
							);
					}
					buildBody() {
						const ee = this.templateData.body;
						switch (
							((this.Q = this.templateData.diffEditorContainer),
							ee.classList.remove("left", "right", "full"),
							this.style)
						) {
							case "left":
								ee.classList.add("left");
								break;
							case "right":
								ee.classList.add("right");
								break;
							default:
								ee.classList.add("full");
								break;
						}
						this.styleContainer(this.Q),
							this.updateSourceEditor(),
							this.cell.modified &&
								this.D(
									this.cell.modified.textModel.onDidChangeContent(() =>
										this.m.refresh(),
									),
								),
							(this.c = this.eb.getValue("notebook.diff.ignoreMetadata")),
							this.c ? this._disposeMetadata() : this._buildMetadata(),
							(this.f =
								this.eb.getValue("notebook.diff.ignoreOutputs") ||
								!!this.notebookEditor.textModel?.transientOptions
									.transientOutputs),
							this.f ? this._disposeOutput() : this._buildOutput(),
							this.D(
								this.eb.onDidChangeConfiguration((_) => {
									let te = !1,
										Q = !1;
									if (_.affectsConfiguration("notebook.diff.ignoreMetadata")) {
										const Z = this.eb.getValue("notebook.diff.ignoreMetadata");
										Z !== void 0 &&
											this.c !== Z &&
											((this.c = Z),
											this.a.clear(),
											this.eb.getValue("notebook.diff.ignoreMetadata")
												? this._disposeMetadata()
												: ((this.cell.metadataStatusHeight = 25),
													this._buildMetadata(),
													this.updateMetadataRendering(),
													(te = !0)));
									}
									if (_.affectsConfiguration("notebook.diff.ignoreOutputs")) {
										const Z = this.eb.getValue("notebook.diff.ignoreOutputs");
										Z !== void 0 &&
											this.f !==
												(Z ||
													this.notebookEditor.textModel?.transientOptions
														.transientOutputs) &&
											((this.f =
												Z ||
												!!this.notebookEditor.textModel?.transientOptions
													.transientOutputs),
											this.b.clear(),
											this.f
												? this._disposeOutput()
												: ((this.cell.outputStatusHeight = 25),
													this._buildOutput(),
													(Q = !0)));
									}
									(te || Q) &&
										this.layout({ metadataHeight: te, outputTotalHeight: Q });
								}),
							);
					}
					updateMetadataRendering() {
						this.cell.metadataFoldingState === C.PropertyFoldingState.Expanded
							? ((this.r.style.display = "block"),
								!this.s || !this.u
									? ((this.s = t.$fhb(
											this.r,
											t.$(".metadata-editor-container"),
										)),
										this.mb())
									: (this.cell.metadataHeight = this.u.getContentHeight()))
							: ((this.r.style.display = "none"),
								(this.cell.metadataHeight = 0));
					}
					updateOutputRendering(ee) {
						this.cell.outputFoldingState === C.PropertyFoldingState.Expanded
							? ((this.z.style.display = "block"),
								ee
									? (this.jb(),
										this._buildOutputRendererContainer(),
										this._showOutputsRenderer(),
										this.ib())
									: (this._hideOutputsRenderer(), this.gb(), this.hb()))
							: ((this.z.style.display = "none"),
								this.jb(),
								this._hideOutputsRenderer(),
								this.kb());
					}
					gb() {
						this.C ||
							((this.C = t.$fhb(this.z, t.$(".output-editor-container"))),
							this.nb());
					}
					hb() {
						this.C &&
							((this.C.style.display = "block"),
							(this.cell.rawOutputHeight = this.O.getContentHeight()));
					}
					ib() {
						this.cell.layoutChange();
					}
					jb() {
						this.C &&
							((this.C.style.display = "none"),
							(this.cell.rawOutputHeight = 0));
					}
					kb() {
						this.cell.layoutChange();
					}
					lb(ee, _) {
						const te = {};
						try {
							const Q = JSON.parse(_),
								Z = new Set([...Object.keys(Q)]);
							for (const re of Z)
								switch (re) {
									case "inputCollapsed":
									case "outputCollapsed":
										typeof Q[re] == "boolean"
											? (te[re] = Q[re])
											: (te[re] = ee[re]);
										break;
									default:
										te[re] = Q[re];
										break;
								}
							const se = this.notebookEditor.textModel.cells.indexOf(
								this.cell.modified.textModel,
							);
							if (se < 0) return;
							this.notebookEditor.textModel.applyEdits(
								[
									{
										editType: a.CellEditType.Metadata,
										index: se,
										metadata: te,
									},
								],
								!0,
								void 0,
								() => {},
								void 0,
								!0,
							);
						} catch {}
					}
					async mb() {
						if ((this.t.clear(), this.cell instanceof C.$REc)) {
							(this.u = this.U.createInstance(
								B.$3yb,
								this.s,
								{
									...A.$xEc,
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
									readOnly: !1,
									originalEditable: !1,
									ignoreTrimWhitespace: !1,
									automaticLayout: !1,
									dimension: {
										height: this.cell.layoutInfo.metadataHeight,
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!0,
											!0,
										),
									},
								},
								{ originalEditor: H(), modifiedEditor: H() },
							)),
								this.layout({ metadataHeight: !0 }),
								this.t.add(this.u),
								this.s?.classList.add("diff");
							const ee = await this.Y.createModelReference(
									a.CellUri.generateCellPropertyUri(
										this.cell.originalDocument.uri,
										this.cell.original.handle,
										w.Schemas.vscodeNotebookCellMetadata,
									),
								),
								_ = await this.Y.createModelReference(
									a.CellUri.generateCellPropertyUri(
										this.cell.modifiedDocument.uri,
										this.cell.modified.handle,
										w.Schemas.vscodeNotebookCellMetadata,
									),
								);
							this.u.setModel({
								original: ee.object.textEditorModel,
								modified: _.object.textEditorModel,
							}),
								this.t.add(ee),
								this.t.add(_),
								(this.cell.metadataHeight = this.u.getContentHeight()),
								this.t.add(
									this.u.onDidContentSizeChange((Q) => {
										Q.contentHeightChanged &&
											this.cell.metadataFoldingState ===
												C.PropertyFoldingState.Expanded &&
											(this.cell.metadataHeight = Q.contentHeight);
									}),
								);
							let te = !1;
							this.t.add(
								_.object.textEditorModel.onDidChangeContent(() => {
									te = !0;
									const Q = _.object.textEditorModel.getValue();
									this.lb(this.cell.modified.metadata, Q),
										this.q.refresh(),
										(te = !1);
								}),
							),
								this.t.add(
									this.cell.modified.textModel.onDidChangeMetadata(() => {
										if (te) return;
										const Q = (0, C.$UEc)(
											this.notebookEditor.textModel,
											this.cell.modified?.metadata || {},
											this.cell.modified?.language,
										);
										_.object.textEditorModel.setValue(Q);
									}),
								);
							return;
						} else {
							(this.u = this.U.createInstance(
								m.$rwb,
								this.s,
								{
									...A.$wEc,
									dimension: {
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!0,
										),
										height: this.cell.layoutInfo.metadataHeight,
									},
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
									readOnly: !1,
								},
								{},
							)),
								this.layout({ metadataHeight: !0 }),
								this.t.add(this.u);
							const ee = this.W.createById("jsonc"),
								_ = (0, C.$UEc)(
									this.notebookEditor.textModel,
									this.cell.type === "insert"
										? this.cell.modified.metadata || {}
										: this.cell.original.metadata || {},
								),
								te =
									this.cell.type === "insert"
										? this.cell.modified.uri
										: this.cell.original.uri,
								Q =
									this.cell.type === "insert"
										? this.cell.modified.handle
										: this.cell.original.handle,
								Z = a.CellUri.generateCellPropertyUri(
									te,
									Q,
									w.Schemas.vscodeNotebookCellMetadata,
								),
								se = this.X.createModel(_, ee, Z, !1);
							this.u.setModel(se),
								this.t.add(se),
								(this.cell.metadataHeight = this.u.getContentHeight()),
								this.t.add(
									this.u.onDidContentSizeChange((re) => {
										re.contentHeightChanged &&
											this.cell.metadataFoldingState ===
												C.PropertyFoldingState.Expanded &&
											(this.cell.metadataHeight = re.contentHeight);
									}),
								);
						}
					}
					nb() {
						if (
							(this.N.clear(),
							(this.cell.type === "modified" ||
								this.cell.type === "unchanged") &&
								!this.notebookEditor.textModel.transientOptions
									.transientOutputs)
						) {
							const Q = (0, C.$WEc)(this.cell.original?.outputs || []),
								Z = (0, C.$WEc)(this.cell.modified?.outputs || []);
							if (Q !== Z) {
								const se = this.W.createById("json"),
									re = this.X.createModel(Q, se, void 0, !0),
									le = this.X.createModel(Z, se, void 0, !0);
								this.N.add(re), this.N.add(le);
								const oe =
										this.notebookEditor.getLayoutInfo().fontInfo.lineHeight ||
										17,
									ae = Math.max(re.getLineCount(), le.getLineCount());
								(this.O = this.U.createInstance(
									B.$3yb,
									this.C,
									{
										...A.$xEc,
										overflowWidgetsDomNode:
											this.notebookEditor.getOverflowContainerDomNode(),
										readOnly: !0,
										ignoreTrimWhitespace: !1,
										automaticLayout: !1,
										dimension: {
											height: Math.min(
												C.$NEc,
												this.cell.layoutInfo.rawOutputHeight || oe * ae,
											),
											width: this.cell.getComputedCellContainerWidth(
												this.notebookEditor.getLayoutInfo(),
												!1,
												!0,
											),
										},
										accessibilityVerbose:
											this.eb.getValue(
												R.AccessibilityVerbositySettingId.DiffEditor,
											) ?? !1,
									},
									{ originalEditor: H(), modifiedEditor: H() },
								)),
									this.N.add(this.O),
									this.C?.classList.add("diff"),
									this.O.setModel({ original: re, modified: le }),
									this.O.restoreViewState(this.cell.getOutputEditorViewState()),
									(this.cell.rawOutputHeight = this.O.getContentHeight()),
									this.N.add(
										this.O.onDidContentSizeChange((pe) => {
											pe.contentHeightChanged &&
												this.cell.outputFoldingState ===
													C.PropertyFoldingState.Expanded &&
												(this.cell.rawOutputHeight = pe.contentHeight);
										}),
									),
									this.N.add(
										this.cell.modified.textModel.onDidChangeOutputs(() => {
											const pe = (0, C.$WEc)(this.cell.modified?.outputs || []);
											le.setValue(pe), this.y.refresh();
										}),
									);
								return;
							}
						}
						(this.O = this.U.createInstance(
							m.$rwb,
							this.C,
							{
								...A.$wEc,
								dimension: {
									width: Math.min(
										C.$NEc,
										this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											this.cell.type === "unchanged" ||
												this.cell.type === "modified",
										) - 32,
									),
									height: this.cell.layoutInfo.rawOutputHeight,
								},
								overflowWidgetsDomNode:
									this.notebookEditor.getOverflowContainerDomNode(),
							},
							{},
						)),
							this.N.add(this.O);
						const ee = this.W.createById("json"),
							_ = (0, C.$WEc)(
								this.notebookEditor.textModel.transientOptions.transientOutputs
									? []
									: this.cell.type === "insert"
										? this.cell.modified.outputs || []
										: this.cell.original.outputs || [],
							),
							te = this.X.createModel(_, ee, void 0, !0);
						this.N.add(te),
							this.O.setModel(te),
							this.O.restoreViewState(this.cell.getOutputEditorViewState()),
							(this.cell.rawOutputHeight = this.O.getContentHeight()),
							this.N.add(
								this.O.onDidContentSizeChange((Q) => {
									Q.contentHeightChanged &&
										this.cell.outputFoldingState ===
											C.PropertyFoldingState.Expanded &&
										(this.cell.rawOutputHeight = Q.contentHeight);
								}),
							);
					}
					ob() {
						this.notebookEditor.layoutNotebookCell(
							this.cell,
							this.cell.layoutInfo.totalHeight,
						);
					}
					updateBorders() {
						(this.templateData.leftBorder.style.height = `${this.cell.layoutInfo.totalHeight - 32}px`),
							(this.templateData.rightBorder.style.height = `${this.cell.layoutInfo.totalHeight - 32}px`),
							(this.templateData.bottomBorder.style.top = `${this.cell.layoutInfo.totalHeight - 32}px`);
					}
					dispose() {
						this.O &&
							this.cell.saveOutputEditorViewState(this.O.saveViewState()),
							this.u &&
								this.cell.saveMetadataEditorViewState(this.u.saveViewState()),
							this.t.dispose(),
							this.N.dispose(),
							(this.S = !0),
							super.dispose();
					}
				}
				class K extends G {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe) {
						super(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe),
							(this.cell = _),
							(this.templateData = te),
							this.updateBorders();
					}
					init() {
						this.R = this.templateData.diagonalFill;
					}
					buildBody() {
						const ee = this.templateData.body;
						switch (
							((this.Q = this.templateData.diffEditorContainer),
							ee.classList.remove("left", "right", "full"),
							this.style)
						) {
							case "left":
								ee.classList.add("left");
								break;
							case "right":
								ee.classList.add("right");
								break;
							default:
								ee.classList.add("full");
								break;
						}
						this.styleContainer(this.Q),
							this.updateSourceEditor(),
							this.eb.getValue("notebook.diff.ignoreMetadata")
								? this._disposeMetadata()
								: this._buildMetadata(),
							this.eb.getValue("notebook.diff.ignoreOutputs") ||
							this.notebookEditor.textModel?.transientOptions.transientOutputs
								? this._disposeOutput()
								: this._buildOutput(),
							this.D(
								this.eb.onDidChangeConfiguration((_) => {
									let te = !1,
										Q = !1;
									_.affectsConfiguration("notebook.diff.ignoreMetadata") &&
										(this.a.clear(),
										this.eb.getValue("notebook.diff.ignoreMetadata")
											? this._disposeMetadata()
											: ((this.cell.metadataStatusHeight = 25),
												this._buildMetadata(),
												this.updateMetadataRendering(),
												(te = !0))),
										_.affectsConfiguration("notebook.diff.ignoreOutputs") &&
											(this.b.clear(),
											this.eb.getValue("notebook.diff.ignoreOutputs") ||
											this.notebookEditor.textModel?.transientOptions
												.transientOutputs
												? this._disposeOutput()
												: ((this.cell.outputStatusHeight = 25),
													this._buildOutput(),
													(Q = !0))),
										(te || Q) &&
											this.layout({ metadataHeight: te, outputTotalHeight: Q });
								}),
							);
					}
					updateSourceEditor() {
						(this.g = this.templateData.cellHeaderContainer),
							(this.g.style.display = "flex"),
							(this.g.innerText = ""),
							(this.j = this.templateData.editorContainer),
							this.j.classList.add("diff");
						const ee = () => {
							if (
								this.cell.cellFoldingState === C.PropertyFoldingState.Collapsed
							) {
								(this.j.style.display = "none"), (this.cell.editorHeight = 0);
								return;
							}
							const _ =
									this.nestedCellViewModel.textModel.textBuffer.getLineCount(),
								te =
									this.notebookEditor.getLayoutInfo().fontInfo.lineHeight || 17,
								Q = _ * te + A.$vEc.top + A.$vEc.bottom;
							if (
								((this.j.style.height = `${Q}px`),
								(this.j.style.display = "block"),
								this.pb)
							) {
								const Z = this.pb.getContentHeight();
								Z >= 0 && (this.cell.editorHeight = Z);
								return;
							}
							(this.pb = this.templateData.sourceEditor),
								this.pb.layout({
									width:
										(this.notebookEditor.getLayoutInfo().width - 2 * d.$yEc) /
											2 -
										18,
									height: Q,
								}),
								this.pb.updateOptions({ readOnly: this.readonly }),
								(this.cell.editorHeight = Q),
								this.D(
									this.pb.onDidContentSizeChange((Z) => {
										this.cell.cellFoldingState ===
											C.PropertyFoldingState.Expanded &&
											Z.contentHeightChanged &&
											this.cell.layoutInfo.editorHeight !== Z.contentHeight &&
											(this.cell.editorHeight = Z.contentHeight);
									}),
								),
								this.rb(this.nestedCellViewModel);
						};
						(this.m = this.D(
							this.U.createInstance(V, this.cell, this.g, this.notebookEditor, {
								updateInfoRendering: () => ee(),
								checkIfModified: (_) => ({ reason: void 0 }),
								getFoldingState: (_) => _.cellFoldingState,
								updateFoldingState: (_, te) => (_.cellFoldingState = te),
								unChangedLabel: "Input",
								changedLabel: "Input",
								prefix: "input",
								menuId: c.$XX.NotebookDiffCellInputTitle,
							}),
						)),
							this.m.buildHeader(),
							ee(),
							this.rb(this.nestedCellViewModel);
					}
					qb() {
						return (
							this.cell.layoutInfo.cellStatusHeight +
							this.cell.layoutInfo.editorHeight +
							this.cell.layoutInfo.editorMargin +
							this.cell.layoutInfo.metadataStatusHeight +
							this.cell.layoutInfo.metadataHeight +
							this.cell.layoutInfo.outputTotalHeight +
							this.cell.layoutInfo.outputStatusHeight
						);
					}
					async rb(ee) {
						const _ = await this.Y.createModelReference(ee.uri);
						if (this.S) return;
						const te = _.object.textEditorModel;
						this.D(_), this.pb.setModel(te);
						const Q = this.cell.getSourceEditorViewState();
						Q && this.pb.restoreViewState(Q);
						const Z = this.pb.getContentHeight();
						this.cell.editorHeight = Z;
						const se = `${this.qb()}px`;
						this.R.style.height !== se && (this.R.style.height = se);
					}
					_disposeMetadata() {
						(this.cell.metadataStatusHeight = 0),
							(this.cell.metadataHeight = 0),
							(this.templateData.cellHeaderContainer.style.display = "none"),
							(this.templateData.metadataHeaderContainer.style.display =
								"none"),
							(this.templateData.metadataInfoContainer.style.display = "none"),
							(this.u = void 0);
					}
					_buildMetadata() {
						(this.n = this.templateData.metadataHeaderContainer),
							(this.r = this.templateData.metadataInfoContainer),
							(this.n.style.display = "flex"),
							(this.r.style.display = "block"),
							(this.n.innerText = ""),
							(this.r.innerText = ""),
							(this.q = this.U.createInstance(
								V,
								this.cell,
								this.n,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateMetadataRendering.bind(this),
									checkIfModified: (ee) => ee.checkMetadataIfModified(),
									getFoldingState: (ee) => ee.metadataFoldingState,
									updateFoldingState: (ee, _) => {
										ee.metadataFoldingState = _;
									},
									unChangedLabel: "Metadata",
									changedLabel: "Metadata changed",
									prefix: "metadata",
									menuId: c.$XX.NotebookDiffCellMetadataTitle,
								},
							)),
							this.a.add(this.q),
							this.q.buildHeader();
					}
					_buildOutput() {
						(this.templateData.outputHeaderContainer.style.display = "flex"),
							(this.templateData.outputInfoContainer.style.display = "block"),
							(this.w = this.templateData.outputHeaderContainer),
							(this.z = this.templateData.outputInfoContainer),
							(this.w.innerText = ""),
							(this.z.innerText = ""),
							(this.y = this.U.createInstance(
								V,
								this.cell,
								this.w,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateOutputRendering.bind(this),
									checkIfModified: (ee) => ee.checkIfOutputsModified(),
									getFoldingState: (ee) => ee.outputFoldingState,
									updateFoldingState: (ee, _) => {
										ee.outputFoldingState = _;
									},
									unChangedLabel: "Outputs",
									changedLabel: "Outputs changed",
									prefix: "output",
									menuId: c.$XX.NotebookDiffCellOutputsTitle,
								},
							)),
							this.b.add(this.y),
							this.y.buildHeader();
					}
					_disposeOutput() {
						this.jb(),
							this._hideOutputsRenderer(),
							this.kb(),
							(this.cell.rawOutputHeight = 0),
							(this.cell.outputStatusHeight = 0),
							(this.templateData.outputHeaderContainer.style.display = "none"),
							(this.templateData.outputInfoContainer.style.display = "none"),
							(this.F = void 0);
					}
				}
				let J = class extends K {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(ee, _, te, "left", re, Q, Z, se, le, oe, ae, pe, $e, ye, ue);
					}
					get nestedCellViewModel() {
						return this.cell.original;
					}
					get readonly() {
						return !0;
					}
					styleContainer(ee) {
						ee.classList.remove("inserted"), ee.classList.add("removed");
					}
					layout(ee) {
						t.$hgb(t.getWindow(this.Q), () => {
							(ee.editorHeight || ee.outerWidth) &&
								this.pb &&
								((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
								this.pb.layout({
									width: this.cell.getComputedCellContainerWidth(
										this.notebookEditor.getLayoutInfo(),
										!1,
										!1,
									),
									height: this.cell.layoutInfo.editorHeight,
								})),
								ee.outerWidth &&
									this.pb &&
									((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
									this.pb.layout()),
								(ee.metadataHeight || ee.outerWidth) &&
									this.u?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!1,
										),
										height: this.cell.layoutInfo.metadataHeight,
									}),
								(ee.outputTotalHeight || ee.outerWidth) &&
									this.O?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!1,
										),
										height: this.cell.layoutInfo.outputTotalHeight,
									}),
								this.R && (this.R.style.height = `${this.qb()}px`),
								this.ob();
						});
					}
					_buildOutputRendererContainer() {
						if (!this.F) {
							(this.F = t.$fhb(this.z, t.$(".output-view-container"))),
								(this.J = t.$fhb(this.F, t.$(".output-empty-view")));
							const ee = t.$fhb(this.J, t.$("span"));
							(ee.innerText = "No outputs to render"),
								this.cell.original.outputs.length === 0
									? (this.J.style.display = "block")
									: (this.J.style.display = "none"),
								this.cell.layoutChange(),
								(this.L = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.original,
									d.DiffSide.Original,
									this.F,
								)),
								this.D(this.L),
								this.L.render();
							const _ = this.notebookEditor.onDidDynamicOutputRendered((te) => {
								te.cell.uri.toString() === this.cell.original.uri.toString() &&
									(this.notebookEditor.deltaCellOutputContainerClassNames(
										d.DiffSide.Original,
										this.cell.original.id,
										["nb-cellDeleted"],
										[],
									),
									_.dispose());
							});
							this.D(_);
						}
						this.F.style.display = "block";
					}
					_decorate() {
						this.notebookEditor.deltaCellOutputContainerClassNames(
							d.DiffSide.Original,
							this.cell.original.id,
							["nb-cellDeleted"],
							[],
						);
					}
					_showOutputsRenderer() {
						this.F &&
							((this.F.style.display = "block"),
							this.L?.showOutputs(),
							this._decorate());
					}
					_hideOutputsRenderer() {
						this.F && ((this.F.style.display = "none"), this.L?.hideOutputs());
					}
					dispose() {
						this.pb &&
							this.cell.saveSpirceEditorViewState(this.pb.saveViewState()),
							super.dispose();
					}
				};
				(e.$$Ec = J),
					(e.$$Ec = J =
						Ne(
							[
								j(3, u.$nM),
								j(4, r.$QO),
								j(5, k.$MO),
								j(6, E.$Li),
								j(7, h.$Xxb),
								j(8, n.$uZ),
								j(9, g.$4N),
								j(10, c.$YX),
								j(11, o.$6j),
								j(12, L.$gj),
								j(13, x.$XO),
							],
							J,
						));
				let W = class extends K {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(ee, _, te, "right", Q, Z, se, re, le, oe, ae, pe, $e, ye, ue);
					}
					get nestedCellViewModel() {
						return this.cell.modified;
					}
					get readonly() {
						return !1;
					}
					styleContainer(ee) {
						ee.classList.remove("removed"), ee.classList.add("inserted");
					}
					_buildOutputRendererContainer() {
						if (!this.F) {
							(this.F = t.$fhb(this.z, t.$(".output-view-container"))),
								(this.J = t.$fhb(this.F, t.$(".output-empty-view"))),
								(this.J.innerText = "No outputs to render"),
								this.cell.modified.outputs.length === 0
									? (this.J.style.display = "block")
									: (this.J.style.display = "none"),
								this.cell.layoutChange(),
								(this.M = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.modified,
									d.DiffSide.Modified,
									this.F,
								)),
								this.D(this.M),
								this.M.render();
							const ee = this.notebookEditor.onDidDynamicOutputRendered((_) => {
								_.cell.uri.toString() === this.cell.modified.uri.toString() &&
									(this.notebookEditor.deltaCellOutputContainerClassNames(
										d.DiffSide.Modified,
										this.cell.modified.id,
										["nb-cellAdded"],
										[],
									),
									ee.dispose());
							});
							this.D(ee);
						}
						this.F.style.display = "block";
					}
					_decorate() {
						this.notebookEditor.deltaCellOutputContainerClassNames(
							d.DiffSide.Modified,
							this.cell.modified.id,
							["nb-cellAdded"],
							[],
						);
					}
					_showOutputsRenderer() {
						this.F &&
							((this.F.style.display = "block"),
							this.M?.showOutputs(),
							this._decorate());
					}
					_hideOutputsRenderer() {
						this.F && ((this.F.style.display = "none"), this.M?.hideOutputs());
					}
					layout(ee) {
						t.$hgb(t.getWindow(this.Q), () => {
							(ee.editorHeight || ee.outerWidth) &&
								this.pb &&
								((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
								this.pb.layout({
									width: this.cell.getComputedCellContainerWidth(
										this.notebookEditor.getLayoutInfo(),
										!1,
										!1,
									),
									height: this.cell.layoutInfo.editorHeight,
								})),
								ee.outerWidth &&
									this.pb &&
									((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
									this.pb.layout()),
								(ee.metadataHeight || ee.outerWidth) &&
									this.u?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!0,
										),
										height: this.cell.layoutInfo.metadataHeight,
									}),
								(ee.outputTotalHeight || ee.outerWidth) &&
									this.O?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!1,
										),
										height: this.cell.layoutInfo.outputTotalHeight,
									}),
								this.ob(),
								this.R && (this.R.style.height = `${this.qb()}px`);
						});
					}
					dispose() {
						this.pb &&
							this.cell.saveSpirceEditorViewState(this.pb.saveViewState()),
							super.dispose();
					}
				};
				(e.$_Ec = W),
					(e.$_Ec = W =
						Ne(
							[
								j(3, E.$Li),
								j(4, u.$nM),
								j(5, r.$QO),
								j(6, k.$MO),
								j(7, h.$Xxb),
								j(8, n.$uZ),
								j(9, g.$4N),
								j(10, c.$YX),
								j(11, o.$6j),
								j(12, L.$gj),
								j(13, x.$XO),
							],
							W,
						));
				let X = class extends G {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(ee, _, te, "full", Q, Z, se, re, le, oe, ae, pe, $e, ye, ue),
							(this.cell = _),
							(this.templateData = te),
							(this.qb = !1),
							this.updateBorders();
					}
					init() {}
					styleContainer(ee) {
						ee.classList.remove("inserted", "removed");
					}
					buildBody() {
						super.buildBody(),
							this.cell.displayIconToHideUnmodifiedCells
								? (this.D(
										this.templateData.marginOverlay.onAction(() =>
											this.cell.hideUnchangedCells(),
										),
									),
									this.templateData.marginOverlay.show())
								: this.templateData.marginOverlay.hide();
					}
					_disposeMetadata() {
						(this.cell.metadataStatusHeight = 0),
							(this.cell.metadataHeight = 0),
							(this.templateData.metadataHeaderContainer.style.display =
								"none"),
							(this.templateData.metadataInfoContainer.style.display = "none"),
							(this.u = void 0);
					}
					_buildMetadata() {
						(this.n = this.templateData.metadataHeaderContainer),
							(this.r = this.templateData.metadataInfoContainer),
							(this.n.style.display = "flex"),
							(this.r.style.display = "block"),
							(this.n.innerText = ""),
							(this.r.innerText = ""),
							(this.q = this.U.createInstance(
								V,
								this.cell,
								this.n,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateMetadataRendering.bind(this),
									checkIfModified: (ee) => ee.checkMetadataIfModified(),
									getFoldingState: (ee) => ee.metadataFoldingState,
									updateFoldingState: (ee, _) => {
										ee.metadataFoldingState = _;
									},
									unChangedLabel: "Metadata",
									changedLabel: "Metadata changed",
									prefix: "metadata",
									menuId: c.$XX.NotebookDiffCellMetadataTitle,
								},
							)),
							this.a.add(this.q),
							this.q.buildHeader();
					}
					_disposeOutput() {
						this.jb(),
							this._hideOutputsRenderer(),
							this.kb(),
							(this.cell.rawOutputHeight = 0),
							(this.cell.outputStatusHeight = 0),
							(this.templateData.outputHeaderContainer.style.display = "none"),
							(this.templateData.outputInfoContainer.style.display = "none"),
							(this.F = void 0);
					}
					_buildOutput() {
						(this.templateData.outputHeaderContainer.style.display = "flex"),
							(this.templateData.outputInfoContainer.style.display = "block"),
							(this.w = this.templateData.outputHeaderContainer),
							(this.z = this.templateData.outputInfoContainer),
							(this.w.innerText = ""),
							(this.z.innerText = ""),
							this.cell.checkIfOutputsModified()
								? this.z.classList.add("modified")
								: this.z.classList.remove("modified"),
							(this.y = this.U.createInstance(
								V,
								this.cell,
								this.w,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateOutputRendering.bind(this),
									checkIfModified: (ee) => ee.checkIfOutputsModified(),
									getFoldingState: (ee) => ee.outputFoldingState,
									updateFoldingState: (ee, _) => {
										ee.outputFoldingState = _;
									},
									unChangedLabel: "Outputs",
									changedLabel: "Outputs changed",
									prefix: "output",
									menuId: c.$XX.NotebookDiffCellOutputsTitle,
								},
							)),
							this.b.add(this.y),
							this.y.buildHeader();
					}
					_buildOutputRendererContainer() {
						if (!this.F) {
							(this.F = t.$fhb(this.z, t.$(".output-view-container"))),
								(this.J = t.$fhb(this.F, t.$(".output-empty-view"))),
								(this.J.innerText = "No outputs to render"),
								!this.cell.checkIfOutputsModified() &&
								this.cell.modified.outputs.length === 0
									? (this.J.style.display = "block")
									: (this.J.style.display = "none"),
								this.cell.layoutChange(),
								this.D(
									this.cell.modified.textModel.onDidChangeOutputs(() => {
										!this.cell.checkIfOutputsModified() &&
										this.cell.modified.outputs.length === 0
											? (this.J.style.display = "block")
											: (this.J.style.display = "none"),
											this._decorate();
									}),
								),
								(this.G = t.$fhb(this.F, t.$(".output-view-container-left"))),
								(this.H = t.$fhb(this.F, t.$(".output-view-container-right"))),
								(this.I = t.$fhb(
									this.F,
									t.$(".output-view-container-metadata"),
								));
							const ee = this.cell.checkIfOutputsModified(),
								_ =
									ee &&
									ee.kind === C.OutputComparison.Metadata &&
									this.cell.original.outputs.length === 1 &&
									this.cell.modified.outputs.length === 1 &&
									(0, C.$TEc)(
										this.cell.original.outputs[0],
										this.cell.modified.outputs[0],
									) === C.OutputComparison.Metadata;
							if (ee && !_) {
								const te = this.notebookEditor.onDidDynamicOutputRendered(
										(Z) => {
											Z.cell.uri.toString() ===
												this.cell.original.uri.toString() &&
												this.cell.checkIfOutputsModified() &&
												(this.notebookEditor.deltaCellOutputContainerClassNames(
													d.DiffSide.Original,
													this.cell.original.id,
													["nb-cellDeleted"],
													[],
												),
												te.dispose());
										},
									),
									Q = this.notebookEditor.onDidDynamicOutputRendered((Z) => {
										Z.cell.uri.toString() ===
											this.cell.modified.uri.toString() &&
											this.cell.checkIfOutputsModified() &&
											(this.notebookEditor.deltaCellOutputContainerClassNames(
												d.DiffSide.Modified,
												this.cell.modified.id,
												["nb-cellAdded"],
												[],
											),
											Q.dispose());
									});
								this.D(te), this.D(Q);
							}
							if (
								((this.L = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.original,
									d.DiffSide.Original,
									this.G,
								)),
								this.L.render(),
								this.D(this.L),
								(this.M = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.modified,
									d.DiffSide.Modified,
									this.H,
								)),
								this.M.render(),
								this.D(this.M),
								ee && !_ && this._decorate(),
								_)
							) {
								(this.I.style.top = `${this.cell.layoutInfo.rawOutputHeight}px`),
									(this.P = this.U.createInstance(
										B.$3yb,
										this.I,
										{
											...A.$xEc,
											overflowWidgetsDomNode:
												this.notebookEditor.getOverflowContainerDomNode(),
											readOnly: !0,
											ignoreTrimWhitespace: !1,
											automaticLayout: !1,
											dimension: {
												height: C.$NEc,
												width: this.cell.getComputedCellContainerWidth(
													this.notebookEditor.getLayoutInfo(),
													!1,
													!0,
												),
											},
										},
										{ originalEditor: H(), modifiedEditor: H() },
									)),
									this.D(this.P);
								const te = JSON.stringify(
										this.cell.original.outputs[0].metadata ?? {},
										void 0,
										"	",
									),
									Q = JSON.stringify(
										this.cell.modified.outputs[0].metadata ?? {},
										void 0,
										"	",
									),
									Z = this.W.createById("json"),
									se = this.X.createModel(te, Z, void 0, !0),
									re = this.X.createModel(Q, Z, void 0, !0);
								this.P.setModel({ original: se, modified: re }),
									(this.cell.outputMetadataHeight = this.P.getContentHeight()),
									this.D(
										this.P.onDidContentSizeChange((le) => {
											this.cell.outputMetadataHeight = le.contentHeight;
										}),
									);
							}
						}
						this.F.style.display = "block";
					}
					_decorate() {
						this.cell.checkIfOutputsModified()
							? (this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Original,
									this.cell.original.id,
									["nb-cellDeleted"],
									[],
								),
								this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Modified,
									this.cell.modified.id,
									["nb-cellAdded"],
									[],
								))
							: (this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Original,
									this.cell.original.id,
									[],
									["nb-cellDeleted"],
								),
								this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Modified,
									this.cell.modified.id,
									[],
									["nb-cellAdded"],
								));
					}
					_showOutputsRenderer() {
						this.F &&
							((this.F.style.display = "block"),
							this.L?.showOutputs(),
							this.M?.showOutputs(),
							this.P?.layout({
								width:
									this.pb?.getViewWidth() ||
									this.cell.getComputedCellContainerWidth(
										this.notebookEditor.getLayoutInfo(),
										!1,
										!0,
									),
								height: this.cell.layoutInfo.outputMetadataHeight,
							}),
							this._decorate());
					}
					_hideOutputsRenderer() {
						this.F &&
							((this.F.style.display = "none"),
							this.L?.hideOutputs(),
							this.M?.hideOutputs());
					}
					updateSourceEditor() {
						(this.g = this.templateData.cellHeaderContainer),
							(this.g.style.display = "flex"),
							(this.g.innerText = "");
						const ee = this.cell.modified;
						(this.j = this.templateData.editorContainer),
							this.j.classList.add("diff");
						const _ = () => {
							if (
								this.cell.cellFoldingState === C.PropertyFoldingState.Collapsed
							) {
								(this.j.style.display = "none"), (this.cell.editorHeight = 0);
								return;
							}
							const le = ee.textModel.textBuffer.getLineCount(),
								oe =
									this.notebookEditor.getLayoutInfo().fontInfo.lineHeight || 17,
								ae =
									this.cell.layoutInfo.editorHeight !== 0
										? this.cell.layoutInfo.editorHeight
										: le * oe + A.$vEc.top + A.$vEc.bottom;
							if (
								((this.j.style.height = `${ae}px`),
								(this.j.style.display = "block"),
								this.pb)
							) {
								const pe = this.pb.getContentHeight();
								pe >= 0 && (this.cell.editorHeight = pe);
								return;
							}
							(this.pb = this.templateData.sourceEditor),
								le === 1 && this.pb.updateOptions({ padding: A.$uEc }),
								this.pb.layout({
									width: this.notebookEditor.getLayoutInfo().width - 2 * d.$yEc,
									height: ae,
								}),
								this.D(
									this.pb.onDidContentSizeChange((pe) => {
										this.cell.cellFoldingState ===
											C.PropertyFoldingState.Expanded &&
											pe.contentHeightChanged &&
											this.cell.layoutInfo.editorHeight !== pe.contentHeight &&
											(this.cell.editorHeight = pe.contentHeight);
									}),
								),
								this.tb();
						};
						(this.m = this.D(
							this.U.createInstance(V, this.cell, this.g, this.notebookEditor, {
								updateInfoRendering: () => _(),
								checkIfModified: (le) =>
									le.modified?.textModel.getTextBufferHash() !==
									le.original?.textModel.getTextBufferHash()
										? { reason: void 0 }
										: !1,
								getFoldingState: (le) => le.cellFoldingState,
								updateFoldingState: (le, oe) => (le.cellFoldingState = oe),
								unChangedLabel: "Input",
								changedLabel: "Input changed",
								prefix: "input",
								menuId: c.$XX.NotebookDiffCellInputTitle,
							}),
						)),
							this.m.buildHeader(),
							_();
						const te = this.db.createScoped(
							this.templateData.inputToolbarContainer,
						);
						this.D(te);
						const Q = d.$zEc.bindTo(te);
						Q.set(
							this.cell.modified.textModel.getTextBufferHash() !==
								this.cell.original.textModel.getTextBufferHash(),
						);
						const Z = d.$BEc.bindTo(te),
							se = this.fb.getValue(
								this.cell.modified.uri,
								"diffEditor.ignoreTrimWhitespace",
							);
						Z.set(se),
							(this.rb = this.templateData.toolbar),
							(this.rb.context = { cell: this.cell });
						const re = () => {
							const le = this.fb.getValue(
								this.cell.modified.uri,
								"diffEditor.ignoreTrimWhitespace",
							);
							Z.set(le);
							const oe =
								this.cell.modified.textModel.getTextBufferHash() !==
								this.cell.original.textModel.getTextBufferHash();
							if ((Q.set(oe), oe)) {
								const ae = [],
									pe = this.cb.getMenuActions(
										c.$XX.NotebookDiffCellInputTitle,
										te,
										{ shouldForwardArgs: !0 },
									);
								(0, p.$Kyb)(pe, ae), this.rb.setActions(ae);
							} else this.rb.setActions([]);
						};
						this.D(this.cell.modified.textModel.onDidChangeContent(() => re())),
							this.D(
								this.fb.onDidChangeConfiguration((le) => {
									le.affectsConfiguration(
										this.cell.modified.uri,
										"diffEditor",
									) &&
										le.affectedKeys.has("diffEditor.ignoreTrimWhitespace") &&
										re();
								}),
							),
							re();
					}
					async tb() {
						const ee = this.cell.original,
							_ = this.cell.modified,
							te = await this.Y.createModelReference(ee.uri),
							Q = await this.Y.createModelReference(_.uri);
						if (this.S) return;
						const Z = te.object.textEditorModel,
							se = Q.object.textEditorModel;
						this.D(te),
							this.D(Q),
							this.pb.setModel({ original: Z, modified: se });
						const re = () => {
								this.qb = !0;
							},
							le = (pe) => {
								(pe.scrollTopChanged || pe.scrollLeftChanged) && (this.qb = !0);
							};
						this.ub(),
							this.D(
								this.pb.getOriginalEditor().onDidChangeCursorSelection(re),
							),
							this.D(this.pb.getOriginalEditor().onDidScrollChange(le)),
							this.D(
								this.pb.getModifiedEditor().onDidChangeCursorSelection(re),
							),
							this.D(this.pb.getModifiedEditor().onDidScrollChange(le));
						const oe = this.cell.getSourceEditorViewState();
						oe && this.pb.restoreViewState(oe);
						const ae = this.pb.getContentHeight();
						this.cell.editorHeight = ae;
					}
					ub() {
						const ee = this.pb;
						if (!ee) return;
						const _ =
							ee.getModel()?.modified.uri || ee.getModel()?.original.uri;
						if (!_) return;
						const te = this.fb.getValue(_, "diffEditor.ignoreTrimWhitespace");
						ee.updateOptions({ ignoreTrimWhitespace: te }),
							this.D(
								this.fb.onDidChangeConfiguration((Q) => {
									if (
										Q.affectsConfiguration(_, "diffEditor") &&
										Q.affectedKeys.has("diffEditor.ignoreTrimWhitespace")
									) {
										const Z = this.fb.getValue(
											_,
											"diffEditor.ignoreTrimWhitespace",
										);
										ee.updateOptions({ ignoreTrimWhitespace: Z });
									}
								}),
							);
					}
					layout(ee) {
						t.$hgb(t.getWindow(this.Q), () => {
							ee.editorHeight &&
								this.pb &&
								((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
								this.pb.layout({
									width: this.pb.getViewWidth(),
									height: this.cell.layoutInfo.editorHeight,
								})),
								ee.outerWidth &&
									this.pb &&
									((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
									this.pb.layout()),
								(ee.metadataHeight || ee.outerWidth) &&
									this.s &&
									((this.s.style.height = `${this.cell.layoutInfo.metadataHeight}px`),
									this.u?.layout({
										width:
											this.pb?.getViewWidth() ||
											this.cell.getComputedCellContainerWidth(
												this.notebookEditor.getLayoutInfo(),
												!1,
												!0,
											),
										height: this.cell.layoutInfo.metadataHeight,
									})),
								(ee.outputTotalHeight || ee.outerWidth) &&
									(this.C &&
										((this.C.style.height = `${this.cell.layoutInfo.outputTotalHeight}px`),
										this.O?.layout({
											width:
												this.pb?.getViewWidth() ||
												this.cell.getComputedCellContainerWidth(
													this.notebookEditor.getLayoutInfo(),
													!1,
													!0,
												),
											height: this.cell.layoutInfo.outputTotalHeight,
										})),
									this.I &&
										((this.I.style.height = `${this.cell.layoutInfo.outputMetadataHeight}px`),
										(this.I.style.top = `${this.cell.layoutInfo.outputTotalHeight - this.cell.layoutInfo.outputMetadataHeight}px`),
										this.P?.layout({
											width:
												this.pb?.getViewWidth() ||
												this.cell.getComputedCellContainerWidth(
													this.notebookEditor.getLayoutInfo(),
													!1,
													!0,
												),
											height: this.cell.layoutInfo.outputMetadataHeight,
										}))),
								this.ob();
						});
					}
					dispose() {
						this.pb && this.pb.setModel(null),
							this.pb &&
								this.qb &&
								this.cell.saveSpirceEditorViewState(this.pb.saveViewState()),
							super.dispose();
					}
				};
				(e.$aFc = X),
					(e.$aFc = X =
						Ne(
							[
								j(3, E.$Li),
								j(4, u.$nM),
								j(5, r.$QO),
								j(6, k.$MO),
								j(7, h.$Xxb),
								j(8, n.$uZ),
								j(9, g.$4N),
								j(10, c.$YX),
								j(11, o.$6j),
								j(12, L.$gj),
								j(13, x.$XO),
							],
							X,
						));
				class Y extends i.$1c {
					constructor(ee) {
						super(),
							(this.c = ee),
							(this.a = t.h("div.diff-hidden-cells", [
								t.h("div.center@content", { style: { display: "flex" } }, [
									t.$(
										"a",
										{
											title: (0, z.localize)(7977, null),
											role: "button",
											onclick: () => {
												this.b.fire();
											},
										},
										...(0, P.$Sib)("$(unfold)"),
									),
								]),
							])),
							(this.b = this.D(new F.$re())),
							(this.onAction = this.b.event),
							(this.a.root.style.display = "none"),
							ee.appendChild(this.a.root);
					}
					show() {
						this.a.root.style.display = "block";
					}
					hide() {
						this.a.root.style.display = "none";
					}
					dispose() {
						this.hide(),
							this.c.removeChild(this.a.root),
							t.$hhb(this.a.root),
							super.dispose();
					}
				}
				e.$bFc = Y;
				class ie extends i.$1c {
					constructor(ee) {
						super(),
							(this.c = ee),
							(this.a = t.h("div.diff-hidden-cells", [
								t.h("div.center@content", { style: { display: "flex" } }, [
									t.$(
										"a",
										{
											title: (0, z.localize)(7978, null),
											role: "button",
											onclick: () => {
												this.b.fire();
											},
										},
										...(0, P.$Sib)("$(fold)"),
									),
								]),
							])),
							(this.b = this.D(new F.$re())),
							(this.onAction = this.b.event),
							(this.a.root.style.display = "none"),
							ee.appendChild(this.a.root);
					}
					show() {
						this.a.root.style.display = "block";
					}
					hide() {
						this.a.root.style.display = "none";
					}
					dispose() {
						this.hide(),
							this.c.removeChild(this.a.root),
							t.$hhb(this.a.root),
							super.dispose();
					}
				}
				e.$cFc = ie;
			},
		),
		define(
			de[3772],
			he([
				1, 0, 7, 278, 3, 10, 8, 5, 39, 93, 35, 556, 3771, 206, 309, 11, 49, 40,
				801, 463, 345, 173, 1253, 91, 4, 2454,
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
				var S, I, T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iFc = e.$hFc = e.$gFc = e.$fFc = e.$eFc = e.$dFc = void 0),
					(t = mt(t));
				let P = class {
					constructor(R, O) {
						this.b = O;
						const B = this.b.getValue("editor");
						this.a = b.$OK.createFromRawSettings(
							B,
							s.$sjb.getInstance(R).value,
						).lineHeight;
					}
					getHeight(R) {
						return R.getHeight(this.a);
					}
					hasDynamicHeight(R) {
						return !1;
					}
					getTemplateId(R) {
						switch (R.type) {
							case "delete":
							case "insert":
								return L.TEMPLATE_ID;
							case "modified":
							case "unchanged":
								return D.TEMPLATE_ID;
							case "placeholder":
								return k.TEMPLATE_ID;
						}
					}
				};
				(e.$dFc = P), (e.$dFc = P = Ne([j(1, E.$gj)], P));
				let k = class {
					static {
						S = this;
					}
					static {
						this.TEMPLATE_ID = "cell_diff_placeholder";
					}
					constructor(R, O) {
						(this.notebookEditor = R), (this.a = O);
					}
					get templateId() {
						return S.TEMPLATE_ID;
					}
					renderTemplate(R) {
						const O = t.$(".cell-placeholder-body");
						t.$fhb(R, O);
						const B = new w.$Zc(),
							U = new h.$bFc(O),
							z = t.$fhb(O, t.$(".contents")),
							F = t.$fhb(
								z,
								t.$("span.text", { title: (0, v.localize)(8008, null) }),
							);
						return {
							body: O,
							container: R,
							placeholder: F,
							marginOverlay: U,
							elementDisposables: B,
						};
					}
					renderElement(R, O, B, U) {
						B.body.classList.remove("left", "right", "full"),
							B.elementDisposables.add(this.a.createInstance(h.$0Ec, R, B));
					}
					disposeTemplate(R) {
						R.container.innerText = "";
					}
					disposeElement(R, O, B) {
						B.elementDisposables.clear();
					}
				};
				(e.$eFc = k), (e.$eFc = k = S = Ne([j(1, d.$Li)], k));
				let L = class {
					static {
						I = this;
					}
					static {
						this.TEMPLATE_ID = "cell_diff_single";
					}
					constructor(R, O) {
						(this.notebookEditor = R), (this.a = O);
					}
					get templateId() {
						return I.TEMPLATE_ID;
					}
					renderTemplate(R) {
						const O = t.$(".cell-body");
						t.$fhb(R, O);
						const B = t.$(".cell-diff-editor-container");
						t.$fhb(O, B);
						const U = t.$fhb(O, t.$(".diagonal-fill")),
							z = t.$fhb(B, t.$(".input-header-container")),
							F = t.$fhb(B, t.$(".source-container")),
							{ editor: x, editorContainer: H } = this.b(F),
							q = t.$fhb(B, t.$(".metadata-header-container")),
							V = t.$fhb(B, t.$(".metadata-info-container")),
							G = t.$fhb(B, t.$(".output-header-container")),
							K = t.$fhb(B, t.$(".output-info-container")),
							J = t.$fhb(O, t.$(".border-container")),
							W = t.$fhb(J, t.$(".left-border")),
							X = t.$fhb(J, t.$(".right-border")),
							Y = t.$fhb(J, t.$(".top-border")),
							ie = t.$fhb(J, t.$(".bottom-border"));
						return {
							body: O,
							container: R,
							editorContainer: H,
							diffEditorContainer: B,
							diagonalFill: U,
							cellHeaderContainer: z,
							sourceEditor: x,
							metadataHeaderContainer: q,
							metadataInfoContainer: V,
							outputHeaderContainer: G,
							outputInfoContainer: K,
							leftBorder: W,
							rightBorder: X,
							topBorder: Y,
							bottomBorder: ie,
							elementDisposables: new w.$Zc(),
						};
					}
					b(R) {
						const O = t.$fhb(R, t.$(".editor-container"));
						return {
							editor: this.a.createInstance(
								c.$rwb,
								O,
								{
									...y.$wEc,
									glyphMargin: !1,
									dimension: {
										width:
											(this.notebookEditor.getLayoutInfo().width - 2 * a.$yEc) /
												2 -
											18,
										height: 0,
									},
									automaticLayout: !1,
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
								},
								{},
							),
							editorContainer: O,
						};
					}
					renderElement(R, O, B, U) {
						switch (
							(B.body.classList.remove("left", "right", "full"), R.type)
						) {
							case "delete":
								B.elementDisposables.add(
									this.a.createInstance(h.$$Ec, this.notebookEditor, R, B),
								);
								return;
							case "insert":
								B.elementDisposables.add(
									this.a.createInstance(h.$_Ec, this.notebookEditor, R, B),
								);
								return;
							default:
								break;
						}
					}
					disposeTemplate(R) {
						(R.container.innerText = ""),
							R.sourceEditor.dispose(),
							R.elementDisposables.dispose();
					}
					disposeElement(R, O, B) {
						B.elementDisposables.clear();
					}
				};
				(e.$fFc = L), (e.$fFc = L = I = Ne([j(1, d.$Li)], L));
				let D = class {
					static {
						T = this;
					}
					static {
						this.TEMPLATE_ID = "cell_diff_side_by_side";
					}
					constructor(R, O, B, U, z, F, x, H, q) {
						(this.notebookEditor = R),
							(this.a = O),
							(this.b = B),
							(this.c = U),
							(this.d = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q);
					}
					get templateId() {
						return T.TEMPLATE_ID;
					}
					renderTemplate(R) {
						const O = t.$(".cell-body");
						t.$fhb(R, O);
						const B = t.$(".cell-diff-editor-container");
						t.$fhb(O, B);
						const U = t.$fhb(B, t.$(".input-header-container")),
							z = t.$fhb(B, t.$(".source-container")),
							{ editor: F, editorContainer: x } = this.j(z),
							H = t.$fhb(z, t.$(".editor-input-toolbar-container")),
							q = t.$fhb(H, t.$("div.property-toolbar")),
							V = this.a.createInstance(l.$Syb, q, {
								actionViewItemProvider: (Q, Z) => {
									if (Q instanceof g.$2X)
										return new f.$M3b(
											Q,
											{ hoverDelegate: Z.hoverDelegate },
											this.c,
											this.g,
											this.f,
											this.h,
											this.b,
											this.i,
										);
								},
								highlightToggledItems: !0,
							}),
							G = t.$fhb(B, t.$(".metadata-header-container")),
							K = t.$fhb(B, t.$(".metadata-info-container")),
							J = t.$fhb(B, t.$(".output-header-container")),
							W = t.$fhb(B, t.$(".output-info-container")),
							X = t.$fhb(O, t.$(".border-container")),
							Y = t.$fhb(X, t.$(".left-border")),
							ie = t.$fhb(X, t.$(".right-border")),
							ne = t.$fhb(X, t.$(".top-border")),
							ee = t.$fhb(X, t.$(".bottom-border")),
							_ = new h.$cFc(O),
							te = new w.$Zc();
						return {
							body: O,
							container: R,
							diffEditorContainer: B,
							cellHeaderContainer: U,
							sourceEditor: F,
							editorContainer: x,
							inputToolbarContainer: H,
							toolbar: V,
							metadataHeaderContainer: G,
							metadataInfoContainer: K,
							outputHeaderContainer: J,
							outputInfoContainer: W,
							leftBorder: Y,
							rightBorder: ie,
							topBorder: ne,
							bottomBorder: ee,
							marginOverlay: _,
							elementDisposables: te,
						};
					}
					j(R) {
						const O = t.$fhb(R, t.$(".editor-container"));
						return {
							editor: this.a.createInstance(
								n.$3yb,
								O,
								{
									...y.$xEc,
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
									originalEditable: !1,
									ignoreTrimWhitespace: !1,
									automaticLayout: !1,
									dimension: { height: 0, width: 0 },
									renderSideBySide: !0,
									useInlineViewWhenSpaceIsLimited: !1,
								},
								{
									originalEditor: (0, h.$9Ec)(),
									modifiedEditor: (0, h.$9Ec)(),
								},
							),
							editorContainer: O,
						};
					}
					renderElement(R, O, B, U) {
						switch (
							(B.body.classList.remove("left", "right", "full"), R.type)
						) {
							case "unchanged":
								B.elementDisposables.add(
									this.a.createInstance(h.$aFc, this.notebookEditor, R, B),
								);
								return;
							case "modified":
								B.elementDisposables.add(
									this.a.createInstance(h.$aFc, this.notebookEditor, R, B),
								);
								return;
							default:
								break;
						}
					}
					disposeTemplate(R) {
						(R.container.innerText = ""),
							R.sourceEditor.dispose(),
							R.toolbar?.dispose(),
							R.elementDisposables.dispose();
					}
					disposeElement(R, O, B) {
						B.toolbar && (B.toolbar.context = void 0),
							B.elementDisposables.clear();
					}
				};
				(e.$gFc = D),
					(e.$gFc =
						D =
						T =
							Ne(
								[
									j(1, d.$Li),
									j(2, p.$Xxb),
									j(3, m.$uZ),
									j(4, g.$YX),
									j(5, C.$6j),
									j(6, o.$4N),
									j(7, u.$iP),
									j(8, $.$XK),
								],
								D,
							));
				class M extends i.$Oib {
					u(R) {
						if ((0, i.$Eib)(R.browserEvent.target)) {
							const O = typeof R.index > "u" ? [] : [R.index];
							this.k.setFocus(O, R.browserEvent);
						} else super.u(R);
					}
				}
				e.$hFc = M;
				let N = class extends r.$yMb {
					get rowsContainer() {
						return this.k.containerDomNode;
					}
					constructor(R, O, B, U, z, F, x, H, q) {
						super(R, O, B, U, F, z, x, H, q);
					}
					D(R) {
						return new M(this);
					}
					getCellViewScrollTop(R) {
						const O = this.indexOf(R);
						return this.k.elementTop(O);
					}
					getScrollHeight() {
						return this.k.scrollHeight;
					}
					triggerScrollFromMouseWheelEvent(R) {
						this.k.delegateScrollFromMouseWheelEvent(R);
					}
					delegateVerticalScrollbarPointerDown(R) {
						this.k.delegateVerticalScrollbarPointerDown(R);
					}
					clear() {
						super.splice(0, this.length);
					}
					updateElementHeight2(R, O) {
						const B = this.indexOf(R),
							U = this.getFocus();
						this.k.updateElementHeight(B, O, U.length ? U[0] : null);
					}
					style(R) {
						const O = this.k.domId;
						this.p || (this.p = t.$Rgb(this.k.domNode));
						const B = O && `.${O}`,
							U = [];
						R.listBackground &&
							U.push(
								`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows { background: ${R.listBackground}; }`,
							),
							R.listFocusBackground &&
								(U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color: ${R.listFocusBackground}; }`,
								),
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color: ${R.listFocusBackground}; }`,
								)),
							R.listFocusForeground &&
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { color: ${R.listFocusForeground}; }`,
								),
							R.listActiveSelectionBackground &&
								(U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color: ${R.listActiveSelectionBackground}; }`,
								),
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color: ${R.listActiveSelectionBackground}; }`,
								)),
							R.listActiveSelectionForeground &&
								U.push(
									`.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${R.listActiveSelectionForeground}; }`,
								),
							R.listFocusAndSelectionBackground &&
								U.push(`
				.monaco-drag-image,
				.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { background-color: ${R.listFocusAndSelectionBackground}; }
			`),
							R.listFocusAndSelectionForeground &&
								U.push(`
				.monaco-drag-image,
				.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { color: ${R.listFocusAndSelectionForeground}; }
			`),
							R.listInactiveFocusBackground &&
								(U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color:  ${R.listInactiveFocusBackground}; }`,
								),
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color:  ${R.listInactiveFocusBackground}; }`,
								)),
							R.listInactiveSelectionBackground &&
								(U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color:  ${R.listInactiveSelectionBackground}; }`,
								),
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color:  ${R.listInactiveSelectionBackground}; }`,
								)),
							R.listInactiveSelectionForeground &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${R.listInactiveSelectionForeground}; }`,
								),
							R.listHoverBackground &&
								U.push(
									`.monaco-list${B}:not(.drop-target) > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { background-color:  ${R.listHoverBackground}; }`,
								),
							R.listHoverForeground &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${R.listHoverForeground}; }`,
								),
							R.listSelectionOutline &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { outline: 1px dotted ${R.listSelectionOutline}; outline-offset: -1px; }`,
								),
							R.listFocusOutline &&
								U.push(`
				.monaco-drag-image,
				.monaco-list${B}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px solid ${R.listFocusOutline}; outline-offset: -1px; }
			`),
							R.listInactiveFocusOutline &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px dotted ${R.listInactiveFocusOutline}; outline-offset: -1px; }`,
								),
							R.listHoverOutline &&
								U.push(
									`.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover { outline: 1px dashed ${R.listHoverOutline}; outline-offset: -1px; }`,
								),
							R.listDropOverBackground &&
								U.push(`
				.monaco-list${B}.drop-target,
				.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-rows.drop-target,
				.monaco-list${B} > div.monaco-scrollable-element > .monaco-list-row.drop-target { background-color: ${R.listDropOverBackground} !important; color: inherit !important; }
			`);
						const z = U.join(`
`);
						z !== this.p.textContent && (this.p.textContent = z);
					}
				};
				(e.$iFc = N),
					(e.$iFc = N = Ne([j(6, r.$fMb), j(7, E.$gj), j(8, d.$Li)], N));
			},
		),
		define(
			de[3773],
			he([1, 0, 24, 3, 38, 10, 8, 5, 35, 447, 1899, 294]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$G3b = void 0);
				let h = class extends a.$A1b {
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.n = o),
							(this.q = f),
							(this.r = b),
							(this.s = s),
							(this.g = this.D(new i.$Zc())),
							this.j.classList.add("review-widget"),
							this.D((this.a = new i.$2c())),
							this.D(this.n.onDidColorThemeChange(this.F, this)),
							this.F();
					}
					async t(n) {
						this.b !== n && ((this.b = n), await this.y());
					}
					async u(n, g) {
						this.g.clear(),
							(this.a.value = this.s.createInstance(
								u.$F3b,
								this.j,
								this.h,
								n,
								this.h.textModel.uri,
								this.m,
								this.s,
								g,
								void 0,
								void 0,
								{
									codeBlockFontFamily:
										this.r.getValue("editor").fontFamily ||
										w.EDITOR_FONT_DEFAULTS.fontFamily,
								},
								void 0,
								{ actionRunner: () => {}, collapse: () => {} },
							));
						const p = this.h.getLayoutInfo();
						await this.a.value.display(p.fontInfo.lineHeight, !0),
							this.F(),
							this.g.add(
								this.a.value.onDidResize(() => {
									this.b &&
										this.a.value &&
										(this.b.commentHeight = this.z(
											this.a.value.getDimensions().height,
										));
								}),
							);
					}
					w() {
						this.f.add(this.q.onDidUpdateCommentThreads(async () => this.y()));
					}
					async y() {
						if (!this.b) return;
						const n = await this.C(this.b);
						if (!this.a.value && n) {
							await this.u(n.owner, n.thread),
								(this.j.style.top = `${this.b.layoutInfo.commentOffset}px`),
								(this.b.commentHeight = this.z(
									this.a.value.getDimensions().height,
								));
							return;
						}
						if (this.a.value) {
							if (!n) {
								this.g.clear(),
									(this.a.value = void 0),
									(this.b.commentHeight = 0);
								return;
							}
							await this.a.value.updateCommentThread(n.thread),
								(this.b.commentHeight = this.z(
									this.a.value.getDimensions().height,
								));
						}
					}
					z(n) {
						const g = this.h.getLayoutInfo(),
							p = Math.ceil(g.fontInfo.lineHeight * 1.2),
							o = g.fontInfo.lineHeight,
							f = Math.round(o / 3),
							b = Math.round(o / 9) * 2;
						return p + n + f + b + 8;
					}
					async C(n) {
						if (this.h.hasModel()) {
							const g = (0, t.$Lb)(await this.q.getNotebookComments(n.uri));
							for (const p of g)
								for (const o of p.threads)
									return { owner: p.uniqueOwner, thread: o };
						}
						return null;
					}
					F() {
						const n = this.n.getColorTheme(),
							g = this.h.getLayoutInfo().fontInfo;
						this.a.value?.applyTheme(n, g);
					}
					didRenderCell(n) {
						this.t(n), this.w();
					}
					prepareLayout() {
						this.b &&
							this.a.value &&
							(this.b.commentHeight = this.z(
								this.a.value.getDimensions().height,
							));
					}
					updateInternalLayoutNow(n) {
						this.b &&
							this.a.value &&
							(this.j.style.top = `${n.layoutInfo.commentOffset}px`);
					}
				};
				(e.$G3b = h),
					(e.$G3b = h =
						Ne(
							[
								j(2, C.$6j),
								j(3, m.$iP),
								j(4, r.$62b),
								j(5, E.$gj),
								j(6, d.$Li),
							],
							h,
						));
			},
		),
		define(
			de[3774],
			he([
				1, 0, 4, 11, 31, 20, 250, 30, 55, 3760, 1289, 3137, 1754, 3268, 510,
				1898, 52, 81, 602, 714,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(C = mt(C)),
					(0, E.$lK)(n.$gYb, g.$uYb, E.InstantiationType.Delayed),
					(0, i.$4X)(a.$4Xc),
					w.$fk.registerCommandAlias(
						"editor.action.showSnippets",
						"editor.action.insertSnippet",
					),
					(0, i.$4X)(h.$6Xc),
					(0, i.$4X)(u.$HFc),
					(0, i.$4X)(r.$2Xc),
					d.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(c.$7Xc, p.LifecyclePhase.Restored),
					d.$Io
						.as(o.$No.Configuration)
						.registerConfiguration({
							...f.$DAb,
							properties: {
								"editor.snippets.codeActions.enabled": {
									description: t.localize(9466, null),
									type: "boolean",
									default: !0,
								},
							},
						});
				const s = "vscode://schemas/snippets",
					l = {
						prefix: {
							description: t.localize(9467, null),
							type: ["string", "array"],
						},
						isFileTemplate: {
							description: t.localize(9468, null),
							type: "boolean",
						},
						body: {
							markdownDescription: t.localize(9469, null),
							type: ["string", "array"],
							items: { type: "string" },
						},
						description: {
							description: t.localize(9470, null),
							type: ["string", "array"],
						},
					},
					y = {
						id: s,
						allowComments: !0,
						allowTrailingCommas: !0,
						defaultSnippets: [
							{
								label: t.localize(9471, null),
								body: {
									"${1:snippetName}": {
										prefix: "${2:prefix}",
										body: "${3:snippet}",
										description: "${4:description}",
									},
								},
							},
						],
						type: "object",
						description: t.localize(9472, null),
						additionalProperties: {
							type: "object",
							required: ["body"],
							properties: l,
							additionalProperties: !1,
						},
					},
					$ = "vscode://schemas/global-snippets",
					v = {
						id: $,
						allowComments: !0,
						allowTrailingCommas: !0,
						defaultSnippets: [
							{
								label: t.localize(9473, null),
								body: {
									"${1:snippetName}": {
										scope: "${2:scope}",
										prefix: "${3:prefix}",
										body: "${4:snippet}",
										description: "${5:description}",
									},
								},
							},
						],
						type: "object",
						description: t.localize(9474, null),
						additionalProperties: {
							type: "object",
							required: ["body"],
							properties: {
								...l,
								scope: { description: t.localize(9475, null), type: "string" },
							},
							additionalProperties: !1,
						},
					},
					S = d.$Io.as(C.$Jo.JSONContribution);
				S.registerSchema(s, y), S.registerSchema($, v);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3775],
		he([
			1, 0, 30, 55, 52, 32, 25, 18, 39, 333, 78, 12, 3, 2795, 269, 10, 85, 19,
			6, 23, 671, 136, 142, 60, 133, 75, 81, 28, 96, 141, 218, 129,
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
				(e.$YAc = void 0),
				(c = xi(c));
			let N = class extends h.$1c {
				static {
					M = this;
				}
				static {
					this.a = [
						"package.json",
						"package-lock.json",
						"tsconfig.json",
						"jsconfig.json",
						"bower.json",
						".eslintrc.json",
						"tslint.json",
						"composer.json",
					];
				}
				static {
					this.b = [
						"settings.json",
						"extensions.json",
						"tasks.json",
						"launch.json",
					];
				}
				constructor(B, U, z, F, x, H, q, V, G, K) {
					super(), (this.c = B), (this.f = U), (this.g = V);
					const { filesToOpenOrCreate: J, filesToDiff: W, filesToMerge: X } = q,
						Y = G.getActivePaneComposite($.ViewContainerLocation.Sidebar);
					B.publicLog2("workspaceLoad", {
						windowSize: {
							innerHeight: S.$Bfb.innerHeight,
							innerWidth: S.$Bfb.innerWidth,
							outerHeight: S.$Bfb.outerHeight,
							outerWidth: S.$Bfb.outerWidth,
						},
						emptyWorkbench: U.getWorkbenchState() === C.WorkbenchState.EMPTY,
						"workbench.filesToOpenOrCreate": (J && J.length) || 0,
						"workbench.filesToDiff": (W && W.length) || 0,
						"workbench.filesToMerge": (X && X.length) || 0,
						customKeybindingsCount: x.customKeybindingsCount(),
						theme: H.getColorTheme().id,
						language: a.$z,
						pinnedViewlets: G.getPinnedPaneCompositeIds(
							$.ViewContainerLocation.Sidebar,
						),
						restoredViewlet: Y ? Y.getId() : void 0,
						restoredEditors: F.visibleEditors.length,
						startupKind: z.startupKind,
					}),
						this.D(new c.default(B)),
						this.D(K.files.onDidResolve((ie) => this.h(ie))),
						this.D(K.files.onDidSave((ie) => this.j(ie))),
						this.D(z.onDidShutdown(() => this.dispose()));
				}
				h(B) {
					const U = this.m(B.model.resource);
					U
						? this.c.publicLog2("settingsRead", { settingsType: U })
						: this.c.publicLog2("fileGet", this.n(B.model.resource, B.reason));
				}
				j(B) {
					const U = this.m(B.model.resource);
					U
						? this.c.publicLog2("settingsWritten", { settingsType: U })
						: this.c.publicLog2("filePUT", this.n(B.model.resource, B.reason));
				}
				m(B) {
					if ((0, o.$lh)(B) !== ".json") return "";
					if ((0, o.$gh)(B, this.g.currentProfile.settingsResource))
						return "global-settings";
					if ((0, o.$gh)(B, this.g.currentProfile.keybindingsResource))
						return "keybindings";
					if ((0, o.$hh)(B, this.g.currentProfile.snippetsHome))
						return "snippets";
					const U = this.f.getWorkspace().folders;
					for (const z of U)
						if ((0, o.$hh)(B, z.toResource(".vscode"))) {
							const F = (0, o.$kh)(B);
							if (M.b.indexOf(F) > -1) return `.vscode/${F}`;
						}
					return "";
				}
				n(B, U) {
					let z = (0, o.$lh)(B);
					const F = z.indexOf("?");
					z = F !== -1 ? z.substr(0, F) : z;
					const x = (0, o.$kh)(B),
						H = B.scheme === b.Schemas.file ? B.fsPath : B.path,
						q = {
							mimeType: new n.$Qp((0, s.$lYb)(B).join(", ")),
							ext: z,
							path: (0, l.$Aj)(H),
							reason: U,
							allowlistedjson: void 0,
						};
					return (
						z === ".json" && M.a.indexOf(x) > -1 && (q.allowlistedjson = x), q
					);
				}
			};
			(e.$YAc = N),
				(e.$YAc =
					N =
					M =
						Ne(
							[
								j(0, E.$km),
								j(1, C.$Vi),
								j(2, w.$n6),
								j(3, d.$IY),
								j(4, m.$uZ),
								j(5, r.$rRb),
								j(6, u.$r8),
								j(7, v.$P8),
								j(8, y.$6Sb),
								j(9, p.$kZ),
							],
							N,
						));
			let A = class extends h.$1c {
				constructor(B, U, z) {
					super(),
						(this.b = B),
						(this.c = U),
						(this.f = z),
						(this.a = t.$Io.as(I.$No.Configuration));
					const F = f.Event.debounce(
						B.onDidChangeConfiguration,
						(q, V) => {
							const G = q
								? new Set([...q.affectedKeys, ...V.affectedKeys])
								: V.affectedKeys;
							return { ...V, affectedKeys: G };
						},
						1e3,
						!0,
					);
					this.D(
						F((q) => {
							q.source !== g.ConfigurationTarget.DEFAULT &&
								z.publicLog2("updateConfiguration", {
									configurationSource: (0, g.$jj)(q.source),
									configurationKeys: Array.from(q.affectedKeys),
								});
						}),
					);
					const { user: x, workspace: H } = B.keys();
					for (const q of x) this.h(q, g.ConfigurationTarget.USER_LOCAL);
					for (const q of H) this.h(q, g.ConfigurationTarget.WORKSPACE);
				}
				g(B, U) {
					const z = this.b.inspect(B),
						F =
							U === g.ConfigurationTarget.USER_LOCAL
								? z.user?.value
								: z.workspace?.value;
					if ((0, T.$pg)(F) || (0, T.$rg)(F)) return F.toString();
					const x = this.a.getConfigurationProperties()[B];
					if ((0, T.$lg)(F)) return x?.enum?.includes(F) ? F : void 0;
					if (
						Array.isArray(F) &&
						F.every(
							(H) =>
								(0, T.$pg)(H) ||
								(0, T.$rg)(H) ||
								((0, T.$lg)(H) && x?.enum?.includes(H)),
						)
					)
						return JSON.stringify(F);
				}
				h(B, U) {
					const z = (0, g.$jj)(U);
					switch (B) {
						case P.LayoutSettings.ACTIVITY_BAR_LOCATION:
							this.f.publicLog2("workbench.activityBar.location", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case k.$OQb:
							this.f.publicLog2("extensions.autoUpdate", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "files.autoSave":
							this.f.publicLog2("files.autoSave", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "editor.stickyScroll.enabled":
							this.f.publicLog2("editor.stickyScroll.enabled", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case L.$K2:
							this.f.publicLog2("accessibility.voice.keywordActivation", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.zoomLevel":
							this.f.publicLog2("window.zoomLevel", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.zoomPerWindow":
							this.f.publicLog2("window.zoomPerWindow", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.titleBarStyle":
							this.f.publicLog2("window.titleBarStyle", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.customTitleBarVisibility":
							this.f.publicLog2("window.customTitleBarVisibility", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.nativeTabs":
							this.f.publicLog2("window.nativeTabs", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "extensions.verifySignature":
							this.f.publicLog2("extensions.verifySignature", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.systemColorTheme":
							this.f.publicLog2("window.systemColorTheme", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.newWindowProfile": {
							const F = this.g(B, U),
								x =
									F === null
										? "null"
										: F === this.c.defaultProfile.name
											? "default"
											: "custom";
							this.f.publicLog2("window.newWindowProfile", {
								settingValue: x,
								source: z,
							});
							return;
						}
						case k.$RQb:
							this.f.publicLog2("extensions.autoRestart", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
					}
				}
			};
			A = Ne([j(0, g.$gj), j(1, D.$Xl), j(2, E.$km)], A);
			const R = t.$Io.as(i.Extensions.Workbench);
			R.registerWorkbenchContribution(N, w.LifecyclePhase.Restored),
				R.registerWorkbenchContribution(A, w.LifecyclePhase.Eventually);
		},
	),
		define(
			de[3776],
			he([
				1, 0, 7, 105, 198, 276, 437, 50, 15, 6, 103, 4, 49, 5, 21, 26, 1043,
				470, 515, 1001, 379, 185,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zMc = void 0),
					(t = mt(t));
				const y = {
					[b.TestFilterTerm.Failed]: (0, a.localize)(10774, null),
					[b.TestFilterTerm.Executed]: (0, a.localize)(10775, null),
					[b.TestFilterTerm.CurrentDoc]: (0, a.localize)(10776, null),
					[b.TestFilterTerm.OpenedFiles]: (0, a.localize)(10777, null),
					[b.TestFilterTerm.Hidden]: (0, a.localize)(10778, null),
				};
				let $ = class extends w.$$ib {
					constructor(I, T, P, k, L) {
						super(null, I, T),
							(this.n = P),
							(this.s = k),
							(this.y = L),
							(this.c = this.D(new r.$re())),
							(this.onDidFocus = this.c.event),
							(this.g = this.D(
								this.s.createInstance(f.$oqc, {
									key: "testing.filterHistory2",
									scope: n.StorageScope.WORKSPACE,
									target: n.StorageTarget.MACHINE,
								}),
							)),
							(this.h = new d.$rj(
								"markersFiltersAction",
								(0, a.localize)(10779, null),
								"testing-filter-button " + g.ThemeIcon.asClassName(o.$CKc),
							)),
							this.I(),
							this.D(L.excluded.onTestExclusionsChanged(this.I, this));
					}
					render(I) {
						I.classList.add("testing-filter-action-item");
						const T = this.D(new m.$Jh(400)),
							P = (this.b = t.$(".testing-filter-wrapper"));
						I.appendChild(P);
						let k = this.g.get({ lastValue: "", values: [] });
						k instanceof Array && (k = { lastValue: "", values: k }),
							k.lastValue && this.n.setText(k.lastValue);
						const L = (this.a = this.D(
							this.s.createInstance(p.$5Bc, {
								id: "testing.explorer.filter",
								ariaLabel: (0, a.localize)(10780, null),
								parent: P,
								suggestionProvider: {
									triggerCharacters: ["@"],
									provideResults: () =>
										[
											...Object.entries(y).map(([M, N]) => ({
												label: M,
												detail: N,
											})),
											...u.Iterable.map(
												this.y.collection.tags.values(),
												(M) => {
													const { ctrlId: N, tagId: A } = (0, l.$q4)(M.id),
														R = `@${N}:${A}`;
													return {
														label: `@${N}:${A}`,
														detail:
															this.y.collection.getNodeById(N)?.item.label,
														insertText: A.includes(" ")
															? `@${N}:"${A.replace(/(["\\])/g, "\\$1")}"`
															: R,
													};
												},
											),
										].filter((M) => !this.n.text.value.includes(M.label)),
								},
								resourceHandle: "testing:filter",
								suggestOptions: {
									value: this.n.text.value,
									placeholderText: (0, a.localize)(10781, null),
								},
								history: k.values,
							}),
						));
						this.D(
							this.n.text.onDidChange((M) => {
								L.getValue() !== M && L.setValue(M);
							}),
						),
							this.D(
								this.n.onDidRequestInputFocus(() => {
									L.focus();
								}),
							),
							this.D(
								L.onDidFocus(() => {
									this.c.fire();
								}),
							),
							this.D(
								L.onInputDidChange(() =>
									T.trigger(() => {
										L.addToHistory(), this.n.setText(L.getValue());
									}),
								),
							),
							this.D(
								new i.$eib(I, {
									actionViewItemProvider: (M, N) => {
										if (M.id === this.h.id)
											return this.s.createInstance(
												v,
												M,
												N,
												this.n,
												this.actionRunner,
											);
									},
								}),
							).push(this.h, { icon: !0, label: !1 }),
							this.layout(this.b.clientWidth);
					}
					layout(I) {
						this.a.layout(new t.$pgb(I - 24 - 8 - 22, 20));
					}
					focus() {
						this.a.focus();
					}
					saveState() {
						this.g.store({
							lastValue: this.a.getValue(),
							values: this.a.getHistory(),
						});
					}
					dispose() {
						this.saveState(), super.dispose();
					}
					I() {
						this.h.checked = this.y.excluded.hasAny;
					}
				};
				(e.$zMc = $),
					(e.$zMc = $ = Ne([j(2, b.$xLc), j(3, c.$Li), j(4, s.$sqc)], $));
				let v = class extends C.$Pob {
					constructor(I, T, P, k, L, D) {
						super(I, { getActions: () => this.O() }, L, {
							actionRunner: k,
							classNames: I.class,
							anchorAlignmentProvider: () => E.AnchorAlignment.RIGHT,
							menuAsChild: !0,
						}),
							(this.a = P),
							(this.g = D);
					}
					render(I) {
						super.render(I), this.H();
					}
					O() {
						return [
							...[
								b.TestFilterTerm.Failed,
								b.TestFilterTerm.Executed,
								b.TestFilterTerm.CurrentDoc,
								b.TestFilterTerm.OpenedFiles,
							].map((I) => ({
								checked: this.a.isFilteringFor(I),
								class: void 0,
								enabled: !0,
								id: I,
								label: y[I],
								run: () => this.a.toggleFilteringFor(I),
								tooltip: "",
								dispose: () => null,
							})),
							new d.$tj(),
							{
								checked: this.a.fuzzy.value,
								class: void 0,
								enabled: !0,
								id: "fuzzy",
								label: (0, a.localize)(10782, null),
								run: () => (this.a.fuzzy.value = !this.a.fuzzy.value),
								tooltip: "",
							},
							new d.$tj(),
							{
								checked: this.a.isFilteringFor(b.TestFilterTerm.Hidden),
								class: void 0,
								enabled: this.g.excluded.hasAny,
								id: "showExcluded",
								label: (0, a.localize)(10783, null),
								run: () => this.a.toggleFilteringFor(b.TestFilterTerm.Hidden),
								tooltip: "",
							},
							{
								class: void 0,
								enabled: this.g.excluded.hasAny,
								id: "removeExcluded",
								label: (0, a.localize)(10784, null),
								run: async () => this.g.excluded.clear(),
								tooltip: "",
							},
						];
					}
					H() {
						this.element.classList.toggle("checked", this._action.checked);
					}
				};
				v = Ne([j(4, h.$Xxb), j(5, s.$sqc)], v);
			},
		),
		define(
			de[3777],
			he([
				1, 0, 33, 29, 94, 918, 37, 9, 47, 74, 913, 61, 4, 113, 39, 41, 62, 327,
				1738, 623, 66, 18, 53, 269, 10, 32, 3, 3759, 5, 23, 65, 434, 2531,
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
					(e.$_Xc = void 0),
					(h = mt(h));
				let M = class {
					constructor(A, R, O, B, U, z, F, x, H, q, V, G, K) {
						(this.g = A),
							(this.h = R),
							(this.i = O),
							(this.j = B),
							(this.k = U),
							(this.l = z),
							(this.m = F),
							(this.n = x),
							(this.o = H),
							(this.p = q),
							(this.q = V),
							(this.r = G),
							(this.s = K),
							(this.b = new Map()),
							(this.c = void 0),
							(this.f = new I.$Zc()),
							r.$lM.onDidChange(() => this.t()),
							z.onDidChangeConfiguration(this.A, this, this.f),
							q.onDidChangeActiveWebviewEditor(this.B, this, this.f),
							(this.a = this.s.createInstance(T.$$Xc));
					}
					async t() {
						if (!this.c || !this.d) return;
						const A = await this.z(this.d);
						this.c && this.c.webview.setHtml(A);
					}
					async show(A, R) {
						const O = await this.u(A, R);
						this.d = O;
						const B = await this.z(O),
							U = h.localize(11055, null, A),
							z = this.m.activeEditorPane;
						if (this.c)
							this.c.setName(U),
								this.c.webview.setHtml(B),
								this.p.revealWebview(
									this.c,
									z ? z.group : this.n.activeGroup,
									!1,
								);
						else {
							(this.c = this.p.openWebview(
								{
									title: U,
									options: {
										tryRestoreScrollPosition: !0,
										enableFindWidget: !0,
										disableServiceWorker: !0,
									},
									contentOptions: { localResourceRoots: [], allowScripts: !0 },
									extension: void 0,
								},
								"releaseNotes",
								U,
								{ group: l.$JY, preserveFocus: !1 },
							)),
								this.c.webview.onDidClickLink((x) => this.v(d.URI.parse(x)));
							const F = new I.$Zc();
							F.add(
								this.c.webview.onMessage((x) => {
									if (x.message.type === "showReleaseNotes")
										this.l.updateValue(
											"update.showReleaseNotes",
											x.message.value,
										);
									else if (x.message.type === "clickSetting") {
										const H =
												this.c?.webview.container.offsetLeft +
												x.message.value.x,
											q =
												this.c?.webview.container.offsetTop + x.message.value.y;
										this.a.updateSetting(
											d.URI.parse(x.message.value.uri),
											H,
											q,
										);
									}
								}),
							),
								F.add(
									this.c.onWillDispose(() => {
										F.dispose(), (this.c = void 0);
									}),
								),
								this.c.webview.setHtml(B);
						}
						return !0;
					}
					async u(A, R) {
						const O = /^(\d+\.\d+)\./.exec(A);
						if (!O) throw new Error("not found");
						const z = `https://code.visualstudio.com/raw/v${O[1].replace(/\./g, "_")}.md`,
							F = h.localize(11056, null),
							x = (V) => (0, C.$nf)(V).replace(/\\/g, "\\\\"),
							H = (V) => {
								const G = (X, Y) => {
										const ie = this.h.lookupKeybinding(Y);
										return (ie && ie.getLabel()) || F;
									},
									K = (X, Y) => {
										const ie = E.$Xpb.parseKeybinding(Y);
										if (!ie) return F;
										const ne = this.h.resolveKeybinding(ie);
										return ne.length === 0 ? F : ne[0].getLabel() || F;
									},
									J = (X, Y) => {
										const ie = G(X, Y);
										return ie && `<code title="${Y}">${x(ie)}</code>`;
									},
									W = (X, Y) => {
										const ie = K(X, Y);
										return ie && `<code title="${Y}">${x(ie)}</code>`;
									};
								return V.replace(/`kb\(([a-z.\d\-]+)\)`/gi, J)
									.replace(/`kbstyle\(([^\)]+)\)`/gi, W)
									.replace(/kb\(([a-z.\d\-]+)\)/gi, (X, Y) =>
										(0, w.$gl)(G(X, Y)),
									)
									.replace(/kbstyle\(([^\)]+)\)/gi, (X, Y) =>
										(0, w.$gl)(K(X, Y)),
									);
							},
							q = async () => {
								let V;
								try {
									if (R) {
										const G = this.o
											.getActiveCodeEditor()
											?.getModel()
											?.getValue();
										V = G ? G.substring(G.indexOf("#")) : void 0;
									} else
										V = await (0, o.$Fq)(
											await this.k.request(
												{ url: z },
												t.CancellationToken.None,
											),
										);
								} catch {
									throw new Error("Failed to fetch release notes");
								}
								if (!V || (!/^#\s/.test(V) && !R))
									throw new Error("Invalid release notes");
								return H(V);
							};
						return R
							? q()
							: (this.b.has(A) ||
									this.b.set(
										A,
										(async () => {
											try {
												return await q();
											} catch (V) {
												throw (this.b.delete(A), V);
											}
										})(),
									),
								this.b.get(A));
					}
					async v(A) {
						A.scheme === k.Schemas.codeSetting ||
							this.w(A, "ReleaseNotes")
								.then((R) =>
									this.j.open(R, {
										allowCommands: ["workbench.action.openSettings"],
									}),
								)
								.then(void 0, i.$4);
					}
					async w(A, R, O = "1") {
						return (0, $.$Xp)(this.r, this.g) &&
							(0, $.$Zp)(this.l) === S.TelemetryLevel.USAGE &&
							A.scheme === "https" &&
							A.authority === "code.visualstudio.com"
							? A.with({
									query: `${A.query ? A.query + "&" : ""}utm_source=VsCode&utm_medium=${encodeURIComponent(R)}&utm_content=${encodeURIComponent(O)}`,
								})
							: A;
					}
					async z(A) {
						const R = (0, m.$9g)(),
							O = new D.marked.Renderer();
						O.html = this.a.getHtmlRenderer();
						const B = await (0, f.$nTc)(A, this.q, this.i, {
								shouldSanitize: !1,
								renderer: O,
							}),
							U = r.$lM.getColorMap(),
							z = U ? (0, u.$M2b)(U) : "",
							F = !!this.l.getValue("update.showReleaseNotes");
						return `<!DOCTYPE html>
		<html>
			<head>
				<base href="https://code.visualstudio.com/raw/">
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https: data:; media-src https:; style-src 'nonce-${R}' https://code.visualstudio.com; script-src 'nonce-${R}';">
				<style nonce="${R}">
					${f.$mTc}
					${z}

					/* codesetting */

					code:has(.codesetting)+code {
						display: none;
					}

					code:has(.codesetting) {
						background-color: var(--vscode-textPreformat-background);
						color: var(--vscode-textPreformat-foreground);
						padding-left: 1px;
						margin-right: 3px;
						padding-right: 0px;
					}

					code:has(.codesetting):focus {
						border: 1px solid var(--vscode-button-border, transparent);
					}

					.codesetting {
						color: var(--vscode-textPreformat-foreground);
						padding: 0px 1px 1px 0px;
						font-size: 0px;
						overflow: hidden;
						text-overflow: ellipsis;
						outline-offset: 2px !important;
						box-sizing: border-box;
						text-align: center;
						cursor: pointer;
						display: inline;
						margin-right: 3px;
					}
					.codesetting svg {
						font-size: 12px;
						text-align: center;
						cursor: pointer;
						border: 1px solid var(--vscode-button-secondaryBorder, transparent);
						outline: 1px solid transparent;
						line-height: 9px;
						margin-bottom: -5px;
						padding-left: 0px;
						padding-top: 2px;
						padding-bottom: 2px;
						padding-right: 2px;
						display: inline-block;
						text-decoration: none;
						text-rendering: auto;
						text-transform: none;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
						user-select: none;
						-webkit-user-select: none;
					}
					.codesetting .setting-name {
						font-size: 13px;
						padding-left: 2px;
						padding-right: 3px;
						padding-top: 1px;
						padding-bottom: 1px;
						margin-left: -5px;
						margin-top: -3px;
					}
					.codesetting:hover {
						color: var(--vscode-textPreformat-foreground) !important;
						text-decoration: none !important;
					}
					code:has(.codesetting):hover {
						filter: brightness(140%);
						text-decoration: none !important;
					}
					.codesetting:focus {
						outline: 0 !important;
						text-decoration: none !important;
						color: var(--vscode-button-hoverForeground) !important;
					}
					.codesetting .separator {
						width: 1px;
						height: 14px;
						margin-bottom: -3px;
						display: inline-block;
						background-color: var(--vscode-editor-background);
						font-size: 12px;
						margin-right: 8px;
					}

					header { display: flex; align-items: center; padding-top: 1em; }
				</style>
			</head>
			<body>
				${B}
				<script nonce="${R}">
					const vscode = acquireVsCodeApi();
					const container = document.createElement('p');
					container.style.display = 'flex';
					container.style.alignItems = 'center';

					const input = document.createElement('input');
					input.type = 'checkbox';
					input.id = 'showReleaseNotes';
					input.checked = ${F};
					container.appendChild(input);

					const label = document.createElement('label');
					label.htmlFor = 'showReleaseNotes';
					label.textContent = '${h.localize(11057, null)}';
					container.appendChild(label);

					const beforeElement = document.querySelector("body > h1")?.nextElementSibling;
					if (beforeElement) {
						document.body.insertBefore(container, beforeElement);
					} else {
						document.body.appendChild(container);
					}

					window.addEventListener('message', event => {
						if (event.data.type === 'showReleaseNotes') {
							input.checked = event.data.value;
						}
					});

					window.addEventListener('click', event => {
						const href = event.target.href ?? event.target.parentElement?.href ?? event.target.parentElement?.parentElement?.href;
						if (href && (href.startsWith('${k.Schemas.codeSetting}'))) {
							vscode.postMessage({ type: 'clickSetting', value: { uri: href, x: event.clientX, y: event.clientY }});
						}
					});

					window.addEventListener('keypress', event => {
						if (event.keyCode === 13) {
							if (event.target.children.length > 0 && event.target.children[0].href) {
								const clientRect = event.target.getBoundingClientRect();
								vscode.postMessage({ type: 'clickSetting', value: { uri: event.target.children[0].href, x: clientRect.right , y: clientRect.bottom }});
							}
						}
					});

					input.addEventListener('change', event => {
						vscode.postMessage({ type: 'showReleaseNotes', value: input.checked }, '*');
					});
				</script>
			</body>
		</html>`;
					}
					A(A) {
						A.affectsConfiguration("update.showReleaseNotes") && this.C();
					}
					B(A) {
						A && A === this.c && this.C();
					}
					C() {
						this.c &&
							this.c.webview.postMessage({
								type: "showReleaseNotes",
								value: this.l.getValue("update.showReleaseNotes"),
							});
					}
				};
				(e.$_Xc = M),
					(e.$_Xc = M =
						Ne(
							[
								j(0, c.$Ti),
								j(1, n.$uZ),
								j(2, a.$nM),
								j(3, g.$7rb),
								j(4, o.$Aq),
								j(5, v.$gj),
								j(6, l.$IY),
								j(7, s.$EY),
								j(8, L.$dtb),
								j(9, b.$qnc),
								j(10, y.$q2),
								j(11, p.$Bk),
								j(12, P.$Li),
							],
							M,
						));
			},
		),
		define(
			de[3778],
			he([1, 0, 4, 99, 11, 129, 133]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends w.$3X {
					static {
						this.ID = "workbench.profiles.actions.createTemporaryProfile";
					}
					static {
						this.TITLE = (0, t.localize2)(11147, "Create a Temporary Profile");
					}
					constructor() {
						super({
							id: d.ID,
							title: d.TITLE,
							category: C.$Z8,
							f1: !0,
							precondition: C.$38,
						});
					}
					async run(r) {
						return r.get(C.$Q8).createAndEnterTransientProfile();
					}
				}
				(0, w.$4X)(d),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.profiles.actions.cleanupProfiles",
									title: (0, t.localize2)(11148, "Cleanup Profiles"),
									category: i.$ck.Developer,
									f1: !0,
									precondition: C.$38,
								});
							}
							async run(r) {
								return r.get(E.$Xl).cleanUp();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.profiles.actions.resetWorkspaces",
									title: (0, t.localize2)(
										11149,
										"Reset Workspace Profiles Associations",
									),
									category: i.$ck.Developer,
									f1: !0,
									precondition: C.$38,
								});
							}
							async run(r) {
								return r.get(E.$Xl).resetWorkspaces();
							}
						},
					);
			},
		),
		define(
			de[3779],
			he([
				1, 0, 4, 187, 586, 15, 30, 25, 85, 261, 22, 42, 81, 18, 40, 131, 68, 17,
				188, 104, 133, 129, 29,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y3c =
						e.EditableConfigurationTarget =
						e.$x3c =
						e.ConfigurationEditingErrorCode =
							void 0),
					(t = mt(t)),
					(i = mt(i));
				var $;
				(function (T) {
					(T[(T.ERROR_UNKNOWN_KEY = 0)] = "ERROR_UNKNOWN_KEY"),
						(T[(T.ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION = 1)] =
							"ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION"),
						(T[(T.ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE = 2)] =
							"ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE"),
						(T[(T.ERROR_INVALID_FOLDER_CONFIGURATION = 3)] =
							"ERROR_INVALID_FOLDER_CONFIGURATION"),
						(T[(T.ERROR_INVALID_USER_TARGET = 4)] =
							"ERROR_INVALID_USER_TARGET"),
						(T[(T.ERROR_INVALID_WORKSPACE_TARGET = 5)] =
							"ERROR_INVALID_WORKSPACE_TARGET"),
						(T[(T.ERROR_INVALID_FOLDER_TARGET = 6)] =
							"ERROR_INVALID_FOLDER_TARGET"),
						(T[(T.ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION = 7)] =
							"ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION"),
						(T[(T.ERROR_NO_WORKSPACE_OPENED = 8)] =
							"ERROR_NO_WORKSPACE_OPENED"),
						(T[(T.ERROR_CONFIGURATION_FILE_DIRTY = 9)] =
							"ERROR_CONFIGURATION_FILE_DIRTY"),
						(T[(T.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE = 10)] =
							"ERROR_CONFIGURATION_FILE_MODIFIED_SINCE"),
						(T[(T.ERROR_INVALID_CONFIGURATION = 11)] =
							"ERROR_INVALID_CONFIGURATION"),
						(T[(T.ERROR_POLICY_CONFIGURATION = 12)] =
							"ERROR_POLICY_CONFIGURATION"),
						(T[(T.ERROR_INTERNAL = 13)] = "ERROR_INTERNAL");
				})($ || (e.ConfigurationEditingErrorCode = $ = {}));
				class v extends y.$fb {
					constructor(P, k) {
						super(P), (this.code = k);
					}
				}
				e.$x3c = v;
				var S;
				(function (T) {
					(T[(T.USER_LOCAL = 1)] = "USER_LOCAL"),
						(T[(T.USER_REMOTE = 2)] = "USER_REMOTE"),
						(T[(T.WORKSPACE = 3)] = "WORKSPACE"),
						(T[(T.WORKSPACE_FOLDER = 4)] = "WORKSPACE_FOLDER");
				})(S || (e.EditableConfigurationTarget = S = {}));
				let I = class {
					constructor(P, k, L, D, M, N, A, R, O, B, U, z) {
						(this.b = P),
							(this.c = k),
							(this.d = L),
							(this.e = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.i = R),
							(this.j = O),
							(this.k = B),
							(this.l = U),
							(this.m = z),
							(this.a = new E.$Th());
					}
					async writeConfiguration(P, k, L = {}) {
						const D = this.F(P, k, L.scopes || {});
						return this.a.queue(async () => {
							try {
								await this.n(D, L);
							} catch (M) {
								if (L.donotNotifyError) throw M;
								await this.t(M, D, L.scopes);
							}
						});
					}
					async n(P, k) {
						await this.E(P.target, P, !k.handleDirtyFile, k.scopes || {});
						const L = P.resource,
							D = await this.C(L);
						try {
							const M = this.s(D.object.textEditorModel);
							await this.o(P, D.object.textEditorModel, M, k);
						} finally {
							D.dispose();
						}
					}
					async o(P, k, L, D) {
						if (this.D(k.getValue(), P))
							throw this.y($.ERROR_INVALID_CONFIGURATION, P.target, P);
						if (this.i.isDirty(k.uri) && D.handleDirtyFile)
							switch (D.handleDirtyFile) {
								case "save":
									await this.p(k, P);
									break;
								case "revert":
									await this.i.revert(k.uri);
									break;
							}
						const M = this.r(P, k.getValue(), L)[0];
						M && this.q(M, k) && (await this.p(k, P));
					}
					async p(P, k) {
						try {
							await this.i.save(P.uri, { ignoreErrorHandler: !0 });
						} catch (L) {
							throw L.fileOperationResult ===
								u.FileOperationResult.FILE_MODIFIED_SINCE
								? this.y($.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE, k.target, k)
								: new v(
										t.localize(12114, null, this.A(k.target), L.message),
										$.ERROR_INTERNAL,
									);
						}
					}
					q(P, k) {
						const L = k.getPositionAt(P.offset),
							D = k.getPositionAt(P.offset + P.length),
							M = new o.$iL(L.lineNumber, L.column, D.lineNumber, D.column),
							N = k.getValueInRange(M);
						if (P.content !== N) {
							const A = N
								? f.$jL.replace(M, P.content)
								: f.$jL.insert(L, P.content);
							return (
								k.pushEditOperations(
									[new b.$kL(L.lineNumber, L.column, L.lineNumber, L.column)],
									[A],
									() => [],
								),
								!0
							);
						}
						return !1;
					}
					r({ value: P, jsonPath: k }, L, D) {
						return k.length
							? (0, w.$ro)(L, k, P, D)
							: [
									{
										content: JSON.stringify(
											P,
											null,
											D.insertSpaces && D.tabSize
												? " ".repeat(D.tabSize)
												: "	",
										),
										length: L.length,
										offset: 0,
									},
								];
					}
					s(P) {
						const { insertSpaces: k, tabSize: L } = P.getOptions(),
							D = P.getEOL();
						return { insertSpaces: k, tabSize: L, eol: D };
					}
					async t(P, k, L) {
						switch (P.code) {
							case $.ERROR_INVALID_CONFIGURATION:
								this.u(P, k);
								break;
							case $.ERROR_CONFIGURATION_FILE_DIRTY:
								this.v(P, k, L);
								break;
							case $.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE:
								return this.n(k, { scopes: L, handleDirtyFile: "revert" });
							default:
								this.j.error(P.message);
						}
					}
					u(P, k) {
						const L =
							k.workspaceStandAloneConfigurationKey === r.$NZ
								? t.localize(12115, null)
								: k.workspaceStandAloneConfigurationKey === r.$OZ
									? t.localize(12116, null)
									: null;
						L
							? this.j.prompt(n.Severity.Error, P.message, [
									{ label: L, run: () => this.x(k.resource) },
								])
							: this.j.prompt(n.Severity.Error, P.message, [
									{ label: t.localize(12117, null), run: () => this.w(k) },
								]);
					}
					v(P, k, L) {
						const D =
							k.workspaceStandAloneConfigurationKey === r.$NZ
								? t.localize(12118, null)
								: k.workspaceStandAloneConfigurationKey === r.$OZ
									? t.localize(12119, null)
									: null;
						D
							? this.j.prompt(n.Severity.Error, P.message, [
									{
										label: t.localize(12120, null),
										run: () => {
											const M = k.key
												? `${k.workspaceStandAloneConfigurationKey}.${k.key}`
												: k.workspaceStandAloneConfigurationKey;
											this.writeConfiguration(
												k.target,
												{ key: M, value: k.value },
												{ handleDirtyFile: "save", scopes: L },
											);
										},
									},
									{ label: D, run: () => this.x(k.resource) },
								])
							: this.j.prompt(n.Severity.Error, P.message, [
									{
										label: t.localize(12121, null),
										run: () =>
											this.writeConfiguration(
												k.target,
												{ key: k.key, value: k.value },
												{ handleDirtyFile: "save", scopes: L },
											),
									},
									{ label: t.localize(12122, null), run: () => this.w(k) },
								]);
					}
					w(P) {
						const k = { jsonEditor: !0 };
						switch (P.target) {
							case S.USER_LOCAL:
								this.k.openUserSettings(k);
								break;
							case S.USER_REMOTE:
								this.k.openRemoteSettings(k);
								break;
							case S.WORKSPACE:
								this.k.openWorkspaceSettings(k);
								break;
							case S.WORKSPACE_FOLDER:
								if (P.resource) {
									const L = this.d.getWorkspaceFolder(P.resource);
									L &&
										this.k.openFolderSettings({
											folderUri: L.uri,
											jsonEditor: !0,
										});
								}
								break;
						}
					}
					x(P) {
						this.l.openEditor({ resource: P, options: { pinned: !0 } });
					}
					y(P, k, L) {
						const D = this.z(P, k, L);
						return new v(D, P);
					}
					z(P, k, L) {
						switch (P) {
							case $.ERROR_POLICY_CONFIGURATION:
								return t.localize(12123, null, L.key);
							case $.ERROR_UNKNOWN_KEY:
								return t.localize(12124, null, this.A(k), L.key);
							case $.ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION:
								return t.localize(12125, null, L.key);
							case $.ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE:
								return t.localize(12126, null, L.key);
							case $.ERROR_INVALID_FOLDER_CONFIGURATION:
								return t.localize(12127, null, L.key);
							case $.ERROR_INVALID_USER_TARGET:
								return t.localize(12128, null, L.key);
							case $.ERROR_INVALID_WORKSPACE_TARGET:
								return t.localize(12129, null, L.key);
							case $.ERROR_INVALID_FOLDER_TARGET:
								return t.localize(12130, null);
							case $.ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION:
								return t.localize(12131, null, L.key);
							case $.ERROR_NO_WORKSPACE_OPENED:
								return t.localize(12132, null, this.A(k));
							case $.ERROR_INVALID_CONFIGURATION: {
								if (L.workspaceStandAloneConfigurationKey === r.$NZ)
									return t.localize(12133, null);
								if (L.workspaceStandAloneConfigurationKey === r.$OZ)
									return t.localize(12134, null);
								switch (k) {
									case S.USER_LOCAL:
										return t.localize(12135, null);
									case S.USER_REMOTE:
										return t.localize(12136, null);
									case S.WORKSPACE:
										return t.localize(12137, null);
									case S.WORKSPACE_FOLDER: {
										let D = "<<unknown>>";
										if (L.resource) {
											const M = this.d.getWorkspaceFolder(L.resource);
											M && (D = M.name);
										}
										return t.localize(12138, null, D);
									}
									default:
										return "";
								}
							}
							case $.ERROR_CONFIGURATION_FILE_DIRTY: {
								if (L.workspaceStandAloneConfigurationKey === r.$NZ)
									return t.localize(12139, null);
								if (L.workspaceStandAloneConfigurationKey === r.$OZ)
									return t.localize(12140, null);
								switch (k) {
									case S.USER_LOCAL:
										return t.localize(12141, null);
									case S.USER_REMOTE:
										return t.localize(12142, null);
									case S.WORKSPACE:
										return t.localize(12143, null);
									case S.WORKSPACE_FOLDER: {
										let D = "<<unknown>>";
										if (L.resource) {
											const M = this.d.getWorkspaceFolder(L.resource);
											M && (D = M.name);
										}
										return t.localize(12144, null, D);
									}
									default:
										return "";
								}
							}
							case $.ERROR_CONFIGURATION_FILE_MODIFIED_SINCE:
								if (L.workspaceStandAloneConfigurationKey === r.$NZ)
									return t.localize(12145, null);
								if (L.workspaceStandAloneConfigurationKey === r.$OZ)
									return t.localize(12146, null);
								switch (k) {
									case S.USER_LOCAL:
										return t.localize(12147, null);
									case S.USER_REMOTE:
										return t.localize(12148, null);
									case S.WORKSPACE:
										return t.localize(12149, null);
									case S.WORKSPACE_FOLDER:
										return t.localize(12150, null);
								}
							case $.ERROR_INTERNAL:
								return t.localize(12151, null, this.A(k));
						}
					}
					A(P) {
						switch (P) {
							case S.USER_LOCAL:
								return t.localize(12152, null);
							case S.USER_REMOTE:
								return t.localize(12153, null);
							case S.WORKSPACE:
								return t.localize(12154, null);
							case S.WORKSPACE_FOLDER:
								return t.localize(12155, null);
							default:
								return "";
						}
					}
					B(P) {
						const k = this.m.extUri.basename(P);
						switch (k.substr(0, k.length - this.m.extUri.extname(P).length)) {
							case r.$NZ:
								return r.$SZ;
							default:
								return "{}";
						}
					}
					async C(P) {
						return (
							(await this.g.exists(P)) ||
								(await this.i.write(P, this.B(P), { encoding: "utf8" })),
							this.h.createModelReference(P)
						);
					}
					D(P, k) {
						if (k.workspaceStandAloneConfigurationKey && !k.key) return !1;
						const L = [];
						return (
							i.$do(P, L, { allowTrailingComma: !0, allowEmptyContent: !0 }),
							L.length > 0
						);
					}
					async E(P, k, L, D) {
						if (this.c.inspect(k.key).policyValue !== void 0)
							throw this.y($.ERROR_POLICY_CONFIGURATION, P, k);
						const N = C.$Io
							.as(h.$No.Configuration)
							.getConfigurationProperties()[k.key]?.scope;
						if (
							!k.workspaceStandAloneConfigurationKey &&
							this.c.keys().default.indexOf(k.key) < 0 &&
							!h.$Xo.test(k.key) &&
							k.value !== void 0
						)
							throw this.y($.ERROR_UNKNOWN_KEY, P, k);
						if (
							k.workspaceStandAloneConfigurationKey &&
							k.workspaceStandAloneConfigurationKey !== r.$NZ &&
							(P === S.USER_LOCAL || P === S.USER_REMOTE)
						)
							throw this.y($.ERROR_INVALID_USER_TARGET, P, k);
						if (
							(P === S.WORKSPACE || P === S.WORKSPACE_FOLDER) &&
							this.d.getWorkbenchState() === d.WorkbenchState.EMPTY
						)
							throw this.y($.ERROR_NO_WORKSPACE_OPENED, P, k);
						if (
							P === S.WORKSPACE &&
							!k.workspaceStandAloneConfigurationKey &&
							!h.$Xo.test(k.key)
						) {
							if (N === h.ConfigurationScope.APPLICATION)
								throw this.y(
									$.ERROR_INVALID_WORKSPACE_CONFIGURATION_APPLICATION,
									P,
									k,
								);
							if (N === h.ConfigurationScope.MACHINE)
								throw this.y(
									$.ERROR_INVALID_WORKSPACE_CONFIGURATION_MACHINE,
									P,
									k,
								);
						}
						if (P === S.WORKSPACE_FOLDER) {
							if (!k.resource)
								throw this.y($.ERROR_INVALID_FOLDER_TARGET, P, k);
							if (
								!k.workspaceStandAloneConfigurationKey &&
								!h.$Xo.test(k.key) &&
								N !== void 0 &&
								!r.$MZ.includes(N)
							)
								throw this.y($.ERROR_INVALID_FOLDER_CONFIGURATION, P, k);
						}
						if (
							D.overrideIdentifiers?.length &&
							N !== h.ConfigurationScope.LANGUAGE_OVERRIDABLE
						)
							throw this.y(
								$.ERROR_INVALID_RESOURCE_LANGUAGE_CONFIGURATION,
								P,
								k,
							);
						if (!k.resource) throw this.y($.ERROR_INVALID_FOLDER_TARGET, P, k);
						if (L && this.i.isDirty(k.resource))
							throw this.y($.ERROR_CONFIGURATION_FILE_DIRTY, P, k);
					}
					F(P, k, L) {
						if (k.key) {
							const O = P === S.USER_LOCAL ? r.$QZ : r.$PZ,
								B = Object.keys(O);
							for (const U of B) {
								const z = this.H(P, U, O[U], L.resource, void 0);
								if (k.key === U) {
									const x = this.G(z) ? [U] : [];
									return {
										key: x[x.length - 1],
										jsonPath: x,
										value: k.value,
										resource: z ?? void 0,
										workspaceStandAloneConfigurationKey: U,
										target: P,
									};
								}
								const F = `${U}.`;
								if (k.key.indexOf(F) === 0) {
									const x = this.G(z)
										? [U, k.key.substr(F.length)]
										: [k.key.substr(F.length)];
									return {
										key: x[x.length - 1],
										jsonPath: x,
										value: k.value,
										resource: z ?? void 0,
										workspaceStandAloneConfigurationKey: U,
										target: P,
									};
								}
							}
						}
						const D = k.key,
							N = C.$Io.as(h.$No.Configuration).getConfigurationProperties()[
								D
							]?.scope;
						let A = L.overrideIdentifiers?.length
							? [(0, h.$Zo)(L.overrideIdentifiers), D]
							: [D];
						if (P === S.USER_LOCAL || P === S.USER_REMOTE)
							return {
								key: D,
								jsonPath: A,
								value: k.value,
								resource: this.H(P, D, "", null, N) ?? void 0,
								target: P,
							};
						const R = this.H(P, D, r.$xZ, L.resource, N);
						return (
							this.G(R) && (A = ["settings", ...A]),
							{
								key: D,
								jsonPath: A,
								value: k.value,
								resource: R ?? void 0,
								target: P,
							}
						);
					}
					G(P) {
						const k = this.d.getWorkspace();
						return !!(
							k.configuration &&
							P &&
							k.configuration.fsPath === P.fsPath
						);
					}
					H(P, k, L, D, M) {
						if (P === S.USER_LOCAL)
							return k === r.$NZ
								? this.e.currentProfile.tasksResource
								: !this.e.currentProfile.isDefault &&
										this.c.isSettingAppliedForAllProfiles(k)
									? this.f.defaultProfile.settingsResource
									: this.e.currentProfile.settingsResource;
						if (P === S.USER_REMOTE) return this.b;
						const N = this.d.getWorkbenchState();
						if (N !== d.WorkbenchState.EMPTY) {
							const A = this.d.getWorkspace();
							if (P === S.WORKSPACE) {
								if (N === d.WorkbenchState.WORKSPACE)
									return A.configuration ?? null;
								if (N === d.WorkbenchState.FOLDER)
									return A.folders[0].toResource(L);
							}
							if (P === S.WORKSPACE_FOLDER && D) {
								const R = this.d.getWorkspaceFolder(D);
								if (R) return R.toResource(L);
							}
						}
						return null;
					}
				};
				(e.$y3c = I),
					(e.$y3c = I =
						Ne(
							[
								j(1, r.$RZ),
								j(2, d.$Vi),
								j(3, s.$P8),
								j(4, l.$Xl),
								j(5, u.$ll),
								j(6, a.$MO),
								j(7, m.$kZ),
								j(8, n.$4N),
								j(9, g.$7Z),
								j(10, c.$IY),
								j(11, p.$Vl),
							],
							I,
						));
			},
		),
		define(
			de[3780],
			he([
				1, 0, 9, 6, 59, 82, 3, 15, 250, 25, 950, 10, 1634, 1794, 261, 30, 81,
				256, 3779, 3251, 240, 78, 55, 52, 163, 174, 24, 53, 708, 28, 4, 940,
				423, 54, 19, 224, 75, 7,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F3c = void 0);
				function U(K, J) {
					return K.isDefault || K.useDefaultFlags?.settings
						? J
							? n.$JZ
							: void 0
						: J
							? n.$IZ
							: n.$HZ;
				}
				class z extends r.$6i {
					constructor() {
						super(...arguments), (this.initialized = !1);
					}
				}
				class F extends C.$1c {
					get restrictedSettings() {
						return this.M;
					}
					constructor(
						{ remoteAuthority: J, configurationCache: W },
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
					) {
						if (
							(super(),
							(this.R = Y),
							(this.S = ie),
							(this.U = ne),
							(this.W = ee),
							(this.X = _),
							(this.Y = te),
							(this.n = !1),
							(this.s = null),
							(this.w = null),
							(this.F = this.D(new i.$re())),
							(this.onDidChangeConfiguration = this.F.event),
							(this.G = this.D(new i.$re())),
							(this.onWillChangeWorkspaceFolders = this.G.event),
							(this.H = this.D(new i.$re())),
							(this.onDidChangeWorkspaceFolders = this.H.event),
							(this.I = this.D(new i.$re())),
							(this.onDidChangeWorkspaceName = this.I.event),
							(this.J = this.D(new i.$re())),
							(this.onDidChangeWorkbenchState = this.J.event),
							(this.L = !0),
							(this.M = { default: [] }),
							(this.N = this.D(new i.$re())),
							(this.onDidChangeRestrictedSettings = this.N.event),
							(this.O = g.$Io.as(p.$No.Configuration)),
							(this.g = new d.$Lh()),
							(this.h = new d.$Lh()),
							(this.q = this.D(new b.$z3c(W, X, te))),
							(this.r =
								Q instanceof D.$Mo
									? new h.$ap()
									: this.D(new h.$bp(this.q, Q, te))),
							(this.j = W),
							(this.m = new c.$w3c(
								this.q.configurationModel,
								this.r.configurationModel,
								u.$6o.createEmptyModel(te),
								u.$6o.createEmptyModel(te),
								u.$6o.createEmptyModel(te),
								u.$6o.createEmptyModel(te),
								new w.$Gc(),
								u.$6o.createEmptyModel(te),
								new w.$Gc(),
								this.c,
								te,
							)),
							(this.t = this.D(new C.$Zc())),
							this.Z(),
							(this.u = this.D(
								new b.$B3c(
									Y.currentProfile.settingsResource,
									Y.currentProfile.tasksResource,
									{ scopes: U(Y.currentProfile, !!J) },
									ne,
									_,
									te,
								),
							)),
							(this.z = new w.$Gc()),
							this.D(this.u.onDidChangeConfiguration((Z) => this.wb(Z))),
							J)
						) {
							const Z = (this.w = this.D(new b.$C3c(J, W, ne, _, ee, te)));
							this.D(
								Z.onDidInitialize((se) => {
									this.D(Z.onDidChangeConfiguration((re) => this.xb(re))),
										this.xb(se),
										this.g.open();
								}),
							);
						} else this.g.open();
						(this.y = this.D(new b.$D3c(W, ne, _, te))),
							this.D(
								this.y.onDidUpdateConfiguration((Z) => {
									this.yb(Z).then(() => {
										(this.c.initialized = this.y.initialized), this.gb(Z);
									});
								}),
							),
							this.D(
								this.q.onDidChangeConfiguration(
									({ properties: Z, defaults: se }) => this.tb(se, Z),
								),
							),
							this.D(this.r.onDidChangeConfiguration((Z) => this.ub(Z))),
							this.D(Y.onDidChangeCurrentProfile((Z) => this.sb(Z))),
							(this.C = new d.$Th());
					}
					Z() {
						this.t.clear(),
							this.R.currentProfile.isDefault ||
							this.R.currentProfile.useDefaultFlags?.settings
								? (this.s = null)
								: ((this.s = this.t.add(
										this.D(new b.$A3c(this.S, this.U, this.X, this.Y)),
									)),
									this.t.add(
										this.s.onDidChangeConfiguration((J) => this.vb(J)),
									));
					}
					async getCompleteWorkspace() {
						return await this.h.wait(), this.getWorkspace();
					}
					getWorkspace() {
						return this.c;
					}
					asRelativePath(J, W) {
						let X = this.getWorkspaceFolder(J);
						if (!X) {
							const ie = this.getWorkspace(),
								ne = (0, I.$Sb)(ie.folders);
							ne &&
								J.scheme !== ne.uri.scheme &&
								J.path.startsWith(N.$lc.sep) &&
								(X = this.getWorkspaceFolder(ne.uri.with({ path: J.path })));
						}
						if (!X) return J.fsPath;
						W === void 0 && (W = this.getWorkspace().folders.length > 1);
						let Y = (0, A.$ph)(X.uri, J);
						return (
							W && X.name && Y && (Y = N.$lc.join(X.name, Y)), Y ?? J.fsPath
						);
					}
					resolveRelativePath(J, W) {
						if (J[0] === N.$lc.sep) return t.URI.file(J);
						const X = this.getWorkspace().folders;
						if (((W = W ?? X.length > 1), X.length === 0)) return t.URI.file(J);
						if (W) {
							const ie = J.split(N.$lc.sep)[0],
								ne = X.find((ee) => ee.name === ie);
							if (ne)
								return (
									(J = J.substring(ie.length + 1)),
									ne.uri.with({ path: N.$lc.join(ne.uri.path, J) })
								);
						}
						const Y = X[0];
						return Y.uri.with({ path: N.$lc.join(Y.uri.path, J) });
					}
					getWorkbenchState() {
						return this.c.configuration
							? r.WorkbenchState.WORKSPACE
							: this.c.folders.length === 1
								? r.WorkbenchState.FOLDER
								: r.WorkbenchState.EMPTY;
					}
					getWorkspaceFolder(J) {
						return this.c.getFolder(J);
					}
					addFolders(J, W) {
						return this.updateFolders(J, [], W);
					}
					removeFolders(J) {
						return this.updateFolders([], J);
					}
					async updateFolders(J, W, X) {
						return this.C.queue(() => this.$(J, W, X));
					}
					isInsideWorkspace(J) {
						return !!this.getWorkspaceFolder(J);
					}
					isCurrentWorkspace(J) {
						switch (this.getWorkbenchState()) {
							case r.WorkbenchState.FOLDER: {
								let W;
								return (
									t.URI.isUri(J) ? (W = J) : (0, r.$Wi)(J) && (W = J.uri),
									t.URI.isUri(W) &&
										this.X.extUri.isEqual(W, this.c.folders[0].uri)
								);
							}
							case r.WorkbenchState.WORKSPACE:
								return (0, r.$2i)(J) && this.c.id === J.id;
						}
						return !1;
					}
					async $(J, W, X) {
						if (
							this.getWorkbenchState() !== r.WorkbenchState.WORKSPACE ||
							J.length + W.length === 0
						)
							return Promise.resolve(void 0);
						let Y = !1,
							ie = this.getWorkspace().folders,
							ne = ie
								.map((ee) => ee.raw)
								.filter((ee, _) =>
									(0, o.$gRb)(ee) ? !this.bb(W, ie[_].uri) : !0,
								);
						if (((Y = ie.length !== ne.length), J.length)) {
							const ee = this.getWorkspace().configuration,
								_ = this.X.extUri.dirname(ee);
							ie = (0, o.$iRb)(ne, ee, this.X.extUri);
							const te = ie.map((Z) => Z.uri),
								Q = [];
							for (const Z of J) {
								const se = Z.uri;
								if (!this.bb(te, se)) {
									try {
										if (!(await this.U.stat(se)).isDirectory) continue;
									} catch {}
									Q.push((0, o.$hRb)(se, !1, Z.name, _, this.X.extUri));
								}
							}
							Q.length > 0 &&
								((Y = !0),
								typeof X == "number" && X >= 0 && X < ne.length
									? ((ne = ne.slice(0)), ne.splice(X, 0, ...Q))
									: (ne = [...ne, ...Q]));
						}
						return Y ? this.ab(ne) : Promise.resolve(void 0);
					}
					async ab(J) {
						if (!this.P)
							throw new Error(
								"Cannot update workspace folders because workspace service is not yet ready to accept writes.",
							);
						return (
							await this.P.invokeFunction((W) =>
								this.y.setFolders(J, W.get(M.$$Qb)),
							),
							this.yb(!1)
						);
					}
					bb(J, W) {
						return J.some((X) => this.X.extUri.isEqual(X, W));
					}
					getConfigurationData() {
						return this.m.toData();
					}
					getValue(J, W) {
						const X = typeof J == "string" ? J : void 0,
							Y = (0, a.$hj)(J) ? J : (0, a.$hj)(W) ? W : void 0;
						return this.m.getValue(X, Y);
					}
					async updateValue(J, W, X, Y, ie) {
						const ne = (0, a.$ij)(X)
								? X
								: (0, a.$hj)(X)
									? {
											resource: X.resource,
											overrideIdentifiers: X.overrideIdentifier
												? [X.overrideIdentifier]
												: void 0,
										}
									: void 0,
							ee = ne ? Y : X,
							_ = ee ? [ee] : [];
						if (
							(ne?.overrideIdentifiers &&
								((ne.overrideIdentifiers = (0, I.$Qb)(ne.overrideIdentifiers)),
								(ne.overrideIdentifiers = ne.overrideIdentifiers.length
									? ne.overrideIdentifiers
									: void 0)),
							!_.length)
						) {
							if (ne?.overrideIdentifiers && ne.overrideIdentifiers.length > 1)
								throw new Error(
									"Configuration Target is required while updating the value for multiple override identifiers",
								);
							const te = this.inspect(J, {
								resource: ne?.resource,
								overrideIdentifier: ne?.overrideIdentifiers
									? ne.overrideIdentifiers[0]
									: void 0,
							});
							_.push(...this.Kb(J, W, te)),
								(0, E.$zo)(W, te.defaultValue) &&
									_.length === 1 &&
									(_[0] === a.ConfigurationTarget.USER ||
										_[0] === a.ConfigurationTarget.USER_LOCAL) &&
									(W = void 0);
						}
						await d.Promises.settled(_.map((te) => this.Hb(J, W, te, ne, ie)));
					}
					async reloadConfiguration(J) {
						if (J === void 0) {
							this.kb();
							const W = await this.lb(!0),
								{ local: X, remote: Y } = await this.mb();
							await this.ob(), await this.qb(W, X, Y, !0);
							return;
						}
						if ((0, r.$5i)(J)) {
							await this.pb(J);
							return;
						}
						switch (J) {
							case a.ConfigurationTarget.DEFAULT:
								this.kb();
								return;
							case a.ConfigurationTarget.USER: {
								const { local: W, remote: X } = await this.mb();
								await this.qb(this.m.applicationConfiguration, W, X, !0);
								return;
							}
							case a.ConfigurationTarget.USER_LOCAL:
								await this.reloadLocalUserConfiguration();
								return;
							case a.ConfigurationTarget.USER_REMOTE:
								await this.nb();
								return;
							case a.ConfigurationTarget.WORKSPACE:
							case a.ConfigurationTarget.WORKSPACE_FOLDER:
								await this.ob();
								return;
						}
					}
					hasCachedConfigurationDefaultsOverrides() {
						return this.q.hasCachedConfigurationDefaultsOverrides();
					}
					inspect(J, W) {
						return this.m.inspect(J, W);
					}
					keys() {
						return this.m.keys();
					}
					async whenRemoteConfigurationLoaded() {
						await this.g.wait();
					}
					async initialize(J) {
						(0, s.mark)("code/willInitWorkspaceService");
						const W = this.n;
						this.n = !1;
						const X = await this.cb(J);
						await this.hb(X, W),
							this.gb(!1),
							(0, s.mark)("code/didInitWorkspaceService");
					}
					updateWorkspaceTrust(J) {
						if (this.L !== J) {
							this.L = J;
							const W = this.m.toData(),
								X = [];
							for (const ie of this.c.folders) {
								const ne = this.z.get(ie.uri);
								let ee;
								ne &&
									((ee = ne.updateWorkspaceTrust(this.L)),
									this.m.updateFolderConfiguration(ie.uri, ee)),
									X.push(ee);
							}
							this.getWorkbenchState() === r.WorkbenchState.FOLDER
								? X[0] && this.m.updateWorkspaceConfiguration(X[0])
								: this.m.updateWorkspaceConfiguration(
										this.y.updateWorkspaceTrust(this.L),
									),
								this.zb();
							let Y = [];
							this.restrictedSettings.userLocal &&
								Y.push(...this.restrictedSettings.userLocal),
								this.restrictedSettings.userRemote &&
									Y.push(...this.restrictedSettings.userRemote),
								this.restrictedSettings.workspace &&
									Y.push(...this.restrictedSettings.workspace),
								this.restrictedSettings.workspaceFolder?.forEach((ie) =>
									Y.push(...ie),
								),
								(Y = (0, I.$Qb)(Y)),
								Y.length &&
									this.Lb(
										{ keys: Y, overrides: [] },
										{ data: W, workspace: this.c },
										a.ConfigurationTarget.WORKSPACE,
									);
						}
					}
					acquireInstantiationService(J) {
						this.P = J;
					}
					isSettingAppliedForAllProfiles(J) {
						if (
							this.O.getConfigurationProperties()[J]?.scope ===
							p.ConfigurationScope.APPLICATION
						)
							return !0;
						const W = this.getValue(n.$TZ) ?? [];
						return Array.isArray(W) && W.includes(J);
					}
					async cb(J) {
						return (0, r.$2i)(J)
							? this.db(J)
							: (0, r.$Wi)(J)
								? this.eb(J)
								: this.fb(J);
					}
					async db(J) {
						await this.y.initialize(
							{ id: J.id, configPath: J.configPath },
							this.L,
						);
						const W = J.configPath,
							X = (0, o.$iRb)(this.y.getFolders(), W, this.X.extUri),
							Y = J.id,
							ie = new z(Y, X, this.y.isTransient(), W, (ne) =>
								this.X.extUri.ignorePathCasing(ne),
							);
						return (ie.initialized = this.y.initialized), ie;
					}
					eb(J) {
						const W = new z(J.id, [(0, r.$8i)(J.uri)], !1, null, (X) =>
							this.X.extUri.ignorePathCasing(X),
						);
						return (W.initialized = !0), W;
					}
					fb(J) {
						const W = new z(J.id, [], !1, null, (X) =>
							this.X.extUri.ignorePathCasing(X),
						);
						return (W.initialized = !0), Promise.resolve(W);
					}
					gb(J) {
						!this.h.isOpen() &&
							this.c.initialized &&
							(this.h.open(), this.Fb(J));
					}
					async hb(J, W) {
						const X = !!this.c;
						let Y,
							ie,
							ne = [];
						if (
							(X
								? ((Y = this.getWorkbenchState()),
									(ie = this.c.configuration
										? this.c.configuration.fsPath
										: void 0),
									(ne = this.c.folders),
									this.c.update(J))
								: (this.c = J),
							await this.jb(W),
							X)
						) {
							const ee = this.getWorkbenchState();
							Y && ee !== Y && this.J.fire(ee);
							const _ = this.c.configuration
								? this.c.configuration.fsPath
								: void 0;
							((ie && _ !== ie) || ee !== Y) && this.I.fire();
							const te = this.ib(ne, this.c.folders);
							te &&
								(te.added.length || te.removed.length || te.changed.length) &&
								(await this.Bb(te, !1), this.H.fire(te));
						}
						this.u.hasTasksLoaded ||
							this.D(
								(0, B.$egb)(O.$Bfb, () =>
									this.reloadLocalUserConfiguration(
										!1,
										this.m.localUserConfiguration,
									),
								),
							);
					}
					ib(J, W) {
						const X = { added: [], removed: [], changed: [] };
						X.added = W.filter(
							(Y) => !J.some((ie) => Y.uri.toString() === ie.uri.toString()),
						);
						for (let Y = 0; Y < J.length; Y++) {
							const ie = J[Y];
							let ne = 0;
							for (
								ne = 0;
								ne < W.length && ie.uri.toString() !== W[ne].uri.toString();
								ne++
							);
							ne < W.length
								? (Y !== ne || ie.name !== W[ne].name) && X.changed.push(ie)
								: X.removed.push(ie);
						}
						return X;
					}
					async jb(J) {
						await this.q.initialize();
						const W = this.r.initialize(),
							X = this.s
								? this.s.initialize()
								: Promise.resolve(u.$6o.createEmptyModel(this.Y)),
							Y = async () => {
								(0, s.mark)("code/willInitUserConfiguration");
								const _ = await Promise.all([
									this.u.initialize(),
									this.w
										? this.w.initialize()
										: Promise.resolve(u.$6o.createEmptyModel(this.Y)),
								]);
								if (this.s) {
									const te = await X;
									_[0] = this.u.reparse({ exclude: te.getValue(n.$TZ) });
								}
								return (0, s.mark)("code/didInitUserConfiguration"), _;
							},
							[, ie, [ne, ee]] = await Promise.all([W, X, Y()]);
						(0, s.mark)("code/willInitWorkspaceConfiguration"),
							await this.qb(ie, ne, ee, J),
							(0, s.mark)("code/didInitWorkspaceConfiguration");
					}
					kb() {
						this.tb(this.q.reload());
					}
					async lb(J) {
						if (!this.s) return u.$6o.createEmptyModel(this.Y);
						const W = await this.s.loadConfiguration();
						return J || this.vb(W), W;
					}
					async mb() {
						const [J, W] = await Promise.all([
							this.reloadLocalUserConfiguration(!0),
							this.nb(!0),
						]);
						return { local: J, remote: W };
					}
					async reloadLocalUserConfiguration(J, W) {
						const X = await this.u.reload(W);
						return J || this.wb(X), X;
					}
					async nb(J) {
						if (this.w) {
							const W = await this.w.reload();
							return J || this.xb(W), W;
						}
						return u.$6o.createEmptyModel(this.Y);
					}
					async ob() {
						const J = this.getWorkbenchState();
						if (J === r.WorkbenchState.FOLDER)
							return this.Cb(this.c.folders[0]);
						if (J === r.WorkbenchState.WORKSPACE)
							return this.y.reload().then(() => this.yb(!1));
					}
					pb(J) {
						return this.Cb(J);
					}
					async qb(J, W, X, Y) {
						this.z = new w.$Gc();
						const ie = this.c.folders,
							ne = await this.Eb(ie),
							ee = this.rb(ne),
							_ = new w.$Gc();
						ne.forEach((Q, Z) => _.set(ie[Z].uri, Q));
						const te = this.m;
						if (
							((this.m = new c.$w3c(
								this.q.configurationModel,
								this.r.configurationModel,
								J,
								W,
								X,
								ee,
								_,
								u.$6o.createEmptyModel(this.Y),
								new w.$Gc(),
								this.c,
								this.Y,
							)),
							(this.n = !0),
							Y)
						) {
							const Q = this.m.compare(te);
							this.Lb(
								Q,
								{ data: te.toData(), workspace: this.c },
								a.ConfigurationTarget.WORKSPACE,
							);
						}
						this.zb();
					}
					rb(J) {
						switch (this.getWorkbenchState()) {
							case r.WorkbenchState.FOLDER:
								return J[0];
							case r.WorkbenchState.WORKSPACE:
								return this.y.getConfiguration();
							default:
								return u.$6o.createEmptyModel(this.Y);
						}
					}
					sb(J) {
						J.join(
							(async () => {
								const W = [];
								W.push(
									this.u.reset(
										J.profile.settingsResource,
										J.profile.tasksResource,
										{ scopes: U(J.profile, !!this.w) },
									),
								),
									(J.previous.isDefault !== J.profile.isDefault ||
										!!J.previous.useDefaultFlags?.settings !=
											!!J.profile.useDefaultFlags?.settings) &&
										(this.Z(), this.s && W.push(this.lb(!0)));
								let [X, Y] = await Promise.all(W);
								(Y = Y ?? this.m.applicationConfiguration),
									this.s &&
										(X = this.u.reparse({ exclude: Y.getValue(n.$TZ) })),
									await this.qb(Y, X, this.m.remoteUserConfiguration, !0);
							})(),
						);
					}
					tb(J, W) {
						if (this.c) {
							const X = this.m.toData(),
								Y = this.m.compareAndUpdateDefaultConfiguration(J, W);
							if (
								(this.s &&
									this.m.updateApplicationConfiguration(this.s.reparse()),
								this.w &&
									(this.m.updateLocalUserConfiguration(this.u.reparse()),
									this.m.updateRemoteUserConfiguration(this.w.reparse())),
								this.getWorkbenchState() === r.WorkbenchState.FOLDER)
							) {
								const ie = this.z.get(this.c.folders[0].uri);
								ie &&
									(this.m.updateWorkspaceConfiguration(ie.reparse()),
									this.m.updateFolderConfiguration(
										this.c.folders[0].uri,
										ie.reparse(),
									));
							} else {
								this.m.updateWorkspaceConfiguration(
									this.y.reparseWorkspaceSettings(),
								);
								for (const ie of this.c.folders) {
									const ne = this.z.get(ie.uri);
									ne && this.m.updateFolderConfiguration(ie.uri, ne.reparse());
								}
							}
							this.Lb(
								Y,
								{ data: X, workspace: this.c },
								a.ConfigurationTarget.DEFAULT,
							),
								this.zb();
						}
					}
					ub(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.compareAndUpdatePolicyConfiguration(J);
						this.Lb(X, W, a.ConfigurationTarget.DEFAULT);
					}
					vb(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.applicationConfiguration.getValue(n.$TZ) ?? [],
							Y = this.m.compareAndUpdateApplicationConfiguration(J),
							ie = this.getValue(n.$TZ) ?? [],
							ne = this.O.getConfigurationProperties(),
							ee = [];
						for (const _ of Y.keys)
							if (ne[_]?.scope === p.ConfigurationScope.APPLICATION) {
								if ((ee.push(_), _ === n.$TZ)) {
									for (const te of X) ie.includes(te) || ee.push(te);
									for (const te of ie) X.includes(te) || ee.push(te);
								}
							} else ie.includes(_) && ee.push(_);
						(Y.keys = ee),
							Y.keys.includes(n.$TZ) &&
								this.m.updateLocalUserConfiguration(
									this.u.reparse({ exclude: ie }),
								),
							this.Lb(Y, W, a.ConfigurationTarget.USER);
					}
					wb(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.compareAndUpdateLocalUserConfiguration(J);
						this.Lb(X, W, a.ConfigurationTarget.USER);
					}
					xb(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.compareAndUpdateRemoteUserConfiguration(J);
						this.Lb(X, W, a.ConfigurationTarget.USER);
					}
					async yb(J) {
						if (this.c && this.c.configuration) {
							let W = (0, o.$iRb)(
								this.y.getFolders(),
								this.c.configuration,
								this.X.extUri,
							);
							if (this.c.initialized) {
								const {
									added: X,
									removed: Y,
									changed: ie,
								} = this.ib(this.c.folders, W);
								X.length || Y.length || ie.length
									? (W = await this.Gb(W))
									: (W = this.c.folders);
							}
							await this.Ab(W, this.y.getConfiguration(), J);
						}
					}
					zb() {
						const J = [],
							W = this.O.getConfigurationProperties(),
							X = Object.keys(W)
								.filter((le) => W[le].restricted)
								.sort((le, oe) => le.localeCompare(oe)),
							Y = (0, I.$Ib)(X, this.M.default, (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...Y.added, ...Y.removed);
						const ie = (this.s?.getRestrictedSettings() || []).sort((le, oe) =>
								le.localeCompare(oe),
							),
							ne = (0, I.$Ib)(ie, this.M.application || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...ne.added, ...ne.removed);
						const ee = this.u
								.getRestrictedSettings()
								.sort((le, oe) => le.localeCompare(oe)),
							_ = (0, I.$Ib)(ee, this.M.userLocal || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(..._.added, ..._.removed);
						const te = (this.w?.getRestrictedSettings() || []).sort((le, oe) =>
								le.localeCompare(oe),
							),
							Q = (0, I.$Ib)(te, this.M.userRemote || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...Q.added, ...Q.removed);
						const Z = new w.$Gc();
						for (const le of this.c.folders) {
							const ae = (
								this.z.get(le.uri)?.getRestrictedSettings() || []
							).sort((ye, ue) => ye.localeCompare(ue));
							ae.length && Z.set(le.uri, ae);
							const pe = this.M.workspaceFolder?.get(le.uri) || [],
								$e = (0, I.$Ib)(ae, pe, (ye, ue) => ye.localeCompare(ue));
							J.push(...$e.added, ...$e.removed);
						}
						const se =
								this.getWorkbenchState() === r.WorkbenchState.WORKSPACE
									? this.y
											.getRestrictedSettings()
											.sort((le, oe) => le.localeCompare(oe))
									: this.c.folders[0]
										? Z.get(this.c.folders[0].uri) || []
										: [],
							re = (0, I.$Ib)(se, this.M.workspace || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...re.added, ...re.removed),
							J.length &&
								((this.M = {
									default: X,
									application: ie.length ? ie : void 0,
									userLocal: ee.length ? ee : void 0,
									userRemote: te.length ? te : void 0,
									workspace: se.length ? se : void 0,
									workspaceFolder: Z.size ? Z : void 0,
								}),
								this.N.fire(this.restrictedSettings));
					}
					async Ab(J, W, X) {
						const Y = { data: this.m.toData(), workspace: this.c },
							ie = this.m.compareAndUpdateWorkspaceConfiguration(W),
							ne = this.ib(this.c.folders, J);
						if (ne.added.length || ne.removed.length || ne.changed.length) {
							this.c.folders = J;
							const ee = await this.Db();
							await this.Bb(ne, X),
								this.Lb(ee, Y, a.ConfigurationTarget.WORKSPACE_FOLDER),
								this.H.fire(ne);
						} else this.Lb(ie, Y, a.ConfigurationTarget.WORKSPACE);
						this.zb();
					}
					async Bb(J, W) {
						const X = [];
						this.G.fire({
							join(Y) {
								X.push(Y);
							},
							changes: J,
							fromCache: W,
						});
						try {
							await d.Promises.settled(X);
						} catch {}
					}
					async Cb(J) {
						const [W] = await this.Eb([J]),
							X = { data: this.m.toData(), workspace: this.c },
							Y = this.m.compareAndUpdateFolderConfiguration(J.uri, W);
						if (this.getWorkbenchState() === r.WorkbenchState.FOLDER) {
							const ie = this.m.compareAndUpdateWorkspaceConfiguration(W);
							this.Lb((0, u.$0o)(Y, ie), X, a.ConfigurationTarget.WORKSPACE);
						} else this.Lb(Y, X, a.ConfigurationTarget.WORKSPACE_FOLDER);
						this.zb();
					}
					async Db() {
						const J = [];
						for (const X of this.z.keys())
							this.c.folders.filter(
								(Y) => Y.uri.toString() === X.toString(),
							)[0] ||
								(this.z.get(X).dispose(),
								this.z.delete(X),
								J.push(this.m.compareAndDeleteFolderConfiguration(X)));
						const W = this.c.folders.filter((X) => !this.z.has(X.uri));
						return (
							W.length &&
								(await this.Eb(W)).forEach((Y, ie) => {
									J.push(
										this.m.compareAndUpdateFolderConfiguration(W[ie].uri, Y),
									);
								}),
							(0, u.$0o)(...J)
						);
					}
					Eb(J) {
						return Promise.all([
							...J.map((W) => {
								let X = this.z.get(W.uri);
								return (
									X ||
										((X = new b.$E3c(
											!this.n,
											W,
											n.$vZ,
											this.getWorkbenchState(),
											this.L,
											this.U,
											this.X,
											this.Y,
											this.j,
										)),
										this.D(X.onDidChange(() => this.Cb(W))),
										this.z.set(W.uri, this.D(X))),
									X.loadConfiguration()
								);
							}),
						]);
					}
					async Fb(J) {
						const W = await this.Gb(this.c.folders),
							{ removed: X } = this.ib(this.c.folders, W);
						X.length && (await this.Ab(W, this.y.getConfiguration(), J));
					}
					async Gb(J) {
						const W = [];
						for (const X of J) {
							try {
								if (!(await this.U.stat(X.uri)).isDirectory) continue;
							} catch (Y) {
								this.Y.warn(
									`Ignoring the error while validating workspace folder ${X.uri.toString()} - ${(0, v.$xj)(Y)}`,
								);
							}
							W.push(X);
						}
						return W;
					}
					async Hb(J, W, X, Y, ie) {
						if (!this.P)
							throw new Error(
								"Cannot write configuration because the configuration service is not yet ready to accept writes.",
							);
						if (X === a.ConfigurationTarget.DEFAULT)
							throw new Error("Invalid configuration target");
						if (X === a.ConfigurationTarget.MEMORY) {
							const ee = { data: this.m.toData(), workspace: this.c };
							this.m.updateValue(J, W, Y),
								this.Lb(
									{
										keys: Y?.overrideIdentifiers?.length
											? [(0, p.$Zo)(Y.overrideIdentifiers), J]
											: [J],
										overrides: Y?.overrideIdentifiers?.length
											? Y.overrideIdentifiers.map((_) => [_, [J]])
											: [],
									},
									ee,
									X,
								);
							return;
						}
						const ne = this.Mb(X, J);
						if (!ne) throw new Error("Invalid configuration target");
						if (ne === f.EditableConfigurationTarget.USER_REMOTE && !this.w)
							throw new Error("Invalid configuration target");
						if (
							Y?.overrideIdentifiers?.length &&
							Y.overrideIdentifiers.length > 1
						) {
							const ee = this.Jb(ne, Y.resource);
							if (ee) {
								const _ = Y.overrideIdentifiers.sort(),
									te = ee.overrides.find((Q) =>
										(0, I.$yb)([...Q.identifiers].sort(), _),
									);
								te && (Y.overrideIdentifiers = te.identifiers);
							}
						}
						switch (
							((this.Q = this.Q ?? this.Ib(this.P)),
							await (await this.Q).writeConfiguration(
								ne,
								{ key: J, value: W },
								{ scopes: Y, ...ie },
							),
							ne)
						) {
							case f.EditableConfigurationTarget.USER_LOCAL:
								this.s && this.isSettingAppliedForAllProfiles(J)
									? await this.lb()
									: await this.reloadLocalUserConfiguration();
								return;
							case f.EditableConfigurationTarget.USER_REMOTE:
								return this.nb().then(() => {});
							case f.EditableConfigurationTarget.WORKSPACE:
								return this.ob();
							case f.EditableConfigurationTarget.WORKSPACE_FOLDER: {
								const ee =
									Y && Y.resource ? this.c.getFolder(Y.resource) : null;
								if (ee) return this.pb(ee);
							}
						}
					}
					async Ib(J) {
						const W = (await this.W.getEnvironment())?.settingsPath ?? null;
						return J.createInstance(f.$y3c, W);
					}
					Jb(J, W) {
						switch (J) {
							case f.EditableConfigurationTarget.USER_LOCAL:
								return this.m.localUserConfiguration;
							case f.EditableConfigurationTarget.USER_REMOTE:
								return this.m.remoteUserConfiguration;
							case f.EditableConfigurationTarget.WORKSPACE:
								return this.m.workspaceConfiguration;
							case f.EditableConfigurationTarget.WORKSPACE_FOLDER:
								return W ? this.m.folderConfigurations.get(W) : void 0;
						}
					}
					getConfigurationModel(J, W) {
						switch (J) {
							case a.ConfigurationTarget.USER_LOCAL:
								return this.m.localUserConfiguration;
							case a.ConfigurationTarget.USER_REMOTE:
								return this.m.remoteUserConfiguration;
							case a.ConfigurationTarget.WORKSPACE:
								return this.m.workspaceConfiguration;
							case a.ConfigurationTarget.WORKSPACE_FOLDER:
								return W ? this.m.folderConfigurations.get(W) : void 0;
							default:
								return;
						}
					}
					Kb(J, W, X) {
						if ((0, E.$zo)(W, X.value)) return [];
						const Y = [];
						return (
							X.workspaceFolderValue !== void 0 &&
								Y.push(a.ConfigurationTarget.WORKSPACE_FOLDER),
							X.workspaceValue !== void 0 &&
								Y.push(a.ConfigurationTarget.WORKSPACE),
							X.userRemoteValue !== void 0 &&
								Y.push(a.ConfigurationTarget.USER_REMOTE),
							X.userLocalValue !== void 0 &&
								Y.push(a.ConfigurationTarget.USER_LOCAL),
							X.applicationValue !== void 0 &&
								Y.push(a.ConfigurationTarget.APPLICATION),
							W === void 0 ? Y : [Y[0] || a.ConfigurationTarget.USER]
						);
					}
					Lb(J, W, X) {
						if (J.keys.length) {
							X !== a.ConfigurationTarget.DEFAULT &&
								this.Y.debug(
									`Configuration keys changed in ${(0, a.$jj)(X)} target`,
									...J.keys,
								);
							const Y = new u.$$o(J, W, this.m, this.c, this.Y);
							(Y.source = X), this.F.fire(Y);
						}
					}
					Mb(J, W) {
						if (J === a.ConfigurationTarget.APPLICATION)
							return f.EditableConfigurationTarget.USER_LOCAL;
						if (J === a.ConfigurationTarget.USER) {
							if (this.w) {
								const X = this.O.getConfigurationProperties()[W]?.scope;
								if (
									X === p.ConfigurationScope.MACHINE ||
									X === p.ConfigurationScope.MACHINE_OVERRIDABLE ||
									this.inspect(W).userRemoteValue !== void 0
								)
									return f.EditableConfigurationTarget.USER_REMOTE;
							}
							return f.EditableConfigurationTarget.USER_LOCAL;
						}
						return J === a.ConfigurationTarget.USER_LOCAL
							? f.EditableConfigurationTarget.USER_LOCAL
							: J === a.ConfigurationTarget.USER_REMOTE
								? f.EditableConfigurationTarget.USER_REMOTE
								: J === a.ConfigurationTarget.WORKSPACE
									? f.EditableConfigurationTarget.WORKSPACE
									: J === a.ConfigurationTarget.WORKSPACE_FOLDER
										? f.EditableConfigurationTarget.WORKSPACE_FOLDER
										: null;
					}
				}
				e.$F3c = F;
				let x = class extends C.$1c {
					constructor(J, W, X, Y, ie) {
						super(),
							(this.c = J),
							(this.g = W),
							(this.h = X),
							Y.whenInstalledExtensionsRegistered().then(() => {
								this.j();
								const ne = g.$Io.as(p.$No.Configuration),
									ee = this.D(new d.$Jh(50));
								this.D(
									i.Event.any(
										ne.onDidUpdateConfiguration,
										ne.onDidSchemaChange,
										X.onDidChangeTrust,
									)(() =>
										ee.trigger(
											() => this.j(),
											ie.phase === $.LifecyclePhase.Eventually ? void 0 : 2500,
										),
									),
								);
							});
					}
					j() {
						const J = {
								properties: p.$Oo.properties,
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							W = this.g.remoteAuthority
								? {
										properties: Object.assign(
											{},
											p.$Po.properties,
											p.$So.properties,
											p.$To.properties,
										),
										patternProperties: p.$Oo.patternProperties,
										additionalProperties: !0,
										allowTrailingCommas: !0,
										allowComments: !0,
									}
								: J,
							X = {
								properties: Object.assign(
									{},
									p.$Qo.properties,
									p.$Ro.properties,
									p.$So.properties,
									p.$To.properties,
								),
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							Y = {
								properties: Object.assign(
									{},
									p.$Qo.properties,
									p.$Ro.properties,
									p.$So.properties,
									p.$To.properties,
								),
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							ie = {
								properties: Object.assign(
									{},
									this.n(p.$Ro.properties),
									this.n(p.$So.properties),
									this.n(p.$To.properties),
								),
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							ne = {
								properties: Object.keys(p.$Oo.properties).reduce(
									(te, Q) => (
										(te[Q] = Object.assign(
											{ deprecationMessage: void 0 },
											p.$Oo.properties[Q],
										)),
										te
									),
									{},
								),
								patternProperties: Object.keys(p.$Oo.patternProperties).reduce(
									(te, Q) => (
										(te[Q] = Object.assign(
											{ deprecationMessage: void 0 },
											p.$Oo.patternProperties[Q],
										)),
										te
									),
									{},
								),
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							ee =
								r.WorkbenchState.WORKSPACE === this.c.getWorkbenchState()
									? {
											properties: Object.assign(
												{},
												this.n(p.$Ro.properties),
												this.n(p.$To.properties),
											),
											patternProperties: p.$Oo.patternProperties,
											additionalProperties: !0,
											allowTrailingCommas: !0,
											allowComments: !0,
										}
									: ie,
							_ = {
								type: "object",
								description: (0, L.localize)(12112, null),
								properties: Object.assign(
									{},
									this.q(p.$Ro.properties),
									this.q(p.$So.properties),
									this.q(p.$To.properties),
								),
								patternProperties: {
									[p.$Wo]: { type: "object", default: {}, $ref: p.$Uo },
								},
								additionalProperties: !1,
							};
						this.m({
							defaultSettingsSchema: ne,
							userSettingsSchema: W,
							profileSettingsSchema: X,
							machineSettingsSchema: Y,
							workspaceSettingsSchema: ie,
							folderSettingsSchema: ee,
							configDefaultsSchema: _,
						});
					}
					m(J) {
						const W = g.$Io.as(m.$Jo.JSONContribution);
						W.registerSchema(n.$yZ, J.defaultSettingsSchema),
							W.registerSchema(n.$zZ, J.userSettingsSchema),
							W.registerSchema(n.$AZ, J.profileSettingsSchema),
							W.registerSchema(n.$BZ, J.machineSettingsSchema),
							W.registerSchema(n.$CZ, J.workspaceSettingsSchema),
							W.registerSchema(n.$DZ, J.folderSettingsSchema),
							W.registerSchema(p.$Vo, J.configDefaultsSchema);
					}
					n(J) {
						if (this.h.isWorkspaceTrusted()) return J;
						const W = {};
						return (
							Object.entries(J).forEach(([X, Y]) => {
								Y.restricted || (W[X] = Y);
							}),
							W
						);
					}
					q(J) {
						const W = {};
						return (
							Object.entries(J).forEach(([X, Y]) => {
								Y.disallowConfigurationDefault || (W[X] = Y);
							}),
							W
						);
					}
				};
				x = Ne(
					[j(0, r.$Vi), j(1, l.$r8), j(2, S.$pO), j(3, T.$q2), j(4, $.$n6)],
					x,
				);
				let H = class extends C.$1c {
					constructor(J, W) {
						super(),
							J.hasCachedConfigurationDefaultsOverrides() &&
								W.whenInstalledExtensionsRegistered().then(() =>
									J.reloadConfiguration(a.ConfigurationTarget.DEFAULT),
								);
					}
				};
				H = Ne([j(0, a.$gj), j(1, T.$q2)], H);
				let q = class extends C.$1c {
					static {
						this.ID = "workbench.contrib.updateExperimentalSettingsDefaults";
					}
					constructor(J) {
						super(),
							(this.h = J),
							(this.c = new Set()),
							(this.g = g.$Io.as(p.$No.Configuration)),
							this.j(Object.keys(this.g.getConfigurationProperties())),
							this.D(
								this.g.onDidUpdateConfiguration(({ properties: W }) =>
									this.j(W),
								),
							);
					}
					async j(J) {
						const W = {},
							X = this.g.getConfigurationProperties();
						for (const Y of J) {
							const ie = X[Y];
							if (ie?.tags?.includes("experimental") && !this.c.has(Y)) {
								this.c.add(Y);
								try {
									const ne = await this.h.getTreatment(`config.${Y}`);
									!(0, k.$sg)(ne) && !(0, E.$zo)(ne, ie.default) && (W[Y] = ne);
								} catch {}
							}
						}
						Object.keys(W).length &&
							this.g.registerDefaultConfigurations([{ overrides: W }]);
					}
				};
				q = Ne([j(0, P.$h4b)], q);
				const V = g.$Io.as(y.Extensions.Workbench);
				V.registerWorkbenchContribution(x, $.LifecyclePhase.Restored),
					V.registerWorkbenchContribution(H, $.LifecyclePhase.Eventually),
					(0, y.$s6)(q.ID, q, y.WorkbenchPhase.BlockRestore),
					g.$Io
						.as(p.$No.Configuration)
						.registerConfiguration({
							...R.$v6,
							properties: {
								[n.$TZ]: {
									type: "array",
									description: (0, L.localize)(12113, null),
									default: [],
									scope: p.ConfigurationScope.APPLICATION,
									additionalProperties: !0,
									uniqueItems: !0,
								},
							},
						});
			},
		),
		define(
			de[3781],
			he([1, 0, 68, 133, 19, 23, 34, 665, 22, 47, 1808, 109, 151]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rdd = void 0);
				let c = class extends u.$b5c {
					constructor(g, p, o, f, b, s, l) {
						super(g, p, o),
							(this.G = f),
							(this.H = b),
							(this.I = s),
							(this.J = l);
					}
					F(g, p) {
						return (
							p ||
							this.u.extUri.isEqual(this.t.currentProfile.extensionsResource, g)
						);
					}
					async install(g, p) {
						const { location: o, cleanup: f } = await this.M(g);
						try {
							return await super.install(o, p);
						} finally {
							await f();
						}
					}
					async M(g) {
						if (g.scheme === E.Schemas.file)
							return { location: g, async cleanup() {} };
						this.J.trace("Downloading extension from", g.toString());
						const p = (0, w.$nh)(
							this.I.extensionsDownloadLocation,
							(0, r.$9g)(),
						);
						return (
							await this.H.download(g, p),
							this.J.info("Downloaded extension to", p.toString()),
							{
								location: p,
								cleanup: async () => {
									try {
										await this.G.del(p);
									} catch (f) {
										this.J.error(f);
									}
								},
							}
						);
					}
					async z(g, p, o) {
						if (this.I.remoteAuthority) {
							const b = (await this.getInstalled(a.ExtensionType.User, g)).find(
								(s) => (0, a.$Mn)(s.manifest, this.I.remoteAuthority),
							);
							b && (o || (o = []), o.push(new a.$Gn(b.identifier.id)));
						}
						return super.z(g, p, o);
					}
				};
				(e.$Rdd = c),
					(e.$Rdd = c =
						Ne(
							[
								j(1, i.$P8),
								j(2, t.$Vl),
								j(3, m.$ll),
								j(4, d.$gp),
								j(5, h.$ucd),
								j(6, C.$ik),
							],
							c,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3782],
		he([1, 0, 12, 3334, 958, 34, 111, 4, 40, 87, 15, 133, 29, 157, 53, 78]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1dd = void 0),
				(t = mt(t)),
				(C = xi(C));
			let p = class {
				constructor(f, b, s, l, y, $, v) {
					(this.c = f),
						(this.d = b),
						(this.f = s),
						(this.g = l),
						(this.h = y),
						(this.i = $),
						(this.j = v),
						(this.scannedExtensions = new Promise((S, I) => {
							(this.a = S), (this.b = I);
						}));
				}
				async startScanningExtensions() {
					try {
						const f = await this.k();
						this.a(f);
					} catch (f) {
						this.b(f);
					}
				}
				async k() {
					try {
						const f = t.$z,
							b = await Promise.allSettled([
								this.f.scanSystemExtensions({
									language: f,
									useCache: !0,
									checkControlFile: !0,
								}),
								this.f.scanUserExtensions({
									language: f,
									profileLocation: this.g.currentProfile.extensionsResource,
									useCache: !0,
								}),
								this.i.remoteAuthority
									? []
									: this.h.getInstalledWorkspaceExtensions(!1),
							]);
						let s = [],
							l = [],
							y = [],
							$ = [],
							v = !1;
						b[0].status === "fulfilled"
							? (s = b[0].value)
							: ((v = !0),
								this.j.error(
									"Error scanning system extensions:",
									(0, h.$bb)(b[0].reason),
								)),
							b[1].status === "fulfilled"
								? (l = b[1].value)
								: ((v = !0),
									this.j.error(
										"Error scanning user extensions:",
										(0, h.$bb)(b[1].reason),
									)),
							b[2].status === "fulfilled"
								? (y = b[2].value)
								: ((v = !0),
									this.j.error(
										"Error scanning workspace extensions:",
										(0, h.$bb)(b[2].reason),
									));
						try {
							$ = await this.f.scanExtensionsUnderDevelopment({ language: f }, [
								...s,
								...l,
							]);
						} catch (L) {
							this.j.error(L);
						}
						const S = s.map((L) => (0, w.$gr)(L, !1)),
							I = l.map((L) => (0, w.$gr)(L, !1)),
							T = y.map((L) => (0, n.$y2)(L, !1)),
							P = $.map((L) => (0, w.$gr)(L, !0)),
							k = (0, i.$afb)(S, I, T, P, this.j);
						if (!v) {
							const L = this.f.onDidChangeCache(() => {
								L.dispose(),
									this.c.prompt(C.default.Error, (0, d.localize)(12437, null), [
										{
											label: (0, d.localize)(12438, null),
											run: () => this.d.reload(),
										},
									]);
							});
							(0, u.$Nh)(5e3).then(() => L.dispose());
						}
						return k;
					} catch (f) {
						return (
							this.j.error("Error scanning installed extensions:"),
							this.j.error(f),
							[]
						);
					}
				}
			};
			(e.$1dd = p),
				(e.$1dd = p =
					Ne(
						[
							j(0, m.$4N),
							j(1, r.$asb),
							j(2, w.$dr),
							j(3, a.$P8),
							j(4, c.$GQb),
							j(5, g.$r8),
							j(6, E.$ik),
						],
						p,
					));
		},
	),
		define(
			de[3783],
			he([1, 0, 9, 113, 1214, 958, 22, 20, 5, 34, 62, 68, 129, 133]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pdd = void 0);
				let n = class extends E.$hr {
					constructor(p, o, f, b, s, l, y, $, v) {
						super(
							t.URI.file(l.builtinExtensionsPath),
							t.URI.file(l.extensionsPath),
							l.userHome,
							p.currentProfile,
							o,
							f,
							b,
							s,
							l,
							y,
							$,
							v,
						);
					}
				};
				(e.$Pdd = n),
					(e.$Pdd = n =
						Ne(
							[
								j(0, c.$P8),
								j(1, h.$Xl),
								j(2, w.$_q),
								j(3, C.$ll),
								j(4, r.$ik),
								j(5, i.$Ui),
								j(6, u.$Bk),
								j(7, a.$Vl),
								j(8, m.$Li),
							],
							n,
						)),
					(0, d.$lK)(E.$dr, n, d.InstantiationType.Delayed);
			},
		),
		define(
			de[3784],
			he([
				1, 0, 4, 139, 459, 7, 114, 15, 6, 187, 592, 918, 343, 27, 3, 82, 12, 19,
				75, 11, 31, 8, 22, 20, 250, 2735, 39, 390, 43, 939, 1188, 34, 40, 30,
				32, 68, 599, 1819, 53, 175, 87, 1824, 3393, 133,
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
			) {
				"use strict";
				var V;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pvc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E)),
					(g = mt(g));
				function G(ee, _) {
					return ee
						? typeof ee.command != "string"
							? (_.push(t.localize(12486, null, "command")), !1)
							: ee.key && typeof ee.key != "string"
								? (_.push(t.localize(12487, null, "key")), !1)
								: ee.when && typeof ee.when != "string"
									? (_.push(t.localize(12488, null, "when")), !1)
									: ee.mac && typeof ee.mac != "string"
										? (_.push(t.localize(12489, null, "mac")), !1)
										: ee.linux && typeof ee.linux != "string"
											? (_.push(t.localize(12490, null, "linux")), !1)
											: ee.win && typeof ee.win != "string"
												? (_.push(t.localize(12491, null, "win")), !1)
												: !0
						: (_.push(t.localize(12485, null)), !1);
				}
				const K = {
						type: "object",
						default: { command: "", key: "" },
						properties: {
							command: { description: t.localize(12492, null), type: "string" },
							args: { description: t.localize(12493, null) },
							key: { description: t.localize(12494, null), type: "string" },
							mac: { description: t.localize(12495, null), type: "string" },
							linux: { description: t.localize(12496, null), type: "string" },
							win: { description: t.localize(12497, null), type: "string" },
							when: { description: t.localize(12498, null), type: "string" },
						},
					},
					J = z.$n2.registerExtensionPoint({
						extensionPoint: "keybindings",
						deps: [B.$Mtc],
						jsonSchema: {
							description: t.localize(12499, null),
							oneOf: [K, { type: "array", items: K }],
						},
					}),
					W = [
						c.ScanCode.NumpadDivide,
						c.ScanCode.NumpadMultiply,
						c.ScanCode.NumpadSubtract,
						c.ScanCode.NumpadAdd,
						c.ScanCode.Numpad1,
						c.ScanCode.Numpad2,
						c.ScanCode.Numpad3,
						c.ScanCode.Numpad4,
						c.ScanCode.Numpad5,
						c.ScanCode.Numpad6,
						c.ScanCode.Numpad7,
						c.ScanCode.Numpad8,
						c.ScanCode.Numpad9,
						c.ScanCode.Numpad0,
						c.ScanCode.NumpadDecimal,
					],
					X = new Map();
				X.set(c.ScanCode.Numpad1, c.KeyCode.Digit1),
					X.set(c.ScanCode.Numpad2, c.KeyCode.Digit2),
					X.set(c.ScanCode.Numpad3, c.KeyCode.Digit3),
					X.set(c.ScanCode.Numpad4, c.KeyCode.Digit4),
					X.set(c.ScanCode.Numpad5, c.KeyCode.Digit5),
					X.set(c.ScanCode.Numpad6, c.KeyCode.Digit6),
					X.set(c.ScanCode.Numpad7, c.KeyCode.Digit7),
					X.set(c.ScanCode.Numpad8, c.KeyCode.Digit8),
					X.set(c.ScanCode.Numpad9, c.KeyCode.Digit9),
					X.set(c.ScanCode.Numpad0, c.KeyCode.Digit0);
				let Y = (V = class extends S.$Fvc {
					constructor(_, te, Q, Z, se, re, le, oe, ae, pe, $e) {
						super(_, te, Q, Z, pe),
							(this.S = re),
							(this.U = $e),
							(this.Q = []),
							(this.O = _.createKey("isComposing", !1)),
							(this.R = new ne()),
							this.X(),
							(this.r = this.U.getKeyboardMapper()),
							this.D(
								this.U.onDidChangeKeyboardLayout(() => {
									(this.r = this.U.getKeyboardMapper()), this.cb();
								}),
							),
							(this.P = null),
							(this.C = null),
							(this.N = this.D(new ie(se, ae, oe, pe))),
							this.N.initialize().then(() => {
								this.N.keybindings.length && this.cb();
							}),
							this.D(
								this.N.onDidChange(() => {
									pe.debug("User keybindings changed"), this.cb();
								}),
							),
							J.setHandler((ye) => {
								const ue = [];
								for (const fe of ye)
									this.ib(
										fe.description.identifier,
										fe.description.isBuiltin,
										fe.value,
										fe.collector,
										ue,
									);
								P.$TX.setExtensionKeybindings(ue), this.cb();
							}),
							this.X(),
							this.D(le.onDidRegisterExtensions(() => this.X())),
							this.D(
								m.Event.runAndSubscribe(
									E.onDidRegisterWindow,
									({ window: ye, disposables: ue }) => ue.add(this.W(ye)),
									{ window: f.$Bfb, disposables: this.B },
								),
							),
							this.D(
								i.$Nfb((ye) => {
									if (ye !== f.$Bfb.vscodeWindowId) return;
									const ue = navigator.keyboard;
									w.$Yfb.keyboard !== w.KeyboardSupport.None &&
										(i.$Mfb(f.$Bfb) ? ue?.lock(["Escape"]) : ue?.unlock(),
										(this.C = null),
										this.a.fire());
								}),
							);
					}
					W(_) {
						const te = new n.$Zc();
						return (
							te.add(
								E.$0fb(_, E.$$gb.KEY_DOWN, (Q) => {
									if (this.P) return;
									this.O.set(Q.isComposing);
									const Z = new C.$7fb(Q);
									this.F(`/ Received  keydown event - ${(0, C.$5fb)(Q)}`),
										this.F(`| Converted keydown event - ${(0, C.$6fb)(Z)}`),
										this.J(Z, Z.target) && Z.preventDefault(),
										this.O.set(!1);
								}),
							),
							te.add(
								E.$0fb(_, E.$$gb.KEY_UP, (Q) => {
									this.bb(), this.O.set(Q.isComposing);
									const Z = new C.$7fb(Q);
									this.L(Z, Z.target) && Z.preventDefault(), this.O.set(!1);
								}),
							),
							te
						);
					}
					registerSchemaContribution(_) {
						this.Q.push(_),
							_.onDidChange && this.D(_.onDidChange(() => this.X())),
							this.X();
					}
					X() {
						this.R.updateSchema(this.Q.flatMap((_) => _.getSchemaAdditions()));
					}
					Y(_) {
						return (
							u.$5ob.toLabel(p.OS, _.chords, (te) =>
								te instanceof h.$ts
									? c.KeyCodeUtils.toString(te.keyCode)
									: c.$ls.toString(te.scanCode),
							) || "[null]"
						);
					}
					Z(_) {
						return _.getDispatchChords()
							.map((te) => te || "[null]")
							.join(" ");
					}
					$(_, te, Q) {
						const se = `${te.padStart(35, " ")} => `;
						if (Q.length === 0) {
							_.push(`${se}${"[NO BINDING]".padStart(35, " ")}`);
							return;
						}
						const re = se.length,
							le = !0;
						for (const oe of Q)
							le
								? _.push(`${se}${this.Z(oe).padStart(35, " ")}`)
								: _.push(`${" ".repeat(re)}${this.Z(oe).padStart(35, " ")}`);
					}
					ab() {
						const _ = new Set(),
							te = [];
						te.push("Default Resolved Keybindings (unique only):");
						for (const Q of P.$TX.getDefaultKeybindings()) {
							if (!Q.keybinding) continue;
							const Z = this.Y(Q.keybinding);
							if (_.has(Z)) continue;
							_.add(Z);
							const se = this.r.resolveKeybinding(Q.keybinding);
							this.$(te, Z, se);
						}
						te.push("User Resolved Keybindings (unique only):");
						for (const Q of this.N.keybindings) {
							if (!Q.keybinding) continue;
							const Z =
								Q._sourceKey ??
								"Impossible: missing source key, but has keybinding";
							if (_.has(Z)) continue;
							_.add(Z);
							const se = this.r.resolveKeybinding(Q.keybinding);
							this.$(te, Z, se);
						}
						return te.join(`
`);
					}
					_dumpDebugInfo() {
						const _ = JSON.stringify(
								this.U.getCurrentKeyboardLayout(),
								null,
								"	",
							),
							te = this.r.dumpDebugInfo(),
							Q = this.ab(),
							Z = JSON.stringify(this.U.getRawKeyboardMapping(), null, "	");
						return `Layout info:
${_}

${Q}

${te}

Raw mapping:
${Z}`;
					}
					_dumpDebugInfoJSON() {
						const _ = {
							layout: this.U.getCurrentKeyboardLayout(),
							rawMapping: this.U.getRawKeyboardMapping(),
						};
						return JSON.stringify(_, null, "	");
					}
					enableKeybindingHoldMode(_) {
						if (this.m !== _) return;
						this.P = new d.$0h();
						const te = E.$dhb(E.getWindow(void 0)),
							Q = te.onDidBlur(() => this.bb());
						return (
							this.P.p.finally(() => {
								Q.dispose(), te.dispose();
							}),
							this.F(`+ Enabled hold-mode for ${_}.`),
							this.P.p
						);
					}
					bb() {
						this.P && (this.P?.complete(), (this.P = null));
					}
					customKeybindingsCount() {
						return this.N.keybindings.length;
					}
					cb() {
						(this.C = null), this.a.fire();
					}
					y() {
						if (!this.C) {
							const _ = this.fb(P.$TX.getDefaultKeybindings(), !0),
								te = this.gb(this.N.keybindings, !1);
							this.C = new T.$tZ(_, te, (Q) => this.F(Q));
						}
						return this.C;
					}
					z() {
						return this.S.hasFocus;
					}
					fb(_, te) {
						const Q = [];
						let Z = 0;
						for (const se of _) {
							const re = se.when || void 0,
								le = se.keybinding;
							if (!le)
								Q[Z++] = new k.$qZ(
									void 0,
									se.command,
									se.commandArgs,
									re,
									te,
									se.extensionId,
									se.isBuiltinExtension,
								);
							else {
								if (this.hb(le)) continue;
								const oe = this.r.resolveKeybinding(le);
								for (let ae = oe.length - 1; ae >= 0; ae--) {
									const pe = oe[ae];
									Q[Z++] = new k.$qZ(
										pe,
										se.command,
										se.commandArgs,
										re,
										te,
										se.extensionId,
										se.isBuiltinExtension,
									);
								}
							}
						}
						return Q;
					}
					gb(_, te) {
						const Q = [];
						let Z = 0;
						for (const se of _) {
							const re = se.when || void 0;
							if (!se.keybinding)
								Q[Z++] = new k.$qZ(
									void 0,
									se.command,
									se.commandArgs,
									re,
									te,
									null,
									!1,
								);
							else {
								const le = this.r.resolveKeybinding(se.keybinding);
								for (const oe of le)
									Q[Z++] = new k.$qZ(
										oe,
										se.command,
										se.commandArgs,
										re,
										te,
										null,
										!1,
									);
							}
						}
						return Q;
					}
					hb(_) {
						if (
							w.$Yfb.keyboard === w.KeyboardSupport.Always ||
							(w.$Yfb.keyboard === w.KeyboardSupport.FullScreen &&
								i.$Mfb(f.$Bfb))
						)
							return !1;
						for (const te of _.chords) {
							if (!te.metaKey && !te.altKey && !te.ctrlKey && !te.shiftKey)
								continue;
							const Q = c.KeyMod.CtrlCmd | c.KeyMod.Alt | c.KeyMod.Shift;
							let Z = 0;
							if (
								(te.metaKey && (Z |= c.KeyMod.CtrlCmd),
								te.shiftKey && (Z |= c.KeyMod.Shift),
								te.altKey && (Z |= c.KeyMod.Alt),
								te.ctrlKey &&
									p.OS === p.OperatingSystem.Macintosh &&
									(Z |= c.KeyMod.WinCtrl),
								((Z & Q) === (c.KeyMod.CtrlCmd | c.KeyMod.Alt) &&
									((te instanceof h.$us &&
										(te.scanCode === c.ScanCode.ArrowLeft ||
											te.scanCode === c.ScanCode.ArrowRight)) ||
										(te instanceof h.$ts &&
											(te.keyCode === c.KeyCode.LeftArrow ||
												te.keyCode === c.KeyCode.RightArrow)))) ||
									((Z & Q) === c.KeyMod.CtrlCmd &&
										((te instanceof h.$us &&
											te.scanCode >= c.ScanCode.Digit1 &&
											te.scanCode <= c.ScanCode.Digit0) ||
											(te instanceof h.$ts &&
												te.keyCode >= c.KeyCode.Digit0 &&
												te.keyCode <= c.KeyCode.Digit9))))
							)
								return !0;
						}
						return !1;
					}
					resolveKeybinding(_) {
						return this.r.resolveKeybinding(_);
					}
					resolveKeyboardEvent(_) {
						return (
							this.U.validateCurrentKeyboardMapping(_),
							this.r.resolveKeyboardEvent(_)
						);
					}
					resolveUserBinding(_) {
						const te = a.$Xpb.parseKeybinding(_);
						return te ? this.r.resolveKeybinding(te) : [];
					}
					ib(_, te, Q, Z, se) {
						if (Array.isArray(Q))
							for (let re = 0, le = Q.length; re < le; re++)
								this.jb(_, te, re + 1, Q[re], Z, se);
						else this.jb(_, te, 1, Q, Z, se);
					}
					jb(_, te, Q, Z, se, re) {
						const le = [];
						if (G(Z, le)) {
							const oe = this.mb(_, te, Q++, Z);
							oe && re.push(oe);
						}
						le.length > 0 &&
							se.error(
								t.localize(
									12500,
									null,
									J.name,
									le.join(`
`),
								),
							);
					}
					static lb(_, te, Q, Z) {
						if (p.OS === p.OperatingSystem.Windows && Z) {
							if (Z) return Z;
						} else if (p.OS === p.OperatingSystem.Macintosh) {
							if (te) return te;
						} else if (Q) return Q;
						return _;
					}
					mb(_, te, Q, Z) {
						const {
								command: se,
								args: re,
								when: le,
								key: oe,
								mac: ae,
								linux: pe,
								win: $e,
							} = Z,
							ye = V.lb(oe, ae, pe, $e);
						if (!ye) return;
						let ue;
						te
							? (ue = P.KeybindingWeight.BuiltinExtension + Q)
							: (ue = P.KeybindingWeight.ExternalExtension + Q);
						const fe = b.$ZX.getCommand(se),
							me = fe && fe.precondition;
						let ve;
						return (
							le && me
								? (ve = l.$Kj.and(me, l.$Kj.deserialize(le)))
								: le
									? (ve = l.$Kj.deserialize(le))
									: me && (ve = me),
							{
								id: se,
								args: re,
								when: ve,
								weight: ue,
								keybinding: a.$Xpb.parseKeybinding(ye),
								extensionId: _.value,
								isBuiltinExtension: te,
							}
						);
					}
					getDefaultKeybindingsContent() {
						const _ = this.y(),
							te = _.getDefaultKeybindings(),
							Q = _.getDefaultBoundCommands();
						return (
							V.nb(te) +
							`

` +
							V.ob(Q)
						);
					}
					static nb(_) {
						const te = new H.$Ovc();
						te.writeLine("[");
						const Q = _.length - 1;
						return (
							_.forEach((Z, se) => {
								H.$Nvc.writeKeybindingItem(te, Z),
									se !== Q ? te.writeLine(",") : te.writeLine();
							}),
							te.writeLine("]"),
							te.toString()
						);
					}
					static ob(_) {
						const Q = (0, x.$pvc)(_)
							.sort()
							.join(`
// - `);
						return (
							"// " +
							t.localize(12501, null) +
							`
// - ` +
							Q
						);
					}
					mightProducePrintableCharacter(_) {
						if (_.ctrlKey || _.metaKey || _.altKey) return !1;
						const te = c.$ls.toEnum(_.code);
						if (W.indexOf(te) !== -1)
							return !!(
								_.keyCode === c.$ms[te] ||
								(p.$m && _.keyCode === X.get(te))
							);
						if (c.$ms[te] !== -1) return !1;
						const Z = this.U.getRawKeyboardMapping();
						if (!Z) return !1;
						const se = Z[_.code];
						return !(!se || !se.value || /\s/.test(se.value));
					}
				});
				(e.$Pvc = Y),
					(e.$Pvc =
						Y =
						V =
							Ne(
								[
									j(0, l.$6j),
									j(1, s.$ek),
									j(2, A.$km),
									j(3, M.$4N),
									j(4, q.$P8),
									j(5, F.$asb),
									j(6, U.$q2),
									j(7, y.$ll),
									j(8, R.$Vl),
									j(9, D.$ik),
									j(10, L.$Hvc),
								],
								Y,
							));
				class ie extends n.$1c {
					get keybindings() {
						return this.b;
					}
					constructor(_, te, Q, Z) {
						super(),
							(this.h = _),
							(this.j = te),
							(this.m = Q),
							(this.a = []),
							(this.b = []),
							(this.f = this.D(new n.$Zc())),
							(this.g = this.D(new m.$re())),
							(this.onDidChange = this.g.event),
							this.q(),
							(this.c = this.D(
								new d.$Yh(
									() =>
										this.r().then((se) => {
											se && this.g.fire();
										}),
									50,
								),
							)),
							this.D(
								m.Event.filter(this.m.onDidFilesChange, (se) =>
									se.contains(this.h.currentProfile.keybindingsResource),
								)(() => {
									Z.debug("Keybindings file changed"), this.c.schedule();
								}),
							),
							this.D(
								this.m.onDidRunOperation((se) => {
									se.operation === y.FileOperation.WRITE &&
										se.resource.toString() ===
											this.h.currentProfile.keybindingsResource.toString() &&
										(Z.debug("Keybindings file written"), this.c.schedule());
								}),
							),
							this.D(
								_.onDidChangeCurrentProfile((se) => {
									this.j.extUri.isEqual(
										se.previous.keybindingsResource,
										se.profile.keybindingsResource,
									) || se.join(this.n());
								}),
							);
					}
					async n() {
						this.q(), this.c.schedule();
					}
					q() {
						this.f.clear(),
							this.f.add(
								this.m.watch(
									(0, o.$mh)(this.h.currentProfile.keybindingsResource),
								),
							),
							this.f.add(
								this.m.watch(this.h.currentProfile.keybindingsResource),
							);
					}
					async initialize() {
						await this.r();
					}
					async r() {
						const _ = await this.s();
						return g.$zo(this.a, _)
							? !1
							: ((this.a = _),
								(this.b = this.a.map((te) =>
									H.$Nvc.readUserKeybindingItem(te),
								)),
								!0);
					}
					async s() {
						try {
							const _ = await this.m.readFile(
									this.h.currentProfile.keybindingsResource,
								),
								te = (0, r.$do)(_.value.toString());
							return Array.isArray(te)
								? te.filter((Q) => Q && typeof Q == "object")
								: [];
						} catch {
							return [];
						}
					}
				}
				class ne {
					static {
						this.a = "vscode://schemas/keybindings";
					}
					constructor() {
						(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.f = []),
							(this.g = {
								id: ne.a,
								type: "array",
								title: t.localize(12502, null),
								allowTrailingCommas: !0,
								allowComments: !0,
								definitions: {
									editorGroupsSchema: {
										type: "array",
										items: {
											type: "object",
											properties: {
												groups: {
													$ref: "#/definitions/editorGroupsSchema",
													default: [{}, {}],
												},
												size: { type: "number", default: 0.5 },
											},
										},
									},
									commandNames: {
										type: "string",
										enum: this.c,
										enumDescriptions: this.f,
										description: t.localize(12503, null),
									},
									commandType: {
										anyOf: [
											{ $ref: "#/definitions/commandNames" },
											{
												type: "string",
												enum: this.d,
												enumDescriptions: this.f,
												description: t.localize(12504, null),
											},
											{ type: "string" },
										],
									},
									commandsSchemas: { allOf: this.b },
								},
								items: {
									required: ["key"],
									type: "object",
									defaultSnippets: [
										{ body: { key: "$1", command: "$2", when: "$3" } },
									],
									properties: {
										key: {
											type: "string",
											description: t.localize(12505, null),
										},
										command: {
											anyOf: [
												{
													if: { type: "array" },
													then: {
														not: { type: "array" },
														errorMessage: t.localize(12506, null, "string"),
													},
													else: { $ref: "#/definitions/commandType" },
												},
												{ $ref: "#/definitions/commandType" },
											],
										},
										when: {
											type: "string",
											description: t.localize(12507, null),
										},
										args: { description: t.localize(12508, null) },
									},
									$ref: "#/definitions/commandsSchemas",
								},
							}),
							(this.h = N.$Io.as(v.$Jo.JSONContribution)),
							this.h.registerSchema(ne.a, this.g);
					}
					updateSchema(_) {
						(this.b.length = 0),
							(this.c.length = 0),
							(this.d.length = 0),
							(this.f.length = 0);
						const te = new Set(),
							Q = (re, le) => {
								/^_/.test(re) ||
									te.has(re) ||
									(te.add(re),
									this.c.push(re),
									this.f.push((0, O.$gk)(le) ? le.value : le),
									this.d.push(`-${re}`));
							},
							Z = s.$fk.getCommands();
						for (const [re, le] of Z) {
							const oe = le.metadata;
							if (
								(Q(re, oe?.description),
								!oe || !oe.args || oe.args.length !== 1 || !oe.args[0].schema)
							)
								continue;
							const ae = oe.args[0].schema,
								pe =
									typeof oe.args[0].isOptional < "u"
										? !oe.args[0].isOptional
										: Array.isArray(ae.required) && ae.required.length > 0,
								$e = {
									if: {
										required: ["command"],
										properties: { command: { const: re } },
									},
									then: {
										required: [].concat(pe ? ["args"] : []),
										properties: { args: ae },
									},
								};
							this.b.push($e);
						}
						const se = b.$ZX.getCommands();
						for (const re of se.keys()) Q(re);
						this.b.push(..._), this.h.notifySchemaChanged(ne.a);
					}
				}
				(0, $.$lK)(I.$uZ, Y, $.InstantiationType.Eager);
			},
		),
		define(
			de[1324],
			he([
				1, 0, 4, 15, 187, 82, 586, 3, 188, 17, 104, 42, 8, 22, 5, 85, 20, 133,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fvc = e.$evc = void 0),
					(w = mt(w)),
					(E = mt(E)),
					(e.$evc = (0, n.$Mi)("keybindingEditingService"));
				let f = class extends d.$1c {
					constructor(s, l, y, $) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.c = new i.$Th());
					}
					addKeybinding(s, l, y) {
						return this.c.queue(() => this.m(s, l, y, !0));
					}
					editKeybinding(s, l, y) {
						return this.c.queue(() => this.m(s, l, y, !1));
					}
					resetKeybinding(s) {
						return this.c.queue(() => this.q(s));
					}
					removeKeybinding(s) {
						return this.c.queue(() => this.n(s));
					}
					async m(s, l, y, $) {
						const v = await this.I(),
							S = v.object.textEditorModel;
						if ($) this.s(s, l, y, S, -1);
						else {
							const I = w.$do(S.getValue()),
								T = this.y(s, I);
							this.s(s, l, y, S, T),
								s.isDefault && s.resolvedKeybinding && this.u(s, S);
						}
						try {
							await this.r();
						} finally {
							v.dispose();
						}
					}
					async n(s) {
						const l = await this.I(),
							y = l.object.textEditorModel;
						s.isDefault ? this.u(s, y) : this.t(s, y);
						try {
							return await this.r();
						} finally {
							l.dispose();
						}
					}
					async q(s) {
						const l = await this.I(),
							y = l.object.textEditorModel;
						s.isDefault || (this.t(s, y), this.w(s, y));
						try {
							return await this.r();
						} finally {
							l.dispose();
						}
					}
					r() {
						return this.g.save(this.j.currentProfile.keybindingsResource);
					}
					s(s, l, y, $, v) {
						const { tabSize: S, insertSpaces: I } = $.getOptions(),
							T = $.getEOL();
						if (v !== -1) {
							this.G(
								(0, C.$ro)($.getValue(), [v, "key"], l, {
									tabSize: S,
									insertSpaces: I,
									eol: T,
								})[0],
								$,
							);
							const P = (0, C.$ro)($.getValue(), [v, "when"], y, {
								tabSize: S,
								insertSpaces: I,
								eol: T,
							});
							P.length > 0 && this.G(P[0], $);
						} else
							this.G(
								(0, C.$ro)($.getValue(), [-1], this.C(l, s.command, y, !1), {
									tabSize: S,
									insertSpaces: I,
									eol: T,
								})[0],
								$,
							);
					}
					t(s, l) {
						const { tabSize: y, insertSpaces: $ } = l.getOptions(),
							v = l.getEOL(),
							S = w.$do(l.getValue()),
							I = this.y(s, S);
						I !== -1 &&
							this.G(
								(0, C.$ro)(l.getValue(), [I], void 0, {
									tabSize: y,
									insertSpaces: $,
									eol: v,
								})[0],
								l,
							);
					}
					u(s, l) {
						const { tabSize: y, insertSpaces: $ } = l.getOptions(),
							v = l.getEOL(),
							S = s.resolvedKeybinding
								? s.resolvedKeybinding.getUserSettingsLabel()
								: null;
						if (S) {
							const I = this.C(
								S,
								s.command,
								s.when ? s.when.serialize() : void 0,
								!0,
							);
							w.$do(l.getValue()).every((P) => !this.F(P, I)) &&
								this.G(
									(0, C.$ro)(l.getValue(), [-1], I, {
										tabSize: y,
										insertSpaces: $,
										eol: v,
									})[0],
									l,
								);
						}
					}
					w(s, l) {
						const { tabSize: y, insertSpaces: $ } = l.getOptions(),
							v = l.getEOL(),
							S = w.$do(l.getValue()),
							I = this.z(s, S).reverse();
						for (const T of I)
							this.G(
								(0, C.$ro)(l.getValue(), [T], void 0, {
									tabSize: y,
									insertSpaces: $,
									eol: v,
								})[0],
								l,
							);
					}
					y(s, l) {
						for (let y = 0; y < l.length; y++) {
							const $ = l[y];
							if ($.command === s.command) {
								if (!$.when && !s.when) return y;
								if ($.when && s.when) {
									const v = h.$Kj.deserialize($.when);
									if (v && v.serialize() === s.when.serialize()) return y;
								}
							}
						}
						return -1;
					}
					z(s, l) {
						const y = [];
						for (let $ = 0; $ < l.length; $++)
							l[$].command === `-${s.command}` && y.push($);
						return y;
					}
					C(s, l, y, $) {
						const v = { key: s };
						return l && (v.command = $ ? `-${l}` : l), y && (v.when = y), v;
					}
					F(s, l) {
						if (s.command !== l.command || s.key !== l.key) return !1;
						const y = h.$Kj.deserialize(s.when),
							$ = h.$Kj.deserialize(l.when);
						return !(
							(y && !$) ||
							(!y && $) ||
							(y && $ && !y.equals($)) ||
							!E.$zo(s.args, l.args)
						);
					}
					G(s, l) {
						const y = l.getPositionAt(s.offset),
							$ = l.getPositionAt(s.offset + s.length),
							v = new r.$iL(y.lineNumber, y.column, $.lineNumber, $.column),
							I = l.getValueInRange(v)
								? m.$jL.replace(v, s.content)
								: m.$jL.insert(y, s.content);
						l.pushEditOperations(
							[new u.$kL(y.lineNumber, y.column, y.lineNumber, y.column)],
							[I],
							() => [],
						);
					}
					async H() {
						return (
							(await this.h.exists(
								this.j.currentProfile.keybindingsResource,
							)) ||
								(await this.g.write(
									this.j.currentProfile.keybindingsResource,
									this.L(),
									{ encoding: "utf8" },
								)),
							this.f.createModelReference(
								this.j.currentProfile.keybindingsResource,
							)
						);
					}
					async I() {
						if (this.g.isDirty(this.j.currentProfile.keybindingsResource))
							throw new Error((0, t.localize)(12511, null));
						const s = await this.H(),
							l = s.object.textEditorModel,
							y = l.getEOL();
						if (l.getValue()) {
							const $ = this.J(l);
							if ($.parseErrors.length)
								throw (s.dispose(), new Error((0, t.localize)(12512, null)));
							if ($.result) {
								if (!Array.isArray($.result))
									throw (s.dispose(), new Error((0, t.localize)(12513, null)));
							} else {
								const v = y + "[]";
								this.G(
									{ content: v, length: v.length, offset: l.getValue().length },
									l,
								);
							}
						} else {
							const $ = this.L();
							this.G({ content: $, length: $.length, offset: 0 }, l);
						}
						return s;
					}
					J(s) {
						const l = [];
						return {
							result: w.$do(s.getValue(), l, {
								allowTrailingComma: !0,
								allowEmptyContent: !0,
							}),
							parseErrors: l,
						};
					}
					L() {
						return (
							"// " +
							(0, t.localize)(12514, null) +
							`
[
]`
						);
					}
				};
				(e.$fvc = f),
					(e.$fvc = f =
						Ne([j(0, a.$MO), j(1, g.$kZ), j(2, c.$ll), j(3, o.$P8)], f)),
					(0, p.$lK)(e.$evc, f, p.InstantiationType.Delayed);
			},
		),
		define(
			de[3785],
			he([
				1, 0, 4, 15, 7, 12, 3, 268, 410, 460, 50, 105, 217, 32, 121, 1309, 5,
				39, 1804, 468, 49, 1324, 35, 26, 8, 27, 51, 18, 46, 93, 40, 21, 6, 11,
				123, 612, 461, 106, 141, 114, 28, 1043, 74, 613, 10, 130, 518, 95, 72,
				91, 2476,
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
			) {
				"use strict";
				var Y, ie, ne, ee, _;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oCc = void 0),
					(w = mt(w));
				const te = w.$;
				let Q = class extends h.$JEb {
					static {
						Y = this;
					}
					static {
						this.ID = "workbench.editor.keybindings";
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(Y.ID, fe, me, ve, Ke),
							(this.qb = ge),
							(this.rb = be),
							(this.sb = Ce),
							(this.tb = Le),
							(this.ub = Fe),
							(this.vb = Oe),
							(this.wb = xe),
							(this.xb = He),
							(this.yb = Je),
							(this.zb = Te),
							(this.a = this.D(new M.$re())),
							(this.onDefineWhenExpression = this.a.event),
							(this.b = this.D(new M.$re())),
							(this.onRejectWhenExpression = this.b.event),
							(this.c = this.D(new M.$re())),
							(this.onAcceptWhenExpression = this.c.event),
							(this.f = this.D(new M.$re())),
							(this.onLayout = this.f.event),
							(this.g = null),
							(this.db = null),
							(this.eb = []),
							(this.hb = null),
							(this.jb = []),
							(this.ib = new i.$Jh(300)),
							this.D(ge.onDidUpdateKeybindings(() => this.Lb(!!this.lb.get()))),
							(this.kb = b.$qBc.bindTo(this.tb)),
							(this.mb = b.$rBc.bindTo(this.tb)),
							(this.lb = b.$sBc.bindTo(this.tb)),
							(this.s = new i.$Jh(500)),
							(this.ob = new u.$rj(
								b.$xBc,
								(0, t.localize)(8337, null),
								$.ThemeIcon.asClassName(R.$3Ac),
							)),
							(this.ob.checked = !1),
							(this.nb = new u.$rj(
								b.$yBc,
								(0, t.localize)(8338, null),
								$.ThemeIcon.asClassName(R.$4Ac),
							)),
							(this.nb.checked = !1),
							(this.overflowWidgetsDomNode = te(
								".keybindings-overflow-widgets-container.monaco-editor",
							));
					}
					create(fe) {
						super.create(fe),
							this.D(
								(0, K.$D3b)({
									name: "keybindingsEditor",
									focusNotifiers: [this],
									focusNextWidget: () => {
										this.r.hasFocus() && this.focusKeybindings();
									},
									focusPreviousWidget: () => {
										this.r.hasFocus() || this.focusSearch();
									},
								}),
							);
					}
					Y(fe) {
						const me = w.$fhb(fe, te("div", { class: "keybindings-editor" }));
						this.Bb(me), this.Cb(me), this.Fb(me), this.Jb(me);
					}
					setInput(fe, me, ve, ge) {
						return (
							this.kb.set(!0),
							super
								.setInput(fe, me, ve, ge)
								.then(() => this.Lb(!!(me && me.preserveFocus)))
						);
					}
					clearInput() {
						super.clearInput(), this.kb.reset(), this.lb.reset();
					}
					layout(fe) {
						(this.hb = fe),
							this.Ib(fe),
							(this.u.style.width = fe.width + "px"),
							(this.u.style.height = fe.height + "px"),
							this.cb.layout(this.hb),
							this.Qb(),
							this.f.fire();
					}
					focus() {
						super.focus();
						const fe = this.activeKeybindingEntry;
						fe ? this.Tb(fe) : E.$u || this.r.focus();
					}
					get activeKeybindingEntry() {
						const fe = this.gb.getFocusedElements()[0];
						return fe && fe.templateId === g.$qvc ? fe : null;
					}
					async defineKeybinding(fe, me) {
						this.Tb(fe), this.Db();
						try {
							const ve = await this.cb.define();
							ve &&
								(await this.updateKeybinding(
									fe,
									ve,
									fe.keybindingItem.when,
									me,
								));
						} catch (ve) {
							this.ec(ve);
						} finally {
							this.Eb(), this.Tb(fe);
						}
					}
					defineWhenExpression(fe) {
						fe.keybindingItem.keybinding && (this.Tb(fe), this.a.fire(fe));
					}
					rejectWhenExpression(fe) {
						this.b.fire(fe);
					}
					acceptWhenExpression(fe) {
						this.c.fire(fe);
					}
					async updateKeybinding(fe, me, ve, ge) {
						((fe.keybindingItem.keybinding
							? fe.keybindingItem.keybinding.getUserSettingsLabel()
							: "") !== me ||
							fe.keybindingItem.when !== ve) &&
							(ge
								? await this.sb.addKeybinding(
										fe.keybindingItem.keybindingItem,
										me,
										ve || void 0,
									)
								: await this.sb.editKeybinding(
										fe.keybindingItem.keybindingItem,
										me,
										ve || void 0,
									),
							fe.keybindingItem.keybinding || (this.db = fe));
					}
					async removeKeybinding(fe) {
						if ((this.Tb(fe), fe.keybindingItem.keybinding))
							try {
								await this.sb.removeKeybinding(
									fe.keybindingItem.keybindingItem,
								),
									this.focus();
							} catch (me) {
								this.ec(me), this.Tb(fe);
							}
					}
					async resetKeybinding(fe) {
						this.Tb(fe);
						try {
							await this.sb.resetKeybinding(fe.keybindingItem.keybindingItem),
								fe.keybindingItem.keybinding || (this.db = fe),
								this.Tb(fe);
						} catch (me) {
							this.ec(me), this.Tb(fe);
						}
					}
					async copyKeybinding(fe) {
						this.Tb(fe);
						const me = {
							key:
								(fe.keybindingItem.keybinding &&
									fe.keybindingItem.keybinding.getUserSettingsLabel()) ||
								"",
							command: fe.keybindingItem.command,
						};
						fe.keybindingItem.when && (me.when = fe.keybindingItem.when),
							await this.vb.writeText(JSON.stringify(me, null, "  "));
					}
					async copyKeybindingCommand(fe) {
						this.Tb(fe), await this.vb.writeText(fe.keybindingItem.command);
					}
					async copyKeybindingCommandTitle(fe) {
						this.Tb(fe),
							await this.vb.writeText(fe.keybindingItem.commandLabel);
					}
					focusSearch() {
						this.r.focus();
					}
					search(fe) {
						this.focusSearch(), this.r.setValue(fe), this.Tb(0);
					}
					clearSearchResults() {
						this.r.clear();
					}
					showSimilarKeybindings(fe) {
						const me = `"${fe.keybindingItem.keybinding.getAriaLabel()}"`;
						me !== this.r.getValue() && this.r.setValue(me);
					}
					Bb(fe) {
						(this.pb = w.$fhb(fe, w.$(""))),
							this.pb.setAttribute(
								"id",
								"keybindings-editor-aria-label-element",
							),
							this.pb.setAttribute("aria-live", "assertive");
					}
					Cb(fe) {
						(this.u = w.$fhb(fe, te(".overlay-container"))),
							(this.u.style.position = "absolute"),
							(this.u.style.zIndex = "40"),
							(this.cb = this.D(this.wb.createInstance(f.$fBc, this.u))),
							this.D(
								this.cb.onDidChange((me) =>
									this.cb.printExisting(this.g.fetch(`"${me}"`).length),
								),
							),
							this.D(
								this.cb.onShowExistingKeybidings((me) =>
									this.r.setValue(`"${me}"`),
								),
							),
							this.Eb();
					}
					Db() {
						this.u.style.display = "block";
					}
					Eb() {
						this.u.style.display = "none";
					}
					Fb(fe) {
						this.j = w.$fhb(fe, te(".keybindings-header"));
						const me = (0, t.localize)(8339, null),
							ve = (0, t.localize)(8340, null),
							ge = new u.$rj(
								b.$vBc,
								(0, t.localize)(8341, null),
								$.ThemeIcon.asClassName(R.$0Ac),
								!1,
								async () => this.clearSearchResults(),
							),
							be = w.$fhb(this.j, te(".search-container"));
						(this.r = this.D(
							this.wb.createInstance(f.$eBc, be, {
								ariaLabel: me,
								placeholder: me,
								focusKey: this.mb,
								ariaLabelledBy: "keybindings-editor-aria-label-element",
								recordEnter: !0,
								quoteRecordedKeys: !0,
								history:
									this.F(D.StorageScope.PROFILE, D.StorageTarget.USER)
										.searchHistory || [],
								inputBoxStyles: (0, B.$xyb)({ inputBorder: q.$hCc }),
							}),
						)),
							this.D(
								this.r.onDidChange((Oe) => {
									(ge.enabled = !!Oe),
										this.ib.trigger(() => this.Nb()),
										this.Gb();
								}),
							),
							this.D(this.r.onEscape(() => (this.ob.checked = !1))),
							(this.m = w.$fhb(
								be,
								w.$(".keybindings-search-actions-container"),
							));
						const Ce = this.Hb(this.m);
						this.D(
							this.nb.onDidChange((Oe) => {
								Oe.checked !== void 0 && this.Ob(!1), this.Gb();
							}),
						),
							this.D(
								this.ob.onDidChange((Oe) => {
									Oe.checked !== void 0 &&
										(Ce.classList.toggle("disabled", !Oe.checked),
										Oe.checked
											? (this.r.inputBox.setPlaceHolder(ve),
												this.r.inputBox.setAriaLabel(ve),
												this.r.startRecordingKeys(),
												this.r.focus())
											: (this.r.inputBox.setPlaceHolder(me),
												this.r.inputBox.setAriaLabel(me),
												this.r.stopRecordingKeys(),
												this.r.focus()),
										this.Gb());
								}),
							);
						const Le = [this.ob, this.nb, ge],
							Fe = this.D(
								new O.$jpb(this.m, this.rb, {
									actionViewItemProvider: (Oe, xe) => {
										if (Oe.id === this.nb.id || Oe.id === this.ob.id)
											return new d.$7ib(null, Oe, {
												...xe,
												keybinding: this.qb.lookupKeybinding(Oe.id)?.getLabel(),
												toggleStyles: B.$pyb,
											});
									},
									getKeyBinding: (Oe) => this.qb.lookupKeybinding(Oe.id),
								}),
							);
						Fe.setActions(Le),
							this.D(this.qb.onDidUpdateKeybindings(() => Fe.setActions(Le)));
					}
					Gb() {
						const fe = this.input;
						fe &&
							(fe.searchOptions = {
								searchValue: this.r.getValue(),
								recordKeybindings: !!this.ob.checked,
								sortByPrecedence: !!this.nb.checked,
							});
					}
					Hb(fe) {
						const me = w.$fhb(
							fe,
							w.$(".recording-badge.monaco-count-badge.long.disabled"),
						);
						return (
							(me.textContent = (0, t.localize)(8342, null)),
							(me.style.backgroundColor = (0, I.$rP)(I.$1P)),
							(me.style.color = (0, I.$rP)(I.$2P)),
							(me.style.border = `1px solid ${(0, I.$rP)(I.$OP)}`),
							me
						);
					}
					Ib(fe) {
						this.r.layout(fe),
							this.j.classList.toggle("small", fe.width < 400),
							(this.r.inputBox.inputElement.style.paddingRight = `${w.$vgb(this.m) + 12}px`);
					}
					Jb(fe) {
						const me = w.$fhb(fe, te(".keybindings-body"));
						this.Kb(me);
					}
					Kb(fe) {
						(this.fb = w.$fhb(fe, te(".keybindings-table-container"))),
							(this.gb = this.D(
								this.wb.createInstance(
									k.$AMb,
									"KeybindingsEditor",
									this.fb,
									new Z(),
									[
										{
											label: "",
											tooltip: "",
											weight: 0,
											minimumWidth: 40,
											maximumWidth: 40,
											templateId: se.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8343, null),
											tooltip: "",
											weight: 0.3,
											templateId: re.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8344, null),
											tooltip: "",
											weight: 0.2,
											templateId: le.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8345, null),
											tooltip: "",
											weight: 0.35,
											templateId: $e.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8346, null),
											tooltip: "",
											weight: 0.15,
											templateId: ae.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
									],
									[
										this.wb.createInstance(se, this),
										this.wb.createInstance(re),
										this.wb.createInstance(le),
										this.wb.createInstance($e, this),
										this.wb.createInstance(ae),
									],
									{
										identityProvider: { getId: (me) => me.id },
										horizontalScrolling: !1,
										accessibilityProvider: new ye(this.yb),
										keyboardNavigationLabelProvider: {
											getKeyboardNavigationLabel: (me) =>
												me.keybindingItem.commandLabel ||
												me.keybindingItem.command,
										},
										overrideStyles: { listBackground: I.$8P },
										multipleSelectionSupport: !1,
										setRowLineHeight: !1,
										openOnSingleClick: !1,
										transformOptimization: !1,
									},
								),
							)),
							this.D(this.gb.onContextMenu((me) => this.Ub(me))),
							this.D(this.gb.onDidChangeFocus((me) => this.Vb())),
							this.D(
								this.gb.onDidFocus(() => {
									this.gb.getHTMLElement().classList.add("focused"), this.Vb();
								}),
							),
							this.D(
								this.gb.onDidBlur(() => {
									this.gb.getHTMLElement().classList.remove("focused"),
										this.lb.reset();
								}),
							),
							this.D(
								this.gb.onDidOpen((me) => {
									if (me.browserEvent?.defaultPrevented) return;
									const ve = this.activeKeybindingEntry;
									ve && this.defineKeybinding(ve, !1);
								}),
							),
							w.$fhb(this.fb, this.overflowWidgetsDomNode);
					}
					async Lb(fe) {
						if (this.input) {
							const me = this.input;
							(this.g = await me.resolve()),
								await this.g.resolve(this.Mb()),
								this.Ob(!1, fe),
								me.searchOptions
									? ((this.ob.checked = me.searchOptions.recordKeybindings),
										(this.nb.checked = me.searchOptions.sortByPrecedence),
										this.r.setValue(me.searchOptions.searchValue))
									: this.Gb();
						}
					}
					Mb() {
						const fe = new Map();
						for (const me of P.EditorExtensionsRegistry.getEditorActions())
							fe.set(me.id, me.label);
						for (const me of N.$ZX.getMenuItems(N.$XX.CommandPalette))
							if ((0, N.$VX)(me)) {
								const ve =
										typeof me.command.title == "string"
											? me.command.title
											: me.command.title.value,
									ge = me.command.category
										? typeof me.command.category == "string"
											? me.command.category
											: me.command.category.value
										: void 0;
								fe.set(me.command.id, ge ? `${ge}: ${ve}` : ve);
							}
						return fe;
					}
					Nb() {
						this.Ob(this.r.hasFocus()),
							this.s.trigger(() => {
								this.r.inputBox.addToHistory(),
									(this.F(
										D.StorageScope.PROFILE,
										D.StorageTarget.USER,
									).searchHistory = this.r.inputBox.getHistory()),
									this.I();
							});
					}
					clearKeyboardShortcutSearchHistory() {
						this.r.inputBox.clearHistory(),
							(this.F(
								D.StorageScope.PROFILE,
								D.StorageTarget.USER,
							).searchHistory = this.r.inputBox.getHistory()),
							this.I();
					}
					Ob(fe, me) {
						if (this.g) {
							const ve = this.r.getValue(),
								ge = this.g.fetch(ve, this.nb.checked);
							this.zb.alert((0, t.localize)(8347, null, ge.length)),
								this.pb.setAttribute("aria-label", this.Pb(ge)),
								ge.length === 0 && this.jb.push(ve);
							const be = this.gb.getSelection()[0];
							if (
								((this.eb = ge),
								this.gb.splice(0, this.gb.length, this.eb),
								this.Qb(),
								fe)
							)
								this.gb.setSelection([]), this.gb.setFocus([]);
							else if (this.db) {
								const Ce = this.Sb(this.db);
								Ce !== -1 && (this.gb.reveal(Ce, 0.2), this.Tb(Ce)),
									(this.db = null);
							} else
								be !== -1 && be < this.eb.length
									? this.Tb(be, me)
									: this.xb.activeEditorPane === this && !me && this.focus();
						}
					}
					Pb(fe) {
						return this.nb.checked
							? (0, t.localize)(8348, null, fe.length)
							: (0, t.localize)(8349, null, fe.length);
					}
					Qb() {
						if (!this.hb) return;
						const fe = this.hb.height - (w.$tgb(this.j).height + 12);
						(this.fb.style.height = `${fe}px`), this.gb.layout(fe);
					}
					Rb(fe) {
						const me = this.eb.indexOf(fe);
						if (me === -1) {
							for (let ve = 0; ve < this.eb.length; ve++)
								if (this.eb[ve].id === fe.id) return ve;
						}
						return me;
					}
					Sb(fe) {
						for (let me = 0; me < this.eb.length; me++) {
							const ve = this.eb[me];
							if (
								ve.templateId === g.$qvc &&
								ve.keybindingItem.command === fe.keybindingItem.command
							)
								return me;
						}
						return -1;
					}
					Tb(fe, me = !0) {
						const ve = typeof fe == "number" ? fe : this.Rb(fe);
						ve !== -1 &&
							ve < this.gb.length &&
							(me && (this.gb.domFocus(), this.gb.setFocus([ve])),
							this.gb.setSelection([ve]));
					}
					focusKeybindings() {
						this.gb.domFocus();
						const fe = this.gb.getFocus();
						this.gb.setFocus([fe.length ? fe[0] : 0]);
					}
					selectKeybinding(fe) {
						this.Tb(fe);
					}
					recordSearchKeys() {
						this.ob.checked = !0;
					}
					toggleSortByPrecedence() {
						this.nb.checked = !this.nb.checked;
					}
					Ub(fe) {
						if (fe.element && fe.element.templateId === g.$qvc) {
							const me = fe.element;
							this.Tb(me),
								this.rb.showContextMenu({
									getAnchor: () => fe.anchor,
									getActions: () => [
										this.bc(me),
										this.cc(me),
										this.dc(me),
										new u.$tj(),
										...(me.keybindingItem.keybinding
											? [this.Wb(me), this.Xb(me)]
											: [this.Wb(me)]),
										new u.$tj(),
										this.Zb(me),
										this.$b(me),
										new u.$tj(),
										this.Yb(me),
										new u.$tj(),
										this.ac(me),
									],
								});
						}
					}
					Vb() {
						this.lb.reset();
						const fe = this.gb.getFocusedElements()[0];
						fe && fe.templateId === g.$qvc && this.lb.set(!0);
					}
					Wb(fe) {
						return {
							label: fe.keybindingItem.keybinding
								? (0, t.localize)(8350, null)
								: (0, t.localize)(8351, null),
							enabled: !0,
							id: b.$zBc,
							run: () => this.defineKeybinding(fe, !1),
						};
					}
					Xb(fe) {
						return {
							label: (0, t.localize)(8352, null),
							enabled: !0,
							id: b.$ABc,
							run: () => this.defineKeybinding(fe, !0),
						};
					}
					Yb(fe) {
						return {
							label: (0, t.localize)(8353, null),
							enabled: !!fe.keybindingItem.keybinding,
							id: b.$BBc,
							run: () => this.defineWhenExpression(fe),
						};
					}
					Zb(fe) {
						return {
							label: (0, t.localize)(8354, null),
							enabled: !!fe.keybindingItem.keybinding,
							id: b.$EBc,
							run: () => this.removeKeybinding(fe),
						};
					}
					$b(fe) {
						return {
							label: (0, t.localize)(8355, null),
							enabled: !fe.keybindingItem.keybindingItem.isDefault,
							id: b.$FBc,
							run: () => this.resetKeybinding(fe),
						};
					}
					ac(fe) {
						return {
							label: (0, t.localize)(8356, null),
							enabled: !!fe.keybindingItem.keybinding,
							id: b.$JBc,
							run: () => this.showSimilarKeybindings(fe),
						};
					}
					bc(fe) {
						return {
							label: (0, t.localize)(8357, null),
							enabled: !0,
							id: b.$GBc,
							run: () => this.copyKeybinding(fe),
						};
					}
					cc(fe) {
						return {
							label: (0, t.localize)(8358, null),
							enabled: !0,
							id: b.$HBc,
							run: () => this.copyKeybindingCommand(fe),
						};
					}
					dc(fe) {
						return {
							label: (0, t.localize)(8359, null),
							enabled: !!fe.keybindingItem.commandLabel,
							id: b.$IBc,
							run: () => this.copyKeybindingCommandTitle(fe),
						};
					}
					ec(fe) {
						this.ub.error(
							typeof fe == "string" ? fe : (0, t.localize)(8360, null, `${fe}`),
						);
					}
				};
				(e.$oCc = Q),
					(e.$oCc =
						Q =
						Y =
							Ne(
								[
									j(1, c.$km),
									j(2, y.$iP),
									j(3, o.$uZ),
									j(4, s.$Xxb),
									j(5, l.$evc),
									j(6, v.$6j),
									j(7, L.$4N),
									j(8, n.$Vxb),
									j(9, p.$Li),
									j(10, T.$IY),
									j(11, D.$lq),
									j(12, V.$gj),
									j(13, X.$XK),
								],
								Q,
							));
				class Z {
					constructor() {
						this.headerRowHeight = 30;
					}
					getHeight(fe) {
						if (fe.templateId === g.$qvc) {
							const me = fe.keybindingItem.commandLabel && fe.commandIdMatches,
								ve = !!fe.commandDefaultLabelMatches,
								ge = !!fe.extensionIdMatches;
							if (me && ve) return 60;
							if (ge || me || ve) return 40;
						}
						return 24;
					}
				}
				let se = class {
					static {
						ie = this;
					}
					static {
						this.TEMPLATE_ID = "actions";
					}
					constructor(fe, me) {
						(this.a = fe), (this.b = me), (this.templateId = ie.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".actions"));
						return { actionBar: new a.$eib(me) };
					}
					renderElement(fe, me, ve, ge) {
						ve.actionBar.clear();
						const be = [];
						fe.keybindingItem.keybinding
							? be.push(this.c(fe))
							: be.push(this.d(fe)),
							ve.actionBar.push(be, { icon: !0 });
					}
					c(fe) {
						const me = this.b.lookupKeybinding(b.$zBc);
						return {
							class: $.ThemeIcon.asClassName(R.$5Ac),
							enabled: !0,
							id: "editKeybinding",
							tooltip: me
								? (0, t.localize)(8361, null, `(${me.getLabel()})`)
								: (0, t.localize)(8362, null),
							run: () => this.a.defineKeybinding(fe, !1),
						};
					}
					d(fe) {
						const me = this.b.lookupKeybinding(b.$zBc);
						return {
							class: $.ThemeIcon.asClassName(R.$6Ac),
							enabled: !0,
							id: "addKeybinding",
							tooltip: me
								? (0, t.localize)(8363, null, `(${me.getLabel()})`)
								: (0, t.localize)(8364, null),
							run: () => this.a.defineKeybinding(fe, !1),
						};
					}
					disposeTemplate(fe) {
						fe.actionBar.dispose();
					}
				};
				se = ie = Ne([j(1, o.$uZ)], se);
				let re = class {
					static {
						ne = this;
					}
					static {
						this.TEMPLATE_ID = "commands";
					}
					constructor(fe) {
						(this.a = fe), (this.templateId = ne.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".command")),
							ve = this.a.setupManagedHover((0, J.$cib)("mouse"), me, ""),
							ge = w.$fhb(me, te(".command-label")),
							be = new m.$Wob(ge),
							Ce = w.$fhb(me, te(".command-default-label")),
							Le = new m.$Wob(Ce),
							Fe = w.$fhb(me, te(".command-id.code")),
							Oe = new m.$Wob(Fe);
						return {
							commandColumn: me,
							commandColumnHover: ve,
							commandLabelContainer: ge,
							commandLabel: be,
							commandDefaultLabelContainer: Ce,
							commandDefaultLabel: Le,
							commandIdLabelContainer: Fe,
							commandIdLabel: Oe,
						};
					}
					renderElement(fe, me, ve, ge) {
						const be = fe.keybindingItem,
							Ce = !!(be.commandLabel && fe.commandIdMatches),
							Le = !!fe.commandDefaultLabelMatches;
						ve.commandColumn.classList.toggle(
							"vertical-align-column",
							Ce || Le,
						);
						const Fe = be.commandLabel
							? (0, t.localize)(8365, null, be.commandLabel, be.command)
							: be.command;
						ve.commandColumn.setAttribute("aria-label", Fe),
							ve.commandColumnHover.update(Fe),
							be.commandLabel
								? (ve.commandLabelContainer.classList.remove("hide"),
									ve.commandLabel.set(be.commandLabel, fe.commandLabelMatches))
								: (ve.commandLabelContainer.classList.add("hide"),
									ve.commandLabel.set(void 0)),
							fe.commandDefaultLabelMatches
								? (ve.commandDefaultLabelContainer.classList.remove("hide"),
									ve.commandDefaultLabel.set(
										be.commandDefaultLabel,
										fe.commandDefaultLabelMatches,
									))
								: (ve.commandDefaultLabelContainer.classList.add("hide"),
									ve.commandDefaultLabel.set(void 0)),
							fe.commandIdMatches || !be.commandLabel
								? (ve.commandIdLabelContainer.classList.remove("hide"),
									ve.commandIdLabel.set(be.command, fe.commandIdMatches))
								: (ve.commandIdLabelContainer.classList.add("hide"),
									ve.commandIdLabel.set(void 0));
					}
					disposeTemplate(fe) {
						fe.commandColumnHover.dispose(),
							fe.commandDefaultLabel.dispose(),
							fe.commandIdLabel.dispose(),
							fe.commandLabel.dispose();
					}
				};
				re = ne = Ne([j(0, W.$Uyb)], re);
				class le {
					static {
						this.TEMPLATE_ID = "keybindings";
					}
					constructor() {
						this.templateId = le.TEMPLATE_ID;
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".keybinding"));
						return {
							keybindingLabel: new r.$7ob(
								w.$fhb(me, te("div.keybinding-label")),
								E.OS,
								B.$jyb,
							),
						};
					}
					renderElement(fe, me, ve, ge) {
						fe.keybindingItem.keybinding
							? ve.keybindingLabel.set(
									fe.keybindingItem.keybinding,
									fe.keybindingMatches,
								)
							: ve.keybindingLabel.set(void 0, void 0);
					}
					disposeTemplate(fe) {
						fe.keybindingLabel.dispose();
					}
				}
				function oe(ue, fe) {
					const me = new C.$Zc();
					return (
						me.add(w.$0fb(ue, w.$$gb.CLICK, w.$ohb(fe))),
						me.add(
							w.$0fb(ue, w.$$gb.KEY_UP, (ve) => {
								const ge = new z.$7fb(ve);
								(ge.equals(S.KeyCode.Space) || ge.equals(S.KeyCode.Enter)) &&
									(ve.preventDefault(), ve.stopPropagation(), fe());
							}),
						),
						me
					);
				}
				let ae = class {
					static {
						ee = this;
					}
					static {
						this.TEMPLATE_ID = "source";
					}
					constructor(fe, me) {
						(this.a = fe), (this.b = me), (this.templateId = ee.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".source")),
							ve = this.b.setupManagedHover((0, J.$cib)("mouse"), me, ""),
							ge = new m.$Wob(w.$fhb(me, te(".source-label"))),
							be = w.$fhb(me, te(".extension-container")),
							Ce = w.$fhb(be, te("a.extension-label", { tabindex: 0 })),
							Le = new m.$Wob(w.$fhb(be, te(".extension-id-container.code")));
						return {
							sourceColumn: me,
							sourceColumnHover: ve,
							sourceLabel: ge,
							extensionLabel: Ce,
							extensionContainer: be,
							extensionId: Le,
							disposables: new C.$Zc(),
						};
					}
					renderElement(fe, me, ve, ge) {
						if ((ve.disposables.clear(), (0, F.$lg)(fe.keybindingItem.source)))
							ve.extensionContainer.classList.add("hide"),
								ve.sourceLabel.element.classList.remove("hide"),
								ve.sourceColumnHover.update(""),
								ve.sourceLabel.set(
									fe.keybindingItem.source || "-",
									fe.sourceMatches,
								);
						else {
							ve.extensionContainer.classList.remove("hide"),
								ve.sourceLabel.element.classList.add("hide");
							const be = fe.keybindingItem.source,
								Ce = be.displayName ?? be.identifier.value;
							ve.sourceColumnHover.update((0, t.localize)(8366, null, Ce)),
								(ve.extensionLabel.textContent = Ce),
								ve.disposables.add(
									oe(ve.extensionLabel, () => {
										this.a.open(be.identifier.value);
									}),
								),
								fe.extensionIdMatches
									? (ve.extensionId.element.classList.remove("hide"),
										ve.extensionId.set(
											be.identifier.value,
											fe.extensionIdMatches,
										))
									: (ve.extensionId.element.classList.add("hide"),
										ve.extensionId.set(void 0));
						}
					}
					disposeTemplate(fe) {
						fe.sourceColumnHover.dispose(),
							fe.disposables.dispose(),
							fe.sourceLabel.dispose(),
							fe.extensionId.dispose();
					}
				};
				ae = ee = Ne([j(0, U.$MQb), j(1, W.$Uyb)], ae);
				let pe = class extends C.$1c {
					constructor(fe, me, ve, ge) {
						super(),
							(this.b = this.D(new M.$re())),
							(this.onDidAccept = this.b.event),
							(this.c = this.D(new M.$re())),
							(this.onDidReject = this.c.event);
						const be = b.$tBc.bindTo(ge);
						(this.a = this.D(
							ve.createInstance(
								x.$3Bc,
								"keyboardshortcutseditor#wheninput",
								fe,
								{
									provideResults: () => {
										const Ce = [];
										for (const Le of v.$5j.all())
											Ce.push({
												label: Le.key,
												documentation: Le.description,
												detail: Le.type,
												kind: H.CompletionItemKind.Constant,
											});
										return Ce;
									},
									triggerCharacters: ["!", " "],
									wordDefinition: /[a-zA-Z.]+/,
									alwaysShowSuggestions: !0,
								},
								"",
								"keyboardshortcutseditor#wheninput",
								{
									focusContextKey: be,
									overflowWidgetsDomNode: me.overflowWidgetsDomNode,
								},
							),
						)),
							this.D(
								w.$0fb(this.a.element, w.$$gb.DBLCLICK, (Ce) =>
									w.$ahb.stop(Ce),
								),
							),
							this.D((0, C.$Yc)(() => be.reset())),
							this.D(
								me.onAcceptWhenExpression(() => this.b.fire(this.a.getValue())),
							),
							this.D(
								M.Event.any(
									me.onRejectWhenExpression,
									this.a.onDidBlur,
								)(() => this.c.fire()),
							);
					}
					layout(fe) {
						this.a.layout(fe);
					}
					show(fe) {
						this.a.setValue(fe), this.a.focus(!0);
					}
				};
				pe = Ne([j(2, p.$Li), j(3, v.$6j)], pe);
				let $e = class {
					static {
						_ = this;
					}
					static {
						this.TEMPLATE_ID = "when";
					}
					constructor(fe, me, ve) {
						(this.a = fe),
							(this.b = me),
							(this.c = ve),
							(this.templateId = _.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".when")),
							ve = w.$fhb(me, te("div.when-label")),
							ge = new m.$Wob(ve),
							be = w.$fhb(me, te("div.when-input-container"));
						return {
							element: me,
							whenLabelContainer: ve,
							whenLabel: ge,
							whenInputContainer: be,
							disposables: new C.$Zc(),
						};
					}
					renderElement(fe, me, ve, ge) {
						ve.disposables.clear();
						const be = ve.disposables.add(new C.$Zc());
						ve.disposables.add(
							this.a.onDefineWhenExpression((Ce) => {
								if (fe === Ce) {
									ve.element.classList.add("input-mode");
									const Le = be.add(
										this.c.createInstance(pe, ve.whenInputContainer, this.a),
									);
									Le.layout(
										new w.$pgb(ve.element.parentElement.clientWidth, 18),
									),
										Le.show(fe.keybindingItem.when || "");
									const Fe = () => {
										be.clear(),
											ve.element.classList.remove("input-mode"),
											(ve.element.parentElement.style.paddingLeft = "10px"),
											w.$9fb(ve.whenInputContainer);
									};
									be.add(
										Le.onDidAccept((Oe) => {
											Fe(),
												this.a.updateKeybinding(
													fe,
													(fe.keybindingItem.keybinding &&
														fe.keybindingItem.keybinding.getUserSettingsLabel()) ||
														"",
													Oe,
												),
												this.a.selectKeybinding(fe);
										}),
									),
										be.add(
											Le.onDidReject(() => {
												Fe(), this.a.selectKeybinding(fe);
											}),
										),
										(ve.element.parentElement.style.paddingLeft = "0px");
								}
							}),
						),
							ve.whenLabelContainer.classList.toggle(
								"code",
								!!fe.keybindingItem.when,
							),
							ve.whenLabelContainer.classList.toggle(
								"empty",
								!fe.keybindingItem.when,
							),
							fe.keybindingItem.when
								? (ve.whenLabel.set(
										fe.keybindingItem.when,
										fe.whenMatches,
										fe.keybindingItem.when,
									),
									ve.disposables.add(
										this.b.setupManagedHover(
											(0, J.$cib)("mouse"),
											ve.element,
											fe.keybindingItem.when,
										),
									))
								: ve.whenLabel.set("-");
					}
					disposeTemplate(fe) {
						fe.disposables.dispose(), fe.whenLabel.dispose();
					}
				};
				$e = _ = Ne([j(1, W.$Uyb), j(2, p.$Li)], $e);
				class ye {
					constructor(fe) {
						this.a = fe;
					}
					getWidgetAriaLabel() {
						return (0, t.localize)(8367, null);
					}
					getAriaLabel({ keybindingItem: fe }) {
						const me = [
							fe.commandLabel ? fe.commandLabel : fe.command,
							fe.keybinding?.getAriaLabel() || (0, t.localize)(8368, null),
							fe.when ? fe.when : (0, t.localize)(8369, null),
							(0, F.$lg)(fe.source)
								? fe.source
								: (fe.source.description ?? fe.source.identifier.value),
						];
						if (
							this.a.getValue(
								G.AccessibilityVerbositySettingId.KeybindingsEditor,
							)
						) {
							const ve = (0, t.localize)(8370, null);
							me.push(ve);
						}
						return me.join(", ");
					}
				}
				(0, I.$wP)(
					"keybindingTable.headerBackground",
					I.$6S,
					"Background color for the keyboard shortcuts table header.",
				),
					(0, I.$wP)(
						"keybindingTable.rowsBackground",
						I.$6S,
						"Background color for the keyboard shortcuts table alternating rows.",
					),
					(0, y.$oP)((ue, fe) => {
						const me = ue.getColor(I.$IP);
						if (me) {
							const He = me.transparent(0.8).makeOpaque((0, A.$LEb)(ue));
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const ve = ue.getColor(I.$FS),
							ge = ue.getColor(I.$ES);
						if (ve && ge) {
							const He = ve.transparent(0.8).makeOpaque(ge);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const be = ue.getColor(I.$IS),
							Ce = ue.getColor(I.$HS);
						if (be && Ce) {
							const He = be.transparent(0.8).makeOpaque(Ce);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const Le = ue.getColor(I.$BS),
							Fe = ue.getColor(I.$AS);
						if (Le && Fe) {
							const He = Le.transparent(0.8).makeOpaque(Fe);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.focused .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const Oe = ue.getColor(I.$NS),
							xe = ue.getColor(I.$MS);
						if (Oe && xe) {
							const He = Oe.transparent(0.8).makeOpaque(xe);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row:hover:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
					});
			},
		),
		define(
			de[3786],
			he([1, 0, 3, 305, 78, 604, 211, 3542, 6, 952, 34, 62, 133, 773]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r3c = void 0);
				let n = class extends t.$1c {
					constructor(o, f, b, s, l, y, $) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = l),
							this.h.remoteAuthority
								? (this.a = this.D(
										new g(
											this.h.remoteAuthority,
											s.commit,
											s.quality,
											this.f,
											this.j,
											y,
											$,
										),
									))
								: (this.a = null),
							(this.b = null);
					}
					getConnection() {
						return this.a;
					}
					getEnvironment() {
						return this.getRawEnvironment().then(void 0, () => null);
					}
					getRawEnvironment() {
						return (
							this.b ||
								(this.b = this.m(async (o, f) => {
									const b = await d.$qK.getEnvironmentData(
										o,
										f.remoteAuthority,
										this.g.currentProfile.isDefault
											? void 0
											: this.g.currentProfile.id,
									);
									return (
										this.j._setAuthorityConnectionToken(
											f.remoteAuthority,
											b.connectionToken,
										),
										b
									);
								}, null)),
							this.b
						);
					}
					getExtensionHostExitInfo(o) {
						return this.m(
							(f, b) => d.$qK.getExtensionHostExitInfo(f, b.remoteAuthority, o),
							null,
						);
					}
					getDiagnosticInfo(o) {
						return this.m((f) => d.$qK.getDiagnosticInfo(f, o), void 0);
					}
					updateTelemetryLevel(o) {
						return this.n((f) => d.$qK.updateTelemetryLevel(f, o), void 0);
					}
					registerAuthId(o) {
						return this.n((f) => d.$qK.registerAuthId(f, o), void 0);
					}
					logTelemetry(o, f) {
						return this.n((b) => d.$qK.logTelemetry(b, o, f), void 0);
					}
					flushTelemetry() {
						return this.n((o) => d.$qK.flushTelemetry(o), void 0);
					}
					getRoundTripTime() {
						return this.n(
							async (o) => {
								const f = Date.now();
								return await d.$qK.ping(o), Date.now() - f;
							},
							void 0,
						);
					}
					async endConnection() {
						this.a && (await this.a.end(), this.a.dispose());
					}
					m(o, f) {
						const b = this.getConnection();
						return b
							? b.withChannel("remoteextensionsenvironment", (s) => o(s, b))
							: Promise.resolve(f);
					}
					n(o, f) {
						const b = this.getConnection();
						return b
							? b.withChannel("telemetry", (s) => o(s, b))
							: Promise.resolve(f);
					}
				};
				(e.$r3c = n),
					(e.$r3c = n =
						Ne(
							[
								j(0, c.$8l),
								j(1, h.$P8),
								j(2, w.$r8),
								j(3, a.$Bk),
								j(4, C.$3l),
								j(5, r.$$l),
								j(6, u.$ik),
							],
							n,
						));
				class g extends t.$1c {
					constructor(o, f, b, s, l, y, $) {
						super(),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.q = y),
							(this.r = $),
							(this.a = this.D(new m.$re())),
							(this.onReconnecting = this.a.event),
							(this.b = this.D(new m.$re())),
							(this.onDidStateChange = this.b.event),
							(this.end = () => Promise.resolve()),
							(this.remoteAuthority = o),
							(this.f = null);
					}
					getChannel(o) {
						return (0, i.$si)(this.s().then((f) => f.getChannel(o)));
					}
					withChannel(o, f) {
						const b = this.getChannel(o);
						return f(b);
					}
					registerChannel(o, f) {
						this.s().then((b) => b.registerChannel(o, f));
					}
					async getInitialConnectionTimeMs() {
						try {
							await this.s();
						} catch {}
						return this.g;
					}
					s() {
						return this.f || (this.f = this.t()), this.f;
					}
					async t() {
						let o = !0;
						const f = {
							commit: this.h,
							quality: this.j,
							addressProvider: {
								getAddress: async () => {
									o ? (o = !1) : this.a.fire(void 0);
									const { authority: l } = await this.n.resolveAuthority(
										this.remoteAuthority,
									);
									return {
										connectTo: l.connectTo,
										connectionToken: l.connectionToken,
									};
								},
							},
							remoteSocketFactoryService: this.m,
							signService: this.q,
							logService: this.r,
							ipcLogger: null,
						};
						let b;
						const s = Date.now();
						try {
							b = this.D(await (0, E.$_l)(f, this.remoteAuthority, "renderer"));
						} finally {
							this.g = Date.now() - s;
						}
						return (
							b.protocol.onDidDispose(() => {
								b.dispose();
							}),
							(this.end = () => (
								b.protocol.sendDisconnect(), b.protocol.drain()
							)),
							this.D(b.onDidStateChange((l) => this.b.fire(l))),
							b.client
						);
					}
				}
			},
		),
		define(
			de[3787],
			he([
				1, 0, 4, 143, 211, 62, 3786, 952, 34, 78, 40, 55, 32, 110, 9, 41, 133,
				773,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rcd = void 0),
					(t = mt(t));
				let f = class extends C.$r3c {
					constructor(l, y, $, v, S, I, T) {
						super(l, y, $, v, S, I, T);
					}
				};
				(e.$Rcd = f),
					(e.$Rcd = f =
						Ne(
							[
								j(0, o.$8l),
								j(1, p.$P8),
								j(2, r.$r8),
								j(3, E.$Bk),
								j(4, w.$3l),
								j(5, d.$$l),
								j(6, m.$ik),
							],
							f,
						));
				let b = class {
					static {
						this.ID =
							"workbench.contrib.nativeRemoteConnectionFailureNotification";
					}
					constructor(l, y, $, v, S, I, T) {
						(this.a = l),
							(this.b = I),
							this.a.getRawEnvironment().then(void 0, (P) => {
								if (!w.$6l.isHandled(P)) {
									const k = [
											{
												label: t.localize(12643, null),
												run: () => S.openDevTools(),
											},
										],
										L = this.c();
									L &&
										k.push({
											label: t.localize(12644, null),
											run: () => T.open(L, { openExternal: !0 }),
										}),
										y.prompt(
											u.Severity.Error,
											t.localize(12645, null, P ? P.message : ""),
											k,
										);
								}
							});
					}
					c() {
						const l = this.a.getConnection();
						if (!l) return null;
						const y = this.b.getConnectionData(l.remoteAuthority);
						return !y || y.connectTo.type !== w.RemoteConnectionType.WebSocket
							? null
							: n.URI.from({
									scheme: "http",
									authority: `${y.connectTo.host}:${y.connectTo.port}`,
									path: "/version",
								});
					}
				};
				(b = Ne(
					[
						j(0, i.$$m),
						j(1, u.$4N),
						j(2, r.$r8),
						j(3, h.$km),
						j(4, c.$y7c),
						j(5, w.$3l),
						j(6, g.$7rb),
					],
					b,
				)),
					(0, a.$s6)(b.ID, b, a.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[1902],
			he([
				1, 0, 33, 14, 3, 4, 959, 119, 154, 109, 5, 128, 34, 21, 129, 681, 60,
				133,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$exc = e.$dxc = e.$cxc = e.$bxc = e.$axc = void 0);
				let f = class {
					constructor(v, S, I, T, P) {
						(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P);
					}
					async initialize(v) {
						const S = JSON.parse(v),
							I = await this.d.getInstalled(
								void 0,
								this.c.currentProfile.extensionsResource,
							),
							T = [],
							P = [];
						for (const L of S) {
							const D = this.g
									.getDisabledExtensions()
									.some((N) => (0, m.$7p)(N, L.identifier)),
								M = I.find((N) => (0, m.$7p)(N.identifier, L.identifier));
							(!M || (!M.isBuiltin && M.preRelease !== L.preRelease)) &&
								P.push(L),
								D !== !!L.disabled &&
									T.push({ extension: L.identifier, enable: !L.disabled });
						}
						const k = I.filter(
							(L) =>
								!L.isBuiltin &&
								!S.some(({ identifier: D }) => (0, m.$7p)(D, L.identifier)),
						);
						for (const { extension: L, enable: D } of T)
							D
								? (this.h.trace(
										"Initializing Profile: Enabling extension...",
										L.id,
									),
									await this.g.enableExtension(L),
									this.h.info(
										"Initializing Profile: Enabled extension...",
										L.id,
									))
								: (this.h.trace(
										"Initializing Profile: Disabling extension...",
										L.id,
									),
									await this.g.disableExtension(L),
									this.h.info(
										"Initializing Profile: Disabled extension...",
										L.id,
									));
						if (P.length) {
							const L = await this.f.getExtensions(
								P.map((D) => ({
									...D.identifier,
									version: D.version,
									hasPreRelease: D.version ? void 0 : D.preRelease,
								})),
								t.CancellationToken.None,
							);
							await Promise.all(
								P.map(async (D) => {
									const M = L.find((N) =>
										(0, m.$7p)(N.identifier, D.identifier),
									);
									M &&
										((await this.d.canInstall(M))
											? (this.h.trace(
													"Initializing Profile: Installing extension...",
													M.identifier.id,
													M.version,
												),
												await this.d.installFromGallery(M, {
													isMachineScoped: !1,
													donotIncludePackAndDependencies: !0,
													installGivenVersion: !!D.version,
													installPreReleaseVersion: D.preRelease,
													profileLocation:
														this.c.currentProfile.extensionsResource,
													context: { [d.$up]: !0 },
												}),
												this.h.info(
													"Initializing Profile: Installed extension...",
													M.identifier.id,
													M.version,
												))
											: this.h.info(
													"Initializing Profile: Skipped installing extension because it cannot be installed.",
													M.identifier.id,
												));
								}),
							);
						}
						k.length && (await Promise.all(k.map((L) => this.d.uninstall(L))));
					}
				};
				(e.$axc = f),
					(e.$axc = f =
						Ne(
							[j(0, o.$P8), j(1, d.$Hp), j(2, d.$Ep), j(3, d.$Kp), j(4, h.$ik)],
							f,
						));
				let b = class {
					constructor(v, S, I, T, P) {
						(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P);
					}
					async getContent(v, S) {
						const I = await this.getLocalExtensions(v);
						return this.toContent(I, S);
					}
					toContent(v, S) {
						return JSON.stringify(
							S?.length
								? v.filter((I) => !S.includes(I.identifier.id.toLowerCase()))
								: v,
						);
					}
					async apply(v, S, I, T) {
						return this.i(S, async (P) => {
							const k = await this.getProfileExtensions(v),
								L = await this.c.getInstalled(void 0, S.extensionsResource),
								D = [],
								M = [];
							for (const A of k) {
								const R = P.getDisabledExtensions().some((B) =>
										(0, m.$7p)(B, A.identifier),
									),
									O = L.find((B) => (0, m.$7p)(B.identifier, A.identifier));
								(!O || (!O.isBuiltin && O.preRelease !== A.preRelease)) &&
									M.push(A),
									R !== !!A.disabled &&
										D.push({ extension: A.identifier, enable: !A.disabled });
							}
							const N = L.filter(
								(A) =>
									!A.isBuiltin &&
									!k.some(({ identifier: R }) => (0, m.$7p)(R, A.identifier)) &&
									!A.isApplicationScoped,
							);
							for (const { extension: A, enable: R } of D)
								R
									? (this.h.trace(
											`Importing Profile (${S.name}): Enabling extension...`,
											A.id,
										),
										await P.enableExtension(A),
										this.h.info(
											`Importing Profile (${S.name}): Enabled extension...`,
											A.id,
										))
									: (this.h.trace(
											`Importing Profile (${S.name}): Disabling extension...`,
											A.id,
										),
										await P.disableExtension(A),
										this.h.info(
											`Importing Profile (${S.name}): Disabled extension...`,
											A.id,
										));
							if (M.length) {
								this.h.info(
									`Importing Profile (${S.name}): Started installing extensions.`,
								);
								const A = await this.d.getExtensions(
										M.map((O) => ({
											...O.identifier,
											version: O.version,
											hasPreRelease: O.version ? void 0 : O.preRelease,
										})),
										t.CancellationToken.None,
									),
									R = [];
								if (
									(await Promise.all(
										M.map(async (O) => {
											const B = A.find((U) =>
												(0, m.$7p)(U.identifier, O.identifier),
											);
											B &&
												((await this.c.canInstall(B))
													? R.push({
															extension: B,
															options: {
																isMachineScoped: !1,
																donotIncludePackAndDependencies: !0,
																installGivenVersion: !!O.version,
																installPreReleaseVersion: O.preRelease,
																profileLocation: S.extensionsResource,
																context: { [d.$up]: !0 },
															},
														})
													: this.h.info(
															`Importing Profile (${S.name}): Skipped installing extension because it cannot be installed.`,
															B.identifier.id,
														));
										}),
									),
									R.length)
								)
									if (T)
										for (const O of R) {
											if (T.isCancellationRequested) return;
											I?.(
												(0, E.localize)(
													12902,
													null,
													O.extension.displayName ?? O.extension.identifier.id,
												),
											),
												await this.c.installFromGallery(O.extension, O.options);
										}
									else await this.c.installGalleryExtensions(R);
								this.h.info(
									`Importing Profile (${S.name}): Finished installing extensions.`,
								);
							}
							N.length &&
								(await Promise.all(N.map((A) => this.c.uninstall(A))));
						});
					}
					async copy(v, S, I) {
						await this.c.copyExtensions(
							v.extensionsResource,
							S.extensionsResource,
						);
						const T = await this.i(v, async (P) => P.getDisabledExtensions());
						if (I) {
							const P = await this.c.getInstalled(
								r.ExtensionType.User,
								S.extensionsResource,
							);
							for (const k of P) T.push(k.identifier);
						}
						await this.i(S, async (P) =>
							Promise.all(T.map((k) => P.disableExtension(k))),
						);
					}
					async getLocalExtensions(v) {
						return this.i(v, async (S) => {
							const I = new Map(),
								T = await this.c.getInstalled(void 0, v.extensionsResource),
								P = S.getDisabledExtensions();
							for (const k of T) {
								const { identifier: L, preRelease: D } = k,
									M = P.some((R) => (0, m.$7p)(R, L));
								if ((k.isBuiltin && !M) || (!k.isBuiltin && !k.identifier.uuid))
									continue;
								I.get(L.id.toLowerCase())?.disabled &&
									I.delete(L.id.toLowerCase());
								const A = {
									identifier: L,
									displayName: k.manifest.displayName,
								};
								M && (A.disabled = !0),
									!k.isBuiltin && k.pinned && (A.version = k.manifest.version),
									!A.version && D && (A.preRelease = !0),
									I.set(A.identifier.id.toLowerCase(), A);
							}
							return [...I.values()];
						});
					}
					async getProfileExtensions(v) {
						return JSON.parse(v);
					}
					async i(v, S) {
						return this.f.withProfileScopedStorageService(v, async (I) => {
							const T = new w.$Zc(),
								P = T.add(this.g.createChild(new a.$Ki([c.$lq, I]))),
								k = T.add(P.createInstance(C.$twc));
							try {
								return await S(k);
							} finally {
								T.dispose();
							}
						});
					}
				};
				(e.$bxc = b),
					(e.$bxc = b =
						Ne(
							[
								j(0, d.$Hp),
								j(1, d.$Ep),
								j(2, g.$0wc),
								j(3, u.$Li),
								j(4, h.$ik),
							],
							b,
						));
				class s {
					constructor() {
						(this.type = n.ProfileResourceType.Extensions),
							(this.handle = n.ProfileResourceType.Extensions),
							(this.label = { label: (0, E.localize)(12903, null) }),
							(this.collapsibleState = p.TreeItemCollapsibleState.Expanded),
							(this.contextValue = n.ProfileResourceType.Extensions),
							(this.c = new Set());
					}
					async getChildren() {
						const v = (await this.d()).sort((I, T) =>
								(I.displayName ?? I.identifier.id).localeCompare(
									T.displayName ?? T.identifier.id,
								),
							),
							S = this;
						return v.map((I) => ({
							handle: I.identifier.id.toLowerCase(),
							parent: this,
							label: { label: I.displayName || I.identifier.id },
							description: I.disabled ? (0, E.localize)(12904, null) : void 0,
							collapsibleState: p.TreeItemCollapsibleState.None,
							checkbox: S.checkbox
								? {
										get isChecked() {
											return !S.c.has(I.identifier.id.toLowerCase());
										},
										set isChecked(T) {
											T
												? S.c.delete(I.identifier.id.toLowerCase())
												: S.c.add(I.identifier.id.toLowerCase());
										},
										tooltip: (0, E.localize)(
											12905,
											null,
											I.displayName || I.identifier.id,
										),
										accessibilityInformation: {
											label: (0, E.localize)(
												12906,
												null,
												I.displayName || I.identifier.id,
											),
										},
									}
								: void 0,
							themeIcon: i.$ak.extensions,
							command: {
								id: "extension.open",
								title: "",
								arguments: [I.identifier.id, void 0, !0],
							},
						}));
					}
					async hasContent() {
						return (await this.d()).length > 0;
					}
				}
				e.$cxc = s;
				let l = class extends s {
					constructor(v, S) {
						super(), (this.f = v), (this.g = S);
					}
					isFromDefaultProfile() {
						return !this.f.isDefault && !!this.f.useDefaultFlags?.extensions;
					}
					d() {
						return this.g.createInstance(b).getLocalExtensions(this.f);
					}
					async getContent() {
						return this.g
							.createInstance(b)
							.getContent(this.f, [...this.c.values()]);
					}
				};
				(e.$dxc = l), (e.$dxc = l = Ne([j(1, u.$Li)], l));
				let y = class extends s {
					constructor(v, S) {
						super(), (this.f = v), (this.g = S);
					}
					isFromDefaultProfile() {
						return !1;
					}
					d() {
						return this.g.createInstance(b).getProfileExtensions(this.f);
					}
					async getContent() {
						const v = this.g.createInstance(b),
							S = await v.getProfileExtensions(this.f);
						return v.toContent(S, [...this.c.values()]);
					}
				};
				(e.$exc = y), (e.$exc = y = Ne([j(1, u.$Li)], y));
			},
		),
		define(
			de[3788],
			he([
				1, 0, 33, 29, 3, 82, 4, 57, 20, 34, 62, 327, 32, 129, 25, 78, 53, 87,
				133,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mxc = void 0);
				let b = class extends w.$1c {
					constructor(l, y, $, v, S, I, T, P, k, L, D) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.r = D),
							this.D(l.onDidChangeProfiles((M) => this.s(M))),
							this.D(l.onDidResetWorkspaces(() => this.t())),
							this.D(y.onDidChangeCurrentProfile((M) => this.u(M))),
							this.D(
								l.onDidChangeProfiles((M) => {
									const N = M.updated.find(
										(A) => this.b.currentProfile.id === A.id,
									);
									N && this.w(N, (0, C.localize)(12953, null));
								}),
							);
					}
					s(l) {
						if (l.removed.some((y) => y.id === this.b.currentProfile.id)) {
							this.w(this.a.defaultProfile, (0, C.localize)(12954, null));
							return;
						}
					}
					t() {
						if (!this.b.currentProfile.isDefault) {
							this.w(this.a.defaultProfile, (0, C.localize)(12955, null));
							return;
						}
					}
					async u(l) {
						l.previous.isTransient && (await this.a.cleanUpTransientProfiles());
					}
					async createProfile(l, y) {
						return this.a.createNamedProfile(l, y);
					}
					async createAndEnterProfile(l, y) {
						const $ = await this.a.createNamedProfile(
							l,
							y,
							(0, n.$1i)(this.g.getWorkspace()),
						);
						return (
							await this.w($),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "createAndEnterProfile",
							}),
							$
						);
					}
					async createAndEnterTransientProfile() {
						const l = await this.a.createTransientProfile(
							(0, n.$1i)(this.g.getWorkspace()),
						);
						return (
							await this.w(l),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "createAndEnterTransientProfile",
							}),
							l
						);
					}
					async updateProfile(l, y) {
						if (!this.a.profiles.some((v) => v.id === l.id))
							throw new Error(`Profile ${l.name} does not exist`);
						if (l.isDefault) throw new Error((0, C.localize)(12956, null));
						const $ = await this.a.updateProfile(l, y);
						return (
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "updateProfile",
							}),
							$
						);
					}
					async removeProfile(l) {
						if (!this.a.profiles.some((y) => y.id === l.id))
							throw new Error(`Profile ${l.name} does not exist`);
						if (l.isDefault) throw new Error((0, C.localize)(12957, null));
						await this.a.removeProfile(l),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "removeProfile",
							});
					}
					async switchProfile(l) {
						const y = (0, n.$1i)(this.g.getWorkspace());
						if (!this.a.profiles.some(($) => $.id === l.id))
							throw new Error(`Profile ${l.name} does not exist`);
						this.b.currentProfile.id !== l.id &&
							(await this.a.setProfileForWorkspace(y, l),
							await this.w(l),
							this.m.publicLog2("profileManagementActionExecuted", {
								id: "switchProfile",
							}));
					}
					async getBuiltinProfileTemplates() {
						if (this.n.profileTemplatesUrl)
							try {
								const l = await this.q.request(
									{ type: "GET", url: this.n.profileTemplatesUrl },
									t.CancellationToken.None,
								);
								if (l.res.statusCode === 200)
									return (await (0, a.$Gq)(l)) || [];
								this.r.error(
									"Could not get profile templates.",
									l.res.statusCode,
								);
							} catch (l) {
								this.r.error(l);
							}
						return [];
					}
					async w(l, y) {
						const $ = !!this.j.remoteAuthority,
							v =
								this.b.currentProfile.id !== l.id ||
								!(0, E.$zo)(
									this.b.currentProfile.useDefaultFlags,
									l.useDefaultFlags,
								);
						if (
							v &&
							!$ &&
							!(await this.h.stopExtensionHosts((0, C.localize)(12958, null)))
						)
							throw (
								(this.a.profiles.some(
									(S) => S.id === this.b.currentProfile.id,
								) &&
									(await this.a.setProfileForWorkspace(
										(0, n.$1i)(this.g.getWorkspace()),
										this.b.currentProfile,
									)),
								new i.$9())
							);
						if ((await this.b.updateCurrentProfile(l), v))
							if ($) {
								const { confirmed: S } = await this.f.confirm({
									message: y ?? (0, C.localize)(12959, null),
									primaryButton: (0, C.localize)(12960, null),
								});
								S && (await this.c.reload());
							} else await this.h.startExtensionHosts();
					}
				};
				(e.$mxc = b),
					(e.$mxc = b =
						Ne(
							[
								j(0, c.$Xl),
								j(1, f.$P8),
								j(2, o.$asb),
								j(3, d.$GO),
								j(4, n.$Vi),
								j(5, p.$q2),
								j(6, g.$r8),
								j(7, h.$km),
								j(8, u.$Bk),
								j(9, a.$Aq),
								j(10, r.$ik),
							],
							b,
						)),
					(0, m.$lK)(f.$Q8, b, m.InstantiationType.Eager);
			},
		),
		define(
			de[1044],
			he([1, 0, 3, 20, 5, 129, 143, 21, 34, 133, 24, 78, 1696]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nxc = void 0);
				const c = "associatedRemoteProfiles";
				e.$nxc = (0, w.$Mi)("IRemoteUserDataProfilesService");
				let n = class extends t.$1c {
					constructor(p, o, f, b, s, l) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.a = this.n());
					}
					async n() {
						const p = this.f.getConnection();
						if (!p) return;
						const o = await this.f.getEnvironment();
						if (!o) return;
						(this.b = new h.$gfb(
							o.profiles.all,
							o.profiles.home,
							p.getChannel("userDataProfiles"),
						)),
							this.D(this.g.onDidChangeProfiles((b) => this.q(b)));
						const f = await this.r(this.h.currentProfile, this.b);
						f.isDefault || this.t([...this.s(), f.id]), this.w();
					}
					async q(p) {
						for (const o of p.removed) {
							const f = this.b?.profiles.find((b) => b.id === o.id);
							f && (await this.b?.removeProfile(f));
						}
					}
					async getRemoteProfiles() {
						if ((await this.a, !this.b))
							throw new Error(
								"Remote profiles service not available in the current window",
							);
						return this.b.profiles;
					}
					async getRemoteProfile(p) {
						if ((await this.a, !this.b))
							throw new Error(
								"Remote profiles service not available in the current window",
							);
						return this.r(p, this.b);
					}
					async r(p, o) {
						if (p.isDefault) return o.defaultProfile;
						let f = o.profiles.find((b) => b.id === p.id);
						return (
							f ||
								((f = await o.createProfile(p.id, p.name, {
									shortName: p.shortName,
									transient: p.isTransient,
									useDefaultFlags: p.useDefaultFlags,
								})),
								this.t([...this.s(), this.h.currentProfile.id])),
							f
						);
					}
					s() {
						return this.c.remoteAuthority
							? (this.u()[this.c.remoteAuthority] ?? [])
							: [];
					}
					t(p) {
						if (this.c.remoteAuthority) {
							const o = this.u();
							(p = (0, u.$Qb)(p)),
								p.length
									? (o[this.c.remoteAuthority] = p)
									: delete o[this.c.remoteAuthority],
								Object.keys(o).length
									? this.j.store(
											c,
											JSON.stringify(o),
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										)
									: this.j.remove(c, d.StorageScope.APPLICATION);
						}
					}
					u() {
						if (this.c.remoteAuthority) {
							const p = this.j.get(c, d.StorageScope.APPLICATION);
							try {
								return p ? JSON.parse(p) : {};
							} catch (o) {
								this.m.error(o);
							}
						}
						return {};
					}
					async w() {
						const p = [];
						for (const o of this.s()) {
							const f = this.b?.profiles.find((s) => s.id === o);
							if (!f) continue;
							const b = this.g.profiles.find((s) => s.id === o);
							if (b) {
								(b.name !== f.name || b.shortName !== f.shortName) &&
									(await this.b?.updateProfile(f, {
										name: b.name,
										shortName: b.shortName,
									})),
									p.push(o);
								continue;
							}
							f && (await this.b?.removeProfile(f));
						}
						this.t(p);
					}
				};
				(n = Ne(
					[
						j(0, a.$r8),
						j(1, C.$$m),
						j(2, E.$Xl),
						j(3, r.$P8),
						j(4, d.$lq),
						j(5, m.$ik),
					],
					n,
				)),
					(0, i.$lK)(e.$nxc, n, i.InstantiationType.Delayed);
			},
		),
		define(
			de[3789],
			he([1, 0, 68, 1044, 1808, 133, 129]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c5c = void 0);
				let d = class extends w.$b5c {
					constructor(r, u, a, h, c) {
						super(r, u, c), (this.G = a), (this.H = h);
					}
					async F(r, u) {
						if (u || (!r && this.t.currentProfile.isDefault)) return !0;
						const a = await this.H.getRemoteProfile(this.t.currentProfile);
						return !!this.u.extUri.isEqual(a.extensionsResource, r);
					}
					async C(r) {
						if (!r && this.t.currentProfile.isDefault) return;
						r = await super.C(r);
						let u = this.G.profiles.find((a) =>
							this.u.extUri.isEqual(a.extensionsResource, r),
						);
						return (
							u
								? (u = await this.H.getRemoteProfile(u))
								: (u = (await this.H.getRemoteProfiles()).find((a) =>
										this.u.extUri.isEqual(a.extensionsResource, r),
									)),
							u?.extensionsResource
						);
					}
					async z(r, u, a) {
						const h = await this.H.getRemoteProfiles(),
							c = h.find((g) => this.u.extUri.isEqual(g.extensionsResource, r)),
							n = h.find((g) => this.u.extUri.isEqual(g.extensionsResource, u));
						return c?.id === n?.id
							? { added: [], removed: [] }
							: super.z(r, u, a);
					}
				};
				(e.$c5c = d),
					(e.$c5c = d =
						Ne([j(1, E.$P8), j(2, C.$Xl), j(3, i.$nxc), j(4, t.$Vl)], d));
			},
		),
		define(
			de[3790],
			he([1, 0, 143, 951, 12, 9, 133, 1044, 78, 34, 20, 704, 157]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
				let c = class {
					constructor(g, p, o, f, b, s, l) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.f = s),
							(this.g = l);
					}
					whenExtensionsReady() {
						return this.h((g) => g.call("whenExtensionsReady"), void 0);
					}
					async scanExtensions() {
						try {
							const g = await this.e.getExtensionIdProvidingCurrentLocale();
							return await this.h(async (p) => {
								const o = this.c.currentProfile.isDefault
										? void 0
										: (await this.d.getRemoteProfile(this.c.currentProfile))
												.extensionsResource,
									f = await p.call("scanExtensions", [
										w.$z,
										o,
										this.f.getInstalledWorkspaceExtensionLocations(),
										this.b.extensionDevelopmentLocationURI,
										g,
									]);
								return (
									f.forEach((b) => {
										b.extensionLocation = E.URI.revive(b.extensionLocation);
									}),
									f
								);
							}, []);
						} catch (g) {
							return this.g.error(g), [];
						}
					}
					h(g, p) {
						const o = this.a.getConnection();
						return o ? o.withChannel(i.$cfb, (f) => g(f)) : Promise.resolve(p);
					}
				};
				(c = Ne(
					[
						j(0, t.$$m),
						j(1, m.$r8),
						j(2, C.$P8),
						j(3, d.$nxc),
						j(4, a.$8Sb),
						j(5, h.$GQb),
						j(6, r.$ik),
					],
					c,
				)),
					(0, u.$lK)(i.$bfb, c, u.InstantiationType.Delayed);
			},
		),
		