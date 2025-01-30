import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/log/common/log.js';
import '../../../platform/log/common/logService.js';
import './extHostInitDataService.js';
define(Pe[513], Ne([1, 0, 10, 14, 489, 34]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$kjd = void 0);
			let P = class extends S.$_eb {
				constructor(l, n, p) {
					const y = p.remote.isRemote
							? "remoteexthost"
							: l
								? "workerexthost"
								: "exthost",
						d = p.remote.isRemote
							? (0, e.localize)(2713, null)
							: l
								? (0, e.localize)(2714, null)
								: (0, e.localize)(2715, null);
					super(n.createLogger(y, { name: d }));
				}
			};
			(t.$kjd = P), (t.$kjd = P = wt([rt(1, r.$jk), rt(2, N.$98)], P));
		}),
		