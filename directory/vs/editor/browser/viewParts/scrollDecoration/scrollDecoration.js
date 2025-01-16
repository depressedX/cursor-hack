define(de[2719], he([1, 0, 194, 303, 38, 2275]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Jvb = void 0);
			class E extends i.$yub {
				constructor(d) {
					super(d), (this.b = 0), (this.c = 0), this.n(), (this.g = !1);
					const r = this._context.configuration.options.get(
						w.EditorOption.scrollbar,
					);
					(this.j = r.useShadows),
						(this.a = (0, t.$Shb)(document.createElement("div"))),
						this.a.setAttribute("role", "presentation"),
						this.a.setAttribute("aria-hidden", "true");
				}
				dispose() {
					super.dispose();
				}
				m() {
					const d = this.j && this.b > 0;
					return this.g !== d ? ((this.g = d), !0) : !1;
				}
				getDomNode() {
					return this.a;
				}
				n() {
					const m = this._context.configuration.options.get(
						w.EditorOption.layoutInfo,
					);
					m.minimap.renderMinimap === 0 ||
					(m.minimap.minimapWidth > 0 && m.minimap.minimapLeft === 0)
						? (this.c = m.width)
						: (this.c = m.width - m.verticalScrollbarWidth);
				}
				onConfigurationChanged(d) {
					const r = this._context.configuration.options.get(
						w.EditorOption.scrollbar,
					);
					return (this.j = r.useShadows), this.n(), this.m(), !0;
				}
				onScrollChanged(d) {
					return (this.b = d.scrollTop), this.m();
				}
				prepareRender(d) {}
				render(d) {
					this.a.setWidth(this.c),
						this.a.setClassName(this.g ? "scroll-decoration" : "");
				}
			}
			e.$Jvb = E;
		}),
		define(
			de[2720],
			he([1, 0, 7, 194, 37, 321, 38, 48, 17, 651]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tub = e.CursorPlurality = void 0),
					(t = mt(t)),
					(w = mt(w));
				class u {
					constructor(n, g, p, o, f, b, s) {
						(this.top = n),
							(this.left = g),
							(this.paddingLeft = p),
							(this.width = o),
							(this.height = f),
							(this.textContent = b),
							(this.textContentClassName = s);
					}
				}
				var a;
				(function (c) {
					(c[(c.Single = 0)] = "Single"),
						(c[(c.MultiPrimary = 1)] = "MultiPrimary"),
						(c[(c.MultiSecondary = 2)] = "MultiSecondary");
				})(a || (e.CursorPlurality = a = {}));
				class h {
					constructor(n, g) {
						this.a = n;
						const p = this.a.configuration.options,
							o = p.get(C.EditorOption.fontInfo);
						(this.c = p.get(C.EditorOption.cursorStyle)),
							(this.f = p.get(C.EditorOption.lineHeight)),
							(this.g = o.typicalHalfwidthCharacterWidth),
							(this.d = Math.min(p.get(C.EditorOption.cursorWidth), this.g)),
							(this.h = !0),
							(this.b = (0, i.$Shb)(document.createElement("div"))),
							this.b.setClassName(`cursor ${r.$0ob}`),
							this.b.setHeight(this.f),
							this.b.setTop(0),
							this.b.setLeft(0),
							(0, E.$jsb)(this.b, o),
							this.b.setDisplay("none"),
							(this.i = new d.$hL(1, 1)),
							(this.j = ""),
							this.setPlurality(g),
							(this.k = ""),
							(this.l = null);
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.i;
					}
					setPlurality(n) {
						switch (n) {
							default:
							case a.Single:
								this.j = "";
								break;
							case a.MultiPrimary:
								this.j = "cursor-primary";
								break;
							case a.MultiSecondary:
								this.j = "cursor-secondary";
								break;
						}
					}
					show() {
						this.h || (this.b.setVisibility("inherit"), (this.h = !0));
					}
					hide() {
						this.h && (this.b.setVisibility("hidden"), (this.h = !1));
					}
					onConfigurationChanged(n) {
						const g = this.a.configuration.options,
							p = g.get(C.EditorOption.fontInfo);
						return (
							(this.c = g.get(C.EditorOption.cursorStyle)),
							(this.f = g.get(C.EditorOption.lineHeight)),
							(this.g = p.typicalHalfwidthCharacterWidth),
							(this.d = Math.min(g.get(C.EditorOption.cursorWidth), this.g)),
							(0, E.$jsb)(this.b, p),
							!0
						);
					}
					onCursorPositionChanged(n, g) {
						return (
							g
								? (this.b.domNode.style.transitionProperty = "none")
								: (this.b.domNode.style.transitionProperty = ""),
							(this.i = n),
							!0
						);
					}
					m() {
						const { lineNumber: n, column: g } = this.i,
							p = this.a.viewModel.getLineContent(n),
							[o, f] = w.$Yf(p, g - 1);
						return [new d.$hL(n, o + 1), p.substring(o, f)];
					}
					n(n) {
						let g = "",
							p = "";
						const [o, f] = this.m();
						if (
							this.c === C.TextEditorCursorStyle.Line ||
							this.c === C.TextEditorCursorStyle.LineThin
						) {
							const S = n.visibleRangeForPosition(o);
							if (!S || S.outsideRenderedLine) return null;
							const I = t.getWindow(this.b.domNode);
							let T;
							this.c === C.TextEditorCursorStyle.Line
								? ((T = t.$qhb(I, this.d > 0 ? this.d : 2)),
									T > 2 && ((g = f), (p = this.o(o))))
								: (T = t.$qhb(I, 1));
							let P = S.left,
								k = 0;
							T >= 2 && P >= 1 && ((k = 1), (P -= k));
							const L =
								n.getVerticalOffsetForLineNumber(o.lineNumber) -
								n.bigNumbersDelta;
							return new u(L, P, k, T, this.f, g, p);
						}
						const b = n.linesVisibleRangesForRange(
							new m.$iL(
								o.lineNumber,
								o.column,
								o.lineNumber,
								o.column + f.length,
							),
							!1,
						);
						if (!b || b.length === 0) return null;
						const s = b[0];
						if (s.outsideRenderedLine || s.ranges.length === 0) return null;
						const l = s.ranges[0],
							y = f === "	" ? this.g : l.width < 1 ? this.g : l.width;
						this.c === C.TextEditorCursorStyle.Block &&
							((g = f), (p = this.o(o)));
						let $ =
								n.getVerticalOffsetForLineNumber(o.lineNumber) -
								n.bigNumbersDelta,
							v = this.f;
						return (
							(this.c === C.TextEditorCursorStyle.Underline ||
								this.c === C.TextEditorCursorStyle.UnderlineThin) &&
								(($ += this.f - 2), (v = 2)),
							new u($, l.left, 0, y, v, g, p)
						);
					}
					o(n) {
						const g = this.a.viewModel.getViewLineData(n.lineNumber),
							p = g.tokens.findTokenIndexAtOffset(n.column - 1);
						return g.tokens.getClassName(p);
					}
					prepareRender(n) {
						this.l = this.n(n);
					}
					render(n) {
						return this.l
							? (this.k !== this.l.textContent &&
									((this.k = this.l.textContent),
									(this.b.domNode.textContent = this.k)),
								this.b.setClassName(
									`cursor ${this.j} ${r.$0ob} ${this.l.textContentClassName}`,
								),
								this.b.setDisplay("block"),
								this.b.setTop(this.l.top),
								this.b.setLeft(this.l.left),
								this.b.setPaddingLeft(this.l.paddingLeft),
								this.b.setWidth(this.l.width),
								this.b.setLineHeight(this.l.height),
								this.b.setHeight(this.l.height),
								{
									domNode: this.b.domNode,
									position: this.i,
									contentLeft: this.l.left,
									height: this.l.height,
									width: 2,
								})
							: (this.b.setDisplay("none"), null);
					}
				}
				e.$Tub = h;
			},
		),
		define(
			de[2721],
			he([1, 0, 194, 29, 303, 48, 38]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mvb = void 0);
				const d = () => {
					throw new Error("Invalid change accessor");
				};
				class m extends w.$yub {
					constructor(a) {
						super(a);
						const h = this._context.configuration.options,
							c = h.get(C.EditorOption.layoutInfo);
						(this.b = h.get(C.EditorOption.lineHeight)),
							(this.c = c.contentWidth),
							(this.g = c.contentLeft),
							(this.domNode = (0, t.$Shb)(document.createElement("div"))),
							this.domNode.setClassName("view-zones"),
							this.domNode.setPosition("absolute"),
							this.domNode.setAttribute("role", "presentation"),
							this.domNode.setAttribute("aria-hidden", "true"),
							(this.marginDomNode = (0, t.$Shb)(document.createElement("div"))),
							this.marginDomNode.setClassName("margin-view-zones"),
							this.marginDomNode.setPosition("absolute"),
							this.marginDomNode.setAttribute("role", "presentation"),
							this.marginDomNode.setAttribute("aria-hidden", "true"),
							(this.a = {});
					}
					dispose() {
						super.dispose(), (this.a = {});
					}
					j() {
						const a = this._context.viewLayout.getWhitespaces(),
							h = new Map();
						for (const n of a) h.set(n.id, n);
						let c = !1;
						return (
							this._context.viewModel.changeWhitespace((n) => {
								const g = Object.keys(this.a);
								for (let p = 0, o = g.length; p < o; p++) {
									const f = g[p],
										b = this.a[f],
										s = this.n(b.delegate);
									b.isInHiddenArea = s.isInHiddenArea;
									const l = h.get(f);
									l &&
										(l.afterLineNumber !== s.afterViewLineNumber ||
											l.height !== s.heightInPx) &&
										(n.changeOneWhitespace(
											f,
											s.afterViewLineNumber,
											s.heightInPx,
										),
										this.y(b.delegate, s.heightInPx),
										(c = !0));
								}
							}),
							c
						);
					}
					onConfigurationChanged(a) {
						const h = this._context.configuration.options,
							c = h.get(C.EditorOption.layoutInfo);
						return (
							(this.b = h.get(C.EditorOption.lineHeight)),
							(this.c = c.contentWidth),
							(this.g = c.contentLeft),
							a.hasChanged(C.EditorOption.lineHeight) && this.j(),
							!0
						);
					}
					onLineMappingChanged(a) {
						return this.j();
					}
					onLinesDeleted(a) {
						return !0;
					}
					onScrollChanged(a) {
						return a.scrollTopChanged || a.scrollWidthChanged;
					}
					onZonesChanged(a) {
						return !0;
					}
					onLinesInserted(a) {
						return !0;
					}
					m(a) {
						return a.ordinal ?? a.afterColumn ?? 1e4;
					}
					n(a) {
						if (a.afterLineNumber === 0)
							return {
								isInHiddenArea: !1,
								afterViewLineNumber: 0,
								heightInPx: this.u(a),
								minWidthInPx: this.w(a),
							};
						let h;
						if (typeof a.afterColumn < "u")
							h = this._context.viewModel.model.validatePosition({
								lineNumber: a.afterLineNumber,
								column: a.afterColumn,
							});
						else {
							const p = this._context.viewModel.model.validatePosition({
								lineNumber: a.afterLineNumber,
								column: 1,
							}).lineNumber;
							h = new E.$hL(
								p,
								this._context.viewModel.model.getLineMaxColumn(p),
							);
						}
						let c;
						h.column ===
						this._context.viewModel.model.getLineMaxColumn(h.lineNumber)
							? (c = this._context.viewModel.model.validatePosition({
									lineNumber: h.lineNumber + 1,
									column: 1,
								}))
							: (c = this._context.viewModel.model.validatePosition({
									lineNumber: h.lineNumber,
									column: h.column + 1,
								}));
						const n =
								this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									h,
									a.afterColumnAffinity,
									!0,
								),
							g =
								a.showInHiddenAreas ||
								this._context.viewModel.coordinatesConverter.modelPositionIsVisible(
									c,
								);
						return {
							isInHiddenArea: !g,
							showEvenWhenNotInViewport: a.showEvenWhenNotInViewport,
							afterViewLineNumber: n.lineNumber,
							heightInPx: g ? this.u(a) : 0,
							minWidthInPx: this.w(a),
						};
					}
					changeViewZones(a) {
						let h = !1;
						return (
							this._context.viewModel.changeWhitespace((c) => {
								const n = {
									addZone: (g) => ((h = !0), this.q(c, g)),
									removeZone: (g) => {
										g && (h = this.s(c, g) || h);
									},
									layoutZone: (g) => {
										g && (h = this.t(c, g) || h);
									},
								};
								r(a, n),
									(n.addZone = d),
									(n.removeZone = d),
									(n.layoutZone = d);
							}),
							h
						);
					}
					q(a, h) {
						const c = this.n(h),
							g = {
								whitespaceId: a.insertWhitespace(
									c.afterViewLineNumber,
									this.m(h),
									c.heightInPx,
									c.minWidthInPx,
								),
								delegate: h,
								isInHiddenArea: c.isInHiddenArea,
								isVisible: !1,
								domNode: (0, t.$Shb)(h.domNode),
								marginDomNode: h.marginDomNode
									? (0, t.$Shb)(h.marginDomNode)
									: null,
								showEvenWhenNotInViewport: h.showEvenWhenNotInViewport,
							};
						return (
							this.y(g.delegate, c.heightInPx),
							g.domNode.setPosition("absolute"),
							(g.domNode.domNode.style.width = "100%"),
							g.domNode.setDisplay("none"),
							g.domNode.setAttribute("monaco-view-zone", g.whitespaceId),
							this.domNode.appendChild(g.domNode),
							g.marginDomNode &&
								(g.marginDomNode.setPosition("absolute"),
								(g.marginDomNode.domNode.style.width = "100%"),
								g.marginDomNode.setDisplay("none"),
								g.marginDomNode.setAttribute(
									"monaco-view-zone",
									g.whitespaceId,
								),
								this.marginDomNode.appendChild(g.marginDomNode)),
							(this.a[g.whitespaceId] = g),
							this.h(),
							g.whitespaceId
						);
					}
					s(a, h) {
						if (this.a.hasOwnProperty(h)) {
							const c = this.a[h];
							return (
								delete this.a[h],
								a.removeWhitespace(c.whitespaceId),
								c.domNode.removeAttribute("monaco-visible-view-zone"),
								c.domNode.removeAttribute("monaco-view-zone"),
								c.domNode.domNode.remove(),
								c.marginDomNode &&
									(c.marginDomNode.removeAttribute("monaco-visible-view-zone"),
									c.marginDomNode.removeAttribute("monaco-view-zone"),
									c.marginDomNode.domNode.remove()),
								this.h(),
								!0
							);
						}
						return !1;
					}
					t(a, h) {
						if (this.a.hasOwnProperty(h)) {
							const c = this.a[h],
								n = this.n(c.delegate);
							return (
								(c.isInHiddenArea = n.isInHiddenArea),
								a.changeOneWhitespace(
									c.whitespaceId,
									n.afterViewLineNumber,
									n.heightInPx,
								),
								this.y(c.delegate, n.heightInPx),
								this.h(),
								!0
							);
						}
						return !1;
					}
					shouldSuppressMouseDownOnViewZone(a) {
						return this.a.hasOwnProperty(a)
							? !!this.a[a].delegate.suppressMouseDown
							: !1;
					}
					u(a) {
						return typeof a.heightInPx == "number"
							? a.heightInPx
							: typeof a.heightInLines == "number"
								? this.b * a.heightInLines
								: this.b;
					}
					w(a) {
						return typeof a.minWidthInPx == "number" ? a.minWidthInPx : 0;
					}
					y(a, h) {
						if (typeof a.onComputedHeight == "function")
							try {
								a.onComputedHeight(h);
							} catch (c) {
								(0, i.$4)(c);
							}
					}
					z(a, h) {
						if (typeof a.onDomNodeTop == "function")
							try {
								a.onDomNodeTop(h);
							} catch (c) {
								(0, i.$4)(c);
							}
					}
					prepareRender(a) {}
					render(a) {
						const h = a.viewportData.whitespaceViewportData,
							c = {};
						let n = !1;
						for (const p of h)
							(this.a[p.id].isInHiddenArea &&
								!this.a[p.id].showEvenWhenNotInViewport) ||
								((c[p.id] = p), (n = !0));
						const g = Object.keys(this.a);
						for (let p = 0, o = g.length; p < o; p++) {
							const f = g[p],
								b = this.a[f];
							if (!c.hasOwnProperty(f) && b.showEvenWhenNotInViewport) continue;
							let s = 0,
								l = 0,
								y = "none";
							c.hasOwnProperty(f)
								? ((s = c[f].verticalOffset - a.bigNumbersDelta),
									(l = c[f].height),
									(y = "block"),
									b.isVisible ||
										(b.domNode.setAttribute("monaco-visible-view-zone", "true"),
										(b.isVisible = !0)),
									this.z(
										b.delegate,
										a.getScrolledTopFromAbsoluteTop(c[f].verticalOffset),
									))
								: (b.isVisible &&
										(b.domNode.removeAttribute("monaco-visible-view-zone"),
										(b.isVisible = !1)),
									this.z(b.delegate, a.getScrolledTopFromAbsoluteTop(-1e6))),
								b.domNode.setTop(s),
								b.domNode.setHeight(l),
								b.domNode.setDisplay(y),
								b.marginDomNode &&
									(b.marginDomNode.setTop(s),
									b.marginDomNode.setHeight(l),
									b.marginDomNode.setDisplay(y));
						}
						n &&
							(this.domNode.setWidth(Math.max(a.scrollWidth, this.c)),
							this.marginDomNode.setWidth(this.g));
					}
				}
				e.$Mvb = m;
				function r(u, a) {
					try {
						return u(a);
					} catch (h) {
						(0, i.$4)(h);
					}
				}
			},
		),
		define(
			de[1606],
			he([1, 0, 432, 321, 38, 462, 533, 598, 290]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2xb = e.$1xb = void 0),
					(e.$Zxb = u);
				const r = (0, t.$bjb)("diffEditorWidget", { createHTML: (n) => n });
				function u(n, g, p, o) {
					(0, i.$jsb)(o, g.fontInfo);
					const f = p.length > 0,
						b = new E.$KL(1e4);
					let s = 0,
						l = 0;
					const y = [];
					for (let I = 0; I < n.lineTokens.length; I++) {
						const T = I + 1,
							P = n.lineTokens[I],
							k = n.lineBreakData[I],
							L = C.$Fub.filter(p, T, 1, Number.MAX_SAFE_INTEGER);
						if (k) {
							let D = 0;
							for (const M of k.breakOffsets) {
								const N = P.sliceAndInflate(D, M, 0);
								(s = Math.max(
									s,
									c(
										l,
										N,
										C.$Fub.extractWrapped(L, D, M),
										f,
										n.mightContainNonBasicASCII,
										n.mightContainRTL,
										g,
										b,
									),
								)),
									l++,
									(D = M);
							}
							y.push(k.breakOffsets.length);
						} else
							y.push(1),
								(s = Math.max(
									s,
									c(
										l,
										P,
										L,
										f,
										n.mightContainNonBasicASCII,
										n.mightContainRTL,
										g,
										b,
									),
								)),
								l++;
					}
					s += g.scrollBeyondLastColumn;
					const $ = b.build(),
						v = r ? r.createHTML($) : $;
					o.innerHTML = v;
					const S = s * g.typicalHalfwidthCharacterWidth;
					return { heightInLines: l, minWidthInPx: S, viewLineCounts: y };
				}
				class a {
					constructor(g, p, o, f) {
						(this.lineTokens = g),
							(this.lineBreakData = p),
							(this.mightContainNonBasicASCII = o),
							(this.mightContainRTL = f);
					}
				}
				e.$1xb = a;
				class h {
					static fromEditor(g) {
						const p = g.getOptions(),
							o = p.get(w.EditorOption.fontInfo),
							f = p.get(w.EditorOption.layoutInfo);
						return new h(
							g.getModel()?.getOptions().tabSize || 0,
							o,
							p.get(w.EditorOption.disableMonospaceOptimizations),
							o.typicalHalfwidthCharacterWidth,
							p.get(w.EditorOption.scrollBeyondLastColumn),
							p.get(w.EditorOption.lineHeight),
							f.decorationsWidth,
							p.get(w.EditorOption.stopRenderingLineAfter),
							p.get(w.EditorOption.renderWhitespace),
							p.get(w.EditorOption.renderControlCharacters),
							p.get(w.EditorOption.fontLigatures),
						);
					}
					constructor(g, p, o, f, b, s, l, y, $, v, S) {
						(this.tabSize = g),
							(this.fontInfo = p),
							(this.disableMonospaceOptimizations = o),
							(this.typicalHalfwidthCharacterWidth = f),
							(this.scrollBeyondLastColumn = b),
							(this.lineHeight = s),
							(this.lineDecorationsWidth = l),
							(this.stopRenderingLineAfter = y),
							(this.renderWhitespace = $),
							(this.renderControlCharacters = v),
							(this.fontLigatures = S);
					}
				}
				e.$2xb = h;
				function c(n, g, p, o, f, b, s, l) {
					l.appendString('<div class="view-line'),
						o || l.appendString(" char-delete"),
						l.appendString('" style="top:'),
						l.appendString(String(n * s.lineHeight)),
						l.appendString('px;width:1000000px;">');
					const y = g.getLineContent(),
						$ = m.$2sb.isBasicASCII(y, f),
						v = m.$2sb.containsRTL(y, $, b),
						S = (0, d.$Nub)(
							new d.$Jub(
								s.fontInfo.isMonospace && !s.disableMonospaceOptimizations,
								s.fontInfo.canUseHalfwidthRightwardsArrow,
								y,
								!1,
								$,
								v,
								0,
								g,
								p,
								s.tabSize,
								0,
								s.fontInfo.spaceWidth,
								s.fontInfo.middotWidth,
								s.fontInfo.wsmiddotWidth,
								s.stopRenderingLineAfter,
								s.renderWhitespace,
								s.renderControlCharacters,
								s.fontLigatures !== w.EditorFontLigatures.OFF,
								null,
							),
							l,
						);
					return (
						l.appendString("</div>"),
						S.characterMapping.getHorizontalOffset(S.characterMapping.length)
					);
				}
			},
		),
		