import '../../../../../require.js';
import '../../../../../exports.js';
import '../../view/dynamicViewOverlay.js';
import '../../view/renderingContext.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../../css!vs/editor/browser/viewParts/decorations/decorations.js';
define(
			de[2715],
			he([1, 0, 591, 746, 38, 17, 2264]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mvb = void 0);
				class C extends t.$_ub {
					constructor(m) {
						super(), (this.c = m);
						const r = this.c.configuration.options;
						(this.g = r.get(
							w.EditorOption.fontInfo,
						).typicalHalfwidthCharacterWidth),
							(this.m = null),
							this.c.addEventHandler(this);
					}
					dispose() {
						this.c.removeEventHandler(this), (this.m = null), super.dispose();
					}
					onConfigurationChanged(m) {
						const r = this.c.configuration.options;
						return (
							(this.g = r.get(
								w.EditorOption.fontInfo,
							).typicalHalfwidthCharacterWidth),
							!0
						);
					}
					onDecorationsChanged(m) {
						return !0;
					}
					onFlushed(m) {
						return !0;
					}
					onLinesChanged(m) {
						return !0;
					}
					onLinesDeleted(m) {
						return !0;
					}
					onLinesInserted(m) {
						return !0;
					}
					onScrollChanged(m) {
						return m.scrollTopChanged || m.scrollWidthChanged;
					}
					onZonesChanged(m) {
						return !0;
					}
					prepareRender(m) {
						const r = m.getDecorationsInViewport();
						let u = [],
							a = 0;
						for (let g = 0, p = r.length; g < p; g++) {
							const o = r[g];
							o.options.className && (u[a++] = o);
						}
						u = u.sort((g, p) => {
							if (g.options.zIndex < p.options.zIndex) return -1;
							if (g.options.zIndex > p.options.zIndex) return 1;
							const o = g.options.className,
								f = p.options.className;
							return o < f
								? -1
								: o > f
									? 1
									: E.$iL.compareRangesUsingStarts(g.range, p.range);
						});
						const h = m.visibleRange.startLineNumber,
							c = m.visibleRange.endLineNumber,
							n = [];
						for (let g = h; g <= c; g++) {
							const p = g - h;
							n[p] = "";
						}
						this.n(m, u, n), this.q(m, u, n), (this.m = n);
					}
					n(m, r, u) {
						const a = m.visibleRange.startLineNumber,
							h = m.visibleRange.endLineNumber;
						for (let c = 0, n = r.length; c < n; c++) {
							const g = r[c];
							if (!g.options.isWholeLine) continue;
							const p =
									'<div class="cdr ' +
									g.options.className +
									'" style="left:0;width:100%;"></div>',
								o = Math.max(g.range.startLineNumber, a),
								f = Math.min(g.range.endLineNumber, h);
							for (let b = o; b <= f; b++) {
								const s = b - a;
								u[s] += p;
							}
						}
					}
					q(m, r, u) {
						const a = m.visibleRange.startLineNumber;
						let h = null,
							c = !1,
							n = null,
							g = !1;
						for (let p = 0, o = r.length; p < o; p++) {
							const f = r[p];
							if (f.options.isWholeLine) continue;
							const b = f.options.className,
								s = !!f.options.showIfCollapsed;
							let l = f.range;
							if (
								(s &&
									l.endColumn === 1 &&
									l.endLineNumber !== l.startLineNumber &&
									(l = new E.$iL(
										l.startLineNumber,
										l.startColumn,
										l.endLineNumber - 1,
										this.c.viewModel.getLineMaxColumn(l.endLineNumber - 1),
									)),
								h === b && c === s && E.$iL.areIntersectingOrTouching(n, l))
							) {
								n = E.$iL.plusRange(n, l);
								continue;
							}
							h !== null && this.r(m, n, h, g, c, a, u),
								(h = b),
								(c = s),
								(n = l),
								(g = f.options.shouldFillLineOnLineBreak ?? !1);
						}
						h !== null && this.r(m, n, h, g, c, a, u);
					}
					r(m, r, u, a, h, c, n) {
						const g = m.linesVisibleRangesForRange(r, u === "findMatch");
						if (g)
							for (let p = 0, o = g.length; p < o; p++) {
								const f = g[p];
								if (f.outsideRenderedLine) continue;
								const b = f.lineNumber - c;
								if (h && f.ranges.length === 1) {
									const s = f.ranges[0];
									if (s.width < this.g) {
										const l = Math.round(s.left + s.width / 2),
											y = Math.max(0, Math.round(l - this.g / 2));
										f.ranges[0] = new i.$tub(y, this.g);
									}
								}
								for (let s = 0, l = f.ranges.length; s < l; s++) {
									const y = a && f.continuesOnNextLine && l === 1,
										$ = f.ranges[s],
										v =
											'<div class="cdr ' +
											u +
											'" style="left:' +
											String($.left) +
											"px;width:" +
											(y ? "100%;" : String($.width) + "px;") +
											'"></div>';
									n[b] += v;
								}
							}
					}
					render(m, r) {
						if (!this.m) return "";
						const u = r - m;
						return u < 0 || u >= this.m.length ? "" : this.m[u];
					}
				}
				e.$mvb = C;
			},
		),
		