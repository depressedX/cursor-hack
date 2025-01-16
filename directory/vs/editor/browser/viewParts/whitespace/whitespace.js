define(
			de[2852],
			he([1, 0, 591, 38, 37, 120, 598, 48, 307, 2278]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nvb = void 0),
					(w = mt(w));
				class r extends t.$_ub {
					constructor(h) {
						super(),
							(this.a = h),
							(this.b = new u(this.a.configuration)),
							(this.c = []),
							(this.g = null),
							this.a.addEventHandler(this);
					}
					dispose() {
						this.a.removeEventHandler(this), (this.g = null), super.dispose();
					}
					onConfigurationChanged(h) {
						const c = new u(this.a.configuration);
						return this.b.equals(c)
							? h.hasChanged(i.EditorOption.layoutInfo)
							: ((this.b = c), !0);
					}
					onCursorStateChanged(h) {
						return (
							(this.c = h.selections), this.b.renderWhitespace === "selection"
						);
					}
					onDecorationsChanged(h) {
						return !0;
					}
					onFlushed(h) {
						return !0;
					}
					onLinesChanged(h) {
						return !0;
					}
					onLinesDeleted(h) {
						return !0;
					}
					onLinesInserted(h) {
						return !0;
					}
					onScrollChanged(h) {
						return h.scrollTopChanged;
					}
					onZonesChanged(h) {
						return !0;
					}
					prepareRender(h) {
						if (this.b.renderWhitespace === "none") {
							this.g = null;
							return;
						}
						const c = h.visibleRange.startLineNumber,
							g = h.visibleRange.endLineNumber - c + 1,
							p = new Array(g);
						for (let f = 0; f < g; f++) p[f] = !0;
						const o = this.a.viewModel.getMinimapLinesRenderingData(
							h.viewportData.startLineNumber,
							h.viewportData.endLineNumber,
							p,
						);
						this.g = [];
						for (
							let f = h.viewportData.startLineNumber;
							f <= h.viewportData.endLineNumber;
							f++
						) {
							const b = f - h.viewportData.startLineNumber,
								s = o.data[b];
							let l = null;
							if (this.b.renderWhitespace === "selection") {
								const y = this.c;
								for (const $ of y) {
									if ($.endLineNumber < f || $.startLineNumber > f) continue;
									const v =
											$.startLineNumber === f ? $.startColumn : s.minColumn,
										S = $.endLineNumber === f ? $.endColumn : s.maxColumn;
									v < S && (l || (l = []), l.push(new C.$Iub(v - 1, S - 1)));
								}
							}
							this.g[b] = this.j(h, f, l, s);
						}
					}
					j(h, c, n, g) {
						if (
							(this.b.renderWhitespace === "selection" && !n) ||
							(this.b.renderWhitespace === "trailing" &&
								g.continuesWithWrappedLine)
						)
							return "";
						const p = this.a.theme.getColor(m.$DT),
							o = this.b.renderWithSVG,
							f = g.content,
							b =
								this.b.stopRenderingLineAfter === -1
									? f.length
									: Math.min(this.b.stopRenderingLineAfter, f.length),
							s = g.continuesWithWrappedLine,
							l = g.minColumn - 1,
							y = this.b.renderWhitespace === "boundary",
							$ = this.b.renderWhitespace === "trailing",
							v = this.b.lineHeight,
							S = this.b.middotWidth,
							I = this.b.wsmiddotWidth,
							T = this.b.spaceWidth,
							P = Math.abs(I - T),
							k = Math.abs(S - T),
							L = P < k ? 11825 : 183,
							D = this.b.canUseHalfwidthRightwardsArrow;
						let M = "",
							N = !1,
							A = w.$Bf(f),
							R;
						A === -1 ? ((N = !0), (A = b), (R = b)) : (R = w.$Df(f));
						let O = 0,
							B = n && n[O],
							U = 0;
						for (let z = l; z < b; z++) {
							const F = f.charCodeAt(z);
							if (
								(B && z >= B.endOffset && (O++, (B = n && n[O])),
								(F !== E.CharCode.Tab && F !== E.CharCode.Space) ||
									($ && !N && z <= R))
							)
								continue;
							if (y && z >= A && z <= R && F === E.CharCode.Space) {
								const H = z - 1 >= 0 ? f.charCodeAt(z - 1) : E.CharCode.Null,
									q = z + 1 < b ? f.charCodeAt(z + 1) : E.CharCode.Null;
								if (H !== E.CharCode.Space && q !== E.CharCode.Space) continue;
							}
							if (y && s && z === b - 1) {
								const H = z - 1 >= 0 ? f.charCodeAt(z - 1) : E.CharCode.Null;
								if (
									F === E.CharCode.Space &&
									H !== E.CharCode.Space &&
									H !== E.CharCode.Tab
								)
									continue;
							}
							if (n && (!B || B.startOffset > z || B.endOffset <= z)) continue;
							const x = h.visibleRangeForPosition(new d.$hL(c, z + 1));
							x &&
								(o
									? ((U = Math.max(U, x.left)),
										F === E.CharCode.Tab
											? (M += this.m(v, T, x.left))
											: (M += `<circle cx="${(x.left + T / 2).toFixed(2)}" cy="${(v / 2).toFixed(2)}" r="${(T / 7).toFixed(2)}" />`))
									: F === E.CharCode.Tab
										? (M += `<div class="mwh" style="left:${x.left}px;height:${v}px;">${D ? "\uFFEB" : "\u2192"}</div>`)
										: (M += `<div class="mwh" style="left:${x.left}px;height:${v}px;">${String.fromCharCode(L)}</div>`));
						}
						return o
							? ((U = Math.round(U + T)),
								`<svg style="bottom:0;position:absolute;width:${U}px;height:${v}px" viewBox="0 0 ${U} ${v}" xmlns="http://www.w3.org/2000/svg" fill="${p}">` +
									M +
									"</svg>")
							: M;
					}
					m(h, c, n) {
						const g = c / 7,
							p = c,
							o = h / 2,
							f = n,
							b = { x: 0, y: g / 2 },
							s = { x: (100 / 125) * p, y: b.y },
							l = { x: s.x - 0.2 * s.x, y: s.y + 0.2 * s.x },
							y = { x: l.x + 0.1 * s.x, y: l.y + 0.1 * s.x },
							$ = { x: y.x + 0.35 * s.x, y: y.y - 0.35 * s.x },
							v = { x: $.x, y: -$.y },
							S = { x: y.x, y: -y.y },
							I = { x: l.x, y: -l.y },
							T = { x: s.x, y: -s.y },
							P = { x: b.x, y: -b.y };
						return `<path d="M ${[b, s, l, y, $, v, S, I, T, P].map((D) => `${(f + D.x).toFixed(2)} ${(o + D.y).toFixed(2)}`).join(" L ")}" />`;
					}
					render(h, c) {
						if (!this.g) return "";
						const n = c - h;
						return n < 0 || n >= this.g.length ? "" : this.g[n];
					}
				}
				e.$Nvb = r;
				class u {
					constructor(h) {
						const c = h.options,
							n = c.get(i.EditorOption.fontInfo),
							g = c.get(i.EditorOption.experimentalWhitespaceRendering);
						g === "off"
							? ((this.renderWhitespace = "none"), (this.renderWithSVG = !1))
							: g === "svg"
								? ((this.renderWhitespace = c.get(
										i.EditorOption.renderWhitespace,
									)),
									(this.renderWithSVG = !0))
								: ((this.renderWhitespace = c.get(
										i.EditorOption.renderWhitespace,
									)),
									(this.renderWithSVG = !1)),
							(this.spaceWidth = n.spaceWidth),
							(this.middotWidth = n.middotWidth),
							(this.wsmiddotWidth = n.wsmiddotWidth),
							(this.canUseHalfwidthRightwardsArrow =
								n.canUseHalfwidthRightwardsArrow),
							(this.lineHeight = c.get(i.EditorOption.lineHeight)),
							(this.stopRenderingLineAfter = c.get(
								i.EditorOption.stopRenderingLineAfter,
							));
					}
					equals(h) {
						return (
							this.renderWhitespace === h.renderWhitespace &&
							this.renderWithSVG === h.renderWithSVG &&
							this.spaceWidth === h.spaceWidth &&
							this.middotWidth === h.middotWidth &&
							this.wsmiddotWidth === h.wsmiddotWidth &&
							this.canUseHalfwidthRightwardsArrow ===
								h.canUseHalfwidthRightwardsArrow &&
							this.lineHeight === h.lineHeight &&
							this.stopRenderingLineAfter === h.stopRenderingLineAfter
						);
					}
				}
			},
		),
		