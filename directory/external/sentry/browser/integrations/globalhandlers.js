import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../eventbuilder.js';
import '../helpers.js';
define(
			de[1456],
			he([1, 0, 144, 80, 452, 889, 386]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*debug-build*/,
 E /*eventbuilder*/,
 C /*helpers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.globalHandlersIntegration = void 0);
				const d = "GlobalHandlers",
					m = (p = {}) => {
						const o = { onerror: !0, onunhandledrejection: !0, ...p };
						return {
							name: d,
							setupOnce() {
								Error.stackTraceLimit = 50;
							},
							setup(f) {
								o.onerror && (r(f), n("onerror")),
									o.onunhandledrejection && (u(f), n("onunhandledrejection"));
							},
						};
					};
				e.globalHandlersIntegration = (0, t.defineIntegration)(m);
				function r(p) {
					(0, i.addGlobalErrorInstrumentationHandler)((o) => {
						const { stackParser: f, attachStacktrace: b } = g();
						if ((0, t.getClient)() !== p || (0, C.shouldIgnoreOnError)())
							return;
						const { msg: s, url: l, line: y, column: $, error: v } = o,
							S = c(
								(0, E.eventFromUnknownInput)(f, v || s, void 0, b, !1),
								l,
								y,
								$,
							);
						(S.level = "error"),
							(0, t.captureEvent)(S, {
								originalException: v,
								mechanism: { handled: !1, type: "onerror" },
							});
					});
				}
				function u(p) {
					(0, i.addGlobalUnhandledRejectionInstrumentationHandler)((o) => {
						const { stackParser: f, attachStacktrace: b } = g();
						if ((0, t.getClient)() !== p || (0, C.shouldIgnoreOnError)())
							return;
						const s = a(o),
							l = (0, i.isPrimitive)(s)
								? h(s)
								: (0, E.eventFromUnknownInput)(f, s, void 0, b, !0);
						(l.level = "error"),
							(0, t.captureEvent)(l, {
								originalException: s,
								mechanism: { handled: !1, type: "onunhandledrejection" },
							});
					});
				}
				function a(p) {
					if ((0, i.isPrimitive)(p)) return p;
					try {
						if ("reason" in p) return p.reason;
						if ("detail" in p && "reason" in p.detail) return p.detail.reason;
					} catch {}
					return p;
				}
				function h(p) {
					return {
						exception: {
							values: [
								{
									type: "UnhandledRejection",
									value: `Non-Error promise rejection captured with value: ${String(p)}`,
								},
							],
						},
					};
				}
				function c(p, o, f, b) {
					const s = (p.exception = p.exception || {}),
						l = (s.values = s.values || []),
						y = (l[0] = l[0] || {}),
						$ = (y.stacktrace = y.stacktrace || {}),
						v = ($.frames = $.frames || []),
						S = isNaN(parseInt(b, 10)) ? void 0 : b,
						I = isNaN(parseInt(f, 10)) ? void 0 : f,
						T =
							(0, i.isString)(o) && o.length > 0 ? o : (0, i.getLocationHref)();
					return (
						v.length === 0 &&
							v.push({
								colno: S,
								filename: T,
								function: i.UNKNOWN_FUNCTION,
								in_app: !0,
								lineno: I,
							}),
						p
					);
				}
				function n(p) {
					w.DEBUG_BUILD && i.logger.log(`Global Handler attached: ${p}`);
				}
				function g() {
					const p = (0, t.getClient)();
					return (
						(p && p.getOptions()) || {
							stackParser: () => [],
							attachStacktrace: !1,
						}
					);
				}
			},
		)
