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
		