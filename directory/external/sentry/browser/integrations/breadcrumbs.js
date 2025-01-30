import '../../../../require.js';
import '../../../../exports.js';
import '../../browser-utils/index.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
import '../helpers.js';
define(
			de[1454],
			he([1, 0, 641, 144, 80, 452, 386]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*index*/,
 E /*debug-build*/,
 C /*helpers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.breadcrumbsIntegration = void 0);
				const d = 1024,
					m = "Breadcrumbs",
					r = (o = {}) => {
						const f = {
							console: !0,
							dom: !0,
							fetch: !0,
							history: !0,
							sentry: !0,
							xhr: !0,
							...o,
						};
						return {
							name: m,
							setup(b) {
								f.console && (0, w.addConsoleInstrumentationHandler)(h(b)),
									f.dom &&
										(0, t.addClickKeypressInstrumentationHandler)(a(b, f.dom)),
									f.xhr && (0, t.addXhrInstrumentationHandler)(c(b)),
									f.fetch && (0, w.addFetchInstrumentationHandler)(n(b)),
									f.history && (0, t.addHistoryInstrumentationHandler)(g(b)),
									f.sentry && b.on("beforeSendEvent", u(b));
							},
						};
					};
				e.breadcrumbsIntegration = (0, i.defineIntegration)(r);
				function u(o) {
					return function (b) {
						(0, i.getClient)() === o &&
							(0, i.addBreadcrumb)(
								{
									category: `sentry.${b.type === "transaction" ? "transaction" : "event"}`,
									event_id: b.event_id,
									level: b.level,
									message: (0, w.getEventDescription)(b),
								},
								{ event: b },
							);
					};
				}
				function a(o, f) {
					return function (s) {
						if ((0, i.getClient)() !== o) return;
						let l,
							y,
							$ = typeof f == "object" ? f.serializeAttribute : void 0,
							v =
								typeof f == "object" && typeof f.maxStringLength == "number"
									? f.maxStringLength
									: void 0;
						v &&
							v > d &&
							(E.DEBUG_BUILD &&
								w.logger.warn(
									`\`dom.maxStringLength\` cannot exceed ${d}, but a value of ${v} was configured. Sentry will use ${d} instead.`,
								),
							(v = d)),
							typeof $ == "string" && ($ = [$]);
						try {
							const I = s.event,
								T = p(I) ? I.target : I;
							(l = (0, w.htmlTreeAsString)(T, {
								keyAttrs: $,
								maxStringLength: v,
							})),
								(y = (0, w.getComponentName)(T));
						} catch {
							l = "<unknown>";
						}
						if (l.length === 0) return;
						const S = { category: `ui.${s.name}`, message: l };
						y && (S.data = { "ui.component_name": y }),
							(0, i.addBreadcrumb)(S, {
								event: s.event,
								name: s.name,
								global: s.global,
							});
					};
				}
				function h(o) {
					return function (b) {
						if ((0, i.getClient)() !== o) return;
						const s = {
							category: "console",
							data: { arguments: b.args, logger: "console" },
							level: (0, w.severityLevelFromString)(b.level),
							message: (0, w.safeJoin)(b.args, " "),
						};
						if (b.level === "assert")
							if (b.args[0] === !1)
								(s.message = `Assertion failed: ${((0, w.safeJoin))(b.args.slice(1), " ") || "console.assert"}`),
									(s.data.arguments = b.args.slice(1));
							else return;
						(0, i.addBreadcrumb)(s, { input: b.args, level: b.level });
					};
				}
				function c(o) {
					return function (b) {
						if ((0, i.getClient)() !== o) return;
						const { startTimestamp: s, endTimestamp: l } = b,
							y = b.xhr[t.SENTRY_XHR_DATA_KEY];
						if (!s || !l || !y) return;
						const { method: $, url: v, status_code: S, body: I } = y,
							T = { method: $, url: v, status_code: S },
							P = { xhr: b.xhr, input: I, startTimestamp: s, endTimestamp: l },
							k = (0, w.getBreadcrumbLogLevelFromHttpStatusCode)(S);
						(0, i.addBreadcrumb)(
							{ category: "xhr", data: T, type: "http", level: k },
							P,
						);
					};
				}
				function n(o) {
					return function (b) {
						if ((0, i.getClient)() !== o) return;
						const { startTimestamp: s, endTimestamp: l } = b;
						if (
							l &&
							!(
								b.fetchData.url.match(/sentry_key/) &&
								b.fetchData.method === "POST"
							)
						)
							if (b.error) {
								const y = b.fetchData,
									$ = {
										data: b.error,
										input: b.args,
										startTimestamp: s,
										endTimestamp: l,
									};
								(0, i.addBreadcrumb)(
									{ category: "fetch", data: y, level: "error", type: "http" },
									$,
								);
							} else {
								const y = b.response,
									$ = { ...b.fetchData, status_code: y && y.status },
									v = {
										input: b.args,
										response: y,
										startTimestamp: s,
										endTimestamp: l,
									},
									S = (0, w.getBreadcrumbLogLevelFromHttpStatusCode)(
										$.status_code,
									);
								(0, i.addBreadcrumb)(
									{ category: "fetch", data: $, type: "http", level: S },
									v,
								);
							}
					};
				}
				function g(o) {
					return function (b) {
						if ((0, i.getClient)() !== o) return;
						let s = b.from,
							l = b.to;
						const y = (0, w.parseUrl)(C.WINDOW.location.href);
						let $ = s ? (0, w.parseUrl)(s) : void 0;
						const v = (0, w.parseUrl)(l);
						(!$ || !$.path) && ($ = y),
							y.protocol === v.protocol &&
								y.host === v.host &&
								(l = v.relative),
							y.protocol === $.protocol &&
								y.host === $.host &&
								(s = $.relative),
							(0, i.addBreadcrumb)({
								category: "navigation",
								data: { from: s, to: l },
							});
					};
				}
				function p(o) {
					return !!o && !!o.target;
				}
			},
		),
		