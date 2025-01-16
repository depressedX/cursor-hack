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
		