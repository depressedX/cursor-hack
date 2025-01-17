import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/color.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../css!vs/editor/contrib/cMultiFileHighlight/browser/multiFileHighlightWidget.js';
define(
			de[2859],
			he([1, 0, 7, 159, 97, 3, 56, 38, 35, 2290]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qlc = void 0),
					(t = mt(t));
				const r = "textLink.foreground";
				let u = class extends E.$1c {
					constructor(h, c, n) {
						super(),
							(this.h = h),
							(this.j = c),
							(this.f = null),
							(this.a = t.$("div.cursorMultiFileHighlightWidgetBackground"));
						const g = (p) => {
							const o = p.getColor(r),
								f = new w.$UL(new w.$RL(o.rgba.r, o.rgba.g, o.rgba.b, 0.25));
							this.a.style.backgroundColor = f.toString();
						};
						n.onDidColorThemeChange(g),
							g(n.getColorTheme()),
							(this.a.style.zIndex = "0"),
							(this.a.style.width = "1000px"),
							this.D(i.$Qhb.ignoreTarget(this.a)),
							this.h.addContentWidget(this);
					}
					dispose() {
						super.dispose(), this.h.removeContentWidget(this);
					}
					getId() {
						return "MultiFileHighlightWidget" + this.j;
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.f;
					}
					update(h, c) {
						this.f = {
							position: { lineNumber: h, column: 1 },
							preference: [C.ContentWidgetPositionPreference.EXACT],
						};
						const n =
							this.h.getOption(d.EditorOption.suggestLineHeight) ||
							this.h.getOption(d.EditorOption.fontInfo).lineHeight;
						(this.a.style.height = `${n * (c - h + 1)}px`),
							this.h.layoutContentWidget(this);
					}
				};
				(e.$Qlc = u), (e.$Qlc = u = Ne([j(2, m.$iP)], u));
			},
		),
		