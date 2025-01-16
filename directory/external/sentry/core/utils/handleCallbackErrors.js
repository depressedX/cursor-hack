define(de[1097], he([1, 0, 80]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.handleCallbackErrors = i);
			function i(E, C, d = () => {}) {
				let m;
				try {
					m = E();
				} catch (r) {
					throw (C(r), d(), r);
				}
				return w(m, C, d);
			}
			function w(E, C, d) {
				return (0, t.isThenable)(E)
					? E.then(
							(m) => (d(), m),
							(m) => {
								throw (C(m), d(), m);
							},
						)
					: (d(), E);
			}
		}),
		