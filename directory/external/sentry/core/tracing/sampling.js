import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../utils/hasTracingEnabled.js';
import '../utils/parseSampleRate.js';
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
		