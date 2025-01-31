import '../../../../require.js';
import '../../../../exports.js';
import '../../browser-utils/index.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
define(
			de[2135],
			he([1, 0, 641, 144, 80, 452]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*index*/,
 E /*debug-build*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.httpClientIntegration = void 0);
				const C = "HttpClient",
					d = ($ = {}) => {
						const v = {
							failedRequestStatusCodes: [[500, 599]],
							failedRequestTargets: [/.*/],
							...$,
						};
						return {
							name: C,
							setup(S) {
								o(S, v), f(S, v);
							},
						};
					};
				e.httpClientIntegration = (0, i.defineIntegration)(d);
				function m($, v, S, I) {
					if (b($, S.status, S.url)) {
						const T = l(v, I);
						let P, k, L, D;
						y() && (([P, L] = r("Cookie", T)), ([k, D] = r("Set-Cookie", S)));
						const M = s({
							url: T.url,
							method: T.method,
							status: S.status,
							requestHeaders: P,
							responseHeaders: k,
							requestCookies: L,
							responseCookies: D,
						});
						(0, i.captureEvent)(M);
					}
				}
				function r($, v) {
					const S = c(v.headers);
					let I;
					try {
						const T = S[$] || S[$.toLowerCase()] || void 0;
						T && (I = h(T));
					} catch {
						E.DEBUG_BUILD &&
							w.logger.log(`Could not extract cookies from header ${$}`);
					}
					return [S, I];
				}
				function u($, v, S, I) {
					if (b($, v.status, v.responseURL)) {
						let T, P, k;
						if (y()) {
							try {
								const D =
									v.getResponseHeader("Set-Cookie") ||
									v.getResponseHeader("set-cookie") ||
									void 0;
								D && (P = h(D));
							} catch {
								E.DEBUG_BUILD &&
									w.logger.log(
										"Could not extract cookies from response headers",
									);
							}
							try {
								k = n(v);
							} catch {
								E.DEBUG_BUILD &&
									w.logger.log("Could not extract headers from response");
							}
							T = I;
						}
						const L = s({
							url: v.responseURL,
							method: S,
							status: v.status,
							requestHeaders: T,
							responseHeaders: k,
							responseCookies: P,
						});
						(0, i.captureEvent)(L);
					}
				}
				function a($) {
					if ($) {
						const v = $["Content-Length"] || $["content-length"];
						if (v) return parseInt(v, 10);
					}
				}
				function h($) {
					return $.split("; ").reduce((v, S) => {
						const [I, T] = S.split("=");
						return I && T && (v[I] = T), v;
					}, {});
				}
				function c($) {
					const v = {};
					return (
						$.forEach((S, I) => {
							v[I] = S;
						}),
						v
					);
				}
				function n($) {
					const v = $.getAllResponseHeaders();
					return v
						? v
								.split(`\r
`)
								.reduce((S, I) => {
									const [T, P] = I.split(": ");
									return T && P && (S[T] = P), S;
								}, {})
						: {};
				}
				function g($, v) {
					return $.some((S) =>
						typeof S == "string" ? v.includes(S) : S.test(v),
					);
				}
				function p($, v) {
					return $.some((S) =>
						typeof S == "number" ? S === v : v >= S[0] && v <= S[1],
					);
				}
				function o($, v) {
					(0, w.supportsNativeFetch)() &&
						(0, w.addFetchInstrumentationHandler)((S) => {
							if ((0, i.getClient)() !== $) return;
							const { response: I, args: T } = S,
								[P, k] = T;
							I && m(v, P, I, k);
						});
				}
				function f($, v) {
					"XMLHttpRequest" in w.GLOBAL_OBJ &&
						(0, t.addXhrInstrumentationHandler)((S) => {
							if ((0, i.getClient)() !== $) return;
							const I = S.xhr,
								T = I[t.SENTRY_XHR_DATA_KEY];
							if (!T) return;
							const { method: P, request_headers: k } = T;
							try {
								u(v, I, P, k);
							} catch (L) {
								E.DEBUG_BUILD &&
									w.logger.warn(
										"Error while extracting response event form XHR response",
										L,
									);
							}
						});
				}
				function b($, v, S) {
					return (
						p($.failedRequestStatusCodes, v) &&
						g($.failedRequestTargets, S) &&
						!(0, i.isSentryRequestUrl)(S, (0, i.getClient)())
					);
				}
				function s($) {
					const v = `HTTP Client Error with status code: ${$.status}`,
						S = {
							message: v,
							exception: { values: [{ type: "Error", value: v }] },
							request: {
								url: $.url,
								method: $.method,
								headers: $.requestHeaders,
								cookies: $.requestCookies,
							},
							contexts: {
								response: {
									status_code: $.status,
									headers: $.responseHeaders,
									cookies: $.responseCookies,
									body_size: a($.responseHeaders),
								},
							},
						};
					return (
						(0, w.addExceptionMechanism)(S, {
							type: "http.client",
							handled: !1,
						}),
						S
					);
				}
				function l($, v) {
					return (!v && $ instanceof Request) ||
						($ instanceof Request && $.bodyUsed)
						? $
						: new Request($, v);
				}
				function y() {
					const $ = (0, i.getClient)();
					return $ ? !!$.getOptions().sendDefaultPii : !1;
				}
			},
		)
