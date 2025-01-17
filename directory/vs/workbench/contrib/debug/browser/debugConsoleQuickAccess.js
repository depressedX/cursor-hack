import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/filters.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../services/views/common/viewsService.js';
import './debugCommands.js';
import '../common/debug.js';
define(
			de[3818],
			he([1, 0, 132, 4, 31, 392, 89, 425, 112]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qQc = void 0);
				let r = class extends E.$GLb {
					constructor(a, h, c) {
						super(d.$6Hc, { canAcceptInBackground: !0 }),
							(this.a = a),
							(this.b = h),
							(this.h = c);
					}
					g(a, h, c) {
						const n = [];
						this.a
							.getModel()
							.getSessions(!0)
							.filter((p) => p.hasSeparateRepl())
							.forEach((p, o) => {
								const f = this.m(p, o, a);
								f && n.push(f);
							}),
							n.length > 0 && n.push({ type: "separator" });
						const g = (0, i.localize)(5470, null);
						return (
							n.push({
								label: `$(plus) ${g}`,
								ariaLabel: g,
								accept: () => this.h.executeCommand(d.$hHc),
							}),
							n
						);
					}
					m(a, h, c) {
						const n = a.name,
							g = (0, t.$Zk)(c, n, !0);
						if (g)
							return {
								label: n,
								highlights: { label: g },
								accept: (p, o) => {
									this.a.focusStackFrame(void 0, void 0, a, { explicit: !0 }),
										this.b.isViewVisible(m.$Y4) || this.b.openView(m.$Y4, !0);
								},
							};
					}
				};
				(e.$qQc = r),
					(e.$qQc = r = Ne([j(0, m.$75), j(1, C.$HMb), j(2, w.$ek)], r));
			},
		),
		