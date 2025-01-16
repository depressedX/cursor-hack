define(
			de[3872],
			he([
				1, 0, 3, 4, 11, 102, 20, 30, 192, 55, 44, 66, 3407, 1025, 566, 1831,
				623, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					d.$Io
						.as(u.$a1.EditorPane)
						.registerEditorPane(
							m.$vVb.create(c.$pnc, c.$pnc.ID, (0, i.localize)(11379, null)),
							[new E.$Ji(n.$W4b)],
						);
				let f = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.webviewPanel";
					}
					constructor(s, l) {
						super(),
							(this.a = l),
							this.D(
								s.onWillOpenEditor((y) => {
									const $ = l.getGroup(y.groupId);
									$ && this.b(y.editor, $);
								}),
							);
					}
					b(s, l) {
						if (
							!(s instanceof n.$W4b) ||
							s.typeId !== n.$W4b.typeId ||
							l.contains(s)
						)
							return;
						let y;
						const $ = this.a.groups;
						for (const v of $)
							if (v.contains(s)) {
								y = v;
								break;
							}
						y && y.closeEditor(s);
					}
				};
				(f = Ne([j(0, o.$IY), j(1, a.$EY)], f)),
					(0, r.$s6)(f.ID, f, r.WorkbenchPhase.BlockStartup),
					d.$Io
						.as(u.$a1.EditorFactory)
						.registerEditorSerializer(g.$Toc.ID, g.$Toc),
					(0, C.$lK)(p.$qnc, p.$snc, C.InstantiationType.Delayed),
					(0, w.$4X)(h.$uSc),
					(0, w.$4X)(h.$vSc),
					(0, w.$4X)(h.$wSc),
					(0, w.$4X)(h.$xSc),
					(0, w.$4X)(h.$ySc);
			},
		),
		