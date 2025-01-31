import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/common/platform.js';
import './rangeUtil.js';
import '../../view/renderingContext.js';
import '../../../common/viewLayout/lineDecorations.js';
import '../../../common/viewLayout/viewLineRenderer.js';
import '../../../common/viewModel.js';
import '../../../../platform/theme/common/theme.js';
import '../../../common/config/editorOptions.js';
define(
			de[1208],
			he([1, 0, 139, 194, 12, 2544, 746, 533, 598, 290, 212, 38]),
			function (ce /*require*/,
 e /*exports*/,
 t /*browser*/,
 i /*fastDomNode*/,
 w /*platform*/,
 E /*rangeUtil*/,
 C /*renderingContext*/,
 d /*lineDecorations*/,
 m /*viewLineRenderer*/,
 r /*viewModel*/,
 u /*theme*/,
 a /*editorOptions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rub = e.$Qub = void 0),
					(e.$Sub = $),
					(t = mt(t)),
					(w = mt(w));
				const h = (function () {
					return w.$p ? !0 : !(w.$n || t.$Ofb || t.$Rfb);
				})();
				let c = !0;
				class n {
					constructor(S, I) {
						this.themeType = I;
						const T = S.options,
							P = T.get(a.EditorOption.fontInfo);
						T.get(a.EditorOption.experimentalWhitespaceRendering) === "off"
							? (this.renderWhitespace = T.get(a.EditorOption.renderWhitespace))
							: (this.renderWhitespace = "none"),
							(this.renderControlCharacters = T.get(
								a.EditorOption.renderControlCharacters,
							)),
							(this.spaceWidth = P.spaceWidth),
							(this.middotWidth = P.middotWidth),
							(this.wsmiddotWidth = P.wsmiddotWidth),
							(this.useMonospaceOptimizations =
								P.isMonospace &&
								!T.get(a.EditorOption.disableMonospaceOptimizations)),
							(this.canUseHalfwidthRightwardsArrow =
								P.canUseHalfwidthRightwardsArrow),
							(this.lineHeight = T.get(a.EditorOption.lineHeight)),
							(this.stopRenderingLineAfter = T.get(
								a.EditorOption.stopRenderingLineAfter,
							)),
							(this.fontLigatures = T.get(a.EditorOption.fontLigatures));
					}
					equals(S) {
						return (
							this.themeType === S.themeType &&
							this.renderWhitespace === S.renderWhitespace &&
							this.renderControlCharacters === S.renderControlCharacters &&
							this.spaceWidth === S.spaceWidth &&
							this.middotWidth === S.middotWidth &&
							this.wsmiddotWidth === S.wsmiddotWidth &&
							this.useMonospaceOptimizations === S.useMonospaceOptimizations &&
							this.canUseHalfwidthRightwardsArrow ===
								S.canUseHalfwidthRightwardsArrow &&
							this.lineHeight === S.lineHeight &&
							this.stopRenderingLineAfter === S.stopRenderingLineAfter &&
							this.fontLigatures === S.fontLigatures
						);
					}
				}
				e.$Qub = n;
				class g {
					static {
						this.CLASS_NAME = "view-line";
					}
					constructor(S) {
						(this.a = S), (this.b = !0), (this.c = null);
					}
					getDomNode() {
						return this.c && this.c.domNode ? this.c.domNode.domNode : null;
					}
					setDomNode(S) {
						if (this.c) this.c.domNode = (0, i.$Shb)(S);
						else
							throw new Error(
								"I have no rendered view line to set the dom node to...",
							);
					}
					onContentChanged() {
						this.b = !0;
					}
					onTokensChanged() {
						this.b = !0;
					}
					onDecorationsChanged() {
						this.b = !0;
					}
					onOptionsChanged(S) {
						(this.b = !0), (this.a = S);
					}
					onSelectionChanged() {
						return (0, u.$gP)(this.a.themeType) ||
							this.a.renderWhitespace === "selection"
							? ((this.b = !0), !0)
							: !1;
					}
					renderLine(S, I, T, P, k) {
						if (this.b === !1) return !1;
						this.b = !1;
						const L = P.getViewLineRenderingData(S),
							D = this.a,
							M = d.$Fub.filter(
								L.inlineDecorations,
								S,
								L.minColumn,
								L.maxColumn,
							);
						let N = null;
						if (
							(0, u.$gP)(D.themeType) ||
							this.a.renderWhitespace === "selection"
						) {
							const B = P.selections;
							for (const U of B) {
								if (U.endLineNumber < S || U.startLineNumber > S) continue;
								const z = U.startLineNumber === S ? U.startColumn : L.minColumn,
									F = U.endLineNumber === S ? U.endColumn : L.maxColumn;
								z < F &&
									((0, u.$gP)(D.themeType) &&
										M.push(
											new d.$Fub(
												z,
												F,
												"inline-selected-text",
												r.InlineDecorationType.Regular,
											),
										),
									this.a.renderWhitespace === "selection" &&
										(N || (N = []), N.push(new m.$Iub(z - 1, F - 1))));
							}
						}
						const A = new m.$Jub(
							D.useMonospaceOptimizations,
							D.canUseHalfwidthRightwardsArrow,
							L.content,
							L.continuesWithWrappedLine,
							L.isBasicASCII,
							L.containsRTL,
							L.minColumn - 1,
							L.tokens,
							M,
							L.tabSize,
							L.startVisibleColumn,
							D.spaceWidth,
							D.middotWidth,
							D.wsmiddotWidth,
							D.stopRenderingLineAfter,
							D.renderWhitespace,
							D.renderControlCharacters,
							D.fontLigatures !== a.EditorFontLigatures.OFF,
							N,
						);
						if (this.c && this.c.input.equals(A)) return !1;
						k.appendString('<div style="top:'),
							k.appendString(String(I)),
							k.appendString("px;height:"),
							k.appendString(String(T)),
							k.appendString('px;" class="'),
							k.appendString(g.CLASS_NAME),
							k.appendString('">');
						const R = (0, m.$Nub)(A, k);
						k.appendString("</div>");
						let O = null;
						return (
							c &&
								h &&
								L.isBasicASCII &&
								D.useMonospaceOptimizations &&
								R.containsForeignElements === m.ForeignElementType.None &&
								(O = new o(
									this.c ? this.c.domNode : null,
									A,
									R.characterMapping,
								)),
							O ||
								(O = s(
									this.c ? this.c.domNode : null,
									A,
									R.characterMapping,
									R.containsRTL,
									R.containsForeignElements,
								)),
							(this.c = O),
							!0
						);
					}
					layoutLine(S, I, T) {
						this.c &&
							this.c.domNode &&
							(this.c.domNode.setTop(I), this.c.domNode.setHeight(T));
					}
					getWidth(S) {
						return this.c ? this.c.getWidth(S) : 0;
					}
					getWidthIsFast() {
						return this.c ? this.c.getWidthIsFast() : !0;
					}
					needsMonospaceFontCheck() {
						return this.c ? this.c instanceof o : !1;
					}
					monospaceAssumptionsAreValid() {
						return this.c && this.c instanceof o
							? this.c.monospaceAssumptionsAreValid()
							: c;
					}
					onMonospaceAssumptionsInvalidated() {
						this.c &&
							this.c instanceof o &&
							(this.c = this.c.toSlowRenderedLine());
					}
					getVisibleRangesForRange(S, I, T, P) {
						if (!this.c) return null;
						(I = Math.min(this.c.input.lineContent.length + 1, Math.max(1, I))),
							(T = Math.min(
								this.c.input.lineContent.length + 1,
								Math.max(1, T),
							));
						const k = this.c.input.stopRenderingLineAfter;
						if (k !== -1 && I > k + 1 && T > k + 1)
							return new C.$wub(!0, [new C.$uub(this.getWidth(P), 0)]);
						k !== -1 && I > k + 1 && (I = k + 1),
							k !== -1 && T > k + 1 && (T = k + 1);
						const L = this.c.getVisibleRangesForRange(S, I, T, P);
						return L && L.length > 0 ? new C.$wub(!1, L) : null;
					}
					getColumnOfNodeOffset(S, I) {
						return this.c ? this.c.getColumnOfNodeOffset(S, I) : 1;
					}
				}
				e.$Rub = g;
				var p;
				(function (v) {
					v[(v.MaxMonospaceDistance = 300)] = "MaxMonospaceDistance";
				})(p || (p = {}));
				class o {
					constructor(S, I, T) {
						(this.d = -1), (this.domNode = S), (this.input = I);
						const P = Math.floor(I.lineContent.length / p.MaxMonospaceDistance);
						if (P > 0) {
							this.c = new Float32Array(P);
							for (let k = 0; k < P; k++) this.c[k] = -1;
						} else this.c = null;
						(this.a = T), (this.b = I.spaceWidth);
					}
					getWidth(S) {
						if (
							!this.domNode ||
							this.input.lineContent.length < p.MaxMonospaceDistance
						) {
							const I = this.a.getHorizontalOffset(this.a.length);
							return Math.round(this.b * I);
						}
						return (
							this.d === -1 &&
								((this.d = this.f(this.domNode).offsetWidth),
								S?.markDidDomLayout()),
							this.d
						);
					}
					getWidthIsFast() {
						return (
							this.input.lineContent.length < p.MaxMonospaceDistance ||
							this.d !== -1
						);
					}
					monospaceAssumptionsAreValid() {
						if (!this.domNode) return c;
						if (this.input.lineContent.length < p.MaxMonospaceDistance) {
							const S = this.getWidth(null),
								I = this.domNode.domNode.firstChild.offsetWidth;
							Math.abs(S - I) >= 2 &&
								(console.warn(
									"monospace assumptions have been violated, therefore disabling monospace optimizations!",
								),
								(c = !1));
						}
						return c;
					}
					toSlowRenderedLine() {
						return s(
							this.domNode,
							this.input,
							this.a,
							!1,
							m.ForeignElementType.None,
						);
					}
					getVisibleRangesForRange(S, I, T, P) {
						const k = this.e(S, I, P),
							L = this.e(S, T, P);
						return [new C.$uub(k, L - k)];
					}
					e(S, I, T) {
						if (I <= p.MaxMonospaceDistance) {
							const N = this.a.getHorizontalOffset(I);
							return this.b * N;
						}
						const P = Math.floor((I - 1) / p.MaxMonospaceDistance) - 1,
							k = (P + 1) * p.MaxMonospaceDistance + 1;
						let L = -1;
						if (
							(this.c &&
								((L = this.c[P]),
								L === -1 && ((L = this.g(S, k, T)), (this.c[P] = L))),
							L === -1)
						) {
							const N = this.a.getHorizontalOffset(I);
							return this.b * N;
						}
						const D = this.a.getHorizontalOffset(k),
							M = this.a.getHorizontalOffset(I);
						return L + this.b * (M - D);
					}
					f(S) {
						return S.domNode.firstChild;
					}
					g(S, I, T) {
						if (!this.domNode) return -1;
						const P = this.a.getDomPosition(I),
							k = E.$Dub.readHorizontalRanges(
								this.f(this.domNode),
								P.partIndex,
								P.charIndex,
								P.partIndex,
								P.charIndex,
								T,
							);
						return !k || k.length === 0 ? -1 : k[0].left;
					}
					getColumnOfNodeOffset(S, I) {
						return $(this.a, S, I);
					}
				}
				class f {
					constructor(S, I, T, P, k) {
						if (
							((this.domNode = S),
							(this.input = I),
							(this.a = T),
							(this.b = /^\s*$/.test(I.lineContent)),
							(this.c = k),
							(this.d = -1),
							(this.e = null),
							!P || this.a.length === 0)
						) {
							this.e = new Float32Array(Math.max(2, this.a.length + 1));
							for (let L = 0, D = this.a.length; L <= D; L++) this.e[L] = -1;
						}
					}
					f(S) {
						return S.domNode.firstChild;
					}
					getWidth(S) {
						return this.domNode
							? (this.d === -1 &&
									((this.d = this.f(this.domNode).offsetWidth),
									S?.markDidDomLayout()),
								this.d)
							: 0;
					}
					getWidthIsFast() {
						return this.d !== -1;
					}
					getVisibleRangesForRange(S, I, T, P) {
						if (!this.domNode) return null;
						if (this.e !== null) {
							const k = this.h(this.domNode, S, I, P);
							if (k === -1) return null;
							const L = this.h(this.domNode, S, T, P);
							return L === -1 ? null : [new C.$uub(k, L - k)];
						}
						return this.g(this.domNode, S, I, T, P);
					}
					g(S, I, T, P, k) {
						if (T === P) {
							const L = this.h(S, I, T, k);
							return L === -1 ? null : [new C.$uub(L, 0)];
						} else return this.k(S, T, P, k);
					}
					h(S, I, T, P) {
						if (this.a.length === 0) {
							if (
								this.c === m.ForeignElementType.None ||
								this.c === m.ForeignElementType.After
							)
								return 0;
							if (this.c === m.ForeignElementType.Before)
								return this.getWidth(P);
							const k = this.f(S);
							return k.firstChild
								? (P.markDidDomLayout(), k.firstChild.offsetWidth)
								: 0;
						}
						if (this.e !== null) {
							const k = this.e[T];
							if (k !== -1) return k;
							const L = this.j(S, I, T, P);
							return (this.e[T] = L), L;
						}
						return this.j(S, I, T, P);
					}
					j(S, I, T, P) {
						if (this.a.length === 0) {
							const M = E.$Dub.readHorizontalRanges(this.f(S), 0, 0, 0, 0, P);
							return !M || M.length === 0 ? -1 : M[0].left;
						}
						if (
							T === this.a.length &&
							this.b &&
							this.c === m.ForeignElementType.None
						)
							return this.getWidth(P);
						const k = this.a.getDomPosition(T),
							L = E.$Dub.readHorizontalRanges(
								this.f(S),
								k.partIndex,
								k.charIndex,
								k.partIndex,
								k.charIndex,
								P,
							);
						if (!L || L.length === 0) return -1;
						const D = L[0].left;
						if (this.input.isBasicASCII) {
							const M = this.a.getHorizontalOffset(T),
								N = Math.round(this.input.spaceWidth * M);
							if (Math.abs(N - D) <= 1) return N;
						}
						return D;
					}
					k(S, I, T, P) {
						if (I === 1 && T === this.a.length)
							return [new C.$uub(0, this.getWidth(P))];
						const k = this.a.getDomPosition(I),
							L = this.a.getDomPosition(T);
						return E.$Dub.readHorizontalRanges(
							this.f(S),
							k.partIndex,
							k.charIndex,
							L.partIndex,
							L.charIndex,
							P,
						);
					}
					getColumnOfNodeOffset(S, I) {
						return $(this.a, S, I);
					}
				}
				class b extends f {
					g(S, I, T, P, k) {
						const L = super.g(S, I, T, P, k);
						if (
							!L ||
							L.length === 0 ||
							T === P ||
							(T === 1 && P === this.a.length)
						)
							return L;
						if (!this.input.containsRTL) {
							const D = this.h(S, I, P, k);
							if (D !== -1) {
								const M = L[L.length - 1];
								M.left < D && (M.width = D - M.left);
							}
						}
						return L;
					}
				}
				const s = (function () {
					return t.$Pfb ? l : y;
				})();
				function l(v, S, I, T, P) {
					return new b(v, S, I, T, P);
				}
				function y(v, S, I, T, P) {
					return new f(v, S, I, T, P);
				}
				function $(v, S, I) {
					const T = S.textContent.length;
					let P = -1;
					for (; S; ) (S = S.previousSibling), P++;
					return v.getColumn(new m.$Kub(P, I), T);
				}
			},
		)
