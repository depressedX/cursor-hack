import '../../../require.js';
import '../../../exports.js';
define(de[2219], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Iob = void 0);
			class t {
				constructor(w, E = 0, C = w.length, d = E - 1) {
					(this.a = w), (this.b = E), (this.c = C), (this.d = d);
				}
				current() {
					return this.d === this.b - 1 || this.d === this.c
						? null
						: this.a[this.d];
				}
				next() {
					return (this.d = Math.min(this.d + 1, this.c)), this.current();
				}
				previous() {
					return (this.d = Math.max(this.d - 1, this.b - 1)), this.current();
				}
				first() {
					return (this.d = this.b), this.current();
				}
				last() {
					return (this.d = this.c - 1), this.current();
				}
			}
			e.$Iob = t;
		}),
		