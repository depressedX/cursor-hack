define(
			de[3212],
			he([1, 0, 8, 49, 72, 39, 1722, 355]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$e6c = void 0);
				let m = class extends C.$QVc {
					async S(u) {}
					constructor(u, a, h, c, n) {
						super(
							{
								showCommonFindToggles: !1,
								checkImeCompletionState: u.checkImeCompletionState,
								enableSash: !0,
							},
							a,
							h,
							c,
							n,
						),
							(this.gb = u),
							(this.fb = d.$1Ib.bindTo(h)),
							this.D(
								u.hasFindResult((g) => {
									this.bb(g), this.cb();
								}),
							),
							this.D(
								u.onDidStopFind(() => {
									this.bb(!1);
								}),
							);
					}
					find(u) {
						const a = this.U;
						a && this.gb.find(a, u);
					}
					hide(u = !0) {
						super.hide(u), this.gb.stopFind(!0), this.gb.focus();
					}
					N() {
						const u = this.U;
						return u ? this.gb.updateFind(u) : this.gb.stopFind(!1), !1;
					}
					O() {
						this.fb.set(!0);
					}
					P() {
						this.fb.reset();
					}
					Q() {}
					R() {}
					findFirst() {}
				};
				(e.$e6c = m),
					(e.$e6c = m =
						Ne([j(1, i.$Wxb), j(2, t.$6j), j(3, w.$Uyb), j(4, E.$uZ)], m));
			},
		),
		