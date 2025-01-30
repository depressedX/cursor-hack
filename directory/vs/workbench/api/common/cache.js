import '../../../../require.js';
import '../../../../exports.js';
define(Pe[186], Ne([1, 0]), function (we, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$7gd = void 0);
			class e {
				static {
					this.a = !1;
				}
				constructor(S) {
					(this.d = S), (this.b = new Map()), (this.c = 1);
				}
				add(S) {
					const N = this.c++;
					return this.b.set(N, S), this.e(), N;
				}
				get(S, N) {
					return this.b.has(S) ? this.b.get(S)[N] : void 0;
				}
				delete(S) {
					this.b.delete(S), this.e();
				}
				e() {
					e.a && console.log(`${this.d} cache size - ${this.b.size}`);
				}
			}
			t.$7gd = e;
		}),
		