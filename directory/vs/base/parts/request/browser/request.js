define(de[2228], he([1, 0, 76, 29, 1134]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Erb = E);
			async function E(m, r) {
				if (r.isCancellationRequested) throw (0, i.$0)();
				const u = new AbortController(),
					a = r.onCancellationRequested(() => u.abort()),
					h = m.timeout
						? AbortSignal.any([u.signal, AbortSignal.timeout(m.timeout)])
						: u.signal;
				try {
					const c = await fetch(m.url || "", {
						method: m.type || "GET",
						headers: C(m),
						body: m.data,
						signal: h,
					});
					return {
						res: { statusCode: c.status, headers: d(c) },
						stream: (0, t.$8e)(
							t.$Te.wrap(new Uint8Array(await c.arrayBuffer())),
						),
					};
				} catch (c) {
					throw navigator.onLine
						? c?.name === "AbortError"
							? (0, i.$0)()
							: c?.name === "TimeoutError"
								? new Error(`Fetch timeout: ${m.timeout}ms`)
								: c
						: new w.$qp();
				} finally {
					a.dispose();
				}
			}
			function C(m) {
				if (m.headers || m.user || m.password || m.proxyAuthorization) {
					const r = new Headers();
					e: for (const u in m.headers) {
						switch (u.toLowerCase()) {
							case "user-agent":
							case "accept-encoding":
							case "content-length":
								continue e;
						}
						const a = m.headers[u];
						if (typeof a == "string") r.set(u, a);
						else if (Array.isArray(a)) for (const h of a) r.append(u, h);
					}
					return (
						(m.user || m.password) &&
							r.set(
								"Authorization",
								"Basic " + btoa(`${m.user || ""}:${m.password || ""}`),
							),
						m.proxyAuthorization &&
							r.set("Proxy-Authorization", m.proxyAuthorization),
						r
					);
				}
			}
			function d(m) {
				const r = Object.create(null);
				return (
					m.headers.forEach((u, a) => {
						r[a]
							? Array.isArray(r[a])
								? r[a].push(u)
								: (r[a] = [r[a], u])
							: (r[a] = u);
					}),
					r
				);
			}
		}),
		