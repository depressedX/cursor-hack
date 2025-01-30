import '../../../../require.js';
import '../../../../exports.js';
import '../../../../@sentry/node.js';
import '../common/global.js';
import '../common/tracing.js';
define(Pe[510], Ne([1, 0, 629, 283, 284]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (e = tt(e));
			function N() {
				try {
					e.init({
						...(0, r.makeSharedSentryClientOptions)(),
						integrations: [
							e.inboundFiltersIntegration(),
							e.functionToStringIntegration(),
							e.linkedErrorsIntegration(),
							e.dedupeIntegration(),
						],
					}),
						(0, S.$OOb)(process.env.CURSOR_TRACE_ID);
				} catch (P) {
					console.error("Failed to initialize tracing in extension process", P);
				}
			}
			N();
		}),
		