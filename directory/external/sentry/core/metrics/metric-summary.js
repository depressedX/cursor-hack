import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
define(de[1095], he([1, 0, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getMetricSummaryJsonForSpan = w),
				(e.updateMetricSummaryOnSpan = E);
			const i = "_sentryMetrics";
			function w(C) {
				const d = C[i];
				if (!d) return;
				const m = {};
				for (const [, [r, u]] of d)
					(m[r] || (m[r] = [])).push((0, t.dropUndefinedKeys)(u));
				return m;
			}
			function E(C, d, m, r, u, a, h) {
				const n = C[i] || (C[i] = new Map()),
					g = `${d}:${m}@${u}`,
					p = n.get(h);
				if (p) {
					const [, o] = p;
					n.set(h, [
						g,
						{
							min: Math.min(o.min, r),
							max: Math.max(o.max, r),
							count: (o.count += 1),
							sum: (o.sum += r),
							tags: o.tags,
						},
					]);
				} else n.set(h, [g, { min: r, max: r, count: 1, sum: r, tags: a }]);
			}
		}),
		