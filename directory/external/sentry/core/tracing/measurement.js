import '../../../../require.js';
import '../../../../exports.js';
import '../semanticAttributes.js';
import '../utils/spanUtils.js';
define(de[1446], he([1, 0, 453, 301]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.setMeasurement = w),
				(e.timedEventsToMeasurements = E);
			function w(C, d, m, r = (0, i.getActiveSpan)()) {
				const u = r && (0, i.getRootSpan)(r);
				u &&
					u.addEvent(C, {
						[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: d,
						[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: m,
					});
			}
			function E(C) {
				if (!C || C.length === 0) return;
				const d = {};
				return (
					C.forEach((m) => {
						const r = m.attributes || {},
							u = r[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT],
							a = r[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
						typeof u == "string" &&
							typeof a == "number" &&
							(d[m.name] = { value: a, unit: u });
					}),
					d
				);
			}
		}),
		