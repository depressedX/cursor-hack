import '../../../../../require.js';
import '../../../../../exports.js';
import './extensionRecommendations.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../nls.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
define(
			de[3299],
			he([1, 0, 553, 62, 314, 4, 157]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensionRecommendations*/,
 i /*productService*/,
 w /*extensionRecommendations*/,
 E /*nls*/,
 C /*extensionManagement*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MTc = void 0);
				let d = class extends t.$DTc {
					get recommendations() {
						return this.a;
					}
					constructor(r, u) {
						super(), (this.b = r), (this.g = u), (this.a = []);
					}
					async c() {
						this.g.webExtensionManagementServer &&
							!this.g.localExtensionManagementServer &&
							!this.g.remoteExtensionManagementServer &&
							Array.isArray(this.b.webExtensionTips) &&
							(this.a = this.b.webExtensionTips.map((u) => ({
								extension: u.toLowerCase(),
								reason: {
									reasonId: w.ExtensionRecommendationReason.Application,
									reasonText: (0, E.localize)(6582, null, this.b.nameLong),
								},
							})));
					}
				};
				(e.$MTc = d), (e.$MTc = d = Ne([j(0, i.$Bk), j(1, C.$EQb)], d));
			},
		)
