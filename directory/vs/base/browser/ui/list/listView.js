import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dnd.js';
import '../../dom.js';
import '../../event.js';
import '../../touch.js';
import '../scrollbar/scrollableElement.js';
import '../../../common/arrays.js';
import '../../../common/async.js';
import '../../../common/decorators.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/range.js';
import '../../../common/scrollable.js';
import './list.js';
import './rangeMap.js';
import './rowCache.js';
import '../../../common/errors.js';
import '../../../common/numbers.js';
define(
			de[539],
			he([
				1, 0, 323, 7, 265, 159, 203, 24, 15, 138, 6, 3, 902, 195, 431, 2222,
				2675, 29, 201,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zib = e.$yib = e.$xib = e.$wib = e.ListViewTargetSector = void 0);
				const b = { CurrentDragAndDropData: void 0 };
				var s;
				(function (P) {
					(P[(P.TOP = 0)] = "TOP"),
						(P[(P.CENTER_TOP = 1)] = "CENTER_TOP"),
						(P[(P.CENTER_BOTTOM = 2)] = "CENTER_BOTTOM"),
						(P[(P.BOTTOM = 3)] = "BOTTOM");
				})(s || (e.ListViewTargetSector = s = {}));
				const l = {
					useShadows: !0,
					verticalScrollMode: c.ScrollbarVisibility.Auto,
					setRowLineHeight: !0,
					setRowHeight: !0,
					supportDynamicHeights: !1,
					dnd: {
						getDragElements(P) {
							return [P];
						},
						getDragURI() {
							return null;
						},
						onDragStart() {},
						onDragOver() {
							return !1;
						},
						drop() {},
						dispose() {},
					},
					horizontalScrolling: !1,
					transformOptimization: !0,
					alwaysConsumeMouseWheel: !0,
				};
				class y {
					get context() {
						return this.d;
					}
					set context(k) {
						this.d = k;
					}
					constructor(k) {
						this.elements = k;
					}
					update() {}
					getData() {
						return this.elements;
					}
				}
				e.$wib = y;
				class $ {
					constructor(k) {
						this.elements = k;
					}
					update() {}
					getData() {
						return this.elements;
					}
				}
				e.$xib = $;
				class v {
					constructor() {
						(this.types = []), (this.files = []);
					}
					update(k) {
						if (
							(k.types && this.types.splice(0, this.types.length, ...k.types),
							k.files)
						) {
							this.files.splice(0, this.files.length);
							for (let L = 0; L < k.files.length; L++) {
								const D = k.files.item(L);
								D && (D.size || D.type) && this.files.push(D);
							}
						}
					}
					getData() {
						return { types: this.types, files: this.files };
					}
				}
				e.$yib = v;
				function S(P, k) {
					return Array.isArray(P) && Array.isArray(k)
						? (0, d.$yb)(P, k)
						: P === k;
				}
				class I {
					constructor(k) {
						k?.getSetSize
							? (this.getSetSize = k.getSetSize.bind(k))
							: (this.getSetSize = (L, D, M) => M),
							k?.getPosInSet
								? (this.getPosInSet = k.getPosInSet.bind(k))
								: (this.getPosInSet = (L, D) => D + 1),
							k?.getRole
								? (this.getRole = k.getRole.bind(k))
								: (this.getRole = (L) => "listitem"),
							k?.isChecked
								? (this.isChecked = k.isChecked.bind(k))
								: (this.isChecked = (L) => {});
					}
				}
				class T {
					static {
						this.c = 0;
					}
					get contentHeight() {
						return this.g.size;
					}
					get contentWidth() {
						return this.E ?? 0;
					}
					get onDidScroll() {
						return this.q.onScroll;
					}
					get onWillScroll() {
						return this.q.onWillScroll;
					}
					get containerDomNode() {
						return this.o;
					}
					get scrollableElementDomNode() {
						return this.q.getDomNode();
					}
					get Q() {
						return this.P;
					}
					set Q(k) {
						if (k !== this.P) {
							if (k && this.B)
								throw new Error(
									"Horizontal scrolling and dynamic heights not supported simultaneously",
								);
							if (
								((this.P = k),
								this.domNode.classList.toggle("horizontal-scrolling", this.P),
								this.P)
							) {
								for (const L of this.d) this.ab(L);
								this.X(),
									this.q.setScrollDimensions({
										width: (0, i.$wgb)(this.domNode),
									}),
									(this.o.style.width = `${Math.max(this.E || 0, this.n)}px`);
							} else
								this.u.cancel(),
									this.q.setScrollDimensions({
										width: this.n,
										scrollWidth: this.n,
									}),
									(this.o.style.width = "");
						}
					}
					constructor(k, L, D, M = l) {
						if (
							((this.R = L),
							(this.domId = `list_id_${++T.c}`),
							(this.j = new Map()),
							(this.n = 0),
							(this.s = 0),
							(this.t = null),
							(this.u = new m.$Jh(50)),
							(this.v = !1),
							(this.x = a.$1c.None),
							(this.y = 0),
							(this.G = !1),
							(this.K = a.$1c.None),
							(this.L = a.$1c.None),
							(this.M = new a.$Zc()),
							(this.N = new u.$re()),
							(this.O = new u.$re()),
							(this.onDidChangeContentHeight = u.Event.latch(
								this.N.event,
								void 0,
								this.M,
							)),
							(this.onDidChangeContentWidth = u.Event.latch(
								this.O.event,
								void 0,
								this.M,
							)),
							(this.P = !1),
							M.horizontalScrolling && M.supportDynamicHeights)
						)
							throw new Error(
								"Horizontal scrolling and dynamic heights not supported simultaneously",
							);
						(this.d = []), (this.f = 0), (this.g = this.S(M.paddingTop ?? 0));
						for (const A of D) this.j.set(A.templateId, A);
						(this.h = this.M.add(new p.$vib(this.j))),
							(this.k = 0),
							(this.m = 0),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = "monaco-list"),
							this.domNode.classList.add(this.domId),
							(this.domNode.tabIndex = 0),
							this.domNode.classList.toggle(
								"mouse-support",
								typeof M.mouseSupport == "boolean" ? M.mouseSupport : !0,
							),
							(this.P = M.horizontalScrolling ?? l.horizontalScrolling),
							this.domNode.classList.toggle("horizontal-scrolling", this.P),
							(this.C = typeof M.paddingBottom > "u" ? 0 : M.paddingBottom),
							(this.D = new I(M.accessibilityProvider)),
							(this.o = document.createElement("div")),
							(this.o.className = "monaco-list-rows"),
							(M.transformOptimization ?? l.transformOptimization) &&
								((this.o.style.transform = "translate3d(0px, 0px, 0px)"),
								(this.o.style.overflow = "hidden"),
								(this.o.style.contain = "strict")),
							this.M.add(E.$Qhb.addTarget(this.o)),
							(this.p = this.M.add(
								new c.$KK({
									forceIntegerValues: !0,
									smoothScrollDuration: (M.smoothScrolling ?? !1) ? 125 : 0,
									scheduleAtNextAnimationFrame: (A) =>
										(0, i.$hgb)((0, i.getWindow)(this.domNode), A),
								}),
							)),
							(this.q = this.M.add(
								new C.$6hb(
									this.o,
									{
										alwaysConsumeMouseWheel:
											M.alwaysConsumeMouseWheel ?? l.alwaysConsumeMouseWheel,
										horizontal: c.ScrollbarVisibility.Auto,
										vertical: M.verticalScrollMode ?? l.verticalScrollMode,
										useShadows: M.useShadows ?? l.useShadows,
										mouseWheelScrollSensitivity: M.mouseWheelScrollSensitivity,
										fastScrollSensitivity: M.fastScrollSensitivity,
										scrollByPage: M.scrollByPage,
									},
									this.p,
								),
							)),
							this.domNode.appendChild(this.q.getDomNode()),
							k.appendChild(this.domNode),
							this.q.onScroll(this.ib, this, this.M),
							this.M.add(
								(0, i.$0fb)(this.o, E.EventType.Change, (A) => this.jb(A)),
							),
							this.M.add(
								(0, i.$0fb)(
									this.q.getDomNode(),
									"scroll",
									(A) => (A.target.scrollTop = 0),
								),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "dragover", (A) =>
									this.lb(this.hb(A)),
								),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "drop", (A) => this.nb(this.hb(A))),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "dragleave", (A) =>
									this.mb(this.hb(A)),
								),
							),
							this.M.add(
								(0, i.$0fb)(this.domNode, "dragend", (A) => this.ob(A)),
							),
							(this.z = M.setRowLineHeight ?? l.setRowLineHeight),
							(this.A = M.setRowHeight ?? l.setRowHeight),
							(this.B = M.supportDynamicHeights ?? l.supportDynamicHeights),
							(this.F = M.dnd ?? this.M.add(l.dnd)),
							this.layout(M.initialSize?.height, M.initialSize?.width);
					}
					updateOptions(k) {
						k.paddingBottom !== void 0 &&
							((this.C = k.paddingBottom),
							this.q.setScrollDimensions({ scrollHeight: this.scrollHeight })),
							k.smoothScrolling !== void 0 &&
								this.p.setSmoothScrollDuration(k.smoothScrolling ? 125 : 0),
							k.horizontalScrolling !== void 0 &&
								(this.Q = k.horizontalScrolling);
						let L;
						if (
							(k.scrollByPage !== void 0 &&
								(L = { ...(L ?? {}), scrollByPage: k.scrollByPage }),
							k.mouseWheelScrollSensitivity !== void 0 &&
								(L = {
									...(L ?? {}),
									mouseWheelScrollSensitivity: k.mouseWheelScrollSensitivity,
								}),
							k.fastScrollSensitivity !== void 0 &&
								(L = {
									...(L ?? {}),
									fastScrollSensitivity: k.fastScrollSensitivity,
								}),
							L && this.q.updateOptions(L),
							k.paddingTop !== void 0 && k.paddingTop !== this.g.paddingTop)
						) {
							const D = this.vb(this.k, this.m),
								M = k.paddingTop - this.g.paddingTop;
							(this.g.paddingTop = k.paddingTop),
								this.Y(D, Math.max(0, this.k + M), this.m, void 0, void 0, !0),
								this.setScrollTop(this.k),
								this.V(),
								this.B && this.wb(this.k, this.m);
						}
					}
					delegateScrollFromMouseWheelEvent(k) {
						this.q.delegateScrollFromMouseWheelEvent(k);
					}
					delegateVerticalScrollbarPointerDown(k) {
						this.q.delegateVerticalScrollbarPointerDown(k);
					}
					updateElementHeight(k, L, D) {
						if (k < 0 || k >= this.d.length) return;
						const M = this.d[k].size;
						if (typeof L > "u") {
							if (!this.B) {
								console.warn(
									"Dynamic heights not supported",
									new Error().stack,
								);
								return;
							}
							(this.d[k].lastDynamicHeightWidth = void 0), (L = M + this.xb(k));
						}
						if (M === L) return;
						const N = this.vb(this.k, this.m);
						let A = 0;
						k < N.start || (D !== null && D > k && D < N.end)
							? (A = L - M)
							: (A = 0),
							this.g.splice(k, 1, [{ size: L }]),
							(this.d[k].size = L),
							this.Y(N, Math.max(0, this.k + A), this.m, void 0, void 0, !0),
							this.setScrollTop(this.k),
							this.V(),
							this.B && this.wb(this.k, this.m);
					}
					S(k) {
						return new g.$uib(k);
					}
					splice(k, L, D = []) {
						if (this.v) throw new Error("Can't run recursive splices.");
						this.v = !0;
						try {
							return this.U(k, L, D);
						} finally {
							(this.v = !1), this.N.fire(this.contentHeight);
						}
					}
					U(k, L, D = []) {
						const M = this.vb(this.k, this.m),
							N = { start: k, end: k + L },
							A = h.Range.intersect(M, N),
							R = new Map();
						for (let X = A.end - 1; X >= A.start; X--) {
							const Y = this.d[X];
							if (
								(Y.dragStartDisposable.dispose(),
								Y.checkedDisposable.dispose(),
								Y.row)
							) {
								let ie = R.get(Y.templateId);
								ie || ((ie = []), R.set(Y.templateId, ie));
								const ne = this.j.get(Y.templateId);
								ne &&
									ne.disposeElement &&
									ne.disposeElement(Y.element, X, Y.row.templateData, Y.size),
									ie.unshift(Y.row);
							}
							(Y.row = null), (Y.stale = !0);
						}
						const O = { start: k + L, end: this.d.length },
							B = h.Range.intersect(O, M),
							U = h.Range.relativeComplement(O, M),
							z = D.map((X) => ({
								id: String(this.f++),
								element: X,
								templateId: this.R.getTemplateId(X),
								size: this.R.getHeight(X),
								width: void 0,
								hasDynamicHeight:
									!!this.R.hasDynamicHeight && this.R.hasDynamicHeight(X),
								lastDynamicHeightWidth: void 0,
								row: null,
								uri: void 0,
								dropTarget: !1,
								dragStartDisposable: a.$1c.None,
								checkedDisposable: a.$1c.None,
								stale: !1,
							}));
						let F;
						k === 0 && L >= this.d.length
							? ((this.g = this.S(this.g.paddingTop)),
								this.g.splice(0, 0, z),
								(F = this.d),
								(this.d = z))
							: (this.g.splice(k, L, z), (F = this.d.splice(k, L, ...z)));
						const x = D.length - L,
							H = this.vb(this.k, this.m),
							q = (0, g.$sib)(B, x),
							V = h.Range.intersect(H, q);
						for (let X = V.start; X < V.end; X++) this.bb(this.d[X], X);
						const G = h.Range.relativeComplement(q, H);
						for (const X of G) for (let Y = X.start; Y < X.end; Y++) this.db(Y);
						const K = U.map((X) => (0, g.$sib)(X, x)),
							W = [{ start: k, end: k + D.length }, ...K]
								.map((X) => h.Range.intersect(H, X))
								.reverse();
						for (const X of W)
							for (let Y = X.end - 1; Y >= X.start; Y--) {
								const ie = this.d[Y],
									ee = R.get(ie.templateId)?.pop();
								this.Z(Y, ee);
							}
						for (const X of R.values()) for (const Y of X) this.h.release(Y);
						return (
							this.V(),
							this.B && this.wb(this.scrollTop, this.renderHeight),
							F.map((X) => X.element)
						);
					}
					V() {
						(this.s = this.contentHeight),
							(this.o.style.height = `${this.s}px`),
							this.t ||
								(this.t = (0, i.$hgb)((0, i.getWindow)(this.domNode), () => {
									this.q.setScrollDimensions({
										scrollHeight: this.scrollHeight,
									}),
										this.X(),
										(this.t = null);
								}));
					}
					W() {
						if (!this.Q) {
							this.u.cancel();
							return;
						}
						this.u.trigger(() => this.X());
					}
					X() {
						if (!this.Q) return;
						let k = 0;
						for (const L of this.d)
							typeof L.width < "u" && (k = Math.max(k, L.width));
						(this.E = k),
							this.q.setScrollDimensions({ scrollWidth: k === 0 ? 0 : k + 10 }),
							this.O.fire(this.E);
					}
					updateWidth(k) {
						if (!this.Q || typeof this.E > "u") return;
						const L = this.d[k];
						this.ab(L),
							typeof L.width < "u" &&
								L.width > this.E &&
								((this.E = L.width),
								this.q.setScrollDimensions({ scrollWidth: this.E + 10 }),
								this.O.fire(this.E));
					}
					rerender() {
						if (this.B) {
							for (const k of this.d) k.lastDynamicHeightWidth = void 0;
							this.wb(this.k, this.m);
						}
					}
					get length() {
						return this.d.length;
					}
					get renderHeight() {
						return this.q.getScrollDimensions().height;
					}
					get firstVisibleIndex() {
						return this.vb(this.k, this.m).start;
					}
					get firstMostlyVisibleIndex() {
						const k = this.firstVisibleIndex,
							L = this.g.positionAt(k),
							D = this.g.positionAt(k + 1);
						return D !== -1 && (D - L) / 2 + L < this.scrollTop ? k + 1 : k;
					}
					get lastVisibleIndex() {
						return this.vb(this.k, this.m).end - 1;
					}
					element(k) {
						return this.d[k].element;
					}
					indexOf(k) {
						return this.d.findIndex((L) => L.element === k);
					}
					domElement(k) {
						const L = this.d[k].row;
						return L && L.domNode;
					}
					elementHeight(k) {
						return this.d[k].size;
					}
					elementTop(k) {
						return this.g.positionAt(k);
					}
					indexAt(k) {
						return this.g.indexAt(k);
					}
					indexAfter(k) {
						return this.g.indexAfter(k);
					}
					layout(k, L) {
						const D = {
							height: typeof k == "number" ? k : (0, i.$ygb)(this.domNode),
						};
						this.t &&
							(this.t.dispose(),
							(this.t = null),
							(D.scrollHeight = this.scrollHeight)),
							this.q.setScrollDimensions(D),
							typeof L < "u" &&
								((this.n = L),
								this.B && this.wb(this.scrollTop, this.renderHeight)),
							this.Q &&
								this.q.setScrollDimensions({
									width: typeof L == "number" ? L : (0, i.$wgb)(this.domNode),
								});
					}
					Y(k, L, D, M, N, A = !1) {
						const R = this.vb(L, D),
							O = h.Range.relativeComplement(R, k).reverse(),
							B = h.Range.relativeComplement(k, R);
						if (A) {
							const U = h.Range.intersect(k, R);
							for (let z = U.start; z < U.end; z++) this.bb(this.d[z], z);
						}
						this.h.transact(() => {
							for (const U of B)
								for (let z = U.start; z < U.end; z++) this.db(z);
							for (const U of O)
								for (let z = U.end - 1; z >= U.start; z--) this.Z(z);
						}),
							M !== void 0 && (this.o.style.left = `-${M}px`),
							(this.o.style.top = `-${L}px`),
							this.Q &&
								N !== void 0 &&
								(this.o.style.width = `${Math.max(N, this.n)}px`),
							(this.k = L),
							(this.m = D);
					}
					Z(k, L) {
						const D = this.d[k];
						if (!D.row)
							if (L) (D.row = L), (D.stale = !0);
							else {
								const O = this.h.alloc(D.templateId);
								(D.row = O.row), (D.stale ||= O.isReusingConnectedDomNode);
							}
						const M = this.D.getRole(D.element) || "listitem";
						D.row.domNode.setAttribute("role", M);
						const N = this.D.isChecked(D.element);
						if (typeof N == "boolean")
							D.row.domNode.setAttribute("aria-checked", String(!!N));
						else if (N) {
							const O = (B) =>
								D.row.domNode.setAttribute("aria-checked", String(!!B));
							O(N.value),
								(D.checkedDisposable = N.onDidChange(() => O(N.value)));
						}
						if (D.stale || !D.row.domNode.parentElement) {
							const O = this.d.at(k + 1)?.row?.domNode ?? null;
							(D.row.domNode.parentElement !== this.o ||
								D.row.domNode.nextElementSibling !== O) &&
								this.o.insertBefore(D.row.domNode, O),
								(D.stale = !1);
						}
						this.bb(D, k);
						const A = this.j.get(D.templateId);
						if (!A)
							throw new Error(
								`No renderer found for template id ${D.templateId}`,
							);
						A?.renderElement(D.element, k, D.row.templateData, D.size);
						const R = this.F.getDragURI(D.element);
						D.dragStartDisposable.dispose(),
							(D.row.domNode.draggable = !!R),
							R &&
								(D.dragStartDisposable = (0, i.$0fb)(
									D.row.domNode,
									"dragstart",
									(O) => this.kb(D.element, R, O),
								)),
							this.Q && (this.ab(D), this.W());
					}
					ab(k) {
						if (!k.row || !k.row.domNode) return;
						(k.row.domNode.style.width = "fit-content"),
							(k.width = (0, i.$wgb)(k.row.domNode));
						const L = (0, i.getWindow)(k.row.domNode).getComputedStyle(
							k.row.domNode,
						);
						L.paddingLeft && (k.width += parseFloat(L.paddingLeft)),
							L.paddingRight && (k.width += parseFloat(L.paddingRight)),
							(k.row.domNode.style.width = "");
					}
					bb(k, L) {
						(k.row.domNode.style.top = `${this.elementTop(L)}px`),
							this.A && (k.row.domNode.style.height = `${k.size}px`),
							this.z && (k.row.domNode.style.lineHeight = `${k.size}px`),
							k.row.domNode.setAttribute("data-index", `${L}`),
							k.row.domNode.setAttribute(
								"data-last-element",
								L === this.length - 1 ? "true" : "false",
							),
							k.row.domNode.setAttribute(
								"data-parity",
								L % 2 === 0 ? "even" : "odd",
							),
							k.row.domNode.setAttribute(
								"aria-setsize",
								String(this.D.getSetSize(k.element, L, this.length)),
							),
							k.row.domNode.setAttribute(
								"aria-posinset",
								String(this.D.getPosInSet(k.element, L)),
							),
							k.row.domNode.setAttribute("id", this.getElementDomId(L)),
							k.row.domNode.classList.toggle("drop-target", k.dropTarget);
					}
					db(k) {
						const L = this.d[k];
						if (
							(L.dragStartDisposable.dispose(),
							L.checkedDisposable.dispose(),
							L.row)
						) {
							const D = this.j.get(L.templateId);
							D &&
								D.disposeElement &&
								D.disposeElement(L.element, k, L.row.templateData, L.size),
								this.h.release(L.row),
								(L.row = null);
						}
						this.Q && this.W();
					}
					getScrollTop() {
						return this.q.getScrollPosition().scrollTop;
					}
					setScrollTop(k, L) {
						this.t &&
							(this.t.dispose(),
							(this.t = null),
							this.q.setScrollDimensions({ scrollHeight: this.scrollHeight })),
							this.q.setScrollPosition({ scrollTop: k, reuseAnimation: L });
					}
					getScrollLeft() {
						return this.q.getScrollPosition().scrollLeft;
					}
					setScrollLeft(k) {
						this.t &&
							(this.t.dispose(),
							(this.t = null),
							this.q.setScrollDimensions({ scrollWidth: this.E })),
							this.q.setScrollPosition({ scrollLeft: k });
					}
					get scrollTop() {
						return this.getScrollTop();
					}
					set scrollTop(k) {
						this.setScrollTop(k);
					}
					get scrollHeight() {
						return this.s + (this.Q ? 10 : 0) + this.C;
					}
					get onMouseClick() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "click")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseDblClick() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "dblclick")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseMiddleClick() {
						return u.Event.filter(
							u.Event.map(
								this.M.add(new w.$mib(this.domNode, "auxclick")).event,
								(k) => this.eb(k),
								this.M,
							),
							(k) => k.browserEvent.button === 1,
							this.M,
						);
					}
					get onMouseUp() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mouseup")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseDown() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mousedown")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseOver() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mouseover")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseMove() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mousemove")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onMouseOut() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "mouseout")).event,
							(k) => this.eb(k),
							this.M,
						);
					}
					get onContextMenu() {
						return u.Event.any(
							u.Event.map(
								this.M.add(new w.$mib(this.domNode, "contextmenu")).event,
								(k) => this.eb(k),
								this.M,
							),
							u.Event.map(
								this.M.add(new w.$mib(this.domNode, E.EventType.Contextmenu))
									.event,
								(k) => this.gb(k),
								this.M,
							),
						);
					}
					get onTouchStart() {
						return u.Event.map(
							this.M.add(new w.$mib(this.domNode, "touchstart")).event,
							(k) => this.fb(k),
							this.M,
						);
					}
					get onTap() {
						return u.Event.map(
							this.M.add(new w.$mib(this.o, E.EventType.Tap)).event,
							(k) => this.gb(k),
							this.M,
						);
					}
					eb(k) {
						const L = this.ub(k.target || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element;
						return { browserEvent: k, index: L, element: M };
					}
					fb(k) {
						const L = this.ub(k.target || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element;
						return { browserEvent: k, index: L, element: M };
					}
					gb(k) {
						const L = this.ub(k.initialTarget || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element;
						return { browserEvent: k, index: L, element: M };
					}
					hb(k) {
						const L = this.ub(k.target || null),
							D = typeof L > "u" ? void 0 : this.d[L],
							M = D && D.element,
							N = this.tb(k, L);
						return { browserEvent: k, index: L, element: M, sector: N };
					}
					ib(k) {
						try {
							const L = this.vb(this.k, this.m);
							this.Y(L, k.scrollTop, k.height, k.scrollLeft, k.scrollWidth),
								this.B && this.wb(k.scrollTop, k.height, k.inSmoothScrolling);
						} catch (L) {
							throw (console.error("Got bad scroll event:", k), L);
						}
					}
					jb(k) {
						k.preventDefault(),
							k.stopPropagation(),
							(this.scrollTop -= k.translationY);
					}
					kb(k, L, D) {
						if (!D.dataTransfer) return;
						const M = this.F.getDragElements(k);
						if (
							((D.dataTransfer.effectAllowed = "copyMove"),
							D.dataTransfer.setData(t.$Ohb.TEXT, L),
							D.dataTransfer.setDragImage)
						) {
							let N;
							this.F.getDragLabel && (N = this.F.getDragLabel(M, D)),
								typeof N > "u" && (N = String(M.length));
							const A = (0, i.$)(".monaco-drag-image");
							(A.textContent = N),
								((B) => {
									for (; B && !B.classList.contains("monaco-workbench"); )
										B = B.parentElement;
									return B || this.domNode.ownerDocument;
								})(this.domNode).appendChild(A),
								D.dataTransfer.setDragImage(A, -10, -10),
								setTimeout(() => A.remove(), 0);
						}
						this.domNode.classList.add("dragging"),
							(this.H = new y(M)),
							(b.CurrentDragAndDropData = new $(M)),
							this.F.onDragStart?.(this.H, D);
					}
					lb(k) {
						if (
							(k.browserEvent.preventDefault(),
							this.L.dispose(),
							(b.CurrentDragAndDropData &&
								b.CurrentDragAndDropData.getData() === "vscode-ui") ||
								(this.qb(k.browserEvent), !k.browserEvent.dataTransfer))
						)
							return !1;
						if (!this.H)
							if (b.CurrentDragAndDropData) this.H = b.CurrentDragAndDropData;
							else {
								if (!k.browserEvent.dataTransfer.types) return !1;
								this.H = new v();
							}
						const L = this.F.onDragOver(
							this.H,
							k.element,
							k.index,
							k.sector,
							k.browserEvent,
						);
						if (((this.G = typeof L == "boolean" ? L : L.accept), !this.G))
							return (this.I = void 0), this.K.dispose(), !1;
						k.browserEvent.dataTransfer.dropEffect =
							typeof L != "boolean" &&
							L.effect?.type === n.ListDragOverEffectType.Copy
								? "copy"
								: "move";
						let D;
						typeof L != "boolean" && L.feedback
							? (D = L.feedback)
							: typeof k.index > "u"
								? (D = [-1])
								: (D = [k.index]),
							(D = (0, d.$Qb)(D)
								.filter((N) => N >= -1 && N < this.length)
								.sort((N, A) => N - A)),
							(D = D[0] === -1 ? [-1] : D);
						let M =
							typeof L != "boolean" && L.effect && L.effect.position
								? L.effect.position
								: n.ListDragOverEffectPosition.Over;
						if (S(this.I, D) && this.J === M) return !0;
						if (((this.I = D), (this.J = M), this.K.dispose(), D[0] === -1))
							this.domNode.classList.add(M),
								this.o.classList.add(M),
								(this.K = (0, a.$Yc)(() => {
									this.domNode.classList.remove(M), this.o.classList.remove(M);
								}));
						else {
							if (D.length > 1 && M !== n.ListDragOverEffectPosition.Over)
								throw new Error(
									"Can't use multiple feedbacks with position different than 'over'",
								);
							M === n.ListDragOverEffectPosition.After &&
								D[0] < this.length - 1 &&
								((D[0] += 1), (M = n.ListDragOverEffectPosition.Before));
							for (const N of D) {
								const A = this.d[N];
								(A.dropTarget = !0), A.row?.domNode.classList.add(M);
							}
							this.K = (0, a.$Yc)(() => {
								for (const N of D) {
									const A = this.d[N];
									(A.dropTarget = !1), A.row?.domNode.classList.remove(M);
								}
							});
						}
						return !0;
					}
					mb(k) {
						this.L.dispose(),
							(this.L = (0, m.$Oh)(() => this.pb(), 100, this.M)),
							this.H &&
								this.F.onDragLeave?.(
									this.H,
									k.element,
									k.index,
									k.browserEvent,
								);
					}
					nb(k) {
						if (!this.G) return;
						const L = this.H;
						this.sb(),
							this.pb(),
							this.domNode.classList.remove("dragging"),
							(this.H = void 0),
							(b.CurrentDragAndDropData = void 0),
							!(!L || !k.browserEvent.dataTransfer) &&
								(k.browserEvent.preventDefault(),
								L.update(k.browserEvent.dataTransfer),
								this.F.drop(L, k.element, k.index, k.sector, k.browserEvent));
					}
					ob(k) {
						(this.G = !1),
							this.sb(),
							this.pb(),
							this.domNode.classList.remove("dragging"),
							(this.H = void 0),
							(b.CurrentDragAndDropData = void 0),
							this.F.onDragEnd?.(k);
					}
					pb() {
						(this.I = void 0),
							(this.J = void 0),
							this.K.dispose(),
							(this.K = a.$1c.None);
					}
					qb(k) {
						if (!this.w) {
							const L = (0, i.$qgb)(this.domNode).top;
							this.w = (0, i.$uhb)(
								(0, i.getWindow)(this.domNode),
								this.rb.bind(this, L),
							);
						}
						this.x.dispose(),
							(this.x = (0, m.$Oh)(
								() => {
									this.w && (this.w.dispose(), (this.w = void 0));
								},
								1e3,
								this.M,
							)),
							(this.y = k.pageY);
					}
					rb(k) {
						if (this.y === void 0) return;
						const L = this.y - k,
							D = this.renderHeight - 35;
						L < 35
							? (this.scrollTop += Math.max(-14, Math.floor(0.3 * (L - 35))))
							: L > D &&
								(this.scrollTop += Math.min(14, Math.floor(0.3 * (L - D))));
					}
					sb() {
						this.x.dispose(), this.w && (this.w.dispose(), (this.w = void 0));
					}
					tb(k, L) {
						if (L === void 0) return;
						const D = k.offsetY / this.d[L].size,
							M = Math.floor(D / 0.25);
						return (0, f.$Zm)(M, 0, 3);
					}
					ub(k) {
						const L = this.q.getDomNode();
						let D = k;
						for (
							;
							((0, i.$Ygb)(D) || (0, i.$6gb)(D)) &&
							D !== this.o &&
							L.contains(D);
						) {
							const M = D.getAttribute("data-index");
							if (M) {
								const N = Number(M);
								if (!isNaN(N)) return N;
							}
							D = D.parentElement;
						}
					}
					vb(k, L) {
						return {
							start: this.g.indexAt(k),
							end: this.g.indexAfter(k + L - 1),
						};
					}
					wb(k, L, D) {
						const M = this.vb(k, L);
						let N, A;
						k === this.elementTop(M.start)
							? ((N = M.start), (A = 0))
							: M.end - M.start > 1 &&
								((N = M.start + 1), (A = this.elementTop(N) - k));
						let R = 0;
						for (;;) {
							const O = this.vb(k, L);
							let B = !1;
							for (let U = O.start; U < O.end; U++) {
								const z = this.xb(U);
								z !== 0 && this.g.splice(U, 1, [this.d[U]]),
									(R += z),
									(B = B || z !== 0);
							}
							if (!B) {
								R !== 0 && this.V();
								const U = h.Range.relativeComplement(M, O);
								for (const F of U)
									for (let x = F.start; x < F.end; x++)
										this.d[x].row && this.db(x);
								const z = h.Range.relativeComplement(O, M).reverse();
								for (const F of z)
									for (let x = F.end - 1; x >= F.start; x--) this.Z(x);
								for (let F = O.start; F < O.end; F++)
									this.d[F].row && this.bb(this.d[F], F);
								if (typeof N == "number") {
									const F = this.p.getFutureScrollPosition().scrollTop - k,
										x = this.elementTop(N) - A + F;
									this.setScrollTop(x, D);
								}
								this.N.fire(this.contentHeight);
								return;
							}
						}
					}
					xb(k) {
						const L = this.d[k];
						if (this.R.getDynamicHeight) {
							const A = this.R.getDynamicHeight(L.element);
							if (A !== null) {
								const R = L.size;
								return (L.size = A), (L.lastDynamicHeightWidth = this.n), A - R;
							}
						}
						if (
							!L.hasDynamicHeight ||
							L.lastDynamicHeightWidth === this.n ||
							(this.R.hasDynamicHeight && !this.R.hasDynamicHeight(L.element))
						)
							return 0;
						const D = L.size;
						if (L.row)
							return (
								(L.row.domNode.style.height = ""),
								(L.size = L.row.domNode.offsetHeight),
								L.size === 0 &&
									!(0, i.$Bgb)(
										L.row.domNode,
										(0, i.getWindow)(L.row.domNode).document.body,
									) &&
									console.warn(
										"Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!",
										new Error().stack,
									),
								(L.lastDynamicHeightWidth = this.n),
								L.size - D
							);
						const { row: M } = this.h.alloc(L.templateId);
						(M.domNode.style.height = ""), this.o.appendChild(M.domNode);
						const N = this.j.get(L.templateId);
						if (!N)
							throw new o.$gb(
								"Missing renderer for templateId: " + L.templateId,
							);
						return (
							N.renderElement(L.element, k, M.templateData, void 0),
							(L.size = M.domNode.offsetHeight),
							N.disposeElement?.(L.element, k, M.templateData, void 0),
							this.R.setDynamicHeight?.(L.element, L.size),
							(L.lastDynamicHeightWidth = this.n),
							M.domNode.remove(),
							this.h.release(M),
							L.size - D
						);
					}
					getElementDomId(k) {
						return `${this.domId}_${k}`;
					}
					dispose() {
						for (const k of this.d)
							if (
								(k.dragStartDisposable.dispose(),
								k.checkedDisposable.dispose(),
								k.row)
							) {
								const L = this.j.get(k.row.templateId);
								L &&
									(L.disposeElement?.(
										k.element,
										-1,
										k.row.templateData,
										void 0,
									),
									L.disposeTemplate(k.row.templateData));
							}
						(this.d = []),
							this.domNode?.remove(),
							this.w?.dispose(),
							this.M.dispose();
					}
				}
				(e.$zib = T),
					Ne([r.$ei], T.prototype, "onMouseClick", null),
					Ne([r.$ei], T.prototype, "onMouseDblClick", null),
					Ne([r.$ei], T.prototype, "onMouseMiddleClick", null),
					Ne([r.$ei], T.prototype, "onMouseUp", null),
					Ne([r.$ei], T.prototype, "onMouseDown", null),
					Ne([r.$ei], T.prototype, "onMouseOver", null),
					Ne([r.$ei], T.prototype, "onMouseMove", null),
					Ne([r.$ei], T.prototype, "onMouseOut", null),
					Ne([r.$ei], T.prototype, "onContextMenu", null),
					Ne([r.$ei], T.prototype, "onTouchStart", null),
					Ne([r.$ei], T.prototype, "onTap", null);
			},
		),
		