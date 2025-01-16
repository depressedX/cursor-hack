define(de[2101], he([1, 0, 80, 1094]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.eventFromEnvelope = w),
				(e.makeMultiplexedTransport = d);
			function w(m, r) {
				let u;
				return (
					(0, t.forEachEnvelopeItem)(
						m,
						(a, h) => (
							r.includes(h) && (u = Array.isArray(a) ? a[1] : void 0), !!u
						),
					),
					u
				);
			}
			function E(m, r) {
				return (u) => {
					const a = m(u);
					return {
						...a,
						send: async (h) => {
							const c = w(h, [
								"event",
								"transaction",
								"profile",
								"replay_event",
							]);
							return c && (c.release = r), a.send(h);
						},
					};
				};
			}
			function C(m, r) {
				return (0, t.createEnvelope)(r ? { ...m[0], dsn: r } : m[0], m[1]);
			}
			function d(m, r) {
				return (u) => {
					const a = m(u),
						h = new Map();
					function c(p, o) {
						const f = o ? `${p}:${o}` : p;
						let b = h.get(f);
						if (!b) {
							const s = (0, t.dsnFromString)(p);
							if (!s) return;
							const l = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(
								s,
								u.tunnel,
							);
							(b = o ? E(m, o)({ ...u, url: l }) : m({ ...u, url: l })),
								h.set(f, b);
						}
						return [p, b];
					}
					async function n(p) {
						function o(l) {
							const y = l && l.length ? l : ["event"];
							return w(p, y);
						}
						const f = r({ envelope: p, getEvent: o })
								.map((l) =>
									typeof l == "string" ? c(l, void 0) : c(l.dsn, l.release),
								)
								.filter((l) => !!l),
							b = f.length ? f : [["", a]];
						return (await Promise.all(b.map(([l, y]) => y.send(C(p, l)))))[0];
					}
					async function g(p) {
						const o = [...h.values(), a];
						return (await Promise.all(o.map((b) => b.flush(p)))).every(
							(b) => b,
						);
					}
					return { send: n, flush: g };
				};
			}
		}),
		