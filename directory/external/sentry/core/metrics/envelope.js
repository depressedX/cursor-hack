import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import './utils.js';
define(de[1439], he([1, 0, 80, 886]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.captureAggregateMetrics = w),
				(e.createMetricEnvelope = E);
			function w(d, m) {
				t.logger.log(
					`Flushing aggregated metrics, number of metrics: ${m.length}`,
				);
				const r = d.getDsn(),
					u = d.getSdkMetadata(),
					a = d.getOptions().tunnel,
					h = E(m, r, u, a);
				d.sendEnvelope(h);
			}
			function E(d, m, r, u) {
				const a = { sent_at: new Date().toISOString() };
				r && r.sdk && (a.sdk = { name: r.sdk.name, version: r.sdk.version }),
					u && m && (a.dsn = (0, t.dsnToString)(m));
				const h = C(d);
				return (0, t.createEnvelope)(a, [h]);
			}
			function C(d) {
				const m = (0, i.serializeMetricBuckets)(d);
				return [{ type: "statsd", length: m.length }, m];
			}
		}),
		