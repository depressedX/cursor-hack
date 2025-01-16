define(
			de[4355],
			he([
				1, 0, 7, 127, 114, 105, 183, 50, 15, 33, 275, 29, 6, 103, 27, 3, 12, 9,
				4, 31, 10, 8, 5, 34, 21, 32, 51, 35, 26, 150, 217, 1043, 1293, 1745,
				1999, 1042, 4354, 468, 613, 66, 131, 838, 522, 612, 174, 261, 125, 53,
				279, 97, 61, 3122, 119, 81, 30, 106, 62, 518, 84, 133, 2478,
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
			) {
				"use strict";
				var le;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aEc = e.SettingsFocusContext = void 0),
					(e.$_Dc = ae),
					(t = mt(t)),
					(i = mt(i)),
					(p = mt(p));
				var oe;
				(function (ve) {
					(ve[(ve.Search = 0)] = "Search"),
						(ve[(ve.TableOfContents = 1)] = "TableOfContents"),
						(ve[(ve.SettingTree = 2)] = "SettingTree"),
						(ve[(ve.SettingControl = 3)] = "SettingControl");
				})(oe || (e.SettingsFocusContext = oe = {}));
				function ae(ve) {
					return c.Iterable.map(ve.children, (ge) => ({
						element: ge,
						children: ge instanceof R.$zCc ? ae(ge) : void 0,
					}));
				}
				const pe = t.$,
					$e = (0, f.localize)(8478, null),
					ye = "workbench.settings.settingsSearchTocBehavior",
					ue = "settingsEditorState";
				let fe = class extends L.$JEb {
					static {
						le = this;
					}
					static {
						this.ID = "workbench.editor.settings2";
					}
					static {
						this.a = 0;
					}
					static {
						this.b = 200;
					}
					static {
						this.c = 200;
					}
					static {
						this.f = 1e3;
					}
					static {
						this.j = 500;
					}
					static {
						this.r = 100;
					}
					static {
						this.u = 200;
					}
					static {
						this.cb = 500;
					}
					static {
						this.db = this.u + this.cb;
					}
					static {
						this.eb = [
							`@${B.$OBc}`,
							"@tag:notebookLayout",
							"@tag:notebookOutputLayout",
							`@tag:${B.$WBc}`,
							`@tag:${B.$VBc}`,
							"@tag:sync",
							"@tag:usesOnlineServices",
							"@tag:telemetry",
							"@tag:accessibility",
							`@${B.$RBc}`,
							`@${B.$PBc}`,
							`@${B.$QBc}scm`,
							`@${B.$QBc}explorer`,
							`@${B.$QBc}search`,
							`@${B.$QBc}debug`,
							`@${B.$QBc}extensions`,
							`@${B.$QBc}terminal`,
							`@${B.$QBc}task`,
							`@${B.$QBc}problems`,
							`@${B.$QBc}output`,
							`@${B.$QBc}comments`,
							`@${B.$QBc}remote`,
							`@${B.$QBc}timeline`,
							`@${B.$QBc}notebook`,
							`@${B.$UBc}`,
						];
					}
					static fb(ge) {
						return Array.isArray(ge)
							? !1
							: ge === F.SettingValueType.Enum ||
									ge === F.SettingValueType.Array ||
									ge === F.SettingValueType.BooleanObject ||
									ge === F.SettingValueType.Object ||
									ge === F.SettingValueType.Complex ||
									ge === F.SettingValueType.Boolean ||
									ge === F.SettingValueType.Exclude ||
									ge === F.SettingValueType.Include;
					}
					constructor(
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
					) {
						super(le.ID, ge, be, Fe, Te),
							(this.dc = Ce),
							(this.ec = Oe),
							(this.fc = xe),
							(this.gc = He),
							(this.hc = Ke),
							(this.ic = Te),
							(this.jc = Ee),
							(this.kc = Ie),
							(this.lc = Be),
							(this.mc = Se),
							(this.nc = ke),
							(this.oc = Ue),
							(this.pc = qe),
							(this.qc = Ae),
							(this.rc = Me),
							(this.sc = De),
							(this.Bb = null),
							(this.Gb = null),
							(this.Ib = null),
							(this.Jb = null),
							(this.Kb = null),
							(this.Lb = null),
							(this.Rb = oe.Search),
							(this.Sb = !1),
							(this.Tb = !1),
							(this.Vb = null),
							(this.Wb = null),
							(this.Xb = 0),
							(this.Zb = []),
							(this.$b = []),
							(this.ac = "settingsEditor2.dismissedExtensionSettings"),
							(this.bc = "	"),
							(this.zb = new m.$Jh(1e3)),
							(this.Ab = new m.$Jh(300)),
							(this.Hb = { settingsTarget: s.ConfigurationTarget.USER_LOCAL }),
							(this.Eb = new m.$Jh(le.c)),
							(this.Fb = new m.$Jh(le.f)),
							(this.Cb = new m.$Jh(le.b)),
							(this.Db = new m.$Jh(le.j)),
							(this.Ob = B.$lBc.bindTo(Je)),
							(this.Pb = B.$nBc.bindTo(Je)),
							(this.Mb = B.$oBc.bindTo(Je)),
							(this.Nb = B.$pBc.bindTo(Je)),
							(this.Qb = new Map()),
							(this.Ub = this.ab(Ee, Le, ue)),
							(this.$b = this.ic
								.get(this.ac, v.StorageScope.PROFILE, "")
								.split(this.bc)),
							this.D(
								Ce.onDidChangeConfiguration((je) => {
									je.source !== s.ConfigurationTarget.DEFAULT &&
										this.Wc(je.affectedKeys);
								}),
							),
							this.D(
								Re.onDidChangeCurrentProfile((je) => {
									je.join(this.tc());
								}),
							),
							this.D(
								Se.onDidChangeTrust(() => {
									this.vc?.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
										this.ub &&
											(this.ub.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
											this.Zc());
								}),
							),
							this.D(
								Ce.onDidChangeRestrictedSettings((je) => {
									je.default.length && this.uc && this.Xc(new Set(je.default));
								}),
							),
							this.D(
								qe.onDidInstallExtensions(() => {
									this.yc();
								}),
							),
							this.D(
								qe.onDidUninstallExtension(() => {
									this.yc();
								}),
							),
							(this.hb = this.D(new g.$Zc())),
							B.$YBc &&
								!le.eb.includes(`@${B.$SBc}`) &&
								le.eb.push(`@${B.$SBc}`),
							(this.cc = this.D(new g.$2c()));
					}
					async tc() {
						this.Db.trigger(() => {
							(this.$b = this.ic
								.get(this.ac, v.StorageScope.PROFILE, "")
								.split(this.bc)),
								this.Wc(void 0, !0);
						});
					}
					get minimumWidth() {
						return le.cb;
					}
					get maximumWidth() {
						return Number.POSITIVE_INFINITY;
					}
					get minimumHeight() {
						return 180;
					}
					set minimumWidth(ge) {}
					set maximumWidth(ge) {}
					get uc() {
						return this.vc || this.ub;
					}
					get vc() {
						return this.Ib;
					}
					set vc(ge) {
						(this.Ib = ge), this.ib.classList.toggle("search-mode", !!this.Ib);
					}
					get wc() {
						const ge = this.rb.getFocus()[0];
						if (ge instanceof R.$BCc)
							return this.sb.getDOMElementsForSettingKey(
								this.rb.getHTMLElement(),
								ge.setting.key,
							)[0];
					}
					get currentFocusContext() {
						return this.Rb;
					}
					Y(ge) {
						ge.setAttribute("tabindex", "-1"),
							(this.ib = t.$fhb(
								ge,
								pe(".settings-editor", { tabindex: "-1" }),
							)),
							this.Dc(this.ib),
							this.Ic(this.ib),
							this.Jc(this.ib),
							this.updateStyles(),
							this.D(
								(0, Z.$D3b)({
									name: "settingsEditor2",
									focusNotifiers: [this],
									focusNextWidget: () => {
										this.lb.inputWidget.hasWidgetFocus() && this.focusTOC();
									},
									focusPreviousWidget: () => {
										this.lb.inputWidget.hasWidgetFocus() || this.focusSearch();
									},
								}),
							);
					}
					async setInput(ge, be, Ce, Le) {
						if (
							(this.Ob.set(!0),
							await super.setInput(ge, be, Ce, Le),
							!this.input)
						)
							return;
						const Fe = await this.input.resolve();
						if (!(Le.isCancellationRequested || !(Fe instanceof x.$YZ))) {
							if (
								(this.hb.clear(),
								this.hb.add(
									Fe.onDidChangeGroups(() => {
										this.Db.trigger(() => {
											this.Wc(void 0, !1, !0);
										});
									}),
								),
								(this.gb = Fe),
								(be = be || (0, F.$6Z)({})),
								!this.Hb.settingsTarget || !this.ob.settingsTarget)
							) {
								const Oe = be.viewState && be.viewState.settingsTarget;
								!be.target &&
									!Oe &&
									(be.target = s.ConfigurationTarget.USER_LOCAL);
							}
							this.Ac(be),
								this.Wc(void 0, !0).then(() => {
									(this.cc.value = ge.onWillDispose(() => {
										this.lb.setValue("");
									})),
										this.Pc();
								}),
								await this.yc();
						}
					}
					async yc() {
						const ge = await this.pc.getInstalled();
						this.Zb = ge
							.filter((be) => be.manifest.contributes?.configuration)
							.map((be) => be.identifier.id);
					}
					zc() {
						const ge =
							this.input && this.Ub.loadEditorState(this.group, this.input);
						if (
							(ge &&
								typeof ge.target == "object" &&
								(ge.target = o.URI.revive(ge.target)),
							ge)
						) {
							const be = ge.target;
							(this.ob.settingsTarget = be),
								(this.Hb.settingsTarget = be),
								this.lb.getValue() || this.lb.setValue(ge.searchQuery);
						}
						return (
							this.input && this.Ub.clearEditorState(this.input, this.group),
							ge ?? null
						);
					}
					getViewState() {
						return this.Hb;
					}
					setOptions(ge) {
						super.setOptions(ge), ge && this.Ac(ge);
					}
					Ac(ge) {
						ge.focusSearch && !p.$u && this.focusSearch();
						const be = ge.viewState ? ge.viewState : void 0,
							Ce = be?.query ?? ge.query;
						Ce !== void 0 && (this.lb.setValue(Ce), (this.Hb.query = Ce));
						const Le = ge.folderUri ?? be?.settingsTarget ?? ge.target;
						Le && this.ob.updateTarget(Le);
					}
					clearInput() {
						this.Ob.set(!1), super.clearInput();
					}
					layout(ge) {
						if (((this.Yb = ge), !this.isVisible())) return;
						this.sd(ge);
						const Ce =
							Math.min(this.jb.clientWidth, ge.width) -
							24 * 2 -
							10 -
							this.mb.clientWidth -
							this.nb.clientWidth -
							12;
						this.lb.layout(new t.$pgb(Ce, 20)),
							this.ib.classList.toggle("narrow-width", ge.width < le.db);
					}
					focus() {
						if ((super.focus(), this.Rb === oe.Search))
							p.$u || this.focusSearch();
						else if (this.Rb === oe.SettingControl) {
							const ge = this.wc;
							if (ge) {
								const be = ge.querySelector(A.$ZDc.CONTROL_SELECTOR);
								if (be) {
									be.focus();
									return;
								}
							}
						} else
							this.Rb === oe.SettingTree
								? this.rb.domFocus()
								: this.Rb === oe.TableOfContents && this.yb.domFocus();
					}
					Z(ge) {
						super.Z(ge),
							ge ||
								setTimeout(() => {
									this.lb.onHide();
								}, 0);
					}
					focusSettings(ge = !1) {
						if (
							(this.rb.getFocus().length || this.rb.focusFirst(),
							this.rb.domFocus(),
							ge)
						) {
							const Ce = this.rb
								.getHTMLElement()
								.querySelector(`.focused ${A.$ZDc.CONTROL_SELECTOR}`);
							Ce && Ce.focus();
						}
					}
					focusTOC() {
						this.yb.domFocus();
					}
					showContextMenu() {
						const ge = this.rb.getFocus()[0],
							be = this.wc;
						be && ge instanceof R.$BCc && this.sb.showContextMenu(ge, be);
					}
					focusSearch(ge, be = !0) {
						ge && this.lb && this.lb.setValue(ge),
							this.lb.focus(be && !this.Cb.isTriggered);
					}
					clearSearchResults() {
						this.lb.setValue(""), this.focusSearch();
					}
					clearSearchFilters() {
						const be = this.lb
							.getValue()
							.split(" ")
							.filter(
								(Ce) => Ce.length && !le.eb.some((Le) => Ce.startsWith(Le)),
							);
						this.lb.setValue(be.join(" "));
					}
					Cc() {
						let ge = $e;
						this.Jb && (ge += `. ${this.Jb}`),
							this.Kb && (ge += `. ${this.Kb}`),
							this.lb.updateAriaLabel(ge);
					}
					Dc(ge) {
						this.jb = t.$fhb(ge, pe(".settings-header"));
						const be = t.$fhb(this.jb, pe(".search-container")),
							Ce = new d.$rj(
								B.$iBc,
								(0, f.localize)(8479, null),
								P.ThemeIcon.asClassName(q.$0Ac),
								!1,
								async () => this.clearSearchResults(),
							),
							Le = new d.$rj(
								B.$kBc,
								(0, f.localize)(8480, null),
								P.ThemeIcon.asClassName(q.$$Ac),
							);
						(this.lb = this.D(
							this.fc.createInstance(
								D.$3Bc,
								`${le.ID}.searchbox`,
								be,
								{
									triggerCharacters: ["@", ":"],
									provideResults: (He) => {
										const Ke = He.split(/\s/g);
										return Ke[Ke.length - 1].startsWith(`@${B.$SBc}`)
											? this.oc
													.getRegisteredLanguageIds()
													.map((Te) => `@${B.$SBc}${Te} `)
													.sort()
													.filter((Te) => !He.includes(Te))
											: Ke[Ke.length - 1].startsWith(`@${B.$PBc}`)
												? this.Zb.map((Te) => `@${B.$PBc}${Te} `)
														.sort()
														.filter((Te) => !He.includes(Te))
												: Ke[Ke.length - 1].startsWith("@")
													? le.eb
															.filter((Je) => !He.includes(Je))
															.map((Je) => (Je.endsWith(":") ? Je : Je + " "))
													: [];
									},
								},
								$e,
								"settingseditor:searchinput" + le.a++,
								{
									placeholderText: $e,
									focusContextKey: this.Pb,
									styleOverrides: { inputBorder: U.$hCc },
								},
							),
						)),
							this.D(
								this.lb.onDidFocus(() => {
									this.Rb = oe.Search;
								}),
							),
							(this.mb = t.$fhb(
								be,
								t.$(".settings-count-widget.monaco-count-badge.long"),
							)),
							(this.mb.style.backgroundColor = (0, I.$rP)(I.$1P)),
							(this.mb.style.color = (0, I.$rP)(I.$2P)),
							(this.mb.style.border = `1px solid ${(0, I.$rP)(I.$OP)}`),
							this.D(
								this.lb.onInputDidChange(() => {
									const He = this.lb.getValue();
									(Ce.enabled = !!He), this.Cb.trigger(() => this.ed());
								}),
							);
						const Fe = t.$fhb(this.jb, pe(".settings-header-controls"));
						Fe.style.borderColor = (0, I.$rP)(U.$9Bc);
						const Oe = t.$fhb(Fe, pe(".settings-target-container"));
						if (
							((this.ob = this.D(
								this.fc.createInstance(M.$bBc, Oe, {
									enableRemoteSettings: !0,
								}),
							)),
							(this.ob.settingsTarget = s.ConfigurationTarget.USER_LOCAL),
							this.ob.onDidTargetChange((He) => this.Ec(He)),
							this.D(
								t.$0fb(Oe, t.$$gb.KEY_DOWN, (He) => {
									new w.$7fb(He).keyCode === n.KeyCode.DownArrow &&
										this.focusSettings();
								}),
							),
							this.kc.enabled && this.lc.canToggleEnablement())
						) {
							const He = this.D(this.fc.createInstance(me, this.window, Fe));
							this.D(
								He.onDidChangeLastSyncedLabel((Ke) => {
									(this.Kb = Ke), this.Cc();
								}),
							);
						}
						(this.nb = t.$fhb(be, t.$(".settings-clear-widget"))),
							this.D(
								new E.$eib(this.nb, {
									actionViewItemProvider: (He, Ke) => {
										if (He.id === Le.id)
											return this.fc.createInstance(
												ie.$$Dc,
												He,
												Ke,
												this.N,
												this.lb,
											);
									},
								}),
							).push([Ce, Le], { label: !1, icon: !0 });
					}
					Ec(ge) {
						(this.Hb.settingsTarget = ge), this.Wc(void 0, !0);
					}
					Fc(ge) {
						this.$b.includes(ge) || this.$b.push(ge),
							this.ic.store(
								this.ac,
								this.$b.join(this.bc),
								v.StorageScope.PROFILE,
								v.StorageTarget.USER,
							),
							this.Wc(void 0, !0);
					}
					Gc(ge, be) {
						const Ce = this.uc.getElementsByName(ge.targetKey)?.[0];
						let Le = !1;
						if (Ce) {
							let Fe = 0.5;
							try {
								const Oe = this.rb.getRelativeTop(ge.source);
								Oe !== null && (Fe = Oe);
							} catch {}
							this.Hb.filterToCategory &&
								ge.source.displayCategory !== Ce.displayCategory &&
								this.yb.setFocus([]);
							try {
								this.rb.reveal(Ce, Fe);
							} catch {
								Le = !0;
							}
							if (!Le) {
								setTimeout(() => {
									this.rb.setFocus([Ce]);
								}, 50);
								const Oe = this.sb.getDOMElementsForSettingKey(
									this.rb.getHTMLElement(),
									ge.targetKey,
								);
								if (Oe && Oe[0]) {
									const xe = Oe[0].querySelector(A.$ZDc.CONTROL_SELECTOR);
									xe && xe.focus();
								}
							}
						}
						!be &&
							(!Ce || Le) &&
							this.hd("").then(() => {
								this.lb.setValue(""), this.Gc(ge, !0);
							});
					}
					switchToSettingsFile() {
						const ge = (0, R.$HCc)(this.lb.getValue()).query;
						return this.Hc({ query: ge });
					}
					async Hc(ge) {
						const be = this.ob.settingsTarget,
							Ce = { jsonEditor: !0, ...ge };
						if (be === s.ConfigurationTarget.USER_LOCAL)
							return ge?.revealSetting &&
								_.$Io.as(ee.$No.Configuration).getConfigurationProperties()[
									ge?.revealSetting.key
								]?.scope === ee.ConfigurationScope.APPLICATION
								? this.ec.openApplicationSettings(Ce)
								: this.ec.openUserSettings(Ce);
						if (be === s.ConfigurationTarget.USER_REMOTE)
							return this.ec.openRemoteSettings(Ce);
						if (be === s.ConfigurationTarget.WORKSPACE)
							return this.ec.openWorkspaceSettings(Ce);
						if (o.URI.isUri(be))
							return this.ec.openFolderSettings({ folderUri: be, ...Ce });
					}
					Ic(ge) {
						(this.kb = t.$fhb(ge, pe(".settings-body"))),
							(this.vb = t.$fhb(this.kb, pe(".no-results-message"))),
							(this.vb.innerText = (0, f.localize)(8481, null)),
							(this.wb = pe("span.clear-search-filters")),
							(this.wb.textContent = " - ");
						const be = t.$fhb(
							this.wb,
							pe(
								"a.pointer.prominent",
								{ tabindex: 0 },
								(0, f.localize)(8482, null),
							),
						);
						this.D(
							t.$0fb(be, t.$$gb.CLICK, (Fe) => {
								t.$ahb.stop(Fe, !1), this.clearSearchFilters();
							}),
						),
							t.$fhb(this.vb, this.wb),
							(this.vb.style.color = (0, I.$rP)(I.$9P)),
							(this.xb = pe(".settings-toc-container")),
							(this.qb = pe(".settings-tree-container")),
							this.Kc(this.xb),
							this.Nc(this.qb),
							(this.pb = this.D(
								new W.$vob(this.kb, {
									orientation: W.Orientation.HORIZONTAL,
									proportionalLayout: !0,
								}),
							));
						const Ce = this.ic.getNumber(
							"settingsEditor2.splitViewWidth",
							v.StorageScope.PROFILE,
							le.u,
						);
						this.pb.addView(
							{
								onDidChange: h.Event.None,
								element: this.xb,
								minimumSize: le.r,
								maximumSize: Number.POSITIVE_INFINITY,
								layout: (Fe, Oe, xe) => {
									(this.xb.style.width = `${Fe}px`), this.yb.layout(xe, Fe);
								},
							},
							Ce,
							void 0,
							!0,
						),
							this.pb.addView(
								{
									onDidChange: h.Event.None,
									element: this.qb,
									minimumSize: le.cb,
									maximumSize: Number.POSITIVE_INFINITY,
									layout: (Fe, Oe, xe) => {
										(this.qb.style.width = `${Fe}px`), this.rb.layout(xe, Fe);
									},
								},
								W.Sizing.Distribute,
								void 0,
								!0,
							),
							this.D(
								this.pb.onDidSashReset(() => {
									const Fe = this.pb.getViewSize(0) + this.pb.getViewSize(1);
									this.pb.resizeView(0, le.u), this.pb.resizeView(1, Fe - le.u);
								}),
							),
							this.D(
								this.pb.onDidSashChange(() => {
									const Fe = this.pb.getViewSize(0);
									this.ic.store(
										"settingsEditor2.splitViewWidth",
										Fe,
										v.StorageScope.PROFILE,
										v.StorageTarget.USER,
									);
								}),
							);
						const Le = this.h.getColor(U.$0Bc);
						this.pb.style({ separatorBorder: Le });
					}
					Jc(ge) {
						this.D(
							t.$$fb(ge, t.$$gb.KEY_DOWN, (be) => {
								be.keyCode === n.KeyCode.KeyA &&
									(p.$m ? be.metaKey : be.ctrlKey) &&
									be.target.tagName !== "TEXTAREA" &&
									be.target.tagName !== "INPUT" &&
									(be.browserEvent.stopPropagation(),
									be.browserEvent.preventDefault());
							}),
						);
					}
					Kc(ge) {
						(this.tb = this.fc.createInstance(O.$7Dc, this.Hb)),
							(this.yb = this.D(
								this.fc.createInstance(
									O.$0Dc,
									t.$fhb(
										ge,
										pe(".settings-toc-wrapper", {
											role: "navigation",
											"aria-label": (0, f.localize)(8483, null),
										}),
									),
									this.Hb,
								),
							)),
							(this.Tb = !1),
							this.D(
								this.yb.onDidFocus(() => {
									this.Rb = oe.TableOfContents;
								}),
							),
							this.D(
								this.yb.onDidChangeFocus((be) => {
									const Ce = be.elements?.[0] ?? null;
									this.Vb !== Ce &&
										((this.Vb = Ce),
										this.yb.setSelection(Ce ? [Ce] : []),
										this.vc
											? this.Hb.filterToCategory !== Ce &&
												((this.Hb.filterToCategory = Ce ?? void 0),
												this.Zc(void 0, !0),
												(this.rb.scrollTop = 0))
											: Ce &&
												(!be.browserEvent || !be.browserEvent.fromScroll) &&
												(this.rb.reveal(Ce, 0), this.rb.setFocus([Ce])));
								}),
							),
							this.D(
								this.yb.onDidFocus(() => {
									this.Mb.set(!0);
								}),
							),
							this.D(
								this.yb.onDidBlur(() => {
									this.Mb.set(!1);
								}),
							),
							this.D(
								this.yb.onDidDispose(() => {
									this.Tb = !0;
								}),
							);
					}
					Lc(ge) {
						if (this.lb && !this.lb.getValue().includes(ge)) {
							const be = `${ge} ${this.lb.getValue().trimStart()}`;
							this.focusSearch(be, !1);
						}
					}
					Mc() {
						if (this.lb && this.lb.getValue().includes(`@${B.$SBc}`)) {
							const be = this.lb
								.getValue()
								.split(" ")
								.filter((Ce) => !Ce.startsWith(`@${B.$SBc}`))
								.join(" ");
							this.focusSearch(be, !1);
						}
					}
					Nc(ge) {
						(this.sb = this.D(this.fc.createInstance(A.$3Dc))),
							this.D(
								this.sb.onDidChangeSetting((be) =>
									this.Oc(be.key, be.value, be.type, be.manualReset, be.scope),
								),
							),
							this.D(this.sb.onDidDismissExtensionSetting((be) => this.Fc(be))),
							this.D(
								this.sb.onDidOpenSettings((be) => {
									this.Hc({ revealSetting: { key: be, edit: !0 } });
								}),
							),
							this.D(this.sb.onDidClickSettingLink((be) => this.Gc(be))),
							this.D(
								this.sb.onDidFocusSetting((be) => {
									this.rb.setFocus([be]),
										(this.Rb = oe.SettingControl),
										this.Nb.set(!1);
								}),
							),
							this.D(
								this.sb.onDidChangeSettingHeight((be) => {
									const { element: Ce, height: Le } = be;
									try {
										this.rb.updateElementHeight(Ce, Le);
									} catch {}
								}),
							),
							this.D(this.sb.onApplyFilter((be) => this.Lc(be))),
							this.D(
								this.sb.onDidClickOverrideElement((be) => {
									this.Mc(),
										be.language && this.Lc(`@${B.$SBc}${be.language}`),
										be.scope === "workspace"
											? this.ob.updateTarget(s.ConfigurationTarget.WORKSPACE)
											: be.scope === "user"
												? this.ob.updateTarget(s.ConfigurationTarget.USER_LOCAL)
												: be.scope === "remote" &&
													this.ob.updateTarget(
														s.ConfigurationTarget.USER_REMOTE,
													),
										this.Lc(`@${B.$RBc}${be.settingKey}`);
								}),
							),
							(this.rb = this.D(
								this.fc.createInstance(
									A.$6Dc,
									ge,
									this.Hb,
									this.sb.allRenderers,
								),
							)),
							this.D(
								this.rb.onDidScroll(() => {
									this.rb.scrollTop !== this.Xb &&
										((this.Xb = this.rb.scrollTop),
										setTimeout(() => {
											this.Pc();
										}, 0));
								}),
							),
							this.D(
								this.rb.onDidFocus(() => {
									const be = ge.ownerDocument.activeElement?.classList;
									be &&
										be.contains("monaco-list") &&
										be.contains("settings-editor-tree") &&
										((this.Rb = oe.SettingTree),
										this.Nb.set(!0),
										(this.Wb ??= this.rb.firstVisibleElement ?? null),
										this.Wb && (this.Wb.tabbable = !0));
								}),
							),
							this.D(
								this.rb.onDidBlur(() => {
									this.Nb.set(!1), (this.Wb = null);
								}),
							),
							this.D(
								this.rb.onDidChangeFocus((be) => {
									const Ce = be.elements[0];
									this.Wb !== Ce &&
										(this.Wb && (this.Wb.tabbable = !1),
										(this.Wb = Ce),
										this.Wb && (this.Wb.tabbable = !0),
										this.rb.setSelection(Ce ? [Ce] : []));
								}),
							);
					}
					Oc(ge, be, Ce, Le, Fe) {
						const xe = (0, R.$HCc)(this.lb.getValue()).languageFilter;
						(Le || (this.Gb && this.Gb.key !== ge)) &&
							this.Rc(ge, be, Le, xe, Fe),
							(this.Gb = { key: ge, value: be, languageFilter: xe }),
							le.fb(Ce)
								? this.Eb.trigger(() => this.Rc(ge, be, Le, xe, Fe))
								: this.Fb.trigger(() => this.Rc(ge, be, Le, xe, Fe));
					}
					Pc() {
						if ((this.sb.cancelSuggesters(), this.vc || !this.tb)) return;
						const ge = this.rb.firstVisibleElement,
							be =
								ge instanceof R.$BCc
									? ge.parent
									: ge instanceof R.$zCc
										? ge
										: null;
						let Ce = !0;
						try {
							this.yb.getNode(be);
						} catch {
							Ce = !1;
						}
						if (Ce && be && this.yb.getSelection()[0] !== be) {
							const Le = this.Qc(be);
							Le.forEach((xe) => this.yb.expand(xe)), this.yb.reveal(be);
							const Fe = this.yb.getRelativeTop(be);
							if (typeof Fe != "number") return;
							this.yb.collapseAll(),
								Le.forEach((xe) => this.yb.expand(xe)),
								Fe < 0 || Fe > 1 ? this.yb.reveal(be) : this.yb.reveal(be, Fe),
								this.yb.expand(be),
								this.yb.setSelection([be]);
							const Oe = new KeyboardEvent("keydown");
							(Oe.fromScroll = !0), this.yb.setFocus([be], Oe);
						}
					}
					Qc(ge) {
						const be = [];
						for (; ge.parent; )
							ge.parent.id !== "root" && be.push(ge.parent), (ge = ge.parent);
						return be.reverse();
					}
					Rc(ge, be, Ce, Le, Fe) {
						const Oe = this.ob.settingsTarget,
							xe = o.URI.isUri(Oe) ? Oe : void 0,
							He =
								(xe ? s.ConfigurationTarget.WORKSPACE_FOLDER : Oe) ??
								s.ConfigurationTarget.USER_LOCAL,
							Ke = { resource: xe, overrideIdentifiers: Le ? [Le] : void 0 },
							Te =
								He === s.ConfigurationTarget.WORKSPACE ||
								He === s.ConfigurationTarget.WORKSPACE_FOLDER ||
								!!Le,
							Ee = Te ? Ce : be === void 0,
							Ie = this.dc.inspect(ge, Ke);
						return (
							!Te && Ie.defaultValue === be && (be = void 0),
							this.dc
								.updateValue(ge, be, Ke, He, { handleDirtyFile: "save" })
								.then(() => {
									const Be = this.lb.getValue();
									Be.includes(`@${B.$OBc}`) && this.cd(), this.Zc(ge, Ee);
									const Se = {
										key: ge,
										query: Be,
										searchResults: this.vc?.getUniqueResults() ?? null,
										rawResults: this.vc?.getRawResults() ?? null,
										showConfiguredOnly:
											!!this.Hb.tagFilters && this.Hb.tagFilters.has(B.$OBc),
										isReset: typeof be > "u",
										settingsTarget: this.ob.settingsTarget,
									};
									return (this.Gb = null), this.Sc(Se);
								})
						);
					}
					Sc(ge) {
						let be, Ce, Le;
						if (
							ge.searchResults &&
							((Le = ge.searchResults.filterMatches.findIndex(
								(xe) => xe.setting.key === ge.key,
							)),
							this.vc)
						) {
							const xe = this.vc.getRawResults();
							if (
								(xe[R.SearchResultIdx.Local] &&
									Le >= 0 &&
									(be = xe[R.SearchResultIdx.Local].filterMatches.some(
										(Ke) => Ke.setting.key === ge.key,
									)
										? "local"
										: "remote"),
								xe[R.SearchResultIdx.Remote])
							) {
								const He = xe[R.SearchResultIdx.Remote].filterMatches.findIndex(
									(Ke) => Ke.setting.key === ge.key,
								);
								Ce = He >= 0 ? He : void 0;
							}
						}
						const Fe =
								ge.settingsTarget === s.ConfigurationTarget.USER_LOCAL
									? "user"
									: ge.settingsTarget === s.ConfigurationTarget.USER_REMOTE
										? "user_remote"
										: ge.settingsTarget === s.ConfigurationTarget.WORKSPACE
											? "workspace"
											: "folder",
							Oe = {
								key: ge.key,
								groupId: be,
								nlpIndex: Ce,
								displayIndex: Le,
								showConfiguredOnly: ge.showConfiguredOnly,
								isReset: ge.isReset,
								target: Fe,
							};
						this.Q.publicLog2("settingsEditor.settingModified", Oe);
					}
					Tc(ge, be = "") {
						if (be && this.Qb.has(be)) return;
						be || ((0, g.$Vc)(this.Qb.values()), this.Qb.clear());
						const Ce = t.$dhb(ge);
						this.Qb.set(be, Ce),
							Ce.onDidBlur(() => {
								Ce.dispose(), this.Qb.delete(be), this.Wc(new Set([be]));
							});
					}
					Uc(ge) {
						const be = new Map();
						function Ce(Le, Fe = 0) {
							if (Le.settings)
								for (const Oe of Le.settings)
									be.has(Oe.key) || be.set(Oe.key, Fe++);
							if (Le.children) for (const Oe of Le.children) Fe = Ce(Oe, Fe);
							return Fe;
						}
						return Ce(ge), be;
					}
					Vc(ge) {
						this.ub.update(ge),
							(this.tb.settingsTreeRoot = this.ub.root),
							(this.Lb = this.Uc(ge));
					}
					async Wc(ge, be = !1, Ce = !1) {
						if (ge && this.ub) return this.Xc(ge);
						if (!this.gb) return;
						const Le = this.gb.settingsGroups.slice(1),
							Fe = Le.filter((Ie) => !Ie.extensionInfo),
							Oe = (0, A.$VDc)(N.$uCc, Fe, this.hc),
							xe = Oe.tree;
						if (Oe.leftoverSettings.size && !this.Sb) {
							const Ie = [];
							Oe.leftoverSettings.forEach((Be) => {
								Ie.push(Be.key);
							}),
								this.hc.warn(
									`SettingsEditor2: Settings not included in settingsLayout.ts: ${Ie.join(", ")}`,
								),
								(this.Sb = !0);
						}
						const He = [];
						let Ke = !1;
						const Je = await (0, B.$1Bc)(this.rc, this.qc);
						if (Je && Le.filter((Ie) => Ie.extensionInfo).length)
							for (const Ie in Je.settingsEditorRecommendedExtensions) {
								const Be = Je.recommendedExtensionsGalleryInfo[Ie];
								if (!Be) continue;
								const Se = Be.identifier.id,
									ke = this.Zb.includes(Se),
									Ue = Le.findIndex(
										(et) =>
											et.extensionInfo &&
											et.extensionInfo.id.toLowerCase() === Se.toLowerCase() &&
											et.sections.length === 1 &&
											et.sections[0].settings.length === 1 &&
											et.sections[0].settings[0].displayExtensionId,
									);
								if (ke || this.$b.includes(Se)) {
									Ue !== -1 && (Le.splice(Ue, 1), (Ke = !0));
									continue;
								}
								if (Ue !== -1) continue;
								let qe = null;
								try {
									qe = await this.rc.getManifest(Be, r.CancellationToken.None);
								} catch {
									continue;
								}
								const Ae = qe?.contributes?.configuration;
								let Me;
								Array.isArray(Ae)
									? Ae.length === 1 && (Me = Ae[0].title)
									: (Me = Ae?.title);
								const De = Je.settingsEditorRecommendedExtensions[Ie],
									Re = Be.displayName ?? Be.name ?? Se,
									je = `${Ie}.manageExtension`,
									Ve = {
										range: x.$WZ,
										key: je,
										keyRange: x.$WZ,
										value: null,
										valueRange: x.$WZ,
										description: [
											De.onSettingsEditorOpen?.descriptionOverride ??
												Be.description,
										],
										descriptionIsMarkdown: !1,
										descriptionRanges: [],
										scope: ee.ConfigurationScope.WINDOW,
										type: "null",
										displayExtensionId: Se,
										extensionGroupTitle: Me ?? Re,
										categoryLabel: "Extensions",
										title: Re,
									},
									Ze = {
										sections: [{ settings: [Ve] }],
										id: Se,
										title: Ve.extensionGroupTitle,
										titleRange: x.$WZ,
										range: x.$WZ,
										extensionInfo: { id: Se, displayName: Be.displayName },
									};
								Le.push(Ze), He.push(Ze), (Ke = !0);
							}
						xe.children.push(
							await (0, A.$XDc)(
								this.nc,
								Le.filter((Ie) => Ie.extensionInfo),
							),
						);
						const Te = (0, N.$tCc)(Je),
							Ee = (0, A.$VDc)(Te, Le, this.hc);
						if (
							(xe.children.unshift(Ee.tree),
							Je && Ke && this.gb.setAdditionalGroups(He),
							!this.mc.isWorkspaceTrusted() &&
								(this.Hb.settingsTarget instanceof o.URI ||
									this.Hb.settingsTarget === s.ConfigurationTarget.WORKSPACE))
						) {
							const Ie = (0, A.$WDc)(
								Le,
								this.Hb.settingsTarget,
								this.Hb.languageFilter,
								this.dc,
							);
							Ie.length &&
								xe.children.unshift({
									id: "workspaceTrust",
									label: (0, f.localize)(8484, null),
									settings: Ie,
								});
						}
						if ((this.vc?.updateChildren(), this.ub)) {
							if ((this.Vc(xe), Ce && this.vc)) return await this.ed();
							this.cd(), this.Zc(void 0, be);
						} else
							(this.ub = this.fc.createInstance(
								R.$CCc,
								this.Hb,
								this.mc.isWorkspaceTrusted(),
							)),
								this.Vc(xe),
								(this.Hb.query ? void 0 : this.zc())?.searchQuery ||
								this.lb.getValue()
									? await this.ed()
									: (this.cd(), this.bd(), this.yb.collapseAll());
					}
					Xc(ge) {
						ge.size
							? (this.vc &&
									ge.forEach((be) => this.vc.updateElementsByName(be)),
								this.ub && ge.forEach((be) => this.ub.updateElementsByName(be)),
								ge.forEach((be) => this.Zc(be)))
							: this.Zc();
					}
					Yc() {
						const ge = this.rb.getHTMLElement(),
							be = ge.ownerDocument.activeElement;
						return be && t.$Lgb(ge) ? be : null;
					}
					Zc(ge, be = !1) {
						if (!be && ge && this.Qb.has(ge)) {
							this.dd(ge);
							return;
						}
						if (this.$c()) {
							const Fe = this.window.document.querySelector(".context-view");
							Fe && this.Tc(Fe, ge);
							return;
						}
						const Ce = this.Yc(),
							Le = Ce && this.sb.getSettingDOMElementForDOMElement(Ce);
						if (Le && !be)
							if (ge) {
								if (
									Le.getAttribute(A.$ZDc.SETTING_KEY_ATTR) === ge &&
									Le.parentElement &&
									!Le.parentElement.classList.contains("setting-item-list")
								) {
									this.dd(ge), this.Tc(Le, ge);
									return;
								}
							} else {
								this.Tc(Le);
								return;
							}
						if ((this.qd(), ge)) {
							const Fe = this.uc.getElementsByName(ge);
							if (Fe && Fe.length)
								Fe.length >= 2 &&
									console.warn(
										"More than one setting with key " + ge + " found",
									),
									this.ad(Fe[0]);
							else return;
						} else this.bd();
					}
					$c() {
						return !!t.$Egb(
							this.ib.ownerDocument.activeElement,
							"context-view",
						);
					}
					ad(ge) {
						this.isVisible() && this.rb.rerender(ge);
					}
					bd() {
						this.isVisible() && this.rb.setChildren(null, ae(this.uc.root));
					}
					cd() {
						this.isVisible() &&
							(this.tb.update(),
							this.yb.setChildren(null, (0, O.$9Dc)(this.tb, this.yb)));
					}
					dd(ge) {
						const be = this.uc.getElementsByName(ge),
							Ce = be && be[0] && be[0].isConfigured,
							Le = this.sb.getDOMElementsForSettingKey(
								this.rb.getHTMLElement(),
								ge,
							);
						Le && Le[0] && Le[0].classList.toggle("is-configured", !!Ce);
					}
					async ed() {
						if (!this.uc) return;
						const ge = this.lb.getValue().trim();
						(this.Hb.query = ge),
							this.zb.cancel(),
							await this.hd(ge.replace(/\u203A/g, " ")),
							ge && this.vc && this.zb.trigger(() => this.kd(this.vc));
					}
					fd(ge) {
						const be = ge.match(/"([a-zA-Z.]+)": /);
						return be && be[1];
					}
					gd() {
						this.dc.getValue(ye) === "hide"
							? (this.pb.setViewVisible(0, !1),
								this.pb.style({ separatorBorder: X.$UL.transparent }))
							: (this.pb.setViewVisible(0, !0),
								this.pb.style({ separatorBorder: this.h.getColor(U.$0Bc) }));
					}
					async hd(ge) {
						const be = this.sc.show(!0);
						if (
							((this.Hb.tagFilters = new Set()),
							(this.Hb.extensionFilters = new Set()),
							(this.Hb.featureFilters = new Set()),
							(this.Hb.idFilters = new Set()),
							(this.Hb.languageFilter = void 0),
							ge)
						) {
							const Ce = (0, R.$HCc)(ge);
							(ge = Ce.query),
								Ce.tags.forEach((Le) => this.Hb.tagFilters.add(Le)),
								Ce.extensionFilters.forEach((Le) =>
									this.Hb.extensionFilters.add(Le),
								),
								Ce.featureFilters.forEach((Le) =>
									this.Hb.featureFilters.add(Le),
								),
								Ce.idFilters.forEach((Le) => this.Hb.idFilters.add(Le)),
								(this.Hb.languageFilter = Ce.languageFilter);
						}
						this.ob.updateLanguageFilterIndicators(this.Hb.languageFilter),
							ge && ge !== "@"
								? ((ge = this.fd(ge) || ge), await this.ld(ge), this.gd())
								: (this.Hb.tagFilters.size ||
									this.Hb.extensionFilters.size ||
									this.Hb.featureFilters.size ||
									this.Hb.idFilters.size ||
									this.Hb.languageFilter
										? (this.vc = this.jd())
										: (this.vc = null),
									this.Ab.cancel(),
									this.Bb &&
										(this.Bb.cancel(), this.Bb.dispose(), (this.Bb = null)),
									this.yb.setFocus([]),
									(this.Hb.filterToCategory = void 0),
									(this.tb.currentSearchModel = this.vc),
									this.vc
										? (this.yb.setSelection([]),
											this.yb.expandAll(),
											this.cd(),
											this.qd(),
											this.bd(),
											this.gd())
										: this.Tb ||
											(this.yb.collapseAll(),
											this.cd(),
											this.qd(),
											this.bd(),
											this.pb.setViewVisible(0, !0))),
							be.done();
					}
					jd() {
						const ge = this.fc.createInstance(
								R.$GCc,
								this.Hb,
								this.Lb,
								this.mc.isWorkspaceTrusted(),
							),
							be = { filterMatches: [] };
						for (const Ce of this.gb.settingsGroups.slice(1))
							for (const Le of Ce.sections)
								for (const Fe of Le.settings)
									be.filterMatches.push({
										setting: Fe,
										matches: [],
										matchType: F.SettingMatchType.None,
										score: 0,
									});
						return ge.setResult(0, be), ge;
					}
					kd(ge) {
						if (!ge) return;
						const be = {},
							Ce = ge.getRawResults(),
							Le = Ce[R.SearchResultIdx.Local];
						Le && (be.filterResult = Le.filterMatches.length);
						const Fe = Ce[R.SearchResultIdx.Remote];
						Fe && (be.nlpResult = Fe.filterMatches.length);
						const Oe = ge.getUniqueResults(),
							xe = {
								"counts.nlpResult": be.nlpResult,
								"counts.filterResult": be.filterResult,
								"counts.uniqueResultsCount": Oe?.filterMatches.length,
							};
						this.Q.publicLog2("settingsEditor.filter", xe);
					}
					async ld(ge) {
						this.Bb && (this.Bb.cancel(), (this.Bb = null));
						const be = (this.Bb = new r.$Ce());
						return this.Ab.trigger(async () => {
							if (!be.token.isCancellationRequested) {
								const Ce = await this.nd(ge, be.token);
								Ce &&
									!Ce.exactMatch &&
									!be.token.isCancellationRequested &&
									(await this.od(ge, be.token)),
									this.md();
							}
						});
					}
					md() {
						(this.tb.currentSearchModel = this.vc),
							this.tb.update(),
							this.yb.setFocus([]),
							(this.Hb.filterToCategory = void 0),
							this.yb.expandAll(),
							(this.rb.scrollTop = 0),
							this.cd(),
							this.Zc(void 0, !0);
					}
					nd(ge, be) {
						const Ce = this.gc.getLocalSearchProvider(ge);
						return this.pd(ge, R.SearchResultIdx.Local, Ce, be);
					}
					od(ge, be) {
						const Ce = this.gc.getRemoteSearchProvider(ge);
						return this.pd(ge, R.SearchResultIdx.Remote, Ce, be);
					}
					async pd(ge, be, Ce, Le) {
						const Fe = await this.rd(ge, this.gb, Ce, Le);
						return Le?.isCancellationRequested
							? null
							: ((this.vc ??= this.fc.createInstance(
									R.$GCc,
									this.Hb,
									this.Lb,
									this.mc.isWorkspaceTrusted(),
								)),
								this.vc.setResult(be, Fe),
								Fe);
					}
					qd() {
						if (this.uc)
							if (
								((this.wb.style.display =
									this.Hb.tagFilters && this.Hb.tagFilters.size > 0
										? "initial"
										: "none"),
								this.vc)
							) {
								const ge = this.vc.getUniqueResultsCount();
								let be;
								switch (ge) {
									case 0:
										be = (0, f.localize)(8485, null);
										break;
									case 1:
										be = (0, f.localize)(8486, null);
										break;
									default:
										be = (0, f.localize)(8487, null, ge);
								}
								(this.Jb = be),
									this.Cc(),
									(this.mb.innerText = be),
									i.$pib(be),
									this.mb.style.display !== "block" &&
										((this.mb.style.display = "block"), this.layout(this.Yb)),
									this.ib.classList.toggle("no-results", ge === 0),
									(this.pb.el.style.visibility =
										ge === 0 ? "hidden" : "visible");
							} else {
								this.mb.style.display !== "none" &&
									((this.Jb = null),
									this.Cc(),
									(this.mb.style.display = "none"),
									(this.mb.innerText = ""),
									this.layout(this.Yb)),
									this.ib.classList.remove("no-results"),
									(this.pb.el.style.visibility = "visible");
								return;
							}
					}
					rd(ge, be, Ce, Le) {
						return (Ce ? Ce.searchModel(be, Le) : Promise.resolve(null)).then(
							void 0,
							(Oe) => ((0, a.$8)(Oe) ? Promise.reject(Oe) : null),
						);
					}
					sd(ge) {
						const be = ge.height - 97;
						if (
							((this.pb.el.style.height = `${be}px`),
							this.pb.layout(this.kb.clientWidth, be),
							!(this.dc.getValue(ye) === "hide" && this.vc))
						) {
							const Fe = this.pb.isViewVisible(0),
								Oe = this.kb.clientWidth >= le.db;
							this.pb.setViewVisible(0, Oe),
								!Fe &&
									Oe &&
									this.kb.clientWidth >= le.cb + le.u &&
									this.pb.resizeView(0, le.u),
								this.pb.style({
									separatorBorder: Oe
										? this.h.getColor(U.$0Bc)
										: X.$UL.transparent,
								});
						}
					}
					I() {
						if (this.isVisible()) {
							const ge = this.lb.getValue().trim(),
								be = this.ob.settingsTarget;
							this.input &&
								this.Ub.saveEditorState(this.group, this.input, {
									searchQuery: ge,
									target: be,
								});
						} else
							this.input && this.Ub.clearEditorState(this.input, this.group);
						super.I();
					}
				};
				(e.$aEc = fe),
					(e.$aEc =
						fe =
						le =
							Ne(
								[
									j(1, S.$km),
									j(2, G.$RZ),
									j(3, K.$XO),
									j(4, T.$iP),
									j(5, F.$7Z),
									j(6, y.$Li),
									j(7, B.$hBc),
									j(8, $.$ik),
									j(9, l.$6j),
									j(10, v.$lq),
									j(11, z.$EY),
									j(12, H.$Nxc),
									j(13, k.$4Rb),
									j(14, V.$pO),
									j(15, J.$q2),
									j(16, Y.$nM),
									j(17, ne.$Hp),
									j(18, Q.$Bk),
									j(19, ne.$Ep),
									j(20, se.$bO),
									j(21, re.$P8),
								],
								fe,
							));
				let me = class extends g.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe) {
						super(),
							(this.f = Ce),
							(this.h = Le),
							(this.j = Fe),
							(this.c = this.D(new h.$re())),
							(this.onDidChangeLastSyncedLabel = this.c.event);
						const xe = t.$fhb(be, pe(".settings-right-controls")),
							He = t.$fhb(xe, pe(".turn-on-sync"));
						(this.b = this.D(new C.$oob(He, { title: !0, ...te.$lyb }))),
							(this.a = t.$fhb(xe, pe(".last-synced-label"))),
							t.hide(this.a),
							(this.b.enabled = !0),
							(this.b.label = (0, f.localize)(8488, null)),
							t.hide(this.b.element),
							this.D(
								this.b.onDidClick(async () => {
									Oe.publicLog2("sync/turnOnSyncFromSettings"),
										await this.f.executeCommand(
											"workbench.userDataSync.actions.turnOn",
										);
								}),
							),
							this.n(),
							this.D(
								this.h.onDidChangeLastSyncTime(() => {
									this.n();
								}),
							),
							this.D(new t.$jgb()).cancelAndSet(() => this.n(), 60 * 1e3, ge),
							this.q(),
							this.D(
								this.h.onDidChangeStatus(() => {
									this.q();
								}),
							),
							this.D(
								this.j.onDidChangeEnablement(() => {
									this.q();
								}),
							);
					}
					n() {
						const ge = this.h.lastSyncTime;
						let be;
						if (typeof ge == "number") {
							const Ce = (0, u.$dn)(ge, !0, void 0, !0);
							be = (0, f.localize)(8489, null, Ce);
						} else be = "";
						(this.a.textContent = be), this.c.fire(be);
					}
					q() {
						this.h.status !== k.SyncStatus.Uninitialized &&
							(this.j.isEnabled() || this.h.status !== k.SyncStatus.Idle
								? (t.show(this.a), t.hide(this.b.element))
								: (t.hide(this.a), t.show(this.b.element)));
					}
				};
				me = Ne([j(2, b.$ek), j(3, k.$5Rb), j(4, k.$4Rb), j(5, S.$km)], me);
			},
		),
		