import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/common/color.js';
import '../../view/viewPart.js';
import '../../../common/core/position.js';
import '../../../common/languages.js';
import '../../../common/core/editorColorRegistry.js';
import '../../../common/config/editorOptions.js';
import '../../../common/viewModel.js';
import '../../../../base/common/arrays.js';
define(
			de[2850],
			he([1, 0, 194, 97, 303, 48, 74, 307, 38, 290, 24]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*color*/,
 w /*viewPart*/,
 E /*position*/,
 C /*languages*/,
 d /*editorColorRegistry*/,
 m /*editorOptions*/,
 r /*viewModel*/,
 u /*arrays*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gvb = void 0);
				class a {
					constructor(o, f) {
						const b = o.options;
						(this.lineHeight = b.get(m.EditorOption.lineHeight)),
							(this.pixelRatio = b.get(m.EditorOption.pixelRatio)),
							(this.overviewRulerLanes = b.get(
								m.EditorOption.overviewRulerLanes,
							)),
							(this.renderBorder = b.get(m.EditorOption.overviewRulerBorder));
						const s = f.getColor(d.$ZT);
						(this.borderColor = s ? s.toString() : null),
							(this.hideCursor = b.get(
								m.EditorOption.hideCursorInOverviewRuler,
							));
						const l = f.getColor(d.$xT);
						this.cursorColorSingle = l ? l.transparent(0.7).toString() : null;
						const y = f.getColor(d.$zT);
						this.cursorColorPrimary = y ? y.transparent(0.7).toString() : null;
						const $ = f.getColor(d.$BT);
						(this.cursorColorSecondary = $
							? $.transparent(0.7).toString()
							: null),
							(this.themeType = f.type);
						const v = b.get(m.EditorOption.minimap),
							S = v.enabled,
							I = v.side,
							T = f.getColor(d.$1T),
							P = C.$lM.getDefaultBackground();
						T
							? (this.backgroundColor = T)
							: S && I === "right"
								? (this.backgroundColor = P)
								: (this.backgroundColor = null);
						const L = b.get(m.EditorOption.layoutInfo).overviewRuler;
						(this.top = L.top),
							(this.right = L.right),
							(this.domWidth = L.width),
							(this.domHeight = L.height),
							this.overviewRulerLanes === 0
								? ((this.canvasWidth = 0), (this.canvasHeight = 0))
								: ((this.canvasWidth = (this.domWidth * this.pixelRatio) | 0),
									(this.canvasHeight = (this.domHeight * this.pixelRatio) | 0));
						const [D, M] = this.c(1, this.canvasWidth, this.overviewRulerLanes);
						(this.x = D), (this.w = M);
					}
					c(o, f, b) {
						const s = f - o;
						if (b >= 3) {
							const l = Math.floor(s / 3),
								y = Math.floor(s / 3),
								$ = s - l - y,
								v = o,
								S = v + l,
								I = v + l + $;
							return [
								[0, v, S, v, I, v, S, v],
								[0, l, $, l + $, y, l + $ + y, $ + y, l + $ + y],
							];
						} else if (b === 2) {
							const l = Math.floor(s / 2),
								y = s - l,
								$ = o,
								v = $ + l;
							return [
								[0, $, $, $, v, $, $, $],
								[0, l, l, l, y, l + y, l + y, l + y],
							];
						} else {
							const l = o,
								y = s;
							return [
								[0, l, l, l, l, l, l, l],
								[0, y, y, y, y, y, y, y],
							];
						}
					}
					equals(o) {
						return (
							this.lineHeight === o.lineHeight &&
							this.pixelRatio === o.pixelRatio &&
							this.overviewRulerLanes === o.overviewRulerLanes &&
							this.renderBorder === o.renderBorder &&
							this.borderColor === o.borderColor &&
							this.hideCursor === o.hideCursor &&
							this.cursorColorSingle === o.cursorColorSingle &&
							this.cursorColorPrimary === o.cursorColorPrimary &&
							this.cursorColorSecondary === o.cursorColorSecondary &&
							this.themeType === o.themeType &&
							i.$UL.equals(this.backgroundColor, o.backgroundColor) &&
							this.top === o.top &&
							this.right === o.right &&
							this.domWidth === o.domWidth &&
							this.domHeight === o.domHeight &&
							this.canvasWidth === o.canvasWidth &&
							this.canvasHeight === o.canvasHeight
						);
					}
				}
				var h;
				(function (p) {
					p[(p.MIN_DECORATION_HEIGHT = 6)] = "MIN_DECORATION_HEIGHT";
				})(h || (h = {}));
				var c;
				(function (p) {
					(p[(p.Left = 1)] = "Left"),
						(p[(p.Center = 2)] = "Center"),
						(p[(p.Right = 4)] = "Right"),
						(p[(p.Full = 7)] = "Full");
				})(c || (c = {}));
				var n;
				(function (p) {
					(p[(p.NotNeeded = 0)] = "NotNeeded"),
						(p[(p.Maybe = 1)] = "Maybe"),
						(p[(p.Needed = 2)] = "Needed");
				})(n || (n = {}));
				class g extends w.$yub {
					constructor(o) {
						super(o),
							(this.c = n.NotNeeded),
							(this.q = []),
							(this.s = []),
							(this.j = (0, t.$Shb)(document.createElement("canvas"))),
							this.j.setClassName("decorationsOverviewRuler"),
							this.j.setPosition("absolute"),
							this.j.setLayerHinting(!0),
							this.j.setContain("strict"),
							this.j.setAttribute("aria-hidden", "true"),
							this.t(!1),
							(this.g = C.$lM.onDidChange((f) => {
								f.changedColorMap && this.t(!0);
							})),
							(this.n = [
								{ position: new E.$hL(1, 1), color: this.m.cursorColorSingle },
							]);
					}
					dispose() {
						super.dispose(), this.g.dispose();
					}
					t(o) {
						const f = new a(this._context.configuration, this._context.theme);
						return this.m && this.m.equals(f)
							? !1
							: ((this.m = f),
								this.j.setTop(this.m.top),
								this.j.setRight(this.m.right),
								this.j.setWidth(this.m.domWidth),
								this.j.setHeight(this.m.domHeight),
								(this.j.domNode.width = this.m.canvasWidth),
								(this.j.domNode.height = this.m.canvasHeight),
								o && this.z(),
								!0);
					}
					u() {
						return (this.c = n.Needed), !0;
					}
					y() {
						return (this.c = n.Maybe), !0;
					}
					onConfigurationChanged(o) {
						return this.t(!1) ? this.u() : !1;
					}
					onCursorStateChanged(o) {
						this.n = [];
						for (let f = 0, b = o.selections.length; f < b; f++) {
							let s = this.m.cursorColorSingle;
							b > 1 &&
								(s =
									f === 0
										? this.m.cursorColorPrimary
										: this.m.cursorColorSecondary),
								this.n.push({
									position: o.selections[f].getPosition(),
									color: s,
								});
						}
						return (
							this.n.sort((f, b) => E.$hL.compare(f.position, b.position)),
							this.y()
						);
					}
					onDecorationsChanged(o) {
						return o.affectsOverviewRuler ? this.y() : !1;
					}
					onFlushed(o) {
						return this.u();
					}
					onScrollChanged(o) {
						return o.scrollHeightChanged ? this.u() : !1;
					}
					onZonesChanged(o) {
						return this.u();
					}
					onThemeChanged(o) {
						return this.t(!1) ? this.u() : !1;
					}
					getDomNode() {
						return this.j.domNode;
					}
					prepareRender(o) {}
					render(o) {
						this.z(), (this.c = n.NotNeeded);
					}
					z() {
						const o = this.m.backgroundColor;
						if (this.m.overviewRulerLanes === 0) {
							this.j.setBackgroundColor(
								o ? i.$UL.Format.CSS.formatHexA(o) : "",
							),
								this.j.setDisplay("none");
							return;
						}
						const f = this._context.viewModel.getAllOverviewRulerDecorations(
							this._context.theme,
						);
						if (
							(f.sort(r.$6sb.compareByRenderingProps),
							this.c === n.Maybe &&
								!r.$6sb.equalsArr(this.q, f) &&
								(this.c = n.Needed),
							this.c === n.Maybe &&
								!(0, u.$yb)(
									this.s,
									this.n,
									(L, D) =>
										L.position.lineNumber === D.position.lineNumber &&
										L.color === D.color,
								) &&
								(this.c = n.Needed),
							this.c === n.Maybe)
						)
							return;
						(this.q = f), (this.s = this.n), this.j.setDisplay("block");
						const b = this.m.canvasWidth,
							s = this.m.canvasHeight,
							l = this.m.lineHeight,
							y = this._context.viewLayout,
							$ = this._context.viewLayout.getScrollHeight(),
							v = s / $,
							S = (h.MIN_DECORATION_HEIGHT * this.m.pixelRatio) | 0,
							I = (S / 2) | 0,
							T = this.j.domNode.getContext("2d");
						o
							? o.isOpaque()
								? ((T.fillStyle = i.$UL.Format.CSS.formatHexA(o)),
									T.fillRect(0, 0, b, s))
								: (T.clearRect(0, 0, b, s),
									(T.fillStyle = i.$UL.Format.CSS.formatHexA(o)),
									T.fillRect(0, 0, b, s))
							: T.clearRect(0, 0, b, s);
						const P = this.m.x,
							k = this.m.w;
						for (const L of f) {
							const D = L.color,
								M = L.data;
							T.fillStyle = D;
							let N = 0,
								A = 0,
								R = 0;
							for (let O = 0, B = M.length / 3; O < B; O++) {
								const U = M[3 * O],
									z = M[3 * O + 1],
									F = M[3 * O + 2];
								let x = (y.getVerticalOffsetForLineNumber(z) * v) | 0,
									H = ((y.getVerticalOffsetForLineNumber(F) + l) * v) | 0;
								if (H - x < S) {
									let V = ((x + H) / 2) | 0;
									V < I ? (V = I) : V + I > s && (V = s - I),
										(x = V - I),
										(H = V + I);
								}
								x > R + 1 || U !== N
									? (O !== 0 && T.fillRect(P[N], A, k[N], R - A),
										(N = U),
										(A = x),
										(R = H))
									: H > R && (R = H);
							}
							T.fillRect(P[N], A, k[N], R - A);
						}
						if (!this.m.hideCursor) {
							const L = (2 * this.m.pixelRatio) | 0,
								D = (L / 2) | 0,
								M = this.m.x[c.Full],
								N = this.m.w[c.Full];
							let A = -100,
								R = -100,
								O = null;
							for (let B = 0, U = this.n.length; B < U; B++) {
								const z = this.n[B].color;
								if (!z) continue;
								const F = this.n[B].position;
								let x =
									(y.getVerticalOffsetForLineNumber(F.lineNumber) * v) | 0;
								x < D ? (x = D) : x + D > s && (x = s - D);
								const H = x - D,
									q = H + L;
								H > R + 1 || z !== O
									? (B !== 0 && O && T.fillRect(M, A, N, R - A),
										(A = H),
										(R = q))
									: q > R && (R = q),
									(O = z),
									(T.fillStyle = z);
							}
							O && T.fillRect(M, A, N, R - A);
						}
						this.m.renderBorder &&
							this.m.borderColor &&
							this.m.overviewRulerLanes > 0 &&
							(T.beginPath(),
							(T.lineWidth = 1),
							(T.strokeStyle = this.m.borderColor),
							T.moveTo(0, 0),
							T.lineTo(0, s),
							T.moveTo(1, 0),
							T.lineTo(b, 0),
							T.stroke());
					}
				}
				e.$Gvb = g;
			},
		)
