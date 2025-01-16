define(
			de[327],
			he([1, 0, 76, 29, 3, 4, 81, 5, 34, 30]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bq = e.$Aq = void 0),
					(e.$Cq = h),
					(e.$Dq = c),
					(e.$Eq = n),
					(e.$Fq = g),
					(e.$Gq = p),
					(e.$Hq = o),
					(e.$Aq = (0, d.$Mi)("requestService"));
				class u {
					constructor(l) {
						this.b = l;
					}
					toJSON() {
						if (!this.a) {
							const l = Object.create(null);
							for (const y in this.b)
								y.toLowerCase() === "authorization" ||
								y.toLowerCase() === "proxy-authorization"
									? (l[y] = "*****")
									: (l[y] = this.b[y]);
							this.a = l;
						}
						return this.a;
					}
				}
				class a extends w.$1c {
					constructor(l) {
						super(),
							(this.b = 0),
							(this.a = l.createLogger("network", {
								name: (0, E.localize)(2069, null),
								when: m.$Ak.isEqualTo((0, m.$xk)(m.LogLevel.Trace)).serialize(),
							}));
					}
					async c(l, y, $) {
						const v = `${l} #${++this.b}: ${y.url}`;
						this.a.trace(`${v} - begin`, y.type, new u(y.headers ?? {}));
						try {
							const S = await $();
							return (
								this.a.trace(
									`${v} - end`,
									y.type,
									S.res.statusCode,
									S.res.headers,
								),
								S
							);
						} catch (S) {
							throw (this.a.error(`${v} - error`, y.type, (0, i.$bb)(S)), S);
						}
					}
				}
				e.$Bq = a;
				function h(s) {
					return (
						(s.res.statusCode &&
							s.res.statusCode >= 200 &&
							s.res.statusCode < 300) ||
						s.res.statusCode === 1223
					);
				}
				function c(s) {
					return s.res.statusCode === 204;
				}
				async function n(s) {
					return c(s) ? null : (await (0, t.$6e)(s.stream)).toString();
				}
				async function g(s) {
					if (!h(s)) throw new Error("Server returned " + s.res.statusCode);
					return n(s);
				}
				async function p(s) {
					if (!h(s)) throw new Error("Server returned " + s.res.statusCode);
					if (c(s)) return null;
					const y = (await (0, t.$6e)(s.stream)).toString();
					try {
						return JSON.parse(y);
					} catch ($) {
						throw (
							(($.message +=
								`:
` + y),
							$)
						);
					}
				}
				function o(s) {
					b(s);
				}
				let f;
				function b(s) {
					const l = r.$Io.as(C.$No.Configuration),
						y = f;
					(f = {
						id: "http",
						order: 15,
						title: (0, E.localize)(2070, null),
						type: "object",
						scope: s,
						properties: {
							"http.proxy": {
								type: "string",
								pattern:
									"^(https?|socks|socks4a?|socks5h?)://([^:]*(:[^@]*)?@)?([^:]+|\\[[:0-9a-fA-F]+\\])(:\\d+)?/?$|^$",
								markdownDescription: (0, E.localize)(2071, null),
								restricted: !0,
							},
							"http.proxyStrictSSL": {
								type: "boolean",
								default: !0,
								description: (0, E.localize)(2072, null),
								restricted: !0,
							},
							"http.proxyKerberosServicePrincipal": {
								type: "string",
								markdownDescription: (0, E.localize)(2073, null),
								restricted: !0,
							},
							"http.noProxy": {
								type: "array",
								items: { type: "string" },
								markdownDescription: (0, E.localize)(2074, null),
								restricted: !0,
							},
							"http.proxyAuthorization": {
								type: ["null", "string"],
								default: null,
								markdownDescription: (0, E.localize)(2075, null),
								restricted: !0,
							},
							"http.proxySupport": {
								type: "string",
								enum: ["off", "on", "fallback", "override"],
								enumDescriptions: [
									(0, E.localize)(2076, null),
									(0, E.localize)(2077, null),
									(0, E.localize)(2078, null),
									(0, E.localize)(2079, null),
								],
								default: "override",
								description: (0, E.localize)(2080, null),
								restricted: !0,
							},
							"http.systemCertificates": {
								type: "boolean",
								default: !0,
								description: (0, E.localize)(2081, null),
								restricted: !0,
							},
							"http.experimental.systemCertificatesV2": {
								type: "boolean",
								tags: ["experimental"],
								default: !1,
								description: (0, E.localize)(2082, null),
								restricted: !0,
							},
						},
					}),
						l.updateConfigurations({ add: [f], remove: y ? [y] : [] });
				}
				b(C.ConfigurationScope.APPLICATION);
			},
		),
		