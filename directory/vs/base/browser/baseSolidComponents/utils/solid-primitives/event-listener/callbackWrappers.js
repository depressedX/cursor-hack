import '../../../../../../../require.js';
import '../../../../../../../exports.js';
define(de[2183], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$flb = e.$elb = e.$dlb = void 0);
			const t = (E) => (C) => {
				C.preventDefault(), E(C);
			};
			e.$dlb = t;
			const i = (E) => (C) => {
				C.stopPropagation(), E(C);
			};
			e.$elb = i;
			const w = (E) => (C) => {
				C.stopImmediatePropagation(), E(C);
			};
			e.$flb = w;
		}),
		