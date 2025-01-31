import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../part.js';
import '../../../../base/browser/browser.js';
import '../../../../platform/window/common/window.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/browser/mouseEvent.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/environment/browser/environmentService.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../common/theme.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/color.js';
import '../../../../base/browser/dom.js';
import './menubarControl.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/event.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/host/browser/host.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import './windowTitle.js';
import './commandCenterControl.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../common/activity.js';
import '../globalCompositeBar.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/common/actions.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../editor/editorCommands.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import '../editor/editorPane.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../editor/editorTabsControl.js';
import '../../../../base/browser/window.js';
import './titlebarActions.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../css!vs/workbench/browser/parts/titlebar/media/titlebarpart.js';
define(
			de[4014],
			he([
				1, 0, 4, 550, 139, 253, 49, 168, 10, 3, 286, 35, 26, 123, 12, 97, 7,
				1311, 5, 6, 21, 96, 92, 11, 8, 87, 14, 79, 1327, 3255, 99, 173, 968,
				1936, 160, 66, 50, 18, 105, 247, 276, 217, 39, 1055, 75, 3403, 95, 31,
				2355,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*part*/,
				w /*browser*/,
				E /*window*/,
				C /*contextView*/,
				d /*mouseEvent*/,
				m /*configuration*/,
				r /*lifecycle*/,
				u /*environmentService*/,
				a /*themeService*/,
				h /*themables*/,
				c /*theme*/,
				n /*platform*/,
				g /*color*/,
				p /*dom*/,
				o /*menubarControl*/,
				f /*instantiation*/,
				b /*event*/,
				s /*storage*/,
				l /*layoutService*/,
				y /*menuEntryActionViewItem*/,
				$ /*actions*/,
				v /*contextkey*/,
				S /*host*/,
				I /*codicons*/,
				T /*iconRegistry*/,
				P /*windowTitle*/,
				k /*commandCenterControl*/,
				L /*actionCommonCategories*/,
				D /*toolbar*/,
				M /*activity*/,
				N /*globalCompositeBar*/,
				A /*hoverWidget*/,
				R /*editorGroupsService*/,
				O /*actions*/,
				B /*editorService*/,
				U /*actionbar*/,
				z /*editorCommands*/,
				F /*contextview*/,
				x /*editorPane*/,
				H /*keybinding*/,
				q /*editorTabsControl*/,
				V /*window*/,
				G /*titlebarActions*/,
				K /*hoverDelegateFactory*/,
				J /*commands*/,
) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wtc = e.$vtc = e.$utc = e.$ttc = void 0);
				let X = class extends i.$lEb {
					constructor(_, te, Q) {
						super("workbench.titleService", Q, te),
							(this.a = _),
							(this.mainPart = this.D(this.b())),
							(this.onMenubarVisibilityChange =
								this.mainPart.onMenubarVisibilityChange),
							(this.s = void 0),
							(this.t = new Map()),
							this.D(this.registerPart(this.mainPart)),
							this.c(),
							this.m();
					}
					b() {
						return this.a.createInstance(ie);
					}
					c() {
						const _ = this;
						this.D(
							(0, $.$4X)(
								class extends $.$3X {
									constructor() {
										super({
											id: "workbench.action.focusTitleBar",
											title: (0, t.localize2)(3730, "Focus Title Bar"),
											category: L.$ck.View,
											f1: !0,
										});
									}
									run() {
										_.j((0, p.$Ngb)()).focus();
									}
								},
							),
						);
					}
					m() {
						this.D(
							J.$fk.registerCommand({
								id: "registerWindowTitleVariable",
								handler: (_, te, Q) => {
									this.registerVariables([{ name: te, contextKey: Q }]);
								},
								metadata: {
									description: "Registers a new title variable",
									args: [
										{
											name: "name",
											schema: { type: "string" },
											description: "The name of the variable to register",
										},
										{
											name: "contextKey",
											schema: { type: "string" },
											description:
												"The context key to use for the value of the variable",
										},
									],
								},
							}),
						);
					}
					createAuxiliaryTitlebarPart(_, te) {
						const Q = document.createElement("div");
						Q.classList.add("part", "titlebar"),
							Q.setAttribute("role", "none"),
							(Q.style.position = "relative"),
							_.insertBefore(Q, _.firstChild);
						const Z = new r.$Zc(),
							se = this.r(Q, te);
						return (
							Z.add(this.registerPart(se)),
							Z.add(
								b.Event.runAndSubscribe(
									se.onDidChange,
									() => (Q.style.height = `${se.height}px`),
								),
							),
							se.create(Q),
							this.s && se.updateProperties(this.s),
							this.t.size && se.registerVariables(Array.from(this.t.values())),
							b.Event.once(se.onWillDispose)(() => Z.dispose()),
							se
						);
					}
					r(_, te) {
						return this.a.createInstance(ne, _, te, this.mainPart);
					}
					updateProperties(_) {
						this.s = _;
						for (const te of this.parts) te.updateProperties(_);
					}
					registerVariables(_) {
						const te = [];
						for (const Q of _)
							this.t.has(Q.name) || (this.t.set(Q.name, Q), te.push(Q));
						for (const Q of this.parts) Q.registerVariables(te);
					}
				};
				(e.$ttc = X),
					(e.$ttc = X = Ne([j(0, f.$Li), j(1, s.$lq), j(2, a.$iP)], X));
				let Y = class extends i.Part {
					get minimumHeight() {
						const _ = n.$r && (0, w.$Wfb)();
						let te = this.cc || _ ? E.$AY : 30;
						return (
							_ &&
								(te = Math.max(
									te,
									(0, w.$Xfb)((0, p.getWindow)(this.element))?.height ?? 0,
								)),
							te /
								(this.preventZoom
									? (0, w.$Jfb)((0, p.getWindow)(this.element))
									: 1)
						);
					}
					get maximumHeight() {
						return this.minimumHeight;
					}
					constructor(
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
						ue,
						fe,
						me,
						ve,
					) {
						super(_, { hasTitle: !1 }, oe, ae, pe),
							(this.Cb = Z),
							(this.Db = se),
							(this.Eb = re),
							(this.Fb = le),
							(this.Gb = ae),
							(this.Hb = $e),
							(this.Ib = ye),
							(this.Jb = ue),
							(this.Kb = me),
							(this.Lb = ve),
							(this.minimumWidth = 0),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.a = this.D(new b.$re())),
							(this.onMenubarVisibilityChange = this.a.event),
							(this.b = this.D(new b.$re())),
							(this.onWillDispose = this.b.event),
							(this.nb = this.D(new r.$Zc())),
							(this.ob = this.D(new r.$Zc())),
							(this.rb = this.D(new r.$Zc())),
							(this.sb = this.D(new r.$Zc())),
							(this.tb = this.D(new r.$Zc())),
							(this.vb = this.D(new r.$Zc())),
							(this.wb = (0, E.$zY)(this.Db)),
							(this.xb = !1),
							(this.yb = Q !== "main"),
							(this.Ab = fe.createScoped(Q, this.B)),
							(this.Bb = Q === "main" ? ue.mainPart : Q),
							(this.zb = this.D(le.createInstance(P.$ztc, te, Q))),
							(this.ub = this.D((0, K.$dib)())),
							this.Mb((0, p.getWindowId)(te));
					}
					Mb(_) {
						this.D(
							this.Ib.onDidChangeFocus((te) => (te ? this.Ob() : this.Nb())),
						),
							this.D(
								this.Ib.onDidChangeActiveWindow((te) =>
									te === _ ? this.Ob() : this.Nb(),
								),
							),
							this.D(this.Db.onDidChangeConfiguration((te) => this.Qb(te))),
							this.D(this.Jb.onDidChangeEditorPartOptions((te) => this.Pb(te)));
					}
					Nb() {
						(this.xb = !0), this.updateStyles();
					}
					Ob() {
						(this.xb = !1), this.updateStyles();
					}
					Pb({ oldPartOptions: _, newPartOptions: te }) {
						(_.editorActionsLocation !== te.editorActionsLocation ||
							_.showTabs !== te.showTabs) &&
							(0, E.$xY)(this.Db, this.wb) &&
							this.mb &&
							(this.Yb(), this.Zb({ editorActions: !0 }), this.ab.fire(void 0));
					}
					Qb(_) {
						if (
							(!this.yb &&
								!(0, E.$yY)(this.Db, this.wb) &&
								(!n.$m || n.$r) &&
								_.affectsConfiguration("window.menuBarVisibility") &&
								(this.ac === "compact" ? this.Sb() : this.Rb()),
							(0, E.$xY)(this.Db, this.wb) && this.mb)
						) {
							const te = _.affectsConfiguration(
									l.LayoutSettings.LAYOUT_ACTIONS,
								),
								Q = _.affectsConfiguration(
									l.LayoutSettings.ACTIVITY_BAR_LOCATION,
								);
							(te || Q) &&
								(this.Zb({ layoutActions: te, activityActions: Q }),
								this.ab.fire(void 0));
						}
						_.affectsConfiguration(l.LayoutSettings.COMMAND_CENTER) &&
							(this.Vb(), this.ab.fire(void 0));
					}
					Rb() {
						this.kb ||
							((this.hb = this.D(this.Fb.createInstance(o.$3qc))),
							(this.kb = (0, p.$fhb)(this.eb, (0, p.$)("div.menubar"))),
							this.kb.setAttribute("role", "menubar"),
							this.D(this.hb.onVisibilityChange((_) => this.Tb(_))),
							this.hb.create(this.kb));
					}
					Sb() {
						this.hb?.dispose(),
							(this.hb = void 0),
							this.kb?.remove(),
							(this.kb = void 0),
							this.Tb(!1);
					}
					Tb(_) {
						(n.$r || n.$l || n.$n) &&
							(this.lb && this.layout(this.lb.width, this.lb.height),
							this.a.fire(_));
					}
					updateProperties(_) {
						this.zb.updateProperties(_);
					}
					registerVariables(_) {
						this.zb.registerVariables(_);
					}
					Q(_) {
						if (
							((this.element = _),
							(this.c = (0, p.$fhb)(_, (0, p.$)(".titlebar-container"))),
							(this.eb = (0, p.$fhb)(this.c, (0, p.$)(".titlebar-left"))),
							(this.fb = (0, p.$fhb)(this.c, (0, p.$)(".titlebar-center"))),
							(this.gb = (0, p.$fhb)(this.c, (0, p.$)(".titlebar-right"))),
							!n.$m &&
								!n.$r &&
								!(0, E.$yY)(this.Db, this.wb) &&
								((this.ib = (0, p.$ghb)(this.eb, (0, p.$)("a.window-appicon"))),
								!this.yb && n.$r))
						) {
							const te = this.Eb.options?.homeIndicator;
							if (te) {
								const Q = (0, T.$_O)().getIcon(te.icon)
									? { id: te.icon }
									: I.$ak.code;
								this.ib.setAttribute("href", te.href),
									this.ib.classList.add(...h.ThemeIcon.asClassNameArray(Q)),
									(this.jb = document.createElement("div")),
									this.jb.classList.add("home-bar-icon-badge"),
									this.ib.appendChild(this.jb);
							}
						}
						if (
							((this.cb = (0, p.$ghb)(
								this.c,
								(0, p.$)("div.titlebar-drag-region"),
							)),
							!this.yb &&
								!(0, E.$yY)(this.Db, this.wb) &&
								(!n.$m || n.$r) &&
								this.ac !== "compact" &&
								this.Rb(),
							(this.db = (0, p.$fhb)(this.fb, (0, p.$)("div.window-title"))),
							this.Vb(),
							(0, E.$xY)(this.Db, this.wb) &&
								((this.pb = (0, p.$fhb)(
									this.gb,
									(0, p.$)("div.action-toolbar-container"),
								)),
								this.Yb(),
								this.Zb()),
							!(0, E.$yY)(this.Db, this.wb))
						) {
							let te = n.$m ? "left" : "right";
							if (
								(n.$m &&
									n.$p &&
									new Intl.Locale(n.$B)?.textInfo?.direction === "rtl" &&
									(te = "right"),
								!(n.$m && n.$p && te === "left"))
							) {
								if (
									((this.bb = (0, p.$fhb)(
										te === "left" ? this.eb : this.gb,
										(0, p.$)("div.window-controls-container"),
									)),
									n.$r &&
										(0, p.$fhb)(
											te === "left" ? this.gb : this.eb,
											(0, p.$)("div.window-controls-container"),
										),
									(0, w.$Wfb)())
								) {
									this.bb.classList.add("wco-enabled");
									const Q = () => {
										const Z = (0, p.getWindow)(this.element),
											se = (0, w.$Xfb)(Z);
										if (se) {
											const re = Z.innerWidth - se.width - se.x;
											this.bb?.style.setProperty(
												"--title-wco-width",
												`${re}px`,
											);
										}
									};
									Q(), this.D((0, w.$Ifb)(() => setTimeout(() => Q(), 5)));
								}
							}
						}
						return (
							this.D(
								(0, p.$0fb)(this.c, p.$$gb.CONTEXT_MENU, (te) => {
									p.$ahb.stop(te);
									let Q;
									n.$m &&
									(0, p.$Ygb)(te.target) &&
									(0, p.$Bgb)(te.target, this.db)
										? (Q = $.$XX.TitleBarTitleContext)
										: (Q = $.$XX.TitleBarContext),
										this.$b(te, Q);
								}),
							),
							n.$m &&
								this.D(
									(0, p.$0fb)(
										this.db,
										p.$$gb.MOUSE_DOWN,
										(te) => {
											te.metaKey &&
												(p.$ahb.stop(te, !0),
												this.$b(te, $.$XX.TitleBarTitleContext));
										},
										!0,
									),
								),
							this.updateStyles(),
							this.element
						);
					}
					Vb() {
						if ((this.vb.clear(), !this.cc))
							(this.db.innerText = this.zb.value),
								this.vb.add(
									this.zb.onDidChange(() => {
										this.db.innerText = this.zb.value;
									}),
								);
						else {
							const _ = this.Fb.createInstance(k.$4qc, this.zb, this.ub);
							(0, p.$hhb)(this.db, _.element), this.vb.add(_);
						}
					}
					Wb(_, te) {
						if (!this.yb) {
							if (_.id === M.$5qc)
								return this.Fb.createInstance(
									N.$lrc,
									{ position: () => A.HoverPosition.BELOW },
									te,
								);
							if (_.id === M.$6qc)
								return this.Fb.createInstance(
									N.$krc,
									{ position: () => A.HoverPosition.BELOW },
									te,
								);
						}
						const Q = this.Bb.activeGroup?.activeEditorPane;
						if (Q && Q instanceof x.$JEb) {
							const Z = Q.getActionViewItem(_, te);
							if (Z) return Z;
						}
						return (0, y.$Pyb)(this.Fb, _, { ...te, menuAsChild: !1 });
					}
					Xb(_) {
						const te =
							this.Bb.activeGroup?.activeEditorPane?.scopedContextKeyService ??
							this.Hb;
						return this.Lb.lookupKeybinding(_.id, te);
					}
					Yb() {
						this.nb.clear(),
							(this.mb = this.nb.add(
								this.Fb.createInstance(D.$Syb, this.pb, {
									contextMenu: $.$XX.TitleBarContext,
									orientation: U.ActionsOrientation.HORIZONTAL,
									ariaLabel: (0, t.localize)(3729, null),
									getKeyBinding: (_) => this.Xb(_),
									overflowBehavior: {
										maxItems: 9,
										exempted: [M.$6qc, M.$5qc, ...z.$CWb],
									},
									anchorAlignmentProvider: () => F.AnchorAlignment.RIGHT,
									telemetrySource: "titlePart",
									highlightToggledItems: this.dc,
									actionViewItemProvider: (_, te) => this.Wb(_, te),
									hoverDelegate: this.ub,
								}),
							)),
							this.dc &&
								this.nb.add(
									this.Bb.onDidChangeActiveGroup(() =>
										this.Zb({ editorActions: !0 }),
									),
								);
					}
					Zb(_ = !0) {
						_ === !0 &&
							(_ = {
								editorActions: !0,
								layoutActions: !0,
								activityActions: !0,
							});
						const te = () => {
							const Q = { primary: [], secondary: [] };
							if (this.dc) {
								this.ob.clear();
								const Z = this.Bb.activeGroup;
								if (Z) {
									const se = Z.createEditorActions(this.ob);
									Q.primary.push(...se.actions.primary),
										Q.secondary.push(...se.actions.secondary),
										this.ob.add(se.onDidChange(() => te()));
								}
							}
							this.qb && (0, y.$Kyb)(this.qb, {}, Q, () => !this.dc),
								this.ec &&
									((0, N.$mrc)(this.Gb) && Q.primary.push(G.$rtc),
									Q.primary.push(G.$stc)),
								this.mb.setActions(
									(0, U.$fib)(Q.primary),
									(0, U.$fib)(Q.secondary),
								);
						};
						if (_.editorActions)
							if (
								(this.rb.clear(), this.dc && this.Ab.activeEditor !== void 0)
							) {
								const Q = { groupId: this.Bb.activeGroup.id };
								(this.mb.actionRunner = new q.$ptc(Q)),
									(this.mb.context = Q),
									this.rb.add(this.mb.actionRunner);
							} else
								(this.mb.actionRunner = new O.$sj()),
									(this.mb.context = void 0),
									this.rb.add(this.mb.actionRunner);
						_.layoutActions &&
							(this.sb.clear(),
							this.bc
								? ((this.qb = this.Kb.createMenu(
										$.$XX.LayoutControlMenu,
										this.Hb,
									)),
									this.sb.add(this.qb),
									this.sb.add(this.qb.onDidChange(() => te())))
								: (this.qb = void 0)),
							_.activityActions &&
								(this.tb.clear(),
								this.ec &&
									this.tb.add(
										this.Gb.onDidChangeValue(
											s.StorageScope.PROFILE,
											N.$irc.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
											this.B,
										)(() => te()),
									)),
							te();
					}
					updateStyles() {
						if ((super.updateStyles(), this.element)) {
							this.xb
								? this.element.classList.add("inactive")
								: this.element.classList.remove("inactive");
							const _ =
								this.w(this.xb ? c.$MGb : c.$LGb, (Z, se) =>
									Z.isOpaque() ? Z : Z.makeOpaque((0, c.$LEb)(se)),
								) || "";
							(this.element.style.backgroundColor = _),
								this.jb && (this.jb.style.backgroundColor = _),
								_ && g.$UL.fromHex(_).isLighter()
									? this.element.classList.add("light")
									: this.element.classList.remove("light");
							const te = this.w(this.xb ? c.$KGb : c.$JGb);
							this.element.style.color = te || "";
							const Q = this.w(c.$NGb);
							this.element.style.borderBottom = Q ? `1px solid ${Q}` : "";
						}
					}
					$b(_, te) {
						const Q = new d.$2fb((0, p.getWindow)(this.element), _);
						this.Cb.showContextMenu({
							getAnchor: () => Q,
							menuId: te,
							contextKeyService: this.Hb,
							domForShadowRoot: n.$m && n.$p ? Q.target : void 0,
						});
					}
					get ac() {
						return this.yb ? "hidden" : (0, E.$wY)(this.Db);
					}
					get bc() {
						return (
							!this.yb &&
							this.Db.getValue(l.LayoutSettings.LAYOUT_ACTIONS) !== !1
						);
					}
					get cc() {
						return this.Db.getValue(l.LayoutSettings.COMMAND_CENTER) !== !1;
					}
					get dc() {
						return (
							this.Jb.partOptions.editorActionsLocation ===
								l.EditorActionsLocation.TITLEBAR ||
							(this.Jb.partOptions.editorActionsLocation ===
								l.EditorActionsLocation.DEFAULT &&
								this.Jb.partOptions.showTabs === l.EditorTabsMode.NONE)
						);
					}
					get ec() {
						const _ = this.Db.getValue(l.LayoutSettings.ACTIVITY_BAR_LOCATION);
						return (
							!this.yb &&
							(_ === l.ActivityBarPosition.TOP ||
								_ === l.ActivityBarPosition.BOTTOM)
						);
					}
					get hasZoomableElements() {
						const _ = !(
								this.ac === "hidden" ||
								this.ac === "compact" ||
								(!n.$r && n.$m)
							),
							te = this.cc,
							Q = this.bc || this.dc || this.ec;
						return _ || te || Q;
					}
					get preventZoom() {
						return (
							(0, w.$Jfb)((0, p.getWindow)(this.element)) < 1 ||
							!this.hasZoomableElements
						);
					}
					layout(_, te) {
						this.fc(new p.$pgb(_, te)), super.Z(_, te);
					}
					fc(_) {
						if (((this.lb = _), (0, E.$xY)(this.Db, this.wb))) {
							const te = (0, w.$Jfb)((0, p.getWindow)(this.element));
							if (
								(this.element.style.setProperty("--zoom-factor", te.toString()),
								this.c.classList.toggle("counter-zoom", this.preventZoom),
								this.hb)
							) {
								const Q = new p.$pgb(0, _.height);
								this.hb.layout(Q);
							}
						}
					}
					focus() {
						this.hb
							? this.hb.toggleFocus()
							: this.element
									.querySelector('[tabindex]:not([tabindex="-1"])')
									.focus();
					}
					toJSON() {
						return { type: l.Parts.TITLEBAR_PART };
					}
					dispose() {
						this.b.fire(), super.dispose();
					}
				};
				(e.$utc = Y),
					(e.$utc = Y =
						Ne(
							[
								j(3, C.$Xxb),
								j(4, m.$gj),
								j(5, u.$5rb),
								j(6, f.$Li),
								j(7, a.$iP),
								j(8, s.$lq),
								j(9, l.$mEb),
								j(10, v.$6j),
								j(11, S.$asb),
								j(12, R.$EY),
								j(13, B.$IY),
								j(14, $.$YX),
								j(15, H.$uZ),
							],
							Y,
						));
				let ie = class extends Y {
					constructor(_, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(
							l.Parts.TITLEBAR_PART,
							V.$Bfb,
							"main",
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
							ue,
						);
					}
				};
				(e.$vtc = ie),
					(e.$vtc = ie =
						Ne(
							[
								j(0, C.$Xxb),
								j(1, m.$gj),
								j(2, u.$5rb),
								j(3, f.$Li),
								j(4, a.$iP),
								j(5, s.$lq),
								j(6, l.$mEb),
								j(7, v.$6j),
								j(8, S.$asb),
								j(9, R.$EY),
								j(10, B.$IY),
								j(11, $.$YX),
								j(12, H.$uZ),
							],
							ie,
						));
				let ne = class extends Y {
					static {
						W = this;
					}
					static {
						this.y = 1;
					}
					get height() {
						return this.minimumHeight;
					}
					constructor(
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
						ue,
						fe,
						me,
						ve,
					) {
						const ge = W.y++;
						super(
							`workbench.parts.auxiliaryTitle.${ge}`,
							(0, p.getWindow)(_),
							te,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
							ue,
							fe,
							me,
							ve,
						),
							(this.container = _),
							(this.gc = Q);
					}
					get preventZoom() {
						return (
							(0, w.$Jfb)((0, p.getWindow)(this.element)) < 1 ||
							!this.gc.hasZoomableElements
						);
					}
				};
				(e.$wtc = ne),
					(e.$wtc =
						ne =
						W =
							Ne(
								[
									j(3, C.$Xxb),
									j(4, m.$gj),
									j(5, u.$5rb),
									j(6, f.$Li),
									j(7, a.$iP),
									j(8, s.$lq),
									j(9, l.$mEb),
									j(10, v.$6j),
									j(11, S.$asb),
									j(12, R.$EY),
									j(13, B.$IY),
									j(14, $.$YX),
									j(15, H.$uZ),
								],
								ne,
							));
			},
		)
