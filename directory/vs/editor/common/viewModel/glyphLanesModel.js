define(de[2765], he([1, 0, 64]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$pwb = void 0);
			const i = t.GlyphMarginLane.Right;
			class w {
				constructor(C) {
					(this.b = 0),
						(this.c = 1),
						(this.a = new Uint8Array(Math.ceil(((C + 1) * i) / 8)));
				}
				reset(C) {
					const d = Math.ceil(((C + 1) * i) / 8);
					this.a.length < d ? (this.a = new Uint8Array(d)) : this.a.fill(0),
						(this.c = 1);
				}
				get requiredLanes() {
					return this.c;
				}
				push(C, d, m) {
					m && (this.b |= 1 << (C - 1));
					for (let r = d.startLineNumber; r <= d.endLineNumber; r++) {
						const u = i * r + (C - 1);
						(this.a[u >>> 3] |= 1 << (u % 8)),
							(this.c = Math.max(this.c, this.d(r)));
					}
				}
				getLanesAtLine(C) {
					const d = [];
					let m = i * C;
					for (let r = 0; r < i; r++)
						(this.b & (1 << r) || this.a[m >>> 3] & (1 << (m % 8))) &&
							d.push(r + 1),
							m++;
					return d.length ? d : [t.GlyphMarginLane.Center];
				}
				d(C) {
					let d = i * C,
						m = 0;
					for (let r = 0; r < i; r++)
						(this.b & (1 << r) || this.a[d >>> 3] & (1 << (d % 8))) && m++, d++;
					return m;
				}
			}
			e.$pwb = w;
		}),
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
		define(
			de[2767],
			he([1, 0, 120, 37, 38, 654, 590, 1629]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Svb = void 0),
					(i = mt(i));
				class m {
					static create(s) {
						return new m(
							s.get(w.EditorOption.wordWrapBreakBeforeCharacters),
							s.get(w.EditorOption.wordWrapBreakAfterCharacters),
						);
					}
					constructor(s, l) {
						this.a = new u(s, l);
					}
					createLineBreaksComputer(s, l, y, $, v) {
						const S = [],
							I = [],
							T = [];
						return {
							addRequest: (P, k, L) => {
								S.push(P), I.push(k), T.push(L);
							},
							finalize: () => {
								const P =
										s.typicalFullwidthCharacterWidth /
										s.typicalHalfwidthCharacterWidth,
									k = [];
								for (let L = 0, D = S.length; L < D; L++) {
									const M = I[L],
										N = T[L];
									N && !N.injectionOptions && !M
										? (k[L] = c(this.a, N, S[L], l, y, P, $, v))
										: (k[L] = n(this.a, S[L], M, l, y, P, $, v));
								}
								return (a.length = 0), (h.length = 0), k;
							},
						};
					}
				}
				e.$Svb = m;
				var r;
				(function (b) {
					(b[(b.NONE = 0)] = "NONE"),
						(b[(b.BREAK_BEFORE = 1)] = "BREAK_BEFORE"),
						(b[(b.BREAK_AFTER = 2)] = "BREAK_AFTER"),
						(b[(b.BREAK_IDEOGRAPHIC = 3)] = "BREAK_IDEOGRAPHIC");
				})(r || (r = {}));
				class u extends E.$NL {
					constructor(s, l) {
						super(r.NONE);
						for (let y = 0; y < s.length; y++)
							this.set(s.charCodeAt(y), r.BREAK_BEFORE);
						for (let y = 0; y < l.length; y++)
							this.set(l.charCodeAt(y), r.BREAK_AFTER);
					}
					get(s) {
						return s >= 0 && s < 256
							? this.a[s]
							: (s >= 12352 && s <= 12543) ||
									(s >= 13312 && s <= 19903) ||
									(s >= 19968 && s <= 40959)
								? r.BREAK_IDEOGRAPHIC
								: this.b.get(s) || this.c;
					}
				}
				let a = [],
					h = [];
				function c(b, s, l, y, $, v, S, I) {
					if ($ === -1) return null;
					const T = l.length;
					if (T <= 1) return null;
					const P = I === "keepAll",
						k = s.breakOffsets,
						L = s.breakOffsetsVisibleColumn,
						D = f(l, y, $, v, S),
						M = $ - D,
						N = a,
						A = h;
					let R = 0,
						O = 0,
						B = 0,
						U = $;
					const z = k.length;
					let F = 0;
					if (F >= 0) {
						let x = Math.abs(L[F] - U);
						for (; F + 1 < z; ) {
							const H = Math.abs(L[F + 1] - U);
							if (H >= x) break;
							(x = H), F++;
						}
					}
					for (; F < z; ) {
						let x = F < 0 ? 0 : k[F],
							H = F < 0 ? 0 : L[F];
						O > x && ((x = O), (H = B));
						let q = 0,
							V = 0,
							G = 0,
							K = 0;
						if (H <= U) {
							let W = H,
								X = x === 0 ? t.CharCode.Null : l.charCodeAt(x - 1),
								Y = x === 0 ? r.NONE : b.get(X),
								ie = !0;
							for (let ne = x; ne < T; ne++) {
								const ee = ne,
									_ = l.charCodeAt(ne);
								let te, Q;
								if (
									(i.$Qf(_)
										? (ne++, (te = r.NONE), (Q = 2))
										: ((te = b.get(_)), (Q = g(_, W, y, v))),
									ee > O && o(X, Y, _, te, P) && ((q = ee), (V = W)),
									(W += Q),
									W > U)
								) {
									ee > O ? ((G = ee), (K = W - Q)) : ((G = ne + 1), (K = W)),
										W - V > M && (q = 0),
										(ie = !1);
									break;
								}
								(X = _), (Y = te);
							}
							if (ie) {
								R > 0 &&
									((N[R] = k[k.length - 1]), (A[R] = L[k.length - 1]), R++);
								break;
							}
						}
						if (q === 0) {
							let W = H,
								X = l.charCodeAt(x),
								Y = b.get(X),
								ie = !1;
							for (let ne = x - 1; ne >= O; ne--) {
								const ee = ne + 1,
									_ = l.charCodeAt(ne);
								if (_ === t.CharCode.Tab) {
									ie = !0;
									break;
								}
								let te, Q;
								if (
									(i.$Rf(_)
										? (ne--, (te = r.NONE), (Q = 2))
										: ((te = b.get(_)), (Q = i.$5f(_) ? v : 1)),
									W <= U)
								) {
									if ((G === 0 && ((G = ee), (K = W)), W <= U - M)) break;
									if (o(_, te, X, Y, P)) {
										(q = ee), (V = W);
										break;
									}
								}
								(W -= Q), (X = _), (Y = te);
							}
							if (q !== 0) {
								const ne = M - (K - V);
								if (ne <= y) {
									const ee = l.charCodeAt(G);
									let _;
									i.$Qf(ee) ? (_ = 2) : (_ = g(ee, K, y, v)),
										ne - _ < 0 && (q = 0);
								}
							}
							if (ie) {
								F--;
								continue;
							}
						}
						if ((q === 0 && ((q = G), (V = K)), q <= O)) {
							const W = l.charCodeAt(O);
							i.$Qf(W)
								? ((q = O + 2), (V = B + 2))
								: ((q = O + 1), (V = B + g(W, B, y, v)));
						}
						for (
							O = q, N[R] = q, B = V, A[R] = V, R++, U = V + M;
							F < 0 || (F < z && L[F] < V);
						)
							F++;
						let J = Math.abs(L[F] - U);
						for (; F + 1 < z; ) {
							const W = Math.abs(L[F + 1] - U);
							if (W >= J) break;
							(J = W), F++;
						}
					}
					return R === 0
						? null
						: ((N.length = R),
							(A.length = R),
							(a = s.breakOffsets),
							(h = s.breakOffsetsVisibleColumn),
							(s.breakOffsets = N),
							(s.breakOffsetsVisibleColumn = A),
							(s.wrappedTextIndentLength = D),
							s);
				}
				function n(b, s, l, y, $, v, S, I) {
					const T = C.$uN.applyInjectedText(s, l);
					let P, k;
					if (
						(l && l.length > 0
							? ((P = l.map((V) => V.options)),
								(k = l.map((V) => V.column - 1)))
							: ((P = null), (k = null)),
						$ === -1)
					)
						return P ? new d.$usb(k, P, [T.length], [], 0) : null;
					const L = T.length;
					if (L <= 1) return P ? new d.$usb(k, P, [T.length], [], 0) : null;
					const D = I === "keepAll",
						M = f(T, y, $, v, S),
						N = $ - M,
						A = [],
						R = [];
					let O = 0,
						B = 0,
						U = 0,
						z = $,
						F = T.charCodeAt(0),
						x = b.get(F),
						H = g(F, 0, y, v),
						q = 1;
					i.$Qf(F) && ((H += 1), (F = T.charCodeAt(1)), (x = b.get(F)), q++);
					for (let V = q; V < L; V++) {
						const G = V,
							K = T.charCodeAt(V);
						let J, W;
						i.$Qf(K)
							? (V++, (J = r.NONE), (W = 2))
							: ((J = b.get(K)), (W = g(K, H, y, v))),
							o(F, x, K, J, D) && ((B = G), (U = H)),
							(H += W),
							H > z &&
								((B === 0 || H - U > N) && ((B = G), (U = H - W)),
								(A[O] = B),
								(R[O] = U),
								O++,
								(z = U + N),
								(B = 0)),
							(F = K),
							(x = J);
					}
					return O === 0 && (!l || l.length === 0)
						? null
						: ((A[O] = L), (R[O] = H), new d.$usb(k, P, A, R, M));
				}
				function g(b, s, l, y) {
					return b === t.CharCode.Tab
						? l - (s % l)
						: i.$5f(b) || b < 32
							? y
							: 1;
				}
				function p(b, s) {
					return s - (b % s);
				}
				function o(b, s, l, y, $) {
					return (
						l !== t.CharCode.Space &&
						((s === r.BREAK_AFTER && y !== r.BREAK_AFTER) ||
							(s !== r.BREAK_BEFORE && y === r.BREAK_BEFORE) ||
							(!$ && s === r.BREAK_IDEOGRAPHIC && y !== r.BREAK_AFTER) ||
							(!$ && y === r.BREAK_IDEOGRAPHIC && s !== r.BREAK_BEFORE))
					);
				}
				function f(b, s, l, y, $) {
					let v = 0;
					if ($ !== w.WrappingIndent.None) {
						const S = i.$Bf(b);
						if (S !== -1) {
							for (let T = 0; T < S; T++) {
								const P = b.charCodeAt(T) === t.CharCode.Tab ? p(v, s) : 1;
								v += P;
							}
							const I =
								$ === w.WrappingIndent.DeepIndent
									? 2
									: $ === w.WrappingIndent.Indent
										? 1
										: 0;
							for (let T = 0; T < I; T++) {
								const P = p(v, s);
								v += P;
							}
							v + y > l && (v = 0);
						}
					}
					return v;
				}
			},
		),
		define(
			de[1631],
			he([1, 0, 48, 17, 64, 290, 38, 171]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lwb = void 0),
					(e.$mwb = r),
					(e.$nwb = u),
					(e.$owb = a);
				class m {
					constructor(n, g, p, o, f) {
						(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = Object.create(null)),
							(this.g = null),
							(this.h = null);
					}
					k() {
						(this.g = null), (this.h = null);
					}
					dispose() {
						(this.f = Object.create(null)), this.k();
					}
					reset() {
						(this.f = Object.create(null)), this.k();
					}
					onModelDecorationsChanged() {
						(this.f = Object.create(null)), this.k();
					}
					onLineMappingChanged() {
						(this.f = Object.create(null)), this.k();
					}
					l(n) {
						const g = n.id;
						let p = this.f[g];
						if (!p) {
							const o = n.range,
								f = n.options;
							let b;
							if (f.isWholeLine) {
								const s = this.e.convertModelPositionToViewPosition(
										new t.$hL(o.startLineNumber, 1),
										w.PositionAffinity.Left,
										!1,
										!0,
									),
									l = this.e.convertModelPositionToViewPosition(
										new t.$hL(
											o.endLineNumber,
											this.b.getLineMaxColumn(o.endLineNumber),
										),
										w.PositionAffinity.Right,
									);
								b = new i.$iL(s.lineNumber, s.column, l.lineNumber, l.column);
							} else
								b = this.e.convertModelRangeToViewRange(
									o,
									w.PositionAffinity.Right,
								);
							(p = new E.$5sb(b, f)), (this.f[g] = p);
						}
						return p;
					}
					getMinimapDecorationsInRange(n) {
						return this.m(n, !0, !1).decorations;
					}
					getDecorationsViewportData(n) {
						let g = this.g !== null;
						return (
							(g = g && n.equalsRange(this.h)),
							g || ((this.g = this.m(n, !1, !1)), (this.h = n)),
							this.g
						);
					}
					getInlineDecorationsOnLine(n, g = !1, p = !1) {
						const o = new i.$iL(
							n,
							this.d.getViewLineMinColumn(n),
							n,
							this.d.getViewLineMaxColumn(n),
						);
						return this.m(o, g, p).inlineDecorations[0];
					}
					m(n, g, p) {
						const o = this.d.getDecorationsInRange(
								n,
								this.a,
								(0, C.filterValidationDecorations)(this.c.options),
								g,
								p,
							),
							f = n.startLineNumber,
							b = n.endLineNumber,
							s = [];
						let l = 0;
						const y = [];
						for (let $ = f; $ <= b; $++) y[$ - f] = [];
						for (let $ = 0, v = o.length; $ < v; $++) {
							const S = o[$],
								I = S.options;
							if (!r(this.b, S)) continue;
							const T = this.l(S),
								P = T.range;
							if (((s[l++] = T), I.inlineClassName)) {
								const k = new E.$3sb(
										P,
										I.inlineClassName,
										I.inlineClassNameAffectsLetterSpacing
											? E.InlineDecorationType.RegularAffectingLetterSpacing
											: E.InlineDecorationType.Regular,
									),
									L = Math.max(f, P.startLineNumber),
									D = Math.min(b, P.endLineNumber);
								for (let M = L; M <= D; M++) y[M - f].push(k);
							}
							if (
								I.beforeContentClassName &&
								f <= P.startLineNumber &&
								P.startLineNumber <= b
							) {
								const k = new E.$3sb(
									new i.$iL(
										P.startLineNumber,
										P.startColumn,
										P.startLineNumber,
										P.startColumn,
									),
									I.beforeContentClassName,
									E.InlineDecorationType.Before,
								);
								y[P.startLineNumber - f].push(k);
							}
							if (
								I.afterContentClassName &&
								f <= P.endLineNumber &&
								P.endLineNumber <= b
							) {
								const k = new E.$3sb(
									new i.$iL(
										P.endLineNumber,
										P.endColumn,
										P.endLineNumber,
										P.endColumn,
									),
									I.afterContentClassName,
									E.InlineDecorationType.After,
								);
								y[P.endLineNumber - f].push(k);
							}
						}
						return { decorations: s, inlineDecorations: y };
					}
				}
				e.$lwb = m;
				function r(c, n) {
					return !(
						(n.options.hideInCommentTokens && u(c, n)) ||
						(n.options.hideInStringTokens && a(c, n))
					);
				}
				function u(c, n) {
					return h(c, n.range, (g) => g === d.StandardTokenType.Comment);
				}
				function a(c, n) {
					return h(c, n.range, (g) => g === d.StandardTokenType.String);
				}
				function h(c, n, g) {
					for (let p = n.startLineNumber; p <= n.endLineNumber; p++) {
						const o = c.tokenization.getLineTokens(p),
							f = p === n.startLineNumber,
							b = p === n.endLineNumber;
						let s = f ? o.findTokenIndexAtOffset(n.startColumn - 1) : 0;
						for (
							;
							s < o.getCount() && !(b && o.getStartOffset(s) > n.endColumn - 1);
						) {
							if (!g(o.getStandardTokenType(s))) return !1;
							s++;
						}
					}
					return !0;
				}
			},
		),
		define(
			de[1632],
			he([
				1, 0, 7, 183, 50, 163, 29, 6, 3, 56, 199, 64, 1181, 4, 8, 49, 5, 39, 40,
				2294,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tzb = void 0),
					(t = mt(t));
				let s = class extends m.$1c {
					static {
						b = this;
					}
					static {
						this.a = "editor.widget.postEditWidget";
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						super(),
							(this.g = $),
							(this.h = v),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.q = k),
							(this.r = L),
							(this.s = M),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !0),
							this.u(),
							(this.f = S.bindTo(D)),
							this.f.set(!0),
							this.D((0, m.$Yc)(() => this.f.reset())),
							this.h.addContentWidget(this),
							this.h.layoutContentWidget(this),
							this.D((0, m.$Yc)(() => this.h.removeContentWidget(this))),
							this.D(
								this.h.onDidChangeCursorPosition((N) => {
									T.containsPosition(N.position) || this.dispose();
								}),
							),
							this.D(
								d.Event.runAndSubscribe(M.onDidUpdateKeybindings, () => {
									this.t();
								}),
							);
					}
					t() {
						const $ = this.s.lookupKeybinding(this.j.id)?.getLabel();
						this.c.element.title = this.j.label + ($ ? ` (${$})` : "");
					}
					u() {
						(this.b = t.$(".post-edit-widget")),
							(this.c = this.D(new i.$oob(this.b, { supportIcons: !0 }))),
							(this.c.label = "$(insert)"),
							this.D(t.$0fb(this.b, t.$$gb.CLICK, () => this.showSelector()));
					}
					getId() {
						return b.a + "." + this.g;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return {
							position: this.m.getEndPosition(),
							preference: [r.ContentWidgetPositionPreference.BELOW],
						};
					}
					showSelector() {
						this.r.showContextMenu({
							getAnchor: () => {
								const $ = t.$tgb(this.c.element);
								return { x: $.left + $.width, y: $.top + $.height };
							},
							getActions: () =>
								this.n.allEdits.map(($, v) =>
									(0, w.$wj)({
										id: "",
										label: $.title,
										checked: v === this.n.activeEditIndex,
										run: () => {
											if (v !== this.n.activeEditIndex) return this.q(v);
										},
									}),
								),
						});
					}
				};
				s = b = Ne([j(7, g.$Xxb), j(8, n.$6j), j(9, o.$uZ)], s);
				let l = class extends m.$1c {
					constructor($, v, S, I, T, P, k) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.a = this.D(new m.$2c())),
							this.D(
								d.Event.any(
									v.onDidChangeModel,
									v.onDidChangeModelContent,
								)(() => this.clear()),
							);
					}
					async applyEditAndShowIfNeeded($, v, S, I, T) {
						const P = this.c.getModel();
						if (!P || !$.length) return;
						const k = v.allEdits.at(v.activeEditIndex);
						if (!k) return;
						const L = async (U) => {
								const z = this.c.getModel();
								z &&
									(await z.undo(),
									this.applyEditAndShowIfNeeded(
										$,
										{ activeEditIndex: U, allEdits: v.allEdits },
										S,
										I,
										T,
									));
							},
							D = (U, z) => {
								(0, C.$8)(U) || (this.m.error(z), S && this.show($[0], v, L));
							};
						let M;
						try {
							M = await I(k, T);
						} catch (U) {
							return D(U, (0, c.localize)(1001, null, k.title, (0, E.$xj)(U)));
						}
						if (T.isCancellationRequested) return;
						const N = (0, h.$Jzb)(P.uri, $, M),
							A = $[0],
							R = P.deltaDecorations(
								[],
								[
									{
										range: A,
										options: {
											description: "paste-line-suffix",
											stickiness:
												a.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
										},
									},
								],
							);
						this.c.focus();
						let O, B;
						try {
							(O = await this.j.apply(N, { editor: this.c, token: T })),
								(B = P.getDecorationRange(R[0]));
						} catch (U) {
							return D(U, (0, c.localize)(1002, null, k.title, (0, E.$xj)(U)));
						} finally {
							P.deltaDecorations(R, []);
						}
						T.isCancellationRequested ||
							(S &&
								O.isApplied &&
								v.allEdits.length > 1 &&
								this.show(B ?? A, v, L));
					}
					show($, v, S) {
						this.clear(),
							this.c.hasModel() &&
								(this.a.value = this.h.createInstance(
									s,
									this.b,
									this.c,
									this.f,
									this.g,
									$,
									v,
									S,
								));
					}
					clear() {
						this.a.clear();
					}
					tryShowSelector() {
						this.a.value?.showSelector();
					}
				};
				(e.$Tzb = l),
					(e.$Tzb = l = Ne([j(4, p.$Li), j(5, u.$rzb), j(6, f.$4N)], l));
			},
		),
		define(
			de[2768],
			he([1, 0, 7, 56, 38, 601, 39, 2726, 8, 10, 91, 71, 160, 64, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uhc = void 0),
					(t = mt(t));
				const p = 30,
					o = 6;
				let f = class extends d.$UDb {
					static {
						g = this;
					}
					static {
						this.ID = "editor.contrib.resizableContentHoverWidget";
					}
					static {
						this.n = new t.$pgb(0, 0);
					}
					get isVisibleFromKeyboard() {
						return this.q?.source === E.HoverStartSource.Keyboard;
					}
					get isVisible() {
						return this.w.get() ?? !1;
					}
					get isFocused() {
						return this.z.get() ?? !1;
					}
					constructor(l, y, $, v, S) {
						const I = l.getOption(w.EditorOption.lineHeight) + 8,
							T = 150,
							P = new t.$pgb(T, I);
						super(l, P),
							(this.F = $),
							(this.G = v),
							(this.H = S),
							(this.u = this.D(new h.$9hb())),
							(this.C = this.D(new n.$re())),
							(this.onDidResize = this.C.event),
							(this.s = P),
							(this.w = a.EditorContextKeys.hoverVisible.bindTo(y)),
							(this.z = a.EditorContextKeys.hoverFocused.bindTo(y)),
							t.$fhb(this.a.domNode, this.u.containerDomNode),
							(this.a.domNode.style.zIndex = "50"),
							this.D(
								this.f.onDidLayoutChange(() => {
									this.isVisible && this.bb();
								}),
							),
							this.D(
								this.f.onDidChangeConfiguration((L) => {
									L.hasChanged(w.EditorOption.fontInfo) && this.Z();
								}),
							);
						const k = this.D(t.$dhb(this.a.domNode));
						this.D(
							k.onDidFocus(() => {
								this.z.set(!0);
							}),
						),
							this.D(
								k.onDidBlur(() => {
									this.z.set(!1);
								}),
							),
							this.Y(void 0),
							this.f.addContentWidget(this);
					}
					dispose() {
						super.dispose(),
							this.q?.dispose(),
							this.f.removeContentWidget(this);
					}
					getId() {
						return g.ID;
					}
					static I(l, y, $) {
						const v = typeof y == "number" ? `${y}px` : y,
							S = typeof $ == "number" ? `${$}px` : $;
						(l.style.width = v), (l.style.height = S);
					}
					J(l, y) {
						const $ = this.u.contentsDomNode;
						return g.I($, l, y);
					}
					L(l, y) {
						const $ = this.u.containerDomNode;
						return g.I($, l, y);
					}
					M(l, y) {
						this.J(l, y), this.L(l, y), this.ab();
					}
					static N(l, y, $) {
						const v = typeof y == "number" ? `${y}px` : y,
							S = typeof $ == "number" ? `${$}px` : $;
						(l.style.maxWidth = v), (l.style.maxHeight = S);
					}
					O(l, y) {
						g.N(this.u.contentsDomNode, l, y),
							g.N(this.u.containerDomNode, l, y),
							this.u.containerDomNode.style.setProperty(
								"--vscode-hover-maxWidth",
								typeof l == "number" ? `${l}px` : l,
							),
							this.ab();
					}
					P(l) {
						this.O("none", "none");
						const y = l.width,
							$ = l.height;
						this.M(y, $);
					}
					Q() {
						const l = this.X() ?? 1 / 0,
							y = this.U() ?? 1 / 0;
						(this.a.maxSize = new t.$pgb(l, y)), this.O(l, y);
					}
					m(l) {
						(g.n = new t.$pgb(l.width, l.height)),
							this.P(l),
							this.a.layout(l.height, l.width),
							this.Q(),
							this.u.scrollbar.scanDomNode(),
							this.f.layoutContentWidget(this),
							this.C.fire();
					}
					S() {
						const l = this.q?.showAtPosition;
						if (l)
							return this.r === i.ContentWidgetPositionPreference.ABOVE
								? this.g(l)
								: this.h(l);
					}
					U() {
						const l = this.S();
						if (!l) return;
						let y = o;
						return (
							Array.from(this.u.contentsDomNode.children).forEach(($) => {
								y += $.clientHeight;
							}),
							Math.min(l, y)
						);
					}
					W() {
						this.u.containerDomNode.style.setProperty(
							"--vscode-hover-whiteSpace",
							"nowrap",
						),
							this.u.containerDomNode.style.setProperty(
								"--vscode-hover-sourceWhiteSpace",
								"nowrap",
							);
						const l = Array.from(this.u.contentsDomNode.children).some(
							(y) => y.scrollWidth > y.clientWidth,
						);
						return (
							this.u.containerDomNode.style.removeProperty(
								"--vscode-hover-whiteSpace",
							),
							this.u.containerDomNode.style.removeProperty(
								"--vscode-hover-sourceWhiteSpace",
							),
							l
						);
					}
					X() {
						if (!this.f || !this.f.hasModel()) return;
						const l = this.W(),
							y = typeof this.t > "u" ? 0 : this.t - 2;
						return l || this.u.containerDomNode.clientWidth < y
							? t.$ogb(this.u.containerDomNode.ownerDocument.body).width - 14
							: this.u.containerDomNode.clientWidth + 2;
					}
					isMouseGettingCloser(l, y) {
						if (!this.q) return !1;
						if (
							this.q.initialMousePosX === void 0 ||
							this.q.initialMousePosY === void 0
						)
							return (
								(this.q.initialMousePosX = l), (this.q.initialMousePosY = y), !1
							);
						const $ = t.$tgb(this.getDomNode());
						this.q.closestMouseDistance === void 0 &&
							(this.q.closestMouseDistance = b(
								this.q.initialMousePosX,
								this.q.initialMousePosY,
								$.left,
								$.top,
								$.width,
								$.height,
							));
						const v = b(l, y, $.left, $.top, $.width, $.height);
						return v > this.q.closestMouseDistance + 4
							? !1
							: ((this.q.closestMouseDistance = Math.min(
									this.q.closestMouseDistance,
									v,
								)),
								!0);
					}
					Y(l) {
						this.q?.dispose(),
							(this.q = l),
							this.w.set(!!l),
							this.u.containerDomNode.classList.toggle("hidden", !l);
					}
					Z() {
						const { fontSize: l, lineHeight: y } = this.f.getOption(
								w.EditorOption.fontInfo,
							),
							$ = this.u.contentsDomNode;
						($.style.fontSize = `${l}px`),
							($.style.lineHeight = `${y / l}`),
							Array.prototype.slice
								.call(this.u.contentsDomNode.getElementsByClassName("code"))
								.forEach((S) => this.f.applyFontInfo(S));
					}
					$(l) {
						const y = this.u.contentsDomNode;
						(y.style.paddingBottom = ""),
							(y.textContent = ""),
							y.appendChild(l);
					}
					ab() {
						this.f.layoutContentWidget(this), this.u.onContentsChanged();
					}
					bb() {
						const l = Math.max(
								this.f.getLayoutInfo().height / 4,
								250,
								g.n.height,
							),
							y = Math.max(this.f.getLayoutInfo().width * 0.66, 500, g.n.width);
						this.O(y, l);
					}
					cb(l) {
						this.Y(l),
							this.Z(),
							this.$(l.domNode),
							this.bb(),
							this.onContentsChanged(),
							this.f.render();
					}
					getPosition() {
						return this.q
							? {
									position: this.q.showAtPosition,
									secondaryPosition: this.q.showAtSecondaryPosition,
									positionAffinity: this.q.shouldAppearBeforeContent
										? c.PositionAffinity.LeftOfInjectedText
										: void 0,
									preference: [
										this.r ?? i.ContentWidgetPositionPreference.ABOVE,
									],
								}
							: null;
					}
					show(l) {
						if (!this.f || !this.f.hasModel()) return;
						this.cb(l);
						const y = t.$zgb(this.u.containerDomNode),
							$ = l.showAtPosition;
						(this.r = this.j(y, $) ?? i.ContentWidgetPositionPreference.ABOVE),
							this.onContentsChanged(),
							l.shouldFocus && this.u.containerDomNode.focus(),
							this.C.fire();
						const S =
							this.u.containerDomNode.ownerDocument.activeElement ===
								this.u.containerDomNode &&
							(0, h.$$hb)(
								this.F.getValue("accessibility.verbosity.hover") === !0 &&
									this.G.isScreenReaderOptimized(),
								this.H.lookupKeybinding(
									"editor.action.accessibleView",
								)?.getAriaLabel() ?? "",
							);
						S &&
							(this.u.contentsDomNode.ariaLabel =
								this.u.contentsDomNode.textContent + ", " + S);
					}
					hide() {
						if (!this.q) return;
						const l = this.q.shouldFocus || this.z.get();
						this.Y(void 0),
							(this.a.maxSize = new t.$pgb(1 / 0, 1 / 0)),
							this.a.clearSashHoverState(),
							this.z.set(!1),
							this.f.layoutContentWidget(this),
							l && this.f.focus();
					}
					db() {
						const l = this.f.getLayoutInfo();
						this.a.layout(l.height, l.width), this.M("auto", "auto");
					}
					setMinimumDimensions(l) {
						(this.s = new t.$pgb(
							Math.max(this.s.width, l.width),
							Math.max(this.s.height, l.height),
						)),
							this.eb();
					}
					eb() {
						const l =
							typeof this.t > "u"
								? this.s.width
								: Math.min(this.t, this.s.width);
						this.a.minSize = new t.$pgb(l, this.s.height);
					}
					onContentsChanged() {
						this.db();
						const l = this.u.containerDomNode;
						let y = t.$zgb(l),
							$ = t.$vgb(l);
						if (
							(this.a.layout(y, $),
							this.M($, y),
							(y = t.$zgb(l)),
							($ = t.$vgb(l)),
							(this.t = $),
							this.eb(),
							this.a.layout(y, $),
							this.q?.showAtPosition)
						) {
							const v = t.$zgb(this.u.containerDomNode);
							this.r = this.j(v, this.q.showAtPosition);
						}
						this.ab();
					}
					focus() {
						this.u.containerDomNode.focus();
					}
					scrollUp() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.f.getOption(w.EditorOption.fontInfo);
						this.u.scrollbar.setScrollPosition({ scrollTop: l - y.lineHeight });
					}
					scrollDown() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.f.getOption(w.EditorOption.fontInfo);
						this.u.scrollbar.setScrollPosition({ scrollTop: l + y.lineHeight });
					}
					scrollLeft() {
						const l = this.u.scrollbar.getScrollPosition().scrollLeft;
						this.u.scrollbar.setScrollPosition({ scrollLeft: l - p });
					}
					scrollRight() {
						const l = this.u.scrollbar.getScrollPosition().scrollLeft;
						this.u.scrollbar.setScrollPosition({ scrollLeft: l + p });
					}
					pageUp() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.u.scrollbar.getScrollDimensions().height;
						this.u.scrollbar.setScrollPosition({ scrollTop: l - y });
					}
					pageDown() {
						const l = this.u.scrollbar.getScrollPosition().scrollTop,
							y = this.u.scrollbar.getScrollDimensions().height;
						this.u.scrollbar.setScrollPosition({ scrollTop: l + y });
					}
					goToTop() {
						this.u.scrollbar.setScrollPosition({ scrollTop: 0 });
					}
					goToBottom() {
						this.u.scrollbar.setScrollPosition({
							scrollTop: this.u.scrollbar.getScrollDimensions().scrollHeight,
						});
					}
				};
				(e.$uhc = f),
					(e.$uhc =
						f =
						g =
							Ne([j(1, m.$6j), j(2, r.$gj), j(3, u.$XK), j(4, C.$uZ)], f));
				function b(s, l, y, $, v, S) {
					const I = y + v / 2,
						T = $ + S / 2,
						P = Math.max(Math.abs(s - I) - v / 2, 0),
						k = Math.max(Math.abs(l - T) - S / 2, 0);
					return Math.sqrt(P * P + k * k);
				}
			},
		),
		