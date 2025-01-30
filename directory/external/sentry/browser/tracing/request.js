import '../../../../require.js';
import '../../../../exports.js';
import '../../browser-utils/index.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../helpers.js';
define(
			de[1459],
			he([1, 0, 641, 144, 80, 386]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*index*/,
 E /*helpers*/) {
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
		