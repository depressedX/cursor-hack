import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
define(de[2565], he([1, 0, 24]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bV = void 0);
			class i {
				constructor(C) {
					(this.b = C), (this.a = []);
				}
				get(C) {
					return C < this.a.length ? this.a[C] : this.b;
				}
				set(C, d) {
					for (; C >= this.a.length; ) this.a[this.a.length] = this.b;
					this.a[C] = d;
				}
				replace(C, d, m) {
					if (C >= this.a.length) return;
					if (d === 0) {
						this.insert(C, m);
						return;
					} else if (m === 0) {
						this.delete(C, d);
						return;
					}
					const r = this.a.slice(0, C),
						u = this.a.slice(C + d),
						a = w(m, this.b);
					this.a = r.concat(a, u);
				}
				delete(C, d) {
					d === 0 || C >= this.a.length || this.a.splice(C, d);
				}
				insert(C, d) {
					if (d === 0 || C >= this.a.length) return;
					const m = [];
					for (let r = 0; r < d; r++) m[r] = this.b;
					this.a = (0, t.$Zb)(this.a, C, m);
				}
			}
			e.$bV = i;
			function w(E, C) {
				const d = [];
				for (let m = 0; m < E; m++) d[m] = C;
				return d;
			}
		})
