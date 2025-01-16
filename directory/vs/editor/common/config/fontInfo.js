define(de[463], he([1, 0, 12, 38, 909]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$QK = e.$PK = e.$OK = void 0),
				(t = mt(t));
			const E = t.$m ? 1.5 : 1.35,
				C = 8;
			class d {
				static createFromValidatedSettings(u, a, h) {
					const c = u.get(i.EditorOption.fontFamily),
						n = u.get(i.EditorOption.fontWeight),
						g = u.get(i.EditorOption.fontSize),
						p = u.get(i.EditorOption.fontLigatures),
						o = u.get(i.EditorOption.fontVariations),
						f = u.get(i.EditorOption.lineHeight),
						b = u.get(i.EditorOption.letterSpacing);
					return d.a(c, n, g, p, o, f, b, a, h);
				}
				static createFromRawSettings(u, a, h = !1) {
					const c = i.EditorOptions.fontFamily.validate(u.fontFamily),
						n = i.EditorOptions.fontWeight.validate(u.fontWeight),
						g = i.EditorOptions.fontSize.validate(u.fontSize),
						p = i.EditorOptions.fontLigatures2.validate(u.fontLigatures),
						o = i.EditorOptions.fontVariations.validate(u.fontVariations),
						f = i.EditorOptions.lineHeight.validate(u.lineHeight),
						b = i.EditorOptions.letterSpacing.validate(u.letterSpacing);
					return d.a(c, n, g, p, o, f, b, a, h);
				}
				static a(u, a, h, c, n, g, p, o, f) {
					g === 0 ? (g = E * h) : g < C && (g = g * h),
						(g = Math.round(g)),
						g < C && (g = C);
					const b = 1 + (f ? 0 : w.EditorZoom.getZoomLevel() * 0.1);
					return (
						(h *= b),
						(g *= b),
						n === i.EditorFontVariations.TRANSLATE &&
							(a === "normal" || a === "bold"
								? (n = i.EditorFontVariations.OFF)
								: ((n = `'wght' ${parseInt(a, 10)}`), (a = "normal"))),
						new d({
							pixelRatio: o,
							fontFamily: u,
							fontWeight: a,
							fontSize: h,
							fontFeatureSettings: c,
							fontVariationSettings: n,
							lineHeight: g,
							letterSpacing: p,
						})
					);
				}
				constructor(u) {
					(this._bareFontInfoBrand = void 0),
						(this.pixelRatio = u.pixelRatio),
						(this.fontFamily = String(u.fontFamily)),
						(this.fontWeight = String(u.fontWeight)),
						(this.fontSize = u.fontSize),
						(this.fontFeatureSettings = u.fontFeatureSettings),
						(this.fontVariationSettings = u.fontVariationSettings),
						(this.lineHeight = u.lineHeight | 0),
						(this.letterSpacing = u.letterSpacing);
				}
				getId() {
					return `${this.pixelRatio}-${this.fontFamily}-${this.fontWeight}-${this.fontSize}-${this.fontFeatureSettings}-${this.fontVariationSettings}-${this.lineHeight}-${this.letterSpacing}`;
				}
				getMassagedFontFamily() {
					const u = i.EDITOR_FONT_DEFAULTS.fontFamily,
						a = d.b(this.fontFamily);
					return u && this.fontFamily !== u ? `${a}, ${u}` : a;
				}
				static b(u) {
					return /[,"']/.test(u) ? u : /[+ ]/.test(u) ? `"${u}"` : u;
				}
			}
			(e.$OK = d), (e.$PK = 2);
			class m extends d {
				constructor(u, a) {
					super(u),
						(this._editorStylingBrand = void 0),
						(this.version = e.$PK),
						(this.isTrusted = a),
						(this.isMonospace = u.isMonospace),
						(this.typicalHalfwidthCharacterWidth =
							u.typicalHalfwidthCharacterWidth),
						(this.typicalFullwidthCharacterWidth =
							u.typicalFullwidthCharacterWidth),
						(this.canUseHalfwidthRightwardsArrow =
							u.canUseHalfwidthRightwardsArrow),
						(this.spaceWidth = u.spaceWidth),
						(this.middotWidth = u.middotWidth),
						(this.wsmiddotWidth = u.wsmiddotWidth),
						(this.maxDigitWidth = u.maxDigitWidth);
				}
				equals(u) {
					return (
						this.fontFamily === u.fontFamily &&
						this.fontWeight === u.fontWeight &&
						this.fontSize === u.fontSize &&
						this.fontFeatureSettings === u.fontFeatureSettings &&
						this.fontVariationSettings === u.fontVariationSettings &&
						this.lineHeight === u.lineHeight &&
						this.letterSpacing === u.letterSpacing &&
						this.typicalHalfwidthCharacterWidth ===
							u.typicalHalfwidthCharacterWidth &&
						this.typicalFullwidthCharacterWidth ===
							u.typicalFullwidthCharacterWidth &&
						this.canUseHalfwidthRightwardsArrow ===
							u.canUseHalfwidthRightwardsArrow &&
						this.spaceWidth === u.spaceWidth &&
						this.middotWidth === u.middotWidth &&
						this.wsmiddotWidth === u.wsmiddotWidth &&
						this.maxDigitWidth === u.maxDigitWidth
					);
				}
			}
			e.$QK = m;
		}),
		