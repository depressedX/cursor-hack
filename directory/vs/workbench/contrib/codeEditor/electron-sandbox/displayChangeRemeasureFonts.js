define(
			de[3417],
			he([1, 0, 3, 600, 110, 30, 55, 52]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends t.$1c {
					constructor(u) {
						super(),
							this.D(
								u.onDidChangeDisplay(() => {
									i.$osb.clearAllFontInfos();
								}),
							);
					}
				};
				(m = Ne([j(0, w.$y7c)], m)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(m, d.LifecyclePhase.Eventually);
			},
		),
		