define(de[1082], he([1, 0, 213, 202]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createLinkedAbortController = w),
				(e.createDeadlineSignal = E),
				(e.getAbortSignalReason = C);
			function w(...d) {
				const m = new AbortController(),
					r = d.filter((a) => a !== void 0).concat(m.signal);
				for (const a of r) {
					if (a.aborted) {
						u.apply(a);
						break;
					}
					a.addEventListener("abort", u);
				}
				function u() {
					m.signal.aborted || m.abort(C(this));
					for (const a of r) a.removeEventListener("abort", u);
				}
				return m;
			}
			function E(d) {
				const m = new AbortController(),
					r = () => {
						m.abort(
							new t.ConnectError(
								"the operation timed out",
								i.Code.DeadlineExceeded,
							),
						);
					};
				let u;
				return (
					d !== void 0 && (d <= 0 ? r() : (u = setTimeout(r, d))),
					{ signal: m.signal, cleanup: () => clearTimeout(u) }
				);
			}
			function C(d) {
				if (!d.aborted) return;
				if (d.reason !== void 0) return d.reason;
				const m = new Error("This operation was aborted");
				return (m.name = "AbortError"), m;
			}
		}),
		define(
			de[634],
			he([1, 0, 213, 202, 1082, 1078]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createHandlerContext = C),
					(e.createMethodImplSpec = d),
					(e.createServiceImplSpec = m);
				function C(r) {
					let u;
					if (r.timeoutMs !== void 0) {
						const c = new Date(Date.now() + r.timeoutMs);
						u = () => c.getTime() - Date.now();
					} else u = () => {};
					const a = (0, w.createDeadlineSignal)(r.timeoutMs),
						h = (0, w.createLinkedAbortController)(
							a.signal,
							r.requestSignal,
							r.shutdownSignal,
						);
					return {
						...r,
						signal: h.signal,
						timeoutMs: u,
						requestHeader: new Headers(r.requestHeader),
						responseHeader: new Headers(r.responseHeader),
						responseTrailer: new Headers(r.responseTrailer),
						abort(c) {
							a.cleanup(), h.abort(c);
						},
						values: r.contextValues ?? (0, E.createContextValues)(),
					};
				}
				function d(r, u, a) {
					return { kind: u.kind, service: r, method: u, impl: a };
				}
				function m(r, u) {
					const a = { service: r, methods: {} };
					for (const [h, c] of Object.entries(r.methods)) {
						let n = u[h];
						if (typeof n == "function") n = n.bind(u);
						else {
							const g = `${r.typeName}.${c.name} is not implemented`;
							n = function () {
								throw new t.ConnectError(g, i.Code.Unimplemented);
							};
						}
						a.methods[h] = d(r, c, n);
					}
					return a;
				}
			},
		),
		define(
			de[2021],
			he([1, 0, 1386, 213, 1082, 1393]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.runUnaryCall = C),
					(e.runStreamingCall = d);
				function C(r) {
					const u = (0, t.applyInterceptors)(r.next, r.interceptors),
						[a, h, c] = m(r),
						n = {
							...r.req,
							message: (0, E.normalize)(r.req.method.I, r.req.message),
							signal: a,
						};
					return u(n).then((g) => (c(), g), h);
				}
				function d(r) {
					const u = (0, t.applyInterceptors)(r.next, r.interceptors),
						[a, h, c] = m(r),
						n = {
							...r.req,
							message: (0, E.normalizeIterable)(r.req.method.I, r.req.message),
							signal: a,
						};
					let g = !1;
					return (
						a.addEventListener("abort", function () {
							const p = r.req.message[Symbol.asyncIterator]();
							g || p.throw?.(this.reason).catch(() => {}),
								p.return?.().catch(() => {});
						}),
						u(n).then(
							(p) => ({
								...p,
								message: {
									[Symbol.asyncIterator]() {
										const o = p.message[Symbol.asyncIterator]();
										return {
											next() {
												return o
													.next()
													.then((f) => (f.done == !0 && ((g = !0), c()), f), h);
											},
										};
									},
								},
							}),
							h,
						)
					);
				}
				function m(r) {
					const { signal: u, cleanup: a } = (0, w.createDeadlineSignal)(
							r.timeoutMs,
						),
						h = (0, w.createLinkedAbortController)(r.signal, u);
					return [
						h.signal,
						function (n) {
							const g = i.ConnectError.from(
								u.aborted ? (0, w.getAbortSignalReason)(u) : n,
							);
							return h.abort(g), a(), Promise.reject(g);
						},
						function () {
							a(), h.abort();
						},
					];
				}
			},
		),
		