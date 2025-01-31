import '../../../require.js';
import '../../../exports.js';
define(de[149], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Y = void 0);
			class t {
				constructor(w) {
					(this.d = w), (this.a = !1);
				}
				get hasValue() {
					return this.a;
				}
				get value() {
					if (!this.a)
						try {
							this.b = this.d();
						} catch (w) {
							this.c = w;
						} finally {
							this.a = !0;
						}
					if (this.c) throw this.c;
					return this.b;
				}
				get rawValue() {
					return this.b;
				}
			}
			e.$Y = t;
		})
