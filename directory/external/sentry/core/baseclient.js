define(
			de[1451],
			he([1, 0, 80, 1094, 234, 263, 1099, 316, 316, 887, 639, 1098, 1101]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.BaseClient = void 0);
				const c = "Not capturing exception because it's already been captured.";
				class n {
					constructor(s) {
						if (
							((this._options = s),
							(this._integrations = {}),
							(this._numProcessing = 0),
							(this._outcomes = {}),
							(this._hooks = {}),
							(this._eventProcessors = []),
							s.dsn
								? (this._dsn = (0, t.makeDsn)(s.dsn))
								: E.DEBUG_BUILD &&
									t.logger.warn(
										"No DSN provided, client will not send events.",
									),
							this._dsn)
						) {
							const l = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(
								this._dsn,
								s.tunnel,
								s._metadata ? s._metadata.sdk : void 0,
							);
							this._transport = s.transport({
								tunnel: this._options.tunnel,
								recordDroppedEvent: this.recordDroppedEvent.bind(this),
								...s.transportOptions,
								url: l,
							});
						}
					}
					captureException(s, l, y) {
						const $ = (0, t.uuid4)();
						if ((0, t.checkOrSetAlreadyCaught)(s))
							return E.DEBUG_BUILD && t.logger.log(c), $;
						const v = { event_id: $, ...l };
						return (
							this._process(
								this.eventFromException(s, v).then((S) =>
									this._captureEvent(S, v, y),
								),
							),
							v.event_id
						);
					}
					captureMessage(s, l, y, $) {
						const v = { event_id: (0, t.uuid4)(), ...y },
							S = (0, t.isParameterizedString)(s) ? s : String(s),
							I = (0, t.isPrimitive)(s)
								? this.eventFromMessage(S, l, v)
								: this.eventFromException(s, v);
						return (
							this._process(I.then((T) => this._captureEvent(T, v, $))),
							v.event_id
						);
					}
					captureEvent(s, l, y) {
						const $ = (0, t.uuid4)();
						if (
							l &&
							l.originalException &&
							(0, t.checkOrSetAlreadyCaught)(l.originalException)
						)
							return E.DEBUG_BUILD && t.logger.log(c), $;
						const v = { event_id: $, ...l },
							I = (s.sdkProcessingMetadata || {}).capturedSpanScope;
						return this._process(this._captureEvent(s, v, I || y)), v.event_id;
					}
					captureSession(s) {
						typeof s.release != "string"
							? E.DEBUG_BUILD &&
								t.logger.warn(
									"Discarded session because of missing or non-string release",
								)
							: (this.sendSession(s), (0, r.updateSession)(s, { init: !1 }));
					}
					getDsn() {
						return this._dsn;
					}
					getOptions() {
						return this._options;
					}
					getSdkMetadata() {
						return this._options._metadata;
					}
					getTransport() {
						return this._transport;
					}
					flush(s) {
						const l = this._transport;
						return l
							? (this.emit("flush"),
								this._isClientDoneProcessing(s).then((y) =>
									l.flush(s).then(($) => y && $),
								))
							: (0, t.resolvedSyncPromise)(!0);
					}
					close(s) {
						return this.flush(s).then(
							(l) => ((this.getOptions().enabled = !1), this.emit("close"), l),
						);
					}
					getEventProcessors() {
						return this._eventProcessors;
					}
					addEventProcessor(s) {
						this._eventProcessors.push(s);
					}
					init() {
						(this._isEnabled() ||
							this._options.integrations.some(({ name: s }) =>
								s.startsWith("Spotlight"),
							)) &&
							this._setupIntegrations();
					}
					getIntegrationByName(s) {
						return this._integrations[s];
					}
					addIntegration(s) {
						const l = this._integrations[s.name];
						(0, m.setupIntegration)(this, s, this._integrations),
							l || (0, d.afterSetupIntegrations)(this, [s]);
					}
					sendEvent(s, l = {}) {
						this.emit("beforeSendEvent", s, l);
						let y = (0, C.createEventEnvelope)(
							s,
							this._dsn,
							this._options._metadata,
							this._options.tunnel,
						);
						for (const v of l.attachments || [])
							y = (0, t.addItemToEnvelope)(
								y,
								(0, t.createAttachmentEnvelopeItem)(v),
							);
						const $ = this.sendEnvelope(y);
						$ && $.then((v) => this.emit("afterSendEvent", s, v), null);
					}
					sendSession(s) {
						const l = (0, C.createSessionEnvelope)(
							s,
							this._dsn,
							this._options._metadata,
							this._options.tunnel,
						);
						this.sendEnvelope(l);
					}
					recordDroppedEvent(s, l, y) {
						if (this._options.sendClientReports) {
							const $ = typeof y == "number" ? y : 1,
								v = `${s}:${l}`;
							E.DEBUG_BUILD &&
								t.logger.log(
									`Recording outcome: "${v}"${$ > 1 ? ` (${$} times)` : ""}`,
								),
								(this._outcomes[v] = (this._outcomes[v] || 0) + $);
						}
					}
					on(s, l) {
						const y = (this._hooks[s] = this._hooks[s] || []);
						return (
							y.push(l),
							() => {
								const $ = y.indexOf(l);
								$ > -1 && y.splice($, 1);
							}
						);
					}
					emit(s, ...l) {
						const y = this._hooks[s];
						y && y.forEach(($) => $(...l));
					}
					sendEnvelope(s) {
						return (
							this.emit("beforeEnvelope", s),
							this._isEnabled() && this._transport
								? this._transport
										.send(s)
										.then(
											null,
											(l) => (
												E.DEBUG_BUILD &&
													t.logger.error("Error while sending event:", l),
												l
											),
										)
								: (E.DEBUG_BUILD && t.logger.error("Transport disabled"),
									(0, t.resolvedSyncPromise)({}))
						);
					}
					_setupIntegrations() {
						const { integrations: s } = this._options;
						(this._integrations = (0, m.setupIntegrations)(this, s)),
							(0, d.afterSetupIntegrations)(this, s);
					}
					_updateSessionFromEvent(s, l) {
						let y = !1,
							$ = !1;
						const v = l.exception && l.exception.values;
						if (v) {
							$ = !0;
							for (const T of v) {
								const P = T.mechanism;
								if (P && P.handled === !1) {
									y = !0;
									break;
								}
							}
						}
						const S = s.status === "ok";
						((S && s.errors === 0) || (S && y)) &&
							((0, r.updateSession)(s, {
								...(y && { status: "crashed" }),
								errors: s.errors || Number($ || y),
							}),
							this.captureSession(s));
					}
					_isClientDoneProcessing(s) {
						return new t.SyncPromise((l) => {
							let y = 0;
							const $ = 1,
								v = setInterval(() => {
									this._numProcessing == 0
										? (clearInterval(v), l(!0))
										: ((y += $), s && y >= s && (clearInterval(v), l(!1)));
								}, $);
						});
					}
					_isEnabled() {
						return (
							this.getOptions().enabled !== !1 && this._transport !== void 0
						);
					}
					_prepareEvent(s, l, y, $ = (0, w.getIsolationScope)()) {
						const v = this.getOptions(),
							S = Object.keys(this._integrations);
						return (
							!l.integrations && S.length > 0 && (l.integrations = S),
							this.emit("preprocessEvent", s, l),
							s.type || $.setLastEventId(s.event_id || l.event_id),
							(0, h.prepareEvent)(v, s, l, y, this, $).then((I) => {
								if (I === null) return I;
								const T = {
									...$.getPropagationContext(),
									...(y ? y.getPropagationContext() : void 0),
								};
								if (!(I.contexts && I.contexts.trace) && T) {
									const { traceId: k, spanId: L, parentSpanId: D, dsc: M } = T;
									I.contexts = {
										trace: (0, t.dropUndefinedKeys)({
											trace_id: k,
											span_id: L,
											parent_span_id: D,
										}),
										...I.contexts,
									};
									const N =
										M || (0, u.getDynamicSamplingContextFromClient)(k, this);
									I.sdkProcessingMetadata = {
										dynamicSamplingContext: N,
										...I.sdkProcessingMetadata,
									};
								}
								return I;
							})
						);
					}
					_captureEvent(s, l = {}, y) {
						return this._processEvent(s, l, y).then(
							($) => $.event_id,
							($) => {
								if (E.DEBUG_BUILD) {
									const v = $;
									v.logLevel === "log"
										? t.logger.log(v.message)
										: t.logger.warn(v);
								}
							},
						);
					}
					_processEvent(s, l, y) {
						const $ = this.getOptions(),
							{ sampleRate: v } = $,
							S = f(s),
							I = o(s),
							T = s.type || "error",
							P = `before send for type \`${T}\``,
							k = typeof v > "u" ? void 0 : (0, a.parseSampleRate)(v);
						if (I && typeof k == "number" && Math.random() > k)
							return (
								this.recordDroppedEvent("sample_rate", "error", s),
								(0, t.rejectedSyncPromise)(
									new t.SentryError(
										`Discarding event because it's not included in the random sample (sampling rate = ${v})`,
										"log",
									),
								)
							);
						const L = T === "replay_event" ? "replay" : T,
							M = (s.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
						return this._prepareEvent(s, l, y, M)
							.then((N) => {
								if (N === null)
									throw (
										(this.recordDroppedEvent("event_processor", L, s),
										new t.SentryError(
											"An event processor returned `null`, will not send event.",
											"log",
										))
									);
								if (l.data && l.data.__sentry__ === !0) return N;
								const R = p(this, $, N, l);
								return g(R, P);
							})
							.then((N) => {
								if (N === null) {
									if ((this.recordDroppedEvent("before_send", L, s), S)) {
										const B = 1 + (s.spans || []).length;
										this.recordDroppedEvent("before_send", "span", B);
									}
									throw new t.SentryError(
										`${P} returned \`null\`, will not send event.`,
										"log",
									);
								}
								const A = y && y.getSession();
								if ((!S && A && this._updateSessionFromEvent(A, N), S)) {
									const O =
											(N.sdkProcessingMetadata &&
												N.sdkProcessingMetadata.spanCountBeforeProcessing) ||
											0,
										B = N.spans ? N.spans.length : 0,
										U = O - B;
									U > 0 && this.recordDroppedEvent("before_send", "span", U);
								}
								const R = N.transaction_info;
								if (S && R && N.transaction !== s.transaction) {
									const O = "custom";
									N.transaction_info = { ...R, source: O };
								}
								return this.sendEvent(N, l), N;
							})
							.then(null, (N) => {
								throw N instanceof t.SentryError
									? N
									: (this.captureException(N, {
											data: { __sentry__: !0 },
											originalException: N,
										}),
										new t.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${N}`));
							});
					}
					_process(s) {
						this._numProcessing++,
							s.then(
								(l) => (this._numProcessing--, l),
								(l) => (this._numProcessing--, l),
							);
					}
					_clearOutcomes() {
						const s = this._outcomes;
						return (
							(this._outcomes = {}),
							Object.entries(s).map(([l, y]) => {
								const [$, v] = l.split(":");
								return { reason: $, category: v, quantity: y };
							})
						);
					}
					_flushOutcomes() {
						E.DEBUG_BUILD && t.logger.log("Flushing outcomes...");
						const s = this._clearOutcomes();
						if (s.length === 0) {
							E.DEBUG_BUILD && t.logger.log("No outcomes to send");
							return;
						}
						if (!this._dsn) {
							E.DEBUG_BUILD &&
								t.logger.log("No dsn provided, will not send outcomes");
							return;
						}
						E.DEBUG_BUILD && t.logger.log("Sending outcomes:", s);
						const l = (0, t.createClientReportEnvelope)(
							s,
							this._options.tunnel && (0, t.dsnToString)(this._dsn),
						);
						this.sendEnvelope(l);
					}
				}
				e.BaseClient = n;
				function g(b, s) {
					const l = `${s} must return \`null\` or a valid event.`;
					if ((0, t.isThenable)(b))
						return b.then(
							(y) => {
								if (!(0, t.isPlainObject)(y) && y !== null)
									throw new t.SentryError(l);
								return y;
							},
							(y) => {
								throw new t.SentryError(`${s} rejected with ${y}`);
							},
						);
					if (!(0, t.isPlainObject)(b) && b !== null)
						throw new t.SentryError(l);
					return b;
				}
				function p(b, s, l, y) {
					const {
						beforeSend: $,
						beforeSendTransaction: v,
						beforeSendSpan: S,
					} = s;
					if (o(l) && $) return $(l, y);
					if (f(l)) {
						if (l.spans && S) {
							const I = [];
							for (const T of l.spans) {
								const P = S(T);
								P ? I.push(P) : b.recordDroppedEvent("before_send", "span");
							}
							l.spans = I;
						}
						if (v) {
							if (l.spans) {
								const I = l.spans.length;
								l.sdkProcessingMetadata = {
									...l.sdkProcessingMetadata,
									spanCountBeforeProcessing: I,
								};
							}
							return v(l, y);
						}
					}
					return l;
				}
				function o(b) {
					return b.type === void 0;
				}
				function f(b) {
					return b.type === "transaction";
				}
			},
		),
		