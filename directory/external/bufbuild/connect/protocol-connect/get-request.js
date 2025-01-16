define(de[2046], he([1, 0, 86, 574, 1080]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.transformConnectPostToGetRequest = d);
			const E = "application/";
			function C(m, r) {
				return r
					? t.protoBase64
							.enc(m)
							.replace(/\+/g, "-")
							.replace(/\//g, "_")
							.replace(/=+$/, "")
					: encodeURIComponent(new TextDecoder().decode(m));
			}
			function d(m, r, u) {
				let a = `?connect=v${w.protocolVersion}`;
				const h = m.header.get(i.headerContentType);
				h?.indexOf(E) === 0 &&
					(a += "&encoding=" + encodeURIComponent(h.slice(E.length)));
				const c = m.header.get(i.headerUnaryEncoding);
				c !== null &&
					c !== "identity" &&
					((a += "&compression=" + encodeURIComponent(c)), (u = !0)),
					u && (a += "&base64=1"),
					(a += "&message=" + C(r, u));
				const n = m.url + a,
					g = new Headers(m.header);
				return (
					[
						i.headerProtocolVersion,
						i.headerContentType,
						i.headerUnaryContentLength,
						i.headerUnaryEncoding,
						i.headerUnaryAcceptEncoding,
					].forEach((p) => g.delete(p)),
					{ ...m, init: { ...m.init, method: "GET" }, url: n, header: g }
				);
			}
		}),
		define(
			de[2047],
			he([1, 0, 86, 574, 1080, 1079]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.requestHeader = C),
					(e.requestHeaderWithCompression = d);
				function C(m, r, u, a, h) {
					const c = new Headers(a ?? {});
					return (
						u !== void 0 && c.set(i.headerTimeout, `${u}`),
						c.set(
							i.headerContentType,
							m == t.MethodKind.Unary
								? r
									? E.contentTypeUnaryProto
									: E.contentTypeUnaryJson
								: r
									? E.contentTypeStreamProto
									: E.contentTypeStreamJson,
						),
						c.set(i.headerProtocolVersion, w.protocolVersion),
						h && c.set(i.headerUserAgent, "CONNECT_ES_USER_AGENT"),
						c
					);
				}
				function d(m, r, u, a, h, c, n) {
					const g = C(m, r, u, a, n);
					if (c != null) {
						const p =
							m == t.MethodKind.Unary
								? i.headerUnaryEncoding
								: i.headerStreamEncoding;
						g.set(p, c.name);
					}
					if (h.length > 0) {
						const p =
							m == t.MethodKind.Unary
								? i.headerUnaryAcceptEncoding
								: i.headerStreamAcceptEncoding;
						g.set(p, h.map((o) => o.name).join(","));
					}
					return g;
				}
			},
		),
		define(
			de[2048],
			he([1, 0, 86, 202, 1388, 213, 1079, 574]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.validateResponse = m),
					(e.validateResponseWithCompression = r);
				function m(u, a, h, c) {
					const n = c.get(d.headerContentType),
						g = (0, C.parseContentType)(n);
					if (h !== 200) {
						const o = new E.ConnectError(
							`HTTP ${h}`,
							(0, w.codeFromHttpStatus)(h),
							c,
						);
						if (u == t.MethodKind.Unary && g && !g.binary)
							return { isUnaryError: !0, unaryError: o };
						throw o;
					}
					const p = { binary: a, stream: u !== t.MethodKind.Unary };
					if (g?.binary !== p.binary || g.stream !== p.stream)
						throw new E.ConnectError(
							`unsupported content type ${n}`,
							g === void 0 ? i.Code.Unknown : i.Code.Internal,
							c,
						);
					return { isUnaryError: !1 };
				}
				function r(u, a, h, c, n) {
					let g;
					const p = n.get(
						u == t.MethodKind.Unary
							? d.headerUnaryEncoding
							: d.headerStreamEncoding,
					);
					if (
						p != null &&
						p.toLowerCase() !== "identity" &&
						((g = a.find((o) => o.name === p)), !g)
					)
						throw new E.ConnectError(
							`unsupported response encoding "${p}"`,
							i.Code.Internal,
							n,
						);
					return { compression: g, ...m(u, h, c, n) };
				}
			},
		),
		define(
			de[2049],
			he([
				1, 0, 86, 2047, 574, 2048, 1390, 1089, 1410, 2046, 202, 213, 876, 575,
				871, 2021, 872, 1078,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createTransport = f);
				function f(b) {
					return {
						async unary(s, l, y, $, v, S, I) {
							const T = (0, p.createMethodSerializationLookup)(
								l,
								b.binaryOptions,
								b.jsonOptions,
								b,
							);
							return (
								($ = $ === void 0 ? b.defaultTimeoutMs : $ <= 0 ? void 0 : $),
								await (0, g.runUnaryCall)({
									interceptors: b.interceptors,
									signal: y,
									timeoutMs: $,
									req: {
										stream: !1,
										service: s,
										method: l,
										url: (0, n.createMethodUrl)(b.baseUrl, s, l),
										init: {},
										header: (0, i.requestHeaderWithCompression)(
											l.kind,
											b.useBinaryFormat,
											$,
											v,
											b.acceptCompression,
											b.sendCompression,
											!0,
										),
										contextValues: I ?? (0, o.createContextValues)(),
										message: S,
									},
									next: async (P) => {
										let k = T.getI(b.useBinaryFormat).serialize(P.message);
										b.sendCompression && k.byteLength > b.compressMinBytes
											? ((k = await b.sendCompression.compress(k)),
												P.header.set(
													w.headerUnaryEncoding,
													b.sendCompression.name,
												))
											: P.header.delete(w.headerUnaryEncoding);
										const L =
											b.useHttpGet === !0 &&
											l.idempotency === t.MethodIdempotency.NoSideEffects;
										let D;
										L
											? (P = (0, r.transformConnectPostToGetRequest)(
													P,
													k,
													b.useBinaryFormat,
												))
											: (D = (0, c.createAsyncIterable)([k]));
										const M = await b.httpClient({
												url: P.url,
												method: P.init.method ?? "POST",
												header: P.header,
												signal: P.signal,
												body: D,
											}),
											{
												compression: N,
												isUnaryError: A,
												unaryError: R,
											} = (0, E.validateResponseWithCompression)(
												l.kind,
												b.acceptCompression,
												b.useBinaryFormat,
												M.status,
												M.header,
											),
											[O, B] = (0, C.trailerDemux)(M.header);
										let U = await (0, c.pipeTo)(
											M.body,
											(0, c.sinkAllBytes)(
												b.readMaxBytes,
												M.header.get(w.headerUnaryContentLength),
											),
											{ propagateDownStreamError: !1 },
										);
										if ((N && (U = await N.decompress(U, b.readMaxBytes)), A))
											throw (0, d.errorFromJsonBytes)(
												U,
												(0, h.appendHeaders)(O, B),
												R,
											);
										return {
											stream: !1,
											service: s,
											method: l,
											header: O,
											message: T.getO(b.useBinaryFormat).parse(U),
											trailer: B,
										};
									},
								})
							);
						},
						async stream(s, l, y, $, v, S, I) {
							const T = (0, p.createMethodSerializationLookup)(
									l,
									b.binaryOptions,
									b.jsonOptions,
									b,
								),
								P = (0, m.createEndStreamSerialization)(b.jsonOptions);
							return (
								($ = $ === void 0 ? b.defaultTimeoutMs : $ <= 0 ? void 0 : $),
								(0, g.runStreamingCall)({
									interceptors: b.interceptors,
									signal: y,
									timeoutMs: $,
									req: {
										stream: !0,
										service: s,
										method: l,
										url: (0, n.createMethodUrl)(b.baseUrl, s, l),
										init: { method: "POST", redirect: "error", mode: "cors" },
										header: (0, i.requestHeaderWithCompression)(
											l.kind,
											b.useBinaryFormat,
											$,
											v,
											b.acceptCompression,
											b.sendCompression,
											!0,
										),
										contextValues: I ?? (0, o.createContextValues)(),
										message: S,
									},
									next: async (k) => {
										const L = await b.httpClient({
												url: k.url,
												method: "POST",
												header: k.header,
												signal: k.signal,
												body: (0, c.pipe)(
													k.message,
													(0, c.transformSerializeEnvelope)(
														T.getI(b.useBinaryFormat),
													),
													(0, c.transformCompressEnvelope)(
														b.sendCompression,
														b.compressMinBytes,
													),
													(0, c.transformJoinEnvelopes)(),
													{ propagateDownStreamError: !0 },
												),
											}),
											{ compression: D } = (0,
											E.validateResponseWithCompression)(
												l.kind,
												b.acceptCompression,
												b.useBinaryFormat,
												L.status,
												L.header,
											),
											M = {
												...k,
												header: L.header,
												trailer: new Headers(),
												message: (0, c.pipe)(
													L.body,
													(0, c.transformSplitEnvelope)(b.readMaxBytes),
													(0, c.transformDecompressEnvelope)(
														D ?? null,
														b.readMaxBytes,
													),
													(0, c.transformParseEnvelope)(
														T.getO(b.useBinaryFormat),
														m.endStreamFlag,
														P,
													),
													async function* (N) {
														let A = !1;
														for await (const R of N) {
															if (R.end) {
																if (A)
																	throw new a.ConnectError(
																		"protocol error: received extra EndStreamResponse",
																		u.Code.InvalidArgument,
																	);
																if (((A = !0), R.value.error)) {
																	const O = R.value.error;
																	throw (
																		(L.header.forEach((B, U) => {
																			O.metadata.append(U, B);
																		}),
																		O)
																	);
																}
																R.value.metadata.forEach((O, B) =>
																	M.trailer.set(B, O),
																);
																continue;
															}
															if (A)
																throw new a.ConnectError(
																	"protocol error: received extra message after EndStreamResponse",
																	u.Code.InvalidArgument,
																);
															yield R.value;
														}
														if (!A)
															throw new a.ConnectError(
																"protocol error: missing EndStreamResponse",
																u.Code.InvalidArgument,
															);
													},
													{ propagateDownStreamError: !0 },
												),
											};
										return M;
									},
								})
							);
						},
					};
				}
			},
		),
		