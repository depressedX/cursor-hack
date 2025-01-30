import '../../../../../require.js';
import '../../../../../exports.js';
define(de[442], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$h6 = t),
				(e.$i6 = i),
				(e.$j6 = w),
				(e.$k6 = E),
				(e.$l6 = C),
				(e.$m6 = d);
			function t(m) {
				return !m || typeof m != "object"
					? !1
					: typeof m.start == "number" && typeof m.end == "number";
			}
			function i(m) {
				m.sort((u, a) => u - a);
				const r = m.shift();
				return r === void 0
					? []
					: m
							.reduce(
								function (u, a) {
									return (
										a <= u[0][1] ? (u[0][1] = a + 1) : u.unshift([a, a + 1]), u
									);
								},
								[[r, r + 1]],
							)
							.reverse()
							.map((u) => ({ start: u[0], end: u[1] }));
			}
			function w(m) {
				return m.reduce((u, a) => {
					for (let h = a.start; h < a.end; h++) u.push(h);
					return u;
				}, []);
			}
			function E(m) {
				const r = m.sort((h, c) => h.start - c.start),
					u = r[0];
				if (!u) return [];
				const a = r.reduce(
					(h, c) => {
						const n = h[h.length - 1];
						return (
							n.end >= c.start ? (n.end = Math.max(n.end, c.end)) : h.push(c), h
						);
					},
					[u],
				);
				return a.length > 1
					? a.filter((h) => !(h.start === h.end && h.start === 0))
					: a;
			}
			function C(m, r) {
				if (((m = E(m)), (r = E(r)), m.length !== r.length)) return !1;
				for (let u = 0; u < m.length; u++)
					if (m[u].start !== r[u].start || m[u].end !== r[u].end) return !1;
				return !0;
			}
			function d(m, r) {
				return r.start >= m.start && r.end <= m.end;
			}
		}),
		