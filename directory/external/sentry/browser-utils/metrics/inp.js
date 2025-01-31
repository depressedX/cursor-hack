import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import './instrument.js';
import './utils.js';
define(
			de[2132],
			he([1, 0, 144, 80, 885, 1102]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*instrument*/,
 E /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.startTrackingINP = m),
					(e.registerInpInteractionListener = a);
				const C = [],
					d = new Map();
				function m() {
					if (
						(0, E.getBrowserPerformanceAPI)() &&
						i.browserPerformanceTimeOrigin
					) {
						const c = u();
						return () => {
							c();
						};
					}
					return () => {};
				}
				const r = {
					click: "click",
					pointerdown: "click",
					pointerup: "click",
					mousedown: "click",
					mouseup: "click",
					touchstart: "click",
					touchend: "click",
					mouseover: "hover",
					mouseout: "hover",
					mouseenter: "hover",
					mouseleave: "hover",
					pointerover: "hover",
					pointerout: "hover",
					pointerenter: "hover",
					pointerleave: "hover",
					dragstart: "drag",
					dragend: "drag",
					drag: "drag",
					dragenter: "drag",
					dragleave: "drag",
					dragover: "drag",
					drop: "drag",
					keydown: "press",
					keyup: "press",
					keypress: "press",
					input: "press",
				};
				function u() {
					return (0, w.addInpInstrumentationHandler)(({ metric: h }) => {
						if (h.value == null) return;
						const c = h.entries.find(
							(I) => I.duration === h.value && r[I.name],
						);
						if (!c) return;
						const { interactionId: n } = c,
							g = r[c.name],
							p = (0, E.msToSec)(i.browserPerformanceTimeOrigin + c.startTime),
							o = (0, E.msToSec)(h.value),
							f = (0, t.getActiveSpan)(),
							b = f ? (0, t.getRootSpan)(f) : void 0,
							l = (n != null ? d.get(n) : void 0) || b,
							y = l
								? (0, t.spanToJSON)(l).description
								: (0, t.getCurrentScope)().getScopeData().transactionName,
							$ = (0, i.htmlTreeAsString)(c.target),
							v = (0, i.dropUndefinedKeys)({
								[t.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp",
								[t.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${g}`,
								[t.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: c.duration,
							}),
							S = (0, E.startStandaloneWebVitalSpan)({
								name: $,
								transaction: y,
								attributes: v,
								startTime: p,
							});
						S?.addEvent("inp", {
							[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
							[t.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: h.value,
						}),
							S?.end(p + o);
					});
				}
				function a(h) {
					const c = ({ entries: n }) => {
						const g = (0, t.getActiveSpan)(),
							p = g && (0, t.getRootSpan)(g);
						n.forEach((o) => {
							if (!(0, w.isPerformanceEventTiming)(o) || !p) return;
							const f = o.interactionId;
							if (f != null && !d.has(f)) {
								if (C.length > 10) {
									const b = C.shift();
									d.delete(b);
								}
								C.push(f), d.set(f, p);
							}
						});
					};
					(0, w.addPerformanceInstrumentationHandler)("event", c),
						(0, w.addPerformanceInstrumentationHandler)("first-input", c);
				}
			},
		)
