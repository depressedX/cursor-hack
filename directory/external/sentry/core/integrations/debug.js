import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../integration.js';
define(de[2106], he([1, 0, 80, 316]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.debugIntegration = void 0);
			const w = "Debug",
				E = (C = {}) => {
					const d = { debugger: !1, stringify: !1, ...C };
					return {
						name: w,
						setup(m) {
							m.on("beforeSendEvent", (r, u) => {
								if (d.debugger) debugger;
								(0, t.consoleSandbox)(() => {
									d.stringify
										? (console.log(JSON.stringify(r, null, 2)),
											u &&
												Object.keys(u).length &&
												console.log(JSON.stringify(u, null, 2)))
										: (console.log(r),
											u && Object.keys(u).length && console.log(u));
								});
							});
						},
					};
				};
			e.debugIntegration = (0, i.defineIntegration)(E);
		}),
		