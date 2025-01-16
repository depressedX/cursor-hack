define(de[638], he([1, 0, 234]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.hasTracingEnabled = i);
			function i(w) {
				if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
					return !1;
				const E = (0, t.getClient)(),
					C = w || (E && E.getOptions());
				return (
					!!C &&
					(C.enableTracing || "tracesSampleRate" in C || "tracesSampler" in C)
				);
			}
		}),
		define(
			de[1444],
			he([1, 0, 80, 263, 638, 1098]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.sampleSpan = C);
				function C(d, m) {
					if (!(0, w.hasTracingEnabled)(d)) return [!1];
					let r;
					typeof d.tracesSampler == "function"
						? (r = d.tracesSampler(m))
						: m.parentSampled !== void 0
							? (r = m.parentSampled)
							: typeof d.tracesSampleRate < "u"
								? (r = d.tracesSampleRate)
								: (r = 1);
					const u = (0, E.parseSampleRate)(r);
					return u === void 0
						? (i.DEBUG_BUILD &&
								t.logger.warn(
									"[Tracing] Discarding transaction because of invalid sample rate.",
								),
							[!1])
						: u
							? Math.random() < u
								? [!0, u]
								: (i.DEBUG_BUILD &&
										t.logger.log(
											`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`,
										),
									[!1, u])
							: (i.DEBUG_BUILD &&
									t.logger.log(
										`[Tracing] Discarding transaction because ${typeof d.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
									),
								[!1, u]);
				}
			},
		),
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
		define(
			de[2120],
			he([1, 0, 80, 301, 880, 1439, 1440, 886]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MetricsAggregator = void 0);
				class m {
					constructor(u) {
						(this._client = u),
							(this._buckets = new Map()),
							(this._bucketsTotalWeight = 0),
							(this._interval = setInterval(
								() => this._flush(),
								w.DEFAULT_FLUSH_INTERVAL,
							)),
							this._interval.unref && this._interval.unref(),
							(this._flushShift = Math.floor(
								(Math.random() * w.DEFAULT_FLUSH_INTERVAL) / 1e3,
							)),
							(this._forceFlush = !1);
					}
					add(u, a, h, c = "none", n = {}, g = (0, t.timestampInSeconds)()) {
						const p = Math.floor(g),
							o = (0, d.sanitizeMetricKey)(a),
							f = (0, d.sanitizeTags)(n),
							b = (0, d.sanitizeUnit)(c),
							s = (0, d.getBucketKey)(u, o, b, f);
						let l = this._buckets.get(s);
						const y = l && u === w.SET_METRIC_TYPE ? l.metric.weight : 0;
						l
							? (l.metric.add(h), l.timestamp < p && (l.timestamp = p))
							: ((l = {
									metric: new C.METRIC_MAP[u](h),
									timestamp: p,
									metricType: u,
									name: o,
									unit: b,
									tags: f,
								}),
								this._buckets.set(s, l));
						const $ = typeof h == "string" ? l.metric.weight - y : h;
						(0, i.updateMetricSummaryOnActiveSpan)(u, o, $, b, n, s),
							(this._bucketsTotalWeight += l.metric.weight),
							this._bucketsTotalWeight >= w.MAX_WEIGHT && this.flush();
					}
					flush() {
						(this._forceFlush = !0), this._flush();
					}
					close() {
						(this._forceFlush = !0),
							clearInterval(this._interval),
							this._flush();
					}
					_flush() {
						if (this._forceFlush) {
							(this._forceFlush = !1),
								(this._bucketsTotalWeight = 0),
								this._captureMetrics(this._buckets),
								this._buckets.clear();
							return;
						}
						const u =
								Math.floor((0, t.timestampInSeconds)()) -
								w.DEFAULT_FLUSH_INTERVAL / 1e3 -
								this._flushShift,
							a = new Map();
						for (const [h, c] of this._buckets)
							c.timestamp <= u &&
								(a.set(h, c), (this._bucketsTotalWeight -= c.metric.weight));
						for (const [h] of a) this._buckets.delete(h);
						this._captureMetrics(a);
					}
					_captureMetrics(u) {
						if (u.size > 0) {
							const a = Array.from(u).map(([, h]) => h);
							(0, E.captureAggregateMetrics)(this._client, a);
						}
					}
				}
				e.MetricsAggregator = m;
			},
		),
		define(
			de[2121],
			he([1, 0, 80, 301, 880, 1439, 1440, 886]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.BrowserMetricsAggregator = void 0);
				class m {
					constructor(u) {
						(this._client = u),
							(this._buckets = new Map()),
							(this._interval = setInterval(
								() => this.flush(),
								w.DEFAULT_BROWSER_FLUSH_INTERVAL,
							));
					}
					add(u, a, h, c = "none", n = {}, g = (0, t.timestampInSeconds)()) {
						const p = Math.floor(g),
							o = (0, d.sanitizeMetricKey)(a),
							f = (0, d.sanitizeTags)(n),
							b = (0, d.sanitizeUnit)(c),
							s = (0, d.getBucketKey)(u, o, b, f);
						let l = this._buckets.get(s);
						const y = l && u === w.SET_METRIC_TYPE ? l.metric.weight : 0;
						l
							? (l.metric.add(h), l.timestamp < p && (l.timestamp = p))
							: ((l = {
									metric: new C.METRIC_MAP[u](h),
									timestamp: p,
									metricType: u,
									name: o,
									unit: b,
									tags: f,
								}),
								this._buckets.set(s, l));
						const $ = typeof h == "string" ? l.metric.weight - y : h;
						(0, i.updateMetricSummaryOnActiveSpan)(u, o, $, b, n, s);
					}
					flush() {
						if (this._buckets.size === 0) return;
						const u = Array.from(this._buckets.values());
						(0, E.captureAggregateMetrics)(this._client, u),
							this._buckets.clear();
					}
					close() {
						clearInterval(this._interval), this.flush();
					}
				}
				e.BrowserMetricsAggregator = m;
			},
		),
		define(
			de[639],
			he([1, 0, 80, 879, 234, 453, 638, 301]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.freezeDscOnSpan = r),
					(e.getDynamicSamplingContextFromClient = u),
					(e.getDynamicSamplingContextFromSpan = a),
					(e.spanToBaggageHeader = h);
				const m = "_frozenDsc";
				function r(c, n) {
					const g = c;
					(0, t.addNonEnumerableProperty)(g, m, n);
				}
				function u(c, n) {
					const g = n.getOptions(),
						{ publicKey: p } = n.getDsn() || {},
						o = (0, t.dropUndefinedKeys)({
							environment: g.environment || i.DEFAULT_ENVIRONMENT,
							release: g.release,
							public_key: p,
							trace_id: c,
						});
					return n.emit("createDsc", o), o;
				}
				function a(c) {
					const n = (0, w.getClient)();
					if (!n) return {};
					const g = u((0, d.spanToJSON)(c).trace_id || "", n),
						p = (0, d.getRootSpan)(c),
						o = p[m];
					if (o) return o;
					const f = p.spanContext().traceState,
						b = f && f.get("sentry.dsc"),
						s = b && (0, t.baggageHeaderToDynamicSamplingContext)(b);
					if (s) return s;
					const l = (0, d.spanToJSON)(p),
						y = l.data || {},
						$ = y[E.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
					$ != null && (g.sample_rate = `${$}`);
					const v = y[E.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
						S = l.description;
					return (
						v !== "url" && S && (g.transaction = S),
						(0, C.hasTracingEnabled)() &&
							(g.sampled = String((0, d.spanIsSampled)(p))),
						n.emit("createDsc", g, p),
						g
					);
				}
				function h(c) {
					const n = a(c);
					return (0, t.dynamicSamplingContextToSentryBaggageHeader)(n);
				}
			},
		),
		define(
			de[1099],
			he([1, 0, 80, 80, 639, 301]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createSessionEnvelope = d),
					(e.createEventEnvelope = m),
					(e.createSpanEnvelope = r);
				function C(u, a) {
					return (
						a &&
							((u.sdk = u.sdk || {}),
							(u.sdk.name = u.sdk.name || a.name),
							(u.sdk.version = u.sdk.version || a.version),
							(u.sdk.integrations = [
								...(u.sdk.integrations || []),
								...(a.integrations || []),
							]),
							(u.sdk.packages = [
								...(u.sdk.packages || []),
								...(a.packages || []),
							])),
						u
					);
				}
				function d(u, a, h, c) {
					const n = (0, t.getSdkMetadataForEnvelopeHeader)(h),
						g = {
							sent_at: new Date().toISOString(),
							...(n && { sdk: n }),
							...(!!c && a && { dsn: (0, t.dsnToString)(a) }),
						},
						p =
							"aggregates" in u
								? [{ type: "sessions" }, u]
								: [{ type: "session" }, u.toJSON()];
					return (0, t.createEnvelope)(g, [p]);
				}
				function m(u, a, h, c) {
					const n = (0, t.getSdkMetadataForEnvelopeHeader)(h),
						g = u.type && u.type !== "replay_event" ? u.type : "event";
					C(u, h && h.sdk);
					const p = (0, t.createEventEnvelopeHeaders)(u, n, c, a);
					delete u.sdkProcessingMetadata;
					const o = [{ type: g }, u];
					return (0, t.createEnvelope)(p, [o]);
				}
				function r(u, a) {
					function h(s) {
						return !!s.trace_id && !!s.public_key;
					}
					const c = (0, w.getDynamicSamplingContextFromSpan)(u[0]),
						n = a && a.getDsn(),
						g = a && a.getOptions().tunnel,
						p = {
							sent_at: new Date().toISOString(),
							...(h(c) && { trace: c }),
							...(!!g && n && { dsn: (0, t.dsnToString)(n) }),
						},
						o = a && a.getOptions().beforeSendSpan,
						f = o
							? (s) => o((0, E.spanToJSON)(s))
							: (s) => (0, E.spanToJSON)(s),
						b = [];
					for (const s of u) {
						const l = f(s);
						l && b.push((0, i.createSpanEnvelopeItem)(l));
					}
					return (0, t.createEnvelope)(p, b);
				}
			},
		),
		define(
			de[1445],
			he([1, 0, 80, 263, 301, 636]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e._resetErrorsInstrumented = d),
					(e.registerSpanErrorInstrumentation = m);
				let C = !1;
				function d() {
					C = !1;
				}
				function m() {
					C ||
						((C = !0),
						(0, t.addGlobalErrorInstrumentationHandler)(r),
						(0, t.addGlobalUnhandledRejectionInstrumentationHandler)(r));
				}
				function r() {
					const u = (0, w.getActiveSpan)(),
						a = u && (0, w.getRootSpan)(u);
					if (a) {
						const h = "internal_error";
						i.DEBUG_BUILD &&
							t.logger.log(`[Tracing] Root span: ${h} -> Global error occured`),
							a.setStatus({ code: E.SPAN_STATUS_ERROR, message: h });
					}
				}
				r.tag = "sentry_tracingErrorCallback";
			},
		),
		