import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1134], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qp = void 0),
				(e.$pp = i);
			const t = "Offline";
			function i(E) {
				return E instanceof w
					? !0
					: E instanceof Error && E.name === t && E.message === t;
			}
			class w extends Error {
				constructor() {
					super(t), (this.name = this.message);
				}
			}
			e.$qp = w;
		})
