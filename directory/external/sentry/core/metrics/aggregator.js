import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../utils/spanUtils.js';
import './constants.js';
import './envelope.js';
import './instance.js';
import './utils.js';
define(
			de[2120],
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
					(e.MetricsAggregator = void 0);
				class m {
					constructor(u) {
						(this._client = u),
							(this._buckets = new Map()),
							(this._bucketsTotalWeight = 0),
							(this._interval = setInterval(
								() => this._flush(),
								w.DEFAULT_FLUSH_INTERVAL,
							)),
							this._interval.unref && this._interval.unref(),
							(this._flushShift = Math.floor(
								(Math.random() * w.DEFAULT_FLUSH_INTERVAL) / 1e3,
							)),
							(this._forceFlush = !1);
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
						(0, i.updateMetricSummaryOnActiveSpan)(u, o, $, b, n, s),
							(this._bucketsTotalWeight += l.metric.weight),
							this._bucketsTotalWeight >= w.MAX_WEIGHT && this.flush();
					}
					flush() {
						(this._forceFlush = !0), this._flush();
					}
					close() {
						(this._forceFlush = !0),
							clearInterval(this._interval),
							this._flush();
					}
					_flush() {
						if (this._forceFlush) {
							(this._forceFlush = !1),
								(this._bucketsTotalWeight = 0),
								this._captureMetrics(this._buckets),
								this._buckets.clear();
							return;
						}
						const u =
								Math.floor((0, t.timestampInSeconds)()) -
								w.DEFAULT_FLUSH_INTERVAL / 1e3 -
								this._flushShift,
							a = new Map();
						for (const [h, c] of this._buckets)
							c.timestamp <= u &&
								(a.set(h, c), (this._bucketsTotalWeight -= c.metric.weight));
						for (const [h] of a) this._buckets.delete(h);
						this._captureMetrics(a);
					}
					_captureMetrics(u) {
						if (u.size > 0) {
							const a = Array.from(u).map(([, h]) => h);
							(0, E.captureAggregateMetrics)(this._client, a);
						}
					}
				}
				e.MetricsAggregator = m;
			},
		),
		