import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/date.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../../../../../platform/hover/browser/hover.js';
define(
			de[1761],
			he([1, 0, 7, 15, 275, 94, 3, 4, 10, 49, 117, 72]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*async*/,
 w /*date*/,
 E /*htmlContent*/,
 C /*lifecycle*/,
 d /*nls*/,
 m /*configuration*/,
 r /*contextView*/,
 u /*terminal*/,
 a /*hover*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Hb = e.DecorationSelector = void 0),
					(e.$9Hb = g),
					(t = mt(t));
				var h;
				(function (p) {
					(p[(p.DefaultDimension = 16)] = "DefaultDimension"),
						(p[(p.MarginLeft = -17)] = "MarginLeft");
				})(h || (h = {}));
				var c;
				(function (p) {
					(p.CommandDecoration = "terminal-command-decoration"),
						(p.Hide = "hide"),
						(p.ErrorColor = "error"),
						(p.DefaultColor = "default-color"),
						(p.Default = "default"),
						(p.Codicon = "codicon"),
						(p.XtermDecoration = "xterm-decoration"),
						(p.OverviewRuler = ".xterm-decoration-overview-ruler");
				})(c || (e.DecorationSelector = c = {}));
				let n = class extends C.$1c {
					constructor(o, f, b) {
						super(),
							(this.c = o),
							(this.b = !1),
							this.D(b.onDidShowContextMenu(() => (this.b = !0))),
							this.D(b.onDidHideContextMenu(() => (this.b = !1))),
							(this.a = this.D(new i.$Jh(f.getValue("workbench.hover.delay"))));
					}
					hideHover() {
						this.a.cancel(), this.c.hideHover();
					}
					createHover(o, f, b) {
						return (0, C.$Xc)(
							t.$0fb(o, t.$$gb.MOUSE_ENTER, () => {
								this.b ||
									this.a.trigger(() => {
										let s = `${(0, d.localize)(10188, null)}`;
										if (
											((s += `

---

`),
											f)
										)
											if (f.markProperties || b)
												if (f.markProperties?.hoverMessage || b)
													s = f.markProperties?.hoverMessage || b || "";
												else return;
											else if (f.duration) {
												const l = (0, w.$fn)(f.duration);
												f.exitCode
													? f.exitCode === -1
														? (s += (0, d.localize)(
																10189,
																null,
																(0, w.$dn)(f.timestamp, !0),
																l,
															))
														: (s += (0, d.localize)(
																10190,
																null,
																(0, w.$dn)(f.timestamp, !0),
																l,
																f.exitCode,
															))
													: (s += (0, d.localize)(
															10191,
															null,
															(0, w.$dn)(f.timestamp, !0),
															l,
														));
											} else
												f.exitCode
													? f.exitCode === -1
														? (s += (0, d.localize)(
																10192,
																null,
																(0, w.$dn)(f.timestamp, !0),
															))
														: (s += (0, d.localize)(
																10193,
																null,
																(0, w.$dn)(f.timestamp, !0),
																f.exitCode,
															))
													: (s += (0, d.localize)(
															10194,
															null,
															(0, w.$dn)(f.timestamp, !0),
														));
										else if (b) s = b;
										else return;
										this.c.showHover({ content: new E.$cl(s), target: o });
									});
							}),
							t.$0fb(o, t.$$gb.MOUSE_LEAVE, () => this.hideHover()),
							t.$0fb(o, t.$$gb.MOUSE_OUT, () => this.hideHover()),
						);
					}
				};
				(e.$8Hb = n),
					(e.$8Hb = n = Ne([j(0, a.$Uyb), j(1, m.$gj), j(2, r.$Xxb)], n));
				function g(p, o) {
					if (!o) return;
					const f = p.inspect(u.TerminalSettingId.FontSize).value,
						b = p.inspect(u.TerminalSettingId.FontSize).defaultValue,
						s = p.inspect(u.TerminalSettingId.LineHeight).value;
					if (
						typeof f == "number" &&
						typeof b == "number" &&
						typeof s == "number"
					) {
						const l = f / b <= 1 ? f / b : 1;
						(o.style.width = `${l * h.DefaultDimension}px`),
							(o.style.height = `${l * h.DefaultDimension * s}px`),
							(o.style.fontSize = `${l * h.DefaultDimension}px`),
							(o.style.marginLeft = `${l * h.MarginLeft}px`);
					}
				}
			},
		),
		