define(de[290], he([1, 0, 24, 37, 17]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$6sb =
					e.$5sb =
					e.$4sb =
					e.$3sb =
					e.InlineDecorationType =
					e.$2sb =
					e.$1sb =
					e.$Zsb =
					e.$Ysb =
						void 0),
				(t = mt(t)),
				(i = mt(i));
			class E {
				constructor(g, p, o, f) {
					(this._viewportBrand = void 0),
						(this.top = g | 0),
						(this.left = p | 0),
						(this.width = o | 0),
						(this.height = f | 0);
				}
			}
			e.$Ysb = E;
			class C {
				constructor(g, p) {
					(this.tabSize = g), (this.data = p);
				}
			}
			e.$Zsb = C;
			class d {
				constructor(g, p, o, f, b, s, l) {
					(this._viewLineDataBrand = void 0),
						(this.content = g),
						(this.continuesWithWrappedLine = p),
						(this.minColumn = o),
						(this.maxColumn = f),
						(this.startVisibleColumn = b),
						(this.tokens = s),
						(this.inlineDecorations = l);
				}
			}
			e.$1sb = d;
			class m {
				constructor(g, p, o, f, b, s, l, y, $, v) {
					(this.minColumn = g),
						(this.maxColumn = p),
						(this.content = o),
						(this.continuesWithWrappedLine = f),
						(this.isBasicASCII = m.isBasicASCII(o, s)),
						(this.containsRTL = m.containsRTL(o, this.isBasicASCII, b)),
						(this.tokens = l),
						(this.inlineDecorations = y),
						(this.tabSize = $),
						(this.startVisibleColumn = v);
				}
				static isBasicASCII(g, p) {
					return p ? i.$2f(g) : !0;
				}
				static containsRTL(g, p, o) {
					return !p && o ? i.$1f(g) : !1;
				}
			}
			e.$2sb = m;
			var r;
			(function (n) {
				(n[(n.Regular = 0)] = "Regular"),
					(n[(n.Before = 1)] = "Before"),
					(n[(n.After = 2)] = "After"),
					(n[(n.RegularAffectingLetterSpacing = 3)] =
						"RegularAffectingLetterSpacing");
			})(r || (e.InlineDecorationType = r = {}));
			class u {
				constructor(g, p, o) {
					(this.range = g), (this.inlineClassName = p), (this.type = o);
				}
			}
			e.$3sb = u;
			class a {
				constructor(g, p, o, f) {
					(this.startOffset = g),
						(this.endOffset = p),
						(this.inlineClassName = o),
						(this.inlineClassNameAffectsLetterSpacing = f);
				}
				toInlineDecoration(g) {
					return new u(
						new w.$iL(g, this.startOffset + 1, g, this.endOffset + 1),
						this.inlineClassName,
						this.inlineClassNameAffectsLetterSpacing
							? r.RegularAffectingLetterSpacing
							: r.Regular,
					);
				}
			}
			e.$4sb = a;
			class h {
				constructor(g, p) {
					(this._viewModelDecorationBrand = void 0),
						(this.range = g),
						(this.options = p);
				}
			}
			e.$5sb = h;
			class c {
				constructor(g, p, o) {
					(this.color = g), (this.zIndex = p), (this.data = o);
				}
				static compareByRenderingProps(g, p) {
					return g.zIndex === p.zIndex
						? g.color < p.color
							? -1
							: g.color > p.color
								? 1
								: 0
						: g.zIndex - p.zIndex;
				}
				static equals(g, p) {
					return (
						g.color === p.color &&
						g.zIndex === p.zIndex &&
						t.$yb(g.data, p.data)
					);
				}
				static equalsArr(g, p) {
					return t.$yb(g, p, c.equals);
				}
			}
			e.$6sb = c;
		}),
		define(
			de[533],
			he([1, 0, 37, 210, 1545, 290]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hub = e.$Gub = e.$Fub = void 0),
					(t = mt(t));
				class C {
					constructor(a, h, c, n) {
						(this.startColumn = a),
							(this.endColumn = h),
							(this.className = c),
							(this.type = n),
							(this._lineDecorationBrand = void 0);
					}
					static c(a, h) {
						return (
							a.startColumn === h.startColumn &&
							a.endColumn === h.endColumn &&
							a.className === h.className &&
							a.type === h.type
						);
					}
					static equalsArr(a, h) {
						const c = a.length,
							n = h.length;
						if (c !== n) return !1;
						for (let g = 0; g < c; g++) if (!C.c(a[g], h[g])) return !1;
						return !0;
					}
					static extractWrapped(a, h, c) {
						if (a.length === 0) return a;
						const n = h + 1,
							g = c + 1,
							p = c - h,
							o = [];
						let f = 0;
						for (const b of a)
							b.endColumn <= n ||
								b.startColumn >= g ||
								(o[f++] = new C(
									Math.max(1, b.startColumn - n + 1),
									Math.min(p + 1, b.endColumn - n + 1),
									b.className,
									b.type,
								));
						return o;
					}
					static filter(a, h, c, n) {
						if (a.length === 0) return [];
						const g = [];
						let p = 0;
						for (let o = 0, f = a.length; o < f; o++) {
							const b = a[o],
								s = b.range;
							if (
								s.endLineNumber < h ||
								s.startLineNumber > h ||
								(s.isEmpty() &&
									(b.type === E.InlineDecorationType.Regular ||
										b.type ===
											E.InlineDecorationType.RegularAffectingLetterSpacing))
							)
								continue;
							const l = s.startLineNumber === h ? s.startColumn : c,
								y = s.endLineNumber === h ? s.endColumn : n;
							g[p++] = new C(l, y, b.inlineClassName, b.type);
						}
						return g;
					}
					static e(a, h) {
						const c = [2, 0, 1, 3];
						return c[a] - c[h];
					}
					static compare(a, h) {
						if (a.startColumn !== h.startColumn)
							return a.startColumn - h.startColumn;
						if (a.endColumn !== h.endColumn) return a.endColumn - h.endColumn;
						const c = C.e(a.type, h.type);
						return c !== 0
							? c
							: a.className !== h.className
								? a.className < h.className
									? -1
									: 1
								: 0;
					}
				}
				e.$Fub = C;
				class d {
					constructor(a, h, c, n) {
						(this.startOffset = a),
							(this.endOffset = h),
							(this.className = c),
							(this.metadata = n);
					}
				}
				e.$Gub = d;
				class m {
					constructor() {
						(this.c = []), (this.e = []), (this.f = []), (this.count = 0);
					}
					static g(a) {
						let h = 0;
						for (let c = 0, n = a.length; c < n; c++) h |= a[c];
						return h;
					}
					consumeLowerThan(a, h, c) {
						for (; this.count > 0 && this.c[0] < a; ) {
							let n = 0;
							for (; n + 1 < this.count && this.c[n] === this.c[n + 1]; ) n++;
							c.push(new d(h, this.c[n], this.e.join(" "), m.g(this.f))),
								(h = this.c[n] + 1),
								this.c.splice(0, n + 1),
								this.e.splice(0, n + 1),
								this.f.splice(0, n + 1),
								(this.count -= n + 1);
						}
						return (
							this.count > 0 &&
								h < a &&
								(c.push(new d(h, a - 1, this.e.join(" "), m.g(this.f))),
								(h = a)),
							h
						);
					}
					insert(a, h, c) {
						if (this.count === 0 || this.c[this.count - 1] <= a)
							this.c.push(a), this.e.push(h), this.f.push(c);
						else
							for (let n = 0; n < this.count; n++)
								if (this.c[n] >= a) {
									this.c.splice(n, 0, a),
										this.e.splice(n, 0, h),
										this.f.splice(n, 0, c);
									break;
								}
						this.count++;
					}
				}
				class r {
					static normalize(a, h) {
						if (h.length === 0) return [];
						const c = [],
							n = new m();
						let g = 0;
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							let b = f.startColumn,
								s = f.endColumn;
							const l = f.className,
								y =
									f.type === E.InlineDecorationType.Before
										? w.LinePartMetadata.PSEUDO_BEFORE
										: f.type === E.InlineDecorationType.After
											? w.LinePartMetadata.PSEUDO_AFTER
											: 0;
							if (b > 1) {
								const S = a.charCodeAt(b - 2);
								t.$Qf(S) && b--;
							}
							if (s > 1) {
								const S = a.charCodeAt(s - 2);
								t.$Qf(S) && s--;
							}
							const $ = b - 1,
								v = s - 2;
							(g = n.consumeLowerThan($, g, c)),
								n.count === 0 && (g = $),
								n.insert(v, l, y);
						}
						return (
							n.consumeLowerThan(i.Constants.MAX_SAFE_SMALL_INTEGER, g, c), c
						);
					}
				}
				e.$Hub = r;
			},
		),
		