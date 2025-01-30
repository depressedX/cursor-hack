import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uint.js';
define(de[654], he([1, 0, 210]), function (ce /*require*/,
 e /*exports*/,
 t /*uint*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$OL = e.$NL = void 0);
			class i {
				constructor(d) {
					const m = (0, t.$hf)(d);
					(this.c = m), (this.a = i.d(m)), (this.b = new Map());
				}
				static d(d) {
					const m = new Uint8Array(256);
					return m.fill(d), m;
				}
				set(d, m) {
					const r = (0, t.$hf)(m);
					d >= 0 && d < 256 ? (this.a[d] = r) : this.b.set(d, r);
				}
				get(d) {
					return d >= 0 && d < 256 ? this.a[d] : this.b.get(d) || this.c;
				}
				clear() {
					this.a.fill(this.c), this.b.clear();
				}
			}
			e.$NL = i;
			var w;
			(function (C) {
				(C[(C.False = 0)] = "False"), (C[(C.True = 1)] = "True");
			})(w || (w = {}));
			class E {
				constructor() {
					this.a = new i(w.False);
				}
				add(d) {
					this.a.set(d, w.True);
				}
				has(d) {
					return this.a.get(d) === w.True;
				}
				clear() {
					return this.a.clear();
				}
			}
			e.$OL = E;
		}),
		