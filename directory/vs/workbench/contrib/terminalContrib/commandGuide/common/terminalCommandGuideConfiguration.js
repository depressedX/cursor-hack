define(de[1764], he([1, 0, 4]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$CVc = e.$BVc = e.TerminalCommandGuideSettingId = void 0);
			var i;
			(function (w) {
				w.ShowCommandGuide =
					"terminal.integrated.shellIntegration.showCommandGuide";
			})(i || (e.TerminalCommandGuideSettingId = i = {})),
				(e.$BVc = "terminal.integrated.shellIntegration"),
				(e.$CVc = {
					[i.ShowCommandGuide]: {
						restricted: !0,
						markdownDescription: (0, t.localize)(10502, null),
						type: "boolean",
						default: !0,
					},
				});
		}),
		define(
			de[3154],
			he([1, 0, 7, 3, 4, 10, 189, 51, 306, 123, 378, 1764]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
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
		),
		