import '../../../../require.js';
import '../../../../exports.js';
import '../../../../external/sentry/core/index.js';
import '../../../../external/sentry/core/semanticAttributes.js';
import '../../../../external/sentry/electron/common/envelope.js';
import '../../../../external/sentry/utils/error.js';
import '../../../../external/sentry/utils/misc.js';
import '../../../../external/sentry/utils/promisebuffer.js';
define(
		de[1668],
		he([1, 0, 144, 453, 2146, 1092, 727, 1426]),
		function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*semanticAttributes*/,
 w /*envelope*/,
 E /*error*/,
 C /*misc*/,
 d /*promisebuffer*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makePromiseBuffer =
					e.uuid4 =
					e.SentryError =
					e.eventFromEnvelope =
					e.startSpanManual =
					e.getIsolationScope =
					e.getEnvelopeEndpointWithUrlEncodedAuth =
					e.getCurrentScope =
					e.getClient =
						void 0),
				Object.defineProperty(e, "getClient", {
					enumerable: !0,
					get: function () {
						return t.getClient;
					},
				}),
				Object.defineProperty(e, "getCurrentScope", {
					enumerable: !0,
					get: function () {
						return t.getCurrentScope;
					},
				}),
				Object.defineProperty(e, "getEnvelopeEndpointWithUrlEncodedAuth", {
					enumerable: !0,
					get: function () {
						return t.getEnvelopeEndpointWithUrlEncodedAuth;
					},
				}),
				Object.defineProperty(e, "getIsolationScope", {
					enumerable: !0,
					get: function () {
						return t.getIsolationScope;
					},
				}),
				Object.defineProperty(e, "startSpanManual", {
					enumerable: !0,
					get: function () {
						return t.startSpanManual;
					},
				}),
				Yi(i, e),
				Object.defineProperty(e, "eventFromEnvelope", {
					enumerable: !0,
					get: function () {
						return w.eventFromEnvelope;
					},
				}),
				Object.defineProperty(e, "SentryError", {
					enumerable: !0,
					get: function () {
						return E.SentryError;
					},
				}),
				Object.defineProperty(e, "uuid4", {
					enumerable: !0,
					get: function () {
						return C.uuid4;
					},
				}),
				Object.defineProperty(e, "makePromiseBuffer", {
					enumerable: !0,
					get: function () {
						return d.makePromiseBuffer;
					},
				});
		},
	)
