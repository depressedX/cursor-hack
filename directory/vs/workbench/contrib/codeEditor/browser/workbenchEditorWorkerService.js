import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/defaultWorkerFactory.js';
import '../../../../editor/browser/services/editorWorkerService.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/log/common/log.js';
define(
			de[3025],
			he([1, 0, 540, 2771, 152, 69, 67, 125, 34]),
			function (ce /*require*/,
 e /*exports*/,
 t /*defaultWorkerFactory*/,
 i /*editorWorkerService*/,
 w /*languageConfigurationRegistry*/,
 E /*languageFeatures*/,
 C /*model*/,
 d /*textResourceConfiguration*/,
 m /*log*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QAc = void 0);
				let r = class extends i.$Nyc {
					constructor(a, h, c, n, g) {
						const p = new t.$hjb(
							"vs/editor/common/services/editorSimpleWorker",
							"TextEditorWorker",
						);
						super(p, a, h, c, n, g);
					}
				};
				(e.$QAc = r),
					(e.$QAc = r =
						Ne(
							[j(0, C.$QO), j(1, d.$XO), j(2, m.$ik), j(3, w.$aN), j(4, E.$k3)],
							r,
						));
			},
		)
