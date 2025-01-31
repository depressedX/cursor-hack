import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import './workspaceTags.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3695],
			he([1, 0, 30, 55, 1886, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*contributions*/,
 w /*workspaceTags*/,
 E /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(w.$rgd, E.LifecyclePhase.Eventually);
			},
		)
