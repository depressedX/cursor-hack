import '../../../../require.js';
import '../../../../exports.js';
import './errors.js';
import './utils.js';
import './hubextensions.js';
import './idleSpan.js';
import './sentrySpan.js';
import './sentryNonRecordingSpan.js';
import './spanstatus.js';
import './spanstatus.js';
import './trace.js';
import './dynamicSamplingContext.js';
import './measurement.js';
import './sampling.js';
import './logSpans.js';
define(
			de[640],
			he([
				1, 0, 1445, 1096, 2122, 2123, 1447, 888, 636, 636, 1448, 639, 1446,
				1444, 1100,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*utils*/,
 w /*hubextensions*/,
 E /*idleSpan*/,
 C /*sentrySpan*/,
 d /*sentryNonRecordingSpan*/,
 m /*spanstatus*/,
 r /*spanstatus*/,
 u /*trace*/,
 a /*dynamicSamplingContext*/,
 h /*measurement*/,
 c /*sampling*/,
 n /*logSpans*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.logSpanStart =
						e.logSpanEnd =
						e.sampleSpan =
						e.timedEventsToMeasurements =
						e.setMeasurement =
						e.spanToBaggageHeader =
						e.getDynamicSamplingContextFromSpan =
						e.getDynamicSamplingContextFromClient =
						e.startNewTrace =
						e.suppressTracing =
						e.withActiveSpan =
						e.continueTrace =
						e.startSpanManual =
						e.startInactiveSpan =
						e.startSpan =
						e.SPAN_STATUS_UNSET =
						e.SPAN_STATUS_OK =
						e.SPAN_STATUS_ERROR =
						e.getSpanStatusFromHttpCode =
						e.setHttpStatus =
						e.SentryNonRecordingSpan =
						e.SentrySpan =
						e.TRACING_DEFAULTS =
						e.startIdleSpan =
						e.addTracingExtensions =
						e.getCapturedScopesOnSpan =
						e.setCapturedScopesOnSpan =
						e.registerSpanErrorInstrumentation =
							void 0),
					Object.defineProperty(e, "registerSpanErrorInstrumentation", {
						enumerable: !0,
						get: function () {
							return t.registerSpanErrorInstrumentation;
						},
					}),
					Object.defineProperty(e, "setCapturedScopesOnSpan", {
						enumerable: !0,
						get: function () {
							return i.setCapturedScopesOnSpan;
						},
					}),
					Object.defineProperty(e, "getCapturedScopesOnSpan", {
						enumerable: !0,
						get: function () {
							return i.getCapturedScopesOnSpan;
						},
					}),
					Object.defineProperty(e, "addTracingExtensions", {
						enumerable: !0,
						get: function () {
							return w.addTracingExtensions;
						},
					}),
					Object.defineProperty(e, "startIdleSpan", {
						enumerable: !0,
						get: function () {
							return E.startIdleSpan;
						},
					}),
					Object.defineProperty(e, "TRACING_DEFAULTS", {
						enumerable: !0,
						get: function () {
							return E.TRACING_DEFAULTS;
						},
					}),
					Object.defineProperty(e, "SentrySpan", {
						enumerable: !0,
						get: function () {
							return C.SentrySpan;
						},
					}),
					Object.defineProperty(e, "SentryNonRecordingSpan", {
						enumerable: !0,
						get: function () {
							return d.SentryNonRecordingSpan;
						},
					}),
					Object.defineProperty(e, "setHttpStatus", {
						enumerable: !0,
						get: function () {
							return m.setHttpStatus;
						},
					}),
					Object.defineProperty(e, "getSpanStatusFromHttpCode", {
						enumerable: !0,
						get: function () {
							return m.getSpanStatusFromHttpCode;
						},
					}),
					Object.defineProperty(e, "SPAN_STATUS_ERROR", {
						enumerable: !0,
						get: function () {
							return r.SPAN_STATUS_ERROR;
						},
					}),
					Object.defineProperty(e, "SPAN_STATUS_OK", {
						enumerable: !0,
						get: function () {
							return r.SPAN_STATUS_OK;
						},
					}),
					Object.defineProperty(e, "SPAN_STATUS_UNSET", {
						enumerable: !0,
						get: function () {
							return r.SPAN_STATUS_UNSET;
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
					Object.defineProperty(e, "continueTrace", {
						enumerable: !0,
						get: function () {
							return u.continueTrace;
						},
					}),
					Object.defineProperty(e, "withActiveSpan", {
						enumerable: !0,
						get: function () {
							return u.withActiveSpan;
						},
					}),
					Object.defineProperty(e, "suppressTracing", {
						enumerable: !0,
						get: function () {
							return u.suppressTracing;
						},
					}),
					Object.defineProperty(e, "startNewTrace", {
						enumerable: !0,
						get: function () {
							return u.startNewTrace;
						},
					}),
					Object.defineProperty(e, "getDynamicSamplingContextFromClient", {
						enumerable: !0,
						get: function () {
							return a.getDynamicSamplingContextFromClient;
						},
					}),
					Object.defineProperty(e, "getDynamicSamplingContextFromSpan", {
						enumerable: !0,
						get: function () {
							return a.getDynamicSamplingContextFromSpan;
						},
					}),
					Object.defineProperty(e, "spanToBaggageHeader", {
						enumerable: !0,
						get: function () {
							return a.spanToBaggageHeader;
						},
					}),
					Object.defineProperty(e, "setMeasurement", {
						enumerable: !0,
						get: function () {
							return h.setMeasurement;
						},
					}),
					Object.defineProperty(e, "timedEventsToMeasurements", {
						enumerable: !0,
						get: function () {
							return h.timedEventsToMeasurements;
						},
					}),
					Object.defineProperty(e, "sampleSpan", {
						enumerable: !0,
						get: function () {
							return c.sampleSpan;
						},
					}),
					Object.defineProperty(e, "logSpanEnd", {
						enumerable: !0,
						get: function () {
							return n.logSpanEnd;
						},
					}),
					Object.defineProperty(e, "logSpanStart", {
						enumerable: !0,
						get: function () {
							return n.logSpanStart;
						},
					});
			},
		),
		