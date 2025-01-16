define(
			de[3421],
			he([1, 0, 3, 49, 180, 30, 55, 52]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends t.$1c {
					constructor(u, a) {
						super();
						const h = (c) =>
							u.activeContainer.classList.toggle("context-menu-visible", c);
						this.D(a.onDidShowContextMenu(() => h(!0))),
							this.D(a.onDidHideContextMenu(() => h(!1)));
					}
				};
				(m = Ne([j(0, w.$jEb), j(1, i.$Xxb)], m)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(m, d.LifecyclePhase.Eventually);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	