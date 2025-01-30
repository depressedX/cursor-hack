import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
define(de[1149], he([1, 0, 120]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$BU = i);
			function i(w, E) {
				let C = 0,
					d = 0;
				const m = w.length;
				for (; d < m; ) {
					const r = w.charCodeAt(d);
					if (r === t.CharCode.Space) C++;
					else if (r === t.CharCode.Tab) C = C - (C % E) + E;
					else break;
					d++;
				}
				return d === m ? -1 : C;
			}
		}),
		