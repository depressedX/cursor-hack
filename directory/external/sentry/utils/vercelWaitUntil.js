import '../../../require.js';
import '../../../exports.js';
import './worldwide.js';
define(de[2089], he([1, 0, 365]), function (ce /*require*/,
 e /*exports*/,
 t /*worldwide*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.vercelWaitUntil = i);
			function i(w) {
				const E = t.GLOBAL_OBJ[Symbol.for("@vercel/request-context")],
					C = E && E.get && E.get() ? E.get() : {};
				C && C.waitUntil && C.waitUntil(w);
			}
		});
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	