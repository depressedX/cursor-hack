import '../../../../../require.js';
import '../../../../../exports.js';
import '../../types.js';
import './lib/bindReporter.js';
import './lib/getActivationStart.js';
import './lib/getNavigationEntry.js';
import './lib/initMetric.js';
import './lib/whenActivated.js';
define(
			de[2099],
			he([1, 0, 366, 635, 728, 883, 637, 730]),
			function (ce /*require*/,
 e /*exports*/,
 t /*types*/,
 i /*bindReporter*/,
 w /*getActivationStart*/,
 E /*getNavigationEntry*/,
 C /*initMetric*/,
 d /*whenActivated*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onTTFB = e.TTFBThresholds = void 0),
					(e.TTFBThresholds = [800, 1800]);
				const m = (u) => {
						t.WINDOW.document && t.WINDOW.document.prerendering
							? (0, d.whenActivated)(() => m(u))
							: t.WINDOW.document && t.WINDOW.document.readyState !== "complete"
								? addEventListener("load", () => m(u), !0)
								: setTimeout(u, 0);
					},
					r = (u, a = {}) => {
						const h = (0, C.initMetric)("TTFB"),
							c = (0, i.bindReporter)(
								u,
								h,
								e.TTFBThresholds,
								a.reportAllChanges,
							);
						m(() => {
							const n = (0, E.getNavigationEntry)();
							if (n) {
								const g = n.responseStart;
								if (g <= 0 || g > performance.now()) return;
								(h.value = Math.max(g - (0, w.getActivationStart)(), 0)),
									(h.entries = [n]),
									c(!0);
							}
						});
					};
				e.onTTFB = r;
			},
		)
