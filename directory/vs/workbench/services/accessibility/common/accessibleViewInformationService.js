define(de[1278], he([1, 0, 3, 91, 5, 21]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$RMb = e.$QMb = void 0),
				(e.$QMb = (0, w.$Mi)("accessibleViewInformationService"));
			let C = class extends t.$1c {
				constructor(m) {
					super(), (this.a = m);
				}
				hasShownAccessibleView(m) {
					return (
						this.a.getBoolean(
							`${i.$1K}${m}`,
							E.StorageScope.APPLICATION,
							!1,
						) === !0
					);
				}
			};
			(e.$RMb = C), (e.$RMb = C = Ne([j(0, E.$lq)], C));
		}),
		