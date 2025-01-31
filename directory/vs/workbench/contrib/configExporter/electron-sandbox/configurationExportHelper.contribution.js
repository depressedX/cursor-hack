import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import './configurationExportHelper.js';
define(
			de[3420],
			he([1, 0, 55, 30, 5, 52, 151, 3307]),
			function (ce /*require*/,
 e /*exports*/,
 t /*contributions*/,
 i /*platform*/,
 w /*instantiation*/,
 E /*lifecycle*/,
 C /*environmentService*/,
 d /*configurationExportHelper*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jgd = void 0);
				let m = class {
					constructor(u, a) {
						a.args["export-default-configuration"] && u.createInstance(d.$igd);
					}
				};
				(e.$jgd = m),
					(e.$jgd = m = Ne([j(0, w.$Li), j(1, C.$ucd)], m)),
					i.$Io
						.as(t.Extensions.Workbench)
						.registerWorkbenchContribution(m, E.LifecyclePhase.Restored);
			},
		)
