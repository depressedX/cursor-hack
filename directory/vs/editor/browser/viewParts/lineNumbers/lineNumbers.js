define(
			de[1664],
			he([1, 0, 12, 591, 38, 48, 17, 35, 307, 2267]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$avb = void 0),
					(t = mt(t));
				class r extends i.$_ub {
					static {
						this.CLASS_NAME = "line-numbers";
					}
					constructor(a) {
						super(),
							(this.c = a),
							this.w(),
							(this.s = new E.$hL(1, 1)),
							(this.t = null),
							(this.u = 1),
							this.c.addEventHandler(this);
					}
					w() {
						const a = this.c.configuration.options;
						this.g = a.get(w.EditorOption.lineHeight);
						const h = a.get(w.EditorOption.lineNumbers);
						(this.j = h.renderType),
							(this.m = h.renderFn),
							(this.n = a.get(w.EditorOption.renderFinalNewline));
						const c = a.get(w.EditorOption.layoutInfo);
						(this.q = c.lineNumbersLeft), (this.r = c.lineNumbersWidth);
					}
					dispose() {
						this.c.removeEventHandler(this), (this.t = null), super.dispose();
					}
					onConfigurationChanged(a) {
						return this.w(), !0;
					}
					onCursorStateChanged(a) {
						const h = a.selections[0].getPosition();
						this.s =
							this.c.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
								h,
							);
						let c = !1;
						return (
							this.u !== h.lineNumber && ((this.u = h.lineNumber), (c = !0)),
							(this.j === w.RenderLineNumbersType.Relative ||
								this.j === w.RenderLineNumbersType.Interval) &&
								(c = !0),
							c
						);
					}
					onFlushed(a) {
						return !0;
					}
					onLinesChanged(a) {
						return !0;
					}
					onLinesDeleted(a) {
						return !0;
					}
					onLinesInserted(a) {
						return !0;
					}
					onScrollChanged(a) {
						return a.scrollTopChanged;
					}
					onZonesChanged(a) {
						return !0;
					}
					onDecorationsChanged(a) {
						return a.affectsLineNumber;
					}
					y(a) {
						const h =
							this.c.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
								new E.$hL(a, 1),
							);
						if (h.column !== 1) return "";
						const c = h.lineNumber;
						if (this.m) return this.m(c);
						if (this.j === w.RenderLineNumbersType.Relative) {
							const n = Math.abs(this.s.lineNumber - c);
							return n === 0
								? '<span class="relative-current-line-number">' + c + "</span>"
								: String(n);
						}
						if (this.j === w.RenderLineNumbersType.Interval) {
							if (this.s.lineNumber === c || c % 10 === 0) return String(c);
							const n = this.c.viewModel.getLineCount();
							return c === n ? String(c) : "";
						}
						return String(c);
					}
					prepareRender(a) {
						if (this.j === w.RenderLineNumbersType.Off) {
							this.t = null;
							return;
						}
						const h = t.$n ? (this.g % 2 === 0 ? " lh-even" : " lh-odd") : "",
							c = a.visibleRange.startLineNumber,
							n = a.visibleRange.endLineNumber,
							g = this.c.viewModel
								.getDecorationsInViewport(a.visibleRange)
								.filter((b) => !!b.options.lineNumberClassName);
						g.sort((b, s) => C.$iL.compareRangesUsingEnds(b.range, s.range));
						let p = 0;
						const o = this.c.viewModel.getLineCount(),
							f = [];
						for (let b = c; b <= n; b++) {
							const s = b - c;
							let l = this.y(b),
								y = "";
							for (; p < g.length && g[p].range.endLineNumber < b; ) p++;
							for (let $ = p; $ < g.length; $++) {
								const { range: v, options: S } = g[$];
								v.startLineNumber <= b && (y += " " + S.lineNumberClassName);
							}
							if (!l && !y) {
								f[s] = "";
								continue;
							}
							b === o &&
								this.c.viewModel.getLineLength(b) === 0 &&
								(this.n === "off" && (l = ""),
								this.n === "dimmed" && (y += " dimmed-line-number")),
								b === this.u && (y += " active-line-number"),
								(f[s] =
									`<div class="${r.CLASS_NAME}${h}${y}" style="left:${this.q}px;width:${this.r}px;">${l}</div>`);
						}
						this.t = f;
					}
					render(a, h) {
						if (!this.t) return "";
						const c = h - a;
						return c < 0 || c >= this.t.length ? "" : this.t[c];
					}
				}
				(e.$avb = r),
					(0, d.$oP)((u, a) => {
						const h = u.getColor(m.$ET),
							c = u.getColor(m.$UT);
						c
							? a.addRule(
									`.monaco-editor .line-numbers.dimmed-line-number { color: ${c}; }`,
								)
							: h &&
								a.addRule(
									`.monaco-editor .line-numbers.dimmed-line-number { color: ${h.transparent(0.4)}; }`,
								);
					});
			},
		),
		