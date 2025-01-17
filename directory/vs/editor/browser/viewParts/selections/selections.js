import '../../../../../require.js';
import '../../../../../exports.js';
import '../../view/dynamicViewOverlay.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/config/editorOptions.js';
import '../../../../css!vs/editor/browser/viewParts/selections/selections.js';
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
		