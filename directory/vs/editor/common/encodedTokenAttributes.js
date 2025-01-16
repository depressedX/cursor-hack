define(de[171], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$2L =
					e.MetadataConsts =
					e.StandardTokenType =
					e.ColorId =
					e.FontStyle =
					e.LanguageId =
						void 0);
			var t;
			(function (m) {
				(m[(m.Null = 0)] = "Null"), (m[(m.PlainText = 1)] = "PlainText");
			})(t || (e.LanguageId = t = {}));
			var i;
			(function (m) {
				(m[(m.NotSet = -1)] = "NotSet"),
					(m[(m.None = 0)] = "None"),
					(m[(m.Italic = 1)] = "Italic"),
					(m[(m.Bold = 2)] = "Bold"),
					(m[(m.Underline = 4)] = "Underline"),
					(m[(m.Strikethrough = 8)] = "Strikethrough");
			})(i || (e.FontStyle = i = {}));
			var w;
			(function (m) {
				(m[(m.None = 0)] = "None"),
					(m[(m.DefaultForeground = 1)] = "DefaultForeground"),
					(m[(m.DefaultBackground = 2)] = "DefaultBackground");
			})(w || (e.ColorId = w = {}));
			var E;
			(function (m) {
				(m[(m.Other = 0)] = "Other"),
					(m[(m.Comment = 1)] = "Comment"),
					(m[(m.String = 2)] = "String"),
					(m[(m.RegEx = 3)] = "RegEx");
			})(E || (e.StandardTokenType = E = {}));
			var C;
			(function (m) {
				(m[(m.LANGUAGEID_MASK = 255)] = "LANGUAGEID_MASK"),
					(m[(m.TOKEN_TYPE_MASK = 768)] = "TOKEN_TYPE_MASK"),
					(m[(m.BALANCED_BRACKETS_MASK = 1024)] = "BALANCED_BRACKETS_MASK"),
					(m[(m.FONT_STYLE_MASK = 30720)] = "FONT_STYLE_MASK"),
					(m[(m.FOREGROUND_MASK = 16744448)] = "FOREGROUND_MASK"),
					(m[(m.BACKGROUND_MASK = 4278190080)] = "BACKGROUND_MASK"),
					(m[(m.ITALIC_MASK = 2048)] = "ITALIC_MASK"),
					(m[(m.BOLD_MASK = 4096)] = "BOLD_MASK"),
					(m[(m.UNDERLINE_MASK = 8192)] = "UNDERLINE_MASK"),
					(m[(m.STRIKETHROUGH_MASK = 16384)] = "STRIKETHROUGH_MASK"),
					(m[(m.SEMANTIC_USE_ITALIC = 1)] = "SEMANTIC_USE_ITALIC"),
					(m[(m.SEMANTIC_USE_BOLD = 2)] = "SEMANTIC_USE_BOLD"),
					(m[(m.SEMANTIC_USE_UNDERLINE = 4)] = "SEMANTIC_USE_UNDERLINE"),
					(m[(m.SEMANTIC_USE_STRIKETHROUGH = 8)] =
						"SEMANTIC_USE_STRIKETHROUGH"),
					(m[(m.SEMANTIC_USE_FOREGROUND = 16)] = "SEMANTIC_USE_FOREGROUND"),
					(m[(m.SEMANTIC_USE_BACKGROUND = 32)] = "SEMANTIC_USE_BACKGROUND"),
					(m[(m.LANGUAGEID_OFFSET = 0)] = "LANGUAGEID_OFFSET"),
					(m[(m.TOKEN_TYPE_OFFSET = 8)] = "TOKEN_TYPE_OFFSET"),
					(m[(m.BALANCED_BRACKETS_OFFSET = 10)] = "BALANCED_BRACKETS_OFFSET"),
					(m[(m.FONT_STYLE_OFFSET = 11)] = "FONT_STYLE_OFFSET"),
					(m[(m.FOREGROUND_OFFSET = 15)] = "FOREGROUND_OFFSET"),
					(m[(m.BACKGROUND_OFFSET = 24)] = "BACKGROUND_OFFSET");
			})(C || (e.MetadataConsts = C = {}));
			class d {
				static getLanguageId(r) {
					return (r & C.LANGUAGEID_MASK) >>> C.LANGUAGEID_OFFSET;
				}
				static getTokenType(r) {
					return (r & C.TOKEN_TYPE_MASK) >>> C.TOKEN_TYPE_OFFSET;
				}
				static containsBalancedBrackets(r) {
					return (r & C.BALANCED_BRACKETS_MASK) !== 0;
				}
				static getFontStyle(r) {
					return (r & C.FONT_STYLE_MASK) >>> C.FONT_STYLE_OFFSET;
				}
				static getForeground(r) {
					return (r & C.FOREGROUND_MASK) >>> C.FOREGROUND_OFFSET;
				}
				static getBackground(r) {
					return (r & C.BACKGROUND_MASK) >>> C.BACKGROUND_OFFSET;
				}
				static getClassNameFromMetadata(r) {
					let a = "mtk" + this.getForeground(r);
					const h = this.getFontStyle(r);
					return (
						h & i.Italic && (a += " mtki"),
						h & i.Bold && (a += " mtkb"),
						h & i.Underline && (a += " mtku"),
						h & i.Strikethrough && (a += " mtks"),
						a
					);
				}
				static getInlineStyleFromMetadata(r, u) {
					const a = this.getForeground(r),
						h = this.getFontStyle(r);
					let c = `color: ${u[a]};`;
					h & i.Italic && (c += "font-style: italic;"),
						h & i.Bold && (c += "font-weight: bold;");
					let n = "";
					return (
						h & i.Underline && (n += " underline"),
						h & i.Strikethrough && (n += " line-through"),
						n && (c += `text-decoration:${n};`),
						c
					);
				}
				static getPresentationFromMetadata(r) {
					const u = this.getForeground(r),
						a = this.getFontStyle(r);
					return {
						foreground: u,
						italic: !!(a & i.Italic),
						bold: !!(a & i.Bold),
						underline: !!(a & i.Underline),
						strikethrough: !!(a & i.Strikethrough),
					};
				}
			}
			e.$2L = d;
		}),
		define(
			de[1148],
			he([1, 0, 37, 188, 17, 171]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pic = void 0),
					(e.$Qic = d),
					(t = mt(t));
				class C {
					constructor(r, u, a) {
						(this.c = r), (this.e = u), (this.d = null), (this.f = a);
					}
					getEditOperations(r, u) {
						const a = d(r, this.e, this.f);
						for (let h = 0, c = a.length; h < c; h++) {
							const n = a[h];
							u.addEditOperation(n.range, n.text);
						}
						this.d = u.trackSelection(this.c);
					}
					computeCursorState(r, u) {
						return u.getTrackedSelection(this.d);
					}
				}
				e.$Pic = C;
				function d(m, r, u) {
					r.sort((g, p) =>
						g.lineNumber === p.lineNumber
							? g.column - p.column
							: g.lineNumber - p.lineNumber,
					);
					for (let g = r.length - 2; g >= 0; g--)
						r[g].lineNumber === r[g + 1].lineNumber && r.splice(g, 1);
					const a = [];
					let h = 0,
						c = 0;
					const n = r.length;
					for (let g = 1, p = m.getLineCount(); g <= p; g++) {
						const o = m.getLineContent(g),
							f = o.length + 1;
						let b = 0;
						if (
							(c < n &&
								r[c].lineNumber === g &&
								((b = r[c].column), c++, b === f)) ||
							o.length === 0
						)
							continue;
						const s = t.$Df(o);
						let l = 0;
						if (s === -1) l = 1;
						else if (s !== o.length - 1) l = s + 2;
						else continue;
						if (!u) {
							if (!m.tokenization.hasAccurateTokensForLine(g)) continue;
							const y = m.tokenization.getLineTokens(g),
								$ = y.getStandardTokenType(y.findTokenIndexAtOffset(l));
							if (
								$ === E.StandardTokenType.String ||
								$ === E.StandardTokenType.RegEx
							)
								continue;
						}
						(l = Math.max(b, l)),
							(a[h++] = i.$jL.delete(new w.$iL(g, l, g, f)));
					}
					return a;
				}
			},
		),
		