import '../../../require.js';
import '../../../exports.js';
import './types.js';
define(de[903], he([1, 0, 28]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8j = w),
				(e.$9j = E);
			const i = Object.create(null);
			function w(C, d) {
				if ((0, t.$lg)(d)) {
					const m = i[d];
					if (m === void 0)
						throw new Error(`${C} references an unknown codicon: ${d}`);
					d = m;
				}
				return (i[C] = d), { id: C };
			}
			function E() {
				return i;
			}
		}),
		