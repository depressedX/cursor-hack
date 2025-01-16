define(de[280], he([1, 0, 3, 20, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4Db = e.$3Db = void 0),
				(e.$3Db = (0, w.$Mi)("everythingProviderService"));
			class E extends t.$1c {
				constructor() {
					super();
				}
				registerEverythingProvider(d) {
					this.provider = d;
				}
				unregisterEverythingProvider() {
					this.provider = void 0;
				}
				registerEverythingProviderAllLocal(d) {
					this.onlyLocalProvider = d;
				}
				unregisterEverythingProviderAllLocal() {
					this.onlyLocalProvider = void 0;
				}
			}
			(e.$4Db = E), (0, i.$lK)(e.$3Db, E, i.InstantiationType.Delayed);
		}),
		