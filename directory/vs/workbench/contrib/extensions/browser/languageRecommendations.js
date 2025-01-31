import '../../../../../require.js';
import '../../../../../exports.js';
import './extensionRecommendations.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
define(de[3297], he([1, 0, 553, 62, 314]), function (ce /*require*/,
 e /*exports*/,
 t /*extensionRecommendations*/,
 i /*productService*/,
 w /*extensionRecommendations*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$KTc = void 0);
			let E = class extends t.$DTc {
				get recommendations() {
					return this.a;
				}
				constructor(d) {
					super(), (this.b = d), (this.a = []);
				}
				async c() {
					this.b.languageExtensionTips &&
						(this.a = this.b.languageExtensionTips.map((d) => ({
							extension: d.toLowerCase(),
							reason: {
								reasonId: w.ExtensionRecommendationReason.Application,
								reasonText: "",
							},
						})));
				}
			};
			(e.$KTc = E), (e.$KTc = E = Ne([j(0, i.$Bk)], E));
		})
