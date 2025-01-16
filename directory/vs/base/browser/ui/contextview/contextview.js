define(
			de[276],
			he([1, 0, 459, 7, 3, 12, 902, 2236]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iib =
						e.LayoutAnchorMode =
						e.LayoutAnchorPosition =
						e.AnchorAxisAlignment =
						e.AnchorPosition =
						e.AnchorAlignment =
						e.ContextViewDOMPosition =
							void 0),
					(e.$gib = m),
					(e.$hib = n),
					(i = mt(i)),
					(E = mt(E));
				var d;
				(function (o) {
					(o[(o.ABSOLUTE = 1)] = "ABSOLUTE"),
						(o[(o.FIXED = 2)] = "FIXED"),
						(o[(o.FIXED_SHADOW = 3)] = "FIXED_SHADOW");
				})(d || (e.ContextViewDOMPosition = d = {}));
				function m(o) {
					const f = o;
					return !!f && typeof f.x == "number" && typeof f.y == "number";
				}
				var r;
				(function (o) {
					(o[(o.LEFT = 0)] = "LEFT"), (o[(o.RIGHT = 1)] = "RIGHT");
				})(r || (e.AnchorAlignment = r = {}));
				var u;
				(function (o) {
					(o[(o.BELOW = 0)] = "BELOW"), (o[(o.ABOVE = 1)] = "ABOVE");
				})(u || (e.AnchorPosition = u = {}));
				var a;
				(function (o) {
					(o[(o.VERTICAL = 0)] = "VERTICAL"),
						(o[(o.HORIZONTAL = 1)] = "HORIZONTAL");
				})(a || (e.AnchorAxisAlignment = a = {}));
				var h;
				(function (o) {
					(o[(o.Before = 0)] = "Before"), (o[(o.After = 1)] = "After");
				})(h || (e.LayoutAnchorPosition = h = {}));
				var c;
				(function (o) {
					(o[(o.AVOID = 0)] = "AVOID"), (o[(o.ALIGN = 1)] = "ALIGN");
				})(c || (e.LayoutAnchorMode = c = {}));
				function n(o, f, b) {
					const s = b.mode === c.ALIGN ? b.offset : b.offset + b.size,
						l = b.mode === c.ALIGN ? b.offset + b.size : b.offset;
					return b.position === h.Before
						? f <= o - s
							? s
							: f <= l
								? l - f
								: Math.max(o - f, 0)
						: f <= l
							? l - f
							: f <= o - s
								? s
								: 0;
				}
				class g extends w.$1c {
					static {
						this.a = ["click", "keydown", "focus", "blur"];
					}
					static {
						this.b = ["click"];
					}
					constructor(f, b) {
						super(),
							(this.c = null),
							(this.g = !1),
							(this.h = !1),
							(this.j = null),
							(this.m = w.$1c.None),
							(this.n = w.$1c.None),
							(this.q = null),
							(this.r = null),
							(this.f = i.$(".context-view")),
							i.hide(this.f),
							this.setContainer(f, b),
							this.D((0, w.$Yc)(() => this.setContainer(null, d.ABSOLUTE)));
					}
					setContainer(f, b) {
						this.g = b !== d.ABSOLUTE;
						const s = this.h;
						if (
							((this.h = b === d.FIXED_SHADOW),
							!(f === this.c && s === this.h) &&
								(this.c &&
									(this.n.dispose(),
									this.f.remove(),
									this.q &&
										((this.q = null), this.r?.remove(), (this.r = null)),
									(this.c = null)),
								f))
						) {
							if (((this.c = f), this.h)) {
								(this.r = i.$(".shadow-root-host")),
									this.c.appendChild(this.r),
									(this.q = this.r.attachShadow({ mode: "open" }));
								const y = document.createElement("style");
								(y.textContent = p),
									this.q.appendChild(y),
									this.q.appendChild(this.f),
									this.q.appendChild(i.$("slot"));
							} else this.c.appendChild(this.f);
							const l = new w.$Zc();
							g.a.forEach((y) => {
								l.add(
									i.$$fb(this.c, y, ($) => {
										this.u($, !1);
									}),
								);
							}),
								g.b.forEach((y) => {
									l.add(
										i.$$fb(
											this.c,
											y,
											($) => {
												this.u($, !0);
											},
											!0,
										),
									);
								}),
								(this.n = l);
						}
					}
					show(f) {
						this.t() && this.hide(),
							i.$9fb(this.f),
							(this.f.className = "context-view monaco-component"),
							(this.f.style.top = "0px"),
							(this.f.style.left = "0px"),
							(this.f.style.zIndex = `${2575 + (f.layer ?? 0)}`),
							(this.f.style.position = this.g ? "fixed" : "absolute"),
							i.show(this.f),
							(this.m = f.render(this.f) || w.$1c.None),
							(this.j = f),
							this.s(),
							this.j.focus?.();
					}
					getViewElement() {
						return this.f;
					}
					layout() {
						if (this.t()) {
							if (
								this.j.canRelayout === !1 &&
								!(E.$u && t.$Yfb.pointerEvents)
							) {
								this.hide();
								return;
							}
							this.j?.layout?.(), this.s();
						}
					}
					s() {
						if (!this.t()) return;
						const f = this.j.getAnchor();
						let b;
						if (i.$Ygb(f)) {
							const k = i.$tgb(f),
								L = i.$ugb(f);
							b = {
								top: k.top * L,
								left: k.left * L,
								width: k.width * L,
								height: k.height * L,
							};
						} else
							m(f)
								? (b = {
										top: f.y,
										left: f.x,
										width: f.width || 1,
										height: f.height || 2,
									})
								: (b = { top: f.posy, left: f.posx, width: 2, height: 2 });
						const s = i.$vgb(this.f),
							l = i.$zgb(this.f),
							y = this.j.anchorPosition || u.BELOW,
							$ = this.j.anchorAlignment || r.LEFT,
							v = this.j.anchorAxisAlignment || a.VERTICAL;
						let S, I;
						const T = i.$Ogb();
						if (v === a.VERTICAL) {
							const k = {
									offset: b.top - T.pageYOffset,
									size: b.height,
									position: y === u.BELOW ? h.Before : h.After,
								},
								L = {
									offset: b.left,
									size: b.width,
									position: $ === r.LEFT ? h.Before : h.After,
									mode: c.ALIGN,
								};
							(S = n(T.innerHeight, l, k) + T.pageYOffset),
								C.Range.intersects(
									{ start: S, end: S + l },
									{ start: k.offset, end: k.offset + k.size },
								) && (L.mode = c.AVOID),
								(I = n(T.innerWidth, s, L));
						} else {
							const k = {
									offset: b.left,
									size: b.width,
									position: $ === r.LEFT ? h.Before : h.After,
								},
								L = {
									offset: b.top,
									size: b.height,
									position: y === u.BELOW ? h.Before : h.After,
									mode: c.ALIGN,
								};
							(I = n(T.innerWidth, s, k)),
								C.Range.intersects(
									{ start: I, end: I + s },
									{ start: k.offset, end: k.offset + k.size },
								) && (L.mode = c.AVOID),
								(S = n(T.innerHeight, l, L) + T.pageYOffset);
						}
						this.f.classList.remove("top", "bottom", "left", "right"),
							this.f.classList.add(y === u.BELOW ? "bottom" : "top"),
							this.f.classList.add($ === r.LEFT ? "left" : "right"),
							this.f.classList.toggle("fixed", this.g);
						const P = i.$tgb(this.c);
						(this.f.style.top = `${S - (this.g ? i.$tgb(this.f).top : P.top)}px`),
							(this.f.style.left = `${I - (this.g ? i.$tgb(this.f).left : P.left)}px`),
							(this.f.style.width = "initial");
					}
					hide(f) {
						const b = this.j;
						(this.j = null),
							b?.onHide && b.onHide(f),
							this.m.dispose(),
							i.hide(this.f);
					}
					t() {
						return !!this.j;
					}
					u(f, b) {
						this.j &&
							(this.j.onDOMEvent
								? this.j.onDOMEvent(f, i.getWindow(f).document.activeElement)
								: b && !i.$Bgb(f.target, this.c) && this.hide());
					}
					dispose() {
						this.hide(), super.dispose();
					}
				}
				e.$iib = g;
				const p = `
	:host {
		all: initial; /* 1st rule so subsequent properties are reset. */
	}

	.codicon[class*='codicon-'] {
		font: normal normal normal 16px/1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}

	:host {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "HelveticaNeue-Light", system-ui, "Ubuntu", "Droid Sans", sans-serif;
	}

	:host-context(.mac) { font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
	:host-context(.mac:lang(zh-Hans)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", sans-serif; }
	:host-context(.mac:lang(zh-Hant)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang TC", sans-serif; }
	:host-context(.mac:lang(ja)) { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic Pro", sans-serif; }
	:host-context(.mac:lang(ko)) { font-family: -apple-system, BlinkMacSystemFont, "Nanum Gothic", "Apple SD Gothic Neo", "AppleGothic", sans-serif; }

	:host-context(.windows) { font-family: "Segoe WPC", "Segoe UI", sans-serif; }
	:host-context(.windows:lang(zh-Hans)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft YaHei", sans-serif; }
	:host-context(.windows:lang(zh-Hant)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft Jhenghei", sans-serif; }
	:host-context(.windows:lang(ja)) { font-family: "Segoe WPC", "Segoe UI", "Yu Gothic UI", "Meiryo UI", sans-serif; }
	:host-context(.windows:lang(ko)) { font-family: "Segoe WPC", "Segoe UI", "Malgun Gothic", "Dotom", sans-serif; }

	:host-context(.linux) { font-family: system-ui, "Ubuntu", "Droid Sans", sans-serif; }
	:host-context(.linux:lang(zh-Hans)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans SC", "Source Han Sans CN", "Source Han Sans", sans-serif; }
	:host-context(.linux:lang(zh-Hant)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans TC", "Source Han Sans TW", "Source Han Sans", sans-serif; }
	:host-context(.linux:lang(ja)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans J", "Source Han Sans JP", "Source Han Sans", sans-serif; }
	:host-context(.linux:lang(ko)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans K", "Source Han Sans JR", "Source Han Sans", "UnDotum", "FBaekmuk Gulim", sans-serif; }
`;
			},
		),
		