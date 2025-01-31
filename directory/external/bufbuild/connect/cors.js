import '../../../require.js';
import '../../../exports.js';
import './protocol-connect/headers.js';
import './protocol-grpc/headers.js';
import './protocol-grpc-web/headers.js';
define(de[2019], he([1, 0, 574, 868, 1391]), function (ce /*require*/,
 e /*exports*/,
 t /*headers*/,
 i /*headers*/,
 w /*headers*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.cors = void 0),
			(t = mt(t)),
			(i = mt(i)),
			(w = mt(w)),
			(e.cors = {
				allowedMethods: ["POST", "GET"],
				allowedHeaders: [
					t.headerContentType,
					t.headerProtocolVersion,
					t.headerTimeout,
					t.headerStreamEncoding,
					t.headerStreamAcceptEncoding,
					t.headerUnaryEncoding,
					t.headerUnaryAcceptEncoding,
					i.headerMessageType,
					w.headerXGrpcWeb,
					w.headerXUserAgent,
					w.headerTimeout,
				],
				exposedHeaders: [
					w.headerGrpcStatus,
					w.headerGrpcMessage,
					w.headerStatusDetailsBin,
					t.headerUnaryEncoding,
					t.headerStreamEncoding,
				],
			});
	})
