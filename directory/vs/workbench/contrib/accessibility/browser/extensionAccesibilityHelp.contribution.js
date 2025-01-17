import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contextkeys.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
define(
			de[3803],
			he([1, 0, 3, 178, 412, 39, 30, 100, 60, 89]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K2c = void 0);
				let u = class extends t.$1c {
					static {
						this.ID = "extensionAccessibilityHelpDialogContribution";
					}
					constructor(c) {
						super(),
							(this.a = this.D(new t.$0c())),
							this.D(
								C.$Io.as(m.Extensions.ViewsRegistry).onViewsRegistered((n) => {
									for (const g of n)
										for (const p of g.views)
											p.accessibilityHelpContent && this.a.set(p.id, a(c, p));
								}),
							),
							this.D(
								C.$Io
									.as(m.Extensions.ViewsRegistry)
									.onViewsDeregistered((n) => {
										for (const g of n.views)
											g.accessibilityHelpContent && this.a.get(g.id)?.dispose();
									}),
							);
					}
				};
				(e.$K2c = u), (e.$K2c = u = Ne([j(0, E.$uZ)], u));
				function a(h, c) {
					const n = new t.$Zc(),
						g = c.accessibilityHelpContent?.value;
					if (!g)
						throw new Error(
							"No content provided for the accessibility help dialog",
						);
					return (
						n.add(
							w.$Whc.register({
								priority: 95,
								name: c.id,
								type: i.AccessibleViewType.Help,
								when: d.$zQb.isEqualTo(c.id),
								getProvider: (p) => {
									const o = p.get(r.$HMb);
									return new i.$JLb(
										c.id,
										{ type: i.AccessibleViewType.Help },
										() => g,
										() => o.openView(c.id, !0),
									);
								},
							}),
						),
						n.add(
							h.onDidUpdateKeybindings(() => {
								n.clear(), n.add(a(h, c));
							}),
						),
						n
					);
				}
			},
		),
		