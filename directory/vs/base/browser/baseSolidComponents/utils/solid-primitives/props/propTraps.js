define(de[1118], he([1, 0, 13]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ykb = void 0);
			function i() {
				return !0;
			}
			e.$Ykb = {
				get(w, E, C) {
					return E === t.$PROXY ? C : w.get(E);
				},
				has(w, E) {
					return w.has(E);
				},
				set: i,
				deleteProperty: i,
				getOwnPropertyDescriptor(w, E) {
					return {
						configurable: !0,
						enumerable: !0,
						get() {
							return w.get(E);
						},
						set: i,
						deleteProperty: i,
					};
				},
				ownKeys(w) {
					return w.keys();
				},
			};
		}),
		