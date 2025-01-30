import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../utils/spanUtils.js';
import './spanstatus.js';
define(
			de[1445],
			he([1, 0, 80, 263, 301, 636]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*debug-build*/,
 w /*spanUtils*/,
 E /*spanstatus*/) {
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
		