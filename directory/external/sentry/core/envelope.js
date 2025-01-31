import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import '../utils/index.js';
import './tracing/dynamicSamplingContext.js';
import './utils/spanUtils.js';
define(
			de[1099],
			he([1, 0, 80, 80, 639, 301]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*dynamicSamplingContext*/,
 E /*spanUtils*/) {
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
		)
