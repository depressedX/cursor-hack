import '../../../../require.js';
import '../../../../exports.js';
import './textEditorModel.js';
import '../../../editor/common/languages/language.js';
import '../../../editor/common/services/model.js';
import '../../services/languageDetection/common/languageDetectionWorkerService.js';
import '../../../platform/accessibility/common/accessibility.js';
define(
			de[1827],
			he([1, 0, 702, 61, 67, 474, 91]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q1b = void 0);
				let d = class extends t.$VO {
					constructor(r, u, a, h, c) {
						super(a, u, h, c, r);
					}
					dispose() {
						this.b && this.n.destroyModel(this.b), super.dispose();
					}
				};
				(e.$Q1b = d),
					(e.$Q1b = d =
						Ne([j(1, i.$nM), j(2, w.$QO), j(3, E.$RO), j(4, C.$XK)], d));
			},
		),
		