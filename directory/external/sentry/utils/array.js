import '../../../require.js';
import '../../../exports.js';
define(de[2061], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.flatten = t);
			function t(i) {
				const w = [],
					E = (C) => {
						C.forEach((d) => {
							Array.isArray(d) ? E(d) : w.push(d);
						});
					};
				return E(i), w;
			}
		})
