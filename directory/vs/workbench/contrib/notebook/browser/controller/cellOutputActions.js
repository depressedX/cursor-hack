define(
			de[1845],
			he([1, 0, 4, 11, 121, 41, 238, 176, 284, 34, 1837, 18, 108, 70, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Y3b = e.$X3b = void 0),
					(m = mt(m)),
					(e.$X3b = "notebook.cellOutput.copy"),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "notebook.cellOuput.showEmptyOutputs",
									title: (0, t.localize)(7828, null),
									menu: {
										id: i.$XX.NotebookOutputToolbar,
										when: n.$Kj.and(d.$KJb, d.$MJb),
									},
									f1: !1,
									category: C.$p5b,
								});
							}
							run(o, f) {
								const b = f.cell;
								if (b && b.cellKind === c.CellKind.Code)
									for (let s = 1; s < b.outputsViewModels.length; s++)
										b.outputsViewModels[s].visible.get() ||
											(b.outputsViewModels[s].setVisible(!0, !0),
											b.updateOutputHeight(s, 1, "command"));
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: e.$X3b,
									title: (0, t.localize)(7829, null),
									menu: { id: i.$XX.NotebookOutputToolbar, when: d.$KJb },
									category: C.$p5b,
									icon: m.$rOb,
								});
							}
							a(o, f) {
								return f && "notebookEditor" in f
									? f.notebookEditor
									: (0, h.$eJb)(o.activeEditorPane);
							}
							async run(o, f) {
								const b = this.a(o.get(a.$IY), f);
								if (!b) return;
								let s;
								if (
									(f && "outputId" in f && typeof f.outputId == "string"
										? (s = g(f.outputId, b))
										: f && "outputViewModel" in f && (s = f.outputViewModel),
									!s)
								) {
									const y = b.getActiveCell();
									if (!y) return;
									y.focusedOutputId !== void 0
										? (s = y.outputsViewModels.find(
												($) => $.model.outputId === y.focusedOutputId,
											))
										: (s = y.outputsViewModels.find(
												($) => $.pickedMimeType?.isTrusted,
											));
								}
								if (!s) return;
								const l = s.pickedMimeType?.mimeType;
								if (l?.startsWith("image/")) {
									const y = {
										skipReveal: !0,
										outputId: s.model.outputId,
										altOutputId: s.model.alternativeOutputId,
									};
									await b.focusNotebookCell(s.cellViewModel, "output", y),
										b.copyOutputImage(s);
								} else {
									const y = o.get(w.$Vxb),
										$ = o.get(r.$ik);
									(0, u.$V3b)(l, s, y, $);
								}
							}
						},
					);
				function g(p, o) {
					const f = o.getViewModel();
					if (f) {
						const b = f.viewCells.filter((s) => s.cellKind === c.CellKind.Code);
						for (const s of b) {
							const l = s.outputsViewModels.find(
								(y) =>
									y.model.outputId === p || y.model.alternativeOutputId === p,
							);
							if (l) return l;
						}
					}
				}
				(e.$Y3b = "notebook.cellOutput.openInTextEditor"),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: e.$Y3b,
									title: (0, t.localize)(7830, null),
									f1: !1,
									category: C.$p5b,
									icon: m.$rOb,
								});
							}
							a(o, f) {
								return f && "notebookEditor" in f
									? f.notebookEditor
									: (0, h.$eJb)(o.activeEditorPane);
							}
							async run(o, f) {
								const b = this.a(o.get(a.$IY), f);
								if (!b) return;
								let s;
								f && "outputId" in f && typeof f.outputId == "string"
									? (s = g(f.outputId, b))
									: f && "outputViewModel" in f && (s = f.outputViewModel);
								const l = o.get(E.$7rb);
								s?.model.outputId &&
									b.textModel?.uri &&
									l.open(
										c.CellUri.generateCellOutputUri(
											b.textModel.uri,
											s.model.outputId,
										),
									);
							}
						},
					);
			},
		),
		