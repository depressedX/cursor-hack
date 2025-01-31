import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../currentScopes.js';
import '../debug-build.js';
import '../semanticAttributes.js';
import '../utils/hasTracingEnabled.js';
import '../utils/spanOnScope.js';
import '../utils/spanUtils.js';
import './sentryNonRecordingSpan.js';
import './spanstatus.js';
import './trace.js';
define(
			de[2123],
			he([1, 0, 80, 234, 263, 453, 638, 731, 301, 888, 636, 1448]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/,
 w /*debug-build*/,
 E /*semanticAttributes*/,
 C /*hasTracingEnabled*/,
 d /*spanOnScope*/,
 m /*spanUtils*/,
 r /*sentryNonRecordingSpan*/,
 u /*spanstatus*/,
 a /*trace*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TRACING_DEFAULTS = void 0),
					(e.startIdleSpan = b),
					(e.TRACING_DEFAULTS = {
						idleTimeout: 1e3,
						finalTimeout: 3e4,
						childSpanTimeout: 15e3,
					});
				const h = "heartbeatFailed",
					c = "idleTimeout",
					n = "finalTimeout",
					g = "externalFinish",
					p = "cancelled",
					o = "documentHidden",
					f = "interactionInterrupted";
				function b(l, y = {}) {
					const $ = new Map();
					let v = !1,
						S,
						I,
						T = g,
						P = !y.disableAutoFinish;
					const k = [],
						{
							idleTimeout: L = e.TRACING_DEFAULTS.idleTimeout,
							finalTimeout: D = e.TRACING_DEFAULTS.finalTimeout,
							childSpanTimeout: M = e.TRACING_DEFAULTS.childSpanTimeout,
							beforeSpanEnd: N,
						} = y,
						A = (0, i.getClient)();
					if (!A || !(0, C.hasTracingEnabled)())
						return new r.SentryNonRecordingSpan();
					const R = (0, i.getCurrentScope)(),
						O = (0, m.getActiveSpan)(),
						B = s(l);
					B.end = new Proxy(B.end, {
						apply(G, K, J) {
							N && N(B);
							const [W, ...X] = J,
								Y = W || (0, t.timestampInSeconds)(),
								ie = (0, m.spanTimeInputToSeconds)(Y),
								ne = (0, m.getSpanDescendants)(B).filter((Z) => Z !== B);
							if (!ne.length) return V(ie), Reflect.apply(G, K, [ie, ...X]);
							const ee = ne
									.map((Z) => (0, m.spanToJSON)(Z).timestamp)
									.filter((Z) => !!Z),
								_ = ee.length ? Math.max(...ee) : void 0,
								te = (0, m.spanToJSON)(B).start_timestamp,
								Q = Math.min(
									te ? te + D / 1e3 : 1 / 0,
									Math.max(te || -1 / 0, Math.min(ie, _ || 1 / 0)),
								);
							return V(Q), Reflect.apply(G, K, [Q, ...X]);
						},
					});
					function U() {
						S && (clearTimeout(S), (S = void 0));
					}
					function z() {
						I && (clearTimeout(I), (I = void 0));
					}
					function F(G) {
						U(),
							(S = setTimeout(() => {
								!v && $.size === 0 && P && ((T = c), B.end(G));
							}, L));
					}
					function x(G) {
						z(),
							(S = setTimeout(() => {
								!v && P && ((T = h), B.end(G));
							}, M));
					}
					function H(G) {
						U(), $.set(G, !0);
						const K = (0, t.timestampInSeconds)();
						x(K + M / 1e3);
					}
					function q(G) {
						if (($.has(G) && $.delete(G), $.size === 0)) {
							const K = (0, t.timestampInSeconds)();
							F(K + L / 1e3), z();
						}
					}
					function V(G) {
						(v = !0),
							$.clear(),
							k.forEach((ie) => ie()),
							(0, d._setSpanForScope)(R, O);
						const K = (0, m.spanToJSON)(B),
							{ start_timestamp: J } = K;
						if (!J) return;
						(K.data || {})[
							E.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON
						] ||
							B.setAttribute(
								E.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
								T,
							),
							t.logger.log(`[Tracing] Idle span "${K.op}" finished`);
						const X = (0, m.getSpanDescendants)(B).filter((ie) => ie !== B);
						let Y = 0;
						X.forEach((ie) => {
							ie.isRecording() &&
								(ie.setStatus({
									code: u.SPAN_STATUS_ERROR,
									message: "cancelled",
								}),
								ie.end(G),
								w.DEBUG_BUILD &&
									t.logger.log(
										"[Tracing] Cancelling span since span ended early",
										JSON.stringify(ie, void 0, 2),
									));
							const ne = (0, m.spanToJSON)(ie),
								{ timestamp: ee = 0, start_timestamp: _ = 0 } = ne,
								te = _ <= G,
								Q = (D + L) / 1e3,
								Z = ee - _ <= Q;
							if (w.DEBUG_BUILD) {
								const se = JSON.stringify(ie, void 0, 2);
								te
									? Z ||
										t.logger.log(
											"[Tracing] Discarding span since it finished after idle span final timeout",
											se,
										)
									: t.logger.log(
											"[Tracing] Discarding span since it happened after idle span was finished",
											se,
										);
							}
							(!Z || !te) && ((0, m.removeChildSpanFromSpan)(B, ie), Y++);
						}),
							Y > 0 && B.setAttribute("sentry.idle_span_discarded_spans", Y);
					}
					return (
						k.push(
							A.on("spanStart", (G) => {
								if (v || G === B || (0, m.spanToJSON)(G).timestamp) return;
								(0, m.getSpanDescendants)(B).includes(G) &&
									H(G.spanContext().spanId);
							}),
						),
						k.push(
							A.on("spanEnd", (G) => {
								v || q(G.spanContext().spanId);
							}),
						),
						k.push(
							A.on("idleSpanEnableAutoFinish", (G) => {
								G === B && ((P = !0), F(), $.size && x());
							}),
						),
						y.disableAutoFinish || F(),
						setTimeout(() => {
							v ||
								(B.setStatus({
									code: u.SPAN_STATUS_ERROR,
									message: "deadline_exceeded",
								}),
								(T = n),
								B.end());
						}, D),
						B
					);
				}
				function s(l) {
					const y = (0, a.startInactiveSpan)(l);
					return (
						(0, d._setSpanForScope)((0, i.getCurrentScope)(), y),
						w.DEBUG_BUILD &&
							t.logger.log("[Tracing] Started span is an idle span"),
						y
					);
				}
			},
		)
