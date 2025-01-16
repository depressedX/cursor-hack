define(de[2870], he([1, 0, 3, 1210, 1668]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$p3c = m),
				(w = mt(w));
			function E(r, u) {
				return u.onProcessConfigUpdate((a) => {
					((0, i.getProcessGlobalState)().enabled = a.enabled),
						((0, i.getProcessGlobalState)().loggerSampleRate =
							a.loggerSampleRate),
						((0, i.getProcessGlobalState)().tracesSampleRate =
							a.tracesSampleRate);
				});
			}
			function C(r, u, a = w.makePromiseBuffer(64)) {
				const h = {
						flush: (n) => a.drain(n),
						send: (n) =>
							a
								.add(() => u.sendEnvelope(r, n))
								.then(
									(g) => ({ statusCode: 200 }),
									(g) => {
										if (g instanceof w.SentryError) return {};
										throw g;
									},
								),
					},
					c = (0, i.getProcessGlobalState)().buffer;
				for (const n of c) h.send(n);
				return (
					((0, i.getProcessGlobalState)().buffer = []),
					((0, i.getProcessGlobalState)().transport = h),
					t.$1c.None
				);
			}
			function d(r, u) {
				if (r === "main") return t.$1c.None;
				const a = (h) => {
					const c = {};
					h.breadcrumbs.length > 0 && (c.breadcrumbs = h.breadcrumbs),
						Object.keys(c).length > 0 && u.sendScopeUpdate(r, c);
				};
				return (
					w.getIsolationScope().addScopeListener((h) => {
						a(h.getScopeData()), w.getIsolationScope().clearBreadcrumbs();
					}),
					a(w.getIsolationScope().getScopeData()),
					w.getIsolationScope().clearBreadcrumbs(),
					t.$1c.None
				);
			}
			function m(r, u) {
				const a = new t.$Zc();
				return a.add(E(r, u)), a.add(C(r, u)), a.add(d(r, u)), a;
			}
		}),
		define(
			de[216],
			he([1, 0, 15, 29, 1210, 1668]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HOb = void 0),
					(e.span = d),
					(e.$JOb = m),
					(e.$KOb = r),
					(e.$LOb = a),
					(e.$MOb = h),
					(e.$NOb = c),
					(e.$OOb = n),
					(E = mt(E)),
					typeof Symbol.dispose != "symbol" &&
						Object.defineProperty(Symbol, "dispose", {
							value: Symbol("Symbol.dispose"),
						}),
					typeof Symbol.asyncDispose != "symbol" &&
						Object.defineProperty(Symbol, "asyncDispose", {
							value: Symbol("Symbol.asyncDispose"),
						}),
					(e.$HOb = "traceparent");
				function C() {
					return !(0, w.getProcessGlobalState)().enabled;
				}
				function d(g) {
					if (C()) return new u(void 0);
					let p;
					const o = (0, w.getProcessGlobalState)().tracesSampleRate;
					return (
						Math.random() < o &&
							E.startSpanManual({ name: g, parentSpan: null }, (f) => {
								(p = f),
									p.setAttributes({
										[E.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: o,
									});
							}),
						new u(p)
					);
				}
				function m(g, p) {
					const o = d(g);
					try {
						const f = p(o);
						return (0, t.$yh)(f)
							? Promise.resolve(f)
									.catch((b) => {
										throw (o.setError(), b);
									})
									.finally(() => {
										o.end();
									})
							: (o.end(), f);
					} catch (f) {
						throw (o.setError(), o.end(), f);
					}
				}
				function r(g) {
					return function (p, o, f) {
						const b = f.value;
						return (
							(f.value = function (...s) {
								return m(g, () => b.apply(this, s));
							}),
							f
						);
					};
				}
				class u {
					constructor(p) {
						(this.a = !1), (this.b = p);
					}
					end() {
						this.a || (this.b?.end(), (this.a = !0));
					}
					spanContext() {
						return this.b?.spanContext();
					}
					setAttribute(p, o) {
						this.b?.setAttribute(p, o);
					}
					setError(p) {
						this.b?.setStatus({ code: 2, message: p ?? "internal_error" });
					}
					[Symbol.dispose]() {
						this.end();
					}
				}
				function a(g) {
					C() || E.getIsolationScope().addBreadcrumb(g);
				}
				function h(g) {
					C() ||
						(0, i.$8)(g) ||
						i.$fb.isErrorNoTelemetry(g) ||
						E.getCurrentScope().captureException(g);
				}
				function c(g) {
					const p = g?.spanContext(),
						o =
							p?.traceId ?? E.getCurrentScope().getPropagationContext().traceId,
						f = p?.spanId ?? E.uuid4().substring(16),
						b = p?.traceFlags === 1 ? "01" : "00";
					return `00-${o}-${f}-${b}`;
				}
				function n(g) {
					g === void 0 ||
						g === "" ||
						E.getCurrentScope().setPropagationContext({
							...E.getCurrentScope().getPropagationContext(),
							traceId: g,
						});
				}
			},
		),
		define(
			de[414],
			he([1, 0, 24, 33, 29, 23, 46, 69, 541, 216]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$POb = h),
					(e.$QOb = c),
					(e.$ROb = n),
					(e.$SOb = g),
					(e.$TOb = p),
					(e.$UOb = o);
				function u(f, b) {
					return b.uri.scheme === f.uri.scheme
						? !0
						: !(0, E.$Wg)(
								b.uri,
								E.Schemas.walkThroughSnippet,
								E.Schemas.vscodeChatCodeBlock,
								E.Schemas.vscodeChatCodeCompareBlock,
							);
				}
				async function a(f, b, s, l, y) {
					const v = s.ordered(f, l).map((I) =>
							Promise.resolve(y(I, f, b)).then(void 0, (T) => {
								(0, w.$5)(T);
							}),
						),
						S = await Promise.all(v);
					return (0, t.$Lb)(S.flat()).filter((I) => u(f, I));
				}
				function h(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getDefinitionsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideDefinition(v, S, y)),
					);
				}
				function c(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getDeclarationsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideDeclaration(v, S, y)),
					);
				}
				function n(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getImplementationsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideImplementation(v, S, y)),
					);
				}
				function g(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getTypeDefinitionsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideTypeDefinition(v, S, y)),
					);
				}
				function p(f, b, s, l, y, $) {
					return (0, r.$JOb)("gotoSymbol.getReferencesAtPosition", () =>
						a(b, s, f, y, async (v, S, I) => {
							const T = (
								await v.provideReferences(S, I, { includeDeclaration: !0 }, $)
							)?.filter((k) => u(S, k));
							if (!l || !T || T.length !== 2) return T;
							const P = (
								await v.provideReferences(S, I, { includeDeclaration: !1 }, $)
							)?.filter((k) => u(S, k));
							return P && P.length === 1 ? P : T;
						}),
					);
				}
				async function o(f) {
					const b = await f(),
						s = new m.$pNb(b, ""),
						l = s.references.map((y) => y.link);
					return s.dispose(), l;
				}
				(0, C.$ltb)("_executeDefinitionProvider", (f, b, s) => {
					const l = f.get(d.$k3),
						y = h(l.definitionProvider, b, s, !1, i.CancellationToken.None);
					return o(() => y);
				}),
					(0, C.$ltb)("_executeDefinitionProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = h(l.definitionProvider, b, s, !0, i.CancellationToken.None);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeTypeDefinitionProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = g(
								l.typeDefinitionProvider,
								b,
								s,
								!1,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeTypeDefinitionProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = g(
								l.typeDefinitionProvider,
								b,
								s,
								!0,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeDeclarationProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = c(l.declarationProvider, b, s, !1, i.CancellationToken.None);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeDeclarationProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = c(l.declarationProvider, b, s, !0, i.CancellationToken.None);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeReferenceProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = p(
								l.referenceProvider,
								b,
								s,
								!1,
								!1,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeReferenceProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = p(
								l.referenceProvider,
								b,
								s,
								!1,
								!0,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeImplementationProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = n(
								l.implementationProvider,
								b,
								s,
								!1,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeImplementationProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = n(
								l.implementationProvider,
								b,
								s,
								!0,
								i.CancellationToken.None,
							);
						return o(() => y);
					});
			},
		),
		