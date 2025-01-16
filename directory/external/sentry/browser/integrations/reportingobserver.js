define(de[2136], he([1, 0, 144, 80]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.reportingObserverIntegration = void 0);
			const w = i.GLOBAL_OBJ,
				E = "ReportingObserver",
				C = new WeakMap(),
				d = (m = {}) => {
					const r = m.types || ["crash", "deprecation", "intervention"];
					function u(a) {
						if (C.has((0, t.getClient)()))
							for (const h of a)
								(0, t.withScope)((c) => {
									c.setExtra("url", h.url);
									const n = `ReportingObserver [${h.type}]`;
									let g = "No details available";
									if (h.body) {
										const p = {};
										for (const o in h.body) p[o] = h.body[o];
										if ((c.setExtra("body", p), h.type === "crash")) {
											const o = h.body;
											g =
												[o.crashId || "", o.reason || ""].join(" ").trim() || g;
										} else g = h.body.message || g;
									}
									(0, t.captureMessage)(`${n}: ${g}`);
								});
					}
					return {
						name: E,
						setupOnce() {
							if (!(0, i.supportsReportingObserver)()) return;
							new w.ReportingObserver(u, { buffered: !0, types: r }).observe();
						},
						setup(a) {
							C.set(a, !0);
						},
					};
				};
			e.reportingObserverIntegration = (0, t.defineIntegration)(d);
		}),
		