define(de[388], he([1, 0, 171]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7L = void 0),
				(e.$8L = E);
			class i {
				static {
					this.defaultTokenMetadata =
						((t.FontStyle.None << t.MetadataConsts.FONT_STYLE_OFFSET) |
							(t.ColorId.DefaultForeground <<
								t.MetadataConsts.FOREGROUND_OFFSET) |
							(t.ColorId.DefaultBackground <<
								t.MetadataConsts.BACKGROUND_OFFSET)) >>>
						0;
				}
				static createEmpty(d, m) {
					const r = i.defaultTokenMetadata,
						u = new Uint32Array(2);
					return (u[0] = d.length), (u[1] = r), new i(u, d, m);
				}
				static createFromTextAndMetadata(d, m) {
					let r = 0,
						u = "";
					const a = new Array();
					for (const { text: h, metadata: c } of d)
						a.push(r + h.length, c), (r += h.length), (u += h);
					return new i(new Uint32Array(a), u, m);
				}
				constructor(d, m, r) {
					(this._lineTokensBrand = void 0),
						(this.a = d),
						(this.b = this.a.length >>> 1),
						(this.c = m),
						(this.languageIdCodec = r);
				}
				equals(d) {
					return d instanceof i ? this.slicedEquals(d, 0, this.b) : !1;
				}
				slicedEquals(d, m, r) {
					if (this.c !== d.c || this.b !== d.b) return !1;
					const u = m << 1,
						a = u + (r << 1);
					for (let h = u; h < a; h++) if (this.a[h] !== d.a[h]) return !1;
					return !0;
				}
				getLineContent() {
					return this.c;
				}
				getCount() {
					return this.b;
				}
				getStartOffset(d) {
					return d > 0 ? this.a[(d - 1) << 1] : 0;
				}
				getMetadata(d) {
					return this.a[(d << 1) + 1];
				}
				getLanguageId(d) {
					const m = this.a[(d << 1) + 1],
						r = t.$2L.getLanguageId(m);
					return this.languageIdCodec.decodeLanguageId(r);
				}
				getStandardTokenType(d) {
					const m = this.a[(d << 1) + 1];
					return t.$2L.getTokenType(m);
				}
				getForeground(d) {
					const m = this.a[(d << 1) + 1];
					return t.$2L.getForeground(m);
				}
				getClassName(d) {
					const m = this.a[(d << 1) + 1];
					return t.$2L.getClassNameFromMetadata(m);
				}
				getInlineStyle(d, m) {
					const r = this.a[(d << 1) + 1];
					return t.$2L.getInlineStyleFromMetadata(r, m);
				}
				getPresentation(d) {
					const m = this.a[(d << 1) + 1];
					return t.$2L.getPresentationFromMetadata(m);
				}
				getEndOffset(d) {
					return this.a[d << 1];
				}
				findTokenIndexAtOffset(d) {
					return i.findIndexInTokensArray(this.a, d);
				}
				inflate() {
					return this;
				}
				sliceAndInflate(d, m, r) {
					return new w(this, d, m, r);
				}
				static convertToEndOffset(d, m) {
					const u = (d.length >>> 1) - 1;
					for (let a = 0; a < u; a++) d[a << 1] = d[(a + 1) << 1];
					d[u << 1] = m;
				}
				static findIndexInTokensArray(d, m) {
					if (d.length <= 2) return 0;
					let r = 0,
						u = (d.length >>> 1) - 1;
					for (; r < u; ) {
						const a = r + Math.floor((u - r) / 2),
							h = d[a << 1];
						if (h === m) return a + 1;
						h < m ? (r = a + 1) : h > m && (u = a);
					}
					return r;
				}
				withInserted(d) {
					if (d.length === 0) return this;
					let m = 0,
						r = 0,
						u = "";
					const a = new Array();
					let h = 0;
					for (;;) {
						const c = m < this.b ? this.a[m << 1] : -1,
							n = r < d.length ? d[r] : null;
						if (c !== -1 && (n === null || c <= n.offset)) {
							u += this.c.substring(h, c);
							const g = this.a[(m << 1) + 1];
							a.push(u.length, g), m++, (h = c);
						} else if (n) {
							if (n.offset > h) {
								u += this.c.substring(h, n.offset);
								const g = this.a[(m << 1) + 1];
								a.push(u.length, g), (h = n.offset);
							}
							(u += n.text), a.push(u.length, n.tokenMetadata), r++;
						} else break;
					}
					return new i(new Uint32Array(a), u, this.languageIdCodec);
				}
				getTokenText(d) {
					const m = this.getStartOffset(d),
						r = this.getEndOffset(d);
					return this.c.substring(m, r);
				}
				forEach(d) {
					const m = this.getCount();
					for (let r = 0; r < m; r++) d(r);
				}
				extractObject() {
					return { tokens: this.a, text: this.c };
				}
			}
			e.$7L = i;
			class w {
				constructor(d, m, r, u) {
					(this.a = d),
						(this.b = m),
						(this.c = r),
						(this.d = u),
						(this.e = d.findTokenIndexAtOffset(m)),
						(this.languageIdCodec = d.languageIdCodec),
						(this.f = 0);
					for (
						let a = this.e, h = d.getCount();
						a < h && !(d.getStartOffset(a) >= r);
						a++
					)
						this.f++;
				}
				getMetadata(d) {
					return this.a.getMetadata(this.e + d);
				}
				getLanguageId(d) {
					return this.a.getLanguageId(this.e + d);
				}
				getLineContent() {
					return this.a.getLineContent().substring(this.b, this.c);
				}
				equals(d) {
					return d instanceof w
						? this.b === d.b &&
								this.c === d.c &&
								this.d === d.d &&
								this.a.slicedEquals(d.a, this.e, this.f)
						: !1;
				}
				getCount() {
					return this.f;
				}
				getStandardTokenType(d) {
					return this.a.getStandardTokenType(this.e + d);
				}
				getForeground(d) {
					return this.a.getForeground(this.e + d);
				}
				getEndOffset(d) {
					const m = this.a.getEndOffset(this.e + d);
					return Math.min(this.c, m) - this.b + this.d;
				}
				getClassName(d) {
					return this.a.getClassName(this.e + d);
				}
				getInlineStyle(d, m) {
					return this.a.getInlineStyle(this.e + d, m);
				}
				getPresentation(d) {
					return this.a.getPresentation(this.e + d);
				}
				findTokenIndexAtOffset(d) {
					return this.a.findTokenIndexAtOffset(d + this.b - this.d) - this.e;
				}
				getTokenText(d) {
					const m = this.e + d,
						r = this.a.getStartOffset(m),
						u = this.a.getEndOffset(m);
					let a = this.a.getTokenText(m);
					return (
						r < this.b && (a = a.substring(this.b - r)),
						u > this.c && (a = a.substring(0, a.length - (u - this.c))),
						a
					);
				}
				forEach(d) {
					for (let m = 0; m < this.getCount(); m++) d(m);
				}
			}
			function E(C, d) {
				const m = d.lineNumber;
				if (!C.tokenization.isCheapToTokenize(m)) return;
				C.tokenization.forceTokenization(m);
				const r = C.tokenization.getLineTokens(m),
					u = r.findTokenIndexAtOffset(d.column - 1);
				return r.getStandardTokenType(u);
			}
		}),
		define(
			de[1151],
			he([1, 0, 37, 748, 388, 171]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Otb = e.$Ntb = void 0),
					(e.$Ptb = r),
					(t = mt(t));
				class C {
					constructor(a, h, c) {
						(this.a = h), (this.b = new m(a, c));
					}
					shouldIncrease(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldIncrease(c);
					}
					shouldDecrease(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldDecrease(c);
					}
					shouldIgnore(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldIgnore(c);
					}
					shouldIndentNextLine(a, h) {
						const c = this.b.getProcessedLine(a, h);
						return this.a.shouldIndentNextLine(c);
					}
				}
				e.$Ntb = C;
				class d {
					constructor(a, h) {
						(this.a = a), (this.b = new m(a, h));
					}
					getProcessedTokenContextAroundRange(a) {
						const h = this.c(a),
							c = this.d(a),
							n = this.e(a);
						return {
							beforeRangeProcessedTokens: h,
							afterRangeProcessedTokens: c,
							previousLineProcessedTokens: n,
						};
					}
					c(a) {
						this.a.tokenization.forceTokenization(a.startLineNumber);
						const h = this.a.tokenization.getLineTokens(a.startLineNumber),
							c = (0, i.$oM)(h, a.startColumn - 1);
						let n;
						if (r(this.a, a.getStartPosition())) {
							const p = a.startColumn - 1 - c.firstCharOffset,
								o = c.firstCharOffset,
								f = o + p;
							n = h.sliceAndInflate(o, f, 0);
						} else {
							const p = a.startColumn - 1;
							n = h.sliceAndInflate(0, p, 0);
						}
						return this.b.getProcessedTokens(n);
					}
					d(a) {
						const h = a.isEmpty() ? a.getStartPosition() : a.getEndPosition();
						this.a.tokenization.forceTokenization(h.lineNumber);
						const c = this.a.tokenization.getLineTokens(h.lineNumber),
							n = (0, i.$oM)(c, h.column - 1),
							g = h.column - 1 - n.firstCharOffset,
							p = n.firstCharOffset + g,
							o = n.firstCharOffset + n.getLineLength(),
							f = c.sliceAndInflate(p, o, 0);
						return this.b.getProcessedTokens(f);
					}
					e(a) {
						const h = ($) => {
							this.a.tokenization.forceTokenization($);
							const v = this.a.tokenization.getLineTokens($),
								S = this.a.getLineMaxColumn($) - 1;
							return (0, i.$oM)(v, S);
						};
						this.a.tokenization.forceTokenization(a.startLineNumber);
						const c = this.a.tokenization.getLineTokens(a.startLineNumber),
							n = (0, i.$oM)(c, a.startColumn - 1),
							g = w.$7L.createEmpty("", n.languageIdCodec),
							p = a.startLineNumber - 1;
						if (p === 0 || !(n.firstCharOffset === 0)) return g;
						const b = h(p);
						if (!(n.languageId === b.languageId)) return g;
						const l = b.toIViewLineTokens();
						return this.b.getProcessedTokens(l);
					}
				}
				e.$Otb = d;
				class m {
					constructor(a, h) {
						(this.a = a), (this.b = h);
					}
					getProcessedLine(a, h) {
						const c = (p, o) => {
							const f = t.$Cf(p);
							return o + p.substring(f.length);
						};
						this.a.tokenization.forceTokenization?.(a);
						const n = this.a.tokenization.getLineTokens(a);
						let g = this.getProcessedTokens(n).getLineContent();
						return h !== void 0 && (g = c(g, h)), g;
					}
					getProcessedTokens(a) {
						const h = (f) =>
								f === E.StandardTokenType.String ||
								f === E.StandardTokenType.RegEx ||
								f === E.StandardTokenType.Comment,
							c = a.getLanguageId(0),
							g = this.b
								.getLanguageConfiguration(c)
								.bracketsNew.getBracketRegExp({ global: !0 }),
							p = [];
						return (
							a.forEach((f) => {
								const b = a.getStandardTokenType(f);
								let s = a.getTokenText(f);
								h(b) && (s = s.replace(g, ""));
								const l = a.getMetadata(f);
								p.push({ text: s, metadata: l });
							}),
							w.$7L.createFromTextAndMetadata(p, a.languageIdCodec)
						);
					}
				}
				function r(u, a) {
					u.tokenization.forceTokenization(a.lineNumber);
					const h = u.tokenization.getLineTokens(a.lineNumber),
						c = (0, i.$oM)(h, a.column - 1),
						n = c.firstCharOffset === 0,
						g = h.getLanguageId(0) === c.languageId;
					return !n && !g;
				}
			},
		),
		