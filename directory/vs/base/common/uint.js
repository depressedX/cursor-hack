import '../../../require.js';
import '../../../exports.js';
define(de[210], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Constants = void 0),
				(e.$hf = i),
				(e.$if = w);
			var t;
			(function (E) {
				(E[(E.MAX_SAFE_SMALL_INTEGER = 1073741824)] = "MAX_SAFE_SMALL_INTEGER"),
					(E[(E.MIN_SAFE_SMALL_INTEGER = -1073741824)] =
						"MIN_SAFE_SMALL_INTEGER"),
					(E[(E.MAX_UINT_8 = 255)] = "MAX_UINT_8"),
					(E[(E.MAX_UINT_16 = 65535)] = "MAX_UINT_16"),
					(E[(E.MAX_UINT_32 = 4294967295)] = "MAX_UINT_32"),
					(E[(E.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536)] =
						"UNICODE_SUPPLEMENTARY_PLANE_BEGIN");
			})(t || (e.Constants = t = {}));
			function i(E) {
				return E < 0 ? 0 : E > t.MAX_UINT_8 ? t.MAX_UINT_8 : E | 0;
			}
			function w(E) {
				return E < 0 ? 0 : E > t.MAX_UINT_32 ? t.MAX_UINT_32 : E | 0;
			}
		})
