import '../../../require.js';
import '../../../exports.js';
import '../protobuf.js';
import './any-client.js';
import './connect-error.js';
import './code.js';
import './protocol/async-iterable.js';
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
		