import '../../../../require.js';
import '../../../../exports.js';
define(de[1420], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e._optionalChain = t);
			function t(i) {
				let w,
					E = i[0],
					C = 1;
				for (; C < i.length; ) {
					const d = i[C],
						m = i[C + 1];
					if (
						((C += 2),
						(d === "optionalAccess" || d === "optionalCall") && E == null)
					)
						return;
					d === "access" || d === "optionalAccess"
						? ((w = E), (E = m(E)))
						: (d === "call" || d === "optionalCall") &&
							((E = m((...r) => E.call(w, ...r))), (w = void 0));
				}
				return E;
			}
		}),
		