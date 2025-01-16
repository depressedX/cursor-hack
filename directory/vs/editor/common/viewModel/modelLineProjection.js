define(
			de[2766],
			he([1, 0, 388, 48, 64, 590, 290]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$iwb = d);
				function d(n, g) {
					return n === null ? (g ? r.INSTANCE : u.INSTANCE) : new m(n, g);
				}
				class m {
					constructor(g, p) {
						(this.a = g), (this.b = p);
					}
					isVisible() {
						return this.b;
					}
					setVisible(g) {
						return (this.b = g), this;
					}
					getProjectionData() {
						return this.a;
					}
					getViewLineCount() {
						return this.b ? this.a.getOutputLineCount() : 0;
					}
					getViewLineContent(g, p, o) {
						this.d();
						const f = o > 0 ? this.a.breakOffsets[o - 1] : 0,
							b = this.a.breakOffsets[o];
						let s;
						if (this.a.injectionOffsets !== null) {
							const l = this.a.injectionOffsets.map(
								($, v) => new E.$uN(0, 0, $ + 1, this.a.injectionOptions[v], 0),
							);
							s = E.$uN
								.applyInjectedText(g.getLineContent(p), l)
								.substring(f, b);
						} else
							s = g.getValueInRange({
								startLineNumber: p,
								startColumn: f + 1,
								endLineNumber: p,
								endColumn: b + 1,
							});
						return o > 0 && (s = h(this.a.wrappedTextIndentLength) + s), s;
					}
					getViewLineLength(g, p, o) {
						return this.d(), this.a.getLineLength(o);
					}
					getViewLineMinColumn(g, p, o) {
						return this.d(), this.a.getMinOutputOffset(o) + 1;
					}
					getViewLineMaxColumn(g, p, o) {
						return this.d(), this.a.getMaxOutputOffset(o) + 1;
					}
					getViewLineData(g, p, o) {
						const f = new Array();
						return this.getViewLinesData(g, p, o, 1, 0, [!0], f), f[0];
					}
					getViewLinesData(g, p, o, f, b, s, l) {
						this.d();
						const y = this.a,
							$ = y.injectionOffsets,
							v = y.injectionOptions;
						let S = null;
						if ($) {
							S = [];
							let T = 0,
								P = 0;
							for (let k = 0; k < y.getOutputLineCount(); k++) {
								const L = new Array();
								S[k] = L;
								const D = k > 0 ? y.breakOffsets[k - 1] : 0,
									M = y.breakOffsets[k];
								for (; P < $.length; ) {
									const N = v[P].content.length,
										A = $[P] + T,
										R = A + N;
									if (A > M) break;
									if (D < R) {
										const O = v[P];
										if (O.inlineClassName) {
											const B = k > 0 ? y.wrappedTextIndentLength : 0,
												U = B + Math.max(A - D, 0),
												z = B + Math.min(R - D, M - D);
											U !== z &&
												L.push(
													new C.$4sb(
														U,
														z,
														O.inlineClassName,
														O.inlineClassNameAffectsLetterSpacing,
													),
												);
										}
									}
									if (R <= M) (T += N), P++;
									else break;
								}
							}
						}
						let I;
						$
							? (I = g.tokenization
									.getLineTokens(p)
									.withInserted(
										$.map((T, P) => ({
											offset: T,
											text: v[P].content,
											tokenMetadata: t.$7L.defaultTokenMetadata,
										})),
									))
							: (I = g.tokenization.getLineTokens(p));
						for (let T = o; T < o + f; T++) {
							const P = b + T - o;
							if (!s[P]) {
								l[P] = null;
								continue;
							}
							l[P] = this.c(I, S ? S[T] : null, T);
						}
					}
					c(g, p, o) {
						this.d();
						const f = this.a,
							b = o > 0 ? f.wrappedTextIndentLength : 0,
							s = o > 0 ? f.breakOffsets[o - 1] : 0,
							l = f.breakOffsets[o],
							y = g.sliceAndInflate(s, l, b);
						let $ = y.getLineContent();
						o > 0 && ($ = h(f.wrappedTextIndentLength) + $);
						const v = this.a.getMinOutputOffset(o) + 1,
							S = $.length + 1,
							I = o + 1 < this.getViewLineCount(),
							T = o === 0 ? 0 : f.breakOffsetsVisibleColumn[o - 1];
						return new C.$1sb($, I, v, S, T, y, p);
					}
					getModelColumnOfViewPosition(g, p) {
						return this.d(), this.a.translateToInputOffset(g, p - 1) + 1;
					}
					getViewPositionOfModelPosition(g, p, o = w.PositionAffinity.None) {
						return (
							this.d(), this.a.translateToOutputPosition(p - 1, o).toPosition(g)
						);
					}
					getViewLineNumberOfModelPosition(g, p) {
						this.d();
						const o = this.a.translateToOutputPosition(p - 1);
						return g + o.outputLineIndex;
					}
					normalizePosition(g, p, o) {
						const f = p.lineNumber - g;
						return this.a
							.normalizeOutputPosition(g, p.column - 1, o)
							.toPosition(f);
					}
					getInjectedTextAt(g, p) {
						return this.a.getInjectedText(g, p - 1);
					}
					d() {
						if (!this.b) throw new Error("Not supported");
					}
				}
				class r {
					static {
						this.INSTANCE = new r();
					}
					constructor() {}
					isVisible() {
						return !0;
					}
					setVisible(g) {
						return g ? this : u.INSTANCE;
					}
					getProjectionData() {
						return null;
					}
					getViewLineCount() {
						return 1;
					}
					getViewLineContent(g, p, o) {
						return g.getLineContent(p);
					}
					getViewLineLength(g, p, o) {
						return g.getLineLength(p);
					}
					getViewLineMinColumn(g, p, o) {
						return g.getLineMinColumn(p);
					}
					getViewLineMaxColumn(g, p, o) {
						return g.getLineMaxColumn(p);
					}
					getViewLineData(g, p, o) {
						const f = g.tokenization.getLineTokens(p),
							b = f.getLineContent();
						return new C.$1sb(b, !1, 1, b.length + 1, 0, f.inflate(), null);
					}
					getViewLinesData(g, p, o, f, b, s, l) {
						if (!s[b]) {
							l[b] = null;
							return;
						}
						l[b] = this.getViewLineData(g, p, 0);
					}
					getModelColumnOfViewPosition(g, p) {
						return p;
					}
					getViewPositionOfModelPosition(g, p) {
						return new i.$hL(g, p);
					}
					getViewLineNumberOfModelPosition(g, p) {
						return g;
					}
					normalizePosition(g, p, o) {
						return p;
					}
					getInjectedTextAt(g, p) {
						return null;
					}
				}
				class u {
					static {
						this.INSTANCE = new u();
					}
					constructor() {}
					isVisible() {
						return !1;
					}
					setVisible(g) {
						return g ? r.INSTANCE : this;
					}
					getProjectionData() {
						return null;
					}
					getViewLineCount() {
						return 0;
					}
					getViewLineContent(g, p, o) {
						throw new Error("Not supported");
					}
					getViewLineLength(g, p, o) {
						throw new Error("Not supported");
					}
					getViewLineMinColumn(g, p, o) {
						throw new Error("Not supported");
					}
					getViewLineMaxColumn(g, p, o) {
						throw new Error("Not supported");
					}
					getViewLineData(g, p, o) {
						throw new Error("Not supported");
					}
					getViewLinesData(g, p, o, f, b, s, l) {
						throw new Error("Not supported");
					}
					getModelColumnOfViewPosition(g, p) {
						throw new Error("Not supported");
					}
					getViewPositionOfModelPosition(g, p) {
						throw new Error("Not supported");
					}
					getViewLineNumberOfModelPosition(g, p) {
						throw new Error("Not supported");
					}
					normalizePosition(g, p, o) {
						throw new Error("Not supported");
					}
					getInjectedTextAt(g, p) {
						throw new Error("Not supported");
					}
				}
				const a = [""];
				function h(n) {
					if (n >= a.length) for (let g = 1; g <= n; g++) a[g] = c(g);
					return a[n];
				}
				function c(n) {
					return new Array(n + 1).join(" ");
				}
			},
		),
		