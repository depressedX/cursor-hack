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
		