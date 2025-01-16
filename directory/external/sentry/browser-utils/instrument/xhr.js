define(de[2093], he([1, 0, 80, 366]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SENTRY_XHR_DATA_KEY = void 0),
				(e.addXhrInstrumentationHandler = w),
				(e.instrumentXHR = E),
				(e.SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__");
			function w(d) {
				const m = "xhr";
				(0, t.addHandler)(m, d), (0, t.maybeInstrument)(m, E);
			}
			function E() {
				if (!i.WINDOW.XMLHttpRequest) return;
				const d = XMLHttpRequest.prototype;
				(d.open = new Proxy(d.open, {
					apply(m, r, u) {
						const a = (0, t.timestampInSeconds)() * 1e3,
							h = (0, t.isString)(u[0]) ? u[0].toUpperCase() : void 0,
							c = C(u[1]);
						if (!h || !c) return m.apply(r, u);
						(r[e.SENTRY_XHR_DATA_KEY] = {
							method: h,
							url: c,
							request_headers: {},
						}),
							h === "POST" &&
								c.match(/sentry_key/) &&
								(r.__sentry_own_request__ = !0);
						const n = () => {
							const g = r[e.SENTRY_XHR_DATA_KEY];
							if (g && r.readyState === 4) {
								try {
									g.status_code = r.status;
								} catch {}
								const p = {
									endTimestamp: (0, t.timestampInSeconds)() * 1e3,
									startTimestamp: a,
									xhr: r,
								};
								(0, t.triggerHandlers)("xhr", p);
							}
						};
						return (
							"onreadystatechange" in r &&
							typeof r.onreadystatechange == "function"
								? (r.onreadystatechange = new Proxy(r.onreadystatechange, {
										apply(g, p, o) {
											return n(), g.apply(p, o);
										},
									}))
								: r.addEventListener("readystatechange", n),
							(r.setRequestHeader = new Proxy(r.setRequestHeader, {
								apply(g, p, o) {
									const [f, b] = o,
										s = p[e.SENTRY_XHR_DATA_KEY];
									return (
										s &&
											(0, t.isString)(f) &&
											(0, t.isString)(b) &&
											(s.request_headers[f.toLowerCase()] = b),
										g.apply(p, o)
									);
								},
							})),
							m.apply(r, u)
						);
					},
				})),
					(d.send = new Proxy(d.send, {
						apply(m, r, u) {
							const a = r[e.SENTRY_XHR_DATA_KEY];
							if (!a) return m.apply(r, u);
							u[0] !== void 0 && (a.body = u[0]);
							const h = {
								startTimestamp: (0, t.timestampInSeconds)() * 1e3,
								xhr: r,
							};
							return (0, t.triggerHandlers)("xhr", h), m.apply(r, u);
						},
					}));
			}
			function C(d) {
				if ((0, t.isString)(d)) return d;
				try {
					return d.toString();
				} catch {}
			}
		}),
		