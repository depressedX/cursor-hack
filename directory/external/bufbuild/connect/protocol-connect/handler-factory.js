import '../../../../require.js';
import '../../../../exports.js';
import '../../protobuf.js';
import '../code.js';
import '../connect-error.js';
import '../implementation.js';
import './content-type.js';
import './end-stream.js';
import './error-json.js';
import './headers.js';
import './http-status.js';
import './parse-timeout.js';
import './query-params.js';
import './trailer-mux.js';
import './version.js';
import '../protocol/compression.js';
import '../protocol/serialization.js';
import '../protocol/universal-handler.js';
import '../protocol/universal.js';
import '../protocol/async-iterable.js';
import '../protocol/content-type-matcher.js';
import '../protocol/create-method-url.js';
import '../protocol/invoke-implementation.js';
define(
			de[2051],
			he([
				1, 0, 86, 202, 213, 634, 1079, 1410, 1089, 574, 1388, 2015, 1389, 1390,
				1080, 869, 872, 877, 873, 575, 870, 871, 1090,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*protobuf*/,
				i /*code*/,
				w /*connect-error*/,
				E /*implementation*/,
				C /*content-type*/,
				d /*end-stream*/,
				m /*error-json*/,
				r /*headers*/,
				u /*http-status*/,
				a /*parse-timeout*/,
				h /*query-params*/,
				c /*trailer-mux*/,
				n /*version*/,
				g /*compression*/,
				p /*serialization*/,
				o /*universal-handler*/,
				f /*universal*/,
				b /*async-iterable*/,
				s /*content-type-matcher*/,
				l /*create-method-url*/,
				y /*invoke-implementation*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createHandlerFactory = I);
				const $ = "connect",
					v = "POST",
					S = "GET";
				function I(M) {
					const N = (0, o.validateUniversalHandlerOptions)(M),
						A = (0, d.createEndStreamSerialization)(N.jsonOptions);
					function R(O) {
						let B, U;
						const z = (0, p.createMethodSerializationLookup)(
							O.method,
							N.binaryOptions,
							N.jsonOptions,
							N,
						);
						switch (O.kind) {
							case t.MethodKind.Unary:
								(U = C.contentTypeUnaryRegExp), (B = T(N, O, z));
								break;
							default:
								(U = C.contentTypeStreamRegExp), (B = D(N, O, z, A));
								break;
						}
						const F = [v];
						return (
							O.method.idempotency === t.MethodIdempotency.NoSideEffects &&
								F.push(S),
							Object.assign(B, {
								protocolNames: [$],
								supportedContentType: (0, s.contentTypeMatcher)(U),
								allowedMethods: F,
								requestPath: (0, l.createMethodUrl)("/", O.service, O.method),
								service: O.service,
								method: O.method,
							})
						);
					}
					return (R.protocolName = $), R;
				}
				function T(M, N, A) {
					return async function (O) {
						const B = O.method == S;
						if (B && N.method.idempotency != t.MethodIdempotency.NoSideEffects)
							return f.uResponseMethodNotAllowed;
						const U = new URL(O.url).searchParams,
							z = B
								? U.get(h.paramCompression)
								: O.header.get(r.headerUnaryEncoding),
							F = B
								? (0, C.parseEncodingQuery)(U.get(h.paramEncoding))
								: (0, C.parseContentType)(O.header.get(r.headerContentType));
						if (F == null || F.stream) return f.uResponseUnsupportedMediaType;
						const x = (0, a.parseTimeout)(
								O.header.get(r.headerTimeout),
								M.maxTimeoutMs,
							),
							H = (0, E.createHandlerContext)({
								...N,
								requestMethod: O.method,
								protocolName: $,
								timeoutMs: x.timeoutMs,
								shutdownSignal: M.shutdownSignal,
								requestSignal: O.signal,
								requestHeader: O.header,
								url: O.url,
								responseHeader: {
									[r.headerContentType]: F.binary
										? C.contentTypeUnaryProto
										: C.contentTypeUnaryJson,
								},
								contextValues: O.contextValues,
							}),
							q = (0, g.compressionNegotiate)(
								M.acceptCompression,
								z,
								O.header.get(r.headerUnaryAcceptEncoding),
								r.headerUnaryAcceptEncoding,
							);
						let V = f.uResponseOk.status,
							G;
						try {
							if (
								(M.requireConnectProtocolHeader &&
									(B
										? (0, n.requireProtocolVersionParam)(U)
										: (0, n.requireProtocolVersionHeader)(O.header)),
								q.error)
							)
								throw q.error;
							if (x.error) throw x.error;
							let J;
							B
								? (J = await k(M.readMaxBytes, q.request, U))
								: (J = await P(M.readMaxBytes, q.request, O));
							const W = L(N.method, F.binary, A, J),
								X = await (0, y.invokeUnaryImplementation)(
									N,
									H,
									W,
									M.interceptors,
								);
							G = A.getO(F.binary).serialize(X);
						} catch (J) {
							let W;
							J instanceof w.ConnectError
								? (W = J)
								: (W = new w.ConnectError(
										"internal error",
										i.Code.Internal,
										void 0,
										void 0,
										J,
									)),
								(V = (0, u.codeToHttpStatus)(W.code)),
								H.responseHeader.set(
									r.headerContentType,
									C.contentTypeUnaryJson,
								),
								W.metadata.forEach((X, Y) => {
									H.responseHeader.set(Y, X);
								}),
								(G = (0, m.errorToJsonBytes)(W, M.jsonOptions));
						} finally {
							H.abort();
						}
						q.response &&
							G.byteLength >= M.compressMinBytes &&
							((G = await q.response.compress(G)),
							H.responseHeader.set(r.headerUnaryEncoding, q.response.name));
						const K = (0, c.trailerMux)(H.responseHeader, H.responseTrailer);
						return (
							K.set(r.headerUnaryContentLength, G.byteLength.toString(10)),
							{ status: V, body: (0, b.createAsyncIterable)([G]), header: K }
						);
					};
				}
				async function P(M, N, A) {
					if (
						typeof A.body == "object" &&
						A.body !== null &&
						Symbol.asyncIterator in A.body
					) {
						let R = await (0, b.readAllBytes)(
							A.body,
							M,
							A.header.get(r.headerUnaryContentLength),
						);
						return N && (R = await N.decompress(R, M)), R;
					}
					return A.body;
				}
				async function k(M, N, A) {
					const R = A.get(h.paramBase64),
						O = A.get(h.paramMessage) ?? "";
					let B;
					return (
						R === "1"
							? (B = t.protoBase64.dec(O))
							: (B = new TextEncoder().encode(O)),
						N && (B = await N.decompress(B, M)),
						B
					);
				}
				function L(M, N, A, R) {
					if (R instanceof Uint8Array) return A.getI(N).parse(R);
					if (N)
						throw new w.ConnectError(
							"received parsed JSON request body, but content-type indicates binary format",
							i.Code.Internal,
						);
					try {
						return M.I.fromJson(R);
					} catch (O) {
						throw w.ConnectError.from(O, i.Code.InvalidArgument);
					}
				}
				function D(M, N, A, R) {
					return async function (B) {
						(0, f.assertByteStreamRequest)(B);
						const U = (0, C.parseContentType)(
							B.header.get(r.headerContentType),
						);
						if (U == null || !U.stream) return f.uResponseUnsupportedMediaType;
						if (B.method !== v) return f.uResponseMethodNotAllowed;
						const z = (0, a.parseTimeout)(
								B.header.get(r.headerTimeout),
								M.maxTimeoutMs,
							),
							F = (0, E.createHandlerContext)({
								...N,
								requestMethod: B.method,
								protocolName: $,
								timeoutMs: z.timeoutMs,
								shutdownSignal: M.shutdownSignal,
								requestSignal: B.signal,
								requestHeader: B.header,
								url: B.url,
								responseHeader: {
									[r.headerContentType]: U.binary
										? C.contentTypeStreamProto
										: C.contentTypeStreamJson,
								},
								contextValues: B.contextValues,
							}),
							x = (0, g.compressionNegotiate)(
								M.acceptCompression,
								B.header.get(r.headerStreamEncoding),
								B.header.get(r.headerStreamAcceptEncoding),
								r.headerStreamAcceptEncoding,
							);
						x.response &&
							F.responseHeader.set(r.headerStreamEncoding, x.response.name);
						const H = (0, b.pipe)(
								B.body,
								(0, b.transformPrepend)(() => {
									if (
										(M.requireConnectProtocolHeader &&
											(0, n.requireProtocolVersionHeader)(B.header),
										x.error)
									)
										throw x.error;
									if (z.error) throw z.error;
								}),
								(0, b.transformSplitEnvelope)(M.readMaxBytes),
								(0, b.transformDecompressEnvelope)(x.request, M.readMaxBytes),
								(0, b.transformParseEnvelope)(
									A.getI(U.binary),
									d.endStreamFlag,
								),
							),
							q = (0, y.transformInvokeImplementation)(
								N,
								F,
								M.interceptors,
							)(H)[Symbol.asyncIterator](),
							V = (0, b.pipe)(
								{
									[Symbol.asyncIterator]() {
										return {
											next: () => q.next(),
											throw: (G) => (
												F.abort(G), q.throw?.(G) ?? Promise.reject({ done: !0 })
											),
											return: (G) => (
												F.abort(),
												q.return?.(G) ?? Promise.resolve({ done: !0, value: G })
											),
										};
									},
								},
								(0, b.transformSerializeEnvelope)(A.getO(U.binary)),
								(0, b.transformCatchFinally)((G) => {
									F.abort();
									const K = { metadata: F.responseTrailer };
									return (
										G instanceof w.ConnectError
											? (K.error = G)
											: G !== void 0 &&
												(K.error = new w.ConnectError(
													"internal error",
													i.Code.Internal,
													void 0,
													void 0,
													G,
												)),
										{ flags: d.endStreamFlag, data: R.serialize(K) }
									);
								}),
								(0, b.transformCompressEnvelope)(
									x.response,
									M.compressMinBytes,
								),
								(0, b.transformJoinEnvelopes)(),
								{ propagateDownStreamError: !0 },
							);
						return {
							...f.uResponseOk,
							body: await (0, b.untilFirst)(V),
							header: F.responseHeader,
						};
					};
				}
			},
		)
