define(de[2125], he([1, 0, 2120, 1449]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.metricsDefault = void 0);
			function w(u, a = 1, h) {
				i.metrics.increment(t.MetricsAggregator, u, a, h);
			}
			function E(u, a, h) {
				i.metrics.distribution(t.MetricsAggregator, u, a, h);
			}
			function C(u, a, h) {
				i.metrics.set(t.MetricsAggregator, u, a, h);
			}
			function d(u, a, h) {
				i.metrics.gauge(t.MetricsAggregator, u, a, h);
			}
			function m(u, a, h = "second", c) {
				return i.metrics.timing(t.MetricsAggregator, u, a, h, c);
			}
			function r(u) {
				return i.metrics.getMetricsAggregatorForClient(u, t.MetricsAggregator);
			}
			e.metricsDefault = {
				increment: w,
				distribution: E,
				set: C,
				gauge: d,
				timing: m,
				getMetricsAggregatorForClient: r,
			};
		}),
		