import '../../../../require.js';
import '../../../../exports.js';
define(de[2059], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parameterize = t);
			function t(i, ...w) {
				const E = new String(String.raw(i, ...w));
				return (
					(E.__sentry_template_string__ = i
						.join("\0")
						.replace(/%/g, "%%")
						.replace(/\0/g, "%s")),
					(E.__sentry_template_values__ = w),
					E
				);
			}
		}),
		