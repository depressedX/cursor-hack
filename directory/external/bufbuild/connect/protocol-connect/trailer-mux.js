import '../../../../require.js';
import '../../../../exports.js';
define(de[1390], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.trailerDemux = t),
				(e.trailerMux = i);
			function t(w) {
				const E = new Headers(),
					C = new Headers();
				return (
					w.forEach((d, m) => {
						m.toLowerCase().startsWith("trailer-")
							? C.append(m.substring(8), d)
							: E.append(m, d);
					}),
					[E, C]
				);
			}
			function i(w, E) {
				const C = new Headers(w);
				return (
					E.forEach((d, m) => {
						C.append(`trailer-${m}`, d);
					}),
					C
				);
			}
		})
