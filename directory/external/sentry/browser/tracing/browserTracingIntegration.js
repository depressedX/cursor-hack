define(
			de[2141],
			he([1, 0, 641, 144, 80, 452, 386, 2140, 1459]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.browserTracingIntegration = e.BROWSER_TRACING_INTEGRATION_ID =
						void 0),
					(e.startBrowserTracingPageLoadSpan = u),
					(e.startBrowserTracingNavigationSpan = a),
					(e.getMetaContent = h),
					(e.BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing");
				const r = {
					...i.TRACING_DEFAULTS,
					instrumentNavigation: !0,
					instrumentPageLoad: !0,
					markBackgroundSpan: !0,
					enableLongTask: !0,
					enableLongAnimationFrame: !0,
					enableInp: !0,
					_experiments: {},
					...m.defaultRequestInstrumentationOptions,
				};
				e.browserTracingIntegration = (n = {}) => {
					(0, i.registerSpanErrorInstrumentation)();
					const {
							enableInp: g,
							enableLongTask: p,
							enableLongAnimationFrame: o,
							_experiments: {
								enableInteractions: f,
								enableStandaloneClsSpans: b,
							},
							beforeStartSpan: s,
							idleTimeout: l,
							finalTimeout: y,
							childSpanTimeout: $,
							markBackgroundSpan: v,
							traceFetch: S,
							traceXHR: I,
							trackFetchStreamPerformance: T,
							shouldCreateSpanForRequest: P,
							enableHTTPTimings: k,
							instrumentPageLoad: L,
							instrumentNavigation: D,
						} = { ...r, ...n },
						M = (0, t.startTrackingWebVitals)({
							recordClsStandaloneSpans: b || !1,
						});
					g && (0, t.startTrackingINP)(),
						o &&
						w.GLOBAL_OBJ.PerformanceObserver &&
						PerformanceObserver.supportedEntryTypes &&
						PerformanceObserver.supportedEntryTypes.includes(
							"long-animation-frame",
						)
							? (0, t.startTrackingLongAnimationFrames)()
							: p && (0, t.startTrackingLongTasks)(),
						f && (0, t.startTrackingInteractions)();
					const N = { name: void 0, source: void 0 };
					function A(R, O) {
						const B = O.op === "pageload",
							U = s ? s(O) : O,
							z = U.attributes || {};
						O.name !== U.name &&
							((z[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom"),
							(U.attributes = z)),
							(N.name = U.name),
							(N.source = z[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]);
						const F = (0, i.startIdleSpan)(U, {
							idleTimeout: l,
							finalTimeout: y,
							childSpanTimeout: $,
							disableAutoFinish: B,
							beforeSpanEnd: (H) => {
								M(),
									(0, t.addPerformanceEntries)(H, {
										recordClsOnPageloadSpan: !b,
									});
							},
						});
						function x() {
							["interactive", "complete"].includes(
								C.WINDOW.document.readyState,
							) && R.emit("idleSpanEnableAutoFinish", F);
						}
						return (
							B &&
								C.WINDOW.document &&
								(C.WINDOW.document.addEventListener("readystatechange", () => {
									x();
								}),
								x()),
							F
						);
					}
					return {
						name: e.BROWSER_TRACING_INTEGRATION_ID,
						afterAllSetup(R) {
							let O,
								B = C.WINDOW.location && C.WINDOW.location.href;
							R.on("startNavigationSpan", (U) => {
								(0, i.getClient)() === R &&
									(O &&
										!(0, i.spanToJSON)(O).timestamp &&
										(E.DEBUG_BUILD &&
											w.logger.log(
												`[Tracing] Finishing current root span with op: ${((0, i.spanToJSON))(O).op}`,
											),
										O.end()),
									(O = A(R, { op: "navigation", ...U })));
							}),
								R.on("startPageLoadSpan", (U, z = {}) => {
									if ((0, i.getClient)() !== R) return;
									O &&
										!(0, i.spanToJSON)(O).timestamp &&
										(E.DEBUG_BUILD &&
											w.logger.log(
												`[Tracing] Finishing current root span with op: ${((0, i.spanToJSON))(O).op}`,
											),
										O.end());
									const F = z.sentryTrace || h("sentry-trace"),
										x = z.baggage || h("baggage"),
										H = (0, w.propagationContextFromHeaders)(F, x);
									(0, i.getCurrentScope)().setPropagationContext(H),
										(O = A(R, { op: "pageload", ...U }));
								}),
								R.on("spanEnd", (U) => {
									const z = (0, i.spanToJSON)(U).op;
									if (
										U !== (0, i.getRootSpan)(U) ||
										(z !== "navigation" && z !== "pageload")
									)
										return;
									const F = (0, i.getCurrentScope)(),
										x = F.getPropagationContext();
									F.setPropagationContext({
										...x,
										sampled:
											x.sampled !== void 0
												? x.sampled
												: (0, i.spanIsSampled)(U),
										dsc: x.dsc || (0, i.getDynamicSamplingContextFromSpan)(U),
									});
								}),
								C.WINDOW.location &&
									(L &&
										u(R, {
											name: C.WINDOW.location.pathname,
											startTime: w.browserPerformanceTimeOrigin
												? w.browserPerformanceTimeOrigin / 1e3
												: void 0,
											attributes: {
												[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
												[i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
													"auto.pageload.browser",
											},
										}),
									D &&
										(0, t.addHistoryInstrumentationHandler)(
											({ to: U, from: z }) => {
												if (z === void 0 && B && B.indexOf(U) !== -1) {
													B = void 0;
													return;
												}
												z !== U &&
													((B = void 0),
													a(R, {
														name: C.WINDOW.location.pathname,
														attributes: {
															[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
															[i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
																"auto.navigation.browser",
														},
													}));
											},
										)),
								v && (0, d.registerBackgroundTabDetection)(),
								f && c(l, y, $, N),
								g && (0, t.registerInpInteractionListener)(),
								(0, m.instrumentOutgoingRequests)(R, {
									traceFetch: S,
									traceXHR: I,
									trackFetchStreamPerformance: T,
									tracePropagationTargets:
										R.getOptions().tracePropagationTargets,
									shouldCreateSpanForRequest: P,
									enableHTTPTimings: k,
								});
						},
					};
				};
				function u(n, g, p) {
					n.emit("startPageLoadSpan", g, p),
						(0, i.getCurrentScope)().setTransactionName(g.name);
					const o = (0, i.getActiveSpan)();
					return (o && (0, i.spanToJSON)(o).op) === "pageload" ? o : void 0;
				}
				function a(n, g) {
					(0, i.getIsolationScope)().setPropagationContext(
						(0, w.generatePropagationContext)(),
					),
						(0, i.getCurrentScope)().setPropagationContext(
							(0, w.generatePropagationContext)(),
						),
						n.emit("startNavigationSpan", g),
						(0, i.getCurrentScope)().setTransactionName(g.name);
					const p = (0, i.getActiveSpan)();
					return (p && (0, i.spanToJSON)(p).op) === "navigation" ? p : void 0;
				}
				function h(n) {
					const g = (0, w.getDomElement)(`meta[name=${n}]`);
					return g ? g.getAttribute("content") : void 0;
				}
				function c(n, g, p, o) {
					let f;
					const b = () => {
						const s = "ui.action.click",
							l = (0, i.getActiveSpan)(),
							y = l && (0, i.getRootSpan)(l);
						if (y) {
							const $ = (0, i.spanToJSON)(y).op;
							if (["navigation", "pageload"].includes($)) {
								E.DEBUG_BUILD &&
									w.logger.warn(
										`[Tracing] Did not create ${s} span because a pageload or navigation span is in progress.`,
									);
								return;
							}
						}
						if (
							(f &&
								(f.setAttribute(
									i.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
									"interactionInterrupted",
								),
								f.end(),
								(f = void 0)),
							!o.name)
						) {
							E.DEBUG_BUILD &&
								w.logger.warn(
									`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`,
								);
							return;
						}
						f = (0, i.startIdleSpan)(
							{
								name: o.name,
								op: s,
								attributes: {
									[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: o.source || "url",
								},
							},
							{ idleTimeout: n, finalTimeout: g, childSpanTimeout: p },
						);
					};
					C.WINDOW.document &&
						addEventListener("click", b, { once: !1, capture: !0 });
				}
			},
		),
		