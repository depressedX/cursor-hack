define(de[3797], he([1, 0, 150, 230, 6, 20]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			let C = class {
				get onError() {
					return w.Event.map(this.a.listen("onError"), (m) =>
						t.$YRb.toUserDataSyncError(m),
					);
				}
				constructor(m) {
					this.a = m.getChannel("userDataAutoSync");
				}
				triggerSync(m, r, u) {
					return this.a.call("triggerSync", [m, r, u]);
				}
				turnOn() {
					return this.a.call("turnOn");
				}
				turnOff(m) {
					return this.a.call("turnOff", [m]);
				}
			};
			(C = Ne([j(0, i.$Vbd)], C)),
				(0, E.$lK)(t.$7Rb, C, E.InstantiationType.Delayed);
		}),
		