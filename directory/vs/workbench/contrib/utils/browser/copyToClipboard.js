import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
define(de[1008], he([1, 0, 7]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Y$b = void 0);
			const i = (w, E) => {
				const C = (0, t.$Ogb)(),
					d = C.document.createElement("textarea");
				(d.value = w), C.document.body.appendChild(d), d.select();
				try {
					C.document.execCommand("copy"), E?.();
				} catch (m) {
					return console.error("Failed to copy text: ", m), !1;
				}
				return C.document.body.removeChild(d), !0;
			};
			e.$Y$b = i;
		}),
		