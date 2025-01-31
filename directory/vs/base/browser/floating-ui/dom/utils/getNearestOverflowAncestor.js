import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getParentNode.js';
import './is.js';
define(de[2660], he([1, 0, 1162, 324]), function (ce /*require*/,
 e /*exports*/,
 t /*getParentNode*/,
 i /*is*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$zmb = w);
			function w(E) {
				const C = (0, t.$ymb)(E);
				return (0, i.$nmb)(C)
					? C.ownerDocument.body
					: (0, i.$gmb)(C) && (0, i.$jmb)(C)
						? C
						: w(C);
			}
		})
