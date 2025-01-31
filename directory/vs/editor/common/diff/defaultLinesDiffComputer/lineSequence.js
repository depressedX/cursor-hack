import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/charCode.js';
define(de[2551], he([1, 0, 120]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$gxb = void 0);
			class i {
				constructor(C, d) {
					(this.a = C), (this.b = d);
				}
				getElement(C) {
					return this.a[C];
				}
				get length() {
					return this.a.length;
				}
				getBoundaryScore(C) {
					const d = C === 0 ? 0 : w(this.b[C - 1]),
						m = C === this.b.length ? 0 : w(this.b[C]);
					return 1e3 - (d + m);
				}
				getText(C) {
					return this.b.slice(C.start, C.endExclusive).join(`
`);
				}
				isStronglyEqual(C, d) {
					return this.b[C] === this.b[d];
				}
			}
			e.$gxb = i;
			function w(E) {
				let C = 0;
				for (
					;
					C < E.length &&
					(E.charCodeAt(C) === t.CharCode.Space ||
						E.charCodeAt(C) === t.CharCode.Tab);
				)
					C++;
				return C;
			}
		})
