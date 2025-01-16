define(de[729], he([1, 0, 366]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.onHidden = void 0);
			const i = (w) => {
				const E = (C) => {
					(C.type === "pagehide" ||
						(t.WINDOW.document &&
							t.WINDOW.document.visibilityState === "hidden")) &&
						w(C);
				};
				t.WINDOW.document &&
					(addEventListener("visibilitychange", E, !0),
					addEventListener("pagehide", E, !0));
			};
			e.onHidden = i;
		}),
		