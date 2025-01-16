define(de[1605], he([1, 0, 194, 303, 38, 2270]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bvb = void 0);
			class E extends i.$yub {
				static {
					this.CLASS_NAME = "glyph-margin";
				}
				static {
					this.OUTER_CLASS_NAME = "margin";
				}
				constructor(d) {
					super(d);
					const m = this._context.configuration.options,
						r = m.get(w.EditorOption.layoutInfo);
					(this.b = !m.get(w.EditorOption.disableLayerHinting)),
						(this.c = r.contentLeft),
						(this.g = r.glyphMarginLeft),
						(this.j = r.glyphMarginWidth),
						(this.a = (0, t.$Shb)(document.createElement("div"))),
						this.a.setClassName(E.OUTER_CLASS_NAME),
						this.a.setPosition("absolute"),
						this.a.setAttribute("role", "presentation"),
						this.a.setAttribute("aria-hidden", "true"),
						(this.m = (0, t.$Shb)(document.createElement("div"))),
						this.m.setClassName(E.CLASS_NAME),
						this.a.appendChild(this.m);
				}
				dispose() {
					super.dispose();
				}
				getDomNode() {
					return this.a;
				}
				onConfigurationChanged(d) {
					const m = this._context.configuration.options,
						r = m.get(w.EditorOption.layoutInfo);
					return (
						(this.b = !m.get(w.EditorOption.disableLayerHinting)),
						(this.c = r.contentLeft),
						(this.g = r.glyphMarginLeft),
						(this.j = r.glyphMarginWidth),
						!0
					);
				}
				onScrollChanged(d) {
					return super.onScrollChanged(d) || d.scrollTopChanged;
				}
				prepareRender(d) {}
				render(d) {
					this.a.setLayerHinting(this.b), this.a.setContain("strict");
					const m = d.scrollTop - d.bigNumbersDelta;
					this.a.setTop(-m);
					const r = Math.min(d.scrollHeight, 1e6);
					this.a.setHeight(r),
						this.a.setWidth(this.c),
						this.m.setLeft(this.g),
						this.m.setWidth(this.j),
						this.m.setHeight(r);
				}
			}
			e.$bvb = E;
		}),
		define(
			de[2716],
			he([1, 0, 194, 56, 303, 38, 7, 2273]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fvb = void 0),
					(C = mt(C));
				class d extends w.$yub {
					constructor(r, u) {
						super(r), (this.c = u);
						const h = this._context.configuration.options.get(
							E.EditorOption.layoutInfo,
						);
						(this.g = {}),
							(this.n = h.verticalScrollbarWidth),
							(this.q = h.minimap.minimapWidth),
							(this.s = h.horizontalScrollbarHeight),
							(this.t = h.height),
							(this.u = h.width),
							(this.j = { top: 0, left: 0, width: 0, height: 0 }),
							(this.m = (0, t.$Shb)(document.createElement("div"))),
							w.$zub.write(this.m, w.PartFingerprint.OverlayWidgets),
							this.m.setClassName("overlayWidgets"),
							(this.overflowingOverlayWidgetsDomNode = (0, t.$Shb)(
								document.createElement("div"),
							)),
							w.$zub.write(
								this.overflowingOverlayWidgetsDomNode,
								w.PartFingerprint.OverflowingOverlayWidgets,
							),
							this.overflowingOverlayWidgetsDomNode.setClassName(
								"overflowingOverlayWidgets",
							);
					}
					dispose() {
						super.dispose(), (this.g = {});
					}
					getDomNode() {
						return this.m;
					}
					onConfigurationChanged(r) {
						const a = this._context.configuration.options.get(
							E.EditorOption.layoutInfo,
						);
						return (
							(this.n = a.verticalScrollbarWidth),
							(this.q = a.minimap.minimapWidth),
							(this.s = a.horizontalScrollbarHeight),
							(this.t = a.height),
							(this.u = a.width),
							!0
						);
					}
					addWidget(r) {
						const u = (0, t.$Shb)(r.getDomNode());
						(this.g[r.getId()] = { widget: r, preference: null, domNode: u }),
							u.setPosition("absolute"),
							u.setAttribute("widgetId", r.getId()),
							r.allowEditorOverflow
								? this.overflowingOverlayWidgetsDomNode.appendChild(u)
								: this.m.appendChild(u),
							this.h(),
							this.w();
					}
					setWidgetPosition(r, u) {
						const a = this.g[r.getId()],
							h = u ? u.preference : null,
							c = u?.stackOridinal;
						return a.preference === h && a.stack === c
							? (this.w(), !1)
							: ((a.preference = h), (a.stack = c), this.h(), this.w(), !0);
					}
					removeWidget(r) {
						const u = r.getId();
						if (this.g.hasOwnProperty(u)) {
							const h = this.g[u].domNode.domNode;
							delete this.g[u], h.remove(), this.h(), this.w();
						}
					}
					w() {
						let r = 0;
						const u = Object.keys(this.g);
						for (let a = 0, h = u.length; a < h; a++) {
							const c = u[a],
								g = this.g[c].widget.getMinContentWidthInPx?.();
							typeof g < "u" && (r = Math.max(r, g));
						}
						this._context.viewLayout.setOverlayWidgetsMinWidth(r);
					}
					y(r, u) {
						const a = r.domNode;
						if (r.preference === null) {
							a.setTop("");
							return;
						}
						const h = 2 * this.n + this.q;
						if (
							r.preference ===
								i.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER ||
							r.preference ===
								i.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER
						) {
							if (
								r.preference ===
								i.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER
							) {
								const c = a.domNode.clientHeight;
								a.setTop(this.t - c - 2 * this.s);
							} else a.setTop(0);
							r.stack !== void 0
								? (a.setTop(u[r.preference]),
									(u[r.preference] += a.domNode.clientWidth))
								: a.setRight(h);
						} else if (
							r.preference === i.OverlayWidgetPositionPreference.TOP_CENTER
						)
							(a.domNode.style.right = "50%"),
								r.stack !== void 0
									? (a.setTop(u[i.OverlayWidgetPositionPreference.TOP_CENTER]),
										(u[i.OverlayWidgetPositionPreference.TOP_CENTER] +=
											a.domNode.clientHeight))
									: a.setTop(0);
						else if (
							r.preference === i.OverlayWidgetPositionPreference.BOTTOM_CENTER
						)
							a.setTop(""), a.setBottom(this.s), a.setWidth("100%");
						else {
							const { top: c, left: n } = r.preference;
							if (
								this._context.configuration.options.get(
									E.EditorOption.fixedOverflowWidgets,
								) &&
								r.widget.allowEditorOverflow
							) {
								const p = this.j;
								a.setTop(c + p.top),
									a.setLeft(n + p.left),
									a.setPosition("fixed");
							} else a.setTop(c), a.setLeft(n), a.setPosition("absolute");
						}
					}
					prepareRender(r) {
						this.j = C.$tgb(this.c.domNode);
					}
					render(r) {
						this.m.setWidth(this.u);
						const u = Object.keys(this.g),
							a = Array.from(
								{ length: i.OverlayWidgetPositionPreference.TOP_CENTER + 1 },
								() => 0,
							);
						u.sort((h, c) => (this.g[h].stack || 0) - (this.g[c].stack || 0));
						for (let h = 0, c = u.length; h < c; h++) {
							const n = u[h];
							this.y(this.g[n], a);
						}
					}
				}
				e.$Fvb = d;
			},
		),
		define(
			de[2717],
			he([1, 0, 194, 38, 1546, 750]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hvb = void 0);
				class C extends E.$Xsb {
					constructor(m, r) {
						super(), (this.a = m);
						const u = this.a.configuration.options;
						(this.b = (0, t.$Shb)(document.createElement("canvas"))),
							this.b.setClassName(r),
							this.b.setPosition("absolute"),
							this.b.setLayerHinting(!0),
							this.b.setContain("strict"),
							(this.c = new w.$9sb((a) =>
								this.a.viewLayout.getVerticalOffsetForLineNumber(a),
							)),
							this.c.setDOMWidth(0),
							this.c.setDOMHeight(0),
							this.c.setOuterHeight(this.a.viewLayout.getScrollHeight()),
							this.c.setLineHeight(u.get(i.EditorOption.lineHeight)),
							this.c.setPixelRatio(u.get(i.EditorOption.pixelRatio)),
							this.a.addEventHandler(this);
					}
					dispose() {
						this.a.removeEventHandler(this), super.dispose();
					}
					onConfigurationChanged(m) {
						const r = this.a.configuration.options;
						return (
							m.hasChanged(i.EditorOption.lineHeight) &&
								(this.c.setLineHeight(r.get(i.EditorOption.lineHeight)),
								this.g()),
							m.hasChanged(i.EditorOption.pixelRatio) &&
								(this.c.setPixelRatio(r.get(i.EditorOption.pixelRatio)),
								this.b.setWidth(this.c.getDOMWidth()),
								this.b.setHeight(this.c.getDOMHeight()),
								(this.b.domNode.width = this.c.getCanvasWidth()),
								(this.b.domNode.height = this.c.getCanvasHeight()),
								this.g()),
							!0
						);
					}
					onFlushed(m) {
						return this.g(), !0;
					}
					onScrollChanged(m) {
						return (
							m.scrollHeightChanged &&
								(this.c.setOuterHeight(m.scrollHeight), this.g()),
							!0
						);
					}
					onZonesChanged(m) {
						return this.g(), !0;
					}
					getDomNode() {
						return this.b.domNode;
					}
					setLayout(m) {
						this.b.setTop(m.top), this.b.setRight(m.right);
						let r = !1;
						(r = this.c.setDOMWidth(m.width) || r),
							(r = this.c.setDOMHeight(m.height) || r),
							r &&
								(this.b.setWidth(this.c.getDOMWidth()),
								this.b.setHeight(this.c.getDOMHeight()),
								(this.b.domNode.width = this.c.getCanvasWidth()),
								(this.b.domNode.height = this.c.getCanvasHeight()),
								this.g());
					}
					setZones(m) {
						this.c.setZones(m), this.g();
					}
					g() {
						if (this.c.getOuterHeight() === 0) return !1;
						const m = this.c.getCanvasWidth(),
							r = this.c.getCanvasHeight(),
							u = this.c.resolveColorZones(),
							a = this.c.getId2Color(),
							h = this.b.domNode.getContext("2d");
						return (
							h.clearRect(0, 0, m, r), u.length > 0 && this.j(h, u, a, m), !0
						);
					}
					j(m, r, u, a) {
						let h = 0,
							c = 0,
							n = 0;
						for (const g of r) {
							const p = g.colorId,
								o = g.from,
								f = g.to;
							p !== h
								? (m.fillRect(0, c, a, n - c),
									(h = p),
									(m.fillStyle = u[h]),
									(c = o),
									(n = f))
								: n >= o
									? (n = Math.max(n, f))
									: (m.fillRect(0, c, a, n - c), (c = o), (n = f));
						}
						m.fillRect(0, c, a, n - c);
					}
				}
				e.$Hvb = C;
			},
		),
		