define(de[3296], he([1, 0, 553, 62, 314]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$JTc = void 0);
			let E = class extends t.$DTc {
				get recommendations() {
					return this.a;
				}
				constructor(d) {
					super(), (this.b = d), (this.a = []);
				}
				async c() {
					this.b.keymapExtensionTips &&
						(this.a = this.b.keymapExtensionTips.map((d) => ({
							extension: d.toLowerCase(),
							reason: {
								reasonId: w.ExtensionRecommendationReason.Application,
								reasonText: "",
							},
						})));
				}
			};
			(e.$JTc = E), (e.$JTc = E = Ne([j(0, i.$Bk)], E));
		}),
		