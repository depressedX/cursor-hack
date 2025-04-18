import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../platform/theme/common/colorUtils.js';
import '../../../../common/theme.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../common/terminalCommandGuideConfiguration.js';
define(
			de[3154],
			he([1, 0, 7, 3, 4, 10, 189, 51, 306, 123, 378, 1764]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*nls*/,
 E /*configuration*/,
 C /*capabilities*/,
 d /*colorRegistry*/,
 m /*colorUtils*/,
 r /*theme*/,
 u /*terminalExtensions*/,
 a /*terminalCommandGuideConfiguration*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Vc = void 0);
				let c = class extends i.$1c {
					static {
						h = this;
					}
					static {
						this.ID = "terminal.highlight";
					}
					static get(g) {
						return g.getContribution(h.ID);
					}
					constructor(g, p, o, f) {
						super(), (this.c = g), (this.f = f), (this.b = this.D(new i.$2c()));
					}
					xtermOpen(g) {
						(this.a = g),
							this.g(),
							this.f.onDidChangeConfiguration((p) => {
								p.affectsConfiguration(
									a.TerminalCommandGuideSettingId.ShowCommandGuide,
								) && this.g();
							});
					}
					g() {
						const g = this.a;
						if (!g) return;
						const p = this.f.getValue(a.$BVc).showCommandGuide;
						if (!!this.b.value !== p)
							if (!p) this.b.clear();
							else {
								const o = g.raw.element.querySelector(".xterm-screen"),
									f = g.raw.element.querySelector(".xterm-viewport");
								this.b.value = (0, i.$Xc)(
									(0, t.$0fb)(o, "mousemove", (b) => this.h(o, g, b)),
									(0, t.$0fb)(f, "mousemove", (b) => this.h(o, g, b)),
									(0, t.$0fb)(g.raw.element, "mouseout", () =>
										g.markTracker.showCommandGuide(void 0),
									),
									g.raw.onData(() => g.markTracker.showCommandGuide(void 0)),
								);
							}
					}
					h(g, p, o) {
						const f = g.getBoundingClientRect();
						if (!f) return;
						const b = Math.floor(o.offsetY / (f.height / p.raw.rows)),
							s = this.c.capabilities
								.get(C.TerminalCapability.CommandDetection)
								?.getCommandForLine(p.raw.buffer.active.viewportY + b);
						s && "getOutput" in s
							? p.markTracker.showCommandGuide(s)
							: p.markTracker.showCommandGuide(void 0);
					}
				};
				(c = h = Ne([j(3, E.$gj)], c)),
					(0, u.$qLc)(c.ID, c, !1),
					(e.$9Vc = (0, m.$wP)(
						"terminalCommandGuide.foreground",
						{
							dark: (0, m.$BP)(d.$HS, 1),
							light: (0, m.$BP)(d.$HS, 1),
							hcDark: r.$rFb,
							hcLight: r.$rFb,
						},
						(0, w.localize)(10501, null),
					));
			},
		)
