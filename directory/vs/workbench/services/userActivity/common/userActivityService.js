define(
			de[1040],
			he([1, 0, 15, 6, 3, 20, 5, 1894]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qoc = e.$Poc = void 0);
				const m = 1e4;
				e.$Poc = (0, C.$Mi)("IUserActivityService");
				let r = class extends w.$1c {
					constructor(a) {
						super(),
							(this.a = this.D(
								new t.$Yh(() => {
									(this.isActive = !1), this.b.fire(!1);
								}, m),
							)),
							(this.b = this.D(new i.$re())),
							(this.c = 0),
							(this.isActive = !0),
							(this.onDidChangeIsActive = this.b.event),
							this.D((0, t.$3h)(() => d.$Ooc.take(this, a)));
					}
					markActive(a) {
						if (a?.whenHeldFor) {
							const h = new w.$Zc();
							return (
								h.add(
									(0, t.$Oh)(() => h.add(this.markActive()), a.whenHeldFor),
								),
								h
							);
						}
						return (
							++this.c === 1 &&
								((this.isActive = !0), this.b.fire(!0), this.a.cancel()),
							(0, w.$Yc)(() => {
								--this.c === 0 && this.a.schedule();
							})
						);
					}
				};
				(e.$Qoc = r),
					(e.$Qoc = r = Ne([j(0, C.$Li)], r)),
					(0, E.$lK)(e.$Poc, r, E.InstantiationType.Delayed);
			},
		),
		