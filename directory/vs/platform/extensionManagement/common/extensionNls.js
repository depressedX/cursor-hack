import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/types.js';
import '../../../nls.js';
define(de[1598], he([1, 0, 28, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*types*/,
 i /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$cr = w);
			function w(C, d, m, r) {
				try {
					E(C, d, m, r);
				} catch (u) {
					C.error(u?.message ?? u);
				}
				return d;
			}
			function E(C, d, m, r) {
				const u = (a, h, c) => {
					const n = a[h];
					if ((0, t.$lg)(n)) {
						const g = n,
							p = g.length;
						if (p > 1 && g[0] === "%" && g[p - 1] === "%") {
							const o = g.substr(1, p - 2);
							let f = m[o];
							f === void 0 && r && (f = r[o]);
							const b = typeof f == "string" ? f : f?.message,
								s = r?.[o],
								l = typeof s == "string" ? s : s?.message;
							if (!b) {
								l || C.warn(`[${d.name}]: ${(0, i.localize)(1826, null, o)}`);
								return;
							}
							if (c && (h === "title" || h === "category") && l && l !== b) {
								const y = { value: b, original: l };
								a[h] = y;
							} else a[h] = b;
						}
					} else if ((0, t.$ng)(n))
						for (const g in n)
							n.hasOwnProperty(g) &&
								(g === "commands" ? u(n, g, !0) : u(n, g, c));
					else if (Array.isArray(n))
						for (let g = 0; g < n.length; g++) u(n, g, c);
				};
				for (const a in d) d.hasOwnProperty(a) && u(d, a);
			}
		})
