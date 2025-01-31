import '../../../../require.js';
import '../../../../exports.js';
define(de[774], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_J = t),
				(e.$aK = i),
				(e.$bK = w),
				(e.$cK = E),
				(e.$dK = C),
				(e.$eK = d);
			function t(m) {
				return [...m.entries()];
			}
			function i(m) {
				return m ? [...m.entries()] : [];
			}
			function w(m) {
				return new Map(m);
			}
			function E(m) {
				return new Map(m ?? []);
			}
			function C(m) {
				return Array.from(m.entries()).map((r) => [
					r[0],
					t(r[1].map),
					i(r[1].descriptionMap),
				]);
			}
			function d(m) {
				return new Map(
					m.map((r) => [r[0], { map: w(r[1]), descriptionMap: E(r[2]) }]),
				);
			}
		})
