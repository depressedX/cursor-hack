import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
define(de[1566], he([1, 0, 369]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Kkb = i),
				(e.$Lkb = w),
				(e.$Mkb = E);
			function i(C, d) {
				return (
					d && ((0, t.$Ajb)(d) ? d(C) : d[0](d[1], C)), C?.defaultPrevented
				);
			}
			function w(C) {
				return (d) => {
					for (const m of C) i(d, m);
				};
			}
			function E(C) {
				return (0, t.$Bjb)()
					? C.metaKey && !C.ctrlKey
					: C.ctrlKey && !C.metaKey;
			}
		})
