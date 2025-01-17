import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/native/common/native.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3419],
			he([1, 0, 52, 30, 55, 65, 110, 3]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends d.$1c {
					constructor(u, a) {
						super(),
							this.D(
								a.onDidResumeOS(() => {
									u.listCodeEditors().forEach((h) => h.render(!0));
								}),
							);
					}
				};
				(m = Ne([j(0, E.$dtb), j(1, C.$y7c)], m)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(m, t.LifecyclePhase.Eventually);
			},
		),
		