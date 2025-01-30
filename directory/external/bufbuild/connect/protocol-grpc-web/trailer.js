import '../../../../require.js';
import '../../../../exports.js';
define(de[2017], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.trailerFlag = void 0),
				(e.trailerParse = t),
				(e.trailerSerialize = i),
				(e.createTrailerSerialization = w),
				(e.trailerFlag = 128);
			function t(E) {
				const C = new Headers(),
					d = new TextDecoder().decode(E).split(`\r
`);
				for (const m of d) {
					if (m === "") continue;
					const r = m.indexOf(":");
					if (r > 0) {
						const u = m.substring(0, r).trim(),
							a = m.substring(r + 1).trim();
						C.append(u, a);
					}
				}
				return C;
			}
			function i(E) {
				const C = [];
				return (
					E.forEach((d, m) => {
						C.push(`${m}: ${d}\r
`);
					}),
					new TextEncoder().encode(C.join(""))
				);
			}
			function w() {
				return { serialize: i, parse: t };
			}
		}),
		