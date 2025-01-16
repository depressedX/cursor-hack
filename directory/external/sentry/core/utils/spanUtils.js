define(
			de[301],
			he([1, 0, 80, 733, 578, 234, 1095, 453, 636, 731]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TRACE_FLAG_SAMPLED = e.TRACE_FLAG_NONE = void 0),
					(e.spanToTransactionTraceContext = u),
					(e.spanToTraceContext = a),
					(e.spanToTraceHeader = h),
					(e.spanTimeInputToSeconds = c),
					(e.spanToJSON = g),
					(e.spanIsSampled = f),
					(e.getStatusMessage = b),
					(e.addChildSpanToSpan = y),
					(e.removeChildSpanFromSpan = $),
					(e.getSpanDescendants = v),
					(e.getRootSpan = S),
					(e.getActiveSpan = I),
					(e.updateMetricSummaryOnActiveSpan = T),
					(e.TRACE_FLAG_NONE = 0),
					(e.TRACE_FLAG_SAMPLED = 1);
				function u(P) {
					const { spanId: k, traceId: L } = P.spanContext(),
						{ data: D, op: M, parent_span_id: N, status: A, origin: R } = g(P);
					return (0, t.dropUndefinedKeys)({
						parent_span_id: N,
						span_id: k,
						trace_id: L,
						data: D,
						op: M,
						status: A,
						origin: R,
					});
				}
				function a(P) {
					const { spanId: k, traceId: L } = P.spanContext(),
						{ parent_span_id: D } = g(P);
					return (0, t.dropUndefinedKeys)({
						parent_span_id: D,
						span_id: k,
						trace_id: L,
					});
				}
				function h(P) {
					const { traceId: k, spanId: L } = P.spanContext(),
						D = f(P);
					return (0, t.generateSentryTraceHeader)(k, L, D);
				}
				function c(P) {
					return typeof P == "number"
						? n(P)
						: Array.isArray(P)
							? P[0] + P[1] / 1e9
							: P instanceof Date
								? n(P.getTime())
								: (0, t.timestampInSeconds)();
				}
				function n(P) {
					return P > 9999999999 ? P / 1e3 : P;
				}
				function g(P) {
					if (o(P)) return P.getSpanJSON();
					try {
						const { spanId: k, traceId: L } = P.spanContext();
						if (p(P)) {
							const {
								attributes: D,
								startTime: M,
								name: N,
								endTime: A,
								parentSpanId: R,
								status: O,
							} = P;
							return (0, t.dropUndefinedKeys)({
								span_id: k,
								trace_id: L,
								data: D,
								description: N,
								parent_span_id: R,
								start_timestamp: c(M),
								timestamp: c(A) || void 0,
								status: b(O),
								op: D[d.SEMANTIC_ATTRIBUTE_SENTRY_OP],
								origin: D[d.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
								_metrics_summary: (0, C.getMetricSummaryJsonForSpan)(P),
							});
						}
						return { span_id: k, trace_id: L };
					} catch {
						return {};
					}
				}
				function p(P) {
					const k = P;
					return (
						!!k.attributes &&
						!!k.startTime &&
						!!k.name &&
						!!k.endTime &&
						!!k.status
					);
				}
				function o(P) {
					return typeof P.getSpanJSON == "function";
				}
				function f(P) {
					const { traceFlags: k } = P.spanContext();
					return k === e.TRACE_FLAG_SAMPLED;
				}
				function b(P) {
					if (!(!P || P.code === m.SPAN_STATUS_UNSET))
						return P.code === m.SPAN_STATUS_OK
							? "ok"
							: P.message || "unknown_error";
				}
				const s = "_sentryChildSpans",
					l = "_sentryRootSpan";
				function y(P, k) {
					const L = P[l] || P;
					(0, t.addNonEnumerableProperty)(k, l, L),
						P[s]
							? P[s].add(k)
							: (0, t.addNonEnumerableProperty)(P, s, new Set([k]));
				}
				function $(P, k) {
					P[s] && P[s].delete(k);
				}
				function v(P) {
					const k = new Set();
					function L(D) {
						if (!k.has(D) && f(D)) {
							k.add(D);
							const M = D[s] ? Array.from(D[s]) : [];
							for (const N of M) L(N);
						}
					}
					return L(P), Array.from(k);
				}
				function S(P) {
					return P[l] || P;
				}
				function I() {
					const P = (0, w.getMainCarrier)(),
						k = (0, i.getAsyncContextStrategy)(P);
					return k.getActiveSpan
						? k.getActiveSpan()
						: (0, r._getSpanForScope)((0, E.getCurrentScope)());
				}
				function T(P, k, L, D, M, N) {
					const A = I();
					A && (0, C.updateMetricSummaryOnSpan)(A, P, k, L, D, M, N);
				}
			},
		),
		