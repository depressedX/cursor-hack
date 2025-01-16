define(
			de[238],
			he([1, 0, 9, 4, 11, 8, 43, 108, 176, 442, 18, 44, 293, 32, 221, 19]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D5b =
						e.$A5b =
						e.$z5b =
						e.$y5b =
						e.$x5b =
						e.CellOverflowToolbarGroups =
						e.CellToolbarOrder =
						e.$t5b =
						e.$s5b =
						e.$r5b =
						e.$q5b =
						e.$p5b =
						e.$o5b =
							void 0),
					(e.$u5b = f),
					(e.$v5b = s),
					(e.$w5b = l),
					(e.$B5b = I),
					(e.$C5b = T),
					(e.$o5b = "_notebook.selectKernel"),
					(e.$p5b = (0, i.localize2)(7865, "Notebook")),
					(e.$q5b = "inline/cell"),
					(e.$r5b = "inline/output"),
					(e.$s5b = C.KeybindingWeight.EditorContrib),
					(e.$t5b = C.KeybindingWeight.WorkbenchContrib + 1);
				var p;
				(function (P) {
					(P[(P.EditCell = 0)] = "EditCell"),
						(P[(P.ExecuteAboveCells = 1)] = "ExecuteAboveCells"),
						(P[(P.ExecuteCellAndBelow = 2)] = "ExecuteCellAndBelow"),
						(P[(P.SaveCell = 3)] = "SaveCell"),
						(P[(P.SplitCell = 4)] = "SplitCell"),
						(P[(P.ClearCellOutput = 5)] = "ClearCellOutput");
				})(p || (e.CellToolbarOrder = p = {}));
				var o;
				(function (P) {
					(P.Copy = "1_copy"),
						(P.Insert = "2_insert"),
						(P.Edit = "3_edit"),
						(P.Share = "4_share");
				})(o || (e.CellOverflowToolbarGroups = o = {}));
				function f(P) {
					const k = (0, d.$eJb)(P.activeEditorPane);
					if (!k || !k.hasModel()) return;
					const L = k.getActiveCell(),
						D = k.getSelectionViewModels();
					return { cell: L, selectedCells: D, notebookEditor: k };
				}
				function b(P, k) {
					const D = P.get(h.$n5b)
						.listNotebookEditors()
						.find(
							(M) =>
								M.hasModel() && M.textModel.uri.toString() === k.toString(),
						);
					if (D && D.hasModel()) return D;
				}
				function s(P, k) {
					const L = t.URI.revive(k);
					if (L) {
						const D = b(P, L);
						if (D) return { notebookEditor: D };
					}
				}
				function l(P, k) {
					let L;
					for (const [, D] of P.notebookEditor.codeEditors)
						if ((0, g.$gh)(D.getModel()?.uri, k.uri)) {
							L = D;
							break;
						}
					return L;
				}
				class y extends w.$3X {
					constructor(k) {
						if (k.f1 !== !1) {
							k.f1 = !1;
							const L = {
								id: w.$XX.CommandPalette,
								when: E.$Kj.or(m.$mJb, m.$nJb),
							};
							k.menu
								? Array.isArray(k.menu) || (k.menu = [k.menu])
								: (k.menu = []),
								(k.menu = [...k.menu, L]);
						}
						(k.category = e.$p5b), super(k);
					}
					async run(k, L, ...D) {
						const N = !!L
							? this.c(L)
								? "notebookToolbar"
								: "editorToolbar"
							: void 0;
						if (
							!(
								!this.c(L) &&
								((L = this.getEditorContextFromArgsOrActive(k, L, ...D)), !L)
							)
						)
							return (
								N !== void 0 &&
									k
										.get(c.$km)
										.publicLog2("workbenchActionExecuted", {
											id: this.desc.id,
											from: N,
										}),
								this.runWithContext(k, L)
							);
					}
					c(k) {
						return !!k && !!k.notebookEditor;
					}
					getEditorContextFromArgsOrActive(k, L, ...D) {
						return f(k.get(u.$IY));
					}
				}
				e.$x5b = y;
				class $ extends w.$3X {
					constructor(k) {
						if (k.f1 !== !1) {
							k.f1 = !1;
							const L = { id: w.$XX.CommandPalette, when: m.$mJb };
							k.menu
								? Array.isArray(k.menu) || (k.menu = [k.menu])
								: (k.menu = []),
								(k.menu = [...k.menu, L]);
						}
						(k.category = e.$p5b), super(k);
					}
					parseArgs(k, ...L) {}
					c(k) {
						return (
							!!k &&
							!!k.notebookEditor &&
							k.$mid === n.MarshalledId.NotebookCellActionContext
						);
					}
					async run(k, ...L) {
						const D = L[0],
							M = this.c(D),
							N = (0, a.$y1)(D),
							A = M ? "cellToolbar" : N ? "editorToolbar" : "other",
							R = k.get(c.$km);
						if (M)
							return (
								R.publicLog2("workbenchActionExecuted", {
									id: this.desc.id,
									from: A,
								}),
								this.runWithContext(k, D)
							);
						const O = this.parseArgs(k, ...L);
						if (O)
							return (
								R.publicLog2("workbenchActionExecuted", {
									id: this.desc.id,
									from: A,
								}),
								this.runWithContext(k, O)
							);
						const B = I(k);
						if (B) {
							const U =
								B.getSelections().length === 0
									? [B.getFocus()]
									: B.getSelections();
							return (
								R.publicLog2("workbenchActionExecuted", {
									id: this.desc.id,
									from: A,
								}),
								this.runWithContext(k, {
									ui: !1,
									notebookEditor: B,
									selectedCells: (0, d.$gJb)(B, U),
								})
							);
						}
					}
				}
				e.$y5b = $;
				class v extends y {
					d(k) {
						return !!k && !!k.notebookEditor && !!k.cell;
					}
					e(k, L, ...D) {}
					async run(k, L, ...D) {
						if (this.d(L))
							return (
								k
									.get(c.$km)
									.publicLog2("workbenchActionExecuted", {
										id: this.desc.id,
										from: "cellToolbar",
									}),
								this.runWithContext(k, L)
							);
						const M = this.e(k, L, ...D);
						if (M) return this.runWithContext(k, M);
						const N = this.getEditorContextFromArgsOrActive(k);
						if (this.d(N)) return this.runWithContext(k, N);
					}
				}
				(e.$z5b = v),
					(e.$A5b = E.$Kj.or(
						E.$Kj.greater(m.$TJb.key, 0),
						E.$Kj.greater(m.$UJb.key, 0),
					));
				function S(P) {
					if (P === void 0) return !1;
					const k = P.ranges;
					return !(
						!k ||
						!Array.isArray(k) ||
						k.some((L) => !(0, r.$h6)(L)) ||
						(P.document && !t.URI.revive(P.document))
					);
				}
				function I(P, k) {
					const L = s(P, k)?.notebookEditor;
					if (L) return L;
					const D = (0, d.$eJb)(P.get(u.$IY).activeEditorPane);
					if (!(!D || !D.hasModel())) return D;
				}
				function T(P, ...k) {
					const L = k[0];
					if (S(L)) {
						const M = I(P, L.document);
						if (!M) return;
						const A = L.ranges.map((O) => M.getCellsInRange(O).slice(0)).flat(),
							R = L.autoReveal;
						return {
							ui: !1,
							notebookEditor: M,
							selectedCells: A,
							autoReveal: R,
						};
					}
					if ((0, r.$h6)(L)) {
						const M = k[1],
							N = I(P, M);
						return N
							? {
									ui: !1,
									notebookEditor: N,
									selectedCells: N.getCellsInRange(L),
								}
							: void 0;
					}
					const D = f(P.get(u.$IY));
					return D
						? {
								ui: !1,
								notebookEditor: D.notebookEditor,
								selectedCells: D.selectedCells ?? [],
								cell: D.cell,
							}
						: void 0;
				}
				(e.$D5b = [
					{
						isOptional: !0,
						name: "options",
						description: "The cell range options",
						schema: {
							type: "object",
							required: ["ranges"],
							properties: {
								ranges: {
									type: "array",
									items: [
										{
											type: "object",
											required: ["start", "end"],
											properties: {
												start: { type: "number" },
												end: { type: "number" },
											},
										},
									],
								},
								document: { type: "object", description: "The document uri" },
								autoReveal: {
									type: "boolean",
									description:
										"Whether the cell should be revealed into view automatically",
								},
							},
						},
					},
				]),
					w.$ZX.appendMenuItem(w.$XX.NotebookCellTitle, {
						submenu: w.$XX.NotebookCellInsert,
						title: (0, i.localize)(7862, null),
						group: o.Insert,
						when: m.$tJb.isEqualTo(!0),
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorContext, {
						submenu: w.$XX.NotebookCellTitle,
						title: (0, i.localize)(7863, null),
						group: o.Insert,
						when: m.$pJb,
					}),
					w.$ZX.appendMenuItem(w.$XX.NotebookCellTitle, {
						title: (0, i.localize)(7864, null),
						submenu: w.$XX.EditorContextShare,
						group: o.Share,
					});
			},
		),
		