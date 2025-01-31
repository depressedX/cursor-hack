import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[619], he([1, 0, 75, 3, 20, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*window*/,
 i /*lifecycle*/,
 w /*extensions*/,
 E /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$xcc = e.$wcc = void 0),
				(e.$wcc = (0, E.$Mi)("metricsService"));
			class C extends i.$1c {
				constructor() {
					super(),
						(this.a = void 0),
						(this.b = Array(1e3).fill(null)),
						(this.c = 0),
						t.$Bfb.setInterval(() => {
							if (this.a) {
								let m = !1;
								this.b.forEach((r) => {
									if (r != null && this.a !== void 0)
										switch (((m = !0), r.method)) {
											case "increment":
												this.a.increment(r.stat);
												break;
											case "decrement":
												this.a.decrement(r.stat);
												break;
											case "distribution":
												this.a.distribution(r.stat);
												break;
											case "gauge":
												this.a.gauge(r.stat);
												break;
										}
								}),
									m && ((this.b = Array(1e3).fill(null)), (this.c = 0));
							}
						}, 3e4);
				}
				increment(m) {
					this.a
						? this.a.increment(m)
						: ((this.b[this.c % 1e3] = { stat: m, method: "increment" }),
							this.c++);
				}
				decrement(m) {
					this.a
						? this.a.decrement(m)
						: ((this.b[this.c % 1e3] = { stat: m, method: "decrement" }),
							this.c++);
				}
				distribution(m) {
					this.a
						? this.a.distribution(m)
						: ((this.b[this.c % 1e3] = { stat: m, method: "distribution" }),
							this.c++);
				}
				gauge(m) {
					this.a
						? this.a.gauge(m)
						: ((this.b[this.c % 1e3] = { stat: m, method: "gauge" }), this.c++);
				}
				registerMetricsProvider(m) {
					this.a = m;
				}
				unregisterMetricsProvider() {
					this.a = void 0;
				}
			}
			(e.$xcc = C), (0, w.$lK)(e.$wcc, C, w.InstantiationType.Delayed);
		})
