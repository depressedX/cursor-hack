define(
			de[2098],
			he([1, 0, 635, 637, 576, 729, 1091, 2097]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onCLS = e.CLSThresholds = void 0),
					(e.CLSThresholds = [0.1, 0.25]);
				const m = (r, u = {}) => {
					(0, d.onFCP)(
						(0, C.runOnce)(() => {
							const a = (0, i.initMetric)("CLS", 0);
							let h,
								c = 0,
								n = [];
							const g = (o) => {
									o.forEach((f) => {
										if (!f.hadRecentInput) {
											const b = n[0],
												s = n[n.length - 1];
											c &&
											b &&
											s &&
											f.startTime - s.startTime < 1e3 &&
											f.startTime - b.startTime < 5e3
												? ((c += f.value), n.push(f))
												: ((c = f.value), (n = [f]));
										}
									}),
										c > a.value && ((a.value = c), (a.entries = n), h());
								},
								p = (0, w.observe)("layout-shift", g);
							p &&
								((h = (0, t.bindReporter)(
									r,
									a,
									e.CLSThresholds,
									u.reportAllChanges,
								)),
								(0, E.onHidden)(() => {
									g(p.takeRecords()), h(!0);
								}),
								setTimeout(h, 0));
						}),
					);
				};
				e.onCLS = m;
			},
		),
		