import '../../../require.js';
import '../../../exports.js';
define(de[1422], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.memoBuilder = t);
			function t() {
				const i = typeof WeakSet == "function",
					w = i ? new WeakSet() : [];
				function E(d) {
					if (i) return w.has(d) ? !0 : (w.add(d), !1);
					for (let m = 0; m < w.length; m++) if (w[m] === d) return !0;
					return w.push(d), !1;
				}
				function C(d) {
					if (i) w.delete(d);
					else
						for (let m = 0; m < w.length; m++)
							if (w[m] === d) {
								w.splice(m, 1);
								break;
							}
				}
				return [E, C];
			}
		}),
		