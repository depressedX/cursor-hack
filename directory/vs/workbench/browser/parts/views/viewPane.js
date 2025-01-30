import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/actions.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../base/browser/ui/splitview/paneview.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/types.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../base/common/linkedText.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../platform/opener/browser/link.js';
import '../../../../base/browser/ui/sash/sash.js';
import '../../../../base/browser/ui/progressbar/progressbar.js';
import '../../../services/progress/browser/progressIndicator.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/scrollable.js';
import '../../../../base/common/uri.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/codicons.js';
import '../../actions.js';
import '../../../../platform/actions/browser/toolbar.js';
import './viewFilter.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/common/constants.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../common/theme.js';
import '../../../../css!vs/workbench/browser/parts/views/media/paneviewlet.js';
define(
			de[146],
			he([
				1, 0, 4, 6, 51, 7, 3, 50, 105, 30, 39, 49, 32, 35, 26, 1580, 10, 60, 89,
				8, 28, 5, 11, 92, 488, 41, 183, 497, 277, 436, 707, 203, 195, 9, 79, 14,
				967, 173, 1224, 198, 128, 106, 58, 95, 52, 72, 123, 1518,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*event*/,
				w /*colorRegistry*/,
				E /*dom*/,
				C /*lifecycle*/,
				d /*actions*/,
				m /*actionbar*/,
				r /*platform*/,
				u /*keybinding*/,
				a /*contextView*/,
				h /*telemetry*/,
				c /*themeService*/,
				n /*themables*/,
				g /*paneview*/,
				p /*configuration*/,
				o /*views*/,
				f /*viewsService*/,
				b /*contextkey*/,
				s /*types*/,
				l /*instantiation*/,
				y /*actions*/,
				$ /*menuEntryActionViewItem*/,
				v /*linkedText*/,
				S /*opener*/,
				I /*button*/,
				T /*link*/,
				P /*sash*/,
				k /*progressbar*/,
				L /*progressIndicator*/,
				D /*scrollableElement*/,
				M /*scrollable*/,
				N /*uri*/,
				A /*iconRegistry*/,
				R /*codicons*/,
				O /*actions*/,
				B /*toolbar*/,
				U /*viewFilter*/,
				z /*actionViewItems*/,
				F /*serviceCollection*/,
				x /*defaultStyles*/,
				H /*constants*/,
				q /*hoverDelegateFactory*/,
				V /*lifecycle*/,
				G /*hover*/,
				K /*theme*/,
) {
				"use strict";
				var J;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WMb = e.$UMb = e.$TMb = e.$SMb = e.ViewPaneShowActions = void 0),
					(e.$VMb = te),
					(t = mt(t));
				var W;
				(function (Z) {
					(Z[(Z.Default = 0)] = "Default"),
						(Z[(Z.WhenExpanded = 1)] = "WhenExpanded"),
						(Z[(Z.Always = 2)] = "Always");
				})(W || (e.ViewPaneShowActions = W = {})),
					(e.$SMb = new d.$rj("viewpane.action.filter"));
				const X = (0, A.$$O)(
						"view-pane-container-expanded",
						R.$ak.chevronDown,
						t.localize(3744, null),
					),
					Y = (0, A.$$O)(
						"view-pane-container-collapsed",
						R.$ak.chevronRight,
						t.localize(3745, null),
					),
					ie = r.$Io.as(o.Extensions.ViewsRegistry);
				let ne = class {
					get enabled() {
						return this.c;
					}
					constructor(se, re, le, oe, ae, pe, $e) {
						(this.j = se),
							(this.k = re),
							(this.l = le),
							(this.m = oe),
							(this.n = ae),
							(this.o = pe),
							(this.b = []),
							(this.c = !1),
							(this.g = new C.$Zc()),
							(this.h = this.g.add(new C.$Zc())),
							(this.i = this.g.add(new C.$Zc())),
							this.g.add(
								i.Event.runAndSubscribe(
									this.k.onDidChangeViewWelcomeState,
									() => this.q(),
								),
							),
							this.g.add($e.onWillShutdown(() => this.dispose()));
					}
					layout(se, re) {
						this.c &&
							((this.d.style.height = `${se}px`),
							(this.d.style.width = `${re}px`),
							this.d.classList.toggle("wide", re > 640),
							this.f.scanDomNode());
					}
					focus() {
						this.c && this.d.focus();
					}
					q() {
						const se = this.k.shouldShowWelcome();
						if (this.c === se) return;
						if (((this.c = se), !se)) {
							this.h.clear();
							return;
						}
						this.j.classList.add("welcome");
						const re = (0, E.$fhb)(this.j, (0, E.$)(".welcome-view"));
						(this.d = (0, E.$)(".welcome-view-content", { tabIndex: 0 })),
							(this.f = new D.$8hb(this.d, {
								alwaysConsumeMouseWheel: !0,
								horizontal: M.ScrollbarVisibility.Hidden,
								vertical: M.ScrollbarVisibility.Visible,
							})),
							(0, E.$fhb)(re, this.f.getDomNode()),
							this.h.add(
								(0, C.$Yc)(() => {
									this.j.classList.remove("welcome"),
										this.f.dispose(),
										re.remove(),
										(this.f = void 0),
										(this.d = void 0);
								}),
							),
							this.o.onDidChangeContext(this.s, this, this.h),
							i.Event.chain(ie.onDidChangeViewWelcomeContent, (le) =>
								le.filter((oe) => oe === this.k.id),
							)(this.r, this, this.h),
							this.r();
					}
					r() {
						const se = ie.getViewWelcomeContent(this.k.id);
						this.b = [];
						for (const re of se)
							if (re.when === "default")
								this.a = { descriptor: re, visible: !0 };
							else {
								const le = re.when ? this.o.contextMatchesRules(re.when) : !0;
								this.b.push({ descriptor: re, visible: le });
							}
						this.t();
					}
					s() {
						let se = !1;
						for (const re of this.b) {
							if (!re.descriptor.when || re.descriptor.when === "default")
								continue;
							const le = this.o.contextMatchesRules(re.descriptor.when);
							re.visible !== le && ((re.visible = le), (se = !0));
						}
						se && this.t();
					}
					t() {
						this.i.clear(), (this.d.innerText = "");
						const se = this.u();
						if (se.length === 0) {
							this.j.classList.remove("welcome"), this.f.scanDomNode();
							return;
						}
						for (const { content: re, precondition: le } of se) {
							const oe = re.split(`
`);
							for (let ae of oe) {
								if (((ae = ae.trim()), !ae)) continue;
								const pe = (0, v.$Zpb)(ae);
								if (pe.nodes.length === 1 && typeof pe.nodes[0] != "string") {
									const $e = pe.nodes[0],
										ye = (0, E.$fhb)(this.d, (0, E.$)(".button-container")),
										ue = new I.$oob(ye, {
											title: $e.title,
											supportIcons: !0,
											...x.$lyb,
										});
									if (
										((ue.label = $e.label),
										ue.onDidClick(
											(fe) => {
												this.n.publicLog2("views.welcomeAction", {
													viewId: this.k.id,
													uri: $e.href,
												}),
													this.m.open($e.href, { allowCommands: !0 });
											},
											null,
											this.i,
										),
										this.i.add(ue),
										le)
									) {
										const fe = () =>
											(ue.enabled = this.o.contextMatchesRules(le));
										fe();
										const me = new Set(le.keys());
										i.Event.filter(this.o.onDidChangeContext, (ge) =>
											ge.affectsSome(me),
										)(fe, null, this.i);
									}
								} else {
									const $e = (0, E.$fhb)(this.d, (0, E.$)("p"));
									for (const ye of pe.nodes)
										if (typeof ye == "string")
											(0, E.$fhb)($e, document.createTextNode(ye));
										else {
											const ue = this.i.add(
												this.l.createInstance(T.Link, $e, ye, {}),
											);
											if (le && ye.href.startsWith("command:")) {
												const fe = () =>
													(ue.enabled = this.o.contextMatchesRules(le));
												fe();
												const me = new Set(le.keys());
												i.Event.filter(this.o.onDidChangeContext, (ge) =>
													ge.affectsSome(me),
												)(fe, null, this.i);
											}
										}
								}
							}
						}
						this.j.classList.add("welcome"), this.f.scanDomNode();
					}
					u() {
						const se = this.b.filter((re) => re.visible);
						return se.length === 0 && this.a
							? [this.a.descriptor]
							: se.map((re) => re.descriptor);
					}
					dispose() {
						this.g.dispose();
					}
				};
				ne = Ne(
					[j(2, l.$Li), j(3, S.$7rb), j(4, h.$km), j(5, b.$6j), j(6, V.$n6)],
					ne,
				);
				let ee = class extends g.Pane {
					static {
						J = this;
					}
					static {
						this.Y = "workbench.view.alwaysShowHeaderActions";
					}
					get title() {
						return this.gb;
					}
					get titleDescription() {
						return this.hb;
					}
					get singleViewPaneContainerTitle() {
						return this.ib;
					}
					constructor(se, re, le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						super({
							...se,
							orientation:
								pe.getViewLocationById(se.id) === o.ViewContainerLocation.Panel
									? P.Orientation.HORIZONTAL
									: P.Orientation.VERTICAL,
						}),
							(this.yb = re),
							(this.zb = le),
							(this.Ab = oe),
							(this.Bb = ae),
							(this.Cb = pe),
							(this.Db = $e),
							(this.Eb = ye),
							(this.Fb = ue),
							(this.Gb = fe),
							(this.Hb = me),
							(this.Ib = ve),
							(this.Z = this.D(new i.$re())),
							(this.onDidFocus = this.Z.event),
							(this.bb = this.D(new i.$re())),
							(this.onDidBlur = this.bb.event),
							(this.cb = this.D(new i.$re())),
							(this.onDidChangeBodyVisibility = this.cb.event),
							(this.db = this.D(new i.$re())),
							(this.onDidChangeTitleArea = this.db.event),
							(this.eb = this.D(new i.$re())),
							(this.onDidChangeViewWelcomeState = this.eb.event),
							(this.fb = !1),
							(this.Jb = !1),
							(this.Kb = !1),
							(this.id = se.id),
							(this.gb = se.title),
							(this.hb = se.titleDescription),
							(this.ib = se.singleViewPaneContainerTitle),
							(this.mb = se.showActions ?? W.Default),
							(this.xb = this.D(ae.createScoped(this.element))),
							this.xb.createKey("view", this.id);
						const ge = this.xb.createKey(
							"viewLocation",
							(0, o.$J1)(pe.getViewLocationById(this.id)),
						);
						this.D(
							i.Event.filter(pe.onDidChangeLocation, (Ce) =>
								Ce.views.some((Le) => Le.id === this.id),
							)(() => ge.set((0, o.$J1)(pe.getViewLocationById(this.id)))),
						);
						const be = this.D(this.Db.createChild(new F.$Ki([b.$6j, this.xb])));
						(this.menuActions = this.D(
							be.createInstance(
								O.$MMb,
								se.titleMenuId ?? y.$XX.ViewTitle,
								y.$XX.ViewTitleContext,
								{
									shouldForwardArgs: !se.donotForwardArgs,
									renderShortTitle: !0,
								},
							),
						)),
							this.D(this.menuActions.onDidChange(() => this.bc()));
					}
					get headerVisible() {
						return super.headerVisible;
					}
					set headerVisible(se) {
						(super.headerVisible = se),
							this.element.classList.toggle("merged-header", !se);
					}
					setVisible(se) {
						this.fb !== se &&
							((this.fb = se), this.isExpanded() && this.cb.fire(se));
					}
					isVisible() {
						return this.fb;
					}
					isBodyVisible() {
						return this.fb && this.isExpanded();
					}
					setExpanded(se) {
						this.isAlone() && (se = !0);
						const re = super.setExpanded(se);
						return re && this.cb.fire(se), this.Ob(), re;
					}
					setIsAlone(se) {
						const re = this.Jb;
						se && !re && (this.Kb = this.y),
							se && this.setExpanded(!0),
							(this.Jb = se),
							re && !se && this.setExpanded(this.Kb),
							this.Ob();
					}
					isAlone() {
						return this.Jb;
					}
					render() {
						super.render();
						const se = (0, E.$dhb)(this.element);
						this.D(se),
							this.D(se.onDidFocus(() => this.Z.fire())),
							this.D(se.onDidBlur(() => this.bb.fire()));
					}
					U(se) {
						(this.nb = se),
							(this.vb = (0, E.$fhb)(
								se,
								(0, E.$)(
									`.twisties-container-in-view-pane-header.twisty-container${n.ThemeIcon.asCSSSelector(this.Nb(this.isExpanded()))}`,
								),
							)),
							this.Ob(),
							this.Qb(se, this.title);
						const re = (0, E.$fhb)(se, (0, E.$)(".actions"));
						re.classList.toggle("show-always", this.mb === W.Always),
							re.classList.toggle("show-expanded", this.mb === W.WhenExpanded),
							(this.lb = this.Db.createInstance(B.$Syb, re, {
								orientation: m.ActionsOrientation.HORIZONTAL,
								actionViewItemProvider: (ae, pe) =>
									this.getActionViewItem(ae, pe),
								ariaLabel: t.localize(3746, null, this.title),
								getKeyBinding: (ae) => this.yb.lookupKeybinding(ae.id),
								renderDropdownAsChildElement: !0,
								actionRunner: this.getActionRunner(),
								resetMenu: this.menuActions.menuId,
							})),
							this.D(this.lb),
							this.$b(),
							this.D(
								(0, E.$0fb)(re, E.$$gb.CLICK, (ae) => ae.preventDefault()),
							);
						const le = this.Cb.getViewContainerByViewId(this.id);
						le
							? this.D(
									this.Cb.getViewContainerModel(le).onDidChangeContainerInfo(
										({ title: ae }) => this.Sb(this.title),
									),
								)
							: console.error(
									`View container model not found for view ${this.id}`,
								);
						const oe = i.Event.filter(this.Ab.onDidChangeConfiguration, (ae) =>
							ae.affectsConfiguration(J.Y),
						);
						this.D(oe(this.ac, this)), this.ac();
					}
					S() {
						super.S(), this.Ob();
					}
					Nb(se) {
						return se ? X : Y;
					}
					Ob() {
						this.vb &&
							(!this.isAlone() || this.Ab.getValue(H.$LW) === "vertical"
								? ((this.vb.style.width = ""),
									(this.vb.style.height = ""),
									this.vb.classList.remove(
										...n.ThemeIcon.asClassNameArray(this.Nb(!this.y)),
									),
									this.vb.classList.add(
										...n.ThemeIcon.asClassNameArray(this.Nb(this.y)),
									))
								: ((this.vb.style.width = "10px"),
									(this.vb.style.height = "10px"),
									this.vb.classList.remove(
										...n.ThemeIcon.asClassNameArray(this.Nb(!this.y)),
									),
									this.vb.classList.remove(
										...n.ThemeIcon.asClassNameArray(this.Nb(this.y)),
									)));
					}
					style(se) {
						super.style(se);
						const re = this.Pb();
						if (this.tb) {
							const le = (0, E.$xhb)(se.headerForeground, (0, w.$rP)(w.$IP));
							N.URI.isUri(re)
								? ((this.tb.style.backgroundColor = le),
									(this.tb.style.color = ""))
								: ((this.tb.style.color = le),
									(this.tb.style.backgroundColor = ""));
						}
					}
					Pb() {
						return (
							this.Cb.getViewDescriptorById(this.id)?.containerIcon || o.$H1
						);
					}
					Qb(se, re) {
						this.tb = (0, E.$fhb)(se, (0, E.$)(".icon", void 0));
						const le = this.Pb();
						let oe;
						if (N.URI.isUri(le)) {
							oe = `view-${this.id.replace(/[\.\:]/g, "-")}`;
							const pe = `.pane-header .icon.${oe}`;
							(0, E.$Wgb)(
								pe,
								`
				mask: ${(0, E.$vhb)(le)} no-repeat 50% 50%;
				mask-size: 24px;
				-webkit-mask: ${(0, E.$vhb)(le)} no-repeat 50% 50%;
				-webkit-mask-size: 16px;
			`,
							);
						} else
							n.ThemeIcon.isThemeIcon(le) && (oe = n.ThemeIcon.asClassName(le));
						oe && this.tb.classList.add(...oe.split(" "));
						const ae = this.Vb(re);
						(this.ob = (0, E.$fhb)(se, (0, E.$)("h3.title", {}, ae))),
							(this.pb = this.D(
								this.Hb.setupManagedHover((0, q.$cib)("mouse"), this.ob, ae),
							)),
							this.hb && this.Tb(this.hb),
							(this.ub = this.D(
								this.Hb.setupManagedHover((0, q.$cib)("mouse"), this.tb, ae),
							)),
							this.tb.setAttribute("aria-label", this.Rb(ae));
					}
					Rb(se) {
						const re = this.Cb.getViewDescriptorById(
								this.id,
							)?.accessibilityHelpContent,
							le = this.Ib?.hasShownAccessibleView(this.id);
						return !re || le ? se : t.localize(3747, null, se);
					}
					Sb(se) {
						const re = this.Vb(se);
						this.ob && ((this.ob.textContent = re), this.pb?.update(re)),
							this.tb &&
								(this.ub?.update(re),
								this.tb.setAttribute("aria-label", this.Rb(re))),
							(this.gb = se),
							this.db.fire();
					}
					Tb(se) {
						this.qb
							? ((this.qb.textContent = se ?? ""), this.rb?.update(se ?? ""))
							: se &&
								this.ob &&
								((this.qb = (0, E.$ehb)(
									this.ob,
									(0, E.$)("span.description", {}, se),
								)),
								(this.rb = this.D(
									this.Hb.setupManagedHover((0, q.$cib)("mouse"), this.qb, se),
								)));
					}
					Ub(se) {
						this.Tb(se), (this.hb = se), this.db.fire();
					}
					Vb(se) {
						const re = this.Cb.getViewContainerByViewId(this.id),
							le = this.Cb.getViewContainerModel(re),
							oe = this.Cb.getViewDescriptorById(this.id);
						return !(this.Cb.getDefaultContainerById(this.id) === re) &&
							oe?.containerTitle &&
							le.title !== oe.containerTitle
							? `${oe.containerTitle}: ${se}`
							: se;
					}
					W(se) {
						this.wb = this.D(this.Db.createInstance(ne, se, this));
					}
					X(se, re) {
						this.wb.layout(se, re);
					}
					onDidScrollRoot() {}
					getProgressIndicator() {
						if (
							(this.jb === void 0 &&
								((this.jb = this.D(new k.$bpb(this.element, x.$nyb))),
								this.jb.hide()),
							this.kb === void 0)
						) {
							const se = this;
							this.kb = this.D(
								new L.$KMb(
									(0, s.$wg)(this.jb),
									new (class extends L.$LMb {
										constructor() {
											super(se.id, se.isBodyVisible()),
												this.D(
													se.onDidChangeBodyVisibility((re) =>
														re ? this.g(se.id) : this.h(se.id),
													),
												);
										}
									})(),
								),
							);
						}
						return this.kb;
					}
					Yb() {
						return H.$KX + this.id;
					}
					Zb() {
						return te(this.Cb.getViewLocationById(this.id));
					}
					focus() {
						this.wb.enabled
							? this.wb.focus()
							: this.element && (this.element.focus(), this.Z.fire());
					}
					$b() {
						if (this.lb) {
							const se = [...this.menuActions.getPrimaryActions()];
							this.shouldShowFilterInHeader() && se.unshift(e.$SMb),
								this.lb.setActions(
									(0, m.$fib)(se),
									(0, m.$fib)(this.menuActions.getSecondaryActions()),
								),
								(this.lb.context = this.getActionsContext());
						}
					}
					ac() {
						if (!this.nb) return;
						const se = this.Ab.getValue(
							"workbench.view.alwaysShowHeaderActions",
						);
						this.nb.classList.toggle("actions-always-visible", se);
					}
					bc() {
						this.$b(), this.db.fire();
					}
					getActionViewItem(se, re) {
						if (se.id === e.$SMb.id) {
							const le = this;
							return new (class extends z.$$ib {
								constructor() {
									super(null, se);
								}
								setFocusable() {}
								get trapsArrowNavigation() {
									return !0;
								}
								render(oe) {
									oe.classList.add("viewpane-filter-container");
									const ae = le.getFilterWidget();
									(0, E.$fhb)(oe, ae.element), ae.relayout();
								}
							})();
						}
						return (0, $.$Pyb)(this.Db, se, {
							...re,
							menuAsChild: se instanceof y.$1X,
						});
					}
					getActionsContext() {}
					getActionRunner() {}
					getOptimalWidth() {
						return 0;
					}
					saveState() {}
					shouldShowWelcome() {
						return !1;
					}
					getFilterWidget() {}
					shouldShowFilterInHeader() {
						return !1;
					}
				};
				(e.$TMb = ee),
					(e.$TMb =
						ee =
						J =
							Ne(
								[
									j(1, u.$uZ),
									j(2, a.$Xxb),
									j(3, p.$gj),
									j(4, b.$6j),
									j(5, o.$K1),
									j(6, l.$Li),
									j(7, S.$7rb),
									j(8, c.$iP),
									j(9, h.$km),
									j(10, G.$Uyb),
								],
								ee,
							));
				let _ = class extends ee {
					constructor(se, re, le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						super(se, re, le, oe, ae, pe, $e, ye, ue, fe, me, ve);
						const ge = this.D($e.createChild(new F.$Ki([b.$6j, this.xb])));
						this.filterWidget = this.D(
							ge.createInstance(U.$PMb, se.filterOptions),
						);
					}
					getFilterWidget() {
						return this.filterWidget;
					}
					W(se) {
						super.W(se),
							(this.j = (0, E.$fhb)(
								se,
								(0, E.$)(".viewpane-filter-container"),
							));
					}
					X(se, re) {
						super.X(se, re), (this.g = new E.$pgb(re, se));
						const le = !this.j?.hasChildNodes(),
							oe = this.shouldShowFilterInHeader();
						le !== oe &&
							(oe && (0, E.$hhb)(this.j),
							this.bc(),
							oe || (0, E.$fhb)(this.j, this.filterWidget.element)),
							oe || (se = se - 44),
							this.filterWidget.layout(re),
							this.L(se, re);
					}
					shouldShowFilterInHeader() {
						return !(this.g && this.g.width < 600 && this.g.height > 100);
					}
				};
				(e.$UMb = _),
					(e.$UMb = _ =
						Ne(
							[
								j(1, u.$uZ),
								j(2, a.$Xxb),
								j(3, p.$gj),
								j(4, b.$6j),
								j(5, o.$K1),
								j(6, l.$Li),
								j(7, S.$7rb),
								j(8, c.$iP),
								j(9, h.$km),
								j(10, G.$Uyb),
							],
							_,
						));
				function te(Z) {
					let se, re, le, oe;
					switch (Z) {
						case o.ViewContainerLocation.Panel:
							(se = K.$qFb), (re = K.$CFb), (le = K.$DFb), (oe = K.$EFb);
							break;
						case o.ViewContainerLocation.Sidebar:
						case o.ViewContainerLocation.AuxiliaryBar:
						default:
							(se = K.$wGb), (re = K.$GGb), (le = K.$HGb), (oe = K.$IGb);
					}
					return {
						background: se,
						listOverrideStyles: {
							listBackground: se,
							treeStickyScrollBackground: re,
							treeStickyScrollBorder: le,
							treeStickyScrollShadow: oe,
						},
					};
				}
				class Q extends y.$3X {
					constructor(se) {
						super(se), (this.desc = se);
					}
					run(se, ...re) {
						const le = se.get(f.$HMb).getActiveViewWithId(this.desc.viewId);
						if (le) return this.runInView(se, le, ...re);
					}
				}
				e.$WMb = Q;
			},
		),
		