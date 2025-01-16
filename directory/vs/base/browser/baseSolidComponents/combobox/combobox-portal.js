define(de[2178], he([1, 0, 2, 13, 2, 486]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mnb = C);
			function C(d) {
				const m = (0, E.$2mb)();
				return (0, t.createComponent)(i.Show, {
					get when() {
						return m.contentPresence.isPresent();
					},
					get children() {
						return (0, t.createComponent)(w.Portal, d);
					},
				});
			}
		}),
		