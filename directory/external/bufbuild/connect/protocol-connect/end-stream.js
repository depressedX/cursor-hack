import '../../../../require.js';
import '../../../../exports.js';
import './error-json.js';
import '../http-headers.js';
import '../connect-error.js';
import '../code.js';
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
		