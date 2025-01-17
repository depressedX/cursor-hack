import '../../../../require.js';
import '../../../../exports.js';
define(de[128], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ki = void 0);
			class t {
				constructor(...w) {
					this.a = new Map();
					for (const [E, C] of w) this.set(E, C);
				}
				set(w, E) {
					const C = this.a.get(w);
					return this.a.set(w, E), C;
				}
				has(w) {
					return this.a.has(w);
				}
				get(w) {
					return this.a.get(w);
				}
			}
			e.$Ki = t;
		}),
		