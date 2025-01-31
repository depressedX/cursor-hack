import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../sash/sash.js';
import '../splitview/splitview.js';
import '../../../common/arrays.js';
import '../../../common/color.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/numbers.js';
import '../../../common/types.js';
import '../sash/sash.js';
import '../splitview/splitview.js';
import '../../../../css!vs/base/browser/ui/grid/gridview.js';
define(
			de[1579],
			he([1, 0, 7, 277, 279, 24, 97, 6, 3, 201, 28, 277, 279, 1511]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*sash*/,
 w /*splitview*/,
 E /*arrays*/,
 C /*color*/,
 d /*event*/,
 m /*lifecycle*/,
 r /*numbers*/,
 u /*types*/,
 a /*sash*/,
 h /*splitview*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yob = e.Sizing = e.LayoutPriority = e.Orientation = void 0),
					(e.$wob = n),
					(e.$xob = g),
					Object.defineProperty(e, "Orientation", {
						enumerable: !0,
						get: function () {
							return a.Orientation;
						},
					}),
					Object.defineProperty(e, "LayoutPriority", {
						enumerable: !0,
						get: function () {
							return h.LayoutPriority;
						},
					}),
					Object.defineProperty(e, "Sizing", {
						enumerable: !0,
						get: function () {
							return h.Sizing;
						},
					});
				const c = { separatorBorder: C.$UL.transparent };
				function n(S) {
					return S === i.Orientation.VERTICAL
						? i.Orientation.HORIZONTAL
						: i.Orientation.VERTICAL;
				}
				function g(S) {
					return !!S.children;
				}
				class p {
					constructor(I) {
						this.isLayoutEnabled = I;
					}
				}
				function o(S, I) {
					return I === i.Orientation.HORIZONTAL
						? {
								left: S.start,
								right: S.end,
								top: S.orthogonalStart,
								bottom: S.orthogonalEnd,
							}
						: {
								top: S.start,
								bottom: S.end,
								left: S.orthogonalStart,
								right: S.orthogonalEnd,
							};
				}
				function f(S, I) {
					return I === i.Orientation.HORIZONTAL
						? {
								start: S.left,
								end: S.right,
								orthogonalStart: S.top,
								orthogonalEnd: S.bottom,
							}
						: {
								start: S.top,
								end: S.bottom,
								orthogonalStart: S.left,
								orthogonalEnd: S.right,
							};
				}
				function b(S, I) {
					if (Math.abs(S) > I) throw new Error("Invalid index");
					return (0, r.rot)(S, I + 1);
				}
				class s {
					get size() {
						return this.b;
					}
					get orthogonalSize() {
						return this.d;
					}
					get absoluteOffset() {
						return this.f;
					}
					get absoluteOrthogonalOffset() {
						return this.g;
					}
					get styles() {
						return this.j;
					}
					get width() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.size
							: this.orthogonalSize;
					}
					get height() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.orthogonalSize
							: this.size;
					}
					get top() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.f
							: this.g;
					}
					get left() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.g
							: this.f;
					}
					get minimumSize() {
						return this.children.length === 0
							? 0
							: Math.max(
									...this.children.map((I, T) =>
										this.a.isViewVisible(T) ? I.minimumOrthogonalSize : 0,
									),
								);
					}
					get maximumSize() {
						return Math.min(
							...this.children.map((I, T) =>
								this.a.isViewVisible(T)
									? I.maximumOrthogonalSize
									: Number.POSITIVE_INFINITY,
							),
						);
					}
					get priority() {
						if (this.children.length === 0) return w.LayoutPriority.Normal;
						const I = this.children.map((T) =>
							typeof T.priority > "u" ? w.LayoutPriority.Normal : T.priority,
						);
						return I.some((T) => T === w.LayoutPriority.High)
							? w.LayoutPriority.High
							: I.some((T) => T === w.LayoutPriority.Low)
								? w.LayoutPriority.Low
								: w.LayoutPriority.Normal;
					}
					get proportionalLayout() {
						return this.children.length === 0
							? !0
							: this.children.every((I) => I.proportionalLayout);
					}
					get minimumOrthogonalSize() {
						return this.a.minimumSize;
					}
					get maximumOrthogonalSize() {
						return this.a.maximumSize;
					}
					get minimumWidth() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.minimumOrthogonalSize
							: this.minimumSize;
					}
					get minimumHeight() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.minimumSize
							: this.minimumOrthogonalSize;
					}
					get maximumWidth() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.maximumOrthogonalSize
							: this.maximumSize;
					}
					get maximumHeight() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.maximumSize
							: this.maximumOrthogonalSize;
					}
					get boundarySashes() {
						return this.u;
					}
					set boundarySashes(I) {
						if (
							!(
								this.u.start === I.start &&
								this.u.end === I.end &&
								this.u.orthogonalStart === I.orthogonalStart &&
								this.u.orthogonalEnd === I.orthogonalEnd
							)
						) {
							(this.u = I),
								(this.a.orthogonalStartSash = I.orthogonalStart),
								(this.a.orthogonalEndSash = I.orthogonalEnd);
							for (let T = 0; T < this.children.length; T++) {
								const P = this.children[T],
									k = T === 0,
									L = T === this.children.length - 1;
								P.boundarySashes = {
									start: I.orthogonalStart,
									end: I.orthogonalEnd,
									orthogonalStart: k
										? I.start
										: P.boundarySashes.orthogonalStart,
									orthogonalEnd: L ? I.end : P.boundarySashes.orthogonalEnd,
								};
							}
						}
					}
					get edgeSnapping() {
						return this.v;
					}
					set edgeSnapping(I) {
						if (this.v !== I) {
							this.v = I;
							for (const T of this.children)
								T instanceof s && (T.edgeSnapping = I);
							this.z();
						}
					}
					constructor(I, T, P, k, L = 0, D = 0, M = !1, N) {
						if (
							((this.orientation = I),
							(this.layoutController = T),
							(this.splitviewProportionalLayout = k),
							(this.children = []),
							(this.f = 0),
							(this.g = 0),
							(this.h = 0),
							(this.k = new d.$re()),
							(this.onDidChange = this.k.event),
							(this.l = new d.$re()),
							(this.onDidVisibilityChange = this.l.event),
							(this.m = new m.$Zc()),
							(this.n = new d.$re()),
							(this.o = m.$1c.None),
							(this.onDidScroll = this.n.event),
							(this.q = m.$1c.None),
							(this.r = new d.$re()),
							(this.onDidSashReset = this.r.event),
							(this.s = m.$1c.None),
							(this.t = m.$1c.None),
							(this.u = {}),
							(this.v = !1),
							(this.j = P),
							(this.b = L),
							(this.d = D),
							(this.element = (0, t.$)(".monaco-grid-branch-node")),
							!N)
						)
							(this.a = new w.$vob(this.element, {
								orientation: I,
								styles: P,
								proportionalLayout: k,
							})),
								this.a.layout(L, {
									orthogonalSize: D,
									absoluteOffset: 0,
									absoluteOrthogonalOffset: 0,
									absoluteSize: L,
									absoluteOrthogonalSize: D,
								});
						else {
							const R = {
									views: N.map((B) => ({
										view: B.node,
										size: B.node.size,
										visible: B.visible !== !1,
									})),
									size: this.orthogonalSize,
								},
								O = { proportionalLayout: k, orientation: I, styles: P };
							(this.children = N.map((B) => B.node)),
								(this.a = new w.$vob(this.element, { ...O, descriptor: R })),
								this.children.forEach((B, U) => {
									const z = U === 0,
										F = U === this.children.length;
									B.boundarySashes = {
										start: this.boundarySashes.orthogonalStart,
										end: this.boundarySashes.orthogonalEnd,
										orthogonalStart: z
											? this.boundarySashes.start
											: this.a.sashes[U - 1],
										orthogonalEnd: F
											? this.boundarySashes.end
											: this.a.sashes[U],
									};
								});
						}
						const A = d.Event.map(this.a.onDidSashReset, (R) => [R]);
						(this.s = A(this.r.fire, this.r)), this.y();
					}
					style(I) {
						(this.j = I), this.a.style(I);
						for (const T of this.children) T instanceof s && T.style(I);
					}
					layout(I, T, P) {
						if (this.layoutController.isLayoutEnabled) {
							if (typeof P > "u") throw new Error("Invalid state");
							(this.b = P.orthogonalSize),
								(this.d = I),
								(this.f = P.absoluteOffset + T),
								(this.g = P.absoluteOrthogonalOffset),
								(this.h = P.absoluteOrthogonalSize),
								this.a.layout(P.orthogonalSize, {
									orthogonalSize: I,
									absoluteOffset: this.g,
									absoluteOrthogonalOffset: this.f,
									absoluteSize: P.absoluteOrthogonalSize,
									absoluteOrthogonalSize: P.absoluteSize,
								}),
								this.z();
						}
					}
					setVisible(I) {
						for (const T of this.children) T.setVisible(I);
					}
					addChild(I, T, P, k) {
						(P = b(P, this.children.length)),
							this.a.addView(I, T, P, k),
							this.children.splice(P, 0, I),
							this.w(),
							this.x();
					}
					removeChild(I, T) {
						I = b(I, this.children.length);
						const P = this.a.removeView(I, T);
						return this.children.splice(I, 1), this.w(), this.x(), P;
					}
					removeAllChildren() {
						const I = this.a.removeAllViews();
						return (
							this.children.splice(0, this.children.length),
							this.w(),
							this.x(),
							I
						);
					}
					moveChild(I, T) {
						(I = b(I, this.children.length)),
							(T = b(T, this.children.length)),
							I !== T &&
								(I < T && (T -= 1),
								this.a.moveView(I, T),
								this.children.splice(T, 0, this.children.splice(I, 1)[0]),
								this.w(),
								this.x());
					}
					swapChildren(I, T) {
						(I = b(I, this.children.length)),
							(T = b(T, this.children.length)),
							I !== T &&
								(this.a.swapViews(I, T),
								([
									this.children[I].boundarySashes,
									this.children[T].boundarySashes,
								] = [
									this.children[I].boundarySashes,
									this.children[T].boundarySashes,
								]),
								([this.children[I], this.children[T]] = [
									this.children[T],
									this.children[I],
								]),
								this.x());
					}
					resizeChild(I, T) {
						(I = b(I, this.children.length)), this.a.resizeView(I, T);
					}
					isChildExpanded(I) {
						return this.a.isViewExpanded(I);
					}
					distributeViewSizes(I = !1) {
						if ((this.a.distributeViewSizes(), I))
							for (const T of this.children)
								T instanceof s && T.distributeViewSizes(!0);
					}
					getChildSize(I) {
						return (I = b(I, this.children.length)), this.a.getViewSize(I);
					}
					isChildVisible(I) {
						return (I = b(I, this.children.length)), this.a.isViewVisible(I);
					}
					setChildVisible(I, T) {
						if (
							((I = b(I, this.children.length)), this.a.isViewVisible(I) === T)
						)
							return;
						const P = this.a.contentSize === 0;
						this.a.setViewVisible(I, T);
						const k = this.a.contentSize === 0;
						((T && P) || (!T && k)) && this.l.fire(T);
					}
					getChildCachedVisibleSize(I) {
						return (
							(I = b(I, this.children.length)),
							this.a.getViewCachedVisibleSize(I)
						);
					}
					w() {
						for (let I = 0; I < this.children.length; I++)
							this.children[I].boundarySashes = {
								start: this.boundarySashes.orthogonalStart,
								end: this.boundarySashes.orthogonalEnd,
								orthogonalStart:
									I === 0 ? this.boundarySashes.start : this.a.sashes[I - 1],
								orthogonalEnd:
									I === this.children.length - 1
										? this.boundarySashes.end
										: this.a.sashes[I],
							};
					}
					x() {
						this.y(), this.k.fire(void 0);
					}
					y() {
						const I = d.Event.map(
							d.Event.any(...this.children.map((k) => k.onDidChange)),
							() => {},
						);
						this.q.dispose(), (this.q = I(this.k.fire, this.k));
						const T = d.Event.any(
							...this.children.map((k, L) =>
								d.Event.map(k.onDidSashReset, (D) => [L, ...D]),
							),
						);
						this.t.dispose(), (this.t = T(this.r.fire, this.r));
						const P = d.Event.any(
							d.Event.signal(this.a.onDidScroll),
							...this.children.map((k) => k.onDidScroll),
						);
						this.o.dispose(),
							(this.o = P(this.n.fire, this.n)),
							this.m.clear(),
							this.children.forEach((k, L) => {
								k instanceof s &&
									this.m.add(
										k.onDidVisibilityChange((D) => {
											this.setChildVisible(L, D);
										}),
									);
							});
					}
					trySet2x2(I) {
						if (
							this.children.length !== 2 ||
							I.children.length !== 2 ||
							this.getChildSize(0) !== I.getChildSize(0)
						)
							return m.$1c.None;
						const [T, P] = this.children,
							[k, L] = I.children;
						if (
							!(T instanceof y) ||
							!(P instanceof y) ||
							!(k instanceof y) ||
							!(L instanceof y)
						)
							return m.$1c.None;
						this.orientation === i.Orientation.VERTICAL
							? ((P.linkedWidthNode = k.linkedHeightNode = T),
								(T.linkedWidthNode = L.linkedHeightNode = P),
								(L.linkedWidthNode = T.linkedHeightNode = k),
								(k.linkedWidthNode = P.linkedHeightNode = L))
							: ((k.linkedWidthNode = P.linkedHeightNode = T),
								(L.linkedWidthNode = T.linkedHeightNode = P),
								(T.linkedWidthNode = L.linkedHeightNode = k),
								(P.linkedWidthNode = k.linkedHeightNode = L));
						const D = this.a.sashes[0],
							M = I.a.sashes[0];
						return (
							(D.linkedSash = M),
							(M.linkedSash = D),
							this.k.fire(void 0),
							I.k.fire(void 0),
							(0, m.$Yc)(() => {
								(D.linkedSash = M.linkedSash = void 0),
									(T.linkedHeightNode = T.linkedWidthNode = void 0),
									(P.linkedHeightNode = P.linkedWidthNode = void 0),
									(k.linkedHeightNode = k.linkedWidthNode = void 0),
									(L.linkedHeightNode = L.linkedWidthNode = void 0);
							})
						);
					}
					z() {
						(this.a.startSnappingEnabled = this.v || this.g > 0),
							(this.a.endSnappingEnabled = this.v || this.g + this.b < this.h);
					}
					dispose() {
						for (const I of this.children) I.dispose();
						this.k.dispose(),
							this.r.dispose(),
							this.l.dispose(),
							this.m.dispose(),
							this.s.dispose(),
							this.t.dispose(),
							this.q.dispose(),
							this.o.dispose(),
							this.a.dispose();
					}
				}
				function l(S) {
					const [I, T] = d.Event.split(S.onDidChange, u.$sg);
					return d.Event.any(
						T,
						d.Event.map(
							d.Event.latch(
								d.Event.map(I, (P) => [
									S.minimumWidth,
									S.maximumWidth,
									S.minimumHeight,
									S.maximumHeight,
								]),
								E.$yb,
							),
							(P) => {},
						),
					);
				}
				class y {
					get size() {
						return this.a;
					}
					get orthogonalSize() {
						return this.b;
					}
					get linkedWidthNode() {
						return this.h;
					}
					set linkedWidthNode(I) {
						(this.g.input = I ? I.m : d.Event.None),
							(this.h = I),
							this.l.fire(void 0);
					}
					get linkedHeightNode() {
						return this.k;
					}
					set linkedHeightNode(I) {
						(this.j.input = I ? I.m : d.Event.None),
							(this.k = I),
							this.l.fire(void 0);
					}
					constructor(I, T, P, k, L = 0) {
						(this.view = I),
							(this.orientation = T),
							(this.layoutController = P),
							(this.a = 0),
							(this.d = 0),
							(this.f = 0),
							(this.onDidScroll = d.Event.None),
							(this.onDidSashReset = d.Event.None),
							(this.g = new d.$Ae()),
							(this.h = void 0),
							(this.j = new d.$Ae()),
							(this.k = void 0),
							(this.l = new d.$re()),
							(this.n = new m.$Zc()),
							(this.t = {}),
							(this.u = 0),
							(this.v = 0),
							(this.w = 0),
							(this.x = 0),
							(this.b = k),
							(this.a = L);
						const D = l(I);
						(this.m = d.Event.map(
							D,
							(M) =>
								M &&
								(this.orientation === i.Orientation.VERTICAL
									? M.width
									: M.height),
							this.n,
						)),
							(this.onDidChange = d.Event.any(
								this.m,
								this.l.event,
								this.g.event,
								this.j.event,
							));
					}
					get width() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.orthogonalSize
							: this.size;
					}
					get height() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.size
							: this.orthogonalSize;
					}
					get top() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.d
							: this.f;
					}
					get left() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.f
							: this.d;
					}
					get element() {
						return this.view.element;
					}
					get o() {
						return this.linkedWidthNode
							? Math.max(
									this.linkedWidthNode.view.minimumWidth,
									this.view.minimumWidth,
								)
							: this.view.minimumWidth;
					}
					get q() {
						return this.linkedWidthNode
							? Math.min(
									this.linkedWidthNode.view.maximumWidth,
									this.view.maximumWidth,
								)
							: this.view.maximumWidth;
					}
					get r() {
						return this.linkedHeightNode
							? Math.max(
									this.linkedHeightNode.view.minimumHeight,
									this.view.minimumHeight,
								)
							: this.view.minimumHeight;
					}
					get s() {
						return this.linkedHeightNode
							? Math.min(
									this.linkedHeightNode.view.maximumHeight,
									this.view.maximumHeight,
								)
							: this.view.maximumHeight;
					}
					get minimumSize() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.r
							: this.o;
					}
					get maximumSize() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.s
							: this.q;
					}
					get priority() {
						return this.view.priority;
					}
					get proportionalLayout() {
						return this.view.proportionalLayout ?? !0;
					}
					get snap() {
						return this.view.snap;
					}
					get minimumOrthogonalSize() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.o
							: this.r;
					}
					get maximumOrthogonalSize() {
						return this.orientation === i.Orientation.HORIZONTAL
							? this.q
							: this.s;
					}
					get boundarySashes() {
						return this.t;
					}
					set boundarySashes(I) {
						(this.t = I), this.view.setBoundarySashes?.(o(I, this.orientation));
					}
					layout(I, T, P) {
						if (this.layoutController.isLayoutEnabled) {
							if (typeof P > "u") throw new Error("Invalid state");
							(this.a = I),
								(this.b = P.orthogonalSize),
								(this.d = P.absoluteOffset + T),
								(this.f = P.absoluteOrthogonalOffset),
								this.y(this.width, this.height, this.top, this.left);
						}
					}
					y(I, T, P, k) {
						(this.u === I && this.v === T && this.w === P && this.x === k) ||
							((this.u = I),
							(this.v = T),
							(this.w = P),
							(this.x = k),
							this.view.layout(I, T, P, k));
					}
					setVisible(I) {
						this.view.setVisible?.(I);
					}
					dispose() {
						this.n.dispose();
					}
				}
				function $(S, I, T) {
					if (S instanceof s) {
						const P = new s(
							n(S.orientation),
							S.layoutController,
							S.styles,
							S.splitviewProportionalLayout,
							I,
							T,
							S.edgeSnapping,
						);
						let k = 0;
						for (let L = S.children.length - 1; L >= 0; L--) {
							const D = S.children[L],
								M = D instanceof s ? D.orthogonalSize : D.size;
							let N = S.size === 0 ? 0 : Math.round((I * M) / S.size);
							(k += N),
								L === 0 && (N += I - k),
								P.addChild($(D, T, N), N, 0, !0);
						}
						return S.dispose(), P;
					} else {
						const P = new y(S.view, n(S.orientation), S.layoutController, T);
						return S.dispose(), P;
					}
				}
				class v {
					get m() {
						return this.d;
					}
					set m(I) {
						const T = this.d;
						T && (T.element.remove(), T.dispose()),
							(this.d = I),
							this.element.appendChild(I.element),
							(this.f.input = I.onDidSashReset),
							(this.h.input = d.Event.map(I.onDidChange, () => {})),
							(this.g.input = I.onDidScroll);
					}
					get width() {
						return this.m.width;
					}
					get height() {
						return this.m.height;
					}
					get minimumWidth() {
						return this.m.minimumWidth;
					}
					get minimumHeight() {
						return this.m.minimumHeight;
					}
					get maximumWidth() {
						return this.m.maximumHeight;
					}
					get maximumHeight() {
						return this.m.maximumHeight;
					}
					get orientation() {
						return this.d.orientation;
					}
					get boundarySashes() {
						return this.j;
					}
					set orientation(I) {
						if (this.d.orientation === I) return;
						const {
							size: T,
							orthogonalSize: P,
							absoluteOffset: k,
							absoluteOrthogonalOffset: L,
						} = this.d;
						(this.m = $(this.d, P, T)),
							this.m.layout(T, 0, {
								orthogonalSize: P,
								absoluteOffset: L,
								absoluteOrthogonalOffset: k,
								absoluteSize: T,
								absoluteOrthogonalSize: P,
							}),
							(this.boundarySashes = this.boundarySashes);
					}
					set boundarySashes(I) {
						(this.j = I), (this.m.boundarySashes = f(I, this.orientation));
					}
					set edgeSnapping(I) {
						this.m.edgeSnapping = I;
					}
					constructor(I = {}) {
						(this.f = new d.$Ae()),
							(this.g = new d.$Ae()),
							(this.h = new d.$Ae()),
							(this.j = {}),
							(this.l = m.$1c.None),
							(this.onDidSashReset = this.f.event),
							(this.onDidScroll = this.g.event),
							(this.onDidChange = this.h.event),
							(this.n = void 0),
							(this.o = new d.$re()),
							(this.onDidChangeViewMaximized = this.o.event),
							(this.element = (0, t.$)(".monaco-grid-view")),
							(this.a = I.styles || c),
							(this.b =
								typeof I.proportionalLayout < "u"
									? !!I.proportionalLayout
									: !0),
							(this.k = new p(!1)),
							(this.m = new s(i.Orientation.VERTICAL, this.k, this.a, this.b));
					}
					style(I) {
						(this.a = I), this.m.style(I);
					}
					layout(I, T, P = 0, k = 0) {
						this.k.isLayoutEnabled = !0;
						const [L, D, M, N] =
							this.m.orientation === i.Orientation.HORIZONTAL
								? [T, I, P, k]
								: [I, T, k, P];
						this.m.layout(L, 0, {
							orthogonalSize: D,
							absoluteOffset: M,
							absoluteOrthogonalOffset: N,
							absoluteSize: L,
							absoluteOrthogonalSize: D,
						});
					}
					addView(I, T, P) {
						this.hasMaximizedView() && this.exitMaximizedView(),
							this.l.dispose(),
							(this.l = m.$1c.None);
						const [k, L] = (0, E.$xb)(P),
							[D, M] = this.t(k);
						if (M instanceof s) {
							const N = new y(I, n(M.orientation), this.k, M.orthogonalSize);
							try {
								M.addChild(N, T, L);
							} catch (A) {
								throw (N.dispose(), A);
							}
						} else {
							const [, N] = (0, E.$xb)(D),
								[, A] = (0, E.$xb)(k);
							let R = 0;
							const O = N.getChildCachedVisibleSize(A);
							typeof O == "number" && (R = w.Sizing.Invisible(O)),
								N.removeChild(A).dispose();
							const U = new s(
								M.orientation,
								M.layoutController,
								this.a,
								this.b,
								M.size,
								M.orthogonalSize,
								N.edgeSnapping,
							);
							N.addChild(U, M.size, A);
							const z = new y(M.view, N.orientation, this.k, M.size);
							U.addChild(z, R, 0),
								typeof T != "number" &&
									T.type === "split" &&
									(T = w.Sizing.Split(0));
							const F = new y(I, N.orientation, this.k, M.size);
							U.addChild(F, T, L);
						}
						this.trySet2x2();
					}
					removeView(I, T) {
						this.hasMaximizedView() && this.exitMaximizedView(),
							this.l.dispose(),
							(this.l = m.$1c.None);
						const [P, k] = (0, E.$xb)(I),
							[L, D] = this.t(P);
						if (!(D instanceof s)) throw new Error("Invalid location");
						const M = D.children[k];
						if (!(M instanceof y)) throw new Error("Invalid location");
						if ((D.removeChild(k, T), M.dispose(), D.children.length === 0))
							throw new Error("Invalid grid state");
						if (D.children.length > 1) return this.trySet2x2(), M.view;
						if (L.length === 0) {
							const U = D.children[0];
							return (
								U instanceof y ||
									(D.removeChild(0),
									D.dispose(),
									(this.m = U),
									(this.boundarySashes = this.boundarySashes),
									this.trySet2x2()),
								M.view
							);
						}
						const [, N] = (0, E.$xb)(L),
							[, A] = (0, E.$xb)(P),
							R = D.isChildVisible(0),
							O = D.removeChild(0),
							B = N.children.map((U, z) => N.getChildSize(z));
						if ((N.removeChild(A, T), D.dispose(), O instanceof s)) {
							B.splice(A, 1, ...O.children.map((z) => z.size));
							const U = O.removeAllChildren();
							for (let z = 0; z < U.length; z++)
								N.addChild(U[z], U[z].size, A + z);
						} else {
							const U = new y(O.view, n(O.orientation), this.k, O.size),
								z = R ? O.orthogonalSize : w.Sizing.Invisible(O.orthogonalSize);
							N.addChild(U, z, A);
						}
						O.dispose();
						for (let U = 0; U < B.length; U++) N.resizeChild(U, B[U]);
						return this.trySet2x2(), M.view;
					}
					moveView(I, T, P) {
						this.hasMaximizedView() && this.exitMaximizedView();
						const [, k] = this.t(I);
						if (!(k instanceof s)) throw new Error("Invalid location");
						k.moveChild(T, P), this.trySet2x2();
					}
					swapViews(I, T) {
						this.hasMaximizedView() && this.exitMaximizedView();
						const [P, k] = (0, E.$xb)(I),
							[, L] = this.t(P);
						if (!(L instanceof s)) throw new Error("Invalid from location");
						const D = L.getChildSize(k),
							M = L.children[k];
						if (!(M instanceof y)) throw new Error("Invalid from location");
						const [N, A] = (0, E.$xb)(T),
							[, R] = this.t(N);
						if (!(R instanceof s)) throw new Error("Invalid to location");
						const O = R.getChildSize(A),
							B = R.children[A];
						if (!(B instanceof y)) throw new Error("Invalid to location");
						L === R
							? L.swapChildren(k, A)
							: (L.removeChild(k),
								R.removeChild(A),
								L.addChild(B, D, k),
								R.addChild(M, O, A)),
							this.trySet2x2();
					}
					resizeView(I, T) {
						this.hasMaximizedView() && this.exitMaximizedView();
						const [P, k] = (0, E.$xb)(I),
							[L, D] = this.t(P);
						if (!(D instanceof s)) throw new Error("Invalid location");
						if (!T.width && !T.height) return;
						const [M, N] =
							D.orientation === i.Orientation.HORIZONTAL
								? [T.width, T.height]
								: [T.height, T.width];
						if (typeof N == "number" && L.length > 0) {
							const [, A] = (0, E.$xb)(L),
								[, R] = (0, E.$xb)(P);
							A.resizeChild(R, N);
						}
						typeof M == "number" && D.resizeChild(k, M), this.trySet2x2();
					}
					getViewSize(I) {
						if (!I) return { width: this.m.width, height: this.m.height };
						const [, T] = this.t(I);
						return { width: T.width, height: T.height };
					}
					getViewCachedVisibleSize(I) {
						const [T, P] = (0, E.$xb)(I),
							[, k] = this.t(T);
						if (!(k instanceof s)) throw new Error("Invalid location");
						return k.getChildCachedVisibleSize(P);
					}
					expandView(I) {
						this.hasMaximizedView() && this.exitMaximizedView();
						const [T, P] = this.t(I);
						if (!(P instanceof y)) throw new Error("Invalid location");
						for (let k = 0; k < T.length; k++)
							T[k].resizeChild(I[k], Number.POSITIVE_INFINITY);
					}
					isViewExpanded(I) {
						if (this.hasMaximizedView()) return !1;
						const [T, P] = this.t(I);
						if (!(P instanceof y)) throw new Error("Invalid location");
						for (let k = 0; k < T.length; k++)
							if (!T[k].isChildExpanded(I[k])) return !1;
						return !0;
					}
					maximizeView(I) {
						const [, T] = this.t(I);
						if (!(T instanceof y))
							throw new Error("Location is not a LeafNode");
						if (this.n === T) return;
						this.hasMaximizedView() && this.exitMaximizedView();
						function P(k, L) {
							for (let D = 0; D < k.children.length; D++) {
								const M = k.children[D];
								M instanceof y ? M !== L && k.setChildVisible(D, !1) : P(M, L);
							}
						}
						P(this.m, T), (this.n = T), this.o.fire(!0);
					}
					exitMaximizedView() {
						if (!this.n) return;
						this.n = void 0;
						function I(T) {
							for (let P = T.children.length - 1; P >= 0; P--) {
								const k = T.children[P];
								k instanceof y ? T.setChildVisible(P, !0) : I(k);
							}
						}
						I(this.m), this.o.fire(!1);
					}
					hasMaximizedView() {
						return this.n !== void 0;
					}
					isViewMaximized(I) {
						const [, T] = this.t(I);
						if (!(T instanceof y))
							throw new Error("Location is not a LeafNode");
						return T === this.n;
					}
					distributeViewSizes(I) {
						if ((this.hasMaximizedView() && this.exitMaximizedView(), !I)) {
							this.m.distributeViewSizes(!0);
							return;
						}
						const [, T] = this.t(I);
						if (!(T instanceof s)) throw new Error("Invalid location");
						T.distributeViewSizes(), this.trySet2x2();
					}
					isViewVisible(I) {
						const [T, P] = (0, E.$xb)(I),
							[, k] = this.t(T);
						if (!(k instanceof s)) throw new Error("Invalid from location");
						return k.isChildVisible(P);
					}
					setViewVisible(I, T) {
						if (this.hasMaximizedView()) {
							this.exitMaximizedView();
							return;
						}
						const [P, k] = (0, E.$xb)(I),
							[, L] = this.t(P);
						if (!(L instanceof s)) throw new Error("Invalid from location");
						L.setChildVisible(k, T);
					}
					getView(I) {
						const T = I ? this.t(I)[1] : this.d;
						return this.s(T, this.orientation);
					}
					static deserialize(I, T, P = {}) {
						if (typeof I.orientation != "number")
							throw new Error(
								"Invalid JSON: 'orientation' property must be a number.",
							);
						if (typeof I.width != "number")
							throw new Error(
								"Invalid JSON: 'width' property must be a number.",
							);
						if (typeof I.height != "number")
							throw new Error(
								"Invalid JSON: 'height' property must be a number.",
							);
						if (I.root?.type !== "branch")
							throw new Error(
								"Invalid JSON: 'root' property must have 'type' value of branch.",
							);
						const k = I.orientation,
							L = I.height,
							D = new v(P);
						return D.q(I.root, k, T, L), D;
					}
					q(I, T, P, k) {
						this.m = this.r(I, T, P, k);
					}
					r(I, T, P, k) {
						let L;
						if (I.type === "branch") {
							const M = I.data.map((N) => ({
								node: this.r(N, n(T), P, I.size),
								visible: N.visible,
							}));
							L = new s(T, this.k, this.a, this.b, I.size, k, void 0, M);
						} else
							(L = new y(P.fromJSON(I.data), T, this.k, k, I.size)),
								I.maximized && !this.n && ((this.n = L), this.o.fire(!0));
						return L;
					}
					s(I, T, P) {
						const k = {
							top: I.top,
							left: I.left,
							width: I.width,
							height: I.height,
						};
						if (I instanceof y)
							return {
								view: I.view,
								box: k,
								cachedVisibleSize: P,
								maximized: this.n === I,
							};
						const L = [];
						for (let D = 0; D < I.children.length; D++) {
							const M = I.children[D],
								N = I.getChildCachedVisibleSize(D);
							L.push(this.s(M, n(T), N));
						}
						return { children: L, box: k };
					}
					t(I, T = this.m, P = []) {
						if (I.length === 0) return [P, T];
						if (!(T instanceof s)) throw new Error("Invalid location");
						const [k, ...L] = I;
						if (k < 0 || k >= T.children.length)
							throw new Error("Invalid location");
						const D = T.children[k];
						return P.push(T), this.t(L, D, P);
					}
					trySet2x2() {
						if (
							(this.l.dispose(),
							(this.l = m.$1c.None),
							this.m.children.length !== 2)
						)
							return;
						const [I, T] = this.m.children;
						!(I instanceof s) || !(T instanceof s) || (this.l = I.trySet2x2(T));
					}
					getViewMap(I, T) {
						T || (T = this.m),
							T instanceof s
								? T.children.forEach((P) => this.getViewMap(I, P))
								: I.set(T.view, T.element);
					}
					dispose() {
						this.f.dispose(), this.m.dispose(), this.element.remove();
					}
				}
				e.$yob = v;
			},
		)
