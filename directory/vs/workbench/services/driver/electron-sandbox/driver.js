import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/window.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../browser/driver.js';
import '../../lifecycle/common/lifecycle.js';
define(
			de[3451],
			he([1, 0, 75, 113, 22, 34, 1832, 52]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ncd = r);
				let m = class extends C.$wEb {
					constructor(a, h, c, n, g) {
						super(h, c, n, g), (this.h = a);
					}
					exitApplication() {
						return this.h.exitApplication();
					}
				};
				m = Ne([j(1, w.$ll), j(2, i.$Ti), j(3, d.$n6), j(4, E.$ik)], m);
				function r(u, a) {
					Object.assign(t.$Bfb, { driver: u.createInstance(m, a) });
				}
			},
		),
		