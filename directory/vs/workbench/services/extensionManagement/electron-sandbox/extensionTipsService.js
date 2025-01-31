import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/ipc/electron-sandbox/services.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensionManagement/common/extensionTipsService.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/network.js';
define(
			de[3293],
			he([1, 0, 20, 230, 119, 2897, 22, 62, 23]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*services*/,
 w /*extensionManagement*/,
 E /*extensionTipsService*/,
 C /*files*/,
 d /*productService*/,
 m /*network*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let r = class extends E.$R5c {
					constructor(a, h, c) {
						super(a, h), (this.g = c.getChannel("extensionTipsService"));
					}
					getConfigBasedTips(a) {
						return a.scheme === m.Schemas.file
							? this.g.call("getConfigBasedTips", [a])
							: super.getConfigBasedTips(a);
					}
					getImportantExecutableBasedTips() {
						return this.g.call("getImportantExecutableBasedTips");
					}
					getOtherExecutableBasedTips() {
						return this.g.call("getOtherExecutableBasedTips");
					}
				};
				(r = Ne([j(0, C.$ll), j(1, d.$Bk), j(2, i.$Vbd)], r)),
					(0, t.$lK)(w.$Lp, r, t.InstantiationType.Delayed);
			},
		)
