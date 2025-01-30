import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/config/fontMeasurements.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3417],
			he([1, 0, 3, 600, 110, 30, 55, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*fontMeasurements*/,
 w /*native*/,
 E /*platform*/,
 C /*contributions*/,
 d /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends t.$1c {
					constructor(u) {
						super(),
							this.D(
								u.onDidChangeDisplay(() => {
									i.$osb.clearAllFontInfos();
								}),
							);
					}
				};
				(m = Ne([j(0, w.$y7c)], m)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(m, d.LifecyclePhase.Eventually);
			},
		),
		