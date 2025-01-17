import '../../../require.js';
import '../../../exports.js';
define(de[288], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hb = t);
			function t(i, w) {
				const E = this;
				let C = !1,
					d;
				return function () {
					if (C) return d;
					if (((C = !0), w))
						try {
							d = i.apply(E, arguments);
						} finally {
							w();
						}
					else d = i.apply(E, arguments);
					return d;
				};
			}
		}),
		