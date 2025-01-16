define(de[1102], he([1, 0, 144, 366]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isMeasurementValue = w),
				(e.startAndEndSpan = E),
				(e.startStandaloneWebVitalSpan = C),
				(e.getBrowserPerformanceAPI = d),
				(e.msToSec = m);
			function w(r) {
				return typeof r == "number" && isFinite(r);
			}
			function E(r, u, a, { ...h }) {
				const c = (0, t.spanToJSON)(r).start_timestamp;
				return (
					c &&
						c > u &&
						typeof r.updateStartTime == "function" &&
						r.updateStartTime(u),
					(0, t.withActiveSpan)(r, () => {
						const n = (0, t.startInactiveSpan)({ startTime: u, ...h });
						return n && n.end(a), n;
					})
				);
			}
			function C(r) {
				const u = (0, t.getClient)();
				if (!u) return;
				const { name: a, transaction: h, attributes: c, startTime: n } = r,
					{ release: g, environment: p } = u.getOptions(),
					o = u.getIntegrationByName("Replay"),
					f = o && o.getReplayId(),
					b = (0, t.getCurrentScope)(),
					s = b.getUser(),
					l = s !== void 0 ? s.email || s.id || s.ip_address : void 0;
				let y;
				try {
					y = b.getScopeData().contexts.profile.profile_id;
				} catch {}
				const $ = {
					release: g,
					environment: p,
					user: l || void 0,
					profile_id: y || void 0,
					replay_id: f || void 0,
					transaction: h,
					"user_agent.original":
						i.WINDOW.navigator && i.WINDOW.navigator.userAgent,
					...c,
				};
				return (0, t.startInactiveSpan)({
					name: a,
					attributes: $,
					startTime: n,
					experimental: { standalone: !0 },
				});
			}
			function d() {
				return i.WINDOW && i.WINDOW.addEventListener && i.WINDOW.performance;
			}
			function m(r) {
				return r / 1e3;
			}
		}),
		define(
			de[2131],
			he([1, 0, 144, 80, 878, 885, 1102, 729]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.trackClsAsStandaloneSpan = m);
				function m() {
					let a = 0,
						h,
						c;
					if (!u()) return;
					let n = !1;
					function g() {
						n || ((n = !0), c && r(a, h, c), p());
					}
					const p = (0, E.addClsInstrumentationHandler)(({ metric: o }) => {
						const f = o.entries[o.entries.length - 1];
						f && ((a = o.value), (h = f));
					}, !0);
					(0, d.onHidden)(() => {
						g();
					}),
						setTimeout(() => {
							const f = (0, t.getClient)()?.on("startNavigationSpan", () => {
									g(), f && f();
								}),
								b = (0, t.getActiveSpan)(),
								s = b && (0, t.getRootSpan)(b),
								l = s && (0, t.spanToJSON)(s);
							l && l.op === "pageload" && (c = s.spanContext().spanId);
						}, 0);
				}
				function r(a, h, c) {
					w.DEBUG_BUILD && i.logger.log(`Sending CLS span (${a})`);
					const n = (0, C.msToSec)(
							(i.browserPerformanceTimeOrigin || 0) + (h?.startTime || 0),
						),
						g = (0, t.getCurrentScope)().getScopeData().transactionName,
						p = h
							? (0, i.htmlTreeAsString)(h.sources[0]?.node)
							: "Layout shift",
						o = (0, i.dropUndefinedKeys)({
							[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls",
							[t.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls",
							[t.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: h?.duration || 0,
							"sentry.pageload.span_id": c,
						}),
						f = (0, C.startStandaloneWebVitalSpan)({
							name: p,
							transaction: g,
							attributes: o,
							startTime: n,
						});
					f?.addEvent("cls", {
						[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "",
						[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: a,
					}),
						f?.end(n);
				}
				function u() {
					try {
						return PerformanceObserver.supportedEntryTypes?.includes(
							"layout-shift",
						);
					} catch {
						return !1;
					}
				}
			},
		),
		define(
			de[2132],
			he([1, 0, 144, 80, 885, 1102]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.startTrackingINP = m),
					(e.registerInpInteractionListener = a);
				const C = [],
					d = new Map();
				function m() {
					if (
						(0, E.getBrowserPerformanceAPI)() &&
						i.browserPerformanceTimeOrigin
					) {
						const c = u();
						return () => {
							c();
						};
					}
					return () => {};
				}
				const r = {
					click: "click",
					pointerdown: "click",
					pointerup: "click",
					mousedown: "click",
					mouseup: "click",
					touchstart: "click",
					touchend: "click",
					mouseover: "hover",
					mouseout: "hover",
					mouseenter: "hover",
					mouseleave: "hover",
					pointerover: "hover",
					pointerout: "hover",
					pointerenter: "hover",
					pointerleave: "hover",
					dragstart: "drag",
					dragend: "drag",
					drag: "drag",
					dragenter: "drag",
					dragleave: "drag",
					dragover: "drag",
					drop: "drag",
					keydown: "press",
					keyup: "press",
					keypress: "press",
					input: "press",
				};
				function u() {
					return (0, w.addInpInstrumentationHandler)(({ metric: h }) => {
						if (h.value == null) return;
						const c = h.entries.find(
							(I) => I.duration === h.value && r[I.name],
						);
						if (!c) return;
						const { interactionId: n } = c,
							g = r[c.name],
							p = (0, E.msToSec)(i.browserPerformanceTimeOrigin + c.startTime),
							o = (0, E.msToSec)(h.value),
							f = (0, t.getActiveSpan)(),
							b = f ? (0, t.getRootSpan)(f) : void 0,
							l = (n != null ? d.get(n) : void 0) || b,
							y = l
								? (0, t.spanToJSON)(l).description
								: (0, t.getCurrentScope)().getScopeData().transactionName,
							$ = (0, i.htmlTreeAsString)(c.target),
							v = (0, i.dropUndefinedKeys)({
								[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp",
								[t.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${g}`,
								[t.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: c.duration,
							}),
							S = (0, E.startStandaloneWebVitalSpan)({
								name: $,
								transaction: y,
								attributes: v,
								startTime: p,
							});
						S?.addEvent("inp", {
							[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
							[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: h.value,
						}),
							S?.end(p + o);
					});
				}
				function a(h) {
					const c = ({ entries: n }) => {
						const g = (0, t.getActiveSpan)(),
							p = g && (0, t.getRootSpan)(g);
						n.forEach((o) => {
							if (!(0, w.isPerformanceEventTiming)(o) || !p) return;
							const f = o.interactionId;
							if (f != null && !d.has(f)) {
								if (C.length > 10) {
									const b = C.shift();
									d.delete(b);
								}
								C.push(f), d.set(f, p);
							}
						});
					};
					(0, w.addPerformanceInstrumentationHandler)("event", c),
						(0, w.addPerformanceInstrumentationHandler)("first-input", c);
				}
			},
		),
		define(
			de[2133],
			he([
				1, 0, 144, 144, 80, 144, 878, 366, 2131, 885, 1102, 728, 883, 884, 2132,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.registerInpInteractionListener = e.startTrackingINP = void 0),
					(e.startTrackingWebVitals = s),
					(e.startTrackingLongTasks = l),
					(e.startTrackingLongAnimationFrames = y),
					(e.startTrackingInteractions = $),
					(e.addPerformanceEntries = P),
					(e._addMeasureSpans = k),
					(e._addResourceSpans = N);
				const g = 2147483647;
				let p = 0,
					o = {},
					f,
					b;
				function s({ recordClsStandaloneSpans: U }) {
					const z = (0, u.getBrowserPerformanceAPI)();
					if (z && w.browserPerformanceTimeOrigin) {
						z.mark && d.WINDOW.performance.mark("sentry-tracing-init");
						const F = I(),
							x = S(),
							H = T(),
							q = U ? (0, m.trackClsAsStandaloneSpan)() : v();
						return () => {
							F(), x(), H(), q && q();
						};
					}
					return () => {};
				}
				function l() {
					(0, r.addPerformanceInstrumentationHandler)(
						"longtask",
						({ entries: U }) => {
							if ((0, t.getActiveSpan)())
								for (const z of U) {
									const F = (0, u.msToSec)(
											w.browserPerformanceTimeOrigin + z.startTime,
										),
										x = (0, u.msToSec)(z.duration),
										H = (0, t.startInactiveSpan)({
											name: "Main UI thread blocked",
											op: "ui.long-task",
											startTime: F,
											attributes: {
												[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
													"auto.ui.browser.metrics",
											},
										});
									H && H.end(F + x);
								}
						},
					);
				}
				function y() {
					new PerformanceObserver((z) => {
						if ((0, t.getActiveSpan)())
							for (const F of z.getEntries()) {
								if (!F.scripts[0]) continue;
								const x = (0, u.msToSec)(
										w.browserPerformanceTimeOrigin + F.startTime,
									),
									H = (0, u.msToSec)(F.duration),
									q = {
										[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
											"auto.ui.browser.metrics",
									},
									V = F.scripts[0],
									{
										invoker: G,
										invokerType: K,
										sourceURL: J,
										sourceFunctionName: W,
										sourceCharPosition: X,
									} = V;
								(q["browser.script.invoker"] = G),
									(q["browser.script.invoker_type"] = K),
									J && (q["code.filepath"] = J),
									W && (q["code.function"] = W),
									X !== -1 && (q["browser.script.source_char_position"] = X);
								const Y = (0, t.startInactiveSpan)({
									name: "Main UI thread blocked",
									op: "ui.long-animation-frame",
									startTime: x,
									attributes: q,
								});
								Y && Y.end(x + H);
							}
					}).observe({ type: "long-animation-frame", buffered: !0 });
				}
				function $() {
					(0, r.addPerformanceInstrumentationHandler)(
						"event",
						({ entries: U }) => {
							if ((0, t.getActiveSpan)()) {
								for (const z of U)
									if (z.name === "click") {
										const F = (0, u.msToSec)(
												w.browserPerformanceTimeOrigin + z.startTime,
											),
											x = (0, u.msToSec)(z.duration),
											H = {
												name: (0, w.htmlTreeAsString)(z.target),
												op: `ui.interaction.${z.name}`,
												startTime: F,
												attributes: {
													[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
														"auto.ui.browser.metrics",
												},
											},
											q = (0, w.getComponentName)(z.target);
										q && (H.attributes["ui.component_name"] = q);
										const V = (0, t.startInactiveSpan)(H);
										V && V.end(F + x);
									}
							}
						},
					);
				}
				Object.defineProperty(e, "startTrackingINP", {
					enumerable: !0,
					get: function () {
						return n.startTrackingINP;
					},
				}),
					Object.defineProperty(e, "registerInpInteractionListener", {
						enumerable: !0,
						get: function () {
							return n.registerInpInteractionListener;
						},
					});
				function v() {
					return (0, r.addClsInstrumentationHandler)(({ metric: U }) => {
						const z = U.entries[U.entries.length - 1];
						z &&
							(C.DEBUG_BUILD &&
								w.logger.log(`[Measurements] Adding CLS ${U.value}`),
							(o.cls = { value: U.value, unit: "" }),
							(b = z));
					}, !0);
				}
				function S() {
					return (0, r.addLcpInstrumentationHandler)(({ metric: U }) => {
						const z = U.entries[U.entries.length - 1];
						z &&
							(C.DEBUG_BUILD && w.logger.log("[Measurements] Adding LCP"),
							(o.lcp = { value: U.value, unit: "millisecond" }),
							(f = z));
					}, !0);
				}
				function I() {
					return (0, r.addFidInstrumentationHandler)(({ metric: U }) => {
						const z = U.entries[U.entries.length - 1];
						if (!z) return;
						const F = (0, u.msToSec)(w.browserPerformanceTimeOrigin),
							x = (0, u.msToSec)(z.startTime);
						C.DEBUG_BUILD && w.logger.log("[Measurements] Adding FID"),
							(o.fid = { value: U.value, unit: "millisecond" }),
							(o["mark.fid"] = { value: F + x, unit: "second" });
					});
				}
				function T() {
					return (0, r.addTtfbInstrumentationHandler)(({ metric: U }) => {
						U.entries[U.entries.length - 1] &&
							(C.DEBUG_BUILD && w.logger.log("[Measurements] Adding TTFB"),
							(o.ttfb = { value: U.value, unit: "millisecond" }));
					});
				}
				function P(U, z) {
					const F = (0, u.getBrowserPerformanceAPI)();
					if (
						!F ||
						!d.WINDOW.performance.getEntries ||
						!w.browserPerformanceTimeOrigin
					)
						return;
					C.DEBUG_BUILD &&
						w.logger.log(
							"[Tracing] Adding & adjusting spans using Performance API",
						);
					const x = (0, u.msToSec)(w.browserPerformanceTimeOrigin),
						H = F.getEntries(),
						{ op: q, start_timestamp: V } = (0, E.spanToJSON)(U);
					if (
						(H.slice(p).forEach((G) => {
							const K = (0, u.msToSec)(G.startTime),
								J = (0, u.msToSec)(Math.max(0, G.duration));
							if (!(q === "navigation" && V && x + K < V))
								switch (G.entryType) {
									case "navigation": {
										L(U, G, x);
										break;
									}
									case "mark":
									case "paint":
									case "measure": {
										k(U, G, K, J, x);
										const W = (0, c.getVisibilityWatcher)(),
											X = G.startTime < W.firstHiddenTime;
										G.name === "first-paint" &&
											X &&
											(C.DEBUG_BUILD &&
												w.logger.log("[Measurements] Adding FP"),
											(o.fp = { value: G.startTime, unit: "millisecond" })),
											G.name === "first-contentful-paint" &&
												X &&
												(C.DEBUG_BUILD &&
													w.logger.log("[Measurements] Adding FCP"),
												(o.fcp = { value: G.startTime, unit: "millisecond" }));
										break;
									}
									case "resource": {
										N(U, G, G.name, K, J, x);
										break;
									}
									default:
								}
						}),
						(p = Math.max(H.length - 1, 0)),
						A(U),
						q === "pageload")
					) {
						B(o);
						const G = o["mark.fid"];
						G &&
							o.fid &&
							((0, u.startAndEndSpan)(
								U,
								G.value,
								G.value + (0, u.msToSec)(o.fid.value),
								{
									name: "first input delay",
									op: "ui.action",
									attributes: {
										[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
											"auto.ui.browser.metrics",
									},
								},
							),
							delete o["mark.fid"]),
							(!("fcp" in o) || !z.recordClsOnPageloadSpan) && delete o.cls,
							Object.entries(o).forEach(([K, J]) => {
								(0, i.setMeasurement)(K, J.value, J.unit);
							}),
							U.setAttribute("performance.timeOrigin", x),
							U.setAttribute(
								"performance.activationStart",
								(0, a.getActivationStart)(),
							),
							R(U);
					}
					(f = void 0), (b = void 0), (o = {});
				}
				function k(U, z, F, x, H) {
					const q = (0, h.getNavigationEntry)(),
						V = (0, u.msToSec)(q ? q.requestStart : 0),
						G = H + Math.max(F, V),
						K = H + F,
						J = K + x,
						W = {
							[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
								"auto.resource.browser.metrics",
						};
					return (
						G !== K &&
							((W["sentry.browser.measure_happened_before_request"] = !0),
							(W["sentry.browser.measure_start_time"] = G)),
						(0, u.startAndEndSpan)(U, G, J, {
							name: z.name,
							op: z.entryType,
							attributes: W,
						}),
						G
					);
				}
				function L(U, z, F) {
					[
						"unloadEvent",
						"redirect",
						"domContentLoadedEvent",
						"loadEvent",
						"connect",
					].forEach((x) => {
						D(U, z, x, F);
					}),
						D(U, z, "secureConnection", F, "TLS/SSL", "connectEnd"),
						D(U, z, "fetch", F, "cache", "domainLookupStart"),
						D(U, z, "domainLookup", F, "DNS"),
						M(U, z, F);
				}
				function D(U, z, F, x, H, q) {
					const V = q ? z[q] : z[`${F}End`],
						G = z[`${F}Start`];
					!G ||
						!V ||
						(0, u.startAndEndSpan)(
							U,
							x + (0, u.msToSec)(G),
							x + (0, u.msToSec)(V),
							{
								op: `browser.${H || F}`,
								name: z.name,
								attributes: {
									[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
										"auto.ui.browser.metrics",
								},
							},
						);
				}
				function M(U, z, F) {
					const x = F + (0, u.msToSec)(z.requestStart),
						H = F + (0, u.msToSec)(z.responseEnd),
						q = F + (0, u.msToSec)(z.responseStart);
					z.responseEnd &&
						((0, u.startAndEndSpan)(U, x, H, {
							op: "browser.request",
							name: z.name,
							attributes: {
								[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
							},
						}),
						(0, u.startAndEndSpan)(U, q, H, {
							op: "browser.response",
							name: z.name,
							attributes: {
								[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
							},
						}));
				}
				function N(U, z, F, x, H, q) {
					if (
						z.initiatorType === "xmlhttprequest" ||
						z.initiatorType === "fetch"
					)
						return;
					const V = (0, w.parseUrl)(F),
						G = {
							[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
								"auto.resource.browser.metrics",
						};
					O(G, z, "transferSize", "http.response_transfer_size"),
						O(G, z, "encodedBodySize", "http.response_content_length"),
						O(G, z, "decodedBodySize", "http.decoded_response_content_length"),
						"renderBlockingStatus" in z &&
							(G["resource.render_blocking_status"] = z.renderBlockingStatus),
						V.protocol && (G["url.scheme"] = V.protocol.split(":").pop()),
						V.host && (G["server.address"] = V.host),
						(G["url.same_origin"] = F.includes(d.WINDOW.location.origin));
					const K = q + x,
						J = K + H;
					(0, u.startAndEndSpan)(U, K, J, {
						name: F.replace(d.WINDOW.location.origin, ""),
						op: z.initiatorType
							? `resource.${z.initiatorType}`
							: "resource.other",
						attributes: G,
					});
				}
				function A(U) {
					const z = d.WINDOW.navigator;
					if (!z) return;
					const F = z.connection;
					F &&
						(F.effectiveType &&
							U.setAttribute("effectiveConnectionType", F.effectiveType),
						F.type && U.setAttribute("connectionType", F.type),
						(0, u.isMeasurementValue)(F.rtt) &&
							(o["connection.rtt"] = { value: F.rtt, unit: "millisecond" })),
						(0, u.isMeasurementValue)(z.deviceMemory) &&
							U.setAttribute("deviceMemory", `${z.deviceMemory} GB`),
						(0, u.isMeasurementValue)(z.hardwareConcurrency) &&
							U.setAttribute(
								"hardwareConcurrency",
								String(z.hardwareConcurrency),
							);
				}
				function R(U) {
					f &&
						(C.DEBUG_BUILD && w.logger.log("[Measurements] Adding LCP Data"),
						f.element &&
							U.setAttribute("lcp.element", (0, w.htmlTreeAsString)(f.element)),
						f.id && U.setAttribute("lcp.id", f.id),
						f.url && U.setAttribute("lcp.url", f.url.trim().slice(0, 200)),
						U.setAttribute("lcp.size", f.size)),
						b &&
							b.sources &&
							(C.DEBUG_BUILD && w.logger.log("[Measurements] Adding CLS Data"),
							b.sources.forEach((z, F) =>
								U.setAttribute(
									`cls.source.${F + 1}`,
									(0, w.htmlTreeAsString)(z.node),
								),
							));
				}
				function O(U, z, F, x) {
					const H = z[F];
					H != null && H < g && (U[x] = H);
				}
				function B(U) {
					const z = (0, h.getNavigationEntry)();
					if (!z) return;
					const { responseStart: F, requestStart: x } = z;
					x <= F &&
						(C.DEBUG_BUILD &&
							w.logger.log("[Measurements] Adding TTFB Request Time"),
						(U["ttfb.requestTime"] = { value: F - x, unit: "millisecond" }));
				}
			},
		),
		define(
			de[641],
			he([1, 0, 885, 2133, 2091, 2092, 2090, 2093]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.SENTRY_XHR_DATA_KEY =
						e.addXhrInstrumentationHandler =
						e.getNativeImplementation =
						e.clearCachedImplementation =
						e.addHistoryInstrumentationHandler =
						e.addClickKeypressInstrumentationHandler =
						e.registerInpInteractionListener =
						e.startTrackingINP =
						e.startTrackingWebVitals =
						e.startTrackingLongAnimationFrames =
						e.startTrackingLongTasks =
						e.startTrackingInteractions =
						e.addPerformanceEntries =
						e.addInpInstrumentationHandler =
						e.addLcpInstrumentationHandler =
						e.addTtfbInstrumentationHandler =
						e.addFidInstrumentationHandler =
						e.addClsInstrumentationHandler =
						e.addPerformanceInstrumentationHandler =
							void 0),
					Object.defineProperty(e, "addPerformanceInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return t.addPerformanceInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addClsInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return t.addClsInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addFidInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return t.addFidInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addTtfbInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return t.addTtfbInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addLcpInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return t.addLcpInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addInpInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return t.addInpInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addPerformanceEntries", {
						enumerable: !0,
						get: function () {
							return i.addPerformanceEntries;
						},
					}),
					Object.defineProperty(e, "startTrackingInteractions", {
						enumerable: !0,
						get: function () {
							return i.startTrackingInteractions;
						},
					}),
					Object.defineProperty(e, "startTrackingLongTasks", {
						enumerable: !0,
						get: function () {
							return i.startTrackingLongTasks;
						},
					}),
					Object.defineProperty(e, "startTrackingLongAnimationFrames", {
						enumerable: !0,
						get: function () {
							return i.startTrackingLongAnimationFrames;
						},
					}),
					Object.defineProperty(e, "startTrackingWebVitals", {
						enumerable: !0,
						get: function () {
							return i.startTrackingWebVitals;
						},
					}),
					Object.defineProperty(e, "startTrackingINP", {
						enumerable: !0,
						get: function () {
							return i.startTrackingINP;
						},
					}),
					Object.defineProperty(e, "registerInpInteractionListener", {
						enumerable: !0,
						get: function () {
							return i.registerInpInteractionListener;
						},
					}),
					Object.defineProperty(e, "addClickKeypressInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return w.addClickKeypressInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "addHistoryInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return E.addHistoryInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "fetch", {
						enumerable: !0,
						get: function () {
							return C.fetch;
						},
					}),
					Object.defineProperty(e, "setTimeout", {
						enumerable: !0,
						get: function () {
							return C.setTimeout;
						},
					}),
					Object.defineProperty(e, "clearCachedImplementation", {
						enumerable: !0,
						get: function () {
							return C.clearCachedImplementation;
						},
					}),
					Object.defineProperty(e, "getNativeImplementation", {
						enumerable: !0,
						get: function () {
							return C.getNativeImplementation;
						},
					}),
					Object.defineProperty(e, "addXhrInstrumentationHandler", {
						enumerable: !0,
						get: function () {
							return d.addXhrInstrumentationHandler;
						},
					}),
					Object.defineProperty(e, "SENTRY_XHR_DATA_KEY", {
						enumerable: !0,
						get: function () {
							return d.SENTRY_XHR_DATA_KEY;
						},
					});
			},
		),
		