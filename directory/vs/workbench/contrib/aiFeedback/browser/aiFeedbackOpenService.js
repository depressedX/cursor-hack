import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../base/common/lifecycle.js';
define(
			de[1705],
			he([1, 0, 20, 5, 31, 180, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*commands*/,
 E /*layoutService*/,
 C /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZZc = void 0),
					(e.$ZZc = (0, i.$Mi)("AIFeedbackOpenService"));
				let d = class extends C.$1c {
					constructor(r, u, a) {
						super(),
							(this.b = r),
							(this.c = u),
							(this.f = a),
							(this.a = "aiFeedback.open.service"),
							(this.popupListeners = []),
							(this.closePopupListeners = []),
							(this.openPopup = () => {
								for (let h of this.popupListeners)
									console.log("listener running in AI feedback open service"),
										h(this.b, this.c, this.f);
							}),
							(this.closePopup = () => {
								for (let h of this.closePopupListeners) h();
							}),
							(this.addPopupListener = (h) => {
								this.popupListeners.push(h);
							}),
							(this.addClosePopupListener = (h) => {
								this.closePopupListeners.push(h);
							});
					}
					dispose() {
						super.dispose();
					}
				};
				(d = Ne([j(0, E.$jEb), j(1, i.$Li), j(2, w.$ek)], d)),
					(0, t.$lK)(e.$ZZc, d, t.InstantiationType.Delayed);
			},
		),
		