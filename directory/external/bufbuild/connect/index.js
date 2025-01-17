import '../../../require.js';
import '../../../exports.js';
import './connect-error.js';
import './code.js';
import './http-headers.js';
import './callback-client.js';
import './promise-client.js';
import './router.js';
import './implementation.js';
import './cors.js';
import './context-values.js';
import './any-client.js';
import './implementation.js';
import './router-transport.js';
define(
			de[2055],
			he([
				1, 0, 213, 202, 876, 2044, 2045, 1412, 634, 2019, 1078, 1077, 634, 2054,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createRouterTransport =
						e.createMethodImplSpec =
						e.createServiceImplSpec =
						e.makeAnyClient =
						e.createContextValues =
						e.createContextKey =
						e.cors =
						e.createHandlerContext =
						e.createConnectRouter =
						e.createPromiseClient =
						e.createClient =
						e.createCallbackClient =
						e.appendHeaders =
						e.decodeBinaryHeader =
						e.encodeBinaryHeader =
						e.Code =
						e.ConnectError =
							void 0),
					Object.defineProperty(e, "ConnectError", {
						enumerable: !0,
						get: function () {
							return t.ConnectError;
						},
					}),
					Object.defineProperty(e, "Code", {
						enumerable: !0,
						get: function () {
							return i.Code;
						},
					}),
					Object.defineProperty(e, "encodeBinaryHeader", {
						enumerable: !0,
						get: function () {
							return w.encodeBinaryHeader;
						},
					}),
					Object.defineProperty(e, "decodeBinaryHeader", {
						enumerable: !0,
						get: function () {
							return w.decodeBinaryHeader;
						},
					}),
					Object.defineProperty(e, "appendHeaders", {
						enumerable: !0,
						get: function () {
							return w.appendHeaders;
						},
					}),
					Object.defineProperty(e, "createCallbackClient", {
						enumerable: !0,
						get: function () {
							return E.createCallbackClient;
						},
					}),
					Object.defineProperty(e, "createClient", {
						enumerable: !0,
						get: function () {
							return C.createClient;
						},
					}),
					Object.defineProperty(e, "createPromiseClient", {
						enumerable: !0,
						get: function () {
							return C.createPromiseClient;
						},
					}),
					Object.defineProperty(e, "createConnectRouter", {
						enumerable: !0,
						get: function () {
							return d.createConnectRouter;
						},
					}),
					Object.defineProperty(e, "createHandlerContext", {
						enumerable: !0,
						get: function () {
							return m.createHandlerContext;
						},
					}),
					Object.defineProperty(e, "cors", {
						enumerable: !0,
						get: function () {
							return r.cors;
						},
					}),
					Object.defineProperty(e, "createContextKey", {
						enumerable: !0,
						get: function () {
							return u.createContextKey;
						},
					}),
					Object.defineProperty(e, "createContextValues", {
						enumerable: !0,
						get: function () {
							return u.createContextValues;
						},
					}),
					Object.defineProperty(e, "makeAnyClient", {
						enumerable: !0,
						get: function () {
							return a.makeAnyClient;
						},
					}),
					Object.defineProperty(e, "createServiceImplSpec", {
						enumerable: !0,
						get: function () {
							return h.createServiceImplSpec;
						},
					}),
					Object.defineProperty(e, "createMethodImplSpec", {
						enumerable: !0,
						get: function () {
							return h.createMethodImplSpec;
						},
					}),
					Object.defineProperty(e, "createRouterTransport", {
						enumerable: !0,
						get: function () {
							return c.createRouterTransport;
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
	