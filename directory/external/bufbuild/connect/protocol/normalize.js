import '../../../../require.js';
import '../../../../exports.js';
define(de[1393], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.normalize = t),
				(e.normalizeIterable = i);
			function t(w, E) {
				return E instanceof w ? E : new w(E);
			}
			function i(w, E) {
				function C(d) {
					return d.done === !0 ? d : { done: d.done, value: t(w, d.value) };
				}
				return {
					[Symbol.asyncIterator]() {
						const d = E[Symbol.asyncIterator](),
							m = { next: () => d.next().then(C) };
						return (
							d.throw !== void 0 && (m.throw = (r) => d.throw(r).then(C)),
							d.return !== void 0 && (m.return = (r) => d.return(r).then(C)),
							m
						);
					},
				};
			}
		}),
		