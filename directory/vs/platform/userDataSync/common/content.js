import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/jsonEdit.js';
define(de[1669], he([1, 0, 586]), function (ce /*require*/,
 e /*exports*/,
 t /*jsonEdit*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.edit = i),
				(e.$Jwc = w),
				(e.$Kwc = E);
			function i(C, d, m, r) {
				const u = (0, t.$ro)(C, d, m, r)[0];
				return (
					u &&
						(C =
							C.substring(0, u.offset) +
							u.content +
							C.substring(u.offset + u.length)),
					C
				);
			}
			function w(C, d, m) {
				let r = m;
				for (; r >= 0; ) {
					if (C.charAt(r) === d.charAt(d.length - 1) && d.length === 1)
						return r + 1;
					if ((r--, d.length === 2 && r >= 0 && C.charAt(r) === d.charAt(0)))
						return r + 2;
				}
				return 0;
			}
			function E(C, d, m) {
				let r = m;
				for (; r >= 0; )
					if (
						(C.charAt(r) === d.charAt(d.length - 1) && d.length === 1) ||
						(r++, d.length === 2 && r >= 0 && C.charAt(r) === d.charAt(1))
					)
						return r;
				return C.length - 1;
			}
		}),
		