import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/ai/browser/aiMiscServices.js';
import './telemStartupService.js';
import '../../aiWatcher/electron-sandbox/aiWatcherService.js';
import './cppService.js';
import '../../aiCursorPrediction/electron-sandbox/cursorPredictionService.js';
import '../../aiImportPrediction/electron-sandbox/importPredictionService.js';
import './telemService.js';
import '../../../../css!vs/workbench/contrib/aiCpp/electron-sandbox/cpp.js';
import '../../aiDiff/browser/tokenStreamingDiffService.js';
import './cppActions.js';
define(
			de[4188],
			he([
				1, 0, 30, 55, 52, 137, 3447, 3943, 1978, 3628, 4187, 3639, 2357, 1285,
				3938,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*contributions*/,
 w /*lifecycle*/,
 E /*aiMiscServices*/,
 C /*telemStartupService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rfd = void 0);
				let d = class {
					constructor(r, u) {
						(this.a = r), (this.b = u), this.b.onStartup();
					}
				};
				(e.$rfd = d),
					(e.$rfd = d = Ne([j(0, E.$jfc), j(1, C.$pfd)], d)),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(d, w.LifecyclePhase.Restored);
			},
		),
		