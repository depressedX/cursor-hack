import '../../../require.js';
import '../../../exports.js';
import './hotReload.js';
import './observable.js';
define(de[755], he([1, 0, 1559, 77]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Tpb = w),
				(e.$Upb = E);
			function w(C, d) {
				return E([C], d), C;
			}
			function E(C, d) {
				(0, t.$Rpb)() &&
					(0, i.observableSignalFromEvent)("reload", (r) =>
						(0, t.$Spb)(({ oldExports: u }) => {
							if ([...Object.values(u)].some((a) => C.includes(a)))
								return (a) => (r(void 0), !0);
						}),
					).read(d);
			}
		}),
		