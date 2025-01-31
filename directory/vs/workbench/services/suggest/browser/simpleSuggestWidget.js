import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../base/browser/ui/resizable/resizable.js';
import './simpleSuggestWidgetRenderer.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/numbers.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/contrib/suggest/browser/suggestWidgetStatus.js';
import '../../../../css!vs/workbench/services/suggest/browser/media/suggest.js';
define(
			de[3654],
			he([1, 0, 7, 278, 930, 3653, 15, 6, 3, 201, 4, 5, 1674, 2540]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*listWidget*/,
 w /*resizable*/,
 E /*simpleSuggestWidgetRenderer*/,
 C /*async*/,
 d /*event*/,
 m /*lifecycle*/,
 r /*numbers*/,
 u /*nls*/,
 a /*instantiation*/,
 h /*suggestWidgetStatus*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cVc = void 0),
					(t = mt(t));
				const c = t.$;
				var n;
				(function (o) {
					(o[(o.Hidden = 0)] = "Hidden"),
						(o[(o.Loading = 1)] = "Loading"),
						(o[(o.Empty = 2)] = "Empty"),
						(o[(o.Open = 3)] = "Open"),
						(o[(o.Frozen = 4)] = "Frozen"),
						(o[(o.Details = 5)] = "Details");
				})(n || (n = {}));
				var g;
				(function (o) {
					(o[(o.Above = 0)] = "Above"), (o[(o.Below = 1)] = "Below");
				})(g || (g = {}));
				let p = class extends m.$1c {
					get list() {
						return this.m;
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.u = f),
							(this.w = b),
							(this.y = s),
							(this.a = n.Hidden),
							(this.f = !1),
							(this.h = this.D(new m.$2c())),
							(this.q = this.D(new C.$Wh())),
							(this.r = this.D(new d.$re())),
							(this.onDidSelect = this.r.event),
							(this.s = this.D(new d.$re())),
							(this.onDidHide = this.s.event),
							(this.t = this.D(new d.$re())),
							(this.onDidShow = this.t.event),
							(this.element = this.D(new w.$dpb())),
							this.element.domNode.classList.add("workbench-suggest-widget"),
							this.u.appendChild(this.element.domNode);
						class $ {
							constructor(T, P, k = !1, L = !1) {
								(this.persistedSize = T),
									(this.currentSize = P),
									(this.persistHeight = k),
									(this.persistWidth = L);
							}
						}
						let v;
						this.D(
							this.element.onDidWillResize(() => {
								v = new $(this.w.restore(), this.element.size);
							}),
						),
							this.D(
								this.element.onDidResize((I) => {
									if (
										(this.H(I.dimension.width, I.dimension.height),
										v &&
											((v.persistHeight =
												v.persistHeight || !!I.north || !!I.south),
											(v.persistWidth =
												v.persistWidth || !!I.east || !!I.west)),
										!!I.done)
									) {
										if (v) {
											const { itemHeight: T, defaultSize: P } = this.I(),
												k = Math.round(T / 2);
											let { width: L, height: D } = this.element.size;
											(!v.persistHeight ||
												Math.abs(v.currentSize.height - D) <= k) &&
												(D = v.persistedSize?.height ?? P.height),
												(!v.persistWidth ||
													Math.abs(v.currentSize.width - L) <= k) &&
													(L = v.persistedSize?.width ?? P.width),
												this.w.store(new t.$pgb(L, D));
										}
										v = void 0;
									}
								}),
							);
						const S = new E.$bVc(s);
						this.D(S),
							(this.j = t.$fhb(this.element.domNode, c(".tree"))),
							(this.m = this.D(
								new i.List(
									"SuggestWidget",
									this.j,
									{
										getHeight: (I) => this.I().itemHeight,
										getTemplateId: (I) => "suggestion",
									},
									[S],
									{
										alwaysConsumeMouseWheel: !0,
										useShadows: !1,
										mouseSupport: !1,
										multipleSelectionSupport: !1,
										accessibilityProvider: {
											getRole: () => "option",
											getWidgetAriaLabel: () => (0, u.localize)(12655, null),
											getWidgetRole: () => "listbox",
											getAriaLabel: (I) => {
												let T = I.completion.label;
												if (typeof I.completion.label != "string") {
													const { detail: k, description: L } =
														I.completion.label;
													k && L
														? (T = (0, u.localize)(12656, null, T, k, L))
														: k
															? (T = (0, u.localize)(12657, null, T, k))
															: L && (T = (0, u.localize)(12658, null, T, L));
												}
												const { detail: P } = I.completion;
												return (0, u.localize)(12659, null, T, P);
											},
										},
									},
								),
							)),
							l.statusBarMenuId &&
								((this.n = this.D(
									y.createInstance(
										h.$xDb,
										this.element.domNode,
										l.statusBarMenuId,
									),
								)),
								this.element.domNode.classList.toggle("with-status-bar", !0)),
							this.D(this.m.onMouseDown((I) => this.J(I))),
							this.D(this.m.onTap((I) => this.J(I))),
							this.D(this.m.onDidChangeSelection((I) => this.L(I)));
					}
					setCompletionModel(f) {
						this.b = f;
					}
					hasCompletions() {
						return this.b?.items.length !== 0;
					}
					showSuggestions(f, b, s, l) {
						if (
							((this.z = l), b && this.a !== n.Empty && this.a !== n.Hidden)
						) {
							this.C(n.Frozen);
							return;
						}
						if ((this.b?.items.length ?? 0) === 0) {
							this.C(s ? n.Hidden : n.Empty), (this.b = void 0);
							return;
						}
						try {
							this.m.splice(0, this.m.length, this.b?.items ?? []),
								this.C(b ? n.Frozen : n.Open),
								this.m.reveal(f, 0),
								this.m.setFocus([f]);
						} finally {
						}
						this.h.value = t.$ggb(t.getWindow(this.element.domNode), () => {
							this.h.clear(), this.G(this.element.size);
						});
					}
					setLineContext(f) {
						this.b && (this.b.lineContext = f);
					}
					C(f) {
						if (this.a !== f)
							switch (
								((this.a = f),
								this.element.domNode.classList.toggle("frozen", f === n.Frozen),
								this.element.domNode.classList.remove("message"),
								f)
							) {
								case n.Hidden:
									t.hide(this.j),
										this.n && t.hide(this.n?.element),
										this.n?.hide(),
										this.q.cancel(),
										this.element.domNode.classList.remove("visible"),
										this.m.splice(0, this.m.length),
										(this.c = void 0);
									break;
								case n.Loading:
									this.element.domNode.classList.add("message"),
										t.hide(this.j),
										this.n && t.hide(this.n?.element),
										this.F();
									break;
								case n.Empty:
									this.element.domNode.classList.add("message"),
										t.hide(this.j),
										this.n && t.hide(this.n?.element),
										this.F();
									break;
								case n.Open:
									t.show(this.j), this.n && t.show(this.n?.element), this.F();
									break;
								case n.Frozen:
									t.show(this.j), this.n && t.show(this.n?.element), this.F();
									break;
								case n.Details:
									t.show(this.j), this.n && t.show(this.n?.element), this.F();
									break;
							}
					}
					F() {
						this.n?.show(),
							t.show(this.element.domNode),
							this.G(this.w.restore()),
							this.q.cancelAndSet(() => {
								this.element.domNode.classList.add("visible"),
									this.t.fire(this);
							}, 100);
					}
					hide() {
						this.h.clear(),
							this.C(n.Hidden),
							this.s.fire(this),
							t.hide(this.element.domNode),
							this.element.clearSashHoverState();
						const f = this.w.restore(),
							b = Math.ceil(this.I().itemHeight * 4.3);
						f && f.height < b && this.w.store(f.with(void 0, b));
					}
					G(f) {
						if (!this.z) return;
						const b = t.$ogb(this.u.ownerDocument.body),
							s = this.I();
						f || (f = s.defaultSize);
						let l = f.height,
							y = f.width;
						this.n && (this.n.element.style.lineHeight = `${s.itemHeight}px`);
						const $ = b.width - s.borderHeight - 2 * s.horizontalPadding;
						y > $ && (y = $);
						const v = this.b
								? this.b.stats.pLabelLen * s.typicalHalfwidthCharacterWidth
								: y,
							S = s.statusBarHeight + this.m.contentHeight + s.borderHeight,
							I = s.itemHeight + s.statusBarHeight,
							T = t.$tgb(this.u),
							P = this.z,
							k = T.top + P.top + P.height,
							L = Math.min(b.height - k - s.verticalPadding, S),
							D = T.top + P.top - s.verticalPadding,
							M = Math.min(D, S);
						let N = Math.min(Math.max(M, L) + s.borderHeight, S);
						l === this.c?.capped && (l = this.c.wanted),
							l < I && (l = I),
							l > N && (l = N),
							l > L || (this.f && D > 150)
								? ((this.g = g.Above),
									this.element.enableSashes(!0, !0, !1, !1),
									(N = M))
								: ((this.g = g.Below),
									this.element.enableSashes(!1, !0, !0, !1),
									(N = L)),
							(this.element.preferredSize = new t.$pgb(
								v,
								s.defaultSize.height,
							)),
							(this.element.maxSize = new t.$pgb($, N)),
							(this.element.minSize = new t.$pgb(220, I)),
							(this.c =
								l === S
									? { wanted: this.c?.wanted ?? f.height, capped: l }
									: void 0),
							(this.element.domNode.style.left = `${this.z.left}px`),
							this.g === g.Above
								? (this.element.domNode.style.top = `${this.z.top - l - s.borderHeight}px`)
								: (this.element.domNode.style.top = `${this.z.top + this.z.height}px`),
							this.H(y, l);
					}
					H(f, b) {
						const { width: s, height: l } = this.element.maxSize;
						(f = Math.min(s, f)), l && (b = Math.min(l, b));
						const { statusBarHeight: y } = this.I();
						this.m.layout(b - y, f),
							(this.j.style.height = `${b - y}px`),
							(this.j.style.width = `${f}px`),
							(this.j.style.height = `${b}px`),
							this.element.layout(b, f);
					}
					I() {
						const f = this.y(),
							b = (0, r.$Zm)(Math.ceil(f.lineHeight), 8, 1e3),
							s = 0; //!this.editor.getOption(EditorOption.suggest).showStatusBar || this._state === State.Empty || this._state === State.Loading ? 0 : itemHeight;
						const l = 1,
							y = 2 * l;
						return {
							itemHeight: b,
							statusBarHeight: s,
							borderWidth: l,
							borderHeight: y,
							typicalHalfwidthCharacterWidth: 10,
							verticalPadding: 22,
							horizontalPadding: 14,
							defaultSize: new t.$pgb(430, s + 12 * b + y),
						};
					}
					J(f) {
						typeof f.element > "u" ||
							typeof f.index > "u" ||
							(f.browserEvent.preventDefault(),
							f.browserEvent.stopPropagation(),
							this.M(f.element, f.index));
					}
					L(f) {
						f.elements.length && this.M(f.elements[0], f.indexes[0]);
					}
					M(f, b) {
						const s = this.b;
						s && this.r.fire({ item: f, index: b, model: s });
					}
					selectNext() {
						this.m.focusNext(1, !0);
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					selectNextPage() {
						this.m.focusNextPage();
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					selectPrevious() {
						this.m.focusPrevious(1, !0);
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					selectPreviousPage() {
						this.m.focusPreviousPage();
						const f = this.m.getFocus();
						return f.length > 0 && this.m.reveal(f[0]), !0;
					}
					getFocusedItem() {
						if (this.b)
							return {
								item: this.m.getFocusedElements()[0],
								index: this.m.getFocus()[0],
								model: this.b,
							};
					}
					forceRenderingAbove() {
						this.f || ((this.f = !0), this.G(this.w.restore()));
					}
					stopForceRenderingAbove() {
						this.f = !1;
					}
				};
				(e.$cVc = p), (e.$cVc = p = Ne([j(4, a.$Li)], p));
			},
		)
