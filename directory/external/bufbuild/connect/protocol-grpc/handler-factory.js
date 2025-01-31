import '../../../../require.js';
import '../../../../exports.js';
import '../implementation.js';
import '../connect-error.js';
import '../code.js';
import './content-type.js';
import './headers.js';
import './trailer-status.js';
import './parse-timeout.js';
import '../protocol/async-iterable.js';
import '../protocol/compression.js';
import '../protocol/content-type-matcher.js';
import '../protocol/create-method-url.js';
import '../protocol/invoke-implementation.js';
import '../protocol/serialization.js';
import '../protocol/universal-handler.js';
import '../protocol/universal.js';
define(
			de[2053],
			he([
				1, 0, 634, 213, 202, 2018, 868, 1411, 1392, 575, 869, 870, 871, 1090,
				872, 877, 873,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*implementation*/,
 i /*connect-error*/,
 w /*code*/,
 E /*content-type*/,
 C /*headers*/,
 d /*trailer-status*/,
 m /*parse-timeout*/,
 r /*async-iterable*/,
 u /*compression*/,
 a /*content-type-matcher*/,
 h /*create-method-url*/,
 c /*invoke-implementation*/,
 n /*serialization*/,
 g /*universal-handler*/,
 p /*universal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createHandlerFactory = b);
				const o = "grpc",
					f = "POST";
				function b(l) {
					const y = (0, g.validateUniversalHandlerOptions)(l);
					function $(v) {
						const S = s(y, v);
						return Object.assign(S, {
							protocolNames: [o],
							allowedMethods: [f],
							supportedContentType: (0, a.contentTypeMatcher)(
								E.contentTypeRegExp,
							),
							requestPath: (0, h.createMethodUrl)("/", v.service, v.method),
							service: v.service,
							method: v.method,
						});
					}
					return ($.protocolName = o), $;
				}
				function s(l, y) {
					const $ = (0, n.createMethodSerializationLookup)(
						y.method,
						l.binaryOptions,
						l.jsonOptions,
						l,
					);
					return async function (S) {
						(0, p.assertByteStreamRequest)(S);
						const I = (0, E.parseContentType)(
							S.header.get(C.headerContentType),
						);
						if (I == null) return p.uResponseUnsupportedMediaType;
						if (S.method !== f) return p.uResponseMethodNotAllowed;
						const T = (0, m.parseTimeout)(
								S.header.get(C.headerTimeout),
								l.maxTimeoutMs,
							),
							P = (0, t.createHandlerContext)({
								...y,
								requestMethod: S.method,
								protocolName: o,
								timeoutMs: T.timeoutMs,
								shutdownSignal: l.shutdownSignal,
								requestSignal: S.signal,
								requestHeader: S.header,
								url: S.url,
								responseHeader: {
									[C.headerContentType]: I.binary
										? E.contentTypeProto
										: E.contentTypeJson,
								},
								responseTrailer: { [C.headerGrpcStatus]: d.grpcStatusOk },
								contextValues: S.contextValues,
							}),
							k = (0, u.compressionNegotiate)(
								l.acceptCompression,
								S.header.get(C.headerEncoding),
								S.header.get(C.headerAcceptEncoding),
								C.headerAcceptEncoding,
							);
						k.response &&
							P.responseHeader.set(C.headerEncoding, k.response.name);
						const L = (0, r.pipe)(
								S.body,
								(0, r.transformPrepend)(() => {
									if (k.error) throw k.error;
									if (T.error) throw T.error;
								}),
								(0, r.transformSplitEnvelope)(l.readMaxBytes),
								(0, r.transformDecompressEnvelope)(k.request, l.readMaxBytes),
								(0, r.transformParseEnvelope)($.getI(I.binary)),
							),
							D = (0, c.transformInvokeImplementation)(
								y,
								P,
								l.interceptors,
							)(L)[Symbol.asyncIterator](),
							M = (0, r.pipe)(
								{
									[Symbol.asyncIterator]() {
										return {
											next: () => D.next(),
											throw: (N) => (
												P.abort(N), D.throw?.(N) ?? Promise.reject({ done: !0 })
											),
											return: (N) => (
												P.abort(),
												D.return?.(N) ?? Promise.resolve({ done: !0, value: N })
											),
										};
									},
								},
								(0, r.transformSerializeEnvelope)($.getO(I.binary)),
								(0, r.transformCompressEnvelope)(
									k.response,
									l.compressMinBytes,
								),
								(0, r.transformJoinEnvelopes)(),
								(0, r.transformCatchFinally)((N) => {
									P.abort(),
										N instanceof i.ConnectError
											? (0, d.setTrailerStatus)(P.responseTrailer, N)
											: N !== void 0 &&
												(0, d.setTrailerStatus)(
													P.responseTrailer,
													new i.ConnectError(
														"internal error",
														w.Code.Internal,
														void 0,
														void 0,
														N,
													),
												);
								}),
								{ propagateDownStreamError: !0 },
							);
						return {
							...p.uResponseOk,
							body: await (0, r.untilFirst)(M),
							header: P.responseHeader,
							trailer: P.responseTrailer,
						};
					};
				}
			},
		)
