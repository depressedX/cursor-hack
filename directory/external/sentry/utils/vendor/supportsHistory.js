import '../../../../require.js';
import '../../../../exports.js';
import '../worldwide.js';
define(de[2086], he([1, 0, 365]), function (ce /*require*/,
 e /*exports*/,
 t /*worldwide*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.supportsHistory = w);
			const i = t.GLOBAL_OBJ;
			function w() {
				const E = i.chrome,
					C = E && E.app && E.app.runtime,
					d =
						"history" in i && !!i.history.pushState && !!i.history.replaceState;
				return !C && d;
			}
		})
