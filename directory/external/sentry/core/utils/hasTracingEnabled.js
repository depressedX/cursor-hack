import '../../../../require.js';
import '../../../../exports.js';
import '../currentScopes.js';
define(de[638], he([1, 0, 234]), function (ce /*require*/,
 e /*exports*/,
 t /*currentScopes*/) {
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
		})
