define(de[2134], he([1, 0, 144, 80]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.contextLinesIntegration = void 0),
				(e.applySourceContextToFrame = r);
			const w = i.GLOBAL_OBJ,
				E = 7,
				C = "ContextLines",
				d = (u = {}) => {
					const a = u.frameContextLines != null ? u.frameContextLines : E;
					return {
						name: C,
						processEvent(h) {
							return m(h, a);
						},
					};
				};
			e.contextLinesIntegration = (0, t.defineIntegration)(d);
			function m(u, a) {
				const h = w.document,
					c = w.location && (0, i.stripUrlQueryAndFragment)(w.location.href);
				if (!h || !c) return u;
				const n = u.exception && u.exception.values;
				if (!n || !n.length) return u;
				const g = h.documentElement.innerHTML;
				if (!g) return u;
				const p = [
					"<!DOCTYPE html>",
					"<html>",
					...g.split(`
`),
					"</html>",
				];
				return (
					n.forEach((o) => {
						const f = o.stacktrace;
						f && f.frames && (f.frames = f.frames.map((b) => r(b, p, c, a)));
					}),
					u
				);
			}
			function r(u, a, h, c) {
				return (
					u.filename !== h ||
						!u.lineno ||
						!a.length ||
						(0, i.addContextToFrame)(a, u, c),
					u
				);
			}
		}),
		define(
			de[1456],
			he([1, 0, 144, 80, 452, 889, 386]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.globalHandlersIntegration = void 0);
				const d = "GlobalHandlers",
					m = (p = {}) => {
						const o = { onerror: !0, onunhandledrejection: !0, ...p };
						return {
							name: d,
							setupOnce() {
								Error.stackTraceLimit = 50;
							},
							setup(f) {
								o.onerror && (r(f), n("onerror")),
									o.onunhandledrejection && (u(f), n("onunhandledrejection"));
							},
						};
					};
				e.globalHandlersIntegration = (0, t.defineIntegration)(m);
				function r(p) {
					(0, i.addGlobalErrorInstrumentationHandler)((o) => {
						const { stackParser: f, attachStacktrace: b } = g();
						if ((0, t.getClient)() !== p || (0, C.shouldIgnoreOnError)())
							return;
						const { msg: s, url: l, line: y, column: $, error: v } = o,
							S = c(
								(0, E.eventFromUnknownInput)(f, v || s, void 0, b, !1),
								l,
								y,
								$,
							);
						(S.level = "error"),
							(0, t.captureEvent)(S, {
								originalException: v,
								mechanism: { handled: !1, type: "onerror" },
							});
					});
				}
				function u(p) {
					(0, i.addGlobalUnhandledRejectionInstrumentationHandler)((o) => {
						const { stackParser: f, attachStacktrace: b } = g();
						if ((0, t.getClient)() !== p || (0, C.shouldIgnoreOnError)())
							return;
						const s = a(o),
							l = (0, i.isPrimitive)(s)
								? h(s)
								: (0, E.eventFromUnknownInput)(f, s, void 0, b, !0);
						(l.level = "error"),
							(0, t.captureEvent)(l, {
								originalException: s,
								mechanism: { handled: !1, type: "onunhandledrejection" },
							});
					});
				}
				function a(p) {
					if ((0, i.isPrimitive)(p)) return p;
					try {
						if ("reason" in p) return p.reason;
						if ("detail" in p && "reason" in p.detail) return p.detail.reason;
					} catch {}
					return p;
				}
				function h(p) {
					return {
						exception: {
							values: [
								{
									type: "UnhandledRejection",
									value: `Non-Error promise rejection captured with value: ${String(p)}`,
								},
							],
						},
					};
				}
				function c(p, o, f, b) {
					const s = (p.exception = p.exception || {}),
						l = (s.values = s.values || []),
						y = (l[0] = l[0] || {}),
						$ = (y.stacktrace = y.stacktrace || {}),
						v = ($.frames = $.frames || []),
						S = isNaN(parseInt(b, 10)) ? void 0 : b,
						I = isNaN(parseInt(f, 10)) ? void 0 : f,
						T =
							(0, i.isString)(o) && o.length > 0 ? o : (0, i.getLocationHref)();
					return (
						v.length === 0 &&
							v.push({
								colno: S,
								filename: T,
								function: i.UNKNOWN_FUNCTION,
								in_app: !0,
								lineno: I,
							}),
						p
					);
				}
				function n(p) {
					w.DEBUG_BUILD && i.logger.log(`Global Handler attached: ${p}`);
				}
				function g() {
					const p = (0, t.getClient)();
					return (
						(p && p.getOptions()) || {
							stackParser: () => [],
							attachStacktrace: !1,
						}
					);
				}
			},
		),
		define(
			de[2135],
			he([1, 0, 641, 144, 80, 452]),
			function (ce, e, t, i, w, E) {
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
		),
		