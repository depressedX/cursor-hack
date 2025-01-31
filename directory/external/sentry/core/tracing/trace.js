import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../carrier.js';
import '../currentScopes.js';
import '../asyncContext/index.js';
import '../debug-build.js';
import '../semanticAttributes.js';
import '../utils/handleCallbackErrors.js';
import '../utils/hasTracingEnabled.js';
import '../utils/spanOnScope.js';
import '../utils/spanUtils.js';
import './dynamicSamplingContext.js';
import './logSpans.js';
import './sampling.js';
import './sentryNonRecordingSpan.js';
import './sentrySpan.js';
import './spanstatus.js';
import './utils.js';
define(
			de[1448],
			he([
				1, 0, 80, 578, 234, 733, 263, 453, 1097, 638, 731, 301, 639, 1100, 1444,
				888, 1447, 636, 1096,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*carrier*/,
 w /*currentScopes*/,
 E /*index*/,
 C /*debug-build*/,
 d /*semanticAttributes*/,
 m /*handleCallbackErrors*/,
 r /*hasTracingEnabled*/,
 u /*spanOnScope*/,
 a /*spanUtils*/,
 h /*dynamicSamplingContext*/,
 c /*logSpans*/,
 n /*sampling*/,
 g /*sentryNonRecordingSpan*/,
 p /*sentrySpan*/,
 o /*spanstatus*/,
 f /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.continueTrace = void 0),
					(e.startSpan = s),
					(e.startSpanManual = l),
					(e.startInactiveSpan = y),
					(e.withActiveSpan = v),
					(e.suppressTracing = S),
					(e.startNewTrace = I);
				const b = "__SENTRY_SUPPRESS_TRACING__";
				function s(A, R) {
					const O = k();
					if (O.startSpan) return O.startSpan(A, R);
					const B = P(A),
						{ forceTransaction: U, parentSpan: z } = A;
					return (0, w.withScope)(A.scope, () =>
						N(z)(() => {
							const x = (0, w.getCurrentScope)(),
								H = M(x),
								V =
									A.onlyIfParent && !H
										? new g.SentryNonRecordingSpan()
										: T({
												parentSpan: H,
												spanArguments: B,
												forceTransaction: U,
												scope: x,
											});
							return (
								(0, u._setSpanForScope)(x, V),
								(0, m.handleCallbackErrors)(
									() => R(V),
									() => {
										const { status: G } = (0, a.spanToJSON)(V);
										V.isRecording() &&
											(!G || G === "ok") &&
											V.setStatus({
												code: o.SPAN_STATUS_ERROR,
												message: "internal_error",
											});
									},
									() => V.end(),
								)
							);
						}),
					);
				}
				function l(A, R) {
					const O = k();
					if (O.startSpanManual) return O.startSpanManual(A, R);
					const B = P(A),
						{ forceTransaction: U, parentSpan: z } = A;
					return (0, w.withScope)(A.scope, () =>
						N(z)(() => {
							const x = (0, w.getCurrentScope)(),
								H = M(x),
								V =
									A.onlyIfParent && !H
										? new g.SentryNonRecordingSpan()
										: T({
												parentSpan: H,
												spanArguments: B,
												forceTransaction: U,
												scope: x,
											});
							(0, u._setSpanForScope)(x, V);
							function G() {
								V.end();
							}
							return (0, m.handleCallbackErrors)(
								() => R(V, G),
								() => {
									const { status: K } = (0, a.spanToJSON)(V);
									V.isRecording() &&
										(!K || K === "ok") &&
										V.setStatus({
											code: o.SPAN_STATUS_ERROR,
											message: "internal_error",
										});
								},
							);
						}),
					);
				}
				function y(A) {
					const R = k();
					if (R.startInactiveSpan) return R.startInactiveSpan(A);
					const O = P(A),
						{ forceTransaction: B, parentSpan: U } = A;
					return (
						A.scope
							? (F) => (0, w.withScope)(A.scope, F)
							: U !== void 0
								? (F) => v(U, F)
								: (F) => F()
					)(() => {
						const F = (0, w.getCurrentScope)(),
							x = M(F);
						return A.onlyIfParent && !x
							? new g.SentryNonRecordingSpan()
							: T({
									parentSpan: x,
									spanArguments: O,
									forceTransaction: B,
									scope: F,
								});
					});
				}
				const $ = ({ sentryTrace: A, baggage: R }, O) =>
					(0, w.withScope)((B) => {
						const U = (0, t.propagationContextFromHeaders)(A, R);
						return B.setPropagationContext(U), O();
					});
				e.continueTrace = $;
				function v(A, R) {
					const O = k();
					return O.withActiveSpan
						? O.withActiveSpan(A, R)
						: (0, w.withScope)(
								(B) => ((0, u._setSpanForScope)(B, A || void 0), R(B)),
							);
				}
				function S(A) {
					const R = k();
					return R.suppressTracing
						? R.suppressTracing(A)
						: (0, w.withScope)(
								(O) => (O.setSDKProcessingMetadata({ [b]: !0 }), A()),
							);
				}
				function I(A) {
					return (0, w.withScope)(
						(R) => (
							R.setPropagationContext((0, t.generatePropagationContext)()),
							C.DEBUG_BUILD &&
								t.logger.info(
									`Starting a new trace with id ${R.getPropagationContext().traceId}`,
								),
							v(null, A)
						),
					);
				}
				function T({
					parentSpan: A,
					spanArguments: R,
					forceTransaction: O,
					scope: B,
				}) {
					if (!(0, r.hasTracingEnabled)())
						return new g.SentryNonRecordingSpan();
					const U = (0, w.getIsolationScope)();
					let z;
					if (A && !O) (z = D(A, B, R)), (0, a.addChildSpanToSpan)(A, z);
					else if (A) {
						const F = (0, h.getDynamicSamplingContextFromSpan)(A),
							{ traceId: x, spanId: H } = A.spanContext(),
							q = (0, a.spanIsSampled)(A);
						(z = L({ traceId: x, parentSpanId: H, ...R }, B, q)),
							(0, h.freezeDscOnSpan)(z, F);
					} else {
						const {
							traceId: F,
							dsc: x,
							parentSpanId: H,
							sampled: q,
						} = { ...U.getPropagationContext(), ...B.getPropagationContext() };
						(z = L({ traceId: F, parentSpanId: H, ...R }, B, q)),
							x && (0, h.freezeDscOnSpan)(z, x);
					}
					return (
						(0, c.logSpanStart)(z), (0, f.setCapturedScopesOnSpan)(z, B, U), z
					);
				}
				function P(A) {
					const O = { isStandalone: (A.experimental || {}).standalone, ...A };
					if (A.startTime) {
						const B = { ...O };
						return (
							(B.startTimestamp = (0, a.spanTimeInputToSeconds)(A.startTime)),
							delete B.startTime,
							B
						);
					}
					return O;
				}
				function k() {
					const A = (0, i.getMainCarrier)();
					return (0, E.getAsyncContextStrategy)(A);
				}
				function L(A, R, O) {
					const B = (0, w.getClient)(),
						U = (B && B.getOptions()) || {},
						{ name: z = "", attributes: F } = A,
						[x, H] = R.getScopeData().sdkProcessingMetadata[b]
							? [!1]
							: (0, n.sampleSpan)(U, {
									name: z,
									parentSampled: O,
									attributes: F,
									transactionContext: { name: z, parentSampled: O },
								}),
						q = new p.SentrySpan({
							...A,
							attributes: {
								[d.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
								...A.attributes,
							},
							sampled: x,
						});
					return (
						H !== void 0 &&
							q.setAttribute(d.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, H),
						B && B.emit("spanStart", q),
						q
					);
				}
				function D(A, R, O) {
					const { spanId: B, traceId: U } = A.spanContext(),
						z = R.getScopeData().sdkProcessingMetadata[b]
							? !1
							: (0, a.spanIsSampled)(A),
						F = z
							? new p.SentrySpan({
									...O,
									parentSpanId: B,
									traceId: U,
									sampled: z,
								})
							: new g.SentryNonRecordingSpan({ traceId: U });
					(0, a.addChildSpanToSpan)(A, F);
					const x = (0, w.getClient)();
					return (
						x &&
							(x.emit("spanStart", F), O.endTimestamp && x.emit("spanEnd", F)),
						F
					);
				}
				function M(A) {
					const R = (0, u._getSpanForScope)(A);
					if (!R) return;
					const O = (0, w.getClient)();
					return (O ? O.getOptions() : {}).parentSpanIsAlwaysRootSpan
						? (0, a.getRootSpan)(R)
						: R;
				}
				function N(A) {
					return A !== void 0 ? (R) => v(A, R) : (R) => R();
				}
			},
		)
