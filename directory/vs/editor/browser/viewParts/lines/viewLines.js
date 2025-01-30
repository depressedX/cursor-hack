import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/mouseCursor/mouseCursor.js';
import '../../../../base/common/async.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uint.js';
import '../../config/domFontInfo.js';
import '../../view/renderingContext.js';
import '../../view/viewLayer.js';
import '../../view/viewPart.js';
import './domReadingContext.js';
import './viewLine.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/viewEvents.js';
import '../../../../css!vs/editor/browser/viewParts/lines/viewLines.js';
define(
			de[2841],
			he([
				1, 0, 651, 15, 12, 210, 321, 746, 1183, 303, 2543, 1208, 38, 48, 17, 98,
				493, 2268,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*mouseCursor*/,
 i /*async*/,
 w /*platform*/,
 E /*uint*/,
 C /*domFontInfo*/,
 d /*renderingContext*/,
 m /*viewLayer*/,
 r /*viewPart*/,
 u /*domReadingContext*/,
 a /*viewLine*/,
 h /*editorOptions*/,
 c /*position*/,
 n /*range*/,
 g /*editorCommon*/,
 p /*viewEvents*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uvb = void 0),
					(w = mt(w)),
					(p = mt(p));
				class o {
					constructor() {
						this.a = new n.$iL(1, 1, 1, 1);
					}
					getCurrentVisibleRange() {
						return this.a;
					}
					setCurrentVisibleRange(y) {
						this.a = y;
					}
				}
				class f {
					constructor(y, $, v, S, I, T, P) {
						(this.minimalReveal = y),
							(this.lineNumber = $),
							(this.startColumn = v),
							(this.endColumn = S),
							(this.startScrollTop = I),
							(this.stopScrollTop = T),
							(this.scrollType = P),
							(this.type = "range"),
							(this.minLineNumber = $),
							(this.maxLineNumber = $);
					}
				}
				class b {
					constructor(y, $, v, S, I) {
						(this.minimalReveal = y),
							(this.selections = $),
							(this.startScrollTop = v),
							(this.stopScrollTop = S),
							(this.scrollType = I),
							(this.type = "selections");
						let T = $[0].startLineNumber,
							P = $[0].endLineNumber;
						for (let k = 1, L = $.length; k < L; k++) {
							const D = $[k];
							(T = Math.min(T, D.startLineNumber)),
								(P = Math.max(P, D.endLineNumber));
						}
						(this.minLineNumber = T), (this.maxLineNumber = P);
					}
				}
				class s extends r.$yub {
					static {
						this.a = 30;
					}
					constructor(y, $) {
						super(y);
						const v = this._context.configuration,
							S = this._context.configuration.options,
							I = S.get(h.EditorOption.fontInfo),
							T = S.get(h.EditorOption.wrappingInfo);
						(this.m = S.get(h.EditorOption.lineHeight)),
							(this.n = I.typicalHalfwidthCharacterWidth),
							(this.q = T.isViewportWrapping),
							(this.s = S.get(h.EditorOption.revealHorizontalRightPadding)),
							(this.t = S.get(h.EditorOption.cursorSurroundingLines)),
							(this.u = S.get(h.EditorOption.cursorSurroundingLinesStyle)),
							(this.w = !S.get(h.EditorOption.disableLayerHinting)),
							(this.y = new a.$Qub(v, this._context.theme.type)),
							(this.b = $),
							(this.c = document.createElement("div")),
							(this.g = new m.$Bub({ createLine: () => new a.$Rub(this.y) })),
							(this.j = this.g.domNode),
							r.$zub.write(this.j, r.PartFingerprint.ViewLines),
							this.j.setClassName(`view-lines ${t.$0ob}`),
							(0, C.$jsb)(this.j, I),
							(this.z = 0),
							(this.C = new i.$Yh(() => {
								this.Q();
							}, 200)),
							(this.F = new i.$Yh(() => {
								this.U();
							}, 2e3)),
							(this.H = new o()),
							(this.G = null),
							(this.I = S.get(h.EditorOption.stickyScroll).enabled),
							(this.J = S.get(h.EditorOption.stickyScroll).maxLineCount);
					}
					dispose() {
						this.C.dispose(), this.F.dispose(), super.dispose();
					}
					getDomNode() {
						return this.j;
					}
					onConfigurationChanged(y) {
						this.g.onConfigurationChanged(y),
							y.hasChanged(h.EditorOption.wrappingInfo) && (this.z = 0);
						const $ = this._context.configuration.options,
							v = $.get(h.EditorOption.fontInfo),
							S = $.get(h.EditorOption.wrappingInfo);
						return (
							(this.m = $.get(h.EditorOption.lineHeight)),
							(this.n = v.typicalHalfwidthCharacterWidth),
							(this.q = S.isViewportWrapping),
							(this.s = $.get(h.EditorOption.revealHorizontalRightPadding)),
							(this.t = $.get(h.EditorOption.cursorSurroundingLines)),
							(this.u = $.get(h.EditorOption.cursorSurroundingLinesStyle)),
							(this.w = !$.get(h.EditorOption.disableLayerHinting)),
							(this.I = $.get(h.EditorOption.stickyScroll).enabled),
							(this.J = $.get(h.EditorOption.stickyScroll).maxLineCount),
							(0, C.$jsb)(this.j, v),
							this.L(),
							y.hasChanged(h.EditorOption.layoutInfo) && (this.z = 0),
							!0
						);
					}
					L() {
						const y = this._context.configuration,
							$ = new a.$Qub(y, this._context.theme.type);
						if (!this.y.equals($)) {
							this.y = $;
							const v = this.g.getStartLineNumber(),
								S = this.g.getEndLineNumber();
							for (let I = v; I <= S; I++)
								this.g.getVisibleLine(I).onOptionsChanged(this.y);
							return !0;
						}
						return !1;
					}
					onCursorStateChanged(y) {
						const $ = this.g.getStartLineNumber(),
							v = this.g.getEndLineNumber();
						let S = !1;
						for (let I = $; I <= v; I++)
							S = this.g.getVisibleLine(I).onSelectionChanged() || S;
						return S;
					}
					onDecorationsChanged(y) {
						{
							const $ = this.g.getStartLineNumber(),
								v = this.g.getEndLineNumber();
							for (let S = $; S <= v; S++)
								this.g.getVisibleLine(S).onDecorationsChanged();
						}
						return !0;
					}
					onFlushed(y) {
						const $ = this.g.onFlushed(y);
						return (this.z = 0), $;
					}
					onLinesChanged(y) {
						return this.g.onLinesChanged(y);
					}
					onLinesDeleted(y) {
						return this.g.onLinesDeleted(y);
					}
					onLinesInserted(y) {
						return this.g.onLinesInserted(y);
					}
					onRevealRangeRequest(y) {
						const $ = this.X(
							this._context.viewLayout.getFutureViewport(),
							y.source,
							y.minimalReveal,
							y.range,
							y.selections,
							y.verticalType,
						);
						if ($ === -1) return !1;
						let v = this._context.viewLayout.validateScrollPosition({
							scrollTop: $,
						});
						y.revealHorizontal
							? y.range && y.range.startLineNumber !== y.range.endLineNumber
								? (v = { scrollTop: v.scrollTop, scrollLeft: 0 })
								: y.range
									? (this.G = new f(
											y.minimalReveal,
											y.range.startLineNumber,
											y.range.startColumn,
											y.range.endColumn,
											this._context.viewLayout.getCurrentScrollTop(),
											v.scrollTop,
											y.scrollType,
										))
									: y.selections &&
										y.selections.length > 0 &&
										(this.G = new b(
											y.minimalReveal,
											y.selections,
											this._context.viewLayout.getCurrentScrollTop(),
											v.scrollTop,
											y.scrollType,
										))
							: (this.G = null);
						const I =
							Math.abs(
								this._context.viewLayout.getCurrentScrollTop() - v.scrollTop,
							) <= this.m
								? g.ScrollType.Immediate
								: y.scrollType;
						return (
							this._context.viewModel.viewLayout.setScrollPosition(v, I), !0
						);
					}
					onScrollChanged(y) {
						if (
							(this.G && y.scrollLeftChanged && (this.G = null),
							this.G && y.scrollTopChanged)
						) {
							const $ = Math.min(this.G.startScrollTop, this.G.stopScrollTop),
								v = Math.max(this.G.startScrollTop, this.G.stopScrollTop);
							(y.scrollTop < $ || y.scrollTop > v) && (this.G = null);
						}
						return (
							this.j.setWidth(y.scrollWidth), this.g.onScrollChanged(y) || !0
						);
					}
					onTokensChanged(y) {
						return this.g.onTokensChanged(y);
					}
					onZonesChanged(y) {
						return (
							this._context.viewModel.viewLayout.setMaxLineWidth(this.z),
							this.g.onZonesChanged(y)
						);
					}
					onThemeChanged(y) {
						return this.L();
					}
					getPositionFromDOMInfo(y, $) {
						const v = this.M(y);
						if (v === null) return null;
						const S = this.N(v);
						if (S === -1 || S < 1 || S > this._context.viewModel.getLineCount())
							return null;
						if (this._context.viewModel.getLineMaxColumn(S) === 1)
							return new c.$hL(S, 1);
						const I = this.g.getStartLineNumber(),
							T = this.g.getEndLineNumber();
						if (S < I || S > T) return null;
						let P = this.g.getVisibleLine(S).getColumnOfNodeOffset(y, $);
						const k = this._context.viewModel.getLineMinColumn(S);
						return P < k && (P = k), new c.$hL(S, P);
					}
					M(y) {
						for (; y && y.nodeType === 1; ) {
							if (y.className === a.$Rub.CLASS_NAME) return y;
							y = y.parentElement;
						}
						return null;
					}
					N(y) {
						const $ = this.g.getStartLineNumber(),
							v = this.g.getEndLineNumber();
						for (let S = $; S <= v; S++) {
							const I = this.g.getVisibleLine(S);
							if (y === I.getDomNode()) return S;
						}
						return -1;
					}
					getLineWidth(y) {
						const $ = this.g.getStartLineNumber(),
							v = this.g.getEndLineNumber();
						if (y < $ || y > v) return -1;
						const S = new u.$Cub(this.j.domNode, this.c),
							I = this.g.getVisibleLine(y).getWidth(S);
						return this.R(S), I;
					}
					linesVisibleRangesForRange(y, $) {
						if (this.shouldRender()) return null;
						const v = y.endLineNumber,
							S = n.$iL.intersectRanges(y, this.H.getCurrentVisibleRange());
						if (!S) return null;
						const I = [];
						let T = 0;
						const P = new u.$Cub(this.j.domNode, this.c);
						let k = 0;
						$ &&
							(k =
								this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
									new c.$hL(S.startLineNumber, 1),
								).lineNumber);
						const L = this.g.getStartLineNumber(),
							D = this.g.getEndLineNumber();
						for (let M = S.startLineNumber; M <= S.endLineNumber; M++) {
							if (M < L || M > D) continue;
							const N = M === S.startLineNumber ? S.startColumn : 1,
								A = M !== S.endLineNumber,
								R = A
									? this._context.viewModel.getLineMaxColumn(M)
									: S.endColumn,
								O = this.g
									.getVisibleLine(M)
									.getVisibleRangesForRange(M, N, R, P);
							if (O) {
								if ($ && M < v) {
									const B = k;
									(k =
										this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
											new c.$hL(M + 1, 1),
										).lineNumber),
										B !== k && (O.ranges[O.ranges.length - 1].width += this.n);
								}
								I[T++] = new d.$sub(
									O.outsideRenderedLine,
									M,
									d.$tub.from(O.ranges),
									A,
								);
							}
						}
						return this.R(P), T === 0 ? null : I;
					}
					O(y, $, v) {
						if (
							this.shouldRender() ||
							y < this.g.getStartLineNumber() ||
							y > this.g.getEndLineNumber()
						)
							return null;
						const S = new u.$Cub(this.j.domNode, this.c),
							I = this.g.getVisibleLine(y).getVisibleRangesForRange(y, $, v, S);
						return this.R(S), I;
					}
					visibleRangeForPosition(y) {
						const $ = this.O(y.lineNumber, y.column, y.column);
						return $
							? new d.$vub($.outsideRenderedLine, $.ranges[0].left)
							: null;
					}
					updateLineWidths() {
						this.S(!1);
					}
					P() {
						return this.S(!0);
					}
					Q() {
						this.S(!1);
					}
					R(y) {
						y.didDomLayout &&
							(this.C.isScheduled() || (this.C.cancel(), this.Q()));
					}
					S(y) {
						const $ = this.g.getStartLineNumber(),
							v = this.g.getEndLineNumber();
						let S = 1,
							I = !0;
						for (let T = $; T <= v; T++) {
							const P = this.g.getVisibleLine(T);
							if (y && !P.getWidthIsFast()) {
								I = !1;
								continue;
							}
							S = Math.max(S, P.getWidth(null));
						}
						return (
							I &&
								$ === 1 &&
								v === this._context.viewModel.getLineCount() &&
								(this.z = 0),
							this.W(S),
							I
						);
					}
					U() {
						let y = -1,
							$ = -1;
						const v = this.g.getStartLineNumber(),
							S = this.g.getEndLineNumber();
						for (let I = v; I <= S; I++) {
							const T = this.g.getVisibleLine(I);
							if (T.needsMonospaceFontCheck()) {
								const P = T.getWidth(null);
								P > $ && (($ = P), (y = I));
							}
						}
						if (
							y !== -1 &&
							!this.g.getVisibleLine(y).monospaceAssumptionsAreValid()
						)
							for (let I = v; I <= S; I++)
								this.g.getVisibleLine(I).onMonospaceAssumptionsInvalidated();
					}
					prepareRender() {
						throw new Error("Not supported");
					}
					render() {
						throw new Error("Not supported");
					}
					renderText(y) {
						if (
							(this.g.renderLines(y),
							this.H.setCurrentVisibleRange(y.visibleRange),
							this.j.setWidth(this._context.viewLayout.getScrollWidth()),
							this.j.setHeight(
								Math.min(this._context.viewLayout.getScrollHeight(), 1e6),
							),
							this.G)
						) {
							const v = this.G;
							if (
								y.startLineNumber <= v.minLineNumber &&
								v.maxLineNumber <= y.endLineNumber
							) {
								(this.G = null), this.onDidRender();
								const S = this.Y(v);
								S &&
									(this.q || this.W(S.maxHorizontalOffset),
									this._context.viewModel.viewLayout.setScrollPosition(
										{ scrollLeft: S.scrollLeft },
										v.scrollType,
									));
							}
						}
						if (
							(this.P() ? this.C.cancel() : this.C.schedule(),
							w.$n && !this.F.isScheduled())
						) {
							const v = this.g.getStartLineNumber(),
								S = this.g.getEndLineNumber();
							for (let I = v; I <= S; I++)
								if (this.g.getVisibleLine(I).needsMonospaceFontCheck()) {
									this.F.schedule();
									break;
								}
						}
						this.b.setLayerHinting(this.w), this.b.setContain("strict");
						const $ =
							this._context.viewLayout.getCurrentScrollTop() -
							y.bigNumbersDelta;
						this.b.setTop(-$),
							this.b.setLeft(-this._context.viewLayout.getCurrentScrollLeft());
					}
					W(y) {
						const $ = Math.ceil(y);
						this.z < $ &&
							((this.z = $),
							this._context.viewModel.viewLayout.setMaxLineWidth(this.z));
					}
					X(y, $, v, S, I, T) {
						const P = y.top,
							k = y.height,
							L = P + k;
						let D, M, N;
						if (I && I.length > 0) {
							let U = I[0].startLineNumber,
								z = I[0].endLineNumber;
							for (let F = 1, x = I.length; F < x; F++) {
								const H = I[F];
								(U = Math.min(U, H.startLineNumber)),
									(z = Math.max(z, H.endLineNumber));
							}
							(D = !1),
								(M =
									this._context.viewLayout.getVerticalOffsetForLineNumber(U)),
								(N =
									this._context.viewLayout.getVerticalOffsetForLineNumber(z) +
									this.m);
						} else if (S)
							(D = !0),
								(M = this._context.viewLayout.getVerticalOffsetForLineNumber(
									S.startLineNumber,
								)),
								(N =
									this._context.viewLayout.getVerticalOffsetForLineNumber(
										S.endLineNumber,
									) + this.m);
						else return -1;
						const A = ($ === "mouse" || v) && this.u === "default";
						let R = 0,
							O = 0;
						if (A) v || (R = this.m);
						else {
							const U = k / this.m,
								z = Math.max(this.t, this.I ? this.J : 0),
								F = Math.min(U / 2, z);
							(R = F * this.m), (O = Math.max(0, F - 1) * this.m);
						}
						v ||
							((T === p.VerticalRevealType.Simple ||
								T === p.VerticalRevealType.Bottom) &&
								(O += this.m)),
							(M -= R),
							(N += O);
						let B;
						if (N - M > k) {
							if (!D) return -1;
							B = M;
						} else if (
							T === p.VerticalRevealType.NearTop ||
							T === p.VerticalRevealType.NearTopIfOutsideViewport
						)
							if (
								T === p.VerticalRevealType.NearTopIfOutsideViewport &&
								P <= M &&
								N <= L
							)
								B = P;
							else {
								const U = Math.max(5 * this.m, k * 0.2),
									z = M - U,
									F = N - k;
								B = Math.max(F, z);
							}
						else if (
							T === p.VerticalRevealType.Center ||
							T === p.VerticalRevealType.CenterIfOutsideViewport
						)
							if (
								T === p.VerticalRevealType.CenterIfOutsideViewport &&
								P <= M &&
								N <= L
							)
								B = P;
							else {
								const U = (M + N) / 2;
								B = Math.max(0, U - k / 2);
							}
						else
							B = this.Z(
								P,
								L,
								M,
								N,
								T === p.VerticalRevealType.Top,
								T === p.VerticalRevealType.Bottom,
							);
						return B;
					}
					Y(y) {
						const $ = this._context.viewLayout.getCurrentViewport(),
							v = this._context.configuration.options.get(
								h.EditorOption.layoutInfo,
							),
							S = $.left,
							I = S + $.width - v.verticalScrollbarWidth;
						let T = E.Constants.MAX_SAFE_SMALL_INTEGER,
							P = 0;
						if (y.type === "range") {
							const L = this.O(y.lineNumber, y.startColumn, y.endColumn);
							if (!L) return null;
							for (const D of L.ranges)
								(T = Math.min(T, Math.round(D.left))),
									(P = Math.max(P, Math.round(D.left + D.width)));
						} else
							for (const L of y.selections) {
								if (L.startLineNumber !== L.endLineNumber) return null;
								const D = this.O(L.startLineNumber, L.startColumn, L.endColumn);
								if (!D) return null;
								for (const M of D.ranges)
									(T = Math.min(T, Math.round(M.left))),
										(P = Math.max(P, Math.round(M.left + M.width)));
							}
						return (
							y.minimalReveal || ((T = Math.max(0, T - s.a)), (P += this.s)),
							y.type === "selections" && P - T > $.width
								? null
								: { scrollLeft: this.Z(S, I, T, P), maxHorizontalOffset: P }
						);
					}
					Z(y, $, v, S, I, T) {
						(y = y | 0),
							($ = $ | 0),
							(v = v | 0),
							(S = S | 0),
							(I = !!I),
							(T = !!T);
						const P = $ - y;
						if (S - v < P) {
							if (I) return v;
							if (T) return Math.max(0, S - P);
							if (v < y) return v;
							if (S > $) return Math.max(0, S - P);
						} else return v;
						return y;
					}
				}
				e.$uvb = s;
			},
		),
		