define(de[1450], he([1, 0, 80, 639, 301]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.applyScopeDataToEvent = E),
				(e.mergeScopeData = C),
				(e.mergeAndOverwriteScopeData = d),
				(e.mergeArray = m);
			function E(n, g) {
				const {
					fingerprint: p,
					span: o,
					breadcrumbs: f,
					sdkProcessingMetadata: b,
				} = g;
				r(n, g), o && h(n, o), c(n, p), u(n, f), a(n, b);
			}
			function C(n, g) {
				const {
					extra: p,
					tags: o,
					user: f,
					contexts: b,
					level: s,
					sdkProcessingMetadata: l,
					breadcrumbs: y,
					fingerprint: $,
					eventProcessors: v,
					attachments: S,
					propagationContext: I,
					transactionName: T,
					span: P,
				} = g;
				d(n, "extra", p),
					d(n, "tags", o),
					d(n, "user", f),
					d(n, "contexts", b),
					d(n, "sdkProcessingMetadata", l),
					s && (n.level = s),
					T && (n.transactionName = T),
					P && (n.span = P),
					y.length && (n.breadcrumbs = [...n.breadcrumbs, ...y]),
					$.length && (n.fingerprint = [...n.fingerprint, ...$]),
					v.length && (n.eventProcessors = [...n.eventProcessors, ...v]),
					S.length && (n.attachments = [...n.attachments, ...S]),
					(n.propagationContext = { ...n.propagationContext, ...I });
			}
			function d(n, g, p) {
				if (p && Object.keys(p).length) {
					n[g] = { ...n[g] };
					for (const o in p)
						Object.prototype.hasOwnProperty.call(p, o) && (n[g][o] = p[o]);
				}
			}
			function m(n, g, p) {
				const o = n[g];
				if (!p.length && (!o || o.length)) return;
				const f = [...(o || []), ...p];
				n[g] = f.length ? f : void 0;
			}
			function r(n, g) {
				const {
						extra: p,
						tags: o,
						user: f,
						contexts: b,
						level: s,
						transactionName: l,
					} = g,
					y = (0, t.dropUndefinedKeys)(p);
				y && Object.keys(y).length && (n.extra = { ...y, ...n.extra });
				const $ = (0, t.dropUndefinedKeys)(o);
				$ && Object.keys($).length && (n.tags = { ...$, ...n.tags });
				const v = (0, t.dropUndefinedKeys)(f);
				v && Object.keys(v).length && (n.user = { ...v, ...n.user });
				const S = (0, t.dropUndefinedKeys)(b);
				S && Object.keys(S).length && (n.contexts = { ...S, ...n.contexts }),
					s && (n.level = s),
					l && n.type !== "transaction" && (n.transaction = l);
			}
			function u(n, g) {
				const p = [...(n.breadcrumbs || []), ...g];
				n.breadcrumbs = p.length ? p : void 0;
			}
			function a(n, g) {
				n.sdkProcessingMetadata = { ...n.sdkProcessingMetadata, ...g };
			}
			function h(n, g) {
				(n.contexts = { trace: (0, w.spanToTraceContext)(g), ...n.contexts }),
					(n.sdkProcessingMetadata = {
						dynamicSamplingContext: (0, i.getDynamicSamplingContextFromSpan)(g),
						...n.sdkProcessingMetadata,
					});
				const p = (0, w.getRootSpan)(g),
					o = (0, w.spanToJSON)(p).description;
				o && !n.transaction && n.type === "transaction" && (n.transaction = o);
			}
			function c(n, g) {
				(n.fingerprint = n.fingerprint ? (0, t.arrayify)(n.fingerprint) : []),
					g && (n.fingerprint = n.fingerprint.concat(g)),
					n.fingerprint && !n.fingerprint.length && delete n.fingerprint;
			}
		}),
		define(
			de[1101],
			he([1, 0, 80, 879, 234, 1437, 732, 1450]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.prepareEvent = m),
					(e.applyDebugIds = a),
					(e.applyDebugMeta = h),
					(e.parseEventHintOrCaptureContext = p);
				function m(s, l, y, $, v, S) {
					const { normalizeDepth: I = 3, normalizeMaxBreadth: T = 1e3 } = s,
						P = {
							...l,
							event_id: l.event_id || y.event_id || (0, t.uuid4)(),
							timestamp: l.timestamp || (0, t.dateTimestampInSeconds)(),
						},
						k = y.integrations || s.integrations.map((O) => O.name);
					r(P, s),
						c(P, k),
						v && v.emit("applyFrameMetadata", l),
						l.type === void 0 && a(P, s.stackParser);
					const L = g($, y.captureContext);
					y.mechanism && (0, t.addExceptionMechanism)(P, y.mechanism);
					const D = v ? v.getEventProcessors() : [],
						M = (0, w.getGlobalScope)().getScopeData();
					if (S) {
						const O = S.getScopeData();
						(0, d.mergeScopeData)(M, O);
					}
					if (L) {
						const O = L.getScopeData();
						(0, d.mergeScopeData)(M, O);
					}
					const N = [...(y.attachments || []), ...M.attachments];
					N.length && (y.attachments = N), (0, d.applyScopeDataToEvent)(P, M);
					const A = [...D, ...M.eventProcessors];
					return (0, E.notifyEventProcessors)(A, P, y).then(
						(O) => (O && h(O), typeof I == "number" && I > 0 ? n(O, I, T) : O),
					);
				}
				function r(s, l) {
					const {
						environment: y,
						release: $,
						dist: v,
						maxValueLength: S = 250,
					} = l;
					"environment" in s ||
						(s.environment = "environment" in l ? y : i.DEFAULT_ENVIRONMENT),
						s.release === void 0 && $ !== void 0 && (s.release = $),
						s.dist === void 0 && v !== void 0 && (s.dist = v),
						s.message && (s.message = (0, t.truncate)(s.message, S));
					const I = s.exception && s.exception.values && s.exception.values[0];
					I && I.value && (I.value = (0, t.truncate)(I.value, S));
					const T = s.request;
					T && T.url && (T.url = (0, t.truncate)(T.url, S));
				}
				const u = new WeakMap();
				function a(s, l) {
					const y = t.GLOBAL_OBJ._sentryDebugIds;
					if (!y) return;
					let $;
					const v = u.get(l);
					v ? ($ = v) : (($ = new Map()), u.set(l, $));
					const S = Object.entries(y).reduce((I, [T, P]) => {
						let k;
						const L = $.get(T);
						L ? (k = L) : ((k = l(T)), $.set(T, k));
						for (let D = k.length - 1; D >= 0; D--) {
							const M = k[D];
							if (M.filename) {
								I[M.filename] = P;
								break;
							}
						}
						return I;
					}, {});
					try {
						s.exception.values.forEach((I) => {
							I.stacktrace.frames.forEach((T) => {
								T.filename && (T.debug_id = S[T.filename]);
							});
						});
					} catch {}
				}
				function h(s) {
					const l = {};
					try {
						s.exception.values.forEach(($) => {
							$.stacktrace.frames.forEach((v) => {
								v.debug_id &&
									(v.abs_path
										? (l[v.abs_path] = v.debug_id)
										: v.filename && (l[v.filename] = v.debug_id),
									delete v.debug_id);
							});
						});
					} catch {}
					if (Object.keys(l).length === 0) return;
					(s.debug_meta = s.debug_meta || {}),
						(s.debug_meta.images = s.debug_meta.images || []);
					const y = s.debug_meta.images;
					Object.entries(l).forEach(([$, v]) => {
						y.push({ type: "sourcemap", code_file: $, debug_id: v });
					});
				}
				function c(s, l) {
					l.length > 0 &&
						((s.sdk = s.sdk || {}),
						(s.sdk.integrations = [...(s.sdk.integrations || []), ...l]));
				}
				function n(s, l, y) {
					if (!s) return null;
					const $ = {
						...s,
						...(s.breadcrumbs && {
							breadcrumbs: s.breadcrumbs.map((v) => ({
								...v,
								...(v.data && { data: (0, t.normalize)(v.data, l, y) }),
							})),
						}),
						...(s.user && { user: (0, t.normalize)(s.user, l, y) }),
						...(s.contexts && { contexts: (0, t.normalize)(s.contexts, l, y) }),
						...(s.extra && { extra: (0, t.normalize)(s.extra, l, y) }),
					};
					return (
						s.contexts &&
							s.contexts.trace &&
							$.contexts &&
							(($.contexts.trace = s.contexts.trace),
							s.contexts.trace.data &&
								($.contexts.trace.data = (0, t.normalize)(
									s.contexts.trace.data,
									l,
									y,
								))),
						s.spans &&
							($.spans = s.spans.map((v) => ({
								...v,
								...(v.data && { data: (0, t.normalize)(v.data, l, y) }),
							}))),
						$
					);
				}
				function g(s, l) {
					if (!l) return s;
					const y = s ? s.clone() : new C.Scope();
					return y.update(l), y;
				}
				function p(s) {
					if (s)
						return o(s)
							? { captureContext: s }
							: b(s)
								? { captureContext: s }
								: s;
				}
				function o(s) {
					return s instanceof C.Scope || typeof s == "function";
				}
				const f = [
					"user",
					"level",
					"extra",
					"contexts",
					"tags",
					"fingerprint",
					"requestSession",
					"propagationContext",
				];
				function b(s) {
					return Object.keys(s).some((l) => f.includes(l));
				}
			},
		),
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
		define(
			de[734],
			he([1, 0, 80, 879, 234, 263, 887, 1101]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.captureException = m),
					(e.captureMessage = r),
					(e.captureEvent = u),
					(e.setContext = a),
					(e.setExtras = h),
					(e.setExtra = c),
					(e.setTags = n),
					(e.setTag = g),
					(e.setUser = p),
					(e.lastEventId = o),
					(e.captureCheckIn = f),
					(e.withMonitor = b),
					(e.flush = s),
					(e.close = l),
					(e.isInitialized = y),
					(e.isEnabled = $),
					(e.addEventProcessor = v),
					(e.startSession = S),
					(e.endSession = I),
					(e.captureSession = P);
				function m(k, L) {
					return (0, w.getCurrentScope)().captureException(
						k,
						(0, d.parseEventHintOrCaptureContext)(L),
					);
				}
				function r(k, L) {
					const D = typeof L == "string" ? L : void 0,
						M = typeof L != "string" ? { captureContext: L } : void 0;
					return (0, w.getCurrentScope)().captureMessage(k, D, M);
				}
				function u(k, L) {
					return (0, w.getCurrentScope)().captureEvent(k, L);
				}
				function a(k, L) {
					(0, w.getIsolationScope)().setContext(k, L);
				}
				function h(k) {
					(0, w.getIsolationScope)().setExtras(k);
				}
				function c(k, L) {
					(0, w.getIsolationScope)().setExtra(k, L);
				}
				function n(k) {
					(0, w.getIsolationScope)().setTags(k);
				}
				function g(k, L) {
					(0, w.getIsolationScope)().setTag(k, L);
				}
				function p(k) {
					(0, w.getIsolationScope)().setUser(k);
				}
				function o() {
					return (0, w.getIsolationScope)().lastEventId();
				}
				function f(k, L) {
					const D = (0, w.getCurrentScope)(),
						M = (0, w.getClient)();
					if (!M)
						E.DEBUG_BUILD &&
							t.logger.warn("Cannot capture check-in. No client defined.");
					else if (!M.captureCheckIn)
						E.DEBUG_BUILD &&
							t.logger.warn(
								"Cannot capture check-in. Client does not support sending check-ins.",
							);
					else return M.captureCheckIn(k, L, D);
					return (0, t.uuid4)();
				}
				function b(k, L, D) {
					const M = f({ monitorSlug: k, status: "in_progress" }, D),
						N = (0, t.timestampInSeconds)();
					function A(R) {
						f({
							monitorSlug: k,
							status: R,
							checkInId: M,
							duration: (0, t.timestampInSeconds)() - N,
						});
					}
					return (0, w.withIsolationScope)(() => {
						let R;
						try {
							R = L();
						} catch (O) {
							throw (A("error"), O);
						}
						return (
							(0, t.isThenable)(R)
								? Promise.resolve(R).then(
										() => {
											A("ok");
										},
										() => {
											A("error");
										},
									)
								: A("ok"),
							R
						);
					});
				}
				async function s(k) {
					const L = (0, w.getClient)();
					return L
						? L.flush(k)
						: (E.DEBUG_BUILD &&
								t.logger.warn("Cannot flush events. No client defined."),
							Promise.resolve(!1));
				}
				async function l(k) {
					const L = (0, w.getClient)();
					return L
						? L.close(k)
						: (E.DEBUG_BUILD &&
								t.logger.warn(
									"Cannot flush events and disable SDK. No client defined.",
								),
							Promise.resolve(!1));
				}
				function y() {
					return !!(0, w.getClient)();
				}
				function $() {
					const k = (0, w.getClient)();
					return !!k && k.getOptions().enabled !== !1 && !!k.getTransport();
				}
				function v(k) {
					(0, w.getIsolationScope)().addEventProcessor(k);
				}
				function S(k) {
					const L = (0, w.getClient)(),
						D = (0, w.getIsolationScope)(),
						M = (0, w.getCurrentScope)(),
						{ release: N, environment: A = i.DEFAULT_ENVIRONMENT } =
							(L && L.getOptions()) || {},
						{ userAgent: R } = t.GLOBAL_OBJ.navigator || {},
						O = (0, C.makeSession)({
							release: N,
							environment: A,
							user: M.getUser() || D.getUser(),
							...(R && { userAgent: R }),
							...k,
						}),
						B = D.getSession();
					return (
						B &&
							B.status === "ok" &&
							(0, C.updateSession)(B, { status: "exited" }),
						I(),
						D.setSession(O),
						M.setSession(O),
						O
					);
				}
				function I() {
					const k = (0, w.getIsolationScope)(),
						L = (0, w.getCurrentScope)(),
						D = L.getSession() || k.getSession();
					D && (0, C.closeSession)(D), T(), k.setSession(), L.setSession();
				}
				function T() {
					const k = (0, w.getIsolationScope)(),
						L = (0, w.getCurrentScope)(),
						D = (0, w.getClient)(),
						M = L.getSession() || k.getSession();
					M && D && D.captureSession(M);
				}
				function P(k = !1) {
					if (k) {
						I();
						return;
					}
					T();
				}
			},
		),
		