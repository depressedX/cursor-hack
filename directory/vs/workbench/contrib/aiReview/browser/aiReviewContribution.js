import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/ai/browser/aiMiscServices.js';
import './aiReviewService.js';
define(
			de[4243],
			he([1, 0, 30, 55, 52, 137, 4242]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*contributions*/,
 w /*lifecycle*/,
 E /*aiMiscServices*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Aed = void 0);
				let C = class {
					constructor(m) {
						this.a = m;
					}
				};
				(e.$Aed = C),
					(e.$Aed = C = Ne([j(0, E.$ofc)], C)),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(C, w.LifecyclePhase.Eventually);
			},
		),
		