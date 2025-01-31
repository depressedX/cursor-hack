import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/browser/globalPointerMoveMonitor.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../view/viewLayer.js';
import '../../view/viewPart.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/core/rgba.js';
import '../../../common/editorCommon.js';
import '../../../common/encodedTokenAttributes.js';
import './minimapCharSheet.js';
import '../../../common/viewModel/minimapTokensColorTracker.js';
import '../../../common/viewEvents.js';
import '../../../common/viewModel.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../common/core/selection.js';
import '../../../../base/browser/touch.js';
import './minimapCharRendererFactory.js';
import '../../../common/model.js';
import '../../../../base/common/functional.js';
import '../../../../base/common/map.js';
import '../../../../base/browser/fonts.js';
import '../../../../css!vs/editor/browser/viewParts/minimap/minimap.js';
define(
			de[2831],
			he([
				1, 0, 7, 194, 757, 120, 3, 12, 37, 1183, 303, 38, 17, 1526, 98, 171,
				1145, 1592, 493, 290, 51, 104, 159, 2547, 64, 288, 59, 661, 2272,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*fastDomNode*/,
				w /*globalPointerMoveMonitor*/,
				E /*charCode*/,
				C /*lifecycle*/,
				d /*platform*/,
				m /*strings*/,
				r /*viewLayer*/,
				u /*viewPart*/,
				a /*editorOptions*/,
				h /*range*/,
				c /*rgba*/,
				n /*editorCommon*/,
				g /*encodedTokenAttributes*/,
				p /*minimapCharSheet*/,
				o /*minimapTokensColorTracker*/,
				f /*viewEvents*/,
				b /*viewModel*/,
				s /*colorRegistry*/,
				l /*selection*/,
				y /*touch*/,
				$ /*minimapCharRendererFactory*/,
				v /*model*/,
				S /*functional*/,
				I /*map*/,
				T /*fonts*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Evb = void 0),
					(t = mt(t)),
					(d = mt(d)),
					(m = mt(m)),
					(f = mt(f));
				const P = 140,
					k = 2;
				class L {
					constructor(F, x, H) {
						const q = F.options,
							V = q.get(a.EditorOption.pixelRatio),
							G = q.get(a.EditorOption.layoutInfo),
							K = G.minimap,
							J = q.get(a.EditorOption.fontInfo),
							W = q.get(a.EditorOption.minimap);
						(this.renderMinimap = K.renderMinimap),
							(this.size = W.size),
							(this.minimapHeightIsEditorHeight =
								K.minimapHeightIsEditorHeight),
							(this.scrollBeyondLastLine = q.get(
								a.EditorOption.scrollBeyondLastLine,
							)),
							(this.paddingTop = q.get(a.EditorOption.padding).top),
							(this.paddingBottom = q.get(a.EditorOption.padding).bottom),
							(this.showSlider = W.showSlider),
							(this.autohide = W.autohide),
							(this.pixelRatio = V),
							(this.typicalHalfwidthCharacterWidth =
								J.typicalHalfwidthCharacterWidth),
							(this.lineHeight = q.get(a.EditorOption.lineHeight)),
							(this.minimapLeft = K.minimapLeft),
							(this.minimapWidth = K.minimapWidth),
							(this.minimapHeight = G.height),
							(this.canvasInnerWidth = K.minimapCanvasInnerWidth),
							(this.canvasInnerHeight = K.minimapCanvasInnerHeight),
							(this.canvasOuterWidth = K.minimapCanvasOuterWidth),
							(this.canvasOuterHeight = K.minimapCanvasOuterHeight),
							(this.isSampling = K.minimapIsSampling),
							(this.editorHeight = G.height),
							(this.fontScale = K.minimapScale),
							(this.minimapLineHeight = K.minimapLineHeight),
							(this.minimapCharWidth =
								p.Constants.BASE_CHAR_WIDTH * this.fontScale),
							(this.sectionHeaderFontFamily = T.$njb),
							(this.sectionHeaderFontSize = W.sectionHeaderFontSize * V),
							(this.sectionHeaderLetterSpacing = W.sectionHeaderLetterSpacing),
							(this.sectionHeaderFontColor = L.f(
								x,
								H.getColor(g.ColorId.DefaultForeground),
							)),
							(this.charRenderer = (0, S.$hb)(() =>
								$.$Dvb.create(this.fontScale, J.fontFamily),
							)),
							(this.defaultBackgroundColor = H.getColor(
								g.ColorId.DefaultBackground,
							)),
							(this.backgroundColor = L.c(x, this.defaultBackgroundColor)),
							(this.foregroundAlpha = L.d(x));
					}
					static c(F, x) {
						const H = F.getColor(s.$GR);
						return H
							? new c.$xvb(
									H.rgba.r,
									H.rgba.g,
									H.rgba.b,
									Math.round(255 * H.rgba.a),
								)
							: x;
					}
					static d(F) {
						const x = F.getColor(s.$HR);
						return x ? c.$xvb._clamp(Math.round(255 * x.rgba.a)) : 255;
					}
					static f(F, x) {
						const H = F.getColor(s.$9P);
						return H
							? new c.$xvb(
									H.rgba.r,
									H.rgba.g,
									H.rgba.b,
									Math.round(255 * H.rgba.a),
								)
							: x;
					}
					equals(F) {
						return (
							this.renderMinimap === F.renderMinimap &&
							this.size === F.size &&
							this.minimapHeightIsEditorHeight ===
								F.minimapHeightIsEditorHeight &&
							this.scrollBeyondLastLine === F.scrollBeyondLastLine &&
							this.paddingTop === F.paddingTop &&
							this.paddingBottom === F.paddingBottom &&
							this.showSlider === F.showSlider &&
							this.autohide === F.autohide &&
							this.pixelRatio === F.pixelRatio &&
							this.typicalHalfwidthCharacterWidth ===
								F.typicalHalfwidthCharacterWidth &&
							this.lineHeight === F.lineHeight &&
							this.minimapLeft === F.minimapLeft &&
							this.minimapWidth === F.minimapWidth &&
							this.minimapHeight === F.minimapHeight &&
							this.canvasInnerWidth === F.canvasInnerWidth &&
							this.canvasInnerHeight === F.canvasInnerHeight &&
							this.canvasOuterWidth === F.canvasOuterWidth &&
							this.canvasOuterHeight === F.canvasOuterHeight &&
							this.isSampling === F.isSampling &&
							this.editorHeight === F.editorHeight &&
							this.fontScale === F.fontScale &&
							this.minimapLineHeight === F.minimapLineHeight &&
							this.minimapCharWidth === F.minimapCharWidth &&
							this.sectionHeaderFontSize === F.sectionHeaderFontSize &&
							this.sectionHeaderLetterSpacing ===
								F.sectionHeaderLetterSpacing &&
							this.defaultBackgroundColor &&
							this.defaultBackgroundColor.equals(F.defaultBackgroundColor) &&
							this.backgroundColor &&
							this.backgroundColor.equals(F.backgroundColor) &&
							this.foregroundAlpha === F.foregroundAlpha
						);
					}
				}
				class D {
					constructor(F, x, H, q, V, G, K, J, W) {
						(this.scrollTop = F),
							(this.scrollHeight = x),
							(this.sliderNeeded = H),
							(this.c = q),
							(this.sliderTop = V),
							(this.sliderHeight = G),
							(this.topPaddingLineCount = K),
							(this.startLineNumber = J),
							(this.endLineNumber = W);
					}
					getDesiredScrollTopFromDelta(F) {
						return Math.round(this.scrollTop + F / this.c);
					}
					getDesiredScrollTopFromTouchLocation(F) {
						return Math.round((F - this.sliderHeight / 2) / this.c);
					}
					intersectWithViewport(F) {
						const x = Math.max(this.startLineNumber, F.startLineNumber),
							H = Math.min(this.endLineNumber, F.endLineNumber);
						return x > H ? null : [x, H];
					}
					getYForLineNumber(F, x) {
						return +(F - this.startLineNumber + this.topPaddingLineCount) * x;
					}
					static create(F, x, H, q, V, G, K, J, W, X, Y) {
						const ie = F.pixelRatio,
							ne = F.minimapLineHeight,
							ee = Math.floor(F.canvasInnerHeight / ne),
							_ = F.lineHeight;
						if (F.minimapHeightIsEditorHeight) {
							let oe = J * F.lineHeight + F.paddingTop + F.paddingBottom;
							F.scrollBeyondLastLine &&
								(oe += Math.max(0, V - F.lineHeight - F.paddingBottom));
							const ae = Math.max(1, Math.floor((V * V) / oe)),
								pe = Math.max(0, F.minimapHeight - ae),
								$e = pe / (X - V),
								ye = W * $e,
								ue = pe > 0,
								fe = Math.floor(F.canvasInnerHeight / F.minimapLineHeight),
								me = Math.floor(F.paddingTop / F.lineHeight);
							return new D(W, X, ue, $e, ye, ae, me, 1, Math.min(K, fe));
						}
						let te;
						if (G && H !== K) {
							const oe = H - x + 1;
							te = Math.floor((oe * ne) / ie);
						} else {
							const oe = V / _;
							te = Math.floor((oe * ne) / ie);
						}
						const Q = Math.floor(F.paddingTop / _);
						let Z = Math.floor(F.paddingBottom / _);
						if (F.scrollBeyondLastLine) {
							const oe = V / _;
							Z = Math.max(Z, oe - 1);
						}
						let se;
						if (Z > 0) {
							const oe = V / _;
							se = ((Q + K + Z - oe - 1) * ne) / ie;
						} else se = Math.max(0, ((Q + K) * ne) / ie - te);
						se = Math.min(F.minimapHeight - te, se);
						const re = se / (X - V),
							le = W * re;
						if (ee >= Q + K + Z) {
							const oe = se > 0;
							return new D(W, X, oe, re, le, te, Q, 1, K);
						} else {
							let oe;
							x > 1 ? (oe = x + Q) : (oe = Math.max(1, W / _));
							let ae,
								pe = Math.max(1, Math.floor(oe - (le * ie) / ne));
							pe < Q
								? ((ae = Q - pe + 1), (pe = 1))
								: ((ae = 0), (pe = Math.max(1, pe - Q))),
								Y &&
									Y.scrollHeight === X &&
									(Y.scrollTop > W &&
										((pe = Math.min(pe, Y.startLineNumber)),
										(ae = Math.max(ae, Y.topPaddingLineCount))),
									Y.scrollTop < W &&
										((pe = Math.max(pe, Y.startLineNumber)),
										(ae = Math.min(ae, Y.topPaddingLineCount))));
							const $e = Math.min(K, pe - ae + ee - 1),
								ye = (W - q) / _;
							let ue;
							return (
								W >= F.paddingTop
									? (ue = ((x - pe + ae + ye) * ne) / ie)
									: (ue = ((W / F.paddingTop) * (ae + ye) * ne) / ie),
								new D(W, X, !0, re, ue, te, ae, pe, $e)
							);
						}
					}
				}
				class M {
					static {
						this.INVALID = new M(-1);
					}
					constructor(F) {
						this.dy = F;
					}
					onContentChanged() {
						this.dy = -1;
					}
					onTokensChanged() {
						this.dy = -1;
					}
				}
				class N {
					constructor(F, x, H) {
						(this.renderedLayout = F),
							(this.c = x),
							(this.d = new r.$Aub({ createLine: () => M.INVALID })),
							this.d._set(F.startLineNumber, H);
					}
					linesEquals(F) {
						if (!this.scrollEquals(F)) return !1;
						const H = this.d._get().lines;
						for (let q = 0, V = H.length; q < V; q++)
							if (H[q].dy === -1) return !1;
						return !0;
					}
					scrollEquals(F) {
						return (
							this.renderedLayout.startLineNumber === F.startLineNumber &&
							this.renderedLayout.endLineNumber === F.endLineNumber
						);
					}
					_get() {
						const F = this.d._get();
						return {
							imageData: this.c,
							rendLineNumberStart: F.rendLineNumberStart,
							lines: F.lines,
						};
					}
					onLinesChanged(F, x) {
						return this.d.onLinesChanged(F, x);
					}
					onLinesDeleted(F, x) {
						this.d.onLinesDeleted(F, x);
					}
					onLinesInserted(F, x) {
						this.d.onLinesInserted(F, x);
					}
					onTokensChanged(F) {
						return this.d.onTokensChanged(F);
					}
				}
				class A {
					constructor(F, x, H, q) {
						(this.c = A.h(x, H, q)),
							(this.d = [F.createImageData(x, H), F.createImageData(x, H)]),
							(this.f = 0);
					}
					getBuffer() {
						this.f = 1 - this.f;
						const F = this.d[this.f];
						return F.data.set(this.c), F;
					}
					static h(F, x, H) {
						const q = H.r,
							V = H.g,
							G = H.b,
							K = H.a,
							J = new Uint8ClampedArray(F * x * 4);
						let W = 0;
						for (let X = 0; X < x; X++)
							for (let Y = 0; Y < F; Y++)
								(J[W] = q),
									(J[W + 1] = V),
									(J[W + 2] = G),
									(J[W + 3] = K),
									(W += 4);
						return J;
					}
				}
				class R {
					static compute(F, x, H) {
						if (F.renderMinimap === a.RenderMinimap.None || !F.isSampling)
							return [null, []];
						const { minimapLineCount: q } =
								a.EditorLayoutInfoComputer.computeContainedMinimapLineCount({
									viewLineCount: x,
									scrollBeyondLastLine: F.scrollBeyondLastLine,
									paddingTop: F.paddingTop,
									paddingBottom: F.paddingBottom,
									height: F.editorHeight,
									lineHeight: F.lineHeight,
									pixelRatio: F.pixelRatio,
								}),
							V = x / q,
							G = V / 2;
						if (!H || H.minimapLines.length === 0) {
							const te = [];
							if (((te[0] = 1), q > 1)) {
								for (let Q = 0, Z = q - 1; Q < Z; Q++)
									te[Q] = Math.round(Q * V + G);
								te[q - 1] = x;
							}
							return [new R(V, te), []];
						}
						const K = H.minimapLines,
							J = K.length,
							W = [];
						let X = 0,
							Y = 0,
							ie = 1;
						const ne = 10;
						let ee = [],
							_ = null;
						for (let te = 0; te < q; te++) {
							const Q = Math.max(ie, Math.round(te * V)),
								Z = Math.max(Q, Math.round((te + 1) * V));
							for (; X < J && K[X] < Q; ) {
								if (ee.length < ne) {
									const re = X + 1 + Y;
									_ && _.type === "deleted" && _._oldIndex === X - 1
										? _.deleteToLineNumber++
										: ((_ = {
												type: "deleted",
												_oldIndex: X,
												deleteFromLineNumber: re,
												deleteToLineNumber: re,
											}),
											ee.push(_)),
										Y--;
								}
								X++;
							}
							let se;
							if (X < J && K[X] <= Z) (se = K[X]), X++;
							else if (
								(te === 0
									? (se = 1)
									: te + 1 === q
										? (se = x)
										: (se = Math.round(te * V + G)),
								ee.length < ne)
							) {
								const re = X + 1 + Y;
								_ && _.type === "inserted" && _._i === te - 1
									? _.insertToLineNumber++
									: ((_ = {
											type: "inserted",
											_i: te,
											insertFromLineNumber: re,
											insertToLineNumber: re,
										}),
										ee.push(_)),
									Y++;
							}
							(W[te] = se), (ie = se);
						}
						if (ee.length < ne)
							for (; X < J; ) {
								const te = X + 1 + Y;
								_ && _.type === "deleted" && _._oldIndex === X - 1
									? _.deleteToLineNumber++
									: ((_ = {
											type: "deleted",
											_oldIndex: X,
											deleteFromLineNumber: te,
											deleteToLineNumber: te,
										}),
										ee.push(_)),
									Y--,
									X++;
							}
						else ee = [{ type: "flush" }];
						return [new R(V, W), ee];
					}
					constructor(F, x) {
						(this.samplingRatio = F), (this.minimapLines = x);
					}
					modelLineToMinimapLine(F) {
						return Math.min(
							this.minimapLines.length,
							Math.max(1, Math.round(F / this.samplingRatio)),
						);
					}
					modelLineRangeToMinimapLineRange(F, x) {
						let H = this.modelLineToMinimapLine(F) - 1;
						for (; H > 0 && this.minimapLines[H - 1] >= F; ) H--;
						let q = this.modelLineToMinimapLine(x) - 1;
						for (
							;
							q + 1 < this.minimapLines.length && this.minimapLines[q + 1] <= x;
						)
							q++;
						if (H === q) {
							const V = this.minimapLines[H];
							if (V < F || V > x) return null;
						}
						return [H + 1, q + 1];
					}
					decorationLineRangeToMinimapLineRange(F, x) {
						let H = this.modelLineToMinimapLine(F),
							q = this.modelLineToMinimapLine(x);
						return (
							F !== x &&
								q === H &&
								(q === this.minimapLines.length ? H > 1 && H-- : q++),
							[H, q]
						);
					}
					onLinesDeleted(F) {
						const x = F.toLineNumber - F.fromLineNumber + 1;
						let H = this.minimapLines.length,
							q = 0;
						for (
							let V = this.minimapLines.length - 1;
							V >= 0 && !(this.minimapLines[V] < F.fromLineNumber);
							V--
						)
							this.minimapLines[V] <= F.toLineNumber
								? ((this.minimapLines[V] = Math.max(1, F.fromLineNumber - 1)),
									(H = Math.min(H, V)),
									(q = Math.max(q, V)))
								: (this.minimapLines[V] -= x);
						return [H, q];
					}
					onLinesInserted(F) {
						const x = F.toLineNumber - F.fromLineNumber + 1;
						for (
							let H = this.minimapLines.length - 1;
							H >= 0 && !(this.minimapLines[H] < F.fromLineNumber);
							H--
						)
							this.minimapLines[H] += x;
					}
				}
				class O extends u.$yub {
					constructor(F) {
						super(F),
							(this.t = new I.$Jc(10, 1.5)),
							(this.tokensColorTracker = o.$Bvb.getInstance()),
							(this.c = []),
							(this.m = null),
							(this.options = new L(
								this._context.configuration,
								this._context.theme,
								this.tokensColorTracker,
							));
						const [x] = R.compute(
							this.options,
							this._context.viewModel.getLineCount(),
							null,
						);
						(this.n = x), (this.q = !1), (this.u = new B(F.theme, this));
					}
					dispose() {
						this.u.dispose(), super.dispose();
					}
					getDomNode() {
						return this.u.getDomNode();
					}
					w() {
						const F = new L(
							this._context.configuration,
							this._context.theme,
							this.tokensColorTracker,
						);
						return this.options.equals(F)
							? !1
							: ((this.options = F), this.z(), this.u.onDidChangeOptions(), !0);
					}
					onConfigurationChanged(F) {
						return this.w();
					}
					onCursorStateChanged(F) {
						return (
							(this.c = F.selections),
							(this.m = null),
							this.u.onSelectionChanged()
						);
					}
					onDecorationsChanged(F) {
						return F.affectsMinimap ? this.u.onDecorationsChanged() : !1;
					}
					onFlushed(F) {
						return this.n && (this.q = !0), this.u.onFlushed();
					}
					onLinesChanged(F) {
						if (this.n) {
							const x = this.n.modelLineRangeToMinimapLineRange(
								F.fromLineNumber,
								F.fromLineNumber + F.count - 1,
							);
							return x ? this.u.onLinesChanged(x[0], x[1] - x[0] + 1) : !1;
						} else return this.u.onLinesChanged(F.fromLineNumber, F.count);
					}
					onLinesDeleted(F) {
						if (this.n) {
							const [x, H] = this.n.onLinesDeleted(F);
							return (
								x <= H && this.u.onLinesChanged(x + 1, H - x + 1),
								(this.q = !0),
								!0
							);
						} else
							return this.u.onLinesDeleted(F.fromLineNumber, F.toLineNumber);
					}
					onLinesInserted(F) {
						return this.n
							? (this.n.onLinesInserted(F), (this.q = !0), !0)
							: this.u.onLinesInserted(F.fromLineNumber, F.toLineNumber);
					}
					onScrollChanged(F) {
						return this.u.onScrollChanged();
					}
					onThemeChanged(F) {
						return this.u.onThemeChanged(), this.w(), !0;
					}
					onTokensChanged(F) {
						if (this.n) {
							const x = [];
							for (const H of F.ranges) {
								const q = this.n.modelLineRangeToMinimapLineRange(
									H.fromLineNumber,
									H.toLineNumber,
								);
								q && x.push({ fromLineNumber: q[0], toLineNumber: q[1] });
							}
							return x.length ? this.u.onTokensChanged(x) : !1;
						} else return this.u.onTokensChanged(F.ranges);
					}
					onTokensColorsChanged(F) {
						return this.w(), this.u.onTokensColorsChanged();
					}
					onZonesChanged(F) {
						return this.u.onZonesChanged();
					}
					prepareRender(F) {
						this.q && ((this.q = !1), this.z());
					}
					render(F) {
						let x = F.visibleRange.startLineNumber,
							H = F.visibleRange.endLineNumber;
						this.n &&
							((x = this.n.modelLineToMinimapLine(x)),
							(H = this.n.modelLineToMinimapLine(H)));
						const q = {
							viewportContainsWhitespaceGaps:
								F.viewportData.whitespaceViewportData.length > 0,
							scrollWidth: F.scrollWidth,
							scrollHeight: F.scrollHeight,
							viewportStartLineNumber: x,
							viewportEndLineNumber: H,
							viewportStartLineNumberVerticalOffset:
								F.getVerticalOffsetForLineNumber(x),
							scrollTop: F.scrollTop,
							scrollLeft: F.scrollLeft,
							viewportWidth: F.viewportWidth,
							viewportHeight: F.viewportHeight,
						};
						this.u.render(q);
					}
					z() {
						this.m = null;
						const F = !!this.n,
							[x, H] = R.compute(
								this.options,
								this._context.viewModel.getLineCount(),
								this.n,
							);
						if (((this.n = x), F && this.n))
							for (const q of H)
								switch (q.type) {
									case "deleted":
										this.u.onLinesDeleted(
											q.deleteFromLineNumber,
											q.deleteToLineNumber,
										);
										break;
									case "inserted":
										this.u.onLinesInserted(
											q.insertFromLineNumber,
											q.insertToLineNumber,
										);
										break;
									case "flush":
										this.u.onFlushed();
										break;
								}
					}
					getLineCount() {
						return this.n
							? this.n.minimapLines.length
							: this._context.viewModel.getLineCount();
					}
					getRealLineCount() {
						return this._context.viewModel.getLineCount();
					}
					getLineContent(F) {
						return this.n
							? this._context.viewModel.getLineContent(
									this.n.minimapLines[F - 1],
								)
							: this._context.viewModel.getLineContent(F);
					}
					getLineMaxColumn(F) {
						return this.n
							? this._context.viewModel.getLineMaxColumn(
									this.n.minimapLines[F - 1],
								)
							: this._context.viewModel.getLineMaxColumn(F);
					}
					getMinimapLinesRenderingData(F, x, H) {
						if (this.n) {
							const q = [];
							for (let V = 0, G = x - F + 1; V < G; V++)
								H[V]
									? (q[V] = this._context.viewModel.getViewLineData(
											this.n.minimapLines[F + V - 1],
										))
									: (q[V] = null);
							return q;
						}
						return this._context.viewModel.getMinimapLinesRenderingData(F, x, H)
							.data;
					}
					getSelections() {
						if (this.m === null)
							if (this.n) {
								this.m = [];
								for (const F of this.c) {
									const [x, H] = this.n.decorationLineRangeToMinimapLineRange(
										F.startLineNumber,
										F.endLineNumber,
									);
									this.m.push(new l.$kL(x, F.startColumn, H, F.endColumn));
								}
							} else this.m = this.c;
						return this.m;
					}
					getMinimapDecorationsInViewport(F, x) {
						const H = this.C(F, x).filter(
							(q) => !q.options.minimap?.sectionHeaderStyle,
						);
						if (this.n) {
							const q = [];
							for (const V of H) {
								if (!V.options.minimap) continue;
								const G = V.range,
									K = this.n.modelLineToMinimapLine(G.startLineNumber),
									J = this.n.modelLineToMinimapLine(G.endLineNumber);
								q.push(
									new b.$5sb(
										new h.$iL(K, G.startColumn, J, G.endColumn),
										V.options,
									),
								);
							}
							return q;
						}
						return H;
					}
					getSectionHeaderDecorationsInViewport(F, x) {
						const H = this.options.minimapLineHeight,
							V = this.options.sectionHeaderFontSize / H;
						return (
							(F = Math.floor(Math.max(1, F - V))),
							this.C(F, x).filter(
								(G) => !!G.options.minimap?.sectionHeaderStyle,
							)
						);
					}
					C(F, x) {
						let H;
						if (this.n) {
							const q = this.n.minimapLines[F - 1],
								V = this.n.minimapLines[x - 1];
							H = new h.$iL(
								q,
								1,
								V,
								this._context.viewModel.getLineMaxColumn(V),
							);
						} else
							H = new h.$iL(
								F,
								1,
								x,
								this._context.viewModel.getLineMaxColumn(x),
							);
						return this._context.viewModel.getMinimapDecorationsInRange(H);
					}
					getSectionHeaderText(F, x) {
						const H = F.options.minimap?.sectionHeaderText;
						if (!H) return null;
						const q = this.t.get(H);
						if (q) return q;
						const V = x(H);
						return this.t.set(H, V), V;
					}
					getOptions() {
						return this._context.viewModel.model.getOptions();
					}
					revealLineNumber(F) {
						this.n && (F = this.n.minimapLines[F - 1]),
							this._context.viewModel.revealRange(
								"mouse",
								!1,
								new h.$iL(F, 1, F, 1),
								f.VerticalRevealType.Center,
								n.ScrollType.Smooth,
							);
					}
					setScrollTop(F) {
						this._context.viewModel.viewLayout.setScrollPosition(
							{ scrollTop: F },
							n.ScrollType.Immediate,
						);
					}
				}
				e.$Evb = O;
				class B extends C.$1c {
					constructor(F, x) {
						super(),
							(this.M = !1),
							(this.N = !1),
							(this.c = F),
							(this.f = x),
							(this.J = null),
							(this.O = null),
							(this.L = this.c.getColor(s.$CR)),
							(this.h = (0, i.$Shb)(document.createElement("div"))),
							u.$zub.write(this.h, u.PartFingerprint.Minimap),
							this.h.setClassName(this.R()),
							this.h.setPosition("absolute"),
							this.h.setAttribute("role", "presentation"),
							this.h.setAttribute("aria-hidden", "true"),
							(this.m = (0, i.$Shb)(document.createElement("div"))),
							this.m.setClassName("minimap-shadow-hidden"),
							this.h.appendChild(this.m),
							(this.n = (0, i.$Shb)(document.createElement("canvas"))),
							this.n.setPosition("absolute"),
							this.n.setLeft(0),
							this.h.appendChild(this.n),
							(this.q = (0, i.$Shb)(document.createElement("canvas"))),
							this.q.setPosition("absolute"),
							this.q.setClassName("minimap-decorations-layer"),
							this.q.setLeft(0),
							this.h.appendChild(this.q),
							(this.t = (0, i.$Shb)(document.createElement("div"))),
							this.t.setPosition("absolute"),
							this.t.setClassName("minimap-slider"),
							this.t.setLayerHinting(!0),
							this.t.setContain("strict"),
							this.h.appendChild(this.t),
							(this.u = (0, i.$Shb)(document.createElement("div"))),
							this.u.setPosition("absolute"),
							this.u.setClassName("minimap-slider-horizontal"),
							this.t.appendChild(this.u),
							this.S(),
							(this.w = t.$$fb(this.h.domNode, t.$$gb.POINTER_DOWN, (H) => {
								if (
									(H.preventDefault(),
									this.f.options.renderMinimap === a.RenderMinimap.None ||
										!this.J)
								)
									return;
								if (this.f.options.size !== "proportional") {
									if (H.button === 0 && this.J) {
										const W = t.$tgb(this.t.domNode),
											X = W.top + W.height / 2;
										this.P(H, X, this.J.renderedLayout);
									}
									return;
								}
								const V = this.f.options.minimapLineHeight,
									G =
										(this.f.options.canvasInnerHeight /
											this.f.options.canvasOuterHeight) *
										H.offsetY;
								let J =
									Math.floor(G / V) +
									this.J.renderedLayout.startLineNumber -
									this.J.renderedLayout.topPaddingLineCount;
								(J = Math.min(J, this.f.getLineCount())),
									this.f.revealLineNumber(J);
							})),
							(this.z = new w.$Thb()),
							(this.C = t.$$fb(this.t.domNode, t.$$gb.POINTER_DOWN, (H) => {
								H.preventDefault(),
									H.stopPropagation(),
									H.button === 0 &&
										this.J &&
										this.P(H, H.pageY, this.J.renderedLayout);
							})),
							(this.F = y.$Qhb.addTarget(this.h.domNode)),
							(this.G = t.$0fb(
								this.h.domNode,
								y.EventType.Start,
								(H) => {
									H.preventDefault(),
										H.stopPropagation(),
										this.J &&
											(this.t.toggleClassName("active", !0),
											(this.N = !0),
											this.Q(H));
								},
								{ passive: !1 },
							)),
							(this.H = t.$0fb(
								this.h.domNode,
								y.EventType.Change,
								(H) => {
									H.preventDefault(),
										H.stopPropagation(),
										this.J && this.N && this.Q(H);
								},
								{ passive: !1 },
							)),
							(this.I = t.$$fb(this.h.domNode, y.EventType.End, (H) => {
								H.preventDefault(),
									H.stopPropagation(),
									(this.N = !1),
									this.t.toggleClassName("active", !1);
							}));
					}
					P(F, x, H) {
						if (!F.target || !(F.target instanceof Element)) return;
						const q = F.pageX;
						this.t.toggleClassName("active", !0);
						const V = (G, K) => {
							const J = t.$tgb(this.h.domNode),
								W = Math.min(
									Math.abs(K - q),
									Math.abs(K - J.left),
									Math.abs(K - J.left - J.width),
								);
							if (d.$l && W > P) {
								this.f.setScrollTop(H.scrollTop);
								return;
							}
							const X = G - x;
							this.f.setScrollTop(H.getDesiredScrollTopFromDelta(X));
						};
						F.pageY !== x && V(F.pageY, q),
							this.z.startMonitoring(
								F.target,
								F.pointerId,
								F.buttons,
								(G) => V(G.pageY, G.pageX),
								() => {
									this.t.toggleClassName("active", !1);
								},
							);
					}
					Q(F) {
						const x = this.h.domNode.getBoundingClientRect().top,
							H = this.J.renderedLayout.getDesiredScrollTopFromTouchLocation(
								F.pageY - x,
							);
						this.f.setScrollTop(H);
					}
					dispose() {
						this.w.dispose(),
							this.z.dispose(),
							this.C.dispose(),
							this.F.dispose(),
							this.G.dispose(),
							this.H.dispose(),
							this.I.dispose(),
							super.dispose();
					}
					R() {
						const F = ["minimap"];
						return (
							this.f.options.showSlider === "always"
								? F.push("slider-always")
								: F.push("slider-mouseover"),
							this.f.options.autohide && F.push("autohide"),
							F.join(" ")
						);
					}
					getDomNode() {
						return this.h;
					}
					S() {
						this.h.setLeft(this.f.options.minimapLeft),
							this.h.setWidth(this.f.options.minimapWidth),
							this.h.setHeight(this.f.options.minimapHeight),
							this.m.setHeight(this.f.options.minimapHeight),
							this.n.setWidth(this.f.options.canvasOuterWidth),
							this.n.setHeight(this.f.options.canvasOuterHeight),
							(this.n.domNode.width = this.f.options.canvasInnerWidth),
							(this.n.domNode.height = this.f.options.canvasInnerHeight),
							this.q.setWidth(this.f.options.canvasOuterWidth),
							this.q.setHeight(this.f.options.canvasOuterHeight),
							(this.q.domNode.width = this.f.options.canvasInnerWidth),
							(this.q.domNode.height = this.f.options.canvasInnerHeight),
							this.t.setWidth(this.f.options.minimapWidth);
					}
					U() {
						return (
							this.O ||
								(this.f.options.canvasInnerWidth > 0 &&
									this.f.options.canvasInnerHeight > 0 &&
									(this.O = new A(
										this.n.domNode.getContext("2d"),
										this.f.options.canvasInnerWidth,
										this.f.options.canvasInnerHeight,
										this.f.options.backgroundColor,
									))),
							this.O ? this.O.getBuffer() : null
						);
					}
					onDidChangeOptions() {
						(this.J = null),
							(this.O = null),
							this.S(),
							this.h.setClassName(this.R());
					}
					onSelectionChanged() {
						return (this.M = !0), !0;
					}
					onDecorationsChanged() {
						return (this.M = !0), !0;
					}
					onFlushed() {
						return (this.J = null), !0;
					}
					onLinesChanged(F, x) {
						return this.J ? this.J.onLinesChanged(F, x) : !1;
					}
					onLinesDeleted(F, x) {
						return this.J?.onLinesDeleted(F, x), !0;
					}
					onLinesInserted(F, x) {
						return this.J?.onLinesInserted(F, x), !0;
					}
					onScrollChanged() {
						return (this.M = !0), !0;
					}
					onThemeChanged() {
						return (this.L = this.c.getColor(s.$CR)), (this.M = !0), !0;
					}
					onTokensChanged(F) {
						return this.J ? this.J.onTokensChanged(F) : !1;
					}
					onTokensColorsChanged() {
						return (this.J = null), (this.O = null), !0;
					}
					onZonesChanged() {
						return (this.J = null), !0;
					}
					render(F) {
						if (this.f.options.renderMinimap === a.RenderMinimap.None) {
							this.m.setClassName("minimap-shadow-hidden"),
								this.u.setWidth(0),
								this.u.setHeight(0);
							return;
						}
						F.scrollLeft + F.viewportWidth >= F.scrollWidth
							? this.m.setClassName("minimap-shadow-hidden")
							: this.m.setClassName("minimap-shadow-visible");
						const H = D.create(
							this.f.options,
							F.viewportStartLineNumber,
							F.viewportEndLineNumber,
							F.viewportStartLineNumberVerticalOffset,
							F.viewportHeight,
							F.viewportContainsWhitespaceGaps,
							this.f.getLineCount(),
							this.f.getRealLineCount(),
							F.scrollTop,
							F.scrollHeight,
							this.J ? this.J.renderedLayout : null,
						);
						this.t.setDisplay(H.sliderNeeded ? "block" : "none"),
							this.t.setTop(H.sliderTop),
							this.t.setHeight(H.sliderHeight),
							this.u.setLeft(0),
							this.u.setWidth(this.f.options.minimapWidth),
							this.u.setTop(0),
							this.u.setHeight(H.sliderHeight),
							this.W(H),
							(this.J = this.gb(H));
					}
					W(F) {
						if (this.M) {
							this.M = !1;
							const x = this.f.getSelections();
							x.sort(h.$iL.compareRangesUsingStarts);
							const H = this.f.getMinimapDecorationsInViewport(
								F.startLineNumber,
								F.endLineNumber,
							);
							H.sort(
								(ie, ne) => (ie.options.zIndex || 0) - (ne.options.zIndex || 0),
							);
							const { canvasInnerWidth: q, canvasInnerHeight: V } =
									this.f.options,
								G = this.f.options.minimapLineHeight,
								K = this.f.options.minimapCharWidth,
								J = this.f.getOptions().tabSize,
								W = this.q.domNode.getContext("2d");
							W.clearRect(0, 0, q, V);
							const X = new U(F.startLineNumber, F.endLineNumber, !1);
							this.X(W, x, X, F, G), this.Y(W, H, X, F, G);
							const Y = new U(F.startLineNumber, F.endLineNumber, null);
							this.Z(W, x, Y, F, G, J, K, q),
								this.$(W, H, Y, F, G, J, K, q),
								this.db(F);
						}
					}
					X(F, x, H, q, V) {
						if (!this.L || this.L.isTransparent()) return;
						F.fillStyle = this.L.transparent(0.5).toString();
						let G = 0,
							K = 0;
						for (const J of x) {
							const W = q.intersectWithViewport(J);
							if (!W) continue;
							const [X, Y] = W;
							for (let ee = X; ee <= Y; ee++) H.set(ee, !0);
							const ie = q.getYForLineNumber(X, V),
								ne = q.getYForLineNumber(Y, V);
							K >= ie ||
								(K > G &&
									F.fillRect(a.MINIMAP_GUTTER_WIDTH, G, F.canvas.width, K - G),
								(G = ie)),
								(K = ne);
						}
						K > G &&
							F.fillRect(a.MINIMAP_GUTTER_WIDTH, G, F.canvas.width, K - G);
					}
					Y(F, x, H, q, V) {
						const G = new Map();
						for (let K = x.length - 1; K >= 0; K--) {
							const J = x[K],
								W = J.options.minimap;
							if (!W || W.position !== v.MinimapPosition.Inline) continue;
							const X = q.intersectWithViewport(J.range);
							if (!X) continue;
							const [Y, ie] = X,
								ne = W.getColor(this.c.value);
							if (!ne || ne.isTransparent()) continue;
							let ee = G.get(ne.toString());
							ee ||
								((ee = ne.transparent(0.5).toString()),
								G.set(ne.toString(), ee)),
								(F.fillStyle = ee);
							for (let _ = Y; _ <= ie; _++) {
								if (H.has(_)) continue;
								H.set(_, !0);
								const te = q.getYForLineNumber(Y, V);
								F.fillRect(a.MINIMAP_GUTTER_WIDTH, te, F.canvas.width, V);
							}
						}
					}
					Z(F, x, H, q, V, G, K, J) {
						if (!(!this.L || this.L.isTransparent()))
							for (const W of x) {
								const X = q.intersectWithViewport(W);
								if (!X) continue;
								const [Y, ie] = X;
								for (let ne = Y; ne <= ie; ne++)
									this.ab(F, H, W, this.L, q, ne, V, V, G, K, J);
							}
					}
					$(F, x, H, q, V, G, K, J) {
						for (const W of x) {
							const X = W.options.minimap;
							if (!X) continue;
							const Y = q.intersectWithViewport(W.range);
							if (!Y) continue;
							const [ie, ne] = Y,
								ee = X.getColor(this.c.value);
							if (!(!ee || ee.isTransparent()))
								for (let _ = ie; _ <= ne; _++)
									switch (X.position) {
										case v.MinimapPosition.Inline:
											this.ab(F, H, W.range, ee, q, _, V, V, G, K, J);
											continue;
										case v.MinimapPosition.Gutter: {
											const te = q.getYForLineNumber(_, V);
											this.cb(F, ee, 2, te, k, V);
											continue;
										}
									}
						}
					}
					ab(F, x, H, q, V, G, K, J, W, X, Y) {
						const ie = V.getYForLineNumber(G, J);
						if (ie + K < 0 || ie > this.f.options.canvasInnerHeight) return;
						const { startLineNumber: ne, endLineNumber: ee } = H,
							_ = ne === G ? H.startColumn : 1,
							te = ee === G ? H.endColumn : this.f.getLineMaxColumn(G),
							Q = this.bb(x, G, _, W, X, Y),
							Z = this.bb(x, G, te, W, X, Y);
						this.cb(F, q, Q, ie, Z - Q, K);
					}
					bb(F, x, H, q, V, G) {
						if (H === 1) return a.MINIMAP_GUTTER_WIDTH;
						if ((H - 1) * V >= G) return G;
						let J = F.get(x);
						if (!J) {
							const W = this.f.getLineContent(x);
							J = [a.MINIMAP_GUTTER_WIDTH];
							let X = a.MINIMAP_GUTTER_WIDTH;
							for (let Y = 1; Y < W.length + 1; Y++) {
								const ie = W.charCodeAt(Y - 1),
									ne = ie === E.CharCode.Tab ? q * V : m.$5f(ie) ? 2 * V : V,
									ee = X + ne;
								if (ee >= G) {
									J[Y] = G;
									break;
								}
								(J[Y] = ee), (X = ee);
							}
							F.set(x, J);
						}
						return H - 1 < J.length ? J[H - 1] : G;
					}
					cb(F, x, H, q, V, G) {
						(F.fillStyle = (x && x.toString()) || ""), F.fillRect(H, q, V, G);
					}
					db(F) {
						const x = this.f.options.minimapLineHeight,
							H = this.f.options.sectionHeaderFontSize,
							q = this.f.options.sectionHeaderLetterSpacing,
							V = H * 1.5,
							{ canvasInnerWidth: G } = this.f.options,
							K = this.f.options.backgroundColor,
							J = `rgb(${K.r} ${K.g} ${K.b} / .7)`,
							W = this.f.options.sectionHeaderFontColor,
							X = `rgb(${W.r} ${W.g} ${W.b})`,
							Y = X,
							ie = this.q.domNode.getContext("2d");
						(ie.letterSpacing = q + "px"),
							(ie.font =
								"500 " + H + "px " + this.f.options.sectionHeaderFontFamily),
							(ie.strokeStyle = Y),
							(ie.lineWidth = 0.2);
						const ne = this.f.getSectionHeaderDecorationsInViewport(
							F.startLineNumber,
							F.endLineNumber,
						);
						ne.sort(
							(_, te) => _.range.startLineNumber - te.range.startLineNumber,
						);
						const ee = B.eb.bind(null, ie, G - a.MINIMAP_GUTTER_WIDTH);
						for (const _ of ne) {
							const te = F.getYForLineNumber(_.range.startLineNumber, x) + H,
								Q = te - H,
								Z = Q + 2,
								se = this.f.getSectionHeaderText(_, ee);
							B.fb(
								ie,
								se,
								_.options.minimap?.sectionHeaderStyle ===
									v.MinimapSectionHeaderStyle.Underlined,
								J,
								X,
								G,
								Q,
								V,
								te,
								Z,
							);
						}
					}
					static eb(F, x, H) {
						if (!H) return H;
						const q = "\u2026",
							V = F.measureText(H).width,
							G = F.measureText(q).width;
						if (V <= x || V <= G) return H;
						const K = H.length,
							J = V / H.length,
							W = Math.floor((x - G) / J) - 1;
						let X = Math.ceil(W / 2);
						for (; X > 0 && /\s/.test(H[X - 1]); ) --X;
						return H.substring(0, X) + q + H.substring(K - (W - X));
					}
					static fb(F, x, H, q, V, G, K, J, W, X) {
						x &&
							((F.fillStyle = q),
							F.fillRect(0, K, G, J),
							(F.fillStyle = V),
							F.fillText(x, a.MINIMAP_GUTTER_WIDTH, W)),
							H &&
								(F.beginPath(),
								F.moveTo(0, X),
								F.lineTo(G, X),
								F.closePath(),
								F.stroke());
					}
					gb(F) {
						const x = F.startLineNumber,
							H = F.endLineNumber,
							q = this.f.options.minimapLineHeight;
						if (this.J && this.J.linesEquals(F)) {
							const ge = this.J._get();
							return new N(F, ge.imageData, ge.lines);
						}
						const V = this.U();
						if (!V) return null;
						const [G, K, J] = B.hb(V, F.topPaddingLineCount, x, H, q, this.J),
							W = this.f.getMinimapLinesRenderingData(x, H, J),
							X = this.f.getOptions().tabSize,
							Y = this.f.options.defaultBackgroundColor,
							ie = this.f.options.backgroundColor,
							ne = this.f.options.foregroundAlpha,
							ee = this.f.tokensColorTracker,
							_ = ee.backgroundIsLight(),
							te = this.f.options.renderMinimap,
							Q = this.f.options.charRenderer(),
							Z = this.f.options.fontScale,
							se = this.f.options.minimapCharWidth,
							le =
								(te === a.RenderMinimap.Text
									? p.Constants.BASE_CHAR_HEIGHT
									: p.Constants.BASE_CHAR_HEIGHT + 1) * Z,
							oe = q > le ? Math.floor((q - le) / 2) : 0,
							ae = ie.a / 255,
							pe = new c.$xvb(
								Math.round((ie.r - Y.r) * ae + Y.r),
								Math.round((ie.g - Y.g) * ae + Y.g),
								Math.round((ie.b - Y.b) * ae + Y.b),
								255,
							);
						let $e = F.topPaddingLineCount * q;
						const ye = [];
						for (let ge = 0, be = H - x + 1; ge < be; ge++)
							J[ge] &&
								B.ib(V, pe, ie.a, _, te, se, ee, ne, Q, $e, oe, X, W[ge], Z, q),
								(ye[ge] = new M($e)),
								($e += q);
						const ue = G === -1 ? 0 : G,
							me = (K === -1 ? V.height : K) - ue;
						return (
							this.n.domNode
								.getContext("2d")
								.putImageData(V, 0, 0, 0, ue, V.width, me),
							new N(F, V, ye)
						);
					}
					static hb(F, x, H, q, V, G) {
						const K = [];
						if (!G) {
							for (let $e = 0, ye = q - H + 1; $e < ye; $e++) K[$e] = !0;
							return [-1, -1, K];
						}
						const J = G._get(),
							W = J.imageData.data,
							X = J.rendLineNumberStart,
							Y = J.lines,
							ie = Y.length,
							ne = F.width,
							ee = F.data,
							_ = (q - H + 1) * V * ne * 4;
						let te = -1,
							Q = -1,
							Z = -1,
							se = -1,
							re = -1,
							le = -1,
							oe = x * V;
						for (let $e = H; $e <= q; $e++) {
							const ye = $e - H,
								ue = $e - X,
								fe = ue >= 0 && ue < ie ? Y[ue].dy : -1;
							if (fe === -1) {
								(K[ye] = !0), (oe += V);
								continue;
							}
							const me = fe * ne * 4,
								ve = (fe + V) * ne * 4,
								ge = oe * ne * 4,
								be = (oe + V) * ne * 4;
							se === me && le === ge
								? ((se = ve), (le = be))
								: (Z !== -1 &&
										(ee.set(W.subarray(Z, se), re),
										te === -1 && Z === 0 && Z === re && (te = se),
										Q === -1 && se === _ && Z === re && (Q = Z)),
									(Z = me),
									(se = ve),
									(re = ge),
									(le = be)),
								(K[ye] = !1),
								(oe += V);
						}
						Z !== -1 &&
							(ee.set(W.subarray(Z, se), re),
							te === -1 && Z === 0 && Z === re && (te = se),
							Q === -1 && se === _ && Z === re && (Q = Z));
						const ae = te === -1 ? -1 : te / (ne * 4),
							pe = Q === -1 ? -1 : Q / (ne * 4);
						return [ae, pe, K];
					}
					static ib(F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee, _) {
						const te = ne.content,
							Q = ne.tokens,
							Z = F.width - G,
							se = _ === 1;
						let re = a.MINIMAP_GUTTER_WIDTH,
							le = 0,
							oe = 0;
						for (let ae = 0, pe = Q.getCount(); ae < pe; ae++) {
							const $e = Q.getEndOffset(ae),
								ye = Q.getForeground(ae),
								ue = K.getColor(ye);
							for (; le < $e; le++) {
								if (re > Z) return;
								const fe = te.charCodeAt(le);
								if (fe === E.CharCode.Tab) {
									const me = ie - ((le + oe) % ie);
									(oe += me - 1), (re += me * G);
								} else if (fe === E.CharCode.Space) re += G;
								else {
									const me = m.$5f(fe) ? 2 : 1;
									for (let ve = 0; ve < me; ve++)
										if (
											(V === a.RenderMinimap.Blocks
												? W.blockRenderChar(F, re, X + Y, ue, J, x, H, se)
												: W.renderChar(
														F,
														re,
														X + Y,
														fe,
														ue,
														J,
														x,
														H,
														ee,
														q,
														se,
													),
											(re += G),
											re > Z)
										)
											return;
								}
							}
						}
					}
				}
				class U {
					constructor(F, x, H) {
						(this.c = F), (this.d = x), (this.f = H), (this.h = []);
						for (let q = 0, V = this.d - this.c + 1; q < V; q++) this.h[q] = H;
					}
					has(F) {
						return this.get(F) !== this.f;
					}
					set(F, x) {
						F < this.c || F > this.d || (this.h[F - this.c] = x);
					}
					get(F) {
						return F < this.c || F > this.d ? this.f : this.h[F - this.c];
					}
				}
			},
		)
