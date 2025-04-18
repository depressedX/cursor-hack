import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import './showCandidate.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './tunnelFactory.js';
import './remote.js';
import './remoteIndicator.js';
import './remoteExplorer.js';
import './remoteConnectionHealth.js';
define(
			de[4032],
			he([1, 0, 55, 30, 3590, 52, 3591, 4031, 3634, 1058, 3561]),
			function (ce /*require*/,
 e /*exports*/,
 t /*contributions*/,
 i /*platform*/,
 w /*showCandidate*/,
 E /*lifecycle*/,
 C /*tunnelFactory*/,
 d /*remote*/,
 m /*remoteIndicator*/,
 r /*remoteExplorer*/,
 u /*remoteConnectionHealth*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const a = i.$Io.as(t.Extensions.Workbench);
				(0, t.$s6)(w.$oXc.ID, w.$oXc, t.WorkbenchPhase.BlockRestore),
					(0, t.$s6)(C.$pXc.ID, C.$pXc, t.WorkbenchPhase.BlockRestore),
					a.registerWorkbenchContribution(d.$FXc, E.LifecyclePhase.Eventually),
					(0, t.$s6)(m.$GXc.ID, m.$GXc, t.WorkbenchPhase.BlockStartup),
					a.registerWorkbenchContribution(r.$fuc, E.LifecyclePhase.Restored),
					a.registerWorkbenchContribution(r.$guc, E.LifecyclePhase.Eventually),
					a.registerWorkbenchContribution(r.$huc, E.LifecyclePhase.Eventually),
					a.registerWorkbenchContribution(d.$EXc, E.LifecyclePhase.Eventually),
					a.registerWorkbenchContribution(u.$HXc, E.LifecyclePhase.Restored);
			},
		)
