import '../../../../require.js';
import '../../../../exports.js';
import '../encodedTokenAttributes.js';
define(de[748], he([1, 0, 171]), function (ce /*require*/,
 e /*exports*/,
 t /*encodedTokenAttributes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$pM = void 0),
				(e.$oM = i),
				(e.$qM = C);
			function i(d, m) {
				const r = d.getCount(),
					u = d.findTokenIndexAtOffset(m),
					a = d.getLanguageId(u);
				let h = u;
				for (; h + 1 < r && d.getLanguageId(h + 1) === a; ) h++;
				let c = u;
				for (; c > 0 && d.getLanguageId(c - 1) === a; ) c--;
				return new w(d, a, c, h + 1, d.getStartOffset(c), d.getEndOffset(h));
			}
			class w {
				constructor(m, r, u, a, h, c) {
					(this._scopedLineTokensBrand = void 0),
						(this.a = m),
						(this.languageId = r),
						(this.b = u),
						(this.c = a),
						(this.firstCharOffset = h),
						(this.d = c),
						(this.languageIdCodec = m.languageIdCodec);
				}
				getLineContent() {
					return this.a
						.getLineContent()
						.substring(this.firstCharOffset, this.d);
				}
				getLineLength() {
					return this.d - this.firstCharOffset;
				}
				getActualLineContentBefore(m) {
					return this.a.getLineContent().substring(0, this.firstCharOffset + m);
				}
				getTokenCount() {
					return this.c - this.b;
				}
				findTokenIndexAtOffset(m) {
					return (
						this.a.findTokenIndexAtOffset(m + this.firstCharOffset) - this.b
					);
				}
				getStandardTokenType(m) {
					return this.a.getStandardTokenType(m + this.b);
				}
				toIViewLineTokens() {
					return this.a.sliceAndInflate(this.firstCharOffset, this.d, 0);
				}
			}
			e.$pM = w;
			var E;
			(function (d) {
				d[(d.value = 3)] = "value";
			})(E || (E = {}));
			function C(d) {
				return (d & E.value) !== 0;
			}
		}),
		