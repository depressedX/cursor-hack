define(
			de[4348],
			he([1, 0, 20, 3, 5, 45, 7, 4347, 137]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let r = class extends i.$1c {
					constructor(a, h) {
						super(),
							(this.b = a),
							(this.c = h),
							this.D(
								this.b.onChangeEffectManuallyDisposed({
									deps: [
										() => this.b.nonPersistentStorage.quickInputPreviewBoxDomId,
									],
									onChange: ({ deps: c }) => {
										const n = c[0];
										if (!n) {
											this.g();
											return;
										}
										this.a?.dispose(), this.f(n);
									},
								}),
							);
					}
					f(a) {
						const h = (0, C.$Ngb)()?.getElementById(a);
						if (!h) {
							this.g();
							return;
						}
						this.a = (0, d.$kZc)(h, this.c);
					}
					g() {
						this.a?.dispose();
					}
				};
				(r = Ne([j(0, E.$0zb), j(1, w.$Li)], r)),
					(0, t.$lK)(m.$rfc, r, t.InstantiationType.Eager);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	