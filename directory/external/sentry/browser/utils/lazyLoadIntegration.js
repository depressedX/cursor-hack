define(de[2144], he([1, 0, 144, 386]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.lazyLoadIntegration = C);
			const w = {
					replayIntegration: "replay",
					replayCanvasIntegration: "replay-canvas",
					feedbackIntegration: "feedback",
					feedbackModalIntegration: "feedback-modal",
					feedbackScreenshotIntegration: "feedback-screenshot",
					captureConsoleIntegration: "captureconsole",
					contextLinesIntegration: "contextlines",
					linkedErrorsIntegration: "linkederrors",
					debugIntegration: "debug",
					dedupeIntegration: "dedupe",
					extraErrorDataIntegration: "extraerrordata",
					httpClientIntegration: "httpclient",
					reportingObserverIntegration: "reportingobserver",
					rewriteFramesIntegration: "rewriteframes",
					sessionTimingIntegration: "sessiontiming",
					browserProfilingIntegration: "browserprofiling",
				},
				E = i.WINDOW;
			async function C(m, r) {
				const u = w[m],
					a = (E.Sentry = E.Sentry || {});
				if (!u) throw new Error(`Cannot lazy load integration: ${m}`);
				const h = a[m];
				if (typeof h == "function" && !("_isShim" in h)) return h;
				const c = d(u),
					n = i.WINDOW.document.createElement("script");
				(n.src = c),
					(n.crossOrigin = "anonymous"),
					(n.referrerPolicy = "origin"),
					r && n.setAttribute("nonce", r);
				const g = new Promise((b, s) => {
						n.addEventListener("load", () => b()),
							n.addEventListener("error", s);
					}),
					p = i.WINDOW.document.currentScript,
					o =
						i.WINDOW.document.body ||
						i.WINDOW.document.head ||
						(p && p.parentElement);
				if (o) o.appendChild(n);
				else
					throw new Error(
						`Could not find parent element to insert lazy-loaded ${m} script`,
					);
				try {
					await g;
				} catch {
					throw new Error(`Error when loading integration: ${m}`);
				}
				const f = a[m];
				if (typeof f != "function")
					throw new Error(`Could not load integration: ${m}`);
				return f;
			}
			function d(m) {
				const r = (0, t.getClient)(),
					u = r && r.getOptions(),
					a = (u && u.cdnBaseUrl) || "https://browser.sentry-cdn.com";
				return new URL(`/${t.SDK_VERSION}/${m}.min.js`, a).toString();
			}
		}),
		define(
			de[2145],
			he([
				1, 0, 144, 144, 386, 1453, 1104, 1434, 889, 1435, 2142, 1454, 1456,
				1457, 1458, 1455, 2144,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.lazyLoadIntegration =
						e.browserApiErrorsIntegration =
						e.linkedErrorsIntegration =
						e.httpContextIntegration =
						e.globalHandlersIntegration =
						e.breadcrumbsIntegration =
						e.captureUserFeedback =
						e.showReportDialog =
						e.onLoad =
						e.init =
						e.forceLoad =
						e.getDefaultIntegrations =
						e.createUserFeedbackEnvelope =
						e.exceptionFromError =
						e.eventFromMessage =
						e.eventFromException =
						e.winjsStackLineParser =
						e.opera11StackLineParser =
						e.opera10StackLineParser =
						e.geckoStackLineParser =
						e.chromeStackLineParser =
						e.defaultStackLineParsers =
						e.defaultStackParser =
						e.makeFetchTransport =
						e.BrowserClient =
						e.WINDOW =
						e.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE =
						e.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE =
						e.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN =
						e.SEMANTIC_ATTRIBUTE_SENTRY_OP =
						e.spanToBaggageHeader =
						e.spanToTraceHeader =
						e.spanToJSON =
						e.endSession =
						e.captureSession =
						e.startSession =
						e.parameterize =
						e.dedupeIntegration =
						e.inboundFiltersIntegration =
						e.functionToStringIntegration =
						e.withIsolationScope =
						e.withScope =
						e.setUser =
						e.setTags =
						e.setTag =
						e.setExtras =
						e.setExtra =
						e.setContext =
						e.SDK_VERSION =
						e.suppressTracing =
						e.continueTrace =
						e.Scope =
						e.setCurrentClient =
						e.getGlobalScope =
						e.getIsolationScope =
						e.getCurrentScope =
						e.isInitialized =
						e.getClient =
						e.getCurrentHub =
						e.flush =
						e.lastEventId =
						e.createTransport =
						e.captureMessage =
						e.captureEvent =
						e.captureException =
						e.addIntegration =
						e.addBreadcrumb =
						e.addEventProcessor =
							void 0),
					Object.defineProperty(e, "addEventProcessor", {
						enumerable: !0,
						get: function () {
							return t.addEventProcessor;
						},
					}),
					Object.defineProperty(e, "addBreadcrumb", {
						enumerable: !0,
						get: function () {
							return t.addBreadcrumb;
						},
					}),
					Object.defineProperty(e, "addIntegration", {
						enumerable: !0,
						get: function () {
							return t.addIntegration;
						},
					}),
					Object.defineProperty(e, "captureException", {
						enumerable: !0,
						get: function () {
							return t.captureException;
						},
					}),
					Object.defineProperty(e, "captureEvent", {
						enumerable: !0,
						get: function () {
							return t.captureEvent;
						},
					}),
					Object.defineProperty(e, "captureMessage", {
						enumerable: !0,
						get: function () {
							return t.captureMessage;
						},
					}),
					Object.defineProperty(e, "close", {
						enumerable: !0,
						get: function () {
							return t.close;
						},
					}),
					Object.defineProperty(e, "createTransport", {
						enumerable: !0,
						get: function () {
							return t.createTransport;
						},
					}),
					Object.defineProperty(e, "lastEventId", {
						enumerable: !0,
						get: function () {
							return t.lastEventId;
						},
					}),
					Object.defineProperty(e, "flush", {
						enumerable: !0,
						get: function () {
							return t.flush;
						},
					}),
					Object.defineProperty(e, "getCurrentHub", {
						enumerable: !0,
						get: function () {
							return t.getCurrentHub;
						},
					}),
					Object.defineProperty(e, "getClient", {
						enumerable: !0,
						get: function () {
							return t.getClient;
						},
					}),
					Object.defineProperty(e, "isInitialized", {
						enumerable: !0,
						get: function () {
							return t.isInitialized;
						},
					}),
					Object.defineProperty(e, "getCurrentScope", {
						enumerable: !0,
						get: function () {
							return t.getCurrentScope;
						},
					}),
					Object.defineProperty(e, "getIsolationScope", {
						enumerable: !0,
						get: function () {
							return t.getIsolationScope;
						},
					}),
					Object.defineProperty(e, "getGlobalScope", {
						enumerable: !0,
						get: function () {
							return t.getGlobalScope;
						},
					}),
					Object.defineProperty(e, "setCurrentClient", {
						enumerable: !0,
						get: function () {
							return t.setCurrentClient;
						},
					}),
					Object.defineProperty(e, "Scope", {
						enumerable: !0,
						get: function () {
							return t.Scope;
						},
					}),
					Object.defineProperty(e, "continueTrace", {
						enumerable: !0,
						get: function () {
							return t.continueTrace;
						},
					}),
					Object.defineProperty(e, "suppressTracing", {
						enumerable: !0,
						get: function () {
							return t.suppressTracing;
						},
					}),
					Object.defineProperty(e, "SDK_VERSION", {
						enumerable: !0,
						get: function () {
							return t.SDK_VERSION;
						},
					}),
					Object.defineProperty(e, "setContext", {
						enumerable: !0,
						get: function () {
							return t.setContext;
						},
					}),
					Object.defineProperty(e, "setExtra", {
						enumerable: !0,
						get: function () {
							return t.setExtra;
						},
					}),
					Object.defineProperty(e, "setExtras", {
						enumerable: !0,
						get: function () {
							return t.setExtras;
						},
					}),
					Object.defineProperty(e, "setTag", {
						enumerable: !0,
						get: function () {
							return t.setTag;
						},
					}),
					Object.defineProperty(e, "setTags", {
						enumerable: !0,
						get: function () {
							return t.setTags;
						},
					}),
					Object.defineProperty(e, "setUser", {
						enumerable: !0,
						get: function () {
							return t.setUser;
						},
					}),
					Object.defineProperty(e, "withScope", {
						enumerable: !0,
						get: function () {
							return t.withScope;
						},
					}),
					Object.defineProperty(e, "withIsolationScope", {
						enumerable: !0,
						get: function () {
							return t.withIsolationScope;
						},
					}),
					Object.defineProperty(e, "functionToStringIntegration", {
						enumerable: !0,
						get: function () {
							return t.functionToStringIntegration;
						},
					}),
					Object.defineProperty(e, "inboundFiltersIntegration", {
						enumerable: !0,
						get: function () {
							return t.inboundFiltersIntegration;
						},
					}),
					Object.defineProperty(e, "dedupeIntegration", {
						enumerable: !0,
						get: function () {
							return t.dedupeIntegration;
						},
					}),
					Object.defineProperty(e, "parameterize", {
						enumerable: !0,
						get: function () {
							return t.parameterize;
						},
					}),
					Object.defineProperty(e, "startSession", {
						enumerable: !0,
						get: function () {
							return t.startSession;
						},
					}),
					Object.defineProperty(e, "captureSession", {
						enumerable: !0,
						get: function () {
							return t.captureSession;
						},
					}),
					Object.defineProperty(e, "endSession", {
						enumerable: !0,
						get: function () {
							return t.endSession;
						},
					}),
					Object.defineProperty(e, "spanToJSON", {
						enumerable: !0,
						get: function () {
							return t.spanToJSON;
						},
					}),
					Object.defineProperty(e, "spanToTraceHeader", {
						enumerable: !0,
						get: function () {
							return t.spanToTraceHeader;
						},
					}),
					Object.defineProperty(e, "spanToBaggageHeader", {
						enumerable: !0,
						get: function () {
							return t.spanToBaggageHeader;
						},
					}),
					Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_OP", {
						enumerable: !0,
						get: function () {
							return i.SEMANTIC_ATTRIBUTE_SENTRY_OP;
						},
					}),
					Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", {
						enumerable: !0,
						get: function () {
							return i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
						},
					}),
					Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE", {
						enumerable: !0,
						get: function () {
							return i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
						},
					}),
					Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", {
						enumerable: !0,
						get: function () {
							return i.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
						},
					}),
					Object.defineProperty(e, "WINDOW", {
						enumerable: !0,
						get: function () {
							return w.WINDOW;
						},
					}),
					Object.defineProperty(e, "BrowserClient", {
						enumerable: !0,
						get: function () {
							return E.BrowserClient;
						},
					}),
					Object.defineProperty(e, "makeFetchTransport", {
						enumerable: !0,
						get: function () {
							return C.makeFetchTransport;
						},
					}),
					Object.defineProperty(e, "defaultStackParser", {
						enumerable: !0,
						get: function () {
							return d.defaultStackParser;
						},
					}),
					Object.defineProperty(e, "defaultStackLineParsers", {
						enumerable: !0,
						get: function () {
							return d.defaultStackLineParsers;
						},
					}),
					Object.defineProperty(e, "chromeStackLineParser", {
						enumerable: !0,
						get: function () {
							return d.chromeStackLineParser;
						},
					}),
					Object.defineProperty(e, "geckoStackLineParser", {
						enumerable: !0,
						get: function () {
							return d.geckoStackLineParser;
						},
					}),
					Object.defineProperty(e, "opera10StackLineParser", {
						enumerable: !0,
						get: function () {
							return d.opera10StackLineParser;
						},
					}),
					Object.defineProperty(e, "opera11StackLineParser", {
						enumerable: !0,
						get: function () {
							return d.opera11StackLineParser;
						},
					}),
					Object.defineProperty(e, "winjsStackLineParser", {
						enumerable: !0,
						get: function () {
							return d.winjsStackLineParser;
						},
					}),
					Object.defineProperty(e, "eventFromException", {
						enumerable: !0,
						get: function () {
							return m.eventFromException;
						},
					}),
					Object.defineProperty(e, "eventFromMessage", {
						enumerable: !0,
						get: function () {
							return m.eventFromMessage;
						},
					}),
					Object.defineProperty(e, "exceptionFromError", {
						enumerable: !0,
						get: function () {
							return m.exceptionFromError;
						},
					}),
					Object.defineProperty(e, "createUserFeedbackEnvelope", {
						enumerable: !0,
						get: function () {
							return r.createUserFeedbackEnvelope;
						},
					}),
					Object.defineProperty(e, "getDefaultIntegrations", {
						enumerable: !0,
						get: function () {
							return u.getDefaultIntegrations;
						},
					}),
					Object.defineProperty(e, "forceLoad", {
						enumerable: !0,
						get: function () {
							return u.forceLoad;
						},
					}),
					Object.defineProperty(e, "init", {
						enumerable: !0,
						get: function () {
							return u.init;
						},
					}),
					Object.defineProperty(e, "onLoad", {
						enumerable: !0,
						get: function () {
							return u.onLoad;
						},
					}),
					Object.defineProperty(e, "showReportDialog", {
						enumerable: !0,
						get: function () {
							return u.showReportDialog;
						},
					}),
					Object.defineProperty(e, "captureUserFeedback", {
						enumerable: !0,
						get: function () {
							return u.captureUserFeedback;
						},
					}),
					Object.defineProperty(e, "breadcrumbsIntegration", {
						enumerable: !0,
						get: function () {
							return a.breadcrumbsIntegration;
						},
					}),
					Object.defineProperty(e, "globalHandlersIntegration", {
						enumerable: !0,
						get: function () {
							return h.globalHandlersIntegration;
						},
					}),
					Object.defineProperty(e, "httpContextIntegration", {
						enumerable: !0,
						get: function () {
							return c.httpContextIntegration;
						},
					}),
					Object.defineProperty(e, "linkedErrorsIntegration", {
						enumerable: !0,
						get: function () {
							return n.linkedErrorsIntegration;
						},
					}),
					Object.defineProperty(e, "browserApiErrorsIntegration", {
						enumerable: !0,
						get: function () {
							return g.browserApiErrorsIntegration;
						},
					}),
					Object.defineProperty(e, "lazyLoadIntegration", {
						enumerable: !0,
						get: function () {
							return p.lazyLoadIntegration;
						},
					});
			},
		);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	define(
		de[1105],
		he([1, 0, 2145, 2136, 2135, 2134, 144, 2137, 1459, 2141, 144, 2143, 2139]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.browserProfilingIntegration =
					e.makeBrowserOfflineTransport =
					e.thirdPartyErrorFilterIntegration =
					e.zodErrorsIntegration =
					e.moduleMetadataIntegration =
					e.makeMultiplexedTransport =
					e.setHttpStatus =
					e.getSpanStatusFromHttpCode =
					e.setMeasurement =
					e.getSpanDescendants =
					e.startNewTrace =
					e.withActiveSpan =
					e.startSpanManual =
					e.startInactiveSpan =
					e.startSpan =
					e.getRootSpan =
					e.getActiveSpan =
					e.registerSpanErrorInstrumentation =
					e.addTracingExtensions =
					e.startBrowserTracingPageLoadSpan =
					e.startBrowserTracingNavigationSpan =
					e.browserTracingIntegration =
					e.instrumentOutgoingRequests =
					e.defaultRequestInstrumentationOptions =
					e.captureFeedback =
					e.sessionTimingIntegration =
					e.rewriteFramesIntegration =
					e.extraErrorDataIntegration =
					e.debugIntegration =
					e.captureConsoleIntegration =
					e.contextLinesIntegration =
					e.httpClientIntegration =
					e.reportingObserverIntegration =
						void 0),
				Yi(t, e),
				Object.defineProperty(e, "reportingObserverIntegration", {
					enumerable: !0,
					get: function () {
						return i.reportingObserverIntegration;
					},
				}),
				Object.defineProperty(e, "httpClientIntegration", {
					enumerable: !0,
					get: function () {
						return w.httpClientIntegration;
					},
				}),
				Object.defineProperty(e, "contextLinesIntegration", {
					enumerable: !0,
					get: function () {
						return E.contextLinesIntegration;
					},
				}),
				Object.defineProperty(e, "captureConsoleIntegration", {
					enumerable: !0,
					get: function () {
						return C.captureConsoleIntegration;
					},
				}),
				Object.defineProperty(e, "debugIntegration", {
					enumerable: !0,
					get: function () {
						return C.debugIntegration;
					},
				}),
				Object.defineProperty(e, "extraErrorDataIntegration", {
					enumerable: !0,
					get: function () {
						return C.extraErrorDataIntegration;
					},
				}),
				Object.defineProperty(e, "rewriteFramesIntegration", {
					enumerable: !0,
					get: function () {
						return C.rewriteFramesIntegration;
					},
				}),
				Object.defineProperty(e, "sessionTimingIntegration", {
					enumerable: !0,
					get: function () {
						return C.sessionTimingIntegration;
					},
				}),
				Object.defineProperty(e, "captureFeedback", {
					enumerable: !0,
					get: function () {
						return C.captureFeedback;
					},
				}),
				Yi(d, e),
				Object.defineProperty(e, "defaultRequestInstrumentationOptions", {
					enumerable: !0,
					get: function () {
						return m.defaultRequestInstrumentationOptions;
					},
				}),
				Object.defineProperty(e, "instrumentOutgoingRequests", {
					enumerable: !0,
					get: function () {
						return m.instrumentOutgoingRequests;
					},
				}),
				Object.defineProperty(e, "browserTracingIntegration", {
					enumerable: !0,
					get: function () {
						return r.browserTracingIntegration;
					},
				}),
				Object.defineProperty(e, "startBrowserTracingNavigationSpan", {
					enumerable: !0,
					get: function () {
						return r.startBrowserTracingNavigationSpan;
					},
				}),
				Object.defineProperty(e, "startBrowserTracingPageLoadSpan", {
					enumerable: !0,
					get: function () {
						return r.startBrowserTracingPageLoadSpan;
					},
				}),
				Object.defineProperty(e, "addTracingExtensions", {
					enumerable: !0,
					get: function () {
						return u.addTracingExtensions;
					},
				}),
				Object.defineProperty(e, "registerSpanErrorInstrumentation", {
					enumerable: !0,
					get: function () {
						return u.registerSpanErrorInstrumentation;
					},
				}),
				Object.defineProperty(e, "getActiveSpan", {
					enumerable: !0,
					get: function () {
						return u.getActiveSpan;
					},
				}),
				Object.defineProperty(e, "getRootSpan", {
					enumerable: !0,
					get: function () {
						return u.getRootSpan;
					},
				}),
				Object.defineProperty(e, "startSpan", {
					enumerable: !0,
					get: function () {
						return u.startSpan;
					},
				}),
				Object.defineProperty(e, "startInactiveSpan", {
					enumerable: !0,
					get: function () {
						return u.startInactiveSpan;
					},
				}),
				Object.defineProperty(e, "startSpanManual", {
					enumerable: !0,
					get: function () {
						return u.startSpanManual;
					},
				}),
				Object.defineProperty(e, "withActiveSpan", {
					enumerable: !0,
					get: function () {
						return u.withActiveSpan;
					},
				}),
				Object.defineProperty(e, "startNewTrace", {
					enumerable: !0,
					get: function () {
						return u.startNewTrace;
					},
				}),
				Object.defineProperty(e, "getSpanDescendants", {
					enumerable: !0,
					get: function () {
						return u.getSpanDescendants;
					},
				}),
				Object.defineProperty(e, "setMeasurement", {
					enumerable: !0,
					get: function () {
						return u.setMeasurement;
					},
				}),
				Object.defineProperty(e, "getSpanStatusFromHttpCode", {
					enumerable: !0,
					get: function () {
						return u.getSpanStatusFromHttpCode;
					},
				}),
				Object.defineProperty(e, "setHttpStatus", {
					enumerable: !0,
					get: function () {
						return u.setHttpStatus;
					},
				}),
				Object.defineProperty(e, "makeMultiplexedTransport", {
					enumerable: !0,
					get: function () {
						return u.makeMultiplexedTransport;
					},
				}),
				Object.defineProperty(e, "moduleMetadataIntegration", {
					enumerable: !0,
					get: function () {
						return u.moduleMetadataIntegration;
					},
				}),
				Object.defineProperty(e, "zodErrorsIntegration", {
					enumerable: !0,
					get: function () {
						return u.zodErrorsIntegration;
					},
				}),
				Object.defineProperty(e, "thirdPartyErrorFilterIntegration", {
					enumerable: !0,
					get: function () {
						return u.thirdPartyErrorFilterIntegration;
					},
				}),
				Object.defineProperty(e, "makeBrowserOfflineTransport", {
					enumerable: !0,
					get: function () {
						return a.makeBrowserOfflineTransport;
					},
				}),
				Object.defineProperty(e, "browserProfilingIntegration", {
					enumerable: !0,
					get: function () {
						return h.browserProfilingIntegration;
					},
				});
		},
	),
		