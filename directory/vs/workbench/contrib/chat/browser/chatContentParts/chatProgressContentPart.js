import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/aria/aria.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/themables.js';
import '../../common/chatViewModel.js';
define(
			de[1721],
			he([1, 0, 7, 127, 14, 94, 3, 26, 283]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uUb = void 0);
				class r extends C.$1c {
					constructor(h, c, n, g, p) {
						super();
						const o = n.content.slice(n.index + 1);
						if (
							((this.a = g ?? u(o, n.element)),
							p !== !0 && o.some((y) => y.kind !== "progressMessage"))
						) {
							this.domNode = (0, t.$)("");
							return;
						}
						this.a && (0, i.$oib)(h.content.value);
						const b = this.a
								? d.ThemeIcon.modify(w.$ak.loading, "spin").id
								: w.$ak.check.id,
							s = new E.$cl(`$(${b}) ${h.content.value}`, {
								supportThemeIcons: !0,
							}),
							l = this.D(c.render(s));
						l.element.classList.add("progress-step"),
							(this.domNode = l.element);
					}
					hasSameContent(h, c, n) {
						const g = u(c, n);
						return h.kind === "progressMessage" && this.a === g;
					}
				}
				e.$uUb = r;
				function u(a, h) {
					return (0, m.$$Tb)(h) && !h.isComplete && a.length === 0;
				}
			},
		),
		