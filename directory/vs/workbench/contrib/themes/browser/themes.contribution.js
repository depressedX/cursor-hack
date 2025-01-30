import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/strings.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/themes/common/workbenchThemeService.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/color.js';
import '../../../../platform/theme/common/theme.js';
import '../../../services/themes/common/colorThemeSchema.js';
import '../../../../base/common/errors.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../services/themes/browser/productIconThemeData.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/event.js';
import '../../../../platform/extensionResourceLoader/common/extensionResourceLoader.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/themes/browser/fileIconThemeData.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/platform.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/host/browser/host.js';
import '../../../../base/browser/window.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3726],
			he([
				1, 0, 4, 27, 11, 37, 30, 99, 333, 141, 119, 51, 18, 97, 212, 1321, 29,
				63, 1890, 142, 60, 15, 33, 34, 84, 14, 79, 26, 6, 546, 5, 43, 31, 1889,
				10, 57, 55, 52, 40, 21, 12, 32, 87, 75, 131, 268, 106, 3,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*keyCodes*/,
				w /*actions*/,
				E /*strings*/,
				C /*platform*/,
				d /*actionCommonCategories*/,
				m /*workbenchThemeService*/,
				r /*extensions*/,
				u /*extensionManagement*/,
				a /*colorRegistry*/,
				h /*editorService*/,
				c /*color*/,
				n /*theme*/,
				g /*colorThemeSchema*/,
				p /*errors*/,
				o /*quickInput*/,
				f /*productIconThemeData*/,
				b /*panecomposite*/,
				s /*views*/,
				l /*async*/,
				y /*cancellation*/,
				$ /*log*/,
				v /*progress*/,
				S /*codicons*/,
				I /*iconRegistry*/,
				T /*themables*/,
				P /*event*/,
				k /*extensionResourceLoader*/,
				L /*instantiation*/,
				D /*keybindingsRegistry*/,
				M /*commands*/,
				N /*fileIconThemeData*/,
				A /*configuration*/,
				R /*dialogs*/,
				O /*contributions*/,
				B /*lifecycle*/,
				U /*notification*/,
				z /*storage*/,
				F /*platform*/,
				x /*telemetry*/,
				H /*host*/,
				q /*window*/,
				V /*preferences*/,
				G /*toggle*/,
				K /*defaultStyles*/,
				J /*lifecycle*/,
) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Xc = void 0),
					(e.$0Xc = (0, I.$$O)(
						"theme-selection-manage-extension",
						S.$ak.gear,
						(0, t.localize)(10951, null),
					));
				var X;
				(function (fe) {
					(fe.BROWSE_GALLERY = "marketplace"),
						(fe.EXTENSIONS_VIEW = "extensions"),
						(fe.CUSTOM_TOP_ENTRY = "customTopEntry");
				})(X || (X = {}));
				let Y = class {
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						(this.l = me),
							(this.m = ve),
							(this.n = ge),
							(this.o = be),
							(this.q = Ce),
							(this.r = Le),
							(this.u = Fe),
							(this.v = Oe),
							(this.w = xe),
							(this.b = new Set()),
							(this.d = []),
							(this.f = !1),
							(this.g = void 0),
							(this.h = new P.$re()),
							(this.k = new l.$Kh(200)),
							(this.a = be.getInstalled().then((He) => {
								const Ke = new Set();
								for (const Je of He) Ke.add(Je.identifier.id);
								return Ke;
							}));
					}
					get themes() {
						return this.d;
					}
					get onDidChange() {
						return this.h.event;
					}
					trigger(me) {
						this.j && (this.j.cancel(), (this.j = void 0)),
							this.k.trigger(
								() => ((this.j = new y.$Ce()), this.x(me, this.j.token)),
							);
					}
					async x(me, ve) {
						(this.f = !0), this.h.fire();
						try {
							const ge = await this.a,
								be = { text: `${this.m} ${me}`, pageSize: 20 },
								Ce = await this.n.query(be, ve);
							for (
								let Le = 0;
								Le < Ce.total && Le < 1 && !ve.isCancellationRequested;
								Le++
							) {
								const Fe = this.d.length,
									Oe = Le === 0 ? Ce.firstPage : await Ce.getPage(Le, ve),
									xe = [],
									He = [];
								for (
									let Je = 0;
									Je < Oe.length && !ve.isCancellationRequested;
									Je++
								) {
									const Te = Oe[Je];
									!ge.has(Te.identifier.id) &&
										!this.b.has(Te.identifier.id) &&
										(this.b.add(Te.identifier.id),
										xe.push(this.l(Te.publisher, Te.name, Te.version)),
										He.push(Te));
								}
								const Ke = await Promise.all(xe);
								for (let Je = 0; Je < Ke.length; Je++) {
									const Te = He[Je];
									for (const Ee of Ke[Je])
										this.d.push({
											id: Ee.id,
											theme: Ee,
											label: Ee.label,
											description: `${Te.displayName} \xB7 ${Te.publisherDisplayName}`,
											galleryExtension: Te,
											buttons: [oe],
										});
								}
								Fe !== this.d.length &&
									(this.d.sort((Je, Te) => Je.label.localeCompare(Te.label)),
									this.h.fire());
							}
						} catch (ge) {
							(0, p.$8)(ge) ||
								(this.r.error("Error while searching for themes:", ge),
								(this.g = "message" in ge ? ge.message : String(ge)));
						} finally {
							(this.f = !1), this.h.fire();
						}
					}
					openQuickPick(me, ve, ge) {
						let be;
						const Ce = new J.$Zc();
						return new Promise((Le, Fe) => {
							const Oe = Ce.add(this.q.createQuickPick());
							(Oe.items = []),
								(Oe.sortByLabel = !1),
								(Oe.matchOnDescription = !0),
								(Oe.buttons = [this.q.backButton]),
								(Oe.title = "Marketplace Themes"),
								(Oe.placeholder = (0, t.localize)(10952, null)),
								(Oe.canSelectMany = !1),
								Ce.add(Oe.onDidChangeValue(() => this.trigger(Oe.value))),
								Ce.add(
									Oe.onDidAccept(async (xe) => {
										const He = Oe.selectedItems[0];
										if (He?.galleryExtension) {
											(be = "selected"), Oe.hide();
											const Ke = await this.y(He.galleryExtension);
											ge(Ke ? He.theme : ve, !0);
										}
									}),
								),
								Ce.add(
									Oe.onDidTriggerItemButton((xe) => {
										if (se(xe.item)) {
											const He = xe.item.theme?.extensionData?.extensionId;
											He
												? Z(this.v, `@id:${He}`)
												: Z(this.v, `${this.m} ${Oe.value}`);
										}
									}),
								),
								Ce.add(
									Oe.onDidChangeActive((xe) => {
										be === void 0 && ge(xe[0]?.theme, !1);
									}),
								),
								Ce.add(
									Oe.onDidHide(() => {
										be === void 0 && (ge(ve, !0), (be = "cancelled")), Le(be);
									}),
								),
								Ce.add(
									Oe.onDidTriggerButton((xe) => {
										xe === this.q.backButton && ((be = "back"), Oe.hide());
									}),
								),
								Ce.add(
									this.onDidChange(() => {
										let xe = this.themes;
										this.f
											? (xe = xe.concat({
													label: "$(sync~spin) Searching for themes...",
													id: void 0,
													alwaysShow: !0,
												}))
											: xe.length === 0 &&
												this.g &&
												(xe = [
													{
														label: `$(error) ${(0, t.localize)(10953, null, this.g)}`,
														id: void 0,
														alwaysShow: !0,
													},
												]);
										const He = Oe.activeItems[0]?.id,
											Ke = He
												? xe.find((Je) => se(Je) && Je.id === He)
												: void 0;
										(Oe.items = xe), Ke && (Oe.activeItems = [Ke]);
									}),
								),
								this.trigger(me),
								Oe.show();
						}).finally(() => {
							Ce.dispose();
						});
					}
					async y(me) {
						if (
							(Z(this.v, `@id:${me.identifier.id}`),
							!(
								await this.w.confirm({
									message: (0, t.localize)(
										10954,
										null,
										me.displayName,
										me.publisherDisplayName,
									),
									primaryButton: (0, t.localize)(10955, null),
								})
							).confirmed)
						)
							return !1;
						try {
							return (
								await this.u.withProgress(
									{
										location: v.ProgressLocation.Notification,
										title: (0, t.localize)(10956, null, me.displayName),
									},
									async () => {
										await this.o.installFromGallery(me, {
											isMachineScoped: !1,
										});
									},
								),
								!0
							);
						} catch (ge) {
							return (
								this.r.error(
									`Problem installing extension ${me.identifier.id}`,
									ge,
								),
								!1
							);
						}
					}
					dispose() {
						this.j && (this.j.cancel(), (this.j = void 0)),
							this.k.dispose(),
							this.b.clear(),
							(this.d.length = 0);
					}
				};
				Y = Ne(
					[
						j(2, u.$Ep),
						j(3, u.$Hp),
						j(4, o.$DJ),
						j(5, $.$ik),
						j(6, v.$8N),
						j(7, b.$6Sb),
						j(8, R.$GO),
					],
					Y,
				);
				let ie = class {
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe) {
						(this.a = me),
							(this.b = ve),
							(this.d = ge),
							(this.f = be),
							(this.g = Ce),
							(this.h = Le),
							(this.j = Fe),
							(this.k = Oe);
					}
					async openQuickPick(me, ve) {
						let ge;
						this.g.isEnabled() &&
							(this.j.supportsExtensionGalleryResources && this.a.browseMessage
								? ((ge = this.k.createInstance(
										Y,
										this.d.bind(this),
										this.a.marketplaceTag,
									)),
									(me = [Q(this.a.browseMessage, X.BROWSE_GALLERY), ...me]))
								: (me = [
										...me,
										{ type: "separator" },
										Q(this.a.installMessage, X.EXTENSIONS_VIEW),
									]));
						let be;
						const Ce = (Fe, Oe) => {
								be && clearTimeout(be),
									(be = q.$Bfb.setTimeout(
										() => {
											be = void 0;
											const xe = Fe ?? ve;
											this.b(xe, Oe ? "auto" : "preview").then(void 0, (He) => {
												(0, p.$4)(He), this.b(ve, void 0);
											});
										},
										Oe ? 0 : 200,
									));
							},
							Le = (Fe) => {
								const Oe = new J.$Zc();
								return new Promise((xe, He) => {
									let Ke = !1;
									const Je = me.findIndex((Ee) => se(Ee) && Ee.id === Fe),
										Te = Oe.add(this.f.createQuickPick({ useSeparators: !0 }));
									(Te.items = me),
										(Te.title = this.a.title),
										(Te.description = this.a.description),
										(Te.placeholder = this.a.placeholderMessage),
										(Te.activeItems = [me[Je]]),
										(Te.canSelectMany = !1),
										(Te.toggles = this.a.toggles),
										Te.toggles?.forEach((Ee) => {
											Oe.add(Ee.onChange(() => this.a.onToggle?.(Ee, Te)));
										}),
										(Te.matchOnDescription = !0),
										Oe.add(
											Te.onDidAccept(async (Ee) => {
												Ke = !0;
												const Ie = Te.selectedItems[0];
												!Ie || Ie.configureItem
													? !Ie || Ie.configureItem === X.EXTENSIONS_VIEW
														? Z(this.h, `${this.a.marketplaceTag} ${Te.value}`)
														: Ie.configureItem === X.BROWSE_GALLERY &&
															ge &&
															(await ge.openQuickPick(Te.value, ve, Ce)) ===
																"back" &&
															(await Le(void 0))
													: Ce(Ie.theme, !0),
													Te.hide(),
													xe();
											}),
										),
										Oe.add(Te.onDidChangeActive((Ee) => Ce(Ee[0]?.theme, !1))),
										Oe.add(
											Te.onDidHide(() => {
												Ke || (Ce(ve, !0), xe()), Te.dispose();
											}),
										),
										Oe.add(
											Te.onDidTriggerItemButton((Ee) => {
												if (se(Ee.item)) {
													const Ie = Ee.item.theme?.extensionData?.extensionId;
													Ie
														? Z(this.h, `@id:${Ie}`)
														: Z(this.h, `${this.a.marketplaceTag} ${Te.value}`);
												}
											}),
										),
										Te.show();
								}).finally(() => {
									Oe.dispose();
								});
							};
						await Le(ve.id), ge?.dispose();
					}
				};
				ie = Ne(
					[j(3, o.$DJ), j(4, u.$Ep), j(5, b.$6Sb), j(6, k.$bYb), j(7, L.$Li)],
					ie,
				);
				const ne = "workbench.action.selectTheme";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: ne,
								title: (0, t.localize2)(10994, "Color Theme"),
								category: d.$ck.Preferences,
								f1: !0,
								keybinding: {
									weight: D.KeybindingWeight.WorkbenchContrib,
									primary: (0, i.$os)(i.$ps, i.KeyMod.CtrlCmd | i.KeyCode.KeyT),
									mac: {
										primary: (0, i.$os)(
											i.$qs,
											i.KeyMod.CtrlCmd | i.KeyCode.KeyT,
										),
									},
								},
							});
						}
						a(fe) {
							switch (fe) {
								case n.ColorScheme.DARK:
									return (0, t.localize)(10957, null);
								case n.ColorScheme.LIGHT:
									return (0, t.localize)(10958, null);
								case n.ColorScheme.HIGH_CONTRAST_DARK:
									return (0, t.localize)(10959, null);
								case n.ColorScheme.HIGH_CONTRAST_LIGHT:
									return (0, t.localize)(10960, null);
								default:
									return (0, t.localize)(10961, null);
							}
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = fe.get(V.$7Z),
								ge = me.getPreferredColorScheme();
							let be;
							ge
								? (be = new G.$8ib({
										title: (0, t.localize)(10962, null),
										icon: S.$ak.colorMode,
										isChecked: !1,
										...K.$pyb,
									}))
								: (be = new G.$8ib({
										title: (0, t.localize)(10963, null),
										icon: S.$ak.colorMode,
										isChecked: !1,
										...K.$pyb,
									}));
							const Ce = {
									installMessage: (0, t.localize)(10964, null),
									browseMessage: "$(plus) " + (0, t.localize)(10965, null),
									placeholderMessage: this.a(ge),
									marketplaceTag: "category:themes",
									toggles: [be],
									onToggle: async (Be, Se) => {
										Se.hide(),
											await ve.openSettings({
												query: m.ThemeSettings.DETECT_COLOR_SCHEME,
											});
									},
								},
								Le = (Be, Se) => me.setColorTheme(Be, Se),
								Fe = (Be, Se, ke) => me.getMarketplaceColorThemes(Be, Se, ke),
								xe = fe.get(L.$Li).createInstance(ie, Ce, Le, Fe),
								He = await me.getColorThemes(),
								Ke = me.getColorTheme(),
								Je = le(
									He.filter((Be) => Be.type === n.ColorScheme.LIGHT),
									(0, t.localize)(10966, null),
								),
								Te = le(
									He.filter((Be) => Be.type === n.ColorScheme.DARK),
									(0, t.localize)(10967, null),
								),
								Ee = le(
									He.filter((Be) => (0, n.$gP)(Be.type)),
									(0, t.localize)(10968, null),
								);
							let Ie;
							switch (ge) {
								case n.ColorScheme.DARK:
									Ie = [...Te, ...Je, ...Ee];
									break;
								case n.ColorScheme.HIGH_CONTRAST_DARK:
								case n.ColorScheme.HIGH_CONTRAST_LIGHT:
									Ie = [...Ee, ...Je, ...Te];
									break;
								case n.ColorScheme.LIGHT:
								default:
									Ie = [...Je, ...Te, ...Ee];
									break;
							}
							await xe.openQuickPick(Ie, Ke);
						}
					},
				);
				const ee = "workbench.action.selectIconTheme";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: ee,
								title: (0, t.localize2)(10995, "File Icon Theme"),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = {
									installMessage: (0, t.localize)(10969, null),
									placeholderMessage: (0, t.localize)(10970, null),
									marketplaceTag: "tag:icon-theme",
								},
								ge = (Oe, xe) => me.setFileIconTheme(Oe, xe),
								be = (Oe, xe, He) =>
									me.getMarketplaceFileIconThemes(Oe, xe, He),
								Le = fe.get(L.$Li).createInstance(ie, ve, ge, be),
								Fe = [
									{ type: "separator", label: (0, t.localize)(10971, null) },
									{
										id: "",
										theme: N.$ewc.noIconTheme,
										label: (0, t.localize)(10972, null),
										description: (0, t.localize)(10973, null),
									},
									...le(await me.getFileIconThemes()),
								];
							await Le.openQuickPick(Fe, me.getFileIconTheme());
						}
					},
				);
				const _ = "workbench.action.selectProductIconTheme";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: _,
								title: (0, t.localize2)(10996, "Product Icon Theme"),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = {
									installMessage: (0, t.localize)(10974, null),
									browseMessage: "$(plus) " + (0, t.localize)(10975, null),
									placeholderMessage: (0, t.localize)(10976, null),
									marketplaceTag: "tag:product-icon-theme",
								},
								ge = (Oe, xe) => me.setProductIconTheme(Oe, xe),
								be = (Oe, xe, He) =>
									me.getMarketplaceProductIconThemes(Oe, xe, He),
								Le = fe.get(L.$Li).createInstance(ie, ve, ge, be),
								Fe = [
									{ type: "separator", label: (0, t.localize)(10977, null) },
									{
										id: f.$kwc,
										theme: f.$lwc.defaultTheme,
										label: (0, t.localize)(10978, null),
									},
									...le(await me.getProductIconThemes()),
								];
							await Le.openQuickPick(Fe, me.getProductIconTheme());
						}
					},
				),
					M.$fk.registerCommand(
						"workbench.action.previewColorTheme",
						async function (fe, me, ve) {
							const ge = fe.get(m.$rRb);
							let be = te(await ge.getColorThemes(), me);
							be.length === 0 &&
								(be = await ge.getMarketplaceColorThemes(
									me.publisher,
									me.name,
									me.version,
								));
							for (const Ce of be)
								if (!ve || Ce.settingsId === ve)
									return await ge.setColorTheme(Ce, "preview"), Ce.settingsId;
						},
					);
				function te(fe, me) {
					return fe.filter(
						({ extensionData: ve }) =>
							ve &&
							ve.extensionIsBuiltin &&
							(0, E.$Mf)(ve.extensionPublisher, me.publisher) &&
							(0, E.$Mf)(ve.extensionName, me.name),
					);
				}
				function Q(fe, me) {
					return {
						id: void 0,
						label: fe,
						alwaysShow: !0,
						buttons: [oe],
						configureItem: me,
					};
				}
				function Z(fe, me) {
					return fe
						.openPaneComposite(r.$LQb, s.ViewContainerLocation.Sidebar, !0)
						.then((ve) => {
							ve && ((ve?.getViewPaneContainer()).search(me), ve.focus());
						});
				}
				function se(fe) {
					return fe.type !== "separator";
				}
				function re(fe) {
					const me = fe.settingsId ?? void 0,
						ve = {
							id: fe.id,
							theme: fe,
							label: fe.label,
							description: fe.description || (fe.label === me ? void 0 : me),
						};
					return fe.extensionData && (ve.buttons = [oe]), ve;
				}
				function le(fe, me) {
					const ve = (be, Ce) => be.label.localeCompare(Ce.label),
						ge = fe.map(re).sort(ve);
					return (
						ge.length > 0 && me && ge.unshift({ type: "separator", label: me }),
						ge
					);
				}
				const oe = {
					iconClass: T.ThemeIcon.asClassName(e.$0Xc),
					tooltip: (0, t.localize)(10979, null),
				};
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "workbench.action.generateColorTheme",
								title: (0, t.localize2)(
									10997,
									"Generate Color Theme From Current Settings",
								),
								category: d.$ck.Developer,
								f1: !0,
							});
						}
						run(fe) {
							const ve = fe.get(m.$rRb).getColorTheme(),
								be = C.$Io
									.as(a.$uP.ColorContribution)
									.getColors()
									.map((He) => He.id)
									.sort(),
								Ce = {},
								Le = [];
							for (const He of be) {
								const Ke = ve.getColor(He, !1);
								Ke
									? (Ce[He] = c.$UL.Format.CSS.formatHexA(Ke, !0))
									: Le.push(He);
							}
							const Fe = [];
							for (const He of Le) {
								const Ke = ve.getColor(He);
								Ke
									? (Ce["__" + He] = c.$UL.Format.CSS.formatHexA(Ke, !0))
									: Fe.push(He);
							}
							for (const He of Fe) Ce["__" + He] = null;
							let Oe = JSON.stringify(
								{
									$schema: g.$Yvc,
									type: ve.type,
									colors: Ce,
									tokenColors: ve.tokenColors.filter((He) => !!He.scope),
								},
								null,
								"	",
							);
							return (
								(Oe = Oe.replace(/\"__/g, '//"')),
								fe
									.get(h.$IY)
									.openEditor({
										resource: void 0,
										contents: Oe,
										languageId: "jsonc",
										options: { pinned: !0 },
									})
							);
						}
					},
				);
				const ae = "workbench.action.toggleLightDarkThemes";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: ae,
								title: (0, t.localize2)(
									10998,
									"Toggle between Light/Dark Themes",
								),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = fe.get(A.$gj),
								ge = fe.get(U.$4N),
								be = fe.get(V.$7Z);
							if (ve.getValue(m.ThemeSettings.DETECT_COLOR_SCHEME)) {
								const Oe = (0, t.localize)(
									10980,
									null,
									m.ThemeSettings.DETECT_COLOR_SCHEME,
								);
								ge.prompt(U.Severity.Info, Oe, [
									{
										label: (0, t.localize)(10981, null),
										run: () =>
											be.openUserSettings({
												query: m.ThemeSettings.DETECT_COLOR_SCHEME,
											}),
									},
								]);
								return;
							}
							const Ce = me.getColorTheme();
							let Le = m.ThemeSettings.PREFERRED_DARK_THEME;
							switch (Ce.type) {
								case n.ColorScheme.LIGHT:
									Le = m.ThemeSettings.PREFERRED_DARK_THEME;
									break;
								case n.ColorScheme.DARK:
									Le = m.ThemeSettings.PREFERRED_LIGHT_THEME;
									break;
								case n.ColorScheme.HIGH_CONTRAST_LIGHT:
									Le = m.ThemeSettings.PREFERRED_HC_DARK_THEME;
									break;
								case n.ColorScheme.HIGH_CONTRAST_DARK:
									Le = m.ThemeSettings.PREFERRED_HC_LIGHT_THEME;
									break;
							}
							const Fe = ve.getValue(Le);
							if (Fe && typeof Fe == "string") {
								const Oe = (await me.getColorThemes()).find(
									(xe) => xe.settingsId === Fe,
								);
								Oe && me.setColorTheme(Oe.id, "auto");
							}
						}
					},
				);
				const pe = "workbench.action.browseColorThemesInMarketplace";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: pe,
								title: (0, t.localize2)(
									10999,
									"Browse Color Themes in Marketplace",
								),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = "category:themes",
								ve = fe.get(m.$rRb),
								ge = fe.get(u.$Ep),
								be = fe.get(k.$bYb),
								Ce = fe.get(L.$Li);
							if (!ge.isEnabled() || !be.supportsExtensionGalleryResources)
								return;
							const Le = ve.getColorTheme(),
								Fe = (Ke, Je, Te) => ve.getMarketplaceColorThemes(Ke, Je, Te);
							let Oe;
							const xe = (Ke, Je) => {
								Oe && clearTimeout(Oe),
									(Oe = q.$Bfb.setTimeout(
										() => {
											Oe = void 0;
											const Te = Ke ?? Le;
											ve.setColorTheme(Te, Je ? "auto" : "preview").then(
												void 0,
												(Ee) => {
													(0, p.$4)(Ee), ve.setColorTheme(Le, void 0);
												},
											);
										},
										Je ? 0 : 200,
									));
							};
							await Ce.createInstance(Y, Fe, me)
								.openQuickPick("", ve.getColorTheme(), xe)
								.then(void 0, p.$4);
						}
					},
				);
				const $e = new w.$XX("ThemesSubMenu");
				w.$ZX.appendMenuItem(w.$XX.GlobalActivity, {
					title: (0, t.localize)(10982, null),
					submenu: $e,
					group: "2_configuration",
					order: 7,
				}),
					w.$ZX.appendMenuItem(w.$XX.MenubarPreferencesMenu, {
						title: (0, t.localize)(10983, null),
						submenu: $e,
						group: "2_configuration",
						order: 7,
					}),
					w.$ZX.appendMenuItem($e, {
						command: { id: ne, title: (0, t.localize)(10984, null) },
						order: 1,
					}),
					w.$ZX.appendMenuItem($e, {
						command: { id: ee, title: (0, t.localize)(10985, null) },
						order: 2,
					}),
					w.$ZX.appendMenuItem($e, {
						command: { id: _, title: (0, t.localize)(10986, null) },
						order: 3,
					});
				let ye = class {
					static {
						W = this;
					}
					static {
						this.STORAGE_KEY = "themeUpdatedNotificationShown";
					}
					constructor(me, ve, ge, be, Ce, Le) {
						(this.a = me),
							(this.b = ve),
							(this.d = ge),
							(this.f = be),
							(this.g = Ce),
							(this.h = Le),
							!ge.getBoolean(W.STORAGE_KEY, z.StorageScope.APPLICATION) &&
								setTimeout(async () => {
									if (
										!ge.getBoolean(W.STORAGE_KEY, z.StorageScope.APPLICATION) &&
										(await this.h.hadLastFocus())
									)
										if (
											(this.d.store(
												W.STORAGE_KEY,
												!0,
												z.StorageScope.APPLICATION,
												z.StorageTarget.USER,
											),
											this.b.hasUpdatedDefaultThemes())
										)
											this.j();
										else {
											const Fe = this.b.getColorTheme().settingsId;
											(Fe === m.ThemeSettingDefaults.COLOR_THEME_LIGHT_OLD ||
												Fe === m.ThemeSettingDefaults.COLOR_THEME_DARK_OLD) &&
												this.k();
										}
								}, 3e3);
					}
					async j() {
						const me = this.b.getColorTheme().type === n.ColorScheme.LIGHT,
							ve = me
								? m.ThemeSettingDefaults.COLOR_THEME_LIGHT
								: m.ThemeSettingDefaults.COLOR_THEME_DARK,
							ge = (await this.b.getColorThemes()).find(
								(be) => be.settingsId === ve,
							);
						if (ge) {
							const be = [
								{
									label: (0, t.localize)(10987, null),
									run: () => {
										this.l("keepNew");
									},
								},
								{
									label: (0, t.localize)(10988, null),
									run: () => {
										this.l("browse"), this.f.executeCommand(ne);
									},
								},
								{
									label: (0, t.localize)(10989, null),
									run: async () => {
										this.l("keepOld");
										const Ce = me
												? m.ThemeSettingDefaults.COLOR_THEME_LIGHT_OLD
												: m.ThemeSettingDefaults.COLOR_THEME_DARK_OLD,
											Le = (await this.b.getColorThemes()).find(
												(Fe) => Fe.settingsId === Ce,
											);
										Le && this.b.setColorTheme(Le, "auto");
									},
								},
							];
							await this.a.prompt(
								U.Severity.Info,
								(0, t.localize)(10990, null, ge.label),
								be,
								{ onCancel: () => this.l("cancel") },
							);
						}
					}
					async k() {
						const me =
								this.b.getColorTheme().type === n.ColorScheme.LIGHT
									? m.ThemeSettingDefaults.COLOR_THEME_LIGHT
									: m.ThemeSettingDefaults.COLOR_THEME_DARK,
							ve = (await this.b.getColorThemes()).find(
								(ge) => ge.settingsId === me,
							);
						if (ve) {
							const ge = [
								{
									label: (0, t.localize)(10991, null),
									run: () => {
										this.l("tryNew"), this.b.setColorTheme(ve, "auto");
									},
								},
								{
									label: (0, t.localize)(10992, null),
									run: () => {
										this.l("cancel");
									},
								},
							];
							await this.a.prompt(
								U.Severity.Info,
								(0, t.localize)(10993, null, ve.label),
								ge,
								{ onCancel: () => this.l("cancel") },
							);
						}
					}
					l(me) {
						this.g.publicLog2("themeUpdatedNotication", {
							web: F.$r,
							reaction: me,
						});
					}
				};
				(ye = W =
					Ne(
						[
							j(0, U.$4N),
							j(1, m.$rRb),
							j(2, z.$lq),
							j(3, M.$ek),
							j(4, x.$km),
							j(5, H.$asb),
						],
						ye,
					)),
					C.$Io
						.as(O.Extensions.Workbench)
						.registerWorkbenchContribution(ye, B.LifecyclePhase.Eventually);
			},
		),
		