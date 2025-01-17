import '../../../../require.js';
import '../../../../exports.js';
define(de[870], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.contentTypeMatcher = i);
			const t = 1024;
			function i(...w) {
				const E = new Map(),
					C = w.reduce(
						(m, r) => m.concat("supported" in r ? r.supported : r),
						[],
					);
				function d(m) {
					if (m === null || m.length == 0) return !1;
					const r = E.get(m);
					if (r !== void 0) return r;
					const u = C.some((a) => a.test(m));
					return E.size < t && E.set(m, u), u;
				}
				return (d.supported = C), d;
			}
		}),
		