import '../../../../../require.js';
import '../../../../../exports.js';
import '../../types.js';
import './lib/bindReporter.js';
import './lib/initMetric.js';
import './lib/observe.js';
import './lib/onHidden.js';
import './lib/polyfills/interactionCountPolyfill.js';
import './lib/whenActivated.js';
define(
			de[2095],
			he([1, 0, 366, 635, 637, 576, 729, 2057, 730]),
			function (ce /*require*/,
 e /*exports*/,
 t /*types*/,
 i /*bindReporter*/,
 w /*initMetric*/,
 E /*observe*/,
 C /*onHidden*/,
 d /*interactionCountPolyfill*/,
 m /*whenActivated*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onINP = e.INPThresholds = void 0),
					(e.INPThresholds = [200, 500]);
				const r = 0,
					u = () => (0, d.getInteractionCount)() - r,
					a = 10,
					h = [],
					c = {},
					n = (o) => {
						const f = h[h.length - 1],
							b = c[o.interactionId];
						if (b || h.length < a || (f && o.duration > f.latency)) {
							if (b)
								b.entries.push(o),
									(b.latency = Math.max(b.latency, o.duration));
							else {
								const s = {
									id: o.interactionId,
									latency: o.duration,
									entries: [o],
								};
								(c[s.id] = s), h.push(s);
							}
							h.sort((s, l) => l.latency - s.latency),
								h.splice(a).forEach((s) => {
									delete c[s.id];
								});
						}
					},
					g = () => {
						const o = Math.min(h.length - 1, Math.floor(u() / 50));
						return h[o];
					},
					p = (o, f = {}) => {
						(0, m.whenActivated)(() => {
							(0, d.initInteractionCountPolyfill)();
							const b = (0, w.initMetric)("INP");
							let s;
							const l = ($) => {
									$.forEach((S) => {
										S.interactionId && n(S),
											S.entryType === "first-input" &&
												!h.some((T) =>
													T.entries.some(
														(P) =>
															S.duration === P.duration &&
															S.startTime === P.startTime,
													),
												) &&
												n(S);
									});
									const v = g();
									v &&
										v.latency !== b.value &&
										((b.value = v.latency), (b.entries = v.entries), s());
								},
								y = (0, E.observe)("event", l, {
									durationThreshold:
										f.durationThreshold != null ? f.durationThreshold : 40,
								});
							(s = (0, i.bindReporter)(
								o,
								b,
								e.INPThresholds,
								f.reportAllChanges,
							)),
								y &&
									("PerformanceEventTiming" in t.WINDOW &&
										"interactionId" in PerformanceEventTiming.prototype &&
										y.observe({ type: "first-input", buffered: !0 }),
									(0, C.onHidden)(() => {
										l(y.takeRecords()),
											b.value < 0 &&
												u() > 0 &&
												((b.value = 0), (b.entries = [])),
											s(!0);
									}));
						});
					};
				e.onINP = p;
			},
		),
		