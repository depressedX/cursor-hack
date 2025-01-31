import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/color.js';
import '../../encodedTokenAttributes.js';
define(de[913], he([1, 0, 97, 171]), function (ce /*require*/,
 e /*exports*/,
 t /*color*/,
 i /*encodedTokenAttributes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$L2b = e.$K2b = e.$J2b = e.$G2b = e.$F2b = e.$D2b = void 0),
				(e.$E2b = E),
				(e.$H2b = a),
				(e.$I2b = h),
				(e.$M2b = p);
			class w {
				constructor(f, b, s, l, y) {
					(this._parsedThemeRuleBrand = void 0),
						(this.token = f),
						(this.index = b),
						(this.fontStyle = s),
						(this.foreground = l),
						(this.background = y);
				}
			}
			e.$D2b = w;
			function E(o) {
				if (!o || !Array.isArray(o)) return [];
				const f = [];
				let b = 0;
				for (let s = 0, l = o.length; s < l; s++) {
					const y = o[s];
					let $ = i.FontStyle.NotSet;
					if (typeof y.fontStyle == "string") {
						$ = i.FontStyle.None;
						const I = y.fontStyle.split(" ");
						for (let T = 0, P = I.length; T < P; T++)
							switch (I[T]) {
								case "italic":
									$ = $ | i.FontStyle.Italic;
									break;
								case "bold":
									$ = $ | i.FontStyle.Bold;
									break;
								case "underline":
									$ = $ | i.FontStyle.Underline;
									break;
								case "strikethrough":
									$ = $ | i.FontStyle.Strikethrough;
									break;
							}
					}
					let v = null;
					typeof y.foreground == "string" && (v = y.foreground);
					let S = null;
					typeof y.background == "string" && (S = y.background),
						(f[b++] = new w(y.token || "", s, $, v, S));
				}
				return f;
			}
			function C(o, f) {
				o.sort((T, P) => {
					const k = h(T.token, P.token);
					return k !== 0 ? k : T.index - P.index;
				});
				let b = i.FontStyle.None,
					s = "000000",
					l = "ffffff";
				for (; o.length >= 1 && o[0].token === ""; ) {
					const T = o.shift();
					T.fontStyle !== i.FontStyle.NotSet && (b = T.fontStyle),
						T.foreground !== null && (s = T.foreground),
						T.background !== null && (l = T.background);
				}
				const y = new m();
				for (const T of f) y.getId(T);
				const $ = y.getId(s),
					v = y.getId(l),
					S = new c(b, $, v),
					I = new g(S);
				for (let T = 0, P = o.length; T < P; T++) {
					const k = o[T];
					I.insert(
						k.token,
						k.fontStyle,
						y.getId(k.foreground),
						y.getId(k.background),
					);
				}
				return new r(y, I);
			}
			const d = /^#?([0-9A-Fa-f]{6})([0-9A-Fa-f]{2})?$/;
			class m {
				constructor() {
					(this.c = 0), (this.d = []), (this.e = new Map());
				}
				getId(f) {
					if (f === null) return 0;
					const b = f.match(d);
					if (!b) throw new Error("Illegal value for token color: " + f);
					f = b[1].toUpperCase();
					let s = this.e.get(f);
					return (
						s ||
						((s = ++this.c),
						this.e.set(f, s),
						(this.d[s] = t.$UL.fromHex("#" + f)),
						s)
					);
				}
				getColorMap() {
					return this.d.slice(0);
				}
			}
			e.$F2b = m;
			class r {
				static createFromRawTokenTheme(f, b) {
					return this.createFromParsedTokenTheme(E(f), b);
				}
				static createFromParsedTokenTheme(f, b) {
					return C(f, b);
				}
				constructor(f, b) {
					(this.c = f), (this.d = b), (this.e = new Map());
				}
				getColorMap() {
					return this.c.getColorMap();
				}
				getThemeTrieElement() {
					return this.d.toExternalThemeTrieElement();
				}
				_match(f) {
					return this.d.match(f);
				}
				match(f, b) {
					let s = this.e.get(b);
					if (typeof s > "u") {
						const l = this._match(b),
							y = a(b);
						(s =
							(l.metadata | (y << i.MetadataConsts.TOKEN_TYPE_OFFSET)) >>> 0),
							this.e.set(b, s);
					}
					return (s | (f << i.MetadataConsts.LANGUAGEID_OFFSET)) >>> 0;
				}
			}
			e.$G2b = r;
			const u = /\b(comment|string|regex|regexp)\b/;
			function a(o) {
				const f = o.match(u);
				if (!f) return i.StandardTokenType.Other;
				switch (f[1]) {
					case "comment":
						return i.StandardTokenType.Comment;
					case "string":
						return i.StandardTokenType.String;
					case "regex":
						return i.StandardTokenType.RegEx;
					case "regexp":
						return i.StandardTokenType.RegEx;
				}
				throw new Error("Unexpected match for standard token type!");
			}
			function h(o, f) {
				return o < f ? -1 : o > f ? 1 : 0;
			}
			class c {
				constructor(f, b, s) {
					(this._themeTrieElementRuleBrand = void 0),
						(this.c = f),
						(this.d = b),
						(this.e = s),
						(this.metadata =
							((this.c << i.MetadataConsts.FONT_STYLE_OFFSET) |
								(this.d << i.MetadataConsts.FOREGROUND_OFFSET) |
								(this.e << i.MetadataConsts.BACKGROUND_OFFSET)) >>>
							0);
				}
				clone() {
					return new c(this.c, this.d, this.e);
				}
				acceptOverwrite(f, b, s) {
					f !== i.FontStyle.NotSet && (this.c = f),
						b !== i.ColorId.None && (this.d = b),
						s !== i.ColorId.None && (this.e = s),
						(this.metadata =
							((this.c << i.MetadataConsts.FONT_STYLE_OFFSET) |
								(this.d << i.MetadataConsts.FOREGROUND_OFFSET) |
								(this.e << i.MetadataConsts.BACKGROUND_OFFSET)) >>>
							0);
				}
			}
			e.$J2b = c;
			class n {
				constructor(f, b = new Map()) {
					if (((this.mainRule = f), b instanceof Map)) this.children = b;
					else {
						this.children = new Map();
						for (const s in b) this.children.set(s, b[s]);
					}
				}
			}
			e.$K2b = n;
			class g {
				constructor(f) {
					(this._themeTrieElementBrand = void 0),
						(this.c = f),
						(this.d = new Map());
				}
				toExternalThemeTrieElement() {
					const f = new Map();
					return (
						this.d.forEach((b, s) => {
							f.set(s, b.toExternalThemeTrieElement());
						}),
						new n(this.c, f)
					);
				}
				match(f) {
					if (f === "") return this.c;
					const b = f.indexOf(".");
					let s, l;
					b === -1
						? ((s = f), (l = ""))
						: ((s = f.substring(0, b)), (l = f.substring(b + 1)));
					const y = this.d.get(s);
					return typeof y < "u" ? y.match(l) : this.c;
				}
				insert(f, b, s, l) {
					if (f === "") {
						this.c.acceptOverwrite(b, s, l);
						return;
					}
					const y = f.indexOf(".");
					let $, v;
					y === -1
						? (($ = f), (v = ""))
						: (($ = f.substring(0, y)), (v = f.substring(y + 1)));
					let S = this.d.get($);
					typeof S > "u" && ((S = new g(this.c.clone())), this.d.set($, S)),
						S.insert(v, b, s, l);
				}
			}
			e.$L2b = g;
			function p(o) {
				const f = [];
				for (let b = 1, s = o.length; b < s; b++) {
					const l = o[b];
					f[b] = `.mtk${b} { color: ${l}; }`;
				}
				return (
					f.push(".mtki { font-style: italic; }"),
					f.push(".mtkb { font-weight: bold; }"),
					f.push(
						".mtku { text-decoration: underline; text-underline-position: under; }",
					),
					f.push(".mtks { text-decoration: line-through; }"),
					f.push(
						".mtks.mtku { text-decoration: underline line-through; text-underline-position: under; }",
					),
					f.join(`
`)
				);
			}
		})
