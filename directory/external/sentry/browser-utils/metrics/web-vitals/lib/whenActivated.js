import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../types.js';
define(de[730], he([1, 0, 366]), function (ce /*require*/,
 e /*exports*/,
 t /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.whenActivated = void 0);
			const i = (w) => {
				t.WINDOW.document && t.WINDOW.document.prerendering
					? addEventListener("prerenderingchange", () => w(), !0)
					: w();
			};
			e.whenActivated = i;
		})
