import '../../../require.js';
import '../../../exports.js';
define(de[584], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Sdb = e.$Rdb = void 0);
			class t {
				constructor(w) {
					(this.a = w), (this.b = 0);
				}
				nextId() {
					return this.a + ++this.b;
				}
			}
			(e.$Rdb = t), (e.$Sdb = new t("id#"));
		}),
		