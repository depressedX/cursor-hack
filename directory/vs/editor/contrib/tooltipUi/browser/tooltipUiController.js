import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import './tooltipUiWidgets.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../workbench/contrib/terminal/common/terminal.js';
define(
		de[3166],
		he([1, 0, 3, 1610, 31, 5, 145]),
		function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*tooltipUiWidgets*/,
 w /*commands*/,
 E /*instantiation*/,
 C /*terminal*/) {
			"use strict";
			var d;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Mlc = void 0),
				(i = xi(i));
			const m = !1,
				r = !1;
			let u = class extends t.$1c {
				static {
					d = this;
				}
				static {
					this.ID = "editor.contrib.tooltipUiController";
				}
				constructor(h, c, n) {
					super(),
						(this.b = c),
						(this.c = n),
						(this.a = h),
						m &&
							this.show(
								"editor",
								"editor.cmdk",
								"Inline edits (\u2318 + K)",
								"Select code and use \u2318 + K to edit it in-place instead of using chat",
							),
						r &&
							this.show(
								"terminal",
								"terminal.cmdk",
								"Inline edits (\u2318 + K)",
								"Select code and use \u2318 + K to edit it in-place instead of using chat",
							);
				}
				static get(h) {
					return h.getContribution(d.ID);
				}
				show(h, c, n, g) {
					h === "terminal"
						? this.c.executeCommand(C.TerminalCommandId.AddTooltip, {
								tooltipInfo: { header: n, subheader: g, name: c },
							})
						: h === "editor" &&
							this.D(
								this.b.createInstance(i.default, this.a, {
									header: n,
									subheader: g,
									name: c,
								}),
							);
				}
			};
			(e.$Mlc = u), (e.$Mlc = u = d = Ne([j(1, E.$Li), j(2, w.$ek)], u));
		},
	),
		