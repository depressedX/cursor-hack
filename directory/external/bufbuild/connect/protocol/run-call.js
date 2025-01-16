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
		