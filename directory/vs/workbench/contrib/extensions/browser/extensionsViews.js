import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/paging.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './extensionsList.js';
import '../common/extensions.js';
import '../common/extensionQuery.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/browser/ui/countBadge/countBadge.js';
import './extensionsActions.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/notification/common/notification.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/arrays.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/actions.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../base/common/async.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/severityIcon/browser/severityIcon.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/views.js';
import '../../../../platform/opener/common/opener.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/extensions/common/extensionManifestPropertiesService.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/parts/request/common/request.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/product/common/product.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
import './extensionViewsJsx.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/extensionManagement/common/extensionFeatures.js';
import '../../../../base/common/types.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/hover/browser/hover.js';
define(
		de[1990],
		he([
			1, 0, 4, 3, 6, 29, 163, 1504, 119, 157, 314, 154, 39, 49, 7, 5, 1356, 141,
			1242, 53, 35, 32, 495, 404, 93, 10, 40, 146, 25, 24, 127, 33, 50, 109, 15,
			62, 673, 8, 60, 41, 131, 21, 384, 349, 174, 96, 160, 34, 1134, 106, 372,
			232, 4296, 30, 244, 28, 68, 72,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*nls*/,
			i /*lifecycle*/,
			w /*event*/,
			E /*errors*/,
			C /*errorMessage*/,
			d /*paging*/,
			m /*extensionManagement*/,
			r /*extensionManagement*/,
			u /*extensionRecommendations*/,
			a /*extensionManagementUtil*/,
			h /*keybinding*/,
			c /*contextView*/,
			n /*dom*/,
			g /*instantiation*/,
			p /*extensionsList*/,
			o /*extensions*/,
			f /*extensionQuery*/,
			b /*extensions*/,
			s /*themeService*/,
			l /*telemetry*/,
			y /*countBadge*/,
			$ /*extensionsActions*/,
			v /*listService*/,
			S /*configuration*/,
			I /*notification*/,
			T /*viewPane*/,
			P /*workspace*/,
			k /*arrays*/,
			L /*aria*/,
			D /*cancellation*/,
			M /*actions*/,
			N /*extensions*/,
			A /*async*/,
			R /*productService*/,
			O /*severityIcon*/,
			B /*contextkey*/,
			U /*views*/,
			z /*opener*/,
			F /*preferences*/,
			x /*storage*/,
			H /*extensionManifestPropertiesService*/,
			q /*virtualWorkspace*/,
			V /*workspaceTrust*/,
			G /*layoutService*/,
			K /*hoverWidget*/,
			J /*log*/,
			W /*request*/,
			X /*defaultStyles*/,
			Y /*product*/,
			ie /*authenticationService*/,
			ne /*extensionViewsJsx*/,
			ee /*platform*/,
			_ /*extensionFeatures*/,
			te /*types*/,
			Q /*uriIdentity*/,
			Z /*hover*/,
) {
			"use strict";
			var se;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gTc =
					e.$fTc =
					e.$eTc =
					e.$dTc =
					e.$cTc =
					e.$bTc =
					e.$aTc =
					e.$_Sc =
					e.$$Sc =
					e.$0Sc =
					e.$9Sc =
					e.$8Sc =
					e.$7Sc =
					e.$6Sc =
					e.$5Sc =
					e.$4Sc =
					e.$3Sc =
					e.$2Sc =
						void 0),
				(e.$hTc = Te),
				(Y = xi(Y)),
				(e.$2Sc = "none");
			class re extends i.$1c {
				constructor() {
					super(...arguments),
						(this.a = this.D(new w.$re())),
						(this.onFocus = this.a.event),
						(this.b = this.D(new w.$re())),
						(this.onBlur = this.b.event),
						(this.c = []);
				}
				onFocusChange(Ie) {
					this.c.forEach((Be) => this.b.fire(Be)),
						(this.c = Ie),
						this.c.forEach((Be) => this.a.fire(Be));
				}
			}
			var le;
			(function (Ee) {
				Ee.UpdateDate = "UpdateDate";
			})(le || (le = {}));
			function oe(Ee) {
				switch (Ee) {
					case le.UpdateDate:
						return !0;
				}
			}
			let ae = class extends T.$TMb {
				static {
					se = this;
				}
				static {
					this.a = 7 * 24 * 60 * 60 * 1e3;
				}
				constructor(
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
					je,
					Ve,
					Ze,
					et,
					rt,
					ft,
					bt,
					nt,
					lt,
					ct,
					gt,
					ht,
					Rt,
					Nt,
					jt,
					ti,
					kt,
					hi,
					Kt,
					di,
					Ye,
				) {
					super(
						{
							...Be,
							showActions: T.ViewPaneShowActions.Always,
							maximumBodySize: Ie.flexibleHeight
								? Nt.getNumber(`${Be.id}.size`, x.StorageScope.PROFILE, 0)
									? void 0
									: 0
								: void 0,
						},
						ke,
						Ue,
						Ze,
						ct,
						gt,
						qe,
						ht,
						Ae,
						je,
						Ve,
					),
						(this.t = Ie),
						(this.L = Se),
						(this.ab = Me),
						(this.sb = De),
						(this.cc = Re),
						(this.dc = et),
						(this.ec = rt),
						(this.fc = ft),
						(this.gc = bt),
						(this.hc = nt),
						(this.ic = lt),
						(this.jc = Rt),
						(this.kc = Nt),
						(this.lc = jt),
						(this.mc = ti),
						(this.nc = kt),
						(this.oc = hi),
						(this.pc = Kt),
						(this.qc = di),
						(this.rc = Ye),
						(this.f = null),
						(this.g = null),
						(this.m = this.D(new M.$sj())),
						(this.n = void 0),
						this.t.onDidChangeTitle &&
							this.D(this.t.onDidChangeTitle((ze) => this.Sb(ze))),
						this.D(this.m.onDidRun(({ error: ze }) => ze && this.L.error(ze))),
						this.sc();
				}
				sc() {}
				U(Ie) {
					Ie.classList.add("extension-view-header"),
						super.U(Ie),
						this.t.hideBadge ||
							(this.c = new y.$Hob(
								(0, n.$fhb)(Ie, (0, n.$)(".count-badge-wrapper")),
								{},
								X.$zyb,
							));
				}
				uc() {
					return !1;
				}
				vc(Ie) {
					const Be = (0, n.$fhb)(
						Ie,
						(0, n.$)(".cursor-extension-viewlet-note-2"),
					);
					(this.n = Be), this.D((0, ne.$1Sc)(Be, this.Db));
				}
				W(Ie) {
					super.W(Ie);
					const Be = (0, n.$fhb)(Ie, (0, n.$)(".extensions-list")),
						Se = (0, n.$fhb)(Ie, (0, n.$)(".message-container"));
					this.uc() && this.vc(Ie);
					const ke = (0, n.$fhb)(Se, (0, n.$)("")),
						Ue = (0, n.$fhb)(Se, (0, n.$)(".message")),
						qe = new p.$XSc(),
						Ae = new re(),
						Me = this.Db.createInstance(p.$YSc, Ae, {
							hoverOptions: {
								position: () => {
									const De = this.Cb.getViewLocationById(this.id);
									return De === U.ViewContainerLocation.Sidebar
										? this.nc.getSideBarPosition() === G.Position.LEFT
											? K.HoverPosition.RIGHT
											: K.HoverPosition.LEFT
										: De === U.ViewContainerLocation.AuxiliaryBar &&
												this.nc.getSideBarPosition() === G.Position.LEFT
											? K.HoverPosition.LEFT
											: K.HoverPosition.RIGHT;
								},
							},
						});
					(this.f = this.Db.createInstance(v.$zMb, "Extensions", Be, qe, [Me], {
						multipleSelectionSupport: !1,
						setRowLineHeight: !1,
						horizontalScrolling: !1,
						accessibilityProvider: {
							getAriaLabel(De) {
								return Te(De);
							},
							getWidgetAriaLabel() {
								return (0, t.localize)(6491, null);
							},
						},
						overrideStyles: this.Zb().listOverrideStyles,
						openOnSingleClick: !0,
					})),
						this.D(this.f.onContextMenu((De) => this.zc(De), this)),
						this.D(
							this.f.onDidChangeFocus(
								(De) => Ae.onFocusChange((0, k.$Lb)(De.elements)),
								this,
							),
						),
						this.D(this.f),
						this.D(Ae),
						this.D(
							w.Event.debounce(
								w.Event.filter(this.f.onDidOpen, (De) => De.element !== null),
								(De, Re) => Re,
								75,
								!0,
							)((De) => {
								this.md(De.element, {
									sideByside: De.sideBySide,
									...De.editorOptions,
								});
							}),
						),
						(this.b = {
							extensionsList: Be,
							messageBox: Ue,
							messageContainer: Se,
							messageSeverityIcon: ke,
						}),
						this.h && this.gd(this.h.model);
				}
				X(Ie, Be) {
					super.X(Ie, Be),
						this.b &&
							(this.n &&
								this.oc.isAuthenticated() &&
								(Ie -= this.n.clientHeight),
							(this.b.extensionsList.style.height = Ie + "px")),
						this.f?.layout(Ie, Be);
				}
				async show(Ie, Be) {
					if (this.g) {
						if (!Be && this.g.query === Ie) return this.g.request;
						this.g.request.cancel(), (this.g = null);
					}
					this.h && (this.h.disposables.dispose(), (this.h = void 0));
					const Se = f.$ZSc.parse(Ie),
						ke = { sortOrder: m.SortOrder.Default };
					switch (Se.sortBy) {
						case "installs":
							ke.sortBy = m.SortBy.InstallCount;
							break;
						case "rating":
							ke.sortBy = m.SortBy.WeightedRating;
							break;
						case "name":
							ke.sortBy = m.SortBy.Title;
							break;
						case "publishedDate":
							ke.sortBy = m.SortBy.PublishedDate;
							break;
						case "updateDate":
							ke.sortBy = le.UpdateDate;
							break;
					}
					const Ue = (0, A.$zh)(async (qe) => {
						try {
							this.h = await this.Ac(Se, ke, qe);
							const Ae = this.h.model;
							return (
								this.gd(Ae),
								this.h.onDidChangeModel &&
									this.h.disposables.add(
										this.h.onDidChangeModel((Me) => {
											this.h && ((this.h.model = Me), this.hd(Me));
										}),
									),
								Ae
							);
						} catch (Ae) {
							const Me = new d.$kp([]);
							return (
								(0, E.$8)(Ae) || (this.rc.error(Ae), this.gd(Me, Ae)),
								this.f ? this.f.model : Me
							);
						}
					});
					return (
						Ue.finally(() => (this.g = null)),
						(this.g = { query: Ie, request: Ue }),
						Ue
					);
				}
				count() {
					return this.h?.model.length ?? 0;
				}
				yc() {
					const Ie = new d.$kp([]);
					return this.gd(Ie), Promise.resolve(Ie);
				}
				async zc(Ie) {
					if (Ie.element) {
						const Be = new i.$Zc(),
							Se = Be.add(this.Db.createInstance($.$sTb)),
							ke =
								(Ie.element &&
									this.sb.local.find(
										(Ae) =>
											(0, a.$7p)(Ae.identifier, Ie.element.identifier) &&
											(!Ie.element.server || Ie.element.server === Ae.server),
									)) ||
								Ie.element;
						Se.extension = ke;
						let Ue = [];
						Se.enabled
							? (Ue = await Se.getActionGroups())
							: ke &&
								((Ue = await (0, $.$rTb)(ke, this.Bb, this.Db)),
								Ue.forEach((Ae) =>
									Ae.forEach((Me) => {
										Me instanceof $.$aTb && (Me.extension = ke);
									}),
								));
						let qe = [];
						for (const Ae of Ue) qe = [...qe, ...Ae, new M.$tj()];
						qe.pop(),
							this.zb.showContextMenu({
								getAnchor: () => Ie.anchor,
								getActions: () => qe,
								actionRunner: this.m,
								onHide: () => Be.dispose(),
							});
					}
				}
				async Ac(Ie, Be, Se) {
					const ke =
							/@id:(([a-z0-9A-Z][a-z0-9\-A-Z]*)\.([a-z0-9A-Z][a-z0-9\-A-Z]*))/g,
						Ue = [];
					let qe;
					for (; (qe = ke.exec(Ie.value)) !== null; ) {
						const Me = qe[1];
						Ue.push(Me);
					}
					if (Ue.length)
						return {
							model: await this.Bc(Ue, Be, Se),
							disposables: new i.$Zc(),
						};
					if (se.isLocalExtensionsQuery(Ie.value, Ie.sortBy))
						return this.Dc(Ie, Be);
					se.isSearchPopularQuery(Ie.value)
						? ((Ie.value = Ie.value.replace("@popular", "")),
							(Be.sortBy = Be.sortBy ? Be.sortBy : m.SortBy.InstallCount))
						: se.isSearchRecentlyPublishedQuery(Ie.value) &&
							((Ie.value = Ie.value.replace("@recentlyPublished", "")),
							(Be.sortBy = Be.sortBy ? Be.sortBy : m.SortBy.PublishedDate));
					const Ae = { ...Be, sortBy: oe(Be.sortBy) ? void 0 : Be.sortBy };
					if (Ie.value.length < 2)
						return {
							model: await this.Sc(Ie, Ae, Se),
							disposables: new i.$Zc(),
						};
					{
						const { extensions: Me, disposables: De } = await this.Cc(
							new f.$ZSc("@non-marketplace" + Ie.value, Ie.sortBy),
							Be,
						);
						return { model: await this.Sc(Ie, Ae, Se, Me), disposables: De };
					}
				}
				async Bc(Ie, Be, Se) {
					const ke = Ie.reduce(
							(Ae, Me) => (Ae.add(Me.toLowerCase()), Ae),
							new Set(),
						),
						Ue = (await this.sb.queryLocal(this.t.server)).filter((Ae) =>
							ke.has(Ae.identifier.id.toLowerCase()),
						),
						qe = Ue.length
							? Ie.filter((Ae) =>
									Ue.every((Me) => !(0, a.$7p)(Me.identifier, { id: Ae })),
								)
							: Ie;
					if (qe.length) {
						const Ae = await this.sb.getExtensions(
							qe.map((Me) => ({ id: Me })),
							{ source: "queryById" },
							Se,
						);
						Ue.push(...Ae);
					}
					return this.od(Ue);
				}
				async Cc(Ie, Be) {
					const Se = await this.sb.queryLocal(this.t.server);
					let { extensions: ke, canIncludeInstalledExtensions: Ue } =
						await this.Ec(Se, this.ab.extensions, Ie, Be);
					const qe = new i.$Zc(),
						Ae = qe.add(new w.$re());
					if (Ue) {
						let Me = !1;
						qe.add((0, i.$Yc)(() => (Me = !0))),
							qe.add(
								w.Event.debounce(
									w.Event.any(
										w.Event.filter(
											this.sb.onChange,
											(De) => De?.state === o.ExtensionState.Installed,
										),
										this.ab.onDidChangeExtensions,
									),
									() => {},
								)(async () => {
									const De = this.t.server
											? this.sb.installed.filter(
													(je) => je.server === this.t.server,
												)
											: this.sb.local,
										{ extensions: Re } = await this.Ec(
											De,
											this.ab.extensions,
											Ie,
											Be,
										);
									if (!Me) {
										const je = this.Rc(ke, Re);
										je && ((ke = je), Ae.fire(new d.$kp(ke)));
									}
								}),
							);
					}
					return {
						extensions: ke,
						onDidChangeModel: Ae.event,
						disposables: qe,
					};
				}
				async Dc(Ie, Be) {
					const {
						extensions: Se,
						onDidChangeModel: ke,
						disposables: Ue,
					} = await this.Cc(Ie, Be);
					return {
						model: new d.$kp(Se),
						onDidChangeModel: ke,
						disposables: Ue,
					};
				}
				async Ec(Ie, Be, Se, ke) {
					const Ue = Se.value;
					let qe = [],
						Ae = !0;
					return (
						/@builtin/i.test(Ue)
							? ((qe = this.Fc(Ie, Se, ke)), (Ae = !1))
							: /@installed/i.test(Ue)
								? (qe = this.Jc(Ie, Be, Se, ke))
								: /@non-marketplace/i.test(Ue)
									? (qe = this.Ic(Ie, Be, Se, ke))
									: /@outdated/i.test(Ue)
										? (qe = this.Kc(Ie, Se, ke))
										: /@disabled/i.test(Ue)
											? (qe = this.Lc(Ie, Be, Se, ke))
											: /@enabled/i.test(Ue)
												? (qe = this.Mc(Ie, Be, Se, ke))
												: /@workspaceUnsupported/i.test(Ue)
													? (qe = this.Nc(Ie, Se, ke))
													: /@deprecated/i.test(Se.value)
														? (qe = await this.Oc(Ie, Se, ke))
														: /@recentlyUpdated/i.test(Se.value)
															? (qe = this.Pc(Ie, Se, ke))
															: /@feature:/i.test(Se.value) &&
																(qe = this.Qc(Ie, Se, ke)),
						{ extensions: qe, canIncludeInstalledExtensions: Ae }
					);
				}
				Fc(Ie, Be, Se) {
					let {
						value: ke,
						includedCategories: Ue,
						excludedCategories: qe,
					} = this.Hc(Be.value);
					ke = ke
						.replace(/@builtin/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Ae = Ie.filter(
						(Me) =>
							Me.isBuiltin &&
							(Me.name.toLowerCase().indexOf(ke) > -1 ||
								Me.displayName.toLowerCase().indexOf(ke) > -1) &&
							this.Gc(Me, Ue, qe),
					);
					return this.Tc(Ae, Se);
				}
				Gc(Ie, Be, Se) {
					return !Be.length && !Se.length
						? !0
						: Ie.categories.length
							? Se.length &&
								Ie.categories.some((ke) => Se.includes(ke.toLowerCase()))
								? !1
								: Ie.categories.some((ke) => Be.includes(ke.toLowerCase()))
							: Be.includes(e.$2Sc);
				}
				Hc(Ie) {
					const Be = [],
						Se = [];
					return (
						(Ie = Ie.replace(
							/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g,
							(ke, Ue, qe) => {
								const Ae = (qe || Ue || "").toLowerCase();
								return (
									Ae.startsWith("-")
										? Se.indexOf(Ae) === -1 && Se.push(Ae)
										: Be.indexOf(Ae) === -1 && Be.push(Ae),
									""
								);
							},
						)),
						{ value: Ie, includedCategories: Be, excludedCategories: Se }
					);
				}
				Ic(Ie, Be, Se, ke) {
					let Ue = new f.$ZSc(
						Se.value.replace(/@non-marketplace/g, "@installed"),
						Se.sortBy,
					);
					const qe = this.Jc(Ie, Be, Ue, ke),
						Ae = Ie.filter(
							(Re) =>
								Y.default.anysphereBundledExtensions?.includes(
									Re.identifier.id,
								) ?? !1,
						);
					Ue = new f.$ZSc(
						Se.value.replace(/@non-marketplace/g, "@builtin"),
						Se.sortBy,
					);
					const Me = this.Fc(Ae, Ue, ke),
						De = [...qe, ...Me];
					return this.Tc(De, ke);
				}
				Jc(Ie, Be, Se, ke) {
					let {
						value: Ue,
						includedCategories: qe,
						excludedCategories: Ae,
					} = this.Hc(Se.value);
					Ue = Ue.replace(/@installed/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Me = (Re) =>
						(Re.name.toLowerCase().indexOf(Ue) > -1 ||
							Re.displayName.toLowerCase().indexOf(Ue) > -1 ||
							Re.description.toLowerCase().indexOf(Ue) > -1) &&
						this.Gc(Re, qe, Ae);
					let De;
					if (ke.sortBy !== void 0)
						(De = Ie.filter((Re) => !Re.isBuiltin && Me(Re))),
							(De = this.Tc(De, ke));
					else {
						De = Ie.filter(
							(rt) =>
								(!rt.isBuiltin || rt.outdated || rt.runtimeState !== void 0) &&
								Me(rt),
						);
						const Re = Be.reduce(
								(rt, ft) => (rt.set(ft.identifier.value, ft), rt),
								new N.$In(),
							),
							je = (rt, ft) => {
								const bt = Re.get(rt.identifier.id),
									nt =
										!!bt &&
										this.ec.getExtensionManagementServer((0, b.$x2)(bt)) ===
											rt.server,
									lt = Re.get(ft.identifier.id),
									ct =
										lt &&
										this.ec.getExtensionManagementServer((0, b.$x2)(lt)) ===
											ft.server;
								if (nt && ct)
									return rt.displayName.localeCompare(ft.displayName);
								const gt = rt.local && (0, N.$Kn)(rt.local.manifest),
									ht = ft.local && (0, N.$Kn)(ft.local.manifest);
								return !nt && !ct
									? gt
										? -1
										: ht
											? 1
											: rt.displayName.localeCompare(ft.displayName)
									: (nt && ht) || (ct && gt)
										? rt.displayName.localeCompare(ft.displayName)
										: nt
											? -1
											: 1;
							},
							Ve = [],
							Ze = [],
							et = [];
						De.forEach((rt) => {
							rt.outdated
								? Ve.push(rt)
								: rt.runtimeState
									? Ze.push(rt)
									: et.push(rt);
						}),
							(De = [...Ve.sort(je), ...Ze.sort(je), ...et.sort(je)]);
					}
					return De;
				}
				Kc(Ie, Be, Se) {
					let {
						value: ke,
						includedCategories: Ue,
						excludedCategories: qe,
					} = this.Hc(Be.value);
					ke = ke
						.replace(/@outdated/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Ae = Ie.sort((Me, De) =>
						Me.displayName.localeCompare(De.displayName),
					).filter(
						(Me) =>
							Me.outdated &&
							(Me.name.toLowerCase().indexOf(ke) > -1 ||
								Me.displayName.toLowerCase().indexOf(ke) > -1) &&
							this.Gc(Me, Ue, qe),
					);
					return this.Tc(Ae, Se);
				}
				Lc(Ie, Be, Se, ke) {
					let {
						value: Ue,
						includedCategories: qe,
						excludedCategories: Ae,
					} = this.Hc(Se.value);
					Ue = Ue.replace(/@disabled/g, "")
						.replace(/@sort:(\w+)(-\w*)?/g, "")
						.trim()
						.toLowerCase();
					const Me = Ie.sort((De, Re) =>
						De.displayName.localeCompare(Re.displayName),
					).filter(
						(De) =>
							Be.every(
								(Re) =>
									!(0, a.$7p)(
										{ id: Re.identifier.value, uuid: Re.uuid },
										De.identifier,
									),
							) &&
							(De.name.toLowerCase().indexOf(Ue) > -1 ||
								De.displayName.toLowerCase().indexOf(Ue) > -1) &&
							this.Gc(De, qe, Ae),
					);
					return this.Tc(Me, ke);
				}
				Mc(Ie, Be, Se, ke) {
					let {
						value: Ue,
						includedCategories: qe,
						excludedCategories: Ae,
					} = this.Hc(Se.value);
					(Ue = Ue
						? Ue.replace(/@enabled/g, "")
								.replace(/@sort:(\w+)(-\w*)?/g, "")
								.trim()
								.toLowerCase()
						: ""),
						(Ie = Ie.filter((De) => !De.isBuiltin));
					const Me = Ie.sort((De, Re) =>
						De.displayName.localeCompare(Re.displayName),
					).filter(
						(De) =>
							Be.some((Re) =>
								(0, a.$7p)(
									{ id: Re.identifier.value, uuid: Re.uuid },
									De.identifier,
								),
							) &&
							(De.name.toLowerCase().indexOf(Ue) > -1 ||
								De.displayName.toLowerCase().indexOf(Ue) > -1) &&
							this.Gc(De, qe, Ae),
					);
					return this.Tc(Me, ke);
				}
				Nc(Ie, Be, Se) {
					const Ue = Be.value.match(
						/^\s*@workspaceUnsupported(?::(untrusted|virtual)(Partial)?)?(?:\s+([^\s]*))?/i,
					);
					if (!Ue) return [];
					const qe = Ue[1]?.toLowerCase(),
						Ae = !!Ue[2],
						Me = Ue[3]?.toLowerCase();
					Me &&
						(Ie = Ie.filter(
							(Ze) =>
								Ze.name.toLowerCase().indexOf(Me) > -1 ||
								Ze.displayName.toLowerCase().indexOf(Me) > -1,
						));
					const De = (Ze, et) =>
							Ze.local &&
							this.fc.getExtensionVirtualWorkspaceSupportType(
								Ze.local.manifest,
							) === et,
						Re = (Ze, et) => {
							if (!Ze.local) return !1;
							const rt = this.mc.getEnablementState(Ze.local);
							return rt !== r.EnablementState.EnabledGlobally &&
								rt !== r.EnablementState.EnabledWorkspace &&
								rt !== r.EnablementState.DisabledByTrustRequirement &&
								rt !== r.EnablementState.DisabledByExtensionDependency
								? !1
								: this.fc.getExtensionUntrustedWorkspaceSupportType(
											Ze.local.manifest,
										) === et
									? !0
									: et === !1
										? (0, a.$eq)(
												Ie.map((bt) => bt.local),
												Ze.local,
											).some(
												(bt) =>
													this.fc.getExtensionUntrustedWorkspaceSupportType(
														bt.manifest,
													) === et,
											)
										: !1;
						},
						je = (0, q.$H8)(this.hc.getWorkspace()),
						Ve = !this.lc.isWorkspaceTrusted();
					return (
						qe === "virtual"
							? (Ie = Ie.filter(
									(Ze) =>
										je && De(Ze, Ae ? "limited" : !1) && !(Ve && Re(Ze, !1)),
								))
							: qe === "untrusted"
								? (Ie = Ie.filter(
										(Ze) => Re(Ze, Ae ? "limited" : !1) && !(je && De(Ze, !1)),
									))
								: (Ie = Ie.filter(
										(Ze) => (je && !De(Ze, !0)) || (Ve && !Re(Ze, !0)),
									)),
						this.Tc(Ie, Se)
					);
				}
				async Oc(Ie, Be, Se) {
					const ke = Be.value
							.replace(/@deprecated/g, "")
							.replace(/@sort:(\w+)(-\w*)?/g, "")
							.trim()
							.toLowerCase(),
						Ue = await this.gc.getExtensionsControlManifest(),
						qe = Object.keys(Ue.deprecated);
					return (
						(Ie = Ie.filter(
							(Ae) =>
								qe.includes(Ae.identifier.id) &&
								(!ke ||
									Ae.name.toLowerCase().indexOf(ke) > -1 ||
									Ae.displayName.toLowerCase().indexOf(ke) > -1),
						)),
						this.Tc(Ie, Se)
					);
				}
				Pc(Ie, Be, Se) {
					let {
						value: ke,
						includedCategories: Ue,
						excludedCategories: qe,
					} = this.Hc(Be.value);
					const Ae = Date.now();
					(Ie = Ie.filter(
						(De) =>
							!De.isBuiltin &&
							!De.outdated &&
							De.local?.updated &&
							De.local?.installedTimestamp !== void 0 &&
							Ae - De.local.installedTimestamp < se.a,
					)),
						(ke = ke
							.replace(/@recentlyUpdated/g, "")
							.replace(/@sort:(\w+)(-\w*)?/g, "")
							.trim()
							.toLowerCase());
					const Me = Ie.filter(
						(De) =>
							(De.name.toLowerCase().indexOf(ke) > -1 ||
								De.displayName.toLowerCase().indexOf(ke) > -1) &&
							this.Gc(De, Ue, qe),
					);
					return (Se.sortBy = Se.sortBy ?? le.UpdateDate), this.Tc(Me, Se);
				}
				Qc(Ie, Be, Se) {
					const Ue = Be.value
							.replace(/@feature:/g, "")
							.trim()
							.split(" ")[0],
						qe = ee.$Io
							.as(_.Extensions.ExtensionFeaturesRegistry)
							.getExtensionFeature(Ue);
					if (!qe) return [];
					const Ae = qe.renderer ? this.Db.createInstance(qe.renderer) : void 0;
					try {
						const Me = Ie.filter((De) =>
							De.local
								? Ae?.shouldRender(De.local.manifest) ||
									this.pc.getAccessData(new N.$Gn(De.identifier.id), Ue)
								: !1,
						);
						return this.Tc(Me, Se);
					} finally {
						Ae?.dispose();
					}
				}
				Rc(Ie, Be) {
					const Se = [...Ie],
						ke = (qe) => {
							let Ae = -1;
							const Me = Be[qe];
							return Me &&
								((Ae = Se.findIndex((De) =>
									(0, a.$7p)(De.identifier, Me.identifier),
								)),
								Ae === -1)
								? ke(qe - 1)
								: Ae;
						};
					let Ue = !1;
					for (let qe = 0; qe < Be.length; qe++) {
						const Ae = Be[qe];
						Ie.every((Me) => !(0, a.$7p)(Me.identifier, Ae.identifier)) &&
							((Ue = !0), Ie.splice(ke(qe - 1) + 1, 0, Ae));
					}
					return Ue ? Ie : void 0;
				}
				async Sc(Ie, Be, Se, ke) {
					const Ue = Be.sortBy !== void 0;
					if (
						(!Ue && !Ie.value.trim() && (Be.sortBy = m.SortBy.InstallCount),
						this.Uc(Ie))
					)
						return this.Vc(Ie, Be, Se);
					const qe = Ie.value;
					if (/\bext:([^\s]+)\b/g.test(qe))
						return (
							(Be.text = qe),
							(Be.source = "file-extension-tags"),
							this.sb.queryGallery(Be, Se).then((Re) => this.od(Re))
						);
					let Ae = [];
					if (qe) {
						if (
							((Be.text = qe.substring(0, 350)),
							(Be.source = "searchText"),
							!Ue)
						) {
							const je = (await this.gc.getExtensionsControlManifest()).search;
							if (Array.isArray(je)) {
								for (const Ve of je)
									if (
										Ve.query &&
										Ve.query.toLowerCase() === qe.toLowerCase() &&
										Array.isArray(Ve.preferredResults)
									) {
										Ae = Ve.preferredResults;
										break;
									}
							}
						}
					} else Be.source = "viewlet";
					const Me = await this.sb.queryGallery(Be, Se);
					let De = 0;
					for (const Re of Ae)
						for (let je = De; je < Me.firstPage.length; je++)
							if ((0, a.$7p)(Me.firstPage[je].identifier, { id: Re })) {
								if (De !== je) {
									const Ve = Me.firstPage.splice(je, 1)[0];
									Me.firstPage.splice(De, 0, Ve), De++;
								}
								break;
							}
					if (ke) {
						const Re = ke.filter(
							(je) =>
								!Me.firstPage.some(
									(Ve) => Ve.identifier.id === je.identifier.id,
								),
						);
						Me.firstPage.unshift(...Re);
					}
					return this.od(Me);
				}
				Tc(Ie, Be) {
					switch (Be.sortBy) {
						case m.SortBy.InstallCount:
							Ie = Ie.sort((Se, ke) =>
								typeof ke.installCount == "number" &&
								typeof Se.installCount == "number"
									? ke.installCount - Se.installCount
									: NaN,
							);
							break;
						case le.UpdateDate:
							Ie = Ie.sort((Se, ke) =>
								typeof ke.local?.installedTimestamp == "number" &&
								typeof Se.local?.installedTimestamp == "number"
									? ke.local.installedTimestamp - Se.local.installedTimestamp
									: typeof ke.local?.installedTimestamp == "number"
										? 1
										: typeof Se.local?.installedTimestamp == "number"
											? -1
											: NaN,
							);
							break;
						case m.SortBy.AverageRating:
						case m.SortBy.WeightedRating:
							Ie = Ie.sort((Se, ke) =>
								typeof ke.rating == "number" && typeof Se.rating == "number"
									? ke.rating - Se.rating
									: NaN,
							);
							break;
						default:
							Ie = Ie.sort((Se, ke) =>
								Se.displayName.localeCompare(ke.displayName),
							);
							break;
					}
					return (
						Be.sortOrder === m.SortOrder.Descending && (Ie = Ie.reverse()), Ie
					);
				}
				Uc(Ie) {
					return (
						se.isWorkspaceRecommendedExtensionsQuery(Ie.value) ||
						se.isKeymapsRecommendedExtensionsQuery(Ie.value) ||
						se.isLanguageRecommendedExtensionsQuery(Ie.value) ||
						se.isExeRecommendedExtensionsQuery(Ie.value) ||
						se.isRemoteRecommendedExtensionsQuery(Ie.value) ||
						/@recommended:all/i.test(Ie.value) ||
						se.isSearchRecommendedExtensionsQuery(Ie.value) ||
						se.isRecommendedExtensionsQuery(Ie.value)
					);
				}
				async Vc(Ie, Be, Se) {
					return se.isWorkspaceRecommendedExtensionsQuery(Ie.value)
						? this.Yc(Ie, Be, Se)
						: se.isKeymapsRecommendedExtensionsQuery(Ie.value)
							? this.Zc(Ie, Be, Se)
							: se.isLanguageRecommendedExtensionsQuery(Ie.value)
								? this.$c(Ie, Be, Se)
								: se.isExeRecommendedExtensionsQuery(Ie.value)
									? this.bd(Ie, Be, Se)
									: se.isRemoteRecommendedExtensionsQuery(Ie.value)
										? this.ad(Ie, Be, Se)
										: /@recommended:all/i.test(Ie.value)
											? this.ed(Be, Se)
											: se.isSearchRecommendedExtensionsQuery(Ie.value) ||
													(se.isRecommendedExtensionsQuery(Ie.value) &&
														Be.sortBy !== void 0)
												? this.fd(Ie, Be, Se)
												: se.isRecommendedExtensionsQuery(Ie.value)
													? this.cd(Ie, Be, Se)
													: new d.$kp([]);
				}
				async Wc(Ie, Be, Se) {
					const ke = [];
					if (Ie.length) {
						const Ue = [],
							qe = [];
						for (const Ae of Ie)
							typeof Ae == "string" ? Ue.push(Ae) : qe.push(Ae);
						if (Ue.length)
							try {
								const Ae = await this.sb.getExtensions(
									Ue.map((Me) => ({ id: Me })),
									{ source: Be.source },
									Se,
								);
								for (const Me of Ae)
									Me.gallery &&
										!Me.deprecationInfo &&
										(await this.gc.canInstall(Me.gallery)) &&
										ke.push(Me);
							} catch (Ae) {
								if (!qe.length || !this.kd(Ae)) throw Ae;
							}
						if (qe.length) {
							const Ae = await this.sb.getResourceExtensions(qe, !0);
							for (const Me of Ae)
								(await this.sb.canInstall(Me)) && ke.push(Me);
						}
					}
					return ke;
				}
				async Xc() {
					const Ie = await this.cc.getWorkspaceRecommendations(),
						{ important: Be } = await this.cc.getConfigBasedRecommendations();
					for (const Se of Be) Ie.find((ke) => ke === Se) || Ie.push(Se);
					return Ie;
				}
				async Yc(Ie, Be, Se) {
					const ke = await this.Xc(),
						Ue = await this.Wc(
							ke,
							{ ...Be, source: "recommendations-workspace" },
							Se,
						);
					return new d.$kp(Ue);
				}
				async Zc(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended:keymaps/g, "")
							.trim()
							.toLowerCase(),
						Ue = this.cc.getKeymapRecommendations(),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations-keymaps" },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(qe);
				}
				async $c(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended:languages/g, "")
							.trim()
							.toLowerCase(),
						Ue = this.cc.getLanguageRecommendations(),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations-languages" },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(qe);
				}
				async ad(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended:remotes/g, "")
							.trim()
							.toLowerCase(),
						Ue = this.cc.getRemoteRecommendations(),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations-remotes" },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(qe);
				}
				async bd(Ie, Be, Se) {
					const ke = Ie.value.replace(/@exe:/g, "").trim().toLowerCase(),
						{ important: Ue, others: qe } =
							await this.cc.getExeBasedRecommendations(
								ke.startsWith('"') ? ke.substring(1, ke.length - 1) : ke,
							),
						Ae = await this.Wc(
							[...Ue, ...qe],
							{ ...Be, source: "recommendations-exe" },
							Se,
						);
					return new d.$kp(Ae);
				}
				async cd(Ie, Be, Se) {
					const ke = await this.dd(),
						Ue = await this.Wc(
							ke,
							{ ...Be, source: "recommendations-other", sortBy: void 0 },
							Se,
						),
						qe = (0, k.$Lb)(
							ke.map((Ae) =>
								Ue.find((Me) => (0, a.$7p)(Me.identifier, { id: Ae })),
							),
						);
					return new d.$kp(qe);
				}
				async dd() {
					const Ie = (await this.sb.queryLocal(this.t.server)).map((Se) =>
							Se.identifier.id.toLowerCase(),
						),
						Be = (await this.Xc()).map((Se) =>
							(0, te.$lg)(Se) ? Se.toLowerCase() : Se,
						);
					return (0, k.$Qb)(
						(
							await Promise.all([
								this.cc.getImportantRecommendations(),
								this.cc.getFileBasedRecommendations(),
								this.cc.getOtherRecommendations(),
							])
						)
							.flat()
							.filter(
								(Se) =>
									!Ie.includes(Se.toLowerCase()) &&
									!Be.includes(Se.toLowerCase()),
							),
						(Se) => Se.toLowerCase(),
					);
				}
				async ed(Ie, Be) {
					const Se = await this.sb.queryLocal(this.t.server),
						ke = Se.map((Me) => Me.identifier.id.toLowerCase()),
						Ue = (0, k.$Qb)(
							(
								await Promise.all([
									this.Xc(),
									this.cc.getImportantRecommendations(),
									this.cc.getFileBasedRecommendations(),
									this.cc.getOtherRecommendations(),
								])
							)
								.flat()
								.filter((Me) =>
									(0, te.$lg)(Me)
										? !ke.includes(Me.toLowerCase())
										: !Se.some(
												(De) =>
													De.local &&
													this.qc.extUri.isEqual(De.local.location, Me),
											),
								),
						),
						qe = await this.Wc(
							Ue,
							{ ...Ie, source: "recommendations-all", sortBy: void 0 },
							Be,
						),
						Ae = [];
					for (let Me = 0; Me < qe.length && Ae.length < 8; Me++) {
						const De = Ue[Me];
						if ((0, te.$lg)(De)) {
							const Re = qe.find((je) => (0, a.$7p)(je.identifier, { id: De }));
							Re && Ae.push(Re);
						} else {
							const Re = qe.find(
								(je) =>
									je.resourceExtension &&
									this.qc.extUri.isEqual(je.resourceExtension.location, De),
							);
							Re && Ae.push(Re);
						}
					}
					return new d.$kp(Ae);
				}
				async fd(Ie, Be, Se) {
					const ke = Ie.value
							.replace(/@recommended/g, "")
							.trim()
							.toLowerCase(),
						Ue = (0, k.$Qb)([...(await this.Xc()), ...(await this.dd())]),
						qe = (
							await this.Wc(
								Ue,
								{ ...Be, source: "recommendations", sortBy: void 0 },
								Se,
							)
						).filter((Ae) => Ae.identifier.id.toLowerCase().indexOf(ke) > -1);
					return new d.$kp(this.Tc(qe, Be));
				}
				gd(Ie, Be, Se) {
					this.f &&
						((this.f.model = new d.$np(Ie)),
						Se || (this.f.scrollTop = 0),
						this.jd(Be)),
						this.c && this.c.setCount(this.count());
				}
				hd(Ie) {
					this.f && ((this.f.model = new d.$np(Ie)), this.jd()),
						this.c && this.c.setCount(this.count());
				}
				jd(Ie) {
					if (this.b) {
						const Be = this.count();
						this.b.extensionsList.classList.toggle("hidden", Be === 0),
							this.b.messageContainer.classList.toggle("hidden", Be > 0),
							Be === 0 &&
								this.isBodyVisible() &&
								(Ie
									? this.kd(Ie)
										? ((this.b.messageSeverityIcon.className =
												O.SeverityIcon.className(I.Severity.Warning)),
											(this.b.messageBox.textContent = (0, t.localize)(
												6492,
												null,
											)))
										: ((this.b.messageSeverityIcon.className =
												O.SeverityIcon.className(I.Severity.Error)),
											(this.b.messageBox.textContent = (0, t.localize)(
												6493,
												null,
												(0, E.$bb)(Ie),
											)))
									: ((this.b.messageSeverityIcon.className = ""),
										(this.b.messageBox.textContent = (0, t.localize)(
											6494,
											null,
										))),
								(0, L.$oib)(this.b.messageBox.textContent));
					}
					this.ld();
				}
				kd(Ie) {
					return Ie instanceof m.$Fp
						? Ie.code === m.ExtensionGalleryErrorCode.Offline
						: (0, W.$pp)(Ie);
				}
				ld() {
					this.t.flexibleHeight &&
						((this.maximumBodySize = this.f?.model.length
							? Number.POSITIVE_INFINITY
							: 0),
						this.kc.store(
							`${this.id}.size`,
							this.f?.model.length || 0,
							x.StorageScope.PROFILE,
							x.StorageTarget.MACHINE,
						));
				}
				md(Ie, Be) {
					(Ie =
						this.sb.local.filter((Se) =>
							(0, a.$7p)(Se.identifier, Ie.identifier),
						)[0] || Ie),
						this.sb.open(Ie, Be).then(void 0, (Se) => this.nd(Se));
				}
				nd(Ie) {
					if ((0, E.$8)(Ie)) return;
					const Be = (Ie && Ie.message) || "";
					if (/ECONNREFUSED/.test(Be)) {
						const Se = (0, C.$zj)((0, t.localize)(6495, null), [
							new M.$rj(
								"open user settings",
								(0, t.localize)(6496, null),
								void 0,
								!0,
								() => this.jc.openUserSettings(),
							),
						]);
						this.L.error(Se);
						return;
					}
					this.L.error(Ie);
				}
				od(Ie) {
					if (Array.isArray(Ie)) return new d.$kp(Ie);
					const Be = {
						total: Ie.total,
						pageSize: Ie.pageSize,
						firstPage: Ie.firstPage,
						getPage: (Se, ke) => Ie.getPage(Se, ke),
					};
					return new d.$kp(Be);
				}
				dispose() {
					super.dispose(),
						this.g && (this.g.request.cancel(), (this.g = null)),
						this.h && (this.h.disposables.dispose(), (this.h = void 0)),
						(this.f = null);
				}
				static isLocalExtensionsQuery(Ie, Be) {
					return (
						this.isInstalledExtensionsQuery(Ie) ||
						this.isSearchInstalledExtensionsQuery(Ie) ||
						this.isOutdatedExtensionsQuery(Ie) ||
						this.isEnabledExtensionsQuery(Ie) ||
						this.isDisabledExtensionsQuery(Ie) ||
						this.isBuiltInExtensionsQuery(Ie) ||
						this.isSearchBuiltInExtensionsQuery(Ie) ||
						this.isBuiltInGroupExtensionsQuery(Ie) ||
						this.isSearchDeprecatedExtensionsQuery(Ie) ||
						this.isSearchWorkspaceUnsupportedExtensionsQuery(Ie) ||
						this.isSearchRecentlyUpdatedQuery(Ie) ||
						this.isSearchExtensionUpdatesQuery(Ie) ||
						this.isSortInstalledExtensionsQuery(Ie, Be) ||
						this.isFeatureExtensionsQuery(Ie)
					);
				}
				static isSearchBuiltInExtensionsQuery(Ie) {
					return /@builtin\s.+/i.test(Ie);
				}
				static isBuiltInExtensionsQuery(Ie) {
					return /^\s*@builtin$/i.test(Ie.trim());
				}
				static isBuiltInGroupExtensionsQuery(Ie) {
					return /^\s*@builtin:.+$/i.test(Ie.trim());
				}
				static isSearchWorkspaceUnsupportedExtensionsQuery(Ie) {
					return /^\s*@workspaceUnsupported(:(untrusted|virtual)(Partial)?)?(\s|$)/i.test(
						Ie,
					);
				}
				static isInstalledExtensionsQuery(Ie) {
					return /@installed$/i.test(Ie);
				}
				static isSearchInstalledExtensionsQuery(Ie) {
					return /@installed\s./i.test(Ie) || this.isFeatureExtensionsQuery(Ie);
				}
				static isOutdatedExtensionsQuery(Ie) {
					return /@outdated/i.test(Ie);
				}
				static isEnabledExtensionsQuery(Ie) {
					return /@enabled/i.test(Ie);
				}
				static isDisabledExtensionsQuery(Ie) {
					return /@disabled/i.test(Ie);
				}
				static isSearchDeprecatedExtensionsQuery(Ie) {
					return /@deprecated\s?.*/i.test(Ie);
				}
				static isRecommendedExtensionsQuery(Ie) {
					return /^@recommended$/i.test(Ie.trim());
				}
				static isSearchRecommendedExtensionsQuery(Ie) {
					return /@recommended\s.+/i.test(Ie);
				}
				static isWorkspaceRecommendedExtensionsQuery(Ie) {
					return /@recommended:workspace/i.test(Ie);
				}
				static isExeRecommendedExtensionsQuery(Ie) {
					return /@exe:.+/i.test(Ie);
				}
				static isRemoteRecommendedExtensionsQuery(Ie) {
					return /@recommended:remotes/i.test(Ie);
				}
				static isKeymapsRecommendedExtensionsQuery(Ie) {
					return /@recommended:keymaps/i.test(Ie);
				}
				static isLanguageRecommendedExtensionsQuery(Ie) {
					return /@recommended:languages/i.test(Ie);
				}
				static isSortInstalledExtensionsQuery(Ie, Be) {
					return (
						(Be !== void 0 && Be !== "" && Ie === "") ||
						(!Be && /^@sort:\S*$/i.test(Ie))
					);
				}
				static isSearchPopularQuery(Ie) {
					return /@popular/i.test(Ie);
				}
				static isSearchRecentlyPublishedQuery(Ie) {
					return /@recentlyPublished/i.test(Ie);
				}
				static isSearchRecentlyUpdatedQuery(Ie) {
					return /@recentlyUpdated/i.test(Ie);
				}
				static isSearchExtensionUpdatesQuery(Ie) {
					return /@updates/i.test(Ie);
				}
				static isSortUpdateDateQuery(Ie) {
					return /@sort:updateDate/i.test(Ie);
				}
				static isFeatureExtensionsQuery(Ie) {
					return /@feature:/i.test(Ie);
				}
				focus() {
					super.focus(),
						this.f &&
							(this.f.getFocus().length ||
								this.f.getSelection().length ||
								this.f.focusNext(),
							this.f.domFocus());
				}
			};
			(e.$3Sc = ae),
				(e.$3Sc =
					ae =
					se =
						Ne(
							[
								j(2, I.$4N),
								j(3, h.$uZ),
								j(4, c.$Xxb),
								j(5, g.$Li),
								j(6, s.$iP),
								j(7, b.$q2),
								j(8, o.$MQb),
								j(9, u.$9Qb),
								j(10, l.$km),
								j(11, Z.$Uyb),
								j(12, S.$gj),
								j(13, P.$Vi),
								j(14, r.$EQb),
								j(15, H.$JSb),
								j(16, r.$GQb),
								j(17, P.$Vi),
								j(18, R.$Bk),
								j(19, B.$6j),
								j(20, U.$K1),
								j(21, z.$7rb),
								j(22, F.$7Z),
								j(23, x.$lq),
								j(24, V.$pO),
								j(25, r.$IQb),
								j(26, G.$mEb),
								j(27, ie.$x6b),
								j(28, _.$$Sb),
								j(29, Q.$Vl),
								j(30, J.$ik),
							],
							ae,
						));
			class pe extends ae {
				async show() {
					const Ie =
						this.ec.webExtensionManagementServer &&
						!this.ec.localExtensionManagementServer &&
						!this.ec.remoteExtensionManagementServer
							? "@web"
							: "";
					return super.show(Ie);
				}
			}
			e.$4Sc = pe;
			class $e extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@installed"),
						(!ae.isLocalExtensionsQuery(Ie) ||
							ae.isSortInstalledExtensionsQuery(Ie)) &&
							(Ie = Ie += " @installed"),
						super.show(Ie.trim())
					);
				}
			}
			e.$5Sc = $e;
			class ye extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@enabled"),
						ae.isEnabledExtensionsQuery(Ie)
							? super.show(Ie)
							: ae.isSortInstalledExtensionsQuery(Ie)
								? super.show("@enabled " + Ie)
								: this.yc()
					);
				}
			}
			e.$6Sc = ye;
			class ue extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@disabled"),
						ae.isDisabledExtensionsQuery(Ie)
							? super.show(Ie)
							: ae.isSortInstalledExtensionsQuery(Ie)
								? super.show("@disabled " + Ie)
								: this.yc()
					);
				}
			}
			e.$7Sc = ue;
			class fe extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@outdated"),
						ae.isSearchExtensionUpdatesQuery(Ie) &&
							(Ie = Ie.replace("@updates", "@outdated")),
						super.show(Ie.trim())
					);
				}
				ld() {
					super.ld(), this.setExpanded(this.count() > 0);
				}
			}
			e.$8Sc = fe;
			class me extends ae {
				async show(Ie) {
					return (
						(Ie = Ie || "@recentlyUpdated"),
						ae.isSearchExtensionUpdatesQuery(Ie) &&
							(Ie = Ie.replace("@updates", "@recentlyUpdated")),
						super.show(Ie.trim())
					);
				}
			}
			e.$9Sc = me;
			let ve = class extends ae {
				constructor(
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
					je,
					Ve,
					Ze,
					et,
					rt,
					ft,
					bt,
					nt,
					lt,
					ct,
					gt,
					ht,
					Rt,
					Nt,
					jt,
					ti,
					kt,
					hi,
					Kt,
					di,
					Ye,
				) {
					super(
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
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
					),
						(this.t = Ie),
						(this.oc = hi);
				}
				show() {
					return super.show(this.t.query);
				}
			};
			(e.$0Sc = ve),
				(e.$0Sc = ve =
					Ne(
						[
							j(2, I.$4N),
							j(3, h.$uZ),
							j(4, c.$Xxb),
							j(5, g.$Li),
							j(6, s.$iP),
							j(7, b.$q2),
							j(8, o.$MQb),
							j(9, u.$9Qb),
							j(10, l.$km),
							j(11, Z.$Uyb),
							j(12, S.$gj),
							j(13, P.$Vi),
							j(14, r.$EQb),
							j(15, H.$JSb),
							j(16, r.$GQb),
							j(17, P.$Vi),
							j(18, R.$Bk),
							j(19, B.$6j),
							j(20, U.$K1),
							j(21, z.$7rb),
							j(22, F.$7Z),
							j(23, x.$lq),
							j(24, V.$pO),
							j(25, r.$IQb),
							j(26, G.$mEb),
							j(27, ie.$x6b),
							j(28, _.$$Sb),
							j(29, Q.$Vl),
							j(30, J.$ik),
						],
						ve,
					));
			function ge(Ee, Ie) {
				if (!Ee) return "@workspaceUnsupported:" + Ie;
				const Be = Ee.match(
					new RegExp(`@workspaceUnsupported(:${Ie})?(\\s|$)`, "i"),
				);
				if (Be)
					return Be[1]
						? Ee
						: Ee.replace(
								/@workspaceUnsupported/gi,
								"@workspaceUnsupported:" + Ie,
							);
			}
			class be extends ae {
				async show(Ie) {
					const Be = ge(Ie, "untrusted");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$$Sc = be;
			class Ce extends ae {
				async show(Ie) {
					const Be = ge(Ie, "untrustedPartial");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$_Sc = Ce;
			class Le extends ae {
				async show(Ie) {
					const Be = ge(Ie, "virtual");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$aTc = Le;
			class Fe extends ae {
				async show(Ie) {
					const Be = ge(Ie, "virtualPartial");
					return Be ? super.show(Be) : this.yc();
				}
			}
			e.$bTc = Fe;
			class Oe extends ae {
				async show(Ie) {
					return ae.isSearchDeprecatedExtensionsQuery(Ie)
						? super.show(Ie)
						: this.yc();
				}
			}
			e.$cTc = Oe;
			class xe extends ae {
				constructor() {
					super(...arguments),
						(this.pd = this.D(new A.$Kh(2e3))),
						(this.qd = Promise.resolve());
				}
				uc() {
					return !0;
				}
				async show(Ie) {
					if (this.oc.isAuthenticated()) {
						const Be = super.show(Ie);
						return (
							this.pd.trigger(() => this.sd()),
							(this.qd = Be.then(null, null)),
							Be
						);
					} else return this.yc(), new d.$kp([]);
				}
				async sd() {
					await this.qd,
						this.Gb.publicLog2("extensionsView:MarketplaceSearchFinished");
				}
			}
			e.$dTc = xe;
			class He extends ae {
				constructor() {
					super(...arguments), (this.pd = "@recommended:all");
				}
				W(Ie) {
					super.W(Ie),
						this.D(
							this.cc.onDidChangeRecommendations(() => {
								this.show("");
							}),
						);
				}
				async show(Ie) {
					if (Ie && Ie.trim() !== this.pd) return this.yc();
					const Be = await super.show(this.pd);
					return (
						this.sb.local.some((Se) => !Se.isBuiltin) ||
							this.setExpanded(Be.length > 0),
						Be
					);
				}
			}
			e.$eTc = He;
			class Ke extends ae {
				constructor() {
					super(...arguments), (this.pd = "@recommended");
				}
				W(Ie) {
					super.W(Ie),
						this.D(
							this.cc.onDidChangeRecommendations(() => {
								this.show("");
							}),
						);
				}
				async show(Ie) {
					return Ie && Ie.trim() !== this.pd ? this.yc() : super.show(this.pd);
				}
			}
			e.$fTc = Ke;
			class Je extends ae {
				constructor() {
					super(...arguments), (this.pd = "@recommended:workspace");
				}
				W(Ie) {
					super.W(Ie),
						this.D(
							this.cc.onDidChangeRecommendations(() => this.show(this.pd)),
						),
						this.D(this.dc.onDidChangeWorkbenchState(() => this.show(this.pd)));
				}
				async show(Ie) {
					const Se = await (Ie &&
					Ie.trim() !== "@recommended" &&
					Ie.trim() !== "@recommended:workspace"
						? this.yc()
						: super.show(this.pd));
					return this.setExpanded(Se.length > 0), Se;
				}
				async rd() {
					const Ie = (await this.sb.queryLocal()).filter(
							(Se) =>
								Se.enablementState !==
								r.EnablementState.DisabledByExtensionKind,
						),
						Be = (await this.Xc()).filter((Se) =>
							Ie.every((ke) =>
								(0, te.$lg)(Se)
									? !(0, a.$7p)({ id: Se }, ke.identifier)
									: !this.qc.extUri.isEqual(Se, ke.local?.location),
							),
						);
					return this.Wc(
						Be,
						{ source: "install-all-workspace-recommendations" },
						D.CancellationToken.None,
					);
				}
				async installWorkspaceRecommendations() {
					const Ie = await this.rd();
					if (Ie.length) {
						const Be = [],
							Se = [];
						for (const ke of Ie)
							ke.gallery
								? Be.push({ extension: ke.gallery, options: {} })
								: Se.push(ke);
						await Promise.all([
							this.gc.installGalleryExtensions(Be),
							...Se.map((ke) => this.sb.install(ke)),
						]);
					} else
						this.L.notify({
							severity: I.Severity.Info,
							message: (0, t.localize)(6497, null),
						});
				}
			}
			e.$gTc = Je;
			function Te(Ee) {
				if (!Ee) return "";
				const Ie = Ee.publisherDomain?.verified
						? (0, t.localize)(6498, null, Ee.publisherDisplayName)
						: (0, t.localize)(6499, null, Ee.publisherDisplayName),
					Be = Ee?.deprecationInfo ? (0, t.localize)(6500, null) : "",
					Se = Ee?.rating
						? (0, t.localize)(6501, null, Ee.rating.toFixed(2), Ee.ratingCount)
						: "";
				return `${Ee.displayName}, ${Be ? `${Be}, ` : ""}${Ee.version}, ${Ie}, ${Ee.description} ${Se ? `, ${Se}` : ""}`;
			}
		},
	),
		