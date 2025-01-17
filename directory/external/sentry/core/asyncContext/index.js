import '../../../../require.js';
import '../../../../exports.js';
import '../carrier.js';
import './stackStrategy.js';
define(de[733], he([1, 0, 578, 2104]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.setAsyncContextStrategy = w),
				(e.getAsyncContextStrategy = E);
			function w(C) {
				const d = (0, t.getMainCarrier)(),
					m = (0, t.getSentryCarrier)(d);
				m.acs = C;
			}
			function E(C) {
				const d = (0, t.getSentryCarrier)(C);
				return d.acs ? d.acs : (0, i.getStackAsyncContextStrategy)();
			}
		}),
		