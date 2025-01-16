define(
			de[3213],
			he([1, 0, 4, 7, 99, 11, 110, 10, 371, 1785, 58]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hgd = e.$Ggd = void 0),
					(t = mt(t));
				class a extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.webview.openDeveloperTools",
							title: t.localize2(11372, "Open Webview Developer Tools"),
							category: w.$ck.Developer,
							metadata: { description: t.localize(11369, null) },
							f1: !0,
						});
					}
					async run(n) {
						const g = n.get(C.$y7c);
						(0, i.$Ogb)().document.querySelectorAll("iframe.webview.ready")
							.length &&
							(console.info(t.localize(11370, null)), g.openDevTools());
					}
				}
				e.$Ggd = a;
				class h extends E.$3X {
					constructor() {
						super({
							id: u.$SX,
							title: t.localize(11371, null),
							category: w.$ck.Developer,
						});
					}
					async run(n) {
						const g = n.get(d.$gj),
							p = n.get(m.$V8c),
							o = n.get(C.$y7c);
						await Promise.resolve(),
							new r.$Fgd(g, p, o).setIgnoreMenuShortcuts(!1);
					}
				}
				e.$Hgd = h;
			},
		),
		