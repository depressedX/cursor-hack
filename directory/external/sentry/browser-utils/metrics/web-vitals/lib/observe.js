import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[576], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.observe = void 0);
			const t = (i, w, E) => {
				try {
					if (PerformanceObserver.supportedEntryTypes.includes(i)) {
						const C = new PerformanceObserver((d) => {
							Promise.resolve().then(() => {
								w(d.getEntries());
							});
						});
						return (
							C.observe(Object.assign({ type: i, buffered: !0 }, E || {})), C
						);
					}
				} catch {}
			};
			e.observe = t;
		})
