import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/extensionManagement/common/extensionsProfileScannerService.js';
import '../../../../platform/extensionManagement/common/extensionsScannerService.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../userDataProfile/common/userDataProfile.js';
define(
			de[3783],
			he([1, 0, 9, 113, 1214, 958, 22, 20, 5, 34, 62, 68, 129, 133]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*environment*/,
 w /*extensionsProfileScannerService*/,
 E /*extensionsScannerService*/,
 C /*files*/,
 d /*extensions*/,
 m /*instantiation*/,
 r /*log*/,
 u /*productService*/,
 a /*uriIdentity*/,
 h /*userDataProfile*/,
 c /*userDataProfile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pdd = void 0);
				let n = class extends E.$hr {
					constructor(p, o, f, b, s, l, y, $, v) {
						super(
							t.URI.file(l.builtinExtensionsPath),
							t.URI.file(l.extensionsPath),
							l.userHome,
							p.currentProfile,
							o,
							f,
							b,
							s,
							l,
							y,
							$,
							v,
						);
					}
				};
				(e.$Pdd = n),
					(e.$Pdd = n =
						Ne(
							[
								j(0, c.$P8),
								j(1, h.$Xl),
								j(2, w.$_q),
								j(3, C.$ll),
								j(4, r.$ik),
								j(5, i.$Ui),
								j(6, u.$Bk),
								j(7, a.$Vl),
								j(8, m.$Li),
							],
							n,
						)),
					(0, d.$lK)(E.$dr, n, d.InstantiationType.Delayed);
			},
		),
		