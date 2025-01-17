import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import './entrypoint.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/aiErrors/browser/aiErrorService.js';
import '../../../services/aiErrors/browser/errors.js';
define(
			de[4255],
			he([1, 0, 3, 30, 4254, 55, 52, 401, 1286]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let r = class extends t.$1c {
					constructor(a) {
						super(),
							(this.b = a),
							(this.a = null),
							this.b.addErrorPopupHandler(this.renderPopup.bind(this));
					}
					renderPopup(a, h, c) {
						if (a instanceof m.$Q6b) {
							const n = (0, w.$6Zc)(a, h.activeContainer, c, () => n.dispose());
							this.a = n;
						}
					}
					dispose() {
						this.b.removeErrorPopupHandler(this.renderPopup.bind(this)),
							super.dispose(),
							this.a && (this.a.dispose(), (this.a = null));
					}
				};
				(r = Ne([j(0, d.$W6b)], r)),
					i.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(r, C.LifecyclePhase.Restored);
			},
		),
		