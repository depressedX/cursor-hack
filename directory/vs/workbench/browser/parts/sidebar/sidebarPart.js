import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../common/contextkeys.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../common/theme.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/browser/ui/grid/grid.js';
import '../../../../base/common/types.js';
import '../../../common/views.js';
import '../paneCompositePart.js';
import '../activitybar/activitybarPart.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/actions.js';
import '../../actions/layoutActions.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/browser/window.js';
import '../../../../nls.js';
import '../../../../css!vs/workbench/browser/parts/sidebar/media/sidebarpart.js';
import './sidebarActions.js';
define(
			de[1940],
			he([
				1, 0, 96, 100, 21, 49, 39, 5, 35, 51, 123, 40, 8, 276, 53, 759, 28, 60,
				1350, 4013, 105, 160, 10, 11, 50, 716, 72, 57, 75, 4, 1140, 1854,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*layoutService*/,
				i /*contextkeys*/,
				w /*storage*/,
				E /*contextView*/,
				C /*keybinding*/,
				d /*instantiation*/,
				m /*themeService*/,
				r /*colorRegistry*/,
				u /*theme*/,
				a /*notification*/,
				h /*contextkey*/,
				c /*contextview*/,
				n /*extensions*/,
				g /*grid*/,
				p /*types*/,
				o /*views*/,
				f /*paneCompositePart*/,
				b /*activitybarPart*/,
				s /*actionbar*/,
				l /*hoverWidget*/,
				y /*configuration*/,
				$ /*actions*/,
				v /*actions*/,
				S /*layoutActions*/,
				I /*hover*/,
				T /*dialogs*/,
				P /*window*/,
				k /*nls*/,
) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uuc = void 0);
				let D = class extends f.$Ouc {
					static {
						L = this;
					}
					static {
						this.activeViewletSettingsKey = "workbench.sidebar.activeviewletid";
					}
					get snap() {
						return !0;
					}
					get preferredWidth() {
						const N = this.getActivePaneComposite();
						if (!N) return;
						const A = N.getOptimalWidth();
						if (typeof A == "number") return Math.max(A, 300);
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(
							t.Parts.SIDEBAR_PART,
							{
								hasTitle: !0,
								borderWidth: () => (this.w(u.$yGb) || this.w(r.$OP) ? 1 : 0),
							},
							L.activeViewletSettingsKey,
							i.$iQb.bindTo(H),
							i.$hQb.bindTo(H),
							"sideBar",
							"viewlet",
							u.$AGb,
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
							G,
						),
							(this.Pc = V),
							(this.minimumWidth = 170),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 0),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.priority = g.LayoutPriority.Low),
							(this.Oc = this.D(this.ub.createInstance(b.$Suc, this))),
							this.Xc(),
							this.D(
								V.onDidChangeConfiguration((K) => {
									K.affectsConfiguration(
										t.LayoutSettings.ACTIVITY_BAR_LOCATION,
									) && this.Qc();
								}),
							),
							this.Zc();
					}
					Qc() {
						this.Oc.hide(), this.uc();
						const N = this.Ib()?.getId();
						N && this.Fb(N), this.Vc() && this.Oc.show(), this.Xc();
					}
					updateStyles() {
						super.updateStyles();
						const N = (0, p.$wg)(this.getContainer());
						(N.style.backgroundColor = this.w(u.$wGb) || ""),
							(N.style.color = this.w(u.$xGb) || "");
						const A = this.w(u.$yGb) || this.w(r.$OP),
							R = this.M.getSideBarPosition() === t.Position.LEFT;
						(N.style.borderRightWidth = A && R ? "1px" : ""),
							(N.style.borderRightStyle = A && R ? "solid" : ""),
							(N.style.borderRightColor = (R && A) || ""),
							(N.style.borderLeftWidth = A && !R ? "1px" : ""),
							(N.style.borderLeftStyle = A && !R ? "solid" : ""),
							(N.style.borderLeftColor = R ? "" : A || ""),
							(N.style.outlineColor = this.w(u.$BGb) ?? "");
					}
					layout(N, A, R, O) {
						this.M.isVisible(t.Parts.SIDEBAR_PART) && super.layout(N, A, R, O);
					}
					Sb() {
						return this.M.getSideBarPosition() === t.Position.LEFT
							? c.AnchorAlignment.LEFT
							: c.AnchorAlignment.RIGHT;
					}
					zc() {
						return this.ub.createInstance(
							b.$Tuc,
							this.Mc(),
							this.partId,
							this,
							!1,
						);
					}
					Mc() {
						return {
							partContainerClass: "sidebar",
							pinnedViewContainersKey: b.$Suc.pinnedViewContainersKey,
							placeholderViewContainersKey: b.$Suc.placeholderViewContainersKey,
							viewContainersWorkspaceStateKey:
								b.$Suc.viewContainersWorkspaceStateKey,
							icon: !0,
							orientation: s.ActionsOrientation.HORIZONTAL,
							recomputeSizes: !0,
							activityHoverOptions: {
								position: () =>
									this.Nc() === f.CompositeBarPosition.BOTTOM
										? l.HoverPosition.ABOVE
										: l.HoverPosition.BELOW,
							},
							fillExtraContextMenuActions: (N) => {
								const A = this.Kc();
								A && (N.push(new v.$tj()), N.push(A));
							},
							compositeSize: 0,
							iconSize: 16,
							overflowActionSize: 30,
							colors: (N) => ({
								activeBackgroundColor: N.getColor(u.$wGb),
								inactiveBackgroundColor: N.getColor(u.$wGb),
								activeBorderBottomColor: N.getColor(u.$fGb),
								activeForegroundColor: N.getColor(u.$eGb),
								inactiveForegroundColor: N.getColor(u.$hGb),
								badgeBackground: N.getColor(u.$cGb),
								badgeForeground: N.getColor(u.$dGb),
								dragAndDropBorder: N.getColor(u.$iGb),
							}),
							compact: !0,
						};
					}
					Lc() {
						const N = this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION);
						return (
							N === t.ActivityBarPosition.TOP ||
							N === t.ActivityBarPosition.BOTTOM
						);
					}
					Vc() {
						return this.Lc()
							? !1
							: this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION) !==
									t.ActivityBarPosition.HIDDEN;
					}
					Nc() {
						switch (this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION)) {
							case t.ActivityBarPosition.TOP:
								return f.CompositeBarPosition.TOP;
							case t.ActivityBarPosition.BOTTOM:
								return f.CompositeBarPosition.BOTTOM;
							case t.ActivityBarPosition.HIDDEN:
							case t.ActivityBarPosition.DEFAULT:
							default:
								return f.CompositeBarPosition.TITLE;
						}
					}
					Xc() {
						const N = this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION);
						N !== t.ActivityBarPosition.HIDDEN &&
							this.qb.store(
								t.LayoutSettings.ACTIVITY_BAR_LOCATION,
								N,
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							);
					}
					Yc() {
						switch (
							this.qb.get(
								t.LayoutSettings.ACTIVITY_BAR_LOCATION,
								w.StorageScope.PROFILE,
							)
						) {
							case t.ActivityBarPosition.TOP:
								return t.ActivityBarPosition.TOP;
							case t.ActivityBarPosition.BOTTOM:
								return t.ActivityBarPosition.BOTTOM;
							default:
								return t.ActivityBarPosition.DEFAULT;
						}
					}
					getPinnedPaneCompositeIds() {
						return this.Lc()
							? super.getPinnedPaneCompositeIds()
							: this.Oc.getPinnedPaneCompositeIds();
					}
					getVisiblePaneCompositeIds() {
						return this.Lc()
							? super.getVisiblePaneCompositeIds()
							: this.Oc.getVisiblePaneCompositeIds();
					}
					async focusActivityBar() {
						this.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION) ===
							t.ActivityBarPosition.HIDDEN &&
							(await this.Pc.updateValue(
								t.LayoutSettings.ACTIVITY_BAR_LOCATION,
								this.Yc(),
							),
							this.Qc()),
							this.Lc()
								? this.Cc()
								: (this.M.isVisible(t.Parts.ACTIVITYBAR_PART) ||
										this.M.setPartHidden(!1, t.Parts.ACTIVITYBAR_PART),
									this.Oc.show(!0));
					}
					Zc() {
						const N = this;
						this.D(
							(0, $.$4X)(
								class extends $.$3X {
									constructor() {
										super({
											id: S.$S5b,
											title: (0, k.localize2)(
												3686,
												"Toggle Activity Bar Visibility",
											),
										});
									}
									run(A) {
										const R = A.get(t.$mEb);
										try {
											if (!R.getContainer(P.$Bfb, t.Parts.ACTIVITYBAR_PART))
												throw new Error();
										} catch {
											return (
												N.Pc.updateValue(
													t.LayoutSettings.ACTIVITY_BAR_LOCATION,
													void 0,
												),
												A.get(T.$GO).confirm({
													message:
														"Please quit and reopen for the activity bar to be displayed vertically.",
													type: "info",
												}),
												Promise.resolve()
											);
										}
										const O =
											N.Pc.getValue(t.LayoutSettings.ACTIVITY_BAR_LOCATION) ===
											t.ActivityBarPosition.HIDDEN
												? N.Yc()
												: t.ActivityBarPosition.HIDDEN;
										return N.Pc.updateValue(
											t.LayoutSettings.ACTIVITY_BAR_LOCATION,
											O,
										);
									}
								},
							),
						);
					}
					toJSON() {
						return { type: t.Parts.SIDEBAR_PART };
					}
				};
				(e.$Uuc = D),
					(e.$Uuc =
						D =
						L =
							Ne(
								[
									j(0, a.$4N),
									j(1, w.$lq),
									j(2, E.$Xxb),
									j(3, t.$mEb),
									j(4, C.$uZ),
									j(5, I.$Uyb),
									j(6, d.$Li),
									j(7, m.$iP),
									j(8, o.$K1),
									j(9, h.$6j),
									j(10, n.$q2),
									j(11, y.$gj),
									j(12, $.$YX),
								],
								D,
							));
			},
		),
		