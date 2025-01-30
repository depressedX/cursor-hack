import '../../../../require.js';
import '../../../../exports.js';
import './descriptors.js';
define(de[20], he([1, 0, 102]), function (ce /*require*/,
 e /*exports*/,
 t /*descriptors*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.InstantiationType = void 0),
				(e.$lK = E),
				(e.$mK = C);
			const i = [];
			var w;
			(function (d) {
				(d[(d.Eager = 0)] = "Eager"), (d[(d.Delayed = 1)] = "Delayed");
			})(w || (e.InstantiationType = w = {}));
			function E(d, m, r) {
				m instanceof t.$Ji || (m = new t.$Ji(m, [], !!r)), i.push([d, m]);
			}
			function C() {
				return i;
			}
		}),
		