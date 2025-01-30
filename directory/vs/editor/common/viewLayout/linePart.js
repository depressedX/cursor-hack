import '../../../../require.js';
import '../../../../exports.js';
define(de[1545], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Eub = e.LinePartMetadata = void 0);
			var t;
			(function (w) {
				(w[(w.IS_WHITESPACE = 1)] = "IS_WHITESPACE"),
					(w[(w.PSEUDO_BEFORE = 2)] = "PSEUDO_BEFORE"),
					(w[(w.PSEUDO_AFTER = 4)] = "PSEUDO_AFTER"),
					(w[(w.IS_WHITESPACE_MASK = 1)] = "IS_WHITESPACE_MASK"),
					(w[(w.PSEUDO_BEFORE_MASK = 2)] = "PSEUDO_BEFORE_MASK"),
					(w[(w.PSEUDO_AFTER_MASK = 4)] = "PSEUDO_AFTER_MASK");
			})(t || (e.LinePartMetadata = t = {}));
			class i {
				constructor(E, C, d, m) {
					(this.endIndex = E),
						(this.type = C),
						(this.metadata = d),
						(this.containsRTL = m),
						(this._linePartBrand = void 0);
				}
				isWhitespace() {
					return !!(this.metadata & t.IS_WHITESPACE_MASK);
				}
				isPseudoAfter() {
					return !!(this.metadata & t.PSEUDO_AFTER_MASK);
				}
			}
			e.$Eub = i;
		}),
		