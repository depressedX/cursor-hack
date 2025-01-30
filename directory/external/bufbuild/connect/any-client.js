import '../../../require.js';
import '../../../exports.js';
define(de[1077], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makeAnyClient = t);
			function t(i, w) {
				const E = {};
				for (const [C, d] of Object.entries(i.methods)) {
					const m = w({ ...d, localName: C, service: i });
					m != null && (E[C] = m);
				}
				return E;
			}
		}),
		