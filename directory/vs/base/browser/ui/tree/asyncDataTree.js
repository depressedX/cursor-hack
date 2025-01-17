import '../../../../../require.js';
import '../../../../../exports.js';
import '../list/listView.js';
import './abstractTree.js';
import './indexTreeModel.js';
import './objectTree.js';
import './tree.js';
import '../../../common/async.js';
import '../../../common/codicons.js';
import '../../../common/themables.js';
import '../../../common/errors.js';
import '../../../common/event.js';
import '../../../common/iterator.js';
import '../../../common/lifecycle.js';
import '../../../common/types.js';
define(
			de[1170],
			he([1, 0, 539, 411, 1165, 1169, 264, 15, 14, 26, 29, 6, 103, 3, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gpb = e.$Fpb = void 0);
				function g(A) {
					return {
						...A,
						children: [],
						refreshPromise: void 0,
						stale: !0,
						slow: !1,
						forceExpanded: !1,
					};
				}
				function p(A, R) {
					return R.parent ? (R.parent === A ? !0 : p(A, R.parent)) : !1;
				}
				function o(A, R) {
					return A === R || p(A, R) || p(R, A);
				}
				class f {
					get element() {
						return this.a.element.element;
					}
					get children() {
						return this.a.children.map((R) => new f(R));
					}
					get depth() {
						return this.a.depth;
					}
					get visibleChildrenCount() {
						return this.a.visibleChildrenCount;
					}
					get visibleChildIndex() {
						return this.a.visibleChildIndex;
					}
					get collapsible() {
						return this.a.collapsible;
					}
					get collapsed() {
						return this.a.collapsed;
					}
					get visible() {
						return this.a.visible;
					}
					get filterData() {
						return this.a.filterData;
					}
					constructor(R) {
						this.a = R;
					}
				}
				class b {
					constructor(R, O, B) {
						(this.b = R),
							(this.d = O),
							(this.onDidChangeTwistieState = B),
							(this.a = new Map()),
							(this.templateId = R.templateId);
					}
					renderTemplate(R) {
						return { templateData: this.b.renderTemplate(R) };
					}
					renderElement(R, O, B, U) {
						this.b.renderElement(this.d.map(R), O, B.templateData, U);
					}
					renderTwistie(R, O) {
						return R.slow
							? (O.classList.add(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!0)
							: (O.classList.remove(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!1);
					}
					disposeElement(R, O, B, U) {
						this.b.disposeElement?.(this.d.map(R), O, B.templateData, U);
					}
					disposeTemplate(R) {
						this.b.disposeTemplate(R.templateData);
					}
					dispose() {
						this.a.clear();
					}
				}
				function s(A) {
					return {
						browserEvent: A.browserEvent,
						elements: A.elements.map((R) => R.element),
					};
				}
				function l(A) {
					return {
						browserEvent: A.browserEvent,
						element: A.element && A.element.element,
						target: A.target,
					};
				}
				function y(A) {
					return {
						browserEvent: A.browserEvent,
						element: A.element && A.element.element,
						anchor: A.anchor,
						isStickyScroll: A.isStickyScroll,
					};
				}
				class $ extends t.$wib {
					set context(R) {
						this.f.context = R;
					}
					get context() {
						return this.f.context;
					}
					constructor(R) {
						super(R.elements.map((O) => O.element)), (this.f = R);
					}
				}
				function v(A) {
					return A instanceof t.$wib ? new $(A) : A;
				}
				class S {
					constructor(R) {
						this.a = R;
					}
					getDragURI(R) {
						return this.a.getDragURI(R.element);
					}
					getDragLabel(R, O) {
						if (this.a.getDragLabel)
							return this.a.getDragLabel(
								R.map((B) => B.element),
								O,
							);
					}
					onDragStart(R, O) {
						this.a.onDragStart?.(v(R), O);
					}
					onDragOver(R, O, B, U, z, F = !0) {
						return this.a.onDragOver(v(R), O && O.element, B, U, z);
					}
					drop(R, O, B, U, z) {
						this.a.drop(v(R), O && O.element, B, U, z);
					}
					onDragEnd(R) {
						this.a.onDragEnd?.(R);
					}
					dispose() {
						this.a.dispose();
					}
				}
				function I(A) {
					return (
						A && {
							...A,
							collapseByDefault: !0,
							identityProvider: A.identityProvider && {
								getId(R) {
									return A.identityProvider.getId(R.element);
								},
							},
							dnd: A.dnd && new S(A.dnd),
							multipleSelectionController: A.multipleSelectionController && {
								isSelectionSingleChangeEvent(R) {
									return A.multipleSelectionController.isSelectionSingleChangeEvent(
										{ ...R, element: R.element },
									);
								},
								isSelectionRangeChangeEvent(R) {
									return A.multipleSelectionController.isSelectionRangeChangeEvent(
										{ ...R, element: R.element },
									);
								},
							},
							accessibilityProvider: A.accessibilityProvider && {
								...A.accessibilityProvider,
								getPosInSet: void 0,
								getSetSize: void 0,
								getRole: A.accessibilityProvider.getRole
									? (R) => A.accessibilityProvider.getRole(R.element)
									: () => "treeitem",
								isChecked: A.accessibilityProvider.isChecked
									? (R) => !!A.accessibilityProvider?.isChecked(R.element)
									: void 0,
								getAriaLabel(R) {
									return A.accessibilityProvider.getAriaLabel(R.element);
								},
								getWidgetAriaLabel() {
									return A.accessibilityProvider.getWidgetAriaLabel();
								},
								getWidgetRole: A.accessibilityProvider.getWidgetRole
									? () => A.accessibilityProvider.getWidgetRole()
									: () => "tree",
								getAriaLevel:
									A.accessibilityProvider.getAriaLevel &&
									((R) => A.accessibilityProvider.getAriaLevel(R.element)),
								getActiveDescendantId:
									A.accessibilityProvider.getActiveDescendantId &&
									((R) =>
										A.accessibilityProvider.getActiveDescendantId(R.element)),
							},
							filter: A.filter && {
								filter(R, O) {
									return A.filter.filter(R.element, O);
								},
							},
							keyboardNavigationLabelProvider:
								A.keyboardNavigationLabelProvider && {
									...A.keyboardNavigationLabelProvider,
									getKeyboardNavigationLabel(R) {
										return A.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(
											R.element,
										);
									},
								},
							sorter: void 0,
							expandOnlyOnTwistieClick:
								typeof A.expandOnlyOnTwistieClick > "u"
									? void 0
									: typeof A.expandOnlyOnTwistieClick != "function"
										? A.expandOnlyOnTwistieClick
										: (R) => A.expandOnlyOnTwistieClick(R.element),
							defaultFindVisibility: (R) =>
								R.hasChildren && R.stale
									? C.TreeVisibility.Visible
									: typeof A.defaultFindVisibility == "number"
										? A.defaultFindVisibility
										: typeof A.defaultFindVisibility > "u"
											? C.TreeVisibility.Recurse
											: A.defaultFindVisibility(R.element),
						}
					);
				}
				function T(A, R) {
					R(A), A.children.forEach((O) => T(O, R));
				}
				class P {
					get onDidScroll() {
						return this.b.onDidScroll;
					}
					get onDidChangeFocus() {
						return a.Event.map(this.b.onDidChangeFocus, s);
					}
					get onDidChangeSelection() {
						return a.Event.map(this.b.onDidChangeSelection, s);
					}
					get onKeyDown() {
						return this.b.onKeyDown;
					}
					get onMouseClick() {
						return a.Event.map(this.b.onMouseClick, l);
					}
					get onMouseDblClick() {
						return a.Event.map(this.b.onMouseDblClick, l);
					}
					get onContextMenu() {
						return a.Event.map(this.b.onContextMenu, y);
					}
					get onTap() {
						return a.Event.map(this.b.onTap, l);
					}
					get onPointer() {
						return a.Event.map(this.b.onPointer, l);
					}
					get onDidFocus() {
						return this.b.onDidFocus;
					}
					get onDidBlur() {
						return this.b.onDidBlur;
					}
					get onDidChangeModel() {
						return this.b.onDidChangeModel;
					}
					get onDidChangeCollapseState() {
						return this.b.onDidChangeCollapseState;
					}
					get onDidUpdateOptions() {
						return this.b.onDidUpdateOptions;
					}
					get onDidChangeFindOpenState() {
						return this.b.onDidChangeFindOpenState;
					}
					get onDidChangeStickyScrollFocused() {
						return this.b.onDidChangeStickyScrollFocused;
					}
					get findMode() {
						return this.b.findMode;
					}
					set findMode(R) {
						this.b.findMode = R;
					}
					get findMatchType() {
						return this.b.findMatchType;
					}
					set findMatchType(R) {
						this.b.findMatchType = R;
					}
					get expandOnlyOnTwistieClick() {
						if (typeof this.b.expandOnlyOnTwistieClick == "boolean")
							return this.b.expandOnlyOnTwistieClick;
						const R = this.b.expandOnlyOnTwistieClick;
						return (O) =>
							R(this.f.get(O === this.d.element ? null : O) || null);
					}
					get onDidDispose() {
						return this.b.onDidDispose;
					}
					constructor(R, O, B, U, z, F = {}) {
						(this.w = R),
							(this.y = z),
							(this.f = new Map()),
							(this.j = new Map()),
							(this.k = new Map()),
							(this.p = new a.$re()),
							(this.q = new a.$re()),
							(this.t = new C.$npb((x) => new f(x))),
							(this.u = new c.$Zc()),
							(this.m = F.identityProvider),
							(this.o =
								typeof F.autoExpandSingleChildren > "u"
									? !1
									: F.autoExpandSingleChildren),
							(this.g = F.sorter),
							(this.h = (x) =>
								F.collapseByDefault
									? F.collapseByDefault(x)
										? C.ObjectTreeElementCollapseState.PreserveOrCollapsed
										: C.ObjectTreeElementCollapseState.PreserveOrExpanded
									: void 0),
							(this.b = this.z(R, O, B, U, F)),
							(this.onDidChangeFindMode = this.b.onDidChangeFindMode),
							(this.onDidChangeFindMatchType = this.b.onDidChangeFindMatchType),
							(this.d = g({
								element: void 0,
								parent: null,
								hasChildren: !0,
								defaultCollapseState: void 0,
							})),
							this.m && (this.d = { ...this.d, id: null }),
							this.f.set(null, this.d),
							this.b.onDidChangeCollapseState(this.H, this, this.u);
					}
					z(R, O, B, U, z) {
						const F = new i.$rpb(B),
							x = U.map((q) => new b(q, this.t, this.q.event)),
							H = I(z) || {};
						return new E.$Dpb(R, O, F, x, H);
					}
					updateOptions(R = {}) {
						this.b.updateOptions(R);
					}
					get options() {
						return this.b.options;
					}
					getHTMLElement() {
						return this.b.getHTMLElement();
					}
					get contentHeight() {
						return this.b.contentHeight;
					}
					get contentWidth() {
						return this.b.contentWidth;
					}
					get onDidChangeContentHeight() {
						return this.b.onDidChangeContentHeight;
					}
					get onDidChangeContentWidth() {
						return this.b.onDidChangeContentWidth;
					}
					get scrollTop() {
						return this.b.scrollTop;
					}
					set scrollTop(R) {
						this.b.scrollTop = R;
					}
					get scrollLeft() {
						return this.b.scrollLeft;
					}
					set scrollLeft(R) {
						this.b.scrollLeft = R;
					}
					get scrollHeight() {
						return this.b.scrollHeight;
					}
					get renderHeight() {
						return this.b.renderHeight;
					}
					get lastVisibleElement() {
						return this.b.lastVisibleElement.element;
					}
					get ariaLabel() {
						return this.b.ariaLabel;
					}
					set ariaLabel(R) {
						this.b.ariaLabel = R;
					}
					domFocus() {
						this.b.domFocus();
					}
					layout(R, O) {
						this.b.layout(R, O);
					}
					style(R) {
						this.b.style(R);
					}
					getInput() {
						return this.d.element;
					}
					async setInput(R, O) {
						this.k.forEach((U) => U.cancel()),
							this.k.clear(),
							(this.d.element = R);
						const B = O && { viewState: O, focus: [], selection: [] };
						await this.A(R, !0, !1, B),
							B && (this.b.setFocus(B.focus), this.b.setSelection(B.selection)),
							O &&
								typeof O.scrollTop == "number" &&
								(this.scrollTop = O.scrollTop);
					}
					async updateChildren(R = this.d.element, O = !0, B = !1, U) {
						await this.A(R, O, B, void 0, U);
					}
					async A(R = this.d.element, O = !0, B = !1, U, z) {
						if (typeof this.d.element > "u")
							throw new C.$mpb(this.w, "Tree input not set");
						this.d.refreshPromise &&
							(await this.d.refreshPromise,
							await a.Event.toPromise(this.p.event));
						const F = this.B(R);
						if ((await this.C(F, O, U, z), B))
							try {
								this.b.rerender(F);
							} catch {}
					}
					resort(R = this.d.element, O = !0) {
						this.b.resort(this.B(R), O);
					}
					hasNode(R) {
						return R === this.d.element || this.f.has(R);
					}
					rerender(R) {
						if (R === void 0 || R === this.d.element) {
							this.b.rerender();
							return;
						}
						const O = this.B(R);
						this.b.rerender(O);
					}
					updateElementHeight(R, O) {
						const B = this.B(R);
						this.b.updateElementHeight(B, O);
					}
					updateWidth(R) {
						const O = this.B(R);
						this.b.updateWidth(O);
					}
					getNode(R = this.d.element) {
						const O = this.B(R),
							B = this.b.getNode(O === this.d ? null : O);
						return this.t.map(B);
					}
					collapse(R, O = !1) {
						const B = this.B(R);
						return this.b.collapse(B === this.d ? null : B, O);
					}
					async expand(R, O = !1) {
						if (typeof this.d.element > "u")
							throw new C.$mpb(this.w, "Tree input not set");
						this.d.refreshPromise &&
							(await this.d.refreshPromise,
							await a.Event.toPromise(this.p.event));
						const B = this.B(R);
						if (
							(this.b.hasElement(B) && !this.b.isCollapsible(B)) ||
							(B.refreshPromise &&
								(await this.d.refreshPromise,
								await a.Event.toPromise(this.p.event)),
							B !== this.d && !B.refreshPromise && !this.b.isCollapsed(B))
						)
							return !1;
						const U = this.b.expand(B === this.d ? null : B, O);
						return (
							B.refreshPromise &&
								(await this.d.refreshPromise,
								await a.Event.toPromise(this.p.event)),
							U
						);
					}
					toggleCollapsed(R, O = !1) {
						return this.b.toggleCollapsed(this.B(R), O);
					}
					expandAll() {
						this.b.expandAll();
					}
					async expandTo(R) {
						if (!this.y.getParent)
							throw new Error(
								"Can't expand to element without getParent method",
							);
						const O = [];
						for (; !this.hasNode(R); )
							(R = this.y.getParent(R)), R !== this.d.element && O.push(R);
						for (const B of h.Iterable.reverse(O)) await this.expand(B);
						this.b.expandTo(this.B(R));
					}
					collapseAll() {
						this.b.collapseAll();
					}
					isCollapsible(R) {
						return this.b.isCollapsible(this.B(R));
					}
					isCollapsed(R) {
						return this.b.isCollapsed(this.B(R));
					}
					triggerTypeNavigation() {
						this.b.triggerTypeNavigation();
					}
					openFind() {
						this.b.openFind();
					}
					closeFind() {
						this.b.closeFind();
					}
					refilter() {
						this.b.refilter();
					}
					setAnchor(R) {
						this.b.setAnchor(typeof R > "u" ? void 0 : this.B(R));
					}
					getAnchor() {
						return this.b.getAnchor()?.element;
					}
					setSelection(R, O) {
						const B = R.map((U) => this.B(U));
						this.b.setSelection(B, O);
					}
					getSelection() {
						return this.b.getSelection().map((O) => O.element);
					}
					setFocus(R, O) {
						const B = R.map((U) => this.B(U));
						this.b.setFocus(B, O);
					}
					focusNext(R = 1, O = !1, B) {
						this.b.focusNext(R, O, B);
					}
					focusPrevious(R = 1, O = !1, B) {
						this.b.focusPrevious(R, O, B);
					}
					focusNextPage(R) {
						return this.b.focusNextPage(R);
					}
					focusPreviousPage(R) {
						return this.b.focusPreviousPage(R);
					}
					focusLast(R) {
						this.b.focusLast(R);
					}
					focusFirst(R) {
						this.b.focusFirst(R);
					}
					getFocus() {
						return this.b.getFocus().map((O) => O.element);
					}
					getStickyScrollFocus() {
						return this.b.getStickyScrollFocus().map((O) => O.element);
					}
					getFocusedPart() {
						return this.b.getFocusedPart();
					}
					reveal(R, O) {
						this.b.reveal(this.B(R), O);
					}
					getRelativeTop(R) {
						return this.b.getRelativeTop(this.B(R));
					}
					getParentElement(R) {
						const O = this.b.getParentElement(this.B(R));
						return O && O.element;
					}
					getFirstElementChild(R = this.d.element) {
						const O = this.B(R),
							B = this.b.getFirstElementChild(O === this.d ? null : O);
						return B && B.element;
					}
					B(R) {
						const O = this.f.get(R === this.d.element ? null : R);
						if (!O) throw new C.$mpb(this.w, `Data tree node not found: ${R}`);
						return O;
					}
					async C(R, O, B, U) {
						await this.D(R, O, B), !this.u.isDisposed && this.J(R, B, U);
					}
					async D(R, O, B) {
						let U;
						if (
							(this.j.forEach((z, F) => {
								!U && o(F, R) && (U = z.then(() => this.D(R, O, B)));
							}),
							U)
						)
							return U;
						if (R !== this.d && this.b.getNode(R).collapsed) {
							(R.hasChildren = !!this.y.hasChildren(R.element)),
								(R.stale = !0),
								this.I(R, [], O, B);
							return;
						}
						return this.E(R, O, B);
					}
					async E(R, O, B) {
						let U;
						(R.refreshPromise = new Promise((z) => (U = z))),
							this.j.set(R, R.refreshPromise),
							R.refreshPromise.finally(() => {
								(R.refreshPromise = void 0), this.j.delete(R);
							});
						try {
							const z = await this.F(R, O, B);
							(R.stale = !1),
								await d.Promises.settled(z.map((F) => this.E(F, O, B)));
						} finally {
							U();
						}
					}
					async F(R, O, B) {
						R.hasChildren = !!this.y.hasChildren(R.element);
						let U;
						if (!R.hasChildren) U = Promise.resolve(h.Iterable.empty());
						else {
							const z = this.G(R);
							if ((0, n.$qg)(z)) U = Promise.resolve(z);
							else {
								const F = (0, d.$Nh)(800);
								F.then(
									() => {
										(R.slow = !0), this.q.fire(R);
									},
									(x) => null,
								),
									(U = z.finally(() => F.cancel()));
							}
						}
						try {
							const z = await U;
							return this.I(R, z, O, B);
						} catch (z) {
							if (
								(R !== this.d && this.b.hasElement(R) && this.b.collapse(R),
								(0, u.$8)(z))
							)
								return [];
							throw z;
						} finally {
							R.slow && ((R.slow = !1), this.q.fire(R));
						}
					}
					G(R) {
						let O = this.k.get(R);
						if (O) return O;
						const B = this.y.getChildren(R.element);
						return (0, n.$qg)(B)
							? this.L(B)
							: ((O = (0, d.$zh)(async () => this.L(await B))),
								this.k.set(R, O),
								O.finally(() => {
									this.k.delete(R);
								}));
					}
					H({ node: R, deep: O }) {
						R.element !== null &&
							!R.collapsed &&
							R.element.stale &&
							(O
								? this.collapse(R.element.element)
								: this.C(R.element, !1).catch(u.$4));
					}
					I(R, O, B, U) {
						const z = [...O];
						if (R.children.length === 0 && z.length === 0) return [];
						const F = new Map(),
							x = new Map();
						for (const V of R.children)
							F.set(V.element, V),
								this.m &&
									x.set(V.id, {
										node: V,
										collapsed: this.b.hasElement(V) && this.b.isCollapsed(V),
									});
						const H = [],
							q = z.map((V) => {
								const G = !!this.y.hasChildren(V);
								if (!this.m) {
									const X = g({
										element: V,
										parent: R,
										hasChildren: G,
										defaultCollapseState: this.h(V),
									});
									return (
										G &&
											X.defaultCollapseState ===
												C.ObjectTreeElementCollapseState.PreserveOrExpanded &&
											H.push(X),
										X
									);
								}
								const K = this.m.getId(V).toString(),
									J = x.get(K);
								if (J) {
									const X = J.node;
									return (
										F.delete(X.element),
										this.f.delete(X.element),
										this.f.set(V, X),
										(X.element = V),
										(X.hasChildren = G),
										B
											? J.collapsed
												? (X.children.forEach((Y) =>
														T(Y, (ie) => this.f.delete(ie.element)),
													),
													X.children.splice(0, X.children.length),
													(X.stale = !0))
												: H.push(X)
											: G && !J.collapsed && H.push(X),
										X
									);
								}
								const W = g({
									element: V,
									parent: R,
									id: K,
									hasChildren: G,
									defaultCollapseState: this.h(V),
								});
								return (
									U &&
										U.viewState.focus &&
										U.viewState.focus.indexOf(K) > -1 &&
										U.focus.push(W),
									U &&
										U.viewState.selection &&
										U.viewState.selection.indexOf(K) > -1 &&
										U.selection.push(W),
									((U &&
										U.viewState.expanded &&
										U.viewState.expanded.indexOf(K) > -1) ||
										(G &&
											W.defaultCollapseState ===
												C.ObjectTreeElementCollapseState.PreserveOrExpanded)) &&
										H.push(W),
									W
								);
							});
						for (const V of F.values()) T(V, (G) => this.f.delete(G.element));
						for (const V of q) this.f.set(V.element, V);
						return (
							R.children.splice(0, R.children.length, ...q),
							R !== this.d &&
								this.o &&
								q.length === 1 &&
								H.length === 0 &&
								((q[0].forceExpanded = !0), H.push(q[0])),
							H
						);
					}
					J(R, O, B) {
						const U = R.children.map((F) => this.K(F, O)),
							z = B && {
								...B,
								diffIdentityProvider: B.diffIdentityProvider && {
									getId(F) {
										return B.diffIdentityProvider.getId(F.element);
									},
								},
							};
						this.b.setChildren(R === this.d ? null : R, U, z),
							R !== this.d && this.b.setCollapsible(R, R.hasChildren),
							this.p.fire();
					}
					K(R, O) {
						if (R.stale)
							return { element: R, collapsible: R.hasChildren, collapsed: !0 };
						let B;
						return (
							O &&
							O.viewState.expanded &&
							R.id &&
							O.viewState.expanded.indexOf(R.id) > -1
								? (B = !1)
								: R.forceExpanded
									? ((B = !1), (R.forceExpanded = !1))
									: (B = R.defaultCollapseState),
							{
								element: R,
								children: R.hasChildren
									? h.Iterable.map(R.children, (U) => this.K(U, O))
									: [],
								collapsible: R.hasChildren,
								collapsed: B,
							}
						);
					}
					L(R) {
						return this.g && (R = [...R].sort(this.g.compare.bind(this.g))), R;
					}
					getViewState() {
						if (!this.m)
							throw new C.$mpb(
								this.w,
								"Can't get tree view state without an identity provider",
							);
						const R = (x) => this.m.getId(x).toString(),
							O = this.getFocus().map(R),
							B = this.getSelection().map(R),
							U = [],
							z = this.b.getNode(),
							F = [z];
						for (; F.length > 0; ) {
							const x = F.pop();
							x !== z &&
								x.collapsible &&
								!x.collapsed &&
								U.push(R(x.element.element)),
								F.push(...x.children);
						}
						return {
							focus: O,
							selection: B,
							expanded: U,
							scrollTop: this.scrollTop,
						};
					}
					dispose() {
						this.u.dispose(), this.b.dispose();
					}
				}
				e.$Fpb = P;
				class k {
					get element() {
						return {
							elements: this.a.element.elements.map((R) => R.element),
							incompressible: this.a.element.incompressible,
						};
					}
					get children() {
						return this.a.children.map((R) => new k(R));
					}
					get depth() {
						return this.a.depth;
					}
					get visibleChildrenCount() {
						return this.a.visibleChildrenCount;
					}
					get visibleChildIndex() {
						return this.a.visibleChildIndex;
					}
					get collapsible() {
						return this.a.collapsible;
					}
					get collapsed() {
						return this.a.collapsed;
					}
					get visible() {
						return this.a.visible;
					}
					get filterData() {
						return this.a.filterData;
					}
					constructor(R) {
						this.a = R;
					}
				}
				class L {
					constructor(R, O, B, U) {
						(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.onDidChangeTwistieState = U),
							(this.a = new Map()),
							(this.b = []),
							(this.templateId = R.templateId);
					}
					renderTemplate(R) {
						return { templateData: this.d.renderTemplate(R) };
					}
					renderElement(R, O, B, U) {
						this.d.renderElement(this.f.map(R), O, B.templateData, U);
					}
					renderCompressedElements(R, O, B, U) {
						this.d.renderCompressedElements(
							this.g().map(R),
							O,
							B.templateData,
							U,
						);
					}
					renderTwistie(R, O) {
						return R.slow
							? (O.classList.add(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!0)
							: (O.classList.remove(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!1);
					}
					disposeElement(R, O, B, U) {
						this.d.disposeElement?.(this.f.map(R), O, B.templateData, U);
					}
					disposeCompressedElements(R, O, B, U) {
						this.d.disposeCompressedElements?.(
							this.g().map(R),
							O,
							B.templateData,
							U,
						);
					}
					disposeTemplate(R) {
						this.d.disposeTemplate(R.templateData);
					}
					dispose() {
						this.a.clear(), (this.b = (0, c.$Vc)(this.b));
					}
				}
				function D(A) {
					const R = A && I(A);
					return (
						R && {
							...R,
							keyboardNavigationLabelProvider:
								R.keyboardNavigationLabelProvider && {
									...R.keyboardNavigationLabelProvider,
									getCompressedNodeKeyboardNavigationLabel(O) {
										return A.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(
											O.map((B) => B.element),
										);
									},
								},
						}
					);
				}
				class M extends P {
					constructor(R, O, B, U, z, F, x = {}) {
						super(R, O, B, z, F, x),
							(this.x = U),
							(this.s = new C.$npb((H) => new k(H))),
							(this.v = x.filter);
					}
					z(R, O, B, U, z) {
						const F = new i.$rpb(B),
							x = U.map((q) => new L(q, this.t, () => this.s, this.q.event)),
							H = D(z) || {};
						return new E.$Epb(R, O, F, x, H);
					}
					K(R, O) {
						return {
							incompressible: this.x.isIncompressible(R.element),
							...super.K(R, O),
						};
					}
					updateOptions(R = {}) {
						this.b.updateOptions(R);
					}
					getViewState() {
						if (!this.m)
							throw new C.$mpb(
								this.w,
								"Can't get tree view state without an identity provider",
							);
						const R = (x) => this.m.getId(x).toString(),
							O = this.getFocus().map(R),
							B = this.getSelection().map(R),
							U = [],
							z = this.b.getCompressedTreeNode(),
							F = [z];
						for (; F.length > 0; ) {
							const x = F.pop();
							if (x !== z && x.collapsible && !x.collapsed)
								for (const H of x.element.elements) U.push(R(H.element));
							F.push(...x.children);
						}
						return {
							focus: O,
							selection: B,
							expanded: U,
							scrollTop: this.scrollTop,
						};
					}
					J(R, O, B) {
						if (!this.m) return super.J(R, O);
						const U = (J) => this.m.getId(J).toString(),
							z = (J) => {
								const W = new Set();
								for (const X of J) {
									const Y = this.b.getCompressedTreeNode(
										X === this.d ? null : X,
									);
									if (Y.element)
										for (const ie of Y.element.elements) W.add(U(ie.element));
								}
								return W;
							},
							F = z(this.b.getSelection()),
							x = z(this.b.getFocus());
						super.J(R, O, B);
						const H = this.getSelection();
						let q = !1;
						const V = this.getFocus();
						let G = !1;
						const K = (J) => {
							const W = J.element;
							if (W)
								for (let X = 0; X < W.elements.length; X++) {
									const Y = U(W.elements[X].element),
										ie = W.elements[W.elements.length - 1].element;
									F.has(Y) && H.indexOf(ie) === -1 && (H.push(ie), (q = !0)),
										x.has(Y) && V.indexOf(ie) === -1 && (V.push(ie), (G = !0));
								}
							J.children.forEach(K);
						};
						K(this.b.getCompressedTreeNode(R === this.d ? null : R)),
							q && this.setSelection(H),
							G && this.setFocus(V);
					}
					L(R) {
						return (
							this.v &&
								(R = h.Iterable.filter(R, (O) => {
									const B = this.v.filter(O, C.TreeVisibility.Visible),
										U = N(B);
									if (U === C.TreeVisibility.Recurse)
										throw new Error(
											"Recursive tree visibility not supported in async data compressed trees",
										);
									return U === C.TreeVisibility.Visible;
								})),
							super.L(R)
						);
					}
				}
				e.$Gpb = M;
				function N(A) {
					return typeof A == "boolean"
						? A
							? C.TreeVisibility.Visible
							: C.TreeVisibility.Hidden
						: (0, w.$opb)(A)
							? (0, w.$ppb)(A.visibility)
							: (0, w.$ppb)(A);
				}
			},
		),
		