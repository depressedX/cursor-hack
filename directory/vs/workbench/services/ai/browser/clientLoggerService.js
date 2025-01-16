define(
			de[3642],
			he([1, 0, 5, 3, 1470, 285, 1471, 232, 20]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kcd = void 0),
					(e.$Kcd = (0, t.$Mi)("clientLoggerService"));
				let r = class extends i.$1c {
					constructor(a, h) {
						super(),
							(this.b = a),
							(this.c = h),
							(this.a = this.b.createInstance(E.$q6b, { service: C.$__ }));
					}
					async get() {
						if (!this.c.reactivePrivacyMode()) return this.a.get();
					}
					async logWhenTabTurnsOff(a) {
						const h = await this.get();
						return h ? h.logWhenTabTurnsOff(a) : new w.$$_({});
					}
				};
				(r = Ne([j(0, t.$Li), j(1, d.$x6b)], r)),
					(0, m.$lK)(e.$Kcd, r, m.InstantiationType.Delayed);
			},
		),
		