import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../observe.js';
define(de[2057], he([1, 0, 576]), function (ce /*require*/,
 e /*exports*/,
 t /*observe*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.initInteractionCountPolyfill = e.getInteractionCount = void 0);
			let i = 0,
				w = 1 / 0,
				E = 0;
			const C = (u) => {
				u.forEach((a) => {
					a.interactionId &&
						((w = Math.min(w, a.interactionId)),
						(E = Math.max(E, a.interactionId)),
						(i = E ? (E - w) / 7 + 1 : 0));
				});
			};
			let d;
			const m = () => (d ? i : performance.interactionCount || 0);
			e.getInteractionCount = m;
			const r = () => {
				"interactionCount" in performance ||
					d ||
					(d = (0, t.observe)("event", C, {
						type: "event",
						buffered: !0,
						durationThreshold: 0,
					}));
			};
			e.initInteractionCountPolyfill = r;
		}),
		