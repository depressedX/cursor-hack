import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
define(de[1377], he([1, 0, 2, 2, 147]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*simpleButton*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$lzc = void 0);
			const E = (C) =>
				(0, t.createComponent)(
					w.$rdc,
					(0, i.mergeProps)(C, {
						get style() {
							return { padding: "2px 6px", "font-size": "11px", ...C.style };
						},
						get tabFocusable() {
							return C.tabFocusable;
						},
					}),
				);
			e.$lzc = E;
		})
