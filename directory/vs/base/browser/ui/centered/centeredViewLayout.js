define(de[2682], he([1, 0, 7, 279, 6, 3]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fob = void 0);
			const C = {
					targetWidth: 900,
					leftMarginRatio: 0.1909,
					rightMarginRatio: 0.1909,
				},
				d = { type: "distribute" };
			function m(a) {
				const h = (0, t.$)(".centered-layout-margin");
				return (
					(h.style.height = "100%"),
					a && (h.style.backgroundColor = a.toString()),
					{
						element: h,
						layout: () => {},
						minimumSize: 60,
						maximumSize: Number.POSITIVE_INFINITY,
						onDidChange: w.Event.None,
					}
				);
			}
			function r(a, h) {
				return {
					element: a.element,
					get maximumSize() {
						return a.maximumWidth;
					},
					get minimumSize() {
						return a.minimumWidth;
					},
					onDidChange: w.Event.map(a.onDidChange, (c) => c && c.width),
					layout: (c, n, g) =>
						a.layout(c, h(), g?.top ?? 0, (g?.left ?? 0) + n),
				};
			}
			class u {
				constructor(h, c, n = { ...C }, g = !1) {
					(this.h = h),
						(this.i = c),
						(this.state = n),
						(this.j = g),
						(this.b = { width: 0, height: 0, left: 0, top: 0 }),
						(this.d = !1),
						(this.g = new E.$Zc()),
						(this.k = {}),
						this.h.appendChild(this.i.element),
						(this.h.style.overflow = "hidden");
				}
				get minimumWidth() {
					return this.a ? this.a.minimumSize : this.i.minimumWidth;
				}
				get maximumWidth() {
					return this.a ? this.a.maximumSize : this.i.maximumWidth;
				}
				get minimumHeight() {
					return this.i.minimumHeight;
				}
				get maximumHeight() {
					return this.i.maximumHeight;
				}
				get onDidChange() {
					return this.i.onDidChange;
				}
				get boundarySashes() {
					return this.k;
				}
				set boundarySashes(h) {
					(this.k = h),
						this.a &&
							((this.a.orthogonalStartSash = h.top),
							(this.a.orthogonalEndSash = h.bottom));
				}
				layout(h, c, n, g) {
					(this.b = { width: h, height: c, top: n, left: g }),
						this.a
							? (this.a.layout(h, this.b), (!this.d || this.j) && this.l())
							: this.i.layout(h, c, n, g),
						(this.d = !0);
				}
				l() {
					if (this.a)
						if (this.j) {
							const h = Math.min(this.b.width, this.state.targetWidth),
								c = (this.b.width - h) / 2;
							this.a.resizeView(0, Math.floor(c)),
								this.a.resizeView(1, h),
								this.a.resizeView(2, Math.ceil(c));
						} else {
							const h = this.state.leftMarginRatio * this.b.width,
								c = this.state.rightMarginRatio * this.b.width,
								n = this.b.width - h - c;
							this.a.resizeView(0, h),
								this.a.resizeView(1, n),
								this.a.resizeView(2, c);
						}
				}
				setFixedWidth(h) {
					(this.j = h), this.a && (this.m(), this.l());
				}
				m() {
					this.a &&
						((this.state.targetWidth = this.a.getViewSize(1)),
						(this.state.leftMarginRatio = this.a.getViewSize(0) / this.b.width),
						(this.state.rightMarginRatio =
							this.a.getViewSize(2) / this.b.width));
				}
				isActive() {
					return !!this.a;
				}
				styles(h) {
					(this.c = h),
						this.a &&
							this.f &&
							(this.a.style(this.c),
							(this.f[0].element.style.backgroundColor =
								this.c.background.toString()),
							(this.f[1].element.style.backgroundColor =
								this.c.background.toString()));
				}
				activate(h) {
					if (h !== this.isActive())
						if (h) {
							this.i.element.remove(),
								(this.a = new i.$vob(this.h, {
									inverseAltBehavior: !0,
									orientation: i.Orientation.HORIZONTAL,
									styles: this.c,
								})),
								(this.a.orthogonalStartSash = this.boundarySashes.top),
								(this.a.orthogonalEndSash = this.boundarySashes.bottom),
								this.g.add(
									this.a.onDidSashChange(() => {
										this.a && this.m();
									}),
								),
								this.g.add(
									this.a.onDidSashReset(() => {
										(this.state = { ...C }), this.l();
									}),
								),
								this.a.layout(this.b.width, this.b);
							const c = this.c ? this.c.background : void 0;
							(this.f = [m(c), m(c)]),
								this.a.addView(this.f[0], d, 0),
								this.a.addView(
									r(this.i, () => this.b.height),
									d,
									1,
								),
								this.a.addView(this.f[1], d, 2),
								this.l();
						} else
							this.a?.el.remove(),
								this.g.clear(),
								this.a?.dispose(),
								(this.a = void 0),
								(this.f = void 0),
								this.h.appendChild(this.i.element),
								this.i.layout(
									this.b.width,
									this.b.height,
									this.b.top,
									this.b.left,
								);
				}
				isDefault(h) {
					return this.j
						? h.targetWidth === C.targetWidth
						: h.leftMarginRatio === C.leftMarginRatio &&
								h.rightMarginRatio === C.rightMarginRatio;
				}
				dispose() {
					this.g.dispose(), this.a && (this.a.dispose(), (this.a = void 0));
				}
			}
			e.$Fob = u;
		}),
		define(
			de[1579],
			he([1, 0, 7, 277, 279, 24, 97, 6, 3, 201, 28, 277, 279, 1511]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
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
		),
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
		define(
			de[1580],
			he([1, 0, 139, 323, 7, 265, 114, 159, 277, 97, 6, 27, 3, 4, 279, 2254]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gpb = e.$fpb = e.Pane = void 0);
				class g extends h.$1c {
					static {
						this.q = 22;
					}
					get ariaHeaderLabel() {
						return this.M;
					}
					set ariaHeaderLabel(s) {
						(this.M = s),
							this.u.setAttribute("aria-label", this.ariaHeaderLabel);
					}
					get draggableElement() {
						return this.u;
					}
					get dropTargetElement() {
						return this.element;
					}
					get dropBackground() {
						return this.N.dropBackground;
					}
					get minimumBodySize() {
						return this.I;
					}
					set minimumBodySize(s) {
						(this.I = s), this.P.fire(void 0);
					}
					get maximumBodySize() {
						return this.J;
					}
					set maximumBodySize(s) {
						(this.J = s), this.P.fire(void 0);
					}
					get R() {
						return this.headerVisible ? g.q : 0;
					}
					get minimumSize() {
						const s = this.R,
							y =
								!this.headerVisible || this.isExpanded()
									? this.minimumBodySize
									: 0;
						return s + y;
					}
					get maximumSize() {
						const s = this.R,
							y =
								!this.headerVisible || this.isExpanded()
									? this.maximumBodySize
									: 0;
						return s + y;
					}
					constructor(s) {
						super(),
							(this.C = void 0),
							(this.F = !0),
							(this.G = !0),
							(this.H = !1),
							(this.N = {
								dropBackground: void 0,
								headerBackground: void 0,
								headerBorder: void 0,
								headerForeground: void 0,
								leftBorder: void 0,
							}),
							(this.O = void 0),
							(this.P = this.D(new u.$re())),
							(this.onDidChange = this.P.event),
							(this.Q = this.D(new u.$re())),
							(this.onDidChangeExpansionState = this.Q.event),
							(this.orthogonalSize = 0),
							(this.y = typeof s.expanded > "u" ? !0 : !!s.expanded),
							(this.z =
								typeof s.orientation > "u"
									? m.Orientation.VERTICAL
									: s.orientation),
							(this.M = (0, c.localize)(29, null, s.title)),
							(this.I =
								typeof s.minimumBodySize == "number"
									? s.minimumBodySize
									: this.z === m.Orientation.HORIZONTAL
										? 200
										: 120),
							(this.J =
								typeof s.maximumBodySize == "number"
									? s.maximumBodySize
									: Number.POSITIVE_INFINITY),
							(this.element = (0, w.$)(".pane"));
					}
					isExpanded() {
						return this.y;
					}
					setExpanded(s) {
						return (!s && !this.collapsible) || this.y === !!s
							? !1
							: (this.element?.classList.toggle("expanded", s),
								(this.y = !!s),
								this.S(),
								s
									? (this.H || (this.W(this.w), (this.H = !0)),
										typeof this.O == "number" &&
											(0, w.getWindow)(this.element).clearTimeout(this.O),
										(0, w.$fhb)(this.element, this.w))
									: (this.O = (0, w.getWindow)(this.element).setTimeout(() => {
											this.w.remove();
										}, 200)),
								this.Q.fire(s),
								this.P.fire(s ? this.C : void 0),
								!0);
					}
					get headerVisible() {
						return this.F;
					}
					set headerVisible(s) {
						this.F !== !!s && ((this.F = !!s), this.S(), this.P.fire(void 0));
					}
					get collapsible() {
						return this.G;
					}
					set collapsible(s) {
						this.G !== !!s && ((this.G = !!s), this.S());
					}
					get orientation() {
						return this.z;
					}
					set orientation(s) {
						this.z !== s &&
							((this.z = s),
							this.element &&
								(this.element.classList.toggle(
									"horizontal",
									this.orientation === m.Orientation.HORIZONTAL,
								),
								this.element.classList.toggle(
									"vertical",
									this.orientation === m.Orientation.VERTICAL,
								)),
							this.u && this.S());
					}
					render() {
						this.element.classList.toggle("expanded", this.isExpanded()),
							this.element.classList.toggle(
								"horizontal",
								this.orientation === m.Orientation.HORIZONTAL,
							),
							this.element.classList.toggle(
								"vertical",
								this.orientation === m.Orientation.VERTICAL,
							),
							(this.u = (0, w.$)(".pane-header")),
							(0, w.$fhb)(this.element, this.u),
							this.u.setAttribute("tabindex", "0"),
							this.u.setAttribute("role", "button"),
							this.u.setAttribute("aria-label", this.ariaHeaderLabel),
							this.U(this.u);
						const s = (0, w.$dhb)(this.u);
						this.D(s),
							this.D(s.onDidFocus(() => this.u.classList.add("focused"), null)),
							this.D(
								s.onDidBlur(() => this.u.classList.remove("focused"), null),
							),
							this.S();
						const l = this.D(new h.$Zc()),
							y = this.D(new E.$mib(this.u, "keydown")),
							$ = u.Event.map(y.event, (v) => new C.$7fb(v), l);
						this.D(
							u.Event.filter(
								$,
								(v) =>
									v.keyCode === a.KeyCode.Enter ||
									v.keyCode === a.KeyCode.Space,
								l,
							)(() => this.setExpanded(!this.isExpanded()), null),
						),
							this.D(
								u.Event.filter(
									$,
									(v) => v.keyCode === a.KeyCode.LeftArrow,
									l,
								)(() => this.setExpanded(!1), null),
							),
							this.D(
								u.Event.filter(
									$,
									(v) => v.keyCode === a.KeyCode.RightArrow,
									l,
								)(() => this.setExpanded(!0), null),
							),
							this.D(d.$Qhb.addTarget(this.u)),
							[w.$$gb.CLICK, d.EventType.Tap].forEach((v) => {
								this.D(
									(0, w.$0fb)(this.u, v, (S) => {
										S.defaultPrevented || this.setExpanded(!this.isExpanded());
									}),
								);
							}),
							(this.w = (0, w.$fhb)(this.element, (0, w.$)(".pane-body"))),
							!this.H && this.isExpanded() && (this.W(this.w), (this.H = !0)),
							this.isExpanded() || this.w.remove();
					}
					layout(s) {
						const l = this.headerVisible ? g.q : 0,
							y = this.z === m.Orientation.VERTICAL ? this.orthogonalSize : s,
							$ =
								this.z === m.Orientation.VERTICAL
									? s - l
									: this.orthogonalSize - l;
						this.isExpanded() &&
							(this.w.classList.toggle("wide", y >= 600),
							this.X($, y),
							(this.C = s));
					}
					style(s) {
						(this.N = s), this.u && this.S();
					}
					S() {
						const s = !this.headerVisible || this.isExpanded();
						this.collapsible
							? (this.u.setAttribute("tabindex", "0"),
								this.u.setAttribute("role", "button"))
							: (this.u.removeAttribute("tabindex"),
								this.u.removeAttribute("role")),
							(this.u.style.lineHeight = `${this.R}px`),
							this.u.classList.toggle("hidden", !this.headerVisible),
							this.u.classList.toggle("expanded", s),
							this.u.classList.toggle("not-collapsible", !this.collapsible),
							this.u.setAttribute("aria-expanded", String(s)),
							(this.u.style.color = this.collapsible
								? (this.N.headerForeground ?? "")
								: ""),
							(this.u.style.backgroundColor =
								(this.collapsible ? this.N.headerBackground : "transparent") ??
								""),
							(this.u.style.borderTop =
								this.N.headerBorder &&
								this.orientation === m.Orientation.VERTICAL
									? `1px solid ${this.N.headerBorder}`
									: ""),
							(this.element.style.borderLeft =
								this.N.leftBorder &&
								this.orientation === m.Orientation.HORIZONTAL
									? `1px solid ${this.N.leftBorder}`
									: "");
					}
				}
				e.Pane = g;
				class p extends h.$1c {
					static {
						this.a = new r.$UL(new r.$RL(128, 128, 128, 0.5));
					}
					constructor(s, l, y) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.b = 0),
							(this.c = this.D(new u.$re())),
							(this.onDidDrop = this.c.event),
							(s.draggableElement.draggable = !0),
							this.D(
								(0, w.$0fb)(s.draggableElement, "dragstart", ($) => this.j($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "dragenter", ($) => this.m($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "dragleave", ($) => this.n($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "dragend", ($) => this.q($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "drop", ($) => this.r($)),
							);
					}
					j(s) {
						if (!this.g.canDrag(this.f) || !s.dataTransfer) {
							s.preventDefault(), s.stopPropagation();
							return;
						}
						(s.dataTransfer.effectAllowed = "move"),
							t.$Ofb &&
								s.dataTransfer?.setData(
									i.$Ohb.TEXT,
									this.f.draggableElement.textContent || "",
								);
						const l = (0, w.$fhb)(
							this.f.element.ownerDocument.body,
							(0, w.$)(
								".monaco-drag-image",
								{},
								this.f.draggableElement.textContent || "",
							),
						);
						s.dataTransfer.setDragImage(l, -10, -10),
							setTimeout(() => l.remove(), 0),
							(this.h.draggable = this);
					}
					m(s) {
						!this.h.draggable ||
							this.h.draggable === this ||
							(this.g.canDrop(this.h.draggable.f, this.f) &&
								(this.b++, this.s()));
					}
					n(s) {
						!this.h.draggable ||
							this.h.draggable === this ||
							(this.g.canDrop(this.h.draggable.f, this.f) &&
								(this.b--, this.b === 0 && this.s()));
					}
					q(s) {
						this.h.draggable &&
							((this.b = 0), this.s(), (this.h.draggable = null));
					}
					r(s) {
						this.h.draggable &&
							(w.$ahb.stop(s),
							(this.b = 0),
							this.s(),
							this.g.canDrop(this.h.draggable.f, this.f) &&
								this.h.draggable !== this &&
								this.c.fire({ from: this.h.draggable.f, to: this.f }),
							(this.h.draggable = null));
					}
					s() {
						let s = null;
						this.b > 0 && (s = this.f.dropBackground ?? p.a.toString()),
							(this.f.dropTargetElement.style.backgroundColor = s || "");
					}
				}
				class o {
					canDrag(s) {
						return !0;
					}
					canDrop(s, l) {
						return !0;
					}
				}
				e.$fpb = o;
				class f extends h.$1c {
					constructor(s, l = {}) {
						super(),
							(this.b = { draggable: null }),
							(this.c = []),
							(this.f = 0),
							(this.g = 0),
							(this.j = void 0),
							(this.m = this.D(new u.$re())),
							(this.onDidDrop = this.m.event),
							(this.a = l.dnd),
							(this.orientation = l.orientation ?? m.Orientation.VERTICAL),
							(this.element = (0, w.$fhb)(s, (0, w.$)(".monaco-pane-view"))),
							(this.h = this.D(
								new n.$vob(this.element, { orientation: this.orientation }),
							)),
							(this.onDidSashReset = this.h.onDidSashReset),
							(this.onDidSashChange = this.h.onDidSashChange),
							(this.onDidScroll = this.h.onDidScroll);
						const y = this.D(new h.$Zc()),
							$ = this.D(new E.$mib(this.element, "keydown")),
							v = u.Event.map(
								u.Event.filter(
									$.event,
									(S) =>
										(0, w.$Ygb)(S.target) &&
										S.target.classList.contains("pane-header"),
									y,
								),
								(S) => new C.$7fb(S),
								y,
							);
						this.D(
							u.Event.filter(
								v,
								(S) => S.keyCode === a.KeyCode.UpArrow,
								y,
							)(() => this.t()),
						),
							this.D(
								u.Event.filter(
									v,
									(S) => S.keyCode === a.KeyCode.DownArrow,
									y,
								)(() => this.u()),
							);
					}
					addPane(s, l, y = this.h.length) {
						const $ = new h.$Zc();
						s.onDidChangeExpansionState(this.r, this, $);
						const v = { pane: s, disposable: $ };
						if (
							(this.c.splice(y, 0, v),
							(s.orientation = this.orientation),
							(s.orthogonalSize = this.f),
							this.h.addView(s, l, y),
							this.a)
						) {
							const S = new p(s, this.a, this.b);
							$.add(S), $.add(S.onDidDrop(this.m.fire, this.m));
						}
					}
					removePane(s) {
						const l = this.c.findIndex(($) => $.pane === s);
						if (l === -1) return;
						this.h.removeView(l, s.isExpanded() ? n.Sizing.Distribute : void 0),
							this.c.splice(l, 1)[0].disposable.dispose();
					}
					movePane(s, l) {
						const y = this.c.findIndex((S) => S.pane === s),
							$ = this.c.findIndex((S) => S.pane === l);
						if (y === -1 || $ === -1) return;
						const [v] = this.c.splice(y, 1);
						this.c.splice($, 0, v), this.h.moveView(y, $);
					}
					resizePane(s, l) {
						const y = this.c.findIndex(($) => $.pane === s);
						y !== -1 && this.h.resizeView(y, l);
					}
					getPaneSize(s) {
						const l = this.c.findIndex((y) => y.pane === s);
						return l === -1 ? -1 : this.h.getViewSize(l);
					}
					layout(s, l) {
						(this.f = this.orientation === m.Orientation.VERTICAL ? l : s),
							(this.g = this.orientation === m.Orientation.HORIZONTAL ? l : s);
						for (const y of this.c) y.pane.orthogonalSize = this.f;
						this.h.layout(this.g);
					}
					setBoundarySashes(s) {
						(this.n = s), this.q(s);
					}
					q(s) {
						this.orientation === m.Orientation.VERTICAL
							? ((this.h.orthogonalStartSash = s?.left),
								(this.h.orthogonalEndSash = s?.right))
							: (this.h.orthogonalEndSash = s?.bottom);
					}
					flipOrientation(s, l) {
						this.orientation =
							this.orientation === m.Orientation.VERTICAL
								? m.Orientation.HORIZONTAL
								: m.Orientation.VERTICAL;
						const y = this.c.map((S) => this.getPaneSize(S.pane));
						this.h.dispose(),
							(0, w.$9fb)(this.element),
							(this.h = this.D(
								new n.$vob(this.element, { orientation: this.orientation }),
							)),
							this.q(this.n);
						const $ = this.orientation === m.Orientation.VERTICAL ? l : s,
							v = this.orientation === m.Orientation.HORIZONTAL ? l : s;
						this.c.forEach((S, I) => {
							(S.pane.orthogonalSize = $),
								(S.pane.orientation = this.orientation);
							const T = this.g === 0 ? 0 : (v * y[I]) / this.g;
							this.h.addView(S.pane, T, I);
						}),
							(this.g = v),
							(this.f = $),
							this.h.layout(this.g);
					}
					r() {
						typeof this.j == "number" &&
							(0, w.getWindow)(this.element).clearTimeout(this.j),
							this.element.classList.add("animated"),
							(this.j = (0, w.getWindow)(this.element).setTimeout(() => {
								(this.j = void 0), this.element.classList.remove("animated");
							}, 200));
					}
					s() {
						return [...this.element.querySelectorAll(".pane-header")];
					}
					t() {
						const s = this.s(),
							l = s.indexOf(this.element.ownerDocument.activeElement);
						l !== -1 && s[Math.max(l - 1, 0)].focus();
					}
					u() {
						const s = this.s(),
							l = s.indexOf(this.element.ownerDocument.activeElement);
						l !== -1 && s[Math.min(l + 1, s.length - 1)].focus();
					}
					dispose() {
						super.dispose(), this.c.forEach((s) => s.disposable.dispose());
					}
				}
				e.$gpb = f;
			},
		),
		define(
			de[1167],
			he([1, 0, 7, 317, 95, 278, 279, 6, 3, 195, 2256]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ipb = void 0);
				class u {
					static {
						this.TemplateId = "row";
					}
					constructor(g, p, o) {
						(this.f = g),
							(this.g = o),
							(this.templateId = u.TemplateId),
							(this.e = new Set());
						const f = new Map(p.map((b) => [b.templateId, b]));
						this.d = [];
						for (const b of g) {
							const s = f.get(b.templateId);
							if (!s)
								throw new Error(
									`Table cell renderer for template id ${b.templateId} not found.`,
								);
							this.d.push(s);
						}
					}
					renderTemplate(g) {
						const p = (0, t.$fhb)(g, (0, t.$)(".monaco-table-tr")),
							o = [],
							f = [];
						for (let s = 0; s < this.f.length; s++) {
							const l = this.d[s],
								y = (0, t.$fhb)(
									p,
									(0, t.$)(".monaco-table-td", { "data-col-index": s }),
								);
							(y.style.width = `${this.g(s)}px`),
								o.push(y),
								f.push(l.renderTemplate(y));
						}
						const b = { container: g, cellContainers: o, cellTemplateData: f };
						return this.e.add(b), b;
					}
					renderElement(g, p, o, f) {
						for (let b = 0; b < this.f.length; b++) {
							const l = this.f[b].project(g);
							this.d[b].renderElement(l, p, o.cellTemplateData[b], f);
						}
					}
					disposeElement(g, p, o, f) {
						for (let b = 0; b < this.f.length; b++) {
							const s = this.d[b];
							if (s.disposeElement) {
								const y = this.f[b].project(g);
								s.disposeElement(y, p, o.cellTemplateData[b], f);
							}
						}
					}
					disposeTemplate(g) {
						for (let p = 0; p < this.f.length; p++)
							this.d[p].disposeTemplate(g.cellTemplateData[p]);
						(0, t.$9fb)(g.container), this.e.delete(g);
					}
					layoutColumn(g, p) {
						for (const { cellContainers: o } of this.e)
							o[g].style.width = `${p}px`;
					}
				}
				function a(n) {
					return {
						getHeight(g) {
							return n.getHeight(g);
						},
						getTemplateId() {
							return u.TemplateId;
						},
					};
				}
				class h extends m.$1c {
					get minimumSize() {
						return this.column.minimumWidth ?? 120;
					}
					get maximumSize() {
						return this.column.maximumWidth ?? Number.POSITIVE_INFINITY;
					}
					get onDidChange() {
						return this.column.onDidChangeWidthConstraints ?? d.Event.None;
					}
					constructor(g, p) {
						super(),
							(this.column = g),
							(this.g = p),
							(this.f = new d.$re()),
							(this.onDidLayout = this.f.event),
							(this.element = (0, t.$)(
								".monaco-table-th",
								{ "data-col-index": p },
								g.label,
							)),
							g.tooltip &&
								this.D(
									(0, i.$1ib)().setupManagedHover(
										(0, w.$cib)("mouse"),
										this.element,
										g.tooltip,
									),
								);
					}
					layout(g) {
						this.f.fire([this.g, g]);
					}
				}
				class c {
					static {
						this.d = 0;
					}
					get onDidChangeFocus() {
						return this.g.onDidChangeFocus;
					}
					get onDidChangeSelection() {
						return this.g.onDidChangeSelection;
					}
					get onDidScroll() {
						return this.g.onDidScroll;
					}
					get onMouseClick() {
						return this.g.onMouseClick;
					}
					get onMouseDblClick() {
						return this.g.onMouseDblClick;
					}
					get onMouseMiddleClick() {
						return this.g.onMouseMiddleClick;
					}
					get onPointer() {
						return this.g.onPointer;
					}
					get onMouseUp() {
						return this.g.onMouseUp;
					}
					get onMouseDown() {
						return this.g.onMouseDown;
					}
					get onMouseOver() {
						return this.g.onMouseOver;
					}
					get onMouseMove() {
						return this.g.onMouseMove;
					}
					get onMouseOut() {
						return this.g.onMouseOut;
					}
					get onTouchStart() {
						return this.g.onTouchStart;
					}
					get onTap() {
						return this.g.onTap;
					}
					get onContextMenu() {
						return this.g.onContextMenu;
					}
					get onDidFocus() {
						return this.g.onDidFocus;
					}
					get onDidBlur() {
						return this.g.onDidBlur;
					}
					get scrollTop() {
						return this.g.scrollTop;
					}
					set scrollTop(g) {
						this.g.scrollTop = g;
					}
					get scrollLeft() {
						return this.g.scrollLeft;
					}
					set scrollLeft(g) {
						this.g.scrollLeft = g;
					}
					get scrollHeight() {
						return this.g.scrollHeight;
					}
					get renderHeight() {
						return this.g.renderHeight;
					}
					get onDidDispose() {
						return this.g.onDidDispose;
					}
					constructor(g, p, o, f, b, s) {
						(this.p = o),
							(this.q = f),
							(this.domId = `table_id_${++c.d}`),
							(this.k = new m.$Zc()),
							(this.m = 0),
							(this.o = 0),
							(this.domNode = (0, t.$fhb)(
								p,
								(0, t.$)(`.monaco-table.${this.domId}`),
							));
						const l = f.map((v, S) => this.k.add(new h(v, S))),
							y = {
								size: l.reduce((v, S) => v + S.column.weight, 0),
								views: l.map((v) => ({ size: v.column.weight, view: v })),
							};
						(this.f = this.k.add(
							new C.$vob(this.domNode, {
								orientation: C.Orientation.HORIZONTAL,
								scrollbarVisibility: r.ScrollbarVisibility.Hidden,
								getSashOrthogonalSize: () => this.o,
								descriptor: y,
							}),
						)),
							(this.f.el.style.height = `${o.headerRowHeight}px`),
							(this.f.el.style.lineHeight = `${o.headerRowHeight}px`);
						const $ = new u(f, b, (v) => this.f.getViewSize(v));
						(this.g = this.k.add(new E.List(g, this.domNode, a(o), [$], s))),
							d.Event.any(...l.map((v) => v.onDidLayout))(
								([v, S]) => $.layoutColumn(v, S),
								null,
								this.k,
							),
							this.f.onDidSashReset(
								(v) => {
									const S = f.reduce((T, P) => T + P.weight, 0),
										I = (f[v].weight / S) * this.m;
									this.f.resizeView(v, I);
								},
								null,
								this.k,
							),
							(this.j = (0, t.$Rgb)(this.domNode)),
							this.style(E.$Qib);
					}
					getColumnLabels() {
						return this.q.map((g) => g.label);
					}
					resizeColumn(g, p) {
						const o = Math.round((p / 100) * this.m);
						this.f.resizeView(g, o);
					}
					updateOptions(g) {
						this.g.updateOptions(g);
					}
					splice(g, p, o = []) {
						this.g.splice(g, p, o);
					}
					rerender() {
						this.g.rerender();
					}
					row(g) {
						return this.g.element(g);
					}
					indexOf(g) {
						return this.g.indexOf(g);
					}
					get length() {
						return this.g.length;
					}
					getHTMLElement() {
						return this.domNode;
					}
					layout(g, p) {
						(g = g ?? (0, t.$ygb)(this.domNode)),
							(p = p ?? (0, t.$wgb)(this.domNode)),
							(this.m = p),
							(this.o = g),
							this.f.layout(p);
						const o = g - this.p.headerRowHeight;
						(this.g.getHTMLElement().style.height = `${o}px`),
							this.g.layout(o, p);
					}
					triggerTypeNavigation() {
						this.g.triggerTypeNavigation();
					}
					style(g) {
						const p = [];
						p.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.p.headerRowHeight + 1}px;
			height: calc(100% - ${this.p.headerRowHeight}px);
		}`),
							(this.j.textContent = p.join(`
`)),
							this.g.style(g);
					}
					domFocus() {
						this.g.domFocus();
					}
					setAnchor(g) {
						this.g.setAnchor(g);
					}
					getAnchor() {
						return this.g.getAnchor();
					}
					getSelectedElements() {
						return this.g.getSelectedElements();
					}
					setSelection(g, p) {
						this.g.setSelection(g, p);
					}
					getSelection() {
						return this.g.getSelection();
					}
					setFocus(g, p) {
						this.g.setFocus(g, p);
					}
					focusNext(g = 1, p = !1, o) {
						this.g.focusNext(g, p, o);
					}
					focusPrevious(g = 1, p = !1, o) {
						this.g.focusPrevious(g, p, o);
					}
					focusNextPage(g) {
						return this.g.focusNextPage(g);
					}
					focusPreviousPage(g) {
						return this.g.focusPreviousPage(g);
					}
					focusFirst(g) {
						this.g.focusFirst(g);
					}
					focusLast(g) {
						this.g.focusLast(g);
					}
					getFocus() {
						return this.g.getFocus();
					}
					getFocusedElements() {
						return this.g.getFocusedElements();
					}
					getRelativeTop(g) {
						return this.g.getRelativeTop(g);
					}
					reveal(g, p) {
						this.g.reveal(g, p);
					}
					dispose() {
						this.k.dispose();
					}
				}
				e.$ipb = c;
			},
		),
		define(
			de[215],
			he([1, 0, 24, 15, 120, 249, 59, 54, 12, 37]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gk = e.$Fk = void 0),
					(e.$Ek = u),
					(e.$Hk = g),
					(e.$Ik = A),
					(e.$Jk = R),
					(e.$Kk = O),
					(e.$Lk = B),
					(e.$Mk = U),
					(e.$Nk = H),
					(e.$Ok = V),
					(e.$Pk = G);
				function u() {
					return Object.create(null);
				}
				(e.$Fk = "**"), (e.$Gk = "/");
				const a = "[/\\\\]",
					h = "[^/\\\\]",
					c = /\//g;
				function n(K, J) {
					switch (K) {
						case 0:
							return "";
						case 1:
							return `${h}*?`;
						default:
							return `(?:${a}|${h}+${a}${J ? `|${a}${h}+` : ""})*?`;
					}
				}
				function g(K, J) {
					if (!K) return [];
					const W = [];
					let X = !1,
						Y = !1,
						ie = "";
					for (const ne of K) {
						switch (ne) {
							case J:
								if (!X && !Y) {
									W.push(ie), (ie = "");
									continue;
								}
								break;
							case "{":
								X = !0;
								break;
							case "}":
								X = !1;
								break;
							case "[":
								Y = !0;
								break;
							case "]":
								Y = !1;
								break;
						}
						ie += ne;
					}
					return ie && W.push(ie), W;
				}
				function p(K) {
					if (!K) return "";
					let J = "";
					const W = g(K, e.$Gk);
					if (W.every((X) => X === e.$Fk)) J = ".*";
					else {
						let X = !1;
						W.forEach((Y, ie) => {
							if (Y === e.$Fk) {
								if (X) return;
								J += n(2, ie === W.length - 1);
							} else {
								let ne = !1,
									ee = "",
									_ = !1,
									te = "";
								for (const Q of Y) {
									if (Q !== "}" && ne) {
										ee += Q;
										continue;
									}
									if (_ && (Q !== "]" || !te)) {
										let Z;
										Q === "-"
											? (Z = Q)
											: (Q === "^" || Q === "!") && !te
												? (Z = "^")
												: Q === e.$Gk
													? (Z = "")
													: (Z = (0, r.$of)(Q)),
											(te += Z);
										continue;
									}
									switch (Q) {
										case "{":
											ne = !0;
											continue;
										case "[":
											_ = !0;
											continue;
										case "}": {
											const se = `(?:${g(ee, ",")
												.map((re) => p(re))
												.join("|")})`;
											(J += se), (ne = !1), (ee = "");
											break;
										}
										case "]": {
											(J += "[" + te + "]"), (_ = !1), (te = "");
											break;
										}
										case "?":
											J += h;
											continue;
										case "*":
											J += n(1);
											continue;
										default:
											J += (0, r.$of)(Q);
									}
								}
								ie < W.length - 1 &&
									(W[ie + 1] !== e.$Fk || ie + 2 < W.length) &&
									(J += a);
							}
							X = Y === e.$Fk;
						});
					}
					return J;
				}
				const o = /^\*\*\/\*\.[\w\.-]+$/,
					f = /^\*\*\/([\w\.-]+)\/?$/,
					b = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/,
					s =
						/^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/,
					l = /^\*\*((\/[\w\.-]+)+)\/?$/,
					y = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
					$ = new C.$Jc(1e4),
					v = function () {
						return !1;
					},
					S = function () {
						return null;
					};
				function I(K, J) {
					if (!K) return S;
					let W;
					typeof K != "string" ? (W = K.pattern) : (W = K), (W = W.trim());
					const X = `${W}_${!!J.trimForExclusions}`;
					let Y = $.get(X);
					if (Y) return T(Y, K);
					let ie;
					return (
						o.test(W)
							? (Y = k(W.substr(4), W))
							: (ie = f.exec(P(W, J)))
								? (Y = L(ie[1], W))
								: (J.trimForExclusions ? s : b).test(W)
									? (Y = D(W, J))
									: (ie = l.exec(P(W, J)))
										? (Y = M(ie[1].substr(1), W, !0))
										: (ie = y.exec(P(W, J)))
											? (Y = M(ie[1], W, !1))
											: (Y = N(W)),
						$.set(X, Y),
						T(Y, K)
					);
				}
				function T(K, J) {
					if (typeof J == "string") return K;
					const W = function (X, Y) {
						return (0, E.$Lg)(X, J.base, !m.$n)
							? K((0, r.$tf)(X.substr(J.base.length), d.sep), Y)
							: null;
					};
					return (
						(W.allBasenames = K.allBasenames),
						(W.allPaths = K.allPaths),
						(W.basenames = K.basenames),
						(W.patterns = K.patterns),
						W
					);
				}
				function P(K, J) {
					return J.trimForExclusions && K.endsWith("/**")
						? K.substr(0, K.length - 2)
						: K;
				}
				function k(K, J) {
					return function (W, X) {
						return typeof W == "string" && W.endsWith(K) ? J : null;
					};
				}
				function L(K, J) {
					const W = `/${K}`,
						X = `\\${K}`,
						Y = function (ne, ee) {
							return typeof ne != "string"
								? null
								: ee
									? ee === K
										? J
										: null
									: ne === K || ne.endsWith(W) || ne.endsWith(X)
										? J
										: null;
						},
						ie = [K];
					return (
						(Y.basenames = ie), (Y.patterns = [J]), (Y.allBasenames = ie), Y
					);
				}
				function D(K, J) {
					const W = x(
							K.slice(1, -1)
								.split(",")
								.map((ee) => I(ee, J))
								.filter((ee) => ee !== S),
							K,
						),
						X = W.length;
					if (!X) return S;
					if (X === 1) return W[0];
					const Y = function (ee, _) {
							for (let te = 0, Q = W.length; te < Q; te++)
								if (W[te](ee, _)) return K;
							return null;
						},
						ie = W.find((ee) => !!ee.allBasenames);
					ie && (Y.allBasenames = ie.allBasenames);
					const ne = W.reduce(
						(ee, _) => (_.allPaths ? ee.concat(_.allPaths) : ee),
						[],
					);
					return ne.length && (Y.allPaths = ne), Y;
				}
				function M(K, J, W) {
					const X = d.sep === d.$lc.sep,
						Y = X ? K : K.replace(c, d.sep),
						ie = d.sep + Y,
						ne = d.$lc.sep + K;
					let ee;
					return (
						W
							? (ee = function (_, te) {
									return typeof _ == "string" &&
										(_ === Y ||
											_.endsWith(ie) ||
											(!X && (_ === K || _.endsWith(ne))))
										? J
										: null;
								})
							: (ee = function (_, te) {
									return typeof _ == "string" && (_ === Y || (!X && _ === K))
										? J
										: null;
								}),
						(ee.allPaths = [(W ? "*/" : "./") + K]),
						ee
					);
				}
				function N(K) {
					try {
						const J = new RegExp(`^${p(K)}$`);
						return function (W) {
							return (
								(J.lastIndex = 0), typeof W == "string" && J.test(W) ? K : null
							);
						};
					} catch {
						return S;
					}
				}
				function A(K, J, W) {
					return !K || typeof J != "string" ? !1 : R(K)(J, void 0, W);
				}
				function R(K, J = {}) {
					if (!K) return v;
					if (typeof K == "string" || O(K)) {
						const W = I(K, J);
						if (W === S) return v;
						const X = function (Y, ie) {
							return !!W(Y, ie);
						};
						return (
							W.allBasenames && (X.allBasenames = W.allBasenames),
							W.allPaths && (X.allPaths = W.allPaths),
							X
						);
					}
					return z(K, J);
				}
				function O(K) {
					const J = K;
					return J
						? typeof J.base == "string" && typeof J.pattern == "string"
						: !1;
				}
				function B(K) {
					return K.allBasenames || [];
				}
				function U(K) {
					return K.allPaths || [];
				}
				function z(K, J) {
					const W = x(
							Object.getOwnPropertyNames(K)
								.map((ee) => F(ee, K[ee], J))
								.filter((ee) => ee !== S),
						),
						X = W.length;
					if (!X) return S;
					if (!W.some((ee) => !!ee.requiresSiblings)) {
						if (X === 1) return W[0];
						const ee = function (Q, Z) {
								let se;
								for (let re = 0, le = W.length; re < le; re++) {
									const oe = W[re](Q, Z);
									if (typeof oe == "string") return oe;
									(0, i.$yh)(oe) && (se || (se = []), se.push(oe));
								}
								return se
									? (async () => {
											for (const re of se) {
												const le = await re;
												if (typeof le == "string") return le;
											}
											return null;
										})()
									: null;
							},
							_ = W.find((Q) => !!Q.allBasenames);
						_ && (ee.allBasenames = _.allBasenames);
						const te = W.reduce(
							(Q, Z) => (Z.allPaths ? Q.concat(Z.allPaths) : Q),
							[],
						);
						return te.length && (ee.allPaths = te), ee;
					}
					const Y = function (ee, _, te) {
							let Q, Z;
							for (let se = 0, re = W.length; se < re; se++) {
								const le = W[se];
								le.requiresSiblings &&
									te &&
									(_ || (_ = (0, d.$sc)(ee)),
									Q || (Q = _.substr(0, _.length - (0, d.$tc)(ee).length)));
								const oe = le(ee, _, Q, te);
								if (typeof oe == "string") return oe;
								(0, i.$yh)(oe) && (Z || (Z = []), Z.push(oe));
							}
							return Z
								? (async () => {
										for (const se of Z) {
											const re = await se;
											if (typeof re == "string") return re;
										}
										return null;
									})()
								: null;
						},
						ie = W.find((ee) => !!ee.allBasenames);
					ie && (Y.allBasenames = ie.allBasenames);
					const ne = W.reduce(
						(ee, _) => (_.allPaths ? ee.concat(_.allPaths) : ee),
						[],
					);
					return ne.length && (Y.allPaths = ne), Y;
				}
				function F(K, J, W) {
					if (J === !1) return S;
					const X = I(K, W);
					if (X === S) return S;
					if (typeof J == "boolean") return X;
					if (J) {
						const Y = J.when;
						if (typeof Y == "string") {
							const ie = (ne, ee, _, te) => {
								if (!te || !X(ne, ee)) return null;
								const Q = Y.replace("$(basename)", () => _),
									Z = te(Q);
								return (0, i.$yh)(Z)
									? Z.then((se) => (se ? K : null))
									: Z
										? K
										: null;
							};
							return (ie.requiresSiblings = !0), ie;
						}
					}
					return X;
				}
				function x(K, J) {
					const W = K.filter((ee) => !!ee.basenames);
					if (W.length < 2) return K;
					const X = W.reduce((ee, _) => {
						const te = _.basenames;
						return te ? ee.concat(te) : ee;
					}, []);
					let Y;
					if (J) {
						Y = [];
						for (let ee = 0, _ = X.length; ee < _; ee++) Y.push(J);
					} else
						Y = W.reduce((ee, _) => {
							const te = _.patterns;
							return te ? ee.concat(te) : ee;
						}, []);
					const ie = function (ee, _) {
						if (typeof ee != "string") return null;
						if (!_) {
							let Q;
							for (Q = ee.length; Q > 0; Q--) {
								const Z = ee.charCodeAt(Q - 1);
								if (Z === w.CharCode.Slash || Z === w.CharCode.Backslash) break;
							}
							_ = ee.substr(Q);
						}
						const te = X.indexOf(_);
						return te !== -1 ? Y[te] : null;
					};
					(ie.basenames = X), (ie.patterns = Y), (ie.allBasenames = X);
					const ne = K.filter((ee) => !ee.basenames);
					return ne.push(ie), ne;
				}
				function H(K, J) {
					return (0, t.$yb)(K, J, (W, X) =>
						typeof W == "string" && typeof X == "string"
							? W === X
							: typeof W != "string" && typeof X != "string"
								? W.base === X.base && W.pattern === X.pattern
								: !1,
					);
				}
				function q(K) {
					return K.startsWith("{") && K.endsWith("}")
						? K.slice(1, -1).split(",")
						: [K];
				}
				function V({ globsNewLineSeparated: K, properGlob: J }) {
					const W = [];
					return (
						K &&
							W.push(
								...K.split(`
`),
							),
						J && W.push(...q(J)),
						W.filter((X) => X !== "").map((X) =>
							X.match(/^[a-zA-Z0-9]/) ? "*" + X : X,
						)
					);
				}
				function G({ globsNewLineSeparated: K, properGlob: J }) {
					const W = V({ globsNewLineSeparated: K, properGlob: J });
					if (W.length !== 0) return `{${W.join(",")}}`;
				}
			},
		),
		define(
			de[94],
			he([1, 0, 29, 274, 19, 37, 9]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cl = e.MarkdownStringTextNewlineStyle = void 0),
					(e.$dl = r),
					(e.$el = u),
					(e.$fl = a),
					(e.$gl = h),
					(e.$hl = c),
					(e.$il = n),
					(e.$jl = g),
					(e.$kl = p);
				var d;
				(function (o) {
					(o[(o.Paragraph = 0)] = "Paragraph"), (o[(o.Break = 1)] = "Break");
				})(d || (e.MarkdownStringTextNewlineStyle = d = {}));
				class m {
					constructor(f = "", b = !1) {
						if (((this.value = f), typeof this.value != "string"))
							throw (0, t.$$)("value");
						typeof b == "boolean"
							? ((this.isTrusted = b),
								(this.supportThemeIcons = !1),
								(this.supportHtml = !1))
							: ((this.isTrusted = b.isTrusted ?? void 0),
								(this.supportThemeIcons = b.supportThemeIcons ?? !1),
								(this.supportHtml = b.supportHtml ?? !1));
					}
					appendText(f, b = d.Paragraph) {
						return (
							(this.value += h(this.supportThemeIcons ? (0, i.$9k)(f) : f)
								.replace(/([ \t]+)/g, (s, l) => "&nbsp;".repeat(l.length))
								.replace(/\>/gm, "\\>")
								.replace(
									/\n/g,
									b === d.Break
										? `\\
`
										: `

`,
								)),
							this
						);
					}
					appendMarkdown(f) {
						return (this.value += f), this;
					}
					appendCodeblock(f, b) {
						return (
							(this.value += `
${c(b, f)}
`),
							this
						);
					}
					appendLink(f, b, s) {
						return (
							(this.value += "["),
							(this.value += this.c(b, "]")),
							(this.value += "]("),
							(this.value += this.c(String(f), ")")),
							s && (this.value += ` "${this.c(this.c(s, '"'), ")")}"`),
							(this.value += ")"),
							this
						);
					}
					c(f, b) {
						const s = new RegExp((0, E.$of)(b), "g");
						return f.replace(s, (l, y) =>
							f.charAt(y - 1) !== "\\" ? `\\${l}` : l,
						);
					}
				}
				e.$cl = m;
				function r(o) {
					return u(o) ? !o.value : Array.isArray(o) ? o.every(r) : !0;
				}
				function u(o) {
					return o instanceof m
						? !0
						: o && typeof o == "object"
							? typeof o.value == "string" &&
								(typeof o.isTrusted == "boolean" ||
									typeof o.isTrusted == "object" ||
									o.isTrusted === void 0) &&
								(typeof o.supportThemeIcons == "boolean" ||
									o.supportThemeIcons === void 0)
							: !1;
				}
				function a(o, f) {
					return o === f
						? !0
						: !o || !f
							? !1
							: o.value === f.value &&
								o.isTrusted === f.isTrusted &&
								o.supportThemeIcons === f.supportThemeIcons &&
								o.supportHtml === f.supportHtml &&
								(o.baseUri === f.baseUri ||
									(!!o.baseUri &&
										!!f.baseUri &&
										(0, w.$gh)(C.URI.from(o.baseUri), C.URI.from(f.baseUri))));
				}
				function h(o) {
					return o.replace(/[\\`*_{}[\]()#+\-!~]/g, "\\$&");
				}
				function c(o, f) {
					const b =
							o.match(/^`+/gm)?.reduce((l, y) => (l.length > y.length ? l : y))
								.length ?? 0,
						s = b >= 3 ? b + 1 : 3;
					return [`${"`".repeat(s)}${f}`, o, `${"`".repeat(s)}`].join(`
`);
				}
				function n(o) {
					return o.replace(/"/g, "&quot;");
				}
				function g(o) {
					return o && o.replace(/\\([\\`*_{}[\]()#+\-.!~])/g, "$1");
				}
				function p(o) {
					const f = [],
						b = o.split("|").map((l) => l.trim());
					o = b[0];
					const s = b[1];
					if (s) {
						const l = /height=(\d+)/.exec(s),
							y = /width=(\d+)/.exec(s),
							$ = l ? l[1] : "",
							v = y ? y[1] : "",
							S = isFinite(parseInt(v)),
							I = isFinite(parseInt($));
						S && f.push(`width="${v}"`), I && f.push(`height="${$}"`);
					}
					return { href: o, dimensions: f };
				}
			},
		),
		define(
			de[267],
			he([
				1, 0, 7, 920, 265, 595, 114, 168, 182, 29, 6, 94, 274, 584, 27, 149, 3,
				434, 197, 23, 82, 19, 37, 9,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vib = void 0),
					(e.$Uib = S),
					(e.$Wib = D),
					(e.$Xib = M),
					(e.$Yib = q),
					(t = mt(t)),
					(i = mt(i)),
					(o = mt(o));
				const v = Object.freeze({
					image: ({ href: Q, title: Z, text: se }) => {
						let re = [],
							le = [];
						return (
							Q &&
								(({ href: Q, dimensions: re } = (0, a.$kl)(Q)),
								le.push(`src="${(0, a.$il)(Q)}"`)),
							se && le.push(`alt="${(0, a.$il)(se)}"`),
							Z && le.push(`title="${(0, a.$il)(Z)}"`),
							re.length && (le = le.concat(re)),
							"<img " + le.join(" ") + ">"
						);
					},
					paragraph({ tokens: Q }) {
						return `<p>${this.parser.parseInline(Q)}</p>`;
					},
					link({ href: Q, title: Z, tokens: se }) {
						let re = this.parser.parseInline(se);
						return typeof Q != "string"
							? ""
							: (Q === re && (re = (0, a.$jl)(re)),
								(Z = typeof Z == "string" ? (0, a.$il)((0, a.$jl)(Z)) : ""),
								(Q = (0, a.$jl)(Q)),
								(Q = Q.replace(/&/g, "&amp;")
									.replace(/</g, "&lt;")
									.replace(/>/g, "&gt;")
									.replace(/"/g, "&quot;")
									.replace(/'/g, "&#39;")),
								`<a href="${Q}" title="${Z || Q}" draggable="false">${re}</a>`);
					},
				});
				function S(Q, Z = {}, se = {}) {
					const re = new p.$Zc();
					let le = !1;
					const oe = (0, E.$lib)(Z),
						ae = function (be) {
							let Ce;
							try {
								Ce = (0, f.$ii)(decodeURIComponent(be));
							} catch {}
							return Ce
								? ((Ce = (0, s.$xo)(Ce, (Le) => {
										if (Q.uris && Q.uris[Le]) return $.URI.revive(Q.uris[Le]);
									})),
									encodeURIComponent(JSON.stringify(Ce)))
								: be;
						},
						pe = function (be, Ce) {
							const Le = Q.uris && Q.uris[be];
							let Fe = $.URI.revive(Le);
							return Ce
								? be.startsWith(b.Schemas.data + ":")
									? be
									: (Fe || (Fe = $.URI.parse(be)),
										b.$7g.uriToBrowserUri(Fe).toString(!0))
								: !Fe || $.URI.parse(be).toString() === Fe.toString()
									? be
									: (Fe.query && (Fe = Fe.with({ query: ae(Fe.query) })),
										Fe.toString());
						},
						$e = new o.Renderer();
					($e.image = v.image),
						($e.link = v.link),
						($e.paragraph = v.paragraph);
					const ye = [],
						ue = [];
					if (
						(Z.codeBlockRendererSync
							? ($e.code = ({ text: be, lang: Ce }) => {
									const Le = c.$Sdb.nextId(),
										Fe = Z.codeBlockRendererSync(I(Ce), be);
									return (
										ue.push([Le, Fe]),
										`<div class="code" data-code="${Le}">${(0, y.$nf)(be)}</div>`
									);
								})
							: Z.codeBlockRenderer &&
								($e.code = ({ text: be, lang: Ce }) => {
									const Le = c.$Sdb.nextId(),
										Fe = Z.codeBlockRenderer(I(Ce), be);
									return (
										ye.push(Fe.then((Oe) => [Le, Oe])),
										`<div class="code" data-code="${Le}">${(0, y.$nf)(be)}</div>`
									);
								}),
						Z.actionHandler)
					) {
						const be = function (Fe) {
								let Oe = Fe.target;
								if (
									!(
										Oe.tagName !== "A" &&
										((Oe = Oe.parentElement), !Oe || Oe.tagName !== "A")
									)
								)
									try {
										let xe = Oe.dataset.href;
										xe &&
											(Q.baseUri && (xe = T($.URI.from(Q.baseUri), xe)),
											Z.actionHandler.callback(xe, Fe));
									} catch (xe) {
										(0, r.$4)(xe);
									} finally {
										Fe.preventDefault();
									}
							},
							Ce = Z.actionHandler.disposables.add(new w.$mib(oe, "click")),
							Le = Z.actionHandler.disposables.add(new w.$mib(oe, "auxclick"));
						Z.actionHandler.disposables.add(
							u.Event.any(
								Ce.event,
								Le.event,
							)((Fe) => {
								const Oe = new d.$2fb(t.getWindow(oe), Fe);
								(!Oe.leftButton && !Oe.middleButton) || be(Oe);
							}),
						),
							Z.actionHandler.disposables.add(
								t.$0fb(oe, "keydown", (Fe) => {
									const Oe = new C.$7fb(Fe);
									(!Oe.equals(n.KeyCode.Space) &&
										!Oe.equals(n.KeyCode.Enter)) ||
										be(Oe);
								}),
							);
					}
					Q.supportHtml ||
						($e.html = ({ text: be }) =>
							Z.sanitizerOptions?.replaceWithPlaintext
								? (0, y.$nf)(be)
								: (
											Q.isTrusted
												? be.match(/^(<span[^>]+>)|(<\/\s*span>)$/)
												: void 0
										)
									? be
									: ""),
						(se.renderer = $e);
					let fe = Q.value ?? "";
					fe.length > 1e5 && (fe = `${fe.substr(0, 1e5)}\u2026`),
						Q.supportThemeIcons && (fe = (0, h.$0k)(fe));
					let me;
					if (Z.fillInIncompleteTokens) {
						const be = { ...o.defaults, ...se },
							Ce = o.lexer(fe, be),
							Le = q(Ce);
						me = o.parser(Le, be);
					} else me = o.parse(fe, { ...se, async: !1 });
					Q.supportThemeIcons &&
						(me = (0, m.$Sib)(me)
							.map((Ce) => (typeof Ce == "string" ? Ce : Ce.outerHTML))
							.join(""));
					const ge = new DOMParser().parseFromString(
						k({ isTrusted: Q.isTrusted, ...Z.sanitizerOptions }, me),
						"text/html",
					);
					if (
						(ge.body
							.querySelectorAll("img, audio, video, source")
							.forEach((be) => {
								const Ce = be.getAttribute("src");
								if (Ce) {
									let Le = Ce;
									try {
										Q.baseUri && (Le = T($.URI.from(Q.baseUri), Le));
									} catch {}
									if (
										(be.setAttribute("src", pe(Le, !0)), Z.remoteImageIsAllowed)
									) {
										const Fe = $.URI.parse(Le);
										Fe.scheme !== b.Schemas.file &&
											Fe.scheme !== b.Schemas.data &&
											!Z.remoteImageIsAllowed(Fe) &&
											be.replaceWith(t.$("", void 0, be.outerHTML));
									}
								}
							}),
						ge.body.querySelectorAll("a").forEach((be) => {
							const Ce = be.getAttribute("href");
							if (
								(be.setAttribute("href", ""),
								!Ce ||
									/^data:|javascript:/i.test(Ce) ||
									(/^command:/i.test(Ce) && !Q.isTrusted) ||
									/^command:(\/\/\/)?_workbench\.downloadResource/i.test(Ce))
							)
								be.replaceWith(...be.childNodes);
							else {
								let Le = pe(Ce, !1);
								Q.baseUri && (Le = T($.URI.from(Q.baseUri), Ce)),
									(be.dataset.href = Le);
							}
						}),
						(oe.innerHTML = k(
							{ isTrusted: Q.isTrusted, ...Z.sanitizerOptions },
							ge.body.innerHTML,
						)),
						ye.length > 0)
					)
						Promise.all(ye).then((be) => {
							if (le) return;
							const Ce = new Map(be),
								Le = oe.querySelectorAll("div[data-code]");
							for (const Fe of Le) {
								const Oe = Ce.get(Fe.dataset.code ?? "");
								Oe && t.$hhb(Fe, Oe);
							}
							Z.asyncRenderCallback?.();
						});
					else if (ue.length > 0) {
						const be = new Map(ue),
							Ce = oe.querySelectorAll("div[data-code]");
						for (const Le of Ce) {
							const Fe = be.get(Le.dataset.code ?? "");
							Fe && t.$hhb(Le, Fe);
						}
					}
					if (Z.asyncRenderCallback)
						for (const be of oe.getElementsByTagName("img")) {
							const Ce = re.add(
								t.$0fb(be, "load", () => {
									Ce.dispose(), Z.asyncRenderCallback();
								}),
							);
						}
					return {
						element: oe,
						dispose: () => {
							(le = !0), re.dispose();
						},
					};
				}
				function I(Q) {
					if (!Q) return "";
					const Z = Q.split(/[\s+|:|,|\{|\?]/, 1);
					return Z.length ? Z[0] : Q;
				}
				function T(Q, Z) {
					return /^\w[\w\d+.-]*:/.test(Z)
						? Z
						: Q.path.endsWith("/")
							? (0, l.$qh)(Q, Z).toString()
							: (0, l.$qh)((0, l.$mh)(Q), Z).toString();
				}
				const P = [
					"area",
					"base",
					"br",
					"col",
					"command",
					"embed",
					"hr",
					"img",
					"input",
					"keygen",
					"link",
					"meta",
					"param",
					"source",
					"track",
					"wbr",
				];
				function k(Q, Z) {
					const { config: se, allowedSchemes: re } = L(Q),
						le = new p.$Zc();
					le.add(
						te("uponSanitizeAttribute", (oe, ae) => {
							if (ae.attrName === "style" || ae.attrName === "class") {
								if (oe.tagName === "SPAN") {
									if (ae.attrName === "style") {
										ae.keepAttr =
											/^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z]+)+\));)?(border-radius:[0-9]+px;)?$/.test(
												ae.attrValue,
											);
										return;
									} else if (ae.attrName === "class") {
										ae.keepAttr =
											/^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(
												ae.attrValue,
											);
										return;
									}
								}
								ae.keepAttr = !1;
								return;
							} else if (
								oe.tagName === "INPUT" &&
								oe.attributes.getNamedItem("type")?.value === "checkbox"
							) {
								if (
									(ae.attrName === "type" && ae.attrValue === "checkbox") ||
									ae.attrName === "disabled" ||
									ae.attrName === "checked"
								) {
									ae.keepAttr = !0;
									return;
								}
								ae.keepAttr = !1;
							}
						}),
					),
						le.add(
							te("uponSanitizeElement", (oe, ae) => {
								if (
									(ae.tagName === "input" &&
										(oe.attributes.getNamedItem("type")?.value === "checkbox"
											? oe.setAttribute("disabled", "")
											: Q.replaceWithPlaintext || oe.remove()),
									Q.replaceWithPlaintext &&
										!ae.allowedTags[ae.tagName] &&
										ae.tagName !== "body" &&
										oe.parentElement)
								) {
									let pe, $e;
									if (ae.tagName === "#comment")
										pe = `<!--${oe.textContent}-->`;
									else {
										const me = P.includes(ae.tagName),
											ve = oe.attributes.length
												? " " +
													Array.from(oe.attributes)
														.map((ge) => `${ge.name}="${ge.value}"`)
														.join(" ")
												: "";
										(pe = `<${ae.tagName}${ve}>`),
											me || ($e = `</${ae.tagName}>`);
									}
									const ye = document.createDocumentFragment(),
										ue = oe.parentElement.ownerDocument.createTextNode(pe);
									ye.appendChild(ue);
									const fe = $e
										? oe.parentElement.ownerDocument.createTextNode($e)
										: void 0;
									for (; oe.firstChild; ) ye.appendChild(oe.firstChild);
									fe && ye.appendChild(fe),
										oe.parentElement.replaceChild(ye, oe);
								}
							}),
						),
						le.add(t.$Bhb(re));
					try {
						return i.sanitize(Z, { ...se, RETURN_TRUSTED_TYPE: !0 });
					} finally {
						le.dispose();
					}
				}
				e.$Vib = [
					"align",
					"autoplay",
					"alt",
					"checked",
					"class",
					"colspan",
					"controls",
					"data-code",
					"data-href",
					"disabled",
					"draggable",
					"height",
					"href",
					"loop",
					"muted",
					"playsinline",
					"poster",
					"rowspan",
					"src",
					"style",
					"target",
					"title",
					"type",
					"width",
					"start",
				];
				function L(Q) {
					const Z = [
						b.Schemas.http,
						b.Schemas.https,
						b.Schemas.mailto,
						b.Schemas.data,
						b.Schemas.file,
						b.Schemas.vscodeFileResource,
						b.Schemas.vscodeRemote,
						b.Schemas.vscodeRemoteResource,
					];
					return (
						Q.isTrusted && Z.push(b.Schemas.command),
						{
							config: {
								ALLOWED_TAGS: Q.allowedTags ?? [...t.$Chb],
								ALLOWED_ATTR: e.$Vib,
								ALLOW_UNKNOWN_PROTOCOLS: !0,
							},
							allowedSchemes: Z,
						}
					);
				}
				function D(Q) {
					return typeof Q == "string" ? Q : M(Q);
				}
				function M(Q, Z) {
					let se = Q.value ?? "";
					se.length > 1e5 && (se = `${se.substr(0, 1e5)}\u2026`);
					const re = o
						.parse(se, { async: !1, renderer: Z ? O.value : R.value })
						.replace(/&(#\d+|[a-zA-Z]+);/g, (le) => N.get(le) ?? le);
					return k({ isTrusted: !1 }, re).toString();
				}
				const N = new Map([
					["&quot;", '"'],
					["&nbsp;", " "],
					["&amp;", "&"],
					["&#39;", "'"],
					["&lt;", "<"],
					["&gt;", ">"],
				]);
				function A() {
					const Q = new o.Renderer();
					return (
						(Q.code = ({ text: Z }) => Z),
						(Q.blockquote = ({ text: Z }) =>
							Z +
							`
`),
						(Q.html = (Z) => ""),
						(Q.heading = function ({ tokens: Z }) {
							return (
								this.parser.parseInline(Z) +
								`
`
							);
						}),
						(Q.hr = () => ""),
						(Q.list = function ({ items: Z }) {
							return (
								Z.map((se) => this.listitem(se)).join(`
`) +
								`
`
							);
						}),
						(Q.listitem = ({ text: Z }) =>
							Z +
							`
`),
						(Q.paragraph = function ({ tokens: Z }) {
							return (
								this.parser.parseInline(Z) +
								`
`
							);
						}),
						(Q.table = function ({ header: Z, rows: se }) {
							return (
								Z.map((re) => this.tablecell(re)).join(" ") +
								`
` +
								se
									.map((re) => re.map((le) => this.tablecell(le)).join(" "))
									.join(`
`) +
								`
`
							);
						}),
						(Q.tablerow = ({ text: Z }) => Z),
						(Q.tablecell = function ({ tokens: Z }) {
							return this.parser.parseInline(Z);
						}),
						(Q.strong = ({ text: Z }) => Z),
						(Q.em = ({ text: Z }) => Z),
						(Q.codespan = ({ text: Z }) => Z),
						(Q.br = (Z) => `
`),
						(Q.del = ({ text: Z }) => Z),
						(Q.image = (Z) => ""),
						(Q.text = ({ text: Z }) => Z),
						(Q.link = ({ text: Z }) => Z),
						Q
					);
				}
				const R = new g.$Y((Q) => A()),
					O = new g.$Y(() => {
						const Q = A();
						return (
							(Q.code = ({ text: Z }) => `
\`\`\`
${Z}
\`\`\`
`),
							Q
						);
					});
				function B(Q) {
					let Z = "";
					return (
						Q.forEach((se) => {
							Z += se.raw;
						}),
						Z
					);
				}
				function U(Q) {
					if (Q.tokens)
						for (let Z = Q.tokens.length - 1; Z >= 0; Z--) {
							const se = Q.tokens[Z];
							if (se.type === "text") {
								const re = se.raw.split(`
`),
									le = re[re.length - 1];
								if (le.includes("`")) return G(Q);
								if (le.includes("**")) return ie(Q);
								if (le.match(/\*\w/)) return K(Q);
								if (le.match(/(^|\s)__\w/)) return ne(Q);
								if (le.match(/(^|\s)_\w/)) return J(Q);
								if (
									z(le) ||
									(F(le) &&
										Q.tokens
											.slice(0, Z)
											.some(
												(oe) => oe.type === "text" && oe.raw.match(/\[[^\]]*$/),
											))
								) {
									const oe = Q.tokens.slice(Z + 1);
									return (oe[0]?.type === "link" &&
										oe[1]?.type === "text" &&
										oe[1].raw.match(/^ *"[^"]*$/)) ||
										le.match(/^[^"]* +"[^"]*$/)
										? X(Q)
										: W(Q);
								} else if (le.match(/(^|\s)\[\w*/)) return Y(Q);
							}
						}
				}
				function z(Q) {
					return !!Q.match(/(^|\s)\[.*\]\(\w*/);
				}
				function F(Q) {
					return !!Q.match(/^[^\[]*\]\([^\)]*$/);
				}
				function x(Q) {
					const Z = Q.items[Q.items.length - 1],
						se = Z.tokens ? Z.tokens[Z.tokens.length - 1] : void 0;
					let re;
					if (
						(se?.type === "text" && !("inRawBlock" in Z) && (re = U(se)),
						!re || re.type !== "paragraph")
					)
						return;
					const le = B(Q.items.slice(0, -1)),
						oe = Z.raw.match(/^(\s*(-|\d+\.|\*) +)/)?.[0];
					if (!oe) return;
					const ae = oe + B(Z.tokens.slice(0, -1)) + re.raw,
						pe = o.lexer(le + ae)[0];
					if (pe.type === "list") return pe;
				}
				const H = 3;
				function q(Q) {
					for (let Z = 0; Z < H; Z++) {
						const se = V(Q);
						if (se) Q = se;
						else break;
					}
					return Q;
				}
				function V(Q) {
					let Z, se;
					for (Z = 0; Z < Q.length; Z++) {
						const re = Q[Z];
						if (re.type === "paragraph" && re.raw.match(/(\n|^)\|/)) {
							se = _(Q.slice(Z));
							break;
						}
						if (Z === Q.length - 1 && re.type === "list") {
							const le = x(re);
							if (le) {
								se = [le];
								break;
							}
						}
						if (Z === Q.length - 1 && re.type === "paragraph") {
							const le = U(re);
							if (le) {
								se = [le];
								break;
							}
						}
					}
					if (se) {
						const re = [...Q.slice(0, Z), ...se];
						return (re.links = Q.links), re;
					}
					return null;
				}
				function G(Q) {
					return ee(Q, "`");
				}
				function K(Q) {
					return ee(Q, "*");
				}
				function J(Q) {
					return ee(Q, "_");
				}
				function W(Q) {
					return ee(Q, ")");
				}
				function X(Q) {
					return ee(Q, '")');
				}
				function Y(Q) {
					return ee(Q, "](https://microsoft.com)");
				}
				function ie(Q) {
					return ee(Q, "**");
				}
				function ne(Q) {
					return ee(Q, "__");
				}
				function ee(Q, Z) {
					const se = B(Array.isArray(Q) ? Q : [Q]);
					return o.lexer(se + Z)[0];
				}
				function _(Q) {
					const Z = B(Q),
						se = Z.split(`
`);
					let re,
						le = !1;
					for (let oe = 0; oe < se.length; oe++) {
						const ae = se[oe].trim();
						if (typeof re > "u" && ae.match(/^\s*\|/)) {
							const pe = ae.match(/(\|[^\|]+)(?=\||$)/g);
							pe && (re = pe.length);
						} else if (typeof re == "number")
							if (ae.match(/^\s*\|/)) {
								if (oe !== se.length - 1) return;
								le = !0;
							} else return;
					}
					if (typeof re == "number" && re > 0) {
						const oe = le
								? se.slice(0, -1).join(`
`)
								: Z,
							ae = !!oe.match(/\|\s*$/),
							pe =
								oe +
								(ae ? "" : "|") +
								`
|${" --- |".repeat(re)}`;
						return o.lexer(pe);
					}
				}
				function te(Q, Z) {
					return i.addHook(Q, Z), (0, p.$Yc)(() => i.removeHook(Q));
				}
			},
		),
		define(
			de[183],
			he([
				1, 0, 7, 920, 114, 267, 159, 95, 182, 50, 14, 97, 6, 94, 27, 3, 26, 4,
				317, 2233,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rob = e.$qob = e.$pob = e.$oob = e.$nob = void 0),
					(e.$nob = {
						buttonBackground: "#0E639C",
						buttonHoverBackground: "#006BB3",
						buttonSeparator: a.$UL.white.toString(),
						buttonForeground: a.$UL.white.toString(),
						buttonBorder: void 0,
						buttonSecondaryBackground: void 0,
						buttonSecondaryForeground: void 0,
						buttonSecondaryHoverBackground: void 0,
					});
				class b extends g.$1c {
					get onDidClick() {
						return this.j.event;
					}
					get onDidEscape() {
						return this.m.event;
					}
					constructor(v, S) {
						super(),
							(this.c = ""),
							(this.j = this.D(new h.$re())),
							(this.m = this.D(new h.$re())),
							(this.a = S),
							(this.b = document.createElement("a")),
							this.b.classList.add("monaco-button"),
							(this.b.tabIndex = 0),
							this.b.setAttribute("role", "button"),
							this.b.classList.toggle("secondary", !!S.secondary);
						const I = S.secondary
								? S.buttonSecondaryBackground
								: S.buttonBackground,
							T = S.secondary
								? S.buttonSecondaryForeground
								: S.buttonForeground;
						(this.b.style.color = T || ""),
							(this.b.style.backgroundColor = I || ""),
							S.supportShortLabel &&
								((this.g = document.createElement("div")),
								this.g.classList.add("monaco-button-label-short"),
								this.b.appendChild(this.g),
								(this.f = document.createElement("div")),
								this.f.classList.add("monaco-button-label"),
								this.b.appendChild(this.f),
								this.b.classList.add("monaco-text-button-with-short-label")),
							typeof S.title == "string" && this.setTitle(S.title),
							typeof S.ariaLabel == "string" &&
								this.b.setAttribute("aria-label", S.ariaLabel),
							v.appendChild(this.b),
							this.D(C.$Qhb.addTarget(this.b)),
							[t.$$gb.CLICK, C.EventType.Tap].forEach((P) => {
								this.D(
									(0, t.$0fb)(this.b, P, (k) => {
										if (!this.enabled) {
											t.$ahb.stop(k);
											return;
										}
										this.j.fire(k);
									}),
								);
							}),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.KEY_DOWN, (P) => {
									const k = new w.$7fb(P);
									let L = !1;
									this.enabled &&
									(k.equals(n.KeyCode.Enter) || k.equals(n.KeyCode.Space))
										? (this.j.fire(P), (L = !0))
										: k.equals(n.KeyCode.Escape) &&
											(this.m.fire(P), this.b.blur(), (L = !0)),
										L && t.$ahb.stop(k, !0);
								}),
							),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.MOUSE_OVER, (P) => {
									this.b.classList.contains("disabled") || this.r(!0);
								}),
							),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.MOUSE_OUT, (P) => {
									this.r(!1);
								}),
							),
							(this.n = this.D((0, t.$dhb)(this.b))),
							this.D(
								this.n.onDidFocus(() => {
									this.enabled && this.r(!0);
								}),
							),
							this.D(
								this.n.onDidBlur(() => {
									this.enabled && this.r(!1);
								}),
							);
					}
					dispose() {
						super.dispose(), this.b.remove();
					}
					q(v) {
						const S = [];
						for (let I of (0, m.$Sib)(v))
							if (typeof I == "string") {
								if (((I = I.trim()), I === "")) continue;
								const T = document.createElement("span");
								(T.textContent = I), S.push(T);
							} else S.push(I);
						return S;
					}
					r(v) {
						let S;
						this.a.secondary
							? (S = v
									? this.a.buttonSecondaryHoverBackground
									: this.a.buttonSecondaryBackground)
							: (S = v
									? this.a.buttonHoverBackground
									: this.a.buttonBackground),
							S && (this.b.style.backgroundColor = S);
					}
					get element() {
						return this.b;
					}
					set label(v) {
						if (
							this.c === v ||
							((0, c.$el)(this.c) && (0, c.$el)(v) && (0, c.$fl)(this.c, v))
						)
							return;
						this.b.classList.add("monaco-text-button");
						const S = this.a.supportShortLabel ? this.f : this.b;
						if ((0, c.$el)(v)) {
							const T = (0, E.$Uib)(v, { inline: !0 });
							T.dispose();
							const P = T.element.querySelector("p")?.innerHTML;
							if (P) {
								const k = (0, i.sanitize)(P, {
									ADD_TAGS: ["b", "i", "u", "code", "span"],
									ALLOWED_ATTR: ["class"],
									RETURN_TRUSTED_TYPE: !0,
								});
								S.innerHTML = k;
							} else (0, t.$hhb)(S);
						} else
							this.a.supportIcons
								? (0, t.$hhb)(S, ...this.q(v))
								: (S.textContent = v);
						let I = "";
						typeof this.a.title == "string"
							? (I = this.a.title)
							: this.a.title && (I = (0, E.$Wib)(v)),
							this.setTitle(I),
							typeof this.a.ariaLabel == "string"
								? this.b.setAttribute("aria-label", this.a.ariaLabel)
								: this.a.ariaLabel && this.b.setAttribute("aria-label", I),
							(this.c = v);
					}
					get label() {
						return this.c;
					}
					set labelShort(v) {
						!this.a.supportShortLabel ||
							!this.g ||
							(this.a.supportIcons
								? (0, t.$hhb)(this.g, ...this.q(v))
								: (this.g.textContent = v));
					}
					set icon(v) {
						this.b.classList.add(...p.ThemeIcon.asClassNameArray(v));
					}
					set enabled(v) {
						v
							? (this.b.classList.remove("disabled"),
								this.b.setAttribute("aria-disabled", String(!1)),
								(this.b.tabIndex = 0))
							: (this.b.classList.add("disabled"),
								this.b.setAttribute("aria-disabled", String(!0)));
					}
					get enabled() {
						return !this.b.classList.contains("disabled");
					}
					set checked(v) {
						v
							? (this.b.classList.add("checked"),
								this.b.setAttribute("aria-checked", "true"))
							: (this.b.classList.remove("checked"),
								this.b.setAttribute("aria-checked", "false"));
					}
					get checked() {
						return this.b.classList.contains("checked");
					}
					setTitle(v) {
						!this.h && v !== ""
							? (this.h = this.D(
									(0, f.$1ib)().setupManagedHover(
										this.a.hoverDelegate ?? (0, d.$cib)("mouse"),
										this.b,
										v,
									),
								))
							: this.h && this.h.update(v);
					}
					focus() {
						this.b.focus();
					}
					hasFocus() {
						return (0, t.$Kgb)(this.b);
					}
				}
				e.$oob = b;
				class s extends g.$1c {
					constructor(v, S) {
						super(),
							(this.h = this.D(new h.$re())),
							(this.onDidClick = this.h.event),
							(this.element = document.createElement("div")),
							this.element.classList.add("monaco-button-dropdown"),
							v.appendChild(this.element),
							(this.a = this.D(new b(this.element, S))),
							this.D(this.a.onDidClick((P) => this.h.fire(P))),
							(this.b = this.D(
								new r.$rj(
									"primaryAction",
									(0, E.$Wib)(this.a.label),
									void 0,
									!0,
									async () => this.h.fire(void 0),
								),
							)),
							(this.f = document.createElement("div")),
							this.f.classList.add("monaco-button-dropdown-separator"),
							(this.g = document.createElement("div")),
							this.f.appendChild(this.g),
							this.element.appendChild(this.f);
						const I = S.buttonBorder;
						I &&
							((this.f.style.borderTop = "1px solid " + I),
							(this.f.style.borderBottom = "1px solid " + I));
						const T = S.secondary
							? S.buttonSecondaryBackground
							: S.buttonBackground;
						(this.f.style.backgroundColor = T ?? ""),
							(this.g.style.backgroundColor = S.buttonSeparator ?? ""),
							(this.c = this.D(
								new b(this.element, { ...S, title: !1, supportIcons: !0 }),
							)),
							this.D(
								(0, f.$1ib)().setupManagedHover(
									(0, d.$cib)("mouse"),
									this.c.element,
									(0, o.localize)(1, null),
								),
							),
							this.c.element.setAttribute("aria-haspopup", "true"),
							this.c.element.setAttribute("aria-expanded", "false"),
							this.c.element.classList.add("monaco-dropdown-button"),
							(this.c.icon = u.$ak.dropDownButton),
							this.D(
								this.c.onDidClick((P) => {
									const k = Array.isArray(S.actions)
										? S.actions
										: S.actions.getActions();
									S.contextMenuProvider.showContextMenu({
										getAnchor: () => this.c.element,
										getActions: () =>
											S.addPrimaryActionToDropdown === !1
												? [...k]
												: [this.b, ...k],
										actionRunner: S.actionRunner,
										onHide: () =>
											this.c.element.setAttribute("aria-expanded", "false"),
									}),
										this.c.element.setAttribute("aria-expanded", "true");
								}),
							);
					}
					dispose() {
						super.dispose(), this.element.remove();
					}
					set label(v) {
						(this.a.label = v), (this.b.label = v);
					}
					set icon(v) {
						this.a.icon = v;
					}
					set enabled(v) {
						(this.a.enabled = v),
							(this.c.enabled = v),
							this.element.classList.toggle("disabled", !v);
					}
					get enabled() {
						return this.a.enabled;
					}
					set checked(v) {
						this.a.checked = v;
					}
					get checked() {
						return this.a.checked;
					}
					focus() {
						this.a.focus();
					}
					hasFocus() {
						return this.a.hasFocus() || this.c.hasFocus();
					}
				}
				e.$pob = s;
				class l {
					constructor(v, S) {
						(this.d = S),
							(this.b = document.createElement("div")),
							this.b.classList.add("monaco-description-button"),
							(this.a = new b(this.b, S)),
							(this.c = document.createElement("div")),
							this.c.classList.add("monaco-button-description"),
							this.b.appendChild(this.c),
							v.appendChild(this.b);
					}
					get onDidClick() {
						return this.a.onDidClick;
					}
					get element() {
						return this.b;
					}
					set label(v) {
						this.a.label = v;
					}
					set icon(v) {
						this.a.icon = v;
					}
					get enabled() {
						return this.a.enabled;
					}
					set enabled(v) {
						this.a.enabled = v;
					}
					set checked(v) {
						this.a.checked = v;
					}
					get checked() {
						return this.a.checked;
					}
					focus() {
						this.a.focus();
					}
					hasFocus() {
						return this.a.hasFocus();
					}
					dispose() {
						this.a.dispose();
					}
					set description(v) {
						this.d.supportIcons
							? (0, t.$hhb)(this.c, ...(0, m.$Sib)(v))
							: (this.c.textContent = v);
					}
				}
				e.$qob = l;
				class y {
					constructor(v) {
						(this.c = v), (this.a = []), (this.b = new g.$Zc());
					}
					dispose() {
						this.b.dispose();
					}
					get buttons() {
						return this.a;
					}
					clear() {
						this.b.clear(), (this.a.length = 0);
					}
					addButton(v) {
						const S = this.b.add(new b(this.c, v));
						return this.d(S), S;
					}
					addButtonWithDescription(v) {
						const S = this.b.add(new l(this.c, v));
						return this.d(S), S;
					}
					addButtonWithDropdown(v) {
						const S = this.b.add(new s(this.c, v));
						return this.d(S), S;
					}
					d(v) {
						this.a.push(v);
						const S = this.a.length - 1;
						this.b.add(
							(0, t.$0fb)(v.element, t.$$gb.KEY_DOWN, (I) => {
								const T = new w.$7fb(I);
								let P = !0,
									k;
								T.equals(n.KeyCode.LeftArrow)
									? (k = S > 0 ? S - 1 : this.a.length - 1)
									: T.equals(n.KeyCode.RightArrow)
										? (k = S === this.a.length - 1 ? 0 : S + 1)
										: (P = !1),
									P &&
										typeof k == "number" &&
										(this.a[k].focus(), t.$ahb.stop(I, !0));
							}),
						);
					}
				}
				e.$rob = y;
			},
		),
		define(
			de[2683],
			he([1, 0, 235, 6, 7, 183, 3, 95, 2249]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cpb = void 0);
				class m extends t.$Uhb {
					constructor(u) {
						super(),
							(this.a = this.D(new i.$re())),
							(this.onDidSelect = this.a.event),
							(this.c = []),
							(this.h = this.D(new C.$0c())),
							(this.b = u.hoverDelegate ?? this.D((0, d.$dib)())),
							(this.domNode = (0, w.$)(".monaco-custom-radio")),
							this.domNode.setAttribute("role", "radio"),
							this.setItems(u.items);
					}
					setItems(u) {
						this.h.clearAndDisposeAll(),
							(this.c = u),
							(this.g = this.c.find((a) => a.isActive) ?? this.c[0]);
						for (let a = 0; a < this.c.length; a++) {
							const h = this.c[a],
								c = new C.$Zc(),
								n = c.add(
									new E.$oob(this.domNode, {
										hoverDelegate: this.b,
										title: h.tooltip,
										supportIcons: !0,
									}),
								);
							(n.enabled = !h.disabled),
								c.add(
									n.onDidClick(() => {
										this.g !== h && ((this.g = h), this.n(), this.a.fire(a));
									}),
								),
								this.h.set(n, { item: h, dispose: () => c.dispose() });
						}
						this.n();
					}
					setActiveItem(u) {
						if (u < 0 || u >= this.c.length) throw new Error("Invalid Index");
						(this.g = this.c[u]), this.n();
					}
					setEnabled(u) {
						for (const [a] of this.h) a.enabled = u;
					}
					n() {
						let u = !1;
						for (const [a, { item: h }] of this.h) {
							const c = u;
							(u = h === this.g),
								a.element.classList.toggle("active", u),
								a.element.classList.toggle("previous-active", c),
								(a.label = h.text);
						}
					}
				}
				e.$cpb = m;
			},
		),
		define(
			de[2684],
			he([
				1, 0, 7, 265, 114, 267, 276, 317, 95, 278, 24, 6, 27, 3, 12, 195, 4,
				2253,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2ib = void 0),
					(t = mt(t)),
					(u = mt(u));
				const o = t.$,
					f = "selectOption.entry.template";
				class b {
					get templateId() {
						return f;
					}
					renderTemplate(y) {
						const $ = Object.create(null);
						return (
							($.root = y),
							($.text = t.$fhb(y, o(".option-text"))),
							($.detail = t.$fhb(y, o(".option-detail"))),
							($.decoratorRight = t.$fhb(y, o(".option-decorator-right"))),
							$
						);
					}
					renderElement(y, $, v) {
						const S = v,
							I = y.text,
							T = y.detail,
							P = y.decoratorRight,
							k = y.isDisabled;
						(S.text.textContent = I),
							(S.detail.textContent = T || ""),
							(S.decoratorRight.innerText = P || ""),
							k
								? S.root.classList.add("option-disabled")
								: S.root.classList.remove("option-disabled");
					}
					disposeTemplate(y) {}
				}
				class s extends c.$1c {
					static {
						this.a = 32;
					}
					static {
						this.b = 2;
					}
					static {
						this.c = 3;
					}
					constructor(y, $, v, S, I) {
						super(),
							(this.m = []),
							(this.F = 0),
							(this.H = !1),
							(this.J = !1),
							(this.N = !1),
							(this.f = !1),
							(this.r = S),
							(this.g = I || Object.create(null)),
							typeof this.g.minBottomMargin != "number"
								? (this.g.minBottomMargin = s.a)
								: this.g.minBottomMargin < 0 && (this.g.minBottomMargin = 0),
							(this.h = document.createElement("select")),
							(this.h.className =
								"monaco-select-box monaco-select-box-dropdown-padding"),
							typeof this.g.ariaLabel == "string" &&
								this.h.setAttribute("aria-label", this.g.ariaLabel),
							typeof this.g.ariaDescription == "string" &&
								this.h.setAttribute("aria-description", this.g.ariaDescription),
							(this.q = new a.$re()),
							this.D(this.q),
							this.Q(),
							this.P(v),
							(this.n = $ || 0),
							y && this.setOptions(y, $),
							this.S();
					}
					O(y) {
						!this.M && y
							? (this.M = this.D(
									(0, d.$1ib)().setupManagedHover(
										(0, m.$cib)("mouse"),
										this.h,
										y,
									),
								))
							: this.M && this.M.update(y);
					}
					getHeight() {
						return 22;
					}
					getTemplateId() {
						return f;
					}
					P(y) {
						(this.t = y),
							(this.u = t.$(".monaco-select-box-dropdown-container")),
							this.u.classList.add("monaco-select-box-dropdown-padding"),
							(this.I = t.$fhb(this.u, o(".select-box-details-pane")));
						const $ = t.$fhb(
								this.u,
								o(".select-box-dropdown-container-width-control"),
							),
							v = t.$fhb($, o(".width-control-div"));
						(this.C = document.createElement("span")),
							(this.C.className = "option-text-width-control"),
							t.$fhb(v, this.C),
							(this.G = C.AnchorPosition.BELOW),
							(this.w = t.$Rgb(this.u)),
							this.u.setAttribute("draggable", "true"),
							this.D(
								t.$0fb(this.u, t.$$gb.DRAG_START, (S) => {
									t.$ahb.stop(S, !0);
								}),
							);
					}
					Q() {
						this.D(
							t.$$fb(this.h, "change", ($) => {
								(this.n = $.target.selectedIndex),
									this.q.fire({
										index: $.target.selectedIndex,
										selected: $.target.value,
									}),
									this.m[this.n] &&
										this.m[this.n].text &&
										this.O(this.m[this.n].text);
							}),
						),
							this.D(
								t.$0fb(this.h, t.$$gb.CLICK, ($) => {
									t.$ahb.stop($), this.f ? this.Z(!0) : this.Y();
								}),
							),
							this.D(
								t.$0fb(this.h, t.$$gb.MOUSE_DOWN, ($) => {
									t.$ahb.stop($);
								}),
							);
						let y;
						this.D(
							t.$0fb(this.h, "touchstart", ($) => {
								y = this.f;
							}),
						),
							this.D(
								t.$0fb(this.h, "touchend", ($) => {
									t.$ahb.stop($), y ? this.Z(!0) : this.Y();
								}),
							),
							this.D(
								t.$0fb(this.h, t.$$gb.KEY_DOWN, ($) => {
									const v = new w.$7fb($);
									let S = !1;
									n.$m
										? (v.keyCode === h.KeyCode.DownArrow ||
												v.keyCode === h.KeyCode.UpArrow ||
												v.keyCode === h.KeyCode.Space ||
												v.keyCode === h.KeyCode.Enter) &&
											(S = !0)
										: ((v.keyCode === h.KeyCode.DownArrow && v.altKey) ||
												(v.keyCode === h.KeyCode.UpArrow && v.altKey) ||
												v.keyCode === h.KeyCode.Space ||
												v.keyCode === h.KeyCode.Enter) &&
											(S = !0),
										S && (this.Y(), t.$ahb.stop($, !0));
								}),
							);
					}
					get onDidSelect() {
						return this.q.event;
					}
					setOptions(y, $) {
						u.$yb(this.m, y) ||
							((this.m = y),
							(this.h.options.length = 0),
							(this.H = !1),
							(this.L = void 0),
							this.m.forEach((v, S) => {
								this.h.add(this.X(v.text, S, v.isDisabled)),
									typeof v.description == "string" && (this.H = !0);
							})),
							$ !== void 0 && (this.select($), (this.F = this.n));
					}
					setEnabled(y) {
						this.h.disabled = !y;
					}
					R() {
						this.y?.splice(0, this.y.length, this.m);
					}
					select(y) {
						y >= 0 && y < this.m.length
							? (this.n = y)
							: y > this.m.length - 1
								? this.select(this.m.length - 1)
								: this.n < 0 && (this.n = 0),
							(this.h.selectedIndex = this.n),
							this.m[this.n] &&
								this.m[this.n].text &&
								this.O(this.m[this.n].text);
					}
					setAriaLabel(y) {
						(this.g.ariaLabel = y),
							this.h.setAttribute("aria-label", this.g.ariaLabel);
					}
					focus() {
						this.h && ((this.h.tabIndex = 0), this.h.focus());
					}
					blur() {
						this.h && ((this.h.tabIndex = -1), this.h.blur());
					}
					setFocusable(y) {
						this.h.tabIndex = y ? 0 : -1;
					}
					render(y) {
						(this.j = y),
							y.classList.add("select-container"),
							y.appendChild(this.h),
							this.U();
					}
					S() {
						const y = [];
						this.r.listFocusBackground &&
							y.push(
								`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.r.listFocusBackground} !important; }`,
							),
							this.r.listFocusForeground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.r.listFocusForeground} !important; }`,
								),
							this.r.decoratorRightForeground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.r.decoratorRightForeground}; }`,
								),
							this.r.selectBackground &&
							this.r.selectBorder &&
							this.r.selectBorder !== this.r.selectBackground
								? (y.push(
										`.monaco-select-box-dropdown-container { border: 1px solid ${this.r.selectBorder} } `,
									),
									y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.r.selectBorder} } `,
									),
									y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.r.selectBorder} } `,
									))
								: this.r.selectListBorder &&
									(y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.r.selectListBorder} } `,
									),
									y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.r.selectListBorder} } `,
									)),
							this.r.listHoverForeground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.r.listHoverForeground} !important; }`,
								),
							this.r.listHoverBackground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.r.listHoverBackground} !important; }`,
								),
							this.r.listFocusOutline &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.r.listFocusOutline} !important; outline-offset: -1.6px !important; }`,
								),
							this.r.listHoverOutline &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.r.listHoverOutline} !important; outline-offset: -1.6px !important; }`,
								),
							y.push(
								".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }",
							),
							y.push(
								".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }",
							),
							(this.w.textContent = y.join(`
`));
					}
					U() {
						const y = this.r.selectBackground ?? "",
							$ = this.r.selectForeground ?? "",
							v = this.r.selectBorder ?? "";
						(this.h.style.backgroundColor = y),
							(this.h.style.color = $),
							(this.h.style.borderColor = v);
					}
					W() {
						const y = this.r.selectBackground ?? "",
							$ = t.$xhb(this.r.selectListBackground, y);
						(this.z.style.backgroundColor = $),
							(this.I.style.backgroundColor = $);
						const v = this.r.focusBorder ?? "";
						(this.u.style.outlineColor = v),
							(this.u.style.outlineOffset = "-1px"),
							this.y.style(this.r);
					}
					X(y, $, v) {
						const S = document.createElement("option");
						return (S.value = y), (S.text = y), (S.disabled = !!v), S;
					}
					Y() {
						(this.I.innerText = ""),
							!(!this.t || this.f) &&
								(this.eb(this.u),
								this.R(),
								this.t.showContextView(
									{
										getAnchor: () => this.h,
										render: (y) => this.ab(y, !0),
										layout: () => {
											this.cb();
										},
										onHide: () => {
											this.u.classList.remove("visible"),
												this.h.classList.remove("synthetic-focus");
										},
										anchorPosition: this.G,
									},
									this.g.optionsAsChildren ? this.j : void 0,
								),
								(this.f = !0),
								this.Z(!1),
								this.t.showContextView(
									{
										getAnchor: () => this.h,
										render: (y) => this.ab(y),
										layout: () => this.cb(),
										onHide: () => {
											this.u.classList.remove("visible"),
												this.h.classList.remove("synthetic-focus");
										},
										anchorPosition: this.G,
									},
									this.g.optionsAsChildren ? this.j : void 0,
								),
								(this.F = this.n),
								(this.f = !0),
								this.h.setAttribute("aria-expanded", "true"));
					}
					Z(y) {
						!this.t ||
							!this.f ||
							((this.f = !1),
							this.h.setAttribute("aria-expanded", "false"),
							y && this.h.focus(),
							this.t.hideContextView());
					}
					ab(y, $) {
						return (
							y.appendChild(this.u),
							this.cb($),
							{
								dispose: () => {
									this.u.remove();
								},
							}
						);
					}
					bb() {
						let y = 0;
						return (
							this.m.forEach(($, v) => {
								this.jb(v),
									this.I.offsetHeight > y && (y = this.I.offsetHeight);
							}),
							y
						);
					}
					cb(y) {
						if (this.J) return !1;
						if (this.y) {
							this.u.classList.add("visible");
							const $ = t.getWindow(this.h),
								v = t.$tgb(this.h),
								S = t.getWindow(this.h).getComputedStyle(this.h),
								I =
									parseFloat(S.getPropertyValue("--dropdown-padding-top")) +
									parseFloat(S.getPropertyValue("--dropdown-padding-bottom")),
								T =
									$.innerHeight -
									v.top -
									v.height -
									(this.g.minBottomMargin || 0),
								P = v.top - s.b,
								k = this.h.offsetWidth,
								L = this.db(this.C),
								D = Math.max(L, Math.round(k)).toString() + "px";
							(this.u.style.width = D),
								(this.y.getHTMLElement().style.height = ""),
								this.y.layout();
							let M = this.y.contentHeight;
							this.H && this.L === void 0 && (this.L = this.bb());
							const N = this.H ? this.L : 0,
								A = M + I + N,
								R = Math.floor((T - I - N) / this.getHeight()),
								O = Math.floor((P - I - N) / this.getHeight());
							if (y)
								return v.top + v.height > $.innerHeight - 22 ||
									v.top < s.b ||
									(R < 1 && O < 1)
									? !1
									: (R < s.c && O > R && this.m.length > R
											? ((this.G = C.AnchorPosition.ABOVE),
												this.z.remove(),
												this.I.remove(),
												this.u.appendChild(this.I),
												this.u.appendChild(this.z),
												this.I.classList.remove("border-top"),
												this.I.classList.add("border-bottom"))
											: ((this.G = C.AnchorPosition.BELOW),
												this.z.remove(),
												this.I.remove(),
												this.u.appendChild(this.z),
												this.u.appendChild(this.I),
												this.I.classList.remove("border-bottom"),
												this.I.classList.add("border-top")),
										!0);
							if (
								v.top + v.height > $.innerHeight - 22 ||
								v.top < s.b ||
								(this.G === C.AnchorPosition.BELOW && R < 1) ||
								(this.G === C.AnchorPosition.ABOVE && O < 1)
							)
								return this.Z(!0), !1;
							if (this.G === C.AnchorPosition.BELOW) {
								if (this.f && R + O < 1) return this.Z(!0), !1;
								A > T && (M = R * this.getHeight());
							} else A > P && (M = O * this.getHeight());
							return (
								this.y.layout(M),
								this.y.domFocus(),
								this.y.length > 0 &&
									(this.y.setFocus([this.n || 0]),
									this.y.reveal(this.y.getFocus()[0] || 0)),
								this.H
									? ((this.y.getHTMLElement().style.height = M + I + "px"),
										(this.u.style.height = ""))
									: (this.u.style.height = M + I + "px"),
								this.jb(this.n),
								(this.u.style.width = D),
								this.z.setAttribute("tabindex", "0"),
								this.h.classList.add("synthetic-focus"),
								this.u.classList.add("synthetic-focus"),
								!0
							);
						} else return !1;
					}
					db(y) {
						let $ = 0;
						if (y) {
							let v = 0,
								S = 0;
							this.m.forEach((I, T) => {
								const P = I.detail ? I.detail.length : 0,
									k = I.decoratorRight ? I.decoratorRight.length : 0,
									L = I.text.length + P + k;
								L > S && ((v = T), (S = L));
							}),
								(y.textContent =
									this.m[v].text +
									(this.m[v].decoratorRight
										? this.m[v].decoratorRight + " "
										: "")),
								($ = t.$vgb(y));
						}
						return $;
					}
					eb(y) {
						if (this.y) return;
						(this.z = t.$fhb(y, o(".select-box-dropdown-list-container"))),
							(this.s = new b()),
							(this.y = this.D(
								new r.List("SelectBoxCustom", this.z, this, [this.s], {
									useShadows: !1,
									verticalScrollMode: g.ScrollbarVisibility.Visible,
									keyboardSupport: !1,
									mouseSupport: !1,
									accessibilityProvider: {
										getAriaLabel: (S) => {
											let I = S.text;
											return (
												S.detail && (I += `. ${S.detail}`),
												S.decoratorRight && (I += `. ${S.decoratorRight}`),
												S.description && (I += `. ${S.description}`),
												I
											);
										},
										getWidgetAriaLabel: () => (0, p.localize)(28, null),
										getRole: () => (n.$m ? "" : "option"),
										getWidgetRole: () => "listbox",
									},
								}),
							)),
							this.g.ariaLabel && (this.y.ariaLabel = this.g.ariaLabel);
						const $ = this.D(new i.$mib(this.z, "keydown")),
							v = a.Event.chain($.event, (S) =>
								S.filter(() => this.y.length > 0).map((I) => new w.$7fb(I)),
							);
						this.D(
							a.Event.chain(v, (S) =>
								S.filter((I) => I.keyCode === h.KeyCode.Enter),
							)(this.lb, this),
						),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.Tab),
								)(this.lb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.Escape),
								)(this.kb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.UpArrow),
								)(this.nb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.DownArrow),
								)(this.mb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.PageDown),
								)(this.pb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.PageUp),
								)(this.ob, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.Home),
								)(this.qb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.End),
								)(this.rb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter(
										(I) =>
											(I.keyCode >= h.KeyCode.Digit0 &&
												I.keyCode <= h.KeyCode.KeyZ) ||
											(I.keyCode >= h.KeyCode.Semicolon &&
												I.keyCode <= h.KeyCode.NumpadDivide),
									),
								)(this.sb, this),
							),
							this.D(
								t.$0fb(this.y.getHTMLElement(), t.$$gb.POINTER_UP, (S) =>
									this.fb(S),
								),
							),
							this.D(
								this.y.onMouseOver(
									(S) => typeof S.index < "u" && this.y.setFocus([S.index]),
								),
							),
							this.D(this.y.onDidChangeFocus((S) => this.ib(S))),
							this.D(
								t.$0fb(this.u, t.$$gb.FOCUS_OUT, (S) => {
									!this.f || t.$Bgb(S.relatedTarget, this.u) || this.gb();
								}),
							),
							this.y
								.getHTMLElement()
								.setAttribute("aria-label", this.g.ariaLabel || ""),
							this.y.getHTMLElement().setAttribute("aria-expanded", "true"),
							this.W();
					}
					fb(y) {
						if (!this.y.length) return;
						t.$ahb.stop(y);
						const $ = y.target;
						if (!$ || $.classList.contains("slider")) return;
						const v = $.closest(".monaco-list-row");
						if (!v) return;
						const S = Number(v.getAttribute("data-index")),
							I = v.classList.contains("option-disabled");
						S >= 0 &&
							S < this.m.length &&
							!I &&
							((this.n = S),
							this.select(this.n),
							this.y.setFocus([this.n]),
							this.y.reveal(this.y.getFocus()[0]),
							this.n !== this.F &&
								((this.F = this.n),
								this.q.fire({
									index: this.h.selectedIndex,
									selected: this.m[this.n].text,
								}),
								this.m[this.n] &&
									this.m[this.n].text &&
									this.O(this.m[this.n].text)),
							this.Z(!0));
					}
					gb() {
						this.N || (this.n !== this.F && this.select(this.F), this.Z(!1));
					}
					hb(y, $) {
						const v = (I) => {
								for (let T = 0; T < I.childNodes.length; T++) {
									const P = I.childNodes.item(T);
									(P.tagName && P.tagName.toLowerCase()) === "img"
										? P.remove()
										: v(P);
								}
							},
							S = (0, E.$Uib)(
								{ value: y, supportThemeIcons: !0 },
								{ actionHandler: $ },
							);
						return (
							S.element.classList.add("select-box-description-markdown"),
							v(S.element),
							S.element
						);
					}
					ib(y) {
						!this.f || !this.H || this.jb(y.indexes[0]);
					}
					jb(y) {
						this.I.innerText = "";
						const $ = this.m[y],
							v = $?.description ?? "",
							S = $?.descriptionIsMarkdown ?? !1;
						if (v) {
							if (S) {
								const I = $.descriptionMarkdownActionHandler;
								this.I.appendChild(this.hb(v, I));
							} else this.I.innerText = v;
							this.I.style.display = "block";
						} else this.I.style.display = "none";
						(this.J = !0), this.t.layout(), (this.J = !1);
					}
					kb(y) {
						t.$ahb.stop(y), this.select(this.F), this.Z(!0);
					}
					lb(y) {
						t.$ahb.stop(y),
							this.n !== this.F &&
								((this.F = this.n),
								this.q.fire({
									index: this.h.selectedIndex,
									selected: this.m[this.n].text,
								}),
								this.m[this.n] &&
									this.m[this.n].text &&
									this.O(this.m[this.n].text)),
							this.Z(!0);
					}
					mb(y) {
						if (this.n < this.m.length - 1) {
							t.$ahb.stop(y, !0);
							const $ = this.m[this.n + 1].isDisabled;
							if ($ && this.m.length > this.n + 2) this.n += 2;
							else {
								if ($) return;
								this.n++;
							}
							this.select(this.n),
								this.y.setFocus([this.n]),
								this.y.reveal(this.y.getFocus()[0]);
						}
					}
					nb(y) {
						this.n > 0 &&
							(t.$ahb.stop(y, !0),
							this.m[this.n - 1].isDisabled && this.n > 1
								? (this.n -= 2)
								: this.n--,
							this.select(this.n),
							this.y.setFocus([this.n]),
							this.y.reveal(this.y.getFocus()[0]));
					}
					ob(y) {
						t.$ahb.stop(y),
							this.y.focusPreviousPage(),
							setTimeout(() => {
								(this.n = this.y.getFocus()[0]),
									this.m[this.n].isDisabled &&
										this.n < this.m.length - 1 &&
										(this.n++, this.y.setFocus([this.n])),
									this.y.reveal(this.n),
									this.select(this.n);
							}, 1);
					}
					pb(y) {
						t.$ahb.stop(y),
							this.y.focusNextPage(),
							setTimeout(() => {
								(this.n = this.y.getFocus()[0]),
									this.m[this.n].isDisabled &&
										this.n > 0 &&
										(this.n--, this.y.setFocus([this.n])),
									this.y.reveal(this.n),
									this.select(this.n);
							}, 1);
					}
					qb(y) {
						t.$ahb.stop(y),
							!(this.m.length < 2) &&
								((this.n = 0),
								this.m[this.n].isDisabled && this.n > 1 && this.n++,
								this.y.setFocus([this.n]),
								this.y.reveal(this.n),
								this.select(this.n));
					}
					rb(y) {
						t.$ahb.stop(y),
							!(this.m.length < 2) &&
								((this.n = this.m.length - 1),
								this.m[this.n].isDisabled && this.n > 1 && this.n--,
								this.y.setFocus([this.n]),
								this.y.reveal(this.n),
								this.select(this.n));
					}
					sb(y) {
						const $ = h.KeyCodeUtils.toString(y.keyCode);
						let v = -1;
						for (let S = 0; S < this.m.length - 1; S++)
							if (
								((v = (S + this.n + 1) % this.m.length),
								this.m[v].text.charAt(0).toUpperCase() === $ &&
									!this.m[v].isDisabled)
							) {
								this.select(v),
									this.y.setFocus([v]),
									this.y.reveal(this.y.getFocus()[0]),
									t.$ahb.stop(y);
								break;
							}
					}
					dispose() {
						this.Z(!1), super.dispose();
					}
				}
				e.$2ib = s;
			},
		),
		define(
			de[596],
			he([1, 0, 278, 2684, 2677, 235, 12, 2252]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5ib = e.$4ib = void 0),
					(e.$4ib = {
						...t.$Qib,
						selectBackground: "#3C3C3C",
						selectForeground: "#F0F0F0",
						selectBorder: "#3C3C3C",
						decoratorRightForeground: void 0,
						selectListBackground: void 0,
						selectListBorder: void 0,
						focusBorder: void 0,
					});
				class d extends E.$Uhb {
					constructor(r, u, a, h, c) {
						super(),
							C.$m && !c?.useCustomDrawn
								? (this.a = new w.$3ib(r, u, h, c))
								: (this.a = new i.$2ib(r, u, a, h, c)),
							this.D(this.a);
					}
					get onDidSelect() {
						return this.a.onDidSelect;
					}
					setOptions(r, u) {
						this.a.setOptions(r, u);
					}
					select(r) {
						this.a.select(r);
					}
					setAriaLabel(r) {
						this.a.setAriaLabel(r);
					}
					focus() {
						this.a.focus();
					}
					blur() {
						this.a.blur();
					}
					setFocusable(r) {
						this.a.setFocusable(r);
					}
					setEnabled(r) {
						this.a.setEnabled(r);
					}
					render(r) {
						this.a.render(r);
					}
				}
				e.$5ib = d;
			},
		),
		define(
			de[198],
			he([1, 0, 139, 323, 7, 159, 95, 596, 50, 3, 12, 28, 4, 317, 1508]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ajb = e.$_ib = e.$$ib = void 0),
					(u = mt(u)),
					(a = mt(a)),
					(h = mt(h));
				class n extends r.$1c {
					get action() {
						return this._action;
					}
					constructor(f, b, s = {}) {
						super(),
							(this.m = s),
							(this._context = f || this),
							(this._action = b),
							b instanceof m.$rj &&
								this.D(
									b.onDidChange((l) => {
										this.element && this.q(l);
									}),
								);
					}
					q(f) {
						f.enabled !== void 0 && this.t(),
							f.checked !== void 0 && this.H(),
							f.class !== void 0 && this.G(),
							f.label !== void 0 && (this.u(), this.C()),
							f.tooltip !== void 0 && this.C();
					}
					get actionRunner() {
						return this.j || (this.j = this.D(new m.$sj())), this.j;
					}
					set actionRunner(f) {
						this.j = f;
					}
					isEnabled() {
						return this._action.enabled;
					}
					setActionContext(f) {
						this._context = f;
					}
					render(f) {
						const b = (this.element = f);
						this.D(E.$Qhb.addTarget(f));
						const s = this.m && this.m.draggable;
						s &&
							((f.draggable = !0),
							t.$Ofb &&
								this.D(
									(0, w.$0fb)(f, w.$$gb.DRAG_START, (l) =>
										l.dataTransfer?.setData(i.$Ohb.TEXT, this._action.label),
									),
								)),
							this.D(
								(0, w.$0fb)(b, E.EventType.Tap, (l) => this.onClick(l, !0)),
							),
							this.D(
								(0, w.$0fb)(b, w.$$gb.MOUSE_DOWN, (l) => {
									s || w.$ahb.stop(l, !0),
										this._action.enabled &&
											l.button === 0 &&
											b.classList.add("active");
								}),
							),
							u.$m &&
								this.D(
									(0, w.$0fb)(b, w.$$gb.CONTEXT_MENU, (l) => {
										l.button === 0 && l.ctrlKey === !0 && this.onClick(l);
									}),
								),
							this.D(
								(0, w.$0fb)(b, w.$$gb.CLICK, (l) => {
									w.$ahb.stop(l, !0),
										(this.m && this.m.isMenu) || this.onClick(l);
								}),
							),
							this.D(
								(0, w.$0fb)(b, w.$$gb.DBLCLICK, (l) => {
									w.$ahb.stop(l, !0);
								}),
							),
							[w.$$gb.MOUSE_UP, w.$$gb.MOUSE_OUT].forEach((l) => {
								this.D(
									(0, w.$0fb)(b, l, (y) => {
										w.$ahb.stop(y), b.classList.remove("active");
									}),
								);
							});
					}
					onClick(f, b = !1) {
						w.$ahb.stop(f, !0);
						const s = a.$ug(this._context)
							? this.m?.useEventAsContext
								? f
								: { preserveFocus: b }
							: this._context;
						this.actionRunner.run(this._action, s);
					}
					focus() {
						this.element &&
							((this.element.tabIndex = 0),
							this.element.focus(),
							this.element.classList.add("focused"));
					}
					isFocused() {
						return !!this.element?.classList.contains("focused");
					}
					blur() {
						this.element &&
							(this.element.blur(),
							(this.element.tabIndex = -1),
							this.element.classList.remove("focused"));
					}
					setFocusable(f) {
						this.element && (this.element.tabIndex = f ? 0 : -1);
					}
					get trapsArrowNavigation() {
						return !1;
					}
					t() {}
					u() {}
					w() {
						return this.action.class;
					}
					z() {
						return this.action.tooltip;
					}
					C() {
						if (!this.element) return;
						const f = this.z() ?? "";
						if ((this.F(), this.m.hoverDelegate?.showNativeHover))
							this.element.title = f;
						else if (!this.f && f !== "") {
							const b = this.m.hoverDelegate ?? (0, C.$cib)("element");
							this.f = this.B.add(
								(0, c.$1ib)().setupManagedHover(b, this.element, f),
							);
						} else this.f && this.f.update(f);
					}
					F() {
						if (this.element) {
							const f = this.z() ?? "";
							this.element.setAttribute("aria-label", f);
						}
					}
					G() {}
					H() {}
					dispose() {
						this.element && (this.element.remove(), (this.element = void 0)),
							(this._context = void 0),
							super.dispose();
					}
				}
				e.$$ib = n;
				class g extends n {
					constructor(f, b, s) {
						super(f, b, s),
							(this.m = s),
							(this.m.icon = s.icon !== void 0 ? s.icon : !1),
							(this.m.label = s.label !== void 0 ? s.label : !0),
							(this.L = "");
					}
					render(f) {
						if ((super.render(f), a.$vg(this.element), this.M)) {
							const b = document.createElement("a");
							b.classList.add("action-label"),
								(b.style.display = "flex"),
								(b.style.alignItems = "center"),
								(b.style.gap = "4px"),
								(b.style.flexDirection = "row"),
								b.setAttribute("role", this.N()),
								b.appendChild(this.M);
							const s = document.createElement("span");
							(this.I = s), b.appendChild(s), this.element.appendChild(b);
						} else {
							const b = document.createElement("a");
							if (
								(b.classList.add("action-label"),
								b.setAttribute("role", this.N()),
								(this.I = b),
								this.element.appendChild(b),
								this.m.label && this.m.keybinding)
							) {
								const s = document.createElement("span");
								s.classList.add("keybinding"),
									(s.textContent = this.m.keybinding),
									this.element.appendChild(s);
							}
						}
						this.G(), this.u(), this.C(), this.t(), this.H();
					}
					N() {
						return this._action.id === m.$tj.ID
							? "presentation"
							: this.m.isMenu
								? "menuitem"
								: this.m.isTabList
									? "tab"
									: "button";
					}
					focus() {
						this.I && ((this.I.tabIndex = 0), this.I.focus());
					}
					isFocused() {
						return !!this.I && this.I?.tabIndex === 0;
					}
					blur() {
						this.I && (this.I.tabIndex = -1);
					}
					setFocusable(f) {
						this.I && (this.I.tabIndex = f ? 0 : -1);
					}
					u() {
						this.m.label && this.I && (this.I.textContent = this.action.label);
					}
					z() {
						let f = null;
						return (
							this.action.tooltip
								? (f = this.action.tooltip)
								: !this.m.label &&
									this.action.label &&
									this.m.icon &&
									((f = this.action.label),
									this.m.keybinding &&
										(f = h.localize(0, null, f, this.m.keybinding))),
							f ?? void 0
						);
					}
					G() {
						this.L && this.I && this.I.classList.remove(...this.L.split(" ")),
							this.m.icon
								? ((this.L = this.w()),
									this.I &&
										(this.I.classList.add("codicon"),
										this.L && this.I.classList.add(...this.L.split(" "))),
									this.t())
								: this.I?.classList.remove("codicon");
					}
					t() {
						this.action.enabled
							? (this.I &&
									(this.I.removeAttribute("aria-disabled"),
									this.I.classList.remove("disabled")),
								this.element?.classList.remove("disabled"))
							: (this.I &&
									(this.I.setAttribute("aria-disabled", "true"),
									this.I.classList.add("disabled")),
								this.element?.classList.add("disabled"));
					}
					F() {
						if (this.I) {
							const f = this.z() ?? "";
							this.I.setAttribute("aria-label", f);
						}
					}
					H() {
						this.I &&
							(this.action.checked !== void 0
								? (this.I.classList.toggle("checked", this.action.checked),
									this.m.isTabList
										? this.I.setAttribute(
												"aria-selected",
												this.action.checked ? "true" : "false",
											)
										: (this.I.setAttribute(
												"aria-checked",
												this.action.checked ? "true" : "false",
											),
											this.I.setAttribute("role", "checkbox")))
								: (this.I.classList.remove("checked"),
									this.I.removeAttribute(
										this.m.isTabList ? "aria-selected" : "aria-checked",
									),
									this.I.setAttribute("role", this.N())));
					}
				}
				e.$_ib = g;
				class p extends n {
					constructor(f, b, s, l, y, $, v) {
						super(f, b),
							(this.b = new d.$5ib(s, l, y, $, v)),
							this.b.setFocusable(!1),
							this.D(this.b),
							this.g();
					}
					setOptions(f, b) {
						this.b.setOptions(f, b);
					}
					select(f) {
						this.b.select(f);
					}
					g() {
						this.D(this.b.onDidSelect((f) => this.n(f.selected, f.index)));
					}
					n(f, b) {
						this.actionRunner.run(this._action, this.r(f, b));
					}
					r(f, b) {
						return f;
					}
					setFocusable(f) {
						this.b.setFocusable(f);
					}
					focus() {
						this.b?.focus();
					}
					blur() {
						this.b?.blur();
					}
					render(f) {
						this.b.render(f);
					}
				}
				e.$ajb = p;
			},
		),
		define(
			de[105],
			he([1, 0, 7, 114, 198, 95, 50, 6, 27, 3, 28, 1508]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eib = e.ActionsOrientation = void 0),
					(e.$fib = c),
					(t = mt(t)),
					(u = mt(u));
				var a;
				(function (n) {
					(n[(n.HORIZONTAL = 0)] = "HORIZONTAL"),
						(n[(n.VERTICAL = 1)] = "VERTICAL");
				})(a || (e.ActionsOrientation = a = {}));
				class h extends r.$1c {
					constructor(g, p = {}) {
						super(),
							(this.j = this.D(new r.$Zc())),
							(this.r = this.D(new r.$0c())),
							(this.w = !1),
							(this.y = !0),
							(this.C = this.D(new d.$re())),
							(this.onDidBlur = this.C.event),
							(this.F = this.D(
								new d.$re({ onWillAddFirstListener: () => (this.G = !0) }),
							)),
							(this.onDidCancel = this.F.event),
							(this.G = !1),
							(this.H = this.D(new d.$re())),
							(this.onDidRun = this.H.event),
							(this.I = this.D(new d.$re())),
							(this.onWillRun = this.I.event),
							(this.b = p),
							(this.m = p.context ?? null),
							(this.n = this.b.orientation ?? a.HORIZONTAL),
							(this.q = {
								keyDown: this.b.triggerKeys?.keyDown ?? !1,
								keys: this.b.triggerKeys?.keys ?? [
									m.KeyCode.Enter,
									m.KeyCode.Space,
								],
							}),
							(this.f = p.hoverDelegate ?? this.D((0, E.$dib)())),
							this.b.actionRunner
								? (this.g = this.b.actionRunner)
								: ((this.g = new C.$sj()), this.j.add(this.g)),
							this.j.add(this.g.onDidRun((b) => this.H.fire(b))),
							this.j.add(this.g.onWillRun((b) => this.I.fire(b))),
							(this.viewItems = []),
							(this.t = void 0),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = "monaco-action-bar");
						let o, f;
						switch (this.n) {
							case a.HORIZONTAL:
								(o = [m.KeyCode.LeftArrow]), (f = [m.KeyCode.RightArrow]);
								break;
							case a.VERTICAL:
								(o = [m.KeyCode.UpArrow]),
									(f = [m.KeyCode.DownArrow]),
									(this.domNode.className += " vertical");
								break;
						}
						this.D(
							t.$0fb(this.domNode, t.$$gb.KEY_DOWN, (b) => {
								const s = new i.$7fb(b);
								let l = !0;
								const y =
									typeof this.t == "number" ? this.viewItems[this.t] : void 0;
								o && (s.equals(o[0]) || s.equals(o[1]))
									? (l = this.Q())
									: f && (s.equals(f[0]) || s.equals(f[1]))
										? (l = this.P())
										: s.equals(m.KeyCode.Escape) && this.G
											? this.F.fire()
											: s.equals(m.KeyCode.Home)
												? (l = this.N())
												: s.equals(m.KeyCode.End)
													? (l = this.O())
													: s.equals(m.KeyCode.Tab) &&
															y instanceof w.$$ib &&
															y.trapsArrowNavigation
														? (l = this.P(void 0, !0))
														: this.L(s)
															? this.q.keyDown
																? this.S(s)
																: (this.w = !0)
															: (l = !1),
									l && (s.preventDefault(), s.stopPropagation());
							}),
						),
							this.D(
								t.$0fb(this.domNode, t.$$gb.KEY_UP, (b) => {
									const s = new i.$7fb(b);
									this.L(s)
										? (!this.q.keyDown && this.w && ((this.w = !1), this.S(s)),
											s.preventDefault(),
											s.stopPropagation())
										: (s.equals(m.KeyCode.Tab) ||
												s.equals(m.KeyMod.Shift | m.KeyCode.Tab) ||
												s.equals(m.KeyCode.UpArrow) ||
												s.equals(m.KeyCode.DownArrow) ||
												s.equals(m.KeyCode.LeftArrow) ||
												s.equals(m.KeyCode.RightArrow)) &&
											this.M();
								}),
							),
							(this.u = this.D(t.$dhb(this.domNode))),
							this.D(
								this.u.onDidBlur(() => {
									(t.$Jgb() === this.domNode ||
										!t.$Bgb(t.$Jgb(), this.domNode)) &&
										(this.C.fire(),
										(this.s = this.t),
										(this.t = void 0),
										(this.w = !1));
								}),
							),
							this.D(this.u.onDidFocus(() => this.M())),
							(this.z = document.createElement("ul")),
							(this.z.className = "actions-container"),
							this.b.highlightToggledItems &&
								this.z.classList.add("highlight-toggled"),
							this.z.setAttribute("role", this.b.ariaRole || "toolbar"),
							this.b.ariaLabel &&
								this.z.setAttribute("aria-label", this.b.ariaLabel),
							this.domNode.appendChild(this.z),
							g.appendChild(this.domNode);
					}
					J() {
						this.length() >= 1
							? this.z.setAttribute("role", this.b.ariaRole || "toolbar")
							: this.z.setAttribute("role", "presentation");
					}
					setAriaLabel(g) {
						g
							? this.z.setAttribute("aria-label", g)
							: this.z.removeAttribute("aria-label");
					}
					setFocusable(g) {
						if (((this.y = g), this.y)) {
							const p = this.viewItems.find(
								(o) => o instanceof w.$$ib && o.isEnabled(),
							);
							p instanceof w.$$ib && p.setFocusable(!0);
						} else
							this.viewItems.forEach((p) => {
								p instanceof w.$$ib && p.setFocusable(!1);
							});
					}
					L(g) {
						let p = !1;
						return (
							this.q.keys.forEach((o) => {
								p = p || g.equals(o);
							}),
							p
						);
					}
					M() {
						for (let g = 0; g < this.z.children.length; g++) {
							const p = this.z.children[g];
							if (t.$Bgb(t.$Jgb(), p)) {
								(this.t = g), this.viewItems[this.t]?.showHover?.();
								break;
							}
						}
					}
					get context() {
						return this.m;
					}
					set context(g) {
						(this.m = g), this.viewItems.forEach((p) => p.setActionContext(g));
					}
					get actionRunner() {
						return this.g;
					}
					set actionRunner(g) {
						(this.g = g),
							this.j.clear(),
							this.j.add(this.g.onDidRun((p) => this.H.fire(p))),
							this.j.add(this.g.onWillRun((p) => this.I.fire(p))),
							this.viewItems.forEach((p) => (p.actionRunner = g));
					}
					getContainer() {
						return this.domNode;
					}
					hasAction(g) {
						return this.viewItems.findIndex((p) => p.action.id === g.id) !== -1;
					}
					getAction(g) {
						if (typeof g == "number") return this.viewItems[g]?.action;
						if (t.$Ygb(g)) {
							for (; g.parentElement !== this.z; ) {
								if (!g.parentElement) return;
								g = g.parentElement;
							}
							for (let p = 0; p < this.z.childNodes.length; p++)
								if (this.z.childNodes[p] === g) return this.viewItems[p].action;
						}
					}
					push(g, p = {}) {
						const o = Array.isArray(g) ? g : [g];
						let f = u.$pg(p.index) ? p.index : null;
						o.forEach((b) => {
							const s = document.createElement("li");
							(s.className = "action-item"),
								s.setAttribute("role", "presentation");
							let l;
							const y = {
								hoverDelegate: this.f,
								...p,
								isTabList: this.b.ariaRole === "tablist",
							};
							this.b.actionViewItemProvider &&
								(l = this.b.actionViewItemProvider(b, y)),
								l || (l = new w.$_ib(this.context, b, y)),
								this.b.allowContextMenu ||
									this.r.set(
										l,
										t.$0fb(s, t.$$gb.CONTEXT_MENU, ($) => {
											t.$ahb.stop($, !0);
										}),
									),
								(l.actionRunner = this.g),
								l.setActionContext(this.context),
								l.render(s),
								this.y &&
									l instanceof w.$$ib &&
									this.viewItems.length === 0 &&
									l.setFocusable(!0),
								f === null || f < 0 || f >= this.z.children.length
									? (this.z.appendChild(s), this.viewItems.push(l))
									: (this.z.insertBefore(s, this.z.children[f]),
										this.viewItems.splice(f, 0, l),
										f++);
						}),
							typeof this.t == "number" && this.focus(this.t),
							this.J();
					}
					getWidth(g) {
						if (g >= 0 && g < this.z.children.length) {
							const p = this.z.children.item(g);
							if (p) return p.clientWidth;
						}
						return 0;
					}
					getHeight(g) {
						if (g >= 0 && g < this.z.children.length) {
							const p = this.z.children.item(g);
							if (p) return p.clientHeight;
						}
						return 0;
					}
					pull(g) {
						g >= 0 &&
							g < this.viewItems.length &&
							(this.z.childNodes[g].remove(),
							this.r.deleteAndDispose(this.viewItems[g]),
							(0, r.$Vc)(this.viewItems.splice(g, 1)),
							this.J());
					}
					clear() {
						this.isEmpty() ||
							((this.viewItems = (0, r.$Vc)(this.viewItems)),
							this.r.clearAndDisposeAll(),
							t.$9fb(this.z),
							this.J());
					}
					length() {
						return this.viewItems.length;
					}
					isEmpty() {
						return this.viewItems.length === 0;
					}
					focus(g) {
						let p = !1,
							o;
						if (
							(g === void 0
								? (p = !0)
								: typeof g == "number"
									? (o = g)
									: typeof g == "boolean" && (p = g),
							p && typeof this.t > "u")
						) {
							const f = this.viewItems.findIndex((b) => b.isEnabled());
							(this.t = f === -1 ? void 0 : f), this.R(void 0, void 0, !0);
						} else o !== void 0 && (this.t = o), this.R(void 0, void 0, !0);
					}
					N() {
						return (this.t = this.length() - 1), this.P(!0);
					}
					O() {
						return (this.t = 0), this.Q(!0);
					}
					P(g, p) {
						if (typeof this.t > "u") this.t = this.viewItems.length - 1;
						else if (this.viewItems.length <= 1) return !1;
						const o = this.t;
						let f;
						do {
							if (
								!g &&
								this.b.preventLoopNavigation &&
								this.t + 1 >= this.viewItems.length
							)
								return (this.t = o), !1;
							(this.t = (this.t + 1) % this.viewItems.length),
								(f = this.viewItems[this.t]);
						} while (
							this.t !== o &&
							((this.b.focusOnlyEnabledItems && !f.isEnabled()) ||
								f.action.id === C.$tj.ID)
						);
						return this.R(void 0, void 0, p), !0;
					}
					Q(g) {
						if (typeof this.t > "u") this.t = 0;
						else if (this.viewItems.length <= 1) return !1;
						const p = this.t;
						let o;
						do {
							if (((this.t = this.t - 1), this.t < 0)) {
								if (!g && this.b.preventLoopNavigation) return (this.t = p), !1;
								this.t = this.viewItems.length - 1;
							}
							o = this.viewItems[this.t];
						} while (
							this.t !== p &&
							((this.b.focusOnlyEnabledItems && !o.isEnabled()) ||
								o.action.id === C.$tj.ID)
						);
						return this.R(!0), !0;
					}
					R(g, p, o = !1) {
						typeof this.t > "u" && this.z.focus({ preventScroll: p }),
							this.s !== void 0 &&
								this.s !== this.t &&
								this.viewItems[this.s]?.blur();
						const f = this.t !== void 0 ? this.viewItems[this.t] : void 0;
						if (f) {
							let b = !0;
							u.$zg(f.focus) || (b = !1),
								this.b.focusOnlyEnabledItems &&
									u.$zg(f.isEnabled) &&
									!f.isEnabled() &&
									(b = !1),
								f.action.id === C.$tj.ID && (b = !1),
								b
									? (o || this.s !== this.t) && (f.focus(g), (this.s = this.t))
									: (this.z.focus({ preventScroll: p }), (this.s = void 0)),
								b && f.showHover?.();
						}
					}
					S(g) {
						if (typeof this.t > "u") return;
						const p = this.viewItems[this.t];
						if (p instanceof w.$$ib) {
							const o =
								p._context === null || p._context === void 0 ? g : p._context;
							this.run(p._action, o);
						}
					}
					async run(g, p) {
						await this.g.run(g, p);
					}
					dispose() {
						(this.m = void 0),
							(this.viewItems = (0, r.$Vc)(this.viewItems)),
							this.getContainer().remove(),
							super.dispose();
					}
				}
				e.$eib = h;
				function c(n) {
					if (!n.length) return n;
					let g = -1;
					for (let o = 0; o < n.length; o++)
						if (n[o].id !== C.$tj.ID) {
							g = o;
							break;
						}
					if (g === -1) return [];
					n = n.slice(g);
					for (let o = n.length - 1; o >= 0 && n[o].id === C.$tj.ID; o--)
						n.splice(o, 1);
					let p = !1;
					for (let o = n.length - 1; o >= 0; o--) {
						const f = n[o].id === C.$tj.ID;
						f && !p ? n.splice(o, 1) : f ? f && (p = !1) : (p = !0);
					}
					return n;
				}
			},
		),
		define(
			de[437],
			he([1, 0, 4, 7, 114, 198, 2674, 50, 14, 26, 6, 27, 95, 317, 1509]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qob = e.$Pob = void 0),
					(t = mt(t));
				class n extends E.$$ib {
					constructor(o, f, b, s = Object.create(null)) {
						super(null, o, s),
							(this.I = null),
							(this.J = this.D(new u.$re())),
							(this.onDidChangeVisibility = this.J.event),
							(this.b = f),
							(this.y = b),
							(this.m = s),
							this.m.actionRunner && (this.actionRunner = this.m.actionRunner);
					}
					render(o) {
						this.I = o;
						const f = (l) => {
								this.element = (0, i.$fhb)(l, (0, i.$)("a.action-label"));
								let y = [];
								return (
									typeof this.m.classNames == "string"
										? (y = this.m.classNames.split(/\s+/g).filter(($) => !!$))
										: this.m.classNames && (y = this.m.classNames),
									y.find(($) => $ === "icon") || y.push("codicon"),
									this.element.classList.add(...y),
									this.element.setAttribute("role", "button"),
									this.element.setAttribute("aria-haspopup", "true"),
									this.element.setAttribute("aria-expanded", "false"),
									this._action.label &&
										this.D(
											(0, c.$1ib)().setupManagedHover(
												this.m.hoverDelegate ?? (0, h.$cib)("mouse"),
												this.element,
												this._action.label,
											),
										),
									(this.element.ariaLabel = this._action.label || ""),
									null
								);
							},
							b = Array.isArray(this.b),
							s = {
								contextMenuProvider: this.y,
								labelRenderer: f,
								menuAsChild: this.m.menuAsChild,
								actions: b ? this.b : void 0,
								actionProvider: b ? void 0 : this.b,
								skipTelemetry: this.m.skipTelemetry,
							};
						if (
							((this.n = this.D(new C.$mob(o, s))),
							this.D(
								this.n.onDidChangeVisibility((l) => {
									this.element?.setAttribute("aria-expanded", `${l}`),
										this.J.fire(l);
								}),
							),
							(this.n.menuOptions = {
								actionViewItemProvider: this.m.actionViewItemProvider,
								actionRunner: this.actionRunner,
								getKeyBinding: this.m.keybindingProvider,
								context: this._context,
							}),
							this.m.anchorAlignmentProvider)
						) {
							const l = this;
							this.n.menuOptions = {
								...this.n.menuOptions,
								get anchorAlignment() {
									return l.m.anchorAlignmentProvider();
								},
							};
						}
						this.C(), this.t();
					}
					z() {
						let o = null;
						return (
							this.action.tooltip
								? (o = this.action.tooltip)
								: this.action.label && (o = this.action.label),
							o ?? void 0
						);
					}
					setActionContext(o) {
						super.setActionContext(o),
							this.n &&
								(this.n.menuOptions
									? (this.n.menuOptions.context = o)
									: (this.n.menuOptions = { context: o }));
					}
					show() {
						this.n?.show();
					}
					t() {
						const o = !this.action.enabled;
						this.I?.classList.toggle("disabled", o),
							this.element?.classList.toggle("disabled", o);
					}
				}
				e.$Pob = n;
				class g extends E.$_ib {
					constructor(o, f, b, s) {
						super(o, f, b), (this.n = s);
					}
					render(o) {
						if ((super.render(o), this.element)) {
							this.element.classList.add("action-dropdown-item");
							const f = {
									getActions: () => {
										const l = this.m.menuActionsOrProvider;
										return Array.isArray(l) ? l : l.getActions();
									},
								},
								b = this.m.menuActionClassNames || [],
								s = (0, i.h)("div.action-dropdown-item-separator", [
									(0, i.h)("div", {}),
								]).root;
							s.classList.toggle("prominent", b.includes("prominent")),
								(0, i.$fhb)(this.element, s),
								(this.g = this.D(
									new n(
										this.D(new d.$rj("dropdownAction", t.localize(8, null))),
										f,
										this.n,
										{
											classNames: [
												"dropdown",
												...r.ThemeIcon.asClassNameArray(m.$ak.dropDownButton),
												...b,
											],
											hoverDelegate: this.m.hoverDelegate,
										},
									),
								)),
								this.g.render(this.element),
								this.D(
									(0, i.$0fb)(this.element, i.$$gb.KEY_DOWN, (l) => {
										if (f.getActions().length === 0) return;
										const y = new w.$7fb(l);
										let $ = !1;
										this.g?.isFocused() && y.equals(a.KeyCode.LeftArrow)
											? (($ = !0), this.g?.blur(), this.focus())
											: this.isFocused() &&
												y.equals(a.KeyCode.RightArrow) &&
												(($ = !0), this.blur(), this.g?.focus()),
											$ && (y.preventDefault(), y.stopPropagation());
									}),
								);
						}
					}
					blur() {
						super.blur(), this.g?.blur();
					}
					setFocusable(o) {
						super.setFocusable(o), this.g?.setFocusable(o);
					}
				}
				e.$Qob = g;
			},
		),
		define(
			de[292],
			he([
				1, 0, 7, 265, 595, 105, 127, 276, 317, 95, 203, 235, 6, 647, 82, 195, 4,
				2242,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nob = e.$Mob = e.$Lob = e.MessageType = void 0),
					(t = mt(t)),
					(C = mt(C)),
					(p = mt(p));
				const o = t.$;
				var f;
				(function (l) {
					(l[(l.INFO = 1)] = "INFO"),
						(l[(l.WARNING = 2)] = "WARNING"),
						(l[(l.ERROR = 3)] = "ERROR");
				})(f || (e.MessageType = f = {})),
					(e.$Lob = {
						inputBackground: "#3C3C3C",
						inputForeground: "#CCCCCC",
						inputValidationInfoBorder: "#55AAFF",
						inputValidationInfoBackground: "#063B49",
						inputValidationWarningBorder: "#B89500",
						inputValidationWarningBackground: "#352A05",
						inputValidationErrorBorder: "#BE1100",
						inputValidationErrorBackground: "#5A1D1D",
						inputBorder: void 0,
						inputValidationErrorForeground: void 0,
						inputValidationInfoForeground: void 0,
						inputValidationWarningForeground: void 0,
					});
				class b extends a.$Uhb {
					constructor(y, $, v) {
						super(),
							(this.w = "idle"),
							(this.M = Number.POSITIVE_INFINITY),
							(this.P = this.D(new h.$re())),
							(this.onDidChange = this.P.event),
							(this.Q = this.D(new h.$re())),
							(this.onDidHeightChange = this.Q.event),
							(this.a = $),
							(this.g = v),
							(this.h = null),
							(this.n = this.g.placeholder || ""),
							(this.r = this.g.tooltip ?? (this.n || "")),
							(this.s = this.g.ariaLabel || ""),
							this.g.validationOptions &&
								(this.t = this.g.validationOptions.validation),
							(this.element = t.$fhb(y, o(".monaco-inputbox.idle")));
						const S = this.g.flexibleHeight ? "textarea" : "input",
							I = t.$fhb(this.element, o(".ibwrapper"));
						if (
							((this.b = t.$fhb(I, o(S + ".input.empty"))),
							this.b.setAttribute("autocorrect", "off"),
							this.b.setAttribute("autocapitalize", "off"),
							this.b.setAttribute("spellcheck", "false"),
							this.G(this.b, () =>
								this.element.classList.add("synthetic-focus"),
							),
							this.F(this.b, () =>
								this.element.classList.remove("synthetic-focus"),
							),
							this.g.flexibleHeight)
						) {
							(this.M =
								typeof this.g.flexibleMaxHeight == "number"
									? this.g.flexibleMaxHeight
									: Number.POSITIVE_INFINITY),
								(this.y = t.$fhb(I, o("div.mirror"))),
								(this.y.innerText = "\xA0"),
								(this.N = new u.$5hb(this.element, {
									vertical: g.ScrollbarVisibility.Auto,
								})),
								this.g.flexibleWidth &&
									(this.b.setAttribute("wrap", "off"),
									(this.y.style.whiteSpace = "pre"),
									(this.y.style.wordWrap = "initial")),
								t.$fhb(y, this.N.getDomNode()),
								this.D(this.N),
								this.D(
									this.N.onScroll((k) => (this.b.scrollTop = k.scrollTop)),
								);
							const T = this.D(new i.$mib(y.ownerDocument, "selectionchange")),
								P = h.Event.filter(
									T.event,
									() => y.ownerDocument.getSelection()?.anchorNode === I,
								);
							this.D(P(this.U, this)),
								this.D(this.onDidHeightChange(this.U, this));
						} else
							(this.b.type = this.g.type || "text"),
								this.b.setAttribute("wrap", "off");
						this.s && this.b.setAttribute("aria-label", this.s),
							this.n &&
								!this.g.showPlaceholderOnFocus &&
								this.setPlaceHolder(this.n),
							this.r && this.setTooltip(this.r),
							this.C(this.b, () => this.Z()),
							this.F(this.b, () => this.R()),
							this.G(this.b, () => this.S()),
							this.D(this.I(this.b)),
							setTimeout(() => this.ab(), 0),
							this.g.actions &&
								((this.c = this.D(new E.$eib(this.element))),
								this.c.push(this.g.actions, { icon: !0, label: !1 })),
							this.bb();
					}
					R() {
						this.Y(),
							this.g.showPlaceholderOnFocus &&
								this.b.setAttribute("placeholder", "");
					}
					S() {
						this.X(),
							this.g.showPlaceholderOnFocus &&
								this.b.setAttribute("placeholder", this.n || "");
					}
					setPlaceHolder(y) {
						(this.n = y), this.b.setAttribute("placeholder", y);
					}
					setTooltip(y) {
						(this.r = y),
							this.O
								? this.O.update(y)
								: (this.O = this.D(
										(0, m.$1ib)().setupManagedHover(
											(0, r.$cib)("mouse"),
											this.b,
											y,
										),
									));
					}
					setAriaLabel(y) {
						(this.s = y),
							y
								? this.b.setAttribute("aria-label", this.s)
								: this.b.removeAttribute("aria-label");
					}
					getAriaLabel() {
						return this.s;
					}
					get mirrorElement() {
						return this.y;
					}
					get inputElement() {
						return this.b;
					}
					get value() {
						return this.b.value;
					}
					set value(y) {
						this.b.value !== y && ((this.b.value = y), this.Z());
					}
					get step() {
						return this.b.step;
					}
					set step(y) {
						this.b.step = y;
					}
					get height() {
						return typeof this.J == "number" ? this.J : t.$zgb(this.element);
					}
					focus() {
						this.b.focus();
					}
					blur() {
						this.b.blur();
					}
					hasFocus() {
						return t.$Kgb(this.b);
					}
					select(y = null) {
						this.b.select(),
							y &&
								(this.b.setSelectionRange(y.start, y.end),
								y.end === this.b.value.length &&
									(this.b.scrollLeft = this.b.scrollWidth));
					}
					isSelectionAtEnd() {
						return (
							this.b.selectionEnd === this.b.value.length &&
							this.b.selectionStart === this.b.selectionEnd
						);
					}
					getSelection() {
						const y = this.b.selectionStart;
						if (y === null) return null;
						const $ = this.b.selectionEnd ?? y;
						return { start: y, end: $ };
					}
					enable() {
						this.b.removeAttribute("disabled");
					}
					disable() {
						this.blur(), (this.b.disabled = !0), this.Y();
					}
					setEnabled(y) {
						y ? this.enable() : this.disable();
					}
					get width() {
						return t.$vgb(this.b);
					}
					set width(y) {
						if (this.g.flexibleHeight && this.g.flexibleWidth) {
							let $ = 0;
							if (this.y) {
								const v = parseFloat(this.y.style.paddingLeft || "") || 0,
									S = parseFloat(this.y.style.paddingRight || "") || 0;
								$ = v + S;
							}
							this.b.style.width = y - $ + "px";
						} else this.b.style.width = y + "px";
						this.y && (this.y.style.width = y + "px");
					}
					set paddingRight(y) {
						(this.b.style.width = `calc(100% - ${y}px)`),
							this.y && (this.y.style.paddingRight = y + "px");
					}
					U() {
						if (
							typeof this.L != "number" ||
							typeof this.J != "number" ||
							!this.N
						)
							return;
						const y = this.L,
							$ = this.J,
							v = this.b.scrollTop;
						this.N.setScrollDimensions({ scrollHeight: y, height: $ }),
							this.N.setScrollPosition({ scrollTop: v });
					}
					showMessage(y, $) {
						if (this.w === "open" && (0, n.$zo)(this.h, y)) return;
						(this.h = y),
							this.element.classList.remove("idle"),
							this.element.classList.remove("info"),
							this.element.classList.remove("warning"),
							this.element.classList.remove("error"),
							this.element.classList.add(this.W(y.type));
						const v = this.stylesForType(this.h.type);
						(this.element.style.border = `1px solid ${t.$xhb(v.border, "transparent")}`),
							this.h.content && (this.hasFocus() || $) && this.X();
					}
					hideMessage() {
						(this.h = null),
							this.element.classList.remove("info"),
							this.element.classList.remove("warning"),
							this.element.classList.remove("error"),
							this.element.classList.add("idle"),
							this.Y(),
							this.bb();
					}
					isInputValid() {
						return !!this.t && !this.t(this.value);
					}
					validate() {
						let y = null;
						return (
							this.t &&
								((y = this.t(this.value)),
								y
									? (this.inputElement.setAttribute("aria-invalid", "true"),
										this.showMessage(y))
									: this.inputElement.hasAttribute("aria-invalid") &&
										(this.inputElement.removeAttribute("aria-invalid"),
										this.hideMessage())),
							y?.type
						);
					}
					stylesForType(y) {
						const $ = this.g.inputBoxStyles;
						switch (y) {
							case f.INFO:
								return {
									border: $.inputValidationInfoBorder,
									background: $.inputValidationInfoBackground,
									foreground: $.inputValidationInfoForeground,
								};
							case f.WARNING:
								return {
									border: $.inputValidationWarningBorder,
									background: $.inputValidationWarningBackground,
									foreground: $.inputValidationWarningForeground,
								};
							default:
								return {
									border: $.inputValidationErrorBorder,
									background: $.inputValidationErrorBackground,
									foreground: $.inputValidationErrorForeground,
								};
						}
					}
					W(y) {
						switch (y) {
							case f.INFO:
								return "info";
							case f.WARNING:
								return "warning";
							default:
								return "error";
						}
					}
					X() {
						if (!this.a || !this.h) return;
						let y;
						const $ = () => (y.style.width = t.$vgb(this.element) + "px");
						this.a.showContextView({
							getAnchor: () => this.element,
							anchorAlignment: d.AnchorAlignment.RIGHT,
							render: (S) => {
								if (!this.h) return null;
								(y = t.$fhb(S, o(".monaco-inputbox-container"))), $();
								const I = { inline: !0, className: "monaco-inputbox-message" },
									T = this.h.formatContent
										? (0, w.$kib)(this.h.content, I)
										: (0, w.$jib)(this.h.content, I);
								T.classList.add(this.W(this.h.type));
								const P = this.stylesForType(this.h.type);
								return (
									(T.style.backgroundColor = P.background ?? ""),
									(T.style.color = P.foreground ?? ""),
									(T.style.border = P.border ? `1px solid ${P.border}` : ""),
									t.$fhb(y, T),
									null
								);
							},
							onHide: () => {
								this.w = "closed";
							},
							layout: $,
						});
						let v;
						this.h.type === f.ERROR
							? (v = p.localize(19, null, this.h.content))
							: this.h.type === f.WARNING
								? (v = p.localize(20, null, this.h.content))
								: (v = p.localize(21, null, this.h.content)),
							C.$oib(v),
							(this.w = "open");
					}
					Y() {
						this.a &&
							(this.w === "open" && this.a.hideContextView(),
							(this.w = "idle"));
					}
					Z() {
						this.P.fire(this.value),
							this.validate(),
							this.ab(),
							this.b.classList.toggle("empty", !this.value),
							this.w === "open" && this.a && this.a.layout();
					}
					ab() {
						if (!this.y) return;
						const y = this.value,
							v = y.charCodeAt(y.length - 1) === 10 ? " " : "";
						(y + v).replace(/\u000c/g, "")
							? (this.y.textContent = y + v)
							: (this.y.innerText = "\xA0"),
							this.layout();
					}
					bb() {
						const y = this.g.inputBoxStyles,
							$ = y.inputBackground ?? "",
							v = y.inputForeground ?? "",
							S = y.inputBorder ?? "";
						(this.element.style.backgroundColor = $),
							(this.element.style.color = v),
							(this.b.style.backgroundColor = "inherit"),
							(this.b.style.color = v),
							(this.element.style.border = `1px solid ${t.$xhb(S, "transparent")}`);
					}
					layout() {
						if (!this.y) return;
						const y = this.L;
						(this.L = t.$zgb(this.y)),
							y !== this.L &&
								((this.J = Math.min(this.L, this.M)),
								(this.b.style.height = this.J + "px"),
								this.Q.fire(this.L));
					}
					insertAtCursor(y) {
						const $ = this.inputElement,
							v = $.selectionStart,
							S = $.selectionEnd,
							I = $.value;
						v !== null &&
							S !== null &&
							((this.value = I.substr(0, v) + y + I.substr(S)),
							$.setSelectionRange(v + 1, v + 1),
							this.layout());
					}
					dispose() {
						this.Y(), (this.h = null), this.c?.dispose(), super.dispose();
					}
				}
				e.$Mob = b;
				class s extends b {
					constructor(y, $, v) {
						const S = p.localize(22, null, "\u21C5"),
							I = p.localize(23, null, "\u21C5");
						super(y, $, v),
							(this.eb = this.D(new h.$re())),
							(this.onDidFocus = this.eb.event),
							(this.fb = this.D(new h.$re())),
							(this.onDidBlur = this.fb.event),
							(this.cb = new c.$Job(v.history, 100));
						const T = () => {
							if (
								v.showHistoryHint &&
								v.showHistoryHint() &&
								!this.n.endsWith(S) &&
								!this.n.endsWith(I) &&
								this.cb.getHistory().length
							) {
								const P = this.n.endsWith(")") ? S : I,
									k = this.n + P;
								v.showPlaceholderOnFocus && !t.$Kgb(this.b)
									? (this.n = k)
									: this.setPlaceHolder(k);
							}
						};
						(this.db = new MutationObserver((P, k) => {
							P.forEach((L) => {
								L.target.textContent || T();
							});
						})),
							this.db.observe(this.b, { attributeFilter: ["class"] }),
							this.G(this.b, () => T()),
							this.F(this.b, () => {
								const P = (k) => {
									if (this.n.endsWith(k)) {
										const L = this.n.slice(0, this.n.length - k.length);
										return (
											v.showPlaceholderOnFocus
												? (this.n = L)
												: this.setPlaceHolder(L),
											!0
										);
									} else return !1;
								};
								P(I) || P(S);
							});
					}
					dispose() {
						super.dispose(),
							this.db && (this.db.disconnect(), (this.db = void 0));
					}
					addToHistory(y) {
						this.value &&
							(y || this.value !== this.ib()) &&
							this.cb.add(this.value);
					}
					prependHistory(y) {
						const $ = this.getHistory();
						this.clearHistory(),
							y.forEach((v) => {
								this.cb.add(v);
							}),
							$.forEach((v) => {
								this.cb.add(v);
							});
					}
					getHistory() {
						return this.cb.getHistory();
					}
					isAtFirstInHistory() {
						return this.cb.isFirst();
					}
					isAtLastInHistory() {
						return this.cb.isLast();
					}
					isNowhereInHistory() {
						return this.cb.isNowhere();
					}
					showNextValue() {
						this.cb.has(this.value) || this.addToHistory();
						let y = this.kb();
						y && (y = y === this.value ? this.kb() : y),
							(this.value = y ?? ""),
							C.$pib(this.value ? this.value : p.localize(24, null));
					}
					showPreviousValue() {
						this.cb.has(this.value) || this.addToHistory();
						let y = this.jb();
						y && (y = y === this.value ? this.jb() : y),
							y && ((this.value = y), C.$pib(this.value));
					}
					clearHistory() {
						this.cb.clear();
					}
					setPlaceHolder(y) {
						super.setPlaceHolder(y), this.setTooltip(y);
					}
					R() {
						super.R(), this.fb.fire();
					}
					S() {
						super.S(), this.eb.fire();
					}
					ib() {
						let y = this.cb.current();
						return y || ((y = this.cb.last()), this.cb.next()), y;
					}
					jb() {
						return this.cb.previous() || this.cb.first();
					}
					kb() {
						return this.cb.next();
					}
				}
				e.$Nob = s;
			},
		),
		define(
			de[2685],
			he([1, 0, 7, 127, 292, 203, 6, 3, 26, 4, 195, 410, 2241]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zob = void 0),
					(t = mt(t));
				class h extends d.$1c {
					static {
						this.a = 0;
					}
					constructor(n) {
						super(),
							(this.s = n),
							(this.domId = `icon_select_box_id_${++h.a}`),
							(this.b = this.D(new C.$re())),
							(this.onDidSelect = this.b.event),
							(this.c = []),
							(this.f = 0),
							(this.g = 1),
							(this.q = 36),
							(this.r = 36),
							(this.domNode = t.$(".icon-select-box")),
							this.D(this.t());
					}
					t() {
						const n = new d.$Zc(),
							g = t.$fhb(this.domNode, t.$(".icon-select-box-container"));
						g.style.margin = "10px 15px";
						const p = t.$fhb(g, t.$(".icon-select-input-container"));
						(p.style.paddingBottom = "10px"),
							(this.h = n.add(
								new w.$Mob(p, void 0, {
									placeholder: (0, r.localize)(17, null),
									inputBoxStyles: this.s.inputBoxStyles,
								}),
							));
						const o = (this.m = t.$(".icon-select-icons-container", {
							id: `${this.domId}_icons`,
						}));
						(o.role = "listbox"),
							(o.tabIndex = 0),
							(this.j = n.add(
								new E.$8hb(o, {
									useShadows: !1,
									horizontal: u.ScrollbarVisibility.Hidden,
								}),
							)),
							t.$fhb(g, this.j.getDomNode()),
							this.s.showIconInfo &&
								(this.n = this.D(
									new a.$Wob(
										t.$fhb(
											t.$fhb(g, t.$(".icon-select-id-container")),
											t.$(".icon-select-id-label"),
										),
									),
								));
						const f = n.add(new d.$2c());
						return (
							(f.value = this.u(this.s.icons, [], o)),
							this.j.scanDomNode(),
							n.add(
								this.h.onDidChange((b) => {
									const s = [],
										l = [];
									for (const y of this.s.icons) {
										const $ = this.z(b, y.id);
										$ && (s.push(y), l.push($));
									}
									s.length &&
										((f.value = this.u(s, l, o)), this.j?.scanDomNode());
								}),
							),
							(this.h.inputElement.role = "combobox"),
							(this.h.inputElement.ariaHasPopup = "menu"),
							(this.h.inputElement.ariaAutoComplete = "list"),
							(this.h.inputElement.ariaExpanded = "true"),
							this.h.inputElement.setAttribute("aria-controls", o.id),
							n
						);
					}
					u(n, g, p) {
						const o = new d.$Zc();
						t.$9fb(p);
						const f = this.c[this.f]?.icon;
						let b = 0;
						const s = [];
						if (n.length)
							for (let l = 0; l < n.length; l++) {
								const y = n[l],
									$ = t.$fhb(
										p,
										t.$(".icon-container", { id: `${this.domId}_icons_${l}` }),
									);
								($.style.width = `${this.q}px`),
									($.style.height = `${this.r}px`),
									($.title = y.id),
									($.role = "button"),
									$.setAttribute("aria-setsize", `${n.length}`),
									$.setAttribute("aria-posinset", `${l + 1}`),
									t.$fhb($, t.$(m.ThemeIcon.asCSSSelector(y))),
									s.push({ icon: y, element: $, highlightMatches: g[l] }),
									o.add(
										t.$0fb($, t.$$gb.CLICK, (v) => {
											v.stopPropagation(), this.setSelection(l);
										}),
									),
									y === f && (b = l);
							}
						else {
							const l = (0, r.localize)(18, null);
							t.$fhb(p, t.$(".icon-no-results", void 0, l)), (0, i.$oib)(l);
						}
						return this.c.splice(0, this.c.length, ...s), this.w(b), o;
					}
					w(n) {
						const g = this.c[this.f];
						g && g.element.classList.remove("focused"), (this.f = n);
						const p = this.c[n];
						p && p.element.classList.add("focused"),
							this.h &&
								(p
									? this.h.inputElement.setAttribute(
											"aria-activedescendant",
											p.element.id,
										)
									: this.h.inputElement.removeAttribute(
											"aria-activedescendant",
										)),
							this.n &&
								(p
									? this.n.set(p.icon.id, p.highlightMatches)
									: this.n.set("")),
							this.y(n);
					}
					y(n) {
						if (!this.j || n < 0 || n >= this.c.length) return;
						const g = this.c[n].element;
						if (!g) return;
						const { height: p } = this.j.getScrollDimensions(),
							{ scrollTop: o } = this.j.getScrollPosition();
						g.offsetTop + this.r > o + p
							? this.j.setScrollPosition({
									scrollTop: g.offsetTop + this.r - p,
								})
							: g.offsetTop < o &&
								this.j.setScrollPosition({ scrollTop: g.offsetTop });
					}
					z(n, g) {
						const p = g.toLowerCase().indexOf(n.toLowerCase());
						return p !== -1 ? [{ start: p, end: p + n.length }] : null;
					}
					layout(n) {
						(this.domNode.style.width = `${n.width}px`),
							(this.domNode.style.height = `${n.height}px`);
						const g = n.width - 30;
						if (((this.g = Math.floor(g / this.q)), this.g === 0))
							throw new Error("Insufficient width");
						const p = g % this.q,
							o = Math.floor(p / this.g);
						for (const { element: b } of this.c) b.style.marginRight = `${o}px`;
						const f = p % this.g;
						this.m &&
							((this.m.style.paddingLeft = `${Math.floor(f / 2)}px`),
							(this.m.style.paddingRight = `${Math.ceil(f / 2)}px`)),
							this.j &&
								((this.j.getDomNode().style.height = `${this.n ? n.height - 80 : n.height - 40}px`),
								this.j.scanDomNode());
					}
					getFocus() {
						return [this.f];
					}
					setSelection(n) {
						if (n < 0 || n >= this.c.length)
							throw new Error(`Invalid index ${n}`);
						this.w(n), this.b.fire(this.c[n].icon);
					}
					clearInput() {
						this.h && (this.h.value = "");
					}
					focus() {
						this.h?.focus(), this.w(0);
					}
					focusNext() {
						this.w((this.f + 1) % this.c.length);
					}
					focusPrevious() {
						this.w((this.f - 1 + this.c.length) % this.c.length);
					}
					focusNextRow() {
						let n = this.f + this.g;
						n >= this.c.length &&
							((n = (n + 1) % this.g), (n = n >= this.c.length ? 0 : n)),
							this.w(n);
					}
					focusPreviousRow() {
						let n = this.f - this.g;
						if (n < 0) {
							const g = Math.floor(this.c.length / this.g);
							(n = this.f + this.g * g - 1),
								(n =
									n < 0
										? this.c.length - 1
										: n >= this.c.length
											? n - this.g
											: n);
						}
						this.w(n);
					}
					getFocusedIcon() {
						return this.c[this.f].icon;
					}
				}
				e.$Zob = h;
			},
		),
		define(
			de[1168],
			he([
				1, 0, 139, 159, 7, 114, 168, 105, 198, 276, 203, 50, 15, 14, 903, 26,
				274, 27, 3, 12, 195, 37,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Menu =
						e.$iob =
						e.VerticalDirection =
						e.HorizontalDirection =
						e.$hob =
						e.$gob =
							void 0),
					(e.$kob = P),
					(e.$lob = k),
					(l = mt(l)),
					(e.$gob = /\(&([^\s&])\)|(^|[^&])&([^\s&])/),
					(e.$hob = /(&amp;)?(&amp;)([^\s&])/g);
				var y;
				(function (D) {
					(D[(D.Right = 0)] = "Right"), (D[(D.Left = 1)] = "Left");
				})(y || (e.HorizontalDirection = y = {}));
				var $;
				(function (D) {
					(D[(D.Above = 0)] = "Above"), (D[(D.Below = 1)] = "Below");
				})($ || (e.VerticalDirection = $ = {})),
					(e.$iob = {
						shadowColor: void 0,
						borderColor: void 0,
						foregroundColor: void 0,
						backgroundColor: void 0,
						selectionForegroundColor: void 0,
						selectionBackgroundColor: void 0,
						selectionBorderColor: void 0,
						separatorColor: void 0,
						scrollbarShadow: void 0,
						scrollbarSliderBackground: void 0,
						scrollbarSliderHoverBackground: void 0,
						scrollbarSliderActiveBackground: void 0,
					});
				class v extends d.$eib {
					constructor(M, N, A, R) {
						M.classList.add("monaco-menu-container"),
							M.setAttribute("role", "presentation");
						const O = document.createElement("div");
						O.classList.add("monaco-menu"),
							O.setAttribute("role", "presentation"),
							super(O, {
								orientation: d.ActionsOrientation.VERTICAL,
								actionViewItemProvider: (F) => this.fb(F, A, B),
								context: A.context,
								actionRunner: A.actionRunner,
								ariaLabel: A.ariaLabel,
								ariaRole: "menu",
								focusOnlyEnabledItems: !0,
								triggerKeys: {
									keys: [
										o.KeyCode.Enter,
										...(b.$m || b.$n ? [o.KeyCode.Space] : []),
									],
									keyDown: !0,
								},
							}),
							(this.Z = R),
							(this.X = O),
							(this.z.tabIndex = 0),
							this.ab(M, R),
							this.D(i.$Qhb.addTarget(O)),
							this.D(
								(0, w.$0fb)(O, w.$$gb.KEY_DOWN, (F) => {
									new E.$7fb(F).equals(o.KeyCode.Tab) && F.preventDefault();
								}),
							),
							A.enableMnemonics &&
								this.D(
									(0, w.$0fb)(O, w.$$gb.KEY_DOWN, (F) => {
										const x = F.key.toLocaleLowerCase();
										if (this.U.has(x)) {
											w.$ahb.stop(F, !0);
											const H = this.U.get(x);
											if (
												(H.length === 1 &&
													(H[0] instanceof I &&
														H[0].container &&
														this.cb(H[0].container),
													H[0].onClick(F)),
												H.length > 1)
											) {
												const q = H.shift();
												q && q.container && (this.cb(q.container), H.push(q)),
													this.U.set(x, H);
											}
										}
									}),
								),
							b.$n &&
								this.D(
									(0, w.$0fb)(O, w.$$gb.KEY_DOWN, (F) => {
										const x = new E.$7fb(F);
										x.equals(o.KeyCode.Home) || x.equals(o.KeyCode.PageUp)
											? ((this.t = this.viewItems.length - 1),
												this.P(),
												w.$ahb.stop(F, !0))
											: (x.equals(o.KeyCode.End) ||
													x.equals(o.KeyCode.PageDown)) &&
												((this.t = 0), this.Q(), w.$ahb.stop(F, !0));
									}),
								),
							this.D(
								(0, w.$0fb)(this.domNode, w.$$gb.MOUSE_OUT, (F) => {
									const x = F.relatedTarget;
									(0, w.$Bgb)(x, this.domNode) ||
										((this.t = void 0), this.R(), F.stopPropagation());
								}),
							),
							this.D(
								(0, w.$0fb)(this.z, w.$$gb.MOUSE_OVER, (F) => {
									let x = F.target;
									if (!(!x || !(0, w.$Bgb)(x, this.z) || x === this.z)) {
										for (
											;
											x.parentElement !== this.z && x.parentElement !== null;
										)
											x = x.parentElement;
										if (x.classList.contains("action-item")) {
											const H = this.t;
											this.db(x), H !== this.t && this.R();
										}
									}
								}),
							),
							this.D(i.$Qhb.addTarget(this.z)),
							this.D(
								(0, w.$0fb)(this.z, i.EventType.Tap, (F) => {
									let x = F.initialTarget;
									if (!(!x || !(0, w.$Bgb)(x, this.z) || x === this.z)) {
										for (
											;
											x.parentElement !== this.z && x.parentElement !== null;
										)
											x = x.parentElement;
										if (x.classList.contains("action-item")) {
											const H = this.t;
											this.db(x), H !== this.t && this.R();
										}
									}
								}),
							);
						const B = { parent: this };
						(this.U = new Map()),
							(this.W = this.D(
								new u.$8hb(O, {
									alwaysConsumeMouseWheel: !0,
									horizontal: s.ScrollbarVisibility.Hidden,
									vertical: s.ScrollbarVisibility.Visible,
									verticalScrollbarSize: 7,
									handleMouseWheel: !0,
									useShadows: !0,
								}),
							));
						const U = this.W.getDomNode();
						(U.style.position = ""),
							this.bb(U, R),
							this.D(
								(0, w.$0fb)(O, i.EventType.Change, (F) => {
									w.$ahb.stop(F, !0);
									const x = this.W.getScrollPosition().scrollTop;
									this.W.setScrollPosition({ scrollTop: x - F.translationY });
								}),
							),
							this.D(
								(0, w.$0fb)(U, w.$$gb.MOUSE_UP, (F) => {
									F.preventDefault();
								}),
							);
						const z = (0, w.getWindow)(M);
						(O.style.maxHeight = `${Math.max(10, z.innerHeight - M.getBoundingClientRect().top - 35)}px`),
							(N = N.filter((F, x) =>
								A.submenuIds?.has(F.id)
									? (console.warn(`Found submenu cycle: ${F.id}`), !1)
									: !(
											F instanceof a.$tj &&
											(x === N.length - 1 ||
												x === 0 ||
												N[x - 1] instanceof a.$tj)
										),
							)),
							this.push(N, { icon: !0, label: !0, isMenu: !0 }),
							M.appendChild(this.W.getDomNode()),
							this.W.scanDomNode(),
							this.viewItems
								.filter((F) => !(F instanceof T))
								.forEach((F, x, H) => {
									F.updatePositionInSet(x + 1, H.length);
								});
					}
					ab(M, N) {
						this.Y ||
							((0, w.$Hgb)(M)
								? (this.Y = (0, w.$Rgb)(M))
								: (v.globalStyleSheet || (v.globalStyleSheet = (0, w.$Rgb)()),
									(this.Y = v.globalStyleSheet))),
							(this.Y.textContent = L(N, (0, w.$Hgb)(M)));
					}
					bb(M, N) {
						const A = N.foregroundColor ?? "",
							R = N.backgroundColor ?? "",
							O = N.borderColor ? `1px solid ${N.borderColor}` : "",
							B = "5px",
							U = N.shadowColor ? `0 2px 8px ${N.shadowColor}` : "";
						(M.style.outline = O),
							(M.style.borderRadius = B),
							(M.style.color = A),
							(M.style.backgroundColor = R),
							(M.style.boxShadow = U);
					}
					getContainer() {
						return this.W.getDomNode();
					}
					get onScroll() {
						return this.W.onScroll;
					}
					get scrollOffset() {
						return this.X.scrollTop;
					}
					trigger(M) {
						if (M <= this.viewItems.length && M >= 0) {
							const N = this.viewItems[M];
							if (N instanceof I) super.focus(M), N.open(!0);
							else if (N instanceof S) super.run(N._action, N._context);
							else return;
						}
					}
					cb(M) {
						const N = this.t;
						this.db(M), N !== this.t && this.R();
					}
					db(M) {
						for (let N = 0; N < this.z.children.length; N++) {
							const A = this.z.children[N];
							if (M === A) {
								this.t = N;
								break;
							}
						}
					}
					R(M) {
						super.R(M, !0, !0),
							typeof this.t < "u" &&
								this.W.setScrollPosition({
									scrollTop: Math.round(this.X.scrollTop),
								});
					}
					fb(M, N, A) {
						if (M instanceof a.$tj)
							return new T(N.context, M, { icon: !0 }, this.Z);
						if (M instanceof a.$uj) {
							const R = new I(
								M,
								M.actions,
								A,
								{ ...N, submenuIds: new Set([...(N.submenuIds || []), M.id]) },
								this.Z,
							);
							if (N.enableMnemonics) {
								const O = R.getMnemonic();
								if (O && R.isEnabled()) {
									let B = [];
									this.U.has(O) && (B = this.U.get(O)),
										B.push(R),
										this.U.set(O, B);
								}
							}
							return R;
						} else {
							const R = {
								enableMnemonics: N.enableMnemonics,
								useEventAsContext: N.useEventAsContext,
							};
							if (N.getKeyBinding) {
								const B = N.getKeyBinding(M);
								if (B) {
									const U = B.getLabel();
									U && (R.keybinding = U);
								}
							}
							const O = new S(N.context, M, R, this.Z);
							if (N.enableMnemonics) {
								const B = O.getMnemonic();
								if (B && O.isEnabled()) {
									let U = [];
									this.U.has(B) && (U = this.U.get(B)),
										U.push(O),
										this.U.set(B, U);
								}
							}
							return O;
						}
					}
				}
				e.Menu = v;
				class S extends m.$$ib {
					constructor(M, N, A, R) {
						if (
							((A.isMenu = !0),
							super(N, N, A),
							(this.I = R),
							(this.m = A),
							(this.m.icon = A.icon !== void 0 ? A.icon : !1),
							(this.m.label = A.label !== void 0 ? A.label : !0),
							(this.y = ""),
							this.m.label && A.enableMnemonics)
						) {
							const O = this.action.label;
							if (O) {
								const B = e.$gob.exec(O);
								B && (this.s = (B[1] ? B[1] : B[3]).toLocaleLowerCase());
							}
						}
						(this.h = new h.$Yh(() => {
							this.element &&
								(this.D(
									(0, w.$0fb)(this.element, w.$$gb.MOUSE_UP, (O) => {
										if ((w.$ahb.stop(O, !0), t.$Ofb)) {
											if (
												new C.$2fb((0, w.getWindow)(this.element), O)
													.rightButton
											)
												return;
											this.onClick(O);
										} else
											setTimeout(() => {
												this.onClick(O);
											}, 0);
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.CONTEXT_MENU, (O) => {
										w.$ahb.stop(O, !0);
									}),
								));
						}, 100)),
							this.D(this.h);
					}
					render(M) {
						super.render(M),
							this.element &&
								((this.container = M),
								(this.g = (0, w.$fhb)(
									this.element,
									(0, w.$)("a.action-menu-item"),
								)),
								this._action.id === a.$tj.ID
									? this.g.setAttribute("role", "presentation")
									: (this.g.setAttribute("role", "menuitem"),
										this.s &&
											this.g.setAttribute("aria-keyshortcuts", `${this.s}`)),
								(this.r = (0, w.$fhb)(
									this.g,
									(0, w.$)(
										"span.menu-item-check" +
											g.ThemeIcon.asCSSSelector(c.$ak.menuSelection),
									),
								)),
								this.r.setAttribute("role", "none"),
								(this.n = (0, w.$fhb)(this.g, (0, w.$)("span.action-label"))),
								this.m.label &&
									this.m.keybinding &&
									((0, w.$fhb)(
										this.g,
										(0, w.$)("span.keybinding"),
									).textContent = this.m.keybinding),
								this.h.schedule(),
								this.G(),
								this.u(),
								this.C(),
								this.t(),
								this.H(),
								this.P());
					}
					blur() {
						super.blur(), this.P();
					}
					focus() {
						super.focus(), this.g?.focus(), this.P();
					}
					updatePositionInSet(M, N) {
						this.g &&
							(this.g.setAttribute("aria-posinset", `${M}`),
							this.g.setAttribute("aria-setsize", `${N}`));
					}
					u() {
						if (this.n && this.m.label) {
							(0, w.$9fb)(this.n);
							let M = (0, p.$$k)(this.action.label);
							if (M) {
								const N = P(M);
								this.m.enableMnemonics || (M = N),
									this.n.setAttribute("aria-label", N.replace(/&&/g, "&"));
								const A = e.$gob.exec(M);
								if (A) {
									(M = l.$nf(M)), (e.$hob.lastIndex = 0);
									let R = e.$hob.exec(M);
									for (; R && R[1]; ) R = e.$hob.exec(M);
									const O = (B) => B.replace(/&amp;&amp;/g, "&amp;");
									R
										? this.n.append(
												l.$tf(O(M.substr(0, R.index)), " "),
												(0, w.$)("u", { "aria-hidden": "true" }, R[3]),
												l.$uf(O(M.substr(R.index + R[0].length)), " "),
											)
										: (this.n.innerText = O(M).trim()),
										this.g?.setAttribute(
											"aria-keyshortcuts",
											(A[1] ? A[1] : A[3]).toLocaleLowerCase(),
										);
								} else this.n.innerText = M.replace(/&&/g, "&").trim();
							}
						}
					}
					C() {}
					G() {
						this.y && this.g && this.g.classList.remove(...this.y.split(" ")),
							this.m.icon && this.n
								? ((this.y = this.action.class || ""),
									this.n.classList.add("icon"),
									this.y && this.n.classList.add(...this.y.split(" ")),
									this.t())
								: this.n && this.n.classList.remove("icon");
					}
					t() {
						this.action.enabled
							? (this.element &&
									(this.element.classList.remove("disabled"),
									this.element.removeAttribute("aria-disabled")),
								this.g &&
									(this.g.classList.remove("disabled"),
									this.g.removeAttribute("aria-disabled"),
									(this.g.tabIndex = 0)))
							: (this.element &&
									(this.element.classList.add("disabled"),
									this.element.setAttribute("aria-disabled", "true")),
								this.g &&
									(this.g.classList.add("disabled"),
									this.g.setAttribute("aria-disabled", "true")));
					}
					H() {
						if (!this.g) return;
						const M = this.action.checked;
						this.g.classList.toggle("checked", !!M),
							M !== void 0
								? (this.g.setAttribute("role", "menuitemcheckbox"),
									this.g.setAttribute("aria-checked", M ? "true" : "false"))
								: (this.g.setAttribute("role", "menuitem"),
									this.g.setAttribute("aria-checked", ""));
					}
					getMnemonic() {
						return this.s;
					}
					P() {
						const M =
								this.element && this.element.classList.contains("focused"),
							N =
								M && this.I.selectionForegroundColor
									? this.I.selectionForegroundColor
									: this.I.foregroundColor,
							A =
								M && this.I.selectionBackgroundColor
									? this.I.selectionBackgroundColor
									: void 0,
							R =
								M && this.I.selectionBorderColor
									? `1px solid ${this.I.selectionBorderColor}`
									: "",
							O = M && this.I.selectionBorderColor ? "-1px" : "";
						this.g &&
							((this.g.style.color = N ?? ""),
							(this.g.style.backgroundColor = A ?? ""),
							(this.g.style.outline = R),
							(this.g.style.outlineOffset = O)),
							this.r && (this.r.style.color = N ?? "");
					}
				}
				class I extends S {
					constructor(M, N, A, R, O) {
						super(M, M, R, O),
							(this.ab = N),
							(this.bb = A),
							(this.cb = R),
							(this.Q = null),
							(this.U = this.D(new f.$Zc())),
							(this.W = !1),
							(this.Z =
								R && R.expandDirection !== void 0
									? R.expandDirection
									: { horizontal: y.Right, vertical: $.Below }),
							(this.X = new h.$Yh(() => {
								this.W && (this.eb(!1), this.gb(!1));
							}, 250)),
							(this.Y = new h.$Yh(() => {
								this.element &&
									!(0, w.$Bgb)((0, w.$Jgb)(), this.element) &&
									this.bb.submenu === this.Q &&
									(this.bb.parent.focus(!1), this.eb(!0));
							}, 750));
					}
					render(M) {
						super.render(M),
							this.element &&
								(this.g &&
									(this.g.classList.add("monaco-submenu-item"),
									(this.g.tabIndex = 0),
									this.g.setAttribute("aria-haspopup", "true"),
									this.hb("false"),
									(this.S = (0, w.$fhb)(
										this.g,
										(0, w.$)(
											"span.submenu-indicator" +
												g.ThemeIcon.asCSSSelector(c.$ak.menuSubmenu),
										),
									)),
									this.S.setAttribute("aria-hidden", "true")),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.KEY_UP, (N) => {
										const A = new E.$7fb(N);
										(A.equals(o.KeyCode.RightArrow) ||
											A.equals(o.KeyCode.Enter)) &&
											(w.$ahb.stop(N, !0), this.gb(!0));
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.KEY_DOWN, (N) => {
										const A = new E.$7fb(N);
										(0, w.$Jgb)() === this.g &&
											(A.equals(o.KeyCode.RightArrow) ||
												A.equals(o.KeyCode.Enter)) &&
											w.$ahb.stop(N, !0);
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.MOUSE_OVER, (N) => {
										this.W || ((this.W = !0), this.X.schedule());
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.MOUSE_LEAVE, (N) => {
										this.W = !1;
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.FOCUS_OUT, (N) => {
										this.element &&
											!(0, w.$Bgb)((0, w.$Jgb)(), this.element) &&
											this.Y.schedule();
									}),
								),
								this.D(
									this.bb.parent.onScroll(() => {
										this.bb.submenu === this.Q &&
											(this.bb.parent.focus(!1), this.eb(!0));
									}),
								));
					}
					t() {}
					open(M) {
						this.eb(!1), this.gb(M);
					}
					onClick(M) {
						w.$ahb.stop(M, !0), this.eb(!1), this.gb(!0);
					}
					eb(M) {
						if (this.bb.submenu && (M || this.bb.submenu !== this.Q)) {
							try {
								this.bb.submenu.dispose();
							} catch {}
							(this.bb.submenu = void 0),
								this.hb("false"),
								this.R && (this.U.clear(), (this.R = void 0));
						}
					}
					fb(M, N, A, R) {
						const O = { top: 0, left: 0 };
						return (
							(O.left = (0, r.$hib)(M.width, N.width, {
								position:
									R.horizontal === y.Right
										? r.LayoutAnchorPosition.Before
										: r.LayoutAnchorPosition.After,
								offset: A.left,
								size: A.width,
							})),
							O.left >= A.left &&
								O.left < A.left + A.width &&
								(A.left + 10 + N.width <= M.width && (O.left = A.left + 10),
								(A.top += 10),
								(A.height = 0)),
							(O.top = (0, r.$hib)(M.height, N.height, {
								position: r.LayoutAnchorPosition.Before,
								offset: A.top,
								size: 0,
							})),
							O.top + N.height === A.top &&
								O.top + A.height + N.height <= M.height &&
								(O.top += A.height),
							O
						);
					}
					gb(M = !0) {
						if (this.element)
							if (this.bb.submenu) this.bb.submenu.focus(!1);
							else {
								this.hb("true"),
									(this.R = (0, w.$fhb)(
										this.element,
										(0, w.$)("div.monaco-submenu"),
									)),
									this.R.classList.add(
										"menubar-menu-items-holder",
										"context-view",
									);
								const N = (0, w.getWindow)(
										this.bb.parent.domNode,
									).getComputedStyle(this.bb.parent.domNode),
									A = parseFloat(N.paddingTop || "0") || 0;
								(this.R.style.zIndex = "1"),
									(this.R.style.position = "fixed"),
									(this.R.style.top = "0"),
									(this.R.style.left = "0"),
									(this.bb.submenu = new v(
										this.R,
										this.ab.length ? this.ab : [new a.$vj()],
										this.cb,
										this.I,
									));
								const R = this.element.getBoundingClientRect(),
									O = {
										top: R.top - A,
										left: R.left,
										height: R.height + 2 * A,
										width: R.width,
									},
									B = this.R.getBoundingClientRect(),
									U = (0, w.getWindow)(this.element),
									{ top: z, left: F } = this.fb(
										new w.$pgb(U.innerWidth, U.innerHeight),
										w.$pgb.lift(B),
										O,
										this.Z,
									);
								(this.R.style.left = `${F - B.left}px`),
									(this.R.style.top = `${z - B.top}px`),
									this.U.add(
										(0, w.$0fb)(this.R, w.$$gb.KEY_UP, (x) => {
											new E.$7fb(x).equals(o.KeyCode.LeftArrow) &&
												(w.$ahb.stop(x, !0),
												this.bb.parent.focus(),
												this.eb(!0));
										}),
									),
									this.U.add(
										(0, w.$0fb)(this.R, w.$$gb.KEY_DOWN, (x) => {
											new E.$7fb(x).equals(o.KeyCode.LeftArrow) &&
												w.$ahb.stop(x, !0);
										}),
									),
									this.U.add(
										this.bb.submenu.onDidCancel(() => {
											this.bb.parent.focus(), this.eb(!0);
										}),
									),
									this.bb.submenu.focus(M),
									(this.Q = this.bb.submenu);
							}
					}
					hb(M) {
						this.g && this.g?.setAttribute("aria-expanded", M);
					}
					P() {
						super.P();
						const N =
							this.element &&
							this.element.classList.contains("focused") &&
							this.I.selectionForegroundColor
								? this.I.selectionForegroundColor
								: this.I.foregroundColor;
						this.S && (this.S.style.color = N ?? "");
					}
					dispose() {
						super.dispose(),
							this.Y.dispose(),
							this.Q && (this.Q.dispose(), (this.Q = null)),
							this.R && (this.R = void 0);
					}
				}
				class T extends m.$_ib {
					constructor(M, N, A, R) {
						super(M, N, A), (this.b = R);
					}
					render(M) {
						super.render(M),
							this.I &&
								(this.I.style.borderBottomColor = this.b.separatorColor
									? `${this.b.separatorColor}`
									: "");
					}
				}
				function P(D) {
					const M = e.$gob,
						N = M.exec(D);
					if (!N) return D;
					const A = !N[1];
					return D.replace(M, A ? "$2$3" : "").trim();
				}
				function k(D) {
					const M = (0, n.$9j)()[D.id];
					return `.codicon-${D.id}:before { content: '\\${M.toString(16)}'; }`;
				}
				function L(D, M) {
					let N = `
.monaco-menu {
	font-size: 13px;
	border-radius: 5px;
	min-width: 160px;
}

${k(c.$ak.menuSelection)}
${k(c.$ak.menuSubmenu)}

.monaco-menu .monaco-action-bar {
	text-align: right;
	overflow: hidden;
	white-space: nowrap;
}

.monaco-menu .monaco-action-bar .actions-container {
	display: flex;
	margin: 0 auto;
	padding: 0;
	width: 100%;
	justify-content: flex-end;
}

.monaco-menu .monaco-action-bar.vertical .actions-container {
	display: inline-block;
}

.monaco-menu .monaco-action-bar.reverse .actions-container {
	flex-direction: row-reverse;
}

.monaco-menu .monaco-action-bar .action-item {
	cursor: pointer;
	display: inline-block;
	transition: transform 50ms ease;
	position: relative;  /* DO NOT REMOVE - this is the key to preventing the ghosting icon bug in Chrome 42 */
}

.monaco-menu .monaco-action-bar .action-item.disabled {
	cursor: default;
}

.monaco-menu .monaco-action-bar .action-item .icon,
.monaco-menu .monaco-action-bar .action-item .codicon {
	display: inline-block;
}

.monaco-menu .monaco-action-bar .action-item .codicon {
	display: flex;
	align-items: center;
}

.monaco-menu .monaco-action-bar .action-label {
	font-size: 11px;
	margin-right: 4px;
}

.monaco-menu .monaco-action-bar .action-item.disabled .action-label,
.monaco-menu .monaco-action-bar .action-item.disabled .action-label:hover {
	color: var(--vscode-disabledForeground);
}

/* Vertical actions */

.monaco-menu .monaco-action-bar.vertical {
	text-align: left;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	display: block;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	display: block;
	border-bottom: 1px solid var(--vscode-menu-separatorBackground);
	padding-top: 1px;
	padding: 30px;
}

.monaco-menu .secondary-actions .monaco-action-bar .action-label {
	margin-left: 6px;
}

/* Action Items */
.monaco-menu .monaco-action-bar .action-item.select-container {
	overflow: hidden; /* somehow the dropdown overflows its container, we prevent it here to not push */
	flex: 1;
	max-width: 170px;
	min-width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
}

.monaco-menu .monaco-action-bar.vertical {
	margin-left: 0;
	overflow: visible;
}

.monaco-menu .monaco-action-bar.vertical .actions-container {
	display: block;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	padding: 0;
	transform: none;
	display: flex;
}

.monaco-menu .monaco-action-bar.vertical .action-item.active {
	transform: none;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item {
	flex: 1 1 auto;
	display: flex;
	height: 2em;
	align-items: center;
	position: relative;
	margin: 0 4px;
	border-radius: 4px;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item:hover .keybinding,
.monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .keybinding {
	opacity: unset;
}

.monaco-menu .monaco-action-bar.vertical .action-label {
	flex: 1 1 auto;
	text-decoration: none;
	padding: 0 1em;
	background: none;
	font-size: 12px;
	line-height: 1;
}

.monaco-menu .monaco-action-bar.vertical .keybinding,
.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	display: inline-block;
	flex: 2 1 auto;
	padding: 0 1em;
	text-align: right;
	font-size: 12px;
	line-height: 1;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon {
	font-size: 16px !important;
	display: flex;
	align-items: center;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon::before {
	margin-left: auto;
	margin-right: -20px;
}

.monaco-menu .monaco-action-bar.vertical .action-item.disabled .keybinding,
.monaco-menu .monaco-action-bar.vertical .action-item.disabled .submenu-indicator {
	opacity: 0.4;
}

.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator) {
	display: inline-block;
	box-sizing: border-box;
	margin: 0;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	position: static;
	overflow: visible;
}

.monaco-menu .monaco-action-bar.vertical .action-item .monaco-submenu {
	position: absolute;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	width: 100%;
	height: 0px !important;
	opacity: 1;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator.text {
	padding: 0.7em 1em 0.1em 1em;
	font-weight: bold;
	opacity: 1;
}

.monaco-menu .monaco-action-bar.vertical .action-label:hover {
	color: inherit;
}

.monaco-menu .monaco-action-bar.vertical .menu-item-check {
	position: absolute;
	visibility: hidden;
	width: 1em;
	height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item.checked .menu-item-check {
	visibility: visible;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Context Menu */

.context-view.monaco-menu-container {
	outline: 0;
	border: none;
	animation: fadeIn 0.083s linear;
	-webkit-app-region: no-drag;
}

.context-view.monaco-menu-container :focus,
.context-view.monaco-menu-container .monaco-action-bar.vertical:focus,
.context-view.monaco-menu-container .monaco-action-bar.vertical :focus {
	outline: 0;
}

.hc-black .context-view.monaco-menu-container,
.hc-light .context-view.monaco-menu-container,
:host-context(.hc-black) .context-view.monaco-menu-container,
:host-context(.hc-light) .context-view.monaco-menu-container {
	box-shadow: none;
}

.hc-black .monaco-menu .monaco-action-bar.vertical .action-item.focused,
.hc-light .monaco-menu .monaco-action-bar.vertical .action-item.focused,
:host-context(.hc-black) .monaco-menu .monaco-action-bar.vertical .action-item.focused,
:host-context(.hc-light) .monaco-menu .monaco-action-bar.vertical .action-item.focused {
	background: none;
}

/* Vertical Action Bar Styles */

.monaco-menu .monaco-action-bar.vertical {
	padding: 4px 0;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item {
	height: 2em;
}

.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator),
.monaco-menu .monaco-action-bar.vertical .keybinding {
	font-size: inherit;
	padding: 0 2em;
	max-height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .menu-item-check {
	font-size: inherit;
	width: 2em;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	font-size: inherit;
	margin: 5px 0 !important;
	padding: 0;
	border-radius: 0;
}

.linux .monaco-menu .monaco-action-bar.vertical .action-label.separator,
:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .action-label.separator {
	margin-left: 0;
	margin-right: 0;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	font-size: 60%;
	padding: 0 1.8em;
}

.linux .monaco-menu .monaco-action-bar.vertical .submenu-indicator,
:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	height: 100%;
	mask-size: 10px 10px;
	-webkit-mask-size: 10px 10px;
}

.monaco-menu .action-item {
	cursor: default;
}`;
					if (M) {
						N += `
			/* Arrows */
			.monaco-scrollable-element > .scrollbar > .scra {
				cursor: pointer;
				font-size: 11px !important;
			}

			.monaco-scrollable-element > .visible {
				opacity: 1;

				/* Background rule added for IE9 - to allow clicks on dom node */
				background:rgba(0,0,0,0);

				transition: opacity 100ms linear;
			}
			.monaco-scrollable-element > .invisible {
				opacity: 0;
				pointer-events: none;
			}
			.monaco-scrollable-element > .invisible.fade {
				transition: opacity 800ms linear;
			}

			/* Scrollable Content Inset Shadow */
			.monaco-scrollable-element > .shadow {
				position: absolute;
				display: none;
			}
			.monaco-scrollable-element > .shadow.top {
				display: block;
				top: 0;
				left: 3px;
				height: 3px;
				width: 100%;
			}
			.monaco-scrollable-element > .shadow.left {
				display: block;
				top: 3px;
				left: 0;
				height: 100%;
				width: 3px;
			}
			.monaco-scrollable-element > .shadow.top-left-corner {
				display: block;
				top: 0;
				left: 0;
				height: 3px;
				width: 3px;
			}
		`;
						const A = D.scrollbarShadow;
						A &&
							(N += `
				.monaco-scrollable-element > .shadow.top {
					box-shadow: ${A} 0 6px 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.left {
					box-shadow: ${A} 6px 0 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.top.left {
					box-shadow: ${A} 6px 6px 6px -6px inset;
				}
			`);
						const R = D.scrollbarSliderBackground;
						R &&
							(N += `
				.monaco-scrollable-element > .scrollbar > .slider {
					background: ${R};
				}
			`);
						const O = D.scrollbarSliderHoverBackground;
						O &&
							(N += `
				.monaco-scrollable-element > .scrollbar > .slider:hover {
					background: ${O};
				}
			`);
						const B = D.scrollbarSliderActiveBackground;
						B &&
							(N += `
				.monaco-scrollable-element > .scrollbar > .slider.active {
					background: ${B};
				}
			`);
					}
					return N;
				}
			},
		),
		define(
			de[2686],
			he([
				1, 0, 139, 7, 114, 168, 159, 1168, 50, 24, 15, 14, 26, 6, 27, 3, 12, 37,
				4, 75, 2246,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9ob = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(o = mt(o)),
					(f = mt(f));
				const s = i.$;
				var l;
				(function ($) {
					($[($.HIDDEN = 0)] = "HIDDEN"),
						($[($.VISIBLE = 1)] = "VISIBLE"),
						($[($.FOCUSED = 2)] = "FOCUSED"),
						($[($.OPEN = 3)] = "OPEN");
				})(l || (l = {}));
				class y extends g.$1c {
					static {
						this.OVERFLOW_INDEX = -1;
					}
					constructor(v, S, I) {
						super(),
							(this.F = v),
							(this.G = S),
							(this.H = I),
							(this.h = !1),
							(this.j = !1),
							(this.m = !1),
							(this.n = !1),
							(this.r = !1),
							(this.y = 0),
							(this.z = void 0),
							(this.C = this.D(new g.$Zc())),
							this.F.setAttribute("role", "menubar"),
							this.S && this.F.classList.add("compact"),
							(this.a = []),
							(this.q = new Map()),
							(this.s = l.VISIBLE),
							(this.u = this.D(new c.$re())),
							(this.w = this.D(new c.$re())),
							this.createOverflowMenu(),
							(this.g = this.D(new u.$Yh(() => this.update(), 200))),
							(this.t = this.G.actionRunner ?? this.D(new m.$sj())),
							this.D(
								this.t.onWillRun(() => {
									this.U();
								}),
							),
							this.D(i.$Fhb.getInstance().event(this.cb, this)),
							this.D(
								i.$0fb(this.F, i.$$gb.KEY_DOWN, (P) => {
									const k = new w.$7fb(P);
									let L = !0;
									const D = P.key ? P.key.toLocaleLowerCase() : "",
										M = p.$m && !this.S;
									if (
										k.equals(n.KeyCode.LeftArrow) ||
										(M && k.equals(n.KeyCode.Tab | n.KeyMod.Shift))
									)
										this.W();
									else if (
										k.equals(n.KeyCode.RightArrow) ||
										(M && k.equals(n.KeyCode.Tab))
									)
										this.X();
									else if (k.equals(n.KeyCode.Escape) && this.P && !this.Q)
										this.U();
									else if (
										!this.Q &&
										!k.ctrlKey &&
										this.G.enableMnemonics &&
										this.Z &&
										this.q.has(D)
									) {
										const N = this.q.get(D);
										this.bb(N, !1);
									} else L = !1;
									!this.S &&
										(k.equals(n.KeyCode.Tab | n.KeyMod.Shift) ||
											k.equals(n.KeyCode.Tab)) &&
										k.preventDefault(),
										L && (k.preventDefault(), k.stopPropagation());
								}),
							);
						const T = i.getWindow(this.F);
						this.D(
							i.$0fb(T, i.$$gb.MOUSE_DOWN, () => {
								this.P && this.U();
							}),
						),
							this.D(
								i.$0fb(this.F, i.$$gb.FOCUS_IN, (P) => {
									const k = P;
									k.relatedTarget &&
										(this.F.contains(k.relatedTarget) ||
											(this.f = k.relatedTarget));
								}),
							),
							this.D(
								i.$0fb(this.F, i.$$gb.FOCUS_OUT, (P) => {
									const k = P;
									k.relatedTarget
										? k.relatedTarget &&
											!this.F.contains(k.relatedTarget) &&
											((this.f = void 0), this.U())
										: this.U();
								}),
							),
							this.D(
								i.$0fb(T, i.$$gb.KEY_DOWN, (P) => {
									if (
										!this.G.enableMnemonics ||
										!P.altKey ||
										P.ctrlKey ||
										P.defaultPrevented
									)
										return;
									const k = P.key.toLocaleLowerCase();
									if (!this.q.has(k)) return;
									(this.Z = !0), this.Y(!0);
									const L = this.q.get(k);
									this.bb(L, !1);
								}),
							),
							this.U();
					}
					push(v) {
						(0, r.$6b)(v).forEach((I) => {
							const T = this.a.length,
								P = (0, d.$kob)(I.label),
								k = d.$gob.exec(I.label);
							if (k) {
								const L = k[1] ? k[1] : k[3];
								this.L(this.a.length, L);
							}
							if (this.S) this.a.push(I);
							else {
								const L = s("div.menubar-menu-button", {
										role: "menuitem",
										tabindex: -1,
										"aria-label": P,
										"aria-haspopup": !0,
									}),
									D = s("div.menubar-menu-title", {
										role: "none",
										"aria-hidden": !0,
									});
								L.appendChild(D),
									this.F.insertBefore(L, this.b.buttonElement),
									this.J(D, L, I.label),
									this.D(
										i.$0fb(L, i.$$gb.KEY_UP, (M) => {
											const N = new w.$7fb(M);
											let A = !0;
											(N.equals(n.KeyCode.DownArrow) ||
												N.equals(n.KeyCode.Enter)) &&
											!this.Q
												? ((this.c = { index: T }),
													(this.j = !0),
													(this.O = l.OPEN))
												: (A = !1),
												A && (N.preventDefault(), N.stopPropagation());
										}),
									),
									this.D(C.$Qhb.addTarget(L)),
									this.D(
										i.$0fb(L, C.EventType.Tap, (M) => {
											(this.Q &&
												this.c &&
												this.c.holder &&
												i.$Bgb(M.initialTarget, this.c.holder)) ||
												((this.n = !1),
												this.bb(T, !0),
												M.preventDefault(),
												M.stopPropagation());
										}),
									),
									this.D(
										i.$0fb(L, i.$$gb.MOUSE_DOWN, (M) => {
											if (!new E.$2fb(i.getWindow(L), M).leftButton) {
												M.preventDefault();
												return;
											}
											this.Q ? (this.n = !1) : ((this.n = !0), this.bb(T, !0)),
												M.preventDefault(),
												M.stopPropagation();
										}),
									),
									this.D(
										i.$0fb(L, i.$$gb.MOUSE_UP, (M) => {
											M.defaultPrevented ||
												(this.n ? (this.n = !1) : this.P && this.bb(T, !0));
										}),
									),
									this.D(
										i.$0fb(L, i.$$gb.MOUSE_ENTER, () => {
											this.Q && !this.db(T)
												? (L.focus(), this.eb(), this.fb(T, !1))
												: this.P &&
													!this.Q &&
													((this.c = { index: T }), L.focus());
										}),
									),
									this.a.push({
										label: I.label,
										actions: I.actions,
										buttonElement: L,
										titleElement: D,
									});
							}
						});
					}
					createOverflowMenu() {
						const v = this.S ? f.localize(26, null) : f.localize(27, null),
							S = s("div.menubar-menu-button", {
								role: "menuitem",
								tabindex: this.S ? 0 : -1,
								"aria-label": v,
								"aria-haspopup": !0,
							}),
							I = s(
								"div.menubar-menu-title.toolbar-toggle-more" +
									h.ThemeIcon.asCSSSelector(a.$ak.menuBarMore),
								{ role: "none", "aria-hidden": !0 },
							);
						S.appendChild(I),
							this.F.appendChild(S),
							(S.style.visibility = "hidden"),
							this.D(
								i.$0fb(S, i.$$gb.KEY_UP, (T) => {
									const P = new w.$7fb(T);
									let k = !0;
									const L = [n.KeyCode.Enter];
									this.S
										? (L.push(n.KeyCode.Space),
											this.G.compactMode?.horizontal ===
											d.HorizontalDirection.Right
												? L.push(n.KeyCode.RightArrow)
												: this.G.compactMode?.horizontal ===
														d.HorizontalDirection.Left &&
													L.push(n.KeyCode.LeftArrow))
										: L.push(n.KeyCode.DownArrow),
										L.some((D) => P.equals(D)) && !this.Q
											? ((this.c = { index: y.OVERFLOW_INDEX }),
												(this.j = !0),
												(this.O = l.OPEN))
											: (k = !1),
										k && (P.preventDefault(), P.stopPropagation());
								}),
							),
							this.D(C.$Qhb.addTarget(S)),
							this.D(
								i.$0fb(S, C.EventType.Tap, (T) => {
									(this.Q &&
										this.c &&
										this.c.holder &&
										i.$Bgb(T.initialTarget, this.c.holder)) ||
										((this.n = !1),
										this.bb(y.OVERFLOW_INDEX, !0),
										T.preventDefault(),
										T.stopPropagation());
								}),
							),
							this.D(
								i.$0fb(S, i.$$gb.MOUSE_DOWN, (T) => {
									if (!new E.$2fb(i.getWindow(S), T).leftButton) {
										T.preventDefault();
										return;
									}
									this.Q
										? (this.n = !1)
										: ((this.n = !0), this.bb(y.OVERFLOW_INDEX, !0)),
										T.preventDefault(),
										T.stopPropagation();
								}),
							),
							this.D(
								i.$0fb(S, i.$$gb.MOUSE_UP, (T) => {
									T.defaultPrevented ||
										(this.n
											? (this.n = !1)
											: this.P && this.bb(y.OVERFLOW_INDEX, !0));
								}),
							),
							this.D(
								i.$0fb(S, i.$$gb.MOUSE_ENTER, () => {
									this.Q && !this.db(y.OVERFLOW_INDEX)
										? (this.b.buttonElement.focus(),
											this.eb(),
											this.fb(y.OVERFLOW_INDEX, !1))
										: this.P &&
											!this.Q &&
											((this.c = { index: y.OVERFLOW_INDEX }), S.focus());
								}),
							),
							(this.b = {
								buttonElement: S,
								titleElement: I,
								label: "More",
								actions: [],
							});
					}
					updateMenu(v) {
						const S = this.a.filter((I) => I.label === v.label);
						S && S.length && (S[0].actions = v.actions);
					}
					dispose() {
						super.dispose(),
							this.a.forEach((v) => {
								v.titleElement?.remove(), v.buttonElement?.remove();
							}),
							this.b.titleElement.remove(),
							this.b.buttonElement.remove(),
							(0, g.$Vc)(this.z),
							(this.z = void 0);
					}
					blur() {
						this.U();
					}
					getWidth() {
						if (!this.S && this.a) {
							const v = this.a[0].buttonElement.getBoundingClientRect().left;
							return (
								(this.R
									? this.b.buttonElement.getBoundingClientRect().right
									: this.a[
											this.a.length - 1
										].buttonElement.getBoundingClientRect().right) - v
							);
						}
						return 0;
					}
					getHeight() {
						return this.F.clientHeight;
					}
					toggleFocus() {
						!this.P && this.G.visibility !== "hidden"
							? ((this.Z = !0),
								(this.c = { index: this.y > 0 ? 0 : y.OVERFLOW_INDEX }),
								(this.O = l.FOCUSED))
							: this.Q || this.U();
					}
					I() {
						if (!this.a || !this.a.length) return;
						const v = "overflow-menu-only";
						this.F.classList.toggle(v, !1);
						const S = this.F.offsetWidth;
						let I = 0,
							T = this.S;
						const P = this.y;
						this.y = 0;
						const k = this.a.filter(
							(L) => L.buttonElement !== void 0 && L.titleElement !== void 0,
						);
						for (const L of k) {
							if (!T) {
								const D = L.buttonElement.offsetWidth;
								I + D > S
									? (T = !0)
									: ((I += D),
										this.y++,
										this.y > P &&
											(L.buttonElement.style.visibility = "visible"));
							}
							T && (L.buttonElement.style.visibility = "hidden");
						}
						if (this.y - 1 <= k.length / 4) {
							for (const L of k) L.buttonElement.style.visibility = "hidden";
							(T = !0), (this.y = 0), (I = 0);
						}
						if (this.S) {
							this.b.actions = [];
							for (let D = this.y; D < this.a.length; D++)
								this.b.actions.push(
									new m.$uj(
										`menubar.submenu.${this.a[D].label}`,
										this.a[D].label,
										this.a[D].actions || [],
									),
								);
							const L = this.G.getCompactMenuActions?.();
							L &&
								L.length &&
								(this.b.actions.push(new m.$tj()), this.b.actions.push(...L)),
								(this.b.buttonElement.style.visibility = "visible");
						} else if (T) {
							for (; I + this.b.buttonElement.offsetWidth > S && this.y > 0; ) {
								this.y--;
								const L = k[this.y].buttonElement.offsetWidth;
								(k[this.y].buttonElement.style.visibility = "hidden"), (I -= L);
							}
							this.b.actions = [];
							for (let L = this.y; L < k.length; L++)
								this.b.actions.push(
									new m.$uj(
										`menubar.submenu.${k[L].label}`,
										k[L].label,
										k[L].actions || [],
									),
								);
							this.b.buttonElement.nextElementSibling !==
								k[this.y].buttonElement &&
								(this.b.buttonElement.remove(),
								this.F.insertBefore(
									this.b.buttonElement,
									k[this.y].buttonElement,
								)),
								(this.b.buttonElement.style.visibility = "visible");
						} else
							this.b.buttonElement.remove(),
								this.F.appendChild(this.b.buttonElement),
								(this.b.buttonElement.style.visibility = "hidden");
						this.F.classList.toggle(v, this.y === 0);
					}
					J(v, S, I) {
						const T = (0, d.$kob)(I);
						if (this.G.enableMnemonics) {
							const k = o.$nf(I);
							d.$hob.lastIndex = 0;
							let L = d.$hob.exec(k);
							for (; L && L[1]; ) L = d.$hob.exec(k);
							const D = (M) => M.replace(/&amp;&amp;/g, "&amp;");
							L
								? ((v.innerText = ""),
									v.append(
										o.$tf(D(k.substr(0, L.index)), " "),
										s("mnemonic", { "aria-hidden": "true" }, L[3]),
										o.$uf(D(k.substr(L.index + L[0].length)), " "),
									))
								: (v.innerText = D(k).trim());
						} else v.innerText = T.replace(/&&/g, "&");
						const P = d.$gob.exec(I);
						if (P) {
							const k = P[1] ? P[1] : P[3];
							this.G.enableMnemonics
								? S.setAttribute(
										"aria-keyshortcuts",
										"Alt+" + k.toLocaleLowerCase(),
									)
								: S.removeAttribute("aria-keyshortcuts");
						}
					}
					update(v) {
						if ((v && (this.G = v), this.P)) {
							this.r = !0;
							return;
						}
						this.a.forEach((S) => {
							!S.buttonElement ||
								!S.titleElement ||
								this.J(S.titleElement, S.buttonElement, S.label);
						}),
							this.z ||
								(this.z = i.$hgb(i.getWindow(this.F), () => {
									this.I(), (this.z = void 0);
								})),
							this.U();
					}
					L(v, S) {
						this.q.set(S.toLocaleLowerCase(), v);
					}
					M() {
						this.F.style.display !== "none" &&
							((this.F.style.display = "none"), this.u.fire(!1));
					}
					N() {
						this.F.style.display !== "flex" &&
							((this.F.style.display = "flex"), this.u.fire(!0), this.I());
					}
					get O() {
						return this.s;
					}
					set O(v) {
						if (
							(this.s >= l.FOCUSED &&
								v < l.FOCUSED &&
								this.r &&
								(this.g.schedule(), (this.r = !1)),
							v === this.s)
						)
							return;
						const S = this.isVisible,
							I = this.Q,
							T = this.P;
						switch (((this.s = v), v)) {
							case l.HIDDEN:
								S && this.M(),
									I && this.eb(),
									T &&
										((this.c = void 0),
										this.f && (this.f.focus(), (this.f = void 0)));
								break;
							case l.VISIBLE:
								S || this.N(),
									I && this.eb(),
									T &&
										(this.c &&
											(this.c.index === y.OVERFLOW_INDEX
												? this.b.buttonElement.blur()
												: this.a[this.c.index].buttonElement?.blur()),
										(this.c = void 0),
										this.f && (this.f.focus(), (this.f = void 0)));
								break;
							case l.FOCUSED:
								S || this.N(),
									I && this.eb(),
									this.c &&
										(this.c.index === y.OVERFLOW_INDEX
											? this.b.buttonElement.focus()
											: this.a[this.c.index].buttonElement?.focus());
								break;
							case l.OPEN:
								S || this.N(),
									this.c && (this.eb(), this.fb(this.c.index, this.j));
								break;
						}
						(this.s = v), this.w.fire(this.O >= l.FOCUSED);
					}
					get isVisible() {
						return this.O >= l.VISIBLE;
					}
					get P() {
						return this.O >= l.FOCUSED;
					}
					get Q() {
						return this.O >= l.OPEN;
					}
					get R() {
						return this.S || this.y < this.a.length;
					}
					get S() {
						return this.G.compactMode !== void 0;
					}
					U() {
						this.G.visibility === "toggle" || this.G.visibility === "hidden"
							? (this.O = l.HIDDEN)
							: this.G.visibility === "classic" && t.$Mfb(b.$Bfb)
								? (this.O = l.HIDDEN)
								: (this.O = l.VISIBLE),
							(this.n = !1),
							(this.Z = !1),
							this.Y(!1);
					}
					W() {
						if (!this.c || this.y === 0) return;
						let v = (this.c.index - 1 + this.y) % this.y;
						this.c.index === y.OVERFLOW_INDEX
							? (v = this.y - 1)
							: this.c.index === 0 && this.R && (v = y.OVERFLOW_INDEX),
							v !== this.c.index &&
								(this.Q
									? (this.eb(), this.fb(v))
									: this.P &&
										((this.c.index = v),
										v === y.OVERFLOW_INDEX
											? this.b.buttonElement.focus()
											: this.a[v].buttonElement?.focus()));
					}
					X() {
						if (!this.c || this.y === 0) return;
						let v = (this.c.index + 1) % this.y;
						this.c.index === y.OVERFLOW_INDEX
							? (v = 0)
							: this.c.index === this.y - 1 && (v = y.OVERFLOW_INDEX),
							v !== this.c.index &&
								(this.Q
									? (this.eb(), this.fb(v))
									: this.P &&
										((this.c.index = v),
										v === y.OVERFLOW_INDEX
											? this.b.buttonElement.focus()
											: this.a[v].buttonElement?.focus()));
					}
					Y(v) {
						this.a &&
							this.a.forEach((S) => {
								if (S.titleElement && S.titleElement.children.length) {
									const I = S.titleElement.children.item(0);
									I &&
										(I.style.textDecoration =
											this.G.alwaysOnMnemonics || v ? "underline" : "");
								}
							});
					}
					get Z() {
						return this.h;
					}
					set Z(v) {
						this.h = v;
					}
					get ab() {
						return p.$m
							? !1
							: !this.G.disableAltFocus || this.G.visibility === "toggle";
					}
					get onVisibilityChange() {
						return this.u.event;
					}
					get onFocusStateChange() {
						return this.w.event;
					}
					bb(v, S) {
						this.Q
							? this.db(v)
								? this.U()
								: (this.eb(), this.fb(v, this.j))
							: ((this.c = { index: v }), (this.j = !S), (this.O = l.OPEN));
					}
					cb(v) {
						const S = !v.altKey && !v.ctrlKey && !v.shiftKey && !v.metaKey;
						this.G.visibility !== "hidden" &&
							(v.event &&
								this.ab &&
								n.$ls.toEnum(v.event.code) === n.ScanCode.AltLeft &&
								v.event.preventDefault(),
							this.P &&
								v.lastKeyPressed === "alt" &&
								v.altKey &&
								(this.U(), (this.Z = !1), (this.m = !0)),
							S &&
								v.lastKeyPressed === "alt" &&
								v.lastKeyReleased === "alt" &&
								(this.m ||
									(!this.P && this.ab
										? ((this.Z = !0),
											(this.c = { index: this.y > 0 ? 0 : y.OVERFLOW_INDEX }),
											(this.O = l.FOCUSED))
										: this.Q || this.U())),
							!v.altKey && v.lastKeyReleased === "alt" && (this.m = !1),
							this.G.enableMnemonics &&
								this.a &&
								!this.Q &&
								this.Y((!this.m && v.altKey) || this.Z));
					}
					db(v) {
						return this.c ? this.c.index === v : !1;
					}
					eb() {
						this.c &&
							(this.c.index === y.OVERFLOW_INDEX
								? this.b.buttonElement.focus()
								: this.a[this.c.index].buttonElement?.focus(),
							this.c.holder &&
								(this.c.holder.parentElement?.classList.remove("open"),
								this.c.holder.remove()),
							this.c.widget?.dispose(),
							(this.c = { index: this.c.index })),
							this.C.clear();
					}
					fb(v, S = !0) {
						const I = v >= this.y ? y.OVERFLOW_INDEX : v,
							T = I === y.OVERFLOW_INDEX ? this.b : this.a[I];
						if (!T.actions || !T.buttonElement || !T.titleElement) return;
						const P = s("div.menubar-menu-items-holder", { title: "" });
						T.buttonElement.classList.add("open");
						const k = T.titleElement.getBoundingClientRect(),
							L = i.$ugb(T.titleElement);
						if (this.G.compactMode?.horizontal === d.HorizontalDirection.Right)
							P.style.left = `${k.left + this.F.clientWidth}px`;
						else if (
							this.G.compactMode?.horizontal === d.HorizontalDirection.Left
						) {
							const N = i.getWindow(this.F).innerWidth;
							(P.style.right = `${N - k.left}px`), (P.style.left = "auto");
						} else P.style.left = `${k.left * L}px`;
						this.G.compactMode?.vertical === d.VerticalDirection.Above
							? (P.style.top = `${k.top - this.a.length * 30 + this.F.clientHeight}px`)
							: this.G.compactMode?.vertical === d.VerticalDirection.Below
								? (P.style.top = `${k.top}px`)
								: (P.style.top = `${k.bottom * L}px`),
							T.buttonElement.appendChild(P);
						const D = {
								getKeyBinding: this.G.getKeybinding,
								actionRunner: this.t,
								enableMnemonics:
									this.G.alwaysOnMnemonics ||
									(this.Z && this.G.enableMnemonics),
								ariaLabel: T.buttonElement.getAttribute("aria-label") ?? void 0,
								expandDirection: this.S
									? this.G.compactMode
									: {
											horizontal: d.HorizontalDirection.Right,
											vertical: d.VerticalDirection.Below,
										},
								useEventAsContext: !0,
							},
							M = this.C.add(new d.Menu(P, T.actions, D, this.H));
						this.C.add(
							M.onDidCancel(() => {
								this.O = l.FOCUSED;
							}),
						),
							I !== v ? M.trigger(v - this.y) : M.focus(S),
							(this.c = { index: I, holder: P, widget: M });
					}
				}
				e.$9ob = y;
			},
		),
		define(
			de[268],
			he([1, 0, 198, 235, 14, 26, 6, 27, 7, 95, 317, 2257]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0ib = e.$9ib = e.$8ib = e.$7ib = e.$6ib = void 0),
					(e.$6ib = {
						inputActiveOptionBorder: "#007ACC00",
						inputActiveOptionForeground: "#FFFFFF",
						inputActiveOptionBackground: "#0E639C50",
					});
				class a extends t.$$ib {
					constructor(p, o, f) {
						super(p, o, f),
							(this.a = this.D(
								new h({
									actionClassName: this._action.class,
									isChecked: !!this._action.checked,
									title: this.m.keybinding
										? `${this._action.label} (${this.m.keybinding})`
										: this._action.label,
									notFocusable: !0,
									inputActiveOptionBackground:
										f.toggleStyles?.inputActiveOptionBackground,
									inputActiveOptionBorder:
										f.toggleStyles?.inputActiveOptionBorder,
									inputActiveOptionForeground:
										f.toggleStyles?.inputActiveOptionForeground,
									hoverDelegate: f.hoverDelegate,
								}),
							)),
							this.D(
								this.a.onChange(
									() => (this._action.checked = !!this.a && this.a.checked),
								),
							);
					}
					render(p) {
						(this.element = p), this.element.appendChild(this.a.domNode);
					}
					t() {
						this.a && (this.isEnabled() ? this.a.enable() : this.a.disable());
					}
					H() {
						this.a.checked = !!this._action.checked;
					}
					focus() {
						(this.a.domNode.tabIndex = 0), this.a.focus();
					}
					blur() {
						(this.a.domNode.tabIndex = -1), this.a.domNode.blur();
					}
					setFocusable(p) {
						this.a.domNode.tabIndex = p ? 0 : -1;
					}
				}
				e.$7ib = a;
				class h extends i.$Uhb {
					constructor(p) {
						super(),
							(this.a = this.D(new C.$re())),
							(this.onChange = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onKeyDown = this.b.event),
							(this.c = p),
							(this.s = this.c.isChecked);
						const o = ["monaco-custom-toggle"];
						this.c.icon &&
							((this.g = this.c.icon),
							o.push(...E.ThemeIcon.asClassNameArray(this.g))),
							this.c.actionClassName &&
								o.push(...this.c.actionClassName.split(" ")),
							this.s && o.push("checked"),
							(this.domNode = document.createElement("div")),
							(this.t = this.D(
								(0, u.$1ib)().setupManagedHover(
									p.hoverDelegate ?? (0, r.$cib)("mouse"),
									this.domNode,
									this.c.title,
								),
							)),
							this.domNode.classList.add(...o),
							this.c.notFocusable || (this.domNode.tabIndex = 0),
							this.domNode.setAttribute("role", "checkbox"),
							this.domNode.setAttribute("aria-checked", String(this.s)),
							this.domNode.setAttribute("aria-label", this.c.title),
							this.w(),
							this.f(this.domNode, (f) => {
								this.enabled &&
									((this.checked = !this.s),
									this.a.fire(!1),
									f.preventDefault());
							}),
							this.D(this.I(this.domNode)),
							this.u(this.domNode, (f) => {
								if (
									f.keyCode === d.KeyCode.Space ||
									f.keyCode === d.KeyCode.Enter
								) {
									(this.checked = !this.s),
										this.a.fire(!0),
										f.preventDefault(),
										f.stopPropagation();
									return;
								}
								this.b.fire(f);
							});
					}
					get enabled() {
						return this.domNode.getAttribute("aria-disabled") !== "true";
					}
					focus() {
						this.domNode.focus();
					}
					get checked() {
						return this.s;
					}
					set checked(p) {
						(this.s = p),
							this.domNode.setAttribute("aria-checked", String(this.s)),
							this.domNode.classList.toggle("checked", this.s),
							this.w();
					}
					setIcon(p) {
						this.g &&
							this.domNode.classList.remove(
								...E.ThemeIcon.asClassNameArray(this.g),
							),
							(this.g = p),
							this.g &&
								this.domNode.classList.add(
									...E.ThemeIcon.asClassNameArray(this.g),
								);
					}
					width() {
						return 22;
					}
					w() {
						this.domNode &&
							((this.domNode.style.borderColor =
								(this.s && this.c.inputActiveOptionBorder) || ""),
							(this.domNode.style.color =
								(this.s && this.c.inputActiveOptionForeground) || "inherit"),
							(this.domNode.style.backgroundColor =
								(this.s && this.c.inputActiveOptionBackground) || ""));
					}
					enable() {
						this.domNode.setAttribute("aria-disabled", String(!1));
					}
					disable() {
						this.domNode.setAttribute("aria-disabled", String(!0));
					}
					setTitle(p) {
						this.t.update(p), this.domNode.setAttribute("aria-label", p);
					}
					set visible(p) {
						this.domNode.style.display = p ? "" : "none";
					}
					get visible() {
						return this.domNode.style.display !== "none";
					}
				}
				e.$8ib = h;
				class c extends i.$Uhb {
					static {
						this.CLASS_NAME = "monaco-checkbox";
					}
					constructor(p, o, f) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.a = this.D(new C.$re())),
							(this.onChange = this.a.event),
							(this.b = this.D(
								new h({
									title: this.g,
									isChecked: this.h,
									icon: w.$ak.check,
									actionClassName: c.CLASS_NAME,
									...e.$6ib,
								}),
							)),
							(this.domNode = this.b.domNode),
							(this.c = f),
							this.n(),
							this.D(
								this.b.onChange((b) => {
									this.n(), this.a.fire(b);
								}),
							);
					}
					get checked() {
						return this.b.checked;
					}
					set checked(p) {
						(this.b.checked = p), this.n();
					}
					focus() {
						this.domNode.focus();
					}
					hasFocus() {
						return (0, m.$Kgb)(this.domNode);
					}
					enable() {
						this.b.enable();
					}
					disable() {
						this.b.disable();
					}
					n() {
						(this.domNode.style.color = this.c.checkboxForeground || ""),
							(this.domNode.style.backgroundColor =
								this.c.checkboxBackground || ""),
							(this.domNode.style.borderColor = this.c.checkboxBorder || "");
					}
				}
				e.$9ib = c;
				class n extends t.$$ib {
					constructor(p, o, f) {
						super(p, o, f),
							(this.a = this.D(
								new c(
									this._action.label,
									!!this._action.checked,
									f.checkboxStyles,
								),
							)),
							this.D(this.a.onChange(() => this.c()));
					}
					render(p) {
						if (
							((this.element = p),
							this.element.classList.add("checkbox-action-item"),
							this.element.appendChild(this.a.domNode),
							this.m.label && this._action.label)
						) {
							const o = this.element.appendChild(
								(0, m.$)("span.checkbox-label", void 0, this._action.label),
							);
							this.D(
								(0, m.$0fb)(o, m.$$gb.CLICK, (f) => {
									(this.a.checked = !this.a.checked),
										f.stopPropagation(),
										f.preventDefault(),
										this.c();
								}),
							);
						}
						this.t(), this.G(), this.H();
					}
					c() {
						(this._action.checked = !!this.a && this.a.checked),
							this.actionRunner.run(this._action, this._context);
					}
					t() {
						this.isEnabled() ? this.a.enable() : this.a.disable(),
							this.action.enabled
								? this.element?.classList.remove("disabled")
								: this.element?.classList.add("disabled");
					}
					H() {
						this.a.checked = !!this._action.checked;
					}
					G() {
						this.b && this.a.domNode.classList.remove(...this.b.split(" ")),
							(this.b = this.w()),
							this.b && this.a.domNode.classList.add(...this.b.split(" "));
					}
					focus() {
						(this.a.domNode.tabIndex = 0), this.a.focus();
					}
					blur() {
						(this.a.domNode.tabIndex = -1), this.a.domNode.blur();
					}
					setFocusable(p) {
						this.a.domNode.tabIndex = p ? 0 : -1;
					}
				}
				e.$0ib = n;
			},
		),
		