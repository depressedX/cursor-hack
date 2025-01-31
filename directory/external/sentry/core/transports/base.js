import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../debug-build.js';
define(de[2100], he([1, 0, 80, 263]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*debug-build*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DEFAULT_TRANSPORT_BUFFER_SIZE = void 0),
				(e.createTransport = w),
				(e.DEFAULT_TRANSPORT_BUFFER_SIZE = 64);
			function w(
				C,
				d,
				m = (0, t.makePromiseBuffer)(
					C.bufferSize || e.DEFAULT_TRANSPORT_BUFFER_SIZE,
				),
			) {
				let r = {};
				const u = (h) => m.drain(h);
				function a(h) {
					const c = [];
					if (
						((0, t.forEachEnvelopeItem)(h, (o, f) => {
							const b = (0, t.envelopeItemTypeToDataCategory)(f);
							if ((0, t.isRateLimited)(r, b)) {
								const s = E(o, f);
								C.recordDroppedEvent("ratelimit_backoff", b, s);
							} else c.push(o);
						}),
						c.length === 0)
					)
						return (0, t.resolvedSyncPromise)({});
					const n = (0, t.createEnvelope)(h[0], c),
						g = (o) => {
							(0, t.forEachEnvelopeItem)(n, (f, b) => {
								const s = E(f, b);
								C.recordDroppedEvent(
									o,
									(0, t.envelopeItemTypeToDataCategory)(b),
									s,
								);
							});
						},
						p = () =>
							d({ body: (0, t.serializeEnvelope)(n) }).then(
								(o) => (
									o.statusCode !== void 0 &&
										(o.statusCode < 200 || o.statusCode >= 300) &&
										i.DEBUG_BUILD &&
										t.logger.warn(
											`Sentry responded with status code ${o.statusCode} to sent event.`,
										),
									(r = (0, t.updateRateLimits)(r, o)),
									o
								),
								(o) => {
									throw (g("network_error"), o);
								},
							);
					return m.add(p).then(
						(o) => o,
						(o) => {
							if (o instanceof t.SentryError)
								return (
									i.DEBUG_BUILD &&
										t.logger.error(
											"Skipped sending event because buffer is full.",
										),
									g("queue_overflow"),
									(0, t.resolvedSyncPromise)({})
								);
							throw o;
						},
					);
				}
				return { send: a, flush: u };
			}
			function E(C, d) {
				if (!(d !== "event" && d !== "transaction"))
					return Array.isArray(C) ? C[1] : void 0;
			}
		})
