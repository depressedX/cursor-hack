import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[2056], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.generateUniqueID = void 0);
			const t = () =>
				`v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
			e.generateUniqueID = t;
		})
