import '../../../../../require.js';
import '../../../../../exports.js';
import './extensionRecommendations.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../base/common/platform.js';
define(
			de[3298],
			he([1, 0, 553, 62, 314, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensionRecommendations*/,
 i /*productService*/,
 w /*extensionRecommendations*/,
 E /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NTc = void 0);
				let C = class extends t.$DTc {
					get recommendations() {
						return this.a;
					}
					constructor(m) {
						super(), (this.b = m), (this.a = []);
					}
					async c() {
						const m = {
								...this.b.remoteExtensionTips,
								...this.b.virtualWorkspaceExtensionTips,
							},
							r = (0, E.$k)(E.$x);
						this.a = Object.values(m)
							.filter(({ supportedPlatforms: u }) => !u || u.includes(r))
							.map((u) => ({
								extension: u.extensionId.toLowerCase(),
								reason: {
									reasonId: w.ExtensionRecommendationReason.Application,
									reasonText: "",
								},
							}));
					}
				};
				(e.$NTc = C), (e.$NTc = C = Ne([j(0, i.$Bk)], C));
			},
		)
