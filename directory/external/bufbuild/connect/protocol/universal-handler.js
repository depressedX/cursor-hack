import '../../../../require.js';
import '../../../../exports.js';
import '../../protobuf.js';
import './universal.js';
import './content-type-matcher.js';
import './limit-io.js';
import '../connect-error.js';
import '../code.js';
define(
			de[877],
			he([1, 0, 86, 873, 870, 1081, 213, 202]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.validateUniversalHandlerOptions = m),
					(e.createUniversalServiceHandlers = r),
					(e.createUniversalMethodHandler = u),
					(e.negotiateProtocol = a);
				function m(h) {
					h ??= {};
					const c = h.acceptCompression ? [...h.acceptCompression] : [],
						n = h.requireConnectProtocolHeader ?? !1,
						g = h.maxTimeoutMs ?? Number.MAX_SAFE_INTEGER;
					return {
						acceptCompression: c,
						...(0, E.validateReadWriteMaxBytes)(
							h.readMaxBytes,
							h.writeMaxBytes,
							h.compressMinBytes,
						),
						jsonOptions: h.jsonOptions,
						binaryOptions: h.binaryOptions,
						maxTimeoutMs: g,
						shutdownSignal: h.shutdownSignal,
						requireConnectProtocolHeader: n,
						interceptors: h.interceptors ?? [],
					};
				}
				function r(h, c) {
					return Object.entries(h.methods).map(([, n]) => u(n, c));
				}
				function u(h, c) {
					return a(c.map((n) => n(h)));
				}
				function a(h) {
					if (h.length == 0)
						throw new C.ConnectError(
							"at least one protocol is required",
							d.Code.Internal,
						);
					const c = h[0].service,
						n = h[0].method,
						g = h[0].requestPath;
					if (h.some((o) => o.service !== c || o.method !== n))
						throw new C.ConnectError(
							"cannot negotiate protocol for different RPCs",
							d.Code.Internal,
						);
					if (h.some((o) => o.requestPath !== g))
						throw new C.ConnectError(
							"cannot negotiate protocol for different requestPaths",
							d.Code.Internal,
						);
					async function p(o) {
						if (
							n.kind == t.MethodKind.BiDiStreaming &&
							o.httpVersion.startsWith("1.")
						)
							return {
								...i.uResponseVersionNotSupported,
								header: new Headers({ Connection: "close" }),
							};
						const f = o.header.get("Content-Type") ?? "",
							b = h.filter((y) => y.allowedMethods.includes(o.method));
						if (b.length == 0) return i.uResponseMethodNotAllowed;
						if (b.length == 1 && f === "") {
							const y = b[0];
							return y(o);
						}
						const s = b.filter((y) => y.supportedContentType(f));
						if (s.length == 0) return i.uResponseUnsupportedMediaType;
						const l = s[0];
						return l(o);
					}
					return Object.assign(p, {
						service: c,
						method: n,
						requestPath: g,
						supportedContentType: (0, w.contentTypeMatcher)(
							...h.map((o) => o.supportedContentType),
						),
						protocolNames: h
							.flatMap((o) => o.protocolNames)
							.filter((o, f, b) => b.indexOf(o) === f),
						allowedMethods: h
							.flatMap((o) => o.allowedMethods)
							.filter((o, f, b) => b.indexOf(o) === f),
					});
				}
			},
		),
		