import '../../../../../require.js';
import '../../../../../exports.js';
define(de[2177], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$tlb = i);
		const t = ["button", "color", "file", "image", "reset", "submit"];
		function i(w) {
			const E = w.tagName.toLowerCase();
			return E === "button"
				? !0
				: E === "input" && w.type
					? t.indexOf(w.type) !== -1
					: !1;
		}
	})
