import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3208], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9zc = void 0),
				(e.$0zc = h),
				(e.$$zc = c);
			const t = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`,
				i = "\\b[A-Z][^\\s" + t + "]";
			e.$9zc = { NAME: i, PUNCTUATION: t };
			const w = e.$9zc.PUNCTUATION,
				E = ["@"].join(""),
				C = "[^" + E + w + "\\s]",
				d = "(?:\\.[ |$]| |[" + w + "]|)",
				m = 120,
				r = new RegExp(
					"(^|\\s|\\()([" + E + "]((?:" + C + d + "){0," + m + "}))$",
				),
				u = 50,
				a = new RegExp("(^|\\s|\\()([" + E + "]((?:" + C + "){0," + u + "}))$");
			function h(n, g) {
				let p = r.exec(n);
				if ((p === null && (p = a.exec(n)), p !== null)) {
					const o = p[1],
						f = p[3];
					if (f.length >= g)
						return {
							leadOffset: p.index + o.length,
							matchingString: f,
							replaceableString: p[2],
						};
				}
				return null;
			}
			function c(n) {
				return h(n, 0);
			}
		}),
		