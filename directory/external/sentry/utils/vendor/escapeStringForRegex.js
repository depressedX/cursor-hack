import '../../../../require.js';
import '../../../../exports.js';
define(de[2073], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.escapeStringForRegex = t);
			function t(i) {
				return i.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
			}
		})
