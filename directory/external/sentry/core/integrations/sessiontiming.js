import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../integration.js';
define(de[2115], he([1, 0, 80, 316]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*integration*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.sessionTimingIntegration = void 0);
			const w = "SessionTiming",
				E = () => {
					const C = (0, t.timestampInSeconds)() * 1e3;
					return {
						name: w,
						processEvent(d) {
							const m = (0, t.timestampInSeconds)() * 1e3;
							return {
								...d,
								extra: {
									...d.extra,
									"session:start": C,
									"session:duration": m - C,
									"session:end": m,
								},
							};
						},
					};
				};
			e.sessionTimingIntegration = (0, i.defineIntegration)(E);
		})
