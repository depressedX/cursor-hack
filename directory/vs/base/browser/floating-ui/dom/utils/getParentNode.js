import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getDocumentElement.js';
import './is.js';
import './node.js';
define(de[1162], he([1, 0, 538, 324, 594]), function (ce /*require*/,
 e /*exports*/,
 t /*getDocumentElement*/,
 i /*is*/,
 w /*node*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ymb = E);
			function E(C) {
				if ((0, w.$fmb)(C) === "html") return C;
				const d =
					C.assignedSlot ||
					C.parentNode ||
					((0, i.$imb)(C) && C.host) ||
					(0, t.$xmb)(C);
				return (0, i.$imb)(d) ? d.host : d;
			}
		})
