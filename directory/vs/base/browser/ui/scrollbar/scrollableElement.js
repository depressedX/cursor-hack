import '../../../../../require.js';
import '../../../../../exports.js';
import '../../browser.js';
import '../../dom.js';
import '../../fastDomNode.js';
import '../../mouseEvent.js';
import './horizontalScrollbar.js';
import './verticalScrollbar.js';
import '../widget.js';
import '../../../common/async.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/platform.js';
import '../../../common/scrollable.js';
import '../../../../css!vs/base/browser/ui/scrollbar/media/scrollbars.js';
define(
			de[203],
			he([1, 0, 139, 7, 194, 168, 2679, 2680, 235, 15, 6, 3, 12, 195, 2251]),
			function (ce /*require*/,
 e /*exports*/,
 t /*browser*/,
 i /*dom*/,
 w /*fastDomNode*/,
 E /*mouseEvent*/,
 C /*horizontalScrollbar*/,
 d /*verticalScrollbar*/,
 m /*widget*/,
 r /*async*/,
 u /*event*/,
 a /*lifecycle*/,
 h /*platform*/,
 c /*scrollable*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8hb = e.$7hb = e.$6hb = e.$5hb = e.$4hb = e.$3hb = void 0),
					(i = mt(i)),
					(h = mt(h));
				const n = 500,
					g = 50,
					p = !0;
				class o {
					constructor(I, T, P) {
						(this.timestamp = I),
							(this.deltaX = T),
							(this.deltaY = P),
							(this.score = 0);
					}
				}
				class f {
					static {
						this.INSTANCE = new f();
					}
					constructor() {
						(this.a = 5), (this.b = []), (this.c = -1), (this.d = -1);
					}
					isPhysicalMouseWheel() {
						if (this.c === -1 && this.d === -1) return !1;
						let I = 1,
							T = 0,
							P = 1,
							k = this.d;
						do {
							const L = k === this.c ? I : Math.pow(2, -P);
							if (((I -= L), (T += this.b[k].score * L), k === this.c)) break;
							(k = (this.a + k - 1) % this.a), P++;
						} while (!0);
						return T <= 0.5;
					}
					acceptStandardWheelEvent(I) {
						if (t.$Qfb) {
							const T = i.getWindow(I.browserEvent),
								P = (0, t.$Jfb)(T);
							this.accept(Date.now(), I.deltaX * P, I.deltaY * P);
						} else this.accept(Date.now(), I.deltaX, I.deltaY);
					}
					accept(I, T, P) {
						let k = null;
						const L = new o(I, T, P);
						this.c === -1 && this.d === -1
							? ((this.b[0] = L), (this.c = 0), (this.d = 0))
							: ((k = this.b[this.d]),
								(this.d = (this.d + 1) % this.a),
								this.d === this.c && (this.c = (this.c + 1) % this.a),
								(this.b[this.d] = L)),
							(L.score = this.f(L, k));
					}
					f(I, T) {
						if (Math.abs(I.deltaX) > 0 && Math.abs(I.deltaY) > 0) return 1;
						let P = 0.5;
						if (((!this.g(I.deltaX) || !this.g(I.deltaY)) && (P += 0.25), T)) {
							const k = Math.abs(I.deltaX),
								L = Math.abs(I.deltaY),
								D = Math.abs(T.deltaX),
								M = Math.abs(T.deltaY),
								N = Math.max(Math.min(k, D), 1),
								A = Math.max(Math.min(L, M), 1),
								R = Math.max(k, D),
								O = Math.max(L, M);
							R % N === 0 && O % A === 0 && (P -= 0.5);
						}
						return Math.min(Math.max(P, 0), 1);
					}
					g(I) {
						return Math.abs(Math.round(I) - I) < 0.01;
					}
				}
				e.$3hb = f;
				class b extends m.$Uhb {
					get options() {
						return this.a;
					}
					constructor(I, T, P) {
						super(),
							(this.O = this.D(new u.$re())),
							(this.onScroll = this.O.event),
							(this.P = this.D(new u.$re())),
							(this.onWillScroll = this.P.event),
							(I.style.overflow = "hidden"),
							(this.a = v(T)),
							(this.b = P),
							this.D(
								this.b.onScroll((D) => {
									this.P.fire(D), this.S(D), this.O.fire(D);
								}),
							);
						const k = {
							onMouseWheel: (D) => this.R(D),
							onDragStart: () => this.W(),
							onDragEnd: () => this.X(),
						};
						(this.c = this.D(new d.$2hb(this.b, this.a, k))),
							(this.g = this.D(new C.$1hb(this.b, this.a, k))),
							(this.h = document.createElement("div")),
							(this.h.className =
								"monaco-scrollable-element " + this.a.className),
							this.h.setAttribute("role", "presentation"),
							(this.h.style.position = "relative");
						const L =
							T.horizontal && T.vertical
								? "both"
								: T.horizontal
									? "horizontal"
									: "vertical";
						L === "both"
							? (this.h.style.overflow = "hidden")
							: L === "horizontal"
								? (this.h.style.overflowX = "hidden")
								: (this.h.style.overflowY = "hidden"),
							this.h.appendChild(I),
							this.h.appendChild(this.g.domNode.domNode),
							this.h.appendChild(this.c.domNode.domNode),
							this.a.useShadows
								? ((this.n = (0, w.$Shb)(document.createElement("div"))),
									this.n.setClassName("shadow"),
									this.h.appendChild(this.n.domNode),
									(this.r = (0, w.$Shb)(document.createElement("div"))),
									this.r.setClassName("shadow"),
									this.h.appendChild(this.r.domNode),
									(this.s = (0, w.$Shb)(document.createElement("div"))),
									this.s.setClassName("shadow"),
									this.h.appendChild(this.s.domNode))
								: ((this.n = null), (this.r = null), (this.s = null)),
							(this.t = this.a.listenOnDomNode || this.h),
							(this.w = []),
							this.Q(this.a.handleMouseWheel),
							this.m(this.t, (D) => this.Z(D)),
							this.q(this.t, (D) => this.Y(D)),
							(this.L = this.D(new r.$Wh())),
							(this.y = !1),
							(this.J = !1),
							(this.M = !0),
							(this.N = !0);
					}
					dispose() {
						(this.w = (0, a.$Vc)(this.w)), super.dispose();
					}
					getDomNode() {
						return this.h;
					}
					getOverviewRulerLayoutInfo() {
						return { parent: this.h, insertBefore: this.c.domNode.domNode };
					}
					delegateVerticalScrollbarPointerDown(I) {
						this.c.delegatePointerDown(I);
					}
					getScrollDimensions() {
						return this.b.getScrollDimensions();
					}
					setScrollDimensions(I) {
						this.b.setScrollDimensions(I, !1);
					}
					updateClassName(I) {
						(this.a.className = I),
							h.$m && (this.a.className += " mac"),
							(this.h.className =
								"monaco-scrollable-element " + this.a.className);
					}
					updateOptions(I) {
						typeof I.handleMouseWheel < "u" &&
							((this.a.handleMouseWheel = I.handleMouseWheel),
							this.Q(this.a.handleMouseWheel)),
							typeof I.ignoreVerticalScrolling < "u" &&
								(this.a.ignoreVerticalScrolling = I.ignoreVerticalScrolling),
							typeof I.mouseWheelScrollSensitivity < "u" &&
								(this.a.mouseWheelScrollSensitivity =
									I.mouseWheelScrollSensitivity),
							typeof I.fastScrollSensitivity < "u" &&
								(this.a.fastScrollSensitivity = I.fastScrollSensitivity),
							typeof I.scrollPredominantAxis < "u" &&
								(this.a.scrollPredominantAxis = I.scrollPredominantAxis),
							typeof I.horizontal < "u" && (this.a.horizontal = I.horizontal),
							typeof I.vertical < "u" && (this.a.vertical = I.vertical),
							typeof I.horizontalScrollbarSize < "u" &&
								(this.a.horizontalScrollbarSize = I.horizontalScrollbarSize),
							typeof I.verticalScrollbarSize < "u" &&
								(this.a.verticalScrollbarSize = I.verticalScrollbarSize),
							typeof I.scrollByPage < "u" &&
								(this.a.scrollByPage = I.scrollByPage),
							this.g.updateOptions(this.a),
							this.c.updateOptions(this.a),
							this.a.lazyRender || this.U();
					}
					setRevealOnScroll(I) {
						this.N = I;
					}
					delegateScrollFromMouseWheelEvent(I) {
						this.R(new E.$4fb(I));
					}
					Q(I) {
						if (this.w.length > 0 !== I && ((this.w = (0, a.$Vc)(this.w)), I)) {
							const P = (k) => {
								this.R(new E.$4fb(k));
							};
							this.w.push(
								i.$0fb(this.t, i.$$gb.MOUSE_WHEEL, P, { passive: !1 }),
							);
						}
					}
					R(I) {
						if (I.browserEvent?.defaultPrevented) return;
						const T = f.INSTANCE;
						p && T.acceptStandardWheelEvent(I);
						let P = !1;
						if (I.deltaY || I.deltaX) {
							let L = I.deltaY * this.a.mouseWheelScrollSensitivity,
								D = I.deltaX * this.a.mouseWheelScrollSensitivity;
							this.a.scrollPredominantAxis &&
								(this.a.scrollYToX && D + L === 0
									? (D = L = 0)
									: Math.abs(L) >= Math.abs(D)
										? (D = 0)
										: (L = 0)),
								this.a.ignoreVerticalScrolling === !0 && (L = 0),
								this.a.flipAxes && ([L, D] = [D, L]);
							const M = !h.$m && I.browserEvent && I.browserEvent.shiftKey;
							(this.a.scrollYToX || M) && !D && ((D = L), (L = 0)),
								I.browserEvent &&
									I.browserEvent.altKey &&
									((D = D * this.a.fastScrollSensitivity),
									(L = L * this.a.fastScrollSensitivity));
							const N = this.b.getFutureScrollPosition();
							let A = {};
							if (L) {
								const R = g * L,
									O = N.scrollTop - (R < 0 ? Math.floor(R) : Math.ceil(R));
								this.c.writeScrollPosition(A, O);
							}
							if (D) {
								const R = g * D,
									O = N.scrollLeft - (R < 0 ? Math.floor(R) : Math.ceil(R));
								this.g.writeScrollPosition(A, O);
							}
							(A = this.b.validateScrollPosition(A)),
								(N.scrollLeft !== A.scrollLeft ||
									N.scrollTop !== A.scrollTop) &&
									(p &&
									this.a.mouseWheelSmoothScroll &&
									T.isPhysicalMouseWheel()
										? this.b.setScrollPositionSmooth(A)
										: this.b.setScrollPositionNow(A),
									(P = !0));
						}
						let k = P;
						!k && this.a.alwaysConsumeMouseWheel && (k = !0),
							!k &&
								this.a.consumeMouseWheelIfScrollbarIsNeeded &&
								(this.c.isNeeded() || this.g.isNeeded()) &&
								(k = !0),
							k && (I.preventDefault(), I.stopPropagation());
					}
					S(I) {
						(this.M = this.g.onDidScroll(I) || this.M),
							(this.M = this.c.onDidScroll(I) || this.M),
							this.a.useShadows && (this.M = !0),
							this.N && this.$(),
							this.a.lazyRender || this.U();
					}
					renderNow() {
						if (!this.a.lazyRender)
							throw new Error(
								"Please use `lazyRender` together with `renderNow`!",
							);
						this.U();
					}
					U() {
						if (
							this.M &&
							((this.M = !1),
							this.g.render(),
							this.c.render(),
							this.a.useShadows)
						) {
							const I = this.b.getCurrentScrollPosition(),
								T = I.scrollTop > 0,
								P = I.scrollLeft > 0,
								k = P ? " left" : "",
								L = T ? " top" : "",
								D = P || T ? " top-left-corner" : "";
							this.n.setClassName(`shadow${k}`),
								this.r.setClassName(`shadow${L}`),
								this.s.setClassName(`shadow${D}${L}${k}`);
						}
					}
					W() {
						(this.y = !0), this.$();
					}
					X() {
						(this.y = !1), this.ab();
					}
					Y(I) {
						(this.J = !1), this.ab();
					}
					Z(I) {
						(this.J = !0), this.$();
					}
					$() {
						this.c.beginReveal(), this.g.beginReveal(), this.bb();
					}
					ab() {
						!this.J && !this.y && (this.c.beginHide(), this.g.beginHide());
					}
					bb() {
						!this.J && !this.y && this.L.cancelAndSet(() => this.ab(), n);
					}
				}
				e.$4hb = b;
				class s extends b {
					constructor(I, T) {
						(T = T || {}), (T.mouseWheelSmoothScroll = !1);
						const P = new c.$KK({
							forceIntegerValues: !0,
							smoothScrollDuration: 0,
							scheduleAtNextAnimationFrame: (k) => i.$hgb(i.getWindow(I), k),
						});
						super(I, T, P), this.D(P);
					}
					setScrollPosition(I) {
						this.b.setScrollPositionNow(I);
					}
					getScrollPosition() {
						return this.b.getCurrentScrollPosition();
					}
				}
				e.$5hb = s;
				class l extends b {
					constructor(I, T, P) {
						super(I, T, P);
					}
					setScrollPosition(I) {
						I.reuseAnimation
							? this.b.setScrollPositionSmooth(I, I.reuseAnimation)
							: this.b.setScrollPositionNow(I);
					}
					getScrollPosition() {
						return this.b.getCurrentScrollPosition();
					}
				}
				e.$6hb = l;
				class y extends b {
					constructor(I, T, P) {
						super(I, T, P);
					}
				}
				e.$7hb = y;
				class $ extends b {
					constructor(I, T) {
						(T = T || {}), (T.mouseWheelSmoothScroll = !1);
						const P = new c.$KK({
							forceIntegerValues: !1,
							smoothScrollDuration: 0,
							scheduleAtNextAnimationFrame: (k) => i.$hgb(i.getWindow(I), k),
						});
						super(I, T, P),
							this.D(P),
							(this.cb = I),
							this.D(
								this.onScroll((k) => {
									k.scrollTopChanged && (this.cb.scrollTop = k.scrollTop),
										k.scrollLeftChanged && (this.cb.scrollLeft = k.scrollLeft);
								}),
							),
							this.scanDomNode();
					}
					setScrollPosition(I) {
						this.b.setScrollPositionNow(I);
					}
					getScrollPosition() {
						return this.b.getCurrentScrollPosition();
					}
					scanDomNode() {
						this.setScrollDimensions({
							width: this.cb.clientWidth,
							scrollWidth: this.cb.scrollWidth,
							height: this.cb.clientHeight,
							scrollHeight: this.cb.scrollHeight,
						}),
							this.setScrollPosition({
								scrollLeft: this.cb.scrollLeft,
								scrollTop: this.cb.scrollTop,
							});
					}
				}
				e.$8hb = $;
				function v(S) {
					const I = {
						lazyRender: typeof S.lazyRender < "u" ? S.lazyRender : !1,
						className: typeof S.className < "u" ? S.className : "",
						useShadows: typeof S.useShadows < "u" ? S.useShadows : !0,
						handleMouseWheel:
							typeof S.handleMouseWheel < "u" ? S.handleMouseWheel : !0,
						ignoreVerticalScrolling:
							typeof S.ignoreVerticalScrolling < "u"
								? S.ignoreVerticalScrolling
								: !1,
						flipAxes: typeof S.flipAxes < "u" ? S.flipAxes : !1,
						consumeMouseWheelIfScrollbarIsNeeded:
							typeof S.consumeMouseWheelIfScrollbarIsNeeded < "u"
								? S.consumeMouseWheelIfScrollbarIsNeeded
								: !1,
						alwaysConsumeMouseWheel:
							typeof S.alwaysConsumeMouseWheel < "u"
								? S.alwaysConsumeMouseWheel
								: !1,
						scrollYToX: typeof S.scrollYToX < "u" ? S.scrollYToX : !1,
						mouseWheelScrollSensitivity:
							typeof S.mouseWheelScrollSensitivity < "u"
								? S.mouseWheelScrollSensitivity
								: 1,
						fastScrollSensitivity:
							typeof S.fastScrollSensitivity < "u"
								? S.fastScrollSensitivity
								: 5,
						scrollPredominantAxis:
							typeof S.scrollPredominantAxis < "u"
								? S.scrollPredominantAxis
								: !0,
						mouseWheelSmoothScroll:
							typeof S.mouseWheelSmoothScroll < "u"
								? S.mouseWheelSmoothScroll
								: !0,
						arrowSize: typeof S.arrowSize < "u" ? S.arrowSize : 11,
						listenOnDomNode:
							typeof S.listenOnDomNode < "u" ? S.listenOnDomNode : null,
						horizontal:
							typeof S.horizontal < "u"
								? S.horizontal
								: c.ScrollbarVisibility.Auto,
						horizontalScrollbarSize:
							typeof S.horizontalScrollbarSize < "u"
								? S.horizontalScrollbarSize
								: 10,
						horizontalSliderSize:
							typeof S.horizontalSliderSize < "u" ? S.horizontalSliderSize : 0,
						horizontalHasArrows:
							typeof S.horizontalHasArrows < "u" ? S.horizontalHasArrows : !1,
						vertical:
							typeof S.vertical < "u" ? S.vertical : c.ScrollbarVisibility.Auto,
						verticalScrollbarSize:
							typeof S.verticalScrollbarSize < "u"
								? S.verticalScrollbarSize
								: 10,
						verticalHasArrows:
							typeof S.verticalHasArrows < "u" ? S.verticalHasArrows : !1,
						verticalSliderSize:
							typeof S.verticalSliderSize < "u" ? S.verticalSliderSize : 0,
						scrollByPage: typeof S.scrollByPage < "u" ? S.scrollByPage : !1,
					};
					return (
						(I.horizontalSliderSize =
							typeof S.horizontalSliderSize < "u"
								? S.horizontalSliderSize
								: I.horizontalScrollbarSize),
						(I.verticalSliderSize =
							typeof S.verticalSliderSize < "u"
								? S.verticalSliderSize
								: I.verticalScrollbarSize),
						h.$m && (I.className += " mac"),
						I
					);
				}
			},
		),
		