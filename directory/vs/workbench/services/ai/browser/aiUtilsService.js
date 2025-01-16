define(de[567], he([1, 0, 3, 20, 5, 25]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$46b = e.$36b = void 0),
				(e.$36b = (0, w.$Mi)("aiUtilsService"));
			let C = class extends t.$1c {
				constructor(m) {
					super(), (this.a = m);
				}
				getWorkspaceRootPath() {
					const m = this.a.getWorkspace().folders;
					return m.length > 0 ? m[0].uri.path : void 0;
				}
			};
			(e.$46b = C),
				(e.$46b = C = Ne([j(0, E.$Vi)], C)),
				(0, i.$lK)(e.$36b, C, i.InstantiationType.Delayed);
		}),
		