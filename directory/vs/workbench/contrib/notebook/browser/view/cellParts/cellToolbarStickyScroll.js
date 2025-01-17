import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/numbers.js';
define(de[1741], he([1, 0, 201]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$P3b = i);
			function i(w, E, C, d) {
				const m = d?.extraOffset ?? 0,
					r = d?.min ?? 0,
					u = () => {
						if (E.isInputCollapsed) C.style.top = "";
						else {
							const a = w.scrollTop,
								h = w.getAbsoluteTopOfElement(E),
								c = a - h + m,
								n =
									E.layoutInfo.editorHeight + E.layoutInfo.statusBarHeight - 45,
								g = n > 20 ? (0, t.$Zm)(r, c, n) : r;
							C.style.top = `${g}px`;
						}
					};
				return u(), w.onDidScroll(() => u());
			}
		}),
		