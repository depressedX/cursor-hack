define(
			de[3492],
			he([
				1, 0, 27, 266, 199, 4, 11, 8, 179, 43, 572, 624, 238, 108, 176, 284, 70,
				40, 71, 10,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (g = mt(g));
				const s = "notebook.cell.moveUp",
					l = "notebook.cell.moveDown",
					y = "notebook.cell.copyUp",
					$ = "notebook.cell.copyDown";
				(0, C.$4X)(
					class extends h.$z5b {
						constructor() {
							super({
								id: s,
								title: (0, E.localize2)(7702, "Move Cell Up"),
								icon: g.$cOb,
								keybinding: {
									primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
									when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
								menu: {
									id: C.$XX.NotebookCellTitle,
									when: d.$Kj.equals("config.notebook.dragAndDropEnabled", !1),
									group: h.CellOverflowToolbarGroups.Edit,
									order: 14,
								},
							});
						}
						async runWithContext(z, F) {
							return (0, a.$G5b)(F, "up");
						}
					},
				),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: l,
									title: (0, E.localize2)(7703, "Move Cell Down"),
									icon: g.$dOb,
									keybinding: {
										primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
										when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.equals(
											"config.notebook.dragAndDropEnabled",
											!1,
										),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 14,
									},
								});
							}
							async runWithContext(z, F) {
								return (0, a.$G5b)(F, "down");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: y,
									title: (0, E.localize2)(7704, "Copy Cell Up"),
									keybinding: {
										primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.UpArrow,
										when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(z, F) {
								return (0, a.$H5b)(F, "up");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: $,
									title: (0, E.localize2)(7705, "Copy Cell Down"),
									keybinding: {
										primary:
											t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.DownArrow,
										when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb, n.$DJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 13,
									},
								});
							}
							async runWithContext(z, F) {
								return (0, a.$H5b)(F, "down");
							}
						},
					);
				const v = "notebook.cell.split",
					S = "notebook.cell.joinSelected",
					I = "notebook.cell.joinAbove",
					T = "notebook.cell.joinBelow";
				(0, C.$4X)(
					class extends h.$z5b {
						constructor() {
							super({
								id: v,
								title: (0, E.localize2)(7706, "Split Cell"),
								menu: {
									id: C.$XX.NotebookCellTitle,
									when: d.$Kj.and(n.$tJb, n.$DJb, n.$NJb.toNegated()),
									order: h.CellToolbarOrder.SplitCell,
									group: h.$q5b,
								},
								icon: g.$fOb,
								keybinding: {
									when: d.$Kj.and(
										n.$pJb,
										n.$tJb,
										n.$DJb,
										f.EditorContextKeys.editorTextFocus,
									),
									primary: (0, t.$os)(
										t.$ps,
										t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
									),
									mac: {
										primary: (0, t.$os)(
											t.$qs,
											t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
										),
									},
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
							});
						}
						async runWithContext(z, F) {
							if (F.notebookEditor.isReadOnly) return;
							const x = z.get(w.$rzb),
								H = F.cell,
								q = F.notebookEditor.getCellIndex(H),
								V =
									H.focusMode === c.CellFocusMode.Container
										? [{ lineNumber: 1, column: 1 }]
										: H.getSelectionsStartPosition();
							if (V && V.length > 0) {
								if ((await H.resolveTextModel(), !H.hasModel())) return;
								const G = (0, a.$L5b)(H, V);
								if (G) {
									const K = H.language,
										J = H.cellKind,
										W = H.mime,
										X = await H.resolveTextModel();
									await x.apply(
										[
											new w.$tzb(H.uri, {
												range: X.getFullModelRange(),
												text: G[0],
											}),
											new u.$hJb(F.notebookEditor.textModel.uri, {
												editType: p.CellEditType.Replace,
												index: q + 1,
												count: 0,
												cells: G.slice(1).map((Y) => ({
													cellKind: J,
													language: K,
													mime: W,
													source: Y,
													outputs: [],
													metadata: {},
												})),
											}),
										],
										{ quotableLabel: "Split Notebook Cell" },
									);
								}
							}
						}
					},
				),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: I,
									title: (0, E.localize2)(7707, "Join With Previous Cell"),
									keybinding: {
										when: n.$pJb,
										primary:
											t.KeyMod.WinCtrl |
											t.KeyMod.Alt |
											t.KeyMod.Shift |
											t.KeyCode.KeyJ,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 10,
									},
								});
							}
							async runWithContext(z, F) {
								const x = z.get(w.$rzb);
								return (0, a.$K5b)(x, F, "above");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: T,
									title: (0, E.localize2)(7708, "Join With Next Cell"),
									keybinding: {
										when: n.$pJb,
										primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyJ,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 11,
									},
								});
							}
							async runWithContext(z, F) {
								const x = z.get(w.$rzb);
								return (0, a.$K5b)(x, F, "below");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: S,
									title: (0, E.localize2)(7709, "Join Selected Cells"),
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 12,
									},
								});
							}
							async runWithContext(z, F) {
								const x = z.get(w.$rzb),
									H = z.get(o.$4N);
								return (0, a.$I5b)(x, H, F);
							}
						},
					);
				const P = "notebook.cell.changeToCode",
					k = "notebook.cell.changeToMarkdown";
				(0, C.$4X)(
					class extends h.$y5b {
						constructor() {
							super({
								id: P,
								title: (0, E.localize2)(7710, "Change Cell to Code"),
								keybinding: {
									when: d.$Kj.and(
										n.$pJb,
										d.$Kj.not(m.$aMb),
										n.$rJb.toNegated(),
									),
									primary: t.KeyCode.KeyY,
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
								precondition: d.$Kj.and(n.$mJb, n.$CJb.isEqualTo("markup")),
								menu: {
									id: C.$XX.NotebookCellTitle,
									when: d.$Kj.and(
										n.$pJb,
										n.$tJb,
										n.$DJb,
										n.$CJb.isEqualTo("markup"),
									),
									group: h.CellOverflowToolbarGroups.Edit,
								},
							});
						}
						async runWithContext(F, x) {
							await (0, a.$E5b)(p.CellKind.Code, x);
						}
					},
				),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: k,
									title: (0, E.localize2)(7711, "Change Cell to Markdown"),
									keybinding: {
										when: d.$Kj.and(
											n.$pJb,
											d.$Kj.not(m.$aMb),
											n.$rJb.toNegated(),
										),
										primary: t.KeyCode.KeyM,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									precondition: d.$Kj.and(n.$mJb, n.$CJb.isEqualTo("code")),
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(
											n.$pJb,
											n.$tJb,
											n.$DJb,
											n.$CJb.isEqualTo("code"),
										),
										group: h.CellOverflowToolbarGroups.Edit,
									},
								});
							}
							async runWithContext(F, x) {
								await (0, a.$E5b)(
									p.CellKind.Markup,
									x,
									"markdown",
									i.$EK.markdown,
								);
							}
						},
					);
				const L = "notebook.cell.collapseCellInput",
					D = "notebook.cell.collapseCellOutput",
					M = "notebook.cell.collapseAllCellInputs",
					N = "notebook.cell.expandAllCellInputs",
					A = "notebook.cell.collapseAllCellOutputs",
					R = "notebook.cell.expandAllCellOutputs",
					O = "notebook.cell.toggleOutputs",
					B = "notebook.cell.toggleOutputScrolling";
				(0, C.$4X)(
					class extends h.$y5b {
						constructor() {
							super({
								id: L,
								title: (0, E.localize2)(7712, "Collapse Cell Input"),
								keybinding: {
									when: d.$Kj.and(
										n.$qJb,
										n.$NJb.toNegated(),
										m.$bMb.toNegated(),
									),
									primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyC),
									mac: {
										primary: (0, t.$os)(
											t.$qs,
											t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
										),
									},
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
							});
						}
						parseArgs(F, ...x) {
							return (0, h.$C5b)(F, ...x);
						}
						async runWithContext(F, x) {
							x.ui
								? (x.cell.isInputCollapsed = !0)
								: x.selectedCells.forEach((H) => (H.isInputCollapsed = !0));
						}
					},
				),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: c.$7Ib,
									title: (0, E.localize2)(7713, "Expand Cell Input"),
									keybinding: {
										when: d.$Kj.and(n.$qJb, n.$NJb),
										primary: (0, t.$os)(
											t.$ps,
											t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
										),
										mac: {
											primary: (0, t.$os)(
												t.$qs,
												t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
											),
										},
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							parseArgs(F, ...x) {
								return (0, h.$C5b)(F, ...x);
							}
							async runWithContext(F, x) {
								x.ui
									? (x.cell.isInputCollapsed = !1)
									: x.selectedCells.forEach((H) => (H.isInputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: D,
									title: (0, E.localize2)(7714, "Collapse Cell Output"),
									keybinding: {
										when: d.$Kj.and(
											n.$qJb,
											n.$OJb.toNegated(),
											m.$bMb.toNegated(),
											n.$KJb,
										),
										primary: (0, t.$os)(t.$ps, t.KeyCode.KeyT),
										mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyT) },
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(F, x) {
								x.ui
									? (x.cell.isOutputCollapsed = !0)
									: x.selectedCells.forEach((H) => (H.isOutputCollapsed = !0));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: c.$_Ib,
									title: (0, E.localize2)(7715, "Expand Cell Output"),
									keybinding: {
										when: d.$Kj.and(n.$qJb, n.$OJb),
										primary: (0, t.$os)(t.$ps, t.KeyCode.KeyT),
										mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyT) },
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(F, x) {
								x.ui
									? (x.cell.isOutputCollapsed = !1)
									: x.selectedCells.forEach((H) => (H.isOutputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: O,
									precondition: n.$qJb,
									title: (0, E.localize2)(7716, "Toggle Outputs"),
									metadata: {
										description: (0, E.localize)(7701, null),
										args: h.$D5b,
									},
								});
							}
							parseArgs(z, ...F) {
								return (0, h.$C5b)(z, ...F);
							}
							async runWithContext(z, F) {
								let x = [];
								F.ui
									? (x = [F.cell])
									: F.selectedCells && (x = F.selectedCells);
								for (const H of x) H.isOutputCollapsed = !H.isOutputCollapsed;
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: M,
									title: (0, E.localize2)(7717, "Collapse All Cell Inputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isInputCollapsed = !0));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: N,
									title: (0, E.localize2)(7718, "Expand All Cell Inputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isInputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: A,
									title: (0, E.localize2)(7719, "Collapse All Cell Outputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isOutputCollapsed = !0));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: R,
									title: (0, E.localize2)(7720, "Expand All Cell Outputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isOutputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: B,
									title: (0, E.localize2)(7721, "Toggle Scroll Cell Output"),
									keybinding: {
										when: d.$Kj.and(n.$qJb, m.$bMb.toNegated(), n.$KJb),
										primary: (0, t.$os)(t.$ps, t.KeyCode.KeyY),
										mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyY) },
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							a(F, x, H) {
								const q = F.model.metadata;
								if (q) {
									const V = q.scrollable !== void 0 ? q.scrollable : x,
										G = H || !V;
									(q.scrollable = G), F.resetRenderer();
								}
							}
							async runWithContext(F, x) {
								const H = F.get(b.$gj).getValue(p.$56.outputScrolling);
								x.ui
									? (x.cell.outputsViewModels.forEach((q) => {
											this.a(q, H, x.cell.isOutputCollapsed);
										}),
										(x.cell.isOutputCollapsed = !1))
									: x.selectedCells.forEach((q) => {
											q.outputsViewModels.forEach((V) => {
												this.a(V, H, q.isOutputCollapsed);
											}),
												(q.isOutputCollapsed = !1);
										});
							}
						},
					);
				function U(z, F) {
					for (let x = 0; x < z.getLength(); x++) {
						const H = z.cellAt(x);
						F(H, x);
					}
				}
			},
		),
		