import '../../../../require.js';
import '../../../../exports.js';
define(de[776], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$aIb = t);
			function t(i, w = {}) {
				let E = "";
				return (
					w.excludeLeadingNewLine ||
						(E += `\r
`),
					(E += "\x1B[0m\x1B[7m * "),
					w.loudFormatting ? (E += "\x1B[0;104m") : (E += "\x1B[0m"),
					(E += ` ${i} \x1B[0m
\r`),
					E
				);
			}
		}),
		