import '../../../../require.js';
import '../../../../exports.js';
import '../connect-error.js';
import '../code.js';
import '../implementation.js';
import './trailer.js';
import './headers.js';
import './content-type.js';
import '../protocol-grpc/parse-timeout.js';
import '../protocol-grpc/trailer-status.js';
import '../protocol/async-iterable.js';
import '../protocol/compression.js';
import '../protocol/content-type-matcher.js';
import '../protocol/create-method-url.js';
import '../protocol/invoke-implementation.js';
import '../protocol/serialization.js';
import '../protocol/universal-handler.js';
import '../protocol/universal.js';
define(
			de[2052],
			he([
				1, 0, 213, 202, 634, 2017, 1391, 2016, 1392, 1411, 575, 869, 870, 871,
				1090, 872, 877, 873,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*connect-error*/,
 i /*code*/,
 w /*implementation*/,
 E /*trailer*/,
 C /*headers*/,
 d /*content-type*/,
 m /*parse-timeout*/,
 r /*trailer-status*/,
 u /*async-iterable*/,
 a /*compression*/,
 h /*content-type-matcher*/,
 c /*create-method-url*/,
 n /*invoke-implementation*/,
 g /*serialization*/,
 p /*universal-handler*/,
 o /*universal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createHandlerFactory = s);
				const f = "grpc-web",
					b = "POST";
				function s(y) {
					const $ = (0, p.validateUniversalHandlerOptions)(y),
						v = (0, E.createTrailerSerialization)();
					function S(I) {
						const T = l($, v, I);
						return Object.assign(T, {
							protocolNames: [f],
							allowedMethods: [b],
							supportedContentType: (0, h.contentTypeMatcher)(
								d.contentTypeRegExp,
							),
							requestPath: (0, c.createMethodUrl)("/", I.service, I.method),
							service: I.service,
							method: I.method,
						});
					}
					return (S.protocolName = f), S;
				}
				function l(y, $, v) {
					const S = (0, g.createMethodSerializationLookup)(
						v.method,
						y.binaryOptions,
						y.jsonOptions,
						y,
					);
					return async function (T) {
						(0, o.assertByteStreamRequest)(T);
						const P = (0, d.parseContentType)(
							T.header.get(C.headerContentType),
						);
						if (P == null || P.text) return o.uResponseUnsupportedMediaType;
						if (T.method !== b) return o.uResponseMethodNotAllowed;
						const k = (0, m.parseTimeout)(
								T.header.get(C.headerTimeout),
								y.maxTimeoutMs,
							),
							L = (0, w.createHandlerContext)({
								...v,
								requestMethod: T.method,
								protocolName: f,
								timeoutMs: k.timeoutMs,
								shutdownSignal: y.shutdownSignal,
								requestSignal: T.signal,
								requestHeader: T.header,
								url: T.url,
								responseHeader: {
									[C.headerContentType]: P.binary
										? d.contentTypeProto
										: d.contentTypeJson,
								},
								responseTrailer: { [C.headerGrpcStatus]: r.grpcStatusOk },
								contextValues: T.contextValues,
							}),
							D = (0, a.compressionNegotiate)(
								y.acceptCompression,
								T.header.get(C.headerEncoding),
								T.header.get(C.headerAcceptEncoding),
								C.headerAcceptEncoding,
							);
						D.response &&
							L.responseHeader.set(C.headerEncoding, D.response.name);
						const M = (0, u.pipe)(
								T.body,
								(0, u.transformPrepend)(() => {
									if (D.error) throw D.error;
									if (k.error) throw k.error;
								}),
								(0, u.transformSplitEnvelope)(y.readMaxBytes),
								(0, u.transformDecompressEnvelope)(D.request, y.readMaxBytes),
								(0, u.transformParseEnvelope)(S.getI(P.binary), E.trailerFlag),
							),
							N = (0, n.transformInvokeImplementation)(
								v,
								L,
								y.interceptors,
							)(M)[Symbol.asyncIterator](),
							A = (0, u.pipe)(
								{
									[Symbol.asyncIterator]() {
										return {
											next: () => N.next(),
											throw: (R) => (
												L.abort(R), N.throw?.(R) ?? Promise.reject({ done: !0 })
											),
											return: (R) => (
												L.abort(),
												N.return?.(R) ?? Promise.resolve({ done: !0, value: R })
											),
										};
									},
								},
								(0, u.transformSerializeEnvelope)(S.getO(P.binary)),
								(0, u.transformCatchFinally)(
									(R) => (
										L.abort(),
										R instanceof t.ConnectError
											? (0, r.setTrailerStatus)(L.responseTrailer, R)
											: R !== void 0 &&
												(0, r.setTrailerStatus)(
													L.responseTrailer,
													new t.ConnectError(
														"internal error",
														i.Code.Internal,
														void 0,
														void 0,
														R,
													),
												),
										{
											flags: E.trailerFlag,
											data: $.serialize(L.responseTrailer),
										}
									),
								),
								(0, u.transformCompressEnvelope)(
									D.response,
									y.compressMinBytes,
								),
								(0, u.transformJoinEnvelopes)(),
								{ propagateDownStreamError: !0 },
							);
						return {
							...o.uResponseOk,
							body: await (0, u.untilFirst)(A),
							header: L.responseHeader,
						};
					};
				}
			},
		),
		