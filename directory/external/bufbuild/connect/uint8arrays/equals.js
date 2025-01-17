import '../../../../require.js';
import '../../../../exports.js';
define(de[2022], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.equals = t);
			function t(i, w) {
				if (i === w) return !0;
				if (i.byteLength !== w.byteLength) return !1;
				for (let E = 0; E < i.byteLength; E++) if (i[E] !== w[E]) return !1;
				return !0;
			}
		}),
		