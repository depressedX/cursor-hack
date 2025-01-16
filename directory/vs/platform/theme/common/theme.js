define(de[212], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ColorScheme = void 0),
				(e.$gP = i),
				(e.$hP = w);
			var t;
			(function (E) {
				(E.DARK = "dark"),
					(E.LIGHT = "light"),
					(E.HIGH_CONTRAST_DARK = "hcDark"),
					(E.HIGH_CONTRAST_LIGHT = "hcLight");
			})(t || (e.ColorScheme = t = {}));
			function i(E) {
				return E === t.HIGH_CONTRAST_DARK || E === t.HIGH_CONTRAST_LIGHT;
			}
			function w(E) {
				return E === t.DARK || E === t.HIGH_CONTRAST_DARK;
			}
		}),
		define(
			de[1208],
			he([1, 0, 139, 194, 12, 2544, 746, 533, 598, 290, 212, 38]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
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
		),
		define(
			de[1662],
			he([1, 0, 56, 777, 303, 1208, 38, 48, 17, 435, 7, 1528, 64, 149]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xub = e.$Wub = e.$Vub = e.$Uub = void 0),
					(u = mt(u));
				var n;
				(function (k) {
					(k[(k.Unknown = 0)] = "Unknown"), (k[(k.Content = 1)] = "Content");
				})(n || (n = {}));
				class g {
					constructor(L = null) {
						(this.hitTarget = L), (this.type = n.Unknown);
					}
				}
				class p {
					get hitTarget() {
						return this.spanNode;
					}
					constructor(L, D, M) {
						(this.position = L),
							(this.spanNode = D),
							(this.injectedText = M),
							(this.type = n.Content);
					}
				}
				var o;
				(function (k) {
					function L(D, M, N) {
						const A = D.getPositionFromDOMInfo(M, N);
						return A ? new p(A, M, null) : new g(M);
					}
					k.createFromDOMInfo = L;
				})(o || (o = {}));
				class f {
					constructor(L, D) {
						(this.lastViewCursorsRenderData = L),
							(this.lastTextareaPosition = D);
					}
				}
				e.$Uub = f;
				class b {
					static c(L, D = null) {
						return !D && L
							? new m.$iL(L.lineNumber, L.column, L.lineNumber, L.column)
							: (D ?? null);
					}
					static createUnknown(L, D, M) {
						return {
							type: t.MouseTargetType.UNKNOWN,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M),
						};
					}
					static createTextarea(L, D) {
						return {
							type: t.MouseTargetType.TEXTAREA,
							element: L,
							mouseColumn: D,
							position: null,
							range: null,
						};
					}
					static createMargin(L, D, M, N, A, R) {
						return {
							type: L,
							element: D,
							mouseColumn: M,
							position: N,
							range: A,
							detail: R,
						};
					}
					static createViewZone(L, D, M, N, A) {
						return {
							type: L,
							element: D,
							mouseColumn: M,
							position: N,
							range: this.c(N),
							detail: A,
						};
					}
					static createContentText(L, D, M, N, A) {
						return {
							type: t.MouseTargetType.CONTENT_TEXT,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M, N),
							detail: A,
						};
					}
					static createContentEmpty(L, D, M, N) {
						return {
							type: t.MouseTargetType.CONTENT_EMPTY,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M),
							detail: N,
						};
					}
					static createContentWidget(L, D, M) {
						return {
							type: t.MouseTargetType.CONTENT_WIDGET,
							element: L,
							mouseColumn: D,
							position: null,
							range: null,
							detail: M,
						};
					}
					static createScrollbar(L, D, M) {
						return {
							type: t.MouseTargetType.SCROLLBAR,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M),
						};
					}
					static createOverlayWidget(L, D, M) {
						return {
							type: t.MouseTargetType.OVERLAY_WIDGET,
							element: L,
							mouseColumn: D,
							position: null,
							range: null,
							detail: M,
						};
					}
					static createOutsideEditor(L, D, M, N) {
						return {
							type: t.MouseTargetType.OUTSIDE_EDITOR,
							element: null,
							mouseColumn: L,
							position: D,
							range: this.c(D),
							outsidePosition: M,
							outsideDistance: N,
						};
					}
					static f(L) {
						return L === t.MouseTargetType.TEXTAREA
							? "TEXTAREA"
							: L === t.MouseTargetType.GUTTER_GLYPH_MARGIN
								? "GUTTER_GLYPH_MARGIN"
								: L === t.MouseTargetType.GUTTER_LINE_NUMBERS
									? "GUTTER_LINE_NUMBERS"
									: L === t.MouseTargetType.GUTTER_LINE_DECORATIONS
										? "GUTTER_LINE_DECORATIONS"
										: L === t.MouseTargetType.GUTTER_VIEW_ZONE
											? "GUTTER_VIEW_ZONE"
											: L === t.MouseTargetType.CONTENT_TEXT
												? "CONTENT_TEXT"
												: L === t.MouseTargetType.CONTENT_EMPTY
													? "CONTENT_EMPTY"
													: L === t.MouseTargetType.CONTENT_VIEW_ZONE
														? "CONTENT_VIEW_ZONE"
														: L === t.MouseTargetType.CONTENT_WIDGET
															? "CONTENT_WIDGET"
															: L === t.MouseTargetType.OVERVIEW_RULER
																? "OVERVIEW_RULER"
																: L === t.MouseTargetType.SCROLLBAR
																	? "SCROLLBAR"
																	: L === t.MouseTargetType.OVERLAY_WIDGET
																		? "OVERLAY_WIDGET"
																		: "UNKNOWN";
					}
					static toString(L) {
						return (
							this.f(L.type) +
							": " +
							L.position +
							" - " +
							L.range +
							" - " +
							JSON.stringify(L.detail)
						);
					}
				}
				e.$Vub = b;
				class s {
					static isTextArea(L) {
						return (
							L.length === 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.TextArea
						);
					}
					static isChildOfViewLines(L) {
						return (
							L.length >= 4 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[3] === w.PartFingerprint.ViewLines
						);
					}
					static isStrictChildOfViewLines(L) {
						return (
							L.length > 4 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[3] === w.PartFingerprint.ViewLines
						);
					}
					static isChildOfScrollableElement(L) {
						return (
							L.length >= 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.ScrollableElement
						);
					}
					static isChildOfMinimap(L) {
						return (
							L.length >= 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.Minimap
						);
					}
					static isChildOfContentWidgets(L) {
						return (
							L.length >= 4 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[3] === w.PartFingerprint.ContentWidgets
						);
					}
					static isChildOfOverflowGuard(L) {
						return L.length >= 1 && L[0] === w.PartFingerprint.OverflowGuard;
					}
					static isChildOfOverflowingContentWidgets(L) {
						return (
							L.length >= 1 &&
							L[0] === w.PartFingerprint.OverflowingContentWidgets
						);
					}
					static isChildOfOverlayWidgets(L) {
						return (
							L.length >= 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.OverlayWidgets
						);
					}
					static isChildOfOverflowingOverlayWidgets(L) {
						return (
							L.length >= 1 &&
							L[0] === w.PartFingerprint.OverflowingOverlayWidgets
						);
					}
				}
				class l {
					constructor(L, D, M) {
						this.viewModel = L.viewModel;
						const N = L.configuration.options;
						(this.layoutInfo = N.get(C.EditorOption.layoutInfo)),
							(this.viewDomNode = D.viewDomNode),
							(this.lineHeight = N.get(C.EditorOption.lineHeight)),
							(this.stickyTabStops = N.get(C.EditorOption.stickyTabStops)),
							(this.typicalHalfwidthCharacterWidth = N.get(
								C.EditorOption.fontInfo,
							).typicalHalfwidthCharacterWidth),
							(this.lastRenderData = M),
							(this.c = L),
							(this.f = D);
					}
					getZoneAtCoord(L) {
						return l.getZoneAtCoord(this.c, L);
					}
					static getZoneAtCoord(L, D) {
						const M = L.viewLayout.getWhitespaceAtVerticalOffset(D);
						if (M) {
							const N = M.verticalOffset + M.height / 2,
								A = L.viewModel.getLineCount();
							let R = null,
								O,
								B = null;
							return (
								M.afterLineNumber !== A &&
									(B = new d.$hL(M.afterLineNumber + 1, 1)),
								M.afterLineNumber > 0 &&
									(R = new d.$hL(
										M.afterLineNumber,
										L.viewModel.getLineMaxColumn(M.afterLineNumber),
									)),
								B === null
									? (O = R)
									: R === null
										? (O = B)
										: D < N
											? (O = R)
											: (O = B),
								{
									viewZoneId: M.id,
									afterLineNumber: M.afterLineNumber,
									positionBefore: R,
									positionAfter: B,
									position: O,
								}
							);
						}
						return null;
					}
					getFullLineRangeAtCoord(L) {
						if (this.c.viewLayout.isAfterLines(L)) {
							const N = this.c.viewModel.getLineCount(),
								A = this.c.viewModel.getLineMaxColumn(N);
							return { range: new m.$iL(N, A, N, A), isAfterLines: !0 };
						}
						const D = this.c.viewLayout.getLineNumberAtVerticalOffset(L),
							M = this.c.viewModel.getLineMaxColumn(D);
						return { range: new m.$iL(D, 1, D, M), isAfterLines: !1 };
					}
					getLineNumberAtVerticalOffset(L) {
						return this.c.viewLayout.getLineNumberAtVerticalOffset(L);
					}
					isAfterLines(L) {
						return this.c.viewLayout.isAfterLines(L);
					}
					isInTopPadding(L) {
						return this.c.viewLayout.isInTopPadding(L);
					}
					isInBottomPadding(L) {
						return this.c.viewLayout.isInBottomPadding(L);
					}
					getVerticalOffsetForLineNumber(L) {
						return this.c.viewLayout.getVerticalOffsetForLineNumber(L);
					}
					findAttribute(L, D) {
						return l.g(L, D, this.f.viewDomNode);
					}
					static g(L, D, M) {
						for (; L && L !== L.ownerDocument.body; ) {
							if (L.hasAttribute && L.hasAttribute(D)) return L.getAttribute(D);
							if (L === M) return null;
							L = L.parentNode;
						}
						return null;
					}
					getLineWidth(L) {
						return this.f.getLineWidth(L);
					}
					visibleRangeForPosition(L, D) {
						return this.f.visibleRangeForPosition(L, D);
					}
					getPositionFromDOMInfo(L, D) {
						return this.f.getPositionFromDOMInfo(L, D);
					}
					getCurrentScrollTop() {
						return this.c.viewLayout.getCurrentScrollTop();
					}
					getCurrentScrollLeft() {
						return this.c.viewLayout.getCurrentScrollLeft();
					}
				}
				e.$Wub = l;
				class y {
					constructor(L, D, M, N) {
						(this.editorPos = D),
							(this.pos = M),
							(this.relativePos = N),
							(this.mouseVerticalOffset = Math.max(
								0,
								L.getCurrentScrollTop() + this.relativePos.y,
							)),
							(this.mouseContentHorizontalOffset =
								L.getCurrentScrollLeft() +
								this.relativePos.x -
								L.layoutInfo.contentLeft),
							(this.isInMarginArea =
								this.relativePos.x < L.layoutInfo.contentLeft &&
								this.relativePos.x >= L.layoutInfo.glyphMarginLeft),
							(this.isInContentArea = !this.isInMarginArea),
							(this.c = Math.max(
								0,
								I._getMouseColumn(
									this.mouseContentHorizontalOffset,
									L.typicalHalfwidthCharacterWidth,
								),
							));
					}
				}
				class $ extends y {
					get target() {
						return this.h ? this.hitTestResult.value.hitTarget : this.g;
					}
					get targetPath() {
						return (
							this.j !== this.target &&
								((this.j = this.target),
								(this.k = w.$zub.collect(this.target, this.f.viewDomNode))),
							this.k
						);
					}
					constructor(L, D, M, N, A) {
						super(L, D, M, N),
							(this.hitTestResult = new c.$Y(() => I.doHitTest(this.f, this))),
							(this.j = null),
							(this.k = new Uint8Array(0)),
							(this.f = L),
							(this.g = A);
						const R = !!this.g;
						this.h = !R;
					}
					toString() {
						return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}
	target: ${this.target ? this.target.outerHTML : null}`;
					}
					get wouldBenefitFromHitTestTargetSwitch() {
						return (
							!this.h &&
							this.hitTestResult.value.hitTarget !== null &&
							this.target !== this.hitTestResult.value.hitTarget
						);
					}
					switchToHitTestTarget() {
						this.h = !0;
					}
					l(L = null) {
						return L &&
							L.column < this.f.viewModel.getLineMaxColumn(L.lineNumber)
							? r.$BM.visibleColumnFromColumn(
									this.f.viewModel.getLineContent(L.lineNumber),
									L.column,
									this.f.viewModel.model.getOptions().tabSize,
								) + 1
							: this.c;
					}
					fulfillUnknown(L = null) {
						return b.createUnknown(this.target, this.l(L), L);
					}
					fulfillTextarea() {
						return b.createTextarea(this.target, this.l());
					}
					fulfillMargin(L, D, M, N) {
						return b.createMargin(L, this.target, this.l(D), D, M, N);
					}
					fulfillViewZone(L, D, M) {
						return b.createViewZone(L, this.target, this.l(D), D, M);
					}
					fulfillContentText(L, D, M) {
						return b.createContentText(this.target, this.l(L), L, D, M);
					}
					fulfillContentEmpty(L, D) {
						return b.createContentEmpty(this.target, this.l(L), L, D);
					}
					fulfillContentWidget(L) {
						return b.createContentWidget(this.target, this.l(), L);
					}
					fulfillScrollbar(L) {
						return b.createScrollbar(this.target, this.l(L), L);
					}
					fulfillOverlayWidget(L) {
						return b.createOverlayWidget(this.target, this.l(), L);
					}
				}
				const v = { isAfterLines: !0 };
				function S(k) {
					return { isAfterLines: !1, horizontalDistanceToText: k };
				}
				class I {
					constructor(L, D) {
						(this.c = L), (this.f = D);
					}
					mouseTargetIsWidget(L) {
						const D = L.target,
							M = w.$zub.collect(D, this.f.viewDomNode),
							N = D.parentElement;
						if (N && N.getAttribute("data-lexical-editor") === "true")
							return !0;
						const A = N?.parentElement;
						return !!(
							(A && A.getAttribute("data-lexical-editor") === "true") ||
							s.isChildOfContentWidgets(M) ||
							s.isChildOfOverflowingContentWidgets(M) ||
							s.isChildOfOverlayWidgets(M) ||
							s.isChildOfOverflowingOverlayWidgets(M)
						);
					}
					createMouseTarget(L, D, M, N, A) {
						const R = new l(this.c, this.f, L),
							O = new $(R, D, M, N, A);
						try {
							const B = I.g(R, O);
							if (
								B.type === t.MouseTargetType.CONTENT_TEXT &&
								R.stickyTabStops &&
								B.position !== null
							) {
								const U = I.A(B.position, R.viewModel),
									z = m.$iL.fromPositions(U, U).plusRange(B.range);
								return O.fulfillContentText(U, z, B.detail);
							}
							return B;
						} catch {
							return O.fulfillUnknown();
						}
					}
					static g(L, D) {
						if (D.target === null) return D.fulfillUnknown();
						const M = D;
						let N = null;
						return (
							!s.isChildOfOverflowGuard(D.targetPath) &&
								!s.isChildOfOverflowingContentWidgets(D.targetPath) &&
								!s.isChildOfOverflowingOverlayWidgets(D.targetPath) &&
								(N = N || D.fulfillUnknown()),
							(N = N || I.h(L, M)),
							(N = N || I.j(L, M)),
							(N = N || I.p(L, M)),
							(N = N || I.q(L, M)),
							(N = N || I.l(L, M)),
							(N = N || I.n(L, M)),
							(N = N || I.k(L, M)),
							(N = N || I.m(L, M)),
							(N = N || I.o(L, M)),
							(N = N || I.s(L, M)),
							N || D.fulfillUnknown()
						);
					}
					static h(L, D) {
						if (
							s.isChildOfContentWidgets(D.targetPath) ||
							s.isChildOfOverflowingContentWidgets(D.targetPath)
						) {
							const M = L.findAttribute(D.target, "widgetId");
							return M ? D.fulfillContentWidget(M) : D.fulfillUnknown();
						}
						return null;
					}
					static j(L, D) {
						if (
							s.isChildOfOverlayWidgets(D.targetPath) ||
							s.isChildOfOverflowingOverlayWidgets(D.targetPath)
						) {
							const M = L.findAttribute(D.target, "widgetId");
							return M ? D.fulfillOverlayWidget(M) : D.fulfillUnknown();
						}
						return null;
					}
					static k(L, D) {
						if (D.target) {
							const M = L.lastRenderData.lastViewCursorsRenderData;
							for (const N of M)
								if (D.target === N.domNode)
									return D.fulfillContentText(N.position, null, {
										mightBeForeignElement: !1,
										injectedText: null,
									});
						}
						if (D.isInContentArea) {
							const M = L.lastRenderData.lastViewCursorsRenderData,
								N = D.mouseContentHorizontalOffset,
								A = D.mouseVerticalOffset;
							for (const R of M) {
								if (N < R.contentLeft || N > R.contentLeft + R.width) continue;
								const O = L.getVerticalOffsetForLineNumber(
									R.position.lineNumber,
								);
								if (O <= A && A <= O + R.height)
									return D.fulfillContentText(R.position, null, {
										mightBeForeignElement: !1,
										injectedText: null,
									});
							}
						}
						return null;
					}
					static l(L, D) {
						const M = L.getZoneAtCoord(D.mouseVerticalOffset);
						if (M) {
							const N = D.isInContentArea
								? t.MouseTargetType.CONTENT_VIEW_ZONE
								: t.MouseTargetType.GUTTER_VIEW_ZONE;
							return D.fulfillViewZone(N, M.position, M);
						}
						return null;
					}
					static m(L, D) {
						return s.isTextArea(D.targetPath)
							? L.lastRenderData.lastTextareaPosition
								? D.fulfillContentText(
										L.lastRenderData.lastTextareaPosition,
										null,
										{ mightBeForeignElement: !1, injectedText: null },
									)
								: D.fulfillTextarea()
							: null;
					}
					static n(L, D) {
						if (D.isInMarginArea) {
							const M = L.getFullLineRangeAtCoord(D.mouseVerticalOffset),
								N = M.range.getStartPosition();
							let A = Math.abs(D.relativePos.x);
							const R = {
								isAfterLines: M.isAfterLines,
								glyphMarginLeft: L.layoutInfo.glyphMarginLeft,
								glyphMarginWidth: L.layoutInfo.glyphMarginWidth,
								lineNumbersWidth: L.layoutInfo.lineNumbersWidth,
								offsetX: A,
							};
							if (
								((A -= L.layoutInfo.glyphMarginLeft),
								A <= L.layoutInfo.glyphMarginWidth)
							) {
								const O =
										L.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
											M.range.getStartPosition(),
										),
									B = L.viewModel.glyphLanes.getLanesAtLine(O.lineNumber);
								return (
									(R.glyphMarginLane = B[Math.floor(A / L.lineHeight)]),
									D.fulfillMargin(
										t.MouseTargetType.GUTTER_GLYPH_MARGIN,
										N,
										M.range,
										R,
									)
								);
							}
							return (
								(A -= L.layoutInfo.glyphMarginWidth),
								A <= L.layoutInfo.lineNumbersWidth
									? D.fulfillMargin(
											t.MouseTargetType.GUTTER_LINE_NUMBERS,
											N,
											M.range,
											R,
										)
									: ((A -= L.layoutInfo.lineNumbersWidth),
										D.fulfillMargin(
											t.MouseTargetType.GUTTER_LINE_DECORATIONS,
											N,
											M.range,
											R,
										))
							);
						}
						return null;
					}
					static o(L, D) {
						if (!s.isChildOfViewLines(D.targetPath)) return null;
						if (L.isInTopPadding(D.mouseVerticalOffset))
							return D.fulfillContentEmpty(new d.$hL(1, 1), v);
						if (
							L.isAfterLines(D.mouseVerticalOffset) ||
							L.isInBottomPadding(D.mouseVerticalOffset)
						) {
							const N = L.viewModel.getLineCount(),
								A = L.viewModel.getLineMaxColumn(N);
							return D.fulfillContentEmpty(new d.$hL(N, A), v);
						}
						if (s.isStrictChildOfViewLines(D.targetPath)) {
							const N = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset);
							if (L.viewModel.getLineLength(N) === 0) {
								const R = L.getLineWidth(N),
									O = S(D.mouseContentHorizontalOffset - R);
								return D.fulfillContentEmpty(new d.$hL(N, 1), O);
							}
							const A = L.getLineWidth(N);
							if (D.mouseContentHorizontalOffset >= A) {
								const R = S(D.mouseContentHorizontalOffset - A),
									O = new d.$hL(N, L.viewModel.getLineMaxColumn(N));
								return D.fulfillContentEmpty(O, R);
							}
						}
						const M = D.hitTestResult.value;
						return M.type === n.Content
							? I.u(L, D, M.spanNode, M.position, M.injectedText)
							: D.wouldBenefitFromHitTestTargetSwitch
								? (D.switchToHitTestTarget(), this.g(L, D))
								: D.fulfillUnknown();
					}
					static p(L, D) {
						if (s.isChildOfMinimap(D.targetPath)) {
							const M = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset),
								N = L.viewModel.getLineMaxColumn(M);
							return D.fulfillScrollbar(new d.$hL(M, N));
						}
						return null;
					}
					static q(L, D) {
						if (
							s.isChildOfScrollableElement(D.targetPath) &&
							D.target &&
							D.target.nodeType === 1
						) {
							const M = D.target.className;
							if (M && /\b(slider|scrollbar)\b/.test(M)) {
								const N = L.getLineNumberAtVerticalOffset(
										D.mouseVerticalOffset,
									),
									A = L.viewModel.getLineMaxColumn(N);
								return D.fulfillScrollbar(new d.$hL(N, A));
							}
						}
						return null;
					}
					static s(L, D) {
						if (s.isChildOfScrollableElement(D.targetPath)) {
							const M = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset),
								N = L.viewModel.getLineMaxColumn(M);
							return D.fulfillScrollbar(new d.$hL(M, N));
						}
						return null;
					}
					getMouseColumn(L) {
						const D = this.c.configuration.options,
							M = D.get(C.EditorOption.layoutInfo),
							N =
								this.c.viewLayout.getCurrentScrollLeft() + L.x - M.contentLeft;
						return I._getMouseColumn(
							N,
							D.get(C.EditorOption.fontInfo).typicalHalfwidthCharacterWidth,
						);
					}
					static _getMouseColumn(L, D) {
						return L < 0 ? 1 : Math.round(L / D) + 1;
					}
					static u(L, D, M, N, A) {
						const R = N.lineNumber,
							O = N.column,
							B = L.getLineWidth(R);
						if (D.mouseContentHorizontalOffset > B) {
							const K = S(D.mouseContentHorizontalOffset - B);
							return D.fulfillContentEmpty(N, K);
						}
						const U = L.visibleRangeForPosition(R, O);
						if (!U) return D.fulfillUnknown(N);
						const z = U.left;
						if (Math.abs(D.mouseContentHorizontalOffset - z) < 1)
							return D.fulfillContentText(N, null, {
								mightBeForeignElement: !!A,
								injectedText: A,
							});
						const F = [];
						if ((F.push({ offset: U.left, column: O }), O > 1)) {
							const K = L.visibleRangeForPosition(R, O - 1);
							K && F.push({ offset: K.left, column: O - 1 });
						}
						const x = L.viewModel.getLineMaxColumn(R);
						if (O < x) {
							const K = L.visibleRangeForPosition(R, O + 1);
							K && F.push({ offset: K.left, column: O + 1 });
						}
						F.sort((K, J) => K.offset - J.offset);
						const H = D.pos.toClientCoordinates(u.getWindow(L.viewDomNode)),
							q = M.getBoundingClientRect(),
							V = q.left <= H.clientX && H.clientX <= q.right;
						let G = null;
						for (let K = 1; K < F.length; K++) {
							const J = F[K - 1],
								W = F[K];
							if (
								J.offset <= D.mouseContentHorizontalOffset &&
								D.mouseContentHorizontalOffset <= W.offset
							) {
								G = new m.$iL(R, J.column, R, W.column);
								const X = Math.abs(J.offset - D.mouseContentHorizontalOffset),
									Y = Math.abs(W.offset - D.mouseContentHorizontalOffset);
								N = X < Y ? new d.$hL(R, J.column) : new d.$hL(R, W.column);
								break;
							}
						}
						return D.fulfillContentText(N, G, {
							mightBeForeignElement: !V || !!A,
							injectedText: A,
						});
					}
					static v(L, D) {
						const M = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset),
							N = L.getVerticalOffsetForLineNumber(M),
							A = N + L.lineHeight;
						if (
							!(M === L.viewModel.getLineCount() && D.mouseVerticalOffset > A)
						) {
							const O = Math.floor((N + A) / 2);
							let B = D.pos.y + (O - D.mouseVerticalOffset);
							B <= D.editorPos.y && (B = D.editorPos.y + 1),
								B >= D.editorPos.y + D.editorPos.height &&
									(B = D.editorPos.y + D.editorPos.height - 1);
							const U = new i.$eub(D.pos.x, B),
								z = this.w(
									L,
									U.toClientCoordinates(u.getWindow(L.viewDomNode)),
								);
							if (z.type === n.Content) return z;
						}
						return this.w(
							L,
							D.pos.toClientCoordinates(u.getWindow(L.viewDomNode)),
						);
					}
					static w(L, D) {
						const M = u.$Igb(L.viewDomNode);
						let N;
						if (
							(M
								? typeof M.caretRangeFromPoint > "u"
									? (N = T(M, D.clientX, D.clientY))
									: (N = M.caretRangeFromPoint(D.clientX, D.clientY))
								: (N = L.viewDomNode.ownerDocument.caretRangeFromPoint(
										D.clientX,
										D.clientY,
									)),
							!N || !N.startContainer)
						)
							return new g();
						const A = N.startContainer;
						if (A.nodeType === A.TEXT_NODE) {
							const R = A.parentNode,
								O = R ? R.parentNode : null,
								B = O ? O.parentNode : null;
							return (B && B.nodeType === B.ELEMENT_NODE
								? B.className
								: null) === E.$Rub.CLASS_NAME
								? o.createFromDOMInfo(L, R, N.startOffset)
								: new g(A.parentNode);
						} else if (A.nodeType === A.ELEMENT_NODE) {
							const R = A.parentNode,
								O = R ? R.parentNode : null;
							return (O && O.nodeType === O.ELEMENT_NODE
								? O.className
								: null) === E.$Rub.CLASS_NAME
								? o.createFromDOMInfo(L, A, A.textContent.length)
								: new g(A);
						}
						return new g();
					}
					static z(L, D) {
						const M = L.viewDomNode.ownerDocument.caretPositionFromPoint(
							D.clientX,
							D.clientY,
						);
						if (M.offsetNode.nodeType === M.offsetNode.TEXT_NODE) {
							const N = M.offsetNode.parentNode,
								A = N ? N.parentNode : null,
								R = A ? A.parentNode : null;
							return (R && R.nodeType === R.ELEMENT_NODE
								? R.className
								: null) === E.$Rub.CLASS_NAME
								? o.createFromDOMInfo(L, M.offsetNode.parentNode, M.offset)
								: new g(M.offsetNode.parentNode);
						}
						if (M.offsetNode.nodeType === M.offsetNode.ELEMENT_NODE) {
							const N = M.offsetNode.parentNode,
								A = N && N.nodeType === N.ELEMENT_NODE ? N.className : null,
								R = N ? N.parentNode : null,
								O = R && R.nodeType === R.ELEMENT_NODE ? R.className : null;
							if (A === E.$Rub.CLASS_NAME) {
								const B =
									M.offsetNode.childNodes[
										Math.min(M.offset, M.offsetNode.childNodes.length - 1)
									];
								if (B) return o.createFromDOMInfo(L, B, 0);
							} else if (O === E.$Rub.CLASS_NAME)
								return o.createFromDOMInfo(L, M.offsetNode, 0);
						}
						return new g(M.offsetNode);
					}
					static A(L, D) {
						const M = D.getLineContent(L.lineNumber),
							{ tabSize: N } = D.model.getOptions(),
							A = a.$Btb.atomicPosition(
								M,
								L.column - 1,
								N,
								a.Direction.Nearest,
							);
						return A !== -1 ? new d.$hL(L.lineNumber, A + 1) : L;
					}
					static doHitTest(L, D) {
						let M = new g();
						if (
							(typeof L.viewDomNode.ownerDocument.caretRangeFromPoint ==
							"function"
								? (M = this.v(L, D))
								: L.viewDomNode.ownerDocument.caretPositionFromPoint &&
									(M = this.z(
										L,
										D.pos.toClientCoordinates(u.getWindow(L.viewDomNode)),
									)),
							M.type === n.Content)
						) {
							const N = L.viewModel.getInjectedTextAt(M.position),
								A = L.viewModel.normalizePosition(
									M.position,
									h.PositionAffinity.None,
								);
							(N || !A.equals(M.position)) && (M = new p(A, M.spanNode, N));
						}
						return M;
					}
				}
				e.$Xub = I;
				function T(k, L, D) {
					const M = document.createRange();
					let N = k.elementFromPoint(L, D);
					if (N !== null) {
						for (
							;
							N &&
							N.firstChild &&
							N.firstChild.nodeType !== N.firstChild.TEXT_NODE &&
							N.lastChild &&
							N.lastChild.firstChild;
						)
							N = N.lastChild;
						const A = N.getBoundingClientRect(),
							R = u.getWindow(N),
							O = R.getComputedStyle(N, null).getPropertyValue("font-style"),
							B = R.getComputedStyle(N, null).getPropertyValue("font-variant"),
							U = R.getComputedStyle(N, null).getPropertyValue("font-weight"),
							z = R.getComputedStyle(N, null).getPropertyValue("font-size"),
							F = R.getComputedStyle(N, null).getPropertyValue("line-height"),
							x = R.getComputedStyle(N, null).getPropertyValue("font-family"),
							H = `${O} ${B} ${U} ${z}/${F} ${x}`,
							q = N.innerText;
						let V = A.left,
							G = 0,
							K;
						if (L > A.left + A.width) G = q.length;
						else {
							const J = P.getInstance();
							for (let W = 0; W < q.length + 1; W++) {
								if (
									((K = J.getCharWidth(q.charAt(W), H) / 2), (V += K), L < V)
								) {
									G = W;
									break;
								}
								V += K;
							}
						}
						M.setStart(N.firstChild, G), M.setEnd(N.firstChild, G);
					}
					return M;
				}
				class P {
					static {
						this.c = null;
					}
					static getInstance() {
						return P.c || (P.c = new P()), P.c;
					}
					constructor() {
						(this.f = {}), (this.g = document.createElement("canvas"));
					}
					getCharWidth(L, D) {
						const M = L + D;
						if (this.f[M]) return this.f[M];
						const N = this.g.getContext("2d");
						N.font = D;
						const R = N.measureText(L).width;
						return (this.f[M] = R), R;
					}
				}
			},
		),
		define(
			de[2839],
			he([1, 0, 7, 168, 3, 12, 1662, 56, 777, 909, 48, 104, 750, 38, 498, 203]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
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
		define(
			de[2840],
			he([1, 0, 459, 7, 159, 75, 3, 12, 2839, 942, 498, 56, 777]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$ub = e.$0ub = void 0),
					(i = mt(i)),
					(d = mt(d));
				class c extends m.$1ub {
					constructor(o, f, b) {
						super(o, f, b),
							this.D(w.$Qhb.addTarget(this.c.linesContentDomNode)),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Tap, (l) =>
									this.J(l),
								),
							),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Change, (l) =>
									this.L(l),
								),
							),
							this.D(
								i.$0fb(
									this.c.linesContentDomNode,
									w.EventType.Contextmenu,
									(l) => this.w(new h.$kub(l, !1, this.c.viewDomNode), !1),
								),
							),
							(this.I = "mouse"),
							this.D(
								i.$0fb(this.c.linesContentDomNode, "pointerdown", (l) => {
									const y = l.pointerType;
									if (y === "mouse") {
										this.I = "mouse";
										return;
									} else y === "touch" ? (this.I = "touch") : (this.I = "pen");
								}),
							);
						const s = new h.$mub(this.c.viewDomNode);
						this.D(s.onPointerMove(this.c.viewDomNode, (l) => this.z(l))),
							this.D(s.onPointerUp(this.c.viewDomNode, (l) => this.F(l))),
							this.D(s.onPointerLeave(this.c.viewDomNode, (l) => this.C(l))),
							this.D(
								s.onPointerDown(this.c.viewDomNode, (l, y) => this.G(l, y)),
							);
					}
					J(o) {
						!o.initialTarget ||
							!this.c.linesContentDomNode.contains(o.initialTarget) ||
							(o.preventDefault(), this.c.focusTextArea(), this.M(o, !1));
					}
					L(o) {
						this.I === "touch" &&
							this.a.viewModel.viewLayout.deltaScrollNow(
								-o.translationX,
								-o.translationY,
							),
							this.I === "pen" && this.M(o, !0);
					}
					M(o, f) {
						const b = this.s(new h.$kub(o, !1, this.c.viewDomNode), !1);
						b.position &&
							this.b.dispatchMouse({
								position: b.position,
								mouseColumn: b.position.column,
								startedOnLineNumbers: !1,
								revealType: u.NavigationCommandRevealType.Minimal,
								mouseDownCount: o.tapCount,
								inSelectionMode: f,
								altKey: !1,
								ctrlKey: !1,
								metaKey: !1,
								shiftKey: !1,
								leftButton: !1,
								middleButton: !1,
								onInjectedText:
									b.type === a.MouseTargetType.CONTENT_TEXT &&
									b.detail.injectedText !== null,
							});
					}
					G(o, f) {
						o.browserEvent.pointerType !== "touch" && super.G(o, f);
					}
				}
				e.$0ub = c;
				class n extends m.$1ub {
					constructor(o, f, b) {
						super(o, f, b),
							this.D(w.$Qhb.addTarget(this.c.linesContentDomNode)),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Tap, (s) =>
									this.I(s),
								),
							),
							this.D(
								i.$0fb(this.c.linesContentDomNode, w.EventType.Change, (s) =>
									this.J(s),
								),
							),
							this.D(
								i.$0fb(
									this.c.linesContentDomNode,
									w.EventType.Contextmenu,
									(s) => this.w(new h.$kub(s, !1, this.c.viewDomNode), !1),
								),
							);
					}
					I(o) {
						o.preventDefault(), this.c.focusTextArea();
						const f = this.s(new h.$kub(o, !1, this.c.viewDomNode), !1);
						if (f.position) {
							const b = document.createEvent("CustomEvent");
							b.initEvent(r.TextAreaSyntethicEvents.Tap, !1, !0),
								this.c.dispatchTextAreaEvent(b),
								this.b.moveTo(
									f.position,
									u.NavigationCommandRevealType.Minimal,
								);
						}
					}
					J(o) {
						this.a.viewModel.viewLayout.deltaScrollNow(
							-o.translationX,
							-o.translationY,
						);
					}
				}
				class g extends C.$1c {
					constructor(o, f, b) {
						super(),
							(d.$u || (d.$L && d.$v)) && t.$Yfb.pointerEvents
								? (this.a = this.D(new c(o, f, b)))
								: E.$Bfb.TouchEvent
									? (this.a = this.D(new n(o, f, b)))
									: (this.a = this.D(new m.$1ub(o, f, b)));
					}
					getTargetAtClientPoint(o, f) {
						return this.a.getTargetAtClientPoint(o, f);
					}
				}
				e.$$ub = g;
			},
		),
		define(
			de[2841],
			he([
				1, 0, 651, 15, 12, 210, 321, 746, 1183, 303, 2543, 1208, 38, 48, 17, 98,
				493, 2268,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
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
		define(
			de[35],
			he([1, 0, 14, 6, 3, 5, 30, 212]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pP = e.$nP = e.$lP = e.$kP = e.$iP = void 0),
					(e.$jP = m),
					(e.$mP = r),
					(e.$oP = h),
					(C = mt(C)),
					(e.$iP = (0, E.$Mi)("themeService"));
				function m(n) {
					return { id: n };
				}
				(e.$kP = t.$ak.file), (e.$lP = t.$ak.folder);
				function r(n) {
					switch (n) {
						case d.ColorScheme.DARK:
							return "vs-dark";
						case d.ColorScheme.HIGH_CONTRAST_DARK:
							return "hc-black";
						case d.ColorScheme.HIGH_CONTRAST_LIGHT:
							return "hc-light";
						default:
							return "vs";
					}
				}
				e.$nP = { ThemingContribution: "base.contributions.theming" };
				class u {
					constructor() {
						(this.a = []), (this.a = []), (this.b = new i.$re());
					}
					onColorThemeChange(g) {
						return (
							this.a.push(g),
							this.b.fire(g),
							(0, w.$Yc)(() => {
								const p = this.a.indexOf(g);
								this.a.splice(p, 1);
							})
						);
					}
					get onThemingParticipantAdded() {
						return this.b.event;
					}
					getThemingParticipants() {
						return this.a;
					}
				}
				const a = new u();
				C.$Io.add(e.$nP.ThemingContribution, a);
				function h(n) {
					return a.onColorThemeChange(n);
				}
				class c extends w.$1c {
					constructor(g) {
						super(),
							(this.n = g),
							(this.h = g.getColorTheme()),
							this.D(this.n.onDidColorThemeChange((p) => this.q(p)));
					}
					q(g) {
						(this.h = g), this.updateStyles();
					}
					updateStyles() {}
					w(g, p) {
						let o = this.h.getColor(g);
						return o && p && (o = p(o, this.h)), o ? o.toString() : null;
					}
				}
				e.$pP = c;
			},
		),
		define(
			de[2842],
			he([1, 0, 7, 6, 3, 273, 37, 9, 98, 64, 35]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nvc = e.$mvc = e.$lvc = e.$kvc = void 0),
					(t = mt(t)),
					(C = mt(C));
				let a = class extends w.$1c {
					constructor(l) {
						super(),
							(this.y = l),
							(this.a = this.D(new i.$re())),
							(this.onWillCreateCodeEditor = this.a.event),
							(this.b = this.D(new i.$re())),
							(this.onCodeEditorAdd = this.b.event),
							(this.c = this.D(new i.$re())),
							(this.onCodeEditorRemove = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onWillCreateDiffEditor = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDiffEditorAdd = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDiffEditorRemove = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidChangeTransientModelProperty = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDecorationTypeRegistered = this.m.event),
							(this.s = new Map()),
							(this.t = new Map()),
							(this.u = new E.$$c()),
							(this.G = {}),
							(this.H = new Map()),
							(this.n = Object.create(null)),
							(this.q = Object.create(null)),
							(this.r = null);
					}
					willCreateCodeEditor() {
						this.a.fire();
					}
					addCodeEditor(l) {
						(this.n[l.getId()] = l), this.b.fire(l);
					}
					removeCodeEditor(l) {
						delete this.n[l.getId()] && this.c.fire(l);
					}
					listCodeEditors() {
						return Object.keys(this.n).map((l) => this.n[l]);
					}
					willCreateDiffEditor() {
						this.f.fire();
					}
					addDiffEditor(l) {
						(this.q[l.getId()] = l), this.g.fire(l);
					}
					removeDiffEditor(l) {
						delete this.q[l.getId()] && this.h.fire(l);
					}
					listDiffEditors() {
						return Object.keys(this.q).map((l) => this.q[l]);
					}
					getFocusedCodeEditor() {
						let l = null;
						const y = this.listCodeEditors();
						for (const $ of y) {
							if ($.hasTextFocus()) return $;
							$.hasWidgetFocus() && (l = $);
						}
						return l;
					}
					z() {
						return this.r || (this.r = this.C()), this.r;
					}
					C() {
						return new n(t.$Rgb());
					}
					F(l) {
						if (!l) return this.z();
						const y = l.getContainerDomNode();
						if (!t.$Hgb(y)) return this.z();
						const $ = l.getId();
						if (!this.t.has($)) {
							const v = new c(this, $, t.$Rgb(y));
							this.t.set($, v);
						}
						return this.t.get($);
					}
					_removeEditorStyleSheets(l) {
						this.t.delete(l);
					}
					registerDecorationType(l, y, $, v, S) {
						let I = this.s.get(y);
						if (!I) {
							const T = this.F(S),
								P = {
									styleSheet: T,
									key: y,
									parentTypeKey: v,
									options: $ || Object.create(null),
								};
							v ? (I = new g(this.y, T, P)) : (I = new p(l, this.y, T, P)),
								this.s.set(y, I),
								this.m.fire(y);
						}
						return (
							I.refCount++,
							{
								dispose: () => {
									this.removeDecorationType(y);
								},
							}
						);
					}
					listDecorationTypes() {
						return Array.from(this.s.keys());
					}
					removeDecorationType(l) {
						const y = this.s.get(l);
						y &&
							(y.refCount--,
							y.refCount <= 0 &&
								(this.s.delete(l),
								y.dispose(),
								this.listCodeEditors().forEach(($) =>
									$.removeDecorationsByType(l),
								)));
					}
					resolveDecorationOptions(l, y) {
						const $ = this.s.get(l);
						if (!$) throw new Error("Unknown decoration type key: " + l);
						return $.getOptions(this, y);
					}
					resolveDecorationCSSRules(l) {
						const y = this.s.get(l);
						return y ? y.resolveDecorationCSSRules() : null;
					}
					setModelProperty(l, y, $) {
						const v = l.toString();
						let S;
						this.H.has(v)
							? (S = this.H.get(v))
							: ((S = new Map()), this.H.set(v, S)),
							S.set(y, $);
					}
					getModelProperty(l, y) {
						const $ = l.toString();
						if (this.H.has($)) return this.H.get($).get(y);
					}
					setTransientModelProperty(l, y, $) {
						const v = l.uri.toString();
						let S;
						this.G.hasOwnProperty(v)
							? (S = this.G[v])
							: ((S = new h(v, l, this)), (this.G[v] = S)),
							S.get(y) !== $ && (S.set(y, $), this.j.fire(l));
					}
					getTransientModelProperty(l, y) {
						const $ = l.uri.toString();
						if (this.G.hasOwnProperty($)) return this.G[$].get(y);
					}
					getTransientModelProperties(l) {
						const y = l.uri.toString();
						if (this.G.hasOwnProperty(y))
							return this.G[y].keys().map(($) => [$, this.G[y].get($)]);
					}
					_removeWatcher(l) {
						delete this.G[l.uri];
					}
					async openCodeEditor(l, y, $) {
						for (const v of this.u) {
							const S = await v(l, y, $);
							if (S !== null) return S;
						}
						return null;
					}
					registerCodeEditorOpenHandler(l) {
						const y = this.u.unshift(l);
						return (0, w.$Yc)(y);
					}
				};
				(e.$kvc = a), (e.$kvc = a = Ne([j(0, u.$iP)], a));
				class h {
					constructor(l, y, $) {
						(this.uri = l),
							(this.a = {}),
							y.onWillDispose(() => $._removeWatcher(this));
					}
					set(l, y) {
						this.a[l] = y;
					}
					get(l) {
						return this.a[l];
					}
					keys() {
						return Object.keys(this.a);
					}
				}
				e.$lvc = h;
				class c {
					get sheet() {
						return this.c.sheet;
					}
					constructor(l, y, $) {
						(this.a = l), (this.b = y), (this.c = $), (this.d = 0);
					}
					ref() {
						this.d++;
					}
					unref() {
						this.d--,
							this.d === 0 &&
								(this.c.remove(), this.a._removeEditorStyleSheets(this.b));
					}
					insertRule(l, y) {
						t.$Wgb(l, y, this.c);
					}
					removeRulesContainingSelector(l) {
						t.$Xgb(l, this.c);
					}
				}
				class n {
					get sheet() {
						return this.a.sheet;
					}
					constructor(l) {
						this.a = l;
					}
					ref() {}
					unref() {}
					insertRule(l, y) {
						t.$Wgb(l, y, this.a);
					}
					removeRulesContainingSelector(l) {
						t.$Xgb(l, this.a);
					}
				}
				e.$mvc = n;
				class g {
					constructor(l, y, $) {
						(this.a = y),
							this.a.ref(),
							(this.b = $.parentTypeKey),
							(this.refCount = 0),
							(this.c = new o(f.BeforeContentClassName, $, l)),
							(this.d = new o(f.AfterContentClassName, $, l));
					}
					getOptions(l, y) {
						const $ = l.resolveDecorationOptions(this.b, !0);
						return (
							this.c && ($.beforeContentClassName = this.c.className),
							this.d && ($.afterContentClassName = this.d.className),
							$
						);
					}
					resolveDecorationCSSRules() {
						return this.a.sheet.cssRules;
					}
					dispose() {
						this.c && (this.c.dispose(), (this.c = null)),
							this.d && (this.d.dispose(), (this.d = null)),
							this.a.unref();
					}
				}
				class p {
					constructor(l, y, $, v) {
						(this.a = new w.$Zc()),
							(this.description = l),
							(this.b = $),
							this.b.ref(),
							(this.refCount = 0);
						const S = (D) => {
								const M = new o(D, v, y);
								if ((this.a.add(M), M.hasContent)) return M.className;
							},
							I = (D) => {
								const M = new o(D, v, y);
								return (
									this.a.add(M),
									M.hasContent
										? {
												className: M.className,
												hasLetterSpacing: M.hasLetterSpacing,
											}
										: null
								);
							};
						this.className = S(f.ClassName);
						const T = I(f.InlineClassName);
						if (
							(T &&
								((this.inlineClassName = T.className),
								(this.inlineClassNameAffectsLetterSpacing =
									T.hasLetterSpacing)),
							(this.beforeContentClassName = S(f.BeforeContentClassName)),
							(this.afterContentClassName = S(f.AfterContentClassName)),
							v.options.beforeInjectedText &&
								v.options.beforeInjectedText.contentText)
						) {
							const D = I(f.BeforeInjectedTextClassName);
							this.beforeInjectedText = {
								content: v.options.beforeInjectedText.contentText,
								inlineClassName: D?.className,
								inlineClassNameAffectsLetterSpacing:
									D?.hasLetterSpacing ||
									v.options.beforeInjectedText.affectsLetterSpacing,
							};
						}
						if (
							v.options.afterInjectedText &&
							v.options.afterInjectedText.contentText
						) {
							const D = I(f.AfterInjectedTextClassName);
							this.afterInjectedText = {
								content: v.options.afterInjectedText.contentText,
								inlineClassName: D?.className,
								inlineClassNameAffectsLetterSpacing:
									D?.hasLetterSpacing ||
									v.options.afterInjectedText.affectsLetterSpacing,
							};
						}
						this.glyphMarginClassName = S(f.GlyphMarginClassName);
						const P = v.options;
						(this.isWholeLine = !!P.isWholeLine),
							(this.stickiness = P.rangeBehavior);
						const k =
								(P.light && P.light.overviewRulerColor) || P.overviewRulerColor,
							L = (P.dark && P.dark.overviewRulerColor) || P.overviewRulerColor;
						(typeof k < "u" || typeof L < "u") &&
							(this.overviewRuler = {
								color: k || L,
								darkColor: L || k,
								position: P.overviewRulerLane || r.OverviewRulerLane.Center,
							});
					}
					getOptions(l, y) {
						return y
							? {
									description: this.description,
									inlineClassName: this.inlineClassName,
									beforeContentClassName: this.beforeContentClassName,
									afterContentClassName: this.afterContentClassName,
									className: this.className,
									glyphMarginClassName: this.glyphMarginClassName,
									isWholeLine: this.isWholeLine,
									overviewRuler: this.overviewRuler,
									stickiness: this.stickiness,
									before: this.beforeInjectedText,
									after: this.afterInjectedText,
								}
							: this;
					}
					resolveDecorationCSSRules() {
						return this.b.sheet.rules;
					}
					dispose() {
						this.a.dispose(), this.b.unref();
					}
				}
				e.$nvc = {
					color: "color:{0} !important;",
					opacity: "opacity:{0};",
					backgroundColor: "background-color:{0};",
					outline: "outline:{0};",
					outlineColor: "outline-color:{0};",
					outlineStyle: "outline-style:{0};",
					outlineWidth: "outline-width:{0};",
					border: "border:{0};",
					borderColor: "border-color:{0};",
					borderRadius: "border-radius:{0};",
					borderSpacing: "border-spacing:{0};",
					borderStyle: "border-style:{0};",
					borderWidth: "border-width:{0};",
					fontStyle: "font-style:{0};",
					fontWeight: "font-weight:{0};",
					fontSize: "font-size:{0};",
					fontFamily: "font-family:{0};",
					textDecoration: "text-decoration:{0};",
					cursor: "cursor:{0};",
					letterSpacing: "letter-spacing:{0};",
					gutterIconPath: "background:{0} center center no-repeat;",
					gutterIconSize: "background-size:{0};",
					contentText: "content:'{0}';",
					contentIconPath: "content:{0};",
					margin: "margin:{0};",
					padding: "padding:{0};",
					width: "width:{0};",
					height: "height:{0};",
					verticalAlign: "vertical-align:{0};",
				};
				class o {
					constructor(l, y, $) {
						(this.a = $.getColorTheme()),
							(this.f = l),
							(this.h = y),
							(this.i = !1),
							(this.d = !1),
							(this.e = !1);
						let v = b.getClassName(this.h.key, l);
						this.h.parentTypeKey &&
							(v = v + " " + b.getClassName(this.h.parentTypeKey, l)),
							(this.b = v),
							(this.c = b.getSelector(this.h.key, this.h.parentTypeKey, l)),
							this.j(),
							this.i
								? (this.g = $.onDidColorThemeChange((S) => {
										(this.a = $.getColorTheme()), this.k(), this.j();
									}))
								: (this.g = null);
					}
					dispose() {
						this.d && (this.k(), (this.d = !1)),
							this.g && (this.g.dispose(), (this.g = null));
					}
					get hasContent() {
						return this.d;
					}
					get hasLetterSpacing() {
						return this.e;
					}
					get className() {
						return this.b;
					}
					j() {
						const l = this.h.options;
						let y, $, v;
						switch (this.f) {
							case f.ClassName:
								(y = this.l(l)), ($ = this.l(l.light)), (v = this.l(l.dark));
								break;
							case f.InlineClassName:
								(y = this.m(l)), ($ = this.m(l.light)), (v = this.m(l.dark));
								break;
							case f.GlyphMarginClassName:
								(y = this.o(l)), ($ = this.o(l.light)), (v = this.o(l.dark));
								break;
							case f.BeforeContentClassName:
								(y = this.n(l.before)),
									($ = this.n(l.light && l.light.before)),
									(v = this.n(l.dark && l.dark.before));
								break;
							case f.AfterContentClassName:
								(y = this.n(l.after)),
									($ = this.n(l.light && l.light.after)),
									(v = this.n(l.dark && l.dark.after));
								break;
							case f.BeforeInjectedTextClassName:
								(y = this.n(l.beforeInjectedText)),
									($ = this.n(l.light && l.light.beforeInjectedText)),
									(v = this.n(l.dark && l.dark.beforeInjectedText));
								break;
							case f.AfterInjectedTextClassName:
								(y = this.n(l.afterInjectedText)),
									($ = this.n(l.light && l.light.afterInjectedText)),
									(v = this.n(l.dark && l.dark.afterInjectedText));
								break;
							default:
								throw new Error("Unknown rule type: " + this.f);
						}
						const S = this.h.styleSheet;
						let I = !1;
						y.length > 0 && (S.insertRule(this.c, y), (I = !0)),
							$.length > 0 &&
								(S.insertRule(`.vs${this.c}, .hc-light${this.c}`, $), (I = !0)),
							v.length > 0 &&
								(S.insertRule(`.vs-dark${this.c}, .hc-black${this.c}`, v),
								(I = !0)),
							(this.d = I);
					}
					k() {
						this.h.styleSheet.removeRulesContainingSelector(this.c);
					}
					l(l) {
						if (!l) return "";
						const y = [];
						return (
							this.q(l, ["backgroundColor"], y),
							this.q(
								l,
								["outline", "outlineColor", "outlineStyle", "outlineWidth"],
								y,
							),
							this.p(l, y),
							y.join("")
						);
					}
					m(l) {
						if (!l) return "";
						const y = [];
						return (
							this.q(
								l,
								[
									"fontStyle",
									"fontWeight",
									"textDecoration",
									"cursor",
									"color",
									"opacity",
									"letterSpacing",
								],
								y,
							),
							l.letterSpacing && (this.e = !0),
							y.join("")
						);
					}
					n(l) {
						if (!l) return "";
						const y = [];
						if (typeof l < "u") {
							if (
								(this.p(l, y),
								typeof l.contentIconPath < "u" &&
									y.push(
										C.$kf(
											e.$nvc.contentIconPath,
											t.$vhb(d.URI.revive(l.contentIconPath)),
										),
									),
								typeof l.contentText == "string")
							) {
								const v = l.contentText
									.match(/^.*$/m)[0]
									.replace(/['\\]/g, "\\$&");
								y.push(C.$kf(e.$nvc.contentText, v));
							}
							this.q(
								l,
								[
									"verticalAlign",
									"fontStyle",
									"fontWeight",
									"fontSize",
									"fontFamily",
									"textDecoration",
									"color",
									"opacity",
									"backgroundColor",
									"margin",
									"padding",
								],
								y,
							),
								this.q(l, ["width", "height"], y) &&
									y.push("display:inline-block;");
						}
						return y.join("");
					}
					o(l) {
						if (!l) return "";
						const y = [];
						return (
							typeof l.gutterIconPath < "u" &&
								(y.push(
									C.$kf(
										e.$nvc.gutterIconPath,
										t.$vhb(d.URI.revive(l.gutterIconPath)),
									),
								),
								typeof l.gutterIconSize < "u" &&
									y.push(C.$kf(e.$nvc.gutterIconSize, l.gutterIconSize))),
							y.join("")
						);
					}
					p(l, y) {
						return this.q(
							l,
							[
								"border",
								"borderColor",
								"borderRadius",
								"borderSpacing",
								"borderStyle",
								"borderWidth",
							],
							y,
						)
							? (y.push(C.$kf("box-sizing: border-box;")), !0)
							: !1;
					}
					q(l, y, $) {
						const v = $.length;
						for (const S of y) {
							const I = this.r(l[S]);
							typeof I == "string" && $.push(C.$kf(e.$nvc[S], I));
						}
						return $.length !== v;
					}
					r(l) {
						if ((0, m.isThemeColor)(l)) {
							this.i = !0;
							const y = this.a.getColor(l.id);
							return y ? y.toString() : "transparent";
						}
						return l;
					}
				}
				var f;
				(function (s) {
					(s[(s.ClassName = 0)] = "ClassName"),
						(s[(s.InlineClassName = 1)] = "InlineClassName"),
						(s[(s.GlyphMarginClassName = 2)] = "GlyphMarginClassName"),
						(s[(s.BeforeContentClassName = 3)] = "BeforeContentClassName"),
						(s[(s.AfterContentClassName = 4)] = "AfterContentClassName"),
						(s[(s.BeforeInjectedTextClassName = 5)] =
							"BeforeInjectedTextClassName"),
						(s[(s.AfterInjectedTextClassName = 6)] =
							"AfterInjectedTextClassName");
				})(f || (f = {}));
				class b {
					static getClassName(l, y) {
						return "ced-" + l + "-" + y;
					}
					static getSelector(l, y, $) {
						let v = ".monaco-editor ." + this.getClassName(l, $);
						return (
							y && (v = v + "." + this.getClassName(y, $)),
							$ === f.BeforeContentClassName
								? (v += "::before")
								: $ === f.AfterContentClassName && (v += "::after"),
							v
						);
					}
				}
			},
		),
		define(
			de[2843],
			he([
				1, 0, 20, 35, 51, 72, 49, 5, 2770, 3, 7, 39, 114, 390, 10, 91, 180, 75,
				1617, 2689, 15,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oyc = void 0);
				let l = class extends r.$1c {
					constructor(I, T, P, k, L, D) {
						super(),
							(this.h = I),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.w = new Map()),
							T.onDidShowContextMenu(() => this.hideHover()),
							(this.a = this.D(new f.$lyc(this.n)));
					}
					showHover(I, T, P) {
						if (y(this.b) === y(I) || (this.c && this.b?.persistence?.sticky))
							return;
						(this.b = I), (this.f = I);
						const k = I.trapFocus || this.q.isScreenReaderOptimized(),
							L = (0, u.$Jgb)();
						P ||
							(k && L
								? L.classList.contains("monaco-hover") || (this.g = L)
								: (this.g = void 0));
						const D = new r.$Zc(),
							M = this.h.createInstance(m.$y$b, I);
						if (
							(I.persistence?.sticky && (M.isLocked = !0),
							M.onDispose(
								() => {
									this.c?.domNode &&
										(0, u.$Lgb)(this.c.domNode) &&
										this.g?.focus(),
										this.b === I && (this.b = void 0),
										D.dispose();
								},
								void 0,
								D,
							),
							!I.container)
						) {
							const N = (0, u.$Ygb)(I.target)
								? I.target
								: I.target.targetElements[0];
							I.container = this.n.getContainer((0, u.getWindow)(N));
						}
						if (
							(this.a.showContextView(new $(M, T), I.container),
							M.onRequestLayout(() => this.a.layout(), void 0, D),
							I.persistence?.sticky)
						)
							D.add(
								(0, u.$0fb)(
									(0, u.getWindow)(I.container).document,
									u.$$gb.MOUSE_DOWN,
									(N) => {
										!(0, u.$Bgb)(N.target, M.domNode) &&
											I.dontHideHoverOnClick !== !0 &&
											this.r();
									},
								),
							);
						else {
							if ("targetElements" in I.target)
								for (const A of I.target.targetElements)
									I.dontHideHoverOnClick !== !0 &&
										D.add((0, u.$0fb)(A, u.$$gb.CLICK, () => this.hideHover()));
							else
								D.add(
									(0, u.$0fb)(I.target, u.$$gb.CLICK, () => this.hideHover()),
								);
							const N = (0, u.$Jgb)();
							if (N) {
								const A = (0, u.getWindow)(N).document;
								D.add(
									(0, u.$0fb)(N, u.$$gb.KEY_DOWN, (R) =>
										this.t(R, M, !!I.persistence?.hideOnKeyDown),
									),
								),
									D.add(
										(0, u.$0fb)(A, u.$$gb.KEY_DOWN, (R) =>
											this.t(R, M, !!I.persistence?.hideOnKeyDown),
										),
									),
									D.add((0, u.$0fb)(N, u.$$gb.KEY_UP, (R) => this.u(R, M))),
									D.add((0, u.$0fb)(A, u.$$gb.KEY_UP, (R) => this.u(R, M)));
							}
						}
						if ("IntersectionObserver" in o.$Bfb) {
							const N = new IntersectionObserver((R) => this.s(R, M), {
									threshold: 0,
								}),
								A =
									"targetElements" in I.target
										? I.target.targetElements[0]
										: I.target;
							N.observe(A), D.add((0, r.$Yc)(() => N.disconnect()));
						}
						return (this.c = M), M;
					}
					hideHover() {
						this.c?.isLocked || !this.b || this.r();
					}
					r() {
						(this.c = void 0), (this.b = void 0), this.a.hideContextView();
					}
					s(I, T) {
						I[I.length - 1].isIntersecting || T.dispose();
					}
					showAndFocusLastHover() {
						this.f && this.showHover(this.f, !0, !0);
					}
					t(I, T, P) {
						if (I.key === "Alt") {
							T.isLocked = !0;
							return;
						}
						const k = new h.$7fb(I);
						this.j
							.resolveKeyboardEvent(k)
							.getSingleModifierDispatchChords()
							.some((D) => !!D) ||
							this.j.softDispatch(k, k.target).kind !==
								c.ResultKind.NoMatchingKb ||
							(P &&
								(!this.b?.trapFocus || I.key !== "Tab") &&
								(this.hideHover(), this.g?.focus()));
					}
					u(I, T) {
						I.key === "Alt" &&
							((T.isLocked = !1),
							T.isMouseIn || (this.hideHover(), this.g?.focus()));
					}
					setupManagedHover(I, T, P, k) {
						T.setAttribute("custom-hover", "true"),
							T.title !== "" &&
								(console.warn(
									"HTML element already has a title attribute, which will conflict with the custom hover. Please remove the title attribute.",
								),
								console.trace("Stack trace:", T.title),
								(T.title = ""));
						let L, D;
						const M = (V, G) => {
								const K = D !== void 0;
								V && (D?.dispose(), (D = void 0)),
									G && (L?.dispose(), (L = void 0)),
									K && (I.onDidHideHover?.(), (D = void 0));
							},
							N = (V, G, K, J) =>
								new s.$Wh(async () => {
									(!D || D.isDisposed) &&
										((D = new b.$nyc(I, K || T, V > 0)),
										await D.update(typeof P == "function" ? P() : P, G, {
											...k,
											trapFocus: J,
										}));
								}, V);
						let A = !1;
						const R = (0, u.$0fb)(
								T,
								u.$$gb.MOUSE_DOWN,
								() => {
									(A = !0), k?.dontHideHoverOnClick !== !0 && M(!0, !0);
								},
								!0,
							),
							O = (0, u.$0fb)(
								T,
								u.$$gb.MOUSE_UP,
								() => {
									A = !1;
								},
								!0,
							),
							B = (0, u.$0fb)(
								T,
								u.$$gb.MOUSE_LEAVE,
								(V) => {
									(A = !1), M(!1, V.fromElement === T);
								},
								!0,
							),
							U = (V) => {
								if (L) return;
								const G = new r.$Zc(),
									K = { targetElements: [T], dispose: () => {} };
								if (I.placement === void 0 || I.placement === "mouse") {
									const J = (W) => {
										(K.x = W.x + 10),
											(0, u.$Ygb)(W.target) &&
												v(W.target, T) !== T &&
												M(!0, !0);
									};
									G.add((0, u.$0fb)(T, u.$$gb.MOUSE_MOVE, J, !0));
								}
								(L = G),
									!((0, u.$Ygb)(V.target) && v(V.target, T) !== T) &&
										G.add(N(I.delay, !1, K));
							},
							z = (0, u.$0fb)(T, u.$$gb.MOUSE_OVER, U, !0),
							F = () => {
								if (A || L) return;
								const V = { targetElements: [T], dispose: () => {} },
									G = new r.$Zc(),
									K = () => M(!0, !0);
								G.add((0, u.$0fb)(T, u.$$gb.BLUR, K, !0)),
									G.add(N(I.delay, !1, V)),
									(L = G);
							};
						let x;
						const H = T.tagName.toLowerCase();
						H !== "input" &&
							H !== "textarea" &&
							(x = (0, u.$0fb)(T, u.$$gb.FOCUS, F, !0));
						const q = {
							show: (V) => {
								M(!1, !0), N(0, V, void 0, V);
							},
							hide: () => {
								M(!0, !0);
							},
							update: async (V, G) => {
								(P = V), await D?.update(P, void 0, G);
							},
							dispose: () => {
								this.w.delete(T),
									z.dispose(),
									B.dispose(),
									R.dispose(),
									O.dispose(),
									x?.dispose(),
									M(!0, !0);
							},
						};
						return this.w.set(T, q), q;
					}
					showManagedHover(I) {
						const T = this.w.get(I);
						T && T.show(!0);
					}
					dispose() {
						this.w.forEach((I) => I.dispose()), super.dispose();
					}
				};
				(e.$oyc = l),
					(e.$oyc = l =
						Ne(
							[
								j(0, d.$Li),
								j(1, C.$Xxb),
								j(2, a.$uZ),
								j(3, n.$gj),
								j(4, p.$jEb),
								j(5, g.$XK),
							],
							l,
						));
				function y(S) {
					if (S !== void 0) return S?.id ?? S;
				}
				class $ {
					get anchorPosition() {
						return this.a.anchor;
					}
					constructor(I, T = !1) {
						(this.a = I), (this.b = T), (this.layer = 1);
					}
					render(I) {
						return this.a.render(I), this.b && this.a.focus(), this.a;
					}
					getAnchor() {
						return { x: this.a.x, y: this.a.y };
					}
					layout() {
						this.a.layout();
					}
				}
				function v(S, I) {
					for (
						I = I ?? (0, u.getWindow)(S).document.body;
						!S.hasAttribute("custom-hover") && S !== I;
					)
						S = S.parentElement;
					return S;
				}
				(0, t.$lK)(E.$Uyb, l, t.InstantiationType.Delayed),
					(0, i.$oP)((S, I) => {
						const T = S.getColor(w.$HQ);
						T &&
							(I.addRule(
								`.monaco-workbench .workbench-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${T.transparent(0.5)}; }`,
							),
							I.addRule(
								`.monaco-workbench .workbench-hover hr { border-top: 1px solid ${T.transparent(0.5)}; }`,
							));
					});
			},
		),
		define(
			de[2844],
			he([1, 0, 7, 194, 203, 303, 98, 35, 38]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nvb = void 0),
					(t = mt(t));
				class r extends E.$yub {
					constructor(a, h, c, n) {
						super(a);
						const g = this._context.configuration.options,
							p = g.get(m.EditorOption.scrollbar),
							o = g.get(m.EditorOption.mouseWheelScrollSensitivity),
							f = g.get(m.EditorOption.fastScrollSensitivity),
							b = g.get(m.EditorOption.scrollPredominantAxis),
							s = {
								listenOnDomNode: c.domNode,
								className: "editor-scrollable " + (0, d.$mP)(a.theme.type),
								useShadows: !1,
								lazyRender: !0,
								vertical: p.vertical,
								horizontal: p.horizontal,
								verticalHasArrows: p.verticalHasArrows,
								horizontalHasArrows: p.horizontalHasArrows,
								verticalScrollbarSize: p.verticalScrollbarSize,
								verticalSliderSize: p.verticalSliderSize,
								horizontalScrollbarSize: p.horizontalScrollbarSize,
								horizontalSliderSize: p.horizontalSliderSize,
								handleMouseWheel: p.handleMouseWheel,
								ignoreVerticalScrolling: p.ignoreVerticalScrolling,
								alwaysConsumeMouseWheel: p.alwaysConsumeMouseWheel,
								arrowSize: p.arrowSize,
								mouseWheelScrollSensitivity: o,
								fastScrollSensitivity: f,
								scrollPredominantAxis: b,
								scrollByPage: p.scrollByPage,
							};
						(this.a = this.D(
							new w.$6hb(
								h.domNode,
								s,
								this._context.viewLayout.getScrollable(),
							),
						)),
							E.$zub.write(
								this.a.getDomNode(),
								E.PartFingerprint.ScrollableElement,
							),
							(this.b = (0, i.$Shb)(this.a.getDomNode())),
							this.b.setPosition("absolute"),
							this.c();
						const l = (y, $, v) => {
							const S = {};
							if ($) {
								const I = y.scrollTop;
								I &&
									((S.scrollTop =
										this._context.viewLayout.getCurrentScrollTop() + I),
									(y.scrollTop = 0));
							}
							if (v) {
								const I = y.scrollLeft;
								I &&
									((S.scrollLeft =
										this._context.viewLayout.getCurrentScrollLeft() + I),
									(y.scrollLeft = 0));
							}
							this._context.viewModel.viewLayout.setScrollPosition(
								S,
								C.ScrollType.Immediate,
							);
						};
						this.D(t.$0fb(c.domNode, "scroll", (y) => l(c.domNode, !0, !0))),
							this.D(t.$0fb(h.domNode, "scroll", (y) => l(h.domNode, !0, !1))),
							this.D(t.$0fb(n.domNode, "scroll", (y) => l(n.domNode, !0, !1))),
							this.D(
								t.$0fb(this.b.domNode, "scroll", (y) =>
									l(this.b.domNode, !0, !1),
								),
							);
					}
					dispose() {
						super.dispose();
					}
					c() {
						const a = this._context.configuration.options,
							h = a.get(m.EditorOption.layoutInfo);
						this.b.setLeft(h.contentLeft),
							a.get(m.EditorOption.minimap).side === "right"
								? this.b.setWidth(h.contentWidth + h.minimap.minimapWidth)
								: this.b.setWidth(h.contentWidth),
							this.b.setHeight(h.height);
					}
					getOverviewRulerLayoutInfo() {
						return this.a.getOverviewRulerLayoutInfo();
					}
					getDomNode() {
						return this.b;
					}
					delegateVerticalScrollbarPointerDown(a) {
						this.a.delegateVerticalScrollbarPointerDown(a);
					}
					delegateScrollFromMouseWheelEvent(a) {
						this.a.delegateScrollFromMouseWheelEvent(a);
					}
					onConfigurationChanged(a) {
						if (
							a.hasChanged(m.EditorOption.scrollbar) ||
							a.hasChanged(m.EditorOption.mouseWheelScrollSensitivity) ||
							a.hasChanged(m.EditorOption.fastScrollSensitivity)
						) {
							const h = this._context.configuration.options,
								c = h.get(m.EditorOption.scrollbar),
								n = h.get(m.EditorOption.mouseWheelScrollSensitivity),
								g = h.get(m.EditorOption.fastScrollSensitivity),
								p = h.get(m.EditorOption.scrollPredominantAxis),
								o = {
									vertical: c.vertical,
									horizontal: c.horizontal,
									verticalScrollbarSize: c.verticalScrollbarSize,
									horizontalScrollbarSize: c.horizontalScrollbarSize,
									scrollByPage: c.scrollByPage,
									handleMouseWheel: c.handleMouseWheel,
									mouseWheelScrollSensitivity: n,
									fastScrollSensitivity: g,
									scrollPredominantAxis: p,
								};
							this.a.updateOptions(o);
						}
						return a.hasChanged(m.EditorOption.layoutInfo) && this.c(), !0;
					}
					onScrollChanged(a) {
						return !0;
					}
					onThemeChanged(a) {
						return (
							this.a.updateClassName(
								"editor-scrollable " + (0, d.$mP)(this._context.theme.type),
							),
							!0
						);
					}
					prepareRender(a) {}
					render(a) {
						this.a.renderNow();
					}
				}
				e.$nvb = r;
			},
		),
		define(
			de[2845],
			he([1, 0, 591, 51, 35, 38, 2276]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kvb = void 0);
				var C;
				(function (c) {
					(c[(c.EXTERN = 0)] = "EXTERN"),
						(c[(c.INTERN = 1)] = "INTERN"),
						(c[(c.FLAT = 2)] = "FLAT");
				})(C || (C = {}));
				class d {
					constructor(n) {
						(this.left = n.left),
							(this.width = n.width),
							(this.startStyle = null),
							(this.endStyle = null);
					}
				}
				class m {
					constructor(n, g) {
						(this.lineNumber = n), (this.ranges = g);
					}
				}
				function r(c) {
					return new d(c);
				}
				function u(c) {
					return new m(c.lineNumber, c.ranges.map(r));
				}
				class a extends t.$_ub {
					static {
						this.a = "selected-text";
					}
					static {
						this.b = "top-left-radius";
					}
					static {
						this.c = "bottom-left-radius";
					}
					static {
						this.g = "top-right-radius";
					}
					static {
						this.m = "bottom-right-radius";
					}
					static {
						this.q = "monaco-editor-background";
					}
					static {
						this.r = 10;
					}
					constructor(n) {
						super(), (this.I = []), (this.s = n);
						const g = this.s.configuration.options;
						(this.t = g.get(E.EditorOption.roundedSelection)),
							(this.u = g.get(
								E.EditorOption.fontInfo,
							).typicalHalfwidthCharacterWidth),
							(this.w = []),
							(this.y = null),
							this.s.addEventHandler(this);
					}
					dispose() {
						this.s.removeEventHandler(this), (this.y = null), super.dispose();
					}
					onConfigurationChanged(n) {
						const g = this.s.configuration.options;
						return (
							(this.t = g.get(E.EditorOption.roundedSelection)),
							(this.u = g.get(
								E.EditorOption.fontInfo,
							).typicalHalfwidthCharacterWidth),
							!0
						);
					}
					onCursorStateChanged(n) {
						return (this.w = n.selections.slice(0)), !0;
					}
					onDecorationsChanged(n) {
						return !0;
					}
					onFlushed(n) {
						return !0;
					}
					onLinesChanged(n) {
						return !0;
					}
					onLinesDeleted(n) {
						return !0;
					}
					onLinesInserted(n) {
						return !0;
					}
					onScrollChanged(n) {
						return n.scrollTopChanged;
					}
					onZonesChanged(n) {
						return !0;
					}
					z(n) {
						for (let g = 0, p = n.length; g < p; g++)
							if (n[g].ranges.length > 1) return !0;
						return !1;
					}
					C(n, g, p) {
						const o = this.u / 4;
						let f = null,
							b = null;
						if (p && p.length > 0 && g.length > 0) {
							const s = g[0].lineNumber;
							if (s === n.startLineNumber)
								for (let y = 0; !f && y < p.length; y++)
									p[y].lineNumber === s && (f = p[y].ranges[0]);
							const l = g[g.length - 1].lineNumber;
							if (l === n.endLineNumber)
								for (let y = p.length - 1; !b && y >= 0; y--)
									p[y].lineNumber === l && (b = p[y].ranges[0]);
							f && !f.startStyle && (f = null),
								b && !b.startStyle && (b = null);
						}
						for (let s = 0, l = g.length; s < l; s++) {
							const y = g[s].ranges[0],
								$ = y.left,
								v = y.left + y.width,
								S = { top: C.EXTERN, bottom: C.EXTERN },
								I = { top: C.EXTERN, bottom: C.EXTERN };
							if (s > 0) {
								const T = g[s - 1].ranges[0].left,
									P = g[s - 1].ranges[0].left + g[s - 1].ranges[0].width;
								h($ - T) < o ? (S.top = C.FLAT) : $ > T && (S.top = C.INTERN),
									h(v - P) < o
										? (I.top = C.FLAT)
										: T < v && v < P && (I.top = C.INTERN);
							} else
								f && ((S.top = f.startStyle.top), (I.top = f.endStyle.top));
							if (s + 1 < l) {
								const T = g[s + 1].ranges[0].left,
									P = g[s + 1].ranges[0].left + g[s + 1].ranges[0].width;
								h($ - T) < o
									? (S.bottom = C.FLAT)
									: T < $ && $ < P && (S.bottom = C.INTERN),
									h(v - P) < o
										? (I.bottom = C.FLAT)
										: v < P && (I.bottom = C.INTERN);
							} else
								b &&
									((S.bottom = b.startStyle.bottom),
									(I.bottom = b.endStyle.bottom));
							(y.startStyle = S), (y.endStyle = I);
						}
					}
					F(n, g, p) {
						const f = (g.linesVisibleRangesForRange(n, !0) || []).map(u);
						return !this.z(f) && this.t && this.C(g.visibleRange, f, p), f;
					}
					G(n, g, p, o, f) {
						return (
							'<div class="cslr ' +
							p +
							'" style="top:' +
							n.toString() +
							"px;bottom:" +
							g.toString() +
							"px;left:" +
							o.toString() +
							"px;width:" +
							f.toString() +
							'px;"></div>'
						);
					}
					H(n, g, p, o) {
						if (o.length === 0) return;
						const f = !!o[0].ranges[0].startStyle,
							b = o[0].lineNumber,
							s = o[o.length - 1].lineNumber;
						for (let l = 0, y = o.length; l < y; l++) {
							const $ = o[l],
								v = $.lineNumber,
								S = v - g,
								I = p && v === b ? 1 : 0,
								T = p && v !== b && v === s ? 1 : 0;
							let P = "",
								k = "";
							for (let L = 0, D = $.ranges.length; L < D; L++) {
								const M = $.ranges[L];
								if (f) {
									const A = M.startStyle,
										R = M.endStyle;
									if (A.top === C.INTERN || A.bottom === C.INTERN) {
										P += this.G(I, T, a.a, M.left - a.r, a.r);
										let O = a.q;
										A.top === C.INTERN && (O += " " + a.g),
											A.bottom === C.INTERN && (O += " " + a.m),
											(P += this.G(I, T, O, M.left - a.r, a.r));
									}
									if (R.top === C.INTERN || R.bottom === C.INTERN) {
										P += this.G(I, T, a.a, M.left + M.width, a.r);
										let O = a.q;
										R.top === C.INTERN && (O += " " + a.b),
											R.bottom === C.INTERN && (O += " " + a.c),
											(P += this.G(I, T, O, M.left + M.width, a.r));
									}
								}
								let N = a.a;
								if (f) {
									const A = M.startStyle,
										R = M.endStyle;
									A.top === C.EXTERN && (N += " " + a.b),
										A.bottom === C.EXTERN && (N += " " + a.c),
										R.top === C.EXTERN && (N += " " + a.g),
										R.bottom === C.EXTERN && (N += " " + a.m);
								}
								k += this.G(I, T, N, M.left, M.width);
							}
							(n[S][0] += P), (n[S][1] += k);
						}
					}
					prepareRender(n) {
						const g = [],
							p = n.visibleRange.startLineNumber,
							o = n.visibleRange.endLineNumber;
						for (let b = p; b <= o; b++) {
							const s = b - p;
							g[s] = ["", ""];
						}
						const f = [];
						for (let b = 0, s = this.w.length; b < s; b++) {
							const l = this.w[b];
							if (l.isEmpty()) {
								f[b] = null;
								continue;
							}
							const y = this.F(l, n, this.I[b]);
							(f[b] = y), this.H(g, p, this.w.length > 1, y);
						}
						(this.I = f), (this.y = g.map(([b, s]) => b + s));
					}
					render(n, g) {
						if (!this.y) return "";
						const p = g - n;
						return p < 0 || p >= this.y.length ? "" : this.y[p];
					}
				}
				(e.$Kvb = a),
					(0, w.$oP)((c, n) => {
						const g = c.getColor(i.$sQ);
						g &&
							!g.isTransparent() &&
							n.addRule(
								`.monaco-editor .view-line span.inline-selected-text { color: ${g}; }`,
							);
					});
				function h(c) {
					return c < 0 ? -c : c;
				}
			},
		),
		define(
			de[1663],
			he([1, 0, 7, 194, 1128, 3, 77, 370, 38, 48, 1546, 51, 35]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$xb = void 0);
				let n = class extends E.$1c {
					static {
						c = this;
					}
					static {
						this.a = 15;
					}
					static {
						this.ENTIRE_DIFF_OVERVIEW_WIDTH = this.a * 2;
					}
					constructor(p, o, f, b, s, l, y) {
						super(),
							(this.b = p),
							(this.c = o),
							(this.f = f),
							(this.g = b),
							(this.j = s),
							(this.n = l),
							(this.q = y),
							(this.width = c.ENTIRE_DIFF_OVERVIEW_WIDTH);
						const $ = (0, C.observableFromEvent)(
								this.q.onDidColorThemeChange,
								() => this.q.getColorTheme(),
							),
							v = (0, C.derived)((T) => {
								const P = $.read(T),
									k =
										P.getColor(a.$5Q) ||
										(P.getColor(a.$YQ) || a.$WQ).transparent(2),
									L =
										P.getColor(a.$6Q) ||
										(P.getColor(a.$ZQ) || a.$XQ).transparent(2);
								return { insertColor: k, removeColor: L };
							}),
							S = (0, i.$Shb)(document.createElement("div"));
						S.setClassName("diffViewport"), S.setPosition("absolute");
						const I = (0, t.h)("div.diffOverview", {
							style: {
								position: "absolute",
								top: "0px",
								width: c.ENTIRE_DIFF_OVERVIEW_WIDTH + "px",
							},
						}).root;
						this.D((0, d.$ywb)(I, S.domNode)),
							this.D(
								(0, t.$$fb)(I, t.$$gb.POINTER_DOWN, (T) => {
									this.b.modified.delegateVerticalScrollbarPointerDown(T);
								}),
							),
							this.D(
								(0, t.$0fb)(
									I,
									t.$$gb.MOUSE_WHEEL,
									(T) => {
										this.b.modified.delegateScrollFromMouseWheelEvent(T);
									},
									{ passive: !1 },
								),
							),
							this.D((0, d.$ywb)(this.c, I)),
							this.D(
								(0, C.autorunWithStore)((T, P) => {
									const k = this.f.read(T),
										L = this.b.original.createOverviewRuler(
											"original diffOverviewRuler",
										);
									L && (P.add(L), P.add((0, d.$ywb)(I, L.getDomNode())));
									const D = this.b.modified.createOverviewRuler(
										"modified diffOverviewRuler",
									);
									if (
										(D && (P.add(D), P.add((0, d.$ywb)(I, D.getDomNode()))),
										!L || !D)
									)
										return;
									const M = (0, C.observableSignalFromEvent)(
											"viewZoneChanged",
											this.b.original.onDidChangeViewZones,
										),
										N = (0, C.observableSignalFromEvent)(
											"viewZoneChanged",
											this.b.modified.onDidChangeViewZones,
										),
										A = (0, C.observableSignalFromEvent)(
											"hiddenRangesChanged",
											this.b.original.onDidChangeHiddenAreas,
										),
										R = (0, C.observableSignalFromEvent)(
											"hiddenRangesChanged",
											this.b.modified.onDidChangeHiddenAreas,
										);
									P.add(
										(0, C.autorun)((O) => {
											M.read(O), N.read(O), A.read(O), R.read(O);
											const B = v.read(O),
												U = k?.diff.read(O)?.mappings;
											function z(H, q, V) {
												const G = V._getViewModel();
												return G
													? H.filter((K) => K.length > 0).map((K) => {
															const J =
																	G.coordinatesConverter.convertModelPositionToViewPosition(
																		new r.$hL(K.startLineNumber, 1),
																	),
																W =
																	G.coordinatesConverter.convertModelPositionToViewPosition(
																		new r.$hL(K.endLineNumberExclusive, 1),
																	),
																X = W.lineNumber - J.lineNumber;
															return new u.$8sb(
																J.lineNumber,
																W.lineNumber,
																X,
																q.toString(),
															);
														})
													: [];
											}
											const F = z(
													(U || []).map((H) => H.lineRangeMapping.original),
													B.removeColor,
													this.b.original,
												),
												x = z(
													(U || []).map((H) => H.lineRangeMapping.modified),
													B.insertColor,
													this.b.modified,
												);
											L?.setZones(F), D?.setZones(x);
										}),
									),
										P.add(
											(0, C.autorun)((O) => {
												const B = this.j.read(O),
													U = this.g.read(O),
													z = this.n.read(O);
												if (z) {
													const F = c.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * c.a;
													L.setLayout({
														top: 0,
														height: B,
														right: F + c.a,
														width: c.a,
													}),
														D.setLayout({
															top: 0,
															height: B,
															right: 0,
															width: c.a,
														});
													const x = this.b.modifiedScrollTop.read(O),
														H = this.b.modifiedScrollHeight.read(O),
														q = this.b.modified.getOption(
															m.EditorOption.scrollbar,
														),
														V = new w.$Xhb(
															q.verticalHasArrows ? q.arrowSize : 0,
															q.verticalScrollbarSize,
															0,
															z.height,
															H,
															x,
														);
													S.setTop(V.getSliderPosition()),
														S.setHeight(V.getSliderSize());
												} else S.setTop(0), S.setHeight(0);
												(I.style.height = B + "px"),
													(I.style.left =
														U - c.ENTIRE_DIFF_OVERVIEW_WIDTH + "px"),
													S.setWidth(c.ENTIRE_DIFF_OVERVIEW_WIDTH);
											}),
										);
								}),
							);
					}
				};
				(e.$$xb = n), (e.$$xb = n = c = Ne([j(6, h.$iP)], n));
			},
		),
		define(
			de[2846],
			he([1, 0, 6, 3, 77, 542, 1663, 38, 48, 4, 5, 39]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_xb = void 0);
				let h = class extends i.$1c {
					get onDidContentSizeChange() {
						return this.a.event;
					}
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.b = n),
							(this.c = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.original = this.D(
								this.n(this.f.editorOptions.get(), this.g.originalEditor || {}),
							)),
							(this.modified = this.D(
								this.q(this.f.editorOptions.get(), this.g.modifiedEditor || {}),
							)),
							(this.a = this.D(new t.$re())),
							(this.modifiedScrollTop = (0, w.observableFromEvent)(
								this,
								this.modified.onDidScrollChange,
								() => this.modified.getScrollTop(),
							)),
							(this.modifiedScrollHeight = (0, w.observableFromEvent)(
								this,
								this.modified.onDidScrollChange,
								() => this.modified.getScrollHeight(),
							)),
							(this.modifiedObs = (0, E.$Uwb)(this.modified)),
							(this.originalObs = (0, E.$Uwb)(this.original)),
							(this.modifiedModel = this.modifiedObs.model),
							(this.modifiedSelections = (0, w.observableFromEvent)(
								this,
								this.modified.onDidChangeCursorSelection,
								() => this.modified.getSelections() ?? [],
							)),
							(this.modifiedCursor = (0, w.derivedOpts)(
								{ owner: this, equalsFn: m.$hL.equals },
								(l) =>
									this.modifiedSelections.read(l)[0]?.getPosition() ??
									new m.$hL(1, 1),
							)),
							(this.originalCursor = (0, w.observableFromEvent)(
								this,
								this.original.onDidChangeCursorPosition,
								() => this.original.getPosition() ?? new m.$hL(1, 1),
							)),
							(this.isOriginalFocused = (0, E.$Uwb)(this.original).isFocused),
							(this.isModifiedFocused = (0, E.$Uwb)(this.modified).isFocused),
							(this.isFocused = (0, w.derived)(
								this,
								(l) =>
									this.isOriginalFocused.read(l) ||
									this.isModifiedFocused.read(l),
							)),
							(this.g = null),
							this.D(
								(0, w.autorunHandleChanges)(
									{
										createEmptyChangeSummary: () => ({}),
										handleChange: (l, y) => (
											l.didChange(p.editorOptions) &&
												Object.assign(y, l.change.changedOptions),
											!0
										),
									},
									(l, y) => {
										p.editorOptions.read(l),
											this.f.renderSideBySide.read(l),
											this.modified.updateOptions(this.t(l, y)),
											this.original.updateOptions(this.s(l, y));
									},
								),
							);
					}
					n(n, g) {
						const p = this.s(void 0, n),
							o = this.r(this.j, this.b, p, g);
						return o.setContextValue("isInDiffLeftEditor", !0), o;
					}
					q(n, g) {
						const p = this.t(void 0, n),
							o = this.r(this.j, this.c, p, g);
						return o.setContextValue("isInDiffRightEditor", !0), o;
					}
					r(n, g, p, o) {
						const f = this.h(n, g, p, o);
						return (
							this.D(
								f.onDidContentSizeChange((b) => {
									const s =
											this.original.getContentWidth() +
											this.modified.getContentWidth() +
											C.$$xb.ENTIRE_DIFF_OVERVIEW_WIDTH,
										l = Math.max(
											this.modified.getContentHeight(),
											this.original.getContentHeight(),
										);
									this.a.fire({
										contentHeight: l,
										contentWidth: s,
										contentHeightChanged: b.contentHeightChanged,
										contentWidthChanged: b.contentWidthChanged,
									});
								}),
							),
							f
						);
					}
					s(n, g) {
						const p = this.u(g);
						return (
							this.f.renderSideBySide.get()
								? ((p.unicodeHighlight =
										this.f.editorOptions.get().unicodeHighlight || {}),
									(p.wordWrapOverride1 = this.f.diffWordWrap.get()))
								: ((p.wordWrapOverride1 = "off"),
									(p.wordWrapOverride2 = "off"),
									(p.stickyScroll = { enabled: !1 }),
									(p.unicodeHighlight = {
										nonBasicASCII: !1,
										ambiguousCharacters: !1,
										invisibleCharacters: !1,
									})),
							(p.glyphMargin = this.f.renderSideBySide.get()),
							g.originalAriaLabel && (p.ariaLabel = g.originalAriaLabel),
							(p.ariaLabel = this.w(p.ariaLabel)),
							(p.readOnly = !this.f.originalEditable.get()),
							(p.dropIntoEditor = { enabled: !p.readOnly }),
							(p.extraEditorClassName = "original-in-monaco-diff-editor"),
							p
						);
					}
					t(n, g) {
						const p = this.u(g);
						return (
							g.modifiedAriaLabel && (p.ariaLabel = g.modifiedAriaLabel),
							(p.ariaLabel = this.w(p.ariaLabel)),
							(p.wordWrapOverride1 = this.f.diffWordWrap.get()),
							(p.revealHorizontalRightPadding =
								d.EditorOptions.revealHorizontalRightPadding.defaultValue +
								C.$$xb.ENTIRE_DIFF_OVERVIEW_WIDTH),
							(p.scrollbar.verticalHasArrows = !1),
							(p.extraEditorClassName = "modified-in-monaco-diff-editor"),
							p
						);
					}
					u(n) {
						const g = { ...n, dimension: { height: 0, width: 0 } };
						return (
							(g.inDiffEditor = !0),
							(g.automaticLayout = !1),
							(g.scrollbar = { ...(g.scrollbar || {}) }),
							(g.folding = !1),
							(g.codeLens = this.f.diffCodeLens.get()),
							(g.fixedOverflowWidgets = !0),
							(g.minimap = { ...(g.minimap || {}) }),
							(g.minimap.enabled = !1),
							this.f.hideUnchangedRegions.get()
								? (g.stickyScroll = { enabled: !1 })
								: (g.stickyScroll = this.f.editorOptions.get().stickyScroll),
							g
						);
					}
					w(n) {
						n || (n = "");
						const g = (0, r.localize)(
							217,
							null,
							this.m
								.lookupKeybinding("editor.action.accessibilityHelp")
								?.getAriaLabel(),
						);
						return this.f.accessibilityVerbose.get()
							? n + g
							: n
								? n.replaceAll(g, "")
								: "";
					}
				};
				(e.$_xb = h), (e.$_xb = h = Ne([j(5, u.$Li), j(6, a.$uZ)], h));
			},
		),
		