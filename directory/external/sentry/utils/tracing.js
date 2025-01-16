define(de[2085], he([1, 0, 1430, 727]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TRACEPARENT_REGEXP = void 0),
				(e.extractTraceparentData = w),
				(e.propagationContextFromHeaders = E),
				(e.generateSentryTraceHeader = C),
				(e.TRACEPARENT_REGEXP = new RegExp(
					"^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
				));
			function w(d) {
				if (!d) return;
				const m = d.match(e.TRACEPARENT_REGEXP);
				if (!m) return;
				let r;
				return (
					m[3] === "1" ? (r = !0) : m[3] === "0" && (r = !1),
					{ traceId: m[1], parentSampled: r, parentSpanId: m[2] }
				);
			}
			function E(d, m) {
				const r = w(d),
					u = (0, t.baggageHeaderToDynamicSamplingContext)(m),
					{ traceId: a, parentSpanId: h, parentSampled: c } = r || {};
				return r
					? {
							traceId: a || (0, i.uuid4)(),
							parentSpanId: h || (0, i.uuid4)().substring(16),
							spanId: (0, i.uuid4)().substring(16),
							sampled: c,
							dsc: u || {},
						}
					: {
							traceId: a || (0, i.uuid4)(),
							spanId: (0, i.uuid4)().substring(16),
						};
			}
			function C(d = (0, i.uuid4)(), m = (0, i.uuid4)().substring(16), r) {
				let u = "";
				return r !== void 0 && (u = r ? "-1" : "-0"), `${d}-${m}${u}`;
			}
		}),
		