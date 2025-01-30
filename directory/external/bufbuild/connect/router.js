import '../../../require.js';
import '../../../exports.js';
import './connect-error.js';
import './code.js';
import './implementation.js';
import './protocol-grpc-web/handler-factory.js';
import './protocol-grpc/handler-factory.js';
import './protocol-connect/handler-factory.js';
import './protocol/universal-handler.js';
define(
			de[1412],
			he([1, 0, 213, 202, 634, 2052, 2053, 2051, 877]),
			function (ce /*require*/,
 e /*exports*/,
 t /*connect-error*/,
 i /*code*/,
 w /*implementation*/,
 E /*handler-factory*/,
 C /*handler-factory*/,
 d /*handler-factory*/,
 m /*universal-handler*/) {
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
		