import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/configuration.js';
import '../../../common/contributions.js';
import './sash.js';
import '../../../../base/common/platform.js';
define(
			de[3563],
			he([1, 0, 4, 81, 52, 30, 224, 55, 3127, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*configurationRegistry*/,
 w /*lifecycle*/,
 E /*platform*/,
 C /*configuration*/,
 d /*contributions*/,
 m /*sash*/,
 r /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					E.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(m.$lPc, w.LifecyclePhase.Restored),
					E.$Io
						.as(i.$No.Configuration)
						.registerConfiguration({
							...C.$v6,
							properties: {
								"workbench.sash.size": {
									type: "number",
									default: r.$u ? 20 : 4,
									minimum: 1,
									maximum: 20,
									description: (0, t.localize)(8961, null),
								},
								"workbench.sash.hoverDelay": {
									type: "number",
									default: 300,
									minimum: 0,
									maximum: 2e3,
									description: (0, t.localize)(8962, null),
								},
							},
						});
			},
		),
		