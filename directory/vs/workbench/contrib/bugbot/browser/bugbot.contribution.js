import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/contributions.js';
import './bugbot.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './bugbotDataService.js';
import './bugbotService.js';
import './bugbotEditorContribution.js';
import './bugbotActions.js';
define(
			de[4266],
			he([1, 0, 55, 976, 45, 977, 4265, 4263, 3225]),
			function (ce /*require*/,
 e /*exports*/,
 t /*contributions*/,
 i /*bugbot*/,
 w /*reactiveStorageService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5zc = void 0);
				let E = class {
					static {
						this.ID = "workbench.contrib.bugbot";
					}
					constructor(d, m) {
						(this.a = d), (this.b = m);
					}
				};
				(e.$5zc = E),
					(e.$5zc = E = Ne([j(0, i.$adc), j(1, w.$0zb)], E)),
					(0, t.$s6)(E.ID, E, t.WorkbenchPhase.BlockStartup);
			},
		)
