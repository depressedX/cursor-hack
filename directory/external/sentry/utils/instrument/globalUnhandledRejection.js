import '../../../../require.js';
import '../../../../exports.js';
import '../worldwide.js';
import './handlers.js';
define(de[2078], he([1, 0, 365, 726]), function (ce /*require*/,
 e /*exports*/,
 t /*worldwide*/,
 i /*handlers*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.addGlobalUnhandledRejectionInstrumentationHandler = E);
			let w = null;
			function E(d) {
				const m = "unhandledrejection";
				(0, i.addHandler)(m, d), (0, i.maybeInstrument)(m, C);
			}
			function C() {
				(w = t.GLOBAL_OBJ.onunhandledrejection),
					(t.GLOBAL_OBJ.onunhandledrejection = function (d) {
						const m = d;
						return (
							(0, i.triggerHandlers)("unhandledrejection", m),
							w && !w.__SENTRY_LOADER__ ? w.apply(this, arguments) : !0
						);
					}),
					(t.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
			}
		})
