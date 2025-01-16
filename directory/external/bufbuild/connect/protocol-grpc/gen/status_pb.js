define(de[2050], he([1, 0, 86]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Status = void 0);
			class i extends t.Message {
				constructor(E) {
					super(),
						(this.code = 0),
						(this.message = ""),
						(this.details = []),
						t.proto3.util.initPartial(E, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "google.rpc.Status";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "code", kind: "scalar", T: 5 },
						{ no: 2, name: "message", kind: "scalar", T: 9 },
						{ no: 3, name: "details", kind: "message", T: t.Any, repeated: !0 },
					]);
				}
				static fromBinary(E, C) {
					return new i().fromBinary(E, C);
				}
				static fromJson(E, C) {
					return new i().fromJson(E, C);
				}
				static fromJsonString(E, C) {
					return new i().fromJsonString(E, C);
				}
				static equals(E, C) {
					return t.proto3.util.equals(i, E, C);
				}
			}
			e.Status = i;
		}),
		define(
			de[1411],
			he([1, 0, 86, 2050, 213, 876, 202, 868]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.grpcStatusOk = void 0),
					(e.setTrailerStatus = m),
					(e.findTrailerError = r),
					(e.grpcStatusOk = "0");
				function m(u, a) {
					if (a) {
						if (
							(u.set(d.headerGrpcStatus, a.code.toString(10)),
							u.set(d.headerGrpcMessage, encodeURIComponent(a.rawMessage)),
							a.details.length > 0)
						) {
							const h = new i.Status({
								code: a.code,
								message: a.rawMessage,
								details: a.details.map((c) =>
									"getType" in c
										? t.Any.pack(c)
										: new t.Any({
												typeUrl: `type.googleapis.com/${c.type}`,
												value: c.value,
											}),
								),
							});
							u.set(d.headerStatusDetailsBin, (0, E.encodeBinaryHeader)(h));
						}
					} else u.set(d.headerGrpcStatus, e.grpcStatusOk.toString());
					return u;
				}
				function r(u) {
					const a = u.get(d.headerStatusDetailsBin);
					if (a != null) {
						const c = (0, E.decodeBinaryHeader)(a, i.Status);
						if (c.code == 0) return;
						const n = new w.ConnectError(c.message, c.code, u);
						return (
							(n.details = c.details.map((g) => ({
								type: g.typeUrl.substring(g.typeUrl.lastIndexOf("/") + 1),
								value: g.value,
							}))),
							n
						);
					}
					const h = u.get(d.headerGrpcStatus);
					if (h != null) {
						if (h === e.grpcStatusOk) return;
						const c = parseInt(h, 10);
						return c in C.Code
							? new w.ConnectError(
									decodeURIComponent(u.get(d.headerGrpcMessage) ?? ""),
									c,
									u,
								)
							: new w.ConnectError(
									`invalid grpc-status: ${h}`,
									C.Code.Internal,
									u,
								);
					}
				}
			},
		),
		define(
			de[1090],
			he([1, 0, 86, 213, 202, 1393, 1386]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.invokeUnaryImplementation = d),
					(e.transformInvokeImplementation = m);
				async function d(u, a, h, c) {
					const n = async (o) => ({
							message: (0, E.normalize)(
								u.method.O,
								await u.impl(o.message, {
									...a,
									service: o.service,
									method: o.method,
									requestHeader: o.header,
									values: o.contextValues,
									signal: o.signal,
								}),
							),
							stream: !1,
							service: o.service,
							method: o.method,
							header: a.responseHeader,
							trailer: a.responseTrailer,
						}),
						g = (0, C.applyInterceptors)(n, c),
						{ message: p } = await g({
							init: { method: a.requestMethod },
							message: h,
							url: a.url,
							signal: a.signal,
							service: u.service,
							method: u.method,
							header: a.requestHeader,
							contextValues: a.values,
							stream: !1,
						});
					return p;
				}
				function m(u, a, h) {
					switch (u.kind) {
						case t.MethodKind.Unary:
							return async function* (n) {
								const g = n[Symbol.asyncIterator](),
									p = await g.next();
								if (p.done === !0)
									throw new i.ConnectError(
										"protocol error: missing input message for unary method",
										w.Code.Unimplemented,
									);
								const o = async ($) => ({
										message: (0, E.normalize)(
											u.method.O,
											await u.impl($.message, {
												...a,
												service: $.service,
												method: $.method,
												requestHeader: $.header,
												values: $.contextValues,
												signal: $.signal,
											}),
										),
										stream: !1,
										service: $.service,
										method: $.method,
										header: a.responseHeader,
										trailer: a.responseTrailer,
									}),
									f = (0, C.applyInterceptors)(o, h),
									{
										message: b,
										header: s,
										trailer: l,
									} = await f({
										init: { method: a.requestMethod },
										message: p.value,
										url: a.url,
										signal: a.signal,
										service: u.service,
										method: u.method,
										header: a.requestHeader,
										contextValues: a.values,
										stream: !1,
									});
								if (
									(r(s, a.responseHeader),
									r(l, a.responseTrailer),
									yield b,
									(await g.next()).done !== !0)
								)
									throw new i.ConnectError(
										"protocol error: received extra input message for unary method",
										w.Code.Unimplemented,
									);
							};
						case t.MethodKind.ServerStreaming:
							return async function* (n) {
								const g = n[Symbol.asyncIterator](),
									p = await g.next();
								if (p.done === !0)
									throw new i.ConnectError(
										"protocol error: missing input message for server-streaming method",
										w.Code.Unimplemented,
									);
								const o = async ($) => ({
										message: (0, E.normalizeIterable)(
											u.method.O,
											u.impl($.message, {
												...a,
												service: $.service,
												method: $.method,
												requestHeader: $.header,
												values: $.contextValues,
												signal: $.signal,
											}),
										),
										stream: !0,
										service: $.service,
										method: $.method,
										header: a.responseHeader,
										trailer: a.responseTrailer,
									}),
									f = (0, C.applyInterceptors)(o, h),
									{
										message: b,
										header: s,
										trailer: l,
									} = await f({
										init: { method: a.requestMethod },
										message: p.value,
										url: a.url,
										signal: a.signal,
										service: u.service,
										method: u.method,
										header: a.requestHeader,
										contextValues: a.values,
										stream: !1,
									});
								if (
									(r(s, a.responseHeader),
									r(l, a.responseTrailer),
									yield* b,
									(await g.next()).done !== !0)
								)
									throw new i.ConnectError(
										"protocol error: received extra input message for server-streaming method",
										w.Code.Unimplemented,
									);
							};
						case t.MethodKind.ClientStreaming:
							return async function* (n) {
								const g = async (s) => ({
										message: (0, E.normalize)(
											u.method.O,
											await u.impl(s.message, {
												...a,
												service: s.service,
												method: s.method,
												requestHeader: s.header,
												values: s.contextValues,
												signal: s.signal,
											}),
										),
										stream: !1,
										service: s.service,
										method: s.method,
										header: a.responseHeader,
										trailer: a.responseTrailer,
									}),
									p = (0, C.applyInterceptors)(g, h),
									{
										message: o,
										header: f,
										trailer: b,
									} = await p({
										init: { method: a.requestMethod },
										message: n,
										url: a.url,
										signal: a.signal,
										service: u.service,
										method: u.method,
										header: a.requestHeader,
										contextValues: a.values,
										stream: !0,
									});
								r(f, a.responseHeader), r(b, a.responseTrailer), yield o;
							};
						case t.MethodKind.BiDiStreaming:
							return async function* (n) {
								const g = async (s) => ({
										message: (0, E.normalizeIterable)(
											u.method.O,
											u.impl(s.message, {
												...a,
												service: s.service,
												method: s.method,
												requestHeader: s.header,
												values: s.contextValues,
												signal: s.signal,
											}),
										),
										stream: !0,
										service: s.service,
										method: s.method,
										header: a.responseHeader,
										trailer: a.responseTrailer,
									}),
									p = (0, C.applyInterceptors)(g, h),
									{
										message: o,
										header: f,
										trailer: b,
									} = await p({
										init: { method: a.requestMethod },
										message: n,
										url: a.url,
										signal: a.signal,
										service: u.service,
										method: u.method,
										header: a.requestHeader,
										contextValues: a.values,
										stream: !0,
									});
								r(f, a.responseHeader), r(b, a.responseTrailer), yield* o;
							};
					}
				}
				function r(u, a) {
					u !== a &&
						(a.forEach((h, c) => {
							a.delete(c);
						}),
						u.forEach((h, c) => {
							a.set(c, h);
						}));
				}
			},
		),
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
		define(
			de[2051],
			he([
				1, 0, 86, 202, 213, 634, 1079, 1410, 1089, 574, 1388, 2015, 1389, 1390,
				1080, 869, 872, 877, 873, 575, 870, 871, 1090,
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
		),
		define(
			de[2052],
			he([
				1, 0, 213, 202, 634, 2017, 1391, 2016, 1392, 1411, 575, 869, 870, 871,
				1090, 872, 877, 873,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
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
		define(
			de[2053],
			he([
				1, 0, 634, 213, 202, 2018, 868, 1411, 1392, 575, 869, 870, 871, 1090,
				872, 877, 873,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
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
		),
		define(
			de[1412],
			he([1, 0, 213, 202, 634, 2052, 2053, 2051, 877]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createConnectRouter = r);
				function r(a) {
					const h = u(a),
						c = [];
					return {
						handlers: c,
						service(n, g, p) {
							const { protocols: o } = u(p, h);
							return (
								c.push(
									...(0, m.createUniversalServiceHandlers)(
										(0, w.createServiceImplSpec)(n, g),
										o,
									),
								),
								this
							);
						},
						rpc(n, g, p, o) {
							let f, b, s, l;
							"typeName" in n
								? ((f = n), (b = g), (s = p), (l = o))
								: ((f = { ...n.service, methods: {} }),
									(b = n),
									(s = g),
									(l = p));
							const { protocols: y } = u(l, h);
							return (
								c.push(
									(0, m.createUniversalMethodHandler)(
										(0, w.createMethodImplSpec)(f, b, s),
										y,
									),
								),
								this
							);
						},
					};
				}
				function u(a, h) {
					if (h && !a) return h;
					const c = h
							? { ...(0, m.validateUniversalHandlerOptions)(h.options), ...a }
							: { ...a, ...(0, m.validateUniversalHandlerOptions)(a ?? {}) },
						n = [];
					if (
						(a?.grpc !== !1 && n.push((0, C.createHandlerFactory)(c)),
						a?.grpcWeb !== !1 && n.push((0, E.createHandlerFactory)(c)),
						a?.connect !== !1 && n.push((0, d.createHandlerFactory)(c)),
						n.length === 0)
					)
						throw new t.ConnectError(
							"cannot create handler, all protocols are disabled",
							i.Code.InvalidArgument,
						);
					return { options: c, protocols: n };
				}
			},
		),
		