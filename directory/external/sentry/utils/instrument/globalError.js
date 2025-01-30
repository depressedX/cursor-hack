import '../../../../require.js';
import '../../../../exports.js';
import '../worldwide.js';
import './handlers.js';
define(de[2077], he([1, 0, 365, 726]), function (ce /*require*/,
 e /*exports*/,
 t /*worldwide*/,
 i /*handlers*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.addGlobalErrorInstrumentationHandler = E);
			let w = null;
			function E(d) {
				const m = "error";
				(0, i.addHandler)(m, d), (0, i.maybeInstrument)(m, C);
			}
			function C() {
				(w = t.GLOBAL_OBJ.onerror),
					(t.GLOBAL_OBJ.onerror = function (d, m, r, u, a) {
						const h = { column: u, error: a, line: r, msg: d, url: m };
						return (
							(0, i.triggerHandlers)("error", h),
							w && !w.__SENTRY_LOADER__ ? w.apply(this, arguments) : !1
						);
					}),
					(t.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0);
			}
		}),
		