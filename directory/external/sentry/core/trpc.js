import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './currentScopes.js';
import './exports.js';
import './semanticAttributes.js';
import './tracing/index.js';
define(
			de[2129],
			he([1, 0, 80, 234, 734, 453, 640]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/,
 w /*exports*/,
 E /*semanticAttributes*/,
 C /*index*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.trpcMiddleware = r);
				const d = {
					mechanism: { handled: !1, data: { function: "trpcMiddleware" } },
				};
				function m(u) {
					typeof u == "object" &&
						u !== null &&
						"ok" in u &&
						!u.ok &&
						"error" in u &&
						(0, w.captureException)(u.error, d);
				}
				function r(u = {}) {
					return async function (a) {
						const {
								path: h,
								type: c,
								next: n,
								rawInput: g,
								getRawInput: p,
							} = a,
							o = (0, i.getClient)(),
							f = o && o.getOptions(),
							b = { procedure_type: c };
						if (
							(u.attachRpcInput !== void 0
								? u.attachRpcInput
								: f && f.sendDefaultPii) &&
							(g !== void 0 && (b.input = (0, t.normalize)(g)),
							p !== void 0 && typeof p == "function")
						)
							try {
								const s = await p();
								b.input = (0, t.normalize)(s);
							} catch {}
						return (
							(0, w.setContext)("trpc", b),
							(0, C.startSpanManual)(
								{
									name: `trpc/${h}`,
									op: "rpc.server",
									attributes: {
										[E.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route",
										[E.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc",
									},
								},
								async (s) => {
									try {
										const l = await n();
										return m(l), s.end(), l;
									} catch (l) {
										throw ((0, w.captureException)(l, d), s.end(), l);
									}
								},
							)
						);
					};
				}
			},
		)
