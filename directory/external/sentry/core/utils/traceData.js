import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../asyncContext/index.js';
import '../carrier.js';
import '../currentScopes.js';
import '../exports.js';
import '../tracing/index.js';
import './spanUtils.js';
define(
			de[1452],
			he([1, 0, 80, 733, 578, 234, 734, 640, 301]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.getTraceData = r),
					(e.isValidBaggageString = u);
				function r() {
					if (!(0, C.isEnabled)()) return {};
					const a = (0, w.getMainCarrier)(),
						h = (0, i.getAsyncContextStrategy)(a);
					if (h.getTraceData) return h.getTraceData();
					const c = (0, E.getClient)(),
						n = (0, E.getCurrentScope)(),
						g = (0, m.getActiveSpan)(),
						{ dsc: p, sampled: o, traceId: f } = n.getPropagationContext(),
						b = g && (0, m.getRootSpan)(g),
						s = g
							? (0, m.spanToTraceHeader)(g)
							: (0, t.generateSentryTraceHeader)(f, void 0, o),
						l = b
							? (0, d.getDynamicSamplingContextFromSpan)(b)
							: p ||
								(c ? (0, d.getDynamicSamplingContextFromClient)(f, c) : void 0),
						y = (0, t.dynamicSamplingContextToSentryBaggageHeader)(l);
					if (!t.TRACEPARENT_REGEXP.test(s))
						return (
							t.logger.warn(
								"Invalid sentry-trace data. Cannot generate trace data",
							),
							{}
						);
					const v = u(y);
					return (
						v ||
							t.logger.warn(
								'Invalid baggage data. Not returning "baggage" value',
							),
						{ "sentry-trace": s, ...(v && { baggage: y }) }
					);
				}
				function u(a) {
					if (!a || !a.length) return !1;
					const h = "[-!#$%&'*+.^_`|~A-Za-z0-9]+",
						c = "[!#-+-./0-9:<=>?@A-Z\\[\\]a-z{-}]+",
						n = "\\s*";
					return new RegExp(
						`^${h}${n}=${n}${c}(${n},${n}${h}${n}=${n}${c})*$`,
					).test(a);
				}
			},
		),
		