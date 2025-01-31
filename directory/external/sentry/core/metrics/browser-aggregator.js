import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../utils/spanUtils.js';
import './constants.js';
import './envelope.js';
import './instance.js';
import './utils.js';
define(
			de[2121],
			he([1, 0, 80, 301, 880, 1439, 1440, 886]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*spanUtils*/,
 w /*constants*/,
 E /*envelope*/,
 C /*instance*/,
 d /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.BrowserMetricsAggregator = void 0);
				class m {
					constructor(u) {
						(this._client = u),
							(this._buckets = new Map()),
							(this._interval = setInterval(
								() => this.flush(),
								w.DEFAULT_BROWSER_FLUSH_INTERVAL,
							));
					}
					add(u, a, h, c = "none", n = {}, g = (0, t.timestampInSeconds)()) {
						const p = Math.floor(g),
							o = (0, d.sanitizeMetricKey)(a),
							f = (0, d.sanitizeTags)(n),
							b = (0, d.sanitizeUnit)(c),
							s = (0, d.getBucketKey)(u, o, b, f);
						let l = this._buckets.get(s);
						const y = l && u === w.SET_METRIC_TYPE ? l.metric.weight : 0;
						l
							? (l.metric.add(h), l.timestamp < p && (l.timestamp = p))
							: ((l = {
									metric: new C.METRIC_MAP[u](h),
									timestamp: p,
									metricType: u,
									name: o,
									unit: b,
									tags: f,
								}),
								this._buckets.set(s, l));
						const $ = typeof h == "string" ? l.metric.weight - y : h;
						(0, i.updateMetricSummaryOnActiveSpan)(u, o, $, b, n, s);
					}
					flush() {
						if (this._buckets.size === 0) return;
						const u = Array.from(this._buckets.values());
						(0, E.captureAggregateMetrics)(this._client, u),
							this._buckets.clear();
					}
					close() {
						clearInterval(this._interval), this.flush();
					}
				}
				e.BrowserMetricsAggregator = m;
			},
		)
