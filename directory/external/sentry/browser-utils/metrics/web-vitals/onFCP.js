import '../../../../../require.js';
import '../../../../../exports.js';
import './lib/bindReporter.js';
import './lib/getActivationStart.js';
import './lib/getVisibilityWatcher.js';
import './lib/initMetric.js';
import './lib/observe.js';
import './lib/whenActivated.js';
define(
			de[2097],
			he([1, 0, 635, 728, 884, 637, 576, 730]),
			function (ce /*require*/,
 e /*exports*/,
 t /*bindReporter*/,
 i /*getActivationStart*/,
 w /*getVisibilityWatcher*/,
 E /*initMetric*/,
 C /*observe*/,
 d /*whenActivated*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onFCP = e.FCPThresholds = void 0),
					(e.FCPThresholds = [1800, 3e3]);
				const m = (r, u = {}) => {
					(0, d.whenActivated)(() => {
						const a = (0, w.getVisibilityWatcher)(),
							h = (0, E.initMetric)("FCP");
						let c;
						const n = (p) => {
								p.forEach((o) => {
									o.name === "first-contentful-paint" &&
										(g.disconnect(),
										o.startTime < a.firstHiddenTime &&
											((h.value = Math.max(
												o.startTime - (0, i.getActivationStart)(),
												0,
											)),
											h.entries.push(o),
											c(!0)));
								});
							},
							g = (0, C.observe)("paint", n);
						g &&
							(c = (0, t.bindReporter)(
								r,
								h,
								e.FCPThresholds,
								u.reportAllChanges,
							));
					});
				};
				e.onFCP = m;
			},
		)
