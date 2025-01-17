import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[1674],
			he([1, 0, 7, 105, 3, 92, 11, 8, 5]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xDb = void 0),
					(t = mt(t));
				let r = class {
					constructor(a, h, c, n, g) {
						(this.d = h),
							(this.e = n),
							(this.f = g),
							(this.c = new w.$Zc()),
							(this.element = t.$fhb(a, t.$(".suggest-status-bar")));
						const p = (o) =>
							o instanceof C.$2X
								? c.createInstance(E.$Myb, o, { useComma: !0 })
								: void 0;
						(this.a = new i.$eib(this.element, { actionViewItemProvider: p })),
							(this.b = new i.$eib(this.element, {
								actionViewItemProvider: p,
							})),
							this.a.domNode.classList.add("left"),
							this.b.domNode.classList.add("right");
					}
					dispose() {
						this.c.dispose(),
							this.a.dispose(),
							this.b.dispose(),
							this.element.remove();
					}
					show() {
						const a = this.e.createMenu(this.d, this.f),
							h = () => {
								const c = [],
									n = [];
								for (const [g, p] of a.getActions())
									g === "left" ? c.push(...p) : n.push(...p);
								this.a.clear(), this.a.push(c), this.b.clear(), this.b.push(n);
							};
						this.c.add(a.onDidChange(() => h())), this.c.add(a);
					}
					hide() {
						this.c.clear();
					}
				};
				(e.$xDb = r),
					(e.$xDb = r = Ne([j(2, m.$Li), j(3, C.$YX), j(4, d.$6j)], r));
			},
		),
		