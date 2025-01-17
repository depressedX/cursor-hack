import '../../../require.js';
import '../../../exports.js';
define(de[1078], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createContextValues = t),
				(e.createContextKey = i);
			function t() {
				return {
					get(w) {
						return w.id in this ? this[w.id] : w.defaultValue;
					},
					set(w, E) {
						return (this[w.id] = E), this;
					},
					delete(w) {
						return delete this[w.id], this;
					},
				};
			}
			function i(w, E) {
				return { id: Symbol(E?.description), defaultValue: w };
			}
		}),
		