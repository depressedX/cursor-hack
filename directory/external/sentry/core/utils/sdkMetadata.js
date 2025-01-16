define(de[2103], he([1, 0, 80]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.applySdkMetadata = i);
			function i(w, E, C = [E], d = "npm") {
				const m = w._metadata || {};
				m.sdk ||
					(m.sdk = {
						name: `sentry.javascript.${E}`,
						packages: C.map((r) => ({
							name: `${d}:@sentry/${r}`,
							version: t.SDK_VERSION,
						})),
						version: t.SDK_VERSION,
					}),
					(w._metadata = m);
			}
		}),
		