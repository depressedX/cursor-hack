import '../../../../../require.js';
import '../../../../../exports.js';
import '../../types.js';
import './lib/bindReporter.js';
import './lib/getActivationStart.js';
import './lib/getVisibilityWatcher.js';
import './lib/initMetric.js';
import './lib/observe.js';
import './lib/onHidden.js';
import './lib/runOnce.js';
import './lib/whenActivated.js';
define(
			de[2096],
			he([1, 0, 366, 635, 728, 884, 637, 576, 729, 1091, 730]),
			function (ce /*require*/,
 e /*exports*/,
 t /*types*/,
 i /*bindReporter*/,
 w /*getActivationStart*/,
 E /*getVisibilityWatcher*/,
 C /*initMetric*/,
 d /*observe*/,
 m /*onHidden*/,
 r /*runOnce*/,
 u /*whenActivated*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onLCP = e.LCPThresholds = void 0),
					(e.LCPThresholds = [2500, 4e3]);
				const a = {},
					h = (c, n = {}) => {
						(0, u.whenActivated)(() => {
							const g = (0, E.getVisibilityWatcher)(),
								p = (0, C.initMetric)("LCP");
							let o;
							const f = (s) => {
									const l = s[s.length - 1];
									l &&
										l.startTime < g.firstHiddenTime &&
										((p.value = Math.max(
											l.startTime - (0, w.getActivationStart)(),
											0,
										)),
										(p.entries = [l]),
										o());
								},
								b = (0, d.observe)("largest-contentful-paint", f);
							if (b) {
								o = (0, i.bindReporter)(
									c,
									p,
									e.LCPThresholds,
									n.reportAllChanges,
								);
								const s = (0, r.runOnce)(() => {
									a[p.id] ||
										(f(b.takeRecords()), b.disconnect(), (a[p.id] = !0), o(!0));
								});
								["keydown", "click"].forEach((l) => {
									t.WINDOW.document &&
										addEventListener(l, () => setTimeout(s, 0), !0);
								}),
									(0, m.onHidden)(s);
							}
						});
					};
				e.onLCP = h;
			},
		),
		