import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './debug-build.js';
define(de[1437], he([1, 0, 80, 263]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.notifyEventProcessors = w);
			function w(E, C, d, m = 0) {
				return new t.SyncPromise((r, u) => {
					const a = E[m];
					if (C === null || typeof a != "function") r(C);
					else {
						const h = a({ ...C }, d);
						i.DEBUG_BUILD &&
							a.id &&
							h === null &&
							t.logger.log(`Event processor "${a.id}" dropped event`),
							(0, t.isThenable)(h)
								? h.then((c) => w(E, c, d, m + 1).then(r)).then(null, u)
								: w(E, h, d, m + 1)
										.then(r)
										.then(null, u);
					}
				});
			}
		}),
		