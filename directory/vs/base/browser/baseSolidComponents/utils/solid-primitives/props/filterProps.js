import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/solid.js';
import './propTraps.js';
define(de[2186], he([1, 0, 13, 1118]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*propTraps*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Zkb = w),
				(e.$1kb = E);
			function w(C, d) {
				return new Proxy(
					{
						get(m) {
							return m in C && d(m) ? C[m] : void 0;
						},
						has(m) {
							return m in C && d(m);
						},
						keys() {
							return Object.keys(C).filter(d);
						},
					},
					i.$Ykb,
				);
			}
			function E(C, d) {
				const m = (0, t.createMemo)(() => (Object.keys(C), {}), void 0, {
					equals: !1,
				});
				return (r) => {
					const u = m(),
						a = u[r];
					if (a !== void 0) return a;
					const h = d(r);
					return (u[r] = h), h;
				};
			}
		})
