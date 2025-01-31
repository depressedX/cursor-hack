import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/ipc/electron-sandbox/services.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../common/contributions.js';
import '../common/terminal.js';
import './terminalNativeContribution.js';
import './terminalProfileResolverService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './localTerminalBackend.js';
import './terminalExecutionService.js';
define(
			de[4039],
			he([1, 0, 20, 230, 30, 117, 55, 145, 4038, 3568, 52, 3638, 3958]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*services*/,
 w /*platform*/,
 E /*terminal*/,
 C /*contributions*/,
 d /*terminal*/,
 m /*terminalNativeContribution*/,
 r /*terminalProfileResolverService*/,
 u /*lifecycle*/,
 a /*localTerminalBackend*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$Ubd)(E.$XJ, E.TerminalIpcChannels.LocalPty),
					(0, t.$lK)(d.$reb, r.$mgd, t.InstantiationType.Delayed);
				const h = w.$Io.as(C.Extensions.Workbench);
				(0, C.$s6)(a.$ogd.ID, a.$ogd, C.WorkbenchPhase.BlockStartup),
					h.registerWorkbenchContribution(m.$lgd, u.LifecyclePhase.Restored);
			},
		)
