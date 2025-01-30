import '../../../../../require.js';
import '../../../../../exports.js';
import './lib/bindReporter.js';
import './lib/getVisibilityWatcher.js';
import './lib/initMetric.js';
import './lib/observe.js';
import './lib/onHidden.js';
import './lib/runOnce.js';
import './lib/whenActivated.js';
define(
			de[2094],
			he([1, 0, 635, 884, 637, 576, 729, 1091, 730]),
			function (ce /*require*/,
 e /*exports*/,
 t /*bindReporter*/,
 i /*getVisibilityWatcher*/,
 w /*initMetric*/,
 E /*observe*/,
 C /*onHidden*/,
 d /*runOnce*/,
 m /*whenActivated*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onFID = e.FIDThresholds = void 0),
					(e.FIDThresholds = [100, 300]);
				const r = (u, a = {}) => {
					(0, m.whenActivated)(() => {
						const h = (0, i.getVisibilityWatcher)(),
							c = (0, w.initMetric)("FID");
						let n;
						const g = (f) => {
								f.startTime < h.firstHiddenTime &&
									((c.value = f.processingStart - f.startTime),
									c.entries.push(f),
									n(!0));
							},
							p = (f) => {
								f.forEach(g);
							},
							o = (0, E.observe)("first-input", p);
						(n = (0, t.bindReporter)(
							u,
							c,
							e.FIDThresholds,
							a.reportAllChanges,
						)),
							o &&
								(0, C.onHidden)(
									(0, d.runOnce)(() => {
										p(o.takeRecords()), o.disconnect();
									}),
								);
					});
				};
				e.onFID = r;
			},
		),
		