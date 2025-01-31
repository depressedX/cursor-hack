import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/path.js';
import '../../instantiation/common/instantiation.js';
define(de[941], he([1, 0, 54, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*path*/,
 i /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Utils = e.$b2 = void 0),
				(e.$b2 = (0, i.$Mi)("IV8InspectProfilingService"));
			var w;
			(function (E) {
				function C(m) {
					return !!(m.samples && m.timeDeltas);
				}
				E.isValidProfile = C;
				function d(m, r = "noAbsolutePaths") {
					for (const u of m.nodes)
						u.callFrame &&
							u.callFrame.url &&
							((0, t.$nc)(u.callFrame.url) ||
								/^\w[\w\d+.-]*:\/\/\/?/.test(u.callFrame.url)) &&
							(u.callFrame.url = (0, t.$oc)(r, (0, t.$sc)(u.callFrame.url)));
					return m;
				}
				E.rewriteAbsolutePaths = d;
			})(w || (e.Utils = w = {}));
		})
