import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/color.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../css!vs/editor/contrib/cLoadingIndicator/browser/loadingIndicatorWidget.js';
define(
			de[2857],
			he([1, 0, 7, 159, 97, 3, 56, 35, 2289]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Slc = void 0),
					(t = mt(t));
				let m = class extends E.$1c {
					constructor(u, a) {
						super(),
							(this.j = u),
							(this.f = null),
							(this.h = !0),
							(this.a = t.$("div.cursorLoadingIndicatorWidgetBackground"));
						const h = t.$("div.loading-indicator-spinner");
						t.$fhb(this.a, h);
						const c = (n) => {
							let g = n.getColor("textLink.foreground"),
								p = new w.$UL(new w.$RL(g.rgba.r, g.rgba.g, g.rgba.b, 0.5));
							(h.style.border = `2px solid ${p.toString()}`),
								(g = n.getColor("list.deemphasizedForeground")),
								(p = new w.$UL(new w.$RL(g.rgba.r, g.rgba.g, g.rgba.b, 0))),
								(h.style.borderBottomColor = `${p.toString()}`);
						};
						a.onDidColorThemeChange(c),
							c(a.getColorTheme()),
							this.D(i.$Qhb.ignoreTarget(this.a)),
							this.j.addContentWidget(this);
					}
					dispose() {
						super.dispose(), this.j.removeContentWidget(this);
					}
					getId() {
						return "LoadingIndicatorWidget";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.h ? null : this.f;
					}
					update(u) {
						(this.f = {
							position: u,
							preference: [C.ContentWidgetPositionPreference.EXACT],
						}),
							(this.h = !1),
							this.j.layoutContentWidget(this);
					}
					hide() {
						(this.h = !0), this.j.layoutContentWidget(this);
					}
				};
				(e.$Slc = m), (e.$Slc = m = Ne([j(1, d.$iP)], m));
			},
		),
		