import '../../../require.js';
import '../../../exports.js';
define(de[493], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Wsb =
					e.$Vsb =
					e.$Usb =
					e.$Tsb =
					e.$Ssb =
					e.$Rsb =
					e.VerticalRevealType =
					e.$Qsb =
					e.$Psb =
					e.$Osb =
					e.$Nsb =
					e.$Msb =
					e.$Lsb =
					e.$Ksb =
					e.$Jsb =
					e.$Isb =
					e.$Hsb =
					e.$Gsb =
					e.$Fsb =
					e.ViewEventType =
						void 0);
			var t;
			(function (y) {
				(y[(y.ViewCompositionStart = 0)] = "ViewCompositionStart"),
					(y[(y.ViewCompositionEnd = 1)] = "ViewCompositionEnd"),
					(y[(y.ViewConfigurationChanged = 2)] = "ViewConfigurationChanged"),
					(y[(y.ViewCursorStateChanged = 3)] = "ViewCursorStateChanged"),
					(y[(y.ViewDecorationsChanged = 4)] = "ViewDecorationsChanged"),
					(y[(y.ViewFlushed = 5)] = "ViewFlushed"),
					(y[(y.ViewFocusChanged = 6)] = "ViewFocusChanged"),
					(y[(y.ViewLanguageConfigurationChanged = 7)] =
						"ViewLanguageConfigurationChanged"),
					(y[(y.ViewLineMappingChanged = 8)] = "ViewLineMappingChanged"),
					(y[(y.ViewLinesChanged = 9)] = "ViewLinesChanged"),
					(y[(y.ViewLinesDeleted = 10)] = "ViewLinesDeleted"),
					(y[(y.ViewLinesInserted = 11)] = "ViewLinesInserted"),
					(y[(y.ViewRevealRangeRequest = 12)] = "ViewRevealRangeRequest"),
					(y[(y.ViewScrollChanged = 13)] = "ViewScrollChanged"),
					(y[(y.ViewThemeChanged = 14)] = "ViewThemeChanged"),
					(y[(y.ViewTokensChanged = 15)] = "ViewTokensChanged"),
					(y[(y.ViewTokensColorsChanged = 16)] = "ViewTokensColorsChanged"),
					(y[(y.ViewZonesChanged = 17)] = "ViewZonesChanged");
			})(t || (e.ViewEventType = t = {}));
			class i {
				constructor() {
					this.type = t.ViewCompositionStart;
				}
			}
			e.$Fsb = i;
			class w {
				constructor() {
					this.type = t.ViewCompositionEnd;
				}
			}
			e.$Gsb = w;
			class E {
				constructor($) {
					(this.type = t.ViewConfigurationChanged), (this._source = $);
				}
				hasChanged($) {
					return this._source.hasChanged($);
				}
			}
			e.$Hsb = E;
			class C {
				constructor($, v, S) {
					(this.selections = $),
						(this.modelSelections = v),
						(this.reason = S),
						(this.type = t.ViewCursorStateChanged);
				}
			}
			e.$Isb = C;
			class d {
				constructor($) {
					(this.type = t.ViewDecorationsChanged),
						$
							? ((this.affectsMinimap = $.affectsMinimap),
								(this.affectsOverviewRuler = $.affectsOverviewRuler),
								(this.affectsGlyphMargin = $.affectsGlyphMargin),
								(this.affectsLineNumber = $.affectsLineNumber))
							: ((this.affectsMinimap = !0),
								(this.affectsOverviewRuler = !0),
								(this.affectsGlyphMargin = !0),
								(this.affectsLineNumber = !0));
				}
			}
			e.$Jsb = d;
			class m {
				constructor() {
					this.type = t.ViewFlushed;
				}
			}
			e.$Ksb = m;
			class r {
				constructor($) {
					(this.type = t.ViewFocusChanged), (this.isFocused = $);
				}
			}
			e.$Lsb = r;
			class u {
				constructor() {
					this.type = t.ViewLanguageConfigurationChanged;
				}
			}
			e.$Msb = u;
			class a {
				constructor() {
					this.type = t.ViewLineMappingChanged;
				}
			}
			e.$Nsb = a;
			class h {
				constructor($, v) {
					(this.fromLineNumber = $),
						(this.count = v),
						(this.type = t.ViewLinesChanged);
				}
			}
			e.$Osb = h;
			class c {
				constructor($, v) {
					(this.type = t.ViewLinesDeleted),
						(this.fromLineNumber = $),
						(this.toLineNumber = v);
				}
			}
			e.$Psb = c;
			class n {
				constructor($, v) {
					(this.type = t.ViewLinesInserted),
						(this.fromLineNumber = $),
						(this.toLineNumber = v);
				}
			}
			e.$Qsb = n;
			var g;
			(function (y) {
				(y[(y.Simple = 0)] = "Simple"),
					(y[(y.Center = 1)] = "Center"),
					(y[(y.CenterIfOutsideViewport = 2)] = "CenterIfOutsideViewport"),
					(y[(y.Top = 3)] = "Top"),
					(y[(y.Bottom = 4)] = "Bottom"),
					(y[(y.NearTop = 5)] = "NearTop"),
					(y[(y.NearTopIfOutsideViewport = 6)] = "NearTopIfOutsideViewport");
			})(g || (e.VerticalRevealType = g = {}));
			class p {
				constructor($, v, S, I, T, P, k) {
					(this.source = $),
						(this.minimalReveal = v),
						(this.range = S),
						(this.selections = I),
						(this.verticalType = T),
						(this.revealHorizontal = P),
						(this.scrollType = k),
						(this.type = t.ViewRevealRangeRequest);
				}
			}
			e.$Rsb = p;
			class o {
				constructor($) {
					(this.type = t.ViewScrollChanged),
						(this.scrollWidth = $.scrollWidth),
						(this.scrollLeft = $.scrollLeft),
						(this.scrollHeight = $.scrollHeight),
						(this.scrollTop = $.scrollTop),
						(this.scrollWidthChanged = $.scrollWidthChanged),
						(this.scrollLeftChanged = $.scrollLeftChanged),
						(this.scrollHeightChanged = $.scrollHeightChanged),
						(this.scrollTopChanged = $.scrollTopChanged);
				}
			}
			e.$Ssb = o;
			class f {
				constructor($) {
					(this.theme = $), (this.type = t.ViewThemeChanged);
				}
			}
			e.$Tsb = f;
			class b {
				constructor($) {
					(this.type = t.ViewTokensChanged), (this.ranges = $);
				}
			}
			e.$Usb = b;
			class s {
				constructor() {
					this.type = t.ViewTokensColorsChanged;
				}
			}
			e.$Vsb = s;
			class l {
				constructor() {
					this.type = t.ViewZonesChanged;
				}
			}
			e.$Wsb = l;
		})
