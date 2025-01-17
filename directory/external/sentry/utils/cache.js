import '../../../require.js';
import '../../../exports.js';
define(de[2067], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makeFifoCache = t);
			function t(i) {
				let w = [],
					E = {};
				return {
					add(C, d) {
						for (; w.length >= i; ) {
							const m = w.shift();
							m !== void 0 && delete E[m];
						}
						E[C] && this.delete(C), w.push(C), (E[C] = d);
					},
					clear() {
						(E = {}), (w = []);
					},
					get(C) {
						return E[C];
					},
					size() {
						return w.length;
					},
					delete(C) {
						if (!E[C]) return !1;
						delete E[C];
						for (let d = 0; d < w.length; d++)
							if (w[d] === C) {
								w.splice(d, 1);
								break;
							}
						return !0;
					},
				};
			}
		}),
		