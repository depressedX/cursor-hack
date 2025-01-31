import '../../../require.js';
import '../../../exports.js';
import '../../base/common/arrays.js';
import '../../base/common/strings.js';
import './core/range.js';
define(de[290], he([1, 0, 24, 37, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*strings*/,
 w /*range*/) {
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
		})
