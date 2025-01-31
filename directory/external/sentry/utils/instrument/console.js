import '../../../../require.js';
import '../../../../exports.js';
import '../logger.js';
import '../object.js';
import '../worldwide.js';
import './handlers.js';
define(
			de[2080],
			he([1, 0, 527, 528, 365, 726]),
			function (ce /*require*/,
 e /*exports*/,
 t /*logger*/,
 i /*object*/,
 w /*worldwide*/,
 E /*handlers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.addConsoleInstrumentationHandler = C);
				function C(m) {
					const r = "console";
					(0, E.addHandler)(r, m), (0, E.maybeInstrument)(r, d);
				}
				function d() {
					"console" in w.GLOBAL_OBJ &&
						t.CONSOLE_LEVELS.forEach(function (m) {
							m in w.GLOBAL_OBJ.console &&
								(0, i.fill)(w.GLOBAL_OBJ.console, m, function (r) {
									return (
										(t.originalConsoleMethods[m] = r),
										function (...u) {
											const a = { args: u, level: m };
											(0, E.triggerHandlers)("console", a);
											const h = t.originalConsoleMethods[m];
											h && h.apply(w.GLOBAL_OBJ.console, u);
										}
									);
								});
						});
				}
			},
		)
