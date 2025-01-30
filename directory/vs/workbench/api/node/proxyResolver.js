import '../../../../require.js';
import '../../../../exports.js';
import '../../../../http.js';
import '../../../../https.js';
import '../../../../tls.js';
import '../../../../net.js';
import '../../../base/common/uri.js';
import '../../../platform/log/common/log.js';
import '../../../../@vscode/proxy-agent.js';
define(
			Pe[517],
			Ne([1, 0, 518, 630, 631, 105, 2, 14, 632]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Ujd = p),
					(e = tt(e)),
					(r = tt(r)),
					(S = tt(S)),
					(N = tt(N));
				const n = !1;
				function p(a, u, s, f, o, w) {
					const m = w.environment.useHostProxy,
						E = typeof m == "boolean" ? m : !w.remote.isRemote,
						R = {
							resolveProxy: (A) => a.resolveProxy(A),
							lookupProxyAuthorization: h.bind(
								void 0,
								a,
								f,
								o,
								u,
								{},
								{},
								w.remote.isRemote,
								E,
							),
							getProxyURL: () => u.getConfiguration("http").get("proxy"),
							getProxySupport: () =>
								u.getConfiguration("http").get("proxySupport") || "off",
							getNoProxyConfig: () =>
								u.getConfiguration("http").get("noProxy") || [],
							addCertificatesV1: () => d(u),
							addCertificatesV2: () => k(u),
							log: f,
							getLogLevel: () => {
								const A = f.getLevel();
								switch (A) {
									case I.LogLevel.Trace:
										return l.LogLevel.Trace;
									case I.LogLevel.Debug:
										return l.LogLevel.Debug;
									case I.LogLevel.Info:
										return l.LogLevel.Info;
									case I.LogLevel.Warning:
										return l.LogLevel.Warning;
									case I.LogLevel.Error:
										return l.LogLevel.Error;
									case I.LogLevel.Off:
										return l.LogLevel.Off;
									default:
										return J(A);
								}
								function J(L) {
									return f.error("Unknown log level", L), l.LogLevel.Debug;
								}
							},
							proxyResolveTelemetry: () => {},
							useHostProxy: E,
							loadAdditionalCertificates: async () => {
								const A = [];
								if (
									(w.remote.isRemote &&
										A.push((0, l.loadSystemCertificates)({ log: f })),
									E)
								) {
									f.trace(
										"ProxyResolver#loadAdditionalCertificates: Loading certificates from main process",
									);
									const J = a.loadCertificates();
									J.then((L) =>
										f.trace(
											"ProxyResolver#loadAdditionalCertificates: Loaded certificates from main process",
											L.length,
										),
									),
										A.push(J);
								}
								return (
									w.environment.extensionTestsLocationURI &&
										r.globalAgent.testCertificates?.length &&
										(f.trace(
											"ProxyResolver#loadAdditionalCertificates: Loading test certificates",
										),
										A.push(Promise.resolve(r.globalAgent.testCertificates))),
									(await Promise.all(A)).flat()
								);
							},
							env: process.env,
						},
						C = (0, l.createProxyResolver)(R),
						O = y(R, C);
					return c(s, O);
				}
				function y(a, u) {
					function s(f, o) {
						return Object.assign(f.default || f, o);
					}
					return {
						http: s(e, (0, l.createHttpPatch)(a, e, u)),
						https: s(r, (0, l.createHttpPatch)(a, r, u)),
						net: s(N, (0, l.createNetPatch)(a, N)),
						tls: s(S, (0, l.createTlsPatch)(a, S)),
					};
				}
				function d(a) {
					const u = a.getConfiguration("http");
					return (
						!u.get("experimental.systemCertificatesV2", n) &&
						!!u.get("systemCertificates")
					);
				}
				function k(a) {
					const u = a.getConfiguration("http");
					return (
						!!u.get("experimental.systemCertificatesV2", n) &&
						!!u.get("systemCertificates")
					);
				}
				const g = new Map();
				function c(a, u) {
					return a.getExtensionPathIndex().then((s) => {
						const f = globalThis._VSCODE_NODE_MODULES.module,
							o = f._load;
						f._load = function (m, E, R) {
							if (m === "net") return u.net;
							if (m === "tls") return u.tls;
							if (m !== "http" && m !== "https")
								return o.apply(this, arguments);
							const C = s.findSubstr(P.URI.file(E.filename));
							let O = g.get(C);
							if ((O || g.set(C, (O = {})), !O[m])) {
								const A = u[m];
								O[m] = { ...A };
							}
							return O[m];
						};
					});
				}
				async function h(a, u, s, f, o, w, m, E, R, C, O) {
					const A = o[R];
					C && (o[R] = C),
						u.trace(
							"ProxyResolver#lookupProxyAuthorization callback",
							`proxyURL:${R}`,
							`proxyAuthenticate:${C}`,
							`proxyAuthenticateCache:${A}`,
						);
					const J = C || A,
						L = Array.isArray(J) ? J : typeof J == "string" ? [J] : [];
					if (
						(T(s, L, m),
						L.some((F) => /^(Negotiate|Kerberos)( |$)/i.test(F)) &&
							!O.kerberosRequested)
					) {
						O.kerberosRequested = !0;
						try {
							const F = await new Promise((H, B) => {
									we(["kerberos"], H, B);
								}).then(tt),
								D = new URL(R),
								M =
									f
										.getConfiguration("http")
										.get("proxyKerberosServicePrincipal") ||
									(process.platform === "win32"
										? `HTTP/${D.hostname}`
										: `HTTP@${D.hostname}`);
							return (
								u.debug(
									"ProxyResolver#lookupProxyAuthorization Kerberos authentication lookup",
									`proxyURL:${R}`,
									`spn:${M}`,
								),
								"Negotiate " + (await (await F.initializeClient(M)).step(""))
							);
						} catch (F) {
							u.debug(
								"ProxyResolver#lookupProxyAuthorization Kerberos authentication failed",
								F,
							);
						}
						if (m && E) {
							u.debug(
								"ProxyResolver#lookupProxyAuthorization Kerberos authentication lookup on host",
								`proxyURL:${R}`,
							);
							const F = await a.lookupKerberosAuthorization(R);
							if (F) return "Negotiate " + F;
						}
					}
					const b = L.find((F) => /^Basic( |$)/i.test(F));
					if (b)
						try {
							const F = w[R];
							if (F)
								if (O.basicAuthCacheUsed)
									u.debug(
										"ProxyResolver#lookupProxyAuthorization Basic authentication deleting cached credentials",
										`proxyURL:${R}`,
									),
										delete w[R];
								else
									return (
										u.debug(
											"ProxyResolver#lookupProxyAuthorization Basic authentication using cached credentials",
											`proxyURL:${R}`,
										),
										(O.basicAuthCacheUsed = !0),
										F
									);
							O.basicAuthAttempt = (O.basicAuthAttempt || 0) + 1;
							const D = / realm="([^"]+)"/i.exec(b)?.[1];
							u.debug(
								"ProxyResolver#lookupProxyAuthorization Basic authentication lookup",
								`proxyURL:${R}`,
								`realm:${D}`,
							);
							const M = new URL(R),
								z = {
									scheme: "basic",
									host: M.hostname,
									port: Number(M.port),
									realm: D || "",
									isProxy: !0,
									attempt: O.basicAuthAttempt,
								},
								Q = await a.lookupAuthorization(z);
							if (Q) {
								u.debug(
									"ProxyResolver#lookupProxyAuthorization Basic authentication received credentials",
									`proxyURL:${R}`,
									`realm:${D}`,
								);
								const H =
									"Basic " +
									Buffer.from(`${Q.username}:${Q.password}`).toString("base64");
								return (w[R] = H), H;
							} else
								u.debug(
									"ProxyResolver#lookupProxyAuthorization Basic authentication received no credentials",
									`proxyURL:${R}`,
									`realm:${D}`,
								);
						} catch (F) {
							u.error(
								"ProxyResolver#lookupProxyAuthorization Basic authentication failed",
								F,
							);
						}
				}
				let $ = !1;
				function T(a, u, s) {
					$ ||
						!u.length ||
						(($ = !0),
						a.$publicLog2("proxyAuthenticationRequest", {
							authenticationType: u.map((f) => f.split(" ")[0]).join(","),
							extensionHostType: s ? "remote" : "local",
						}));
				}
			},
		),
		