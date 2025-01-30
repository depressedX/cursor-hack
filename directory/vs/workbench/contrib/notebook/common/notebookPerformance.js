import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3116], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$SIb = void 0);
			class t {
				constructor() {
					this.a = {};
				}
				get value() {
					return { ...this.a };
				}
				mark(w) {
					if (this.a[w]) {
						console.error(`Skipping overwrite of notebook perf value: ${w}`);
						return;
					}
					this.a[w] = Date.now();
				}
			}
			e.$SIb = t;
		}),
		