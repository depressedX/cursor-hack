import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../languages/language.js';
import '../../../platform/theme/common/themeService.js';
import '../../../platform/log/common/log.js';
import './semanticTokensProviderStyling.js';
import './semanticTokensStyling.js';
import '../../../platform/instantiation/common/extensions.js';
define(
			de[2856],
			he([1, 0, 3, 61, 35, 34, 1209, 1180, 20]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tyc = void 0);
				let r = class extends t.$1c {
					constructor(a, h, c) {
						super(),
							(this.b = a),
							(this.c = h),
							(this.f = c),
							(this.a = new WeakMap()),
							this.D(
								this.b.onDidColorThemeChange(() => {
									this.a = new WeakMap();
								}),
							);
					}
					getStyling(a) {
						return (
							this.a.has(a) ||
								this.a.set(
									a,
									new C.$fPb(a.getLegend(), this.b, this.f, this.c),
								),
							this.a.get(a)
						);
					}
				};
				(e.$tyc = r),
					(e.$tyc = r = Ne([j(0, w.$iP), j(1, E.$ik), j(2, i.$nM)], r)),
					(0, m.$lK)(d.$hPb, r, m.InstantiationType.Delayed);
			},
		),
		