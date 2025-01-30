import '../../../require.js';
import '../../../exports.js';
define(de[2556], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Rvb = void 0);
			class t {
				constructor(w, E, C, d, m, r, u) {
					(this.id = w),
						(this.label = E),
						(this.alias = C),
						(this.metadata = d),
						(this.a = m),
						(this.b = r),
						(this.c = u);
				}
				isSupported() {
					return this.c.contextMatchesRules(this.a);
				}
				run(w) {
					return this.isSupported() ? this.b(w) : Promise.resolve(void 0);
				}
			}
			e.$Rvb = t;
		}),
		