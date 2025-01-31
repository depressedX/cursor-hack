import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/mouseEvent.js';
import '../../../../base/browser/touch.js';
import '../../../../base/browser/ui/sash/sash.js';
import '../../../../base/browser/ui/splitview/paneview.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../actions.js';
import '../../dnd.js';
import '../../../common/component.js';
import '../../../common/theme.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../common/contextkeys.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../css!vs/workbench/browser/parts/views/media/paneviewlet.js';
define(
			de[239],
			he([
				1, 0, 7, 168, 159, 277, 1580, 15, 6, 27, 3, 28, 4, 92, 11, 10, 8, 49, 5,
				43, 21, 32, 51, 35, 25, 967, 362, 969, 123, 60, 89, 100, 53, 96, 1518,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*mouseEvent*/,
				w /*touch*/,
				E /*sash*/,
				C /*paneview*/,
				d /*async*/,
				m /*event*/,
				r /*keyCodes*/,
				u /*lifecycle*/,
				a /*types*/,
				h /*nls*/,
				c /*menuEntryActionViewItem*/,
				n /*actions*/,
				g /*configuration*/,
				p /*contextkey*/,
				o /*contextView*/,
				f /*instantiation*/,
				b /*keybindingsRegistry*/,
				s /*storage*/,
				l /*telemetry*/,
				y /*colorRegistry*/,
				$ /*themeService*/,
				v /*workspace*/,
				S /*actions*/,
				I /*dnd*/,
				T /*component*/,
				P /*theme*/,
				k /*views*/,
				L /*viewsService*/,
				D /*contextkeys*/,
				M /*extensions*/,
				N /*layoutService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Sb = e.$ZSb = e.$YSb = void 0),
					(h = mt(h)),
					(e.$YSb = new n.$XX("Views")),
					n.$ZX.appendMenuItem(n.$XX.ViewContainerTitle, {
						submenu: e.$YSb,
						title: h.localize(3748, null),
						order: 1,
					});
				var A;
				(function (F) {
					(F[(F.UP = 0)] = "UP"),
						(F[(F.DOWN = 1)] = "DOWN"),
						(F[(F.LEFT = 2)] = "LEFT"),
						(F[(F.RIGHT = 3)] = "RIGHT");
				})(A || (A = {}));
				class R extends $.$pP {
					static {
						this.c = "monaco-pane-drop-overlay";
					}
					get currentDropOperation() {
						return this.j;
					}
					constructor(x, H, q, V, G) {
						super(G),
							(this.s = x),
							(this.t = H),
							(this.u = q),
							(this.z = V),
							(this.r = this.D(new d.$Yh(() => this.dispose(), 300))),
							this.C();
					}
					get disposed() {
						return !!this.m;
					}
					C() {
						(this.f = document.createElement("div")),
							(this.f.id = R.c),
							(this.f.style.top = "0px"),
							this.s.appendChild(this.f),
							this.s.classList.add("dragged-over"),
							this.D(
								(0, u.$Yc)(() => {
									this.f.remove(), this.s.classList.remove("dragged-over");
								}),
							),
							(this.g = document.createElement("div")),
							this.g.classList.add("pane-overlay-indicator"),
							this.f.appendChild(this.g),
							this.F(),
							this.updateStyles();
					}
					updateStyles() {
						this.g.style.backgroundColor =
							this.w(
								this.z === k.ViewContainerLocation.Panel ? P.$xFb : P.$BGb,
							) || "";
						const x = this.w(y.$PP);
						(this.g.style.outlineColor = x || ""),
							(this.g.style.outlineOffset = x ? "-2px" : ""),
							(this.g.style.outlineStyle = x ? "dashed" : ""),
							(this.g.style.outlineWidth = x ? "2px" : ""),
							(this.g.style.borderColor = x || ""),
							(this.g.style.borderStyle = "solid"),
							(this.g.style.borderWidth = "0px");
					}
					F() {
						this.D(
							new t.$Hhb(this.f, {
								onDragOver: (x) => {
									this.G(x.offsetX, x.offsetY),
										this.r.isScheduled() && this.r.cancel();
								},
								onDragLeave: (x) => this.dispose(),
								onDragEnd: (x) => this.dispose(),
								onDrop: (x) => {
									this.dispose();
								},
							}),
						),
							this.D(
								(0, t.$0fb)(this.f, t.$$gb.MOUSE_OVER, () => {
									this.r.isScheduled() || this.r.schedule();
								}),
							);
					}
					G(x, H) {
						const q = this.s.clientWidth,
							V = this.s.clientHeight,
							G = q / 2,
							K = V / 2;
						let J;
						switch (
							(this.t === E.Orientation.VERTICAL
								? H < K
									? (J = A.UP)
									: H >= K && (J = A.DOWN)
								: this.t === E.Orientation.HORIZONTAL &&
									(x < G ? (J = A.LEFT) : x >= G && (J = A.RIGHT)),
							J)
						) {
							case A.UP:
								this.I({ top: "0", left: "0", width: "100%", height: "50%" });
								break;
							case A.DOWN:
								this.I({
									bottom: "0",
									left: "0",
									width: "100%",
									height: "50%",
								});
								break;
							case A.LEFT:
								this.I({ top: "0", left: "0", width: "50%", height: "100%" });
								break;
							case A.RIGHT:
								this.I({ top: "0", right: "0", width: "50%", height: "100%" });
								break;
							default: {
								let W = "0",
									X = "0",
									Y = "100%",
									ie = "100%";
								if (this.u) {
									const ne = this.f.getBoundingClientRect();
									(W = `${this.u.top - ne.top}px`),
										(X = `${this.u.left - ne.left}px`),
										(ie = `${this.u.bottom - this.u.top}px`),
										(Y = `${this.u.right - this.u.left}px`);
								}
								this.I({ top: W, left: X, width: Y, height: ie });
							}
						}
						(this.t === E.Orientation.VERTICAL && V <= 25) ||
						(this.t === E.Orientation.HORIZONTAL && q <= 25)
							? this.H(J)
							: this.H(void 0),
							(this.g.style.opacity = "1"),
							setTimeout(
								() => this.g.classList.add("overlay-move-transition"),
								0,
							),
							(this.j = J);
					}
					H(x) {
						(this.g.style.borderTopWidth = x === A.UP ? "2px" : "0px"),
							(this.g.style.borderLeftWidth = x === A.LEFT ? "2px" : "0px"),
							(this.g.style.borderBottomWidth = x === A.DOWN ? "2px" : "0px"),
							(this.g.style.borderRightWidth = x === A.RIGHT ? "2px" : "0px");
					}
					I(x) {
						(this.f.style.height = "100%"),
							(this.g.style.top = x.top || ""),
							(this.g.style.left = x.left || ""),
							(this.g.style.bottom = x.bottom || ""),
							(this.g.style.right = x.right || ""),
							(this.g.style.width = x.width),
							(this.g.style.height = x.height);
					}
					contains(x) {
						return x === this.f || x === this.g;
					}
					dispose() {
						super.dispose(), (this.m = !0);
					}
				}
				let O = class extends S.$MMb {
					constructor(x, H, q, V, G) {
						const K = V.createScoped(x);
						K.createKey("viewContainer", H.id);
						const J = K.createKey(
							"viewContainerLocation",
							(0, k.$J1)(q.getViewContainerLocation(H)),
						);
						super(
							n.$XX.ViewContainerTitle,
							n.$XX.ViewContainerTitleContext,
							{ shouldForwardArgs: !0, renderShortTitle: !0 },
							K,
							G,
						),
							this.D(K),
							this.D(
								m.Event.filter(
									q.onDidChangeContainerLocation,
									(W) => W.viewContainer === H,
								)(() => J.set((0, k.$J1)(q.getViewContainerLocation(H)))),
							);
					}
				};
				O = Ne([j(2, k.$K1), j(3, p.$6j), j(4, n.$YX)], O);
				let B = class extends T.$fEb {
					get onDidSashChange() {
						return (0, a.$wg)(this.m).onDidSashChange;
					}
					get panes() {
						return this.j.map((x) => x.pane);
					}
					get views() {
						return this.panes;
					}
					get length() {
						return this.j.length;
					}
					get menuActions() {
						return this.Z;
					}
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(x, X, Y),
							(this.ab = H),
							(this.bb = q),
							(this.cb = V),
							(this.db = G),
							(this.eb = K),
							(this.fb = J),
							(this.gb = W),
							(this.hb = Y),
							(this.ib = ie),
							(this.jb = ne),
							(this.j = []),
							(this.s = !1),
							(this.u = !1),
							(this.J = !1),
							(this.Q = this.D(new m.$re())),
							(this.onTitleAreaUpdate = this.Q.event),
							(this.R = this.D(new m.$re())),
							(this.onDidChangeVisibility = this.R.event),
							(this.S = this.D(new m.$re())),
							(this.onDidAddViews = this.S.event),
							(this.U = this.D(new m.$re())),
							(this.onDidRemoveViews = this.U.event),
							(this.W = this.D(new m.$re())),
							(this.onDidChangeViewVisibility = this.W.event),
							(this.X = this.D(new m.$re())),
							(this.onDidFocusView = this.X.event),
							(this.Y = this.D(new m.$re())),
							(this.onDidBlurView = this.Y.event);
						const ee = this.jb.getViewContainerById(x);
						if (!ee) throw new Error("Could not find container");
						(this.viewContainer = ee),
							(this.O = `${x}.numberOfVisibleViews`),
							(this.N = this.hb.getNumber(
								this.O,
								s.StorageScope.WORKSPACE,
								void 0,
							)),
							(this.P = this.jb.getViewContainerModel(ee));
					}
					create(x) {
						const H = this.ab;
						(H.orientation = this.lb),
							(this.m = this.D(new C.$gpb(x, this.ab))),
							this.M && this.m.setBoundarySashes(this.M),
							this.D(
								this.m.onDidDrop(({ from: W, to: X }) => this.movePane(W, X)),
							),
							this.D(this.m.onDidScroll((W) => this.yb())),
							this.D(this.m.onDidSashReset((W) => this.zb(W))),
							this.D(
								(0, t.$0fb)(x, t.$$gb.CONTEXT_MENU, (W) =>
									this.kb(new i.$2fb((0, t.getWindow)(x), W)),
								),
							),
							this.D(w.$Qhb.addTarget(x)),
							this.D(
								(0, t.$0fb)(x, w.EventType.Contextmenu, (W) =>
									this.kb(new i.$2fb((0, t.getWindow)(x), W)),
								),
							),
							(this.Z = this.D(
								this.bb.createInstance(O, this.m.element, this.viewContainer),
							)),
							this.D(this.Z.onDidChange(() => this.mb()));
						let q;
						const V = () => {
								const W = x.getBoundingClientRect(),
									X =
										this.panes[
											this.panes.length - 1
										].element.getBoundingClientRect(),
									Y = this.lb === E.Orientation.VERTICAL ? X.bottom : W.top,
									ie = this.lb === E.Orientation.HORIZONTAL ? X.right : W.left;
								return { top: Y, bottom: W.bottom, left: ie, right: W.right };
							},
							G = (W, X) =>
								X.x >= W.left &&
								X.x <= W.right &&
								X.y >= W.top &&
								X.y <= W.bottom;
						let K;
						this.D(
							I.$TSb.INSTANCE.registerTarget(x, {
								onDragEnter: (W) => {
									if (
										((K = V()),
										q && q.disposed && (q = void 0),
										!q && G(K, W.eventData))
									) {
										const X = W.dragAndDropData.getData();
										if (X.type === "view") {
											const Y = this.jb.getViewContainerByViewId(X.id),
												ie = this.jb.getViewDescriptorById(X.id);
											if (
												Y !== this.viewContainer &&
												(!ie ||
													!ie.canMoveView ||
													this.viewContainer.rejectAddedViews)
											)
												return;
											q = new R(
												x,
												void 0,
												K,
												this.jb.getViewContainerLocation(this.viewContainer),
												this.n,
											);
										}
										if (
											X.type === "composite" &&
											X.id !== this.viewContainer.id
										) {
											const Y = this.jb.getViewContainerById(X.id),
												ie =
													this.jb.getViewContainerModel(Y).allViewDescriptors;
											!ie.some((ne) => !ne.canMoveView) &&
												ie.length > 0 &&
												(q = new R(
													x,
													void 0,
													K,
													this.jb.getViewContainerLocation(this.viewContainer),
													this.n,
												));
										}
									}
								},
								onDragOver: (W) => {
									q && q.disposed && (q = void 0),
										q && !G(K, W.eventData) && (q.dispose(), (q = void 0)),
										G(K, W.eventData) &&
											(0, I.$USb)(
												W.eventData.dataTransfer,
												"move",
												q !== void 0,
											);
								},
								onDragLeave: (W) => {
									q?.dispose(), (q = void 0);
								},
								onDrop: (W) => {
									if (q) {
										const X = W.dragAndDropData.getData(),
											Y = [];
										if (
											X.type === "composite" &&
											X.id !== this.viewContainer.id
										) {
											const ne = this.jb.getViewContainerById(X.id),
												ee =
													this.jb.getViewContainerModel(ne).allViewDescriptors;
											ee.some((_) => !_.canMoveView) || Y.push(...ee);
										} else if (X.type === "view") {
											const ne = this.jb.getViewContainerByViewId(X.id),
												ee = this.jb.getViewDescriptorById(X.id);
											ne !== this.viewContainer &&
												ee &&
												ee.canMoveView &&
												this.jb.moveViewsToContainer(
													[ee],
													this.viewContainer,
													void 0,
													"dnd",
												);
										}
										const ie = this.panes.length;
										if (
											(Y.length > 0 &&
												this.jb.moveViewsToContainer(
													Y,
													this.viewContainer,
													void 0,
													"dnd",
												),
											ie > 0)
										)
											for (const ne of Y) {
												const ee = this.panes.find((_) => _.id === ne.id);
												ee &&
													this.movePane(ee, this.panes[this.panes.length - 1]);
											}
									}
									q?.dispose(), (q = void 0);
								},
							}),
						),
							this.D(this.onDidSashChange(() => this.ob())),
							this.D(this.P.onDidAddVisibleViewDescriptors((W) => this.tb(W))),
							this.D(
								this.P.onDidRemoveVisibleViewDescriptors((W) => this.ub(W)),
							);
						const J = this.P.visibleViewDescriptors.map((W, X) => {
							const Y = this.P.getSize(W.id),
								ie = this.P.isCollapsed(W.id);
							return { viewDescriptor: W, index: X, size: Y, collapsed: ie };
						});
						J.length && this.tb(J),
							this.gb.whenInstalledExtensionsRegistered().then(() => {
								(this.u = !0),
									this.panes.length && (this.mb(), this.xb()),
									this.D(
										this.cb.onDidChangeConfiguration((W) => {
											W.affectsConfiguration(
												N.LayoutSettings.ACTIVITY_BAR_LOCATION,
											) && this.xb();
										}),
									);
							}),
							this.D(
								this.P.onDidChangeActiveViewDescriptors(() => this.Q.fire()),
							);
					}
					getTitle() {
						const x = this.P.title;
						if (this.isViewMergedWithContainer()) {
							const H = this.j[0].pane.singleViewPaneContainerTitle;
							if (H) return H;
							const q = this.j[0].pane.title;
							return x === q ? q : q ? `${q}` : x;
						}
						return x;
					}
					kb(x) {
						for (const H of this.j)
							if ((0, t.$Bgb)(x.target, H.pane.element)) return;
						x.stopPropagation(),
							x.preventDefault(),
							this.eb.showContextMenu({
								getAnchor: () => x,
								getActions: () =>
									this.menuActions?.getContextMenuActions() ?? [],
							});
					}
					getActionsContext() {
						if (this.isViewMergedWithContainer())
							return this.panes[0].getActionsContext();
					}
					getActionViewItem(x, H) {
						return this.isViewMergedWithContainer()
							? this.j[0].pane.getActionViewItem(x, H)
							: (0, c.$Pyb)(this.bb, x, H);
					}
					focus() {
						let x;
						if (this.f) x = this.f;
						else if (this.j.length > 0) {
							for (const { pane: H } of this.j)
								if (H.isExpanded()) {
									x = H;
									break;
								}
						}
						x && x.focus();
					}
					get lb() {
						switch (this.jb.getViewContainerLocation(this.viewContainer)) {
							case k.ViewContainerLocation.Sidebar:
							case k.ViewContainerLocation.AuxiliaryBar:
								return E.Orientation.VERTICAL;
							case k.ViewContainerLocation.Panel:
								return (0, N.$nEb)(this.db.getPanelPosition())
									? E.Orientation.HORIZONTAL
									: E.Orientation.VERTICAL;
						}
						return E.Orientation.VERTICAL;
					}
					layout(x) {
						this.m &&
							(this.m.orientation !== this.lb &&
								this.m.flipOrientation(x.height, x.width),
							this.m.layout(x.height, x.width)),
							(this.L = x),
							this.J ? this.ob() : ((this.J = !0), this.pb());
					}
					setBoundarySashes(x) {
						(this.M = x), this.m?.setBoundarySashes(x);
					}
					getOptimalWidth() {
						return (
							Math.max(...this.panes.map((q) => q.getOptimalWidth() || 0)) + 16
						);
					}
					addPanes(x) {
						const H = this.isViewMergedWithContainer();
						for (const { pane: q, size: V, index: G, disposable: K } of x)
							this.vb(q, V, K, G);
						this.xb(),
							this.isViewMergedWithContainer() !== H && this.mb(),
							this.S.fire(x.map(({ pane: q }) => q));
					}
					setVisible(x) {
						this.s !== !!x && ((this.s = x), this.R.fire(x)),
							this.panes
								.filter((H) => H.isVisible() !== x)
								.map((H) => H.setVisible(x));
					}
					isVisible() {
						return this.s;
					}
					mb() {
						this.Q.fire();
					}
					nb(x, H) {
						return this.bb.createInstance(
							x.ctorDescriptor.ctor,
							...(x.ctorDescriptor.staticArguments || []),
							H,
						);
					}
					getView(x) {
						return this.panes.filter((H) => H.id === x)[0];
					}
					ob() {
						this.J &&
							this.P.setSizes(
								this.panes.map((x) => ({
									id: x.id,
									size: this.getPaneSize(x),
								})),
							);
					}
					pb() {
						if (this.J) {
							let x;
							for (let H = 0; H < this.P.visibleViewDescriptors.length; H++) {
								const q = this.panes[H],
									V = this.P.visibleViewDescriptors[H],
									G = this.P.getSize(V.id);
								typeof G == "number"
									? this.resizePane(q, G)
									: ((x = x || this.qb()),
										this.resizePane(q, x.get(q.id) || 200));
							}
						}
					}
					qb() {
						const x = new Map();
						if (this.L) {
							const H = this.P.visibleViewDescriptors.reduce(
								(q, { weight: V }) => q + (V || 20),
								0,
							);
							for (const q of this.P.visibleViewDescriptors)
								this.lb === E.Orientation.VERTICAL
									? x.set(q.id, (this.L.height * (q.weight || 20)) / H)
									: x.set(q.id, (this.L.width * (q.weight || 20)) / H);
						}
						return x;
					}
					I() {
						this.panes.forEach((x) => x.saveState()),
							this.hb.store(
								this.O,
								this.length,
								s.StorageScope.WORKSPACE,
								s.StorageTarget.MACHINE,
							);
					}
					sb(x, H) {
						x.stopPropagation(), x.preventDefault();
						const q = H.menuActions.getContextMenuActions();
						this.eb.showContextMenu({
							getAnchor: () => x,
							getActions: () => q,
						});
					}
					openView(x, H) {
						let q = this.getView(x);
						return (
							q || this.toggleViewVisibility(x),
							(q = this.getView(x)),
							q && (q.setExpanded(!0), H && q.focus()),
							q
						);
					}
					tb(x) {
						const H = [];
						for (const {
							viewDescriptor: V,
							collapsed: G,
							index: K,
							size: J,
						} of x) {
							const W = this.nb(V, {
								id: V.id,
								title: V.name.value,
								fromExtensionId: V.extensionId,
								expanded: !G,
								singleViewPaneContainerTitle: V.singleViewPaneContainerTitle,
							});
							W.render();
							const X = (0, t.$0fb)(W.draggableElement, "contextmenu", (ie) => {
									ie.stopPropagation(),
										ie.preventDefault(),
										this.sb(
											new i.$2fb((0, t.getWindow)(W.draggableElement), ie),
											W,
										);
								}),
								Y = m.Event.latch(
									m.Event.map(W.onDidChange, () => !W.isExpanded()),
								)((ie) => {
									this.P.setCollapsed(V.id, ie);
								});
							H.push({
								pane: W,
								size: J || W.minimumSize,
								index: K,
								disposable: (0, u.$Xc)(X, Y),
							});
						}
						this.addPanes(H), this.pb();
						const q = [];
						for (const { pane: V } of H)
							V.setVisible(this.isVisible()), q.push(V);
						return q;
					}
					ub(x) {
						x = x.sort((q, V) => V.index - q.index);
						const H = [];
						for (const { index: q } of x) this.j[q] && H.push(this.j[q].pane);
						if (H.length) {
							this.removePanes(H);
							for (const q of H) q.setVisible(!1);
						}
					}
					toggleViewVisibility(x) {
						if (this.P.activeViewDescriptors.some((H) => H.id === x)) {
							const H = !this.P.isVisible(x);
							this.P.setVisible(x, H);
						}
					}
					vb(x, H, q, V = this.j.length - 1) {
						const G = x.onDidFocus(() => {
								this.X.fire(x), (this.f = x);
							}),
							K = x.onDidBlur(() => this.Y.fire(x)),
							J = x.onDidChangeTitleArea(() => {
								this.isViewMergedWithContainer() && this.mb();
							}),
							W = x.onDidChangeBodyVisibility(() => this.W.fire(x)),
							X = x.onDidChange(() => {
								x === this.f && !x.isExpanded() && (this.f = void 0);
							}),
							Y =
								this.jb.getViewContainerLocation(this.viewContainer) ===
								k.ViewContainerLocation.Panel;
						x.style({
							headerForeground: (0, y.$rP)(Y ? P.$zFb : P.$DGb),
							headerBackground: (0, y.$rP)(Y ? P.$yFb : P.$CGb),
							headerBorder: (0, y.$rP)(Y ? P.$AFb : P.$EGb),
							dropBackground: (0, y.$rP)(Y ? P.$xFb : P.$BGb),
							leftBorder: Y ? (0, y.$rP)(P.$BFb) : void 0,
						});
						const ie = new u.$Zc();
						ie.add(q), ie.add((0, u.$Xc)(x, G, K, J, X, W));
						const ne = { pane: x, disposable: ie };
						this.j.splice(V, 0, ne), (0, a.$wg)(this.m).addPane(x, H, V);
						let ee;
						ie.add(
							I.$TSb.INSTANCE.registerDraggable(
								x.draggableElement,
								() => ({ type: "view", id: x.id }),
								{},
							),
						),
							ie.add(
								I.$TSb.INSTANCE.registerTarget(x.dropTargetElement, {
									onDragEnter: (_) => {
										if (!ee) {
											const te = _.dragAndDropData.getData();
											if (te.type === "view" && te.id !== x.id) {
												const Q = this.jb.getViewContainerByViewId(te.id),
													Z = this.jb.getViewDescriptorById(te.id);
												if (
													Q !== this.viewContainer &&
													(!Z ||
														!Z.canMoveView ||
														this.viewContainer.rejectAddedViews)
												)
													return;
												ee = new R(
													x.dropTargetElement,
													this.lb ?? E.Orientation.VERTICAL,
													void 0,
													this.jb.getViewContainerLocation(this.viewContainer),
													this.n,
												);
											}
											if (
												te.type === "composite" &&
												te.id !== this.viewContainer.id &&
												!this.viewContainer.rejectAddedViews
											) {
												const Q = this.jb.getViewContainerById(te.id),
													Z =
														this.jb.getViewContainerModel(Q).allViewDescriptors;
												!Z.some((se) => !se.canMoveView) &&
													Z.length > 0 &&
													(ee = new R(
														x.dropTargetElement,
														this.lb ?? E.Orientation.VERTICAL,
														void 0,
														this.jb.getViewContainerLocation(
															this.viewContainer,
														),
														this.n,
													));
											}
										}
									},
									onDragOver: (_) => {
										(0, I.$USb)(
											_.eventData.dataTransfer,
											"move",
											ee !== void 0,
										);
									},
									onDragLeave: (_) => {
										ee?.dispose(), (ee = void 0);
									},
									onDrop: (_) => {
										if (ee) {
											const te = _.dragAndDropData.getData(),
												Q = [];
											let Z;
											if (
												te.type === "composite" &&
												te.id !== this.viewContainer.id &&
												!this.viewContainer.rejectAddedViews
											) {
												const se = this.jb.getViewContainerById(te.id),
													re =
														this.jb.getViewContainerModel(
															se,
														).allViewDescriptors;
												re.length > 0 &&
													!re.some((le) => !le.canMoveView) &&
													(Q.push(...re), (Z = re[0]));
											} else if (te.type === "view") {
												const se = this.jb.getViewContainerByViewId(te.id),
													re = this.jb.getViewDescriptorById(te.id);
												se !== this.viewContainer &&
													re &&
													re.canMoveView &&
													!this.viewContainer.rejectAddedViews &&
													Q.push(re),
													re && (Z = re);
											}
											if (
												(Q &&
													this.jb.moveViewsToContainer(
														Q,
														this.viewContainer,
														void 0,
														"dnd",
													),
												Z)
											) {
												if (
													ee.currentDropOperation === A.DOWN ||
													ee.currentDropOperation === A.RIGHT
												) {
													const se = this.panes.findIndex(
														(le) => le.id === Z.id,
													);
													let re = this.panes.findIndex((le) => le.id === x.id);
													se >= 0 &&
														re >= 0 &&
														(se > re && re++,
														re < this.panes.length &&
															re !== se &&
															this.movePane(this.panes[se], this.panes[re]));
												}
												if (
													ee.currentDropOperation === A.UP ||
													ee.currentDropOperation === A.LEFT
												) {
													const se = this.panes.findIndex(
														(le) => le.id === Z.id,
													);
													let re = this.panes.findIndex((le) => le.id === x.id);
													se >= 0 &&
														re >= 0 &&
														(se < re && re--,
														re >= 0 &&
															re !== se &&
															this.movePane(this.panes[se], this.panes[re]));
												}
												Q.length > 1 &&
													Q.slice(1).forEach((se) => {
														let re = this.panes.findIndex(
															(oe) => oe.id === Z.id,
														);
														const le = this.panes.findIndex(
															(oe) => oe.id === se.id,
														);
														le >= 0 &&
															re >= 0 &&
															(le > re && re++,
															re < this.panes.length &&
																re !== le &&
																(this.movePane(this.panes[le], this.panes[re]),
																(Z = se)));
													});
											}
										}
										ee?.dispose(), (ee = void 0);
									},
								}),
							);
					}
					removePanes(x) {
						const H = this.isViewMergedWithContainer();
						x.forEach((q) => this.wb(q)),
							this.xb(),
							H !== this.isViewMergedWithContainer() && this.mb(),
							this.U.fire(x);
					}
					wb(x) {
						const H = this.j.findIndex((V) => V.pane === x);
						if (H === -1) return;
						this.f === x && (this.f = void 0), (0, a.$wg)(this.m).removePane(x);
						const [q] = this.j.splice(H, 1);
						q.disposable.dispose();
					}
					movePane(x, H) {
						const q = this.j.findIndex((W) => W.pane === x),
							V = this.j.findIndex((W) => W.pane === H),
							G = this.P.visibleViewDescriptors[q],
							K = this.P.visibleViewDescriptors[V];
						if (q < 0 || q >= this.j.length || V < 0 || V >= this.j.length)
							return;
						const [J] = this.j.splice(q, 1);
						this.j.splice(V, 0, J),
							(0, a.$wg)(this.m).movePane(x, H),
							this.P.move(G.id, K.id),
							this.mb();
					}
					resizePane(x, H) {
						(0, a.$wg)(this.m).resizePane(x, H);
					}
					getPaneSize(x) {
						return (0, a.$wg)(this.m).getPaneSize(x);
					}
					xb() {
						this.isViewMergedWithContainer()
							? (this.j[0].pane.isExpanded()
									? (this.g = void 0)
									: ((this.g = this.j[0].pane), this.j[0].pane.setExpanded(!0)),
								(this.j[0].pane.headerVisible = !1),
								(this.j[0].pane.collapsible = !0))
							: (this.j.length === 1
									? ((this.j[0].pane.headerVisible = !0),
										this.j[0].pane === this.g && this.j[0].pane.setExpanded(!1),
										(this.j[0].pane.collapsible = !1))
									: this.j.forEach((x) => {
											(x.pane.headerVisible = !0),
												(x.pane.collapsible = !0),
												x.pane === this.g && x.pane.setExpanded(!1);
										}),
								(this.g = void 0),
								this.j.length === 1
									? this.j[0].pane.setIsAlone(!0)
									: this.j.length > 1 &&
										this.j.forEach((x) => x.pane.setIsAlone(!1)));
					}
					isViewMergedWithContainer() {
						return !(
							this.ab.mergeViewWithContainerWhenSingleView &&
							this.j.length === 1
						) ||
							(this.jb.getViewContainerLocation(this.viewContainer) ===
								k.ViewContainerLocation.Sidebar &&
								this.db.activityBarDirection !== "vertical")
							? !1
							: this.u
								? !0
								: this.N === void 0
									? this.j[0].pane.isExpanded()
									: this.N === 1;
					}
					yb() {
						for (const x of this.panes) x.onDidScrollRoot();
					}
					zb(x) {
						let H, q;
						for (let V = x; V >= 0; V--)
							if (this.j[V].pane?.isVisible() && this.j[V]?.pane.isExpanded()) {
								H = this.j[V].pane;
								break;
							}
						for (let V = x + 1; V < this.j.length; V++)
							if (this.j[V].pane?.isVisible() && this.j[V]?.pane.isExpanded()) {
								q = this.j[V].pane;
								break;
							}
						if (H && q) {
							const V = this.getPaneSize(H),
								G = this.getPaneSize(q),
								K = Math.ceil((V + G) / 2),
								J = Math.floor((V + G) / 2);
							V > G
								? (this.resizePane(H, K), this.resizePane(q, J))
								: (this.resizePane(q, J), this.resizePane(H, K));
						}
					}
					dispose() {
						super.dispose(),
							this.j.forEach((x) => x.disposable.dispose()),
							this.m && this.m.dispose();
					}
				};
				(e.$ZSb = B),
					(e.$ZSb = B =
						Ne(
							[
								j(2, f.$Li),
								j(3, g.$gj),
								j(4, N.$mEb),
								j(5, o.$Xxb),
								j(6, l.$km),
								j(7, M.$q2),
								j(8, $.$iP),
								j(9, s.$lq),
								j(10, v.$Vi),
								j(11, k.$K1),
							],
							B,
						));
				class U extends n.$3X {
					constructor(x) {
						super(x), (this.desc = x);
					}
					run(x, ...H) {
						const q = x
							.get(L.$HMb)
							.getActiveViewPaneContainerWithId(this.desc.viewPaneContainerId);
						if (q) return this.runInViewPaneContainer(x, q, ...H);
					}
				}
				e.$1Sb = U;
				class z extends n.$3X {
					constructor(x, H) {
						super(x), (this.c = H);
					}
					async run(x) {
						const H = x.get(k.$K1),
							q = x.get(p.$6j),
							V = D.$zQb.getValue(q);
						if (V === void 0) return;
						const G = H.getViewContainerByViewId(V),
							K = H.getViewContainerModel(G),
							J = K.visibleViewDescriptors.find((Y) => Y.id === V),
							W = K.visibleViewDescriptors.indexOf(J);
						if (W + this.c < 0 || W + this.c >= K.visibleViewDescriptors.length)
							return;
						const X = K.visibleViewDescriptors[W + this.c];
						K.move(J.id, X.id);
					}
				}
				(0, n.$4X)(
					class extends z {
						constructor() {
							super(
								{
									id: "views.moveViewUp",
									title: h.localize(3749, null),
									keybinding: {
										primary: (0, r.$os)(r.$ps, r.KeyCode.UpArrow),
										mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.UpArrow) },
										weight: b.KeybindingWeight.WorkbenchContrib + 1,
										when: D.$zQb.notEqualsTo(""),
									},
								},
								-1,
							);
						}
					},
				),
					(0, n.$4X)(
						class extends z {
							constructor() {
								super(
									{
										id: "views.moveViewLeft",
										title: h.localize(3750, null),
										keybinding: {
											primary: (0, r.$os)(r.$ps, r.KeyCode.LeftArrow),
											mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.LeftArrow) },
											weight: b.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$zQb.notEqualsTo(""),
										},
									},
									-1,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends z {
							constructor() {
								super(
									{
										id: "views.moveViewDown",
										title: h.localize(3751, null),
										keybinding: {
											primary: (0, r.$os)(r.$ps, r.KeyCode.DownArrow),
											mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.DownArrow) },
											weight: b.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$zQb.notEqualsTo(""),
										},
									},
									1,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends z {
							constructor() {
								super(
									{
										id: "views.moveViewRight",
										title: h.localize(3752, null),
										keybinding: {
											primary: (0, r.$os)(r.$ps, r.KeyCode.RightArrow),
											mac: { primary: (0, r.$os)(r.$qs, r.KeyCode.RightArrow) },
											weight: b.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$zQb.notEqualsTo(""),
										},
									},
									1,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: "vscode.moveViews",
									title: h.localize(3753, null),
								});
							}
							async run(x, H) {
								if (
									!Array.isArray(H?.viewIds) ||
									typeof H?.destinationId != "string"
								)
									return Promise.reject("Invalid arguments");
								const q = x.get(k.$K1),
									V = q.getViewContainerById(H.destinationId);
								if (V) {
									for (const G of H.viewIds) {
										const K = q.getViewDescriptorById(G);
										K?.canMoveView &&
											q.moveViewsToContainer(
												[K],
												V,
												k.ViewVisibilityState.Default,
												this.desc.id,
											);
									}
									await x.get(L.$HMb).openViewContainer(V.id, !0);
								}
							}
						},
					);
			},
		)
