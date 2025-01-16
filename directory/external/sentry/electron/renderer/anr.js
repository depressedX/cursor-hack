define(de[2148], he([1, 0, 890]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.enableAnrRendererMessages = i);
			function i(w) {
				const E = {
						pollInterval: 1e3,
						anrThreshold: 5e3,
						captureStackTrace: !1,
						...w,
					},
					C = (0, t.getIPC)();
				document.addEventListener("visibilitychange", () => {
					C.sendStatus({ status: document.visibilityState, config: E });
				}),
					C.sendStatus({ status: document.visibilityState, config: E }),
					setInterval(() => {
						C.sendStatus({ status: "alive", config: E });
					}, E.pollInterval);
			}
		}),
		define(
			de[1460],
			he([1, 0, 144, 80, 2147, 890]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.scopeToMainIntegration = void 0),
					(e.scopeToMainIntegration = (0, t.defineIntegration)(() => ({
						name: "ScopeToMain",
						setup() {
							const C = (0, E.getIPC)();
							(0, w.addScopeListener)((d, m) => {
								C.sendScope(JSON.stringify((0, i.normalize)(d, 20, 2e3))),
									m.clearBreadcrumbs(),
									m.clearAttachments();
							});
						},
					})));
			},
		),
		