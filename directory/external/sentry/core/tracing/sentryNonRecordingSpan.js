define(de[888], he([1, 0, 80, 301]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SentryNonRecordingSpan = void 0);
			class w {
				constructor(C = {}) {
					(this._traceId = C.traceId || (0, t.uuid4)()),
						(this._spanId = C.spanId || (0, t.uuid4)().substring(16));
				}
				spanContext() {
					return {
						spanId: this._spanId,
						traceId: this._traceId,
						traceFlags: i.TRACE_FLAG_NONE,
					};
				}
				end(C) {}
				setAttribute(C, d) {
					return this;
				}
				setAttributes(C) {
					return this;
				}
				setStatus(C) {
					return this;
				}
				updateName(C) {
					return this;
				}
				isRecording() {
					return !1;
				}
				addEvent(C, d, m) {
					return this;
				}
				addLink(C) {
					return this;
				}
				addLinks(C) {
					return this;
				}
				recordException(C, d) {}
			}
			e.SentryNonRecordingSpan = w;
		}),
		define(
			de[1447],
			he([1, 0, 80, 234, 263, 1099, 1095, 453, 301, 639, 1100, 1446, 1096]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.SentrySpan = void 0);
				const c = 1e3;
				class n {
					constructor(s = {}) {
						(this._traceId = s.traceId || (0, t.uuid4)()),
							(this._spanId = s.spanId || (0, t.uuid4)().substring(16)),
							(this._startTime =
								s.startTimestamp || (0, t.timestampInSeconds)()),
							(this._attributes = {}),
							this.setAttributes({
								[d.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
								[d.SEMANTIC_ATTRIBUTE_SENTRY_OP]: s.op,
								...s.attributes,
							}),
							(this._name = s.name),
							s.parentSpanId && (this._parentSpanId = s.parentSpanId),
							"sampled" in s && (this._sampled = s.sampled),
							s.endTimestamp && (this._endTime = s.endTimestamp),
							(this._events = []),
							(this._isStandaloneSpan = s.isStandalone),
							this._endTime && this._onSpanEnded();
					}
					addLink(s) {
						return this;
					}
					addLinks(s) {
						return this;
					}
					recordException(s, l) {}
					spanContext() {
						const { _spanId: s, _traceId: l, _sampled: y } = this;
						return {
							spanId: s,
							traceId: l,
							traceFlags: y ? m.TRACE_FLAG_SAMPLED : m.TRACE_FLAG_NONE,
						};
					}
					setAttribute(s, l) {
						return (
							l === void 0
								? delete this._attributes[s]
								: (this._attributes[s] = l),
							this
						);
					}
					setAttributes(s) {
						return (
							Object.keys(s).forEach((l) => this.setAttribute(l, s[l])), this
						);
					}
					updateStartTime(s) {
						this._startTime = (0, m.spanTimeInputToSeconds)(s);
					}
					setStatus(s) {
						return (this._status = s), this;
					}
					updateName(s) {
						return (this._name = s), this;
					}
					end(s) {
						this._endTime ||
							((this._endTime = (0, m.spanTimeInputToSeconds)(s)),
							(0, u.logSpanEnd)(this),
							this._onSpanEnded());
					}
					getSpanJSON() {
						return (0, t.dropUndefinedKeys)({
							data: this._attributes,
							description: this._name,
							op: this._attributes[d.SEMANTIC_ATTRIBUTE_SENTRY_OP],
							parent_span_id: this._parentSpanId,
							span_id: this._spanId,
							start_timestamp: this._startTime,
							status: (0, m.getStatusMessage)(this._status),
							timestamp: this._endTime,
							trace_id: this._traceId,
							origin: this._attributes[d.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
							_metrics_summary: (0, C.getMetricSummaryJsonForSpan)(this),
							profile_id: this._attributes[d.SEMANTIC_ATTRIBUTE_PROFILE_ID],
							exclusive_time:
								this._attributes[d.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
							measurements: (0, a.timedEventsToMeasurements)(this._events),
							is_segment:
								(this._isStandaloneSpan && (0, m.getRootSpan)(this) === this) ||
								void 0,
							segment_id: this._isStandaloneSpan
								? (0, m.getRootSpan)(this).spanContext().spanId
								: void 0,
						});
					}
					isRecording() {
						return !this._endTime && !!this._sampled;
					}
					addEvent(s, l, y) {
						w.DEBUG_BUILD &&
							t.logger.log("[Tracing] Adding an event to span:", s);
						const $ = g(l) ? l : y || (0, t.timestampInSeconds)(),
							v = g(l) ? {} : l || {},
							S = {
								name: s,
								time: (0, m.spanTimeInputToSeconds)($),
								attributes: v,
							};
						return this._events.push(S), this;
					}
					isStandaloneSpan() {
						return !!this._isStandaloneSpan;
					}
					_onSpanEnded() {
						const s = (0, i.getClient)();
						if (
							(s && s.emit("spanEnd", this),
							!(this._isStandaloneSpan || this === (0, m.getRootSpan)(this)))
						)
							return;
						if (this._isStandaloneSpan) {
							this._sampled
								? f((0, E.createSpanEnvelope)([this], s))
								: (w.DEBUG_BUILD &&
										t.logger.log(
											"[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
										),
									s && s.recordDroppedEvent("sample_rate", "span"));
							return;
						}
						const y = this._convertSpanToTransaction();
						y &&
							(
								(0, h.getCapturedScopesOnSpan)(this).scope ||
								(0, i.getCurrentScope)()
							).captureEvent(y);
					}
					_convertSpanToTransaction() {
						if (!p((0, m.spanToJSON)(this))) return;
						this._name ||
							(w.DEBUG_BUILD &&
								t.logger.warn(
									"Transaction has no name, falling back to `<unlabeled transaction>`.",
								),
							(this._name = "<unlabeled transaction>"));
						const { scope: s, isolationScope: l } = (0,
							h.getCapturedScopesOnSpan)(this),
							$ =
								(s || (0, i.getCurrentScope)()).getClient() ||
								(0, i.getClient)();
						if (this._sampled !== !0) {
							w.DEBUG_BUILD &&
								t.logger.log(
									"[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
								),
								$ && $.recordDroppedEvent("sample_rate", "transaction");
							return;
						}
						const S = (0, m.getSpanDescendants)(this)
								.filter((L) => L !== this && !o(L))
								.map((L) => (0, m.spanToJSON)(L))
								.filter(p),
							I = this._attributes[d.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
							T = {
								contexts: { trace: (0, m.spanToTransactionTraceContext)(this) },
								spans:
									S.length > c
										? S.sort(
												(L, D) => L.start_timestamp - D.start_timestamp,
											).slice(0, c)
										: S,
								start_timestamp: this._startTime,
								timestamp: this._endTime,
								transaction: this._name,
								type: "transaction",
								sdkProcessingMetadata: {
									capturedSpanScope: s,
									capturedSpanIsolationScope: l,
									...(0, t.dropUndefinedKeys)({
										dynamicSamplingContext: (0,
										r.getDynamicSamplingContextFromSpan)(this),
									}),
								},
								_metrics_summary: (0, C.getMetricSummaryJsonForSpan)(this),
								...(I && { transaction_info: { source: I } }),
							},
							P = (0, a.timedEventsToMeasurements)(this._events);
						return (
							P &&
								Object.keys(P).length &&
								(w.DEBUG_BUILD &&
									t.logger.log(
										"[Measurements] Adding measurements to transaction event",
										JSON.stringify(P, void 0, 2),
									),
								(T.measurements = P)),
							T
						);
					}
				}
				e.SentrySpan = n;
				function g(b) {
					return (
						(b && typeof b == "number") || b instanceof Date || Array.isArray(b)
					);
				}
				function p(b) {
					return (
						!!b.start_timestamp && !!b.timestamp && !!b.span_id && !!b.trace_id
					);
				}
				function o(b) {
					return b instanceof n && b.isStandaloneSpan();
				}
				function f(b) {
					const s = (0, i.getClient)();
					if (!s) return;
					const l = b[1];
					if (!l || l.length === 0) {
						s.recordDroppedEvent("before_send", "span");
						return;
					}
					const y = s.getTransport();
					y &&
						y.send(b).then(null, ($) => {
							w.DEBUG_BUILD && t.logger.error("Error while sending span:", $);
						});
				}
			},
		),
		define(
			de[1448],
			he([
				1, 0, 80, 578, 234, 733, 263, 453, 1097, 638, 731, 301, 639, 1100, 1444,
				888, 1447, 636, 1096,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
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
		),
		define(
			de[2123],
			he([1, 0, 80, 234, 263, 453, 638, 731, 301, 888, 636, 1448]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
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
		),
		define(
			de[640],
			he([
				1, 0, 1445, 1096, 2122, 2123, 1447, 888, 636, 636, 1448, 639, 1446,
				1444, 1100,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.logSpanStart =
						e.logSpanEnd =
						e.sampleSpan =
						e.timedEventsToMeasurements =
						e.setMeasurement =
						e.spanToBaggageHeader =
						e.getDynamicSamplingContextFromSpan =
						e.getDynamicSamplingContextFromClient =
						e.startNewTrace =
						e.suppressTracing =
						e.withActiveSpan =
						e.continueTrace =
						e.startSpanManual =
						e.startInactiveSpan =
						e.startSpan =
						e.SPAN_STATUS_UNSET =
						e.SPAN_STATUS_OK =
						e.SPAN_STATUS_ERROR =
						e.getSpanStatusFromHttpCode =
						e.setHttpStatus =
						e.SentryNonRecordingSpan =
						e.SentrySpan =
						e.TRACING_DEFAULTS =
						e.startIdleSpan =
						e.addTracingExtensions =
						e.getCapturedScopesOnSpan =
						e.setCapturedScopesOnSpan =
						e.registerSpanErrorInstrumentation =
							void 0),
					Object.defineProperty(e, "registerSpanErrorInstrumentation", {
						enumerable: !0,
						get: function () {
							return t.registerSpanErrorInstrumentation;
						},
					}),
					Object.defineProperty(e, "setCapturedScopesOnSpan", {
						enumerable: !0,
						get: function () {
							return i.setCapturedScopesOnSpan;
						},
					}),
					Object.defineProperty(e, "getCapturedScopesOnSpan", {
						enumerable: !0,
						get: function () {
							return i.getCapturedScopesOnSpan;
						},
					}),
					Object.defineProperty(e, "addTracingExtensions", {
						enumerable: !0,
						get: function () {
							return w.addTracingExtensions;
						},
					}),
					Object.defineProperty(e, "startIdleSpan", {
						enumerable: !0,
						get: function () {
							return E.startIdleSpan;
						},
					}),
					Object.defineProperty(e, "TRACING_DEFAULTS", {
						enumerable: !0,
						get: function () {
							return E.TRACING_DEFAULTS;
						},
					}),
					Object.defineProperty(e, "SentrySpan", {
						enumerable: !0,
						get: function () {
							return C.SentrySpan;
						},
					}),
					Object.defineProperty(e, "SentryNonRecordingSpan", {
						enumerable: !0,
						get: function () {
							return d.SentryNonRecordingSpan;
						},
					}),
					Object.defineProperty(e, "setHttpStatus", {
						enumerable: !0,
						get: function () {
							return m.setHttpStatus;
						},
					}),
					Object.defineProperty(e, "getSpanStatusFromHttpCode", {
						enumerable: !0,
						get: function () {
							return m.getSpanStatusFromHttpCode;
						},
					}),
					Object.defineProperty(e, "SPAN_STATUS_ERROR", {
						enumerable: !0,
						get: function () {
							return r.SPAN_STATUS_ERROR;
						},
					}),
					Object.defineProperty(e, "SPAN_STATUS_OK", {
						enumerable: !0,
						get: function () {
							return r.SPAN_STATUS_OK;
						},
					}),
					Object.defineProperty(e, "SPAN_STATUS_UNSET", {
						enumerable: !0,
						get: function () {
							return r.SPAN_STATUS_UNSET;
						},
					}),
					Object.defineProperty(e, "startSpan", {
						enumerable: !0,
						get: function () {
							return u.startSpan;
						},
					}),
					Object.defineProperty(e, "startInactiveSpan", {
						enumerable: !0,
						get: function () {
							return u.startInactiveSpan;
						},
					}),
					Object.defineProperty(e, "startSpanManual", {
						enumerable: !0,
						get: function () {
							return u.startSpanManual;
						},
					}),
					Object.defineProperty(e, "continueTrace", {
						enumerable: !0,
						get: function () {
							return u.continueTrace;
						},
					}),
					Object.defineProperty(e, "withActiveSpan", {
						enumerable: !0,
						get: function () {
							return u.withActiveSpan;
						},
					}),
					Object.defineProperty(e, "suppressTracing", {
						enumerable: !0,
						get: function () {
							return u.suppressTracing;
						},
					}),
					Object.defineProperty(e, "startNewTrace", {
						enumerable: !0,
						get: function () {
							return u.startNewTrace;
						},
					}),
					Object.defineProperty(e, "getDynamicSamplingContextFromClient", {
						enumerable: !0,
						get: function () {
							return a.getDynamicSamplingContextFromClient;
						},
					}),
					Object.defineProperty(e, "getDynamicSamplingContextFromSpan", {
						enumerable: !0,
						get: function () {
							return a.getDynamicSamplingContextFromSpan;
						},
					}),
					Object.defineProperty(e, "spanToBaggageHeader", {
						enumerable: !0,
						get: function () {
							return a.spanToBaggageHeader;
						},
					}),
					Object.defineProperty(e, "setMeasurement", {
						enumerable: !0,
						get: function () {
							return h.setMeasurement;
						},
					}),
					Object.defineProperty(e, "timedEventsToMeasurements", {
						enumerable: !0,
						get: function () {
							return h.timedEventsToMeasurements;
						},
					}),
					Object.defineProperty(e, "sampleSpan", {
						enumerable: !0,
						get: function () {
							return c.sampleSpan;
						},
					}),
					Object.defineProperty(e, "logSpanEnd", {
						enumerable: !0,
						get: function () {
							return n.logSpanEnd;
						},
					}),
					Object.defineProperty(e, "logSpanStart", {
						enumerable: !0,
						get: function () {
							return n.logSpanStart;
						},
					});
			},
		),
		define(
			de[2124],
			he([1, 0, 80, 234, 453, 640, 888, 638, 301]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.instrumentFetchRequest = r),
					(e.addTracingHeadersToFetchRequest = u);
				function r(n, g, p, o, f = "auto.http.browser") {
					if (!n.fetchData) return;
					const b = (0, d.hasTracingEnabled)() && g(n.fetchData.url);
					if (n.endTimestamp && b) {
						const P = n.fetchData.__span;
						if (!P) return;
						const k = o[P];
						k && (h(k, n), delete o[P]);
						return;
					}
					const s = (0, i.getCurrentScope)(),
						l = (0, i.getClient)(),
						{ method: y, url: $ } = n.fetchData,
						v = a($),
						S = v ? (0, t.parseUrl)(v).host : void 0,
						I = !!(0, m.getActiveSpan)(),
						T =
							b && I
								? (0, E.startInactiveSpan)({
										name: `${y} ${$}`,
										attributes: {
											url: $,
											type: "fetch",
											"http.method": y,
											"http.url": v,
											"server.address": S,
											[w.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
											[w.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
										},
									})
								: new C.SentryNonRecordingSpan();
					if (
						((n.fetchData.__span = T.spanContext().spanId),
						(o[T.spanContext().spanId] = T),
						p(n.fetchData.url) && l)
					) {
						const P = n.args[0];
						n.args[1] = n.args[1] || {};
						const k = n.args[1];
						k.headers = u(
							P,
							l,
							s,
							k,
							(0, d.hasTracingEnabled)() && I ? T : void 0,
						);
					}
					return T;
				}
				function u(n, g, p, o, f) {
					const b = (0, i.getIsolationScope)(),
						{
							traceId: s,
							spanId: l,
							sampled: y,
							dsc: $,
						} = { ...b.getPropagationContext(), ...p.getPropagationContext() },
						v = f
							? (0, m.spanToTraceHeader)(f)
							: (0, t.generateSentryTraceHeader)(s, l, y),
						S = (0, t.dynamicSamplingContextToSentryBaggageHeader)(
							$ ||
								(f
									? (0, E.getDynamicSamplingContextFromSpan)(f)
									: (0, E.getDynamicSamplingContextFromClient)(s, g)),
						),
						I =
							o.headers ||
							(typeof Request < "u" && (0, t.isInstanceOf)(n, Request)
								? n.headers
								: void 0);
					if (I)
						if (typeof Headers < "u" && (0, t.isInstanceOf)(I, Headers)) {
							const T = new Headers(I);
							if ((T.set("sentry-trace", v), S)) {
								const P = T.get(t.BAGGAGE_HEADER_NAME);
								if (P) {
									const k = c(P);
									T.set(t.BAGGAGE_HEADER_NAME, k ? `${k},${S}` : S);
								} else T.set(t.BAGGAGE_HEADER_NAME, S);
							}
							return T;
						} else if (Array.isArray(I)) {
							const T = [
								...I.filter(
									(P) => !(Array.isArray(P) && P[0] === "sentry-trace"),
								).map((P) => {
									if (
										Array.isArray(P) &&
										P[0] === t.BAGGAGE_HEADER_NAME &&
										typeof P[1] == "string"
									) {
										const [k, L, ...D] = P;
										return [k, c(L), ...D];
									} else return P;
								}),
								["sentry-trace", v],
							];
							return S && T.push([t.BAGGAGE_HEADER_NAME, S]), T;
						} else {
							const T = "baggage" in I ? I.baggage : void 0;
							let P = [];
							return (
								Array.isArray(T)
									? (P = T.map((k) => (typeof k == "string" ? c(k) : k)).filter(
											(k) => k === "",
										))
									: T && P.push(c(T)),
								S && P.push(S),
								{
									...I,
									"sentry-trace": v,
									baggage: P.length > 0 ? P.join(",") : void 0,
								}
							);
						}
					else return { "sentry-trace": v, baggage: S };
				}
				function a(n) {
					try {
						return new URL(n).href;
					} catch {
						return;
					}
				}
				function h(n, g) {
					if (g.response) {
						(0, E.setHttpStatus)(n, g.response.status);
						const p =
							g.response &&
							g.response.headers &&
							g.response.headers.get("content-length");
						if (p) {
							const o = parseInt(p);
							o > 0 && n.setAttribute("http.response_content_length", o);
						}
					} else
						g.error &&
							n.setStatus({
								code: E.SPAN_STATUS_ERROR,
								message: "internal_error",
							});
					n.end();
				}
				function c(n) {
					return n
						.split(",")
						.filter(
							(g) => !g.split("=")[0].startsWith(t.SENTRY_BAGGAGE_KEY_PREFIX),
						)
						.join(",");
				}
			},
		),
		define(
			de[1449],
			he([1, 0, 80, 234, 263, 640, 1097, 301, 880]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.metrics = void 0);
				function r(o, f) {
					const b = (0, t.getGlobalSingleton)(
							"globalMetricsAggregators",
							() => new WeakMap(),
						),
						s = b.get(o);
					if (s) return s;
					const l = new f(o);
					return (
						o.on("flush", () => l.flush()),
						o.on("close", () => l.close()),
						b.set(o, l),
						l
					);
				}
				function u(o, f, b, s, l = {}) {
					const y = l.client || (0, i.getClient)();
					if (!y) return;
					const $ = (0, d.getActiveSpan)(),
						v = $ ? (0, d.getRootSpan)($) : void 0,
						S = v && (0, d.spanToJSON)(v).description,
						{ unit: I, tags: T, timestamp: P } = l,
						{ release: k, environment: L } = y.getOptions(),
						D = {};
					k && (D.release = k),
						L && (D.environment = L),
						S && (D.transaction = S),
						w.DEBUG_BUILD &&
							t.logger.log(`Adding value of ${s} to ${f} metric ${b}`),
						r(y, o).add(f, b, s, I, { ...D, ...T }, P);
				}
				function a(o, f, b = 1, s) {
					u(o, m.COUNTER_METRIC_TYPE, f, p(b), s);
				}
				function h(o, f, b, s) {
					u(o, m.DISTRIBUTION_METRIC_TYPE, f, p(b), s);
				}
				function c(o, f, b, s = "second", l) {
					if (typeof b == "function") {
						const y = (0, t.timestampInSeconds)();
						return (0, E.startSpanManual)(
							{ op: "metrics.timing", name: f, startTime: y, onlyIfParent: !0 },
							($) =>
								(0, C.handleCallbackErrors)(
									() => b(),
									() => {},
									() => {
										const v = (0, t.timestampInSeconds)(),
											S = v - y;
										h(o, f, S, { ...l, unit: "second" }), $.end(v);
									},
								),
						);
					}
					h(o, f, b, { ...l, unit: s });
				}
				function n(o, f, b, s) {
					u(o, m.SET_METRIC_TYPE, f, b, s);
				}
				function g(o, f, b, s) {
					u(o, m.GAUGE_METRIC_TYPE, f, p(b), s);
				}
				e.metrics = {
					increment: a,
					distribution: h,
					set: n,
					gauge: g,
					timing: c,
					getMetricsAggregatorForClient: r,
				};
				function p(o) {
					return typeof o == "string" ? parseInt(o) : o;
				}
			},
		),
		