define(
			de[3528],
			he([1, 0, 27, 46, 71, 4, 8, 43, 31, 40, 141, 57, 142, 60, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (E = mt(E));
				async function g(p, o) {
					const f = await p.openPaneComposite(
						u.$LQb,
						c.ViewContainerLocation.Sidebar,
						!0,
					);
					f && (f?.getViewPaneContainer()).search(o);
				}
				(0, i.$ntb)(
					class extends i.$itb {
						constructor() {
							super({
								id: "editor.action.formatDocument.none",
								label: E.localize(7063, null),
								alias: "Format Document",
								precondition: C.$Kj.and(
									w.EditorContextKeys.writable,
									w.EditorContextKeys.hasDocumentFormattingProvider.toNegated(),
								),
								kbOpts: {
									kbExpr: w.EditorContextKeys.editorTextFocus,
									primary: t.KeyMod.Shift | t.KeyMod.Alt | t.KeyCode.KeyF,
									linux: {
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyI,
									},
									weight: d.KeybindingWeight.EditorContrib,
								},
							});
						}
						async run(o, f) {
							if (!f.hasModel()) return;
							const b = o.get(m.$ek),
								s = o.get(h.$6Sb),
								l = o.get(r.$4N),
								y = o.get(a.$GO),
								$ = o.get(n.$k3),
								v = f.getModel(),
								S = $.documentFormattingEditProvider.all(v).length;
							if (S > 1)
								return b.executeCommand(
									"editor.action.formatDocument.multiple",
								);
							if (S === 1)
								return b.executeCommand("editor.action.formatDocument");
							if (v.isTooLargeForSyncing()) l.warn(E.localize(7064, null));
							else {
								const I = v.getLanguageId(),
									T = E.localize(7065, null, I),
									{ confirmed: P } = await y.confirm({
										message: T,
										primaryButton: E.localize(7066, null),
									});
								P && g(s, `category:formatters ${I}`);
							}
						}
					},
				);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	