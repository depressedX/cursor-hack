import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/contextkeys.js';
import '../../../common/theme.js';
import '../../../common/views.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/common/actions.js';
import './auxiliaryBarActions.js';
import '../../../../base/common/types.js';
import '../../../../base/browser/ui/splitview/splitview.js';
import '../../actions/layoutActions.js';
import '../../../../platform/commands/common/commands.js';
import '../paneCompositePart.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../actions.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/browser/parts/auxiliarybar/media/auxiliaryBarPart.js';
define(
			de[1938],
			he([
				1, 0, 4, 8, 49, 5, 39, 40, 21, 51, 35, 100, 123, 60, 53, 96, 160, 50,
				1307, 28, 279, 716, 31, 1350, 105, 11, 10, 92, 7, 173, 198, 967, 72,
				2336,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*contextkey*/,
				w /*contextView*/,
				E /*instantiation*/,
				C /*keybinding*/,
				d /*notification*/,
				m /*storage*/,
				r /*colorRegistry*/,
				u /*themeService*/,
				a /*contextkeys*/,
				h /*theme*/,
				c /*views*/,
				n /*extensions*/,
				g /*layoutService*/,
				p /*hoverWidget*/,
				o /*actions*/,
				f /*auxiliaryBarActions*/,
				b /*types*/,
				s /*splitview*/,
				l /*layoutActions*/,
				y /*commands*/,
				$ /*paneCompositePart*/,
				v /*actionbar*/,
				S /*actions*/,
				I /*configuration*/,
				T /*menuEntryActionViewItem*/,
				P /*dom*/,
				k /*toolbar*/,
				L /*actionViewItems*/,
				D /*actions*/,
				M /*hover*/,
) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Puc = void 0);
				let A = class extends $.$Ouc {
					static {
						N = this;
					}
					static {
						this.activePanelSettingsKey =
							"workbench.auxiliarybar.activepanelid";
					}
					static {
						this.pinnedPanelsKey = "workbench.auxiliarybar.pinnedPanels";
					}
					static {
						this.placeholdeViewContainersKey =
							"workbench.auxiliarybar.placeholderPanels";
					}
					static {
						this.viewContainersWorkspaceStateKey =
							"workbench.auxiliarybar.viewContainersWorkspaceState";
					}
					get preferredHeight() {
						return this.M.mainContainerDimension.height * 0.4;
					}
					get preferredWidth() {
						const O = this.getActivePaneComposite();
						if (!O) return;
						const B = O.getOptimalWidth();
						if (typeof B == "number") return Math.max(B, 300);
					}
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X) {
						super(
							g.Parts.AUXILIARYBAR_PART,
							{
								hasTitle: !0,
								borderWidth: () => (this.w(h.$yGb) || this.w(r.$OP) ? 1 : 0),
							},
							N.activePanelSettingsKey,
							a.$qQb.bindTo(G),
							a.$rQb.bindTo(G),
							"auxiliarybar",
							"auxiliarybar",
							void 0,
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
							W,
						),
							(this.Oc = J),
							(this.Pc = X),
							(this.minimumWidth = 170),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 0),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.priority = s.LayoutPriority.Low),
							this.D(
								X.onDidChangeConfiguration((Y) => {
									Y.affectsConfiguration(
										g.LayoutSettings.ACTIVITY_BAR_LOCATION,
									) && this.Qc();
								}),
							);
					}
					Qc() {
						this.uc();
						const O = this.Ib()?.getId();
						O && this.Fb(O);
					}
					updateStyles() {
						super.updateStyles();
						const O = (0, b.$wg)(this.getContainer());
						O.style.backgroundColor = this.w(h.$wGb) || "";
						const B = this.w(h.$yGb) || this.w(r.$OP),
							U = this.M.getSideBarPosition() === g.Position.RIGHT;
						(O.style.color = this.w(h.$xGb) || ""),
							(O.style.borderLeftColor = B ?? ""),
							(O.style.borderRightColor = B ?? ""),
							(O.style.borderLeftStyle = B && !U ? "solid" : "none"),
							(O.style.borderRightStyle = B && U ? "solid" : "none"),
							(O.style.borderLeftWidth = B && !U ? "1px" : "0px"),
							(O.style.borderRightWidth = B && U ? "1px" : "0px");
					}
					Mc() {
						const O = this;
						return {
							partContainerClass: "auxiliarybar",
							pinnedViewContainersKey: N.pinnedPanelsKey,
							placeholderViewContainersKey: N.placeholdeViewContainersKey,
							viewContainersWorkspaceStateKey:
								N.viewContainersWorkspaceStateKey,
							icon: !1,
							orientation: v.ActionsOrientation.HORIZONTAL,
							recomputeSizes: !0,
							activityHoverOptions: {
								position: () =>
									this.Nc() === $.CompositeBarPosition.BOTTOM
										? p.HoverPosition.ABOVE
										: p.HoverPosition.BELOW,
							},
							fillExtraContextMenuActions: (B) => this.Sc(B),
							compositeSize: 0,
							iconSize: 16,
							get overflowActionSize() {
								return O.Nc() === $.CompositeBarPosition.TITLE ? 40 : 30;
							},
							colors: (B) => ({
								activeBackgroundColor: B.getColor(h.$wGb),
								inactiveBackgroundColor: B.getColor(h.$wGb),
								get activeBorderBottomColor() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$uFb)
										: B.getColor(h.$fGb);
								},
								get activeForegroundColor() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$sFb)
										: B.getColor(h.$eGb);
								},
								get inactiveForegroundColor() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$tFb)
										: B.getColor(h.$hGb);
								},
								badgeBackground: B.getColor(h.$cGb),
								badgeForeground: B.getColor(h.$dGb),
								get dragAndDropBorder() {
									return O.Nc() === $.CompositeBarPosition.TITLE
										? B.getColor(h.$wFb)
										: B.getColor(h.$iGb);
								},
							}),
							compact: !0,
						};
					}
					Sc(O) {
						const B = this.M.getSideBarPosition() === g.Position.LEFT,
							U = this.Kc();
						U && (O.push(new o.$tj()), O.push(U));
						const z = this.lc.getMenuActions(
								S.$XX.ActivityBarPositionMenu,
								this.jc,
								{ shouldForwardArgs: !0, renderShortTitle: !0 },
							),
							F = [];
						(0, T.$Jyb)(z, { primary: [], secondary: F }),
							O.push(
								new o.$tj(),
								new o.$uj(
									"workbench.action.panel.position",
									(0, t.localize)(3040, null),
									F,
								),
								(0, o.$wj)({
									id: l.$T5b.ID,
									label: B
										? (0, t.localize)(3041, null)
										: (0, t.localize)(3042, null),
									run: () => this.Oc.executeCommand(l.$T5b.ID),
								}),
								(0, o.$wj)({
									id: f.$O5b.ID,
									label: (0, t.localize)(3043, null),
									run: () => this.Oc.executeCommand(f.$O5b.ID),
								}),
							);
					}
					Lc() {
						return (
							this.Pc.getValue(g.LayoutSettings.ACTIVITY_BAR_LOCATION) !==
							g.ActivityBarPosition.HIDDEN
						);
					}
					Nc() {
						switch (this.Pc.getValue(g.LayoutSettings.ACTIVITY_BAR_LOCATION)) {
							case g.ActivityBarPosition.TOP:
								return $.CompositeBarPosition.TOP;
							case g.ActivityBarPosition.BOTTOM:
								return $.CompositeBarPosition.BOTTOM;
							case g.ActivityBarPosition.HIDDEN:
								return $.CompositeBarPosition.TITLE;
							case g.ActivityBarPosition.DEFAULT:
								return $.CompositeBarPosition.TITLE;
							default:
								return $.CompositeBarPosition.TITLE;
						}
					}
					Nb() {
						const O = super.Nb(),
							B = (0, P.$)(".auxiliary-bar-global-header"),
							U = this.Yb.add(
								this.ub.createInstance(
									D.$MMb,
									S.$XX.AuxiliaryBarHeader,
									void 0,
									void 0,
								),
							),
							z = this.Yb.add(
								this.ub.createInstance(k.$Syb, B, {
									actionViewItemProvider: (F, x) => this.Wc(F, x),
									orientation: v.ActionsOrientation.HORIZONTAL,
									hiddenItemStrategy: k.HiddenItemStrategy.NoHide,
									getKeyBinding: (F) => this.sb.lookupKeybinding(F.id),
								}),
							);
						return (
							z.setActions((0, v.$fib)(U.getPrimaryActions())),
							this.Yb.add(
								U.onDidChange(() =>
									z.setActions((0, v.$fib)(U.getPrimaryActions())),
								),
							),
							O.appendChild(B),
							O
						);
					}
					Wc(O, B) {
						if (O.id === f.$O5b.ID)
							return this.ub.createInstance(L.$_ib, void 0, O, B);
					}
					toJSON() {
						return { type: g.Parts.AUXILIARYBAR_PART };
					}
				};
				(e.$Puc = A),
					(e.$Puc =
						A =
						N =
							Ne(
								[
									j(0, d.$4N),
									j(1, m.$lq),
									j(2, w.$Xxb),
									j(3, g.$mEb),
									j(4, C.$uZ),
									j(5, M.$Uyb),
									j(6, E.$Li),
									j(7, u.$iP),
									j(8, c.$K1),
									j(9, i.$6j),
									j(10, n.$q2),
									j(11, y.$ek),
									j(12, S.$YX),
									j(13, I.$gj),
								],
								A,
							));
			},
		),
		