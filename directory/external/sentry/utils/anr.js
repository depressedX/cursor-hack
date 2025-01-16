define(de[2079], he([1, 0, 1424, 528, 725]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.watchdogTimer = E),
				(e.callFrameToStackFrame = C);
			function E(d, m, r, u) {
				const a = d();
				let h = !1,
					c = !0;
				return (
					setInterval(() => {
						const n = a.getTimeMs();
						h === !1 && n > m + r && ((h = !0), c && u()),
							n < m + r && (h = !1);
					}, 20),
					{
						poll: () => {
							a.reset();
						},
						enabled: (n) => {
							c = n;
						},
					}
				);
			}
			function C(d, m, r) {
				const u = m ? m.replace(/^file:\/\//, "") : void 0,
					a = d.location.columnNumber ? d.location.columnNumber + 1 : void 0,
					h = d.location.lineNumber ? d.location.lineNumber + 1 : void 0;
				return (0, i.dropUndefinedKeys)({
					filename: u,
					module: r(u),
					function: d.functionName || w.UNKNOWN_FUNCTION,
					colno: a,
					lineno: h,
					in_app: u ? (0, t.filenameIsInApp)(u) : void 0,
				});
			}
		}),
		define(
			de[2080],
			he([1, 0, 527, 528, 365, 726]),
			function (ce, e, t, i, w, E) {
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
		),
		