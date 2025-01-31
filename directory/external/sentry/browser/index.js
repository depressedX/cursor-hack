import '../../../require.js';
import '../../../exports.js';
import './exports.js';
import './integrations/reportingobserver.js';
import './integrations/httpclient.js';
import './integrations/contextlines.js';
import '../core/index.js';
import './metrics.js';
import './tracing/request.js';
import './tracing/browserTracingIntegration.js';
import '../core/index.js';
import './transports/offline.js';
import './profiling/integration.js';
define(
		de[1105],
		he([1, 0, 2145, 2136, 2135, 2134, 144, 2137, 1459, 2141, 144, 2143, 2139]),
		function (ce /*require*/,
 e /*exports*/,
 t /*exports*/,
 i /*reportingobserver*/,
 w /*httpclient*/,
 E /*contextlines*/,
 C /*index*/,
 d /*metrics*/,
 m /*request*/,
 r /*browserTracingIntegration*/,
 u /*index*/,
 a /*offline*/,
 h /*integration*/) {
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
	)
