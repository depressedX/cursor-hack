define(de[1458], he([1, 0, 144, 80, 889]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.linkedErrorsIntegration = void 0);
			const E = "cause",
				C = 5,
				d = "LinkedErrors",
				m = (r = {}) => {
					const u = r.limit || C,
						a = r.key || E;
					return {
						name: d,
						preprocessEvent(h, c, n) {
							const g = n.getOptions();
							(0, i.applyAggregateErrorsToEvent)(
								w.exceptionFromError,
								g.stackParser,
								g.maxValueLength,
								a,
								u,
								h,
								c,
							);
						},
					};
				};
			e.linkedErrorsIntegration = (0, t.defineIntegration)(m);
		}),
		