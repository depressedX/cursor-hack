import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../common/chatAgents.js';
import '../common/chatParserTypes.js';
define(
			de[1720],
			he([1, 0, 7, 183, 94, 3, 4, 153, 329]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RXb = void 0),
					(t = mt(t));
				const r = t.$;
				let u = class extends E.$1c {
					constructor(h, c, n, g, p, o) {
						super(), (this.a = n), (this.b = g), (this.c = p), (this.f = o);
						const f = t.$fhb(h, r(".interactive-session-followups"));
						c.forEach((b) => this.g(f, b));
					}
					g(h, c) {
						if (!this.f.getDefaultAgent(this.a)) return;
						const n = (0, m.$12)(this.f, this.a, "", c.agentId, c.subCommand);
						if (n === void 0) return;
						const g = c.kind === "reply" ? c.title || c.message : c.title,
							p = c.kind === "reply" ? c.message : c.title,
							o = (n + (("tooltip" in c && c.tooltip) || p)).trim(),
							f = this.D(new i.$oob(h, { ...this.b, title: o }));
						c.kind === "reply"
							? f.element.classList.add("interactive-followup-reply")
							: c.kind === "command" &&
								f.element.classList.add("interactive-followup-command"),
							(f.element.ariaLabel = (0, C.localize)(4669, null, g)),
							(f.label = new w.$cl(g)),
							this.D(f.onDidClick(() => this.c(c)));
					}
				};
				(e.$RXb = u), (e.$RXb = u = Ne([j(5, d.$c3)], u));
			},
		),
		