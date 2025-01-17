import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../helpers.js';
define(
			de[2140],
			he([1, 0, 144, 144, 80, 452, 386]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.registerBackgroundTabDetection = d);
				function d() {
					C.WINDOW && C.WINDOW.document
						? C.WINDOW.document.addEventListener("visibilitychange", () => {
								const m = (0, t.getActiveSpan)();
								if (!m) return;
								const r = (0, t.getRootSpan)(m);
								if (C.WINDOW.document.hidden && r) {
									const u = "cancelled",
										{ op: a, status: h } = (0, i.spanToJSON)(r);
									E.DEBUG_BUILD &&
										w.logger.log(
											`[Tracing] Transaction: ${u} -> since tab moved to the background, op: ${a}`,
										),
										h || r.setStatus({ code: t.SPAN_STATUS_ERROR, message: u }),
										r.setAttribute(
											"sentry.cancellation_reason",
											"document.hidden",
										),
										r.end();
								}
							})
						: E.DEBUG_BUILD &&
							w.logger.warn(
								"[Tracing] Could not set up background tab detection due to lack of global document",
							);
				}
			},
		),
		