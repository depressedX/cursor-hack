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
		