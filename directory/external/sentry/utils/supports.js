import '../../../require.js';
import '../../../exports.js';
import './debug-build.js';
import './logger.js';
import './worldwide.js';
import './vendor/supportsHistory.js';
define(
			de[1433],
			he([1, 0, 577, 527, 365, 2086]),
			function (ce /*require*/,
 e /*exports*/,
 t /*debug-build*/,
 i /*logger*/,
 w /*worldwide*/,
 E /*supportsHistory*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.supportsHistory = void 0),
					(e.supportsErrorEvent = d),
					(e.supportsDOMError = m),
					(e.supportsDOMException = r),
					(e.supportsFetch = u),
					(e.isNativeFunction = a),
					(e.supportsNativeFetch = h),
					(e.supportsReportingObserver = c),
					(e.supportsReferrerPolicy = n);
				const C = w.GLOBAL_OBJ;
				Object.defineProperty(e, "supportsHistory", {
					enumerable: !0,
					get: function () {
						return E.supportsHistory;
					},
				});
				function d() {
					try {
						return new ErrorEvent(""), !0;
					} catch {
						return !1;
					}
				}
				function m() {
					try {
						return new DOMError(""), !0;
					} catch {
						return !1;
					}
				}
				function r() {
					try {
						return new DOMException(""), !0;
					} catch {
						return !1;
					}
				}
				function u() {
					if (!("fetch" in C)) return !1;
					try {
						return (
							new Headers(),
							new Request("http://www.example.com"),
							new Response(),
							!0
						);
					} catch {
						return !1;
					}
				}
				function a(g) {
					return (
						g &&
						/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(
							g.toString(),
						)
					);
				}
				function h() {
					if (typeof EdgeRuntime == "string") return !0;
					if (!u()) return !1;
					if (a(C.fetch)) return !0;
					let g = !1;
					const p = C.document;
					if (p && typeof p.createElement == "function")
						try {
							const o = p.createElement("iframe");
							(o.hidden = !0),
								p.head.appendChild(o),
								o.contentWindow &&
									o.contentWindow.fetch &&
									(g = a(o.contentWindow.fetch)),
								p.head.removeChild(o);
						} catch (o) {
							t.DEBUG_BUILD &&
								i.logger.warn(
									"Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
									o,
								);
						}
					return g;
				}
				function c() {
					return "ReportingObserver" in C;
				}
				function n() {
					if (!u()) return !1;
					try {
						return new Request("_", { referrerPolicy: "origin" }), !0;
					} catch {
						return !1;
					}
				}
			},
		),
		