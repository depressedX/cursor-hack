import '../../../require.js';
import '../../../exports.js';
import './protocol-connect/transport.js';
import './protocol/universal-handler-client.js';
import './router.js';
define(de[2054], he([1, 0, 2049, 2026, 1412]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createRouterTransport = E);
			function E(C, d) {
				const m = (0, w.createConnectRouter)({
					...(d?.router ?? {}),
					connect: !0,
				});
				return (
					C(m),
					(0, t.createTransport)({
						httpClient: (0, i.createUniversalHandlerClient)(m.handlers),
						baseUrl: "https://in-memory",
						useBinaryFormat: !0,
						interceptors: [],
						acceptCompression: [],
						sendCompression: null,
						compressMinBytes: Number.MAX_SAFE_INTEGER,
						readMaxBytes: Number.MAX_SAFE_INTEGER,
						writeMaxBytes: Number.MAX_SAFE_INTEGER,
						...(d?.transport ?? {}),
					})
				);
			}
		}),
		