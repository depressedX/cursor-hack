import '../../../../../require.js';
import '../../../../../exports.js';
define(de[2585], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YDb = e.$XDb = void 0);
			class t {
				constructor(E, C, d) {
					(this.anchor = E), (this.hoverParts = C), (this.isComplete = d);
				}
				filter(E) {
					const C = this.hoverParts.filter((d) => d.isValidForHoverAnchor(E));
					return C.length === this.hoverParts.length
						? this
						: new i(this, this.anchor, C, this.isComplete);
				}
			}
			e.$XDb = t;
			class i extends t {
				constructor(E, C, d, m) {
					super(C, d, m), (this.a = E);
				}
				filter(E) {
					return this.a.filter(E);
				}
			}
			e.$YDb = i;
		})
