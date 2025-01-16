define(de[2126], he([1, 0, 1442, 234, 734]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getCurrentHub = void 0),
				(e.getCurrentHubShim = E);
			function E() {
				return {
					bindClient(d) {
						(0, i.getCurrentScope)().setClient(d);
					},
					withScope: i.withScope,
					getClient: () => (0, i.getClient)(),
					getScope: i.getCurrentScope,
					getIsolationScope: i.getIsolationScope,
					captureException: (d, m) =>
						(0, i.getCurrentScope)().captureException(d, m),
					captureMessage: (d, m, r) =>
						(0, i.getCurrentScope)().captureMessage(d, m, r),
					captureEvent: w.captureEvent,
					addBreadcrumb: t.addBreadcrumb,
					setUser: w.setUser,
					setTags: w.setTags,
					setTag: w.setTag,
					setExtra: w.setExtra,
					setExtras: w.setExtras,
					setContext: w.setContext,
					getIntegration(d) {
						const m = (0, i.getClient)();
						return (m && m.getIntegrationByName(d.id)) || null;
					},
					startSession: w.startSession,
					endSession: w.endSession,
					captureSession(d) {
						if (d) return (0, w.endSession)();
						C();
					},
				};
			}
			e.getCurrentHub = E;
			function C() {
				const d = (0, i.getCurrentScope)(),
					m = (0, i.getClient)(),
					r = d.getSession();
				m && r && m.captureSession(r);
			}
		}),
		define(
			de[2127],
			he([1, 0, 80, 234, 734, 316]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.captureConsoleIntegration = void 0);
				const C = "CaptureConsole",
					d = (r = {}) => {
						const u = r.levels || t.CONSOLE_LEVELS;
						return {
							name: C,
							setup(a) {
								"console" in t.GLOBAL_OBJ &&
									(0, t.addConsoleInstrumentationHandler)(
										({ args: h, level: c }) => {
											(0, i.getClient)() !== a || !u.includes(c) || m(h, c);
										},
									);
							},
						};
					};
				e.captureConsoleIntegration = (0, E.defineIntegration)(d);
				function m(r, u) {
					const a = {
						level: (0, t.severityLevelFromString)(u),
						extra: { arguments: r },
					};
					(0, i.withScope)((h) => {
						if (
							(h.addEventProcessor(
								(g) => (
									(g.logger = "console"),
									(0, t.addExceptionMechanism)(g, {
										handled: !1,
										type: "console",
									}),
									g
								),
							),
							u === "assert")
						) {
							if (!r[0]) {
								const g = `Assertion failed: ${((0, t.safeJoin))(r.slice(1), " ") || "console.assert"}`;
								h.setExtra("arguments", r.slice(1)),
									(0, w.captureMessage)(g, a);
							}
							return;
						}
						const c = r.find((g) => g instanceof Error);
						if (c) {
							(0, w.captureException)(c, a);
							return;
						}
						const n = (0, t.safeJoin)(r, " ");
						(0, w.captureMessage)(n, a);
					});
				}
			},
		),
		define(
			de[2128],
			he([1, 0, 80, 1451, 1436, 234, 263, 1443, 640, 731, 301]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ServerRuntimeClient = void 0);
				class a extends i.BaseClient {
					constructor(c) {
						(0, m.registerSpanErrorInstrumentation)(), super(c);
					}
					eventFromException(c, n) {
						return (0, t.resolvedSyncPromise)(
							(0, t.eventFromUnknownInput)(
								this,
								this._options.stackParser,
								c,
								n,
							),
						);
					}
					eventFromMessage(c, n = "info", g) {
						return (0, t.resolvedSyncPromise)(
							(0, t.eventFromMessage)(
								this._options.stackParser,
								c,
								n,
								g,
								this._options.attachStacktrace,
							),
						);
					}
					captureException(c, n, g) {
						if (this._options.autoSessionTracking && this._sessionFlusher) {
							const p = (0, E.getIsolationScope)().getRequestSession();
							p && p.status === "ok" && (p.status = "errored");
						}
						return super.captureException(c, n, g);
					}
					captureEvent(c, n, g) {
						if (
							this._options.autoSessionTracking &&
							this._sessionFlusher &&
							(c.type || "exception") === "exception" &&
							c.exception &&
							c.exception.values &&
							c.exception.values.length > 0
						) {
							const f = (0, E.getIsolationScope)().getRequestSession();
							f && f.status === "ok" && (f.status = "errored");
						}
						return super.captureEvent(c, n, g);
					}
					close(c) {
						return (
							this._sessionFlusher && this._sessionFlusher.close(),
							super.close(c)
						);
					}
					initSessionFlusher() {
						const { release: c, environment: n } = this._options;
						c
							? (this._sessionFlusher = new d.SessionFlusher(this, {
									release: c,
									environment: n,
								}))
							: C.DEBUG_BUILD &&
								t.logger.warn(
									"Cannot initialise an instance of SessionFlusher if no release is provided!",
								);
					}
					captureCheckIn(c, n, g) {
						const p =
							"checkInId" in c && c.checkInId ? c.checkInId : (0, t.uuid4)();
						if (!this._isEnabled())
							return (
								C.DEBUG_BUILD &&
									t.logger.warn("SDK not enabled, will not capture checkin."),
								p
							);
						const o = this.getOptions(),
							{ release: f, environment: b, tunnel: s } = o,
							l = {
								check_in_id: p,
								monitor_slug: c.monitorSlug,
								status: c.status,
								release: f,
								environment: b,
							};
						"duration" in c && (l.duration = c.duration),
							n &&
								(l.monitor_config = {
									schedule: n.schedule,
									checkin_margin: n.checkinMargin,
									max_runtime: n.maxRuntime,
									timezone: n.timezone,
									failure_issue_threshold: n.failureIssueThreshold,
									recovery_threshold: n.recoveryThreshold,
								});
						const [y, $] = this._getTraceInfoFromScope(g);
						$ && (l.contexts = { trace: $ });
						const v = (0, w.createCheckInEnvelope)(
							l,
							y,
							this.getSdkMetadata(),
							s,
							this.getDsn(),
						);
						return (
							C.DEBUG_BUILD &&
								t.logger.info("Sending checkin:", c.monitorSlug, c.status),
							this.sendEnvelope(v),
							p
						);
					}
					_captureRequestSession() {
						this._sessionFlusher
							? this._sessionFlusher.incrementSessionStatusCount()
							: C.DEBUG_BUILD &&
								t.logger.warn(
									"Discarded request mode session because autoSessionTracking option was disabled",
								);
					}
					_prepareEvent(c, n, g, p) {
						return (
							this._options.platform &&
								(c.platform = c.platform || this._options.platform),
							this._options.runtime &&
								(c.contexts = {
									...c.contexts,
									runtime: (c.contexts || {}).runtime || this._options.runtime,
								}),
							this._options.serverName &&
								(c.server_name = c.server_name || this._options.serverName),
							super._prepareEvent(c, n, g, p)
						);
					}
					_getTraceInfoFromScope(c) {
						if (!c) return [void 0, void 0];
						const n = (0, r._getSpanForScope)(c);
						if (n) {
							const s = (0, u.getRootSpan)(n);
							return [
								(0, m.getDynamicSamplingContextFromSpan)(s),
								(0, u.spanToTraceContext)(s),
							];
						}
						const {
								traceId: g,
								spanId: p,
								parentSpanId: o,
								dsc: f,
							} = c.getPropagationContext(),
							b = { trace_id: g, span_id: p, parent_span_id: o };
						return f
							? [f, b]
							: [(0, m.getDynamicSamplingContextFromClient)(g, this), b];
					}
				}
				e.ServerRuntimeClient = a;
			},
		),
		define(
			de[2129],
			he([1, 0, 80, 234, 734, 453, 640]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.trpcMiddleware = r);
				const d = {
					mechanism: { handled: !1, data: { function: "trpcMiddleware" } },
				};
				function m(u) {
					typeof u == "object" &&
						u !== null &&
						"ok" in u &&
						!u.ok &&
						"error" in u &&
						(0, w.captureException)(u.error, d);
				}
				function r(u = {}) {
					return async function (a) {
						const {
								path: h,
								type: c,
								next: n,
								rawInput: g,
								getRawInput: p,
							} = a,
							o = (0, i.getClient)(),
							f = o && o.getOptions(),
							b = { procedure_type: c };
						if (
							(u.attachRpcInput !== void 0
								? u.attachRpcInput
								: f && f.sendDefaultPii) &&
							(g !== void 0 && (b.input = (0, t.normalize)(g)),
							p !== void 0 && typeof p == "function")
						)
							try {
								const s = await p();
								b.input = (0, t.normalize)(s);
							} catch {}
						return (
							(0, w.setContext)("trpc", b),
							(0, C.startSpanManual)(
								{
									name: `trpc/${h}`,
									op: "rpc.server",
									attributes: {
										[E.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route",
										[E.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc",
									},
								},
								async (s) => {
									try {
										const l = await n();
										return m(l), s.end(), l;
									} catch (l) {
										throw ((0, w.captureException)(l, d), s.end(), l);
									}
								},
							)
						);
					};
				}
			},
		),
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
		