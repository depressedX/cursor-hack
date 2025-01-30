import '../../../require.js';
import '../../../exports.js';
import '../../../external/solid/store.js';
define(de[2195], he([1, 0, 193]), function (ce /*require*/,
 e /*exports*/,
 t /*store*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.produce = void 0),
				(e.messageToPlainMessage = i);
			function i(w) {
				const E = {};
				for (const C in w) {
					if (!w.hasOwnProperty(C)) continue;
					const d = w[C];
					typeof d != "function" && (E[C] = d);
				}
				return E;
			}
			Object.defineProperty(e, "produce", {
				enumerable: !0,
				get: function () {
					return t.produce;
				},
			});
		}),
		