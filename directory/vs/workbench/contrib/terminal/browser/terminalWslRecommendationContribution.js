import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/product/common/productService.js';
import '../../extensions/browser/extensionsActions.js';
import './terminal.js';
define(
			de[4175],
			he([1, 0, 3, 54, 12, 4, 119, 5, 40, 62, 404, 107]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zVc = void 0);
				let h = class extends t.$1c {
					static {
						this.ID = "terminalWslRecommendation";
					}
					constructor(n, g, p, o, f) {
						if ((super(), !w.$l)) return;
						const b = g.exeBasedExtensionTips;
						if (!b || !b.wsl) return;
						let s = f.onDidCreateInstance(async (l) => {
							async function y(v) {
								return (await o.getInstalled()).some(
									(I) => I.identifier.id === v,
								);
							}
							if (
								!l.shellLaunchConfig.executable ||
								(0, i.$sc)(l.shellLaunchConfig.executable).toLowerCase() !==
									"wsl.exe"
							)
								return;
							s?.dispose(), (s = void 0);
							const $ = Object.keys(b.wsl.recommendations).find(
								(v) => b.wsl.recommendations[v].important,
							);
							!$ ||
								(await y($)) ||
								p.prompt(
									m.Severity.Info,
									(0, E.localize)(10171, null, b.wsl.friendlyName),
									[
										{
											label: (0, E.localize)(10172, null),
											run: () => {
												n.createInstance(u.$KTb, $).run();
											},
										},
									],
									{
										sticky: !0,
										neverShowAgain: {
											id: "terminalConfigHelper/launchRecommendationsIgnore",
											scope: m.NeverShowAgainScope.APPLICATION,
										},
										onCancel: () => {},
									},
								);
						});
					}
				};
				(e.$zVc = h),
					(e.$zVc = h =
						Ne(
							[
								j(0, d.$Li),
								j(1, r.$Bk),
								j(2, m.$4N),
								j(3, C.$Hp),
								j(4, a.$iIb),
							],
							h,
						));
			},
		),
		