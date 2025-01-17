import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../integration.js';
define(de[2111], he([1, 0, 80, 316]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.linkedErrorsIntegration = void 0);
			const w = "cause",
				E = 5,
				C = "LinkedErrors",
				d = (m = {}) => {
					const r = m.limit || E,
						u = m.key || w;
					return {
						name: C,
						preprocessEvent(a, h, c) {
							const n = c.getOptions();
							(0, t.applyAggregateErrorsToEvent)(
								t.exceptionFromError,
								n.stackParser,
								n.maxValueLength,
								u,
								r,
								a,
								h,
							);
						},
					};
				};
			e.linkedErrorsIntegration = (0, i.defineIntegration)(d);
		}),
		