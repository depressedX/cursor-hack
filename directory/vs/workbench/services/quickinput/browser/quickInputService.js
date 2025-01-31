import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/quickinput/browser/quickInputService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../browser/quickaccess.js';
import '../../../../platform/commands/common/commands.js';
define(
			de[3541],
			he([1, 0, 180, 5, 35, 10, 8, 39, 2868, 20, 63, 473, 31]),
			function (ce /*require*/,
 e /*exports*/,
 t /*layoutService*/,
 i /*instantiation*/,
 w /*themeService*/,
 E /*configuration*/,
 C /*contextkey*/,
 d /*keybinding*/,
 m /*quickInputService*/,
 r /*extensions*/,
 u /*quickInput*/,
 a /*quickaccess*/,
 h /*commands*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mxc = void 0);
				let c = class extends m.$Lxc {
					constructor(g, p, o, f, b, s, l) {
						super(p, f, b, s, g, l),
							(this.I = o),
							(this.H = a.$f9b.bindTo(this.s)),
							this.J();
					}
					J() {
						this.D(this.onShow(() => this.H.set(!0))),
							this.D(this.onHide(() => this.H.set(!1)));
					}
					z() {
						return super.z(this.t, {
							ignoreFocusOut: () =>
								!this.u.getValue("workbench.quickOpen.closeOnFocusLost"),
							backKeybindingLabel: () =>
								this.I.lookupKeybinding(
									"workbench.action.quickInputBack",
								)?.getLabel() || void 0,
						});
					}
				};
				(e.$Mxc = c),
					(e.$Mxc = c =
						Ne(
							[
								j(0, E.$gj),
								j(1, i.$Li),
								j(2, d.$uZ),
								j(3, C.$6j),
								j(4, w.$iP),
								j(5, t.$jEb),
								j(6, h.$ek),
							],
							c,
						)),
					(0, r.$lK)(u.$DJ, c, r.InstantiationType.Delayed);
			},
		)
