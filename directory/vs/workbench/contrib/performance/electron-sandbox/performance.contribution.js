define(
			de[3738],
			he([1, 0, 52, 30, 55, 3736, 3737, 3735, 81, 4, 224]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(d.$Cgd, t.LifecyclePhase.Eventually),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(E.$Agd, t.LifecyclePhase.Restored),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(C.$Bgd, t.LifecyclePhase.Eventually),
					i.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...u.$u6,
							properties: {
								"application.experimental.rendererProfiling": {
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									markdownDescription: (0, r.localize)(8329, null),
								},
							},
						});
			},
		),
		