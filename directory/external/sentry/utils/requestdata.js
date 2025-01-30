import '../../../require.js';
import '../../../exports.js';
import './cookie.js';
import './debug-build.js';
import './is.js';
import './logger.js';
import './normalize.js';
import './url.js';
import './vendor/getIpAddress.js';
define(
			de[2083],
			he([1, 0, 2068, 577, 430, 527, 882, 1427, 2075]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cookie*/,
 i /*debug-build*/,
 w /*is*/,
 E /*logger*/,
 C /*normalize*/,
 d /*url*/,
 m /*getIpAddress*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DEFAULT_USER_INCLUDES = void 0),
					(e.extractPathForTransaction = a),
					(e.extractRequestData = n),
					(e.addRequestDataToEvent = g),
					(e.winterCGHeadersToDict = o),
					(e.winterCGRequestToRequestData = f);
				const r = { ip: !1, request: !0, transaction: !0, user: !0 },
					u = ["cookies", "data", "headers", "method", "query_string", "url"];
				e.DEFAULT_USER_INCLUDES = ["id", "username", "email"];
				function a(b, s = {}) {
					const l = b.method && b.method.toUpperCase();
					let y = "",
						$ = "url";
					s.customRoute || b.route
						? ((y =
								s.customRoute ||
								`${b.baseUrl || ""}${b.route && b.route.path}`),
							($ = "route"))
						: (b.originalUrl || b.url) &&
							(y = (0, d.stripUrlQueryAndFragment)(
								b.originalUrl || b.url || "",
							));
					let v = "";
					return (
						s.method && l && (v += l),
						s.method && s.path && (v += " "),
						s.path && y && (v += y),
						[v, $]
					);
				}
				function h(b, s) {
					switch (s) {
						case "path":
							return a(b, { path: !0 })[0];
						case "handler":
							return (
								(b.route &&
									b.route.stack &&
									b.route.stack[0] &&
									b.route.stack[0].name) ||
								"<anonymous>"
							);
						case "methodPath":
						default: {
							const l = b._reconstructedRoute ? b._reconstructedRoute : void 0;
							return a(b, { path: !0, method: !0, customRoute: l })[0];
						}
					}
				}
				function c(b, s) {
					const l = {};
					return (
						(Array.isArray(s) ? s : e.DEFAULT_USER_INCLUDES).forEach(($) => {
							b && $ in b && (l[$] = b[$]);
						}),
						l
					);
				}
				function n(b, s = {}) {
					const { include: l = u } = s,
						y = {},
						$ = b.headers || {},
						v = b.method,
						S = $.host || b.hostname || b.host || "<no host>",
						I =
							b.protocol === "https" || (b.socket && b.socket.encrypted)
								? "https"
								: "http",
						T = b.originalUrl || b.url || "",
						P = T.startsWith(I) ? T : `${I}://${S}${T}`;
					return (
						l.forEach((k) => {
							switch (k) {
								case "headers": {
									(y.headers = $),
										l.includes("cookies") || delete y.headers.cookie,
										l.includes("ip") ||
											m.ipHeaderNames.forEach((L) => {
												delete y.headers[L];
											});
									break;
								}
								case "method": {
									y.method = v;
									break;
								}
								case "url": {
									y.url = P;
									break;
								}
								case "cookies": {
									y.cookies =
										b.cookies ||
										($.cookie && (0, t.parseCookie)($.cookie)) ||
										{};
									break;
								}
								case "query_string": {
									y.query_string = p(b);
									break;
								}
								case "data": {
									if (v === "GET" || v === "HEAD") break;
									b.body !== void 0 &&
										(y.data = (0, w.isString)(b.body)
											? b.body
											: JSON.stringify((0, C.normalize)(b.body)));
									break;
								}
								default:
									({}).hasOwnProperty.call(b, k) && (y[k] = b[k]);
							}
						}),
						y
					);
				}
				function g(b, s, l) {
					const y = { ...r, ...(l && l.include) };
					if (y.request) {
						const $ = Array.isArray(y.request) ? [...y.request] : [...u];
						y.ip && $.push("ip");
						const v = n(s, { include: $ });
						b.request = { ...b.request, ...v };
					}
					if (y.user) {
						const $ =
							s.user && (0, w.isPlainObject)(s.user) ? c(s.user, y.user) : {};
						Object.keys($).length && (b.user = { ...b.user, ...$ });
					}
					if (y.ip) {
						const $ =
							(s.headers && (0, m.getClientIPAddress)(s.headers)) ||
							s.ip ||
							(s.socket && s.socket.remoteAddress);
						$ && (b.user = { ...b.user, ip_address: $ });
					}
					return (
						y.transaction &&
							!b.transaction &&
							b.type === "transaction" &&
							(b.transaction = h(s, y.transaction)),
						b
					);
				}
				function p(b) {
					let s = b.originalUrl || b.url || "";
					if (s) {
						s.startsWith("/") && (s = `http://dogs.are.great${s}`);
						try {
							const l = b.query || new URL(s).search.slice(1);
							return l.length ? l : void 0;
						} catch {
							return;
						}
					}
				}
				function o(b) {
					const s = {};
					try {
						b.forEach((l, y) => {
							typeof l == "string" && (s[y] = l);
						});
					} catch {
						i.DEBUG_BUILD &&
							E.logger.warn(
								"Sentry failed extracting headers from a request object. If you see this, please file an issue.",
							);
					}
					return s;
				}
				function f(b) {
					const s = o(b.headers);
					return { method: b.method, url: b.url, headers: s };
				}
			},
		),
		