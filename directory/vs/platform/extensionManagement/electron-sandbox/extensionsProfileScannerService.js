import '../../../../require.js';
import '../../../../exports.js';
import '../../log/common/log.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../uriIdentity/common/uriIdentity.js';
import '../../telemetry/common/telemetry.js';
import '../common/extensionsProfileScannerService.js';
import '../../files/common/files.js';
import '../../environment/common/environment.js';
import '../../../base/common/uri.js';
import '../../instantiation/common/extensions.js';
define(
			de[2891],
			he([1, 0, 34, 129, 68, 32, 1214, 22, 113, 9, 20]),
			function (ce /*require*/,
 e /*exports*/,
 t /*log*/,
 i /*userDataProfile*/,
 w /*uriIdentity*/,
 E /*telemetry*/,
 C /*extensionsProfileScannerService*/,
 d /*files*/,
 m /*environment*/,
 r /*uri*/,
 u /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xbd = void 0);
				let a = class extends C.$ar {
					constructor(c, n, g, p, o, f) {
						super(r.URI.file(c.extensionsPath), n, g, p, o, f);
					}
				};
				(e.$Xbd = a),
					(e.$Xbd = a =
						Ne(
							[
								j(0, m.$Ui),
								j(1, d.$ll),
								j(2, i.$Xl),
								j(3, w.$Vl),
								j(4, E.$km),
								j(5, t.$ik),
							],
							a,
						)),
					(0, u.$lK)(C.$_q, a, u.InstantiationType.Delayed);
			},
		),
		