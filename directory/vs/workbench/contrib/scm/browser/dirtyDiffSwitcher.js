import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/actions.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../platform/theme/common/colorRegistry.js';
define(
			de[3128],
			he([1, 0, 4, 50, 49, 198, 106, 35, 255, 51]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0mc = e.$9mc = void 0),
					(t = mt(t));
				let u = class extends E.$ajb {
					constructor(c, n, g, p, o) {
						const f = n.map((S) => ({ provider: S, text: S }));
						let b = n.indexOf(g);
						b === -1 && (b = 0);
						const s = { ...C.$Fyb },
							l = o.getColorTheme(),
							y = l.getColor(r.$8P),
							v = l.getColor(m.$0Mb)?.makeOpaque(y) ?? y;
						(s.selectBackground = v.lighten(0.6).toString()),
							super(null, c, f, b, p, s, { ariaLabel: t.localize(8990, null) }),
							(this.a = f);
					}
					setSelection(c) {
						const n = this.a.findIndex((g) => g.provider === c);
						this.select(n);
					}
					r(c, n) {
						return this.a[n];
					}
					render(c) {
						super.render(c), this.setFocusable(!0);
					}
				};
				(e.$9mc = u), (e.$9mc = u = Ne([j(3, w.$Wxb), j(4, d.$iP)], u));
				class a extends i.$rj {
					static {
						this.ID = "quickDiff.base.switch";
					}
					static {
						this.LABEL = t.localize(8991, null);
					}
					constructor(c) {
						super(a.ID, a.LABEL, void 0, void 0), (this.a = c);
					}
					async run(c) {
						return this.a(c);
					}
				}
				e.$0mc = a;
			},
		),
		