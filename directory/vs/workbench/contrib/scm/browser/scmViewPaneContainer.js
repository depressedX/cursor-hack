import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../common/scm.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/views.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../../css!vs/workbench/contrib/scm/browser/media/scm.js';
define(
			de[4034],
			he([1, 0, 4, 32, 258, 5, 49, 35, 21, 10, 96, 53, 25, 60, 239, 652]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*telemetry*/,
 w /*scm*/,
 E /*instantiation*/,
 C /*contextView*/,
 d /*themeService*/,
 m /*storage*/,
 r /*configuration*/,
 u /*layoutService*/,
 a /*extensions*/,
 h /*workspace*/,
 c /*views*/,
 n /*viewPaneContainer*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MPc = void 0);
				let g = class extends n.$ZSb {
					constructor(o, f, b, s, l, y, $, v, S, I) {
						super(
							w.$$6,
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
						super.create(o), o.classList.add("scm-viewlet");
					}
					getOptimalWidth() {
						return 400;
					}
					getTitle() {
						return (0, t.localize)(9117, null);
					}
				};
				(e.$MPc = g),
					(e.$MPc = g =
						Ne(
							[
								j(0, u.$mEb),
								j(1, i.$km),
								j(2, E.$Li),
								j(3, C.$Xxb),
								j(4, d.$iP),
								j(5, m.$lq),
								j(6, r.$gj),
								j(7, a.$q2),
								j(8, h.$Vi),
								j(9, c.$K1),
							],
							g,
						));
			},
		),
		