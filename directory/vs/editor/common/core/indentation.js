import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/strings.js';
import './cursorColumns.js';
define(de[1146], he([1, 0, 37, 435]), function (ce /*require*/,
 e /*exports*/,
 t /*strings*/,
 i /*cursorColumns*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ZO = E),
				(t = mt(t));
			function w(C, d, m) {
				let r = 0;
				for (let a = 0; a < C.length; a++)
					C.charAt(a) === "	" ? (r = i.$BM.nextIndentTabStop(r, d)) : r++;
				let u = "";
				if (!m) {
					const a = Math.floor(r / d);
					r = r % d;
					for (let h = 0; h < a; h++) u += "	";
				}
				for (let a = 0; a < r; a++) u += " ";
				return u;
			}
			function E(C, d, m) {
				let r = t.$Bf(C);
				return (
					r === -1 && (r = C.length),
					w(C.substring(0, r), d, m) + C.substring(r)
				);
			}
		})
