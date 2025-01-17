import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../part.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import '../../actions/layoutActions.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/theme.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/types.js';
import '../titlebar/menubarControl.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/window/common/window.js';
import '../../../../base/common/actions.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../paneCompositeBar.js';
import '../globalCompositeBar.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../common/views.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../base/common/constants.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../css!vs/workbench/browser/parts/activitybar/media/activitybarpart.js';
import '../../../../css!vs/workbench/browser/parts/activitybar/media/activityaction.js';
define(
			de[4013],
			he([
				1, 0, 4, 105, 550, 96, 5, 3, 716, 35, 123, 51, 7, 28, 1311, 10, 253, 50,
				114, 27, 160, 1937, 1936, 21, 11, 8, 99, 92, 60, 142, 53, 78, 58, 57,
				2335, 2334,
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
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tuc = e.$Suc = void 0);
				let R = class extends w.Part {
					static {
						A = this;
					}
					static {
						this.ACTION_HEIGHT = 48;
					}
					static {
						this.pinnedViewContainersKey = "workbench.activity.pinnedViewlets2";
					}
					static {
						this.placeholderViewContainersKey =
							"workbench.activity.placeholderViewlets";
					}
					static {
						this.viewContainersWorkspaceStateKey =
							"workbench.activity.viewletsWorkspaceState";
					}
					constructor(z, F, x, H, q) {
						super(E.Parts.ACTIVITYBAR_PART, { hasTitle: !1 }, H, q, x),
							(this.c = z),
							(this.y = F),
							(this.minimumWidth = 48),
							(this.maximumWidth = 48),
							(this.minimumHeight = 0),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.a = this.D(new d.$2c()));
					}
					bb() {
						return this.y.createInstance(
							O,
							{
								partContainerClass: "activitybar",
								pinnedViewContainersKey: A.pinnedViewContainersKey,
								placeholderViewContainersKey: A.placeholderViewContainersKey,
								viewContainersWorkspaceStateKey:
									A.viewContainersWorkspaceStateKey,
								orientation: i.ActionsOrientation.VERTICAL,
								icon: !0,
								iconSize: 24,
								activityHoverOptions: {
									position: () =>
										this.M.getSideBarPosition() === E.Position.LEFT
											? s.HoverPosition.RIGHT
											: s.HoverPosition.LEFT,
								},
								preventLoopNavigation: !0,
								recomputeSizes: !1,
								fillExtraContextMenuActions: (z, F) => {},
								compositeSize: 52,
								colors: (z) => ({
									activeForegroundColor: z.getColor(u.$8Fb),
									inactiveForegroundColor: z.getColor(u.$9Fb),
									activeBorderColor: z.getColor(u.$$Fb),
									activeBackground: z.getColor(u.$aGb),
									badgeBackground: z.getColor(u.$cGb),
									badgeForeground: z.getColor(u.$dGb),
									dragAndDropBorder: z.getColor(u.$bGb),
									activeBackgroundColor: void 0,
									inactiveBackgroundColor: void 0,
									activeBorderBottomColor: void 0,
								}),
								overflowActionSize: A.ACTION_HEIGHT,
							},
							E.Parts.ACTIVITYBAR_PART,
							this.c,
							!0,
						);
					}
					Q(z) {
						return (
							(this.element = z),
							(this.b = (0, h.$fhb)(this.element, (0, h.$)(".content"))),
							this.M.isVisible(E.Parts.ACTIVITYBAR_PART) && this.show(),
							this.b
						);
					}
					getPinnedPaneCompositeIds() {
						return this.a.value?.getPinnedPaneCompositeIds() ?? [];
					}
					getVisiblePaneCompositeIds() {
						return this.a.value?.getVisiblePaneCompositeIds() ?? [];
					}
					focus() {
						this.a.value?.focus();
					}
					updateStyles() {
						super.updateStyles();
						const z = (0, c.$wg)(this.getContainer()),
							F = this.w(u.$7Fb) || "";
						z.style.backgroundColor = F;
						const x = this.w(u.$0Fb) || this.w(a.$OP) || "";
						z.classList.toggle("bordered", !!x),
							(z.style.borderColor = x || "");
					}
					show(z) {
						this.b &&
							(this.a.value ||
								((this.a.value = this.bb()),
								this.a.value.create(this.b),
								this.dimension &&
									this.layout(this.dimension.width, this.dimension.height)),
							z && this.focus());
					}
					hide() {
						this.a.value && (this.a.clear(), this.b && (0, h.$9fb)(this.b));
					}
					layout(z, F) {
						if ((super.layout(z, F, 0, 0), !this.a.value)) return;
						const x = super.Z(z, F).contentSize;
						this.a.value.layout(z, x.height);
					}
					toJSON() {
						return { type: E.Parts.ACTIVITYBAR_PART };
					}
				};
				(e.$Suc = R),
					(e.$Suc =
						R =
						A =
							Ne([j(1, C.$Li), j(2, E.$mEb), j(3, r.$iP), j(4, $.$lq)], R));
				let O = class extends l.$Nuc {
					constructor(z, F, x, H, q, V, G, K, J, W, X, Y, ie) {
						super(
							{
								...z,
								fillExtraContextMenuActions: (ne, ee) => {
									z.fillExtraContextMenuActions(ne, ee), this.Gb(ne, ee);
								},
							},
							F,
							x,
							q,
							V,
							G,
							K,
							J,
							W,
							ie,
						),
							(this.Eb = X),
							(this.Fb = Y),
							(this.Db = this.D(new d.$Zc())),
							H &&
								(this.Cb = this.D(
									q.createInstance(
										y.$hrc,
										() => this.getContextMenuActions(),
										(ne) => this.j.colors(ne),
										this.j.activityHoverOptions,
									),
								)),
							this.D(
								this.Eb.onDidChangeConfiguration((ne) => {
									ne.affectsConfiguration("window.menuBarVisibility") &&
										((0, p.$wY)(this.Eb) === "compact" ? this.Ib() : this.Hb());
								}),
							);
					}
					Gb(z, F) {
						const x = (0, p.$wY)(this.Eb);
						(x === "compact" || x === "hidden" || x === "toggle") &&
							z.unshift(
								(0, o.$wj)({
									id: "toggleMenuVisibility",
									label: (0, t.localize)(3010, null),
									checked: x === "compact",
									run: () =>
										this.Eb.updateValue(
											"window.menuBarVisibility",
											x === "compact" ? "toggle" : "compact",
										),
								}),
								new o.$tj(),
							),
							x === "compact" &&
								this.Ab &&
								F?.target &&
								(0, h.$Bgb)(F.target, this.Ab) &&
								z.unshift(
									(0, o.$wj)({
										id: "hideCompactMenu",
										label: (0, t.localize)(3011, null),
										run: () =>
											this.Eb.updateValue("window.menuBarVisibility", "toggle"),
									}),
									new o.$tj(),
								),
							this.Cb &&
								(z.push(new o.$tj()),
								z.push(...this.Cb.getContextMenuActions())),
							z.push(new o.$tj()),
							z.push(...this.getActivityBarContextMenuActions());
					}
					Hb() {
						this.zb && (this.zb.dispose(), (this.zb = void 0)),
							this.Ab && (this.Ab.remove(), (this.Ab = void 0));
					}
					Ib() {
						if (this.zb) return;
						(this.Ab = document.createElement("div")),
							this.Ab.classList.add("menubar"),
							(0, c.$wg)(this.yb).prepend(this.Ab),
							(this.zb = this.D(this.q.createInstance(n.$3qc))),
							this.zb.create(this.Ab);
					}
					Jb() {
						this.Db.clear(),
							this.Ab &&
								this.Db.add(
									(0, h.$0fb)(this.Ab, h.$$gb.KEY_DOWN, (z) => {
										const F = new f.$7fb(z);
										(F.equals(b.KeyCode.DownArrow) ||
											F.equals(b.KeyCode.RightArrow)) &&
											this.focus();
									}),
								),
							this.Bb &&
								this.Db.add(
									(0, h.$0fb)(this.Bb, h.$$gb.KEY_DOWN, (z) => {
										const F = new f.$7fb(z);
										F.equals(b.KeyCode.DownArrow) ||
										F.equals(b.KeyCode.RightArrow)
											? this.Cb?.focus()
											: (F.equals(b.KeyCode.UpArrow) ||
													F.equals(b.KeyCode.LeftArrow)) &&
												this.zb?.toggleFocus();
									}),
								),
							this.Cb &&
								this.Db.add(
									(0, h.$0fb)(this.Cb.element, h.$$gb.KEY_DOWN, (z) => {
										const F = new f.$7fb(z);
										(F.equals(b.KeyCode.UpArrow) ||
											F.equals(b.KeyCode.LeftArrow)) &&
											this.focus(this.getVisiblePaneCompositeIds().length - 1);
									}),
								);
					}
					create(z) {
						return (
							(this.yb = z),
							(0, p.$wY)(this.Eb) === "compact" && this.Ib(),
							(this.Bb = super.create(this.yb)),
							this.Cb && this.Cb.create(this.yb),
							this.Jb(),
							this.Bb
						);
					}
					layout(z, F) {
						this.Ab &&
							(this.j.orientation === i.ActionsOrientation.VERTICAL
								? (F -= this.Ab.clientHeight)
								: (z -= this.Ab.clientWidth)),
							this.Cb &&
								(this.j.orientation === i.ActionsOrientation.VERTICAL
									? (F -= this.Cb.size() * R.ACTION_HEIGHT)
									: (z -= this.Cb.element.clientWidth)),
							super.layout(z, F);
					}
					getActivityBarContextMenuActions() {
						const z = this.Fb.getMenuActions(
								v.$XX.ActivityBarPositionMenu,
								this.u,
								{ shouldForwardArgs: !0, renderShortTitle: !0 },
							),
							F = [];
						return (
							(0, T.$Jyb)(z, { primary: [], secondary: F }),
							[
								new o.$uj(
									"workbench.action.panel.position",
									(0, t.localize)(3012, null),
									F,
								),
								(0, o.$wj)({
									id: m.$T5b.ID,
									label: m.$T5b.getLabel(this.y),
									run: () => this.q.invokeFunction((x) => new m.$T5b().run(x)),
								}),
							]
						);
					}
				};
				(e.$Tuc = O),
					(e.$Tuc = O =
						Ne(
							[
								j(4, C.$Li),
								j(5, $.$lq),
								j(6, L.$q2),
								j(7, P.$K1),
								j(8, S.$6j),
								j(9, D.$r8),
								j(10, g.$gj),
								j(11, v.$YX),
								j(12, E.$mEb),
							],
							O,
						)),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.default",
									title: {
										...(0, t.localize2)(3025, "Move Activity Bar to Side"),
										mnemonicTitle: (0, t.localize)(3013, null),
									},
									shortTitle: (0, t.localize)(3014, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.DEFAULT,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 1 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.DEFAULT,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.DEFAULT,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.top",
									title: {
										...(0, t.localize2)(3026, "Move Activity Bar to Top"),
										mnemonicTitle: (0, t.localize)(3015, null),
									},
									shortTitle: (0, t.localize)(3016, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.TOP,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 2 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.TOP,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.TOP,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.bottom",
									title: {
										...(0, t.localize2)(3027, "Move Activity Bar to Bottom"),
										mnemonicTitle: (0, t.localize)(3017, null),
									},
									shortTitle: (0, t.localize)(3018, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.BOTTOM,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 3 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.BOTTOM,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.BOTTOM,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.activityBarLocation.hide",
									title: {
										...(0, t.localize2)(3028, "Hide Activity Bar"),
										mnemonicTitle: (0, t.localize)(3019, null),
									},
									shortTitle: (0, t.localize)(3020, null),
									category: I.$ck.View,
									toggled: S.$Kj.equals(
										`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
										E.ActivityBarPosition.HIDDEN,
									),
									menu: [
										{ id: v.$XX.ActivityBarPositionMenu, order: 4 },
										{
											id: v.$XX.CommandPalette,
											when: S.$Kj.notEquals(
												`config.${E.LayoutSettings.ACTIVITY_BAR_LOCATION}`,
												E.ActivityBarPosition.HIDDEN,
											),
										},
									],
								});
							}
							run(U) {
								U.get(g.$gj).updateValue(
									E.LayoutSettings.ACTIVITY_BAR_LOCATION,
									E.ActivityBarPosition.HIDDEN,
								);
							}
						},
					),
					v.$ZX.appendMenuItem(v.$XX.MenubarAppearanceMenu, {
						submenu: v.$XX.ActivityBarPositionMenu,
						title: (0, t.localize)(3021, null),
						group: "3_workbench_layout_move",
						order: 2,
					}),
					v.$ZX.appendMenuItem(v.$XX.ViewContainerTitleContext, {
						submenu: v.$XX.ActivityBarPositionMenu,
						title: (0, t.localize)(3022, null),
						when: S.$Kj.equals(
							"viewContainerLocation",
							(0, P.$J1)(P.ViewContainerLocation.Sidebar),
						),
						group: "3_workbench_layout_move",
						order: 1,
					}),
					v.$ZX.appendMenuItem(v.$XX.ViewTitleContext, {
						submenu: v.$XX.ActivityBarPositionMenu,
						title: (0, t.localize)(3023, null),
						when: S.$Kj.equals(
							"viewLocation",
							(0, P.$J1)(P.ViewContainerLocation.Sidebar),
						),
						group: "3_workbench_layout_move",
						order: 1,
					});
				class B extends v.$3X {
					constructor(z, F) {
						super(z), (this.a = F);
					}
					async run(z) {
						const F = z.get(k.$6Sb),
							x = F.getVisiblePaneCompositeIds(P.ViewContainerLocation.Sidebar),
							H = F.getActivePaneComposite(P.ViewContainerLocation.Sidebar);
						if (!H) return;
						let q;
						for (let V = 0; V < x.length; V++)
							if (x[V] === H.getId()) {
								q = x[(V + x.length + this.a) % x.length];
								break;
							}
						await F.openPaneComposite(q, P.ViewContainerLocation.Sidebar, !0);
					}
				}
				(0, v.$4X)(
					class extends B {
						constructor() {
							super(
								{
									id: "workbench.action.previousSideBarView",
									title: (0, t.localize2)(
										3029,
										"Previous Primary Side Bar View",
									),
									category: I.$ck.View,
									f1: !0,
								},
								-1,
							);
						}
					},
				),
					(0, v.$4X)(
						class extends B {
							constructor() {
								super(
									{
										id: "workbench.action.nextSideBarView",
										title: (0, t.localize2)(3030, "Next Primary Side Bar View"),
										category: I.$ck.View,
										f1: !0,
									},
									1,
								);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.focusActivityBar",
									title: (0, t.localize2)(3031, "Focus Activity Bar"),
									category: I.$ck.View,
									f1: !0,
									precondition: S.$Kj.equals(`config.${M.$LW}`, "vertical"),
								});
							}
							async run(z) {
								const F = z.get(E.$mEb);
								F.setPartHidden(!1, E.Parts.ACTIVITYBAR_PART);
								try {
									F.focusPart(E.Parts.ACTIVITYBAR_PART);
								} catch {
									z.get(N.$GO).confirm({
										message: (0, t.localize)(3024, null),
										type: "info",
									});
								}
							}
						},
					),
					(0, r.$oP)((U, z) => {
						const F = U.getColor(u.$$Fb);
						F &&
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked .active-item-indicator:before {
				border-left-color: ${F};
			}
		`);
						const x = U.getColor(u.$_Fb);
						x &&
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked:focus::before {
				visibility: hidden;
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked:focus .active-item-indicator:before {
				visibility: visible;
				border-left-color: ${x};
			}
		`);
						const H = U.getColor(u.$aGb);
						H &&
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked .active-item-indicator {
				z-index: 0;
				background-color: ${H};
			}
		`);
						const q = U.getColor(a.$PP);
						if (q)
							z.addRule(`
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item .action-label::before{
				padding: 6px;
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.active .action-label::before,
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.active:hover .action-label::before,
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked .action-label::before,
			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item.checked:hover .action-label::before {
				outline: 1px solid ${q};
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item:hover .action-label::before {
				outline: 1px dashed ${q};
			}

			.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item:focus .active-item-indicator:before {
				border-left-color: ${q};
			}
		`);
						else {
							const V = U.getColor(a.$NP);
							V &&
								z.addRule(`
				.monaco-workbench .activitybar > .content :not(.monaco-menu) > .monaco-action-bar .action-item:focus .active-item-indicator::before {
						border-left-color: ${V};
					}
				`);
						}
					});
			},
		),
		