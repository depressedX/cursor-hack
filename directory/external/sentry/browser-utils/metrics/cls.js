import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../debug-build.js';
import './instrument.js';
import './utils.js';
import './web-vitals/lib/onHidden.js';
define(
			de[2131],
			he([1, 0, 144, 80, 878, 885, 1102, 729]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*debug-build*/,
 E /*instrument*/,
 C /*utils*/,
 d /*onHidden*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.trackClsAsStandaloneSpan = m);
				function m() {
					let a = 0,
						h,
						c;
					if (!u()) return;
					let n = !1;
					function g() {
						n || ((n = !0), c && r(a, h, c), p());
					}
					const p = (0, E.addClsInstrumentationHandler)(({ metric: o }) => {
						const f = o.entries[o.entries.length - 1];
						f && ((a = o.value), (h = f));
					}, !0);
					(0, d.onHidden)(() => {
						g();
					}),
						setTimeout(() => {
							const f = (0, t.getClient)()?.on("startNavigationSpan", () => {
									g(), f && f();
								}),
								b = (0, t.getActiveSpan)(),
								s = b && (0, t.getRootSpan)(b),
								l = s && (0, t.spanToJSON)(s);
							l && l.op === "pageload" && (c = s.spanContext().spanId);
						}, 0);
				}
				function r(a, h, c) {
					w.DEBUG_BUILD && i.logger.log(`Sending CLS span (${a})`);
					const n = (0, C.msToSec)(
							(i.browserPerformanceTimeOrigin || 0) + (h?.startTime || 0),
						),
						g = (0, t.getCurrentScope)().getScopeData().transactionName,
						p = h
							? (0, i.htmlTreeAsString)(h.sources[0]?.node)
							: "Layout shift",
						o = (0, i.dropUndefinedKeys)({
							[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls",
							[t.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls",
							[t.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: h?.duration || 0,
							"sentry.pageload.span_id": c,
						}),
						f = (0, C.startStandaloneWebVitalSpan)({
							name: p,
							transaction: g,
							attributes: o,
							startTime: n,
						});
					f?.addEvent("cls", {
						[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "",
						[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: a,
					}),
						f?.end(n);
				}
				function u() {
					try {
						return PerformanceObserver.supportedEntryTypes?.includes(
							"layout-shift",
						);
					} catch {
						return !1;
					}
				}
			},
		),
		