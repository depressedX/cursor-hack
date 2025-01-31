import '../../../require.js';
import '../../../exports.js';
import '../core/index.js';
define(de[2137], he([1, 0, 144]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.metrics = void 0);
			function i(m, r = 1, u) {
				t.metrics.increment(t.BrowserMetricsAggregator, m, r, u);
			}
			function w(m, r, u) {
				t.metrics.distribution(t.BrowserMetricsAggregator, m, r, u);
			}
			function E(m, r, u) {
				t.metrics.set(t.BrowserMetricsAggregator, m, r, u);
			}
			function C(m, r, u) {
				t.metrics.gauge(t.BrowserMetricsAggregator, m, r, u);
			}
			function d(m, r, u = "second", a) {
				return t.metrics.timing(t.BrowserMetricsAggregator, m, r, u, a);
			}
			e.metrics = {
				increment: i,
				distribution: w,
				set: E,
				gauge: C,
				timing: d,
			};
		})
