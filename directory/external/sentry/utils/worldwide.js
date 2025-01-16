define(de[365], he([1, 0, 1428]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.GLOBAL_OBJ = void 0),
				(e.getGlobalSingleton = i),
				(e.GLOBAL_OBJ = globalThis);
			function i(w, E, C) {
				const d = C || e.GLOBAL_OBJ,
					m = (d.__SENTRY__ = d.__SENTRY__ || {}),
					r = (m[t.SDK_VERSION] = m[t.SDK_VERSION] || {});
				return r[w] || (r[w] = E());
			}
		}),
		