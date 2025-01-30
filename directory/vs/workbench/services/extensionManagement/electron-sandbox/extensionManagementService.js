import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../common/extensionManagementService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../common/extensionManagement.js';
import '../../../../base/common/network.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/download/common/download.js';
import '../../../../platform/product/common/productService.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../../base/common/resources.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../extensions/common/extensionManifestPropertiesService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../platform/extensionManagement/common/extensionsScannerService.js';
import '../../../../platform/telemetry/common/telemetry.js';
define(
			de[4390],
			he([
				1, 0, 47, 119, 4389, 20, 157, 23, 10, 665, 62, 151, 19, 150, 57, 174,
				384, 5, 22, 34, 133, 958, 32,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*uuid*/,
				i /*extensionManagement*/,
				w /*extensionManagementService*/,
				E /*extensions*/,
				C /*extensionManagement*/,
				d /*network*/,
				m /*configuration*/,
				r /*download*/,
				u /*productService*/,
				a /*environmentService*/,
				h /*resources*/,
				c /*userDataSync*/,
				n /*dialogs*/,
				g /*workspaceTrust*/,
				p /*extensionManifestPropertiesService*/,
				o /*instantiation*/,
				f /*files*/,
				b /*log*/,
				s /*userDataProfile*/,
				l /*extensionsScannerService*/,
				y /*telemetry*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ldd = void 0);
				let $ = class extends w.$T5c {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B, U, z, F) {
						super(I, T, P, k, L, D, M, N, A, R, O, B, U, z, F), (this.cb = S);
					}
					async O(S, I, T) {
						if (
							S.scheme === d.Schemas.vscodeRemote &&
							I === this.j.localExtensionManagementServer
						) {
							const P = (0, h.$nh)(this.cb.tmpDir, (0, t.$9g)());
							await this.u.download(S, P), (S = P);
						}
						return super.O(S, I, T);
					}
				};
				(e.$Ldd = $),
					(e.$Ldd = $ =
						Ne(
							[
								j(0, a.$ucd),
								j(1, C.$EQb),
								j(2, i.$Ep),
								j(3, s.$P8),
								j(4, m.$gj),
								j(5, u.$Bk),
								j(6, r.$gp),
								j(7, c.$4Rb),
								j(8, n.$GO),
								j(9, g.$qO),
								j(10, p.$JSb),
								j(11, f.$ll),
								j(12, b.$ik),
								j(13, o.$Li),
								j(14, l.$dr),
								j(15, y.$km),
							],
							$,
						)),
					(0, E.$lK)(C.$GQb, $, E.InstantiationType.Delayed);
			},
		),
		