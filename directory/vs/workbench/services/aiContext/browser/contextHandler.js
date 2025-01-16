define(de[3236], he([1, 0, 228, 530]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$q7b = w),
				(e.$r7b = E),
				(e.$s7b = d);
			async function w(m) {
				const r = new t.$GB(m).toJson(),
					u = C(r);
				return await (0, i.$pjb)(JSON.stringify(u));
			}
			function E(m) {
				const r = new t.$GB(m).toJson(),
					u = JSON.stringify(r).length,
					a = u < 8e5;
				return (
					a ||
						console.warn(
							"context item is too big! we are filtering it out " + u,
						),
					a
				);
			}
			function C(m) {
				return typeof m != "object" || m === null
					? m
					: Array.isArray(m)
						? m.map(C)
						: Object.keys(m)
								.sort((r, u) => (r < u ? -1 : r > u ? 1 : 0))
								.reduce((r, u) => ((r[u] = C(m[u])), r), {});
			}
			function d(m, r) {
				const u = new t.$6B(m).toJson(),
					a = C(u),
					h = new t.$6B(r).toJson(),
					c = C(h);
				return JSON.stringify(a) === JSON.stringify(c);
			}
		}),
		