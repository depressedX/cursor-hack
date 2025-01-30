import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/mouseEvent.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import './mouseTarget.js';
import '../editorBrowser.js';
import '../editorDom.js';
import '../../common/config/editorZoom.js';
import '../../common/core/position.js';
import '../../common/core/selection.js';
import '../../common/viewEventHandler.js';
import '../../common/config/editorOptions.js';
import '../coreCommands.js';
import '../../../base/browser/ui/scrollbar/scrollableElement.js';
define(
			de[2839],
			he([1, 0, 7, 168, 3, 12, 1662, 56, 777, 909, 48, 104, 750, 38, 498, 203]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*mouseEvent*/,
 w /*lifecycle*/,
 E /*platform*/,
 C /*mouseTarget*/,
 d /*editorBrowser*/,
 m /*editorDom*/,
 r /*editorZoom*/,
 u /*position*/,
 a /*selection*/,
 h /*viewEventHandler*/,
 c /*editorOptions*/,
 n /*coreCommands*/,
 g /*scrollableElement*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1ub = void 0),
					(t = mt(t)),
					(E = mt(E));
				class p extends h.$Xsb {
					constructor(y, $, v) {
						super(),
							(this.q = null),
							(this.a = y),
							(this.b = $),
							(this.c = v),
							(this.g = new C.$Xub(this.a, v)),
							(this.j = this.D(
								new o(
									this.a,
									this.b,
									this.c,
									this.g,
									(T, P) => this.s(T, P),
									(T) => this.u(T),
								),
							)),
							(this.m = -1),
							(this.n = this.a.configuration.options.get(
								c.EditorOption.layoutInfo,
							).height);
						const S = new m.$lub(this.c.viewDomNode);
						this.D(S.onContextMenu(this.c.viewDomNode, (T) => this.w(T, !0))),
							this.D(
								S.onMouseMove(this.c.viewDomNode, (T) => {
									this.z(T),
										this.q ||
											(this.q = t.$0fb(
												this.c.viewDomNode.ownerDocument,
												"mousemove",
												(P) => {
													this.c.viewDomNode.contains(P.target) ||
														this.C(new m.$kub(P, !1, this.c.viewDomNode));
												},
											));
								}),
							),
							this.D(S.onMouseUp(this.c.viewDomNode, (T) => this.F(T))),
							this.D(S.onMouseLeave(this.c.viewDomNode, (T) => this.C(T)));
						let I = 0;
						this.D(
							S.onPointerDown(this.c.viewDomNode, (T, P) => {
								I = P;
							}),
						),
							this.D(
								t.$0fb(this.c.viewDomNode, t.$$gb.POINTER_UP, (T) => {
									this.j.onPointerUp();
								}),
							),
							this.D(S.onMouseDown(this.c.viewDomNode, (T) => this.G(T, I))),
							this.r(),
							this.a.addEventHandler(this);
					}
					r() {
						const y = g.$3hb.INSTANCE;
						let $ = 0,
							v = r.EditorZoom.getZoomLevel(),
							S = !1,
							I = 0;
						const T = (k) => {
							if (
								(this.b.emitMouseWheel(k),
								!this.a.configuration.options.get(
									c.EditorOption.mouseWheelZoom,
								))
							)
								return;
							const L = new i.$4fb(k);
							if ((y.acceptStandardWheelEvent(L), y.isPhysicalMouseWheel())) {
								if (P(k)) {
									const D = r.EditorZoom.getZoomLevel(),
										M = L.deltaY > 0 ? 1 : -1;
									r.EditorZoom.setZoomLevel(D + M),
										L.preventDefault(),
										L.stopPropagation();
								}
							} else
								Date.now() - $ > 50 &&
									((v = r.EditorZoom.getZoomLevel()), (S = P(k)), (I = 0)),
									($ = Date.now()),
									(I += L.deltaY),
									S &&
										(r.EditorZoom.setZoomLevel(v + I / 5),
										L.preventDefault(),
										L.stopPropagation());
						};
						this.D(
							t.$0fb(this.c.viewDomNode, t.$$gb.MOUSE_WHEEL, T, {
								capture: !0,
								passive: !1,
							}),
						);
						function P(k) {
							return E.$m
								? (k.metaKey || k.ctrlKey) && !k.shiftKey && !k.altKey
								: k.ctrlKey && !k.metaKey && !k.shiftKey && !k.altKey;
						}
					}
					dispose() {
						this.a.removeEventHandler(this),
							this.q && (this.q.dispose(), (this.q = null)),
							super.dispose();
					}
					onConfigurationChanged(y) {
						if (y.hasChanged(c.EditorOption.layoutInfo)) {
							const $ = this.a.configuration.options.get(
								c.EditorOption.layoutInfo,
							).height;
							this.n !== $ && ((this.n = $), this.j.onHeightChanged());
						}
						return !1;
					}
					onCursorStateChanged(y) {
						return this.j.onCursorStateChanged(y), !1;
					}
					onFocusChanged(y) {
						return !1;
					}
					getTargetAtClientPoint(y, $) {
						const S = new m.$fub(y, $).toPageCoordinates(
								t.getWindow(this.c.viewDomNode),
							),
							I = (0, m.$iub)(this.c.viewDomNode);
						if (
							S.y < I.y ||
							S.y > I.y + I.height ||
							S.x < I.x ||
							S.x > I.x + I.width
						)
							return null;
						const T = (0, m.$jub)(this.c.viewDomNode, I, S);
						return this.g.createMouseTarget(
							this.c.getLastRenderData(),
							I,
							S,
							T,
							null,
						);
					}
					s(y, $) {
						let v = y.target;
						if (!this.c.viewDomNode.contains(v)) {
							const S = t.$Igb(this.c.viewDomNode);
							S &&
								(v = S.elementsFromPoint(y.posx, y.posy).find((I) =>
									this.c.viewDomNode.contains(I),
								));
						}
						return this.g.createMouseTarget(
							this.c.getLastRenderData(),
							y.editorPos,
							y.pos,
							y.relativePos,
							$ ? v : null,
						);
					}
					u(y) {
						return this.g.getMouseColumn(y.relativePos);
					}
					w(y, $) {
						this.b.emitContextMenu({ event: y, target: this.s(y, $) });
					}
					z(y) {
						this.g.mouseTargetIsWidget(y) || y.preventDefault(),
							!(this.j.isActive() || y.timestamp < this.m) &&
								this.b.emitMouseMove({ event: y, target: this.s(y, !0) });
					}
					C(y) {
						this.q && (this.q.dispose(), (this.q = null)),
							(this.m = new Date().getTime()),
							this.b.emitMouseLeave({ event: y, target: null });
					}
					F(y) {
						this.b.emitMouseUp({ event: y, target: this.s(y, !0) });
					}
					G(y, $) {
						const v = this.s(y, !0),
							S =
								v.type === d.MouseTargetType.CONTENT_TEXT ||
								v.type === d.MouseTargetType.CONTENT_EMPTY,
							I =
								v.type === d.MouseTargetType.GUTTER_GLYPH_MARGIN ||
								v.type === d.MouseTargetType.GUTTER_LINE_NUMBERS ||
								v.type === d.MouseTargetType.GUTTER_LINE_DECORATIONS,
							T = v.type === d.MouseTargetType.GUTTER_LINE_NUMBERS,
							P = this.a.configuration.options.get(
								c.EditorOption.selectOnLineNumbers,
							),
							k =
								v.type === d.MouseTargetType.CONTENT_VIEW_ZONE ||
								v.type === d.MouseTargetType.GUTTER_VIEW_ZONE,
							L = v.type === d.MouseTargetType.CONTENT_WIDGET;
						let D = y.leftButton || y.middleButton;
						E.$m && y.leftButton && y.ctrlKey && (D = !1);
						const M = () => {
							y.preventDefault(), this.c.focusTextArea();
						};
						if (D && (S || (T && P))) M(), this.j.start(v.type, y, $);
						else if (I) y.preventDefault();
						else if (k) {
							const N = v.detail;
							D &&
								this.c.shouldSuppressMouseDownOnViewZone(N.viewZoneId) &&
								(M(), this.j.start(v.type, y, $), y.preventDefault());
						} else
							L &&
								this.c.shouldSuppressMouseDownOnWidget(v.detail) &&
								(M(), y.preventDefault());
						this.b.emitMouseDown({ event: y, target: v });
					}
					H(y) {
						this.b.emitMouseWheel(y);
					}
				}
				e.$1ub = p;
				class o extends w.$1c {
					constructor(y, $, v, S, I, T) {
						super(),
							(this.n = y),
							(this.q = $),
							(this.r = v),
							(this.s = S),
							(this.a = I),
							(this.b = T),
							(this.c = this.D(new m.$nub(this.r.viewDomNode))),
							(this.f = this.D(
								new f(this.n, this.r, this.s, (P, k, L) => this.G(P, k, L)),
							)),
							(this.g = new s()),
							(this.h = new a.$kL(1, 1, 1, 1)),
							(this.j = !1),
							(this.m = null);
					}
					dispose() {
						super.dispose();
					}
					isActive() {
						return this.j;
					}
					u(y) {
						(this.m = y), this.g.setModifiers(y);
						const $ = this.C(y, !1);
						$ &&
							(this.g.isDragAndDrop
								? this.q.emitMouseDrag({ event: y, target: $ })
								: $.type === d.MouseTargetType.OUTSIDE_EDITOR &&
										($.outsidePosition === "above" ||
											$.outsidePosition === "below")
									? this.f.start($, y)
									: (this.f.stop(),
										this.G($, !0, n.NavigationCommandRevealType.Minimal)));
					}
					start(y, $, v) {
						(this.m = $),
							this.g.setStartedOnLineNumbers(
								y === d.MouseTargetType.GUTTER_LINE_NUMBERS,
							),
							this.g.setStartButtons($),
							this.g.setModifiers($);
						const S = this.C($, !0);
						if (!S || !S.position) return;
						this.g.trySetCount($.detail, S.position), ($.detail = this.g.count);
						const I = this.n.configuration.options;
						if (
							!I.get(c.EditorOption.readOnly) &&
							I.get(c.EditorOption.dragAndDrop) &&
							!I.get(c.EditorOption.columnSelection) &&
							!this.g.altKey &&
							$.detail < 2 &&
							!this.j &&
							!this.h.isEmpty() &&
							S.type === d.MouseTargetType.CONTENT_TEXT &&
							S.position &&
							this.h.containsPosition(S.position)
						) {
							(this.g.isDragAndDrop = !0),
								(this.j = !0),
								this.c.startMonitoring(
									this.r.viewLinesDomNode,
									v,
									$.buttons,
									(T) => this.u(T),
									(T) => {
										const P = this.C(this.m, !1);
										t.$8gb(T)
											? this.q.emitMouseDropCanceled()
											: this.q.emitMouseDrop({
													event: this.m,
													target: P ? this.a(this.m, !0) : null,
												}),
											this.w();
									},
								);
							return;
						}
						(this.g.isDragAndDrop = !1),
							this.G(S, $.shiftKey, n.NavigationCommandRevealType.Minimal),
							this.j ||
								((this.j = !0),
								this.c.startMonitoring(
									this.r.viewLinesDomNode,
									v,
									$.buttons,
									(T) => this.u(T),
									() => this.w(),
								));
					}
					w() {
						(this.j = !1), this.f.stop();
					}
					onHeightChanged() {
						this.c.stopMonitoring();
					}
					onPointerUp() {
						this.c.stopMonitoring();
					}
					onCursorStateChanged(y) {
						this.h = y.selections[0];
					}
					z(y) {
						const $ = y.editorPos,
							v = this.n.viewModel,
							S = this.n.viewLayout,
							I = this.b(y);
						if (y.posy < $.y) {
							const P = $.y - y.posy,
								k = Math.max(S.getCurrentScrollTop() - P, 0),
								L = C.$Wub.getZoneAtCoord(this.n, k);
							if (L) {
								const M = this.F(L);
								if (M) return C.$Vub.createOutsideEditor(I, M, "above", P);
							}
							const D = S.getLineNumberAtVerticalOffset(k);
							return C.$Vub.createOutsideEditor(I, new u.$hL(D, 1), "above", P);
						}
						if (y.posy > $.y + $.height) {
							const P = y.posy - $.y - $.height,
								k = S.getCurrentScrollTop() + y.relativePos.y,
								L = C.$Wub.getZoneAtCoord(this.n, k);
							if (L) {
								const M = this.F(L);
								if (M) return C.$Vub.createOutsideEditor(I, M, "below", P);
							}
							const D = S.getLineNumberAtVerticalOffset(k);
							return C.$Vub.createOutsideEditor(
								I,
								new u.$hL(D, v.getLineMaxColumn(D)),
								"below",
								P,
							);
						}
						const T = S.getLineNumberAtVerticalOffset(
							S.getCurrentScrollTop() + y.relativePos.y,
						);
						if (y.posx < $.x) {
							const P = $.x - y.posx;
							return C.$Vub.createOutsideEditor(I, new u.$hL(T, 1), "left", P);
						}
						if (y.posx > $.x + $.width) {
							const P = y.posx - $.x - $.width;
							return C.$Vub.createOutsideEditor(
								I,
								new u.$hL(T, v.getLineMaxColumn(T)),
								"right",
								P,
							);
						}
						return null;
					}
					C(y, $) {
						const v = this.z(y);
						if (v) return v;
						const S = this.a(y, $);
						if (!S.position) return null;
						if (
							S.type === d.MouseTargetType.CONTENT_VIEW_ZONE ||
							S.type === d.MouseTargetType.GUTTER_VIEW_ZONE
						) {
							const T = this.F(S.detail);
							if (T)
								return C.$Vub.createViewZone(
									S.type,
									S.element,
									S.mouseColumn,
									T,
									S.detail,
								);
						}
						return S;
					}
					F(y) {
						const $ = new u.$hL(
								this.h.selectionStartLineNumber,
								this.h.selectionStartColumn,
							),
							v = y.positionBefore,
							S = y.positionAfter;
						return v && S ? (v.isBefore($) ? v : S) : null;
					}
					G(y, $, v) {
						y.position &&
							this.q.dispatchMouse({
								position: y.position,
								mouseColumn: y.mouseColumn,
								startedOnLineNumbers: this.g.startedOnLineNumbers,
								revealType: v,
								inSelectionMode: $,
								mouseDownCount: this.g.count,
								altKey: this.g.altKey,
								ctrlKey: this.g.ctrlKey,
								metaKey: this.g.metaKey,
								shiftKey: this.g.shiftKey,
								leftButton: this.g.leftButton,
								middleButton: this.g.middleButton,
								onInjectedText:
									y.type === d.MouseTargetType.CONTENT_TEXT &&
									y.detail.injectedText !== null,
							});
					}
				}
				class f extends w.$1c {
					constructor(y, $, v, S) {
						super(),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.a = null);
					}
					dispose() {
						super.dispose(), this.stop();
					}
					start(y, $) {
						this.a
							? this.a.setPosition(y, $)
							: (this.a = new b(this.b, this.c, this.f, this.g, y, $));
					}
					stop() {
						this.a && (this.a.dispose(), (this.a = null));
					}
				}
				class b extends w.$1c {
					constructor(y, $, v, S, I, T) {
						super(),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.m = S),
							(this.a = I),
							(this.b = T),
							(this.c = Date.now()),
							(this.f = t.$hgb(t.getWindow(T.browserEvent), () => this.r()));
					}
					dispose() {
						this.f.dispose(), super.dispose();
					}
					setPosition(y, $) {
						(this.a = y), (this.b = $);
					}
					n() {
						const y = Date.now(),
							$ = y - this.c;
						return (this.c = y), $;
					}
					q() {
						const y = this.g.configuration.options.get(
								c.EditorOption.lineHeight,
							),
							$ =
								this.g.configuration.options.get(c.EditorOption.layoutInfo)
									.height / y,
							v = this.a.outsideDistance / y;
						return v <= 1.5
							? Math.max(30, $ * (1 + v))
							: v <= 3
								? Math.max(60, $ * (2 + v))
								: Math.max(200, $ * (7 + v));
					}
					r() {
						const y = this.g.configuration.options.get(
								c.EditorOption.lineHeight,
							),
							$ = this.q(),
							v = this.n(),
							S = $ * (v / 1e3) * y,
							I = this.a.outsidePosition === "above" ? -S : S;
						this.g.viewModel.viewLayout.deltaScrollNow(0, I),
							this.h.renderNow();
						const T = this.g.viewLayout.getLinesViewportData(),
							P =
								this.a.outsidePosition === "above"
									? T.startLineNumber
									: T.endLineNumber;
						let k;
						{
							const L = (0, m.$iub)(this.h.viewDomNode),
								D = this.g.configuration.options.get(
									c.EditorOption.layoutInfo,
								).horizontalScrollbarHeight,
								M = new m.$eub(this.b.pos.x, L.y + L.height - D - 0.1),
								N = (0, m.$jub)(this.h.viewDomNode, L, M);
							k = this.j.createMouseTarget(
								this.h.getLastRenderData(),
								L,
								M,
								N,
								null,
							);
						}
						(!k.position || k.position.lineNumber !== P) &&
							(this.a.outsidePosition === "above"
								? (k = C.$Vub.createOutsideEditor(
										this.a.mouseColumn,
										new u.$hL(P, 1),
										"above",
										this.a.outsideDistance,
									))
								: (k = C.$Vub.createOutsideEditor(
										this.a.mouseColumn,
										new u.$hL(P, this.g.viewModel.getLineMaxColumn(P)),
										"below",
										this.a.outsideDistance,
									))),
							this.m(k, !0, n.NavigationCommandRevealType.None),
							(this.f = t.$hgb(t.getWindow(k.element), () => this.r()));
					}
				}
				class s {
					static {
						this.a = 400;
					}
					get altKey() {
						return this.b;
					}
					get ctrlKey() {
						return this.c;
					}
					get metaKey() {
						return this.d;
					}
					get shiftKey() {
						return this.f;
					}
					get leftButton() {
						return this.g;
					}
					get middleButton() {
						return this.h;
					}
					get startedOnLineNumbers() {
						return this.i;
					}
					constructor() {
						(this.b = !1),
							(this.c = !1),
							(this.d = !1),
							(this.f = !1),
							(this.g = !1),
							(this.h = !1),
							(this.i = !1),
							(this.j = null),
							(this.k = 0),
							(this.l = 0),
							(this.m = 0),
							(this.isDragAndDrop = !1);
					}
					get count() {
						return this.l;
					}
					setModifiers(y) {
						(this.b = y.altKey),
							(this.c = y.ctrlKey),
							(this.d = y.metaKey),
							(this.f = y.shiftKey);
					}
					setStartButtons(y) {
						(this.g = y.leftButton), (this.h = y.middleButton);
					}
					setStartedOnLineNumbers(y) {
						this.i = y;
					}
					trySetCount(y, $) {
						const v = new Date().getTime();
						v - this.m > s.a && (y = 1),
							(this.m = v),
							y > this.l + 1 && (y = this.l + 1),
							this.j && this.j.equals($) ? this.k++ : (this.k = 1),
							(this.j = $),
							(this.l = Math.min(y, this.k));
					}
				}
			},
		),
		