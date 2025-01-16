define(de[3792], he([1, 0, 20, 150, 2938]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$K5c = void 0);
			class E extends w.$J5c {
				get n() {
					return this.g;
				}
				getResourceSyncStateVersion(d) {
					return d === i.SyncResource.Extensions
						? this.n.options?.settingsSyncOptions?.extensionsSyncStateVersion
						: void 0;
				}
			}
			(e.$K5c = E), (0, t.$lK)(i.$4Rb, E, t.InstantiationType.Delayed);
		}),
		