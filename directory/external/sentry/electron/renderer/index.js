import '../../../../require.js';
import '../../../../exports.js';
import '../../browser/index.js';
import './integrations/scope-to-main.js';
import './transport.js';
import './sdk.js';
import './stack-parse.js';
import './metrics.js';
define(
		de[2151],
		he([1, 0, 1105, 1460, 1462, 2150, 1461, 2149]),
		function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*scope-to-main*/,
 w /*transport*/,
 E /*sdk*/,
 C /*stack-parse*/,
 d /*metrics*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.defaultStackParser =
					e.getDefaultIntegrations =
					e.init =
					e.makeRendererTransport =
					e.scopeToMainIntegration =
					e.zodErrorsIntegration =
					e.withScope =
					e.withIsolationScope =
					e.withActiveSpan =
					e.thirdPartyErrorFilterIntegration =
					e.suppressTracing =
					e.startSpanManual =
					e.startSpan =
					e.startSession =
					e.startNewTrace =
					e.startInactiveSpan =
					e.startBrowserTracingPageLoadSpan =
					e.startBrowserTracingNavigationSpan =
					e.spanToTraceHeader =
					e.spanToJSON =
					e.spanToBaggageHeader =
					e.showReportDialog =
					e.setUser =
					e.setTags =
					e.setTag =
					e.setMeasurement =
					e.setHttpStatus =
					e.setExtras =
					e.setExtra =
					e.setCurrentClient =
					e.setContext =
					e.sessionTimingIntegration =
					e.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE =
					e.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE =
					e.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN =
					e.SEMANTIC_ATTRIBUTE_SENTRY_OP =
					e.Scope =
					e.rewriteFramesIntegration =
					e.reportingObserverIntegration =
					e.registerSpanErrorInstrumentation =
					e.parameterize =
					e.onLoad =
					e.moduleMetadataIntegration =
					e.linkedErrorsIntegration =
					e.lastEventId =
					e.isInitialized =
					e.instrumentOutgoingRequests =
					e.inboundFiltersIntegration =
					e.httpContextIntegration =
					e.httpClientIntegration =
					e.globalHandlersIntegration =
					e.getSpanStatusFromHttpCode =
					e.getSpanDescendants =
					e.getRootSpan =
					e.getIsolationScope =
					e.getGlobalScope =
					e.getCurrentScope =
					e.getCurrentHub =
					e.getClient =
					e.getActiveSpan =
					e.functionToStringIntegration =
					e.forceLoad =
					e.extraErrorDataIntegration =
					e.exceptionFromError =
					e.eventFromMessage =
					e.eventFromException =
					e.endSession =
					e.defaultRequestInstrumentationOptions =
					e.dedupeIntegration =
					e.debugIntegration =
					e.createUserFeedbackEnvelope =
					e.createTransport =
					e.continueTrace =
					e.contextLinesIntegration =
					e.chromeStackLineParser =
					e.captureSession =
					e.captureMessage =
					e.captureFeedback =
					e.captureException =
					e.captureEvent =
					e.captureConsoleIntegration =
					e.browserTracingIntegration =
					e.browserProfilingIntegration =
					e.BrowserClient =
					e.browserApiErrorsIntegration =
					e.breadcrumbsIntegration =
					e.addTracingExtensions =
					e.addIntegration =
					e.addEventProcessor =
					e.addBreadcrumb =
						void 0),
				Object.defineProperty(e, "addBreadcrumb", {
					enumerable: !0,
					get: function () {
						return t.addBreadcrumb;
					},
				}),
				Object.defineProperty(e, "addEventProcessor", {
					enumerable: !0,
					get: function () {
						return t.addEventProcessor;
					},
				}),
				Object.defineProperty(e, "addIntegration", {
					enumerable: !0,
					get: function () {
						return t.addIntegration;
					},
				}),
				Object.defineProperty(e, "addTracingExtensions", {
					enumerable: !0,
					get: function () {
						return t.addTracingExtensions;
					},
				}),
				Object.defineProperty(e, "breadcrumbsIntegration", {
					enumerable: !0,
					get: function () {
						return t.breadcrumbsIntegration;
					},
				}),
				Object.defineProperty(e, "browserApiErrorsIntegration", {
					enumerable: !0,
					get: function () {
						return t.browserApiErrorsIntegration;
					},
				}),
				Object.defineProperty(e, "BrowserClient", {
					enumerable: !0,
					get: function () {
						return t.BrowserClient;
					},
				}),
				Object.defineProperty(e, "browserProfilingIntegration", {
					enumerable: !0,
					get: function () {
						return t.browserProfilingIntegration;
					},
				}),
				Object.defineProperty(e, "browserTracingIntegration", {
					enumerable: !0,
					get: function () {
						return t.browserTracingIntegration;
					},
				}),
				Object.defineProperty(e, "captureConsoleIntegration", {
					enumerable: !0,
					get: function () {
						return t.captureConsoleIntegration;
					},
				}),
				Object.defineProperty(e, "captureEvent", {
					enumerable: !0,
					get: function () {
						return t.captureEvent;
					},
				}),
				Object.defineProperty(e, "captureException", {
					enumerable: !0,
					get: function () {
						return t.captureException;
					},
				}),
				Object.defineProperty(e, "captureFeedback", {
					enumerable: !0,
					get: function () {
						return t.captureFeedback;
					},
				}),
				Object.defineProperty(e, "captureMessage", {
					enumerable: !0,
					get: function () {
						return t.captureMessage;
					},
				}),
				Object.defineProperty(e, "captureSession", {
					enumerable: !0,
					get: function () {
						return t.captureSession;
					},
				}),
				Object.defineProperty(e, "chromeStackLineParser", {
					enumerable: !0,
					get: function () {
						return t.chromeStackLineParser;
					},
				}),
				Object.defineProperty(e, "contextLinesIntegration", {
					enumerable: !0,
					get: function () {
						return t.contextLinesIntegration;
					},
				}),
				Object.defineProperty(e, "continueTrace", {
					enumerable: !0,
					get: function () {
						return t.continueTrace;
					},
				}),
				Object.defineProperty(e, "createTransport", {
					enumerable: !0,
					get: function () {
						return t.createTransport;
					},
				}),
				Object.defineProperty(e, "createUserFeedbackEnvelope", {
					enumerable: !0,
					get: function () {
						return t.createUserFeedbackEnvelope;
					},
				}),
				Object.defineProperty(e, "debugIntegration", {
					enumerable: !0,
					get: function () {
						return t.debugIntegration;
					},
				}),
				Object.defineProperty(e, "dedupeIntegration", {
					enumerable: !0,
					get: function () {
						return t.dedupeIntegration;
					},
				}),
				Object.defineProperty(e, "defaultRequestInstrumentationOptions", {
					enumerable: !0,
					get: function () {
						return t.defaultRequestInstrumentationOptions;
					},
				}),
				Object.defineProperty(e, "endSession", {
					enumerable: !0,
					get: function () {
						return t.endSession;
					},
				}),
				Object.defineProperty(e, "eventFromException", {
					enumerable: !0,
					get: function () {
						return t.eventFromException;
					},
				}),
				Object.defineProperty(e, "eventFromMessage", {
					enumerable: !0,
					get: function () {
						return t.eventFromMessage;
					},
				}),
				Object.defineProperty(e, "exceptionFromError", {
					enumerable: !0,
					get: function () {
						return t.exceptionFromError;
					},
				}),
				Object.defineProperty(e, "extraErrorDataIntegration", {
					enumerable: !0,
					get: function () {
						return t.extraErrorDataIntegration;
					},
				}),
				Object.defineProperty(e, "forceLoad", {
					enumerable: !0,
					get: function () {
						return t.forceLoad;
					},
				}),
				Object.defineProperty(e, "functionToStringIntegration", {
					enumerable: !0,
					get: function () {
						return t.functionToStringIntegration;
					},
				}),
				Object.defineProperty(e, "getActiveSpan", {
					enumerable: !0,
					get: function () {
						return t.getActiveSpan;
					},
				}),
				Object.defineProperty(e, "getClient", {
					enumerable: !0,
					get: function () {
						return t.getClient;
					},
				}),
				Object.defineProperty(e, "getCurrentHub", {
					enumerable: !0,
					get: function () {
						return t.getCurrentHub;
					},
				}),
				Object.defineProperty(e, "getCurrentScope", {
					enumerable: !0,
					get: function () {
						return t.getCurrentScope;
					},
				}),
				Object.defineProperty(e, "getGlobalScope", {
					enumerable: !0,
					get: function () {
						return t.getGlobalScope;
					},
				}),
				Object.defineProperty(e, "getIsolationScope", {
					enumerable: !0,
					get: function () {
						return t.getIsolationScope;
					},
				}),
				Object.defineProperty(e, "getRootSpan", {
					enumerable: !0,
					get: function () {
						return t.getRootSpan;
					},
				}),
				Object.defineProperty(e, "getSpanDescendants", {
					enumerable: !0,
					get: function () {
						return t.getSpanDescendants;
					},
				}),
				Object.defineProperty(e, "getSpanStatusFromHttpCode", {
					enumerable: !0,
					get: function () {
						return t.getSpanStatusFromHttpCode;
					},
				}),
				Object.defineProperty(e, "globalHandlersIntegration", {
					enumerable: !0,
					get: function () {
						return t.globalHandlersIntegration;
					},
				}),
				Object.defineProperty(e, "httpClientIntegration", {
					enumerable: !0,
					get: function () {
						return t.httpClientIntegration;
					},
				}),
				Object.defineProperty(e, "httpContextIntegration", {
					enumerable: !0,
					get: function () {
						return t.httpContextIntegration;
					},
				}),
				Object.defineProperty(e, "inboundFiltersIntegration", {
					enumerable: !0,
					get: function () {
						return t.inboundFiltersIntegration;
					},
				}),
				Object.defineProperty(e, "instrumentOutgoingRequests", {
					enumerable: !0,
					get: function () {
						return t.instrumentOutgoingRequests;
					},
				}),
				Object.defineProperty(e, "isInitialized", {
					enumerable: !0,
					get: function () {
						return t.isInitialized;
					},
				}),
				Object.defineProperty(e, "lastEventId", {
					enumerable: !0,
					get: function () {
						return t.lastEventId;
					},
				}),
				Object.defineProperty(e, "linkedErrorsIntegration", {
					enumerable: !0,
					get: function () {
						return t.linkedErrorsIntegration;
					},
				}),
				Object.defineProperty(e, "moduleMetadataIntegration", {
					enumerable: !0,
					get: function () {
						return t.moduleMetadataIntegration;
					},
				}),
				Object.defineProperty(e, "onLoad", {
					enumerable: !0,
					get: function () {
						return t.onLoad;
					},
				}),
				Object.defineProperty(e, "parameterize", {
					enumerable: !0,
					get: function () {
						return t.parameterize;
					},
				}),
				Object.defineProperty(e, "registerSpanErrorInstrumentation", {
					enumerable: !0,
					get: function () {
						return t.registerSpanErrorInstrumentation;
					},
				}),
				Object.defineProperty(e, "reportingObserverIntegration", {
					enumerable: !0,
					get: function () {
						return t.reportingObserverIntegration;
					},
				}),
				Object.defineProperty(e, "rewriteFramesIntegration", {
					enumerable: !0,
					get: function () {
						return t.rewriteFramesIntegration;
					},
				}),
				Object.defineProperty(e, "Scope", {
					enumerable: !0,
					get: function () {
						return t.Scope;
					},
				}),
				Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_OP", {
					enumerable: !0,
					get: function () {
						return t.SEMANTIC_ATTRIBUTE_SENTRY_OP;
					},
				}),
				Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", {
					enumerable: !0,
					get: function () {
						return t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
					},
				}),
				Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", {
					enumerable: !0,
					get: function () {
						return t.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
					},
				}),
				Object.defineProperty(e, "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE", {
					enumerable: !0,
					get: function () {
						return t.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
					},
				}),
				Object.defineProperty(e, "sessionTimingIntegration", {
					enumerable: !0,
					get: function () {
						return t.sessionTimingIntegration;
					},
				}),
				Object.defineProperty(e, "setContext", {
					enumerable: !0,
					get: function () {
						return t.setContext;
					},
				}),
				Object.defineProperty(e, "setCurrentClient", {
					enumerable: !0,
					get: function () {
						return t.setCurrentClient;
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
				Object.defineProperty(e, "setHttpStatus", {
					enumerable: !0,
					get: function () {
						return t.setHttpStatus;
					},
				}),
				Object.defineProperty(e, "setMeasurement", {
					enumerable: !0,
					get: function () {
						return t.setMeasurement;
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
				Object.defineProperty(e, "showReportDialog", {
					enumerable: !0,
					get: function () {
						return t.showReportDialog;
					},
				}),
				Object.defineProperty(e, "spanToBaggageHeader", {
					enumerable: !0,
					get: function () {
						return t.spanToBaggageHeader;
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
				Object.defineProperty(e, "startBrowserTracingNavigationSpan", {
					enumerable: !0,
					get: function () {
						return t.startBrowserTracingNavigationSpan;
					},
				}),
				Object.defineProperty(e, "startBrowserTracingPageLoadSpan", {
					enumerable: !0,
					get: function () {
						return t.startBrowserTracingPageLoadSpan;
					},
				}),
				Object.defineProperty(e, "startInactiveSpan", {
					enumerable: !0,
					get: function () {
						return t.startInactiveSpan;
					},
				}),
				Object.defineProperty(e, "startNewTrace", {
					enumerable: !0,
					get: function () {
						return t.startNewTrace;
					},
				}),
				Object.defineProperty(e, "startSession", {
					enumerable: !0,
					get: function () {
						return t.startSession;
					},
				}),
				Object.defineProperty(e, "startSpan", {
					enumerable: !0,
					get: function () {
						return t.startSpan;
					},
				}),
				Object.defineProperty(e, "startSpanManual", {
					enumerable: !0,
					get: function () {
						return t.startSpanManual;
					},
				}),
				Object.defineProperty(e, "suppressTracing", {
					enumerable: !0,
					get: function () {
						return t.suppressTracing;
					},
				}),
				Object.defineProperty(e, "thirdPartyErrorFilterIntegration", {
					enumerable: !0,
					get: function () {
						return t.thirdPartyErrorFilterIntegration;
					},
				}),
				Object.defineProperty(e, "withActiveSpan", {
					enumerable: !0,
					get: function () {
						return t.withActiveSpan;
					},
				}),
				Object.defineProperty(e, "withIsolationScope", {
					enumerable: !0,
					get: function () {
						return t.withIsolationScope;
					},
				}),
				Object.defineProperty(e, "withScope", {
					enumerable: !0,
					get: function () {
						return t.withScope;
					},
				}),
				Object.defineProperty(e, "zodErrorsIntegration", {
					enumerable: !0,
					get: function () {
						return t.zodErrorsIntegration;
					},
				}),
				Object.defineProperty(e, "scopeToMainIntegration", {
					enumerable: !0,
					get: function () {
						return i.scopeToMainIntegration;
					},
				}),
				Object.defineProperty(e, "makeRendererTransport", {
					enumerable: !0,
					get: function () {
						return w.makeRendererTransport;
					},
				}),
				Object.defineProperty(e, "init", {
					enumerable: !0,
					get: function () {
						return E.init;
					},
				}),
				Object.defineProperty(e, "getDefaultIntegrations", {
					enumerable: !0,
					get: function () {
						return E.getDefaultIntegrations;
					},
				}),
				Object.defineProperty(e, "defaultStackParser", {
					enumerable: !0,
					get: function () {
						return C.electronRendererStackParser;
					},
				}),
				Yi(d, e);
		},
	),
		