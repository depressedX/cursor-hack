import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import './accessibilityConfiguration.js';
import './accessibleViewActions.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
define(
			de[3544],
			he([1, 0, 3, 130, 1032, 178, 412]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*accessibilityConfiguration*/,
 w /*accessibleViewActions*/,
 E /*accessibleView*/,
 C /*accessibleViewRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J2c = e.$I2c = void 0);
				class d extends t.$1c {
					constructor() {
						super(),
							this.D(
								w.$spc.addImplementation(
									115,
									"accessible-view-help",
									(u) => (u.get(E.$HLb).showAccessibleViewHelp(), !0),
									i.$NLb,
								),
							);
					}
				}
				e.$I2c = d;
				class m extends t.$1c {
					constructor() {
						super(),
							C.$Whc.getImplementations().forEach((u) => {
								const a = (h) => {
									const c = u.getProvider(h);
									if (!c) return !1;
									try {
										return h.get(E.$HLb).show(c), !0;
									} catch {
										return c.dispose(), !1;
									}
								};
								u.type === E.AccessibleViewType.View
									? this.D(
											w.$tpc.addImplementation(u.priority, u.name, a, u.when),
										)
									: this.D(
											w.$spc.addImplementation(u.priority, u.name, a, u.when),
										);
							});
					}
				}
				e.$J2c = m;
			},
		),
		