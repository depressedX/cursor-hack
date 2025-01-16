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
		