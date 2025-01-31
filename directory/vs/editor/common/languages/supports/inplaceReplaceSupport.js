import '../../../../../require.js';
import '../../../../../exports.js';
define(de[2561], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3wb = void 0);
			class t {
				constructor() {
					this.c = [
						["true", "false"],
						["True", "False"],
						[
							"Private",
							"Public",
							"Friend",
							"ReadOnly",
							"Partial",
							"Protected",
							"WriteOnly",
						],
						["public", "protected", "private"],
					];
				}
				static {
					this.INSTANCE = new t();
				}
				navigateValueSet(w, E, C, d, m) {
					if (w && E) {
						const r = this.a(E, m);
						if (r) return { range: w, value: r };
					}
					if (C && d) {
						const r = this.a(d, m);
						if (r) return { range: C, value: r };
					}
					return null;
				}
				a(w, E) {
					const C = this.b(w, E);
					return C !== null ? C : this.d(w, E);
				}
				b(w, E) {
					const C = Math.pow(10, w.length - (w.lastIndexOf(".") + 1));
					let d = Number(w);
					const m = parseFloat(w);
					return !isNaN(d) && !isNaN(m) && d === m
						? d === 0 && !E
							? null
							: ((d = Math.floor(d * C)), (d += E ? C : -C), String(d / C))
						: null;
				}
				d(w, E) {
					return this.e(this.c, w, E);
				}
				e(w, E, C) {
					let d = null;
					for (let m = 0, r = w.length; d === null && m < r; m++)
						d = this.f(w[m], E, C);
					return d;
				}
				f(w, E, C) {
					let d = w.indexOf(E);
					return d >= 0
						? ((d += C ? 1 : -1),
							d < 0 ? (d = w.length - 1) : (d %= w.length),
							w[d])
						: null;
				}
			}
			e.$3wb = t;
		})
