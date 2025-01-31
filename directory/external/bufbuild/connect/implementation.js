import '../../../require.js';
import '../../../exports.js';
import './connect-error.js';
import './code.js';
import './protocol/signals.js';
import './context-values.js';
define(
			de[634],
			he([1, 0, 213, 202, 1082, 1078]),
			function (ce /*require*/,
 e /*exports*/,
 t /*connect-error*/,
 i /*code*/,
 w /*signals*/,
 E /*context-values*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createHandlerContext = C),
					(e.createMethodImplSpec = d),
					(e.createServiceImplSpec = m);
				function C(r) {
					let u;
					if (r.timeoutMs !== void 0) {
						const c = new Date(Date.now() + r.timeoutMs);
						u = () => c.getTime() - Date.now();
					} else u = () => {};
					const a = (0, w.createDeadlineSignal)(r.timeoutMs),
						h = (0, w.createLinkedAbortController)(
							a.signal,
							r.requestSignal,
							r.shutdownSignal,
						);
					return {
						...r,
						signal: h.signal,
						timeoutMs: u,
						requestHeader: new Headers(r.requestHeader),
						responseHeader: new Headers(r.responseHeader),
						responseTrailer: new Headers(r.responseTrailer),
						abort(c) {
							a.cleanup(), h.abort(c);
						},
						values: r.contextValues ?? (0, E.createContextValues)(),
					};
				}
				function d(r, u, a) {
					return { kind: u.kind, service: r, method: u, impl: a };
				}
				function m(r, u) {
					const a = { service: r, methods: {} };
					for (const [h, c] of Object.entries(r.methods)) {
						let n = u[h];
						if (typeof n == "function") n = n.bind(u);
						else {
							const g = `${r.typeName}.${c.name} is not implemented`;
							n = function () {
								throw new t.ConnectError(g, i.Code.Unimplemented);
							};
						}
						a.methods[h] = d(r, c, n);
					}
					return a;
				}
			},
		)
