import '../../../../../require.js';
import '../../../../../exports.js';
import '../sash/sash.js';
import '../../../common/arrays.js';
import '../../../common/lifecycle.js';
import './gridview.js';
import './gridview.js';
import '../../../../css!vs/base/browser/ui/grid/gridview.js';
define(
			de[759],
			he([1, 0, 277, 24, 3, 1579, 1579, 1511]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cob =
						e.Grid =
						e.Sizing =
						e.Direction =
						e.orthogonal =
						e.Orientation =
						e.LayoutPriority =
							void 0),
					(e.$zob = r),
					(e.$Aob = p),
					(e.$Dob = $),
					(e.$Eob = I),
					Object.defineProperty(e, "LayoutPriority", {
						enumerable: !0,
						get: function () {
							return C.LayoutPriority;
						},
					}),
					Object.defineProperty(e, "Orientation", {
						enumerable: !0,
						get: function () {
							return C.Orientation;
						},
					}),
					Object.defineProperty(e, "orthogonal", {
						enumerable: !0,
						get: function () {
							return C.$wob;
						},
					});
				var d;
				(function (T) {
					(T[(T.Up = 0)] = "Up"),
						(T[(T.Down = 1)] = "Down"),
						(T[(T.Left = 2)] = "Left"),
						(T[(T.Right = 3)] = "Right");
				})(d || (e.Direction = d = {}));
				function m(T) {
					switch (T) {
						case d.Up:
							return d.Down;
						case d.Down:
							return d.Up;
						case d.Left:
							return d.Right;
						case d.Right:
							return d.Left;
					}
				}
				function r(T) {
					return !!T.children;
				}
				function u(T, P) {
					if (P.length === 0) return T;
					if (!r(T)) throw new Error("Invalid location");
					const [k, ...L] = P;
					return u(T.children[k], L);
				}
				function a(T, P) {
					return !(T.start >= P.end || P.start >= T.end);
				}
				function h(T, P) {
					const k = g(P),
						L =
							P === d.Up
								? T.top
								: P === d.Right
									? T.left + T.width
									: P === d.Down
										? T.top + T.height
										: T.left,
						D = {
							start: k === t.Orientation.HORIZONTAL ? T.top : T.left,
							end:
								k === t.Orientation.HORIZONTAL
									? T.top + T.height
									: T.left + T.width,
						};
					return { offset: L, range: D };
				}
				function c(T, P, k) {
					const L = [];
					function D(M, N, A) {
						if (r(M)) for (const R of M.children) D(R, N, A);
						else {
							const { offset: R, range: O } = h(M.box, N);
							R === A.offset && a(O, A.range) && L.push(M);
						}
					}
					return D(T, P, k), L;
				}
				function n(T, P) {
					return P.length % 2 === 0 ? (0, E.$wob)(T) : T;
				}
				function g(T) {
					return T === d.Up || T === d.Down
						? t.Orientation.VERTICAL
						: t.Orientation.HORIZONTAL;
				}
				function p(T, P, k) {
					const L = n(T, P),
						D = g(k);
					if (L === D) {
						let [M, N] = (0, i.$xb)(P);
						return (k === d.Right || k === d.Down) && (N += 1), [...M, N];
					} else {
						const M = k === d.Right || k === d.Down ? 1 : 0;
						return [...P, M];
					}
				}
				function o(T) {
					const P = T.parentElement;
					if (!P) throw new Error("Invalid grid element");
					let k = P.firstElementChild,
						L = 0;
					for (; k !== T && k !== P.lastElementChild && k; )
						(k = k.nextElementSibling), L++;
					return L;
				}
				function f(T) {
					const P = T.parentElement;
					if (!P) throw new Error("Invalid grid element");
					if (/\bmonaco-grid-view\b/.test(P.className)) return [];
					const k = o(P),
						L = P.parentElement.parentElement.parentElement.parentElement;
					return [...f(L), k];
				}
				var b;
				(function (T) {
					(T.Distribute = { type: "distribute" }),
						(T.Split = { type: "split" }),
						(T.Auto = { type: "auto" });
					function P(k) {
						return { type: "invisible", cachedVisibleSize: k };
					}
					T.Invisible = P;
				})(b || (e.Sizing = b = {}));
				class s extends w.$1c {
					get orientation() {
						return this.a.orientation;
					}
					set orientation(P) {
						this.a.orientation = P;
					}
					get width() {
						return this.a.width;
					}
					get height() {
						return this.a.height;
					}
					get minimumWidth() {
						return this.a.minimumWidth;
					}
					get minimumHeight() {
						return this.a.minimumHeight;
					}
					get maximumWidth() {
						return this.a.maximumWidth;
					}
					get maximumHeight() {
						return this.a.maximumHeight;
					}
					get boundarySashes() {
						return this.a.boundarySashes;
					}
					set boundarySashes(P) {
						this.a.boundarySashes = P;
					}
					set edgeSnapping(P) {
						this.a.edgeSnapping = P;
					}
					get element() {
						return this.a.element;
					}
					constructor(P, k = {}) {
						super(),
							(this.b = new Map()),
							(this.f = !1),
							P instanceof E.$yob
								? ((this.a = P), this.a.getViewMap(this.b))
								: (this.a = new E.$yob(k)),
							this.D(this.a),
							this.D(this.a.onDidSashReset(this.m, this)),
							P instanceof E.$yob || this.h(P, 0, [0]),
							(this.onDidChange = this.a.onDidChange),
							(this.onDidScroll = this.a.onDidScroll),
							(this.onDidChangeViewMaximized = this.a.onDidChangeViewMaximized);
					}
					style(P) {
						this.a.style(P);
					}
					layout(P, k, L = 0, D = 0) {
						this.a.layout(P, k, L, D), (this.f = !0);
					}
					addView(P, k, L, D) {
						if (this.b.has(P)) throw new Error("Can't add same view twice");
						const M = g(D);
						this.b.size === 1 &&
							this.orientation !== M &&
							(this.orientation = M);
						const N = this.j(L),
							A = p(this.a.orientation, N, D);
						let R;
						if (typeof k == "number") R = k;
						else if (k.type === "split") {
							const [, O] = (0, i.$xb)(N);
							R = E.Sizing.Split(O);
						} else if (k.type === "distribute") R = E.Sizing.Distribute;
						else if (k.type === "auto") {
							const [, O] = (0, i.$xb)(N);
							R = E.Sizing.Auto(O);
						} else R = k;
						this.h(P, R, A);
					}
					g(P, k, L) {
						if (this.b.has(P)) throw new Error("Can't add same view twice");
						let D;
						typeof k == "number"
							? (D = k)
							: k.type === "distribute"
								? (D = E.Sizing.Distribute)
								: (D = k),
							this.h(P, D, L);
					}
					h(P, k, L) {
						this.b.set(P, P.element), this.a.addView(P, k, L);
					}
					removeView(P, k) {
						if (this.b.size === 1) throw new Error("Can't remove last view");
						const L = this.j(P);
						let D;
						if (k?.type === "distribute") D = E.Sizing.Distribute;
						else if (k?.type === "auto") {
							const M = L[L.length - 1];
							D = E.Sizing.Auto(M === 0 ? 1 : M - 1);
						}
						this.a.removeView(L, D), this.b.delete(P);
					}
					moveView(P, k, L, D) {
						const M = this.j(P),
							[N, A] = (0, i.$xb)(M),
							R = this.j(L),
							O = p(this.a.orientation, R, D),
							[B, U] = (0, i.$xb)(O);
						(0, i.$yb)(N, B)
							? this.a.moveView(N, A, U)
							: (this.removeView(P, typeof k == "number" ? void 0 : k),
								this.addView(P, k, L, D));
					}
					moveViewTo(P, k) {
						const L = this.j(P),
							[D, M] = (0, i.$xb)(L),
							[N, A] = (0, i.$xb)(k);
						if ((0, i.$yb)(D, N)) this.a.moveView(D, M, A);
						else {
							const R = this.getViewSize(P),
								O = n(this.a.orientation, L),
								B = this.getViewCachedVisibleSize(P),
								U =
									typeof B > "u"
										? O === t.Orientation.HORIZONTAL
											? R.width
											: R.height
										: b.Invisible(B);
							this.removeView(P), this.g(P, U, k);
						}
					}
					swapViews(P, k) {
						const L = this.j(P),
							D = this.j(k);
						return this.a.swapViews(L, D);
					}
					resizeView(P, k) {
						const L = this.j(P);
						return this.a.resizeView(L, k);
					}
					isViewExpanded(P) {
						const k = this.j(P);
						return this.a.isViewExpanded(k);
					}
					isViewMaximized(P) {
						const k = this.j(P);
						return this.a.isViewMaximized(k);
					}
					hasMaximizedView() {
						return this.a.hasMaximizedView();
					}
					getViewSize(P) {
						if (!P) return this.a.getViewSize();
						const k = this.j(P);
						return this.a.getViewSize(k);
					}
					getViewCachedVisibleSize(P) {
						const k = this.j(P);
						return this.a.getViewCachedVisibleSize(k);
					}
					maximizeView(P) {
						if (this.b.size < 2)
							throw new Error(
								"At least two views are required to maximize a view",
							);
						const k = this.j(P);
						this.a.maximizeView(k);
					}
					exitMaximizedView() {
						this.a.exitMaximizedView();
					}
					expandView(P) {
						const k = this.j(P);
						this.a.expandView(k);
					}
					distributeViewSizes() {
						this.a.distributeViewSizes();
					}
					isViewVisible(P) {
						const k = this.j(P);
						return this.a.isViewVisible(k);
					}
					setViewVisible(P, k) {
						const L = this.j(P);
						this.a.setViewVisible(L, k);
					}
					getViews() {
						return this.a.getView();
					}
					getNeighborViews(P, k, L = !1) {
						if (!this.f)
							throw new Error(
								"Can't call getNeighborViews before first layout",
							);
						const D = this.j(P),
							M = this.getViews(),
							N = u(M, D);
						let A = h(N.box, k);
						return (
							L &&
								(k === d.Up && N.box.top === 0
									? (A = { offset: M.box.top + M.box.height, range: A.range })
									: k === d.Right && N.box.left + N.box.width === M.box.width
										? (A = { offset: 0, range: A.range })
										: k === d.Down && N.box.top + N.box.height === M.box.height
											? (A = { offset: 0, range: A.range })
											: k === d.Left &&
												N.box.left === 0 &&
												(A = {
													offset: M.box.left + M.box.width,
													range: A.range,
												})),
							c(M, m(k), A).map((R) => R.view)
						);
					}
					j(P) {
						const k = this.b.get(P);
						if (!k) throw new Error("View not found");
						return f(k);
					}
					m(P) {
						const k = (M) => {
							const N = this.a.getView(M);
							if (r(N)) return !1;
							const A = n(this.orientation, M),
								R =
									A === t.Orientation.HORIZONTAL
										? N.view.preferredWidth
										: N.view.preferredHeight;
							if (typeof R != "number") return !1;
							const O =
								A === t.Orientation.HORIZONTAL
									? { width: Math.round(R) }
									: { height: Math.round(R) };
							return this.a.resizeView(M, O), !0;
						};
						if (k(P)) return;
						const [L, D] = (0, i.$xb)(P);
						k([...L, D + 1]) || this.a.distributeViewSizes(L);
					}
				}
				e.Grid = s;
				class l extends s {
					constructor() {
						super(...arguments), (this.q = !0);
					}
					static n(P, k) {
						const L = k === t.Orientation.VERTICAL ? P.box.width : P.box.height;
						if (!r(P)) {
							const M = { type: "leaf", data: P.view.toJSON(), size: L };
							return (
								typeof P.cachedVisibleSize == "number"
									? ((M.size = P.cachedVisibleSize), (M.visible = !1))
									: P.maximized && (M.maximized = !0),
								M
							);
						}
						const D = P.children.map((M) => l.n(M, (0, E.$wob)(k)));
						return D.some((M) => M.visible !== !1)
							? { type: "branch", data: D, size: L }
							: { type: "branch", data: D, size: L, visible: !1 };
					}
					static deserialize(P, k, L = {}) {
						if (typeof P.orientation != "number")
							throw new Error(
								"Invalid JSON: 'orientation' property must be a number.",
							);
						if (typeof P.width != "number")
							throw new Error(
								"Invalid JSON: 'width' property must be a number.",
							);
						if (typeof P.height != "number")
							throw new Error(
								"Invalid JSON: 'height' property must be a number.",
							);
						const D = E.$yob.deserialize(P, k, L);
						return new l(D, L);
					}
					static from(P, k = {}) {
						return l.deserialize(I(P), { fromJSON: (L) => L }, k);
					}
					serialize() {
						return {
							root: l.n(this.getViews(), this.orientation),
							orientation: this.orientation,
							width: this.width,
							height: this.height,
						};
					}
					layout(P, k, L = 0, D = 0) {
						super.layout(P, k, L, D),
							this.q && ((this.q = !1), this.a.trySet2x2());
					}
				}
				e.$Cob = l;
				function y(T) {
					return !!T.groups;
				}
				function $(T, P) {
					if (
						(!P && T.groups && T.groups.length <= 1 && (T.groups = void 0),
						!y(T))
					)
						return;
					let k = 0,
						L = 0;
					for (const A of T.groups) $(A, !1), A.size && ((k += A.size), L++);
					const D = L > 0 ? k : 1,
						M = T.groups.length - L,
						N = D / M;
					for (const A of T.groups) A.size || (A.size = N);
				}
				function v(T) {
					return y(T)
						? { type: "branch", data: T.groups.map((P) => v(P)), size: T.size }
						: { type: "leaf", data: T.data, size: T.size };
				}
				function S(T, P) {
					if (T.type === "branch") {
						const k = T.data.map((L) => S(L, (0, E.$wob)(P)));
						if (P === t.Orientation.VERTICAL) {
							const L =
									T.size ||
									(k.length === 0
										? void 0
										: Math.max(...k.map((M) => M.width || 0))),
								D =
									k.length === 0
										? void 0
										: k.reduce((M, N) => M + (N.height || 0), 0);
							return { width: L, height: D };
						} else {
							const L =
									k.length === 0
										? void 0
										: k.reduce((M, N) => M + (N.width || 0), 0),
								D =
									T.size ||
									(k.length === 0
										? void 0
										: Math.max(...k.map((M) => M.height || 0)));
							return { width: L, height: D };
						}
					} else {
						const k = P === t.Orientation.VERTICAL ? T.size : void 0,
							L = P === t.Orientation.VERTICAL ? void 0 : T.size;
						return { width: k, height: L };
					}
				}
				function I(T) {
					$(T, !0);
					const P = v(T),
						{ width: k, height: L } = S(P, T.orientation);
					return {
						root: P,
						orientation: T.orientation,
						width: k || 1,
						height: L || 1,
					};
				}
			},
		),
		