define(de[876], he([1, 0, 86, 213, 202]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.encodeBinaryHeader = E),
				(e.decodeBinaryHeader = C),
				(e.appendHeaders = d);
			function E(m) {
				let r;
				return (
					typeof m == "object" && "getType" in m
						? (r = m.toBinary())
						: typeof m == "string"
							? (r = new TextEncoder().encode(m))
							: (r = m instanceof Uint8Array ? m : new Uint8Array(m)),
					t.protoBase64.enc(r).replace(/=+$/, "")
				);
			}
			function C(m, r, u) {
				try {
					const a = t.protoBase64.dec(m);
					return r ? r.fromBinary(a, u) : a;
				} catch (a) {
					throw i.ConnectError.from(a, w.Code.DataLoss);
				}
			}
			function d(...m) {
				const r = new Headers();
				for (const u of m)
					u.forEach((a, h) => {
						r.append(h, a);
					});
				return r;
			}
		}),
		define(
			de[2045],
			he([1, 0, 86, 1077, 213, 202, 575]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createClient = d),
					(e.createPromiseClient = m),
					(e.createUnaryFn = r),
					(e.createServerStreamingFn = u),
					(e.createClientStreamingFn = a),
					(e.createBiDiStreamingFn = h);
				function d(n, g) {
					return (0, i.makeAnyClient)(n, (p) => {
						switch (p.kind) {
							case t.MethodKind.Unary:
								return r(g, n, p);
							case t.MethodKind.ServerStreaming:
								return u(g, n, p);
							case t.MethodKind.ClientStreaming:
								return a(g, n, p);
							case t.MethodKind.BiDiStreaming:
								return h(g, n, p);
							default:
								return null;
						}
					});
				}
				function m(n, g) {
					return d(n, g);
				}
				function r(n, g, p) {
					return async function (o, f) {
						const b = await n.unary(
							g,
							p,
							f?.signal,
							f?.timeoutMs,
							f?.headers,
							o,
							f?.contextValues,
						);
						return (
							f?.onHeader?.(b.header), f?.onTrailer?.(b.trailer), b.message
						);
					};
				}
				function u(n, g, p) {
					return function (o, f) {
						return c(
							n.stream(
								g,
								p,
								f?.signal,
								f?.timeoutMs,
								f?.headers,
								(0, C.createAsyncIterable)([o]),
								f?.contextValues,
							),
							f,
						);
					};
				}
				function a(n, g, p) {
					return async function (o, f) {
						const b = await n.stream(
							g,
							p,
							f?.signal,
							f?.timeoutMs,
							f?.headers,
							o,
							f?.contextValues,
						);
						f?.onHeader?.(b.header);
						let s,
							l = 0;
						for await (const y of b.message) (s = y), l++;
						if (!s)
							throw new w.ConnectError(
								"protocol error: missing response message",
								E.Code.Unimplemented,
							);
						if (l > 1)
							throw new w.ConnectError(
								"protocol error: received extra messages for client streaming method",
								E.Code.Unimplemented,
							);
						return f?.onTrailer?.(b.trailer), s;
					};
				}
				function h(n, g, p) {
					return function (o, f) {
						return c(
							n.stream(
								g,
								p,
								f?.signal,
								f?.timeoutMs,
								f?.headers,
								o,
								f?.contextValues,
							),
							f,
						);
					};
				}
				function c(n, g) {
					const p = (async function* () {
						const o = await n;
						g?.onHeader?.(o.header),
							yield* o.message,
							g?.onTrailer?.(o.trailer);
					})()[Symbol.asyncIterator]();
					return { [Symbol.asyncIterator]: () => ({ next: () => p.next() }) };
				}
			},
		),
		define(
			de[1089],
			he([1, 0, 86, 202, 213, 1387]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.errorFromJson = C),
					(e.errorFromJsonBytes = d),
					(e.errorToJson = m),
					(e.errorToJsonBytes = r);
				function C(u, a, h) {
					if (
						(a && new Headers(a).forEach((p, o) => h.metadata.append(o, p)),
						typeof u != "object" || u == null || Array.isArray(u))
					)
						throw h;
					let c = h.code;
					"code" in u &&
						typeof u.code == "string" &&
						(c = (0, E.codeFromString)(u.code) ?? c);
					const n = u.message;
					if (n != null && typeof n != "string") throw h;
					const g = new w.ConnectError(n ?? "", c, a);
					if ("details" in u && Array.isArray(u.details))
						for (const p of u.details) {
							if (
								p === null ||
								typeof p != "object" ||
								Array.isArray(p) ||
								typeof p.type != "string" ||
								typeof p.value != "string"
							)
								throw h;
							try {
								g.details.push({
									type: p.type,
									value: t.protoBase64.dec(p.value),
									debug: p.debug,
								});
							} catch {
								throw h;
							}
						}
					return g;
				}
				function d(u, a, h) {
					let c;
					try {
						c = JSON.parse(new TextDecoder().decode(u));
					} catch {
						throw h;
					}
					return C(c, a, h);
				}
				function m(u, a) {
					const h = { code: (0, E.codeToString)(u.code) };
					return (
						u.rawMessage.length > 0 && (h.message = u.rawMessage),
						u.details.length > 0 &&
							(h.details = u.details
								.map((c) => {
									if ("getType" in c) {
										const n = {
											type: c.getType().typeName,
											value: c.toBinary(),
										};
										try {
											n.debug = c.toJson(a);
										} catch {}
										return n;
									}
									return c;
								})
								.map(({ value: c, ...n }) => ({
									...n,
									value: t.protoBase64.enc(c).replace(/=+$/, ""),
								}))),
						h
					);
				}
				function r(u, a) {
					const h = new TextEncoder();
					try {
						const c = m(u, a),
							n = JSON.stringify(c);
						return h.encode(n);
					} catch (c) {
						const n = c instanceof Error ? c.message : String(c);
						throw new w.ConnectError(
							`failed to serialize Connect Error: ${n}`,
							i.Code.Internal,
						);
					}
				}
			},
		),
		define(
			de[1410],
			he([1, 0, 1089, 876, 213, 202]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.endStreamFlag = void 0),
					(e.endStreamFromJson = C),
					(e.endStreamToJson = d),
					(e.createEndStreamSerialization = m),
					(e.endStreamFlag = 2);
				function C(r) {
					const u = new w.ConnectError("invalid end stream", E.Code.Unknown);
					let a;
					try {
						a = JSON.parse(
							typeof r == "string" ? r : new TextDecoder().decode(r),
						);
					} catch {
						throw u;
					}
					if (typeof a != "object" || a == null || Array.isArray(a)) throw u;
					const h = new Headers();
					if ("metadata" in a) {
						if (
							typeof a.metadata != "object" ||
							a.metadata == null ||
							Array.isArray(a.metadata)
						)
							throw u;
						for (const [n, g] of Object.entries(a.metadata)) {
							if (!Array.isArray(g) || g.some((p) => typeof p != "string"))
								throw u;
							for (const p of g) h.append(n, p);
						}
					}
					const c =
						"error" in a && a.error != null
							? (0, t.errorFromJson)(a.error, h, u)
							: void 0;
					return { metadata: h, error: c };
				}
				function d(r, u, a) {
					const h = {};
					u !== void 0 &&
						((h.error = (0, t.errorToJson)(u, a)),
						(r = (0, i.appendHeaders)(r, u.metadata)));
					let c = !1;
					const n = {};
					return (
						r.forEach((g, p) => {
							(c = !0), (n[p] = [g]);
						}),
						c && (h.metadata = n),
						h
					);
				}
				function m(r) {
					const u = new TextEncoder();
					return {
						serialize(a) {
							try {
								const h = d(a.metadata, a.error, r),
									c = JSON.stringify(h);
								return u.encode(c);
							} catch (h) {
								const c = h instanceof Error ? h.message : String(h);
								throw new w.ConnectError(
									`failed to serialize EndStreamResponse: ${c}`,
									E.Code.Internal,
								);
							}
						},
						parse(a) {
							try {
								return C(a);
							} catch (h) {
								const c = h instanceof Error ? h.message : String(h);
								throw new w.ConnectError(
									`failed to parse EndStreamResponse: ${c}`,
									E.Code.InvalidArgument,
								);
							}
						},
					};
				}
			},
		),
		