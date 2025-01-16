define(de[2156], he([1, 0, 1464]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.subscription = i),
				(e.useLexicalEditable = w);
			function i(E) {
				return {
					initialValueFn: () => E.isEditable(),
					subscribe: (C) => E.registerEditableListener(C),
				};
			}
			function w() {
				return (0, t.useLexicalSubscription)(i);
			}
		}),
		