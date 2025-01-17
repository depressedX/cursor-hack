import '../../../require.js';
import '../../../exports.js';
import '../../base/browser/dom.js';
import '../../base/browser/globalPointerMoveMonitor.js';
import '../../base/browser/mouseEvent.js';
import '../../base/common/async.js';
import '../../base/common/lifecycle.js';
import '../../platform/theme/common/colorRegistry.js';
define(
			de[777],
			he([1, 0, 7, 757, 168, 15, 3, 51]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oub =
						e.$nub =
						e.$mub =
						e.$lub =
						e.$kub =
						e.$hub =
						e.$gub =
						e.$fub =
						e.$eub =
							void 0),
					(e.$iub = h),
					(e.$jub = c),
					(t = mt(t));
				class m {
					constructor(y, $) {
						(this.x = y), (this.y = $), (this._pageCoordinatesBrand = void 0);
					}
					toClientCoordinates(y) {
						return new r(this.x - y.scrollX, this.y - y.scrollY);
					}
				}
				e.$eub = m;
				class r {
					constructor(y, $) {
						(this.clientX = y),
							(this.clientY = $),
							(this._clientCoordinatesBrand = void 0);
					}
					toPageCoordinates(y) {
						return new m(this.clientX + y.scrollX, this.clientY + y.scrollY);
					}
				}
				e.$fub = r;
				class u {
					constructor(y, $, v, S) {
						(this.x = y),
							(this.y = $),
							(this.width = v),
							(this.height = S),
							(this._editorPagePositionBrand = void 0);
					}
				}
				e.$gub = u;
				class a {
					constructor(y, $) {
						(this.x = y),
							(this.y = $),
							(this._positionRelativeToEditorBrand = void 0);
					}
				}
				e.$hub = a;
				function h(l) {
					const y = t.$tgb(l);
					return new u(y.left, y.top, y.width, y.height);
				}
				function c(l, y, $) {
					const v = y.width / l.offsetWidth,
						S = y.height / l.offsetHeight,
						I = ($.x - y.x) / v,
						T = ($.y - y.y) / S;
					return new a(I, T);
				}
				class n extends w.$2fb {
					constructor(y, $, v) {
						super(t.getWindow(v), y),
							(this._editorMouseEventBrand = void 0),
							(this.isFromPointerCapture = $),
							(this.pos = new m(this.posx, this.posy)),
							(this.editorPos = h(v)),
							(this.relativePos = c(v, this.editorPos, this.pos));
					}
				}
				e.$kub = n;
				class g {
					constructor(y) {
						this.a = y;
					}
					b(y) {
						return new n(y, !1, this.a);
					}
					onContextMenu(y, $) {
						return t.$0fb(y, "contextmenu", (v) => {
							$(this.b(v));
						});
					}
					onMouseUp(y, $) {
						return t.$0fb(y, "mouseup", (v) => {
							$(this.b(v));
						});
					}
					onMouseDown(y, $) {
						return t.$0fb(y, t.$$gb.MOUSE_DOWN, (v) => {
							$(this.b(v));
						});
					}
					onPointerDown(y, $) {
						return t.$0fb(y, t.$$gb.POINTER_DOWN, (v) => {
							$(this.b(v), v.pointerId);
						});
					}
					onMouseLeave(y, $) {
						return t.$0fb(y, t.$$gb.MOUSE_LEAVE, (v) => {
							$(this.b(v));
						});
					}
					onMouseMove(y, $) {
						return t.$0fb(y, "mousemove", (v) => $(this.b(v)));
					}
				}
				e.$lub = g;
				class p {
					constructor(y) {
						this.a = y;
					}
					b(y) {
						return new n(y, !1, this.a);
					}
					onPointerUp(y, $) {
						return t.$0fb(y, "pointerup", (v) => {
							$(this.b(v));
						});
					}
					onPointerDown(y, $) {
						return t.$0fb(y, t.$$gb.POINTER_DOWN, (v) => {
							$(this.b(v), v.pointerId);
						});
					}
					onPointerLeave(y, $) {
						return t.$0fb(y, t.$$gb.POINTER_LEAVE, (v) => {
							$(this.b(v));
						});
					}
					onPointerMove(y, $) {
						return t.$0fb(y, "pointermove", (v) => $(this.b(v)));
					}
				}
				e.$mub = p;
				class o extends C.$1c {
					constructor(y) {
						super(),
							(this.a = y),
							(this.b = this.D(new i.$Thb())),
							(this.c = null);
					}
					startMonitoring(y, $, v, S, I) {
						(this.c = t.$$fb(
							y.ownerDocument,
							"keydown",
							(T) => {
								T.toKeyCodeChord().isModifierKey() ||
									this.b.stopMonitoring(!0, T.browserEvent);
							},
							!0,
						)),
							this.b.startMonitoring(
								y,
								$,
								v,
								(T) => {
									S(new n(T, !0, this.a));
								},
								(T) => {
									this.c.dispose(), I(T);
								},
							);
					}
					stopMonitoring() {
						this.b.stopMonitoring(!0);
					}
				}
				e.$nub = o;
				class f {
					static {
						this.a = 0;
					}
					constructor(y) {
						(this.g = y),
							(this.b = ++f.a),
							(this.c = 0),
							(this.d = new Map()),
							(this.f = new E.$Yh(() => this.j(), 1e3));
					}
					createClassNameRef(y) {
						const $ = this.h(y);
						return (
							$.increaseRefCount(),
							{
								className: $.className,
								dispose: () => {
									$.decreaseRefCount(), this.f.schedule();
								},
							}
						);
					}
					h(y) {
						const $ = this.i(y);
						let v = this.d.get($);
						if (!v) {
							const S = this.c++;
							(v = new b(
								$,
								`dyn-rule-${this.b}-${S}`,
								t.$Hgb(this.g.getContainerDomNode())
									? this.g.getContainerDomNode()
									: void 0,
								y,
							)),
								this.d.set($, v);
						}
						return v;
					}
					i(y) {
						return JSON.stringify(y);
					}
					j() {
						for (const y of this.d.values())
							y.hasReferences() || (this.d.delete(y.key), y.dispose());
					}
				}
				e.$oub = f;
				class b {
					constructor(y, $, v, S) {
						(this.key = y),
							(this.className = $),
							(this.properties = S),
							(this.a = 0),
							(this.c = new C.$Zc()),
							(this.b = t.$Rgb(v, void 0, this.c)),
							(this.b.textContent = this.d(this.className, this.properties));
					}
					d(y, $) {
						let v = `.${y} {`;
						for (const S in $) {
							const I = $[S];
							let T;
							typeof I == "object" ? (T = (0, d.$rP)(I.id)) : (T = I);
							const P = s(S);
							v += `
	${P}: ${T};`;
						}
						return (
							(v += `
}`),
							v
						);
					}
					dispose() {
						this.c.dispose(), (this.b = void 0);
					}
					increaseRefCount() {
						this.a++;
					}
					decreaseRefCount() {
						this.a--;
					}
					hasReferences() {
						return this.a > 0;
					}
				}
				function s(l) {
					return l
						.replace(/(^[A-Z])/, ([y]) => y.toLowerCase())
						.replace(/([A-Z])/g, ([y]) => `-${y.toLowerCase()}`);
				}
			},
		),
		