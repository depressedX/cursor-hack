define(
			de[2127],
			he([1, 0, 80, 234, 734, 316]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.captureConsoleIntegration = void 0);
				const C = "CaptureConsole",
					d = (r = {}) => {
						const u = r.levels || t.CONSOLE_LEVELS;
						return {
							name: C,
							setup(a) {
								"console" in t.GLOBAL_OBJ &&
									(0, t.addConsoleInstrumentationHandler)(
										({ args: h, level: c }) => {
											(0, i.getClient)() !== a || !u.includes(c) || m(h, c);
										},
									);
							},
						};
					};
				e.captureConsoleIntegration = (0, E.defineIntegration)(d);
				function m(r, u) {
					const a = {
						level: (0, t.severityLevelFromString)(u),
						extra: { arguments: r },
					};
					(0, i.withScope)((h) => {
						if (
							(h.addEventProcessor(
								(g) => (
									(g.logger = "console"),
									(0, t.addExceptionMechanism)(g, {
										handled: !1,
										type: "console",
									}),
									g
								),
							),
							u === "assert")
						) {
							if (!r[0]) {
								const g = `Assertion failed: ${((0, t.safeJoin))(r.slice(1), " ") || "console.assert"}`;
								h.setExtra("arguments", r.slice(1)),
									(0, w.captureMessage)(g, a);
							}
							return;
						}
						const c = r.find((g) => g instanceof Error);
						if (c) {
							(0, w.captureException)(c, a);
							return;
						}
						const n = (0, t.safeJoin)(r, " ");
						(0, w.captureMessage)(n, a);
					});
				}
			},
		),
		