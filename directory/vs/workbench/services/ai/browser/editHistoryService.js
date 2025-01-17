import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[3226], he([1, 0, 3, 20, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$kqc = e.$jqc = void 0),
				(e.$jqc = (0, w.$Mi)("editHistoryService"));
			class E extends t.$1c {
				constructor() {
					super(), (this.a = void 0);
				}
				registerEditHistoryProvider(d) {
					this.a = d;
				}
				unregisterEditHistoryProvider() {
					this.a = void 0;
				}
			}
			(e.$kqc = E), (0, i.$lK)(e.$jqc, E, i.InstantiationType.Delayed);
		}),
		