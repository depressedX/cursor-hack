import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/codicons.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../instantiation/common/instantiation.js';
import '../../registry/common/platform.js';
import './theme.js';
define(
			de[35],
			he([1, 0, 14, 6, 3, 5, 30, 212]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pP = e.$nP = e.$lP = e.$kP = e.$iP = void 0),
					(e.$jP = m),
					(e.$mP = r),
					(e.$oP = h),
					(C = mt(C)),
					(e.$iP = (0, E.$Mi)("themeService"));
				function m(n) {
					return { id: n };
				}
				(e.$kP = t.$ak.file), (e.$lP = t.$ak.folder);
				function r(n) {
					switch (n) {
						case d.ColorScheme.DARK:
							return "vs-dark";
						case d.ColorScheme.HIGH_CONTRAST_DARK:
							return "hc-black";
						case d.ColorScheme.HIGH_CONTRAST_LIGHT:
							return "hc-light";
						default:
							return "vs";
					}
				}
				e.$nP = { ThemingContribution: "base.contributions.theming" };
				class u {
					constructor() {
						(this.a = []), (this.a = []), (this.b = new i.$re());
					}
					onColorThemeChange(g) {
						return (
							this.a.push(g),
							this.b.fire(g),
							(0, w.$Yc)(() => {
								const p = this.a.indexOf(g);
								this.a.splice(p, 1);
							})
						);
					}
					get onThemingParticipantAdded() {
						return this.b.event;
					}
					getThemingParticipants() {
						return this.a;
					}
				}
				const a = new u();
				C.$Io.add(e.$nP.ThemingContribution, a);
				function h(n) {
					return a.onColorThemeChange(n);
				}
				class c extends w.$1c {
					constructor(g) {
						super(),
							(this.n = g),
							(this.h = g.getColorTheme()),
							this.D(this.n.onDidColorThemeChange((p) => this.q(p)));
					}
					q(g) {
						(this.h = g), this.updateStyles();
					}
					updateStyles() {}
					w(g, p) {
						let o = this.h.getColor(g);
						return o && p && (o = p(o, this.h)), o ? o.toString() : null;
					}
				}
				e.$pP = c;
			},
		),
		