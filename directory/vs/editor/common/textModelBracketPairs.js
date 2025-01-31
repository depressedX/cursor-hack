import '../../../require.js';
import '../../../exports.js';
define(de[2570], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sN = e.$rN = e.$qN = void 0);
			class t {
				constructor(C, d, m, r) {
					(this.range = C),
						(this.nestingLevel = d),
						(this.nestingLevelOfEqualBracketType = m),
						(this.isInvalid = r);
				}
			}
			e.$qN = t;
			class i {
				constructor(C, d, m, r, u, a) {
					(this.range = C),
						(this.openingBracketRange = d),
						(this.closingBracketRange = m),
						(this.nestingLevel = r),
						(this.nestingLevelOfEqualBracketType = u),
						(this.a = a);
				}
				get openingBracketInfo() {
					return this.a.openingBracket.bracketInfo;
				}
				get closingBracketInfo() {
					return this.a.closingBracket?.bracketInfo;
				}
			}
			e.$rN = i;
			class w extends i {
				constructor(C, d, m, r, u, a, h) {
					super(C, d, m, r, u, a), (this.minVisibleColumnIndentation = h);
				}
			}
			e.$sN = w;
		})
