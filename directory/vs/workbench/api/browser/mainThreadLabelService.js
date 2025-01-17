import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/label/common/label.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
define(de[3353], he([1, 0, 3, 73, 88, 101]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$2pc = void 0);
			let C = class extends t.$1c {
				constructor(m, r) {
					super(), (this.b = r), (this.a = this.D(new t.$0c()));
				}
				$registerResourceLabelFormatter(m, r) {
					r.priority = !0;
					const u = this.b.registerCachedFormatter(r);
					this.a.set(m, u);
				}
				$unregisterResourceLabelFormatter(m) {
					this.a.deleteAndDispose(m);
				}
			};
			(e.$2pc = C),
				(e.$2pc = C =
					Ne([(0, E.$tmc)(w.$lbb.MainThreadLabelService), j(1, i.$3N)], C));
		}),
		