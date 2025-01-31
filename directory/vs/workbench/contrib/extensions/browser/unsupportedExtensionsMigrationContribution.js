import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensionManagement/common/extensionStorage.js';
import '../../../../platform/extensionManagement/common/unsupportedExtensionsMigration.js';
import '../../../../platform/log/common/log.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
define(
			de[3292],
			he([1, 0, 119, 677, 2818, 34, 157]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensionManagement*/,
 i /*extensionStorage*/,
 w /*unsupportedExtensionsMigration*/,
 E /*log*/,
 C /*extensionManagement*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Tc = void 0);
				let d = class {
					constructor(r, u, a, h, c) {
						r.remoteExtensionManagementServer &&
							(0, w.$ZTc)(
								r.remoteExtensionManagementServer.extensionManagementService,
								u,
								a,
								h,
								c,
							),
							r.webExtensionManagementServer &&
								(0, w.$ZTc)(
									r.webExtensionManagementServer.extensionManagementService,
									u,
									a,
									h,
									c,
								);
					}
				};
				(e.$1Tc = d),
					(e.$1Tc = d =
						Ne(
							[
								j(0, C.$EQb),
								j(1, t.$Ep),
								j(2, i.$1N),
								j(3, t.$Kp),
								j(4, E.$ik),
							],
							d,
						));
			},
		)
