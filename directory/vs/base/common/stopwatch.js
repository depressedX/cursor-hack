import '../../../require.js';
import '../../../exports.js';
define(de[162], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$le = void 0);
			const t =
				globalThis.performance &&
				typeof globalThis.performance.now == "function";
			class i {
				static create(E) {
					return new i(E);
				}
				constructor(E) {
					(this.c =
						t && E === !1
							? Date.now
							: globalThis.performance.now.bind(globalThis.performance)),
						(this.a = this.c()),
						(this.b = -1);
				}
				stop() {
					this.b = this.c();
				}
				reset() {
					(this.a = this.c()), (this.b = -1);
				}
				elapsed() {
					return this.b !== -1 ? this.b - this.a : this.c() - this.a;
				}
			}
			e.$le = i;
		}),
		