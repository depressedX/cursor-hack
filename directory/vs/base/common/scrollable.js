import '../../../require.js';
import '../../../exports.js';
import './event.js';
import './lifecycle.js';
define(de[195], he([1, 0, 6, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$MK = e.$LK = e.$KK = e.$JK = e.ScrollbarVisibility = void 0);
			var w;
			(function (c) {
				(c[(c.Auto = 1)] = "Auto"),
					(c[(c.Hidden = 2)] = "Hidden"),
					(c[(c.Visible = 3)] = "Visible");
			})(w || (e.ScrollbarVisibility = w = {}));
			class E {
				constructor(n, g, p, o, f, b, s) {
					(this.c = n),
						(this._scrollStateBrand = void 0),
						this.c &&
							((g = g | 0),
							(p = p | 0),
							(o = o | 0),
							(f = f | 0),
							(b = b | 0),
							(s = s | 0)),
						(this.rawScrollLeft = o),
						(this.rawScrollTop = s),
						g < 0 && (g = 0),
						o + g > p && (o = p - g),
						o < 0 && (o = 0),
						f < 0 && (f = 0),
						s + f > b && (s = b - f),
						s < 0 && (s = 0),
						(this.width = g),
						(this.scrollWidth = p),
						(this.scrollLeft = o),
						(this.height = f),
						(this.scrollHeight = b),
						(this.scrollTop = s);
				}
				equals(n) {
					return (
						this.rawScrollLeft === n.rawScrollLeft &&
						this.rawScrollTop === n.rawScrollTop &&
						this.width === n.width &&
						this.scrollWidth === n.scrollWidth &&
						this.scrollLeft === n.scrollLeft &&
						this.height === n.height &&
						this.scrollHeight === n.scrollHeight &&
						this.scrollTop === n.scrollTop
					);
				}
				withScrollDimensions(n, g) {
					return new E(
						this.c,
						typeof n.width < "u" ? n.width : this.width,
						typeof n.scrollWidth < "u" ? n.scrollWidth : this.scrollWidth,
						g ? this.rawScrollLeft : this.scrollLeft,
						typeof n.height < "u" ? n.height : this.height,
						typeof n.scrollHeight < "u" ? n.scrollHeight : this.scrollHeight,
						g ? this.rawScrollTop : this.scrollTop,
					);
				}
				withScrollPosition(n) {
					return new E(
						this.c,
						this.width,
						this.scrollWidth,
						typeof n.scrollLeft < "u" ? n.scrollLeft : this.rawScrollLeft,
						this.height,
						this.scrollHeight,
						typeof n.scrollTop < "u" ? n.scrollTop : this.rawScrollTop,
					);
				}
				createScrollEvent(n, g) {
					const p = this.width !== n.width,
						o = this.scrollWidth !== n.scrollWidth,
						f = this.scrollLeft !== n.scrollLeft,
						b = this.height !== n.height,
						s = this.scrollHeight !== n.scrollHeight,
						l = this.scrollTop !== n.scrollTop;
					return {
						inSmoothScrolling: g,
						oldWidth: n.width,
						oldScrollWidth: n.scrollWidth,
						oldScrollLeft: n.scrollLeft,
						width: this.width,
						scrollWidth: this.scrollWidth,
						scrollLeft: this.scrollLeft,
						oldHeight: n.height,
						oldScrollHeight: n.scrollHeight,
						oldScrollTop: n.scrollTop,
						height: this.height,
						scrollHeight: this.scrollHeight,
						scrollTop: this.scrollTop,
						widthChanged: p,
						scrollWidthChanged: o,
						scrollLeftChanged: f,
						heightChanged: b,
						scrollHeightChanged: s,
						scrollTopChanged: l,
					};
				}
			}
			e.$JK = E;
			class C extends i.$1c {
				constructor(n) {
					super(),
						(this.m = n),
						(this._scrollableBrand = void 0),
						(this.j = this.D(new t.$re())),
						(this.onScroll = this.j.event),
						(this.c = this.m.smoothScrollDuration),
						(this.f = this.m.scheduleAtNextAnimationFrame),
						(this.g = new E(this.m.forceIntegerValues, 0, 0, 0, 0, 0, 0)),
						(this.h = null);
				}
				dispose() {
					this.h && (this.h.dispose(), (this.h = null)), super.dispose();
				}
				setSmoothScrollDuration(n) {
					this.c = n;
				}
				validateScrollPosition(n) {
					return this.g.withScrollPosition(n);
				}
				getScrollDimensions() {
					return this.g;
				}
				setScrollDimensions(n, g) {
					const p = this.g.withScrollDimensions(n, g);
					this.q(p, !!this.h), this.h?.acceptScrollDimensions(this.g);
				}
				getFutureScrollPosition() {
					return this.h ? this.h.to : this.g;
				}
				getCurrentScrollPosition() {
					return this.g;
				}
				setScrollPositionNow(n) {
					const g = this.g.withScrollPosition(n);
					this.h && (this.h.dispose(), (this.h = null)), this.q(g, !1);
				}
				setScrollPositionSmooth(n, g) {
					if (this.c === 0) return this.setScrollPositionNow(n);
					if (this.h) {
						n = {
							scrollLeft:
								typeof n.scrollLeft > "u" ? this.h.to.scrollLeft : n.scrollLeft,
							scrollTop:
								typeof n.scrollTop > "u" ? this.h.to.scrollTop : n.scrollTop,
						};
						const p = this.g.withScrollPosition(n);
						if (
							this.h.to.scrollLeft === p.scrollLeft &&
							this.h.to.scrollTop === p.scrollTop
						)
							return;
						let o;
						g
							? (o = new u(this.h.from, p, this.h.startTime, this.h.duration))
							: (o = this.h.combine(this.g, p, this.c)),
							this.h.dispose(),
							(this.h = o);
					} else {
						const p = this.g.withScrollPosition(n);
						this.h = u.start(this.g, p, this.c);
					}
					this.h.animationFrameDisposable = this.f(() => {
						this.h && ((this.h.animationFrameDisposable = null), this.n());
					});
				}
				hasPendingScrollAnimation() {
					return !!this.h;
				}
				n() {
					if (!this.h) return;
					const n = this.h.tick(),
						g = this.g.withScrollPosition(n);
					if ((this.q(g, !0), !!this.h)) {
						if (n.isDone) {
							this.h.dispose(), (this.h = null);
							return;
						}
						this.h.animationFrameDisposable = this.f(() => {
							this.h && ((this.h.animationFrameDisposable = null), this.n());
						});
					}
				}
				q(n, g) {
					const p = this.g;
					p.equals(n) ||
						(this.m.stickyScrollHorizontal &&
							((this.m.stickyScrollHorizontal === "right" ||
								(typeof this.m.stickyScrollHorizontal == "function" &&
									this.m.stickyScrollHorizontal() === "right")) &&
								n.scrollLeft + n.width >= n.scrollWidth &&
								(n = n.withScrollPosition({ scrollLeft: 1 / 0 })),
							(this.m.stickyScrollHorizontal === "left" ||
								(typeof this.m.stickyScrollHorizontal == "function" &&
									this.m.stickyScrollHorizontal() === "left")) &&
								n.scrollLeft <= 0 &&
								(n = n.withScrollPosition({ scrollLeft: -1 / 0 }))),
						this.m.stickyScrollVertical &&
							((this.m.stickyScrollVertical === "down" ||
								(typeof this.m.stickyScrollVertical == "function" &&
									this.m.stickyScrollVertical() === "down")) &&
								n.scrollTop + n.height >= n.scrollHeight &&
								(n = n.withScrollPosition({ scrollTop: 1 / 0 })),
							(this.m.stickyScrollVertical === "up" ||
								(typeof this.m.stickyScrollVertical == "function" &&
									this.m.stickyScrollVertical() === "up")) &&
								n.scrollTop <= 0 &&
								(n = n.withScrollPosition({ scrollTop: -1 / 0 }))),
						(this.g = n),
						this.j.fire(this.g.createScrollEvent(p, g)));
				}
				getScrollHeight() {
					return this.g.scrollHeight;
				}
			}
			e.$KK = C;
			class d {
				constructor(n, g, p) {
					(this.scrollLeft = n), (this.scrollTop = g), (this.isDone = p);
				}
			}
			e.$LK = d;
			function m(c, n) {
				const g = n - c;
				return function (p) {
					return c + g * h(p);
				};
			}
			function r(c, n, g) {
				return function (p) {
					return p < g ? c(p / g) : n((p - g) / (1 - g));
				};
			}
			class u {
				constructor(n, g, p, o) {
					(this.from = n),
						(this.to = g),
						(this.duration = o),
						(this.startTime = p),
						(this.animationFrameDisposable = null),
						this.e();
				}
				e() {
					(this.c = this.f(
						this.from.scrollLeft,
						this.to.scrollLeft,
						this.to.width,
					)),
						(this.d = this.f(
							this.from.scrollTop,
							this.to.scrollTop,
							this.to.height,
						));
				}
				f(n, g, p) {
					if (Math.abs(n - g) > 2.5 * p) {
						let f, b;
						return (
							n < g
								? ((f = n + 0.75 * p), (b = g - 0.75 * p))
								: ((f = n - 0.75 * p), (b = g + 0.75 * p)),
							r(m(n, f), m(b, g), 0.33)
						);
					}
					return m(n, g);
				}
				dispose() {
					this.animationFrameDisposable !== null &&
						(this.animationFrameDisposable.dispose(),
						(this.animationFrameDisposable = null));
				}
				acceptScrollDimensions(n) {
					(this.to = n.withScrollPosition(this.to)), this.e();
				}
				tick() {
					return this.g(Date.now());
				}
				g(n) {
					const g = (n - this.startTime) / this.duration;
					if (g < 1) {
						const p = this.c(g),
							o = this.d(g);
						return new d(p, o, !1);
					}
					return new d(this.to.scrollLeft, this.to.scrollTop, !0);
				}
				combine(n, g, p) {
					return u.start(n, g, p);
				}
				static start(n, g, p) {
					p = p + 10;
					const o = Date.now() - 10;
					return new u(n, g, o, p);
				}
			}
			e.$MK = u;
			function a(c) {
				return Math.pow(c, 3);
			}
			function h(c) {
				return 1 - a(1 - c);
			}
		}),
		