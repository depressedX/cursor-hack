define(
			de[3407],
			he([1, 0, 27, 71, 4, 11, 8, 43, 99, 355, 1025, 566, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ySc = e.$xSc = e.$wSc = e.$vSc = e.$uSc = void 0),
					(w = mt(w));
				const c = C.$Kj.and(
					C.$Kj.equals("activeEditor", u.$pnc.ID),
					i.EditorContextKeys.focus.toNegated(),
				);
				class n extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.showFind";
					}
					static {
						this.LABEL = w.localize(11373, null);
					}
					constructor() {
						super({
							id: n.ID,
							title: n.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$2Ib),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.showFind();
					}
				}
				e.$uSc = n;
				class g extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.hideFind";
					}
					static {
						this.LABEL = w.localize(11374, null);
					}
					constructor() {
						super({
							id: g.ID,
							title: g.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$ZIb),
								primary: t.KeyCode.Escape,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.hideFind();
					}
				}
				e.$vSc = g;
				class p extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.findNext";
					}
					static {
						this.LABEL = w.localize(11375, null);
					}
					constructor() {
						super({
							id: p.ID,
							title: p.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$1Ib),
								primary: t.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.runFindAction(!1);
					}
				}
				e.$wSc = p;
				class o extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.findPrevious";
					}
					static {
						this.LABEL = w.localize(11376, null);
					}
					constructor() {
						super({
							id: o.ID,
							title: o.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$1Ib),
								primary: t.KeyMod.Shift | t.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.runFindAction(!0);
					}
				}
				e.$xSc = o;
				class f extends E.$3X {
					static {
						this.ID = "workbench.action.webview.reloadWebviewAction";
					}
					static {
						this.LABEL = w.localize2(11377, "Reload Webviews");
					}
					constructor() {
						super({
							id: f.ID,
							title: f.LABEL,
							category: m.$ck.Developer,
							menu: [{ id: E.$XX.CommandPalette }],
						});
					}
					async run(l) {
						const y = l.get(r.$3Ib);
						for (const $ of y.webviews) $.reload();
					}
				}
				e.$ySc = f;
				function b(s) {
					const y = s.get(h.$IY).activeEditor;
					return y instanceof a.$W4b ? y.webview : void 0;
				}
			},
		),
		