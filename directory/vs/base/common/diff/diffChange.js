import '../../../../require.js';
import '../../../../exports.js';
define(de[2216], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$lL = void 0);
			class t {
				constructor(w, E, C, d) {
					(this.originalStart = w),
						(this.originalLength = E),
						(this.modifiedStart = C),
						(this.modifiedLength = d);
				}
				getOriginalEnd() {
					return this.originalStart + this.originalLength;
				}
				getModifiedEnd() {
					return this.modifiedStart + this.modifiedLength;
				}
			}
			e.$lL = t;
		})
