import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/common/arrays.js';
import '../../view/dynamicViewOverlay.js';
import '../../view/viewPart.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/model.js';
import '../../../../css!vs/editor/browser/viewParts/glyphMargin/glyphMargin.js';
define(
			de[1191],
			he([1, 0, 194, 24, 591, 303, 38, 48, 17, 64, 2265]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*arrays*/,
 w /*dynamicViewOverlay*/,
 E /*viewPart*/,
 C /*editorOptions*/,
 d /*position*/,
 m /*range*/,
 r /*model*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$svb = e.$rvb = e.$qvb = e.$pvb = e.$ovb = void 0);
				class u {
					constructor(s, l, y, $, v) {
						(this.startLineNumber = s),
							(this.endLineNumber = l),
							(this.className = y),
							(this.tooltip = $),
							(this._decorationToRenderBrand = void 0),
							(this.zIndex = v ?? 0);
					}
				}
				e.$ovb = u;
				class a {
					constructor(s, l, y) {
						(this.className = s), (this.zIndex = l), (this.tooltip = y);
					}
				}
				e.$pvb = a;
				class h {
					constructor() {
						this.c = [];
					}
					add(s) {
						this.c.push(s);
					}
					getDecorations() {
						return this.c;
					}
				}
				e.$qvb = h;
				class c extends w.$_ub {
					c(s, l, y) {
						const $ = [];
						for (let I = s; I <= l; I++) {
							const T = I - s;
							$[T] = new h();
						}
						if (y.length === 0) return $;
						y.sort((I, T) =>
							I.className === T.className
								? I.startLineNumber === T.startLineNumber
									? I.endLineNumber - T.endLineNumber
									: I.startLineNumber - T.startLineNumber
								: I.className < T.className
									? -1
									: 1,
						);
						let v = null,
							S = 0;
						for (let I = 0, T = y.length; I < T; I++) {
							const P = y[I],
								k = P.className,
								L = P.zIndex;
							let D = Math.max(P.startLineNumber, s) - s;
							const M = Math.min(P.endLineNumber, l) - s;
							v === k
								? ((D = Math.max(S + 1, D)), (S = Math.max(S, M)))
								: ((v = k), (S = M));
							for (let N = D; N <= S; N++) $[N].add(new a(k, L, P.tooltip));
						}
						return $;
					}
				}
				e.$rvb = c;
				class n extends E.$yub {
					constructor(s) {
						super(s), (this.t = {}), (this._context = s);
						const l = this._context.configuration.options,
							y = l.get(C.EditorOption.layoutInfo);
						(this.domNode = (0, t.$Shb)(document.createElement("div"))),
							this.domNode.setClassName("glyph-margin-widgets"),
							this.domNode.setPosition("absolute"),
							this.domNode.setTop(0),
							(this.c = l.get(C.EditorOption.lineHeight)),
							(this.g = l.get(C.EditorOption.glyphMargin)),
							(this.j = y.glyphMarginLeft),
							(this.m = y.glyphMarginWidth),
							(this.n = y.glyphMarginDecorationLaneCount),
							(this.q = []),
							(this.s = []);
					}
					dispose() {
						(this.q = []), (this.s = []), (this.t = {}), super.dispose();
					}
					getWidgets() {
						return Object.values(this.t);
					}
					onConfigurationChanged(s) {
						const l = this._context.configuration.options,
							y = l.get(C.EditorOption.layoutInfo);
						return (
							(this.c = l.get(C.EditorOption.lineHeight)),
							(this.g = l.get(C.EditorOption.glyphMargin)),
							(this.j = y.glyphMarginLeft),
							(this.m = y.glyphMarginWidth),
							(this.n = y.glyphMarginDecorationLaneCount),
							!0
						);
					}
					onDecorationsChanged(s) {
						return !0;
					}
					onFlushed(s) {
						return !0;
					}
					onLinesChanged(s) {
						return !0;
					}
					onLinesDeleted(s) {
						return !0;
					}
					onLinesInserted(s) {
						return !0;
					}
					onScrollChanged(s) {
						return s.scrollTopChanged;
					}
					onZonesChanged(s) {
						return !0;
					}
					addWidget(s) {
						const l = (0, t.$Shb)(s.getDomNode());
						(this.t[s.getId()] = {
							widget: s,
							preference: s.getPosition(),
							domNode: l,
							renderInfo: null,
						}),
							l.setPosition("absolute"),
							l.setDisplay("none"),
							l.setAttribute("widgetId", s.getId()),
							this.domNode.appendChild(l),
							this.h();
					}
					setWidgetPosition(s, l) {
						const y = this.t[s.getId()];
						return y.preference.lane === l.lane &&
							y.preference.zIndex === l.zIndex &&
							m.$iL.equalsRange(y.preference.range, l.range)
							? !1
							: ((y.preference = l), this.h(), !0);
					}
					removeWidget(s) {
						const l = s.getId();
						if (this.t[l]) {
							const $ = this.t[l].domNode.domNode;
							delete this.t[l], $.remove(), this.h();
						}
					}
					u(s, l) {
						const y = s.visibleRange.startLineNumber,
							$ = s.visibleRange.endLineNumber,
							v = s.getDecorationsInViewport();
						for (const S of v) {
							const I = S.options.glyphMarginClassName;
							if (!I) continue;
							const T = Math.max(S.range.startLineNumber, y),
								P = Math.min(S.range.endLineNumber, $),
								k = S.options.glyphMargin?.position ?? r.GlyphMarginLane.Center,
								L = S.options.zIndex ?? 0;
							for (let D = T; D <= P; D++) {
								const M =
										this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
											new d.$hL(D, 0),
										),
									N = this._context.viewModel.glyphLanes
										.getLanesAtLine(M.lineNumber)
										.indexOf(k);
								l.push(new p(D, N, L, I));
							}
						}
					}
					w(s, l) {
						const y = s.visibleRange.startLineNumber,
							$ = s.visibleRange.endLineNumber;
						for (const v of Object.values(this.t)) {
							const S = v.preference.range,
								{ startLineNumber: I, endLineNumber: T } =
									this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(
										m.$iL.lift(S),
									);
							if (!I || !T || T < y || I > $) continue;
							const P = Math.max(I, y),
								k =
									this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
										new d.$hL(P, 0),
									),
								L = this._context.viewModel.glyphLanes
									.getLanesAtLine(k.lineNumber)
									.indexOf(v.preference.lane);
							l.push(new o(P, L, v.preference.zIndex, v));
						}
					}
					y(s) {
						const l = [];
						return (
							this.u(s, l),
							this.w(s, l),
							l.sort((y, $) =>
								y.lineNumber === $.lineNumber
									? y.laneIndex === $.laneIndex
										? y.zIndex === $.zIndex
											? $.type === y.type
												? y.type === g.Decoration && $.type === g.Decoration
													? y.className < $.className
														? -1
														: 1
													: 0
												: $.type - y.type
											: $.zIndex - y.zIndex
										: y.laneIndex - $.laneIndex
									: y.lineNumber - $.lineNumber,
							),
							l
						);
					}
					prepareRender(s) {
						if (!this.g) {
							this.s = [];
							return;
						}
						for (const $ of Object.values(this.t)) $.renderInfo = null;
						const l = new i.$cc(this.y(s)),
							y = [];
						for (; l.length > 0; ) {
							const $ = l.peek();
							if (!$) break;
							const v = l.takeWhile(
								(I) =>
									I.lineNumber === $.lineNumber && I.laneIndex === $.laneIndex,
							);
							if (!v || v.length === 0) break;
							const S = v[0];
							if (S.type === g.Decoration) {
								const I = [];
								for (const T of v) {
									if (T.zIndex !== S.zIndex || T.type !== S.type) break;
									(I.length === 0 || I[I.length - 1] !== T.className) &&
										I.push(T.className);
								}
								y.push(S.accept(I.join(" ")));
							} else
								S.widget.renderInfo = {
									lineNumber: S.lineNumber,
									laneIndex: S.laneIndex,
								};
						}
						this.s = y;
					}
					render(s) {
						if (!this.g) {
							for (const y of Object.values(this.t))
								y.domNode.setDisplay("none");
							for (; this.q.length > 0; ) this.q.pop()?.domNode.remove();
							return;
						}
						const l = Math.round(this.m / this.n);
						for (const y of Object.values(this.t))
							if (!y.renderInfo) y.domNode.setDisplay("none");
							else {
								const $ =
										s.viewportData.relativeVerticalOffset[
											y.renderInfo.lineNumber - s.viewportData.startLineNumber
										],
									v = this.j + y.renderInfo.laneIndex * this.c;
								y.domNode.setDisplay("block"),
									y.domNode.setTop($),
									y.domNode.setLeft(v),
									y.domNode.setWidth(l),
									y.domNode.setHeight(this.c);
							}
						for (let y = 0; y < this.s.length; y++) {
							const $ = this.s[y],
								v =
									s.viewportData.relativeVerticalOffset[
										$.lineNumber - s.viewportData.startLineNumber
									],
								S = this.j + $.laneIndex * this.c;
							let I;
							y < this.q.length
								? (I = this.q[y])
								: ((I = (0, t.$Shb)(document.createElement("div"))),
									this.q.push(I),
									this.domNode.appendChild(I)),
								I.setClassName("cgmr codicon " + $.combinedClassName),
								I.setPosition("absolute"),
								I.setTop(v),
								I.setLeft(S),
								I.setWidth(l),
								I.setHeight(this.c);
						}
						for (; this.q.length > this.s.length; )
							this.q.pop()?.domNode.remove();
					}
				}
				e.$svb = n;
				var g;
				(function (b) {
					(b[(b.Decoration = 0)] = "Decoration"),
						(b[(b.Widget = 1)] = "Widget");
				})(g || (g = {}));
				class p {
					constructor(s, l, y, $) {
						(this.lineNumber = s),
							(this.laneIndex = l),
							(this.zIndex = y),
							(this.className = $),
							(this.type = g.Decoration);
					}
					accept(s) {
						return new f(this.lineNumber, this.laneIndex, s);
					}
				}
				class o {
					constructor(s, l, y, $) {
						(this.lineNumber = s),
							(this.laneIndex = l),
							(this.zIndex = y),
							(this.widget = $),
							(this.type = g.Widget);
					}
				}
				class f {
					constructor(s, l, y) {
						(this.lineNumber = s),
							(this.laneIndex = l),
							(this.combinedClassName = y);
					}
				}
			},
		),
		