define(
			de[3414],
			he([1, 0, 81, 5, 30, 55, 3396, 3397, 175, 52, 3017, 3018]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const h = m.$n2.registerExtensionPoint(C.$X1c),
					c = m.$n2.registerExtensionPoint(d.$Y1c);
				w.$Io.as(t.$No.Configuration).registerConfiguration(u.$Z1c),
					w.$Io.as(t.$No.Configuration).registerConfiguration(u.$11c);
				let n = class {
					constructor(p) {
						p.createInstance(u.$21c, h), p.createInstance(a.$31c, c);
					}
				};
				(n = Ne([j(0, i.$Li)], n)),
					w.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(n, r.LifecyclePhase.Eventually);
			},
		),
		