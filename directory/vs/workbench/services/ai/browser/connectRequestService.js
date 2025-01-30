import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[1280], he([1, 0, 6, 3, 20, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*extensions*/,
 E /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$p6b = e.$o6b = void 0),
				(e.$o6b = (0, E.$Mi)("aiConnectRequestService"));
			class C extends i.$1c {
				constructor() {
					super(),
						(this.a = this.D(new t.$re())),
						(this.onDidChangeTransport = this.a.event);
				}
				registerConnectTransportProvider(m) {
					(this.b = m), this.a.fire();
				}
				async transport() {
					let m = 0,
						r = 4 * 60 * 2;
					for (; !this.b; ) {
						if (m >= r)
							throw new Error("No Connect transport provider registered.");
						await new Promise((u) => setTimeout(u, 250)), m++;
					}
					return this.b;
				}
			}
			(e.$p6b = C), (0, w.$lK)(e.$o6b, C, w.InstantiationType.Delayed);
		}),
		