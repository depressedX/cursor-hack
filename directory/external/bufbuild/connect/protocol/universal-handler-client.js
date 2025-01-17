import '../../../../require.js';
import '../../../../exports.js';
import '../code.js';
import '../connect-error.js';
import './async-iterable.js';
import './signals.js';
define(
			de[2026],
			he([1, 0, 202, 213, 575, 1082]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createUniversalHandlerClient = C);
				function C(m) {
					const r = new Map();
					for (const u of m) r.set(u.requestPath, u);
					return async (u) => {
						const a = new URL(u.url).pathname,
							h = r.get(a);
						if (!h)
							throw new i.ConnectError(
								`RouterHttpClient: no handler registered for ${a}`,
								t.Code.Unimplemented,
							);
						const c = u.signal ?? new AbortController().signal,
							n = await d(
								c,
								h({
									body: u.body ?? (0, w.createAsyncIterable)([]),
									httpVersion: "2.0",
									method: u.method,
									url: u.url,
									header: u.header,
									signal: c,
								}),
							),
							g = n.body ?? (0, w.createAsyncIterable)([]);
						return {
							body: (0, w.pipe)(g, (p) => ({
								[Symbol.asyncIterator]() {
									const o = p[Symbol.asyncIterator](),
										f = {
											next() {
												return d(c, o.next());
											},
										};
									return (
										o.throw !== void 0 && (f.throw = (b) => o.throw(b)),
										o.return !== void 0 && (f.return = (b) => o.return(b)),
										f
									);
								},
							})),
							header: new Headers(n.header),
							status: n.status,
							trailer: new Headers(n.trailer),
						};
					};
				}
				function d(m, r) {
					let u;
					const a = new Promise((h, c) => {
						const n = () => c((0, E.getAbortSignalReason)(m));
						if (m.aborted) return n();
						m.addEventListener("abort", n),
							(u = () => m.removeEventListener("abort", n));
					});
					return Promise.race([a, r]).finally(u);
				}
			},
		),
		