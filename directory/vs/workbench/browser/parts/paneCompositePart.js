import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../panecomposite.js';
import '../../common/views.js';
import '../../../base/common/lifecycle.js';
import '../../services/layout/browser/layoutService.js';
import './compositePart.js';
import './paneCompositeBar.js';
import '../../../base/browser/dom.js';
import '../../../platform/registry/common/platform.js';
import '../../../platform/notification/common/notification.js';
import '../../../platform/storage/common/storage.js';
import '../../../platform/contextview/browser/contextView.js';
import '../../../platform/keybinding/common/keybinding.js';
import '../../../platform/theme/common/themeService.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../../services/extensions/common/extensions.js';
import '../../../nls.js';
import '../dnd.js';
import '../../common/theme.js';
import '../actions.js';
import '../../../platform/actions/common/actions.js';
import '../../../base/browser/ui/actionbar/actionbar.js';
import '../../../base/browser/touch.js';
import '../../../base/browser/mouseEvent.js';
import '../../../base/common/actions.js';
import './views/viewPaneContainer.js';
import '../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../platform/hover/browser/hover.js';
import '../../../platform/actions/browser/toolbar.js';
import '../../../css!vs/workbench/browser/parts/media/paneCompositePart.js';
define(
			de[1350],
			he([
				1, 0, 6, 5, 1056, 60, 3, 96, 3540, 1937, 7, 30, 40, 21, 49, 39, 35, 8,
				53, 4, 362, 123, 967, 11, 105, 159, 168, 50, 239, 92, 72, 173, 2349,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*instantiation*/,
				w /*panecomposite*/,
				E /*views*/,
				C /*lifecycle*/,
				d /*layoutService*/,
				m /*compositePart*/,
				r /*paneCompositeBar*/,
				u /*dom*/,
				a /*platform*/,
				h /*notification*/,
				c /*storage*/,
				n /*contextView*/,
				g /*keybinding*/,
				p /*themeService*/,
				o /*contextkey*/,
				f /*extensions*/,
				b /*nls*/,
				s /*dnd*/,
				l /*theme*/,
				y /*actions*/,
				$ /*actions*/,
				v /*actionbar*/,
				S /*touch*/,
				I /*mouseEvent*/,
				T /*actions*/,
				P /*viewPaneContainer*/,
				k /*menuEntryActionViewItem*/,
				L /*hover*/,
				D /*toolbar*/,
) {
				"use strict";
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ouc = e.CompositeBarPosition = void 0);
				var N;
				(function (R) {
					(R[(R.TOP = 0)] = "TOP"),
						(R[(R.TITLE = 1)] = "TITLE"),
						(R[(R.BOTTOM = 2)] = "BOTTOM");
				})(N || (e.CompositeBarPosition = N = {}));
				let A = class extends m.$Kuc {
					static {
						M = this;
					}
					static {
						this.Ub = 50;
					}
					get snap() {
						return (
							this.M.isVisible(this.partId) ||
							!!this.$b.value?.getVisiblePaneCompositeIds().length
						);
					}
					get onDidPaneCompositeOpen() {
						return t.Event.map(this.b.event, (O) => O.composite);
					}
					constructor(
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
						let Q = E.ViewContainerLocation.Sidebar,
							Z = w.$4Sb.Viewlets,
							se = $.$XX.SidebarTitle;
						O === d.Parts.PANEL_PART
							? ((Q = E.ViewContainerLocation.Panel),
								(Z = w.$4Sb.Panels),
								(se = $.$XX.PanelTitle))
							: O === d.Parts.AUXILIARYBAR_PART &&
								((Q = E.ViewContainerLocation.AuxiliaryBar),
								(Z = w.$4Sb.Auxiliary),
								(se = $.$XX.AuxiliaryBarTitle)),
							super(
								V,
								G,
								K,
								J,
								W,
								X,
								Y,
								ie,
								a.$Io.as(Z),
								U,
								ne.getDefaultViewContainer(Q)?.id || "",
								x,
								H,
								q,
								O,
								B,
							),
							(this.partId = O),
							(this.gc = z),
							(this.hc = F),
							(this.ic = ne),
							(this.jc = ee),
							(this.kc = _),
							(this.lc = te),
							(this.onDidPaneCompositeClose = this.y.event),
							(this.Yb = this.D(new C.$Zc())),
							(this.$b = this.D(new C.$2c())),
							(this.ac = void 0),
							(this.ec = !1),
							(this.Vb = Q),
							(this.dc = this.D(
								this.ub.createInstance(y.$MMb, se, void 0, void 0),
							)),
							this.mc();
					}
					mc() {
						this.D(this.onDidPaneCompositeOpen((O) => this.nc(O))),
							this.D(this.onDidPaneCompositeClose(this.oc, this)),
							this.D(this.dc.onDidChange(() => this.Fc())),
							this.D(
								this.vb.onDidDeregister((O) => {
									const B = this.ic
										.getViewContainersByLocation(this.Vb)
										.filter(
											(U) =>
												this.ic.getViewContainerModel(U).activeViewDescriptors
													.length > 0,
										);
									if (B.length) {
										if (this.Ib()?.getId() === O.id) {
											const U = this.ic.getDefaultViewContainer(this.Vb)?.id,
												z = B.filter((F) => F.id === U)[0] || B[0];
											this.Bc(z.id);
										}
									} else this.M.setPartHidden(!0, this.partId);
									this.Tb(O.id);
								}),
							),
							this.D(
								this.kc.onDidRegisterExtensions(() => {
									this.Dc();
								}),
							);
					}
					nc(O) {
						this.gc.set(O.getId());
					}
					oc(O) {
						const B = O.getId();
						this.gc.get() === B && this.gc.reset();
					}
					Eb(O) {
						super.Eb(O), this.Dc(), this.Ec();
					}
					Kb() {
						const O = super.Kb();
						return this.Dc(), this.Ec(), O;
					}
					create(O) {
						(this.element = O),
							this.element.classList.add("pane-composite-part"),
							super.create(O);
						const B = this.R();
						B && this.rc(B), this.uc();
						const U = this.D((0, u.$dhb)(O));
						this.D(U.onDidFocus(() => this.hc.set(!0))),
							this.D(U.onDidBlur(() => this.hc.set(!1)));
					}
					rc(O) {
						(this.bc = document.createElement("div")),
							this.bc.classList.add("empty-pane-message-area");
						const B = document.createElement("div");
						B.classList.add("empty-pane-message"),
							(B.innerText = (0, b.localize)(3638, null)),
							this.bc.appendChild(B),
							O.appendChild(this.bc),
							this.D(
								s.$TSb.INSTANCE.registerTarget(this.bc, {
									onDragOver: (U) => {
										if ((u.$ahb.stop(U.eventData, !0), this.$b.value)) {
											const z = this.$b.value.dndHandler.onDragEnter(
												U.dragAndDropData,
												void 0,
												U.eventData,
											);
											(0, s.$USb)(U.eventData.dataTransfer, "move", z);
										}
									},
									onDragEnter: (U) => {
										if ((u.$ahb.stop(U.eventData, !0), this.$b.value)) {
											const z = this.$b.value.dndHandler.onDragEnter(
												U.dragAndDropData,
												void 0,
												U.eventData,
											);
											this.bc.style.backgroundColor =
												(z && this.h.getColor(l.$kFb)?.toString()) || "";
										}
									},
									onDragLeave: (U) => {
										u.$ahb.stop(U.eventData, !0),
											(this.bc.style.backgroundColor = "");
									},
									onDragEnd: (U) => {
										u.$ahb.stop(U.eventData, !0),
											(this.bc.style.backgroundColor = "");
									},
									onDrop: (U) => {
										u.$ahb.stop(U.eventData, !0),
											(this.bc.style.backgroundColor = ""),
											this.$b.value &&
												this.$b.value.dndHandler.drop(
													U.dragAndDropData,
													void 0,
													U.eventData,
												);
									},
								}),
							);
					}
					O(O) {
						const B = super.O(O);
						this.D(
							(0, u.$0fb)(B, u.$$gb.CONTEXT_MENU, (z) => {
								this.Hc(new I.$2fb((0, u.getWindow)(B), z));
							}),
						),
							this.D(S.$Qhb.addTarget(B)),
							this.D(
								(0, u.$0fb)(B, S.EventType.Contextmenu, (z) => {
									this.Hc(new I.$2fb((0, u.getWindow)(B), z));
								}),
							);
						const U = B.appendChild((0, u.$)(".global-actions"));
						return (
							(this.cc = this.D(
								this.ub.createInstance(D.$Syb, U, {
									actionViewItemProvider: (z, F) => this.Pb(z, F),
									orientation: v.ActionsOrientation.HORIZONTAL,
									getKeyBinding: (z) => this.sb.lookupKeybinding(z.id),
									anchorAlignmentProvider: () => this.Sb(),
									toggleMenuTitle: (0, b.localize)(3639, null),
									hoverDelegate: this.db,
									hiddenItemStrategy: D.HiddenItemStrategy.NoHide,
								}),
							)),
							this.Fc(),
							B
						);
					}
					Mb(O) {
						this.Wb = O;
						const B = super.Mb(O);
						this.cb.draggable = !0;
						const U = () => ({
							type: "composite",
							id: this.getActivePaneComposite().getId(),
						});
						return this.D(s.$TSb.INSTANCE.registerDraggable(this.cb, U, {})), B;
					}
					uc() {
						const O = this.ac !== void 0,
							B = this.Lc(),
							U = this.ac,
							z = B ? this.Nc() : void 0;
						if (U === z) return;
						if (O) {
							const x = U === N.TITLE ? this.Wb : this.Xb;
							if (!this.Zb || !this.$b.value || !x)
								throw new Error(
									"Composite bar containers should exist when removing the previous composite bar",
								);
							this.Zb.remove(),
								(this.Zb = void 0),
								(this.$b.value = void 0),
								x.classList.remove("has-composite-bar"),
								U === N.TOP ? this.yc(!0) : U === N.BOTTOM && this.yc(!1);
						}
						let F;
						switch (z) {
							case N.TOP:
								F = this.Nb();
								break;
							case N.TITLE:
								F = this.Wb;
								break;
							case N.BOTTOM:
								F = this.Ob();
								break;
						}
						if (B) {
							if (this.Zb || this.$b.value || !F)
								throw new Error(
									"Invalid composite bar state when creating the new composite bar",
								);
							F.classList.add("has-composite-bar"),
								(this.Zb = (0, u.$ghb)(
									F,
									(0, u.$)(".composite-bar-container"),
								)),
								(this.$b.value = this.zc()),
								this.$b.value.create(this.Zb),
								z === N.TOP ? this.S(F) : z === N.BOTTOM && this.U(F);
						}
						this.ac = z;
					}
					Nb() {
						const O = super.Nb();
						return this.xc(O);
					}
					Ob() {
						const O = super.Ob();
						return this.xc(O);
					}
					xc(O) {
						if (this.Xb)
							throw new Error("Header or Footer composite bar already exists");
						return (
							(this.Xb = O),
							this.Yb.add(
								(0, u.$0fb)(O, u.$$gb.CONTEXT_MENU, (B) => {
									this.Ic(new I.$2fb((0, u.getWindow)(O), B));
								}),
							),
							this.Yb.add(S.$Qhb.addTarget(O)),
							this.Yb.add(
								(0, u.$0fb)(O, S.EventType.Contextmenu, (B) => {
									this.Ic(new I.$2fb((0, u.getWindow)(O), B));
								}),
							),
							O
						);
					}
					yc(O) {
						(this.Xb = void 0), this.Yb.clear(), O ? this.W() : this.X();
					}
					zc() {
						return this.ub.createInstance(r.$Nuc, this.Mc(), this.partId, this);
					}
					Fb(O) {
						super.Fb(O), this.Dc();
					}
					async openPaneComposite(O, B) {
						if (typeof O == "string" && this.getPaneComposite(O))
							return this.Bc(O, B);
						if (
							(await this.kc.whenInstalledExtensionsRegistered(),
							typeof O == "string" && this.getPaneComposite(O))
						)
							return this.Bc(O, B);
					}
					Bc(O, B) {
						if (!this.ec) {
							if (!this.M.isVisible(this.partId))
								try {
									(this.ec = !0), this.M.setPartHidden(!1, this.partId);
								} finally {
									this.ec = !1;
								}
							return this.Bb(O, B);
						}
					}
					getPaneComposite(O) {
						return this.vb.getPaneComposite(O);
					}
					getPaneComposites() {
						return this.vb
							.getPaneComposites()
							.sort((O, B) =>
								typeof O.order != "number"
									? 1
									: typeof B.order != "number"
										? -1
										: O.order - B.order,
							);
					}
					getPinnedPaneCompositeIds() {
						return this.$b.value?.getPinnedPaneCompositeIds() ?? [];
					}
					getVisiblePaneCompositeIds() {
						return this.$b.value?.getVisiblePaneCompositeIds() ?? [];
					}
					getActivePaneComposite() {
						return this.Ib();
					}
					getLastActivePaneCompositeId() {
						return this.Jb();
					}
					hideActivePaneComposite() {
						this.M.isVisible(this.partId) &&
							this.M.setPartHidden(!0, this.partId),
							this.Kb();
					}
					Cc() {
						this.$b.value?.focus();
					}
					layout(O, B, U, z) {
						this.M.isVisible(this.partId) &&
							((this.fc = new u.$pgb(O, B)),
							super.layout(this.fc.width, this.fc.height, U, z),
							this.Dc(),
							this.Ec());
					}
					Dc() {
						if (this.fc && this.dimension && this.$b.value) {
							const O = this.ac === N.TITLE ? 16 : 8,
								B = this.partId === d.Parts.PANEL_PART ? 0 : 1;
							let U = this.fc.width - O - B;
							(U = Math.max(M.Ub, U - this.Gc())),
								this.$b.value.layout(U, this.dimension.height);
						}
					}
					Ec() {
						const O = !this.Ib();
						this.bc?.classList.toggle("visible", O),
							O && this.jb?.updateTitle("", "");
					}
					Fc() {
						const O = this.dc.getPrimaryActions(),
							B = this.dc.getSecondaryActions();
						this.cc?.setActions((0, v.$fib)(O), (0, v.$fib)(B));
					}
					Gc() {
						if (
							!this.bb ||
							this.ac !== N.TITLE ||
							!this.getActivePaneComposite()
						)
							return 0;
						const B = this.bb.getItemsWidth() + this.bb.getItemsLength() * 4,
							U = this.cc
								? this.cc.getItemsWidth() + this.cc.getItemsLength() * 4
								: 0;
						return B + U + 5;
					}
					Hc(O) {
						if (this.Lc() && this.Nc() === N.TITLE) return this.Jc(O);
						{
							const B = this.getActivePaneComposite(),
								U = B ? B.getContextMenuActions() : [];
							U.length &&
								this.rb.showContextMenu({
									getAnchor: () => O,
									getActions: () => U,
									getActionViewItem: (z, F) => this.Pb(z, F),
									actionRunner: B.getActionRunner(),
									skipTelemetry: !0,
								});
						}
					}
					Ic(O) {
						return this.Jc(O);
					}
					Jc(O) {
						if (this.$b.value) {
							const B = [...this.$b.value.getContextMenuActions()];
							B.length &&
								this.rb.showContextMenu({
									getAnchor: () => O,
									getActions: () => B,
									skipTelemetry: !0,
								});
						}
					}
					Kc() {
						const O = this.getActivePaneComposite()?.getViewPaneContainer();
						if (O) {
							const B = new C.$Zc(),
								U = [],
								z = B.add(this.jc.createScoped(this.element));
							z.createKey("viewContainer", O.viewContainer.id);
							const F = this.lc.getMenuActions(P.$YSb, z, {
								shouldForwardArgs: !0,
								renderShortTitle: !0,
							});
							return (
								(0, k.$Kyb)(F, { primary: U, secondary: [] }, () => !0),
								B.dispose(),
								U.length > 1 && U.some((x) => x.enabled)
									? new T.$uj("views", (0, b.localize)(3640, null), U)
									: void 0
							);
						}
					}
				};
				(e.$Ouc = A),
					(e.$Ouc =
						A =
						M =
							Ne(
								[
									j(8, h.$4N),
									j(9, c.$lq),
									j(10, n.$Xxb),
									j(11, d.$mEb),
									j(12, g.$uZ),
									j(13, L.$Uyb),
									j(14, i.$Li),
									j(15, p.$iP),
									j(16, E.$K1),
									j(17, o.$6j),
									j(18, f.$q2),
									j(19, $.$YX),
								],
								A,
							));
			},
		),
		