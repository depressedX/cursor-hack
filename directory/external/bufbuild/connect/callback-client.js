import '../../../require.js';
import '../../../exports.js';
import '../protobuf.js';
import './connect-error.js';
import './code.js';
import './any-client.js';
import './protocol/async-iterable.js';
define(
			de[2044],
			he([1, 0, 86, 213, 202, 1077, 575]),
			function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*connect-error*/,
 w /*code*/,
 E /*any-client*/,
 C /*async-iterable*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createCallbackClient = d);
				function d(a, h) {
					return (0, E.makeAnyClient)(a, (c) => {
						switch (c.kind) {
							case t.MethodKind.Unary:
								return m(h, a, c);
							case t.MethodKind.ServerStreaming:
								return r(h, a, c);
							default:
								return null;
						}
					});
				}
				function m(a, h, c) {
					return function (n, g, p) {
						const o = new AbortController();
						return (
							(p = u(o, p)),
							a
								.unary(
									h,
									c,
									o.signal,
									p.timeoutMs,
									p.headers,
									n,
									p.contextValues,
								)
								.then(
									(f) => {
										p.onHeader?.(f.header),
											p.onTrailer?.(f.trailer),
											g(void 0, f.message);
									},
									(f) => {
										const b = i.ConnectError.from(f, w.Code.Internal);
										(b.code === w.Code.Canceled && o.signal.aborted) ||
											g(b, new c.O());
									},
								),
							() => o.abort()
						);
					};
				}
				function r(a, h, c) {
					return function (n, g, p, o) {
						const f = new AbortController();
						async function b() {
							o = u(f, o);
							const s = await a.stream(
								h,
								c,
								o.signal,
								o.timeoutMs,
								o.headers,
								(0, C.createAsyncIterable)([n]),
								o.contextValues,
							);
							o.onHeader?.(s.header);
							for await (const l of s.message) g(l);
							o.onTrailer?.(s.trailer), p(void 0);
						}
						return (
							b().catch((s) => {
								const l = i.ConnectError.from(s, w.Code.Internal);
								l.code === w.Code.Canceled && f.signal.aborted
									? p(void 0)
									: p(l);
							}),
							() => f.abort()
						);
					};
				}
				function u(a, h) {
					return (
						h?.signal &&
							(h.signal.addEventListener("abort", () => a.abort()),
							h.signal.aborted && a.abort()),
						{ ...h, signal: a.signal }
					);
				}
			},
		),
		