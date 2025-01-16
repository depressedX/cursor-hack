define(de[2086], he([1, 0, 365]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.supportsHistory = w);
			const i = t.GLOBAL_OBJ;
			function w() {
				const E = i.chrome,
					C = E && E.app && E.app.runtime,
					d =
						"history" in i && !!i.history.pushState && !!i.history.replaceState;
				return !C && d;
			}
		}),
		define(
			de[1433],
			he([1, 0, 577, 527, 365, 2086]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.supportsHistory = void 0),
					(e.supportsErrorEvent = d),
					(e.supportsDOMError = m),
					(e.supportsDOMException = r),
					(e.supportsFetch = u),
					(e.isNativeFunction = a),
					(e.supportsNativeFetch = h),
					(e.supportsReportingObserver = c),
					(e.supportsReferrerPolicy = n);
				const C = w.GLOBAL_OBJ;
				Object.defineProperty(e, "supportsHistory", {
					enumerable: !0,
					get: function () {
						return E.supportsHistory;
					},
				});
				function d() {
					try {
						return new ErrorEvent(""), !0;
					} catch {
						return !1;
					}
				}
				function m() {
					try {
						return new DOMError(""), !0;
					} catch {
						return !1;
					}
				}
				function r() {
					try {
						return new DOMException(""), !0;
					} catch {
						return !1;
					}
				}
				function u() {
					if (!("fetch" in C)) return !1;
					try {
						return (
							new Headers(),
							new Request("http://www.example.com"),
							new Response(),
							!0
						);
					} catch {
						return !1;
					}
				}
				function a(g) {
					return (
						g &&
						/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(
							g.toString(),
						)
					);
				}
				function h() {
					if (typeof EdgeRuntime == "string") return !0;
					if (!u()) return !1;
					if (a(C.fetch)) return !0;
					let g = !1;
					const p = C.document;
					if (p && typeof p.createElement == "function")
						try {
							const o = p.createElement("iframe");
							(o.hidden = !0),
								p.head.appendChild(o),
								o.contentWindow &&
									o.contentWindow.fetch &&
									(g = a(o.contentWindow.fetch)),
								p.head.removeChild(o);
						} catch (o) {
							t.DEBUG_BUILD &&
								i.logger.warn(
									"Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
									o,
								);
						}
					return g;
				}
				function c() {
					return "ReportingObserver" in C;
				}
				function n() {
					if (!u()) return !1;
					try {
						return new Request("_", { referrerPolicy: "origin" }), !0;
					} catch {
						return !1;
					}
				}
			},
		),
		define(
			de[2087],
			he([1, 0, 430, 528, 1433, 1093, 365, 726]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.addFetchInstrumentationHandler = m),
					(e.addFetchEndInstrumentationHandler = r),
					(e.parseFetchArgs = g);
				function m(p, o) {
					const f = "fetch";
					(0, d.addHandler)(f, p),
						(0, d.maybeInstrument)(f, () => u(void 0, o));
				}
				function r(p) {
					const o = "fetch-body-resolved";
					(0, d.addHandler)(o, p), (0, d.maybeInstrument)(o, () => u(h));
				}
				function u(p, o = !1) {
					(o && !(0, w.supportsNativeFetch)()) ||
						(0, i.fill)(C.GLOBAL_OBJ, "fetch", function (f) {
							return function (...b) {
								const { method: s, url: l } = g(b),
									y = {
										args: b,
										fetchData: { method: s, url: l },
										startTimestamp: (0, E.timestampInSeconds)() * 1e3,
									};
								p || (0, d.triggerHandlers)("fetch", { ...y });
								const $ = new Error().stack;
								return f.apply(C.GLOBAL_OBJ, b).then(
									async (v) => (
										p
											? p(v)
											: (0, d.triggerHandlers)("fetch", {
													...y,
													endTimestamp: (0, E.timestampInSeconds)() * 1e3,
													response: v,
												}),
										v
									),
									(v) => {
										throw (
											((0, d.triggerHandlers)("fetch", {
												...y,
												endTimestamp: (0, E.timestampInSeconds)() * 1e3,
												error: v,
											}),
											(0, t.isError)(v) &&
												v.stack === void 0 &&
												((v.stack = $),
												(0, i.addNonEnumerableProperty)(v, "framesToPop", 1)),
											v)
										);
									},
								);
							};
						});
				}
				async function a(p, o) {
					if (p && p.body) {
						const f = p.body,
							b = f.getReader(),
							s = setTimeout(() => {
								f.cancel().then(null, () => {});
							}, 90 * 1e3);
						let l = !0;
						for (; l; ) {
							let y;
							try {
								y = setTimeout(() => {
									f.cancel().then(null, () => {});
								}, 5e3);
								const { done: $ } = await b.read();
								clearTimeout(y), $ && (o(), (l = !1));
							} catch {
								l = !1;
							} finally {
								clearTimeout(y);
							}
						}
						clearTimeout(s), b.releaseLock(), f.cancel().then(null, () => {});
					}
				}
				function h(p) {
					let o;
					try {
						o = p.clone();
					} catch {
						return;
					}
					a(o, () => {
						(0, d.triggerHandlers)("fetch-body-resolved", {
							endTimestamp: (0, E.timestampInSeconds)() * 1e3,
							response: p,
						});
					});
				}
				function c(p, o) {
					return !!p && typeof p == "object" && !!p[o];
				}
				function n(p) {
					return typeof p == "string"
						? p
						: p
							? c(p, "url")
								? p.url
								: p.toString
									? p.toString()
									: ""
							: "";
				}
				function g(p) {
					if (p.length === 0) return { method: "GET", url: "" };
					if (p.length === 2) {
						const [f, b] = p;
						return {
							url: n(f),
							method: c(b, "method") ? String(b.method).toUpperCase() : "GET",
						};
					}
					const o = p[0];
					return {
						url: n(o),
						method: c(o, "method") ? String(o.method).toUpperCase() : "GET",
					};
				}
			},
		),
		define(
			de[2088],
			he([1, 0, 2080, 2087, 2077, 2078, 726]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.addFetchEndInstrumentationHandler =
						e.resetInstrumentationHandlers =
						e.triggerHandlers =
						e.maybeInstrument =
						e.addHandler =
						e.addGlobalUnhandledRejectionInstrumentationHandler =
						e.addGlobalErrorInstrumentationHandler =
						e.addFetchInstrumentationHandler =
						e.addConsoleInstrumentationHandler =
							void 0),
					Object.defineProperty(e, "addConsoleInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return t.addConsoleInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addFetchEndInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return i.addFetchEndInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addFetchInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return i.addFetchInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addGlobalErrorInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return w.addGlobalErrorInstrumentationHandler;
						},
					}),
					Object.defineProperty(
						e,
						"addGlobalUnhandledRejectionInstrumentationHandler",
						{
							enumerable: !0,
							get: function () {
								return E.addGlobalUnhandledRejectionInstrumentationHandler;
							},
						},
					),
					Object.defineProperty(e, "addHandler", {
						enumerable: !0,
						get: function () {
							return C.addHandler;
						},
					}),
					Object.defineProperty(e, "maybeInstrument", {
						enumerable: !0,
						get: function () {
							return C.maybeInstrument;
						},
					}),
					Object.defineProperty(e, "resetInstrumentationHandlers", {
						enumerable: !0,
						get: function () {
							return C.resetInstrumentationHandlers;
						},
					}),
					Object.defineProperty(e, "triggerHandlers", {
						enumerable: !0,
						get: function () {
							return C.triggerHandlers;
						},
					});
			},
		),
		