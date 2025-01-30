import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/ai/browser/modalService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './entrypoint.js';
define(
			de[4337],
			he([1, 0, 445, 3, 20, 180, 5, 4336]),
			function (ce /*require*/,
 e /*exports*/,
 t /*modalService*/,
 i /*lifecycle*/,
 w /*extensions*/,
 E /*layoutService*/,
 C /*instantiation*/,
 d /*entrypoint*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends i.$1c {
					constructor(u, a) {
						super(), (this.g = u), (this.h = a);
					}
					renderSettings() {}
					closeSettings() {
						this.a?.dispose();
					}
					maybeRenderHint() {}
					renderGitHint() {}
					renderHint() {}
					renderHintModal() {}
					closeHint() {
						this.b?.dispose();
					}
					dispose() {
						super.dispose(), this.a?.dispose(), this.b?.dispose();
					}
					renderDangerousActionPopup(u, a) {
						const h = this.g.activeContainer;
						this.c = (0, d.$lZc)({
							container: h,
							instantiationService: this.h,
							onClose: () => this.c?.dispose(),
							dangerousActionType: u,
							dangerousActionParams: a,
						});
					}
					closeDangerousActionPopup() {
						this.c?.dispose();
					}
					renderCustomChoicePopup(u) {
						const a = this.g.activeContainer;
						this.f = (0, d.$mZc)({
							container: a,
							instantiationService: this.h,
							onClose: () => this.f?.dispose(),
							...u,
						});
					}
					closeCustomChoicePopup() {
						this.f?.dispose();
					}
				};
				(m = Ne([j(0, E.$jEb), j(1, C.$Li)], m)),
					(0, w.$lK)(t.$78b, m, w.InstantiationType.Delayed);
			},
		),
		