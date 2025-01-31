import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../core/range.js';
define(de[496], he([1, 0, 5, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bub = void 0),
				(e.$cub = w),
				(e.$bub = (0, t.$Mi)("markerDecorationsService"));
			function w(E) {
				return (
					E &&
					typeof E.message == "string" &&
					typeof E.editorUri == "string" &&
					(typeof E.range > "u" || i.$iL.isIRange(E.range)) &&
					(typeof E.preserveSelection > "u" ||
						typeof E.preserveSelection == "boolean") &&
					(typeof E.lastBubble > "u" || typeof E.lastBubble == "boolean")
				);
			}
		})
