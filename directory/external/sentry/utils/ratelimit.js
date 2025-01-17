import '../../../require.js';
import '../../../exports.js';
define(de[2071], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DEFAULT_RETRY_AFTER = void 0),
				(e.parseRetryAfterHeader = t),
				(e.disabledUntil = i),
				(e.isRateLimited = w),
				(e.updateRateLimits = E),
				(e.DEFAULT_RETRY_AFTER = 60 * 1e3);
			function t(C, d = Date.now()) {
				const m = parseInt(`${C}`, 10);
				if (!isNaN(m)) return m * 1e3;
				const r = Date.parse(`${C}`);
				return isNaN(r) ? e.DEFAULT_RETRY_AFTER : r - d;
			}
			function i(C, d) {
				return C[d] || C.all || 0;
			}
			function w(C, d, m = Date.now()) {
				return i(C, d) > m;
			}
			function E(C, { statusCode: d, headers: m }, r = Date.now()) {
				const u = { ...C },
					a = m && m["x-sentry-rate-limits"],
					h = m && m["retry-after"];
				if (a)
					for (const c of a.trim().split(",")) {
						const [n, g, , , p] = c.split(":", 5),
							o = parseInt(n, 10),
							f = (isNaN(o) ? 60 : o) * 1e3;
						if (!g) u.all = r + f;
						else
							for (const b of g.split(";"))
								b === "metric_bucket"
									? (!p || p.split(";").includes("custom")) && (u[b] = r + f)
									: (u[b] = r + f);
					}
				else h ? (u.all = r + t(h, r)) : d === 429 && (u.all = r + 60 * 1e3);
				return u;
			}
		}),
		