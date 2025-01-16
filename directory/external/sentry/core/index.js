define(
		de[144],
		he([
			1, 0, 640, 453, 1099, 734, 234, 1441, 733, 578, 887, 1443, 732, 1437,
			1094, 1451, 2128, 2119, 2100, 2102, 2101, 316, 1450, 1101, 1436, 638,
			2058, 1097, 2059, 301, 1098, 2103, 1452, 2130, 879, 1442, 2109, 2110,
			2111, 2112, 2113, 2127, 2106, 2107, 2108, 2114, 2115, 2117, 2116, 1449,
			2118, 2125, 2121, 1095, 2124, 2129, 2105, 2126, 80,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
			J,
			W,
			X,
			Y,
			ie,
			ne,
			ee,
			_,
			te,
			Q,
			Z,
			se,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SDK_VERSION =
					e.getCurrentHub =
					e.getCurrentHubShim =
					e.captureFeedback =
					e.trpcMiddleware =
					e.instrumentFetchRequest =
					e.addTracingHeadersToFetchRequest =
					e.getMetricSummaryJsonForSpan =
					e.BrowserMetricsAggregator =
					e.metricsDefault =
					e.profiler =
					e.metrics =
					e.thirdPartyErrorFilterIntegration =
					e.zodErrorsIntegration =
					e.sessionTimingIntegration =
					e.rewriteFramesIntegration =
					e.extraErrorDataIntegration =
					e.dedupeIntegration =
					e.debugIntegration =
					e.captureConsoleIntegration =
					e.requestDataIntegration =
					e.moduleMetadataIntegration =
					e.linkedErrorsIntegration =
					e.inboundFiltersIntegration =
					e.functionToStringIntegration =
					e.addBreadcrumb =
					e.DEFAULT_ENVIRONMENT =
					e.getTraceMetaTags =
					e.getTraceData =
					e.applySdkMetadata =
					e.parseSampleRate =
					e.spanTimeInputToSeconds =
					e.addChildSpanToSpan =
					e.getActiveSpan =
					e.getRootSpan =
					e.getStatusMessage =
					e.getSpanDescendants =
					e.spanToTraceContext =
					e.spanIsSampled =
					e.spanToJSON =
					e.spanToTraceHeader =
					e.parameterize =
					e.handleCallbackErrors =
					e.isSentryRequestUrl =
					e.hasTracingEnabled =
					e.createCheckInEnvelope =
					e.prepareEvent =
					e.mergeScopeData =
					e.applyScopeDataToEvent =
					e.defineIntegration =
					e.addIntegration =
					e.getIntegrationsToSetup =
					e.makeMultiplexedTransport =
					e.makeOfflineTransport =
					e.createTransport =
					e.setCurrentClient =
					e.initAndBind =
					e.ServerRuntimeClient =
					e.BaseClient =
					e.getReportDialogEndpoint =
					e.getEnvelopeEndpointWithUrlEncodedAuth =
					e.notifyEventProcessors =
					e.Scope =
					e.SessionFlusher =
					e.updateSession =
					e.closeSession =
					e.makeSession =
					e.getMainCarrier =
					e.setAsyncContextStrategy =
					e.getDefaultIsolationScope =
					e.getDefaultCurrentScope =
					e.getClient =
					e.withIsolationScope =
					e.withScope =
					e.getGlobalScope =
					e.getIsolationScope =
					e.getCurrentScope =
					e.addEventProcessor =
					e.captureSession =
					e.endSession =
					e.startSession =
					e.isEnabled =
					e.isInitialized =
					e.setUser =
					e.setTags =
					e.setTag =
					e.setExtras =
					e.setExtra =
					e.setContext =
					e.flush =
					e.lastEventId =
					e.captureMessage =
					e.captureEvent =
					e.captureException =
					e.withMonitor =
					e.captureCheckIn =
					e.createSpanEnvelope =
					e.createSessionEnvelope =
					e.createEventEnvelope =
						void 0),
				Yi(t, e),
				Yi(i, e),
				Object.defineProperty(e, "createEventEnvelope", {
					enumerable: !0,
					get: function () {
						return w.createEventEnvelope;
					},
				}),
				Object.defineProperty(e, "createSessionEnvelope", {
					enumerable: !0,
					get: function () {
						return w.createSessionEnvelope;
					},
				}),
				Object.defineProperty(e, "createSpanEnvelope", {
					enumerable: !0,
					get: function () {
						return w.createSpanEnvelope;
					},
				}),
				Object.defineProperty(e, "captureCheckIn", {
					enumerable: !0,
					get: function () {
						return E.captureCheckIn;
					},
				}),
				Object.defineProperty(e, "withMonitor", {
					enumerable: !0,
					get: function () {
						return E.withMonitor;
					},
				}),
				Object.defineProperty(e, "captureException", {
					enumerable: !0,
					get: function () {
						return E.captureException;
					},
				}),
				Object.defineProperty(e, "captureEvent", {
					enumerable: !0,
					get: function () {
						return E.captureEvent;
					},
				}),
				Object.defineProperty(e, "captureMessage", {
					enumerable: !0,
					get: function () {
						return E.captureMessage;
					},
				}),
				Object.defineProperty(e, "lastEventId", {
					enumerable: !0,
					get: function () {
						return E.lastEventId;
					},
				}),
				Object.defineProperty(e, "close", {
					enumerable: !0,
					get: function () {
						return E.close;
					},
				}),
				Object.defineProperty(e, "flush", {
					enumerable: !0,
					get: function () {
						return E.flush;
					},
				}),
				Object.defineProperty(e, "setContext", {
					enumerable: !0,
					get: function () {
						return E.setContext;
					},
				}),
				Object.defineProperty(e, "setExtra", {
					enumerable: !0,
					get: function () {
						return E.setExtra;
					},
				}),
				Object.defineProperty(e, "setExtras", {
					enumerable: !0,
					get: function () {
						return E.setExtras;
					},
				}),
				Object.defineProperty(e, "setTag", {
					enumerable: !0,
					get: function () {
						return E.setTag;
					},
				}),
				Object.defineProperty(e, "setTags", {
					enumerable: !0,
					get: function () {
						return E.setTags;
					},
				}),
				Object.defineProperty(e, "setUser", {
					enumerable: !0,
					get: function () {
						return E.setUser;
					},
				}),
				Object.defineProperty(e, "isInitialized", {
					enumerable: !0,
					get: function () {
						return E.isInitialized;
					},
				}),
				Object.defineProperty(e, "isEnabled", {
					enumerable: !0,
					get: function () {
						return E.isEnabled;
					},
				}),
				Object.defineProperty(e, "startSession", {
					enumerable: !0,
					get: function () {
						return E.startSession;
					},
				}),
				Object.defineProperty(e, "endSession", {
					enumerable: !0,
					get: function () {
						return E.endSession;
					},
				}),
				Object.defineProperty(e, "captureSession", {
					enumerable: !0,
					get: function () {
						return E.captureSession;
					},
				}),
				Object.defineProperty(e, "addEventProcessor", {
					enumerable: !0,
					get: function () {
						return E.addEventProcessor;
					},
				}),
				Object.defineProperty(e, "getCurrentScope", {
					enumerable: !0,
					get: function () {
						return C.getCurrentScope;
					},
				}),
				Object.defineProperty(e, "getIsolationScope", {
					enumerable: !0,
					get: function () {
						return C.getIsolationScope;
					},
				}),
				Object.defineProperty(e, "getGlobalScope", {
					enumerable: !0,
					get: function () {
						return C.getGlobalScope;
					},
				}),
				Object.defineProperty(e, "withScope", {
					enumerable: !0,
					get: function () {
						return C.withScope;
					},
				}),
				Object.defineProperty(e, "withIsolationScope", {
					enumerable: !0,
					get: function () {
						return C.withIsolationScope;
					},
				}),
				Object.defineProperty(e, "getClient", {
					enumerable: !0,
					get: function () {
						return C.getClient;
					},
				}),
				Object.defineProperty(e, "getDefaultCurrentScope", {
					enumerable: !0,
					get: function () {
						return d.getDefaultCurrentScope;
					},
				}),
				Object.defineProperty(e, "getDefaultIsolationScope", {
					enumerable: !0,
					get: function () {
						return d.getDefaultIsolationScope;
					},
				}),
				Object.defineProperty(e, "setAsyncContextStrategy", {
					enumerable: !0,
					get: function () {
						return m.setAsyncContextStrategy;
					},
				}),
				Object.defineProperty(e, "getMainCarrier", {
					enumerable: !0,
					get: function () {
						return r.getMainCarrier;
					},
				}),
				Object.defineProperty(e, "makeSession", {
					enumerable: !0,
					get: function () {
						return u.makeSession;
					},
				}),
				Object.defineProperty(e, "closeSession", {
					enumerable: !0,
					get: function () {
						return u.closeSession;
					},
				}),
				Object.defineProperty(e, "updateSession", {
					enumerable: !0,
					get: function () {
						return u.updateSession;
					},
				}),
				Object.defineProperty(e, "SessionFlusher", {
					enumerable: !0,
					get: function () {
						return a.SessionFlusher;
					},
				}),
				Object.defineProperty(e, "Scope", {
					enumerable: !0,
					get: function () {
						return h.Scope;
					},
				}),
				Object.defineProperty(e, "notifyEventProcessors", {
					enumerable: !0,
					get: function () {
						return c.notifyEventProcessors;
					},
				}),
				Object.defineProperty(e, "getEnvelopeEndpointWithUrlEncodedAuth", {
					enumerable: !0,
					get: function () {
						return n.getEnvelopeEndpointWithUrlEncodedAuth;
					},
				}),
				Object.defineProperty(e, "getReportDialogEndpoint", {
					enumerable: !0,
					get: function () {
						return n.getReportDialogEndpoint;
					},
				}),
				Object.defineProperty(e, "BaseClient", {
					enumerable: !0,
					get: function () {
						return g.BaseClient;
					},
				}),
				Object.defineProperty(e, "ServerRuntimeClient", {
					enumerable: !0,
					get: function () {
						return p.ServerRuntimeClient;
					},
				}),
				Object.defineProperty(e, "initAndBind", {
					enumerable: !0,
					get: function () {
						return o.initAndBind;
					},
				}),
				Object.defineProperty(e, "setCurrentClient", {
					enumerable: !0,
					get: function () {
						return o.setCurrentClient;
					},
				}),
				Object.defineProperty(e, "createTransport", {
					enumerable: !0,
					get: function () {
						return f.createTransport;
					},
				}),
				Object.defineProperty(e, "makeOfflineTransport", {
					enumerable: !0,
					get: function () {
						return b.makeOfflineTransport;
					},
				}),
				Object.defineProperty(e, "makeMultiplexedTransport", {
					enumerable: !0,
					get: function () {
						return s.makeMultiplexedTransport;
					},
				}),
				Object.defineProperty(e, "getIntegrationsToSetup", {
					enumerable: !0,
					get: function () {
						return l.getIntegrationsToSetup;
					},
				}),
				Object.defineProperty(e, "addIntegration", {
					enumerable: !0,
					get: function () {
						return l.addIntegration;
					},
				}),
				Object.defineProperty(e, "defineIntegration", {
					enumerable: !0,
					get: function () {
						return l.defineIntegration;
					},
				}),
				Object.defineProperty(e, "applyScopeDataToEvent", {
					enumerable: !0,
					get: function () {
						return y.applyScopeDataToEvent;
					},
				}),
				Object.defineProperty(e, "mergeScopeData", {
					enumerable: !0,
					get: function () {
						return y.mergeScopeData;
					},
				}),
				Object.defineProperty(e, "prepareEvent", {
					enumerable: !0,
					get: function () {
						return $.prepareEvent;
					},
				}),
				Object.defineProperty(e, "createCheckInEnvelope", {
					enumerable: !0,
					get: function () {
						return v.createCheckInEnvelope;
					},
				}),
				Object.defineProperty(e, "hasTracingEnabled", {
					enumerable: !0,
					get: function () {
						return S.hasTracingEnabled;
					},
				}),
				Object.defineProperty(e, "isSentryRequestUrl", {
					enumerable: !0,
					get: function () {
						return I.isSentryRequestUrl;
					},
				}),
				Object.defineProperty(e, "handleCallbackErrors", {
					enumerable: !0,
					get: function () {
						return T.handleCallbackErrors;
					},
				}),
				Object.defineProperty(e, "parameterize", {
					enumerable: !0,
					get: function () {
						return P.parameterize;
					},
				}),
				Object.defineProperty(e, "spanToTraceHeader", {
					enumerable: !0,
					get: function () {
						return k.spanToTraceHeader;
					},
				}),
				Object.defineProperty(e, "spanToJSON", {
					enumerable: !0,
					get: function () {
						return k.spanToJSON;
					},
				}),
				Object.defineProperty(e, "spanIsSampled", {
					enumerable: !0,
					get: function () {
						return k.spanIsSampled;
					},
				}),
				Object.defineProperty(e, "spanToTraceContext", {
					enumerable: !0,
					get: function () {
						return k.spanToTraceContext;
					},
				}),
				Object.defineProperty(e, "getSpanDescendants", {
					enumerable: !0,
					get: function () {
						return k.getSpanDescendants;
					},
				}),
				Object.defineProperty(e, "getStatusMessage", {
					enumerable: !0,
					get: function () {
						return k.getStatusMessage;
					},
				}),
				Object.defineProperty(e, "getRootSpan", {
					enumerable: !0,
					get: function () {
						return k.getRootSpan;
					},
				}),
				Object.defineProperty(e, "getActiveSpan", {
					enumerable: !0,
					get: function () {
						return k.getActiveSpan;
					},
				}),
				Object.defineProperty(e, "addChildSpanToSpan", {
					enumerable: !0,
					get: function () {
						return k.addChildSpanToSpan;
					},
				}),
				Object.defineProperty(e, "spanTimeInputToSeconds", {
					enumerable: !0,
					get: function () {
						return k.spanTimeInputToSeconds;
					},
				}),
				Object.defineProperty(e, "parseSampleRate", {
					enumerable: !0,
					get: function () {
						return L.parseSampleRate;
					},
				}),
				Object.defineProperty(e, "applySdkMetadata", {
					enumerable: !0,
					get: function () {
						return D.applySdkMetadata;
					},
				}),
				Object.defineProperty(e, "getTraceData", {
					enumerable: !0,
					get: function () {
						return M.getTraceData;
					},
				}),
				Object.defineProperty(e, "getTraceMetaTags", {
					enumerable: !0,
					get: function () {
						return N.getTraceMetaTags;
					},
				}),
				Object.defineProperty(e, "DEFAULT_ENVIRONMENT", {
					enumerable: !0,
					get: function () {
						return A.DEFAULT_ENVIRONMENT;
					},
				}),
				Object.defineProperty(e, "addBreadcrumb", {
					enumerable: !0,
					get: function () {
						return R.addBreadcrumb;
					},
				}),
				Object.defineProperty(e, "functionToStringIntegration", {
					enumerable: !0,
					get: function () {
						return O.functionToStringIntegration;
					},
				}),
				Object.defineProperty(e, "inboundFiltersIntegration", {
					enumerable: !0,
					get: function () {
						return B.inboundFiltersIntegration;
					},
				}),
				Object.defineProperty(e, "linkedErrorsIntegration", {
					enumerable: !0,
					get: function () {
						return U.linkedErrorsIntegration;
					},
				}),
				Object.defineProperty(e, "moduleMetadataIntegration", {
					enumerable: !0,
					get: function () {
						return z.moduleMetadataIntegration;
					},
				}),
				Object.defineProperty(e, "requestDataIntegration", {
					enumerable: !0,
					get: function () {
						return F.requestDataIntegration;
					},
				}),
				Object.defineProperty(e, "captureConsoleIntegration", {
					enumerable: !0,
					get: function () {
						return x.captureConsoleIntegration;
					},
				}),
				Object.defineProperty(e, "debugIntegration", {
					enumerable: !0,
					get: function () {
						return H.debugIntegration;
					},
				}),
				Object.defineProperty(e, "dedupeIntegration", {
					enumerable: !0,
					get: function () {
						return q.dedupeIntegration;
					},
				}),
				Object.defineProperty(e, "extraErrorDataIntegration", {
					enumerable: !0,
					get: function () {
						return V.extraErrorDataIntegration;
					},
				}),
				Object.defineProperty(e, "rewriteFramesIntegration", {
					enumerable: !0,
					get: function () {
						return G.rewriteFramesIntegration;
					},
				}),
				Object.defineProperty(e, "sessionTimingIntegration", {
					enumerable: !0,
					get: function () {
						return K.sessionTimingIntegration;
					},
				}),
				Object.defineProperty(e, "zodErrorsIntegration", {
					enumerable: !0,
					get: function () {
						return J.zodErrorsIntegration;
					},
				}),
				Object.defineProperty(e, "thirdPartyErrorFilterIntegration", {
					enumerable: !0,
					get: function () {
						return W.thirdPartyErrorFilterIntegration;
					},
				}),
				Object.defineProperty(e, "metrics", {
					enumerable: !0,
					get: function () {
						return X.metrics;
					},
				}),
				Object.defineProperty(e, "profiler", {
					enumerable: !0,
					get: function () {
						return Y.profiler;
					},
				}),
				Object.defineProperty(e, "metricsDefault", {
					enumerable: !0,
					get: function () {
						return ie.metricsDefault;
					},
				}),
				Object.defineProperty(e, "BrowserMetricsAggregator", {
					enumerable: !0,
					get: function () {
						return ne.BrowserMetricsAggregator;
					},
				}),
				Object.defineProperty(e, "getMetricSummaryJsonForSpan", {
					enumerable: !0,
					get: function () {
						return ee.getMetricSummaryJsonForSpan;
					},
				}),
				Object.defineProperty(e, "addTracingHeadersToFetchRequest", {
					enumerable: !0,
					get: function () {
						return _.addTracingHeadersToFetchRequest;
					},
				}),
				Object.defineProperty(e, "instrumentFetchRequest", {
					enumerable: !0,
					get: function () {
						return _.instrumentFetchRequest;
					},
				}),
				Object.defineProperty(e, "trpcMiddleware", {
					enumerable: !0,
					get: function () {
						return te.trpcMiddleware;
					},
				}),
				Object.defineProperty(e, "captureFeedback", {
					enumerable: !0,
					get: function () {
						return Q.captureFeedback;
					},
				}),
				Object.defineProperty(e, "getCurrentHubShim", {
					enumerable: !0,
					get: function () {
						return Z.getCurrentHubShim;
					},
				}),
				Object.defineProperty(e, "getCurrentHub", {
					enumerable: !0,
					get: function () {
						return Z.getCurrentHub;
					},
				}),
				Object.defineProperty(e, "SDK_VERSION", {
					enumerable: !0,
					get: function () {
						return se.SDK_VERSION;
					},
				});
		},
	),
		