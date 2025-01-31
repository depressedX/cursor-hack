import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../common/testId.js';
define(de[1265], he([1, 0, 259]), function (ce /*require*/,
 e /*exports*/,
 t /*testId*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6Kc = i);
			function i(w, E) {
				E instanceof t.$k4 || (E = t.$k4.fromString(E));
				let C = w;
				for (const d of E.path) {
					if (!C.children?.hasOwnProperty(d)) return;
					C = C.children[d];
				}
				return C.collapsed;
			}
		})
