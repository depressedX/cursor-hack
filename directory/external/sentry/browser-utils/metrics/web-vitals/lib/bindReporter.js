import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[635], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.bindReporter = void 0);
			const t = (w, E) =>
					w > E[1] ? "poor" : w > E[0] ? "needs-improvement" : "good",
				i = (w, E, C, d) => {
					let m, r;
					return (u) => {
						E.value >= 0 &&
							(u || d) &&
							((r = E.value - (m || 0)),
							(r || m === void 0) &&
								((m = E.value),
								(E.delta = r),
								(E.rating = t(E.value, C)),
								w(E)));
					};
				};
			e.bindReporter = i;
		}),
		