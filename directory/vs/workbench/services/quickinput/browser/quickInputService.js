define(
			de[3541],
			he([1, 0, 180, 5, 35, 10, 8, 39, 2868, 20, 63, 473, 31]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mxc = void 0);
				let c = class extends m.$Lxc {
					constructor(g, p, o, f, b, s, l) {
						super(p, f, b, s, g, l),
							(this.I = o),
							(this.H = a.$f9b.bindTo(this.s)),
							this.J();
					}
					J() {
						this.D(this.onShow(() => this.H.set(!0))),
							this.D(this.onHide(() => this.H.set(!1)));
					}
					z() {
						return super.z(this.t, {
							ignoreFocusOut: () =>
								!this.u.getValue("workbench.quickOpen.closeOnFocusLost"),
							backKeybindingLabel: () =>
								this.I.lookupKeybinding(
									"workbench.action.quickInputBack",
								)?.getLabel() || void 0,
						});
					}
				};
				(e.$Mxc = c),
					(e.$Mxc = c =
						Ne(
							[
								j(0, E.$gj),
								j(1, i.$Li),
								j(2, d.$uZ),
								j(3, C.$6j),
								j(4, w.$iP),
								j(5, t.$jEb),
								j(6, h.$ek),
							],
							c,
						)),
					(0, r.$lK)(u.$DJ, c, r.InstantiationType.Delayed);
			},
		),
		