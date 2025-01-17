import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../fastDomNode.js';
import '../../globalPointerMoveMonitor.js';
import './scrollbarArrow.js';
import './scrollbarVisibilityController.js';
import '../widget.js';
import '../../../common/platform.js';
define(
			de[1577],
			he([1, 0, 7, 194, 757, 1166, 2676, 235, 12]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zhb = void 0),
					(t = mt(t)),
					(m = mt(m));
				const r = 140;
				class u extends d.$Uhb {
					constructor(h) {
						super(),
							(this.g = h.lazyRender),
							(this.a = h.host),
							(this.b = h.scrollable),
							(this.c = h.scrollByPage),
							(this.h = h.scrollbarState),
							(this.n = this.D(
								new C.$Yhb(
									h.visibility,
									"visible scrollbar " + h.extraScrollbarClassName,
									"invisible scrollbar " + h.extraScrollbarClassName,
								),
							)),
							this.n.setIsNeeded(this.h.isNeeded()),
							(this.r = this.D(new w.$Thb())),
							(this.s = !0),
							(this.domNode = (0, i.$Shb)(document.createElement("div"))),
							this.domNode.setAttribute("role", "presentation"),
							this.domNode.setAttribute("aria-hidden", "true"),
							this.n.setDomNode(this.domNode),
							this.domNode.setPosition("absolute"),
							this.D(
								t.$0fb(this.domNode.domNode, t.$$gb.POINTER_DOWN, (c) =>
									this.M(c),
								),
							);
					}
					t(h) {
						const c = this.D(new E.$Whb(h));
						this.domNode.domNode.appendChild(c.bgDomNode),
							this.domNode.domNode.appendChild(c.domNode);
					}
					w(h, c, n, g) {
						(this.slider = (0, i.$Shb)(document.createElement("div"))),
							this.slider.setClassName("slider"),
							this.slider.setPosition("absolute"),
							this.slider.setTop(h),
							this.slider.setLeft(c),
							typeof n == "number" && this.slider.setWidth(n),
							typeof g == "number" && this.slider.setHeight(g),
							this.slider.setLayerHinting(!0),
							this.slider.setContain("strict"),
							this.domNode.domNode.appendChild(this.slider.domNode),
							this.D(
								t.$0fb(this.slider.domNode, t.$$gb.POINTER_DOWN, (p) => {
									p.button === 0 && (p.preventDefault(), this.O(p));
								}),
							),
							this.f(this.slider.domNode, (p) => {
								p.leftButton && p.stopPropagation();
							});
					}
					y(h) {
						return (
							this.h.setVisibleSize(h) &&
								(this.n.setIsNeeded(this.h.isNeeded()),
								(this.s = !0),
								this.g || this.render()),
							this.s
						);
					}
					J(h) {
						return (
							this.h.setScrollSize(h) &&
								(this.n.setIsNeeded(this.h.isNeeded()),
								(this.s = !0),
								this.g || this.render()),
							this.s
						);
					}
					L(h) {
						return (
							this.h.setScrollPosition(h) &&
								(this.n.setIsNeeded(this.h.isNeeded()),
								(this.s = !0),
								this.g || this.render()),
							this.s
						);
					}
					beginReveal() {
						this.n.setShouldBeVisible(!0);
					}
					beginHide() {
						this.n.setShouldBeVisible(!1);
					}
					render() {
						this.s &&
							((this.s = !1),
							this.Q(
								this.h.getRectangleLargeSize(),
								this.h.getRectangleSmallSize(),
							),
							this.R(
								this.h.getSliderSize(),
								this.h.getArrowSize() + this.h.getSliderPosition(),
							));
					}
					M(h) {
						h.target === this.domNode.domNode && this.N(h);
					}
					delegatePointerDown(h) {
						const c = this.domNode.domNode.getClientRects()[0].top,
							n = c + this.h.getSliderPosition(),
							g = c + this.h.getSliderPosition() + this.h.getSliderSize(),
							p = this.U(h);
						n <= p && p <= g
							? h.button === 0 && (h.preventDefault(), this.O(h))
							: this.N(h);
					}
					N(h) {
						let c, n;
						if (
							h.target === this.domNode.domNode &&
							typeof h.offsetX == "number" &&
							typeof h.offsetY == "number"
						)
							(c = h.offsetX), (n = h.offsetY);
						else {
							const p = t.$tgb(this.domNode.domNode);
							(c = h.pageX - p.left), (n = h.pageY - p.top);
						}
						const g = this.S(c, n);
						this.P(
							this.c
								? this.h.getDesiredScrollPositionFromOffsetPaged(g)
								: this.h.getDesiredScrollPositionFromOffset(g),
						),
							h.button === 0 && (h.preventDefault(), this.O(h));
					}
					O(h) {
						if (!h.target || !(h.target instanceof Element)) return;
						const c = this.U(h),
							n = this.W(h),
							g = this.h.clone();
						this.slider.toggleClassName("active", !0),
							this.r.startMonitoring(
								h.target,
								h.pointerId,
								h.buttons,
								(p) => {
									const o = this.W(p),
										f = Math.abs(o - n);
									if (m.$l && f > r) {
										this.P(g.getScrollPosition());
										return;
									}
									const s = this.U(p) - c;
									this.P(g.getDesiredScrollPositionFromDelta(s));
								},
								() => {
									this.slider.toggleClassName("active", !1), this.a.onDragEnd();
								},
							),
							this.a.onDragStart();
					}
					P(h) {
						const c = {};
						this.writeScrollPosition(c, h), this.b.setScrollPositionNow(c);
					}
					updateScrollbarSize(h) {
						this.X(h),
							this.h.setScrollbarSize(h),
							(this.s = !0),
							this.g || this.render();
					}
					isNeeded() {
						return this.h.isNeeded();
					}
				}
				e.$Zhb = u;
			},
		),
		