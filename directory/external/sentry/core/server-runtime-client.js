import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './baseclient.js';
import './checkin.js';
import './currentScopes.js';
import './debug-build.js';
import './sessionflusher.js';
import './tracing/index.js';
import './utils/spanOnScope.js';
import './utils/spanUtils.js';
define(
			de[2128],
			he([1, 0, 80, 1451, 1436, 234, 263, 1443, 640, 731, 301]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*baseclient*/,
 w /*checkin*/,
 E /*currentScopes*/,
 C /*debug-build*/,
 d /*sessionflusher*/,
 m /*index*/,
 r /*spanOnScope*/,
 u /*spanUtils*/) {
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
		)
