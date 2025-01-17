import '../../../../require.js';
import '../../../../exports.js';
import '../../browser-utils/index.js';
import '../../core/index.js';
import '../../utils/index.js';
define(de[1104], he([1, 0, 641, 144, 80]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makeFetchTransport = E);
			function E(C, d = (0, t.getNativeImplementation)("fetch")) {
				let m = 0,
					r = 0;
				function u(a) {
					const h = a.body.length;
					(m += h), r++;
					const c = {
						body: a.body,
						method: "POST",
						referrerPolicy: "origin",
						headers: C.headers,
						keepalive: m <= 6e4 && r < 15,
						...C.fetchOptions,
					};
					if (!d)
						return (
							(0, t.clearCachedImplementation)("fetch"),
							(0, w.rejectedSyncPromise)("No fetch implementation available")
						);
					try {
						return d(C.url, c).then(
							(n) => (
								(m -= h),
								r--,
								{
									statusCode: n.status,
									headers: {
										"x-sentry-rate-limits": n.headers.get(
											"X-Sentry-Rate-Limits",
										),
										"retry-after": n.headers.get("Retry-After"),
									},
								}
							),
						);
					} catch (n) {
						return (
							(0, t.clearCachedImplementation)("fetch"),
							(m -= h),
							r--,
							(0, w.rejectedSyncPromise)(n)
						);
					}
				}
				return (0, i.createTransport)(C, u);
			}
		}),
		