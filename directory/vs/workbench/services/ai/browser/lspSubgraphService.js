import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(de[1281], he([1, 0, 20, 5, 45]), function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*reactiveStorageService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$c0b = e.$b0b = void 0),
				(e.$b0b = (0, i.$Mi)("lspSubgraphService"));
			let E = class {
				constructor(d) {
					this.b = d;
				}
				registerProvider(d) {
					this.a = d;
				}
				unregisterProvider() {
					this.a = void 0;
				}
			};
			(e.$c0b = E),
				(e.$c0b = E = Ne([j(0, w.$0zb)], E)),
				(0, t.$lK)(e.$b0b, E, t.InstantiationType.Delayed);
		})
