import '../../../require.js';
import '../../../exports.js';
import './worldwide.js';
define(de[1093], he([1, 0, 365]), function (ce /*require*/,
 e /*exports*/,
 t /*worldwide*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.browserPerformanceTimeOrigin =
					e._browserPerformanceTimeOriginMode =
					e.timestampInSeconds =
						void 0),
				(e.dateTimestampInSeconds = w);
			const i = 1e3;
			function w() {
				return Date.now() / i;
			}
			function E() {
				const { performance: C } = t.GLOBAL_OBJ;
				if (!C || !C.now) return w;
				const d = Date.now() - C.now(),
					m = C.timeOrigin == null ? d : C.timeOrigin;
				return () => (m + C.now()) / i;
			}
			(e.timestampInSeconds = E()),
				(e.browserPerformanceTimeOrigin = (() => {
					const { performance: C } = t.GLOBAL_OBJ;
					if (!C || !C.now) {
						e._browserPerformanceTimeOriginMode = "none";
						return;
					}
					const d = 3600 * 1e3,
						m = C.now(),
						r = Date.now(),
						u = C.timeOrigin ? Math.abs(C.timeOrigin + m - r) : d,
						a = u < d,
						h = C.timing && C.timing.navigationStart,
						n = typeof h == "number" ? Math.abs(h + m - r) : d,
						g = n < d;
					return a || g
						? u <= n
							? ((e._browserPerformanceTimeOriginMode = "timeOrigin"),
								C.timeOrigin)
							: ((e._browserPerformanceTimeOriginMode = "navigationStart"), h)
						: ((e._browserPerformanceTimeOriginMode = "dateNow"), r);
				})());
		})
