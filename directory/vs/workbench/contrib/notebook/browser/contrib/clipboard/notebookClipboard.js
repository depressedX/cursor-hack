import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../nls.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../common/contributions.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../common/notebookContextKeys.js';
import '../../notebookBrowser.js';
import '../../../../../../editor/contrib/clipboard/browser/clipboard.js';
import '../../../../../../platform/clipboard/common/clipboardService.js';
import '../../../common/model/notebookCellTextModel.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookService.js';
import '../../../../../../base/common/platform.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../controller/coreActions.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextkey/common/contextkeys.js';
import '../../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../../editor/browser/editorExtensions.js';
import '../../../../../../platform/action/common/actionCommonCategories.js';
import '../../../../../../platform/log/common/log.js';
import '../../../../../../platform/commands/common/commands.js';
import '../../../../../services/log/common/logConstants.js';
import '../../../../../../base/browser/dom.js';
define(
			de[3493],
			he([
				1, 0, 4, 3, 55, 18, 176, 108, 787, 121, 1029, 70, 161, 12, 11, 238, 27,
				8, 179, 43, 46, 99, 34, 31, 705, 7,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*lifecycle*/,
				w /*contributions*/,
				E /*editorService*/,
				C /*notebookContextKeys*/,
				d /*notebookBrowser*/,
				m /*clipboard*/,
				r /*clipboardService*/,
				u /*notebookCellTextModel*/,
				a /*notebookCommon*/,
				h /*notebookService*/,
				c /*platform*/,
				n /*actions*/,
				g /*coreActions*/,
				p /*keyCodes*/,
				o /*contextkey*/,
				f /*contextkeys*/,
				b /*keybindingsRegistry*/,
				s /*editorExtensions*/,
				l /*actionCommonCategories*/,
				y /*log*/,
				$ /*commands*/,
				v /*logConstants*/,
				S /*dom*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OFc = void 0),
					(e.$LFc = A),
					(e.$MFc = R),
					(e.$NFc = O),
					(c = mt(c));
				let I = !1;
				function T() {
					I = !I;
				}
				function P(H, q) {
					I && H.info(`[NotebookClipboard]: ${q}`);
				}
				function k(H) {
					const q = H.get(y.$ik),
						V = H.get(E.$IY),
						G = (0, d.$eJb)(V.activeEditorPane);
					if (!G) {
						P(
							q,
							"[Revive Webview] No notebook editor found for active editor pane, bypass",
						);
						return;
					}
					if (!G.hasEditorFocus()) {
						P(q, "[Revive Webview] Notebook editor is not focused, bypass");
						return;
					}
					if (!G.hasWebviewFocus()) {
						P(
							q,
							"[Revive Webview] Notebook editor backlayer webview is not focused, bypass",
						);
						return;
					}
					const K = G.getViewModel();
					if (
						!(
							K &&
							K.viewCells.every((J) => !J.outputIsFocused && !J.outputIsHovered)
						)
					)
						return { editor: G, loggerService: q };
				}
				function L(H) {
					const q = k(H);
					if (!q) return;
					const V = q.editor.getInnerWebview();
					return (
						P(
							q.loggerService,
							"[Revive Webview] Notebook editor backlayer webview is focused",
						),
						V
					);
				}
				function D(H, q) {
					const V = L(H);
					return V ? (q(V), !0) : !1;
				}
				function M(H, q) {
					const V = k(H);
					return V ? q(V.editor) : !1;
				}
				const N = 105;
				s.$stb.addImplementation(N, "notebook-webview", (H) =>
					D(H, (q) => q.undo()),
				),
					s.$ttb.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.redo()),
					),
					m.$BAb?.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.copy()),
					),
					m.$CAb?.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.paste()),
					),
					m.$AAb?.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.cut()),
					);
				function A(H, q, V) {
					if (!H.hasModel()) return !1;
					const G = H.textModel;
					if (H.isReadOnly) return !1;
					const K = {
						kind: a.SelectionStateType.Index,
						focus: H.getFocus(),
						selections: H.getSelections(),
					};
					if (q) {
						const J = H.getCellIndex(q),
							W = typeof J == "number" ? J + 1 : 0;
						G.applyEdits(
							[
								{
									editType: a.CellEditType.Replace,
									index: W,
									count: 0,
									cells: V.items.map((X) => (0, u.$05)(X)),
								},
							],
							!0,
							K,
							() => ({
								kind: a.SelectionStateType.Index,
								focus: { start: W, end: W + 1 },
								selections: [{ start: W, end: W + V.items.length }],
							}),
							void 0,
							!0,
						);
					} else {
						if (H.getLength() !== 0) return !1;
						G.applyEdits(
							[
								{
									editType: a.CellEditType.Replace,
									index: 0,
									count: 0,
									cells: V.items.map((J) => (0, u.$05)(J)),
								},
							],
							!0,
							K,
							() => ({
								kind: a.SelectionStateType.Index,
								focus: { start: 0, end: 1 },
								selections: [{ start: 1, end: V.items.length + 1 }],
							}),
							void 0,
							!0,
						);
					}
					return !0;
				}
				function R(H, q, V) {
					if (!q.hasModel()) return !1;
					if (q.hasOutputTextSelection())
						return (
							(0, S.getWindow)(q.getDomNode()).document.execCommand("copy"), !0
						);
					const G = H.get(r.$Vxb),
						K = H.get(h.$MIb),
						J = q.getSelections();
					if (V) {
						const Y = q.getCellIndex(V);
						if (!J.find((ne) => ne.start <= Y && Y < ne.end))
							return G.writeText(V.getText()), K.setToCopy([V.model], !0), !0;
					}
					const W = (0, d.$fJb)(q, q.getSelections()),
						X = (0, d.$gJb)(q, W);
					return X.length
						? (G.writeText(
								X.map((Y) => Y.getText()).join(`
`),
							),
							K.setToCopy(
								X.map((Y) => Y.model),
								!0,
							),
							!0)
						: !1;
				}
				function O(H, q, V) {
					if (!q.hasModel() || q.isReadOnly) return !1;
					const G = q.textModel,
						K = H.get(r.$Vxb),
						J = H.get(h.$MIb),
						W = q.getSelections();
					if (V) {
						const Q = q.getCellIndex(V);
						if (!W.find((se) => se.start <= Q && Q < se.end)) {
							K.writeText(V.getText());
							const se = q.getFocus(),
								re =
									se.end <= Q ? se : { start: se.start - 1, end: se.end - 1 },
								le = W.map((oe) =>
									oe.end <= Q ? oe : { start: oe.start - 1, end: oe.end - 1 },
								);
							return (
								G.applyEdits(
									[
										{
											editType: a.CellEditType.Replace,
											index: Q,
											count: 1,
											cells: [],
										},
									],
									!0,
									{
										kind: a.SelectionStateType.Index,
										focus: q.getFocus(),
										selections: W,
									},
									() => ({
										kind: a.SelectionStateType.Index,
										focus: re,
										selections: le,
									}),
									void 0,
									!0,
								),
								J.setToCopy([V.model], !1),
								!0
							);
						}
					}
					const X = q.getFocus();
					if (!W.find((Q) => Q.start <= X.start && X.end <= Q.end)) {
						const Q = q.cellAt(X.start);
						K.writeText(Q.getText());
						const Z =
								X.end === q.getLength()
									? { start: X.start - 1, end: X.end - 1 }
									: X,
							se = W.map((re) =>
								re.end <= X.start
									? re
									: { start: re.start - 1, end: re.end - 1 },
							);
						return (
							G.applyEdits(
								[
									{
										editType: a.CellEditType.Replace,
										index: X.start,
										count: 1,
										cells: [],
									},
								],
								!0,
								{
									kind: a.SelectionStateType.Index,
									focus: q.getFocus(),
									selections: W,
								},
								() => ({
									kind: a.SelectionStateType.Index,
									focus: Z,
									selections: se,
								}),
								void 0,
								!0,
							),
							J.setToCopy([Q.model], !1),
							!0
						);
					}
					const ie = (0, d.$fJb)(q, q.getSelections()),
						ne = (0, d.$gJb)(q, ie);
					if (!ne.length) return !1;
					K.writeText(
						ne
							.map((Q) => Q.getText())
							.join(`
`),
					);
					const ee = ie.map((Q) => ({
							editType: a.CellEditType.Replace,
							index: Q.start,
							count: Q.end - Q.start,
							cells: [],
						})),
						_ = ie[0].start,
						te = _ < G.cells.length - 1 ? _ : Math.max(G.cells.length - 2, 0);
					return (
						G.applyEdits(
							ee,
							!0,
							{
								kind: a.SelectionStateType.Index,
								focus: q.getFocus(),
								selections: ie,
							},
							() => ({
								kind: a.SelectionStateType.Index,
								focus: { start: te, end: te + 1 },
								selections: [{ start: te, end: te + 1 }],
							}),
							void 0,
							!0,
						),
						J.setToCopy(
							ne.map((Q) => Q.model),
							!1,
						),
						!0
					);
				}
				let B = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.notebookClipboard";
					}
					constructor(q) {
						super(), (this.a = q);
						const V = 105;
						m.$BAb &&
							this.D(
								m.$BAb.addImplementation(V, "notebook-clipboard", (G) =>
									this.runCopyAction(G),
								),
							),
							m.$CAb &&
								this.D(
									m.$CAb.addImplementation(V, "notebook-clipboard", (G) =>
										this.runPasteAction(G),
									),
								),
							m.$AAb &&
								this.D(
									m.$AAb.addImplementation(V, "notebook-clipboard", (G) =>
										this.runCutAction(G),
									),
								);
					}
					b() {
						const q = (0, d.$eJb)(this.a.activeEditorPane),
							V = q?.getActiveCell();
						return { editor: q, activeCell: V };
					}
					c(q) {
						const V = (0, S.getWindow)(q.getDomNode()).getSelection();
						if (V?.rangeCount !== 1) return !1;
						const G = V.getRangeAt(0);
						if (
							G.startContainer === G.endContainer &&
							G.endOffset - G.startOffset === 0
						)
							return !1;
						let K = G.commonAncestorContainer;
						const J = q.getDomNode();
						if (!J.contains(K)) return !1;
						for (; K && K !== J; ) {
							if (K.classList && K.classList.contains("monaco-editor"))
								return !0;
							K = K.parentNode;
						}
						return !1;
					}
					runCopyAction(q) {
						const V = q.get(y.$ik),
							G = (0, S.$Jgb)();
						if (
							(0, S.$Ygb)(G) &&
							["input", "textarea"].indexOf(G.tagName.toLowerCase()) >= 0
						)
							return (
								P(
									V,
									"[NotebookEditor] focus is on input or textarea element, bypass",
								),
								!1
							);
						const { editor: K } = this.b();
						return K
							? (0, S.$Bgb)(G, K.getDomNode())
								? this.c(K)
									? (P(
											V,
											"[NotebookEditor] focus is on embed monaco editor, bypass",
										),
										!1)
									: (P(
											V,
											"[NotebookEditor] run copy actions on notebook model",
										),
										R(q, K, void 0))
								: (P(
										V,
										"[NotebookEditor] focus is outside of the notebook editor, bypass",
									),
									!1)
							: (P(V, "[NotebookEditor] no active notebook editor, bypass"),
								!1);
					}
					runPasteAction(q) {
						const V = (0, S.$Jgb)();
						if (
							V &&
							["input", "textarea"].indexOf(V.tagName.toLowerCase()) >= 0
						)
							return !1;
						const K = q.get(h.$MIb).getToCopy();
						if (!K) return !1;
						const { editor: J, activeCell: W } = this.b();
						return J ? A(J, W, K) : !1;
					}
					runCutAction(q) {
						const V = (0, S.$Jgb)();
						if (
							V &&
							["input", "textarea"].indexOf(V.tagName.toLowerCase()) >= 0
						)
							return !1;
						const { editor: G } = this.b();
						return G ? O(q, G, void 0) : !1;
					}
				};
				(e.$OFc = B),
					(e.$OFc = B = Ne([j(0, E.$IY)], B)),
					(0, w.$s6)(B.ID, B, w.WorkbenchPhase.BlockRestore);
				const U = "notebook.cell.copy",
					z = "notebook.cell.cut",
					F = "notebook.cell.paste",
					x = "notebook.cell.pasteAbove";
				(0, n.$4X)(
					class extends g.$z5b {
						constructor() {
							super({
								id: U,
								title: (0, t.localize)(7734, null),
								menu: {
									id: n.$XX.NotebookCellTitle,
									when: C.$pJb,
									group: g.CellOverflowToolbarGroups.Copy,
									order: 2,
								},
								keybinding: c.$p
									? void 0
									: {
											primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyC,
											win: {
												primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyC,
												secondary: [p.KeyMod.CtrlCmd | p.KeyCode.Insert],
											},
											when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
											weight: b.KeybindingWeight.WorkbenchContrib,
										},
							});
						}
						async runWithContext(H, q) {
							R(H, q.notebookEditor, q.cell);
						}
					},
				),
					(0, n.$4X)(
						class extends g.$z5b {
							constructor() {
								super({
									id: z,
									title: (0, t.localize)(7735, null),
									menu: {
										id: n.$XX.NotebookCellTitle,
										when: o.$Kj.and(C.$pJb, C.$tJb, C.$DJb),
										group: g.CellOverflowToolbarGroups.Copy,
										order: 1,
									},
									keybinding: c.$p
										? void 0
										: {
												when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
												primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyX,
												win: {
													primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyX,
													secondary: [p.KeyMod.Shift | p.KeyCode.Delete],
												},
												weight: b.KeybindingWeight.WorkbenchContrib,
											},
								});
							}
							async runWithContext(H, q) {
								O(H, q.notebookEditor, q.cell);
							}
						},
					),
					(0, n.$4X)(
						class extends g.$x5b {
							constructor() {
								super({
									id: F,
									title: (0, t.localize)(7736, null),
									menu: {
										id: n.$XX.NotebookCellTitle,
										when: o.$Kj.and(C.$pJb, C.$tJb),
										group: g.CellOverflowToolbarGroups.Copy,
										order: 3,
									},
									keybinding: c.$p
										? void 0
										: {
												when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
												primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyV,
												win: {
													primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyV,
													secondary: [p.KeyMod.Shift | p.KeyCode.Insert],
												},
												linux: {
													primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyV,
													secondary: [p.KeyMod.Shift | p.KeyCode.Insert],
												},
												weight: b.KeybindingWeight.EditorContrib,
											},
								});
							}
							async runWithContext(H, q) {
								const G = H.get(h.$MIb).getToCopy();
								!q.notebookEditor.hasModel() ||
									q.notebookEditor.isReadOnly ||
									(G && A(q.notebookEditor, q.cell, G));
							}
						},
					),
					(0, n.$4X)(
						class extends g.$z5b {
							constructor() {
								super({
									id: x,
									title: (0, t.localize)(7737, null),
									keybinding: {
										when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
										primary: p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyV,
										weight: g.$s5b,
									},
								});
							}
							async runWithContext(H, q) {
								const G = H.get(h.$MIb).getToCopy(),
									K = q.notebookEditor,
									J = K.textModel;
								if (K.isReadOnly || !G) return;
								const W = {
										kind: a.SelectionStateType.Index,
										focus: K.getFocus(),
										selections: K.getSelections(),
									},
									X = q.notebookEditor.getCellIndex(q.cell),
									Y = X;
								J.applyEdits(
									[
										{
											editType: a.CellEditType.Replace,
											index: X,
											count: 0,
											cells: G.items.map((ie) => (0, u.$05)(ie)),
										},
									],
									!0,
									W,
									() => ({
										kind: a.SelectionStateType.Index,
										focus: { start: Y, end: Y + 1 },
										selections: [{ start: Y, end: Y + G.items.length }],
									}),
									void 0,
									!0,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleNotebookClipboardLog",
									title: (0, t.localize2)(
										7739,
										"Toggle Notebook Clipboard Troubleshooting",
									),
									category: l.$ck.Developer,
									f1: !0,
								});
							}
							run(H) {
								T(), I && H.get($.$ek).executeCommand(v.$0Sb);
							}
						},
					),
					(0, n.$4X)(
						class extends g.$z5b {
							constructor() {
								super({
									id: "notebook.cell.output.selectAll",
									title: (0, t.localize)(7738, null),
									keybinding: {
										primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyA,
										when: o.$Kj.and(C.$pJb, C.$rJb),
										weight: g.$t5b,
									},
								});
							}
							async runWithContext(H, q) {
								M(H, (V) => {
									if (!V.hasEditorFocus()) return !1;
									if (V.hasEditorFocus() && !V.hasWebviewFocus()) return !0;
									const G = V.getActiveCell();
									return (
										!G ||
											!G.outputIsFocused ||
											!V.hasWebviewFocus() ||
											(G.inputInOutputIsFocused
												? V.selectInputContents(G)
												: V.selectOutputContent(G)),
										!0
									);
								});
							}
						},
					);
			},
		)
