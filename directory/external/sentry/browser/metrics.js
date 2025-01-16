define(de[2137], he([1, 0, 144]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.metrics = void 0);
			function i(m, r = 1, u) {
				t.metrics.increment(t.BrowserMetricsAggregator, m, r, u);
			}
			function w(m, r, u) {
				t.metrics.distribution(t.BrowserMetricsAggregator, m, r, u);
			}
			function E(m, r, u) {
				t.metrics.set(t.BrowserMetricsAggregator, m, r, u);
			}
			function C(m, r, u) {
				t.metrics.gauge(t.BrowserMetricsAggregator, m, r, u);
			}
			function d(m, r, u = "second", a) {
				return t.metrics.timing(t.BrowserMetricsAggregator, m, r, u, a);
			}
			e.metrics = {
				increment: i,
				distribution: w,
				set: E,
				gauge: C,
				timing: d,
			};
		}),
		define(
			de[1103],
			he([1, 0, 144, 80, 452, 386]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MAX_PROFILE_DURATION_MS = void 0),
					(e.enrichWithThreadInformation = f),
					(e.createProfilePayload = s),
					(e.isProfiledTransactionEvent = l),
					(e.isAutomatedPageLoadSpan = y),
					(e.convertJSSelfProfileToSampledFormat = $),
					(e.addProfilesToEnvelope = v),
					(e.findProfiledTransactionsFromEnvelope = S),
					(e.applyDebugMetadata = T),
					(e.isValidSampleRate = P),
					(e.startJSSelfProfile = M),
					(e.shouldProfileSpan = N),
					(e.createProfilingEvent = A),
					(e.getActiveProfilesCount = O),
					(e.takeProfileFromGlobalCache = B),
					(e.addProfileToGlobalCache = U);
				const C = 1e6,
					d = String(0),
					m = "main";
				let r = "",
					u = "",
					a = "",
					h = (E.WINDOW.navigator && E.WINDOW.navigator.userAgent) || "",
					c = "";
				const n =
					(E.WINDOW.navigator && E.WINDOW.navigator.language) ||
					(E.WINDOW.navigator &&
						E.WINDOW.navigator.languages &&
						E.WINDOW.navigator.languages[0]) ||
					"";
				function g(z) {
					return (
						typeof z == "object" && z !== null && "getHighEntropyValues" in z
					);
				}
				const p = E.WINDOW.navigator && E.WINDOW.navigator.userAgentData;
				g(p) &&
					p
						.getHighEntropyValues([
							"architecture",
							"model",
							"platform",
							"platformVersion",
							"fullVersionList",
						])
						.then((z) => {
							if (
								((r = z.platform || ""),
								(a = z.architecture || ""),
								(c = z.model || ""),
								(u = z.platformVersion || ""),
								z.fullVersionList && z.fullVersionList.length > 0)
							) {
								const F = z.fullVersionList[z.fullVersionList.length - 1];
								h = `${F.brand} ${F.version}`;
							}
						})
						.catch((z) => {});
				function o(z) {
					return !("thread_metadata" in z);
				}
				function f(z) {
					return o(z) ? $(z) : z;
				}
				function b(z) {
					const F =
						z && z.contexts && z.contexts.trace && z.contexts.trace.trace_id;
					return (
						typeof F == "string" &&
							F.length !== 32 &&
							w.DEBUG_BUILD &&
							i.logger.log(
								`[Profiling] Invalid traceId: ${F} on profiled event`,
							),
						typeof F != "string" ? "" : F
					);
				}
				function s(z, F, x, H) {
					if (H.type !== "transaction")
						throw new TypeError(
							"Profiling events may only be attached to transactions, this should never occur.",
						);
					if (x == null)
						throw new TypeError(
							`Cannot construct profiling event envelope without a valid profile. Got ${x} instead.`,
						);
					const q = b(H),
						V = f(x),
						G =
							F ||
							(typeof H.start_timestamp == "number"
								? H.start_timestamp * 1e3
								: (0, i.timestampInSeconds)() * 1e3),
						K =
							typeof H.timestamp == "number"
								? H.timestamp * 1e3
								: (0, i.timestampInSeconds)() * 1e3;
					return {
						event_id: z,
						timestamp: new Date(G).toISOString(),
						platform: "javascript",
						version: "1",
						release: H.release || "",
						environment: H.environment || t.DEFAULT_ENVIRONMENT,
						runtime: {
							name: "javascript",
							version: E.WINDOW.navigator.userAgent,
						},
						os: { name: r, version: u, build_number: h },
						device: {
							locale: n,
							model: c,
							manufacturer: h,
							architecture: a,
							is_emulator: !1,
						},
						debug_meta: { images: T(x.resources) },
						profile: V,
						transactions: [
							{
								name: H.transaction || "",
								id: H.event_id || (0, i.uuid4)(),
								trace_id: q,
								active_thread_id: d,
								relative_start_ns: "0",
								relative_end_ns: ((K - G) * 1e6).toFixed(0),
							},
						],
					};
				}
				function l(z) {
					return !!(z.sdkProcessingMetadata && z.sdkProcessingMetadata.profile);
				}
				function y(z) {
					return (0, t.spanToJSON)(z).op === "pageload";
				}
				function $(z) {
					let F,
						x = 0;
					const H = {
							samples: [],
							stacks: [],
							frames: [],
							thread_metadata: { [d]: { name: m } },
						},
						q = z.samples[0];
					if (!q) return H;
					const V = q.timestamp,
						G =
							typeof performance.timeOrigin == "number"
								? performance.timeOrigin
								: i.browserPerformanceTimeOrigin || 0,
						K = G - (i.browserPerformanceTimeOrigin || G);
					return (
						z.samples.forEach((J, W) => {
							if (J.stackId === void 0) {
								F === void 0 && ((F = x), (H.stacks[F] = []), x++),
									(H.samples[W] = {
										elapsed_since_start_ns: ((J.timestamp + K - V) * C).toFixed(
											0,
										),
										stack_id: F,
										thread_id: d,
									});
								return;
							}
							let X = z.stacks[J.stackId];
							const Y = [];
							for (; X; ) {
								Y.push(X.frameId);
								const ne = z.frames[X.frameId];
								ne &&
									H.frames[X.frameId] === void 0 &&
									(H.frames[X.frameId] = {
										function: ne.name,
										abs_path:
											typeof ne.resourceId == "number"
												? z.resources[ne.resourceId]
												: void 0,
										lineno: ne.line,
										colno: ne.column,
									}),
									(X = X.parentId === void 0 ? void 0 : z.stacks[X.parentId]);
							}
							const ie = {
								elapsed_since_start_ns: ((J.timestamp + K - V) * C).toFixed(0),
								stack_id: x,
								thread_id: d,
							};
							(H.stacks[x] = Y), (H.samples[W] = ie), x++;
						}),
						H
					);
				}
				function v(z, F) {
					if (!F.length) return z;
					for (const x of F) z[1].push([{ type: "profile" }, x]);
					return z;
				}
				function S(z) {
					const F = [];
					return (
						(0, i.forEachEnvelopeItem)(z, (x, H) => {
							if (H === "transaction")
								for (let q = 1; q < x.length; q++) {
									const V = x[q];
									V &&
										V.contexts &&
										V.contexts.profile &&
										V.contexts.profile.profile_id &&
										F.push(x[q]);
								}
						}),
						F
					);
				}
				const I = new WeakMap();
				function T(z) {
					const F = i.GLOBAL_OBJ._sentryDebugIds;
					if (!F) return [];
					const x = (0, t.getClient)(),
						H = x && x.getOptions(),
						q = H && H.stackParser;
					if (!q) return [];
					let V;
					const G = I.get(q);
					G ? (V = G) : ((V = new Map()), I.set(q, V));
					const K = Object.keys(F).reduce((W, X) => {
							let Y;
							const ie = V.get(X);
							ie ? (Y = ie) : ((Y = q(X)), V.set(X, Y));
							for (let ne = Y.length - 1; ne >= 0; ne--) {
								const ee = Y[ne],
									_ = ee && ee.filename;
								if (ee && _) {
									W[_] = F[X];
									break;
								}
							}
							return W;
						}, {}),
						J = [];
					for (const W of z)
						W &&
							K[W] &&
							J.push({ type: "sourcemap", code_file: W, debug_id: K[W] });
					return J;
				}
				function P(z) {
					return (typeof z != "number" && typeof z != "boolean") ||
						(typeof z == "number" && isNaN(z))
						? (w.DEBUG_BUILD &&
								i.logger.warn(
									`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(z)} of type ${JSON.stringify(typeof z)}.`,
								),
							!1)
						: z === !0 || z === !1
							? !0
							: z < 0 || z > 1
								? (w.DEBUG_BUILD &&
										i.logger.warn(
											`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${z}.`,
										),
									!1)
								: !0;
				}
				function k(z) {
					return z.samples.length < 2
						? (w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Discarding profile because it contains less than 2 samples",
								),
							!1)
						: z.frames.length
							? !0
							: (w.DEBUG_BUILD &&
									i.logger.log(
										"[Profiling] Discarding profile because it contains no frames",
									),
								!1);
				}
				let L = !1;
				e.MAX_PROFILE_DURATION_MS = 3e4;
				function D(z) {
					return typeof z == "function";
				}
				function M() {
					const z = E.WINDOW.Profiler;
					if (!D(z)) {
						w.DEBUG_BUILD &&
							i.logger.log(
								"[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
							);
						return;
					}
					const F = 10,
						x = Math.floor(e.MAX_PROFILE_DURATION_MS / F);
					try {
						return new z({ sampleInterval: F, maxBufferSize: x });
					} catch {
						w.DEBUG_BUILD &&
							(i.logger.log(
								"[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
							),
							i.logger.log(
								"[Profiling] Disabling profiling for current user session.",
							)),
							(L = !0);
					}
				}
				function N(z) {
					if (L)
						return (
							w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Profiling has been disabled for the duration of the current user session.",
								),
							!1
						);
					if (!z.isRecording())
						return (
							w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Discarding profile because transaction was not sampled.",
								),
							!1
						);
					const F = (0, t.getClient)(),
						x = F && F.getOptions();
					if (!x)
						return (
							w.DEBUG_BUILD &&
								i.logger.log(
									"[Profiling] Profiling disabled, no options found.",
								),
							!1
						);
					const H = x.profilesSampleRate;
					return P(H)
						? H
							? (H === !0 ? !0 : Math.random() < H)
								? !0
								: (w.DEBUG_BUILD &&
										i.logger.log(
											`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(H)})`,
										),
									!1)
							: (w.DEBUG_BUILD &&
									i.logger.log(
										"[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
									),
								!1)
						: (w.DEBUG_BUILD &&
								i.logger.warn(
									"[Profiling] Discarding profile because of invalid sample rate.",
								),
							!1);
				}
				function A(z, F, x, H) {
					return k(x) ? s(z, F, x, H) : null;
				}
				const R = new Map();
				function O() {
					return R.size;
				}
				function B(z) {
					const F = R.get(z);
					return F && R.delete(z), F;
				}
				function U(z, F) {
					if ((R.set(z, F), R.size > 30)) {
						const x = R.keys().next().value;
						R.delete(x);
					}
				}
			},
		),
		define(
			de[2138],
			he([1, 0, 144, 80, 452, 386, 1103]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.startProfileForSpan = d);
				function d(m) {
					let r;
					(0, C.isAutomatedPageLoadSpan)(m) &&
						(r = (0, i.timestampInSeconds)() * 1e3);
					const u = (0, C.startJSSelfProfile)();
					if (!u) return;
					w.DEBUG_BUILD &&
						i.logger.log(
							`[Profiling] started profiling span: ${((0, t.spanToJSON))(m).description}`,
						);
					const a = (0, i.uuid4)(),
						h = null;
					(0, t.getCurrentScope)().setContext("profile", {
						profile_id: a,
						start_timestamp: r,
					});
					async function c() {
						if (m && u) {
							if (h) {
								w.DEBUG_BUILD &&
									i.logger.log(
										"[Profiling] profile for:",
										(0, t.spanToJSON)(m).description,
										"already exists, returning early",
									);
								return;
							}
							return u
								.stop()
								.then((o) => {
									if (
										(n && (E.WINDOW.clearTimeout(n), (n = void 0)),
										w.DEBUG_BUILD &&
											i.logger.log(
												`[Profiling] stopped profiling of span: ${((0, t.spanToJSON))(m).description}`,
											),
										!o)
									) {
										w.DEBUG_BUILD &&
											i.logger.log(
												`[Profiling] profiler returned null profile for: ${((0, t.spanToJSON))(m).description}`,
												"this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
											);
										return;
									}
									(0, C.addProfileToGlobalCache)(a, o);
								})
								.catch((o) => {
									w.DEBUG_BUILD &&
										i.logger.log(
											"[Profiling] error while stopping profiler:",
											o,
										);
								});
						}
					}
					let n = E.WINDOW.setTimeout(() => {
						w.DEBUG_BUILD &&
							i.logger.log(
								"[Profiling] max profile duration elapsed, stopping profiling for:",
								(0, t.spanToJSON)(m).description,
							),
							c();
					}, C.MAX_PROFILE_DURATION_MS);
					const g = m.end.bind(m);
					function p() {
						return m
							? (c().then(
									() => {
										g();
									},
									() => {
										g();
									},
								),
								m)
							: g();
					}
					m.end = p;
				}
			},
		),
		define(
			de[2139],
			he([1, 0, 144, 80, 452, 2138, 1103, 1103]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.browserProfilingIntegration = void 0);
				const m = "BrowserProfiling",
					r = () => ({
						name: m,
						setup(u) {
							const a = (0, t.getActiveSpan)(),
								h = a && (0, t.getRootSpan)(a);
							h &&
								(0, C.isAutomatedPageLoadSpan)(h) &&
								(0, C.shouldProfileSpan)(h) &&
								(0, E.startProfileForSpan)(h),
								u.on("spanStart", (c) => {
									c === (0, t.getRootSpan)(c) &&
										(0, C.shouldProfileSpan)(c) &&
										(0, E.startProfileForSpan)(c);
								}),
								u.on("beforeEnvelope", (c) => {
									if (!(0, d.getActiveProfilesCount)()) return;
									const n = (0, d.findProfiledTransactionsFromEnvelope)(c);
									if (!n.length) return;
									const g = [];
									for (const p of n) {
										const o = p && p.contexts,
											f = o && o.profile && o.profile.profile_id,
											b = o && o.profile && o.profile.start_timestamp;
										if (typeof f != "string") {
											w.DEBUG_BUILD &&
												i.logger.log(
													"[Profiling] cannot find profile for a span without a profile context",
												);
											continue;
										}
										if (!f) {
											w.DEBUG_BUILD &&
												i.logger.log(
													"[Profiling] cannot find profile for a span without a profile context",
												);
											continue;
										}
										o && o.profile && delete o.profile;
										const s = (0, d.takeProfileFromGlobalCache)(f);
										if (!s) {
											w.DEBUG_BUILD &&
												i.logger.log(
													`[Profiling] Could not retrieve profile for span: ${f}`,
												);
											continue;
										}
										const l = (0, d.createProfilingEvent)(f, b, s, p);
										l && g.push(l);
									}
									(0, d.addProfilesToEnvelope)(c, g);
								});
						},
					});
				e.browserProfilingIntegration = (0, t.defineIntegration)(r);
			},
		),
		define(
			de[2140],
			he([1, 0, 144, 144, 80, 452, 386]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.registerBackgroundTabDetection = d);
				function d() {
					C.WINDOW && C.WINDOW.document
						? C.WINDOW.document.addEventListener("visibilitychange", () => {
								const m = (0, t.getActiveSpan)();
								if (!m) return;
								const r = (0, t.getRootSpan)(m);
								if (C.WINDOW.document.hidden && r) {
									const u = "cancelled",
										{ op: a, status: h } = (0, i.spanToJSON)(r);
									E.DEBUG_BUILD &&
										w.logger.log(
											`[Tracing] Transaction: ${u} -> since tab moved to the background, op: ${a}`,
										),
										h || r.setStatus({ code: t.SPAN_STATUS_ERROR, message: u }),
										r.setAttribute(
											"sentry.cancellation_reason",
											"document.hidden",
										),
										r.end();
								}
							})
						: E.DEBUG_BUILD &&
							w.logger.warn(
								"[Tracing] Could not set up background tab detection due to lack of global document",
							);
				}
			},
		),
		define(
			de[1459],
			he([1, 0, 641, 144, 80, 386]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.defaultRequestInstrumentationOptions = void 0),
					(e.instrumentOutgoingRequests = m),
					(e.extractNetworkProtocol = a),
					(e.shouldAttachHeaders = n),
					(e.xhrCallback = g);
				const C = new WeakMap(),
					d = new Map();
				e.defaultRequestInstrumentationOptions = {
					traceFetch: !0,
					traceXHR: !0,
					enableHTTPTimings: !0,
					trackFetchStreamPerformance: !1,
				};
				function m(b, s) {
					const {
							traceFetch: l,
							traceXHR: y,
							trackFetchStreamPerformance: $,
							shouldCreateSpanForRequest: v,
							enableHTTPTimings: S,
							tracePropagationTargets: I,
						} = {
							traceFetch: e.defaultRequestInstrumentationOptions.traceFetch,
							traceXHR: e.defaultRequestInstrumentationOptions.traceXHR,
							trackFetchStreamPerformance:
								e.defaultRequestInstrumentationOptions
									.trackFetchStreamPerformance,
							...s,
						},
						T = typeof v == "function" ? v : (L) => !0,
						P = (L) => n(L, I),
						k = {};
					l &&
						(b.addEventProcessor(
							(L) => (
								L.type === "transaction" &&
									L.spans &&
									L.spans.forEach((D) => {
										if (D.op === "http.client") {
											const M = d.get(D.span_id);
											M && ((D.timestamp = M / 1e3), d.delete(D.span_id));
										}
									}),
								L
							),
						),
						$ &&
							(0, w.addFetchEndInstrumentationHandler)((L) => {
								if (L.response) {
									const D = C.get(L.response);
									D && L.endTimestamp && d.set(D, L.endTimestamp);
								}
							}),
						(0, w.addFetchInstrumentationHandler)((L) => {
							const D = (0, i.instrumentFetchRequest)(L, T, P, k);
							if (
								(L.response &&
									L.fetchData.__span &&
									C.set(L.response, L.fetchData.__span),
								D)
							) {
								const M = f(L.fetchData.url),
									N = M ? (0, w.parseUrl)(M).host : void 0;
								D.setAttributes({ "http.url": M, "server.address": N });
							}
							S && D && u(D);
						})),
						y &&
							(0, t.addXhrInstrumentationHandler)((L) => {
								const D = g(L, T, P, k);
								S && D && u(D);
							});
				}
				function r(b) {
					return (
						b.entryType === "resource" &&
						"initiatorType" in b &&
						typeof b.nextHopProtocol == "string" &&
						(b.initiatorType === "fetch" ||
							b.initiatorType === "xmlhttprequest")
					);
				}
				function u(b) {
					const { url: s } = (0, i.spanToJSON)(b).data || {};
					if (!s || typeof s != "string") return;
					const l = (0, t.addPerformanceInstrumentationHandler)(
						"resource",
						({ entries: y }) => {
							y.forEach(($) => {
								r($) &&
									$.name.endsWith(s) &&
									(c($).forEach((S) => b.setAttribute(...S)), setTimeout(l));
							});
						},
					);
				}
				function a(b) {
					let s = "unknown",
						l = "unknown",
						y = "";
					for (const $ of b) {
						if ($ === "/") {
							[s, l] = b.split("/");
							break;
						}
						if (!isNaN(Number($))) {
							(s = y === "h" ? "http" : y), (l = b.split(y)[1]);
							break;
						}
						y += $;
					}
					return y === b && (s = y), { name: s, version: l };
				}
				function h(b = 0) {
					return (
						((w.browserPerformanceTimeOrigin || performance.timeOrigin) + b) /
						1e3
					);
				}
				function c(b) {
					const { name: s, version: l } = a(b.nextHopProtocol),
						y = [];
					return (
						y.push(
							["network.protocol.version", l],
							["network.protocol.name", s],
						),
						w.browserPerformanceTimeOrigin
							? [
									...y,
									["http.request.redirect_start", h(b.redirectStart)],
									["http.request.fetch_start", h(b.fetchStart)],
									["http.request.domain_lookup_start", h(b.domainLookupStart)],
									["http.request.domain_lookup_end", h(b.domainLookupEnd)],
									["http.request.connect_start", h(b.connectStart)],
									[
										"http.request.secure_connection_start",
										h(b.secureConnectionStart),
									],
									["http.request.connection_end", h(b.connectEnd)],
									["http.request.request_start", h(b.requestStart)],
									["http.request.response_start", h(b.responseStart)],
									["http.request.response_end", h(b.responseEnd)],
								]
							: y
					);
				}
				function n(b, s) {
					const l = E.WINDOW.location && E.WINDOW.location.href;
					if (l) {
						let y, $;
						try {
							(y = new URL(b, l)), ($ = new URL(l).origin);
						} catch {
							return !1;
						}
						const v = y.origin === $;
						return s
							? (0, w.stringMatchesSomePattern)(y.toString(), s) ||
									(v && (0, w.stringMatchesSomePattern)(y.pathname, s))
							: v;
					} else {
						const y = !!b.match(/^\/(?!\/)/);
						return s ? (0, w.stringMatchesSomePattern)(b, s) : y;
					}
				}
				function g(b, s, l, y) {
					const $ = b.xhr,
						v = $ && $[t.SENTRY_XHR_DATA_KEY];
					if (!$ || $.__sentry_own_request__ || !v) return;
					const S = (0, i.hasTracingEnabled)() && s(v.url);
					if (b.endTimestamp && S) {
						const D = $.__sentry_xhr_span_id__;
						if (!D) return;
						const M = y[D];
						M &&
							v.status_code !== void 0 &&
							((0, i.setHttpStatus)(M, v.status_code), M.end(), delete y[D]);
						return;
					}
					const I = f(v.url),
						T = I ? (0, w.parseUrl)(I).host : void 0,
						P = !!(0, i.getActiveSpan)(),
						k =
							S && P
								? (0, i.startInactiveSpan)({
										name: `${v.method} ${v.url}`,
										attributes: {
											type: "xhr",
											"http.method": v.method,
											"http.url": I,
											url: v.url,
											"server.address": T,
											[i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser",
											[i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
										},
									})
								: new i.SentryNonRecordingSpan();
					($.__sentry_xhr_span_id__ = k.spanContext().spanId),
						(y[$.__sentry_xhr_span_id__] = k);
					const L = (0, i.getClient)();
					return (
						$.setRequestHeader &&
							l(v.url) &&
							L &&
							p($, L, (0, i.hasTracingEnabled)() && P ? k : void 0),
						k
					);
				}
				function p(b, s, l) {
					const y = (0, i.getCurrentScope)(),
						$ = (0, i.getIsolationScope)(),
						{
							traceId: v,
							spanId: S,
							sampled: I,
							dsc: T,
						} = { ...$.getPropagationContext(), ...y.getPropagationContext() },
						P =
							l && (0, i.hasTracingEnabled)()
								? (0, i.spanToTraceHeader)(l)
								: (0, w.generateSentryTraceHeader)(v, S, I),
						k = (0, w.dynamicSamplingContextToSentryBaggageHeader)(
							T ||
								(l
									? (0, i.getDynamicSamplingContextFromSpan)(l)
									: (0, i.getDynamicSamplingContextFromClient)(v, s)),
						);
					o(b, P, k);
				}
				function o(b, s, l) {
					try {
						b.setRequestHeader("sentry-trace", s),
							l && b.setRequestHeader(w.BAGGAGE_HEADER_NAME, l);
					} catch {}
				}
				function f(b) {
					try {
						return new URL(b, E.WINDOW.location.origin).href;
					} catch {
						return;
					}
				}
			},
		),
		define(
			de[2141],
			he([1, 0, 641, 144, 80, 452, 386, 2140, 1459]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.browserTracingIntegration = e.BROWSER_TRACING_INTEGRATION_ID =
						void 0),
					(e.startBrowserTracingPageLoadSpan = u),
					(e.startBrowserTracingNavigationSpan = a),
					(e.getMetaContent = h),
					(e.BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing");
				const r = {
					...i.TRACING_DEFAULTS,
					instrumentNavigation: !0,
					instrumentPageLoad: !0,
					markBackgroundSpan: !0,
					enableLongTask: !0,
					enableLongAnimationFrame: !0,
					enableInp: !0,
					_experiments: {},
					...m.defaultRequestInstrumentationOptions,
				};
				e.browserTracingIntegration = (n = {}) => {
					(0, i.registerSpanErrorInstrumentation)();
					const {
							enableInp: g,
							enableLongTask: p,
							enableLongAnimationFrame: o,
							_experiments: {
								enableInteractions: f,
								enableStandaloneClsSpans: b,
							},
							beforeStartSpan: s,
							idleTimeout: l,
							finalTimeout: y,
							childSpanTimeout: $,
							markBackgroundSpan: v,
							traceFetch: S,
							traceXHR: I,
							trackFetchStreamPerformance: T,
							shouldCreateSpanForRequest: P,
							enableHTTPTimings: k,
							instrumentPageLoad: L,
							instrumentNavigation: D,
						} = { ...r, ...n },
						M = (0, t.startTrackingWebVitals)({
							recordClsStandaloneSpans: b || !1,
						});
					g && (0, t.startTrackingINP)(),
						o &&
						w.GLOBAL_OBJ.PerformanceObserver &&
						PerformanceObserver.supportedEntryTypes &&
						PerformanceObserver.supportedEntryTypes.includes(
							"long-animation-frame",
						)
							? (0, t.startTrackingLongAnimationFrames)()
							: p && (0, t.startTrackingLongTasks)(),
						f && (0, t.startTrackingInteractions)();
					const N = { name: void 0, source: void 0 };
					function A(R, O) {
						const B = O.op === "pageload",
							U = s ? s(O) : O,
							z = U.attributes || {};
						O.name !== U.name &&
							((z[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom"),
							(U.attributes = z)),
							(N.name = U.name),
							(N.source = z[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]);
						const F = (0, i.startIdleSpan)(U, {
							idleTimeout: l,
							finalTimeout: y,
							childSpanTimeout: $,
							disableAutoFinish: B,
							beforeSpanEnd: (H) => {
								M(),
									(0, t.addPerformanceEntries)(H, {
										recordClsOnPageloadSpan: !b,
									});
							},
						});
						function x() {
							["interactive", "complete"].includes(
								C.WINDOW.document.readyState,
							) && R.emit("idleSpanEnableAutoFinish", F);
						}
						return (
							B &&
								C.WINDOW.document &&
								(C.WINDOW.document.addEventListener("readystatechange", () => {
									x();
								}),
								x()),
							F
						);
					}
					return {
						name: e.BROWSER_TRACING_INTEGRATION_ID,
						afterAllSetup(R) {
							let O,
								B = C.WINDOW.location && C.WINDOW.location.href;
							R.on("startNavigationSpan", (U) => {
								(0, i.getClient)() === R &&
									(O &&
										!(0, i.spanToJSON)(O).timestamp &&
										(E.DEBUG_BUILD &&
											w.logger.log(
												`[Tracing] Finishing current root span with op: ${((0, i.spanToJSON))(O).op}`,
											),
										O.end()),
									(O = A(R, { op: "navigation", ...U })));
							}),
								R.on("startPageLoadSpan", (U, z = {}) => {
									if ((0, i.getClient)() !== R) return;
									O &&
										!(0, i.spanToJSON)(O).timestamp &&
										(E.DEBUG_BUILD &&
											w.logger.log(
												`[Tracing] Finishing current root span with op: ${((0, i.spanToJSON))(O).op}`,
											),
										O.end());
									const F = z.sentryTrace || h("sentry-trace"),
										x = z.baggage || h("baggage"),
										H = (0, w.propagationContextFromHeaders)(F, x);
									(0, i.getCurrentScope)().setPropagationContext(H),
										(O = A(R, { op: "pageload", ...U }));
								}),
								R.on("spanEnd", (U) => {
									const z = (0, i.spanToJSON)(U).op;
									if (
										U !== (0, i.getRootSpan)(U) ||
										(z !== "navigation" && z !== "pageload")
									)
										return;
									const F = (0, i.getCurrentScope)(),
										x = F.getPropagationContext();
									F.setPropagationContext({
										...x,
										sampled:
											x.sampled !== void 0
												? x.sampled
												: (0, i.spanIsSampled)(U),
										dsc: x.dsc || (0, i.getDynamicSamplingContextFromSpan)(U),
									});
								}),
								C.WINDOW.location &&
									(L &&
										u(R, {
											name: C.WINDOW.location.pathname,
											startTime: w.browserPerformanceTimeOrigin
												? w.browserPerformanceTimeOrigin / 1e3
												: void 0,
											attributes: {
												[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
												[i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
													"auto.pageload.browser",
											},
										}),
									D &&
										(0, t.addHistoryInstrumentationHandler)(
											({ to: U, from: z }) => {
												if (z === void 0 && B && B.indexOf(U) !== -1) {
													B = void 0;
													return;
												}
												z !== U &&
													((B = void 0),
													a(R, {
														name: C.WINDOW.location.pathname,
														attributes: {
															[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
															[i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
																"auto.navigation.browser",
														},
													}));
											},
										)),
								v && (0, d.registerBackgroundTabDetection)(),
								f && c(l, y, $, N),
								g && (0, t.registerInpInteractionListener)(),
								(0, m.instrumentOutgoingRequests)(R, {
									traceFetch: S,
									traceXHR: I,
									trackFetchStreamPerformance: T,
									tracePropagationTargets:
										R.getOptions().tracePropagationTargets,
									shouldCreateSpanForRequest: P,
									enableHTTPTimings: k,
								});
						},
					};
				};
				function u(n, g, p) {
					n.emit("startPageLoadSpan", g, p),
						(0, i.getCurrentScope)().setTransactionName(g.name);
					const o = (0, i.getActiveSpan)();
					return (o && (0, i.spanToJSON)(o).op) === "pageload" ? o : void 0;
				}
				function a(n, g) {
					(0, i.getIsolationScope)().setPropagationContext(
						(0, w.generatePropagationContext)(),
					),
						(0, i.getCurrentScope)().setPropagationContext(
							(0, w.generatePropagationContext)(),
						),
						n.emit("startNavigationSpan", g),
						(0, i.getCurrentScope)().setTransactionName(g.name);
					const p = (0, i.getActiveSpan)();
					return (p && (0, i.spanToJSON)(p).op) === "navigation" ? p : void 0;
				}
				function h(n) {
					const g = (0, w.getDomElement)(`meta[name=${n}]`);
					return g ? g.getAttribute("content") : void 0;
				}
				function c(n, g, p, o) {
					let f;
					const b = () => {
						const s = "ui.action.click",
							l = (0, i.getActiveSpan)(),
							y = l && (0, i.getRootSpan)(l);
						if (y) {
							const $ = (0, i.spanToJSON)(y).op;
							if (["navigation", "pageload"].includes($)) {
								E.DEBUG_BUILD &&
									w.logger.warn(
										`[Tracing] Did not create ${s} span because a pageload or navigation span is in progress.`,
									);
								return;
							}
						}
						if (
							(f &&
								(f.setAttribute(
									i.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
									"interactionInterrupted",
								),
								f.end(),
								(f = void 0)),
							!o.name)
						) {
							E.DEBUG_BUILD &&
								w.logger.warn(
									`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`,
								);
							return;
						}
						f = (0, i.startIdleSpan)(
							{
								name: o.name,
								op: s,
								attributes: {
									[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: o.source || "url",
								},
							},
							{ idleTimeout: n, finalTimeout: g, childSpanTimeout: p },
						);
					};
					C.WINDOW.document &&
						addEventListener("click", b, { once: !1, capture: !0 });
				}
			},
		),
		