import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../currentScopes.js';
import '../debug-build.js';
import '../tracing/index.js';
import '../utils/handleCallbackErrors.js';
import '../utils/spanUtils.js';
import './constants.js';
define(
			de[1449],
			he([1, 0, 80, 234, 263, 640, 1097, 301, 880]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/,
 w /*debug-build*/,
 E /*index*/,
 C /*handleCallbackErrors*/,
 d /*spanUtils*/,
 m /*constants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.metrics = void 0);
				function r(o, f) {
					const b = (0, t.getGlobalSingleton)(
							"globalMetricsAggregators",
							() => new WeakMap(),
						),
						s = b.get(o);
					if (s) return s;
					const l = new f(o);
					return (
						o.on("flush", () => l.flush()),
						o.on("close", () => l.close()),
						b.set(o, l),
						l
					);
				}
				function u(o, f, b, s, l = {}) {
					const y = l.client || (0, i.getClient)();
					if (!y) return;
					const $ = (0, d.getActiveSpan)(),
						v = $ ? (0, d.getRootSpan)($) : void 0,
						S = v && (0, d.spanToJSON)(v).description,
						{ unit: I, tags: T, timestamp: P } = l,
						{ release: k, environment: L } = y.getOptions(),
						D = {};
					k && (D.release = k),
						L && (D.environment = L),
						S && (D.transaction = S),
						w.DEBUG_BUILD &&
							t.logger.log(`Adding value of ${s} to ${f} metric ${b}`),
						r(y, o).add(f, b, s, I, { ...D, ...T }, P);
				}
				function a(o, f, b = 1, s) {
					u(o, m.COUNTER_METRIC_TYPE, f, p(b), s);
				}
				function h(o, f, b, s) {
					u(o, m.DISTRIBUTION_METRIC_TYPE, f, p(b), s);
				}
				function c(o, f, b, s = "second", l) {
					if (typeof b == "function") {
						const y = (0, t.timestampInSeconds)();
						return (0, E.startSpanManual)(
							{ op: "metrics.timing", name: f, startTime: y, onlyIfParent: !0 },
							($) =>
								(0, C.handleCallbackErrors)(
									() => b(),
									() => {},
									() => {
										const v = (0, t.timestampInSeconds)(),
											S = v - y;
										h(o, f, S, { ...l, unit: "second" }), $.end(v);
									},
								),
						);
					}
					h(o, f, b, { ...l, unit: s });
				}
				function n(o, f, b, s) {
					u(o, m.SET_METRIC_TYPE, f, b, s);
				}
				function g(o, f, b, s) {
					u(o, m.GAUGE_METRIC_TYPE, f, p(b), s);
				}
				e.metrics = {
					increment: a,
					distribution: h,
					set: n,
					gauge: g,
					timing: c,
					getMetricsAggregatorForClient: r,
				};
				function p(o) {
					return typeof o == "string" ? parseInt(o) : o;
				}
			},
		)
