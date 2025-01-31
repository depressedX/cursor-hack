import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/actions.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/browser/ui/actionbar/actionbar.js';
import './compositeBarActions.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/mouseEvent.js';
import '../../../platform/contextview/browser/contextView.js';
import '../../../base/browser/ui/widget.js';
import '../../../base/common/types.js';
import '../../../base/common/event.js';
import '../../common/views.js';
import '../dnd.js';
import '../../../base/browser/touch.js';
define(
			de[4007],
			he([1, 0, 4, 50, 5, 105, 1349, 7, 168, 49, 235, 28, 6, 60, 362, 159]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*instantiation*/,
 E /*actionbar*/,
 C /*compositeBarActions*/,
 d /*dom*/,
 m /*mouseEvent*/,
 r /*contextView*/,
 u /*widget*/,
 a /*types*/,
 h /*event*/,
 c /*views*/,
 n /*dnd*/,
 g /*touch*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Muc = e.$Luc = void 0);
				class p {
					constructor(s, l, y, $, v, S) {
						(this.a = s),
							(this.b = l),
							(this.d = y),
							(this.f = $),
							(this.g = v),
							(this.h = S);
					}
					drop(s, l, y, $) {
						const v = s.getData();
						if (v.type === "composite") {
							const S = this.a.getViewContainerById(v.id);
							this.a.getViewContainerLocation(S) === this.b
								? l && this.g(v.id, l, $)
								: this.a.moveViewContainerToLocation(
										S,
										this.b,
										this.j(l, $),
										"dnd",
									);
						}
						if (v.type === "view") {
							const S = this.a.getViewDescriptorById(v.id);
							if (S && S.canMoveView) {
								this.a.moveViewToLocation(S, this.b, "dnd");
								const I = this.a.getViewContainerByViewId(S.id);
								l && this.g(I.id, l, $),
									this.f(I.id, !0).then((T) => {
										T?.openView(S.id, !0);
									});
							}
						}
					}
					onDragEnter(s, l, y) {
						return this.k(s, l);
					}
					onDragOver(s, l, y) {
						return this.k(s, l);
					}
					j(s, l) {
						if (!s) return;
						const y = this.h(),
							$ =
								this.d === E.ActionsOrientation.HORIZONTAL
									? l?.horizontallyBefore
									: l?.verticallyBefore;
						return (
							y.filter((v) => v.visible).findIndex((v) => v.id === s) +
							($ ? 0 : 1)
						);
					}
					k(s, l) {
						const y = s.getData();
						if (y.type === "composite") {
							const $ = this.a.getViewContainerById(y.id);
							return this.a.getViewContainerLocation($) === this.b
								? y.id !== l
								: !0;
						} else {
							const $ = this.a.getViewDescriptorById(y.id);
							return !(!$ || !$.canMoveView);
						}
					}
				}
				e.$Luc = p;
				let o = class extends u.$Uhb {
					constructor(s, l, y, $, v) {
						super(),
							(this.w = l),
							(this.y = y),
							(this.J = $),
							(this.L = v),
							(this.a = this.D(new h.$re())),
							(this.onDidChange = this.a.event),
							(this.r = new f(s, l)),
							(this.s = []),
							(this.t = new Map()),
							this.P(this.r.visibleItems);
					}
					getCompositeBarItems() {
						return [...this.r.items];
					}
					setCompositeBarItems(s) {
						this.r.setItems(s), this.Q();
					}
					getPinnedComposites() {
						return this.r.pinnedItems;
					}
					getVisibleComposites() {
						return this.r.visibleItems;
					}
					create(s) {
						const l = s.appendChild((0, d.$)(".composite-bar"));
						(this.g = this.D(
							new E.$eib(l, {
								actionViewItemProvider: ($, v) => {
									if ($ instanceof C.$arc) return this.n;
									const S = this.r.findItem($.id);
									return (
										S &&
										this.y.createInstance(
											C.$crc,
											{
												...v,
												draggable: !0,
												colors: this.w.colors,
												icon: this.w.icon,
												hoverOptions: this.w.activityHoverOptions,
												compact: this.w.compact,
											},
											$,
											S.pinnedAction,
											S.toggleBadgeAction,
											(I) => this.w.getContextMenuActionsForComposite(I),
											() => this.getContextMenuActions(),
											this.w.dndHandler,
											this,
										)
									);
								},
								orientation: this.w.orientation,
								ariaLabel: (0, t.localize)(3045, null),
								ariaRole: "tablist",
								preventLoopNavigation: this.w.preventLoopNavigation,
								triggerKeys: { keyDown: !0 },
							}),
						)),
							this.D(
								(0, d.$0fb)(s, d.$$gb.CONTEXT_MENU, ($) =>
									this.S((0, d.getWindow)(s), $),
								),
							),
							this.D(g.$Qhb.addTarget(s)),
							this.D(
								(0, d.$0fb)(s, g.EventType.Contextmenu, ($) =>
									this.S((0, d.getWindow)(s), $),
								),
							);
						let y;
						return (
							this.D(
								n.$TSb.INSTANCE.registerTarget(s, {
									onDragOver: ($) => {
										const v = this.getVisibleComposites();
										if (
											!v.length ||
											($.eventData.target && (0, d.$Bgb)($.eventData.target, l))
										) {
											y = this.N(s, !1, !1, !0);
											return;
										}
										const S = this.M(l, $.eventData),
											I = S ? v[0] : v[v.length - 1],
											T = this.w.dndHandler.onDragOver(
												$.dragAndDropData,
												I.id,
												$.eventData,
											);
										(0, n.$USb)($.eventData.dataTransfer, "move", T),
											(y = this.N(s, T, S, !0));
									},
									onDragLeave: ($) => {
										y = this.N(s, !1, !1, !1);
									},
									onDragEnd: ($) => {
										y = this.N(s, !1, !1, !1);
									},
									onDrop: ($) => {
										const v = this.getVisibleComposites();
										if (v.length) {
											const S = this.M(l, $.eventData) ? v[0] : v[v.length - 1];
											this.w.dndHandler.drop(
												$.dragAndDropData,
												S.id,
												$.eventData,
												y,
											);
										}
										y = this.N(s, !1, !1, !1);
									},
								}),
							),
							l
						);
					}
					M(s, l) {
						const y = s.getBoundingClientRect(),
							$ = l.clientX,
							v = l.clientY;
						switch (this.w.orientation) {
							case E.ActionsOrientation.HORIZONTAL:
								return $ < y.left;
							case E.ActionsOrientation.VERTICAL:
								return v < y.top;
						}
					}
					N(s, l, y, $) {
						if (
							(s.classList.toggle("dragged-over", $),
							s.classList.toggle("dragged-over-head", l && y),
							s.classList.toggle("dragged-over-tail", l && !y),
							!!l)
						)
							return { verticallyBefore: y, horizontallyBefore: y };
					}
					focus(s) {
						this.g?.focus(s);
					}
					recomputeSizes() {
						this.P(this.r.visibleItems), this.Q();
					}
					layout(s) {
						(this.b = s),
							!(s.height === 0 || s.width === 0) &&
								(this.t.size === 0 && this.P(this.r.visibleItems), this.Q());
					}
					addComposite({ id: s, name: l, order: y, requestedIndex: $ }) {
						this.r.add(s, l, y, $) && (this.P([this.r.findItem(s)]), this.Q());
					}
					removeComposite(s) {
						this.isPinned(s) && this.unpin(s), this.r.remove(s) && this.Q();
					}
					hideComposite(s) {
						this.r.hide(s) && (this.O(s), this.Q());
					}
					activateComposite(s) {
						const l = this.r.activeItem;
						this.r.activate(s) &&
							(this.s.indexOf(s) === -1 ||
								(this.r.activeItem && !this.r.activeItem.pinned) ||
								(l && !l.pinned)) &&
							this.Q();
					}
					deactivateComposite(s) {
						const l = this.r.activeItem;
						this.r.deactivate() && l && !l.pinned && this.Q();
					}
					async pin(s, l) {
						this.r.setPinned(s, !0) &&
							(this.Q(),
							l && (await this.w.openComposite(s), this.activateComposite(s)));
					}
					unpin(s) {
						this.r.setPinned(s, !1) && (this.Q(), this.O(s));
					}
					areBadgesEnabled(s) {
						return this.L.getViewContainerBadgeEnablementState(s);
					}
					toggleBadgeEnablement(s) {
						this.L.setViewContainerBadgeEnablementState(
							s,
							!this.areBadgesEnabled(s),
						),
							this.Q();
						const l = this.r.findItem(s);
						l && (l.activityAction.activity = l.activityAction.activity);
					}
					O(s) {
						const l = this.w.getDefaultCompositeId();
						!this.r.activeItem ||
							this.r.activeItem.id !== s ||
							(this.deactivateComposite(s),
							l && l !== s && this.isPinned(l)
								? this.w.openComposite(l, !0)
								: this.w.openComposite(this.s.filter((y) => y !== s)[0]));
					}
					isPinned(s) {
						return this.r.findItem(s)?.pinned;
					}
					move(s, l, y) {
						if (y !== void 0) {
							const $ = this.r.items.findIndex((S) => S.id === s);
							let v = this.r.items.findIndex((S) => S.id === l);
							$ >= 0 &&
								v >= 0 &&
								(!y && $ > v && v++,
								y && $ < v && v--,
								v < this.r.items.length &&
									v >= 0 &&
									v !== $ &&
									this.r.move(this.r.items[$].id, this.r.items[v].id) &&
									setTimeout(() => this.Q(), 0));
						} else this.r.move(s, l) && setTimeout(() => this.Q(), 0);
					}
					getAction(s) {
						return this.r.findItem(s)?.activityAction;
					}
					P(s) {
						const l = this.w.compositeSize;
						if (l) s.forEach((y) => this.t.set(y.id, l));
						else {
							const y = this.g;
							if (y && this.b && this.b.height !== 0 && this.b.width !== 0) {
								const $ = y.viewItems.length;
								y.push(s.map((v) => v.activityAction)),
									s.map((v, S) =>
										this.t.set(
											v.id,
											this.w.orientation === E.ActionsOrientation.VERTICAL
												? y.getHeight($ + S)
												: y.getWidth($ + S),
										),
									),
									s.forEach(() => y.pull(y.viewItems.length - 1));
							}
						}
					}
					Q() {
						const s = this.g;
						if (!s || !this.b) return;
						let l = this.r.visibleItems
								.filter(
									(T) =>
										T.pinned ||
										(this.r.activeItem && this.r.activeItem.id === T.id),
								)
								.map((T) => T.id),
							y = l.length;
						const $ = l.length;
						let v = 0;
						const S =
							this.w.orientation === E.ActionsOrientation.VERTICAL
								? this.b.height
								: this.b.width;
						for (let T = 0; T < l.length; T++) {
							const P = this.t.get(l[T]);
							if (v + P > S) {
								y = T;
								break;
							}
							v += P;
						}
						for (
							$ > y && (l = l.slice(0, y)),
								this.r.activeItem &&
									l.every(
										(T) => !!this.r.activeItem && T !== this.r.activeItem.id,
									) &&
									((v += this.t.get(this.r.activeItem.id)),
									l.push(this.r.activeItem.id));
							v > S && l.length;
						) {
							const T = l.length > 1 ? l.splice(l.length - 2, 1)[0] : l.pop();
							v -= this.t.get(T);
						}
						for (
							$ > l.length && (v += this.w.overflowActionSize);
							v > S && l.length;
						) {
							const T =
								l.length > 1 && l[l.length - 1] === this.r.activeItem?.id
									? l.splice(l.length - 2, 1)[0]
									: l.pop();
							v -= this.t.get(T);
						}
						$ === l.length &&
							this.h &&
							(s.pull(s.length() - 1),
							this.h.dispose(),
							(this.h = void 0),
							this.n?.dispose(),
							(this.n = void 0));
						const I = [];
						this.s.forEach((T, P) => {
							l.includes(T) || I.push(P);
						}),
							I.reverse().forEach((T) => {
								s.pull(T), this.s.splice(T, 1);
							}),
							l.forEach((T, P) => {
								const k = this.s.indexOf(T);
								P !== k &&
									(k !== -1 && (s.pull(k), this.s.splice(k, 1)),
									s.push(this.r.findItem(T).activityAction, {
										label: !0,
										icon: this.w.icon,
										index: P,
									}),
									this.s.splice(P, 0, T));
							}),
							$ > l.length &&
								!this.h &&
								((this.h = this.D(
									this.y.createInstance(C.$arc, () => {
										this.n?.showMenu();
									}),
								)),
								(this.n = this.D(
									this.y.createInstance(
										C.$brc,
										this.h,
										() => this.R(),
										() => (this.r.activeItem ? this.r.activeItem.id : void 0),
										(T) => this.r.findItem(T)?.activity[0]?.badge,
										this.w.getOnCompositeClickAction,
										this.w.colors,
										this.w.activityHoverOptions,
									),
								)),
								s.push(this.h, { label: !1, icon: !0 })),
							this.a.fire();
					}
					R() {
						let s = this.r.visibleItems
							.filter((l) => l.pinned)
							.map((l) => l.id);
						return (
							this.r.activeItem &&
								!this.r.activeItem.pinned &&
								s.push(this.r.activeItem.id),
							(s = s.filter((l) => !this.s.includes(l))),
							this.r.visibleItems
								.filter((l) => s.includes(l.id))
								.map((l) => ({
									id: l.id,
									name: this.getAction(l.id)?.label || l.name,
								}))
						);
					}
					S(s, l) {
						d.$ahb.stop(l, !0);
						const y = new m.$2fb(s, l);
						this.J.showContextMenu({
							getAnchor: () => y,
							getActions: () => this.getContextMenuActions(l),
						});
					}
					getContextMenuActions(s) {
						const l = this.r.visibleItems.map(
							({ id: y, name: $, activityAction: v }) =>
								(0, i.$wj)({
									id: y,
									label: this.getAction(y).label || $ || y,
									checked: this.isPinned(y),
									enabled: v.enabled,
									run: () => {
										this.isPinned(y) ? this.unpin(y) : this.pin(y, !0);
									},
								}),
						);
						return this.w.fillExtraContextMenuActions(l, s), l;
					}
				};
				(e.$Muc = o),
					(e.$Muc = o = Ne([j(2, w.$Li), j(3, r.$Xxb), j(4, c.$K1)], o));
				class f {
					get items() {
						return this.a;
					}
					constructor(s, l) {
						(this.a = []), (this.b = l), this.setItems(s);
					}
					setItems(s) {
						(this.a = []),
							(this.a = s.map((l) =>
								this.d(l.id, l.name, l.order, l.pinned, l.visible),
							));
					}
					get visibleItems() {
						return this.items.filter((s) => s.visible);
					}
					get pinnedItems() {
						return this.items.filter((s) => s.visible && s.pinned);
					}
					d(s, l, y, $, v) {
						const S = this.b;
						return {
							id: s,
							name: l,
							pinned: $,
							order: y,
							visible: v,
							activity: [],
							get activityAction() {
								return S.getActivityAction(s);
							},
							get pinnedAction() {
								return S.getCompositePinnedAction(s);
							},
							get toggleBadgeAction() {
								return S.getCompositeBadgeAction(s);
							},
						};
					}
					add(s, l, y, $) {
						const v = this.findItem(s);
						if (v) {
							let S = !1;
							return (
								(v.name = l),
								(0, a.$ug)(y) || ((S = v.order !== y), (v.order = y)),
								v.visible || ((v.visible = !0), (S = !0)),
								S
							);
						} else {
							const S = this.d(s, l, y, !0, !0);
							if ((0, a.$ug)($))
								if ((0, a.$ug)(y)) this.items.push(S);
								else {
									let I = 0;
									for (
										;
										I < this.items.length &&
										typeof this.items[I].order == "number" &&
										this.items[I].order < y;
									)
										I++;
									this.items.splice(I, 0, S);
								}
							else {
								let I = 0,
									T = $;
								for (; T > 0 && I < this.items.length; )
									this.items[I++].visible && T--;
								this.items.splice(I, 0, S);
							}
							return !0;
						}
					}
					remove(s) {
						for (let l = 0; l < this.items.length; l++)
							if (this.items[l].id === s) return this.items.splice(l, 1), !0;
						return !1;
					}
					hide(s) {
						for (const l of this.items)
							if (l.id === s) return l.visible ? ((l.visible = !1), !0) : !1;
						return !1;
					}
					move(s, l) {
						const y = this.f(s),
							$ = this.f(l);
						if (y === -1 || $ === -1) return !1;
						const v = this.items.splice(y, 1)[0];
						return this.items.splice($, 0, v), (v.pinned = !0), !0;
					}
					setPinned(s, l) {
						for (const y of this.items)
							if (y.id === s) return y.pinned !== l ? ((y.pinned = l), !0) : !1;
						return !1;
					}
					activate(s) {
						if (!this.activeItem || this.activeItem.id !== s) {
							this.activeItem && this.deactivate();
							for (const l of this.items)
								if (l.id === s)
									return (
										(this.activeItem = l),
										this.activeItem.activityAction.activate(),
										!0
									);
						}
						return !1;
					}
					deactivate() {
						return this.activeItem
							? (this.activeItem.activityAction.deactivate(),
								(this.activeItem = void 0),
								!0)
							: !1;
					}
					findItem(s) {
						return this.items.filter((l) => l.id === s)[0];
					}
					f(s) {
						for (let l = 0; l < this.items.length; l++)
							if (this.items[l].id === s) return l;
						return -1;
					}
				}
			},
		)
