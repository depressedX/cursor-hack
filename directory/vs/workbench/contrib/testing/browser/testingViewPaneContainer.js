import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../common/views.js';
import '../common/constants.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/layout/browser/layoutService.js';
define(
			de[4047],
			he([1, 0, 4, 10, 49, 5, 21, 32, 35, 25, 239, 60, 353, 53, 96]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EMc = void 0);
				let g = class extends u.$ZSb {
					constructor(o, f, b, s, l, y, $, v, S, I) {
						super(
							h.Testing.ViewletId,
							{ mergeViewWithContainerWhenSingleView: !0 },
							b,
							$,
							o,
							s,
							f,
							v,
							l,
							y,
							S,
							I,
						);
					}
					create(o) {
						super.create(o), o.classList.add("testing-view-pane");
					}
					getOptimalWidth() {
						return 400;
					}
					getTitle() {
						return (0, t.localize)(10814, null);
					}
				};
				(e.$EMc = g),
					(e.$EMc = g =
						Ne(
							[
								j(0, n.$mEb),
								j(1, d.$km),
								j(2, E.$Li),
								j(3, w.$Xxb),
								j(4, m.$iP),
								j(5, C.$lq),
								j(6, i.$gj),
								j(7, c.$q2),
								j(8, r.$Vi),
								j(9, a.$K1),
							],
							g,
						));
			},
		),
		