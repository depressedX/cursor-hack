import '../../../require.js';
import '../../../exports.js';
define(de[2062], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getBreadcrumbLogLevelFromHttpStatusCode = t);
			function t(i) {
				if (i !== void 0)
					return i >= 400 && i < 500 ? "warning" : i >= 500 ? "error" : void 0;
			}
		}),
		