define(
			de[3091],
			he([1, 0, 7, 194, 345, 97, 3, 51, 35]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jFc = void 0),
					(t = mt(t));
				const r = 20;
				let u = class extends m.$pP {
					constructor(h, c, n, g) {
						super(g),
							(this.notebookEditor = h),
							(this.width = c),
							(this.g = []),
							(this.j = 2),
							(this.m = null),
							(this.s = null),
							(this.r = null),
							(this.t = null),
							(this.u = this.D(new C.$Zc())),
							(this.y = null),
							(this.c = (0, i.$Shb)(document.createElement("canvas"))),
							this.c.setPosition("relative"),
							this.c.setLayerHinting(!0),
							this.c.setContain("strict"),
							n.appendChild(this.c.domNode),
							(this.f = (0, i.$Shb)(document.createElement("div"))),
							this.f.setClassName("diffViewport"),
							this.f.setPosition("absolute"),
							this.f.setWidth(c),
							n.appendChild(this.f.domNode),
							this.D(
								w.$sjb
									.getInstance(t.getWindow(this.c.domNode))
									.onDidChange(() => {
										this.C();
									}),
							),
							this.D(
								this.n.onDidColorThemeChange((p) => {
									this.z(p) && this.C();
								}),
							),
							this.z(this.n.getColorTheme()),
							this.D(
								this.notebookEditor.onDidScroll(() => {
									this.H();
								}),
							),
							this.D(
								t.$$fb(n, t.$$gb.POINTER_DOWN, (p) => {
									this.notebookEditor.delegateVerticalScrollbarPointerDown(p);
								}),
							);
					}
					z(h) {
						const c =
								h.getColor(d.$5Q) ||
								(h.getColor(d.$YQ) || d.$WQ).transparent(2),
							n =
								h.getColor(d.$6Q) ||
								(h.getColor(d.$ZQ) || d.$XQ).transparent(2),
							g = !c.equals(this.m) || !n.equals(this.s);
						return (
							(this.m = c),
							(this.s = n),
							this.m && (this.r = E.$UL.Format.CSS.formatHexA(this.m)),
							this.s && (this.t = E.$UL.Format.CSS.formatHexA(this.s)),
							g
						);
					}
					layout() {
						this.G();
					}
					updateViewModels(h, c) {
						this.u.clear(),
							(this.g = h),
							c &&
								(this.u.add(
									c.onDidChangeLayout(() => {
										this.C();
									}),
								),
								this.u.add(
									c.onDidChangeCellLayout(() => {
										this.C();
									}),
								)),
							this.C();
					}
					C() {
						this.y === null &&
							(this.y = t.$ggb(
								t.getWindow(this.c.domNode),
								this.F.bind(this),
								16,
							));
					}
					F() {
						(this.y = null), this.G();
					}
					G() {
						const c = this.notebookEditor.getLayoutInfo().height,
							n = this.g.map((o) => o.totalHeight).reduce((o, f) => o + f, 0),
							g = w.$sjb.getInstance(t.getWindow(this.c.domNode)).value;
						this.c.setWidth(this.width),
							this.c.setHeight(c),
							(this.c.domNode.width = this.width * g),
							(this.c.domNode.height = c * g);
						const p = this.c.domNode.getContext("2d");
						p.clearRect(0, 0, this.width * g, c * g),
							this.J(p, this.width * g, c * g, n * g, g),
							this.H();
					}
					H() {
						const h = this.I();
						h
							? (this.f.setTop(h.top), this.f.setHeight(h.height))
							: (this.f.setTop(0), this.f.setHeight(0));
					}
					I() {
						const h = this.notebookEditor.getLayoutInfo();
						if (!h) return null;
						const c = this.notebookEditor.getScrollTop(),
							n = this.notebookEditor.getScrollHeight(),
							g = Math.max(0, h.height),
							p = Math.max(0, g - 2 * 0),
							o = h.height,
							f = Math.round(Math.max(r, Math.floor((o * p) / n))),
							b = (p - f) / (n - o),
							s = Math.round(c * b);
						return { height: f, top: s };
					}
					J(h, c, n, g, p) {
						if (!this.r || !this.t) return;
						const o = c / this.j;
						let f = 0;
						for (let b = 0; b < this.g.length; b++) {
							const s = this.g[b],
								l = Math.round((s.totalHeight / g) * p * n);
							switch (s.type) {
								case "insert":
									(h.fillStyle = this.r), h.fillRect(o, f, o, l);
									break;
								case "delete":
									(h.fillStyle = this.t), h.fillRect(0, f, o, l);
									break;
								case "unchanged":
									break;
								case "modified":
									(h.fillStyle = this.t),
										h.fillRect(0, f, o, l),
										(h.fillStyle = this.r),
										h.fillRect(o, f, o, l);
									break;
							}
							f += l;
						}
					}
					dispose() {
						this.y !== null && (this.y.dispose(), (this.y = null)),
							super.dispose();
					}
				};
				(e.$jFc = u), (e.$jFc = u = Ne([j(3, m.$iP)], u));
			},
		),
		