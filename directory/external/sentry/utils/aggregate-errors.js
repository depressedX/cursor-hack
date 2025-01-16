define(de[2074], he([1, 0, 430, 881]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.applyAggregateErrorsToEvent = w);
			function w(r, u, a = 250, h, c, n, g) {
				if (
					!n.exception ||
					!n.exception.values ||
					!g ||
					!(0, t.isInstanceOf)(g.originalException, Error)
				)
					return;
				const p =
					n.exception.values.length > 0
						? n.exception.values[n.exception.values.length - 1]
						: void 0;
				p &&
					(n.exception.values = m(
						E(r, u, c, g.originalException, h, n.exception.values, p, 0),
						a,
					));
			}
			function E(r, u, a, h, c, n, g, p) {
				if (n.length >= a + 1) return n;
				let o = [...n];
				if ((0, t.isInstanceOf)(h[c], Error)) {
					C(g, p);
					const f = r(u, h[c]),
						b = o.length;
					d(f, c, b, p), (o = E(r, u, a, h[c], c, [f, ...o], f, b));
				}
				return (
					Array.isArray(h.errors) &&
						h.errors.forEach((f, b) => {
							if ((0, t.isInstanceOf)(f, Error)) {
								C(g, p);
								const s = r(u, f),
									l = o.length;
								d(s, `errors[${b}]`, l, p),
									(o = E(r, u, a, f, c, [s, ...o], s, l));
							}
						}),
					o
				);
			}
			function C(r, u) {
				(r.mechanism = r.mechanism || { type: "generic", handled: !0 }),
					(r.mechanism = {
						...r.mechanism,
						...(r.type === "AggregateError" && { is_exception_group: !0 }),
						exception_id: u,
					});
			}
			function d(r, u, a, h) {
				(r.mechanism = r.mechanism || { type: "generic", handled: !0 }),
					(r.mechanism = {
						...r.mechanism,
						type: "chained",
						source: u,
						exception_id: a,
						parent_id: h,
					});
			}
			function m(r, u) {
				return r.map(
					(a) => (a.value && (a.value = (0, i.truncate)(a.value, u)), a),
				);
			}
		}),
		