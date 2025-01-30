import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/list/list.js';
import '../../../../base/browser/ui/list/listView.js';
import '../../../../base/common/async.js';
import '../../../../base/common/codicons.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import './baseDebugView.js';
import './debugIcons.js';
import './linkDetector.js';
import './variablesView.js';
import '../common/debug.js';
import '../common/debugModel.js';
define(
			de[3829],
			he([
				1, 0, 431, 539, 15, 14, 4, 92, 11, 10, 8, 49, 72, 5, 39, 93, 41, 32, 35,
				146, 60, 629, 352, 709, 1334, 112, 300,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*list*/,
				i /*listView*/,
				w /*async*/,
				E /*codicons*/,
				C /*nls*/,
				d /*menuEntryActionViewItem*/,
				m /*actions*/,
				r /*configuration*/,
				u /*contextkey*/,
				a /*contextView*/,
				h /*hover*/,
				c /*instantiation*/,
				n /*keybinding*/,
				g /*listService*/,
				p /*opener*/,
				o /*telemetry*/,
				f /*themeService*/,
				b /*viewPane*/,
				s /*views*/,
				l /*baseDebugView*/,
				y /*debugIcons*/,
				$ /*linkDetector*/,
				v /*variablesView*/,
				S /*debug*/,
				I /*debugModel*/,
) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jRc = e.$iRc = e.$hRc = e.$gRc = e.$fRc = e.$eRc = void 0);
				const P = 1024;
				let k = !1,
					L = !1,
					D = class extends b.$TMb {
						constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
							super(F, q, x, K, J, G, V, W, X, Y, ie),
								(this.m = H),
								(this.b = !1),
								(this.j = ne.createMenu(m.$XX.DebugWatchContext, J)),
								this.D(this.j),
								(this.a = new w.$Yh(() => {
									(this.b = !1), this.c.updateChildren();
								}, 50)),
								(this.f = S.$a5.bindTo(J)),
								(this.h = S.$K5.bindTo(J)),
								this.f.set(this.m.getModel().getWatchExpressions().length > 0),
								(this.g = S.$i5.bindTo(J));
						}
						W(F) {
							super.W(F),
								this.element.classList.add("debug-pane"),
								F.classList.add("debug-watch");
							const x = (0, l.$cIc)(F),
								H = this.Db.createInstance($.$7Hc),
								q = this.Db.createInstance(R, H);
							(this.c = this.Db.createInstance(
								g.$FMb,
								"WatchExpressions",
								x,
								new M(),
								[
									q,
									this.Db.createInstance(v.$xQc, H),
									this.Db.createInstance(v.$wQc, H),
								],
								this.Db.createInstance(A),
								{
									accessibilityProvider: new B(),
									identityProvider: { getId: (G) => G.getId() },
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (G) => {
											if (
												G !==
												this.m.getViewModel().getSelectedExpression()
													?.expression
											)
												return G.name;
										},
									},
									dnd: new U(this.m),
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
								this.c.setInput(this.m),
								S.$_4.bindTo(this.c.contextKeyService),
								this.D(
									v.$wQc.rendererOnVisualizationRange(
										this.m.getViewModel(),
										this.c,
									),
								),
								this.D(this.c.onContextMenu((G) => this.t(G))),
								this.D(this.c.onMouseDblClick((G) => this.s(G))),
								this.D(
									this.m.getModel().onDidChangeWatchExpressions(async (G) => {
										this.f.set(
											this.m.getModel().getWatchExpressions().length > 0,
										),
											this.isBodyVisible()
												? (G && !G.name && (L = !0),
													await this.c.updateChildren(),
													(L = !1),
													G instanceof I.$J3 && this.c.reveal(G))
												: (this.b = !0);
									}),
								),
								this.D(
									this.m.getViewModel().onDidFocusStackFrame(() => {
										if (!this.isBodyVisible()) {
											this.b = !0;
											return;
										}
										this.a.isScheduled() || this.a.schedule();
									}),
								),
								this.D(
									this.m.getViewModel().onWillUpdateViews(() => {
										k || this.c.updateChildren();
									}),
								),
								this.D(
									this.onDidChangeBodyVisibility((G) => {
										G && this.b && this.a.schedule();
									}),
								);
							let V;
							this.D(
								this.m.getViewModel().onDidSelectExpression((G) => {
									const K = G?.expression;
									K && this.c.hasNode(K)
										? ((V = this.c.options.horizontalScrolling),
											V && this.c.updateOptions({ horizontalScrolling: !1 }),
											K.name && this.c.rerender(K))
										: !K &&
											V !== void 0 &&
											(this.c.updateOptions({ horizontalScrolling: V }),
											(V = void 0));
								}),
							),
								this.D(
									this.m
										.getViewModel()
										.onDidEvaluateLazyExpression(async (G) => {
											G instanceof I.$K3 &&
												this.c.hasNode(G) &&
												(await this.c.updateChildren(G, !1, !0),
												await this.c.expand(G));
										}),
								);
						}
						X(F, x) {
							super.X(F, x), this.c.layout(F, x);
						}
						focus() {
							super.focus(), this.c.domFocus();
						}
						collapseAll() {
							this.c.collapseAll();
						}
						s(F) {
							if (F.browserEvent.target.className.indexOf("twistie") >= 0)
								return;
							const x = F.element,
								H = this.m.getViewModel().getSelectedExpression();
							(x instanceof I.$J3 && x !== H?.expression) ||
							(x instanceof I.$I3 && x.treeItem.canEdit)
								? this.m.getViewModel().setSelectedExpression(x, !1)
								: x || this.m.addWatchExpression();
						}
						t(F) {
							const x = F.element,
								H = this.c.getSelection();
							this.g.set(
								x instanceof I.$J3
									? "expression"
									: x instanceof I.$K3
										? "variable"
										: void 0,
							);
							const q = [],
								V =
									x instanceof I.$K3 ? x.presentationHint?.attributes : void 0;
							this.h.set(
								(!!V && V.indexOf("readOnly") >= 0) ||
									!!x?.presentationHint?.lazy,
							),
								(0, d.$Jyb)(this.j, { arg: x, shouldForwardArgs: !0 }, q),
								this.zb.showContextMenu({
									getAnchor: () => F.anchor,
									getActions: () => q,
									getActionsContext: () =>
										x && H.includes(x) ? H : x ? [x] : [],
								});
						}
					};
				(e.$eRc = D),
					(e.$eRc = D =
						Ne(
							[
								j(1, a.$Xxb),
								j(2, S.$75),
								j(3, n.$uZ),
								j(4, c.$Li),
								j(5, s.$K1),
								j(6, r.$gj),
								j(7, u.$6j),
								j(8, p.$7rb),
								j(9, f.$iP),
								j(10, o.$km),
								j(11, h.$Uyb),
								j(12, m.$YX),
							],
							D,
						));
				class M {
					getHeight(F) {
						return 22;
					}
					getTemplateId(F) {
						return F instanceof I.$J3
							? R.ID
							: F instanceof I.$I3
								? v.$wQc.ID
								: v.$xQc.ID;
					}
				}
				function N(z) {
					return typeof z.getConfigurationManager == "function";
				}
				class A extends l.$fIc {
					hasChildren(F) {
						return N(F) || F.hasChildren;
					}
					c(F) {
						if (N(F)) {
							const x = F,
								H = x.getModel().getWatchExpressions(),
								q = x.getViewModel();
							return Promise.all(
								H.map((V) =>
									V.name && !L
										? V.evaluate(
												q.focusedSession,
												q.focusedStackFrame,
												"watch",
											).then(() => V)
										: Promise.resolve(V),
								),
							);
						}
						return F.getChildren();
					}
				}
				let R = class extends l.$gIc {
					static {
						T = this;
					}
					static {
						this.ID = "watchexpression";
					}
					constructor(F, x, H, q, V, G, K) {
						super(q, V, G),
							(this.i = F),
							(this.j = x),
							(this.k = H),
							(this.l = K);
					}
					get templateId() {
						return T.ID;
					}
					renderElement(F, x, H) {
						H.elementDisposable.clear(),
							H.elementDisposable.add(
								this.l.onDidChangeConfiguration((q) => {
									q.affectsConfiguration("debug.showVariableTypes") &&
										super.d(F.element, F, H);
								}),
							),
							super.d(F.element, F, H);
					}
					f(F, x, H) {
						let q;
						x.type.textContent = "";
						const V = this.l.getValue("debug").showVariableTypes;
						V && F.type
							? ((q = typeof F.value == "string" ? `${F.name}: ` : F.name),
								(x.type.textContent = F.type + " ="))
							: (q = typeof F.value == "string" ? `${F.name} =` : F.name);
						let G;
						F.type
							? V
								? (G = `${F.name}`)
								: (G = F.type === F.value ? F.type : `${F.type}`)
							: (G = F.value),
							x.label.set(q, H, G),
							(0, l.$dIc)(
								x.elementDisposable,
								F,
								x.value,
								{
									showChanged: !0,
									maxValueLength: P,
									linkDetector: this.i,
									colorize: !0,
								},
								this.c,
							);
					}
					g(F, x) {
						return x
							? {
									initialValue: F.value,
									ariaLabel: (0, C.localize)(5752, null),
									onFinish: async (H, q) => {
										if (q && H) {
											const V = this.a.getViewModel().focusedStackFrame;
											V &&
												(F instanceof I.$K3 || F instanceof I.$J3) &&
												(await F.setExpression(H, V),
												this.a.getViewModel().updateViews());
										}
									},
								}
							: {
									initialValue: F.name ? F.name : "",
									ariaLabel: (0, C.localize)(5753, null),
									placeholder: (0, C.localize)(5754, null),
									onFinish: (H, q) => {
										q && H
											? (this.a.renameWatchExpression(F.getId(), H),
												(k = !0),
												this.a.getViewModel().updateViews(),
												(k = !1))
											: F.name || this.a.removeWatchExpressions(F.getId());
									},
								};
					}
					h(F, x) {
						const H = O(this.k, x),
							q = x,
							V = this.j.getMenuActions(m.$XX.DebugWatchContext, H, {
								arg: q,
								shouldForwardArgs: !1,
							}),
							G = [];
						(0, d.$Jyb)(V, { primary: G, secondary: [] }, "inline"),
							F.clear(),
							(F.context = q),
							F.push(G, { icon: !0, label: !1 });
					}
				};
				(e.$fRc = R),
					(e.$fRc =
						R =
						T =
							Ne(
								[
									j(1, m.$YX),
									j(2, u.$6j),
									j(3, S.$75),
									j(4, a.$Wxb),
									j(5, h.$Uyb),
									j(6, r.$gj),
								],
								R,
							));
				function O(z, F) {
					return z.createOverlay([
						[S.$j5.key, F.memoryReference !== void 0],
						[S.$i5.key, "expression"],
					]);
				}
				class B {
					getWidgetAriaLabel() {
						return (0, C.localize)(5755, null);
					}
					getAriaLabel(F) {
						return F instanceof I.$J3
							? (0, C.localize)(5756, null, F.name, F.value)
							: (0, C.localize)(5757, null, F.name, F.value);
					}
				}
				class U {
					constructor(F) {
						this.a = F;
					}
					onDragOver(F, x, H, q, V) {
						if (!(F instanceof i.$wib)) return !1;
						const G = F.elements;
						if (!(G.length > 0 && G[0] instanceof I.$J3)) return !1;
						let K;
						if (H === void 0)
							(K = t.ListDragOverEffectPosition.After), (H = -1);
						else
							switch (q) {
								case i.ListViewTargetSector.TOP:
								case i.ListViewTargetSector.CENTER_TOP:
									K = t.ListDragOverEffectPosition.Before;
									break;
								case i.ListViewTargetSector.CENTER_BOTTOM:
								case i.ListViewTargetSector.BOTTOM:
									K = t.ListDragOverEffectPosition.After;
									break;
							}
						return {
							accept: !0,
							effect: { type: t.ListDragOverEffectType.Move, position: K },
							feedback: [H],
						};
					}
					getDragURI(F) {
						return !(F instanceof I.$J3) ||
							F === this.a.getViewModel().getSelectedExpression()?.expression
							? null
							: F.getId();
					}
					getDragLabel(F) {
						if (F.length === 1) return F[0].name;
					}
					drop(F, x, H, q, V) {
						if (!(F instanceof i.$wib)) return;
						const G = F.elements[0];
						if (!(G instanceof I.$J3))
							throw new Error("Invalid dragged element");
						const K = this.a.getModel().getWatchExpressions(),
							J = K.indexOf(G);
						let W;
						if (x instanceof I.$J3) {
							switch (((W = K.indexOf(x)), q)) {
								case i.ListViewTargetSector.BOTTOM:
								case i.ListViewTargetSector.CENTER_BOTTOM:
									W++;
									break;
							}
							J < W && W--;
						} else W = K.length - 1;
						this.a.moveWatchExpression(G.getId(), W);
					}
					dispose() {}
				}
				(0, m.$4X)(
					class extends b.$WMb {
						constructor() {
							super({
								id: "watch.collapse",
								viewId: S.$S4,
								title: (0, C.localize)(5758, null),
								f1: !1,
								icon: E.$ak.collapseAll,
								precondition: S.$a5,
								menu: {
									id: m.$XX.ViewTitle,
									order: 30,
									group: "navigation",
									when: u.$Kj.equals("view", S.$S4),
								},
							});
						}
						runInView(F, x) {
							x.collapseAll();
						}
					},
				),
					(e.$gRc = "workbench.debug.viewlet.action.addWatchExpression"),
					(e.$hRc = (0, C.localize)(5759, null)),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: e.$gRc,
									title: e.$hRc,
									f1: !1,
									icon: y.$DKb,
									menu: {
										id: m.$XX.ViewTitle,
										group: "navigation",
										when: u.$Kj.equals("view", S.$S4),
									},
								});
							}
							run(F) {
								F.get(S.$75).addWatchExpression();
							}
						},
					),
					(e.$iRc = "workbench.debug.viewlet.action.removeAllWatchExpressions"),
					(e.$jRc = (0, C.localize)(5760, null)),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: e.$iRc,
									title: e.$jRc,
									f1: !1,
									icon: y.$BKb,
									precondition: S.$a5,
									menu: {
										id: m.$XX.ViewTitle,
										order: 20,
										group: "navigation",
										when: u.$Kj.equals("view", S.$S4),
									},
								});
							}
							run(F) {
								F.get(S.$75).removeWatchExpressions();
							}
						},
					);
			},
		),
		