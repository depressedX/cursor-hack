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
		