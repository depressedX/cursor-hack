import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../types.js';
define(de[883], he([1, 0, 366]), function (ce /*require*/,
 e /*exports*/,
 t /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getNavigationEntry = void 0);
			const i = () =>
				t.WINDOW.performance &&
				performance.getEntriesByType &&
				performance.getEntriesByType("navigation")[0];
			e.getNavigationEntry = i;
		})
