import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1547], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Elc = e.$Dlc = e.$Clc = e.$Blc = void 0);
			const t = !1;
			(e.$Blc = !1),
				(e.$Clc = t ? console.log : () => {}),
				(e.$Dlc = t ? console.trace : () => {});
			const i = (w, E) => {
				const C = w.split(E),
					m = C.length.toString().length;
				return C.map(
					(r, u) => `${(u + 1).toString().padStart(m, " ")}: ${r}`,
				).join(E);
			};
			e.$Elc = i;
		}),
		