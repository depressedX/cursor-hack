import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../common/editor.js';
import '../../../services/workingCopy/common/workingCopyService.js';
define(de[3862], he([1, 0, 3, 184, 44, 227]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*accessibilitySignalService*/,
 w /*editor*/,
 E /*workingCopyService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$C2c = void 0);
			let C = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.saveAccessibilitySignal";
				}
				constructor(m, r) {
					super(),
						(this.a = m),
						(this.b = r),
						this.D(
							this.b.onDidSave((u) =>
								this.a.playSignal(i.$Twb.save, {
									userGesture: u.reason === w.SaveReason.EXPLICIT,
								}),
							),
						);
				}
			};
			(e.$C2c = C), (e.$C2c = C = Ne([j(0, i.$Owb), j(1, E.$gY)], C));
		})
