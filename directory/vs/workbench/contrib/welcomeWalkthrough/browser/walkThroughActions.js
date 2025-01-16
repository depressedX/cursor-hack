define(
			de[3317],
			he([1, 0, 18, 1811, 43, 71, 8, 27]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vYc = e.$uYc = e.$tYc = e.$sYc = void 0),
					(e.$sYc = {
						id: "workbench.action.interactivePlayground.arrowUp",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.UpArrow,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.arrowUp();
						},
					}),
					(e.$tYc = {
						id: "workbench.action.interactivePlayground.arrowDown",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.DownArrow,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.arrowDown();
						},
					}),
					(e.$uYc = {
						id: "workbench.action.interactivePlayground.pageUp",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.PageUp,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.pageUp();
						},
					}),
					(e.$vYc = {
						id: "workbench.action.interactivePlayground.pageDown",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							i.$qYc,
							E.EditorContextKeys.editorTextFocus.toNegated(),
						),
						primary: d.KeyCode.PageDown,
						handler: (m) => {
							const u = m.get(t.$IY).activeEditorPane;
							u instanceof i.$rYc && u.pageDown();
						},
					});
			},
		),
		