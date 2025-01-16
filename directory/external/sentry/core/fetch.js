define(
			de[2124],
			he([1, 0, 80, 234, 453, 640, 888, 638, 301]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.instrumentFetchRequest = r),
					(e.addTracingHeadersToFetchRequest = u);
				function r(n, g, p, o, f = "auto.http.browser") {
					if (!n.fetchData) return;
					const b = (0, d.hasTracingEnabled)() && g(n.fetchData.url);
					if (n.endTimestamp && b) {
						const P = n.fetchData.__span;
						if (!P) return;
						const k = o[P];
						k && (h(k, n), delete o[P]);
						return;
					}
					const s = (0, i.getCurrentScope)(),
						l = (0, i.getClient)(),
						{ method: y, url: $ } = n.fetchData,
						v = a($),
						S = v ? (0, t.parseUrl)(v).host : void 0,
						I = !!(0, m.getActiveSpan)(),
						T =
							b && I
								? (0, E.startInactiveSpan)({
										name: `${y} ${$}`,
										attributes: {
											url: $,
											type: "fetch",
											"http.method": y,
											"http.url": v,
											"server.address": S,
											[w.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
											[w.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
										},
									})
								: new C.SentryNonRecordingSpan();
					if (
						((n.fetchData.__span = T.spanContext().spanId),
						(o[T.spanContext().spanId] = T),
						p(n.fetchData.url) && l)
					) {
						const P = n.args[0];
						n.args[1] = n.args[1] || {};
						const k = n.args[1];
						k.headers = u(
							P,
							l,
							s,
							k,
							(0, d.hasTracingEnabled)() && I ? T : void 0,
						);
					}
					return T;
				}
				function u(n, g, p, o, f) {
					const b = (0, i.getIsolationScope)(),
						{
							traceId: s,
							spanId: l,
							sampled: y,
							dsc: $,
						} = { ...b.getPropagationContext(), ...p.getPropagationContext() },
						v = f
							? (0, m.spanToTraceHeader)(f)
							: (0, t.generateSentryTraceHeader)(s, l, y),
						S = (0, t.dynamicSamplingContextToSentryBaggageHeader)(
							$ ||
								(f
									? (0, E.getDynamicSamplingContextFromSpan)(f)
									: (0, E.getDynamicSamplingContextFromClient)(s, g)),
						),
						I =
							o.headers ||
							(typeof Request < "u" && (0, t.isInstanceOf)(n, Request)
								? n.headers
								: void 0);
					if (I)
						if (typeof Headers < "u" && (0, t.isInstanceOf)(I, Headers)) {
							const T = new Headers(I);
							if ((T.set("sentry-trace", v), S)) {
								const P = T.get(t.BAGGAGE_HEADER_NAME);
								if (P) {
									const k = c(P);
									T.set(t.BAGGAGE_HEADER_NAME, k ? `${k},${S}` : S);
								} else T.set(t.BAGGAGE_HEADER_NAME, S);
							}
							return T;
						} else if (Array.isArray(I)) {
							const T = [
								...I.filter(
									(P) => !(Array.isArray(P) && P[0] === "sentry-trace"),
								).map((P) => {
									if (
										Array.isArray(P) &&
										P[0] === t.BAGGAGE_HEADER_NAME &&
										typeof P[1] == "string"
									) {
										const [k, L, ...D] = P;
										return [k, c(L), ...D];
									} else return P;
								}),
								["sentry-trace", v],
							];
							return S && T.push([t.BAGGAGE_HEADER_NAME, S]), T;
						} else {
							const T = "baggage" in I ? I.baggage : void 0;
							let P = [];
							return (
								Array.isArray(T)
									? (P = T.map((k) => (typeof k == "string" ? c(k) : k)).filter(
											(k) => k === "",
										))
									: T && P.push(c(T)),
								S && P.push(S),
								{
									...I,
									"sentry-trace": v,
									baggage: P.length > 0 ? P.join(",") : void 0,
								}
							);
						}
					else return { "sentry-trace": v, baggage: S };
				}
				function a(n) {
					try {
						return new URL(n).href;
					} catch {
						return;
					}
				}
				function h(n, g) {
					if (g.response) {
						(0, E.setHttpStatus)(n, g.response.status);
						const p =
							g.response &&
							g.response.headers &&
							g.response.headers.get("content-length");
						if (p) {
							const o = parseInt(p);
							o > 0 && n.setAttribute("http.response_content_length", o);
						}
					} else
						g.error &&
							n.setStatus({
								code: E.SPAN_STATUS_ERROR,
								message: "internal_error",
							});
					n.end();
				}
				function c(n) {
					return n
						.split(",")
						.filter(
							(g) => !g.split("=")[0].startsWith(t.SENTRY_BAGGAGE_KEY_PREFIX),
						)
						.join(",");
				}
			},
		),
		