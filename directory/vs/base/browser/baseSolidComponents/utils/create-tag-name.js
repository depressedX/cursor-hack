import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
import '../../../../../external/solid/solid.js';
define(de[1161], he([1, 0, 369, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Wkb = w);
			function w(C, d) {
				const [m, r] = (0, i.createSignal)(E(d?.()));
				return (
					(0, i.createEffect)(() => {
						r(C()?.tagName.toLowerCase() || E(d?.()));
					}),
					m
				);
			}
			function E(C) {
				return (0, t.$zjb)(C) ? C : void 0;
			}
		})
